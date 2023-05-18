<script setup lang="ts">
const { data, error } = await useFetch(`/api/home`);

if (error.value)
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.statusMessage,
  });
</script>

<template>
  <div
    v-if="data"
    class="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
  >
    <div
      v-for="(post, i) in data"
      :key="post.id"
      :class="[i === 0 && 'md:col-span-2 lg:col-span-3']"
    >
      <APostFeatured v-if="i === 0" :post="post" />
      <APostShort v-else :post="post" />
    </div>
  </div>
</template>
