export default defineEventHandler(async () => {
  const settings = await ghost.settings.browse().catch((e) => {
    throw createError({
      statusMessage: e,
    });
  });

  return settings;
});
