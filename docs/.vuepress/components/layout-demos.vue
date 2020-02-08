<template>
  <div>
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
    <f-layout style="color: white; margin-bottom:50px;">
      <f-header style="height: 50px; background:lightskyblue;">header</f-header>
      <f-content style="height: 100px; background:deepskyblue;">content</f-content>
      <f-footer style="height: 50px; background:lightskyblue;">footer</f-footer>
    </f-layout>
    <h4>代码</h4>
    <pre><code>{{ content }}</code></pre>
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
    "f-footer": FFooter
  },
  data() {
    return {
      content: `
        <f-layout style="color: white; margin-bottom:50px;">
          <f-header style="height: 50px; background:lightskyblue;">
            header
          </f-header>
          <f-content style="height: 100px; background:deepskyblue;">
            content
          </f-content>
          <f-footer style="height: 50px; background:lightskyblue;">
            footer
          </f-footer>
        </f-layout>`
        .replace(/^ {8}/gm, "")
        .trim()
    };
  }
};
</script>

<style scoped>
ul > li {
  list-style: circle;
}
</style>