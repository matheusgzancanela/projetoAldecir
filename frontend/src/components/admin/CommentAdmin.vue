<template>
    <div class="comment-admin">
        <b-form v-if="mode === 'remove'">
            <input id="comment-id" type="hidden" v-model="comment.id" />
            <b-row >
                <b-col md="6" sm="12">
                    <b-form-group label="Conteúdo:" label-for="comment-content">
                        <b-form-input id="comment-content" type="text"
                            v-model="comment.content" required
                            readonly />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col xs="12">
                    <b-button variant="danger" v-if="mode === 'remove'"
                        @click="remove">Excluir</b-button>
                    <b-button class="ml-2" @click="reset">Cancelar</b-button>
                </b-col>
            </b-row>
        </b-form>
        <hr>
        <b-table hover striped id="table" :items="comments" :fields="fields" :per-page="perPage" :current-page="currentPage" >
            <template slot="actions" slot-scope="data">
                <b-button variant="danger" @click="loadComment(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-constrols="table" ></b-pagination>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'

export default {
    name: 'UserAdmin',
    data: function() {
        return {
            mode: 'save',
            comment: {},
            comments: [],
            perPage: 5,
            currentPage: 1,
            fields: [
                { key: 'id', label: 'Código', sortable: true },
                { key: 'content', label: 'Conteudo', sortable: true },
                { key: 'articleId', label: 'ID Do artigo', sortable: true },
                { key: 'userId', label: 'ID do usuario', sortable: true },
                { key: 'actions', label: 'Ações' }
            ]
        }
    },
    computed: {
        rows() {
            return this.comments.length
        }
    },
    methods: {
        loadComments() {
            const url = `${baseApiUrl}/comentarios`
            axios.get(url).then(res => {
                this.comments = res.data
            })
        },
        reset() {
            this.mode = ''
            this.comment = {}
            this.loadComments()
        },
        remove() {
            const id = this.comment.id
            axios.delete(`${baseApiUrl}/comentarios/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        loadComment(comment, mode = '') {
            this.mode = mode
            this.comment = { ...comment }
        }
    },
    mounted() {
        this.loadComments()
    }
}
</script>

<style>

</style>
