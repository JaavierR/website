<script setup lang="ts">
type SkeletonType = 'repository' | 'block'

defineProps<{
    type: SkeletonType
}>()
</script>

<template>
    <SkeletonLoaderRepository v-if="type === 'repository'" />
</template>
