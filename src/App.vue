<template>
  <div id="app">
    <NavBar/>
    <router-view></router-view>
    <!-- <Form/>
    <Usuarios/>  -->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Form from './components/Form.vue'
import NavBar from './components/NavBar.vue'
import Usuarios from './components/Usuarios.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    NavBar,
    // Form,
    // Usuarios
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
