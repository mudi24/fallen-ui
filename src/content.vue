<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FallenContent"
};
</script>

<style lang='scss' scoped>
*, *::before, *::after { box-sizing: border-box; }
.content {
  flex-grow: 1;
}
</style>

