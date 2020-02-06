<template>
  <div>
    <f-button>默认按钮</f-button>
    <f-button icon="settings">默认按钮</f-button>
    <f-button :loading="true">默认按钮</f-button>
    <f-button disabled>默认按钮</f-button>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import Button from "../../../src/button.vue";
export default {
  components: {
    "f-button": Button
  },
  data() {
    return {
      content: `
      <f-button>默认按钮</f-button>
      <f-button icon="settings">默认按钮</f-button>
      <f-button :loading="true">默认按钮</f-button>
      <f-button disabled>默认按钮</f-button>`
        .replace(/\t+|\s{2,}/g, "\n")
        .trim()
    };
  }
};
</script>
