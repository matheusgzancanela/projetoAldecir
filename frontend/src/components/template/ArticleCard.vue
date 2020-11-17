
<template>
    <div class="article-card-container">
        <div class="article-card-image-container">
            <div class="image-container" :style="{backgroundImage: 'url('+ article.imageUrl +')'}">
                <div class="after">
                    <span></span>
                </div>
            </div>
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

.article-card-image-container {
    height: 100%;
    width: 100%;
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
    height: 250px;
}

.image-container {
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: initial;
}

.image-container .after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    color: #FFF;
}

.image-container:hover .after {
    display: block;
    background: rgba(0, 0, 0, .6);
}

</style>

