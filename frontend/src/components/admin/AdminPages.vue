<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Área administrativa"
            sub="Cadastros, Edições e Exclusões" />
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Notícia" active>
                        <ArticleAdmin />
                    </b-tab>
                    <b-tab title="Categorias">
                        <CategoryAdmin />
                    </b-tab>
                    <b-tab title="Usuários">
                        <UserAdmin />
                    </b-tab>
                    <b-tab title="Comentários">
                        <CommentAdmin />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import ArticleAdmin from './ArticleAdmin'
import CategoryAdmin from './CategoryAdmin'
import UserAdmin from './UserAdmin'
import CommentAdmin from './CommentAdmin'

export default {
    name: 'AdminPages',
    components: { PageTitle, ArticleAdmin, CategoryAdmin, UserAdmin, CommentAdmin }
}
</script>

<style>

</style>
