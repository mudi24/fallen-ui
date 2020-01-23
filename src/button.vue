<template>
  <button class="f-button">按钮</button>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.f-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
}
</style>
