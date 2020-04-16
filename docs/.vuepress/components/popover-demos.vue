<template>
  <div class="container">
    <h2>弹出层</h2>
    <h4>概述</h4>
    <ul>
      <li>position：设置弹出层位置（默认为top）</li>
      <li>
        trigger：设置弹出层触发方式（支持click触发和hover触发两种方式，默认为click）
      </li>
      <li>可为弹出层设置关闭按钮</li>
    </ul>
    <h4>预览</h4>
    <f-popover>
      <f-button>上方弹出</f-button>
      <template slot="content">弹出内容</template>
    </f-popover>
    <f-popover position="bottom">
      <f-button>下方弹出</f-button>
      <template slot="content">弹出内容</template>
    </f-popover>
    <f-popover position="left">
      <f-button>左边弹出</f-button>
      <template slot="content">弹出内容</template>
    </f-popover>
    <f-popover position="right">
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
    "f-popover": FPopover,
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
ul > li {
  list-style: circle;
}
</style>
