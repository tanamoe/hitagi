<script setup lang="ts">
import type { PostOrPage } from "@tryghost/content-api";

defineProps<{
  post: PostOrPage;
}>();
</script>

<template>
  <NuxtLink
    :href="`/posts/${post.slug}`"
    class="flex flex-col items-center gap-6 md:flex-row"
  >
    <div class="w-full md:w-72">
      <img v-if="post.feature_image" :src="post.feature_image" />
    </div>
    <div class="flex-1">
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
      <div class="mt-3 flex items-center gap-3">
        <img
          v-if="post.primary_author?.profile_image"
          :src="post.primary_author.profile_image"
          class="h-6 w-6 rounded-full object-cover"
        />
        <span v-if="post.primary_author">
          {{ post.primary_author.name }}
        </span>
        &middot;
        <span v-if="post.created_at">{{
          new Date(post.created_at).toLocaleDateString("vi-VN")
        }}</span>
      </div>
    </div>
  </NuxtLink>
</template>
