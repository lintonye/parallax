(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/benjamin.profile"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/benjamin.web-fonts"); } catch(e) {} }()), require("mathjs"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "framer-package-loader!@framer/benjamin.profile", "framer-package-loader!@framer/benjamin.web-fonts", "mathjs", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/benjamin.profile"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/benjamin.web-fonts"); } catch(e) {} }()), require("mathjs"), require("react")) : factory(root["Framer"], root["framer-package-loader!@framer/benjamin.profile"], root["framer-package-loader!@framer/benjamin.web-fonts"], root["mathjs"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_benjamin_profile__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_benjamin_web_fonts__, __WEBPACK_EXTERNAL_MODULE_mathjs__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/]build.index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./EmptyConnector.tsx": "./code/EmptyConnector.tsx",
	"./Examples.tsx": "./code/Examples.tsx",
	"./Parallax.tsx": "./code/Parallax.tsx",
	"./ParallaxFrame.tsx": "./code/ParallaxFrame.tsx",
	"./RegisterContext.tsx": "./code/RegisterContext.tsx",
	"./ScrollAwayHeader.tsx": "./code/ScrollAwayHeader.tsx",
	"./ScrollOverrides.ts": "./code/ScrollOverrides.ts",
	"./StickyScroll.tsx": "./code/StickyScroll.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
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

/***/ }),

/***/ "./code/EmptyConnector.tsx":
/*!*********************************!*\
  !*** ./code/EmptyConnector.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nclass EmptyConnector extends React.Component {\n    render() {\n        window[\"__checkBudget__\"]();\n        const containerStyle = {\n            color: \"#8855FF\",\n            background: \"rgba(136, 85, 255, 0.1)\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            height: \"100%\",\n            textAlign: \"center\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            padding: 5\n        };\n        const h1Style = {\n            fontSize: 43,\n            margin: \"15px 0 0px 0\"\n        };\n        const { title, description } = this.props;\n        return (React.createElement(\"div\", { style: containerStyle },\n            React.createElement(\"h1\", { style: h1Style }, title),\n            React.createElement(\"p\", null, description)));\n    }\n}\nexports.default = EmptyConnector;\nexports.__info__ = [{ name: \"EmptyConnector\", children: false, type: \"component\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0VtcHR5Q29ubmVjdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQkFBcUI7QUFDcEMsNENBQTRDLHdCQUF3QjtBQUNwRSx1Q0FBdUMsaUJBQWlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZEQUE2RCIsImZpbGUiOiIuL2NvZGUvRW1wdHlDb25uZWN0b3IudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNsYXNzIEVtcHR5Q29ubmVjdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiM4ODU1RkZcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgxMzYsIDg1LCAyNTUsIDAuMSlcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBwYWRkaW5nOiA1XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGgxU3R5bGUgPSB7XG4gICAgICAgICAgICBmb250U2l6ZTogNDMsXG4gICAgICAgICAgICBtYXJnaW46IFwiMTVweCAwIDBweCAwXCJcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBjb250YWluZXJTdHlsZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHsgc3R5bGU6IGgxU3R5bGUgfSwgdGl0bGUpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgZGVzY3JpcHRpb24pKSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRW1wdHlDb25uZWN0b3I7XG5leHBvcnRzLl9faW5mb19fID0gW3sgbmFtZTogXCJFbXB0eUNvbm5lY3RvclwiLCBjaGlsZHJlbjogZmFsc2UsIHR5cGU6IFwiY29tcG9uZW50XCIgfV07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/EmptyConnector.tsx\n");

/***/ }),

/***/ "./code/Examples.tsx":
/*!***************************!*\
  !*** ./code/Examples.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst data = framer_1.Data({ toggle: true, scale: framer_1.Animatable(1), opacity: framer_1.Animatable(1), rotation: framer_1.Animatable(0), rotationY: framer_1.Animatable(0) });\nexports.Scale = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        scale: data.scale,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            data.scale.set(0.6);\n            framer_1.animate.spring(data.scale, 1);\n        },\n    };\n};\nexports.Rotate = props => {\n    window[\"__checkBudget__\"]();\n    data.rotation.set(props.rotation);\n    return {\n        rotation: data.rotation,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            framer_1.animate.spring(data.rotation, data.rotation.get() + 90, {\n                tension: 250,\n                friction: 20,\n            });\n        },\n    };\n};\nexports.Fade = props => {\n    window[\"__checkBudget__\"]();\n    data.opacity.set(props.opacity);\n    return {\n        opacity: data.opacity,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            framer_1.animate.linear(data.opacity, 0, 0.2);\n        },\n    };\n};\nexports.FlipOutput = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        rotationY: data.rotationY,\n    };\n};\nexports.FlipInput = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        onTap() {\n            window[\"__checkBudget__\"]();\n            const toggle = data.toggle;\n            framer_1.animate.spring({ rotationY: data.rotationY }, {\n                rotationY: toggle ? 360 : 0,\n            }, { tension: 200, friction: 20 });\n            data.toggle = !toggle;\n        },\n    };\n};\nexports.__info__ = [{ name: \"Scale\", type: \"override\" }, { name: \"Rotate\", type: \"override\" }, { name: \"Fade\", type: \"override\" }, { name: \"FlipOutput\", type: \"override\" }, { name: \"FlipInput\", type: \"override\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0V4YW1wbGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsNEJBQTRCLG9KQUFvSjtBQUNoTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw0QkFBNEI7QUFDakU7QUFDQSxhQUFhLEdBQUcsNkJBQTZCO0FBQzdDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUIsa0NBQWtDLEdBQUcsbUNBQW1DLEdBQUcsaUNBQWlDLEdBQUcsdUNBQXVDLEdBQUcsc0NBQXNDIiwiZmlsZSI6Ii4vY29kZS9FeGFtcGxlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IGRhdGEgPSBmcmFtZXJfMS5EYXRhKHsgdG9nZ2xlOiB0cnVlLCBzY2FsZTogZnJhbWVyXzEuQW5pbWF0YWJsZSgxKSwgb3BhY2l0eTogZnJhbWVyXzEuQW5pbWF0YWJsZSgxKSwgcm90YXRpb246IGZyYW1lcl8xLkFuaW1hdGFibGUoMCksIHJvdGF0aW9uWTogZnJhbWVyXzEuQW5pbWF0YWJsZSgwKSB9KTtcbmV4cG9ydHMuU2NhbGUgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NhbGU6IGRhdGEuc2NhbGUsXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBkYXRhLnNjYWxlLnNldCgwLjYpO1xuICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5zcHJpbmcoZGF0YS5zY2FsZSwgMSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLlJvdGF0ZSA9IHByb3BzID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICBkYXRhLnJvdGF0aW9uLnNldChwcm9wcy5yb3RhdGlvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb246IGRhdGEucm90YXRpb24sXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLnNwcmluZyhkYXRhLnJvdGF0aW9uLCBkYXRhLnJvdGF0aW9uLmdldCgpICsgOTAsIHtcbiAgICAgICAgICAgICAgICB0ZW5zaW9uOiAyNTAsXG4gICAgICAgICAgICAgICAgZnJpY3Rpb246IDIwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLkZhZGUgPSBwcm9wcyA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgZGF0YS5vcGFjaXR5LnNldChwcm9wcy5vcGFjaXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhLm9wYWNpdHksXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLmxpbmVhcihkYXRhLm9wYWNpdHksIDAsIDAuMik7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLkZsaXBPdXRwdXQgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb25ZOiBkYXRhLnJvdGF0aW9uWSxcbiAgICB9O1xufTtcbmV4cG9ydHMuRmxpcElucHV0ID0gKCkgPT4ge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBjb25zdCB0b2dnbGUgPSBkYXRhLnRvZ2dsZTtcbiAgICAgICAgICAgIGZyYW1lcl8xLmFuaW1hdGUuc3ByaW5nKHsgcm90YXRpb25ZOiBkYXRhLnJvdGF0aW9uWSB9LCB7XG4gICAgICAgICAgICAgICAgcm90YXRpb25ZOiB0b2dnbGUgPyAzNjAgOiAwLFxuICAgICAgICAgICAgfSwgeyB0ZW5zaW9uOiAyMDAsIGZyaWN0aW9uOiAyMCB9KTtcbiAgICAgICAgICAgIGRhdGEudG9nZ2xlID0gIXRvZ2dsZTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbmV4cG9ydHMuX19pbmZvX18gPSBbeyBuYW1lOiBcIlNjYWxlXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiUm90YXRlXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiRmFkZVwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIkZsaXBPdXRwdXRcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJGbGlwSW5wdXRcIiwgdHlwZTogXCJvdmVycmlkZVwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/Examples.tsx\n");

/***/ }),

/***/ "./code/Parallax.tsx":
/*!***************************!*\
  !*** ./code/Parallax.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst EmptyConnector_1 = __webpack_require__(/*! ./EmptyConnector */ \"./code/EmptyConnector.tsx\");\nconst RegisterContext_1 = __webpack_require__(/*! ./RegisterContext */ \"./code/RegisterContext.tsx\");\nconst math = __webpack_require__(/*! mathjs */ \"mathjs\");\n__export(__webpack_require__(/*! ./ScrollOverrides */ \"./code/ScrollOverrides.ts\"));\nclass Parallax extends React.Component {\n    constructor() {\n        super(...arguments);\n        this.handleScroll = e => {\n            window[\"__checkBudget__\"]();\n            const { x, y } = e;\n            let vx = 0, vy = 0;\n            if (typeof this.lastX !== \"undefined\" &&\n                typeof this.lastY !== \"undefined\") {\n                const duration = Date.now() - this.lastTimestamp;\n                vx = (x - this.lastX) / duration;\n                vy = (y - this.lastY) / duration;\n            }\n            this.lastX = x;\n            this.lastY = y;\n            this.lastTimestamp = Date.now();\n            const { direction, onScroll } = this.props;\n            const scrollPosition = direction === \"vertical\" ? y : x;\n            const scrollMaxX = this.props.children[0].props.width - this.props.width;\n            const scrollMaxY = this.props.children[0].props.height - this.props.height;\n            const scrollMax = direction === \"vertical\" ? scrollMaxY : scrollMaxX;\n            const scrollProps = {\n                s: scrollPosition,\n                sx: x,\n                sy: y,\n                vx,\n                vy,\n                direction,\n                scrollMax,\n                scrollMaxX,\n                scrollMaxY\n            };\n            onScroll && onScroll(scrollProps);\n            this.layerConfigs.forEach(({ left, top, props }) => {\n                window[\"__checkBudget__\"]();\n                const { speedX, speedY, pinned, inputMode = \"speed\", xExpr, yExpr } = props;\n                let newLeft = 0, newTop = 0;\n                if (inputMode === \"speed\") {\n                    newTop = (scrollPosition * speedY) / 10;\n                    newLeft = (scrollPosition * speedX) / 10;\n                    // console.log(props, left, top, newLeft, newTop);\n                    if (pinned) {\n                        if (direction === \"vertical\")\n                            newTop = -y;\n                        else if (direction === \"horizontal\")\n                            newLeft = -x;\n                    }\n                }\n                else {\n                    // position expr\n                    newTop = math.eval(yExpr, scrollProps);\n                    newLeft = math.eval(xExpr, scrollProps);\n                    // console.log(scope, \"newTop\", newTop, \"lastY\", this.lastY);\n                }\n                top.set(newTop);\n                left.set(newLeft);\n            });\n        };\n        this.registerLayer = layerConfigs => {\n            window[\"__checkBudget__\"]();\n            // console.log(\"registerLayer:\", layerConfigs);\n            this.layerConfigs.push(layerConfigs);\n        };\n        this.unregisterLayer = layerConfigs => {\n            window[\"__checkBudget__\"]();\n            this.layerConfigs = this.layerConfigs.filter(c => c !== layerConfigs);\n        };\n        this.layerConfigs = [];\n    }\n    render() {\n        window[\"__checkBudget__\"]();\n        const { children } = this.props;\n        if (React.Children.count(children) > 0) {\n            return (React.createElement(RegisterContext_1.RegisterContext.Provider, { value: {\n                    registerLayer: this.registerLayer,\n                    unregisterLayer: this.unregisterLayer\n                } },\n                React.createElement(framer_1.Scroll, Object.assign({}, this.props, { onMove: this.handleScroll }), children)));\n        }\n        else {\n            return (React.createElement(EmptyConnector_1.default, { title: \"Parallax Scroll\", description: \"Connect to a scrolling content frame\" }));\n        }\n    }\n}\nParallax.displayName = \"Parallax Scroll\";\nParallax.defaultProps = Object.assign({}, framer_1.Scroll.defaultProps);\nParallax.propertyControls = Object.assign({}, framer_1.Scroll.propertyControls, { direction: {\n        title: \"direction\",\n        type: framer_1.ControlType.SegmentedEnum,\n        options: [\"horizontal\", \"vertical\"]\n    }, directionLock: {} // Remove the directionLock property from Scroll\n });\nexports.Parallax = Parallax;\nexports.__info__ = [{ name: \"Parallax\", children: true, type: \"component\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1BhcmFsbGF4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsbUJBQW1CO0FBQzNEO0FBQ0EsdUJBQXVCLDREQUE0RDtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUI7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBLGlCQUFpQixFQUFFO0FBQ25CLHFFQUFxRSxlQUFlLDRCQUE0QjtBQUNoSDtBQUNBO0FBQ0EsbUVBQW1FLGdGQUFnRjtBQUNuSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4Qyw0Q0FBNEMscUNBQXFDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLEtBQUssbUJBQW1CO0FBQ3hCLEVBQUU7QUFDRjtBQUNBLHFCQUFxQixzREFBc0QiLCJmaWxlIjoiLi9jb2RlL1BhcmFsbGF4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgZnJhbWVyXzEgPSByZXF1aXJlKFwiZnJhbWVyXCIpO1xuY29uc3QgRW1wdHlDb25uZWN0b3JfMSA9IHJlcXVpcmUoXCIuL0VtcHR5Q29ubmVjdG9yXCIpO1xuY29uc3QgUmVnaXN0ZXJDb250ZXh0XzEgPSByZXF1aXJlKFwiLi9SZWdpc3RlckNvbnRleHRcIik7XG5jb25zdCBtYXRoID0gcmVxdWlyZShcIm1hdGhqc1wiKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL1Njcm9sbE92ZXJyaWRlc1wiKSk7XG5jbGFzcyBQYXJhbGxheCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsID0gZSA9PiB7XG4gICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gZTtcbiAgICAgICAgICAgIGxldCB2eCA9IDAsIHZ5ID0gMDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5sYXN0WCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzLmxhc3RZICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZHVyYXRpb24gPSBEYXRlLm5vdygpIC0gdGhpcy5sYXN0VGltZXN0YW1wO1xuICAgICAgICAgICAgICAgIHZ4ID0gKHggLSB0aGlzLmxhc3RYKSAvIGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIHZ5ID0gKHkgLSB0aGlzLmxhc3RZKSAvIGR1cmF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXN0WCA9IHg7XG4gICAgICAgICAgICB0aGlzLmxhc3RZID0geTtcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBjb25zdCB7IGRpcmVjdGlvbiwgb25TY3JvbGwgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8geSA6IHg7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxNYXhYID0gdGhpcy5wcm9wcy5jaGlsZHJlblswXS5wcm9wcy53aWR0aCAtIHRoaXMucHJvcHMud2lkdGg7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxNYXhZID0gdGhpcy5wcm9wcy5jaGlsZHJlblswXS5wcm9wcy5oZWlnaHQgLSB0aGlzLnByb3BzLmhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbE1heCA9IGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gc2Nyb2xsTWF4WSA6IHNjcm9sbE1heFg7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICBzOiBzY3JvbGxQb3NpdGlvbixcbiAgICAgICAgICAgICAgICBzeDogeCxcbiAgICAgICAgICAgICAgICBzeTogeSxcbiAgICAgICAgICAgICAgICB2eCxcbiAgICAgICAgICAgICAgICB2eSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgc2Nyb2xsTWF4LFxuICAgICAgICAgICAgICAgIHNjcm9sbE1heFgsXG4gICAgICAgICAgICAgICAgc2Nyb2xsTWF4WVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9uU2Nyb2xsICYmIG9uU2Nyb2xsKHNjcm9sbFByb3BzKTtcbiAgICAgICAgICAgIHRoaXMubGF5ZXJDb25maWdzLmZvckVhY2goKHsgbGVmdCwgdG9wLCBwcm9wcyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBzcGVlZFgsIHNwZWVkWSwgcGlubmVkLCBpbnB1dE1vZGUgPSBcInNwZWVkXCIsIHhFeHByLCB5RXhwciB9ID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0xlZnQgPSAwLCBuZXdUb3AgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dE1vZGUgPT09IFwic3BlZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBuZXdUb3AgPSAoc2Nyb2xsUG9zaXRpb24gKiBzcGVlZFkpIC8gMTA7XG4gICAgICAgICAgICAgICAgICAgIG5ld0xlZnQgPSAoc2Nyb2xsUG9zaXRpb24gKiBzcGVlZFgpIC8gMTA7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLCBsZWZ0LCB0b3AsIG5ld0xlZnQsIG5ld1RvcCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaW5uZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUb3AgPSAteTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TGVmdCA9IC14O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbiBleHByXG4gICAgICAgICAgICAgICAgICAgIG5ld1RvcCA9IG1hdGguZXZhbCh5RXhwciwgc2Nyb2xsUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICBuZXdMZWZ0ID0gbWF0aC5ldmFsKHhFeHByLCBzY3JvbGxQcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNjb3BlLCBcIm5ld1RvcFwiLCBuZXdUb3AsIFwibGFzdFlcIiwgdGhpcy5sYXN0WSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRvcC5zZXQobmV3VG9wKTtcbiAgICAgICAgICAgICAgICBsZWZ0LnNldChuZXdMZWZ0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlZ2lzdGVyTGF5ZXIgPSBsYXllckNvbmZpZ3MgPT4ge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlZ2lzdGVyTGF5ZXI6XCIsIGxheWVyQ29uZmlncyk7XG4gICAgICAgICAgICB0aGlzLmxheWVyQ29uZmlncy5wdXNoKGxheWVyQ29uZmlncyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudW5yZWdpc3RlckxheWVyID0gbGF5ZXJDb25maWdzID0+IHtcbiAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgdGhpcy5sYXllckNvbmZpZ3MgPSB0aGlzLmxheWVyQ29uZmlncy5maWx0ZXIoYyA9PiBjICE9PSBsYXllckNvbmZpZ3MpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmxheWVyQ29uZmlncyA9IFtdO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlZ2lzdGVyQ29udGV4dF8xLlJlZ2lzdGVyQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICByZWdpc3RlckxheWVyOiB0aGlzLnJlZ2lzdGVyTGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgIHVucmVnaXN0ZXJMYXllcjogdGhpcy51bnJlZ2lzdGVyTGF5ZXJcbiAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChmcmFtZXJfMS5TY3JvbGwsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMsIHsgb25Nb3ZlOiB0aGlzLmhhbmRsZVNjcm9sbCB9KSwgY2hpbGRyZW4pKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW1wdHlDb25uZWN0b3JfMS5kZWZhdWx0LCB7IHRpdGxlOiBcIlBhcmFsbGF4IFNjcm9sbFwiLCBkZXNjcmlwdGlvbjogXCJDb25uZWN0IHRvIGEgc2Nyb2xsaW5nIGNvbnRlbnQgZnJhbWVcIiB9KSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5QYXJhbGxheC5kaXNwbGF5TmFtZSA9IFwiUGFyYWxsYXggU2Nyb2xsXCI7XG5QYXJhbGxheC5kZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBmcmFtZXJfMS5TY3JvbGwuZGVmYXVsdFByb3BzKTtcblBhcmFsbGF4LnByb3BlcnR5Q29udHJvbHMgPSBPYmplY3QuYXNzaWduKHt9LCBmcmFtZXJfMS5TY3JvbGwucHJvcGVydHlDb250cm9scywgeyBkaXJlY3Rpb246IHtcbiAgICAgICAgdGl0bGU6IFwiZGlyZWN0aW9uXCIsXG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLlNlZ21lbnRlZEVudW0sXG4gICAgICAgIG9wdGlvbnM6IFtcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXVxuICAgIH0sIGRpcmVjdGlvbkxvY2s6IHt9IC8vIFJlbW92ZSB0aGUgZGlyZWN0aW9uTG9jayBwcm9wZXJ0eSBmcm9tIFNjcm9sbFxuIH0pO1xuZXhwb3J0cy5QYXJhbGxheCA9IFBhcmFsbGF4O1xuZXhwb3J0cy5fX2luZm9fXyA9IFt7IG5hbWU6IFwiUGFyYWxsYXhcIiwgY2hpbGRyZW46IHRydWUsIHR5cGU6IFwiY29tcG9uZW50XCIgfV07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/Parallax.tsx\n");

/***/ }),

/***/ "./code/ParallaxFrame.tsx":
/*!********************************!*\
  !*** ./code/ParallaxFrame.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)\n            t[p[i]] = s[p[i]];\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst EmptyConnector_1 = __webpack_require__(/*! ./EmptyConnector */ \"./code/EmptyConnector.tsx\");\nconst RegisterContext_1 = __webpack_require__(/*! ./RegisterContext */ \"./code/RegisterContext.tsx\");\nclass ParallaxLayerRegistrar extends React.Component {\n    constructor() {\n        super(...arguments);\n        this.layerConfig = {\n            left: framer_1.Animatable(0),\n            top: framer_1.Animatable(0),\n            props: null\n        };\n    }\n    componentDidMount() {\n        window[\"__checkBudget__\"]();\n        const { registerLayer } = this.props;\n        if (registerLayer) {\n            this.layerConfig.props = this.props;\n            registerLayer(this.layerConfig);\n        }\n    }\n    componentWillUnmount() {\n        window[\"__checkBudget__\"]();\n        const { unregisterLayer } = this.props;\n        if (unregisterLayer) {\n            unregisterLayer(this.layerConfig);\n        }\n    }\n    render() {\n        window[\"__checkBudget__\"]();\n        return (React.createElement(framer_1.Frame, Object.assign({}, this.props, { background: null, left: this.layerConfig.left, top: this.layerConfig.top }), this.props.children));\n    }\n}\nclass ParallaxFrame extends React.Component {\n    render() {\n        window[\"__checkBudget__\"]();\n        const _a = this.props, { children } = _a, restProps = __rest(_a, [\"children\"]);\n        if (React.Children.count(children) === 0) {\n            return (React.createElement(EmptyConnector_1.default, { title: \"Parallax Layer\", description: \"Connect to a frame and adjust the \\\"speed\\\" prop in the properties panel\" }));\n        }\n        else {\n            return (React.createElement(RegisterContext_1.RegisterContext.Consumer, null, ({ registerLayer, unregisterLayer }) => {\n                window[\"__checkBudget__\"]();\n                return (React.createElement(ParallaxLayerRegistrar, Object.assign({}, restProps, { registerLayer: registerLayer, unregisterLayer: unregisterLayer }), children));\n            }));\n        }\n    }\n}\nParallaxFrame.displayName = \"Parallax Layer\";\nParallaxFrame.defaultProps = {\n    inputMode: \"speed\",\n    speedX: 0,\n    speedY: 0,\n    xExpr: \"0\",\n    yExpr: \"0\",\n    pinned: false\n};\nParallaxFrame.propertyControls = {\n    inputMode: {\n        type: framer_1.ControlType.SegmentedEnum,\n        title: \"Input\",\n        options: [\"speed\", \"position\"],\n        optionTitles: [\"Speed\", \"Position Expr\"]\n    },\n    pinned: {\n        type: framer_1.ControlType.Boolean,\n        title: \"Pin in scroll direction\",\n        hidden: ({ inputMode }) => inputMode !== \"speed\"\n    },\n    speedX: {\n        type: framer_1.ControlType.Number,\n        min: -50,\n        max: 50,\n        title: \"Speed X\",\n        hidden: ({ inputMode }) => inputMode !== \"speed\"\n    },\n    speedY: {\n        type: framer_1.ControlType.Number,\n        min: -50,\n        max: 50,\n        title: \"Speed Y\",\n        hidden: ({ inputMode }) => inputMode !== \"speed\"\n    },\n    xExpr: {\n        type: framer_1.ControlType.String,\n        title: \"X\",\n        hidden: ({ inputMode }) => inputMode !== \"position\"\n    },\n    yExpr: {\n        type: framer_1.ControlType.String,\n        title: \"Y\",\n        hidden: ({ inputMode }) => inputMode !== \"position\"\n    }\n};\nexports.ParallaxFrame = ParallaxFrame;\nexports.__info__ = [{ name: \"ParallaxFrame\", children: true, type: \"component\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1BhcmFsbGF4RnJhbWUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxjQUFjO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQkFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLGVBQWUsMkVBQTJFO0FBQzlKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsV0FBVztBQUMzQztBQUNBLG1FQUFtRSxtSEFBbUg7QUFDdEw7QUFDQTtBQUNBLDRGQUE0RixpQ0FBaUM7QUFDN0g7QUFDQSxvRkFBb0YsY0FBYyxpRUFBaUU7QUFDbkssYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQTJEIiwiZmlsZSI6Ii4vY29kZS9QYXJhbGxheEZyYW1lLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICByZXR1cm4gdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IEVtcHR5Q29ubmVjdG9yXzEgPSByZXF1aXJlKFwiLi9FbXB0eUNvbm5lY3RvclwiKTtcbmNvbnN0IFJlZ2lzdGVyQ29udGV4dF8xID0gcmVxdWlyZShcIi4vUmVnaXN0ZXJDb250ZXh0XCIpO1xuY2xhc3MgUGFyYWxsYXhMYXllclJlZ2lzdHJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubGF5ZXJDb25maWcgPSB7XG4gICAgICAgICAgICBsZWZ0OiBmcmFtZXJfMS5BbmltYXRhYmxlKDApLFxuICAgICAgICAgICAgdG9wOiBmcmFtZXJfMS5BbmltYXRhYmxlKDApLFxuICAgICAgICAgICAgcHJvcHM6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBjb25zdCB7IHJlZ2lzdGVyTGF5ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChyZWdpc3RlckxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyQ29uZmlnLnByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHJlZ2lzdGVyTGF5ZXIodGhpcy5sYXllckNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBjb25zdCB7IHVucmVnaXN0ZXJMYXllciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKHVucmVnaXN0ZXJMYXllcikge1xuICAgICAgICAgICAgdW5yZWdpc3RlckxheWVyKHRoaXMubGF5ZXJDb25maWcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChmcmFtZXJfMS5GcmFtZSwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcywgeyBiYWNrZ3JvdW5kOiBudWxsLCBsZWZ0OiB0aGlzLmxheWVyQ29uZmlnLmxlZnQsIHRvcDogdGhpcy5sYXllckNvbmZpZy50b3AgfSksIHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgICB9XG59XG5jbGFzcyBQYXJhbGxheEZyYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBjb25zdCBfYSA9IHRoaXMucHJvcHMsIHsgY2hpbGRyZW4gfSA9IF9hLCByZXN0UHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCJdKTtcbiAgICAgICAgaWYgKFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEVtcHR5Q29ubmVjdG9yXzEuZGVmYXVsdCwgeyB0aXRsZTogXCJQYXJhbGxheCBMYXllclwiLCBkZXNjcmlwdGlvbjogXCJDb25uZWN0IHRvIGEgZnJhbWUgYW5kIGFkanVzdCB0aGUgXFxcInNwZWVkXFxcIiBwcm9wIGluIHRoZSBwcm9wZXJ0aWVzIHBhbmVsXCIgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlZ2lzdGVyQ29udGV4dF8xLlJlZ2lzdGVyQ29udGV4dC5Db25zdW1lciwgbnVsbCwgKHsgcmVnaXN0ZXJMYXllciwgdW5yZWdpc3RlckxheWVyIH0pID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFyYWxsYXhMYXllclJlZ2lzdHJhciwgT2JqZWN0LmFzc2lnbih7fSwgcmVzdFByb3BzLCB7IHJlZ2lzdGVyTGF5ZXI6IHJlZ2lzdGVyTGF5ZXIsIHVucmVnaXN0ZXJMYXllcjogdW5yZWdpc3RlckxheWVyIH0pLCBjaGlsZHJlbikpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuUGFyYWxsYXhGcmFtZS5kaXNwbGF5TmFtZSA9IFwiUGFyYWxsYXggTGF5ZXJcIjtcblBhcmFsbGF4RnJhbWUuZGVmYXVsdFByb3BzID0ge1xuICAgIGlucHV0TW9kZTogXCJzcGVlZFwiLFxuICAgIHNwZWVkWDogMCxcbiAgICBzcGVlZFk6IDAsXG4gICAgeEV4cHI6IFwiMFwiLFxuICAgIHlFeHByOiBcIjBcIixcbiAgICBwaW5uZWQ6IGZhbHNlXG59O1xuUGFyYWxsYXhGcmFtZS5wcm9wZXJ0eUNvbnRyb2xzID0ge1xuICAgIGlucHV0TW9kZToge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5TZWdtZW50ZWRFbnVtLFxuICAgICAgICB0aXRsZTogXCJJbnB1dFwiLFxuICAgICAgICBvcHRpb25zOiBbXCJzcGVlZFwiLCBcInBvc2l0aW9uXCJdLFxuICAgICAgICBvcHRpb25UaXRsZXM6IFtcIlNwZWVkXCIsIFwiUG9zaXRpb24gRXhwclwiXVxuICAgIH0sXG4gICAgcGlubmVkOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLkJvb2xlYW4sXG4gICAgICAgIHRpdGxlOiBcIlBpbiBpbiBzY3JvbGwgZGlyZWN0aW9uXCIsXG4gICAgICAgIGhpZGRlbjogKHsgaW5wdXRNb2RlIH0pID0+IGlucHV0TW9kZSAhPT0gXCJzcGVlZFwiXG4gICAgfSxcbiAgICBzcGVlZFg6IHtcbiAgICAgICAgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuTnVtYmVyLFxuICAgICAgICBtaW46IC01MCxcbiAgICAgICAgbWF4OiA1MCxcbiAgICAgICAgdGl0bGU6IFwiU3BlZWQgWFwiLFxuICAgICAgICBoaWRkZW46ICh7IGlucHV0TW9kZSB9KSA9PiBpbnB1dE1vZGUgIT09IFwic3BlZWRcIlxuICAgIH0sXG4gICAgc3BlZWRZOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLk51bWJlcixcbiAgICAgICAgbWluOiAtNTAsXG4gICAgICAgIG1heDogNTAsXG4gICAgICAgIHRpdGxlOiBcIlNwZWVkIFlcIixcbiAgICAgICAgaGlkZGVuOiAoeyBpbnB1dE1vZGUgfSkgPT4gaW5wdXRNb2RlICE9PSBcInNwZWVkXCJcbiAgICB9LFxuICAgIHhFeHByOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLlN0cmluZyxcbiAgICAgICAgdGl0bGU6IFwiWFwiLFxuICAgICAgICBoaWRkZW46ICh7IGlucHV0TW9kZSB9KSA9PiBpbnB1dE1vZGUgIT09IFwicG9zaXRpb25cIlxuICAgIH0sXG4gICAgeUV4cHI6IHtcbiAgICAgICAgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuU3RyaW5nLFxuICAgICAgICB0aXRsZTogXCJZXCIsXG4gICAgICAgIGhpZGRlbjogKHsgaW5wdXRNb2RlIH0pID0+IGlucHV0TW9kZSAhPT0gXCJwb3NpdGlvblwiXG4gICAgfVxufTtcbmV4cG9ydHMuUGFyYWxsYXhGcmFtZSA9IFBhcmFsbGF4RnJhbWU7XG5leHBvcnRzLl9faW5mb19fID0gW3sgbmFtZTogXCJQYXJhbGxheEZyYW1lXCIsIGNoaWxkcmVuOiB0cnVlLCB0eXBlOiBcImNvbXBvbmVudFwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/ParallaxFrame.tsx\n");

/***/ }),

/***/ "./code/RegisterContext.tsx":
/*!**********************************!*\
  !*** ./code/RegisterContext.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nexports.RegisterContext = React.createContext({\n    registerLayer: null,\n    unregisterLayer: null\n});\nexports.__info__ = [];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1JlZ2lzdGVyQ29udGV4dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiIuL2NvZGUvUmVnaXN0ZXJDb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5leHBvcnRzLlJlZ2lzdGVyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICAgIHJlZ2lzdGVyTGF5ZXI6IG51bGwsXG4gICAgdW5yZWdpc3RlckxheWVyOiBudWxsXG59KTtcbmV4cG9ydHMuX19pbmZvX18gPSBbXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./code/RegisterContext.tsx\n");

/***/ }),

/***/ "./code/ScrollAwayHeader.tsx":
/*!***********************************!*\
  !*** ./code/ScrollAwayHeader.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst data = framer_1.Data({ headerTop: framer_1.Animatable(0) });\nlet isAnimating = false;\nfunction setHeaderTop(top) {\n    return __awaiter(this, void 0, void 0, function* () {\n        window[\"__checkBudget__\"]();\n        if (!isAnimating) {\n            isAnimating = true;\n            yield framer_1.animate.ease(data.headerTop, top, { duration: 0.1 }).finished;\n            isAnimating = false;\n        }\n    });\n}\nexports.Scroll = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        onScroll({ s, vy, scrollMax }) {\n            window[\"__checkBudget__\"]();\n            const headerHeight = 81;\n            if (vy > 0 && s > -scrollMax) {\n                setHeaderTop(0);\n            }\n            else if (vy < 0 && s <= -headerHeight) {\n                setHeaderTop(-headerHeight);\n            }\n        }\n    };\n};\nexports.Top = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        top: data.headerTop\n    };\n};\nexports.__info__ = [{ name: \"Scroll\", type: \"override\" }, { name: \"Top\", type: \"override\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1Njcm9sbEF3YXlIZWFkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxnQkFBZ0I7QUFDOUU7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQ0FBbUMsR0FBRyxnQ0FBZ0MiLCJmaWxlIjoiLi9jb2RlL1Njcm9sbEF3YXlIZWFkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IGRhdGEgPSBmcmFtZXJfMS5EYXRhKHsgaGVhZGVyVG9wOiBmcmFtZXJfMS5BbmltYXRhYmxlKDApIH0pO1xubGV0IGlzQW5pbWF0aW5nID0gZmFsc2U7XG5mdW5jdGlvbiBzZXRIZWFkZXJUb3AodG9wKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIGlmICghaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgIGlzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHlpZWxkIGZyYW1lcl8xLmFuaW1hdGUuZWFzZShkYXRhLmhlYWRlclRvcCwgdG9wLCB7IGR1cmF0aW9uOiAwLjEgfSkuZmluaXNoZWQ7XG4gICAgICAgICAgICBpc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLlNjcm9sbCA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvblNjcm9sbCh7IHMsIHZ5LCBzY3JvbGxNYXggfSkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSA4MTtcbiAgICAgICAgICAgIGlmICh2eSA+IDAgJiYgcyA+IC1zY3JvbGxNYXgpIHtcbiAgICAgICAgICAgICAgICBzZXRIZWFkZXJUb3AoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2eSA8IDAgJiYgcyA8PSAtaGVhZGVySGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgc2V0SGVhZGVyVG9wKC1oZWFkZXJIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn07XG5leHBvcnRzLlRvcCA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IGRhdGEuaGVhZGVyVG9wXG4gICAgfTtcbn07XG5leHBvcnRzLl9faW5mb19fID0gW3sgbmFtZTogXCJTY3JvbGxcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJUb3BcIiwgdHlwZTogXCJvdmVycmlkZVwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/ScrollAwayHeader.tsx\n");

/***/ }),

/***/ "./code/ScrollOverrides.ts":
/*!*********************************!*\
  !*** ./code/ScrollOverrides.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nfunction stickyScrollY(...stickyTopRanges) {\n    window[\"__checkBudget__\"]();\n    const data = framer_1.Data({ top: framer_1.Animatable(0) });\n    let initialTop = 0;\n    const scrollOverrides = props => ({\n        onMove({ y }) {\n            window[\"__checkBudget__\"]();\n            const inRange = ([min, max], v) => min <= v && v <= max;\n            stickyTopRanges.forEach(range => {\n                window[\"__checkBudget__\"]();\n                if (inRange(range, Math.abs(y))) {\n                    data.top.set(-y);\n                }\n            });\n        }\n    });\n    const layerOverrides = ({ top }) => {\n        window[\"__checkBudget__\"]();\n        data.top.set(top);\n        initialTop = top;\n        return {\n            top: data.top\n        };\n    };\n    return [scrollOverrides, layerOverrides];\n}\nexports.stickyScrollY = stickyScrollY;\nfunction mergeOverrides(...overrides) {\n    window[\"__checkBudget__\"]();\n    return overrides.reduce((merged, o) => {\n        window[\"__checkBudget__\"]();\n        for (let key in o) {\n            const valueInMerged = merged[key];\n            if (typeof valueInMerged === \"undefined\") {\n                merged[key] = o[key];\n            }\n            else if (typeof valueInMerged === \"function\") {\n                if (typeof o[key] === \"function\") {\n                    merged[key] = args => {\n                        window[\"__checkBudget__\"]();\n                        valueInMerged(args);\n                        o[key](args);\n                    };\n                }\n                else {\n                    console.error(`Incompatible types (key=${key})`, valueInMerged, o[key]);\n                }\n            }\n            else {\n                console.log(`Key already appeared (key=${key}), using existing value`, valueInMerged, \"New value dropped\", o[key]);\n            }\n        }\n        return merged;\n    }, {});\n}\nexports.mergeOverrides = mergeOverrides;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1Njcm9sbE92ZXJyaWRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw4QkFBOEI7QUFDOUQ7QUFDQTtBQUNBLGdCQUFnQixJQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMLDZCQUE2QixNQUFNO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELElBQUk7QUFDakU7QUFDQTtBQUNBO0FBQ0EseURBQXlELElBQUk7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7QUFDQSIsImZpbGUiOiIuL2NvZGUvU2Nyb2xsT3ZlcnJpZGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBmcmFtZXJfMSA9IHJlcXVpcmUoXCJmcmFtZXJcIik7XG5mdW5jdGlvbiBzdGlja3lTY3JvbGxZKC4uLnN0aWNreVRvcFJhbmdlcykge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIGNvbnN0IGRhdGEgPSBmcmFtZXJfMS5EYXRhKHsgdG9wOiBmcmFtZXJfMS5BbmltYXRhYmxlKDApIH0pO1xuICAgIGxldCBpbml0aWFsVG9wID0gMDtcbiAgICBjb25zdCBzY3JvbGxPdmVycmlkZXMgPSBwcm9wcyA9PiAoe1xuICAgICAgICBvbk1vdmUoeyB5IH0pIHtcbiAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgY29uc3QgaW5SYW5nZSA9IChbbWluLCBtYXhdLCB2KSA9PiBtaW4gPD0gdiAmJiB2IDw9IG1heDtcbiAgICAgICAgICAgIHN0aWNreVRvcFJhbmdlcy5mb3JFYWNoKHJhbmdlID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5SYW5nZShyYW5nZSwgTWF0aC5hYnMoeSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEudG9wLnNldCgteSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBsYXllck92ZXJyaWRlcyA9ICh7IHRvcCB9KSA9PiB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBkYXRhLnRvcC5zZXQodG9wKTtcbiAgICAgICAgaW5pdGlhbFRvcCA9IHRvcDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogZGF0YS50b3BcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBbc2Nyb2xsT3ZlcnJpZGVzLCBsYXllck92ZXJyaWRlc107XG59XG5leHBvcnRzLnN0aWNreVNjcm9sbFkgPSBzdGlja3lTY3JvbGxZO1xuZnVuY3Rpb24gbWVyZ2VPdmVycmlkZXMoLi4ub3ZlcnJpZGVzKSB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIG92ZXJyaWRlcy5yZWR1Y2UoKG1lcmdlZCwgbykgPT4ge1xuICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG8pIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlSW5NZXJnZWQgPSBtZXJnZWRba2V5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWVJbk1lcmdlZCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIG1lcmdlZFtrZXldID0gb1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlSW5NZXJnZWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb1trZXldID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2VkW2tleV0gPSBhcmdzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVJbk1lcmdlZChhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ba2V5XShhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEluY29tcGF0aWJsZSB0eXBlcyAoa2V5PSR7a2V5fSlgLCB2YWx1ZUluTWVyZ2VkLCBvW2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBLZXkgYWxyZWFkeSBhcHBlYXJlZCAoa2V5PSR7a2V5fSksIHVzaW5nIGV4aXN0aW5nIHZhbHVlYCwgdmFsdWVJbk1lcmdlZCwgXCJOZXcgdmFsdWUgZHJvcHBlZFwiLCBvW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgfSwge30pO1xufVxuZXhwb3J0cy5tZXJnZU92ZXJyaWRlcyA9IG1lcmdlT3ZlcnJpZGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/ScrollOverrides.ts\n");

/***/ }),

/***/ "./code/StickyScroll.tsx":
/*!*******************************!*\
  !*** ./code/StickyScroll.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Parallax_1 = __webpack_require__(/*! ./Parallax */ \"./code/Parallax.tsx\");\nconst titleHeight = 71 + 10;\nconst [scrollOverridesAbout, aboutOverrides] = Parallax_1.stickyScrollY([\n    422,\n    696 - titleHeight\n]);\nconst [scrollOverridesPort, portOverrides] = Parallax_1.stickyScrollY([\n    696,\n    1136 - titleHeight\n]);\nconst [scrollOverridesContact, contactOverrides] = Parallax_1.stickyScrollY([\n    1136,\n    1500 - titleHeight\n]);\nexports.Scroll = props => Parallax_1.mergeOverrides(scrollOverridesAbout(props), scrollOverridesPort(props), scrollOverridesContact(props));\nexports.About = props => aboutOverrides(props);\nexports.Portfolio = props => portOverrides(props);\nexports.Contact = props => contactOverrides(props);\nexports.__info__ = [{ name: \"Scroll\", type: \"override\" }, { name: \"About\", type: \"override\" }, { name: \"Portfolio\", type: \"override\" }, { name: \"Contact\", type: \"override\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1N0aWNreVNjcm9sbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUNBQW1DLEdBQUcsa0NBQWtDLEdBQUcsc0NBQXNDLEdBQUcsb0NBQW9DIiwiZmlsZSI6Ii4vY29kZS9TdGlja3lTY3JvbGwudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBQYXJhbGxheF8xID0gcmVxdWlyZShcIi4vUGFyYWxsYXhcIik7XG5jb25zdCB0aXRsZUhlaWdodCA9IDcxICsgMTA7XG5jb25zdCBbc2Nyb2xsT3ZlcnJpZGVzQWJvdXQsIGFib3V0T3ZlcnJpZGVzXSA9IFBhcmFsbGF4XzEuc3RpY2t5U2Nyb2xsWShbXG4gICAgNDIyLFxuICAgIDY5NiAtIHRpdGxlSGVpZ2h0XG5dKTtcbmNvbnN0IFtzY3JvbGxPdmVycmlkZXNQb3J0LCBwb3J0T3ZlcnJpZGVzXSA9IFBhcmFsbGF4XzEuc3RpY2t5U2Nyb2xsWShbXG4gICAgNjk2LFxuICAgIDExMzYgLSB0aXRsZUhlaWdodFxuXSk7XG5jb25zdCBbc2Nyb2xsT3ZlcnJpZGVzQ29udGFjdCwgY29udGFjdE92ZXJyaWRlc10gPSBQYXJhbGxheF8xLnN0aWNreVNjcm9sbFkoW1xuICAgIDExMzYsXG4gICAgMTUwMCAtIHRpdGxlSGVpZ2h0XG5dKTtcbmV4cG9ydHMuU2Nyb2xsID0gcHJvcHMgPT4gUGFyYWxsYXhfMS5tZXJnZU92ZXJyaWRlcyhzY3JvbGxPdmVycmlkZXNBYm91dChwcm9wcyksIHNjcm9sbE92ZXJyaWRlc1BvcnQocHJvcHMpLCBzY3JvbGxPdmVycmlkZXNDb250YWN0KHByb3BzKSk7XG5leHBvcnRzLkFib3V0ID0gcHJvcHMgPT4gYWJvdXRPdmVycmlkZXMocHJvcHMpO1xuZXhwb3J0cy5Qb3J0Zm9saW8gPSBwcm9wcyA9PiBwb3J0T3ZlcnJpZGVzKHByb3BzKTtcbmV4cG9ydHMuQ29udGFjdCA9IHByb3BzID0+IGNvbnRhY3RPdmVycmlkZXMocHJvcHMpO1xuZXhwb3J0cy5fX2luZm9fXyA9IFt7IG5hbWU6IFwiU2Nyb2xsXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiQWJvdXRcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJQb3J0Zm9saW9cIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJDb250YWN0XCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9XTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./code/StickyScroll.tsx\n");

/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["@framer/benjamin.profile"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/benjamin.profile */ "framer-package-loader!@framer/benjamin.profile")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"build/index.js","dependencies":{"@types/react":"^16.0.31","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"6150d7cb-e6e6-4ff8-9f6e-b6a1a8262b7b","displayName":"Profile"},"author":"Benjamin den Boer","license":"MIT","name":"@framer/benjamin.profile","version":"1.11.0","peerDependencies":{"framer":"^0.7.13"},"devDependencies":{"framer":"^0.7.13"},"keywords":["profile","users","api","data","trending"],"design":{"root":{"__class":"RootNode","children":[{"__class":"FrameNode","aspectRatio":null,"blendingEnabled":0,"blendingMode":"normal","blur":12,"blurEnabled":0,"blurType":"layer","borderBottom":1,"borderColor":"#222","borderEnabled":0,"borderLeft":1,"borderPerSide":false,"borderRight":1,"borderStyle":"solid","borderTop":1,"borderWidth":1,"bottom":null,"boxShadows":[],"brightness":100,"brightnessEnabled":0,"centerAnchorX":0,"centerAnchorY":0,"children":[{"__class":"CodeComponentNode","aspectRatio":null,"blur":12,"blurEnabled":0,"blurType":"layer","borderBottom":1,"borderColor":"#222","borderEnabled":0,"borderLeft":1,"borderPerSide":false,"borderRight":1,"borderStyle":"solid","borderTop":1,"borderWidth":1,"bottom":0,"boxShadows":[],"brightness":100,"brightnessEnabled":0,"centerAnchorX":0.5,"centerAnchorY":0.5,"children":[],"clip":true,"codeComponentIdentifier":"./Profile.tsx_Profile","codeComponentProps":{"avatar":50,"background":"#fff","color":"#000","mode":true,"region":"United States","subtitle":13,"title":20},"codeOverrideEnabled":false,"codeOverrideFile":null,"codeOverrideIdentifier":null,"codeOverrideName":null,"constraintsLocked":false,"contrast":100,"contrastEnabled":0,"exportOptions":[],"fillColor":"rgba(255,255,255,1)","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","grayscale":0,"grayScaleEnabled":0,"height":200,"heightType":0,"hueRotate":0,"hueRotateEnabled":0,"id":"igN1eCPbA","intrinsicHeight":200,"intrinsicWidth":200,"invert":0,"invertEnabled":0,"left":0,"locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"mWjBzH23_","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusIsRelative":false,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":0,"rotation":0,"saturate":100,"saturateEnabled":0,"sepia":0,"sepiaEnabled":0,"top":0,"visible":true,"width":200,"widthType":0}],"clip":true,"codeOverrideEnabled":false,"codeOverrideFile":null,"codeOverrideIdentifier":null,"codeOverrideName":null,"constraintsLocked":false,"contrast":100,"contrastEnabled":0,"deviceType":null,"exportOptions":[],"fillColor":"rgba(255,255,255,1)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","grayscale":0,"grayScaleEnabled":0,"height":200,"heightType":0,"hueRotate":0,"hueRotateEnabled":0,"id":"mWjBzH23_","intrinsicHeight":null,"intrinsicWidth":null,"invert":0,"invertEnabled":0,"isExternalMaster":null,"isMaster":false,"isTarget":false,"left":0,"locked":false,"name":"Profile","navigationTarget":null,"navigationTransition":"push","navigationTransitionDirection":"left","opacity":1,"originalid":null,"parentid":"u3VgBoJUz","previewSettings":null,"radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusIsRelative":false,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"replicaInfo":null,"right":null,"rotation":0,"saturate":100,"saturateEnabled":0,"sepia":0,"sepiaEnabled":0,"top":0,"visible":true,"width":200,"widthType":0}],"id":"u3VgBoJUz","name":null,"originalid":null,"parentid":null,"visible":false},"version":47}}
                    return package
                }

                packages["@framer/benjamin.web-fonts"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/benjamin.web-fonts */ "framer-package-loader!@framer/benjamin.web-fonts")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"build/index.js","license":"MIT","devDependencies":{"@types/react":"^16.0.31","@types/react-helmet":"^5.0.7","framer":"^0.7.8"},"peerDependencies":{"framer":"^0.7.8","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"8c552598-1cf8-46dd-aee1-a7a430304ce6","displayName":"Web Fonts "},"author":"Benjamin den Boer","dependencies":{"@framer/artem.material-ui":"^1.1.0","@types/helmet":"^0.0.38","react-helmet":"^5.2.0"},"keywords":["web","fonts","google","typefaces"],"name":"@framer/benjamin.web-fonts","version":"1.5.0","design":{"root":{"__class":"RootNode","children":[{"__class":"FrameNode","aspectRatio":null,"blendingEnabled":0,"blendingMode":"normal","blur":12,"blurEnabled":0,"blurType":"layer","borderBottom":1,"borderColor":"#222","borderEnabled":0,"borderLeft":1,"borderPerSide":false,"borderRight":1,"borderStyle":"solid","borderTop":1,"borderWidth":1,"bottom":null,"boxShadows":[],"brightness":100,"brightnessEnabled":0,"centerAnchorX":0,"centerAnchorY":0,"children":[{"__class":"CodeComponentNode","aspectRatio":null,"blur":12,"blurEnabled":0,"blurType":"layer","borderBottom":1,"borderColor":"#222","borderEnabled":0,"borderLeft":1,"borderPerSide":false,"borderRight":1,"borderStyle":"solid","borderTop":1,"borderWidth":1,"bottom":null,"boxShadows":[],"brightness":100,"brightnessEnabled":0,"centerAnchorX":0.5,"centerAnchorY":0.3613193403298351,"children":[],"clip":true,"codeComponentIdentifier":"./Font.tsx_WebFont","codeComponentProps":{"align":"center","color":"hsl(0, 0%, 100%)","direction":"ltr","font":"Playfair Display","line":0.75,"placeholders":null,"size":90,"spacing":0,"style":"italic","text":"Yellow stone.","weight":"800"},"codeOverrideFile":null,"codeOverrideIdentifier":null,"codeOverrideName":null,"constraintsLocked":false,"contrast":100,"contrastEnabled":0,"exportOptions":[],"fillColor":"rgba(255,255,255,1)","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","grayscale":0,"grayScaleEnabled":0,"height":234,"heightType":0,"hueRotate":0,"hueRotateEnabled":0,"id":"ofaJfreyD","intrinsicHeight":null,"intrinsicWidth":null,"invert":0,"invertEnabled":0,"left":0,"locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"TxIDN66WY","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusIsRelative":false,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":0,"rotation":0,"saturate":100,"saturateEnabled":0,"sepia":0,"sepiaEnabled":0,"top":124,"visible":true,"width":375,"widthType":0},{"__class":"CodeComponentNode","aspectRatio":null,"blur":12,"blurEnabled":0,"blurType":"layer","borderBottom":1,"borderColor":"#222","borderEnabled":0,"borderLeft":1,"borderPerSide":false,"borderRight":1,"borderStyle":"solid","borderTop":1,"borderWidth":1,"bottom":192,"boxShadows":[],"brightness":100,"brightnessEnabled":0,"centerAnchorX":0.5,"centerAnchorY":0.6191904047976012,"children":[],"clip":true,"codeComponentIdentifier":"./Font.tsx_WebFont","codeComponentProps":{"align":"center","color":"hsl(0, 0%, 100%)","direction":"ltr","font":"Work Sans","line":1.4,"placeholders":null,"size":20,"spacing":0.4,"style":"normal","text":"With dramatic canyons, alpine rivers, lush forests, hot springs and gushing geysers, including its most famous, Old Faithful.","weight":"300"},"codeOverrideFile":null,"codeOverrideIdentifier":null,"codeOverrideName":null,"constraintsLocked":false,"contrast":100,"contrastEnabled":0,"exportOptions":[],"fillColor":"rgba(255,255,255,1)","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","grayscale":0,"grayScaleEnabled":0,"height":124,"heightType":0,"hueRotate":0,"hueRotateEnabled":0,"id":"kxkEFebt6","intrinsicHeight":null,"intrinsicWidth":null,"invert":0,"invertEnabled":0,"left":32,"locked":false,"name":null,"opacity":0.6,"originalid":null,"parentid":"TxIDN66WY","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusIsRelative":false,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":32,"rotation":0,"saturate":100,"saturateEnabled":0,"sepia":0,"sepiaEnabled":0,"top":null,"visible":true,"width":311,"widthType":0}],"clip":true,"codeOverrideFile":null,"codeOverrideIdentifier":null,"codeOverrideName":null,"constraintsLocked":false,"contrast":100,"contrastEnabled":0,"deviceType":"framer/FramerAppleIPhone8","exportIncludesBackground":true,"exportOptions":[{"__class":"ExportOptions","enabled":true,"nameExtension":"@2x","nameExtensionMode":"Suffix","scale":2,"type":"png"}],"fillColor":"hsl(0, 0%, 0%)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","grayscale":0,"grayScaleEnabled":0,"height":667,"heightType":0,"hueRotate":0,"hueRotateEnabled":0,"id":"TxIDN66WY","intrinsicHeight":null,"intrinsicWidth":null,"invert":0,"invertEnabled":0,"isExternalMaster":null,"isMaster":false,"isTarget":false,"left":1042,"locked":false,"name":null,"navigationTarget":null,"navigationTransition":"push","navigationTransitionDirection":"left","opacity":1,"originalid":null,"parentid":"JrsuykzSP","previewSettings":null,"radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusIsRelative":false,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"replicaInfo":null,"right":null,"rotation":0,"saturate":100,"saturateEnabled":0,"sepia":0,"sepiaEnabled":0,"top":313,"visible":true,"width":375,"widthType":0}],"id":"JrsuykzSP","name":null,"originalid":null,"parentid":null,"startPoint":null,"visible":false},"version":44}}
                    return package
                }

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"0.10.1","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --config jest.json --coverage","test":"jest --config jest.json","watch":"jest --config jest.json --watch"},"devDependencies":{"@microsoft/api-documenter":"^1.5.47","@microsoft/api-extractor":"^7.0.2","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/node":"^9.6.0","@types/react":"^16","@types/react-dom":"^16","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.3.0","enzyme-adapter-react-16":"^1.1.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^22.0.3","jest-junit":"^3.4.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"~16.4","react-dev-utils":"^5.0.1","react-dom":"~16.4","semver":"^5.6.0","ts-jest":"^22.4.5","ts-loader":"^4.1.0","typescript":"^3.0.1","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^2.0.13","webpack-dev-server":"^3.1.4","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.3","react-dom":"^16.3"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, name, version, default */
/***/ (function(module) {

module.exports = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.0.31","framer":"^0.10.1"},"peerDependencies":{"framer":"^0.10.1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"a34493cf-104a-47b0-8e80-586424e0929e","displayName":"Parallax"},"author":"Linton Ye","dependencies":{"@framer/benjamin.profile":"^1.11.0","@framer/benjamin.web-fonts":"^1.5.0","mathjs":"^5.2.0"},"name":"@framer/lintonye.parallax","version":"1.19.0"};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "framer-package-loader!@framer/benjamin.profile":
/*!*****************************************************************!*\
  !*** external "framer-package-loader!@framer/benjamin.profile" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_benjamin_profile__ === 'undefined') {var e = new Error("Cannot find module \"framer-package-loader!@framer/benjamin.profile\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_benjamin_profile__;

/***/ }),

/***/ "framer-package-loader!@framer/benjamin.web-fonts":
/*!*******************************************************************!*\
  !*** external "framer-package-loader!@framer/benjamin.web-fonts" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_benjamin_web_fonts__ === 'undefined') {var e = new Error("Cannot find module \"framer-package-loader!@framer/benjamin.web-fonts\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_benjamin_web_fonts__;

/***/ }),

/***/ "mathjs":
/*!*************************!*\
  !*** external "mathjs" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_mathjs__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});