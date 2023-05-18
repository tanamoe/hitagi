<script setup lang="ts">
import type { PostsOrPages } from "@tryghost/content-api";

const route = useRoute();

const { data, error } = await useFetch<PostsOrPages>(
  `/api/tags/${route.params.slug as string}/${route.params.page as string}`
);

if (error.value)
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.statusMessage,
  });
</script>

<template>
  <div v-if="data">
    <div v-if="data.length == 0" class="h-[90vh]">
      <h4>Không tìm thấy kết quả</h4>
    </div>

    <div v-for="post in data" v-else :key="post.id">
      <APostLong :post="post" />
    </div>

    <APagination
      v-if="data.meta?.pagination"
      :page="data.meta.pagination.page"
      :total="data.meta.pagination.total"
    />
  </div>
</template>
