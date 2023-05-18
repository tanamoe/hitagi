export default defineEventHandler(async (event) => {
  if (!event.context.params)
    throw createError({
      statusCode: 405,
      statusMessage: "Method not allowed",
    });

  const post = await ghost.posts
    .read({ slug: event.context.params.slug }, { include: ["authors", "tags"] })
    .catch((e) => {
      console.error(e);

      throw createError({
        statusCode: 404,
        statusMessage: "Post not found",
      });
    });

  return post;
});
