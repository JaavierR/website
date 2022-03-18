<script setup lang="ts">
import type { Owner } from '@/types/Response/Github'
import axios from 'axios'

useHead({
    title: 'Home',
})

const profile = ref<Owner | null>(null)

const fetchGithub = async () => {
    const response = (await axios.get('https://api.github.com/users/JaavierR'))
        .data
    profile.value = response
}

fetchGithub()

const skills = [
    'JavaScript',
    'TypeScript',
    'PHP',
    'Python',
    'MySQL',
    'Laravel',
    'Vue.js',
    'Nuxt.js',
    'HTML5',
    'Tailwind CSS',
]
</script>

<template>
    <div class="my-10 space-y-14">
        <header
            class="my-16 flex w-full flex-col-reverse justify-between px-4 md:flex-row md:items-center"
        >
            <div class="w-full space-y-2 md:w-8/12">
                <div class="text-xl font-semibold dark:text-white md:text-3xl">
                    <h2>Self taught</h2>
                    <h2>Full-stack web developer and ML enthusiast</h2>
                </div>
                <p class="text-gray-500 dark:text-neutral-400">
                    Hi there, my name is Javier. I'm a passionate of technology,
                    I like build complex web sites and try new things relaed to
                    Artificial Intelligence and Data Science, and currently I'm
                    also teaching at the University of Santiago of Chile.
                </p>
            </div>
            <div class="mb-4 w-40 rounded-full md:mb-0">
                <img
                    :src="profile?.avatar_url"
                    alt="javier profile image"
                    class="h-40 w-40 rounded-full"
                />
            </div>
        </header>

        <section id="technologies" class="mt-6">
            <h3
                class="px-4 text-lg font-medium uppercase text-gray-400 dark:text-violet-400"
            >
                Technologies I use
            </h3>

            <div class="mt-4 grid gap-4 sm:grid-cols-3 md:grid-cols-4">
                <CardSkill
                    v-for="(skill, i) in skills"
                    :key="`skill-${i}`"
                    :title="skill"
                />
            </div>
        </section>
    </div>
</template>
