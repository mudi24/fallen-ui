<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FallenTabsItem",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang='scss' scoped>
.tabs {
}
</style>
