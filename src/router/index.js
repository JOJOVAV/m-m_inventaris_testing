import Vue from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import MateriaalHome from '../views/materiaal/Home.vue'
import Ontlening from '../views/materiaal/Ontlening.vue'
import Terugbrengen from '../views/materiaal/Terugbrengen.vue'
import LinksHome from '../views/links/Home.vue'
import ShortLinks from '../views/links/Shortlinks.vue'
import Qrcode from '../views/links/Qrcode'
import NotFound from '../views/404NotFound.vue'

// Vue.use(vRouter)

// const routering = new vRouter({
//   routes: [
//     {
//       path: '/',
//       component: Dashboard,
//       children: [
//         {
//           path: 'materiaal',
//           component: Home
//         },
//         {
//           path: 'ontlening',
//           component: Ontlening
//         },
//         {
//           path: 'terug-brengen',
//           component: Terugbrengen
//         }
//       ]
//     }
//   ]

// })


const routes = [
  {
    path: '/',
    name: 'Dashboard',
    // title: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '/dashboard/materiaal',
        name: 'MateriaalHome',
        // title: 'Materiaal',
        component: MateriaalHome,
        children: [
          {
            path: 'ontlening',
            name: 'Ontlenen',
            // title: 'Ontlening',
            component: Ontlening
          },
          {
            path: 'terug-brengen',
            name: 'Terugbrengen',
            // title: 'Terug brengen',
            component: Terugbrengen
          }
        ]
      },
      {
        path: '/dashboard/links',
        name: 'LinksHome',
        // title: 'Links',
        component: LinksHome,
        children: [
          {
            path: 'short-links',
            name: 'Short-links',
            // title: 'short-links',
            component: ShortLinks
          },
          {
            path: 'qr-code',
            name: 'Qr-code',
            // title: 'QR-Code',
            component: Qrcode
          }
        ]
      }
    ]
  },
    
    
    // {
    //   path: '/ontlening',
    //   name: 'Ontlenen',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/Ontlening.vue'),
    // },
    // {
    //   path: '/terug-brengen',
    //   name: 'Terug brengen',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/Terugbrengen.vue'),
    // }

    // 404 page not found redirects
    // redirects 
    {
      path: '/dashboard',
      redirect: '/'
    },
    {
      path: '/:catchAll(.*)',
      name: '404NotFound',
      // title: '404 page not found',
      component: NotFound
    }
  
  ]
  





const router = new createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from) => {
  
  // document.title =  to.title
  document.title = to.name

})



export default router