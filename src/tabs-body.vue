<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FallenTabsBody",
  inject: ["eventBus"]
};
</script>

<style lang='scss' scoped>
*, *::before, *::after { box-sizing: border-box; }
</style>
