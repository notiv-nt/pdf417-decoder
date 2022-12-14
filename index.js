var bigInt = function(e) {
  "use strict";

  function o(e, t) {
    this.value = e, this.sign = t, this.isSmall = !1
  }

  function u(e) {
    this.value = e, this.sign = e < 0, this.isSmall = !0
  }

  function a(e) {
    return -r < e && e < r
  }

  function f(e) {
    return e < 1e7 ? [e] : e < 1e14 ? [e % 1e7, Math.floor(e / 1e7)] : [e % 1e7, Math.floor(e / 1e7) % 1e7, Math.floor(e / 1e14)]
  }

  function l(e) {
    c(e);
    var n = e.length;
    if (n < 4 && A(e, i) < 0) switch (n) {
      case 0:
        return 0;
      case 1:
        return e[0];
      case 2:
        return e[0] + e[1] * t;
      default:
        return e[0] + (e[1] + e[2] * t) * t
    }
    return e
  }

  function c(e) {
    var t = e.length;
    while (e[--t] === 0);
    e.length = t + 1
  }

  function h(e) {
    var t = new Array(e),
      n = -1;
    while (++n < e) t[n] = 0;
    return t
  }

  function p(e) {
    return e > 0 ? Math.floor(e) : Math.ceil(e)
  }

  function d(e, n) {
    var r = e.length,
      i = n.length,
      s = new Array(r),
      o = 0,
      u = t,
      a, f;
    for (f = 0; f < i; f++) a = e[f] + n[f] + o, o = a >= u ? 1 : 0, s[f] = a - o * u;
    while (f < r) a = e[f] + o, o = a === u ? 1 : 0, s[f++] = a - o * u;
    return o > 0 && s.push(o), s
  }

  function v(e, t) {
    return e.length >= t.length ? d(e, t) : d(t, e)
  }

  function m(e, n) {
    var r = e.length,
      i = new Array(r),
      s = t,
      o, u;
    for (u = 0; u < r; u++) o = e[u] - s + n, n = Math.floor(o / s), i[u] = o - n * s, n += 1;
    while (n > 0) i[u++] = n % s, n = Math.floor(n / s);
    return i
  }

  function g(e, n) {
    var r = e.length,
      i = n.length,
      s = new Array(r),
      o = 0,
      u = t,
      a, f;
    for (a = 0; a < i; a++) f = e[a] - o - n[a], f < 0 ? (f += u, o = 1) : o = 0, s[a] = f;
    for (a = i; a < r; a++) {
      f = e[a] - o;
      if (!(f < 0)) {
        s[a++] = f;
        break
      }
      f += u, s[a] = f
    }
    for (; a < r; a++) s[a] = e[a];
    return c(s), s
  }

  function y(e, t, n) {
    var r, i;
    return A(e, t) >= 0 ? r = g(e, t) : (r = g(t, e), n = !n), r = l(r), typeof r == "number" ? (n && (r = -r), new u(r)) : new o(r, n)
  }

  function b(e, n, r) {
    var i = e.length,
      s = new Array(i),
      a = -n,
      f = t,
      c, h;
    for (c = 0; c < i; c++) h = e[c] + a, a = Math.floor(h / f), s[c] = h < 0 ? h % f + f : h;
    return s = l(s), typeof s == "number" ? (r && (s = -s), new u(s)) : new o(s, r)
  }

  function w(e, n) {
    var r = e.length,
      i = n.length,
      s = r + i,
      o = h(s),
      u = t,
      a, f, l, p, d;
    for (l = 0; l < r; ++l) {
      p = e[l];
      for (var v = 0; v < i; ++v) d = n[v], a = p * d + o[l + v], f = Math.floor(a / u), o[l + v] = a - f * u, o[l + v + 1] += f
    }
    return c(o), o
  }

  function E(e, n) {
    var r = e.length,
      i = new Array(r),
      s = t,
      o = 0,
      u, a;
    for (a = 0; a < r; a++) u = e[a] * n + o, o = Math.floor(u / s), i[a] = u - o * s;
    while (o > 0) i[a++] = o % s, o = Math.floor(o / s);
    return i
  }

  function S(e, t) {
    var n = [];
    while (t-- > 0) n.push(0);
    return n.concat(e)
  }

  function x(e, t) {
    var n = Math.max(e.length, t.length);
    if (n <= 400) return w(e, t);
    n = Math.ceil(n / 2);
    var r = e.slice(n),
      i = e.slice(0, n),
      s = t.slice(n),
      o = t.slice(0, n),
      u = x(i, o),
      a = x(r, s),
      f = x(v(i, r), v(o, s));
    return v(v(u, S(g(g(f, u), a), n)), S(a, 2 * n))
  }

  function T(e) {
    var n = e.length,
      r = h(n + n),
      i = t,
      s, o, u, a, f;
    for (u = 0; u < n; u++) {
      a = e[u];
      for (var l = 0; l < n; l++) f = e[l], s = a * f + r[u + l], o = Math.floor(s / i), r[u + l] = s - o * i, r[u + l + 1] += o
    }
    return c(r), r
  }

  function N(e, n) {
    var r = e.length,
      i = n.length,
      s = t,
      o = h(n.length),
      u = n[i - 1],
      a = Math.ceil(s / (2 * u)),
      f = E(e, a),
      c = E(n, a),
      p, d, v, m, g, y, b;
    f.length <= r && f.push(0), c.push(0), u = c[i - 1];
    for (d = r - i; d >= 0; d--) {
      p = s - 1, p = Math.floor((f[d + i] * s + f[d + i - 1]) / u), v = 0, m = 0, y = c.length;
      for (g = 0; g < y; g++) v += p * c[g], b = Math.floor(v / s), m += f[d + g] - (v - b * s), v = b, m < 0 ? (f[d + g] = m + s, m = -1) : (f[d + g] = m, m = 0);
      while (m !== 0) {
        p -= 1, v = 0;
        for (g = 0; g < y; g++) v += f[d + g] - s + c[g], v < 0 ? (f[d + g] = v + s, v = 0) : (f[d + g] = v, v = 1);
        m += v
      }
      o[d] = p
    }
    return f = k(f, a)[0], [l(o), l(f)]
  }

  function C(e, n) {
    var r = e.length,
      i = n.length,
      s = [],
      o = [],
      u = t,
      a, f, c, h, p;
    while (r) {
      o.unshift(e[--r]);
      if (A(o, n) < 0) {
        s.push(0);
        continue
      }
      f = o.length, c = o[f - 1] * u + o[f - 2], h = n[i - 1] * u + n[i - 2], f > i && (c = (c + 1) * u), a = Math.ceil(c / h);
      do {
        p = E(n, a);
        if (A(p, o) <= 0) break;
        a--
      } while (a);
      s.push(a), o = g(o, p)
    }
    return s.reverse(), [l(s), l(o)]
  }

  function k(e, n) {
    var r = e.length,
      i = h(r),
      s = t,
      o, u, a, f;
    a = 0;
    for (o = r - 1; o >= 0; --o) f = a * s + e[o], u = p(f / n), a = f - u * n, i[o] = u | 0;
    return [i, a | 0]
  }

  function L(e, n) {
    var r, i = z(n),
      s = e.value,
      a = i.value,
      c;
    if (a === 0) throw new Error("Cannot divide by zero");
    if (e.isSmall) return i.isSmall ? [new u(p(s / a)), new u(s % a)] : [W[0], e];
    if (i.isSmall) {
      if (a === 1) return [e, W[0]];
      if (a == -1) return [e.negate(), W[0]];
      var h = Math.abs(a);
      if (h < t) {
        r = k(s, h), c = l(r[0]);
        var d = r[1];
        return e.sign && (d = -d), typeof c == "number" ? (e.sign !== i.sign && (c = -c), [new u(c), new u(d)]) : [new o(c, e.sign !== i.sign), new u(d)]
      }
      a = f(h)
    }
    var v = A(s, a);
    if (v === -1) return [W[0], e];
    if (v === 0) return [W[e.sign === i.sign ? 1 : -1], W[0]];
    s.length + a.length <= 200 ? r = N(s, a) : r = C(s, a), c = r[0];
    var m = e.sign !== i.sign,
      g = r[1],
      y = e.sign;
    return typeof c == "number" ? (m && (c = -c), c = new u(c)) : c = new o(c, m), typeof g == "number" ? (y && (g = -g), g = new u(g)) : g = new o(g, y), [c, g]
  }

  function A(e, t) {
    if (e.length !== t.length) return e.length > t.length ? 1 : -1;
    for (var n = e.length - 1; n >= 0; n--)
      if (e[n] !== t[n]) return e[n] > t[n] ? 1 : -1;
    return 0
  }

  function D(e) {
    return (typeof e == "number" || typeof e == "string") && +Math.abs(e) <= t || e instanceof o && e.value.length <= 1
  }

  function P(e, t, n) {
    t = z(t);
    var r = e.isNegative(),
      i = t.isNegative(),
      s = r ? e.not() : e,
      o = i ? t.not() : t,
      u = [],
      a = [],
      f = !1,
      l = !1;
    while (!f || !l) s.isZero() ? (f = !0, u.push(r ? 1 : 0)) : r ? u.push(s.isEven() ? 1 : 0) : u.push(s.isEven() ? 0 : 1), o.isZero() ? (l = !0, a.push(i ? 1 : 0)) : i ? a.push(o.isEven() ? 1 : 0) : a.push(o.isEven() ? 0 : 1), s = s.over(2), o = o.over(2);
    var c = [];
    for (var h = 0; h < u.length; h++) c.push(n(u[h], a[h]));
    var p = bigInt(c.pop()).negate().times(bigInt(2).pow(c.length));
    while (c.length) p = p.add(bigInt(c.pop()).times(bigInt(2).pow(c.length)));
    return p
  }

  function H(e, t) {
    return e = z(e), t = z(t), e.greater(t) ? e : t
  }

  function B(e, t) {
    return e = z(e), t = z(t), e.lesser(t) ? e : t
  }

  function j(e, t) {
    return e = z(e).abs(), t = z(t).abs(), e.equals(t) ? e : e.isZero() ? t : t.isZero() ? e : e.isEven() ? t.isOdd() ? j(e.divide(2), t) : j(e.divide(2), t.divide(2)).multiply(2) : t.isEven() ? j(e, t.divide(2)) : e.greater(t) ? j(e.subtract(t).divide(2), t) : j(t.subtract(e).divide(2), e)
  }

  function F(e, t) {
    return e = z(e).abs(), t = z(t).abs(), e.multiply(t).divide(j(e, t))
  }

  function I(e, n) {
    e = z(e), n = z(n);
    var r = B(e, n),
      i = H(e, n),
      s = i.subtract(r);
    if (s.isSmall) return r.add(Math.random() * s);
    var u = s.value.length - 1,
      a = [],
      f = !0;
    for (var c = u; c >= 0; c--) {
      var h = f ? s.value[c] : t,
        d = p(Math.random() * h);
      a.unshift(d), d < h && (f = !1)
    }
    return a = l(a), r.add(new o(a, !1, typeof a == "number"))
  }

  function R(e) {
    var t = e.value;
    return typeof t == "number" && (t = [t]), t.length === 1 && t[0] <= 36 ? "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t[0]) : "<" + t + ">"
  }

  function U(e, t) {
    t = bigInt(t);
    if (t.isZero()) {
      if (e.isZero()) return "0";
      throw new Error("Cannot convert nonzero numbers to base 0.")
    }
    if (t.equals(-1)) return e.isZero() ? "0" : e.isNegative() ? (new Array(1 - e)).join("10") : "1" + (new Array(+e)).join("01");
    var n = "";
    e.isNegative() && t.isPositive() && (n = "-", e = e.abs());
    if (t.equals(1)) return e.isZero() ? "0" : n + (new Array(+e + 1)).join(1);
    var r = [],
      i = e,
      s;
    while (i.isNegative() || i.compareAbs(t) >= 0) {
      s = i.divmod(t), i = s.quotient;
      var o = s.remainder;
      o.isNegative() && (o = t.minus(o).abs(), i = i.next()), r.push(R(o))
    }
    return r.push(R(i)), n + r.reverse().join("")
  }

  function z(e) {
    if (e instanceof o || e instanceof u) return e;
    if (typeof e == "number") {
      if (a(e)) return new u(e);
      e = String(e)
    }
    if (typeof e == "string") {
      if (a(+e)) {
        var t = +e;
        if (t === p(t)) return new u(t);
        throw "Invalid integer: " + e
      }
      var r = e[0] === "-";
      r && (e = e.slice(1));
      var i = e.split(/e/i);
      if (i.length > 2) throw new Error("Invalid integer: " + f.join("e"));
      if (i.length === 2) {
        var s = i[1];
        s[0] === "+" && (s = s.slice(1)), s = +s;
        if (s !== p(s) || !a(s)) throw new Error("Invalid integer: " + s + " is not a valid exponent.");
        var f = i[0],
          l = f.indexOf(".");
        l >= 0 && (s -= f.length - l, f = f.slice(0, l) + f.slice(l + 1));
        if (s < 0) throw new Error("Cannot include negative exponent part for integers");
        f += (new Array(s + 1)).join("0"), e = f
      }
      var h = /^([0-9][0-9]*)$/.test(e);
      if (!h) throw new Error("Invalid integer: " + e);
      var d = [],
        v = e.length,
        m = n,
        g = v - m;
      while (v > 0) d.push(+e.slice(g, v)), g -= m, g < 0 && (g = 0), v -= m;
      return c(d), new o(d, r)
    }
  }
  var t = 1e7,
    n = 7,
    r = 9007199254740992,
    i = f(r),
    s = Math.log(r);
  o.prototype.add = function(e) {
    var t, n = z(e);
    if (this.sign !== n.sign) return this.subtract(n.negate());
    var r = this.value,
      i = n.value;
    return n.isSmall ? new o(m(r, Math.abs(i)), this.sign) : new o(v(r, i), this.sign)
  }, o.prototype.plus = o.prototype.add, u.prototype.add = function(e) {
    var t = z(e),
      n = this.value;
    if (n < 0 !== t.sign) return this.subtract(t.negate());
    var r = t.value;
    if (t.isSmall) {
      if (a(n + r)) return new u(n + r);
      r = f(Math.abs(r))
    }
    return new o(m(r, Math.abs(n)), n < 0)
  }, u.prototype.plus = u.prototype.add, o.prototype.subtract = function(e) {
    var t = z(e);
    if (this.sign !== t.sign) return this.add(t.negate());
    var n = this.value,
      r = t.value;
    return t.isSmall ? b(n, Math.abs(r), this.sign) : y(n, r, this.sign)
  }, o.prototype.minus = o.prototype.subtract, u.prototype.subtract = function(e) {
    var t = z(e),
      n = this.value;
    if (n < 0 !== t.sign) return this.add(t.negate());
    var r = t.value;
    return t.isSmall ? new u(n - r) : b(r, Math.abs(n), n >= 0)
  }, u.prototype.minus = u.prototype.subtract, o.prototype.negate = function() {
    return new o(this.value, !this.sign)
  }, u.prototype.negate = function() {
    var e = this.sign,
      t = new u(-this.value);
    return t.sign = !e, t
  }, o.prototype.abs = function() {
    return new o(this.value, !1)
  }, u.prototype.abs = function() {
    return new u(Math.abs(this.value))
  }, o.prototype.multiply = function(e) {
    var n, r = z(e),
      i = this.value,
      s = r.value,
      u = this.sign !== r.sign,
      a;
    if (r.isSmall) {
      if (s === 0) return W[0];
      if (s === 1) return this;
      if (s === -1) return this.negate();
      a = Math.abs(s);
      if (a < t) return new o(E(i, a), u);
      s = f(a)
    }
    return i.length + s.length > 4e3 ? new o(x(i, s), u) : new o(w(i, s), u)
  }, o.prototype.times = o.prototype.multiply, u.prototype.multiply = function(e) {
    var n = z(e),
      r = this.value,
      i = n.value;
    if (r === 0) return W[0];
    if (r === 1) return n;
    if (r === -1) return n.negate();
    if (n.isSmall) {
      if (a(r * i)) return new u(r * i);
      i = f(Math.abs(i))
    }
    var s = Math.abs(r);
    return s < t ? new o(E(i, s), this.sign !== n.sign) : new o(w(i, f(s)), this.sign !== n.sign)
  }, u.prototype.times = u.prototype.multiply, o.prototype.square = function() {
    return new o(T(this.value), !1)
  }, u.prototype.square = function() {
    var e = this.value * this.value;
    return a(e) ? new u(e) : new o(T(f(Math.abs(this.value))), !1)
  }, o.prototype.divmod = function(e) {
    var t = L(this, e);
    return {
      quotient: t[0],
      remainder: t[1]
    }
  }, u.prototype.divmod = o.prototype.divmod, o.prototype.divide = function(e) {
    return L(this, e)[0]
  }, u.prototype.over = u.prototype.divide = o.prototype.over = o.prototype.divide, o.prototype.mod = function(e) {
    return L(this, e)[1]
  }, u.prototype.remainder = u.prototype.mod = o.prototype.remainder = o.prototype.mod, o.prototype.pow = function(e) {
    var t = z(e),
      n = this.value,
      r = t.value,
      i, s, o;
    if (r === 0) return W[1];
    if (n === 0) return W[0];
    if (n === 1) return W[1];
    if (n === -1) return t.isEven() ? W[1] : W[-1];
    if (t.sign) return W[0];
    if (!t.isSmall) throw new Error("The exponent " + t.toString() + " is too large.");
    if (this.isSmall && a(i = Math.pow(n, r))) return new u(p(i));
    s = this, o = W[1];
    for (;;) {
      r & !0 && (o = o.times(s), --r);
      if (r === 0) break;
      r /= 2, s = s.square()
    }
    return o
  }, u.prototype.pow = o.prototype.pow, o.prototype.modPow = function(e, t) {
    e = z(e), t = z(t);
    if (t.isZero()) throw new Error("Cannot take modPow with modulus 0");
    var n = W[1],
      r = this.mod(t);
    if (r.isZero()) return W[0];
    while (e.isPositive()) e.isOdd() && (n = n.multiply(r).mod(t)), e = e.divide(2), r = r.square().mod(t);
    return n
  }, u.prototype.modPow = o.prototype.modPow, o.prototype.compareAbs = function(e) {
    var t = z(e),
      n = this.value,
      r = t.value;
    return t.isSmall ? 1 : A(n, r)
  }, u.prototype.compareAbs = function(e) {
    var t = z(e),
      n = Math.abs(this.value),
      r = t.value;
    return t.isSmall ? (r = Math.abs(r), n === r ? 0 : n > r ? 1 : -1) : -1
  }, o.prototype.compare = function(e) {
    var t = z(e),
      n = this.value,
      r = t.value;
    return this.sign !== t.sign ? t.sign ? 1 : -1 : t.isSmall ? this.sign ? -1 : 1 : A(n, r) * (this.sign ? -1 : 1)
  }, o.prototype.compareTo = o.prototype.compare, u.prototype.compare = function(e) {
    var t = z(e),
      n = this.value,
      r = t.value;
    return t.isSmall ? n == r ? 0 : n > r ? 1 : -1 : n < 0 !== t.sign ? n < 0 ? -1 : 1 : n < 0 ? 1 : -1
  }, u.prototype.compareTo = u.prototype.compare, o.prototype.equals = function(e) {
    return this.compare(e) === 0
  }, u.prototype.eq = u.prototype.equals = o.prototype.eq = o.prototype.equals, o.prototype.notEquals = function(e) {
    return this.compare(e) !== 0
  }, u.prototype.neq = u.prototype.notEquals = o.prototype.neq = o.prototype.notEquals, o.prototype.greater = function(e) {
    return this.compare(e) > 0
  }, u.prototype.gt = u.prototype.greater = o.prototype.gt = o.prototype.greater, o.prototype.lesser = function(e) {
    return this.compare(e) < 0
  }, u.prototype.lt = u.prototype.lesser = o.prototype.lt = o.prototype.lesser, o.prototype.greaterOrEquals = function(e) {
    return this.compare(e) >= 0
  }, u.prototype.geq = u.prototype.greaterOrEquals = o.prototype.geq = o.prototype.greaterOrEquals, o.prototype.lesserOrEquals = function(e) {
    return this.compare(e) <= 0
  }, u.prototype.leq = u.prototype.lesserOrEquals = o.prototype.leq = o.prototype.lesserOrEquals, o.prototype.isEven = function() {
    return (this.value[0] & 1) === 0
  }, u.prototype.isEven = function() {
    return (this.value & 1) === 0
  }, o.prototype.isOdd = function() {
    return (this.value[0] & 1) === 1
  }, u.prototype.isOdd = function() {
    return (this.value & 1) === 1
  }, o.prototype.isPositive = function() {
    return !this.sign
  }, u.prototype.isPositive = function() {
    return this.value > 0
  }, o.prototype.isNegative = function() {
    return this.sign
  }, u.prototype.isNegative = function() {
    return this.value < 0
  }, o.prototype.isUnit = function() {
    return !1
  }, u.prototype.isUnit = function() {
    return Math.abs(this.value) === 1
  }, o.prototype.isZero = function() {
    return !1
  }, u.prototype.isZero = function() {
    return this.value === 0
  }, o.prototype.isDivisibleBy = function(e) {
    var t = z(e),
      n = t.value;
    return n === 0 ? !1 : n === 1 ? !0 : n === 2 ? this.isEven() : this.mod(t).equals(W[0])
  }, u.prototype.isDivisibleBy = o.prototype.isDivisibleBy, o.prototype.isPrime = function() {
    var e = this.abs(),
      t = e.prev();
    if (e.isUnit()) return !1;
    if (e.equals(2) || e.equals(3) || e.equals(5)) return !0;
    if (e.isEven() || e.isDivisibleBy(3) || e.isDivisibleBy(5)) return !1;
    if (e.lesser(25)) return !0;
    var n = [2, 3, 5, 7, 11, 13, 17, 19],
      r = t,
      i, s, o, u;
    while (r.isEven()) r = r.divide(2);
    for (o = 0; o < n.length; o++) {
      u = bigInt(n[o]).modPow(r, e);
      if (u.equals(W[1]) || u.equals(t)) continue;
      for (s = !0, i = r; s && i.lesser(t); i = i.multiply(2)) u = u.square().mod(e), u.equals(t) && (s = !1);
      if (s) return !1
    }
    return !0
  }, u.prototype.isPrime = o.prototype.isPrime, o.prototype.next = function() {
    var e = this.value;
    return this.sign ? b(e, 1, this.sign) : new o(m(e, 1), this.sign)
  }, u.prototype.next = function() {
    var e = this.value;
    return e + 1 < r ? new u(e + 1) : new o(i, !1)
  }, o.prototype.prev = function() {
    var e = this.value;
    return this.sign ? new o(m(e, 1), !0) : b(e, 1, this.sign)
  }, u.prototype.prev = function() {
    var e = this.value;
    return e - 1 > -r ? new u(e - 1) : new o(i, !0)
  };
  var O = [1];
  while (O[O.length - 1] <= t) O.push(2 * O[O.length - 1]);
  var M = O.length,
    _ = O[M - 1];
  o.prototype.shiftLeft = function(e) {
    if (!D(e)) return e.isNegative() ? this.shiftRight(e.abs()) : this.times(W[2].pow(e));
    e = +e;
    if (e < 0) return this.shiftRight(-e);
    var t = this;
    while (e >= M) t = t.multiply(_), e -= M - 1;
    return t.multiply(O[e])
  }, u.prototype.shiftLeft = o.prototype.shiftLeft, o.prototype.shiftRight = function(e) {
    var t;
    if (!D(e)) return e.isNegative() ? this.shiftLeft(e.abs()) : (t = this.divmod(W[2].pow(e)), t.remainder.isNegative() ? t.quotient.prev() : t.quotient);
    e = +e;
    if (e < 0) return this.shiftLeft(-e);
    var n = this;
    while (e >= M) {
      if (n.isZero()) return n;
      t = L(n, _), n = t[1].isNegative() ? t[0].prev() : t[0], e -= M - 1
    }
    return t = L(n, O[e]), t[1].isNegative() ? t[0].prev() : t[0]
  }, u.prototype.shiftRight = o.prototype.shiftRight, o.prototype.not = function() {
    return this.negate().prev()
  }, u.prototype.not = o.prototype.not, o.prototype.and = function(e) {
    return P(this, e, function(e, t) {
      return e & t
    })
  }, u.prototype.and = o.prototype.and, o.prototype.or = function(e) {
    return P(this, e, function(e, t) {
      return e | t
    })
  }, u.prototype.or = o.prototype.or, o.prototype.xor = function(e) {
    return P(this, e, function(e, t) {
      return e ^ t
    })
  }, u.prototype.xor = o.prototype.xor;
  var q = function(e, t) {
    var n = W[0],
      r = W[1],
      i = e.length;
    if (2 <= t && t <= 36 && i <= s / Math.log(t)) return new u(parseInt(e, t));
    t = z(t);
    var o = [],
      a, f = e[0] === "-";
    for (a = f ? 1 : 0; a < e.length; a++) {
      var l = e[a].toLowerCase(),
        c = l.charCodeAt(0);
      if (48 <= c && c <= 57) o.push(z(l));
      else if (97 <= c && c <= 122) o.push(z(l.charCodeAt(0) - 87));
      else {
        if (l !== "<") throw new Error(l + " is not a valid character");
        var h = a;
        do a++; while (e[a] !== ">");
        o.push(z(e.slice(h + 1, a)))
      }
    }
    o.reverse();
    for (a = 0; a < o.length; a++) n = n.add(o[a].times(r)), r = r.times(t);
    return f ? n.negate() : n
  };
  o.prototype.toString = function(t) {
    t === e && (t = 10);
    if (t !== 10) return U(this, t);
    var n = this.value,
      r = n.length,
      i = String(n[--r]),
      s = "0000000",
      o;
    while (--r >= 0) o = String(n[r]), i += s.slice(o.length) + o;
    var u = this.sign ? "-" : "";
    return u + i
  }, u.prototype.toString = function(t) {
    return t === e && (t = 10), t != 10 ? U(this, t) : String(this.value)
  }, o.prototype.valueOf = function() {
    return +this.toString()
  }, o.prototype.toJSNumber = o.prototype.valueOf, u.prototype.valueOf = function() {
    return this.value
  }, u.prototype.toJSNumber = u.prototype.valueOf;
  var W = function(e, t) {
    return typeof e == "undefined" ? W[0] : typeof t != "undefined" ? +t === 10 ? z(e) : q(e, t) : z(e)
  };
  for (var X = 0; X < 1e3; X++) W[X] = new u(X), X > 0 && (W[-X] = new u(-X));
  return W.one = W[1], W.zero = W[0], W.minusOne = W[-1], W.max = H, W.min = B, W.gcd = j, W.lcm = F, W.isInstance = function(e) {
    return e instanceof o || e instanceof u
  }, W.randBetween = I, W
}();

! function(window, d, e, f, g) {
  function c(a, b, c, d, e) {
    e = void 0 !== e ? e : a.length, d = d || 0, b = b || 0;
    var f = c.length > 0 && c.length < e ? c.length : e;
    for (f += b; b < f; b++) c[d++] = a[b]
  }

  function d(a, b, c) {
    return (a / Math.pow(10, b)).toFixed(b).substr(2).replace(/0/g, c || " ")
  }
  var g = function(a) {
    for (var b = []; --a >= 0;) b.push(0);
    return b
  };
  if ("undefined" == typeof Uint8Array && (Uint8Array = Array), "undefined" == typeof Int32Array ? Int32Array = Array : g = function(a) {
      return new Int32Array(a)
    }, void 0 === h) var h = function(a, b) {
    if (void 0 === Object.getOwnPropertyNames) {
      for (var c in b.prototype) void 0 !== a.prototype[c] && a.prototype[c] != Object.prototype[c] || (a.prototype[c] = b.prototype[c]);
      for (var c in b) void 0 === a[c] && (a[c] = b[c]);
      a.$baseCtor = b
    } else {
      for (var d = Object.getOwnPropertyNames(b.prototype), e = 0; e < d.length; e++) void 0 === Object.getOwnPropertyDescriptor(a.prototype, d[e]) && Object.defineProperty(a.prototype, d[e], Object.getOwnPropertyDescriptor(b.prototype, d[e]));
      for (var c in b) void 0 === a[c] && (a[c] = b[c]);
      a.$baseCtor = b
    }
  };
  "function" != typeof Array.prototype.blockCopy && (Array.prototype.blockCopy = function(a, b, c, d) {
    d = void 0 !== d ? d : this.length, c = c || 0, b = b || 0;
    var e = a.length > 0 && a.length < d ? a.length : d;
    for (e += b; b < e; b++) a[c++] = this[b]
  }), "function" != typeof Int16Array.prototype.blockCopy && (Int16Array.prototype.blockCopy = Array.prototype.blockCopy), "function" != typeof Int32Array.prototype.blockCopy && (Int32Array.prototype.blockCopy = Array.prototype.blockCopy), "function" != typeof Uint16Array.prototype.blockCopy && (Uint16Array.prototype.blockCopy = Array.prototype.blockCopy), "function" != typeof Uint8Array.prototype.blockCopy && (Uint8Array.prototype.blockCopy = Array.prototype.blockCopy), "function" != typeof e.prototype.blockCopy && (e.prototype.blockCopy = Array.prototype.blockCopy), "function" != typeof Uint8Array.prototype.blockCopy && (Uint8Array.prototype.blockCopy = Array.prototype.blockCopy), "function" != typeof Uint8ClampedArray.prototype.blockCopy && (Uint8ClampedArray.prototype.blockCopy = Array.prototype.blockCopy), String.prototype.format || (String.prototype.format = function() {
    var a = arguments;
    return 1 == arguments.length && a[0] instanceof Array && (a = a[0]), this.replace(/{(\d+)}/g, function(b, c) {
      return void 0 !== a[c] ? a[c] : b
    })
  });
  var i = void 0 !== window && void 0 !== window.ZXing ? window.ZXing : {};
  void 0 !== window && (window.ZXing = i), void 0 === i.Common && (i.Common = {}), void 0 === i.Common.Detector && (i.Common.Detector = {}), void 0 === i.PDF417 && (i.PDF417 = {}), void 0 === i.PDF417.Internal && (i.PDF417.Internal = {}), void 0 === i.PDF417.Internal.EC && (i.PDF417.Internal.EC = {}), i.SupportClass = function() {}, i.SupportClass.GetCharsFromString = function(a, b, c, d, e) {
    for (var f = b, g = e; f < c;) d[g] = a.charAt(f), f++, g++
  }, i.SupportClass.SetCapacity = function(a, b) {
    for (; b > a.length;) a.push(new T);
    for (; b < a.length;) a.splice(b, a.length - b)
  }, i.SupportClass.toStringArray = function(a) {
    var b = new Object(a),
      c = [];
    for (var d in b) b[d] instanceof Function || c.push(b[d]);
    return c
  }, i.SupportClass.Join = function(a, b) {
    var c = "";
    if (a = null != a ? a : "", null != b) {
      var d = new Object(b);
      for (var e in d) c += d[e], c += a;
      c.length > 0 && (c = c.substr(0, c.length - a.length))
    }
    return c
  }, i.SupportClass.Fill = function(a, b) {
    for (var c = 0; c < a.length; c++) a[c] = b
  }, i.SupportClass.Fill = function(a, b, c, d) {
    if (arguments.length < 4) {
      d = b;
      for (var e = 0; e < a.length; e++) a[e] = d
    } else
      for (var f = b; f < c; f++) a[f] = d
  }, i.SupportClass.ToBinaryString = function(a) {
    for (var b = new Array(32), c = 0; a;) b[c++] = 1 == (1 & a) ? "1" : "0", a >>= 1;
    for (var d = new Array(c), e = 0; e < c; e++) d.push(b[e]);
    return d.join("")
  }, i.SupportClass.bitCount = function(a) {
    for (var b = 0; a;) a &= a - 1, b++;
    return b
  }, i.SupportClass.GetValue = function(a, b, c) {
    return a.hasOwnProperty(b) ? a[b] : c
  }, i.ResultMetadataType = {
    OTHER: 0,
    ORIENTATION: 1,
    BYTE_SEGMENTS: 2,
    ERROR_CORRECTION_LEVEL: 3,
    ISSUE_NUMBER: 4,
    SUGGESTED_PRICE: 5,
    POSSIBLE_COUNTRY: 6,
    UPC_EAN_EXTENSION: 7,
    STRUCTURED_APPEND_SEQUENCE: 8,
    STRUCTURED_APPEND_PARITY: 9,
    PDF417_EXTRA_METADATA: 10,
    AZTEC_EXTRA_METADATA: 11
  }, i.BarcodeFormat = {
    AZTEC: 1,
    CODABAR: 2,
    CODE_39: 4,
    CODE_93: 8,
    CODE_128: 16,
    DATA_MATRIX: 32,
    EAN_8: 64,
    EAN_13: 128,
    ITF: 256,
    MAXICODE: 512,
    PDF_417: 1024,
    QR_CODE: 2048,
    RSS_14: 4096,
    RSS_EXPANDED: 8192,
    UPC_A: 16384,
    UPC_E: 32768,
    UPC_EAN_EXTENSION: 65536,
    MSI: 131072,
    PLESSEY: 262144,
    IMB: 524288,
    All_1D: 61918
  }, i.Result = function(a, c, d, e, f) {
    if (this.Text = null, this.RawBytes = null, this.ResultPoints = null, this.BarcodeFormat = i.BarcodeFormat.AZTEC, this.ResultMetadata = null, this.Timestamp = 0, !a && !c) throw new Error("Text and bytes are null");
    this.Text = a, this.RawBytes = c, this.ResultPoints = d, this.BarcodeFormat = e, this.ResultMetadata = null, this.Timestamp = f || 1e4 * (new Date).getTime() + 621355968e9
  }, i.Result.prototype.putMetadata = function(a, b) {
    this.ResultMetadata || (this.ResultMetadata = {}), this.ResultMetadata[a] = b
  }, i.Result.prototype.putAllMetadata = function(a) {
    if (a)
      if (this.ResultMetadata)
        for (var b in a) a.hasOwnProperty(b) && (this.ResultMetadata[b] = a[b]);
      else this.ResultMetadata = a
  }, i.Result.prototype.addResultPoints = function(a) {
    var b = this.ResultPoints;
    b ? a && a.length > 0 && (this.ResultPoints = b.concat(a)) : this.ResultPoints = a
  }, i.Result.prototype.toString = function() {
    return this.Text ? this.Text : "[" + this.RawBytes.length + " bytes]"
  }, i.DecodeHintType = {
    OTHER: 0,
    PURE_BARCODE: 1,
    POSSIBLE_FORMATS: 2,
    TRY_HARDER: 3,
    CHARACTER_SET: 4,
    ALLOWED_LENGTHS: 5,
    ASSUME_CODE_39_CHECK_DIGIT: 6,
    NEED_RESULT_POINT_CALLBACK: 7,
    ASSUME_MSI_CHECK_DIGIT: 8,
    USE_CODE_39_EXTENDED_MODE: 9,
    RELAXED_CODE_39_EXTENDED_MODE: 10,
    TRY_HARDER_WITHOUT_ROTATION: 11,
    ASSUME_GS1: 12,
    RETURN_CODABAR_START_END: 13,
    ALLOWED_EAN_EXTENSIONS: 14
  }, i.BinaryBitmap = function(a) {
    if (this.binarizer = null, this.matrix = null, a instanceof i.Binarizer || a instanceof i.Common.HybridBinarizer || a instanceof i.Common.GlobalHistogramBinarizer) {
      if (!a) throw new Error("Binarizer must be non-null.");
      this.binarizer = a
    } else {
      var c = a;
      if (c) throw new Error("parameter must be non-null.");
      this.matrix = c
    }
  }, i.BinaryBitmap.prototype.get_Width = function() {
    return this.binarizer.get_Width()
  }, i.BinaryBitmap.prototype.get_Height = function() {
    return this.binarizer.get_Height()
  }, i.BinaryBitmap.prototype.getBlackRow = function(a, b) {
    return this.binarizer.getBlackRow(a, b)
  }, i.BinaryBitmap.prototype.get_BlackMatrix = function() {
    return this.matrix ? this.matrix : this.matrix = this.binarizer.get_BlackMatrix()
  }, i.BinaryBitmap.prototype.get_CropSupported = function() {
    return this.binarizer.get_LuminanceSource().get_CropSupported()
  }, i.BinaryBitmap.prototype.crop = function(a, b, c, d) {
    var e = this.binarizer.get_LuminanceSource().crop(a, b, c, d);
    return new i.BinaryBitmap(this.binarizer.createBinarizer(e))
  }, i.BinaryBitmap.prototype.get_RotateSupported = function() {
    return this.binarizer.get_LuminanceSource().get_RotateSupported()
  }, i.BinaryBitmap.prototype.rotateCounterClockwise = function() {
    var a = this.binarizer.get_LuminanceSource().rotateCounterClockwise();
    return new i.BinaryBitmap(this.binarizer.createBinarizer(a))
  }, i.BinaryBitmap.prototype.rotateCounterClockwise45 = function() {
    var a = this.binarizer.get_LuminanceSource().rotateCounterClockwise45();
    return new i.BinaryBitmap(this.binarizer.createBinarizer(a))
  }, i.BinaryBitmap.prototype.toString = function() {
    var a = this.get_BlackMatrix();
    return a ? a.toString() : ""
  }, i.Binarizer = function(a) {
    if (this.source = null, !a) throw new Error("Source must be non-null.");
    this.source = a
  }, i.Binarizer.prototype.get_LuminanceSource = function() {
    return this.source
  }, i.Binarizer.prototype.get_Width = function() {
    return this.source.get_Width()
  }, i.Binarizer.prototype.get_Height = function() {
    return this.source.get_Height()
  }, i.ResultPoint = function(a, b) {
    this.x = 0, this.y = 0, this.x = a, this.y = b
  }, i.ResultPoint.prototype.Equals = function(a) {
    var b = a instanceof i.ResultPoint ? a : null;
    return !!b && (this.x == b.x && this.y == b.y)
  }, i.ResultPoint.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ")"
  }, i.ResultPoint.orderBestPatterns = function(a) {
    var b, c, d, e = i.ResultPoint.distance(a[0], a[1]),
      f = i.ResultPoint.distance(a[1], a[2]),
      g = i.ResultPoint.distance(a[0], a[2]);
    if (f >= e && f >= g ? (c = a[0], b = a[1], d = a[2]) : g >= f && g >= e ? (c = a[1], b = a[0], d = a[2]) : (c = a[2], b = a[0], d = a[1]), i.ResultPoint.crossProductZ(b, c, d) < 0) {
      var h = b;
      b = d, d = h
    }
    a[0] = b, a[1] = c, a[2] = d
  }, i.ResultPoint.distance = function(a, b) {
    return i.Common.Detector.MathUtils.distance(a.x, a.y, b.x, b.y)
  }, i.ResultPoint.crossProductZ = function(a, b, c) {
    var d = b.x,
      e = b.y;
    return (c.x - d) * (a.y - e) - (c.y - e) * (a.x - d)
  }, i.LuminanceSource = function(a, b) {
    this.width = 0, this.height = 0, this.width = a, this.height = b
  }, i.LuminanceSource.prototype.get_Width = function() {
    return this.width
  }, i.LuminanceSource.prototype.set_Width = function(a) {
    this.width = a
  }, i.LuminanceSource.prototype.get_Height = function() {
    return this.height
  }, i.LuminanceSource.prototype.set_Height = function(a) {
    this.height = a
  }, i.LuminanceSource.prototype.get_CropSupported = function() {
    return !1
  }, i.LuminanceSource.prototype.crop = function(a, c, d, e) {
    throw new Error("This luminance source does not support cropping.")
  }, i.LuminanceSource.prototype.get_RotateSupported = function() {
    return !1
  }, i.LuminanceSource.prototype.rotateCounterClockwise = function() {
    throw new Error("This luminance source does not support rotation.")
  }, i.LuminanceSource.prototype.rotateCounterClockwise45 = function() {
    throw new Error("This luminance source does not support rotation by 45 degrees.")
  }, i.LuminanceSource.prototype.get_InversionSupported = function() {
    return !1
  }, i.LuminanceSource.prototype.invert = function() {
    throw new Error("This luminance source does not support inversion.")
  }, i.LuminanceSource.prototype.toString = function() {
    for (var a = new Uint8Array(this.width), b = "", c = 0; c < this.height; c++) {
      a = this.getRow(c, a);
      for (var d = 0; d < this.width; d++) {
        var e, f = 255 & a[d];
        e = f < 64 ? "#" : f < 128 ? "+" : f < 192 ? "." : " ", b += e
      }
      b += "\n"
    }
    return b
  }, i.InvertedLuminanceSource = function(a) {
    this.delegate = null, this.invertedMatrix = null, this.delegate = a
  }, i.InvertedLuminanceSource.prototype.getRow = function(a, b) {
    b = this.delegate.getRow(a, b);
    for (var c = this.get_Width(), d = 0; d < c; d++) b[d] = 255 - (255 & b[d]);
    return b
  }, i.InvertedLuminanceSource.prototype.get_Matrix = function() {
    if (!this.invertedMatrix) {
      var a = this.delegate.get_Matrix(),
        b = this.get_Width() * this.get_Height();
      this.invertedMatrix = new Uint8Array(b);
      for (var c = 0; c < b; c++) this.invertedMatrix[c] = 255 - (255 & a[c])
    }
    return this.invertedMatrix
  }, i.InvertedLuminanceSource.prototype.get_CropSupported = function() {
    return this.delegate.get_CropSupported()
  }, i.InvertedLuminanceSource.prototype.crop = function(a, b, c, d) {
    return new i.InvertedLuminanceSource(this.delegate.crop(a, b, c, d))
  }, i.InvertedLuminanceSource.prototype.get_RotateSupported = function() {
    return this.delegate.get_RotateSupported()
  }, i.InvertedLuminanceSource.prototype.invert = function() {
    return this.delegate
  }, i.InvertedLuminanceSource.prototype.rotateCounterClockwise = function() {
    return new i.InvertedLuminanceSource(this.delegate.rotateCounterClockwise())
  }, i.InvertedLuminanceSource.prototype.rotateCounterClockwise45 = function() {
    return new i.InvertedLuminanceSource(this.delegate.rotateCounterClockwise45())
  }, i.BaseLuminanceSource = function(a, b) {
    this.luminances = null, this.luminances = new Uint8Array(a * b)
  }, i.BaseLuminanceSource.RChannelWeight = 19562, i.BaseLuminanceSource.GChannelWeight = 38550, i.BaseLuminanceSource.BChannelWeight = 7424, i.BaseLuminanceSource.ChannelWeight = 16, i.BaseLuminanceSource = function(a, b, c) {
    if (this.luminances = [], a instanceof Array) this.luminances = a.slice(0);
    else {
      var d = a;
      c = b, b = d
    }
    i.LuminanceSource.call(this, b, c)
  }, i.BaseLuminanceSource.prototype.getRow = function(a, b) {
    var c = this.get_Width();
    (!b || b.length < c) && (b = new Uint8Array(c));
    for (var d = 0; d < c; d++) b[d] = this.luminances[a * c + d];
    return b
  }, i.BaseLuminanceSource.prototype.get_Matrix = function() {
    return this.luminances
  }, i.BaseLuminanceSource.prototype.rotateCounterClockwise = function() {
    for (var a = new Uint8Array(this.get_Width() * this.get_Height()), b = this.get_Height(), c = this.get_Width(), d = this.get_Matrix(), e = 0; e < this.get_Height(); e++)
      for (var f = 0; f < this.get_Width(); f++) {
        var g = c - f - 1;
        a[g * b + e] = d[e * this.get_Width() + f]
      }
    return this.CreateLuminanceSource(a, b, c)
  }, i.BaseLuminanceSource.prototype.rotateCounterClockwise45 = function() {
    return i.LuminanceSource.commonPrototype.rotateCounterClockwise45.call(this)
  }, i.BaseLuminanceSource.prototype.get_RotateSupported = function() {
    return !0
  }, i.BaseLuminanceSource.prototype.crop = function(a, c, d, e) {
    if (a + d > this.get_Width() || c + e > this.get_Height()) throw new Error("Crop rectangle does not fit within image data.");
    for (var f = new Uint8Array(d * e), g = this.get_Matrix(), h = this.get_Width(), i = a + d, j = c + e, k = c, l = 0; k < j; k++, l++)
      for (var m = a, n = 0; m < i; m++, n++) f[l * d + n] = g[k * h + m];
    return this.CreateLuminanceSource(f, d, e)
  }, i.BaseLuminanceSource.prototype.get_CropSupported = function() {
    return !0
  }, i.BaseLuminanceSource.prototype.get_InversionSupported = function() {
    return !0
  }, i.BaseLuminanceSource.prototype.invert = function() {
    return new i.InvertedLuminanceSource(this)
  }, h(i.BaseLuminanceSource, i.LuminanceSource), i.BitmapLuminanceSource = function(a, b, c) {
    var d, e, f = "undefined" != typeof window && !0 === window.__debug;
    if ("number" == typeof a) d = a, e = b, i.BaseLuminanceSource.call(this, d, e);
    else {
      var g, h;
      if (a instanceof Uint8ClampedArray) d = b, e = c, h = a;
      else if (a instanceof ImageData) d = b || a.width, e = c || a.height, h = a.data;
      else {
        g = b, d = g.naturalWidth, e = g.naturalHeight;
        var j = a.getImageData(0, 0, d, e);
        h = j.data
      }
      i.BaseLuminanceSource.call(this, d, e);
      var k = Math.abs(h.length / e);
      f && (this.debugBitmap = []);
      for (var l = 0; l < e; l++)
        for (var m = l * k, n = 4 * d + m, o = m; o < n; o += 4) {
          var p = 7424 * h[o] + 38550 * h[o + 1] + 19562 * h[o + 2] >> 16;
          this.luminances.push(p), f && (this.debugBitmap.push(p), this.debugBitmap.push(p), this.debugBitmap.push(p), this.debugBitmap.push(255))
        }
    }
  }, i.BitmapLuminanceSource.prototype.CreateLuminanceSource = function(a, b, c) {
    return function() {
      var d = new i.BitmapLuminanceSource(b, c);
      return d.luminances = a, d
    }.call(this)
  }, h(i.BitmapLuminanceSource, i.BaseLuminanceSource), i.Common.DecoderResult = function(a, c, d, e, f, g) {
    if (this.RawBytes = null, this.Text = null, this.ByteSegments = null, this.ECLevel = null, this.ErrorsCorrected = 0, this.StructuredAppendSequenceNumber = 0, this.Erasures = 0, this.StructuredAppendParity = 0, this.Other = null, null === a && null === c) throw new Error;
    this.RawBytes = a, this.Text = c, this.ByteSegments = d, this.ECLevel = e, this.StructuredAppendParity = void 0 === g ? -1 : g, this.StructuredAppendSequenceNumber = void 0 === f ? -1 : f, this.AmbiguousValuesCount = 0
  }, i.Common.BitArray = function(a, c) {
    if (this.bits = null, this.size = 0, this.size = 2 == arguments.length ? c : a || 0, this.size < 1) throw new Error("size must be at least 1");
    this.bits = 2 == arguments.length ? a : this.size ? i.Common.BitArray.makeArray(this.size) : []
  }, i.Common.BitArray._lookup = new Int32Array([32, 0, 1, 26, 2, 23, 27, 0, 3, 16, 24, 30, 28, 11, 0, 13, 4, 7, 17, 0, 25, 22, 31, 15, 29, 10, 12, 6, 0, 21, 14, 9, 5, 20, 8, 19, 18]), i.Common.BitArray.prototype.get_Size = function() {
    return this.size
  }, i.Common.BitArray.prototype.get_SizeInBytes = function() {
    return this.size + 7 >> 3
  }, i.Common.BitArray.prototype.get_Item = function(a) {
    return 0 != (this.bits[a >> 5] & 1 << (31 & a))
  }, i.Common.BitArray.prototype.set_Item = function(a, b) {
    b && (this.bits[a >> 5] |= 1 << (31 & a))
  }, i.Common.BitArray.prototype.ensureCapacity = function(a) {
    var b = this,
      c = b.bits;
    a > c.length << 5 && (b.bits = c.slice(0))
  }, i.Common.BitArray.prototype.flip = function(a) {
    this.bits[a >> 5] ^= 1 << (31 & a)
  }, i.Common.BitArray.numberOfTrailingZeros = function(a) {
    var b = (-a & a) % 37;
    return b < 0 && (b *= -1), i.Common.BitArray._lookup[b]
  }, i.Common.BitArray.prototype.getNextSet = function(a) {
    if (a >= this.size) return this.size;
    var b = a >> 5,
      c = this.bits[b];
    for (c &= ~((1 << (31 & a)) - 1); 0 == c;) {
      if (++b == this.bits.length) return this.size;
      c = this.bits[b]
    }
    var d = (b << 5) + i.Common.BitArray.numberOfTrailingZeros(c);
    return d > this.size ? this.size : d
  }, i.Common.BitArray.prototype.getNextUnset = function(a) {
    if (a >= this.size) return this.size;
    var b = a >> 5,
      c = ~this.bits[b];
    for (c &= ~((1 << (31 & a)) - 1); 0 == c;) {
      if (++b == this.bits.length) return this.size;
      c = ~this.bits[b]
    }
    var d = (b << 5) + i.Common.BitArray.numberOfTrailingZeros(c);
    return d > this.size ? this.size : d
  }, i.Common.BitArray.prototype.setBulk = function(a, b) {
    this.bits[a >> 5] = b
  }, i.Common.BitArray.prototype.setRange = function(a, c) {
    if (c < a) throw new Error("start after end");
    if (c != a) {
      c--;
      for (var d = a >> 5, e = c >> 5, f = d; f <= e; f++) {
        var g, h = f > d ? 0 : 31 & a,
          i = f < e ? 31 : 31 & c;
        if (0 == h && 31 == i) g = -1;
        else {
          g = 0;
          for (var j = h; j <= i; j++) g |= 1 << j
        }
        this.bits[f] |= g
      }
    }
  }, i.Common.BitArray.prototype.clear = function() {
    for (var a = this.bits.length, b = 0; b < a; b++) this.bits[b] = 0
  }, i.Common.BitArray.prototype.isRange = function(a, c, d) {
    if (c < a) throw new Error;
    if (c == a) return !0;
    c--;
    for (var e = a >> 5, f = c >> 5, g = e; g <= f; g++) {
      var h, i = g > e ? 0 : 31 & a,
        j = g < f ? 31 : 31 & c;
      if (0 == i && 31 == j) h = -1;
      else {
        h = 0;
        for (var k = i; k <= j; k++) h |= 1 << k
      }
      if ((this.bits[g] & h) != (d ? h : 0)) return !1
    }
    return !0
  }, i.Common.BitArray.prototype.appendBit = function(a) {
    this.ensureCapacity(this.size + 1), a && (this.bits[this.size >> 5] |= 1 << (31 & this.size)), this.size++
  }, i.Common.BitArray.prototype.get_Array = function() {
    return this.bits
  }, i.Common.BitArray.prototype.appendBits = function(a, c) {
    if (c < 0 || c > 32) throw new Error("Num bits must be between 0 and 32");
    this.ensureCapacity(this.size + c);
    for (var d = c; d > 0; d--) this.appendBit(1 == (a >> d - 1 & 1))
  }, i.Common.BitArray.prototype.appendBitArray = function(a) {
    var b = a.size;
    this.ensureCapacity(this.size + b);
    for (var c = 0; c < b; c++) this.appendBit(a.get_Item(c))
  }, i.Common.BitArray.prototype.xor = function(a) {
    if (this.bits.length != a.bits.length) throw new Error("Sizes don't match");
    for (var c = 0; c < this.bits.length; c++) this.bits[c] ^= a.bits[c]
  }, i.Common.BitArray.prototype.toBytes = function(a, b, c, d) {
    for (var e = 0; e < d; e++) {
      for (var f = 0, g = 0; g < 8; g++) this.get_Item(a) && (f |= 1 << 7 - g), a++;
      b[c + e] = f
    }
  }, i.Common.BitArray.prototype.reverse = function() {
    for (var a = [], b = this.size - 1 >> 5, c = b + 1, d = 0; d < c; d++) {
      var e = this.bits[d];
      e = e >> 1 & 1431655765 | (1431655765 & e) << 1, e = e >> 2 & 858993459 | (858993459 & e) << 2, e = e >> 4 & 252645135 | (252645135 & e) << 4, e = e >> 8 & 16711935 | (16711935 & e) << 8, e = e >> 16 & 65535 | (65535 & e) << 16, a[b - d] = e
    }
    if (this.size != 32 * c) {
      for (var f = 32 * c - this.size, g = 1, h = 0; h < 31 - f; h++) g = g << 1 | 1;
      for (var i = a[0] >> f & g, j = 1; j < c; j++) {
        var k = a[j];
        i |= k << 32 - f, a[j - 1] = i, i = k >> f & g
      }
      a[c - 1] = i
    }
    this.bits = a
  }, i.Common.BitArray.makeArray = function(a) {
    return g(a + 31 >> 5)
  }, i.Common.BitArray.prototype.Equals = function(a) {
    var b = a instanceof i.Common.BitArray ? a : null;
    if (null == b) return !1;
    if (this.size != b.size) return !1;
    for (var c = 0; c < this.size; c++)
      if (this.bits[c] != b.bits[c]) return !1;
    return !0
  }, i.Common.BitArray.prototype.toString = function() {
    for (var a = "", b = 0; b < this.size; b++) 0 == (7 & b) && (a += " "), a += this.get_Item(b) ? "X" : ".";
    return a
  }, i.Common.BitArray.prototype.Clone = function() {
    return new i.Common.BitArray(this.bits.slice(0), this.size)
  }, i.Common.BitMatrix = function(a, c, d, e) {
    if (this.width = 0, this.height = 0, this.rowSize = 0, this.bits = null, a < 1 || void 0 !== c && c < 1) throw new Error("Both dimensions must be greater than 0");
    this.width = a, this.height = arguments.length > 1 ? c : a, this.rowSize = 4 == arguments.length ? d : a + 31 >> 5, this.bits = 4 == arguments.length ? e : 3 == arguments.length ? d : new Int32Array(this.rowSize * this.height)
  }, i.Common.BitMatrix.prototype.get_Width = function() {
    return this.width
  }, i.Common.BitMatrix.prototype.get_Height = function() {
    return this.height
  }, i.Common.BitMatrix.prototype.get_Dimension = function() {
    if (this.width != this.height) throw new Error("Can't call Dimension on a non-square matrix");
    return this.width
  }, i.Common.BitMatrix.prototype.get_RowSize = function() {
    return this.rowSize
  }, i.Common.BitMatrix.parse = function(a, c, d) {
    if (null == a) throw new Error;
    for (var e = new Array(a.length), f = 0, g = 0, h = -1, j = 0, k = 0; k < a.length;)
      if ("\n" == a.substr(k, 1) || "\r" == a.substr(k, 1)) {
        if (f > g) {
          if (-1 == h) h = f - g;
          else if (f - g != h) throw new Error("row lengths do not match");
          g = f, j++
        }
        k++
      } else if (a.substr(k, c.length) == c) k += c.length, e[f] = !0, f++;
    else {
      if (a.substr(k, d.length) != d) throw new Error("illegal character encountered: " + a.substr(k));
      k += d.length, e[f] = !1, f++
    }
    if (f > g) {
      if (-1 == h) h = f - g;
      else if (f - g != h) throw new Error("row lengths do not match");
      j++
    }
    for (var l = new i.Common.BitMatrix(h, j), m = 0; m < f; m++) e[m] && l.set_Item(m % h, Math.floor(m / h), !0);
    return l
  }, i.Common.BitMatrix.prototype.get_Item = function(a, b) {
    var c = b * this.rowSize + (a >> 5);
    return 0 != (this.bits[c] >> (31 & a) & 1)
  }, i.Common.BitMatrix.prototype.set_Item = function(a, b, c) {
    var d;
    c ? (d = b * this.rowSize + (a >> 5), this.bits[d] |= 1 << (31 & a)) : (d = b * this.rowSize + Math.floor(a / 32), this.bits[d] &= ~(1 << (31 & a)))
  }, i.Common.BitMatrix.prototype.flip = function(a, b) {
    var c = b * this.rowSize + (a >> 5);
    this.bits[c] ^= 1 << (31 & a)
  }, i.Common.BitMatrix.prototype.xor = function(a) {
    if (this.width != a.get_Width() || this.height != a.get_Height() || this.rowSize != a.get_RowSize()) throw new Error("input matrix dimensions do not match");
    for (var c = new i.Common.BitArray(Math.floor(this.width / 32) + 1), d = 0; d < this.height; d++)
      for (var e = d * this.rowSize, f = a.getRow(d, c).get_Array(), g = 0; g < this.rowSize; g++) this.bits[e + g] ^= f[g]
  }, i.Common.BitMatrix.prototype.clear = function() {
    for (var a = this.bits.length, b = 0; b < a; b++) this.bits[b] = 0
  }, i.Common.BitMatrix.prototype.setRegion = function(a, c, d, e) {
    if (c < 0 || a < 0) throw new Error("Left and top must be non negative");
    if (e < 1 || d < 1) throw new Error("Height and width must be at least 1");
    var f = a + d,
      g = c + e;
    if (g > this.height || f > this.width) throw new Error("The region must fit inside the matrix");
    for (var h = c; h < g; h++)
      for (var i = h * this.rowSize, j = a; j < f; j++) this.bits[i + (j >> 5)] |= 1 << (31 & j)
  }, i.Common.BitMatrix.prototype.getRow = function(a, b) {
    null == b || b.get_Size() < this.width ? b = new i.Common.BitArray(this.width) : b.clear();
    for (var c = a * this.rowSize, d = 0; d < this.rowSize; d++) b.setBulk(d << 5, this.bits[c + d]);
    return b
  }, i.Common.BitMatrix.prototype.setRow = function(a, b) {
    b.get_Array().blockCopy(this.bits, a * this.rowSize, this.rowSize)
  }, i.Common.BitMatrix.prototype.rotate180 = function() {
    for (var a = this.get_Width(), b = this.get_Height(), c = new i.Common.BitArray(a), d = new i.Common.BitArray(a), e = 0; e < (b + 1) / 2; e++) c = this.getRow(e, c), d = this.getRow(b - 1 - e, d), c.reverse(), d.reverse(), this.setRow(e, d), this.setRow(b - 1 - e, c)
  }, i.Common.BitMatrix.prototype.getEnclosingRectangle = function() {
    for (var a = this.width, b = this.height, c = -1, d = -1, e = 0; e < this.height; e++)
      for (var f = 0; f < this.rowSize; f++) {
        var g = this.bits[e * this.rowSize + f];
        if (0 != g) {
          if (e < b && (b = e), e > d && (d = e), 32 * f < a) {
            for (var h = 0; g << 31 - h == 0;) h++;
            32 * f + h < a && (a = 32 * f + h)
          }
          if (32 * f + 31 > c) {
            for (var i = 31; g >> h == 0;) i--;
            32 * f + i > c && (c = 32 * f + i)
          }
        }
      }
    var j = c - a,
      k = d - b;
    return j < 0 || k < 0 ? null : new Int32Array([a, b, j, k])
  }, i.Common.BitMatrix.prototype.getTopLeftOnBit = function() {
    for (var a = 0; a < this.bits.length && 0 == this.bits[a];) a++;
    if (a == this.bits.length) return null;
    for (var b = Math.floor(a / this.rowSize), c = a % this.rowSize << 5, d = this.bits[a], e = 0; d << 31 - e == 0;) e++;
    return c += e, new Int32Array([c, b])
  }, i.Common.BitMatrix.prototype.getBottomRightOnBit = function() {
    for (var a = this.bits.length - 1; a >= 0 && 0 == this.bits[a];) a--;
    if (a < 0) return null;
    for (var b = Math.floor(a / this.rowSize), c = a % this.rowSize << 5, d = this.bits[a], e = 31; d >> e == 0;) e--;
    return c += e, new Int32Array([c, b])
  }, i.Common.BitMatrix.prototype.Equals = function(a) {
    if (!(a instanceof i.Common.BitMatrix)) return !1;
    var c = a instanceof i.Common.BitMatrix || null == a ? a : function() {
      throw new Error("InvalidCastException")
    }();
    if (this.width != c.width || this.height != c.height || this.rowSize != c.rowSize || this.bits.length != c.bits.length) return !1;
    for (var d = 0; d < this.bits.length; d++)
      if (this.bits[d] != c.bits[d]) return !1;
    return !0
  }, i.Common.BitMatrix.prototype.toString = function(a, b, c) {
    var d = "";
    a = a || "X", b = b || "  ", c = c || "\n";
    for (var e = 0; e < this.height; e++) {
      for (var f = 0; f < this.width; f++) d += this.get_Item(f, e) ? a : b;
      d += c
    }
    return d
  }, i.Common.BitMatrix.prototype.Clone = function() {
    return new i.Common.BitMatrix(this.width, this.height, this.rowSize, this.bits.slice(0))
  }, i.Common.Detector.MathUtils = function() {}, i.Common.Detector.MathUtils.distance = function(a, b, c, d) {
    var e = a - c,
      f = b - d;
    return Math.sqrt(e * e + f * f)
  }, i.Common.ECI = function(a) {
    this.value_Renamed = 0, this.value_Renamed = a
  }, i.Common.ECI.prototype.get_Value = function() {
    return this.value_Renamed
  }, i.Common.ECI.getECIByValue = function(a) {
    if (a < 0 || a > 999999) throw new Error("Bad ECI value: " + a);
    return a < 900 ? i.Common.CharacterSetECI.getCharacterSetECIByValue(a) : null
  }, i.Common.CharacterSetECI = function(a, b) {
    this.encodingName = null, i.Common.ECI.call(this, a), this.encodingName = b
  }, i.Common.CharacterSetECI.prototype.get_EncodingName = function() {
    return this.encodingName
  }, i.Common.CharacterSetECI.addCharacterSet = function(a, b) {
    if (Array.isArray(b)) {
      var c = new i.Common.CharacterSetECI(a, b[0]);
      i.Common.CharacterSetECI.VALUE_TO_ECI[a] = c;
      for (var d = 0, e = b.length, f = b[d]; d < e; d++, f = b[d]) i.Common.CharacterSetECI.NAME_TO_ECI[f] = c
    } else {
      var g = b,
        h = new i.Common.CharacterSetECI(a, g);
      i.Common.CharacterSetECI.VALUE_TO_ECI[a] = h, i.Common.CharacterSetECI.NAME_TO_ECI[g.toUpperCase()] = h
    }
  }, i.Common.CharacterSetECI.VALUE_TO_ECI = null, i.Common.CharacterSetECI.NAME_TO_ECI = null, i.Common.CharacterSetECI.VALUE_TO_ECI = {}, i.Common.CharacterSetECI.NAME_TO_ECI = {}, i.Common.CharacterSetECI.addCharacterSet(0, "CP437"), i.Common.CharacterSetECI.addCharacterSet(1, ["ISO-8859-1", "ISO8859_1"]), i.Common.CharacterSetECI.addCharacterSet(2, "CP437"), i.Common.CharacterSetECI.addCharacterSet(3, ["ISO-8859-1", "ISO8859_1"]), i.Common.CharacterSetECI.addCharacterSet(4, ["ISO-8859-2", "ISO8859_2"]), i.Common.CharacterSetECI.addCharacterSet(5, ["ISO-8859-3", "ISO8859_3"]), i.Common.CharacterSetECI.addCharacterSet(6, ["ISO-8859-4", "ISO8859_4"]), i.Common.CharacterSetECI.addCharacterSet(7, ["ISO-8859-5", "ISO8859_5"]), i.Common.CharacterSetECI.addCharacterSet(8, ["ISO-8859-6", "ISO8859_6"]), i.Common.CharacterSetECI.addCharacterSet(9, ["ISO-8859-7", "ISO8859_7"]), i.Common.CharacterSetECI.addCharacterSet(10, ["ISO-8859-8", "ISO8859_8"]), i.Common.CharacterSetECI.addCharacterSet(11, ["ISO-8859-9", "ISO8859_9"]), i.Common.CharacterSetECI.addCharacterSet(12, ["ISO-8859-4", "ISO-8859-10", "ISO8859_10"]), i.Common.CharacterSetECI.addCharacterSet(13, ["ISO-8859-11", "ISO8859_11"]), i.Common.CharacterSetECI.addCharacterSet(15, ["ISO-8859-13", "ISO8859_13"]), i.Common.CharacterSetECI.addCharacterSet(16, ["ISO-8859-1", "ISO-8859-14", "ISO8859_14"]), i.Common.CharacterSetECI.addCharacterSet(17, ["ISO-8859-15", "ISO8859_15"]), i.Common.CharacterSetECI.addCharacterSet(18, ["ISO-8859-3", "ISO-8859-16", "ISO8859_16"]), i.Common.CharacterSetECI.addCharacterSet(20, ["SJIS", "Shift_JIS"]), i.Common.CharacterSetECI.addCharacterSet(21, ["WINDOWS-1250", "CP1250"]), i.Common.CharacterSetECI.addCharacterSet(22, ["WINDOWS-1251", "CP1251"]), i.Common.CharacterSetECI.addCharacterSet(23, ["WINDOWS-1252", "CP1252"]), i.Common.CharacterSetECI.addCharacterSet(24, ["WINDOWS-1256", "CP1256"]), i.Common.CharacterSetECI.addCharacterSet(25, ["UTF-16BE", "UNICODEBIG"]), i.Common.CharacterSetECI.addCharacterSet(26, ["UTF-8", "UTF8"]), i.Common.CharacterSetECI.addCharacterSet(27, "US-ASCII"), i.Common.CharacterSetECI.addCharacterSet(170, "US-ASCII"), i.Common.CharacterSetECI.addCharacterSet(28, "BIG5"), i.Common.CharacterSetECI.addCharacterSet(29, ["GB18030", "GB2312", "EUC_CN", "GBK"]), i.Common.CharacterSetECI.addCharacterSet(30, ["EUC-KR", "EUC_KR"]), i.Common.CharacterSetECI.getCharacterSetECIByValue = function(a) {
    return a < 0 || a >= 900 ? null : i.Common.CharacterSetECI.VALUE_TO_ECI[a]
  }, i.Common.CharacterSetECI.getCharacterSetECIByName = function(a) {
    return i.Common.CharacterSetECI.NAME_TO_ECI[a.toUpperCase()]
  }, h(i.Common.CharacterSetECI, i.Common.ECI), i.Common.GlobalHistogramBinarizer = function(a) {
    this.luminances = null, this.buckets = null, i.Binarizer.call(this, a), this.luminances = i.Common.GlobalHistogramBinarizer.EMPTY, this.buckets = new Int32Array(32)
  }, i.Common.GlobalHistogramBinarizer.LUMINANCE_BITS = 5, i.Common.GlobalHistogramBinarizer.LUMINANCE_SHIFT = 3, i.Common.GlobalHistogramBinarizer.LUMINANCE_BUCKETS = 32, i.Common.GlobalHistogramBinarizer.EMPTY = new Uint8Array(0), i.Common.GlobalHistogramBinarizer.prototype.getBlackRow = function(a, b) {
    var c = this.get_LuminanceSource(),
      d = c.get_Width();
    null == b || b.get_Size() < d ? b = new i.Common.BitArray(d) : b.clear(), this.initArrays(d);
    for (var e = c.getRow(a, this.luminances), f = this.buckets, g = 0; g < d; g++) {
      var h = 255 & e[g];
      f[h >> 3]++
    }
    var j = 0;
    if (! function() {
        var a = {
            Value: j
          },
          b = i.Common.GlobalHistogramBinarizer.estimateBlackPoint(f, a);
        return j = a.Value, b
      }.call(this)) return null;
    for (var k = 255 & e[0], l = 255 & e[1], m = 1; m < d - 1; m++) {
      var n = 255 & e[m + 1],
        o = (l << 2) - k - n >> 1;
      b.set_Item(m, o < j), k = l, l = n
    }
    return b
  }, i.Common.GlobalHistogramBinarizer.prototype.get_BlackMatrix = function() {
    var a, b = this.get_LuminanceSource(),
      c = b.get_Width(),
      d = b.get_Height(),
      e = new i.Common.BitMatrix(c, d);
    this.initArrays(c);
    for (var f, g = this.buckets, h = 1; h < 5; h++) {
      var j = d * Math.floor(h / 5);
      a = b.getRow(j, this.luminances);
      for (var k = Math.floor((c << 2) / 5), l = c / 5; l < k; l++) f = 255 & a[l], g[f >> 3]++
    }
    var m = 0;
    if (! function() {
        var a = {
            Value: m
          },
          b = i.Common.GlobalHistogramBinarizer.estimateBlackPoint(g, a);
        return m = a.Value, b
      }.call(this)) return null;
    a = b.get_Matrix();
    for (var n = 0; n < d; n++)
      for (var o = n * c, p = 0; p < c; p++) f = 255 & a[o + p], e.set_Item(p, n, f < m);
    return e
  }, i.Common.GlobalHistogramBinarizer.prototype.createBinarizer = function(a) {
    return new i.Common.GlobalHistogramBinarizer(a)
  }, i.Common.GlobalHistogramBinarizer.prototype.initArrays = function(a) {
    this.luminances.length < a && (this.luminances = new Uint8Array(a));
    for (var b = 0; b < 32; b++) this.buckets[b] = 0
  }, i.Common.GlobalHistogramBinarizer.estimateBlackPoint = function(a, b) {
    b.Value = 0;
    for (var c = a.length, d = 0, e = 0, f = 0, g = 0; g < c; g++) a[g] > f && (e = g, f = a[g]), a[g] > d && (d = a[g]);
    for (var h, i = 0, j = 0, k = 0; k < c; k++) {
      var l = k - e;
      h = a[k] * l * l, h > j && (i = k, j = h)
    }
    if (e > i) {
      var m = e;
      e = i, i = m
    }
    if (i - e <= c >> 4) return !1;
    var n = i - 1,
      o = -1;
    for (g = i - 1; g > e; g--) {
      var p = g - e;
      h = p * p * (i - g) * (d - a[g]), h > o && (n = g, o = h)
    }
    return b.Value = n << 3, !0
  }, h(i.Common.GlobalHistogramBinarizer, i.Binarizer), i.Common.HybridBinarizer = function(a) {
    this.matrix = null, i.Common.GlobalHistogramBinarizer.call(this, a)
  }, i.Common.HybridBinarizer.BLOCK_SIZE_POWER = 3, i.Common.HybridBinarizer.BLOCK_SIZE = 8, i.Common.HybridBinarizer.BLOCK_SIZE_MASK = 7, i.Common.HybridBinarizer.MINIMUM_DIMENSION = 40, i.Common.HybridBinarizer.MIN_DYNAMIC_RANGE = 24, i.Common.HybridBinarizer.prototype.get_BlackMatrix = function() {
    return this.binarizeEntireImage(), this.matrix
  }, i.Common.HybridBinarizer.prototype.createBinarizer = function(a) {
    return new i.Common.HybridBinarizer(a)
  }, i.Common.HybridBinarizer.prototype.binarizeEntireImage = function() {
    if (null == this.matrix) {
      var a = this.get_LuminanceSource(),
        b = a.get_Width(),
        c = a.get_Height();
      if (b >= 40 && c >= 40) {
        var d = a.get_Matrix(),
          e = b >> 3;
        0 != (7 & b) && e++;
        var f = c >> 3;
        0 != (7 & c) && f++;
        var g = i.Common.HybridBinarizer.calculateBlackPoints(d, e, f, b, c),
          h = new i.Common.BitMatrix(b, c);
        i.Common.HybridBinarizer.calculateThresholdForBlock(d, e, f, b, c, g, h), this.matrix = h
      } else this.matrix = i.Common.GlobalHistogramBinarizer.prototype.get_BlackMatrix.call(this)
    }
  }, i.Common.HybridBinarizer.calculateThresholdForBlock = function(a, b, c, d, e, f, g) {
    for (var h, j, k, l, m, n, o, p = e - 8, q = d - 8, r = 0; r < c; r++) {
      j = r << 3, j > p && (j = p), h = i.Common.HybridBinarizer.cap(r, 2, c - 3);
      for (var s = 0; s < b; s++) {
        k = s << 3, k > q && (k = q), l = i.Common.HybridBinarizer.cap(s, 2, b - 3), m = 0;
        for (var t = -2; t <= 2; t++) n = f[h + t], m += n[l - 2], m += n[l - 1], m += n[l], m += n[l + 1], m += n[l + 2];
        o = Math.floor(m / 25), i.Common.HybridBinarizer.thresholdBlock(a, k, j, o, d, g)
      }
    }
  };
  i.Common.HybridBinarizer.cap = function(a, b, c) {
      return a < b ? b : a > c ? c : a
    }, i.Common.HybridBinarizer.thresholdBlock = function(a, b, c, d, e, f) {
      for (var g, h = c * e + b, i = 0; i < 8; i++, h += e)
        for (var j = 0; j < 8; j++) g = 255 & a[h + j], f.set_Item(b + j, c + i, g <= d)
    }, i.Common.HybridBinarizer.calculateBlackPoints = function(a, b, c, d, e) {
      for (var f = new Array(c), g = e - 8, h = d - 8, i = 0; i < c; i++) f[i] = new Int32Array(b);
      for (var j = 0; j < c; j++) {
        var k = j << 3;
        k > g && (k = g);
        for (var l = 0; l < b; l++) {
          var m = l << 3;
          m > h && (m = h);
          for (var n = 0, o = 255, p = 0, q = 0, r = k * d + m; q < 8; q++, r += d) {
            for (var s = 0; s < 8; s++) {
              var t = 255 & a[r + s];
              n += t, t < o && (o = t), t > p && (p = t)
            }
            if (p - o > 24)
              for (q++, r += d; q < 8; q++, r += d)
                for (s = 0; s < 8; s++) n += 255 & a[r + s]
          }
          var u = n >> 6;
          if (p - o <= 24 && (u = o >> 1, j > 0 && l > 0)) {
            var v = f[j - 1][l] + 2 * f[j][l - 1] + f[j - 1][l - 1] >> 2;
            o < v && (u = v)
          }
          f[j][l] = u
        }
      }
      return f
    }, h(i.Common.HybridBinarizer, i.Common.GlobalHistogramBinarizer), i.PDF417.PDF417ResultMetadata = function() {
      this.SegmentIndex = 0, this.FileId = null, this.OptionalData = null, this.IsLastSegment = !1
    }, i.PDF417.PDF417Common = function() {}, i.PDF417.PDF417Common.INVALID_CODEWORD = -1, i.PDF417.PDF417Common.NUMBER_OF_CODEWORDS = 929, i.PDF417.PDF417Common.MAX_CODEWORDS_IN_BARCODE = i.PDF417.PDF417Common.NUMBER_OF_CODEWORDS - 1, i.PDF417.PDF417Common.MIN_ROWS_IN_BARCODE = 3, i.PDF417.PDF417Common.MAX_ROWS_IN_BARCODE = 90, i.PDF417.PDF417Common.MODULES_IN_CODEWORD = 17, i.PDF417.PDF417Common.MODULES_IN_STOP_PATTERN = 18, i.PDF417.PDF417Common.BARS_IN_MODULE = 8, i.PDF417.PDF417Common.EMPTY_INT_ARRAY = new Int32Array(0),
    i.PDF417.PDF417Common.SYMBOL_TABLE = [66142, 66170, 66206, 66236, 66290, 66292, 66350, 66382, 66396, 66454, 66470, 66476, 66594, 66600, 66614, 66626, 66628, 66632, 66640, 66654, 66662, 66668, 66682, 66690, 66718, 66720, 66748, 66758, 66776, 66798, 66802, 66804, 66820, 66824, 66832, 66846, 66848, 66876, 66880, 66936, 66950, 66956, 66968, 66992, 67006, 67022, 67036, 67042, 67044, 67048, 67062, 67118, 67150, 67164, 67214, 67228, 67256, 67294, 67322, 67350, 67366, 67372, 67398, 67404, 67416, 67438, 67474, 67476, 67490, 67492, 67496, 67510, 67618, 67624, 67650, 67656, 67664, 67678, 67686, 67692, 67706, 67714, 67716, 67728, 67742, 67744, 67772, 67782, 67788, 67800, 67822, 67826, 67828, 67842, 67848, 67870, 67872, 67900, 67904, 67960, 67974, 67992, 68016, 68030, 68046, 68060, 68066, 68068, 68072, 68086, 68104, 68112, 68126, 68128, 68156, 68160, 68216, 68336, 68358, 68364, 68376, 68400, 68414, 68448, 68476, 68494, 68508, 68536, 68546, 68548, 68552, 68560, 68574, 68582, 68588, 68654, 68686, 68700, 68706, 68708, 68712, 68726, 68750, 68764, 68792, 68802, 68804, 68808, 68816, 68830, 68838, 68844, 68858, 68878, 68892, 68920, 68976, 68990, 68994, 68996, 69e3, 69008, 69022, 69024, 69052, 69062, 69068, 69080, 69102, 69106, 69108, 69142, 69158, 69164, 69190, 69208, 69230, 69254, 69260, 69272, 69296, 69310, 69326, 69340, 69386, 69394, 69396, 69410, 69416, 69430, 69442, 69444, 69448, 69456, 69470, 69478, 69484, 69554, 69556, 69666, 69672, 69698, 69704, 69712, 69726, 69754, 69762, 69764, 69776, 69790, 69792, 69820, 69830, 69836, 69848, 69870, 69874, 69876, 69890, 69918, 69920, 69948, 69952, 70008, 70022, 70040, 70064, 70078, 70094, 70108, 70114, 70116, 70120, 70134, 70152, 70174, 70176, 70264, 70384, 70412, 70448, 70462, 70496, 70524, 70542, 70556, 70584, 70594, 70600, 70608, 70622, 70630, 70636, 70664, 70672, 70686, 70688, 70716, 70720, 70776, 70896, 71136, 71180, 71192, 71216, 71230, 71264, 71292, 71360, 71416, 71452, 71480, 71536, 71550, 71554, 71556, 71560, 71568, 71582, 71584, 71612, 71622, 71628, 71640, 71662, 71726, 71732, 71758, 71772, 71778, 71780, 71784, 71798, 71822, 71836, 71864, 71874, 71880, 71888, 71902, 71910, 71916, 71930, 71950, 71964, 71992, 72048, 72062, 72066, 72068, 72080, 72094, 72096, 72124, 72134, 72140, 72152, 72174, 72178, 72180, 72206, 72220, 72248, 72304, 72318, 72416, 72444, 72456, 72464, 72478, 72480, 72508, 72512, 72568, 72588, 72600, 72624, 72638, 72654, 72668, 72674, 72676, 72680, 72694, 72726, 72742, 72748, 72774, 72780, 72792, 72814, 72838, 72856, 72880, 72894, 72910, 72924, 72930, 72932, 72936, 72950, 72966, 72972, 72984, 73008, 73022, 73056, 73084, 73102, 73116, 73144, 73156, 73160, 73168, 73182, 73190, 73196, 73210, 73226, 73234, 73236, 73250, 73252, 73256, 73270, 73282, 73284, 73296, 73310, 73318, 73324, 73346, 73348, 73352, 73360, 73374, 73376, 73404, 73414, 73420, 73432, 73454, 73498, 73518, 73522, 73524, 73550, 73564, 73570, 73572, 73576, 73590, 73800, 73822, 73858, 73860, 73872, 73886, 73888, 73916, 73944, 73970, 73972, 73992, 74014, 74016, 74044, 74048, 74104, 74118, 74136, 74160, 74174, 74210, 74212, 74216, 74230, 74244, 74256, 74270, 74272, 74360, 74480, 74502, 74508, 74544, 74558, 74592, 74620, 74638, 74652, 74680, 74690, 74696, 74704, 74726, 74732, 74782, 74784, 74812, 74992, 75232, 75288, 75326, 75360, 75388, 75456, 75512, 75576, 75632, 75646, 75650, 75652, 75664, 75678, 75680, 75708, 75718, 75724, 75736, 75758, 75808, 75836, 75840, 75896, 76016, 76256, 76736, 76824, 76848, 76862, 76896, 76924, 76992, 77048, 77296, 77340, 77368, 77424, 77438, 77536, 77564, 77572, 77576, 77584, 77600, 77628, 77632, 77688, 77702, 77708, 77720, 77744, 77758, 77774, 77788, 77870, 77902, 77916, 77922, 77928, 77966, 77980, 78008, 78018, 78024, 78032, 78046, 78060, 78074, 78094, 78136, 78192, 78206, 78210, 78212, 78224, 78238, 78240, 78268, 78278, 78284, 78296, 78322, 78324, 78350, 78364, 78448, 78462, 78560, 78588, 78600, 78622, 78624, 78652, 78656, 78712, 78726, 78744, 78768, 78782, 78798, 78812, 78818, 78820, 78824, 78838, 78862, 78876, 78904, 78960, 78974, 79072, 79100, 79296, 79352, 79368, 79376, 79390, 79392, 79420, 79424, 79480, 79600, 79628, 79640, 79664, 79678, 79712, 79740, 79772, 79800, 79810, 79812, 79816, 79824, 79838, 79846, 79852, 79894, 79910, 79916, 79942, 79948, 79960, 79982, 79988, 80006, 80024, 80048, 80062, 80078, 80092, 80098, 80100, 80104, 80134, 80140, 80176, 80190, 80224, 80252, 80270, 80284, 80312, 80328, 80336, 80350, 80358, 80364, 80378, 80390, 80396, 80408, 80432, 80446, 80480, 80508, 80576, 80632, 80654, 80668, 80696, 80752, 80766, 80776, 80784, 80798, 80800, 80828, 80844, 80856, 80878, 80882, 80884, 80914, 80916, 80930, 80932, 80936, 80950, 80962, 80968, 80976, 80990, 80998, 81004, 81026, 81028, 81040, 81054, 81056, 81084, 81094, 81100, 81112, 81134, 81154, 81156, 81160, 81168, 81182, 81184, 81212, 81216, 81272, 81286, 81292, 81304, 81328, 81342, 81358, 81372, 81380, 81384, 81398, 81434, 81454, 81458, 81460, 81486, 81500, 81506, 81508, 81512, 81526, 81550, 81564, 81592, 81602, 81604, 81608, 81616, 81630, 81638, 81644, 81702, 81708, 81722, 81734, 81740, 81752, 81774, 81778, 81780, 82050, 82078, 82080, 82108, 82180, 82184, 82192, 82206, 82208, 82236, 82240, 82296, 82316, 82328, 82352, 82366, 82402, 82404, 82408, 82440, 82448, 82462, 82464, 82492, 82496, 82552, 82672, 82694, 82700, 82712, 82736, 82750, 82784, 82812, 82830, 82882, 82884, 82888, 82896, 82918, 82924, 82952, 82960, 82974, 82976, 83004, 83008, 83064, 83184, 83424, 83468, 83480, 83504, 83518, 83552, 83580, 83648, 83704, 83740, 83768, 83824, 83838, 83842, 83844, 83848, 83856, 83872, 83900, 83910, 83916, 83928, 83950, 83984, 84e3, 84028, 84032, 84088, 84208, 84448, 84928, 85040, 85054, 85088, 85116, 85184, 85240, 85488, 85560, 85616, 85630, 85728, 85756, 85764, 85768, 85776, 85790, 85792, 85820, 85824, 85880, 85894, 85900, 85912, 85936, 85966, 85980, 86048, 86080, 86136, 86256, 86496, 86976, 88160, 88188, 88256, 88312, 88560, 89056, 89200, 89214, 89312, 89340, 89536, 89592, 89608, 89616, 89632, 89664, 89720, 89840, 89868, 89880, 89904, 89952, 89980, 89998, 90012, 90040, 90190, 90204, 90254, 90268, 90296, 90306, 90308, 90312, 90334, 90382, 90396, 90424, 90480, 90494, 90500, 90504, 90512, 90526, 90528, 90556, 90566, 90572, 90584, 90610, 90612, 90638, 90652, 90680, 90736, 90750, 90848, 90876, 90884, 90888, 90896, 90910, 90912, 90940, 90944, 91e3, 91014, 91020, 91032, 91056, 91070, 91086, 91100, 91106, 91108, 91112, 91126, 91150, 91164, 91192, 91248, 91262, 91360, 91388, 91584, 91640, 91664, 91678, 91680, 91708, 91712, 91768, 91888, 91928, 91952, 91966, 92e3, 92028, 92046, 92060, 92088, 92098, 92100, 92104, 92112, 92126, 92134, 92140, 92188, 92216, 92272, 92384, 92412, 92608, 92664, 93168, 93200, 93214, 93216, 93244, 93248, 93304, 93424, 93664, 93720, 93744, 93758, 93792, 93820, 93888, 93944, 93980, 94008, 94064, 94078, 94084, 94088, 94096, 94110, 94112, 94140, 94150, 94156, 94168, 94246, 94252, 94278, 94284, 94296, 94318, 94342, 94348, 94360, 94384, 94398, 94414, 94428, 94440, 94470, 94476, 94488, 94512, 94526, 94560, 94588, 94606, 94620, 94648, 94658, 94660, 94664, 94672, 94686, 94694, 94700, 94714, 94726, 94732, 94744, 94768, 94782, 94816, 94844, 94912, 94968, 94990, 95004, 95032, 95088, 95102, 95112, 95120, 95134, 95136, 95164, 95180, 95192, 95214, 95218, 95220, 95244, 95256, 95280, 95294, 95328, 95356, 95424, 95480, 95728, 95758, 95772, 95800, 95856, 95870, 95968, 95996, 96008, 96016, 96030, 96032, 96060, 96064, 96120, 96152, 96176, 96190, 96220, 96226, 96228, 96232, 96290, 96292, 96296, 96310, 96322, 96324, 96328, 96336, 96350, 96358, 96364, 96386, 96388, 96392, 96400, 96414, 96416, 96444, 96454, 96460, 96472, 96494, 96498, 96500, 96514, 96516, 96520, 96528, 96542, 96544, 96572, 96576, 96632, 96646, 96652, 96664, 96688, 96702, 96718, 96732, 96738, 96740, 96744, 96758, 96772, 96776, 96784, 96798, 96800, 96828, 96832, 96888, 97008, 97030, 97036, 97048, 97072, 97086, 97120, 97148, 97166, 97180, 97208, 97220, 97224, 97232, 97246, 97254, 97260, 97326, 97330, 97332, 97358, 97372, 97378, 97380, 97384, 97398, 97422, 97436, 97464, 97474, 97476, 97480, 97488, 97502, 97510, 97516, 97550, 97564, 97592, 97648, 97666, 97668, 97672, 97680, 97694, 97696, 97724, 97734, 97740, 97752, 97774, 97830, 97836, 97850, 97862, 97868, 97880, 97902, 97906, 97908, 97926, 97932, 97944, 97968, 97998, 98012, 98018, 98020, 98024, 98038, 98618, 98674, 98676, 98838, 98854, 98874, 98892, 98904, 98926, 98930, 98932, 98968, 99006, 99042, 99044, 99048, 99062, 99166, 99194, 99246, 99286, 99350, 99366, 99372, 99386, 99398, 99416, 99438, 99442, 99444, 99462, 99504, 99518, 99534, 99548, 99554, 99556, 99560, 99574, 99590, 99596, 99608, 99632, 99646, 99680, 99708, 99726, 99740, 99768, 99778, 99780, 99784, 99792, 99806, 99814, 99820, 99834, 99858, 99860, 99874, 99880, 99894, 99906, 99920, 99934, 99962, 99970, 99972, 99976, 99984, 99998, 1e5, 100028, 100038, 100044, 100056, 100078, 100082, 100084, 100142, 100174, 100188, 100246, 100262, 100268, 100306, 100308, 100390, 100396, 100410, 100422, 100428, 100440, 100462, 100466, 100468, 100486, 100504, 100528, 100542, 100558, 100572, 100578, 100580, 100584, 100598, 100620, 100656, 100670, 100704, 100732, 100750, 100792, 100802, 100808, 100816, 100830, 100838, 100844, 100858, 100888, 100912, 100926, 100960, 100988, 101056, 101112, 101148, 101176, 101232, 101246, 101250, 101252, 101256, 101264, 101278, 101280, 101308, 101318, 101324, 101336, 101358, 101362, 101364, 101410, 101412, 101416, 101430, 101442, 101448, 101456, 101470, 101478, 101498, 101506, 101508, 101520, 101534, 101536, 101564, 101580, 101618, 101620, 101636, 101640, 101648, 101662, 101664, 101692, 101696, 101752, 101766, 101784, 101838, 101858, 101860, 101864, 101934, 101938, 101940, 101966, 101980, 101986, 101988, 101992, 102030, 102044, 102072, 102082, 102084, 102088, 102096, 102138, 102166, 102182, 102188, 102214, 102220, 102232, 102254, 102282, 102290, 102292, 102306, 102308, 102312, 102326, 102444, 102458, 102470, 102476, 102488, 102514, 102516, 102534, 102552, 102576, 102590, 102606, 102620, 102626, 102632, 102646, 102662, 102668, 102704, 102718, 102752, 102780, 102798, 102812, 102840, 102850, 102856, 102864, 102878, 102886, 102892, 102906, 102936, 102974, 103008, 103036, 103104, 103160, 103224, 103280, 103294, 103298, 103300, 103312, 103326, 103328, 103356, 103366, 103372, 103384, 103406, 103410, 103412, 103472, 103486, 103520, 103548, 103616, 103672, 103920, 103992, 104048, 104062, 104160, 104188, 104194, 104196, 104200, 104208, 104224, 104252, 104256, 104312, 104326, 104332, 104344, 104368, 104382, 104398, 104412, 104418, 104420, 104424, 104482, 104484, 104514, 104520, 104528, 104542, 104550, 104570, 104578, 104580, 104592, 104606, 104608, 104636, 104652, 104690, 104692, 104706, 104712, 104734, 104736, 104764, 104768, 104824, 104838, 104856, 104910, 104930, 104932, 104936, 104968, 104976, 104990, 104992, 105020, 105024, 105080, 105200, 105240, 105278, 105312, 105372, 105410, 105412, 105416, 105424, 105446, 105518, 105524, 105550, 105564, 105570, 105572, 105576, 105614, 105628, 105656, 105666, 105672, 105680, 105702, 105722, 105742, 105756, 105784, 105840, 105854, 105858, 105860, 105864, 105872, 105888, 105932, 105970, 105972, 106006, 106022, 106028, 106054, 106060, 106072, 106100, 106118, 106124, 106136, 106160, 106174, 106190, 106210, 106212, 106216, 106250, 106258, 106260, 106274, 106276, 106280, 106306, 106308, 106312, 106320, 106334, 106348, 106394, 106414, 106418, 106420, 106566, 106572, 106610, 106612, 106630, 106636, 106648, 106672, 106686, 106722, 106724, 106728, 106742, 106758, 106764, 106776, 106800, 106814, 106848, 106876, 106894, 106908, 106936, 106946, 106948, 106952, 106960, 106974, 106982, 106988, 107032, 107056, 107070, 107104, 107132, 107200, 107256, 107292, 107320, 107376, 107390, 107394, 107396, 107400, 107408, 107422, 107424, 107452, 107462, 107468, 107480, 107502, 107506, 107508, 107544, 107568, 107582, 107616, 107644, 107712, 107768, 108016, 108060, 108088, 108144, 108158, 108256, 108284, 108290, 108292, 108296, 108304, 108318, 108320, 108348, 108352, 108408, 108422, 108428, 108440, 108464, 108478, 108494, 108508, 108514, 108516, 108520, 108592, 108640, 108668, 108736, 108792, 109040, 109536, 109680, 109694, 109792, 109820, 110016, 110072, 110084, 110088, 110096, 110112, 110140, 110144, 110200, 110320, 110342, 110348, 110360, 110384, 110398, 110432, 110460, 110478, 110492, 110520, 110532, 110536, 110544, 110558, 110658, 110686, 110714, 110722, 110724, 110728, 110736, 110750, 110752, 110780, 110796, 110834, 110836, 110850, 110852, 110856, 110864, 110878, 110880, 110908, 110912, 110968, 110982, 111e3, 111054, 111074, 111076, 111080, 111108, 111112, 111120, 111134, 111136, 111164, 111168, 111224, 111344, 111372, 111422, 111456, 111516, 111554, 111556, 111560, 111568, 111590, 111632, 111646, 111648, 111676, 111680, 111736, 111856, 112096, 112152, 112224, 112252, 112320, 112440, 112514, 112516, 112520, 112528, 112542, 112544, 112588, 112686, 112718, 112732, 112782, 112796, 112824, 112834, 112836, 112840, 112848, 112870, 112890, 112910, 112924, 112952, 113008, 113022, 113026, 113028, 113032, 113040, 113054, 113056, 113100, 113138, 113140, 113166, 113180, 113208, 113264, 113278, 113376, 113404, 113416, 113424, 113440, 113468, 113472, 113560, 113614, 113634, 113636, 113640, 113686, 113702, 113708, 113734, 113740, 113752, 113778, 113780, 113798, 113804, 113816, 113840, 113854, 113870, 113890, 113892, 113896, 113926, 113932, 113944, 113968, 113982, 114016, 114044, 114076, 114114, 114116, 114120, 114128, 114150, 114170, 114194, 114196, 114210, 114212, 114216, 114242, 114244, 114248, 114256, 114270, 114278, 114306, 114308, 114312, 114320, 114334, 114336, 114364, 114380, 114420, 114458, 114478, 114482, 114484, 114510, 114524, 114530, 114532, 114536, 114842, 114866, 114868, 114970, 114994, 114996, 115042, 115044, 115048, 115062, 115130, 115226, 115250, 115252, 115278, 115292, 115298, 115300, 115304, 115318, 115342, 115394, 115396, 115400, 115408, 115422, 115430, 115436, 115450, 115478, 115494, 115514, 115526, 115532, 115570, 115572, 115738, 115758, 115762, 115764, 115790, 115804, 115810, 115812, 115816, 115830, 115854, 115868, 115896, 115906, 115912, 115920, 115934, 115942, 115948, 115962, 115996, 116024, 116080, 116094, 116098, 116100, 116104, 116112, 116126, 116128, 116156, 116166, 116172, 116184, 116206, 116210, 116212, 116246, 116262, 116268, 116282, 116294, 116300, 116312, 116334, 116338, 116340, 116358, 116364, 116376, 116400, 116414, 116430, 116444, 116450, 116452, 116456, 116498, 116500, 116514, 116520, 116534, 116546, 116548, 116552, 116560, 116574, 116582, 116588, 116602, 116654, 116694, 116714, 116762, 116782, 116786, 116788, 116814, 116828, 116834, 116836, 116840, 116854, 116878, 116892, 116920, 116930, 116936, 116944, 116958, 116966, 116972, 116986, 117006, 117048, 117104, 117118, 117122, 117124, 117136, 117150, 117152, 117180, 117190, 117196, 117208, 117230, 117234, 117236, 117304, 117360, 117374, 117472, 117500, 117506, 117508, 117512, 117520, 117536, 117564, 117568, 117624, 117638, 117644, 117656, 117680, 117694, 117710, 117724, 117730, 117732, 117736, 117750, 117782, 117798, 117804, 117818, 117830, 117848, 117874, 117876, 117894, 117936, 117950, 117966, 117986, 117988, 117992, 118022, 118028, 118040, 118064, 118078, 118112, 118140, 118172, 118210, 118212, 118216, 118224, 118238, 118246, 118266, 118306, 118312, 118338, 118352, 118366, 118374, 118394, 118402, 118404, 118408, 118416, 118430, 118432, 118460, 118476, 118514, 118516, 118574, 118578, 118580, 118606, 118620, 118626, 118628, 118632, 118678, 118694, 118700, 118730, 118738, 118740, 118830, 118834, 118836, 118862, 118876, 118882, 118884, 118888, 118902, 118926, 118940, 118968, 118978, 118980, 118984, 118992, 119006, 119014, 119020, 119034, 119068, 119096, 119152, 119166, 119170, 119172, 119176, 119184, 119198, 119200, 119228, 119238, 119244, 119256, 119278, 119282, 119284, 119324, 119352, 119408, 119422, 119520, 119548, 119554, 119556, 119560, 119568, 119582, 119584, 119612, 119616, 119672, 119686, 119692, 119704, 119728, 119742, 119758, 119772, 119778, 119780, 119784, 119798, 119920, 119934, 120032, 120060, 120256, 120312, 120324, 120328, 120336, 120352, 120384, 120440, 120560, 120582, 120588, 120600, 120624, 120638, 120672, 120700, 120718, 120732, 120760, 120770, 120772, 120776, 120784, 120798, 120806, 120812, 120870, 120876, 120890, 120902, 120908, 120920, 120946, 120948, 120966, 120972, 120984, 121008, 121022, 121038, 121058, 121060, 121064, 121078, 121100, 121112, 121136, 121150, 121184, 121212, 121244, 121282, 121284, 121288, 121296, 121318, 121338, 121356, 121368, 121392, 121406, 121440, 121468, 121536, 121592, 121656, 121730, 121732, 121736, 121744, 121758, 121760, 121804, 121842, 121844, 121890, 121922, 121924, 121928, 121936, 121950, 121958, 121978, 121986, 121988, 121992, 122e3, 122014, 122016, 122044, 122060, 122098, 122100, 122116, 122120, 122128, 122142, 122144, 122172, 122176, 122232, 122246, 122264, 122318, 122338, 122340, 122344, 122414, 122418, 122420, 122446, 122460, 122466, 122468, 122472, 122510, 122524, 122552, 122562, 122564, 122568, 122576, 122598, 122618, 122646, 122662, 122668, 122694, 122700, 122712, 122738, 122740, 122762, 122770, 122772, 122786, 122788, 122792, 123018, 123026, 123028, 123042, 123044, 123048, 123062, 123098, 123146, 123154, 123156, 123170, 123172, 123176, 123190, 123202, 123204, 123208, 123216, 123238, 123244, 123258, 123290, 123314, 123316, 123402, 123410, 123412, 123426, 123428, 123432, 123446, 123458, 123464, 123472, 123486, 123494, 123500, 123514, 123522, 123524, 123528, 123536, 123552, 123580, 123590, 123596, 123608, 123630, 123634, 123636, 123674, 123698, 123700, 123740, 123746, 123748, 123752, 123834, 123914, 123922, 123924, 123938, 123944, 123958, 123970, 123976, 123984, 123998, 124006, 124012, 124026, 124034, 124036, 124048, 124062, 124064, 124092, 124102, 124108, 124120, 124142, 124146, 124148, 124162, 124164, 124168, 124176, 124190, 124192, 124220, 124224, 124280, 124294, 124300, 124312, 124336, 124350, 124366, 124380, 124386, 124388, 124392, 124406, 124442, 124462, 124466, 124468, 124494, 124508, 124514, 124520, 124558, 124572, 124600, 124610, 124612, 124616, 124624, 124646, 124666, 124694, 124710, 124716, 124730, 124742, 124748, 124760, 124786, 124788, 124818, 124820, 124834, 124836, 124840, 124854, 124946, 124948, 124962, 124964, 124968, 124982, 124994, 124996, 125e3, 125008, 125022, 125030, 125036, 125050, 125058, 125060, 125064, 125072, 125086, 125088, 125116, 125126, 125132, 125144, 125166, 125170, 125172, 125186, 125188, 125192, 125200, 125216, 125244, 125248, 125304, 125318, 125324, 125336, 125360, 125374, 125390, 125404, 125410, 125412, 125416, 125430, 125444, 125448, 125456, 125472, 125504, 125560, 125680, 125702, 125708, 125720, 125744, 125758, 125792, 125820, 125838, 125852, 125880, 125890, 125892, 125896, 125904, 125918, 125926, 125932, 125978, 125998, 126002, 126004, 126030, 126044, 126050, 126052, 126056, 126094, 126108, 126136, 126146, 126148, 126152, 126160, 126182, 126202, 126222, 126236, 126264, 126320, 126334, 126338, 126340, 126344, 126352, 126366, 126368, 126412, 126450, 126452, 126486, 126502, 126508, 126522, 126534, 126540, 126552, 126574, 126578, 126580, 126598, 126604, 126616, 126640, 126654, 126670, 126684, 126690, 126692, 126696, 126738, 126754, 126756, 126760, 126774, 126786, 126788, 126792, 126800, 126814, 126822, 126828, 126842, 126894, 126898, 126900, 126934, 127126, 127142, 127148, 127162, 127178, 127186, 127188, 127254, 127270, 127276, 127290, 127302, 127308, 127320, 127342, 127346, 127348, 127370, 127378, 127380, 127394, 127396, 127400, 127450, 127510, 127526, 127532, 127546, 127558, 127576, 127598, 127602, 127604, 127622, 127628, 127640, 127664, 127678, 127694, 127708, 127714, 127716, 127720, 127734, 127754, 127762, 127764, 127778, 127784, 127810, 127812, 127816, 127824, 127838, 127846, 127866, 127898, 127918, 127922, 127924, 128022, 128038, 128044, 128058, 128070, 128076, 128088, 128110, 128114, 128116, 128134, 128140, 128152, 128176, 128190, 128206, 128220, 128226, 128228, 128232, 128246, 128262, 128268, 128280, 128304, 128318, 128352, 128380, 128398, 128412, 128440, 128450, 128452, 128456, 128464, 128478, 128486, 128492, 128506, 128522, 128530, 128532, 128546, 128548, 128552, 128566, 128578, 128580, 128584, 128592, 128606, 128614, 128634, 128642, 128644, 128648, 128656, 128670, 128672, 128700, 128716, 128754, 128756, 128794, 128814, 128818, 128820, 128846, 128860, 128866, 128868, 128872, 128886, 128918, 128934, 128940, 128954, 128978, 128980, 129178, 129198, 129202, 129204, 129238, 129258, 129306, 129326, 129330, 129332, 129358, 129372, 129378, 129380, 129384, 129398, 129430, 129446, 129452, 129466, 129482, 129490, 129492, 129562, 129582, 129586, 129588, 129614, 129628, 129634, 129636, 129640, 129654, 129678, 129692, 129720, 129730, 129732, 129736, 129744, 129758, 129766, 129772, 129814, 129830, 129836, 129850, 129862, 129868, 129880, 129902, 129906, 129908, 129930, 129938, 129940, 129954, 129956, 129960, 129974, 130010], i.PDF417.PDF417Common.CODEWORD_TABLE = [2627, 1819, 2622, 2621, 1813, 1812, 2729, 2724, 2723, 2779, 2774, 2773, 902, 896, 908, 868, 865, 861, 859, 2511, 873, 871, 1780, 835, 2493, 825, 2491, 842, 837, 844, 1764, 1762, 811, 810, 809, 2483, 807, 2482, 806, 2480, 815, 814, 813, 812, 2484, 817, 816, 1745, 1744, 1742, 1746, 2655, 2637, 2635, 2626, 2625, 2623, 2628, 1820, 2752, 2739, 2737, 2728, 2727, 2725, 2730, 2785, 2783, 2778, 2777, 2775, 2780, 787, 781, 747, 739, 736, 2413, 754, 752, 1719, 692, 689, 681, 2371, 678, 2369, 700, 697, 694, 703, 1688, 1686, 642, 638, 2343, 631, 2341, 627, 2338, 651, 646, 643, 2345, 654, 652, 1652, 1650, 1647, 1654, 601, 599, 2322, 596, 2321, 594, 2319, 2317, 611, 610, 608, 606, 2324, 603, 2323, 615, 614, 612, 1617, 1616, 1614, 1612, 616, 1619, 1618, 2575, 2538, 2536, 905, 901, 898, 909, 2509, 2507, 2504, 870, 867, 864, 860, 2512, 875, 872, 1781, 2490, 2489, 2487, 2485, 1748, 836, 834, 832, 830, 2494, 827, 2492, 843, 841, 839, 845, 1765, 1763, 2701, 2676, 2674, 2653, 2648, 2656, 2634, 2633, 2631, 2629, 1821, 2638, 2636, 2770, 2763, 2761, 2750, 2745, 2753, 2736, 2735, 2733, 2731, 1848, 2740, 2738, 2786, 2784, 591, 588, 576, 569, 566, 2296, 1590, 537, 534, 526, 2276, 522, 2274, 545, 542, 539, 548, 1572, 1570, 481, 2245, 466, 2242, 462, 2239, 492, 485, 482, 2249, 496, 494, 1534, 1531, 1528, 1538, 413, 2196, 406, 2191, 2188, 425, 419, 2202, 415, 2199, 432, 430, 427, 1472, 1467, 1464, 433, 1476, 1474, 368, 367, 2160, 365, 2159, 362, 2157, 2155, 2152, 378, 377, 375, 2166, 372, 2165, 369, 2162, 383, 381, 379, 2168, 1419, 1418, 1416, 1414, 385, 1411, 384, 1423, 1422, 1420, 1424, 2461, 802, 2441, 2439, 790, 786, 783, 794, 2409, 2406, 2403, 750, 742, 738, 2414, 756, 753, 1720, 2367, 2365, 2362, 2359, 1663, 693, 691, 684, 2373, 680, 2370, 702, 699, 696, 704, 1690, 1687, 2337, 2336, 2334, 2332, 1624, 2329, 1622, 640, 637, 2344, 634, 2342, 630, 2340, 650, 648, 645, 2346, 655, 653, 1653, 1651, 1649, 1655, 2612, 2597, 2595, 2571, 2568, 2565, 2576, 2534, 2529, 2526, 1787, 2540, 2537, 907, 904, 900, 910, 2503, 2502, 2500, 2498, 1768, 2495, 1767, 2510, 2508, 2506, 869, 866, 863, 2513, 876, 874, 1782, 2720, 2713, 2711, 2697, 2694, 2691, 2702, 2672, 2670, 2664, 1828, 2678, 2675, 2647, 2646, 2644, 2642, 1823, 2639, 1822, 2654, 2652, 2650, 2657, 2771, 1855, 2765, 2762, 1850, 1849, 2751, 2749, 2747, 2754, 353, 2148, 344, 342, 336, 2142, 332, 2140, 345, 1375, 1373, 306, 2130, 299, 2128, 295, 2125, 319, 314, 311, 2132, 1354, 1352, 1349, 1356, 262, 257, 2101, 253, 2096, 2093, 274, 273, 267, 2107, 263, 2104, 280, 278, 275, 1316, 1311, 1308, 1320, 1318, 2052, 202, 2050, 2044, 2040, 219, 2063, 212, 2060, 208, 2055, 224, 221, 2066, 1260, 1258, 1252, 231, 1248, 229, 1266, 1264, 1261, 1268, 155, 1998, 153, 1996, 1994, 1991, 1988, 165, 164, 2007, 162, 2006, 159, 2003, 2e3, 172, 171, 169, 2012, 166, 2010, 1186, 1184, 1182, 1179, 175, 1176, 173, 1192, 1191, 1189, 1187, 176, 1194, 1193, 2313, 2307, 2305, 592, 589, 2294, 2292, 2289, 578, 572, 568, 2297, 580, 1591, 2272, 2267, 2264, 1547, 538, 536, 529, 2278, 525, 2275, 547, 544, 541, 1574, 1571, 2237, 2235, 2229, 1493, 2225, 1489, 478, 2247, 470, 2244, 465, 2241, 493, 488, 484, 2250, 498, 495, 1536, 1533, 1530, 1539, 2187, 2186, 2184, 2182, 1432, 2179, 1430, 2176, 1427, 414, 412, 2197, 409, 2195, 405, 2193, 2190, 426, 424, 421, 2203, 418, 2201, 431, 429, 1473, 1471, 1469, 1466, 434, 1477, 1475, 2478, 2472, 2470, 2459, 2457, 2454, 2462, 803, 2437, 2432, 2429, 1726, 2443, 2440, 792, 789, 785, 2401, 2399, 2393, 1702, 2389, 1699, 2411, 2408, 2405, 745, 741, 2415, 758, 755, 1721, 2358, 2357, 2355, 2353, 1661, 2350, 1660, 2347, 1657, 2368, 2366, 2364, 2361, 1666, 690, 687, 2374, 683, 2372, 701, 698, 705, 1691, 1689, 2619, 2617, 2610, 2608, 2605, 2613, 2593, 2588, 2585, 1803, 2599, 2596, 2563, 2561, 2555, 1797, 2551, 1795, 2573, 2570, 2567, 2577, 2525, 2524, 2522, 2520, 1786, 2517, 1785, 2514, 1783, 2535, 2533, 2531, 2528, 1788, 2541, 2539, 906, 903, 911, 2721, 1844, 2715, 2712, 1838, 1836, 2699, 2696, 2693, 2703, 1827, 1826, 1824, 2673, 2671, 2669, 2666, 1829, 2679, 2677, 1858, 1857, 2772, 1854, 1853, 1851, 1856, 2766, 2764, 143, 1987, 139, 1986, 135, 133, 131, 1984, 128, 1983, 125, 1981, 138, 137, 136, 1985, 1133, 1132, 1130, 112, 110, 1974, 107, 1973, 104, 1971, 1969, 122, 121, 119, 117, 1977, 114, 1976, 124, 1115, 1114, 1112, 1110, 1117, 1116, 84, 83, 1953, 81, 1952, 78, 1950, 1948, 1945, 94, 93, 91, 1959, 88, 1958, 85, 1955, 99, 97, 95, 1961, 1086, 1085, 1083, 1081, 1078, 100, 1090, 1089, 1087, 1091, 49, 47, 1917, 44, 1915, 1913, 1910, 1907, 59, 1926, 56, 1925, 53, 1922, 1919, 66, 64, 1931, 61, 1929, 1042, 1040, 1038, 71, 1035, 70, 1032, 68, 1048, 1047, 1045, 1043, 1050, 1049, 12, 10, 1869, 1867, 1864, 1861, 21, 1880, 19, 1877, 1874, 1871, 28, 1888, 25, 1886, 22, 1883, 982, 980, 977, 974, 32, 30, 991, 989, 987, 984, 34, 995, 994, 992, 2151, 2150, 2147, 2146, 2144, 356, 355, 354, 2149, 2139, 2138, 2136, 2134, 1359, 343, 341, 338, 2143, 335, 2141, 348, 347, 346, 1376, 1374, 2124, 2123, 2121, 2119, 1326, 2116, 1324, 310, 308, 305, 2131, 302, 2129, 298, 2127, 320, 318, 316, 313, 2133, 322, 321, 1355, 1353, 1351, 1357, 2092, 2091, 2089, 2087, 1276, 2084, 1274, 2081, 1271, 259, 2102, 256, 2100, 252, 2098, 2095, 272, 269, 2108, 266, 2106, 281, 279, 277, 1317, 1315, 1313, 1310, 282, 1321, 1319, 2039, 2037, 2035, 2032, 1203, 2029, 1200, 1197, 207, 2053, 205, 2051, 201, 2049, 2046, 2043, 220, 218, 2064, 215, 2062, 211, 2059, 228, 226, 223, 2069, 1259, 1257, 1254, 232, 1251, 230, 1267, 1265, 1263, 2316, 2315, 2312, 2311, 2309, 2314, 2304, 2303, 2301, 2299, 1593, 2308, 2306, 590, 2288, 2287, 2285, 2283, 1578, 2280, 1577, 2295, 2293, 2291, 579, 577, 574, 571, 2298, 582, 581, 1592, 2263, 2262, 2260, 2258, 1545, 2255, 1544, 2252, 1541, 2273, 2271, 2269, 2266, 1550, 535, 532, 2279, 528, 2277, 546, 543, 549, 1575, 1573, 2224, 2222, 2220, 1486, 2217, 1485, 2214, 1482, 1479, 2238, 2236, 2234, 2231, 1496, 2228, 1492, 480, 477, 2248, 473, 2246, 469, 2243, 490, 487, 2251, 497, 1537, 1535, 1532, 2477, 2476, 2474, 2479, 2469, 2468, 2466, 2464, 1730, 2473, 2471, 2453, 2452, 2450, 2448, 1729, 2445, 1728, 2460, 2458, 2456, 2463, 805, 804, 2428, 2427, 2425, 2423, 1725, 2420, 1724, 2417, 1722, 2438, 2436, 2434, 2431, 1727, 2444, 2442, 793, 791, 788, 795, 2388, 2386, 2384, 1697, 2381, 1696, 2378, 1694, 1692, 2402, 2400, 2398, 2395, 1703, 2392, 1701, 2412, 2410, 2407, 751, 748, 744, 2416, 759, 757, 1807, 2620, 2618, 1806, 1805, 2611, 2609, 2607, 2614, 1802, 1801, 1799, 2594, 2592, 2590, 2587, 1804, 2600, 2598, 1794, 1793, 1791, 1789, 2564, 2562, 2560, 2557, 1798, 2554, 1796, 2574, 2572, 2569, 2578, 1847, 1846, 2722, 1843, 1842, 1840, 1845, 2716, 2714, 1835, 1834, 1832, 1830, 1839, 1837, 2700, 2698, 2695, 2704, 1817, 1811, 1810, 897, 862, 1777, 829, 826, 838, 1760, 1758, 808, 2481, 1741, 1740, 1738, 1743, 2624, 1818, 2726, 2776, 782, 740, 737, 1715, 686, 679, 695, 1682, 1680, 639, 628, 2339, 647, 644, 1645, 1643, 1640, 1648, 602, 600, 597, 595, 2320, 593, 2318, 609, 607, 604, 1611, 1610, 1608, 1606, 613, 1615, 1613, 2328, 926, 924, 892, 886, 899, 857, 850, 2505, 1778, 824, 823, 821, 819, 2488, 818, 2486, 833, 831, 828, 840, 1761, 1759, 2649, 2632, 2630, 2746, 2734, 2732, 2782, 2781, 570, 567, 1587, 531, 527, 523, 540, 1566, 1564, 476, 467, 463, 2240, 486, 483, 1524, 1521, 1518, 1529, 411, 403, 2192, 399, 2189, 423, 416, 1462, 1457, 1454, 428, 1468, 1465, 2210, 366, 363, 2158, 360, 2156, 357, 2153, 376, 373, 370, 2163, 1410, 1409, 1407, 1405, 382, 1402, 380, 1417, 1415, 1412, 1421, 2175, 2174, 777, 774, 771, 784, 732, 725, 722, 2404, 743, 1716, 676, 674, 668, 2363, 665, 2360, 685, 1684, 1681, 626, 624, 622, 2335, 620, 2333, 617, 2330, 641, 635, 649, 1646, 1644, 1642, 2566, 928, 925, 2530, 2527, 894, 891, 888, 2501, 2499, 2496, 858, 856, 854, 851, 1779, 2692, 2668, 2665, 2645, 2643, 2640, 2651, 2768, 2759, 2757, 2744, 2743, 2741, 2748, 352, 1382, 340, 337, 333, 1371, 1369, 307, 300, 296, 2126, 315, 312, 1347, 1342, 1350, 261, 258, 250, 2097, 246, 2094, 271, 268, 264, 1306, 1301, 1298, 276, 1312, 1309, 2115, 203, 2048, 195, 2045, 191, 2041, 213, 209, 2056, 1246, 1244, 1238, 225, 1234, 222, 1256, 1253, 1249, 1262, 2080, 2079, 154, 1997, 150, 1995, 147, 1992, 1989, 163, 160, 2004, 156, 2001, 1175, 1174, 1172, 1170, 1167, 170, 1164, 167, 1185, 1183, 1180, 1177, 174, 1190, 1188, 2025, 2024, 2022, 587, 586, 564, 559, 556, 2290, 573, 1588, 520, 518, 512, 2268, 508, 2265, 530, 1568, 1565, 461, 457, 2233, 450, 2230, 446, 2226, 479, 471, 489, 1526, 1523, 1520, 397, 395, 2185, 392, 2183, 389, 2180, 2177, 410, 2194, 402, 422, 1463, 1461, 1459, 1456, 1470, 2455, 799, 2433, 2430, 779, 776, 773, 2397, 2394, 2390, 734, 728, 724, 746, 1717, 2356, 2354, 2351, 2348, 1658, 677, 675, 673, 670, 667, 688, 1685, 1683, 2606, 2589, 2586, 2559, 2556, 2552, 927, 2523, 2521, 2518, 2515, 1784, 2532, 895, 893, 890, 2718, 2709, 2707, 2689, 2687, 2684, 2663, 2662, 2660, 2658, 1825, 2667, 2769, 1852, 2760, 2758, 142, 141, 1139, 1138, 134, 132, 129, 126, 1982, 1129, 1128, 1126, 1131, 113, 111, 108, 105, 1972, 101, 1970, 120, 118, 115, 1109, 1108, 1106, 1104, 123, 1113, 1111, 82, 79, 1951, 75, 1949, 72, 1946, 92, 89, 86, 1956, 1077, 1076, 1074, 1072, 98, 1069, 96, 1084, 1082, 1079, 1088, 1968, 1967, 48, 45, 1916, 42, 1914, 39, 1911, 1908, 60, 57, 54, 1923, 50, 1920, 1031, 1030, 1028, 1026, 67, 1023, 65, 1020, 62, 1041, 1039, 1036, 1033, 69, 1046, 1044, 1944, 1943, 1941, 11, 9, 1868, 7, 1865, 1862, 1859, 20, 1878, 16, 1875, 13, 1872, 970, 968, 966, 963, 29, 960, 26, 23, 983, 981, 978, 975, 33, 971, 31, 990, 988, 985, 1906, 1904, 1902, 993, 351, 2145, 1383, 331, 330, 328, 326, 2137, 323, 2135, 339, 1372, 1370, 294, 293, 291, 289, 2122, 286, 2120, 283, 2117, 309, 303, 317, 1348, 1346, 1344, 245, 244, 242, 2090, 239, 2088, 236, 2085, 2082, 260, 2099, 249, 270, 1307, 1305, 1303, 1300, 1314, 189, 2038, 186, 2036, 183, 2033, 2030, 2026, 206, 198, 2047, 194, 216, 1247, 1245, 1243, 1240, 227, 1237, 1255, 2310, 2302, 2300, 2286, 2284, 2281, 565, 563, 561, 558, 575, 1589, 2261, 2259, 2256, 2253, 1542, 521, 519, 517, 514, 2270, 511, 533, 1569, 1567, 2223, 2221, 2218, 2215, 1483, 2211, 1480, 459, 456, 453, 2232, 449, 474, 491, 1527, 1525, 1522, 2475, 2467, 2465, 2451, 2449, 2446, 801, 800, 2426, 2424, 2421, 2418, 1723, 2435, 780, 778, 775, 2387, 2385, 2382, 2379, 1695, 2375, 1693, 2396, 735, 733, 730, 727, 749, 1718, 2616, 2615, 2604, 2603, 2601, 2584, 2583, 2581, 2579, 1800, 2591, 2550, 2549, 2547, 2545, 1792, 2542, 1790, 2558, 929, 2719, 1841, 2710, 2708, 1833, 1831, 2690, 2688, 2686, 1815, 1809, 1808, 1774, 1756, 1754, 1737, 1736, 1734, 1739, 1816, 1711, 1676, 1674, 633, 629, 1638, 1636, 1633, 1641, 598, 1605, 1604, 1602, 1600, 605, 1609, 1607, 2327, 887, 853, 1775, 822, 820, 1757, 1755, 1584, 524, 1560, 1558, 468, 464, 1514, 1511, 1508, 1519, 408, 404, 400, 1452, 1447, 1444, 417, 1458, 1455, 2208, 364, 361, 358, 2154, 1401, 1400, 1398, 1396, 374, 1393, 371, 1408, 1406, 1403, 1413, 2173, 2172, 772, 726, 723, 1712, 672, 669, 666, 682, 1678, 1675, 625, 623, 621, 618, 2331, 636, 632, 1639, 1637, 1635, 920, 918, 884, 880, 889, 849, 848, 847, 846, 2497, 855, 852, 1776, 2641, 2742, 2787, 1380, 334, 1367, 1365, 301, 297, 1340, 1338, 1335, 1343, 255, 251, 247, 1296, 1291, 1288, 265, 1302, 1299, 2113, 204, 196, 192, 2042, 1232, 1230, 1224, 214, 1220, 210, 1242, 1239, 1235, 1250, 2077, 2075, 151, 148, 1993, 144, 1990, 1163, 1162, 1160, 1158, 1155, 161, 1152, 157, 1173, 1171, 1168, 1165, 168, 1181, 1178, 2021, 2020, 2018, 2023, 585, 560, 557, 1585, 516, 509, 1562, 1559, 458, 447, 2227, 472, 1516, 1513, 1510, 398, 396, 393, 390, 2181, 386, 2178, 407, 1453, 1451, 1449, 1446, 420, 1460, 2209, 769, 764, 720, 712, 2391, 729, 1713, 664, 663, 661, 659, 2352, 656, 2349, 671, 1679, 1677, 2553, 922, 919, 2519, 2516, 885, 883, 881, 2685, 2661, 2659, 2767, 2756, 2755, 140, 1137, 1136, 130, 127, 1125, 1124, 1122, 1127, 109, 106, 102, 1103, 1102, 1100, 1098, 116, 1107, 1105, 1980, 80, 76, 73, 1947, 1068, 1067, 1065, 1063, 90, 1060, 87, 1075, 1073, 1070, 1080, 1966, 1965, 46, 43, 40, 1912, 36, 1909, 1019, 1018, 1016, 1014, 58, 1011, 55, 1008, 51, 1029, 1027, 1024, 1021, 63, 1037, 1034, 1940, 1939, 1937, 1942, 8, 1866, 4, 1863, 1, 1860, 956, 954, 952, 949, 946, 17, 14, 969, 967, 964, 961, 27, 957, 24, 979, 976, 972, 1901, 1900, 1898, 1896, 986, 1905, 1903, 350, 349, 1381, 329, 327, 324, 1368, 1366, 292, 290, 287, 284, 2118, 304, 1341, 1339, 1337, 1345, 243, 240, 237, 2086, 233, 2083, 254, 1297, 1295, 1293, 1290, 1304, 2114, 190, 187, 184, 2034, 180, 2031, 177, 2027, 199, 1233, 1231, 1229, 1226, 217, 1223, 1241, 2078, 2076, 584, 555, 554, 552, 550, 2282, 562, 1586, 507, 506, 504, 502, 2257, 499, 2254, 515, 1563, 1561, 445, 443, 441, 2219, 438, 2216, 435, 2212, 460, 454, 475, 1517, 1515, 1512, 2447, 798, 797, 2422, 2419, 770, 768, 766, 2383, 2380, 2376, 721, 719, 717, 714, 731, 1714, 2602, 2582, 2580, 2548, 2546, 2543, 923, 921, 2717, 2706, 2705, 2683, 2682, 2680, 1771, 1752, 1750, 1733, 1732, 1731, 1735, 1814, 1707, 1670, 1668, 1631, 1629, 1626, 1634, 1599, 1598, 1596, 1594, 1603, 1601, 2326, 1772, 1753, 1751, 1581, 1554, 1552, 1504, 1501, 1498, 1509, 1442, 1437, 1434, 401, 1448, 1445, 2206, 1392, 1391, 1389, 1387, 1384, 359, 1399, 1397, 1394, 1404, 2171, 2170, 1708, 1672, 1669, 619, 1632, 1630, 1628, 1773, 1378, 1363, 1361, 1333, 1328, 1336, 1286, 1281, 1278, 248, 1292, 1289, 2111, 1218, 1216, 1210, 197, 1206, 193, 1228, 1225, 1221, 1236, 2073, 2071, 1151, 1150, 1148, 1146, 152, 1143, 149, 1140, 145, 1161, 1159, 1156, 1153, 158, 1169, 1166, 2017, 2016, 2014, 2019, 1582, 510, 1556, 1553, 452, 448, 1506, 1500, 394, 391, 387, 1443, 1441, 1439, 1436, 1450, 2207, 765, 716, 713, 1709, 662, 660, 657, 1673, 1671, 916, 914, 879, 878, 877, 882, 1135, 1134, 1121, 1120, 1118, 1123, 1097, 1096, 1094, 1092, 103, 1101, 1099, 1979, 1059, 1058, 1056, 1054, 77, 1051, 74, 1066, 1064, 1061, 1071, 1964, 1963, 1007, 1006, 1004, 1002, 999, 41, 996, 37, 1017, 1015, 1012, 1009, 52, 1025, 1022, 1936, 1935, 1933, 1938, 942, 940, 938, 935, 932, 5, 2, 955, 953, 950, 947, 18, 943, 15, 965, 962, 958, 1895, 1894, 1892, 1890, 973, 1899, 1897, 1379, 325, 1364, 1362, 288, 285, 1334, 1332, 1330, 241, 238, 234, 1287, 1285, 1283, 1280, 1294, 2112, 188, 185, 181, 178, 2028, 1219, 1217, 1215, 1212, 200, 1209, 1227, 2074, 2072, 583, 553, 551, 1583, 505, 503, 500, 513, 1557, 1555, 444, 442, 439, 436, 2213, 455, 451, 1507, 1505, 1502, 796, 763, 762, 760, 767, 711, 710, 708, 706, 2377, 718, 715, 1710, 2544, 917, 915, 2681, 1627, 1597, 1595, 2325, 1769, 1749, 1747, 1499, 1438, 1435, 2204, 1390, 1388, 1385, 1395, 2169, 2167, 1704, 1665, 1662, 1625, 1623, 1620, 1770, 1329, 1282, 1279, 2109, 1214, 1207, 1222, 2068, 2065, 1149, 1147, 1144, 1141, 146, 1157, 1154, 2013, 2011, 2008, 2015, 1579, 1549, 1546, 1495, 1487, 1433, 1431, 1428, 1425, 388, 1440, 2205, 1705, 658, 1667, 1664, 1119, 1095, 1093, 1978, 1057, 1055, 1052, 1062, 1962, 1960, 1005, 1003, 1e3, 997, 38, 1013, 1010, 1932, 1930, 1927, 1934, 941, 939, 936, 933, 6, 930, 3, 951, 948, 944, 1889, 1887, 1884, 1881, 959, 1893, 1891, 35, 1377, 1360, 1358, 1327, 1325, 1322, 1331, 1277, 1275, 1272, 1269, 235, 1284, 2110, 1205, 1204, 1201, 1198, 182, 1195, 179, 1213, 2070, 2067, 1580, 501, 1551, 1548, 440, 437, 1497, 1494, 1490, 1503, 761, 709, 707, 1706, 913, 912, 2198, 1386, 2164, 2161, 1621, 1766, 2103, 1208, 2058, 2054, 1145, 1142, 2005, 2002, 1999, 2009, 1488, 1429, 1426, 2200, 1698, 1659, 1656, 1975, 1053, 1957, 1954, 1001, 998, 1924, 1921, 1918, 1928, 937, 934, 931, 1879, 1876, 1873, 1870, 945, 1885, 1882, 1323, 1273, 1270, 2105, 1202, 1199, 1196, 1211, 2061, 2057, 1576, 1543, 1540, 1484, 1481, 1478, 1491, 1700], i.PDF417.PDF417Common.getBitCountSum = function(a) {
      for (var b = 0, c = 0, d = a.length, e = a[c]; c < d; c++, e = a[c]) b += e;
      return b
    }, i.PDF417.PDF417Common.toIntArray = function(a) {
      return a || i.PDF417.PDF417Common.EMPTY_INT_ARRAY
    }, i.PDF417.PDF417Common.getCodeword = function(a) {
      var b = i.PDF417.PDF417Common.SYMBOL_TABLE.indexOf(262143 & a);
      return b < 0 ? -1 : (i.PDF417.PDF417Common.CODEWORD_TABLE[b] - 1) % i.PDF417.PDF417Common.NUMBER_OF_CODEWORDS
    }, i.PDF417.Internal.PDF417DetectorResult = function(a, b) {
      this.Bits = null, this.Points = null, this.Bits = a, this.Points = b
    }, i.PDF417.Internal.Detector = function() {}, i.PDF417.Internal.Detector.INDEXES_START_PATTERN = new Int32Array([0, 4, 1, 5]), i.PDF417.Internal.Detector.INDEXES_STOP_PATTERN = new Int32Array([6, 2, 7, 3]), i.PDF417.Internal.Detector.INTEGER_MATH_SHIFT = 8, i.PDF417.Internal.Detector.PATTERN_MATCH_RESULT_SCALE_FACTOR = 256,
    i.PDF417.Internal.Detector.MAX_AVG_VARIANCE = 107, i.PDF417.Internal.Detector.MAX_INDIVIDUAL_VARIANCE = 204, i.PDF417.Internal.Detector.START_PATTERN = new Int32Array([8, 1, 1, 1, 1, 1, 1, 3]), i.PDF417.Internal.Detector.STOP_PATTERN = new Int32Array([7, 1, 1, 3, 1, 1, 1, 2, 1]), i.PDF417.Internal.Detector.MAX_PIXEL_DRIFT = 3, i.PDF417.Internal.Detector.MAX_PATTERN_DRIFT = 5, i.PDF417.Internal.Detector.SKIPPED_ROW_COUNT_MAX = 25, i.PDF417.Internal.Detector.ROW_STEP = 5, i.PDF417.Internal.Detector.BARCODE_MIN_HEIGHT = 10, i.PDF417.Internal.Detector.detectSingle = function(a, b, c) {
      var d = a.get_BlackMatrix();
      if (null == d) return null;
      var e = i.PDF417.Internal.Detector.detectMultiple(c, d);
      return null != e && 0 != e.length || (d = new i.Common.BitMatrix(d.width, d.height, d.rowSize, JSON.parse(JSON.stringify(d.bits))), d.rotate180(), e = i.PDF417.Internal.Detector.detectMultiple(c, d)), new i.PDF417.Internal.PDF417DetectorResult(d, e)
    }, i.PDF417.Internal.Detector.detectMultiple = function(a, b) {
      for (var c = [], d = 0, e = 0, f = !1; d < b.height;) {
        var g = i.PDF417.Internal.Detector.findVertices(b, d, e);
        if (null != g[0] || null != g[3]) {
          if (f = !0, c.push(g), !a) break;
          null != g[2] ? (e = g[2].x, d = g[2].x) : (e = g[4].x, d = g[4].x)
        } else {
          if (!f) break;
          f = !1, e = 0;
          for (var h = c.length, j = 0; j < h; j++) {
            var k = c[j];
            null != k[1] && (d = Math.max(d, k[1].x)), null != k[3] && (d = Math.max(d, k[3].x))
          }
          d += 5
        }
      }
      return c
    }, i.PDF417.Internal.Detector.findVertices = function(a, b, c) {
      var d = a.height,
        e = a.width,
        f = new Array(8);
      return i.PDF417.Internal.Detector.copyToResult(f, i.PDF417.Internal.Detector.findRowsWithPattern(a, d, e, b, c, i.PDF417.Internal.Detector.START_PATTERN), i.PDF417.Internal.Detector.INDEXES_START_PATTERN), null != f[4] && (c = f[4].x, b = f[4].x), i.PDF417.Internal.Detector.copyToResult(f, i.PDF417.Internal.Detector.findRowsWithPattern(a, d, e, b, c, i.PDF417.Internal.Detector.STOP_PATTERN), i.PDF417.Internal.Detector.INDEXES_STOP_PATTERN), f
    }, i.PDF417.Internal.Detector.copyToResult = function(a, b, c) {
      for (var d = 0; d < c.length; d++) a[c[d]] = b[d]
    }, i.PDF417.Internal.Detector.findRowsWithPattern = function(a, b, c, d, e, f) {
      for (var g = new Array(4), h = !1, j = new Array(f.length); d < b; d += 5) {
        var k = i.PDF417.Internal.Detector.findGuardPattern(a, e, d, c, !1, f, j);
        if (null != k) {
          for (; d > 0;) {
            var l = i.PDF417.Internal.Detector.findGuardPattern(a, e, --d, c, !1, f, j);
            if (null == l) {
              d++;
              break
            }
            k = l
          }
          g[0] = new i.ResultPoint(k[0], d), g[1] = new i.ResultPoint(k[1], d), h = !0;
          break
        }
      }
      var m = d + 1;
      if (h) {
        var n = 0;
        for (l = new Int32Array([g[0].x, g[1].x]); m < b; m++)
          if (null != (k = i.PDF417.Internal.Detector.findGuardPattern(a, l[0], m, c, !1, f, j)) && Math.abs(l[0] - k[0]) < 5 && Math.abs(l[1] - k[1]) < 5) l = k, n = 0;
          else {
            if (n > 25) break;
            n++
          } m -= n + 1, g[2] = new i.ResultPoint(l[0], m), g[3] = new i.ResultPoint(l[1], m)
      }
      if (m - d < 10)
        for (var o = 0; o < g.length; o++) g[o] = null;
      return g
    }, i.PDF417.Internal.Detector.findGuardPattern = function(a, b, c, d, e, f, g) {
      i.SupportClass.Fill(g, 0);
      for (var h = f.length, j = e, k = b, l = 0; a.get_Item(k, c) && k > 0 && l++ < 3;) k--;
      for (var m = k, n = 0; m < d; m++) {
        if (a.get_Item(m, c) ^ j) g[n]++;
        else {
          if (n == h - 1) {
            if (i.PDF417.Internal.Detector.patternMatchVariance(g, f, 204) < 107) return new Int32Array([k, m]);
            k += g[0] + g[1], g.blockCopy(g, 2, 0, h - 2), g[h - 2] = 0, g[h - 1] = 0, n--
          } else n++;
          g[n] = 1, j = !j
        }
      }
      return n == h - 1 && i.PDF417.Internal.Detector.patternMatchVariance(g, f, 204) < 107 ? new Int32Array([k, m - 1]) : null
    }, i.PDF417.Internal.Detector.patternMatchVariance = function(a, b, c) {
      for (var d = a.length, e = 0, f = 0, g = 0; g < d; g++) e += a[g], f += b[g];
      if (e < f) return 2147483647;
      var h = Math.floor((e << 8) / f);
      c = c * h >> 8;
      for (var i = 0, j = 0; j < d; j++) {
        var k = a[j] << 8,
          l = b[j] * h,
          m = k > l ? k - l : l - k;
        if (m > c) return 2147483647;
        i += m
      }
      return Math.floor(i / e)
    }, i.PDF417.Internal.EC.ModulusPoly = function(a, d) {
      if (this.field = null, this.coefficients = null, 0 == d.length) throw new Error;
      this.field = a;
      var e = d.length;
      if (e > 1 && 0 == d[0]) {
        for (var f = 1; f < e && 0 == d[f];) f++;
        f == e ? this.coefficients = new Int32Array([0]) : (this.coefficients = new Int32Array(e - f), c(d, f, this.coefficients, 0, this.coefficients.length))
      } else this.coefficients = d
    }, i.PDF417.Internal.EC.ModulusPoly.prototype.get_Coefficients = function() {
      return this.coefficients
    }, i.PDF417.Internal.EC.ModulusPoly.prototype.get_Degree = function() {
      return this.coefficients.length - 1
    }, i.PDF417.Internal.EC.ModulusPoly.prototype.get_isZero = function() {
      return 0 == this.coefficients[0]
    }, i.PDF417.Internal.EC.ModulusPoly.prototype.getCoefficient = function(a) {
      return this.coefficients[this.coefficients.length - 1 - a]
    }, i.PDF417.Internal.EC.ModulusPoly.prototype.evaluateAt = function(a) {
      if (0 == a) return this.getCoefficient(0);
      var b = this.coefficients.length,
        c = 0;
      if (1 == a) {
        for (var d = 0, e = this.coefficients, f = e.length, g = e[d]; d < f; d++, g = e[d]) c = this.field.add(c, g);
        return c
      }
      c = this.coefficients[0];
      for (var h = 1; h < b; h++) c = this.field.add(this.field.multiply(a, c), this.coefficients[h]);
      return c
    }, i.PDF417.Internal.EC.ModulusPoly.prototype.add = function(a) {
      if (this.field != a.field) throw new Error("ModulusPolys do not have same ModulusGF field");
      if (this.get_isZero()) return a;
      if (a.get_isZero()) return this;
      var d = this.coefficients,
        e = a.coefficients;
      if (d.length > e.length) {
        var f = d;
        d = e, e = f
      }
      var g = new Int32Array(e.length),
        h = e.length - d.length;
      c(e, 0, g, 0, h);
      for (var j = h; j < e.length; j++) g[j] = this.field.add(d[j - h], e[j]);
      return new i.PDF417.Internal.EC.ModulusPoly(this.field, g)
    }, i.PDF417.Internal.EC.ModulusPoly.prototype.subtract = function(a) {
      if (this.field != a.field) throw new Error("ModulusPolys do not have same ModulusGF field");
      return a.get_isZero() ? this : this.add(a.getNegative())
    }, i.PDF417.Internal.EC.ModulusPoly.prototype.multiply = function(a) {
      if (this.field != a.field) throw new Error("ModulusPolys do not have same ModulusGF field");
      if (this.get_isZero() || a.get_isZero()) return this.field.Zero;
      for (var c = this.coefficients, d = c.length, e = a.coefficients, f = e.length, g = new Int32Array(d + f - 1), h = 0; h < d; h++)
        for (var j = c[h], k = 0; k < f; k++) g[h + k] = this.field.add(g[h + k], this.field.multiply(j, e[k]));
      return new i.PDF417.Internal.EC.ModulusPoly(this.field, g)
    }, i.PDF417.Internal.EC.ModulusPoly.prototype.getNegative = function() {
      for (var a = this.coefficients.length, b = new Int32Array(a), c = 0; c < a; c++) b[c] = this.field.subtract(0, this.coefficients[c]);
      return new i.PDF417.Internal.EC.ModulusPoly(this.field, b)
    }, i.PDF417.Internal.EC.ModulusPoly.prototype.multiply = function(a) {
      if (0 == a) return this.field.Zero;
      if (1 == a) return this;
      for (var b = this.coefficients.length, c = new Int32Array(b), d = 0; d < b; d++) c[d] = this.field.multiply(this.coefficients[d], a);
      return new i.PDF417.Internal.EC.ModulusPoly(this.field, c)
    }, i.PDF417.Internal.EC.ModulusPoly.prototype.multiplyByMonomial = function(a, c) {
      if (a < 0) throw new Error;
      if (0 == c) return this.field.Zero;
      for (var d = this.coefficients.length, e = new Int32Array(d + a), f = 0; f < d; f++) e[f] = this.field.multiply(this.coefficients[f], c);
      return new i.PDF417.Internal.EC.ModulusPoly(this.field, e)
    }, i.PDF417.Internal.EC.ModulusPoly.prototype.divide = function(a) {
      if (this.field != a.field) throw new Error("ModulusPolys do not have same ModulusGF field");
      if (a.get_isZero()) throw new Error;
      for (var c = this.field.Zero, d = this, e = a.getCoefficient(a.get_Degree()), f = this.field.inverse(e); d.get_Degree() >= a.get_Degree() && !d.get_isZero();) {
        var g = d.get_Degree() - a.get_Degree(),
          h = this.field.multiply(d.getCoefficient(d.get_Degree()), f),
          i = a.multiplyByMonomial(g, h),
          j = this.field.buildMonomial(g, h);
        c = c.add(j), d = d.subtract(i)
      }
      return [c, d]
    }, i.PDF417.Internal.EC.ModulusPoly.prototype.toString = function() {
      for (var a = "", b = this.get_Degree(); b >= 0; b--) {
        var c = this.getCoefficient(b);
        0 != c && (c < 0 ? (a += " - ", c = -c) : a.length > 0 && (a += " + "), 0 != b && 1 == c || (a += c), 0 != b && (1 == b ? a += "x" : (a += "x^", a += b)))
      }
      return a
    }, i.PDF417.Internal.EC.ModulusGF = function(a, b) {
      this.expTable = null, this.logTable = null, this.modulus = 0, this.Zero = null, this.One = null, this.modulus = a, this.expTable = new Int32Array(a), this.logTable = new Int32Array(a);
      for (var c = 1, d = 0; d < a; d++) this.expTable[d] = c, c = c * b % a;
      for (d = 0; d < a - 1; d++) this.logTable[this.expTable[d]] = d;
      this.Zero = new i.PDF417.Internal.EC.ModulusPoly(this, new Int32Array([0])), this.One = new i.PDF417.Internal.EC.ModulusPoly(this, new Int32Array([1]))
    }, i.PDF417.Internal.EC.ModulusGF.PDF417_GF = new i.PDF417.Internal.EC.ModulusGF(i.PDF417.PDF417Common.NUMBER_OF_CODEWORDS, 3), i.PDF417.Internal.EC.ModulusGF.prototype.buildMonomial = function(a, c) {
      if (a < 0) throw new Error;
      if (0 == c) return this.Zero;
      var d = new Int32Array(a + 1);
      return d[0] = c, new i.PDF417.Internal.EC.ModulusPoly(this, d)
    }, i.PDF417.Internal.EC.ModulusGF.prototype.add = function(a, b) {
      return (a + b) % this.modulus
    }, i.PDF417.Internal.EC.ModulusGF.prototype.subtract = function(a, b) {
      return (this.modulus + a - b) % this.modulus
    }, i.PDF417.Internal.EC.ModulusGF.prototype.exp = function(a) {
      return this.expTable[a]
    }, i.PDF417.Internal.EC.ModulusGF.prototype.log = function(a) {
      if (0 == a) throw new Error;
      return this.logTable[a]
    }, i.PDF417.Internal.EC.ModulusGF.prototype.inverse = function(a) {
      if (0 == a) throw new Error;
      return this.expTable[this.modulus - this.logTable[a] - 1]
    }, i.PDF417.Internal.EC.ModulusGF.prototype.multiply = function(a, b) {
      return 0 == a || 0 == b ? 0 : this.expTable[(this.logTable[a] + this.logTable[b]) % (this.modulus - 1)]
    }, i.PDF417.Internal.EC.ModulusGF.prototype.get_Size = function() {
      return this.modulus
    }, i.PDF417.Internal.EC.ErrorCorrection = function() {
      this.field = null, this.field = i.PDF417.Internal.EC.ModulusGF.PDF417_GF
    }, i.PDF417.Internal.EC.ErrorCorrection.prototype.decode = function(a, b, c, d) {
      var e = new i.PDF417.Internal.EC.ModulusPoly(this.field, a),
        f = new Int32Array(b),
        g = !1;
      d.Value = 0;
      for (var h = b; h > 0; h--) {
        var j = e.evaluateAt(this.field.exp(h));
        f[b - h] = j, 0 != j && (g = !0)
      }
      if (!g) return !0;
      var k = this.field.One;
      if (null != c)
        for (var l = 0, m = c.length, n = c[l]; l < m; l++, n = c[l]) {
          var o = this.field.exp(a.length - 1 - n),
            p = new i.PDF417.Internal.EC.ModulusPoly(this.field, new Int32Array([this.field.subtract(0, o), 1]));
          k = k.multiply(p)
        }
      var q = new i.PDF417.Internal.EC.ModulusPoly(this.field, f),
        r = this.runEuclideanAlgorithm(this.field.buildMonomial(b, 1), q, b);
      if (null == r) return !1;
      var s = r[0],
        t = r[1];
      if (null == s || null == t) return !1;
      var u = this.findErrorLocations(s);
      if (null == u) return !1;
      var v = this.findErrorMagnitudes(t, s, u);
      for (h = 0; h < u.length; h++) {
        var w = a.length - 1 - this.field.log(u[h]);
        if (w < 0) return !1;
        a[w] = this.field.subtract(a[w], v[h])
      }
      return d.Value = u.length, !0
    }, i.PDF417.Internal.EC.ErrorCorrection.prototype.runEuclideanAlgorithm = function(a, b, c) {
      if (a.get_Degree() < b.get_Degree()) {
        var d = a;
        a = b, b = d
      }
      for (var e = a, f = b, g = this.field.Zero, h = this.field.One; f.get_Degree() >= c / 2;) {
        var i = e,
          j = g;
        if (e = f, g = h, e.get_isZero()) return null;
        f = i;
        for (var k = this.field.Zero, l = e.getCoefficient(e.get_Degree()), m = this.field.inverse(l); f.get_Degree() >= e.get_Degree() && !f.get_isZero();) {
          var n = f.get_Degree() - e.get_Degree(),
            o = this.field.multiply(f.getCoefficient(f.get_Degree()), m);
          k = k.add(this.field.buildMonomial(n, o)), f = f.subtract(e.multiplyByMonomial(n, o))
        }
        h = k.multiply(g).subtract(j).getNegative()
      }
      var p = h.getCoefficient(0);
      if (0 == p) return null;
      var q = this.field.inverse(p);
      return [h.multiply(q), f.multiply(q)]
    }, i.PDF417.Internal.EC.ErrorCorrection.prototype.findErrorLocations = function(a) {
      for (var b = a.get_Degree(), c = new Int32Array(b), d = 0, e = 1; e < this.field.get_Size() && d < b; e++) 0 == a.evaluateAt(e) && (c[d] = this.field.inverse(e), d++);
      return d != b ? null : c
    }, i.PDF417.Internal.EC.ErrorCorrection.prototype.findErrorMagnitudes = function(a, b, c) {
      for (var d = b.get_Degree(), e = new Int32Array(d), f = 1; f <= d; f++) e[d - f] = this.field.multiply(f, b.getCoefficient(f));
      var g = new i.PDF417.Internal.EC.ModulusPoly(this.field, e),
        h = c.length,
        j = new Int32Array(h);
      for (f = 0; f < h; f++) {
        var k = this.field.inverse(c[f]),
          l = this.field.subtract(0, a.evaluateAt(k)),
          m = this.field.inverse(g.evaluateAt(k));
        j[f] = this.field.multiply(l, m)
      }
      return j
    }, i.PDF417.Internal.BarcodeMetadata = function(a, b, c, d) {
      this.ColumnCount = 0, this.ErrorCorrectionLevel = 0, this.RowCountUpper = 0, this.RowCountLower = 0, this.RowCount = 0, this.ColumnCount = a, this.ErrorCorrectionLevel = d, this.RowCountUpper = b, this.RowCountLower = c, this.RowCount = c + b
    }, i.PDF417.Internal.BarcodeValue = function() {
      this.values = {}
    }, i.PDF417.Internal.BarcodeValue.prototype.setValue = function(a) {
      a = Math.floor(a);
      var b = this.values.hasOwnProperty(a) ? this.values[a] : 0;
      b++, this.values[a] = b
    }, i.PDF417.Internal.BarcodeValue.prototype.getValue = function() {
      var a = -1,
        b = [];
      for (var c in this.values)
        if (this.values.hasOwnProperty(c)) {
          var d = this.values[c];
          d > a ? (a = d, b.splice(0), b.push(parseInt(c))) : d == a && b.push(parseInt(c))
        } return b
    }, i.PDF417.Internal.BarcodeValue.prototype.getConfidence = function(a) {
      return void 0 !== this.values[a] ? this.values[a] : 0
    }, i.PDF417.Internal.BoundingBox = function(a, b, c, d, e) {
      this.image = null, this.TopLeft = null, this.TopRight = null, this.BottomLeft = null, this.BottomRight = null, this.MinX = 0, this.MaxX = 0, this.MinY = 0, this.MaxY = 0, this.image = a, this.TopLeft = b, this.TopRight = d, this.BottomLeft = c, this.BottomRight = e, this.calculateMinMaxValues()
    }, i.PDF417.Internal.BoundingBox.Create = function(a, b, c, d, e) {
      return arguments.length > 1 ? !b && !d || !c && !e || b && !c || d && !e ? null : new i.PDF417.Internal.BoundingBox(a, b, c, d, e) : i.PDF417.Internal.BoundingBox.CreateBoxed(a)
    }, i.PDF417.Internal.BoundingBox.CreateBoxed = function(a) {
      return new i.PDF417.Internal.BoundingBox(a.image, a.TopLeft, a.BottomLeft, a.TopRight, a.BottomRight)
    }, i.PDF417.Internal.BoundingBox.merge = function(a, b) {
      return a ? b ? new i.PDF417.Internal.BoundingBox(a.image, a.TopLeft, a.BottomLeft, b.TopRight, b.BottomRight) : a : b
    }, i.PDF417.Internal.BoundingBox.prototype.addMissingRows = function(a, b, c) {
      var d = this.TopLeft,
        e = this.BottomLeft,
        f = this.TopRight,
        g = this.BottomRight;
      if (a > 0) {
        var h = c ? this.TopLeft : this.TopRight,
          j = h.y - a;
        j < 0 && (j = 0);
        var k = new i.ResultPoint(h.x, j);
        c ? d = k : f = k
      }
      if (b > 0) {
        var l = c ? this.BottomLeft : this.BottomRight,
          m = l.y + b;
        m >= this.image.get_Height() && (m = this.image.get_Height() - 1);
        var n = new i.ResultPoint(l.x, m);
        c ? e = n : g = n
      }
      return this.calculateMinMaxValues(), new i.PDF417.Internal.BoundingBox(this.image, d, e, f, g)
    }, i.PDF417.Internal.BoundingBox.prototype.calculateMinMaxValues = function() {
      this.TopLeft ? this.TopRight || (this.TopRight = new i.ResultPoint(this.image.width - 1, this.TopLeft.y), this.BottomRight = new i.ResultPoint(this.image.width - 1, this.TopLeft.y)) : (this.TopLeft = new i.ResultPoint(0, this.TopRight.y), this.BottomLeft = new i.ResultPoint(0, this.BottomRight.y)), this.MinX = Math.min(this.TopLeft.x, this.BottomLeft.x), this.MaxX = Math.max(this.TopRight.x, this.BottomRight.x), this.MinY = Math.min(this.TopLeft.y, this.TopRight.y), this.MaxY = Math.max(this.BottomLeft.y, this.BottomRight.y)
    }, i.PDF417.Internal.BoundingBox.prototype.SetBottomRight = function(a) {
      this.BottomRight = a, this.calculateMinMaxValues()
    }, i.PDF417.Internal.Codeword = function(a, b, c, d) {
      this.StartX = 0, this.EndX = 0, this.Bucket = 0, this.Value = 0, this.RowNumber = 0, this.StartX = a, this.EndX = b, this.Bucket = c, this.Value = d, this.RowNumber = i.PDF417.Internal.Codeword.BARCODE_ROW_UNKNOWN
    }, i.PDF417.Internal.Codeword.BARCODE_ROW_UNKNOWN = -1, i.PDF417.Internal.Codeword.prototype.get_Width = function() {
      return this.EndX - this.StartX
    }, i.PDF417.Internal.Codeword.prototype.get_HasValidRowNumber = function() {
      return this.IsValidRowNumber(this.RowNumber)
    }, i.PDF417.Internal.Codeword.prototype.IsValidRowNumber = function(a) {
      return (a = parseInt(a)) != i.PDF417.Internal.Codeword.BARCODE_ROW_UNKNOWN && this.Bucket == a % 3 * 3
    }, i.PDF417.Internal.Codeword.prototype.setRowNumberAsRowIndicatorColumn = function() {
      this.RowNumber = 3 * Math.floor(this.Value / 30) + Math.floor(this.Bucket / 3)
    }, i.PDF417.Internal.Codeword.prototype.toString = function() {
      return this.RowNumber + "|" + this.Value
    }, i.PDF417.Internal.DecodedBitStreamParser = function() {}, i.PDF417.Internal.DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH = 900, i.PDF417.Internal.DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH = 901, i.PDF417.Internal.DecodedBitStreamParser.NUMERIC_COMPACTION_MODE_LATCH = 902, i.PDF417.Internal.DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH_6 = 924, i.PDF417.Internal.DecodedBitStreamParser.ECI_USER_DEFINED = 925, i.PDF417.Internal.DecodedBitStreamParser.ECI_GENERAL_PURPOSE = 926, i.PDF417.Internal.DecodedBitStreamParser.ECI_CHARSET = 927, i.PDF417.Internal.DecodedBitStreamParser.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928, i.PDF417.Internal.DecodedBitStreamParser.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923, i.PDF417.Internal.DecodedBitStreamParser.MACRO_PDF417_TERMINATOR = 922, i.PDF417.Internal.DecodedBitStreamParser.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913, i.PDF417.Internal.DecodedBitStreamParser.MAX_NUMERIC_CODEWORDS = 15, i.PDF417.Internal.DecodedBitStreamParser.PL = 25, i.PDF417.Internal.DecodedBitStreamParser.LL = 27, i.PDF417.Internal.DecodedBitStreamParser.AS = 27, i.PDF417.Internal.DecodedBitStreamParser.ML = 28, i.PDF417.Internal.DecodedBitStreamParser.AL = 28, i.PDF417.Internal.DecodedBitStreamParser.PS = 29, i.PDF417.Internal.DecodedBitStreamParser.PAL = 29, i.PDF417.Internal.DecodedBitStreamParser.PUNCT_CHARS = [";", "<", ">", "@", "[", "\\", "]", "_", "`", "~", "!", "\r", "\t", ",", ":", "\n", "-", ".", "$", "/", '"', "|", "*", "(", ")", "?", "{", "}", "'"], i.PDF417.Internal.DecodedBitStreamParser.MIXED_CHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "&", "\r", "\t", ",", ":", "#", "-", ".", "$", "/", "+", "%", "*", "=", "^"], i.PDF417.Internal.DecodedBitStreamParser.EXP900 = null, i.PDF417.Internal.DecodedBitStreamParser.NUMBER_OF_SEQUENCE_CODEWORDS = 2, i.PDF417.Internal.DecodedBitStreamParser.EXP900 = new Array(16), i.PDF417.Internal.DecodedBitStreamParser.EXP900[0] = f.ONE;
  var j = new f(900);
  i.PDF417.Internal.DecodedBitStreamParser.EXP900[1] = j;
  for (var k = 2; k < i.PDF417.Internal.DecodedBitStreamParser.EXP900.length; k++) i.PDF417.Internal.DecodedBitStreamParser.EXP900[k] = i.PDF417.Internal.DecodedBitStreamParser.EXP900[k - 1].multiply(j);
  i.PDF417.Internal.DecodedBitStreamParser.decode = function(a, b) {
    for (var c = "", d = 1, e = a[d++], f = new i.PDF417.PDF417ResultMetadata, g = null; d < a[0];) {
      switch (e) {
        case 900:
          g = {
            mode: e,
            codewords: a,
            codeIndex: d,
            result: c
          }, d = i.PDF417.Internal.DecodedBitStreamParser.textCompaction(g), c = g.result;
          break;
        case 901:
        case 924:
          g = {
            mode: e,
            codewords: a,
            codeIndex: d,
            result: c
          }, d = i.PDF417.Internal.DecodedBitStreamParser.byteCompaction(g), c = g.result;
          break;
        case 913:
          c += a[d++];
          break;
        case 902:
          g = {
            mode: e,
            codewords: a,
            codeIndex: d,
            result: c
          }, d = i.PDF417.Internal.DecodedBitStreamParser.numericCompaction(g), c = g.result;
          break;
        case 927:
          i.Common.CharacterSetECI.getCharacterSetECIByValue(a[d++]);
          break;
        case 926:
          d += 2;
          break;
        case 925:
          d++;
          break;
        case 928:
          d = i.PDF417.Internal.DecodedBitStreamParser.decodeMacroBlock(a, d, f);
          break;
        case 923:
        case 922:
          return null;
        default:
          d--, g = {
            mode: e,
            codewords: a,
            codeIndex: d,
            result: c
          }, d = i.PDF417.Internal.DecodedBitStreamParser.textCompaction(g), c = g.result
      }
      if (d < 0) return null;
      if (!(d < a.length)) return null;
      e = a[d++]
    }
    if (!c.length) return null;
    var h = new i.Common.DecoderResult(null, c.toString(), null, b);
    return h.Other = f, h
  }, i.PDF417.Internal.DecodedBitStreamParser.decodeMacroBlock = function(a, b, c) {
    if (b + 2 > a[0]) return -1;
    for (var d = new Int32Array(2), e = 0; e < 2; e++, b++) d[e] = a[b];
    var f = i.PDF417.Internal.DecodedBitStreamParser.decodeBase900toBase10(d, 2);
    if (!f) return -1;
    c.set_SegmentIndex(parseInt(f));
    var g = "",
      h = {
        codewords: a,
        codeIndex: b,
        result: g
      };
    if (b = i.PDF417.Internal.DecodedBitStreamParser.textCompaction(h), g = p.result, c.set_FileId(g), 923 == a[b]) {
      b++;
      for (var j = new Int32Array(a[0] - b), k = 0, l = !1; b < a[0] && !l;) {
        var m = a[b++];
        if (m < 900) j[k++] = m;
        else switch (m) {
          case 922:
            c.set_IsLastSegment(!0), b++, l = !0;
            break;
          default:
            return -1
        }
      }
      c.set_OptionalData(j.slice(0))
    } else 922 == a[b] && (c.set_IsLastSegment(!0), b++);
    return b
  }, i.PDF417.Internal.DecodedBitStreamParser.textCompaction = function(a) {
    for (var b = a.codewords, c = a.codeIndex, d = a.result, e = new Int32Array(b[0] - c << 1), f = new Int32Array(b[0] - c << 1), g = 0, h = !1; c < b[0] && !h;) {
      var j = b[c++];
      if (j < 900) e[g] = Math.floor(j / 30), e[g + 1] = j % 30, g += 2;
      else switch (j) {
        case 900:
          e[g++] = 900;
          break;
        case 901:
        case 924:
        case 902:
        case 928:
        case 923:
        case 922:
          c--, h = !0;
          break;
        case 913:
          e[g] = 913, j = b[c++], f[g] = j, g++
      }
    }
    var k = {
      textCompactionData: e,
      byteCompactionData: f,
      length: g,
      result: d
    };
    return i.PDF417.Internal.DecodedBitStreamParser.decodeTextCompaction(k), a.result = k.result, c
  }, i.PDF417.Internal.DecodedBitStreamParser.decodeTextCompaction = function(a) {
    for (var b = a.textCompactionData, c = a.byteCompactionData, d = a.length, e = 0, f = 0, g = 0; g < d;) {
      var h = b[g],
        j = null;
      switch (e) {
        case 0:
          h < 26 ? j = String.fromCharCode(65 + h) : 26 == h ? j = " " : 27 == h ? e = 1 : 28 == h ? e = 2 : 29 == h ? (f = e, e = 5) : 913 == h ? a.result += String.fromCharCode(c[g]) : 900 == h && (e = 0);
          break;
        case 1:
          h < 26 ? j = String.fromCharCode(97 + h) : 26 == h ? j = " " : 27 == h ? (f = e, e = 4) : 28 == h ? e = 2 : 29 == h ? (f = e, e = 5) : 913 == h ? a.result += String.fromCharCode(c[g]) : 900 == h && (e = 0);
          break;
        case 2:
          h < 25 ? j = i.PDF417.Internal.DecodedBitStreamParser.MIXED_CHARS[h] : 25 == h ? e = 3 : 26 == h ? j = " " : 27 == h ? e = 1 : 28 == h ? e = 0 : 29 == h ? (f = e, e = 5) : 913 == h ? a.result += String.fromCharCode(c[g]) : 900 == h && (e = 0);
          break;
        case 3:
          h < 29 ? j = i.PDF417.Internal.DecodedBitStreamParser.PUNCT_CHARS[h] : 29 == h ? e = 0 : 913 == h ? a.result += String.fromCharCode(c[g]) : 900 == h && (e = 0);
          break;
        case 4:
          e = f, h < 26 ? j = 65 + h : 26 == h ? j = " " : 900 == h && (e = 0);
          break;
        case 5:
          e = f, h < 29 ? j = i.PDF417.Internal.DecodedBitStreamParser.PUNCT_CHARS[h] : 29 == h ? e = 0 : 913 == h ? a.result += String.fromCharCode(c[g]) : 900 == h && (e = 0)
      }
      null !== j && (a.result += j), g++
    }
  }, i.PDF417.Internal.DecodedBitStreamParser.byteCompaction = function(a) {
    var b = a.mode,
      c = a.codewords,
      d = a.codeIndex,
      e = [],
      f = 0,
      g = 0,
      h = !1;
    if (901 == b) {
      f = 0, g = 0;
      var i = new Int32Array(6);
      h = !1;
      for (var j = c[d++]; d < c[0] && !h;)
        if (i[f++] = j, g = 900 * g + j, 900 == (j = c[d++]) || 901 == j || 902 == j || 924 == j || 928 == j || 923 == j || 922 == j) d--, h = !0;
        else if (f % 5 == 0 && f > 0) {
        for (var k = 0; k < 6; ++k) e.push(g >> 8 * (5 - k));
        g = 0, f = 0
      }
      d == c[0] && j < 900 && (i[f++] = j);
      for (var l = 0; l < f; l++) e.push(i[l])
    } else if (924 == b)
      for (f = 0, g = 0, h = !1; d < c[0] && !h;) {
        var m = c[d++];
        if (m < 900 ? (f++, g = 900 * g + m) : 900 != m && 901 != m && 902 != m && 924 != m && 928 != m && 923 != m && 922 != m || (d--, h = !0), f % 5 == 0 && f > 0) {
          for (var n = 0; n < 6; ++n) e.push(g >> 8 * (5 - n));
          g = 0, f = 0
        }
      }
    return a.result += String.fromCharCode.apply(null, e), d
  }, i.PDF417.Internal.DecodedBitStreamParser.numericCompaction = function(a) {
    for (var b = a.codewords, c = a.codeIndex, d = 0, e = !1, f = new Int32Array(15); c < b[0] && !e;) {
      var g = b[c++];
      if (c == b[0] && (e = !0), g < 900 ? (f[d] = g, d++) : 900 != g && 901 != g && 924 != g && 928 != g && 923 != g && 922 != g || (c--, e = !0), (d % 15 == 0 || 902 === g || e) && d > 0) {
        var h = i.PDF417.Internal.DecodedBitStreamParser.decodeBase900toBase10(f, d);
        if (!h) return -1;
        a.result += h, d = 0
      }
    }
    return c
  }, i.PDF417.Internal.DecodedBitStreamParser.decodeBase900toBase10 = function(a, b) {
    for (var c = f.ZERO, d = 0; d < b; d++) c = c.add(f.multiply(i.PDF417.Internal.DecodedBitStreamParser.EXP900[b - d - 1], new f(a[d])));
    var e = c.toString();
    return "1" != e.charAt(0) ? null : e.substr(1)
  }, i.PDF417.Internal.DetectionResult = function(a, b) {
    this.Metadata = null, this.DetectionResultColumns = null, this.Box = null, this.ColumnCount = 0, this.Metadata = a, this.Box = b, this.ColumnCount = a.ColumnCount, this.DetectionResultColumns = new Array(this.ColumnCount + 2)
  }, i.PDF417.Internal.DetectionResult.ADJUST_ROW_NUMBER_SKIP = 2, i.PDF417.Internal.DetectionResult.prototype.get_RowCount = function() {
    return this.Metadata.RowCount
  }, i.PDF417.Internal.DetectionResult.prototype.get_ErrorCorrectionLevel = function() {
    return this.Metadata.ErrorCorrectionLevel
  }, i.PDF417.Internal.DetectionResult.prototype.getDetectionResultColumns = function() {
    this.adjustIndicatorColumnRowNumbers(this.DetectionResultColumns[0]), this.adjustIndicatorColumnRowNumbers(this.DetectionResultColumns[this.ColumnCount + 1]);
    var a, b = i.PDF417.PDF417Common.MAX_CODEWORDS_IN_BARCODE;
    do {
      a = b, b = this.adjustRowNumbers()
    } while (b > 0 && b < a);
    return this.DetectionResultColumns
  }, i.PDF417.Internal.DetectionResult.prototype.adjustIndicatorColumnRowNumbers = function(a) {
    a && (a instanceof i.PDF417.Internal.DetectionResultRowIndicatorColumn || null == a ? a : function() {
      throw new Error("InvalidCastException")
    }()).adjustCompleteIndicatorColumnRowNumbers(this.Metadata)
  }, i.PDF417.Internal.DetectionResult.prototype.adjustRowNumbersMy = function() {
    var a = this.adjustRowNumbersByRow();
    if (0 == a) return 0;
    for (var b = 1; b < this.ColumnCount + 1; b++)
      for (var c = this.DetectionResultColumns[b].Codewords, d = 0; d < c.length; d++) null != c[d] && (c[d].get_HasValidRowNumber() || this.adjustRowNumbers(b, d, c));
    return a
  }, i.PDF417.Internal.DetectionResult.prototype.adjustRowNumbers = function(a, b, c) {
    if (!arguments.length) return this.adjustRowNumbersMy();
    var d = c[b],
      e = this.DetectionResultColumns[a - 1].Codewords,
      f = e;
    null != this.DetectionResultColumns[a + 1] && (f = this.DetectionResultColumns[a + 1].Codewords);
    var g = new Array(14);
    g[2] = e[b], g[3] = f[b], b > 0 && (g[0] = c[b - 1], g[4] = e[b - 1], g[5] = f[b - 1]), b > 1 && (g[8] = c[b - 2], g[10] = e[b - 2], g[11] = f[b - 2]), b < c.length - 1 && (g[1] = c[b + 1], g[6] = e[b + 1], g[7] = f[b + 1]), b < c.length - 2 && (g[9] = c[b + 2], g[12] = e[b + 2], g[13] = f[b + 2]);
    for (var h = 0, j = g.length, k = g[h]; h < j; h++, k = g[h])
      if (i.PDF417.Internal.DetectionResult.adjustRowNumber(d, k)) return
  }, i.PDF417.Internal.DetectionResult.prototype.adjustRowNumbersByRow = function() {
    return this.adjustRowNumbersFromBothRI(), this.adjustRowNumbersFromLRI() + this.adjustRowNumbersFromRRI()
  }, i.PDF417.Internal.DetectionResult.prototype.adjustRowNumbersFromBothRI = function() {
    if (null != this.DetectionResultColumns[0] && null != this.DetectionResultColumns[this.ColumnCount + 1])
      for (var a = this.DetectionResultColumns[0].Codewords, b = this.DetectionResultColumns[this.ColumnCount + 1].Codewords, c = 0; c < a.length; c++)
        if (null != a[c] && null != b[c] && a[c].RowNumber == b[c].RowNumber)
          for (var d = 1; d <= this.ColumnCount; d++) {
            var e = this.DetectionResultColumns[d].Codewords[c];
            null != e && (e.RowNumber = a[c].RowNumber, e.get_HasValidRowNumber() || (this.DetectionResultColumns[d].Codewords[c] = null))
          }
  }, i.PDF417.Internal.DetectionResult.prototype.adjustRowNumbersFromRRI = function() {
    if (null == this.DetectionResultColumns[this.ColumnCount + 1]) return 0;
    for (var a = 0, b = this.DetectionResultColumns[this.ColumnCount + 1].Codewords, c = 0; c < b.length; c++)
      if (null != b[c])
        for (var d = b[c].RowNumber, e = 0, f = this.ColumnCount + 1; f > 0 && e < 2; f--) {
          var g = this.DetectionResultColumns[f].Codewords[c];
          null != g && (e = i.PDF417.Internal.DetectionResult.adjustRowNumberIfValid(d, e, g), g.get_HasValidRowNumber() || a++)
        }
    return a
  }, i.PDF417.Internal.DetectionResult.prototype.adjustRowNumbersFromLRI = function() {
    if (null == this.DetectionResultColumns[0]) return 0;
    for (var a = 0, b = this.DetectionResultColumns[0].Codewords, c = 0; c < b.length; c++)
      if (null != b[c])
        for (var d = b[c].RowNumber, e = 0, f = 1; f < this.ColumnCount + 1 && e < 2; f++) {
          var g = this.DetectionResultColumns[f].Codewords[c];
          null != g && (e = i.PDF417.Internal.DetectionResult.adjustRowNumberIfValid(d, e, g), g.get_HasValidRowNumber() || a++)
        }
    return a
  }, i.PDF417.Internal.DetectionResult.adjustRowNumberIfValid = function(a, b, c) {
    return null == c ? b : (c.get_HasValidRowNumber() || (c.IsValidRowNumber(a) ? (c.RowNumber = a, b = 0) : ++b), b)
  }, i.PDF417.Internal.DetectionResult.adjustRowNumber = function(a, b) {
    return null != b && (!(!b.get_HasValidRowNumber() || b.Bucket != a.Bucket) && (a.RowNumber = b.RowNumber, !0))
  }, i.PDF417.Internal.DetectionResult.prototype.toString = function() {
    var a = "",
      b = this.DetectionResultColumns[0];
    null == b && (b = this.DetectionResultColumns[this.ColumnCount + 1]);
    for (var c = 0; c < b.Codewords.length; c++) {
      a += "CW {0}:".format(d(c, 3));
      for (var e = 0; e < this.ColumnCount + 2; e++)
        if (null != this.DetectionResultColumns[e]) {
          var f = this.DetectionResultColumns[e].Codewords[c];
          a += null != f ? " {0}|{1}".format(d(f.RowNumber, 3), d(f.Value, 3)) : "    |   "
        } else a += "    |   ";
      a += "\n"
    }
    return a
  }, i.PDF417.Internal.DetectionResultColumn = function(a) {
    this.Box = null, this.Codewords = null, this.Box = i.PDF417.Internal.BoundingBox.Create(a), this.Codewords = new Array(this.Box.MaxY - this.Box.MinY + 1)
  }, i.PDF417.Internal.DetectionResultColumn.MAX_NEARBY_DISTANCE = 5, i.PDF417.Internal.DetectionResultColumn.prototype.IndexForRow = function(a) {
    return a - this.Box.MinY
  }, i.PDF417.Internal.DetectionResultColumn.prototype.RowForIndex = function(a) {
    return this.Box.MinY + a
  }, i.PDF417.Internal.DetectionResultColumn.prototype.getCodeword = function(a) {
    return this.Codewords[this.imageRowToCodewordIndex(a)]
  }, i.PDF417.Internal.DetectionResultColumn.prototype.getCodewordNearby = function(a) {
    var b = this.getCodeword(a);
    if (null != b) return b;
    for (var c = 1; c < 5; c++) {
      var d = this.imageRowToCodewordIndex(a) - c;
      if (d >= 0 && null != (b = this.Codewords[d])) return b;
      if ((d = this.imageRowToCodewordIndex(a) + c) < this.Codewords.length && null != (b = this.Codewords[d])) return b
    }
    return null
  }, i.PDF417.Internal.DetectionResultColumn.prototype.imageRowToCodewordIndex = function(a) {
    return a - this.Box.MinY
  }, i.PDF417.Internal.DetectionResultColumn.prototype.setCodeword = function(a, b) {
    this.Codewords[this.IndexForRow(a)] = b
  }, i.PDF417.Internal.DetectionResultColumn.prototype.toString = function() {
    for (var a = "", b = 0, c = 0, e = this.Codewords, f = e.length, g = e[c]; c < f; c++, g = e[c]) a += null == g ? "{0}:    |   \n".format(d(b++, 3)) : "{0}: {1}|{2}\n".format(d(b++, 3), d(g.RowNumber, 3), d(g.Value, 3));
    return a
  }, i.PDF417.Internal.DetectionResultRowIndicatorColumn = function(a, b) {
    this.IsLeft = !1, i.PDF417.Internal.DetectionResultColumn.call(this, a), this.IsLeft = b
  }, i.PDF417.Internal.DetectionResultRowIndicatorColumn.prototype.setRowNumbers = function() {
    for (var a = 0, b = this.Codewords, c = b.length, d = b[a]; a < c; a++, d = b[a]) null != d && d.setRowNumberAsRowIndicatorColumn()
  }, i.PDF417.Internal.DetectionResultRowIndicatorColumn.prototype.adjustCompleteIndicatorColumnRowNumbers = function(a) {
    var b = this.Codewords;
    this.setRowNumbers(), this.removeIncorrectCodewords(b, a);
    for (var c = this.IsLeft ? this.Box.TopLeft : this.Box.TopRight, d = this.IsLeft ? this.Box.BottomLeft : this.Box.BottomRight, e = this.imageRowToCodewordIndex(c.y), f = this.imageRowToCodewordIndex(d.y), g = Math.floor(f - e) / a.RowCount, h = -1, i = 1, j = 0, k = e; k < f; k++) {
      var l = b[k];
      if (null != l) {
        var m = l.RowNumber - h;
        if (0 == m) j++;
        else if (1 == m) i = Math.max(i, j), j = 1, h = l.RowNumber;
        else if (m < 0 || l.RowNumber >= a.RowCount || m > k) b[k] = null;
        else {
          var n;
          n = i > 2 ? (i - 2) * m : m;
          for (var o = n > k, p = 1; p <= n && !o; p++) o = null != b[k - p];
          o ? b[k] = null : (h = l.RowNumber, j = 1)
        }
      }
    }
    return g + .5
  }, i.PDF417.Internal.DetectionResultRowIndicatorColumn.prototype.getRowHeights = function() {
    var a = this.getBarcodeMetadata();
    if (null == a) return null;
    this.adjustIncompleteIndicatorColumnRowNumbers(a);
    for (var b = new Int32Array(a.RowCount), c = 0, d = this.Codewords, e = d.length, f = d[c]; c < e; c++, f = d[c])
      if (null != f) {
        var g = f.RowNumber;
        if (g >= b.length) return null;
        b[g]++
      } return b
  }, i.PDF417.Internal.DetectionResultRowIndicatorColumn.prototype.adjustIncompleteIndicatorColumnRowNumbers = function(a) {
    for (var b = this.IsLeft ? this.Box.TopLeft : this.Box.TopRight, c = this.IsLeft ? this.Box.BottomLeft : this.Box.BottomRight, d = this.imageRowToCodewordIndex(b.y), e = this.imageRowToCodewordIndex(c.y), f = Math.floor((e - d) / a.RowCount), g = this.Codewords, h = -1, i = 1, j = 0, k = d; k < e; k++) {
      var l = g[k];
      if (null != l) {
        l.setRowNumberAsRowIndicatorColumn();
        var m = l.RowNumber - h;
        0 == m ? j++ : 1 == m ? (i = Math.max(i, j), j = 1, h = l.RowNumber) : l.RowNumber > a.RowCount ? this.Codewords[k] = null : (h = l.RowNumber, j = 1)
      }
    }
    return f + .5
  }, i.PDF417.Internal.DetectionResultRowIndicatorColumn.prototype.getBarcodeMetadata = function() {
    if (this.barcodeMetaData) return this.barcodeMetaData;
    for (var a = this.Codewords, b = new i.PDF417.Internal.BarcodeValue, c = new i.PDF417.Internal.BarcodeValue, d = new i.PDF417.Internal.BarcodeValue, e = new i.PDF417.Internal.BarcodeValue, f = 0, g = a.length, h = a[f]; f < g; f++, h = a[f])
      if (null != h) {
        h.setRowNumberAsRowIndicatorColumn();
        var j = h.Value % 30,
          k = h.RowNumber;
        switch (this.IsLeft || (k += 2), k % 3) {
          case 0:
            c.setValue(3 * j + 1);
            break;
          case 1:
            e.setValue(j / 3), d.setValue(j % 3);
            break;
          case 2:
            b.setValue(j + 1)
        }
      } var l = b.getValue(),
      m = c.getValue(),
      n = d.getValue(),
      o = e.getValue();
    if (0 == l.length || 0 == m.length || 0 == n.length || 0 == o.length || l[0] < 1 || m[0] + n[0] < i.PDF417.PDF417Common.MIN_ROWS_IN_BARCODE || m[0] + n[0] > i.PDF417.PDF417Common.MAX_ROWS_IN_BARCODE) return null;
    var p = new i.PDF417.Internal.BarcodeMetadata(l[0], m[0], n[0], o[0]);
    return this.removeIncorrectCodewords(a, p), this.barcodeMetaData = p
  }, i.PDF417.Internal.DetectionResultRowIndicatorColumn.prototype.removeIncorrectCodewords = function(a, b) {
    for (var c = 0; c < a.length; c++) {
      var d = a[c];
      if (null != d) {
        var e = d.Value % 30,
          f = d.RowNumber;
        if (f >= b.RowCount) a[c] = null;
        else switch (this.IsLeft || (f += 2), f % 3) {
          default:
          case 0:
            3 * e + 1 != b.RowCountUpper && (a[c] = null);
            break;
          case 1:
            e % 3 == b.RowCountLower && e / 3 == b.ErrorCorrectionLevel || (a[c] = null);
            break;
          case 2:
            e + 1 != b.ColumnCount && (a[c] = null)
        }
      }
    }
  }, i.PDF417.Internal.DetectionResultRowIndicatorColumn.prototype.toString = function() {
    return "Is Left: " + this.IsLeft + " \n" + i.PDF417.Internal.DetectionResultColumn.prototype.toString.call(this)
  }, h(i.PDF417.Internal.DetectionResultRowIndicatorColumn, i.PDF417.Internal.DetectionResultColumn), i.PDF417.Internal.PDF417CodewordDecoder = function() {}, i.PDF417.Internal.PDF417CodewordDecoder.RATIOS_TABLE = null, i.PDF417.Internal.PDF417CodewordDecoder.RATIOS_TABLE = new Array(i.PDF417.PDF417Common.SYMBOL_TABLE.length);
  for (var l = 0; l < i.PDF417.Internal.PDF417CodewordDecoder.RATIOS_TABLE.length; l++) i.PDF417.Internal.PDF417CodewordDecoder.RATIOS_TABLE[l] = new Float32Array(i.PDF417.PDF417Common.BARS_IN_MODULE);
  for (var k = 0; k < i.PDF417.PDF417Common.SYMBOL_TABLE.length; k++)
    for (var m = i.PDF417.PDF417Common.SYMBOL_TABLE[k], n = 1 & m, o = 0; o < i.PDF417.PDF417Common.BARS_IN_MODULE; o++) {
      for (var q = 0;
        (1 & m) == n;) q += 1, m >>= 1;
      n = 1 & m, i.PDF417.Internal.PDF417CodewordDecoder.RATIOS_TABLE[k][i.PDF417.PDF417Common.BARS_IN_MODULE - o - 1] = q / i.PDF417.PDF417Common.MODULES_IN_CODEWORD
    }
  i.PDF417.Internal.PDF417CodewordDecoder.getDecodedValue = function(a) {
    var b = i.PDF417.Internal.PDF417CodewordDecoder.getDecodedCodewordValue(i.PDF417.Internal.PDF417CodewordDecoder.sampleBitCounts(a));
    return b != i.PDF417.PDF417Common.INVALID_CODEWORD ? b : i.PDF417.Internal.PDF417CodewordDecoder.getClosestDecodedValue(a)
  }, i.PDF417.Internal.PDF417CodewordDecoder.sampleBitCounts = function(a) {
    for (var b = i.PDF417.PDF417Common.getBitCountSum(a), c = new Int32Array(i.PDF417.PDF417Common.BARS_IN_MODULE), d = 0, e = 0, f = 0; f < i.PDF417.PDF417Common.MODULES_IN_CODEWORD; f++) {
      var g = b / (2 * i.PDF417.PDF417Common.MODULES_IN_CODEWORD) + f * b / i.PDF417.PDF417Common.MODULES_IN_CODEWORD;
      e + a[d] <= g && (e += a[d], d++), c[d]++
    }
    return c
  }, i.PDF417.Internal.PDF417CodewordDecoder.getDecodedCodewordValue = function(a) {
    var b = i.PDF417.Internal.PDF417CodewordDecoder.getBitValue(a);
    return i.PDF417.PDF417Common.getCodeword(b) == i.PDF417.PDF417Common.INVALID_CODEWORD ? i.PDF417.PDF417Common.INVALID_CODEWORD : b
  }, i.PDF417.Internal.PDF417CodewordDecoder.getBitValue = function(a) {
    for (var b = 0, c = 0; c < a.length; c++)
      for (var d = 0; d < a[c]; d++) b = b << 1 | (c % 2 == 0 ? 1 : 0);
    return b
  }, i.PDF417.Internal.PDF417CodewordDecoder.getClosestDecodedValue = function(a) {
    for (var b = i.PDF417.PDF417Common.getBitCountSum(a), c = new Float32Array(i.PDF417.PDF417Common.BARS_IN_MODULE), d = 0; d < c.length; d++) c[d] = a[d] / b;
    for (var e = 3.402823e38, f = i.PDF417.PDF417Common.INVALID_CODEWORD, g = 0; g < i.PDF417.Internal.PDF417CodewordDecoder.RATIOS_TABLE.length; g++) {
      for (var h = 0, j = i.PDF417.Internal.PDF417CodewordDecoder.RATIOS_TABLE[g], k = 0; k < i.PDF417.PDF417Common.BARS_IN_MODULE; k++) {
        var l = j[k] - c[k];
        if ((h += l * l) >= e) break
      }
      h < e && (e = h, f = i.PDF417.PDF417Common.SYMBOL_TABLE[g])
    }
    return f
  }, i.PDF417.Internal.PDF417ScanningDecoder = function() {}, i.PDF417.Internal.PDF417ScanningDecoder.CODEWORD_SKEW_SIZE = 2, i.PDF417.Internal.PDF417ScanningDecoder.MAX_ERRORS = 3, i.PDF417.Internal.PDF417ScanningDecoder.MAX_EC_CODEWORDS = 512, i.PDF417.Internal.PDF417ScanningDecoder.errorCorrection = new i.PDF417.Internal.EC.ErrorCorrection, i.PDF417.Internal.PDF417ScanningDecoder.decode = function(a, b, c, d, e, f, g) {
    var h = i.PDF417.Internal.BoundingBox.Create(a, b, c, d, e);
    if (null == h) return null;
    for (var j = null, k = null, l = null, m = 0; m < 2; m++) {
      if (null != b && (j = i.PDF417.Internal.PDF417ScanningDecoder.getRowIndicatorColumn(a, h, b, !0, f, g)), null != d && (k = i.PDF417.Internal.PDF417ScanningDecoder.getRowIndicatorColumn(a, h, d, !1, f, g)), null == (l = i.PDF417.Internal.PDF417ScanningDecoder.merge(j, k))) return null;
      if (0 != m || null == l.Box || !(l.Box.MinY < h.MinY || l.Box.MaxY > h.MaxY)) {
        l.Box = h;
        break
      }
      h = l.Box
    }
    var n = l.ColumnCount + 1;
    l.DetectionResultColumns[0] = j, l.DetectionResultColumns[n] = k;
    for (var o = null != j, p = 1; p <= n; p++) {
      var q = o ? p : n - p;
      if (null == l.DetectionResultColumns[q]) {
        var r;
        r = 0 == q || q == n ? new i.PDF417.Internal.DetectionResultRowIndicatorColumn(h, 0 == q) : new i.PDF417.Internal.DetectionResultColumn(h), l.DetectionResultColumns[q] = r;
        for (var s = -1, t = s, u = h.MinY; u <= h.MaxY; u++) {
          if ((s = i.PDF417.Internal.PDF417ScanningDecoder.getStartColumn(l, q, u, o)) < 0 || s > h.MaxX) {
            if (-1 == t) continue;
            s = t
          }
          var v = i.PDF417.Internal.PDF417ScanningDecoder.detectCodeword(a, h.MinX, h.MaxX, o, s, u, f, g);
          null != v && (r.setCodeword(u, v), t = s, f = Math.min(f, v.get_Width()), g = Math.max(g, v.get_Width()))
        }
      }
    }
    return i.PDF417.Internal.PDF417ScanningDecoder.createDecoderResult(l)
  }, i.PDF417.Internal.PDF417ScanningDecoder.merge = function(a, b) {
    if (null == a && null == b) return null;
    var c = i.PDF417.Internal.PDF417ScanningDecoder.getBarcodeMetadata(a, b);
    if (null == c) return null;
    var d = i.PDF417.Internal.BoundingBox.merge(i.PDF417.Internal.PDF417ScanningDecoder.adjustBoundingBox(a), i.PDF417.Internal.PDF417ScanningDecoder.adjustBoundingBox(b));
    return new i.PDF417.Internal.DetectionResult(c, d)
  }, i.PDF417.Internal.PDF417ScanningDecoder.adjustBoundingBox = function(a) {
    if (null == a) return null;
    var b = a.getRowHeights();
    if (null == b) return null;
    for (var c = i.PDF417.Internal.PDF417ScanningDecoder.getMax(b), d = 0, e = 0, f = b.length, g = b[e]; e < f && (d += c - g, !(g > 0)); e++, g = b[e]);
    for (var h = a.Codewords, j = 0; d > 0 && null == h[j]; j++) d--;
    var k = 0;
    for (j = b.length - 1; j >= 0 && (k += c - b[j], !(b[j] > 0)); j--);
    for (j = h.length - 1; k > 0 && null == h[j]; j--) k--;
    return a.Box.addMissingRows(d, k, a.IsLeft)
  }, i.PDF417.Internal.PDF417ScanningDecoder.getMax = function(a) {
    for (var b = -1, c = a.length - 1; c >= 0; c--) b = Math.max(b, a[c]);
    return b
  }, i.PDF417.Internal.PDF417ScanningDecoder.getBarcodeMetadata = function(a, b) {
    var c;
    if (null == a || null == (c = a.getBarcodeMetadata())) return null == b ? null : b.getBarcodeMetadata();
    var d;
    return null == b || null == (d = b.getBarcodeMetadata()) ? c : c.ColumnCount != d.ColumnCount && c.ErrorCorrectionLevel != d.ErrorCorrectionLevel && c.RowCount != d.RowCount ? null : c
  }, i.PDF417.Internal.PDF417ScanningDecoder.getRowIndicatorColumn = function(a, b, c, d, e, f) {
    for (var g = new i.PDF417.Internal.DetectionResultRowIndicatorColumn(b, d), h = 0; h < 2; h++)
      for (var j = 0 == h ? 1 : -1, k = c.x, l = c.y; l <= b.MaxY && l >= b.MinY; l += j) {
        var m = i.PDF417.Internal.PDF417ScanningDecoder.detectCodeword(a, 0, a.get_Width(), d, k, l, e, f);
        null != m && (g.setCodeword(l, m), k = d ? m.StartX : m.EndX)
      }
    return g
  }, i.PDF417.Internal.PDF417ScanningDecoder.adjustCodewordCount = function(a, b) {
    var c = b[0][1].getValue(),
      d = a.ColumnCount * a.get_RowCount() - i.PDF417.Internal.PDF417ScanningDecoder.getNumberOfECCodeWords(a.get_ErrorCorrectionLevel());
    if (0 == c.length) {
      if (d < 1 || d > i.PDF417.PDF417Common.MAX_CODEWORDS_IN_BARCODE) return !1;
      b[0][1].setValue(d)
    } else c[0] != d && b[0][1].setValue(d);
    return !0
  }, i.PDF417.Internal.PDF417ScanningDecoder.createDecoderResult = function(a) {
    var b = i.PDF417.Internal.PDF417ScanningDecoder.createBarcodeMatrix(a);
    if (null == b) return null;
    if (!i.PDF417.Internal.PDF417ScanningDecoder.adjustCodewordCount(a, b)) return null;
    for (var c = [], d = new Int32Array(a.get_RowCount() * a.ColumnCount), e = [], f = [], g = 0; g < a.get_RowCount(); g++)
      for (var h = 0; h < a.ColumnCount; h++) {
        var j = b[g][h + 1].getValue(),
          k = g * a.ColumnCount + h;
        0 == j.length ? c.push(k) : 1 == j.length ? d[k] = j[0] : (f.push(k), e.push(j))
      }
    for (var l = [], m = 0; m < e.length; m++) l[m] = e[m];
    return i.PDF417.Internal.PDF417ScanningDecoder.createDecoderResultFromAmbiguousValues(a.get_ErrorCorrectionLevel(), d, c, f, l)
  }, i.PDF417.Internal.PDF417ScanningDecoder.createDecoderResultFromAmbiguousValues = function(a, b, c, d, e) {
    for (var f = new Int32Array(d.length), g = 100; g-- > 0;) {
      for (var h = 0; h < f.length; h++) b[d[h]] = e[h][f[h]];
      try {
        var j = i.PDF417.Internal.PDF417ScanningDecoder.decodeCodewords(b, a, c);
        if (null != j) return j.AmbiguousValuesCount = e.length, j
      } catch (a) {}
      if (0 == f.length) return null;
      for (h = 0; h < f.length; h++) {
        if (f[h] < e[h].length - 1) {
          f[h]++;
          break
        }
        if (f[h] = 0, h == f.length - 1) return null
      }
    }
    return null
  }, i.PDF417.Internal.PDF417ScanningDecoder.createBarcodeMatrix = function(a) {
    for (var b = new Array(a.get_RowCount()), c = 0; c < b.length; c++) {
      b[c] = new Array(a.ColumnCount + 2);
      for (var d = 0; d < b[c].length; d++) b[c][d] = new i.PDF417.Internal.BarcodeValue
    }
    for (var e = 0, f = 0, g = a.getDetectionResultColumns(), h = g.length, j = g[f]; f < h; f++, j = g[f]) {
      if (null != j)
        for (var k = 0, l = j.Codewords, m = l.length, n = l[k]; k < m; k++, n = l[k])
          if (null != n) {
            var o = n.RowNumber;
            if (o >= 0) {
              if (o >= b.length) return null;
              b[o][e].setValue(n.Value)
            }
          } e++
    }
    return b
  }, i.PDF417.Internal.PDF417ScanningDecoder.isValidBarcodeColumn = function(a, b) {
    return b >= 0 && b < a.DetectionResultColumns.length
  }, i.PDF417.Internal.PDF417ScanningDecoder.getStartColumn = function(a, b, c, d) {
    var e = d ? 1 : -1,
      f = null;
    if (i.PDF417.Internal.PDF417ScanningDecoder.isValidBarcodeColumn(a, b - e) && (f = a.DetectionResultColumns[b - e].getCodeword(c)), null != f) return d ? f.EndX : f.StartX;
    if (null != (f = a.DetectionResultColumns[b].getCodewordNearby(c))) return d ? f.StartX : f.EndX;
    if (i.PDF417.Internal.PDF417ScanningDecoder.isValidBarcodeColumn(a, b - e) && (f = a.DetectionResultColumns[b - e].getCodewordNearby(c)), null != f) return d ? f.EndX : f.StartX;
    for (var g = 0; i.PDF417.Internal.PDF417ScanningDecoder.isValidBarcodeColumn(a, b - e);) {
      b -= e;
      for (var h = 0, j = a.DetectionResultColumns[b].Codewords, k = j.length, l = j[h]; h < k; h++, l = j[h])
        if (null != l) return (d ? l.EndX : l.StartX) + e * g * (l.EndX - l.StartX);
      g++
    }
    return d ? a.Box.MinX : a.Box.MaxX
  }, i.PDF417.Internal.PDF417ScanningDecoder.detectCodeword = function(a, b, c, d, e, f, g, h) {
    e = i.PDF417.Internal.PDF417ScanningDecoder.adjustCodewordStartColumn(a, b, c, d, e, f);
    var j = i.PDF417.Internal.PDF417ScanningDecoder.getModuleBitCount(a, b, c, d, e, f);
    if (null == j) return null;
    var k, l = i.PDF417.PDF417Common.getBitCountSum(j);
    if (d) k = e + l;
    else {
      for (var m = 0; m < j.length >> 1; m++) {
        var n = j[m];
        j[m] = j[j.length - 1 - m], j[j.length - 1 - m] = n
      }
      k = e, e = k - l
    }
    if (!i.PDF417.Internal.PDF417ScanningDecoder.checkCodewordSkew(l, g, h)) return null;
    var o = i.PDF417.Internal.PDF417CodewordDecoder.getDecodedValue(j),
      p = i.PDF417.PDF417Common.getCodeword(o);
    return -1 == p ? null : new i.PDF417.Internal.Codeword(e, k, i.PDF417.Internal.PDF417ScanningDecoder.getCodewordBucketNumber(o), p)
  }, i.PDF417.Internal.PDF417ScanningDecoder.getModuleBitCount = function(a, b, c, d, e, f) {
    for (var g = e, h = new Int32Array(8), i = 0, j = d ? 1 : -1, k = d;
      (d && g < c || !d && g >= b) && i < h.length;) a.get_Item(g, f) == k ? (h[i]++, g += j) : (i++, k = !k);
    return i == h.length || (d && g == c || !d && g == b) && i == h.length - 1 ? h : null
  }, i.PDF417.Internal.PDF417ScanningDecoder.getNumberOfECCodeWords = function(a) {
    return 2 << a
  }, i.PDF417.Internal.PDF417ScanningDecoder.adjustCodewordStartColumn = function(a, b, c, d, e, f) {
    for (var g = e, h = d ? -1 : 1, i = 0; i < 2; i++) {
      for (;
        (d && g >= b || !d && g < c) && d == a.get_Item(g, f);) {
        if (Math.abs(e - g) > 2) return e;
        g += h
      }
      h = -h, d = !d
    }
    return g
  }, i.PDF417.Internal.PDF417ScanningDecoder.checkCodewordSkew = function(a, b, c) {
    return b - 2 <= a && a <= c + 2
  }, i.PDF417.Internal.PDF417ScanningDecoder.decodeCodewords = function(a, b, c) {
    if (0 == a.length) return null;
    var d = 1 << b + 1,
      e = i.PDF417.Internal.PDF417ScanningDecoder.correctErrors(a, c, d);
    if (e < 0) return null;
    if (!i.PDF417.Internal.PDF417ScanningDecoder.verifyCodewordCount(a, d)) return null;
    var f = i.PDF417.Internal.DecodedBitStreamParser.decode(a, b.toString());
    return null != f && (f.ErrorsCorrected = e, f.Erasures = c.length), f
  }, i.PDF417.Internal.PDF417ScanningDecoder.correctErrors = function(a, b, c) {
    if (null != b && b.length > Math.floor(c / 2) + 3 || c < 0 || c > 512) return -1;
    var d;
    return function() {
      var e = {
          Value: d
        },
        f = i.PDF417.Internal.PDF417ScanningDecoder.errorCorrection.decode(a, c, b, e);
      return d = e.Value, f
    }() ? d : -1
  }, i.PDF417.Internal.PDF417ScanningDecoder.verifyCodewordCount = function(a, b) {
    if (a.length < 4) return !1;
    var c = a[0];
    if (c > a.length) return !1;
    if (0 == c) {
      if (!(b < a.length)) return !1;
      a[0] = a.length - b
    }
    return !0
  }, i.PDF417.Internal.PDF417ScanningDecoder.getBitCountForCodeword = function(a) {
    for (var b = new Int32Array(8), c = 0, d = b.length - 1;;) {
      if ((1 & a) != c && (c = 1 & a, --d < 0)) break;
      b[d]++, a >>= 1
    }
    return b
  }, i.PDF417.Internal.PDF417ScanningDecoder.getCodewordBucketNumber = function(a) {
    if ("number" == typeof a) return i.PDF417.Internal.PDF417ScanningDecoder.getCodewordBucketNumber(i.PDF417.Internal.PDF417ScanningDecoder.getBitCountForCodeword(a));
    var b = a;
    return (b[0] - b[2] + b[4] - b[6] + 9) % 9
  }, i.PDF417.Internal.PDF417ScanningDecoder.ToString = function(a) {
    for (var b = "", c = 0; c < a.length; c++) {
      b += "Row {0}: ".format(d(c, 2));
      for (var e = 0; e < a[c].length; e++) {
        var f = a[c][e],
          g = f.getValue();
        0 == g.length ? b += "        " : b += "{0}({1})".format(d(g[0], 4), d(f.getConfidence(g[0]), 2))
      }
      b += "\n"
    }
    return b
  }, i.PDF417.PDF417Reader = function() {}, i.PDF417.PDF417Reader.prototype.decode = function(a, b) {
    var c = i.PDF417.PDF417Reader.decode(a, b || null, !1);
    return 0 == c.length ? null : c[0]
  }, i.PDF417.PDF417Reader.prototype.decodeMultiple = function(a, b) {
    return i.PDF417.PDF417Reader.decode(a, b || null, !0)
  }, i.PDF417.PDF417Reader.decode = function(a, c, d, e) {
    var f = [],
      g = e || i.PDF417.Internal.Detector.detectSingle(a, c, d);
    if (g)
      for (var h = g.Points, j = 0, k = h.length; j < k; j++) {
        var l = h[j],
          m = i.PDF417.Internal.PDF417ScanningDecoder.decode(g.Bits, l[4], l[5], l[6], l[7], i.PDF417.PDF417Reader.getMinCodewordWidth(l), i.PDF417.PDF417Reader.getMaxCodewordWidth(l));
        if (m) {
          var n = new i.Result(m.Text, m.RawBytes, l, i.BarcodeFormat.PDF_417);
          n.putMetadata("ERROR_CORRECTION_LEVEL", m.ECLevel);
          var o = m.Other instanceof i.PDF417.PDF417ResultMetadata || null == m.Other ? m.Other : function() {
            throw new Error("InvalidCastException")
          }();
          o && n.putMetadata("PDF417_EXTRA_METADATA", o), f.push(n)
        }
      }
    return f
  }, i.PDF417.PDF417Reader.getMaxWidth = function(a, b) {
    return a && b ? Math.abs(a.x - b.x) : 0
  }, i.PDF417.PDF417Reader.getMinWidth = function(a, b) {
    return a && b ? Math.abs(a.x - b.x) : 2147483647
  }, i.PDF417.PDF417Reader.getMaxCodewordWidth = function(a) {
    return Math.max(Math.max(i.PDF417.PDF417Reader.getMaxWidth(a[0], a[4]), i.PDF417.PDF417Reader.getMaxWidth(a[6], a[2]) * Math.floor(i.PDF417.PDF417Common.MODULES_IN_CODEWORD / i.PDF417.PDF417Common.MODULES_IN_STOP_PATTERN)), Math.max(i.PDF417.PDF417Reader.getMaxWidth(a[1], a[5]), i.PDF417.PDF417Reader.getMaxWidth(a[7], a[3]) * Math.floor(i.PDF417.PDF417Common.MODULES_IN_CODEWORD / i.PDF417.PDF417Common.MODULES_IN_STOP_PATTERN)))
  }, i.PDF417.PDF417Reader.getMinCodewordWidth = function(a) {
    return Math.min(Math.min(i.PDF417.PDF417Reader.getMinWidth(a[0], a[4]), i.PDF417.PDF417Reader.getMinWidth(a[6], a[2]) * Math.floor(i.PDF417.PDF417Common.MODULES_IN_CODEWORD / i.PDF417.PDF417Common.MODULES_IN_STOP_PATTERN)), Math.min(i.PDF417.PDF417Reader.getMinWidth(a[1], a[5]), i.PDF417.PDF417Reader.getMinWidth(a[7], a[3]) * Math.floor(i.PDF417.PDF417Common.MODULES_IN_CODEWORD / i.PDF417.PDF417Common.MODULES_IN_STOP_PATTERN)))
  }, i.PDF417.PDF417Reader.prototype.reset = function() {}
}(window, window.Uint8Array, window.Uint32Array, bigInt);
