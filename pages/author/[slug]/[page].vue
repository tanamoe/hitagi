<script setup lang="ts">
import type { PostsOrPages } from "@tryghost/content-api";

const route = useRoute();

const { data, error } = await useFetch<PostsOrPages>(
  `/api/author/${route.params.slug as string}/${route.params.page as string}`
);

if (error.value)
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.statusMessage,
  });

const author = data.value?.at(0)?.primary_author;

useSeoMeta({
  title: `Tác giả ${author?.name}`,
  ogTitle: `Tác giả ${author?.name}`,
  description: author?.meta_description,
  ogDescription: author?.meta_description,
  ogImage: author?.profile_image || author?.cover_image,
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
