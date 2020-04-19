<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
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
        active: this.active,
        disabled: this.disabled
      };
    }
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", name => {
        this.active = name === this.name;
      });
    }
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      if (this.eventBus) {
        this.eventBus.$emit("update:selected", this.name, this);
      }
      this.$emit("click", this);
    }
  }
};
</script>

<style lang='scss' scoped>
$blue: #1890ff;
$disabled-text-color: grey;
*, *::before, *::after { box-sizing: border-box; }
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
  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>
