import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.css'

new Vue({
    components: {
        App
    },
    template: '<app/>',
    router
}).$mount('#app')