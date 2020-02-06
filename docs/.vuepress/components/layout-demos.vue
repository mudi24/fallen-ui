<template>
  <div>
    <f-layout>默认按钮</f-layout>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import Layout from "../../../src/layout.vue";
export default {
  components: {
    "f-layout": Layout
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
