export default defineEventHandler(async (event) => {
  const posts = await ghost.posts
    .browse({
      include: ["authors", "tags"],
      fields: [
        "slug",
        "feature_image",
        "primary_tag",
        "title",
        "primary_author",
        "created_at",
      ],
    })
    .catch((e) => {
      throw createError({
        statusMessage: e,
      });
    });

  return posts;
});
