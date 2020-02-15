<template>
  <div>
    <h2>24格网络</h2>
    <p>功能：使用本组件通过行（row）和列（col）来定义你的页面</p>概述：
    <ul>
      <li>我们把每一行（row）分为24份，如果 row 中的 col 总数超过24，多出来的 col 就会另起一行排列</li>
      <li>你的内容应当放置于 col 内，并且，只有 col 可以作为 row 的直接元素</li>
      <li>
        你可以为元素设置跨越的范围，例如
        <strong>{{text}}</strong>
      </li>
    </ul>
    <h4>预览</h4>
    <f-row class="demoRow">
      <f-col span="12">
        <div class="demoCol">12</div>
      </f-col>
      <f-col span="12">
        <div class="demoCol">12</div>
      </f-col>
    </f-row>
    <f-row class="demoRow">
      <f-col span="4">
        <div class="demoCol">4</div>
      </f-col>
      <f-col span="4">
        <div class="demoCol">4</div>
      </f-col>
      <f-col span="4">
        <div class="demoCol">4</div>
      </f-col>
      <f-col span="4">
        <div class="demoCol">4</div>
      </f-col>
      <f-col span="4">
        <div class="demoCol">4</div>
      </f-col>
      <f-col span="4">
        <div class="demoCol">4</div>
      </f-col>
    </f-row>
  </div>
</template>
<script>
import FRow from "../../../src/row.vue";
import FCol from "../../../src/col.vue";

export default {
  components: {
    "f-row": FRow,
    "f-col": FCol
  },
  data() {
    return {
      text: '<f-col span="6"></f-col>'
    };
  }
};
</script>
<style scoped>
ul > li {
  list-style: circle;
}
.demoRow {
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>