<script setup lang="ts">
defineProps<{ selected: boolean }>()
</script>

<template>
    <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            :class="
                selected
                    ? 'fill-violet-400/20 stroke-violet-500'
                    : 'stroke-slate-400 dark:stroke-slate-500'
            "
        />
        <path
            d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66
        17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6
        6l.835.836"
            :class="
                selected
                    ? 'stroke-violet-500'
                    : 'stroke-slate-400 dark:stroke-slate-500'
            "
        />
    </svg>
</template>
