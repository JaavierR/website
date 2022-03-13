<template>
    <div class="space-y-4 rounded-md p-4">
        <div
            class="h-5 w-7/12 animate-pulse rounded-md bg-gray-300 dark:bg-neutral-600/50"
        />

        <div class="space-y-2">
            <div
                class="h-4 w-full animate-pulse rounded-md bg-gray-300 dark:bg-neutral-600/50"
            />
            <div
                class="h-4 w-4/12 animate-pulse rounded-md bg-gray-300 dark:bg-neutral-600/50"
            />
        </div>

        <div class="space-y-2">
            <div
                v-for="i in 3"
                :key="`el-${i}`"
                class="flex items-center justify-between"
            >
                <div
                    class="h-4 w-1/6 animate-pulse rounded-md bg-gray-300 dark:bg-neutral-600/50"
                />
                <div
                    class="h-4 w-1/6 animate-pulse rounded-md bg-gray-300 dark:bg-neutral-600/50"
                />
            </div>
        </div>
    </div>
</template>
