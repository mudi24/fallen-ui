<template>
  <div>
    <h2>设置空隙</h2>
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
    <h4>代码</h4>
    <pre><code>{{ content }}</code></pre>
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
      content: `
        *{
          box-sizing: border-box;
        }
        <f-row gutter="10">
          <f-col span="4">
            <div>4</div>
          </f-col>
          <f-col span="4" offset="1">
            <div>4</div>
          </f-col>
          <f-col span="4" offset="4">
            <div>4</div>
          </f-col>
          <f-col span="4" offset="3">
            <div>4</div>
          </f-col>
        </f-row>
        
        <f-row>
          <f-col span="2">
            <div>2</div>
          </f-col>
          <f-col span="2" offset="3">
            <div>2</div>
          </f-col>
          <f-col span="2" offset="6">
            <div>2</div>
          </f-col>
          <f-col span="2" offset="2">
            <div>2</div>
          </f-col>
          <f-col span="2" offset="1">
            <div>2</div>
          </f-col>
          <f-col span="2">
            <div>2</div>
          </f-col>
        </f-row>
      `
        .replace(/^ {8}/gm, "")
        .trim()
    };
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