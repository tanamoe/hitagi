import type { ProviderGetImage } from "@nuxt/image-edge";

export const getImage: ProviderGetImage = (src, { modifiers = {} } = {}) => {
  const { width } = modifiers;

  const url = src.replace("images", `images/size/w${width || 1000}`);

  return {
    url,
  };
};
