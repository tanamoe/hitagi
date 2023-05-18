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
        :img-attrs="{
          class: 'aspect-[21/9] h-full w-full object-cover',
        }"
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
      <h2 class="mt-1 font-heading text-4xl">
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

.feature-image::before {
  @apply absolute inset-0 z-10 block h-full w-full -translate-x-[101%] bg-primary;
  content: "";
  animation: imagescroll 1s cubic-bezier(0.3, 1, 0.7, 1);
}

.feature-image img {
  animation: fadein 750ms ease-in;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes imagescroll {
  0% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(100%);
  }
}
</style>
