import { useEffect, useState } from "@wordpress/element";

export const LoadingItem = (props) => {
  useEffect(() => {
    !(function (t, e) {
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = e())
        : "function" == typeof define && define.amd
        ? define(e)
        : (((t =
            "undefined" != typeof globalThis
              ? globalThis
              : t || self).__SVGATOR_PLAYER__ = t.__SVGATOR_PLAYER__ || {}),
          (t.__SVGATOR_PLAYER__["91c80d77"] = e()));
    })(this, function () {
      "use strict";
      function t(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function e(e) {
        for (var n = 1; n < arguments.length; n++) {
          var r = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? t(Object(r), !0).forEach(function (t) {
                u(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : t(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function n(t) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function r(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function o(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
      }
      function u(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function a(t) {
        return (a = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function s(t, e) {
        return (s =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function l() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function f(t, e, n) {
        return (f = l()
          ? Reflect.construct
          : function (t, e, n) {
              var r = [null];
              r.push.apply(r, e);
              var i = new (Function.bind.apply(t, r))();
              return n && s(i, n.prototype), i;
            }).apply(null, arguments);
      }
      function c(t, e) {
        if (e && ("object" == typeof e || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        })(t);
      }
      function h(t, e, n) {
        return (h =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var r = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = a(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, e);
                  return i.get ? i.get.call(n) : i.value;
                }
              })(t, e, n || t);
      }
      function v(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return y(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return y(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return y(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      Number.isInteger ||
        (Number.isInteger = function (t) {
          return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
        }),
        Number.EPSILON || (Number.EPSILON = 2220446049250313e-31);
      var d = g(Math.pow(10, -6));
      function g(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        if (Number.isInteger(t)) return t;
        var n = Math.pow(10, e);
        return Math.round((+t + Number.EPSILON) * n) / n;
      }
      function p(t, e) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d;
        return Math.abs(t - e) < n;
      }
      var m = Math.PI / 180;
      function b(t) {
        return t;
      }
      function k(t, e, n) {
        var r = 1 - n;
        return 3 * n * r * (t * r + e * n) + n * n * n;
      }
      function w() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return t < 0 || t > 1 || n < 0 || n > 1
          ? null
          : p(t, e) && p(n, r)
          ? b
          : function (i) {
              if (i <= 0)
                return t > 0 ? (i * e) / t : 0 === e && n > 0 ? (i * r) / n : 0;
              if (i >= 1)
                return n < 1
                  ? 1 + ((i - 1) * (r - 1)) / (n - 1)
                  : 1 === n && t < 1
                  ? 1 + ((i - 1) * (e - 1)) / (t - 1)
                  : 1;
              for (var o, u = 0, a = 1; u < a; ) {
                var s = k(t, n, (o = (u + a) / 2));
                if (p(i, s)) break;
                s < i ? (u = o) : (a = o);
              }
              return k(e, r, o);
            };
      }
      function x() {
        return 1;
      }
      function A(t) {
        return 1 === t ? 1 : 0;
      }
      function _() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (1 === t) {
          if (0 === e) return A;
          if (1 === e) return x;
        }
        var n = 1 / t;
        return function (t) {
          return t >= 1 ? 1 : (t += e * n) - (t % n);
        };
      }
      var O = Math.sin,
        S = Math.cos,
        E = Math.acos,
        P = Math.asin,
        M = Math.tan,
        j = Math.atan2,
        B = Math.PI / 180,
        T = 180 / Math.PI,
        I = Math.sqrt,
        R = (function () {
          function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 1,
              u =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : 0,
              a =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : 0;
            r(this, t),
              (this.m = [e, n, i, o, u, a]),
              (this.i = null),
              (this.w = null),
              (this.s = null);
          }
          return (
            o(
              t,
              [
                {
                  key: "determinant",
                  get: function () {
                    var t = this.m;
                    return t[0] * t[3] - t[1] * t[2];
                  },
                },
                {
                  key: "isIdentity",
                  get: function () {
                    if (null === this.i) {
                      var t = this.m;
                      this.i =
                        1 === t[0] &&
                        0 === t[1] &&
                        0 === t[2] &&
                        1 === t[3] &&
                        0 === t[4] &&
                        0 === t[5];
                    }
                    return this.i;
                  },
                },
                {
                  key: "point",
                  value: function (t, e) {
                    var n = this.m;
                    return {
                      x: n[0] * t + n[2] * e + n[4],
                      y: n[1] * t + n[3] * e + n[5],
                    };
                  },
                },
                {
                  key: "translateSelf",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0;
                    if (!t && !e) return this;
                    var n = this.m;
                    return (
                      (n[4] += n[0] * t + n[2] * e),
                      (n[5] += n[1] * t + n[3] * e),
                      (this.w = this.s = this.i = null),
                      this
                    );
                  },
                },
                {
                  key: "rotateSelf",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0;
                    if ((t %= 360)) {
                      var e = O((t *= B)),
                        n = S(t),
                        r = this.m,
                        i = r[0],
                        o = r[1];
                      (r[0] = i * n + r[2] * e),
                        (r[1] = o * n + r[3] * e),
                        (r[2] = r[2] * n - i * e),
                        (r[3] = r[3] * n - o * e),
                        (this.w = this.s = this.i = null);
                    }
                    return this;
                  },
                },
                {
                  key: "scaleSelf",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 1,
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 1;
                    if (1 !== t || 1 !== e) {
                      var n = this.m;
                      (n[0] *= t),
                        (n[1] *= t),
                        (n[2] *= e),
                        (n[3] *= e),
                        (this.w = this.s = this.i = null);
                    }
                    return this;
                  },
                },
                {
                  key: "skewSelf",
                  value: function (t, e) {
                    if (((e %= 360), (t %= 360) || e)) {
                      var n = this.m,
                        r = n[0],
                        i = n[1],
                        o = n[2],
                        u = n[3];
                      t && ((t = M(t * B)), (n[2] += r * t), (n[3] += i * t)),
                        e && ((e = M(e * B)), (n[0] += o * e), (n[1] += u * e)),
                        (this.w = this.s = this.i = null);
                    }
                    return this;
                  },
                },
                {
                  key: "resetSelf",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 1,
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 1,
                      i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 0,
                      o =
                        arguments.length > 5 && void 0 !== arguments[5]
                          ? arguments[5]
                          : 0,
                      u = this.m;
                    return (
                      (u[0] = t),
                      (u[1] = e),
                      (u[2] = n),
                      (u[3] = r),
                      (u[4] = i),
                      (u[5] = o),
                      (this.w = this.s = this.i = null),
                      this
                    );
                  },
                },
                {
                  key: "recomposeSelf",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null,
                      r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : null,
                      i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : null;
                    return (
                      this.isIdentity || this.resetSelf(),
                      t && (t.x || t.y) && this.translateSelf(t.x, t.y),
                      e && this.rotateSelf(e),
                      n &&
                        (n.x && this.skewSelf(n.x, 0),
                        n.y && this.skewSelf(0, n.y)),
                      !r ||
                        (1 === r.x && 1 === r.y) ||
                        this.scaleSelf(r.x, r.y),
                      i && (i.x || i.y) && this.translateSelf(i.x, i.y),
                      this
                    );
                  },
                },
                {
                  key: "decompose",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      n = this.m,
                      r = n[0] * n[0] + n[1] * n[1],
                      i = [
                        [n[0], n[1]],
                        [n[2], n[3]],
                      ],
                      o = I(r);
                    if (0 === o)
                      return {
                        origin: { x: g(n[4]), y: g(n[5]) },
                        translate: { x: g(t), y: g(e) },
                        scale: { x: 0, y: 0 },
                        skew: { x: 0, y: 0 },
                        rotate: 0,
                      };
                    (i[0][0] /= o), (i[0][1] /= o);
                    var u = n[0] * n[3] - n[1] * n[2] < 0;
                    u && (o = -o);
                    var a = i[0][0] * i[1][0] + i[0][1] * i[1][1];
                    (i[1][0] -= i[0][0] * a), (i[1][1] -= i[0][1] * a);
                    var s = I(i[1][0] * i[1][0] + i[1][1] * i[1][1]);
                    if (0 === s)
                      return {
                        origin: { x: g(n[4]), y: g(n[5]) },
                        translate: { x: g(t), y: g(e) },
                        scale: { x: g(o), y: 0 },
                        skew: { x: 0, y: 0 },
                        rotate: 0,
                      };
                    (i[1][0] /= s), (i[1][1] /= s), (a /= s);
                    var l = 0;
                    return (
                      i[1][1] < 0
                        ? ((l = E(i[1][1]) * T), i[0][1] < 0 && (l = 360 - l))
                        : (l = P(i[0][1]) * T),
                      u && (l = -l),
                      (a = j(a, I(i[0][0] * i[0][0] + i[0][1] * i[0][1])) * T),
                      u && (a = -a),
                      {
                        origin: { x: g(n[4]), y: g(n[5]) },
                        translate: { x: g(t), y: g(e) },
                        scale: { x: g(o), y: g(s) },
                        skew: { x: g(a), y: 0 },
                        rotate: g(l),
                      }
                    );
                  },
                },
                {
                  key: "clone",
                  value: function () {
                    var t = this.m;
                    return new this.constructor(
                      t[0],
                      t[1],
                      t[2],
                      t[3],
                      t[4],
                      t[5]
                    );
                  },
                },
                {
                  key: "toString",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : " ";
                    if (null === this.s) {
                      var e = this.m.map(function (t) {
                        return g(t);
                      });
                      1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3]
                        ? (this.s = "translate(" + e[4] + t + e[5] + ")")
                        : (this.s = "matrix(" + e.join(t) + ")");
                    }
                    return this.s;
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: function (t) {
                    return t
                      ? Array.isArray(t)
                        ? f(this, v(t))
                        : t instanceof this
                        ? t.clone()
                        : new this().recomposeSelf(
                            t.origin,
                            t.rotate,
                            t.skew,
                            t.scale,
                            t.translate
                          )
                      : new this();
                  },
                },
              ]
            ),
            t
          );
        })();
      function N(t, e, n) {
        return t >= 0.5 ? n : e;
      }
      function F(t, e, n) {
        return 0 === t || e === n ? e : t * (n - e) + e;
      }
      function C(t, e, n) {
        var r = F(t, e, n);
        return r <= 0 ? 0 : r;
      }
      function L(t, e, n) {
        var r = F(t, e, n);
        return r <= 0 ? 0 : r >= 1 ? 1 : r;
      }
      function D(t, e, n) {
        return 0 === t
          ? e
          : 1 === t
          ? n
          : { x: F(t, e.x, n.x), y: F(t, e.y, n.y) };
      }
      function q(t, e, n) {
        return 0 === t
          ? e
          : 1 === t
          ? n
          : { x: C(t, e.x, n.x), y: C(t, e.y, n.y) };
      }
      function V(t, e, n) {
        var r = (function (t, e, n) {
          return Math.round(F(t, e, n));
        })(t, e, n);
        return r <= 0 ? 0 : r >= 255 ? 255 : r;
      }
      function z(t, e, n) {
        return 0 === t
          ? e
          : 1 === t
          ? n
          : {
              r: V(t, e.r, n.r),
              g: V(t, e.g, n.g),
              b: V(t, e.b, n.b),
              a: F(t, null == e.a ? 1 : e.a, null == n.a ? 1 : n.a),
            };
      }
      function Y(t, e, n) {
        var r = e.length;
        if (r !== n.length) return N(t, e, n);
        for (var i = new Array(r), o = 0; o < r; o++) i[o] = F(t, e[o], n[o]);
        return i;
      }
      function G(t, e) {
        for (var n = [], r = 0; r < t; r++) n.push(e);
        return n;
      }
      function U(t, e) {
        if (--e <= 0) return t;
        var n = (t = Object.assign([], t)).length;
        do {
          for (var r = 0; r < n; r++) t.push(t[r]);
        } while (--e > 0);
        return t;
      }
      var $,
        W = (function () {
          function t(e) {
            r(this, t), (this.list = e), (this.length = e.length);
          }
          return (
            o(t, [
              {
                key: "setAttribute",
                value: function (t, e) {
                  for (var n = this.list, r = 0; r < this.length; r++)
                    n[r].setAttribute(t, e);
                },
              },
              {
                key: "removeAttribute",
                value: function (t) {
                  for (var e = this.list, n = 0; n < this.length; n++)
                    e[n].removeAttribute(t);
                },
              },
              {
                key: "style",
                value: function (t, e) {
                  for (var n = this.list, r = 0; r < this.length; r++)
                    n[r].style[t] = e;
                },
              },
            ]),
            t
          );
        })(),
        H = /-./g,
        Q = function (t, e) {
          return e.toUpperCase();
        };
      function X(t) {
        return "function" == typeof t ? t : N;
      }
      function J(t) {
        return t
          ? "function" == typeof t
            ? t
            : Array.isArray(t)
            ? (function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : b;
                if (!Array.isArray(t)) return e;
                switch (t.length) {
                  case 1:
                    return _(t[0]) || e;
                  case 2:
                    return _(t[0], t[1]) || e;
                  case 4:
                    return w(t[0], t[1], t[2], t[3]) || e;
                }
                return e;
              })(t, null)
            : (function (t, e) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : b;
                switch (t) {
                  case "linear":
                    return b;
                  case "steps":
                    return _(e.steps || 1, e.jump || 0) || n;
                  case "bezier":
                  case "cubic-bezier":
                    return w(e.x1 || 0, e.y1 || 0, e.x2 || 0, e.y2 || 0) || n;
                }
                return n;
              })(t.type, t.value, null)
          : null;
      }
      function K(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = e.length - 1;
        if (t <= e[0].t) return r ? [0, 0, e[0].v] : e[0].v;
        if (t >= e[i].t) return r ? [i, 1, e[i].v] : e[i].v;
        var o,
          u = e[0],
          a = null;
        for (o = 1; o <= i; o++) {
          if (!(t > e[o].t)) {
            a = e[o];
            break;
          }
          u = e[o];
        }
        return null == a
          ? r
            ? [i, 1, e[i].v]
            : e[i].v
          : u.t === a.t
          ? r
            ? [o, 1, a.v]
            : a.v
          : ((t = (t - u.t) / (a.t - u.t)),
            u.e && (t = u.e(t)),
            r ? [o, t, n(t, u.v, a.v)] : n(t, u.v, a.v));
      }
      function Z(t, e) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return t && t.length
          ? "function" != typeof e
            ? null
            : ("function" != typeof n && (n = null),
              function (r) {
                var i = K(r, t, e);
                return null != i && n && (i = n(i)), i;
              })
          : null;
      }
      function tt(t, e) {
        return t.t - e.t;
      }
      function et(t, e, r, i, o) {
        var u,
          a = "@" === r[0],
          s = "#" === r[0],
          l = $[r],
          f = N;
        switch (
          (a
            ? ((u = r.substr(1)), (r = u.replace(H, Q)))
            : s && (r = r.substr(1)),
          n(l))
        ) {
          case "function":
            if (((f = l(i, o, K, J, r, a, e, t)), s)) return f;
            break;
          case "string":
            f = Z(i, X(l));
            break;
          case "object":
            if ((f = Z(i, X(l.i), l.f)) && "function" == typeof l.u)
              return l.u(e, f, r, a, t);
        }
        return f
          ? (function (t, e, n) {
              if (
                arguments.length > 3 &&
                void 0 !== arguments[3] &&
                arguments[3]
              )
                return t instanceof W
                  ? function (r) {
                      return t.style(e, n(r));
                    }
                  : function (r) {
                      return (t.style[e] = n(r));
                    };
              if (Array.isArray(e)) {
                var r = e.length;
                return function (i) {
                  var o = n(i);
                  if (null == o)
                    for (var u = 0; u < r; u++) t[u].removeAttribute(e);
                  else for (var a = 0; a < r; a++) t[a].setAttribute(e, o);
                };
              }
              return function (r) {
                var i = n(r);
                null == i ? t.removeAttribute(e) : t.setAttribute(e, i);
              };
            })(e, r, f, a)
          : null;
      }
      function nt(t, e, r, i) {
        if (!i || "object" !== n(i)) return null;
        var o = null,
          u = null;
        return (
          Array.isArray(i)
            ? (u = (function (t) {
                if (!t || !t.length) return null;
                for (var e = 0; e < t.length; e++)
                  t[e].e && (t[e].e = J(t[e].e));
                return t.sort(tt);
              })(i))
            : ((u = i.keys), (o = i.data || null)),
          u ? et(t, e, r, u, o) : null
        );
      }
      function rt(t, e, n) {
        if (!n) return null;
        var r = [];
        for (var i in n)
          if (n.hasOwnProperty(i)) {
            var o = nt(t, e, i, n[i]);
            o && r.push(o);
          }
        return r.length ? r : null;
      }
      function it(t, e) {
        if (!e.settings.duration || e.settings.duration < 0) return null;
        var n,
          r,
          i,
          o,
          u,
          a = (function (t, e) {
            if (!e) return null;
            var n = [];
            if (Array.isArray(e))
              for (var r = e.length, i = 0; i < r; i++) {
                var o = e[i];
                if (2 === o.length) {
                  var u = null;
                  if ("string" == typeof o[0]) u = t.getElementById(o[0]);
                  else if (Array.isArray(o[0])) {
                    u = [];
                    for (var a = 0; a < o[0].length; a++)
                      if ("string" == typeof o[0][a]) {
                        var s = t.getElementById(o[0][a]);
                        s && u.push(s);
                      }
                    u = u.length ? (1 === u.length ? u[0] : new W(u)) : null;
                  }
                  if (u) {
                    var l = rt(t, u, o[1]);
                    l && (n = n.concat(l));
                  }
                }
              }
            else
              for (var f in e)
                if (e.hasOwnProperty(f)) {
                  var c = t.getElementById(f);
                  if (c) {
                    var h = rt(t, c, e[f]);
                    h && (n = n.concat(h));
                  }
                }
            return n.length ? n : null;
          })(t, e.elements);
        return a
          ? ((n = a),
            (r = e.settings),
            (i = r.duration),
            (o = n.length),
            (u = null),
            function (t, e) {
              var a = r.iterations || 1 / 0,
                s = (r.alternate && a % 2 == 0) ^ (r.direction > 0) ? i : 0,
                l = t % i,
                f = 1 + (t - l) / i;
              (e *= r.direction), r.alternate && f % 2 == 0 && (e = -e);
              var c = !1;
              if (f > a)
                (l = s),
                  (c = !0),
                  -1 === r.fill && (l = r.direction > 0 ? 0 : i);
              else if ((e < 0 && (l = i - l), l === u)) return !1;
              u = l;
              for (var h = 0; h < o; h++) n[h](l);
              return c;
            })
          : null;
      }
      function ot(t, e) {
        if ((($ = e), !t || !t.root || !Array.isArray(t.animations)))
          return null;
        var n = (function (t) {
          for (
            var e = document.getElementsByTagName("svg"), n = 0;
            n < e.length;
            n++
          )
            if (e[n].id === t.root && !e[n].svgatorAnimation)
              return (e[n].svgatorAnimation = !0), e[n];
          return null;
        })(t);
        if (!n) return null;
        var r = t.animations
          .map(function (t) {
            return it(n, t);
          })
          .filter(function (t) {
            return !!t;
          });
        return r.length
          ? {
              svg: n,
              animations: r,
              animationSettings: t.animationSettings,
              options: t.options || void 0,
            }
          : null;
      }
      function ut(t) {
        return +("0x" + (t.replace(/[^0-9a-fA-F]+/g, "") || 27));
      }
      function at(t, e, n) {
        return !t || !n || e > t.length
          ? t
          : t.substring(0, e) + at(t.substring(e + 1), n, n);
      }
      function st(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 27;
        return !t || t % e ? t % e : st(t / e, e);
      }
      function lt(t, e, n) {
        if (t && t.length) {
          var r = ut(n),
            i = ut(e),
            o = st(r) + 5,
            u = at(t, st(r, 5), o);
          return (
            (u = u.replace(/\x7c$/g, "==").replace(/\x2f$/g, "=")),
            (u = (function (t, e, n) {
              var r = +("0x" + t.substring(0, 4));
              t = t.substring(4);
              for (
                var i = (e % r) + (n % 27), o = [], u = 0;
                u < t.length;
                u += 2
              )
                if ("|" !== t[u]) {
                  var a = +("0x" + t[u] + t[u + 1]) - i;
                  o.push(a);
                } else {
                  var s = +("0x" + t.substring(u + 1, u + 1 + 4)) - i;
                  (u += 3), o.push(s);
                }
              return String.fromCharCode.apply(String, o);
            })((u = (u = atob(u)).replace(/[\x41-\x5A]/g, "")), i, r)),
            (u = JSON.parse(u))
          );
        }
      }
      var ft = [
          { key: "alternate", def: !1 },
          { key: "fill", def: 1 },
          { key: "iterations", def: 0 },
          { key: "direction", def: 1 },
          { key: "speed", def: 1 },
          { key: "fps", def: 100 },
        ],
        ct = (function () {
          function t(e, n) {
            var i = this,
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null;
            r(this, t),
              (this._id = 0),
              (this._running = !1),
              (this._rollingBack = !1),
              (this._animations = e),
              (this._settings = n),
              (!o || o < "2022-05-02") && delete this._settings.speed,
              ft.forEach(function (t) {
                i._settings[t.key] = i._settings[t.key] || t.def;
              }),
              (this.duration = n.duration),
              (this.offset = n.offset || 0),
              (this.rollbackStartOffset = 0);
          }
          return (
            o(
              t,
              [
                {
                  key: "alternate",
                  get: function () {
                    return this._settings.alternate;
                  },
                },
                {
                  key: "fill",
                  get: function () {
                    return this._settings.fill;
                  },
                },
                {
                  key: "iterations",
                  get: function () {
                    return this._settings.iterations;
                  },
                },
                {
                  key: "direction",
                  get: function () {
                    return this._settings.direction;
                  },
                },
                {
                  key: "speed",
                  get: function () {
                    return this._settings.speed;
                  },
                },
                {
                  key: "fps",
                  get: function () {
                    return this._settings.fps;
                  },
                },
                {
                  key: "maxFiniteDuration",
                  get: function () {
                    return this.iterations > 0
                      ? this.iterations * this.duration
                      : this.duration;
                  },
                },
                {
                  key: "_apply",
                  value: function (t) {
                    for (
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        n = this._animations,
                        r = n.length,
                        i = 0,
                        o = 0;
                      o < r;
                      o++
                    )
                      e[o] ? i++ : ((e[o] = n[o](t, 1)), e[o] && i++);
                    return i;
                  },
                },
                {
                  key: "_rollback",
                  value: function (t) {
                    var e = this,
                      n = 1 / 0,
                      r = null;
                    (this.rollbackStartOffset = t),
                      (this._rollingBack = !0),
                      (this._running = !0);
                    this._id = window.requestAnimationFrame(function i(o) {
                      if (e._rollingBack) {
                        null == r && (r = o);
                        var u = Math.round(t - (o - r) * e.speed);
                        if (u > e.duration && n !== 1 / 0) {
                          var a = !!e.alternate && (u / e.duration) % 2 > 1,
                            s = u % e.duration;
                          u = (s += a ? e.duration : 0) || e.duration;
                        }
                        var l = (e.fps ? 1e3 / e.fps : 0) * e.speed,
                          f = Math.max(0, u);
                        f < n - l && ((e.offset = f), (n = f), e._apply(f));
                        var c =
                          e.iterations > 0 &&
                          -1 === e.fill &&
                          u >= e.maxFiniteDuration;
                        (u <= 0 || e.offset < u || c) && e.stop(),
                          (e._id = window.requestAnimationFrame(i));
                      }
                    });
                  },
                },
                {
                  key: "_start",
                  value: function () {
                    var t = this,
                      e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      n = -1 / 0,
                      r = null,
                      i = {};
                    this._running = !0;
                    var o = function o(u) {
                      null == r && (r = u);
                      var a = Math.round((u - r) * t.speed + e),
                        s = (t.fps ? 1e3 / t.fps : 0) * t.speed;
                      if (
                        a > n + s &&
                        !t._rollingBack &&
                        ((t.offset = a),
                        (n = a),
                        t._apply(a, i) === t._animations.length)
                      )
                        return void t.pause(!0);
                      t._id = window.requestAnimationFrame(o);
                    };
                    this._id = window.requestAnimationFrame(o);
                  },
                },
                {
                  key: "_pause",
                  value: function () {
                    this._id && window.cancelAnimationFrame(this._id),
                      (this._running = !1);
                  },
                },
                {
                  key: "play",
                  value: function () {
                    if (!this._running)
                      return this._rollingBack
                        ? this._rollback(this.offset)
                        : this._start(this.offset);
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    this._pause(),
                      (this.offset = 0),
                      (this.rollbackStartOffset = 0),
                      (this._rollingBack = !1),
                      this._apply(0);
                  },
                },
                {
                  key: "reachedToEnd",
                  value: function () {
                    return (
                      this.iterations > 0 &&
                      this.offset >= this.iterations * this.duration
                    );
                  },
                },
                {
                  key: "restart",
                  value: function () {
                    var t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    this.stop(t), this.play(t);
                  },
                },
                {
                  key: "pause",
                  value: function () {
                    this._pause();
                  },
                },
                {
                  key: "reverse",
                  value: function () {
                    this.direction = -this.direction;
                  },
                },
              ],
              [
                {
                  key: "build",
                  value: function (t, e) {
                    delete t.animationSettings,
                      (t.options = lt(t.options, t.root, "91c80d77")),
                      t.animations.map(function (e) {
                        (e.settings = lt(e.s, t.root, "91c80d77")),
                          delete e.s,
                          t.animationSettings ||
                            (t.animationSettings = e.settings);
                      });
                    var n = t.version;
                    if (!(t = ot(t, e))) return null;
                    var r = t.options || {},
                      i = new this(t.animations, t.animationSettings, n);
                    return { el: t.svg, options: r, player: i };
                  },
                },
                {
                  key: "push",
                  value: function (t) {
                    return this.build(t);
                  },
                },
                {
                  key: "init",
                  value: function () {
                    var t = this,
                      e =
                        window.__SVGATOR_PLAYER__ &&
                        window.__SVGATOR_PLAYER__["91c80d77"];
                    Array.isArray(e) &&
                      e.splice(0).forEach(function (e) {
                        return t.build(e);
                      });
                  },
                },
              ]
            ),
            t
          );
        })();
      !(function () {
        for (
          var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0;
          n < e.length && !window.requestAnimationFrame;
          ++n
        )
          (window.requestAnimationFrame =
            window[e[n] + "RequestAnimationFrame"]),
            (window.cancelAnimationFrame =
              window[e[n] + "CancelAnimationFrame"] ||
              window[e[n] + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame ||
          ((window.requestAnimationFrame = function (e) {
            var n = Date.now(),
              r = Math.max(0, 16 - (n - t)),
              i = window.setTimeout(function () {
                e(n + r);
              }, r);
            return (t = n + r), i;
          }),
          (window.cancelAnimationFrame = window.clearTimeout));
      })();
      var ht = function (t, e) {
          var n = !1,
            r = null;
          return function (i) {
            n && clearTimeout(n),
              (n = setTimeout(function () {
                return (function () {
                  for (
                    var i = 0,
                      o = window.innerHeight,
                      u = 0,
                      a = window.innerWidth,
                      s = t.parentNode;
                    s instanceof Element;

                  ) {
                    var l = window.getComputedStyle(s);
                    if (
                      "visible" !== l.overflowY ||
                      "visible" !== l.overflowX
                    ) {
                      var f = s.getBoundingClientRect();
                      "visible" !== l.overflowY &&
                        ((i = Math.max(i, f.top)), (o = Math.min(o, f.bottom))),
                        "visible" !== l.overflowX &&
                          ((u = Math.max(u, f.left)),
                          (a = Math.min(a, f.right)));
                    }
                    if (s === s.parentNode) break;
                    s = s.parentNode;
                  }
                  n = !1;
                  var c = t.getBoundingClientRect(),
                    h = Math.min(c.height, Math.max(0, i - c.top)),
                    v = Math.min(c.height, Math.max(0, c.bottom - o)),
                    y = Math.min(c.width, Math.max(0, u - c.left)),
                    d = Math.min(c.width, Math.max(0, c.right - a)),
                    g = (c.height - h - v) / c.height,
                    p = (c.width - y - d) / c.width,
                    m = Math.round(g * p * 100);
                  (null !== r && r === m) || ((r = m), e(m));
                })();
              }, 100));
          };
        },
        vt = (function () {
          function t(e, n, i) {
            r(this, t),
              (n = Math.max(1, n || 1)),
              (n = Math.min(n, 100)),
              (this.el = e),
              (this._handlers = []),
              (this.onThresholdChange = i && i.call ? i : function () {}),
              (this.thresholdPercent = n || 1),
              (this.currentVisibility = null),
              (this.visibilityCalculator = ht(
                e,
                this.onVisibilityUpdate.bind(this)
              )),
              this.bindScrollWatchers(),
              this.visibilityCalculator();
          }
          return (
            o(t, [
              {
                key: "bindScrollWatchers",
                value: function () {
                  for (
                    var t = this.el.parentNode;
                    t &&
                    (this._handlers.push({
                      element: t,
                      event: "scroll",
                      handler: this.visibilityCalculator,
                    }),
                    t.addEventListener("scroll", this.visibilityCalculator),
                    t !== t.parentNode && t !== document);

                  )
                    t = t.parentNode;
                },
              },
              {
                key: "onVisibilityUpdate",
                value: function (t) {
                  var e = this.currentVisibility >= this.thresholdPercent,
                    n = t >= this.thresholdPercent;
                  if (null === this.currentVisibility || e !== n)
                    return (
                      (this.currentVisibility = t),
                      void this.onThresholdChange(n)
                    );
                  this.currentVisibility = t;
                },
              },
              {
                key: "destruct",
                value: function () {
                  this._handlers.forEach(function (t) {
                    t.element.removeEventListener(t.event, t.handler);
                  });
                },
              },
            ]),
            t
          );
        })();
      function yt(t) {
        return g(t) + "";
      }
      function dt(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
        return t && t.length ? t.map(yt).join(e) : "";
      }
      function gt(t) {
        return yt(t.x) + "," + yt(t.y);
      }
      function pt(t) {
        if (!t) return "transparent";
        if (null == t.a || t.a >= 1) {
          var e = function (t) {
              return 1 === (t = parseInt(t).toString(16)).length ? "0" + t : t;
            },
            n = function (t) {
              return t.charAt(0) === t.charAt(1);
            },
            r = e(t.r),
            i = e(t.g),
            o = e(t.b);
          return (
            n(r) &&
              n(i) &&
              n(o) &&
              ((r = r.charAt(0)), (i = i.charAt(0)), (o = o.charAt(0))),
            "#" + r + i + o
          );
        }
        return "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")";
      }
      function mt(t) {
        return t ? "url(#" + t + ")" : "none";
      }
      var bt = {
          f: null,
          i: q,
          u: function (t, e) {
            return function (n) {
              var r = e(n);
              t.setAttribute("rx", yt(r.x)), t.setAttribute("ry", yt(r.y));
            };
          },
        },
        kt = {
          f: null,
          i: function (t, e, n) {
            return 0 === t
              ? e
              : 1 === t
              ? n
              : {
                  width: C(t, e.width, n.width),
                  height: C(t, e.height, n.height),
                };
          },
          u: function (t, e) {
            return function (n) {
              var r = e(n);
              t.setAttribute("width", yt(r.width)),
                t.setAttribute("height", yt(r.height));
            };
          },
        };
      Object.freeze({
        M: 2,
        L: 2,
        Z: 0,
        H: 1,
        V: 1,
        C: 6,
        Q: 4,
        T: 2,
        S: 4,
        A: 7,
      });
      var wt = {},
        xt = null;
      function At(t) {
        var e = (function () {
          if (xt) return xt;
          if (
            "object" !==
              ("undefined" == typeof document ? "undefined" : n(document)) ||
            !document.createElementNS
          )
            return {};
          var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          return t && t.style
            ? ((t.style.position = "absolute"),
              (t.style.opacity = "0.01"),
              (t.style.zIndex = "-9999"),
              (t.style.left = "-9999px"),
              (t.style.width = "1px"),
              (t.style.height = "1px"),
              (xt = { svg: t }))
            : {};
        })().svg;
        if (!e)
          return function (t) {
            return null;
          };
        var r = document.createElementNS(e.namespaceURI, "path");
        r.setAttributeNS(null, "d", t),
          r.setAttributeNS(null, "fill", "none"),
          r.setAttributeNS(null, "stroke", "none"),
          e.appendChild(r);
        var i = r.getTotalLength();
        return function (t) {
          var e = r.getPointAtLength(i * t);
          return { x: e.x, y: e.y };
        };
      }
      function _t(t) {
        return wt[t] ? wt[t] : (wt[t] = At(t));
      }
      function Ot(t, e, n, r) {
        if (!t || !r) return !1;
        var i = ["M", t.x, t.y];
        if (
          (e &&
            n &&
            (i.push("C"), i.push(e.x), i.push(e.y), i.push(n.x), i.push(n.y)),
          e ? !n : n)
        ) {
          var o = e || n;
          i.push("Q"), i.push(o.x), i.push(o.y);
        }
        return e || n || i.push("L"), i.push(r.x), i.push(r.y), i.join(" ");
      }
      function St(t, e, n, r) {
        var i =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          o = Ot(t, e, n, r),
          u = _t(o);
        try {
          return u(i);
        } catch (t) {
          return null;
        }
      }
      function Et(t, e, n) {
        return t + (e - t) * n;
      }
      function Pt(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = { x: Et(t.x, e.x, n), y: Et(t.y, e.y, n) };
        return r && (i.a = Mt(t, e)), i;
      }
      function Mt(t, e) {
        return Math.atan2(e.y - t.y, e.x - t.x);
      }
      function jt(t, e, n, r) {
        var i = 1 - r;
        return i * i * t + 2 * i * r * e + r * r * n;
      }
      function Bt(t, e, n, r) {
        return 2 * (1 - r) * (e - t) + 2 * r * (n - e);
      }
      function Tt(t, e, n, r) {
        var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          o = St(t, e, null, n, r);
        return (
          o || (o = { x: jt(t.x, e.x, n.x, r), y: jt(t.y, e.y, n.y, r) }),
          i && (o.a = It(t, e, n, r)),
          o
        );
      }
      function It(t, e, n, r) {
        return Math.atan2(Bt(t.y, e.y, n.y, r), Bt(t.x, e.x, n.x, r));
      }
      function Rt(t, e, n, r, i) {
        var o = i * i;
        return (
          i * o * (r - t + 3 * (e - n)) +
          3 * o * (t + n - 2 * e) +
          3 * i * (e - t) +
          t
        );
      }
      function Nt(t, e, n, r, i) {
        var o = 1 - i;
        return 3 * (o * o * (e - t) + 2 * o * i * (n - e) + i * i * (r - n));
      }
      function Ft(t, e, n, r, i) {
        var o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          u = St(t, e, n, r, i);
        return (
          u ||
            (u = {
              x: Rt(t.x, e.x, n.x, r.x, i),
              y: Rt(t.y, e.y, n.y, r.y, i),
            }),
          o && (u.a = Ct(t, e, n, r, i)),
          u
        );
      }
      function Ct(t, e, n, r, i) {
        return Math.atan2(Nt(t.y, e.y, n.y, r.y, i), Nt(t.x, e.x, n.x, r.x, i));
      }
      function Lt(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (qt(e)) {
          if (Vt(n)) return Tt(e, n.start, n, t, r);
        } else if (qt(n)) {
          if (zt(e)) return Tt(e, e.end, n, t, r);
        } else {
          if (zt(e))
            return Vt(n)
              ? Ft(e, e.end, n.start, n, t, r)
              : Tt(e, e.end, n, t, r);
          if (Vt(n)) return Tt(e, n.start, n, t, r);
        }
        return Pt(e, n, t, r);
      }
      function Dt(t, e, n) {
        var r = Lt(t, e, n, !0);
        return (
          (r.a =
            (function (t) {
              return arguments.length > 1 &&
                void 0 !== arguments[1] &&
                arguments[1]
                ? t + Math.PI
                : t;
            })(r.a) / m),
          r
        );
      }
      function qt(t) {
        return !t.type || "corner" === t.type;
      }
      function Vt(t) {
        return null != t.start && !qt(t);
      }
      function zt(t) {
        return null != t.end && !qt(t);
      }
      var Yt = new R();
      var Gt = {
          f: function (t) {
            return t ? t.join(" ") : "";
          },
          i: function (t, e, r) {
            if (0 === t) return e;
            if (1 === t) return r;
            var i = e.length;
            if (i !== r.length) return N(t, e, r);
            for (var o, u = new Array(i), a = 0; a < i; a++) {
              if ((o = n(e[a])) !== n(r[a])) return N(t, e, r);
              if ("number" === o) u[a] = F(t, e[a], r[a]);
              else {
                if (e[a] !== r[a]) return N(t, e, r);
                u[a] = e[a];
              }
            }
            return u;
          },
        },
        Ut = {
          f: null,
          i: Y,
          u: function (t, e) {
            return function (n) {
              var r = e(n);
              t.setAttribute("x1", yt(r[0])),
                t.setAttribute("y1", yt(r[1])),
                t.setAttribute("x2", yt(r[2])),
                t.setAttribute("y2", yt(r[3]));
            };
          },
        },
        $t = { f: yt, i: F },
        Wt = { f: yt, i: L },
        Ht = {
          f: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : " ";
            return (
              t &&
                t.length > 0 &&
                (t = t.map(function (t) {
                  return g(t, 4);
                })),
              dt(t, e)
            );
          },
          i: function (t, e, n) {
            var r,
              i,
              o,
              u = e.length,
              a = n.length;
            if (u !== a)
              if (0 === u) e = G((u = a), 0);
              else if (0 === a) (a = u), (n = G(u, 0));
              else {
                var s =
                  (o =
                    ((r = u) * (i = a)) /
                    (function (t, e) {
                      for (var n; e; ) (n = e), (e = t % e), (t = n);
                      return t || 1;
                    })(r, i)) < 0
                    ? -o
                    : o;
                (e = U(e, Math.floor(s / u))),
                  (n = U(n, Math.floor(s / a))),
                  (u = a = s);
              }
            for (var l = [], f = 0; f < u; f++) l.push(g(C(t, e[f], n[f])));
            return l;
          },
        };
      function Qt(t, e, n) {
        return t.map(function (t) {
          return (function (t, e, n) {
            var r = t.v;
            if (!r || "g" !== r.t || r.s || !r.v || !r.r) return t;
            var i = n.getElementById(r.r),
              o = (i && i.querySelectorAll("stop")) || [];
            return (
              (r.s = r.v.map(function (t, e) {
                var n = o[e] && o[e].getAttribute("offset");
                return { c: t, o: (n = g(parseInt(n) / 100)) };
              })),
              delete r.v,
              t
            );
          })(t, 0, n);
        });
      }
      var Xt = {
        gt: "gradientTransform",
        c: { x: "cx", y: "cy" },
        rd: "r",
        f: { x: "x1", y: "y1" },
        to: { x: "x2", y: "y2" },
      };
      function Jt(t, e, r, i, o, u, a, s) {
        return (
          Qt(t, 0, s),
          (e = (function (t, e, n) {
            for (var r, i, o, u = t.length - 1, a = {}, s = 0; s <= u; s++)
              (r = t[s]).e && (r.e = e(r.e)),
                r.v &&
                  "g" === (i = r.v).t &&
                  i.r &&
                  (o = n.getElementById(i.r)) &&
                  (a[i.r] = { e: o, s: o.querySelectorAll("stop") });
            return a;
          })(t, i, s)),
          function (i) {
            var o = r(i, t, Kt);
            if (!o) return "none";
            if ("c" === o.t) return pt(o.v);
            if ("g" === o.t) {
              if (!e[o.r]) return mt(o.r);
              var u = e[o.r];
              return (
                (function (t, e) {
                  for (var n = t.s, r = n.length; r < e.length; r++) {
                    var i = n[n.length - 1].cloneNode();
                    (i.id = ee(i.id)),
                      t.e.appendChild(i),
                      (n = t.s = t.e.querySelectorAll("stop"));
                  }
                  for (var o = 0, u = n.length, a = e.length - 1; o < u; o++)
                    n[o].setAttribute("stop-color", pt(e[Math.min(o, a)].c)),
                      n[o].setAttribute("offset", e[Math.min(o, a)].o);
                })(u, o.s),
                Object.keys(Xt).forEach(function (t) {
                  if (void 0 !== o[t])
                    if ("object" !== n(Xt[t])) {
                      var e,
                        r =
                          "gt" === t
                            ? ((e = o[t]),
                              Array.isArray(e)
                                ? "matrix(" + e.join(" ") + ")"
                                : "")
                            : o[t],
                        i = Xt[t];
                      u.e.setAttribute(i, r);
                    } else
                      Object.keys(Xt[t]).forEach(function (e) {
                        if (void 0 !== o[t][e]) {
                          var n = o[t][e],
                            r = Xt[t][e];
                          u.e.setAttribute(r, n);
                        }
                      });
                }),
                mt(o.r)
              );
            }
            return "none";
          }
        );
      }
      function Kt(t, n, r) {
        if (0 === t) return n;
        if (1 === t) return r;
        if (n && r) {
          var i = n.t;
          if (i === r.t)
            switch (n.t) {
              case "c":
                return { t: i, v: z(t, n.v, r.v) };
              case "g":
                if (n.r === r.r) {
                  var o = { t: i, s: Zt(t, n.s, r.s), r: n.r };
                  return (
                    n.gt && r.gt && (o.gt = Y(t, n.gt, r.gt)),
                    n.c
                      ? ((o.c = D(t, n.c, r.c)), (o.rd = C(t, n.rd, r.rd)))
                      : n.f &&
                        ((o.f = D(t, n.f, r.f)), (o.to = D(t, n.to, r.to))),
                    o
                  );
                }
            }
          if (("c" === n.t && "g" === r.t) || ("c" === r.t && "g" === n.t)) {
            var u = "c" === n.t ? n : r,
              a = "g" === n.t ? e({}, n) : e({}, r),
              s = a.s.map(function (t) {
                return { c: u.v, o: t.o };
              });
            return (a.s = "c" === n.t ? Zt(t, s, a.s) : Zt(t, a.s, s)), a;
          }
        }
        return N(t, n, r);
      }
      function Zt(t, e, n) {
        if (e.length === n.length)
          return e.map(function (e, r) {
            return te(t, e, n[r]);
          });
        for (var r = Math.max(e.length, n.length), i = [], o = 0; o < r; o++) {
          var u = te(
            t,
            e[Math.min(o, e.length - 1)],
            n[Math.min(o, n.length - 1)]
          );
          i.push(u);
        }
        return i;
      }
      function te(t, e, n) {
        return { o: L(t, e.o, n.o || 0), c: z(t, e.c, n.c || {}) };
      }
      function ee(t) {
        return t.replace(/-fill-([0-9]+)$/, function (t, e) {
          return "-fill-" + (+e + 1);
        });
      }
      var ne = {
        blur: q,
        brightness: C,
        contrast: C,
        "drop-shadow": function (t, e, n) {
          return 0 === t
            ? e
            : 1 === t
            ? n
            : {
                blur: q(t, e.blur, n.blur),
                offset: D(t, e.offset, n.offset),
                color: z(t, e.color, n.color),
              };
        },
        grayscale: C,
        "hue-rotate": F,
        invert: C,
        opacity: C,
        saturate: C,
        sepia: C,
      };
      function re(t, e, n) {
        if (0 === t) return e;
        if (1 === t) return n;
        var r = e.length;
        if (r !== n.length) return N(t, e, n);
        for (var i, o = [], u = 0; u < r; u++) {
          if (e[u].type !== n[u].type) return e;
          if (!(i = ne[e[u].type])) return N(t, e, n);
          o.push({ type: e.type, value: i(t, e[u].value, n[u].value) });
        }
        return o;
      }
      var ie = {
        blur: function (t) {
          return t
            ? function (e) {
                t.setAttribute("stdDeviation", gt(e));
              }
            : null;
        },
        brightness: function (t, e, n) {
          return (t = ue(n, e))
            ? function (e) {
                (e = yt(e)),
                  t.map(function (t) {
                    return t.setAttribute("slope", e);
                  });
              }
            : null;
        },
        contrast: function (t, e, n) {
          return (t = ue(n, e))
            ? function (e) {
                var n = yt((1 - e) / 2);
                (e = yt(e)),
                  t.map(function (t) {
                    t.setAttribute("slope", e), t.setAttribute("intercept", n);
                  });
              }
            : null;
        },
        "drop-shadow": function (t, e, n) {
          var r = n.getElementById(e + "-blur");
          if (!r) return null;
          var i = n.getElementById(e + "-offset");
          if (!i) return null;
          var o = n.getElementById(e + "-flood");
          return o
            ? function (t) {
                r.setAttribute("stdDeviation", gt(t.blur)),
                  i.setAttribute("dx", yt(t.offset.x)),
                  i.setAttribute("dy", yt(t.offset.y)),
                  o.setAttribute("flood-color", pt(t.color));
              }
            : null;
        },
        grayscale: function (t) {
          return t
            ? function (e) {
                t.setAttribute(
                  "values",
                  dt(
                    (function (t) {
                      return [
                        0.2126 + 0.7874 * (t = 1 - t),
                        0.7152 - 0.7152 * t,
                        0.0722 - 0.0722 * t,
                        0,
                        0,
                        0.2126 - 0.2126 * t,
                        0.7152 + 0.2848 * t,
                        0.0722 - 0.0722 * t,
                        0,
                        0,
                        0.2126 - 0.2126 * t,
                        0.7152 - 0.7152 * t,
                        0.0722 + 0.9278 * t,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                      ];
                    })(e)
                  )
                );
              }
            : null;
        },
        "hue-rotate": function (t) {
          return t
            ? function (e) {
                return t.setAttribute("values", yt(e));
              }
            : null;
        },
        invert: function (t, e, n) {
          return (t = ue(n, e))
            ? function (e) {
                (e = yt(e) + " " + yt(1 - e)),
                  t.map(function (t) {
                    return t.setAttribute("tableValues", e);
                  });
              }
            : null;
        },
        opacity: function (t, e, n) {
          return (t = n.getElementById(e + "-A"))
            ? function (e) {
                return t.setAttribute("tableValues", "0 " + yt(e));
              }
            : null;
        },
        saturate: function (t) {
          return t
            ? function (e) {
                return t.setAttribute("values", yt(e));
              }
            : null;
        },
        sepia: function (t) {
          return t
            ? function (e) {
                return t.setAttribute(
                  "values",
                  dt(
                    (function (t) {
                      return [
                        0.393 + 0.607 * (t = 1 - t),
                        0.769 - 0.769 * t,
                        0.189 - 0.189 * t,
                        0,
                        0,
                        0.349 - 0.349 * t,
                        0.686 + 0.314 * t,
                        0.168 - 0.168 * t,
                        0,
                        0,
                        0.272 - 0.272 * t,
                        0.534 - 0.534 * t,
                        0.131 + 0.869 * t,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                      ];
                    })(e)
                  )
                );
              }
            : null;
        },
      };
      var oe = ["R", "G", "B"];
      function ue(t, e) {
        var n = oe.map(function (n) {
          return t.getElementById(e + "-" + n) || null;
        });
        return -1 !== n.indexOf(null) ? null : n;
      }
      var ae = {
          fill: Jt,
          "fill-opacity": Wt,
          stroke: Jt,
          "stroke-opacity": Wt,
          "stroke-width": $t,
          "stroke-dashoffset": { f: yt, i: F },
          "stroke-dasharray": Ht,
          opacity: Wt,
          transform: function (t, e, r, i) {
            if (
              !(t = (function (t, e) {
                if (!t || "object" !== n(t)) return null;
                var r = !1;
                for (var i in t)
                  t.hasOwnProperty(i) &&
                    (t[i] && t[i].length
                      ? (t[i].forEach(function (t) {
                          t.e && (t.e = e(t.e));
                        }),
                        (r = !0))
                      : delete t[i]);
                return r ? t : null;
              })(t, i))
            )
              return null;
            var o = function (n, i, o) {
              var u =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return t[n] ? r(i, t[n], o) : e && e[n] ? e[n] : u;
            };
            return e && e.a && t.o
              ? function (e) {
                  var n = r(e, t.o, Dt);
                  return Yt.recomposeSelf(
                    n,
                    o("r", e, F, 0) + n.a,
                    o("k", e, D),
                    o("s", e, D),
                    o("t", e, D)
                  ).toString();
                }
              : function (t) {
                  return Yt.recomposeSelf(
                    o("o", t, Lt, null),
                    o("r", t, F, 0),
                    o("k", t, D),
                    o("s", t, D),
                    o("t", t, D)
                  ).toString();
                };
          },
          "#filter": function (t, e, n, r, i, o, u, a) {
            if (!e.items || !t || !t.length) return null;
            var s = (function (t, e) {
              var n = (t = t.map(function (t) {
                return t && ie[t[0]]
                  ? (e.getElementById(t[1]),
                    ie[t[0]](e.getElementById(t[1]), t[1], e))
                  : null;
              })).length;
              return function (e) {
                for (var r = 0; r < n; r++) t[r] && t[r](e[r].value);
              };
            })(e.items, a);
            return s
              ? ((t = (function (t, e) {
                  return t.map(function (t) {
                    return (t.e = e(t.e)), t;
                  });
                })(t, r)),
                function (e) {
                  s(n(e, t, re));
                })
              : null;
          },
          "#line": Ut,
          points: { f: dt, i: Y },
          d: Gt,
          r: $t,
          "#size": kt,
          "#radius": bt,
          _: function (t, e) {
            if (Array.isArray(t))
              for (var n = 0; n < t.length; n++) this[t[n]] = e;
            else this[t] = e;
          },
        },
        se = {
          currentTime: "offset",
          duration: "duration",
          hasEnded: function () {
            return this.reachedToEnd();
          },
          isAlternate: "alternate",
          isPlaying: "_running",
          isRollingBack: "_rollingBack",
          state: function (t, e) {
            return e.isPlaying
              ? e.isRollingBack
                ? "rollback"
                : "playing"
              : e.hasEnded
              ? "ended"
              : "paused";
          },
          totalTime: "maxFiniteDuration",
          iterations: "iterations",
          direction: "direction",
          fill: "fill",
          isReversed: function (t, e) {
            return -1 === e.direction;
          },
          isBackwards: function (t, e) {
            return -1 === e.fill;
          },
          isInfinite: function (t, e) {
            return 0 === e.iterations;
          },
          speed: "speed",
          fps: "fps",
        },
        le = {
          destruct: "destruct",
          pause: "pause",
          play: function (t, e) {
            return fe(t, e.hasEnded ? "restart" : "play", e);
          },
          restart: "restart",
          reverse: function (t, e) {
            return fe(t, "reverse", e, [!0]);
          },
          seek: "seek",
          seekBy: "seekBy",
          seekTo: "seekTo",
          stop: "stop",
          toggle: "toggle",
          togglePlay: "toggle",
          set: "set",
        };
      function fe(t, e, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
        return function () {
          var i,
            o = Array.prototype.slice.call(arguments);
          return (
            o.unshift.apply(o, v(r)),
            (i = t[e]).call.apply(i, [t].concat(v(o))),
            n
          );
        };
      }
      var ce = function t(e) {
        r(this, t);
        var n = {},
          i = ["on", "off"],
          o = {
            get: function (t, e, r) {
              return se[e]
                ? "function" == typeof se[e]
                  ? se[e].call(t, t, r)
                  : t[se[e]]
                : le[e]
                ? "function" == typeof le[e]
                  ? le[e].call(t, t, r)
                  : fe(t, le[e], r)
                : -1 !== i.indexOf(e)
                ? n[e]
                : "ready" === e
                ? function (t) {
                    return t && t.call(r, r), r;
                  }
                : void 0;
            },
            set: function (t, e, r) {
              return -1 !== i.indexOf(e) && (n[e] = r);
            },
            ownKeys: function (t) {
              return Object.keys(se);
            },
            has: function (t, e) {
              return void 0 !== se[e];
            },
          };
        if ("function" == typeof Proxy) return new Proxy(e, o);
        var u = Object.keys(se).concat(Object.keys(le)).concat(i),
          a = {};
        return (
          u.forEach(function (t) {
            var n = {
              enumerable: !1,
              configurable: !1,
              get: function () {
                return o.get(e, t, a);
              },
            };
            -1 !== i.indexOf(t) &&
              (n.set = function (n) {
                return o.set(e, t, n);
              }),
              Object.defineProperty(a, t, n);
          }),
          a
        );
      };
      function he(t) {
        t || (t = this);
        var e = {};
        (this.on = function (t, n) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return (
            "function" == typeof n &&
            (t.split(/[, ]+/g).forEach(function (t) {
              return (e[t] = e[t] || []), r ? e[t].unshift(n) : e[t].push(n);
            }),
            !0)
          );
        }),
          (this.off = function (t, n) {
            for (var r in e)
              if (e.hasOwnProperty(r) && r.substr(0, t.length) === t)
                if (n)
                  for (var i = 0; i < e[r].length; i++)
                    e[r][i] === n && (e[r][i] = null);
                else e[r] = null;
          }),
          (this.trigger = function () {
            var n,
              r = Array.prototype.slice.call(arguments),
              i = r[0],
              o = r.slice(1);
            t: for (var u in e)
              if (
                e.hasOwnProperty(u) &&
                e[u] &&
                (u === i || u.substr(0, i.length + 1) === i + ".")
              )
                for (var a = 0; a < e[u].length; a++)
                  if (e[u][a] && !1 === (n = e[u][a].apply(t, o))) break t;
            return n;
          });
      }
      var ve = !0,
        ye = ["iterations", "speed", "fps", "direction", "fill", "alternate"],
        de = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && s(t, e);
          })(u, t);
          var e,
            n,
            i =
              ((e = u),
              (n = l()),
              function () {
                var t,
                  r = a(e);
                if (n) {
                  var i = a(this).constructor;
                  t = Reflect.construct(r, arguments, i);
                } else t = r.apply(this, arguments);
                return c(this, t);
              });
          function u(t, e) {
            var n,
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null;
            return r(this, u), ((n = i.call(this, t, e, o))._handlers = []), n;
          }
          return (
            o(
              u,
              [
                {
                  key: "_adjustOffset",
                  value: function () {
                    var t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0],
                      e = this.alternate ? 2 * this.duration : this.duration;
                    if (t) {
                      if (!this._rollingBack && 0 === this.offset)
                        return void (this.offset = e);
                      this._rollingBack &&
                        (this.offset, this.maxFiniteDuration);
                    }
                    !this._rollingBack ||
                    this.rollbackStartOffset <= this.duration
                      ? 0 !== this.iterations &&
                        (this.offset = Math.min(
                          this.offset,
                          this.maxFiniteDuration
                        ))
                      : ((this.offset =
                          this.rollbackStartOffset -
                          ((this.rollbackStartOffset - this.offset) % e)),
                        (this.rollbackStartOffset = 0));
                  },
                },
                {
                  key: "reverse",
                  value: function () {
                    var t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    if (!this._running)
                      return (
                        this._adjustOffset(t),
                        (this._rollingBack = !this._rollingBack),
                        t && this.play(!1),
                        void this.trigger("reverse", this.offset)
                      );
                    this.pause(!1, !1),
                      this._adjustOffset(),
                      (this._rollingBack = !this._rollingBack),
                      this.play(!1),
                      this.trigger("reverse", this.offset);
                  },
                },
                {
                  key: "play",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : ve,
                      e = h(a(u.prototype), "play", this).call(this);
                    return t === ve && this.trigger("play", this.offset), e;
                  },
                },
                {
                  key: "pause",
                  value: function () {
                    var t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0],
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : ve,
                      n = h(a(u.prototype), "pause", this).call(this);
                    return (
                      e === ve &&
                        this.trigger(t ? "end" : "pause", this.offset),
                      n
                    );
                  },
                },
                {
                  key: "restart",
                  value: function () {
                    var t = h(a(u.prototype), "restart", this).call(this, !1);
                    return this.trigger("restart", this.offset), t;
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : ve,
                      e = h(a(u.prototype), "stop", this).call(this);
                    return t === ve && this.trigger("stop", this.offset), e;
                  },
                },
                {
                  key: "_apply",
                  value: function (t) {
                    var e = this,
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : ve,
                      r = h(a(u.prototype), "_apply", this).call(this, t);
                    if (n === ve) {
                      var i = function () {
                        return e.trigger("keyframe", t);
                      };
                      window.requestAnimationFrame(i);
                    }
                    return r;
                  },
                },
                {
                  key: "seekTo",
                  value: function (t) {
                    var e,
                      n,
                      r,
                      i = this._running;
                    i && this.pause(!1, !1),
                      (this.offset =
                        this.iterations > 0
                          ? ((e = t),
                            (n = 0),
                            (r = this.maxFiniteDuration),
                            e < n ? n : e > r ? r : e)
                          : Math.max(t, 0)),
                      this._apply(this.offset),
                      i && this.play(!1);
                  },
                },
                {
                  key: "seek",
                  value: function (t) {
                    return this.seekTo(
                      Math.round((t / 100) * this.maxFiniteDuration)
                    );
                  },
                },
                {
                  key: "seekBy",
                  value: function (t) {
                    return this.seekTo(this.offset + t);
                  },
                },
                {
                  key: "toggle",
                  value: function () {
                    return this._running
                      ? this.pause()
                      : this.reachedToEnd()
                      ? this.restart()
                      : this.play();
                  },
                },
                {
                  key: "set",
                  value: function (t, e) {
                    if (ye.includes(t)) {
                      var n = this._running;
                      n && this.pause(!1, !1),
                        (this._settings[t] = e),
                        n ? this.play(!1) : this._apply(this.offset, {}, !1);
                    }
                  },
                },
                {
                  key: "destruct",
                  value: function () {
                    var t = this;
                    this.stop(),
                      this._handlers.forEach(function (t) {
                        t.element
                          ? t.element.removeEventListener(t.event, t.handler)
                          : t.callback && t.callback.call && t.callback.call();
                      });
                    var e = function () {},
                      n = Object.getOwnPropertyNames(
                        Object.getPrototypeOf(this)
                      );
                    n.push.apply(n, v(Object.getOwnPropertyNames(this))),
                      n.forEach(function (n) {
                        "function" == typeof t[n] ? (t[n] = e) : delete t[n];
                      });
                  },
                },
              ],
              [
                {
                  key: "build",
                  value: function (t) {
                    var e = h(a(u), "build", this).call(this, t, ae);
                    if (!e) return null;
                    var n = e.el,
                      r = e.options,
                      i = e.player,
                      o = new ce(i),
                      s = new he(o);
                    (o.on = s.on), (o.off = s.off), (i.trigger = s.trigger);
                    var l =
                      n.svgatorPlayer &&
                      n.svgatorPlayer.ready &&
                      n.svgatorPlayer.ready.call &&
                      n.svgatorPlayer.ready.call();
                    (n.svgatorPlayer = o),
                      (function (t, e, n) {
                        if ("click" === n.start) {
                          var r = function () {
                            switch (n.click) {
                              case "freeze":
                                return !t._running && t.reachedToEnd()
                                  ? t.restart()
                                  : t.toggle();
                              case "restart":
                                return t.offset > 0 ? t.restart() : t.play();
                              case "reverse":
                                return t._running
                                  ? t.reverse()
                                  : t.reachedToEnd()
                                  ? 1 === t.fill
                                    ? t.reverse(!0)
                                    : t.restart()
                                  : t.play();
                              case "none":
                              default:
                                if (t._running) return;
                                return t.reachedToEnd()
                                  ? t.restart()
                                  : t.play();
                            }
                          };
                          return (
                            t._handlers.push({
                              element: e,
                              event: "click",
                              handler: r,
                            }),
                            void e.addEventListener("click", r)
                          );
                        }
                        if ("hover" === n.start) {
                          var i = function () {
                            return t.reachedToEnd()
                              ? t.restart()
                              : t._rollingBack
                              ? t.reverse()
                              : t.play();
                          };
                          t._handlers.push({
                            element: e,
                            event: "mouseenter",
                            handler: i,
                          }),
                            e.addEventListener("mouseenter", i);
                          var o = function () {
                            switch (n.hover) {
                              case "freeze":
                                return t.pause();
                              case "reset":
                                return t.stop();
                              case "reverse":
                                if ((t.reverse(), t._running)) return;
                                return t.play();
                              case "none":
                              default:
                                return;
                            }
                          };
                          return (
                            t._handlers.push({
                              element: e,
                              event: "mouseleave",
                              handler: o,
                            }),
                            void e.addEventListener("mouseleave", o)
                          );
                        }
                        if ("scroll" === n.start) {
                          var u = new vt(e, n.scroll || 25, function (e) {
                            e
                              ? t.reachedToEnd()
                                ? t.restart()
                                : t.play()
                              : t.pause();
                          });
                          return void t._handlers.push({
                            callback: function () {
                              return u.destruct();
                            },
                          });
                        }
                        if ("programmatic" === n.start) return;
                        t.play();
                      })(i, n, r),
                      (function (t, e, n) {
                        var r;
                        "function" == typeof Event
                          ? (r = new Event("ready"))
                          : (r = document.createEvent("Event")).initEvent(
                              "ready",
                              !0,
                              !0
                            );
                        if ((t.dispatchEvent(r), !n || !n.length)) return;
                        n.forEach(function (t) {
                          return e.ready(t);
                        });
                      })(n, n.svgatorPlayer, l);
                  },
                },
              ]
            ),
            u
          );
        })(ct);
      return de.init(), de;
    });
    (function (s, i, o, w, a, b) {
      if (!document.getElementById(i.root)) {
        return;
      }
      (a = document.getElementById(i.root)).svgatorPlayer = {
        ready: (function (a) {
          b = [];
          return function (c) {
            return c ? (b.push(c), a.svgatorPlayer) : b;
          };
        })(a),
      };
      w[o] = w[o] || {};
      w[o][s] = w[o][s] || [];
      w[o][s].push(i);
    })(
      "91c80d77",
      {
        root: "eSVi1URbIc71",
        version: "2022-05-04",
        animations: [
          {
            elements: {
              eSVi1URbIc712: {
                transform: {
                  data: {
                    s: { x: 1.965405, y: 1.965405 },
                    t: { x: -14.654189, y: -81.264256 },
                  },
                  keys: {
                    o: [
                      {
                        t: 0,
                        v: { x: -38.68472, y: 76.329181, type: "corner" },
                      },
                      {
                        t: 500,
                        v: { x: 181.090679, y: 76.329181, type: "corner" },
                      },
                    ],
                  },
                },
              },
            },
            s:
              "MDAA1M1E4NTJjNBmU3ZjdjNmI3LZTczNzlENzgHyYzQ0M2IzYTQNhM2EzNjJjNAmU3MzdjNmY2TZDdlNzM3OTcQ4MmM0NDNiMzQYyYzczN2VFNMmY3YzZiN2U3IMzc5Nzg3ZDJJjNDRTM2EzNlBEyYzcwVjczNMzY3NjJjNDQzSYjM2MmM2YlEP3NjdlNmZQN2PM3ODZiN2VZNRmYyYzQ0NzA2PYjc2SzdkNmZUDMzYyYzdkN2SE2Zlk2ZjZlMSmM0NDNiODc/R",
          },
        ],
        options: "MDXAxMDgyMjk3YWTdiNjg3OTdiURTI5NDFIMjkW3Mzc2Njg2YjEI5ODQ/",
      },
      "__SVGATOR_PLAYER__",
      window
    );
  }, []);

  return (
    <svg
      id="eSVi1URbIc71"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 150"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
    >
      <defs>
        <linearGradient
          id="eSVi1URbIc712-fill"
          x1="0"
          y1="0.5"
          x2="0.5"
          y2="0.5"
          spreadMethod="reflect"
          gradientUnits="objectBoundingBox"
          gradientTransform="translate(0 0)"
        >
          <stop
            id="eSVi1URbIc712-fill-0"
            offset="0%"
            stop-color="rgba(213,224,249,0)"
          />
          <stop
            id="eSVi1URbIc712-fill-1"
            offset="100%"
            stop-color="rgba(213,224,249,0.6)"
          />
        </linearGradient>
      </defs>
      <g>
        <rect width="150" height="150" rx="3" ry="3" fill="#dee6f7" />
        <g clipPath="url(#eSVi1URbIc79)">
          <g>
            <path
              d="M54.6132,97.0869c-5.5366,0-10.4614-3.5449-12.2497-8.8225l-.121-.3976c-.4217-1.3976-.5984-2.573-.5984-3.7489v-23.5799l-8.39,28.0063c-1.079,4.1194,1.3799,8.39,5.5055,9.528L92.2374,112.394c.6675.173,1.3349.256,1.9922.256c3.4443,0,6.5914-2.286,7.4734-5.655l3.116-9.9081h-50.2058Z"
              fill="#eef3ff"
            />
            <path
              d="M64.1239,60.7736c3.8147,0,6.9164-3.1024,6.9164-6.9171s-3.1017-6.917-6.9164-6.917c-3.8148,0-6.9171,3.1023-6.9171,6.917s3.1023,6.9171,6.9171,6.9171Z"
              fill="#eef3ff"
            />
            <path
              d="M107.354,36.5642h-51.8766c-4.7652,0-8.6458,3.8806-8.6458,8.6465v38.0421c0,4.7659,3.8806,8.6465,8.6458,8.6465h51.8766c4.766,0,8.646-3.8806,8.646-8.6465v-38.0421c0-4.7659-3.88-8.6465-8.646-8.6465ZM55.4774,43.4813h51.8766c.955,0,1.729.7744,1.729,1.7294v24.5513L98.1582,57.0139c-1.1589-1.3589-2.8364-2.0853-4.638-2.1265-1.7915.0102-3.4721.8055-4.6202,2.1822L76.055,72.4869l-4.1845-4.1744c-2.3652-2.3652-6.2148-2.3652-8.5768,0l-9.5451,9.5419v-32.6437c0-.955.7745-1.7294,1.7288-1.7294Z"
              fill="#eef3ff"
            />
          </g>
          <clipPath id="eSVi1URbIc79">
            <rect
              width="83"
              height="83"
              rx="0"
              ry="0"
              transform="translate(33 33)"
              fill="#fff"
            />
          </clipPath>
        </g>
      </g>
      <g mask="url(#eSVi1URbIc713)">
        <rect
          id="eSVi1URbIc712"
          width="29.308378"
          height="162.528513"
          rx="0"
          ry="0"
          transform="matrix(1.965405 0 0 1.965405-67.486136-83.387994)"
          fill="url(#eSVi1URbIc712-fill)"
          stroke-width="0"
        />
        <mask id="eSVi1URbIc713" mask-type="luminance">
          <g>
            <rect width="150" height="150" rx="3" ry="3" fill="#dee6f7" />
            <g clipPath="url(#eSVi1URbIc721)">
              <g>
                <path
                  d="M54.6132,97.0869c-5.5366,0-10.4614-3.5449-12.2497-8.8225l-.121-.3976c-.4217-1.3976-.5984-2.573-.5984-3.7489v-23.5799l-8.39,28.0063c-1.079,4.1194,1.3799,8.39,5.5055,9.528L92.2374,112.394c.6675.173,1.3349.256,1.9922.256c3.4443,0,6.5914-2.286,7.4734-5.655l3.116-9.9081h-50.2058Z"
                  fill="#eef3ff"
                />
                <path
                  d="M64.1239,60.7736c3.8147,0,6.9164-3.1024,6.9164-6.9171s-3.1017-6.917-6.9164-6.917c-3.8148,0-6.9171,3.1023-6.9171,6.917s3.1023,6.9171,6.9171,6.9171Z"
                  fill="#eef3ff"
                />
                <path
                  d="M107.354,36.5642h-51.8766c-4.7652,0-8.6458,3.8806-8.6458,8.6465v38.0421c0,4.7659,3.8806,8.6465,8.6458,8.6465h51.8766c4.766,0,8.646-3.8806,8.646-8.6465v-38.0421c0-4.7659-3.88-8.6465-8.646-8.6465ZM55.4774,43.4813h51.8766c.955,0,1.729.7744,1.729,1.7294v24.5513L98.1582,57.0139c-1.1589-1.3589-2.8364-2.0853-4.638-2.1265-1.7915.0102-3.4721.8055-4.6202,2.1822L76.055,72.4869l-4.1845-4.1744c-2.3652-2.3652-6.2148-2.3652-8.5768,0l-9.5451,9.5419v-32.6437c0-.955.7745-1.7294,1.7288-1.7294Z"
                  fill="#eef3ff"
                />
              </g>
              <clipPath id="eSVi1URbIc721">
                <rect
                  width="83"
                  height="83"
                  rx="0"
                  ry="0"
                  transform="translate(33 33)"
                  fill="#fff"
                />
              </clipPath>
            </g>
          </g>
        </mask>
      </g>
    </svg>
  );
};
