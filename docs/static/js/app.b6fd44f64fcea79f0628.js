webpackJsonp([2,0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(43);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _App = __webpack_require__(33);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _vueGeb = __webpack_require__(32);
	
	var _vueGeb2 = _interopRequireDefault(_vueGeb);
	
	var _vouill = __webpack_require__(9);
	
	var _vouill2 = _interopRequireDefault(_vouill);
	
	var _highlightjs = __webpack_require__(20);
	
	var _highlightjs2 = _interopRequireDefault(_highlightjs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vueGeb2.default);
	_vue2.default.use(_vouill2.default);
	
	_highlightjs2.default.initHighlightingOnLoad();
	
	_vue2.default.directive('highlightjs', {
	  inserted: function inserted(el, binding) {
	    _highlightjs2.default.highlightBlock(el);
	  }
	});
	
	new _vue2.default({
	  el: '#app',
	  template: '<App/>',
	  components: { App: _App2.default }
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vouilltip = __webpack_require__(37);
	
	var _vouilltip2 = _interopRequireDefault(_vouilltip);
	
	var _modal = __webpack_require__(35);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _vouill = __webpack_require__(36);
	
	var _vouill2 = _interopRequireDefault(_vouill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var vouill = {};
	
	vouill.install = function (Vue, options) {
	  Vue.component('vouilltip', _vouilltip2.default);
	  Vue.component('modal', _modal2.default);
	  Vue.component('vouill', _vouill2.default);
	};
	
	module.exports = vouill;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mainView = __webpack_require__(34);
	
	var _mainView2 = _interopRequireDefault(_mainView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'app',
	  components: {
	    MainView: _mainView2.default
	  }
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'mainview',
	  data: function data() {
	    return {
	      msg: 'hello vue'
	    };
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modal',
	  data: function data() {
	    return {
	      show: false
	    };
	  },
	
	  props: ['modalId'],
	  created: function created() {
	    var _this = this;
	
	    this._sub = this.$geb.getFilteredBus({ id: this.modalId }).subscribe(function (obj) {
	      switch (obj.action) {
	        case 'open':
	          _this.openModal();
	          break;
	        case 'close':
	          _this.closeModal();
	          break;
	        default:
	          _this.toggleModal();
	          break;
	      }
	      return;
	    });
	  },
	  methods: {
	    detectCloseEvent: function detectCloseEvent(e) {
	      if (e.target.attributes === this.$el.attributes) {
	        this.closeModal();
	      }
	    },
	    closeModal: function closeModal() {
	      this.show = false;
	    },
	    openModal: function openModal() {
	      this.show = true;
	    },
	    toggleModal: function toggleModal() {
	      if (this.show) {
	        this.closeModal();
	        return;
	      }
	      this.openModal();
	    }
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'vouill'
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['content'],
	  mounted: function mounted() {}
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(19)
	
	/* script */
	__vue_exports__ = __webpack_require__(10)
	
	/* template */
	var __vue_template__ = __webpack_require__(42)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(15)
	
	/* script */
	__vue_exports__ = __webpack_require__(11)
	
	/* template */
	var __vue_template__ = __webpack_require__(38)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(17)
	
	/* script */
	__vue_exports__ = __webpack_require__(12)
	
	/* template */
	var __vue_template__ = __webpack_require__(40)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(18)
	
	/* script */
	__vue_exports__ = __webpack_require__(13)
	
	/* template */
	var __vue_template__ = __webpack_require__(41)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(16)
	
	/* script */
	__vue_exports__ = __webpack_require__(14)
	
	/* template */
	var __vue_template__ = __webpack_require__(39)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', [_vm._h('h1', ["A simple UIKit for vue "]), " ", _vm._h('h2', ["Visual"]), " ", _vm._h('h3', ["Buttons"]), " ", _vm._h('div', [_vm._h('button', {
	    staticClass: "v-bttn"
	  }, ["Default"]), " ", _vm._h('button', {
	    staticClass: "v-bttn v-bttn--success"
	  }, ["Success"]), " ", _vm._h('button', {
	    staticClass: "v-bttn v-bttn--warning"
	  }, ["Warning"]), " ", _vm._h('button', {
	    staticClass: "v-bttn v-bttn--danger"
	  }, ["Danger"]), " ", _vm._h('button', {
	    staticClass: "v-bttn",
	    attrs: {
	      "disabled": ""
	    }
	  }, ["Disabled"]), " ", _vm._h('div', [_vm._h('pre', {
	    directives: [{
	      name: "highlightjs",
	      rawName: "v-highlightjs"
	    }]
	  }, ["\n        ", _vm._h('code', {
	    staticClass: "html"
	  }, ["<button class=\"v-bttn\">Default</button>\n<button class=\"v-bttn v-bttn--success\">Success</button>\n<button class=\"v-bttn v-bttn--warning\">Warning</button>\n<button class=\"v-bttn v-bttn--danger\">Danger</button>\n<button disabled class=\"v-bttn\">Disabled</button>"]), "\n        "])])]), " ", _vm._h('h3', ["Grouping Stuff"]), " ", _vm._h('p', ["Leveraging the power of flex for positioning:"]), " ", _vm._m(0), " ", _vm._h('div', [_vm._h('pre', {
	    directives: [{
	      name: "highlightjs",
	      rawName: "v-highlightjs"
	    }]
	  }, ["\n      ", _vm._h('code', {
	    staticClass: "html"
	  }, ["<ul class=\"h-equal-list\">\n    <li>...</li>\n    <li>...</li>\n    <li>...</li>\n</ul>"]), "\n      "])]), " ", _vm._h('div'), " ", _vm._h('br'), " ", _vm._m(1), " ", _vm._h('div', [_vm._h('pre', {
	    directives: [{
	      name: "highlightjs",
	      rawName: "v-highlightjs"
	    }]
	  }, ["\n    ", _vm._h('code', {
	    staticClass: "html"
	  }, ["<div class=\"nav\">\n  <ul class=\"h-list\">\n    <li><a>Home</a></li>\n    <li><a>Blog</a></li>\n    <li><a>About</a></li>\n  </ul>\n</div>"]), "\n      "])]), " ", _vm._h('br'), " ", _vm._m(2), " ", _vm._h('div', [_vm._h('pre', {
	    directives: [{
	      name: "highlightjs",
	      rawName: "v-highlightjs"
	    }]
	  }, ["\n    ", _vm._h('code', {
	    staticClass: "html"
	  }, ["<div class=\"nav\">\n  <ul class=\"h-list--end\">\n    <li><a>Home</a></li>\n    <li><a>Blog</a></li>\n    <li><a>About</a></li>\n  </ul>\n</div>"]), "\n      "])]), " ", _vm._h('br'), " ", _vm._m(3), " ", _vm._h('div', [_vm._h('pre', {
	    directives: [{
	      name: "highlightjs",
	      rawName: "v-highlightjs"
	    }]
	  }, ["\n    ", _vm._h('code', {
	    staticClass: "html"
	  }, ["<div class=\"nav h-equal-list\">\n    <div class=\"fullWidth\">\n      <ul class=\"h-list\">\n        <li><a>Home</a></li>\n        <li><a>Blog</a></li>\n        <li><a>About</a></li>\n      </ul>\n    </div>\n    <div class=\"fullWidth\">\n      <ul class=\"h-list--end\">\n        <li><a>Login</a></li>\n        <li><a>Info</a></li>\n        <li><a>Cart</a></li>\n      </ul>\n    </div>\n  </div>"]), "\n      "])]), " ", _vm._h('h2', ["Components"]), " ", _vm._h('h3', ["Modals"]), " ", _vm._m(4), " ", _vm._h('p', ["This means you can call any modals from anywhere"]), " ", _vm._h('button', {
	    directives: [{
	      name: "geb-click-emit",
	      rawName: "v-geb-click-emit",
	      value: ({
	        id: 'foo'
	      }),
	      expression: "{id:'foo'}"
	    }],
	    staticClass: "v-bttn"
	  }, ["Click here for modal foo"]), " ", _vm._h('button', {
	    directives: [{
	      name: "geb-click-emit",
	      rawName: "v-geb-click-emit",
	      value: ({
	        id: 'bar'
	      }),
	      expression: "{id:'bar'}"
	    }],
	    staticClass: "v-bttn v-bttn--success"
	  }, ["Click here for modal bar"]), " ", _vm._h('modal', {
	    attrs: {
	      "modalId": "foo"
	    }
	  }), " ", _vm._h('modal', {
	    attrs: {
	      "modalId": "bar"
	    }
	  }, [_vm._h('h1', {
	    slot: "header"
	  }, ["Header"]), " ", _vm._h('p', {
	    slot: "content"
	  }, ["Content "])]), " ", _vm._h('div', [_vm._h('pre', {
	    directives: [{
	      name: "highlightjs",
	      rawName: "v-highlightjs"
	    }]
	  }, [_vm._h('code', {
	    staticClass: "html"
	  }, ["    <button class=\"v-bttn\" v-geb-click-emit=\"{id:'foo'}\">Click here for modal foo</button>\n    <button class=\"v-bttn v-bttn--success\" v-geb-click-emit=\"{id:'bar'}\">Click here for modal bar</button>\n    <modal modalId=\"foo\"></modal>\n    <modal modalId=\"bar\">\n      <h1 slot=\"header\">Header</h1>\n      <p slot=\"content\">Content </p>\n    </modal>"])])]), " ", _vm._h('h3', ["Tooltip"]), " ", _vm._h('p', ["It kinda ", _vm._h('vouilltip', {
	    attrs: {
	      "content": "I am sorry :("
	    }
	  }, ["works"])]), " ", _vm._h('pre', {
	    directives: [{
	      name: "highlightjs",
	      rawName: "v-highlightjs"
	    }]
	  }, [_vm._h('code', {
	    staticClass: "html"
	  }, ["<p>It kinda <vouilltip content=\"I am sorry :(\">works</vouilltip></p>"])])])
	},staticRenderFns: [function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: " h-resizable width-phone"
	  }, [_vm._h('ul', {
	    staticClass: "h-equal-list"
	  }, [_vm._h('li', [_vm._h('button', {
	    staticClass: "v-bttn v-bttn--success fullWidth"
	  }, [_vm._h('i', {
	    staticClass: "fa fa-home",
	    attrs: {
	      "aria-hidden": "true"
	    }
	  })])]), " ", _vm._h('li', [_vm._h('button', {
	    staticClass: "v-bttn v-bttn--danger fullWidth"
	  }, [_vm._h('i', {
	    staticClass: "fa fa-id-card",
	    attrs: {
	      "aria-hidden": "true"
	    }
	  })])]), " ", _vm._h('li', [_vm._h('button', {
	    staticClass: "v-bttn fullWidth"
	  }, [_vm._h('i', {
	    staticClass: "fa fa-address-book",
	    attrs: {
	      "aria-hidden": "true"
	    }
	  })])])])])
	},function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "nav max-width-tablet"
	  }, [_vm._h('ul', {
	    staticClass: "h-list"
	  }, [_vm._h('li', [_vm._h('a', ["Home"])]), " ", _vm._h('li', [_vm._h('a', ["Blog"])]), " ", _vm._h('li', [_vm._h('a', ["About"])])])])
	},function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "nav max-width-tablet"
	  }, [_vm._h('ul', {
	    staticClass: "h-list--end"
	  }, [_vm._h('li', [_vm._h('a', ["Home"])]), " ", _vm._h('li', [_vm._h('a', ["Blog"])]), " ", _vm._h('li', [_vm._h('a', ["About"])])])])
	},function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "nav h-equal-list max-width-tablet"
	  }, [_vm._h('div', {
	    staticClass: "fullWidth"
	  }, [_vm._h('ul', {
	    staticClass: "h-list"
	  }, [_vm._h('li', [_vm._h('a', ["Home"])]), " ", _vm._h('li', [_vm._h('a', ["Blog"])]), " ", _vm._h('li', [_vm._h('a', ["About"])])])]), " ", _vm._h('div', {
	    staticClass: "fullWidth"
	  }, [_vm._h('ul', {
	    staticClass: "h-list--end"
	  }, [_vm._h('li', [_vm._h('a', ["Login"])]), " ", _vm._h('li', [_vm._h('a', ["Info"])]), " ", _vm._h('li', [_vm._h('a', ["Cart"])])])])])
	},function (){var _vm=this;
	  return _vm._h('p', ["Modals uses ", _vm._h('a', {
	    attrs: {
	      "href": "https://github.com/vouill/vue-geb"
	    }
	  }, [_vm._h('strong', ["vue-geb"])]), ". Hence no binding between modal and parent component."])
	}]}

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "vouilltip"
	  }, [_vm._h('span', {
	    staticClass: "vouilltip-slot"
	  }, [_vm._t("default", ["This will only be displayed if there is no contentto be distributed."])]), " ", _vm._h('span', {
	    staticClass: "vouilltip-content"
	  }, [_vm._s(_vm.content)]), " ", _vm._h('span', {
	    staticClass: "vouilltip-arrow"
	  })])
	},staticRenderFns: []}

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('transition', {
	    attrs: {
	      "name": "custom-classes-transition",
	      "enter-active-class": "animated-short fadeIn",
	      "leave-active-class": "animated-short fadeOut"
	    }
	  }, [_vm._h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "vouill--modal-bg",
	    on: {
	      "click": function($event) {
	        _vm.detectCloseEvent($event)
	      }
	    }
	  }, [_vm._h('transition', {
	    attrs: {
	      "name": "custom-classes-transition",
	      "enter-active-class": "animated-short fadeIn slideInUp",
	      "leave-active-class": "animated-short fadeOut slideOutUp"
	    }
	  }, [_vm._h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "vouill--modal"
	  }, [_vm._h('div', {
	    staticClass: "vouill--modal--header"
	  }, [_vm._t("header", [_vm._h('h1', ["Etiam in risus in tortor"])])]), " ", _vm._h('div', {
	    staticClass: "vouill--modal--content"
	  }, [_vm._t("content", [_vm._h('h2', ["Lorem ipsum"]), " ", _vm._h('p', ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque faucibus lectus,\n              quis\n              vehicula neque. Mauris interdum id elit vitae fermentum. Nullam ipsum quam, vulputate at vehicula quis,\n              hendrerit in dolor. Nulla porttitor lacus turpis, eu placerat quam rutrum non. Nam id tempor enim. Etiam\n              ac\n              libero ullamcorper justo feugiat bibendum. Integer placerat rutrum arcu vel ullamcorper."])])]), " ", _vm._h('a', {
	    staticClass: "vouill--modal--action-close",
	    on: {
	      "click": function($event) {
	        _vm.closeModal()
	      }
	    }
	  }, ["X"])])])])])
	},staticRenderFns: []}

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', [_vm._t("default")])
	},staticRenderFns: []}

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    attrs: {
	      "id": "app"
	    }
	  }, [_vm._h('vouill', [_vm._h('MainView')])])
	},staticRenderFns: []}

/***/ }
]);
//# sourceMappingURL=app.b6fd44f64fcea79f0628.js.map