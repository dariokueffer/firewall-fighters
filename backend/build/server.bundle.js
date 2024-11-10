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



var MONGO_HOSTNAME = "localhost";
var MONGO_PORT = "27017";
var MONGO_DB = "reactcalendar_db";
var MONGO_USERNAME = "appuser";
var MONGO_PASSWORD = "jaAVHhjRJdbcXPxBq7UT";
var MONGO_URL = "mongodb://".concat(MONGO_USERNAME, ":").concat(MONGO_PASSWORD, "@").concat(MONGO_HOSTNAME, ":").concat(MONGO_PORT, "/").concat(MONGO_DB, "?authSource=admin");
console.log('MONGO_URL', MONGO_URL);
console.log('test');
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
mongoose.connect('mongodb://localhost:27017/reactcalendardb?authSource=admin').then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
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
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);
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
          return bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().genSalt(SALT_WORK_FACTOR);
        case 5:
          salt = _context.sent;
          _context.next = 8;
          return bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(this.password, salt);
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
          return _context4.abrupt("return", bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(candidatePassword, this.password));
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
router.post('/register', [_middleware__WEBPACK_IMPORTED_MODULE_1__.verifyRegistration.checkDuplicateUsername, _middleware__WEBPACK_IMPORTED_MODULE_1__.verifyRegistration.checkRolesExist], [_controllers_UserController__WEBPACK_IMPORTED_MODULE_2__["default"].register, _controllers_UserController__WEBPACK_IMPORTED_MODULE_2__["default"].login]);

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
var PORT = "5001" || 0;
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
            }, "a1ae585be48e4e17f4578b0f5275c3e2de8e2308d65ba86e4156cc1c7a7929fbddb8467da9fdf2a966746bf1cf62538dc0a8fdbbd68e00d78c699eeac09aa9de", {
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
            };
            console.log(newCalendarSetting);
            // Check if the calendar already exists in the user's settings
            existingCalendar = user.calendarSettings.find(function (entry) {
              return entry.calendar === calendarId;
            });
            if (existingCalendar) {
              _context9.next = 13;
              break;
            }
            user.calendarSettings.push(newCalendarSetting);
            _context9.next = 13;
            return user.save();
          case 13:
            return _context9.abrupt("return", user);
          case 16:
            _context9.prev = 16;
            _context9.t0 = _context9["catch"](0);
            throw _context9.t0;
          case 19:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 16]]);
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
/******/ 		__webpack_require__.h = () => ("97f93be48b663339ea77")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLG1CQUFtQiwyQkFBMkI7V0FDOUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0Esa0JBQWtCLGNBQWM7V0FDaEM7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsTUFBTTtXQUNwQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxjQUFjLGFBQWE7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxpQkFBaUIsNEJBQTRCO1dBQzdDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBLGdCQUFnQiw0QkFBNEI7V0FDNUM7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0EsZ0JBQWdCLDRCQUE0QjtXQUM1QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQkFBa0IsdUNBQXVDO1dBQ3pEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0EsbUJBQW1CLGlDQUFpQztXQUNwRDtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esc0JBQXNCLHVDQUF1QztXQUM3RDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzQkFBc0Isc0JBQXNCO1dBQzVDO1dBQ0E7V0FDQSxTQUFTO1dBQ1Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFdBQVc7V0FDWCxXQUFXO1dBQ1g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxZQUFZO1dBQ1o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsVUFBVTtXQUNWO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFdBQVc7V0FDWDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLG1CQUFtQix3Q0FBd0M7V0FDM0Q7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFFBQVE7V0FDUixRQUFRO1dBQ1I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsU0FBUztXQUNUO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE9BQU87V0FDUDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsUUFBUTtXQUNSO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFLElBQUk7V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsRUFBRSwyQkFBMkIsZ0RBQWdEO1dBQzdFOzs7OztVRTFkQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL2NvbmZpZy9hcHBDb25maWcuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vY29udHJvbGxlcnMvQ2FsZW5kYXJDb250cm9sbGVyLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL2NvbnRyb2xsZXJzL0V2ZW50Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9jb250cm9sbGVycy9Vc2VyQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9kYi9jb25uZWN0aW9uLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL21pZGRsZXdhcmUvYXV0aEp3dC5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9taWRkbGV3YXJlL2luZGV4LmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL21pZGRsZXdhcmUvdmVyaWZ5UmVnaXN0cmF0aW9uLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL21vZGVscy9DYWxlbmRhci5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9tb2RlbHMvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vbW9kZWxzL1JlZnJlc2hUb2tlbi5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9tb2RlbHMvUm9sZS5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9tb2RlbHMvVXNlci5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vcm91dGVycy9jYWxlbmRhclJvdXRlci5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9yb3V0ZXJzL2V2ZW50Um91dGVyLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3JvdXRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vcm91dGVycy91c2VyUm91dGVyLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3NlcnZlci1kZXYuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vc2VydmljZXMvQ2FsZW5kYXJTZXJ2aWNlLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3NlcnZpY2VzL0V2ZW50U2VydmljZS5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9zZXJ2aWNlcy9SZWZyZXNoVG9rZW5TZXJ2aWNlLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3NlcnZpY2VzL1JvbGVTZXJ2aWNlLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3NlcnZpY2VzL1VzZXJTZXJ2aWNlLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3V0aWxzL2Jhc2VFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vdXRpbHMvZGF0YWJhc2VFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vdXRpbHMvaHR0cFJlc3BvbnNlLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3V0aWxzL3VzZXJGYWNpbmdFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL2V4dGVybmFsIGNvbW1vbmpzIFwiYmNyeXB0anNcIiIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC9leHRlcm5hbCBjb21tb25qcyBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC9leHRlcm5hbCBjb21tb25qcyBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL2V4dGVybmFsIGNvbW1vbmpzIFwidXVpZFwiIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IHVwZGF0ZSBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9ydW50aW1lL2dldCB1cGRhdGUgbWFuaWZlc3QgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9ydW50aW1lL2hvdCBtb2R1bGUgcmVwbGFjZW1lbnQiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svcnVudGltZS9yZXF1aXJlIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHVzZXJDb2xvcnMgPSBbJzJFODZDMScsICcwMEE2RDAnLCAnMDBDM0M3JywgJzJEREJBQicsICc5REVFODcnXTtcclxuXHJcbmNvbnN0IHN5c3RlbUNvbG9ycyA9IFsnMzQ0OTVFJywgJzRFNTk3NicsICc2RDY5OEQnLCAnOEY3ODlGJywgJ0I0ODhBRSddO1xyXG5cclxuY29uc3QgYmFzZVVSTCA9ICcvY2FsZW5kYXJhcHAnO1xyXG5cclxuY29uc3QgZGVmYXVsdFZpZXcgPSAnbW9udGgnO1xyXG5cclxuZXhwb3J0IHsgdXNlckNvbG9ycywgc3lzdGVtQ29sb3JzLCBiYXNlVVJMLCBkZWZhdWx0VmlldyB9O1xyXG4iLCJpbXBvcnQgQ2FsZW5kYXJTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL0NhbGVuZGFyU2VydmljZSc7XHJcbmltcG9ydCBVc2VyU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9Vc2VyU2VydmljZSc7XHJcbmltcG9ydCBkYiBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuY29uc3QgY2FsZW5kYXJTZXJ2aWNlID0gbmV3IENhbGVuZGFyU2VydmljZShkYi5DYWxlbmRhciwgZGIuVXNlcik7XHJcbmNvbnN0IHVzZXJTZXJ2aWNlID0gbmV3IFVzZXJTZXJ2aWNlKGRiLlVzZXIpO1xyXG5cclxuY2xhc3MgQ2FsZW5kYXJDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcihzZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xyXG4gICAgdGhpcy51c2VyU2VydmljZSA9IHVzZXJTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIC4uLnJlcS5ib2R5LFxyXG4gICAgICAgIHVzZXJfaWQ6IHJlcS5hdXRoLnVzZXJcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGUoZGF0YSk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyUmVzcG9uc2UgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmdldE9uZShyZXEuYXV0aC51c2VyKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh1c2VyUmVzcG9uc2UuY2FsZW5kYXJTZXR0aW5ncyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVwZGF0ZSA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlKHJlcS5wYXJhbXMuY2FsZW5kYXJJZCwgcmVxLmJvZHkpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzQ29kZSkuc2VuZChyZXNwb25zZS5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIG5leHQoZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXBkYXRlU2V0dGluZ3MgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UudXBkYXRlQ2FsZW5kYXJTZXR0aW5ncyhyZXEuYXV0aC51c2VyLCByZXEuYm9keSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXNDb2RlKS5zZW5kKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gbmV4dChlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBkZWxldGUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXJSZXNwb25zZSA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZ2V0T25lKHJlcS5hdXRoLnVzZXIpO1xyXG5cclxuICAgICAgY29uc3QgdGFyZ2V0Q2FsZW5kYXJTZXR0aW5ncyA9IHVzZXJSZXNwb25zZS5jYWxlbmRhclNldHRpbmdzLmZpbHRlcihcclxuICAgICAgICAoZW50cnkpID0+IGVudHJ5LmlkID09PSByZXEucGFyYW1zLmNhbGVuZGFySWRcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICh0YXJnZXRDYWxlbmRhclNldHRpbmdzLnVzZXJEZWZhdWx0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgLnN0YXR1cyg0MDMpXHJcbiAgICAgICAgICAuc2VuZCh7IG1lc3NhZ2U6ICdDYW5ub3QgZGVsZXRlIGRlZmF1bHQgY2FsZW5kYXIuIFBsZWFzZSB0cnkgYWdhaW4uJywgZXJyb3JDb2RlOiAnY2FsZW5kYXInIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5kZWxldGUocmVxLnBhcmFtcy5jYWxlbmRhcklkKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1c0NvZGUpLnNlbmQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHNoYXJlQ2FsZW5kYXIgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgY2FsZW5kYXJJZCB9ID0gcmVxLnBhcmFtcztcclxuICAgICAgY29uc3QgeyB1c2VySWQsIHZpc2liaWxpdHksIHVzZXJEZWZhdWx0LCBjb2xvciwgaXNTaGFyZWQgfSA9IHJlcS5ib2R5OyAvLyBVc2UgYHVzZXJEZWZhdWx0YCBoZXJlXHJcblxyXG4gIFxyXG4gICAgICAvLyBTaGFyZSB0aGUgY2FsZW5kYXJcclxuICAgICAgY29uc3QgY2FsZW5kYXIgPSBhd2FpdCB0aGlzLnNlcnZpY2Uuc2hhcmVDYWxlbmRhcihjYWxlbmRhcklkLCB1c2VySWQpO1xyXG4gIFxyXG4gICAgICAvLyBVcGRhdGUgdGhlIGNhbGVuZGFyU2V0dGluZ3MgZm9yIHRoZSB1c2VyIHdpdGggd2hvbSB0aGUgY2FsZW5kYXIgaXMgc2hhcmVkXHJcbiAgICAgIGF3YWl0IHRoaXMudXNlclNlcnZpY2UudXBkYXRlU2hhcmVkQ2FsZW5kYXJTZXR0aW5ncyh1c2VySWQsIGNhbGVuZGFySWQsIHVzZXJEZWZhdWx0LCB2aXNpYmlsaXR5LCBjb2xvciwgaXNTaGFyZWQpO1xyXG4gIFxyXG4gICAgICAvLyBTZW5kIGEgc3VjY2VzcyByZXNwb25zZVxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdDYWxlbmRhciBzaGFyZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICBjYWxlbmRhclxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIG5leHQoZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IENhbGVuZGFyQ29udHJvbGxlcihjYWxlbmRhclNlcnZpY2UsIHVzZXJTZXJ2aWNlKTtcclxuIiwiaW1wb3J0IEV2ZW50U2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9FdmVudFNlcnZpY2UnO1xyXG5pbXBvcnQgQ2FsZW5kYXJTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL0NhbGVuZGFyU2VydmljZSc7XHJcbmltcG9ydCBkYiBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuY29uc3QgZXZlbnRTZXJ2aWNlID0gbmV3IEV2ZW50U2VydmljZShkYi5FdmVudCk7XHJcbmNvbnN0IGNhbGVuZGFyU2VydmljZSA9IG5ldyBDYWxlbmRhclNlcnZpY2UoZGIuQ2FsZW5kYXIpO1xyXG5cclxuY2xhc3MgRXZlbnRDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcihzZXJ2aWNlLCBjYWxlbmRhclNlcnZpY2UpIHtcclxuICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICB0aGlzLmNhbGVuZGFyU2VydmljZSA9IGNhbGVuZGFyU2VydmljZTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UuY3JlYXRlKHJlcS5ib2R5KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1c0NvZGUpLnNlbmQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGdldFVzZXJFdmVudHMgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGNhbGVuZGFycyA9IGF3YWl0IHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmdldFVzZXJDYWxlbmRhcnMocmVxLmF1dGgudXNlcik7XHJcblxyXG4gICAgICBpZiAoIWNhbGVuZGFycyB8fCBjYWxlbmRhcnMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKCdObyBtYXRjaGluZyBjYWxlbmRhcnMgZm91bmQnLCB7IGVycm9yQ29kZTogJ2NhbGVuZGFyJyB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY2FsZW5kYXJJZHMgPSBjYWxlbmRhcnMuZGF0YS5tYXAoKGNhbGVuZGFyKSA9PiBjYWxlbmRhci5pZCk7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRVc2VyRXZlbnRzKGNhbGVuZGFySWRzKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1c0NvZGUpLnNlbmQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVwZGF0ZSA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlKHJlcS5ib2R5KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1c0NvZGUpLnNlbmQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGRlbGV0ZSA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZGVsZXRlKHJlcS5wYXJhbXMuZXZlbnRJZCk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXNDb2RlKS5zZW5kKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gbmV4dChlKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRXZlbnRDb250cm9sbGVyKGV2ZW50U2VydmljZSwgY2FsZW5kYXJTZXJ2aWNlKTtcclxuIiwiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL1VzZXJTZXJ2aWNlJztcclxuaW1wb3J0IGF1dGhKd3QgZnJvbSAnLi4vbWlkZGxld2FyZS9hdXRoSnd0JztcclxuXHJcbmNvbnN0IHVzZXJTZXJ2aWNlID0gbmV3IFVzZXJTZXJ2aWNlKGRiLlVzZXIsIGRiLlJlZnJlc2hUb2tlbiwgZGIuUm9sZSwgZGIuQ2FsZW5kYXIsIGRiLkV2ZW50KTtcclxuXHJcbmNsYXNzIFVzZXJDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcihzZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgLy8gY3JlYXRlIHVzZXIsIGFzc2lnbiByb2xlc1xyXG4gIHJlZ2lzdGVyID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZShyZXEuYm9keSk7XHJcblxyXG4gICAgICBjb25zdCByb2xlTmFtZXMgPSByZXEuYm9keT8ucm9sZXMgPz8gWyd1c2VyJ107XHJcblxyXG4gICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuYXNzaWduUm9sZXModXNlciwgcm9sZU5hbWVzKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXh0KCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGxvZ2luID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBsb2dpblJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmxvZ2luKHJlcS5ib2R5LnVzZXJuYW1lLCByZXEuYm9keS5wYXNzd29yZCk7XHJcblxyXG4gICAgICBpZiAoIWxvZ2luUmVzcG9uc2UuYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnTm8gdG9rZW4gZm91bmQhJywgZXJyb3JDb2RlOiAndXNlcicgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIERlY29kZSB0b2tlbiBhbmQgbG9va3VwIGZ1bGwgdXNlciBkb2NcclxuICAgICAgand0LnZlcmlmeShsb2dpblJlc3BvbnNlLmFjY2Vzc1Rva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUX0tFWSwgYXN5bmMgKGUsIGRlY29kZWQpID0+IHtcclxuICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgcmV0dXJuIGF1dGhKd3QuY2F0Y2hUb2tlbkVycm9yKGUsIHJlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1c2VyUmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0T25lKGRlY29kZWQuaWQpO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHtcclxuICAgICAgICAgIC4uLmxvZ2luUmVzcG9uc2UsXHJcbiAgICAgICAgICAuLi51c2VyUmVzcG9uc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQocmVzcG9uc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIG5leHQoZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVmcmVzaFRva2VuID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICBjb25zdCB7IHJlZnJlc2hUb2tlbjogcmVxdWVzdFRva2VuIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICBpZiAoIXJlcXVlc3RUb2tlbikge1xyXG4gICAgICAvLyBSZXF1ZXN0IHRva2VuIGlzIG1pc3NpbmdcclxuICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL2xvZ2luJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UucmVmcmVzaFRva2VuKHJlcXVlc3RUb2tlbik7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXNDb2RlKS5zZW5kKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gbmV4dChlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1cGRhdGUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZShyZXEuYXV0aC51c2VyLCByZXEuYm9keSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXNDb2RlKS5zZW5kKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gbmV4dChlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBnZXRVc2VycyA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsVXNlcm5hbWVzKHJlcS5wYXJhbXMudXNlcklkKTsgLy8gQ2FsbCB0aGUgc2VydmljZSBtZXRob2RcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHJlc3BvbnNlLmRhdGEpOyBcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIG5leHQoZSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJDb250cm9sbGVyKHVzZXJTZXJ2aWNlKTtcclxuIiwiaW1wb3J0IGRiIGZyb20gJ21vZGVscyc7XHJcbmltcG9ydCBSb2xlU2VydmljZSBmcm9tICdzZXJ2aWNlcy9Sb2xlU2VydmljZSc7XHJcbmltcG9ydCBDYWxlbmRhclNlcnZpY2UgZnJvbSAnc2VydmljZXMvQ2FsZW5kYXJTZXJ2aWNlJztcclxuXHJcbmNvbnN0IE1PTkdPX0hPU1ROQU1FID0gcHJvY2Vzcy5lbnYuTU9OR09fSE9TVE5BTUU7XHJcbmNvbnN0IE1PTkdPX1BPUlQgPSBwcm9jZXNzLmVudi5NT05HT19QT1JUO1xyXG5jb25zdCBNT05HT19EQiA9IHByb2Nlc3MuZW52Lk1PTkdPX0RCO1xyXG5jb25zdCBNT05HT19VU0VSTkFNRSA9IHByb2Nlc3MuZW52Lk1PTkdPX1VTRVJOQU1FO1xyXG5jb25zdCBNT05HT19QQVNTV09SRCA9IHByb2Nlc3MuZW52Lk1PTkdPX1BBU1NXT1JEO1xyXG5jb25zdCBNT05HT19VUkwgPSBgbW9uZ29kYjovLyR7TU9OR09fVVNFUk5BTUV9OiR7TU9OR09fUEFTU1dPUkR9QCR7TU9OR09fSE9TVE5BTUV9OiR7TU9OR09fUE9SVH0vJHtNT05HT19EQn0/YXV0aFNvdXJjZT1hZG1pbmA7XHJcblxyXG5jb25zb2xlLmxvZygnTU9OR09fVVJMJywgTU9OR09fVVJMKTtcclxuY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuXHJcbmNvbnN0IG1vbmdvb3NlID0gZGIubW9uZ29vc2U7XHJcbmNvbnN0IFJvbGUgPSBkYi5Sb2xlO1xyXG5jb25zdCBDYWxlbmRhciA9IGRiLkNhbGVuZGFyO1xyXG5cclxuY29uc3Qgcm9sZVNlcnZpY2UgPSBuZXcgUm9sZVNlcnZpY2UoUm9sZSk7XHJcbmNvbnN0IGNhbGVuZGFyU2VydmljZSA9IG5ldyBDYWxlbmRhclNlcnZpY2UoQ2FsZW5kYXIpO1xyXG5cclxuY29uc3QgaW5pdGlhbGl6ZVJvbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGNvdW50ID0gYXdhaXQgUm9sZS5jb3VudERvY3VtZW50cyh7fSk7XHJcbiAgaWYgKGNvdW50ID09PSAwKSB7XHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5jcmVhdGUoJ3VzZXInKTtcclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmNyZWF0ZSgnbW9kZXJhdG9yJyk7XHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5jcmVhdGUoJ2FkbWluJyk7XHJcbiAgICBjb25zb2xlLmxvZygnSW5pdGlhbGl6ZWQgcm9sZXMuJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbGl6ZUNhbGVuZGFycyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBjb3VudCA9IGF3YWl0IENhbGVuZGFyLmNvdW50RG9jdW1lbnRzKHsgdXNlcl9pZDogJ3N5c3RlbScsIG5hbWU6ICdVUyBIb2xpZGF5cycgfSk7XHJcbiAgaWYgKGNvdW50ID09PSAwKSB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBuYW1lOiAnVVMgSG9saWRheXMnLFxyXG4gICAgICB1c2VyX2lkOiAnc3lzdGVtJ1xyXG4gICAgfTtcclxuXHJcbiAgICBhd2FpdCBjYWxlbmRhclNlcnZpY2UuY3JlYXRlKGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgVVMgSG9saWRheXMgY2FsZW5kYXIuJyk7XHJcbiAgfVxyXG59O1xyXG5cclxubW9uZ29vc2VcclxuICAuY29ubmVjdCgnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9yZWFjdGNhbGVuZGFyZGI/YXV0aFNvdXJjZT1hZG1pbicpXHJcbiAgLnRoZW4oYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBNb25nb0RCJyk7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSByb2xlc1xyXG4gICAgYXdhaXQgaW5pdGlhbGl6ZVJvbGVzKCk7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBzeXN0ZW0gY2FsZW5kYXJzXHJcbiAgICBhd2FpdCBpbml0aWFsaXplQ2FsZW5kYXJzKCk7XHJcbiAgfSlcclxuICAuY2F0Y2goKGUpID0+IHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Nvbm5lY3Rpb24gZXJyb3InLCBlKTtcclxuICAgIHByb2Nlc3MuZXhpdCgpO1xyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGI7XHJcbiIsImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IGRiIGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCBDYWxlbmRhclNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvQ2FsZW5kYXJTZXJ2aWNlJztcclxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL1VzZXJTZXJ2aWNlJztcclxuaW1wb3J0IEV2ZW50U2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9FdmVudFNlcnZpY2UnO1xyXG5cclxuY29uc3QgVXNlciA9IGRiLlVzZXI7XHJcbmNvbnN0IFJlZnJlc2hUb2tlbiA9IGRiLlJlZnJlc2hUb2tlbjtcclxuY29uc3QgUm9sZSA9IGRiLlJvbGU7XHJcbmNvbnN0IENhbGVuZGFyID0gZGIuQ2FsZW5kYXI7XHJcbmNvbnN0IEV2ZW50ID0gZGIuRXZlbnQ7XHJcbmNvbnN0IHsgVG9rZW5FeHBpcmVkRXJyb3IgfSA9IGp3dDtcclxuXHJcbmNvbnN0IGNhbGVuZGFyU2VydmljZSA9IG5ldyBDYWxlbmRhclNlcnZpY2UoQ2FsZW5kYXIpO1xyXG5jb25zdCB1c2VyU2VydmljZSA9IG5ldyBVc2VyU2VydmljZShVc2VyLCBSZWZyZXNoVG9rZW4sIFJvbGUpO1xyXG5jb25zdCBldmVudFNlcnZpY2UgPSBuZXcgRXZlbnRTZXJ2aWNlKEV2ZW50KTtcclxuXHJcbmNvbnN0IGNhdGNoVG9rZW5FcnJvciA9IChlLCByZXMpID0+IHtcclxuICBpZiAoZSBpbnN0YW5jZW9mIFRva2VuRXhwaXJlZEVycm9yKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkISBBY2Nlc3MgVG9rZW4gd2FzIGV4cGlyZWQhJywgZXJyb3JDb2RlOiAnYWNjZXNzdG9rZW4nIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQhJywgZXJyb3JDb2RlOiAnYWNjZXNzdG9rZW4nIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdmVyaWZ5VG9rZW4gPSAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzWyd4LWFjY2Vzcy10b2tlbiddO1xyXG5cclxuICBpZiAoIXRva2VuKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnTm8gdG9rZW4gcHJvdmlkZWQhJywgZXJyb3JDb2RlOiAnYWNjZXNzdG9rZW4nIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gRGVjb2RlIHRva2VuIGFuZCBhdHRhY2ggdXNlciBpbmZvIHRvIHJlcXVlc3RcclxuICBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUX0tFWSwgKGUsIGRlY29kZWQpID0+IHtcclxuICAgIGlmIChlKSB7XHJcbiAgICAgIHJldHVybiBjYXRjaFRva2VuRXJyb3IoZSwgcmVzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXEuYXV0aCA9IHtcclxuICAgICAgdXNlcjogZGVjb2RlZC5pZFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gbmV4dCgpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gQ2hlY2tzIGF1dGhlZCB1c2VyIGFnYWluc3QgcmVxdWVzdCBwYXJhbXMgZm9yIHJlc291cmNlIGF1dGhvcml6YXRpb25cclxuLy8gQ2FuIGJlIHJlcGxhY2VkIHdpdGggYW4gYWNjZXNzIGNvbnRyb2wgbGlzdCBvciBzaW1pbGFyXHJcbmNvbnN0IHZlcmlmeVVSSUF1dGggPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICBjb25zdCB1cmwgPSByZXEuYmFzZVVybCArIHJlcS5yb3V0ZS5wYXRoO1xyXG5cclxuICBzd2l0Y2ggKHVybCkge1xyXG4gICAgY2FzZSBgJHtyZXEuYmFzZVVybH0vOnVzZXJJZGA6IHtcclxuICAgICAgaWYgKHJlcS5hdXRoLnVzZXIgIT09IHJlcS5wYXJhbXMudXNlcklkKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKHsgbWVzc2FnZTogJ1JlcXVpcmVzIGFkbWluIHJvbGUhJywgZXJyb3JDb2RlOiAncm9sZScgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5leHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIGAke3JlcS5iYXNlVXJsfS86Y2FsZW5kYXJJZGA6IHtcclxuICAgICAgLy8gZmV0Y2ggdGFyZ2V0IGNhbGVuZGFyXHJcbiAgICAgIGNvbnN0IGNhbGVuZGFyID0gYXdhaXQgY2FsZW5kYXJTZXJ2aWNlLmdldE9uZShyZXEucGFyYW1zLmNhbGVuZGFySWQpO1xyXG5cclxuICAgICAgaWYgKHJlcS5hdXRoLnVzZXIgIT09IGNhbGVuZGFyLmRhdGEudXNlcl9pZCAmJiAhY2FsZW5kYXIuZGF0YS5zaGFyZWRfd2l0aC5pbmNsdWRlcyhyZXEuYXV0aC51c2VyKSkge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCh7IG1lc3NhZ2U6ICdSZXF1aXJlcyBhZG1pbiByb2xlIScsIGVycm9yQ29kZTogJ3JvbGUnIH0pO1xyXG4gICAgfVxyXG4gICAgICByZXR1cm4gbmV4dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgYCR7cmVxLmJhc2VVcmx9LzpjYWxlbmRhcklkL3NldHRpbmdzYDoge1xyXG4gICAgICAvLyBmZXRjaCB0YXJnZXQgdXNlclxyXG4gICAgICAvLyBNb25nb29zZSByZXR1cm5zIG51bGwgZm9yIC5maW5kT25lIHF1ZXJ5IHdpdGggbm8gbWF0Y2hlc1xyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtcclxuICAgICAgICBfaWQ6IHJlcS5hdXRoLnVzZXIsXHJcbiAgICAgICAgJ2NhbGVuZGFyU2V0dGluZ3MuY2FsZW5kYXInOiB7XHJcbiAgICAgICAgICAkZXE6IHJlcS5wYXJhbXMuY2FsZW5kYXJJZFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5leHQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBub3QgZm91bmQgaW4gdXNlciBzZXR0aW5ncywgY2hlY2sgaWYgdGhleSBhcmUgaW4gdGhlIHNoYXJlZF93aXRoIGxpc3Qgb2YgdGhlIGNhbGVuZGFyXHJcbiAgICBjb25zdCBjYWxlbmRhciA9IGF3YWl0IGNhbGVuZGFyU2VydmljZS5nZXRPbmUocmVxLnBhcmFtcy5jYWxlbmRhcklkKTtcclxuICAgIGlmIChjYWxlbmRhciAmJiBjYWxlbmRhci5kYXRhLnNoYXJlZF93aXRoLmluY2x1ZGVzKHJlcS5hdXRoLnVzZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIG5leHQoKTtcclxuICAgIH1cclxuICAgICAgcmV0dXJuIG5leHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIGAke3JlcS5iYXNlVXJsfS86ZXZlbnRJZGA6IHtcclxuICAgICAgLy8gZmV0Y2ggdGFyZ2V0IGV2ZW50XHJcbiAgICAgIGNvbnN0IGV2ZW50ID0gYXdhaXQgZXZlbnRTZXJ2aWNlLmdldE9uZShyZXEucGFyYW1zLmV2ZW50SWQpO1xyXG4gICAgICAvLyBmZXRjaCBjb3JyZXNwb25kaW5nIGNhbGVuZGFyXHJcbiAgICAgIGNvbnN0IGNhbGVuZGFyID0gYXdhaXQgY2FsZW5kYXJTZXJ2aWNlLmdldE9uZShldmVudC5kYXRhLmNhbGVuZGFyKTtcclxuXHJcbiAgICAgIGlmIChyZXEuYXV0aC51c2VyICE9PSBjYWxlbmRhci5kYXRhLnVzZXJfaWQgJiYgIWNhbGVuZGFyLmRhdGEuc2hhcmVkX3dpdGguaW5jbHVkZXMocmVxLmF1dGgudXNlcikpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnUmVxdWlyZXMgYWRtaW4gcm9sZSEnLCBlcnJvckNvZGU6ICdyb2xlJyB9KTtcclxuICAgIH1cclxuICAgICAgcmV0dXJuIG5leHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnUmVxdWlyZXMgYWRtaW4gcm9sZSEnLCBlcnJvckNvZGU6ICdyb2xlJyB9KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBpc0FkbWluID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgVXNlci5maW5kQnlJZChyZXEuYXV0aC51c2VyKS5leGVjKChlLCB1c2VyKSA9PiB7XHJcbiAgICBpZiAoZSkge1xyXG4gICAgICByZXR1cm4gbmV4dChlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNb25nb29zZSByZXR1cm5zIFtdIGZvciAuZmluZCBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcclxuICAgIFJvbGUuZmluZChcclxuICAgICAge1xyXG4gICAgICAgIGlkOiB7ICRpbjogdXNlci5yb2xlcyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIChlLCByb2xlcykgPT4ge1xyXG4gICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICByZXR1cm4gbmV4dChlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9sZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChyb2xlc1tpXS5uYW1lID09PSAnYWRtaW4nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXh0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnUmVxdWlyZSBBZG1pbiBSb2xlIScsIGVycm9yQ29kZTogJ3JvbGUnIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgaXNNb2RlcmF0b3IgPSAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICBVc2VyLmZpbmRCeUlkKHJlcS5hdXRoLnVzZXIpLmV4ZWMoKGUsIHVzZXIpID0+IHtcclxuICAgIGlmIChlKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1vbmdvb3NlIHJldHVybnMgW10gZm9yIC5maW5kIHF1ZXJ5IHdpdGggbm8gbWF0Y2hlc1xyXG4gICAgUm9sZS5maW5kKFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IHsgJGluOiB1c2VyLnJvbGVzIH1cclxuICAgICAgfSxcclxuICAgICAgKGUsIHJvbGVzKSA9PiB7XHJcbiAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgIHJldHVybiBuZXh0KGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHJvbGVzW2ldLm5hbWUgPT09ICdtb2RlcmF0b3InKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXh0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnUmVxdWlyZSBNb2RlcmF0b3IgUm9sZSEnLCBlcnJvckNvZGU6ICdyb2xlJyB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGF1dGhKd3QgPSB7XHJcbiAgdmVyaWZ5VG9rZW4sXHJcbiAgdmVyaWZ5VVJJQXV0aCxcclxuICBpc0FkbWluLFxyXG4gIGlzTW9kZXJhdG9yXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoSnd0O1xyXG4iLCJpbXBvcnQgYXV0aEp3dCBmcm9tICcuL2F1dGhKd3QnO1xyXG5pbXBvcnQgdmVyaWZ5UmVnaXN0cmF0aW9uIGZyb20gJy4vdmVyaWZ5UmVnaXN0cmF0aW9uJztcclxuXHJcbmV4cG9ydCB7IGF1dGhKd3QsIHZlcmlmeVJlZ2lzdHJhdGlvbiB9O1xyXG4iLCJpbXBvcnQgZGIgZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmltcG9ydCB7IEJhZFJlcXVlc3RFcnJvciB9IGZyb20gJy4uL3V0aWxzL3VzZXJGYWNpbmdFcnJvcnMnO1xyXG5cclxuY29uc3QgY2hlY2tEdXBsaWNhdGVVc2VybmFtZSA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYi5Vc2VyLmZpbmRCeVVzZXJuYW1lKHJlcS5ib2R5LnVzZXJuYW1lKS50aGVuKCh1c2VyKSA9PiB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEJhZFJlcXVlc3RFcnJvcignVXNlcm5hbWUgaXMgYWxyZWFkeSBpbiB1c2UnLCB7IGVycm9yQ29kZTogJ3VzZXJuYW1lJyB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG5leHQoKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gbmV4dChlKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjaGVja1JvbGVzRXhpc3QgPSAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAvLyBBdHRhY2hpbmcgcm9sZXMgdG8gcmVnaXN0cmF0aW9uIHJlcXVlc3QgaXMgb3B0aW9uYWxcclxuICBpZiAoIXJlcS5ib2R5LnJvbGVzIHx8IHJlcS5ib2R5LnJvbGVzPy5sZW5ndGggPCAxKSByZXR1cm4gbmV4dCgpO1xyXG5cclxuICAvLyBDaGVjayBhdHRhY2hlZCByb2xlc1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVxLmJvZHkucm9sZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICghcm9sZXMuaW5jbHVkZXMocmVxLmJvZHkucm9sZXNbaV0pKSB7XHJcbiAgICAgIHRocm93IG5ldyBCYWRSZXF1ZXN0RXJyb3IoYFJvbGUgJHtyZXEuYm9keS5yb2xlc1tpXX0gZG9lcyBub3QgZXhpc3QhYCwgeyBlcnJvckNvZGU6ICdyb2xlJyB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBuZXh0KCk7XHJcbn07XHJcblxyXG5jb25zdCB2ZXJpZnlSZWdpc3RyYXRpb24gPSB7XHJcbiAgY2hlY2tEdXBsaWNhdGVVc2VybmFtZSxcclxuICBjaGVja1JvbGVzRXhpc3RcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZlcmlmeVJlZ2lzdHJhdGlvbjtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcclxuaW1wb3J0IHsgRHVwbGljYXRlS2V5RXJyb3IgfSBmcm9tICcuLi91dGlscy9kYXRhYmFzZUVycm9ycyc7XHJcbmltcG9ydCB7IHVzZXJDb2xvcnMsIHN5c3RlbUNvbG9ycyB9IGZyb20gJ2NvbmZpZy9hcHBDb25maWcnO1xyXG5cclxuY29uc3Qgc2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgbmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG4gIHVzZXJfaWQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgZGVmYXVsdDogJ3N5c3RlbSdcclxuICB9LFxyXG4gIHNoYXJlZF93aXRoOiB7XHJcbiAgICB0eXBlOiBbeyB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogJ1VzZXInIH1dLFxyXG4gICAgZGVmYXVsdDogW11cclxuICB9XHJcbn0pO1xyXG5cclxuLy8gcHJlc2VydmluZyBpc05ldyBzdGF0ZSBmb3IgJ3Bvc3QnIG1pZGRsZXdhcmVcclxuc2NoZW1hLnByZSgnc2F2ZScsIGZ1bmN0aW9uIChuZXh0KSB7XHJcbiAgdGhpcy53YXNOZXcgPSB0aGlzLmlzTmV3O1xyXG4gIG5leHQoKTtcclxufSk7XHJcblxyXG4vLyBzY2hlbWEgbWlkZGxld2FyZSB0byBhcHBseSBhZnRlciBzYXZpbmdcclxuY29uc3QgaGFuZGxlRTExMDAwID0gKGVycm9yLCByZXMsIG5leHQpID0+IHtcclxuICBpZiAoZXJyb3IubmFtZSA9PT0gJ01vbmdvRXJyb3InICYmIGVycm9yLmNvZGUgPT09IDExMDAwKSB7XHJcbiAgICB0aHJvdyBuZXcgRHVwbGljYXRlS2V5RXJyb3IoJ1RoZXJlIHdhcyBhIGNvbmZsaWN0IHdpdGggYW4gZXhpc3RpbmcgZW50cnkuIFBsZWFzZSB0cnkgYWdhaW4uJywge1xyXG4gICAgICBlcnJvckNvZGU6ICdjYWxlbmRhcidcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbmV4dCgpO1xyXG4gIH1cclxufTtcclxuXHJcbnNjaGVtYS5wb3N0KCdzYXZlJywgaGFuZGxlRTExMDAwKTtcclxuc2NoZW1hLnBvc3QoJ2ZpbmRPbmVBbmRVcGRhdGUnLCBoYW5kbGVFMTEwMDApO1xyXG5cclxuLy8gRW1iZWQgY2FsZW5kYXIgc2V0dGluZ3MgaW4gY29ycmVzcG9uZGluZyB1c2VyIGRvYyhzKVxyXG5zY2hlbWEucG9zdCgnc2F2ZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICBpZiAodGhpcy5pZCAmJiB0aGlzLndhc05ldykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gc3lzdGVtIGNhbGVuZGFyIGNyZWF0ZWRcclxuICAgICAgaWYgKHRoaXMudXNlcl9pZCA9PT0gJ3N5c3RlbScpIHtcclxuICAgICAgICAvLyBjb3VudCBzeXN0ZW0gY2Fsc1xyXG4gICAgICAgIGNvbnN0IHN5c3RlbUNhbGVuZGFyc0NvdW50ID0gYXdhaXQgQ2FsZW5kYXIuY291bnREb2N1bWVudHMoeyB1c2VyX2lkOiAnc3lzdGVtJyB9KTtcclxuXHJcbiAgICAgICAgLy8gcHJlcGFyZSBjYWxlbmRhciBzZXR0aW5ncyBvYmplY3RcclxuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgICAgICAgIGNhbGVuZGFyOiB0aGlzLmlkLFxyXG4gICAgICAgICAgdXNlckRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICAgICAgdmlzaWJpbGl0eTogdHJ1ZSxcclxuICAgICAgICAgIGNvbG9yOiBgIyR7c3lzdGVtQ29sb3JzWyhzeXN0ZW1DYWxlbmRhcnNDb3VudCAtIDEpICUgc3lzdGVtQ29sb3JzLmxlbmd0aF19YFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGVtYmVkIGluIGFsbCB1c2VyIGRvY3NcclxuICAgICAgICBhd2FpdCBVc2VyLnVwZGF0ZU1hbnkoe30sIHsgJHB1c2g6IHsgY2FsZW5kYXJTZXR0aW5nczogc2V0dGluZ3MgfSB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB1c2VyIGNhbGVuZGFyIGNyZWF0ZWRcclxuXHJcbiAgICAgICAgLy8gY291bnQgdXNlciBjYWxlbmRhcnNcclxuICAgICAgICBjb25zdCB1c2VyQ2FsZW5kYXJzQ291bnQgPSBhd2FpdCBDYWxlbmRhci5jb3VudERvY3VtZW50cyh7IHVzZXJfaWQ6IHRoaXMudXNlcl9pZCB9KTtcclxuXHJcbiAgICAgICAgaWYgKHVzZXJDYWxlbmRhcnNDb3VudCA8IDEpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBEYXRhYmFzZUVycm9yKCdNYXRjaGluZyBjYWxlbmRhcihzKSBub3QgZm91bmQnLCB7XHJcbiAgICAgICAgICAgIGVycm9yQ29kZTogJ2NhbGVuZGFyJ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB1c2VyIGNhbGVuZGFyKHMpIGZvdW5kLCBwcm9jZXNzIGNhbGVuZGFyIHNldHRpbmdzXHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICBjYWxlbmRhcjogdGhpcy5pZCxcclxuICAgICAgICAgIHZpc2liaWxpdHk6IHRydWUsXHJcbiAgICAgICAgICBjb2xvcjogYCMke3VzZXJDb2xvcnNbKHVzZXJDYWxlbmRhcnNDb3VudCAtIDEpICUgdXNlckNvbG9ycy5sZW5ndGhdfWBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBzZXQgdXNlckRlZmF1bHQgcHJvcGVydHlcclxuICAgICAgICBpZiAodXNlckNhbGVuZGFyc0NvdW50ID09PSAxKSB7XHJcbiAgICAgICAgICBzZXR0aW5ncy51c2VyRGVmYXVsdCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldHRpbmdzLnVzZXJEZWZhdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBlbWJlZCBjYWxlbmRhciBzZXR0aW5ncyBpbiB1c2VyIGRvY1xyXG4gICAgICAgIGF3YWl0IFVzZXIuZmluZEJ5SWRBbmRVcGRhdGUodGhpcy51c2VyX2lkLCB7ICRwdXNoOiB7IGNhbGVuZGFyU2V0dGluZ3M6IHNldHRpbmdzIH0gfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG4vLyBEZWxldGUgY2FsZW5kYXIgc2V0dGluZ3MgaW4gY29ycmVzcG9uZGluZyB1c2VyIGRvYyhzKVxyXG5zY2hlbWEucG9zdCgnZmluZE9uZUFuZERlbGV0ZScsIGFzeW5jIGZ1bmN0aW9uIChkb2MpIHtcclxuICB0cnkge1xyXG4gICAgLy8gc3lzdGVtIGNhbGVuZGFyIGRlbGV0ZWRcclxuICAgIGlmIChkb2MudXNlcl9pZCA9PT0gJ3N5c3RlbScpIHtcclxuICAgICAgLy8gZGVsZXRlIGNhbGVuZGFyIHNldHRpbmdzIGZvciBhbGwgdXNlcnNcclxuICAgICAgYXdhaXQgVXNlci51cGRhdGVNYW55KHt9LCB7ICRwdWxsOiB7IGNhbGVuZGFyU2V0dGluZ3M6IHsgY2FsZW5kYXI6IGRvYy5faWQgfSB9IH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gdXNlciBjYWxlbmRhciBkZWxldGVkXHJcbiAgICAgIC8vIGRlbGV0ZSBjYWxlbmRhciBzZXR0aW5ncyBmb3IgbWF0Y2hpbmcgdXNlclxyXG4gICAgICBhd2FpdCBVc2VyLnVwZGF0ZU9uZSh7IF9pZDogZG9jLnVzZXJfaWQgfSwgeyAkcHVsbDogeyBjYWxlbmRhclNldHRpbmdzOiB7IGNhbGVuZGFyOiBkb2MuX2lkIH0gfSB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIHNjaGVtYSBpbmRleFxyXG5zY2hlbWEuaW5kZXgoeyBuYW1lOiAxLCB1c2VyX2lkOiAxIH0sIHsgdW5pcXVlOiB0cnVlIH0pO1xyXG5cclxuY29uc3QgQ2FsZW5kYXIgPSBtb25nb29zZS5tb2RlbCgnQ2FsZW5kYXInLCBzY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXI7XHJcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBzY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICB0aXRsZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSB0aXRsZS4nXVxyXG4gIH0sXHJcbiAgZGVzYzoge1xyXG4gICAgdHlwZTogU3RyaW5nXHJcbiAgfSxcclxuICBzdGFydDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSBzdGFydCBkYXRlLiddXHJcbiAgfSxcclxuICBlbmQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0VudGVyIGFuIGVuZCBkYXRlLiddXHJcbiAgfSxcclxuICBhbGxEYXk6IHtcclxuICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgfSxcclxuICB0aW1lWm9uZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIHJlZjogJ0NhbGVuZGFyJ1xyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBFdmVudCA9IG1vbmdvb3NlLm1vZGVsKCdFdmVudCcsIHNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudDtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IHNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIHRva2VuOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogW3RydWUsICdFbnRlciBhIG5hbWUuJ11cclxuICB9LFxyXG4gIHVzZXI6IHtcclxuICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuICAgIHJlZjogJ1VzZXInLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSB1c2VyIGlkLiddXHJcbiAgfSxcclxuICBleHBpcnlEYXRlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogW3RydWUsICdFbnRlciBleHBpcmF0aW9uIGRhdGUuJ11cclxuICB9XHJcbn0pO1xyXG5cclxuc2NoZW1hLnN0YXRpY3MudmVyaWZ5RXhwaXJhdGlvbiA9ICh0b2tlbikgPT4ge1xyXG4gIGNvbnN0IGV4cGlyeURhdGVPYmogPSBuZXcgRGF0ZSh0b2tlbi5leHBpcnlEYXRlKTtcclxuICByZXR1cm4gZXhwaXJ5RGF0ZU9iai5nZXRUaW1lKCkgPCBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxufTtcclxuXHJcbmNvbnN0IFJlZnJlc2hUb2tlbiA9IG1vbmdvb3NlLm1vZGVsKCdSZWZyZXNoVG9rZW4nLCBzY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVmcmVzaFRva2VuO1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3Qgc2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgbmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSBuYW1lLiddXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IFJvbGUgPSBtb25nb29zZS5tb2RlbCgnUm9sZScsIHNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb2xlO1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcclxuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vQ2FsZW5kYXInO1xyXG5pbXBvcnQgeyBEdXBsaWNhdGVLZXlFcnJvciB9IGZyb20gJy4uL3V0aWxzL2RhdGFiYXNlRXJyb3JzJztcclxuaW1wb3J0IHsgdXNlckNvbG9ycywgc3lzdGVtQ29sb3JzIH0gZnJvbSAnY29uZmlnL2FwcENvbmZpZyc7XHJcblxyXG5jb25zdCBTQUxUX1dPUktfRkFDVE9SID0gMTA7XHJcblxyXG5jb25zdCBzY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICB1c2VybmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSB1c2VybmFtZS4nXSxcclxuICAgIG1pbkxlbmd0aDogWzQsICdVc2VybmFtZSBzaG91bGQgYmUgYXQgbGVhc3QgZm91ciBjaGFyYWN0ZXJzJ10sXHJcbiAgICB1bmlxdWU6IFt0cnVlLCAnVGhhdCB1c2VybmFtZSBpcyB0YWtlbi4nXVxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0VudGVyIGEgcGFzc3dvcmQuJ10sXHJcbiAgICBtaW5MZW5ndGg6IFs0LCAnUGFzc3dvcmQgc2hvdWxkIGJlIGF0IGxlYXN0IGZvdXIgY2hhcmFjdGVycyddXHJcbiAgfSxcclxuICByb2xlczogW1xyXG4gICAge1xyXG4gICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgIHJlZjogJ1JvbGUnXHJcbiAgICB9XHJcbiAgXSxcclxuICBjYWxlbmRhclNldHRpbmdzOiBbXHJcbiAgICB7XHJcbiAgICAgIGNhbGVuZGFyOiB7XHJcbiAgICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxyXG4gICAgICAgIHJlZjogJ0NhbGVuZGFyJ1xyXG4gICAgICB9LFxyXG4gICAgICB1c2VyRGVmYXVsdDoge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgdmlzaWJpbGl0eToge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBjb2xvcjoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpc1NoYXJlZDoge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgICAgfSxcclxuICAgIH1cclxuICBdXHJcbn0pO1xyXG5cclxuLy8gcHJlc2VydmluZyBpc05ldyBzdGF0ZSBmb3IgJ3Bvc3QnIG1pZGRsZXdhcmVcclxuc2NoZW1hLnByZSgnc2F2ZScsIGZ1bmN0aW9uIChuZXh0KSB7XHJcbiAgdGhpcy53YXNOZXcgPSB0aGlzLmlzTmV3O1xyXG4gIG5leHQoKTtcclxufSk7XHJcblxyXG4vLyBzY2hlbWEgbWlkZGxld2FyZSB0byBhcHBseSBiZWZvcmUgc2F2aW5nXHJcbnNjaGVtYS5wcmUoJ3NhdmUnLCBhc3luYyBmdW5jdGlvbiAobmV4dCkge1xyXG4gIC8vIG9ubHkgaGFzaCB0aGUgcGFzc3dvcmQgaWYgaXQgaGFzIGJlZW4gbW9kaWZpZWQgKG9yIGlzIG5ldylcclxuICBpZiAoIXRoaXMuaXNNb2RpZmllZCgncGFzc3dvcmQnKSkgcmV0dXJuIG5leHQoKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHQuZ2VuU2FsdChTQUxUX1dPUktfRkFDVE9SKTtcclxuICAgIHRoaXMucGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaCh0aGlzLnBhc3N3b3JkLCBzYWx0KTtcclxuXHJcbiAgICByZXR1cm4gbmV4dCgpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBuZXh0KGUpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBzY2hlbWEgbWlkZGxld2FyZSB0byBjaGVjayBmb3IgZHVwbGljYXRlIGtleXNcclxuY29uc3QgaGFuZGxlRTExMDAwID0gKGVycm9yLCByZXMsIG5leHQpID0+IHtcclxuICBpZiAoZXJyb3IubmFtZSA9PT0gJ01vbmdvRXJyb3InICYmIGVycm9yLmNvZGUgPT09IDExMDAwKSB7XHJcbiAgICB0aHJvdyBuZXcgRHVwbGljYXRlS2V5RXJyb3IoJ1RoZXJlIHdhcyBhIGNvbmZsaWN0IHdpdGggYW4gZXhpc3RpbmcgZW50cnkuIFBsZWFzZSB0cnkgYWdhaW4uJywge1xyXG4gICAgICBlcnJvckNvZGU6ICd1c2VybmFtZSdcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbmV4dCgpO1xyXG4gIH1cclxufTtcclxuXHJcbnNjaGVtYS5wb3N0KCdzYXZlJywgaGFuZGxlRTExMDAwKTtcclxuXHJcbi8vIGZvciBuZXcgdXNlcnM6IGVtYmVkIHN5c3RlbSBjYWwgc2V0dGluZ3MgYW5kIGNyZWF0ZSB1c2VyIGRlZmF1bHQgY2FsZW5kYXJcclxuc2NoZW1hLnBvc3QoJ3NhdmUnLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKHRoaXMuaWQgJiYgdGhpcy53YXNOZXcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIExvb2t1cCBzeXN0ZW0gY2Fsc1xyXG4gICAgICBjb25zdCBzeXN0ZW1DYWxzID0gYXdhaXQgQ2FsZW5kYXIuZmluZCh7XHJcbiAgICAgICAgdXNlcl9pZDogJ3N5c3RlbSdcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoc3lzdGVtQ2Fscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBbXTtcclxuXHJcbiAgICAgICAgc3lzdGVtQ2Fscy5mb3JFYWNoKChjYWwsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgc2V0dGluZ3MucHVzaCh7XHJcbiAgICAgICAgICAgIGNhbGVuZGFyOiBjYWwuaWQsXHJcbiAgICAgICAgICAgIHVzZXJEZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdHJ1ZSxcclxuICAgICAgICAgICAgY29sb3I6IGAjJHtzeXN0ZW1Db2xvcnNbaWR4XX1gXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0dGluZ3MuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2FsZW5kYXJTZXR0aW5ncy5wdXNoKGVudHJ5KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZW1iZWQgY2FsZW5kYXIgc2V0dGluZ3MgaW4gdXNlciBkb2NcclxuICAgICAgICBhd2FpdCB0aGlzLnNhdmUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gY2hlY2sgZm9yIGV4aXN0aW5nIHVzZXIgZGVmYXVsdCBjYWxcclxuICAgICAgY29uc3QgZGVmYXVsdENhbCA9IGF3YWl0IENhbGVuZGFyLmZpbmRPbmUoe1xyXG4gICAgICAgIG5hbWU6IHRoaXMudXNlcm5hbWUsXHJcbiAgICAgICAgdXNlcl9pZDogdGhpcy5pZFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChkZWZhdWx0Q2FsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IER1cGxpY2F0ZUtleUVycm9yKCdUaGVyZSB3YXMgYSBjb25mbGljdCB3aXRoIGFuIGV4aXN0aW5nIGVudHJ5LiBQbGVhc2UgdHJ5IGFnYWluLicsIHtcclxuICAgICAgICAgIGVycm9yQ29kZTogJ3VzZXInXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG5ld0RlZmF1bHRDYWwgPSBuZXcgQ2FsZW5kYXIoe1xyXG4gICAgICAgIG5hbWU6IHRoaXMudXNlcm5hbWUsXHJcbiAgICAgICAgdXNlcl9pZDogdGhpcy5pZFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBkZWZhdWx0IGNhbGVuZGFyXHJcbiAgICAgIGF3YWl0IG5ld0RlZmF1bHRDYWwuc2F2ZSgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbnNjaGVtYS5zdGF0aWNzLmZpbmRCeVVzZXJuYW1lID0gYXN5bmMgZnVuY3Rpb24gKHVzZXJuYW1lKSB7XHJcbiAgLy8gTW9uZ29vc2UgcmV0dXJucyBudWxsIGZvciAuZmluZE9uZSBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcclxuICByZXR1cm4gdGhpcy5maW5kT25lKHsgdXNlcm5hbWUgfSk7XHJcbn07XHJcblxyXG5zY2hlbWEubWV0aG9kcy52YWxpZGF0ZVBhc3N3b3JkID0gYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZChjYW5kaWRhdGVQYXNzd29yZCkge1xyXG4gIHJldHVybiBiY3J5cHQuY29tcGFyZShjYW5kaWRhdGVQYXNzd29yZCwgdGhpcy5wYXNzd29yZCk7XHJcbn07XHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWwoJ1VzZXInLCBzY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcclxuaW1wb3J0IFJvbGUgZnJvbSAnLi9Sb2xlJztcclxuaW1wb3J0IEV2ZW50IGZyb20gJy4vRXZlbnQnO1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9DYWxlbmRhcic7XHJcbmltcG9ydCBSZWZyZXNoVG9rZW4gZnJvbSAnLi9SZWZyZXNoVG9rZW4nO1xyXG5cclxuY29uc3QgZGIgPSB7XHJcbiAgbW9uZ29vc2UsXHJcbiAgVXNlcixcclxuICBSb2xlLFxyXG4gIEV2ZW50LFxyXG4gIENhbGVuZGFyLFxyXG4gIFJlZnJlc2hUb2tlbixcclxuICByb2xlczogWyd1c2VyJywgJ2FkbWluJywgJ21vZGVyYXRvciddXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYjtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IGF1dGhKd3QgfSBmcm9tICcuLi9taWRkbGV3YXJlJztcclxuaW1wb3J0IENhbGVuZGFyQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9DYWxlbmRhckNvbnRyb2xsZXInO1xyXG5cclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbi8vIFBPU1QgcmVxdWVzdCB0byBjcmVhdGUgY2FsZW5kYXJcclxucm91dGVyLnBvc3QoJy8nLCBbYXV0aEp3dC52ZXJpZnlUb2tlbl0sIENhbGVuZGFyQ29udHJvbGxlci5jcmVhdGUpO1xyXG5cclxuLy8gUFVUIHJlcXVlc3QgdG8gdXBkYXRlIGNhbGVuZGFyXHJcbnJvdXRlci5wdXQoJy86Y2FsZW5kYXJJZCcsIFthdXRoSnd0LnZlcmlmeVRva2VuLCBhdXRoSnd0LnZlcmlmeVVSSUF1dGhdLCBDYWxlbmRhckNvbnRyb2xsZXIudXBkYXRlKTtcclxuXHJcbi8vcm91dGVyLmdldCgnLzp1c2VySWQnLCBDYWxlbmRhckNvbnRyb2xsZXIuZ2V0VXNlckNhbGVuZGFycyk7XHJcblxyXG4vLyBERUxFVEUgcmVxdWVzdCB0byBkZWxldGUgY2FsZW5kYXJcclxucm91dGVyLmRlbGV0ZSgnLzpjYWxlbmRhcklkJywgW2F1dGhKd3QudmVyaWZ5VG9rZW4sIGF1dGhKd3QudmVyaWZ5VVJJQXV0aF0sIENhbGVuZGFyQ29udHJvbGxlci5kZWxldGUpO1xyXG5cclxuLy8gUFVUIHJlcXVlc3QgdG8gdXBkYXRlIGNhbGVuZGFyIHNldHRpbmdzXHJcbnJvdXRlci5wdXQoJy86Y2FsZW5kYXJJZC9zZXR0aW5ncycsIFthdXRoSnd0LnZlcmlmeVRva2VuLCBhdXRoSnd0LnZlcmlmeVVSSUF1dGhdLCBDYWxlbmRhckNvbnRyb2xsZXIudXBkYXRlU2V0dGluZ3MpO1xyXG5cclxucm91dGVyLnBvc3QoJy86Y2FsZW5kYXJJZC9zaGFyZScsIENhbGVuZGFyQ29udHJvbGxlci5zaGFyZUNhbGVuZGFyKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBhdXRoSnd0IH0gZnJvbSAnLi4vbWlkZGxld2FyZSc7XHJcbmltcG9ydCBFdmVudENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvRXZlbnRDb250cm9sbGVyJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG4vLyBQT1NUIHJlcXVlc3QgdG8gY3JlYXRlIGV2ZW50XHJcbnJvdXRlci5wb3N0KCcvJywgW2F1dGhKd3QudmVyaWZ5VG9rZW5dLCBFdmVudENvbnRyb2xsZXIuY3JlYXRlKTtcclxuXHJcbi8vIEdFVCByZXF1ZXN0IHRvIGdldCB1c2VyIGV2ZW50c1xyXG5yb3V0ZXIuZ2V0KCcvdXNlcicsIFthdXRoSnd0LnZlcmlmeVRva2VuXSwgRXZlbnRDb250cm9sbGVyLmdldFVzZXJFdmVudHMpO1xyXG5cclxuLy8gUFVUIHJlcXVlc3QgdG8gdXBkYXRlIGV2ZW50XHJcbnJvdXRlci5wdXQoJy86ZXZlbnRJZCcsIFthdXRoSnd0LnZlcmlmeVRva2VuLCBhdXRoSnd0LnZlcmlmeVVSSUF1dGhdLCBFdmVudENvbnRyb2xsZXIudXBkYXRlKTtcclxuXHJcbi8vIERFTEVURSByZXF1ZXN0IHRvIGRlbGV0ZSBldmVudFxyXG5yb3V0ZXIuZGVsZXRlKCcvOmV2ZW50SWQnLCBbYXV0aEp3dC52ZXJpZnlUb2tlbiwgYXV0aEp3dC52ZXJpZnlVUklBdXRoXSwgRXZlbnRDb250cm9sbGVyLmRlbGV0ZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgdXNlclJvdXRlciBmcm9tICcuL3VzZXJSb3V0ZXInO1xyXG5pbXBvcnQgY2FsZW5kYXJSb3V0ZXIgZnJvbSAnLi9jYWxlbmRhclJvdXRlcic7XHJcbmltcG9ydCBldmVudFJvdXRlciBmcm9tICcuL2V2ZW50Um91dGVyJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIudXNlKCcvdXNlcnMnLCB1c2VyUm91dGVyKTtcclxucm91dGVyLnVzZSgnL2NhbGVuZGFycycsIGNhbGVuZGFyUm91dGVyKTtcclxucm91dGVyLnVzZSgnL2V2ZW50cycsIGV2ZW50Um91dGVyKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgYXV0aEp3dCwgdmVyaWZ5UmVnaXN0cmF0aW9uIH0gZnJvbSAnLi4vbWlkZGxld2FyZSc7XHJcbmltcG9ydCBVc2VyQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9Vc2VyQ29udHJvbGxlcic7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxuLy8gUE9TVCByZXF1ZXN0IHRvIHJlZ2lzdGVyIHVzZXJcclxucm91dGVyLnBvc3QoXHJcbiAgJy9yZWdpc3RlcicsXHJcbiAgW3ZlcmlmeVJlZ2lzdHJhdGlvbi5jaGVja0R1cGxpY2F0ZVVzZXJuYW1lLCB2ZXJpZnlSZWdpc3RyYXRpb24uY2hlY2tSb2xlc0V4aXN0XSxcclxuICBbVXNlckNvbnRyb2xsZXIucmVnaXN0ZXIsIFVzZXJDb250cm9sbGVyLmxvZ2luXVxyXG4pO1xyXG5cclxuLy8gUE9TVCByZXF1ZXN0IHRvIGxvZ2luIHVzZXIgKHJldHVybnMgdXNlciBvYmplY3QpXHJcbnJvdXRlci5wb3N0KCcvbG9naW4nLCBVc2VyQ29udHJvbGxlci5sb2dpbik7XHJcblxyXG4vLyBQT1NUIHJlcXVlc3QgdG8gcmVmcmVzaCB0b2tlblxyXG5yb3V0ZXIucG9zdCgnL3JlZnJlc2h0b2tlbicsIFVzZXJDb250cm9sbGVyLnJlZnJlc2hUb2tlbik7XHJcblxyXG4vLyBQVVQgcmVxdWVzdCB0byB1cGRhdGUgdXNlclxyXG5yb3V0ZXIucHV0KCcvOnVzZXJJZCcsIFthdXRoSnd0LnZlcmlmeVRva2VuLCBhdXRoSnd0LnZlcmlmeVVSSUF1dGhdLCBVc2VyQ29udHJvbGxlci51cGRhdGUpO1xyXG5cclxucm91dGVyLmdldCgnL3VzZXJzLzp1c2VySWQnLCBVc2VyQ29udHJvbGxlci5nZXRVc2Vycyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiIsImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XHJcblxyXG5pbXBvcnQgZGIgZnJvbSAnLi9kYi9jb25uZWN0aW9uLmpzJztcclxuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcnMvaW5kZXguanMnO1xyXG5pbXBvcnQgeyBVc2VyRmFjaW5nRXJyb3IsIERhdGFiYXNlRXJyb3IgfSBmcm9tICcuL3V0aWxzL2Jhc2VFcnJvcnMuanMnO1xyXG5cclxuY29uc3QgQlVJTERfRElSID0gX19kaXJuYW1lO1xyXG5jb25zdCBIVE1MX0ZJTEUgPSBwYXRoLnJlc29sdmUoQlVJTERfRElSLCAnaW5kZXguaHRtbCcpO1xyXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAxO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnVzZShjb3JzKCkpO1xyXG5cclxuLy8gc3VwcG9ydCBkYXRhIGZyb20gUE9TVCByZXF1ZXN0c1xyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xyXG5cclxuLy8gc2VydmUgc3RhdGljIGZpbGVzXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoQlVJTERfRElSKSk7XHJcblxyXG4vLyBVc2UgQVBJIHJvdXRlc1xyXG5hcHAudXNlKCcvYXBpL3YxJywgcm91dGVyKTtcclxuXHJcbmFwcC5nZXQoJy9oZWxsbycsIChyZXEsIHJlcykgPT4ge1xyXG4gIHJlcy5zZW5kKCdIZWxsbywgV29ybGQhJyk7XHJcbn0pO1xyXG5cclxuYXBwLmdldCgnKicsIChyZXEsIHJlcykgPT4ge1xyXG4gIHJlcy5zZW5kRmlsZShIVE1MX0ZJTEUpO1xyXG59KTtcclxuXHJcbi8vIEdsb2JhbCBlcnJvciBoYW5kbGVyXHJcbmFwcC51c2UoZnVuY3Rpb24gKGVyciwgcmVxLCByZXMsIG5leHQpIHtcclxuICByZXMuaGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cclxuICBjb25zdCBzdGF0dXMgPSBlcnIuc3RhdHVzIHx8IDQwMDtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSB7XHJcbiAgICBuYW1lOiBlcnIubmFtZSxcclxuICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlID8/ICcnXHJcbiAgfTtcclxuXHJcbiAgaWYgKGVyciBpbnN0YW5jZW9mIFVzZXJGYWNpbmdFcnJvciB8fCBlcnIgaW5zdGFuY2VvZiBEYXRhYmFzZUVycm9yKSB7XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhlcnIpKSB7XHJcbiAgICAgIHJlc3BvbnNlW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcy5zdGF0dXMoc3RhdHVzKS5zZW5kKHJlc3BvbnNlKTtcclxufSk7XHJcblxyXG5hcHAubGlzdGVuKFBPUlQsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhgc2VydmVyIHN0YXJ0ZWQgYXQgaHR0cDovL2xvY2FsaG9zdDoke1BPUlR9YCk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgSHR0cFJlc3BvbnNlIGZyb20gJy4uL3V0aWxzL2h0dHBSZXNwb25zZSc7XHJcbmltcG9ydCB7IHN5c3RlbUNvbG9ycywgdXNlckNvbG9ycyB9IGZyb20gJ2NvbmZpZy9hcHBDb25maWcnO1xyXG5cclxuY2xhc3MgQ2FsZW5kYXJTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihtb2RlbCkge1xyXG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IF9vYmogPSB7XHJcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgIHVzZXJfaWQ6IGRhdGEudXNlcl9pZCxcclxuICAgICAgICBzaGFyZWRfd2l0aDogZGF0YS5zaGFyZWRfd2l0aFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kZWwuY3JlYXRlKF9vYmopO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGdldE9uZSA9IGFzeW5jIChjYWxlbmRhcklkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBNb25nb29zZSByZXR1cm5zIG51bGwgZm9yIC5maW5kQnlJZCBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kQnlJZChjYWxlbmRhcklkKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKHJlc3VsdCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gR2V0IHVzZXIgYW5kIHN5c3RlbSBjYWxlbmRhcnNcclxuICBnZXRVc2VyQ2FsZW5kYXJzID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kKHtcclxuICAgICAgICAkb3I6IFtcclxuICAgICAgICAgIHsgdXNlcl9pZDogeyAkaW46IFt1c2VySWQsICdzeXN0ZW0nXSB9IH0sXHJcbiAgICAgICAgICB7IHNoYXJlZF93aXRoOiB1c2VySWQgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKHJlc3VsdCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXBkYXRlID0gYXN5bmMgKGNhbGVuZGFySWQsIGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZSA9IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWVcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIE1vbmdvb3NlIHJldHVybnMgdGhlIG1vZGlmaWVkIGRvY3VtZW50IChvciBudWxsKSBmb3IgLmZpbmRCeUlkQW5kVXBkYXRlIHF1ZXJ5IHdpdGggb3B0aW9uICduZXc6IHRydWUnXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuZmluZEJ5SWRBbmRVcGRhdGUoY2FsZW5kYXJJZCwgdXBkYXRlLCB7IG5ldzogdHJ1ZSB9KTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKHJlc3VsdCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZGVsZXRlID0gYXN5bmMgKGNhbGVuZGFySWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIE1vbmdvb3NlIHJldHVybnMgdGhlIG1hdGNoaW5nIGRvY3VtZW50IChvciBudWxsKSBmb3IgLmZpbmRCeUlkQW5kRGVsZXRlIHF1ZXJ5XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuZmluZEJ5SWRBbmREZWxldGUoY2FsZW5kYXJJZCk7XHJcblxyXG4gICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCdDYWxlbmRhciBub3QgZm91bmQnKTtcclxuXHJcbiAgICAgICAgZXJyb3Iuc3RhdHVzQ29kZSA9IDQwNDtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQsIHsgZGVsZXRlZDogdHJ1ZSB9KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHNoYXJlQ2FsZW5kYXIgPSBhc3luYyAoY2FsZW5kYXJJZCwgdXNlcklkKSA9PiB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgLy8gRmluZCB0aGUgY2FsZW5kYXJcclxuICAgICAgY29uc3QgY2FsZW5kYXIgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkKGNhbGVuZGFySWQpO1xyXG4gICAgICBpZiAoIWNhbGVuZGFyKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYWxlbmRhciBub3QgZm91bmQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQWRkIHRoZSB1c2VyIHRvIHRoZSBzaGFyZWRfd2l0aCBhcnJheVxyXG4gICAgICBpZiAoIWNhbGVuZGFyLnNoYXJlZF93aXRoLmluY2x1ZGVzKHVzZXJJZCkpIHtcclxuICAgICAgICBjYWxlbmRhci5zaGFyZWRfd2l0aC5wdXNoKHVzZXJJZCk7XHJcbiAgICAgICAgYXdhaXQgY2FsZW5kYXIuc2F2ZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY2FsZW5kYXI7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXJTZXJ2aWNlO1xyXG4iLCJpbXBvcnQgSHR0cFJlc3BvbnNlIGZyb20gJy4uL3V0aWxzL2h0dHBSZXNwb25zZSc7XHJcblxyXG5jbGFzcyBFdmVudFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKG1vZGVsKSB7XHJcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5jcmVhdGUoZGF0YSk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGdldE9uZSA9IGFzeW5jIChldmVudElkKSA9PiB7XHJcbiAgICAvLyBNb25nb29zZSByZXR1cm5zIG51bGwgZm9yIC5maW5kQnlJZCBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuZmluZEJ5SWQoZXZlbnRJZCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UocmVzdWx0KTtcclxuICB9O1xyXG5cclxuICBnZXRVc2VyRXZlbnRzID0gYXN5bmMgKGNhbGVuZGFySWRzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBNb25nb29zZSByZXR1cm5zIFtdIGZvciAuZmluZCBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcclxuICAgICAgY29uc3QgZXZlbnRzID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kKHsgY2FsZW5kYXI6IHsgJGluOiBjYWxlbmRhcklkcyB9IH0pO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UoZXZlbnRzKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1cGRhdGUgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXBkYXRlID0ge1xyXG4gICAgICAgIC4uLmRhdGFcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGRlbGV0ZSB1cGRhdGUuaWQ7XHJcblxyXG4gICAgICAvLyBNb25nb29zZSByZXR1cm5zIHRoZSBtb2RpZmllZCBkb2N1bWVudCAob3IgbnVsbCkgZm9yIC5maW5kQnlJZEFuZFVwZGF0ZSBxdWVyeSB3aXRoIG9wdGlvbiAnbmV3OiB0cnVlJ1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkQW5kVXBkYXRlKGRhdGEuaWQsIHVwZGF0ZSwgeyBuZXc6IHRydWUgfSk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGRlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gTW9uZ29vc2UgcmV0dXJucyB0aGUgbWF0Y2hpbmcgZG9jdW1lbnQgKG9yIG51bGwpIGZvciAuZmluZEJ5SWRBbmREZWxldGUgcXVlcnlcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kQnlJZEFuZERlbGV0ZShpZCk7XHJcblxyXG4gICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCdFdmVudCBub3QgZm91bmQnKTtcclxuXHJcbiAgICAgICAgZXJyb3Iuc3RhdHVzQ29kZSA9IDQwNDtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQsIHsgZGVsZXRlZDogdHJ1ZSB9KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50U2VydmljZTtcclxuIiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IEF1dGhvcml6YXRpb25FcnJvciB9IGZyb20gJy4uL3V0aWxzL3VzZXJGYWNpbmdFcnJvcnMnO1xyXG5cclxuY2xhc3MgUmVmcmVzaFRva2VuU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IobW9kZWwpIHtcclxuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSA9IGFzeW5jICh1c2VySWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGV4cGlyZWRBdCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICBleHBpcmVkQXQuc2V0U2Vjb25kcyhleHBpcmVkQXQuZ2V0U2Vjb25kcygpICsgTnVtYmVyKHByb2Nlc3MuZW52LkpXVF9SRUZSRVNIX0VYUElSQVRJT04pKTtcclxuXHJcbiAgICAgIGNvbnN0IF90b2tlbiA9IHV1aWR2NCgpO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICB0b2tlbjogX3Rva2VuLFxyXG4gICAgICAgIHVzZXI6IHVzZXJJZCxcclxuICAgICAgICBleHBpcnlEYXRlOiBleHBpcmVkQXQudG9JU09TdHJpbmcoKVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5jcmVhdGUoZGF0YSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGdldCA9IGFzeW5jIChyZXF1ZXN0VG9rZW4pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIE1vbmdvb3NlIHJldHVybnMgbnVsbCBmb3IgLmZpbmRPbmUgcXVlcnkgd2l0aCBubyBtYXRjaGVzXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuZmluZE9uZSh7IHRva2VuOiByZXF1ZXN0VG9rZW4gfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHZlcmlmeSA9IGFzeW5jICh0b2tlbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHRoaXMubW9kZWwudmVyaWZ5RXhwaXJhdGlvbih0b2tlbikpIHtcclxuICAgICAgICAvLyBSZWZyZXNoIHRva2VuIGV4cGlyZWRcclxuICAgICAgICAvLyBNb25nb29zZSByZXR1cm5zIHRoZSBtYXRjaGluZyBkb2N1bWVudCAob3IgbnVsbCkgZm9yIC5maW5kQnlJZEFuZFJlbW92ZSBxdWVyeVxyXG4gICAgICAgIGF3YWl0IHRoaXMubW9kZWwuZmluZEJ5SWRBbmRSZW1vdmUodG9rZW4uaWQsIHtcclxuICAgICAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBBdXRob3JpemF0aW9uRXJyb3IoJ1JlZnJlc2ggdG9rZW4gZXhwaXJlZCcsIHsgZXJyb3JDb2RlOiAncmVmcmVzaFRva2VuJyB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZnJlc2hUb2tlblNlcnZpY2U7XHJcbiIsImltcG9ydCBIdHRwUmVzcG9uc2UgZnJvbSAnLi4vdXRpbHMvaHR0cFJlc3BvbnNlJztcclxuXHJcbmNsYXNzIFJvbGVTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihtb2RlbCkge1xyXG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlID0gYXN5bmMgKG5hbWUpID0+IHtcclxuICAgIGF3YWl0IHRoaXMubW9kZWwuY3JlYXRlKHsgbmFtZSB9KS50aGVuKChyb2xlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBDcmVhdGVkIHJvbGU6ICR7cm9sZS5uYW1lfWApO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZ2V0ID0gYXN5bmMgKHJvbGVzKSA9PiB7XHJcbiAgICAvLyBNb25nb29zZSByZXR1cm5zIFtdIGZvciAuZmluZCBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuZmluZCh7IG5hbWU6IHsgJGluOiByb2xlcyB9IH0pO1xyXG5cclxuICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKHJlc3VsdCk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9sZVNlcnZpY2U7XHJcbiIsImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IFJlZnJlc2hUb2tlblNlcnZpY2UgZnJvbSAnLi9SZWZyZXNoVG9rZW5TZXJ2aWNlJztcclxuaW1wb3J0IFJvbGVTZXJ2aWNlIGZyb20gJy4vUm9sZVNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRob3JpemF0aW9uRXJyb3IsIE5vdEZvdW5kRXJyb3IgfSBmcm9tICcuLi91dGlscy91c2VyRmFjaW5nRXJyb3JzJztcclxuaW1wb3J0IEh0dHBSZXNwb25zZSBmcm9tICcuLi91dGlscy9odHRwUmVzcG9uc2UnO1xyXG5cclxuY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKG1vZGVsLCByZWZyZXNoVG9rZW5Nb2RlbCwgcm9sZU1vZGVsKSB7XHJcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XHJcbiAgICB0aGlzLnJlZnJlc2hUb2tlblNlcnZpY2UgPSBuZXcgUmVmcmVzaFRva2VuU2VydmljZShyZWZyZXNoVG9rZW5Nb2RlbCk7XHJcbiAgICB0aGlzLnJvbGVTZXJ2aWNlID0gbmV3IFJvbGVTZXJ2aWNlKHJvbGVNb2RlbCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5jcmVhdGUoZGF0YSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIExvb2sgdXAgdXNlciwgdmFsaWRhdGUgcHcsIGNyZWF0ZSByZWZyZXNoIHRva2VuXHJcbiAgbG9naW4gPSBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBNb25nb29zZSByZXR1cm5zIG51bGwgZm9yIC5maW5kT25lIHF1ZXJ5IHdpdGggbm8gbWF0Y2hlc1xyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kT25lKHsgdXNlcm5hbWUgfSk7XHJcblxyXG4gICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAvLyBVc2VyIG5vdCBmb3VuZFxyXG4gICAgICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKCdJbnZhbGlkIHVzZXJuYW1lJywgeyBlcnJvckNvZGU6ICd1c2VybmFtZScgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHByb2Nlc3MgbG9naW5cclxuICAgICAgY29uc3QgdmFsaWRhdGVkID0gYXdhaXQgdXNlci52YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKTtcclxuXHJcbiAgICAgIGlmICghdmFsaWRhdGVkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEF1dGhvcml6YXRpb25FcnJvcignSW52YWxpZCBwYXNzd29yZCcsIHtcclxuICAgICAgICAgIGVycm9yQ29kZTogJ3Bhc3N3b3JkJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBJZiBwYXNzd29yZCBpcyB2YWxpZCwgY3JlYXRlIEpXVCB0b2tlblxyXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGp3dC5zaWduKHsgaWQ6IHVzZXIuX2lkIH0sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVRfS0VZLCB7XHJcbiAgICAgICAgZXhwaXJlc0luOiBOdW1iZXIocHJvY2Vzcy5lbnYuSldUX0VYUElSQVRJT04pXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIHJlZnJlc2ggdG9rZW5cclxuICAgICAgY29uc3QgcmVmcmVzaFRva2VuID0gYXdhaXQgdGhpcy5yZWZyZXNoVG9rZW5TZXJ2aWNlLmNyZWF0ZSh1c2VyLmlkKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlZnJlc2hUb2tlblJlc3BvbnNlID0gbmV3IEh0dHBSZXNwb25zZShyZWZyZXNoVG9rZW4pO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhY2Nlc3NUb2tlbixcclxuICAgICAgICByZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlblJlc3BvbnNlLmRhdGFcclxuICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBnZXRPbmUgPSBhc3luYyAodXNlcklkKSA9PiB7XHJcbiAgICAvLyBSZXRyaWV2ZSB1c2VyIGRvYyBhbmQgcG9wdWxhdGUgcmVmZXJlbmNlZCBmaWVsZHNcclxuICAgIC8vIE1vbmdvb3NlIHJldHVybnMgbnVsbCBmb3IgLmZpbmRCeUlkIHF1ZXJ5IHdpdGggbm8gbWF0Y2hlc1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkKHVzZXJJZCkucG9wdWxhdGUoWydyb2xlcycsICdjYWxlbmRhclNldHRpbmdzLmNhbGVuZGFyJ10pO1xyXG5cclxuICAgIGNvbnN0IGh0dHBSZXNwb25zZSA9IG5ldyBIdHRwUmVzcG9uc2UocmVzcG9uc2UpO1xyXG5cclxuICAgIGNvbnN0IGZsYXR0ZW5lZENhbGVuZGFyU2V0dGluZ3MgPSBodHRwUmVzcG9uc2UuZGF0YS5jYWxlbmRhclNldHRpbmdzLm1hcCgoZW50cnkpID0+ICh7XHJcbiAgICAgIGlkOiBlbnRyeS5jYWxlbmRhci5pZCxcclxuICAgICAgbmFtZTogZW50cnkuY2FsZW5kYXIubmFtZSxcclxuICAgICAgdXNlcl9pZDogZW50cnkuY2FsZW5kYXIudXNlcl9pZCxcclxuICAgICAgdXNlckRlZmF1bHQ6IGVudHJ5LnVzZXJEZWZhdWx0LFxyXG4gICAgICB2aXNpYmlsaXR5OiBlbnRyeS52aXNpYmlsaXR5LFxyXG4gICAgICBjb2xvcjogZW50cnkuY29sb3IsXHJcbiAgICAgIGlzU2hhcmVkOiBlbnRyeS5pc1NoYXJlZCxcclxuICAgICAgc2hhcmVkV2l0aDogZW50cnkuY2FsZW5kYXIuc2hhcmVkV2l0aFxyXG4gICAgfSkpO1xyXG5cclxuICAgIGh0dHBSZXNwb25zZS5kYXRhLmNhbGVuZGFyU2V0dGluZ3MgPSBmbGF0dGVuZWRDYWxlbmRhclNldHRpbmdzO1xyXG5cclxuICAgIHJldHVybiBodHRwUmVzcG9uc2UuZGF0YTtcclxuICB9O1xyXG5cclxuXHJcbiAgZ2V0QWxsVXNlcm5hbWVzID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gUmV0cmlldmUgb25seSBgdXNlcm5hbWVgIGFuZCBgX2lkYCBmaWVsZHMgZm9yIGFsbCB1c2Vyc1xyXG4gICAgICBjb25zdCB1c2VycyA9IGF3YWl0IHRoaXMubW9kZWwuZmluZCh7IF9pZDogeyAkbmU6IHVzZXJJZCB9IH0sICd1c2VybmFtZSBfaWQnKTtcclxuICAgIFxyXG4gICAgICBcclxuICAgICAgLy8gV3JhcCBpbiBhbiBIdHRwUmVzcG9uc2VcclxuICAgICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UodXNlcnMpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJlZnJlc2hUb2tlbiA9IGFzeW5jIChyZXF1ZXN0VG9rZW4pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IGF3YWl0IHRoaXMucmVmcmVzaFRva2VuU2VydmljZS5nZXQocmVxdWVzdFRva2VuKTtcclxuXHJcbiAgICAgIGlmICghcmVmcmVzaFRva2VuKSB7XHJcbiAgICAgICAgLy8gUmVmcmVzaCB0b2tlbiBub3QgZm91bmRcclxuICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFcnJvcignSW52YWxpZCByZXF1ZXN0IHRva2VuJywgeyBlcnJvckNvZGU6ICdyZWZyZXNoVG9rZW4nIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUaHJvd3MgZXJyb3Igb24gZXhwaXJlZCByZWZyZXNoIHRva2VuXHJcbiAgICAgIGF3YWl0IHRoaXMucmVmcmVzaFRva2VuU2VydmljZS52ZXJpZnkocmVmcmVzaFRva2VuKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSBuZXcgSldUIHRva2VuXHJcbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gand0LnNpZ24oeyBpZDogcmVmcmVzaFRva2VuLnVzZXIuX2lkIH0sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVRfS0VZLCB7XHJcbiAgICAgICAgZXhwaXJlc0luOiBOdW1iZXIocHJvY2Vzcy5lbnYuSldUX0VYUElSQVRJT04pXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XHJcbiAgICAgICAgYWNjZXNzVG9rZW5cclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBhc3NpZ25Sb2xlcyA9IGFzeW5jICh1c2VyLCByb2xlTmFtZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJvbGVzID0gYXdhaXQgdGhpcy5yb2xlU2VydmljZS5nZXQocm9sZU5hbWVzKTtcclxuXHJcbiAgICAgIGlmICghcm9sZXMuZGF0YSB8fCByb2xlcy5kYXRhLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFcnJvcignUm9sZShzKSBub3QgZm91bmQnLCB7IGVycm9yQ29kZTogJ3JvbGUnIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB1c2VyLnJvbGVzID0gcm9sZXMuZGF0YS5tYXAoKHJvbGUpID0+IHJvbGUuaWQpO1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHVzZXIuc2F2ZSgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVwZGF0ZSA9IGFzeW5jICh1c2VySWQsIGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIE1vbmdvb3NlIHJldHVybnMgdGhlIG1vZGlmaWVkIGRvY3VtZW50IChvciBudWxsKSBmb3IgLmZpbmRCeUlkIHF1ZXJ5XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkKHVzZXJJZCk7XHJcblxyXG4gICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFcnJvcignTm8gbWF0Y2hpbmcgdXNlciBmb3VuZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyB1cGRhdGUgcGFzc3dvcmRcclxuICAgICAgaWYgKGRhdGEucGFzc3dvcmQpIHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0ZWQgPSBhd2FpdCB1c2VyLnZhbGlkYXRlUGFzc3dvcmQoZGF0YS5wYXNzd29yZCk7XHJcblxyXG4gICAgICAgIGlmICghdmFsaWRhdGVkKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgQXV0aG9yaXphdGlvbkVycm9yKCdJbnZhbGlkIHBhc3N3b3JkLiBQbGVhc2UgdHJ5IGFnYWluLicsIHsgZXJyb3JDb2RlOiAncGFzc3dvcmQnIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXNlci5wYXNzd29yZCA9IGRhdGEubmV3UGFzc3dvcmQgfHwgJyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHVwZGF0ZSB1c2VybmFtZVxyXG4gICAgICBpZiAoZGF0YS51c2VybmFtZSkge1xyXG4gICAgICAgIHVzZXIudXNlcm5hbWUgPSBkYXRhLnVzZXJuYW1lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1c2VyLnNhdmUoKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKHJlc3VsdCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXBkYXRlQ2FsZW5kYXJTZXR0aW5ncyA9IGFzeW5jICh1c2VySWQsIGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGdldCBjYWxlbmRhciBzZXR0aW5ncyBwcm9wZXJ0aWVzIGZyb20gbW9kZWwgc2NoZW1hXHJcbiAgICAgIGNvbnN0IGNhbGVuZGFyU2V0dGluZ3NLZXlzID0gT2JqZWN0LmtleXModGhpcy5tb2RlbC5zY2hlbWEudHJlZS5jYWxlbmRhclNldHRpbmdzWzBdKTtcclxuICAgICBcclxuICAgICAgY29uc3QgZGlmZmVkRGF0YSA9IHt9O1xyXG5cclxuICAgICAgY2FsZW5kYXJTZXR0aW5nc0tleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgZGlmZmVkRGF0YVtrZXldID0gZGF0YVtrZXldO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIE9iamVjdC5rZXlzKGRpZmZlZERhdGEpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgIGlmIChkaWZmZWREYXRhW2tleV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgZGVsZXRlIGRpZmZlZERhdGFba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgdXBkYXRlID0ge307XHJcblxyXG4gICAgICBPYmplY3Qua2V5cyhkaWZmZWREYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICB1cGRhdGVbYGNhbGVuZGFyU2V0dGluZ3MuJFtpXS4ke2tleX1gXSA9IGRpZmZlZERhdGFba2V5XTtcclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMubW9kZWwuZmluZE9uZUFuZFVwZGF0ZShcclxuICAgICAgICB7IF9pZDogdXNlcklkIH0sXHJcbiAgICAgICAgeyAkc2V0OiB1cGRhdGUgfSxcclxuICAgICAgICB7IGFycmF5RmlsdGVyczogW3sgJ2kuY2FsZW5kYXInOiBkYXRhLmlkIH1dLCBuZXc6IHRydWUgfVxyXG4gICAgICApO1xyXG4gICAgICBcclxuICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kRXJyb3IoYFVwZGF0ZSBmYWlsZWQgd2l0aCB1c2VyIGlkOiAke3VzZXJJZH1gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaHR0cFJlc3BvbnNlID0gbmV3IEh0dHBSZXNwb25zZSh1c2VyLmNhbGVuZGFyU2V0dGluZ3MpO1xyXG5cclxuICAgICAgY29uc3QgZmxhdHRlbmVkQ2FsZW5kYXJTZXR0aW5ncyA9IGh0dHBSZXNwb25zZS5kYXRhLm1hcCgoZW50cnkpID0+ICh7XHJcbiAgICAgICAgaWQ6IGVudHJ5LmNhbGVuZGFyLFxyXG4gICAgICAgIHVzZXJEZWZhdWx0OiBlbnRyeS51c2VyRGVmYXVsdCxcclxuICAgICAgICB2aXNpYmlsaXR5OiBlbnRyeS52aXNpYmlsaXR5LFxyXG4gICAgICAgIGNvbG9yOiBlbnRyeS5jb2xvclxyXG4gICAgICB9KSk7XHJcblxyXG4gICAgICBodHRwUmVzcG9uc2UuZGF0YSA9IGZsYXR0ZW5lZENhbGVuZGFyU2V0dGluZ3M7XHJcblxyXG4gICAgICByZXR1cm4gaHR0cFJlc3BvbnNlO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVwZGF0ZVNoYXJlZENhbGVuZGFyU2V0dGluZ3MgPSBhc3luYyAodXNlcklkLCBjYWxlbmRhcklkLCB1c2VyRGVmYXVsdCAsdmlzaWJpbGl0eSwgY29sb3IsIGlzU2hhcmVkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kQnlJZCh1c2VySWQpO1xyXG4gICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENyZWF0ZSB0aGUgbmV3IGNhbGVuZGFyIHNldHRpbmcgdG8gYWRkIHRvIHRoZSB1c2VyJ3MgY2FsZW5kYXJTZXR0aW5nc1xyXG4gICAgICBjb25zdCBuZXdDYWxlbmRhclNldHRpbmcgPSB7XHJcbiAgICAgICAgY2FsZW5kYXI6IGNhbGVuZGFySWQsXHJcbiAgICAgICAgdXNlckRlZmF1bHQsXHJcbiAgICAgICAgdmlzaWJpbGl0eSxcclxuICAgICAgICBjb2xvcixcclxuICAgICAgICBpc1NoYXJlZDogdHJ1ZVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc29sZS5sb2cobmV3Q2FsZW5kYXJTZXR0aW5nKVxyXG4gICAgICAvLyBDaGVjayBpZiB0aGUgY2FsZW5kYXIgYWxyZWFkeSBleGlzdHMgaW4gdGhlIHVzZXIncyBzZXR0aW5nc1xyXG4gICAgICBjb25zdCBleGlzdGluZ0NhbGVuZGFyID0gdXNlci5jYWxlbmRhclNldHRpbmdzLmZpbmQoXHJcbiAgICAgICAgKGVudHJ5KSA9PiBlbnRyeS5jYWxlbmRhciA9PT0gY2FsZW5kYXJJZFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKCFleGlzdGluZ0NhbGVuZGFyKSB7XHJcbiAgICAgICAgdXNlci5jYWxlbmRhclNldHRpbmdzLnB1c2gobmV3Q2FsZW5kYXJTZXR0aW5nKTtcclxuICAgICAgICBhd2FpdCB1c2VyLnNhdmUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclNlcnZpY2U7XHJcbiIsImNsYXNzIEFwcGxpY2F0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xyXG4gICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICB0aGlzLm5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBEYXRhYmFzZUVycm9yIGV4dGVuZHMgQXBwbGljYXRpb25FcnJvciB7fVxyXG5cclxuY2xhc3MgVXNlckZhY2luZ0Vycm9yIGV4dGVuZHMgQXBwbGljYXRpb25FcnJvciB7fVxyXG5cclxuZXhwb3J0IHsgQXBwbGljYXRpb25FcnJvciwgRGF0YWJhc2VFcnJvciwgVXNlckZhY2luZ0Vycm9yIH07XHJcbiIsImltcG9ydCB7IERhdGFiYXNlRXJyb3IgfSBmcm9tICcuL2Jhc2VFcnJvcnMnO1xyXG5cclxuY2xhc3MgRHVwbGljYXRlS2V5RXJyb3IgZXh0ZW5kcyBEYXRhYmFzZUVycm9yIHtcclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBvcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG5cclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpKSB7XHJcbiAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHN0YXR1c0NvZGUoKSB7XHJcbiAgICByZXR1cm4gNDA5O1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1vbmdvRXJyb3JDb2RlKCkge1xyXG4gICAgcmV0dXJuIDExMDAwO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRHVwbGljYXRlS2V5RXJyb3IgfTtcclxuIiwiY29uc3QgZGVmYXVsdEV4Y2x1c2lvbnNGcm9tUmVzcG9uc2UgPSBbJ19fdicsICdwYXNzd29yZCddO1xyXG5cclxuY2xhc3MgSHR0cFJlc3BvbnNlIHtcclxuICBjb25zdHJ1Y3RvcihkYXRhLCBvcHRpb25zID0geyBzdGF0dXNDb2RlOiAyMDAsIGRlbGV0ZWQ6IG51bGwgfSkge1xyXG4gICAgdGhpcy5zdGF0dXNDb2RlID0gb3B0aW9ucy5zdGF0dXNDb2RlIHx8IDIwMDtcclxuICAgIGxldCBmaWx0ZXJlZERhdGEgPSBkYXRhO1xyXG5cclxuICAgIC8vIGhhbmRsZXMgSlMgYXJyYXlzIG9yIG9iamVjdHNcclxuICAgIGlmICh0eXBlb2YgZmlsdGVyZWREYXRhID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBmaWx0ZXJlZERhdGEgPSB0aGlzLmZpbHRlckRhdGEoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmaWx0ZXJlZERhdGEpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucy5kZWxldGVkKSB7XHJcbiAgICAgIHRoaXMuZGVsZXRlZCA9IG9wdGlvbnMuZGVsZXRlZDtcclxuICAgIH1cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGZpbHRlcmVkRGF0YSkpIHtcclxuICAgICAgdGhpcy5kYXRhID0gWy4uLmZpbHRlcmVkRGF0YV07XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaWx0ZXJlZERhdGEgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHRoaXMuZGF0YSA9IHsgLi4uZmlsdGVyZWREYXRhIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmlsdGVyRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xyXG4gICAgICBkYXRhLm1hcCgoeCwgaW5kZXgpID0+IHtcclxuICAgICAgICBPYmplY3Qua2V5cyh4KS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgIGlmIChkZWZhdWx0RXhjbHVzaW9uc0Zyb21SZXNwb25zZS5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhW2luZGV4XVtrZXldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGtleSA9PT0gJ19pZCcpIHtcclxuICAgICAgICAgICAgZGF0YVtpbmRleF1bJ2lkJ10gPSBkYXRhW2luZGV4XVtrZXldO1xyXG4gICAgICAgICAgICBkZWxldGUgZGF0YVtpbmRleF1ba2V5XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIGhhbmRsZSBuZXN0ZWQgcHJvcGVydGllcyByZWN1cnNpdmVseVxyXG4gICAgICAgICAgaWYgKGtleSA9PT0gJ2NhbGVuZGFyU2V0dGluZ3MnIHx8IGtleSA9PT0gJ2NhbGVuZGFyJyB8fCBrZXkgPT09ICdyb2xlcycpIHtcclxuICAgICAgICAgICAgZGF0YVtpbmRleF1ba2V5XSA9IHRoaXMuZmlsdGVyRGF0YShkYXRhW2luZGV4XVtrZXldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICBpZiAoZGVmYXVsdEV4Y2x1c2lvbnNGcm9tUmVzcG9uc2UuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ19pZCcpIHtcclxuICAgICAgICAgIGRhdGFbJ2lkJ10gPSBkYXRhW2tleV07XHJcbiAgICAgICAgICBkZWxldGUgZGF0YVtrZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBoYW5kbGUgbmVzdGVkIHByb3BlcnRpZXMgcmVjdXJzaXZlbHlcclxuICAgICAgICBpZiAoa2V5ID09PSAnY2FsZW5kYXJTZXR0aW5ncycgfHwga2V5ID09PSAnY2FsZW5kYXInIHx8IGtleSA9PT0gJ3JvbGVzJykge1xyXG4gICAgICAgICAgZGF0YVtrZXldID0gdGhpcy5maWx0ZXJEYXRhKGRhdGFba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEh0dHBSZXNwb25zZTtcclxuIiwiaW1wb3J0IHsgVXNlckZhY2luZ0Vycm9yIH0gZnJvbSAnLi9iYXNlRXJyb3JzJztcclxuXHJcbmNsYXNzIEJhZFJlcXVlc3RFcnJvciBleHRlbmRzIFVzZXJGYWNpbmdFcnJvciB7XHJcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihtZXNzYWdlKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zKSkge1xyXG4gICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBzdGF0dXNDb2RlKCkge1xyXG4gICAgcmV0dXJuIDQwMDtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIE5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBVc2VyRmFjaW5nRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIobWVzc2FnZSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucykpIHtcclxuICAgICAgdGhpc1trZXldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgc3RhdHVzQ29kZSgpIHtcclxuICAgIHJldHVybiA0MDQ7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBBdXRob3JpemF0aW9uRXJyb3IgZXh0ZW5kcyBVc2VyRmFjaW5nRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIobWVzc2FnZSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucykpIHtcclxuICAgICAgdGhpc1trZXldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgc3RhdHVzQ29kZSgpIHtcclxuICAgIHJldHVybiA0MDE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBCYWRSZXF1ZXN0RXJyb3IsIE5vdEZvdW5kRXJyb3IsIEF1dGhvcml6YXRpb25FcnJvciB9O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGNhY2hlZE1vZHVsZS5lcnJvciAhPT0gdW5kZWZpbmVkKSB0aHJvdyBjYWNoZWRNb2R1bGUuZXJyb3I7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdHRyeSB7XG5cdFx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uaS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHsgaGFuZGxlcihleGVjT3B0aW9ucyk7IH0pO1xuXHRcdG1vZHVsZSA9IGV4ZWNPcHRpb25zLm1vZHVsZTtcblx0XHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuXHR9IGNhdGNoKGUpIHtcblx0XHRtb2R1bGUuZXJyb3IgPSBlO1xuXHRcdHRocm93IGU7XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0b3Jcbl9fd2VicGFja19yZXF1aXJlX18uaSA9IFtdO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uaHUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGID0gKCkgPT4gKFwibWFpbi5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc29uXCIpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk3ZjkzYmU0OGI2NjMzMzllYTc3XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBjdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xudmFyIGluc3RhbGxlZE1vZHVsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmM7XG5cbi8vIG1vZHVsZSBhbmQgcmVxdWlyZSBjcmVhdGlvblxudmFyIGN1cnJlbnRDaGlsZE1vZHVsZTtcbnZhciBjdXJyZW50UGFyZW50cyA9IFtdO1xuXG4vLyBzdGF0dXNcbnZhciByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMgPSBbXTtcbnZhciBjdXJyZW50U3RhdHVzID0gXCJpZGxlXCI7XG5cbi8vIHdoaWxlIGRvd25sb2FkaW5nXG52YXIgYmxvY2tpbmdQcm9taXNlcyA9IDA7XG52YXIgYmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblxuLy8gVGhlIHVwZGF0ZSBpbmZvXG52YXIgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnM7XG52YXIgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckQgPSBjdXJyZW50TW9kdWxlRGF0YTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5pLnB1c2goZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0dmFyIG1vZHVsZSA9IG9wdGlvbnMubW9kdWxlO1xuXHR2YXIgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUob3B0aW9ucy5yZXF1aXJlLCBvcHRpb25zLmlkKTtcblx0bW9kdWxlLmhvdCA9IGNyZWF0ZU1vZHVsZUhvdE9iamVjdChvcHRpb25zLmlkLCBtb2R1bGUpO1xuXHRtb2R1bGUucGFyZW50cyA9IGN1cnJlbnRQYXJlbnRzO1xuXHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0b3B0aW9ucy5yZXF1aXJlID0gcmVxdWlyZTtcbn0pO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1ySSA9IHt9O1xuXG5mdW5jdGlvbiBjcmVhdGVSZXF1aXJlKHJlcXVpcmUsIG1vZHVsZUlkKSB7XG5cdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXHRpZiAoIW1lKSByZXR1cm4gcmVxdWlyZTtcblx0dmFyIGZuID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcblx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuXHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcblx0XHRcdFx0dmFyIHBhcmVudHMgPSBpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHM7XG5cdFx0XHRcdGlmIChwYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuXHRcdFx0XHRcdHBhcmVudHMucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcblx0XHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcblx0XHRcdH1cblx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuXHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcblx0XHRcdFx0XHRyZXF1ZXN0ICtcblx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuXHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHQpO1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcXVpcmUocmVxdWVzdCk7XG5cdH07XG5cdHZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiByZXF1aXJlW25hbWVdO1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJlcXVpcmVbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXHRmb3IgKHZhciBuYW1lIGluIHJlcXVpcmUpIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlcXVpcmUsIG5hbWUpICYmIG5hbWUgIT09IFwiZVwiKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcihuYW1lKSk7XG5cdFx0fVxuXHR9XG5cdGZuLmUgPSBmdW5jdGlvbiAoY2h1bmtJZCwgZmV0Y2hQcmlvcml0eSkge1xuXHRcdHJldHVybiB0cmFja0Jsb2NraW5nUHJvbWlzZShyZXF1aXJlLmUoY2h1bmtJZCwgZmV0Y2hQcmlvcml0eSkpO1xuXHR9O1xuXHRyZXR1cm4gZm47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZHVsZUhvdE9iamVjdChtb2R1bGVJZCwgbWUpIHtcblx0dmFyIF9tYWluID0gY3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZDtcblx0dmFyIGhvdCA9IHtcblx0XHQvLyBwcml2YXRlIHN0dWZmXG5cdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfYWNjZXB0ZWRFcnJvckhhbmRsZXJzOiB7fSxcblx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuXHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuXHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuXHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuXHRcdF9tYWluOiBfbWFpbixcblx0XHRfcmVxdWlyZVNlbGY6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gbWUucGFyZW50cy5zbGljZSgpO1xuXHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gX21haW4gPyB1bmRlZmluZWQgOiBtb2R1bGVJZDtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuXHRcdH0sXG5cblx0XHQvLyBNb2R1bGUgQVBJXG5cdFx0YWN0aXZlOiB0cnVlLFxuXHRcdGFjY2VwdDogZnVuY3Rpb24gKGRlcCwgY2FsbGJhY2ssIGVycm9ySGFuZGxlcikge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBbaV1dID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRlY2xpbmU6IGZ1bmN0aW9uIChkZXApIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG5cdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG5cdFx0fSxcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcblx0XHRcdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcblx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG5cdFx0XHRcdFx0KHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChcblx0XHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBpZ25vcmUgcmVxdWVzdHMgaW4gZXJyb3Igc3RhdGVzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIE1hbmFnZW1lbnQgQVBJXG5cdFx0Y2hlY2s6IGhvdENoZWNrLFxuXHRcdGFwcGx5OiBob3RBcHBseSxcblx0XHRzdGF0dXM6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRpZiAoIWwpIHJldHVybiBjdXJyZW50U3RhdHVzO1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0dmFyIGlkeCA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblxuXHRcdC8vIGluaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcblx0XHRkYXRhOiBjdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cblx0fTtcblx0Y3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuXHRyZXR1cm4gaG90O1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XG5cdGN1cnJlbnRTdGF0dXMgPSBuZXdTdGF0dXM7XG5cdHZhciByZXN1bHRzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG5cdFx0cmVzdWx0c1tpXSA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xufVxuXG5mdW5jdGlvbiB1bmJsb2NrKCkge1xuXHRpZiAoLS1ibG9ja2luZ1Byb21pc2VzID09PSAwKSB7XG5cdFx0c2V0U3RhdHVzKFwicmVhZHlcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuXHRcdFx0XHR2YXIgbGlzdCA9IGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nO1xuXHRcdFx0XHRibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsaXN0W2ldKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiB0cmFja0Jsb2NraW5nUHJvbWlzZShwcm9taXNlKSB7XG5cdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcblx0XHQvKiBmYWxsdGhyb3VnaCAqL1xuXHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRibG9ja2luZ1Byb21pc2VzKys7XG5cdFx0XHRwcm9taXNlLnRoZW4odW5ibG9jaywgdW5ibG9jayk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pIHtcblx0aWYgKGJsb2NraW5nUHJvbWlzZXMgPT09IDApIHJldHVybiBmbigpO1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcblx0XHRibG9ja2luZ1Byb21pc2VzV2FpdGluZy5wdXNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlc29sdmUoZm4oKSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBob3RDaGVjayhhcHBseU9uVXBkYXRlKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcImlkbGVcIikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuXHR9XG5cdHJldHVybiBzZXRTdGF0dXMoXCJjaGVja1wiKVxuXHRcdC50aGVuKF9fd2VicGFja19yZXF1aXJlX18uaG1yTSlcblx0XHQudGhlbihmdW5jdGlvbiAodXBkYXRlKSB7XG5cdFx0XHRpZiAoIXVwZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIikudGhlbihcblx0XHRcdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJwcmVwYXJlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgdXBkYXRlZE1vZHVsZXMgPSBbXTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDKS5yZWR1Y2UoZnVuY3Rpb24gKFxuXHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRrZXlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQ1trZXldKFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUuYyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlLnIsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5tLFxuXHRcdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZWRNb2R1bGVzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByb21pc2VzO1xuXHRcdFx0XHRcdH0sIFtdKVxuXHRcdFx0XHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHJldHVybiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRpZiAoYXBwbHlPblVwZGF0ZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShhcHBseU9uVXBkYXRlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHVwZGF0ZWRNb2R1bGVzO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwicmVhZHlcIikge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXMgKHN0YXRlOiBcIiArXG5cdFx0XHRcdFx0Y3VycmVudFN0YXR1cyArXG5cdFx0XHRcdFx0XCIpXCJcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiYWJvcnRcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0dmFyIGRpc3Bvc2VQcm9taXNlID0gc2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHR2YXIgYXBwbHlQcm9taXNlID0gc2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cblx0dmFyIGVycm9yO1xuXHR2YXIgcmVwb3J0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG5cdH07XG5cblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuYXBwbHkpIHtcblx0XHRcdHZhciBtb2R1bGVzID0gcmVzdWx0LmFwcGx5KHJlcG9ydEVycm9yKTtcblx0XHRcdGlmIChtb2R1bGVzKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKG1vZHVsZXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoW2Rpc3Bvc2VQcm9taXNlLCBhcHBseVByb21pc2VdKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcImZhaWxcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJpZGxlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4vLyBcIjFcIiBtZWFucyBcImxvYWRlZFwiLCBvdGhlcndpc2Ugbm90IGxvYWRlZCB5ZXRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfcmVxdWlyZSA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19yZXF1aXJlIHx8IHtcblx0XCJtYWluXCI6IDFcbn07XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8gY2h1bmsgaW5zdGFsbCBmdW5jdGlvbiBuZWVkZWRcblxuLy8gbm8gY2h1bmsgbG9hZGluZ1xuXG4vLyBubyBleHRlcm5hbCBpbnN0YWxsIGNodW5rXG5cbmZ1bmN0aW9uIGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpIHtcblx0dmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIuL1wiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5odShjaHVua0lkKSk7XG5cdHZhciB1cGRhdGVkTW9kdWxlcyA9IHVwZGF0ZS5tb2R1bGVzO1xuXHR2YXIgcnVudGltZSA9IHVwZGF0ZS5ydW50aW1lO1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIHVwZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKHVwZGF0ZWRNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gdXBkYXRlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0aWYodXBkYXRlZE1vZHVsZXNMaXN0KSB1cGRhdGVkTW9kdWxlc0xpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIGN1cnJlbnRVcGRhdGVSdW50aW1lLnB1c2gocnVudGltZSk7XG59XG5cbnZhciBjdXJyZW50VXBkYXRlQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGU7XG52YXIgY3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZVJ1bnRpbWU7XG5mdW5jdGlvbiBhcHBseUhhbmRsZXIob3B0aW9ucykge1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSBkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5mLnJlcXVpcmVIbXI7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB1bmRlZmluZWQ7XG5cdGZ1bmN0aW9uIGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyh1cGRhdGVNb2R1bGVJZCkge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG5cdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoYWluOiBbaWRdLFxuXHRcdFx0XHRpZDogaWRcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcblx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcblx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhbW9kdWxlIHx8XG5cdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcblx0XHRcdClcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW3BhcmVudElkXTtcblx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcblx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuXHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG5cdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG5cdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0aWQ6IHBhcmVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG5cdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG5cdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcblx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGJbaV07XG5cdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG5cdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cblx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuXHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKG1vZHVsZSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgbW9kdWxlLmlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG5cdFx0KTtcblx0fTtcblxuXHRmb3IgKHZhciBtb2R1bGVJZCBpbiBjdXJyZW50VXBkYXRlKSB7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRcdHZhciBuZXdNb2R1bGVGYWN0b3J5ID0gY3VycmVudFVwZGF0ZVttb2R1bGVJZF07XG5cdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG5cdFx0XHR2YXIgcmVzdWx0ID0gbmV3TW9kdWxlRmFjdG9yeVxuXHRcdFx0XHQ/IGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyhtb2R1bGVJZClcblx0XHRcdFx0OiB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cblx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuXHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG5cdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG5cdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcblx0XHRcdH1cblx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXJyb3I6IGFib3J0RXJyb3Jcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChkb0FwcGx5KSB7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gbmV3TW9kdWxlRmFjdG9yeTtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcblx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG5cdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuXHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGN1cnJlbnRVcGRhdGUgPSB1bmRlZmluZWQ7XG5cblx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuXHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG5cdGZvciAodmFyIGogPSAwOyBqIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbal07XG5cdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRpZiAoXG5cdFx0XHRtb2R1bGUgJiZcblx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgfHwgbW9kdWxlLmhvdC5fbWFpbikgJiZcblx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcblx0XHRcdGFwcGxpZWRVcGRhdGVbb3V0ZGF0ZWRNb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuXHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcblx0XHRcdCFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWRcblx0XHQpIHtcblx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcblx0XHRcdFx0bW9kdWxlOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRyZXF1aXJlOiBtb2R1bGUuaG90Ll9yZXF1aXJlU2VsZixcblx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWRcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcblxuXHRyZXR1cm4ge1xuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdH0pO1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHZhciBpZHg7XG5cdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcblx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdHZhciBkYXRhID0ge307XG5cblx0XHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG5cdFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRkaXNwb3NlSGFuZGxlcnNbal0uY2FsbChudWxsLCBkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckRbbW9kdWxlSWRdID0gZGF0YTtcblxuXHRcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuXHRcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuXHRcdFx0XHRkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuXHRcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG5cdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuXHRcdFx0dmFyIGRlcGVuZGVuY3k7XG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0bW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhcHBseTogZnVuY3Rpb24gKHJlcG9ydEVycm9yKSB7XG5cdFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcblx0XHRcdGZvciAodmFyIHVwZGF0ZU1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhhcHBsaWVkVXBkYXRlLCB1cGRhdGVNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bdXBkYXRlTW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVt1cGRhdGVNb2R1bGVJZF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcnVuIG5ldyBydW50aW1lIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFVwZGF0ZVJ1bnRpbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWVbaV0oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFjY2VwdENhbGxiYWNrID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlciA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHRpZiAoYWNjZXB0Q2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoYWNjZXB0Q2FsbGJhY2spICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goYWNjZXB0Q2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnMucHVzaChlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcy5wdXNoKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGNhbGxiYWNrcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBlcnJvckhhbmRsZXJzW2tdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnNba10oZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba11cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgbyA9IDA7IG8gPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBvKyspIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbb107XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGl0ZW0ucmVxdWlyZShtb2R1bGVJZCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjEpIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIxLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIxKTtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH1cblx0fTtcbn1cbl9fd2VicGFja19yZXF1aXJlX18uaG1ySS5yZXF1aXJlID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBhcHBseUhhbmRsZXJzKSB7XG5cdGlmICghY3VycmVudFVwZGF0ZSkge1xuXHRcdGN1cnJlbnRVcGRhdGUgPSB7fTtcblx0XHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gW107XG5cdFx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdH1cblx0aWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdO1xuXHR9XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLnJlcXVpcmUgPSBmdW5jdGlvbiAoXG5cdGNodW5rSWRzLFxuXHRyZW1vdmVkQ2h1bmtzLFxuXHRyZW1vdmVkTW9kdWxlcyxcblx0cHJvbWlzZXMsXG5cdGFwcGx5SGFuZGxlcnMsXG5cdHVwZGF0ZWRNb2R1bGVzTGlzdFxuKSB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0ge307XG5cdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gcmVtb3ZlZENodW5rcztcblx0Y3VycmVudFVwZGF0ZSA9IHJlbW92ZWRNb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcblx0XHRvYmpba2V5XSA9IGZhbHNlO1xuXHRcdHJldHVybiBvYmo7XG5cdH0sIHt9KTtcblx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0Y2h1bmtJZHMuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdGlmIChcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdCkge1xuXHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IGZhbHNlO1xuXHRcdH1cblx0fSk7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmYucmVxdWlyZUhtciA9IGZ1bmN0aW9uIChjaHVua0lkLCBwcm9taXNlcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzICYmXG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHQhY3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXVxuXHRcdFx0KSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpKTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiByZXF1aXJlKFwiLi9cIiArIF9fd2VicGFja19yZXF1aXJlX18uaG1yRigpKTtcblx0fSlbJ2NhdGNoJ10oZnVuY3Rpb24oZXJyKSB7IGlmKGVyci5jb2RlICE9PSAnTU9EVUxFX05PVF9GT1VORCcpIHRocm93IGVycjsgfSk7XG59IiwiIiwiLy8gbW9kdWxlIGNhY2hlIGFyZSB1c2VkIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc2VydmVyLWRldi5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJ1c2VyQ29sb3JzIiwic3lzdGVtQ29sb3JzIiwiYmFzZVVSTCIsImRlZmF1bHRWaWV3IiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX25leHQiLCJfdGhyb3ciLCJfZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJDYWxlbmRhclNlcnZpY2UiLCJVc2VyU2VydmljZSIsImRiIiwiY2FsZW5kYXJTZXJ2aWNlIiwiQ2FsZW5kYXIiLCJVc2VyIiwidXNlclNlcnZpY2UiLCJDYWxlbmRhckNvbnRyb2xsZXIiLCJzZXJ2aWNlIiwiX3RoaXMiLCJfcmVmIiwiX2NhbGxlZSIsInJlcSIsInJlcyIsImRhdGEiLCJ1c2VyUmVzcG9uc2UiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiYm9keSIsInVzZXJfaWQiLCJhdXRoIiwidXNlciIsImdldE9uZSIsInN0YXR1cyIsInNlbmQiLCJjYWxlbmRhclNldHRpbmdzIiwidDAiLCJfeCIsIl94MiIsIl94MyIsIl9yZWYyIiwiX2NhbGxlZTIiLCJyZXNwb25zZSIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInVwZGF0ZSIsInBhcmFtcyIsImNhbGVuZGFySWQiLCJzdGF0dXNDb2RlIiwiX3g0IiwiX3g1IiwiX3g2IiwiX3JlZjMiLCJfY2FsbGVlMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsInVwZGF0ZUNhbGVuZGFyU2V0dGluZ3MiLCJfeDciLCJfeDgiLCJfeDkiLCJfcmVmNCIsIl9jYWxsZWU0IiwidGFyZ2V0Q2FsZW5kYXJTZXR0aW5ncyIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImVudHJ5IiwiaWQiLCJ1c2VyRGVmYXVsdCIsIm1lc3NhZ2UiLCJlcnJvckNvZGUiLCJfeDEwIiwiX3gxMSIsIl94MTIiLCJfcmVmNSIsIl9jYWxsZWU1IiwiX3JlcSRib2R5IiwidXNlcklkIiwidmlzaWJpbGl0eSIsImNvbG9yIiwiaXNTaGFyZWQiLCJjYWxlbmRhciIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsInNoYXJlQ2FsZW5kYXIiLCJ1cGRhdGVTaGFyZWRDYWxlbmRhclNldHRpbmdzIiwiX3gxMyIsIl94MTQiLCJfeDE1IiwiRXZlbnRTZXJ2aWNlIiwiZXZlbnRTZXJ2aWNlIiwiRXZlbnQiLCJFdmVudENvbnRyb2xsZXIiLCJjYWxlbmRhcnMiLCJjYWxlbmRhcklkcyIsImdldFVzZXJDYWxlbmRhcnMiLCJOb3RGb3VuZEVycm9yIiwibWFwIiwiZ2V0VXNlckV2ZW50cyIsImV2ZW50SWQiLCJqd3QiLCJhdXRoSnd0IiwiUmVmcmVzaFRva2VuIiwiUm9sZSIsIlVzZXJDb250cm9sbGVyIiwiX3JlcSRib2R5JHJvbGVzIiwicm9sZU5hbWVzIiwicm9sZXMiLCJhc3NpZ25Sb2xlcyIsImxvZ2luUmVzcG9uc2UiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJhY2Nlc3NUb2tlbiIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUX0tFWSIsImRlY29kZWQiLCJjYXRjaFRva2VuRXJyb3IiLCJyZXF1ZXN0VG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJyZWRpcmVjdCIsIl9yZWY2IiwiX2NhbGxlZTYiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJnZXRBbGxVc2VybmFtZXMiLCJfeDE2IiwiX3gxNyIsIlJvbGVTZXJ2aWNlIiwiTU9OR09fSE9TVE5BTUUiLCJNT05HT19QT1JUIiwiTU9OR09fREIiLCJNT05HT19VU0VSTkFNRSIsIk1PTkdPX1BBU1NXT1JEIiwiTU9OR09fVVJMIiwiY29uY2F0IiwiY29uc29sZSIsImxvZyIsIm1vbmdvb3NlIiwicm9sZVNlcnZpY2UiLCJpbml0aWFsaXplUm9sZXMiLCJjb3VudCIsImNvdW50RG9jdW1lbnRzIiwiaW5pdGlhbGl6ZUNhbGVuZGFycyIsImNvbm5lY3QiLCJlcnJvciIsImV4aXQiLCJUb2tlbkV4cGlyZWRFcnJvciIsInNlbmRTdGF0dXMiLCJ2ZXJpZnlUb2tlbiIsInRva2VuIiwiaGVhZGVycyIsInZlcmlmeVVSSUF1dGgiLCJ1cmwiLCJfY2FsZW5kYXIiLCJldmVudCIsIl9jYWxlbmRhcjIiLCJiYXNlVXJsIiwicm91dGUiLCJwYXRoIiwic2hhcmVkX3dpdGgiLCJpbmNsdWRlcyIsImZpbmRPbmUiLCJfaWQiLCIkZXEiLCJpc0FkbWluIiwiZmluZEJ5SWQiLCJleGVjIiwiZmluZCIsIiRpbiIsImlzTW9kZXJhdG9yIiwidmVyaWZ5UmVnaXN0cmF0aW9uIiwiQmFkUmVxdWVzdEVycm9yIiwiY2hlY2tEdXBsaWNhdGVVc2VybmFtZSIsImZpbmRCeVVzZXJuYW1lIiwiY2hlY2tSb2xlc0V4aXN0IiwiRHVwbGljYXRlS2V5RXJyb3IiLCJzY2hlbWEiLCJTY2hlbWEiLCJyZXF1aXJlZCIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJwcmUiLCJ3YXNOZXciLCJpc05ldyIsImhhbmRsZUUxMTAwMCIsImNvZGUiLCJwb3N0Iiwic3lzdGVtQ2FsZW5kYXJzQ291bnQiLCJzZXR0aW5ncyIsInVzZXJDYWxlbmRhcnNDb3VudCIsIl9zZXR0aW5ncyIsInVwZGF0ZU1hbnkiLCIkcHVzaCIsIkRhdGFiYXNlRXJyb3IiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsImRvYyIsIiRwdWxsIiwidXBkYXRlT25lIiwiaW5kZXgiLCJ1bmlxdWUiLCJtb2RlbCIsInRpdGxlIiwiZGVzYyIsInN0YXJ0IiwiZW5kIiwiYWxsRGF5IiwiQm9vbGVhbiIsInRpbWVab25lIiwiZXhwaXJ5RGF0ZSIsInN0YXRpY3MiLCJ2ZXJpZnlFeHBpcmF0aW9uIiwiZXhwaXJ5RGF0ZU9iaiIsIkRhdGUiLCJnZXRUaW1lIiwiYmNyeXB0IiwiU0FMVF9XT1JLX0ZBQ1RPUiIsIm1pbkxlbmd0aCIsInNhbHQiLCJpc01vZGlmaWVkIiwiZ2VuU2FsdCIsImhhc2giLCJzeXN0ZW1DYWxzIiwiZGVmYXVsdENhbCIsIm5ld0RlZmF1bHRDYWwiLCJjYWwiLCJpZHgiLCJzYXZlIiwibWV0aG9kcyIsInZhbGlkYXRlUGFzc3dvcmQiLCJfdmFsaWRhdGVQYXNzd29yZCIsImNhbmRpZGF0ZVBhc3N3b3JkIiwiY29tcGFyZSIsImV4cHJlc3MiLCJyb3V0ZXIiLCJSb3V0ZXIiLCJwdXQiLCJ1cGRhdGVTZXR0aW5ncyIsImdldCIsInVzZXJSb3V0ZXIiLCJjYWxlbmRhclJvdXRlciIsImV2ZW50Um91dGVyIiwidXNlIiwicmVnaXN0ZXIiLCJnZXRVc2VycyIsImNvcnMiLCJVc2VyRmFjaW5nRXJyb3IiLCJCVUlMRF9ESVIiLCJfX2Rpcm5hbWUiLCJIVE1MX0ZJTEUiLCJQT1JUIiwiYXBwIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInNlbmRGaWxlIiwiZXJyIiwiX2VyciRtZXNzYWdlIiwiaGVhZGVyIiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiX3NsaWNlZFRvQXJyYXkiLCJsaXN0ZW4iLCJIdHRwUmVzcG9uc2UiLCJfb2JqIiwicmVzdWx0IiwiJG9yIiwiZmluZEJ5SWRBbmREZWxldGUiLCJkZWxldGVkIiwiZXZlbnRzIiwidjQiLCJ1dWlkdjQiLCJBdXRob3JpemF0aW9uRXJyb3IiLCJSZWZyZXNoVG9rZW5TZXJ2aWNlIiwiZXhwaXJlZEF0IiwiX3Rva2VuIiwic2V0U2Vjb25kcyIsImdldFNlY29uZHMiLCJKV1RfUkVGUkVTSF9FWFBJUkFUSU9OIiwidG9JU09TdHJpbmciLCJmaW5kQnlJZEFuZFJlbW92ZSIsInVzZUZpbmRBbmRNb2RpZnkiLCJyb2xlIiwicmVmcmVzaFRva2VuTW9kZWwiLCJyb2xlTW9kZWwiLCJ2YWxpZGF0ZWQiLCJyZWZyZXNoVG9rZW5SZXNwb25zZSIsInNpZ24iLCJleHBpcmVzSW4iLCJKV1RfRVhQSVJBVElPTiIsInJlZnJlc2hUb2tlblNlcnZpY2UiLCJodHRwUmVzcG9uc2UiLCJmbGF0dGVuZWRDYWxlbmRhclNldHRpbmdzIiwicG9wdWxhdGUiLCJzaGFyZWRXaXRoIiwidXNlcnMiLCIkbmUiLCJfcmVmNyIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwibmV3UGFzc3dvcmQiLCJfcmVmOCIsIl9jYWxsZWU4IiwiY2FsZW5kYXJTZXR0aW5nc0tleXMiLCJkaWZmZWREYXRhIiwiX2NhbGxlZTgkIiwiX2NvbnRleHQ4IiwidHJlZSIsInVuZGVmaW5lZCIsImZpbmRPbmVBbmRVcGRhdGUiLCIkc2V0IiwiYXJyYXlGaWx0ZXJzIiwiX3JlZjkiLCJfY2FsbGVlOSIsIm5ld0NhbGVuZGFyU2V0dGluZyIsImV4aXN0aW5nQ2FsZW5kYXIiLCJfY2FsbGVlOSQiLCJfY29udGV4dDkiLCJfeDE4IiwiQXBwbGljYXRpb25FcnJvciIsIl9FcnJvciIsIl9jYWxsU3VwZXIiLCJfaW5oZXJpdHMiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiX0FwcGxpY2F0aW9uRXJyb3IiLCJfQXBwbGljYXRpb25FcnJvcjIiLCJfRGF0YWJhc2VFcnJvciIsIm9wdGlvbnMiLCJkZWZhdWx0RXhjbHVzaW9uc0Zyb21SZXNwb25zZSIsIkFycmF5IiwiaXNBcnJheSIsIngiLCJmaWx0ZXJEYXRhIiwiZmlsdGVyZWREYXRhIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX1VzZXJGYWNpbmdFcnJvciIsIl9Vc2VyRmFjaW5nRXJyb3IyIiwiX3RoaXMyIiwiX2kyIiwiX09iamVjdCRlbnRyaWVzMiIsIl9PYmplY3QkZW50cmllczIkX2kiLCJfVXNlckZhY2luZ0Vycm9yMyIsIl90aGlzMyIsIl9pMyIsIl9PYmplY3QkZW50cmllczMiLCJfT2JqZWN0JGVudHJpZXMzJF9pIl0sInNvdXJjZVJvb3QiOiIifQ==