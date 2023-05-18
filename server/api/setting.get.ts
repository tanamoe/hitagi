export default defineEventHandler(async (event) => {
  const settings = await ghost.settings.browse().catch((e) => {
    throw createError({
      statusMessage: e,
    });
  });

  return settings;
});
