<script setup lang="ts">
const route = useRoute();
const ghost = useGhost();

const posts = await ghost.posts
  .browse({
    include: ["authors", "tags"],
    page: parseInt(route.params.page as string),
  })
  .catch((e) => {
    console.error(e);

    throw createError({
      statusCode: 404,
      statusMessage: "Không tìm thấy trang",
    });
  });
</script>

<template>
  <main>
    <div v-for="post in posts" :key="post.id">
      <APostLong :post="post" />
    </div>
  </main>
</template>
