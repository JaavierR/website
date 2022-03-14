import { useColorMode, type BasicColorSchema } from '@vueuse/core'

export default function useTheme() {
    const colorMode = useColorMode()

    let localColor: BasicColorSchema = 'auto'

    if (!import.meta.env.SSR) {
        localColor = localStorage.getItem(
            'vueuse-color-scheme'
        ) as BasicColorSchema
    }

    const currentTheme = ref<BasicColorSchema>(localColor || 'auto')

    watchEffect(() => {
        if (currentTheme.value) {
            colorMode.value = currentTheme.value
        }
    })

    return {
        currentTheme,
    }
}
