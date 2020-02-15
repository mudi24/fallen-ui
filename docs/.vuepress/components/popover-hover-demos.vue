<template>
  <div style="padding-top:16px;">
    <h2>hover 触发弹出层</h2>
    <h4>预览</h4>
    <f-popover trigger="hover">
      <f-button>上方弹出</f-button>
      <template slot="content">弹出内容</template>
    </f-popover>
    <f-popover trigger="hover" position="bottom">
      <f-button>下方弹出</f-button>
      <template slot="content">弹出内容</template>
    </f-popover>
    <f-popover trigger="hover" position="left">
      <f-button>左边弹出</f-button>
      <template slot="content">弹出内容</template>
    </f-popover>
    <f-popover trigger="hover" position="right">
      <f-button>右边弹出</f-button>
      <template slot="content">弹出内容</template>
    </f-popover>
  </div>
</template>
<script>
import FButton from "../../../src/button.vue";
import FPopover from "../../../src/popover.vue";
export default {
  components: {
    "f-button": FButton,
    "f-popover": FPopover
  }
};
</script>
<style scoped>
ul > li {
  list-style: circle;
}
</style>