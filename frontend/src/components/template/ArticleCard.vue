<template>
    <div class="article-card-container">
        <div class="article-card-image-container">
            <div class="article-image-portrait" :style="{backgroundImage: 'url('+ article.imageUrl +')'}">
                <span class="article-title">
                    {{article.name}}
                </span>
                <div  class="text-content">
                        lore
                </div>
            </div>
            <div v-if="show" class="filter"></div>
        </div>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'
import Gravatar from 'vue-gravatar'
import axios from 'axios'

export default {
    name: 'ArticleCard',
    components: { },
    props: ['article'],
    data() {
      return {
        show: false
      }
    }
}

</script>


<style>

.filter {
    position: absolute;
    width: 100%;
    height: 100%;
    background:rgba(0, 0, 0, 0.39);
    z-index: 0;
}


.article-title {
    padding: 25px;
    font-weight: 800;
    font-size: 35px;
    color: white;
    z-index: 1;
}

.article-card-container{
    /* padding: 5px; */
    width: 100%;
    height: 100%;
    margin: 5px;
    height: 350px;
}

.article-card-image-container {
    /* padding: 10px; */
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
}

.article-card-contact {
    padding: 10px;
    padding-top: 55px;
    display: flex;
    width: 100%;
}

.article-image-portrait {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: initial;
    background-size: cover;
    
}

</style>
