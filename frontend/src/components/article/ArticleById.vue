<template>
    <div class="article-by-id">
        <PageTitle :main="article.name" :sub="article.description" />
        <div class="article-content" v-html="article.content"></div>
        <div class="comments">
            <h3>Comentários</h3>
            <Comments v-bind:article="article"></Comments>
        </div>
    </div>
</template>

<script>
import 'highlightjs/styles/dracula.css'
import hljs from 'highlightjs/highlight.pack.js'
import { baseApiUrl } from '@/global'
import axios from 'axios'
import PageTitle from '../template/PageTitle'
import Comments from '../template/Comments'

export default {
    name: 'ArticleById',
    components: { PageTitle, Comments },
    data: function() {
        return {
            article: {}
        }
    },
    mounted() {
        const url = `${baseApiUrl}/noticias/${this.$route.params.id}`
        axios.get(url).then(res => this.article = res.data)
    },
    updated() {
        document.querySelectorAll('.article-content pre.ql-syntax').forEach(e => {
            hljs.highlightBlock(e)
        })
    }
}
</script>

<style>
    .comments {
        margin-top: 20px;
    }
    .comments h3 {
        margin-bottom: 20px;
    }
    .article-content {
        background-color: #FFF;
        padding: 25px;
    }

    .article-content pre {
        padding: 20px;
        border-radius: 8px;
        font-size: 1.2rem;
        background-color: #1e1e1e;
        color: #FFF;
    }

    .article-content img {
        max-width: 100%;
    }

    .article-content :last-child {
        margin-bottom: 0px;
    }
</style>
