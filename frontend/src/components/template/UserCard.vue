<template>
    <div class="user-card-container">
        <div class="user-card-image-container">
            <div class="user-image-portrait">
                <img v-if="user.imageUrl !== null && user.imageUrl !== undefined && user.imageUrl !== ''" :src="user.imageUrl" alt="user">
                <Gravatar v-else :email="user.email" alt="User" />
            </div>
        </div>
        <div class="user-card-name">
            <span>
                {{user.name}}
            </span>
        </div>
    

        <div class="user-card-contact">
            <b-row class="user-card-contact-info">
                <b-col md="12" sm="12">
                    <span>
                        E-mail para contato
                    </span>
                </b-col>
                <b-col md="12" sm="12">
                    <span>
                        {{user.email}}
                    </span>
                </b-col>
        </b-row>
        </div>
        
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'
import Gravatar from 'vue-gravatar'
import axios from 'axios'

export default {
    name: 'UserCard',
    components: { Gravatar },
    props: ['user']
}
</script>


<style>

.user-card-container{
    padding: 5px;
    margin: 5px;
    height: 350px;
    background: white;
    border-radius: 5px;
    -webkit-box-shadow: 2px 2px 0px 0.5px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 2px 0px 0.5px rgba(0,0,0,0.75);
    box-shadow: 2px 2px 0px 0.5px rgba(0,0,0,0.75);
}

.user-card-image-container {
    /* padding: 10px; */
    display: flex;
}

.user-card-name {
    display: flex;
}

.user-card-contact {
    display:  flex;
}

.user-card-name span {
    margin: auto;
    font-size: 20px;
}

.user-image-portrait {
    padding: 10px;
    margin:  auto;
}

.user-card-contact-info {
    margin:  auto;
    text-align: center;
}

.user-card-contact {
    padding: 10px;
    padding-top: 55px;
    display: flex;
    width: 100%;
}

.user-image-portrait img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

</style>
