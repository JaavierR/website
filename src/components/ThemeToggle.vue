<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/vue'
import SunIcon from '@/components/SunIcon.vue'
import MoonIcon from '@/components/MoonIcon.vue'
import PcIcon from '@/components/PcIcon.vue'

const colorMode = useColorMode()
const currentTheme = ref(localStorage.getItem('vueuse-color-scheme') || 'auto')

const settings = [
    {
        value: 'light',
        label: 'Light',
        icon: SunIcon,
    },
    {
        value: 'dark',
        label: 'Dark',
        icon: MoonIcon,
    },
    {
        value: 'auto',
        label: 'System',
        icon: PcIcon,
    },
]

watchEffect(() => {
    if (currentTheme.value === 'light') {
        colorMode.value = 'light'
    } else if (currentTheme.value === 'dark') {
        colorMode.value = 'dark'
    } else if (currentTheme.value === 'auto') {
        colorMode.value = 'auto'
    }
})
</script>

<template>
    <Listbox v-model="currentTheme">
        <ListboxLabel class="sr-only">Theme</ListboxLabel>
        <ListboxButton type="button">
            <span class="dark:hidden">
                <SunIcon class="h-6 w-6" :selected="currentTheme !== 'auto'" />
            </span>
            <span class="hidden dark:inline">
                <MoonIcon class="h-6 w-6" :selected="currentTheme !== 'auto'" />
            </span>
        </ListboxButton>
        <ListboxOptions
            class="absolute top-full right-0 z-50 mt-4 w-36 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-slate-700 shadow-lg ring-1 ring-slate-900/10 dark:bg-neutral-800 dark:text-neutral-300 dark:ring-0 dark:highlight-white/5"
        >
            <ListboxOption
                v-for="setting in settings"
                v-slot="{ active, selected }"
                :key="setting.value"
                :value="setting.value"
                as="template"
            >
                <li
                    class="flex cursor-pointer items-center py-1 px-2"
                    :class="[
                        selected && 'text-violet-500',
                        active && 'bg-slate-50 dark:bg-slate-600/30',
                    ]"
                >
                    <Component
                        :is="setting.icon"
                        class="mr-2 h-6 w-6"
                        :selected="selected"
                    />
                    {{ setting.label }}
                </li>
            </ListboxOption>
        </ListboxOptions>
    </Listbox>
</template>
