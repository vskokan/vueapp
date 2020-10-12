import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/map',
            component: () => import('./views/Map.vue')
        },
        {
            path: '/fish',
            component: () => import('./views/Fish.vue')
        },
        {
            path: '/waterbody',
            component: () => import('./views/Waterbody.vue')
        },
        {
            path: '/profile',
            component: () => import('./views/Profile.vue')
        },
        {
            path: '/partners',
            component: () => import('./views/Partners.vue')
        },
        {
            path: '/reviews',
            component: () => import('./views/Reviews.vue')
        }
    ]
})