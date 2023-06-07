<script setup lang="ts">
defineProps<{
  page: number;
  total: number;
}>();
</script>

<template>
  <div>
    <NuxtLink v-if="page > 1" :to="`/archives/${page - 1}`">first</NuxtLink>
    <NuxtLink v-if="page < total" :to="`/archives/${total}`">last</NuxtLink>
  </div>
</template>
