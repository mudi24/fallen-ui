<template>
  <div>
    <h2>button-group</h2>
    <h4>预览</h4>
    <f-button-group>
      <f-button icon="left">上一页</f-button>
      <f-button>更多</f-button>
      <f-button icon="right" icon-position="right">下一页</f-button>
    </f-button-group>
    <h4>代码</h4>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import FButton from "../../../src/button.vue";
import FButtonGroup from "../../../src/button-group.vue";
export default {
  components: {
    "f-button": FButton,
    "f-button-group": FButtonGroup
  },
  data() {
    return {
      content: `
        <f-button-group>
          <f-button icon="left">上一页</f-button>
          <f-button>更多</f-button>
          <f-button icon="right" icon-position="right">下一页</f-button>
        </f-button-group>
      `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  }
};
</script>
