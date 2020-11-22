<template>
  <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your subject:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.subject"
          required
          placeholder="Enter subject"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Your Text:" label-for="input-3">
        <VueEditor v-model="form.text" required
                    placeholder="Informe o Conteúdo do seu email." />
      </b-form-group>

      <b-button variant="primary"
                @click="send">Enviar</b-button>
      <b-button class="ml-2" @click="reset">Cancelar</b-button>
    </b-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor"
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'

  export default {
    name: "Email",
    components: { VueEditor },
    data() {
      return {
        form: {
          email: '',
          subject: '',
          text: '',
        },
        show: true
      }
    },
    methods: {
     send() {
       const method = 'post'
       axios[method](`${baseApiUrl}/enviar-email`, this.form)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
     },
     reset() {

     }
    }
  }
</script>