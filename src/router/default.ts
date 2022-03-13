export default [
    {
        path: '',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
    },
    {
        path: 'about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
    },
]
