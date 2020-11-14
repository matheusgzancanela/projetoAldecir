<template>
    <div class="team">
        <b-row class="justify-content-md-center">
            <div class="info">
                <h1>
                    Lorem ipsum dolor sit amet,
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus arcu vel dolor commodo sollicitudin. Aenean mattis ultricies massa nec accumsan. Donec laoreet orci a congue rutrum. Suspendisse eros augue, euismod quis sodales eget, rutrum sed massa. Suspendisse potenti. Nunc id lacus lobortis, efficitur sem id, semper leo. Duis non erat egestas, ornare ex in, dapibus est. Mauris fringilla eros id augue tempus varius. Vestibulum vel congue ex. Integer sit amet mattis orci. Donec euismod leo pulvinar lorem semper, sit amet posuere mauris commodo. Quisque convallis eleifend congue.
                </p>

            <h1>
                 Nossa equipe de editores
            </h1>
            </div>
        </b-row>

       
        <b-row class="justify-content-md-center">
            
                <b-col v-bind:key="user" v-for="(user) in users" md="4" sm="12">
                    <user-card class="user-card" :user="user"></user-card>
                </b-col>
        </b-row>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'
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
