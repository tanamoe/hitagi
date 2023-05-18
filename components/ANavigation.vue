<script setup lang="ts">
const { data } = await useFetch(`/api/setting`);
</script>

<template>
  <nav class="sticky top-0 z-50 h-full w-full bg-zinc-100/75 backdrop-blur-md">
    <div
      class="container mx-auto flex items-center gap-3 overflow-x-scroll px-3"
    >
      <NuxtLink href="/" class="flex-shrink-0 px-3 py-4">
        <img src="/logo.svg" class="h-6" />
      </NuxtLink>
      <div v-if="data && data.navigation" class="flex items-center gap-3">
        <NuxtLink
          v-for="item in data.navigation"
          :key="item.url"
          :href="item.url"
          class="whitespace-nowrap px-3 py-3 text-lg font-bold transition-all"
        >
          <span>{{ item.label }}</span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
