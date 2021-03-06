const queries = require('./queries')

module.exports = app => {
    const { existsOrError } = app.api.validation

    const save = (req, res) => {
        const article = {...req.body }
        if (req.params.id) article.id = req.params.id

        try {
            existsOrError(article.name, 'Nome não informado')
            existsOrError(article.description, 'Descrição não informada')
            existsOrError(article.categoryId, 'Categoria não informada')
            existsOrError(article.userId, 'Autor não informado')
            existsOrError(article.content, 'Conteúdo não informado')
        } catch (msg) {
            res.status(400).send(msg)
        }

        if (article.id) {
            app.db('articles')
                .update(article)
                .where({ id: article.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('articles')
                .insert(article)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async(req, res) => {
        try {
            const rowsDeleted = await app.db('articles')
                .where({ id: req.params.id }).del()

            try {
                existsOrError(rowsDeleted, 'Notícia não foi encontrada.')
            } catch (msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch (msg) {
            res.status(500).send(msg)
        }
    }

    const limit = 10 // usado para paginação
    const get = async(req, res) => {
        const result = await app.db('articles').count('id').first()
        const count = parseInt(result.count)

        app.db('articles')
            .select('id', 'name', 'description')
            .then(articles => res.json({ data: articles, count, limit }))
            .catch(err => res.status(500).send(err))
    }

    const mainPage = async(req, res) => {
        const result = await app.db('articles').count('id').first()
        const count = parseInt(result.count)

        app.db('articles')
            .select('id', 'name', 'description', 'imageUrl')
            .limit(9)
            .orderBy('id', 'desc')
            .then(articles => res.json({ data: articles, count, limit }))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('articles')
            .where({ id: req.params.id })
            .first()
            .then(article => {
                article.content = article.content.toString()
                return res.json(article)
            })
            .catch(err => res.status(500).send(err))
    }

    const getAllComments = (req, res) => {
        app.db('comments')
            .select('comments.id','comments.content', 'users.name as user', 'articles.name as article')
            .join('users', 'users.id', '=', 'comments.userId')
            .join('articles', 'articles.id', '=', 'comments.articleId')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const removeComment = async(req, res) => {
        try {
            const rowsDeleted = await app.db('comments')
                .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, 'Comentario não foi encontrado.')

            res.status(204).send()
        } catch (msg) {
            res.status(400).send(msg)
        }
    }

    const getComments = async(req, res) => {
        app.db('comments')
            .select('comments.content', 'users.name', 'users.logo')
            .join('users', 'users.id', '=', 'comments.userId')
            .where({ 'comments.articleId': req.params.id })
            .orderBy('comments.id', 'desc')
            .then(comments => {
                return res.json(comments)
            })
            .catch(err => res.status(500).send(err))
    }

    const writeComment = async(req, res) => {
        const comment = {...req.body }
        if (req.params.id) article.id = req.params.id
        try {
            existsOrError(comment.userId, 'Usuario não informado')
            existsOrError(comment.content, 'Comentario não informado')
            existsOrError(comment.articleId, 'Artigo não informado')
        } catch (msg) {
            res.status(400).send(msg)
        }
        app.db('comments')
            .insert(comment)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const getByCategory = async(req, res) => {
        const categoryId = req.params.id
        const categories = await app.db.raw(`
        select  
        id,
        name,
        parentId 
        from    (select * from categories
            order by id) categories_sorted,
            (select @pv := ${categoryId}) initialisation
        where   find_in_set(parentId, @pv)
        and     length(@pv := concat(@pv, ',', id))
        `);


        const ids = categories[0].map(c => c.id)

        ids.push(categoryId);

        app.db({ a: 'articles', u: 'users' })
            .select('a.id', 'a.name', 'a.description', 'a.imageUrl', { author: 'u.name' })
            .whereRaw('?? = ??', ['u.id', 'a.userId'])
            .whereIn('categoryId', ids)
            .orderBy('a.id', 'desc')
            .then(articles => res.json(articles))
            .catch(err => res.status(500).send(err))
    }


    return { save, remove, get, getById, getByCategory, mainPage, getAllComments, getComments, writeComment, removeComment }
}