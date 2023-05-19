export default defineEventHandler(async (event) => {
  if (!event.context.params)
    throw createError({
      statusCode: 405,
      statusMessage: "Method not allowed",
    });

  const post = await ghost.posts
    .browse({
      fields: ["updated_at", "slug"],
      limit: "all",
    })
    .catch((e) => {
      throw createError({
        statusMessage: e,
      });
    });

  return post;
});
