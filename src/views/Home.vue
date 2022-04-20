<script setup lang="ts">
import type { Owner } from '@/types/Response/Github'
import axios from 'axios'

useHead({
    title: 'Home',
})

const profile = ref<Owner | null>(null)
const loaded = ref<boolean>(false)

const fetchGithub = async () => {
    const response = (await axios.get('https://api.github.com/users/JaavierR'))
        .data
    profile.value = response
    loaded.value = true
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

const experiences = {
    education: [
        {
            title: 'Industrial Engineer',
            position: 'Universidad de Santiago de Chile',
            date: '2015 - 2020',
            url: 'https://admision.usach.cl/carreras/ingenieria-civil-industrial/',
        },
        {
            title: 'Bachelor of Science and Humanities',
            position: 'Universidad de Santiago de Chile',
            date: '2013 - 2015',
            url: 'https://admision.usach.cl/carreras/bachillerato-en-ciencias-y-humanidades/',
        },
    ],
    jobs: [
        {
            title: 'Teacher',
            position: 'Universidad de Santiago de Chile',
            date: '2021 - Present',
        },
        {
            title: 'Full-stack Developer',
            position: 'Developen technology',
            date: '2020 - Present',
        },
        {
            title: 'Intern',
            position: 'IBM - Chile',
            date: '2019 - 2019',
        },
    ],
}
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
            <div
                class="mb-4 h-40 w-40 rounded-full md:mb-0"
                :class="{
                    'animate-pulse bg-gray-100 bg-no-repeat dark:bg-neutral-700':
                        !loaded,
                }"
            >
                <img
                    v-if="profile?.avatar_url"
                    async
                    :src="profile?.avatar_url"
                    :alt="loaded ? 'javier profile image' : ''"
                    class="h-40 w-40 rounded-full object-cover"
                    loading="lazy"
                />
            </div>
        </header>

        <section
            id="experiences"
            class="mt-4 grid gap-6 sm:mt-6 md:mt-10 md:grid-cols-2 md:gap-8"
        >
            <div>
                <h3
                    class="px-4 text-lg font-medium uppercase text-gray-400 dark:text-violet-400"
                >
                    Jobs
                </h3>

                <div class="mt-4 grid gap-2">
                    <CardExperience
                        v-for="(exp, idx) in experiences.jobs"
                        :key="`education-${idx}`"
                        :title="exp.title"
                        :date="exp.date"
                        :position="exp.position"
                    />
                </div>
            </div>
            <div>
                <h3
                    class="px-4 text-lg font-medium uppercase text-gray-400 dark:text-violet-400"
                >
                    Education
                </h3>

                <div class="mt-4 grid gap-2">
                    <CardExperience
                        v-for="(exp, idx) in experiences.education"
                        :key="`education-${idx}`"
                        :title="exp.title"
                        :url="exp.url"
                        :date="exp.date"
                        :position="exp.position"
                    />
                </div>
            </div>
        </section>

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
