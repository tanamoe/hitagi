<template>
  <div class="container mx-auto p-6">
    <hr class="mb-6 h-3 w-24 border-none bg-zinc-400" />
    <div class="flex justify-between">
      <ul class="flex gap-3 text-2xl text-zinc-400">
        <NuxtLink
          href="https://facebook.com/mangaglhf"
          class="transition-colors duration-100 ease-linear hover:text-[#1877f2]"
          aria-label="Facebook"
        >
          <Icon name="bi:facebook" />
        </NuxtLink>
        <NuxtLink
          href="https://twitter.com/tanamoeeee"
          class="transition-colors duration-100 ease-linear hover:text-[#1da1f2]"
          aria-label="Twitter"
        >
          <Icon name="bi:twitter" />
        </NuxtLink>
        <NuxtLink
          href="https://discord.gg/Fj5jZe6ZMX"
          class="transition-colors duration-100 ease-linear hover:text-[#5865f2]"
          aria-label="Discord"
        >
          <Icon name="bi:discord" />
        </NuxtLink>
        <NuxtLink
          href="https://github.com/tanamoe"
          class="transition-colors duration-100 ease-linear hover:text-[#161b22]"
          aria-label="GitHub"
        >
          <Icon name="bi:github" />
        </NuxtLink>
      </ul>
      <ul class="flex flex-row gap-6 text-zinc-500">
        <li>
          <a
            class="transition-colors duration-100 ease-linear hover:text-zinc-700"
            href="/sitemap.xml"
          >
            Sitemap
          </a>
        </li>
        <li>
          <a
            class="transition-colors duration-100 ease-linear hover:text-zinc-700"
            href="mailto:konnichiwa@tana.moe"
          >
            Liên hệ
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
