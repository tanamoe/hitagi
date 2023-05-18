export default defineEventHandler(async (event) => {
  const posts = await ghost.posts
    .browse({ include: ["authors", "tags"] })
    .catch((e) => {
      throw createError({
        statusMessage: e,
      });
    });

  return posts;
});
