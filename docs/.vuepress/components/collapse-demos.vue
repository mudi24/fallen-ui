<template>
  <div class="container">
    <f-collapse :selected.sync="selectedTab">
      <f-collapse-item title="一致性 Consistency" name="1"
        >与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
        在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</f-collapse-item
      >
      <f-collapse-item title="反馈 Feedback" name="2">
        控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
        页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</f-collapse-item
      >
      <f-collapse-item title="效率 Efficiency" name="3"
        >简化流程：设计简洁直观的操作流程；
        清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
        帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</f-collapse-item
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
      selectedTab: ["2", "3"],
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
  background: skyblue;
  color: white;
}
.collapse > .collapseItem:nth-child(2) {
  background: deepskyblue;
  color: white;
}
.collapse > .collapseItem:nth-child(3) {
  background: lightskyblue;
  color: white;
}
</style>
