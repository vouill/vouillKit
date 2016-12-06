import vouilltip from './components/vouilltip'
import Modal from './components/modal'
import Vouill from './components/vouill'

var vouill = {}

vouill.install = function (Vue, options) {
  Vue.component('vouilltip', vouilltip)
  Vue.component('modal', Modal)
  Vue.component('vouill', Vouill)
}

module.exports = vouill
