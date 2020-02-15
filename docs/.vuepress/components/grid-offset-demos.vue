<template>
  <div>
    <h2>自定义每个空隙</h2>
    <p>可以用 offset 属性任意设置两个 col 元素之间的空隙</p>
    <h4>预览</h4>
    <f-row class="demoRow" gutter="10">
      <f-col span="4">
        <div class="demoCol">4</div>
      </f-col>
      <f-col span="4" offset="1">
        <div class="demoCol">4</div>
      </f-col>
      <f-col span="4" offset="4">
        <div class="demoCol">4</div>
      </f-col>
      <f-col span="4" offset="3">
        <div class="demoCol">4</div>
      </f-col>
    </f-row>
    <f-row class="demoRow">
      <f-col span="2">
        <div class="demoCol">2</div>
      </f-col>
      <f-col span="2" offset="3">
        <div class="demoCol">2</div>
      </f-col>
      <f-col span="2" offset="6">
        <div class="demoCol">2</div>
      </f-col>
      <f-col span="2" offset="2">
        <div class="demoCol">2</div>
      </f-col>
      <f-col span="2" offset="1">
        <div class="demoCol">2</div>
      </f-col>
      <f-col span="2">
        <div class="demoCol">2</div>
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
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
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