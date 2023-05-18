export default defineEventHandler(async (event) => {
  if (!event.context.params)
    throw createError({
      statusCode: 405,
      statusMessage: "Method not allowed",
    });

  const post = await ghost.posts
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
      filter: `tag:${event.context.params.slug}`,
      page: parseInt(event.context.params.page),
    })
    .catch((e) => {
      throw createError({
        statusMessage: e,
      });
    });

  return post;
});
