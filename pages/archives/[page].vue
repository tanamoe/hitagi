<script setup lang="ts">
const route = useRoute();

const { data, error } = await useFetch(
  `/api/archives/${route.params.page as string}`
);

if (error.value)
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.statusMessage,
  });
</script>

<template>
  <main>
    <div v-for="post in data" :key="post.id">
      <APostLong :post="post" />
    </div>
  </main>
</template>
