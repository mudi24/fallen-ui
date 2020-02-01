<template>
  <div class="tabs-header">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FallenTabsHeader",
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", (item, vm) => {});
  }
};
</script>

<style lang='scss' scoped>
$tabs-height: 40px;
$blue: #1890ff;
.tabs-header {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    width: 100px;
  }
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
