<template>
  <div>
    <h2>标签</h2>
    <h4>注意：</h4>
    <ul>
      <li>
        f-tabs（
        <strong>必须</strong>传入默认选择的tab）
      </li>
      <li>
        f-tabs-item（
        <strong>必须</strong>传入name属性）（可选属性：disabled）
      </li>
      <li>
        f-tabs-pane（
        <strong>必须</strong>传入name属性）
      </li>
    </ul>
    <h4>预览</h4>
    <f-tabs :selected="selected">
      <f-tabs-header>
        <f-tabs-item name="1">tab 1</f-tabs-item>
        <f-tabs-item name="2">tab 2</f-tabs-item>
        <f-tabs-item name="3">tab 3</f-tabs-item>
      </f-tabs-header>
      <f-tabs-body>
        <f-tabs-pane name="1">content 1</f-tabs-pane>
        <f-tabs-pane name="2">content 2</f-tabs-pane>
        <f-tabs-pane name="3">content 3</f-tabs-pane>
      </f-tabs-body>
    </f-tabs>
    <h4>代码</h4>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import FTabs from "../../../src/tabs.vue";
import FTabsHeader from "../../../src/tabs-header.vue";
import FTabsBody from "../../../src/tabs-body.vue";
import FTabsItem from "../../../src/tabs-item.vue";
import FTabsPane from "../../../src/tabs-pane.vue";

export default {
  components: {
    "f-tabs": FTabs,
    "f-tabs-header": FTabsHeader,
    "f-tabs-body": FTabsBody,
    "f-tabs-item": FTabsItem,
    "f-tabs-pane": FTabsPane
  },
  data() {
    return {
      selected: "2",
      content: `
        data(){
          return{
            selected:'2'
          }
        }

        <f-tabs :selected="selected">
          <f-tabs-header>
            <f-tabs-item name="1">tab 1</f-tabs-item>
            <f-tabs-item name="2">tab 2</f-tabs-item>
            <f-tabs-item name="3">tab 3</f-tabs-item>
          </f-tabs-header>
          <f-tabs-body>
            <f-tabs-pane name="1">content 1</f-tabs-pane>
            <f-tabs-pane name="2">content 2</f-tabs-pane>
            <f-tabs-pane name="3">content 3</f-tabs-pane>
          </f-tabs-body>
        </f-tabs>
      `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  }
};
</script>
<style scoped>
</style>