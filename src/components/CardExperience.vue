<script setup lang="ts">
defineProps<{
    title: string
    position: string
    date?: string
    url?: string
}>()
</script>

<template>
    <div class="overflow-hidden px-4 text-neutral-500 dark:text-neutral-400">
        <div class="flex items-center justify-between space-x-2">
            <a
                :href="url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-neutral-800 hover:underline dark:text-white"
            >
                <h3 class="text-lg">{{ title }}</h3>
            </a>

            <span>{{ date }}</span>
        </div>
        <div class="truncate">{{ position }}</div>
    </div>
</template>
