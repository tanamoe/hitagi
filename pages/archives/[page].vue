<script setup lang="ts">
import type { PostsOrPages } from "@tryghost/content-api";

const route = useRoute();

const { data, error } = await useFetch<PostsOrPages>(
  `/api/archives/${route.params.page as string}`
);

if (error.value)
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.statusMessage,
  });

useSeoMeta({
  title: `Lưu trữ trang ${route.params.page}`,
  ogTitle: `Lưu trữ trang ${route.params.page}`,
});
</script>

<template>
  <div v-if="data" class="md:px-6">
    <div v-if="data.length == 0" class="h-[90vh]">
      <h4>Không tìm thấy kết quả</h4>
    </div>

    <div v-for="post in data" v-else :key="post.id">
      <APostLong :post="post" class="mb-6" />
    </div>

    <APagination
      v-if="data.meta?.pagination"
      :page="data.meta.pagination.page"
      :total="data.meta.pagination.total"
    />
  </div>
</template>
