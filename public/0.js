(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Articles.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Articles.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      articles: [],
      article: {
        id: "",
        title: "",
        body: ""
      },
      article_id: "",
      pagination: {},
      edit: false
    };
  },
  created: function created() {
    this.fetchArticles();
  },
  methods: {
    fetchArticles: function fetchArticles(page_url) {
      var _this = this;

      var vueModel = this;
      page_url = page_url || "api/articles";
      fetch(page_url).then(function (res) {
        return res.json();
      }).then(function (res) {
        _this.articles = res.data;
        vueModel.makePagination(res.meta, res.links);
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    makePagination: function makePagination(meta, links) {
      var pagination = {
        currentPage: meta.current_page,
        lastPage: meta.last_page,
        nextPage: links.next,
        prevPage: links.prev
      };
      this.pagination = pagination;
    },
    deleteArticle: function deleteArticle(id) {
      var _this2 = this;

      if (confirm("Are you sure?")) {
        fetch("api/article/".concat(id), {
          method: "delete"
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          alert("Article removed");

          _this2.fetchArticles();
        })["catch"](function (err) {
          return console.log(err);
        });
      }
    },
    editArticle: function editArticle(article) {
      this.edit = true;
      this.article.id = article.id;
      this.article.article_id = article.id;
      this.article.title = article.title;
      this.article.body = article.body;
    },
    saveArticle: function saveArticle(article) {
      var _this3 = this;

      if (!this.edit) {
        // add
        fetch("api/article", {
          method: "post",
          body: JSON.stringify(this.article),
          headers: {
            "content-type": "application/json"
          }
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          _this3.article.title = "";
          _this3.article.body = "";
          alert("Article added");

          _this3.fetchArticles();
        })["catch"](function (err) {
          return console.log(err);
        });
      } else {
        // edit
        fetch("api/article", {
          method: "put",
          body: JSON.stringify(this.article),
          headers: {
            "content-type": "application/json"
          }
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          _this3.article.title = "";
          _this3.article.body = "";
          alert("Article edited");

          _this3.fetchArticles();
        })["catch"](function (err) {
          return console.log(err);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Articles.vue?vue&type=template&id=03ba8128&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Articles.vue?vue&type=template&id=03ba8128& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h2", [_vm._v("Articles")]),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "mb-3",
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.saveArticle($event)
            }
          }
        },
        [
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.article.title,
                  expression: "article.title"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Title" },
              domProps: { value: _vm.article.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.article, "title", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.article.body,
                  expression: "article.body"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Body" },
              domProps: { value: _vm.article.body },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.article, "body", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-light btn-block",
              attrs: { type: "submit" }
            },
            [_vm._v("Save")]
          )
        ]
      ),
      _vm._v(" "),
      _c("nav", { attrs: { "aria-label": "Page navigation example" } }, [
        _c("ul", { staticClass: "pagination" }, [
          _c(
            "li",
            {
              staticClass: "page-item",
              class: [{ disabled: !_vm.pagination.prevPage }]
            },
            [
              _c(
                "a",
                {
                  staticClass: "page-link",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      return _vm.fetchArticles(_vm.pagination.prevPage)
                    }
                  }
                },
                [_vm._v("Previous")]
              )
            ]
          ),
          _vm._v(" "),
          _c("li", { staticClass: "page-item disabled" }, [
            _c(
              "a",
              { staticClass: "page-link text-dark", attrs: { href: "#" } },
              [
                _vm._v(
                  "\n                    Page " +
                    _vm._s(_vm.pagination.currentPage) +
                    " of\n                    " +
                    _vm._s(_vm.pagination.lastPage) +
                    "\n                "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass: "page-item",
              class: [{ disabled: !_vm.pagination.nextPage }]
            },
            [
              _c(
                "a",
                {
                  staticClass: "page-link",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      return _vm.fetchArticles(_vm.pagination.nextPage)
                    }
                  }
                },
                [_vm._v("Next")]
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _vm._l(_vm.articles, function(article) {
        return _c(
          "div",
          { key: article.id, staticClass: "card card-body mb-2" },
          [
            _c("h3", [_vm._v(_vm._s(article.title))]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(article.body))]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-warning mb-2",
                on: {
                  click: function($event) {
                    return _vm.editArticle(article)
                  }
                }
              },
              [_vm._v("\n            Edit\n        ")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-danger",
                on: {
                  click: function($event) {
                    return _vm.deleteArticle(article.id)
                  }
                }
              },
              [_vm._v("\n            Delete\n        ")]
            )
          ]
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/Articles.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Articles.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Articles_vue_vue_type_template_id_03ba8128___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Articles.vue?vue&type=template&id=03ba8128& */ "./resources/js/components/Articles.vue?vue&type=template&id=03ba8128&");
/* harmony import */ var _Articles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Articles.vue?vue&type=script&lang=js& */ "./resources/js/components/Articles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Articles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Articles_vue_vue_type_template_id_03ba8128___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Articles_vue_vue_type_template_id_03ba8128___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Articles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Articles.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Articles.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Articles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Articles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Articles.vue?vue&type=template&id=03ba8128&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Articles.vue?vue&type=template&id=03ba8128& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_template_id_03ba8128___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Articles.vue?vue&type=template&id=03ba8128& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Articles.vue?vue&type=template&id=03ba8128&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_template_id_03ba8128___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_template_id_03ba8128___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);