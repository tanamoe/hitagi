<script setup lang="ts">
const ghost = useGhost();

const posts = await ghost.posts
  .browse({ include: ["authors", "tags"] })
  .catch((e) => {
    console.error(e);
  });
</script>

<template>
  <div class="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="(post, i) in posts"
      :key="post.id"
      :class="[i === 0 && 'md:col-span-2 lg:col-span-3']"
    >
      <APostFeatured v-if="i === 0" :post="post" />
      <APostShort v-else :post="post" />
    </div>
  </div>
</template>
