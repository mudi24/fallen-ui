<template>
  <div class="tabs-header">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FallenTabsHeader",
  inject: ["eventBus"]
};
</script>

<style lang='scss' scoped>
$tabs-height: 40px;
.tabs-header {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
