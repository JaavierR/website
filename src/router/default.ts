export default [
    {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: 'about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
    },
    {
        path: '/me/repos',
        name: 'Repos',
        component: () => import('@/views/Repos.vue'),
    },
]
