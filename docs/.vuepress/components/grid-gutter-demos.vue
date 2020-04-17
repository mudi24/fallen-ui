<template>
  <div class="container">
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
    "f-col": FCol,
  },
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
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
.demoRow {
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid inherit;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.col:nth-child(2n + 1) {
  .demoCol {
    background: rgba(0, 146, 255, 0.75);
  }
}
.col:nth-child(2n) {
  .demoCol {
    background: #0092ff;
  }
}
</style>
