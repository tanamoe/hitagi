import GhostContentAPI from "@tryghost/content-api";

const runtimeConfig = useRuntimeConfig();

export const ghost = new GhostContentAPI({
  url: runtimeConfig.ghost_url,
  key: runtimeConfig.ghost_content_key,
  version: "v5.0",
});
