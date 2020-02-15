<template>
  <div>
    <h2>设置固定空隙</h2>
    <p>可以用 gutter 属性设置 row 元素之间所有 col 元素之间的空隙</p>
    <h4>预览</h4>
    <f-row class="demoRow" gutter="10">
      <f-col span="8">
        <div class="demoCol">8</div>
      </f-col>
      <f-col span="8">
        <div class="demoCol">8</div>
      </f-col>
      <f-col span="8">
        <div class="demoCol">8</div>
      </f-col>
    </f-row>
    <f-row class="demoRow" gutter="10">
      <f-col span="6">
        <div class="demoCol">6</div>
      </f-col>
      <f-col span="6">
        <div class="demoCol">6</div>
      </f-col>
      <f-col span="6">
        <div class="demoCol">6</div>
      </f-col>
      <f-col span="6">
        <div class="demoCol">6</div>
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