<template>
  <div class="container">
    <h2>手风琴</h2>
    <h4>预览</h4>
    <f-collapse :selected.sync="selectedTab" single>
      <f-collapse-item title="标题1" name="1"
        >门前大桥下，游过一群鸭</f-collapse-item
      >
      <f-collapse-item title="标题2" name="2"
        >快来快来数一数，二四六七八</f-collapse-item
      >
      <f-collapse-item title="标题3" name="3"
        >李雷在和韩梅梅学习外语</f-collapse-item
      >
    </f-collapse>
  </div>
</template>
<script>
import FCollapse from "../../../src/collapse.vue";
import FCollapseItem from "../../../src/collapse-item.vue";
export default {
  components: {
    "f-collapse": FCollapse,
    "f-collapse-item": FCollapseItem,
  },
  data() {
    return {
      selectedTab: ["2"],
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
.collapse > .collapseItem:nth-child(1) {
  background: lightskyblue;
  color: white;
}
.collapse > .collapseItem:nth-child(2) {
  background: deepskyblue;
  color: white;
}
.collapse > .collapseItem:nth-child(3) {
  background: skyblue;
  color: white;
}
</style>
