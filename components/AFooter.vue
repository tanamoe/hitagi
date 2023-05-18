<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <div class="bg-zinc-800 py-3 text-zinc-50">
    <div class="container mx-auto px-3">
      <span
        ><NuxtLink href="https://tana.moe">Tana</NuxtLink> &copy;
        {{ year }}</span
      >
    </div>
  </div>
</template>
