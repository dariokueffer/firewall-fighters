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
  _defineProperty(this, "shareCalendar", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res, next) {
      var calendarId, _req$body, userId, visibility, userDefault, color, isShared, calendar;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            calendarId = req.params.calendarId;
            _req$body = req.body, userId = _req$body.userId, visibility = _req$body.visibility, userDefault = _req$body.userDefault, color = _req$body.color, isShared = _req$body.isShared; // Use `userDefault` here
            // Share the calendar
            _context5.next = 5;
            return _this.service.shareCalendar(calendarId, userId);
          case 5:
            calendar = _context5.sent;
            _context5.next = 8;
            return _this.userService.updateSharedCalendarSettings(userId, calendarId, userDefault, visibility, color, isShared);
          case 8:
            return _context5.abrupt("return", res.status(200).send({
              message: 'Calendar shared successfully',
              calendar: calendar
            }));
          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", next(_context5.t0));
          case 14:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 11]]);
    }));
    return function (_x13, _x14, _x15) {
      return _ref5.apply(this, arguments);
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
            jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(loginResponse.accessToken, "a1ae585be48e4e17f4578b0f5275c3e2de8e2308d65ba86e4156cc1c7a7929fbddb8467da9fdf2a966746bf1cf62538dc0a8fdbbd68e00d78c699eeac09aa9de", /*#__PURE__*/function () {
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
  _defineProperty(this, "getUsers", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res, next) {
      var response;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _this.service.getAllUsernames(req.params.userId);
          case 3:
            response = _context6.sent;
            return _context6.abrupt("return", res.status(200).send(response.data));
          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", next(_context6.t0));
          case 10:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 7]]);
    }));
    return function (_x15, _x16, _x17) {
      return _ref6.apply(this, arguments);
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
  jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, "a1ae585be48e4e17f4578b0f5275c3e2de8e2308d65ba86e4156cc1c7a7929fbddb8467da9fdf2a966746bf1cf62538dc0a8fdbbd68e00d78c699eeac09aa9de", function (e, decoded) {
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
    var url, calendar, user, _calendar, event, _calendar2;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          url = req.baseUrl + req.route.path;
          _context.t0 = url;
          _context.next = _context.t0 === "".concat(req.baseUrl, "/:userId") ? 4 : _context.t0 === "".concat(req.baseUrl, "/:calendarId") ? 7 : _context.t0 === "".concat(req.baseUrl, "/:calendarId/settings") ? 13 : _context.t0 === "".concat(req.baseUrl, "/:eventId") ? 24 : 33;
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
          if (!(req.auth.user !== calendar.data.user_id && !calendar.data.shared_with.includes(req.auth.user))) {
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
          if (!user) {
            _context.next = 18;
            break;
          }
          return _context.abrupt("return", next());
        case 18:
          _context.next = 20;
          return calendarService.getOne(req.params.calendarId);
        case 20:
          _calendar = _context.sent;
          if (!(_calendar && _calendar.data.shared_with.includes(req.auth.user))) {
            _context.next = 23;
            break;
          }
          return _context.abrupt("return", next());
        case 23:
          return _context.abrupt("return", next());
        case 24:
          _context.next = 26;
          return eventService.getOne(req.params.eventId);
        case 26:
          event = _context.sent;
          _context.next = 29;
          return calendarService.getOne(event.data.calendar);
        case 29:
          _calendar2 = _context.sent;
          if (!(req.auth.user !== _calendar2.data.user_id && !_calendar2.data.shared_with.includes(req.auth.user))) {
            _context.next = 32;
            break;
          }
          return _context.abrupt("return", res.status(403).send({
            message: 'Requires admin role!',
            errorCode: 'role'
          }));
        case 32:
          return _context.abrupt("return", next());
        case 33:
          return _context.abrupt("return", res.status(403).send({
            message: 'Requires admin role!',
            errorCode: 'role'
          }));
        case 34:
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
var checkPasswordComplexEnough = function checkPasswordComplexEnough(req, res, next) {
  var password = req.body.password;
  var passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.{8,})');
  if (!passwordRegex.test(password)) {
    throw new _utils_userFacingErrors__WEBPACK_IMPORTED_MODULE_1__.BadRequestError('Password must contain at least a lowercase character, an uppercase character, a digit, a special character and must be at least eight character long.', {
      errorCode: 'password'
    });
  }
  return next();
};
var checkUsernameLongEnough = function checkUsernameLongEnough(req, res, next) {
  var username = req.body.username;
  if (username.length < 4) {
    throw new _utils_userFacingErrors__WEBPACK_IMPORTED_MODULE_1__.BadRequestError('Username is too short', {
      errorCode: 'username'
    });
  }
  return next();
};
var verifyRegistration = {
  checkDuplicateUsername: checkDuplicateUsername,
  checkRolesExist: checkRolesExist,
  checkPasswordComplexEnough: checkPasswordComplexEnough,
  checkUsernameLongEnough: checkUsernameLongEnough
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
  },
  shared_with: {
    type: [{
      type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
      ref: 'User'
    }],
    "default": []
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
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendar */ "./models/Calendar.js");
/* harmony import */ var _utils_databaseErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/databaseErrors */ "./utils/databaseErrors.js");
/* harmony import */ var config_appConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config/appConfig */ "./config/appConfig.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var bcrypt = __webpack_require__(/*! bcryptjs */ "bcryptjs");



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
    minLength: [8, 'Password should be at least four characters']
  },
  failedLoginAttempts: {
    type: Number,
    "default": 0
  },
  lastFailedLoginAttempt: {
    type: Date,
    "default": null
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
    },
    isShared: {
      type: Boolean,
      required: true,
      "default": false
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
          return bcrypt.genSalt(SALT_WORK_FACTOR);
        case 5:
          salt = _context.sent;
          _context.next = 8;
          return bcrypt.hash(this.password, salt);
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
    throw new _utils_databaseErrors__WEBPACK_IMPORTED_MODULE_2__.DuplicateKeyError('There was a conflict with an existing entry. Please try again.', {
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
        return _Calendar__WEBPACK_IMPORTED_MODULE_1__["default"].find({
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
            color: "#".concat(config_appConfig__WEBPACK_IMPORTED_MODULE_3__.systemColors[idx])
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
        return _Calendar__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
          name: this.username,
          user_id: this.id
        });
      case 13:
        defaultCal = _context2.sent;
        if (!defaultCal) {
          _context2.next = 16;
          break;
        }
        throw new _utils_databaseErrors__WEBPACK_IMPORTED_MODULE_2__.DuplicateKeyError('There was a conflict with an existing entry. Please try again.', {
          errorCode: 'user'
        });
      case 16:
        newDefaultCal = new _Calendar__WEBPACK_IMPORTED_MODULE_1__["default"]({
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
    var isValid;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return bcrypt.compare(candidatePassword, this.password);
        case 2:
          isValid = _context4.sent;
          if (isValid) {
            _context4.next = 10;
            break;
          }
          this.failedLoginAttempts += 1;
          this.lastFailedLoginAttempt = new Date();
          _context4.next = 8;
          return this.save();
        case 8:
          _context4.next = 14;
          break;
        case 10:
          this.failedLoginAttempts = 0;
          this.lastFailedLoginAttempt = null;
          _context4.next = 14;
          return this.save();
        case 14:
          return _context4.abrupt("return", isValid);
        case 15:
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
schema.methods.validateLockout = function validateLockout() {
  var lockoutTime = new Date(this.lastFailedLoginAttempt);
  lockoutTime.setMinutes(lockoutTime.getMinutes() + 15);
  return this.failedLoginAttempts >= 5 && new Date() < lockoutTime;
};
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

//router.get('/:userId', CalendarController.getUserCalendars);

// DELETE request to delete calendar
router["delete"]('/:calendarId', [_middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyToken, _middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyURIAuth], _controllers_CalendarController__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"]);

// PUT request to update calendar settings
router.put('/:calendarId/settings', [_middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyToken, _middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyURIAuth], _controllers_CalendarController__WEBPACK_IMPORTED_MODULE_2__["default"].updateSettings);
router.post('/:calendarId/share', _controllers_CalendarController__WEBPACK_IMPORTED_MODULE_2__["default"].shareCalendar);
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
router.post('/register', [_middleware__WEBPACK_IMPORTED_MODULE_1__.verifyRegistration.checkDuplicateUsername, _middleware__WEBPACK_IMPORTED_MODULE_1__.verifyRegistration.checkUsernameLongEnough, _middleware__WEBPACK_IMPORTED_MODULE_1__.verifyRegistration.checkPasswordComplexEnough, _middleware__WEBPACK_IMPORTED_MODULE_1__.verifyRegistration.checkRolesExist], [_controllers_UserController__WEBPACK_IMPORTED_MODULE_2__["default"].register, _controllers_UserController__WEBPACK_IMPORTED_MODULE_2__["default"].login]);

// POST request to login user (returns user object)
router.post('/login', _controllers_UserController__WEBPACK_IMPORTED_MODULE_2__["default"].login);

// POST request to refresh token
router.post('/refreshtoken', _controllers_UserController__WEBPACK_IMPORTED_MODULE_2__["default"].refreshToken);

// PUT request to update user
router.put('/:userId', [_middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyToken, _middleware__WEBPACK_IMPORTED_MODULE_1__.authJwt.verifyURIAuth], _controllers_UserController__WEBPACK_IMPORTED_MODULE_2__["default"].update);
router.get('/users/:userId', _controllers_UserController__WEBPACK_IMPORTED_MODULE_2__["default"].getUsers);
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
app.get('/hello', function (req, res) {
  res.send('Hello, World!');
});
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
console.log("PORT: ".concat("5000"));
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
              user_id: data.user_id,
              shared_with: data.shared_with
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
              $or: [{
                user_id: {
                  $in: [userId, 'system']
                }
              }, {
                shared_with: userId
              }]
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
  _defineProperty(this, "shareCalendar", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(calendarId, userId) {
      var calendar;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _this.model.findById(calendarId);
          case 3:
            calendar = _context6.sent;
            if (calendar) {
              _context6.next = 6;
              break;
            }
            throw new Error('Calendar not found');
          case 6:
            if (calendar.shared_with.includes(userId)) {
              _context6.next = 10;
              break;
            }
            calendar.shared_with.push(userId);
            _context6.next = 10;
            return calendar.save();
          case 10:
            return _context6.abrupt("return", calendar);
          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](0);
            throw _context6.t0;
          case 16:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 13]]);
    }));
    return function (_x7, _x8) {
      return _ref6.apply(this, arguments);
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
      var user, isLockedOut, validated, accessToken, refreshToken, refreshTokenResponse;
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
            isLockedOut = user.validateLockout();
            if (!isLockedOut) {
              _context2.next = 9;
              break;
            }
            throw new _utils_userFacingErrors__WEBPACK_IMPORTED_MODULE_3__.AuthorizationError('Account is locked out. Please try again later.', {
              errorCode: 'lockout'
            });
          case 9:
            _context2.next = 11;
            return user.validatePassword(password);
          case 11:
            validated = _context2.sent;
            if (validated) {
              _context2.next = 14;
              break;
            }
            throw new _utils_userFacingErrors__WEBPACK_IMPORTED_MODULE_3__.AuthorizationError('Invalid password', {
              errorCode: 'password'
            });
          case 14:
            // If password is valid, create JWT token
            accessToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({
              id: user._id
            }, "a1ae585be48e4e17f4578b0f5275c3e2de8e2308d65ba86e4156cc1c7a7929fbddb8467da9fdf2a966746bf1cf62538dc0a8fdbbd68e00d78c699eeac09aa9de", {
              expiresIn: Number("3600")
            }); // Create refresh token
            _context2.next = 17;
            return _this.refreshTokenService.create(user.id);
          case 17:
            refreshToken = _context2.sent;
            refreshTokenResponse = new _utils_httpResponse__WEBPACK_IMPORTED_MODULE_4__["default"](refreshToken);
            return _context2.abrupt("return", {
              accessToken: accessToken,
              refreshToken: refreshTokenResponse.data
            });
          case 22:
            _context2.prev = 22;
            _context2.t0 = _context2["catch"](0);
            throw _context2.t0;
          case 25:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 22]]);
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
                color: entry.color,
                isShared: entry.isShared,
                sharedWith: entry.calendar.sharedWith
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
  _defineProperty(this, "getAllUsernames", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(userId) {
      var users;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _this.model.find({
              _id: {
                $ne: userId
              }
            }, 'username _id');
          case 3:
            users = _context4.sent;
            return _context4.abrupt("return", new _utils_httpResponse__WEBPACK_IMPORTED_MODULE_4__["default"](users));
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            throw _context4.t0;
          case 10:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 7]]);
    }));
    return function (_x5) {
      return _ref4.apply(this, arguments);
    };
  }());
  _defineProperty(this, "refreshToken", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(requestToken) {
      var refreshToken, accessToken, response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _this.refreshTokenService.get(requestToken);
          case 3:
            refreshToken = _context5.sent;
            if (refreshToken) {
              _context5.next = 6;
              break;
            }
            throw new _utils_userFacingErrors__WEBPACK_IMPORTED_MODULE_3__.NotFoundError('Invalid request token', {
              errorCode: 'refreshToken'
            });
          case 6:
            _context5.next = 8;
            return _this.refreshTokenService.verify(refreshToken);
          case 8:
            // create new JWT token
            accessToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({
              id: refreshToken.user._id
            }, "a1ae585be48e4e17f4578b0f5275c3e2de8e2308d65ba86e4156cc1c7a7929fbddb8467da9fdf2a966746bf1cf62538dc0a8fdbbd68e00d78c699eeac09aa9de", {
              expiresIn: Number("3600")
            });
            response = {
              accessToken: accessToken
            };
            return _context5.abrupt("return", new _utils_httpResponse__WEBPACK_IMPORTED_MODULE_4__["default"](response));
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
  _defineProperty(this, "assignRoles", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(user, roleNames) {
      var roles;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _this.roleService.get(roleNames);
          case 3:
            roles = _context6.sent;
            if (!(!roles.data || roles.data.length < 1)) {
              _context6.next = 6;
              break;
            }
            throw new _utils_userFacingErrors__WEBPACK_IMPORTED_MODULE_3__.NotFoundError('Role(s) not found', {
              errorCode: 'role'
            });
          case 6:
            user.roles = roles.data.map(function (role) {
              return role.id;
            });
            _context6.next = 9;
            return user.save();
          case 9:
            return _context6.abrupt("return", _context6.sent);
          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](0);
            throw _context6.t0;
          case 15:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 12]]);
    }));
    return function (_x7, _x8) {
      return _ref6.apply(this, arguments);
    };
  }());
  _defineProperty(this, "update", /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(userId, data) {
      var user, validated, result;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _this.model.findById(userId);
          case 3:
            user = _context7.sent;
            if (user) {
              _context7.next = 6;
              break;
            }
            throw new _utils_userFacingErrors__WEBPACK_IMPORTED_MODULE_3__.NotFoundError('No matching user found');
          case 6:
            if (!data.password) {
              _context7.next = 13;
              break;
            }
            _context7.next = 9;
            return user.validatePassword(data.password);
          case 9:
            validated = _context7.sent;
            if (validated) {
              _context7.next = 12;
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
            _context7.next = 16;
            return user.save();
          case 16:
            result = _context7.sent;
            return _context7.abrupt("return", new _utils_httpResponse__WEBPACK_IMPORTED_MODULE_4__["default"](result));
          case 20:
            _context7.prev = 20;
            _context7.t0 = _context7["catch"](0);
            throw _context7.t0;
          case 23:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 20]]);
    }));
    return function (_x9, _x10) {
      return _ref7.apply(this, arguments);
    };
  }());
  _defineProperty(this, "updateCalendarSettings", /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(userId, data) {
      var calendarSettingsKeys, diffedData, update, user, httpResponse, flattenedCalendarSettings;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
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
            _context8.next = 9;
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
            user = _context8.sent;
            if (user) {
              _context8.next = 12;
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
            return _context8.abrupt("return", httpResponse);
          case 18:
            _context8.prev = 18;
            _context8.t0 = _context8["catch"](0);
            throw _context8.t0;
          case 21:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 18]]);
    }));
    return function (_x11, _x12) {
      return _ref8.apply(this, arguments);
    };
  }());
  _defineProperty(this, "updateSharedCalendarSettings", /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(userId, calendarId, userDefault, visibility, color, isShared) {
      var user, newCalendarSetting, existingCalendar;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _this.model.findById(userId);
          case 3:
            user = _context9.sent;
            if (user) {
              _context9.next = 6;
              break;
            }
            throw new Error('User not found');
          case 6:
            // Create the new calendar setting to add to the user's calendarSettings
            newCalendarSetting = {
              calendar: calendarId,
              userDefault: userDefault,
              visibility: visibility,
              color: color,
              isShared: true
            }; // Check if the calendar already exists in the user's settings
            existingCalendar = user.calendarSettings.find(function (entry) {
              return entry.calendar === calendarId;
            });
            if (existingCalendar) {
              _context9.next = 12;
              break;
            }
            user.calendarSettings.push(newCalendarSetting);
            _context9.next = 12;
            return user.save();
          case 12:
            return _context9.abrupt("return", user);
          case 15:
            _context9.prev = 15;
            _context9.t0 = _context9["catch"](0);
            throw _context9.t0;
          case 18:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 15]]);
    }));
    return function (_x13, _x14, _x15, _x16, _x17, _x18) {
      return _ref9.apply(this, arguments);
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

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

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
/******/ 		__webpack_require__.h = () => ("9e08202f70824a8a74e0")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxtQkFBbUIsMkJBQTJCO1dBQzlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLGtCQUFrQixjQUFjO1dBQ2hDO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxjQUFjLE1BQU07V0FDcEI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsY0FBYyxhQUFhO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsaUJBQWlCLDRCQUE0QjtXQUM3QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQSxnQkFBZ0IsNEJBQTRCO1dBQzVDO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBLGdCQUFnQiw0QkFBNEI7V0FDNUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0JBQWtCLHVDQUF1QztXQUN6RDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLG1CQUFtQixpQ0FBaUM7V0FDcEQ7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHNCQUFzQix1Q0FBdUM7V0FDN0Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esc0JBQXNCLHNCQUFzQjtXQUM1QztXQUNBO1dBQ0EsU0FBUztXQUNUO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxXQUFXO1dBQ1gsV0FBVztXQUNYO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsWUFBWTtXQUNaO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFVBQVU7V0FDVjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxXQUFXO1dBQ1g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQSxtQkFBbUIsd0NBQXdDO1dBQzNEO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTTtXQUNOO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxRQUFRO1dBQ1IsUUFBUTtXQUNSO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFNBQVM7V0FDVDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxPQUFPO1dBQ1A7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFFBQVE7V0FDUjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRSxJQUFJO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLEVBQUUsMkJBQTJCLGdEQUFnRDtXQUM3RTs7Ozs7VUUxZEE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9jb25maWcvYXBwQ29uZmlnLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL2NvbnRyb2xsZXJzL0NhbGVuZGFyQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9jb250cm9sbGVycy9FdmVudENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vY29udHJvbGxlcnMvVXNlckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vZGIvY29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9taWRkbGV3YXJlL2F1dGhKd3QuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vbWlkZGxld2FyZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9taWRkbGV3YXJlL3ZlcmlmeVJlZ2lzdHJhdGlvbi5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9tb2RlbHMvQ2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vbW9kZWxzL0V2ZW50LmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL21vZGVscy9SZWZyZXNoVG9rZW4uanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vbW9kZWxzL1JvbGUuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vbW9kZWxzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vbW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3JvdXRlcnMvY2FsZW5kYXJSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vcm91dGVycy9ldmVudFJvdXRlci5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9yb3V0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3JvdXRlcnMvdXNlclJvdXRlci5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9zZXJ2ZXItZGV2LmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3NlcnZpY2VzL0NhbGVuZGFyU2VydmljZS5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9zZXJ2aWNlcy9FdmVudFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vc2VydmljZXMvUmVmcmVzaFRva2VuU2VydmljZS5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9zZXJ2aWNlcy9Sb2xlU2VydmljZS5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9zZXJ2aWNlcy9Vc2VyU2VydmljZS5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi91dGlscy9iYXNlRXJyb3JzLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3V0aWxzL2RhdGFiYXNlRXJyb3JzLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3V0aWxzL2h0dHBSZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi91dGlscy91c2VyRmFjaW5nRXJyb3JzLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC9leHRlcm5hbCBjb21tb25qcyBcImJjcnlwdGpzXCIiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL2V4dGVybmFsIGNvbW1vbmpzIFwiY29yc1wiIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvZXh0ZXJuYWwgY29tbW9uanMgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvZXh0ZXJuYWwgY29tbW9uanMgXCJtb25nb29zZVwiIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC9leHRlcm5hbCBjb21tb25qcyBcInV1aWRcIiIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCB1cGRhdGUgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svcnVudGltZS9nZXQgdXBkYXRlIG1hbmlmZXN0IGZpbGVuYW1lIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC93ZWJwYWNrL3J1bnRpbWUvcmVxdWlyZSBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1c2VyQ29sb3JzID0gWycyRTg2QzEnLCAnMDBBNkQwJywgJzAwQzNDNycsICcyRERCQUInLCAnOURFRTg3J107XG5cbmNvbnN0IHN5c3RlbUNvbG9ycyA9IFsnMzQ0OTVFJywgJzRFNTk3NicsICc2RDY5OEQnLCAnOEY3ODlGJywgJ0I0ODhBRSddO1xuXG5jb25zdCBiYXNlVVJMID0gJy9jYWxlbmRhcmFwcCc7XG5cbmNvbnN0IGRlZmF1bHRWaWV3ID0gJ21vbnRoJztcblxuZXhwb3J0IHsgdXNlckNvbG9ycywgc3lzdGVtQ29sb3JzLCBiYXNlVVJMLCBkZWZhdWx0VmlldyB9O1xuIiwiaW1wb3J0IENhbGVuZGFyU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9DYWxlbmRhclNlcnZpY2UnO1xuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL1VzZXJTZXJ2aWNlJztcbmltcG9ydCBkYiBmcm9tICcuLi9tb2RlbHMnO1xuXG5jb25zdCBjYWxlbmRhclNlcnZpY2UgPSBuZXcgQ2FsZW5kYXJTZXJ2aWNlKGRiLkNhbGVuZGFyLCBkYi5Vc2VyKTtcbmNvbnN0IHVzZXJTZXJ2aWNlID0gbmV3IFVzZXJTZXJ2aWNlKGRiLlVzZXIpO1xuXG5jbGFzcyBDYWxlbmRhckNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihzZXJ2aWNlKSB7XG4gICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlID0gdXNlclNlcnZpY2U7XG4gIH1cblxuICBjcmVhdGUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgLi4ucmVxLmJvZHksXG4gICAgICAgIHVzZXJfaWQ6IHJlcS5hdXRoLnVzZXJcbiAgICAgIH07XG5cbiAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGUoZGF0YSk7XG5cbiAgICAgIGNvbnN0IHVzZXJSZXNwb25zZSA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZ2V0T25lKHJlcS5hdXRoLnVzZXIpO1xuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQodXNlclJlc3BvbnNlLmNhbGVuZGFyU2V0dGluZ3MpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlKHJlcS5wYXJhbXMuY2FsZW5kYXJJZCwgcmVxLmJvZHkpO1xuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXNDb2RlKS5zZW5kKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGVTZXR0aW5ncyA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHRyeSB7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS51cGRhdGVDYWxlbmRhclNldHRpbmdzKHJlcS5hdXRoLnVzZXIsIHJlcS5ib2R5KTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzQ29kZSkuc2VuZChyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG5cbiAgZGVsZXRlID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXJSZXNwb25zZSA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZ2V0T25lKHJlcS5hdXRoLnVzZXIpO1xuXG4gICAgICBjb25zdCB0YXJnZXRDYWxlbmRhclNldHRpbmdzID0gdXNlclJlc3BvbnNlLmNhbGVuZGFyU2V0dGluZ3MuZmlsdGVyKFxuICAgICAgICAoZW50cnkpID0+IGVudHJ5LmlkID09PSByZXEucGFyYW1zLmNhbGVuZGFySWRcbiAgICAgICk7XG5cbiAgICAgIGlmICh0YXJnZXRDYWxlbmRhclNldHRpbmdzLnVzZXJEZWZhdWx0ID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAuc3RhdHVzKDQwMylcbiAgICAgICAgICAuc2VuZCh7IG1lc3NhZ2U6ICdDYW5ub3QgZGVsZXRlIGRlZmF1bHQgY2FsZW5kYXIuIFBsZWFzZSB0cnkgYWdhaW4uJywgZXJyb3JDb2RlOiAnY2FsZW5kYXInIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5kZWxldGUocmVxLnBhcmFtcy5jYWxlbmRhcklkKTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzQ29kZSkuc2VuZChyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG5cbiAgc2hhcmVDYWxlbmRhciA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGNhbGVuZGFySWQgfSA9IHJlcS5wYXJhbXM7XG4gICAgICBjb25zdCB7IHVzZXJJZCwgdmlzaWJpbGl0eSwgdXNlckRlZmF1bHQsIGNvbG9yLCBpc1NoYXJlZCB9ID0gcmVxLmJvZHk7IC8vIFVzZSBgdXNlckRlZmF1bHRgIGhlcmVcblxuICBcbiAgICAgIC8vIFNoYXJlIHRoZSBjYWxlbmRhclxuICAgICAgY29uc3QgY2FsZW5kYXIgPSBhd2FpdCB0aGlzLnNlcnZpY2Uuc2hhcmVDYWxlbmRhcihjYWxlbmRhcklkLCB1c2VySWQpO1xuICBcbiAgICAgIC8vIFVwZGF0ZSB0aGUgY2FsZW5kYXJTZXR0aW5ncyBmb3IgdGhlIHVzZXIgd2l0aCB3aG9tIHRoZSBjYWxlbmRhciBpcyBzaGFyZWRcbiAgICAgIGF3YWl0IHRoaXMudXNlclNlcnZpY2UudXBkYXRlU2hhcmVkQ2FsZW5kYXJTZXR0aW5ncyh1c2VySWQsIGNhbGVuZGFySWQsIHVzZXJEZWZhdWx0LCB2aXNpYmlsaXR5LCBjb2xvciwgaXNTaGFyZWQpO1xuICBcbiAgICAgIC8vIFNlbmQgYSBzdWNjZXNzIHJlc3BvbnNlXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICBtZXNzYWdlOiAnQ2FsZW5kYXIgc2hhcmVkIHN1Y2Nlc3NmdWxseScsXG4gICAgICAgIGNhbGVuZGFyXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2FsZW5kYXJDb250cm9sbGVyKGNhbGVuZGFyU2VydmljZSwgdXNlclNlcnZpY2UpO1xuIiwiaW1wb3J0IEV2ZW50U2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9FdmVudFNlcnZpY2UnO1xuaW1wb3J0IENhbGVuZGFyU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9DYWxlbmRhclNlcnZpY2UnO1xuaW1wb3J0IGRiIGZyb20gJy4uL21vZGVscyc7XG5cbmNvbnN0IGV2ZW50U2VydmljZSA9IG5ldyBFdmVudFNlcnZpY2UoZGIuRXZlbnQpO1xuY29uc3QgY2FsZW5kYXJTZXJ2aWNlID0gbmV3IENhbGVuZGFyU2VydmljZShkYi5DYWxlbmRhcik7XG5cbmNsYXNzIEV2ZW50Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHNlcnZpY2UsIGNhbGVuZGFyU2VydmljZSkge1xuICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG4gICAgdGhpcy5jYWxlbmRhclNlcnZpY2UgPSBjYWxlbmRhclNlcnZpY2U7XG4gIH1cblxuICBjcmVhdGUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UuY3JlYXRlKHJlcS5ib2R5KTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzQ29kZSkuc2VuZChyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0VXNlckV2ZW50cyA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWxlbmRhcnMgPSBhd2FpdCB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRVc2VyQ2FsZW5kYXJzKHJlcS5hdXRoLnVzZXIpO1xuXG4gICAgICBpZiAoIWNhbGVuZGFycyB8fCBjYWxlbmRhcnMubGVuZ3RoIDwgMSkge1xuICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFcnJvcignTm8gbWF0Y2hpbmcgY2FsZW5kYXJzIGZvdW5kJywgeyBlcnJvckNvZGU6ICdjYWxlbmRhcicgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhbGVuZGFySWRzID0gY2FsZW5kYXJzLmRhdGEubWFwKChjYWxlbmRhcikgPT4gY2FsZW5kYXIuaWQpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRVc2VyRXZlbnRzKGNhbGVuZGFySWRzKTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzQ29kZSkuc2VuZChyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZShyZXEuYm9keSk7XG5cbiAgICAgIHJldHVybiByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1c0NvZGUpLnNlbmQocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuICB9O1xuXG4gIGRlbGV0ZSA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5kZWxldGUocmVxLnBhcmFtcy5ldmVudElkKTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzQ29kZSkuc2VuZChyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFdmVudENvbnRyb2xsZXIoZXZlbnRTZXJ2aWNlLCBjYWxlbmRhclNlcnZpY2UpO1xuIiwiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IGRiIGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvVXNlclNlcnZpY2UnO1xuaW1wb3J0IGF1dGhKd3QgZnJvbSAnLi4vbWlkZGxld2FyZS9hdXRoSnd0JztcblxuY29uc3QgdXNlclNlcnZpY2UgPSBuZXcgVXNlclNlcnZpY2UoZGIuVXNlciwgZGIuUmVmcmVzaFRva2VuLCBkYi5Sb2xlLCBkYi5DYWxlbmRhciwgZGIuRXZlbnQpO1xuXG5jbGFzcyBVc2VyQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHNlcnZpY2UpIHtcbiAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xuICB9XG5cbiAgLy8gY3JlYXRlIHVzZXIsIGFzc2lnbiByb2xlc1xuICByZWdpc3RlciA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZShyZXEuYm9keSk7XG5cbiAgICAgIGNvbnN0IHJvbGVOYW1lcyA9IHJlcS5ib2R5Py5yb2xlcyA/PyBbJ3VzZXInXTtcblxuICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmFzc2lnblJvbGVzKHVzZXIsIHJvbGVOYW1lcyk7XG5cbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuICB9O1xuXG4gIGxvZ2luID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxvZ2luUmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UubG9naW4ocmVxLmJvZHkudXNlcm5hbWUsIHJlcS5ib2R5LnBhc3N3b3JkKTtcblxuICAgICAgaWYgKCFsb2dpblJlc3BvbnNlLmFjY2Vzc1Rva2VuKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCh7IG1lc3NhZ2U6ICdObyB0b2tlbiBmb3VuZCEnLCBlcnJvckNvZGU6ICd1c2VyJyB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gRGVjb2RlIHRva2VuIGFuZCBsb29rdXAgZnVsbCB1c2VyIGRvY1xuICAgICAgand0LnZlcmlmeShsb2dpblJlc3BvbnNlLmFjY2Vzc1Rva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUX0tFWSwgYXN5bmMgKGUsIGRlY29kZWQpID0+IHtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICByZXR1cm4gYXV0aEp3dC5jYXRjaFRva2VuRXJyb3IoZSwgcmVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVzZXJSZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRPbmUoZGVjb2RlZC5pZCk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgLi4ubG9naW5SZXNwb25zZSxcbiAgICAgICAgICAuLi51c2VyUmVzcG9uc2VcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQocmVzcG9uc2UpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuICB9O1xuXG4gIHJlZnJlc2hUb2tlbiA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGNvbnN0IHsgcmVmcmVzaFRva2VuOiByZXF1ZXN0VG9rZW4gfSA9IHJlcS5ib2R5O1xuXG4gICAgaWYgKCFyZXF1ZXN0VG9rZW4pIHtcbiAgICAgIC8vIFJlcXVlc3QgdG9rZW4gaXMgbWlzc2luZ1xuICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL2xvZ2luJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLnJlZnJlc2hUb2tlbihyZXF1ZXN0VG9rZW4pO1xuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXNDb2RlKS5zZW5kKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlKHJlcS5hdXRoLnVzZXIsIHJlcS5ib2R5KTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzQ29kZSkuc2VuZChyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0VXNlcnMgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsVXNlcm5hbWVzKHJlcS5wYXJhbXMudXNlcklkKTsgLy8gQ2FsbCB0aGUgc2VydmljZSBtZXRob2RcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChyZXNwb25zZS5kYXRhKTsgXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlckNvbnRyb2xsZXIodXNlclNlcnZpY2UpO1xuIiwiaW1wb3J0IGRiIGZyb20gJ21vZGVscyc7XG5pbXBvcnQgUm9sZVNlcnZpY2UgZnJvbSAnc2VydmljZXMvUm9sZVNlcnZpY2UnO1xuaW1wb3J0IENhbGVuZGFyU2VydmljZSBmcm9tICdzZXJ2aWNlcy9DYWxlbmRhclNlcnZpY2UnO1xuXG5jb25zdCBNT05HT19IT1NUTkFNRSA9IHByb2Nlc3MuZW52Lk1PTkdPX0hPU1ROQU1FO1xuY29uc3QgTU9OR09fUE9SVCA9IHByb2Nlc3MuZW52Lk1PTkdPX1BPUlQ7XG5jb25zdCBNT05HT19EQiA9IHByb2Nlc3MuZW52Lk1PTkdPX0RCO1xuY29uc3QgTU9OR09fVVNFUk5BTUUgPSBwcm9jZXNzLmVudi5NT05HT19VU0VSTkFNRTtcbmNvbnN0IE1PTkdPX1BBU1NXT1JEID0gcHJvY2Vzcy5lbnYuTU9OR09fUEFTU1dPUkQ7XG5jb25zdCBNT05HT19VUkwgPSBgbW9uZ29kYjovLyR7TU9OR09fVVNFUk5BTUV9OiR7TU9OR09fUEFTU1dPUkR9QCR7TU9OR09fSE9TVE5BTUV9OiR7TU9OR09fUE9SVH0vJHtNT05HT19EQn0/YXV0aFNvdXJjZT1hZG1pbmA7XG5cbmNvbnN0IG1vbmdvb3NlID0gZGIubW9uZ29vc2U7XG5jb25zdCBSb2xlID0gZGIuUm9sZTtcbmNvbnN0IENhbGVuZGFyID0gZGIuQ2FsZW5kYXI7XG5cbmNvbnN0IHJvbGVTZXJ2aWNlID0gbmV3IFJvbGVTZXJ2aWNlKFJvbGUpO1xuY29uc3QgY2FsZW5kYXJTZXJ2aWNlID0gbmV3IENhbGVuZGFyU2VydmljZShDYWxlbmRhcik7XG5cbmNvbnN0IGluaXRpYWxpemVSb2xlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY291bnQgPSBhd2FpdCBSb2xlLmNvdW50RG9jdW1lbnRzKHt9KTtcbiAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuY3JlYXRlKCd1c2VyJyk7XG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuY3JlYXRlKCdtb2RlcmF0b3InKTtcbiAgICBhd2FpdCByb2xlU2VydmljZS5jcmVhdGUoJ2FkbWluJyk7XG4gICAgY29uc29sZS5sb2coJ0luaXRpYWxpemVkIHJvbGVzLicpO1xuICB9XG59O1xuXG5jb25zdCBpbml0aWFsaXplQ2FsZW5kYXJzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjb3VudCA9IGF3YWl0IENhbGVuZGFyLmNvdW50RG9jdW1lbnRzKHsgdXNlcl9pZDogJ3N5c3RlbScsIG5hbWU6ICdVUyBIb2xpZGF5cycgfSk7XG4gIGlmIChjb3VudCA9PT0gMCkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBuYW1lOiAnVVMgSG9saWRheXMnLFxuICAgICAgdXNlcl9pZDogJ3N5c3RlbSdcbiAgICB9O1xuXG4gICAgYXdhaXQgY2FsZW5kYXJTZXJ2aWNlLmNyZWF0ZShkYXRhKTtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRlZCBVUyBIb2xpZGF5cyBjYWxlbmRhci4nKTtcbiAgfVxufTtcblxubW9uZ29vc2VcbiAgLmNvbm5lY3QoTU9OR09fVVJMKVxuICAudGhlbihhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBNb25nb0RCJyk7XG5cbiAgICAvLyBJbml0aWFsaXplIHJvbGVzXG4gICAgYXdhaXQgaW5pdGlhbGl6ZVJvbGVzKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIHN5c3RlbSBjYWxlbmRhcnNcbiAgICBhd2FpdCBpbml0aWFsaXplQ2FsZW5kYXJzKCk7XG4gIH0pXG4gIC5jYXRjaCgoZSkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Nvbm5lY3Rpb24gZXJyb3InLCBlKTtcbiAgICBwcm9jZXNzLmV4aXQoKTtcbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRiO1xuIiwiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IGRiIGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgQ2FsZW5kYXJTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL0NhbGVuZGFyU2VydmljZSc7XG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvVXNlclNlcnZpY2UnO1xuaW1wb3J0IEV2ZW50U2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9FdmVudFNlcnZpY2UnO1xuXG5jb25zdCBVc2VyID0gZGIuVXNlcjtcbmNvbnN0IFJlZnJlc2hUb2tlbiA9IGRiLlJlZnJlc2hUb2tlbjtcbmNvbnN0IFJvbGUgPSBkYi5Sb2xlO1xuY29uc3QgQ2FsZW5kYXIgPSBkYi5DYWxlbmRhcjtcbmNvbnN0IEV2ZW50ID0gZGIuRXZlbnQ7XG5jb25zdCB7IFRva2VuRXhwaXJlZEVycm9yIH0gPSBqd3Q7XG5cbmNvbnN0IGNhbGVuZGFyU2VydmljZSA9IG5ldyBDYWxlbmRhclNlcnZpY2UoQ2FsZW5kYXIpO1xuY29uc3QgdXNlclNlcnZpY2UgPSBuZXcgVXNlclNlcnZpY2UoVXNlciwgUmVmcmVzaFRva2VuLCBSb2xlKTtcbmNvbnN0IGV2ZW50U2VydmljZSA9IG5ldyBFdmVudFNlcnZpY2UoRXZlbnQpO1xuXG5jb25zdCBjYXRjaFRva2VuRXJyb3IgPSAoZSwgcmVzKSA9PiB7XG4gIGlmIChlIGluc3RhbmNlb2YgVG9rZW5FeHBpcmVkRXJyb3IpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkISBBY2Nlc3MgVG9rZW4gd2FzIGV4cGlyZWQhJywgZXJyb3JDb2RlOiAnYWNjZXNzdG9rZW4nIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQhJywgZXJyb3JDb2RlOiAnYWNjZXNzdG9rZW4nIH0pO1xufTtcblxuY29uc3QgdmVyaWZ5VG9rZW4gPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVyc1sneC1hY2Nlc3MtdG9rZW4nXTtcblxuICBpZiAoIXRva2VuKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKHsgbWVzc2FnZTogJ05vIHRva2VuIHByb3ZpZGVkIScsIGVycm9yQ29kZTogJ2FjY2Vzc3Rva2VuJyB9KTtcbiAgfVxuXG4gIC8vIERlY29kZSB0b2tlbiBhbmQgYXR0YWNoIHVzZXIgaW5mbyB0byByZXF1ZXN0XG4gIGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVRfS0VZLCAoZSwgZGVjb2RlZCkgPT4ge1xuICAgIGlmIChlKSB7XG4gICAgICByZXR1cm4gY2F0Y2hUb2tlbkVycm9yKGUsIHJlcyk7XG4gICAgfVxuXG4gICAgcmVxLmF1dGggPSB7XG4gICAgICB1c2VyOiBkZWNvZGVkLmlkXG4gICAgfTtcblxuICAgIHJldHVybiBuZXh0KCk7XG4gIH0pO1xufTtcblxuLy8gQ2hlY2tzIGF1dGhlZCB1c2VyIGFnYWluc3QgcmVxdWVzdCBwYXJhbXMgZm9yIHJlc291cmNlIGF1dGhvcml6YXRpb25cbi8vIENhbiBiZSByZXBsYWNlZCB3aXRoIGFuIGFjY2VzcyBjb250cm9sIGxpc3Qgb3Igc2ltaWxhclxuY29uc3QgdmVyaWZ5VVJJQXV0aCA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCB1cmwgPSByZXEuYmFzZVVybCArIHJlcS5yb3V0ZS5wYXRoO1xuXG4gIHN3aXRjaCAodXJsKSB7XG4gICAgY2FzZSBgJHtyZXEuYmFzZVVybH0vOnVzZXJJZGA6IHtcbiAgICAgIGlmIChyZXEuYXV0aC51c2VyICE9PSByZXEucGFyYW1zLnVzZXJJZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnUmVxdWlyZXMgYWRtaW4gcm9sZSEnLCBlcnJvckNvZGU6ICdyb2xlJyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfVxuXG4gICAgY2FzZSBgJHtyZXEuYmFzZVVybH0vOmNhbGVuZGFySWRgOiB7XG4gICAgICAvLyBmZXRjaCB0YXJnZXQgY2FsZW5kYXJcbiAgICAgIGNvbnN0IGNhbGVuZGFyID0gYXdhaXQgY2FsZW5kYXJTZXJ2aWNlLmdldE9uZShyZXEucGFyYW1zLmNhbGVuZGFySWQpO1xuXG4gICAgICBpZiAocmVxLmF1dGgudXNlciAhPT0gY2FsZW5kYXIuZGF0YS51c2VyX2lkICYmICFjYWxlbmRhci5kYXRhLnNoYXJlZF93aXRoLmluY2x1ZGVzKHJlcS5hdXRoLnVzZXIpKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCh7IG1lc3NhZ2U6ICdSZXF1aXJlcyBhZG1pbiByb2xlIScsIGVycm9yQ29kZTogJ3JvbGUnIH0pO1xuICAgIH1cbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfVxuXG4gICAgY2FzZSBgJHtyZXEuYmFzZVVybH0vOmNhbGVuZGFySWQvc2V0dGluZ3NgOiB7XG4gICAgICAvLyBmZXRjaCB0YXJnZXQgdXNlclxuICAgICAgLy8gTW9uZ29vc2UgcmV0dXJucyBudWxsIGZvciAuZmluZE9uZSBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe1xuICAgICAgICBfaWQ6IHJlcS5hdXRoLnVzZXIsXG4gICAgICAgICdjYWxlbmRhclNldHRpbmdzLmNhbGVuZGFyJzoge1xuICAgICAgICAgICRlcTogcmVxLnBhcmFtcy5jYWxlbmRhcklkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9XG5cbiAgICAvLyBJZiBub3QgZm91bmQgaW4gdXNlciBzZXR0aW5ncywgY2hlY2sgaWYgdGhleSBhcmUgaW4gdGhlIHNoYXJlZF93aXRoIGxpc3Qgb2YgdGhlIGNhbGVuZGFyXG4gICAgY29uc3QgY2FsZW5kYXIgPSBhd2FpdCBjYWxlbmRhclNlcnZpY2UuZ2V0T25lKHJlcS5wYXJhbXMuY2FsZW5kYXJJZCk7XG4gICAgaWYgKGNhbGVuZGFyICYmIGNhbGVuZGFyLmRhdGEuc2hhcmVkX3dpdGguaW5jbHVkZXMocmVxLmF1dGgudXNlcikpIHtcbiAgICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9XG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH1cblxuICAgIGNhc2UgYCR7cmVxLmJhc2VVcmx9LzpldmVudElkYDoge1xuICAgICAgLy8gZmV0Y2ggdGFyZ2V0IGV2ZW50XG4gICAgICBjb25zdCBldmVudCA9IGF3YWl0IGV2ZW50U2VydmljZS5nZXRPbmUocmVxLnBhcmFtcy5ldmVudElkKTtcbiAgICAgIC8vIGZldGNoIGNvcnJlc3BvbmRpbmcgY2FsZW5kYXJcbiAgICAgIGNvbnN0IGNhbGVuZGFyID0gYXdhaXQgY2FsZW5kYXJTZXJ2aWNlLmdldE9uZShldmVudC5kYXRhLmNhbGVuZGFyKTtcblxuICAgICAgaWYgKHJlcS5hdXRoLnVzZXIgIT09IGNhbGVuZGFyLmRhdGEudXNlcl9pZCAmJiAhY2FsZW5kYXIuZGF0YS5zaGFyZWRfd2l0aC5pbmNsdWRlcyhyZXEuYXV0aC51c2VyKSkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnUmVxdWlyZXMgYWRtaW4gcm9sZSEnLCBlcnJvckNvZGU6ICdyb2xlJyB9KTtcbiAgICB9XG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnUmVxdWlyZXMgYWRtaW4gcm9sZSEnLCBlcnJvckNvZGU6ICdyb2xlJyB9KTtcbiAgfVxufTtcblxuY29uc3QgaXNBZG1pbiA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBVc2VyLmZpbmRCeUlkKHJlcS5hdXRoLnVzZXIpLmV4ZWMoKGUsIHVzZXIpID0+IHtcbiAgICBpZiAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuXG4gICAgLy8gTW9uZ29vc2UgcmV0dXJucyBbXSBmb3IgLmZpbmQgcXVlcnkgd2l0aCBubyBtYXRjaGVzXG4gICAgUm9sZS5maW5kKFxuICAgICAge1xuICAgICAgICBpZDogeyAkaW46IHVzZXIucm9sZXMgfVxuICAgICAgfSxcbiAgICAgIChlLCByb2xlcykgPT4ge1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChyb2xlc1tpXS5uYW1lID09PSAnYWRtaW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCh7IG1lc3NhZ2U6ICdSZXF1aXJlIEFkbWluIFJvbGUhJywgZXJyb3JDb2RlOiAncm9sZScgfSk7XG4gICAgICB9XG4gICAgKTtcbiAgfSk7XG59O1xuXG5jb25zdCBpc01vZGVyYXRvciA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBVc2VyLmZpbmRCeUlkKHJlcS5hdXRoLnVzZXIpLmV4ZWMoKGUsIHVzZXIpID0+IHtcbiAgICBpZiAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuXG4gICAgLy8gTW9uZ29vc2UgcmV0dXJucyBbXSBmb3IgLmZpbmQgcXVlcnkgd2l0aCBubyBtYXRjaGVzXG4gICAgUm9sZS5maW5kKFxuICAgICAge1xuICAgICAgICBpZDogeyAkaW46IHVzZXIucm9sZXMgfVxuICAgICAgfSxcbiAgICAgIChlLCByb2xlcykgPT4ge1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChyb2xlc1tpXS5uYW1lID09PSAnbW9kZXJhdG9yJykge1xuICAgICAgICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnUmVxdWlyZSBNb2RlcmF0b3IgUm9sZSEnLCBlcnJvckNvZGU6ICdyb2xlJyB9KTtcbiAgICAgIH1cbiAgICApO1xuICB9KTtcbn07XG5cbmNvbnN0IGF1dGhKd3QgPSB7XG4gIHZlcmlmeVRva2VuLFxuICB2ZXJpZnlVUklBdXRoLFxuICBpc0FkbWluLFxuICBpc01vZGVyYXRvclxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aEp3dDtcbiIsImltcG9ydCBhdXRoSnd0IGZyb20gJy4vYXV0aEp3dCc7XG5pbXBvcnQgdmVyaWZ5UmVnaXN0cmF0aW9uIGZyb20gJy4vdmVyaWZ5UmVnaXN0cmF0aW9uJztcblxuZXhwb3J0IHsgYXV0aEp3dCwgdmVyaWZ5UmVnaXN0cmF0aW9uIH07XG4iLCJpbXBvcnQgZGIgZnJvbSAnLi4vbW9kZWxzJztcblxuaW1wb3J0IHsgQmFkUmVxdWVzdEVycm9yIH0gZnJvbSAnLi4vdXRpbHMvdXNlckZhY2luZ0Vycm9ycyc7XG5cbmNvbnN0IGNoZWNrRHVwbGljYXRlVXNlcm5hbWUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBkYi5Vc2VyLmZpbmRCeVVzZXJuYW1lKHJlcS5ib2R5LnVzZXJuYW1lKS50aGVuKCh1c2VyKSA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgQmFkUmVxdWVzdEVycm9yKCdVc2VybmFtZSBpcyBhbHJlYWR5IGluIHVzZScsIHsgZXJyb3JDb2RlOiAndXNlcm5hbWUnIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBuZXh0KGUpO1xuICB9XG59O1xuXG5jb25zdCBjaGVja1JvbGVzRXhpc3QgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgLy8gQXR0YWNoaW5nIHJvbGVzIHRvIHJlZ2lzdHJhdGlvbiByZXF1ZXN0IGlzIG9wdGlvbmFsXG4gIGlmICghcmVxLmJvZHkucm9sZXMgfHwgcmVxLmJvZHkucm9sZXM/Lmxlbmd0aCA8IDEpIHJldHVybiBuZXh0KCk7XG5cbiAgLy8gQ2hlY2sgYXR0YWNoZWQgcm9sZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXEuYm9keS5yb2xlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICghcm9sZXMuaW5jbHVkZXMocmVxLmJvZHkucm9sZXNbaV0pKSB7XG4gICAgICB0aHJvdyBuZXcgQmFkUmVxdWVzdEVycm9yKGBSb2xlICR7cmVxLmJvZHkucm9sZXNbaV19IGRvZXMgbm90IGV4aXN0IWAsIHsgZXJyb3JDb2RlOiAncm9sZScgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5leHQoKTtcbn07XG5cbmNvbnN0IGNoZWNrUGFzc3dvcmRDb21wbGV4RW5vdWdoID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnN0IHBhc3N3b3JkID0gcmVxLmJvZHkucGFzc3dvcmQ7XG4gIGNvbnN0IHBhc3N3b3JkUmVnZXggPSBuZXcgUmVnRXhwKCdeKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qWzAtOV0pKD89LipbIUAjJCVeJiooKSwuP1wiOnt9fDw+XSkoPz0uezgsfSknKTtcblxuICBpZiAoIXBhc3N3b3JkUmVnZXgudGVzdChwYXNzd29yZCkpIHtcbiAgICB0aHJvdyBuZXcgQmFkUmVxdWVzdEVycm9yKCdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgYSBsb3dlcmNhc2UgY2hhcmFjdGVyLCBhbiB1cHBlcmNhc2UgY2hhcmFjdGVyLCBhIGRpZ2l0LCBhIHNwZWNpYWwgY2hhcmFjdGVyIGFuZCBtdXN0IGJlIGF0IGxlYXN0IGVpZ2h0IGNoYXJhY3RlciBsb25nLicsIHsgZXJyb3JDb2RlOiAncGFzc3dvcmQnIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5leHQoKTtcbn1cblxuY29uc3QgY2hlY2tVc2VybmFtZUxvbmdFbm91Z2ggPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgdXNlcm5hbWUgPSByZXEuYm9keS51c2VybmFtZTtcblxuICBpZiAodXNlcm5hbWUubGVuZ3RoIDwgNCkge1xuICAgIHRocm93IG5ldyBCYWRSZXF1ZXN0RXJyb3IoJ1VzZXJuYW1lIGlzIHRvbyBzaG9ydCcsIHsgZXJyb3JDb2RlOiAndXNlcm5hbWUnIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5leHQoKTtcbn1cblxuY29uc3QgdmVyaWZ5UmVnaXN0cmF0aW9uID0ge1xuICBjaGVja0R1cGxpY2F0ZVVzZXJuYW1lLFxuICBjaGVja1JvbGVzRXhpc3QsXG4gIGNoZWNrUGFzc3dvcmRDb21wbGV4RW5vdWdoLFxuICBjaGVja1VzZXJuYW1lTG9uZ0Vub3VnaFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5UmVnaXN0cmF0aW9uO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5pbXBvcnQgeyBEdXBsaWNhdGVLZXlFcnJvciB9IGZyb20gJy4uL3V0aWxzL2RhdGFiYXNlRXJyb3JzJztcbmltcG9ydCB7IHVzZXJDb2xvcnMsIHN5c3RlbUNvbG9ycyB9IGZyb20gJ2NvbmZpZy9hcHBDb25maWcnO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgbmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9LFxuICB1c2VyX2lkOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICdzeXN0ZW0nXG4gIH0sXG4gIHNoYXJlZF93aXRoOiB7XG4gICAgdHlwZTogW3sgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdVc2VyJyB9XSxcbiAgICBkZWZhdWx0OiBbXVxuICB9XG59KTtcblxuLy8gcHJlc2VydmluZyBpc05ldyBzdGF0ZSBmb3IgJ3Bvc3QnIG1pZGRsZXdhcmVcbnNjaGVtYS5wcmUoJ3NhdmUnLCBmdW5jdGlvbiAobmV4dCkge1xuICB0aGlzLndhc05ldyA9IHRoaXMuaXNOZXc7XG4gIG5leHQoKTtcbn0pO1xuXG4vLyBzY2hlbWEgbWlkZGxld2FyZSB0byBhcHBseSBhZnRlciBzYXZpbmdcbmNvbnN0IGhhbmRsZUUxMTAwMCA9IChlcnJvciwgcmVzLCBuZXh0KSA9PiB7XG4gIGlmIChlcnJvci5uYW1lID09PSAnTW9uZ29FcnJvcicgJiYgZXJyb3IuY29kZSA9PT0gMTEwMDApIHtcbiAgICB0aHJvdyBuZXcgRHVwbGljYXRlS2V5RXJyb3IoJ1RoZXJlIHdhcyBhIGNvbmZsaWN0IHdpdGggYW4gZXhpc3RpbmcgZW50cnkuIFBsZWFzZSB0cnkgYWdhaW4uJywge1xuICAgICAgZXJyb3JDb2RlOiAnY2FsZW5kYXInXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfVxufTtcblxuc2NoZW1hLnBvc3QoJ3NhdmUnLCBoYW5kbGVFMTEwMDApO1xuc2NoZW1hLnBvc3QoJ2ZpbmRPbmVBbmRVcGRhdGUnLCBoYW5kbGVFMTEwMDApO1xuXG4vLyBFbWJlZCBjYWxlbmRhciBzZXR0aW5ncyBpbiBjb3JyZXNwb25kaW5nIHVzZXIgZG9jKHMpXG5zY2hlbWEucG9zdCgnc2F2ZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuaWQgJiYgdGhpcy53YXNOZXcpIHtcbiAgICB0cnkge1xuICAgICAgLy8gc3lzdGVtIGNhbGVuZGFyIGNyZWF0ZWRcbiAgICAgIGlmICh0aGlzLnVzZXJfaWQgPT09ICdzeXN0ZW0nKSB7XG4gICAgICAgIC8vIGNvdW50IHN5c3RlbSBjYWxzXG4gICAgICAgIGNvbnN0IHN5c3RlbUNhbGVuZGFyc0NvdW50ID0gYXdhaXQgQ2FsZW5kYXIuY291bnREb2N1bWVudHMoeyB1c2VyX2lkOiAnc3lzdGVtJyB9KTtcblxuICAgICAgICAvLyBwcmVwYXJlIGNhbGVuZGFyIHNldHRpbmdzIG9iamVjdFxuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICAgICBjYWxlbmRhcjogdGhpcy5pZCxcbiAgICAgICAgICB1c2VyRGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgdmlzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICBjb2xvcjogYCMke3N5c3RlbUNvbG9yc1soc3lzdGVtQ2FsZW5kYXJzQ291bnQgLSAxKSAlIHN5c3RlbUNvbG9ycy5sZW5ndGhdfWBcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBlbWJlZCBpbiBhbGwgdXNlciBkb2NzXG4gICAgICAgIGF3YWl0IFVzZXIudXBkYXRlTWFueSh7fSwgeyAkcHVzaDogeyBjYWxlbmRhclNldHRpbmdzOiBzZXR0aW5ncyB9IH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdXNlciBjYWxlbmRhciBjcmVhdGVkXG5cbiAgICAgICAgLy8gY291bnQgdXNlciBjYWxlbmRhcnNcbiAgICAgICAgY29uc3QgdXNlckNhbGVuZGFyc0NvdW50ID0gYXdhaXQgQ2FsZW5kYXIuY291bnREb2N1bWVudHMoeyB1c2VyX2lkOiB0aGlzLnVzZXJfaWQgfSk7XG5cbiAgICAgICAgaWYgKHVzZXJDYWxlbmRhcnNDb3VudCA8IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRGF0YWJhc2VFcnJvcignTWF0Y2hpbmcgY2FsZW5kYXIocykgbm90IGZvdW5kJywge1xuICAgICAgICAgICAgZXJyb3JDb2RlOiAnY2FsZW5kYXInXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB1c2VyIGNhbGVuZGFyKHMpIGZvdW5kLCBwcm9jZXNzIGNhbGVuZGFyIHNldHRpbmdzXG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgICAgIGNhbGVuZGFyOiB0aGlzLmlkLFxuICAgICAgICAgIHZpc2liaWxpdHk6IHRydWUsXG4gICAgICAgICAgY29sb3I6IGAjJHt1c2VyQ29sb3JzWyh1c2VyQ2FsZW5kYXJzQ291bnQgLSAxKSAlIHVzZXJDb2xvcnMubGVuZ3RoXX1gXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gc2V0IHVzZXJEZWZhdWx0IHByb3BlcnR5XG4gICAgICAgIGlmICh1c2VyQ2FsZW5kYXJzQ291bnQgPT09IDEpIHtcbiAgICAgICAgICBzZXR0aW5ncy51c2VyRGVmYXVsdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0dGluZ3MudXNlckRlZmF1bHQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVtYmVkIGNhbGVuZGFyIHNldHRpbmdzIGluIHVzZXIgZG9jXG4gICAgICAgIGF3YWl0IFVzZXIuZmluZEJ5SWRBbmRVcGRhdGUodGhpcy51c2VyX2lkLCB7ICRwdXNoOiB7IGNhbGVuZGFyU2V0dGluZ3M6IHNldHRpbmdzIH0gfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGUpO1xuICAgIH1cbiAgfVxufSk7XG5cbi8vIERlbGV0ZSBjYWxlbmRhciBzZXR0aW5ncyBpbiBjb3JyZXNwb25kaW5nIHVzZXIgZG9jKHMpXG5zY2hlbWEucG9zdCgnZmluZE9uZUFuZERlbGV0ZScsIGFzeW5jIGZ1bmN0aW9uIChkb2MpIHtcbiAgdHJ5IHtcbiAgICAvLyBzeXN0ZW0gY2FsZW5kYXIgZGVsZXRlZFxuICAgIGlmIChkb2MudXNlcl9pZCA9PT0gJ3N5c3RlbScpIHtcbiAgICAgIC8vIGRlbGV0ZSBjYWxlbmRhciBzZXR0aW5ncyBmb3IgYWxsIHVzZXJzXG4gICAgICBhd2FpdCBVc2VyLnVwZGF0ZU1hbnkoe30sIHsgJHB1bGw6IHsgY2FsZW5kYXJTZXR0aW5nczogeyBjYWxlbmRhcjogZG9jLl9pZCB9IH0gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVzZXIgY2FsZW5kYXIgZGVsZXRlZFxuICAgICAgLy8gZGVsZXRlIGNhbGVuZGFyIHNldHRpbmdzIGZvciBtYXRjaGluZyB1c2VyXG4gICAgICBhd2FpdCBVc2VyLnVwZGF0ZU9uZSh7IF9pZDogZG9jLnVzZXJfaWQgfSwgeyAkcHVsbDogeyBjYWxlbmRhclNldHRpbmdzOiB7IGNhbGVuZGFyOiBkb2MuX2lkIH0gfSB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZSk7XG4gIH1cbn0pO1xuXG4vLyBzY2hlbWEgaW5kZXhcbnNjaGVtYS5pbmRleCh7IG5hbWU6IDEsIHVzZXJfaWQ6IDEgfSwgeyB1bmlxdWU6IHRydWUgfSk7XG5cbmNvbnN0IENhbGVuZGFyID0gbW9uZ29vc2UubW9kZWwoJ0NhbGVuZGFyJywgc2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXI7XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgdGl0bGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSB0aXRsZS4nXVxuICB9LFxuICBkZXNjOiB7XG4gICAgdHlwZTogU3RyaW5nXG4gIH0sXG4gIHN0YXJ0OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0VudGVyIGEgc3RhcnQgZGF0ZS4nXVxuICB9LFxuICBlbmQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYW4gZW5kIGRhdGUuJ11cbiAgfSxcbiAgYWxsRGF5OiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBkZWZhdWx0OiBmYWxzZVxuICB9LFxuICB0aW1lWm9uZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICByZWY6ICdDYWxlbmRhcidcbiAgfVxufSk7XG5cbmNvbnN0IEV2ZW50ID0gbW9uZ29vc2UubW9kZWwoJ0V2ZW50Jywgc2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnQ7XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgdG9rZW46IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSBuYW1lLiddXG4gIH0sXG4gIHVzZXI6IHtcbiAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgcmVmOiAnVXNlcicsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSB1c2VyIGlkLiddXG4gIH0sXG4gIGV4cGlyeURhdGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgZXhwaXJhdGlvbiBkYXRlLiddXG4gIH1cbn0pO1xuXG5zY2hlbWEuc3RhdGljcy52ZXJpZnlFeHBpcmF0aW9uID0gKHRva2VuKSA9PiB7XG4gIGNvbnN0IGV4cGlyeURhdGVPYmogPSBuZXcgRGF0ZSh0b2tlbi5leHBpcnlEYXRlKTtcbiAgcmV0dXJuIGV4cGlyeURhdGVPYmouZ2V0VGltZSgpIDwgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG5jb25zdCBSZWZyZXNoVG9rZW4gPSBtb25nb29zZS5tb2RlbCgnUmVmcmVzaFRva2VuJywgc2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVmcmVzaFRva2VuO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3Qgc2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIG5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSBuYW1lLiddXG4gIH1cbn0pO1xuXG5jb25zdCBSb2xlID0gbW9uZ29vc2UubW9kZWwoJ1JvbGUnLCBzY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBSb2xlO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IGJjcnlwdCA9IHJlcXVpcmUoJ2JjcnlwdGpzJyk7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9DYWxlbmRhcic7XG5pbXBvcnQgeyBEdXBsaWNhdGVLZXlFcnJvciB9IGZyb20gJy4uL3V0aWxzL2RhdGFiYXNlRXJyb3JzJztcbmltcG9ydCB7IHVzZXJDb2xvcnMsIHN5c3RlbUNvbG9ycyB9IGZyb20gJ2NvbmZpZy9hcHBDb25maWcnO1xuXG5jb25zdCBTQUxUX1dPUktfRkFDVE9SID0gMTA7XG5cbmNvbnN0IHNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICB1c2VybmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsICdFbnRlciBhIHVzZXJuYW1lLiddLFxuICAgIG1pbkxlbmd0aDogWzQsICdVc2VybmFtZSBzaG91bGQgYmUgYXQgbGVhc3QgZm91ciBjaGFyYWN0ZXJzJ10sXG4gICAgdW5pcXVlOiBbdHJ1ZSwgJ1RoYXQgdXNlcm5hbWUgaXMgdGFrZW4uJ11cbiAgfSxcbiAgcGFzc3dvcmQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSBwYXNzd29yZC4nXSxcbiAgICBtaW5MZW5ndGg6IFs4LCAnUGFzc3dvcmQgc2hvdWxkIGJlIGF0IGxlYXN0IGZvdXIgY2hhcmFjdGVycyddXG4gIH0sXG4gIGZhaWxlZExvZ2luQXR0ZW1wdHM6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMFxuICB9LFxuICBsYXN0RmFpbGVkTG9naW5BdHRlbXB0OiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICBkZWZhdWx0OiBudWxsXG4gIH0sXG4gIHJvbGVzOiBbXG4gICAge1xuICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgcmVmOiAnUm9sZSdcbiAgICB9XG4gIF0sXG4gIGNhbGVuZGFyU2V0dGluZ3M6IFtcbiAgICB7XG4gICAgICBjYWxlbmRhcjoge1xuICAgICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICAgIHJlZjogJ0NhbGVuZGFyJ1xuICAgICAgfSxcbiAgICAgIHVzZXJEZWZhdWx0OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBjb2xvcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICB9LFxuICAgICAgaXNTaGFyZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgIH1cbiAgXVxufSk7XG5cbi8vIHByZXNlcnZpbmcgaXNOZXcgc3RhdGUgZm9yICdwb3N0JyBtaWRkbGV3YXJlXG5zY2hlbWEucHJlKCdzYXZlJywgZnVuY3Rpb24gKG5leHQpIHtcbiAgdGhpcy53YXNOZXcgPSB0aGlzLmlzTmV3O1xuICBuZXh0KCk7XG59KTtcblxuLy8gc2NoZW1hIG1pZGRsZXdhcmUgdG8gYXBwbHkgYmVmb3JlIHNhdmluZ1xuc2NoZW1hLnByZSgnc2F2ZScsIGFzeW5jIGZ1bmN0aW9uIChuZXh0KSB7XG4gIC8vIG9ubHkgaGFzaCB0aGUgcGFzc3dvcmQgaWYgaXQgaGFzIGJlZW4gbW9kaWZpZWQgKG9yIGlzIG5ldylcbiAgaWYgKCF0aGlzLmlzTW9kaWZpZWQoJ3Bhc3N3b3JkJykpIHJldHVybiBuZXh0KCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0LmdlblNhbHQoU0FMVF9XT1JLX0ZBQ1RPUik7XG4gICAgdGhpcy5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHRoaXMucGFzc3dvcmQsIHNhbHQpO1xuXG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBuZXh0KGUpO1xuICB9XG59KTtcblxuLy8gc2NoZW1hIG1pZGRsZXdhcmUgdG8gY2hlY2sgZm9yIGR1cGxpY2F0ZSBrZXlzXG5jb25zdCBoYW5kbGVFMTEwMDAgPSAoZXJyb3IsIHJlcywgbmV4dCkgPT4ge1xuICBpZiAoZXJyb3IubmFtZSA9PT0gJ01vbmdvRXJyb3InICYmIGVycm9yLmNvZGUgPT09IDExMDAwKSB7XG4gICAgdGhyb3cgbmV3IER1cGxpY2F0ZUtleUVycm9yKCdUaGVyZSB3YXMgYSBjb25mbGljdCB3aXRoIGFuIGV4aXN0aW5nIGVudHJ5LiBQbGVhc2UgdHJ5IGFnYWluLicsIHtcbiAgICAgIGVycm9yQ29kZTogJ3VzZXJuYW1lJ1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXh0KCk7XG4gIH1cbn07XG5cbnNjaGVtYS5wb3N0KCdzYXZlJywgaGFuZGxlRTExMDAwKTtcblxuLy8gZm9yIG5ldyB1c2VyczogZW1iZWQgc3lzdGVtIGNhbCBzZXR0aW5ncyBhbmQgY3JlYXRlIHVzZXIgZGVmYXVsdCBjYWxlbmRhclxuc2NoZW1hLnBvc3QoJ3NhdmUnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmlkICYmIHRoaXMud2FzTmV3KSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIExvb2t1cCBzeXN0ZW0gY2Fsc1xuICAgICAgY29uc3Qgc3lzdGVtQ2FscyA9IGF3YWl0IENhbGVuZGFyLmZpbmQoe1xuICAgICAgICB1c2VyX2lkOiAnc3lzdGVtJ1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChzeXN0ZW1DYWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBbXTtcblxuICAgICAgICBzeXN0ZW1DYWxzLmZvckVhY2goKGNhbCwgaWR4KSA9PiB7XG4gICAgICAgICAgc2V0dGluZ3MucHVzaCh7XG4gICAgICAgICAgICBjYWxlbmRhcjogY2FsLmlkLFxuICAgICAgICAgICAgdXNlckRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbG9yOiBgIyR7c3lzdGVtQ29sb3JzW2lkeF19YFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZXR0aW5ncy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgIHRoaXMuY2FsZW5kYXJTZXR0aW5ncy5wdXNoKGVudHJ5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZW1iZWQgY2FsZW5kYXIgc2V0dGluZ3MgaW4gdXNlciBkb2NcbiAgICAgICAgYXdhaXQgdGhpcy5zYXZlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNoZWNrIGZvciBleGlzdGluZyB1c2VyIGRlZmF1bHQgY2FsXG4gICAgICBjb25zdCBkZWZhdWx0Q2FsID0gYXdhaXQgQ2FsZW5kYXIuZmluZE9uZSh7XG4gICAgICAgIG5hbWU6IHRoaXMudXNlcm5hbWUsXG4gICAgICAgIHVzZXJfaWQ6IHRoaXMuaWRcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGVmYXVsdENhbCkge1xuICAgICAgICB0aHJvdyBuZXcgRHVwbGljYXRlS2V5RXJyb3IoJ1RoZXJlIHdhcyBhIGNvbmZsaWN0IHdpdGggYW4gZXhpc3RpbmcgZW50cnkuIFBsZWFzZSB0cnkgYWdhaW4uJywge1xuICAgICAgICAgIGVycm9yQ29kZTogJ3VzZXInXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdEZWZhdWx0Q2FsID0gbmV3IENhbGVuZGFyKHtcbiAgICAgICAgbmFtZTogdGhpcy51c2VybmFtZSxcbiAgICAgICAgdXNlcl9pZDogdGhpcy5pZFxuICAgICAgfSk7XG5cbiAgICAgIC8vIENyZWF0ZSBkZWZhdWx0IGNhbGVuZGFyXG4gICAgICBhd2FpdCBuZXdEZWZhdWx0Q2FsLnNhdmUoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZSk7XG4gICAgfVxuICB9XG59KTtcblxuc2NoZW1hLnN0YXRpY3MuZmluZEJ5VXNlcm5hbWUgPSBhc3luYyBmdW5jdGlvbiAodXNlcm5hbWUpIHtcbiAgLy8gTW9uZ29vc2UgcmV0dXJucyBudWxsIGZvciAuZmluZE9uZSBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcbiAgcmV0dXJuIHRoaXMuZmluZE9uZSh7IHVzZXJuYW1lIH0pO1xufTtcblxuc2NoZW1hLm1ldGhvZHMudmFsaWRhdGVQYXNzd29yZCA9IGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQoY2FuZGlkYXRlUGFzc3dvcmQpIHtcbiAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNhbmRpZGF0ZVBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkKTsgLy8gQXdhaXQgdGhlIGJjcnlwdCBjb21wYXJpc29uXG5cbiAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgdGhpcy5mYWlsZWRMb2dpbkF0dGVtcHRzICs9IDE7XG4gICAgdGhpcy5sYXN0RmFpbGVkTG9naW5BdHRlbXB0ID0gbmV3IERhdGUoKTtcbiAgICBhd2FpdCB0aGlzLnNhdmUoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmZhaWxlZExvZ2luQXR0ZW1wdHMgPSAwO1xuICAgIHRoaXMubGFzdEZhaWxlZExvZ2luQXR0ZW1wdCA9IG51bGw7XG4gICAgYXdhaXQgdGhpcy5zYXZlKCk7XG4gIH1cblxuICByZXR1cm4gaXNWYWxpZDtcbn07XG5cbnNjaGVtYS5tZXRob2RzLnZhbGlkYXRlTG9ja291dCA9IGZ1bmN0aW9uIHZhbGlkYXRlTG9ja291dCgpIHtcbiAgY29uc3QgbG9ja291dFRpbWUgPSBuZXcgRGF0ZSh0aGlzLmxhc3RGYWlsZWRMb2dpbkF0dGVtcHQpO1xuICBsb2Nrb3V0VGltZS5zZXRNaW51dGVzKGxvY2tvdXRUaW1lLmdldE1pbnV0ZXMoKSArIDE1KTtcblxuICByZXR1cm4gdGhpcy5mYWlsZWRMb2dpbkF0dGVtcHRzID49IDUgJiYgbmV3IERhdGUoKSA8IGxvY2tvdXRUaW1lO1xufVxuXG5cbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbCgnVXNlcicsIHNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcbmltcG9ydCBSb2xlIGZyb20gJy4vUm9sZSc7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9FdmVudCc7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9DYWxlbmRhcic7XG5pbXBvcnQgUmVmcmVzaFRva2VuIGZyb20gJy4vUmVmcmVzaFRva2VuJztcblxuY29uc3QgZGIgPSB7XG4gIG1vbmdvb3NlLFxuICBVc2VyLFxuICBSb2xlLFxuICBFdmVudCxcbiAgQ2FsZW5kYXIsXG4gIFJlZnJlc2hUb2tlbixcbiAgcm9sZXM6IFsndXNlcicsICdhZG1pbicsICdtb2RlcmF0b3InXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGI7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGF1dGhKd3QgfSBmcm9tICcuLi9taWRkbGV3YXJlJztcbmltcG9ydCBDYWxlbmRhckNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvQ2FsZW5kYXJDb250cm9sbGVyJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuLy8gUE9TVCByZXF1ZXN0IHRvIGNyZWF0ZSBjYWxlbmRhclxucm91dGVyLnBvc3QoJy8nLCBbYXV0aEp3dC52ZXJpZnlUb2tlbl0sIENhbGVuZGFyQ29udHJvbGxlci5jcmVhdGUpO1xuXG4vLyBQVVQgcmVxdWVzdCB0byB1cGRhdGUgY2FsZW5kYXJcbnJvdXRlci5wdXQoJy86Y2FsZW5kYXJJZCcsIFthdXRoSnd0LnZlcmlmeVRva2VuLCBhdXRoSnd0LnZlcmlmeVVSSUF1dGhdLCBDYWxlbmRhckNvbnRyb2xsZXIudXBkYXRlKTtcblxuLy9yb3V0ZXIuZ2V0KCcvOnVzZXJJZCcsIENhbGVuZGFyQ29udHJvbGxlci5nZXRVc2VyQ2FsZW5kYXJzKTtcblxuLy8gREVMRVRFIHJlcXVlc3QgdG8gZGVsZXRlIGNhbGVuZGFyXG5yb3V0ZXIuZGVsZXRlKCcvOmNhbGVuZGFySWQnLCBbYXV0aEp3dC52ZXJpZnlUb2tlbiwgYXV0aEp3dC52ZXJpZnlVUklBdXRoXSwgQ2FsZW5kYXJDb250cm9sbGVyLmRlbGV0ZSk7XG5cbi8vIFBVVCByZXF1ZXN0IHRvIHVwZGF0ZSBjYWxlbmRhciBzZXR0aW5nc1xucm91dGVyLnB1dCgnLzpjYWxlbmRhcklkL3NldHRpbmdzJywgW2F1dGhKd3QudmVyaWZ5VG9rZW4sIGF1dGhKd3QudmVyaWZ5VVJJQXV0aF0sIENhbGVuZGFyQ29udHJvbGxlci51cGRhdGVTZXR0aW5ncyk7XG5cbnJvdXRlci5wb3N0KCcvOmNhbGVuZGFySWQvc2hhcmUnLCBDYWxlbmRhckNvbnRyb2xsZXIuc2hhcmVDYWxlbmRhcik7XG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBhdXRoSnd0IH0gZnJvbSAnLi4vbWlkZGxld2FyZSc7XG5pbXBvcnQgRXZlbnRDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL0V2ZW50Q29udHJvbGxlcic7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbi8vIFBPU1QgcmVxdWVzdCB0byBjcmVhdGUgZXZlbnRcbnJvdXRlci5wb3N0KCcvJywgW2F1dGhKd3QudmVyaWZ5VG9rZW5dLCBFdmVudENvbnRyb2xsZXIuY3JlYXRlKTtcblxuLy8gR0VUIHJlcXVlc3QgdG8gZ2V0IHVzZXIgZXZlbnRzXG5yb3V0ZXIuZ2V0KCcvdXNlcicsIFthdXRoSnd0LnZlcmlmeVRva2VuXSwgRXZlbnRDb250cm9sbGVyLmdldFVzZXJFdmVudHMpO1xuXG4vLyBQVVQgcmVxdWVzdCB0byB1cGRhdGUgZXZlbnRcbnJvdXRlci5wdXQoJy86ZXZlbnRJZCcsIFthdXRoSnd0LnZlcmlmeVRva2VuLCBhdXRoSnd0LnZlcmlmeVVSSUF1dGhdLCBFdmVudENvbnRyb2xsZXIudXBkYXRlKTtcblxuLy8gREVMRVRFIHJlcXVlc3QgdG8gZGVsZXRlIGV2ZW50XG5yb3V0ZXIuZGVsZXRlKCcvOmV2ZW50SWQnLCBbYXV0aEp3dC52ZXJpZnlUb2tlbiwgYXV0aEp3dC52ZXJpZnlVUklBdXRoXSwgRXZlbnRDb250cm9sbGVyLmRlbGV0ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHVzZXJSb3V0ZXIgZnJvbSAnLi91c2VyUm91dGVyJztcbmltcG9ydCBjYWxlbmRhclJvdXRlciBmcm9tICcuL2NhbGVuZGFyUm91dGVyJztcbmltcG9ydCBldmVudFJvdXRlciBmcm9tICcuL2V2ZW50Um91dGVyJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLnVzZSgnL3VzZXJzJywgdXNlclJvdXRlcik7XG5yb3V0ZXIudXNlKCcvY2FsZW5kYXJzJywgY2FsZW5kYXJSb3V0ZXIpO1xucm91dGVyLnVzZSgnL2V2ZW50cycsIGV2ZW50Um91dGVyKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgYXV0aEp3dCwgdmVyaWZ5UmVnaXN0cmF0aW9uIH0gZnJvbSAnLi4vbWlkZGxld2FyZSc7XG5pbXBvcnQgVXNlckNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvVXNlckNvbnRyb2xsZXInO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4vLyBQT1NUIHJlcXVlc3QgdG8gcmVnaXN0ZXIgdXNlclxucm91dGVyLnBvc3QoXG4gICcvcmVnaXN0ZXInLFxuICBbdmVyaWZ5UmVnaXN0cmF0aW9uLmNoZWNrRHVwbGljYXRlVXNlcm5hbWUsIHZlcmlmeVJlZ2lzdHJhdGlvbi5jaGVja1VzZXJuYW1lTG9uZ0Vub3VnaCwgdmVyaWZ5UmVnaXN0cmF0aW9uLmNoZWNrUGFzc3dvcmRDb21wbGV4RW5vdWdoLCB2ZXJpZnlSZWdpc3RyYXRpb24uY2hlY2tSb2xlc0V4aXN0XSxcbiAgW1VzZXJDb250cm9sbGVyLnJlZ2lzdGVyLCBVc2VyQ29udHJvbGxlci5sb2dpbl1cbik7XG5cbi8vIFBPU1QgcmVxdWVzdCB0byBsb2dpbiB1c2VyIChyZXR1cm5zIHVzZXIgb2JqZWN0KVxucm91dGVyLnBvc3QoJy9sb2dpbicsIFVzZXJDb250cm9sbGVyLmxvZ2luKTtcblxuLy8gUE9TVCByZXF1ZXN0IHRvIHJlZnJlc2ggdG9rZW5cbnJvdXRlci5wb3N0KCcvcmVmcmVzaHRva2VuJywgVXNlckNvbnRyb2xsZXIucmVmcmVzaFRva2VuKTtcblxuLy8gUFVUIHJlcXVlc3QgdG8gdXBkYXRlIHVzZXJcbnJvdXRlci5wdXQoJy86dXNlcklkJywgW2F1dGhKd3QudmVyaWZ5VG9rZW4sIGF1dGhKd3QudmVyaWZ5VVJJQXV0aF0sIFVzZXJDb250cm9sbGVyLnVwZGF0ZSk7XG5cbnJvdXRlci5nZXQoJy91c2Vycy86dXNlcklkJywgVXNlckNvbnRyb2xsZXIuZ2V0VXNlcnMpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iLCJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XG5cbmltcG9ydCBkYiBmcm9tICcuL2RiL2Nvbm5lY3Rpb24uanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcnMvaW5kZXguanMnO1xuaW1wb3J0IHsgVXNlckZhY2luZ0Vycm9yLCBEYXRhYmFzZUVycm9yIH0gZnJvbSAnLi91dGlscy9iYXNlRXJyb3JzLmpzJztcblxuY29uc3QgQlVJTERfRElSID0gX19kaXJuYW1lO1xuY29uc3QgSFRNTF9GSUxFID0gcGF0aC5yZXNvbHZlKEJVSUxEX0RJUiwgJ2luZGV4Lmh0bWwnKTtcbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDE7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb3JzKCkpO1xuXG4vLyBzdXBwb3J0IGRhdGEgZnJvbSBQT1NUIHJlcXVlc3RzXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcblxuLy8gc2VydmUgc3RhdGljIGZpbGVzXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKEJVSUxEX0RJUikpO1xuXG4vLyBVc2UgQVBJIHJvdXRlc1xuYXBwLnVzZSgnL2FwaS92MScsIHJvdXRlcik7XG5cbmFwcC5nZXQoJy9oZWxsbycsIChyZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCgnSGVsbG8sIFdvcmxkIScpO1xufSk7XG5cblxuXG5cbmFwcC5nZXQoJyonLCAocmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmRGaWxlKEhUTUxfRklMRSk7XG59KTtcblxuLy8gR2xvYmFsIGVycm9yIGhhbmRsZXJcbmFwcC51c2UoZnVuY3Rpb24gKGVyciwgcmVxLCByZXMsIG5leHQpIHtcbiAgcmVzLmhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICBjb25zdCBzdGF0dXMgPSBlcnIuc3RhdHVzIHx8IDQwMDtcblxuICBjb25zdCByZXNwb25zZSA9IHtcbiAgICBuYW1lOiBlcnIubmFtZSxcbiAgICBtZXNzYWdlOiBlcnIubWVzc2FnZSA/PyAnJ1xuICB9O1xuXG4gIGlmIChlcnIgaW5zdGFuY2VvZiBVc2VyRmFjaW5nRXJyb3IgfHwgZXJyIGluc3RhbmNlb2YgRGF0YWJhc2VFcnJvcikge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGVycikpIHtcbiAgICAgIHJlc3BvbnNlW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXMuc3RhdHVzKHN0YXR1cykuc2VuZChyZXNwb25zZSk7XG59KTtcblxuY29uc29sZS5sb2coYFBPUlQ6ICR7cHJvY2Vzcy5lbnYuUE9SVH1gKTtcblxuYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBzZXJ2ZXIgc3RhcnRlZCBhdCBodHRwOi8vbG9jYWxob3N0OiR7UE9SVH1gKTtcbn0pO1xuIiwiaW1wb3J0IEh0dHBSZXNwb25zZSBmcm9tICcuLi91dGlscy9odHRwUmVzcG9uc2UnO1xuaW1wb3J0IHsgc3lzdGVtQ29sb3JzLCB1c2VyQ29sb3JzIH0gZnJvbSAnY29uZmlnL2FwcENvbmZpZyc7XG5cbmNsYXNzIENhbGVuZGFyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKG1vZGVsKSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB9XG5cbiAgY3JlYXRlID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgX29iaiA9IHtcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICB1c2VyX2lkOiBkYXRhLnVzZXJfaWQsXG4gICAgICAgIHNoYXJlZF93aXRoOiBkYXRhLnNoYXJlZF93aXRoXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RlbC5jcmVhdGUoX29iaik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0T25lID0gYXN5bmMgKGNhbGVuZGFySWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gTW9uZ29vc2UgcmV0dXJucyBudWxsIGZvciAuZmluZEJ5SWQgcXVlcnkgd2l0aCBubyBtYXRjaGVzXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkKGNhbGVuZGFySWQpO1xuXG4gICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIC8vIEdldCB1c2VyIGFuZCBzeXN0ZW0gY2FsZW5kYXJzXG4gIGdldFVzZXJDYWxlbmRhcnMgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuZmluZCh7XG4gICAgICAgICRvcjogW1xuICAgICAgICAgIHsgdXNlcl9pZDogeyAkaW46IFt1c2VySWQsICdzeXN0ZW0nXSB9IH0sXG4gICAgICAgICAgeyBzaGFyZWRfd2l0aDogdXNlcklkIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZSA9IGFzeW5jIChjYWxlbmRhcklkLCBkYXRhKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVwZGF0ZSA9IHtcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lXG4gICAgICB9O1xuXG4gICAgICAvLyBNb25nb29zZSByZXR1cm5zIHRoZSBtb2RpZmllZCBkb2N1bWVudCAob3IgbnVsbCkgZm9yIC5maW5kQnlJZEFuZFVwZGF0ZSBxdWVyeSB3aXRoIG9wdGlvbiAnbmV3OiB0cnVlJ1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kQnlJZEFuZFVwZGF0ZShjYWxlbmRhcklkLCB1cGRhdGUsIHsgbmV3OiB0cnVlIH0pO1xuXG4gICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIGRlbGV0ZSA9IGFzeW5jIChjYWxlbmRhcklkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIE1vbmdvb3NlIHJldHVybnMgdGhlIG1hdGNoaW5nIGRvY3VtZW50IChvciBudWxsKSBmb3IgLmZpbmRCeUlkQW5kRGVsZXRlIHF1ZXJ5XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkQW5kRGVsZXRlKGNhbGVuZGFySWQpO1xuXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcignQ2FsZW5kYXIgbm90IGZvdW5kJyk7XG5cbiAgICAgICAgZXJyb3Iuc3RhdHVzQ29kZSA9IDQwNDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQsIHsgZGVsZXRlZDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcblxuICBzaGFyZUNhbGVuZGFyID0gYXN5bmMgKGNhbGVuZGFySWQsIHVzZXJJZCkgPT4ge1xuICAgIHRyeSB7XG5cbiAgICAgIC8vIEZpbmQgdGhlIGNhbGVuZGFyXG4gICAgICBjb25zdCBjYWxlbmRhciA9IGF3YWl0IHRoaXMubW9kZWwuZmluZEJ5SWQoY2FsZW5kYXJJZCk7XG4gICAgICBpZiAoIWNhbGVuZGFyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FsZW5kYXIgbm90IGZvdW5kJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aGUgdXNlciB0byB0aGUgc2hhcmVkX3dpdGggYXJyYXlcbiAgICAgIGlmICghY2FsZW5kYXIuc2hhcmVkX3dpdGguaW5jbHVkZXModXNlcklkKSkge1xuICAgICAgICBjYWxlbmRhci5zaGFyZWRfd2l0aC5wdXNoKHVzZXJJZCk7XG4gICAgICAgIGF3YWl0IGNhbGVuZGFyLnNhdmUoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhbGVuZGFyO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhclNlcnZpY2U7XG4iLCJpbXBvcnQgSHR0cFJlc3BvbnNlIGZyb20gJy4uL3V0aWxzL2h0dHBSZXNwb25zZSc7XG5cbmNsYXNzIEV2ZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKG1vZGVsKSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB9XG5cbiAgY3JlYXRlID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5jcmVhdGUoZGF0YSk7XG5cbiAgICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKHJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0T25lID0gYXN5bmMgKGV2ZW50SWQpID0+IHtcbiAgICAvLyBNb25nb29zZSByZXR1cm5zIG51bGwgZm9yIC5maW5kQnlJZCBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkKGV2ZW50SWQpO1xuXG4gICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UocmVzdWx0KTtcbiAgfTtcblxuICBnZXRVc2VyRXZlbnRzID0gYXN5bmMgKGNhbGVuZGFySWRzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIE1vbmdvb3NlIHJldHVybnMgW10gZm9yIC5maW5kIHF1ZXJ5IHdpdGggbm8gbWF0Y2hlc1xuICAgICAgY29uc3QgZXZlbnRzID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kKHsgY2FsZW5kYXI6IHsgJGluOiBjYWxlbmRhcklkcyB9IH0pO1xuXG4gICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShldmVudHMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZSA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVwZGF0ZSA9IHtcbiAgICAgICAgLi4uZGF0YVxuICAgICAgfTtcblxuICAgICAgZGVsZXRlIHVwZGF0ZS5pZDtcblxuICAgICAgLy8gTW9uZ29vc2UgcmV0dXJucyB0aGUgbW9kaWZpZWQgZG9jdW1lbnQgKG9yIG51bGwpIGZvciAuZmluZEJ5SWRBbmRVcGRhdGUgcXVlcnkgd2l0aCBvcHRpb24gJ25ldzogdHJ1ZSdcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuZmluZEJ5SWRBbmRVcGRhdGUoZGF0YS5pZCwgdXBkYXRlLCB7IG5ldzogdHJ1ZSB9KTtcblxuICAgICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcblxuICBkZWxldGUgPSBhc3luYyAoaWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gTW9uZ29vc2UgcmV0dXJucyB0aGUgbWF0Y2hpbmcgZG9jdW1lbnQgKG9yIG51bGwpIGZvciAuZmluZEJ5SWRBbmREZWxldGUgcXVlcnlcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuZmluZEJ5SWRBbmREZWxldGUoaWQpO1xuXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcignRXZlbnQgbm90IGZvdW5kJyk7XG5cbiAgICAgICAgZXJyb3Iuc3RhdHVzQ29kZSA9IDQwNDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQsIHsgZGVsZXRlZDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTZXJ2aWNlO1xuIiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBBdXRob3JpemF0aW9uRXJyb3IgfSBmcm9tICcuLi91dGlscy91c2VyRmFjaW5nRXJyb3JzJztcblxuY2xhc3MgUmVmcmVzaFRva2VuU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKG1vZGVsKSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB9XG5cbiAgY3JlYXRlID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleHBpcmVkQXQgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICBleHBpcmVkQXQuc2V0U2Vjb25kcyhleHBpcmVkQXQuZ2V0U2Vjb25kcygpICsgTnVtYmVyKHByb2Nlc3MuZW52LkpXVF9SRUZSRVNIX0VYUElSQVRJT04pKTtcblxuICAgICAgY29uc3QgX3Rva2VuID0gdXVpZHY0KCk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHRva2VuOiBfdG9rZW4sXG4gICAgICAgIHVzZXI6IHVzZXJJZCxcbiAgICAgICAgZXhwaXJ5RGF0ZTogZXhwaXJlZEF0LnRvSVNPU3RyaW5nKClcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuY3JlYXRlKGRhdGEpO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIGdldCA9IGFzeW5jIChyZXF1ZXN0VG9rZW4pID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gTW9uZ29vc2UgcmV0dXJucyBudWxsIGZvciAuZmluZE9uZSBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuZmluZE9uZSh7IHRva2VuOiByZXF1ZXN0VG9rZW4gfSk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgdmVyaWZ5ID0gYXN5bmMgKHRva2VuKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLm1vZGVsLnZlcmlmeUV4cGlyYXRpb24odG9rZW4pKSB7XG4gICAgICAgIC8vIFJlZnJlc2ggdG9rZW4gZXhwaXJlZFxuICAgICAgICAvLyBNb25nb29zZSByZXR1cm5zIHRoZSBtYXRjaGluZyBkb2N1bWVudCAob3IgbnVsbCkgZm9yIC5maW5kQnlJZEFuZFJlbW92ZSBxdWVyeVxuICAgICAgICBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkQW5kUmVtb3ZlKHRva2VuLmlkLCB7XG4gICAgICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhyb3cgbmV3IEF1dGhvcml6YXRpb25FcnJvcignUmVmcmVzaCB0b2tlbiBleHBpcmVkJywgeyBlcnJvckNvZGU6ICdyZWZyZXNoVG9rZW4nIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZnJlc2hUb2tlblNlcnZpY2U7XG4iLCJpbXBvcnQgSHR0cFJlc3BvbnNlIGZyb20gJy4uL3V0aWxzL2h0dHBSZXNwb25zZSc7XG5cbmNsYXNzIFJvbGVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IobW9kZWwpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICBjcmVhdGUgPSBhc3luYyAobmFtZSkgPT4ge1xuICAgIGF3YWl0IHRoaXMubW9kZWwuY3JlYXRlKHsgbmFtZSB9KS50aGVuKChyb2xlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgQ3JlYXRlZCByb2xlOiAke3JvbGUubmFtZX1gKTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXQgPSBhc3luYyAocm9sZXMpID0+IHtcbiAgICAvLyBNb25nb29zZSByZXR1cm5zIFtdIGZvciAuZmluZCBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmQoeyBuYW1lOiB7ICRpbjogcm9sZXMgfSB9KTtcblxuICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKHJlc3VsdCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvbGVTZXJ2aWNlO1xuIiwiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IFJlZnJlc2hUb2tlblNlcnZpY2UgZnJvbSAnLi9SZWZyZXNoVG9rZW5TZXJ2aWNlJztcbmltcG9ydCBSb2xlU2VydmljZSBmcm9tICcuL1JvbGVTZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhvcml6YXRpb25FcnJvciwgTm90Rm91bmRFcnJvciB9IGZyb20gJy4uL3V0aWxzL3VzZXJGYWNpbmdFcnJvcnMnO1xuaW1wb3J0IEh0dHBSZXNwb25zZSBmcm9tICcuLi91dGlscy9odHRwUmVzcG9uc2UnO1xuXG5jbGFzcyBVc2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKG1vZGVsLCByZWZyZXNoVG9rZW5Nb2RlbCwgcm9sZU1vZGVsKSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMucmVmcmVzaFRva2VuU2VydmljZSA9IG5ldyBSZWZyZXNoVG9rZW5TZXJ2aWNlKHJlZnJlc2hUb2tlbk1vZGVsKTtcbiAgICB0aGlzLnJvbGVTZXJ2aWNlID0gbmV3IFJvbGVTZXJ2aWNlKHJvbGVNb2RlbCk7XG4gIH1cblxuICBjcmVhdGUgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1vZGVsLmNyZWF0ZShkYXRhKTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcblxuICAvLyBMb29rIHVwIHVzZXIsIHZhbGlkYXRlIHB3LCBjcmVhdGUgcmVmcmVzaCB0b2tlblxuICBsb2dpbiA9IGFzeW5jICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gTW9uZ29vc2UgcmV0dXJucyBudWxsIGZvciAuZmluZE9uZSBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRPbmUoeyB1c2VybmFtZSB9KTtcblxuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIC8vIFVzZXIgbm90IGZvdW5kXG4gICAgICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKCdJbnZhbGlkIHVzZXJuYW1lJywgeyBlcnJvckNvZGU6ICd1c2VybmFtZScgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzTG9ja2VkT3V0ID0gdXNlci52YWxpZGF0ZUxvY2tvdXQoKTtcblxuICAgICAgaWYgKGlzTG9ja2VkT3V0KSB7XG4gICAgICAgIHRocm93IG5ldyBBdXRob3JpemF0aW9uRXJyb3IoJ0FjY291bnQgaXMgbG9ja2VkIG91dC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nLCB7IGVycm9yQ29kZTogJ2xvY2tvdXQnIH0pO1xuICAgICAgfVxuXG5cbiAgICAgIC8vIHByb2Nlc3MgbG9naW5cbiAgICAgIGNvbnN0IHZhbGlkYXRlZCA9IGF3YWl0IHVzZXIudmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCk7XG5cbiAgICAgIGlmICghdmFsaWRhdGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBBdXRob3JpemF0aW9uRXJyb3IoJ0ludmFsaWQgcGFzc3dvcmQnLCB7XG4gICAgICAgICAgZXJyb3JDb2RlOiAncGFzc3dvcmQnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBwYXNzd29yZCBpcyB2YWxpZCwgY3JlYXRlIEpXVCB0b2tlblxuICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBqd3Quc2lnbih7IGlkOiB1c2VyLl9pZCB9LCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUX0tFWSwge1xuICAgICAgICBleHBpcmVzSW46IE51bWJlcihwcm9jZXNzLmVudi5KV1RfRVhQSVJBVElPTilcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDcmVhdGUgcmVmcmVzaCB0b2tlblxuICAgICAgY29uc3QgcmVmcmVzaFRva2VuID0gYXdhaXQgdGhpcy5yZWZyZXNoVG9rZW5TZXJ2aWNlLmNyZWF0ZSh1c2VyLmlkKTtcblxuICAgICAgY29uc3QgcmVmcmVzaFRva2VuUmVzcG9uc2UgPSBuZXcgSHR0cFJlc3BvbnNlKHJlZnJlc2hUb2tlbik7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjY2Vzc1Rva2VuLFxuICAgICAgICByZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlblJlc3BvbnNlLmRhdGFcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0T25lID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xuICAgIC8vIFJldHJpZXZlIHVzZXIgZG9jIGFuZCBwb3B1bGF0ZSByZWZlcmVuY2VkIGZpZWxkc1xuICAgIC8vIE1vbmdvb3NlIHJldHVybnMgbnVsbCBmb3IgLmZpbmRCeUlkIHF1ZXJ5IHdpdGggbm8gbWF0Y2hlc1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kQnlJZCh1c2VySWQpLnBvcHVsYXRlKFsncm9sZXMnLCAnY2FsZW5kYXJTZXR0aW5ncy5jYWxlbmRhciddKTtcblxuICAgIGNvbnN0IGh0dHBSZXNwb25zZSA9IG5ldyBIdHRwUmVzcG9uc2UocmVzcG9uc2UpO1xuXG4gICAgY29uc3QgZmxhdHRlbmVkQ2FsZW5kYXJTZXR0aW5ncyA9IGh0dHBSZXNwb25zZS5kYXRhLmNhbGVuZGFyU2V0dGluZ3MubWFwKChlbnRyeSkgPT4gKHtcbiAgICAgIGlkOiBlbnRyeS5jYWxlbmRhci5pZCxcbiAgICAgIG5hbWU6IGVudHJ5LmNhbGVuZGFyLm5hbWUsXG4gICAgICB1c2VyX2lkOiBlbnRyeS5jYWxlbmRhci51c2VyX2lkLFxuICAgICAgdXNlckRlZmF1bHQ6IGVudHJ5LnVzZXJEZWZhdWx0LFxuICAgICAgdmlzaWJpbGl0eTogZW50cnkudmlzaWJpbGl0eSxcbiAgICAgIGNvbG9yOiBlbnRyeS5jb2xvcixcbiAgICAgIGlzU2hhcmVkOiBlbnRyeS5pc1NoYXJlZCxcbiAgICAgIHNoYXJlZFdpdGg6IGVudHJ5LmNhbGVuZGFyLnNoYXJlZFdpdGhcbiAgICB9KSk7XG5cbiAgICBodHRwUmVzcG9uc2UuZGF0YS5jYWxlbmRhclNldHRpbmdzID0gZmxhdHRlbmVkQ2FsZW5kYXJTZXR0aW5ncztcblxuICAgIHJldHVybiBodHRwUmVzcG9uc2UuZGF0YTtcbiAgfTtcblxuXG4gIGdldEFsbFVzZXJuYW1lcyA9IGFzeW5jICh1c2VySWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gUmV0cmlldmUgb25seSBgdXNlcm5hbWVgIGFuZCBgX2lkYCBmaWVsZHMgZm9yIGFsbCB1c2Vyc1xuICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmQoeyBfaWQ6IHsgJG5lOiB1c2VySWQgfSB9LCAndXNlcm5hbWUgX2lkJyk7XG5cblxuICAgICAgLy8gV3JhcCBpbiBhbiBIdHRwUmVzcG9uc2VcbiAgICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKHVzZXJzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcblxuICByZWZyZXNoVG9rZW4gPSBhc3luYyAocmVxdWVzdFRva2VuKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IGF3YWl0IHRoaXMucmVmcmVzaFRva2VuU2VydmljZS5nZXQocmVxdWVzdFRva2VuKTtcblxuICAgICAgaWYgKCFyZWZyZXNoVG9rZW4pIHtcbiAgICAgICAgLy8gUmVmcmVzaCB0b2tlbiBub3QgZm91bmRcbiAgICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kRXJyb3IoJ0ludmFsaWQgcmVxdWVzdCB0b2tlbicsIHsgZXJyb3JDb2RlOiAncmVmcmVzaFRva2VuJyB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gVGhyb3dzIGVycm9yIG9uIGV4cGlyZWQgcmVmcmVzaCB0b2tlblxuICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoVG9rZW5TZXJ2aWNlLnZlcmlmeShyZWZyZXNoVG9rZW4pO1xuXG4gICAgICAvLyBjcmVhdGUgbmV3IEpXVCB0b2tlblxuICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBqd3Quc2lnbih7IGlkOiByZWZyZXNoVG9rZW4udXNlci5faWQgfSwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVF9LRVksIHtcbiAgICAgICAgZXhwaXJlc0luOiBOdW1iZXIocHJvY2Vzcy5lbnYuSldUX0VYUElSQVRJT04pXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgICAgIGFjY2Vzc1Rva2VuXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgYXNzaWduUm9sZXMgPSBhc3luYyAodXNlciwgcm9sZU5hbWVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvbGVzID0gYXdhaXQgdGhpcy5yb2xlU2VydmljZS5nZXQocm9sZU5hbWVzKTtcblxuICAgICAgaWYgKCFyb2xlcy5kYXRhIHx8IHJvbGVzLmRhdGEubGVuZ3RoIDwgMSkge1xuICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFcnJvcignUm9sZShzKSBub3QgZm91bmQnLCB7IGVycm9yQ29kZTogJ3JvbGUnIH0pO1xuICAgICAgfVxuXG4gICAgICB1c2VyLnJvbGVzID0gcm9sZXMuZGF0YS5tYXAoKHJvbGUpID0+IHJvbGUuaWQpO1xuXG4gICAgICByZXR1cm4gYXdhaXQgdXNlci5zYXZlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlID0gYXN5bmMgKHVzZXJJZCwgZGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBNb25nb29zZSByZXR1cm5zIHRoZSBtb2RpZmllZCBkb2N1bWVudCAob3IgbnVsbCkgZm9yIC5maW5kQnlJZCBxdWVyeVxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMubW9kZWwuZmluZEJ5SWQodXNlcklkKTtcblxuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKCdObyBtYXRjaGluZyB1c2VyIGZvdW5kJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHVwZGF0ZSBwYXNzd29yZFxuICAgICAgaWYgKGRhdGEucGFzc3dvcmQpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkID0gYXdhaXQgdXNlci52YWxpZGF0ZVBhc3N3b3JkKGRhdGEucGFzc3dvcmQpO1xuXG4gICAgICAgIGlmICghdmFsaWRhdGVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEF1dGhvcml6YXRpb25FcnJvcignSW52YWxpZCBwYXNzd29yZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCB7IGVycm9yQ29kZTogJ3Bhc3N3b3JkJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVzZXIucGFzc3dvcmQgPSBkYXRhLm5ld1Bhc3N3b3JkIHx8ICcnO1xuICAgICAgfVxuXG4gICAgICAvLyB1cGRhdGUgdXNlcm5hbWVcbiAgICAgIGlmIChkYXRhLnVzZXJuYW1lKSB7XG4gICAgICAgIHVzZXIudXNlcm5hbWUgPSBkYXRhLnVzZXJuYW1lO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1c2VyLnNhdmUoKTtcblxuICAgICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGVDYWxlbmRhclNldHRpbmdzID0gYXN5bmMgKHVzZXJJZCwgZGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBnZXQgY2FsZW5kYXIgc2V0dGluZ3MgcHJvcGVydGllcyBmcm9tIG1vZGVsIHNjaGVtYVxuICAgICAgY29uc3QgY2FsZW5kYXJTZXR0aW5nc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLm1vZGVsLnNjaGVtYS50cmVlLmNhbGVuZGFyU2V0dGluZ3NbMF0pO1xuXG4gICAgICBjb25zdCBkaWZmZWREYXRhID0ge307XG5cbiAgICAgIGNhbGVuZGFyU2V0dGluZ3NLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBkaWZmZWREYXRhW2tleV0gPSBkYXRhW2tleV07XG4gICAgICB9KTtcblxuICAgICAgT2JqZWN0LmtleXMoZGlmZmVkRGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChkaWZmZWREYXRhW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRlbGV0ZSBkaWZmZWREYXRhW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB1cGRhdGUgPSB7fTtcblxuICAgICAgT2JqZWN0LmtleXMoZGlmZmVkRGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHVwZGF0ZVtgY2FsZW5kYXJTZXR0aW5ncy4kW2ldLiR7a2V5fWBdID0gZGlmZmVkRGF0YVtrZXldO1xuICAgICAgfSk7XG5cblxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMubW9kZWwuZmluZE9uZUFuZFVwZGF0ZShcbiAgICAgICAgeyBfaWQ6IHVzZXJJZCB9LFxuICAgICAgICB7ICRzZXQ6IHVwZGF0ZSB9LFxuICAgICAgICB7IGFycmF5RmlsdGVyczogW3sgJ2kuY2FsZW5kYXInOiBkYXRhLmlkIH1dLCBuZXc6IHRydWUgfVxuICAgICAgKTtcblxuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKGBVcGRhdGUgZmFpbGVkIHdpdGggdXNlciBpZDogJHt1c2VySWR9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGh0dHBSZXNwb25zZSA9IG5ldyBIdHRwUmVzcG9uc2UodXNlci5jYWxlbmRhclNldHRpbmdzKTtcblxuICAgICAgY29uc3QgZmxhdHRlbmVkQ2FsZW5kYXJTZXR0aW5ncyA9IGh0dHBSZXNwb25zZS5kYXRhLm1hcCgoZW50cnkpID0+ICh7XG4gICAgICAgIGlkOiBlbnRyeS5jYWxlbmRhcixcbiAgICAgICAgdXNlckRlZmF1bHQ6IGVudHJ5LnVzZXJEZWZhdWx0LFxuICAgICAgICB2aXNpYmlsaXR5OiBlbnRyeS52aXNpYmlsaXR5LFxuICAgICAgICBjb2xvcjogZW50cnkuY29sb3JcbiAgICAgIH0pKTtcblxuICAgICAgaHR0cFJlc3BvbnNlLmRhdGEgPSBmbGF0dGVuZWRDYWxlbmRhclNldHRpbmdzO1xuXG4gICAgICByZXR1cm4gaHR0cFJlc3BvbnNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZVNoYXJlZENhbGVuZGFyU2V0dGluZ3MgPSBhc3luYyAodXNlcklkLCBjYWxlbmRhcklkLCB1c2VyRGVmYXVsdCwgdmlzaWJpbGl0eSwgY29sb3IsIGlzU2hhcmVkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkKHVzZXJJZCk7XG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIG5vdCBmb3VuZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIG5ldyBjYWxlbmRhciBzZXR0aW5nIHRvIGFkZCB0byB0aGUgdXNlcidzIGNhbGVuZGFyU2V0dGluZ3NcbiAgICAgIGNvbnN0IG5ld0NhbGVuZGFyU2V0dGluZyA9IHtcbiAgICAgICAgY2FsZW5kYXI6IGNhbGVuZGFySWQsXG4gICAgICAgIHVzZXJEZWZhdWx0LFxuICAgICAgICB2aXNpYmlsaXR5LFxuICAgICAgICBjb2xvcixcbiAgICAgICAgaXNTaGFyZWQ6IHRydWVcbiAgICAgIH07XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSBjYWxlbmRhciBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgdXNlcidzIHNldHRpbmdzXG4gICAgICBjb25zdCBleGlzdGluZ0NhbGVuZGFyID0gdXNlci5jYWxlbmRhclNldHRpbmdzLmZpbmQoXG4gICAgICAgIChlbnRyeSkgPT4gZW50cnkuY2FsZW5kYXIgPT09IGNhbGVuZGFySWRcbiAgICAgICk7XG5cbiAgICAgIGlmICghZXhpc3RpbmdDYWxlbmRhcikge1xuICAgICAgICB1c2VyLmNhbGVuZGFyU2V0dGluZ3MucHVzaChuZXdDYWxlbmRhclNldHRpbmcpO1xuICAgICAgICBhd2FpdCB1c2VyLnNhdmUoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTZXJ2aWNlO1xuIiwiY2xhc3MgQXBwbGljYXRpb25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgfVxufVxuXG5jbGFzcyBEYXRhYmFzZUVycm9yIGV4dGVuZHMgQXBwbGljYXRpb25FcnJvciB7fVxuXG5jbGFzcyBVc2VyRmFjaW5nRXJyb3IgZXh0ZW5kcyBBcHBsaWNhdGlvbkVycm9yIHt9XG5cbmV4cG9ydCB7IEFwcGxpY2F0aW9uRXJyb3IsIERhdGFiYXNlRXJyb3IsIFVzZXJGYWNpbmdFcnJvciB9O1xuIiwiaW1wb3J0IHsgRGF0YWJhc2VFcnJvciB9IGZyb20gJy4vYmFzZUVycm9ycyc7XG5cbmNsYXNzIER1cGxpY2F0ZUtleUVycm9yIGV4dGVuZHMgRGF0YWJhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucykpIHtcbiAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzdGF0dXNDb2RlKCkge1xuICAgIHJldHVybiA0MDk7XG4gIH1cblxuICBnZXQgbW9uZ29FcnJvckNvZGUoKSB7XG4gICAgcmV0dXJuIDExMDAwO1xuICB9XG59XG5cbmV4cG9ydCB7IER1cGxpY2F0ZUtleUVycm9yIH07XG4iLCJjb25zdCBkZWZhdWx0RXhjbHVzaW9uc0Zyb21SZXNwb25zZSA9IFsnX192JywgJ3Bhc3N3b3JkJ107XG5cbmNsYXNzIEh0dHBSZXNwb25zZSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIG9wdGlvbnMgPSB7IHN0YXR1c0NvZGU6IDIwMCwgZGVsZXRlZDogbnVsbCB9KSB7XG4gICAgdGhpcy5zdGF0dXNDb2RlID0gb3B0aW9ucy5zdGF0dXNDb2RlIHx8IDIwMDtcbiAgICBsZXQgZmlsdGVyZWREYXRhID0gZGF0YTtcblxuICAgIC8vIGhhbmRsZXMgSlMgYXJyYXlzIG9yIG9iamVjdHNcbiAgICBpZiAodHlwZW9mIGZpbHRlcmVkRGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZpbHRlcmVkRGF0YSA9IHRoaXMuZmlsdGVyRGF0YShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZpbHRlcmVkRGF0YSkpKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZGVsZXRlZCkge1xuICAgICAgdGhpcy5kZWxldGVkID0gb3B0aW9ucy5kZWxldGVkO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXJlZERhdGEpKSB7XG4gICAgICB0aGlzLmRhdGEgPSBbLi4uZmlsdGVyZWREYXRhXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaWx0ZXJlZERhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLmRhdGEgPSB7IC4uLmZpbHRlcmVkRGF0YSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckRhdGEgPSAoZGF0YSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBkYXRhLm1hcCgoeCwgaW5kZXgpID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMoeCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgaWYgKGRlZmF1bHRFeGNsdXNpb25zRnJvbVJlc3BvbnNlLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhW2luZGV4XVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoa2V5ID09PSAnX2lkJykge1xuICAgICAgICAgICAgZGF0YVtpbmRleF1bJ2lkJ10gPSBkYXRhW2luZGV4XVtrZXldO1xuICAgICAgICAgICAgZGVsZXRlIGRhdGFbaW5kZXhdW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGhhbmRsZSBuZXN0ZWQgcHJvcGVydGllcyByZWN1cnNpdmVseVxuICAgICAgICAgIGlmIChrZXkgPT09ICdjYWxlbmRhclNldHRpbmdzJyB8fCBrZXkgPT09ICdjYWxlbmRhcicgfHwga2V5ID09PSAncm9sZXMnKSB7XG4gICAgICAgICAgICBkYXRhW2luZGV4XVtrZXldID0gdGhpcy5maWx0ZXJEYXRhKGRhdGFbaW5kZXhdW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChkZWZhdWx0RXhjbHVzaW9uc0Zyb21SZXNwb25zZS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5ID09PSAnX2lkJykge1xuICAgICAgICAgIGRhdGFbJ2lkJ10gPSBkYXRhW2tleV07XG4gICAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgICAgICAvLyBoYW5kbGUgbmVzdGVkIHByb3BlcnRpZXMgcmVjdXJzaXZlbHlcbiAgICAgICAgaWYgKGtleSA9PT0gJ2NhbGVuZGFyU2V0dGluZ3MnIHx8IGtleSA9PT0gJ2NhbGVuZGFyJyB8fCBrZXkgPT09ICdyb2xlcycpIHtcbiAgICAgICAgICBkYXRhW2tleV0gPSB0aGlzLmZpbHRlckRhdGEoZGF0YVtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIdHRwUmVzcG9uc2U7XG4iLCJpbXBvcnQgeyBVc2VyRmFjaW5nRXJyb3IgfSBmcm9tICcuL2Jhc2VFcnJvcnMnO1xuXG5jbGFzcyBCYWRSZXF1ZXN0RXJyb3IgZXh0ZW5kcyBVc2VyRmFjaW5nRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpKSB7XG4gICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgc3RhdHVzQ29kZSgpIHtcbiAgICByZXR1cm4gNDAwO1xuICB9XG59XG5cbmNsYXNzIE5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBVc2VyRmFjaW5nRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpKSB7XG4gICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgc3RhdHVzQ29kZSgpIHtcbiAgICByZXR1cm4gNDA0O1xuICB9XG59XG5cbmNsYXNzIEF1dGhvcml6YXRpb25FcnJvciBleHRlbmRzIFVzZXJGYWNpbmdFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucykpIHtcbiAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzdGF0dXNDb2RlKCkge1xuICAgIHJldHVybiA0MDE7XG4gIH1cbn1cblxuZXhwb3J0IHsgQmFkUmVxdWVzdEVycm9yLCBOb3RGb3VuZEVycm9yLCBBdXRob3JpemF0aW9uRXJyb3IgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdGpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoY2FjaGVkTW9kdWxlLmVycm9yICE9PSB1bmRlZmluZWQpIHRocm93IGNhY2hlZE1vZHVsZS5lcnJvcjtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0dHJ5IHtcblx0XHR2YXIgZXhlY09wdGlvbnMgPSB7IGlkOiBtb2R1bGVJZCwgbW9kdWxlOiBtb2R1bGUsIGZhY3Rvcnk6IF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLCByZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fIH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikgeyBoYW5kbGVyKGV4ZWNPcHRpb25zKTsgfSk7XG5cdFx0bW9kdWxlID0gZXhlY09wdGlvbnMubW9kdWxlO1xuXHRcdGV4ZWNPcHRpb25zLmZhY3RvcnkuY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgZXhlY09wdGlvbnMucmVxdWlyZSk7XG5cdH0gY2F0Y2goZSkge1xuXHRcdG1vZHVsZS5lcnJvciA9IGU7XG5cdFx0dGhyb3cgZTtcblx0fVxuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGV4ZWN1dGlvbiBpbnRlcmNlcHRvclxuX193ZWJwYWNrX3JlcXVpcmVfXy5pID0gW107XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYWxsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5odSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYgPSAoKSA9PiAoXCJtYWluLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzb25cIik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWUwODIwMmY3MDgyNGE4YTc0ZTBcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIGN1cnJlbnRNb2R1bGVEYXRhID0ge307XG52YXIgaW5zdGFsbGVkTW9kdWxlcyA9IF9fd2VicGFja19yZXF1aXJlX18uYztcblxuLy8gbW9kdWxlIGFuZCByZXF1aXJlIGNyZWF0aW9uXG52YXIgY3VycmVudENoaWxkTW9kdWxlO1xudmFyIGN1cnJlbnRQYXJlbnRzID0gW107XG5cbi8vIHN0YXR1c1xudmFyIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycyA9IFtdO1xudmFyIGN1cnJlbnRTdGF0dXMgPSBcImlkbGVcIjtcblxuLy8gd2hpbGUgZG93bmxvYWRpbmdcbnZhciBibG9ja2luZ1Byb21pc2VzID0gMDtcbnZhciBibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXG4vLyBUaGUgdXBkYXRlIGluZm9cbnZhciBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycztcbnZhciBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yRCA9IGN1cnJlbnRNb2R1bGVEYXRhO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkucHVzaChmdW5jdGlvbiAob3B0aW9ucykge1xuXHR2YXIgbW9kdWxlID0gb3B0aW9ucy5tb2R1bGU7XG5cdHZhciByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShvcHRpb25zLnJlcXVpcmUsIG9wdGlvbnMuaWQpO1xuXHRtb2R1bGUuaG90ID0gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG9wdGlvbnMuaWQsIG1vZHVsZSk7XG5cdG1vZHVsZS5wYXJlbnRzID0gY3VycmVudFBhcmVudHM7XG5cdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRvcHRpb25zLnJlcXVpcmUgPSByZXF1aXJlO1xufSk7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yQyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJID0ge307XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcXVpcmUocmVxdWlyZSwgbW9kdWxlSWQpIHtcblx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cdGlmICghbWUpIHJldHVybiByZXF1aXJlO1xuXHR2YXIgZm4gPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuXHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG5cdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuXHRcdFx0XHR2YXIgcGFyZW50cyA9IGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cztcblx0XHRcdFx0aWYgKHBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG5cdFx0XHRcdFx0cGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuXHRcdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG5cdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuXHRcdFx0XHRcdHJlcXVlc3QgK1xuXHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG5cdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdCk7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVxdWlyZShyZXF1ZXN0KTtcblx0fTtcblx0dmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHJlcXVpcmVbbmFtZV07XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmVxdWlyZVtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cdGZvciAodmFyIG5hbWUgaW4gcmVxdWlyZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVxdWlyZSwgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKG5hbWUpKTtcblx0XHR9XG5cdH1cblx0Zm4uZSA9IGZ1bmN0aW9uIChjaHVua0lkLCBmZXRjaFByaW9yaXR5KSB7XG5cdFx0cmV0dXJuIHRyYWNrQmxvY2tpbmdQcm9taXNlKHJlcXVpcmUuZShjaHVua0lkLCBmZXRjaFByaW9yaXR5KSk7XG5cdH07XG5cdHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG1vZHVsZUlkLCBtZSkge1xuXHR2YXIgX21haW4gPSBjdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkO1xuXHR2YXIgaG90ID0ge1xuXHRcdC8vIHByaXZhdGUgc3R1ZmZcblx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9hY2NlcHRlZEVycm9ySGFuZGxlcnM6IHt9LFxuXHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG5cdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG5cdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG5cdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG5cdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG5cdFx0X21haW46IF9tYWluLFxuXHRcdF9yZXF1aXJlU2VsZjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBtZS5wYXJlbnRzLnNsaWNlKCk7XG5cdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSBfbWFpbiA/IHVuZGVmaW5lZCA6IG1vZHVsZUlkO1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG5cdFx0fSxcblxuXHRcdC8vIE1vZHVsZSBBUElcblx0XHRhY3RpdmU6IHRydWUsXG5cdFx0YWNjZXB0OiBmdW5jdGlvbiAoZGVwLCBjYWxsYmFjaywgZXJyb3JIYW5kbGVyKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcFtpXV0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBdID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGVjbGluZTogZnVuY3Rpb24gKGRlcCkge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcblx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuXHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcblx0XHRcdFx0XHQocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKFxuXHRcdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gTWFuYWdlbWVudCBBUElcblx0XHRjaGVjazogaG90Q2hlY2ssXG5cdFx0YXBwbHk6IGhvdEFwcGx5LFxuXHRcdHN0YXR1czogZnVuY3Rpb24gKGwpIHtcblx0XHRcdGlmICghbCkgcmV0dXJuIGN1cnJlbnRTdGF0dXM7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHR2YXIgaWR4ID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG5cdFx0XHRpZiAoaWR4ID49IDApIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXG5cdFx0Ly8gaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuXHRcdGRhdGE6IGN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuXHR9O1xuXHRjdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG5cdHJldHVybiBob3Q7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXR1cyhuZXdTdGF0dXMpIHtcblx0Y3VycmVudFN0YXR1cyA9IG5ld1N0YXR1cztcblx0dmFyIHJlc3VsdHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcblx0XHRyZXN1bHRzW2ldID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cykudGhlbihmdW5jdGlvbiAoKSB7fSk7XG59XG5cbmZ1bmN0aW9uIHVuYmxvY2soKSB7XG5cdGlmICgtLWJsb2NraW5nUHJvbWlzZXMgPT09IDApIHtcblx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChibG9ja2luZ1Byb21pc2VzID09PSAwKSB7XG5cdFx0XHRcdHZhciBsaXN0ID0gYmxvY2tpbmdQcm9taXNlc1dhaXRpbmc7XG5cdFx0XHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nID0gW107XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGxpc3RbaV0oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHRyYWNrQmxvY2tpbmdQcm9taXNlKHByb21pc2UpIHtcblx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRzZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuXHRcdC8qIGZhbGx0aHJvdWdoICovXG5cdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdGJsb2NraW5nUHJvbWlzZXMrKztcblx0XHRcdHByb21pc2UudGhlbih1bmJsb2NrLCB1bmJsb2NrKTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fVxufVxuXG5mdW5jdGlvbiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmbikge1xuXHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkgcmV0dXJuIGZuKCk7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nLnB1c2goZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVzb2x2ZShmbigpKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5T25VcGRhdGUpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG5cdH1cblx0cmV0dXJuIHNldFN0YXR1cyhcImNoZWNrXCIpXG5cdFx0LnRoZW4oX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNKVxuXHRcdC50aGVuKGZ1bmN0aW9uICh1cGRhdGUpIHtcblx0XHRcdGlmICghdXBkYXRlKSB7XG5cdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKS50aGVuKFxuXHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInByZXBhcmVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciB1cGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMpLnJlZHVjZShmdW5jdGlvbiAoXG5cdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdGtleVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJDW2tleV0oXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5jLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUucixcblx0XHRcdFx0XHRcdFx0dXBkYXRlLm0sXG5cdFx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlZE1vZHVsZXNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdFx0XHRcdFx0fSwgW10pXG5cdFx0XHRcdCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChhcHBseU9uVXBkYXRlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KGFwcGx5T25VcGRhdGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZE1vZHVsZXM7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcbn1cblxuZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJyZWFkeVwiKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHRcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1cyAoc3RhdGU6IFwiICtcblx0XHRcdFx0XHRjdXJyZW50U3RhdHVzICtcblx0XHRcdFx0XHRcIilcIlxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJuYWxBcHBseShvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCk7XG5cblx0dmFyIHJlc3VsdHMgPSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycy5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHtcblx0XHRyZXR1cm4gaGFuZGxlcihvcHRpb25zKTtcblx0fSk7XG5cdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gdW5kZWZpbmVkO1xuXG5cdHZhciBlcnJvcnMgPSByZXN1bHRzXG5cdFx0Lm1hcChmdW5jdGlvbiAocikge1xuXHRcdFx0cmV0dXJuIHIuZXJyb3I7XG5cdFx0fSlcblx0XHQuZmlsdGVyKEJvb2xlYW4pO1xuXG5cdGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJhYm9ydFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IGVycm9yc1swXTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuXHR2YXIgZGlzcG9zZVByb21pc2UgPSBzZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuXG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5kaXNwb3NlKSByZXN1bHQuZGlzcG9zZSgpO1xuXHR9KTtcblxuXHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG5cdHZhciBhcHBseVByb21pc2UgPSBzZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuXHR2YXIgZXJyb3I7XG5cdHZhciByZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcblx0fTtcblxuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5hcHBseSkge1xuXHRcdFx0dmFyIG1vZHVsZXMgPSByZXN1bHQuYXBwbHkocmVwb3J0RXJyb3IpO1xuXHRcdFx0aWYgKG1vZHVsZXMpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gobW9kdWxlc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChbZGlzcG9zZVByb21pc2UsIGFwcGx5UHJvbWlzZV0pLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiZmFpbFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChsaXN0KSB7XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNldFN0YXR1cyhcImlkbGVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG5cdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRpZiAoIWN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzKSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHVuZGVmaW5lZDtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufSIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3Ncbi8vIFwiMVwiIG1lYW5zIFwibG9hZGVkXCIsIG90aGVyd2lzZSBub3QgbG9hZGVkIHlldFxudmFyIGluc3RhbGxlZENodW5rcyA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX3JlcXVpcmUgfHwge1xuXHRcIm1haW5cIjogMVxufTtcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBjaHVuayBpbnN0YWxsIGZ1bmN0aW9uIG5lZWRlZFxuXG4vLyBubyBjaHVuayBsb2FkaW5nXG5cbi8vIG5vIGV4dGVybmFsIGluc3RhbGwgY2h1bmtcblxuZnVuY3Rpb24gbG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkge1xuXHR2YXIgdXBkYXRlID0gcmVxdWlyZShcIi4vXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmh1KGNodW5rSWQpKTtcblx0dmFyIHVwZGF0ZWRNb2R1bGVzID0gdXBkYXRlLm1vZHVsZXM7XG5cdHZhciBydW50aW1lID0gdXBkYXRlLnJ1bnRpbWU7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gdXBkYXRlZE1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8odXBkYXRlZE1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSB1cGRhdGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHRpZih1cGRhdGVkTW9kdWxlc0xpc3QpIHVwZGF0ZWRNb2R1bGVzTGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgY3VycmVudFVwZGF0ZVJ1bnRpbWUucHVzaChydW50aW1lKTtcbn1cblxudmFyIGN1cnJlbnRVcGRhdGVDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZTtcbnZhciBjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcztcbnZhciBjdXJyZW50VXBkYXRlUnVudGltZTtcbmZ1bmN0aW9uIGFwcGx5SGFuZGxlcihvcHRpb25zKSB7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmYucmVxdWlyZUhtcjtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHVuZGVmaW5lZDtcblx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKHVwZGF0ZU1vZHVsZUlkKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG5cdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cblx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hhaW46IFtpZF0sXG5cdFx0XHRcdGlkOiBpZFxuXHRcdFx0fTtcblx0XHR9KTtcblx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuXHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuXHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFtb2R1bGUgfHxcblx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuXHRcdFx0KVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG5cdFx0XHRcdHZhciBwYXJlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbcGFyZW50SWRdO1xuXHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG5cdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcblx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcblx0XHRcdFx0cXVldWUucHVzaCh7XG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRpZDogcGFyZW50SWRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcblx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcblx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuXHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gYltpXTtcblx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcblx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuXHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG5cdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUobW9kdWxlKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyBtb2R1bGUuaWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcblx0XHQpO1xuXHR9O1xuXG5cdGZvciAodmFyIG1vZHVsZUlkIGluIGN1cnJlbnRVcGRhdGUpIHtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdFx0dmFyIG5ld01vZHVsZUZhY3RvcnkgPSBjdXJyZW50VXBkYXRlW21vZHVsZUlkXTtcblx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cblx0XHRcdHZhciByZXN1bHQgPSBuZXdNb2R1bGVGYWN0b3J5XG5cdFx0XHRcdD8gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKG1vZHVsZUlkKVxuXHRcdFx0XHQ6IHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcblx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHRcdH07XG5cdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuXHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcblx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG5cdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcblx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcblx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuXHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRlcnJvcjogYWJvcnRFcnJvclxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvQXBwbHkpIHtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBuZXdNb2R1bGVGYWN0b3J5O1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuXHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcblx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y3VycmVudFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuXHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG5cdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcblx0Zm9yICh2YXIgaiA9IDA7IGogPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBqKyspIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tqXTtcblx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdGlmIChcblx0XHRcdG1vZHVsZSAmJlxuXHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCB8fCBtb2R1bGUuaG90Ll9tYWluKSAmJlxuXHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuXHRcdFx0YXBwbGllZFVwZGF0ZVtvdXRkYXRlZE1vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG5cdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuXHRcdFx0IW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuXHRcdCkge1xuXHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuXHRcdFx0XHRtb2R1bGU6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdHJlcXVpcmU6IG1vZHVsZS5ob3QuX3JlcXVpcmVTZWxmLFxuXHRcdFx0XHRlcnJvckhhbmRsZXI6IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuXG5cdHJldHVybiB7XG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0fSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHVuZGVmaW5lZDtcblxuXHRcdFx0dmFyIGlkeDtcblx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG5cdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cblx0XHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuXHRcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcblx0XHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGRpc3Bvc2VIYW5kbGVyc1tqXS5jYWxsKG51bGwsIGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yRFttb2R1bGVJZF0gPSBkYXRhO1xuXG5cdFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG5cdFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG5cdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZS5jaGlsZHJlbltqXV07XG5cdFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG5cdFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcblx0XHRcdFx0XHRpZiAoaWR4ID49IDApIHtcblx0XHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG5cdFx0XHR2YXIgZGVwZW5kZW5jeTtcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGFwcGx5OiBmdW5jdGlvbiAocmVwb3J0RXJyb3IpIHtcblx0XHRcdC8vIGluc2VydCBuZXcgY29kZVxuXHRcdFx0Zm9yICh2YXIgdXBkYXRlTW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGFwcGxpZWRVcGRhdGUsIHVwZGF0ZU1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVt1cGRhdGVNb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBydW4gbmV3IHJ1bnRpbWUgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50VXBkYXRlUnVudGltZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlUnVudGltZVtpXShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHR2YXIgYWNjZXB0Q2FsbGJhY2sgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVyID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdGlmIChhY2NlcHRDYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihhY2NlcHRDYWxsYmFjaykgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChhY2NlcHRDYWxsYmFjayk7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVycy5wdXNoKGVycm9ySGFuZGxlcik7XG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzLnB1c2goZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgY2FsbGJhY2tzLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzW2tdLmNhbGwobnVsbCwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIGVycm9ySGFuZGxlcnNba10gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyc1trXShlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBvID0gMDsgbyA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IG8rKykge1xuXHRcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tvXTtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aXRlbS5yZXF1aXJlKG1vZHVsZUlkKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMSkge1xuXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjEsXG5cdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjEpO1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fVxuXHR9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJLnJlcXVpcmUgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGFwcGx5SGFuZGxlcnMpIHtcblx0aWYgKCFjdXJyZW50VXBkYXRlKSB7XG5cdFx0Y3VycmVudFVwZGF0ZSA9IHt9O1xuXHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSBbXTtcblx0XHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0fVxuXHRpZiAoIV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF07XG5cdH1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMucmVxdWlyZSA9IGZ1bmN0aW9uIChcblx0Y2h1bmtJZHMsXG5cdHJlbW92ZWRDaHVua3MsXG5cdHJlbW92ZWRNb2R1bGVzLFxuXHRwcm9taXNlcyxcblx0YXBwbHlIYW5kbGVycyxcblx0dXBkYXRlZE1vZHVsZXNMaXN0XG4pIHtcblx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB7fTtcblx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSByZW1vdmVkQ2h1bmtzO1xuXHRjdXJyZW50VXBkYXRlID0gcmVtb3ZlZE1vZHVsZXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuXHRcdG9ialtrZXldID0gZmFsc2U7XG5cdFx0cmV0dXJuIG9iajtcblx0fSwge30pO1xuXHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRjaHVua0lkcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0aWYgKFxuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkXG5cdFx0KSB7XG5cdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpKTtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gZmFsc2U7XG5cdFx0fVxuXHR9KTtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZi5yZXF1aXJlSG1yID0gZnVuY3Rpb24gKGNodW5rSWQsIHByb21pc2VzKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3MgJiZcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGVDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRcdCFjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdXG5cdFx0XHQpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkpO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0gPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHJlcXVpcmUoXCIuL1wiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGKCkpO1xuXHR9KVsnY2F0Y2gnXShmdW5jdGlvbihlcnIpIHsgaWYoZXJyLmNvZGUgIT09ICdNT0RVTEVfTk9UX0ZPVU5EJykgdGhyb3cgZXJyOyB9KTtcbn0iLCIiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zZXJ2ZXItZGV2LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbInVzZXJDb2xvcnMiLCJzeXN0ZW1Db2xvcnMiLCJiYXNlVVJMIiwiZGVmYXVsdFZpZXciLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfbmV4dCIsIl90aHJvdyIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJfY2xhc3NDYWxsQ2hlY2siLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsIkNhbGVuZGFyU2VydmljZSIsIlVzZXJTZXJ2aWNlIiwiZGIiLCJjYWxlbmRhclNlcnZpY2UiLCJDYWxlbmRhciIsIlVzZXIiLCJ1c2VyU2VydmljZSIsIkNhbGVuZGFyQ29udHJvbGxlciIsInNlcnZpY2UiLCJfdGhpcyIsIl9yZWYiLCJfY2FsbGVlIiwicmVxIiwicmVzIiwiZGF0YSIsInVzZXJSZXNwb25zZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJib2R5IiwidXNlcl9pZCIsImF1dGgiLCJ1c2VyIiwiZ2V0T25lIiwic3RhdHVzIiwic2VuZCIsImNhbGVuZGFyU2V0dGluZ3MiLCJ0MCIsIl94IiwiX3gyIiwiX3gzIiwiX3JlZjIiLCJfY2FsbGVlMiIsInJlc3BvbnNlIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwidXBkYXRlIiwicGFyYW1zIiwiY2FsZW5kYXJJZCIsInN0YXR1c0NvZGUiLCJfeDQiLCJfeDUiLCJfeDYiLCJfcmVmMyIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwidXBkYXRlQ2FsZW5kYXJTZXR0aW5ncyIsIl94NyIsIl94OCIsIl94OSIsIl9yZWY0IiwiX2NhbGxlZTQiLCJ0YXJnZXRDYWxlbmRhclNldHRpbmdzIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiZW50cnkiLCJpZCIsInVzZXJEZWZhdWx0IiwibWVzc2FnZSIsImVycm9yQ29kZSIsIl94MTAiLCJfeDExIiwiX3gxMiIsIl9yZWY1IiwiX2NhbGxlZTUiLCJfcmVxJGJvZHkiLCJ1c2VySWQiLCJ2aXNpYmlsaXR5IiwiY29sb3IiLCJpc1NoYXJlZCIsImNhbGVuZGFyIiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1Iiwic2hhcmVDYWxlbmRhciIsInVwZGF0ZVNoYXJlZENhbGVuZGFyU2V0dGluZ3MiLCJfeDEzIiwiX3gxNCIsIl94MTUiLCJFdmVudFNlcnZpY2UiLCJldmVudFNlcnZpY2UiLCJFdmVudCIsIkV2ZW50Q29udHJvbGxlciIsImNhbGVuZGFycyIsImNhbGVuZGFySWRzIiwiZ2V0VXNlckNhbGVuZGFycyIsIk5vdEZvdW5kRXJyb3IiLCJtYXAiLCJnZXRVc2VyRXZlbnRzIiwiZXZlbnRJZCIsImp3dCIsImF1dGhKd3QiLCJSZWZyZXNoVG9rZW4iLCJSb2xlIiwiVXNlckNvbnRyb2xsZXIiLCJfcmVxJGJvZHkkcm9sZXMiLCJyb2xlTmFtZXMiLCJyb2xlcyIsImFzc2lnblJvbGVzIiwibG9naW5SZXNwb25zZSIsImxvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImFjY2Vzc1Rva2VuIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVRfS0VZIiwiZGVjb2RlZCIsImNhdGNoVG9rZW5FcnJvciIsInJlcXVlc3RUb2tlbiIsInJlZnJlc2hUb2tlbiIsInJlZGlyZWN0IiwiX3JlZjYiLCJfY2FsbGVlNiIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsImdldEFsbFVzZXJuYW1lcyIsIl94MTYiLCJfeDE3IiwiUm9sZVNlcnZpY2UiLCJNT05HT19IT1NUTkFNRSIsIk1PTkdPX1BPUlQiLCJNT05HT19EQiIsIk1PTkdPX1VTRVJOQU1FIiwiTU9OR09fUEFTU1dPUkQiLCJNT05HT19VUkwiLCJjb25jYXQiLCJtb25nb29zZSIsInJvbGVTZXJ2aWNlIiwiaW5pdGlhbGl6ZVJvbGVzIiwiY291bnQiLCJjb3VudERvY3VtZW50cyIsImNvbnNvbGUiLCJsb2ciLCJpbml0aWFsaXplQ2FsZW5kYXJzIiwiY29ubmVjdCIsImVycm9yIiwiZXhpdCIsIlRva2VuRXhwaXJlZEVycm9yIiwic2VuZFN0YXR1cyIsInZlcmlmeVRva2VuIiwidG9rZW4iLCJoZWFkZXJzIiwidmVyaWZ5VVJJQXV0aCIsInVybCIsIl9jYWxlbmRhciIsImV2ZW50IiwiX2NhbGVuZGFyMiIsImJhc2VVcmwiLCJyb3V0ZSIsInBhdGgiLCJzaGFyZWRfd2l0aCIsImluY2x1ZGVzIiwiZmluZE9uZSIsIl9pZCIsIiRlcSIsImlzQWRtaW4iLCJmaW5kQnlJZCIsImV4ZWMiLCJmaW5kIiwiJGluIiwiaXNNb2RlcmF0b3IiLCJ2ZXJpZnlSZWdpc3RyYXRpb24iLCJCYWRSZXF1ZXN0RXJyb3IiLCJjaGVja0R1cGxpY2F0ZVVzZXJuYW1lIiwiZmluZEJ5VXNlcm5hbWUiLCJjaGVja1JvbGVzRXhpc3QiLCJjaGVja1Bhc3N3b3JkQ29tcGxleEVub3VnaCIsInBhc3N3b3JkUmVnZXgiLCJSZWdFeHAiLCJ0ZXN0IiwiY2hlY2tVc2VybmFtZUxvbmdFbm91Z2giLCJEdXBsaWNhdGVLZXlFcnJvciIsInNjaGVtYSIsIlNjaGVtYSIsInJlcXVpcmVkIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInByZSIsIndhc05ldyIsImlzTmV3IiwiaGFuZGxlRTExMDAwIiwiY29kZSIsInBvc3QiLCJzeXN0ZW1DYWxlbmRhcnNDb3VudCIsInNldHRpbmdzIiwidXNlckNhbGVuZGFyc0NvdW50IiwiX3NldHRpbmdzIiwidXBkYXRlTWFueSIsIiRwdXNoIiwiRGF0YWJhc2VFcnJvciIsImZpbmRCeUlkQW5kVXBkYXRlIiwiZG9jIiwiJHB1bGwiLCJ1cGRhdGVPbmUiLCJpbmRleCIsInVuaXF1ZSIsIm1vZGVsIiwidGl0bGUiLCJkZXNjIiwic3RhcnQiLCJlbmQiLCJhbGxEYXkiLCJCb29sZWFuIiwidGltZVpvbmUiLCJleHBpcnlEYXRlIiwic3RhdGljcyIsInZlcmlmeUV4cGlyYXRpb24iLCJleHBpcnlEYXRlT2JqIiwiRGF0ZSIsImdldFRpbWUiLCJiY3J5cHQiLCJyZXF1aXJlIiwiU0FMVF9XT1JLX0ZBQ1RPUiIsIm1pbkxlbmd0aCIsImZhaWxlZExvZ2luQXR0ZW1wdHMiLCJsYXN0RmFpbGVkTG9naW5BdHRlbXB0Iiwic2FsdCIsImlzTW9kaWZpZWQiLCJnZW5TYWx0IiwiaGFzaCIsInN5c3RlbUNhbHMiLCJkZWZhdWx0Q2FsIiwibmV3RGVmYXVsdENhbCIsImNhbCIsImlkeCIsInNhdmUiLCJtZXRob2RzIiwidmFsaWRhdGVQYXNzd29yZCIsIl92YWxpZGF0ZVBhc3N3b3JkIiwiY2FuZGlkYXRlUGFzc3dvcmQiLCJpc1ZhbGlkIiwiY29tcGFyZSIsInZhbGlkYXRlTG9ja291dCIsImxvY2tvdXRUaW1lIiwic2V0TWludXRlcyIsImdldE1pbnV0ZXMiLCJleHByZXNzIiwicm91dGVyIiwiUm91dGVyIiwicHV0IiwidXBkYXRlU2V0dGluZ3MiLCJnZXQiLCJ1c2VyUm91dGVyIiwiY2FsZW5kYXJSb3V0ZXIiLCJldmVudFJvdXRlciIsInVzZSIsInJlZ2lzdGVyIiwiZ2V0VXNlcnMiLCJjb3JzIiwiVXNlckZhY2luZ0Vycm9yIiwiQlVJTERfRElSIiwiX19kaXJuYW1lIiwiSFRNTF9GSUxFIiwiUE9SVCIsImFwcCIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJzZW5kRmlsZSIsImVyciIsIl9lcnIkbWVzc2FnZSIsImhlYWRlciIsIl9pIiwiX09iamVjdCRlbnRyaWVzIiwiZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsIl9zbGljZWRUb0FycmF5IiwibGlzdGVuIiwiSHR0cFJlc3BvbnNlIiwiX29iaiIsInJlc3VsdCIsIiRvciIsImZpbmRCeUlkQW5kRGVsZXRlIiwiZGVsZXRlZCIsImV2ZW50cyIsInY0IiwidXVpZHY0IiwiQXV0aG9yaXphdGlvbkVycm9yIiwiUmVmcmVzaFRva2VuU2VydmljZSIsImV4cGlyZWRBdCIsIl90b2tlbiIsInNldFNlY29uZHMiLCJnZXRTZWNvbmRzIiwiSldUX1JFRlJFU0hfRVhQSVJBVElPTiIsInRvSVNPU3RyaW5nIiwiZmluZEJ5SWRBbmRSZW1vdmUiLCJ1c2VGaW5kQW5kTW9kaWZ5Iiwicm9sZSIsInJlZnJlc2hUb2tlbk1vZGVsIiwicm9sZU1vZGVsIiwiaXNMb2NrZWRPdXQiLCJ2YWxpZGF0ZWQiLCJyZWZyZXNoVG9rZW5SZXNwb25zZSIsInNpZ24iLCJleHBpcmVzSW4iLCJKV1RfRVhQSVJBVElPTiIsInJlZnJlc2hUb2tlblNlcnZpY2UiLCJodHRwUmVzcG9uc2UiLCJmbGF0dGVuZWRDYWxlbmRhclNldHRpbmdzIiwicG9wdWxhdGUiLCJzaGFyZWRXaXRoIiwidXNlcnMiLCIkbmUiLCJfcmVmNyIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwibmV3UGFzc3dvcmQiLCJfcmVmOCIsIl9jYWxsZWU4IiwiY2FsZW5kYXJTZXR0aW5nc0tleXMiLCJkaWZmZWREYXRhIiwiX2NhbGxlZTgkIiwiX2NvbnRleHQ4IiwidHJlZSIsInVuZGVmaW5lZCIsImZpbmRPbmVBbmRVcGRhdGUiLCIkc2V0IiwiYXJyYXlGaWx0ZXJzIiwiX3JlZjkiLCJfY2FsbGVlOSIsIm5ld0NhbGVuZGFyU2V0dGluZyIsImV4aXN0aW5nQ2FsZW5kYXIiLCJfY2FsbGVlOSQiLCJfY29udGV4dDkiLCJfeDE4IiwiQXBwbGljYXRpb25FcnJvciIsIl9FcnJvciIsIl9jYWxsU3VwZXIiLCJfaW5oZXJpdHMiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiX0FwcGxpY2F0aW9uRXJyb3IiLCJfQXBwbGljYXRpb25FcnJvcjIiLCJfRGF0YWJhc2VFcnJvciIsIm9wdGlvbnMiLCJkZWZhdWx0RXhjbHVzaW9uc0Zyb21SZXNwb25zZSIsIkFycmF5IiwiaXNBcnJheSIsIngiLCJmaWx0ZXJEYXRhIiwiZmlsdGVyZWREYXRhIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX1VzZXJGYWNpbmdFcnJvciIsIl9Vc2VyRmFjaW5nRXJyb3IyIiwiX3RoaXMyIiwiX2kyIiwiX09iamVjdCRlbnRyaWVzMiIsIl9PYmplY3QkZW50cmllczIkX2kiLCJfVXNlckZhY2luZ0Vycm9yMyIsIl90aGlzMyIsIl9pMyIsIl9PYmplY3QkZW50cmllczMiLCJfT2JqZWN0JGVudHJpZXMzJF9pIl0sInNvdXJjZVJvb3QiOiIifQ==