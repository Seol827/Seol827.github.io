<template>
  <div class="layout">
    <side-nav />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<style lang="postcss" scoped>
.layout {
  @apply relative w-full h-full flex;
}

.main {
  @apply relative w-full h-full flex;
}
</style>
