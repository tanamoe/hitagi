<script setup lang="ts">
import { Author } from "@tryghost/content-api";

defineProps<{
  author: Author | null | undefined;
  timestamp: string | null | undefined;
}>();
</script>

<template>
  <div class="mt-3 flex items-center gap-3">
    <NuxtLink
      v-if="author"
      :href="`/author/${author.slug}`"
      class="flex items-center gap-3"
    >
      <img
        v-if="author.profile_image"
        :src="author.profile_image"
        class="h-6 w-6 rounded-full object-cover"
      />
      <span v-if="author">
        {{ author.name }}
      </span>
    </NuxtLink>
    <span v-if="timestamp">&middot;</span>
    <span v-if="timestamp">
      {{ new Date(timestamp).toLocaleDateString("vi-VN") }}
    </span>
  </div>
</template>
