(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory(
      require("framer"),
      require("mathjs"),
      require("react")
    );
  else if (typeof define === "function" && define.amd)
    define(["framer", "mathjs", "react"], factory);
  else {
    var a =
      typeof exports === "object"
        ? factory(require("framer"), require("mathjs"), require("react"))
        : factory(root["Framer"], root["mathjs"], root["React"]);
    for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
  }
})(window, function(
  __WEBPACK_EXTERNAL_MODULE_framer__,
  __WEBPACK_EXTERNAL_MODULE_mathjs__,
  __WEBPACK_EXTERNAL_MODULE_react__
) {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {}
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ try {
        modules[moduleId].call(
          module.exports,
          module,
          module.exports,
          __webpack_require__
        );
      } catch (error) {
        module.exports = { error };
      } // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          /******/ configurable: false,
          /******/ enumerable: true,
          /******/ get: getter
          /******/
        });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module["default"];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, "a", getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ""; // asset url
    /******/
    /******/ /******/ var __module_i = eval(
      "typeof module !== 'undefined' ? module.i : ''"
    );
    /******/ var __framer_package = (/(node_modules[/].*)[/]build.index.js/.exec(
      __module_i
    ) || [])[1];
    /******/ function __asset_url__(src) {
      return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(
        __framer_package,
        src
      );
    }
    /******/ installedModules["framer/resource"] = {
      i: "framer/resource",
      l: true,
      exports: { url: __asset_url__ }
    }; // Load entry module and return exports
    /******/
    /******/
    /******/
    /******/ /******/ return __webpack_require__(
      (__webpack_require__.s = "./package.js")
    );
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
        /*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var map = {
            "./EmptyConnector.tsx": "./code/EmptyConnector.tsx",
            "./Examples.tsx": "./code/Examples.tsx",
            "./Parallax.tsx": "./code/Parallax.tsx",
            "./ParallaxFrame.tsx": "./code/ParallaxFrame.tsx",
            "./RegisterContext.tsx": "./code/RegisterContext.tsx",
            "./ScrollAwayHeader.tsx": "./code/ScrollAwayHeader.tsx",
            "./ScrollOverrides.ts": "./code/ScrollOverrides.ts",
            "./SimpleExamples.tsx": "./code/SimpleExamples.tsx",
            "./Snap.tsx": "./code/Snap.tsx",
            "./StickyScroll.tsx": "./code/StickyScroll.tsx",
            "./canvas.tsx": "./code/canvas.tsx",
            "./iPhoneXRScrolling.tsx": "./code/iPhoneXRScrolling.tsx"
          };

          function webpackContext(req) {
            var id = webpackContextResolve(req);
            var module = __webpack_require__(id);
            return module;
          }
          function webpackContextResolve(req) {
            var id = map[req];
            if (!(id + 1)) {
              // check for number or string
              var e = new Error('Cannot find module "' + req + '".');
              e.code = "MODULE_NOT_FOUND";
              throw e;
            }
            return id;
          }
          webpackContext.keys = function webpackContextKeys() {
            return Object.keys(map);
          };
          webpackContext.resolve = webpackContextResolve;
          module.exports = webpackContext;
          webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

          /***/
        },

      /***/ "./code/EmptyConnector.tsx":
        /*!*********************************!*\
  !*** ./code/EmptyConnector.tsx ***!
  \*********************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          "use strict";
          eval(
            '\nObject.defineProperty(exports, "__esModule", { value: true });\nconst React = __webpack_require__(/*! react */ "react");\nclass EmptyConnector extends React.Component {\n    render() {\n        window["__checkBudget__"]();\n        const containerStyle = {\n            color: "#8855FF",\n            background: "rgba(136, 85, 255, 0.1)",\n            display: "flex",\n            flexDirection: "column",\n            height: "100%",\n            textAlign: "center",\n            justifyContent: "center",\n            alignItems: "center",\n            padding: 5\n        };\n        const h1Style = {\n            fontSize: 43,\n            margin: "15px 0 0px 0"\n        };\n        const { title, description } = this.props;\n        return (React.createElement("div", { style: containerStyle },\n            React.createElement("h1", { style: h1Style }, title),\n            React.createElement("p", null, description)));\n    }\n}\nexports.EmptyConnector = EmptyConnector;\nexports.__info__ = [{ name: "EmptyConnector", children: false, type: "component" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0VtcHR5Q29ubmVjdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQkFBcUI7QUFDcEMsNENBQTRDLHdCQUF3QjtBQUNwRSx1Q0FBdUMsaUJBQWlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZEQUE2RCIsImZpbGUiOiIuL2NvZGUvRW1wdHlDb25uZWN0b3IudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNsYXNzIEVtcHR5Q29ubmVjdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiM4ODU1RkZcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgxMzYsIDg1LCAyNTUsIDAuMSlcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBwYWRkaW5nOiA1XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGgxU3R5bGUgPSB7XG4gICAgICAgICAgICBmb250U2l6ZTogNDMsXG4gICAgICAgICAgICBtYXJnaW46IFwiMTVweCAwIDBweCAwXCJcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBjb250YWluZXJTdHlsZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHsgc3R5bGU6IGgxU3R5bGUgfSwgdGl0bGUpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgZGVzY3JpcHRpb24pKSk7XG4gICAgfVxufVxuZXhwb3J0cy5FbXB0eUNvbm5lY3RvciA9IEVtcHR5Q29ubmVjdG9yO1xuZXhwb3J0cy5fX2luZm9fXyA9IFt7IG5hbWU6IFwiRW1wdHlDb25uZWN0b3JcIiwgY2hpbGRyZW46IGZhbHNlLCB0eXBlOiBcImNvbXBvbmVudFwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/EmptyConnector.tsx\n'
          );

          /***/
        },

      /***/ "./code/Examples.tsx":
        /*!***************************!*\
  !*** ./code/Examples.tsx ***!
  \***************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          "use strict";
          eval(
            '\nObject.defineProperty(exports, "__esModule", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ "framer");\nconst data = framer_1.Data({ toggle: true, scale: framer_1.Animatable(1), opacity: framer_1.Animatable(1), rotation: framer_1.Animatable(0), rotationY: framer_1.Animatable(0) });\nexports.Scale = () => {\n    window["__checkBudget__"]();\n    return {\n        scale: data.scale,\n        onTap() {\n            window["__checkBudget__"]();\n            data.scale.set(0.6);\n            framer_1.animate.spring(data.scale, 1);\n        },\n    };\n};\nexports.Rotate = props => {\n    window["__checkBudget__"]();\n    data.rotation.set(props.rotation);\n    return {\n        rotation: data.rotation,\n        onTap() {\n            window["__checkBudget__"]();\n            framer_1.animate.spring(data.rotation, data.rotation.get() + 90, {\n                tension: 250,\n                friction: 20,\n            });\n        },\n    };\n};\nexports.Fade = props => {\n    window["__checkBudget__"]();\n    data.opacity.set(props.opacity);\n    return {\n        opacity: data.opacity,\n        onTap() {\n            window["__checkBudget__"]();\n            framer_1.animate.linear(data.opacity, 0, 0.2);\n        },\n    };\n};\nexports.FlipOutput = () => {\n    window["__checkBudget__"]();\n    return {\n        rotationY: data.rotationY,\n    };\n};\nexports.FlipInput = () => {\n    window["__checkBudget__"]();\n    return {\n        onTap() {\n            window["__checkBudget__"]();\n            const toggle = data.toggle;\n            framer_1.animate.spring({ rotationY: data.rotationY }, {\n                rotationY: toggle ? 360 : 0,\n            }, { tension: 200, friction: 20 });\n            data.toggle = !toggle;\n        },\n    };\n};\nexports.__info__ = [{ name: "Scale", type: "override" }, { name: "Rotate", type: "override" }, { name: "Fade", type: "override" }, { name: "FlipOutput", type: "override" }, { name: "FlipInput", type: "override" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0V4YW1wbGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsNEJBQTRCLG9KQUFvSjtBQUNoTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw0QkFBNEI7QUFDakU7QUFDQSxhQUFhLEdBQUcsNkJBQTZCO0FBQzdDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUIsa0NBQWtDLEdBQUcsbUNBQW1DLEdBQUcsaUNBQWlDLEdBQUcsdUNBQXVDLEdBQUcsc0NBQXNDIiwiZmlsZSI6Ii4vY29kZS9FeGFtcGxlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IGRhdGEgPSBmcmFtZXJfMS5EYXRhKHsgdG9nZ2xlOiB0cnVlLCBzY2FsZTogZnJhbWVyXzEuQW5pbWF0YWJsZSgxKSwgb3BhY2l0eTogZnJhbWVyXzEuQW5pbWF0YWJsZSgxKSwgcm90YXRpb246IGZyYW1lcl8xLkFuaW1hdGFibGUoMCksIHJvdGF0aW9uWTogZnJhbWVyXzEuQW5pbWF0YWJsZSgwKSB9KTtcbmV4cG9ydHMuU2NhbGUgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NhbGU6IGRhdGEuc2NhbGUsXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBkYXRhLnNjYWxlLnNldCgwLjYpO1xuICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5zcHJpbmcoZGF0YS5zY2FsZSwgMSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLlJvdGF0ZSA9IHByb3BzID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICBkYXRhLnJvdGF0aW9uLnNldChwcm9wcy5yb3RhdGlvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb246IGRhdGEucm90YXRpb24sXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLnNwcmluZyhkYXRhLnJvdGF0aW9uLCBkYXRhLnJvdGF0aW9uLmdldCgpICsgOTAsIHtcbiAgICAgICAgICAgICAgICB0ZW5zaW9uOiAyNTAsXG4gICAgICAgICAgICAgICAgZnJpY3Rpb246IDIwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLkZhZGUgPSBwcm9wcyA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgZGF0YS5vcGFjaXR5LnNldChwcm9wcy5vcGFjaXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhLm9wYWNpdHksXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLmxpbmVhcihkYXRhLm9wYWNpdHksIDAsIDAuMik7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLkZsaXBPdXRwdXQgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb25ZOiBkYXRhLnJvdGF0aW9uWSxcbiAgICB9O1xufTtcbmV4cG9ydHMuRmxpcElucHV0ID0gKCkgPT4ge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBjb25zdCB0b2dnbGUgPSBkYXRhLnRvZ2dsZTtcbiAgICAgICAgICAgIGZyYW1lcl8xLmFuaW1hdGUuc3ByaW5nKHsgcm90YXRpb25ZOiBkYXRhLnJvdGF0aW9uWSB9LCB7XG4gICAgICAgICAgICAgICAgcm90YXRpb25ZOiB0b2dnbGUgPyAzNjAgOiAwLFxuICAgICAgICAgICAgfSwgeyB0ZW5zaW9uOiAyMDAsIGZyaWN0aW9uOiAyMCB9KTtcbiAgICAgICAgICAgIGRhdGEudG9nZ2xlID0gIXRvZ2dsZTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbmV4cG9ydHMuX19pbmZvX18gPSBbeyBuYW1lOiBcIlNjYWxlXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiUm90YXRlXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiRmFkZVwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIkZsaXBPdXRwdXRcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJGbGlwSW5wdXRcIiwgdHlwZTogXCJvdmVycmlkZVwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/Examples.tsx\n'
          );

          /***/
        },

      /***/ "./code/Parallax.tsx":
        /*!***************************!*\
  !*** ./code/Parallax.tsx ***!
  \***************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          "use strict";
          eval(
            '\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, "__esModule", { value: true });\nconst React = __webpack_require__(/*! react */ "react");\nconst framer_1 = __webpack_require__(/*! framer */ "framer");\nconst EmptyConnector_1 = __webpack_require__(/*! ./EmptyConnector */ "./code/EmptyConnector.tsx");\nconst RegisterContext_1 = __webpack_require__(/*! ./RegisterContext */ "./code/RegisterContext.tsx");\nconst math = __webpack_require__(/*! mathjs */ "mathjs");\n__export(__webpack_require__(/*! ./ScrollOverrides */ "./code/ScrollOverrides.ts"));\nclass Parallax extends React.Component {\n    constructor() {\n        super(...arguments);\n        this.handleScroll = e => {\n            window["__checkBudget__"]();\n            const { x, y } = e;\n            let vx = 0, vy = 0;\n            if (typeof this.lastX !== "undefined" &&\n                typeof this.lastY !== "undefined") {\n                const duration = Date.now() - this.lastTimestamp;\n                vx = (x - this.lastX) / duration;\n                vy = (y - this.lastY) / duration;\n            }\n            this.lastX = x;\n            this.lastY = y;\n            this.lastTimestamp = Date.now();\n            const { direction, onScroll } = this.props;\n            const scrollPosition = direction === "vertical" ? y : x;\n            const scrollMaxX = this.props.children[0].props.width - this.props.width;\n            const scrollMaxY = this.props.children[0].props.height - this.props.height;\n            const scrollMax = direction === "vertical" ? scrollMaxY : scrollMaxX;\n            const scrollProps = {\n                s: scrollPosition,\n                sx: x,\n                sy: y,\n                vx,\n                vy,\n                direction,\n                scrollMax,\n                scrollMaxX,\n                scrollMaxY\n            };\n            onScroll && onScroll(scrollProps);\n            this.layerConfigs.forEach(({ left, top, props }) => {\n                window["__checkBudget__"]();\n                const { speedX, speedY, pinned, inputMode = "speed", xExpr, yExpr } = props;\n                let newLeft = 0, newTop = 0;\n                if (inputMode === "speed") {\n                    newTop = (scrollPosition * speedY) / 10;\n                    newLeft = (scrollPosition * speedX) / 10;\n                    // console.log(props, left, top, newLeft, newTop);\n                    if (pinned) {\n                        if (direction === "vertical")\n                            newTop = -y;\n                        else if (direction === "horizontal")\n                            newLeft = -x;\n                    }\n                }\n                else {\n                    // position expr\n                    newTop = math.eval(yExpr, scrollProps);\n                    newLeft = math.eval(xExpr, scrollProps);\n                    // console.log(scope, "newTop", newTop, "lastY", this.lastY);\n                }\n                top.set(newTop);\n                left.set(newLeft);\n            });\n        };\n        this.registerLayer = layerConfigs => {\n            window["__checkBudget__"]();\n            // console.log("registerLayer:", layerConfigs);\n            this.layerConfigs.push(layerConfigs);\n        };\n        this.unregisterLayer = layerConfigs => {\n            window["__checkBudget__"]();\n            this.layerConfigs = this.layerConfigs.filter(c => c !== layerConfigs);\n        };\n        this.layerConfigs = [];\n    }\n    render() {\n        window["__checkBudget__"]();\n        const { children } = this.props;\n        if (React.Children.count(children) > 0) {\n            return (React.createElement(RegisterContext_1.RegisterContext.Provider, { value: {\n                    registerLayer: this.registerLayer,\n                    unregisterLayer: this.unregisterLayer\n                } },\n                React.createElement(framer_1.Scroll, Object.assign({}, this.props, { onMove: this.handleScroll }), children)));\n        }\n        else {\n            return (React.createElement(EmptyConnector_1.EmptyConnector, { title: "Parallax Scroll", description: "Connect to a scrolling content frame" }));\n        }\n    }\n}\nParallax.displayName = "Parallax Scroll";\nParallax.defaultProps = Object.assign({}, framer_1.Scroll.defaultProps);\nParallax.propertyControls = Object.assign({}, framer_1.Scroll.propertyControls, { direction: {\n        title: "direction",\n        type: framer_1.ControlType.SegmentedEnum,\n        options: ["horizontal", "vertical"]\n    }, directionLock: {} // Remove the directionLock property from Scroll\n });\nexports.Parallax = Parallax;\nexports.__info__ = [{ name: "Parallax", children: true, type: "component" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1BhcmFsbGF4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsbUJBQW1CO0FBQzNEO0FBQ0EsdUJBQXVCLDREQUE0RDtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUI7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBLGlCQUFpQixFQUFFO0FBQ25CLHFFQUFxRSxlQUFlLDRCQUE0QjtBQUNoSDtBQUNBO0FBQ0EsMEVBQTBFLGdGQUFnRjtBQUMxSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4Qyw0Q0FBNEMscUNBQXFDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLEtBQUssbUJBQW1CO0FBQ3hCLEVBQUU7QUFDRjtBQUNBLHFCQUFxQixzREFBc0QiLCJmaWxlIjoiLi9jb2RlL1BhcmFsbGF4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgZnJhbWVyXzEgPSByZXF1aXJlKFwiZnJhbWVyXCIpO1xuY29uc3QgRW1wdHlDb25uZWN0b3JfMSA9IHJlcXVpcmUoXCIuL0VtcHR5Q29ubmVjdG9yXCIpO1xuY29uc3QgUmVnaXN0ZXJDb250ZXh0XzEgPSByZXF1aXJlKFwiLi9SZWdpc3RlckNvbnRleHRcIik7XG5jb25zdCBtYXRoID0gcmVxdWlyZShcIm1hdGhqc1wiKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL1Njcm9sbE92ZXJyaWRlc1wiKSk7XG5jbGFzcyBQYXJhbGxheCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsID0gZSA9PiB7XG4gICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gZTtcbiAgICAgICAgICAgIGxldCB2eCA9IDAsIHZ5ID0gMDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5sYXN0WCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzLmxhc3RZICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZHVyYXRpb24gPSBEYXRlLm5vdygpIC0gdGhpcy5sYXN0VGltZXN0YW1wO1xuICAgICAgICAgICAgICAgIHZ4ID0gKHggLSB0aGlzLmxhc3RYKSAvIGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIHZ5ID0gKHkgLSB0aGlzLmxhc3RZKSAvIGR1cmF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXN0WCA9IHg7XG4gICAgICAgICAgICB0aGlzLmxhc3RZID0geTtcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBjb25zdCB7IGRpcmVjdGlvbiwgb25TY3JvbGwgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8geSA6IHg7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxNYXhYID0gdGhpcy5wcm9wcy5jaGlsZHJlblswXS5wcm9wcy53aWR0aCAtIHRoaXMucHJvcHMud2lkdGg7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxNYXhZID0gdGhpcy5wcm9wcy5jaGlsZHJlblswXS5wcm9wcy5oZWlnaHQgLSB0aGlzLnByb3BzLmhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbE1heCA9IGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gc2Nyb2xsTWF4WSA6IHNjcm9sbE1heFg7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICBzOiBzY3JvbGxQb3NpdGlvbixcbiAgICAgICAgICAgICAgICBzeDogeCxcbiAgICAgICAgICAgICAgICBzeTogeSxcbiAgICAgICAgICAgICAgICB2eCxcbiAgICAgICAgICAgICAgICB2eSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgc2Nyb2xsTWF4LFxuICAgICAgICAgICAgICAgIHNjcm9sbE1heFgsXG4gICAgICAgICAgICAgICAgc2Nyb2xsTWF4WVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9uU2Nyb2xsICYmIG9uU2Nyb2xsKHNjcm9sbFByb3BzKTtcbiAgICAgICAgICAgIHRoaXMubGF5ZXJDb25maWdzLmZvckVhY2goKHsgbGVmdCwgdG9wLCBwcm9wcyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBzcGVlZFgsIHNwZWVkWSwgcGlubmVkLCBpbnB1dE1vZGUgPSBcInNwZWVkXCIsIHhFeHByLCB5RXhwciB9ID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0xlZnQgPSAwLCBuZXdUb3AgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dE1vZGUgPT09IFwic3BlZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBuZXdUb3AgPSAoc2Nyb2xsUG9zaXRpb24gKiBzcGVlZFkpIC8gMTA7XG4gICAgICAgICAgICAgICAgICAgIG5ld0xlZnQgPSAoc2Nyb2xsUG9zaXRpb24gKiBzcGVlZFgpIC8gMTA7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLCBsZWZ0LCB0b3AsIG5ld0xlZnQsIG5ld1RvcCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaW5uZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUb3AgPSAteTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TGVmdCA9IC14O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbiBleHByXG4gICAgICAgICAgICAgICAgICAgIG5ld1RvcCA9IG1hdGguZXZhbCh5RXhwciwgc2Nyb2xsUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICBuZXdMZWZ0ID0gbWF0aC5ldmFsKHhFeHByLCBzY3JvbGxQcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNjb3BlLCBcIm5ld1RvcFwiLCBuZXdUb3AsIFwibGFzdFlcIiwgdGhpcy5sYXN0WSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRvcC5zZXQobmV3VG9wKTtcbiAgICAgICAgICAgICAgICBsZWZ0LnNldChuZXdMZWZ0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlZ2lzdGVyTGF5ZXIgPSBsYXllckNvbmZpZ3MgPT4ge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlZ2lzdGVyTGF5ZXI6XCIsIGxheWVyQ29uZmlncyk7XG4gICAgICAgICAgICB0aGlzLmxheWVyQ29uZmlncy5wdXNoKGxheWVyQ29uZmlncyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudW5yZWdpc3RlckxheWVyID0gbGF5ZXJDb25maWdzID0+IHtcbiAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgdGhpcy5sYXllckNvbmZpZ3MgPSB0aGlzLmxheWVyQ29uZmlncy5maWx0ZXIoYyA9PiBjICE9PSBsYXllckNvbmZpZ3MpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmxheWVyQ29uZmlncyA9IFtdO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlZ2lzdGVyQ29udGV4dF8xLlJlZ2lzdGVyQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICByZWdpc3RlckxheWVyOiB0aGlzLnJlZ2lzdGVyTGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgIHVucmVnaXN0ZXJMYXllcjogdGhpcy51bnJlZ2lzdGVyTGF5ZXJcbiAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChmcmFtZXJfMS5TY3JvbGwsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMsIHsgb25Nb3ZlOiB0aGlzLmhhbmRsZVNjcm9sbCB9KSwgY2hpbGRyZW4pKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW1wdHlDb25uZWN0b3JfMS5FbXB0eUNvbm5lY3RvciwgeyB0aXRsZTogXCJQYXJhbGxheCBTY3JvbGxcIiwgZGVzY3JpcHRpb246IFwiQ29ubmVjdCB0byBhIHNjcm9sbGluZyBjb250ZW50IGZyYW1lXCIgfSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuUGFyYWxsYXguZGlzcGxheU5hbWUgPSBcIlBhcmFsbGF4IFNjcm9sbFwiO1xuUGFyYWxsYXguZGVmYXVsdFByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgZnJhbWVyXzEuU2Nyb2xsLmRlZmF1bHRQcm9wcyk7XG5QYXJhbGxheC5wcm9wZXJ0eUNvbnRyb2xzID0gT2JqZWN0LmFzc2lnbih7fSwgZnJhbWVyXzEuU2Nyb2xsLnByb3BlcnR5Q29udHJvbHMsIHsgZGlyZWN0aW9uOiB7XG4gICAgICAgIHRpdGxlOiBcImRpcmVjdGlvblwiLFxuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5TZWdtZW50ZWRFbnVtLFxuICAgICAgICBvcHRpb25zOiBbXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl1cbiAgICB9LCBkaXJlY3Rpb25Mb2NrOiB7fSAvLyBSZW1vdmUgdGhlIGRpcmVjdGlvbkxvY2sgcHJvcGVydHkgZnJvbSBTY3JvbGxcbiB9KTtcbmV4cG9ydHMuUGFyYWxsYXggPSBQYXJhbGxheDtcbmV4cG9ydHMuX19pbmZvX18gPSBbeyBuYW1lOiBcIlBhcmFsbGF4XCIsIGNoaWxkcmVuOiB0cnVlLCB0eXBlOiBcImNvbXBvbmVudFwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/Parallax.tsx\n'
          );

          /***/
        },

      /***/ "./code/ParallaxFrame.tsx":
        /*!********************************!*\
  !*** ./code/ParallaxFrame.tsx ***!
  \********************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          "use strict";
          eval(
            '\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === "function")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)\n            t[p[i]] = s[p[i]];\n    return t;\n};\nObject.defineProperty(exports, "__esModule", { value: true });\nconst React = __webpack_require__(/*! react */ "react");\nconst framer_1 = __webpack_require__(/*! framer */ "framer");\nconst EmptyConnector_1 = __webpack_require__(/*! ./EmptyConnector */ "./code/EmptyConnector.tsx");\nconst RegisterContext_1 = __webpack_require__(/*! ./RegisterContext */ "./code/RegisterContext.tsx");\nclass ParallaxLayerRegistrar extends React.Component {\n    constructor() {\n        super(...arguments);\n        this.layerConfig = {\n            left: framer_1.Animatable(0),\n            top: framer_1.Animatable(0),\n            props: null\n        };\n    }\n    componentDidMount() {\n        window["__checkBudget__"]();\n        const { registerLayer } = this.props;\n        if (registerLayer) {\n            this.layerConfig.props = this.props;\n            registerLayer(this.layerConfig);\n        }\n    }\n    componentWillUnmount() {\n        window["__checkBudget__"]();\n        const { unregisterLayer } = this.props;\n        if (unregisterLayer) {\n            unregisterLayer(this.layerConfig);\n        }\n    }\n    render() {\n        window["__checkBudget__"]();\n        return (React.createElement(framer_1.Frame, Object.assign({}, this.props, { background: null, left: this.layerConfig.left, top: this.layerConfig.top }), this.props.children));\n    }\n}\nclass ParallaxFrame extends React.Component {\n    render() {\n        window["__checkBudget__"]();\n        const _a = this.props, { children } = _a, restProps = __rest(_a, ["children"]);\n        if (React.Children.count(children) === 0) {\n            return (React.createElement(EmptyConnector_1.EmptyConnector, { title: "Parallax Layer", description: \'Connect to a frame and adjust the "speed" prop in the properties panel\' }));\n        }\n        else {\n            return (React.createElement(RegisterContext_1.RegisterContext.Consumer, null, ({ registerLayer, unregisterLayer }) => {\n                window["__checkBudget__"]();\n                return (React.createElement(ParallaxLayerRegistrar, Object.assign({}, restProps, { registerLayer: registerLayer, unregisterLayer: unregisterLayer }), children));\n            }));\n        }\n    }\n}\nParallaxFrame.displayName = "Parallax Layer";\nParallaxFrame.defaultProps = {\n    inputMode: "speed",\n    speedX: 0,\n    speedY: 0,\n    xExpr: "0",\n    yExpr: "0",\n    pinned: false\n};\nParallaxFrame.propertyControls = {\n    inputMode: {\n        type: framer_1.ControlType.SegmentedEnum,\n        title: "Input",\n        options: ["speed", "position"],\n        optionTitles: ["Speed", "Position Expr"]\n    },\n    pinned: {\n        type: framer_1.ControlType.Boolean,\n        title: "Pin in scroll direction",\n        hidden: ({ inputMode }) => inputMode !== "speed"\n    },\n    speedX: {\n        type: framer_1.ControlType.Number,\n        min: -50,\n        max: 50,\n        title: "Speed X",\n        hidden: ({ inputMode }) => inputMode !== "speed"\n    },\n    speedY: {\n        type: framer_1.ControlType.Number,\n        min: -50,\n        max: 50,\n        title: "Speed Y",\n        hidden: ({ inputMode }) => inputMode !== "speed"\n    },\n    xExpr: {\n        type: framer_1.ControlType.String,\n        title: "X",\n        hidden: ({ inputMode }) => inputMode !== "position"\n    },\n    yExpr: {\n        type: framer_1.ControlType.String,\n        title: "Y",\n        hidden: ({ inputMode }) => inputMode !== "position"\n    }\n};\nexports.ParallaxFrame = ParallaxFrame;\nexports.__info__ = [{ name: "ParallaxFrame", children: true, type: "component" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1BhcmFsbGF4RnJhbWUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxjQUFjO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQkFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLGVBQWUsMkVBQTJFO0FBQzlKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsV0FBVztBQUMzQztBQUNBLDBFQUEwRSxpSEFBaUg7QUFDM0w7QUFDQTtBQUNBLDRGQUE0RixpQ0FBaUM7QUFDN0g7QUFDQSxvRkFBb0YsY0FBYyxpRUFBaUU7QUFDbkssYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQTJEIiwiZmlsZSI6Ii4vY29kZS9QYXJhbGxheEZyYW1lLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICByZXR1cm4gdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IEVtcHR5Q29ubmVjdG9yXzEgPSByZXF1aXJlKFwiLi9FbXB0eUNvbm5lY3RvclwiKTtcbmNvbnN0IFJlZ2lzdGVyQ29udGV4dF8xID0gcmVxdWlyZShcIi4vUmVnaXN0ZXJDb250ZXh0XCIpO1xuY2xhc3MgUGFyYWxsYXhMYXllclJlZ2lzdHJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubGF5ZXJDb25maWcgPSB7XG4gICAgICAgICAgICBsZWZ0OiBmcmFtZXJfMS5BbmltYXRhYmxlKDApLFxuICAgICAgICAgICAgdG9wOiBmcmFtZXJfMS5BbmltYXRhYmxlKDApLFxuICAgICAgICAgICAgcHJvcHM6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBjb25zdCB7IHJlZ2lzdGVyTGF5ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChyZWdpc3RlckxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyQ29uZmlnLnByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHJlZ2lzdGVyTGF5ZXIodGhpcy5sYXllckNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBjb25zdCB7IHVucmVnaXN0ZXJMYXllciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKHVucmVnaXN0ZXJMYXllcikge1xuICAgICAgICAgICAgdW5yZWdpc3RlckxheWVyKHRoaXMubGF5ZXJDb25maWcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChmcmFtZXJfMS5GcmFtZSwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcywgeyBiYWNrZ3JvdW5kOiBudWxsLCBsZWZ0OiB0aGlzLmxheWVyQ29uZmlnLmxlZnQsIHRvcDogdGhpcy5sYXllckNvbmZpZy50b3AgfSksIHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgICB9XG59XG5jbGFzcyBQYXJhbGxheEZyYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBjb25zdCBfYSA9IHRoaXMucHJvcHMsIHsgY2hpbGRyZW4gfSA9IF9hLCByZXN0UHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCJdKTtcbiAgICAgICAgaWYgKFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEVtcHR5Q29ubmVjdG9yXzEuRW1wdHlDb25uZWN0b3IsIHsgdGl0bGU6IFwiUGFyYWxsYXggTGF5ZXJcIiwgZGVzY3JpcHRpb246ICdDb25uZWN0IHRvIGEgZnJhbWUgYW5kIGFkanVzdCB0aGUgXCJzcGVlZFwiIHByb3AgaW4gdGhlIHByb3BlcnRpZXMgcGFuZWwnIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWdpc3RlckNvbnRleHRfMS5SZWdpc3RlckNvbnRleHQuQ29uc3VtZXIsIG51bGwsICh7IHJlZ2lzdGVyTGF5ZXIsIHVucmVnaXN0ZXJMYXllciB9KSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFBhcmFsbGF4TGF5ZXJSZWdpc3RyYXIsIE9iamVjdC5hc3NpZ24oe30sIHJlc3RQcm9wcywgeyByZWdpc3RlckxheWVyOiByZWdpc3RlckxheWVyLCB1bnJlZ2lzdGVyTGF5ZXI6IHVucmVnaXN0ZXJMYXllciB9KSwgY2hpbGRyZW4pKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblBhcmFsbGF4RnJhbWUuZGlzcGxheU5hbWUgPSBcIlBhcmFsbGF4IExheWVyXCI7XG5QYXJhbGxheEZyYW1lLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpbnB1dE1vZGU6IFwic3BlZWRcIixcbiAgICBzcGVlZFg6IDAsXG4gICAgc3BlZWRZOiAwLFxuICAgIHhFeHByOiBcIjBcIixcbiAgICB5RXhwcjogXCIwXCIsXG4gICAgcGlubmVkOiBmYWxzZVxufTtcblBhcmFsbGF4RnJhbWUucHJvcGVydHlDb250cm9scyA9IHtcbiAgICBpbnB1dE1vZGU6IHtcbiAgICAgICAgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuU2VnbWVudGVkRW51bSxcbiAgICAgICAgdGl0bGU6IFwiSW5wdXRcIixcbiAgICAgICAgb3B0aW9uczogW1wic3BlZWRcIiwgXCJwb3NpdGlvblwiXSxcbiAgICAgICAgb3B0aW9uVGl0bGVzOiBbXCJTcGVlZFwiLCBcIlBvc2l0aW9uIEV4cHJcIl1cbiAgICB9LFxuICAgIHBpbm5lZDoge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5Cb29sZWFuLFxuICAgICAgICB0aXRsZTogXCJQaW4gaW4gc2Nyb2xsIGRpcmVjdGlvblwiLFxuICAgICAgICBoaWRkZW46ICh7IGlucHV0TW9kZSB9KSA9PiBpbnB1dE1vZGUgIT09IFwic3BlZWRcIlxuICAgIH0sXG4gICAgc3BlZWRYOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLk51bWJlcixcbiAgICAgICAgbWluOiAtNTAsXG4gICAgICAgIG1heDogNTAsXG4gICAgICAgIHRpdGxlOiBcIlNwZWVkIFhcIixcbiAgICAgICAgaGlkZGVuOiAoeyBpbnB1dE1vZGUgfSkgPT4gaW5wdXRNb2RlICE9PSBcInNwZWVkXCJcbiAgICB9LFxuICAgIHNwZWVkWToge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5OdW1iZXIsXG4gICAgICAgIG1pbjogLTUwLFxuICAgICAgICBtYXg6IDUwLFxuICAgICAgICB0aXRsZTogXCJTcGVlZCBZXCIsXG4gICAgICAgIGhpZGRlbjogKHsgaW5wdXRNb2RlIH0pID0+IGlucHV0TW9kZSAhPT0gXCJzcGVlZFwiXG4gICAgfSxcbiAgICB4RXhwcjoge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5TdHJpbmcsXG4gICAgICAgIHRpdGxlOiBcIlhcIixcbiAgICAgICAgaGlkZGVuOiAoeyBpbnB1dE1vZGUgfSkgPT4gaW5wdXRNb2RlICE9PSBcInBvc2l0aW9uXCJcbiAgICB9LFxuICAgIHlFeHByOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLlN0cmluZyxcbiAgICAgICAgdGl0bGU6IFwiWVwiLFxuICAgICAgICBoaWRkZW46ICh7IGlucHV0TW9kZSB9KSA9PiBpbnB1dE1vZGUgIT09IFwicG9zaXRpb25cIlxuICAgIH1cbn07XG5leHBvcnRzLlBhcmFsbGF4RnJhbWUgPSBQYXJhbGxheEZyYW1lO1xuZXhwb3J0cy5fX2luZm9fXyA9IFt7IG5hbWU6IFwiUGFyYWxsYXhGcmFtZVwiLCBjaGlsZHJlbjogdHJ1ZSwgdHlwZTogXCJjb21wb25lbnRcIiB9XTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./code/ParallaxFrame.tsx\n'
          );

          /***/
        },

      /***/ "./code/RegisterContext.tsx":
        /*!**********************************!*\
  !*** ./code/RegisterContext.tsx ***!
  \**********************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          "use strict";
          eval(
            '\nObject.defineProperty(exports, "__esModule", { value: true });\nconst React = __webpack_require__(/*! react */ "react");\nexports.RegisterContext = React.createContext({\n    registerLayer: null,\n    unregisterLayer: null\n});\nexports.__info__ = [];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1JlZ2lzdGVyQ29udGV4dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiIuL2NvZGUvUmVnaXN0ZXJDb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5leHBvcnRzLlJlZ2lzdGVyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICAgIHJlZ2lzdGVyTGF5ZXI6IG51bGwsXG4gICAgdW5yZWdpc3RlckxheWVyOiBudWxsXG59KTtcbmV4cG9ydHMuX19pbmZvX18gPSBbXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./code/RegisterContext.tsx\n'
          );

          /***/
        },

      /***/ "./code/ScrollAwayHeader.tsx":
        /*!***********************************!*\
  !*** ./code/ScrollAwayHeader.tsx ***!
  \***********************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          "use strict";
          eval(
            '\nObject.defineProperty(exports, "__esModule", { value: true });\nconst ScrollOverrides_1 = __webpack_require__(/*! ./ScrollOverrides */ "./code/ScrollOverrides.ts");\nconst [scrollOverrides, headerOverrides] = ScrollOverrides_1.scrollAwayHeader(81, 1408);\nexports.Scroll = props => scrollOverrides(props);\nexports.Header = props => headerOverrides(props);\nexports.__info__ = [{ name: "Scroll", type: "override" }, { name: "Header", type: "override" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1Njcm9sbEF3YXlIZWFkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUNBQW1DLEdBQUcsbUNBQW1DIiwiZmlsZSI6Ii4vY29kZS9TY3JvbGxBd2F5SGVhZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgU2Nyb2xsT3ZlcnJpZGVzXzEgPSByZXF1aXJlKFwiLi9TY3JvbGxPdmVycmlkZXNcIik7XG5jb25zdCBbc2Nyb2xsT3ZlcnJpZGVzLCBoZWFkZXJPdmVycmlkZXNdID0gU2Nyb2xsT3ZlcnJpZGVzXzEuc2Nyb2xsQXdheUhlYWRlcig4MSwgMTQwOCk7XG5leHBvcnRzLlNjcm9sbCA9IHByb3BzID0+IHNjcm9sbE92ZXJyaWRlcyhwcm9wcyk7XG5leHBvcnRzLkhlYWRlciA9IHByb3BzID0+IGhlYWRlck92ZXJyaWRlcyhwcm9wcyk7XG5leHBvcnRzLl9faW5mb19fID0gW3sgbmFtZTogXCJTY3JvbGxcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJIZWFkZXJcIiwgdHlwZTogXCJvdmVycmlkZVwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/ScrollAwayHeader.tsx\n'
          );

          /***/
        },

      /***/ "./code/ScrollOverrides.ts":
        /*!*********************************!*\
  !*** ./code/ScrollOverrides.ts ***!
  \*********************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          "use strict";
          eval(
            '\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === "function")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)\n            t[p[i]] = s[p[i]];\n    return t;\n};\nObject.defineProperty(exports, "__esModule", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ "framer");\nconst isArray = a => a instanceof Array;\nfunction validateSOParams(params) {\n    window["__checkBudget__"]();\n    const throwError = e => {\n        window["__checkBudget__"]();\n        throw `${e}\n\n      Usage examples:\n\n        const overrides = scrollOverrides(\n          [0, 20],\n          [\n            { id: \'title\', op: modulate(\'opacity\', [0, 1]) }\n          ]\n        );\n\n        const overrides = scrollOverrides(\n          [0, 20],\n          [\n            { id: \'title\', op: stickyY() }\n          ],\n          [20, 40],\n          [\n            { id: \'name\', op: stickyY() },\n            { id: \'contact\', op: modulate(\'opacity\', [0, 1]) }\n          ]\n        );\n\n        const overrides = scrollOverrides(\n          [0, 20],\n          [\n            { id: [\'title\', \'name\'], op: stickyY() }\n          ],\n          [20, 40],\n          [\n            { id: \'contact\', op: [ stickyY(), modulate(\'opacity\', [0, 1]) ] }\n          ],\n        );\n  `;\n    };\n    if (params.length === 0 || params.length % 2 !== 0) {\n        throwError(`The number of parameters must be even and greater than 0.`);\n    }\n    for (let i = 0; i < params.length; i += 2) {\n        window["__checkBudget__"]();\n        const range = params[i];\n        if (!isFinite(range[0]) || !isFinite(range[1]) || range[0] > range[1]) {\n            throwError(`Parameter ${JSON.stringify(range)} is not a range.`);\n        }\n        const operations = params[i + 1];\n        if (!isArray(operations) || operations.length <= 0) {\n            throwError(`Parameter ${JSON.stringify(operations)} is not a non-empty array.`);\n        }\n        for (let j = 0; j < operations.length; j++) {\n            window["__checkBudget__"]();\n            const { id, op } = operations[j];\n            if (typeof op !== "function" && !isArray(op)) {\n                throwError(`No valid op found in ${JSON.stringify(operations[j])}`);\n            }\n        }\n    }\n}\nfunction toNegativeRange(positiveRange) {\n    window["__checkBudget__"]();\n    // return [-positiveRange[1], -positiveRange[0]];\n    return positiveRange.map(n => -n);\n}\nfunction isInRange(v, range) {\n    window["__checkBudget__"]();\n    const min = Math.min(range[0], range[1]);\n    const max = Math.max(range[0], range[1]);\n    return min <= v && v <= max;\n}\nconst DATA_STORE = new Map();\nfunction getDataFromStore(itemId, propName, defaultValue) {\n    window["__checkBudget__"]();\n    const key = itemId + "." + propName;\n    let justCreated = false;\n    let d = DATA_STORE.get(key);\n    if (typeof d === "undefined") {\n        d = framer_1.Animatable(defaultValue);\n        DATA_STORE.set(key, d);\n        justCreated = true;\n    }\n    return [justCreated, d];\n}\nconst getOpType = op => typeof op("$$$dummyId") === "function" ? "onMoveOnly" : "scrollAndLayer";\nconst ONMOVE_CALLED_MAP = new Map();\nfunction processOneOperation(id, op, scrollRange, result) {\n    window["__checkBudget__"]();\n    const { scroll: oldScroll } = result;\n    let inRange = false;\n    const wrapFuncsWithRangeCheck = overrides => {\n        window["__checkBudget__"]();\n        const os = {};\n        for (let key in overrides) {\n            const value = overrides[key];\n            let newValue = value;\n            if (typeof value === "function") {\n                newValue = args => (inRange ? value(args) : undefined);\n            }\n            os[key] = newValue;\n        }\n        return os;\n    };\n    const opType = getOpType(op);\n    result.scroll = props => {\n        window["__checkBudget__"]();\n        let opOnMove, restOverrides = {};\n        if (opType === "onMoveOnly")\n            opOnMove = op(id);\n        else {\n            const _a = op(id).$$$scroll(scrollRange)(props), { onMove } = _a, rest = __rest(_a, ["onMove"]);\n            opOnMove = onMove;\n            restOverrides = rest;\n        }\n        let lastY, lastTimeStamp;\n        return mergeOverrides(Object.assign({}, wrapFuncsWithRangeCheck(restOverrides), { onMove(scrollProps) {\n                window["__checkBudget__"]();\n                const { y } = scrollProps;\n                let vy = 0;\n                if (typeof lastY !== "undefined")\n                    vy = -(y - lastY) / (Date.now() - lastTimeStamp);\n                if (vy === 0)\n                    vy = 1; //TODO is this correct?\n                lastTimeStamp = Date.now();\n                lastY = y;\n                inRange = isInRange(y, scrollRange);\n                if (inRange) {\n                    const vyInMap = ONMOVE_CALLED_MAP.get(opOnMove);\n                    const didntRunInThisDirection = typeof vyInMap === "undefined" ||\n                        Math.sign(vyInMap) !== Math.sign(vy);\n                    // opType === "onMoveOnly" &&\n                    //   console.log(\n                    //     "vyInMap",\n                    //     vyInMap,\n                    //     "opOnMove",\n                    //     opOnMove,\n                    //     "didntRunInThisDirection",\n                    //     didntRunInThisDirection\n                    //   );\n                    if (opOnMove &&\n                        (didntRunInThisDirection || opType === "scrollAndLayer")) {\n                        opOnMove(Object.assign({}, scrollProps, { vy }));\n                        ONMOVE_CALLED_MAP.set(opOnMove, vy);\n                    }\n                }\n            } }), oldScroll && oldScroll(props));\n    };\n    const opWithId = op(id); // THIS IS A MUST!\n    if (opType === "scrollAndLayer" && typeof opWithId.$$$layer === "function") {\n        const layerOp = opWithId.$$$layer(scrollRange);\n        if (typeof layerOp === "function") {\n            const oldIdValue = result[id];\n            result[id] = props => {\n                window["__checkBudget__"]();\n                return mergeOverrides(wrapFuncsWithRangeCheck(layerOp(props)), oldIdValue && oldIdValue(props));\n            };\n        }\n        else {\n            throw `layerOp isn\'t a function! ${layerOp}`;\n        }\n    }\n}\nfunction scrollOverrides(...params) {\n    window["__checkBudget__"]();\n    validateSOParams(params);\n    const result = { scroll: undefined };\n    for (let i = 0; i < params.length; i += 2) {\n        window["__checkBudget__"]();\n        const scrollRange = toNegativeRange(params[i]);\n        const operations = params[i + 1];\n        operations.forEach(operation => {\n            window["__checkBudget__"]();\n            const { id, op } = operation;\n            const ids = (isArray(id) ? id : [id]);\n            const ops = isArray(op) ? op : [op];\n            ids.forEach(i => ops.forEach(o => processOneOperation(i, o, scrollRange, result)));\n        });\n    }\n    return result;\n}\nexports.scrollOverrides = scrollOverrides;\nexports.modulate = (propName, outputRange, dataValue) => itemId => {\n    window["__checkBudget__"]();\n    // TODO validate outputRange\n    const dvalue = dataValue ||\n        getDataFromStore(itemId, propName, framer_1.Animatable(outputRange[0]))[1];\n    return {\n        $$$scroll: ([first, second]) => props => ({\n            onMove({ y }) {\n                window["__checkBudget__"]();\n                const output = framer_1.transform([{ y: first }, { y: second }], [{ [propName]: outputRange[0] }, { [propName]: outputRange[1] }], { limit: true })({ y });\n                // console.log(\n                //   "onMove in modulate",\n                //   "outputRange",\n                //   outputRange,\n                //   "y",\n                //   y,\n                //   "min",\n                //   first,\n                //   "max",\n                //   second,\n                //   "output",\n                //   output\n                // );\n                dvalue.set(output[propName]);\n            }\n        }),\n        $$$layer: range => props => ({\n            [propName]: dvalue\n        })\n    };\n};\nexports.speedY = (ratio, dataValue) => itemId => {\n    window["__checkBudget__"]();\n    let justCreated = false;\n    let dtop = dataValue;\n    if (typeof dataValue === "undefined") {\n        const [created, dstore] = getDataFromStore(itemId, "top", 0);\n        justCreated = created;\n        dtop = dstore;\n    }\n    let initialTop = undefined;\n    return {\n        $$$scroll: range => props => ({\n            onMove({ y }) {\n                window["__checkBudget__"]();\n                if (!justCreated && typeof initialTop === "undefined") {\n                    initialTop = dtop.get();\n                }\n                dtop.set((y - range[0]) * ratio + initialTop);\n            }\n        }),\n        $$$layer: range => props => {\n            window["__checkBudget__"]();\n            // console.log("initialTop", initialTop);\n            if (justCreated)\n                initialTop = props.top;\n            dtop.set(initialTop);\n            return {\n                top: dtop\n            };\n        }\n    };\n};\nexports.stickyY = (dataValue) => itemId => {\n    window["__checkBudget__"]();\n    return exports.speedY(-1, dataValue)(itemId);\n};\nexports.snapY = () => itemId => {\n    window["__checkBudget__"]();\n    const [_, contentOffsetY] = getDataFromStore("$$$scroll", "contentOffsetY", 0);\n    let currentY = 0;\n    const snapIt = range => {\n        window["__checkBudget__"]();\n        const mid = Math.abs((range[1] - range[0]) / 2);\n        // console.log("currentY", currentY, "mid", mid, "range", range);\n        if (Math.abs(currentY - range[0]) < mid) {\n            framer_1.animate.ease(contentOffsetY, range[0], { duration: 0.2 });\n        }\n        else {\n            framer_1.animate.ease(contentOffsetY, range[1], { duration: 0.2 });\n        }\n    };\n    return {\n        $$$scroll: range => props => ({\n            onMove({ y }) {\n                window["__checkBudget__"]();\n                currentY = y;\n            },\n            onMouseWheelEnd() {\n                window["__checkBudget__"]();\n                snapIt(range);\n            },\n            onMouseUp() {\n                window["__checkBudget__"]();\n                snapIt(range);\n            },\n            contentOffsetY\n        })\n    };\n};\n// export function stickyScrollY(...stickyTopRanges) {\n//   const data = Data({ top: Animatable(0) });\n//   let initialTop = 0;\n//   const scrollOverrides = props => ({\n//     onMove({ y }) {\n//       const inRange = ([min, max], v) => min <= v && v <= max;\n//       stickyTopRanges.forEach(range => {\n//         if (inRange(range, Math.abs(y))) {\n//           data.top.set(-y);\n//         }\n//       });\n//     }\n//   });\n//   const layerOverrides = ({ top }) => {\n//     data.top.set(top);\n//     initialTop = top;\n//     return {\n//       top: data.top\n//     };\n//   };\n//   return [scrollOverrides, layerOverrides];\n// }\n// export function scrollAwayHeader_old() {\n//   const data = Data({ headerTop: Animatable(0) });\n//   let isAnimating = false;\n//   async function setHeaderTop(top) {\n//     if (!isAnimating) {\n//       isAnimating = true;\n//       await animate.ease(data.headerTop, top, { duration: 0.1 }).finished;\n//       isAnimating = false;\n//     }\n//   }\n//   let headerHeight = 0;\n//   const scrollOverrides = props => {\n//     let lastY, vy, lastTimestamp;\n//     //TODO this is a bad way to determine the scroll height\n//     const scrollMax =\n//       props.children[0].props.children[0].props.height - props.height;\n//     return {\n//       onMove({ y }) {\n//         if (typeof lastY !== "undefined") {\n//           vy = (y - lastY) / (Date.now() - lastTimestamp);\n//         }\n//         lastY = y;\n//         lastTimestamp = Date.now();\n//         // console.log("vy", vy, "scrollMax", scrollMax);\n//         if (vy > 0 && y > -scrollMax) {\n//           setHeaderTop(0);\n//         } else if (vy < 0 && y <= -headerHeight) {\n//           setHeaderTop(-headerHeight);\n//         }\n//       }\n//     };\n//   };\n//   const layerOverrides = props => {\n//     headerHeight = props.height;\n//     return {\n//       top: data.headerTop\n//     };\n//   };\n//   return [scrollOverrides, layerOverrides];\n// }\nfunction scrollAwayHeader(headerHeight, scrollMax) {\n    window["__checkBudget__"]();\n    const data = framer_1.Data({ headerTop: framer_1.Animatable(0) });\n    let isAnimating = false;\n    function setHeaderTop(top) {\n        return __awaiter(this, void 0, void 0, function* () {\n            window["__checkBudget__"]();\n            if (!isAnimating) {\n                isAnimating = true;\n                yield framer_1.animate.ease(data.headerTop, top, { duration: 0.1 }).finished;\n                isAnimating = false;\n            }\n        });\n    }\n    const overrides = scrollOverrides([headerHeight, scrollMax], [\n        {\n            op: itemId => ({ vy, y }) => {\n                window["__checkBudget__"]();\n                if (vy < 0 && y > -scrollMax) {\n                    setHeaderTop(0);\n                }\n                else if (vy > 0 && y <= -headerHeight) {\n                    setHeaderTop(-headerHeight);\n                }\n            }\n        }\n    ]);\n    const headerOverride = props => {\n        window["__checkBudget__"]();\n        return { top: data.headerTop };\n    };\n    return [overrides.scroll, headerOverride];\n}\nexports.scrollAwayHeader = scrollAwayHeader;\nfunction mergeOverrides(...overrides) {\n    window["__checkBudget__"]();\n    return overrides.reduce((merged, o) => {\n        window["__checkBudget__"]();\n        if (typeof o === "object") {\n            for (let key in o) {\n                const valueInMerged = merged[key];\n                if (typeof valueInMerged === "undefined") {\n                    merged[key] = o[key];\n                }\n                else if (typeof valueInMerged === "function") {\n                    if (typeof o[key] === "function") {\n                        merged[key] = args => {\n                            window["__checkBudget__"]();\n                            valueInMerged(args);\n                            o[key](args);\n                        };\n                    }\n                    else {\n                        console.error(`Incompatible types (key=${key})`, valueInMerged, o[key]);\n                        throw `Incompatible types (key=${key})`;\n                    }\n                }\n                else {\n                    console.log(`Key already appeared (key=${key}), using existing value`, valueInMerged, "New value dropped", o[key]);\n                }\n            }\n        }\n        return merged;\n    }, {});\n}\nexports.mergeOverrides = mergeOverrides;\nexports.__info__ = [];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1Njcm9sbE92ZXJyaWRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsY0FBYztBQUMxRTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhLDRCQUE0QjtBQUN6QyxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msc0JBQXNCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywyQkFBMkI7QUFDL0Q7QUFDQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQSxtREFBbUQsOEJBQThCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsU0FBUztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QywyQ0FBMkM7QUFDekY7QUFDQSx1QkFBdUIsSUFBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsZ0JBQWdCLEtBQUs7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxFQUFFO0FBQ2Y7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsSUFBSTtBQUN4QjtBQUNBLG9EQUFvRCxXQUFXLEdBQUcsWUFBWSxLQUFLLDZCQUE2QixHQUFHLDZCQUE2QixJQUFJLGNBQWMsR0FBRyxJQUFJO0FBQ3pLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsSUFBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsZ0JBQWdCO0FBQzdFO0FBQ0E7QUFDQSw2REFBNkQsZ0JBQWdCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUk7QUFDeEI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBLGVBQWUsSUFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsTUFBTTtBQUNOLDhCQUE4QixNQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyQkFBMkI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0JBQWdCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLElBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0NBQW9DO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxnQkFBZ0I7QUFDbEY7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxJQUFJO0FBQ3JFLHlEQUF5RCxJQUFJO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxJQUFJO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29kZS9TY3JvbGxPdmVycmlkZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICByZXR1cm4gdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBmcmFtZXJfMSA9IHJlcXVpcmUoXCJmcmFtZXJcIik7XG5jb25zdCBpc0FycmF5ID0gYSA9PiBhIGluc3RhbmNlb2YgQXJyYXk7XG5mdW5jdGlvbiB2YWxpZGF0ZVNPUGFyYW1zKHBhcmFtcykge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIGNvbnN0IHRocm93RXJyb3IgPSBlID0+IHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIHRocm93IGAke2V9XG5cbiAgICAgIFVzYWdlIGV4YW1wbGVzOlxuXG4gICAgICAgIGNvbnN0IG92ZXJyaWRlcyA9IHNjcm9sbE92ZXJyaWRlcyhcbiAgICAgICAgICBbMCwgMjBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgaWQ6ICd0aXRsZScsIG9wOiBtb2R1bGF0ZSgnb3BhY2l0eScsIFswLCAxXSkgfVxuICAgICAgICAgIF1cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBvdmVycmlkZXMgPSBzY3JvbGxPdmVycmlkZXMoXG4gICAgICAgICAgWzAsIDIwXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IGlkOiAndGl0bGUnLCBvcDogc3RpY2t5WSgpIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFsyMCwgNDBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgaWQ6ICduYW1lJywgb3A6IHN0aWNreVkoKSB9LFxuICAgICAgICAgICAgeyBpZDogJ2NvbnRhY3QnLCBvcDogbW9kdWxhdGUoJ29wYWNpdHknLCBbMCwgMV0pIH1cbiAgICAgICAgICBdXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3Qgb3ZlcnJpZGVzID0gc2Nyb2xsT3ZlcnJpZGVzKFxuICAgICAgICAgIFswLCAyMF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyBpZDogWyd0aXRsZScsICduYW1lJ10sIG9wOiBzdGlja3lZKCkgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgWzIwLCA0MF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyBpZDogJ2NvbnRhY3QnLCBvcDogWyBzdGlja3lZKCksIG1vZHVsYXRlKCdvcGFjaXR5JywgWzAsIDFdKSBdIH1cbiAgICAgICAgICBdLFxuICAgICAgICApO1xuICBgO1xuICAgIH07XG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDAgfHwgcGFyYW1zLmxlbmd0aCAlIDIgIT09IDApIHtcbiAgICAgICAgdGhyb3dFcnJvcihgVGhlIG51bWJlciBvZiBwYXJhbWV0ZXJzIG11c3QgYmUgZXZlbiBhbmQgZ3JlYXRlciB0aGFuIDAuYCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1zLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBjb25zdCByYW5nZSA9IHBhcmFtc1tpXTtcbiAgICAgICAgaWYgKCFpc0Zpbml0ZShyYW5nZVswXSkgfHwgIWlzRmluaXRlKHJhbmdlWzFdKSB8fCByYW5nZVswXSA+IHJhbmdlWzFdKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKGBQYXJhbWV0ZXIgJHtKU09OLnN0cmluZ2lmeShyYW5nZSl9IGlzIG5vdCBhIHJhbmdlLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wZXJhdGlvbnMgPSBwYXJhbXNbaSArIDFdO1xuICAgICAgICBpZiAoIWlzQXJyYXkob3BlcmF0aW9ucykgfHwgb3BlcmF0aW9ucy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihgUGFyYW1ldGVyICR7SlNPTi5zdHJpbmdpZnkob3BlcmF0aW9ucyl9IGlzIG5vdCBhIG5vbi1lbXB0eSBhcnJheS5gKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG9wZXJhdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgY29uc3QgeyBpZCwgb3AgfSA9IG9wZXJhdGlvbnNbal07XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wICE9PSBcImZ1bmN0aW9uXCIgJiYgIWlzQXJyYXkob3ApKSB7XG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcihgTm8gdmFsaWQgb3AgZm91bmQgaW4gJHtKU09OLnN0cmluZ2lmeShvcGVyYXRpb25zW2pdKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHRvTmVnYXRpdmVSYW5nZShwb3NpdGl2ZVJhbmdlKSB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgLy8gcmV0dXJuIFstcG9zaXRpdmVSYW5nZVsxXSwgLXBvc2l0aXZlUmFuZ2VbMF1dO1xuICAgIHJldHVybiBwb3NpdGl2ZVJhbmdlLm1hcChuID0+IC1uKTtcbn1cbmZ1bmN0aW9uIGlzSW5SYW5nZSh2LCByYW5nZSkge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHJhbmdlWzBdLCByYW5nZVsxXSk7XG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgocmFuZ2VbMF0sIHJhbmdlWzFdKTtcbiAgICByZXR1cm4gbWluIDw9IHYgJiYgdiA8PSBtYXg7XG59XG5jb25zdCBEQVRBX1NUT1JFID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gZ2V0RGF0YUZyb21TdG9yZShpdGVtSWQsIHByb3BOYW1lLCBkZWZhdWx0VmFsdWUpIHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICBjb25zdCBrZXkgPSBpdGVtSWQgKyBcIi5cIiArIHByb3BOYW1lO1xuICAgIGxldCBqdXN0Q3JlYXRlZCA9IGZhbHNlO1xuICAgIGxldCBkID0gREFUQV9TVE9SRS5nZXQoa2V5KTtcbiAgICBpZiAodHlwZW9mIGQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZCA9IGZyYW1lcl8xLkFuaW1hdGFibGUoZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgREFUQV9TVE9SRS5zZXQoa2V5LCBkKTtcbiAgICAgICAganVzdENyZWF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gW2p1c3RDcmVhdGVkLCBkXTtcbn1cbmNvbnN0IGdldE9wVHlwZSA9IG9wID0+IHR5cGVvZiBvcChcIiQkJGR1bW15SWRcIikgPT09IFwiZnVuY3Rpb25cIiA/IFwib25Nb3ZlT25seVwiIDogXCJzY3JvbGxBbmRMYXllclwiO1xuY29uc3QgT05NT1ZFX0NBTExFRF9NQVAgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBwcm9jZXNzT25lT3BlcmF0aW9uKGlkLCBvcCwgc2Nyb2xsUmFuZ2UsIHJlc3VsdCkge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIGNvbnN0IHsgc2Nyb2xsOiBvbGRTY3JvbGwgfSA9IHJlc3VsdDtcbiAgICBsZXQgaW5SYW5nZSA9IGZhbHNlO1xuICAgIGNvbnN0IHdyYXBGdW5jc1dpdGhSYW5nZUNoZWNrID0gb3ZlcnJpZGVzID0+IHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIGNvbnN0IG9zID0ge307XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBvdmVycmlkZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gb3ZlcnJpZGVzW2tleV07XG4gICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gYXJncyA9PiAoaW5SYW5nZSA/IHZhbHVlKGFyZ3MpIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9zW2tleV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3M7XG4gICAgfTtcbiAgICBjb25zdCBvcFR5cGUgPSBnZXRPcFR5cGUob3ApO1xuICAgIHJlc3VsdC5zY3JvbGwgPSBwcm9wcyA9PiB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBsZXQgb3BPbk1vdmUsIHJlc3RPdmVycmlkZXMgPSB7fTtcbiAgICAgICAgaWYgKG9wVHlwZSA9PT0gXCJvbk1vdmVPbmx5XCIpXG4gICAgICAgICAgICBvcE9uTW92ZSA9IG9wKGlkKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBfYSA9IG9wKGlkKS4kJCRzY3JvbGwoc2Nyb2xsUmFuZ2UpKHByb3BzKSwgeyBvbk1vdmUgfSA9IF9hLCByZXN0ID0gX19yZXN0KF9hLCBbXCJvbk1vdmVcIl0pO1xuICAgICAgICAgICAgb3BPbk1vdmUgPSBvbk1vdmU7XG4gICAgICAgICAgICByZXN0T3ZlcnJpZGVzID0gcmVzdDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGFzdFksIGxhc3RUaW1lU3RhbXA7XG4gICAgICAgIHJldHVybiBtZXJnZU92ZXJyaWRlcyhPYmplY3QuYXNzaWduKHt9LCB3cmFwRnVuY3NXaXRoUmFuZ2VDaGVjayhyZXN0T3ZlcnJpZGVzKSwgeyBvbk1vdmUoc2Nyb2xsUHJvcHMpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHkgfSA9IHNjcm9sbFByb3BzO1xuICAgICAgICAgICAgICAgIGxldCB2eSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsYXN0WSAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICAgICAgdnkgPSAtKHkgLSBsYXN0WSkgLyAoRGF0ZS5ub3coKSAtIGxhc3RUaW1lU3RhbXApO1xuICAgICAgICAgICAgICAgIGlmICh2eSA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgdnkgPSAxOyAvL1RPRE8gaXMgdGhpcyBjb3JyZWN0P1xuICAgICAgICAgICAgICAgIGxhc3RUaW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGxhc3RZID0geTtcbiAgICAgICAgICAgICAgICBpblJhbmdlID0gaXNJblJhbmdlKHksIHNjcm9sbFJhbmdlKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5SYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2eUluTWFwID0gT05NT1ZFX0NBTExFRF9NQVAuZ2V0KG9wT25Nb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlkbnRSdW5JblRoaXNEaXJlY3Rpb24gPSB0eXBlb2YgdnlJbk1hcCA9PT0gXCJ1bmRlZmluZWRcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5zaWduKHZ5SW5NYXApICE9PSBNYXRoLnNpZ24odnkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBvcFR5cGUgPT09IFwib25Nb3ZlT25seVwiICYmXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBcInZ5SW5NYXBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZ5SW5NYXAsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm9wT25Nb3ZlXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBvcE9uTW92ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiZGlkbnRSdW5JblRoaXNEaXJlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGRpZG50UnVuSW5UaGlzRGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wT25Nb3ZlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoZGlkbnRSdW5JblRoaXNEaXJlY3Rpb24gfHwgb3BUeXBlID09PSBcInNjcm9sbEFuZExheWVyXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcE9uTW92ZShPYmplY3QuYXNzaWduKHt9LCBzY3JvbGxQcm9wcywgeyB2eSB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBPTk1PVkVfQ0FMTEVEX01BUC5zZXQob3BPbk1vdmUsIHZ5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gfSksIG9sZFNjcm9sbCAmJiBvbGRTY3JvbGwocHJvcHMpKTtcbiAgICB9O1xuICAgIGNvbnN0IG9wV2l0aElkID0gb3AoaWQpOyAvLyBUSElTIElTIEEgTVVTVCFcbiAgICBpZiAob3BUeXBlID09PSBcInNjcm9sbEFuZExheWVyXCIgJiYgdHlwZW9mIG9wV2l0aElkLiQkJGxheWVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY29uc3QgbGF5ZXJPcCA9IG9wV2l0aElkLiQkJGxheWVyKHNjcm9sbFJhbmdlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBsYXllck9wID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG9sZElkVmFsdWUgPSByZXN1bHRbaWRdO1xuICAgICAgICAgICAgcmVzdWx0W2lkXSA9IHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVyZ2VPdmVycmlkZXMod3JhcEZ1bmNzV2l0aFJhbmdlQ2hlY2sobGF5ZXJPcChwcm9wcykpLCBvbGRJZFZhbHVlICYmIG9sZElkVmFsdWUocHJvcHMpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBgbGF5ZXJPcCBpc24ndCBhIGZ1bmN0aW9uISAke2xheWVyT3B9YDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHNjcm9sbE92ZXJyaWRlcyguLi5wYXJhbXMpIHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICB2YWxpZGF0ZVNPUGFyYW1zKHBhcmFtcyk7XG4gICAgY29uc3QgcmVzdWx0ID0geyBzY3JvbGw6IHVuZGVmaW5lZCB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1zLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBjb25zdCBzY3JvbGxSYW5nZSA9IHRvTmVnYXRpdmVSYW5nZShwYXJhbXNbaV0pO1xuICAgICAgICBjb25zdCBvcGVyYXRpb25zID0gcGFyYW1zW2kgKyAxXTtcbiAgICAgICAgb3BlcmF0aW9ucy5mb3JFYWNoKG9wZXJhdGlvbiA9PiB7XG4gICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIG9wIH0gPSBvcGVyYXRpb247XG4gICAgICAgICAgICBjb25zdCBpZHMgPSAoaXNBcnJheShpZCkgPyBpZCA6IFtpZF0pO1xuICAgICAgICAgICAgY29uc3Qgb3BzID0gaXNBcnJheShvcCkgPyBvcCA6IFtvcF07XG4gICAgICAgICAgICBpZHMuZm9yRWFjaChpID0+IG9wcy5mb3JFYWNoKG8gPT4gcHJvY2Vzc09uZU9wZXJhdGlvbihpLCBvLCBzY3JvbGxSYW5nZSwgcmVzdWx0KSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMuc2Nyb2xsT3ZlcnJpZGVzID0gc2Nyb2xsT3ZlcnJpZGVzO1xuZXhwb3J0cy5tb2R1bGF0ZSA9IChwcm9wTmFtZSwgb3V0cHV0UmFuZ2UsIGRhdGFWYWx1ZSkgPT4gaXRlbUlkID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAvLyBUT0RPIHZhbGlkYXRlIG91dHB1dFJhbmdlXG4gICAgY29uc3QgZHZhbHVlID0gZGF0YVZhbHVlIHx8XG4gICAgICAgIGdldERhdGFGcm9tU3RvcmUoaXRlbUlkLCBwcm9wTmFtZSwgZnJhbWVyXzEuQW5pbWF0YWJsZShvdXRwdXRSYW5nZVswXSkpWzFdO1xuICAgIHJldHVybiB7XG4gICAgICAgICQkJHNjcm9sbDogKFtmaXJzdCwgc2Vjb25kXSkgPT4gcHJvcHMgPT4gKHtcbiAgICAgICAgICAgIG9uTW92ZSh7IHkgfSkge1xuICAgICAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IGZyYW1lcl8xLnRyYW5zZm9ybShbeyB5OiBmaXJzdCB9LCB7IHk6IHNlY29uZCB9XSwgW3sgW3Byb3BOYW1lXTogb3V0cHV0UmFuZ2VbMF0gfSwgeyBbcHJvcE5hbWVdOiBvdXRwdXRSYW5nZVsxXSB9XSwgeyBsaW1pdDogdHJ1ZSB9KSh7IHkgfSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgLy8gICBcIm9uTW92ZSBpbiBtb2R1bGF0ZVwiLFxuICAgICAgICAgICAgICAgIC8vICAgXCJvdXRwdXRSYW5nZVwiLFxuICAgICAgICAgICAgICAgIC8vICAgb3V0cHV0UmFuZ2UsXG4gICAgICAgICAgICAgICAgLy8gICBcInlcIixcbiAgICAgICAgICAgICAgICAvLyAgIHksXG4gICAgICAgICAgICAgICAgLy8gICBcIm1pblwiLFxuICAgICAgICAgICAgICAgIC8vICAgZmlyc3QsXG4gICAgICAgICAgICAgICAgLy8gICBcIm1heFwiLFxuICAgICAgICAgICAgICAgIC8vICAgc2Vjb25kLFxuICAgICAgICAgICAgICAgIC8vICAgXCJvdXRwdXRcIixcbiAgICAgICAgICAgICAgICAvLyAgIG91dHB1dFxuICAgICAgICAgICAgICAgIC8vICk7XG4gICAgICAgICAgICAgICAgZHZhbHVlLnNldChvdXRwdXRbcHJvcE5hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgICQkJGxheWVyOiByYW5nZSA9PiBwcm9wcyA9PiAoe1xuICAgICAgICAgICAgW3Byb3BOYW1lXTogZHZhbHVlXG4gICAgICAgIH0pXG4gICAgfTtcbn07XG5leHBvcnRzLnNwZWVkWSA9IChyYXRpbywgZGF0YVZhbHVlKSA9PiBpdGVtSWQgPT4ge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIGxldCBqdXN0Q3JlYXRlZCA9IGZhbHNlO1xuICAgIGxldCBkdG9wID0gZGF0YVZhbHVlO1xuICAgIGlmICh0eXBlb2YgZGF0YVZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNvbnN0IFtjcmVhdGVkLCBkc3RvcmVdID0gZ2V0RGF0YUZyb21TdG9yZShpdGVtSWQsIFwidG9wXCIsIDApO1xuICAgICAgICBqdXN0Q3JlYXRlZCA9IGNyZWF0ZWQ7XG4gICAgICAgIGR0b3AgPSBkc3RvcmU7XG4gICAgfVxuICAgIGxldCBpbml0aWFsVG9wID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiB7XG4gICAgICAgICQkJHNjcm9sbDogcmFuZ2UgPT4gcHJvcHMgPT4gKHtcbiAgICAgICAgICAgIG9uTW92ZSh7IHkgfSkge1xuICAgICAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgICAgIGlmICghanVzdENyZWF0ZWQgJiYgdHlwZW9mIGluaXRpYWxUb3AgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFRvcCA9IGR0b3AuZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGR0b3Auc2V0KCh5IC0gcmFuZ2VbMF0pICogcmF0aW8gKyBpbml0aWFsVG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgICQkJGxheWVyOiByYW5nZSA9PiBwcm9wcyA9PiB7XG4gICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5pdGlhbFRvcFwiLCBpbml0aWFsVG9wKTtcbiAgICAgICAgICAgIGlmIChqdXN0Q3JlYXRlZClcbiAgICAgICAgICAgICAgICBpbml0aWFsVG9wID0gcHJvcHMudG9wO1xuICAgICAgICAgICAgZHRvcC5zZXQoaW5pdGlhbFRvcCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRvcDogZHRvcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuZXhwb3J0cy5zdGlja3lZID0gKGRhdGFWYWx1ZSkgPT4gaXRlbUlkID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4gZXhwb3J0cy5zcGVlZFkoLTEsIGRhdGFWYWx1ZSkoaXRlbUlkKTtcbn07XG5leHBvcnRzLnNuYXBZID0gKCkgPT4gaXRlbUlkID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICBjb25zdCBbXywgY29udGVudE9mZnNldFldID0gZ2V0RGF0YUZyb21TdG9yZShcIiQkJHNjcm9sbFwiLCBcImNvbnRlbnRPZmZzZXRZXCIsIDApO1xuICAgIGxldCBjdXJyZW50WSA9IDA7XG4gICAgY29uc3Qgc25hcEl0ID0gcmFuZ2UgPT4ge1xuICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgY29uc3QgbWlkID0gTWF0aC5hYnMoKHJhbmdlWzFdIC0gcmFuZ2VbMF0pIC8gMik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3VycmVudFlcIiwgY3VycmVudFksIFwibWlkXCIsIG1pZCwgXCJyYW5nZVwiLCByYW5nZSk7XG4gICAgICAgIGlmIChNYXRoLmFicyhjdXJyZW50WSAtIHJhbmdlWzBdKSA8IG1pZCkge1xuICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5lYXNlKGNvbnRlbnRPZmZzZXRZLCByYW5nZVswXSwgeyBkdXJhdGlvbjogMC4yIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5lYXNlKGNvbnRlbnRPZmZzZXRZLCByYW5nZVsxXSwgeyBkdXJhdGlvbjogMC4yIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICAkJCRzY3JvbGw6IHJhbmdlID0+IHByb3BzID0+ICh7XG4gICAgICAgICAgICBvbk1vdmUoeyB5IH0pIHtcbiAgICAgICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50WSA9IHk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Nb3VzZVdoZWVsRW5kKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgICAgIHNuYXBJdChyYW5nZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Nb3VzZVVwKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgICAgIHNuYXBJdChyYW5nZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGVudE9mZnNldFlcbiAgICAgICAgfSlcbiAgICB9O1xufTtcbi8vIGV4cG9ydCBmdW5jdGlvbiBzdGlja3lTY3JvbGxZKC4uLnN0aWNreVRvcFJhbmdlcykge1xuLy8gICBjb25zdCBkYXRhID0gRGF0YSh7IHRvcDogQW5pbWF0YWJsZSgwKSB9KTtcbi8vICAgbGV0IGluaXRpYWxUb3AgPSAwO1xuLy8gICBjb25zdCBzY3JvbGxPdmVycmlkZXMgPSBwcm9wcyA9PiAoe1xuLy8gICAgIG9uTW92ZSh7IHkgfSkge1xuLy8gICAgICAgY29uc3QgaW5SYW5nZSA9IChbbWluLCBtYXhdLCB2KSA9PiBtaW4gPD0gdiAmJiB2IDw9IG1heDtcbi8vICAgICAgIHN0aWNreVRvcFJhbmdlcy5mb3JFYWNoKHJhbmdlID0+IHtcbi8vICAgICAgICAgaWYgKGluUmFuZ2UocmFuZ2UsIE1hdGguYWJzKHkpKSkge1xuLy8gICAgICAgICAgIGRhdGEudG9wLnNldCgteSk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH0pO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyAgIGNvbnN0IGxheWVyT3ZlcnJpZGVzID0gKHsgdG9wIH0pID0+IHtcbi8vICAgICBkYXRhLnRvcC5zZXQodG9wKTtcbi8vICAgICBpbml0aWFsVG9wID0gdG9wO1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICB0b3A6IGRhdGEudG9wXG4vLyAgICAgfTtcbi8vICAgfTtcbi8vICAgcmV0dXJuIFtzY3JvbGxPdmVycmlkZXMsIGxheWVyT3ZlcnJpZGVzXTtcbi8vIH1cbi8vIGV4cG9ydCBmdW5jdGlvbiBzY3JvbGxBd2F5SGVhZGVyX29sZCgpIHtcbi8vICAgY29uc3QgZGF0YSA9IERhdGEoeyBoZWFkZXJUb3A6IEFuaW1hdGFibGUoMCkgfSk7XG4vLyAgIGxldCBpc0FuaW1hdGluZyA9IGZhbHNlO1xuLy8gICBhc3luYyBmdW5jdGlvbiBzZXRIZWFkZXJUb3AodG9wKSB7XG4vLyAgICAgaWYgKCFpc0FuaW1hdGluZykge1xuLy8gICAgICAgaXNBbmltYXRpbmcgPSB0cnVlO1xuLy8gICAgICAgYXdhaXQgYW5pbWF0ZS5lYXNlKGRhdGEuaGVhZGVyVG9wLCB0b3AsIHsgZHVyYXRpb246IDAuMSB9KS5maW5pc2hlZDtcbi8vICAgICAgIGlzQW5pbWF0aW5nID0gZmFsc2U7XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIGxldCBoZWFkZXJIZWlnaHQgPSAwO1xuLy8gICBjb25zdCBzY3JvbGxPdmVycmlkZXMgPSBwcm9wcyA9PiB7XG4vLyAgICAgbGV0IGxhc3RZLCB2eSwgbGFzdFRpbWVzdGFtcDtcbi8vICAgICAvL1RPRE8gdGhpcyBpcyBhIGJhZCB3YXkgdG8gZGV0ZXJtaW5lIHRoZSBzY3JvbGwgaGVpZ2h0XG4vLyAgICAgY29uc3Qgc2Nyb2xsTWF4ID1cbi8vICAgICAgIHByb3BzLmNoaWxkcmVuWzBdLnByb3BzLmNoaWxkcmVuWzBdLnByb3BzLmhlaWdodCAtIHByb3BzLmhlaWdodDtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgb25Nb3ZlKHsgeSB9KSB7XG4vLyAgICAgICAgIGlmICh0eXBlb2YgbGFzdFkgIT09IFwidW5kZWZpbmVkXCIpIHtcbi8vICAgICAgICAgICB2eSA9ICh5IC0gbGFzdFkpIC8gKERhdGUubm93KCkgLSBsYXN0VGltZXN0YW1wKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBsYXN0WSA9IHk7XG4vLyAgICAgICAgIGxhc3RUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhcInZ5XCIsIHZ5LCBcInNjcm9sbE1heFwiLCBzY3JvbGxNYXgpO1xuLy8gICAgICAgICBpZiAodnkgPiAwICYmIHkgPiAtc2Nyb2xsTWF4KSB7XG4vLyAgICAgICAgICAgc2V0SGVhZGVyVG9wKDApO1xuLy8gICAgICAgICB9IGVsc2UgaWYgKHZ5IDwgMCAmJiB5IDw9IC1oZWFkZXJIZWlnaHQpIHtcbi8vICAgICAgICAgICBzZXRIZWFkZXJUb3AoLWhlYWRlckhlaWdodCk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cbi8vICAgICB9O1xuLy8gICB9O1xuLy8gICBjb25zdCBsYXllck92ZXJyaWRlcyA9IHByb3BzID0+IHtcbi8vICAgICBoZWFkZXJIZWlnaHQgPSBwcm9wcy5oZWlnaHQ7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHRvcDogZGF0YS5oZWFkZXJUb3Bcbi8vICAgICB9O1xuLy8gICB9O1xuLy8gICByZXR1cm4gW3Njcm9sbE92ZXJyaWRlcywgbGF5ZXJPdmVycmlkZXNdO1xuLy8gfVxuZnVuY3Rpb24gc2Nyb2xsQXdheUhlYWRlcihoZWFkZXJIZWlnaHQsIHNjcm9sbE1heCkge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIGNvbnN0IGRhdGEgPSBmcmFtZXJfMS5EYXRhKHsgaGVhZGVyVG9wOiBmcmFtZXJfMS5BbmltYXRhYmxlKDApIH0pO1xuICAgIGxldCBpc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIHNldEhlYWRlclRvcCh0b3ApIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgaWYgKCFpc0FuaW1hdGluZykge1xuICAgICAgICAgICAgICAgIGlzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB5aWVsZCBmcmFtZXJfMS5hbmltYXRlLmVhc2UoZGF0YS5oZWFkZXJUb3AsIHRvcCwgeyBkdXJhdGlvbjogMC4xIH0pLmZpbmlzaGVkO1xuICAgICAgICAgICAgICAgIGlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBvdmVycmlkZXMgPSBzY3JvbGxPdmVycmlkZXMoW2hlYWRlckhlaWdodCwgc2Nyb2xsTWF4XSwgW1xuICAgICAgICB7XG4gICAgICAgICAgICBvcDogaXRlbUlkID0+ICh7IHZ5LCB5IH0pID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgICAgICBpZiAodnkgPCAwICYmIHkgPiAtc2Nyb2xsTWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEhlYWRlclRvcCgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodnkgPiAwICYmIHkgPD0gLWhlYWRlckhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRIZWFkZXJUb3AoLWhlYWRlckhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXSk7XG4gICAgY29uc3QgaGVhZGVyT3ZlcnJpZGUgPSBwcm9wcyA9PiB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICByZXR1cm4geyB0b3A6IGRhdGEuaGVhZGVyVG9wIH07XG4gICAgfTtcbiAgICByZXR1cm4gW292ZXJyaWRlcy5zY3JvbGwsIGhlYWRlck92ZXJyaWRlXTtcbn1cbmV4cG9ydHMuc2Nyb2xsQXdheUhlYWRlciA9IHNjcm9sbEF3YXlIZWFkZXI7XG5mdW5jdGlvbiBtZXJnZU92ZXJyaWRlcyguLi5vdmVycmlkZXMpIHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4gb3ZlcnJpZGVzLnJlZHVjZSgobWVyZ2VkLCBvKSA9PiB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBpZiAodHlwZW9mIG8gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBvKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVJbk1lcmdlZCA9IG1lcmdlZFtrZXldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWVJbk1lcmdlZCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBtZXJnZWRba2V5XSA9IG9ba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlSW5NZXJnZWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ba2V5XSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXJnZWRba2V5XSA9IGFyZ3MgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlSW5NZXJnZWQoYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb1trZXldKGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEluY29tcGF0aWJsZSB0eXBlcyAoa2V5PSR7a2V5fSlgLCB2YWx1ZUluTWVyZ2VkLCBvW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgYEluY29tcGF0aWJsZSB0eXBlcyAoa2V5PSR7a2V5fSlgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgS2V5IGFscmVhZHkgYXBwZWFyZWQgKGtleT0ke2tleX0pLCB1c2luZyBleGlzdGluZyB2YWx1ZWAsIHZhbHVlSW5NZXJnZWQsIFwiTmV3IHZhbHVlIGRyb3BwZWRcIiwgb1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICB9LCB7fSk7XG59XG5leHBvcnRzLm1lcmdlT3ZlcnJpZGVzID0gbWVyZ2VPdmVycmlkZXM7XG5leHBvcnRzLl9faW5mb19fID0gW107XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/ScrollOverrides.ts\n'
          );

          /***/
        },

      /***/ "./code/SimpleExamples.tsx":
        /*!*********************************!*\
  !*** ./code/SimpleExamples.tsx ***!
  \*********************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          "use strict";
          eval(
            '\nObject.defineProperty(exports, "__esModule", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ "framer");\nconst Parallax_1 = __webpack_require__(/*! ./Parallax */ "./code/Parallax.tsx");\nconst data = framer_1.Data({ rotation: framer_1.Animatable(0) });\nconst overrides = Parallax_1.scrollOverrides([100, 200], [{ id: "sticky100200", op: Parallax_1.stickyY() }], \n//   [300, 400],\n//   [{ id: "sticky100200", op: modulate("opacity", [1, 0]) }],\n[0, 1000], [\n    { id: "speed0", op: Parallax_1.speedY(0) },\n    { id: "speed05", op: Parallax_1.speedY(0.5) },\n    { id: "speedminus1", op: Parallax_1.speedY(-1) },\n    { id: "speedminus2", op: Parallax_1.speedY(-2) },\n    { id: "speed1", op: Parallax_1.speedY(1) },\n    { id: "opacity", op: Parallax_1.modulate("opacity", [1, 0]) },\n    { id: "bg", op: Parallax_1.modulate("background", ["red", "black"]) }\n], [600, 650], [\n    {\n        // This function will only be executed once per direction when\n        // the scrolling position falls into the range specified above.\n        // i.e. scrolling down, it\'ll be called, but if keep scrolling down,\n        // it won\'t be called anymore. But if scrolling up at this point,\n        // it\'ll be called again.\n        //\n        // Don\'t forget the "itemId =>" in the front!\n        op: itemId => ({ vy }) => {\n            window["__checkBudget__"]();\n            // vy: the velocity of scrolling in y direction\n            //   vy > 0: scrolling down\n            //   vy < 0: scrolling up\n            framer_1.animate.spring(data.rotation, vy > 0 ? 180 : 0);\n        }\n    }\n]);\nexports.Scroll = props => overrides.scroll(props);\nexports.Sticky100200 = props => overrides.sticky100200(props);\nexports.Speed0 = props => overrides.speed0(props);\nexports.Speed05 = props => overrides.speed05(props);\nexports.Speedminus1 = props => overrides.speedminus1(props);\nexports.Speedminus2 = props => overrides.speedminus2(props);\nexports.Speed1 = props => overrides.speed1(props);\nexports.Opacity = props => overrides.opacity(props);\nexports.Bg = props => overrides.bg(props);\nexports.TriggerAnimation = props => ({\n    rotation: data.rotation\n});\nexports.__info__ = [{ name: "Scroll", type: "override" }, { name: "Sticky100200", type: "override" }, { name: "Speed0", type: "override" }, { name: "Speed05", type: "override" }, { name: "Speedminus1", type: "override" }, { name: "Speedminus2", type: "override" }, { name: "Speed1", type: "override" }, { name: "Opacity", type: "override" }, { name: "Bg", type: "override" }, { name: "TriggerAnimation", type: "override" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1NpbXBsZUV4YW1wbGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9ELDJEQUEyRCwrQ0FBK0M7QUFDMUc7QUFDQSxPQUFPLHNEQUFzRDtBQUM3RDtBQUNBLEtBQUsseUNBQXlDO0FBQzlDLEtBQUssNENBQTRDO0FBQ2pELEtBQUssK0NBQStDO0FBQ3BELEtBQUssK0NBQStDO0FBQ3BELEtBQUsseUNBQXlDO0FBQzlDLEtBQUssNERBQTREO0FBQ2pFLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsS0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxxQkFBcUIsbUNBQW1DLEdBQUcseUNBQXlDLEdBQUcsbUNBQW1DLEdBQUcsb0NBQW9DLEdBQUcsd0NBQXdDLEdBQUcsd0NBQXdDLEdBQUcsbUNBQW1DLEdBQUcsb0NBQW9DLEdBQUcsK0JBQStCLEdBQUcsNkNBQTZDIiwiZmlsZSI6Ii4vY29kZS9TaW1wbGVFeGFtcGxlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IFBhcmFsbGF4XzEgPSByZXF1aXJlKFwiLi9QYXJhbGxheFwiKTtcbmNvbnN0IGRhdGEgPSBmcmFtZXJfMS5EYXRhKHsgcm90YXRpb246IGZyYW1lcl8xLkFuaW1hdGFibGUoMCkgfSk7XG5jb25zdCBvdmVycmlkZXMgPSBQYXJhbGxheF8xLnNjcm9sbE92ZXJyaWRlcyhbMTAwLCAyMDBdLCBbeyBpZDogXCJzdGlja3kxMDAyMDBcIiwgb3A6IFBhcmFsbGF4XzEuc3RpY2t5WSgpIH1dLCBcbi8vICAgWzMwMCwgNDAwXSxcbi8vICAgW3sgaWQ6IFwic3RpY2t5MTAwMjAwXCIsIG9wOiBtb2R1bGF0ZShcIm9wYWNpdHlcIiwgWzEsIDBdKSB9XSxcblswLCAxMDAwXSwgW1xuICAgIHsgaWQ6IFwic3BlZWQwXCIsIG9wOiBQYXJhbGxheF8xLnNwZWVkWSgwKSB9LFxuICAgIHsgaWQ6IFwic3BlZWQwNVwiLCBvcDogUGFyYWxsYXhfMS5zcGVlZFkoMC41KSB9LFxuICAgIHsgaWQ6IFwic3BlZWRtaW51czFcIiwgb3A6IFBhcmFsbGF4XzEuc3BlZWRZKC0xKSB9LFxuICAgIHsgaWQ6IFwic3BlZWRtaW51czJcIiwgb3A6IFBhcmFsbGF4XzEuc3BlZWRZKC0yKSB9LFxuICAgIHsgaWQ6IFwic3BlZWQxXCIsIG9wOiBQYXJhbGxheF8xLnNwZWVkWSgxKSB9LFxuICAgIHsgaWQ6IFwib3BhY2l0eVwiLCBvcDogUGFyYWxsYXhfMS5tb2R1bGF0ZShcIm9wYWNpdHlcIiwgWzEsIDBdKSB9LFxuICAgIHsgaWQ6IFwiYmdcIiwgb3A6IFBhcmFsbGF4XzEubW9kdWxhdGUoXCJiYWNrZ3JvdW5kXCIsIFtcInJlZFwiLCBcImJsYWNrXCJdKSB9XG5dLCBbNjAwLCA2NTBdLCBbXG4gICAge1xuICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgb25seSBiZSBleGVjdXRlZCBvbmNlIHBlciBkaXJlY3Rpb24gd2hlblxuICAgICAgICAvLyB0aGUgc2Nyb2xsaW5nIHBvc2l0aW9uIGZhbGxzIGludG8gdGhlIHJhbmdlIHNwZWNpZmllZCBhYm92ZS5cbiAgICAgICAgLy8gaS5lLiBzY3JvbGxpbmcgZG93biwgaXQnbGwgYmUgY2FsbGVkLCBidXQgaWYga2VlcCBzY3JvbGxpbmcgZG93bixcbiAgICAgICAgLy8gaXQgd29uJ3QgYmUgY2FsbGVkIGFueW1vcmUuIEJ1dCBpZiBzY3JvbGxpbmcgdXAgYXQgdGhpcyBwb2ludCxcbiAgICAgICAgLy8gaXQnbGwgYmUgY2FsbGVkIGFnYWluLlxuICAgICAgICAvL1xuICAgICAgICAvLyBEb24ndCBmb3JnZXQgdGhlIFwiaXRlbUlkID0+XCIgaW4gdGhlIGZyb250IVxuICAgICAgICBvcDogaXRlbUlkID0+ICh7IHZ5IH0pID0+IHtcbiAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgLy8gdnk6IHRoZSB2ZWxvY2l0eSBvZiBzY3JvbGxpbmcgaW4geSBkaXJlY3Rpb25cbiAgICAgICAgICAgIC8vICAgdnkgPiAwOiBzY3JvbGxpbmcgZG93blxuICAgICAgICAgICAgLy8gICB2eSA8IDA6IHNjcm9sbGluZyB1cFxuICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5zcHJpbmcoZGF0YS5yb3RhdGlvbiwgdnkgPiAwID8gMTgwIDogMCk7XG4gICAgICAgIH1cbiAgICB9XG5dKTtcbmV4cG9ydHMuU2Nyb2xsID0gcHJvcHMgPT4gb3ZlcnJpZGVzLnNjcm9sbChwcm9wcyk7XG5leHBvcnRzLlN0aWNreTEwMDIwMCA9IHByb3BzID0+IG92ZXJyaWRlcy5zdGlja3kxMDAyMDAocHJvcHMpO1xuZXhwb3J0cy5TcGVlZDAgPSBwcm9wcyA9PiBvdmVycmlkZXMuc3BlZWQwKHByb3BzKTtcbmV4cG9ydHMuU3BlZWQwNSA9IHByb3BzID0+IG92ZXJyaWRlcy5zcGVlZDA1KHByb3BzKTtcbmV4cG9ydHMuU3BlZWRtaW51czEgPSBwcm9wcyA9PiBvdmVycmlkZXMuc3BlZWRtaW51czEocHJvcHMpO1xuZXhwb3J0cy5TcGVlZG1pbnVzMiA9IHByb3BzID0+IG92ZXJyaWRlcy5zcGVlZG1pbnVzMihwcm9wcyk7XG5leHBvcnRzLlNwZWVkMSA9IHByb3BzID0+IG92ZXJyaWRlcy5zcGVlZDEocHJvcHMpO1xuZXhwb3J0cy5PcGFjaXR5ID0gcHJvcHMgPT4gb3ZlcnJpZGVzLm9wYWNpdHkocHJvcHMpO1xuZXhwb3J0cy5CZyA9IHByb3BzID0+IG92ZXJyaWRlcy5iZyhwcm9wcyk7XG5leHBvcnRzLlRyaWdnZXJBbmltYXRpb24gPSBwcm9wcyA9PiAoe1xuICAgIHJvdGF0aW9uOiBkYXRhLnJvdGF0aW9uXG59KTtcbmV4cG9ydHMuX19pbmZvX18gPSBbeyBuYW1lOiBcIlNjcm9sbFwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIlN0aWNreTEwMDIwMFwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIlNwZWVkMFwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIlNwZWVkMDVcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJTcGVlZG1pbnVzMVwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIlNwZWVkbWludXMyXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiU3BlZWQxXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiT3BhY2l0eVwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIkJnXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiVHJpZ2dlckFuaW1hdGlvblwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfV07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/SimpleExamples.tsx\n'
          );

          /***/
        },

      /***/ "./code/Snap.tsx":
        /*!***********************!*\
  !*** ./code/Snap.tsx ***!
  \***********************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          "use strict";
          eval(
            '\nObject.defineProperty(exports, "__esModule", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ "framer");\nconst ScrollOverrides_1 = __webpack_require__(/*! ./ScrollOverrides */ "./code/ScrollOverrides.ts");\nconst height = 440;\nconst overrides = ScrollOverrides_1.scrollOverrides([0, height], [{ op: ScrollOverrides_1.snapY() }], [height, 2 * height], [{ op: ScrollOverrides_1.snapY() }], [2 * height, 3 * height], [{ op: ScrollOverrides_1.snapY() }]);\n// export const Scroll: Override = props => overrides.scroll(props);\nlet scrollContentOffsetY;\nexports.ScrollToLayer1 = () => ({\n    onTap() {\n        window["__checkBudget__"]();\n        framer_1.animate(scrollContentOffsetY, 800);\n    }\n});\nexports.Scroll = props => {\n    window["__checkBudget__"]();\n    const os = overrides.scroll(props);\n    scrollContentOffsetY = os.contentOffsetY;\n    return os;\n};\nexports.__info__ = [{ name: "ScrollToLayer1", type: "override" }, { name: "Scroll", type: "override" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1NuYXAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLGdDQUFnQywyQkFBMkIsZ0NBQWdDLCtCQUErQixnQ0FBZ0M7QUFDN047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQyxHQUFHLG1DQUFtQyIsImZpbGUiOiIuL2NvZGUvU25hcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IFNjcm9sbE92ZXJyaWRlc18xID0gcmVxdWlyZShcIi4vU2Nyb2xsT3ZlcnJpZGVzXCIpO1xuY29uc3QgaGVpZ2h0ID0gNDQwO1xuY29uc3Qgb3ZlcnJpZGVzID0gU2Nyb2xsT3ZlcnJpZGVzXzEuc2Nyb2xsT3ZlcnJpZGVzKFswLCBoZWlnaHRdLCBbeyBvcDogU2Nyb2xsT3ZlcnJpZGVzXzEuc25hcFkoKSB9XSwgW2hlaWdodCwgMiAqIGhlaWdodF0sIFt7IG9wOiBTY3JvbGxPdmVycmlkZXNfMS5zbmFwWSgpIH1dLCBbMiAqIGhlaWdodCwgMyAqIGhlaWdodF0sIFt7IG9wOiBTY3JvbGxPdmVycmlkZXNfMS5zbmFwWSgpIH1dKTtcbi8vIGV4cG9ydCBjb25zdCBTY3JvbGw6IE92ZXJyaWRlID0gcHJvcHMgPT4gb3ZlcnJpZGVzLnNjcm9sbChwcm9wcyk7XG5sZXQgc2Nyb2xsQ29udGVudE9mZnNldFk7XG5leHBvcnRzLlNjcm9sbFRvTGF5ZXIxID0gKCkgPT4gKHtcbiAgICBvblRhcCgpIHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIGZyYW1lcl8xLmFuaW1hdGUoc2Nyb2xsQ29udGVudE9mZnNldFksIDgwMCk7XG4gICAgfVxufSk7XG5leHBvcnRzLlNjcm9sbCA9IHByb3BzID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICBjb25zdCBvcyA9IG92ZXJyaWRlcy5zY3JvbGwocHJvcHMpO1xuICAgIHNjcm9sbENvbnRlbnRPZmZzZXRZID0gb3MuY29udGVudE9mZnNldFk7XG4gICAgcmV0dXJuIG9zO1xufTtcbmV4cG9ydHMuX19pbmZvX18gPSBbeyBuYW1lOiBcIlNjcm9sbFRvTGF5ZXIxXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiU2Nyb2xsXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9XTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./code/Snap.tsx\n'
          );

          /***/
        },

      /***/ "./code/StickyScroll.tsx":
        /*!*******************************!*\
  !*** ./code/StickyScroll.tsx ***!
  \*******************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          "use strict";
          eval(
            '\nObject.defineProperty(exports, "__esModule", { value: true });\nconst Parallax_1 = __webpack_require__(/*! ./Parallax */ "./code/Parallax.tsx");\n// import { stickyScrollY, mergeOverrides } from "./Parallax";\n// const titleHeight = 71 + 10;\n// const [scrollOverridesAbout, aboutOverrides] = stickyScrollY([\n//   422,\n//   696 - titleHeight\n// ]);\n// const [scrollOverridesPort, portOverrides] = stickyScrollY([\n//   696,\n//   1136 - titleHeight\n// ]);\n// const [scrollOverridesContact, contactOverrides] = stickyScrollY([\n//   1136,\n//   1500 - titleHeight\n// ]);\n// export const Scroll: Override = props =>\n//   mergeOverrides(\n//     scrollOverridesAbout(props),\n//     scrollOverridesPort(props),\n//     scrollOverridesContact(props)\n//   );\n// export const About: Override = props => aboutOverrides(props);\n// export const Portfolio: Override = props => portOverrides(props);\n// export const Contact: Override = props => contactOverrides(props);\nconst titleHeight = 71 + 10;\nconst overrides = Parallax_1.scrollOverrides([422, 696 - titleHeight], [{ id: "about", op: Parallax_1.stickyY() }], [696, 1136 - titleHeight], [{ id: "portfolio", op: Parallax_1.stickyY() }], [1136, 1500 - titleHeight], [{ id: "contact", op: Parallax_1.stickyY() }]);\nexports.Scroll = props => overrides.scroll(props);\nexports.About = props => overrides.about(props);\nexports.Portfolio = props => overrides.portfolio(props);\nexports.Contact = props => overrides.contact(props);\nexports.__info__ = [{ name: "Scroll", type: "override" }, { name: "About", type: "override" }, { name: "Portfolio", type: "override" }, { name: "Contact", type: "override" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1N0aWNreVNjcm9sbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLFdBQVcsZ0NBQWdDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsd0NBQXdDLGdDQUFnQyw0Q0FBNEMsaUNBQWlDLDBDQUEwQztBQUN4UTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQ0FBbUMsR0FBRyxrQ0FBa0MsR0FBRyxzQ0FBc0MsR0FBRyxvQ0FBb0MiLCJmaWxlIjoiLi9jb2RlL1N0aWNreVNjcm9sbC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFBhcmFsbGF4XzEgPSByZXF1aXJlKFwiLi9QYXJhbGxheFwiKTtcbi8vIGltcG9ydCB7IHN0aWNreVNjcm9sbFksIG1lcmdlT3ZlcnJpZGVzIH0gZnJvbSBcIi4vUGFyYWxsYXhcIjtcbi8vIGNvbnN0IHRpdGxlSGVpZ2h0ID0gNzEgKyAxMDtcbi8vIGNvbnN0IFtzY3JvbGxPdmVycmlkZXNBYm91dCwgYWJvdXRPdmVycmlkZXNdID0gc3RpY2t5U2Nyb2xsWShbXG4vLyAgIDQyMixcbi8vICAgNjk2IC0gdGl0bGVIZWlnaHRcbi8vIF0pO1xuLy8gY29uc3QgW3Njcm9sbE92ZXJyaWRlc1BvcnQsIHBvcnRPdmVycmlkZXNdID0gc3RpY2t5U2Nyb2xsWShbXG4vLyAgIDY5Nixcbi8vICAgMTEzNiAtIHRpdGxlSGVpZ2h0XG4vLyBdKTtcbi8vIGNvbnN0IFtzY3JvbGxPdmVycmlkZXNDb250YWN0LCBjb250YWN0T3ZlcnJpZGVzXSA9IHN0aWNreVNjcm9sbFkoW1xuLy8gICAxMTM2LFxuLy8gICAxNTAwIC0gdGl0bGVIZWlnaHRcbi8vIF0pO1xuLy8gZXhwb3J0IGNvbnN0IFNjcm9sbDogT3ZlcnJpZGUgPSBwcm9wcyA9PlxuLy8gICBtZXJnZU92ZXJyaWRlcyhcbi8vICAgICBzY3JvbGxPdmVycmlkZXNBYm91dChwcm9wcyksXG4vLyAgICAgc2Nyb2xsT3ZlcnJpZGVzUG9ydChwcm9wcyksXG4vLyAgICAgc2Nyb2xsT3ZlcnJpZGVzQ29udGFjdChwcm9wcylcbi8vICAgKTtcbi8vIGV4cG9ydCBjb25zdCBBYm91dDogT3ZlcnJpZGUgPSBwcm9wcyA9PiBhYm91dE92ZXJyaWRlcyhwcm9wcyk7XG4vLyBleHBvcnQgY29uc3QgUG9ydGZvbGlvOiBPdmVycmlkZSA9IHByb3BzID0+IHBvcnRPdmVycmlkZXMocHJvcHMpO1xuLy8gZXhwb3J0IGNvbnN0IENvbnRhY3Q6IE92ZXJyaWRlID0gcHJvcHMgPT4gY29udGFjdE92ZXJyaWRlcyhwcm9wcyk7XG5jb25zdCB0aXRsZUhlaWdodCA9IDcxICsgMTA7XG5jb25zdCBvdmVycmlkZXMgPSBQYXJhbGxheF8xLnNjcm9sbE92ZXJyaWRlcyhbNDIyLCA2OTYgLSB0aXRsZUhlaWdodF0sIFt7IGlkOiBcImFib3V0XCIsIG9wOiBQYXJhbGxheF8xLnN0aWNreVkoKSB9XSwgWzY5NiwgMTEzNiAtIHRpdGxlSGVpZ2h0XSwgW3sgaWQ6IFwicG9ydGZvbGlvXCIsIG9wOiBQYXJhbGxheF8xLnN0aWNreVkoKSB9XSwgWzExMzYsIDE1MDAgLSB0aXRsZUhlaWdodF0sIFt7IGlkOiBcImNvbnRhY3RcIiwgb3A6IFBhcmFsbGF4XzEuc3RpY2t5WSgpIH1dKTtcbmV4cG9ydHMuU2Nyb2xsID0gcHJvcHMgPT4gb3ZlcnJpZGVzLnNjcm9sbChwcm9wcyk7XG5leHBvcnRzLkFib3V0ID0gcHJvcHMgPT4gb3ZlcnJpZGVzLmFib3V0KHByb3BzKTtcbmV4cG9ydHMuUG9ydGZvbGlvID0gcHJvcHMgPT4gb3ZlcnJpZGVzLnBvcnRmb2xpbyhwcm9wcyk7XG5leHBvcnRzLkNvbnRhY3QgPSBwcm9wcyA9PiBvdmVycmlkZXMuY29udGFjdChwcm9wcyk7XG5leHBvcnRzLl9faW5mb19fID0gW3sgbmFtZTogXCJTY3JvbGxcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJBYm91dFwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIlBvcnRmb2xpb1wiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIkNvbnRhY3RcIiwgdHlwZTogXCJvdmVycmlkZVwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/StickyScroll.tsx\n'
          );

          /***/
        },

      /***/ "./code/canvas.tsx":
        /*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", { value: true });
          // WARNING: this file is auto generated, any changes will be lost
          const framer_1 = __webpack_require__(/*! framer */ "framer");
          const canvas = framer_1.CanvasStore.shared({
            children: [
              {
                componentClass: "Frame",
                props: {
                  key: "GqOLIUSCX",
                  id: "id_GqOLIUSCX",
                  willChangeTransform: false,
                  opacity: 1,
                  radius: 14,
                  rotation: 0,
                  visible: true,
                  overflow: "visible",
                  background: {
                    r: 17,
                    g: 153,
                    b: 238,
                    a: 1,
                    h: 203.07692307692307,
                    s: 0.8666666666666667,
                    l: 0.5,
                    initialValue: "#1199EE",
                    roundA: 1,
                    format: "rgb"
                  },
                  shadows: [],
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: 442,
                  height: 70,
                  aspectRatio: null,
                  centerX: "25.09765625%",
                  centerY: "10.526315789473683%",
                  parentSize: null
                },
                children: [
                  {
                    componentClass: "Text",
                    props: {
                      key: "jXDIZNADb",
                      id: "id_jXDIZNADb",
                      willChangeTransform: false,
                      opacity: 1,
                      rotation: 0,
                      visible: true,
                      autoSize: true,
                      size: { height: 55, width: 312 },
                      shadows: [],
                      rawHTML:
                        '<div data-offset-key="6eo9-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="6eo9-0-0" style="tab-size:4;font-weight:400;font-family:&quot;HelveticaNeue&quot;, &quot;Helvetica Neue&quot;, sans-serif;-webkit-text-fill-color:#fff;font-size:46px;letter-spacing:0px;line-height:1.2"><span data-text="true">Sticky 100-200</span></span></div>',
                      left: null,
                      right: null,
                      top: null,
                      bottom: null,
                      width: 312,
                      height: 55,
                      aspectRatio: null,
                      centerX: "47.511312217194565%",
                      centerY: "50.71428571428571%",
                      parentSize: null
                    },
                    name: null
                  }
                ],
                name: "Label"
              }
            ]
          });
          exports.Label = framer_1.createDesignComponent(
            canvas,
            "id_GqOLIUSCX",
            {},
            442,
            70
          );
          exports.__info__ = [];

          /***/
        },

      /***/ "./code/iPhoneXRScrolling.tsx":
        /*!************************************!*\
  !*** ./code/iPhoneXRScrolling.tsx ***!
  \************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          "use strict";
          eval(
            '\nObject.defineProperty(exports, "__esModule", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ "framer");\nconst ScrollOverrides_1 = __webpack_require__(/*! ./ScrollOverrides */ "./code/ScrollOverrides.ts");\nconst data = framer_1.Data({\n    phoneNameSizeOpacity: framer_1.Animatable(0)\n});\nconst overrides = ScrollOverrides_1.scrollOverrides([0, 200], [{ id: "blocker", op: ScrollOverrides_1.modulate("opacity", [0, 1]) }], [100, 350], [\n    {\n        id: "iPhoneXR",\n        op: ScrollOverrides_1.speedY(2)\n    }\n], [300, 750], [\n    {\n        id: "iPhoneXR",\n        op: ScrollOverrides_1.modulate("scale", [1.5, 1])\n    }\n], [400, 500], [{ id: "phoneNameSize", op: ScrollOverrides_1.modulate("top", [850, 850]) }], [500, 1050], [\n    {\n        id: "iPhoneXR",\n        op: ScrollOverrides_1.stickyY()\n    },\n    { id: "phoneNameSize", op: ScrollOverrides_1.stickyY() }\n], [750, 800], [\n    {\n        op: itemId => ({ vy }) => {\n            window["__checkBudget__"]();\n            framer_1.animate.ease(data.phoneNameSizeOpacity, vy > 0 ? 1 : 0, {\n                duration: 0.2\n            });\n        }\n    }\n], [0, 3000], [{ id: "featureContainer", op: ScrollOverrides_1.modulate("top", [1180, 1180]) }], [800, 850], [{ id: "feature1", op: ScrollOverrides_1.modulate("opacity", [0, 1]) }], [850, 900], [{ id: "feature2", op: ScrollOverrides_1.modulate("opacity", [0, 1]) }], [900, 950], [{ id: "feature3", op: ScrollOverrides_1.modulate("opacity", [0, 1]) }], [950, 1000], [{ id: "feature4", op: ScrollOverrides_1.modulate("opacity", [0, 1]) }], [1000, 1050], [{ id: "feature5", op: ScrollOverrides_1.modulate("opacity", [0, 1]) }]);\nexports.Scroll = props => overrides.scroll(props);\nexports.Blocker = props => overrides.blocker(props);\nexports.IPhoneXR = props => overrides.iPhoneXR(props);\nexports.PhoneNameSize = props => (Object.assign({}, overrides.phoneNameSize(props), { opacity: data.phoneNameSizeOpacity }));\nexports.FeatureContainer = props => overrides.featureContainer(props);\nexports.Feature1 = props => overrides.feature1(props);\nexports.Feature2 = props => overrides.feature2(props);\nexports.Feature3 = props => overrides.feature3(props);\nexports.Feature4 = props => overrides.feature4(props);\nexports.Feature5 = props => overrides.feature5(props);\nexports.__info__ = [{ name: "Scroll", type: "override" }, { name: "Blocker", type: "override" }, { name: "IPhoneXR", type: "override" }, { name: "PhoneNameSize", type: "override" }, { name: "FeatureContainer", type: "override" }, { name: "Feature1", type: "override" }, { name: "Feature2", type: "override" }, { name: "Feature3", type: "override" }, { name: "Feature4", type: "override" }, { name: "Feature5", type: "override" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL2lQaG9uZVhSU2Nyb2xsaW5nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGdFQUFnRSxtRUFBbUU7QUFDbkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlFQUF5RTtBQUMxRjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMO0FBQ0E7QUFDQSx3QkFBd0IsS0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGdCQUFnQiw4RUFBOEUsaUJBQWlCLG9FQUFvRSxpQkFBaUIsb0VBQW9FLGlCQUFpQixvRUFBb0Usa0JBQWtCLG9FQUFvRSxtQkFBbUIsb0VBQW9FO0FBQzFnQjtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsbUNBQW1DLHFDQUFxQztBQUMxSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUNBQW1DLEdBQUcsb0NBQW9DLEdBQUcscUNBQXFDLEdBQUcsMENBQTBDLEdBQUcsNkNBQTZDLEdBQUcscUNBQXFDLEdBQUcscUNBQXFDLEdBQUcscUNBQXFDLEdBQUcscUNBQXFDLEdBQUcscUNBQXFDIiwiZmlsZSI6Ii4vY29kZS9pUGhvbmVYUlNjcm9sbGluZy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IFNjcm9sbE92ZXJyaWRlc18xID0gcmVxdWlyZShcIi4vU2Nyb2xsT3ZlcnJpZGVzXCIpO1xuY29uc3QgZGF0YSA9IGZyYW1lcl8xLkRhdGEoe1xuICAgIHBob25lTmFtZVNpemVPcGFjaXR5OiBmcmFtZXJfMS5BbmltYXRhYmxlKDApXG59KTtcbmNvbnN0IG92ZXJyaWRlcyA9IFNjcm9sbE92ZXJyaWRlc18xLnNjcm9sbE92ZXJyaWRlcyhbMCwgMjAwXSwgW3sgaWQ6IFwiYmxvY2tlclwiLCBvcDogU2Nyb2xsT3ZlcnJpZGVzXzEubW9kdWxhdGUoXCJvcGFjaXR5XCIsIFswLCAxXSkgfV0sIFsxMDAsIDM1MF0sIFtcbiAgICB7XG4gICAgICAgIGlkOiBcImlQaG9uZVhSXCIsXG4gICAgICAgIG9wOiBTY3JvbGxPdmVycmlkZXNfMS5zcGVlZFkoMilcbiAgICB9XG5dLCBbMzAwLCA3NTBdLCBbXG4gICAge1xuICAgICAgICBpZDogXCJpUGhvbmVYUlwiLFxuICAgICAgICBvcDogU2Nyb2xsT3ZlcnJpZGVzXzEubW9kdWxhdGUoXCJzY2FsZVwiLCBbMS41LCAxXSlcbiAgICB9XG5dLCBbNDAwLCA1MDBdLCBbeyBpZDogXCJwaG9uZU5hbWVTaXplXCIsIG9wOiBTY3JvbGxPdmVycmlkZXNfMS5tb2R1bGF0ZShcInRvcFwiLCBbODUwLCA4NTBdKSB9XSwgWzUwMCwgMTA1MF0sIFtcbiAgICB7XG4gICAgICAgIGlkOiBcImlQaG9uZVhSXCIsXG4gICAgICAgIG9wOiBTY3JvbGxPdmVycmlkZXNfMS5zdGlja3lZKClcbiAgICB9LFxuICAgIHsgaWQ6IFwicGhvbmVOYW1lU2l6ZVwiLCBvcDogU2Nyb2xsT3ZlcnJpZGVzXzEuc3RpY2t5WSgpIH1cbl0sIFs3NTAsIDgwMF0sIFtcbiAgICB7XG4gICAgICAgIG9wOiBpdGVtSWQgPT4gKHsgdnkgfSkgPT4ge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLmVhc2UoZGF0YS5waG9uZU5hbWVTaXplT3BhY2l0eSwgdnkgPiAwID8gMSA6IDAsIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC4yXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbl0sIFswLCAzMDAwXSwgW3sgaWQ6IFwiZmVhdHVyZUNvbnRhaW5lclwiLCBvcDogU2Nyb2xsT3ZlcnJpZGVzXzEubW9kdWxhdGUoXCJ0b3BcIiwgWzExODAsIDExODBdKSB9XSwgWzgwMCwgODUwXSwgW3sgaWQ6IFwiZmVhdHVyZTFcIiwgb3A6IFNjcm9sbE92ZXJyaWRlc18xLm1vZHVsYXRlKFwib3BhY2l0eVwiLCBbMCwgMV0pIH1dLCBbODUwLCA5MDBdLCBbeyBpZDogXCJmZWF0dXJlMlwiLCBvcDogU2Nyb2xsT3ZlcnJpZGVzXzEubW9kdWxhdGUoXCJvcGFjaXR5XCIsIFswLCAxXSkgfV0sIFs5MDAsIDk1MF0sIFt7IGlkOiBcImZlYXR1cmUzXCIsIG9wOiBTY3JvbGxPdmVycmlkZXNfMS5tb2R1bGF0ZShcIm9wYWNpdHlcIiwgWzAsIDFdKSB9XSwgWzk1MCwgMTAwMF0sIFt7IGlkOiBcImZlYXR1cmU0XCIsIG9wOiBTY3JvbGxPdmVycmlkZXNfMS5tb2R1bGF0ZShcIm9wYWNpdHlcIiwgWzAsIDFdKSB9XSwgWzEwMDAsIDEwNTBdLCBbeyBpZDogXCJmZWF0dXJlNVwiLCBvcDogU2Nyb2xsT3ZlcnJpZGVzXzEubW9kdWxhdGUoXCJvcGFjaXR5XCIsIFswLCAxXSkgfV0pO1xuZXhwb3J0cy5TY3JvbGwgPSBwcm9wcyA9PiBvdmVycmlkZXMuc2Nyb2xsKHByb3BzKTtcbmV4cG9ydHMuQmxvY2tlciA9IHByb3BzID0+IG92ZXJyaWRlcy5ibG9ja2VyKHByb3BzKTtcbmV4cG9ydHMuSVBob25lWFIgPSBwcm9wcyA9PiBvdmVycmlkZXMuaVBob25lWFIocHJvcHMpO1xuZXhwb3J0cy5QaG9uZU5hbWVTaXplID0gcHJvcHMgPT4gKE9iamVjdC5hc3NpZ24oe30sIG92ZXJyaWRlcy5waG9uZU5hbWVTaXplKHByb3BzKSwgeyBvcGFjaXR5OiBkYXRhLnBob25lTmFtZVNpemVPcGFjaXR5IH0pKTtcbmV4cG9ydHMuRmVhdHVyZUNvbnRhaW5lciA9IHByb3BzID0+IG92ZXJyaWRlcy5mZWF0dXJlQ29udGFpbmVyKHByb3BzKTtcbmV4cG9ydHMuRmVhdHVyZTEgPSBwcm9wcyA9PiBvdmVycmlkZXMuZmVhdHVyZTEocHJvcHMpO1xuZXhwb3J0cy5GZWF0dXJlMiA9IHByb3BzID0+IG92ZXJyaWRlcy5mZWF0dXJlMihwcm9wcyk7XG5leHBvcnRzLkZlYXR1cmUzID0gcHJvcHMgPT4gb3ZlcnJpZGVzLmZlYXR1cmUzKHByb3BzKTtcbmV4cG9ydHMuRmVhdHVyZTQgPSBwcm9wcyA9PiBvdmVycmlkZXMuZmVhdHVyZTQocHJvcHMpO1xuZXhwb3J0cy5GZWF0dXJlNSA9IHByb3BzID0+IG92ZXJyaWRlcy5mZWF0dXJlNShwcm9wcyk7XG5leHBvcnRzLl9faW5mb19fID0gW3sgbmFtZTogXCJTY3JvbGxcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJCbG9ja2VyXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiSVBob25lWFJcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJQaG9uZU5hbWVTaXplXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiRmVhdHVyZUNvbnRhaW5lclwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIkZlYXR1cmUxXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiRmVhdHVyZTJcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJGZWF0dXJlM1wiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIkZlYXR1cmU0XCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiRmVhdHVyZTVcIiwgdHlwZTogXCJvdmVycmlkZVwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/iPhoneXRScrolling.tsx\n'
          );

          /***/
        },

      /***/ "./package.js":
        /*!********************!*\
  !*** ./package.js ***!
  \********************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // The template for the dynamic webpack entry. Be aware of the variables

          const packageJson = __webpack_require__(
            /*! ./package.json */ "./package.json"
          );

          const package = {
            packageJson,
            sourceModules: {},
            dependencies: {}
          };

          // This is a special webpack thing that watches the whole directory
          // https://github.com/webpack/docs/wiki/context
          const ctx = __webpack_require__(
            "./code sync recursive \\.(t|j)s(x?)|\\.css$"
          );

          ctx.keys().forEach(key => {
            package.sourceModules[key] = () => ctx(key);
          });

          // The packages are passed in through a template
          const packages = {};

          packages["framer"] = () => {
            var package = {};
            try {
              package = __webpack_require__(/*! framer */ "framer");
            } catch (e) {
              console.log(e);
            }
            package.__framer__ = package.__framer__ || {};
            package.__framer__.packageJson = {
              name: "framer",
              version: "0.10.2",
              main: "build/framer.js",
              author: "Framer",
              license: "MIT",
              scripts: {
                coverage: "jest --config jest.json --coverage",
                test: "jest --config jest.json",
                watch: "jest --config jest.json --watch"
              },
              devDependencies: {
                "@microsoft/api-documenter": "^1.5.47",
                "@microsoft/api-extractor": "^7.0.2",
                "@types/chalk": "^2.2.0",
                "@types/draft-js": "0.10.19",
                "@types/enzyme": "^3.1.10",
                "@types/enzyme-adapter-react-16": "^1.0.3",
                "@types/hsluv": "https://github.com/framer/typed_hsluv#bump",
                "@types/jest": "^23.0.0",
                "@types/jest-diff": "^20.0.0",
                "@types/jest-matcher-utils": "^21.0.1",
                "@types/node": "^9.6.0",
                "@types/react": "^16",
                "@types/react-dom": "^16",
                "cache-loader": "^1.2.2",
                chalk: "^2.4.1",
                "convert-tsconfig-paths-to-webpack-aliases": "^0.9.2",
                "css.escape": "^1.5.1",
                "draft-js": "0.10.4",
                enzyme: "^3.3.0",
                "enzyme-adapter-react-16": "^1.1.1",
                eventemitter3: "^3.1.0",
                "fork-ts-checker-webpack-plugin": "^0.4.1",
                "hoist-non-react-statics": "^2.5.0",
                hsluv: "^0.0.3",
                immutable: "^3.8.2",
                jest: "^23.1.0",
                "jest-diff": "^23.6.0",
                "jest-junit": "^5.2.0",
                "progress-bar-webpack-plugin": "^1.11.0",
                raf: "^3.4.0",
                react: "~16.4",
                "react-dev-utils": "^5.0.1",
                "react-dom": "~16.4",
                semver: "^5.6.0",
                "ts-jest": "^23.10.5",
                "ts-loader": "^4.1.0",
                typescript: "^3.0.1",
                watch: "^1.0.2",
                webpack: "^4.4.1",
                "webpack-cli": "^3.1.2",
                "webpack-dev-server": "^3.1.10",
                xcssmatrix: "^0.2.2"
              },
              peerDependencies: { react: "^16.3", "react-dom": "^16.3" },
              tsdoc: { tsdocFlavor: "AEDoc" },
              framer: {
                components: [
                  {
                    name: "Scroll",
                    children: true,
                    properties: [
                      {
                        key: "direction",
                        title: "Direction",
                        kind: "enum",
                        options: ["horizontal", "vertical", "both"]
                      }
                    ]
                  },
                  { name: "Page" },
                  { name: "Stack" },
                  { name: "FramerAppleWatch38", type: "device" },
                  { name: "FramerAppleWatch42", type: "device" },
                  { name: "FramerSonySmartWatch", type: "device" },
                  { name: "FramerAppleIPhoneSE", type: "device" },
                  { name: "FramerAppleIPhone8", type: "device" },
                  { name: "FramerAppleIPhone8Plus", type: "device" },
                  { name: "FramerAppleIPhoneXS", type: "device" },
                  { name: "FramerAppleIPhoneXR", type: "device" },
                  { name: "FramerAppleIPhoneXSMax", type: "device" },
                  { name: "FramerGooglePixel2", type: "device" },
                  { name: "FramerGooglePixel2XL", type: "device" },
                  { name: "FramerGooglePixel3", type: "device" },
                  { name: "FramerGooglePixel3XL", type: "device" },
                  { name: "FramerSamsungNote5", type: "device" },
                  { name: "FramerSamsungGalaxyS9", type: "device" },
                  { name: "FramerAppleIPadAir", type: "device" },
                  { name: "FramerAppleIPadMini", type: "device" },
                  { name: "FramerAppleIPadPro", type: "device" },
                  { name: "FramerGoogleNexusTablet", type: "device" },
                  { name: "FramerMicrosoftSurfacePro3", type: "device" },
                  { name: "FramerMicrosoftSurfacePro4", type: "device" },
                  { name: "FramerAppleIMac", type: "device" },
                  { name: "FramerAppleThunderboltDisplay", type: "device" },
                  { name: "FramerAppleMacBook", type: "device" },
                  { name: "FramerAppleMacBookAir", type: "device" },
                  { name: "FramerAppleMacBookPro", type: "device" },
                  { name: "FramerDellXPS", type: "device" },
                  { name: "FramerMicrosoftSurfaceBook", type: "device" },
                  { name: "FramerSonyW850C", type: "device" },
                  { name: "FramerStoreArtwork", type: "device" },
                  { name: "FramerStoreIcon", type: "device" }
                ]
              }
            };
            return package;
          };

          package.dependencies = packages;

          exports.__framer__ = package;

          /***/
        },

      /***/ "./package.json":
        /*!**********************!*\
  !*** ./package.json ***!
  \**********************/
        /*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, name, version, scripts, default */
        /***/ function(module) {
          module.exports = {
            main: "dist/index.js",
            license: "MIT",
            devDependencies: {
              "@types/jest": "^23.3.12",
              "@types/react": "^16.0.31",
              ReactDOM: "./ReactDOM",
              framer: "^0.10.2",
              jest: "^23.6.0",
              react: "^16.3.0",
              "react-dom": "^16.3.0",
              "ts-jest": "^23.10.5",
              typescript: "^3.2.2"
            },
            peerDependencies: {
              framer: "^0.10.2",
              react: "^16.3.0",
              "react-dom": "^16.3.0"
            },
            framer: {
              id: "a34493cf-104a-47b0-8e80-586424e0929e",
              displayName: "Parallax"
            },
            author: "Linton Ye",
            dependencies: { mathjs: "^5.2.0" },
            name: "@framer/lintonye.parallax",
            version: "1.31.0",
            scripts: { test: "jest" }
          };

          /***/
        },

      /***/ framer:
        /*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

          /***/
        },

      /***/ mathjs:
        /*!*************************!*\
  !*** external "mathjs" ***!
  \*************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE_mathjs__;

          /***/
        },

      /***/ react:
        /*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

          /***/
        }

      /******/
    }
  );
});
