import defaultRoutes from '@/router/default'

const routes = {
    routes: [
        {
            path: '/',
            name: 'DefaultLayout',
            component: () => import('@/layouts/default.vue'),
            children: defaultRoutes,
        },
    ],
}

export default routes
