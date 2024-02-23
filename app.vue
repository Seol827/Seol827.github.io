<script setup>
useHead({
  title: `SEORA'S BLOG`,
  meta: [{ name: `SEORA'S BLOG`, content: 'development blog' }],
});
</script>

<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="postcss" scoped>
#app {
  @apply w-screen max-w-full h-screen max-h-screen;
}
</style>
