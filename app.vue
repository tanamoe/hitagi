<script setup lang="ts">
const { data } = await useFetch(`/api/setting`);

useHead({
  htmlAttrs: {
    lang: "vi",
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Tana Blog` : "Tana Blog";
  },
  meta: [{ property: "article:publisher", content: data.value?.facebook }],
});

useSeoMeta({
  ogLocale: data.value?.lang,
  ogSiteName: data.value?.title,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#f8b60b" :height="4" />

    <Head>
      <Link rel="icon" type="image/png" href="/favicon.png" />
      <!--[if IE]><link rel="shortcut icon" href="/favicon.ico" /><![endif]-->
    </Head>

    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  @apply overflow-x-hidden bg-zinc-100 text-zinc-800;
}

.page-enter-active,
.page-leave-active {
  @apply transition-all duration-500;
}

.page-enter-active::before,
.page-leave-active::before {
  @apply fixed inset-0 z-40 bg-primary transition-transform duration-500;
  content: "";
}

.page-enter-from::before {
  @apply translate-x-0;
}

.page-enter-to::before {
  @apply translate-x-full;
}

.page-leave-from::before {
  @apply -translate-x-full;
}

.page-leave-to::before {
  @apply translate-x-0;
}

.page-enter-active::after,
.page-leave-active::after {
  @apply fixed inset-0 z-50 bg-zinc-100 transition-transform delay-200 duration-300;
  content: "";
}

.page-enter-from::after {
  @apply translate-x-0;
}

.page-enter-to::after {
  @apply translate-x-full;
}

.page-leave-from::after {
  @apply -translate-x-full;
}

.page-leave-to::after {
  @apply translate-x-0;
}
</style>
