<script setup lang="ts">
import type { PostsOrPages } from "@tryghost/content-api";

defineProps<{
  posts: PostsOrPages;
}>();
</script>

<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: true,
    }"
    :creative-effect="{}"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
  >
    <span class="swiper-button-next">hi</span>

    <SwiperSlide v-for="post in posts" :key="post.id">
      <div class="slide--image relative mb-12 overflow-hidden md:w-4/5">
        <img
          v-if="post.feature_image"
          :src="post.feature_image"
          class="aspect-[3/2] h-full w-full object-cover opacity-0 transition-all ease-in-out"
        />
      </div>
      <NuxtLink
        class="slide--title absolute right-0 top-1/3 z-10 w-1/3 bg-[#fbf0a2] p-6 opacity-0 transition-opacity duration-200 ease-in-out"
        :href="`/posts/${post.slug}`"
      >
        <h2 class="font-heading text-3xl font-bold">
          {{ post.title }}
        </h2>
      </NuxtLink>
    </SwiperSlide>
  </Swiper>
</template>

<style>
.slide--image::before {
  @apply absolute inset-0 z-10 block h-full w-full -translate-x-[101%] bg-[#89c4f4] opacity-0;
  content: "";
  transition: transform 1s cubic-bezier(0.3, 1, 0.7, 1);
}

.swiper-slide-active .slide--image::before {
  @apply translate-x-full opacity-100;
}

.swiper-slide-active .slide--image img {
  @apply opacity-100 delay-300;
}

.slide--title {
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 3rem),
    calc(100% - 3rem) 100%,
    0 100%
  );
}

.swiper-slide-active .slide--title {
  @apply opacity-100;
}
</style>
