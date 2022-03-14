<template>
    <div
        class="flex h-screen flex-col justify-between bg-gray-50 dark:bg-neutral-900"
    >
        <div
            class="h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-500 dark:via-neutral-500"
        />

        <TheNavbar class="pt-4" />

        <RouterView class="container mx-auto mb-auto w-11/12 sm:w-9/12" />

        <TheFooter />

        <div
            class="h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-500 dark:via-neutral-500"
        />
    </div>
</template>
