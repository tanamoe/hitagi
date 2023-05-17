<script setup lang="ts">
const route = useRoute();
const ghost = useGhost();

const post = await ghost.posts
  .read({ slug: route.params.slug as string }, { include: ["authors", "tags"] })
  .catch((e) => {
    console.error(e);

    throw createError({
      statusCode: 404,
      statusMessage: "Không tìm thấy trang",
    });
  });
</script>

<template>
  <article class="mt-12">
    <div class="mb-3">
      <!-- TODO: tag link -->
      <NuxtLink
        v-if="post.primary_tag"
        class="font-bold uppercase text-neutral-600"
        :style="{ color: post.primary_tag.accent_color || undefined }"
      >
        {{ post.primary_tag.name }}
      </NuxtLink>
    </div>
    <h1 class="mb-6 font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
      {{ post.title }}
    </h1>
    <div class="mt-3 flex items-center gap-3">
      <!-- TODO: author slug -->
      <NuxtLink v-if="post.primary_author" class="flex items-center gap-3">
        <img
          v-if="post.primary_author.profile_image"
          :src="post.primary_author.profile_image"
          class="h-6 w-6 rounded-full object-cover"
        />
        <span v-if="post.primary_author">
          {{ post.primary_author.name }}
        </span>
      </NuxtLink>
      &middot;
      <span v-if="post.created_at">
        {{ new Date(post.created_at).toLocaleDateString("vi-VN") }}
      </span>
      &middot;
      <span v-if="post.reading_time">{{ post.reading_time }} phút đọc</span>
    </div>
    <img
      v-if="post.feature_image"
      :src="post.feature_image"
      :alt="post.feature_image_alt || undefined"
      class="my-12"
    />
    <div class="prose mx-auto lg:prose-lg">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="post.html" />
    </div>
  </article>
</template>
