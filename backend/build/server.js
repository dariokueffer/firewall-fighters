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
            jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(loginResponse.accessToken, process.env.JWT_SECRET_KEY, /*#__PURE__*/function () {
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



var MONGO_HOSTNAME = process.env.MONGO_HOSTNAME;
var MONGO_PORT = process.env.MONGO_PORT;
var MONGO_DB = process.env.MONGO_DB;
var MONGO_URL = "mongodb://".concat(MONGO_HOSTNAME, ":").concat(MONGO_PORT, "/").concat(MONGO_DB);
var mongoose = models__WEBPACK_IMPORTED_MODULE_0__["default"].mongoose;
var Role = models__WEBPACK_IMPORTED_MODULE_0__["default"].Role;
var Calendar = models__WEBPACK_IMPORTED_MODULE_0__["default"].Calendar;
var roleService = new services_RoleService__WEBPACK_IMPORTED_MODULE_1__["default"](Role);
var calendarService = new services_CalendarService__WEBPACK_IMPORTED_MODULE_2__["default"](Calendar);
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(function () {
  console.log('Connected to MongoDB');
  // initialize roles
  Role.countDocuments(function (err, count) {
    if (count === 0) {
      roleService.create('user');
      roleService.create('moderator');
      roleService.create('admin');
    }
  });
}).then(function () {
  // initialize system calendars
  Calendar.find({
    user_id: 'system',
    name: 'US Holidays'
  }).countDocuments().exec(function (err, count) {
    if (err) {
      throw new Error(err);
    }
    if (count === 0) {
      var data = {
        name: 'US Holidays',
        user_id: 'system'
      };
      calendarService.create(data);
      console.log('Created US Holidays calendar.');
    }
  });
})["catch"](function (e) {
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
  jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET_KEY, function (e, decoded) {
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
var PORT = process.env.PORT || 3001;
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
            expiredAt.setSeconds(expiredAt.getSeconds() + Number(process.env.JWT_REFRESH_EXPIRATION));
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
            }, process.env.JWT_SECRET_KEY, {
              expiresIn: Number(process.env.JWT_EXPIRATION)
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
            }, process.env.JWT_SECRET_KEY, {
              expiresIn: Number(process.env.JWT_EXPIRATION)
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
/******/ 		__webpack_require__.h = () => ("2d5638acb83f4be4d359")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLEVBQUUsMkJBQTJCLGdEQUFnRDtXQUM3RTs7Ozs7VUUxZEE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9jb25maWcvYXBwQ29uZmlnLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL2NvbnRyb2xsZXJzL0NhbGVuZGFyQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9jb250cm9sbGVycy9FdmVudENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vY29udHJvbGxlcnMvVXNlckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vZGIvY29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9taWRkbGV3YXJlL2F1dGhKd3QuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vbWlkZGxld2FyZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9taWRkbGV3YXJlL3ZlcmlmeVJlZ2lzdHJhdGlvbi5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9tb2RlbHMvQ2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vbW9kZWxzL0V2ZW50LmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL21vZGVscy9SZWZyZXNoVG9rZW4uanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vbW9kZWxzL1JvbGUuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vbW9kZWxzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vbW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3JvdXRlcnMvY2FsZW5kYXJSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vcm91dGVycy9ldmVudFJvdXRlci5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9yb3V0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3JvdXRlcnMvdXNlclJvdXRlci5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9zZXJ2ZXItZGV2LmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3NlcnZpY2VzL0NhbGVuZGFyU2VydmljZS5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9zZXJ2aWNlcy9FdmVudFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vc2VydmljZXMvUmVmcmVzaFRva2VuU2VydmljZS5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9zZXJ2aWNlcy9Sb2xlU2VydmljZS5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9zZXJ2aWNlcy9Vc2VyU2VydmljZS5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi91dGlscy9iYXNlRXJyb3JzLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3V0aWxzL2RhdGFiYXNlRXJyb3JzLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3V0aWxzL2h0dHBSZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi91dGlscy91c2VyRmFjaW5nRXJyb3JzLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC9leHRlcm5hbCBjb21tb25qcyBcImJjcnlwdFwiIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC9leHRlcm5hbCBjb21tb25qcyBcImNvcnNcIiIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL2V4dGVybmFsIGNvbW1vbmpzIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL2V4dGVybmFsIGNvbW1vbmpzIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvZXh0ZXJuYWwgY29tbW9uanMgXCJ1dWlkXCIiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgdXBkYXRlIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0IHVwZGF0ZSBtYW5pZmVzdCBmaWxlbmFtZSIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC93ZWJwYWNrL3J1bnRpbWUvaG90IG1vZHVsZSByZXBsYWNlbWVudCIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9ydW50aW1lL3JlcXVpcmUgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXNlckNvbG9ycyA9IFsnMkU4NkMxJywgJzAwQTZEMCcsICcwMEMzQzcnLCAnMkREQkFCJywgJzlERUU4NyddO1xuXG5jb25zdCBzeXN0ZW1Db2xvcnMgPSBbJzM0NDk1RScsICc0RTU5NzYnLCAnNkQ2OThEJywgJzhGNzg5RicsICdCNDg4QUUnXTtcblxuY29uc3QgYmFzZVVSTCA9ICcvY2FsZW5kYXJhcHAnO1xuXG5jb25zdCBkZWZhdWx0VmlldyA9ICdtb250aCc7XG5cbmV4cG9ydCB7IHVzZXJDb2xvcnMsIHN5c3RlbUNvbG9ycywgYmFzZVVSTCwgZGVmYXVsdFZpZXcgfTtcbiIsImltcG9ydCBDYWxlbmRhclNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvQ2FsZW5kYXJTZXJ2aWNlJztcbmltcG9ydCBVc2VyU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9Vc2VyU2VydmljZSc7XG5pbXBvcnQgZGIgZnJvbSAnLi4vbW9kZWxzJztcblxuY29uc3QgY2FsZW5kYXJTZXJ2aWNlID0gbmV3IENhbGVuZGFyU2VydmljZShkYi5DYWxlbmRhciwgZGIuVXNlcik7XG5jb25zdCB1c2VyU2VydmljZSA9IG5ldyBVc2VyU2VydmljZShkYi5Vc2VyKTtcblxuY2xhc3MgQ2FsZW5kYXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3Ioc2VydmljZSkge1xuICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG4gICAgdGhpcy51c2VyU2VydmljZSA9IHVzZXJTZXJ2aWNlO1xuICB9XG5cbiAgY3JlYXRlID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIC4uLnJlcS5ib2R5LFxuICAgICAgICB1c2VyX2lkOiByZXEuYXV0aC51c2VyXG4gICAgICB9O1xuXG4gICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuY3JlYXRlKGRhdGEpO1xuXG4gICAgICBjb25zdCB1c2VyUmVzcG9uc2UgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmdldE9uZShyZXEuYXV0aC51c2VyKTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHVzZXJSZXNwb25zZS5jYWxlbmRhclNldHRpbmdzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZShyZXEucGFyYW1zLmNhbGVuZGFySWQsIHJlcS5ib2R5KTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzQ29kZSkuc2VuZChyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlU2V0dGluZ3MgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZUNhbGVuZGFyU2V0dGluZ3MocmVxLmF1dGgudXNlciwgcmVxLmJvZHkpO1xuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXNDb2RlKS5zZW5kKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgIH1cbiAgfTtcblxuICBkZWxldGUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlclJlc3BvbnNlID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5nZXRPbmUocmVxLmF1dGgudXNlcik7XG5cbiAgICAgIGNvbnN0IHRhcmdldENhbGVuZGFyU2V0dGluZ3MgPSB1c2VyUmVzcG9uc2UuY2FsZW5kYXJTZXR0aW5ncy5maWx0ZXIoXG4gICAgICAgIChlbnRyeSkgPT4gZW50cnkuaWQgPT09IHJlcS5wYXJhbXMuY2FsZW5kYXJJZFxuICAgICAgKTtcblxuICAgICAgaWYgKHRhcmdldENhbGVuZGFyU2V0dGluZ3MudXNlckRlZmF1bHQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgIC5zdGF0dXMoNDAzKVxuICAgICAgICAgIC5zZW5kKHsgbWVzc2FnZTogJ0Nhbm5vdCBkZWxldGUgZGVmYXVsdCBjYWxlbmRhci4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCBlcnJvckNvZGU6ICdjYWxlbmRhcicgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmRlbGV0ZShyZXEucGFyYW1zLmNhbGVuZGFySWQpO1xuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXNDb2RlKS5zZW5kKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhbGVuZGFyQ29udHJvbGxlcihjYWxlbmRhclNlcnZpY2UsIHVzZXJTZXJ2aWNlKTtcbiIsImltcG9ydCBFdmVudFNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvRXZlbnRTZXJ2aWNlJztcbmltcG9ydCBDYWxlbmRhclNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvQ2FsZW5kYXJTZXJ2aWNlJztcbmltcG9ydCBkYiBmcm9tICcuLi9tb2RlbHMnO1xuXG5jb25zdCBldmVudFNlcnZpY2UgPSBuZXcgRXZlbnRTZXJ2aWNlKGRiLkV2ZW50KTtcbmNvbnN0IGNhbGVuZGFyU2VydmljZSA9IG5ldyBDYWxlbmRhclNlcnZpY2UoZGIuQ2FsZW5kYXIpO1xuXG5jbGFzcyBFdmVudENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihzZXJ2aWNlLCBjYWxlbmRhclNlcnZpY2UpIHtcbiAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xuICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlID0gY2FsZW5kYXJTZXJ2aWNlO1xuICB9XG5cbiAgY3JlYXRlID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZShyZXEuYm9keSk7XG5cbiAgICAgIHJldHVybiByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1c0NvZGUpLnNlbmQocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuICB9O1xuXG4gIGdldFVzZXJFdmVudHMgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FsZW5kYXJzID0gYXdhaXQgdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0VXNlckNhbGVuZGFycyhyZXEuYXV0aC51c2VyKTtcblxuICAgICAgaWYgKCFjYWxlbmRhcnMgfHwgY2FsZW5kYXJzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kRXJyb3IoJ05vIG1hdGNoaW5nIGNhbGVuZGFycyBmb3VuZCcsIHsgZXJyb3JDb2RlOiAnY2FsZW5kYXInIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWxlbmRhcklkcyA9IGNhbGVuZGFycy5kYXRhLm1hcCgoY2FsZW5kYXIpID0+IGNhbGVuZGFyLmlkKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0VXNlckV2ZW50cyhjYWxlbmRhcklkcyk7XG5cbiAgICAgIHJldHVybiByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1c0NvZGUpLnNlbmQocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZSA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS51cGRhdGUocmVxLmJvZHkpO1xuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXNDb2RlKS5zZW5kKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgIH1cbiAgfTtcblxuICBkZWxldGUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZGVsZXRlKHJlcS5wYXJhbXMuZXZlbnRJZCk7XG5cbiAgICAgIHJldHVybiByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1c0NvZGUpLnNlbmQocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRXZlbnRDb250cm9sbGVyKGV2ZW50U2VydmljZSwgY2FsZW5kYXJTZXJ2aWNlKTtcbiIsImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCBkYiBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL1VzZXJTZXJ2aWNlJztcbmltcG9ydCBhdXRoSnd0IGZyb20gJy4uL21pZGRsZXdhcmUvYXV0aEp3dCc7XG5cbmNvbnN0IHVzZXJTZXJ2aWNlID0gbmV3IFVzZXJTZXJ2aWNlKGRiLlVzZXIsIGRiLlJlZnJlc2hUb2tlbiwgZGIuUm9sZSwgZGIuQ2FsZW5kYXIsIGRiLkV2ZW50KTtcblxuY2xhc3MgVXNlckNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihzZXJ2aWNlKSB7XG4gICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcbiAgfVxuXG4gIC8vIGNyZWF0ZSB1c2VyLCBhc3NpZ24gcm9sZXNcbiAgcmVnaXN0ZXIgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGUocmVxLmJvZHkpO1xuXG4gICAgICBjb25zdCByb2xlTmFtZXMgPSByZXEuYm9keT8ucm9sZXMgPz8gWyd1c2VyJ107XG5cbiAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5hc3NpZ25Sb2xlcyh1c2VyLCByb2xlTmFtZXMpO1xuXG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgIH1cbiAgfTtcblxuICBsb2dpbiA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBsb2dpblJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmxvZ2luKHJlcS5ib2R5LnVzZXJuYW1lLCByZXEuYm9keS5wYXNzd29yZCk7XG5cbiAgICAgIGlmICghbG9naW5SZXNwb25zZS5hY2Nlc3NUb2tlbikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnTm8gdG9rZW4gZm91bmQhJywgZXJyb3JDb2RlOiAndXNlcicgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIERlY29kZSB0b2tlbiBhbmQgbG9va3VwIGZ1bGwgdXNlciBkb2NcbiAgICAgIGp3dC52ZXJpZnkobG9naW5SZXNwb25zZS5hY2Nlc3NUb2tlbiwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVF9LRVksIGFzeW5jIChlLCBkZWNvZGVkKSA9PiB7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGF1dGhKd3QuY2F0Y2hUb2tlbkVycm9yKGUsIHJlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1c2VyUmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0T25lKGRlY29kZWQuaWQpO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgICAgICAgIC4uLmxvZ2luUmVzcG9uc2UsXG4gICAgICAgICAgLi4udXNlclJlc3BvbnNlXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgIH1cbiAgfTtcblxuICByZWZyZXNoVG9rZW4gPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBjb25zdCB7IHJlZnJlc2hUb2tlbjogcmVxdWVzdFRva2VuIH0gPSByZXEuYm9keTtcblxuICAgIGlmICghcmVxdWVzdFRva2VuKSB7XG4gICAgICAvLyBSZXF1ZXN0IHRva2VuIGlzIG1pc3NpbmdcbiAgICAgIHJldHVybiByZXMucmVkaXJlY3QoJy9sb2dpbicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5yZWZyZXNoVG9rZW4ocmVxdWVzdFRva2VuKTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzQ29kZSkuc2VuZChyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZShyZXEuYXV0aC51c2VyLCByZXEuYm9keSk7XG5cbiAgICAgIHJldHVybiByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1c0NvZGUpLnNlbmQocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlckNvbnRyb2xsZXIodXNlclNlcnZpY2UpO1xuIiwiaW1wb3J0IGRiIGZyb20gJ21vZGVscyc7XG5pbXBvcnQgUm9sZVNlcnZpY2UgZnJvbSAnc2VydmljZXMvUm9sZVNlcnZpY2UnO1xuaW1wb3J0IENhbGVuZGFyU2VydmljZSBmcm9tICdzZXJ2aWNlcy9DYWxlbmRhclNlcnZpY2UnO1xuXG5jb25zdCBNT05HT19IT1NUTkFNRSA9IHByb2Nlc3MuZW52Lk1PTkdPX0hPU1ROQU1FO1xuY29uc3QgTU9OR09fUE9SVCA9IHByb2Nlc3MuZW52Lk1PTkdPX1BPUlQ7XG5jb25zdCBNT05HT19EQiA9IHByb2Nlc3MuZW52Lk1PTkdPX0RCO1xuY29uc3QgTU9OR09fVVJMID0gYG1vbmdvZGI6Ly8ke01PTkdPX0hPU1ROQU1FfToke01PTkdPX1BPUlR9LyR7TU9OR09fREJ9YDtcblxuY29uc3QgbW9uZ29vc2UgPSBkYi5tb25nb29zZTtcbmNvbnN0IFJvbGUgPSBkYi5Sb2xlO1xuY29uc3QgQ2FsZW5kYXIgPSBkYi5DYWxlbmRhcjtcblxuY29uc3Qgcm9sZVNlcnZpY2UgPSBuZXcgUm9sZVNlcnZpY2UoUm9sZSk7XG5jb25zdCBjYWxlbmRhclNlcnZpY2UgPSBuZXcgQ2FsZW5kYXJTZXJ2aWNlKENhbGVuZGFyKTtcblxubW9uZ29vc2VcbiAgLmNvbm5lY3QoTU9OR09fVVJMLCB7XG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZVxuICB9KVxuICAudGhlbigoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBNb25nb0RCJyk7XG4gICAgLy8gaW5pdGlhbGl6ZSByb2xlc1xuICAgIFJvbGUuY291bnREb2N1bWVudHMoKGVyciwgY291bnQpID0+IHtcbiAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICByb2xlU2VydmljZS5jcmVhdGUoJ3VzZXInKTtcbiAgICAgICAgcm9sZVNlcnZpY2UuY3JlYXRlKCdtb2RlcmF0b3InKTtcbiAgICAgICAgcm9sZVNlcnZpY2UuY3JlYXRlKCdhZG1pbicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KVxuICAudGhlbigoKSA9PiB7XG4gICAgLy8gaW5pdGlhbGl6ZSBzeXN0ZW0gY2FsZW5kYXJzXG4gICAgQ2FsZW5kYXIuZmluZCh7IHVzZXJfaWQ6ICdzeXN0ZW0nLCBuYW1lOiAnVVMgSG9saWRheXMnIH0pXG4gICAgICAuY291bnREb2N1bWVudHMoKVxuICAgICAgLmV4ZWMoZnVuY3Rpb24gKGVyciwgY291bnQpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBuYW1lOiAnVVMgSG9saWRheXMnLFxuICAgICAgICAgICAgdXNlcl9pZDogJ3N5c3RlbSdcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgY2FsZW5kYXJTZXJ2aWNlLmNyZWF0ZShkYXRhKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRlZCBVUyBIb2xpZGF5cyBjYWxlbmRhci4nKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0pXG4gIC5jYXRjaCgoZSkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Nvbm5lY3Rpb24gZXJyb3InLCBlKTtcbiAgICBwcm9jZXNzLmV4aXQoKTtcbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRiO1xuIiwiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IGRiIGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgQ2FsZW5kYXJTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL0NhbGVuZGFyU2VydmljZSc7XG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvVXNlclNlcnZpY2UnO1xuaW1wb3J0IEV2ZW50U2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9FdmVudFNlcnZpY2UnO1xuXG5jb25zdCBVc2VyID0gZGIuVXNlcjtcbmNvbnN0IFJlZnJlc2hUb2tlbiA9IGRiLlJlZnJlc2hUb2tlbjtcbmNvbnN0IFJvbGUgPSBkYi5Sb2xlO1xuY29uc3QgQ2FsZW5kYXIgPSBkYi5DYWxlbmRhcjtcbmNvbnN0IEV2ZW50ID0gZGIuRXZlbnQ7XG5jb25zdCB7IFRva2VuRXhwaXJlZEVycm9yIH0gPSBqd3Q7XG5cbmNvbnN0IGNhbGVuZGFyU2VydmljZSA9IG5ldyBDYWxlbmRhclNlcnZpY2UoQ2FsZW5kYXIpO1xuY29uc3QgdXNlclNlcnZpY2UgPSBuZXcgVXNlclNlcnZpY2UoVXNlciwgUmVmcmVzaFRva2VuLCBSb2xlKTtcbmNvbnN0IGV2ZW50U2VydmljZSA9IG5ldyBFdmVudFNlcnZpY2UoRXZlbnQpO1xuXG5jb25zdCBjYXRjaFRva2VuRXJyb3IgPSAoZSwgcmVzKSA9PiB7XG4gIGlmIChlIGluc3RhbmNlb2YgVG9rZW5FeHBpcmVkRXJyb3IpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkISBBY2Nlc3MgVG9rZW4gd2FzIGV4cGlyZWQhJywgZXJyb3JDb2RlOiAnYWNjZXNzdG9rZW4nIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQhJywgZXJyb3JDb2RlOiAnYWNjZXNzdG9rZW4nIH0pO1xufTtcblxuY29uc3QgdmVyaWZ5VG9rZW4gPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVyc1sneC1hY2Nlc3MtdG9rZW4nXTtcblxuICBpZiAoIXRva2VuKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKHsgbWVzc2FnZTogJ05vIHRva2VuIHByb3ZpZGVkIScsIGVycm9yQ29kZTogJ2FjY2Vzc3Rva2VuJyB9KTtcbiAgfVxuXG4gIC8vIERlY29kZSB0b2tlbiBhbmQgYXR0YWNoIHVzZXIgaW5mbyB0byByZXF1ZXN0XG4gIGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVRfS0VZLCAoZSwgZGVjb2RlZCkgPT4ge1xuICAgIGlmIChlKSB7XG4gICAgICByZXR1cm4gY2F0Y2hUb2tlbkVycm9yKGUsIHJlcyk7XG4gICAgfVxuXG4gICAgcmVxLmF1dGggPSB7XG4gICAgICB1c2VyOiBkZWNvZGVkLmlkXG4gICAgfTtcblxuICAgIHJldHVybiBuZXh0KCk7XG4gIH0pO1xufTtcblxuLy8gQ2hlY2tzIGF1dGhlZCB1c2VyIGFnYWluc3QgcmVxdWVzdCBwYXJhbXMgZm9yIHJlc291cmNlIGF1dGhvcml6YXRpb25cbi8vIENhbiBiZSByZXBsYWNlZCB3aXRoIGFuIGFjY2VzcyBjb250cm9sIGxpc3Qgb3Igc2ltaWxhclxuY29uc3QgdmVyaWZ5VVJJQXV0aCA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCB1cmwgPSByZXEuYmFzZVVybCArIHJlcS5yb3V0ZS5wYXRoO1xuXG4gIHN3aXRjaCAodXJsKSB7XG4gICAgY2FzZSBgJHtyZXEuYmFzZVVybH0vOnVzZXJJZGA6IHtcbiAgICAgIGlmIChyZXEuYXV0aC51c2VyICE9PSByZXEucGFyYW1zLnVzZXJJZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnUmVxdWlyZXMgYWRtaW4gcm9sZSEnLCBlcnJvckNvZGU6ICdyb2xlJyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfVxuXG4gICAgY2FzZSBgJHtyZXEuYmFzZVVybH0vOmNhbGVuZGFySWRgOiB7XG4gICAgICAvLyBmZXRjaCB0YXJnZXQgY2FsZW5kYXJcbiAgICAgIGNvbnN0IGNhbGVuZGFyID0gYXdhaXQgY2FsZW5kYXJTZXJ2aWNlLmdldE9uZShyZXEucGFyYW1zLmNhbGVuZGFySWQpO1xuXG4gICAgICBpZiAocmVxLmF1dGgudXNlciAhPT0gY2FsZW5kYXIuZGF0YS51c2VyX2lkKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCh7IG1lc3NhZ2U6ICdSZXF1aXJlcyBhZG1pbiByb2xlIScsIGVycm9yQ29kZTogJ3JvbGUnIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9XG5cbiAgICBjYXNlIGAke3JlcS5iYXNlVXJsfS86Y2FsZW5kYXJJZC9zZXR0aW5nc2A6IHtcbiAgICAgIC8vIGZldGNoIHRhcmdldCB1c2VyXG4gICAgICAvLyBNb25nb29zZSByZXR1cm5zIG51bGwgZm9yIC5maW5kT25lIHF1ZXJ5IHdpdGggbm8gbWF0Y2hlc1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7XG4gICAgICAgIF9pZDogcmVxLmF1dGgudXNlcixcbiAgICAgICAgJ2NhbGVuZGFyU2V0dGluZ3MuY2FsZW5kYXInOiB7XG4gICAgICAgICAgJGVxOiByZXEucGFyYW1zLmNhbGVuZGFySWRcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnUmVxdWlyZXMgYWRtaW4gcm9sZSEnLCBlcnJvckNvZGU6ICdyb2xlJyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfVxuXG4gICAgY2FzZSBgJHtyZXEuYmFzZVVybH0vOmV2ZW50SWRgOiB7XG4gICAgICAvLyBmZXRjaCB0YXJnZXQgZXZlbnRcbiAgICAgIGNvbnN0IGV2ZW50ID0gYXdhaXQgZXZlbnRTZXJ2aWNlLmdldE9uZShyZXEucGFyYW1zLmV2ZW50SWQpO1xuICAgICAgLy8gZmV0Y2ggY29ycmVzcG9uZGluZyBjYWxlbmRhclxuICAgICAgY29uc3QgY2FsZW5kYXIgPSBhd2FpdCBjYWxlbmRhclNlcnZpY2UuZ2V0T25lKGV2ZW50LmRhdGEuY2FsZW5kYXIpO1xuXG4gICAgICBpZiAocmVxLmF1dGgudXNlciAhPT0gY2FsZW5kYXIuZGF0YS51c2VyX2lkKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCh7IG1lc3NhZ2U6ICdSZXF1aXJlcyBhZG1pbiByb2xlIScsIGVycm9yQ29kZTogJ3JvbGUnIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKHsgbWVzc2FnZTogJ1JlcXVpcmVzIGFkbWluIHJvbGUhJywgZXJyb3JDb2RlOiAncm9sZScgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGlzQWRtaW4gPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgVXNlci5maW5kQnlJZChyZXEuYXV0aC51c2VyKS5leGVjKChlLCB1c2VyKSA9PiB7XG4gICAgaWYgKGUpIHtcbiAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgIH1cblxuICAgIC8vIE1vbmdvb3NlIHJldHVybnMgW10gZm9yIC5maW5kIHF1ZXJ5IHdpdGggbm8gbWF0Y2hlc1xuICAgIFJvbGUuZmluZChcbiAgICAgIHtcbiAgICAgICAgaWQ6IHsgJGluOiB1c2VyLnJvbGVzIH1cbiAgICAgIH0sXG4gICAgICAoZSwgcm9sZXMpID0+IHtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICByZXR1cm4gbmV4dChlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9sZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAocm9sZXNbaV0ubmFtZSA9PT0gJ2FkbWluJykge1xuICAgICAgICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnUmVxdWlyZSBBZG1pbiBSb2xlIScsIGVycm9yQ29kZTogJ3JvbGUnIH0pO1xuICAgICAgfVxuICAgICk7XG4gIH0pO1xufTtcblxuY29uc3QgaXNNb2RlcmF0b3IgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgVXNlci5maW5kQnlJZChyZXEuYXV0aC51c2VyKS5leGVjKChlLCB1c2VyKSA9PiB7XG4gICAgaWYgKGUpIHtcbiAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgIH1cblxuICAgIC8vIE1vbmdvb3NlIHJldHVybnMgW10gZm9yIC5maW5kIHF1ZXJ5IHdpdGggbm8gbWF0Y2hlc1xuICAgIFJvbGUuZmluZChcbiAgICAgIHtcbiAgICAgICAgaWQ6IHsgJGluOiB1c2VyLnJvbGVzIH1cbiAgICAgIH0sXG4gICAgICAoZSwgcm9sZXMpID0+IHtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICByZXR1cm4gbmV4dChlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9sZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAocm9sZXNbaV0ubmFtZSA9PT0gJ21vZGVyYXRvcicpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKHsgbWVzc2FnZTogJ1JlcXVpcmUgTW9kZXJhdG9yIFJvbGUhJywgZXJyb3JDb2RlOiAncm9sZScgfSk7XG4gICAgICB9XG4gICAgKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhdXRoSnd0ID0ge1xuICB2ZXJpZnlUb2tlbixcbiAgdmVyaWZ5VVJJQXV0aCxcbiAgaXNBZG1pbixcbiAgaXNNb2RlcmF0b3Jcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhKd3Q7XG4iLCJpbXBvcnQgYXV0aEp3dCBmcm9tICcuL2F1dGhKd3QnO1xuaW1wb3J0IHZlcmlmeVJlZ2lzdHJhdGlvbiBmcm9tICcuL3ZlcmlmeVJlZ2lzdHJhdGlvbic7XG5cbmV4cG9ydCB7IGF1dGhKd3QsIHZlcmlmeVJlZ2lzdHJhdGlvbiB9O1xuIiwiaW1wb3J0IGRiIGZyb20gJy4uL21vZGVscyc7XG5cbmltcG9ydCB7IEJhZFJlcXVlc3RFcnJvciB9IGZyb20gJy4uL3V0aWxzL3VzZXJGYWNpbmdFcnJvcnMnO1xuXG5jb25zdCBjaGVja0R1cGxpY2F0ZVVzZXJuYW1lID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgZGIuVXNlci5maW5kQnlVc2VybmFtZShyZXEuYm9keS51c2VybmFtZSkudGhlbigodXNlcikgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEJhZFJlcXVlc3RFcnJvcignVXNlcm5hbWUgaXMgYWxyZWFkeSBpbiB1c2UnLCB7IGVycm9yQ29kZTogJ3VzZXJuYW1lJyB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBuZXh0KCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbmV4dChlKTtcbiAgfVxufTtcblxuY29uc3QgY2hlY2tSb2xlc0V4aXN0ID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIC8vIEF0dGFjaGluZyByb2xlcyB0byByZWdpc3RyYXRpb24gcmVxdWVzdCBpcyBvcHRpb25hbFxuICBpZiAoIXJlcS5ib2R5LnJvbGVzIHx8IHJlcS5ib2R5LnJvbGVzPy5sZW5ndGggPCAxKSByZXR1cm4gbmV4dCgpO1xuXG4gIC8vIENoZWNrIGF0dGFjaGVkIHJvbGVzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVxLmJvZHkucm9sZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXJvbGVzLmluY2x1ZGVzKHJlcS5ib2R5LnJvbGVzW2ldKSkge1xuICAgICAgdGhyb3cgbmV3IEJhZFJlcXVlc3RFcnJvcihgUm9sZSAke3JlcS5ib2R5LnJvbGVzW2ldfSBkb2VzIG5vdCBleGlzdCFgLCB7IGVycm9yQ29kZTogJ3JvbGUnIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXh0KCk7XG59O1xuXG5jb25zdCB2ZXJpZnlSZWdpc3RyYXRpb24gPSB7XG4gIGNoZWNrRHVwbGljYXRlVXNlcm5hbWUsXG4gIGNoZWNrUm9sZXNFeGlzdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5UmVnaXN0cmF0aW9uO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5pbXBvcnQgeyBEdXBsaWNhdGVLZXlFcnJvciB9IGZyb20gJy4uL3V0aWxzL2RhdGFiYXNlRXJyb3JzJztcbmltcG9ydCB7IHVzZXJDb2xvcnMsIHN5c3RlbUNvbG9ycyB9IGZyb20gJ2NvbmZpZy9hcHBDb25maWcnO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgbmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9LFxuICB1c2VyX2lkOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICdzeXN0ZW0nXG4gIH1cbn0pO1xuXG4vLyBwcmVzZXJ2aW5nIGlzTmV3IHN0YXRlIGZvciAncG9zdCcgbWlkZGxld2FyZVxuc2NoZW1hLnByZSgnc2F2ZScsIGZ1bmN0aW9uIChuZXh0KSB7XG4gIHRoaXMud2FzTmV3ID0gdGhpcy5pc05ldztcbiAgbmV4dCgpO1xufSk7XG5cbi8vIHNjaGVtYSBtaWRkbGV3YXJlIHRvIGFwcGx5IGFmdGVyIHNhdmluZ1xuY29uc3QgaGFuZGxlRTExMDAwID0gKGVycm9yLCByZXMsIG5leHQpID0+IHtcbiAgaWYgKGVycm9yLm5hbWUgPT09ICdNb25nb0Vycm9yJyAmJiBlcnJvci5jb2RlID09PSAxMTAwMCkge1xuICAgIHRocm93IG5ldyBEdXBsaWNhdGVLZXlFcnJvcignVGhlcmUgd2FzIGEgY29uZmxpY3Qgd2l0aCBhbiBleGlzdGluZyBlbnRyeS4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCB7XG4gICAgICBlcnJvckNvZGU6ICdjYWxlbmRhcidcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV4dCgpO1xuICB9XG59O1xuXG5zY2hlbWEucG9zdCgnc2F2ZScsIGhhbmRsZUUxMTAwMCk7XG5zY2hlbWEucG9zdCgnZmluZE9uZUFuZFVwZGF0ZScsIGhhbmRsZUUxMTAwMCk7XG5cbi8vIEVtYmVkIGNhbGVuZGFyIHNldHRpbmdzIGluIGNvcnJlc3BvbmRpbmcgdXNlciBkb2MocylcbnNjaGVtYS5wb3N0KCdzYXZlJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5pZCAmJiB0aGlzLndhc05ldykge1xuICAgIHRyeSB7XG4gICAgICAvLyBzeXN0ZW0gY2FsZW5kYXIgY3JlYXRlZFxuICAgICAgaWYgKHRoaXMudXNlcl9pZCA9PT0gJ3N5c3RlbScpIHtcbiAgICAgICAgLy8gY291bnQgc3lzdGVtIGNhbHNcbiAgICAgICAgY29uc3Qgc3lzdGVtQ2FsZW5kYXJzQ291bnQgPSBhd2FpdCBDYWxlbmRhci5jb3VudERvY3VtZW50cyh7IHVzZXJfaWQ6ICdzeXN0ZW0nIH0pO1xuXG4gICAgICAgIC8vIHByZXBhcmUgY2FsZW5kYXIgc2V0dGluZ3Mgb2JqZWN0XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgICAgIGNhbGVuZGFyOiB0aGlzLmlkLFxuICAgICAgICAgIHVzZXJEZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICB2aXNpYmlsaXR5OiB0cnVlLFxuICAgICAgICAgIGNvbG9yOiBgIyR7c3lzdGVtQ29sb3JzWyhzeXN0ZW1DYWxlbmRhcnNDb3VudCAtIDEpICUgc3lzdGVtQ29sb3JzLmxlbmd0aF19YFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGVtYmVkIGluIGFsbCB1c2VyIGRvY3NcbiAgICAgICAgYXdhaXQgVXNlci51cGRhdGVNYW55KHt9LCB7ICRwdXNoOiB7IGNhbGVuZGFyU2V0dGluZ3M6IHNldHRpbmdzIH0gfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1c2VyIGNhbGVuZGFyIGNyZWF0ZWRcblxuICAgICAgICAvLyBjb3VudCB1c2VyIGNhbGVuZGFyc1xuICAgICAgICBjb25zdCB1c2VyQ2FsZW5kYXJzQ291bnQgPSBhd2FpdCBDYWxlbmRhci5jb3VudERvY3VtZW50cyh7IHVzZXJfaWQ6IHRoaXMudXNlcl9pZCB9KTtcblxuICAgICAgICBpZiAodXNlckNhbGVuZGFyc0NvdW50IDwgMSkge1xuICAgICAgICAgIHRocm93IG5ldyBEYXRhYmFzZUVycm9yKCdNYXRjaGluZyBjYWxlbmRhcihzKSBub3QgZm91bmQnLCB7XG4gICAgICAgICAgICBlcnJvckNvZGU6ICdjYWxlbmRhcidcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHVzZXIgY2FsZW5kYXIocykgZm91bmQsIHByb2Nlc3MgY2FsZW5kYXIgc2V0dGluZ3NcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICAgICAgY2FsZW5kYXI6IHRoaXMuaWQsXG4gICAgICAgICAgdmlzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICBjb2xvcjogYCMke3VzZXJDb2xvcnNbKHVzZXJDYWxlbmRhcnNDb3VudCAtIDEpICUgdXNlckNvbG9ycy5sZW5ndGhdfWBcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzZXQgdXNlckRlZmF1bHQgcHJvcGVydHlcbiAgICAgICAgaWYgKHVzZXJDYWxlbmRhcnNDb3VudCA9PT0gMSkge1xuICAgICAgICAgIHNldHRpbmdzLnVzZXJEZWZhdWx0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXR0aW5ncy51c2VyRGVmYXVsdCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZW1iZWQgY2FsZW5kYXIgc2V0dGluZ3MgaW4gdXNlciBkb2NcbiAgICAgICAgYXdhaXQgVXNlci5maW5kQnlJZEFuZFVwZGF0ZSh0aGlzLnVzZXJfaWQsIHsgJHB1c2g6IHsgY2FsZW5kYXJTZXR0aW5nczogc2V0dGluZ3MgfSB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZSk7XG4gICAgfVxuICB9XG59KTtcblxuLy8gRGVsZXRlIGNhbGVuZGFyIHNldHRpbmdzIGluIGNvcnJlc3BvbmRpbmcgdXNlciBkb2MocylcbnNjaGVtYS5wb3N0KCdmaW5kT25lQW5kRGVsZXRlJywgYXN5bmMgZnVuY3Rpb24gKGRvYykge1xuICB0cnkge1xuICAgIC8vIHN5c3RlbSBjYWxlbmRhciBkZWxldGVkXG4gICAgaWYgKGRvYy51c2VyX2lkID09PSAnc3lzdGVtJykge1xuICAgICAgLy8gZGVsZXRlIGNhbGVuZGFyIHNldHRpbmdzIGZvciBhbGwgdXNlcnNcbiAgICAgIGF3YWl0IFVzZXIudXBkYXRlTWFueSh7fSwgeyAkcHVsbDogeyBjYWxlbmRhclNldHRpbmdzOiB7IGNhbGVuZGFyOiBkb2MuX2lkIH0gfSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdXNlciBjYWxlbmRhciBkZWxldGVkXG4gICAgICAvLyBkZWxldGUgY2FsZW5kYXIgc2V0dGluZ3MgZm9yIG1hdGNoaW5nIHVzZXJcbiAgICAgIGF3YWl0IFVzZXIudXBkYXRlT25lKHsgX2lkOiBkb2MudXNlcl9pZCB9LCB7ICRwdWxsOiB7IGNhbGVuZGFyU2V0dGluZ3M6IHsgY2FsZW5kYXI6IGRvYy5faWQgfSB9IH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihlKTtcbiAgfVxufSk7XG5cbi8vIHNjaGVtYSBpbmRleFxuc2NoZW1hLmluZGV4KHsgbmFtZTogMSwgdXNlcl9pZDogMSB9LCB7IHVuaXF1ZTogdHJ1ZSB9KTtcblxuY29uc3QgQ2FsZW5kYXIgPSBtb25nb29zZS5tb2RlbCgnQ2FsZW5kYXInLCBzY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhcjtcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IHNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICB0aXRsZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsICdFbnRlciBhIHRpdGxlLiddXG4gIH0sXG4gIGRlc2M6IHtcbiAgICB0eXBlOiBTdHJpbmdcbiAgfSxcbiAgc3RhcnQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSBzdGFydCBkYXRlLiddXG4gIH0sXG4gIGVuZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsICdFbnRlciBhbiBlbmQgZGF0ZS4nXVxuICB9LFxuICBhbGxEYXk6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGRlZmF1bHQ6IGZhbHNlXG4gIH0sXG4gIHRpbWVab25lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHJlZjogJ0NhbGVuZGFyJ1xuICB9XG59KTtcblxuY29uc3QgRXZlbnQgPSBtb25nb29zZS5tb2RlbCgnRXZlbnQnLCBzY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudDtcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IHNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICB0b2tlbjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsICdFbnRlciBhIG5hbWUuJ11cbiAgfSxcbiAgdXNlcjoge1xuICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICByZWY6ICdVc2VyJyxcbiAgICByZXF1aXJlZDogW3RydWUsICdFbnRlciBhIHVzZXIgaWQuJ11cbiAgfSxcbiAgZXhwaXJ5RGF0ZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsICdFbnRlciBleHBpcmF0aW9uIGRhdGUuJ11cbiAgfVxufSk7XG5cbnNjaGVtYS5zdGF0aWNzLnZlcmlmeUV4cGlyYXRpb24gPSAodG9rZW4pID0+IHtcbiAgY29uc3QgZXhwaXJ5RGF0ZU9iaiA9IG5ldyBEYXRlKHRva2VuLmV4cGlyeURhdGUpO1xuICByZXR1cm4gZXhwaXJ5RGF0ZU9iai5nZXRUaW1lKCkgPCBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cbmNvbnN0IFJlZnJlc2hUb2tlbiA9IG1vbmdvb3NlLm1vZGVsKCdSZWZyZXNoVG9rZW4nLCBzY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBSZWZyZXNoVG9rZW47XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgbmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsICdFbnRlciBhIG5hbWUuJ11cbiAgfVxufSk7XG5cbmNvbnN0IFJvbGUgPSBtb25nb29zZS5tb2RlbCgnUm9sZScsIHNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJvbGU7XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vQ2FsZW5kYXInO1xuaW1wb3J0IHsgRHVwbGljYXRlS2V5RXJyb3IgfSBmcm9tICcuLi91dGlscy9kYXRhYmFzZUVycm9ycyc7XG5pbXBvcnQgeyB1c2VyQ29sb3JzLCBzeXN0ZW1Db2xvcnMgfSBmcm9tICdjb25maWcvYXBwQ29uZmlnJztcblxuY29uc3QgU0FMVF9XT1JLX0ZBQ1RPUiA9IDEwO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgdXNlcm5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSB1c2VybmFtZS4nXSxcbiAgICBtaW5MZW5ndGg6IFs0LCAnVXNlcm5hbWUgc2hvdWxkIGJlIGF0IGxlYXN0IGZvdXIgY2hhcmFjdGVycyddLFxuICAgIHVuaXF1ZTogW3RydWUsICdUaGF0IHVzZXJuYW1lIGlzIHRha2VuLiddXG4gIH0sXG4gIHBhc3N3b3JkOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0VudGVyIGEgcGFzc3dvcmQuJ10sXG4gICAgbWluTGVuZ3RoOiBbNCwgJ1Bhc3N3b3JkIHNob3VsZCBiZSBhdCBsZWFzdCBmb3VyIGNoYXJhY3RlcnMnXVxuICB9LFxuICByb2xlczogW1xuICAgIHtcbiAgICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICAgIHJlZjogJ1JvbGUnXG4gICAgfVxuICBdLFxuICBjYWxlbmRhclNldHRpbmdzOiBbXG4gICAge1xuICAgICAgY2FsZW5kYXI6IHtcbiAgICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgICByZWY6ICdDYWxlbmRhcidcbiAgICAgIH0sXG4gICAgICB1c2VyRGVmYXVsdDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICB9LFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgXVxufSk7XG5cbi8vIHByZXNlcnZpbmcgaXNOZXcgc3RhdGUgZm9yICdwb3N0JyBtaWRkbGV3YXJlXG5zY2hlbWEucHJlKCdzYXZlJywgZnVuY3Rpb24gKG5leHQpIHtcbiAgdGhpcy53YXNOZXcgPSB0aGlzLmlzTmV3O1xuICBuZXh0KCk7XG59KTtcblxuLy8gc2NoZW1hIG1pZGRsZXdhcmUgdG8gYXBwbHkgYmVmb3JlIHNhdmluZ1xuc2NoZW1hLnByZSgnc2F2ZScsIGFzeW5jIGZ1bmN0aW9uIChuZXh0KSB7XG4gIC8vIG9ubHkgaGFzaCB0aGUgcGFzc3dvcmQgaWYgaXQgaGFzIGJlZW4gbW9kaWZpZWQgKG9yIGlzIG5ldylcbiAgaWYgKCF0aGlzLmlzTW9kaWZpZWQoJ3Bhc3N3b3JkJykpIHJldHVybiBuZXh0KCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0LmdlblNhbHQoU0FMVF9XT1JLX0ZBQ1RPUik7XG4gICAgdGhpcy5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHRoaXMucGFzc3dvcmQsIHNhbHQpO1xuXG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBuZXh0KGUpO1xuICB9XG59KTtcblxuLy8gc2NoZW1hIG1pZGRsZXdhcmUgdG8gY2hlY2sgZm9yIGR1cGxpY2F0ZSBrZXlzXG5jb25zdCBoYW5kbGVFMTEwMDAgPSAoZXJyb3IsIHJlcywgbmV4dCkgPT4ge1xuICBpZiAoZXJyb3IubmFtZSA9PT0gJ01vbmdvRXJyb3InICYmIGVycm9yLmNvZGUgPT09IDExMDAwKSB7XG4gICAgdGhyb3cgbmV3IER1cGxpY2F0ZUtleUVycm9yKCdUaGVyZSB3YXMgYSBjb25mbGljdCB3aXRoIGFuIGV4aXN0aW5nIGVudHJ5LiBQbGVhc2UgdHJ5IGFnYWluLicsIHtcbiAgICAgIGVycm9yQ29kZTogJ3VzZXJuYW1lJ1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXh0KCk7XG4gIH1cbn07XG5cbnNjaGVtYS5wb3N0KCdzYXZlJywgaGFuZGxlRTExMDAwKTtcblxuLy8gZm9yIG5ldyB1c2VyczogZW1iZWQgc3lzdGVtIGNhbCBzZXR0aW5ncyBhbmQgY3JlYXRlIHVzZXIgZGVmYXVsdCBjYWxlbmRhclxuc2NoZW1hLnBvc3QoJ3NhdmUnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmlkICYmIHRoaXMud2FzTmV3KSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIExvb2t1cCBzeXN0ZW0gY2Fsc1xuICAgICAgY29uc3Qgc3lzdGVtQ2FscyA9IGF3YWl0IENhbGVuZGFyLmZpbmQoe1xuICAgICAgICB1c2VyX2lkOiAnc3lzdGVtJ1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChzeXN0ZW1DYWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBbXTtcblxuICAgICAgICBzeXN0ZW1DYWxzLmZvckVhY2goKGNhbCwgaWR4KSA9PiB7XG4gICAgICAgICAgc2V0dGluZ3MucHVzaCh7XG4gICAgICAgICAgICBjYWxlbmRhcjogY2FsLmlkLFxuICAgICAgICAgICAgdXNlckRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbG9yOiBgIyR7c3lzdGVtQ29sb3JzW2lkeF19YFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZXR0aW5ncy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgIHRoaXMuY2FsZW5kYXJTZXR0aW5ncy5wdXNoKGVudHJ5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZW1iZWQgY2FsZW5kYXIgc2V0dGluZ3MgaW4gdXNlciBkb2NcbiAgICAgICAgYXdhaXQgdGhpcy5zYXZlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNoZWNrIGZvciBleGlzdGluZyB1c2VyIGRlZmF1bHQgY2FsXG4gICAgICBjb25zdCBkZWZhdWx0Q2FsID0gYXdhaXQgQ2FsZW5kYXIuZmluZE9uZSh7XG4gICAgICAgIG5hbWU6IHRoaXMudXNlcm5hbWUsXG4gICAgICAgIHVzZXJfaWQ6IHRoaXMuaWRcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGVmYXVsdENhbCkge1xuICAgICAgICB0aHJvdyBuZXcgRHVwbGljYXRlS2V5RXJyb3IoJ1RoZXJlIHdhcyBhIGNvbmZsaWN0IHdpdGggYW4gZXhpc3RpbmcgZW50cnkuIFBsZWFzZSB0cnkgYWdhaW4uJywge1xuICAgICAgICAgIGVycm9yQ29kZTogJ3VzZXInXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdEZWZhdWx0Q2FsID0gbmV3IENhbGVuZGFyKHtcbiAgICAgICAgbmFtZTogdGhpcy51c2VybmFtZSxcbiAgICAgICAgdXNlcl9pZDogdGhpcy5pZFxuICAgICAgfSk7XG5cbiAgICAgIC8vIENyZWF0ZSBkZWZhdWx0IGNhbGVuZGFyXG4gICAgICBhd2FpdCBuZXdEZWZhdWx0Q2FsLnNhdmUoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZSk7XG4gICAgfVxuICB9XG59KTtcblxuc2NoZW1hLnN0YXRpY3MuZmluZEJ5VXNlcm5hbWUgPSBhc3luYyBmdW5jdGlvbiAodXNlcm5hbWUpIHtcbiAgLy8gTW9uZ29vc2UgcmV0dXJucyBudWxsIGZvciAuZmluZE9uZSBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcbiAgcmV0dXJuIHRoaXMuZmluZE9uZSh7IHVzZXJuYW1lIH0pO1xufTtcblxuc2NoZW1hLm1ldGhvZHMudmFsaWRhdGVQYXNzd29yZCA9IGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQoY2FuZGlkYXRlUGFzc3dvcmQpIHtcbiAgcmV0dXJuIGJjcnlwdC5jb21wYXJlKGNhbmRpZGF0ZVBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkKTtcbn07XG5cbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbCgnVXNlcicsIHNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcbmltcG9ydCBSb2xlIGZyb20gJy4vUm9sZSc7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9FdmVudCc7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9DYWxlbmRhcic7XG5pbXBvcnQgUmVmcmVzaFRva2VuIGZyb20gJy4vUmVmcmVzaFRva2VuJztcblxuY29uc3QgZGIgPSB7XG4gIG1vbmdvb3NlLFxuICBVc2VyLFxuICBSb2xlLFxuICBFdmVudCxcbiAgQ2FsZW5kYXIsXG4gIFJlZnJlc2hUb2tlbixcbiAgcm9sZXM6IFsndXNlcicsICdhZG1pbicsICdtb2RlcmF0b3InXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGI7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGF1dGhKd3QgfSBmcm9tICcuLi9taWRkbGV3YXJlJztcbmltcG9ydCBDYWxlbmRhckNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvQ2FsZW5kYXJDb250cm9sbGVyJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuLy8gUE9TVCByZXF1ZXN0IHRvIGNyZWF0ZSBjYWxlbmRhclxucm91dGVyLnBvc3QoJy8nLCBbYXV0aEp3dC52ZXJpZnlUb2tlbl0sIENhbGVuZGFyQ29udHJvbGxlci5jcmVhdGUpO1xuXG4vLyBQVVQgcmVxdWVzdCB0byB1cGRhdGUgY2FsZW5kYXJcbnJvdXRlci5wdXQoJy86Y2FsZW5kYXJJZCcsIFthdXRoSnd0LnZlcmlmeVRva2VuLCBhdXRoSnd0LnZlcmlmeVVSSUF1dGhdLCBDYWxlbmRhckNvbnRyb2xsZXIudXBkYXRlKTtcblxuLy8gREVMRVRFIHJlcXVlc3QgdG8gZGVsZXRlIGNhbGVuZGFyXG5yb3V0ZXIuZGVsZXRlKCcvOmNhbGVuZGFySWQnLCBbYXV0aEp3dC52ZXJpZnlUb2tlbiwgYXV0aEp3dC52ZXJpZnlVUklBdXRoXSwgQ2FsZW5kYXJDb250cm9sbGVyLmRlbGV0ZSk7XG5cbi8vIFBVVCByZXF1ZXN0IHRvIHVwZGF0ZSBjYWxlbmRhciBzZXR0aW5nc1xucm91dGVyLnB1dCgnLzpjYWxlbmRhcklkL3NldHRpbmdzJywgW2F1dGhKd3QudmVyaWZ5VG9rZW4sIGF1dGhKd3QudmVyaWZ5VVJJQXV0aF0sIENhbGVuZGFyQ29udHJvbGxlci51cGRhdGVTZXR0aW5ncyk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgYXV0aEp3dCB9IGZyb20gJy4uL21pZGRsZXdhcmUnO1xuaW1wb3J0IEV2ZW50Q29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9FdmVudENvbnRyb2xsZXInO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4vLyBQT1NUIHJlcXVlc3QgdG8gY3JlYXRlIGV2ZW50XG5yb3V0ZXIucG9zdCgnLycsIFthdXRoSnd0LnZlcmlmeVRva2VuXSwgRXZlbnRDb250cm9sbGVyLmNyZWF0ZSk7XG5cbi8vIEdFVCByZXF1ZXN0IHRvIGdldCB1c2VyIGV2ZW50c1xucm91dGVyLmdldCgnL3VzZXInLCBbYXV0aEp3dC52ZXJpZnlUb2tlbl0sIEV2ZW50Q29udHJvbGxlci5nZXRVc2VyRXZlbnRzKTtcblxuLy8gUFVUIHJlcXVlc3QgdG8gdXBkYXRlIGV2ZW50XG5yb3V0ZXIucHV0KCcvOmV2ZW50SWQnLCBbYXV0aEp3dC52ZXJpZnlUb2tlbiwgYXV0aEp3dC52ZXJpZnlVUklBdXRoXSwgRXZlbnRDb250cm9sbGVyLnVwZGF0ZSk7XG5cbi8vIERFTEVURSByZXF1ZXN0IHRvIGRlbGV0ZSBldmVudFxucm91dGVyLmRlbGV0ZSgnLzpldmVudElkJywgW2F1dGhKd3QudmVyaWZ5VG9rZW4sIGF1dGhKd3QudmVyaWZ5VVJJQXV0aF0sIEV2ZW50Q29udHJvbGxlci5kZWxldGUpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB1c2VyUm91dGVyIGZyb20gJy4vdXNlclJvdXRlcic7XG5pbXBvcnQgY2FsZW5kYXJSb3V0ZXIgZnJvbSAnLi9jYWxlbmRhclJvdXRlcic7XG5pbXBvcnQgZXZlbnRSb3V0ZXIgZnJvbSAnLi9ldmVudFJvdXRlcic7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci51c2UoJy91c2VycycsIHVzZXJSb3V0ZXIpO1xucm91dGVyLnVzZSgnL2NhbGVuZGFycycsIGNhbGVuZGFyUm91dGVyKTtcbnJvdXRlci51c2UoJy9ldmVudHMnLCBldmVudFJvdXRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgYXV0aEp3dCwgdmVyaWZ5UmVnaXN0cmF0aW9uIH0gZnJvbSAnLi4vbWlkZGxld2FyZSc7XG5pbXBvcnQgVXNlckNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvVXNlckNvbnRyb2xsZXInO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4vLyBQT1NUIHJlcXVlc3QgdG8gcmVnaXN0ZXIgdXNlclxucm91dGVyLnBvc3QoXG4gICcvcmVnaXN0ZXInLFxuICBbdmVyaWZ5UmVnaXN0cmF0aW9uLmNoZWNrRHVwbGljYXRlVXNlcm5hbWUsIHZlcmlmeVJlZ2lzdHJhdGlvbi5jaGVja1JvbGVzRXhpc3RdLFxuICBbVXNlckNvbnRyb2xsZXIucmVnaXN0ZXIsIFVzZXJDb250cm9sbGVyLmxvZ2luXVxuKTtcblxuLy8gUE9TVCByZXF1ZXN0IHRvIGxvZ2luIHVzZXIgKHJldHVybnMgdXNlciBvYmplY3QpXG5yb3V0ZXIucG9zdCgnL2xvZ2luJywgVXNlckNvbnRyb2xsZXIubG9naW4pO1xuXG4vLyBQT1NUIHJlcXVlc3QgdG8gcmVmcmVzaCB0b2tlblxucm91dGVyLnBvc3QoJy9yZWZyZXNodG9rZW4nLCBVc2VyQ29udHJvbGxlci5yZWZyZXNoVG9rZW4pO1xuXG4vLyBQVVQgcmVxdWVzdCB0byB1cGRhdGUgdXNlclxucm91dGVyLnB1dCgnLzp1c2VySWQnLCBbYXV0aEp3dC52ZXJpZnlUb2tlbiwgYXV0aEp3dC52ZXJpZnlVUklBdXRoXSwgVXNlckNvbnRyb2xsZXIudXBkYXRlKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIiwiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xuXG5pbXBvcnQgZGIgZnJvbSAnLi9kYi9jb25uZWN0aW9uLmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL2luZGV4LmpzJztcbmltcG9ydCB7IFVzZXJGYWNpbmdFcnJvciwgRGF0YWJhc2VFcnJvciB9IGZyb20gJy4vdXRpbHMvYmFzZUVycm9ycy5qcyc7XG5cbmNvbnN0IEJVSUxEX0RJUiA9IF9fZGlybmFtZTtcbmNvbnN0IEhUTUxfRklMRSA9IHBhdGgucmVzb2x2ZShCVUlMRF9ESVIsICdpbmRleC5odG1sJyk7XG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAxO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoY29ycygpKTtcblxuLy8gc3VwcG9ydCBkYXRhIGZyb20gUE9TVCByZXF1ZXN0c1xuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG5cbi8vIHNlcnZlIHN0YXRpYyBmaWxlc1xuYXBwLnVzZShleHByZXNzLnN0YXRpYyhCVUlMRF9ESVIpKTtcblxuLy8gVXNlIEFQSSByb3V0ZXNcbmFwcC51c2UoJy9hcGkvdjEnLCByb3V0ZXIpO1xuXG5hcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kRmlsZShIVE1MX0ZJTEUpO1xufSk7XG5cbi8vIEdsb2JhbCBlcnJvciBoYW5kbGVyXG5hcHAudXNlKGZ1bmN0aW9uIChlcnIsIHJlcSwgcmVzLCBuZXh0KSB7XG4gIHJlcy5oZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgY29uc3Qgc3RhdHVzID0gZXJyLnN0YXR1cyB8fCA0MDA7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgbmFtZTogZXJyLm5hbWUsXG4gICAgbWVzc2FnZTogZXJyLm1lc3NhZ2UgPz8gJydcbiAgfTtcblxuICBpZiAoZXJyIGluc3RhbmNlb2YgVXNlckZhY2luZ0Vycm9yIHx8IGVyciBpbnN0YW5jZW9mIERhdGFiYXNlRXJyb3IpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhlcnIpKSB7XG4gICAgICByZXNwb25zZVtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmVzLnN0YXR1cyhzdGF0dXMpLnNlbmQocmVzcG9uc2UpO1xufSk7XG5cbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgc2VydmVyIHN0YXJ0ZWQgYXQgaHR0cDovL2xvY2FsaG9zdDoke1BPUlR9YCk7XG59KTtcbiIsImltcG9ydCBIdHRwUmVzcG9uc2UgZnJvbSAnLi4vdXRpbHMvaHR0cFJlc3BvbnNlJztcbmltcG9ydCB7IHN5c3RlbUNvbG9ycywgdXNlckNvbG9ycyB9IGZyb20gJ2NvbmZpZy9hcHBDb25maWcnO1xuXG5jbGFzcyBDYWxlbmRhclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihtb2RlbCkge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIGNyZWF0ZSA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IF9vYmogPSB7XG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgdXNlcl9pZDogZGF0YS51c2VyX2lkXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RlbC5jcmVhdGUoX29iaik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0T25lID0gYXN5bmMgKGNhbGVuZGFySWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gTW9uZ29vc2UgcmV0dXJucyBudWxsIGZvciAuZmluZEJ5SWQgcXVlcnkgd2l0aCBubyBtYXRjaGVzXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkKGNhbGVuZGFySWQpO1xuXG4gICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIC8vIEdldCB1c2VyIGFuZCBzeXN0ZW0gY2FsZW5kYXJzXG4gIGdldFVzZXJDYWxlbmRhcnMgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIE1vbmdvb3NlIHJldHVybnMgW10gZm9yIC5maW5kIHF1ZXJ5IHdpdGggbm8gbWF0Y2hlc1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kKHsgdXNlcl9pZDogeyAkaW46IFt1c2VySWQsICdzeXN0ZW0nXSB9IH0pO1xuXG4gICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZSA9IGFzeW5jIChjYWxlbmRhcklkLCBkYXRhKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVwZGF0ZSA9IHtcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lXG4gICAgICB9O1xuXG4gICAgICAvLyBNb25nb29zZSByZXR1cm5zIHRoZSBtb2RpZmllZCBkb2N1bWVudCAob3IgbnVsbCkgZm9yIC5maW5kQnlJZEFuZFVwZGF0ZSBxdWVyeSB3aXRoIG9wdGlvbiAnbmV3OiB0cnVlJ1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kQnlJZEFuZFVwZGF0ZShjYWxlbmRhcklkLCB1cGRhdGUsIHsgbmV3OiB0cnVlIH0pO1xuXG4gICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIGRlbGV0ZSA9IGFzeW5jIChjYWxlbmRhcklkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIE1vbmdvb3NlIHJldHVybnMgdGhlIG1hdGNoaW5nIGRvY3VtZW50IChvciBudWxsKSBmb3IgLmZpbmRCeUlkQW5kRGVsZXRlIHF1ZXJ5XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkQW5kRGVsZXRlKGNhbGVuZGFySWQpO1xuXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcignQ2FsZW5kYXIgbm90IGZvdW5kJyk7XG5cbiAgICAgICAgZXJyb3Iuc3RhdHVzQ29kZSA9IDQwNDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQsIHsgZGVsZXRlZDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXJTZXJ2aWNlO1xuIiwiaW1wb3J0IEh0dHBSZXNwb25zZSBmcm9tICcuLi91dGlscy9odHRwUmVzcG9uc2UnO1xuXG5jbGFzcyBFdmVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihtb2RlbCkge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIGNyZWF0ZSA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuY3JlYXRlKGRhdGEpO1xuXG4gICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIGdldE9uZSA9IGFzeW5jIChldmVudElkKSA9PiB7XG4gICAgLy8gTW9uZ29vc2UgcmV0dXJucyBudWxsIGZvciAuZmluZEJ5SWQgcXVlcnkgd2l0aCBubyBtYXRjaGVzXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kQnlJZChldmVudElkKTtcblxuICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKHJlc3VsdCk7XG4gIH07XG5cbiAgZ2V0VXNlckV2ZW50cyA9IGFzeW5jIChjYWxlbmRhcklkcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBNb25nb29zZSByZXR1cm5zIFtdIGZvciAuZmluZCBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcbiAgICAgIGNvbnN0IGV2ZW50cyA9IGF3YWl0IHRoaXMubW9kZWwuZmluZCh7IGNhbGVuZGFyOiB7ICRpbjogY2FsZW5kYXJJZHMgfSB9KTtcblxuICAgICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UoZXZlbnRzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGUgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cGRhdGUgPSB7XG4gICAgICAgIC4uLmRhdGFcbiAgICAgIH07XG5cbiAgICAgIGRlbGV0ZSB1cGRhdGUuaWQ7XG5cbiAgICAgIC8vIE1vbmdvb3NlIHJldHVybnMgdGhlIG1vZGlmaWVkIGRvY3VtZW50IChvciBudWxsKSBmb3IgLmZpbmRCeUlkQW5kVXBkYXRlIHF1ZXJ5IHdpdGggb3B0aW9uICduZXc6IHRydWUnXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkQW5kVXBkYXRlKGRhdGEuaWQsIHVwZGF0ZSwgeyBuZXc6IHRydWUgfSk7XG5cbiAgICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKHJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgZGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIE1vbmdvb3NlIHJldHVybnMgdGhlIG1hdGNoaW5nIGRvY3VtZW50IChvciBudWxsKSBmb3IgLmZpbmRCeUlkQW5kRGVsZXRlIHF1ZXJ5XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkQW5kRGVsZXRlKGlkKTtcblxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoJ0V2ZW50IG5vdCBmb3VuZCcpO1xuXG4gICAgICAgIGVycm9yLnN0YXR1c0NvZGUgPSA0MDQ7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UocmVzdWx0LCB7IGRlbGV0ZWQ6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50U2VydmljZTtcbiIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgQXV0aG9yaXphdGlvbkVycm9yIH0gZnJvbSAnLi4vdXRpbHMvdXNlckZhY2luZ0Vycm9ycyc7XG5cbmNsYXNzIFJlZnJlc2hUb2tlblNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihtb2RlbCkge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIGNyZWF0ZSA9IGFzeW5jICh1c2VySWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhwaXJlZEF0ID0gbmV3IERhdGUoKTtcblxuICAgICAgZXhwaXJlZEF0LnNldFNlY29uZHMoZXhwaXJlZEF0LmdldFNlY29uZHMoKSArIE51bWJlcihwcm9jZXNzLmVudi5KV1RfUkVGUkVTSF9FWFBJUkFUSU9OKSk7XG5cbiAgICAgIGNvbnN0IF90b2tlbiA9IHV1aWR2NCgpO1xuXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0b2tlbjogX3Rva2VuLFxuICAgICAgICB1c2VyOiB1c2VySWQsXG4gICAgICAgIGV4cGlyeURhdGU6IGV4cGlyZWRBdC50b0lTT1N0cmluZygpXG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1vZGVsLmNyZWF0ZShkYXRhKTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcblxuICBnZXQgPSBhc3luYyAocmVxdWVzdFRva2VuKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIE1vbmdvb3NlIHJldHVybnMgbnVsbCBmb3IgLmZpbmRPbmUgcXVlcnkgd2l0aCBubyBtYXRjaGVzXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRPbmUoeyB0b2tlbjogcmVxdWVzdFRva2VuIH0pO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIHZlcmlmeSA9IGFzeW5jICh0b2tlbikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5tb2RlbC52ZXJpZnlFeHBpcmF0aW9uKHRva2VuKSkge1xuICAgICAgICAvLyBSZWZyZXNoIHRva2VuIGV4cGlyZWRcbiAgICAgICAgLy8gTW9uZ29vc2UgcmV0dXJucyB0aGUgbWF0Y2hpbmcgZG9jdW1lbnQgKG9yIG51bGwpIGZvciAuZmluZEJ5SWRBbmRSZW1vdmUgcXVlcnlcbiAgICAgICAgYXdhaXQgdGhpcy5tb2RlbC5maW5kQnlJZEFuZFJlbW92ZSh0b2tlbi5pZCwge1xuICAgICAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRocm93IG5ldyBBdXRob3JpemF0aW9uRXJyb3IoJ1JlZnJlc2ggdG9rZW4gZXhwaXJlZCcsIHsgZXJyb3JDb2RlOiAncmVmcmVzaFRva2VuJyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWZyZXNoVG9rZW5TZXJ2aWNlO1xuIiwiaW1wb3J0IEh0dHBSZXNwb25zZSBmcm9tICcuLi91dGlscy9odHRwUmVzcG9uc2UnO1xuXG5jbGFzcyBSb2xlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKG1vZGVsKSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB9XG5cbiAgY3JlYXRlID0gYXN5bmMgKG5hbWUpID0+IHtcbiAgICBhd2FpdCB0aGlzLm1vZGVsLmNyZWF0ZSh7IG5hbWUgfSkudGhlbigocm9sZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYENyZWF0ZWQgcm9sZTogJHtyb2xlLm5hbWV9YCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0ID0gYXN5bmMgKHJvbGVzKSA9PiB7XG4gICAgLy8gTW9uZ29vc2UgcmV0dXJucyBbXSBmb3IgLmZpbmQgcXVlcnkgd2l0aCBubyBtYXRjaGVzXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kKHsgbmFtZTogeyAkaW46IHJvbGVzIH0gfSk7XG5cbiAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSb2xlU2VydmljZTtcbiIsImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCBSZWZyZXNoVG9rZW5TZXJ2aWNlIGZyb20gJy4vUmVmcmVzaFRva2VuU2VydmljZSc7XG5pbXBvcnQgUm9sZVNlcnZpY2UgZnJvbSAnLi9Sb2xlU2VydmljZSc7XG5pbXBvcnQgeyBBdXRob3JpemF0aW9uRXJyb3IsIE5vdEZvdW5kRXJyb3IgfSBmcm9tICcuLi91dGlscy91c2VyRmFjaW5nRXJyb3JzJztcbmltcG9ydCBIdHRwUmVzcG9uc2UgZnJvbSAnLi4vdXRpbHMvaHR0cFJlc3BvbnNlJztcblxuY2xhc3MgVXNlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihtb2RlbCwgcmVmcmVzaFRva2VuTW9kZWwsIHJvbGVNb2RlbCkge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnJlZnJlc2hUb2tlblNlcnZpY2UgPSBuZXcgUmVmcmVzaFRva2VuU2VydmljZShyZWZyZXNoVG9rZW5Nb2RlbCk7XG4gICAgdGhpcy5yb2xlU2VydmljZSA9IG5ldyBSb2xlU2VydmljZShyb2xlTW9kZWwpO1xuICB9XG5cbiAgY3JlYXRlID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5jcmVhdGUoZGF0YSk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gTG9vayB1cCB1c2VyLCB2YWxpZGF0ZSBwdywgY3JlYXRlIHJlZnJlc2ggdG9rZW5cbiAgbG9naW4gPSBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIE1vbmdvb3NlIHJldHVybnMgbnVsbCBmb3IgLmZpbmRPbmUgcXVlcnkgd2l0aCBubyBtYXRjaGVzXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kT25lKHsgdXNlcm5hbWUgfSk7XG5cbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICAvLyBVc2VyIG5vdCBmb3VuZFxuICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFcnJvcignSW52YWxpZCB1c2VybmFtZScsIHsgZXJyb3JDb2RlOiAndXNlcm5hbWUnIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBwcm9jZXNzIGxvZ2luXG4gICAgICBjb25zdCB2YWxpZGF0ZWQgPSBhd2FpdCB1c2VyLnZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gICAgICBpZiAoIXZhbGlkYXRlZCkge1xuICAgICAgICB0aHJvdyBuZXcgQXV0aG9yaXphdGlvbkVycm9yKCdJbnZhbGlkIHBhc3N3b3JkJywge1xuICAgICAgICAgIGVycm9yQ29kZTogJ3Bhc3N3b3JkJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgcGFzc3dvcmQgaXMgdmFsaWQsIGNyZWF0ZSBKV1QgdG9rZW5cbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gand0LnNpZ24oeyBpZDogdXNlci5faWQgfSwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVF9LRVksIHtcbiAgICAgICAgZXhwaXJlc0luOiBOdW1iZXIocHJvY2Vzcy5lbnYuSldUX0VYUElSQVRJT04pXG4gICAgICB9KTtcblxuICAgICAgLy8gQ3JlYXRlIHJlZnJlc2ggdG9rZW5cbiAgICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IGF3YWl0IHRoaXMucmVmcmVzaFRva2VuU2VydmljZS5jcmVhdGUodXNlci5pZCk7XG5cbiAgICAgIGNvbnN0IHJlZnJlc2hUb2tlblJlc3BvbnNlID0gbmV3IEh0dHBSZXNwb25zZShyZWZyZXNoVG9rZW4pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBhY2Nlc3NUb2tlbixcbiAgICAgICAgcmVmcmVzaFRva2VuOiByZWZyZXNoVG9rZW5SZXNwb25zZS5kYXRhXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIGdldE9uZSA9IGFzeW5jICh1c2VySWQpID0+IHtcbiAgICAvLyBSZXRyaWV2ZSB1c2VyIGRvYyBhbmQgcG9wdWxhdGUgcmVmZXJlbmNlZCBmaWVsZHNcbiAgICAvLyBNb25nb29zZSByZXR1cm5zIG51bGwgZm9yIC5maW5kQnlJZCBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMubW9kZWwuZmluZEJ5SWQodXNlcklkKS5wb3B1bGF0ZShbJ3JvbGVzJywgJ2NhbGVuZGFyU2V0dGluZ3MuY2FsZW5kYXInXSk7XG5cbiAgICBjb25zdCBodHRwUmVzcG9uc2UgPSBuZXcgSHR0cFJlc3BvbnNlKHJlc3BvbnNlKTtcblxuICAgIGNvbnN0IGZsYXR0ZW5lZENhbGVuZGFyU2V0dGluZ3MgPSBodHRwUmVzcG9uc2UuZGF0YS5jYWxlbmRhclNldHRpbmdzLm1hcCgoZW50cnkpID0+ICh7XG4gICAgICBpZDogZW50cnkuY2FsZW5kYXIuaWQsXG4gICAgICBuYW1lOiBlbnRyeS5jYWxlbmRhci5uYW1lLFxuICAgICAgdXNlcl9pZDogZW50cnkuY2FsZW5kYXIudXNlcl9pZCxcbiAgICAgIHVzZXJEZWZhdWx0OiBlbnRyeS51c2VyRGVmYXVsdCxcbiAgICAgIHZpc2liaWxpdHk6IGVudHJ5LnZpc2liaWxpdHksXG4gICAgICBjb2xvcjogZW50cnkuY29sb3JcbiAgICB9KSk7XG5cbiAgICBodHRwUmVzcG9uc2UuZGF0YS5jYWxlbmRhclNldHRpbmdzID0gZmxhdHRlbmVkQ2FsZW5kYXJTZXR0aW5ncztcblxuICAgIHJldHVybiBodHRwUmVzcG9uc2UuZGF0YTtcbiAgfTtcblxuICByZWZyZXNoVG9rZW4gPSBhc3luYyAocmVxdWVzdFRva2VuKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IGF3YWl0IHRoaXMucmVmcmVzaFRva2VuU2VydmljZS5nZXQocmVxdWVzdFRva2VuKTtcblxuICAgICAgaWYgKCFyZWZyZXNoVG9rZW4pIHtcbiAgICAgICAgLy8gUmVmcmVzaCB0b2tlbiBub3QgZm91bmRcbiAgICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kRXJyb3IoJ0ludmFsaWQgcmVxdWVzdCB0b2tlbicsIHsgZXJyb3JDb2RlOiAncmVmcmVzaFRva2VuJyB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gVGhyb3dzIGVycm9yIG9uIGV4cGlyZWQgcmVmcmVzaCB0b2tlblxuICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoVG9rZW5TZXJ2aWNlLnZlcmlmeShyZWZyZXNoVG9rZW4pO1xuXG4gICAgICAvLyBjcmVhdGUgbmV3IEpXVCB0b2tlblxuICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBqd3Quc2lnbih7IGlkOiByZWZyZXNoVG9rZW4udXNlci5faWQgfSwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVF9LRVksIHtcbiAgICAgICAgZXhwaXJlc0luOiBOdW1iZXIocHJvY2Vzcy5lbnYuSldUX0VYUElSQVRJT04pXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgICAgIGFjY2Vzc1Rva2VuXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgYXNzaWduUm9sZXMgPSBhc3luYyAodXNlciwgcm9sZU5hbWVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvbGVzID0gYXdhaXQgdGhpcy5yb2xlU2VydmljZS5nZXQocm9sZU5hbWVzKTtcblxuICAgICAgaWYgKCFyb2xlcy5kYXRhIHx8IHJvbGVzLmRhdGEubGVuZ3RoIDwgMSkge1xuICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFcnJvcignUm9sZShzKSBub3QgZm91bmQnLCB7IGVycm9yQ29kZTogJ3JvbGUnIH0pO1xuICAgICAgfVxuXG4gICAgICB1c2VyLnJvbGVzID0gcm9sZXMuZGF0YS5tYXAoKHJvbGUpID0+IHJvbGUuaWQpO1xuXG4gICAgICByZXR1cm4gYXdhaXQgdXNlci5zYXZlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlID0gYXN5bmMgKHVzZXJJZCwgZGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBNb25nb29zZSByZXR1cm5zIHRoZSBtb2RpZmllZCBkb2N1bWVudCAob3IgbnVsbCkgZm9yIC5maW5kQnlJZCBxdWVyeVxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMubW9kZWwuZmluZEJ5SWQodXNlcklkKTtcblxuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKCdObyBtYXRjaGluZyB1c2VyIGZvdW5kJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHVwZGF0ZSBwYXNzd29yZFxuICAgICAgaWYgKGRhdGEucGFzc3dvcmQpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkID0gYXdhaXQgdXNlci52YWxpZGF0ZVBhc3N3b3JkKGRhdGEucGFzc3dvcmQpO1xuXG4gICAgICAgIGlmICghdmFsaWRhdGVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEF1dGhvcml6YXRpb25FcnJvcignSW52YWxpZCBwYXNzd29yZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCB7IGVycm9yQ29kZTogJ3Bhc3N3b3JkJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVzZXIucGFzc3dvcmQgPSBkYXRhLm5ld1Bhc3N3b3JkIHx8ICcnO1xuICAgICAgfVxuXG4gICAgICAvLyB1cGRhdGUgdXNlcm5hbWVcbiAgICAgIGlmIChkYXRhLnVzZXJuYW1lKSB7XG4gICAgICAgIHVzZXIudXNlcm5hbWUgPSBkYXRhLnVzZXJuYW1lO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1c2VyLnNhdmUoKTtcblxuICAgICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGVDYWxlbmRhclNldHRpbmdzID0gYXN5bmMgKHVzZXJJZCwgZGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBnZXQgY2FsZW5kYXIgc2V0dGluZ3MgcHJvcGVydGllcyBmcm9tIG1vZGVsIHNjaGVtYVxuICAgICAgY29uc3QgY2FsZW5kYXJTZXR0aW5nc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLm1vZGVsLnNjaGVtYS50cmVlLmNhbGVuZGFyU2V0dGluZ3NbMF0pO1xuXG4gICAgICBjb25zdCBkaWZmZWREYXRhID0ge307XG5cbiAgICAgIGNhbGVuZGFyU2V0dGluZ3NLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBkaWZmZWREYXRhW2tleV0gPSBkYXRhW2tleV07XG4gICAgICB9KTtcblxuICAgICAgT2JqZWN0LmtleXMoZGlmZmVkRGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChkaWZmZWREYXRhW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRlbGV0ZSBkaWZmZWREYXRhW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB1cGRhdGUgPSB7fTtcblxuICAgICAgT2JqZWN0LmtleXMoZGlmZmVkRGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHVwZGF0ZVtgY2FsZW5kYXJTZXR0aW5ncy4kW2ldLiR7a2V5fWBdID0gZGlmZmVkRGF0YVtrZXldO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICAgIHsgX2lkOiB1c2VySWQgfSxcbiAgICAgICAgeyAkc2V0OiB1cGRhdGUgfSxcbiAgICAgICAgeyBhcnJheUZpbHRlcnM6IFt7ICdpLmNhbGVuZGFyJzogZGF0YS5pZCB9XSwgbmV3OiB0cnVlIH1cbiAgICAgICk7XG5cbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFcnJvcihgVXBkYXRlIGZhaWxlZCB3aXRoIHVzZXIgaWQ6ICR7dXNlcklkfWApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBodHRwUmVzcG9uc2UgPSBuZXcgSHR0cFJlc3BvbnNlKHVzZXIuY2FsZW5kYXJTZXR0aW5ncyk7XG5cbiAgICAgIGNvbnN0IGZsYXR0ZW5lZENhbGVuZGFyU2V0dGluZ3MgPSBodHRwUmVzcG9uc2UuZGF0YS5tYXAoKGVudHJ5KSA9PiAoe1xuICAgICAgICBpZDogZW50cnkuY2FsZW5kYXIsXG4gICAgICAgIHVzZXJEZWZhdWx0OiBlbnRyeS51c2VyRGVmYXVsdCxcbiAgICAgICAgdmlzaWJpbGl0eTogZW50cnkudmlzaWJpbGl0eSxcbiAgICAgICAgY29sb3I6IGVudHJ5LmNvbG9yXG4gICAgICB9KSk7XG5cbiAgICAgIGh0dHBSZXNwb25zZS5kYXRhID0gZmxhdHRlbmVkQ2FsZW5kYXJTZXR0aW5ncztcblxuICAgICAgcmV0dXJuIGh0dHBSZXNwb25zZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclNlcnZpY2U7XG4iLCJjbGFzcyBBcHBsaWNhdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5uYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG59XG5cbmNsYXNzIERhdGFiYXNlRXJyb3IgZXh0ZW5kcyBBcHBsaWNhdGlvbkVycm9yIHt9XG5cbmNsYXNzIFVzZXJGYWNpbmdFcnJvciBleHRlbmRzIEFwcGxpY2F0aW9uRXJyb3Ige31cblxuZXhwb3J0IHsgQXBwbGljYXRpb25FcnJvciwgRGF0YWJhc2VFcnJvciwgVXNlckZhY2luZ0Vycm9yIH07XG4iLCJpbXBvcnQgeyBEYXRhYmFzZUVycm9yIH0gZnJvbSAnLi9iYXNlRXJyb3JzJztcblxuY2xhc3MgRHVwbGljYXRlS2V5RXJyb3IgZXh0ZW5kcyBEYXRhYmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zKSkge1xuICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHN0YXR1c0NvZGUoKSB7XG4gICAgcmV0dXJuIDQwOTtcbiAgfVxuXG4gIGdldCBtb25nb0Vycm9yQ29kZSgpIHtcbiAgICByZXR1cm4gMTEwMDA7XG4gIH1cbn1cblxuZXhwb3J0IHsgRHVwbGljYXRlS2V5RXJyb3IgfTtcbiIsImNvbnN0IGRlZmF1bHRFeGNsdXNpb25zRnJvbVJlc3BvbnNlID0gWydfX3YnLCAncGFzc3dvcmQnXTtcblxuY2xhc3MgSHR0cFJlc3BvbnNlIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgb3B0aW9ucyA9IHsgc3RhdHVzQ29kZTogMjAwLCBkZWxldGVkOiBudWxsIH0pIHtcbiAgICB0aGlzLnN0YXR1c0NvZGUgPSBvcHRpb25zLnN0YXR1c0NvZGUgfHwgMjAwO1xuICAgIGxldCBmaWx0ZXJlZERhdGEgPSBkYXRhO1xuXG4gICAgLy8gaGFuZGxlcyBKUyBhcnJheXMgb3Igb2JqZWN0c1xuICAgIGlmICh0eXBlb2YgZmlsdGVyZWREYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgZmlsdGVyZWREYXRhID0gdGhpcy5maWx0ZXJEYXRhKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZmlsdGVyZWREYXRhKSkpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5kZWxldGVkKSB7XG4gICAgICB0aGlzLmRlbGV0ZWQgPSBvcHRpb25zLmRlbGV0ZWQ7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGZpbHRlcmVkRGF0YSkpIHtcbiAgICAgIHRoaXMuZGF0YSA9IFsuLi5maWx0ZXJlZERhdGFdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpbHRlcmVkRGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMuZGF0YSA9IHsgLi4uZmlsdGVyZWREYXRhIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyRGF0YSA9IChkYXRhKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGRhdGEubWFwKCh4LCBpbmRleCkgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyh4KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBpZiAoZGVmYXVsdEV4Y2x1c2lvbnNGcm9tUmVzcG9uc2UuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZGVsZXRlIGRhdGFbaW5kZXhdW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChrZXkgPT09ICdfaWQnKSB7XG4gICAgICAgICAgICBkYXRhW2luZGV4XVsnaWQnXSA9IGRhdGFbaW5kZXhdW2tleV07XG4gICAgICAgICAgICBkZWxldGUgZGF0YVtpbmRleF1ba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gaGFuZGxlIG5lc3RlZCBwcm9wZXJ0aWVzIHJlY3Vyc2l2ZWx5XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ2NhbGVuZGFyU2V0dGluZ3MnIHx8IGtleSA9PT0gJ2NhbGVuZGFyJyB8fCBrZXkgPT09ICdyb2xlcycpIHtcbiAgICAgICAgICAgIGRhdGFbaW5kZXhdW2tleV0gPSB0aGlzLmZpbHRlckRhdGEoZGF0YVtpbmRleF1ba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGRlZmF1bHRFeGNsdXNpb25zRnJvbVJlc3BvbnNlLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICBkZWxldGUgZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkgPT09ICdfaWQnKSB7XG4gICAgICAgICAgZGF0YVsnaWQnXSA9IGRhdGFba2V5XTtcbiAgICAgICAgICBkZWxldGUgZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIC8vIGhhbmRsZSBuZXN0ZWQgcHJvcGVydGllcyByZWN1cnNpdmVseVxuICAgICAgICBpZiAoa2V5ID09PSAnY2FsZW5kYXJTZXR0aW5ncycgfHwga2V5ID09PSAnY2FsZW5kYXInIHx8IGtleSA9PT0gJ3JvbGVzJykge1xuICAgICAgICAgIGRhdGFba2V5XSA9IHRoaXMuZmlsdGVyRGF0YShkYXRhW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEh0dHBSZXNwb25zZTtcbiIsImltcG9ydCB7IFVzZXJGYWNpbmdFcnJvciB9IGZyb20gJy4vYmFzZUVycm9ycyc7XG5cbmNsYXNzIEJhZFJlcXVlc3RFcnJvciBleHRlbmRzIFVzZXJGYWNpbmdFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucykpIHtcbiAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzdGF0dXNDb2RlKCkge1xuICAgIHJldHVybiA0MDA7XG4gIH1cbn1cblxuY2xhc3MgTm90Rm91bmRFcnJvciBleHRlbmRzIFVzZXJGYWNpbmdFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucykpIHtcbiAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzdGF0dXNDb2RlKCkge1xuICAgIHJldHVybiA0MDQ7XG4gIH1cbn1cblxuY2xhc3MgQXV0aG9yaXphdGlvbkVycm9yIGV4dGVuZHMgVXNlckZhY2luZ0Vycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zKSkge1xuICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHN0YXR1c0NvZGUoKSB7XG4gICAgcmV0dXJuIDQwMTtcbiAgfVxufVxuXG5leHBvcnQgeyBCYWRSZXF1ZXN0RXJyb3IsIE5vdEZvdW5kRXJyb3IsIEF1dGhvcml6YXRpb25FcnJvciB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoY2FjaGVkTW9kdWxlLmVycm9yICE9PSB1bmRlZmluZWQpIHRocm93IGNhY2hlZE1vZHVsZS5lcnJvcjtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0dHJ5IHtcblx0XHR2YXIgZXhlY09wdGlvbnMgPSB7IGlkOiBtb2R1bGVJZCwgbW9kdWxlOiBtb2R1bGUsIGZhY3Rvcnk6IF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLCByZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fIH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikgeyBoYW5kbGVyKGV4ZWNPcHRpb25zKTsgfSk7XG5cdFx0bW9kdWxlID0gZXhlY09wdGlvbnMubW9kdWxlO1xuXHRcdGV4ZWNPcHRpb25zLmZhY3RvcnkuY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgZXhlY09wdGlvbnMucmVxdWlyZSk7XG5cdH0gY2F0Y2goZSkge1xuXHRcdG1vZHVsZS5lcnJvciA9IGU7XG5cdFx0dGhyb3cgZTtcblx0fVxuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGV4ZWN1dGlvbiBpbnRlcmNlcHRvclxuX193ZWJwYWNrX3JlcXVpcmVfXy5pID0gW107XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYWxsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5odSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYgPSAoKSA9PiAoXCJtYWluLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzb25cIik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMmQ1NjM4YWNiODNmNGJlNGQzNTlcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIGN1cnJlbnRNb2R1bGVEYXRhID0ge307XG52YXIgaW5zdGFsbGVkTW9kdWxlcyA9IF9fd2VicGFja19yZXF1aXJlX18uYztcblxuLy8gbW9kdWxlIGFuZCByZXF1aXJlIGNyZWF0aW9uXG52YXIgY3VycmVudENoaWxkTW9kdWxlO1xudmFyIGN1cnJlbnRQYXJlbnRzID0gW107XG5cbi8vIHN0YXR1c1xudmFyIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycyA9IFtdO1xudmFyIGN1cnJlbnRTdGF0dXMgPSBcImlkbGVcIjtcblxuLy8gd2hpbGUgZG93bmxvYWRpbmdcbnZhciBibG9ja2luZ1Byb21pc2VzID0gMDtcbnZhciBibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXG4vLyBUaGUgdXBkYXRlIGluZm9cbnZhciBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycztcbnZhciBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yRCA9IGN1cnJlbnRNb2R1bGVEYXRhO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkucHVzaChmdW5jdGlvbiAob3B0aW9ucykge1xuXHR2YXIgbW9kdWxlID0gb3B0aW9ucy5tb2R1bGU7XG5cdHZhciByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShvcHRpb25zLnJlcXVpcmUsIG9wdGlvbnMuaWQpO1xuXHRtb2R1bGUuaG90ID0gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG9wdGlvbnMuaWQsIG1vZHVsZSk7XG5cdG1vZHVsZS5wYXJlbnRzID0gY3VycmVudFBhcmVudHM7XG5cdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRvcHRpb25zLnJlcXVpcmUgPSByZXF1aXJlO1xufSk7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yQyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJID0ge307XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcXVpcmUocmVxdWlyZSwgbW9kdWxlSWQpIHtcblx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cdGlmICghbWUpIHJldHVybiByZXF1aXJlO1xuXHR2YXIgZm4gPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuXHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG5cdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuXHRcdFx0XHR2YXIgcGFyZW50cyA9IGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cztcblx0XHRcdFx0aWYgKHBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG5cdFx0XHRcdFx0cGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuXHRcdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG5cdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuXHRcdFx0XHRcdHJlcXVlc3QgK1xuXHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG5cdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdCk7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVxdWlyZShyZXF1ZXN0KTtcblx0fTtcblx0dmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHJlcXVpcmVbbmFtZV07XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmVxdWlyZVtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cdGZvciAodmFyIG5hbWUgaW4gcmVxdWlyZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVxdWlyZSwgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKG5hbWUpKTtcblx0XHR9XG5cdH1cblx0Zm4uZSA9IGZ1bmN0aW9uIChjaHVua0lkLCBmZXRjaFByaW9yaXR5KSB7XG5cdFx0cmV0dXJuIHRyYWNrQmxvY2tpbmdQcm9taXNlKHJlcXVpcmUuZShjaHVua0lkLCBmZXRjaFByaW9yaXR5KSk7XG5cdH07XG5cdHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG1vZHVsZUlkLCBtZSkge1xuXHR2YXIgX21haW4gPSBjdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkO1xuXHR2YXIgaG90ID0ge1xuXHRcdC8vIHByaXZhdGUgc3R1ZmZcblx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9hY2NlcHRlZEVycm9ySGFuZGxlcnM6IHt9LFxuXHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG5cdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG5cdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG5cdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG5cdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG5cdFx0X21haW46IF9tYWluLFxuXHRcdF9yZXF1aXJlU2VsZjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBtZS5wYXJlbnRzLnNsaWNlKCk7XG5cdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSBfbWFpbiA/IHVuZGVmaW5lZCA6IG1vZHVsZUlkO1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG5cdFx0fSxcblxuXHRcdC8vIE1vZHVsZSBBUElcblx0XHRhY3RpdmU6IHRydWUsXG5cdFx0YWNjZXB0OiBmdW5jdGlvbiAoZGVwLCBjYWxsYmFjaywgZXJyb3JIYW5kbGVyKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcFtpXV0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBdID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGVjbGluZTogZnVuY3Rpb24gKGRlcCkge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcblx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuXHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcblx0XHRcdFx0XHQocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKFxuXHRcdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gTWFuYWdlbWVudCBBUElcblx0XHRjaGVjazogaG90Q2hlY2ssXG5cdFx0YXBwbHk6IGhvdEFwcGx5LFxuXHRcdHN0YXR1czogZnVuY3Rpb24gKGwpIHtcblx0XHRcdGlmICghbCkgcmV0dXJuIGN1cnJlbnRTdGF0dXM7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHR2YXIgaWR4ID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG5cdFx0XHRpZiAoaWR4ID49IDApIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXG5cdFx0Ly8gaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuXHRcdGRhdGE6IGN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuXHR9O1xuXHRjdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG5cdHJldHVybiBob3Q7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXR1cyhuZXdTdGF0dXMpIHtcblx0Y3VycmVudFN0YXR1cyA9IG5ld1N0YXR1cztcblx0dmFyIHJlc3VsdHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcblx0XHRyZXN1bHRzW2ldID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cykudGhlbihmdW5jdGlvbiAoKSB7fSk7XG59XG5cbmZ1bmN0aW9uIHVuYmxvY2soKSB7XG5cdGlmICgtLWJsb2NraW5nUHJvbWlzZXMgPT09IDApIHtcblx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChibG9ja2luZ1Byb21pc2VzID09PSAwKSB7XG5cdFx0XHRcdHZhciBsaXN0ID0gYmxvY2tpbmdQcm9taXNlc1dhaXRpbmc7XG5cdFx0XHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nID0gW107XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGxpc3RbaV0oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHRyYWNrQmxvY2tpbmdQcm9taXNlKHByb21pc2UpIHtcblx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRzZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuXHRcdC8qIGZhbGx0aHJvdWdoICovXG5cdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdGJsb2NraW5nUHJvbWlzZXMrKztcblx0XHRcdHByb21pc2UudGhlbih1bmJsb2NrLCB1bmJsb2NrKTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fVxufVxuXG5mdW5jdGlvbiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmbikge1xuXHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkgcmV0dXJuIGZuKCk7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nLnB1c2goZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVzb2x2ZShmbigpKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5T25VcGRhdGUpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG5cdH1cblx0cmV0dXJuIHNldFN0YXR1cyhcImNoZWNrXCIpXG5cdFx0LnRoZW4oX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNKVxuXHRcdC50aGVuKGZ1bmN0aW9uICh1cGRhdGUpIHtcblx0XHRcdGlmICghdXBkYXRlKSB7XG5cdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKS50aGVuKFxuXHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInByZXBhcmVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciB1cGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMpLnJlZHVjZShmdW5jdGlvbiAoXG5cdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdGtleVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJDW2tleV0oXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5jLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUucixcblx0XHRcdFx0XHRcdFx0dXBkYXRlLm0sXG5cdFx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlZE1vZHVsZXNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdFx0XHRcdFx0fSwgW10pXG5cdFx0XHRcdCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChhcHBseU9uVXBkYXRlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KGFwcGx5T25VcGRhdGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZE1vZHVsZXM7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcbn1cblxuZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJyZWFkeVwiKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHRcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1cyAoc3RhdGU6IFwiICtcblx0XHRcdFx0XHRjdXJyZW50U3RhdHVzICtcblx0XHRcdFx0XHRcIilcIlxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJuYWxBcHBseShvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCk7XG5cblx0dmFyIHJlc3VsdHMgPSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycy5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHtcblx0XHRyZXR1cm4gaGFuZGxlcihvcHRpb25zKTtcblx0fSk7XG5cdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gdW5kZWZpbmVkO1xuXG5cdHZhciBlcnJvcnMgPSByZXN1bHRzXG5cdFx0Lm1hcChmdW5jdGlvbiAocikge1xuXHRcdFx0cmV0dXJuIHIuZXJyb3I7XG5cdFx0fSlcblx0XHQuZmlsdGVyKEJvb2xlYW4pO1xuXG5cdGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJhYm9ydFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IGVycm9yc1swXTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuXHR2YXIgZGlzcG9zZVByb21pc2UgPSBzZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuXG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5kaXNwb3NlKSByZXN1bHQuZGlzcG9zZSgpO1xuXHR9KTtcblxuXHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG5cdHZhciBhcHBseVByb21pc2UgPSBzZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuXHR2YXIgZXJyb3I7XG5cdHZhciByZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcblx0fTtcblxuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5hcHBseSkge1xuXHRcdFx0dmFyIG1vZHVsZXMgPSByZXN1bHQuYXBwbHkocmVwb3J0RXJyb3IpO1xuXHRcdFx0aWYgKG1vZHVsZXMpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gobW9kdWxlc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChbZGlzcG9zZVByb21pc2UsIGFwcGx5UHJvbWlzZV0pLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiZmFpbFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChsaXN0KSB7XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNldFN0YXR1cyhcImlkbGVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG5cdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRpZiAoIWN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzKSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHVuZGVmaW5lZDtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufSIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3Ncbi8vIFwiMVwiIG1lYW5zIFwibG9hZGVkXCIsIG90aGVyd2lzZSBub3QgbG9hZGVkIHlldFxudmFyIGluc3RhbGxlZENodW5rcyA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX3JlcXVpcmUgfHwge1xuXHRcIm1haW5cIjogMVxufTtcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBjaHVuayBpbnN0YWxsIGZ1bmN0aW9uIG5lZWRlZFxuXG4vLyBubyBjaHVuayBsb2FkaW5nXG5cbi8vIG5vIGV4dGVybmFsIGluc3RhbGwgY2h1bmtcblxuZnVuY3Rpb24gbG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkge1xuXHR2YXIgdXBkYXRlID0gcmVxdWlyZShcIi4vXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmh1KGNodW5rSWQpKTtcblx0dmFyIHVwZGF0ZWRNb2R1bGVzID0gdXBkYXRlLm1vZHVsZXM7XG5cdHZhciBydW50aW1lID0gdXBkYXRlLnJ1bnRpbWU7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gdXBkYXRlZE1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8odXBkYXRlZE1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSB1cGRhdGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHRpZih1cGRhdGVkTW9kdWxlc0xpc3QpIHVwZGF0ZWRNb2R1bGVzTGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgY3VycmVudFVwZGF0ZVJ1bnRpbWUucHVzaChydW50aW1lKTtcbn1cblxudmFyIGN1cnJlbnRVcGRhdGVDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZTtcbnZhciBjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcztcbnZhciBjdXJyZW50VXBkYXRlUnVudGltZTtcbmZ1bmN0aW9uIGFwcGx5SGFuZGxlcihvcHRpb25zKSB7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmYucmVxdWlyZUhtcjtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHVuZGVmaW5lZDtcblx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKHVwZGF0ZU1vZHVsZUlkKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG5cdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cblx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hhaW46IFtpZF0sXG5cdFx0XHRcdGlkOiBpZFxuXHRcdFx0fTtcblx0XHR9KTtcblx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuXHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuXHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFtb2R1bGUgfHxcblx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuXHRcdFx0KVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG5cdFx0XHRcdHZhciBwYXJlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbcGFyZW50SWRdO1xuXHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG5cdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcblx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcblx0XHRcdFx0cXVldWUucHVzaCh7XG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRpZDogcGFyZW50SWRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcblx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcblx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuXHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gYltpXTtcblx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcblx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuXHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG5cdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUobW9kdWxlKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyBtb2R1bGUuaWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcblx0XHQpO1xuXHR9O1xuXG5cdGZvciAodmFyIG1vZHVsZUlkIGluIGN1cnJlbnRVcGRhdGUpIHtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdFx0dmFyIG5ld01vZHVsZUZhY3RvcnkgPSBjdXJyZW50VXBkYXRlW21vZHVsZUlkXTtcblx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cblx0XHRcdHZhciByZXN1bHQgPSBuZXdNb2R1bGVGYWN0b3J5XG5cdFx0XHRcdD8gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKG1vZHVsZUlkKVxuXHRcdFx0XHQ6IHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcblx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHRcdH07XG5cdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuXHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcblx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG5cdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcblx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcblx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuXHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRlcnJvcjogYWJvcnRFcnJvclxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvQXBwbHkpIHtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBuZXdNb2R1bGVGYWN0b3J5O1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuXHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcblx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y3VycmVudFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuXHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG5cdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcblx0Zm9yICh2YXIgaiA9IDA7IGogPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBqKyspIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tqXTtcblx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdGlmIChcblx0XHRcdG1vZHVsZSAmJlxuXHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCB8fCBtb2R1bGUuaG90Ll9tYWluKSAmJlxuXHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuXHRcdFx0YXBwbGllZFVwZGF0ZVtvdXRkYXRlZE1vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG5cdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuXHRcdFx0IW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuXHRcdCkge1xuXHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuXHRcdFx0XHRtb2R1bGU6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdHJlcXVpcmU6IG1vZHVsZS5ob3QuX3JlcXVpcmVTZWxmLFxuXHRcdFx0XHRlcnJvckhhbmRsZXI6IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuXG5cdHJldHVybiB7XG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0fSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHVuZGVmaW5lZDtcblxuXHRcdFx0dmFyIGlkeDtcblx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG5cdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cblx0XHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuXHRcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcblx0XHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGRpc3Bvc2VIYW5kbGVyc1tqXS5jYWxsKG51bGwsIGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yRFttb2R1bGVJZF0gPSBkYXRhO1xuXG5cdFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG5cdFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG5cdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZS5jaGlsZHJlbltqXV07XG5cdFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG5cdFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcblx0XHRcdFx0XHRpZiAoaWR4ID49IDApIHtcblx0XHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG5cdFx0XHR2YXIgZGVwZW5kZW5jeTtcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGFwcGx5OiBmdW5jdGlvbiAocmVwb3J0RXJyb3IpIHtcblx0XHRcdC8vIGluc2VydCBuZXcgY29kZVxuXHRcdFx0Zm9yICh2YXIgdXBkYXRlTW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGFwcGxpZWRVcGRhdGUsIHVwZGF0ZU1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVt1cGRhdGVNb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBydW4gbmV3IHJ1bnRpbWUgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50VXBkYXRlUnVudGltZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlUnVudGltZVtpXShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHR2YXIgYWNjZXB0Q2FsbGJhY2sgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVyID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdGlmIChhY2NlcHRDYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihhY2NlcHRDYWxsYmFjaykgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChhY2NlcHRDYWxsYmFjayk7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVycy5wdXNoKGVycm9ySGFuZGxlcik7XG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzLnB1c2goZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgY2FsbGJhY2tzLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzW2tdLmNhbGwobnVsbCwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIGVycm9ySGFuZGxlcnNba10gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyc1trXShlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBvID0gMDsgbyA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IG8rKykge1xuXHRcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tvXTtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aXRlbS5yZXF1aXJlKG1vZHVsZUlkKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMSkge1xuXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjEsXG5cdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjEpO1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fVxuXHR9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJLnJlcXVpcmUgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGFwcGx5SGFuZGxlcnMpIHtcblx0aWYgKCFjdXJyZW50VXBkYXRlKSB7XG5cdFx0Y3VycmVudFVwZGF0ZSA9IHt9O1xuXHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSBbXTtcblx0XHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0fVxuXHRpZiAoIV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF07XG5cdH1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMucmVxdWlyZSA9IGZ1bmN0aW9uIChcblx0Y2h1bmtJZHMsXG5cdHJlbW92ZWRDaHVua3MsXG5cdHJlbW92ZWRNb2R1bGVzLFxuXHRwcm9taXNlcyxcblx0YXBwbHlIYW5kbGVycyxcblx0dXBkYXRlZE1vZHVsZXNMaXN0XG4pIHtcblx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB7fTtcblx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSByZW1vdmVkQ2h1bmtzO1xuXHRjdXJyZW50VXBkYXRlID0gcmVtb3ZlZE1vZHVsZXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuXHRcdG9ialtrZXldID0gZmFsc2U7XG5cdFx0cmV0dXJuIG9iajtcblx0fSwge30pO1xuXHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRjaHVua0lkcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0aWYgKFxuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkXG5cdFx0KSB7XG5cdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpKTtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gZmFsc2U7XG5cdFx0fVxuXHR9KTtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZi5yZXF1aXJlSG1yID0gZnVuY3Rpb24gKGNodW5rSWQsIHByb21pc2VzKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3MgJiZcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGVDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRcdCFjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdXG5cdFx0XHQpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkpO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0gPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHJlcXVpcmUoXCIuL1wiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGKCkpO1xuXHR9KVsnY2F0Y2gnXShmdW5jdGlvbihlcnIpIHsgaWYoZXJyLmNvZGUgIT09ICdNT0RVTEVfTk9UX0ZPVU5EJykgdGhyb3cgZXJyOyB9KTtcbn0iLCIiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zZXJ2ZXItZGV2LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbInVzZXJDb2xvcnMiLCJzeXN0ZW1Db2xvcnMiLCJiYXNlVVJMIiwiZGVmYXVsdFZpZXciLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfbmV4dCIsIl90aHJvdyIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJfY2xhc3NDYWxsQ2hlY2siLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsIkNhbGVuZGFyU2VydmljZSIsIlVzZXJTZXJ2aWNlIiwiZGIiLCJjYWxlbmRhclNlcnZpY2UiLCJDYWxlbmRhciIsIlVzZXIiLCJ1c2VyU2VydmljZSIsIkNhbGVuZGFyQ29udHJvbGxlciIsInNlcnZpY2UiLCJfdGhpcyIsIl9yZWYiLCJfY2FsbGVlIiwicmVxIiwicmVzIiwiZGF0YSIsInVzZXJSZXNwb25zZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJib2R5IiwidXNlcl9pZCIsImF1dGgiLCJ1c2VyIiwiZ2V0T25lIiwic3RhdHVzIiwic2VuZCIsImNhbGVuZGFyU2V0dGluZ3MiLCJ0MCIsIl94IiwiX3gyIiwiX3gzIiwiX3JlZjIiLCJfY2FsbGVlMiIsInJlc3BvbnNlIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwidXBkYXRlIiwicGFyYW1zIiwiY2FsZW5kYXJJZCIsInN0YXR1c0NvZGUiLCJfeDQiLCJfeDUiLCJfeDYiLCJfcmVmMyIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwidXBkYXRlQ2FsZW5kYXJTZXR0aW5ncyIsIl94NyIsIl94OCIsIl94OSIsIl9yZWY0IiwiX2NhbGxlZTQiLCJ0YXJnZXRDYWxlbmRhclNldHRpbmdzIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiZW50cnkiLCJpZCIsInVzZXJEZWZhdWx0IiwibWVzc2FnZSIsImVycm9yQ29kZSIsIl94MTAiLCJfeDExIiwiX3gxMiIsIkV2ZW50U2VydmljZSIsImV2ZW50U2VydmljZSIsIkV2ZW50IiwiRXZlbnRDb250cm9sbGVyIiwiY2FsZW5kYXJzIiwiY2FsZW5kYXJJZHMiLCJnZXRVc2VyQ2FsZW5kYXJzIiwiTm90Rm91bmRFcnJvciIsIm1hcCIsImNhbGVuZGFyIiwiZ2V0VXNlckV2ZW50cyIsImV2ZW50SWQiLCJqd3QiLCJhdXRoSnd0IiwiUmVmcmVzaFRva2VuIiwiUm9sZSIsIlVzZXJDb250cm9sbGVyIiwiX3JlcSRib2R5JHJvbGVzIiwiX3JlcSRib2R5Iiwicm9sZU5hbWVzIiwicm9sZXMiLCJhc3NpZ25Sb2xlcyIsImxvZ2luUmVzcG9uc2UiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJhY2Nlc3NUb2tlbiIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUX0tFWSIsImRlY29kZWQiLCJjYXRjaFRva2VuRXJyb3IiLCJyZXF1ZXN0VG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJyZWRpcmVjdCIsIl9yZWY1IiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJfeDEzIiwiX3gxNCIsIlJvbGVTZXJ2aWNlIiwiTU9OR09fSE9TVE5BTUUiLCJNT05HT19QT1JUIiwiTU9OR09fREIiLCJNT05HT19VUkwiLCJjb25jYXQiLCJtb25nb29zZSIsInJvbGVTZXJ2aWNlIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUZpbmRBbmRNb2RpZnkiLCJjb25zb2xlIiwibG9nIiwiY291bnREb2N1bWVudHMiLCJlcnIiLCJjb3VudCIsImZpbmQiLCJleGVjIiwiZXJyb3IiLCJleGl0IiwiVG9rZW5FeHBpcmVkRXJyb3IiLCJzZW5kU3RhdHVzIiwidmVyaWZ5VG9rZW4iLCJ0b2tlbiIsImhlYWRlcnMiLCJ2ZXJpZnlVUklBdXRoIiwidXJsIiwiZXZlbnQiLCJfY2FsZW5kYXIiLCJiYXNlVXJsIiwicm91dGUiLCJwYXRoIiwidXNlcklkIiwiZmluZE9uZSIsIl9pZCIsIiRlcSIsImlzQWRtaW4iLCJmaW5kQnlJZCIsIiRpbiIsImlzTW9kZXJhdG9yIiwidmVyaWZ5UmVnaXN0cmF0aW9uIiwiQmFkUmVxdWVzdEVycm9yIiwiY2hlY2tEdXBsaWNhdGVVc2VybmFtZSIsImZpbmRCeVVzZXJuYW1lIiwiY2hlY2tSb2xlc0V4aXN0IiwiaW5jbHVkZXMiLCJEdXBsaWNhdGVLZXlFcnJvciIsInNjaGVtYSIsIlNjaGVtYSIsInJlcXVpcmVkIiwicHJlIiwid2FzTmV3IiwiaXNOZXciLCJoYW5kbGVFMTEwMDAiLCJjb2RlIiwicG9zdCIsInN5c3RlbUNhbGVuZGFyc0NvdW50Iiwic2V0dGluZ3MiLCJ1c2VyQ2FsZW5kYXJzQ291bnQiLCJfc2V0dGluZ3MiLCJ2aXNpYmlsaXR5IiwiY29sb3IiLCJ1cGRhdGVNYW55IiwiJHB1c2giLCJEYXRhYmFzZUVycm9yIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJkb2MiLCIkcHVsbCIsInVwZGF0ZU9uZSIsImluZGV4IiwidW5pcXVlIiwibW9kZWwiLCJ0aXRsZSIsImRlc2MiLCJzdGFydCIsImVuZCIsImFsbERheSIsIkJvb2xlYW4iLCJ0aW1lWm9uZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJleHBpcnlEYXRlIiwic3RhdGljcyIsInZlcmlmeUV4cGlyYXRpb24iLCJleHBpcnlEYXRlT2JqIiwiRGF0ZSIsImdldFRpbWUiLCJiY3J5cHQiLCJTQUxUX1dPUktfRkFDVE9SIiwibWluTGVuZ3RoIiwic2FsdCIsImlzTW9kaWZpZWQiLCJnZW5TYWx0IiwiaGFzaCIsInN5c3RlbUNhbHMiLCJkZWZhdWx0Q2FsIiwibmV3RGVmYXVsdENhbCIsImNhbCIsImlkeCIsInNhdmUiLCJtZXRob2RzIiwidmFsaWRhdGVQYXNzd29yZCIsIl92YWxpZGF0ZVBhc3N3b3JkIiwiY2FuZGlkYXRlUGFzc3dvcmQiLCJjb21wYXJlIiwiZXhwcmVzcyIsInJvdXRlciIsIlJvdXRlciIsInB1dCIsInVwZGF0ZVNldHRpbmdzIiwiZ2V0IiwidXNlclJvdXRlciIsImNhbGVuZGFyUm91dGVyIiwiZXZlbnRSb3V0ZXIiLCJ1c2UiLCJyZWdpc3RlciIsImNvcnMiLCJVc2VyRmFjaW5nRXJyb3IiLCJCVUlMRF9ESVIiLCJfX2Rpcm5hbWUiLCJIVE1MX0ZJTEUiLCJQT1JUIiwiYXBwIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInNlbmRGaWxlIiwiX2VyciRtZXNzYWdlIiwiaGVhZGVyIiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiX3NsaWNlZFRvQXJyYXkiLCJsaXN0ZW4iLCJIdHRwUmVzcG9uc2UiLCJfb2JqIiwicmVzdWx0IiwiZmluZEJ5SWRBbmREZWxldGUiLCJkZWxldGVkIiwiZXZlbnRzIiwidjQiLCJ1dWlkdjQiLCJBdXRob3JpemF0aW9uRXJyb3IiLCJSZWZyZXNoVG9rZW5TZXJ2aWNlIiwiZXhwaXJlZEF0IiwiX3Rva2VuIiwic2V0U2Vjb25kcyIsImdldFNlY29uZHMiLCJKV1RfUkVGUkVTSF9FWFBJUkFUSU9OIiwidG9JU09TdHJpbmciLCJmaW5kQnlJZEFuZFJlbW92ZSIsInJvbGUiLCJyZWZyZXNoVG9rZW5Nb2RlbCIsInJvbGVNb2RlbCIsInZhbGlkYXRlZCIsInJlZnJlc2hUb2tlblJlc3BvbnNlIiwic2lnbiIsImV4cGlyZXNJbiIsIkpXVF9FWFBJUkFUSU9OIiwicmVmcmVzaFRva2VuU2VydmljZSIsImh0dHBSZXNwb25zZSIsImZsYXR0ZW5lZENhbGVuZGFyU2V0dGluZ3MiLCJwb3B1bGF0ZSIsIl9yZWY2IiwiX2NhbGxlZTYiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJuZXdQYXNzd29yZCIsIl9yZWY3IiwiX2NhbGxlZTciLCJjYWxlbmRhclNldHRpbmdzS2V5cyIsImRpZmZlZERhdGEiLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJ0cmVlIiwidW5kZWZpbmVkIiwiZmluZE9uZUFuZFVwZGF0ZSIsIiRzZXQiLCJhcnJheUZpbHRlcnMiLCJBcHBsaWNhdGlvbkVycm9yIiwiX0Vycm9yIiwiX2NhbGxTdXBlciIsIl9pbmhlcml0cyIsIl93cmFwTmF0aXZlU3VwZXIiLCJfQXBwbGljYXRpb25FcnJvciIsIl9BcHBsaWNhdGlvbkVycm9yMiIsIl9EYXRhYmFzZUVycm9yIiwib3B0aW9ucyIsImRlZmF1bHRFeGNsdXNpb25zRnJvbVJlc3BvbnNlIiwiQXJyYXkiLCJpc0FycmF5IiwieCIsImZpbHRlckRhdGEiLCJmaWx0ZXJlZERhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfVXNlckZhY2luZ0Vycm9yIiwiX1VzZXJGYWNpbmdFcnJvcjIiLCJfdGhpczIiLCJfaTIiLCJfT2JqZWN0JGVudHJpZXMyIiwiX09iamVjdCRlbnRyaWVzMiRfaSIsIl9Vc2VyRmFjaW5nRXJyb3IzIiwiX3RoaXMzIiwiX2kzIiwiX09iamVjdCRlbnRyaWVzMyIsIl9PYmplY3QkZW50cmllczMkX2kiXSwic291cmNlUm9vdCI6IiJ9