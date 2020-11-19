<template>
    <div class="article-card-container">
        <div class="article-card-image-container">
            <router-link :to="{ name: 'articleById', params: { id: article.id }}">
                <div class="image-container" :style="{backgroundImage: article.imageUrl}">
                    <div class="article-title">
                        <h1>{{ article.name }}</h1>
                    </div>
                    <div class="after">
                        <h1>{{ article.description }}</h1>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
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
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
}

.article-title {
    padding: 25px;
    font-weight: 800;
    font-size: 35px;
    color: white;
    z-index: 1;
}

.article-card-container{
    padding: 5px;
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
    color: white;
}

.image-container:hover .after {
    display: block;
    background: rgba(0, 0, 0, 0.7);
}
</style>