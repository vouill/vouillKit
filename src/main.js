import Vue from 'vue'
import App from './App'
import geb from 'vue-geb'
import Vouill from './vouill'
import hljs from 'highlightjs'

Vue.use(geb)
Vue.use(Vouill)

hljs.initHighlightingOnLoad()

Vue.directive('highlightjs', {
  inserted: function (el, binding) {
    hljs.highlightBlock(el)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
