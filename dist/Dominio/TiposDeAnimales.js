"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/web.dom-collections.iterator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Serpiente = exports.Oso = exports.Lobo = exports.Leon = exports.Aguila = void 0;
var _Animal6 = require("./Animal.js");
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); } /*CLASES TIPOS DE ANIMALES (LEÓN, LOBO, OSO, SERPIENTE, AGUILA) EXTENDIDA DE ANIMAL */ //Punto 1 : Crear las clases representadas en el diagrama implementando la herencia indicada. PUNTO 5: Dividir el código en módulos
//Define una clase llamada león que se extiende de animal heredando sus metodos y atributos
var Leon = exports.Leon = /*#__PURE__*/function (_Animal) {
  function Leon(nombre, edad, img, comentarios, sonido) {
    _classCallCheck(this, Leon);
    return _callSuper(this, Leon, [nombre, edad, img, comentarios, sonido]);
  }
  _inherits(Leon, _Animal);
  return _createClass(Leon);
}(_Animal6.Animal);
var Lobo = exports.Lobo = /*#__PURE__*/function (_Animal2) {
  function Lobo(nombre, edad, img, comentarios, sonido) {
    _classCallCheck(this, Lobo);
    return _callSuper(this, Lobo, [nombre, edad, img, comentarios, sonido]);
  }
  _inherits(Lobo, _Animal2);
  return _createClass(Lobo);
}(_Animal6.Animal);
var Oso = exports.Oso = /*#__PURE__*/function (_Animal3) {
  function Oso(nombre, edad, img, comentarios, sonido) {
    _classCallCheck(this, Oso);
    return _callSuper(this, Oso, [nombre, edad, img, comentarios, sonido]);
  }
  _inherits(Oso, _Animal3);
  return _createClass(Oso);
}(_Animal6.Animal);
var Serpiente = exports.Serpiente = /*#__PURE__*/function (_Animal4) {
  function Serpiente(nombre, edad, img, comentarios, sonido) {
    _classCallCheck(this, Serpiente);
    return _callSuper(this, Serpiente, [nombre, edad, img, comentarios, sonido]);
  }
  _inherits(Serpiente, _Animal4);
  return _createClass(Serpiente);
}(_Animal6.Animal);
var Aguila = exports.Aguila = /*#__PURE__*/function (_Animal5) {
  function Aguila(nombre, edad, img, comentarios, sonido) {
    _classCallCheck(this, Aguila);
    return _callSuper(this, Aguila, [nombre, edad, img, comentarios, sonido]);
  }
  _inherits(Aguila, _Animal5);
  return _createClass(Aguila);
}(_Animal6.Animal);