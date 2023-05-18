export default defineEventHandler(async (event) => {
  if (!event.context.params)
    throw createError({
      statusCode: 405,
      statusMessage: "Method not allowed",
    });

  const post = await ghost.posts
    .browse({
      include: ["authors", "tags"],
      page: parseInt(event.context.params.page),
    })
    .catch((e) => {
      throw createError({
        statusMessage: e,
      });
    });

  return post;
});
