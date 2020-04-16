<template>
  <div class="container">
    <f-button>默认按钮</f-button>
    <f-button icon="settings">默认按钮</f-button>
    <f-button :loading="true">默认按钮</f-button>
    <f-button disabled>默认按钮</f-button>
  </div>
</template>
<script>
import FButton from "../../../src/button.vue";
export default {
  components: {
    "f-button": FButton,
  },
  data() {
    return {
      content: `
        <f-button>默认按钮</f-button>
        <f-button icon="settings">默认按钮</f-button>
        <f-button :loading="true">默认按钮</f-button>
        <f-button disabled>默认按钮</f-button>
      `
        .replace(/\t+|\s{2,}/g, "\n")
        .trim(),
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
.f-button {
  margin: 4px 0;
}
</style>
