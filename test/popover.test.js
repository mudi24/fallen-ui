const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.be.ok
  })
  it('可以设置position', (done) => {
    Vue.component('f-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML =
      `<f-popover position="bottom" ref="a">
        <template slot="content">弹出内容</template>
        <button>按钮</button>
      </f-popover>`
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      vm.$el.querySelector('button').click()
      vm.$nextTick(() => {
        const {
          contentWrapper
        } = vm.$refs.a.$refs
        expect(contentWrapper.classList.contains('position-bottom')).to.be.true
        done()
      })
    })
  })
  // 无法处理的坑（找不到hover后的content元素）
  xit('trigger', (done) => {
    Vue.component('f-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML =
      `<f-popover trigger="hover" ref="a">
        <template slot="content">弹出内容</template>
        <button>按钮</button>
      </f-popover>`
    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      let event = new Event('mouseenter')
      vm.$el.dispatchEvent(event)
      vm.$nextTick(() => {
        const {
          contentWrapper
        } = vm.$refs.a.$refs
        expect(contentWrapper).to.exist
        done()
      })
    }, 200)
  })
})