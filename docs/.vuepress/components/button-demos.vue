<template>
  <div>
    <h2>简单用法</h2>
    <h4>预览</h4>
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
    "f-button": FButton
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
        .trim()
    };
  }
};
</script>
<style>
.f-button {
  margin: 4px 0;
}
</style>