<script setup lang="ts">
const { data, error } = await useFetch(`/api/home`);

const settingRes = await useFetch(`/api/setting`);
const setting = settingRes.data;

if (error.value)
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.statusMessage,
  });

useSeoMeta({
  title: setting.value?.title,
  ogTitle: setting.value?.og_title,
  description: setting.value?.description,
  ogDescription: setting.value?.og_description,
  ogImage: setting.value?.og_image || setting.value?.cover_image,
  twitterImage:
    setting.value?.twitter_image ||
    setting.value?.og_image ||
    setting.value?.cover_image,
});
</script>

<template>
  <div>
    <div
      class="mb-12 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 md:px-6 lg:grid-cols-3"
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
    <NuxtLink to="/archives/1" class="flex items-center justify-end gap-3 px-6">
      <span>Xem thêm</span><Icon name="bi:arrow-right" />
    </NuxtLink>
  </div>
</template>
