<template>
  <div style="padding-top:16px;">
    <h2>折叠面板</h2>
    <h4>简介：</h4>
    <ul>
      <li>
        f-collapse（传入的 selectedTab 应该是一个
        <strong>数组</strong>，里面包含被选中的 tab标签）
      </li>
      <li>
        f-collapse（支持
        <strong>single</strong> 属性，添加
        <strong>single</strong> 属性组件变为手风琴效果）
      </li>
      <li>
        f-collapse-item（
        <strong>必须</strong>传入
        <strong>title 和 name</strong>）
      </li>
    </ul>
    <h4>预览</h4>
    <f-collapse :selected.sync="selectedTab">
      <f-collapse-item title="标题1" name="1">两只老虎，两只老虎，跑得快，跑得快</f-collapse-item>
      <f-collapse-item title="标题2" name="2">一只没有耳朵，一只没有尾巴</f-collapse-item>
      <f-collapse-item title="标题3" name="3">好奇怪，好奇怪</f-collapse-item>
    </f-collapse>
    <h4>代码</h4>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import FCollapse from "../../../src/collapse.vue";
import FCollapseItem from "../../../src/collapse-item.vue";
export default {
  components: {
    "f-collapse": FCollapse,
    "f-collapse-item": FCollapseItem
  },
  data() {
    return {
      selectedTab: ["2", "3"],
      content: `
        <f-collapse :selected.sync="selectedTab" >
          <f-collapse-item title="标题1" name="1">
            内容1
          </f-collapse-item>
          <f-collapse-item title="标题2" name="2">
            内容2
          </f-collapse-item>
          <f-collapse-item title="标题3" name="3">
            内容3
          </f-collapse-item>
        </f-collapse>`
        .replace(/^ {8}/gm, "")
        .trim()
    };
  }
};
</script>
<style scoped>
ul > li {
  list-style: circle;
}
.collapse > .collapseItem:nth-child(1) {
  background: rgb(240, 240, 240);
  color: blcak;
}
.collapse > .collapseItem:nth-child(3) {
  background: rgb(220, 220, 220);
  color: black;
}
.collapse > .collapseItem:nth-child(2) {
  background: rgb(210, 210, 210);
  /* color: white; */
}
</style>