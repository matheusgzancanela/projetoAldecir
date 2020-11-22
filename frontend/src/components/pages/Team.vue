<template>
    <div class="team">
        <b-row class="justify-content-md-center">
            <div class="info">
                <h1>
                    Bem vindo ao portal planeta notícias
                </h1>
                <p>
                    O planeta notícias é uma redação independente composta de editores de variadas ideias
                    e ideologias pronta para trazer diariamente desde os furos, até as fofocas mais quentes,
                    nosso lema é que se dá pra aumentar um pouco a história, concerteza será aumentado, 
                    pois assim fica mais legal de ler. nossa equipe está comprometida em chegar o mais proximo possivel de
                    uma fake news mas sem cruzar a linha da mentira.                  
                </p>

            <h3 v-if="users.length > 0">
                 Nossa equipe de editores
            </h3>
            </div>
        </b-row>

       
        <b-row class="justify-content-md-center">
            
                <b-col v-bind:key="index" v-for="(user, index) in users" md="4" sm="12">
                    <user-card class="user-card" :user="user"></user-card>
                </b-col>
        </b-row>
    </div>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'
import UserCard from '../template/UserCard.vue'

export default {
  components: { UserCard },
    name: 'team',
        data: function() {
            return {
                users: []
            }
        },
    mounted: function() {
            axios.get(`${baseApiUrl}/usuariosAdmin`).then(res => {
                this.users = res.data
            })
    }
    
}
</script>

<style>
    .user-card {
        margin-top: 20px;
    }
    .info {
        padding:  0 15px;
    }
</style>
