<template>
  <div>
    <h2>设置 gutter</h2>
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
          <f-col span="8" >
            <div>8</div>
          </f-col>
          <f-col>
            <div>8</div>
          </f-col>
          <f-col>
            <div>8</div>
          </f-col>
        </f-row>

        <f-row gutter="10">
          <f-col span="6">
            <div>6</div>
          </f-col>
          <f-col span="6">
            <div>6</div>
          </f-col>
          <f-col span="6">
            <div>6</div>
          </f-col>
          <f-col span="6">
            <div>6</div>
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