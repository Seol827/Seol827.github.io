<script setup>
import { posts } from '@/data/posts.js';
</script>

<template>
  <div class="mt-10 mr-10">
    <!-- <div class="text-white w-full h-28 bg-opacity-5 bg-white rounded-xl">1. 첫번째 포스팅</div> -->
    <div v-for="(post, index) in posts" :key="index">
      <div class="text-white w-full h-28 bg-opacity-5 bg-white rounded-xl mt-5 p-5 shadow-lg shadow-slate-50/20">
        <div>{{ post.title }}</div>
        <div>{{ post.content }}</div>
      </div>
    </div>
  </div>
</template>
