<template>
    <div class="text-gray-500 dark:text-neutral-400">
        <header class="my-12 space-y-2 px-4">
            <h1 class="text-4xl text-gray-900 dark:text-neutral-200">
                Repositories
            </h1>
            <p>My public projects on Github.</p>
        </header>

        <main>
            <div v-if="true" class="grid gap-4 md:grid-cols-2">
                <SkeletonLoader
                    v-for="i in 9"
                    :key="`skeleton-${i}`"
                    type="repository"
                />
            </div>
        </main>
    </div>
</template>
