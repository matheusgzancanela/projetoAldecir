
<template>
    <div class="comments-container">
        <b-form>
            <b-row>
                <b-col style="display:flex; margin: 5px" md="10" sm="12">
                    <div class="user-logo">
                        <img v-if="user.logo !== null && user.logo !== undefined && user.logo !== ''" :src="user.logo" alt="">
                        <Gravatar v-else :email="user.email" alt="User" />
                    </div>
                    <span style="margin:auto 10px auto 10px">
                        <b>
                            {{user.name}}
                        </b>
                    </span>
                </b-col>
                <b-col md="10" sm="12">
                    <b-form-group label-for="comment">
                        <b-form-textarea id="article-name" type="text"
                        rows="3" v-model="comment" required />
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12">
                    <b-button :disabled="comment.trim() === ''" variant="primary" @click="post">Comentar</b-button>     
                </b-col>
            </b-row>
        </b-form>
        <b-row :key="index" v-for="(comment, index) in comments">
            <b-col  style="display:flex; margin: 5px" md="10" sm="12">
                <div class="user-logo">
                    <img v-if="comment.logo !== null && comment.logo !== undefined && comment.logo !== ''" :src="comment.logo" alt="">
                    <Gravatar v-else :email="comment.email" alt="User" />
                </div>
                <span style="margin:auto 10px auto 10px">
                    <b>
                        {{comment.name}}
                    </b>
                </span>
            </b-col>
            <b-col md="12" sm="12">
               <span style="margin: 20px 45px;">{{comment.content}}</span>
            <hr>
            </b-col>
        </b-row>
	</div>
</template>

<script>
    import { baseApiUrl, userKey } from '@/global'
    import Gravatar from 'vue-gravatar'
    import axios from 'axios'

    export default {
        name: 'Comments',
        components: { Gravatar },
        props: ['article'],
        data() {
            return {
                comments: {},
                comment: '',
                user: {}
            }
        },
        mounted() {
            setTimeout(()=>{
                const url = `${baseApiUrl}/comentarios/` + this.article.id;
                console.log(url);
                axios.get(url).then(res => {this.comments = res.data})
                this.user = JSON.parse(localStorage.getItem('__knowledge_user'));
            },100);
        },
        methods: {
            post () {
                const url = `${baseApiUrl}/comentar`
                const data = {
                    userId: this.user.id,
                    articleId: this.article.id,
                    content: this.comment
                }
                axios.post(url, data)
                    .then(() => {
                        this.comment = '';
                        const url = `${baseApiUrl}/comentarios/` + this.article.id;
                        axios.get(url).then(res => this.comments = res.data)
                    })
                    .catch(showError)
            }
        }

    }
</script>

<style>
    .comments-container {
        display: block;
    }

    .user-logo {
        width: 30px;
        height: 30px;
    }

    .user-logo img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
</style>