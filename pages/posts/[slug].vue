<script setup lang="ts">
const route = useRoute();

const { data, error } = await useFetch(
  `/api/posts/${route.params.slug as string}`
);

if (error.value)
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.statusMessage,
  });

useHead({
  meta: [
    {
      property: "article:publisher",
      content: data.value?.primary_author?.facebook || undefined,
    },
  ],
});

useSeoMeta({
  title: `${data.value?.title} - Tana Blog`,
  author: data.value?.primary_author?.name,
  ogType: "article",
  ogTitle: data.value?.og_title || data.value?.title,
  description: data.value?.meta_description || data.value?.excerpt,
  ogDescription:
    data.value?.og_description ||
    data.value?.meta_description ||
    data.value?.excerpt,
  ogImage: data.value?.og_image || data.value?.feature_image,
  twitterImage:
    data.value?.twitter_image ||
    data.value?.og_image ||
    data.value?.feature_image,
});
</script>

<template>
  <article v-if="data">
    <header class="flex flex-col">
      <div class="relative w-4/5 self-end">
        <nuxt-picture
          v-if="data.feature_image"
          provider="ghost"
          :src="data.feature_image"
          :alt="data.feature_image_alt || undefined"
          :img-attrs="{
            class: 'aspect-video h-full w-full object-cover',
          }"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-zinc-100 to-transparent to-50%"
        />
      </div>
      <div class="-translate-y-16 px-6 sm:px-0">
        <div class="mb-3">
          <NuxtLink
            v-if="data.primary_tag"
            :href="`/tags/${data.primary_tag.slug}`"
            class="font-bold uppercase text-zinc-600"
            :style="{ color: data.primary_tag.accent_color || undefined }"
          >
            {{ data.primary_tag.name }}
          </NuxtLink>
        </div>
        <h1
          class="mb-6 font-heading text-4xl font-bold md:text-5xl lg:text-6xl"
        >
          {{ data.title }}
        </h1>
        <AMeta :author="data.primary_author" :timestamp="data.created_at" />
      </div>
    </header>
    <div
      class="prose prose-zinc mx-auto lg:prose-lg prose-headings:px-6 prose-p:px-6 prose-a:decoration-2 prose-figcaption:px-6 sm:prose-figcaption:px-0"
    >
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="data.html" />
    </div>
  </article>
</template>

<style>
.prose .kg-callout-card {
  @apply mx-6 flex gap-6 p-6;
}

.kg-callout-emoji {
  @apply text-2xl;
}

.kg-callout-card-grey {
  @apply bg-zinc-200;
}
</style>
