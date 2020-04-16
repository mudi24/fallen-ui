<template>
  <div class="container">
    <f-input v-model="message"></f-input>
    <div>{{ message }}</div>
  </div>
</template>
<script>
import FInput from "../../../src/input.vue";
export default {
  components: {
    "f-input": FInput,
  },
  data() {
    return {
      message: "下面会跟着这里变吗？",
    };
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
