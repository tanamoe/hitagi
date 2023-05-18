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
</script>

<template>
  <article v-if="data" class="mt-12">
    <div class="mb-3">
      <!-- TODO: tag link -->
      <NuxtLink
        v-if="data.primary_tag"
        class="font-bold uppercase text-zinc-600"
        :style="{ color: data.primary_tag.accent_color || undefined }"
      >
        {{ data.primary_tag.name }}
      </NuxtLink>
    </div>
    <h1 class="mb-6 font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
      {{ data.title }}
    </h1>
    <div class="mt-3 flex items-center gap-3">
      <!-- TODO: author slug -->
      <NuxtLink v-if="data.primary_author" class="flex items-center gap-3">
        <img
          v-if="data.primary_author.profile_image"
          :src="data.primary_author.profile_image"
          class="h-6 w-6 rounded-full object-cover"
        />
        <span v-if="data.primary_author">
          {{ data.primary_author.name }}
        </span>
      </NuxtLink>
      &middot;
      <span v-if="data.created_at">
        {{ new Date(data.created_at).toLocaleDateString("vi-VN") }}
      </span>
      &middot;
      <span v-if="data.reading_time">{{ data.reading_time }} phút đọc</span>
    </div>
    <img
      v-if="data.feature_image"
      :src="data.feature_image"
      :alt="data.feature_image_alt || undefined"
      class="my-12"
    />
    <div class="prose mx-auto lg:prose-lg">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="data.html" />
    </div>
  </article>
</template>
