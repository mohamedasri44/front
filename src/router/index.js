import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/clients',
      name: 'ClientIndex',
      component: () => import('../views/Clients/ClientIndex.vue'),
    },
    {
      path: '/clients/create',
      name: 'ClientCreate',
      component: () => import('../views/Clients/ClientCreate.vue'),
    },
    {
      path: '/clients/:id/edit',
      name: 'ClientEdit',
      component: () => import('../views/Clients/ClientEdit.vue'),
      props: true,
    },



    
    {
      path: '/sdas',
      name: 'SdaIndex',
      component: () => import('../views/Sdas/SdaIndex.vue'),
    },
    {
      path: '/sdas/create',
      name: 'SdaCreate',
      component: () => import('../views/Sdas/SdaCreate.vue'),
    },
    {
      path: '/sdas/:id/edit',
      name: 'SdaEdit',
      component: () => import('../views/Sdas/SdaEdit.vue'),
      props: true,
    },





    {
      path: '/ClientSda',
      name: 'ClientSdaIndex',
      component: () => import('../views/ClientSda/ClientSdaIndex.vue'),
    },
    {
      path: '/ClientSda/create',
      name: 'ClientSdaCreate', 
      component: () => import('../views/ClientSda/ClientSdaCreate.vue'),
    },





    {
      path: '/Activites/create',
      name: 'ActivitesCreate',
      component: () => import('../views/Activites/ActivitesCreate.vue'),
    },
    {
      path: '/Activites',
      name: 'ActivitesIndex',
      component: () => import('../views/Activites/ActivitesIndex.vue'),
    },
    {
      path: '/Activites/:id/edit',
      name: 'ActivitesEdit',
      component: () => import('../views/Activites/ActivitesEdit.vue'),
      props:true
    }
  ]
})

export default router
