<template>
  <div class="container">
    <f-button-group>
      <f-button icon="left">上一页</f-button>
      <f-button>更多</f-button>
      <f-button icon="right" icon-position="right">下一页</f-button>
    </f-button-group>
  </div>
</template>
<script>
import FButton from "../../../src/button.vue";
import FButtonGroup from "../../../src/button-group.vue";
export default {
  components: {
    "f-button": FButton,
    "f-button-group": FButtonGroup,
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
</style>
