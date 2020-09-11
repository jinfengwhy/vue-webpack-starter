import VueRouter from 'vue-router'
import Home from './components/home/Home.vue'
import CrudList from './components/crud/List.vue'

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/crud',
            component: CrudList
        }
    ]
})