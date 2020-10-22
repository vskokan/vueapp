import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/views/Home'
Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            component: () => import('./views/Map.vue')
        },
        {
            path: '/test',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/fish',
            component: () => import('./views/Fish.vue')
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
        },
        {
            path: '/databases',
            component: () => import('./views/Databases.vue'),
            children: [
                {
                    path: 'fishes',
                    component: () => import('./views/Tables/Fishes.vue')
                }, 
                {
                    path: 'methods',
                    component: () => import('./components/Tables/Empty.vue')
                },
                {
                    path: 'baits',
                    component: () => import('./components/Tables/Empty.vue')
                },
                {
                    path: 'users',
                    component: () => import('./components/Tables/Empty.vue')
                },
                {
                    path: 'reviews',
                    component: () => import('./components/Tables/Empty.vue')
                },
                {
                    path: 'facts',
                    component: () => import('./components/Tables/Empty.vue')
                },
                {
                    path: 'cities',
                    component: () => import('./components/Tables/Empty.vue')
                },
                {
                    path: 'districts',
                    component: () => import('./components/Tables/Empty.vue')
                },
                {
                    path: 'shops',
                    component: () => import('./components/Tables/Empty.vue')
                },
                {
                    path: 'discounts',
                    component: () => import('./components/Tables/Empty.vue')
                },
            ],
            redirect: '/databases/fishes'
        },
        { 
            path: '/404', 
            component: () => import('./views/404.vue'), 
        }, 
        { 
            path: '*', 
            redirect: '/404' 
        },
    ]
})