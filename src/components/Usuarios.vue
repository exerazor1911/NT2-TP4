<template>

  <section class="src-components-usuarios">
   <div class="jumbotron">
     <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Avatar</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Telefono</th>
    </tr>
  </thead>
  <tbody v-for="(usuario,index) in usuarios" :key="index">
      <tr>
        <img class="my-2" :src="usuario.imagen" width="120" :alt="usuario.nombre" :style="{'border-radius' : '15px'}">
        <td class="align-middle">{{usuario.nombre}}</td>
        <td class="align-middle">{{usuario.apellido}}</td>
        <td class="align-middle">{{usuario.telefono}}</td>
      </tr>
  </tbody>
</table>
   </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-usuarios',
    props: [],
    mounted () {
      this.getUsuarios()
    },
    data () {
      return {
        url: "https://62856fea96bccbf32d62d26c.mockapi.io/usuarios",
        usuarios: []
      }
    },
    methods: {
     async getUsuarios() {
       let {data: usuarios} = await this.axios(this.url)
       console.log(usuarios);
       this.usuarios = usuarios
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-usuarios {

  }

  .jumbotron {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffff88+0,ffff88+100;Yellow+Flat+%231 */
background: #ffff88; /* Old browsers */
background: -moz-linear-gradient(-45deg,  #ffff88 0%, #ffff88 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(-45deg,  #ffff88 0%,#ffff88 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(135deg,  #ffff88 0%,#ffff88 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffff88', endColorstr='#ffff88',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

  }
</style>
