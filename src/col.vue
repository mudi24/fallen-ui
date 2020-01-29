<template>
  <div
    class="col"
    :class="[span && `col-${span}`, offset && `offset-${offset}`]"
    :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2 +'px'}"
  >
    <div style="border: 1px solid green; height:100px">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FallenCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  data() {
    return {
      gutter: 0
    };
  }
};
</script>

<style lang='scss' scoped>
.col {
  width: 50%;
  // background: #eee;
  // border: 1px solid #ccc;

  $class-prefix: col-; // class 前缀
  @for $n from 1 through 24 {
    // 遍历 1 到 24，$i 表示默认从 0 开始
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    // 遍历 1 到 24，$i 表示默认从 0 开始
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
