import VueRouter from 'vue-router'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

export default new VueRouter({
    routes: [
        {
            path: '/foo',
            component: Foo
        },
        {
            path: '/bar',
            component: Bar
        },
    ]
})