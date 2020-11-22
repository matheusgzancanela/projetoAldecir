<template>
  <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="E-mail:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Digite seu e-mail"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Assunto:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.subject"
          required
          placeholder="Digite aqui o assunto"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label-for="input-3">
        <VueEditor v-model="form.text" required
                    placeholder="Informe o conteúdo do seu email." />
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
                this.reset()
     },
     reset() {
       this.form = {}
     }
    }
  }
</script>