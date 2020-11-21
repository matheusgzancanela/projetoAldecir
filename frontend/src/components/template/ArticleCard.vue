
<template>
    <div class="news">
        <router-link :to="{ name: 'articleById', params: { id: article.id }}">
            <figure class="article">
                <img v-if="article.imageUrl" :src="article.imageUrl" />
                <img v-else src="@/assets/noticia.png" />
                <figcaption>
                    <h3>{{ article.name }}</h3>
                    <p>{{ article.description }}</p>
                </figcaption>
            </figure>
        </router-link>
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
.news .article figcaption {
  position: absolute;
}
.rel,

.news .article {
  position: relative;
  box-shadow: inset 0 0 1em black, 0 0 1em black;
  border: rgba(0,0,0,0.2);
  border-radius: 10px;
}
.fix {
  position: fixed;
}
.dfix {
  display: inline;
}
.dib {
  display: inline-block;
}
.db {
  display: block;
}
.dn {
  display: none;
}
.df,
.news {
  display: flex;
}
.dif {
  display: inline-flex;
}
.dg {
  display: grid;
}
.dig {
  display: inline-grid;
}
.vm,
body {
  background: #24282f;
  font-family: 'Alegreya Sans';
}
.wrapper {
  padding: 15px;
}
.news {
  flex-flow: row wrap;
}
.news .article {
  overflow: hidden;
  margin: 20px;
}
.news .article img {
  width: 100%;
  min-height: 100%;
  transition: 0.2s;
}
.news .article figcaption {
  font-size: 14px;
  text-shadow: 0 1px 0 rgba(51,51,51,0.3);
  color: #fff;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 40px;
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
  background: rgba(6,18,53,0.6);
  opacity: 0;
  transform: scale(1.15);
  transition: 0.2s;
}
.news .article figcaption h3 {
  color: #3792e3;
  font-size: 16px;
  margin-bottom: 0;
  font-weight: bold;
}
.news .article:hover img,
.news .article:focus img,
.news .article:active img {
  filter: blur(3px);
  transform: scale(0.97);
}
.news .article:hover figcaption,
.news .article:focus figcaption,
.news .article:active figcaption {
  opacity: 1;
  transform: none;
}
</style>