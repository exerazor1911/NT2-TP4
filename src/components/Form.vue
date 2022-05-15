<template>
  <section class="src-components-form">
    <div class="jumbotron">
      <h2>Formulario</h2>
      <vue-form :state="formState" @submit.prevent="enviar()">
        <validate class="mt-3" tag="div">
          <span>Nombre</span>
          <input id="nombre" :minlength="nombreMinLength" :maxlength="nombreMaxLength" type="text" autocomplete="off" class="form-control" v-model.trim="formData.nombre" required name="nombre" />
        </validate>
        <validate class="mt-2" tag="div">
          <span>Edad</span>
          <input id="edad" :min="edadMin" :max="edadMax" type="number" autocomplete="off" class="form-control" v-model.trim="formData.edad" required name="edad" />
        </validate>
        <validate class="mt-2" tag="div">
          <span>E-mail</span>
          <input id="email" type="email" autocomplete="off" class="form-control" v-model.trim="formData.email" required name="email" />
           <field-messages show="$dirty" name="nombre">
            <div class="alert-danger mt-3" slot="required">Nombre es un campo requerido!</div>
            <div class="alert-danger mt-3" slot="minlength">El Nombre debe poseer un minimo de {{nombreMinLength}} caracteres!</div>
            <div class="alert-danger mt-3" slot="maxlength">El Nombre debe poseer un maximo de {{nombreMaxLength}} caracteres!</div>
          </field-messages>
           <field-messages show="$dirty" name="edad">
            <div class="alert-danger mt-3" slot="required">Edad es un campo requerido!</div>
            <div class="alert-danger mt-3" slot="min">Debe ser Mayor de edad!</div>
            <div class="alert-danger mt-3" slot="max">Debe ser una persona, no un dinosaurio!</div>
          </field-messages>
          <field-messages show="$dirty" name="email">
            <div class="alert-danger mt-3" slot="required">E-mail es un campo requerido!</div>
            <div class="alert-danger mt-3" slot="email">E-mail invalido!</div>
          </field-messages>
        </validate>
        <button class="btn btn-success my-3" :disabled="formState.$invalid" >Enviar</button>
      </vue-form>
      <Table :data="formData" v-show="formState.$valid"/>
    </div>
  </section>
</template>

<script lang="js">

import Table from './Table'

  export default  {
    name: 'src-components-form',
    components: {
      Table
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData: this.getInicialData(),
        nombreMinLength: 5,
        nombreMaxLength: 15,
        edadMin: 18,
        edadMax: 120,
        propData: {}
      }
    },
    methods: {


      getInicialData() {

        return {
          nombre: '',
          edad: '',
          email: ''
        }
      },

      enviar() {
        console.log({...this.formData});

        this.formData = this.getInicialData()

        this.formState._reset()


      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.src-components-form {
}

.jumbotron {
  background-color: aqua;

}
</style>
