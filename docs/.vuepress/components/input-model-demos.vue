<template>
  <div>
    <h2>双向绑定</h2>
    <h4>预览</h4>
    <f-input v-model="message"></f-input>
    <div>{{message}}</div>
  </div>
</template>
<script>
import FInput from "../../../src/input.vue";
export default {
  components: {
    "f-input": FInput
  },
  data() {
    return {
      message: "下面会跟着这里变吗？"
    };
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  margin: 4px 0;
}
</style>