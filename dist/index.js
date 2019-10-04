(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"), require("use-parallax"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react", "use-parallax"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react"), require("use-parallax")) : factory(root["Framer"], root["React"], root["use-parallax"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_use_parallax__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
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
	"./Horizontal.tsx": "./code/Horizontal.tsx",
	"./ParallaxLayer.tsx": "./code/ParallaxLayer.tsx",
	"./ParallaxScroll.tsx": "./code/ParallaxScroll.tsx",
	"./ScrollContext.tsx": "./code/ScrollContext.tsx",
	"./SimpleExamples.tsx": "./code/SimpleExamples.tsx",
	"./StickyScroll.tsx": "./code/StickyScroll.tsx",
	"./canvas.tsx": "./code/canvas.tsx",
	"./iPhoneXRScrolling.tsx": "./code/iPhoneXRScrolling.tsx",
	"./index.tsx": "./code/index.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
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

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1wdHlDb25uZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0VtcHR5Q29ubmVjdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUErQjtBQU8vQixNQUFNLEVBQUcsU0FBUSxLQUFLLENBQUMsU0FBZ0I7SUFDckMsTUFBTTs7UUFDSixNQUFNLGNBQWMsR0FBd0I7WUFDMUMsS0FBSyxFQUFFLFNBQVM7WUFDaEIsVUFBVSxFQUFFLHlCQUF5QjtZQUNyQyxPQUFPLEVBQUUsTUFBTTtZQUNmLGFBQWEsRUFBRSxRQUFRO1lBQ3ZCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsU0FBUyxFQUFFLFFBQVE7WUFDbkIsY0FBYyxFQUFFLFFBQVE7WUFDeEIsVUFBVSxFQUFFLFFBQVE7WUFDcEIsT0FBTyxFQUFFLENBQUM7U0FDWCxDQUFDO1FBQ0YsTUFBTSxPQUFPLEdBQXdCO1lBQ25DLFFBQVEsRUFBRSxFQUFFO1lBQ1osTUFBTSxFQUFFLGNBQWM7U0FDdkIsQ0FBQztRQUNGLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMxQyxPQUFPLENBQ0wsNkJBQUssS0FBSyxFQUFFLGNBQWM7WUFDeEIsNEJBQUksS0FBSyxFQUFFLE9BQU8sSUFBRyxLQUFLLENBQU07WUFDaEMsK0JBQUksV0FBVyxDQUFLLENBQ2hCLENBQ1AsQ0FBQztLQUNIO0NBQ0Y7QUFFWSxRQUFBLGNBQWMsR0FBRyxFQUFFLENBQUMifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class EC extends React.Component {
    render() {
        window["__checkBudget__"]();
        const containerStyle = {
            color: "#8855FF",
            background: "rgba(136, 85, 255, 0.1)",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            padding: 5
        };
        const h1Style = {
            fontSize: 43,
            margin: "15px 0 0px 0"
        };
        const { title, description } = this.props;
        return (React.createElement("div", { style: containerStyle },
            React.createElement("h1", { style: h1Style }, title),
            React.createElement("p", null, description)));
    }
}
exports.EmptyConnector = EC;
exports.__info__ = [];


/***/ }),

/***/ "./code/Horizontal.tsx":
/*!*****************************!*\
  !*** ./code/Horizontal.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9yaXpvbnRhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvSG9yaXpvbnRhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBNkQ7QUFFN0Qsd0JBQThEO0FBRWpELFFBQUEsWUFBWSxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUM1QyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsWUFBUyxFQUFFLENBQUE7SUFDL0IsTUFBTSxDQUFDLEdBQUcsWUFBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQ3hDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQTtDQUNiLENBQUE7QUFFWSxRQUFBLE9BQU8sR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDdkMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLFlBQVMsRUFBRSxDQUFBO0lBQy9CLE1BQU0sT0FBTyxHQUFHLHFCQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDeEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFBO0NBQ25CLENBQUE7QUFFWSxRQUFBLEVBQUUsR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDbEMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLFlBQVMsRUFBRSxDQUFBO0lBQy9CLE1BQU0sVUFBVSxHQUFHLHFCQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFBO0NBQ3RCLENBQUE7QUFFWSxRQUFBLE1BQU0sR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDdEMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLFlBQVMsRUFBRSxDQUFBO0lBQy9CLE1BQU0sQ0FBQyxHQUFHLFdBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDekMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFBO0NBQ2IsQ0FBQTtBQUVZLFFBQUEsT0FBTyxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUN2QyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsWUFBUyxFQUFFLENBQUE7SUFDL0IsTUFBTSxDQUFDLEdBQUcsV0FBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUMzQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUE7Q0FDYixDQUFBO0FBRVksUUFBQSxXQUFXLEdBQWEsS0FBSyxDQUFDLEVBQUU7O0lBQzNDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxZQUFTLEVBQUUsQ0FBQTtJQUMvQixNQUFNLENBQUMsR0FBRyxXQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDMUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFBO0NBQ2IsQ0FBQTtBQUVZLFFBQUEsV0FBVyxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUMzQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsWUFBUyxFQUFFLENBQUE7SUFDL0IsTUFBTSxDQUFDLEdBQUcsV0FBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQTtDQUNiLENBQUE7QUFFWSxRQUFBLE1BQU0sR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDdEMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLFlBQVMsRUFBRSxDQUFBO0lBQy9CLE1BQU0sQ0FBQyxHQUFHLFdBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDekMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFBO0NBQ2IsQ0FBQTtBQUVZLFFBQUEsZ0JBQWdCLEdBQWEsS0FBSyxDQUFDLEVBQUU7O0lBQ2hELE1BQU0sT0FBTyxHQUFHLHFCQUFZLEVBQUUsQ0FBQTtJQUM5QixNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsWUFBUyxFQUFFLENBQUE7SUFDL0IsYUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxTQUFTLENBQUMsRUFBRTs7UUFDMUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7S0FDbEQsQ0FBQyxDQUFBO0lBQ0YsT0FBTztRQUNMLE9BQU87S0FDUixDQUFBO0NBQ0YsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const _1 = __webpack_require__(/*! . */ "./code/index.tsx");
exports.Sticky100400 = props => {
    window["__checkBudget__"]();
    const { scrollX } = _1.useScroll();
    const x = _1.useSticky(scrollX, [100, 400]);
    return { x };
};
exports.Opacity = props => {
    window["__checkBudget__"]();
    const { scrollX } = _1.useScroll();
    const opacity = framer_1.useTransform(scrollX, [0, 1000], [1, 0]);
    return { opacity };
};
exports.Bg = props => {
    window["__checkBudget__"]();
    const { scrollX } = _1.useScroll();
    const background = framer_1.useTransform(scrollX, [0, 1000], ["#F00", "#000"]);
    return { background };
};
exports.Speed0 = props => {
    window["__checkBudget__"]();
    const { scrollX } = _1.useScroll();
    const x = _1.useSpeed(scrollX, [0, 1000], 0);
    return { x };
};
exports.Speed05 = props => {
    window["__checkBudget__"]();
    const { scrollX } = _1.useScroll();
    const x = _1.useSpeed(scrollX, [0, 1000], 0.5);
    return { x };
};
exports.Speedminus1 = props => {
    window["__checkBudget__"]();
    const { scrollX } = _1.useScroll();
    const x = _1.useSpeed(scrollX, [0, 1000], -1);
    return { x };
};
exports.Speedminus2 = props => {
    window["__checkBudget__"]();
    const { scrollX } = _1.useScroll();
    const x = _1.useSpeed(scrollX, [0, 1000], -2);
    return { x };
};
exports.Speed1 = props => {
    window["__checkBudget__"]();
    const { scrollX } = _1.useScroll();
    const x = _1.useSpeed(scrollX, [0, 1000], 1);
    return { x };
};
exports.TriggerAnimation = props => {
    window["__checkBudget__"]();
    const animate = framer_1.useAnimation();
    const { scrollX } = _1.useScroll();
    _1.useTrigger(scrollX, [600, 650], direction => {
        window["__checkBudget__"]();
        animate.start({ rotate: direction > 0 ? 0 : 90 });
    });
    return {
        animate
    };
};
exports.__info__ = [{ "name": "Sticky100400", "type": "override" }, { "name": "Opacity", "type": "override" }, { "name": "Bg", "type": "override" }, { "name": "Speed0", "type": "override" }, { "name": "Speed05", "type": "override" }, { "name": "Speedminus1", "type": "override" }, { "name": "Speedminus2", "type": "override" }, { "name": "Speed1", "type": "override" }, { "name": "TriggerAnimation", "type": "override" }];


/***/ }),

/***/ "./code/ParallaxLayer.tsx":
/*!********************************!*\
  !*** ./code/ParallaxLayer.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYWxsYXhMYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvUGFyYWxsYXhMYXllci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixtQ0FNZTtBQUNmLHdCQUE2QjtBQUM3QixxREFBaUQ7QUFFakQsU0FBUyxvQkFBb0IsQ0FBQyxFQU83QjtRQVA2QixFQUM1QixRQUFRLEVBQ1IsUUFBUSxFQUNSLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxPQUVWLEVBREMsaUZBQVE7O0lBRVIsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxZQUFTLEVBQUUsQ0FBQTtJQUN4QyxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsR0FBRyxRQUFRLFlBQVksQ0FBQyxDQUFBO0lBQ2hELE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxHQUFHLFFBQVEsWUFBWSxDQUFDLENBQUE7SUFDaEQsTUFBTSxLQUFLLEdBQUcscUJBQVksQ0FDeEIsU0FBUyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQ3JDLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUNwQixDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FDdkIsQ0FBQTtJQUNELE1BQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFBO0lBQzlDLE9BQU8sQ0FDTCxvQkFBQyxjQUFLLGtCQUFDLFVBQVUsRUFBRSxJQUFJLElBQU0sZ0JBQWdCLEVBQU0sS0FBSyxHQUNyRCxRQUFRLENBQ0gsQ0FDVCxDQUFBO0NBQ0Y7QUFFRCxTQUFTLG1CQUFtQixDQUFDLEtBQUs7O0lBQ2hDLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDaEQsb0JBQUMs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

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const _1 = __webpack_require__(/*! . */ "./code/index.tsx");
const EmptyConnector_1 = __webpack_require__(/*! ./EmptyConnector */ "./code/EmptyConnector.tsx");
function ParallaxLayerPreview(_a) {
    var { children, inputMin, inputMax, property, dependsOn } = _a, props = __rest(_a, ["children", "inputMin", "inputMax", "property", "dependsOn"]);
    window["__checkBudget__"]();
    const { scrollX, scrollY } = _1.useScroll();
    const outputMin = props[`${property}_outputMin`];
    const outputMax = props[`${property}_outputMax`];
    const value = framer_1.useTransform(dependsOn === "y" ? scrollY : scrollX, [inputMin, inputMax], [outputMin, outputMax]);
    const transformedProps = { [property]: value };
    return (React.createElement(framer_1.Frame, Object.assign({ background: null }, transformedProps, props), children));
}
function ParallaxLayerCanvas(props) {
    window["__checkBudget__"]();
    return React.Children.count(props.children) > 0 ? (React.createElement(framer_1.Frame, Object.assign({ background: null }, props))) : (React.createElement(EmptyConnector_1.EmptyConnector, { title: "Connect to a Frame \u2192", description: "" }));
}
function ParallaxLayerThumbnail(props) {
    window["__checkBudget__"]();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", className: "feather feather-file", viewBox: "0 0 24 24" },
        React.createElement("path", { d: "M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" }),
        React.createElement("path", { d: "M13 2L13 9 20 9" })));
}
function ParallaxLayer(props) {
    window["__checkBudget__"]();
    const target = framer_1.RenderTarget.current();
    const Comp = target === framer_1.RenderTarget.preview
        ? ParallaxLayerPreview
        : target === framer_1.RenderTarget.thumbnail
            ? ParallaxLayerThumbnail
            : ParallaxLayerCanvas;
    return React.createElement(Comp, Object.assign({}, props));
}
exports.ParallaxLayer = ParallaxLayer;
const properties = {
    x: {
        x_outputMin: {
            type: framer_1.ControlType.Number,
            title: "X Min"
        },
        x_outputMax: {
            type: framer_1.ControlType.Number,
            title: "X Max"
        }
    },
    y: {
        y_outputMin: {
            type: framer_1.ControlType.Number,
            title: "Y Min"
        },
        y_outputMax: {
            type: framer_1.ControlType.Number,
            title: "Y Max"
        }
    },
    opacity: {
        opacity_outputMin: {
            type: framer_1.ControlType.Number,
            min: 0,
            max: 1,
            title: "Opacity Min"
        },
        opacity_outputMax: {
            type: framer_1.ControlType.Number,
            min: 0,
            max: 1,
            title: "Opacity Max"
        }
    },
    scale: {
        scale_outputMin: {
            type: framer_1.ControlType.Number,
            title: "Scale Min"
        },
        scale_outputMax: {
            type: framer_1.ControlType.Number,
            title: "Scale Max"
        }
    },
    rotate: {
        rotate_outputMin: {
            type: framer_1.ControlType.Number,
            min: 0,
            max: 360,
            title: "Rotate Min"
        },
        rotate_outputMax: {
            type: framer_1.ControlType.Number,
            min: 0,
            max: 360,
            title: "Rotate Max"
        }
    },
    backgroundColor: {
        backgroundColor_outputMin: {
            type: framer_1.ControlType.Color,
            title: "BG Min"
        },
        backgroundColor_outputMax: {
            type: framer_1.ControlType.Color,
            title: "BG Max"
        }
    }
};
// 1. Add "hidden" functions
// 2. Flatten properties into a shallow object
function getOutputPropertyControls() {
    window["__checkBudget__"]();
    return Object.keys(properties).reduce((result, propName) => {
        window["__checkBudget__"]();
        const controlGroup = properties[propName];
        // Flatten
        const flattened = Object.keys(controlGroup).reduce((preValue, outputProp) => {
            window["__checkBudget__"]();
            // add "hidden" function
            const control = Object.assign({}, controlGroup[outputProp], { hidden: props => props.property !== propName });
            return Object.assign({}, preValue, { [outputProp]: control });
        }, {});
        return Object.assign({}, result, flattened);
    }, {});
}
framer_1.addPropertyControls(ParallaxLayer, Object.assign({ children: {
        type: framer_1.ControlType.ComponentInstance,
        title: "Content"
    }, dependsOn: {
        type: framer_1.ControlType.Enum,
        options: ["x", "y"],
        defaultValue: "y"
    }, property: {
        type: framer_1.ControlType.Enum,
        options: Object.keys(properties),
        defaultValue: "rotate"
    }, inputMin: {
        type: framer_1.ControlType.Number,
        title: "Scroll Min",
        min: 0
    }, inputMax: {
        type: framer_1.ControlType.Number,
        title: "Scroll Max",
        min: 0
    } }, getOutputPropertyControls()));
exports.__info__ = [{ "name": "ParallaxLayer", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/ParallaxScroll.tsx":
/*!*********************************!*\
  !*** ./code/ParallaxScroll.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYWxsYXhTY3JvbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1BhcmFsbGF4U2Nyb2xsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLG1DQU1lO0FBQ2YsbURBQStDO0FBQy9DLCtDQUFnRDtBQUNoRCxxREFBaUQ7QUFFakQsU0FBUyxTQUFTOztJQUNoQixPQUFPLENBQ0wsNkJBQ0UsS0FBSyxFQUFDLDRCQUE0QixFQUNsQyxLQUFLLEVBQUMsS0FBSyxFQUNYLE1BQU0sRUFBQyxLQUFLLEVBQ1osSUFBSSxFQUFDLE1BQU0sRUFDWCxNQUFNLEVBQUMsY0FBYyxFQUNyQixhQUFhLEVBQUMsT0FBTyxFQUNyQixjQUFjLEVBQUMsT0FBTyxFQUN0QixXQUFXLEVBQUMsR0FBRyxFQUNmLFNBQVMsRUFBQyxzQkFBc0IsRUFDaEMsT0FBTyxFQUFDLFdBQVc7UUFFbkIsOEJBQU0sQ0FBQyxFQUFDLCtCQUErQixHQUFHO1FBQzFDLDhCQUFNLENBQUMsRUFBQyw0REFBNEQsR0FBRyxDQUNuRSxDQUNQLENBQUE7Q0FDRjtBQUVELFNBQVMscUJBQXFCLENBQUMsRUFBc0I7UUFBdEIsRUFBRSxRQUFRLE9BQVksRUFBVixnQ0FBUTs7SUFDakQsTUFBTSxPQUFPLEdBQUcsdUJBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNqQyxNQUFNLE9BQU8sR0FBRyx1QkFBYyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2pDLE1BQU0sT0FBTyxHQUFHLGdDQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzFDLE1BQU0sT0FBTyxHQUFHLGdDQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzFDLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMxQyxvQkFBQyw2QkFBYSxDQUFDLFFBQVEsSUFBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFO1FBQ2pELG9CQUFDLGVBQU0sb0JBQUssS0FBSyxJQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE9BQU8sS0FDaEUsUUFBUSxDQUNGLENBQ2MsQ0FDMUIsQ0FBQyxDQUFDLENBQUMsQ0FDRixvQkFBQywrQkFBYyxJQUFDLEtBQUssRUFBQywyQkFBc0IsRUFBQyxXQUFXLEVBQUMsRUFBRSxHQUFHLENBQy9ELENBQUE7Q0FDRjtBQUVELFNBQWdCLGNBQWMsQ0FBQyxLQUFLOztJQUNsQyxNQUFNLElBQUksR0FDUixxQkFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLHFCQUFZLENBQUMsU0FBUztRQUMvQyxDQUFDLENBQUMsU0FBUztRQUNYLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQTtJQUMzQixPQUFPLG9CQUFDLElBQUksb0JBQUssS0FBSyxFQUFJLENBQUE7Q0FDM0I7QUFORCx3Q0FNQztBQUVELDREQUE0RDtBQUM1RCw4QkFBOEI7QUFDOUIsY0FBYyxDQUFDLFlBQVksR0FBRyxlQUFNLENBQUMsY0FBYyxDQUFDLENBQUE7QUFDcEQsNEJBQW1CLENBQUMsY0FBYyxvQkFDN0IsZUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQzdCLFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxvQkFBVyxDQUFDLGlCQUFpQjtRQUNuQyxLQUFLLEVBQUUsU0FBUztLQUNqQixJQUNELENBQUEifQ==

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const ScrollContext_1 = __webpack_require__(/*! ./ScrollContext */ "./code/ScrollContext.tsx");
const use_parallax_1 = __webpack_require__(/*! use-parallax */ "use-parallax");
const EmptyConnector_1 = __webpack_require__(/*! ./EmptyConnector */ "./code/EmptyConnector.tsx");
function Thumbnail() {
    window["__checkBudget__"]();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", className: "feather feather-book", viewBox: "0 0 24 24" },
        React.createElement("path", { d: "M4 19.5A2.5 2.5 0 016.5 17H20" }),
        React.createElement("path", { d: "M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" })));
}
function ParallaxScrollPreview(_a) {
    var { children } = _a, props = __rest(_a, ["children"]);
    window["__checkBudget__"]();
    const offsetX = framer_1.useMotionValue(0);
    const offsetY = framer_1.useMotionValue(0);
    const scrollX = use_parallax_1.usePositiveOffset(offsetX);
    const scrollY = use_parallax_1.usePositiveOffset(offsetY);
    return React.Children.count(children) > 0 ? (React.createElement(ScrollContext_1.ScrollContext.Provider, { value: { scrollX, scrollY } },
        React.createElement(framer_1.Scroll, Object.assign({}, props, { contentOffsetX: offsetX, contentOffsetY: offsetY }), children))) : (React.createElement(EmptyConnector_1.EmptyConnector, { title: "Connect to a Frame \u2192", description: "" }));
}
function ParallaxScroll(props) {
    window["__checkBudget__"]();
    const Comp = framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail
        ? Thumbnail
        : ParallaxScrollPreview;
    return React.createElement(Comp, Object.assign({}, props));
}
exports.ParallaxScroll = ParallaxScroll;
// Use Scroll["defaultProps"] instead of Scroll.defaultProps
// to prevent TypeScript error
ParallaxScroll.defaultProps = framer_1.Scroll["defaultProps"];
framer_1.addPropertyControls(ParallaxScroll, Object.assign({}, framer_1.Scroll["propertyControls"], { children: {
        type: framer_1.ControlType.ComponentInstance,
        title: "Content"
    } }));
exports.__info__ = [{ "name": "ParallaxScroll", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/ScrollContext.tsx":
/*!********************************!*\
  !*** ./code/ScrollContext.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Nyb2xsQ29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvU2Nyb2xsQ29udGV4dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFFakIsUUFBQSxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztJQUMvQyxPQUFPLEVBQUUsSUFBSTtJQUNiLE9BQU8sRUFBRSxJQUFJO0NBQ2QsQ0FBQyxDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.ScrollContext = React.createContext({
    scrollX: null,
    scrollY: null
});
exports.__info__ = [];


/***/ }),

/***/ "./code/SimpleExamples.tsx":
/*!*********************************!*\
  !*** ./code/SimpleExamples.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2ltcGxlRXhhbXBsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1NpbXBsZUV4YW1wbGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUE2RDtBQUU3RCx3QkFBOEQ7QUFFakQsUUFBQSxZQUFZLEdBQWEsS0FBSyxDQUFDLEVBQUU7O0lBQzVDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxZQUFTLEVBQUUsQ0FBQTtJQUMvQixNQUFNLENBQUMsR0FBRyxZQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDeEMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFBO0NBQ2IsQ0FBQTtBQUVZLFFBQUEsT0FBTyxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUN2QyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsWUFBUyxFQUFFLENBQUE7SUFDL0IsTUFBTSxPQUFPLEdBQUcscUJBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN4RCxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUE7Q0FDbkIsQ0FBQTtBQUVZLFFBQUEsRUFBRSxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUNsQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsWUFBUyxFQUFFLENBQUE7SUFDL0IsTUFBTSxVQUFVLEdBQUcscUJBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUE7Q0FDdEIsQ0FBQTtBQUVZLFFBQUEsTUFBTSxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUN0QyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsWUFBUyxFQUFFLENBQUE7SUFDL0IsTUFBTSxDQUFDLEdBQUcsV0FBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUN6QyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUE7Q0FDYixDQUFBO0FBRVksUUFBQSxPQUFPLEdBQWEsS0FBSyxDQUFDLEVBQUU7O0lBQ3ZDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxZQUFTLEVBQUUsQ0FBQTtJQUMvQixNQUFNLENBQUMsR0FBRyxXQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQzNDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQTtDQUNiLENBQUE7QUFFWSxRQUFBLFdBQVcsR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDM0MsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLFlBQVMsRUFBRSxDQUFBO0lBQy9CLE1BQU0sQ0FBQyxHQUFHLFdBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMxQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUE7Q0FDYixDQUFBO0FBRVksUUFBQSxXQUFXLEdBQWEsS0FBSyxDQUFDLEVBQUU7O0lBQzNDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxZQUFTLEVBQUUsQ0FBQTtJQUMvQixNQUFNLENBQUMsR0FBRyxXQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDMUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFBO0NBQ2IsQ0FBQTtBQUVZLFFBQUEsTUFBTSxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUN0QyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsWUFBUyxFQUFFLENBQUE7SUFDL0IsTUFBTSxDQUFDLEdBQUcsV0FBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUN6QyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUE7Q0FDYixDQUFBO0FBRVksUUFBQSxnQkFBZ0IsR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDaEQsTUFBTSxPQUFPLEdBQUcscUJBQVksRUFBRSxDQUFBO0lBQzlCLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxZQUFTLEVBQUUsQ0FBQTtJQUMvQixhQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUFFOztRQUMxQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtLQUNsRCxDQUFDLENBQUE7SUFDRixPQUFPO1FBQ0wsT0FBTztLQUNSLENBQUE7Q0FDRixDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const _1 = __webpack_require__(/*! . */ "./code/index.tsx");
exports.Sticky100400 = props => {
    window["__checkBudget__"]();
    const { scrollY } = _1.useScroll();
    const y = _1.useSticky(scrollY, [100, 400]);
    return { y };
};
exports.Opacity = props => {
    window["__checkBudget__"]();
    const { scrollY } = _1.useScroll();
    const opacity = framer_1.useTransform(scrollY, [0, 1000], [1, 0]);
    return { opacity };
};
exports.Bg = props => {
    window["__checkBudget__"]();
    const { scrollY } = _1.useScroll();
    const background = framer_1.useTransform(scrollY, [0, 1000], ["#F00", "#000"]);
    return { background };
};
exports.Speed0 = props => {
    window["__checkBudget__"]();
    const { scrollY } = _1.useScroll();
    const y = _1.useSpeed(scrollY, [0, 1000], 0);
    return { y };
};
exports.Speed05 = props => {
    window["__checkBudget__"]();
    const { scrollY } = _1.useScroll();
    const y = _1.useSpeed(scrollY, [0, 1000], 0.5);
    return { y };
};
exports.Speedminus1 = props => {
    window["__checkBudget__"]();
    const { scrollY } = _1.useScroll();
    const y = _1.useSpeed(scrollY, [0, 1000], -1);
    return { y };
};
exports.Speedminus2 = props => {
    window["__checkBudget__"]();
    const { scrollY } = _1.useScroll();
    const y = _1.useSpeed(scrollY, [0, 1000], -2);
    return { y };
};
exports.Speed1 = props => {
    window["__checkBudget__"]();
    const { scrollY } = _1.useScroll();
    const y = _1.useSpeed(scrollY, [0, 1000], 1);
    return { y };
};
exports.TriggerAnimation = props => {
    window["__checkBudget__"]();
    const animate = framer_1.useAnimation();
    const { scrollY } = _1.useScroll();
    _1.useTrigger(scrollY, [600, 650], direction => {
        window["__checkBudget__"]();
        animate.start({ rotate: direction > 0 ? 0 : 90 });
    });
    return {
        animate
    };
};
exports.__info__ = [{ "name": "Sticky100400", "type": "override" }, { "name": "Opacity", "type": "override" }, { "name": "Bg", "type": "override" }, { "name": "Speed0", "type": "override" }, { "name": "Speed05", "type": "override" }, { "name": "Speedminus1", "type": "override" }, { "name": "Speedminus2", "type": "override" }, { "name": "Speed1", "type": "override" }, { "name": "TriggerAnimation", "type": "override" }];


/***/ }),

/***/ "./code/StickyScroll.tsx":
/*!*******************************!*\
  !*** ./code/StickyScroll.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RpY2t5U2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9TdGlja3lTY3JvbGwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsd0JBQXdDO0FBRXhDLE1BQU0sV0FBVyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUE7QUFFZCxRQUFBLEtBQUssR0FBYSxHQUFHLEVBQUU7O0lBQ2xDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxZQUFTLEVBQUUsQ0FBQTtJQUMvQixNQUFNLENBQUMsR0FBRyxZQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFBO0lBQ3RELE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQTtDQUNiLENBQUE7QUFFWSxRQUFBLFNBQVMsR0FBYSxHQUFHLEVBQUU7O0lBQ3RDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxZQUFTLEVBQUUsQ0FBQTtJQUMvQixNQUFNLENBQUMsR0FBRyxZQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFBO0lBQ3ZELE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQTtDQUNiLENBQUE7QUFFWSxRQUFBLE9BQU8sR0FBYSxHQUFHLEVBQUU7O0lBQ3BDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxZQUFTLEVBQUUsQ0FBQTtJQUMvQixNQUFNLENBQUMsR0FBRyxZQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFBO0lBQ3hELE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQTtDQUNiLENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./code/index.tsx");
const titleHeight = 71 + 10;
exports.About = () => {
    window["__checkBudget__"]();
    const { scrollY } = _1.useScroll();
    const y = _1.useSticky(scrollY, [422, 696 - titleHeight]);
    return { y };
};
exports.Portfolio = () => {
    window["__checkBudget__"]();
    const { scrollY } = _1.useScroll();
    const y = _1.useSticky(scrollY, [696, 1136 - titleHeight]);
    return { y };
};
exports.Contact = () => {
    window["__checkBudget__"]();
    const { scrollY } = _1.useScroll();
    const y = _1.useSticky(scrollY, [1136, 1500 - titleHeight]);
    return { y };
};
exports.__info__ = [{ "name": "About", "type": "override" }, { "name": "Portfolio", "type": "override" }, { "name": "Contact", "type": "override" }];


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

/***/ "./code/iPhoneXRScrolling.tsx":
/*!************************************!*\
  !*** ./code/iPhoneXRScrolling.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaVBob25lWFJTY3JvbGxpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL2lQaG9uZVhSU2Nyb2xsaW5nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUE2RDtBQUM3RCx3QkFBOEQ7QUFFakQsUUFBQSxPQUFPLEdBQWEsR0FBRyxFQUFFOztJQUNwQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsWUFBUyxFQUFFLENBQUE7SUFDL0IsTUFBTSxPQUFPLEdBQUcscUJBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUE7Q0FDbkIsQ0FBQTtBQUVZLFFBQUEsUUFBUSxHQUFhLEdBQUcsRUFBRTs7SUFDckMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLFlBQVMsRUFBRSxDQUFBO0lBQy9CLE1BQU0sQ0FBQyxHQUFHLFdBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDM0QsTUFBTSxLQUFLLEdBQUcscUJBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN6RCxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFBO0NBQ3BCLENBQUE7QUFFWSxRQUFBLGFBQWEsR0FBYSxHQUFHLEVBQUU7O0lBQzFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxZQUFTLEVBQUUsQ0FBQTtJQUMvQixNQUFNLENBQUMsR0FBRyxZQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUE7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

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const _1 = __webpack_require__(/*! . */ "./code/index.tsx");
exports.Blocker = () => {
    window["__checkBudget__"]();
    const { scrollY } = _1.useScroll();
    const opacity = framer_1.useTransform(scrollY, [0, 200], [0, 1]);
    return { opacity };
};
exports.IPhoneXR = () => {
    window["__checkBudget__"]();
    const { scrollY } = _1.useScroll();
    const y = _1.useSpeed(scrollY, [100, 350], 2, [500, 1050], -1);
    const scale = framer_1.useTransform(scrollY, [300, 750], [1.5, 1]);
    return { y, scale };
};
exports.PhoneNameSize = () => {
    window["__checkBudget__"]();
    const { scrollY } = _1.useScroll();
    const y = _1.useSticky(scrollY, [500, 1050]);
    const animate = framer_1.useAnimation();
    _1.useTrigger(scrollY, [750, 800], direction => {
        window["__checkBudget__"]();
        animate.start({ opacity: direction < 0 ? 1 : 0 });
    });
    return { top: 850, animate, y, opacity: 0 };
};
exports.FeatureContainer = () => {
    window["__checkBudget__"]();
    return {
        top: 1180
    };
};
exports.Feature1 = () => {
    window["__checkBudget__"]();
    const { scrollY } = _1.useScroll();
    const opacity = framer_1.useTransform(scrollY, [800, 850], [0, 1]);
    return { opacity };
};
exports.Feature2 = () => {
    window["__checkBudget__"]();
    const { scrollY } = _1.useScroll();
    const opacity = framer_1.useTransform(scrollY, [850, 900], [0, 1]);
    return { opacity };
};
exports.Feature3 = () => {
    window["__checkBudget__"]();
    const { scrollY } = _1.useScroll();
    const opacity = framer_1.useTransform(scrollY, [900, 950], [0, 1]);
    return { opacity };
};
exports.Feature4 = () => {
    window["__checkBudget__"]();
    const { scrollY } = _1.useScroll();
    const opacity = framer_1.useTransform(scrollY, [950, 1000], [0, 1]);
    return { opacity };
};
exports.Feature5 = () => {
    window["__checkBudget__"]();
    const { scrollY } = _1.useScroll();
    const opacity = framer_1.useTransform(scrollY, [1000, 1050], [0, 1]);
    return { opacity };
};
exports.__info__ = [{ "name": "Blocker", "type": "override" }, { "name": "IPhoneXR", "type": "override" }, { "name": "PhoneNameSize", "type": "override" }, { "name": "FeatureContainer", "type": "override" }, { "name": "Feature1", "type": "override" }, { "name": "Feature2", "type": "override" }, { "name": "Feature3", "type": "override" }, { "name": "Feature4", "type": "override" }, { "name": "Feature5", "type": "override" }];


/***/ }),

/***/ "./code/index.tsx":
/*!************************!*\
  !*** ./code/index.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtDQUE0QjtBQUM1QixpQ0FBa0M7QUFDbEMsbURBQStDO0FBRS9DLFNBQWdCLFNBQVM7O0lBQ3ZCLE9BQU8sa0JBQVUsQ0FBQyw2QkFBYSxDQUFDLENBQUE7Q0FDakM7QUFGRCw4QkFFQyJ9

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! use-parallax */ "use-parallax"));
const react_1 = __webpack_require__(/*! react */ "react");
const ScrollContext_1 = __webpack_require__(/*! ./ScrollContext */ "./code/ScrollContext.tsx");
function useScroll() {
    window["__checkBudget__"]();
    return react_1.useContext(ScrollContext_1.ScrollContext);
}
exports.useScroll = useScroll;
exports.__info__ = [];


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

                packages["framer"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                        
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"1.1.3","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.3.4","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/google.fonts":"^1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/promise-queue":"^2.2.0","@types/react":"16.8.4","@types/react-dom":"^16.8","@types/webfontloader":"^1.6.29","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^1.6.7","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"^3.5.3","watch":"^1.0.2","webfontloader":"^1.6.28","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"useOpenURL","type":"action"},{"name":"useLog","type":"action"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, name, version, scripts, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@types/jest\":\"^23.3.12\",\"@types/react\":\"^16.8\",\"ReactDOM\":\"./ReactDOM\",\"jest\":\"^23.6.0\",\"react\":\"^16.8\",\"react-dom\":\"^16.8\",\"ts-jest\":\"^23.10.5\",\"typescript\":\"^3.2.2\"},\"peerDependencies\":{\"framer\":\"^0.10.5 || ^1\",\"react\":\"^16.8\",\"react-dom\":\"^16.8\"},\"framer\":{\"id\":\"a34493cf-104a-47b0-8e80-586424e0929e\",\"displayName\":\"Parallax: Scroll Effects\"},\"author\":\"Linton Ye\",\"dependencies\":{\"mathjs\":\"^5.2.0\",\"use-parallax\":\"^0.0.4\"},\"name\":\"@framer/lintonye.parallax\",\"version\":\"1.41.0\",\"scripts\":{\"test\":\"jest\"}}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "use-parallax":
/*!*******************************!*\
  !*** external "use-parallax" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_use_parallax__;

/***/ })

/******/ });
});