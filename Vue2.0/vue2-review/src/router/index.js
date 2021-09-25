import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import store from '@/store/index.js'

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
  {
    path: '/404',
    name: 'page404',
    component: () => import('@/views/404.vue')
  },
  {
    path: '*',
    redirect:'/404'
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

// const turnTo = (to, access, next) => {//这个是用来判断是否有权限访问当前页面，可以先跳过，在下面的路由判断里面会用到。
//   if (canTurnTo(to.name, access)) {
//     next() // 有权限，可访问
//   } else {
//     next({ replace: false, name: 'error_401' }) // 无权限，重定向到401页面
//   }
// }

// // 登录token管理与过滤，卸载vue中的全局守卫中最好不过了。
// router.beforeEach((to, from, next) => {
//   const token = store.state.token;//先获取到登录时在vuex里存的token
//   // 开始判断，如果token存在
//   if (token) {
//     if (to.name === 'login') {//token已经存在还跳转的是登录页面，则跳转到首页
//       next({ name: 'home' })//这里跳转到哪自己更改
//     } else {//tokend存在跳转的不是登录页，则需要判断权限
//       if (store.state.setHasGetInfo) {//是否获取了用户信息，这个也是在vuex里存的一个开关，登录后保存信息后保存为true.
//         turnTo(to, store.state.access, next);//然后进行路由的权限判断，因为后台的权限不一样，每个人跳转的页面是可以分配的，所以后端会返回每个用户可以跳转的页面权限，登录时保存在vuex里。
//       } else {//如果没有获取用户信息，则根据token重新获取用户信息保存起来，这里主要是为刷新页面准备的，因为刷新页面时vuex里的东西都会没有了.
//   //但用户信息很多，不能都保存在session里来防止刷新，所以session里只保存了token,来防止刷新后token也不见了。
//         getUserInfo().then(d => {//当页面刷新后然后重新请求接口，后端会根据token来重新获取到用户的信息。
//           if (d.data.code === 100000) {
//             turnTo(to, d.data.data.menus, next);//然后再次进行判断
//             store.dispatch('setInfo', d.data.data)//重新将用户信息保存起来
//           } else {
//             store.dispatch('removeInfo')
//             next({
//               name: 'login'
//             })
//           }
//         }).catch(err => {
//           // 请求失败则删除掉所有保存的信息，并跳转回登录页面
//           store.dispatch('removeInfo')
//           next({
//             name: 'login'
//           })
//         })
//       }
//     }
//   } else {//如果没有token，就简单了，如果跳转的是登录页，则让他跳转就好了，如果跳转的是其他页面，统统跳到登录页面去。
//     if (to.name === 'login') {
//       next()
//     } else {
//       next({ name: 'login' })
//     }
//   }
// })
// //这个是配置浏览器窗口标题。
// router.afterEach(to => {
//   setTitle(to, router.app)
//   // iView.LoadingBar.finish()
//   window.scrollTo(0, 0)
// })


export default router
