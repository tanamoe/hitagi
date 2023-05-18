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

const tag = data.value?.at(0)?.primary_tag;

useSeoMeta({
  title: `${tag?.name} - Tana Blog`,
  ogTitle: tag?.og_title || tag?.name,
  description: tag?.description,
  ogDescription:
    tag?.og_description || tag?.meta_description || tag?.description,
  ogImage: tag?.og_image || tag?.feature_image,
});
</script>

<template>
  <div v-if="data">
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
