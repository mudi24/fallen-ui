<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FallenContent",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.content {
  flex-grow: 1;
}
</style>

