<script setup lang="ts">
useHead({
    title: 'Home',
})

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
    <div>
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
