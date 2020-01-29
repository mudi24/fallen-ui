import Vue from "vue";
import Button from "./button.vue";
import Icon from "./icon.vue";
import ButtonGroup from "./button-group.vue";
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'

Vue.component("f-button", Button);
Vue.component("f-icon", Icon);
Vue.component("f-button-group", ButtonGroup);
Vue.component('f-input', Input)
Vue.component('f-row', Row)
Vue.component('f-col', Col)

new Vue({
  el: "#app",
  data: {
    loading1: true,
    loading2: false,
    loading3: false,
    message: 'hi'
  },
  created() {
    setTimeout(() => {
      let event = new Event('change')
      let inputElement = this.$el.querySelector('input')
      inputElement.dispatchEvent(event)
    }, 3000)
  },
  methods: {
    inputChange(e) {
      console.log(e)
    }
  }
});