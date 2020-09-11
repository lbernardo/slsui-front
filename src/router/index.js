import Vue from 'vue'
import VueRouter from 'vue-router'
import Provider from '@/views/Provider';
import Lambda from '@/views/Lambda';
import AddLambda from '@/views/Lambda/AddLambda';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Provider',
    component: Provider,
  },
  {
    path: "/lambda",
    name: "Lambda",
    component: Lambda,
  },
  { 
    path: "/lambda/add",
    name: "AddLambda",
    component: AddLambda,
  },
  {
    path: "/lambda/edit/:id",
    name: "EditLambda",
    component: AddLambda,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
