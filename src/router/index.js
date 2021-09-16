import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/pages/Login'
import Products from '@/components/pages/Products'
import CustomerOrder from '@/components/pages/CustomerOrders'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '*',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'Loginin',
      component: Login
    },
    {
      path: '/admin',
      name: 'Dashboard_products',
      component: Dashboard,
      children: [{
        path: 'products',
        name: 'Products',
        component: Products,
        meta: {
          requiresAuth: true
        },
      }]
    },
    {
      path: '/',
      name: 'Dashboard_CustomerOrder',
      component: Dashboard,
      children: [{
        path: 'customer_order',
        name: 'CustomerOrder',
        component: CustomerOrder,
      }]
    }
  ]
})
