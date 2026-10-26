<template>
  <div>
    <!-- 随机友链按钮 -->
    <div class="flex justify-end mb-6">

      <button class=" text-[var(--primary)] btn-regular  scale-animation rounded-lg h-[2.90rem] px-4 sm:px-5 font-bold active:scale-95 gap-2"
        @click="randomJump">
        <Icon icon="fa6-solid:arrow-right-arrow-left" class="transition text-[var(--primary)]">
        </Icon>
        <span class="hidden sm:inline text-[var(--primary)]">随机一个友链</span>
      </button>
    </div>

    <!-- 原有的友链网格 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 my-4">
      <LinkCard v-for="link in randomLinks" :key="link.link" :title="link.title" :desc="link.desc" :link="link.link"
        :img="link.img" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed } from "vue";
import LinkCard from "./LinkCard.vue";

const links: { title: string; link: string; desc: string; img: string }[] = [
  {
    title: "慕雨棠的博客",
    link: "https://lzh8639-max.github.io/mizuki-blog/",
    img: "/favicon/logo.jpg",
    desc: "记录学习与生活",
  },
  // 按上面同样的格式追加友链即可
];

const randomLinks = computed(() => links.sort(() => Math.random() - 0.5));

// 随机跳转方法
const randomJump = () => {
  const index = Math.floor(Math.random() * links.length);
  const url = links[index]?.link;
  if (url) {
    window.open(url, "_blank");
  }
};
</script>
