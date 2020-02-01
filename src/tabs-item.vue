<template>
  <div class="tabs-item" @click="xx" :class="classes">
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
  data() {
    return {
      active: false
    };
  },
  computed: {
    classes() {
      return {
        active: this.active
      };
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = name === this.name;
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
$blue: #1890ff;
.tabs-item {
  flex-shrink: 1;
  padding: 0 1em;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  &.active {
    color: $blue;
    font-weight: bold;
  }
}
</style>
