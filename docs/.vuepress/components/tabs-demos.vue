<template>
  <div class="container">
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
    "f-tabs-pane": FTabsPane,
  },
  data() {
    return {
      selected: "2",
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
ul > li {
  list-style: circle;
}
</style>
