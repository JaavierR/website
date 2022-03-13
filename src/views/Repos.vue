<script setup lang="ts">
import axios from 'axios'

import type { Repository } from '@/types/Response/Github'
const repos = ref<Repository[] | null>(null)
const pending = ref<boolean>(true)

const fetchRepos = async () => {
    const filter = [
        'JaavierR',
        'dailleventos-db',
        'blockchain-py',
        'Covid-19_R_DataCamp',
        'ascii-generator',
        'wsl-config-pdf',
    ]

    const response: Repository[] = (
        await axios.get(
            'https://api.github.com/users/JaavierR/repos?per_page=100'
        )
    ).data

    repos.value = response
        ?.filter((repo) => repo.fork === false && !filter.includes(repo.name))
        ?.sort((a, b) => b?.stargazers_count - a?.stargazers_count)

    pending.value = false
}

fetchRepos()
</script>

<template>
    <div class="text-gray-500 dark:text-neutral-500">
        <header class="my-12 space-y-2 px-4">
            <h1 class="text-4xl text-gray-900 dark:text-neutral-200">
                Repositories
            </h1>
            <p>My public projects on Github.</p>
        </header>

        <main>
            <div v-if="pending" class="grid gap-4 md:grid-cols-2">
                <SkeletonLoader
                    v-for="i in 9"
                    :key="`skeleton-${i}`"
                    type="repository"
                />
            </div>

            <div v-else class="grid gap-4 md:grid-cols-2">
                <a
                    v-for="(repo, index) in repos"
                    :key="`repo-${index}`"
                    :href="repo.html_url"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <CardRepository
                        :name="repo.name"
                        :language="repo.language"
                        :description="repo.description"
                        :homepage="repo.homepage"
                        class="h-full"
                    />
                </a>
            </div>
        </main>
    </div>
</template>
