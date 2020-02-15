<template>
  <div>
    <h2>sider布局</h2>
    <h4>预览</h4>
    <f-layout style="color: white; overflow:hidden; ">
      <f-header style="height: 50px; background:lightskyblue;">header</f-header>
      <f-layout>
        <f-sider style="height: 100px; background:#ddd; width:200px; color: black;">sider</f-sider>
        <f-content style="height: 100px; background:deepskyblue;">content</f-content>
      </f-layout>
      <f-footer style="height: 50px; background:lightskyblue;">footer</f-footer>
    </f-layout>
  </div>
</template>
<script>
import FLayout from "../../../src/layout.vue";
import FHeader from "../../../src/header.vue";
import FContent from "../../../src/content.vue";
import FFooter from "../../../src/footer.vue";
import FSider from "../../../src/sider.vue";
export default {
  components: {
    "f-layout": FLayout,
    "f-header": FHeader,
    "f-content": FContent,
    "f-sider": FSider,
    "f-footer": FFooter
  }
};
</script>
