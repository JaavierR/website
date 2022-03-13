<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
    <div
        class="flex items-center justify-between space-x-2 overflow-x-hidden rounded-md p-4 transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800/40"
    >
        <div>
            <h2
                class="truncate font-medium text-gray-700 dark:text-neutral-200"
            >
                {{ title }}
            </h2>
        </div>

        <div class="shrink-0">
            <IconTech :brand="title" class="h-7 w-7 shrink-0" />
        </div>
    </div>
</template>
