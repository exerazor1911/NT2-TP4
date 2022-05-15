<template>

  <section class="src-components-table">
    <div class="jumbotron">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>E-mail</th>
        </tr>
        </thead>
        <tr>
          <td class="text-dark">{{data.nombre}}</td>
          <td class="text-dark">{{data.edad}}</td>
          <td class="text-dark">{{data.email}}</td>
        </tr>
        </table>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-table',
    props: {
      data: {
        type: Object
      }
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-table {

  }

  .jumbotron {
  background-color: aqua;

}
</style>
