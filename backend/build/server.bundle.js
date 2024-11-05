/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config/appConfig.js":
/*!*****************************!*\
  !*** ./config/appConfig.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   baseURL: () => (/* binding */ baseURL),
/* harmony export */   defaultView: () => (/* binding */ defaultView),
/* harmony export */   systemColors: () => (/* binding */ systemColors),
/* harmony export */   userColors: () => (/* binding */ userColors)
/* harmony export */ });
var userColors = ['2E86C1', '00A6D0', '00C3C7', '2DDBAB', '9DEE87'];
var systemColors = ['34495E', '4E5976', '6D698D', '8F789F', 'B488AE'];
var baseURL = '/calendarapp';
var defaultView = 'month';


/***/ }),

/***/ "./controllers/CalendarController.js":
/*!*******************************************!*\
  !*** ./controllers/CalendarController.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_CalendarService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/CalendarService */ "./services/CalendarService.js");
/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/UserService */ "./services/UserService.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./models/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var calendarService = new _services_CalendarService__WEBPACK_IMPORTED_MODULE_0__["default"](_models__WEBPACK_IMPORTED_MODULE_2__["default"].Calendar, _models__WEBPACK_IMPORTED_MODULE_2__["default"].User);
var userService = new _services_UserService__WEBPACK_IMPORTED_MODULE_1__["default"](_models__WEBPACK_IMPORTED_MODULE_2__["default"].User);
var CalendarController = /*#__PURE__*/_createClass(function CalendarController(service) {
  var _this = this;
  _classCallCheck(this, CalendarController);
  _defineProperty(this, "create", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
      var data, userResponse;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            data = _objectSpread(_objectSpread({}, req.body), {}, {
              user_id: req.auth.user
            });
            _context.next = 4;
            return _this.service.create(data);
          case 4:
            _context.next = 6;
            return _this.userService.getOne(req.auth.user);
          case 6:
            userResponse = _context.sent;
            return _context.abrupt("return", res.status(200).send(userResponse.calendarSettings));
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", next(_context.t0));
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
  _defineProperty(this, "update", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _this.service.update(req.params.calendarId, req.body);
          case 3:
            response = _context2.sent;
            return _context2.abrupt("return", res.status(response.statusCode).send(response.data));
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", next(_context2.t0));
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }());
  _defineProperty(this, "updateSettings", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _this.userService.updateCalendarSettings(req.auth.user, req.body);
          case 3:
            response = _context3.sent;
            return _context3.abrupt("return", res.status(response.statusCode).send(response.data));
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", next(_context3.t0));
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 7]]);
    }));
    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }());
  _defineProperty(this, "delete", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {
      var userResponse, targetCalendarSettings, response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _this.userService.getOne(req.auth.user);
          case 3:
            userResponse = _context4.sent;
            targetCalendarSettings = userResponse.calendarSettings.filter(function (entry) {
              return entry.id === req.params.calendarId;
            });
            if (!(targetCalendarSettings.userDefault === true)) {
              _context4.next = 7;
              break;
            }
            return _context4.abrupt("return", res.status(403).send({
              message: 'Cannot delete default calendar. Please try again.',
              errorCode: 'calendar'
            }));
          case 7:
            _context4.next = 9;
            return _this.service["delete"](req.params.calendarId);
          case 9:
            response = _context4.sent;
            return _context4.abrupt("return", res.status(response.statusCode).send(response.data));
          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", next(_context4.t0));
          case 16:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 13]]);
    }));
    return function (_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  }());
  this.service = service;
  this.userService = userService;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new CalendarController(calendarService, userService));

/***/ }),

/***/ "./controllers/EventController.js":
/*!****************************************!*\
  !*** ./controllers/EventController.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_EventService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/EventService */ "./services/EventService.js");
/* harmony import */ var _services_CalendarService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/CalendarService */ "./services/CalendarService.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./models/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var eventService = new _services_EventService__WEBPACK_IMPORTED_MODULE_0__["default"](_models__WEBPACK_IMPORTED_MODULE_2__["default"].Event);
var calendarService = new _services_CalendarService__WEBPACK_IMPORTED_MODULE_1__["default"](_models__WEBPACK_IMPORTED_MODULE_2__["default"].Calendar);
var EventController = /*#__PURE__*/_createClass(function EventController(service, calendarService) {
  var _this = this;
  _classCallCheck(this, EventController);
  _defineProperty(this, "create", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _this.service.create(req.body);
          case 3:
            response = _context.sent;
            return _context.abrupt("return", res.status(response.statusCode).send(response.data));
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", next(_context.t0));
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getUserEvents", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
      var calendars, calendarIds, response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _this.calendarService.getUserCalendars(req.auth.user);
          case 3:
            calendars = _context2.sent;
            if (!(!calendars || calendars.length < 1)) {
              _context2.next = 6;
              break;
            }
            throw new NotFoundError('No matching calendars found', {
              errorCode: 'calendar'
            });
          case 6:
            calendarIds = calendars.data.map(function (calendar) {
              return calendar.id;
            });
            _context2.next = 9;
            return _this.service.getUserEvents(calendarIds);
          case 9:
            response = _context2.sent;
            return _context2.abrupt("return", res.status(response.statusCode).send(response.data));
          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", next(_context2.t0));
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 13]]);
    }));
    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }());
  _defineProperty(this, "update", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _this.service.update(req.body);
          case 3:
            response = _context3.sent;
            return _context3.abrupt("return", res.status(response.statusCode).send(response.data));
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", next(_context3.t0));
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 7]]);
    }));
    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }());
  _defineProperty(this, "delete", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {
      var response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _this.service["delete"](req.params.eventId);
          case 3:
            response = _context4.sent;
            return _context4.abrupt("return", res.status(response.statusCode).send(response.data));
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", next(_context4.t0));
          case 10:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 7]]);
    }));
    return function (_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  }());
  this.service = service;
  this.calendarService = calendarService;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new EventController(eventService, calendarService));

/***/ }),

/***/ "./controllers/UserController.js":
/*!***************************************!*\
  !*** ./controllers/UserController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "./models/index.js");
/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/UserService */ "./services/UserService.js");
/* harmony import */ var _middleware_authJwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middleware/authJwt */ "./middleware/authJwt.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var userService = new _services_UserService__WEBPACK_IMPORTED_MODULE_2__["default"](_models__WEBPACK_IMPORTED_MODULE_1__["default"].User, _models__WEBPACK_IMPORTED_MODULE_1__["default"].RefreshToken, _models__WEBPACK_IMPORTED_MODULE_1__["default"].Role, _models__WEBPACK_IMPORTED_MODULE_1__["default"].Calendar, _models__WEBPACK_IMPORTED_MODULE_1__["default"].Event);
var UserController = /*#__PURE__*/_createClass(function UserController(service) {
  var _this = this;
  _classCallCheck(this, UserController);
  // create user, assign roles
  _defineProperty(this, "register", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
      var _req$body$roles, _req$body, user, roleNames;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _this.service.create(req.body);
          case 3:
            user = _context.sent;
            roleNames = (_req$body$roles = (_req$body = req.body) === null || _req$body === void 0 ? void 0 : _req$body.roles) !== null && _req$body$roles !== void 0 ? _req$body$roles : ['user'];
            _context.next = 7;
            return _this.service.assignRoles(user, roleNames);
          case 7:
            return _context.abrupt("return", next());
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", next(_context.t0));
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
  _defineProperty(this, "login", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {
      var loginResponse;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _this.service.login(req.body.username, req.body.password);
          case 3:
            loginResponse = _context3.sent;
            if (loginResponse.accessToken) {
              _context3.next = 6;
              break;
            }
            return _context3.abrupt("return", res.status(403).send({
              message: 'No token found!',
              errorCode: 'user'
            }));
          case 6:
            // Decode token and lookup full user doc
            jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(loginResponse.accessToken, "mysecretkey", /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e, decoded) {
                var userResponse, response;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!e) {
                        _context2.next = 2;
                        break;
                      }
                      return _context2.abrupt("return", _middleware_authJwt__WEBPACK_IMPORTED_MODULE_3__["default"].catchTokenError(e, res));
                    case 2:
                      _context2.next = 4;
                      return _this.service.getOne(decoded.id);
                    case 4:
                      userResponse = _context2.sent;
                      response = _objectSpread(_objectSpread({}, loginResponse), userResponse);
                      return _context2.abrupt("return", res.status(200).send(response));
                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function (_x7, _x8) {
                return _ref3.apply(this, arguments);
              };
            }());
            _context3.next = 12;
            break;
          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", next(_context3.t0));
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 9]]);
    }));
    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }());
  _defineProperty(this, "refreshToken", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {
      var requestToken, response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            requestToken = req.body.refreshToken;
            if (requestToken) {
              _context4.next = 3;
              break;
            }
            return _context4.abrupt("return", res.redirect('/login'));
          case 3:
            _context4.prev = 3;
            _context4.next = 6;
            return _this.service.refreshToken(requestToken);
          case 6:
            response = _context4.sent;
            return _context4.abrupt("return", res.status(response.statusCode).send(response.data));
          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](3);
            return _context4.abrupt("return", next(_context4.t0));
          case 13:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[3, 10]]);
    }));
    return function (_x9, _x10, _x11) {
      return _ref4.apply(this, arguments);
    };
  }());
  _defineProperty(this, "update", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res, next) {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _this.service.update(req.auth.user, req.body);
          case 3:
            response = _context5.sent;
            return _context5.abrupt("return", res.status(response.statusCode).send(response.data));
          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", next(_context5.t0));
          case 10:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 7]]);
    }));
    return function (_x12, _x13, _x14) {
      return _ref5.apply(this, arguments);
    };
  }());
  this.service = service;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new UserController(userService));

/***/ }),

/***/ "./db/connection.js":
/*!**************************!*\
  !*** ./db/connection.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! models */ "./models/index.js");
/* harmony import */ var services_RoleService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! services/RoleService */ "./services/RoleService.js");
/* harmony import */ var services_CalendarService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! services/CalendarService */ "./services/CalendarService.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



var MONGO_HOSTNAME = "mongo";
var MONGO_PORT = "27017";
var MONGO_DB = "reactcalendar_db";
var MONGO_USERNAME = "appuser";
var MONGO_PASSWORD = "jaAVHhjRJdbcXPxBq7UT";
var MONGO_URL = "mongodb://".concat(MONGO_USERNAME, ":").concat(MONGO_PASSWORD, "@").concat(MONGO_HOSTNAME, ":").concat(MONGO_PORT, "/").concat(MONGO_DB, "?authSource=admin");
var mongoose = models__WEBPACK_IMPORTED_MODULE_0__["default"].mongoose;
var Role = models__WEBPACK_IMPORTED_MODULE_0__["default"].Role;
var Calendar = models__WEBPACK_IMPORTED_MODULE_0__["default"].Calendar;
var roleService = new services_RoleService__WEBPACK_IMPORTED_MODULE_1__["default"](Role);
var calendarService = new services_CalendarService__WEBPACK_IMPORTED_MODULE_2__["default"](Calendar);
var initializeRoles = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var count;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Role.countDocuments({});
        case 2:
          count = _context.sent;
          if (!(count === 0)) {
            _context.next = 11;
            break;
          }
          _context.next = 6;
          return roleService.create('user');
        case 6:
          _context.next = 8;
          return roleService.create('moderator');
        case 8:
          _context.next = 10;
          return roleService.create('admin');
        case 10:
          console.log('Initialized roles.');
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function initializeRoles() {
    return _ref.apply(this, arguments);
  };
}();
var initializeCalendars = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var count, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Calendar.countDocuments({
            user_id: 'system',
            name: 'US Holidays'
          });
        case 2:
          count = _context2.sent;
          if (!(count === 0)) {
            _context2.next = 8;
            break;
          }
          data = {
            name: 'US Holidays',
            user_id: 'system'
          };
          _context2.next = 7;
          return calendarService.create(data);
        case 7:
          console.log('Created US Holidays calendar.');
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function initializeCalendars() {
    return _ref2.apply(this, arguments);
  };
}();
mongoose.connect(MONGO_URL).then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        console.log('Connected to MongoDB');

        // Initialize roles
        _context3.next = 3;
        return initializeRoles();
      case 3:
        _context3.next = 5;
        return initializeCalendars();
      case 5:
      case "end":
        return _context3.stop();
    }
  }, _callee3);
})))["catch"](function (e) {
  console.error('Connection error', e);
  process.exit();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (models__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./middleware/authJwt.js":
/*!*******************************!*\
  !*** ./middleware/authJwt.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "./models/index.js");
/* harmony import */ var _services_CalendarService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/CalendarService */ "./services/CalendarService.js");
/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/UserService */ "./services/UserService.js");
/* harmony import */ var _services_EventService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/EventService */ "./services/EventService.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





var User = _models__WEBPACK_IMPORTED_MODULE_1__["default"].User;
var RefreshToken = _models__WEBPACK_IMPORTED_MODULE_1__["default"].RefreshToken;
var Role = _models__WEBPACK_IMPORTED_MODULE_1__["default"].Role;
var Calendar = _models__WEBPACK_IMPORTED_MODULE_1__["default"].Calendar;
var Event = _models__WEBPACK_IMPORTED_MODULE_1__["default"].Event;
var TokenExpiredError = (jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().TokenExpiredError);
var calendarService = new _services_CalendarService__WEBPACK_IMPORTED_MODULE_2__["default"](Calendar);
var userService = new _services_UserService__WEBPACK_IMPORTED_MODULE_3__["default"](User, RefreshToken, Role);
var eventService = new _services_EventService__WEBPACK_IMPORTED_MODULE_4__["default"](Event);
var catchTokenError = function catchTokenError(e, res) {
  if (e instanceof TokenExpiredError) {
    return res.status(401).send({
      message: 'Unauthorized! Access Token was expired!',
      errorCode: 'accesstoken'
    });
  }
  return res.sendStatus(401).send({
    message: 'Unauthorized!',
    errorCode: 'accesstoken'
  });
};
var verifyToken = function verifyToken(req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token) {
    return res.status(403).send({
      message: 'No token provided!',
      errorCode: 'accesstoken'
    });
  }

  // Decode token and attach user info to request
  jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, "mysecretkey", function (e, decoded) {
    if (e) {
      return catchTokenError(e, res);
    }
    req.auth = {
      user: decoded.id
    };
    return next();
  });
};

// Checks authed user against request params for resource authorization
// Can be replaced with an access control list or similar
var verifyURIAuth = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
    var url, calendar, user, event, _calendar;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          url = req.baseUrl + req.route.path;
          _context.t0 = url;
          _context.next = _context.t0 === "".concat(req.baseUrl, "/:userId") ? 4 : _context.t0 === "".concat(req.baseUrl, "/:calendarId") ? 7 : _context.t0 === "".concat(req.baseUrl, "/:calendarId/settings") ? 13 : _context.t0 === "".concat(req.baseUrl, "/:eventId") ? 19 : 28;
          break;
        case 4:
          if (!(req.auth.user !== req.params.userId)) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", res.status(403).send({
            message: 'Requires admin role!',
            errorCode: 'role'
          }));
        case 6:
          return _context.abrupt("return", next());
        case 7:
          _context.next = 9;
          return calendarService.getOne(req.params.calendarId);
        case 9:
          calendar = _context.sent;
          if (!(req.auth.user !== calendar.data.user_id)) {
            _context.next = 12;
            break;
          }
          return _context.abrupt("return", res.status(403).send({
            message: 'Requires admin role!',
            errorCode: 'role'
          }));
        case 12:
          return _context.abrupt("return", next());
        case 13:
          _context.next = 15;
          return User.findOne({
            _id: req.auth.user,
            'calendarSettings.calendar': {
              $eq: req.params.calendarId
            }
          });
        case 15:
          user = _context.sent;
          if (user) {
            _context.next = 18;
            break;
          }
          return _context.abrupt("return", res.status(403).send({
            message: 'Requires admin role!',
            errorCode: 'role'
          }));
        case 18:
          return _context.abrupt("return", next());
        case 19:
          _context.next = 21;
          return eventService.getOne(req.params.eventId);
        case 21:
          event = _context.sent;
          _context.next = 24;
          return calendarService.getOne(event.data.calendar);
        case 24:
          _calendar = _context.sent;
          if (!(req.auth.user !== _calendar.data.user_id)) {
            _context.next = 27;
            break;
          }
          return _context.abrupt("return", res.status(403).send({
            message: 'Requires admin role!',
            errorCode: 'role'
          }));
        case 27:
          return _context.abrupt("return", next());
        case 28:
          return _context.abrupt("return", res.status(403).send({
            message: 'Requires admin role!',
            errorCode: 'role'
          }));
        case 29:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function verifyURIAuth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var isAdmin = function isAdmin(req, res, next) {
  User.findById(req.auth.user).exec(function (e, user) {
    if (e) {
      return next(e);
    }

    // Mongoose returns [] for .find query with no matches
    Role.find({
      id: {
        $in: user.roles
      }
    }, function (e, roles) {
      if (e) {
        return next(e);
      }
      for (var i = 0; i < roles.length; i++) {
        if (roles[i].name === 'admin') {
          return next();
        }
      }
      return res.status(403).send({
        message: 'Require Admin Role!',
        errorCode: 'role'
      });
    });
  });
};
var isModerator = function isModerator(req, res, next) {
  User.findById(req.auth.user).exec(function (e, user) {
    if (e) {
      return next(e);
    }

    // Mongoose returns [] for .find query with no matches
    Role.find({
      id: {
        $in: user.roles
      }
    }, function (e, roles) {
      if (e) {
        return next(e);
      }
      for (var i = 0; i < roles.length; i++) {
        if (roles[i].name === 'moderator') {
          return next();
        }
      }
      return res.status(403).send({
        message: 'Require Moderator Role!',
        errorCode: 'role'
      });
    });
  });
};
var authJwt = {
  verifyToken: verifyToken,
  verifyURIAuth: verifyURIAuth,
  isAdmin: isAdmin,
  isModerator: isModerator
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authJwt);

/***/ }),

/***/ "./middleware/index.js":
/*!*****************************!*\
  !*** ./middleware/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authJwt: () => (/* reexport safe */ _authJwt__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   verifyRegistration: () => (/* reexport safe */ _verifyRegistration__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _authJwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authJwt */ "./middleware/authJwt.js");
/* harmony import */ var _verifyRegistration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifyRegistration */ "./middleware/verifyRegistration.js");




/***/ }),

/***/ "./middleware/verifyRegistration.js":
/*!******************************************!*\
  !*** ./middleware/verifyRegistration.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ "./models/index.js");
/* harmony import */ var _utils_userFacingErrors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/userFacingErrors */ "./utils/userFacingErrors.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var checkDuplicateUsername = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _models__WEBPACK_IMPORTED_MODULE_0__["default"].User.findByUsername(req.body.username).then(function (user) {
            if (user) {
              throw new _utils_userFacingErrors__WEBPACK_IMPORTED_MODULE_1__.BadRequestError('Username is already in use', {
                errorCode: 'username'
              });
            }
          });
        case 3:
          return _context.abrupt("return", next());
        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", next(_context.t0));
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 6]]);
  }));
  return function checkDuplicateUsername(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var checkRolesExist = function checkRolesExist(req, res, next) {
  var _req$body$roles;
  // Attaching roles to registration request is optional
  if (!req.body.roles || ((_req$body$roles = req.body.roles) === null || _req$body$roles === void 0 ? void 0 : _req$body$roles.length) < 1) return next();

  // Check attached roles
  for (var i = 0; i < req.body.roles.length; i++) {
    if (!roles.includes(req.body.roles[i])) {
      throw new _utils_userFacingErrors__WEBPACK_IMPORTED_MODULE_1__.BadRequestError("Role ".concat(req.body.roles[i], " does not exist!"), {
        errorCode: 'role'
      });
    }
  }
  return next();
};
var verifyRegistration = {
  checkDuplicateUsername: checkDuplicateUsername,
  checkRolesExist: checkRolesExist
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (verifyRegistration);

/***/ }),

/***/ "./models/Calendar.js":
/*!****************************!*\
  !*** ./models/Calendar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./models/User.js");
/* harmony import */ var _utils_databaseErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/databaseErrors */ "./utils/databaseErrors.js");
/* harmony import */ var config_appConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config/appConfig */ "./config/appConfig.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var schema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  name: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true,
    "default": 'system'
  }
});

// preserving isNew state for 'post' middleware
schema.pre('save', function (next) {
  this.wasNew = this.isNew;
  next();
});

// schema middleware to apply after saving
var handleE11000 = function handleE11000(error, res, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    throw new _utils_databaseErrors__WEBPACK_IMPORTED_MODULE_2__.DuplicateKeyError('There was a conflict with an existing entry. Please try again.', {
      errorCode: 'calendar'
    });
  } else {
    return next();
  }
};
schema.post('save', handleE11000);
schema.post('findOneAndUpdate', handleE11000);

// Embed calendar settings in corresponding user doc(s)
schema.post('save', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var systemCalendarsCount, settings, userCalendarsCount, _settings;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        if (!(this.id && this.wasNew)) {
          _context.next = 25;
          break;
        }
        _context.prev = 1;
        if (!(this.user_id === 'system')) {
          _context.next = 11;
          break;
        }
        _context.next = 5;
        return Calendar.countDocuments({
          user_id: 'system'
        });
      case 5:
        systemCalendarsCount = _context.sent;
        // prepare calendar settings object
        settings = {
          calendar: this.id,
          userDefault: false,
          visibility: true,
          color: "#".concat(config_appConfig__WEBPACK_IMPORTED_MODULE_3__.systemColors[(systemCalendarsCount - 1) % config_appConfig__WEBPACK_IMPORTED_MODULE_3__.systemColors.length])
        }; // embed in all user docs
        _context.next = 9;
        return _User__WEBPACK_IMPORTED_MODULE_1__["default"].updateMany({}, {
          $push: {
            calendarSettings: settings
          }
        });
      case 9:
        _context.next = 20;
        break;
      case 11:
        _context.next = 13;
        return Calendar.countDocuments({
          user_id: this.user_id
        });
      case 13:
        userCalendarsCount = _context.sent;
        if (!(userCalendarsCount < 1)) {
          _context.next = 16;
          break;
        }
        throw new DatabaseError('Matching calendar(s) not found', {
          errorCode: 'calendar'
        });
      case 16:
        // if user calendar(s) found, process calendar settings
        _settings = {
          calendar: this.id,
          visibility: true,
          color: "#".concat(config_appConfig__WEBPACK_IMPORTED_MODULE_3__.userColors[(userCalendarsCount - 1) % config_appConfig__WEBPACK_IMPORTED_MODULE_3__.userColors.length])
        }; // set userDefault property
        if (userCalendarsCount === 1) {
          _settings.userDefault = true;
        } else {
          _settings.userDefault = false;
        }

        // embed calendar settings in user doc
        _context.next = 20;
        return _User__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate(this.user_id, {
          $push: {
            calendarSettings: _settings
          }
        });
      case 20:
        _context.next = 25;
        break;
      case 22:
        _context.prev = 22;
        _context.t0 = _context["catch"](1);
        throw new Error(_context.t0);
      case 25:
      case "end":
        return _context.stop();
    }
  }, _callee, this, [[1, 22]]);
})));

// Delete calendar settings in corresponding user doc(s)
schema.post('findOneAndDelete', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(doc) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          if (!(doc.user_id === 'system')) {
            _context2.next = 6;
            break;
          }
          _context2.next = 4;
          return _User__WEBPACK_IMPORTED_MODULE_1__["default"].updateMany({}, {
            $pull: {
              calendarSettings: {
                calendar: doc._id
              }
            }
          });
        case 4:
          _context2.next = 8;
          break;
        case 6:
          _context2.next = 8;
          return _User__WEBPACK_IMPORTED_MODULE_1__["default"].updateOne({
            _id: doc.user_id
          }, {
            $pull: {
              calendarSettings: {
                calendar: doc._id
              }
            }
          });
        case 8:
          _context2.next = 13;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          throw new Error(_context2.t0);
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());

// schema index
schema.index({
  name: 1,
  user_id: 1
}, {
  unique: true
});
var Calendar = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Calendar', schema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calendar);

/***/ }),

/***/ "./models/Event.js":
/*!*************************!*\
  !*** ./models/Event.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var schema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  title: {
    type: String,
    required: [true, 'Enter a title.']
  },
  desc: {
    type: String
  },
  start: {
    type: String,
    required: [true, 'Enter a start date.']
  },
  end: {
    type: String,
    required: [true, 'Enter an end date.']
  },
  allDay: {
    type: Boolean,
    required: true,
    "default": false
  },
  timeZone: {
    type: String,
    required: true
  },
  calendar: {
    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
    required: true,
    ref: 'Calendar'
  }
});
var Event = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Event', schema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Event);

/***/ }),

/***/ "./models/RefreshToken.js":
/*!********************************!*\
  !*** ./models/RefreshToken.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var schema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  token: {
    type: String,
    required: [true, 'Enter a name.']
  },
  user: {
    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
    ref: 'User',
    required: [true, 'Enter a user id.']
  },
  expiryDate: {
    type: String,
    required: [true, 'Enter expiration date.']
  }
});
schema.statics.verifyExpiration = function (token) {
  var expiryDateObj = new Date(token.expiryDate);
  return expiryDateObj.getTime() < new Date().getTime();
};
var RefreshToken = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('RefreshToken', schema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RefreshToken);

/***/ }),

/***/ "./models/Role.js":
/*!************************!*\
  !*** ./models/Role.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var schema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  name: {
    type: String,
    required: [true, 'Enter a name.']
  }
});
var Role = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Role', schema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Role);

/***/ }),

/***/ "./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calendar */ "./models/Calendar.js");
/* harmony import */ var _utils_databaseErrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/databaseErrors */ "./utils/databaseErrors.js");
/* harmony import */ var config_appConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! config/appConfig */ "./config/appConfig.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





var SALT_WORK_FACTOR = 10;
var schema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  username: {
    type: String,
    required: [true, 'Enter a username.'],
    minLength: [4, 'Username should be at least four characters'],
    unique: [true, 'That username is taken.']
  },
  password: {
    type: String,
    required: [true, 'Enter a password.'],
    minLength: [4, 'Password should be at least four characters']
  },
  roles: [{
    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
    ref: 'Role'
  }],
  calendarSettings: [{
    calendar: {
      type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
      ref: 'Calendar'
    },
    userDefault: {
      type: Boolean,
      required: true,
      "default": false
    },
    visibility: {
      type: Boolean,
      required: true,
      "default": true
    },
    color: {
      type: String,
      required: true
    }
  }]
});

// preserving isNew state for 'post' middleware
schema.pre('save', function (next) {
  this.wasNew = this.isNew;
  next();
});

// schema middleware to apply before saving
schema.pre('save', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(next) {
    var salt;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (this.isModified('password')) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", next());
        case 2:
          _context.prev = 2;
          _context.next = 5;
          return bcrypt__WEBPACK_IMPORTED_MODULE_1___default().genSalt(SALT_WORK_FACTOR);
        case 5:
          salt = _context.sent;
          _context.next = 8;
          return bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hash(this.password, salt);
        case 8:
          this.password = _context.sent;
          return _context.abrupt("return", next());
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](2);
          return _context.abrupt("return", next(_context.t0));
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, this, [[2, 12]]);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

// schema middleware to check for duplicate keys
var handleE11000 = function handleE11000(error, res, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    throw new _utils_databaseErrors__WEBPACK_IMPORTED_MODULE_3__.DuplicateKeyError('There was a conflict with an existing entry. Please try again.', {
      errorCode: 'username'
    });
  } else {
    return next();
  }
};
schema.post('save', handleE11000);

// for new users: embed system cal settings and create user default calendar
schema.post('save', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
  var _this = this;
  var systemCals, settings, defaultCal, newDefaultCal;
  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        if (!(this.id && this.wasNew)) {
          _context2.next = 24;
          break;
        }
        _context2.prev = 1;
        _context2.next = 4;
        return _Calendar__WEBPACK_IMPORTED_MODULE_2__["default"].find({
          user_id: 'system'
        });
      case 4:
        systemCals = _context2.sent;
        if (!(systemCals.length > 0)) {
          _context2.next = 11;
          break;
        }
        settings = [];
        systemCals.forEach(function (cal, idx) {
          settings.push({
            calendar: cal.id,
            userDefault: false,
            visibility: true,
            color: "#".concat(config_appConfig__WEBPACK_IMPORTED_MODULE_4__.systemColors[idx])
          });
        });
        settings.forEach(function (entry) {
          _this.calendarSettings.push(entry);
        });

        // embed calendar settings in user doc
        _context2.next = 11;
        return this.save();
      case 11:
        _context2.next = 13;
        return _Calendar__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
          name: this.username,
          user_id: this.id
        });
      case 13:
        defaultCal = _context2.sent;
        if (!defaultCal) {
          _context2.next = 16;
          break;
        }
        throw new _utils_databaseErrors__WEBPACK_IMPORTED_MODULE_3__.DuplicateKeyError('There was a conflict with an existing entry. Please try again.', {
          errorCode: 'user'
        });
      case 16:
        newDefaultCal = new _Calendar__WEBPACK_IMPORTED_MODULE_2__["default"]({
          name: this.username,
          user_id: this.id
        }); // Create default calendar
        _context2.next = 19;
        return newDefaultCal.save();
      case 19:
        _context2.next = 24;
        break;
      case 21:
        _context2.prev = 21;
        _context2.t0 = _context2["catch"](1);
        throw new Error(_context2.t0);
      case 24:
      case "end":
        return _context2.stop();
    }
  }, _callee2, this, [[1, 21]]);
})));
schema.statics.findByUsername = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(username) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", this.findOne({
            username: username
          }));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3, this);
  }));
  return function (_x2) {
    return _ref3.apply(this, arguments);
  };
}();
schema.methods.validatePassword = /*#__PURE__*/function () {
  var _validatePassword = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(candidatePassword) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compare(candidatePassword, this.password));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4, this);
  }));
  function validatePassword(_x3) {
    return _validatePassword.apply(this, arguments);
  }
  return validatePassword;
}();
var User = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', schema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

/***/ "./models/index.js":
/*!*************************!*\
  !*** ./models/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./models/User.js");
/* harmony import */ var _Role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Role */ "./models/Role.js");
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Event */ "./models/Event.js");
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Calendar */ "./models/Calendar.js");
/* harmony import */ var _RefreshToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RefreshToken */ "./models/RefreshToken.js");






var db = {
  mongoose: (mongoose__WEBPACK_IMPORTED_MODULE_0___default()),
  User: _User__WEBPACK_IMPORTED_MODULE_1__["default"],
  Role: _Role__WEBPACK_IMPORTED_MODULE_2__["default"],
  Event: _Event__WEBPACK_IMPORTED_MODULE_3__["default"],
  Calendar: _Calendar__WEBPACK_IMPORTED_MODULE_4__["default"],
  RefreshToken: _RefreshToken__WEBPACK_IMPORTED_MODULE_5__["default"],
  roles: ['user', 'admin', 'moderator']
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);

/***/ }),

/***/ "./routers/calendarRouter.js":
/*!***********************************!*\
  !*** ./routers/calendarRouter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware */ "./middleware/index.js");
/* harmony import */ var _controllers_CalendarController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/CalendarController */ "./controllers/CalendarController.js");



var router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();

// POST request to create calendar
router.post('/', [_middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyToken], _controllers_CalendarController__WEBPACK_IMPORTED_MODULE_2__["default"].create);

// PUT request to update calendar
router.put('/:calendarId', [_middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyToken, _middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyURIAuth], _controllers_CalendarController__WEBPACK_IMPORTED_MODULE_2__["default"].update);

// DELETE request to delete calendar
router["delete"]('/:calendarId', [_middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyToken, _middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyURIAuth], _controllers_CalendarController__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"]);

// PUT request to update calendar settings
router.put('/:calendarId/settings', [_middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyToken, _middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyURIAuth], _controllers_CalendarController__WEBPACK_IMPORTED_MODULE_2__["default"].updateSettings);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./routers/eventRouter.js":
/*!********************************!*\
  !*** ./routers/eventRouter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware */ "./middleware/index.js");
/* harmony import */ var _controllers_EventController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/EventController */ "./controllers/EventController.js");



var router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();

// POST request to create event
router.post('/', [_middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyToken], _controllers_EventController__WEBPACK_IMPORTED_MODULE_2__["default"].create);

// GET request to get user events
router.get('/user', [_middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyToken], _controllers_EventController__WEBPACK_IMPORTED_MODULE_2__["default"].getUserEvents);

// PUT request to update event
router.put('/:eventId', [_middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyToken, _middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyURIAuth], _controllers_EventController__WEBPACK_IMPORTED_MODULE_2__["default"].update);

// DELETE request to delete event
router["delete"]('/:eventId', [_middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyToken, _middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyURIAuth], _controllers_EventController__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./routers/index.js":
/*!**************************!*\
  !*** ./routers/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userRouter */ "./routers/userRouter.js");
/* harmony import */ var _calendarRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendarRouter */ "./routers/calendarRouter.js");
/* harmony import */ var _eventRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventRouter */ "./routers/eventRouter.js");




var router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();
router.use('/users', _userRouter__WEBPACK_IMPORTED_MODULE_1__["default"]);
router.use('/calendars', _calendarRouter__WEBPACK_IMPORTED_MODULE_2__["default"]);
router.use('/events', _eventRouter__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./routers/userRouter.js":
/*!*******************************!*\
  !*** ./routers/userRouter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware */ "./middleware/index.js");
/* harmony import */ var _controllers_UserController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/UserController */ "./controllers/UserController.js");



var router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();

// POST request to register user
router.post('/register', [_middleware__WEBPACK_IMPORTED_MODULE_1__.verifyRegistration.checkDuplicateUsername, _middleware__WEBPACK_IMPORTED_MODULE_1__.verifyRegistration.checkRolesExist], [_controllers_UserController__WEBPACK_IMPORTED_MODULE_2__["default"].register, _controllers_UserController__WEBPACK_IMPORTED_MODULE_2__["default"].login]);

// POST request to login user (returns user object)
router.post('/login', _controllers_UserController__WEBPACK_IMPORTED_MODULE_2__["default"].login);

// POST request to refresh token
router.post('/refreshtoken', _controllers_UserController__WEBPACK_IMPORTED_MODULE_2__["default"].refreshToken);

// PUT request to update user
router.put('/:userId', [_middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyToken, _middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyURIAuth], _controllers_UserController__WEBPACK_IMPORTED_MODULE_2__["default"].update);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./server-dev.js":
/*!***********************!*\
  !*** ./server-dev.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _db_connection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db/connection.js */ "./db/connection.js");
/* harmony import */ var _routers_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routers/index.js */ "./routers/index.js");
/* harmony import */ var _utils_baseErrors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/baseErrors.js */ "./utils/baseErrors.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






var BUILD_DIR = __dirname;
var HTML_FILE = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(BUILD_DIR, 'index.html');
var PORT = "5000" || 0;
var app = express__WEBPACK_IMPORTED_MODULE_1___default()();
app.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());

// support data from POST requests
app.use(express__WEBPACK_IMPORTED_MODULE_1___default().json());
app.use(express__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({
  extended: false
}));

// serve static files
app.use(express__WEBPACK_IMPORTED_MODULE_1___default()["static"](BUILD_DIR));

// Use API routes
app.use('/api/v1', _routers_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.get('*', function (req, res) {
  res.sendFile(HTML_FILE);
});

// Global error handler
app.use(function (err, req, res, next) {
  var _err$message;
  res.header('Content-Type', 'application/json');
  var status = err.status || 400;
  var response = {
    name: err.name,
    message: (_err$message = err.message) !== null && _err$message !== void 0 ? _err$message : ''
  };
  if (err instanceof _utils_baseErrors_js__WEBPACK_IMPORTED_MODULE_5__.UserFacingError || err instanceof _utils_baseErrors_js__WEBPACK_IMPORTED_MODULE_5__.DatabaseError) {
    for (var _i = 0, _Object$entries = Object.entries(err); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      response[key] = value;
    }
  }
  res.status(status).send(response);
});
app.listen(PORT, function () {
  console.log("server started at http://localhost:".concat(PORT));
});

/***/ }),

/***/ "./services/CalendarService.js":
/*!*************************************!*\
  !*** ./services/CalendarService.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_httpResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/httpResponse */ "./utils/httpResponse.js");
/* harmony import */ var config_appConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config/appConfig */ "./config/appConfig.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var CalendarService = /*#__PURE__*/_createClass(function CalendarService(model) {
  var _this = this;
  _classCallCheck(this, CalendarService);
  _defineProperty(this, "create", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      var _obj;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _obj = {
              name: data.name,
              user_id: data.user_id
            };
            _context.next = 4;
            return _this.model.create(_obj);
          case 4:
            return _context.abrupt("return", _context.sent);
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            throw _context.t0;
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getOne", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(calendarId) {
      var result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _this.model.findById(calendarId);
          case 3:
            result = _context2.sent;
            return _context2.abrupt("return", new _utils_httpResponse__WEBPACK_IMPORTED_MODULE_0__["default"](result));
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            throw _context2.t0;
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  // Get user and system calendars
  _defineProperty(this, "getUserCalendars", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(userId) {
      var result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _this.model.find({
              user_id: {
                $in: [userId, 'system']
              }
            });
          case 3:
            result = _context3.sent;
            return _context3.abrupt("return", new _utils_httpResponse__WEBPACK_IMPORTED_MODULE_0__["default"](result));
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            throw _context3.t0;
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 7]]);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());
  _defineProperty(this, "update", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(calendarId, data) {
      var update, result;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            update = {
              name: data.name
            }; // Mongoose returns the modified document (or null) for .findByIdAndUpdate query with option 'new: true'
            _context4.next = 4;
            return _this.model.findByIdAndUpdate(calendarId, update, {
              "new": true
            });
          case 4:
            result = _context4.sent;
            return _context4.abrupt("return", new _utils_httpResponse__WEBPACK_IMPORTED_MODULE_0__["default"](result));
          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            throw _context4.t0;
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 8]]);
    }));
    return function (_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }());
  _defineProperty(this, "delete", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(calendarId) {
      var result, error;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _this.model.findByIdAndDelete(calendarId);
          case 3:
            result = _context5.sent;
            if (result) {
              _context5.next = 10;
              break;
            }
            error = new Error('Calendar not found');
            error.statusCode = 404;
            throw error;
          case 10:
            return _context5.abrupt("return", new _utils_httpResponse__WEBPACK_IMPORTED_MODULE_0__["default"](result, {
              deleted: true
            }));
          case 11:
            _context5.next = 16;
            break;
          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            throw _context5.t0;
          case 16:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 13]]);
    }));
    return function (_x6) {
      return _ref5.apply(this, arguments);
    };
  }());
  this.model = model;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarService);

/***/ }),

/***/ "./services/EventService.js":
/*!**********************************!*\
  !*** ./services/EventService.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_httpResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/httpResponse */ "./utils/httpResponse.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var EventService = /*#__PURE__*/_createClass(function EventService(model) {
  var _this = this;
  _classCallCheck(this, EventService);
  _defineProperty(this, "create", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      var result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _this.model.create(data);
          case 3:
            result = _context.sent;
            return _context.abrupt("return", new _utils_httpResponse__WEBPACK_IMPORTED_MODULE_0__["default"](result));
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            throw _context.t0;
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getOne", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(eventId) {
      var result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _this.model.findById(eventId);
          case 2:
            result = _context2.sent;
            return _context2.abrupt("return", new _utils_httpResponse__WEBPACK_IMPORTED_MODULE_0__["default"](result));
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getUserEvents", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(calendarIds) {
      var events;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _this.model.find({
              calendar: {
                $in: calendarIds
              }
            });
          case 3:
            events = _context3.sent;
            return _context3.abrupt("return", new _utils_httpResponse__WEBPACK_IMPORTED_MODULE_0__["default"](events));
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            throw _context3.t0;
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 7]]);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());
  _defineProperty(this, "update", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(data) {
      var update, result;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            update = _objectSpread({}, data);
            delete update.id;

            // Mongoose returns the modified document (or null) for .findByIdAndUpdate query with option 'new: true'
            _context4.next = 5;
            return _this.model.findByIdAndUpdate(data.id, update, {
              "new": true
            });
          case 5:
            result = _context4.sent;
            return _context4.abrupt("return", new _utils_httpResponse__WEBPACK_IMPORTED_MODULE_0__["default"](result));
          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            throw _context4.t0;
          case 12:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 9]]);
    }));
    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());
  _defineProperty(this, "delete", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
      var result, error;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _this.model.findByIdAndDelete(id);
          case 3:
            result = _context5.sent;
            if (result) {
              _context5.next = 10;
              break;
            }
            error = new Error('Event not found');
            error.statusCode = 404;
            throw error;
          case 10:
            return _context5.abrupt("return", new _utils_httpResponse__WEBPACK_IMPORTED_MODULE_0__["default"](result, {
              deleted: true
            }));
          case 11:
            _context5.next = 16;
            break;
          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            throw _context5.t0;
          case 16:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 13]]);
    }));
    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }());
  this.model = model;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventService);

/***/ }),

/***/ "./services/RefreshTokenService.js":
/*!*****************************************!*\
  !*** ./services/RefreshTokenService.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_userFacingErrors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/userFacingErrors */ "./utils/userFacingErrors.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var RefreshTokenService = /*#__PURE__*/_createClass(function RefreshTokenService(model) {
  var _this = this;
  _classCallCheck(this, RefreshTokenService);
  _defineProperty(this, "create", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(userId) {
      var expiredAt, _token, data, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            expiredAt = new Date();
            expiredAt.setSeconds(expiredAt.getSeconds() + Number("86400"));
            _token = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();
            data = {
              token: _token,
              user: userId,
              expiryDate: expiredAt.toISOString()
            };
            _context.next = 7;
            return _this.model.create(data);
          case 7:
            result = _context.sent;
            return _context.abrupt("return", result);
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            throw _context.t0;
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 11]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  _defineProperty(this, "get", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(requestToken) {
      var result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _this.model.findOne({
              token: requestToken
            });
          case 3:
            result = _context2.sent;
            return _context2.abrupt("return", result);
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            throw _context2.t0;
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  _defineProperty(this, "verify", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(token) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            if (!_this.model.verifyExpiration(token)) {
              _context3.next = 7;
              break;
            }
            _context3.next = 4;
            return _this.model.findByIdAndRemove(token.id, {
              useFindAndModify: false
            });
          case 4:
            throw new _utils_userFacingErrors__WEBPACK_IMPORTED_MODULE_1__.AuthorizationError('Refresh token expired', {
              errorCode: 'refreshToken'
            });
          case 7:
            return _context3.abrupt("return", true);
          case 8:
            _context3.next = 13;
            break;
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            throw _context3.t0;
          case 13:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 10]]);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());
  this.model = model;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RefreshTokenService);

/***/ }),

/***/ "./services/RoleService.js":
/*!*********************************!*\
  !*** ./services/RoleService.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_httpResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/httpResponse */ "./utils/httpResponse.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var RoleService = /*#__PURE__*/_createClass(function RoleService(model) {
  var _this = this;
  _classCallCheck(this, RoleService);
  _defineProperty(this, "create", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(name) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.model.create({
              name: name
            }).then(function (role) {
              console.log("Created role: ".concat(role.name));
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  _defineProperty(this, "get", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(roles) {
      var result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _this.model.find({
              name: {
                $in: roles
              }
            });
          case 2:
            result = _context2.sent;
            return _context2.abrupt("return", new _utils_httpResponse__WEBPACK_IMPORTED_MODULE_0__["default"](result));
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  this.model = model;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoleService);

/***/ }),

/***/ "./services/UserService.js":
/*!*********************************!*\
  !*** ./services/UserService.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RefreshTokenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RefreshTokenService */ "./services/RefreshTokenService.js");
/* harmony import */ var _RoleService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RoleService */ "./services/RoleService.js");
/* harmony import */ var _utils_userFacingErrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/userFacingErrors */ "./utils/userFacingErrors.js");
/* harmony import */ var _utils_httpResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/httpResponse */ "./utils/httpResponse.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var UserService = /*#__PURE__*/_createClass(function UserService(model, refreshTokenModel, roleModel) {
  var _this = this;
  _classCallCheck(this, UserService);
  _defineProperty(this, "create", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      var result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _this.model.create(data);
          case 3:
            result = _context.sent;
            return _context.abrupt("return", result);
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            throw _context.t0;
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  // Look up user, validate pw, create refresh token
  _defineProperty(this, "login", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(username, password) {
      var user, validated, accessToken, refreshToken, refreshTokenResponse;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _this.model.findOne({
              username: username
            });
          case 3:
            user = _context2.sent;
            if (user) {
              _context2.next = 6;
              break;
            }
            throw new _utils_userFacingErrors__WEBPACK_IMPORTED_MODULE_3__.NotFoundError('Invalid username', {
              errorCode: 'username'
            });
          case 6:
            _context2.next = 8;
            return user.validatePassword(password);
          case 8:
            validated = _context2.sent;
            if (validated) {
              _context2.next = 11;
              break;
            }
            throw new _utils_userFacingErrors__WEBPACK_IMPORTED_MODULE_3__.AuthorizationError('Invalid password', {
              errorCode: 'password'
            });
          case 11:
            // If password is valid, create JWT token
            accessToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({
              id: user._id
            }, "mysecretkey", {
              expiresIn: Number("3600")
            }); // Create refresh token
            _context2.next = 14;
            return _this.refreshTokenService.create(user.id);
          case 14:
            refreshToken = _context2.sent;
            refreshTokenResponse = new _utils_httpResponse__WEBPACK_IMPORTED_MODULE_4__["default"](refreshToken);
            return _context2.abrupt("return", {
              accessToken: accessToken,
              refreshToken: refreshTokenResponse.data
            });
          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](0);
            throw _context2.t0;
          case 22:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 19]]);
    }));
    return function (_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getOne", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(userId) {
      var response, httpResponse, flattenedCalendarSettings;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _this.model.findById(userId).populate(['roles', 'calendarSettings.calendar']);
          case 2:
            response = _context3.sent;
            httpResponse = new _utils_httpResponse__WEBPACK_IMPORTED_MODULE_4__["default"](response);
            flattenedCalendarSettings = httpResponse.data.calendarSettings.map(function (entry) {
              return {
                id: entry.calendar.id,
                name: entry.calendar.name,
                user_id: entry.calendar.user_id,
                userDefault: entry.userDefault,
                visibility: entry.visibility,
                color: entry.color
              };
            });
            httpResponse.data.calendarSettings = flattenedCalendarSettings;
            return _context3.abrupt("return", httpResponse.data);
          case 7:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }());
  _defineProperty(this, "refreshToken", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(requestToken) {
      var refreshToken, accessToken, response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _this.refreshTokenService.get(requestToken);
          case 3:
            refreshToken = _context4.sent;
            if (refreshToken) {
              _context4.next = 6;
              break;
            }
            throw new _utils_userFacingErrors__WEBPACK_IMPORTED_MODULE_3__.NotFoundError('Invalid request token', {
              errorCode: 'refreshToken'
            });
          case 6:
            _context4.next = 8;
            return _this.refreshTokenService.verify(refreshToken);
          case 8:
            // create new JWT token
            accessToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({
              id: refreshToken.user._id
            }, "mysecretkey", {
              expiresIn: Number("3600")
            });
            response = {
              accessToken: accessToken
            };
            return _context4.abrupt("return", new _utils_httpResponse__WEBPACK_IMPORTED_MODULE_4__["default"](response));
          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);
            throw _context4.t0;
          case 16:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 13]]);
    }));
    return function (_x5) {
      return _ref4.apply(this, arguments);
    };
  }());
  _defineProperty(this, "assignRoles", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(user, roleNames) {
      var roles;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _this.roleService.get(roleNames);
          case 3:
            roles = _context5.sent;
            if (!(!roles.data || roles.data.length < 1)) {
              _context5.next = 6;
              break;
            }
            throw new _utils_userFacingErrors__WEBPACK_IMPORTED_MODULE_3__.NotFoundError('Role(s) not found', {
              errorCode: 'role'
            });
          case 6:
            user.roles = roles.data.map(function (role) {
              return role.id;
            });
            _context5.next = 9;
            return user.save();
          case 9:
            return _context5.abrupt("return", _context5.sent);
          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            throw _context5.t0;
          case 15:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 12]]);
    }));
    return function (_x6, _x7) {
      return _ref5.apply(this, arguments);
    };
  }());
  _defineProperty(this, "update", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(userId, data) {
      var user, validated, result;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _this.model.findById(userId);
          case 3:
            user = _context6.sent;
            if (user) {
              _context6.next = 6;
              break;
            }
            throw new _utils_userFacingErrors__WEBPACK_IMPORTED_MODULE_3__.NotFoundError('No matching user found');
          case 6:
            if (!data.password) {
              _context6.next = 13;
              break;
            }
            _context6.next = 9;
            return user.validatePassword(data.password);
          case 9:
            validated = _context6.sent;
            if (validated) {
              _context6.next = 12;
              break;
            }
            throw new _utils_userFacingErrors__WEBPACK_IMPORTED_MODULE_3__.AuthorizationError('Invalid password. Please try again.', {
              errorCode: 'password'
            });
          case 12:
            user.password = data.newPassword || '';
          case 13:
            // update username
            if (data.username) {
              user.username = data.username;
            }
            _context6.next = 16;
            return user.save();
          case 16:
            result = _context6.sent;
            return _context6.abrupt("return", new _utils_httpResponse__WEBPACK_IMPORTED_MODULE_4__["default"](result));
          case 20:
            _context6.prev = 20;
            _context6.t0 = _context6["catch"](0);
            throw _context6.t0;
          case 23:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 20]]);
    }));
    return function (_x8, _x9) {
      return _ref6.apply(this, arguments);
    };
  }());
  _defineProperty(this, "updateCalendarSettings", /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(userId, data) {
      var calendarSettingsKeys, diffedData, update, user, httpResponse, flattenedCalendarSettings;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            // get calendar settings properties from model schema
            calendarSettingsKeys = Object.keys(_this.model.schema.tree.calendarSettings[0]);
            diffedData = {};
            calendarSettingsKeys.forEach(function (key) {
              diffedData[key] = data[key];
            });
            Object.keys(diffedData).forEach(function (key) {
              if (diffedData[key] === undefined) {
                delete diffedData[key];
              }
            });
            update = {};
            Object.keys(diffedData).forEach(function (key) {
              update["calendarSettings.$[i].".concat(key)] = diffedData[key];
            });
            _context7.next = 9;
            return _this.model.findOneAndUpdate({
              _id: userId
            }, {
              $set: update
            }, {
              arrayFilters: [{
                'i.calendar': data.id
              }],
              "new": true
            });
          case 9:
            user = _context7.sent;
            if (user) {
              _context7.next = 12;
              break;
            }
            throw new _utils_userFacingErrors__WEBPACK_IMPORTED_MODULE_3__.NotFoundError("Update failed with user id: ".concat(userId));
          case 12:
            httpResponse = new _utils_httpResponse__WEBPACK_IMPORTED_MODULE_4__["default"](user.calendarSettings);
            flattenedCalendarSettings = httpResponse.data.map(function (entry) {
              return {
                id: entry.calendar,
                userDefault: entry.userDefault,
                visibility: entry.visibility,
                color: entry.color
              };
            });
            httpResponse.data = flattenedCalendarSettings;
            return _context7.abrupt("return", httpResponse);
          case 18:
            _context7.prev = 18;
            _context7.t0 = _context7["catch"](0);
            throw _context7.t0;
          case 21:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 18]]);
    }));
    return function (_x10, _x11) {
      return _ref7.apply(this, arguments);
    };
  }());
  this.model = model;
  this.refreshTokenService = new _RefreshTokenService__WEBPACK_IMPORTED_MODULE_1__["default"](refreshTokenModel);
  this.roleService = new _RoleService__WEBPACK_IMPORTED_MODULE_2__["default"](roleModel);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserService);

/***/ }),

/***/ "./utils/baseErrors.js":
/*!*****************************!*\
  !*** ./utils/baseErrors.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApplicationError: () => (/* binding */ ApplicationError),
/* harmony export */   DatabaseError: () => (/* binding */ DatabaseError),
/* harmony export */   UserFacingError: () => (/* binding */ UserFacingError)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
var ApplicationError = /*#__PURE__*/function (_Error) {
  function ApplicationError(message) {
    var _this;
    _classCallCheck(this, ApplicationError);
    _this = _callSuper(this, ApplicationError, [message]);
    _this.name = _this.constructor.name;
    return _this;
  }
  _inherits(ApplicationError, _Error);
  return _createClass(ApplicationError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
var DatabaseError = /*#__PURE__*/function (_ApplicationError) {
  function DatabaseError() {
    _classCallCheck(this, DatabaseError);
    return _callSuper(this, DatabaseError, arguments);
  }
  _inherits(DatabaseError, _ApplicationError);
  return _createClass(DatabaseError);
}(ApplicationError);
var UserFacingError = /*#__PURE__*/function (_ApplicationError2) {
  function UserFacingError() {
    _classCallCheck(this, UserFacingError);
    return _callSuper(this, UserFacingError, arguments);
  }
  _inherits(UserFacingError, _ApplicationError2);
  return _createClass(UserFacingError);
}(ApplicationError);


/***/ }),

/***/ "./utils/databaseErrors.js":
/*!*********************************!*\
  !*** ./utils/databaseErrors.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DuplicateKeyError: () => (/* binding */ DuplicateKeyError)
/* harmony export */ });
/* harmony import */ var _baseErrors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseErrors */ "./utils/baseErrors.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var DuplicateKeyError = /*#__PURE__*/function (_DatabaseError) {
  function DuplicateKeyError(message) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, DuplicateKeyError);
    _this = _callSuper(this, DuplicateKeyError, [message]);
    for (var _i = 0, _Object$entries = Object.entries(options); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      _this[key] = value;
    }
    return _this;
  }
  _inherits(DuplicateKeyError, _DatabaseError);
  return _createClass(DuplicateKeyError, [{
    key: "statusCode",
    get: function get() {
      return 409;
    }
  }, {
    key: "mongoErrorCode",
    get: function get() {
      return 11000;
    }
  }]);
}(_baseErrors__WEBPACK_IMPORTED_MODULE_0__.DatabaseError);


/***/ }),

/***/ "./utils/httpResponse.js":
/*!*******************************!*\
  !*** ./utils/httpResponse.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var defaultExclusionsFromResponse = ['__v', 'password'];
var HttpResponse = /*#__PURE__*/_createClass(function HttpResponse(_data) {
  var _this = this;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    statusCode: 200,
    deleted: null
  };
  _classCallCheck(this, HttpResponse);
  _defineProperty(this, "filterData", function (data) {
    if (Array.isArray(data)) {
      data.map(function (x, index) {
        Object.keys(x).forEach(function (key) {
          if (defaultExclusionsFromResponse.includes(key)) {
            delete data[index][key];
          }
          if (key === '_id') {
            data[index]['id'] = data[index][key];
            delete data[index][key];
          }
          // handle nested properties recursively
          if (key === 'calendarSettings' || key === 'calendar' || key === 'roles') {
            data[index][key] = _this.filterData(data[index][key]);
          }
        });
      });
    } else if (_typeof(data) === 'object') {
      Object.keys(data).forEach(function (key) {
        if (defaultExclusionsFromResponse.includes(key)) {
          delete data[key];
        }
        if (key === '_id') {
          data['id'] = data[key];
          delete data[key];
        }
        // handle nested properties recursively
        if (key === 'calendarSettings' || key === 'calendar' || key === 'roles') {
          data[key] = _this.filterData(data[key]);
        }
      });
    }
    return data;
  });
  this.statusCode = options.statusCode || 200;
  var filteredData = _data;

  // handles JS arrays or objects
  if (_typeof(filteredData) === 'object') {
    filteredData = this.filterData(JSON.parse(JSON.stringify(filteredData)));
  }
  if (options.deleted) {
    this.deleted = options.deleted;
  }
  if (Array.isArray(filteredData)) {
    this.data = _toConsumableArray(filteredData);
  } else if (_typeof(filteredData) === 'object') {
    this.data = _objectSpread({}, filteredData);
  } else {
    this.data = _data;
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HttpResponse);

/***/ }),

/***/ "./utils/userFacingErrors.js":
/*!***********************************!*\
  !*** ./utils/userFacingErrors.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthorizationError: () => (/* binding */ AuthorizationError),
/* harmony export */   BadRequestError: () => (/* binding */ BadRequestError),
/* harmony export */   NotFoundError: () => (/* binding */ NotFoundError)
/* harmony export */ });
/* harmony import */ var _baseErrors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseErrors */ "./utils/baseErrors.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var BadRequestError = /*#__PURE__*/function (_UserFacingError) {
  function BadRequestError(message) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, BadRequestError);
    _this = _callSuper(this, BadRequestError, [message]);
    for (var _i = 0, _Object$entries = Object.entries(options); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      _this[key] = value;
    }
    return _this;
  }
  _inherits(BadRequestError, _UserFacingError);
  return _createClass(BadRequestError, [{
    key: "statusCode",
    get: function get() {
      return 400;
    }
  }]);
}(_baseErrors__WEBPACK_IMPORTED_MODULE_0__.UserFacingError);
var NotFoundError = /*#__PURE__*/function (_UserFacingError2) {
  function NotFoundError(message) {
    var _this2;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, NotFoundError);
    _this2 = _callSuper(this, NotFoundError, [message]);
    for (var _i2 = 0, _Object$entries2 = Object.entries(options); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        key = _Object$entries2$_i[0],
        value = _Object$entries2$_i[1];
      _this2[key] = value;
    }
    return _this2;
  }
  _inherits(NotFoundError, _UserFacingError2);
  return _createClass(NotFoundError, [{
    key: "statusCode",
    get: function get() {
      return 404;
    }
  }]);
}(_baseErrors__WEBPACK_IMPORTED_MODULE_0__.UserFacingError);
var AuthorizationError = /*#__PURE__*/function (_UserFacingError3) {
  function AuthorizationError(message) {
    var _this3;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, AuthorizationError);
    _this3 = _callSuper(this, AuthorizationError, [message]);
    for (var _i3 = 0, _Object$entries3 = Object.entries(options); _i3 < _Object$entries3.length; _i3++) {
      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
        key = _Object$entries3$_i[0],
        value = _Object$entries3$_i[1];
      _this3[key] = value;
    }
    return _this3;
  }
  _inherits(AuthorizationError, _UserFacingError3);
  return _createClass(AuthorizationError, [{
    key: "statusCode",
    get: function get() {
      return 401;
    }
  }]);
}(_baseErrors__WEBPACK_IMPORTED_MODULE_0__.UserFacingError);


/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("b9edb11477ead8bd89ef")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err1) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err1,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err1);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			})['catch'](function(err) { if(err.code !== 'MODULE_NOT_FOUND') throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./server-dev.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0EsbUJBQW1CLHdDQUF3QztXQUMzRDtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsUUFBUTtXQUNSLFFBQVE7V0FDUjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxTQUFTO1dBQ1Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsT0FBTztXQUNQO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxRQUFRO1dBQ1I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUUsSUFBSTtXQUNOO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxFQUFFLDJCQUEyQixnREFBZ0Q7V0FDN0U7Ozs7O1VFMWRBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vY29uZmlnL2FwcENvbmZpZy5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9jb250cm9sbGVycy9DYWxlbmRhckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vY29udHJvbGxlcnMvRXZlbnRDb250cm9sbGVyLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL2RiL2Nvbm5lY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vbWlkZGxld2FyZS9hdXRoSnd0LmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL21pZGRsZXdhcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vbWlkZGxld2FyZS92ZXJpZnlSZWdpc3RyYXRpb24uanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vbW9kZWxzL0NhbGVuZGFyLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL21vZGVscy9FdmVudC5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9tb2RlbHMvUmVmcmVzaFRva2VuLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL21vZGVscy9Sb2xlLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL21vZGVscy9Vc2VyLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL21vZGVscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9yb3V0ZXJzL2NhbGVuZGFyUm91dGVyLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3JvdXRlcnMvZXZlbnRSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vcm91dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9yb3V0ZXJzL3VzZXJSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vc2VydmVyLWRldi5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9zZXJ2aWNlcy9DYWxlbmRhclNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vc2VydmljZXMvRXZlbnRTZXJ2aWNlLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3NlcnZpY2VzL1JlZnJlc2hUb2tlblNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vc2VydmljZXMvUm9sZVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vc2VydmljZXMvVXNlclNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vdXRpbHMvYmFzZUVycm9ycy5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi91dGlscy9kYXRhYmFzZUVycm9ycy5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi91dGlscy9odHRwUmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vdXRpbHMvdXNlckZhY2luZ0Vycm9ycy5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvZXh0ZXJuYWwgY29tbW9uanMgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC9leHRlcm5hbCBjb21tb25qcyBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC9leHRlcm5hbCBjb21tb25qcyBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL2V4dGVybmFsIGNvbW1vbmpzIFwidXVpZFwiIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IHVwZGF0ZSBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9ydW50aW1lL2dldCB1cGRhdGUgbWFuaWZlc3QgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9ydW50aW1lL2hvdCBtb2R1bGUgcmVwbGFjZW1lbnQiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svcnVudGltZS9yZXF1aXJlIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHVzZXJDb2xvcnMgPSBbJzJFODZDMScsICcwMEE2RDAnLCAnMDBDM0M3JywgJzJEREJBQicsICc5REVFODcnXTtcblxuY29uc3Qgc3lzdGVtQ29sb3JzID0gWyczNDQ5NUUnLCAnNEU1OTc2JywgJzZENjk4RCcsICc4Rjc4OUYnLCAnQjQ4OEFFJ107XG5cbmNvbnN0IGJhc2VVUkwgPSAnL2NhbGVuZGFyYXBwJztcblxuY29uc3QgZGVmYXVsdFZpZXcgPSAnbW9udGgnO1xuXG5leHBvcnQgeyB1c2VyQ29sb3JzLCBzeXN0ZW1Db2xvcnMsIGJhc2VVUkwsIGRlZmF1bHRWaWV3IH07XG4iLCJpbXBvcnQgQ2FsZW5kYXJTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL0NhbGVuZGFyU2VydmljZSc7XG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvVXNlclNlcnZpY2UnO1xuaW1wb3J0IGRiIGZyb20gJy4uL21vZGVscyc7XG5cbmNvbnN0IGNhbGVuZGFyU2VydmljZSA9IG5ldyBDYWxlbmRhclNlcnZpY2UoZGIuQ2FsZW5kYXIsIGRiLlVzZXIpO1xuY29uc3QgdXNlclNlcnZpY2UgPSBuZXcgVXNlclNlcnZpY2UoZGIuVXNlcik7XG5cbmNsYXNzIENhbGVuZGFyQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHNlcnZpY2UpIHtcbiAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xuICAgIHRoaXMudXNlclNlcnZpY2UgPSB1c2VyU2VydmljZTtcbiAgfVxuXG4gIGNyZWF0ZSA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAuLi5yZXEuYm9keSxcbiAgICAgICAgdXNlcl9pZDogcmVxLmF1dGgudXNlclxuICAgICAgfTtcblxuICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZShkYXRhKTtcblxuICAgICAgY29uc3QgdXNlclJlc3BvbnNlID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5nZXRPbmUocmVxLmF1dGgudXNlcik7XG5cbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh1c2VyUmVzcG9uc2UuY2FsZW5kYXJTZXR0aW5ncyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZSA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS51cGRhdGUocmVxLnBhcmFtcy5jYWxlbmRhcklkLCByZXEuYm9keSk7XG5cbiAgICAgIHJldHVybiByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1c0NvZGUpLnNlbmQocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZVNldHRpbmdzID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS51cGRhdGVDYWxlbmRhclNldHRpbmdzKHJlcS5hdXRoLnVzZXIsIHJlcS5ib2R5KTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzQ29kZSkuc2VuZChyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG5cbiAgZGVsZXRlID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXJSZXNwb25zZSA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZ2V0T25lKHJlcS5hdXRoLnVzZXIpO1xuXG4gICAgICBjb25zdCB0YXJnZXRDYWxlbmRhclNldHRpbmdzID0gdXNlclJlc3BvbnNlLmNhbGVuZGFyU2V0dGluZ3MuZmlsdGVyKFxuICAgICAgICAoZW50cnkpID0+IGVudHJ5LmlkID09PSByZXEucGFyYW1zLmNhbGVuZGFySWRcbiAgICAgICk7XG5cbiAgICAgIGlmICh0YXJnZXRDYWxlbmRhclNldHRpbmdzLnVzZXJEZWZhdWx0ID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAuc3RhdHVzKDQwMylcbiAgICAgICAgICAuc2VuZCh7IG1lc3NhZ2U6ICdDYW5ub3QgZGVsZXRlIGRlZmF1bHQgY2FsZW5kYXIuIFBsZWFzZSB0cnkgYWdhaW4uJywgZXJyb3JDb2RlOiAnY2FsZW5kYXInIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5kZWxldGUocmVxLnBhcmFtcy5jYWxlbmRhcklkKTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzQ29kZSkuc2VuZChyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYWxlbmRhckNvbnRyb2xsZXIoY2FsZW5kYXJTZXJ2aWNlLCB1c2VyU2VydmljZSk7XG4iLCJpbXBvcnQgRXZlbnRTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL0V2ZW50U2VydmljZSc7XG5pbXBvcnQgQ2FsZW5kYXJTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL0NhbGVuZGFyU2VydmljZSc7XG5pbXBvcnQgZGIgZnJvbSAnLi4vbW9kZWxzJztcblxuY29uc3QgZXZlbnRTZXJ2aWNlID0gbmV3IEV2ZW50U2VydmljZShkYi5FdmVudCk7XG5jb25zdCBjYWxlbmRhclNlcnZpY2UgPSBuZXcgQ2FsZW5kYXJTZXJ2aWNlKGRiLkNhbGVuZGFyKTtcblxuY2xhc3MgRXZlbnRDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3Ioc2VydmljZSwgY2FsZW5kYXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcbiAgICB0aGlzLmNhbGVuZGFyU2VydmljZSA9IGNhbGVuZGFyU2VydmljZTtcbiAgfVxuXG4gIGNyZWF0ZSA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGUocmVxLmJvZHkpO1xuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXNDb2RlKS5zZW5kKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgIH1cbiAgfTtcblxuICBnZXRVc2VyRXZlbnRzID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhbGVuZGFycyA9IGF3YWl0IHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmdldFVzZXJDYWxlbmRhcnMocmVxLmF1dGgudXNlcik7XG5cbiAgICAgIGlmICghY2FsZW5kYXJzIHx8IGNhbGVuZGFycy5sZW5ndGggPCAxKSB7XG4gICAgICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKCdObyBtYXRjaGluZyBjYWxlbmRhcnMgZm91bmQnLCB7IGVycm9yQ29kZTogJ2NhbGVuZGFyJyB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FsZW5kYXJJZHMgPSBjYWxlbmRhcnMuZGF0YS5tYXAoKGNhbGVuZGFyKSA9PiBjYWxlbmRhci5pZCk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldFVzZXJFdmVudHMoY2FsZW5kYXJJZHMpO1xuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXNDb2RlKS5zZW5kKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlKHJlcS5ib2R5KTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzQ29kZSkuc2VuZChyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG5cbiAgZGVsZXRlID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmRlbGV0ZShyZXEucGFyYW1zLmV2ZW50SWQpO1xuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXNDb2RlKS5zZW5kKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEV2ZW50Q29udHJvbGxlcihldmVudFNlcnZpY2UsIGNhbGVuZGFyU2VydmljZSk7XG4iLCJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgZGIgZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCBVc2VyU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9Vc2VyU2VydmljZSc7XG5pbXBvcnQgYXV0aEp3dCBmcm9tICcuLi9taWRkbGV3YXJlL2F1dGhKd3QnO1xuXG5jb25zdCB1c2VyU2VydmljZSA9IG5ldyBVc2VyU2VydmljZShkYi5Vc2VyLCBkYi5SZWZyZXNoVG9rZW4sIGRiLlJvbGUsIGRiLkNhbGVuZGFyLCBkYi5FdmVudCk7XG5cbmNsYXNzIFVzZXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3Ioc2VydmljZSkge1xuICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG4gIH1cblxuICAvLyBjcmVhdGUgdXNlciwgYXNzaWduIHJvbGVzXG4gIHJlZ2lzdGVyID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLnNlcnZpY2UuY3JlYXRlKHJlcS5ib2R5KTtcblxuICAgICAgY29uc3Qgcm9sZU5hbWVzID0gcmVxLmJvZHk/LnJvbGVzID8/IFsndXNlciddO1xuXG4gICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuYXNzaWduUm9sZXModXNlciwgcm9sZU5hbWVzKTtcblxuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG5cbiAgbG9naW4gPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbG9naW5SZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5sb2dpbihyZXEuYm9keS51c2VybmFtZSwgcmVxLmJvZHkucGFzc3dvcmQpO1xuXG4gICAgICBpZiAoIWxvZ2luUmVzcG9uc2UuYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKHsgbWVzc2FnZTogJ05vIHRva2VuIGZvdW5kIScsIGVycm9yQ29kZTogJ3VzZXInIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBEZWNvZGUgdG9rZW4gYW5kIGxvb2t1cCBmdWxsIHVzZXIgZG9jXG4gICAgICBqd3QudmVyaWZ5KGxvZ2luUmVzcG9uc2UuYWNjZXNzVG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVRfS0VZLCBhc3luYyAoZSwgZGVjb2RlZCkgPT4ge1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgIHJldHVybiBhdXRoSnd0LmNhdGNoVG9rZW5FcnJvcihlLCByZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlclJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldE9uZShkZWNvZGVkLmlkKTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHtcbiAgICAgICAgICAuLi5sb2dpblJlc3BvbnNlLFxuICAgICAgICAgIC4uLnVzZXJSZXNwb25zZVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChyZXNwb25zZSk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG5cbiAgcmVmcmVzaFRva2VuID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgY29uc3QgeyByZWZyZXNoVG9rZW46IHJlcXVlc3RUb2tlbiB9ID0gcmVxLmJvZHk7XG5cbiAgICBpZiAoIXJlcXVlc3RUb2tlbikge1xuICAgICAgLy8gUmVxdWVzdCB0b2tlbiBpcyBtaXNzaW5nXG4gICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvbG9naW4nKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UucmVmcmVzaFRva2VuKHJlcXVlc3RUb2tlbik7XG5cbiAgICAgIHJldHVybiByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1c0NvZGUpLnNlbmQocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZSA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS51cGRhdGUocmVxLmF1dGgudXNlciwgcmVxLmJvZHkpO1xuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXNDb2RlKS5zZW5kKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJDb250cm9sbGVyKHVzZXJTZXJ2aWNlKTtcbiIsImltcG9ydCBkYiBmcm9tICdtb2RlbHMnO1xuaW1wb3J0IFJvbGVTZXJ2aWNlIGZyb20gJ3NlcnZpY2VzL1JvbGVTZXJ2aWNlJztcbmltcG9ydCBDYWxlbmRhclNlcnZpY2UgZnJvbSAnc2VydmljZXMvQ2FsZW5kYXJTZXJ2aWNlJztcblxuY29uc3QgTU9OR09fSE9TVE5BTUUgPSBwcm9jZXNzLmVudi5NT05HT19IT1NUTkFNRTtcbmNvbnN0IE1PTkdPX1BPUlQgPSBwcm9jZXNzLmVudi5NT05HT19QT1JUO1xuY29uc3QgTU9OR09fREIgPSBwcm9jZXNzLmVudi5NT05HT19EQjtcbmNvbnN0IE1PTkdPX1VTRVJOQU1FID0gcHJvY2Vzcy5lbnYuTU9OR09fVVNFUk5BTUU7XG5jb25zdCBNT05HT19QQVNTV09SRCA9IHByb2Nlc3MuZW52Lk1PTkdPX1BBU1NXT1JEO1xuY29uc3QgTU9OR09fVVJMID0gYG1vbmdvZGI6Ly8ke01PTkdPX1VTRVJOQU1FfToke01PTkdPX1BBU1NXT1JEfUAke01PTkdPX0hPU1ROQU1FfToke01PTkdPX1BPUlR9LyR7TU9OR09fREJ9P2F1dGhTb3VyY2U9YWRtaW5gO1xuXG5jb25zdCBtb25nb29zZSA9IGRiLm1vbmdvb3NlO1xuY29uc3QgUm9sZSA9IGRiLlJvbGU7XG5jb25zdCBDYWxlbmRhciA9IGRiLkNhbGVuZGFyO1xuXG5jb25zdCByb2xlU2VydmljZSA9IG5ldyBSb2xlU2VydmljZShSb2xlKTtcbmNvbnN0IGNhbGVuZGFyU2VydmljZSA9IG5ldyBDYWxlbmRhclNlcnZpY2UoQ2FsZW5kYXIpO1xuXG5jb25zdCBpbml0aWFsaXplUm9sZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNvdW50ID0gYXdhaXQgUm9sZS5jb3VudERvY3VtZW50cyh7fSk7XG4gIGlmIChjb3VudCA9PT0gMCkge1xuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmNyZWF0ZSgndXNlcicpO1xuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmNyZWF0ZSgnbW9kZXJhdG9yJyk7XG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuY3JlYXRlKCdhZG1pbicpO1xuICAgIGNvbnNvbGUubG9nKCdJbml0aWFsaXplZCByb2xlcy4nKTtcbiAgfVxufTtcblxuY29uc3QgaW5pdGlhbGl6ZUNhbGVuZGFycyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY291bnQgPSBhd2FpdCBDYWxlbmRhci5jb3VudERvY3VtZW50cyh7IHVzZXJfaWQ6ICdzeXN0ZW0nLCBuYW1lOiAnVVMgSG9saWRheXMnIH0pO1xuICBpZiAoY291bnQgPT09IDApIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgbmFtZTogJ1VTIEhvbGlkYXlzJyxcbiAgICAgIHVzZXJfaWQ6ICdzeXN0ZW0nXG4gICAgfTtcblxuICAgIGF3YWl0IGNhbGVuZGFyU2VydmljZS5jcmVhdGUoZGF0YSk7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgVVMgSG9saWRheXMgY2FsZW5kYXIuJyk7XG4gIH1cbn07XG5cbm1vbmdvb3NlXG4gIC5jb25uZWN0KE1PTkdPX1VSTClcbiAgLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gTW9uZ29EQicpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSByb2xlc1xuICAgIGF3YWl0IGluaXRpYWxpemVSb2xlcygpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBzeXN0ZW0gY2FsZW5kYXJzXG4gICAgYXdhaXQgaW5pdGlhbGl6ZUNhbGVuZGFycygpO1xuICB9KVxuICAuY2F0Y2goKGUpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKCdDb25uZWN0aW9uIGVycm9yJywgZSk7XG4gICAgcHJvY2Vzcy5leGl0KCk7XG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBkYjtcbiIsImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCBkYiBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IENhbGVuZGFyU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9DYWxlbmRhclNlcnZpY2UnO1xuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL1VzZXJTZXJ2aWNlJztcbmltcG9ydCBFdmVudFNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvRXZlbnRTZXJ2aWNlJztcblxuY29uc3QgVXNlciA9IGRiLlVzZXI7XG5jb25zdCBSZWZyZXNoVG9rZW4gPSBkYi5SZWZyZXNoVG9rZW47XG5jb25zdCBSb2xlID0gZGIuUm9sZTtcbmNvbnN0IENhbGVuZGFyID0gZGIuQ2FsZW5kYXI7XG5jb25zdCBFdmVudCA9IGRiLkV2ZW50O1xuY29uc3QgeyBUb2tlbkV4cGlyZWRFcnJvciB9ID0gand0O1xuXG5jb25zdCBjYWxlbmRhclNlcnZpY2UgPSBuZXcgQ2FsZW5kYXJTZXJ2aWNlKENhbGVuZGFyKTtcbmNvbnN0IHVzZXJTZXJ2aWNlID0gbmV3IFVzZXJTZXJ2aWNlKFVzZXIsIFJlZnJlc2hUb2tlbiwgUm9sZSk7XG5jb25zdCBldmVudFNlcnZpY2UgPSBuZXcgRXZlbnRTZXJ2aWNlKEV2ZW50KTtcblxuY29uc3QgY2F0Y2hUb2tlbkVycm9yID0gKGUsIHJlcykgPT4ge1xuICBpZiAoZSBpbnN0YW5jZW9mIFRva2VuRXhwaXJlZEVycm9yKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCEgQWNjZXNzIFRva2VuIHdhcyBleHBpcmVkIScsIGVycm9yQ29kZTogJ2FjY2Vzc3Rva2VuJyB9KTtcbiAgfVxuXG4gIHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkIScsIGVycm9yQ29kZTogJ2FjY2Vzc3Rva2VuJyB9KTtcbn07XG5cbmNvbnN0IHZlcmlmeVRva2VuID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnNbJ3gtYWNjZXNzLXRva2VuJ107XG5cbiAgaWYgKCF0b2tlbikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCh7IG1lc3NhZ2U6ICdObyB0b2tlbiBwcm92aWRlZCEnLCBlcnJvckNvZGU6ICdhY2Nlc3N0b2tlbicgfSk7XG4gIH1cblxuICAvLyBEZWNvZGUgdG9rZW4gYW5kIGF0dGFjaCB1c2VyIGluZm8gdG8gcmVxdWVzdFxuICBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUX0tFWSwgKGUsIGRlY29kZWQpID0+IHtcbiAgICBpZiAoZSkge1xuICAgICAgcmV0dXJuIGNhdGNoVG9rZW5FcnJvcihlLCByZXMpO1xuICAgIH1cblxuICAgIHJlcS5hdXRoID0ge1xuICAgICAgdXNlcjogZGVjb2RlZC5pZFxuICAgIH07XG5cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9KTtcbn07XG5cbi8vIENoZWNrcyBhdXRoZWQgdXNlciBhZ2FpbnN0IHJlcXVlc3QgcGFyYW1zIGZvciByZXNvdXJjZSBhdXRob3JpemF0aW9uXG4vLyBDYW4gYmUgcmVwbGFjZWQgd2l0aCBhbiBhY2Nlc3MgY29udHJvbCBsaXN0IG9yIHNpbWlsYXJcbmNvbnN0IHZlcmlmeVVSSUF1dGggPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgdXJsID0gcmVxLmJhc2VVcmwgKyByZXEucm91dGUucGF0aDtcblxuICBzd2l0Y2ggKHVybCkge1xuICAgIGNhc2UgYCR7cmVxLmJhc2VVcmx9Lzp1c2VySWRgOiB7XG4gICAgICBpZiAocmVxLmF1dGgudXNlciAhPT0gcmVxLnBhcmFtcy51c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKHsgbWVzc2FnZTogJ1JlcXVpcmVzIGFkbWluIHJvbGUhJywgZXJyb3JDb2RlOiAncm9sZScgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH1cblxuICAgIGNhc2UgYCR7cmVxLmJhc2VVcmx9LzpjYWxlbmRhcklkYDoge1xuICAgICAgLy8gZmV0Y2ggdGFyZ2V0IGNhbGVuZGFyXG4gICAgICBjb25zdCBjYWxlbmRhciA9IGF3YWl0IGNhbGVuZGFyU2VydmljZS5nZXRPbmUocmVxLnBhcmFtcy5jYWxlbmRhcklkKTtcblxuICAgICAgaWYgKHJlcS5hdXRoLnVzZXIgIT09IGNhbGVuZGFyLmRhdGEudXNlcl9pZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnUmVxdWlyZXMgYWRtaW4gcm9sZSEnLCBlcnJvckNvZGU6ICdyb2xlJyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfVxuXG4gICAgY2FzZSBgJHtyZXEuYmFzZVVybH0vOmNhbGVuZGFySWQvc2V0dGluZ3NgOiB7XG4gICAgICAvLyBmZXRjaCB0YXJnZXQgdXNlclxuICAgICAgLy8gTW9uZ29vc2UgcmV0dXJucyBudWxsIGZvciAuZmluZE9uZSBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe1xuICAgICAgICBfaWQ6IHJlcS5hdXRoLnVzZXIsXG4gICAgICAgICdjYWxlbmRhclNldHRpbmdzLmNhbGVuZGFyJzoge1xuICAgICAgICAgICRlcTogcmVxLnBhcmFtcy5jYWxlbmRhcklkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKHsgbWVzc2FnZTogJ1JlcXVpcmVzIGFkbWluIHJvbGUhJywgZXJyb3JDb2RlOiAncm9sZScgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH1cblxuICAgIGNhc2UgYCR7cmVxLmJhc2VVcmx9LzpldmVudElkYDoge1xuICAgICAgLy8gZmV0Y2ggdGFyZ2V0IGV2ZW50XG4gICAgICBjb25zdCBldmVudCA9IGF3YWl0IGV2ZW50U2VydmljZS5nZXRPbmUocmVxLnBhcmFtcy5ldmVudElkKTtcbiAgICAgIC8vIGZldGNoIGNvcnJlc3BvbmRpbmcgY2FsZW5kYXJcbiAgICAgIGNvbnN0IGNhbGVuZGFyID0gYXdhaXQgY2FsZW5kYXJTZXJ2aWNlLmdldE9uZShldmVudC5kYXRhLmNhbGVuZGFyKTtcblxuICAgICAgaWYgKHJlcS5hdXRoLnVzZXIgIT09IGNhbGVuZGFyLmRhdGEudXNlcl9pZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnUmVxdWlyZXMgYWRtaW4gcm9sZSEnLCBlcnJvckNvZGU6ICdyb2xlJyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCh7IG1lc3NhZ2U6ICdSZXF1aXJlcyBhZG1pbiByb2xlIScsIGVycm9yQ29kZTogJ3JvbGUnIH0pO1xuICB9XG59O1xuXG5jb25zdCBpc0FkbWluID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIFVzZXIuZmluZEJ5SWQocmVxLmF1dGgudXNlcikuZXhlYygoZSwgdXNlcikgPT4ge1xuICAgIGlmIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG5cbiAgICAvLyBNb25nb29zZSByZXR1cm5zIFtdIGZvciAuZmluZCBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcbiAgICBSb2xlLmZpbmQoXG4gICAgICB7XG4gICAgICAgIGlkOiB7ICRpbjogdXNlci5yb2xlcyB9XG4gICAgICB9LFxuICAgICAgKGUsIHJvbGVzKSA9PiB7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHJvbGVzW2ldLm5hbWUgPT09ICdhZG1pbicpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKHsgbWVzc2FnZTogJ1JlcXVpcmUgQWRtaW4gUm9sZSEnLCBlcnJvckNvZGU6ICdyb2xlJyB9KTtcbiAgICAgIH1cbiAgICApO1xuICB9KTtcbn07XG5cbmNvbnN0IGlzTW9kZXJhdG9yID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIFVzZXIuZmluZEJ5SWQocmVxLmF1dGgudXNlcikuZXhlYygoZSwgdXNlcikgPT4ge1xuICAgIGlmIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG5cbiAgICAvLyBNb25nb29zZSByZXR1cm5zIFtdIGZvciAuZmluZCBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcbiAgICBSb2xlLmZpbmQoXG4gICAgICB7XG4gICAgICAgIGlkOiB7ICRpbjogdXNlci5yb2xlcyB9XG4gICAgICB9LFxuICAgICAgKGUsIHJvbGVzKSA9PiB7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHJvbGVzW2ldLm5hbWUgPT09ICdtb2RlcmF0b3InKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCh7IG1lc3NhZ2U6ICdSZXF1aXJlIE1vZGVyYXRvciBSb2xlIScsIGVycm9yQ29kZTogJ3JvbGUnIH0pO1xuICAgICAgfVxuICAgICk7XG4gIH0pO1xufTtcblxuY29uc3QgYXV0aEp3dCA9IHtcbiAgdmVyaWZ5VG9rZW4sXG4gIHZlcmlmeVVSSUF1dGgsXG4gIGlzQWRtaW4sXG4gIGlzTW9kZXJhdG9yXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoSnd0O1xuIiwiaW1wb3J0IGF1dGhKd3QgZnJvbSAnLi9hdXRoSnd0JztcbmltcG9ydCB2ZXJpZnlSZWdpc3RyYXRpb24gZnJvbSAnLi92ZXJpZnlSZWdpc3RyYXRpb24nO1xuXG5leHBvcnQgeyBhdXRoSnd0LCB2ZXJpZnlSZWdpc3RyYXRpb24gfTtcbiIsImltcG9ydCBkYiBmcm9tICcuLi9tb2RlbHMnO1xuXG5pbXBvcnQgeyBCYWRSZXF1ZXN0RXJyb3IgfSBmcm9tICcuLi91dGlscy91c2VyRmFjaW5nRXJyb3JzJztcblxuY29uc3QgY2hlY2tEdXBsaWNhdGVVc2VybmFtZSA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGRiLlVzZXIuZmluZEJ5VXNlcm5hbWUocmVxLmJvZHkudXNlcm5hbWUpLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRocm93IG5ldyBCYWRSZXF1ZXN0RXJyb3IoJ1VzZXJuYW1lIGlzIGFscmVhZHkgaW4gdXNlJywgeyBlcnJvckNvZGU6ICd1c2VybmFtZScgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG5leHQoZSk7XG4gIH1cbn07XG5cbmNvbnN0IGNoZWNrUm9sZXNFeGlzdCA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAvLyBBdHRhY2hpbmcgcm9sZXMgdG8gcmVnaXN0cmF0aW9uIHJlcXVlc3QgaXMgb3B0aW9uYWxcbiAgaWYgKCFyZXEuYm9keS5yb2xlcyB8fCByZXEuYm9keS5yb2xlcz8ubGVuZ3RoIDwgMSkgcmV0dXJuIG5leHQoKTtcblxuICAvLyBDaGVjayBhdHRhY2hlZCByb2xlc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcS5ib2R5LnJvbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFyb2xlcy5pbmNsdWRlcyhyZXEuYm9keS5yb2xlc1tpXSkpIHtcbiAgICAgIHRocm93IG5ldyBCYWRSZXF1ZXN0RXJyb3IoYFJvbGUgJHtyZXEuYm9keS5yb2xlc1tpXX0gZG9lcyBub3QgZXhpc3QhYCwgeyBlcnJvckNvZGU6ICdyb2xlJyB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV4dCgpO1xufTtcblxuY29uc3QgdmVyaWZ5UmVnaXN0cmF0aW9uID0ge1xuICBjaGVja0R1cGxpY2F0ZVVzZXJuYW1lLFxuICBjaGVja1JvbGVzRXhpc3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZlcmlmeVJlZ2lzdHJhdGlvbjtcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xuaW1wb3J0IHsgRHVwbGljYXRlS2V5RXJyb3IgfSBmcm9tICcuLi91dGlscy9kYXRhYmFzZUVycm9ycyc7XG5pbXBvcnQgeyB1c2VyQ29sb3JzLCBzeXN0ZW1Db2xvcnMgfSBmcm9tICdjb25maWcvYXBwQ29uZmlnJztcblxuY29uc3Qgc2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIG5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfSxcbiAgdXNlcl9pZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBkZWZhdWx0OiAnc3lzdGVtJ1xuICB9XG59KTtcblxuLy8gcHJlc2VydmluZyBpc05ldyBzdGF0ZSBmb3IgJ3Bvc3QnIG1pZGRsZXdhcmVcbnNjaGVtYS5wcmUoJ3NhdmUnLCBmdW5jdGlvbiAobmV4dCkge1xuICB0aGlzLndhc05ldyA9IHRoaXMuaXNOZXc7XG4gIG5leHQoKTtcbn0pO1xuXG4vLyBzY2hlbWEgbWlkZGxld2FyZSB0byBhcHBseSBhZnRlciBzYXZpbmdcbmNvbnN0IGhhbmRsZUUxMTAwMCA9IChlcnJvciwgcmVzLCBuZXh0KSA9PiB7XG4gIGlmIChlcnJvci5uYW1lID09PSAnTW9uZ29FcnJvcicgJiYgZXJyb3IuY29kZSA9PT0gMTEwMDApIHtcbiAgICB0aHJvdyBuZXcgRHVwbGljYXRlS2V5RXJyb3IoJ1RoZXJlIHdhcyBhIGNvbmZsaWN0IHdpdGggYW4gZXhpc3RpbmcgZW50cnkuIFBsZWFzZSB0cnkgYWdhaW4uJywge1xuICAgICAgZXJyb3JDb2RlOiAnY2FsZW5kYXInXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfVxufTtcblxuc2NoZW1hLnBvc3QoJ3NhdmUnLCBoYW5kbGVFMTEwMDApO1xuc2NoZW1hLnBvc3QoJ2ZpbmRPbmVBbmRVcGRhdGUnLCBoYW5kbGVFMTEwMDApO1xuXG4vLyBFbWJlZCBjYWxlbmRhciBzZXR0aW5ncyBpbiBjb3JyZXNwb25kaW5nIHVzZXIgZG9jKHMpXG5zY2hlbWEucG9zdCgnc2F2ZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuaWQgJiYgdGhpcy53YXNOZXcpIHtcbiAgICB0cnkge1xuICAgICAgLy8gc3lzdGVtIGNhbGVuZGFyIGNyZWF0ZWRcbiAgICAgIGlmICh0aGlzLnVzZXJfaWQgPT09ICdzeXN0ZW0nKSB7XG4gICAgICAgIC8vIGNvdW50IHN5c3RlbSBjYWxzXG4gICAgICAgIGNvbnN0IHN5c3RlbUNhbGVuZGFyc0NvdW50ID0gYXdhaXQgQ2FsZW5kYXIuY291bnREb2N1bWVudHMoeyB1c2VyX2lkOiAnc3lzdGVtJyB9KTtcblxuICAgICAgICAvLyBwcmVwYXJlIGNhbGVuZGFyIHNldHRpbmdzIG9iamVjdFxuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICAgICBjYWxlbmRhcjogdGhpcy5pZCxcbiAgICAgICAgICB1c2VyRGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgdmlzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICBjb2xvcjogYCMke3N5c3RlbUNvbG9yc1soc3lzdGVtQ2FsZW5kYXJzQ291bnQgLSAxKSAlIHN5c3RlbUNvbG9ycy5sZW5ndGhdfWBcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBlbWJlZCBpbiBhbGwgdXNlciBkb2NzXG4gICAgICAgIGF3YWl0IFVzZXIudXBkYXRlTWFueSh7fSwgeyAkcHVzaDogeyBjYWxlbmRhclNldHRpbmdzOiBzZXR0aW5ncyB9IH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdXNlciBjYWxlbmRhciBjcmVhdGVkXG5cbiAgICAgICAgLy8gY291bnQgdXNlciBjYWxlbmRhcnNcbiAgICAgICAgY29uc3QgdXNlckNhbGVuZGFyc0NvdW50ID0gYXdhaXQgQ2FsZW5kYXIuY291bnREb2N1bWVudHMoeyB1c2VyX2lkOiB0aGlzLnVzZXJfaWQgfSk7XG5cbiAgICAgICAgaWYgKHVzZXJDYWxlbmRhcnNDb3VudCA8IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRGF0YWJhc2VFcnJvcignTWF0Y2hpbmcgY2FsZW5kYXIocykgbm90IGZvdW5kJywge1xuICAgICAgICAgICAgZXJyb3JDb2RlOiAnY2FsZW5kYXInXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB1c2VyIGNhbGVuZGFyKHMpIGZvdW5kLCBwcm9jZXNzIGNhbGVuZGFyIHNldHRpbmdzXG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgICAgIGNhbGVuZGFyOiB0aGlzLmlkLFxuICAgICAgICAgIHZpc2liaWxpdHk6IHRydWUsXG4gICAgICAgICAgY29sb3I6IGAjJHt1c2VyQ29sb3JzWyh1c2VyQ2FsZW5kYXJzQ291bnQgLSAxKSAlIHVzZXJDb2xvcnMubGVuZ3RoXX1gXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gc2V0IHVzZXJEZWZhdWx0IHByb3BlcnR5XG4gICAgICAgIGlmICh1c2VyQ2FsZW5kYXJzQ291bnQgPT09IDEpIHtcbiAgICAgICAgICBzZXR0aW5ncy51c2VyRGVmYXVsdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0dGluZ3MudXNlckRlZmF1bHQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVtYmVkIGNhbGVuZGFyIHNldHRpbmdzIGluIHVzZXIgZG9jXG4gICAgICAgIGF3YWl0IFVzZXIuZmluZEJ5SWRBbmRVcGRhdGUodGhpcy51c2VyX2lkLCB7ICRwdXNoOiB7IGNhbGVuZGFyU2V0dGluZ3M6IHNldHRpbmdzIH0gfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGUpO1xuICAgIH1cbiAgfVxufSk7XG5cbi8vIERlbGV0ZSBjYWxlbmRhciBzZXR0aW5ncyBpbiBjb3JyZXNwb25kaW5nIHVzZXIgZG9jKHMpXG5zY2hlbWEucG9zdCgnZmluZE9uZUFuZERlbGV0ZScsIGFzeW5jIGZ1bmN0aW9uIChkb2MpIHtcbiAgdHJ5IHtcbiAgICAvLyBzeXN0ZW0gY2FsZW5kYXIgZGVsZXRlZFxuICAgIGlmIChkb2MudXNlcl9pZCA9PT0gJ3N5c3RlbScpIHtcbiAgICAgIC8vIGRlbGV0ZSBjYWxlbmRhciBzZXR0aW5ncyBmb3IgYWxsIHVzZXJzXG4gICAgICBhd2FpdCBVc2VyLnVwZGF0ZU1hbnkoe30sIHsgJHB1bGw6IHsgY2FsZW5kYXJTZXR0aW5nczogeyBjYWxlbmRhcjogZG9jLl9pZCB9IH0gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVzZXIgY2FsZW5kYXIgZGVsZXRlZFxuICAgICAgLy8gZGVsZXRlIGNhbGVuZGFyIHNldHRpbmdzIGZvciBtYXRjaGluZyB1c2VyXG4gICAgICBhd2FpdCBVc2VyLnVwZGF0ZU9uZSh7IF9pZDogZG9jLnVzZXJfaWQgfSwgeyAkcHVsbDogeyBjYWxlbmRhclNldHRpbmdzOiB7IGNhbGVuZGFyOiBkb2MuX2lkIH0gfSB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZSk7XG4gIH1cbn0pO1xuXG4vLyBzY2hlbWEgaW5kZXhcbnNjaGVtYS5pbmRleCh7IG5hbWU6IDEsIHVzZXJfaWQ6IDEgfSwgeyB1bmlxdWU6IHRydWUgfSk7XG5cbmNvbnN0IENhbGVuZGFyID0gbW9uZ29vc2UubW9kZWwoJ0NhbGVuZGFyJywgc2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXI7XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgdGl0bGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSB0aXRsZS4nXVxuICB9LFxuICBkZXNjOiB7XG4gICAgdHlwZTogU3RyaW5nXG4gIH0sXG4gIHN0YXJ0OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0VudGVyIGEgc3RhcnQgZGF0ZS4nXVxuICB9LFxuICBlbmQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYW4gZW5kIGRhdGUuJ11cbiAgfSxcbiAgYWxsRGF5OiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBkZWZhdWx0OiBmYWxzZVxuICB9LFxuICB0aW1lWm9uZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICByZWY6ICdDYWxlbmRhcidcbiAgfVxufSk7XG5cbmNvbnN0IEV2ZW50ID0gbW9uZ29vc2UubW9kZWwoJ0V2ZW50Jywgc2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnQ7XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgdG9rZW46IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSBuYW1lLiddXG4gIH0sXG4gIHVzZXI6IHtcbiAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgcmVmOiAnVXNlcicsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSB1c2VyIGlkLiddXG4gIH0sXG4gIGV4cGlyeURhdGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgZXhwaXJhdGlvbiBkYXRlLiddXG4gIH1cbn0pO1xuXG5zY2hlbWEuc3RhdGljcy52ZXJpZnlFeHBpcmF0aW9uID0gKHRva2VuKSA9PiB7XG4gIGNvbnN0IGV4cGlyeURhdGVPYmogPSBuZXcgRGF0ZSh0b2tlbi5leHBpcnlEYXRlKTtcbiAgcmV0dXJuIGV4cGlyeURhdGVPYmouZ2V0VGltZSgpIDwgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG5jb25zdCBSZWZyZXNoVG9rZW4gPSBtb25nb29zZS5tb2RlbCgnUmVmcmVzaFRva2VuJywgc2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVmcmVzaFRva2VuO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3Qgc2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIG5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSBuYW1lLiddXG4gIH1cbn0pO1xuXG5jb25zdCBSb2xlID0gbW9uZ29vc2UubW9kZWwoJ1JvbGUnLCBzY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBSb2xlO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0JztcbmltcG9ydCBDYWxlbmRhciBmcm9tICcuL0NhbGVuZGFyJztcbmltcG9ydCB7IER1cGxpY2F0ZUtleUVycm9yIH0gZnJvbSAnLi4vdXRpbHMvZGF0YWJhc2VFcnJvcnMnO1xuaW1wb3J0IHsgdXNlckNvbG9ycywgc3lzdGVtQ29sb3JzIH0gZnJvbSAnY29uZmlnL2FwcENvbmZpZyc7XG5cbmNvbnN0IFNBTFRfV09SS19GQUNUT1IgPSAxMDtcblxuY29uc3Qgc2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHVzZXJuYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0VudGVyIGEgdXNlcm5hbWUuJ10sXG4gICAgbWluTGVuZ3RoOiBbNCwgJ1VzZXJuYW1lIHNob3VsZCBiZSBhdCBsZWFzdCBmb3VyIGNoYXJhY3RlcnMnXSxcbiAgICB1bmlxdWU6IFt0cnVlLCAnVGhhdCB1c2VybmFtZSBpcyB0YWtlbi4nXVxuICB9LFxuICBwYXNzd29yZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsICdFbnRlciBhIHBhc3N3b3JkLiddLFxuICAgIG1pbkxlbmd0aDogWzQsICdQYXNzd29yZCBzaG91bGQgYmUgYXQgbGVhc3QgZm91ciBjaGFyYWN0ZXJzJ11cbiAgfSxcbiAgcm9sZXM6IFtcbiAgICB7XG4gICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICByZWY6ICdSb2xlJ1xuICAgIH1cbiAgXSxcbiAgY2FsZW5kYXJTZXR0aW5nczogW1xuICAgIHtcbiAgICAgIGNhbGVuZGFyOiB7XG4gICAgICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICAgICAgcmVmOiAnQ2FsZW5kYXInXG4gICAgICB9LFxuICAgICAgdXNlckRlZmF1bHQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIF1cbn0pO1xuXG4vLyBwcmVzZXJ2aW5nIGlzTmV3IHN0YXRlIGZvciAncG9zdCcgbWlkZGxld2FyZVxuc2NoZW1hLnByZSgnc2F2ZScsIGZ1bmN0aW9uIChuZXh0KSB7XG4gIHRoaXMud2FzTmV3ID0gdGhpcy5pc05ldztcbiAgbmV4dCgpO1xufSk7XG5cbi8vIHNjaGVtYSBtaWRkbGV3YXJlIHRvIGFwcGx5IGJlZm9yZSBzYXZpbmdcbnNjaGVtYS5wcmUoJ3NhdmUnLCBhc3luYyBmdW5jdGlvbiAobmV4dCkge1xuICAvLyBvbmx5IGhhc2ggdGhlIHBhc3N3b3JkIGlmIGl0IGhhcyBiZWVuIG1vZGlmaWVkIChvciBpcyBuZXcpXG4gIGlmICghdGhpcy5pc01vZGlmaWVkKCdwYXNzd29yZCcpKSByZXR1cm4gbmV4dCgpO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KFNBTFRfV09SS19GQUNUT1IpO1xuICAgIHRoaXMucGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaCh0aGlzLnBhc3N3b3JkLCBzYWx0KTtcblxuICAgIHJldHVybiBuZXh0KCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbmV4dChlKTtcbiAgfVxufSk7XG5cbi8vIHNjaGVtYSBtaWRkbGV3YXJlIHRvIGNoZWNrIGZvciBkdXBsaWNhdGUga2V5c1xuY29uc3QgaGFuZGxlRTExMDAwID0gKGVycm9yLCByZXMsIG5leHQpID0+IHtcbiAgaWYgKGVycm9yLm5hbWUgPT09ICdNb25nb0Vycm9yJyAmJiBlcnJvci5jb2RlID09PSAxMTAwMCkge1xuICAgIHRocm93IG5ldyBEdXBsaWNhdGVLZXlFcnJvcignVGhlcmUgd2FzIGEgY29uZmxpY3Qgd2l0aCBhbiBleGlzdGluZyBlbnRyeS4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCB7XG4gICAgICBlcnJvckNvZGU6ICd1c2VybmFtZSdcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV4dCgpO1xuICB9XG59O1xuXG5zY2hlbWEucG9zdCgnc2F2ZScsIGhhbmRsZUUxMTAwMCk7XG5cbi8vIGZvciBuZXcgdXNlcnM6IGVtYmVkIHN5c3RlbSBjYWwgc2V0dGluZ3MgYW5kIGNyZWF0ZSB1c2VyIGRlZmF1bHQgY2FsZW5kYXJcbnNjaGVtYS5wb3N0KCdzYXZlJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5pZCAmJiB0aGlzLndhc05ldykge1xuICAgIHRyeSB7XG4gICAgICAvLyBMb29rdXAgc3lzdGVtIGNhbHNcbiAgICAgIGNvbnN0IHN5c3RlbUNhbHMgPSBhd2FpdCBDYWxlbmRhci5maW5kKHtcbiAgICAgICAgdXNlcl9pZDogJ3N5c3RlbSdcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3lzdGVtQ2Fscy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gW107XG5cbiAgICAgICAgc3lzdGVtQ2Fscy5mb3JFYWNoKChjYWwsIGlkeCkgPT4ge1xuICAgICAgICAgIHNldHRpbmdzLnB1c2goe1xuICAgICAgICAgICAgY2FsZW5kYXI6IGNhbC5pZCxcbiAgICAgICAgICAgIHVzZXJEZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHRydWUsXG4gICAgICAgICAgICBjb2xvcjogYCMke3N5c3RlbUNvbG9yc1tpZHhdfWBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0dGluZ3MuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyU2V0dGluZ3MucHVzaChlbnRyeSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGVtYmVkIGNhbGVuZGFyIHNldHRpbmdzIGluIHVzZXIgZG9jXG4gICAgICAgIGF3YWl0IHRoaXMuc2F2ZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBjaGVjayBmb3IgZXhpc3RpbmcgdXNlciBkZWZhdWx0IGNhbFxuICAgICAgY29uc3QgZGVmYXVsdENhbCA9IGF3YWl0IENhbGVuZGFyLmZpbmRPbmUoe1xuICAgICAgICBuYW1lOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICB1c2VyX2lkOiB0aGlzLmlkXG4gICAgICB9KTtcblxuICAgICAgaWYgKGRlZmF1bHRDYWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IER1cGxpY2F0ZUtleUVycm9yKCdUaGVyZSB3YXMgYSBjb25mbGljdCB3aXRoIGFuIGV4aXN0aW5nIGVudHJ5LiBQbGVhc2UgdHJ5IGFnYWluLicsIHtcbiAgICAgICAgICBlcnJvckNvZGU6ICd1c2VyJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3RGVmYXVsdENhbCA9IG5ldyBDYWxlbmRhcih7XG4gICAgICAgIG5hbWU6IHRoaXMudXNlcm5hbWUsXG4gICAgICAgIHVzZXJfaWQ6IHRoaXMuaWRcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDcmVhdGUgZGVmYXVsdCBjYWxlbmRhclxuICAgICAgYXdhaXQgbmV3RGVmYXVsdENhbC5zYXZlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGUpO1xuICAgIH1cbiAgfVxufSk7XG5cbnNjaGVtYS5zdGF0aWNzLmZpbmRCeVVzZXJuYW1lID0gYXN5bmMgZnVuY3Rpb24gKHVzZXJuYW1lKSB7XG4gIC8vIE1vbmdvb3NlIHJldHVybnMgbnVsbCBmb3IgLmZpbmRPbmUgcXVlcnkgd2l0aCBubyBtYXRjaGVzXG4gIHJldHVybiB0aGlzLmZpbmRPbmUoeyB1c2VybmFtZSB9KTtcbn07XG5cbnNjaGVtYS5tZXRob2RzLnZhbGlkYXRlUGFzc3dvcmQgPSBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKGNhbmRpZGF0ZVBhc3N3b3JkKSB7XG4gIHJldHVybiBiY3J5cHQuY29tcGFyZShjYW5kaWRhdGVQYXNzd29yZCwgdGhpcy5wYXNzd29yZCk7XG59O1xuXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWwoJ1VzZXInLCBzY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5pbXBvcnQgUm9sZSBmcm9tICcuL1JvbGUnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vRXZlbnQnO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vQ2FsZW5kYXInO1xuaW1wb3J0IFJlZnJlc2hUb2tlbiBmcm9tICcuL1JlZnJlc2hUb2tlbic7XG5cbmNvbnN0IGRiID0ge1xuICBtb25nb29zZSxcbiAgVXNlcixcbiAgUm9sZSxcbiAgRXZlbnQsXG4gIENhbGVuZGFyLFxuICBSZWZyZXNoVG9rZW4sXG4gIHJvbGVzOiBbJ3VzZXInLCAnYWRtaW4nLCAnbW9kZXJhdG9yJ11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRiO1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBhdXRoSnd0IH0gZnJvbSAnLi4vbWlkZGxld2FyZSc7XG5pbXBvcnQgQ2FsZW5kYXJDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL0NhbGVuZGFyQ29udHJvbGxlcic7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbi8vIFBPU1QgcmVxdWVzdCB0byBjcmVhdGUgY2FsZW5kYXJcbnJvdXRlci5wb3N0KCcvJywgW2F1dGhKd3QudmVyaWZ5VG9rZW5dLCBDYWxlbmRhckNvbnRyb2xsZXIuY3JlYXRlKTtcblxuLy8gUFVUIHJlcXVlc3QgdG8gdXBkYXRlIGNhbGVuZGFyXG5yb3V0ZXIucHV0KCcvOmNhbGVuZGFySWQnLCBbYXV0aEp3dC52ZXJpZnlUb2tlbiwgYXV0aEp3dC52ZXJpZnlVUklBdXRoXSwgQ2FsZW5kYXJDb250cm9sbGVyLnVwZGF0ZSk7XG5cbi8vIERFTEVURSByZXF1ZXN0IHRvIGRlbGV0ZSBjYWxlbmRhclxucm91dGVyLmRlbGV0ZSgnLzpjYWxlbmRhcklkJywgW2F1dGhKd3QudmVyaWZ5VG9rZW4sIGF1dGhKd3QudmVyaWZ5VVJJQXV0aF0sIENhbGVuZGFyQ29udHJvbGxlci5kZWxldGUpO1xuXG4vLyBQVVQgcmVxdWVzdCB0byB1cGRhdGUgY2FsZW5kYXIgc2V0dGluZ3NcbnJvdXRlci5wdXQoJy86Y2FsZW5kYXJJZC9zZXR0aW5ncycsIFthdXRoSnd0LnZlcmlmeVRva2VuLCBhdXRoSnd0LnZlcmlmeVVSSUF1dGhdLCBDYWxlbmRhckNvbnRyb2xsZXIudXBkYXRlU2V0dGluZ3MpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGF1dGhKd3QgfSBmcm9tICcuLi9taWRkbGV3YXJlJztcbmltcG9ydCBFdmVudENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvRXZlbnRDb250cm9sbGVyJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuLy8gUE9TVCByZXF1ZXN0IHRvIGNyZWF0ZSBldmVudFxucm91dGVyLnBvc3QoJy8nLCBbYXV0aEp3dC52ZXJpZnlUb2tlbl0sIEV2ZW50Q29udHJvbGxlci5jcmVhdGUpO1xuXG4vLyBHRVQgcmVxdWVzdCB0byBnZXQgdXNlciBldmVudHNcbnJvdXRlci5nZXQoJy91c2VyJywgW2F1dGhKd3QudmVyaWZ5VG9rZW5dLCBFdmVudENvbnRyb2xsZXIuZ2V0VXNlckV2ZW50cyk7XG5cbi8vIFBVVCByZXF1ZXN0IHRvIHVwZGF0ZSBldmVudFxucm91dGVyLnB1dCgnLzpldmVudElkJywgW2F1dGhKd3QudmVyaWZ5VG9rZW4sIGF1dGhKd3QudmVyaWZ5VVJJQXV0aF0sIEV2ZW50Q29udHJvbGxlci51cGRhdGUpO1xuXG4vLyBERUxFVEUgcmVxdWVzdCB0byBkZWxldGUgZXZlbnRcbnJvdXRlci5kZWxldGUoJy86ZXZlbnRJZCcsIFthdXRoSnd0LnZlcmlmeVRva2VuLCBhdXRoSnd0LnZlcmlmeVVSSUF1dGhdLCBFdmVudENvbnRyb2xsZXIuZGVsZXRlKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgdXNlclJvdXRlciBmcm9tICcuL3VzZXJSb3V0ZXInO1xuaW1wb3J0IGNhbGVuZGFyUm91dGVyIGZyb20gJy4vY2FsZW5kYXJSb3V0ZXInO1xuaW1wb3J0IGV2ZW50Um91dGVyIGZyb20gJy4vZXZlbnRSb3V0ZXInO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIudXNlKCcvdXNlcnMnLCB1c2VyUm91dGVyKTtcbnJvdXRlci51c2UoJy9jYWxlbmRhcnMnLCBjYWxlbmRhclJvdXRlcik7XG5yb3V0ZXIudXNlKCcvZXZlbnRzJywgZXZlbnRSb3V0ZXIpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGF1dGhKd3QsIHZlcmlmeVJlZ2lzdHJhdGlvbiB9IGZyb20gJy4uL21pZGRsZXdhcmUnO1xuaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuLy8gUE9TVCByZXF1ZXN0IHRvIHJlZ2lzdGVyIHVzZXJcbnJvdXRlci5wb3N0KFxuICAnL3JlZ2lzdGVyJyxcbiAgW3ZlcmlmeVJlZ2lzdHJhdGlvbi5jaGVja0R1cGxpY2F0ZVVzZXJuYW1lLCB2ZXJpZnlSZWdpc3RyYXRpb24uY2hlY2tSb2xlc0V4aXN0XSxcbiAgW1VzZXJDb250cm9sbGVyLnJlZ2lzdGVyLCBVc2VyQ29udHJvbGxlci5sb2dpbl1cbik7XG5cbi8vIFBPU1QgcmVxdWVzdCB0byBsb2dpbiB1c2VyIChyZXR1cm5zIHVzZXIgb2JqZWN0KVxucm91dGVyLnBvc3QoJy9sb2dpbicsIFVzZXJDb250cm9sbGVyLmxvZ2luKTtcblxuLy8gUE9TVCByZXF1ZXN0IHRvIHJlZnJlc2ggdG9rZW5cbnJvdXRlci5wb3N0KCcvcmVmcmVzaHRva2VuJywgVXNlckNvbnRyb2xsZXIucmVmcmVzaFRva2VuKTtcblxuLy8gUFVUIHJlcXVlc3QgdG8gdXBkYXRlIHVzZXJcbnJvdXRlci5wdXQoJy86dXNlcklkJywgW2F1dGhKd3QudmVyaWZ5VG9rZW4sIGF1dGhKd3QudmVyaWZ5VVJJQXV0aF0sIFVzZXJDb250cm9sbGVyLnVwZGF0ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiIsImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcblxuaW1wb3J0IGRiIGZyb20gJy4vZGIvY29ubmVjdGlvbi5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVycy9pbmRleC5qcyc7XG5pbXBvcnQgeyBVc2VyRmFjaW5nRXJyb3IsIERhdGFiYXNlRXJyb3IgfSBmcm9tICcuL3V0aWxzL2Jhc2VFcnJvcnMuanMnO1xuXG5jb25zdCBCVUlMRF9ESVIgPSBfX2Rpcm5hbWU7XG5jb25zdCBIVE1MX0ZJTEUgPSBwYXRoLnJlc29sdmUoQlVJTERfRElSLCAnaW5kZXguaHRtbCcpO1xuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMTtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvcnMoKSk7XG5cbi8vIHN1cHBvcnQgZGF0YSBmcm9tIFBPU1QgcmVxdWVzdHNcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xuXG4vLyBzZXJ2ZSBzdGF0aWMgZmlsZXNcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoQlVJTERfRElSKSk7XG5cbi8vIFVzZSBBUEkgcm91dGVzXG5hcHAudXNlKCcvYXBpL3YxJywgcm91dGVyKTtcblxuYXBwLmdldCgnKicsIChyZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZEZpbGUoSFRNTF9GSUxFKTtcbn0pO1xuXG4vLyBHbG9iYWwgZXJyb3IgaGFuZGxlclxuYXBwLnVzZShmdW5jdGlvbiAoZXJyLCByZXEsIHJlcywgbmV4dCkge1xuICByZXMuaGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gIGNvbnN0IHN0YXR1cyA9IGVyci5zdGF0dXMgfHwgNDAwO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgIG5hbWU6IGVyci5uYW1lLFxuICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlID8/ICcnXG4gIH07XG5cbiAgaWYgKGVyciBpbnN0YW5jZW9mIFVzZXJGYWNpbmdFcnJvciB8fCBlcnIgaW5zdGFuY2VvZiBEYXRhYmFzZUVycm9yKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZXJyKSkge1xuICAgICAgcmVzcG9uc2Vba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJlcy5zdGF0dXMoc3RhdHVzKS5zZW5kKHJlc3BvbnNlKTtcbn0pO1xuXG5hcHAubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYHNlcnZlciBzdGFydGVkIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JHtQT1JUfWApO1xufSk7XG4iLCJpbXBvcnQgSHR0cFJlc3BvbnNlIGZyb20gJy4uL3V0aWxzL2h0dHBSZXNwb25zZSc7XG5pbXBvcnQgeyBzeXN0ZW1Db2xvcnMsIHVzZXJDb2xvcnMgfSBmcm9tICdjb25maWcvYXBwQ29uZmlnJztcblxuY2xhc3MgQ2FsZW5kYXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IobW9kZWwpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICBjcmVhdGUgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBfb2JqID0ge1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIHVzZXJfaWQ6IGRhdGEudXNlcl9pZFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kZWwuY3JlYXRlKF9vYmopO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIGdldE9uZSA9IGFzeW5jIChjYWxlbmRhcklkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIE1vbmdvb3NlIHJldHVybnMgbnVsbCBmb3IgLmZpbmRCeUlkIHF1ZXJ5IHdpdGggbm8gbWF0Y2hlc1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kQnlJZChjYWxlbmRhcklkKTtcblxuICAgICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcblxuICAvLyBHZXQgdXNlciBhbmQgc3lzdGVtIGNhbGVuZGFyc1xuICBnZXRVc2VyQ2FsZW5kYXJzID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBNb25nb29zZSByZXR1cm5zIFtdIGZvciAuZmluZCBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuZmluZCh7IHVzZXJfaWQ6IHsgJGluOiBbdXNlcklkLCAnc3lzdGVtJ10gfSB9KTtcblxuICAgICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGUgPSBhc3luYyAoY2FsZW5kYXJJZCwgZGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cGRhdGUgPSB7XG4gICAgICAgIG5hbWU6IGRhdGEubmFtZVxuICAgICAgfTtcblxuICAgICAgLy8gTW9uZ29vc2UgcmV0dXJucyB0aGUgbW9kaWZpZWQgZG9jdW1lbnQgKG9yIG51bGwpIGZvciAuZmluZEJ5SWRBbmRVcGRhdGUgcXVlcnkgd2l0aCBvcHRpb24gJ25ldzogdHJ1ZSdcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuZmluZEJ5SWRBbmRVcGRhdGUoY2FsZW5kYXJJZCwgdXBkYXRlLCB7IG5ldzogdHJ1ZSB9KTtcblxuICAgICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcblxuICBkZWxldGUgPSBhc3luYyAoY2FsZW5kYXJJZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBNb25nb29zZSByZXR1cm5zIHRoZSBtYXRjaGluZyBkb2N1bWVudCAob3IgbnVsbCkgZm9yIC5maW5kQnlJZEFuZERlbGV0ZSBxdWVyeVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kQnlJZEFuZERlbGV0ZShjYWxlbmRhcklkKTtcblxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoJ0NhbGVuZGFyIG5vdCBmb3VuZCcpO1xuXG4gICAgICAgIGVycm9yLnN0YXR1c0NvZGUgPSA0MDQ7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UocmVzdWx0LCB7IGRlbGV0ZWQ6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbGVuZGFyU2VydmljZTtcbiIsImltcG9ydCBIdHRwUmVzcG9uc2UgZnJvbSAnLi4vdXRpbHMvaHR0cFJlc3BvbnNlJztcblxuY2xhc3MgRXZlbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IobW9kZWwpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICBjcmVhdGUgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1vZGVsLmNyZWF0ZShkYXRhKTtcblxuICAgICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcblxuICBnZXRPbmUgPSBhc3luYyAoZXZlbnRJZCkgPT4ge1xuICAgIC8vIE1vbmdvb3NlIHJldHVybnMgbnVsbCBmb3IgLmZpbmRCeUlkIHF1ZXJ5IHdpdGggbm8gbWF0Y2hlc1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuZmluZEJ5SWQoZXZlbnRJZCk7XG5cbiAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQpO1xuICB9O1xuXG4gIGdldFVzZXJFdmVudHMgPSBhc3luYyAoY2FsZW5kYXJJZHMpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gTW9uZ29vc2UgcmV0dXJucyBbXSBmb3IgLmZpbmQgcXVlcnkgd2l0aCBubyBtYXRjaGVzXG4gICAgICBjb25zdCBldmVudHMgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmQoeyBjYWxlbmRhcjogeyAkaW46IGNhbGVuZGFySWRzIH0gfSk7XG5cbiAgICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKGV2ZW50cyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXBkYXRlID0ge1xuICAgICAgICAuLi5kYXRhXG4gICAgICB9O1xuXG4gICAgICBkZWxldGUgdXBkYXRlLmlkO1xuXG4gICAgICAvLyBNb25nb29zZSByZXR1cm5zIHRoZSBtb2RpZmllZCBkb2N1bWVudCAob3IgbnVsbCkgZm9yIC5maW5kQnlJZEFuZFVwZGF0ZSBxdWVyeSB3aXRoIG9wdGlvbiAnbmV3OiB0cnVlJ1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kQnlJZEFuZFVwZGF0ZShkYXRhLmlkLCB1cGRhdGUsIHsgbmV3OiB0cnVlIH0pO1xuXG4gICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIGRlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBNb25nb29zZSByZXR1cm5zIHRoZSBtYXRjaGluZyBkb2N1bWVudCAob3IgbnVsbCkgZm9yIC5maW5kQnlJZEFuZERlbGV0ZSBxdWVyeVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kQnlJZEFuZERlbGV0ZShpZCk7XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCdFdmVudCBub3QgZm91bmQnKTtcblxuICAgICAgICBlcnJvci5zdGF0dXNDb2RlID0gNDA0O1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKHJlc3VsdCwgeyBkZWxldGVkOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFNlcnZpY2U7XG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IEF1dGhvcml6YXRpb25FcnJvciB9IGZyb20gJy4uL3V0aWxzL3VzZXJGYWNpbmdFcnJvcnMnO1xuXG5jbGFzcyBSZWZyZXNoVG9rZW5TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IobW9kZWwpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICBjcmVhdGUgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4cGlyZWRBdCA9IG5ldyBEYXRlKCk7XG5cbiAgICAgIGV4cGlyZWRBdC5zZXRTZWNvbmRzKGV4cGlyZWRBdC5nZXRTZWNvbmRzKCkgKyBOdW1iZXIocHJvY2Vzcy5lbnYuSldUX1JFRlJFU0hfRVhQSVJBVElPTikpO1xuXG4gICAgICBjb25zdCBfdG9rZW4gPSB1dWlkdjQoKTtcblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdG9rZW46IF90b2tlbixcbiAgICAgICAgdXNlcjogdXNlcklkLFxuICAgICAgICBleHBpcnlEYXRlOiBleHBpcmVkQXQudG9JU09TdHJpbmcoKVxuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5jcmVhdGUoZGF0YSk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0ID0gYXN5bmMgKHJlcXVlc3RUb2tlbikgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBNb25nb29zZSByZXR1cm5zIG51bGwgZm9yIC5maW5kT25lIHF1ZXJ5IHdpdGggbm8gbWF0Y2hlc1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kT25lKHsgdG9rZW46IHJlcXVlc3RUb2tlbiB9KTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcblxuICB2ZXJpZnkgPSBhc3luYyAodG9rZW4pID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMubW9kZWwudmVyaWZ5RXhwaXJhdGlvbih0b2tlbikpIHtcbiAgICAgICAgLy8gUmVmcmVzaCB0b2tlbiBleHBpcmVkXG4gICAgICAgIC8vIE1vbmdvb3NlIHJldHVybnMgdGhlIG1hdGNoaW5nIGRvY3VtZW50IChvciBudWxsKSBmb3IgLmZpbmRCeUlkQW5kUmVtb3ZlIHF1ZXJ5XG4gICAgICAgIGF3YWl0IHRoaXMubW9kZWwuZmluZEJ5SWRBbmRSZW1vdmUodG9rZW4uaWQsIHtcbiAgICAgICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aHJvdyBuZXcgQXV0aG9yaXphdGlvbkVycm9yKCdSZWZyZXNoIHRva2VuIGV4cGlyZWQnLCB7IGVycm9yQ29kZTogJ3JlZnJlc2hUb2tlbicgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmcmVzaFRva2VuU2VydmljZTtcbiIsImltcG9ydCBIdHRwUmVzcG9uc2UgZnJvbSAnLi4vdXRpbHMvaHR0cFJlc3BvbnNlJztcblxuY2xhc3MgUm9sZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihtb2RlbCkge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIGNyZWF0ZSA9IGFzeW5jIChuYW1lKSA9PiB7XG4gICAgYXdhaXQgdGhpcy5tb2RlbC5jcmVhdGUoeyBuYW1lIH0pLnRoZW4oKHJvbGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBDcmVhdGVkIHJvbGU6ICR7cm9sZS5uYW1lfWApO1xuICAgIH0pO1xuICB9O1xuXG4gIGdldCA9IGFzeW5jIChyb2xlcykgPT4ge1xuICAgIC8vIE1vbmdvb3NlIHJldHVybnMgW10gZm9yIC5maW5kIHF1ZXJ5IHdpdGggbm8gbWF0Y2hlc1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuZmluZCh7IG5hbWU6IHsgJGluOiByb2xlcyB9IH0pO1xuXG4gICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UocmVzdWx0KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9sZVNlcnZpY2U7XG4iLCJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgUmVmcmVzaFRva2VuU2VydmljZSBmcm9tICcuL1JlZnJlc2hUb2tlblNlcnZpY2UnO1xuaW1wb3J0IFJvbGVTZXJ2aWNlIGZyb20gJy4vUm9sZVNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aG9yaXphdGlvbkVycm9yLCBOb3RGb3VuZEVycm9yIH0gZnJvbSAnLi4vdXRpbHMvdXNlckZhY2luZ0Vycm9ycyc7XG5pbXBvcnQgSHR0cFJlc3BvbnNlIGZyb20gJy4uL3V0aWxzL2h0dHBSZXNwb25zZSc7XG5cbmNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IobW9kZWwsIHJlZnJlc2hUb2tlbk1vZGVsLCByb2xlTW9kZWwpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5yZWZyZXNoVG9rZW5TZXJ2aWNlID0gbmV3IFJlZnJlc2hUb2tlblNlcnZpY2UocmVmcmVzaFRva2VuTW9kZWwpO1xuICAgIHRoaXMucm9sZVNlcnZpY2UgPSBuZXcgUm9sZVNlcnZpY2Uocm9sZU1vZGVsKTtcbiAgfVxuXG4gIGNyZWF0ZSA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuY3JlYXRlKGRhdGEpO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIC8vIExvb2sgdXAgdXNlciwgdmFsaWRhdGUgcHcsIGNyZWF0ZSByZWZyZXNoIHRva2VuXG4gIGxvZ2luID0gYXN5bmMgKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBNb25nb29zZSByZXR1cm5zIG51bGwgZm9yIC5maW5kT25lIHF1ZXJ5IHdpdGggbm8gbWF0Y2hlc1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMubW9kZWwuZmluZE9uZSh7IHVzZXJuYW1lIH0pO1xuXG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgLy8gVXNlciBub3QgZm91bmRcbiAgICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kRXJyb3IoJ0ludmFsaWQgdXNlcm5hbWUnLCB7IGVycm9yQ29kZTogJ3VzZXJuYW1lJyB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gcHJvY2VzcyBsb2dpblxuICAgICAgY29uc3QgdmFsaWRhdGVkID0gYXdhaXQgdXNlci52YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKTtcblxuICAgICAgaWYgKCF2YWxpZGF0ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEF1dGhvcml6YXRpb25FcnJvcignSW52YWxpZCBwYXNzd29yZCcsIHtcbiAgICAgICAgICBlcnJvckNvZGU6ICdwYXNzd29yZCdcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHBhc3N3b3JkIGlzIHZhbGlkLCBjcmVhdGUgSldUIHRva2VuXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGp3dC5zaWduKHsgaWQ6IHVzZXIuX2lkIH0sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVRfS0VZLCB7XG4gICAgICAgIGV4cGlyZXNJbjogTnVtYmVyKHByb2Nlc3MuZW52LkpXVF9FWFBJUkFUSU9OKVxuICAgICAgfSk7XG5cbiAgICAgIC8vIENyZWF0ZSByZWZyZXNoIHRva2VuXG4gICAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBhd2FpdCB0aGlzLnJlZnJlc2hUb2tlblNlcnZpY2UuY3JlYXRlKHVzZXIuaWQpO1xuXG4gICAgICBjb25zdCByZWZyZXNoVG9rZW5SZXNwb25zZSA9IG5ldyBIdHRwUmVzcG9uc2UocmVmcmVzaFRva2VuKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWNjZXNzVG9rZW4sXG4gICAgICAgIHJlZnJlc2hUb2tlbjogcmVmcmVzaFRva2VuUmVzcG9uc2UuZGF0YVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcblxuICBnZXRPbmUgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gICAgLy8gUmV0cmlldmUgdXNlciBkb2MgYW5kIHBvcHVsYXRlIHJlZmVyZW5jZWQgZmllbGRzXG4gICAgLy8gTW9uZ29vc2UgcmV0dXJucyBudWxsIGZvciAuZmluZEJ5SWQgcXVlcnkgd2l0aCBubyBtYXRjaGVzXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkKHVzZXJJZCkucG9wdWxhdGUoWydyb2xlcycsICdjYWxlbmRhclNldHRpbmdzLmNhbGVuZGFyJ10pO1xuXG4gICAgY29uc3QgaHR0cFJlc3BvbnNlID0gbmV3IEh0dHBSZXNwb25zZShyZXNwb25zZSk7XG5cbiAgICBjb25zdCBmbGF0dGVuZWRDYWxlbmRhclNldHRpbmdzID0gaHR0cFJlc3BvbnNlLmRhdGEuY2FsZW5kYXJTZXR0aW5ncy5tYXAoKGVudHJ5KSA9PiAoe1xuICAgICAgaWQ6IGVudHJ5LmNhbGVuZGFyLmlkLFxuICAgICAgbmFtZTogZW50cnkuY2FsZW5kYXIubmFtZSxcbiAgICAgIHVzZXJfaWQ6IGVudHJ5LmNhbGVuZGFyLnVzZXJfaWQsXG4gICAgICB1c2VyRGVmYXVsdDogZW50cnkudXNlckRlZmF1bHQsXG4gICAgICB2aXNpYmlsaXR5OiBlbnRyeS52aXNpYmlsaXR5LFxuICAgICAgY29sb3I6IGVudHJ5LmNvbG9yXG4gICAgfSkpO1xuXG4gICAgaHR0cFJlc3BvbnNlLmRhdGEuY2FsZW5kYXJTZXR0aW5ncyA9IGZsYXR0ZW5lZENhbGVuZGFyU2V0dGluZ3M7XG5cbiAgICByZXR1cm4gaHR0cFJlc3BvbnNlLmRhdGE7XG4gIH07XG5cbiAgcmVmcmVzaFRva2VuID0gYXN5bmMgKHJlcXVlc3RUb2tlbikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBhd2FpdCB0aGlzLnJlZnJlc2hUb2tlblNlcnZpY2UuZ2V0KHJlcXVlc3RUb2tlbik7XG5cbiAgICAgIGlmICghcmVmcmVzaFRva2VuKSB7XG4gICAgICAgIC8vIFJlZnJlc2ggdG9rZW4gbm90IGZvdW5kXG4gICAgICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKCdJbnZhbGlkIHJlcXVlc3QgdG9rZW4nLCB7IGVycm9yQ29kZTogJ3JlZnJlc2hUb2tlbicgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRocm93cyBlcnJvciBvbiBleHBpcmVkIHJlZnJlc2ggdG9rZW5cbiAgICAgIGF3YWl0IHRoaXMucmVmcmVzaFRva2VuU2VydmljZS52ZXJpZnkocmVmcmVzaFRva2VuKTtcblxuICAgICAgLy8gY3JlYXRlIG5ldyBKV1QgdG9rZW5cbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gand0LnNpZ24oeyBpZDogcmVmcmVzaFRva2VuLnVzZXIuX2lkIH0sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVRfS0VZLCB7XG4gICAgICAgIGV4cGlyZXNJbjogTnVtYmVyKHByb2Nlc3MuZW52LkpXVF9FWFBJUkFUSU9OKVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgICAgICBhY2Nlc3NUb2tlblxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIGFzc2lnblJvbGVzID0gYXN5bmMgKHVzZXIsIHJvbGVOYW1lcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByb2xlcyA9IGF3YWl0IHRoaXMucm9sZVNlcnZpY2UuZ2V0KHJvbGVOYW1lcyk7XG5cbiAgICAgIGlmICghcm9sZXMuZGF0YSB8fCByb2xlcy5kYXRhLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kRXJyb3IoJ1JvbGUocykgbm90IGZvdW5kJywgeyBlcnJvckNvZGU6ICdyb2xlJyB9KTtcbiAgICAgIH1cblxuICAgICAgdXNlci5yb2xlcyA9IHJvbGVzLmRhdGEubWFwKChyb2xlKSA9PiByb2xlLmlkKTtcblxuICAgICAgcmV0dXJuIGF3YWl0IHVzZXIuc2F2ZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZSA9IGFzeW5jICh1c2VySWQsIGRhdGEpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gTW9uZ29vc2UgcmV0dXJucyB0aGUgbW9kaWZpZWQgZG9jdW1lbnQgKG9yIG51bGwpIGZvciAuZmluZEJ5SWQgcXVlcnlcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkKHVzZXJJZCk7XG5cbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFcnJvcignTm8gbWF0Y2hpbmcgdXNlciBmb3VuZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyB1cGRhdGUgcGFzc3dvcmRcbiAgICAgIGlmIChkYXRhLnBhc3N3b3JkKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZCA9IGF3YWl0IHVzZXIudmFsaWRhdGVQYXNzd29yZChkYXRhLnBhc3N3b3JkKTtcblxuICAgICAgICBpZiAoIXZhbGlkYXRlZCkge1xuICAgICAgICAgIHRocm93IG5ldyBBdXRob3JpemF0aW9uRXJyb3IoJ0ludmFsaWQgcGFzc3dvcmQuIFBsZWFzZSB0cnkgYWdhaW4uJywgeyBlcnJvckNvZGU6ICdwYXNzd29yZCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB1c2VyLnBhc3N3b3JkID0gZGF0YS5uZXdQYXNzd29yZCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgLy8gdXBkYXRlIHVzZXJuYW1lXG4gICAgICBpZiAoZGF0YS51c2VybmFtZSkge1xuICAgICAgICB1c2VyLnVzZXJuYW1lID0gZGF0YS51c2VybmFtZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXNlci5zYXZlKCk7XG5cbiAgICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKHJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlQ2FsZW5kYXJTZXR0aW5ncyA9IGFzeW5jICh1c2VySWQsIGRhdGEpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gZ2V0IGNhbGVuZGFyIHNldHRpbmdzIHByb3BlcnRpZXMgZnJvbSBtb2RlbCBzY2hlbWFcbiAgICAgIGNvbnN0IGNhbGVuZGFyU2V0dGluZ3NLZXlzID0gT2JqZWN0LmtleXModGhpcy5tb2RlbC5zY2hlbWEudHJlZS5jYWxlbmRhclNldHRpbmdzWzBdKTtcblxuICAgICAgY29uc3QgZGlmZmVkRGF0YSA9IHt9O1xuXG4gICAgICBjYWxlbmRhclNldHRpbmdzS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgZGlmZmVkRGF0YVtrZXldID0gZGF0YVtrZXldO1xuICAgICAgfSk7XG5cbiAgICAgIE9iamVjdC5rZXlzKGRpZmZlZERhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoZGlmZmVkRGF0YVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBkZWxldGUgZGlmZmVkRGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdXBkYXRlID0ge307XG5cbiAgICAgIE9iamVjdC5rZXlzKGRpZmZlZERhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB1cGRhdGVbYGNhbGVuZGFyU2V0dGluZ3MuJFtpXS4ke2tleX1gXSA9IGRpZmZlZERhdGFba2V5XTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kT25lQW5kVXBkYXRlKFxuICAgICAgICB7IF9pZDogdXNlcklkIH0sXG4gICAgICAgIHsgJHNldDogdXBkYXRlIH0sXG4gICAgICAgIHsgYXJyYXlGaWx0ZXJzOiBbeyAnaS5jYWxlbmRhcic6IGRhdGEuaWQgfV0sIG5ldzogdHJ1ZSB9XG4gICAgICApO1xuXG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kRXJyb3IoYFVwZGF0ZSBmYWlsZWQgd2l0aCB1c2VyIGlkOiAke3VzZXJJZH1gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaHR0cFJlc3BvbnNlID0gbmV3IEh0dHBSZXNwb25zZSh1c2VyLmNhbGVuZGFyU2V0dGluZ3MpO1xuXG4gICAgICBjb25zdCBmbGF0dGVuZWRDYWxlbmRhclNldHRpbmdzID0gaHR0cFJlc3BvbnNlLmRhdGEubWFwKChlbnRyeSkgPT4gKHtcbiAgICAgICAgaWQ6IGVudHJ5LmNhbGVuZGFyLFxuICAgICAgICB1c2VyRGVmYXVsdDogZW50cnkudXNlckRlZmF1bHQsXG4gICAgICAgIHZpc2liaWxpdHk6IGVudHJ5LnZpc2liaWxpdHksXG4gICAgICAgIGNvbG9yOiBlbnRyeS5jb2xvclxuICAgICAgfSkpO1xuXG4gICAgICBodHRwUmVzcG9uc2UuZGF0YSA9IGZsYXR0ZW5lZENhbGVuZGFyU2V0dGluZ3M7XG5cbiAgICAgIHJldHVybiBodHRwUmVzcG9uc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTZXJ2aWNlO1xuIiwiY2xhc3MgQXBwbGljYXRpb25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgfVxufVxuXG5jbGFzcyBEYXRhYmFzZUVycm9yIGV4dGVuZHMgQXBwbGljYXRpb25FcnJvciB7fVxuXG5jbGFzcyBVc2VyRmFjaW5nRXJyb3IgZXh0ZW5kcyBBcHBsaWNhdGlvbkVycm9yIHt9XG5cbmV4cG9ydCB7IEFwcGxpY2F0aW9uRXJyb3IsIERhdGFiYXNlRXJyb3IsIFVzZXJGYWNpbmdFcnJvciB9O1xuIiwiaW1wb3J0IHsgRGF0YWJhc2VFcnJvciB9IGZyb20gJy4vYmFzZUVycm9ycyc7XG5cbmNsYXNzIER1cGxpY2F0ZUtleUVycm9yIGV4dGVuZHMgRGF0YWJhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucykpIHtcbiAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzdGF0dXNDb2RlKCkge1xuICAgIHJldHVybiA0MDk7XG4gIH1cblxuICBnZXQgbW9uZ29FcnJvckNvZGUoKSB7XG4gICAgcmV0dXJuIDExMDAwO1xuICB9XG59XG5cbmV4cG9ydCB7IER1cGxpY2F0ZUtleUVycm9yIH07XG4iLCJjb25zdCBkZWZhdWx0RXhjbHVzaW9uc0Zyb21SZXNwb25zZSA9IFsnX192JywgJ3Bhc3N3b3JkJ107XG5cbmNsYXNzIEh0dHBSZXNwb25zZSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIG9wdGlvbnMgPSB7IHN0YXR1c0NvZGU6IDIwMCwgZGVsZXRlZDogbnVsbCB9KSB7XG4gICAgdGhpcy5zdGF0dXNDb2RlID0gb3B0aW9ucy5zdGF0dXNDb2RlIHx8IDIwMDtcbiAgICBsZXQgZmlsdGVyZWREYXRhID0gZGF0YTtcblxuICAgIC8vIGhhbmRsZXMgSlMgYXJyYXlzIG9yIG9iamVjdHNcbiAgICBpZiAodHlwZW9mIGZpbHRlcmVkRGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZpbHRlcmVkRGF0YSA9IHRoaXMuZmlsdGVyRGF0YShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZpbHRlcmVkRGF0YSkpKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZGVsZXRlZCkge1xuICAgICAgdGhpcy5kZWxldGVkID0gb3B0aW9ucy5kZWxldGVkO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXJlZERhdGEpKSB7XG4gICAgICB0aGlzLmRhdGEgPSBbLi4uZmlsdGVyZWREYXRhXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaWx0ZXJlZERhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLmRhdGEgPSB7IC4uLmZpbHRlcmVkRGF0YSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckRhdGEgPSAoZGF0YSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBkYXRhLm1hcCgoeCwgaW5kZXgpID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMoeCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgaWYgKGRlZmF1bHRFeGNsdXNpb25zRnJvbVJlc3BvbnNlLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhW2luZGV4XVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoa2V5ID09PSAnX2lkJykge1xuICAgICAgICAgICAgZGF0YVtpbmRleF1bJ2lkJ10gPSBkYXRhW2luZGV4XVtrZXldO1xuICAgICAgICAgICAgZGVsZXRlIGRhdGFbaW5kZXhdW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGhhbmRsZSBuZXN0ZWQgcHJvcGVydGllcyByZWN1cnNpdmVseVxuICAgICAgICAgIGlmIChrZXkgPT09ICdjYWxlbmRhclNldHRpbmdzJyB8fCBrZXkgPT09ICdjYWxlbmRhcicgfHwga2V5ID09PSAncm9sZXMnKSB7XG4gICAgICAgICAgICBkYXRhW2luZGV4XVtrZXldID0gdGhpcy5maWx0ZXJEYXRhKGRhdGFbaW5kZXhdW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChkZWZhdWx0RXhjbHVzaW9uc0Zyb21SZXNwb25zZS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5ID09PSAnX2lkJykge1xuICAgICAgICAgIGRhdGFbJ2lkJ10gPSBkYXRhW2tleV07XG4gICAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgICAgICAvLyBoYW5kbGUgbmVzdGVkIHByb3BlcnRpZXMgcmVjdXJzaXZlbHlcbiAgICAgICAgaWYgKGtleSA9PT0gJ2NhbGVuZGFyU2V0dGluZ3MnIHx8IGtleSA9PT0gJ2NhbGVuZGFyJyB8fCBrZXkgPT09ICdyb2xlcycpIHtcbiAgICAgICAgICBkYXRhW2tleV0gPSB0aGlzLmZpbHRlckRhdGEoZGF0YVtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIdHRwUmVzcG9uc2U7XG4iLCJpbXBvcnQgeyBVc2VyRmFjaW5nRXJyb3IgfSBmcm9tICcuL2Jhc2VFcnJvcnMnO1xuXG5jbGFzcyBCYWRSZXF1ZXN0RXJyb3IgZXh0ZW5kcyBVc2VyRmFjaW5nRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpKSB7XG4gICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgc3RhdHVzQ29kZSgpIHtcbiAgICByZXR1cm4gNDAwO1xuICB9XG59XG5cbmNsYXNzIE5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBVc2VyRmFjaW5nRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpKSB7XG4gICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgc3RhdHVzQ29kZSgpIHtcbiAgICByZXR1cm4gNDA0O1xuICB9XG59XG5cbmNsYXNzIEF1dGhvcml6YXRpb25FcnJvciBleHRlbmRzIFVzZXJGYWNpbmdFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucykpIHtcbiAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzdGF0dXNDb2RlKCkge1xuICAgIHJldHVybiA0MDE7XG4gIH1cbn1cblxuZXhwb3J0IHsgQmFkUmVxdWVzdEVycm9yLCBOb3RGb3VuZEVycm9yLCBBdXRob3JpemF0aW9uRXJyb3IgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGNhY2hlZE1vZHVsZS5lcnJvciAhPT0gdW5kZWZpbmVkKSB0aHJvdyBjYWNoZWRNb2R1bGUuZXJyb3I7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdHRyeSB7XG5cdFx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uaS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHsgaGFuZGxlcihleGVjT3B0aW9ucyk7IH0pO1xuXHRcdG1vZHVsZSA9IGV4ZWNPcHRpb25zLm1vZHVsZTtcblx0XHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuXHR9IGNhdGNoKGUpIHtcblx0XHRtb2R1bGUuZXJyb3IgPSBlO1xuXHRcdHRocm93IGU7XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0b3Jcbl9fd2VicGFja19yZXF1aXJlX18uaSA9IFtdO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uaHUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGID0gKCkgPT4gKFwibWFpbi5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc29uXCIpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI5ZWRiMTE0NzdlYWQ4YmQ4OWVmXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBjdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xudmFyIGluc3RhbGxlZE1vZHVsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmM7XG5cbi8vIG1vZHVsZSBhbmQgcmVxdWlyZSBjcmVhdGlvblxudmFyIGN1cnJlbnRDaGlsZE1vZHVsZTtcbnZhciBjdXJyZW50UGFyZW50cyA9IFtdO1xuXG4vLyBzdGF0dXNcbnZhciByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMgPSBbXTtcbnZhciBjdXJyZW50U3RhdHVzID0gXCJpZGxlXCI7XG5cbi8vIHdoaWxlIGRvd25sb2FkaW5nXG52YXIgYmxvY2tpbmdQcm9taXNlcyA9IDA7XG52YXIgYmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblxuLy8gVGhlIHVwZGF0ZSBpbmZvXG52YXIgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnM7XG52YXIgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckQgPSBjdXJyZW50TW9kdWxlRGF0YTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5pLnB1c2goZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0dmFyIG1vZHVsZSA9IG9wdGlvbnMubW9kdWxlO1xuXHR2YXIgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUob3B0aW9ucy5yZXF1aXJlLCBvcHRpb25zLmlkKTtcblx0bW9kdWxlLmhvdCA9IGNyZWF0ZU1vZHVsZUhvdE9iamVjdChvcHRpb25zLmlkLCBtb2R1bGUpO1xuXHRtb2R1bGUucGFyZW50cyA9IGN1cnJlbnRQYXJlbnRzO1xuXHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0b3B0aW9ucy5yZXF1aXJlID0gcmVxdWlyZTtcbn0pO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1ySSA9IHt9O1xuXG5mdW5jdGlvbiBjcmVhdGVSZXF1aXJlKHJlcXVpcmUsIG1vZHVsZUlkKSB7XG5cdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXHRpZiAoIW1lKSByZXR1cm4gcmVxdWlyZTtcblx0dmFyIGZuID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcblx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuXHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcblx0XHRcdFx0dmFyIHBhcmVudHMgPSBpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHM7XG5cdFx0XHRcdGlmIChwYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuXHRcdFx0XHRcdHBhcmVudHMucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcblx0XHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcblx0XHRcdH1cblx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuXHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcblx0XHRcdFx0XHRyZXF1ZXN0ICtcblx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuXHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHQpO1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcXVpcmUocmVxdWVzdCk7XG5cdH07XG5cdHZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiByZXF1aXJlW25hbWVdO1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJlcXVpcmVbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXHRmb3IgKHZhciBuYW1lIGluIHJlcXVpcmUpIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlcXVpcmUsIG5hbWUpICYmIG5hbWUgIT09IFwiZVwiKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcihuYW1lKSk7XG5cdFx0fVxuXHR9XG5cdGZuLmUgPSBmdW5jdGlvbiAoY2h1bmtJZCwgZmV0Y2hQcmlvcml0eSkge1xuXHRcdHJldHVybiB0cmFja0Jsb2NraW5nUHJvbWlzZShyZXF1aXJlLmUoY2h1bmtJZCwgZmV0Y2hQcmlvcml0eSkpO1xuXHR9O1xuXHRyZXR1cm4gZm47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZHVsZUhvdE9iamVjdChtb2R1bGVJZCwgbWUpIHtcblx0dmFyIF9tYWluID0gY3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZDtcblx0dmFyIGhvdCA9IHtcblx0XHQvLyBwcml2YXRlIHN0dWZmXG5cdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfYWNjZXB0ZWRFcnJvckhhbmRsZXJzOiB7fSxcblx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuXHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuXHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuXHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuXHRcdF9tYWluOiBfbWFpbixcblx0XHRfcmVxdWlyZVNlbGY6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gbWUucGFyZW50cy5zbGljZSgpO1xuXHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gX21haW4gPyB1bmRlZmluZWQgOiBtb2R1bGVJZDtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuXHRcdH0sXG5cblx0XHQvLyBNb2R1bGUgQVBJXG5cdFx0YWN0aXZlOiB0cnVlLFxuXHRcdGFjY2VwdDogZnVuY3Rpb24gKGRlcCwgY2FsbGJhY2ssIGVycm9ySGFuZGxlcikge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBbaV1dID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRlY2xpbmU6IGZ1bmN0aW9uIChkZXApIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG5cdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG5cdFx0fSxcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcblx0XHRcdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcblx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG5cdFx0XHRcdFx0KHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChcblx0XHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBpZ25vcmUgcmVxdWVzdHMgaW4gZXJyb3Igc3RhdGVzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIE1hbmFnZW1lbnQgQVBJXG5cdFx0Y2hlY2s6IGhvdENoZWNrLFxuXHRcdGFwcGx5OiBob3RBcHBseSxcblx0XHRzdGF0dXM6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRpZiAoIWwpIHJldHVybiBjdXJyZW50U3RhdHVzO1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0dmFyIGlkeCA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblxuXHRcdC8vIGluaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcblx0XHRkYXRhOiBjdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cblx0fTtcblx0Y3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuXHRyZXR1cm4gaG90O1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XG5cdGN1cnJlbnRTdGF0dXMgPSBuZXdTdGF0dXM7XG5cdHZhciByZXN1bHRzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG5cdFx0cmVzdWx0c1tpXSA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xufVxuXG5mdW5jdGlvbiB1bmJsb2NrKCkge1xuXHRpZiAoLS1ibG9ja2luZ1Byb21pc2VzID09PSAwKSB7XG5cdFx0c2V0U3RhdHVzKFwicmVhZHlcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuXHRcdFx0XHR2YXIgbGlzdCA9IGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nO1xuXHRcdFx0XHRibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsaXN0W2ldKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiB0cmFja0Jsb2NraW5nUHJvbWlzZShwcm9taXNlKSB7XG5cdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcblx0XHQvKiBmYWxsdGhyb3VnaCAqL1xuXHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRibG9ja2luZ1Byb21pc2VzKys7XG5cdFx0XHRwcm9taXNlLnRoZW4odW5ibG9jaywgdW5ibG9jayk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pIHtcblx0aWYgKGJsb2NraW5nUHJvbWlzZXMgPT09IDApIHJldHVybiBmbigpO1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcblx0XHRibG9ja2luZ1Byb21pc2VzV2FpdGluZy5wdXNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlc29sdmUoZm4oKSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBob3RDaGVjayhhcHBseU9uVXBkYXRlKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcImlkbGVcIikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuXHR9XG5cdHJldHVybiBzZXRTdGF0dXMoXCJjaGVja1wiKVxuXHRcdC50aGVuKF9fd2VicGFja19yZXF1aXJlX18uaG1yTSlcblx0XHQudGhlbihmdW5jdGlvbiAodXBkYXRlKSB7XG5cdFx0XHRpZiAoIXVwZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIikudGhlbihcblx0XHRcdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJwcmVwYXJlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgdXBkYXRlZE1vZHVsZXMgPSBbXTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDKS5yZWR1Y2UoZnVuY3Rpb24gKFxuXHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRrZXlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQ1trZXldKFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUuYyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlLnIsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5tLFxuXHRcdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZWRNb2R1bGVzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByb21pc2VzO1xuXHRcdFx0XHRcdH0sIFtdKVxuXHRcdFx0XHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHJldHVybiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRpZiAoYXBwbHlPblVwZGF0ZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShhcHBseU9uVXBkYXRlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHVwZGF0ZWRNb2R1bGVzO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwicmVhZHlcIikge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXMgKHN0YXRlOiBcIiArXG5cdFx0XHRcdFx0Y3VycmVudFN0YXR1cyArXG5cdFx0XHRcdFx0XCIpXCJcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiYWJvcnRcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0dmFyIGRpc3Bvc2VQcm9taXNlID0gc2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHR2YXIgYXBwbHlQcm9taXNlID0gc2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cblx0dmFyIGVycm9yO1xuXHR2YXIgcmVwb3J0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG5cdH07XG5cblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuYXBwbHkpIHtcblx0XHRcdHZhciBtb2R1bGVzID0gcmVzdWx0LmFwcGx5KHJlcG9ydEVycm9yKTtcblx0XHRcdGlmIChtb2R1bGVzKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKG1vZHVsZXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoW2Rpc3Bvc2VQcm9taXNlLCBhcHBseVByb21pc2VdKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcImZhaWxcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJpZGxlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4vLyBcIjFcIiBtZWFucyBcImxvYWRlZFwiLCBvdGhlcndpc2Ugbm90IGxvYWRlZCB5ZXRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfcmVxdWlyZSA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19yZXF1aXJlIHx8IHtcblx0XCJtYWluXCI6IDFcbn07XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8gY2h1bmsgaW5zdGFsbCBmdW5jdGlvbiBuZWVkZWRcblxuLy8gbm8gY2h1bmsgbG9hZGluZ1xuXG4vLyBubyBleHRlcm5hbCBpbnN0YWxsIGNodW5rXG5cbmZ1bmN0aW9uIGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpIHtcblx0dmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIuL1wiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5odShjaHVua0lkKSk7XG5cdHZhciB1cGRhdGVkTW9kdWxlcyA9IHVwZGF0ZS5tb2R1bGVzO1xuXHR2YXIgcnVudGltZSA9IHVwZGF0ZS5ydW50aW1lO1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIHVwZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKHVwZGF0ZWRNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gdXBkYXRlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0aWYodXBkYXRlZE1vZHVsZXNMaXN0KSB1cGRhdGVkTW9kdWxlc0xpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIGN1cnJlbnRVcGRhdGVSdW50aW1lLnB1c2gocnVudGltZSk7XG59XG5cbnZhciBjdXJyZW50VXBkYXRlQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGU7XG52YXIgY3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZVJ1bnRpbWU7XG5mdW5jdGlvbiBhcHBseUhhbmRsZXIob3B0aW9ucykge1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSBkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5mLnJlcXVpcmVIbXI7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB1bmRlZmluZWQ7XG5cdGZ1bmN0aW9uIGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyh1cGRhdGVNb2R1bGVJZCkge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG5cdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoYWluOiBbaWRdLFxuXHRcdFx0XHRpZDogaWRcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcblx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcblx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhbW9kdWxlIHx8XG5cdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcblx0XHRcdClcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW3BhcmVudElkXTtcblx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcblx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuXHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG5cdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG5cdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0aWQ6IHBhcmVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG5cdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG5cdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcblx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGJbaV07XG5cdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG5cdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cblx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuXHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKG1vZHVsZSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgbW9kdWxlLmlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG5cdFx0KTtcblx0fTtcblxuXHRmb3IgKHZhciBtb2R1bGVJZCBpbiBjdXJyZW50VXBkYXRlKSB7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRcdHZhciBuZXdNb2R1bGVGYWN0b3J5ID0gY3VycmVudFVwZGF0ZVttb2R1bGVJZF07XG5cdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG5cdFx0XHR2YXIgcmVzdWx0ID0gbmV3TW9kdWxlRmFjdG9yeVxuXHRcdFx0XHQ/IGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyhtb2R1bGVJZClcblx0XHRcdFx0OiB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cblx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuXHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG5cdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG5cdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcblx0XHRcdH1cblx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXJyb3I6IGFib3J0RXJyb3Jcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChkb0FwcGx5KSB7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gbmV3TW9kdWxlRmFjdG9yeTtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcblx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG5cdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuXHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGN1cnJlbnRVcGRhdGUgPSB1bmRlZmluZWQ7XG5cblx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuXHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG5cdGZvciAodmFyIGogPSAwOyBqIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbal07XG5cdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRpZiAoXG5cdFx0XHRtb2R1bGUgJiZcblx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgfHwgbW9kdWxlLmhvdC5fbWFpbikgJiZcblx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcblx0XHRcdGFwcGxpZWRVcGRhdGVbb3V0ZGF0ZWRNb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuXHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcblx0XHRcdCFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWRcblx0XHQpIHtcblx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcblx0XHRcdFx0bW9kdWxlOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRyZXF1aXJlOiBtb2R1bGUuaG90Ll9yZXF1aXJlU2VsZixcblx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWRcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcblxuXHRyZXR1cm4ge1xuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdH0pO1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHZhciBpZHg7XG5cdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcblx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdHZhciBkYXRhID0ge307XG5cblx0XHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG5cdFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRkaXNwb3NlSGFuZGxlcnNbal0uY2FsbChudWxsLCBkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckRbbW9kdWxlSWRdID0gZGF0YTtcblxuXHRcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuXHRcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuXHRcdFx0XHRkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuXHRcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG5cdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuXHRcdFx0dmFyIGRlcGVuZGVuY3k7XG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0bW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhcHBseTogZnVuY3Rpb24gKHJlcG9ydEVycm9yKSB7XG5cdFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcblx0XHRcdGZvciAodmFyIHVwZGF0ZU1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhhcHBsaWVkVXBkYXRlLCB1cGRhdGVNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bdXBkYXRlTW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVt1cGRhdGVNb2R1bGVJZF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcnVuIG5ldyBydW50aW1lIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFVwZGF0ZVJ1bnRpbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWVbaV0oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFjY2VwdENhbGxiYWNrID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlciA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHRpZiAoYWNjZXB0Q2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoYWNjZXB0Q2FsbGJhY2spICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goYWNjZXB0Q2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnMucHVzaChlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcy5wdXNoKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGNhbGxiYWNrcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBlcnJvckhhbmRsZXJzW2tdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnNba10oZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba11cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgbyA9IDA7IG8gPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBvKyspIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbb107XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGl0ZW0ucmVxdWlyZShtb2R1bGVJZCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjEpIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIxLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIxKTtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH1cblx0fTtcbn1cbl9fd2VicGFja19yZXF1aXJlX18uaG1ySS5yZXF1aXJlID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBhcHBseUhhbmRsZXJzKSB7XG5cdGlmICghY3VycmVudFVwZGF0ZSkge1xuXHRcdGN1cnJlbnRVcGRhdGUgPSB7fTtcblx0XHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gW107XG5cdFx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdH1cblx0aWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdO1xuXHR9XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLnJlcXVpcmUgPSBmdW5jdGlvbiAoXG5cdGNodW5rSWRzLFxuXHRyZW1vdmVkQ2h1bmtzLFxuXHRyZW1vdmVkTW9kdWxlcyxcblx0cHJvbWlzZXMsXG5cdGFwcGx5SGFuZGxlcnMsXG5cdHVwZGF0ZWRNb2R1bGVzTGlzdFxuKSB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0ge307XG5cdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gcmVtb3ZlZENodW5rcztcblx0Y3VycmVudFVwZGF0ZSA9IHJlbW92ZWRNb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcblx0XHRvYmpba2V5XSA9IGZhbHNlO1xuXHRcdHJldHVybiBvYmo7XG5cdH0sIHt9KTtcblx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0Y2h1bmtJZHMuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdGlmIChcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdCkge1xuXHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IGZhbHNlO1xuXHRcdH1cblx0fSk7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmYucmVxdWlyZUhtciA9IGZ1bmN0aW9uIChjaHVua0lkLCBwcm9taXNlcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzICYmXG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHQhY3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXVxuXHRcdFx0KSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpKTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiByZXF1aXJlKFwiLi9cIiArIF9fd2VicGFja19yZXF1aXJlX18uaG1yRigpKTtcblx0fSlbJ2NhdGNoJ10oZnVuY3Rpb24oZXJyKSB7IGlmKGVyci5jb2RlICE9PSAnTU9EVUxFX05PVF9GT1VORCcpIHRocm93IGVycjsgfSk7XG59IiwiIiwiLy8gbW9kdWxlIGNhY2hlIGFyZSB1c2VkIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc2VydmVyLWRldi5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJ1c2VyQ29sb3JzIiwic3lzdGVtQ29sb3JzIiwiYmFzZVVSTCIsImRlZmF1bHRWaWV3IiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX25leHQiLCJfdGhyb3ciLCJfZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJDYWxlbmRhclNlcnZpY2UiLCJVc2VyU2VydmljZSIsImRiIiwiY2FsZW5kYXJTZXJ2aWNlIiwiQ2FsZW5kYXIiLCJVc2VyIiwidXNlclNlcnZpY2UiLCJDYWxlbmRhckNvbnRyb2xsZXIiLCJzZXJ2aWNlIiwiX3RoaXMiLCJfcmVmIiwiX2NhbGxlZSIsInJlcSIsInJlcyIsImRhdGEiLCJ1c2VyUmVzcG9uc2UiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiYm9keSIsInVzZXJfaWQiLCJhdXRoIiwidXNlciIsImdldE9uZSIsInN0YXR1cyIsInNlbmQiLCJjYWxlbmRhclNldHRpbmdzIiwidDAiLCJfeCIsIl94MiIsIl94MyIsIl9yZWYyIiwiX2NhbGxlZTIiLCJyZXNwb25zZSIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInVwZGF0ZSIsInBhcmFtcyIsImNhbGVuZGFySWQiLCJzdGF0dXNDb2RlIiwiX3g0IiwiX3g1IiwiX3g2IiwiX3JlZjMiLCJfY2FsbGVlMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsInVwZGF0ZUNhbGVuZGFyU2V0dGluZ3MiLCJfeDciLCJfeDgiLCJfeDkiLCJfcmVmNCIsIl9jYWxsZWU0IiwidGFyZ2V0Q2FsZW5kYXJTZXR0aW5ncyIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImVudHJ5IiwiaWQiLCJ1c2VyRGVmYXVsdCIsIm1lc3NhZ2UiLCJlcnJvckNvZGUiLCJfeDEwIiwiX3gxMSIsIl94MTIiLCJFdmVudFNlcnZpY2UiLCJldmVudFNlcnZpY2UiLCJFdmVudCIsIkV2ZW50Q29udHJvbGxlciIsImNhbGVuZGFycyIsImNhbGVuZGFySWRzIiwiZ2V0VXNlckNhbGVuZGFycyIsIk5vdEZvdW5kRXJyb3IiLCJtYXAiLCJjYWxlbmRhciIsImdldFVzZXJFdmVudHMiLCJldmVudElkIiwiand0IiwiYXV0aEp3dCIsIlJlZnJlc2hUb2tlbiIsIlJvbGUiLCJVc2VyQ29udHJvbGxlciIsIl9yZXEkYm9keSRyb2xlcyIsIl9yZXEkYm9keSIsInJvbGVOYW1lcyIsInJvbGVzIiwiYXNzaWduUm9sZXMiLCJsb2dpblJlc3BvbnNlIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYWNjZXNzVG9rZW4iLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVF9LRVkiLCJkZWNvZGVkIiwiY2F0Y2hUb2tlbkVycm9yIiwicmVxdWVzdFRva2VuIiwicmVmcmVzaFRva2VuIiwicmVkaXJlY3QiLCJfcmVmNSIsIl9jYWxsZWU1IiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwiX3gxMyIsIl94MTQiLCJSb2xlU2VydmljZSIsIk1PTkdPX0hPU1ROQU1FIiwiTU9OR09fUE9SVCIsIk1PTkdPX0RCIiwiTU9OR09fVVNFUk5BTUUiLCJNT05HT19QQVNTV09SRCIsIk1PTkdPX1VSTCIsImNvbmNhdCIsIm1vbmdvb3NlIiwicm9sZVNlcnZpY2UiLCJpbml0aWFsaXplUm9sZXMiLCJjb3VudCIsImNvdW50RG9jdW1lbnRzIiwiY29uc29sZSIsImxvZyIsImluaXRpYWxpemVDYWxlbmRhcnMiLCJjb25uZWN0IiwiZXJyb3IiLCJleGl0IiwiVG9rZW5FeHBpcmVkRXJyb3IiLCJzZW5kU3RhdHVzIiwidmVyaWZ5VG9rZW4iLCJ0b2tlbiIsImhlYWRlcnMiLCJ2ZXJpZnlVUklBdXRoIiwidXJsIiwiZXZlbnQiLCJfY2FsZW5kYXIiLCJiYXNlVXJsIiwicm91dGUiLCJwYXRoIiwidXNlcklkIiwiZmluZE9uZSIsIl9pZCIsIiRlcSIsImlzQWRtaW4iLCJmaW5kQnlJZCIsImV4ZWMiLCJmaW5kIiwiJGluIiwiaXNNb2RlcmF0b3IiLCJ2ZXJpZnlSZWdpc3RyYXRpb24iLCJCYWRSZXF1ZXN0RXJyb3IiLCJjaGVja0R1cGxpY2F0ZVVzZXJuYW1lIiwiZmluZEJ5VXNlcm5hbWUiLCJjaGVja1JvbGVzRXhpc3QiLCJpbmNsdWRlcyIsIkR1cGxpY2F0ZUtleUVycm9yIiwic2NoZW1hIiwiU2NoZW1hIiwicmVxdWlyZWQiLCJwcmUiLCJ3YXNOZXciLCJpc05ldyIsImhhbmRsZUUxMTAwMCIsImNvZGUiLCJwb3N0Iiwic3lzdGVtQ2FsZW5kYXJzQ291bnQiLCJzZXR0aW5ncyIsInVzZXJDYWxlbmRhcnNDb3VudCIsIl9zZXR0aW5ncyIsInZpc2liaWxpdHkiLCJjb2xvciIsInVwZGF0ZU1hbnkiLCIkcHVzaCIsIkRhdGFiYXNlRXJyb3IiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsImRvYyIsIiRwdWxsIiwidXBkYXRlT25lIiwiaW5kZXgiLCJ1bmlxdWUiLCJtb2RlbCIsInRpdGxlIiwiZGVzYyIsInN0YXJ0IiwiZW5kIiwiYWxsRGF5IiwiQm9vbGVhbiIsInRpbWVab25lIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsImV4cGlyeURhdGUiLCJzdGF0aWNzIiwidmVyaWZ5RXhwaXJhdGlvbiIsImV4cGlyeURhdGVPYmoiLCJEYXRlIiwiZ2V0VGltZSIsImJjcnlwdCIsIlNBTFRfV09SS19GQUNUT1IiLCJtaW5MZW5ndGgiLCJzYWx0IiwiaXNNb2RpZmllZCIsImdlblNhbHQiLCJoYXNoIiwic3lzdGVtQ2FscyIsImRlZmF1bHRDYWwiLCJuZXdEZWZhdWx0Q2FsIiwiY2FsIiwiaWR4Iiwic2F2ZSIsIm1ldGhvZHMiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwiX3ZhbGlkYXRlUGFzc3dvcmQiLCJjYW5kaWRhdGVQYXNzd29yZCIsImNvbXBhcmUiLCJleHByZXNzIiwicm91dGVyIiwiUm91dGVyIiwicHV0IiwidXBkYXRlU2V0dGluZ3MiLCJnZXQiLCJ1c2VyUm91dGVyIiwiY2FsZW5kYXJSb3V0ZXIiLCJldmVudFJvdXRlciIsInVzZSIsInJlZ2lzdGVyIiwiY29ycyIsIlVzZXJGYWNpbmdFcnJvciIsIkJVSUxEX0RJUiIsIl9fZGlybmFtZSIsIkhUTUxfRklMRSIsIlBPUlQiLCJhcHAiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwic2VuZEZpbGUiLCJlcnIiLCJfZXJyJG1lc3NhZ2UiLCJoZWFkZXIiLCJfaSIsIl9PYmplY3QkZW50cmllcyIsImVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJfc2xpY2VkVG9BcnJheSIsImxpc3RlbiIsIkh0dHBSZXNwb25zZSIsIl9vYmoiLCJyZXN1bHQiLCJmaW5kQnlJZEFuZERlbGV0ZSIsImRlbGV0ZWQiLCJldmVudHMiLCJ2NCIsInV1aWR2NCIsIkF1dGhvcml6YXRpb25FcnJvciIsIlJlZnJlc2hUb2tlblNlcnZpY2UiLCJleHBpcmVkQXQiLCJfdG9rZW4iLCJzZXRTZWNvbmRzIiwiZ2V0U2Vjb25kcyIsIkpXVF9SRUZSRVNIX0VYUElSQVRJT04iLCJ0b0lTT1N0cmluZyIsImZpbmRCeUlkQW5kUmVtb3ZlIiwidXNlRmluZEFuZE1vZGlmeSIsInJvbGUiLCJyZWZyZXNoVG9rZW5Nb2RlbCIsInJvbGVNb2RlbCIsInZhbGlkYXRlZCIsInJlZnJlc2hUb2tlblJlc3BvbnNlIiwic2lnbiIsImV4cGlyZXNJbiIsIkpXVF9FWFBJUkFUSU9OIiwicmVmcmVzaFRva2VuU2VydmljZSIsImh0dHBSZXNwb25zZSIsImZsYXR0ZW5lZENhbGVuZGFyU2V0dGluZ3MiLCJwb3B1bGF0ZSIsIl9yZWY2IiwiX2NhbGxlZTYiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJuZXdQYXNzd29yZCIsIl9yZWY3IiwiX2NhbGxlZTciLCJjYWxlbmRhclNldHRpbmdzS2V5cyIsImRpZmZlZERhdGEiLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJ0cmVlIiwidW5kZWZpbmVkIiwiZmluZE9uZUFuZFVwZGF0ZSIsIiRzZXQiLCJhcnJheUZpbHRlcnMiLCJBcHBsaWNhdGlvbkVycm9yIiwiX0Vycm9yIiwiX2NhbGxTdXBlciIsIl9pbmhlcml0cyIsIl93cmFwTmF0aXZlU3VwZXIiLCJfQXBwbGljYXRpb25FcnJvciIsIl9BcHBsaWNhdGlvbkVycm9yMiIsIl9EYXRhYmFzZUVycm9yIiwib3B0aW9ucyIsImRlZmF1bHRFeGNsdXNpb25zRnJvbVJlc3BvbnNlIiwiQXJyYXkiLCJpc0FycmF5IiwieCIsImZpbHRlckRhdGEiLCJmaWx0ZXJlZERhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfVXNlckZhY2luZ0Vycm9yIiwiX1VzZXJGYWNpbmdFcnJvcjIiLCJfdGhpczIiLCJfaTIiLCJfT2JqZWN0JGVudHJpZXMyIiwiX09iamVjdCRlbnRyaWVzMiRfaSIsIl9Vc2VyRmFjaW5nRXJyb3IzIiwiX3RoaXMzIiwiX2kzIiwiX09iamVjdCRlbnRyaWVzMyIsIl9PYmplY3QkZW50cmllczMkX2kiXSwic291cmNlUm9vdCI6IiJ9