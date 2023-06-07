<script setup lang="ts">
import { Author } from "@tryghost/content-api";

defineProps<{
  author: Author | null | undefined;
  timestamp: string | null | undefined;
}>();
</script>

<template>
  <div class="flex items-center gap-3">
    <NuxtLink v-if="author" :to="`/author/${author.slug}`">
      <div class="flex items-center gap-3">
        <img
          v-if="author.profile_image"
          :src="author.profile_image"
          :alt="author.name"
          width="24px"
          height="24px"
          class="h-6 w-6 rounded-full object-cover"
        />
        <span v-if="author">
          {{ author.name }}
        </span>
      </div>
    </NuxtLink>
    <span v-if="timestamp">&middot;</span>
    <span v-if="timestamp">
      {{ new Date(timestamp).toLocaleDateString("vi-VN") }}
    </span>
  </div>
</template>
