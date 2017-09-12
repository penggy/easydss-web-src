import Vue from 'vue'
import Router from 'vue-router'
import AdminLTE from 'components/AdminLTE.vue'

import Index from 'components/Index.vue'
// import Player from 'components/Player.vue'
const Player = () => import(/* webpackChunkName: 'player' */ 'components/Player.vue')
const About = () => import(/* webpackChunkName: 'about' */ 'components/About.vue')

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            component: AdminLTE,
            children: [
                {
                    path: '',
                    component: Index
                }, {
                    path: 'player',
                    component: Player
                }, {
                    path: 'about',
                    component: About
                }
            ]
        }
    ],
    linkActiveClass: 'active'
})

export default router;