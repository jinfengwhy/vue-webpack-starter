import VueRouter from 'vue-router'
import Home from './components/home/Home.vue'
import CrudList from './components/crud/List.vue'
import CrudNew from './components/crud/New.vue'
import CrudUpdate from './components/crud/Update.vue'

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/crud',
            component: CrudList
        },
        {
            path: '/crud/new',
            component: CrudNew
        },
        {
            path: '/crud/update',
            component: CrudUpdate
        }
    ]
})