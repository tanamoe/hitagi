<script setup lang="ts">
import type { PostOrPage } from "@tryghost/content-api";

defineProps<{
  post: PostOrPage;
}>();
</script>

<template>
  <NuxtLink :href="`/posts/${post.slug}`" class="article space-y-6">
    <div class="feature-image relative overflow-hidden transition-shadow">
      <nuxt-picture
        v-if="post.feature_image"
        provider="ghost"
        :src="post.feature_image"
        :alt="post.feature_image_alt || undefined"
      />
    </div>
    <div class="px-6 sm:px-0">
      <span
        v-if="post.primary_tag"
        class="font-bold uppercase text-zinc-600"
        :style="{ color: post.primary_tag.accent_color || undefined }"
      >
        {{ post.primary_tag.name }}
      </span>
      <h2 class="mt-1 font-heading text-3xl">
        {{ post.title }}
      </h2>
      <AMeta :author="post.primary_author" :timestamp="post.created_at" />
    </div>
  </NuxtLink>
</template>

<style scoped>
.article:hover > .feature-image {
  @apply shadow-offset shadow-primary;
}
</style>
