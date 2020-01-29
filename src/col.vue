<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: [Number, String]
  }
};
</script>

<style lang='scss' scoped>
.col {
  width: 50%;
  height: 100px;
  background: #eee;
  border: 1px solid #ccc;

  $class-prefix: col-; // class 前缀
  @for $n from 1 through 24 {
    // 遍历 1 到 24，$i 表示默认从 0 开始
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
}
</style>
