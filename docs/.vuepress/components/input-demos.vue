<template>
  <div class="container">
    <f-input value="输入框"></f-input>
    <f-input value="禁用" disabled></f-input>
    <f-input value="只读" readonly></f-input>
    <f-input error="输入内容必须符合规则"></f-input>
  </div>
</template>
<script>
import FInput from "../../../src/input.vue";
export default {
  components: {
    "f-input": FInput,
  },
};
</script>
<style scoped>
.container {
  max-width: 800px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 15px;
}
.container:hover {
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3), 0 2px 4px 0 rgba(0, 0, 0, 0.3);
}
.wrapper {
  margin: 4px 0;
}
</style>
