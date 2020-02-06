<template>
  <div>
    <f-popover>默认按钮</f-popover>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import Popover from "../../../src/popover.vue";
export default {
  components: {
    "f-popover": Popover
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
