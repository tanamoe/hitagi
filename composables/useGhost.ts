import GhostContentAPI from "@tryghost/content-api";

export const useGhost = () => {
  const runtimeConfig = useRuntimeConfig();

  return new GhostContentAPI({
    url: runtimeConfig.public.ghost_url,
    key: runtimeConfig.public.ghost_content_key,
    version: "v5.0",
  });
};
