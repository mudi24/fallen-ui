<template>
  <div class="f-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.f-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .f-button {
    border-radius: 0;
    margin-left: -1px;
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      border: 1px solid red;
      position: relative;
      z-index: 1;
    }
  }
}
</style>
