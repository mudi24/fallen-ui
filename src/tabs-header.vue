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
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      let { width, height, top, left } = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left}px`;
    });
  }
};
</script>

<style lang='scss' scoped>
$tabs-height: 40px;
$blue: #1890ff;
$border-color: #ddd;
.tabs-header {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    border-radius: 4px;
    transition: all 0.35s;
  }
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    padding: 0 1em;
  }
}
</style>
