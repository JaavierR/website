<script setup lang="ts">
import {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/vue'

// Composables
import useTheme from '@/composables/use-theme'

// Components
import IconSun from '@/components/IconSun.vue'
import IconMoon from '@/components/IconMoon.vue'
import IconPc from '@/components/IconPc.vue'

const { currentTheme } = useTheme()

const settings = [
    {
        value: 'light',
        label: 'Light',
        icon: IconSun,
    },
    {
        value: 'dark',
        label: 'Dark',
        icon: IconMoon,
    },
    {
        value: 'auto',
        label: 'System',
        icon: IconPc,
    },
]
</script>

<template>
    <Listbox v-model="currentTheme">
        <ListboxLabel class="sr-only">Theme</ListboxLabel>
        <ListboxButton type="button">
            <span class="dark:hidden">
                <IconSun class="h-6 w-6" :selected="currentTheme !== 'auto'" />
            </span>
            <span class="hidden dark:inline">
                <IconMoon class="h-6 w-6" :selected="currentTheme !== 'auto'" />
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
