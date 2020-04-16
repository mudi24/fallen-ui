<template>
  <div class="container">
    <h2>布局</h2>
    <h4>简介：</h4>
    <ul>
      <li>f-layout: 外层组件，用来包裹以下组件</li>
      <li>f-header: 顶部栏</li>
      <li>f-content: 内容区</li>
      <li>f-footer: 底部栏</li>
      <li>f-sider: 侧边栏（可选）</li>
    </ul>
    <h4>预览</h4>
    <f-layout style="color: white; ">
      <f-header style="height: 50px; background:lightskyblue;">header</f-header>
      <f-content style="height: 100px; background:deepskyblue;"
        >content</f-content
      >
      <f-footer style="height: 50px; background:lightskyblue;">footer</f-footer>
    </f-layout>
  </div>
</template>
<script>
import FLayout from "../../../src/layout.vue";
import FHeader from "../../../src/header.vue";
import FContent from "../../../src/content.vue";
import FFooter from "../../../src/footer.vue";

export default {
  components: {
    "f-layout": FLayout,
    "f-header": FHeader,
    "f-content": FContent,
    "f-footer": FFooter,
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
