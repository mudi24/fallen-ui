<template>
  <div>
    <h2>简单用法</h2>
    <h4>预览</h4>
    <f-input value="输入框"></f-input>
    <f-input value="禁用" disabled></f-input>
    <f-input value="只读" readonly></f-input>
    <f-input error="输入内容必须符合规则"></f-input>
    <h4>代码</h4>
    <pre><code>{{ content }}</code></pre>

    <h2>双向绑定</h2>
    <h4>预览</h4>
    <f-input v-model="message"></f-input>
    <div>{{message}}</div>
    <h4>代码</h4>
    <pre><code>{{ content2 }}</code></pre>
  </div>
</template>
<script>
import Input from "../../../src/input.vue";
export default {
  components: {
    "f-input": Input
  },
  data() {
    return {
      content: `
      <f-input value="输入框"></f-input>
      <f-input value="禁用" disabled></f-input>
      <f-input value="只读" readonly></f-input>
      <f-input error="输入内容必须符合规则"></f-input>`
        .replace(/\t+|\s{2,}/g, "\n")
        .trim(),
      message: "下面会跟着这里变吗？",
      content2: `
      <f-input v-model="message"></f-input>
        `
        .replace(/\t+|\s{2,}/g, "\n")
        .trim()
    };
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  margin: 4px 0;
}
</style>