<template>
  <div>
    <h2>设置关闭按钮</h2>
    <h4>预览</h4>
    <f-button @click="onClickButton">上方弹出</f-button>
    <h4>代码</h4>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import FButton from "../../../src/button.vue";
import plugin from "../../../src/plugin.js";
import Vue from "vue";
Vue.use(plugin);

export default {
  components: {
    "f-button": FButton
  },
  methods: {
    onClickButton() {
      this.$toast("我在这里提示你", {
        closeButton: {
          text: "我看见了",
          callback: () => {
            console.log("他关闭了提示");
          }
        }
      });
    }
  },
  data() {
    return {
      content: `
        <style>
          .fallen-toast {
            z-index: 30 ;
          }
        </style>

        <f-button @click="onClickButton">上方弹出</f-button>
        
        methods:{
           onClickButton() {
            this.$toast("我在这里提示你", {
              closeButton: {
                text: "我看见了",
                callback: () => {
                  console.log("他关闭了提示");
                }
              }
            });
          }
        }`
        .replace(/^ {8}/gm, "")
        .trim()
    };
  }
};
</script>

<style>
.fallen-toast {
  z-index: 30 !important;
}
</style>
<style  scoped>
* {
  box-sizing: border-box;
}
</style>