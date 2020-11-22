<template>
    <div class="home">
        <div class="head">
            <PageTitle main="Planeta Notícias"
                sub="últimas noticias registradas" />
        </div>
        <b-row>
            <!-- class="justify-content-md-center" -->
                <b-col v-bind:key="index" v-for="(article, index) in articles" md="6" sm="12">
                    <article-card v-if="index < 2" class="artile-card" :article="article"></article-card>
                </b-col>
                <b-col v-bind:key="index + 100" v-for="(article, index) in articles" md="4" sm="12">
                    <article-card v-if="index > 2" class="artile-card" :article="article"></article-card>
                </b-col>
        </b-row>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import ArticleCard from '../template/ArticleCard.vue'
import { baseApiUrl } from '@/global'
import axios from 'axios'

export default {
    name: 'Home',
    components: { PageTitle, ArticleCard },
    data: function() {
        return {
            articles: []
        }
    },
    mounted: function() {
            axios.get(`${baseApiUrl}/noticias/pagina_inicial`).then(res => {
                this.articles = res.data.data
            })
    }
}
</script>

<style>
    .head {
        text-align: center;
    }

    .article-card {
        margin-top: 20px;
    }
</style>
