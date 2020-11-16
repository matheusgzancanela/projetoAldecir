const admin = require('./admin')

module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/usuarios')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.user.save))
        .get(admin(app.api.user.get))

    app.route('/usuariosAdmin')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.user.getAdmin))

    app.route('/usuarios/:id')
        .all(app.config.passport.authenticate())
        .put(admin(app.api.user.save))
        .get(admin(app.api.user.getById))
        .delete(admin(app.api.user.remove))

    app.route('/categorias')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.category.get))
        .post(admin(app.api.category.save))

    app.route('/categorias/tree')
        .all(app.config.passport.authenticate())
        .get(app.api.category.getTree)

    app.route('/categorias/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.category.getById)
        .put(admin(app.api.category.save))
        .delete(admin(app.api.category.remove))

    app.route('/noticias')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.article.get))
        .post(admin(app.api.article.save))

    app.route('/noticias/pagina_inicial')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.article.mainPage))

    app.route('/noticias/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getById)
        .put(admin(app.api.article.save))
        .delete(admin(app.api.article.remove))

    app.route('/categorias/:id/noticias')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getByCategory)
}