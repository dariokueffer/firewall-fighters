/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./config/appConfig.js":
/*!*****************************!*\
  !*** ./config/appConfig.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
  }],
  notifications: [{
    type: {
      type: String,
      // e.g., 'info', 'warning', 'error'
      required: true
    },
    message: {
      type: String,
      required: true
    },
    read: {
      type: Boolean,
      "default": false
    },
    timestamp: {
      type: Date,
      "default": Date.now
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "./node_modules/dotenv/lib/main.js");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _db_connection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./db/connection.js */ "./db/connection.js");
/* harmony import */ var _routers_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routers/index.js */ "./routers/index.js");
/* harmony import */ var _utils_baseErrors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/baseErrors.js */ "./utils/baseErrors.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

console.log("DOTENV_CONFIG_PATH: ".concat(".env.dev"));
dotenv__WEBPACK_IMPORTED_MODULE_0___default().config({
  path: ".env.dev" || 0
});






var BUILD_DIR = __dirname;
var HTML_FILE = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(BUILD_DIR, 'index.html');
var PORT = "5001" || 0;
var app = express__WEBPACK_IMPORTED_MODULE_2___default()();
app.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());

// support data from POST requests
app.use(express__WEBPACK_IMPORTED_MODULE_2___default().json());
app.use(express__WEBPACK_IMPORTED_MODULE_2___default().urlencoded({
  extended: false
}));

// serve static files
app.use(express__WEBPACK_IMPORTED_MODULE_2___default()["static"](BUILD_DIR));

// Use API routes
app.use('/api/v1', _routers_index_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
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
  if (err instanceof _utils_baseErrors_js__WEBPACK_IMPORTED_MODULE_6__.UserFacingError || err instanceof _utils_baseErrors_js__WEBPACK_IMPORTED_MODULE_6__.DatabaseError) {
    for (var _i = 0, _Object$entries = Object.entries(err); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      response[key] = value;
    }
  }
  res.status(status).send(response);
});
console.log("PORT: ".concat("5001"));
app.listen(PORT, function () {
  console.log("server started at http://localhost:".concat(PORT));
});

/***/ }),

/***/ "./services/CalendarService.js":
/*!*************************************!*\
  !*** ./services/CalendarService.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
              _context9.next = 13;
              break;
            }
            user.calendarSettings.push(newCalendarSetting);
            user.notifications.push({
              type: 'info',
              message: "A new shared calendar with ID ".concat(calendarId, " has been added."),
              read: false,
              timestamp: new Date()
            });
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/dotenv/lib/main.js":
/*!*****************************************!*\
  !*** ./node_modules/dotenv/lib/main.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const fs = __webpack_require__(/*! fs */ "fs")
const path = __webpack_require__(/*! path */ "path")
const os = __webpack_require__(/*! os */ "os")
const crypto = __webpack_require__(/*! crypto */ "crypto")
const packageJson = __webpack_require__(/*! ../package.json */ "./node_modules/dotenv/package.json")

const version = packageJson.version

const LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg

// Parse src into an Object
function parse (src) {
  const obj = {}

  // Convert buffer to string
  let lines = src.toString()

  // Convert line breaks to same format
  lines = lines.replace(/\r\n?/mg, '\n')

  let match
  while ((match = LINE.exec(lines)) != null) {
    const key = match[1]

    // Default undefined or null to empty string
    let value = (match[2] || '')

    // Remove whitespace
    value = value.trim()

    // Check if double quoted
    const maybeQuote = value[0]

    // Remove surrounding quotes
    value = value.replace(/^(['"`])([\s\S]*)\1$/mg, '$2')

    // Expand newlines if double quoted
    if (maybeQuote === '"') {
      value = value.replace(/\\n/g, '\n')
      value = value.replace(/\\r/g, '\r')
    }

    // Add to object
    obj[key] = value
  }

  return obj
}

function _parseVault (options) {
  const vaultPath = _vaultPath(options)

  // Parse .env.vault
  const result = DotenvModule.configDotenv({ path: vaultPath })
  if (!result.parsed) {
    const err = new Error(`MISSING_DATA: Cannot parse ${vaultPath} for an unknown reason`)
    err.code = 'MISSING_DATA'
    throw err
  }

  // handle scenario for comma separated keys - for use with key rotation
  // example: DOTENV_KEY="dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=prod,dotenv://:key_7890@dotenvx.com/vault/.env.vault?environment=prod"
  const keys = _dotenvKey(options).split(',')
  const length = keys.length

  let decrypted
  for (let i = 0; i < length; i++) {
    try {
      // Get full key
      const key = keys[i].trim()

      // Get instructions for decrypt
      const attrs = _instructions(result, key)

      // Decrypt
      decrypted = DotenvModule.decrypt(attrs.ciphertext, attrs.key)

      break
    } catch (error) {
      // last key
      if (i + 1 >= length) {
        throw error
      }
      // try next key
    }
  }

  // Parse decrypted .env string
  return DotenvModule.parse(decrypted)
}

function _log (message) {
  console.log(`[dotenv@${version}][INFO] ${message}`)
}

function _warn (message) {
  console.log(`[dotenv@${version}][WARN] ${message}`)
}

function _debug (message) {
  console.log(`[dotenv@${version}][DEBUG] ${message}`)
}

function _dotenvKey (options) {
  // prioritize developer directly setting options.DOTENV_KEY
  if (options && options.DOTENV_KEY && options.DOTENV_KEY.length > 0) {
    return options.DOTENV_KEY
  }

  // secondary infra already contains a DOTENV_KEY environment variable
  if (process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0) {
    return process.env.DOTENV_KEY
  }

  // fallback to empty string
  return ''
}

function _instructions (result, dotenvKey) {
  // Parse DOTENV_KEY. Format is a URI
  let uri
  try {
    uri = new URL(dotenvKey)
  } catch (error) {
    if (error.code === 'ERR_INVALID_URL') {
      const err = new Error('INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development')
      err.code = 'INVALID_DOTENV_KEY'
      throw err
    }

    throw error
  }

  // Get decrypt key
  const key = uri.password
  if (!key) {
    const err = new Error('INVALID_DOTENV_KEY: Missing key part')
    err.code = 'INVALID_DOTENV_KEY'
    throw err
  }

  // Get environment
  const environment = uri.searchParams.get('environment')
  if (!environment) {
    const err = new Error('INVALID_DOTENV_KEY: Missing environment part')
    err.code = 'INVALID_DOTENV_KEY'
    throw err
  }

  // Get ciphertext payload
  const environmentKey = `DOTENV_VAULT_${environment.toUpperCase()}`
  const ciphertext = result.parsed[environmentKey] // DOTENV_VAULT_PRODUCTION
  if (!ciphertext) {
    const err = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${environmentKey} in your .env.vault file.`)
    err.code = 'NOT_FOUND_DOTENV_ENVIRONMENT'
    throw err
  }

  return { ciphertext, key }
}

function _vaultPath (options) {
  let possibleVaultPath = null

  if (options && options.path && options.path.length > 0) {
    if (Array.isArray(options.path)) {
      for (const filepath of options.path) {
        if (fs.existsSync(filepath)) {
          possibleVaultPath = filepath.endsWith('.vault') ? filepath : `${filepath}.vault`
        }
      }
    } else {
      possibleVaultPath = options.path.endsWith('.vault') ? options.path : `${options.path}.vault`
    }
  } else {
    possibleVaultPath = path.resolve(process.cwd(), '.env.vault')
  }

  if (fs.existsSync(possibleVaultPath)) {
    return possibleVaultPath
  }

  return null
}

function _resolveHome (envPath) {
  return envPath[0] === '~' ? path.join(os.homedir(), envPath.slice(1)) : envPath
}

function _configVault (options) {
  _log('Loading env from encrypted .env.vault')

  const parsed = DotenvModule._parseVault(options)

  let processEnv = process.env
  if (options && options.processEnv != null) {
    processEnv = options.processEnv
  }

  DotenvModule.populate(processEnv, parsed, options)

  return { parsed }
}

function configDotenv (options) {
  const dotenvPath = path.resolve(process.cwd(), '.env')
  let encoding = 'utf8'
  const debug = Boolean(options && options.debug)

  if (options && options.encoding) {
    encoding = options.encoding
  } else {
    if (debug) {
      _debug('No encoding is specified. UTF-8 is used by default')
    }
  }

  let optionPaths = [dotenvPath] // default, look for .env
  if (options && options.path) {
    if (!Array.isArray(options.path)) {
      optionPaths = [_resolveHome(options.path)]
    } else {
      optionPaths = [] // reset default
      for (const filepath of options.path) {
        optionPaths.push(_resolveHome(filepath))
      }
    }
  }

  // Build the parsed data in a temporary object (because we need to return it).  Once we have the final
  // parsed data, we will combine it with process.env (or options.processEnv if provided).
  let lastError
  const parsedAll = {}
  for (const path of optionPaths) {
    try {
      // Specifying an encoding returns a string instead of a buffer
      const parsed = DotenvModule.parse(fs.readFileSync(path, { encoding }))

      DotenvModule.populate(parsedAll, parsed, options)
    } catch (e) {
      if (debug) {
        _debug(`Failed to load ${path} ${e.message}`)
      }
      lastError = e
    }
  }

  let processEnv = process.env
  if (options && options.processEnv != null) {
    processEnv = options.processEnv
  }

  DotenvModule.populate(processEnv, parsedAll, options)

  if (lastError) {
    return { parsed: parsedAll, error: lastError }
  } else {
    return { parsed: parsedAll }
  }
}

// Populates process.env from .env file
function config (options) {
  // fallback to original dotenv if DOTENV_KEY is not set
  if (_dotenvKey(options).length === 0) {
    return DotenvModule.configDotenv(options)
  }

  const vaultPath = _vaultPath(options)

  // dotenvKey exists but .env.vault file does not exist
  if (!vaultPath) {
    _warn(`You set DOTENV_KEY but you are missing a .env.vault file at ${vaultPath}. Did you forget to build it?`)

    return DotenvModule.configDotenv(options)
  }

  return DotenvModule._configVault(options)
}

function decrypt (encrypted, keyStr) {
  const key = Buffer.from(keyStr.slice(-64), 'hex')
  let ciphertext = Buffer.from(encrypted, 'base64')

  const nonce = ciphertext.subarray(0, 12)
  const authTag = ciphertext.subarray(-16)
  ciphertext = ciphertext.subarray(12, -16)

  try {
    const aesgcm = crypto.createDecipheriv('aes-256-gcm', key, nonce)
    aesgcm.setAuthTag(authTag)
    return `${aesgcm.update(ciphertext)}${aesgcm.final()}`
  } catch (error) {
    const isRange = error instanceof RangeError
    const invalidKeyLength = error.message === 'Invalid key length'
    const decryptionFailed = error.message === 'Unsupported state or unable to authenticate data'

    if (isRange || invalidKeyLength) {
      const err = new Error('INVALID_DOTENV_KEY: It must be 64 characters long (or more)')
      err.code = 'INVALID_DOTENV_KEY'
      throw err
    } else if (decryptionFailed) {
      const err = new Error('DECRYPTION_FAILED: Please check your DOTENV_KEY')
      err.code = 'DECRYPTION_FAILED'
      throw err
    } else {
      throw error
    }
  }
}

// Populate process.env with parsed values
function populate (processEnv, parsed, options = {}) {
  const debug = Boolean(options && options.debug)
  const override = Boolean(options && options.override)

  if (typeof parsed !== 'object') {
    const err = new Error('OBJECT_REQUIRED: Please check the processEnv argument being passed to populate')
    err.code = 'OBJECT_REQUIRED'
    throw err
  }

  // Set process.env
  for (const key of Object.keys(parsed)) {
    if (Object.prototype.hasOwnProperty.call(processEnv, key)) {
      if (override === true) {
        processEnv[key] = parsed[key]
      }

      if (debug) {
        if (override === true) {
          _debug(`"${key}" is already defined and WAS overwritten`)
        } else {
          _debug(`"${key}" is already defined and was NOT overwritten`)
        }
      }
    } else {
      processEnv[key] = parsed[key]
    }
  }
}

const DotenvModule = {
  configDotenv,
  _configVault,
  _parseVault,
  config,
  decrypt,
  parse,
  populate
}

module.exports.configDotenv = DotenvModule.configDotenv
module.exports._configVault = DotenvModule._configVault
module.exports._parseVault = DotenvModule._parseVault
module.exports.config = DotenvModule.config
module.exports.decrypt = DotenvModule.decrypt
module.exports.parse = DotenvModule.parse
module.exports.populate = DotenvModule.populate

module.exports = DotenvModule


/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcryptjs");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("uuid");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "./node_modules/dotenv/package.json":
/*!******************************************!*\
  !*** ./node_modules/dotenv/package.json ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"dotenv","version":"16.4.5","description":"Loads environment variables from .env file","main":"lib/main.js","types":"lib/main.d.ts","exports":{".":{"types":"./lib/main.d.ts","require":"./lib/main.js","default":"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},"scripts":{"dts-check":"tsc --project tests/types/tsconfig.json","lint":"standard","lint-readme":"standard-markdown","pretest":"npm run lint && npm run dts-check","test":"tap tests/*.js --100 -Rspec","test:coverage":"tap --coverage-report=lcov","prerelease":"npm test","release":"standard-version"},"repository":{"type":"git","url":"git://github.com/motdotla/dotenv.git"},"funding":"https://dotenvx.com","keywords":["dotenv","env",".env","environment","variables","config","settings"],"readmeFilename":"README.md","license":"BSD-2-Clause","devDependencies":{"@definitelytyped/dtslint":"^0.0.133","@types/node":"^18.11.3","decache":"^4.6.1","sinon":"^14.0.1","standard":"^17.0.0","standard-markdown":"^7.1.0","standard-version":"^9.5.0","tap":"^16.3.0","tar":"^6.1.11","typescript":"^4.8.4"},"engines":{"node":">=12"},"browser":{"fs":false}}');

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
/******/ 		__webpack_require__.h = () => ("3ecb37165a7f272e1978")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQSxXQUFXO1dBQ1gsV0FBVztXQUNYO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsWUFBWTtXQUNaO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFVBQVU7V0FDVjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxXQUFXO1dBQ1g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQSxtQkFBbUIsd0NBQXdDO1dBQzNEO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTTtXQUNOO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxRQUFRO1dBQ1IsUUFBUTtXQUNSO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFNBQVM7V0FDVDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxPQUFPO1dBQ1A7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFFBQVE7V0FDUjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRSxJQUFJO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLEVBQUUsMkJBQTJCLGdEQUFnRDtXQUM3RTs7Ozs7VUUxZEE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9jb25maWcvYXBwQ29uZmlnLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL2NvbnRyb2xsZXJzL0NhbGVuZGFyQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9jb250cm9sbGVycy9FdmVudENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vY29udHJvbGxlcnMvVXNlckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vZGIvY29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9taWRkbGV3YXJlL2F1dGhKd3QuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vbWlkZGxld2FyZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9taWRkbGV3YXJlL3ZlcmlmeVJlZ2lzdHJhdGlvbi5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9tb2RlbHMvQ2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vbW9kZWxzL0V2ZW50LmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL21vZGVscy9SZWZyZXNoVG9rZW4uanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vbW9kZWxzL1JvbGUuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vbW9kZWxzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vbW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3JvdXRlcnMvY2FsZW5kYXJSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vcm91dGVycy9ldmVudFJvdXRlci5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9yb3V0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3JvdXRlcnMvdXNlclJvdXRlci5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9zZXJ2ZXItZGV2LmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3NlcnZpY2VzL0NhbGVuZGFyU2VydmljZS5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9zZXJ2aWNlcy9FdmVudFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kLy4vc2VydmljZXMvUmVmcmVzaFRva2VuU2VydmljZS5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9zZXJ2aWNlcy9Sb2xlU2VydmljZS5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi9zZXJ2aWNlcy9Vc2VyU2VydmljZS5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi91dGlscy9iYXNlRXJyb3JzLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3V0aWxzL2RhdGFiYXNlRXJyb3JzLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL3V0aWxzL2h0dHBSZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvLi91dGlscy91c2VyRmFjaW5nRXJyb3JzLmpzIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC8uL25vZGVfbW9kdWxlcy9kb3RlbnYvbGliL21haW4uanMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL2V4dGVybmFsIGNvbW1vbmpzIFwiYmNyeXB0anNcIiIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC9leHRlcm5hbCBjb21tb25qcyBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC9leHRlcm5hbCBjb21tb25qcyBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL2V4dGVybmFsIGNvbW1vbmpzIFwidXVpZFwiIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiY3J5cHRvXCIiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJmc1wiIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwib3NcIiIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9teS1ub2RlLWJhY2tlbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCB1cGRhdGUgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svcnVudGltZS9nZXQgdXBkYXRlIG1hbmlmZXN0IGZpbGVuYW1lIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC93ZWJwYWNrL3J1bnRpbWUvcmVxdWlyZSBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL215LW5vZGUtYmFja2VuZC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktbm9kZS1iYWNrZW5kL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1c2VyQ29sb3JzID0gWycyRTg2QzEnLCAnMDBBNkQwJywgJzAwQzNDNycsICcyRERCQUInLCAnOURFRTg3J107XG5cbmNvbnN0IHN5c3RlbUNvbG9ycyA9IFsnMzQ0OTVFJywgJzRFNTk3NicsICc2RDY5OEQnLCAnOEY3ODlGJywgJ0I0ODhBRSddO1xuXG5jb25zdCBiYXNlVVJMID0gJy9jYWxlbmRhcmFwcCc7XG5cbmNvbnN0IGRlZmF1bHRWaWV3ID0gJ21vbnRoJztcblxuZXhwb3J0IHsgdXNlckNvbG9ycywgc3lzdGVtQ29sb3JzLCBiYXNlVVJMLCBkZWZhdWx0VmlldyB9O1xuIiwiaW1wb3J0IENhbGVuZGFyU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9DYWxlbmRhclNlcnZpY2UnO1xuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL1VzZXJTZXJ2aWNlJztcbmltcG9ydCBkYiBmcm9tICcuLi9tb2RlbHMnO1xuXG5jb25zdCBjYWxlbmRhclNlcnZpY2UgPSBuZXcgQ2FsZW5kYXJTZXJ2aWNlKGRiLkNhbGVuZGFyLCBkYi5Vc2VyKTtcbmNvbnN0IHVzZXJTZXJ2aWNlID0gbmV3IFVzZXJTZXJ2aWNlKGRiLlVzZXIpO1xuXG5jbGFzcyBDYWxlbmRhckNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihzZXJ2aWNlKSB7XG4gICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlID0gdXNlclNlcnZpY2U7XG4gIH1cblxuICBjcmVhdGUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgLi4ucmVxLmJvZHksXG4gICAgICAgIHVzZXJfaWQ6IHJlcS5hdXRoLnVzZXJcbiAgICAgIH07XG5cbiAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGUoZGF0YSk7XG5cbiAgICAgIGNvbnN0IHVzZXJSZXNwb25zZSA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZ2V0T25lKHJlcS5hdXRoLnVzZXIpO1xuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQodXNlclJlc3BvbnNlLmNhbGVuZGFyU2V0dGluZ3MpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlKHJlcS5wYXJhbXMuY2FsZW5kYXJJZCwgcmVxLmJvZHkpO1xuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXNDb2RlKS5zZW5kKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGVTZXR0aW5ncyA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHRyeSB7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS51cGRhdGVDYWxlbmRhclNldHRpbmdzKHJlcS5hdXRoLnVzZXIsIHJlcS5ib2R5KTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzQ29kZSkuc2VuZChyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG5cbiAgZGVsZXRlID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXJSZXNwb25zZSA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZ2V0T25lKHJlcS5hdXRoLnVzZXIpO1xuXG4gICAgICBjb25zdCB0YXJnZXRDYWxlbmRhclNldHRpbmdzID0gdXNlclJlc3BvbnNlLmNhbGVuZGFyU2V0dGluZ3MuZmlsdGVyKFxuICAgICAgICAoZW50cnkpID0+IGVudHJ5LmlkID09PSByZXEucGFyYW1zLmNhbGVuZGFySWRcbiAgICAgICk7XG5cbiAgICAgIGlmICh0YXJnZXRDYWxlbmRhclNldHRpbmdzLnVzZXJEZWZhdWx0ID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAuc3RhdHVzKDQwMylcbiAgICAgICAgICAuc2VuZCh7IG1lc3NhZ2U6ICdDYW5ub3QgZGVsZXRlIGRlZmF1bHQgY2FsZW5kYXIuIFBsZWFzZSB0cnkgYWdhaW4uJywgZXJyb3JDb2RlOiAnY2FsZW5kYXInIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5kZWxldGUocmVxLnBhcmFtcy5jYWxlbmRhcklkKTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzQ29kZSkuc2VuZChyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG5cbiAgc2hhcmVDYWxlbmRhciA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGNhbGVuZGFySWQgfSA9IHJlcS5wYXJhbXM7XG4gICAgICBjb25zdCB7IHVzZXJJZCwgdmlzaWJpbGl0eSwgdXNlckRlZmF1bHQsIGNvbG9yLCBpc1NoYXJlZCB9ID0gcmVxLmJvZHk7IC8vIFVzZSBgdXNlckRlZmF1bHRgIGhlcmVcblxuICBcbiAgICAgIC8vIFNoYXJlIHRoZSBjYWxlbmRhclxuICAgICAgY29uc3QgY2FsZW5kYXIgPSBhd2FpdCB0aGlzLnNlcnZpY2Uuc2hhcmVDYWxlbmRhcihjYWxlbmRhcklkLCB1c2VySWQpO1xuICBcbiAgICAgIC8vIFVwZGF0ZSB0aGUgY2FsZW5kYXJTZXR0aW5ncyBmb3IgdGhlIHVzZXIgd2l0aCB3aG9tIHRoZSBjYWxlbmRhciBpcyBzaGFyZWRcbiAgICAgIGF3YWl0IHRoaXMudXNlclNlcnZpY2UudXBkYXRlU2hhcmVkQ2FsZW5kYXJTZXR0aW5ncyh1c2VySWQsIGNhbGVuZGFySWQsIHVzZXJEZWZhdWx0LCB2aXNpYmlsaXR5LCBjb2xvciwgaXNTaGFyZWQpO1xuICBcbiAgICAgIC8vIFNlbmQgYSBzdWNjZXNzIHJlc3BvbnNlXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICBtZXNzYWdlOiAnQ2FsZW5kYXIgc2hhcmVkIHN1Y2Nlc3NmdWxseScsXG4gICAgICAgIGNhbGVuZGFyXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2FsZW5kYXJDb250cm9sbGVyKGNhbGVuZGFyU2VydmljZSwgdXNlclNlcnZpY2UpO1xuIiwiaW1wb3J0IEV2ZW50U2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9FdmVudFNlcnZpY2UnO1xuaW1wb3J0IENhbGVuZGFyU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9DYWxlbmRhclNlcnZpY2UnO1xuaW1wb3J0IGRiIGZyb20gJy4uL21vZGVscyc7XG5cbmNvbnN0IGV2ZW50U2VydmljZSA9IG5ldyBFdmVudFNlcnZpY2UoZGIuRXZlbnQpO1xuY29uc3QgY2FsZW5kYXJTZXJ2aWNlID0gbmV3IENhbGVuZGFyU2VydmljZShkYi5DYWxlbmRhcik7XG5cbmNsYXNzIEV2ZW50Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHNlcnZpY2UsIGNhbGVuZGFyU2VydmljZSkge1xuICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG4gICAgdGhpcy5jYWxlbmRhclNlcnZpY2UgPSBjYWxlbmRhclNlcnZpY2U7XG4gIH1cblxuICBjcmVhdGUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UuY3JlYXRlKHJlcS5ib2R5KTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzQ29kZSkuc2VuZChyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0VXNlckV2ZW50cyA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWxlbmRhcnMgPSBhd2FpdCB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRVc2VyQ2FsZW5kYXJzKHJlcS5hdXRoLnVzZXIpO1xuXG4gICAgICBpZiAoIWNhbGVuZGFycyB8fCBjYWxlbmRhcnMubGVuZ3RoIDwgMSkge1xuICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFcnJvcignTm8gbWF0Y2hpbmcgY2FsZW5kYXJzIGZvdW5kJywgeyBlcnJvckNvZGU6ICdjYWxlbmRhcicgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhbGVuZGFySWRzID0gY2FsZW5kYXJzLmRhdGEubWFwKChjYWxlbmRhcikgPT4gY2FsZW5kYXIuaWQpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRVc2VyRXZlbnRzKGNhbGVuZGFySWRzKTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzQ29kZSkuc2VuZChyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZShyZXEuYm9keSk7XG5cbiAgICAgIHJldHVybiByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1c0NvZGUpLnNlbmQocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuICB9O1xuXG4gIGRlbGV0ZSA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5kZWxldGUocmVxLnBhcmFtcy5ldmVudElkKTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzQ29kZSkuc2VuZChyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFdmVudENvbnRyb2xsZXIoZXZlbnRTZXJ2aWNlLCBjYWxlbmRhclNlcnZpY2UpO1xuIiwiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IGRiIGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvVXNlclNlcnZpY2UnO1xuaW1wb3J0IGF1dGhKd3QgZnJvbSAnLi4vbWlkZGxld2FyZS9hdXRoSnd0JztcblxuY29uc3QgdXNlclNlcnZpY2UgPSBuZXcgVXNlclNlcnZpY2UoZGIuVXNlciwgZGIuUmVmcmVzaFRva2VuLCBkYi5Sb2xlLCBkYi5DYWxlbmRhciwgZGIuRXZlbnQpO1xuXG5jbGFzcyBVc2VyQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHNlcnZpY2UpIHtcbiAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xuICB9XG5cbiAgLy8gY3JlYXRlIHVzZXIsIGFzc2lnbiByb2xlc1xuICByZWdpc3RlciA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZShyZXEuYm9keSk7XG5cbiAgICAgIGNvbnN0IHJvbGVOYW1lcyA9IHJlcS5ib2R5Py5yb2xlcyA/PyBbJ3VzZXInXTtcblxuICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmFzc2lnblJvbGVzKHVzZXIsIHJvbGVOYW1lcyk7XG5cbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuICB9O1xuXG4gIGxvZ2luID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxvZ2luUmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UubG9naW4ocmVxLmJvZHkudXNlcm5hbWUsIHJlcS5ib2R5LnBhc3N3b3JkKTtcblxuICAgICAgaWYgKCFsb2dpblJlc3BvbnNlLmFjY2Vzc1Rva2VuKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCh7IG1lc3NhZ2U6ICdObyB0b2tlbiBmb3VuZCEnLCBlcnJvckNvZGU6ICd1c2VyJyB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gRGVjb2RlIHRva2VuIGFuZCBsb29rdXAgZnVsbCB1c2VyIGRvY1xuICAgICAgand0LnZlcmlmeShsb2dpblJlc3BvbnNlLmFjY2Vzc1Rva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUX0tFWSwgYXN5bmMgKGUsIGRlY29kZWQpID0+IHtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICByZXR1cm4gYXV0aEp3dC5jYXRjaFRva2VuRXJyb3IoZSwgcmVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVzZXJSZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRPbmUoZGVjb2RlZC5pZCk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgLi4ubG9naW5SZXNwb25zZSxcbiAgICAgICAgICAuLi51c2VyUmVzcG9uc2VcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQocmVzcG9uc2UpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuICB9O1xuXG4gIHJlZnJlc2hUb2tlbiA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGNvbnN0IHsgcmVmcmVzaFRva2VuOiByZXF1ZXN0VG9rZW4gfSA9IHJlcS5ib2R5O1xuXG4gICAgaWYgKCFyZXF1ZXN0VG9rZW4pIHtcbiAgICAgIC8vIFJlcXVlc3QgdG9rZW4gaXMgbWlzc2luZ1xuICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL2xvZ2luJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLnJlZnJlc2hUb2tlbihyZXF1ZXN0VG9rZW4pO1xuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXNDb2RlKS5zZW5kKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlKHJlcS5hdXRoLnVzZXIsIHJlcS5ib2R5KTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzQ29kZSkuc2VuZChyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0VXNlcnMgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsVXNlcm5hbWVzKHJlcS5wYXJhbXMudXNlcklkKTsgLy8gQ2FsbCB0aGUgc2VydmljZSBtZXRob2RcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChyZXNwb25zZS5kYXRhKTsgXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlckNvbnRyb2xsZXIodXNlclNlcnZpY2UpO1xuIiwiaW1wb3J0IGRiIGZyb20gJ21vZGVscyc7XG5pbXBvcnQgUm9sZVNlcnZpY2UgZnJvbSAnc2VydmljZXMvUm9sZVNlcnZpY2UnO1xuaW1wb3J0IENhbGVuZGFyU2VydmljZSBmcm9tICdzZXJ2aWNlcy9DYWxlbmRhclNlcnZpY2UnO1xuXG5jb25zdCBNT05HT19IT1NUTkFNRSA9IHByb2Nlc3MuZW52Lk1PTkdPX0hPU1ROQU1FO1xuY29uc3QgTU9OR09fUE9SVCA9IHByb2Nlc3MuZW52Lk1PTkdPX1BPUlQ7XG5jb25zdCBNT05HT19EQiA9IHByb2Nlc3MuZW52Lk1PTkdPX0RCO1xuY29uc3QgTU9OR09fVVNFUk5BTUUgPSBwcm9jZXNzLmVudi5NT05HT19VU0VSTkFNRTtcbmNvbnN0IE1PTkdPX1BBU1NXT1JEID0gcHJvY2Vzcy5lbnYuTU9OR09fUEFTU1dPUkQ7XG5jb25zdCBNT05HT19VUkwgPSBgbW9uZ29kYjovLyR7TU9OR09fVVNFUk5BTUV9OiR7TU9OR09fUEFTU1dPUkR9QCR7TU9OR09fSE9TVE5BTUV9OiR7TU9OR09fUE9SVH0vJHtNT05HT19EQn0/YXV0aFNvdXJjZT1hZG1pbmA7XG5cbmNvbnN0IG1vbmdvb3NlID0gZGIubW9uZ29vc2U7XG5jb25zdCBSb2xlID0gZGIuUm9sZTtcbmNvbnN0IENhbGVuZGFyID0gZGIuQ2FsZW5kYXI7XG5cbmNvbnN0IHJvbGVTZXJ2aWNlID0gbmV3IFJvbGVTZXJ2aWNlKFJvbGUpO1xuY29uc3QgY2FsZW5kYXJTZXJ2aWNlID0gbmV3IENhbGVuZGFyU2VydmljZShDYWxlbmRhcik7XG5cbmNvbnN0IGluaXRpYWxpemVSb2xlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY291bnQgPSBhd2FpdCBSb2xlLmNvdW50RG9jdW1lbnRzKHt9KTtcbiAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuY3JlYXRlKCd1c2VyJyk7XG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuY3JlYXRlKCdtb2RlcmF0b3InKTtcbiAgICBhd2FpdCByb2xlU2VydmljZS5jcmVhdGUoJ2FkbWluJyk7XG4gICAgY29uc29sZS5sb2coJ0luaXRpYWxpemVkIHJvbGVzLicpO1xuICB9XG59O1xuXG5jb25zdCBpbml0aWFsaXplQ2FsZW5kYXJzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjb3VudCA9IGF3YWl0IENhbGVuZGFyLmNvdW50RG9jdW1lbnRzKHsgdXNlcl9pZDogJ3N5c3RlbScsIG5hbWU6ICdVUyBIb2xpZGF5cycgfSk7XG4gIGlmIChjb3VudCA9PT0gMCkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBuYW1lOiAnVVMgSG9saWRheXMnLFxuICAgICAgdXNlcl9pZDogJ3N5c3RlbSdcbiAgICB9O1xuXG4gICAgYXdhaXQgY2FsZW5kYXJTZXJ2aWNlLmNyZWF0ZShkYXRhKTtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRlZCBVUyBIb2xpZGF5cyBjYWxlbmRhci4nKTtcbiAgfVxufTtcblxubW9uZ29vc2VcbiAgLmNvbm5lY3QoTU9OR09fVVJMKVxuICAudGhlbihhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBNb25nb0RCJyk7XG5cbiAgICAvLyBJbml0aWFsaXplIHJvbGVzXG4gICAgYXdhaXQgaW5pdGlhbGl6ZVJvbGVzKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIHN5c3RlbSBjYWxlbmRhcnNcbiAgICBhd2FpdCBpbml0aWFsaXplQ2FsZW5kYXJzKCk7XG4gIH0pXG4gIC5jYXRjaCgoZSkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Nvbm5lY3Rpb24gZXJyb3InLCBlKTtcbiAgICBwcm9jZXNzLmV4aXQoKTtcbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRiO1xuIiwiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IGRiIGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgQ2FsZW5kYXJTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL0NhbGVuZGFyU2VydmljZSc7XG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvVXNlclNlcnZpY2UnO1xuaW1wb3J0IEV2ZW50U2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9FdmVudFNlcnZpY2UnO1xuXG5jb25zdCBVc2VyID0gZGIuVXNlcjtcbmNvbnN0IFJlZnJlc2hUb2tlbiA9IGRiLlJlZnJlc2hUb2tlbjtcbmNvbnN0IFJvbGUgPSBkYi5Sb2xlO1xuY29uc3QgQ2FsZW5kYXIgPSBkYi5DYWxlbmRhcjtcbmNvbnN0IEV2ZW50ID0gZGIuRXZlbnQ7XG5jb25zdCB7IFRva2VuRXhwaXJlZEVycm9yIH0gPSBqd3Q7XG5cbmNvbnN0IGNhbGVuZGFyU2VydmljZSA9IG5ldyBDYWxlbmRhclNlcnZpY2UoQ2FsZW5kYXIpO1xuY29uc3QgdXNlclNlcnZpY2UgPSBuZXcgVXNlclNlcnZpY2UoVXNlciwgUmVmcmVzaFRva2VuLCBSb2xlKTtcbmNvbnN0IGV2ZW50U2VydmljZSA9IG5ldyBFdmVudFNlcnZpY2UoRXZlbnQpO1xuXG5jb25zdCBjYXRjaFRva2VuRXJyb3IgPSAoZSwgcmVzKSA9PiB7XG4gIGlmIChlIGluc3RhbmNlb2YgVG9rZW5FeHBpcmVkRXJyb3IpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkISBBY2Nlc3MgVG9rZW4gd2FzIGV4cGlyZWQhJywgZXJyb3JDb2RlOiAnYWNjZXNzdG9rZW4nIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQhJywgZXJyb3JDb2RlOiAnYWNjZXNzdG9rZW4nIH0pO1xufTtcblxuY29uc3QgdmVyaWZ5VG9rZW4gPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVyc1sneC1hY2Nlc3MtdG9rZW4nXTtcblxuICBpZiAoIXRva2VuKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKHsgbWVzc2FnZTogJ05vIHRva2VuIHByb3ZpZGVkIScsIGVycm9yQ29kZTogJ2FjY2Vzc3Rva2VuJyB9KTtcbiAgfVxuXG4gIC8vIERlY29kZSB0b2tlbiBhbmQgYXR0YWNoIHVzZXIgaW5mbyB0byByZXF1ZXN0XG4gIGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVRfS0VZLCAoZSwgZGVjb2RlZCkgPT4ge1xuICAgIGlmIChlKSB7XG4gICAgICByZXR1cm4gY2F0Y2hUb2tlbkVycm9yKGUsIHJlcyk7XG4gICAgfVxuXG4gICAgcmVxLmF1dGggPSB7XG4gICAgICB1c2VyOiBkZWNvZGVkLmlkXG4gICAgfTtcblxuICAgIHJldHVybiBuZXh0KCk7XG4gIH0pO1xufTtcblxuLy8gQ2hlY2tzIGF1dGhlZCB1c2VyIGFnYWluc3QgcmVxdWVzdCBwYXJhbXMgZm9yIHJlc291cmNlIGF1dGhvcml6YXRpb25cbi8vIENhbiBiZSByZXBsYWNlZCB3aXRoIGFuIGFjY2VzcyBjb250cm9sIGxpc3Qgb3Igc2ltaWxhclxuY29uc3QgdmVyaWZ5VVJJQXV0aCA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCB1cmwgPSByZXEuYmFzZVVybCArIHJlcS5yb3V0ZS5wYXRoO1xuXG4gIHN3aXRjaCAodXJsKSB7XG4gICAgY2FzZSBgJHtyZXEuYmFzZVVybH0vOnVzZXJJZGA6IHtcbiAgICAgIGlmIChyZXEuYXV0aC51c2VyICE9PSByZXEucGFyYW1zLnVzZXJJZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnUmVxdWlyZXMgYWRtaW4gcm9sZSEnLCBlcnJvckNvZGU6ICdyb2xlJyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfVxuXG4gICAgY2FzZSBgJHtyZXEuYmFzZVVybH0vOmNhbGVuZGFySWRgOiB7XG4gICAgICAvLyBmZXRjaCB0YXJnZXQgY2FsZW5kYXJcbiAgICAgIGNvbnN0IGNhbGVuZGFyID0gYXdhaXQgY2FsZW5kYXJTZXJ2aWNlLmdldE9uZShyZXEucGFyYW1zLmNhbGVuZGFySWQpO1xuXG4gICAgICBpZiAocmVxLmF1dGgudXNlciAhPT0gY2FsZW5kYXIuZGF0YS51c2VyX2lkICYmICFjYWxlbmRhci5kYXRhLnNoYXJlZF93aXRoLmluY2x1ZGVzKHJlcS5hdXRoLnVzZXIpKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCh7IG1lc3NhZ2U6ICdSZXF1aXJlcyBhZG1pbiByb2xlIScsIGVycm9yQ29kZTogJ3JvbGUnIH0pO1xuICAgIH1cbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfVxuXG4gICAgY2FzZSBgJHtyZXEuYmFzZVVybH0vOmNhbGVuZGFySWQvc2V0dGluZ3NgOiB7XG4gICAgICAvLyBmZXRjaCB0YXJnZXQgdXNlclxuICAgICAgLy8gTW9uZ29vc2UgcmV0dXJucyBudWxsIGZvciAuZmluZE9uZSBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe1xuICAgICAgICBfaWQ6IHJlcS5hdXRoLnVzZXIsXG4gICAgICAgICdjYWxlbmRhclNldHRpbmdzLmNhbGVuZGFyJzoge1xuICAgICAgICAgICRlcTogcmVxLnBhcmFtcy5jYWxlbmRhcklkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9XG5cbiAgICAvLyBJZiBub3QgZm91bmQgaW4gdXNlciBzZXR0aW5ncywgY2hlY2sgaWYgdGhleSBhcmUgaW4gdGhlIHNoYXJlZF93aXRoIGxpc3Qgb2YgdGhlIGNhbGVuZGFyXG4gICAgY29uc3QgY2FsZW5kYXIgPSBhd2FpdCBjYWxlbmRhclNlcnZpY2UuZ2V0T25lKHJlcS5wYXJhbXMuY2FsZW5kYXJJZCk7XG4gICAgaWYgKGNhbGVuZGFyICYmIGNhbGVuZGFyLmRhdGEuc2hhcmVkX3dpdGguaW5jbHVkZXMocmVxLmF1dGgudXNlcikpIHtcbiAgICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9XG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH1cblxuICAgIGNhc2UgYCR7cmVxLmJhc2VVcmx9LzpldmVudElkYDoge1xuICAgICAgLy8gZmV0Y2ggdGFyZ2V0IGV2ZW50XG4gICAgICBjb25zdCBldmVudCA9IGF3YWl0IGV2ZW50U2VydmljZS5nZXRPbmUocmVxLnBhcmFtcy5ldmVudElkKTtcbiAgICAgIC8vIGZldGNoIGNvcnJlc3BvbmRpbmcgY2FsZW5kYXJcbiAgICAgIGNvbnN0IGNhbGVuZGFyID0gYXdhaXQgY2FsZW5kYXJTZXJ2aWNlLmdldE9uZShldmVudC5kYXRhLmNhbGVuZGFyKTtcblxuICAgICAgaWYgKHJlcS5hdXRoLnVzZXIgIT09IGNhbGVuZGFyLmRhdGEudXNlcl9pZCAmJiAhY2FsZW5kYXIuZGF0YS5zaGFyZWRfd2l0aC5pbmNsdWRlcyhyZXEuYXV0aC51c2VyKSkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnUmVxdWlyZXMgYWRtaW4gcm9sZSEnLCBlcnJvckNvZGU6ICdyb2xlJyB9KTtcbiAgICB9XG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnUmVxdWlyZXMgYWRtaW4gcm9sZSEnLCBlcnJvckNvZGU6ICdyb2xlJyB9KTtcbiAgfVxufTtcblxuY29uc3QgaXNBZG1pbiA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBVc2VyLmZpbmRCeUlkKHJlcS5hdXRoLnVzZXIpLmV4ZWMoKGUsIHVzZXIpID0+IHtcbiAgICBpZiAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuXG4gICAgLy8gTW9uZ29vc2UgcmV0dXJucyBbXSBmb3IgLmZpbmQgcXVlcnkgd2l0aCBubyBtYXRjaGVzXG4gICAgUm9sZS5maW5kKFxuICAgICAge1xuICAgICAgICBpZDogeyAkaW46IHVzZXIucm9sZXMgfVxuICAgICAgfSxcbiAgICAgIChlLCByb2xlcykgPT4ge1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChyb2xlc1tpXS5uYW1lID09PSAnYWRtaW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCh7IG1lc3NhZ2U6ICdSZXF1aXJlIEFkbWluIFJvbGUhJywgZXJyb3JDb2RlOiAncm9sZScgfSk7XG4gICAgICB9XG4gICAgKTtcbiAgfSk7XG59O1xuXG5jb25zdCBpc01vZGVyYXRvciA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBVc2VyLmZpbmRCeUlkKHJlcS5hdXRoLnVzZXIpLmV4ZWMoKGUsIHVzZXIpID0+IHtcbiAgICBpZiAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuXG4gICAgLy8gTW9uZ29vc2UgcmV0dXJucyBbXSBmb3IgLmZpbmQgcXVlcnkgd2l0aCBubyBtYXRjaGVzXG4gICAgUm9sZS5maW5kKFxuICAgICAge1xuICAgICAgICBpZDogeyAkaW46IHVzZXIucm9sZXMgfVxuICAgICAgfSxcbiAgICAgIChlLCByb2xlcykgPT4ge1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChyb2xlc1tpXS5uYW1lID09PSAnbW9kZXJhdG9yJykge1xuICAgICAgICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnUmVxdWlyZSBNb2RlcmF0b3IgUm9sZSEnLCBlcnJvckNvZGU6ICdyb2xlJyB9KTtcbiAgICAgIH1cbiAgICApO1xuICB9KTtcbn07XG5cbmNvbnN0IGF1dGhKd3QgPSB7XG4gIHZlcmlmeVRva2VuLFxuICB2ZXJpZnlVUklBdXRoLFxuICBpc0FkbWluLFxuICBpc01vZGVyYXRvclxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aEp3dDtcbiIsImltcG9ydCBhdXRoSnd0IGZyb20gJy4vYXV0aEp3dCc7XG5pbXBvcnQgdmVyaWZ5UmVnaXN0cmF0aW9uIGZyb20gJy4vdmVyaWZ5UmVnaXN0cmF0aW9uJztcblxuZXhwb3J0IHsgYXV0aEp3dCwgdmVyaWZ5UmVnaXN0cmF0aW9uIH07XG4iLCJpbXBvcnQgZGIgZnJvbSAnLi4vbW9kZWxzJztcblxuaW1wb3J0IHsgQmFkUmVxdWVzdEVycm9yIH0gZnJvbSAnLi4vdXRpbHMvdXNlckZhY2luZ0Vycm9ycyc7XG5cbmNvbnN0IGNoZWNrRHVwbGljYXRlVXNlcm5hbWUgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBkYi5Vc2VyLmZpbmRCeVVzZXJuYW1lKHJlcS5ib2R5LnVzZXJuYW1lKS50aGVuKCh1c2VyKSA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgQmFkUmVxdWVzdEVycm9yKCdVc2VybmFtZSBpcyBhbHJlYWR5IGluIHVzZScsIHsgZXJyb3JDb2RlOiAndXNlcm5hbWUnIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBuZXh0KGUpO1xuICB9XG59O1xuXG5jb25zdCBjaGVja1JvbGVzRXhpc3QgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgLy8gQXR0YWNoaW5nIHJvbGVzIHRvIHJlZ2lzdHJhdGlvbiByZXF1ZXN0IGlzIG9wdGlvbmFsXG4gIGlmICghcmVxLmJvZHkucm9sZXMgfHwgcmVxLmJvZHkucm9sZXM/Lmxlbmd0aCA8IDEpIHJldHVybiBuZXh0KCk7XG5cbiAgLy8gQ2hlY2sgYXR0YWNoZWQgcm9sZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXEuYm9keS5yb2xlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICghcm9sZXMuaW5jbHVkZXMocmVxLmJvZHkucm9sZXNbaV0pKSB7XG4gICAgICB0aHJvdyBuZXcgQmFkUmVxdWVzdEVycm9yKGBSb2xlICR7cmVxLmJvZHkucm9sZXNbaV19IGRvZXMgbm90IGV4aXN0IWAsIHsgZXJyb3JDb2RlOiAncm9sZScgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5leHQoKTtcbn07XG5cbmNvbnN0IGNoZWNrUGFzc3dvcmRDb21wbGV4RW5vdWdoID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnN0IHBhc3N3b3JkID0gcmVxLmJvZHkucGFzc3dvcmQ7XG4gIGNvbnN0IHBhc3N3b3JkUmVnZXggPSBuZXcgUmVnRXhwKCdeKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qWzAtOV0pKD89LipbIUAjJCVeJiooKSwuP1wiOnt9fDw+XSkoPz0uezgsfSknKTtcblxuICBpZiAoIXBhc3N3b3JkUmVnZXgudGVzdChwYXNzd29yZCkpIHtcbiAgICB0aHJvdyBuZXcgQmFkUmVxdWVzdEVycm9yKCdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgYSBsb3dlcmNhc2UgY2hhcmFjdGVyLCBhbiB1cHBlcmNhc2UgY2hhcmFjdGVyLCBhIGRpZ2l0LCBhIHNwZWNpYWwgY2hhcmFjdGVyIGFuZCBtdXN0IGJlIGF0IGxlYXN0IGVpZ2h0IGNoYXJhY3RlciBsb25nLicsIHsgZXJyb3JDb2RlOiAncGFzc3dvcmQnIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5leHQoKTtcbn1cblxuY29uc3QgY2hlY2tVc2VybmFtZUxvbmdFbm91Z2ggPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgdXNlcm5hbWUgPSByZXEuYm9keS51c2VybmFtZTtcblxuICBpZiAodXNlcm5hbWUubGVuZ3RoIDwgNCkge1xuICAgIHRocm93IG5ldyBCYWRSZXF1ZXN0RXJyb3IoJ1VzZXJuYW1lIGlzIHRvbyBzaG9ydCcsIHsgZXJyb3JDb2RlOiAndXNlcm5hbWUnIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5leHQoKTtcbn1cblxuY29uc3QgdmVyaWZ5UmVnaXN0cmF0aW9uID0ge1xuICBjaGVja0R1cGxpY2F0ZVVzZXJuYW1lLFxuICBjaGVja1JvbGVzRXhpc3QsXG4gIGNoZWNrUGFzc3dvcmRDb21wbGV4RW5vdWdoLFxuICBjaGVja1VzZXJuYW1lTG9uZ0Vub3VnaFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5UmVnaXN0cmF0aW9uO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5pbXBvcnQgeyBEdXBsaWNhdGVLZXlFcnJvciB9IGZyb20gJy4uL3V0aWxzL2RhdGFiYXNlRXJyb3JzJztcbmltcG9ydCB7IHVzZXJDb2xvcnMsIHN5c3RlbUNvbG9ycyB9IGZyb20gJ2NvbmZpZy9hcHBDb25maWcnO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgbmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9LFxuICB1c2VyX2lkOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICdzeXN0ZW0nXG4gIH0sXG4gIHNoYXJlZF93aXRoOiB7XG4gICAgdHlwZTogW3sgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdVc2VyJyB9XSxcbiAgICBkZWZhdWx0OiBbXVxuICB9XG59KTtcblxuLy8gcHJlc2VydmluZyBpc05ldyBzdGF0ZSBmb3IgJ3Bvc3QnIG1pZGRsZXdhcmVcbnNjaGVtYS5wcmUoJ3NhdmUnLCBmdW5jdGlvbiAobmV4dCkge1xuICB0aGlzLndhc05ldyA9IHRoaXMuaXNOZXc7XG4gIG5leHQoKTtcbn0pO1xuXG4vLyBzY2hlbWEgbWlkZGxld2FyZSB0byBhcHBseSBhZnRlciBzYXZpbmdcbmNvbnN0IGhhbmRsZUUxMTAwMCA9IChlcnJvciwgcmVzLCBuZXh0KSA9PiB7XG4gIGlmIChlcnJvci5uYW1lID09PSAnTW9uZ29FcnJvcicgJiYgZXJyb3IuY29kZSA9PT0gMTEwMDApIHtcbiAgICB0aHJvdyBuZXcgRHVwbGljYXRlS2V5RXJyb3IoJ1RoZXJlIHdhcyBhIGNvbmZsaWN0IHdpdGggYW4gZXhpc3RpbmcgZW50cnkuIFBsZWFzZSB0cnkgYWdhaW4uJywge1xuICAgICAgZXJyb3JDb2RlOiAnY2FsZW5kYXInXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfVxufTtcblxuc2NoZW1hLnBvc3QoJ3NhdmUnLCBoYW5kbGVFMTEwMDApO1xuc2NoZW1hLnBvc3QoJ2ZpbmRPbmVBbmRVcGRhdGUnLCBoYW5kbGVFMTEwMDApO1xuXG4vLyBFbWJlZCBjYWxlbmRhciBzZXR0aW5ncyBpbiBjb3JyZXNwb25kaW5nIHVzZXIgZG9jKHMpXG5zY2hlbWEucG9zdCgnc2F2ZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuaWQgJiYgdGhpcy53YXNOZXcpIHtcbiAgICB0cnkge1xuICAgICAgLy8gc3lzdGVtIGNhbGVuZGFyIGNyZWF0ZWRcbiAgICAgIGlmICh0aGlzLnVzZXJfaWQgPT09ICdzeXN0ZW0nKSB7XG4gICAgICAgIC8vIGNvdW50IHN5c3RlbSBjYWxzXG4gICAgICAgIGNvbnN0IHN5c3RlbUNhbGVuZGFyc0NvdW50ID0gYXdhaXQgQ2FsZW5kYXIuY291bnREb2N1bWVudHMoeyB1c2VyX2lkOiAnc3lzdGVtJyB9KTtcblxuICAgICAgICAvLyBwcmVwYXJlIGNhbGVuZGFyIHNldHRpbmdzIG9iamVjdFxuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICAgICBjYWxlbmRhcjogdGhpcy5pZCxcbiAgICAgICAgICB1c2VyRGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgdmlzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICBjb2xvcjogYCMke3N5c3RlbUNvbG9yc1soc3lzdGVtQ2FsZW5kYXJzQ291bnQgLSAxKSAlIHN5c3RlbUNvbG9ycy5sZW5ndGhdfWBcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBlbWJlZCBpbiBhbGwgdXNlciBkb2NzXG4gICAgICAgIGF3YWl0IFVzZXIudXBkYXRlTWFueSh7fSwgeyAkcHVzaDogeyBjYWxlbmRhclNldHRpbmdzOiBzZXR0aW5ncyB9IH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdXNlciBjYWxlbmRhciBjcmVhdGVkXG5cbiAgICAgICAgLy8gY291bnQgdXNlciBjYWxlbmRhcnNcbiAgICAgICAgY29uc3QgdXNlckNhbGVuZGFyc0NvdW50ID0gYXdhaXQgQ2FsZW5kYXIuY291bnREb2N1bWVudHMoeyB1c2VyX2lkOiB0aGlzLnVzZXJfaWQgfSk7XG5cbiAgICAgICAgaWYgKHVzZXJDYWxlbmRhcnNDb3VudCA8IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRGF0YWJhc2VFcnJvcignTWF0Y2hpbmcgY2FsZW5kYXIocykgbm90IGZvdW5kJywge1xuICAgICAgICAgICAgZXJyb3JDb2RlOiAnY2FsZW5kYXInXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB1c2VyIGNhbGVuZGFyKHMpIGZvdW5kLCBwcm9jZXNzIGNhbGVuZGFyIHNldHRpbmdzXG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgICAgIGNhbGVuZGFyOiB0aGlzLmlkLFxuICAgICAgICAgIHZpc2liaWxpdHk6IHRydWUsXG4gICAgICAgICAgY29sb3I6IGAjJHt1c2VyQ29sb3JzWyh1c2VyQ2FsZW5kYXJzQ291bnQgLSAxKSAlIHVzZXJDb2xvcnMubGVuZ3RoXX1gXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gc2V0IHVzZXJEZWZhdWx0IHByb3BlcnR5XG4gICAgICAgIGlmICh1c2VyQ2FsZW5kYXJzQ291bnQgPT09IDEpIHtcbiAgICAgICAgICBzZXR0aW5ncy51c2VyRGVmYXVsdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0dGluZ3MudXNlckRlZmF1bHQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVtYmVkIGNhbGVuZGFyIHNldHRpbmdzIGluIHVzZXIgZG9jXG4gICAgICAgIGF3YWl0IFVzZXIuZmluZEJ5SWRBbmRVcGRhdGUodGhpcy51c2VyX2lkLCB7ICRwdXNoOiB7IGNhbGVuZGFyU2V0dGluZ3M6IHNldHRpbmdzIH0gfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGUpO1xuICAgIH1cbiAgfVxufSk7XG5cbi8vIERlbGV0ZSBjYWxlbmRhciBzZXR0aW5ncyBpbiBjb3JyZXNwb25kaW5nIHVzZXIgZG9jKHMpXG5zY2hlbWEucG9zdCgnZmluZE9uZUFuZERlbGV0ZScsIGFzeW5jIGZ1bmN0aW9uIChkb2MpIHtcbiAgdHJ5IHtcbiAgICAvLyBzeXN0ZW0gY2FsZW5kYXIgZGVsZXRlZFxuICAgIGlmIChkb2MudXNlcl9pZCA9PT0gJ3N5c3RlbScpIHtcbiAgICAgIC8vIGRlbGV0ZSBjYWxlbmRhciBzZXR0aW5ncyBmb3IgYWxsIHVzZXJzXG4gICAgICBhd2FpdCBVc2VyLnVwZGF0ZU1hbnkoe30sIHsgJHB1bGw6IHsgY2FsZW5kYXJTZXR0aW5nczogeyBjYWxlbmRhcjogZG9jLl9pZCB9IH0gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVzZXIgY2FsZW5kYXIgZGVsZXRlZFxuICAgICAgLy8gZGVsZXRlIGNhbGVuZGFyIHNldHRpbmdzIGZvciBtYXRjaGluZyB1c2VyXG4gICAgICBhd2FpdCBVc2VyLnVwZGF0ZU9uZSh7IF9pZDogZG9jLnVzZXJfaWQgfSwgeyAkcHVsbDogeyBjYWxlbmRhclNldHRpbmdzOiB7IGNhbGVuZGFyOiBkb2MuX2lkIH0gfSB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZSk7XG4gIH1cbn0pO1xuXG4vLyBzY2hlbWEgaW5kZXhcbnNjaGVtYS5pbmRleCh7IG5hbWU6IDEsIHVzZXJfaWQ6IDEgfSwgeyB1bmlxdWU6IHRydWUgfSk7XG5cbmNvbnN0IENhbGVuZGFyID0gbW9uZ29vc2UubW9kZWwoJ0NhbGVuZGFyJywgc2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXI7XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgdGl0bGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSB0aXRsZS4nXVxuICB9LFxuICBkZXNjOiB7XG4gICAgdHlwZTogU3RyaW5nXG4gIH0sXG4gIHN0YXJ0OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0VudGVyIGEgc3RhcnQgZGF0ZS4nXVxuICB9LFxuICBlbmQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYW4gZW5kIGRhdGUuJ11cbiAgfSxcbiAgYWxsRGF5OiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBkZWZhdWx0OiBmYWxzZVxuICB9LFxuICB0aW1lWm9uZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICByZWY6ICdDYWxlbmRhcidcbiAgfVxufSk7XG5cbmNvbnN0IEV2ZW50ID0gbW9uZ29vc2UubW9kZWwoJ0V2ZW50Jywgc2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnQ7XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgdG9rZW46IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSBuYW1lLiddXG4gIH0sXG4gIHVzZXI6IHtcbiAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgcmVmOiAnVXNlcicsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSB1c2VyIGlkLiddXG4gIH0sXG4gIGV4cGlyeURhdGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgZXhwaXJhdGlvbiBkYXRlLiddXG4gIH1cbn0pO1xuXG5zY2hlbWEuc3RhdGljcy52ZXJpZnlFeHBpcmF0aW9uID0gKHRva2VuKSA9PiB7XG4gIGNvbnN0IGV4cGlyeURhdGVPYmogPSBuZXcgRGF0ZSh0b2tlbi5leHBpcnlEYXRlKTtcbiAgcmV0dXJuIGV4cGlyeURhdGVPYmouZ2V0VGltZSgpIDwgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG5jb25zdCBSZWZyZXNoVG9rZW4gPSBtb25nb29zZS5tb2RlbCgnUmVmcmVzaFRva2VuJywgc2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVmcmVzaFRva2VuO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3Qgc2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIG5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSBuYW1lLiddXG4gIH1cbn0pO1xuXG5jb25zdCBSb2xlID0gbW9uZ29vc2UubW9kZWwoJ1JvbGUnLCBzY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBSb2xlO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IGJjcnlwdCA9IHJlcXVpcmUoJ2JjcnlwdGpzJyk7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9DYWxlbmRhcic7XG5pbXBvcnQgeyBEdXBsaWNhdGVLZXlFcnJvciB9IGZyb20gJy4uL3V0aWxzL2RhdGFiYXNlRXJyb3JzJztcbmltcG9ydCB7IHVzZXJDb2xvcnMsIHN5c3RlbUNvbG9ycyB9IGZyb20gJ2NvbmZpZy9hcHBDb25maWcnO1xuXG5jb25zdCBTQUxUX1dPUktfRkFDVE9SID0gMTA7XG5cbmNvbnN0IHNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICB1c2VybmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsICdFbnRlciBhIHVzZXJuYW1lLiddLFxuICAgIG1pbkxlbmd0aDogWzQsICdVc2VybmFtZSBzaG91bGQgYmUgYXQgbGVhc3QgZm91ciBjaGFyYWN0ZXJzJ10sXG4gICAgdW5pcXVlOiBbdHJ1ZSwgJ1RoYXQgdXNlcm5hbWUgaXMgdGFrZW4uJ11cbiAgfSxcbiAgcGFzc3dvcmQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW50ZXIgYSBwYXNzd29yZC4nXSxcbiAgICBtaW5MZW5ndGg6IFs4LCAnUGFzc3dvcmQgc2hvdWxkIGJlIGF0IGxlYXN0IGZvdXIgY2hhcmFjdGVycyddXG4gIH0sXG4gIGZhaWxlZExvZ2luQXR0ZW1wdHM6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMFxuICB9LFxuICBsYXN0RmFpbGVkTG9naW5BdHRlbXB0OiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICBkZWZhdWx0OiBudWxsXG4gIH0sXG4gIHJvbGVzOiBbXG4gICAge1xuICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgcmVmOiAnUm9sZSdcbiAgICB9XG4gIF0sXG4gIGNhbGVuZGFyU2V0dGluZ3M6IFtcbiAgICB7XG4gICAgICBjYWxlbmRhcjoge1xuICAgICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICAgIHJlZjogJ0NhbGVuZGFyJ1xuICAgICAgfSxcbiAgICAgIHVzZXJEZWZhdWx0OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBjb2xvcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICB9LFxuICAgICAgaXNTaGFyZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgIH1cbiAgXSxcbiAgbm90aWZpY2F0aW9uczogW1xuICAgIHtcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLCAvLyBlLmcuLCAnaW5mbycsICd3YXJuaW5nJywgJ2Vycm9yJ1xuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHJlYWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB0aW1lc3RhbXA6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgZGVmYXVsdDogRGF0ZS5ub3dcbiAgICAgIH1cbiAgICB9XG4gIF1cbn0pO1xuXG4vLyBwcmVzZXJ2aW5nIGlzTmV3IHN0YXRlIGZvciAncG9zdCcgbWlkZGxld2FyZVxuc2NoZW1hLnByZSgnc2F2ZScsIGZ1bmN0aW9uIChuZXh0KSB7XG4gIHRoaXMud2FzTmV3ID0gdGhpcy5pc05ldztcbiAgbmV4dCgpO1xufSk7XG5cbi8vIHNjaGVtYSBtaWRkbGV3YXJlIHRvIGFwcGx5IGJlZm9yZSBzYXZpbmdcbnNjaGVtYS5wcmUoJ3NhdmUnLCBhc3luYyBmdW5jdGlvbiAobmV4dCkge1xuICAvLyBvbmx5IGhhc2ggdGhlIHBhc3N3b3JkIGlmIGl0IGhhcyBiZWVuIG1vZGlmaWVkIChvciBpcyBuZXcpXG4gIGlmICghdGhpcy5pc01vZGlmaWVkKCdwYXNzd29yZCcpKSByZXR1cm4gbmV4dCgpO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KFNBTFRfV09SS19GQUNUT1IpO1xuICAgIHRoaXMucGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaCh0aGlzLnBhc3N3b3JkLCBzYWx0KTtcblxuICAgIHJldHVybiBuZXh0KCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbmV4dChlKTtcbiAgfVxufSk7XG5cbi8vIHNjaGVtYSBtaWRkbGV3YXJlIHRvIGNoZWNrIGZvciBkdXBsaWNhdGUga2V5c1xuY29uc3QgaGFuZGxlRTExMDAwID0gKGVycm9yLCByZXMsIG5leHQpID0+IHtcbiAgaWYgKGVycm9yLm5hbWUgPT09ICdNb25nb0Vycm9yJyAmJiBlcnJvci5jb2RlID09PSAxMTAwMCkge1xuICAgIHRocm93IG5ldyBEdXBsaWNhdGVLZXlFcnJvcignVGhlcmUgd2FzIGEgY29uZmxpY3Qgd2l0aCBhbiBleGlzdGluZyBlbnRyeS4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCB7XG4gICAgICBlcnJvckNvZGU6ICd1c2VybmFtZSdcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV4dCgpO1xuICB9XG59O1xuXG5zY2hlbWEucG9zdCgnc2F2ZScsIGhhbmRsZUUxMTAwMCk7XG5cbi8vIGZvciBuZXcgdXNlcnM6IGVtYmVkIHN5c3RlbSBjYWwgc2V0dGluZ3MgYW5kIGNyZWF0ZSB1c2VyIGRlZmF1bHQgY2FsZW5kYXJcbnNjaGVtYS5wb3N0KCdzYXZlJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5pZCAmJiB0aGlzLndhc05ldykge1xuICAgIHRyeSB7XG4gICAgICAvLyBMb29rdXAgc3lzdGVtIGNhbHNcbiAgICAgIGNvbnN0IHN5c3RlbUNhbHMgPSBhd2FpdCBDYWxlbmRhci5maW5kKHtcbiAgICAgICAgdXNlcl9pZDogJ3N5c3RlbSdcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3lzdGVtQ2Fscy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gW107XG5cbiAgICAgICAgc3lzdGVtQ2Fscy5mb3JFYWNoKChjYWwsIGlkeCkgPT4ge1xuICAgICAgICAgIHNldHRpbmdzLnB1c2goe1xuICAgICAgICAgICAgY2FsZW5kYXI6IGNhbC5pZCxcbiAgICAgICAgICAgIHVzZXJEZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHRydWUsXG4gICAgICAgICAgICBjb2xvcjogYCMke3N5c3RlbUNvbG9yc1tpZHhdfWBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0dGluZ3MuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyU2V0dGluZ3MucHVzaChlbnRyeSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGVtYmVkIGNhbGVuZGFyIHNldHRpbmdzIGluIHVzZXIgZG9jXG4gICAgICAgIGF3YWl0IHRoaXMuc2F2ZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBjaGVjayBmb3IgZXhpc3RpbmcgdXNlciBkZWZhdWx0IGNhbFxuICAgICAgY29uc3QgZGVmYXVsdENhbCA9IGF3YWl0IENhbGVuZGFyLmZpbmRPbmUoe1xuICAgICAgICBuYW1lOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICB1c2VyX2lkOiB0aGlzLmlkXG4gICAgICB9KTtcblxuICAgICAgaWYgKGRlZmF1bHRDYWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IER1cGxpY2F0ZUtleUVycm9yKCdUaGVyZSB3YXMgYSBjb25mbGljdCB3aXRoIGFuIGV4aXN0aW5nIGVudHJ5LiBQbGVhc2UgdHJ5IGFnYWluLicsIHtcbiAgICAgICAgICBlcnJvckNvZGU6ICd1c2VyJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3RGVmYXVsdENhbCA9IG5ldyBDYWxlbmRhcih7XG4gICAgICAgIG5hbWU6IHRoaXMudXNlcm5hbWUsXG4gICAgICAgIHVzZXJfaWQ6IHRoaXMuaWRcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDcmVhdGUgZGVmYXVsdCBjYWxlbmRhclxuICAgICAgYXdhaXQgbmV3RGVmYXVsdENhbC5zYXZlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGUpO1xuICAgIH1cbiAgfVxufSk7XG5cbnNjaGVtYS5zdGF0aWNzLmZpbmRCeVVzZXJuYW1lID0gYXN5bmMgZnVuY3Rpb24gKHVzZXJuYW1lKSB7XG4gIC8vIE1vbmdvb3NlIHJldHVybnMgbnVsbCBmb3IgLmZpbmRPbmUgcXVlcnkgd2l0aCBubyBtYXRjaGVzXG4gIHJldHVybiB0aGlzLmZpbmRPbmUoeyB1c2VybmFtZSB9KTtcbn07XG5cbnNjaGVtYS5tZXRob2RzLnZhbGlkYXRlUGFzc3dvcmQgPSBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKGNhbmRpZGF0ZVBhc3N3b3JkKSB7XG4gIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShjYW5kaWRhdGVQYXNzd29yZCwgdGhpcy5wYXNzd29yZCk7IC8vIEF3YWl0IHRoZSBiY3J5cHQgY29tcGFyaXNvblxuXG4gIGlmICghaXNWYWxpZCkge1xuICAgIHRoaXMuZmFpbGVkTG9naW5BdHRlbXB0cyArPSAxO1xuICAgIHRoaXMubGFzdEZhaWxlZExvZ2luQXR0ZW1wdCA9IG5ldyBEYXRlKCk7XG4gICAgYXdhaXQgdGhpcy5zYXZlKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5mYWlsZWRMb2dpbkF0dGVtcHRzID0gMDtcbiAgICB0aGlzLmxhc3RGYWlsZWRMb2dpbkF0dGVtcHQgPSBudWxsO1xuICAgIGF3YWl0IHRoaXMuc2F2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIGlzVmFsaWQ7XG59O1xuXG5zY2hlbWEubWV0aG9kcy52YWxpZGF0ZUxvY2tvdXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUxvY2tvdXQoKSB7XG4gIGNvbnN0IGxvY2tvdXRUaW1lID0gbmV3IERhdGUodGhpcy5sYXN0RmFpbGVkTG9naW5BdHRlbXB0KTtcbiAgbG9ja291dFRpbWUuc2V0TWludXRlcyhsb2Nrb3V0VGltZS5nZXRNaW51dGVzKCkgKyAxNSk7XG5cbiAgcmV0dXJuIHRoaXMuZmFpbGVkTG9naW5BdHRlbXB0cyA+PSA1ICYmIG5ldyBEYXRlKCkgPCBsb2Nrb3V0VGltZTtcbn1cblxuXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWwoJ1VzZXInLCBzY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5pbXBvcnQgUm9sZSBmcm9tICcuL1JvbGUnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vRXZlbnQnO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vQ2FsZW5kYXInO1xuaW1wb3J0IFJlZnJlc2hUb2tlbiBmcm9tICcuL1JlZnJlc2hUb2tlbic7XG5cbmNvbnN0IGRiID0ge1xuICBtb25nb29zZSxcbiAgVXNlcixcbiAgUm9sZSxcbiAgRXZlbnQsXG4gIENhbGVuZGFyLFxuICBSZWZyZXNoVG9rZW4sXG4gIHJvbGVzOiBbJ3VzZXInLCAnYWRtaW4nLCAnbW9kZXJhdG9yJ11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRiO1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBhdXRoSnd0IH0gZnJvbSAnLi4vbWlkZGxld2FyZSc7XG5pbXBvcnQgQ2FsZW5kYXJDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL0NhbGVuZGFyQ29udHJvbGxlcic7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbi8vIFBPU1QgcmVxdWVzdCB0byBjcmVhdGUgY2FsZW5kYXJcbnJvdXRlci5wb3N0KCcvJywgW2F1dGhKd3QudmVyaWZ5VG9rZW5dLCBDYWxlbmRhckNvbnRyb2xsZXIuY3JlYXRlKTtcblxuLy8gUFVUIHJlcXVlc3QgdG8gdXBkYXRlIGNhbGVuZGFyXG5yb3V0ZXIucHV0KCcvOmNhbGVuZGFySWQnLCBbYXV0aEp3dC52ZXJpZnlUb2tlbiwgYXV0aEp3dC52ZXJpZnlVUklBdXRoXSwgQ2FsZW5kYXJDb250cm9sbGVyLnVwZGF0ZSk7XG5cbi8vcm91dGVyLmdldCgnLzp1c2VySWQnLCBDYWxlbmRhckNvbnRyb2xsZXIuZ2V0VXNlckNhbGVuZGFycyk7XG5cbi8vIERFTEVURSByZXF1ZXN0IHRvIGRlbGV0ZSBjYWxlbmRhclxucm91dGVyLmRlbGV0ZSgnLzpjYWxlbmRhcklkJywgW2F1dGhKd3QudmVyaWZ5VG9rZW4sIGF1dGhKd3QudmVyaWZ5VVJJQXV0aF0sIENhbGVuZGFyQ29udHJvbGxlci5kZWxldGUpO1xuXG4vLyBQVVQgcmVxdWVzdCB0byB1cGRhdGUgY2FsZW5kYXIgc2V0dGluZ3NcbnJvdXRlci5wdXQoJy86Y2FsZW5kYXJJZC9zZXR0aW5ncycsIFthdXRoSnd0LnZlcmlmeVRva2VuLCBhdXRoSnd0LnZlcmlmeVVSSUF1dGhdLCBDYWxlbmRhckNvbnRyb2xsZXIudXBkYXRlU2V0dGluZ3MpO1xuXG5yb3V0ZXIucG9zdCgnLzpjYWxlbmRhcklkL3NoYXJlJywgQ2FsZW5kYXJDb250cm9sbGVyLnNoYXJlQ2FsZW5kYXIpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgYXV0aEp3dCB9IGZyb20gJy4uL21pZGRsZXdhcmUnO1xuaW1wb3J0IEV2ZW50Q29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9FdmVudENvbnRyb2xsZXInO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4vLyBQT1NUIHJlcXVlc3QgdG8gY3JlYXRlIGV2ZW50XG5yb3V0ZXIucG9zdCgnLycsIFthdXRoSnd0LnZlcmlmeVRva2VuXSwgRXZlbnRDb250cm9sbGVyLmNyZWF0ZSk7XG5cbi8vIEdFVCByZXF1ZXN0IHRvIGdldCB1c2VyIGV2ZW50c1xucm91dGVyLmdldCgnL3VzZXInLCBbYXV0aEp3dC52ZXJpZnlUb2tlbl0sIEV2ZW50Q29udHJvbGxlci5nZXRVc2VyRXZlbnRzKTtcblxuLy8gUFVUIHJlcXVlc3QgdG8gdXBkYXRlIGV2ZW50XG5yb3V0ZXIucHV0KCcvOmV2ZW50SWQnLCBbYXV0aEp3dC52ZXJpZnlUb2tlbiwgYXV0aEp3dC52ZXJpZnlVUklBdXRoXSwgRXZlbnRDb250cm9sbGVyLnVwZGF0ZSk7XG5cbi8vIERFTEVURSByZXF1ZXN0IHRvIGRlbGV0ZSBldmVudFxucm91dGVyLmRlbGV0ZSgnLzpldmVudElkJywgW2F1dGhKd3QudmVyaWZ5VG9rZW4sIGF1dGhKd3QudmVyaWZ5VVJJQXV0aF0sIEV2ZW50Q29udHJvbGxlci5kZWxldGUpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB1c2VyUm91dGVyIGZyb20gJy4vdXNlclJvdXRlcic7XG5pbXBvcnQgY2FsZW5kYXJSb3V0ZXIgZnJvbSAnLi9jYWxlbmRhclJvdXRlcic7XG5pbXBvcnQgZXZlbnRSb3V0ZXIgZnJvbSAnLi9ldmVudFJvdXRlcic7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci51c2UoJy91c2VycycsIHVzZXJSb3V0ZXIpO1xucm91dGVyLnVzZSgnL2NhbGVuZGFycycsIGNhbGVuZGFyUm91dGVyKTtcbnJvdXRlci51c2UoJy9ldmVudHMnLCBldmVudFJvdXRlcik7XG5cblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGF1dGhKd3QsIHZlcmlmeVJlZ2lzdHJhdGlvbiB9IGZyb20gJy4uL21pZGRsZXdhcmUnO1xuaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuLy8gUE9TVCByZXF1ZXN0IHRvIHJlZ2lzdGVyIHVzZXJcbnJvdXRlci5wb3N0KFxuICAnL3JlZ2lzdGVyJyxcbiAgW3ZlcmlmeVJlZ2lzdHJhdGlvbi5jaGVja0R1cGxpY2F0ZVVzZXJuYW1lLCB2ZXJpZnlSZWdpc3RyYXRpb24uY2hlY2tVc2VybmFtZUxvbmdFbm91Z2gsIHZlcmlmeVJlZ2lzdHJhdGlvbi5jaGVja1Bhc3N3b3JkQ29tcGxleEVub3VnaCwgdmVyaWZ5UmVnaXN0cmF0aW9uLmNoZWNrUm9sZXNFeGlzdF0sXG4gIFtVc2VyQ29udHJvbGxlci5yZWdpc3RlciwgVXNlckNvbnRyb2xsZXIubG9naW5dXG4pO1xuXG4vLyBQT1NUIHJlcXVlc3QgdG8gbG9naW4gdXNlciAocmV0dXJucyB1c2VyIG9iamVjdClcbnJvdXRlci5wb3N0KCcvbG9naW4nLCBVc2VyQ29udHJvbGxlci5sb2dpbik7XG5cbi8vIFBPU1QgcmVxdWVzdCB0byByZWZyZXNoIHRva2VuXG5yb3V0ZXIucG9zdCgnL3JlZnJlc2h0b2tlbicsIFVzZXJDb250cm9sbGVyLnJlZnJlc2hUb2tlbik7XG5cbi8vIFBVVCByZXF1ZXN0IHRvIHVwZGF0ZSB1c2VyXG5yb3V0ZXIucHV0KCcvOnVzZXJJZCcsIFthdXRoSnd0LnZlcmlmeVRva2VuLCBhdXRoSnd0LnZlcmlmeVVSSUF1dGhdLCBVc2VyQ29udHJvbGxlci51cGRhdGUpO1xuXG5yb3V0ZXIuZ2V0KCcvdXNlcnMvOnVzZXJJZCcsIFVzZXJDb250cm9sbGVyLmdldFVzZXJzKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIiwiaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuY29uc29sZS5sb2coYERPVEVOVl9DT05GSUdfUEFUSDogJHtwcm9jZXNzLmVudi5ET1RFTlZfQ09ORklHX1BBVEh9YCk7XG5kb3RlbnYuY29uZmlnKHsgcGF0aDogcHJvY2Vzcy5lbnYuRE9URU5WX0NPTkZJR19QQVRIIHx8ICcuZW52LmRldmVsb3BtZW50JyB9KTtcblxuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XG5cbmltcG9ydCBkYiBmcm9tICcuL2RiL2Nvbm5lY3Rpb24uanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcnMvaW5kZXguanMnO1xuaW1wb3J0IHsgVXNlckZhY2luZ0Vycm9yLCBEYXRhYmFzZUVycm9yIH0gZnJvbSAnLi91dGlscy9iYXNlRXJyb3JzLmpzJztcblxuY29uc3QgQlVJTERfRElSID0gX19kaXJuYW1lO1xuY29uc3QgSFRNTF9GSUxFID0gcGF0aC5yZXNvbHZlKEJVSUxEX0RJUiwgJ2luZGV4Lmh0bWwnKTtcbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDE7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb3JzKCkpO1xuXG4vLyBzdXBwb3J0IGRhdGEgZnJvbSBQT1NUIHJlcXVlc3RzXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcblxuLy8gc2VydmUgc3RhdGljIGZpbGVzXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKEJVSUxEX0RJUikpO1xuXG4vLyBVc2UgQVBJIHJvdXRlc1xuYXBwLnVzZSgnL2FwaS92MScsIHJvdXRlcik7XG5cbmFwcC5nZXQoJy9oZWxsbycsIChyZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCgnSGVsbG8sIFdvcmxkIScpO1xufSk7XG5cblxuXG5cbmFwcC5nZXQoJyonLCAocmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmRGaWxlKEhUTUxfRklMRSk7XG59KTtcblxuLy8gR2xvYmFsIGVycm9yIGhhbmRsZXJcbmFwcC51c2UoZnVuY3Rpb24gKGVyciwgcmVxLCByZXMsIG5leHQpIHtcbiAgcmVzLmhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICBjb25zdCBzdGF0dXMgPSBlcnIuc3RhdHVzIHx8IDQwMDtcblxuICBjb25zdCByZXNwb25zZSA9IHtcbiAgICBuYW1lOiBlcnIubmFtZSxcbiAgICBtZXNzYWdlOiBlcnIubWVzc2FnZSA/PyAnJ1xuICB9O1xuXG4gIGlmIChlcnIgaW5zdGFuY2VvZiBVc2VyRmFjaW5nRXJyb3IgfHwgZXJyIGluc3RhbmNlb2YgRGF0YWJhc2VFcnJvcikge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGVycikpIHtcbiAgICAgIHJlc3BvbnNlW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXMuc3RhdHVzKHN0YXR1cykuc2VuZChyZXNwb25zZSk7XG59KTtcblxuY29uc29sZS5sb2coYFBPUlQ6ICR7cHJvY2Vzcy5lbnYuUE9SVH1gKTtcblxuYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBzZXJ2ZXIgc3RhcnRlZCBhdCBodHRwOi8vbG9jYWxob3N0OiR7UE9SVH1gKTtcbn0pO1xuIiwiaW1wb3J0IEh0dHBSZXNwb25zZSBmcm9tICcuLi91dGlscy9odHRwUmVzcG9uc2UnO1xuaW1wb3J0IHsgc3lzdGVtQ29sb3JzLCB1c2VyQ29sb3JzIH0gZnJvbSAnY29uZmlnL2FwcENvbmZpZyc7XG5cbmNsYXNzIENhbGVuZGFyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKG1vZGVsKSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB9XG5cbiAgY3JlYXRlID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgX29iaiA9IHtcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICB1c2VyX2lkOiBkYXRhLnVzZXJfaWQsXG4gICAgICAgIHNoYXJlZF93aXRoOiBkYXRhLnNoYXJlZF93aXRoXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RlbC5jcmVhdGUoX29iaik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0T25lID0gYXN5bmMgKGNhbGVuZGFySWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gTW9uZ29vc2UgcmV0dXJucyBudWxsIGZvciAuZmluZEJ5SWQgcXVlcnkgd2l0aCBubyBtYXRjaGVzXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkKGNhbGVuZGFySWQpO1xuXG4gICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIC8vIEdldCB1c2VyIGFuZCBzeXN0ZW0gY2FsZW5kYXJzXG4gIGdldFVzZXJDYWxlbmRhcnMgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuZmluZCh7XG4gICAgICAgICRvcjogW1xuICAgICAgICAgIHsgdXNlcl9pZDogeyAkaW46IFt1c2VySWQsICdzeXN0ZW0nXSB9IH0sXG4gICAgICAgICAgeyBzaGFyZWRfd2l0aDogdXNlcklkIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZSA9IGFzeW5jIChjYWxlbmRhcklkLCBkYXRhKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVwZGF0ZSA9IHtcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lXG4gICAgICB9O1xuXG4gICAgICAvLyBNb25nb29zZSByZXR1cm5zIHRoZSBtb2RpZmllZCBkb2N1bWVudCAob3IgbnVsbCkgZm9yIC5maW5kQnlJZEFuZFVwZGF0ZSBxdWVyeSB3aXRoIG9wdGlvbiAnbmV3OiB0cnVlJ1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kQnlJZEFuZFVwZGF0ZShjYWxlbmRhcklkLCB1cGRhdGUsIHsgbmV3OiB0cnVlIH0pO1xuXG4gICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIGRlbGV0ZSA9IGFzeW5jIChjYWxlbmRhcklkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIE1vbmdvb3NlIHJldHVybnMgdGhlIG1hdGNoaW5nIGRvY3VtZW50IChvciBudWxsKSBmb3IgLmZpbmRCeUlkQW5kRGVsZXRlIHF1ZXJ5XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkQW5kRGVsZXRlKGNhbGVuZGFySWQpO1xuXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcignQ2FsZW5kYXIgbm90IGZvdW5kJyk7XG5cbiAgICAgICAgZXJyb3Iuc3RhdHVzQ29kZSA9IDQwNDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQsIHsgZGVsZXRlZDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcblxuICBzaGFyZUNhbGVuZGFyID0gYXN5bmMgKGNhbGVuZGFySWQsIHVzZXJJZCkgPT4ge1xuICAgIHRyeSB7XG5cbiAgICAgIC8vIEZpbmQgdGhlIGNhbGVuZGFyXG4gICAgICBjb25zdCBjYWxlbmRhciA9IGF3YWl0IHRoaXMubW9kZWwuZmluZEJ5SWQoY2FsZW5kYXJJZCk7XG4gICAgICBpZiAoIWNhbGVuZGFyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FsZW5kYXIgbm90IGZvdW5kJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aGUgdXNlciB0byB0aGUgc2hhcmVkX3dpdGggYXJyYXlcbiAgICAgIGlmICghY2FsZW5kYXIuc2hhcmVkX3dpdGguaW5jbHVkZXModXNlcklkKSkge1xuICAgICAgICBjYWxlbmRhci5zaGFyZWRfd2l0aC5wdXNoKHVzZXJJZCk7XG4gICAgICAgIGF3YWl0IGNhbGVuZGFyLnNhdmUoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhbGVuZGFyO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhclNlcnZpY2U7XG4iLCJpbXBvcnQgSHR0cFJlc3BvbnNlIGZyb20gJy4uL3V0aWxzL2h0dHBSZXNwb25zZSc7XG5cbmNsYXNzIEV2ZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKG1vZGVsKSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB9XG5cbiAgY3JlYXRlID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RlbC5jcmVhdGUoZGF0YSk7XG5cbiAgICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKHJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0T25lID0gYXN5bmMgKGV2ZW50SWQpID0+IHtcbiAgICAvLyBNb25nb29zZSByZXR1cm5zIG51bGwgZm9yIC5maW5kQnlJZCBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkKGV2ZW50SWQpO1xuXG4gICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UocmVzdWx0KTtcbiAgfTtcblxuICBnZXRVc2VyRXZlbnRzID0gYXN5bmMgKGNhbGVuZGFySWRzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIE1vbmdvb3NlIHJldHVybnMgW10gZm9yIC5maW5kIHF1ZXJ5IHdpdGggbm8gbWF0Y2hlc1xuICAgICAgY29uc3QgZXZlbnRzID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kKHsgY2FsZW5kYXI6IHsgJGluOiBjYWxlbmRhcklkcyB9IH0pO1xuXG4gICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShldmVudHMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZSA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVwZGF0ZSA9IHtcbiAgICAgICAgLi4uZGF0YVxuICAgICAgfTtcblxuICAgICAgZGVsZXRlIHVwZGF0ZS5pZDtcblxuICAgICAgLy8gTW9uZ29vc2UgcmV0dXJucyB0aGUgbW9kaWZpZWQgZG9jdW1lbnQgKG9yIG51bGwpIGZvciAuZmluZEJ5SWRBbmRVcGRhdGUgcXVlcnkgd2l0aCBvcHRpb24gJ25ldzogdHJ1ZSdcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuZmluZEJ5SWRBbmRVcGRhdGUoZGF0YS5pZCwgdXBkYXRlLCB7IG5ldzogdHJ1ZSB9KTtcblxuICAgICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcblxuICBkZWxldGUgPSBhc3luYyAoaWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gTW9uZ29vc2UgcmV0dXJucyB0aGUgbWF0Y2hpbmcgZG9jdW1lbnQgKG9yIG51bGwpIGZvciAuZmluZEJ5SWRBbmREZWxldGUgcXVlcnlcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuZmluZEJ5SWRBbmREZWxldGUoaWQpO1xuXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcignRXZlbnQgbm90IGZvdW5kJyk7XG5cbiAgICAgICAgZXJyb3Iuc3RhdHVzQ29kZSA9IDQwNDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXN1bHQsIHsgZGVsZXRlZDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTZXJ2aWNlO1xuIiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBBdXRob3JpemF0aW9uRXJyb3IgfSBmcm9tICcuLi91dGlscy91c2VyRmFjaW5nRXJyb3JzJztcblxuY2xhc3MgUmVmcmVzaFRva2VuU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKG1vZGVsKSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB9XG5cbiAgY3JlYXRlID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleHBpcmVkQXQgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICBleHBpcmVkQXQuc2V0U2Vjb25kcyhleHBpcmVkQXQuZ2V0U2Vjb25kcygpICsgTnVtYmVyKHByb2Nlc3MuZW52LkpXVF9SRUZSRVNIX0VYUElSQVRJT04pKTtcblxuICAgICAgY29uc3QgX3Rva2VuID0gdXVpZHY0KCk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHRva2VuOiBfdG9rZW4sXG4gICAgICAgIHVzZXI6IHVzZXJJZCxcbiAgICAgICAgZXhwaXJ5RGF0ZTogZXhwaXJlZEF0LnRvSVNPU3RyaW5nKClcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuY3JlYXRlKGRhdGEpO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIGdldCA9IGFzeW5jIChyZXF1ZXN0VG9rZW4pID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gTW9uZ29vc2UgcmV0dXJucyBudWxsIGZvciAuZmluZE9uZSBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubW9kZWwuZmluZE9uZSh7IHRva2VuOiByZXF1ZXN0VG9rZW4gfSk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgdmVyaWZ5ID0gYXN5bmMgKHRva2VuKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLm1vZGVsLnZlcmlmeUV4cGlyYXRpb24odG9rZW4pKSB7XG4gICAgICAgIC8vIFJlZnJlc2ggdG9rZW4gZXhwaXJlZFxuICAgICAgICAvLyBNb25nb29zZSByZXR1cm5zIHRoZSBtYXRjaGluZyBkb2N1bWVudCAob3IgbnVsbCkgZm9yIC5maW5kQnlJZEFuZFJlbW92ZSBxdWVyeVxuICAgICAgICBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkQW5kUmVtb3ZlKHRva2VuLmlkLCB7XG4gICAgICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhyb3cgbmV3IEF1dGhvcml6YXRpb25FcnJvcignUmVmcmVzaCB0b2tlbiBleHBpcmVkJywgeyBlcnJvckNvZGU6ICdyZWZyZXNoVG9rZW4nIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZnJlc2hUb2tlblNlcnZpY2U7XG4iLCJpbXBvcnQgSHR0cFJlc3BvbnNlIGZyb20gJy4uL3V0aWxzL2h0dHBSZXNwb25zZSc7XG5cbmNsYXNzIFJvbGVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IobW9kZWwpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICBjcmVhdGUgPSBhc3luYyAobmFtZSkgPT4ge1xuICAgIGF3YWl0IHRoaXMubW9kZWwuY3JlYXRlKHsgbmFtZSB9KS50aGVuKChyb2xlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgQ3JlYXRlZCByb2xlOiAke3JvbGUubmFtZX1gKTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXQgPSBhc3luYyAocm9sZXMpID0+IHtcbiAgICAvLyBNb25nb29zZSByZXR1cm5zIFtdIGZvciAuZmluZCBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmQoeyBuYW1lOiB7ICRpbjogcm9sZXMgfSB9KTtcblxuICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKHJlc3VsdCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvbGVTZXJ2aWNlO1xuIiwiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IFJlZnJlc2hUb2tlblNlcnZpY2UgZnJvbSAnLi9SZWZyZXNoVG9rZW5TZXJ2aWNlJztcbmltcG9ydCBSb2xlU2VydmljZSBmcm9tICcuL1JvbGVTZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhvcml6YXRpb25FcnJvciwgTm90Rm91bmRFcnJvciB9IGZyb20gJy4uL3V0aWxzL3VzZXJGYWNpbmdFcnJvcnMnO1xuaW1wb3J0IEh0dHBSZXNwb25zZSBmcm9tICcuLi91dGlscy9odHRwUmVzcG9uc2UnO1xuXG5jbGFzcyBVc2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKG1vZGVsLCByZWZyZXNoVG9rZW5Nb2RlbCwgcm9sZU1vZGVsKSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMucmVmcmVzaFRva2VuU2VydmljZSA9IG5ldyBSZWZyZXNoVG9rZW5TZXJ2aWNlKHJlZnJlc2hUb2tlbk1vZGVsKTtcbiAgICB0aGlzLnJvbGVTZXJ2aWNlID0gbmV3IFJvbGVTZXJ2aWNlKHJvbGVNb2RlbCk7XG4gIH1cblxuICBjcmVhdGUgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1vZGVsLmNyZWF0ZShkYXRhKTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcblxuICAvLyBMb29rIHVwIHVzZXIsIHZhbGlkYXRlIHB3LCBjcmVhdGUgcmVmcmVzaCB0b2tlblxuICBsb2dpbiA9IGFzeW5jICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gTW9uZ29vc2UgcmV0dXJucyBudWxsIGZvciAuZmluZE9uZSBxdWVyeSB3aXRoIG5vIG1hdGNoZXNcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRPbmUoeyB1c2VybmFtZSB9KTtcblxuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIC8vIFVzZXIgbm90IGZvdW5kXG4gICAgICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKCdJbnZhbGlkIHVzZXJuYW1lJywgeyBlcnJvckNvZGU6ICd1c2VybmFtZScgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzTG9ja2VkT3V0ID0gdXNlci52YWxpZGF0ZUxvY2tvdXQoKTtcblxuICAgICAgaWYgKGlzTG9ja2VkT3V0KSB7XG4gICAgICAgIHRocm93IG5ldyBBdXRob3JpemF0aW9uRXJyb3IoJ0FjY291bnQgaXMgbG9ja2VkIG91dC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nLCB7IGVycm9yQ29kZTogJ2xvY2tvdXQnIH0pO1xuICAgICAgfVxuXG5cbiAgICAgIC8vIHByb2Nlc3MgbG9naW5cbiAgICAgIGNvbnN0IHZhbGlkYXRlZCA9IGF3YWl0IHVzZXIudmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCk7XG5cbiAgICAgIGlmICghdmFsaWRhdGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBBdXRob3JpemF0aW9uRXJyb3IoJ0ludmFsaWQgcGFzc3dvcmQnLCB7XG4gICAgICAgICAgZXJyb3JDb2RlOiAncGFzc3dvcmQnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBwYXNzd29yZCBpcyB2YWxpZCwgY3JlYXRlIEpXVCB0b2tlblxuICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBqd3Quc2lnbih7IGlkOiB1c2VyLl9pZCB9LCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUX0tFWSwge1xuICAgICAgICBleHBpcmVzSW46IE51bWJlcihwcm9jZXNzLmVudi5KV1RfRVhQSVJBVElPTilcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDcmVhdGUgcmVmcmVzaCB0b2tlblxuICAgICAgY29uc3QgcmVmcmVzaFRva2VuID0gYXdhaXQgdGhpcy5yZWZyZXNoVG9rZW5TZXJ2aWNlLmNyZWF0ZSh1c2VyLmlkKTtcblxuICAgICAgY29uc3QgcmVmcmVzaFRva2VuUmVzcG9uc2UgPSBuZXcgSHR0cFJlc3BvbnNlKHJlZnJlc2hUb2tlbik7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjY2Vzc1Rva2VuLFxuICAgICAgICByZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlblJlc3BvbnNlLmRhdGFcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0T25lID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xuICAgIC8vIFJldHJpZXZlIHVzZXIgZG9jIGFuZCBwb3B1bGF0ZSByZWZlcmVuY2VkIGZpZWxkc1xuICAgIC8vIE1vbmdvb3NlIHJldHVybnMgbnVsbCBmb3IgLmZpbmRCeUlkIHF1ZXJ5IHdpdGggbm8gbWF0Y2hlc1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kQnlJZCh1c2VySWQpLnBvcHVsYXRlKFsncm9sZXMnLCAnY2FsZW5kYXJTZXR0aW5ncy5jYWxlbmRhciddKTtcblxuICAgIGNvbnN0IGh0dHBSZXNwb25zZSA9IG5ldyBIdHRwUmVzcG9uc2UocmVzcG9uc2UpO1xuXG4gICAgY29uc3QgZmxhdHRlbmVkQ2FsZW5kYXJTZXR0aW5ncyA9IGh0dHBSZXNwb25zZS5kYXRhLmNhbGVuZGFyU2V0dGluZ3MubWFwKChlbnRyeSkgPT4gKHtcbiAgICAgIGlkOiBlbnRyeS5jYWxlbmRhci5pZCxcbiAgICAgIG5hbWU6IGVudHJ5LmNhbGVuZGFyLm5hbWUsXG4gICAgICB1c2VyX2lkOiBlbnRyeS5jYWxlbmRhci51c2VyX2lkLFxuICAgICAgdXNlckRlZmF1bHQ6IGVudHJ5LnVzZXJEZWZhdWx0LFxuICAgICAgdmlzaWJpbGl0eTogZW50cnkudmlzaWJpbGl0eSxcbiAgICAgIGNvbG9yOiBlbnRyeS5jb2xvcixcbiAgICAgIGlzU2hhcmVkOiBlbnRyeS5pc1NoYXJlZCxcbiAgICAgIHNoYXJlZFdpdGg6IGVudHJ5LmNhbGVuZGFyLnNoYXJlZFdpdGhcbiAgICB9KSk7XG5cbiAgICBodHRwUmVzcG9uc2UuZGF0YS5jYWxlbmRhclNldHRpbmdzID0gZmxhdHRlbmVkQ2FsZW5kYXJTZXR0aW5ncztcblxuICAgIHJldHVybiBodHRwUmVzcG9uc2UuZGF0YTtcbiAgfTtcblxuXG4gIGdldEFsbFVzZXJuYW1lcyA9IGFzeW5jICh1c2VySWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gUmV0cmlldmUgb25seSBgdXNlcm5hbWVgIGFuZCBgX2lkYCBmaWVsZHMgZm9yIGFsbCB1c2Vyc1xuICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmQoeyBfaWQ6IHsgJG5lOiB1c2VySWQgfSB9LCAndXNlcm5hbWUgX2lkJyk7XG5cblxuICAgICAgLy8gV3JhcCBpbiBhbiBIdHRwUmVzcG9uc2VcbiAgICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKHVzZXJzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcblxuICByZWZyZXNoVG9rZW4gPSBhc3luYyAocmVxdWVzdFRva2VuKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IGF3YWl0IHRoaXMucmVmcmVzaFRva2VuU2VydmljZS5nZXQocmVxdWVzdFRva2VuKTtcblxuICAgICAgaWYgKCFyZWZyZXNoVG9rZW4pIHtcbiAgICAgICAgLy8gUmVmcmVzaCB0b2tlbiBub3QgZm91bmRcbiAgICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kRXJyb3IoJ0ludmFsaWQgcmVxdWVzdCB0b2tlbicsIHsgZXJyb3JDb2RlOiAncmVmcmVzaFRva2VuJyB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gVGhyb3dzIGVycm9yIG9uIGV4cGlyZWQgcmVmcmVzaCB0b2tlblxuICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoVG9rZW5TZXJ2aWNlLnZlcmlmeShyZWZyZXNoVG9rZW4pO1xuXG4gICAgICAvLyBjcmVhdGUgbmV3IEpXVCB0b2tlblxuICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBqd3Quc2lnbih7IGlkOiByZWZyZXNoVG9rZW4udXNlci5faWQgfSwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVF9LRVksIHtcbiAgICAgICAgZXhwaXJlc0luOiBOdW1iZXIocHJvY2Vzcy5lbnYuSldUX0VYUElSQVRJT04pXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgICAgIGFjY2Vzc1Rva2VuXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShyZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgYXNzaWduUm9sZXMgPSBhc3luYyAodXNlciwgcm9sZU5hbWVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvbGVzID0gYXdhaXQgdGhpcy5yb2xlU2VydmljZS5nZXQocm9sZU5hbWVzKTtcblxuICAgICAgaWYgKCFyb2xlcy5kYXRhIHx8IHJvbGVzLmRhdGEubGVuZ3RoIDwgMSkge1xuICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFcnJvcignUm9sZShzKSBub3QgZm91bmQnLCB7IGVycm9yQ29kZTogJ3JvbGUnIH0pO1xuICAgICAgfVxuXG4gICAgICB1c2VyLnJvbGVzID0gcm9sZXMuZGF0YS5tYXAoKHJvbGUpID0+IHJvbGUuaWQpO1xuXG4gICAgICByZXR1cm4gYXdhaXQgdXNlci5zYXZlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlID0gYXN5bmMgKHVzZXJJZCwgZGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBNb25nb29zZSByZXR1cm5zIHRoZSBtb2RpZmllZCBkb2N1bWVudCAob3IgbnVsbCkgZm9yIC5maW5kQnlJZCBxdWVyeVxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMubW9kZWwuZmluZEJ5SWQodXNlcklkKTtcblxuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKCdObyBtYXRjaGluZyB1c2VyIGZvdW5kJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHVwZGF0ZSBwYXNzd29yZFxuICAgICAgaWYgKGRhdGEucGFzc3dvcmQpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkID0gYXdhaXQgdXNlci52YWxpZGF0ZVBhc3N3b3JkKGRhdGEucGFzc3dvcmQpO1xuXG4gICAgICAgIGlmICghdmFsaWRhdGVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEF1dGhvcml6YXRpb25FcnJvcignSW52YWxpZCBwYXNzd29yZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCB7IGVycm9yQ29kZTogJ3Bhc3N3b3JkJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVzZXIucGFzc3dvcmQgPSBkYXRhLm5ld1Bhc3N3b3JkIHx8ICcnO1xuICAgICAgfVxuXG4gICAgICAvLyB1cGRhdGUgdXNlcm5hbWVcbiAgICAgIGlmIChkYXRhLnVzZXJuYW1lKSB7XG4gICAgICAgIHVzZXIudXNlcm5hbWUgPSBkYXRhLnVzZXJuYW1lO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1c2VyLnNhdmUoKTtcblxuICAgICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGVDYWxlbmRhclNldHRpbmdzID0gYXN5bmMgKHVzZXJJZCwgZGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBnZXQgY2FsZW5kYXIgc2V0dGluZ3MgcHJvcGVydGllcyBmcm9tIG1vZGVsIHNjaGVtYVxuICAgICAgY29uc3QgY2FsZW5kYXJTZXR0aW5nc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLm1vZGVsLnNjaGVtYS50cmVlLmNhbGVuZGFyU2V0dGluZ3NbMF0pO1xuXG4gICAgICBjb25zdCBkaWZmZWREYXRhID0ge307XG5cbiAgICAgIGNhbGVuZGFyU2V0dGluZ3NLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBkaWZmZWREYXRhW2tleV0gPSBkYXRhW2tleV07XG4gICAgICB9KTtcblxuICAgICAgT2JqZWN0LmtleXMoZGlmZmVkRGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChkaWZmZWREYXRhW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRlbGV0ZSBkaWZmZWREYXRhW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB1cGRhdGUgPSB7fTtcblxuICAgICAgT2JqZWN0LmtleXMoZGlmZmVkRGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHVwZGF0ZVtgY2FsZW5kYXJTZXR0aW5ncy4kW2ldLiR7a2V5fWBdID0gZGlmZmVkRGF0YVtrZXldO1xuICAgICAgfSk7XG5cblxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMubW9kZWwuZmluZE9uZUFuZFVwZGF0ZShcbiAgICAgICAgeyBfaWQ6IHVzZXJJZCB9LFxuICAgICAgICB7ICRzZXQ6IHVwZGF0ZSB9LFxuICAgICAgICB7IGFycmF5RmlsdGVyczogW3sgJ2kuY2FsZW5kYXInOiBkYXRhLmlkIH1dLCBuZXc6IHRydWUgfVxuICAgICAgKTtcblxuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKGBVcGRhdGUgZmFpbGVkIHdpdGggdXNlciBpZDogJHt1c2VySWR9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGh0dHBSZXNwb25zZSA9IG5ldyBIdHRwUmVzcG9uc2UodXNlci5jYWxlbmRhclNldHRpbmdzKTtcblxuICAgICAgY29uc3QgZmxhdHRlbmVkQ2FsZW5kYXJTZXR0aW5ncyA9IGh0dHBSZXNwb25zZS5kYXRhLm1hcCgoZW50cnkpID0+ICh7XG4gICAgICAgIGlkOiBlbnRyeS5jYWxlbmRhcixcbiAgICAgICAgdXNlckRlZmF1bHQ6IGVudHJ5LnVzZXJEZWZhdWx0LFxuICAgICAgICB2aXNpYmlsaXR5OiBlbnRyeS52aXNpYmlsaXR5LFxuICAgICAgICBjb2xvcjogZW50cnkuY29sb3JcbiAgICAgIH0pKTtcblxuICAgICAgaHR0cFJlc3BvbnNlLmRhdGEgPSBmbGF0dGVuZWRDYWxlbmRhclNldHRpbmdzO1xuXG4gICAgICByZXR1cm4gaHR0cFJlc3BvbnNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZVNoYXJlZENhbGVuZGFyU2V0dGluZ3MgPSBhc3luYyAodXNlcklkLCBjYWxlbmRhcklkLCB1c2VyRGVmYXVsdCwgdmlzaWJpbGl0eSwgY29sb3IsIGlzU2hhcmVkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkKHVzZXJJZCk7XG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIG5vdCBmb3VuZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIG5ldyBjYWxlbmRhciBzZXR0aW5nIHRvIGFkZCB0byB0aGUgdXNlcidzIGNhbGVuZGFyU2V0dGluZ3NcbiAgICAgIGNvbnN0IG5ld0NhbGVuZGFyU2V0dGluZyA9IHtcbiAgICAgICAgY2FsZW5kYXI6IGNhbGVuZGFySWQsXG4gICAgICAgIHVzZXJEZWZhdWx0LFxuICAgICAgICB2aXNpYmlsaXR5LFxuICAgICAgICBjb2xvcixcbiAgICAgICAgaXNTaGFyZWQ6IHRydWVcbiAgICAgIH07XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSBjYWxlbmRhciBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgdXNlcidzIHNldHRpbmdzXG4gICAgICBjb25zdCBleGlzdGluZ0NhbGVuZGFyID0gdXNlci5jYWxlbmRhclNldHRpbmdzLmZpbmQoXG4gICAgICAgIChlbnRyeSkgPT4gZW50cnkuY2FsZW5kYXIgPT09IGNhbGVuZGFySWRcbiAgICAgICk7XG5cbiAgICAgIGlmICghZXhpc3RpbmdDYWxlbmRhcikge1xuICAgICAgICB1c2VyLmNhbGVuZGFyU2V0dGluZ3MucHVzaChuZXdDYWxlbmRhclNldHRpbmcpO1xuXG4gICAgICAgIHVzZXIubm90aWZpY2F0aW9ucy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnaW5mbycsXG4gICAgICAgICAgbWVzc2FnZTogYEEgbmV3IHNoYXJlZCBjYWxlbmRhciB3aXRoIElEICR7Y2FsZW5kYXJJZH0gaGFzIGJlZW4gYWRkZWQuYCxcbiAgICAgICAgICByZWFkOiBmYWxzZSxcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKClcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBhd2FpdCB1c2VyLnNhdmUoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTZXJ2aWNlO1xuIiwiY2xhc3MgQXBwbGljYXRpb25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgfVxufVxuXG5jbGFzcyBEYXRhYmFzZUVycm9yIGV4dGVuZHMgQXBwbGljYXRpb25FcnJvciB7fVxuXG5jbGFzcyBVc2VyRmFjaW5nRXJyb3IgZXh0ZW5kcyBBcHBsaWNhdGlvbkVycm9yIHt9XG5cbmV4cG9ydCB7IEFwcGxpY2F0aW9uRXJyb3IsIERhdGFiYXNlRXJyb3IsIFVzZXJGYWNpbmdFcnJvciB9O1xuIiwiaW1wb3J0IHsgRGF0YWJhc2VFcnJvciB9IGZyb20gJy4vYmFzZUVycm9ycyc7XG5cbmNsYXNzIER1cGxpY2F0ZUtleUVycm9yIGV4dGVuZHMgRGF0YWJhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucykpIHtcbiAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzdGF0dXNDb2RlKCkge1xuICAgIHJldHVybiA0MDk7XG4gIH1cblxuICBnZXQgbW9uZ29FcnJvckNvZGUoKSB7XG4gICAgcmV0dXJuIDExMDAwO1xuICB9XG59XG5cbmV4cG9ydCB7IER1cGxpY2F0ZUtleUVycm9yIH07XG4iLCJjb25zdCBkZWZhdWx0RXhjbHVzaW9uc0Zyb21SZXNwb25zZSA9IFsnX192JywgJ3Bhc3N3b3JkJ107XG5cbmNsYXNzIEh0dHBSZXNwb25zZSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIG9wdGlvbnMgPSB7IHN0YXR1c0NvZGU6IDIwMCwgZGVsZXRlZDogbnVsbCB9KSB7XG4gICAgdGhpcy5zdGF0dXNDb2RlID0gb3B0aW9ucy5zdGF0dXNDb2RlIHx8IDIwMDtcbiAgICBsZXQgZmlsdGVyZWREYXRhID0gZGF0YTtcblxuICAgIC8vIGhhbmRsZXMgSlMgYXJyYXlzIG9yIG9iamVjdHNcbiAgICBpZiAodHlwZW9mIGZpbHRlcmVkRGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZpbHRlcmVkRGF0YSA9IHRoaXMuZmlsdGVyRGF0YShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZpbHRlcmVkRGF0YSkpKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZGVsZXRlZCkge1xuICAgICAgdGhpcy5kZWxldGVkID0gb3B0aW9ucy5kZWxldGVkO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXJlZERhdGEpKSB7XG4gICAgICB0aGlzLmRhdGEgPSBbLi4uZmlsdGVyZWREYXRhXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaWx0ZXJlZERhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLmRhdGEgPSB7IC4uLmZpbHRlcmVkRGF0YSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckRhdGEgPSAoZGF0YSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBkYXRhLm1hcCgoeCwgaW5kZXgpID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMoeCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgaWYgKGRlZmF1bHRFeGNsdXNpb25zRnJvbVJlc3BvbnNlLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhW2luZGV4XVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoa2V5ID09PSAnX2lkJykge1xuICAgICAgICAgICAgZGF0YVtpbmRleF1bJ2lkJ10gPSBkYXRhW2luZGV4XVtrZXldO1xuICAgICAgICAgICAgZGVsZXRlIGRhdGFbaW5kZXhdW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGhhbmRsZSBuZXN0ZWQgcHJvcGVydGllcyByZWN1cnNpdmVseVxuICAgICAgICAgIGlmIChrZXkgPT09ICdjYWxlbmRhclNldHRpbmdzJyB8fCBrZXkgPT09ICdjYWxlbmRhcicgfHwga2V5ID09PSAncm9sZXMnKSB7XG4gICAgICAgICAgICBkYXRhW2luZGV4XVtrZXldID0gdGhpcy5maWx0ZXJEYXRhKGRhdGFbaW5kZXhdW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChkZWZhdWx0RXhjbHVzaW9uc0Zyb21SZXNwb25zZS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5ID09PSAnX2lkJykge1xuICAgICAgICAgIGRhdGFbJ2lkJ10gPSBkYXRhW2tleV07XG4gICAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgICAgICAvLyBoYW5kbGUgbmVzdGVkIHByb3BlcnRpZXMgcmVjdXJzaXZlbHlcbiAgICAgICAgaWYgKGtleSA9PT0gJ2NhbGVuZGFyU2V0dGluZ3MnIHx8IGtleSA9PT0gJ2NhbGVuZGFyJyB8fCBrZXkgPT09ICdyb2xlcycpIHtcbiAgICAgICAgICBkYXRhW2tleV0gPSB0aGlzLmZpbHRlckRhdGEoZGF0YVtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIdHRwUmVzcG9uc2U7XG4iLCJpbXBvcnQgeyBVc2VyRmFjaW5nRXJyb3IgfSBmcm9tICcuL2Jhc2VFcnJvcnMnO1xuXG5jbGFzcyBCYWRSZXF1ZXN0RXJyb3IgZXh0ZW5kcyBVc2VyRmFjaW5nRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpKSB7XG4gICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgc3RhdHVzQ29kZSgpIHtcbiAgICByZXR1cm4gNDAwO1xuICB9XG59XG5cbmNsYXNzIE5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBVc2VyRmFjaW5nRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpKSB7XG4gICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgc3RhdHVzQ29kZSgpIHtcbiAgICByZXR1cm4gNDA0O1xuICB9XG59XG5cbmNsYXNzIEF1dGhvcml6YXRpb25FcnJvciBleHRlbmRzIFVzZXJGYWNpbmdFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucykpIHtcbiAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzdGF0dXNDb2RlKCkge1xuICAgIHJldHVybiA0MDE7XG4gIH1cbn1cblxuZXhwb3J0IHsgQmFkUmVxdWVzdEVycm9yLCBOb3RGb3VuZEVycm9yLCBBdXRob3JpemF0aW9uRXJyb3IgfTtcbiIsImNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuY29uc3Qgb3MgPSByZXF1aXJlKCdvcycpXG5jb25zdCBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKVxuY29uc3QgcGFja2FnZUpzb24gPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKVxuXG5jb25zdCB2ZXJzaW9uID0gcGFja2FnZUpzb24udmVyc2lvblxuXG5jb25zdCBMSU5FID0gLyg/Ol58XilcXHMqKD86ZXhwb3J0XFxzKyk/KFtcXHcuLV0rKSg/Olxccyo9XFxzKj98Olxccys/KShcXHMqJyg/OlxcXFwnfFteJ10pKid8XFxzKlwiKD86XFxcXFwifFteXCJdKSpcInxcXHMqYCg/OlxcXFxgfFteYF0pKmB8W14jXFxyXFxuXSspP1xccyooPzojLiopPyg/OiR8JCkvbWdcblxuLy8gUGFyc2Ugc3JjIGludG8gYW4gT2JqZWN0XG5mdW5jdGlvbiBwYXJzZSAoc3JjKSB7XG4gIGNvbnN0IG9iaiA9IHt9XG5cbiAgLy8gQ29udmVydCBidWZmZXIgdG8gc3RyaW5nXG4gIGxldCBsaW5lcyA9IHNyYy50b1N0cmluZygpXG5cbiAgLy8gQ29udmVydCBsaW5lIGJyZWFrcyB0byBzYW1lIGZvcm1hdFxuICBsaW5lcyA9IGxpbmVzLnJlcGxhY2UoL1xcclxcbj8vbWcsICdcXG4nKVxuXG4gIGxldCBtYXRjaFxuICB3aGlsZSAoKG1hdGNoID0gTElORS5leGVjKGxpbmVzKSkgIT0gbnVsbCkge1xuICAgIGNvbnN0IGtleSA9IG1hdGNoWzFdXG5cbiAgICAvLyBEZWZhdWx0IHVuZGVmaW5lZCBvciBudWxsIHRvIGVtcHR5IHN0cmluZ1xuICAgIGxldCB2YWx1ZSA9IChtYXRjaFsyXSB8fCAnJylcblxuICAgIC8vIFJlbW92ZSB3aGl0ZXNwYWNlXG4gICAgdmFsdWUgPSB2YWx1ZS50cmltKClcblxuICAgIC8vIENoZWNrIGlmIGRvdWJsZSBxdW90ZWRcbiAgICBjb25zdCBtYXliZVF1b3RlID0gdmFsdWVbMF1cblxuICAgIC8vIFJlbW92ZSBzdXJyb3VuZGluZyBxdW90ZXNcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL14oWydcImBdKShbXFxzXFxTXSopXFwxJC9tZywgJyQyJylcblxuICAgIC8vIEV4cGFuZCBuZXdsaW5lcyBpZiBkb3VibGUgcXVvdGVkXG4gICAgaWYgKG1heWJlUXVvdGUgPT09ICdcIicpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxcXG4vZywgJ1xcbicpXG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcXFxyL2csICdcXHInKVxuICAgIH1cblxuICAgIC8vIEFkZCB0byBvYmplY3RcbiAgICBvYmpba2V5XSA9IHZhbHVlXG4gIH1cblxuICByZXR1cm4gb2JqXG59XG5cbmZ1bmN0aW9uIF9wYXJzZVZhdWx0IChvcHRpb25zKSB7XG4gIGNvbnN0IHZhdWx0UGF0aCA9IF92YXVsdFBhdGgob3B0aW9ucylcblxuICAvLyBQYXJzZSAuZW52LnZhdWx0XG4gIGNvbnN0IHJlc3VsdCA9IERvdGVudk1vZHVsZS5jb25maWdEb3RlbnYoeyBwYXRoOiB2YXVsdFBhdGggfSlcbiAgaWYgKCFyZXN1bHQucGFyc2VkKSB7XG4gICAgY29uc3QgZXJyID0gbmV3IEVycm9yKGBNSVNTSU5HX0RBVEE6IENhbm5vdCBwYXJzZSAke3ZhdWx0UGF0aH0gZm9yIGFuIHVua25vd24gcmVhc29uYClcbiAgICBlcnIuY29kZSA9ICdNSVNTSU5HX0RBVEEnXG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBoYW5kbGUgc2NlbmFyaW8gZm9yIGNvbW1hIHNlcGFyYXRlZCBrZXlzIC0gZm9yIHVzZSB3aXRoIGtleSByb3RhdGlvblxuICAvLyBleGFtcGxlOiBET1RFTlZfS0VZPVwiZG90ZW52Oi8vOmtleV8xMjM0QGRvdGVudnguY29tL3ZhdWx0Ly5lbnYudmF1bHQ/ZW52aXJvbm1lbnQ9cHJvZCxkb3RlbnY6Ly86a2V5Xzc4OTBAZG90ZW52eC5jb20vdmF1bHQvLmVudi52YXVsdD9lbnZpcm9ubWVudD1wcm9kXCJcbiAgY29uc3Qga2V5cyA9IF9kb3RlbnZLZXkob3B0aW9ucykuc3BsaXQoJywnKVxuICBjb25zdCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuXG4gIGxldCBkZWNyeXB0ZWRcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHRyeSB7XG4gICAgICAvLyBHZXQgZnVsbCBrZXlcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV0udHJpbSgpXG5cbiAgICAgIC8vIEdldCBpbnN0cnVjdGlvbnMgZm9yIGRlY3J5cHRcbiAgICAgIGNvbnN0IGF0dHJzID0gX2luc3RydWN0aW9ucyhyZXN1bHQsIGtleSlcblxuICAgICAgLy8gRGVjcnlwdFxuICAgICAgZGVjcnlwdGVkID0gRG90ZW52TW9kdWxlLmRlY3J5cHQoYXR0cnMuY2lwaGVydGV4dCwgYXR0cnMua2V5KVxuXG4gICAgICBicmVha1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBsYXN0IGtleVxuICAgICAgaWYgKGkgKyAxID49IGxlbmd0aCkge1xuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuICAgICAgLy8gdHJ5IG5leHQga2V5XG4gICAgfVxuICB9XG5cbiAgLy8gUGFyc2UgZGVjcnlwdGVkIC5lbnYgc3RyaW5nXG4gIHJldHVybiBEb3RlbnZNb2R1bGUucGFyc2UoZGVjcnlwdGVkKVxufVxuXG5mdW5jdGlvbiBfbG9nIChtZXNzYWdlKSB7XG4gIGNvbnNvbGUubG9nKGBbZG90ZW52QCR7dmVyc2lvbn1dW0lORk9dICR7bWVzc2FnZX1gKVxufVxuXG5mdW5jdGlvbiBfd2FybiAobWVzc2FnZSkge1xuICBjb25zb2xlLmxvZyhgW2RvdGVudkAke3ZlcnNpb259XVtXQVJOXSAke21lc3NhZ2V9YClcbn1cblxuZnVuY3Rpb24gX2RlYnVnIChtZXNzYWdlKSB7XG4gIGNvbnNvbGUubG9nKGBbZG90ZW52QCR7dmVyc2lvbn1dW0RFQlVHXSAke21lc3NhZ2V9YClcbn1cblxuZnVuY3Rpb24gX2RvdGVudktleSAob3B0aW9ucykge1xuICAvLyBwcmlvcml0aXplIGRldmVsb3BlciBkaXJlY3RseSBzZXR0aW5nIG9wdGlvbnMuRE9URU5WX0tFWVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLkRPVEVOVl9LRVkgJiYgb3B0aW9ucy5ET1RFTlZfS0VZLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gb3B0aW9ucy5ET1RFTlZfS0VZXG4gIH1cblxuICAvLyBzZWNvbmRhcnkgaW5mcmEgYWxyZWFkeSBjb250YWlucyBhIERPVEVOVl9LRVkgZW52aXJvbm1lbnQgdmFyaWFibGVcbiAgaWYgKHByb2Nlc3MuZW52LkRPVEVOVl9LRVkgJiYgcHJvY2Vzcy5lbnYuRE9URU5WX0tFWS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52LkRPVEVOVl9LRVlcbiAgfVxuXG4gIC8vIGZhbGxiYWNrIHRvIGVtcHR5IHN0cmluZ1xuICByZXR1cm4gJydcbn1cblxuZnVuY3Rpb24gX2luc3RydWN0aW9ucyAocmVzdWx0LCBkb3RlbnZLZXkpIHtcbiAgLy8gUGFyc2UgRE9URU5WX0tFWS4gRm9ybWF0IGlzIGEgVVJJXG4gIGxldCB1cmlcbiAgdHJ5IHtcbiAgICB1cmkgPSBuZXcgVVJMKGRvdGVudktleSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJ0VSUl9JTlZBTElEX1VSTCcpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignSU5WQUxJRF9ET1RFTlZfS0VZOiBXcm9uZyBmb3JtYXQuIE11c3QgYmUgaW4gdmFsaWQgdXJpIGZvcm1hdCBsaWtlIGRvdGVudjovLzprZXlfMTIzNEBkb3RlbnZ4LmNvbS92YXVsdC8uZW52LnZhdWx0P2Vudmlyb25tZW50PWRldmVsb3BtZW50JylcbiAgICAgIGVyci5jb2RlID0gJ0lOVkFMSURfRE9URU5WX0tFWSdcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIHRocm93IGVycm9yXG4gIH1cblxuICAvLyBHZXQgZGVjcnlwdCBrZXlcbiAgY29uc3Qga2V5ID0gdXJpLnBhc3N3b3JkXG4gIGlmICgha2V5KSB7XG4gICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdJTlZBTElEX0RPVEVOVl9LRVk6IE1pc3Npbmcga2V5IHBhcnQnKVxuICAgIGVyci5jb2RlID0gJ0lOVkFMSURfRE9URU5WX0tFWSdcbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIEdldCBlbnZpcm9ubWVudFxuICBjb25zdCBlbnZpcm9ubWVudCA9IHVyaS5zZWFyY2hQYXJhbXMuZ2V0KCdlbnZpcm9ubWVudCcpXG4gIGlmICghZW52aXJvbm1lbnQpIHtcbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0lOVkFMSURfRE9URU5WX0tFWTogTWlzc2luZyBlbnZpcm9ubWVudCBwYXJ0JylcbiAgICBlcnIuY29kZSA9ICdJTlZBTElEX0RPVEVOVl9LRVknXG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBHZXQgY2lwaGVydGV4dCBwYXlsb2FkXG4gIGNvbnN0IGVudmlyb25tZW50S2V5ID0gYERPVEVOVl9WQVVMVF8ke2Vudmlyb25tZW50LnRvVXBwZXJDYXNlKCl9YFxuICBjb25zdCBjaXBoZXJ0ZXh0ID0gcmVzdWx0LnBhcnNlZFtlbnZpcm9ubWVudEtleV0gLy8gRE9URU5WX1ZBVUxUX1BST0RVQ1RJT05cbiAgaWYgKCFjaXBoZXJ0ZXh0KSB7XG4gICAgY29uc3QgZXJyID0gbmV3IEVycm9yKGBOT1RfRk9VTkRfRE9URU5WX0VOVklST05NRU5UOiBDYW5ub3QgbG9jYXRlIGVudmlyb25tZW50ICR7ZW52aXJvbm1lbnRLZXl9IGluIHlvdXIgLmVudi52YXVsdCBmaWxlLmApXG4gICAgZXJyLmNvZGUgPSAnTk9UX0ZPVU5EX0RPVEVOVl9FTlZJUk9OTUVOVCdcbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIHJldHVybiB7IGNpcGhlcnRleHQsIGtleSB9XG59XG5cbmZ1bmN0aW9uIF92YXVsdFBhdGggKG9wdGlvbnMpIHtcbiAgbGV0IHBvc3NpYmxlVmF1bHRQYXRoID0gbnVsbFxuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMucGF0aCAmJiBvcHRpb25zLnBhdGgubGVuZ3RoID4gMCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMucGF0aCkpIHtcbiAgICAgIGZvciAoY29uc3QgZmlsZXBhdGggb2Ygb3B0aW9ucy5wYXRoKSB7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVwYXRoKSkge1xuICAgICAgICAgIHBvc3NpYmxlVmF1bHRQYXRoID0gZmlsZXBhdGguZW5kc1dpdGgoJy52YXVsdCcpID8gZmlsZXBhdGggOiBgJHtmaWxlcGF0aH0udmF1bHRgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcG9zc2libGVWYXVsdFBhdGggPSBvcHRpb25zLnBhdGguZW5kc1dpdGgoJy52YXVsdCcpID8gb3B0aW9ucy5wYXRoIDogYCR7b3B0aW9ucy5wYXRofS52YXVsdGBcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcG9zc2libGVWYXVsdFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJy5lbnYudmF1bHQnKVxuICB9XG5cbiAgaWYgKGZzLmV4aXN0c1N5bmMocG9zc2libGVWYXVsdFBhdGgpKSB7XG4gICAgcmV0dXJuIHBvc3NpYmxlVmF1bHRQYXRoXG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBfcmVzb2x2ZUhvbWUgKGVudlBhdGgpIHtcbiAgcmV0dXJuIGVudlBhdGhbMF0gPT09ICd+JyA/IHBhdGguam9pbihvcy5ob21lZGlyKCksIGVudlBhdGguc2xpY2UoMSkpIDogZW52UGF0aFxufVxuXG5mdW5jdGlvbiBfY29uZmlnVmF1bHQgKG9wdGlvbnMpIHtcbiAgX2xvZygnTG9hZGluZyBlbnYgZnJvbSBlbmNyeXB0ZWQgLmVudi52YXVsdCcpXG5cbiAgY29uc3QgcGFyc2VkID0gRG90ZW52TW9kdWxlLl9wYXJzZVZhdWx0KG9wdGlvbnMpXG5cbiAgbGV0IHByb2Nlc3NFbnYgPSBwcm9jZXNzLmVudlxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnByb2Nlc3NFbnYgIT0gbnVsbCkge1xuICAgIHByb2Nlc3NFbnYgPSBvcHRpb25zLnByb2Nlc3NFbnZcbiAgfVxuXG4gIERvdGVudk1vZHVsZS5wb3B1bGF0ZShwcm9jZXNzRW52LCBwYXJzZWQsIG9wdGlvbnMpXG5cbiAgcmV0dXJuIHsgcGFyc2VkIH1cbn1cblxuZnVuY3Rpb24gY29uZmlnRG90ZW52IChvcHRpb25zKSB7XG4gIGNvbnN0IGRvdGVudlBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJy5lbnYnKVxuICBsZXQgZW5jb2RpbmcgPSAndXRmOCdcbiAgY29uc3QgZGVidWcgPSBCb29sZWFuKG9wdGlvbnMgJiYgb3B0aW9ucy5kZWJ1ZylcblxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmVuY29kaW5nKSB7XG4gICAgZW5jb2RpbmcgPSBvcHRpb25zLmVuY29kaW5nXG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBfZGVidWcoJ05vIGVuY29kaW5nIGlzIHNwZWNpZmllZC4gVVRGLTggaXMgdXNlZCBieSBkZWZhdWx0JylcbiAgICB9XG4gIH1cblxuICBsZXQgb3B0aW9uUGF0aHMgPSBbZG90ZW52UGF0aF0gLy8gZGVmYXVsdCwgbG9vayBmb3IgLmVudlxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnBhdGgpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkob3B0aW9ucy5wYXRoKSkge1xuICAgICAgb3B0aW9uUGF0aHMgPSBbX3Jlc29sdmVIb21lKG9wdGlvbnMucGF0aCldXG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvblBhdGhzID0gW10gLy8gcmVzZXQgZGVmYXVsdFxuICAgICAgZm9yIChjb25zdCBmaWxlcGF0aCBvZiBvcHRpb25zLnBhdGgpIHtcbiAgICAgICAgb3B0aW9uUGF0aHMucHVzaChfcmVzb2x2ZUhvbWUoZmlsZXBhdGgpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEJ1aWxkIHRoZSBwYXJzZWQgZGF0YSBpbiBhIHRlbXBvcmFyeSBvYmplY3QgKGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm4gaXQpLiAgT25jZSB3ZSBoYXZlIHRoZSBmaW5hbFxuICAvLyBwYXJzZWQgZGF0YSwgd2Ugd2lsbCBjb21iaW5lIGl0IHdpdGggcHJvY2Vzcy5lbnYgKG9yIG9wdGlvbnMucHJvY2Vzc0VudiBpZiBwcm92aWRlZCkuXG4gIGxldCBsYXN0RXJyb3JcbiAgY29uc3QgcGFyc2VkQWxsID0ge31cbiAgZm9yIChjb25zdCBwYXRoIG9mIG9wdGlvblBhdGhzKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFNwZWNpZnlpbmcgYW4gZW5jb2RpbmcgcmV0dXJucyBhIHN0cmluZyBpbnN0ZWFkIG9mIGEgYnVmZmVyXG4gICAgICBjb25zdCBwYXJzZWQgPSBEb3RlbnZNb2R1bGUucGFyc2UoZnMucmVhZEZpbGVTeW5jKHBhdGgsIHsgZW5jb2RpbmcgfSkpXG5cbiAgICAgIERvdGVudk1vZHVsZS5wb3B1bGF0ZShwYXJzZWRBbGwsIHBhcnNlZCwgb3B0aW9ucylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgX2RlYnVnKGBGYWlsZWQgdG8gbG9hZCAke3BhdGh9ICR7ZS5tZXNzYWdlfWApXG4gICAgICB9XG4gICAgICBsYXN0RXJyb3IgPSBlXG4gICAgfVxuICB9XG5cbiAgbGV0IHByb2Nlc3NFbnYgPSBwcm9jZXNzLmVudlxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnByb2Nlc3NFbnYgIT0gbnVsbCkge1xuICAgIHByb2Nlc3NFbnYgPSBvcHRpb25zLnByb2Nlc3NFbnZcbiAgfVxuXG4gIERvdGVudk1vZHVsZS5wb3B1bGF0ZShwcm9jZXNzRW52LCBwYXJzZWRBbGwsIG9wdGlvbnMpXG5cbiAgaWYgKGxhc3RFcnJvcikge1xuICAgIHJldHVybiB7IHBhcnNlZDogcGFyc2VkQWxsLCBlcnJvcjogbGFzdEVycm9yIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyBwYXJzZWQ6IHBhcnNlZEFsbCB9XG4gIH1cbn1cblxuLy8gUG9wdWxhdGVzIHByb2Nlc3MuZW52IGZyb20gLmVudiBmaWxlXG5mdW5jdGlvbiBjb25maWcgKG9wdGlvbnMpIHtcbiAgLy8gZmFsbGJhY2sgdG8gb3JpZ2luYWwgZG90ZW52IGlmIERPVEVOVl9LRVkgaXMgbm90IHNldFxuICBpZiAoX2RvdGVudktleShvcHRpb25zKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gRG90ZW52TW9kdWxlLmNvbmZpZ0RvdGVudihvcHRpb25zKVxuICB9XG5cbiAgY29uc3QgdmF1bHRQYXRoID0gX3ZhdWx0UGF0aChvcHRpb25zKVxuXG4gIC8vIGRvdGVudktleSBleGlzdHMgYnV0IC5lbnYudmF1bHQgZmlsZSBkb2VzIG5vdCBleGlzdFxuICBpZiAoIXZhdWx0UGF0aCkge1xuICAgIF93YXJuKGBZb3Ugc2V0IERPVEVOVl9LRVkgYnV0IHlvdSBhcmUgbWlzc2luZyBhIC5lbnYudmF1bHQgZmlsZSBhdCAke3ZhdWx0UGF0aH0uIERpZCB5b3UgZm9yZ2V0IHRvIGJ1aWxkIGl0P2ApXG5cbiAgICByZXR1cm4gRG90ZW52TW9kdWxlLmNvbmZpZ0RvdGVudihvcHRpb25zKVxuICB9XG5cbiAgcmV0dXJuIERvdGVudk1vZHVsZS5fY29uZmlnVmF1bHQob3B0aW9ucylcbn1cblxuZnVuY3Rpb24gZGVjcnlwdCAoZW5jcnlwdGVkLCBrZXlTdHIpIHtcbiAgY29uc3Qga2V5ID0gQnVmZmVyLmZyb20oa2V5U3RyLnNsaWNlKC02NCksICdoZXgnKVxuICBsZXQgY2lwaGVydGV4dCA9IEJ1ZmZlci5mcm9tKGVuY3J5cHRlZCwgJ2Jhc2U2NCcpXG5cbiAgY29uc3Qgbm9uY2UgPSBjaXBoZXJ0ZXh0LnN1YmFycmF5KDAsIDEyKVxuICBjb25zdCBhdXRoVGFnID0gY2lwaGVydGV4dC5zdWJhcnJheSgtMTYpXG4gIGNpcGhlcnRleHQgPSBjaXBoZXJ0ZXh0LnN1YmFycmF5KDEyLCAtMTYpXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBhZXNnY20gPSBjcnlwdG8uY3JlYXRlRGVjaXBoZXJpdignYWVzLTI1Ni1nY20nLCBrZXksIG5vbmNlKVxuICAgIGFlc2djbS5zZXRBdXRoVGFnKGF1dGhUYWcpXG4gICAgcmV0dXJuIGAke2Flc2djbS51cGRhdGUoY2lwaGVydGV4dCl9JHthZXNnY20uZmluYWwoKX1gXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgaXNSYW5nZSA9IGVycm9yIGluc3RhbmNlb2YgUmFuZ2VFcnJvclxuICAgIGNvbnN0IGludmFsaWRLZXlMZW5ndGggPSBlcnJvci5tZXNzYWdlID09PSAnSW52YWxpZCBrZXkgbGVuZ3RoJ1xuICAgIGNvbnN0IGRlY3J5cHRpb25GYWlsZWQgPSBlcnJvci5tZXNzYWdlID09PSAnVW5zdXBwb3J0ZWQgc3RhdGUgb3IgdW5hYmxlIHRvIGF1dGhlbnRpY2F0ZSBkYXRhJ1xuXG4gICAgaWYgKGlzUmFuZ2UgfHwgaW52YWxpZEtleUxlbmd0aCkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdJTlZBTElEX0RPVEVOVl9LRVk6IEl0IG11c3QgYmUgNjQgY2hhcmFjdGVycyBsb25nIChvciBtb3JlKScpXG4gICAgICBlcnIuY29kZSA9ICdJTlZBTElEX0RPVEVOVl9LRVknXG4gICAgICB0aHJvdyBlcnJcbiAgICB9IGVsc2UgaWYgKGRlY3J5cHRpb25GYWlsZWQpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignREVDUllQVElPTl9GQUlMRUQ6IFBsZWFzZSBjaGVjayB5b3VyIERPVEVOVl9LRVknKVxuICAgICAgZXJyLmNvZGUgPSAnREVDUllQVElPTl9GQUlMRUQnXG4gICAgICB0aHJvdyBlcnJcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG4gIH1cbn1cblxuLy8gUG9wdWxhdGUgcHJvY2Vzcy5lbnYgd2l0aCBwYXJzZWQgdmFsdWVzXG5mdW5jdGlvbiBwb3B1bGF0ZSAocHJvY2Vzc0VudiwgcGFyc2VkLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgZGVidWcgPSBCb29sZWFuKG9wdGlvbnMgJiYgb3B0aW9ucy5kZWJ1ZylcbiAgY29uc3Qgb3ZlcnJpZGUgPSBCb29sZWFuKG9wdGlvbnMgJiYgb3B0aW9ucy5vdmVycmlkZSlcblxuICBpZiAodHlwZW9mIHBhcnNlZCAhPT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ09CSkVDVF9SRVFVSVJFRDogUGxlYXNlIGNoZWNrIHRoZSBwcm9jZXNzRW52IGFyZ3VtZW50IGJlaW5nIHBhc3NlZCB0byBwb3B1bGF0ZScpXG4gICAgZXJyLmNvZGUgPSAnT0JKRUNUX1JFUVVJUkVEJ1xuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gU2V0IHByb2Nlc3MuZW52XG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHBhcnNlZCkpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb2Nlc3NFbnYsIGtleSkpIHtcbiAgICAgIGlmIChvdmVycmlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICBwcm9jZXNzRW52W2tleV0gPSBwYXJzZWRba2V5XVxuICAgICAgfVxuXG4gICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgaWYgKG92ZXJyaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgX2RlYnVnKGBcIiR7a2V5fVwiIGlzIGFscmVhZHkgZGVmaW5lZCBhbmQgV0FTIG92ZXJ3cml0dGVuYClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfZGVidWcoYFwiJHtrZXl9XCIgaXMgYWxyZWFkeSBkZWZpbmVkIGFuZCB3YXMgTk9UIG92ZXJ3cml0dGVuYClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzRW52W2tleV0gPSBwYXJzZWRba2V5XVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBEb3RlbnZNb2R1bGUgPSB7XG4gIGNvbmZpZ0RvdGVudixcbiAgX2NvbmZpZ1ZhdWx0LFxuICBfcGFyc2VWYXVsdCxcbiAgY29uZmlnLFxuICBkZWNyeXB0LFxuICBwYXJzZSxcbiAgcG9wdWxhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMuY29uZmlnRG90ZW52ID0gRG90ZW52TW9kdWxlLmNvbmZpZ0RvdGVudlxubW9kdWxlLmV4cG9ydHMuX2NvbmZpZ1ZhdWx0ID0gRG90ZW52TW9kdWxlLl9jb25maWdWYXVsdFxubW9kdWxlLmV4cG9ydHMuX3BhcnNlVmF1bHQgPSBEb3RlbnZNb2R1bGUuX3BhcnNlVmF1bHRcbm1vZHVsZS5leHBvcnRzLmNvbmZpZyA9IERvdGVudk1vZHVsZS5jb25maWdcbm1vZHVsZS5leHBvcnRzLmRlY3J5cHQgPSBEb3RlbnZNb2R1bGUuZGVjcnlwdFxubW9kdWxlLmV4cG9ydHMucGFyc2UgPSBEb3RlbnZNb2R1bGUucGFyc2Vcbm1vZHVsZS5leHBvcnRzLnBvcHVsYXRlID0gRG90ZW52TW9kdWxlLnBvcHVsYXRlXG5cbm1vZHVsZS5leHBvcnRzID0gRG90ZW52TW9kdWxlXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChjYWNoZWRNb2R1bGUuZXJyb3IgIT09IHVuZGVmaW5lZCkgdGhyb3cgY2FjaGVkTW9kdWxlLmVycm9yO1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHR0cnkge1xuXHRcdHZhciBleGVjT3B0aW9ucyA9IHsgaWQ6IG1vZHVsZUlkLCBtb2R1bGU6IG1vZHVsZSwgZmFjdG9yeTogX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0sIHJlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18gfTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7IGhhbmRsZXIoZXhlY09wdGlvbnMpOyB9KTtcblx0XHRtb2R1bGUgPSBleGVjT3B0aW9ucy5tb2R1bGU7XG5cdFx0ZXhlY09wdGlvbnMuZmFjdG9yeS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBleGVjT3B0aW9ucy5yZXF1aXJlKTtcblx0fSBjYXRjaChlKSB7XG5cdFx0bW9kdWxlLmVycm9yID0gZTtcblx0XHR0aHJvdyBlO1xuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgZXhlY3V0aW9uIGludGVyY2VwdG9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBbXTtcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmh1ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1yRiA9ICgpID0+IChcIm1haW4uXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNvblwiKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzZWNiMzcxNjVhN2YyNzJlMTk3OFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgY3VycmVudE1vZHVsZURhdGEgPSB7fTtcbnZhciBpbnN0YWxsZWRNb2R1bGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jO1xuXG4vLyBtb2R1bGUgYW5kIHJlcXVpcmUgY3JlYXRpb25cbnZhciBjdXJyZW50Q2hpbGRNb2R1bGU7XG52YXIgY3VycmVudFBhcmVudHMgPSBbXTtcblxuLy8gc3RhdHVzXG52YXIgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzID0gW107XG52YXIgY3VycmVudFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4vLyB3aGlsZSBkb3dubG9hZGluZ1xudmFyIGJsb2NraW5nUHJvbWlzZXMgPSAwO1xudmFyIGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nID0gW107XG5cbi8vIFRoZSB1cGRhdGUgaW5mb1xudmFyIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzO1xudmFyIHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcztcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJEID0gY3VycmVudE1vZHVsZURhdGE7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaS5wdXNoKGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHZhciBtb2R1bGUgPSBvcHRpb25zLm1vZHVsZTtcblx0dmFyIHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKG9wdGlvbnMucmVxdWlyZSwgb3B0aW9ucy5pZCk7XG5cdG1vZHVsZS5ob3QgPSBjcmVhdGVNb2R1bGVIb3RPYmplY3Qob3B0aW9ucy5pZCwgbW9kdWxlKTtcblx0bW9kdWxlLnBhcmVudHMgPSBjdXJyZW50UGFyZW50cztcblx0bW9kdWxlLmNoaWxkcmVuID0gW107XG5cdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdG9wdGlvbnMucmVxdWlyZSA9IHJlcXVpcmU7XG59KTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkgPSB7fTtcblxuZnVuY3Rpb24gY3JlYXRlUmVxdWlyZShyZXF1aXJlLCBtb2R1bGVJZCkge1xuXHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblx0aWYgKCFtZSkgcmV0dXJuIHJlcXVpcmU7XG5cdHZhciBmbiA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG5cdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcblx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRzID0gaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzO1xuXHRcdFx0XHRpZiAocGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRwYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG5cdFx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG5cdFx0XHR9XG5cdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcblx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG5cdFx0XHRcdFx0cmVxdWVzdCArXG5cdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcblx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0KTtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdFx0fVxuXHRcdHJldHVybiByZXF1aXJlKHJlcXVlc3QpO1xuXHR9O1xuXHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gcmVxdWlyZVtuYW1lXTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXF1aXJlW25hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblx0Zm9yICh2YXIgbmFtZSBpbiByZXF1aXJlKSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXF1aXJlLCBuYW1lKSAmJiBuYW1lICE9PSBcImVcIikge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSkpO1xuXHRcdH1cblx0fVxuXHRmbi5lID0gZnVuY3Rpb24gKGNodW5rSWQsIGZldGNoUHJpb3JpdHkpIHtcblx0XHRyZXR1cm4gdHJhY2tCbG9ja2luZ1Byb21pc2UocmVxdWlyZS5lKGNodW5rSWQsIGZldGNoUHJpb3JpdHkpKTtcblx0fTtcblx0cmV0dXJuIGZuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2R1bGVIb3RPYmplY3QobW9kdWxlSWQsIG1lKSB7XG5cdHZhciBfbWFpbiA9IGN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQ7XG5cdHZhciBob3QgPSB7XG5cdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuXHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG5cdFx0X2FjY2VwdGVkRXJyb3JIYW5kbGVyczoge30sXG5cdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcblx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcblx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcblx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcblx0XHRfbWFpbjogX21haW4sXG5cdFx0X3JlcXVpcmVTZWxmOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IG1lLnBhcmVudHMuc2xpY2UoKTtcblx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IF9tYWluID8gdW5kZWZpbmVkIDogbW9kdWxlSWQ7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcblx0XHR9LFxuXG5cdFx0Ly8gTW9kdWxlIEFQSVxuXHRcdGFjdGl2ZTogdHJ1ZSxcblx0XHRhY2NlcHQ6IGZ1bmN0aW9uIChkZXAsIGNhbGxiYWNrLCBlcnJvckhhbmRsZXIpIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwW2ldXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcF0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkZWNsaW5lOiBmdW5jdGlvbiAoZGVwKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcblx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuXHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuXHRcdH0sXG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG5cdFx0XHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHNldFN0YXR1cyhcInJlYWR5XCIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdFx0Y2FzZSBcImNoZWNrXCI6XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG5cdFx0XHRcdGNhc2UgXCJhcHBseVwiOlxuXHRcdFx0XHRcdChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2goXG5cdFx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuXHRcdGNoZWNrOiBob3RDaGVjayxcblx0XHRhcHBseTogaG90QXBwbHksXG5cdFx0c3RhdHVzOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0aWYgKCFsKSByZXR1cm4gY3VycmVudFN0YXR1cztcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHZhciBpZHggPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcblx0XHRcdGlmIChpZHggPj0gMCkgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cblx0XHQvLyBpbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG5cdFx0ZGF0YTogY3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG5cdH07XG5cdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcblx0cmV0dXJuIGhvdDtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xuXHRjdXJyZW50U3RhdHVzID0gbmV3U3RhdHVzO1xuXHR2YXIgcmVzdWx0cyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuXHRcdHJlc3VsdHNbaV0gPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcbn1cblxuZnVuY3Rpb24gdW5ibG9jaygpIHtcblx0aWYgKC0tYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuXHRcdHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKGJsb2NraW5nUHJvbWlzZXMgPT09IDApIHtcblx0XHRcdFx0dmFyIGxpc3QgPSBibG9ja2luZ1Byb21pc2VzV2FpdGluZztcblx0XHRcdFx0YmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0bGlzdFtpXSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhY2tCbG9ja2luZ1Byb21pc2UocHJvbWlzZSkge1xuXHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdHNldFN0YXR1cyhcInByZXBhcmVcIik7XG5cdFx0LyogZmFsbHRocm91Z2ggKi9cblx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0YmxvY2tpbmdQcm9taXNlcysrO1xuXHRcdFx0cHJvbWlzZS50aGVuKHVuYmxvY2ssIHVuYmxvY2spO1xuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKSB7XG5cdGlmIChibG9ja2luZ1Byb21pc2VzID09PSAwKSByZXR1cm4gZm4oKTtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdFx0YmxvY2tpbmdQcm9taXNlc1dhaXRpbmcucHVzaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXNvbHZlKGZuKCkpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaG90Q2hlY2soYXBwbHlPblVwZGF0ZSkge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcblx0fVxuXHRyZXR1cm4gc2V0U3RhdHVzKFwiY2hlY2tcIilcblx0XHQudGhlbihfX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0pXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHVwZGF0ZSkge1xuXHRcdFx0aWYgKCF1cGRhdGUpIHtcblx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhhcHBseUludmFsaWRhdGVkTW9kdWxlcygpID8gXCJyZWFkeVwiIDogXCJpZGxlXCIpLnRoZW4oXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicHJlcGFyZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIHVwZGF0ZWRNb2R1bGVzID0gW107XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cblx0XHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKFxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1yQykucmVkdWNlKGZ1bmN0aW9uIChcblx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0a2V5XG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckNba2V5XShcblx0XHRcdFx0XHRcdFx0dXBkYXRlLmMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5yLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUubSxcblx0XHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGVkTW9kdWxlc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHJldHVybiBwcm9taXNlcztcblx0XHRcdFx0XHR9LCBbXSlcblx0XHRcdFx0KS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRyZXR1cm4gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKGFwcGx5T25VcGRhdGUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkoYXBwbHlPblVwZGF0ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicmVhZHlcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB1cGRhdGVkTW9kdWxlcztcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xufVxuXG5mdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcInJlYWR5XCIpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzIChzdGF0ZTogXCIgK1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0dXMgK1xuXHRcdFx0XHRcdFwiKVwiXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0YXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKTtcblxuXHR2YXIgcmVzdWx0cyA9IGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLm1hcChmdW5jdGlvbiAoaGFuZGxlcikge1xuXHRcdHJldHVybiBoYW5kbGVyKG9wdGlvbnMpO1xuXHR9KTtcblx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSB1bmRlZmluZWQ7XG5cblx0dmFyIGVycm9ycyA9IHJlc3VsdHNcblx0XHQubWFwKGZ1bmN0aW9uIChyKSB7XG5cdFx0XHRyZXR1cm4gci5lcnJvcjtcblx0XHR9KVxuXHRcdC5maWx0ZXIoQm9vbGVhbik7XG5cblx0aWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG5cdFx0cmV0dXJuIHNldFN0YXR1cyhcImFib3J0XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgZXJyb3JzWzBdO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG5cdHZhciBkaXNwb3NlUHJvbWlzZSA9IHNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG5cblx0cmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRpZiAocmVzdWx0LmRpc3Bvc2UpIHJlc3VsdC5kaXNwb3NlKCk7XG5cdH0pO1xuXG5cdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2Vcblx0dmFyIGFwcGx5UHJvbWlzZSA9IHNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG5cdHZhciBlcnJvcjtcblx0dmFyIHJlcG9ydEVycm9yID0gZnVuY3Rpb24gKGVycikge1xuXHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuXHR9O1xuXG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0cmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRpZiAocmVzdWx0LmFwcGx5KSB7XG5cdFx0XHR2YXIgbW9kdWxlcyA9IHJlc3VsdC5hcHBseShyZXBvcnRFcnJvcik7XG5cdFx0XHRpZiAobW9kdWxlcykge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChtb2R1bGVzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKFtkaXNwb3NlUHJvbWlzZSwgYXBwbHlQcm9taXNlXSkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcblx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJmYWlsXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGxpc3QpIHtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdFx0aWYgKGxpc3QuaW5kZXhPZihtb2R1bGVJZCkgPCAwKSBsaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiaWRsZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhcHBseUludmFsaWRhdGVkTW9kdWxlcygpIHtcblx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdGlmICghY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMpIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuLy8gXCIxXCIgbWVhbnMgXCJsb2FkZWRcIiwgb3RoZXJ3aXNlIG5vdCBsb2FkZWQgeWV0XG52YXIgaW5zdGFsbGVkQ2h1bmtzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX3JlcXVpcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfcmVxdWlyZSB8fCB7XG5cdFwibWFpblwiOiAxXG59O1xuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGNodW5rIGluc3RhbGwgZnVuY3Rpb24gbmVlZGVkXG5cbi8vIG5vIGNodW5rIGxvYWRpbmdcblxuLy8gbm8gZXh0ZXJuYWwgaW5zdGFsbCBjaHVua1xuXG5mdW5jdGlvbiBsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSB7XG5cdHZhciB1cGRhdGUgPSByZXF1aXJlKFwiLi9cIiArIF9fd2VicGFja19yZXF1aXJlX18uaHUoY2h1bmtJZCkpO1xuXHR2YXIgdXBkYXRlZE1vZHVsZXMgPSB1cGRhdGUubW9kdWxlcztcblx0dmFyIHJ1bnRpbWUgPSB1cGRhdGUucnVudGltZTtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiB1cGRhdGVkTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyh1cGRhdGVkTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IHVwZGF0ZWRNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdGlmKHVwZGF0ZWRNb2R1bGVzTGlzdCkgdXBkYXRlZE1vZHVsZXNMaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBjdXJyZW50VXBkYXRlUnVudGltZS5wdXNoKHJ1bnRpbWUpO1xufVxuXG52YXIgY3VycmVudFVwZGF0ZUNodW5rcztcbnZhciBjdXJyZW50VXBkYXRlO1xudmFyIGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGVSdW50aW1lO1xuZnVuY3Rpb24gYXBwbHlIYW5kbGVyKG9wdGlvbnMpIHtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikgZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uZi5yZXF1aXJlSG1yO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0gdW5kZWZpbmVkO1xuXHRmdW5jdGlvbiBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHModXBkYXRlTW9kdWxlSWQpIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjaGFpbjogW2lkXSxcblx0XHRcdFx0aWQ6IGlkXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG5cdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG5cdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG5cdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdGlmIChcblx0XHRcdFx0IW1vZHVsZSB8fFxuXHRcdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkICYmICFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWQpXG5cdFx0XHQpXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcblx0XHRcdFx0dmFyIHBhcmVudCA9IF9fd2VicGFja19yZXF1aXJlX18uY1twYXJlbnRJZF07XG5cdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcblx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuXHRcdFx0XHRxdWV1ZS5wdXNoKHtcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuXHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuXHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG5cdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuXHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcblx0XHR9XG5cdH1cblxuXHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuXHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG5cdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cblx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZShtb2R1bGUpIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIG1vZHVsZS5pZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuXHRcdCk7XG5cdH07XG5cblx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gY3VycmVudFVwZGF0ZSkge1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0XHR2YXIgbmV3TW9kdWxlRmFjdG9yeSA9IGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdO1xuXHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuXHRcdFx0dmFyIHJlc3VsdCA9IG5ld01vZHVsZUZhY3Rvcnlcblx0XHRcdFx0PyBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHMobW9kdWxlSWQpXG5cdFx0XHRcdDoge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdFx0fTtcblx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG5cdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcblx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcblx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuXHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuXHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGVycm9yOiBhYm9ydEVycm9yXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9BcHBseSkge1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IG5ld01vZHVsZUZhY3Rvcnk7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG5cdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcblx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjdXJyZW50VXBkYXRlID0gdW5kZWZpbmVkO1xuXG5cdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cblx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuXHRmb3IgKHZhciBqID0gMDsgaiA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGorKykge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2pdO1xuXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0aWYgKFxuXHRcdFx0bW9kdWxlICYmXG5cdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkIHx8IG1vZHVsZS5ob3QuX21haW4pICYmXG5cdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG5cdFx0XHRhcHBsaWVkVXBkYXRlW291dGRhdGVkTW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcblx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG5cdFx0XHQhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkXG5cdFx0KSB7XG5cdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG5cdFx0XHRcdG1vZHVsZTogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0cmVxdWlyZTogbW9kdWxlLmhvdC5fcmVxdWlyZVNlbGYsXG5cdFx0XHRcdGVycm9ySGFuZGxlcjogbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG5cblx0cmV0dXJuIHtcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHR9KTtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR2YXIgaWR4O1xuXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG5cdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuXHRcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG5cdFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuXHRcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0ZGlzcG9zZUhhbmRsZXJzW2pdLmNhbGwobnVsbCwgZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJEW21vZHVsZUlkXSA9IGRhdGE7XG5cblx0XHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcblx0XHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcblx0XHRcdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcblx0XHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcblx0XHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuXHRcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuXHRcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cblx0XHRcdHZhciBkZXBlbmRlbmN5O1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXBwbHk6IGZ1bmN0aW9uIChyZXBvcnRFcnJvcikge1xuXHRcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG5cdFx0XHRmb3IgKHZhciB1cGRhdGVNb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oYXBwbGllZFVwZGF0ZSwgdXBkYXRlTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW3VwZGF0ZU1vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJ1biBuZXcgcnVudGltZSBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRVcGRhdGVSdW50aW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lW2ldKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdHZhciBhY2NlcHRDYWxsYmFjayA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXIgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0aWYgKGFjY2VwdENhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGFjY2VwdENhbGxiYWNrKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGFjY2VwdENhbGxiYWNrKTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzLnB1c2goZXJyb3JIYW5kbGVyKTtcblx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MucHVzaChkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBjYWxsYmFja3MubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3Nba10uY2FsbChudWxsLCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgZXJyb3JIYW5kbGVyc1trXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzW2tdKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIG8gPSAwOyBvIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgbysrKSB7XG5cdFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW29dO1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpdGVtLnJlcXVpcmUobW9kdWxlSWQpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGU6IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIxKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMSxcblx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMSk7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9XG5cdH07XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkucmVxdWlyZSA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgYXBwbHlIYW5kbGVycykge1xuXHRpZiAoIWN1cnJlbnRVcGRhdGUpIHtcblx0XHRjdXJyZW50VXBkYXRlID0ge307XG5cdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IFtdO1xuXHRcdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHR9XG5cdGlmICghX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gX193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXTtcblx0fVxufTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1yQy5yZXF1aXJlID0gZnVuY3Rpb24gKFxuXHRjaHVua0lkcyxcblx0cmVtb3ZlZENodW5rcyxcblx0cmVtb3ZlZE1vZHVsZXMsXG5cdHByb21pc2VzLFxuXHRhcHBseUhhbmRsZXJzLFxuXHR1cGRhdGVkTW9kdWxlc0xpc3Rcbikge1xuXHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHt9O1xuXHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHJlbW92ZWRDaHVua3M7XG5cdGN1cnJlbnRVcGRhdGUgPSByZW1vdmVkTW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG5cdFx0b2JqW2tleV0gPSBmYWxzZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9LCB7fSk7XG5cdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdGNodW5rSWRzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRpZiAoXG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHQpIHtcblx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkpO1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSBmYWxzZTtcblx0XHR9XG5cdH0pO1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mLnJlcXVpcmVIbXIgPSBmdW5jdGlvbiAoY2h1bmtJZCwgcHJvbWlzZXMpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rcyAmJlxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZUNodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0IWN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF1cblx0XHRcdCkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSk7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yTSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gcmVxdWlyZShcIi4vXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYoKSk7XG5cdH0pWydjYXRjaCddKGZ1bmN0aW9uKGVycikgeyBpZihlcnIuY29kZSAhPT0gJ01PRFVMRV9OT1RfRk9VTkQnKSB0aHJvdyBlcnI7IH0pO1xufSIsIiIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NlcnZlci1kZXYuanNcIik7XG4iLCIiXSwibmFtZXMiOlsidXNlckNvbG9ycyIsInN5c3RlbUNvbG9ycyIsImJhc2VVUkwiLCJkZWZhdWx0VmlldyIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJvd25LZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9uZXh0IiwiX3Rocm93IiwiX2RlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsIl9jbGFzc0NhbGxDaGVjayIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiQ2FsZW5kYXJTZXJ2aWNlIiwiVXNlclNlcnZpY2UiLCJkYiIsImNhbGVuZGFyU2VydmljZSIsIkNhbGVuZGFyIiwiVXNlciIsInVzZXJTZXJ2aWNlIiwiQ2FsZW5kYXJDb250cm9sbGVyIiwic2VydmljZSIsIl90aGlzIiwiX3JlZiIsIl9jYWxsZWUiLCJyZXEiLCJyZXMiLCJkYXRhIiwidXNlclJlc3BvbnNlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImJvZHkiLCJ1c2VyX2lkIiwiYXV0aCIsInVzZXIiLCJnZXRPbmUiLCJzdGF0dXMiLCJzZW5kIiwiY2FsZW5kYXJTZXR0aW5ncyIsInQwIiwiX3giLCJfeDIiLCJfeDMiLCJfcmVmMiIsIl9jYWxsZWUyIiwicmVzcG9uc2UiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJ1cGRhdGUiLCJwYXJhbXMiLCJjYWxlbmRhcklkIiwic3RhdHVzQ29kZSIsIl94NCIsIl94NSIsIl94NiIsIl9yZWYzIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJ1cGRhdGVDYWxlbmRhclNldHRpbmdzIiwiX3g3IiwiX3g4IiwiX3g5IiwiX3JlZjQiLCJfY2FsbGVlNCIsInRhcmdldENhbGVuZGFyU2V0dGluZ3MiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJlbnRyeSIsImlkIiwidXNlckRlZmF1bHQiLCJtZXNzYWdlIiwiZXJyb3JDb2RlIiwiX3gxMCIsIl94MTEiLCJfeDEyIiwiX3JlZjUiLCJfY2FsbGVlNSIsIl9yZXEkYm9keSIsInVzZXJJZCIsInZpc2liaWxpdHkiLCJjb2xvciIsImlzU2hhcmVkIiwiY2FsZW5kYXIiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJzaGFyZUNhbGVuZGFyIiwidXBkYXRlU2hhcmVkQ2FsZW5kYXJTZXR0aW5ncyIsIl94MTMiLCJfeDE0IiwiX3gxNSIsIkV2ZW50U2VydmljZSIsImV2ZW50U2VydmljZSIsIkV2ZW50IiwiRXZlbnRDb250cm9sbGVyIiwiY2FsZW5kYXJzIiwiY2FsZW5kYXJJZHMiLCJnZXRVc2VyQ2FsZW5kYXJzIiwiTm90Rm91bmRFcnJvciIsIm1hcCIsImdldFVzZXJFdmVudHMiLCJldmVudElkIiwiand0IiwiYXV0aEp3dCIsIlJlZnJlc2hUb2tlbiIsIlJvbGUiLCJVc2VyQ29udHJvbGxlciIsIl9yZXEkYm9keSRyb2xlcyIsInJvbGVOYW1lcyIsInJvbGVzIiwiYXNzaWduUm9sZXMiLCJsb2dpblJlc3BvbnNlIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYWNjZXNzVG9rZW4iLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVF9LRVkiLCJkZWNvZGVkIiwiY2F0Y2hUb2tlbkVycm9yIiwicmVxdWVzdFRva2VuIiwicmVmcmVzaFRva2VuIiwicmVkaXJlY3QiLCJfcmVmNiIsIl9jYWxsZWU2IiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiZ2V0QWxsVXNlcm5hbWVzIiwiX3gxNiIsIl94MTciLCJSb2xlU2VydmljZSIsIk1PTkdPX0hPU1ROQU1FIiwiTU9OR09fUE9SVCIsIk1PTkdPX0RCIiwiTU9OR09fVVNFUk5BTUUiLCJNT05HT19QQVNTV09SRCIsIk1PTkdPX1VSTCIsImNvbmNhdCIsIm1vbmdvb3NlIiwicm9sZVNlcnZpY2UiLCJpbml0aWFsaXplUm9sZXMiLCJjb3VudCIsImNvdW50RG9jdW1lbnRzIiwiY29uc29sZSIsImxvZyIsImluaXRpYWxpemVDYWxlbmRhcnMiLCJjb25uZWN0IiwiZXJyb3IiLCJleGl0IiwiVG9rZW5FeHBpcmVkRXJyb3IiLCJzZW5kU3RhdHVzIiwidmVyaWZ5VG9rZW4iLCJ0b2tlbiIsImhlYWRlcnMiLCJ2ZXJpZnlVUklBdXRoIiwidXJsIiwiX2NhbGVuZGFyIiwiZXZlbnQiLCJfY2FsZW5kYXIyIiwiYmFzZVVybCIsInJvdXRlIiwicGF0aCIsInNoYXJlZF93aXRoIiwiaW5jbHVkZXMiLCJmaW5kT25lIiwiX2lkIiwiJGVxIiwiaXNBZG1pbiIsImZpbmRCeUlkIiwiZXhlYyIsImZpbmQiLCIkaW4iLCJpc01vZGVyYXRvciIsInZlcmlmeVJlZ2lzdHJhdGlvbiIsIkJhZFJlcXVlc3RFcnJvciIsImNoZWNrRHVwbGljYXRlVXNlcm5hbWUiLCJmaW5kQnlVc2VybmFtZSIsImNoZWNrUm9sZXNFeGlzdCIsImNoZWNrUGFzc3dvcmRDb21wbGV4RW5vdWdoIiwicGFzc3dvcmRSZWdleCIsIlJlZ0V4cCIsInRlc3QiLCJjaGVja1VzZXJuYW1lTG9uZ0Vub3VnaCIsIkR1cGxpY2F0ZUtleUVycm9yIiwic2NoZW1hIiwiU2NoZW1hIiwicmVxdWlyZWQiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicHJlIiwid2FzTmV3IiwiaXNOZXciLCJoYW5kbGVFMTEwMDAiLCJjb2RlIiwicG9zdCIsInN5c3RlbUNhbGVuZGFyc0NvdW50Iiwic2V0dGluZ3MiLCJ1c2VyQ2FsZW5kYXJzQ291bnQiLCJfc2V0dGluZ3MiLCJ1cGRhdGVNYW55IiwiJHB1c2giLCJEYXRhYmFzZUVycm9yIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJkb2MiLCIkcHVsbCIsInVwZGF0ZU9uZSIsImluZGV4IiwidW5pcXVlIiwibW9kZWwiLCJ0aXRsZSIsImRlc2MiLCJzdGFydCIsImVuZCIsImFsbERheSIsIkJvb2xlYW4iLCJ0aW1lWm9uZSIsImV4cGlyeURhdGUiLCJzdGF0aWNzIiwidmVyaWZ5RXhwaXJhdGlvbiIsImV4cGlyeURhdGVPYmoiLCJEYXRlIiwiZ2V0VGltZSIsImJjcnlwdCIsInJlcXVpcmUiLCJTQUxUX1dPUktfRkFDVE9SIiwibWluTGVuZ3RoIiwiZmFpbGVkTG9naW5BdHRlbXB0cyIsImxhc3RGYWlsZWRMb2dpbkF0dGVtcHQiLCJub3RpZmljYXRpb25zIiwicmVhZCIsInRpbWVzdGFtcCIsIm5vdyIsInNhbHQiLCJpc01vZGlmaWVkIiwiZ2VuU2FsdCIsImhhc2giLCJzeXN0ZW1DYWxzIiwiZGVmYXVsdENhbCIsIm5ld0RlZmF1bHRDYWwiLCJjYWwiLCJpZHgiLCJzYXZlIiwibWV0aG9kcyIsInZhbGlkYXRlUGFzc3dvcmQiLCJfdmFsaWRhdGVQYXNzd29yZCIsImNhbmRpZGF0ZVBhc3N3b3JkIiwiaXNWYWxpZCIsImNvbXBhcmUiLCJ2YWxpZGF0ZUxvY2tvdXQiLCJsb2Nrb3V0VGltZSIsInNldE1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZXhwcmVzcyIsInJvdXRlciIsIlJvdXRlciIsInB1dCIsInVwZGF0ZVNldHRpbmdzIiwiZ2V0IiwidXNlclJvdXRlciIsImNhbGVuZGFyUm91dGVyIiwiZXZlbnRSb3V0ZXIiLCJ1c2UiLCJyZWdpc3RlciIsImdldFVzZXJzIiwiZG90ZW52IiwiRE9URU5WX0NPTkZJR19QQVRIIiwiY29uZmlnIiwiY29ycyIsIlVzZXJGYWNpbmdFcnJvciIsIkJVSUxEX0RJUiIsIl9fZGlybmFtZSIsIkhUTUxfRklMRSIsIlBPUlQiLCJhcHAiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwic2VuZEZpbGUiLCJlcnIiLCJfZXJyJG1lc3NhZ2UiLCJoZWFkZXIiLCJfaSIsIl9PYmplY3QkZW50cmllcyIsImVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJfc2xpY2VkVG9BcnJheSIsImxpc3RlbiIsIkh0dHBSZXNwb25zZSIsIl9vYmoiLCJyZXN1bHQiLCIkb3IiLCJmaW5kQnlJZEFuZERlbGV0ZSIsImRlbGV0ZWQiLCJldmVudHMiLCJ2NCIsInV1aWR2NCIsIkF1dGhvcml6YXRpb25FcnJvciIsIlJlZnJlc2hUb2tlblNlcnZpY2UiLCJleHBpcmVkQXQiLCJfdG9rZW4iLCJzZXRTZWNvbmRzIiwiZ2V0U2Vjb25kcyIsIkpXVF9SRUZSRVNIX0VYUElSQVRJT04iLCJ0b0lTT1N0cmluZyIsImZpbmRCeUlkQW5kUmVtb3ZlIiwidXNlRmluZEFuZE1vZGlmeSIsInJvbGUiLCJyZWZyZXNoVG9rZW5Nb2RlbCIsInJvbGVNb2RlbCIsImlzTG9ja2VkT3V0IiwidmFsaWRhdGVkIiwicmVmcmVzaFRva2VuUmVzcG9uc2UiLCJzaWduIiwiZXhwaXJlc0luIiwiSldUX0VYUElSQVRJT04iLCJyZWZyZXNoVG9rZW5TZXJ2aWNlIiwiaHR0cFJlc3BvbnNlIiwiZmxhdHRlbmVkQ2FsZW5kYXJTZXR0aW5ncyIsInBvcHVsYXRlIiwic2hhcmVkV2l0aCIsInVzZXJzIiwiJG5lIiwiX3JlZjciLCJfY2FsbGVlNyIsIl9jYWxsZWU3JCIsIl9jb250ZXh0NyIsIm5ld1Bhc3N3b3JkIiwiX3JlZjgiLCJfY2FsbGVlOCIsImNhbGVuZGFyU2V0dGluZ3NLZXlzIiwiZGlmZmVkRGF0YSIsIl9jYWxsZWU4JCIsIl9jb250ZXh0OCIsInRyZWUiLCJ1bmRlZmluZWQiLCJmaW5kT25lQW5kVXBkYXRlIiwiJHNldCIsImFycmF5RmlsdGVycyIsIl9yZWY5IiwiX2NhbGxlZTkiLCJuZXdDYWxlbmRhclNldHRpbmciLCJleGlzdGluZ0NhbGVuZGFyIiwiX2NhbGxlZTkkIiwiX2NvbnRleHQ5IiwiX3gxOCIsIkFwcGxpY2F0aW9uRXJyb3IiLCJfRXJyb3IiLCJfY2FsbFN1cGVyIiwiX2luaGVyaXRzIiwiX3dyYXBOYXRpdmVTdXBlciIsIl9BcHBsaWNhdGlvbkVycm9yIiwiX0FwcGxpY2F0aW9uRXJyb3IyIiwiX0RhdGFiYXNlRXJyb3IiLCJvcHRpb25zIiwiZGVmYXVsdEV4Y2x1c2lvbnNGcm9tUmVzcG9uc2UiLCJBcnJheSIsImlzQXJyYXkiLCJ4IiwiZmlsdGVyRGF0YSIsImZpbHRlcmVkRGF0YSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9Vc2VyRmFjaW5nRXJyb3IiLCJfVXNlckZhY2luZ0Vycm9yMiIsIl90aGlzMiIsIl9pMiIsIl9PYmplY3QkZW50cmllczIiLCJfT2JqZWN0JGVudHJpZXMyJF9pIiwiX1VzZXJGYWNpbmdFcnJvcjMiLCJfdGhpczMiLCJfaTMiLCJfT2JqZWN0JGVudHJpZXMzIiwiX09iamVjdCRlbnRyaWVzMyRfaSJdLCJzb3VyY2VSb290IjoiIn0=