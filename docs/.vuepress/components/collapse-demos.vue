<template>
  <div>
    <f-collapse>默认按钮</f-collapse>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import Collapse from "../../../src/collapse.vue";
export default {
  components: {
    "f-collapse": Collapse
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
