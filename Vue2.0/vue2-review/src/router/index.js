import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // redirect:'/about', 
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    // mate:{
    //   keepAlive:true
    // },
    children: [
      {
        path: 'demo1',
        name: 'demo1',
        component: () => import('../views/tab/demo1.vue')
      },
      {
        path: '/about/demo2/:id/:age',
        name: 'demo2',
        props: {
          person: {
            name: '小明',
            age: 18
          }
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/tab/demo2.vue')
      }
    ]
  },
  {
    path: '/slotparent',
    name: 'slotParent',
    component: () => import('../views/slotParent.vue'),
    // redirect:'/about', 
  },
  {
    path: '/paging',
    name: 'paging',
    component: () => import('../views/paging.vue'),
    children: [
      {
        path: '/paging/view/:id/10',
        name: 'demo2',
        props: {
          person: {
            name: '小明',
            age: 18
          }
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/tab/demo2.vue')
      }
    ]
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(from);
  console.log(to);
  console.log(`-----------------------------`);
  next();
})


export default router
