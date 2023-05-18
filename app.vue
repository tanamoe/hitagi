<script setup lang="ts">
const { data } = await useFetch(`/api/setting`);

useSeoMeta({
  ogLocale: data.value?.lang,
  ogSiteName: data.value?.title,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <NuxtLayout>
    <Head>
      <Link rel="icon" type="image/png" href="/favicon.png" />
      <!--[if IE]><link rel="shortcut icon" href="/favicon.ico" /><![endif]-->
    </Head>

    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  @apply bg-zinc-100 text-zinc-800;
}
</style>
