<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });

useSeoMeta({
  title: `${props.error.statusMessage} - Tana Blog`,
});
</script>

<template>
  <NuxtLayout>
    <div class="flex h-[90vh] flex-col items-center justify-center gap-6">
      <h1 class="font-heading text-8xl">{{ error.statusCode }}</h1>
      <p>Đã có một lỗi xảy ra: {{ error.statusMessage }}</p>
      <button
        class="bg-primary p-3 transition-shadow hover:shadow-offset hover:shadow-black"
        @click="handleError"
      >
        Trở về trang chủ
      </button>
    </div>
  </NuxtLayout>
</template>

<style>
html {
  @apply bg-zinc-100 text-zinc-800;
}
</style>
