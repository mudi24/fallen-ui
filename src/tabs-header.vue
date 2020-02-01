<template>
  <div class="tabs-header">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: "FallenTabsHeader"
};
</script>

<style lang='scss' scoped>
.tabs {
}
</style>
