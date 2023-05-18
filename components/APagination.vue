<script setup lang="ts">
defineProps<{
  page: number;
  total: number;
}>();
</script>

<template>
  <div>
    <NuxtLink v-if="page > 1" :href="`/archives/${page - 1}`">first</NuxtLink>
    <NuxtLink v-if="page < total" :href="`/archives/${total}`">last</NuxtLink>
  </div>
</template>
