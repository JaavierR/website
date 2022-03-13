import { ViteSSG } from 'vite-ssg'

import App from '@/App.vue'
import routes from '@/router'
import '@/index.css'

export const createApp = ViteSSG(App, routes, (ctx) => {
    Object.values(import.meta.globEager('./modules/*.ts')).forEach((i) =>
        i.install?.(ctx)
    )
})
