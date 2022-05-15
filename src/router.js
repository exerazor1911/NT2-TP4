import Vue from 'vue'
import VueRouter from 'vue-router'

import Form from './components/Form.vue'
import Usuarios from './components/Usuarios.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/' , redirect: '/formulario'},
        {path: '/formulario' , component: Form},
        {path: '/usuarios', component: Usuarios}
    ]
})