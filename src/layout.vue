<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FallenLayout",
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    };
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === "FallenSider") {
        this.layoutClass.hasSider = true;
      }
    });
  }
};
</script>

<style lang='scss' scoped>
*, *::before, *::after { box-sizing: border-box; }
.layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &.hasSider {
    flex-direction: row;
  }
}
</style>

