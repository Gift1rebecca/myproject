import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header-footer/Header.vue'
import Footer from './components/Header-footer/Header.vue'

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('app-header',Header)
Vue.component('app-footer',Footer)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).mount('#app')

export const bus = new Vue();

new Vue({
    el:'#app',
    render: h => h(App)
});

