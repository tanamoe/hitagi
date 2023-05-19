export default cachedEventHandler(
  async () => {
    const posts = await $fetch("/api/posts");
    return posts.map((p) => {
      return {
        loc: `/posts/${p.slug}`,
        priority: 0.7,
        changefreq: "always",
        lastmod: p.updated_at,
      };
    });
  },
  {
    name: "sitemap-dynamic-urls",
    maxAge: 60 * 10, // cache URLs for 10 minutes
  }
);
