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
    <div class="space-y-14">
        <header class="my-16 px-4">
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perspiciatis eligendi ipsum eveniet, eum asperiores ut
                voluptates eos nesciunt, labore similique esse necessitatibus
                aspernatur numquam commodi ab id earum, repellendus natus?
            </p>
            <div class="mb-4 rounded-full md:mb-0">
                <img
                    :src="profile?.avatar_url"
                    alt="javier profile image"
                    class="h-30 w-30 rounded-full md:h-40 md:w-40"
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
