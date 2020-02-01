<template>
  <div class="tabs-item" @click="xx">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FallenTabsItem",
  inject: ["eventBus"],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      console.log(name);
    });
  },
  methods: {
    xx() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>

<style lang='scss' scoped>
.tabs {
}
</style>
