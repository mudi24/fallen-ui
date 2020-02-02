const expect = chai.expect;
import Vue from "vue";
import Tabs from "../src/tabs.vue";
import TabsHeader from '../src/tabs-header.vue'
import TabsBody from '../src/tabs-body.vue'
import TabsItem from '../src/tabs-item.vue'
import TabsPane from '../src/tabs-pane.vue'

Vue.component('f-tabs', Tabs)
Vue.component('f-tabs-header', TabsHeader)
Vue.component('f-tabs-body', TabsBody)
Vue.component('f-tabs-item', TabsItem)
Vue.component('f-tabs-pane', TabsPane)

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Tabs", () => {
  it("存在.", () => {
    expect(Tabs).to.be.exist;
  });
  it('接受 selected prop', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <f-tabs selected="finance">
      <f-tabs-header>
        <f-tabs-item name="woman">美女</f-tabs-item>
        <f-tabs-item name="finance">财经</f-tabs-item>
        <f-tabs-item name="sports">体育</f-tabs-item>
      </f-tabs-header>
      <f-tabs-body>
        <f-tabs-pane name="woman">美女相关</f-tabs-pane>
        <f-tabs-pane name="finance">财经相关</f-tabs-pane>
        <f-tabs-pane name="sports">体育相关</f-tabs-pane>
      </f-tabs-body>
    </f-tabs>
      `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]
      `)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })
  it('可以接受direction prop', () => {})
});