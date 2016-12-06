/**
 * Created by Vouill on 29/11/16.
 */
import Vue from 'vue'
import vouilltip from 'src/components/vouilltip'

describe('vouilltip.vue', () => {
  it('should render correct default contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(vouilltip)
    })
    expect(vm.$el.outerHTML).to.equal('<div class="vouilltip"><span class="vouilltip-slot">This will only be displayed if there is no contentto be distributed.</span> <span class="vouilltip-content"></span> <span class="vouilltip-arrow"></span></div>')
  })

  it('should render `content` prop into content', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(vouilltip, {props: {content: 'toto'}})
    })
    expect(vm.$el.outerHTML).to.equal('<div class="vouilltip"><span class="vouilltip-slot">This will only be displayed if there is no contentto be distributed.</span> <span class="vouilltip-content">toto</span> <span class="vouilltip-arrow"></span></div>')
  })

  it('should render with  custom slot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h('div', [h(vouilltip, [h('div', 'Test')])])
    })
    expect(vm.$el.outerHTML).to.equal('<div><div class="vouilltip"><span class="vouilltip-slot"><div>Test</div></span> <span class="vouilltip-content"></span> <span class="vouilltip-arrow"></span></div></div>')
  })
})

