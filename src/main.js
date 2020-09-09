import Vue from 'vue'
import App from './App.vue'
import router from './router'

console.log(11)
console.log(router)

new Vue({
    components: {
        App
    },
    template: '<app/>',
    router
}).$mount('#app')