<script setup lang="ts">
defineProps<{
    name: string
    description?: string
    language?: string
    homepage?: string
}>()
</script>

<template>
    <div
        class="flex h-full cursor-pointer flex-col justify-between rounded-md p-4 text-gray-500 transition-colors hover:bg-gray-200/40 dark:text-neutral-500 dark:hover:bg-neutral-800/40"
    >
        <div class="space-y-2">
            <div class="flex justify-between space-x-2">
                <h3
                    class="items-center truncate text-gray-700 dark:text-neutral-400"
                >
                    <span class="text-violet-500 dark:text-violet-400"
                        >JaavierR/</span
                    >{{ name }}
                </h3>
            </div>

            <p class="text-gray-500 line-clamp-2 dark:text-neutral-500">
                {{ description }}
            </p>
        </div>

        <div class="mt-4">
            <div class="flex items-center justify-between">
                <span>Languaje:</span>
                {{ language }}
            </div>

            <div v-if="homepage" class="flex items-center justify-between">
                <a
                    :href="homepage"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-violet-500 underline"
                    >LiveApp</a
                >
            </div>
        </div>
    </div>
</template>
