<template>
  <div>
    <f-tabs>默认按钮</f-tabs>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import Header from "../../../src/header.vue";
import Content from "../../../src/content.vue";
import Footer from "../../../src/footer.vue";
import Sider from "../../../src/sider.vue";

export default {
  components: {
    "f-tabs": Tabs,
    "f-tabs-header": TabsHeader,
    "f-tabs-body": TabsBody,
    "f-tabs-item": TabsItem,
    "f-tabs-pane": TabsPane
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
