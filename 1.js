!
function(b, k) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = b.document ? k(b, !0) : function(b) {
        if (!b.document) throw Error("jQuery requires a window with a document");
        return k(b)
    }: k(b)
} ("undefined" != typeof window ? window: this,
function(b, k) {
    function h(a) {
        var b = a.length,
        c = l.type(a);
        return "function" === c || l.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && 0 < b && b - 1 in a
    }
    function m(a, b, c) {
        if (l.isFunction(b)) return l.grep(a,
        function(a, d) {
            return !! b.call(a, d, a) !== c
        });
        if (b.nodeType) return l.grep(a,
        function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (Gb.test(b)) return l.filter(b, a, c);
            b = l.filter(b, a)
        }
        return l.grep(a,
        function(a) {
            return 0 <= Ia.call(b, a) !== c
        })
    }
    function g(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType;);
        return a
    }
    function p(a) {
        var b = fb[a] = {};
        return l.each(a.match(ya) || [],
        function(a, c) {
            b[c] = !0
        }),
        b
    }
    function q() {
        K.removeEventListener("DOMContentLoaded", q, !1);
        b.removeEventListener("load", q, !1);
        l.ready()
    }
    function s() {
        Object.defineProperty(this.cache = {},
        0, {
            get: function() {
                return {}
            }
        });
        this.expando = l.expando + Math.random()
    }
    function t(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Hb, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null: +c + "" === c ? +c: za.test(c) ? l.parseJSON(c) : c
            } catch(e) {}
            ba.set(a, b, c)
        } else c = void 0;
        return c
    }
    function A() {
        return ! 0
    }
    function w() {
        return ! 1
    }
    function u() {
        try {
            return K.activeElement
        } catch(a) {}
    }
    function x(a, b) {
        return l.nodeName(a, "table") && l.nodeName(11 !== b.nodeType ? b: b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function U(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
        a
    }
    function I(a) {
        var b = sb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function R(a, b) {
        for (var c = 0,
        d = a.length; d > c; c++) S.set(a[c], "globalEval", !b || S.get(b[c], "globalEval"))
    }
    function a(a, b) {
        var c, d, e, f, n, r;
        if (1 === b.nodeType) {
            if (S.hasData(a) && (c = S.access(a), d = S.set(b, c), r = c.events)) for (e in delete d.handle, d.events = {},
            r) for (c = 0, d = r[e].length; d > c; c++) l.event.add(b, e, r[e][c]);
            ba.hasData(a) && (f = ba.access(a), n = l.extend({},
            f), ba.set(b, n))
        }
    }
    function c(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && l.nodeName(a, b) ? l.merge([a], c) : c
    }
    function d(a, c) {
        var d, e = l(c.createElement(a)).appendTo(c.body),
        f = b.getDefaultComputedStyle && (d = b.getDefaultComputedStyle(e[0])) ? d.display: l.css(e[0], "display");
        return e.detach(),
        f
    }
    function e(a) {
        var b = K,
        c = tb[a];
        return c || (c = d(a, b), "none" !== c && c || (Ra = (Ra || l("\x3ciframe frameborder\x3d'0' width\x3d'0' height\x3d'0'/\x3e")).appendTo(b.documentElement), b = Ra[0].contentDocument, b.write(), b.close(), c = d(a, b), Ra.detach()), tb[a] = c),
        c
    }
    function f(a, b, c) {
        var d, e, f, n, r = a.style;
        return c = c || xa(a),
        c && (n = c.getPropertyValue(b) || c[b]),
        c && ("" !== n || l.contains(a.ownerDocument, a) || (n = l.style(a, b)), Ma.test(n) && Za.test(b) && (d = r.width, e = r.minWidth, f = r.maxWidth, r.minWidth = r.maxWidth = r.width = n, n = c.width, r.width = d, r.minWidth = e, r.maxWidth = f)),
        void 0 !== n ? n + "": n
    }
    function n(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get: (this.get = b).apply(this, arguments)
            }
        }
    }
    function O(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = gb.length; e--;) if (b = gb[e] + c, b in a) return b;
        return d
    }
    function C(a, b, c) {
        return (a = ub.exec(b)) ? Math.max(0, a[1] - (c || 0)) + (a[2] || "px") : b
    }
    function z(a, b, c, d, e) {
        b = c === (d ? "border": "content") ? 4 : "width" === b ? 1 : 0;
        for (var f = 0; 4 > b; b += 2)"margin" === c && (f += l.css(a, c + sa[b], !0, e)),
        d ? ("content" === c && (f -= l.css(a, "padding" + sa[b], !0, e)), "margin" !== c && (f -= l.css(a, "border" + sa[b] + "Width", !0, e))) : (f += l.css(a, "padding" + sa[b], !0, e), "padding" !== c && (f += l.css(a, "border" + sa[b] + "Width", !0, e)));
        return f
    }
    function T(a, b, c) {
        var d = !0,
        e = "width" === b ? a.offsetWidth: a.offsetHeight,
        n = xa(a),
        g = "border-box" === l.css(a, "boxSizing", !1, n);
        if (0 >= e || null == e) {
            if (e = f(a, b, n), (0 > e || null == e) && (e = a.style[b]), Ma.test(e)) return e;
            d = g && (V.boxSizingReliable() || e === a.style[b]);
            e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border": "content"), d, n) + "px"
    }
    function ma(a, b) {
        for (var c, d, f, n = [], g = 0, r = a.length; r > g; g++) d = a[g],
        d.style && (n[g] = S.get(d, "olddisplay"), c = d.style.display, b ? (n[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Sa(d) && (n[g] = S.access(d, "olddisplay", e(d.nodeName)))) : (f = Sa(d), "none" === c && f || S.set(d, "olddisplay", f ? c: l.css(d, "display"))));
        for (g = 0; r > g; g++) d = a[g],
        d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? n[g] || "": "none"));
        return a
    }
    function G(a, b, c, d, e) {
        return new G.prototype.init(a, b, c, d, e)
    }
    function ea() {
        return setTimeout(function() {
            na = void 0
        }),
        na = l.now()
    }
    function ca(a, b) {
        var c, d = 0,
        e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = sa[d],
        e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function E(a, b, c) {
        for (var d, e = (X[b] || []).concat(X["*"]), f = 0, n = e.length; n > f; f++) if (d = e[f].call(c, b, a)) return d
    }
    function fa(a, b) {
        var c, d, e, f, n;
        for (c in a) if (d = l.camelCase(c), e = b[d], f = a[c], l.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), n = l.cssHooks[d], n && "expand" in n) for (c in f = n.expand(f), delete a[d], f) c in a || (a[c] = f[c], b[c] = e);
        else b[d] = e
    }
    function Z(a, b, c) {
        var d, e = 0,
        f = ia.length,
        n = l.Deferred().always(function() {
            delete r.elem
        }),
        r = function() {
            if (d) return ! 1;
            for (var b = na || ea(), b = Math.max(0, v.startTime + v.duration - b), c = 1 - (b / v.duration || 0), r = 0, e = v.tweens.length; e > r; r++) v.tweens[r].run(c);
            return n.notifyWith(a, [v, c, b]),
            1 > c && e ? b: (n.resolveWith(a, [v]), !1)
        },
        v = n.promise({
            elem: a,
            props: l.extend({},
            b),
            opts: l.extend(!0, {
                specialEasing: {}
            },
            c),
            originalProperties: b,
            originalOptions: c,
            startTime: na || ea(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = l.Tween(a, v.opts, b, c, v.opts.specialEasing[b] || v.opts.easing);
                return v.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0,
                r = b ? v.tweens.length: 0;
                if (d) return this;
                for (d = !0; r > c; c++) v.tweens[c].run(1);
                return b ? n.resolveWith(a, [v, b]) : n.rejectWith(a, [v, b]),
                this
            }
        });
        c = v.props;
        for (fa(c, v.opts.specialEasing); f > e; e++) if (b = ia[e].call(v, a, c, v.opts)) return b;
        return l.map(c, E, v),
        l.isFunction(v.opts.start) && v.opts.start.call(a, v),
        l.fx.timer(l.extend(r, {
            elem: a,
            anim: v,
            queue: v.opts.queue
        })),
        v.progress(v.opts.progress).done(v.opts.done, v.opts.complete).fail(v.opts.fail).always(v.opts.always)
    }
    function aa(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
            f = b.toLowerCase().match(ya) || [];
            if (l.isFunction(c)) for (; d = f[e++];)"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function ha(a, b, c, d) {
        function e(r) {
            var v;
            return f[r] = !0,
            l.each(a[r] || [],
            function(a, r) {
                var H = r(b, c, d);
                return "string" != typeof H || n || f[H] ? n ? !(v = H) : void 0 : (b.dataTypes.unshift(H), e(H), !1)
            }),
            v
        }
        var f = {},
        n = a === Na;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }
    function B(a, b) {
        var c, d, e = l.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a: d || (d = {}))[c] = b[c]);
        return d && l.extend(!0, a, d),
        a
    }
    function J(a, b, c, d) {
        var e;
        if (l.isArray(b)) l.each(b,
        function(b, e) {
            c || Ua.test(a) ? d(a, e) : J(a + "[" + ("object" == typeof e ? b: "") + "]", e, c, d)
        });
        else if (c || "object" !== l.type(b)) d(a, b);
        else for (e in b) J(a + "[" + e + "]", b[e], c, d)
    }
    function N(a) {
        return l.isWindow(a) ? a: 9 === a.nodeType && a.defaultView
    }
    var M = [],
    ta = M.slice,
    Ga = M.concat,
    ua = M.push,
    Ia = M.indexOf,
    qa = {},
    la = qa.toString,
    ra = qa.hasOwnProperty,
    V = {},
    K = b.document,
    l = function(a, b) {
        return new l.fn.init(a, b)
    },
    va = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    Da = /^-ms-/,
    Ea = /-([\da-z])/gi,
    oa = function(a, b) {
        return b.toUpperCase()
    };
    l.fn = l.prototype = {
        jquery: "2.1.1",
        constructor: l,
        selector: "",
        length: 0,
        toArray: function() {
            return ta.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : ta.call(this)
        },
        pushStack: function(a) {
            a = l.merge(this.constructor(), a);
            return a.prevObject = this,
            a.context = this.context,
            a
        },
        each: function(a, b) {
            return l.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(l.map(this,
            function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(ta.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(a) {
            var b = this.length;
            a = +a + (0 > a ? b: 0);
            return this.pushStack(0 <= a && b > a ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: ua,
        sort: M.sort,
        splice: M.splice
    };
    l.extend = l.fn.extend = function() {
        var a, b, c, d, e, f, n = arguments[0] || {},
        r = 1,
        v = arguments.length,
        D = !1;
        "boolean" == typeof n && (D = n, n = arguments[r] || {},
        r++);
        "object" == typeof n || l.isFunction(n) || (n = {});
        for (r === v && (n = this, r--); v > r; r++) if (null != (a = arguments[r])) for (b in a) c = n[b],
        d = a[b],
        n !== d && (D && d && (l.isPlainObject(d) || (e = l.isArray(d))) ? (e ? (e = !1, f = c && l.isArray(c) ? c: []) : f = c && l.isPlainObject(c) ? c: {},
        n[b] = l.extend(D, f, d)) : void 0 !== d && (n[b] = d));
        return n
    };
    l.extend({
        expando: "jQuery" + ("2.1.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === l.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return ! l.isArray(a) && 0 <= a - parseFloat(a)
        },
        isPlainObject: function(a) {
            return "object" !== l.type(a) || a.nodeType || l.isWindow(a) ? !1 : a.constructor && !ra.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            for (var b in a) return ! 1;
            return ! 0
        },
        type: function(a) {
            return null == a ? a + "": "object" == typeof a || "function" == typeof a ? qa[la.call(a)] || "object": typeof a
        },
        globalEval: function(a) {
            var b, c = eval; (a = l.trim(a)) && (1 === a.indexOf("use strict") ? (b = K.createElement("script"), b.text = a, K.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(Da, "ms-").replace(Ea, oa)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
            f = a.length,
            n = h(a);
            if (c) if (n) for (; f > e && (d = b.apply(a[e], c), !1 !== d); e++);
            else for (e in a) {
                if (d = b.apply(a[e], c), !1 === d) break
            } else if (n) for (; f > e && (d = b.call(a[e], e, a[e]), !1 !== d); e++);
            else for (e in a) if (d = b.call(a[e], e, a[e]), !1 === d) break;
            return a
        },
        trim: function(a) {
            return null == a ? "": (a + "").replace(va, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (h(Object(a)) ? l.merge(c, "string" == typeof a ? [a] : a) : ua.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : Ia.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length,
            d = 0,
            e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d = [], e = 0, f = a.length, n = !c; f > e; e++) c = !b(a[e], e),
            c !== n && d.push(a[e]);
            return d
        },
        map: function(a, b, c) {
            var d, e = 0,
            f = a.length,
            n = [];
            if (h(a)) for (; f > e; e++) d = b(a[e], e, c),
            null != d && n.push(d);
            else for (e in a) d = b(a[e], e, c),
            null != d && n.push(d);
            return Ga.apply([], n)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c),
            l.isFunction(a) ? (d = ta.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(ta.call(arguments)))
            },
            e.guid = a.guid = a.guid || l.guid++, e) : void 0
        },
        now: Date.now,
        support: V
    });
    l.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(a, b) {
        qa["[object " + b + "]"] = b.toLowerCase()
    });
    var Fa = function(a) {
        function b(a, c, d, r) {
            var e, v, f, H, D;
            if ((c ? c.ownerDocument || c: x) !== Z && u(c), c = c || Z, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (H = c.nodeType) && 9 !== H) return [];
            if (G && !r) {
                if (e = ka.exec(a)) if (f = e[1]) if (9 === H) {
                    if (v = c.getElementById(f), !v || !v.parentNode) return d;
                    if (v.id === f) return d.push(v),
                    d
                } else {
                    if (c.ownerDocument && (v = c.ownerDocument.getElementById(f)) && w(c, v) && v.id === f) return d.push(v),
                    d
                } else {
                    if (e[2]) return qa.apply(d, c.getElementsByTagName(a)),
                    d;
                    if ((f = e[3]) && E.getElementsByClassName && c.getElementsByClassName) return qa.apply(d, c.getElementsByClassName(f)),
                    d
                }
                if (E.qsa && (!M || !M.test(a))) {
                    if (v = e = aa, f = c, D = 9 === H && a, 1 === H && "object" !== c.nodeName.toLowerCase()) {
                        H = B(a); (e = c.getAttribute("id")) ? v = e.replace(na, "\\$\x26") : c.setAttribute("id", v);
                        v = "[id\x3d'" + v + "'] ";
                        for (f = H.length; f--;) H[f] = v + L(H[f]);
                        f = ia.test(a) && g(c.parentNode) || c;
                        D = H.join(",")
                    }
                    if (D) try {
                        return qa.apply(d, f.querySelectorAll(D)),
                        d
                    } catch(n) {} finally {
                        e || c.removeAttribute("id")
                    }
                }
            }
            return J(a.replace(P, "$1"), c, d, r)
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > m.cacheLength && delete a[b.shift()],
                a[c + " "] = d
            }
            var b = [];
            return a
        }
        function d(a) {
            return a[aa] = !0,
            a
        }
        function e(a) {
            var b = Z.createElement("div");
            try {
                return !! a(b)
            } catch(c) {
                return ! 1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) m.attrHandle[c[d]] = b
        }
        function n(a, b) {
            var c = b && a,
            d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
            if (d) return d;
            if (c) for (; c = c.nextSibling;) if (c === b) return - 1;
            return a ? 1 : -1
        }
        function r(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }
        function v(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function D(a) {
            return d(function(b) {
                return b = +b,
                d(function(c, d) {
                    for (var r, e = a([], c.length, b), v = e.length; v--;) c[r = e[v]] && (c[r] = !(d[r] = c[r]))
                })
            })
        }
        function g(a) {
            return a && "undefined" !== typeof a.getElementsByTagName && a
        }
        function l() {}
        function L(a) {
            for (var b = 0,
            c = a.length,
            d = ""; c > b; b++) d += a[b].value;
            return d
        }
        function pa(a, b, c) {
            var d = b.dir,
            r = c && "parentNode" === d,
            e = ha++;
            return b.first ?
            function(b, c, e) {
                for (; b = b[d];) if (1 === b.nodeType || r) return a(b, c, e)
            }: function(b, c, v) {
                var f, H, D = [A, e];
                if (v) for (; b = b[d];) {
                    if ((1 === b.nodeType || r) && a(b, c, v)) return ! 0
                } else for (; b = b[d];) if (1 === b.nodeType || r) {
                    if (H = b[aa] || (b[aa] = {}), (f = H[d]) && f[0] === A && f[1] === e) return D[2] = f[2];
                    if (H[d] = D, D[2] = a(b, c, v)) return ! 0
                }
            }
        }
        function h(a) {
            return 1 < a.length ?
            function(b, c, d) {
                for (var r = a.length; r--;) if (!a[r](b, c, d)) return ! 1;
                return ! 0
            }: a[0]
        }
        function k(a, b, c, d, r) {
            for (var e, v = [], f = 0, H = a.length, D = null != b; H > f; f++)(e = a[f]) && (!c || c(e, d, r)) && (v.push(e), D && b.push(f));
            return v
        }
        function C(a, c, r, e, v, f) {
            return e && !e[aa] && (e = C(e)),
            v && !v[aa] && (v = C(v, f)),
            d(function(d, f, H, D) {
                var n, g, l = [],
                Q = [],
                y = f.length,
                L;
                if (! (L = d)) {
                    L = c || "*";
                    for (var W = H.nodeType ? [H] : H, pa = [], h = 0, La = W.length; La > h; h++) b(L, W[h], pa);
                    L = pa
                }
                L = !a || !d && c ? L: k(L, l, a, H, D);
                W = r ? v || (d ? a: y || e) ? [] : f: L;
                if (r && r(L, W, H, D), e) for (n = k(W, Q), e(n, [], H, D), H = n.length; H--;)(g = n[H]) && (W[Q[H]] = !(L[Q[H]] = g));
                if (d) {
                    if (v || a) {
                        if (v) {
                            n = [];
                            for (H = W.length; H--;)(g = W[H]) && n.push(L[H] = g);
                            v(null, W = [], n, D)
                        }
                        for (H = W.length; H--;)(g = W[H]) && -1 < (n = v ? U.call(d, g) : l[H]) && (d[n] = !(f[n] = g))
                    }
                } else W = k(W === f ? W.splice(y, W.length) : W),
                v ? v(null, f, W, D) : qa.apply(f, W)
            })
        }
        function z(a) {
            var b, c, d, r = a.length,
            e = m.relative[a[0].type];
            c = e || m.relative[" "];
            for (var v = e ? 1 : 0, f = pa(function(a) {
                return a === b
            },
            c, !0), H = pa(function(a) {
                return - 1 < U.call(b, a)
            },
            c, !0), D = [function(a, c, d) {
                return ! e && (d || c !== T) || ((b = c).nodeType ? f(a, c, d) : H(a, c, d))
            }]; r > v; v++) if (c = m.relative[a[v].type]) D = [pa(h(D), c)];
            else {
                if (c = m.filter[a[v].type].apply(null, a[v].matches), c[aa]) {
                    for (d = ++v; r > d && !m.relative[a[d].type]; d++);
                    return C(1 < v && h(D), 1 < v && L(a.slice(0, v - 1).concat({
                        value: " " === a[v - 2].type ? "*": ""
                    })).replace(P, "$1"), c, d > v && z(a.slice(v, d)), r > d && z(a = a.slice(d)), r > d && L(a))
                }
                D.push(c)
            }
            return h(D)
        }
        function O(a, c) {
            var r = 0 < c.length,
            e = 0 < a.length,
            v = function(d, v, f, H, D) {
                var n, g, l, Q = 0,
                y = "0",
                L = d && [],
                W = [],
                pa = T,
                h = d || e && m.find.TAG("*", D),
                La = A += null == pa ? 1 : Math.random() || .1,
                C = h.length;
                for (D && (T = v !== Z && v); y !== C && null != (n = h[y]); y++) {
                    if (e && n) {
                        for (g = 0; l = a[g++];) if (l(n, v, f)) {
                            H.push(n);
                            break
                        }
                        D && (A = La)
                    }
                    r && ((n = !l && n) && Q--, d && L.push(n))
                }
                if (Q += y, r && y !== Q) {
                    for (g = 0; l = c[g++];) l(L, W, v, f);
                    if (d) {
                        if (0 < Q) for (; y--;) L[y] || W[y] || (W[y] = R.call(H));
                        W = k(W)
                    }
                    qa.apply(H, W);
                    D && !d && 0 < W.length && 1 < Q + c.length && b.uniqueSort(H)
                }
                return D && (A = La, T = pa),
                L
            };
            return r ? d(v) : v
        }
        var p, E, m, q, s, B, ca, J, T, t, fa, u, Z, N, G, M, ea, ma, w, aa = "sizzle" + -new Date,
        x = a.document,
        A = 0,
        ha = 0,
        ta = c(),
        la = c(),
        K = c(),
        Ga = function(a, b) {
            return a === b && (fa = !0),
            0
        },
        F = {}.hasOwnProperty,
        ua = [],
        R = ua.pop,
        Ia = ua.push,
        qa = ua.push,
        I = ua.slice,
        U = ua.indexOf ||
        function(a) {
            for (var b = 0,
            c = this.length; c > b; b++) if (this[b] === a) return b;
            return - 1
        },
        Fa = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
        V = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?\x3d)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Fa + "))|)[\\x20\\t\\r\\n\\f]*\\]",
        ra = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + V + ")*)|.*)\\)|)",
        P = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
        S = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        oa = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
        Da = RegExp("\x3d[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"),
        X = new RegExp(ra),
        Y = new RegExp("^" + Fa + "$"),
        Oa = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + V),
            PSEUDO: new RegExp("^" + ra),
            CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
            bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
            needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
        },
        da = /^(?:input|select|textarea|button)$/i,
        ja = /^h\d$/i,
        Pa = /^[^{]+\{\s*\[native \w/,
        ka = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ia = /[+~]/,
        na = /'|\\/g,
        ba = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"),
        va = function(a, b, c) {
            a = "0x" + b - 65536;
            return a !== a || c ? b: 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
        };
        try {
            qa.apply(ua = I.call(x.childNodes), x.childNodes),
            ua[x.childNodes.length].nodeType
        } catch(Ea) {
            qa = {
                apply: ua.length ?
                function(a, b) {
                    Ia.apply(a, I.call(b))
                }: function(a, b) {
                    for (var c = a.length,
                    d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        E = b.support = {};
        s = b.isXML = function(a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName: !1
        };
        u = b.setDocument = function(a) {
            var b, c = a ? a.ownerDocument || a: x;
            a = c.defaultView;
            return c !== Z && 9 === c.nodeType && c.documentElement ? (Z = c, N = c.documentElement, G = !s(c), a && a !== a.top && (a.addEventListener ? a.addEventListener("unload",
            function() {
                u()
            },
            !1) : a.attachEvent && a.attachEvent("onunload",
            function() {
                u()
            })), E.attributes = e(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }), E.getElementsByTagName = e(function(a) {
                return a.appendChild(c.createComment("")),
                !a.getElementsByTagName("*").length
            }), E.getElementsByClassName = Pa.test(c.getElementsByClassName) && e(function(a) {
                return a.innerHTML = "\x3cdiv class\x3d'a'\x3e\x3c/div\x3e\x3cdiv class\x3d'a i'\x3e\x3c/div\x3e",
                a.firstChild.className = "i",
                2 === a.getElementsByClassName("i").length
            }), E.getById = e(function(a) {
                return N.appendChild(a).id = aa,
                !c.getElementsByName || !c.getElementsByName(aa).length
            }), E.getById ? (m.find.ID = function(a, b) {
                if ("undefined" !== typeof b.getElementById && G) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            },
            m.filter.ID = function(a) {
                var b = a.replace(ba, va);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete m.find.ID, m.filter.ID = function(a) {
                var b = a.replace(ba, va);
                return function(a) {
                    return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                }
            }), m.find.TAG = E.getElementsByTagName ?
            function(a, b) {
                return "undefined" !== typeof b.getElementsByTagName ? b.getElementsByTagName(a) : void 0
            }: function(a, b) {
                var c, d = [],
                r = 0,
                e = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = e[r++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return e
            },
            m.find.CLASS = E.getElementsByClassName &&
            function(a, b) {
                return "undefined" !== typeof b.getElementsByClassName && G ? b.getElementsByClassName(a) : void 0
            },
            ea = [], M = [], (E.qsa = Pa.test(c.querySelectorAll)) && (e(function(a) {
                a.innerHTML = "\x3cselect msallowclip\x3d''\x3e\x3coption selected\x3d''\x3e\x3c/option\x3e\x3c/select\x3e";
                a.querySelectorAll("[msallowclip^\x3d'']").length && M.push("[*^$]\x3d[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll("[selected]").length || M.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll(":checked").length || M.push(":checked")
            }), e(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden");
                a.appendChild(b).setAttribute("name", "D");
                a.querySelectorAll("[name\x3dd]").length && M.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?\x3d");
                a.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                M.push(",.*:")
            })), (E.matchesSelector = Pa.test(ma = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && e(function(a) {
                E.disconnectedMatch = ma.call(a, "div");
                ma.call(a, "[s!\x3d'']:x");
                ea.push("!\x3d", ra)
            }), M = M.length && new RegExp(M.join("|")), ea = ea.length && new RegExp(ea.join("|")), b = Pa.test(N.compareDocumentPosition), w = b || Pa.test(N.contains) ?
            function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement: a,
                d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }: function(a, b) {
                if (b) for (; b = b.parentNode;) if (b === a) return ! 0;
                return ! 1
            },
            Ga = b ?
            function(a, b) {
                if (a === b) return fa = !0,
                0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d: (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !E.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === x && w(x, a) ? -1 : b === c || b.ownerDocument === x && w(x, b) ? 1 : t ? U.call(t, a) - U.call(t, b) : 0 : 4 & d ? -1 : 1)
            }: function(a, b) {
                if (a === b) return fa = !0,
                0;
                var d, r = 0;
                d = a.parentNode;
                var e = b.parentNode,
                v = [a],
                f = [b];
                if (!d || !e) return a === c ? -1 : b === c ? 1 : d ? -1 : e ? 1 : t ? U.call(t, a) - U.call(t, b) : 0;
                if (d === e) return n(a, b);
                for (d = a; d = d.parentNode;) v.unshift(d);
                for (d = b; d = d.parentNode;) f.unshift(d);
                for (; v[r] === f[r];) r++;
                return r ? n(v[r], f[r]) : v[r] === x ? -1 : f[r] === x ? 1 : 0
            },
            c) : Z
        };
        b.matches = function(a, c) {
            return b(a, null, null, c)
        };
        b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== Z && u(a), c = c.replace(Da, "\x3d'$1']"), !(!E.matchesSelector || !G || ea && ea.test(c) || M && M.test(c))) try {
                var d = ma.call(a, c);
                if (d || E.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch(r) {}
            return 0 < b(c, Z, null, [a]).length
        };
        b.contains = function(a, b) {
            return (a.ownerDocument || a) !== Z && u(a),
            w(a, b)
        };
        b.attr = function(a, b) { (a.ownerDocument || a) !== Z && u(a);
            var c = m.attrHandle[b.toLowerCase()],
            c = c && F.call(m.attrHandle, b.toLowerCase()) ? c(a, b, !G) : void 0;
            return void 0 !== c ? c: E.attributes || !G ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value: null
        };
        b.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        b.uniqueSort = function(a) {
            var b, c = [],
            d = 0,
            r = 0;
            if (fa = !E.detectDuplicates, t = !E.sortStable && a.slice(0), a.sort(Ga), fa) {
                for (; b = a[r++];) b === a[r] && (d = c.push(r));
                for (; d--;) a.splice(c[d], 1)
            }
            return t = null,
            a
        };
        q = b.getText = function(a) {
            var b, c = "",
            d = 0;
            if (b = a.nodeType) if (1 === b || 9 === b || 11 === b) {
                if ("string" == typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += q(a)
            } else {
                if (3 === b || 4 === b) return a.nodeValue
            } else for (; b = a[d++];) c += q(b);
            return c
        };
        m = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: Oa,
            attrHandle: {},
            find: {},
            relative: {
                "\x3e": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, va),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ba, va),
                    "~\x3d" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return Oa.CHILD.test(a[0]) ? null: (a[3] ? a[2] = a[4] || a[5] || "": c && X.test(c) && (b = B(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, va).toLowerCase();
                    return "*" === a ?
                    function() {
                        return ! 0
                    }: function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = ta[a + " "];
                    return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && ta(a,
                    function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(r) {
                        r = b.attr(r, a);
                        return null == r ? "!\x3d" === c: c ? (r += "", "\x3d" === c ? r === d: "!\x3d" === c ? r !== d: "^\x3d" === c ? d && 0 === r.indexOf(d) : "*\x3d" === c ? d && -1 < r.indexOf(d) : "$\x3d" === c ? d && r.slice( - d.length) === d: "~\x3d" === c ? -1 < (" " + r + " ").indexOf(d) : "|\x3d" === c ? r === d || r.slice(0, d.length + 1) === d + "-": !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, r) {
                    var e = "nth" !== a.slice(0, 3),
                    v = "last" !== a.slice( - 4),
                    f = "of-type" === b;
                    return 1 === d && 0 === r ?
                    function(a) {
                        return !! a.parentNode
                    }: function(b, c, H) {
                        var D, n, g, l, Q;
                        c = e !== v ? "nextSibling": "previousSibling";
                        var y = b.parentNode,
                        Ya = f && b.nodeName.toLowerCase();
                        H = !H && !f;
                        if (y) {
                            if (e) {
                                for (; c;) {
                                    for (n = b; n = n[c];) if (f ? n.nodeName.toLowerCase() === Ya: 1 === n.nodeType) return ! 1;
                                    Q = c = "only" === a && !Q && "nextSibling"
                                }
                                return ! 0
                            }
                            if (Q = [v ? y.firstChild: y.lastChild], v && H) for (H = y[aa] || (y[aa] = {}), D = H[a] || [], l = D[0] === A && D[1], g = D[0] === A && D[2], n = l && y.childNodes[l]; n = ++l && n && n[c] || (g = l = 0) || Q.pop();) {
                                if (1 === n.nodeType && ++g && n === b) {
                                    H[a] = [A, l, g];
                                    break
                                }
                            } else if (H && (D = (b[aa] || (b[aa] = {}))[a]) && D[0] === A) g = D[1];
                            else for (; (n = ++l && n && n[c] || (g = l = 0) || Q.pop()) && ((f ? n.nodeName.toLowerCase() !== Ya: 1 !== n.nodeType) || !++g || (H && ((n[aa] || (n[aa] = {}))[a] = [A, g]), n !== b)););
                            return g -= r,
                            g === d || 0 === g % d && 0 <= g / d
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var r, e = m.pseudos[a] || m.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return e[aa] ? e(c) : 1 < e.length ? (r = [a, a, "", c], m.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, r = e(a, c), v = r.length; v--;) d = U.call(a, r[v]),
                        a[d] = !(b[d] = r[v])
                    }) : function(a) {
                        return e(a, 0, r)
                    }) : e
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                    c = [],
                    r = ca(a.replace(P, "$1"));
                    return r[aa] ? d(function(a, b, c, d) {
                        var e;
                        c = r(a, null, d, []);
                        for (d = a.length; d--;)(e = c[d]) && (a[d] = !(b[d] = e))
                    }) : function(a, d, e) {
                        return b[0] = a,
                        r(b, null, e, c),
                        !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return 0 < b(a, c).length
                    }
                }),
                contains: d(function(a) {
                    return function(b) {
                        return - 1 < (b.textContent || b.innerText || q(b)).indexOf(a)
                    }
                }),
                lang: d(function(a) {
                    return Y.test(a || "") || b.error("unsupported lang: " + a),
                    a = a.replace(ba, va).toLowerCase(),
                    function(b) {
                        var c;
                        do
                        if (c = G ? b.lang: b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(),
                        c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return ! 1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === N
                },
                focus: function(a) {
                    return a === Z.activeElement && (!Z.hasFocus || Z.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return ! 1 === a.disabled
                },
                disabled: function(a) {
                    return ! 0 === a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (6 > a.nodeType) return ! 1;
                    return ! 0
                },
                parent: function(a) {
                    return ! m.pseudos.empty(a)
                },
                header: function(a) {
                    return ja.test(a.nodeName)
                },
                input: function(a) {
                    return da.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: D(function() {
                    return [0]
                }),
                last: D(function(a, b) {
                    return [b - 1]
                }),
                eq: D(function(a, b, c) {
                    return [0 > c ? c + b: c]
                }),
                even: D(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: D(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: D(function(a, b, c) {
                    for (b = 0 > c ? c + b: c; 0 <= --b;) a.push(b);
                    return a
                }),
                gt: D(function(a, b, c) {
                    for (c = 0 > c ? c + b: c; ++c < b;) a.push(c);
                    return a
                })
            }
        };
        m.pseudos.nth = m.pseudos.eq;
        for (p in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) m.pseudos[p] = r(p);
        for (p in {
            submit: !0,
            reset: !0
        }) m.pseudos[p] = v(p);
        l.prototype = m.filters = m.pseudos;
        m.setFilters = new l;
        B = b.tokenize = function(a, c) {
            var d, r, e, v, f, H, D;
            if (f = la[a + " "]) return c ? 0 : f.slice(0);
            f = a;
            H = [];
            for (D = m.preFilter; f;) {
                d && !(r = S.exec(f)) || (r && (f = f.slice(r[0].length) || f), H.push(e = []));
                d = !1; (r = oa.exec(f)) && (d = r.shift(), e.push({
                    value: d,
                    type: r[0].replace(P, " ")
                }), f = f.slice(d.length));
                for (v in m.filter) ! (r = Oa[v].exec(f)) || D[v] && !(r = D[v](r)) || (d = r.shift(), e.push({
                    value: d,
                    type: v,
                    matches: r
                }), f = f.slice(d.length));
                if (!d) break
            }
            return c ? f.length: f ? b.error(a) : la(a, H).slice(0)
        };
        return ca = b.compile = function(a, b) {
            var c, d = [],
            r = [],
            e = K[a + " "];
            if (!e) {
                b || (b = B(a));
                for (c = b.length; c--;) e = z(b[c]),
                e[aa] ? d.push(e) : r.push(e);
                e = K(a, O(r, d));
                e.selector = a
            }
            return e
        },
        J = b.select = function(a, b, c, d) {
            var r, e, v, f, H, D = "function" == typeof a && a,
            n = !d && B(a = D.selector || a);
            if (c = c || [], 1 === n.length) {
                if (e = n[0] = n[0].slice(0), 2 < e.length && "ID" === (v = e[0]).type && E.getById && 9 === b.nodeType && G && m.relative[e[1].type]) {
                    if (b = (m.find.ID(v.matches[0].replace(ba, va), b) || [])[0], !b) return c;
                    D && (b = b.parentNode);
                    a = a.slice(e.shift().value.length)
                }
                for (r = Oa.needsContext.test(a) ? 0 : e.length; r--&&(v = e[r], !m.relative[f = v.type]);) if ((H = m.find[f]) && (d = H(v.matches[0].replace(ba, va), ia.test(e[0].type) && g(b.parentNode) || b))) {
                    if (e.splice(r, 1), a = d.length && L(e), !a) return qa.apply(c, d),
                    c;
                    break
                }
            }
            return (D || ca(a, n))(d, b, !G, c, ia.test(a) && g(b.parentNode) || b),
            c
        },
        E.sortStable = aa.split("").sort(Ga).join("") === aa,
        E.detectDuplicates = !!fa,
        u(),
        E.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(Z.createElement("div"))
        }),
        e(function(a) {
            return a.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e",
            "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width",
        function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        E.attributes && e(function(a) {
            return a.innerHTML = "\x3cinput/\x3e",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || f("value",
        function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        function(a, b, c) {
            var d;
            return c ? void 0 : !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value: null
        }),
        b
    } (b);
    l.find = Fa;
    l.expr = Fa.selectors;
    l.expr[":"] = l.expr.pseudos;
    l.unique = Fa.uniqueSort;
    l.text = Fa.getText;
    l.isXMLDoc = Fa.isXML;
    l.contains = Fa.contains;
    var Oa = l.expr.match.needsContext,
    vb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    Gb = /^.[^:#\[\.,]*$/;
    l.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? l.find.matchesSelector(d, a) ? [d] : [] : l.find.matches(a, l.grep(b,
        function(a) {
            return 1 === a.nodeType
        }))
    };
    l.fn.extend({
        find: function(a) {
            var b, c = this.length,
            d = [],
            e = this;
            if ("string" != typeof a) return this.pushStack(l(a).filter(function() {
                for (b = 0; c > b; b++) if (l.contains(e[b], this)) return ! 0
            }));
            for (b = 0; c > b; b++) l.find(a, e[b], d);
            return d = this.pushStack(1 < c ? l.unique(d) : d),
            d.selector = this.selector ? this.selector + " " + a: a,
            d
        },
        filter: function(a) {
            return this.pushStack(m(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(m(this, a || [], !0))
        },
        is: function(a) {
            return !! m(this, "string" == typeof a && Oa.test(a) ? l(a) : a || [], !1).length
        }
    });
    var $a, Jb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/; (l.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "\x3c" === a[0] && "\x3e" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : Jb.exec(a), !c || !c[1] && b) return ! b || b.jquery ? (b || $a).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof l ? b[0] : b, l.merge(this, l.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b: K, !0)), vb.test(c[1]) && l.isPlainObject(b)) for (c in b) l.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = K.getElementById(c[2]),
            d && d.parentNode && (this.length = 1, this[0] = d),
            this.context = K,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : l.isFunction(a) ? "undefined" != typeof $a.ready ? $a.ready(a) : a(l) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), l.makeArray(a, this))
    }).prototype = l.fn;
    $a = l(K);
    var Pa = /^(?:parents|prev(?:Until|All))/,
    hb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    l.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType;) if (1 === a.nodeType) {
                if (e && l(a).is(c)) break;
                d.push(a)
            }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    l.fn.extend({
        has: function(a) {
            var b = l(a, this),
            c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (l.contains(this, b[a])) return ! 0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0,
            e = this.length,
            f = [], n = Oa.test(a) || "string" != typeof a ? l(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (11 > c.nodeType && (n ? -1 < n.index(c) : 1 === c.nodeType && l.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(1 < f.length ? l.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? Ia.call(l(a), this[0]) : Ia.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(a, b) {
            return this.pushStack(l.unique(l.merge(this.get(), l(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject: this.prevObject.filter(a))
        }
    });
    l.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a: null
        },
        parents: function(a) {
            return l.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return l.dir(a, "parentNode", c)
        },
        next: function(a) {
            return g(a, "nextSibling")
        },
        prev: function(a) {
            return g(a, "previousSibling")
        },
        nextAll: function(a) {
            return l.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return l.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return l.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return l.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return l.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return l.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || l.merge([], a.childNodes)
        }
    },
    function(a, b) {
        l.fn[a] = function(c, d) {
            var e = l.map(this, b, c);
            return "Until" !== a.slice( - 5) && (d = c),
            d && "string" == typeof d && (e = l.filter(d, e)),
            1 < this.length && (hb[a] || l.unique(e), Pa.test(a) && e.reverse()),
            this.pushStack(e)
        }
    });
    var ya = /\S+/g,
    fb = {};
    l.Callbacks = function(a) {
        a = "string" == typeof a ? fb[a] || p(a) : l.extend({},
        a);
        var b, c, d, e, f, n, r = [],
        v = !a.once && [],
        D = function(l) {
            b = a.memory && l;
            c = !0;
            n = e || 0;
            e = 0;
            f = r.length;
            for (d = !0; r && f > n; n++) if (!1 === r[n].apply(l[0], l[1]) && a.stopOnFalse) {
                b = !1;
                break
            }
            d = !1;
            r && (v ? v.length && D(v.shift()) : b ? r = [] : g.disable())
        },
        g = {
            add: function() {
                if (r) {
                    var c = r.length; !
                    function pa(b) {
                        l.each(b,
                        function(b, c) {
                            var d = l.type(c);
                            "function" === d ? a.unique && g.has(c) || r.push(c) : c && c.length && "string" !== d && pa(c)
                        })
                    } (arguments);
                    d ? f = r.length: b && (e = c, D(b))
                }
                return this
            },
            remove: function() {
                return r && l.each(arguments,
                function(a, b) {
                    for (var c; - 1 < (c = l.inArray(b, r, c));) r.splice(c, 1),
                    d && (f >= c && f--, n >= c && n--)
                }),
                this
            },
            has: function(a) {
                return a ? -1 < l.inArray(a, r) : !(!r || !r.length)
            },
            empty: function() {
                return r = [],
                f = 0,
                this
            },
            disable: function() {
                return r = v = b = void 0,
                this
            },
            disabled: function() {
                return ! r
            },
            lock: function() {
                return v = void 0,
                b || g.disable(),
                this
            },
            locked: function() {
                return ! v
            },
            fireWith: function(a, b) {
                return ! r || c && !v || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? v.push(b) : D(b)),
                this
            },
            fire: function() {
                return g.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! c
            }
        };
        return g
    };
    l.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", l.Callbacks("once memory"), "resolved"], ["reject", "fail", l.Callbacks("once memory"), "rejected"], ["notify", "progress", l.Callbacks("memory")]],
            c = "pending",
            d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return l.Deferred(function(c) {
                        l.each(b,
                        function(b, v) {
                            var f = l.isFunction(a[b]) && a[b];
                            e[v[1]](function() {
                                var a = f && f.apply(this, arguments);
                                a && l.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[v[0] + "With"](this === d ? c.promise() : this, f ? [a] : arguments)
                            })
                        });
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? l.extend(a, d) : d
                }
            },
            e = {};
            return d.pipe = d.then,
            l.each(b,
            function(a, f) {
                var r = f[2],
                v = f[3];
                d[f[1]] = r.add;
                v && r.add(function() {
                    c = v
                },
                b[1 ^ a][2].disable, b[2][2].lock);
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d: this, arguments),
                    this
                };
                e[f[0] + "With"] = r.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0,
            c = ta.call(arguments),
            d = c.length,
            e = 1 !== d || a && l.isFunction(a.promise) ? d: 0,
            f = 1 === e ? a: l.Deferred(),
            n = function(a, b, c) {
                return function(d) {
                    b[a] = this;
                    c[a] = 1 < arguments.length ? ta.call(arguments) : d;
                    c === r ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
                }
            },
            r,
            v,
            D;
            if (1 < d) for (r = Array(d), v = Array(d), D = Array(d); d > b; b++) c[b] && l.isFunction(c[b].promise) ? c[b].promise().done(n(b, D, c)).fail(f.reject).progress(n(b, v, r)) : --e;
            return e || f.resolveWith(D, c),
            f.promise()
        }
    });
    var ab;
    l.fn.ready = function(a) {
        return l.ready.promise().done(a),
        this
    };
    l.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? l.readyWait++:l.ready(!0)
        },
        ready: function(a) { (!0 === a ? --l.readyWait: l.isReady) || (l.isReady = !0, !0 !== a && 0 < --l.readyWait || (ab.resolveWith(K, [l]), l.fn.triggerHandler && (l(K).triggerHandler("ready"), l(K).off("ready"))))
        }
    });
    l.ready.promise = function(a) {
        return ab || (ab = l.Deferred(), "complete" === K.readyState ? setTimeout(l.ready) : (K.addEventListener("DOMContentLoaded", q, !1), b.addEventListener("load", q, !1))),
        ab.promise(a)
    };
    l.ready.promise();
    var Ja = l.access = function(a, b, c, d, e, f, n) {
        var r = 0,
        v = a.length,
        D = null == c;
        if ("object" === l.type(c)) for (r in e = !0, c) l.access(a, b, r, c[r], !0, f, n);
        else if (void 0 !== d && (e = !0, l.isFunction(d) || (n = !0), D && (n ? (b.call(a, d), b = null) : (D = b, b = function(a, b, c) {
            return D.call(l(a), c)
        })), b)) for (; v > r; r++) b(a[r], c, n ? d: d.call(a[r], r, b(a[r], c)));
        return e ? a: D ? b.call(a) : v ? b(a[0], c) : f
    };
    l.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    s.uid = 1;
    s.accepts = l.acceptData;
    s.prototype = {
        key: function(a) {
            if (!s.accepts(a)) return 0;
            var b = {},
            c = a[this.expando];
            if (!c) {
                c = s.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    },
                    Object.defineProperties(a, b)
                } catch(d) {
                    b[this.expando] = c,
                    l.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}),
            c
        },
        set: function(a, b, c) {
            var d;
            a = this.key(a);
            var e = this.cache[a];
            if ("string" == typeof b) e[b] = c;
            else if (l.isEmptyObject(e)) l.extend(this.cache[a], b);
            else for (d in b) e[d] = b[d];
            return e
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c: c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d: this.get(a, l.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c: b)
        },
        remove: function(a, b) {
            var c, d, e = this.key(a),
            f = this.cache[e];
            if (void 0 === b) this.cache[e] = {};
            else for (l.isArray(b) ? d = b.concat(b.map(l.camelCase)) : (c = l.camelCase(b), b in f ? d = [b, c] : (d = c, d = d in f ? [d] : d.match(ya) || [])), c = d.length; c--;) delete f[d[c]]
        },
        hasData: function(a) {
            return ! l.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var S = new s,
    ba = new s,
    za = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Hb = /([A-Z])/g;
    l.extend({
        hasData: function(a) {
            return ba.hasData(a) || S.hasData(a)
        },
        data: function(a, b, c) {
            return ba.access(a, b, c)
        },
        removeData: function(a, b) {
            ba.remove(a, b)
        },
        _data: function(a, b, c) {
            return S.access(a, b, c)
        },
        _removeData: function(a, b) {
            S.remove(a, b)
        }
    });
    l.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
            n = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = ba.get(f), 1 === f.nodeType && !S.get(f, "hasDataAttrs"))) {
                    for (c = n.length; c--;) n[c] && (d = n[c].name, 0 === d.indexOf("data-") && (d = l.camelCase(d.slice(5)), t(f, d, e[d])));
                    S.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                ba.set(this, a)
            }) : Ja(this,
            function(b) {
                var c, d = l.camelCase(a);
                if (f && void 0 === b) {
                    if ((c = ba.get(f, a), void 0 !== c) || (c = ba.get(f, d), void 0 !== c) || (c = t(f, d, void 0), void 0 !== c)) return c
                } else this.each(function() {
                    var c = ba.get(this, d);
                    ba.set(this, d, b); - 1 !== a.indexOf("-") && void 0 !== c && ba.set(this, a, b)
                })
            },
            null, b, 1 < arguments.length, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                ba.remove(this, a)
            })
        }
    });
    l.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = S.get(a, b), c && (!d || l.isArray(c) ? d = S.access(a, b, l.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = l.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = l._queueHooks(a, b),
            n = function() {
                l.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--);
            e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, n, f)); ! d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return S.get(a, c) || S.access(a, c, {
                empty: l.Callbacks("once memory").add(function() {
                    S.remove(a, [b + "queue", c])
                })
            })
        }
    });
    l.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--),
            arguments.length < c ? l.queue(this[0], a) : void 0 === b ? this: this.each(function() {
                var c = l.queue(this, a, b);
                l._queueHooks(this, a);
                "fx" === a && "inprogress" !== c[0] && l.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                l.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
            e = l.Deferred(),
            f = this,
            n = this.length,
            r = function() {--d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0);
            for (a = a || "fx"; n--;)(c = S.get(f[n], a + "queueHooks")) && c.empty && (d++, c.empty.add(r));
            return r(),
            e.promise(b)
        }
    });
    var Qa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    sa = ["Top", "Right", "Bottom", "Left"],
    Sa = function(a, b) {
        return a = b || a,
        "none" === l.css(a, "display") || !l.contains(a.ownerDocument, a)
    },
    ib = /^(?:checkbox|radio)$/i; !
    function() {
        var a = K.createDocumentFragment().appendChild(K.createElement("div")),
        b = K.createElement("input");
        b.setAttribute("type", "radio");
        b.setAttribute("checked", "checked");
        b.setAttribute("name", "t");
        a.appendChild(b);
        V.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
        a.innerHTML = "\x3ctextarea\x3ex\x3c/textarea\x3e";
        V.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue
    } ();
    V.focusinBubbles = "onfocusin" in b;
    var Kb = /^key/,
    Lb = /^(?:mouse|pointer|contextmenu)|click/,
    wb = /^(?:focusinfocus|focusoutblur)$/,
    xb = /^([^.]*)(?:\.(.+)|)$/;
    l.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, n, r, v, D, g, y, L, pa, h;
            if (D = S.get(a)) for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = l.guid++), (v = D.events) || (v = D.events = {}), (n = D.handle) || (n = D.handle = function(b) {
                return "undefined" !== typeof l && l.event.triggered !== b.type ? l.event.dispatch.apply(a, arguments) : void 0
            }), b = (b || "").match(ya) || [""], D = b.length; D--;) r = xb.exec(b[D]) || [],
            pa = h = r[1],
            r = (r[2] || "").split(".").sort(),
            pa && (y = l.event.special[pa] || {},
            pa = (e ? y.delegateType: y.bindType) || pa, y = l.event.special[pa] || {},
            g = l.extend({
                type: pa,
                origType: h,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && l.expr.match.needsContext.test(e),
                namespace: r.join(".")
            },
            f), (L = v[pa]) || (L = v[pa] = [], L.delegateCount = 0, y.setup && !1 !== y.setup.call(a, d, r, n) || a.addEventListener && a.addEventListener(pa, n, !1)), y.add && (y.add.call(a, g), g.handler.guid || (g.handler.guid = c.guid)), e ? L.splice(L.delegateCount++, 0, g) : L.push(g), l.event.global[pa] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, n, r, v, D, g, y, L, h, k, C, z = S.hasData(a) && S.get(a);
            if (z && (v = z.events)) {
                b = (b || "").match(ya) || [""];
                for (D = b.length; D--;) if (r = xb.exec(b[D]) || [], h = C = r[1], k = (r[2] || "").split(".").sort(), h) {
                    y = l.event.special[h] || {};
                    h = (d ? y.delegateType: y.bindType) || h;
                    L = v[h] || [];
                    r = r[2] && new RegExp("(^|\\.)" + k.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    for (n = f = L.length; f--;) g = L[f],
                    !e && C !== g.origType || c && c.guid !== g.guid || r && !r.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (L.splice(f, 1), g.selector && L.delegateCount--, y.remove && y.remove.call(a, g));
                    n && !L.length && (y.teardown && !1 !== y.teardown.call(a, k, z.handle) || l.removeEvent(a, h, z.handle), delete v[h])
                } else for (h in v) l.event.remove(a, h + b[D], c, d, !0);
                l.isEmptyObject(v) && (delete z.handle, S.remove(a, "events"))
            }
        },
        trigger: function(a, c, d, e) {
            var f, n, g, r, v, D, Q, y = [d || K],
            L = ra.call(a, "type") ? a.type: a;
            f = ra.call(a, "namespace") ? a.namespace.split(".") : [];
            if (n = g = d = d || K, 3 !== d.nodeType && 8 !== d.nodeType && !wb.test(L + l.event.triggered) && (0 <= L.indexOf(".") && (f = L.split("."), L = f.shift(), f.sort()), v = 0 > L.indexOf(":") && "on" + L, a = a[l.expando] ? a: new l.Event(L, "object" == typeof a && a), a.isTrigger = e ? 2 : 3, a.namespace = f.join("."), a.namespace_re = a.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = d), c = null == c ? [a] : l.makeArray(c, [a]), Q = l.event.special[L] || {},
            e || !Q.trigger || !1 !== Q.trigger.apply(d, c))) {
                if (!e && !Q.noBubble && !l.isWindow(d)) {
                    r = Q.delegateType || L;
                    for (wb.test(r + L) || (n = n.parentNode); n; n = n.parentNode) y.push(n),
                    g = n;
                    g === (d.ownerDocument || K) && y.push(g.defaultView || g.parentWindow || b)
                }
                for (f = 0; (n = y[f++]) && !a.isPropagationStopped();) a.type = 1 < f ? r: Q.bindType || L,
                (D = (S.get(n, "events") || {})[a.type] && S.get(n, "handle")) && D.apply(n, c),
                (D = v && n[v]) && D.apply && l.acceptData(n) && (a.result = D.apply(n, c), !1 === a.result && a.preventDefault());
                return a.type = L,
                e || a.isDefaultPrevented() || Q._default && !1 !== Q._default.apply(y.pop(), c) || !l.acceptData(d) || v && l.isFunction(d[L]) && !l.isWindow(d) && (g = d[v], g && (d[v] = null), l.event.triggered = L, d[L](), l.event.triggered = void 0, g && (d[v] = g)),
                a.result
            }
        },
        dispatch: function(a) {
            a = l.event.fix(a);
            var b, c, d, e, f, n = [],
            r = ta.call(arguments);
            b = (S.get(this, "events") || {})[a.type] || [];
            var v = l.event.special[a.type] || {};
            if (r[0] = a, a.delegateTarget = this, !v.preDispatch || !1 !== v.preDispatch.call(this, a)) {
                n = l.event.handlers.call(this, a, b);
                for (b = 0; (e = n[b++]) && !a.isPropagationStopped();) for (a.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();) a.namespace_re && !a.namespace_re.test(f.namespace) || (a.handleObj = f, a.data = f.data, d = ((l.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, r), void 0 === d || !1 !== (a.result = d) || (a.preventDefault(), a.stopPropagation()));
                return v.postDispatch && v.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, n = [],
            r = b.delegateCount,
            v = a.target;
            if (r && v.nodeType && (!a.button || "click" !== a.type)) for (; v !== this; v = v.parentNode || this) if (!0 !== v.disabled || "click" !== a.type) {
                d = [];
                for (c = 0; r > c; c++) f = b[c],
                e = f.selector + " ",
                void 0 === d[e] && (d[e] = f.needsContext ? 0 <= l(e, this).index(v) : l.find(e, this, null, [v]).length),
                d[e] && d.push(f);
                d.length && n.push({
                    elem: v,
                    handlers: d
                })
            }
            return r < b.length && n.push({
                elem: this,
                handlers: b.slice(r)
            }),
            n
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode: b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || K, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                a
            }
        },
        fix: function(a) {
            if (a[l.expando]) return a;
            var b, c, d;
            b = a.type;
            var e = a,
            f = this.fixHooks[b];
            f || (this.fixHooks[b] = f = Lb.test(b) ? this.mouseHooks: Kb.test(b) ? this.keyHooks: {});
            d = f.props ? this.props.concat(f.props) : this.props;
            a = new l.Event(e);
            for (b = d.length; b--;) c = d[b],
            a[c] = e[c];
            return a.target || (a.target = K),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            f.filter ? f.filter(a, e) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== u() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === u() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && l.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return l.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            a = l.extend(new l.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? l.event.trigger(a, null, b) : l.event.dispatch.call(b, a);
            a.isDefaultPrevented() && c.preventDefault()
        }
    };
    l.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };
    l.Event = function(a, b) {
        return this instanceof l.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? A: w) : this.type = a, b && l.extend(this, b), this.timeStamp = a && a.timeStamp || l.now(), void(this[l.expando] = !0)) : new l.Event(a, b)
    };
    l.Event.prototype = {
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = A;
            a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = A;
            a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = A;
            a && a.stopImmediatePropagation && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    l.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(a, b) {
        l.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = a.relatedTarget,
                e = a.handleObj;
                return (!d || d !== this && !l.contains(this, d)) && (a.type = e.origType, c = e.handler.apply(this, arguments), a.type = b),
                c
            }
        }
    });
    V.focusinBubbles || l.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(a, b) {
        var c = function(a) {
            l.event.simulate(b, a.target, l.event.fix(a), !0)
        };
        l.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                e = S.access(d, b);
                e || d.addEventListener(a, c, !0);
                S.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                e = S.access(d, b) - 1;
                e ? S.access(d, b, e) : (d.removeEventListener(a, c, !0), S.remove(d, b))
            }
        }
    });
    l.fn.extend({
        on: function(a, b, c, d, e) {
            var f, n;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (n in a) this.on(n, b, c, a[n], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), !1 === d) d = w;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return l().off(a),
                f.apply(this, arguments)
            },
            d.guid = f.guid || (f.guid = l.guid++)),
            this.each(function() {
                l.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj,
            l(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace: d.origType, d.selector, d.handler),
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (!1 === b || "function" == typeof b) && (c = b, b = void 0),
            !1 === c && (c = w),
            this.each(function() {
                l.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                l.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? l.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    yb = /<([\w:]+)/,
    Va = /<|&#?\w+;/,
    Mb = /<(?:script|style|link)/i,
    Nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
    jb = /^$|\/(?:java|ecma)script/i,
    sb = /^true\/(.*)/,
    kb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Aa = {
        option: [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"],
        thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"],
        col: [2, "\x3ctable\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"],
        tr: [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"],
        td: [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],
        _default: [0, "", ""]
    };
    Aa.optgroup = Aa.option;
    Aa.tbody = Aa.tfoot = Aa.colgroup = Aa.caption = Aa.thead;
    Aa.th = Aa.td;
    l.extend({
        clone: function(b, d, e) {
            var f, n, g, h, r = b.cloneNode(!0),
            v = l.contains(b.ownerDocument, b);
            if (! (V.noCloneChecked || 1 !== b.nodeType && 11 !== b.nodeType || l.isXMLDoc(b))) for (h = c(r), g = c(b), f = 0, n = g.length; n > f; f++) {
                var D = g[f],
                Q = h[f],
                y = Q.nodeName.toLowerCase();
                "input" === y && ib.test(D.type) ? Q.checked = D.checked: ("input" === y || "textarea" === y) && (Q.defaultValue = D.defaultValue)
            }
            if (d) if (e) for (g = g || c(b), h = h || c(r), f = 0, n = g.length; n > f; f++) a(g[f], h[f]);
            else a(b, r);
            return h = c(r, "script"),
            0 < h.length && R(h, !v && c(b, "script")),
            r
        },
        buildFragment: function(a, b, d, e) {
            for (var f, n, g, r, v = b.createDocumentFragment(), D = [], Q = 0, y = a.length; y > Q; Q++) if (f = a[Q], f || 0 === f) if ("object" === l.type(f)) l.merge(D, f.nodeType ? [f] : f);
            else if (Va.test(f)) {
                n = n || v.appendChild(b.createElement("div"));
                g = (yb.exec(f) || ["", ""])[1].toLowerCase();
                g = Aa[g] || Aa._default;
                n.innerHTML = g[1] + f.replace(Y, "\x3c$1\x3e\x3c/$2\x3e") + g[2];
                for (g = g[0]; g--;) n = n.lastChild;
                l.merge(D, n.childNodes);
                n = v.firstChild;
                n.textContent = ""
            } else D.push(b.createTextNode(f));
            v.textContent = "";
            for (Q = 0; f = D[Q++];) if ((!e || -1 === l.inArray(f, e)) && (r = l.contains(f.ownerDocument, f), n = c(v.appendChild(f), "script"), r && R(n), d)) for (g = 0; f = n[g++];) jb.test(f.type || "") && d.push(f);
            return v
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = l.event.special,
            n = 0; void 0 !== (c = a[n]); n++) {
                if (l.acceptData(c) && (e = c[S.expando], e && (b = S.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? l.event.remove(c, d) : l.removeEvent(c, d, b.handle);
                    S.cache[e] && delete S.cache[e]
                }
                delete ba.cache[c[ba.expando]]
            }
        }
    });
    l.fn.extend({
        text: function(a) {
            return Ja(this,
            function(a) {
                return void 0 === a ? l.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            },
            null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || x(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = x(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var d, e = a ? l.filter(a, this) : this, f = 0; null != (d = e[f]); f++) b || 1 !== d.nodeType || l.cleanData(c(d)),
            d.parentNode && (b && l.contains(d.ownerDocument, d) && R(c(d, "script")), d.parentNode.removeChild(d));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (l.cleanData(c(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a: b,
            this.map(function() {
                return l.clone(this, a, b)
            })
        },
        html: function(a) {
            return Ja(this,
            function(a) {
                var b = this[0] || {},
                d = 0,
                e = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Mb.test(a) && !Aa[(yb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Y, "\x3c$1\x3e\x3c/$2\x3e");
                    try {
                        for (; e > d; d++) b = this[d] || {},
                        1 === b.nodeType && (l.cleanData(c(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch(f) {}
                }
                b && this.empty().append(a)
            },
            null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments,
            function(b) {
                a = this.parentNode;
                l.cleanData(c(this));
                a && a.replaceChild(b, this)
            }),
            a && (a.length || a.nodeType) ? this: this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = Ga.apply([], a);
            var d, e, f, n, g = 0,
            r = this.length,
            v = this,
            D = r - 1,
            Q = a[0],
            y = l.isFunction(Q);
            if (y || 1 < r && "string" == typeof Q && !V.checkClone && Nb.test(Q)) return this.each(function(c) {
                var d = v.eq(c);
                y && (a[0] = Q.call(this, c, d.html()));
                d.domManip(a, b)
            });
            if (r && (d = l.buildFragment(a, this[0].ownerDocument, !1, this), e = d.firstChild, 1 === d.childNodes.length && (d = e), e)) {
                e = l.map(c(d, "script"), U);
                for (f = e.length; r > g; g++) n = d,
                g !== D && (n = l.clone(n, !0, !0), f && l.merge(e, c(n, "script"))),
                b.call(this[g], n, g);
                if (f) for (d = e[e.length - 1].ownerDocument, l.map(e, I), g = 0; f > g; g++) n = e[g],
                jb.test(n.type || "") && !S.access(n, "globalEval") && l.contains(d, n) && (n.src ? l._evalUrl && l._evalUrl(n.src) : l.globalEval(n.textContent.replace(kb, "")))
            }
            return this
        }
    });
    l.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(a, b) {
        l.fn[a] = function(a) {
            for (var c = [], d = l(a), e = d.length - 1, f = 0; e >= f; f++) a = f === e ? this: this.clone(!0),
            l(d[f])[b](a),
            ua.apply(c, a.get());
            return this.pushStack(c)
        }
    });
    var Ra, tb = {},
    Za = /^margin/,
    Ma = new RegExp("^(" + Qa + ")(?!px)[a-z%]+$", "i"),
    xa = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }; !
    function() {
        var a, c, d = K.documentElement,
        e = K.createElement("div"),
        f = K.createElement("div");
        if (f.style) {
            var n = function() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
                f.innerHTML = "";
                d.appendChild(e);
                var n = b.getComputedStyle(f, null);
                a = "1%" !== n.top;
                c = "4px" === n.width;
                d.removeChild(e)
            };
            f.style.backgroundClip = "content-box";
            f.cloneNode(!0).style.backgroundClip = "";
            V.clearCloneStyle = "content-box" === f.style.backgroundClip;
            e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute";
            e.appendChild(f);
            b.getComputedStyle && l.extend(V, {
                pixelPosition: function() {
                    return n(),
                    a
                },
                boxSizingReliable: function() {
                    return null == c && n(),
                    c
                },
                reliableMarginRight: function() {
                    var a, c = f.appendChild(K.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    c.style.marginRight = c.style.width = "0",
                    f.style.width = "1px",
                    d.appendChild(e),
                    a = !parseFloat(b.getComputedStyle(c, null).marginRight),
                    d.removeChild(e),
                    a
                }
            })
        }
    } ();
    l.swap = function(a, b, c, d) {
        var e, f = {};
        for (e in b) f[e] = a.style[e],
        a.style[e] = b[e];
        c = c.apply(a, d || []);
        for (e in b) a.style[e] = f[e];
        return c
    };
    var Ob = /^(none|table(?!-c[ea]).+)/,
    ub = new RegExp("^(" + Qa + ")(.*)$", "i"),
    wa = new RegExp("^([+-])\x3d(" + Qa + ")", "i"),
    ja = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    lb = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    gb = ["Webkit", "O", "Moz", "ms"];
    l.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = f(a, "opacity");
                        return "" === c ? "1": c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, n, r = l.camelCase(b),
                v = a.style;
                return b = l.cssProps[r] || (l.cssProps[r] = O(v, r)),
                n = l.cssHooks[b] || l.cssHooks[r],
                void 0 === c ? n && "get" in n && void 0 !== (e = n.get(a, !1, d)) ? e: v[b] : (f = typeof c, "string" === f && (e = wa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(l.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || l.cssNumber[r] || (c += "px"), V.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (v[b] = "inherit"), n && "set" in n && void 0 === (c = n.set(a, c, d)) || (v[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, n, g, r = l.camelCase(b);
            return b = l.cssProps[r] || (l.cssProps[r] = O(a.style, r)),
            g = l.cssHooks[b] || l.cssHooks[r],
            g && "get" in g && (e = g.get(a, !0, c)),
            void 0 === e && (e = f(a, b, d)),
            "normal" === e && b in lb && (e = lb[b]),
            "" === c || c ? (n = parseFloat(e), !0 === c || l.isNumeric(n) ? n || 0 : e) : e
        }
    });
    l.each(["height", "width"],
    function(a, b) {
        l.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ob.test(l.css(a, "display")) && 0 === a.offsetWidth ? l.swap(a, ja,
                function() {
                    return T(a, b, d)
                }) : T(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && xa(a);
                return C(a, c, d ? z(a, b, d, "border-box" === l.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    });
    l.cssHooks.marginRight = n(V.reliableMarginRight,
    function(a, b) {
        return b ? l.swap(a, {
            display: "inline-block"
        },
        f, [a, "marginRight"]) : void 0
    });
    l.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(a, b) {
        l.cssHooks[a + b] = {
            expand: function(c) {
                var d = 0,
                e = {};
                for (c = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + sa[d] + b] = c[d] || c[d - 2] || c[0];
                return e
            }
        };
        Za.test(a) || (l.cssHooks[a + b].set = C)
    });
    l.fn.extend({
        css: function(a, b) {
            return Ja(this,
            function(a, b, c) {
                var d, e = {},
                r = 0;
                if (l.isArray(b)) {
                    c = xa(a);
                    for (d = b.length; d > r; r++) e[b[r]] = l.css(a, b[r], !1, c);
                    return e
                }
                return void 0 !== c ? l.style(a, b, c) : l.css(a, b)
            },
            a, b, 1 < arguments.length)
        },
        show: function() {
            return ma(this, !0)
        },
        hide: function() {
            return ma(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Sa(this) ? l(this).show() : l(this).hide()
            })
        }
    });
    l.Tween = G;
    G.prototype = {
        constructor: G,
        init: function(a, b, c, d, e, f) {
            this.elem = a;
            this.prop = c;
            this.easing = e || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end = d;
            this.unit = f || (l.cssNumber[c] ? "": "px")
        },
        cur: function() {
            var a = G.propHooks[this.prop];
            return a && a.get ? a.get(this) : G.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = G.propHooks[this.prop];
            return this.pos = b = this.options.duration ? l.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : G.propHooks._default.set(this),
            this
        }
    };
    G.prototype.init.prototype = G.prototype;
    G.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = l.css(a.elem, a.prop, ""), b && "auto" !== b ? b: 0) : a.elem[a.prop]
            },
            set: function(a) {
                l.fx.step[a.prop] ? l.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[l.cssProps[a.prop]] || l.cssHooks[a.prop]) ? l.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    G.propHooks.scrollTop = G.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    l.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return.5 - Math.cos(a * Math.PI) / 2
        }
    };
    l.fx = G.prototype.init;
    l.fx.step = {};
    var na, Wa, Pb = /^(?:toggle|show|hide)$/,
    zb = new RegExp("^(?:([+-])\x3d|)(" + Qa + ")([a-z%]*)$", "i"),
    F = /queueHooks$/,
    ia = [function(a, b, c) {
        var d, f, n, g, r, v, D, Q = this,
        y = {},
        L = a.style,
        h = a.nodeType && Sa(a),
        k = S.get(a, "fxshow");
        c.queue || (g = l._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, r = g.empty.fire, g.empty.fire = function() {
            g.unqueued || r()
        }), g.unqueued++, Q.always(function() {
            Q.always(function() {
                g.unqueued--;
                l.queue(a, "fx").length || g.empty.fire()
            })
        }));
        1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [L.overflow, L.overflowX, L.overflowY], v = l.css(a, "display"), D = "none" === v ? S.get(a, "olddisplay") || e(a.nodeName) : v, "inline" === D && "none" === l.css(a, "float") && (L.display = "inline-block"));
        c.overflow && (L.overflow = "hidden", Q.always(function() {
            L.overflow = c.overflow[0];
            L.overflowX = c.overflow[1];
            L.overflowY = c.overflow[2]
        }));
        for (d in b) if (f = b[d], Pb.exec(f)) {
            if (delete b[d], n = n || "toggle" === f, f === (h ? "hide": "show")) {
                if ("show" !== f || !k || void 0 === k[d]) continue;
                h = !0
            }
            y[d] = k && k[d] || l.style(a, d)
        } else v = void 0;
        if (l.isEmptyObject(y))"inline" === ("none" === v ? e(a.nodeName) : v) && (L.display = v);
        else for (d in k ? "hidden" in k && (h = k.hidden) : k = S.access(a, "fxshow", {}), n && (k.hidden = !h), h ? l(a).show() : Q.done(function() {
            l(a).hide()
        }), Q.done(function() {
            var b;
            S.remove(a, "fxshow");
            for (b in y) l.style(a, b, y[b])
        }), y) b = E(h ? k[d] : 0, d, Q),
        d in k || (k[d] = b.start, h && (b.end = b.start, b.start = "width" === d || "height" === d ? 1 : 0))
    }],
    X = {
        "*": [function(a, b) {
            var c = this.createTween(a, b),
            d = c.cur(),
            e = zb.exec(b),
            f = e && e[3] || (l.cssNumber[a] ? "": "px"),
            n = (l.cssNumber[a] || "px" !== f && +d) && zb.exec(l.css(c.elem, a)),
            r = 1,
            v = 20;
            if (n && n[3] !== f) {
                f = f || n[3];
                e = e || [];
                n = +d || 1;
                do r = r || ".5",
                n /= r,
                l.style(c.elem, a, n + f);
                while (r !== (r = c.cur() / d) && 1 !== r && --v)
            }
            return e && (n = c.start = +n || +d || 0, c.unit = f, c.end = e[1] ? n + (e[1] + 1) * e[2] : +e[2]),
            c
        }]
    };
    l.Animation = l.extend(Z, {
        tweener: function(a, b) {
            l.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0,
            e = a.length; e > d; d++) c = a[d],
            X[c] = X[c] || [],
            X[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? ia.unshift(a) : ia.push(a)
        }
    });
    l.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? l.extend({},
        a) : {
            complete: c || !c && b || l.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !l.isFunction(b) && b
        };
        return d.duration = l.fx.off ? 0 : "number" == typeof d.duration ? d.duration: d.duration in l.fx.speeds ? l.fx.speeds[d.duration] : l.fx.speeds._default,
        (null == d.queue || !0 === d.queue) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            l.isFunction(d.old) && d.old.call(this);
            d.queue && l.dequeue(this, d.queue)
        },
        d
    };
    l.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(Sa).css("opacity", 0).show().end().animate({
                opacity: b
            },
            a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = l.isEmptyObject(a),
            f = l.speed(b, c, d);
            b = function() {
                var b = Z(this, l.extend({},
                a), f); (e || S.get(this, "finish")) && b.stop(!0)
            };
            return b.finish = b,
            e || !1 === f.queue ? this.each(b) : this.queue(f.queue, b)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop;
                b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0),
            b && !1 !== a && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0,
                e = null != a && a + "queueHooks",
                f = l.timers,
                r = S.get(this);
                if (e) r[e] && r[e].stop && d(r[e]);
                else for (e in r) r[e] && r[e].stop && F.test(e) && d(r[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); ! b && c || l.dequeue(this, a)
            })
        },
        finish: function(a) {
            return ! 1 !== a && (a = a || "fx"),
            this.each(function() {
                var b, c = S.get(this),
                d = c[a + "queue"];
                b = c[a + "queueHooks"];
                var e = l.timers,
                f = d ? d.length: 0;
                c.finish = !0;
                l.queue(this, a, []);
                b && b.stop && b.stop.call(this, !0);
                for (b = e.length; b--;) e[b].elem === this && e[b].queue === a && (e[b].anim.stop(!0), e.splice(b, 1));
                for (b = 0; f > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    });
    l.each(["toggle", "show", "hide"],
    function(a, b) {
        var c = l.fn[b];
        l.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(ca(b, !0), a, d, e)
        }
    });
    l.each({
        slideDown: ca("show"),
        slideUp: ca("hide"),
        slideToggle: ca("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(a, b) {
        l.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    });
    l.timers = [];
    l.fx.tick = function() {
        var a, b = 0,
        c = l.timers;
        for (na = l.now(); b < c.length; b++) a = c[b],
        a() || c[b] !== a || c.splice(b--, 1);
        c.length || l.fx.stop();
        na = void 0
    };
    l.fx.timer = function(a) {
        l.timers.push(a);
        a() ? l.fx.start() : l.timers.pop()
    };
    l.fx.interval = 13;
    l.fx.start = function() {
        Wa || (Wa = setInterval(l.fx.tick, l.fx.interval))
    };
    l.fx.stop = function() {
        clearInterval(Wa);
        Wa = null
    };
    l.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    l.fn.delay = function(a, b) {
        return a = l.fx ? l.fx.speeds[a] || a: a,
        b = b || "fx",
        this.queue(b,
        function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }; (function() {
        var a = K.createElement("input"),
        b = K.createElement("select"),
        c = b.appendChild(K.createElement("option"));
        a.type = "checkbox";
        V.checkOn = "" !== a.value;
        V.optSelected = c.selected;
        b.disabled = !0;
        V.optDisabled = !c.disabled;
        a = K.createElement("input");
        a.value = "t";
        a.type = "radio";
        V.radioValue = "t" === a.value
    })();
    var P, da = l.expr.attrHandle;
    l.fn.extend({
        attr: function(a, b) {
            return Ja(this, l.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                l.removeAttr(this, a)
            })
        }
    });
    l.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return "undefined" === typeof a.getAttribute ? l.prop(a, b, c) : (1 === f && l.isXMLDoc(a) || (b = b.toLowerCase(), d = l.attrHooks[b] || (l.expr.match.bool.test(b) ? P: void 0)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e: (e = l.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e: (a.setAttribute(b, c + ""), c) : void l.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
            f = b && b.match(ya);
            if (f && 1 === a.nodeType) for (; c = f[e++];) d = l.propFix[c] || c,
            l.expr.match.bool.test(c) && (a[d] = !1),
            a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!V.radioValue && "radio" === b && l.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        }
    });
    P = {
        set: function(a, b, c) {
            return ! 1 === b ? l.removeAttr(a, c) : a.setAttribute(c, c),
            c
        }
    };
    l.each(l.expr.match.bool.source.match(/\w+/g),
    function(a, b) {
        var c = da[b] || l.find.attr;
        da[b] = function(a, b, d) {
            var e, r;
            return d || (r = da[b], da[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, da[b] = r),
            e
        }
    });
    var Ab = /^(?:input|select|textarea|button)$/i;
    l.fn.extend({
        prop: function(a, b) {
            return Ja(this, l.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[l.propFix[a] || a]
            })
        }
    });
    l.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, n = a.nodeType;
            if (a && 3 !== n && 8 !== n && 2 !== n) return f = 1 !== n || !l.isXMLDoc(a),
            f && (b = l.propFix[b] || b, e = l.propHooks[b]),
            void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d: a[b] = c: e && "get" in e && null !== (d = e.get(a, b)) ? d: a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || Ab.test(a.nodeName) || a.href ? a.tabIndex: -1
                }
            }
        }
    });
    V.optSelected || (l.propHooks.selected = {
        get: function(a) {
            a = a.parentNode;
            return a && a.parentNode && a.parentNode.selectedIndex,
            null
        }
    });
    l.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "),
    function() {
        l.propFix[this.toLowerCase()] = this
    });
    var mb = /[\t\r\n\f]/g;
    l.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f;
            b = "string" == typeof a && a;
            var n = 0,
            r = this.length;
            if (l.isFunction(a)) return this.each(function(b) {
                l(this).addClass(a.call(this, b, this.className))
            });
            if (b) for (b = (a || "").match(ya) || []; r > n; n++) if (c = this[n], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(mb, " ") : " ")) {
                for (f = 0; e = b[f++];) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                d = l.trim(d);
                c.className !== d && (c.className = d)
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f;
            b = 0 === arguments.length || "string" == typeof a && a;
            var n = 0,
            r = this.length;
            if (l.isFunction(a)) return this.each(function(b) {
                l(this).removeClass(a.call(this, b, this.className))
            });
            if (b) for (b = (a || "").match(ya) || []; r > n; n++) if (c = this[n], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(mb, " ") : "")) {
                for (f = 0; e = b[f++];) for (; 0 <= d.indexOf(" " + e + " ");) d = d.replace(" " + e + " ", " ");
                d = a ? l.trim(d) : "";
                c.className !== d && (c.className = d)
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(l.isFunction(a) ?
            function(c) {
                l(this).toggleClass(a.call(this, c, this.className, b), b)
            }: function() {
                if ("string" === c) for (var b, d = 0,
                e = l(this), f = a.match(ya) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else("undefined" === c || "boolean" === c) && (this.className && S.set(this, "__className__", this.className), this.className = this.className || !1 === a ? "": S.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            a = " " + a + " ";
            for (var b = 0,
            c = this.length; c > b; b++) if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(mb, " ").indexOf(a)) return ! 0;
            return ! 1
        }
    });
    var nb = /\r/g;
    l.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            if (arguments.length) return d = l.isFunction(a),
            this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, l(this).val()) : a, null == e ? e = "": "number" == typeof e ? e += "": l.isArray(e) && (e = l.map(e,
                function(a) {
                    return null == a ? "": a + ""
                })), b = l.valHooks[this.type] || l.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            });
            if (e) return b = l.valHooks[e.type] || l.valHooks[e.nodeName.toLowerCase()],
            b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c: (c = e.value, "string" == typeof c ? c.replace(nb, "") : null == c ? "": c)
        }
    });
    l.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = l.find.attr(a, "value");
                    return null != b ? b: l.trim(l.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c = a.options,
                    d = a.selectedIndex,
                    e = "select-one" === a.type || 0 > d,
                    f = e ? null: [], n = e ? d + 1 : c.length, r = 0 > d ? n: e ? d: 0; n > r; r++) if (b = c[r], !(!b.selected && r !== d || (V.optDisabled ? b.disabled: null !== b.getAttribute("disabled")) || b.parentNode.disabled && l.nodeName(b.parentNode, "optgroup"))) {
                        if (a = l(b).val(), e) return a;
                        f.push(a)
                    }
                    return f
                },
                set: function(a, b) {
                    for (var c, d, e = a.options,
                    f = l.makeArray(b), n = e.length; n--;) d = e[n],
                    (d.selected = 0 <= l.inArray(d.value, f)) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        }
    });
    l.each(["radio", "checkbox"],
    function() {
        l.valHooks[this] = {
            set: function(a, b) {
                return l.isArray(b) ? a.checked = 0 <= l.inArray(l(a).val(), b) : void 0
            }
        };
        V.checkOn || (l.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on": a.value
        })
    });
    l.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(a, b) {
        l.fn[b] = function(a, c) {
            return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
        }
    });
    l.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Bb = l.now(),
    Cb = /\?/;
    l.parseJSON = function(a) {
        return JSON.parse(a + "")
    };
    l.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser,
            b = c.parseFromString(a, "text/xml")
        } catch(d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && l.error("Invalid XML: " + a),
        b
    };
    var Ta, Ha, Ka = /#.*$/,
    Db = /([?&])_=[^&]*/,
    Qb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Eb = /^(?:GET|HEAD)$/,
    Rb = /^\/\//,
    Ba = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    bb = {},
    Na = {},
    ob = "*/".concat("*");
    try {
        Ha = location.href
    } catch(Ca) {
        Ha = K.createElement("a"),
        Ha.href = "",
        Ha = Ha.href
    }
    Ta = Ba.exec(Ha.toLowerCase()) || [];
    l.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ha,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ta[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset\x3dUTF-8",
            accepts: {
                "*": ob,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": l.parseJSON,
                "text xml": l.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? B(B(a, l.ajaxSettings), b) : B(l.ajaxSettings, a)
        },
        ajaxPrefilter: aa(bb),
        ajaxTransport: aa(Na),
        ajax: function(a, b) {
            function c(a, b, v, n) {
                var g, Q, O, p, m = b;
                if (2 !== E) {
                    E = 2;
                    r && clearTimeout(r);
                    d = void 0;
                    f = n || "";
                    q.readyState = 0 < a ? 4 : 0;
                    n = 200 <= a && 300 > a || 304 === a;
                    if (v) {
                        O = y;
                        for (var B = q,
                        s, ca, J, T, t = O.contents,
                        H = O.dataTypes;
                        "*" === H[0];) H.shift(),
                        void 0 === s && (s = O.mimeType || B.getResponseHeader("Content-Type"));
                        if (s) for (ca in t) if (t[ca] && t[ca].test(s)) {
                            H.unshift(ca);
                            break
                        }
                        if (H[0] in v) J = H[0];
                        else {
                            for (ca in v) {
                                if (!H[0] || O.converters[ca + " " + H[0]]) {
                                    J = ca;
                                    break
                                }
                                T || (T = ca)
                            }
                            J = J || T
                        }
                        O = J ? (J !== H[0] && H.unshift(J), v[J]) : void 0
                    }
                    var fa;
                    a: {
                        v = y;
                        s = O;
                        ca = q;
                        J = n;
                        var u, Z, N;
                        O = {};
                        B = v.dataTypes.slice();
                        if (B[1]) for (u in v.converters) O[u.toLowerCase()] = v.converters[u];
                        for (T = B.shift(); T;) if (v.responseFields[T] && (ca[v.responseFields[T]] = s), !N && J && v.dataFilter && (s = v.dataFilter(s, v.dataType)), N = T, T = B.shift()) if ("*" === T) T = N;
                        else if ("*" !== N && N !== T) {
                            if (u = O[N + " " + T] || O["* " + T], !u) for (fa in O) if (Z = fa.split(" "), Z[1] === T && (u = O[N + " " + Z[0]] || O["* " + Z[0]])) { ! 0 === u ? u = O[fa] : !0 !== O[fa] && (T = Z[0], B.unshift(Z[1]));
                                break
                            }
                            if (!0 !== u) if (u && v["throws"]) s = u(s);
                            else try {
                                s = u(s)
                            } catch(Zb) {
                                fa = {
                                    state: "parsererror",
                                    error: u ? Zb: "No conversion from " + N + " to " + T
                                };
                                break a
                            }
                        }
                        fa = {
                            state: "success",
                            data: s
                        }
                    }
                    O = fa;
                    n ? (y.ifModified && (p = q.getResponseHeader("Last-Modified"), p && (l.lastModified[e] = p), p = q.getResponseHeader("etag"), p && (l.etag[e] = p)), 204 === a || "HEAD" === y.type ? m = "nocontent": 304 === a ? m = "notmodified": (m = O.state, g = O.data, Q = O.error, n = !Q)) : (Q = m, (a || !m) && (m = "error", 0 > a && (a = 0)));
                    q.status = a;
                    q.statusText = (b || m) + "";
                    n ? k.resolveWith(L, [g, m, q]) : k.rejectWith(L, [q, m, Q]);
                    q.statusCode(z);
                    z = void 0;
                    D && h.trigger(n ? "ajaxSuccess": "ajaxError", [q, y, n ? g: Q]);
                    C.fireWith(L, [q, m]);
                    D && (h.trigger("ajaxComplete", [q, y]), --l.active || l.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (b = a, a = void 0);
            b = b || {};
            var d, e, f, n, r, v, D, g, y = l.ajaxSetup({},
            b),
            L = y.context || y,
            h = y.context && (L.nodeType || L.jquery) ? l(L) : l.event,
            k = l.Deferred(),
            C = l.Callbacks("once memory"),
            z = y.statusCode || {},
            O = {},
            p = {},
            E = 0,
            m = "canceled",
            q = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === E) {
                        if (!n) for (n = {}; b = Qb.exec(f);) n[b[1].toLowerCase()] = b[2];
                        b = n[a.toLowerCase()]
                    }
                    return null == b ? null: b
                },
                getAllResponseHeaders: function() {
                    return 2 === E ? f: null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return E || (a = p[c] = p[c] || a, O[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return E || (y.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > E) for (b in a) z[b] = [z[b], a[b]];
                    else q.always(a[q.status]);
                    return this
                },
                abort: function(a) {
                    a = a || m;
                    return d && d.abort(a),
                    c(0, a),
                    this
                }
            };
            if (k.promise(q).complete = C.add, q.success = q.done, q.error = q.fail, y.url = ((a || y.url || Ha) + "").replace(Ka, "").replace(Rb, Ta[1] + "//"), y.type = b.method || b.type || y.method || y.type, y.dataTypes = l.trim(y.dataType || "*").toLowerCase().match(ya) || [""], null == y.crossDomain && (v = Ba.exec(y.url.toLowerCase()), y.crossDomain = !(!v || v[1] === Ta[1] && v[2] === Ta[2] && (v[3] || ("http:" === v[1] ? "80": "443")) === (Ta[3] || ("http:" === Ta[1] ? "80": "443")))), y.data && y.processData && "string" != typeof y.data && (y.data = l.param(y.data, y.traditional)), ha(bb, y, b, q), 2 === E) return q; (D = y.global) && 0 === l.active++&&l.event.trigger("ajaxStart");
            y.type = y.type.toUpperCase();
            y.hasContent = !Eb.test(y.type);
            e = y.url;
            y.hasContent || (y.data && (e = y.url += (Cb.test(e) ? "\x26": "?") + y.data, delete y.data), !1 === y.cache && (y.url = Db.test(e) ? e.replace(Db, "$1_\x3d" + Bb++) : e + (Cb.test(e) ? "\x26": "?") + "_\x3d" + Bb++));
            y.ifModified && (l.lastModified[e] && q.setRequestHeader("If-Modified-Since", l.lastModified[e]), l.etag[e] && q.setRequestHeader("If-None-Match", l.etag[e])); (y.data && y.hasContent && !1 !== y.contentType || b.contentType) && q.setRequestHeader("Content-Type", y.contentType);
            q.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + ob + "; q\x3d0.01": "") : y.accepts["*"]);
            for (g in y.headers) q.setRequestHeader(g, y.headers[g]);
            if (y.beforeSend && (!1 === y.beforeSend.call(L, q, y) || 2 === E)) return q.abort();
            m = "abort";
            for (g in {
                success: 1,
                error: 1,
                complete: 1
            }) q[g](y[g]);
            if (d = ha(Na, y, b, q)) {
                q.readyState = 1;
                D && h.trigger("ajaxSend", [q, y]);
                y.async && 0 < y.timeout && (r = setTimeout(function() {
                    q.abort("timeout")
                },
                y.timeout));
                try {
                    E = 1,
                    d.send(O, c)
                } catch(B) {
                    if (! (2 > E)) throw B;
                    c( - 1, B)
                }
            } else c( - 1, "No Transport");
            return q
        },
        getJSON: function(a, b, c) {
            return l.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return l.get(a, void 0, b, "script")
        }
    });
    l.each(["get", "post"],
    function(a, b) {
        l[b] = function(a, c, d, e) {
            return l.isFunction(c) && (e = e || d, d = c, c = void 0),
            l.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    });
    l.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function(a, b) {
        l.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    l._evalUrl = function(a) {
        return l.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    l.fn.extend({
        wrapAll: function(a) {
            var b;
            return l.isFunction(a) ? this.each(function(b) {
                l(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = l(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(l.isFunction(a) ?
            function(b) {
                l(this).wrapInner(a.call(this, b))
            }: function() {
                var b = l(this),
                c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = l.isFunction(a);
            return this.each(function(c) {
                l(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                l.nodeName(this, "body") || l(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    l.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight
    };
    l.expr.filters.visible = function(a) {
        return ! l.expr.filters.hidden(a)
    };
    var cb = /%20/g,
    Ua = /\[\]$/,
    db = /\r?\n/g,
    Ub = /^(?:submit|button|image|reset|file)$/i,
    Vb = /^(?:input|select|textarea|keygen)/i;
    l.param = function(a, b) {
        var c, d = [],
        e = function(a, b) {
            b = l.isFunction(b) ? b() : null == b ? "": b;
            d[d.length] = encodeURIComponent(a) + "\x3d" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = l.ajaxSettings && l.ajaxSettings.traditional), l.isArray(a) || a.jquery && !l.isPlainObject(a)) l.each(a,
        function() {
            e(this.name, this.value)
        });
        else for (c in a) J(c, a[c], b, e);
        return d.join("\x26").replace(cb, "+")
    };
    l.fn.extend({
        serialize: function() {
            return l.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = l.prop(this, "elements");
                return a ? l.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !l(this).is(":disabled") && Vb.test(this.nodeName) && !Ub.test(a) && (this.checked || !ib.test(a))
            }).map(function(a, b) {
                var c = l(this).val();
                return null == c ? null: l.isArray(c) ? l.map(c,
                function(a) {
                    return {
                        name: b.name,
                        value: a.replace(db, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(db, "\r\n")
                }
            }).get()
        }
    });
    l.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch(a) {}
    };
    var Sb = 0,
    ka = {},
    Wb = {
        0 : 200,
        1223 : 204
    },
    Xa = l.ajaxSettings.xhr();
    b.ActiveXObject && l(b).on("unload",
    function() {
        for (var a in ka) ka[a]()
    });
    V.cors = !!Xa && "withCredentials" in Xa;
    V.ajax = Xa = !!Xa;
    l.ajaxTransport(function(a) {
        var b;
        return V.cors || Xa && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                n = ++Sb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType);
                a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete ka[n], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Wb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        }: void 0, f.getAllResponseHeaders()))
                    }
                };
                f.onload = b();
                f.onerror = b("error");
                b = ka[n] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch(r) {
                    if (b) throw r;
                }
            },
            abort: function() {
                b && b()
            }
        }: void 0
    });
    l.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return l.globalEval(a),
                a
            }
        }
    });
    l.ajaxPrefilter("script",
    function(a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET")
    });
    l.ajaxTransport("script",
    function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = l("\x3cscript\x3e").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove();
                        c = null;
                        a && e("error" === a.type ? 404 : 200, a.type)
                    });
                    K.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var pb = [],
    eb = /(=)\?(?=&|$)|\?\?/;
    l.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = pb.pop() || l.expando + "_" + Bb++;
            return this[a] = !0,
            a
        }
    });
    l.ajaxPrefilter("json jsonp",
    function(a, c, d) {
        var e, f, n, g = !1 !== a.jsonp && (eb.test(a.url) ? "url": "string" == typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && eb.test(a.data) && "data");
        return g || "jsonp" === a.dataTypes[0] ? (e = a.jsonpCallback = l.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, g ? a[g] = a[g].replace(eb, "$1" + e) : !1 !== a.jsonp && (a.url += (Cb.test(a.url) ? "\x26": "?") + a.jsonp + "\x3d" + e), a.converters["script json"] = function() {
            return n || l.error(e + " was not called"),
            n[0]
        },
        a.dataTypes[0] = "json", f = b[e], b[e] = function() {
            n = arguments
        },
        d.always(function() {
            b[e] = f;
            a[e] && (a.jsonpCallback = c.jsonpCallback, pb.push(e));
            n && l.isFunction(f) && f(n[0]);
            n = f = void 0
        }), "script") : void 0
    });
    l.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1);
        b = b || K;
        var d = vb.exec(a);
        c = !c && [];
        return d ? [b.createElement(d[1])] : (d = l.buildFragment([a], b, c), c && c.length && l(c).remove(), l.merge([], d.childNodes))
    };
    var qb = l.fn.load;
    l.fn.load = function(a, b, c) {
        if ("string" != typeof a && qb) return qb.apply(this, arguments);
        var d, e, f, n = this,
        r = a.indexOf(" ");
        return 0 <= r && (d = l.trim(a.slice(r)), a = a.slice(0, r)),
        l.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"),
        0 < n.length && l.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments;
            n.html(d ? l("\x3cdiv\x3e").append(l.parseHTML(a)).find(d) : a)
        }).complete(c &&
        function(a, b) {
            n.each(c, f || [a.responseText, b, a])
        }),
        this
    };
    l.expr.filters.animated = function(a) {
        return l.grep(l.timers,
        function(b) {
            return a === b.elem
        }).length
    };
    var rb = b.document.documentElement;
    l.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, n, r, v, D = l.css(a, "position"),
            g = l(a),
            y = {};
            "static" === D && (a.style.position = "relative");
            r = g.offset();
            f = l.css(a, "top");
            v = l.css(a, "left"); ("absolute" === D || "fixed" === D) && -1 < (f + v).indexOf("auto") ? (d = g.position(), n = d.top, e = d.left) : (n = parseFloat(f) || 0, e = parseFloat(v) || 0);
            l.isFunction(b) && (b = b.call(a, c, r));
            null != b.top && (y.top = b.top - r.top + n);
            null != b.left && (y.left = b.left - r.left + e);
            "using" in b ? b.using.call(a, y) : g.css(y)
        }
    };
    l.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this: this.each(function(b) {
                l.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
            e = {
                top: 0,
                left: 0
            },
            f = d && d.ownerDocument;
            if (f) return b = f.documentElement,
            l.contains(b, d) ? ("undefined" !== typeof d.getBoundingClientRect && (e = d.getBoundingClientRect()), c = N(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === l.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), l.nodeName(a[0], "html") || (d = a.offset()), d.top += l.css(a[0], "borderTopWidth", !0), d.left += l.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - d.top - l.css(c, "marginTop", !0),
                    left: b.left - d.left - l.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || rb; a && !l.nodeName(a, "html") && "static" === l.css(a, "position");) a = a.offsetParent;
                return a || rb
            })
        }
    });
    l.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(a, c) {
        var d = "pageYOffset" === c;
        l.fn[a] = function(e) {
            return Ja(this,
            function(a, e, f) {
                var r = N(a);
                return void 0 === f ? r ? r[c] : a[e] : void(r ? r.scrollTo(d ? b.pageXOffset: f, d ? f: b.pageYOffset) : a[e] = f)
            },
            a, e, arguments.length, null)
        }
    });
    l.each(["top", "left"],
    function(a, b) {
        l.cssHooks[b] = n(V.pixelPosition,
        function(a, c) {
            return c ? (c = f(a, b), Ma.test(c) ? l(a).position()[b] + "px": c) : void 0
        })
    });
    l.each({
        Height: "height",
        Width: "width"
    },
    function(a, b) {
        l.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        },
        function(c, d) {
            l.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                r = c || (!0 === d || !0 === e ? "margin": "border");
                return Ja(this,
                function(b, c, d) {
                    var e;
                    return l.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? l.css(b, c, r) : l.style(b, c, d, r)
                },
                b, f ? d: void 0, f, null)
            }
        })
    });
    l.fn.size = function() {
        return this.length
    };
    l.fn.andSelf = l.fn.addBack;
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return l
    });
    var Fb = b.jQuery,
    Tb = b.$;
    return l.noConflict = function(a) {
        return b.$ === l && (b.$ = Tb),
        a && b.jQuery === l && (b.jQuery = Fb),
        l
    },
    "undefined" === typeof k && (b.jQuery = b.$ = l),
    l
}); (function(b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : b(jQuery)
})(function(b) {
    function k(a, c) {
        var d, e, f, n = a.nodeName.toLowerCase();
        return "area" === n ? (d = a.parentNode, e = d.name, a.href && e && "map" === d.nodeName.toLowerCase() ? (f = b("img[usemap\x3d'#" + e + "']")[0], !!f && h(f)) : !1) : (/input|select|textarea|button|object/.test(n) ? !a.disabled: "a" === n ? a.href || c: c) && h(a)
    }
    function h(a) {
        return b.expr.filters.visible(a) && !b(a).parents().addBack().filter(function() {
            return "hidden" === b.css(this, "visibility")
        }).length
    }
    function m(a) {
        for (var b, d; a.length && a[0] !== document;) {
            if (b = a.css("position"), ("absolute" === b || "relative" === b || "fixed" === b) && (d = parseInt(a.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
            a = a.parent()
        }
        return 0
    }
    function g() {
        this._curInst = null;
        this._keyEvent = !1;
        this._disabledInputs = [];
        this._inDialog = this._datepickerShowing = !1;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: "January February March April May June July August September October November December".split(" "),
            monthNamesShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            dayNames: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            dayNamesShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            dayNamesMin: "Su Mo Tu We Th Fr Sa".split(" "),
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        };
        b.extend(this._defaults, this.regional[""]);
        this.regional.en = b.extend(!0, {},
        this.regional[""]);
        this.regional["en-US"] = b.extend(!0, {},
        this.regional.en);
        this.dpDiv = p(b("\x3cdiv id\x3d'" + this._mainDivId + "' class\x3d'ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'\x3e\x3c/div\x3e"))
    }
    function p(a) {
        return a.delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", "mouseout",
        function() {
            b(this).removeClass("ui-state-hover"); - 1 !== this.className.indexOf("ui-datepicker-prev") && b(this).removeClass("ui-datepicker-prev-hover"); - 1 !== this.className.indexOf("ui-datepicker-next") && b(this).removeClass("ui-datepicker-next-hover")
        }).delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", "mouseover", q)
    }
    function q() {
        b.datepicker._isDisabledDatepicker(R.inline ? R.dpDiv.parent()[0] : R.input[0]) || (b(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), b(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && b(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && b(this).addClass("ui-datepicker-next-hover"))
    }
    function s(a, c) {
        b.extend(a, c);
        for (var d in c) null == c[d] && (a[d] = c[d]);
        return a
    }
    function t(a) {
        return function() {
            var b = this.element.val();
            a.apply(this, arguments);
            this._refresh();
            b !== this.element.val() && this._trigger("change")
        }
    }
    b.ui = b.ui || {};
    b.extend(b.ui, {
        version: "1.11.1",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    b.fn.extend({
        scrollParent: function(a) {
            var c = this.css("position"),
            d = "absolute" === c,
            e = a ? /(auto|scroll|hidden)/: /(auto|scroll)/;
            a = this.parents().filter(function() {
                var a = b(this);
                return d && "static" === a.css("position") ? !1 : e.test(a.css("overflow") + a.css("overflow-y") + a.css("overflow-x"))
            }).eq(0);
            return "fixed" !== c && a.length ? a: b(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var a = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            }
        } (),
        removeUniqueId: function() {
            return this.each(function() { / ^ui - id - \d + $ / .test(this.id) && b(this).removeAttr("id")
            })
        }
    });
    b.extend(b.expr[":"], {
        data: b.expr.createPseudo ? b.expr.createPseudo(function(a) {
            return function(c) {
                return !! b.data(c, a)
            }
        }) : function(a, c, d) {
            return !! b.data(a, d[3])
        },
        focusable: function(a) {
            return k(a, !isNaN(b.attr(a, "tabindex")))
        },
        tabbable: function(a) {
            var c = b.attr(a, "tabindex"),
            d = isNaN(c);
            return (d || 0 <= c) && k(a, !d)
        }
    });
    b("\x3ca\x3e").outerWidth(1).jquery || b.each(["Width", "Height"],
    function(a, c) {
        function d(a, c, d, f) {
            return b.each(e,
            function() {
                c -= parseFloat(b.css(a, "padding" + this)) || 0;
                d && (c -= parseFloat(b.css(a, "border" + this + "Width")) || 0);
                f && (c -= parseFloat(b.css(a, "margin" + this)) || 0)
            }),
            c
        }
        var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
        f = c.toLowerCase(),
        n = {
            innerWidth: b.fn.innerWidth,
            innerHeight: b.fn.innerHeight,
            outerWidth: b.fn.outerWidth,
            outerHeight: b.fn.outerHeight
        };
        b.fn["inner" + c] = function(a) {
            return void 0 === a ? n["inner" + c].call(this) : this.each(function() {
                b(this).css(f, d(this, a) + "px")
            })
        };
        b.fn["outer" + c] = function(a, e) {
            return "number" != typeof a ? n["outer" + c].call(this, a) : this.each(function() {
                b(this).css(f, d(this, a, !0, e) + "px")
            })
        }
    });
    b.fn.addBack || (b.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject: this.prevObject.filter(a))
    });
    b("\x3ca\x3e").data("a-b", "a").removeData("a-b").data("a-b") && (b.fn.removeData = function(a) {
        return function(c) {
            return arguments.length ? a.call(this, b.camelCase(c)) : a.call(this)
        }
    } (b.fn.removeData));
    b.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    b.fn.extend({
        focus: function(a) {
            return function(c, d) {
                return "number" == typeof c ? this.each(function() {
                    var a = this;
                    setTimeout(function() {
                        b(a).focus();
                        d && d.call(a)
                    },
                    c)
                }) : a.apply(this, arguments)
            }
        } (b.fn.focus),
        disableSelection: function() {
            var a = "onselectstart" in document.createElement("div") ? "selectstart": "mousedown";
            return function() {
                return this.bind(a + ".ui-disableSelection",
                function(a) {
                    a.preventDefault()
                })
            }
        } (),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(a) {
            if (void 0 !== a) return this.css("zIndex", a);
            if (this.length) {
                var c, d;
                for (a = b(this[0]); a.length && a[0] !== document;) {
                    if (c = a.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(a.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
                    a = a.parent()
                }
            }
            return 0
        }
    });
    b.ui.plugin = {
        add: function(a, c, d) {
            var e;
            a = b.ui[a].prototype;
            for (e in d) a.plugins[e] = a.plugins[e] || [],
            a.plugins[e].push([c, d[e]])
        },
        call: function(a, b, d, e) {
            if ((b = a.plugins[b]) && (e || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType)) for (e = 0; b.length > e; e++) a.options[b[e][0]] && b[e][1].apply(a.element, d)
        }
    };
    var A = 0,
    w = Array.prototype.slice;
    b.cleanData = function(a) {
        return function(c) {
            var d, e, f;
            for (f = 0; null != (e = c[f]); f++) try { (d = b._data(e, "events")) && d.remove && b(e).triggerHandler("remove")
            } catch(n) {}
            a(c)
        }
    } (b.cleanData);
    b.widget = function(a, c, d) {
        var e, f, n, g, h = {},
        k = a.split(".")[0];
        return a = a.split(".")[1],
        e = k + "-" + a,
        d || (d = c, c = b.Widget),
        b.expr[":"][e.toLowerCase()] = function(a) {
            return !! b.data(a, e)
        },
        b[k] = b[k] || {},
        f = b[k][a],
        n = b[k][a] = function(a, b) {
            return this._createWidget ? (arguments.length && this._createWidget(a, b), void 0) : new n(a, b)
        },
        b.extend(n, f, {
            version: d.version,
            _proto: b.extend({},
            d),
            _childConstructors: []
        }),
        g = new c,
        g.options = b.widget.extend({},
        g.options),
        b.each(d,
        function(a, d) {
            return b.isFunction(d) ? (h[a] = function() {
                var b = function() {
                    return c.prototype[a].apply(this, arguments)
                },
                e = function(b) {
                    return c.prototype[a].apply(this, b)
                };
                return function() {
                    var a, c = this._super,
                    f = this._superApply;
                    return this._super = b,
                    this._superApply = e,
                    a = d.apply(this, arguments),
                    this._super = c,
                    this._superApply = f,
                    a
                }
            } (), void 0) : (h[a] = d, void 0)
        }),
        n.prototype = b.widget.extend(g, {
            widgetEventPrefix: f ? g.widgetEventPrefix || a: a
        },
        h, {
            constructor: n,
            namespace: k,
            widgetName: a,
            widgetFullName: e
        }),
        f ? (b.each(f._childConstructors,
        function(a, c) {
            var d = c.prototype;
            b.widget(d.namespace + "." + d.widgetName, n, c._proto)
        }), delete f._childConstructors) : c._childConstructors.push(n),
        b.widget.bridge(a, n),
        n
    };
    b.widget.extend = function(a) {
        for (var c, d, e = w.call(arguments, 1), f = 0, n = e.length; n > f; f++) for (c in e[f]) d = e[f][c],
        e[f].hasOwnProperty(c) && void 0 !== d && (a[c] = b.isPlainObject(d) ? b.isPlainObject(a[c]) ? b.widget.extend({},
        a[c], d) : b.widget.extend({},
        d) : d);
        return a
    };
    b.widget.bridge = function(a, c) {
        var d = c.prototype.widgetFullName || a;
        b.fn[a] = function(e) {
            var f = "string" == typeof e,
            n = w.call(arguments, 1),
            g = this;
            return e = !f && n.length ? b.widget.extend.apply(null, [e].concat(n)) : e,
            f ? this.each(function() {
                var c, f = b.data(this, d);
                return "instance" === e ? (g = f, !1) : f ? b.isFunction(f[e]) && "_" !== e.charAt(0) ? (c = f[e].apply(f, n), c !== f && void 0 !== c ? (g = c && c.jquery ? g.pushStack(c.get()) : c, !1) : void 0) : b.error("no such method '" + e + "' for " + a + " widget instance") : b.error("cannot call methods on " + a + " prior to initialization; attempted to call method '" + e + "'")
            }) : this.each(function() {
                var a = b.data(this, d);
                a ? (a.option(e || {}), a._init && a._init()) : b.data(this, d, new c(e, this))
            }),
            g
        }
    };
    b.Widget = function() {};
    b.Widget._childConstructors = [];
    b.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "\x3cdiv\x3e",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(a, c) {
            c = b(c || this.defaultElement || this)[0];
            this.element = b(c);
            this.uuid = A++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = b.widget.extend({},
            this.options, this._getCreateOptions(), a);
            this.bindings = b();
            this.hoverable = b();
            this.focusable = b();
            c !== this && (b.data(c, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(a) {
                    a.target === c && this.destroy()
                }
            }), this.document = b(c.style ? c.ownerDocument: c.document || c), this.window = b(this.document[0].defaultView || this.document[0].parentWindow));
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: b.noop,
        _getCreateEventData: b.noop,
        _create: b.noop,
        _init: b.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: b.noop,
        widget: function() {
            return this.element
        },
        option: function(a, c) {
            var d, e, f, n = a;
            if (0 === arguments.length) return b.widget.extend({},
            this.options);
            if ("string" == typeof a) if (n = {},
            d = a.split("."), a = d.shift(), d.length) {
                e = n[a] = b.widget.extend({},
                this.options[a]);
                for (f = 0; d.length - 1 > f; f++) e[d[f]] = e[d[f]] || {},
                e = e[d[f]];
                if (a = d.pop(), 1 === arguments.length) return void 0 === e[a] ? null: e[a];
                e[a] = c
            } else {
                if (1 === arguments.length) return void 0 === this.options[a] ? null: this.options[a];
                n[a] = c
            }
            return this._setOptions(n),
            this
        },
        _setOptions: function(a) {
            for (var b in a) this._setOption(b, a[b]);
            return this
        },
        _setOption: function(a, b) {
            return this.options[a] = b,
            "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))),
            this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(a, c, d) {
            var e, f = this;
            "boolean" != typeof a && (d = c, c = a, a = !1);
            d ? (c = e = b(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget());
            b.each(d,
            function(d, g) {
                function h() {
                    return a || !0 !== f.options.disabled && !b(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
                }
                "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || b.guid++);
                var k = d.match(/^([\w:-]*)\s*(.*)$/),
                p = k[1] + f.eventNamespace; (k = k[2]) ? e.delegate(k, p, h) : c.bind(p, h)
            })
        },
        _off: function(a, b) {
            b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            a.unbind(b).undelegate(b)
        },
        _delay: function(a, b) {
            var d = this;
            return setTimeout(function() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments)
            },
            b || 0)
        },
        _hoverable: function(a) {
            this.hoverable = this.hoverable.add(a);
            this._on(a, {
                mouseenter: function(a) {
                    b(a.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(a) {
                    b(a.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(a) {
            this.focusable = this.focusable.add(a);
            this._on(a, {
                focusin: function(a) {
                    b(a.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(a) {
                    b(a.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(a, c, d) {
            var e, f = this.options[a];
            if (d = d || {},
            c = b.Event(c), c.type = (a === this.widgetEventPrefix ? a: this.widgetEventPrefix + a).toLowerCase(), c.target = this.element[0], a = c.originalEvent) for (e in a) e in c || (c[e] = a[e]);
            return this.element.trigger(c, d),
            !(b.isFunction(f) && !1 === f.apply(this.element[0], [c].concat(d)) || c.isDefaultPrevented())
        }
    };
    b.each({
        show: "fadeIn",
        hide: "fadeOut"
    },
    function(a, c) {
        b.Widget.prototype["_" + a] = function(d, e, f) {
            "string" == typeof e && (e = {
                effect: e
            });
            var n, g = e ? !0 === e || "number" == typeof e ? c: e.effect || c: a;
            e = e || {};
            "number" == typeof e && (e = {
                duration: e
            });
            n = !b.isEmptyObject(e);
            e.complete = f;
            e.delay && d.delay(e.delay);
            n && b.effects && b.effects.effect[g] ? d[a](e) : g !== a && d[g] ? d[g](e.duration, e.easing, f) : d.queue(function(c) {
                b(this)[a]();
                f && f.call(d[0]);
                c()
            })
        }
    });
    b.widget;
    var u = !1;
    b(document).mouseup(function() {
        u = !1
    });
    b.widget("ui.mouse", {
        version: "1.11.1",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var a = this;
            this.element.bind("mousedown." + this.widgetName,
            function(b) {
                return a._mouseDown(b)
            }).bind("click." + this.widgetName,
            function(c) {
                return ! 0 === b.data(c.target, a.widgetName + ".preventClickEvent") ? (b.removeData(c.target, a.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
            });
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(a) {
            if (!u) {
                this._mouseStarted && this._mouseUp(a);
                this._mouseDownEvent = a;
                var c = this,
                d = 1 === a.which,
                e = "string" == typeof this.options.cancel && a.target.nodeName ? b(a.target).closest(this.options.cancel).length: !1;
                return d && !e && this._mouseCapture(a) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    c.mouseDelayMet = !0
                },
                this.options.delay)), this._mouseDistanceMet(a) && this._mouseDelayMet(a) && (this._mouseStarted = !1 !== this._mouseStart(a), !this._mouseStarted) ? (a.preventDefault(), !0) : (!0 === b.data(a.target, this.widgetName + ".preventClickEvent") && b.removeData(a.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
                    return c._mouseMove(a)
                },
                this._mouseUpDelegate = function(a) {
                    return c._mouseUp(a)
                },
                this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), a.preventDefault(), u = !0, !0)) : !0
            }
        },
        _mouseMove: function(a) {
            return b.ui.ie && (!document.documentMode || 9 > document.documentMode) && !a.button ? this._mouseUp(a) : a.which ? this._mouseStarted ? (this._mouseDrag(a), a.preventDefault()) : (this._mouseDistanceMet(a) && this._mouseDelayMet(a) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, a), this._mouseStarted ? this._mouseDrag(a) : this._mouseUp(a)), !this._mouseStarted) : this._mouseUp(a)
        },
        _mouseUp: function(a) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1, a.target === this._mouseDownEvent.target && b.data(a.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(a)),
            u = !1,
            !1
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return ! 0
        }
    }); (function() {
        function a(a, b, c) {
            return [parseFloat(a[0]) * (q.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (q.test(a[1]) ? c / 100 : 1)]
        }
        function c(a) {
            var c = a[0];
            return 9 === c.nodeType ? {
                width: a.width(),
                height: a.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            }: b.isWindow(c) ? {
                width: a.width(),
                height: a.height(),
                offset: {
                    top: a.scrollTop(),
                    left: a.scrollLeft()
                }
            }: c.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: c.pageY,
                    left: c.pageX
                }
            }: {
                width: a.outerWidth(),
                height: a.outerHeight(),
                offset: a.offset()
            }
        }
        b.ui = b.ui || {};
        var d, e, f = Math.max,
        n = Math.abs,
        g = Math.round,
        h = /left|center|right/,
        k = /top|center|bottom/,
        p = /[\+\-]\d+(\.[\d]+)?%?/,
        m = /^\w+/,
        q = /%$/,
        s = b.fn.position;
        b.position = {
            scrollbarWidth: function() {
                if (void 0 !== d) return d;
                var a, c, e = b("\x3cdiv style\x3d'display:block;position:absolute;width:50px;height:50px;overflow:hidden;'\x3e\x3cdiv style\x3d'height:100px;width:auto;'\x3e\x3c/div\x3e\x3c/div\x3e"),
                f = e.children()[0];
                return b("body").append(e),
                a = f.offsetWidth,
                e.css("overflow", "scroll"),
                c = f.offsetWidth,
                a === c && (c = e[0].clientWidth),
                e.remove(),
                d = a - c
            },
            getScrollInfo: function(a) {
                var c = a.isWindow || a.isDocument ? "": a.element.css("overflow-x"),
                d = a.isWindow || a.isDocument ? "": a.element.css("overflow-y"),
                c = "scroll" === c || "auto" === c && a.width < a.element[0].scrollWidth;
                return {
                    width: "scroll" === d || "auto" === d && a.height < a.element[0].scrollHeight ? b.position.scrollbarWidth() : 0,
                    height: c ? b.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(a) {
                a = b(a || window);
                var c = b.isWindow(a[0]),
                d = !!a[0] && 9 === a[0].nodeType;
                return {
                    element: a,
                    isWindow: c,
                    isDocument: d,
                    offset: a.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: a.scrollLeft(),
                    scrollTop: a.scrollTop(),
                    width: c || d ? a.width() : a.outerWidth(),
                    height: c || d ? a.height() : a.outerHeight()
                }
            }
        };
        b.fn.position = function(d) {
            if (!d || !d.of) return s.apply(this, arguments);
            d = b.extend({},
            d);
            var E, q, t, u, G, B, J = b(d.of),
            N = b.position.getWithinInfo(d.within),
            M = b.position.getScrollInfo(N),
            w = (d.collision || "flip").split(" "),
            x = {};
            return B = c(J),
            J[0].preventDefault && (d.at = "left top"),
            q = B.width,
            t = B.height,
            u = B.offset,
            G = b.extend({},
            u),
            b.each(["my", "at"],
            function() {
                var a, b, c = (d[this] || "").split(" ");
                1 === c.length && (c = h.test(c[0]) ? c.concat(["center"]) : k.test(c[0]) ? ["center"].concat(c) : ["center", "center"]);
                c[0] = h.test(c[0]) ? c[0] : "center";
                c[1] = k.test(c[1]) ? c[1] : "center";
                a = p.exec(c[0]);
                b = p.exec(c[1]);
                x[this] = [a ? a[0] : 0, b ? b[0] : 0];
                d[this] = [m.exec(c[0])[0], m.exec(c[1])[0]]
            }),
            1 === w.length && (w[1] = w[0]),
            "right" === d.at[0] ? G.left += q: "center" === d.at[0] && (G.left += q / 2),
            "bottom" === d.at[1] ? G.top += t: "center" === d.at[1] && (G.top += t / 2),
            E = a(x.at, q, t),
            G.left += E[0],
            G.top += E[1],
            this.each(function() {
                var c, h, k = b(this),
                z = k.outerWidth(),
                C = k.outerHeight(),
                p = parseInt(b.css(this, "marginLeft"), 10) || 0,
                m = parseInt(b.css(this, "marginTop"), 10) || 0,
                l = z + p + (parseInt(b.css(this, "marginRight"), 10) || 0) + M.width,
                s = C + m + (parseInt(b.css(this, "marginBottom"), 10) || 0) + M.height,
                B = b.extend({},
                G),
                T = a(x.my, k.outerWidth(), k.outerHeight());
                "right" === d.my[0] ? B.left -= z: "center" === d.my[0] && (B.left -= z / 2);
                "bottom" === d.my[1] ? B.top -= C: "center" === d.my[1] && (B.top -= C / 2);
                B.left += T[0];
                B.top += T[1];
                e || (B.left = g(B.left), B.top = g(B.top));
                c = {
                    marginLeft: p,
                    marginTop: m
                };
                b.each(["left", "top"],
                function(a, e) {
                    b.ui.position[w[a]] && b.ui.position[w[a]][e](B, {
                        targetWidth: q,
                        targetHeight: t,
                        elemWidth: z,
                        elemHeight: C,
                        collisionPosition: c,
                        collisionWidth: l,
                        collisionHeight: s,
                        offset: [E[0] + T[0], E[1] + T[1]],
                        my: d.my,
                        at: d.at,
                        within: N,
                        elem: k
                    })
                });
                d.using && (h = function(a) {
                    var b = u.left - B.left,
                    c = b + q - z,
                    e = u.top - B.top,
                    g = e + t - C,
                    l = {
                        target: {
                            element: J,
                            left: u.left,
                            top: u.top,
                            width: q,
                            height: t
                        },
                        element: {
                            element: k,
                            left: B.left,
                            top: B.top,
                            width: z,
                            height: C
                        },
                        horizontal: 0 > c ? "left": 0 < b ? "right": "center",
                        vertical: 0 > g ? "top": 0 < e ? "bottom": "middle"
                    };
                    z > q && q > n(b + c) && (l.horizontal = "center");
                    C > t && t > n(e + g) && (l.vertical = "middle");
                    l.important = f(n(b), n(c)) > f(n(e), n(g)) ? "horizontal": "vertical";
                    d.using.call(this, a, l)
                });
                k.offset(b.extend(B, {
                    using: h
                }))
            })
        };
        b.ui.position = {
            fit: {
                left: function(a, b) {
                    var c, d = b.within,
                    e = d.isWindow ? d.scrollLeft: d.offset.left,
                    d = d.width,
                    n = a.left - b.collisionPosition.marginLeft,
                    g = e - n,
                    h = n + b.collisionWidth - d - e;
                    b.collisionWidth > d ? 0 < g && 0 >= h ? (c = a.left + g + b.collisionWidth - d - e, a.left += g - c) : a.left = 0 < h && 0 >= g ? e: g > h ? e + d - b.collisionWidth: e: 0 < g ? a.left += g: 0 < h ? a.left -= h: a.left = f(a.left - n, a.left)
                },
                top: function(a, b) {
                    var c, d = b.within,
                    d = d.isWindow ? d.scrollTop: d.offset.top,
                    e = b.within.height,
                    n = a.top - b.collisionPosition.marginTop,
                    g = d - n,
                    h = n + b.collisionHeight - e - d;
                    b.collisionHeight > e ? 0 < g && 0 >= h ? (c = a.top + g + b.collisionHeight - e - d, a.top += g - c) : a.top = 0 < h && 0 >= g ? d: g > h ? d + e - b.collisionHeight: d: 0 < g ? a.top += g: 0 < h ? a.top -= h: a.top = f(a.top - n, a.top)
                }
            },
            flip: {
                left: function(a, b) {
                    var c, d, e = b.within,
                    f = e.offset.left + e.scrollLeft,
                    g = e.width,
                    e = e.isWindow ? e.scrollLeft: e.offset.left,
                    h = a.left - b.collisionPosition.marginLeft,
                    k = h - e,
                    h = h + b.collisionWidth - g - e,
                    z = "left" === b.my[0] ? -b.elemWidth: "right" === b.my[0] ? b.elemWidth: 0,
                    C = "left" === b.at[0] ? b.targetWidth: "right" === b.at[0] ? -b.targetWidth: 0,
                    O = -2 * b.offset[0];
                    0 > k ? (c = a.left + z + C + O + b.collisionWidth - g - f, (0 > c || n(k) > c) && (a.left += z + C + O)) : 0 < h && (d = a.left - b.collisionPosition.marginLeft + z + C + O - e, (0 < d || h > n(d)) && (a.left += z + C + O))
                },
                top: function(a, b) {
                    var c, d, e = b.within,
                    f = e.offset.top + e.scrollTop,
                    g = e.height,
                    e = e.isWindow ? e.scrollTop: e.offset.top,
                    h = a.top - b.collisionPosition.marginTop,
                    k = h - e,
                    h = h + b.collisionHeight - g - e,
                    z = "top" === b.my[1] ? -b.elemHeight: "bottom" === b.my[1] ? b.elemHeight: 0,
                    C = "top" === b.at[1] ? b.targetHeight: "bottom" === b.at[1] ? -b.targetHeight: 0,
                    O = -2 * b.offset[1];
                    0 > k ? (d = a.top + z + C + O + b.collisionHeight - g - f, a.top + z + C + O > k && (0 > d || n(k) > d) && (a.top += z + C + O)) : 0 < h && (c = a.top - b.collisionPosition.marginTop + z + C + O - e, a.top + z + C + O > h && (0 < c || h > n(c)) && (a.top += z + C + O))
                }
            },
            flipfit: {
                left: function() {
                    b.ui.position.flip.left.apply(this, arguments);
                    b.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    b.ui.position.flip.top.apply(this, arguments);
                    b.ui.position.fit.top.apply(this, arguments)
                }
            }
        }; (function() {
            var a, c, d, f, n = document.getElementsByTagName("body")[0];
            d = document.createElement("div");
            a = document.createElement(n ? "div": "body");
            c = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            };
            n && b.extend(c, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (f in c) a.style[f] = c[f];
            a.appendChild(d);
            c = n || document.documentElement;
            c.insertBefore(a, c.firstChild);
            d.style.cssText = "position: absolute; left: 10.7432222px;";
            d = b(d).offset().left;
            e = 10 < d && 11 > d;
            a.innerHTML = "";
            c.removeChild(a)
        })()
    })();
    b.ui.position;
    b.widget("ui.draggable", b.ui.mouse, {
        version: "1.11.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
            this.options.addClasses && this.element.addClass("ui-draggable");
            this.options.disabled && this.element.addClass("ui-draggable-disabled");
            this._setHandleClassName();
            this._mouseInit()
        },
        _setOption: function(a, b) {
            this._super(a, b);
            "handle" === a && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0)
        },
        _mouseCapture: function(a) {
            var c = this.document[0],
            d = this.options;
            try {
                c.activeElement && "body" !== c.activeElement.nodeName.toLowerCase() && b(c.activeElement).blur()
            } catch(e) {}
            return this.helper || d.disabled || 0 < b(a.target).closest(".ui-resizable-handle").length ? !1 : (this.handle = this._getHandle(a), this.handle ? (b(!0 === d.iframeFix ? "iframe": d.iframeFix).each(function() {
                b("\x3cdiv class\x3d'ui-draggable-iframeFix' style\x3d'background: #fff;'\x3e\x3c/div\x3e").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1E3
                }).css(b(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(a) {
            var c = this.options;
            return this.helper = this._createHelper(a),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            b.ui.ddmanager && (b.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(!0),
            this.offsetParent = this.helper.offsetParent(),
            this.offsetParentCssPosition = this.offsetParent.css("position"),
            this.offset = this.positionAbs = this.element.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            this.offset.scroll = !1,
            b.extend(this.offset, {
                click: {
                    left: a.pageX - this.offset.left,
                    top: a.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.originalPosition = this.position = this._generatePosition(a, !1),
            this.originalPageX = a.pageX,
            this.originalPageY = a.pageY,
            c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt),
            this._setContainment(),
            !1 === this._trigger("start", a) ? (this._clear(), !1) : (this._cacheHelperProportions(), b.ui.ddmanager && !c.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, a), this._mouseDrag(a, !0), b.ui.ddmanager && b.ui.ddmanager.dragStart(this, a), !0)
        },
        _mouseDrag: function(a, c) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(a, !0), this.positionAbs = this._convertPositionTo("absolute"), !c) {
                var d = this._uiHash();
                if (!1 === this._trigger("drag", a, d)) return this._mouseUp({}),
                !1;
                this.position = d.position
            }
            return this.helper[0].style.left = this.position.left + "px",
            this.helper[0].style.top = this.position.top + "px",
            b.ui.ddmanager && b.ui.ddmanager.drag(this, a),
            !1
        },
        _mouseStop: function(a) {
            var c = this,
            d = !1;
            return b.ui.ddmanager && !this.options.dropBehaviour && (d = b.ui.ddmanager.drop(this, a)),
            this.dropped && (d = this.dropped, this.dropped = !1),
            "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || !0 === this.options.revert || b.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? b(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10),
            function() { ! 1 !== c._trigger("stop", a) && c._clear()
            }) : !1 !== this._trigger("stop", a) && this._clear(),
            !1
        },
        _mouseUp: function(a) {
            return b("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }),
            b.ui.ddmanager && b.ui.ddmanager.dragStop(this, a),
            this.element.focus(),
            b.ui.mouse.prototype._mouseUp.call(this, a)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
            this
        },
        _getHandle: function(a) {
            return this.options.handle ? !!b(a.target).closest(this.element.find(this.options.handle)).length: !0
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this.handleElement.removeClass("ui-draggable-handle")
        },
        _createHelper: function(a) {
            var c = this.options;
            a = b.isFunction(c.helper) ? b(c.helper.apply(this.element[0], [a])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
            return a.parents("body").length || a.appendTo("parent" === c.appendTo ? this.element[0].parentNode: c.appendTo),
            a[0] === this.element[0] || /(fixed|absolute)/.test(a.css("position")) || a.css("position", "absolute"),
            a
        },
        _adjustOffsetFromHelper: function(a) {
            "string" == typeof a && (a = a.split(" "));
            b.isArray(a) && (a = {
                left: +a[0],
                top: +a[1] || 0
            });
            "left" in a && (this.offset.click.left = a.left + this.margins.left);
            "right" in a && (this.offset.click.left = this.helperProportions.width - a.right + this.margins.left);
            "top" in a && (this.offset.click.top = a.top + this.margins.top);
            "bottom" in a && (this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top)
        },
        _isRootNode: function(a) {
            return /(html|body)/i.test(a.tagName) || a === this.document[0]
        },
        _getParentOffset: function() {
            var a = this.offsetParent.offset(),
            c = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== c && b.contains(this.scrollParent[0], this.offsetParent[0]) && (a.left += this.scrollParent.scrollLeft(), a.top += this.scrollParent.scrollTop()),
            this._isRootNode(this.offsetParent[0]) && (a = {
                top: 0,
                left: 0
            }),
            {
                top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var a = this.element.position(),
            b = this._isRootNode(this.scrollParent[0]);
            return {
                top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (b ? 0 : this.scrollParent.scrollTop()),
                left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (b ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var a, c, d, e = this.options,
            f = this.document[0];
            return this.relativeContainer = null,
            e.containment ? "window" === e.containment ? (this.containment = [b(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, b(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, b(window).scrollLeft() + b(window).width() - this.helperProportions.width - this.margins.left, b(window).scrollTop() + (b(window).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === e.containment ? (this.containment = [0, 0, b(f).width() - this.helperProportions.width - this.margins.left, (b(f).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : e.containment.constructor === Array ? (this.containment = e.containment, void 0) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), c = b(e.containment), d = c[0], d && (a = "hidden" !== c.css("overflow"), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (a ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (a ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = c), void 0) : (this.containment = null, void 0)
        },
        _convertPositionTo: function(a, b) {
            b || (b = this.position);
            var d = "absolute" === a ? 1 : -1,
            e = this._isRootNode(this.scrollParent[0]);
            return {
                top: b.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.offset.scroll.top: e ? 0 : this.offset.scroll.top) * d,
                left: b.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.offset.scroll.left: e ? 0 : this.offset.scroll.left) * d
            }
        },
        _generatePosition: function(a, b) {
            var d, e, f, n, g = this.options,
            h = this._isRootNode(this.scrollParent[0]),
            k = a.pageX,
            p = a.pageY;
            return h && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }),
            b && (this.containment && (this.relativeContainer ? (e = this.relativeContainer.offset(), d = [this.containment[0] + e.left, this.containment[1] + e.top, this.containment[2] + e.left, this.containment[3] + e.top]) : d = this.containment, a.pageX - this.offset.click.left < d[0] && (k = d[0] + this.offset.click.left), a.pageY - this.offset.click.top < d[1] && (p = d[1] + this.offset.click.top), a.pageX - this.offset.click.left > d[2] && (k = d[2] + this.offset.click.left), a.pageY - this.offset.click.top > d[3] && (p = d[3] + this.offset.click.top)), g.grid && (f = g.grid[1] ? this.originalPageY + Math.round((p - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, p = d ? f - this.offset.click.top >= d[1] || f - this.offset.click.top > d[3] ? f: f - this.offset.click.top >= d[1] ? f - g.grid[1] : f + g.grid[1] : f, n = g.grid[0] ? this.originalPageX + Math.round((k - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, k = d ? n - this.offset.click.left >= d[0] || n - this.offset.click.left > d[2] ? n: n - this.offset.click.left >= d[0] ? n - g.grid[0] : n + g.grid[0] : n), "y" === g.axis && (k = this.originalPageX), "x" === g.axis && (p = this.originalPageY)),
            {
                top: p - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top: h ? 0 : this.offset.scroll.top),
                left: k - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left: h ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = !1;
            this.destroyOnClear && this.destroy()
        },
        _trigger: function(a, c, d) {
            return d = d || this._uiHash(),
            b.ui.plugin.call(this, a, [c, d, this], !0),
            "drag" === a && (this.positionAbs = this._convertPositionTo("absolute")),
            b.Widget.prototype._trigger.call(this, a, c, d)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    b.ui.plugin.add("draggable", "connectToSortable", {
        start: function(a, c, d) {
            var e = d.options,
            f = b.extend({},
            c, {
                item: d.element
            });
            d.sortables = [];
            b(e.connectToSortable).each(function() {
                var c = b(this).sortable("instance");
                c && !c.options.disabled && (d.sortables.push({
                    instance: c,
                    shouldRevert: c.options.revert
                }), c.refreshPositions(), c._trigger("activate", a, f))
            })
        },
        stop: function(a, c, d) {
            var e = b.extend({},
            c, {
                item: d.element
            });
            b.each(d.sortables,
            function() {
                this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(a), this.instance.options.helper = this.instance.options._helper, "original" === d.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", a, e))
            })
        },
        drag: function(a, c, d) {
            var e = this;
            b.each(d.sortables,
            function() {
                var f = !1,
                n = this;
                this.instance.positionAbs = d.positionAbs;
                this.instance.helperProportions = d.helperProportions;
                this.instance.offset.click = d.offset.click;
                this.instance._intersectsWith(this.instance.containerCache) && (f = !0, b.each(d.sortables,
                function() {
                    return this.instance.positionAbs = d.positionAbs,
                    this.instance.helperProportions = d.helperProportions,
                    this.instance.offset.click = d.offset.click,
                    this !== n && this.instance._intersectsWith(this.instance.containerCache) && b.contains(n.instance.element[0], this.instance.element[0]) && (f = !1),
                    f
                }));
                f ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = b(e).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return c.helper[0]
                },
                a.target = this.instance.currentItem[0], this.instance._mouseCapture(a, !0), this.instance._mouseStart(a, !0, !0), this.instance.offset.click.top = d.offset.click.top, this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, d._trigger("toSortable", a), d.dropped = this.instance.element, d.currentItem = d.element, this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(a)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", a, this.instance._uiHash(this.instance)), this.instance._mouseStop(a, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), d._trigger("fromSortable", a), d.dropped = !1)
            })
        }
    });
    b.ui.plugin.add("draggable", "cursor", {
        start: function(a, c, d) {
            a = b("body");
            d = d.options;
            a.css("cursor") && (d._cursor = a.css("cursor"));
            a.css("cursor", d.cursor)
        },
        stop: function(a, c, d) {
            a = d.options;
            a._cursor && b("body").css("cursor", a._cursor)
        }
    });
    b.ui.plugin.add("draggable", "opacity", {
        start: function(a, c, d) {
            a = b(c.helper);
            d = d.options;
            a.css("opacity") && (d._opacity = a.css("opacity"));
            a.css("opacity", d.opacity)
        },
        stop: function(a, c, d) {
            a = d.options;
            a._opacity && b(c.helper).css("opacity", a._opacity)
        }
    });
    b.ui.plugin.add("draggable", "scroll", {
        start: function(a, b, d) {
            d.scrollParentNotHidden || (d.scrollParentNotHidden = d.helper.scrollParent(!1));
            d.scrollParentNotHidden[0] !== d.document[0] && "HTML" !== d.scrollParentNotHidden[0].tagName && (d.overflowOffset = d.scrollParentNotHidden.offset())
        },
        drag: function(a, c, d) {
            c = d.options;
            var e = !1,
            f = d.scrollParentNotHidden[0],
            n = d.document[0];
            f !== n && "HTML" !== f.tagName ? (c.axis && "x" === c.axis || (d.overflowOffset.top + f.offsetHeight - a.pageY < c.scrollSensitivity ? f.scrollTop = e = f.scrollTop + c.scrollSpeed: a.pageY - d.overflowOffset.top < c.scrollSensitivity && (f.scrollTop = e = f.scrollTop - c.scrollSpeed)), c.axis && "y" === c.axis || (d.overflowOffset.left + f.offsetWidth - a.pageX < c.scrollSensitivity ? f.scrollLeft = e = f.scrollLeft + c.scrollSpeed: a.pageX - d.overflowOffset.left < c.scrollSensitivity && (f.scrollLeft = e = f.scrollLeft - c.scrollSpeed))) : (c.axis && "x" === c.axis || (a.pageY - b(n).scrollTop() < c.scrollSensitivity ? e = b(n).scrollTop(b(n).scrollTop() - c.scrollSpeed) : b(window).height() - (a.pageY - b(n).scrollTop()) < c.scrollSensitivity && (e = b(n).scrollTop(b(n).scrollTop() + c.scrollSpeed))), c.axis && "y" === c.axis || (a.pageX - b(n).scrollLeft() < c.scrollSensitivity ? e = b(n).scrollLeft(b(n).scrollLeft() - c.scrollSpeed) : b(window).width() - (a.pageX - b(n).scrollLeft()) < c.scrollSensitivity && (e = b(n).scrollLeft(b(n).scrollLeft() + c.scrollSpeed)))); ! 1 !== e && b.ui.ddmanager && !c.dropBehaviour && b.ui.ddmanager.prepareOffsets(d, a)
        }
    });
    b.ui.plugin.add("draggable", "snap", {
        start: function(a, c, d) {
            a = d.options;
            d.snapElements = [];
            b(a.snap.constructor !== String ? a.snap.items || ":data(ui-draggable)": a.snap).each(function() {
                var a = b(this),
                c = a.offset();
                this !== d.element[0] && d.snapElements.push({
                    item: this,
                    width: a.outerWidth(),
                    height: a.outerHeight(),
                    top: c.top,
                    left: c.left
                })
            })
        },
        drag: function(a, c, d) {
            var e, f, n, g, h, k, p, m, q, s, t = d.options,
            E = t.snapTolerance,
            u = c.offset.left,
            w = u + d.helperProportions.width,
            x = c.offset.top,
            A = x + d.helperProportions.height;
            for (q = d.snapElements.length - 1; 0 <= q; q--) h = d.snapElements[q].left,
            k = h + d.snapElements[q].width,
            p = d.snapElements[q].top,
            m = p + d.snapElements[q].height,
            h - E > w || u > k + E || p - E > A || x > m + E || !b.contains(d.snapElements[q].item.ownerDocument, d.snapElements[q].item) ? (d.snapElements[q].snapping && d.options.snap.release && d.options.snap.release.call(d.element, a, b.extend(d._uiHash(), {
                snapItem: d.snapElements[q].item
            })), d.snapElements[q].snapping = !1) : ("inner" !== t.snapMode && (e = E >= Math.abs(p - A), f = E >= Math.abs(m - x), n = E >= Math.abs(h - w), g = E >= Math.abs(k - u), e && (c.position.top = d._convertPositionTo("relative", {
                top: p - d.helperProportions.height,
                left: 0
            }).top - d.margins.top), f && (c.position.top = d._convertPositionTo("relative", {
                top: m,
                left: 0
            }).top - d.margins.top), n && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: h - d.helperProportions.width
            }).left - d.margins.left), g && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: k
            }).left - d.margins.left)), s = e || f || n || g, "outer" !== t.snapMode && (e = E >= Math.abs(p - x), f = E >= Math.abs(m - A), n = E >= Math.abs(h - u), g = E >= Math.abs(k - w), e && (c.position.top = d._convertPositionTo("relative", {
                top: p,
                left: 0
            }).top - d.margins.top), f && (c.position.top = d._convertPositionTo("relative", {
                top: m - d.helperProportions.height,
                left: 0
            }).top - d.margins.top), n && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left - d.margins.left), g && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: k - d.helperProportions.width
            }).left - d.margins.left)), !d.snapElements[q].snapping && (e || f || n || g || s) && d.options.snap.snap && d.options.snap.snap.call(d.element, a, b.extend(d._uiHash(), {
                snapItem: d.snapElements[q].item
            })), d.snapElements[q].snapping = e || f || n || g || s)
        }
    });
    b.ui.plugin.add("draggable", "stack", {
        start: function(a, c, d) {
            var e;
            a = b.makeArray(b(d.options.stack)).sort(function(a, c) {
                return (parseInt(b(a).css("zIndex"), 10) || 0) - (parseInt(b(c).css("zIndex"), 10) || 0)
            });
            a.length && (e = parseInt(b(a[0]).css("zIndex"), 10) || 0, b(a).each(function(a) {
                b(this).css("zIndex", e + a)
            }), this.css("zIndex", e + a.length))
        }
    });
    b.ui.plugin.add("draggable", "zIndex", {
        start: function(a, c, d) {
            a = b(c.helper);
            d = d.options;
            a.css("zIndex") && (d._zIndex = a.css("zIndex"));
            a.css("zIndex", d.zIndex)
        },
        stop: function(a, c, d) {
            a = d.options;
            a._zIndex && b(c.helper).css("zIndex", a._zIndex)
        }
    });
    b.ui.draggable;
    b.widget("ui.droppable", {
        version: "1.11.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var a, c = this.options,
            d = c.accept;
            this.isover = !1;
            this.isout = !0;
            this.accept = b.isFunction(d) ? d: function(a) {
                return a.is(d)
            };
            this.proportions = function() {
                return arguments.length ? (a = arguments[0], void 0) : a ? a: a = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            };
            this._addToManager(c.scope);
            c.addClasses && this.element.addClass("ui-droppable")
        },
        _addToManager: function(a) {
            b.ui.ddmanager.droppables[a] = b.ui.ddmanager.droppables[a] || [];
            b.ui.ddmanager.droppables[a].push(this)
        },
        _splice: function(a) {
            for (var b = 0; a.length > b; b++) a[b] === this && a.splice(b, 1)
        },
        _destroy: function() {
            this._splice(b.ui.ddmanager.droppables[this.options.scope]);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(a, c) {
            "accept" === a ? this.accept = b.isFunction(c) ? c: function(a) {
                return a.is(c)
            }: "scope" === a && (this._splice(b.ui.ddmanager.droppables[this.options.scope]), this._addToManager(c));
            this._super(a, c)
        },
        _activate: function(a) {
            var c = b.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass);
            c && this._trigger("activate", a, this.ui(c))
        },
        _deactivate: function(a) {
            var c = b.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass);
            c && this._trigger("deactivate", a, this.ui(c))
        },
        _over: function(a) {
            var c = b.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", a, this.ui(c)))
        },
        _out: function(a) {
            var c = b.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", a, this.ui(c)))
        },
        _drop: function(a, c) {
            var d = c || b.ui.ddmanager.current,
            e = !1;
            return d && (d.currentItem || d.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var c = b(this).droppable("instance");
                return c.options.greedy && !c.options.disabled && c.options.scope === d.options.scope && c.accept.call(c.element[0], d.currentItem || d.element) && b.ui.intersect(d, b.extend(c, {
                    offset: c.element.offset()
                }), c.options.tolerance, a) ? (e = !0, !1) : void 0
            }), e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", a, this.ui(d)), this.element) : !1) : !1
        },
        ui: function(a) {
            return {
                draggable: a.currentItem || a.element,
                helper: a.helper,
                position: a.position,
                offset: a.positionAbs
            }
        }
    });
    b.ui.intersect = function() {
        return function(a, b, d, e) {
            if (!b.offset) return ! 1;
            var f = (a.positionAbs || a.position.absolute).left,
            n = (a.positionAbs || a.position.absolute).top,
            g = f + a.helperProportions.width,
            h = n + a.helperProportions.height,
            k = b.offset.left,
            p = b.offset.top,
            m = k + b.proportions().width,
            q = p + b.proportions().height;
            switch (d) {
            case "fit":
                return f >= k && m >= g && n >= p && q >= h;
            case "intersect":
                return f + a.helperProportions.width / 2 > k && m > g - a.helperProportions.width / 2 && n + a.helperProportions.height / 2 > p && q > h - a.helperProportions.height / 2;
            case "pointer":
                a = e.pageY;
                d = b.proportions().height;
                if (p = a >= p && p + d > a) e = e.pageX,
                b = b.proportions().width,
                p = e >= k && k + b > e;
                return p;
            case "touch":
                return (n >= p && q >= n || h >= p && q >= h || p > n && h > q) && (f >= k && m >= f || g >= k && m >= g || k > f && g > m);
            default:
                return ! 1
            }
        }
    } ();
    b.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(a, c) {
            var d, e, f = b.ui.ddmanager.droppables[a.options.scope] || [],
            n = c ? c.type: null,
            g = (a.currentItem || a.element).find(":data(ui-droppable)").addBack();
            d = 0;
            a: for (; f.length > d; d++) if (! (f[d].options.disabled || a && !f[d].accept.call(f[d].element[0], a.currentItem || a.element))) {
                for (e = 0; g.length > e; e++) if (g[e] === f[d].element[0]) {
                    f[d].proportions().height = 0;
                    continue a
                }
                f[d].visible = "none" !== f[d].element.css("display");
                f[d].visible && ("mousedown" === n && f[d]._activate.call(f[d], c), f[d].offset = f[d].element.offset(), f[d].proportions({
                    width: f[d].element[0].offsetWidth,
                    height: f[d].element[0].offsetHeight
                }))
            }
        },
        drop: function(a, c) {
            var d = !1;
            return b.each((b.ui.ddmanager.droppables[a.options.scope] || []).slice(),
            function() {
                this.options && (!this.options.disabled && this.visible && b.ui.intersect(a, this, this.options.tolerance, c) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], a.currentItem || a.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, c)))
            }),
            d
        },
        dragStart: function(a, c) {
            a.element.parentsUntil("body").bind("scroll.droppable",
            function() {
                a.options.refreshPositions || b.ui.ddmanager.prepareOffsets(a, c)
            })
        },
        drag: function(a, c) {
            a.options.refreshPositions && b.ui.ddmanager.prepareOffsets(a, c);
            b.each(b.ui.ddmanager.droppables[a.options.scope] || [],
            function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var d, e, f, n = b.ui.intersect(a, this, this.options.tolerance, c); (n = !n && this.isover ? "isout": n && !this.isover ? "isover": null) && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                        return b(this).droppable("instance").options.scope === e
                    }), f.length && (d = b(f[0]).droppable("instance"), d.greedyChild = "isover" === n)), d && "isover" === n && (d.isover = !1, d.isout = !0, d._out.call(d, c)), this[n] = !0, this["isout" === n ? "isover": "isout"] = !1, this["isover" === n ? "_over": "_out"].call(this, c), d && "isout" === n && (d.isout = !1, d.isover = !0, d._over.call(d, c)))
                }
            })
        },
        dragStop: function(a, c) {
            a.element.parentsUntil("body").unbind("scroll.droppable");
            a.options.refreshPositions || b.ui.ddmanager.prepareOffsets(a, c)
        }
    };
    b.ui.droppable;
    b.widget("ui.resizable", b.ui.mouse, {
        version: "1.11.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(a) {
            return parseInt(a, 10) || 0
        },
        _isNumber: function(a) {
            return ! isNaN(parseInt(a, 10))
        },
        _hasScroll: function(a, c) {
            if ("hidden" === b(a).css("overflow")) return ! 1;
            var d = c && "left" === c ? "scrollLeft": "scrollTop",
            e = !1;
            return 0 < a[d] ? !0 : (a[d] = 1, e = 0 < a[d], a[d] = 0, e)
        },
        _create: function() {
            var a, c, d, e, f, n = this,
            g = this.options;
            if (this.element.addClass("ui-resizable"), b.extend(this, {
                _aspectRatio: !!g.aspectRatio,
                aspectRatio: g.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: g.helper || g.ghost || g.animate ? g.helper || "ui-resizable-helper": null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(b("\x3cdiv class\x3d'ui-wrapper' style\x3d'overflow: hidden;'\x3e\x3c/div\x3e").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = g.handles || (b(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            }: "e,s,se"), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), a = this.handles.split(","), this.handles = {},
            c = 0; a.length > c; c++) d = b.trim(a[c]),
            f = "ui-resizable-" + d,
            e = b("\x3cdiv class\x3d'ui-resizable-handle " + f + "'\x3e\x3c/div\x3e"),
            e.css({
                zIndex: g.zIndex
            }),
            "se" === d && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
            this.handles[d] = ".ui-resizable-" + d,
            this.element.append(e);
            this._renderAxis = function(a) {
                var c, d, e, f;
                a = a || this.element;
                for (c in this.handles) this.handles[c].constructor === String && (this.handles[c] = this.element.children(this.handles[c]).first().show()),
                this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (d = b(this.handles[c], this.element), f = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), e = ["padding", /ne|nw|n/.test(c) ? "Top": /se|sw|s/.test(c) ? "Bottom": /^e$/.test(c) ? "Right": "Left"].join(""), a.css(e, f), this._proportionallyResize()),
                b(this.handles[c]).length
            };
            this._renderAxis(this.element);
            this._handles = b(".ui-resizable-handle", this.element).disableSelection();
            this._handles.mouseover(function() {
                n.resizing || (this.className && (e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), n.axis = e && e[1] ? e[1] : "se")
            });
            g.autoHide && (this._handles.hide(), b(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                g.disabled || (b(this).removeClass("ui-resizable-autohide"), n._handles.show())
            }).mouseleave(function() {
                g.disabled || n.resizing || (b(this).addClass("ui-resizable-autohide"), n._handles.hide())
            }));
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var a, c = function(a) {
                b(a).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (c(this.element), a = this.element, this.originalElement.css({
                position: a.css("position"),
                width: a.outerWidth(),
                height: a.outerHeight(),
                top: a.css("top"),
                left: a.css("left")
            }).insertAfter(a), a.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            c(this.originalElement),
            this
        },
        _mouseCapture: function(a) {
            var c, d, e = !1;
            for (c in this.handles) d = b(this.handles[c])[0],
            (d === a.target || b.contains(d, a.target)) && (e = !0);
            return ! this.options.disabled && e
        },
        _mouseStart: function(a) {
            var c, d, e, f = this.options,
            n = this.element;
            return this.resizing = !0,
            this._renderProxy(),
            c = this._num(this.helper.css("left")),
            d = this._num(this.helper.css("top")),
            f.containment && (c += b(f.containment).scrollLeft() || 0, d += b(f.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: c,
                top: d
            },
            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            }: {
                width: n.width(),
                height: n.height()
            },
            this.originalSize = this._helper ? {
                width: n.outerWidth(),
                height: n.outerHeight()
            }: {
                width: n.width(),
                height: n.height()
            },
            this.sizeDiff = {
                width: n.outerWidth() - n.width(),
                height: n.outerHeight() - n.height()
            },
            this.originalPosition = {
                left: c,
                top: d
            },
            this.originalMousePosition = {
                left: a.pageX,
                top: a.pageY
            },
            this.aspectRatio = "number" == typeof f.aspectRatio ? f.aspectRatio: this.originalSize.width / this.originalSize.height || 1,
            e = b(".ui-resizable-" + this.axis).css("cursor"),
            b("body").css("cursor", "auto" === e ? this.axis + "-resize": e),
            n.addClass("ui-resizable-resizing"),
            this._propagate("start", a),
            !0
        },
        _mouseDrag: function(a) {
            var c, d, e = this.originalMousePosition,
            f = a.pageX - e.left || 0,
            e = a.pageY - e.top || 0,
            n = this._change[this.axis];
            return this._updatePrevProperties(),
            n ? (c = n.apply(this, [a, f, e]), this._updateVirtualBoundaries(a.shiftKey), (this._aspectRatio || a.shiftKey) && (c = this._updateRatio(c, a)), c = this._respectSize(c, a), this._updateCache(c), this._propagate("resize", a), d = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), b.isEmptyObject(d) || (this._updatePrevProperties(), this._trigger("resize", a, this.ui()), this._applyChanges()), !1) : !1
        },
        _mouseStop: function(a) {
            this.resizing = !1;
            var c, d, e, f, n, g, h, k = this.options;
            return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), e = d && this._hasScroll(c[0], "left") ? 0 : this.sizeDiff.height, f = d ? 0 : this.sizeDiff.width, n = {
                width: this.helper.width() - f,
                height: this.helper.height() - e
            },
            g = parseInt(this.element.css("left"), 10) + (this.position.left - this.originalPosition.left) || null, h = parseInt(this.element.css("top"), 10) + (this.position.top - this.originalPosition.top) || null, k.animate || this.element.css(b.extend(n, {
                top: h,
                left: g
            })), this.helper.height(this.size.height), this.helper.width(this.size.width), this._helper && !k.animate && this._proportionallyResize()),
            b("body").css("cursor", "auto"),
            this.element.removeClass("ui-resizable-resizing"),
            this._propagate("stop", a),
            this._helper && this.helper.remove(),
            !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            };
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var a = {};
            return this.position.top !== this.prevPosition.top && (a.top = this.position.top + "px"),
            this.position.left !== this.prevPosition.left && (a.left = this.position.left + "px"),
            this.size.width !== this.prevSize.width && (a.width = this.size.width + "px"),
            this.size.height !== this.prevSize.height && (a.height = this.size.height + "px"),
            this.helper.css(a),
            a
        },
        _updateVirtualBoundaries: function(a) {
            var b, d, e, f, n;
            n = this.options;
            n = {
                minWidth: this._isNumber(n.minWidth) ? n.minWidth: 0,
                maxWidth: this._isNumber(n.maxWidth) ? n.maxWidth: 1 / 0,
                minHeight: this._isNumber(n.minHeight) ? n.minHeight: 0,
                maxHeight: this._isNumber(n.maxHeight) ? n.maxHeight: 1 / 0
            }; (this._aspectRatio || a) && (b = n.minHeight * this.aspectRatio, e = n.minWidth / this.aspectRatio, d = n.maxHeight * this.aspectRatio, f = n.maxWidth / this.aspectRatio, b > n.minWidth && (n.minWidth = b), e > n.minHeight && (n.minHeight = e), n.maxWidth > d && (n.maxWidth = d), n.maxHeight > f && (n.maxHeight = f));
            this._vBoundaries = n
        },
        _updateCache: function(a) {
            this.offset = this.helper.offset();
            this._isNumber(a.left) && (this.position.left = a.left);
            this._isNumber(a.top) && (this.position.top = a.top);
            this._isNumber(a.height) && (this.size.height = a.height);
            this._isNumber(a.width) && (this.size.width = a.width)
        },
        _updateRatio: function(a) {
            var b = this.position,
            d = this.size,
            e = this.axis;
            return this._isNumber(a.height) ? a.width = a.height * this.aspectRatio: this._isNumber(a.width) && (a.height = a.width / this.aspectRatio),
            "sw" === e && (a.left = b.left + (d.width - a.width), a.top = null),
            "nw" === e && (a.top = b.top + (d.height - a.height), a.left = b.left + (d.width - a.width)),
            a
        },
        _respectSize: function(a) {
            var b = this._vBoundaries,
            d = this.axis,
            e = this._isNumber(a.width) && b.maxWidth && b.maxWidth < a.width,
            f = this._isNumber(a.height) && b.maxHeight && b.maxHeight < a.height,
            n = this._isNumber(a.width) && b.minWidth && b.minWidth > a.width,
            g = this._isNumber(a.height) && b.minHeight && b.minHeight > a.height,
            h = this.originalPosition.left + this.originalSize.width,
            k = this.position.top + this.size.height,
            p = /sw|nw|w/.test(d),
            d = /nw|ne|n/.test(d);
            return n && (a.width = b.minWidth),
            g && (a.height = b.minHeight),
            e && (a.width = b.maxWidth),
            f && (a.height = b.maxHeight),
            n && p && (a.left = h - b.minWidth),
            e && p && (a.left = h - b.maxWidth),
            g && d && (a.top = k - b.minHeight),
            f && d && (a.top = k - b.maxHeight),
            a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null,
            a
        },
        _getPaddingPlusBorderDimensions: function(a) {
            var b = 0,
            d = [],
            e = [a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth")];
            for (a = [a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft")]; 4 > b; b++) d[b] = parseInt(e[b], 10) || 0,
            d[b] += parseInt(a[b], 10) || 0;
            return {
                height: d[0] + d[2],
                width: d[1] + d[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) for (var a, b = 0,
            d = this.helper || this.element; this._proportionallyResizeElements.length > b; b++) a = this._proportionallyResizeElements[b],
            this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(a)),
            a.css({
                height: d.height() - this.outerDimensions.height || 0,
                width: d.width() - this.outerDimensions.width || 0
            })
        },
        _renderProxy: function() {
            var a = this.options;
            this.elementOffset = this.element.offset();
            this._helper ? (this.helper = this.helper || b("\x3cdiv style\x3d'overflow:hidden;'\x3e\x3c/div\x3e"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++a.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(a, b) {
                return {
                    width: this.originalSize.width + b
                }
            },
            w: function(a, b) {
                return {
                    left: this.originalPosition.left + b,
                    width: this.originalSize.width - b
                }
            },
            n: function(a, b, d) {
                return {
                    top: this.originalPosition.top + d,
                    height: this.originalSize.height - d
                }
            },
            s: function(a, b, d) {
                return {
                    height: this.originalSize.height + d
                }
            },
            se: function(a, c, d) {
                return b.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [a, c, d]))
            },
            sw: function(a, c, d) {
                return b.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [a, c, d]))
            },
            ne: function(a, c, d) {
                return b.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [a, c, d]))
            },
            nw: function(a, c, d) {
                return b.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [a, c, d]))
            }
        },
        _propagate: function(a, c) {
            b.ui.plugin.call(this, a, [c, this.ui()]);
            "resize" !== a && this._trigger(a, c, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    b.ui.plugin.add("resizable", "animate", {
        stop: function(a) {
            var c = b(this).resizable("instance"),
            d = c.options,
            e = c._proportionallyResizeElements,
            f = e.length && /textarea/i.test(e[0].nodeName),
            n = f && c._hasScroll(e[0], "left") ? 0 : c.sizeDiff.height,
            f = {
                width: c.size.width - (f ? 0 : c.sizeDiff.width),
                height: c.size.height - n
            },
            n = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null,
            g = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
            c.element.animate(b.extend(f, g && n ? {
                top: g,
                left: n
            }: {}), {
                duration: d.animateDuration,
                easing: d.animateEasing,
                step: function() {
                    var d = {
                        width: parseInt(c.element.css("width"), 10),
                        height: parseInt(c.element.css("height"), 10),
                        top: parseInt(c.element.css("top"), 10),
                        left: parseInt(c.element.css("left"), 10)
                    };
                    e && e.length && b(e[0]).css({
                        width: d.width,
                        height: d.height
                    });
                    c._updateCache(d);
                    c._propagate("resize", a)
                }
            })
        }
    });
    b.ui.plugin.add("resizable", "containment", {
        start: function() {
            var a, c, d, e, f, n, g, h = b(this).resizable("instance"),
            k = h.element,
            p = h.options.containment; (k = p instanceof b ? p.get(0) : /parent/.test(p) ? k.parent().get(0) : p) && (h.containerElement = b(k), /document/.test(p) || p === document ? (h.containerOffset = {
                left: 0,
                top: 0
            },
            h.containerPosition = {
                left: 0,
                top: 0
            },
            h.parentData = {
                element: b(document),
                left: 0,
                top: 0,
                width: b(document).width(),
                height: b(document).height() || document.body.parentNode.scrollHeight
            }) : (a = b(k), c = [], b(["Top", "Right", "Left", "Bottom"]).each(function(b, d) {
                c[b] = h._num(a.css("padding" + d))
            }), h.containerOffset = a.offset(), h.containerPosition = a.position(), h.containerSize = {
                height: a.innerHeight() - c[3],
                width: a.innerWidth() - c[1]
            },
            d = h.containerOffset, e = h.containerSize.height, f = h.containerSize.width, n = h._hasScroll(k, "left") ? k.scrollWidth: f, g = h._hasScroll(k) ? k.scrollHeight: e, h.parentData = {
                element: k,
                left: d.left,
                top: d.top,
                width: n,
                height: g
            }))
        },
        resize: function(a) {
            var c, d, e, f = b(this).resizable("instance");
            c = f.options;
            d = f.containerOffset;
            e = f.position;
            a = f._aspectRatio || a.shiftKey;
            var n = {
                top: 0,
                left: 0
            },
            g = f.containerElement,
            h = !0;
            g[0] !== document && /static/.test(g.css("position")) && (n = d);
            e.left < (f._helper ? d.left: 0) && (f.size.width += f._helper ? f.position.left - d.left: f.position.left - n.left, a && (f.size.height = f.size.width / f.aspectRatio, h = !1), f.position.left = c.helper ? d.left: 0);
            e.top < (f._helper ? d.top: 0) && (f.size.height += f._helper ? f.position.top - d.top: f.position.top, a && (f.size.width = f.size.height * f.aspectRatio, h = !1), f.position.top = f._helper ? d.top: 0);
            c = f.containerElement.get(0) === f.element.parent().get(0);
            e = /relative|absolute/.test(f.containerElement.css("position"));
            c && e ? (f.offset.left = f.parentData.left + f.position.left, f.offset.top = f.parentData.top + f.position.top) : (f.offset.left = f.element.offset().left, f.offset.top = f.element.offset().top);
            c = Math.abs(f.sizeDiff.width + (f._helper ? f.offset.left - n.left: f.offset.left - d.left));
            d = Math.abs(f.sizeDiff.height + (f._helper ? f.offset.top - n.top: f.offset.top - d.top));
            c + f.size.width >= f.parentData.width && (f.size.width = f.parentData.width - c, a && (f.size.height = f.size.width / f.aspectRatio, h = !1));
            d + f.size.height >= f.parentData.height && (f.size.height = f.parentData.height - d, a && (f.size.width = f.size.height * f.aspectRatio, h = !1));
            h || (f.position.left = f.prevPosition.left, f.position.top = f.prevPosition.top, f.size.width = f.prevSize.width, f.size.height = f.prevSize.height)
        },
        stop: function() {
            var a = b(this).resizable("instance"),
            c = a.options,
            d = a.containerOffset,
            e = a.containerPosition,
            f = a.containerElement,
            n = b(a.helper),
            g = n.offset(),
            h = n.outerWidth() - a.sizeDiff.width,
            n = n.outerHeight() - a.sizeDiff.height;
            a._helper && !c.animate && /relative/.test(f.css("position")) && b(this).css({
                left: g.left - e.left - d.left,
                width: h,
                height: n
            });
            a._helper && !c.animate && /static/.test(f.css("position")) && b(this).css({
                left: g.left - e.left - d.left,
                width: h,
                height: n
            })
        }
    });
    b.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var a = b(this).resizable("instance").options,
            c = function(a) {
                b(a).each(function() {
                    var a = b(this);
                    a.data("ui-resizable-alsoresize", {
                        width: parseInt(a.width(), 10),
                        height: parseInt(a.height(), 10),
                        left: parseInt(a.css("left"), 10),
                        top: parseInt(a.css("top"), 10)
                    })
                })
            };
            "object" != typeof a.alsoResize || a.alsoResize.parentNode ? c(a.alsoResize) : a.alsoResize.length ? (a.alsoResize = a.alsoResize[0], c(a.alsoResize)) : b.each(a.alsoResize,
            function(a) {
                c(a)
            })
        },
        resize: function(a, c) {
            var d = b(this).resizable("instance"),
            e = d.options,
            f = d.originalSize,
            n = d.originalPosition,
            g = {
                height: d.size.height - f.height || 0,
                width: d.size.width - f.width || 0,
                top: d.position.top - n.top || 0,
                left: d.position.left - n.left || 0
            },
            h = function(a, d) {
                b(a).each(function() {
                    var a = b(this),
                    e = b(this).data("ui-resizable-alsoresize"),
                    f = {},
                    n = d && d.length ? d: a.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    b.each(n,
                    function(a, b) {
                        var c = (e[b] || 0) + (g[b] || 0);
                        c && 0 <= c && (f[b] = c || null)
                    });
                    a.css(f)
                })
            };
            "object" != typeof e.alsoResize || e.alsoResize.nodeType ? h(e.alsoResize) : b.each(e.alsoResize,
            function(a, b) {
                h(a, b)
            })
        },
        stop: function() {
            b(this).removeData("resizable-alsoresize")
        }
    });
    b.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var a = b(this).resizable("instance"),
            c = a.options,
            d = a.size;
            a.ghost = a.originalElement.clone();
            a.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: d.height,
                width: d.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof c.ghost ? c.ghost: "");
            a.ghost.appendTo(a.helper)
        },
        resize: function() {
            var a = b(this).resizable("instance");
            a.ghost && a.ghost.css({
                position: "relative",
                height: a.size.height,
                width: a.size.width
            })
        },
        stop: function() {
            var a = b(this).resizable("instance");
            a.ghost && a.helper && a.helper.get(0).removeChild(a.ghost.get(0))
        }
    });
    b.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var a, c = b(this).resizable("instance"),
            d = c.options,
            e = c.size,
            f = c.originalSize,
            n = c.originalPosition,
            g = c.axis,
            h = "number" == typeof d.grid ? [d.grid, d.grid] : d.grid,
            k = h[0] || 1,
            p = h[1] || 1,
            m = Math.round((e.width - f.width) / k) * k,
            e = Math.round((e.height - f.height) / p) * p,
            q = f.width + m,
            s = f.height + e,
            t = d.maxWidth && q > d.maxWidth,
            E = d.maxHeight && s > d.maxHeight,
            u = d.minWidth && d.minWidth > q,
            w = d.minHeight && d.minHeight > s;
            d.grid = h;
            u && (q += k);
            w && (s += p);
            t && (q -= k);
            E && (s -= p);
            /^(se|s|e)$/.test(g) ? (c.size.width = q, c.size.height = s) : /^(ne)$/.test(g) ? (c.size.width = q, c.size.height = s, c.position.top = n.top - e) : /^(sw)$/.test(g) ? (c.size.width = q, c.size.height = s, c.position.left = n.left - m) : ((0 >= s - p || 0 >= q - k) && (a = c._getPaddingPlusBorderDimensions(this)), 0 < s - p ? (c.size.height = s, c.position.top = n.top - e) : (s = p - a.height, c.size.height = s, c.position.top = n.top + f.height - s), 0 < q - k ? (c.size.width = q, c.position.left = n.left - m) : (q = p - a.height, c.size.width = q, c.position.left = n.left + f.width - q))
        }
    });
    b.ui.resizable;
    b.widget("ui.selectable", b.ui.mouse, {
        version: "1.11.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var a, c = this;
            this.element.addClass("ui-selectable");
            this.dragged = !1;
            this.refresh = function() {
                a = b(c.options.filter, c.element[0]);
                a.addClass("ui-selectee");
                a.each(function() {
                    var a = b(this),
                    c = a.offset();
                    b.data(this, "selectable-item", {
                        element: this,
                        $element: a,
                        left: c.left,
                        top: c.top,
                        right: c.left + a.outerWidth(),
                        bottom: c.top + a.outerHeight(),
                        startselected: !1,
                        selected: a.hasClass("ui-selected"),
                        selecting: a.hasClass("ui-selecting"),
                        unselecting: a.hasClass("ui-unselecting")
                    })
                })
            };
            this.refresh();
            this.selectees = a.addClass("ui-selectee");
            this._mouseInit();
            this.helper = b("\x3cdiv class\x3d'ui-selectable-helper'\x3e\x3c/div\x3e")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item");
            this.element.removeClass("ui-selectable ui-selectable-disabled");
            this._mouseDestroy()
        },
        _mouseStart: function(a) {
            var c = this,
            d = this.options;
            this.opos = [a.pageX, a.pageY];
            this.options.disabled || (this.selectees = b(d.filter, this.element[0]), this._trigger("start", a), b(d.appendTo).append(this.helper), this.helper.css({
                left: a.pageX,
                top: a.pageY,
                width: 0,
                height: 0
            }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var d = b.data(this, "selectable-item");
                d.startselected = !0;
                a.metaKey || a.ctrlKey || (d.$element.removeClass("ui-selected"), d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", a, {
                    unselecting: d.element
                }))
            }), b(a.target).parents().addBack().each(function() {
                var d, f = b.data(this, "selectable-item");
                return f ? (d = !a.metaKey && !a.ctrlKey || !f.$element.hasClass("ui-selected"), f.$element.removeClass(d ? "ui-unselecting": "ui-selected").addClass(d ? "ui-selecting": "ui-unselecting"), f.unselecting = !d, f.selecting = d, f.selected = d, d ? c._trigger("selecting", a, {
                    selecting: f.element
                }) : c._trigger("unselecting", a, {
                    unselecting: f.element
                }), !1) : void 0
            }))
        },
        _mouseDrag: function(a) {
            if (this.dragged = !0, !this.options.disabled) {
                var c, d = this,
                e = this.options,
                f = this.opos[0],
                n = this.opos[1],
                g = a.pageX,
                h = a.pageY;
                return f > g && (c = g, g = f, f = c),
                n > h && (c = h, h = n, n = c),
                this.helper.css({
                    left: f,
                    top: n,
                    width: g - f,
                    height: h - n
                }),
                this.selectees.each(function() {
                    var c = b.data(this, "selectable-item"),
                    k = !1;
                    c && c.element !== d.element[0] && ("touch" === e.tolerance ? k = !(c.left > g || f > c.right || c.top > h || n > c.bottom) : "fit" === e.tolerance && (k = c.left > f && g > c.right && c.top > n && h > c.bottom), k ? (c.selected && (c.$element.removeClass("ui-selected"), c.selected = !1), c.unselecting && (c.$element.removeClass("ui-unselecting"), c.unselecting = !1), c.selecting || (c.$element.addClass("ui-selecting"), c.selecting = !0, d._trigger("selecting", a, {
                        selecting: c.element
                    }))) : (c.selecting && ((a.metaKey || a.ctrlKey) && c.startselected ? (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.$element.addClass("ui-selected"), c.selected = !0) : (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.startselected && (c.$element.addClass("ui-unselecting"), c.unselecting = !0), d._trigger("unselecting", a, {
                        unselecting: c.element
                    }))), c.selected && (a.metaKey || a.ctrlKey || c.startselected || (c.$element.removeClass("ui-selected"), c.selected = !1, c.$element.addClass("ui-unselecting"), c.unselecting = !0, d._trigger("unselecting", a, {
                        unselecting: c.element
                    })))))
                }),
                !1
            }
        },
        _mouseStop: function(a) {
            var c = this;
            return this.dragged = !1,
            b(".ui-unselecting", this.element[0]).each(function() {
                var d = b.data(this, "selectable-item");
                d.$element.removeClass("ui-unselecting");
                d.unselecting = !1;
                d.startselected = !1;
                c._trigger("unselected", a, {
                    unselected: d.element
                })
            }),
            b(".ui-selecting", this.element[0]).each(function() {
                var d = b.data(this, "selectable-item");
                d.$element.removeClass("ui-selecting").addClass("ui-selected");
                d.selecting = !1;
                d.selected = !0;
                d.startselected = !0;
                c._trigger("selected", a, {
                    selected: d.element
                })
            }),
            this._trigger("stop", a),
            this.helper.remove(),
            !1
        }
    });
    b.widget("ui.sortable", b.ui.mouse, {
        version: "1.11.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "\x3e *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1E3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(a, b, d) {
            return a >= b && b + d > a
        },
        _isFloating: function(a) {
            return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"))
        },
        _create: function() {
            var a = this.options;
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating = this.items.length ? "x" === a.axis || this._isFloating(this.items[0].item) : !1;
            this.offset = this.element.offset();
            this._mouseInit();
            this._setHandleClassName();
            this.ready = !0
        },
        _setOption: function(a, b) {
            this._super(a, b);
            "handle" === a && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle");
            b.each(this.items,
            function() { (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
            })
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle");
            this._mouseDestroy();
            for (var a = this.items.length - 1; 0 <= a; a--) this.items[a].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(a, c) {
            var d = null,
            e = !1,
            f = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(a), b(a.target).parents().each(function() {
                return b.data(this, f.widgetName + "-item") === f ? (d = b(this), !1) : void 0
            }), b.data(a.target, f.widgetName + "-item") === f && (d = b(a.target)), d ? !this.options.handle || c || (b(this.options.handle, d).find("*").addBack().each(function() {
                this === a.target && (e = !0)
            }), e) ? (this.currentItem = d, this._removeCurrentsFromItems(), !0) : !1 : !1)
        },
        _mouseStart: function(a, c, d) {
            var e;
            c = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(a), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            b.extend(this.offset, {
                click: {
                    left: a.pageX - this.offset.left,
                    top: a.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(a), this.originalPageX = a.pageX, this.originalPageY = a.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), c.containment && this._setContainment(), c.cursor && "auto" !== c.cursor && (e = this.document.find("body"), this.storedCursor = e.css("cursor"), e.css("cursor", c.cursor), this.storedStylesheet = b("\x3cstyle\x3e*{ cursor: " + c.cursor + " !important; }\x3c/style\x3e").appendTo(e)), c.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", c.opacity)), c.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", c.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", a, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !d) for (d = this.containers.length - 1; 0 <= d; d--) this.containers[d]._trigger("activate", a, this._uiHash(this));
            return b.ui.ddmanager && (b.ui.ddmanager.current = this),
            b.ui.ddmanager && !c.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, a),
            this.dragging = !0,
            this.helper.addClass("ui-sortable-helper"),
            this._mouseDrag(a),
            !0
        },
        _mouseDrag: function(a) {
            var c, d, e, f;
            c = this.options;
            var n = !1;
            this.position = this._generatePosition(a);
            this.positionAbs = this._convertPositionTo("absolute");
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
            this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - a.pageY < c.scrollSensitivity ? this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop + c.scrollSpeed: a.pageY - this.overflowOffset.top < c.scrollSensitivity && (this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop - c.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - a.pageX < c.scrollSensitivity ? this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft + c.scrollSpeed: a.pageX - this.overflowOffset.left < c.scrollSensitivity && (this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft - c.scrollSpeed)) : (a.pageY - b(document).scrollTop() < c.scrollSensitivity ? n = b(document).scrollTop(b(document).scrollTop() - c.scrollSpeed) : b(window).height() - (a.pageY - b(document).scrollTop()) < c.scrollSensitivity && (n = b(document).scrollTop(b(document).scrollTop() + c.scrollSpeed)), a.pageX - b(document).scrollLeft() < c.scrollSensitivity ? n = b(document).scrollLeft(b(document).scrollLeft() - c.scrollSpeed) : b(window).width() - (a.pageX - b(document).scrollLeft()) < c.scrollSensitivity && (n = b(document).scrollLeft(b(document).scrollLeft() + c.scrollSpeed))), !1 !== n && b.ui.ddmanager && !c.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, a));
            this.positionAbs = this._convertPositionTo("absolute");
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px");
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px");
            for (c = this.items.length - 1; 0 <= c; c--) if (d = this.items[c], e = d.item[0], f = this._intersectsWithPointer(d), f && d.instance === this.currentContainer && e !== this.currentItem[0] && this.placeholder[1 === f ? "next": "prev"]()[0] !== e && !b.contains(this.placeholder[0], e) && ("semi-dynamic" === this.options.type ? !b.contains(this.element[0], e) : !0)) {
                if (this.direction = 1 === f ? "down": "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(d)) break;
                this._rearrange(a, d);
                this._trigger("change", a, this._uiHash());
                break
            }
            return this._contactContainers(a),
            b.ui.ddmanager && b.ui.ddmanager.drag(this, a),
            this._trigger("sort", a, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(a, c) {
            if (a) {
                if (b.ui.ddmanager && !this.options.dropBehaviour && b.ui.ddmanager.drop(this, a), this.options.revert) {
                    var d = this,
                    e = this.placeholder.offset(),
                    f = this.options.axis,
                    n = {};
                    f && "x" !== f || (n.left = e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft));
                    f && "y" !== f || (n.top = e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop));
                    this.reverting = !0;
                    b(this.helper).animate(n, parseInt(this.options.revert, 10) || 500,
                    function() {
                        d._clear(a)
                    })
                } else this._clear(a, c);
                return ! 1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                });
                "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var a = this.containers.length - 1; 0 <= a; a--) this.containers[a]._trigger("deactivate", null, this._uiHash(this)),
                this.containers[a].containerCache.over && (this.containers[a]._trigger("out", null, this._uiHash(this)), this.containers[a].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), b.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? b(this.domPosition.prev).after(this.currentItem) : b(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(a) {
            var c = this._getItemsAsjQuery(a && a.connected),
            d = [];
            return a = a || {},
            b(c).each(function() {
                var c = (b(a.item || this).attr(a.attribute || "id") || "").match(a.expression || /(.+)[\-=_](.+)/);
                c && d.push((a.key || c[1] + "[]") + "\x3d" + (a.key && a.expression ? c[1] : c[2]))
            }),
            !d.length && a.key && d.push(a.key + "\x3d"),
            d.join("\x26")
        },
        toArray: function(a) {
            var c = this._getItemsAsjQuery(a && a.connected),
            d = [];
            return a = a || {},
            c.each(function() {
                d.push(b(a.item || this).attr(a.attribute || "id") || "")
            }),
            d
        },
        _intersectsWith: function(a) {
            var b = this.positionAbs.left,
            d = b + this.helperProportions.width,
            e = this.positionAbs.top,
            f = e + this.helperProportions.height,
            n = a.left,
            g = n + a.width,
            h = a.top,
            k = h + a.height,
            p = this.offset.click.top,
            q = this.offset.click.left,
            q = "y" === this.options.axis || b + q > n && g > b + q,
            p = ("x" === this.options.axis || e + p > h && k > e + p) && q;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width": "height"] > a[this.floating ? "width": "height"] ? p: b + this.helperProportions.width / 2 > n && g > d - this.helperProportions.width / 2 && e + this.helperProportions.height / 2 > h && k > f - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(a) {
            var b = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height);
            a = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width);
            b = b && a;
            a = this._getDragVerticalDirection();
            var d = this._getDragHorizontalDirection();
            return b ? this.floating ? d && "right" === d || "down" === a ? 2 : 1 : a && ("down" === a ? 2 : 1) : !1
        },
        _intersectsWithSides: function(a) {
            var b = this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height);
            a = this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width);
            var d = this._getDragVerticalDirection(),
            e = this._getDragHorizontalDirection();
            return this.floating && e ? "right" === e && a || "left" === e && !a: d && ("down" === d && b || "up" === d && !b)
        },
        _getDragVerticalDirection: function() {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== a && (0 < a ? "down": "up")
        },
        _getDragHorizontalDirection: function() {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== a && (0 < a ? "right": "left")
        },
        refresh: function(a) {
            return this._refreshItems(a),
            this._setHandleClassName(),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var a = this.options;
            return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith
        },
        _getItemsAsjQuery: function(a) {
            function c() {
                n.push(this)
            }
            var d, e, f, n = [],
            g = [],
            h = this._connectWith();
            if (h && a) for (a = h.length - 1; 0 <= a; a--) for (e = b(h[a]), d = e.length - 1; 0 <= d; d--)(f = b.data(e[d], this.widgetFullName)) && f !== this && !f.options.disabled && g.push([b.isFunction(f.options.items) ? f.options.items.call(f.element) : b(f.options.items, f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), f]);
            g.push([b.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : b(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (a = g.length - 1; 0 <= a; a--) g[a][0].each(c);
            return b(n)
        },
        _removeCurrentsFromItems: function() {
            var a = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = b.grep(this.items,
            function(b) {
                for (var d = 0; a.length > d; d++) if (a[d] === b.item[0]) return ! 1;
                return ! 0
            })
        },
        _refreshItems: function(a) {
            this.items = [];
            this.containers = [this];
            var c, d, e, f, n, g = this.items,
            h = [[b.isFunction(this.options.items) ? this.options.items.call(this.element[0], a, {
                item: this.currentItem
            }) : b(this.options.items, this.element), this]];
            if ((n = this._connectWith()) && this.ready) for (c = n.length - 1; 0 <= c; c--) for (e = b(n[c]), d = e.length - 1; 0 <= d; d--)(f = b.data(e[d], this.widgetFullName)) && f !== this && !f.options.disabled && (h.push([b.isFunction(f.options.items) ? f.options.items.call(f.element[0], a, {
                item: this.currentItem
            }) : b(f.options.items, f.element), f]), this.containers.push(f));
            for (c = h.length - 1; 0 <= c; c--) for (a = h[c][1], e = h[c][0], d = 0, n = e.length; n > d; d++) f = b(e[d]),
            f.data(this.widgetName + "-item", a),
            g.push({
                item: f,
                instance: a,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            })
        },
        refreshPositions: function(a) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var c, d, e, f;
            for (c = this.items.length - 1; 0 <= c; c--) d = this.items[c],
            d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (e = this.options.toleranceElement ? b(this.options.toleranceElement, d.item) : d.item, a || (d.width = e.outerWidth(), d.height = e.outerHeight()), f = e.offset(), d.left = f.left, d.top = f.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else for (c = this.containers.length - 1; 0 <= c; c--) f = this.containers[c].element.offset(),
            this.containers[c].containerCache.left = f.left,
            this.containers[c].containerCache.top = f.top,
            this.containers[c].containerCache.width = this.containers[c].element.outerWidth(),
            this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
            return this
        },
        _createPlaceholder: function(a) {
            a = a || this;
            var c, d = a.options;
            d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {
                element: function() {
                    var d = a.currentItem[0].nodeName.toLowerCase(),
                    f = b("\x3c" + d + "\x3e", a.document[0]).addClass(c || a.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === d ? a.currentItem.children().each(function() {
                        b("\x3ctd\x3e\x26#160;\x3c/td\x3e", a.document[0]).attr("colspan", b(this).attr("colspan") || 1).appendTo(f)
                    }) : "img" === d && f.attr("src", a.currentItem.attr("src")),
                    c || f.css("visibility", "hidden"),
                    f
                },
                update: function(b, f) { (!c || d.forcePlaceholderSize) && (f.height() || f.height(a.currentItem.innerHeight() - parseInt(a.currentItem.css("paddingTop") || 0, 10) - parseInt(a.currentItem.css("paddingBottom") || 0, 10)), f.width() || f.width(a.currentItem.innerWidth() - parseInt(a.currentItem.css("paddingLeft") || 0, 10) - parseInt(a.currentItem.css("paddingRight") || 0, 10)))
                }
            });
            a.placeholder = b(d.placeholder.element.call(a.element, a.currentItem));
            a.currentItem.after(a.placeholder);
            d.placeholder.update(a, a.placeholder)
        },
        _contactContainers: function(a) {
            var c, d, e, f, n, g, h, k, p = f = null;
            for (c = this.containers.length - 1; 0 <= c; c--) b.contains(this.currentItem[0], this.containers[c].element[0]) || (this._intersectsWith(this.containers[c].containerCache) ? f && b.contains(this.containers[c].element[0], f.element[0]) || (f = this.containers[c], p = c) : this.containers[c].containerCache.over && (this.containers[c]._trigger("out", a, this._uiHash(this)), this.containers[c].containerCache.over = 0));
            if (f) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", a, this._uiHash(this)), this.containers[p].containerCache.over = 1);
            else {
                c = 1E4;
                e = null;
                f = (d = f.floating || this._isFloating(this.currentItem)) ? "left": "top";
                n = d ? "width": "height";
                k = d ? "clientX": "clientY";
                for (d = this.items.length - 1; 0 <= d; d--) b.contains(this.containers[p].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (g = this.items[d].item.offset()[f], h = !1, a[k] - g > this.items[d][n] / 2 && (h = !0), c > Math.abs(a[k] - g) && (c = Math.abs(a[k] - g), e = this.items[d], this.direction = h ? "up": "down")); (e || this.options.dropOnEmpty) && this.currentContainer !== this.containers[p] && (e ? this._rearrange(a, e, null, !0) : this._rearrange(a, null, this.containers[p].element, !0), this._trigger("change", a, this._uiHash()), this.containers[p]._trigger("change", a, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", a, this._uiHash(this)), this.containers[p].containerCache.over = 1)
            }
        },
        _createHelper: function(a) {
            var c = this.options;
            a = b.isFunction(c.helper) ? b(c.helper.apply(this.element[0], [a, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
            return a.parents("body").length || b("parent" !== c.appendTo ? c.appendTo: this.currentItem[0].parentNode)[0].appendChild(a[0]),
            a[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            (!a[0].style.width || c.forceHelperSize) && a.width(this.currentItem.width()),
            (!a[0].style.height || c.forceHelperSize) && a.height(this.currentItem.height()),
            a
        },
        _adjustOffsetFromHelper: function(a) {
            "string" == typeof a && (a = a.split(" "));
            b.isArray(a) && (a = {
                left: +a[0],
                top: +a[1] || 0
            });
            "left" in a && (this.offset.click.left = a.left + this.margins.left);
            "right" in a && (this.offset.click.left = this.helperProportions.width - a.right + this.margins.left);
            "top" in a && (this.offset.click.top = a.top + this.margins.top);
            "bottom" in a && (this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var a = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0]) && (a.left += this.scrollParent.scrollLeft(), a.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && b.ui.ie) && (a = {
                top: 0,
                left: 0
            }),
            {
                top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var a, c, d, e = this.options;
            "parent" === e.containment && (e.containment = this.helper[0].parentNode);
            "document" !== e.containment && "window" !== e.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, b("document" === e.containment ? document: window).width() - this.helperProportions.width - this.margins.left, (b("document" === e.containment ? document: window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]);
            /^(document|window|parent)$/.test(e.containment) || (a = b(e.containment)[0], c = b(e.containment).offset(), d = "hidden" !== b(a).css("overflow"), this.containment = [c.left + (parseInt(b(a).css("borderLeftWidth"), 10) || 0) + (parseInt(b(a).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(b(a).css("borderTopWidth"), 10) || 0) + (parseInt(b(a).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(a.scrollWidth, a.offsetWidth) : a.offsetWidth) - (parseInt(b(a).css("borderLeftWidth"), 10) || 0) - (parseInt(b(a).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(a.scrollHeight, a.offsetHeight) : a.offsetHeight) - (parseInt(b(a).css("borderTopWidth"), 10) || 0) - (parseInt(b(a).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(a, c) {
            c || (c = this.position);
            var d = "absolute" === a ? 1 : -1,
            e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
            f = /(html|body)/i.test(e[0].tagName);
            return {
                top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
            }
        },
        _generatePosition: function(a) {
            var c, d, e = this.options,
            f = a.pageX,
            n = a.pageY,
            g = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
            h = /(html|body)/i.test(g[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition && (this.containment && (a.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), a.pageY - this.offset.click.top < this.containment[1] && (n = this.containment[1] + this.offset.click.top), a.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), a.pageY - this.offset.click.top > this.containment[3] && (n = this.containment[3] + this.offset.click.top)), e.grid && (c = this.originalPageY + Math.round((n - this.originalPageY) / e.grid[1]) * e.grid[1], n = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c: c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0], f = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d: d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)),
            {
                top: n - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : g.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : g.scrollLeft())
            }
        },
        _rearrange: function(a, b, d, e) {
            d ? d[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling);
            var f = this.counter = this.counter ? ++this.counter: 1;
            this._delay(function() {
                f === this.counter && this.refreshPositions(!e)
            })
        },
        _clear: function(a, b) {
            function d(a, b, c) {
                return function(d) {
                    c._trigger(a, d, b._uiHash(b))
                }
            }
            this.reverting = !1;
            var e, f = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (e in this._storedCSS)"auto" !== this._storedCSS[e] && "static" !== this._storedCSS[e] || (this._storedCSS[e] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !b && f.push(function(a) {
                this._trigger("receive", a, this._uiHash(this.fromOutside))
            }); ! this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || b || f.push(function(a) {
                this._trigger("update", a, this._uiHash())
            });
            this !== this.currentContainer && (b || (f.push(function(a) {
                this._trigger("remove", a, this._uiHash())
            }), f.push(function(a) {
                return function(b) {
                    a._trigger("receive", b, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), f.push(function(a) {
                return function(b) {
                    a._trigger("update", b, this._uiHash(this))
                }
            }.call(this, this.currentContainer))));
            for (e = this.containers.length - 1; 0 <= e; e--) b || f.push(d("deactivate", this, this.containers[e])),
            this.containers[e].containerCache.over && (f.push(d("out", this, this.containers[e])), this.containers[e].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "": this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!b) {
                    this._trigger("beforeStop", a, this._uiHash());
                    for (e = 0; f.length > e; e++) f[e].call(this, a);
                    this._trigger("stop", a, this._uiHash())
                }
                return this.fromOutside = !1,
                !1
            }
            if (b || this._trigger("beforeStop", a, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !b) {
                for (e = 0; f.length > e; e++) f[e].call(this, a);
                this._trigger("stop", a, this._uiHash())
            }
            return this.fromOutside = !1,
            !0
        },
        _trigger: function() { ! 1 === b.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function(a) {
            var c = a || this;
            return {
                helper: c.helper,
                placeholder: c.placeholder || b([]),
                position: c.position,
                originalPosition: c.originalPosition,
                offset: c.positionAbs,
                item: c.currentItem,
                sender: a ? a.element: null
            }
        }
    });
    b.widget("ui.accordion", {
        version: "1.11.1",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "\x3e li \x3e :first-child,\x3e :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var a = this.options;
            this.prevShow = this.prevHide = b();
            this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
            a.collapsible || !1 !== a.active && null != a.active || (a.active = 0);
            this._processPanels();
            0 > a.active && (a.active += this.headers.length);
            this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : b()
            }
        },
        _createIcons: function() {
            var a = this.options.icons;
            a && (b("\x3cspan\x3e").addClass("ui-accordion-header-icon ui-icon " + a.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(a.header).addClass(a.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var a;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId();
            this._destroyIcons();
            a = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId();
            "content" !== this.options.heightStyle && a.css("height", "")
        },
        _setOption: function(a, b) {
            return "active" === a ? (this._activate(b), void 0) : ("event" === a && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(b)), this._super(a, b), "collapsible" !== a || b || !1 !== this.options.active || this._activate(0), "icons" === a && (this._destroyIcons(), b && this._createIcons()), "disabled" === a && (this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!b)), void 0)
        },
        _keydown: function(a) {
            if (!a.altKey && !a.ctrlKey) {
                var c = b.ui.keyCode,
                d = this.headers.length,
                e = this.headers.index(a.target),
                f = !1;
                switch (a.keyCode) {
                case c.RIGHT:
                case c.DOWN:
                    f = this.headers[(e + 1) % d];
                    break;
                case c.LEFT:
                case c.UP:
                    f = this.headers[(e - 1 + d) % d];
                    break;
                case c.SPACE:
                case c.ENTER:
                    this._eventHandler(a);
                    break;
                case c.HOME:
                    f = this.headers[0];
                    break;
                case c.END:
                    f = this.headers[d - 1]
                }
                f && (b(a.target).attr("tabIndex", -1), b(f).attr("tabIndex", 0), f.focus(), a.preventDefault())
            }
        },
        _panelKeyDown: function(a) {
            a.keyCode === b.ui.keyCode.UP && a.ctrlKey && b(a.currentTarget).prev().focus()
        },
        refresh: function() {
            var a = this.options;
            this._processPanels(); ! 1 === a.active && !0 === a.collapsible || !this.headers.length ? (a.active = !1, this.active = b()) : !1 === a.active ? this._activate(0) : this.active.length && !b.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (a.active = !1, this.active = b()) : this._activate(Math.max(0, a.active - 1)) : a.active = this.headers.index(this.active);
            this._destroyIcons();
            this._refresh()
        },
        _processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all");
            this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function() {
            var a, c = this.options,
            d = c.heightStyle,
            e = this.element.parent();
            this.active = this._findActive(c.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
            this.active.next().addClass("ui-accordion-content-active").show();
            this.headers.attr("role", "tab").each(function() {
                var a = b(this),
                c = a.uniqueId().attr("id"),
                d = a.next(),
                e = d.uniqueId().attr("id");
                a.attr("aria-controls", e);
                d.attr("aria-labelledby", c)
            }).next().attr("role", "tabpanel");
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide();
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0);
            this._createIcons();
            this._setupEvents(c.event);
            "fill" === d ? (a = e.height(), this.element.siblings(":visible").each(function() {
                var c = b(this),
                d = c.css("position");
                "absolute" !== d && "fixed" !== d && (a -= c.outerHeight(!0))
            }), this.headers.each(function() {
                a -= b(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                b(this).height(Math.max(0, a - b(this).innerHeight() + b(this).height()))
            }).css("overflow", "auto")) : "auto" === d && (a = 0, this.headers.next().each(function() {
                a = Math.max(a, b(this).css("height", "").height())
            }).height(a))
        },
        _activate: function(a) {
            a = this._findActive(a)[0];
            a !== this.active[0] && (a = a || this.active[0], this._eventHandler({
                target: a,
                currentTarget: a,
                preventDefault: b.noop
            }))
        },
        _findActive: function(a) {
            return "number" == typeof a ? this.headers.eq(a) : b()
        },
        _setupEvents: function(a) {
            var c = {
                keydown: "_keydown"
            };
            a && b.each(a.split(" "),
            function(a, b) {
                c[b] = "_eventHandler"
            });
            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, c);
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            });
            this._hoverable(this.headers);
            this._focusable(this.headers)
        },
        _eventHandler: function(a) {
            var c = this.options,
            d = this.active,
            e = b(a.currentTarget),
            f = e[0] === d[0],
            g = f && c.collapsible,
            h = g ? b() : e.next(),
            k = d.next(),
            h = {
                oldHeader: d,
                oldPanel: k,
                newHeader: g ? b() : e,
                newPanel: h
            };
            a.preventDefault();
            f && !c.collapsible || !1 === this._trigger("beforeActivate", a, h) || (c.active = g ? !1 : this.headers.index(e), this.active = f ? b() : e, this._toggle(h), d.removeClass("ui-accordion-header-active ui-state-active"), c.icons && d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header), f || (e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), c.icons && e.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader), e.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function(a) {
            var c = a.newPanel,
            d = this.prevShow.length ? this.prevShow: a.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0);
            this.prevShow = c;
            this.prevHide = d;
            this.options.animate ? this._animate(c, d, a) : (d.hide(), c.show(), this._toggleComplete(a));
            d.attr({
                "aria-hidden": "true"
            });
            d.prev().attr("aria-selected", "false");
            c.length && d.length ? d.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : c.length && this.headers.filter(function() {
                return 0 === b(this).attr("tabIndex")
            }).attr("tabIndex", -1);
            c.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                tabIndex: 0,
                "aria-expanded": "true"
            })
        },
        _animate: function(a, b, d) {
            var e, f, g, h = this,
            k = 0,
            p = a.length && (!b.length || a.index() < b.index()),
            q = this.options.animate || {},
            p = p && q.down || q,
            m = function() {
                h._toggleComplete(d)
            };
            return "number" == typeof p && (g = p),
            "string" == typeof p && (f = p),
            f = f || p.easing || q.easing,
            g = g || p.duration || q.duration,
            b.length ? a.length ? (e = a.show().outerHeight(), b.animate(this.hideProps, {
                duration: g,
                easing: f,
                step: function(a, b) {
                    b.now = Math.round(a)
                }
            }), a.hide().animate(this.showProps, {
                duration: g,
                easing: f,
                complete: m,
                step: function(a, d) {
                    d.now = Math.round(a);
                    "height" !== d.prop ? k += d.now: "content" !== h.options.heightStyle && (d.now = Math.round(e - b.outerHeight() - k), k = 0)
                }
            }), void 0) : b.animate(this.hideProps, g, f, m) : a.animate(this.showProps, g, f, m)
        },
        _toggleComplete: function(a) {
            var b = a.oldPanel;
            b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
            b.length && (b.parent()[0].className = b.parent()[0].className);
            this._trigger("activate", null, a)
        }
    });
    b.widget("ui.menu", {
        version: "1.11.1",
        defaultElement: "\x3cul\x3e",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            items: "\x3e *",
            menus: "ul",
            position: {
                my: "left-1 top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element;
            this.mouseHandled = !1;
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            });
            this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true");
            this._on({
                "mousedown .ui-menu-item": function(a) {
                    a.preventDefault()
                },
                "click .ui-menu-item": function(a) {
                    var c = b(a.target); ! this.mouseHandled && c.not(".ui-state-disabled").length && (this.select(a), a.isPropagationStopped() || (this.mouseHandled = !0), c.has(".ui-menu").length ? this.expand(a) : !this.element.is(":focus") && b(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(a) {
                    var c = b(a.currentTarget);
                    c.siblings(".ui-state-active").removeClass("ui-state-active");
                    this.focus(a, c)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(a, b) {
                    var d = this.active || this.element.find(this.options.items).eq(0);
                    b || this.focus(a, d)
                },
                blur: function(a) {
                    this._delay(function() {
                        b.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(a)
                    })
                },
                keydown: "_keydown"
            });
            this.refresh();
            this._on(this.document, {
                click: function(a) {
                    this._closeOnDocumentClick(a) && this.collapseAll(a);
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var a = b(this);
                a.data("ui-menu-submenu-carat") && a.remove()
            });
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(a) {
            function c(a) {
                return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26")
            }
            var d, e, f, g, h = !0;
            switch (a.keyCode) {
            case b.ui.keyCode.PAGE_UP:
                this.previousPage(a);
                break;
            case b.ui.keyCode.PAGE_DOWN:
                this.nextPage(a);
                break;
            case b.ui.keyCode.HOME:
                this._move("first", "first", a);
                break;
            case b.ui.keyCode.END:
                this._move("last", "last", a);
                break;
            case b.ui.keyCode.UP:
                this.previous(a);
                break;
            case b.ui.keyCode.DOWN:
                this.next(a);
                break;
            case b.ui.keyCode.LEFT:
                this.collapse(a);
                break;
            case b.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(a);
                break;
            case b.ui.keyCode.ENTER:
            case b.ui.keyCode.SPACE:
                this._activate(a);
                break;
            case b.ui.keyCode.ESCAPE:
                this.collapse(a);
                break;
            default:
                h = !1,
                d = this.previousFilter || "",
                e = String.fromCharCode(a.keyCode),
                f = !1,
                clearTimeout(this.filterTimer),
                e === d ? f = !0 : e = d + e,
                g = RegExp("^" + c(e), "i"),
                d = this.activeMenu.find(this.options.items).filter(function() {
                    return g.test(b(this).text())
                }),
                d = f && -1 !== d.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : d,
                d.length || (e = String.fromCharCode(a.keyCode), g = RegExp("^" + c(e), "i"), d = this.activeMenu.find(this.options.items).filter(function() {
                    return g.test(b(this).text())
                })),
                d.length ? (this.focus(a, d), 1 < d.length ? (this.previousFilter = e, this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                },
                1E3)) : delete this.previousFilter) : delete this.previousFilter
            }
            h && a.preventDefault()
        },
        _activate: function(a) {
            this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup\x3d'true']") ? this.expand(a) : this.select(a))
        },
        refresh: function() {
            var a, c = this,
            d = this.options.icons.submenu;
            a = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length);
            a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var a = b(this),
                c = a.parent(),
                g = b("\x3cspan\x3e").addClass("ui-menu-icon ui-icon " + d).data("ui-menu-submenu-carat", !0);
                c.attr("aria-haspopup", "true").prepend(g);
                a.attr("aria-labelledby", c.attr("id"))
            });
            a = a.add(this.element).find(this.options.items);
            a.not(".ui-menu-item").each(function() {
                var a = b(this);
                c._isDivider(a) && a.addClass("ui-widget-content ui-menu-divider")
            });
            a.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            a.filter(".ui-state-disabled").attr("aria-disabled", "true");
            this.active && !b.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            } [this.options.role]
        },
        _setOption: function(a, b) {
            "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu);
            "disabled" === a && this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b);
            this._super(a, b)
        },
        focus: function(a, b) {
            var d;
            this.blur(a, a && "focus" === a.type);
            this._scrollIntoView(b);
            this.active = b.first();
            d = this.active.addClass("ui-state-focus").removeClass("ui-state-active");
            this.options.role && this.element.attr("aria-activedescendant", d.attr("id"));
            this.active.parent().closest(".ui-menu-item").addClass("ui-state-active");
            a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            },
            this.delay);
            d = b.children(".ui-menu");
            d.length && a && /^mouse/.test(a.type) && this._startOpening(d);
            this.activeMenu = b.parent();
            this._trigger("focus", a, {
                item: b
            })
        },
        _scrollIntoView: function(a) {
            var c, d, e, f, g, h;
            this._hasScroll() && (c = parseFloat(b.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(b.css(this.activeMenu[0], "paddingTop")) || 0, e = a.offset().top - this.activeMenu.offset().top - c - d, f = this.activeMenu.scrollTop(), g = this.activeMenu.height(), h = a.outerHeight(), 0 > e ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h))
        },
        blur: function(a, b) {
            b || clearTimeout(this.timer);
            this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", a, {
                item: this.active
            }))
        },
        _startOpening: function(a) {
            clearTimeout(this.timer);
            "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close();
                this._open(a)
            },
            this.delay))
        },
        _open: function(a) {
            var c = b.extend({
                of: this.active
            },
            this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(a.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            a.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
        },
        collapseAll: function(a, c) {
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                var d = c ? this.element: b(a && a.target).closest(this.element.find(".ui-menu"));
                d.length || (d = this.element);
                this._close(d);
                this.blur(a);
                this.activeMenu = d
            },
            this.delay)
        },
        _close: function(a) {
            a || (a = this.active ? this.active.parent() : this.element);
            a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
        },
        _closeOnDocumentClick: function(a) {
            return ! b(a.target).closest(".ui-menu").length
        },
        _isDivider: function(a) {
            return ! /[^\-\u2014\u2013\s]/.test(a.text())
        },
        collapse: function(a) {
            var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            b && b.length && (this._close(), this.focus(a, b))
        },
        expand: function(a) {
            var b = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            b && b.length && (this._open(b.parent()), this._delay(function() {
                this.focus(a, b)
            }))
        },
        next: function(a) {
            this._move("next", "first", a)
        },
        previous: function(a) {
            this._move("prev", "last", a)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(a, b, d) {
            var e;
            this.active && (e = "first" === a || "last" === a ? this.active["first" === a ? "prevAll": "nextAll"](".ui-menu-item").eq( - 1) : this.active[a + "All"](".ui-menu-item").eq(0));
            e && e.length && this.active || (e = this.activeMenu.find(this.options.items)[b]());
            this.focus(d, e)
        },
        nextPage: function(a) {
            var c, d, e;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return c = b(this),
                0 > c.offset().top - d - e
            }), this.focus(a, c)) : this.focus(a, this.activeMenu.find(this.options.items)[this.active ? "last": "first"]())), void 0) : (this.next(a), void 0)
        },
        previousPage: function(a) {
            var c, d, e;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return c = b(this),
                0 < c.offset().top - d + e
            }), this.focus(a, c)) : this.focus(a, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(a), void 0)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(a) {
            this.active = this.active || b(a.target).closest(".ui-menu-item");
            var c = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(a, !0);
            this._trigger("select", a, c)
        }
    });
    b.widget("ui.autocomplete", {
        version: "1.11.1",
        defaultElement: "\x3cinput\x3e",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var a, c, d, e = this.element[0].nodeName.toLowerCase(),
            f = "textarea" === e,
            e = "input" === e;
            this.isMultiLine = f ? !0 : e ? !1 : this.element.prop("isContentEditable");
            this.valueMethod = this.element[f || e ? "val": "text"];
            this.isNewMenu = !0;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
            this._on(this.element, {
                keydown: function(e) {
                    if (this.element.prop("readOnly")) return a = !0,
                    d = !0,
                    c = !0,
                    void 0;
                    c = d = a = !1;
                    var f = b.ui.keyCode;
                    switch (e.keyCode) {
                    case f.PAGE_UP:
                        a = !0;
                        this._move("previousPage", e);
                        break;
                    case f.PAGE_DOWN:
                        a = !0;
                        this._move("nextPage", e);
                        break;
                    case f.UP:
                        a = !0;
                        this._keyEvent("previous", e);
                        break;
                    case f.DOWN:
                        a = !0;
                        this._keyEvent("next", e);
                        break;
                    case f.ENTER:
                        this.menu.active && (a = !0, e.preventDefault(), this.menu.select(e));
                        break;
                    case f.TAB:
                        this.menu.active && this.menu.select(e);
                        break;
                    case f.ESCAPE:
                        this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(e), e.preventDefault());
                        break;
                    default:
                        c = !0,
                        this._searchTimeout(e)
                    }
                },
                keypress: function(d) {
                    if (a) return a = !1,
                    (!this.isMultiLine || this.menu.element.is(":visible")) && d.preventDefault(),
                    void 0;
                    if (!c) {
                        var e = b.ui.keyCode;
                        switch (d.keyCode) {
                        case e.PAGE_UP:
                            this._move("previousPage", d);
                            break;
                        case e.PAGE_DOWN:
                            this._move("nextPage", d);
                            break;
                        case e.UP:
                            this._keyEvent("previous", d);
                            break;
                        case e.DOWN:
                            this._keyEvent("next", d)
                        }
                    }
                },
                input: function(a) {
                    return d ? (d = !1, a.preventDefault(), void 0) : (this._searchTimeout(a), void 0)
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value()
                },
                blur: function(a) {
                    return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(a), this._change(a), void 0)
                }
            });
            this._initSource();
            this.menu = b("\x3cul\x3e").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance");
            this._on(this.menu.element, {
                mousedown: function(a) {
                    a.preventDefault();
                    this.cancelBlur = !0;
                    this._delay(function() {
                        delete this.cancelBlur
                    });
                    var c = this.menu.element[0];
                    b(a.target).closest(".ui-menu-item").length || this._delay(function() {
                        var a = this;
                        this.document.one("mousedown",
                        function(d) {
                            d.target === a.element[0] || d.target === c || b.contains(c, d.target) || a.close()
                        })
                    })
                },
                menufocus: function(a, c) {
                    var d, e;
                    return this.isNewMenu && (this.isNewMenu = !1, a.originalEvent && /^mouse/.test(a.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove",
                    function() {
                        b(a.target).trigger(a.originalEvent)
                    }), void 0) : (e = c.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", a, {
                        item: e
                    }) && a.originalEvent && /^key/.test(a.originalEvent.type) && this._value(e.value), d = c.item.attr("aria-label") || e.value, d && b.trim(d).length && (this.liveRegion.children().hide(), b("\x3cdiv\x3e").text(d).appendTo(this.liveRegion)), void 0)
                },
                menuselect: function(a, b) {
                    var c = b.item.data("ui-autocomplete-item"),
                    d = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, this._delay(function() {
                        this.previous = d;
                        this.selectedItem = c
                    })); ! 1 !== this._trigger("select", a, {
                        item: c
                    }) && this._value(c.value);
                    this.term = this._value();
                    this.close(a);
                    this.selectedItem = c
                }
            });
            this.liveRegion = b("\x3cspan\x3e", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching);
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },
        _setOption: function(a, b) {
            this._super(a, b);
            "source" === a && this._initSource();
            "appendTo" === a && this.menu.element.appendTo(this._appendTo());
            "disabled" === a && b && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var a = this.options.appendTo;
            return a && (a = a.jquery || a.nodeType ? b(a) : this.document.find(a).eq(0)),
            a && a[0] || (a = this.element.closest(".ui-front")),
            a.length || (a = this.document[0].body),
            a
        },
        _initSource: function() {
            var a, c, d = this;
            b.isArray(this.options.source) ? (a = this.options.source, this.source = function(c, d) {
                d(b.ui.autocomplete.filter(a, c.term))
            }) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function(a, f) {
                d.xhr && d.xhr.abort();
                d.xhr = b.ajax({
                    url: c,
                    data: a,
                    dataType: "json",
                    success: function(a) {
                        f(a)
                    },
                    error: function() {
                        f([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(a) {
            clearTimeout(this.searching);
            this.searching = this._delay(function() {
                var b = this.term === this._value(),
                d = this.menu.element.is(":visible"),
                e = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
                b && (!b || d || e) || (this.selectedItem = null, this.search(null, a))
            },
            this.options.delay)
        },
        search: function(a, b) {
            return a = null != a ? a: this._value(),
            this.term = this._value(),
            a.length < this.options.minLength ? this.close(b) : !1 !== this._trigger("search", b) ? this._search(a) : void 0
        },
        _search: function(a) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.cancelSearch = !1;
            this.source({
                term: a
            },
            this._response())
        },
        _response: function() {
            var a = ++this.requestIndex;
            return b.proxy(function(b) {
                a === this.requestIndex && this.__response(b);
                this.pending--;
                this.pending || this.element.removeClass("ui-autocomplete-loading")
            },
            this)
        },
        __response: function(a) {
            a && (a = this._normalize(a));
            this._trigger("response", null, {
                content: a
            }); ! this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close()
        },
        close: function(a) {
            this.cancelSearch = !0;
            this._close(a)
        },
        _close: function(a) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
        },
        _change: function(a) {
            this.previous !== this._value() && this._trigger("change", a, {
                item: this.selectedItem
            })
        },
        _normalize: function(a) {
            return a.length && a[0].label && a[0].value ? a: b.map(a,
            function(a) {
                return "string" == typeof a ? {
                    label: a,
                    value: a
                }: b.extend({},
                a, {
                    label: a.label || a.value,
                    value: a.value || a.label
                })
            })
        },
        _suggest: function(a) {
            var c = this.menu.element.empty();
            this._renderMenu(c, a);
            this.isNewMenu = !0;
            this.menu.refresh();
            c.show();
            this._resizeMenu();
            c.position(b.extend({
                of: this.element
            },
            this.options.position));
            this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var a = this.menu.element;
            a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(a, c) {
            var d = this;
            b.each(c,
            function(b, c) {
                d._renderItemData(a, c)
            })
        },
        _renderItemData: function(a, b) {
            return this._renderItem(a, b).data("ui-autocomplete-item", b)
        },
        _renderItem: function(a, c) {
            return b("\x3cli\x3e").text(c.label).appendTo(a)
        },
        _move: function(a, b) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[a](b), void 0) : (this.search(null, b), void 0)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(a, b) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(a, b), b.preventDefault())
        }
    });
    b.extend(b.ui.autocomplete, {
        escapeRegex: function(a) {
            return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26")
        },
        filter: function(a, c) {
            var d = RegExp(b.ui.autocomplete.escapeRegex(c), "i");
            return b.grep(a,
            function(a) {
                return d.test(a.label || a.value || a)
            })
        }
    });
    b.widget("ui.autocomplete", b.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(a) {
                    return a + (1 < a ? " results are": " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(a) {
            var c;
            this._superApply(arguments);
            this.options.disabled || this.cancelSearch || (c = a && a.length ? this.options.messages.results(a.length) : this.options.messages.noResults, this.liveRegion.children().hide(), b("\x3cdiv\x3e").text(c).appendTo(this.liveRegion))
        }
    });
    b.ui.autocomplete;
    var x, U = function() {
        var a = b(this);
        setTimeout(function() {
            a.find(":ui-button").button("refresh")
        },
        1)
    },
    I = function(a) {
        var c = a.name,
        d = a.form,
        e = b([]);
        return c && (c = c.replace(/'/g, "\\'"), e = d ? b(d).find("[name\x3d'" + c + "'][type\x3dradio]") : b("[name\x3d'" + c + "'][type\x3dradio]", a.ownerDocument).filter(function() {
            return ! this.form
        })),
        e
    };
    b.widget("ui.button", {
        version: "1.11.1",
        defaultElement: "\x3cbutton\x3e",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, U);
            "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled);
            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr("title");
            var a = this,
            c = this.options,
            d = "checkbox" === this.type || "radio" === this.type,
            e = d ? "": "ui-state-active";
            null === c.label && (c.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html());
            this._hoverable(this.buttonElement);
            this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role", "button").bind("mouseenter" + this.eventNamespace,
            function() {
                c.disabled || this === x && b(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace,
            function() {
                c.disabled || b(this).removeClass(e)
            }).bind("click" + this.eventNamespace,
            function(a) {
                c.disabled && (a.preventDefault(), a.stopImmediatePropagation())
            });
            this._on({
                focus: function() {
                    this.buttonElement.addClass("ui-state-focus")
                },
                blur: function() {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            });
            d && this.element.bind("change" + this.eventNamespace,
            function() {
                a.refresh()
            });
            "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace,
            function() {
                return c.disabled ? !1 : void 0
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace,
            function() {
                if (c.disabled) return ! 1;
                b(this).addClass("ui-state-active");
                a.buttonElement.attr("aria-pressed", "true");
                var d = a.element[0];
                I(d).not(d).map(function() {
                    return b(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace,
            function() {
                return c.disabled ? !1 : (b(this).addClass("ui-state-active"), x = this, a.document.one("mouseup",
                function() {
                    x = null
                }), void 0)
            }).bind("mouseup" + this.eventNamespace,
            function() {
                return c.disabled ? !1 : (b(this).removeClass("ui-state-active"), void 0)
            }).bind("keydown" + this.eventNamespace,
            function(a) {
                return c.disabled ? !1 : ((a.keyCode === b.ui.keyCode.SPACE || a.keyCode === b.ui.keyCode.ENTER) && b(this).addClass("ui-state-active"), void 0)
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace,
            function() {
                b(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(a) {
                a.keyCode === b.ui.keyCode.SPACE && b(this).click()
            }));
            this._setOption("disabled", c.disabled);
            this._resetButton()
        },
        _determineButtonType: function() {
            var a, b, d;
            this.type = this.element.is("[type\x3dcheckbox]") ? "checkbox": this.element.is("[type\x3dradio]") ? "radio": this.element.is("input") ? "input": "button";
            "checkbox" === this.type || "radio" === this.type ? (a = this.element.parents().last(), b = "label[for\x3d'" + this.element.attr("id") + "']", this.buttonElement = a.find(b), this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(b), this.buttonElement.length || (this.buttonElement = a.find(b))), this.element.addClass("ui-helper-hidden-accessible"), d = this.element.is(":checked"), d && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", d)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible");
            this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-active ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(a, b) {
            return this._super(a, b),
            "disabled" === a ? (this.widget().toggleClass("ui-state-disabled", !!b), this.element.prop("disabled", !!b), b && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")), void 0) : (this._resetButton(), void 0)
        },
        refresh: function() {
            var a = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            a !== this.options.disabled && this._setOption("disabled", a);
            "radio" === this.type ? I(this.element[0]).each(function() {
                b(this).is(":checked") ? b(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : b(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type) return this.options.label && this.element.val(this.options.label),
            void 0;
            var a = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
            c = b("\x3cspan\x3e\x3c/span\x3e", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text(),
            d = this.options.icons,
            e = d.primary && d.secondary,
            f = [];
            d.primary || d.secondary ? (this.options.text && f.push("ui-button-text-icon" + (e ? "s": d.primary ? "-primary": "-secondary")), d.primary && a.prepend("\x3cspan class\x3d'ui-button-icon-primary ui-icon " + d.primary + "'\x3e\x3c/span\x3e"), d.secondary && a.append("\x3cspan class\x3d'ui-button-icon-secondary ui-icon " + d.secondary + "'\x3e\x3c/span\x3e"), this.options.text || (f.push(e ? "ui-button-icons-only": "ui-button-icon-only"), this.hasTitle || a.attr("title", b.trim(c)))) : f.push("ui-button-text-only");
            a.addClass(f.join(" "))
        }
    });
    b.widget("ui.buttonset", {
        version: "1.11.1",
        options: {
            items: "button, input[type\x3dbutton], input[type\x3dsubmit], input[type\x3dreset], input[type\x3dcheckbox], input[type\x3dradio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(a, b) {
            "disabled" === a && this.buttons.button("option", a, b);
            this._super(a, b)
        },
        refresh: function() {
            var a = "rtl" === this.element.css("direction"),
            c = this.element.find(this.options.items),
            d = c.filter(":ui-button");
            c.not(":ui-button").button();
            d.button("refresh");
            this.buttons = c.map(function() {
                return b(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a ? "ui-corner-right": "ui-corner-left").end().filter(":last").addClass(a ? "ui-corner-left": "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset");
            this.buttons.map(function() {
                return b(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    });
    b.ui.button;
    b.extend(b.ui, {
        datepicker: {
            version: "1.11.1"
        }
    });
    var R;
    b.extend(g.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(a) {
            return s(this._defaults, a || {}),
            this
        },
        _attachDatepicker: function(a, c) {
            var d, e, f;
            d = a.nodeName.toLowerCase();
            e = "div" === d || "span" === d;
            a.id || (this.uuid += 1, a.id = "dp" + this.uuid);
            f = this._newInst(b(a), e);
            f.settings = b.extend({},
            c || {});
            "input" === d ? this._connectDatepicker(a, f) : e && this._inlineDatepicker(a, f)
        },
        _newInst: function(a, c) {
            return {
                id: a[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: a,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: c,
                dpDiv: c ? p(b("\x3cdiv class\x3d'" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'\x3e\x3c/div\x3e")) : this.dpDiv
            }
        },
        _connectDatepicker: function(a, c) {
            var d = b(a);
            c.append = b([]);
            c.trigger = b([]);
            d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(c), b.data(a, "datepicker", c), c.settings.disabled && this._disableDatepicker(a))
        },
        _attachments: function(a, c) {
            var d, e, f;
            d = this._get(c, "appendText");
            var g = this._get(c, "isRTL");
            c.append && c.append.remove();
            d && (c.append = b("\x3cspan class\x3d'" + this._appendClass + "'\x3e" + d + "\x3c/span\x3e"), a[g ? "before": "after"](c.append));
            a.unbind("focus", this._showDatepicker);
            c.trigger && c.trigger.remove();
            d = this._get(c, "showOn");
            "focus" !== d && "both" !== d || a.focus(this._showDatepicker);
            "button" !== d && "both" !== d || (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), c.trigger = b(this._get(c, "buttonImageOnly") ? b("\x3cimg/\x3e").addClass(this._triggerClass).attr({
                src: f,
                alt: e,
                title: e
            }) : b("\x3cbutton type\x3d'button'\x3e\x3c/button\x3e").addClass(this._triggerClass).html(f ? b("\x3cimg/\x3e").attr({
                src: f,
                alt: e,
                title: e
            }) : e)), a[g ? "before": "after"](c.trigger), c.trigger.click(function() {
                return b.datepicker._datepickerShowing && b.datepicker._lastInput === a[0] ? b.datepicker._hideDatepicker() : b.datepicker._datepickerShowing && b.datepicker._lastInput !== a[0] ? (b.datepicker._hideDatepicker(), b.datepicker._showDatepicker(a[0])) : b.datepicker._showDatepicker(a[0]),
                !1
            }))
        },
        _autoSize: function(a) {
            if (this._get(a, "autoSize") && !a.inline) {
                var b, d, e, f, g = new Date(2009, 11, 20),
                h = this._get(a, "dateFormat");
                h.match(/[DM]/) && (b = function(a) {
                    for (f = e = d = 0; a.length > f; f++) a[f].length > d && (d = a[f].length, e = f);
                    return e
                },
                g.setMonth(b(this._get(a, h.match(/MM/) ? "monthNames": "monthNamesShort"))), g.setDate(b(this._get(a, h.match(/DD/) ? "dayNames": "dayNamesShort")) + 20 - g.getDay()));
                a.input.attr("size", this._formatDate(a, g).length)
            }
        },
        _inlineDatepicker: function(a, c) {
            var d = b(a);
            d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), b.data(a, "datepicker", c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(a), c.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(a, c, d, e, f) {
            var g, h, k, p, q;
            a = this._dialogInst;
            return a || (this.uuid += 1, g = "dp" + this.uuid, this._dialogInput = b("\x3cinput type\x3d'text' id\x3d'" + g + "' style\x3d'position: absolute; top: -100px; width: 0px;'/\x3e"), this._dialogInput.keydown(this._doKeyDown), b("body").append(this._dialogInput), a = this._dialogInst = this._newInst(this._dialogInput, !1), a.settings = {},
            b.data(this._dialogInput[0], "datepicker", a)),
            s(a.settings, e || {}),
            c = c && c.constructor === Date ? this._formatDate(a, c) : c,
            this._dialogInput.val(c),
            this._pos = f ? f.length ? f: [f.pageX, f.pageY] : null,
            this._pos || (h = document.documentElement.clientWidth, k = document.documentElement.clientHeight, p = document.documentElement.scrollLeft || document.body.scrollLeft, q = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + p, k / 2 - 150 + q]),
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
            a.settings.onSelect = d,
            this._inDialog = !0,
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            b.blockUI && b.blockUI(this.dpDiv),
            b.data(this._dialogInput[0], "datepicker", a),
            this
        },
        _destroyDatepicker: function(a) {
            var c, d = b(a),
            e = b.data(a, "datepicker");
            d.hasClass(this.markerClassName) && (c = a.nodeName.toLowerCase(), b.removeData(a, "datepicker"), "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(a) {
            var c, d, e = b(a),
            f = b.data(a, "datepicker");
            e.hasClass(this.markerClassName) && (c = a.nodeName.toLowerCase(), "input" === c ? (a.disabled = !1, f.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = b.map(this._disabledInputs,
            function(b) {
                return b === a ? null: b
            }))
        },
        _disableDatepicker: function(a) {
            var c, d, e = b(a),
            f = b.data(a, "datepicker");
            e.hasClass(this.markerClassName) && (c = a.nodeName.toLowerCase(), "input" === c ? (a.disabled = !0, f.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = b.map(this._disabledInputs,
            function(b) {
                return b === a ? null: b
            }), this._disabledInputs[this._disabledInputs.length] = a)
        },
        _isDisabledDatepicker: function(a) {
            if (!a) return ! 1;
            for (var b = 0; this._disabledInputs.length > b; b++) if (this._disabledInputs[b] === a) return ! 0;
            return ! 1
        },
        _getInst: function(a) {
            try {
                return b.data(a, "datepicker")
            } catch(c) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(a, c, d) {
            var e, f, g, h, k = this._getInst(a);
            return 2 === arguments.length && "string" == typeof c ? "defaults" === c ? b.extend({},
            b.datepicker._defaults) : k ? "all" === c ? b.extend({},
            k.settings) : this._get(k, c) : null: (e = c || {},
            "string" == typeof c && (e = {},
            e[c] = d), k && (this._curInst === k && this._hideDatepicker(), f = this._getDateDatepicker(a, !0), g = this._getMinMaxDate(k, "min"), h = this._getMinMaxDate(k, "max"), s(k.settings, e), null !== g && void 0 !== e.dateFormat && void 0 === e.minDate && (k.settings.minDate = this._formatDate(k, g)), null !== h && void 0 !== e.dateFormat && void 0 === e.maxDate && (k.settings.maxDate = this._formatDate(k, h)), "disabled" in e && (e.disabled ? this._disableDatepicker(a) : this._enableDatepicker(a)), this._attachments(b(a), k), this._autoSize(k), this._setDate(k, f), this._updateAlternate(k), this._updateDatepicker(k)), void 0)
        },
        _changeDatepicker: function(a, b, d) {
            this._optionDatepicker(a, b, d)
        },
        _refreshDatepicker: function(a) { (a = this._getInst(a)) && this._updateDatepicker(a)
        },
        _setDateDatepicker: function(a, b) {
            var d = this._getInst(a);
            d && (this._setDate(d, b), this._updateDatepicker(d), this._updateAlternate(d))
        },
        _getDateDatepicker: function(a, b) {
            var d = this._getInst(a);
            return d && !d.inline && this._setDateFromField(d, b),
            d ? this._getDate(d) : null
        },
        _doKeyDown: function(a) {
            var c, d, e, f = b.datepicker._getInst(a.target),
            g = !0,
            h = f.dpDiv.is(".ui-datepicker-rtl");
            if (f._keyEvent = !0, b.datepicker._datepickerShowing) switch (a.keyCode) {
            case 9:
                b.datepicker._hideDatepicker();
                g = !1;
                break;
            case 13:
                return e = b("td." + b.datepicker._dayOverClass + ":not(." + b.datepicker._currentClass + ")", f.dpDiv),
                e[0] && b.datepicker._selectDay(a.target, f.selectedMonth, f.selectedYear, e[0]),
                c = b.datepicker._get(f, "onSelect"),
                c ? (d = b.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [d, f])) : b.datepicker._hideDatepicker(),
                !1;
            case 27:
                b.datepicker._hideDatepicker();
                break;
            case 33:
                b.datepicker._adjustDate(a.target, a.ctrlKey ? -b.datepicker._get(f, "stepBigMonths") : -b.datepicker._get(f, "stepMonths"), "M");
                break;
            case 34:
                b.datepicker._adjustDate(a.target, a.ctrlKey ? +b.datepicker._get(f, "stepBigMonths") : +b.datepicker._get(f, "stepMonths"), "M");
                break;
            case 35:
                (a.ctrlKey || a.metaKey) && b.datepicker._clearDate(a.target);
                g = a.ctrlKey || a.metaKey;
                break;
            case 36:
                (a.ctrlKey || a.metaKey) && b.datepicker._gotoToday(a.target);
                g = a.ctrlKey || a.metaKey;
                break;
            case 37:
                (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target, h ? 1 : -1, "D");
                g = a.ctrlKey || a.metaKey;
                a.originalEvent.altKey && b.datepicker._adjustDate(a.target, a.ctrlKey ? -b.datepicker._get(f, "stepBigMonths") : -b.datepicker._get(f, "stepMonths"), "M");
                break;
            case 38:
                (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target, -7, "D");
                g = a.ctrlKey || a.metaKey;
                break;
            case 39:
                (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target, h ? -1 : 1, "D");
                g = a.ctrlKey || a.metaKey;
                a.originalEvent.altKey && b.datepicker._adjustDate(a.target, a.ctrlKey ? +b.datepicker._get(f, "stepBigMonths") : +b.datepicker._get(f, "stepMonths"), "M");
                break;
            case 40:
                (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target, 7, "D");
                g = a.ctrlKey || a.metaKey;
                break;
            default:
                g = !1
            } else 36 === a.keyCode && a.ctrlKey ? b.datepicker._showDatepicker(this) : g = !1;
            g && (a.preventDefault(), a.stopPropagation())
        },
        _doKeyPress: function(a) {
            var c, d, e = b.datepicker._getInst(a.target);
            return b.datepicker._get(e, "constrainInput") ? (c = b.datepicker._possibleChars(b.datepicker._get(e, "dateFormat")), d = String.fromCharCode(null == a.charCode ? a.keyCode: a.charCode), a.ctrlKey || a.metaKey || " " > d || !c || -1 < c.indexOf(d)) : void 0
        },
        _doKeyUp: function(a) {
            var c;
            a = b.datepicker._getInst(a.target);
            if (a.input.val() !== a.lastVal) try { (c = b.datepicker.parseDate(b.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, b.datepicker._getFormatConfig(a))) && (b.datepicker._setDateFromField(a), b.datepicker._updateAlternate(a), b.datepicker._updateDatepicker(a))
            } catch(d) {}
            return ! 0
        },
        _showDatepicker: function(a) {
            if (a = a.target || a, "input" !== a.nodeName.toLowerCase() && (a = b("input", a.parentNode)[0]), !b.datepicker._isDisabledDatepicker(a) && b.datepicker._lastInput !== a) {
                var c, d, e, f, g, h;
                c = b.datepicker._getInst(a);
                b.datepicker._curInst && b.datepicker._curInst !== c && (b.datepicker._curInst.dpDiv.stop(!0, !0), c && b.datepicker._datepickerShowing && b.datepicker._hideDatepicker(b.datepicker._curInst.input[0]));
                d = (d = b.datepicker._get(c, "beforeShow")) ? d.apply(a, [a, c]) : {}; ! 1 !== d && (s(c.settings, d), c.lastVal = null, b.datepicker._lastInput = a, b.datepicker._setDateFromField(c), b.datepicker._inDialog && (a.value = ""), b.datepicker._pos || (b.datepicker._pos = b.datepicker._findPos(a), b.datepicker._pos[1] += a.offsetHeight), e = !1, b(a).parents().each(function() {
                    return e |= "fixed" === b(this).css("position"),
                    !e
                }), f = {
                    left: b.datepicker._pos[0],
                    top: b.datepicker._pos[1]
                },
                b.datepicker._pos = null, c.dpDiv.empty(), c.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), b.datepicker._updateDatepicker(c), f = b.datepicker._checkOffset(c, f, e), c.dpDiv.css({
                    position: b.datepicker._inDialog && b.blockUI ? "static": e ? "fixed": "absolute",
                    display: "none",
                    left: f.left + "px",
                    top: f.top + "px"
                }), c.inline || (g = b.datepicker._get(c, "showAnim"), h = b.datepicker._get(c, "duration"), c.dpDiv.css("z-index", m(b(a)) + 1), b.datepicker._datepickerShowing = !0, b.effects && b.effects.effect[g] ? c.dpDiv.show(g, b.datepicker._get(c, "showOptions"), h) : c.dpDiv[g || "show"](g ? h: null), b.datepicker._shouldFocusInput(c) && c.input.focus(), b.datepicker._curInst = c))
            }
        },
        _updateDatepicker: function(a) {
            this.maxRows = 4;
            R = a;
            a.dpDiv.empty().append(this._generateHTML(a));
            this._attachHandlers(a);
            var c, d = this._getNumberOfMonths(a),
            e = d[1],
            f = a.dpDiv.find("." + this._dayOverClass + " a");
            0 < f.length && q.apply(f.get(0));
            a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            1 < e && a.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", 17 * e + "em");
            a.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add": "remove") + "Class"]("ui-datepicker-multi");
            a.dpDiv[(this._get(a, "isRTL") ? "add": "remove") + "Class"]("ui-datepicker-rtl");
            a === b.datepicker._curInst && b.datepicker._datepickerShowing && b.datepicker._shouldFocusInput(a) && a.input.focus();
            a.yearshtml && (c = a.yearshtml, setTimeout(function() {
                c === a.yearshtml && a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);
                c = a.yearshtml = null
            },
            0))
        },
        _shouldFocusInput: function(a) {
            return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus")
        },
        _checkOffset: function(a, c, d) {
            var e = a.dpDiv.outerWidth(),
            f = a.dpDiv.outerHeight(),
            g = a.input ? a.input.outerWidth() : 0,
            h = a.input ? a.input.outerHeight() : 0,
            k = document.documentElement.clientWidth + (d ? 0 : b(document).scrollLeft()),
            p = document.documentElement.clientHeight + (d ? 0 : b(document).scrollTop());
            return c.left -= this._get(a, "isRTL") ? e - g: 0,
            c.left -= d && c.left === a.input.offset().left ? b(document).scrollLeft() : 0,
            c.top -= d && c.top === a.input.offset().top + h ? b(document).scrollTop() : 0,
            c.left -= Math.min(c.left, c.left + e > k && k > e ? Math.abs(c.left + e - k) : 0),
            c.top -= Math.min(c.top, c.top + f > p && p > f ? Math.abs(f + h) : 0),
            c
        },
        _findPos: function(a) {
            for (var c, d = this._getInst(a), d = this._get(d, "isRTL"); a && ("hidden" === a.type || 1 !== a.nodeType || b.expr.filters.hidden(a));) a = a[d ? "previousSibling": "nextSibling"];
            return c = b(a).offset(),
            [c.left, c.top]
        },
        _hideDatepicker: function(a) {
            var c, d, e, f, g = this._curInst; ! g || a && g !== b.data(a, "datepicker") || this._datepickerShowing && (c = this._get(g, "showAnim"), d = this._get(g, "duration"), e = function() {
                b.datepicker._tidyDialog(g)
            },
            b.effects && (b.effects.effect[c] || b.effects[c]) ? g.dpDiv.hide(c, b.datepicker._get(g, "showOptions"), d, e) : g.dpDiv["slideDown" === c ? "slideUp": "fadeIn" === c ? "fadeOut": "hide"](c ? d: null, e), c || e(), this._datepickerShowing = !1, f = this._get(g, "onClose"), f && f.apply(g.input ? g.input[0] : null, [g.input ? g.input.val() : "", g]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), b.blockUI && (b.unblockUI(), b("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(a) {
            a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(a) {
            if (b.datepicker._curInst) {
                a = b(a.target);
                var c = b.datepicker._getInst(a[0]); (!(a[0].id === b.datepicker._mainDivId || 0 !== a.parents("#" + b.datepicker._mainDivId).length || a.hasClass(b.datepicker.markerClassName) || a.closest("." + b.datepicker._triggerClass).length || !b.datepicker._datepickerShowing || b.datepicker._inDialog && b.blockUI) || a.hasClass(b.datepicker.markerClassName) && b.datepicker._curInst !== c) && b.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(a, c, d) {
            a = b(a);
            var e = this._getInst(a[0]);
            this._isDisabledDatepicker(a[0]) || (this._adjustInstDate(e, c + ("M" === d ? this._get(e, "showCurrentAtPos") : 0), d), this._updateDatepicker(e))
        },
        _gotoToday: function(a) {
            var c;
            a = b(a);
            var d = this._getInst(a[0]);
            this._get(d, "gotoCurrent") && d.currentDay ? (d.selectedDay = d.currentDay, d.drawMonth = d.selectedMonth = d.currentMonth, d.drawYear = d.selectedYear = d.currentYear) : (c = new Date, d.selectedDay = c.getDate(), d.drawMonth = d.selectedMonth = c.getMonth(), d.drawYear = d.selectedYear = c.getFullYear());
            this._notifyChange(d);
            this._adjustDate(a)
        },
        _selectMonthYear: function(a, c, d) {
            a = b(a);
            var e = this._getInst(a[0]);
            e["selected" + ("M" === d ? "Month": "Year")] = e["draw" + ("M" === d ? "Month": "Year")] = parseInt(c.options[c.selectedIndex].value, 10);
            this._notifyChange(e);
            this._adjustDate(a)
        },
        _selectDay: function(a, c, d, e) {
            var f, g = b(a);
            b(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), f.selectedDay = f.currentDay = b("a", e).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(a, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
        },
        _clearDate: function(a) {
            a = b(a);
            this._selectDate(a, "")
        },
        _selectDate: function(a, c) {
            var d;
            d = b(a);
            var e = this._getInst(d[0]);
            c = null != c ? c: this._formatDate(e);
            e.input && e.input.val(c);
            this._updateAlternate(e); (d = this._get(e, "onSelect")) ? d.apply(e.input ? e.input[0] : null, [c, e]) : e.input && e.input.trigger("change");
            e.inline ? this._updateDatepicker(e) : (this._hideDatepicker(), this._lastInput = e.input[0], "object" != typeof e.input[0] && e.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(a) {
            var c, d, e, f = this._get(a, "altField");
            f && (c = this._get(a, "altFormat") || this._get(a, "dateFormat"), d = this._getDate(a), e = this.formatDate(c, d, this._getFormatConfig(a)), b(f).each(function() {
                b(this).val(e)
            }))
        },
        noWeekends: function(a) {
            a = a.getDay();
            return [0 < a && 6 > a, ""]
        },
        iso8601Week: function(a) {
            var b;
            a = new Date(a.getTime());
            return a.setDate(a.getDate() + 4 - (a.getDay() || 7)),
            b = a.getTime(),
            a.setMonth(0),
            a.setDate(1),
            Math.floor(Math.round((b - a) / 864E5) / 7) + 1
        },
        parseDate: function(a, c, d) {
            if (null == a || null == c) throw "Invalid arguments";
            if (c = "object" == typeof c ? "" + c: c + "", "" === c) return null;
            var e, f, g, h, k = 0,
            p = (d ? d.shortYearCutoff: null) || this._defaults.shortYearCutoff,
            p = "string" != typeof p ? p: (new Date).getFullYear() % 100 + parseInt(p, 10),
            q = (d ? d.dayNamesShort: null) || this._defaults.dayNamesShort,
            m = (d ? d.dayNames: null) || this._defaults.dayNames,
            s = (d ? d.monthNamesShort: null) || this._defaults.monthNamesShort;
            d = (d ? d.monthNames: null) || this._defaults.monthNames;
            var t = -1,
            u = -1,
            E = -1,
            w = -1,
            x = !1,
            A = function(b) {
                b = a.length > e + 1 && a.charAt(e + 1) === b;
                return b && e++,
                b
            },
            ha = function(a) {
                var b = A(a),
                b = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2;
                a = RegExp("^\\d{" + ("y" === a ? b: 1) + "," + b + "}");
                a = c.substring(k).match(a);
                if (!a) throw "Missing number at position " + k;
                return k += a[0].length,
                parseInt(a[0], 10)
            },
            B = function(a, d, e) {
                var f = -1;
                a = b.map(A(a) ? e: d,
                function(a, b) {
                    return [[b, a]]
                }).sort(function(a, b) {
                    return - (a[1].length - b[1].length)
                });
                if (b.each(a,
                function(a, b) {
                    var d = b[1];
                    return c.substr(k, d.length).toLowerCase() === d.toLowerCase() ? (f = b[0], k += d.length, !1) : void 0
                }), -1 !== f) return f + 1;
                throw "Unknown name at position " + k;
            },
            J = function() {
                if (c.charAt(k) !== a.charAt(e)) throw "Unexpected literal at position " + k;
                k++
            };
            for (e = 0; a.length > e; e++) if (x)"'" !== a.charAt(e) || A("'") ? J() : x = !1;
            else switch (a.charAt(e)) {
            case "d":
                E = ha("d");
                break;
            case "D":
                B("D", q, m);
                break;
            case "o":
                w = ha("o");
                break;
            case "m":
                u = ha("m");
                break;
            case "M":
                u = B("M", s, d);
                break;
            case "y":
                t = ha("y");
                break;
            case "@":
                h = new Date(ha("@"));
                t = h.getFullYear();
                u = h.getMonth() + 1;
                E = h.getDate();
                break;
            case "!":
                h = new Date((ha("!") - this._ticksTo1970) / 1E4);
                t = h.getFullYear();
                u = h.getMonth() + 1;
                E = h.getDate();
                break;
            case "'":
                A("'") ? J() : x = !0;
                break;
            default:
                J()
            }
            if (c.length > k && (g = c.substr(k), !/^\s+/.test(g))) throw "Extra/unparsed characters found in date: " + g;
            if ( - 1 === t ? t = (new Date).getFullYear() : 100 > t && (t += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (p >= t ? 0 : -100)), -1 < w) for (u = 1, E = w; ! (f = this._getDaysInMonth(t, u - 1), f >= E);) u++,
            E -= f;
            if (h = this._daylightSavingAdjust(new Date(t, u - 1, E)), h.getFullYear() !== t || h.getMonth() + 1 !== u || h.getDate() !== E) throw "Invalid date";
            return h
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864E9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(a, b, d) {
            if (!b) return "";
            var e, f = (d ? d.dayNamesShort: null) || this._defaults.dayNamesShort,
            g = (d ? d.dayNames: null) || this._defaults.dayNames,
            h = (d ? d.monthNamesShort: null) || this._defaults.monthNamesShort;
            d = (d ? d.monthNames: null) || this._defaults.monthNames;
            var k = function(b) {
                b = a.length > e + 1 && a.charAt(e + 1) === b;
                return b && e++,
                b
            },
            p = function(a, b, c) {
                b = "" + b;
                if (k(a)) for (; c > b.length;) b = "0" + b;
                return b
            },
            q = function(a, b, c, d) {
                return k(a) ? d[b] : c[b]
            },
            m = "",
            s = !1;
            if (b) for (e = 0; a.length > e; e++) if (s)"'" !== a.charAt(e) || k("'") ? m += a.charAt(e) : s = !1;
            else switch (a.charAt(e)) {
            case "d":
                m += p("d", b.getDate(), 2);
                break;
            case "D":
                m += q("D", b.getDay(), f, g);
                break;
            case "o":
                m += p("o", Math.round(((new Date(b.getFullYear(), b.getMonth(), b.getDate())).getTime() - (new Date(b.getFullYear(), 0, 0)).getTime()) / 864E5), 3);
                break;
            case "m":
                m += p("m", b.getMonth() + 1, 2);
                break;
            case "M":
                m += q("M", b.getMonth(), h, d);
                break;
            case "y":
                m += k("y") ? b.getFullYear() : (10 > b.getYear() % 100 ? "0": "") + b.getYear() % 100;
                break;
            case "@":
                m += b.getTime();
                break;
            case "!":
                m += 1E4 * b.getTime() + this._ticksTo1970;
                break;
            case "'":
                k("'") ? m += "'": s = !0;
                break;
            default:
                m += a.charAt(e)
            }
            return m
        },
        _possibleChars: function(a) {
            var b, d = "",
            e = !1,
            f = function(d) {
                d = a.length > b + 1 && a.charAt(b + 1) === d;
                return d && b++,
                d
            };
            for (b = 0; a.length > b; b++) if (e)"'" !== a.charAt(b) || f("'") ? d += a.charAt(b) : e = !1;
            else switch (a.charAt(b)) {
            case "d":
            case "m":
            case "y":
            case "@":
                d += "0123456789";
                break;
            case "D":
            case "M":
                return null;
            case "'":
                f("'") ? d += "'": e = !0;
                break;
            default:
                d += a.charAt(b)
            }
            return d
        },
        _get: function(a, b) {
            return void 0 !== a.settings[b] ? a.settings[b] : this._defaults[b]
        },
        _setDateFromField: function(a, b) {
            if (a.input.val() !== a.lastVal) {
                var d = this._get(a, "dateFormat"),
                e = a.lastVal = a.input ? a.input.val() : null,
                f = this._getDefaultDate(a),
                g = f,
                h = this._getFormatConfig(a);
                try {
                    g = this.parseDate(d, e, h) || f
                } catch(k) {
                    e = b ? "": e
                }
                a.selectedDay = g.getDate();
                a.drawMonth = a.selectedMonth = g.getMonth();
                a.drawYear = a.selectedYear = g.getFullYear();
                a.currentDay = e ? g.getDate() : 0;
                a.currentMonth = e ? g.getMonth() : 0;
                a.currentYear = e ? g.getFullYear() : 0;
                this._adjustInstDate(a)
            }
        },
        _getDefaultDate: function(a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
        },
        _determineDate: function(a, c, d) {
            var e = function(a) {
                var b = new Date;
                return b.setDate(b.getDate() + a),
                b
            },
            f = function(c) {
                try {
                    return b.datepicker.parseDate(b.datepicker._get(a, "dateFormat"), c, b.datepicker._getFormatConfig(a))
                } catch(d) {}
                for (var e = (c.toLowerCase().match(/^c/) ? b.datepicker._getDate(a) : null) || new Date, f = e.getFullYear(), g = e.getMonth(), e = e.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, k = h.exec(c); k;) {
                    switch (k[2] || "d") {
                    case "d":
                    case "D":
                        e += parseInt(k[1], 10);
                        break;
                    case "w":
                    case "W":
                        e += 7 * parseInt(k[1], 10);
                        break;
                    case "m":
                    case "M":
                        g += parseInt(k[1], 10);
                        e = Math.min(e, b.datepicker._getDaysInMonth(f, g));
                        break;
                    case "y":
                    case "Y":
                        f += parseInt(k[1], 10),
                        e = Math.min(e, b.datepicker._getDaysInMonth(f, g))
                    }
                    k = h.exec(c)
                }
                return new Date(f, g, e)
            };
            c = null == c || "" === c ? d: "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d: e(c) : new Date(c.getTime());
            return c = c && "Invalid Date" == "" + c ? d: c,
            c && (c.setHours(0), c.setMinutes(0), c.setSeconds(0), c.setMilliseconds(0)),
            this._daylightSavingAdjust(c)
        },
        _daylightSavingAdjust: function(a) {
            return a ? (a.setHours(12 < a.getHours() ? a.getHours() + 2 : 0), a) : null
        },
        _setDate: function(a, b, d) {
            var e = !b,
            f = a.selectedMonth,
            g = a.selectedYear;
            b = this._restrictMinMax(a, this._determineDate(a, b, new Date));
            a.selectedDay = a.currentDay = b.getDate();
            a.drawMonth = a.selectedMonth = a.currentMonth = b.getMonth();
            a.drawYear = a.selectedYear = a.currentYear = b.getFullYear();
            f === a.selectedMonth && g === a.selectedYear || d || this._notifyChange(a);
            this._adjustInstDate(a);
            a.input && a.input.val(e ? "": this._formatDate(a))
        },
        _getDate: function(a) {
            return ! a.currentYear || a.input && "" === a.input.val() ? null: this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay))
        },
        _attachHandlers: function(a) {
            var c = this._get(a, "stepMonths"),
            d = "#" + a.id.replace(/\\\\/g, "\\");
            a.dpDiv.find("[data-handler]").map(function() {
                b(this).bind(this.getAttribute("data-event"), {
                    prev: function() {
                        b.datepicker._adjustDate(d, -c, "M")
                    },
                    next: function() {
                        b.datepicker._adjustDate(d, +c, "M")
                    },
                    hide: function() {
                        b.datepicker._hideDatepicker()
                    },
                    today: function() {
                        b.datepicker._gotoToday(d)
                    },
                    selectDay: function() {
                        return b.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                        !1
                    },
                    selectMonth: function() {
                        return b.datepicker._selectMonthYear(d, this, "M"),
                        !1
                    },
                    selectYear: function() {
                        return b.datepicker._selectMonthYear(d, this, "Y"),
                        !1
                    }
                } [this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(a) {
            var b, d, e, f, g, h, k, p, m, q, s, t, u, E, w, x, A, ha, B, J, N, M, ta, R, U, I, qa, la = new Date,
            la = this._daylightSavingAdjust(new Date(la.getFullYear(), la.getMonth(), la.getDate())),
            ra = this._get(a, "isRTL");
            h = this._get(a, "showButtonPanel");
            e = this._get(a, "hideIfNoPrevNext");
            g = this._get(a, "navigationAsDateFormat");
            var V = this._getNumberOfMonths(a),
            K = this._get(a, "showCurrentAtPos");
            f = this._get(a, "stepMonths");
            var l = 1 !== V[0] || 1 !== V[1],
            va = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
            Da = this._getMinMaxDate(a, "min"),
            Ea = this._getMinMaxDate(a, "max"),
            K = a.drawMonth - K,
            oa = a.drawYear;
            if (0 > K && (K += 12, oa--), Ea) for (b = this._daylightSavingAdjust(new Date(Ea.getFullYear(), Ea.getMonth() - V[0] * V[1] + 1, Ea.getDate())), b = Da && Da > b ? Da: b; this._daylightSavingAdjust(new Date(oa, K, 1)) > b;) K--,
            0 > K && (K = 11, oa--);
            a.drawMonth = K;
            a.drawYear = oa;
            b = this._get(a, "prevText");
            b = g ? this.formatDate(b, this._daylightSavingAdjust(new Date(oa, K - f, 1)), this._getFormatConfig(a)) : b;
            b = this._canAdjustMonth(a, -1, oa, K) ? "\x3ca class\x3d'ui-datepicker-prev ui-corner-all' data-handler\x3d'prev' data-event\x3d'click' title\x3d'" + b + "'\x3e\x3cspan class\x3d'ui-icon ui-icon-circle-triangle-" + (ra ? "e": "w") + "'\x3e" + b + "\x3c/span\x3e\x3c/a\x3e": e ? "": "\x3ca class\x3d'ui-datepicker-prev ui-corner-all ui-state-disabled' title\x3d'" + b + "'\x3e\x3cspan class\x3d'ui-icon ui-icon-circle-triangle-" + (ra ? "e": "w") + "'\x3e" + b + "\x3c/span\x3e\x3c/a\x3e";
            d = this._get(a, "nextText");
            d = g ? this.formatDate(d, this._daylightSavingAdjust(new Date(oa, K + f, 1)), this._getFormatConfig(a)) : d;
            e = this._canAdjustMonth(a, 1, oa, K) ? "\x3ca class\x3d'ui-datepicker-next ui-corner-all' data-handler\x3d'next' data-event\x3d'click' title\x3d'" + d + "'\x3e\x3cspan class\x3d'ui-icon ui-icon-circle-triangle-" + (ra ? "w": "e") + "'\x3e" + d + "\x3c/span\x3e\x3c/a\x3e": e ? "": "\x3ca class\x3d'ui-datepicker-next ui-corner-all ui-state-disabled' title\x3d'" + d + "'\x3e\x3cspan class\x3d'ui-icon ui-icon-circle-triangle-" + (ra ? "w": "e") + "'\x3e" + d + "\x3c/span\x3e\x3c/a\x3e";
            f = this._get(a, "currentText");
            d = this._get(a, "gotoCurrent") && a.currentDay ? va: la;
            f = g ? this.formatDate(f, d, this._getFormatConfig(a)) : f;
            g = a.inline ? "": "\x3cbutton type\x3d'button' class\x3d'ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler\x3d'hide' data-event\x3d'click'\x3e" + this._get(a, "closeText") + "\x3c/button\x3e";
            h = h ? "\x3cdiv class\x3d'ui-datepicker-buttonpane ui-widget-content'\x3e" + (ra ? g: "") + (this._isInRange(a, d) ? "\x3cbutton type\x3d'button' class\x3d'ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler\x3d'today' data-event\x3d'click'\x3e" + f + "\x3c/button\x3e": "") + (ra ? "": g) + "\x3c/div\x3e": "";
            g = parseInt(this._get(a, "firstDay"), 10);
            g = isNaN(g) ? 0 : g;
            f = this._get(a, "showWeek");
            d = this._get(a, "dayNames");
            k = this._get(a, "dayNamesMin");
            p = this._get(a, "monthNames");
            m = this._get(a, "monthNamesShort");
            q = this._get(a, "beforeShowDay");
            s = this._get(a, "showOtherMonths");
            t = this._get(a, "selectOtherMonths");
            u = this._getDefaultDate(a);
            E = "";
            for (x = 0; V[0] > x; x++) {
                A = "";
                this.maxRows = 4;
                for (ha = 0; V[1] > ha; ha++) {
                    if (B = this._daylightSavingAdjust(new Date(oa, K, a.selectedDay)), w = " ui-corner-all", J = "", l) {
                        if (J += "\x3cdiv class\x3d'ui-datepicker-group", 1 < V[1]) switch (ha) {
                        case 0:
                            J += " ui-datepicker-group-first";
                            w = " ui-corner-" + (ra ? "right": "left");
                            break;
                        case V[1] - 1 : J += " ui-datepicker-group-last";
                            w = " ui-corner-" + (ra ? "left": "right");
                            break;
                        default:
                            J += " ui-datepicker-group-middle",
                            w = ""
                        }
                        J += "'\x3e"
                    }
                    J += "\x3cdiv class\x3d'ui-datepicker-header ui-widget-header ui-helper-clearfix" + w + "'\x3e" + (/all|left/.test(w) && 0 === x ? ra ? e: b: "") + (/all|right/.test(w) && 0 === x ? ra ? b: e: "") + this._generateMonthYearHeader(a, K, oa, Da, Ea, 0 < x || 0 < ha, p, m) + "\x3c/div\x3e\x3ctable class\x3d'ui-datepicker-calendar'\x3e\x3cthead\x3e\x3ctr\x3e";
                    N = f ? "\x3cth class\x3d'ui-datepicker-week-col'\x3e" + this._get(a, "weekHeader") + "\x3c/th\x3e": "";
                    for (w = 0; 7 > w; w++) M = (w + g) % 7,
                    N += "\x3cth scope\x3d'col'" + (5 <= (w + g + 6) % 7 ? " class\x3d'ui-datepicker-week-end'": "") + "\x3e\x3cspan title\x3d'" + d[M] + "'\x3e" + k[M] + "\x3c/span\x3e\x3c/th\x3e";
                    J += N + "\x3c/tr\x3e\x3c/thead\x3e\x3ctbody\x3e";
                    N = this._getDaysInMonth(oa, K);
                    oa === a.selectedYear && K === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, N));
                    w = (this._getFirstDayOfMonth(oa, K) - g + 7) % 7;
                    N = Math.ceil((w + N) / 7);
                    this.maxRows = N = l ? this.maxRows > N ? this.maxRows: N: N;
                    M = this._daylightSavingAdjust(new Date(oa, K, 1 - w));
                    for (ta = 0; N > ta; ta++) {
                        J += "\x3ctr\x3e";
                        R = f ? "\x3ctd class\x3d'ui-datepicker-week-col'\x3e" + this._get(a, "calculateWeek")(M) + "\x3c/td\x3e": "";
                        for (w = 0; 7 > w; w++) U = q ? q.apply(a.input ? a.input[0] : null, [M]) : [!0, ""],
                        qa = (I = M.getMonth() !== K) && !t || !U[0] || Da && Da > M || Ea && M > Ea,
                        R += "\x3ctd class\x3d'" + (5 <= (w + g + 6) % 7 ? " ui-datepicker-week-end": "") + (I ? " ui-datepicker-other-month": "") + (M.getTime() === B.getTime() && K === a.selectedMonth && a._keyEvent || u.getTime() === M.getTime() && u.getTime() === B.getTime() ? " " + this._dayOverClass: "") + (qa ? " " + this._unselectableClass + " ui-state-disabled": "") + (I && !s ? "": " " + U[1] + (M.getTime() === va.getTime() ? " " + this._currentClass: "") + (M.getTime() === la.getTime() ? " ui-datepicker-today": "")) + "'" + (I && !s || !U[2] ? "": " title\x3d'" + U[2].replace(/'/g, "\x26#39;") + "'") + (qa ? "": " data-handler\x3d'selectDay' data-event\x3d'click' data-month\x3d'" + M.getMonth() + "' data-year\x3d'" + M.getFullYear() + "'") + "\x3e" + (I && !s ? "\x26#xa0;": qa ? "\x3cspan class\x3d'ui-state-default'\x3e" + M.getDate() + "\x3c/span\x3e": "\x3ca class\x3d'ui-state-default" + (M.getTime() === la.getTime() ? " ui-state-highlight": "") + (M.getTime() === va.getTime() ? " ui-state-active": "") + (I ? " ui-priority-secondary": "") + "' href\x3d'#'\x3e" + M.getDate() + "\x3c/a\x3e") + "\x3c/td\x3e",
                        M.setDate(M.getDate() + 1),
                        M = this._daylightSavingAdjust(M);
                        J += R + "\x3c/tr\x3e"
                    }
                    K++;
                    11 < K && (K = 0, oa++);
                    J += "\x3c/tbody\x3e\x3c/table\x3e" + (l ? "\x3c/div\x3e" + (0 < V[0] && ha === V[1] - 1 ? "\x3cdiv class\x3d'ui-datepicker-row-break'\x3e\x3c/div\x3e": "") : "");
                    A += J
                }
                E += A
            }
            return E += h,
            a._keyEvent = !1,
            E
        },
        _generateMonthYearHeader: function(a, b, d, e, f, g, h, k) {
            var p, m, q, s = this._get(a, "changeMonth"),
            t = this._get(a, "changeYear"),
            u = this._get(a, "showMonthAfterYear"),
            E = "\x3cdiv class\x3d'ui-datepicker-title'\x3e",
            w = "";
            if (g || !s) w += "\x3cspan class\x3d'ui-datepicker-month'\x3e" + h[b] + "\x3c/span\x3e";
            else {
                h = e && e.getFullYear() === d;
                p = f && f.getFullYear() === d;
                w += "\x3cselect class\x3d'ui-datepicker-month' data-handler\x3d'selectMonth' data-event\x3d'change'\x3e";
                for (m = 0; 12 > m; m++)(!h || m >= e.getMonth()) && (!p || f.getMonth() >= m) && (w += "\x3coption value\x3d'" + m + "'" + (m === b ? " selected\x3d'selected'": "") + "\x3e" + k[m] + "\x3c/option\x3e");
                w += "\x3c/select\x3e"
            }
            if (u || (E += w + (!g && s && t ? "": "\x26#xa0;")), !a.yearshtml) if (a.yearshtml = "", g || !t) E += "\x3cspan class\x3d'ui-datepicker-year'\x3e" + d + "\x3c/span\x3e";
            else {
                k = this._get(a, "yearRange").split(":");
                q = (new Date).getFullYear();
                h = function(a) {
                    a = a.match(/c[+\-].*/) ? d + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? q + parseInt(a, 10) : parseInt(a, 10);
                    return isNaN(a) ? q: a
                };
                b = h(k[0]);
                k = Math.max(b, h(k[1] || ""));
                b = e ? Math.max(b, e.getFullYear()) : b;
                k = f ? Math.min(k, f.getFullYear()) : k;
                for (a.yearshtml += "\x3cselect class\x3d'ui-datepicker-year' data-handler\x3d'selectYear' data-event\x3d'change'\x3e"; k >= b; b++) a.yearshtml += "\x3coption value\x3d'" + b + "'" + (b === d ? " selected\x3d'selected'": "") + "\x3e" + b + "\x3c/option\x3e";
                a.yearshtml += "\x3c/select\x3e";
                E += a.yearshtml;
                a.yearshtml = null
            }
            return E += this._get(a, "yearSuffix"),
            u && (E += (!g && s && t ? "": "\x26#xa0;") + w),
            E += "\x3c/div\x3e"
        },
        _adjustInstDate: function(a, b, d) {
            var e = a.drawYear + ("Y" === d ? b: 0),
            f = a.drawMonth + ("M" === d ? b: 0);
            b = Math.min(a.selectedDay, this._getDaysInMonth(e, f)) + ("D" === d ? b: 0);
            e = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(e, f, b)));
            a.selectedDay = e.getDate();
            a.drawMonth = a.selectedMonth = e.getMonth();
            a.drawYear = a.selectedYear = e.getFullYear();
            "M" !== d && "Y" !== d || this._notifyChange(a)
        },
        _restrictMinMax: function(a, b) {
            var d = this._getMinMaxDate(a, "min"),
            e = this._getMinMaxDate(a, "max"),
            d = d && d > b ? d: b;
            return e && d > e ? e: d
        },
        _notifyChange: function(a) {
            var b = this._get(a, "onChangeMonthYear");
            b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
        },
        _getNumberOfMonths: function(a) {
            a = this._get(a, "numberOfMonths");
            return null == a ? [1, 1] : "number" == typeof a ? [1, a] : a
        },
        _getMinMaxDate: function(a, b) {
            return this._determineDate(a, this._get(a, b + "Date"), null)
        },
        _getDaysInMonth: function(a, b) {
            return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
        },
        _getFirstDayOfMonth: function(a, b) {
            return (new Date(a, b, 1)).getDay()
        },
        _canAdjustMonth: function(a, b, d, e) {
            var f = this._getNumberOfMonths(a);
            d = this._daylightSavingAdjust(new Date(d, e + (0 > b ? b: f[0] * f[1]), 1));
            return 0 > b && d.setDate(this._getDaysInMonth(d.getFullYear(), d.getMonth())),
            this._isInRange(a, d)
        },
        _isInRange: function(a, b) {
            var d, e, f = this._getMinMaxDate(a, "min"),
            g = this._getMinMaxDate(a, "max"),
            h = null,
            k = null,
            p = this._get(a, "yearRange");
            return p && (d = p.split(":"), e = (new Date).getFullYear(), h = parseInt(d[0], 10), k = parseInt(d[1], 10), d[0].match(/[+\-].*/) && (h += e), d[1].match(/[+\-].*/) && (k += e)),
            (!f || b.getTime() >= f.getTime()) && (!g || b.getTime() <= g.getTime()) && (!h || b.getFullYear() >= h) && (!k || k >= b.getFullYear())
        },
        _getFormatConfig: function(a) {
            var b = this._get(a, "shortYearCutoff");
            return b = "string" != typeof b ? b: (new Date).getFullYear() % 100 + parseInt(b, 10),
            {
                shortYearCutoff: b,
                dayNamesShort: this._get(a, "dayNamesShort"),
                dayNames: this._get(a, "dayNames"),
                monthNamesShort: this._get(a, "monthNamesShort"),
                monthNames: this._get(a, "monthNames")
            }
        },
        _formatDate: function(a, b, d, e) {
            b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
            b = b ? "object" == typeof b ? b: this._daylightSavingAdjust(new Date(e, d, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return this.formatDate(this._get(a, "dateFormat"), b, this._getFormatConfig(a))
        }
    });
    b.fn.datepicker = function(a) {
        if (!this.length) return this;
        b.datepicker.initialized || (b(document).mousedown(b.datepicker._checkExternalClick), b.datepicker.initialized = !0);
        0 === b("#" + b.datepicker._mainDivId).length && b("body").append(b.datepicker.dpDiv);
        var c = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof a || "isDisabled" !== a && "getDate" !== a && "widget" !== a ? "option" === a && 2 === arguments.length && "string" == typeof arguments[1] ? b.datepicker["_" + a + "Datepicker"].apply(b.datepicker, [this[0]].concat(c)) : this.each(function() {
            "string" == typeof a ? b.datepicker["_" + a + "Datepicker"].apply(b.datepicker, [this].concat(c)) : b.datepicker._attachDatepicker(this, a)
        }) : b.datepicker["_" + a + "Datepicker"].apply(b.datepicker, [this[0]].concat(c))
    };
    b.datepicker = new g;
    b.datepicker.initialized = !1;
    b.datepicker.uuid = (new Date).getTime();
    b.datepicker.version = "1.11.1";
    b.datepicker;
    b.widget("ui.dialog", {
        version: "1.11.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "Close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(a) {
                    var c = b(this).css(a).offset().top;
                    0 > c && b(this).css("top", a.top - c)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.originalTitle = this.element.attr("title");
            this.options.title = this.options.title || this.originalTitle;
            this._createWrapper();
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
            this._createTitlebar();
            this._createButtonPane();
            this.options.draggable && b.fn.draggable && this._makeDraggable();
            this.options.resizable && b.fn.resizable && this._makeResizable();
            this._isOpen = !1;
            this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var a = this.options.appendTo;
            return a && (a.jquery || a.nodeType) ? b(a) : this.document.find(a || "body").eq(0)
        },
        _destroy: function() {
            var a, b = this.originalPosition;
            this._destroyOverlay();
            this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
            this.uiDialog.stop(!0, !0).remove();
            this.originalTitle && this.element.attr("title", this.originalTitle);
            a = b.parent.children().eq(b.index);
            a.length && a[0] !== this.element[0] ? a.before(this.element) : b.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: b.noop,
        enable: b.noop,
        close: function(a) {
            var c, d = this;
            if (this._isOpen && !1 !== this._trigger("beforeClose", a)) {
                if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try { (c = this.document[0].activeElement) && "body" !== c.nodeName.toLowerCase() && b(c).blur()
                } catch(e) {}
                this._hide(this.uiDialog, this.options.hide,
                function() {
                    d._trigger("close", a)
                })
            }
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(a, c) {
            var d = !1,
            e = this.uiDialog.siblings(".ui-front:visible").map(function() {
                return + b(this).css("z-index")
            }).get(),
            e = Math.max.apply(null, e);
            return e >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", e + 1), d = !0),
            d && !c && this._trigger("focus", a),
            d
        },
        open: function() {
            var a = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = b(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show,
            function() {
                a._focusTabbable();
                a._trigger("focus")
            }), this._makeFocusTarget(), this._trigger("open"), void 0)
        },
        _focusTabbable: function() {
            var a = this._focusedElement;
            a || (a = this.element.find("[autofocus]"));
            a.length || (a = this.element.find(":tabbable"));
            a.length || (a = this.uiDialogButtonPane.find(":tabbable"));
            a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable"));
            a.length || (a = this.uiDialog);
            a.eq(0).focus()
        },
        _keepFocus: function(a) {
            function c() {
                var a = this.document[0].activeElement;
                this.uiDialog[0] === a || b.contains(this.uiDialog[0], a) || this._focusTabbable()
            }
            a.preventDefault();
            c.call(this);
            this._delay(c)
        },
        _createWrapper: function() {
            this.uiDialog = b("\x3cdiv\x3e").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo());
            this._on(this.uiDialog, {
                keydown: function(a) {
                    if (this.options.closeOnEscape && !a.isDefaultPrevented() && a.keyCode && a.keyCode === b.ui.keyCode.ESCAPE) return a.preventDefault(),
                    this.close(a),
                    void 0;
                    if (a.keyCode === b.ui.keyCode.TAB && !a.isDefaultPrevented()) {
                        var c = this.uiDialog.find(":tabbable"),
                        d = c.filter(":first"),
                        e = c.filter(":last");
                        a.target !== e[0] && a.target !== this.uiDialog[0] || a.shiftKey ? a.target !== d[0] && a.target !== this.uiDialog[0] || !a.shiftKey || (this._delay(function() {
                            e.focus()
                        }), a.preventDefault()) : (this._delay(function() {
                            d.focus()
                        }), a.preventDefault())
                    }
                },
                mousedown: function(a) {
                    this._moveToTop(a) && this._focusTabbable()
                }
            });
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var a;
            this.uiDialogTitlebar = b("\x3cdiv\x3e").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
            this._on(this.uiDialogTitlebar, {
                mousedown: function(a) {
                    b(a.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            });
            this.uiDialogTitlebarClose = b("\x3cbutton type\x3d'button'\x3e\x3c/button\x3e").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
            this._on(this.uiDialogTitlebarClose, {
                click: function(a) {
                    a.preventDefault();
                    this.close(a)
                }
            });
            a = b("\x3cspan\x3e").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
            this._title(a);
            this.uiDialog.attr({
                "aria-labelledby": a.attr("id")
            })
        },
        _title: function(a) {
            this.options.title || a.html("\x26#160;");
            a.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = b("\x3cdiv\x3e").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = b("\x3cdiv\x3e").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
            this._createButtons()
        },
        _createButtons: function() {
            var a = this,
            c = this.options.buttons;
            return this.uiDialogButtonPane.remove(),
            this.uiButtonSet.empty(),
            b.isEmptyObject(c) || b.isArray(c) && !c.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0) : (b.each(c,
            function(c, e) {
                var f, g;
                e = b.isFunction(e) ? {
                    click: e,
                    text: c
                }: e;
                e = b.extend({
                    type: "button"
                },
                e);
                f = e.click;
                e.click = function() {
                    f.apply(a.element[0], arguments)
                };
                g = {
                    icons: e.icons,
                    text: e.showText
                };
                delete e.icons;
                delete e.showText;
                b("\x3cbutton\x3e\x3c/button\x3e", e).button(g).appendTo(a.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
        },
        _makeDraggable: function() {
            function a(a) {
                return {
                    position: a.position,
                    offset: a.offset
                }
            }
            var c = this,
            d = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(d, f) {
                    b(this).addClass("ui-dialog-dragging");
                    c._blockFrames();
                    c._trigger("dragStart", d, a(f))
                },
                drag: function(b, d) {
                    c._trigger("drag", b, a(d))
                },
                stop: function(e, f) {
                    var g = f.offset.left - c.document.scrollLeft(),
                    h = f.offset.top - c.document.scrollTop();
                    d.position = {
                        my: "left top",
                        at: "left" + (0 <= g ? "+": "") + g + " top" + (0 <= h ? "+": "") + h,
                        of: c.window
                    };
                    b(this).removeClass("ui-dialog-dragging");
                    c._unblockFrames();
                    c._trigger("dragStop", e, a(f))
                }
            })
        },
        _makeResizable: function() {
            function a(a) {
                return {
                    originalPosition: a.originalPosition,
                    originalSize: a.originalSize,
                    position: a.position,
                    size: a.size
                }
            }
            var c = this,
            d = this.options,
            e = d.resizable,
            f = this.uiDialog.css("position"),
            e = "string" == typeof e ? e: "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: d.maxWidth,
                maxHeight: d.maxHeight,
                minWidth: d.minWidth,
                minHeight: this._minHeight(),
                handles: e,
                start: function(d, e) {
                    b(this).addClass("ui-dialog-resizing");
                    c._blockFrames();
                    c._trigger("resizeStart", d, a(e))
                },
                resize: function(b, d) {
                    c._trigger("resize", b, a(d))
                },
                stop: function(e, f) {
                    var g = c.uiDialog.offset(),
                    h = g.left - c.document.scrollLeft(),
                    g = g.top - c.document.scrollTop();
                    d.height = c.uiDialog.height();
                    d.width = c.uiDialog.width();
                    d.position = {
                        my: "left top",
                        at: "left" + (0 <= h ? "+": "") + h + " top" + (0 <= g ? "+": "") + g,
                        of: c.window
                    };
                    b(this).removeClass("ui-dialog-resizing");
                    c._unblockFrames();
                    c._trigger("resizeStop", e, a(f))
                }
            }).css("position", f)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(a) {
                    this._makeFocusTarget();
                    this._focusedElement = b(a.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance();
            this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var a = this._trackingInstances(),
            c = b.inArray(this, a); - 1 !== c && a.splice(c, 1)
        },
        _trackingInstances: function() {
            var a = this.document.data("ui-dialog-instances");
            return a || (a = [], this.document.data("ui-dialog-instances", a)),
            a
        },
        _minHeight: function() {
            var a = this.options;
            return "auto" === a.height ? a.minHeight: Math.min(a.minHeight, a.height)
        },
        _position: function() {
            var a = this.uiDialog.is(":visible");
            a || this.uiDialog.show();
            this.uiDialog.position(this.options.position);
            a || this.uiDialog.hide()
        },
        _setOptions: function(a) {
            var c = this,
            d = !1,
            e = {};
            b.each(a,
            function(a, b) {
                c._setOption(a, b);
                a in c.sizeRelatedOptions && (d = !0);
                a in c.resizableRelatedOptions && (e[a] = b)
            });
            d && (this._size(), this._position());
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", e)
        },
        _setOption: function(a, b) {
            var d, e, f = this.uiDialog;
            "dialogClass" === a && f.removeClass(this.options.dialogClass).addClass(b);
            "disabled" !== a && (this._super(a, b), "appendTo" === a && this.uiDialog.appendTo(this._appendTo()), "buttons" === a && this._createButtons(), "closeText" === a && this.uiDialogTitlebarClose.button({
                label: "" + b
            }), "draggable" === a && (d = f.is(":data(ui-draggable)"), d && !b && f.draggable("destroy"), !d && b && this._makeDraggable()), "position" === a && this._position(), "resizable" === a && (e = f.is(":data(ui-resizable)"), e && !b && f.resizable("destroy"), e && "string" == typeof b && f.resizable("option", "handles", b), e || !1 === b || this._makeResizable()), "title" === a && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var a, b, d, e = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            });
            e.minWidth > e.width && (e.width = e.minWidth);
            a = this.uiDialog.css({
                height: "auto",
                width: e.width
            }).outerHeight();
            b = Math.max(0, e.minHeight - a);
            d = "number" == typeof e.maxHeight ? Math.max(0, e.maxHeight - a) : "none";
            "auto" === e.height ? this.element.css({
                minHeight: b,
                maxHeight: d,
                height: "auto"
            }) : this.element.height(Math.max(0, e.height - a));
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var a = b(this);
                return b("\x3cdiv\x3e").css({
                    position: "absolute",
                    width: a.outerWidth(),
                    height: a.outerHeight()
                }).appendTo(a.parent()).offset(a.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(a) {
            return b(a.target).closest(".ui-dialog").length ? !0 : !!b(a.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var a = !0;
                this._delay(function() {
                    a = !1
                });
                this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(b) {
                        a || this._allowInteraction(b) || (b.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                });
                this.overlay = b("\x3cdiv\x3e").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                });
                this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var a = this.document.data("ui-dialog-overlays") - 1;
                a ? this.document.data("ui-dialog-overlays", a) : this.document.unbind("focusin").removeData("ui-dialog-overlays");
                this.overlay.remove();
                this.overlay = null
            }
        }
    });
    b.widget("ui.progressbar", {
        version: "1.11.1",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue();
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            });
            this.valueDiv = b("\x3cdiv class\x3d'ui-progressbar-value ui-widget-header ui-corner-left'\x3e\x3c/div\x3e").appendTo(this.element);
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.valueDiv.remove()
        },
        value: function(a) {
            return void 0 === a ? this.options.value: (this.options.value = this._constrainedValue(a), this._refreshValue(), void 0)
        },
        _constrainedValue: function(a) {
            return void 0 === a && (a = this.options.value),
            this.indeterminate = !1 === a,
            "number" != typeof a && (a = 0),
            this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, a))
        },
        _setOptions: function(a) {
            var b = a.value;
            delete a.value;
            this._super(a);
            this.options.value = this._constrainedValue(b);
            this._refreshValue()
        },
        _setOption: function(a, b) {
            "max" === a && (b = Math.max(this.min, b));
            "disabled" === a && this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b);
            this._super(a, b)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var a = this.options.value,
            c = this._percentage();
            this.valueDiv.toggle(this.indeterminate || a > this.min).toggleClass("ui-corner-right", a === this.options.max).width(c.toFixed(0) + "%");
            this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate);
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = b("\x3cdiv class\x3d'ui-progressbar-overlay'\x3e\x3c/div\x3e").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": a
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null));
            this.oldValue !== a && (this.oldValue = a, this._trigger("change"));
            a === this.options.max && this._trigger("complete")
        }
    });
    b.widget("ui.selectmenu", {
        version: "1.11.1",
        defaultElement: "\x3cselect\x3e",
        options: {
            appendTo: null,
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var a = this.element.uniqueId().attr("id");
            this.ids = {
                element: a,
                button: a + "-button",
                menu: a + "-menu"
            };
            this._drawButton();
            this._drawMenu();
            this.options.disabled && this.disable()
        },
        _drawButton: function() {
            var a = this,
            c = this.element.attr("tabindex");
            this.label = b("label[for\x3d'" + this.ids.element + "']").attr("for", this.ids.button);
            this._on(this.label, {
                click: function(a) {
                    this.button.focus();
                    a.preventDefault()
                }
            });
            this.element.hide();
            this.button = b("\x3cspan\x3e", {
                "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                tabindex: c || this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true"
            }).insertAfter(this.element);
            b("\x3cspan\x3e", {
                "class": "ui-icon " + this.options.icons.button
            }).prependTo(this.button);
            this.buttonText = b("\x3cspan\x3e", {
                "class": "ui-selectmenu-text"
            }).appendTo(this.button);
            this._setText(this.buttonText, this.element.find("option:selected").text());
            this._resizeButton();
            this._on(this.button, this._buttonEvents);
            this.button.one("focusin",
            function() {
                a.menuItems || a._refreshMenu()
            });
            this._hoverable(this.button);
            this._focusable(this.button)
        },
        _drawMenu: function() {
            var a = this;
            this.menu = b("\x3cul\x3e", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            });
            this.menuWrap = b("\x3cdiv\x3e", {
                "class": "ui-selectmenu-menu ui-front"
            }).append(this.menu).appendTo(this._appendTo());
            this.menuInstance = this.menu.menu({
                role: "listbox",
                select: function(b, d) {
                    b.preventDefault();
                    a._select(d.item.data("ui-selectmenu-item"), b)
                },
                focus: function(b, d) {
                    var e = d.item.data("ui-selectmenu-item");
                    null != a.focusIndex && e.index !== a.focusIndex && (a._trigger("focus", b, {
                        item: e
                    }), a.isOpen || a._select(e, b));
                    a.focusIndex = e.index;
                    a.button.attr("aria-activedescendant", a.menuItems.eq(e.index).attr("id"))
                }
            }).menu("instance");
            this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all");
            this.menuInstance._off(this.menu, "mouseleave");
            this.menuInstance._closeOnDocumentClick = function() {
                return ! 1
            };
            this.menuInstance._isDivider = function() {
                return ! 1
            }
        },
        refresh: function() {
            this._refreshMenu();
            this._setText(this.buttonText, this._getSelectedItem().text());
            this.options.width || this._resizeButton()
        },
        _refreshMenu: function() {
            this.menu.empty();
            var a, b = this.element.find("option");
            b.length && (this._parseOptions(b), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), a = this._getSelectedItem(), this.menuInstance.focus(null, a), this._setAria(a.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(a) {
            this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", a))
        },
        _position: function() {
            this.menuWrap.position(b.extend({
                of: this.button
            },
            this.options.position))
        },
        close: function(a) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this._off(this.document), this._trigger("close", a))
        },
        widget: function() {
            return this.button
        },
        menuWidget: function() {
            return this.menu
        },
        _renderMenu: function(a, c) {
            var d = this,
            e = "";
            b.each(c,
            function(c, g) {
                g.optgroup !== e && (b("\x3cli\x3e", {
                    "class": "ui-selectmenu-optgroup ui-menu-divider" + (g.element.parent("optgroup").prop("disabled") ? " ui-state-disabled": ""),
                    text: g.optgroup
                }).appendTo(a), e = g.optgroup);
                d._renderItemData(a, g)
            })
        },
        _renderItemData: function(a, b) {
            return this._renderItem(a, b).data("ui-selectmenu-item", b)
        },
        _renderItem: function(a, c) {
            var d = b("\x3cli\x3e");
            return c.disabled && d.addClass("ui-state-disabled"),
            this._setText(d, c.label),
            d.appendTo(a)
        },
        _setText: function(a, b) {
            b ? a.text(b) : a.html("\x26#160;")
        },
        _move: function(a, b) {
            var d, e = ".ui-menu-item";
            this.isOpen ? d = this.menuItems.eq(this.focusIndex) : (d = this.menuItems.eq(this.element[0].selectedIndex), e += ":not(.ui-state-disabled)");
            d = "first" === a || "last" === a ? d["first" === a ? "prevAll": "nextAll"](e).eq( - 1) : d[a + "All"](e).eq(0);
            d.length && this.menuInstance.focus(b, d)
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex)
        },
        _toggle: function(a) {
            this[this.isOpen ? "close": "open"](a)
        },
        _documentClick: {
            mousedown: function(a) {
                this.isOpen && (b(a.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(a))
            }
        },
        _buttonEvents: {
            mousedown: function(a) {
                a.preventDefault()
            },
            click: "_toggle",
            keydown: function(a) {
                var c = !0;
                switch (a.keyCode) {
                case b.ui.keyCode.TAB:
                case b.ui.keyCode.ESCAPE:
                    this.close(a);
                    c = !1;
                    break;
                case b.ui.keyCode.ENTER:
                    this.isOpen && this._selectFocusedItem(a);
                    break;
                case b.ui.keyCode.UP:
                    a.altKey ? this._toggle(a) : this._move("prev", a);
                    break;
                case b.ui.keyCode.DOWN:
                    a.altKey ? this._toggle(a) : this._move("next", a);
                    break;
                case b.ui.keyCode.SPACE:
                    this.isOpen ? this._selectFocusedItem(a) : this._toggle(a);
                    break;
                case b.ui.keyCode.LEFT:
                    this._move("prev", a);
                    break;
                case b.ui.keyCode.RIGHT:
                    this._move("next", a);
                    break;
                case b.ui.keyCode.HOME:
                case b.ui.keyCode.PAGE_UP:
                    this._move("first", a);
                    break;
                case b.ui.keyCode.END:
                case b.ui.keyCode.PAGE_DOWN:
                    this._move("last", a);
                    break;
                default:
                    this.menu.trigger(a),
                    c = !1
                }
                c && a.preventDefault()
            }
        },
        _selectFocusedItem: function(a) {
            var b = this.menuItems.eq(this.focusIndex);
            b.hasClass("ui-state-disabled") || this._select(b.data("ui-selectmenu-item"), a)
        },
        _select: function(a, b) {
            var d = this.element[0].selectedIndex;
            this.element[0].selectedIndex = a.index;
            this._setText(this.buttonText, a.label);
            this._setAria(a);
            this._trigger("select", b, {
                item: a
            });
            a.index !== d && this._trigger("change", b, {
                item: a
            });
            this.close(b)
        },
        _setAria: function(a) {
            a = this.menuItems.eq(a.index).attr("id");
            this.button.attr({
                "aria-labelledby": a,
                "aria-activedescendant": a
            });
            this.menu.attr("aria-activedescendant", a)
        },
        _setOption: function(a, b) {
            "icons" === a && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(b.button);
            this._super(a, b);
            "appendTo" === a && this.menuWrap.appendTo(this._appendTo());
            "disabled" === a && (this.menuInstance.option("disabled", b), this.button.toggleClass("ui-state-disabled", b).attr("aria-disabled", b), this.element.prop("disabled", b), b ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0));
            "width" === a && this._resizeButton()
        },
        _appendTo: function() {
            var a = this.options.appendTo;
            return a && (a = a.jquery || a.nodeType ? b(a) : this.document.find(a).eq(0)),
            a && a[0] || (a = this.element.closest(".ui-front")),
            a.length || (a = this.document[0].body),
            a
        },
        _toggleAttr: function() {
            this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen);
            this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen);
            this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function() {
            var a = this.options.width;
            a || (a = this.element.show().outerWidth(), this.element.hide());
            this.button.outerWidth(a)
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function() {
            return {
                disabled: this.element.prop("disabled")
            }
        },
        _parseOptions: function(a) {
            var c = [];
            a.each(function(a, e) {
                var f = b(e),
                g = f.parent("optgroup");
                c.push({
                    element: f,
                    index: a,
                    value: f.attr("value"),
                    label: f.text(),
                    optgroup: g.attr("label") || "",
                    disabled: g.prop("disabled") || f.prop("disabled")
                })
            });
            this.items = c
        },
        _destroy: function() {
            this.menuWrap.remove();
            this.button.remove();
            this.element.show();
            this.element.removeUniqueId();
            this.label.attr("for", this.ids.element)
        }
    });
    b.widget("ui.slider", b.ui.mouse, {
        version: "1.11.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._mouseSliding = this._keySliding = !1;
            this._animateOff = !0;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
            this._refresh();
            this._setOption("disabled", this.options.disabled);
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue()
        },
        _createHandles: function() {
            var a, c;
            a = this.options;
            var d = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
            e = [];
            c = a.values && a.values.length || 1;
            d.length > c && (d.slice(c).remove(), d = d.slice(0, c));
            for (a = d.length; c > a; a++) e.push("\x3cspan class\x3d'ui-slider-handle ui-state-default ui-corner-all' tabindex\x3d'0'\x3e\x3c/span\x3e");
            this.handles = d.add(b(e.join("")).appendTo(this.element));
            this.handle = this.handles.eq(0);
            this.handles.each(function(a) {
                b(this).data("ui-slider-handle-index", a)
            })
        },
        _createRange: function() {
            var a = this.options,
            c = "";
            a.range ? (!0 === a.range && (a.values ? a.values.length && 2 !== a.values.length ? a.values = [a.values[0], a.values[0]] : b.isArray(a.values) && (a.values = a.values.slice(0)) : a.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = b("\x3cdiv\x3e\x3c/div\x3e").appendTo(this.element), c = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(c + ("min" === a.range || "max" === a.range ? " ui-slider-range-" + a.range: ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles);
            this._on(this.handles, this._handleEvents);
            this._hoverable(this.handles);
            this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove();
            this.range && this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
            this._mouseDestroy()
        },
        _mouseCapture: function(a) {
            var c, d, e, f, g, h, k, p, m = this,
            q = this.options;
            return q.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(), c = {
                x: a.pageX,
                y: a.pageY
            },
            d = this._normValueFromMouse(c), e = this._valueMax() - this._valueMin() + 1, this.handles.each(function(a) {
                var c = Math.abs(d - m.values(a)); (e > c || e === c && (a === m._lastChangedValue || m.values(a) === q.min)) && (e = c, f = b(this), g = a)
            }), h = this._start(a, g), !1 === h ? !1 : (this._mouseSliding = !0, this._handleIndex = g, f.addClass("ui-state-active").focus(), k = f.offset(), p = !b(a.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = p ? {
                left: 0,
                top: 0
            }: {
                left: a.pageX - k.left - f.width() / 2,
                top: a.pageY - k.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(a, g, d), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return ! 0
        },
        _mouseDrag: function(a) {
            var b = this._normValueFromMouse({
                x: a.pageX,
                y: a.pageY
            });
            return this._slide(a, this._handleIndex, b),
            !1
        },
        _mouseStop: function(a) {
            return this.handles.removeClass("ui-state-active"),
            this._mouseSliding = !1,
            this._stop(a, this._handleIndex),
            this._change(a, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1,
            !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical": "horizontal"
        },
        _normValueFromMouse: function(a) {
            var b, d, e, f, g;
            return "horizontal" === this.orientation ? (b = this.elementSize.width, d = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left: 0)) : (b = this.elementSize.height, d = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top: 0)),
            e = d / b,
            1 < e && (e = 1),
            0 > e && (e = 0),
            "vertical" === this.orientation && (e = 1 - e),
            f = this._valueMax() - this._valueMin(),
            g = this._valueMin() + e * f,
            this._trimAlignValue(g)
        },
        _start: function(a, b) {
            var d = {
                handle: this.handles[b],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (d.value = this.values(b), d.values = this.values()),
            this._trigger("start", a, d)
        },
        _slide: function(a, b, d) {
            var e, f, g;
            this.options.values && this.options.values.length ? (e = this.values(b ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === b && d > e || 1 === b && e > d) && (d = e), d !== this.values(b) && (f = this.values(), f[b] = d, g = this._trigger("slide", a, {
                handle: this.handles[b],
                value: d,
                values: f
            }), this.values(b ? 0 : 1), !1 !== g && this.values(b, d))) : d !== this.value() && (g = this._trigger("slide", a, {
                handle: this.handles[b],
                value: d
            }), !1 !== g && this.value(d))
        },
        _stop: function(a, b) {
            var d = {
                handle: this.handles[b],
                value: this.value()
            };
            this.options.values && this.options.values.length && (d.value = this.values(b), d.values = this.values());
            this._trigger("stop", a, d)
        },
        _change: function(a, b) {
            if (!this._keySliding && !this._mouseSliding) {
                var d = {
                    handle: this.handles[b],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (d.value = this.values(b), d.values = this.values());
                this._lastChangedValue = b;
                this._trigger("change", a, d)
            }
        },
        value: function(a) {
            return arguments.length ? (this.options.value = this._trimAlignValue(a), this._refreshValue(), this._change(null, 0), void 0) : this._value()
        },
        values: function(a, c) {
            var d, e, f;
            if (1 < arguments.length) return this.options.values[a] = this._trimAlignValue(c),
            this._refreshValue(),
            this._change(null, a),
            void 0;
            if (!arguments.length) return this._values();
            if (!b.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(a) : this.value();
            d = this.options.values;
            e = arguments[0];
            for (f = 0; d.length > f; f += 1) d[f] = this._trimAlignValue(e[f]),
            this._change(null, f);
            this._refreshValue()
        },
        _setOption: function(a, c) {
            var d, e = 0;
            switch ("range" === a && !0 === this.options.range && ("min" === c ? (this.options.value = this._values(0), this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), b.isArray(this.options.values) && (e = this.options.values.length), "disabled" === a && this.element.toggleClass("ui-state-disabled", !!c), this._super(a, c), a) {
            case "orientation":
                this._detectOrientation();
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                this._refreshValue();
                this.handles.css("horizontal" === c ? "bottom": "left", "");
                break;
            case "value":
                this._animateOff = !0;
                this._refreshValue();
                this._change(null, 0);
                this._animateOff = !1;
                break;
            case "values":
                this._animateOff = !0;
                this._refreshValue();
                for (d = 0; e > d; d += 1) this._change(null, d);
                this._animateOff = !1;
                break;
            case "min":
            case "max":
                this._animateOff = !0;
                this._refreshValue();
                this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0,
                this._refresh(),
                this._animateOff = !1
            }
        },
        _value: function() {
            return this._trimAlignValue(this.options.value)
        },
        _values: function(a) {
            var b, d;
            if (arguments.length) return b = this.options.values[a],
            this._trimAlignValue(b);
            if (this.options.values && this.options.values.length) {
                b = this.options.values.slice();
                for (d = 0; b.length > d; d += 1) b[d] = this._trimAlignValue(b[d]);
                return b
            }
            return []
        },
        _trimAlignValue: function(a) {
            if (this._valueMin() >= a) return this._valueMin();
            if (a >= this._valueMax()) return this._valueMax();
            var b = 0 < this.options.step ? this.options.step: 1,
            d = (a - this._valueMin()) % b;
            a -= d;
            return 2 * Math.abs(d) >= b && (a += 0 < d ? b: -b),
            parseFloat(a.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var a, c, d, e, f, g = this.options.range,
            h = this.options,
            k = this,
            p = this._animateOff ? !1 : h.animate,
            m = {};
            this.options.values && this.options.values.length ? this.handles.each(function(d) {
                c = 100 * ((k.values(d) - k._valueMin()) / (k._valueMax() - k._valueMin()));
                m["horizontal" === k.orientation ? "left": "bottom"] = c + "%";
                b(this).stop(1, 1)[p ? "animate": "css"](m, h.animate); ! 0 === k.options.range && ("horizontal" === k.orientation ? (0 === d && k.range.stop(1, 1)[p ? "animate": "css"]({
                    left: c + "%"
                },
                h.animate), 1 === d && k.range[p ? "animate": "css"]({
                    width: c - a + "%"
                },
                {
                    queue: !1,
                    duration: h.animate
                })) : (0 === d && k.range.stop(1, 1)[p ? "animate": "css"]({
                    bottom: c + "%"
                },
                h.animate), 1 === d && k.range[p ? "animate": "css"]({
                    height: c - a + "%"
                },
                {
                    queue: !1,
                    duration: h.animate
                })));
                a = c
            }) : (d = this.value(), e = this._valueMin(), f = this._valueMax(), c = f !== e ? (d - e) / (f - e) * 100 : 0, m["horizontal" === this.orientation ? "left": "bottom"] = c + "%", this.handle.stop(1, 1)[p ? "animate": "css"](m, h.animate), "min" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[p ? "animate": "css"]({
                width: c + "%"
            },
            h.animate), "max" === g && "horizontal" === this.orientation && this.range[p ? "animate": "css"]({
                width: 100 - c + "%"
            },
            {
                queue: !1,
                duration: h.animate
            }), "min" === g && "vertical" === this.orientation && this.range.stop(1, 1)[p ? "animate": "css"]({
                height: c + "%"
            },
            h.animate), "max" === g && "vertical" === this.orientation && this.range[p ? "animate": "css"]({
                height: 100 - c + "%"
            },
            {
                queue: !1,
                duration: h.animate
            }))
        },
        _handleEvents: {
            keydown: function(a) {
                var c, d, e, f = b(a.target).data("ui-slider-handle-index");
                switch (a.keyCode) {
                case b.ui.keyCode.HOME:
                case b.ui.keyCode.END:
                case b.ui.keyCode.PAGE_UP:
                case b.ui.keyCode.PAGE_DOWN:
                case b.ui.keyCode.UP:
                case b.ui.keyCode.RIGHT:
                case b.ui.keyCode.DOWN:
                case b.ui.keyCode.LEFT:
                    if (a.preventDefault(), !this._keySliding && (this._keySliding = !0, b(a.target).addClass("ui-state-active"), c = this._start(a, f), !1 === c)) return
                }
                switch (e = this.options.step, c = d = this.options.values && this.options.values.length ? this.values(f) : this.value(), a.keyCode) {
                case b.ui.keyCode.HOME:
                    d = this._valueMin();
                    break;
                case b.ui.keyCode.END:
                    d = this._valueMax();
                    break;
                case b.ui.keyCode.PAGE_UP:
                    d = this._trimAlignValue(c + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case b.ui.keyCode.PAGE_DOWN:
                    d = this._trimAlignValue(c - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case b.ui.keyCode.UP:
                case b.ui.keyCode.RIGHT:
                    if (c === this._valueMax()) return;
                    d = this._trimAlignValue(c + e);
                    break;
                case b.ui.keyCode.DOWN:
                case b.ui.keyCode.LEFT:
                    if (c === this._valueMin()) return;
                    d = this._trimAlignValue(c - e)
                }
                this._slide(a, f, d)
            },
            keyup: function(a) {
                var c = b(a.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(a, c), this._change(a, c), b(a.target).removeClass("ui-state-active"))
            }
        }
    });
    b.widget("ui.spinner", {
        version: "1.11.1",
        defaultElement: "\x3cinput\x3e",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step);
            "" !== this.value() && this._value(this.element.val(), !0);
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var a = {},
            c = this.element;
            return b.each(["min", "max", "step"],
            function(b, e) {
                var f = c.attr(e);
                void 0 !== f && f.length && (a[e] = f)
            }),
            a
        },
        _events: {
            keydown: function(a) {
                this._start(a) && this._keydown(a) && a.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(a) {
                return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", a), void 0)
            },
            mousewheel: function(a, b) {
                if (b) {
                    if (!this.spinning && !this._start(a)) return ! 1;
                    this._spin((0 < b ? 1 : -1) * this.options.step, a);
                    clearTimeout(this.mousewheelTimer);
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(a)
                    },
                    100);
                    a.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(a) {
                function c() {
                    this.element[0] === this.document[0].activeElement || (this.element.focus(), this.previous = d, this._delay(function() {
                        this.previous = d
                    }))
                }
                var d;
                d = this.element[0] === this.document[0].activeElement ? this.previous: this.element.val();
                a.preventDefault();
                c.call(this);
                this.cancelBlur = !0;
                this._delay(function() {
                    delete this.cancelBlur;
                    c.call(this)
                }); ! 1 !== this._start(a) && this._repeat(null, b(a.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, a)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(a) {
                return b(a.currentTarget).hasClass("ui-state-active") ? !1 === this._start(a) ? !1 : (this._repeat(null, b(a.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, a), void 0) : void 0
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var a = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton");
            this.buttons = a.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
            this.buttons.height() > Math.ceil(.5 * a.height()) && 0 < a.height() && a.height(a.height());
            this.options.disabled && this.disable()
        },
        _keydown: function(a) {
            var c = this.options,
            d = b.ui.keyCode;
            switch (a.keyCode) {
            case d.UP:
                return this._repeat(null, 1, a),
                !0;
            case d.DOWN:
                return this._repeat(null, -1, a),
                !0;
            case d.PAGE_UP:
                return this._repeat(null, c.page, a),
                !0;
            case d.PAGE_DOWN:
                return this._repeat(null, -c.page, a),
                !0
            }
            return ! 1
        },
        _uiSpinnerHtml: function() {
            return "\x3cspan class\x3d'ui-spinner ui-widget ui-widget-content ui-corner-all'\x3e\x3c/span\x3e"
        },
        _buttonHtml: function() {
            return "\x3ca class\x3d'ui-spinner-button ui-spinner-up ui-corner-tr'\x3e\x3cspan class\x3d'ui-icon " + this.options.icons.up + "'\x3e\x26#9650;\x3c/span\x3e\x3c/a\x3e\x3ca class\x3d'ui-spinner-button ui-spinner-down ui-corner-br'\x3e\x3cspan class\x3d'ui-icon " + this.options.icons.down + "'\x3e\x26#9660;\x3c/span\x3e\x3c/a\x3e"
        },
        _start: function(a) {
            return this.spinning || !1 !== this._trigger("start", a) ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
        },
        _repeat: function(a, b, d) {
            a = a || 500;
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                this._repeat(40, b, d)
            },
            a);
            this._spin(b * this.options.step, d)
        },
        _spin: function(a, b) {
            var d = this.value() || 0;
            this.counter || (this.counter = 1);
            d = this._adjustValue(d + a * this._increment(this.counter));
            this.spinning && !1 === this._trigger("spin", b, {
                value: d
            }) || (this._value(d), this.counter++)
        },
        _increment: function(a) {
            var c = this.options.incremental;
            return c ? b.isFunction(c) ? c(a) : Math.floor(a * a * a / 5E4 - a * a / 500 + 17 * a / 200 + 1) : 1
        },
        _precision: function() {
            var a = this._precisionOf(this.options.step);
            return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))),
            a
        },
        _precisionOf: function(a) {
            a = "" + a;
            var b = a.indexOf(".");
            return - 1 === b ? 0 : a.length - b - 1
        },
        _adjustValue: function(a) {
            var b, d, e = this.options;
            return b = null !== e.min ? e.min: 0,
            d = a - b,
            d = Math.round(d / e.step) * e.step,
            a = b + d,
            a = parseFloat(a.toFixed(this._precision())),
            null !== e.max && a > e.max ? e.max: null !== e.min && e.min > a ? e.min: a
        },
        _stop: function(a) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", a))
        },
        _setOption: function(a, b) {
            if ("culture" === a || "numberFormat" === a) {
                var d = this._parse(this.element.val());
                return this.options[a] = b,
                this.element.val(this._format(d)),
                void 0
            }
            "max" !== a && "min" !== a && "step" !== a || "string" != typeof b || (b = this._parse(b));
            "icons" === a && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(b.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(b.down));
            this._super(a, b);
            "disabled" === a && (this.widget().toggleClass("ui-state-disabled", !!b), this.element.prop("disabled", !!b), this.buttons.button(b ? "disable": "enable"))
        },
        _setOptions: t(function(a) {
            this._super(a)
        }),
        _parse: function(a) {
            return "string" == typeof a && "" !== a && (a = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(a, 10, this.options.culture) : +a),
            "" === a || isNaN(a) ? null: a
        },
        _format: function(a) {
            return "" === a ? "": window.Globalize && this.options.numberFormat ? Globalize.format(a, this.options.numberFormat, this.options.culture) : a
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function() {
            var a = this.value();
            return null === a ? !1 : a === this._adjustValue(a)
        },
        _value: function(a, b) {
            var d;
            "" !== a && (d = this._parse(a), null !== d && (b || (d = this._adjustValue(d)), a = this._format(d)));
            this.element.val(a);
            this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: t(function(a) {
            this._stepUp(a)
        }),
        _stepUp: function(a) {
            this._start() && (this._spin((a || 1) * this.options.step), this._stop())
        },
        stepDown: t(function(a) {
            this._stepDown(a)
        }),
        _stepDown: function(a) {
            this._start() && (this._spin((a || 1) * -this.options.step), this._stop())
        },
        pageUp: t(function(a) {
            this._stepUp((a || 1) * this.options.page)
        }),
        pageDown: t(function(a) {
            this._stepDown((a || 1) * this.options.page)
        }),
        value: function(a) {
            return arguments.length ? (t(this._value).call(this, a), void 0) : this._parse(this.element.val())
        },
        widget: function() {
            return this.uiSpinner
        }
    });
    b.widget("ui.tabs", {
        version: "1.11.1",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var a = /#.*$/;
            return function(b) {
                var d, e;
                b = b.cloneNode(!1);
                d = b.href.replace(a, "");
                e = location.href.replace(a, "");
                try {
                    d = decodeURIComponent(d)
                } catch(f) {}
                try {
                    e = decodeURIComponent(e)
                } catch(g) {}
                return 1 < b.hash.length && d === e
            }
        } (),
        _create: function() {
            var a = this,
            c = this.options;
            this.running = !1;
            this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", c.collapsible);
            this._processTabs();
            c.active = this._initialActive();
            b.isArray(c.disabled) && (c.disabled = b.unique(c.disabled.concat(b.map(this.tabs.filter(".ui-state-disabled"),
            function(b) {
                return a.tabs.index(b)
            }))).sort());
            this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(c.active) : b();
            this._refresh();
            this.active.length && this.load(c.active)
        },
        _initialActive: function() {
            var a = this.options.active,
            c = this.options.collapsible,
            d = location.hash.substring(1);
            return null === a && (d && this.tabs.each(function(c, f) {
                return b(f).attr("aria-controls") === d ? (a = c, !1) : void 0
            }), null === a && (a = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === a || -1 === a) && (a = this.tabs.length ? 0 : !1)),
            !1 !== a && (a = this.tabs.index(this.tabs.eq(a)), -1 === a && (a = c ? !1 : 0)),
            !c && !1 === a && this.anchors.length && (a = 0),
            a
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : b()
            }
        },
        _tabKeydown: function(a) {
            var c = b(this.document[0].activeElement).closest("li"),
            d = this.tabs.index(c),
            e = !0;
            if (!this._handlePageNav(a)) {
                switch (a.keyCode) {
                case b.ui.keyCode.RIGHT:
                case b.ui.keyCode.DOWN:
                    d++;
                    break;
                case b.ui.keyCode.UP:
                case b.ui.keyCode.LEFT:
                    e = !1;
                    d--;
                    break;
                case b.ui.keyCode.END:
                    d = this.anchors.length - 1;
                    break;
                case b.ui.keyCode.HOME:
                    d = 0;
                    break;
                case b.ui.keyCode.SPACE:
                    return a.preventDefault(),
                    clearTimeout(this.activating),
                    this._activate(d),
                    void 0;
                case b.ui.keyCode.ENTER:
                    return a.preventDefault(),
                    clearTimeout(this.activating),
                    this._activate(d === this.options.active ? !1 : d),
                    void 0;
                default:
                    return
                }
                a.preventDefault();
                clearTimeout(this.activating);
                d = this._focusNextTab(d, e);
                a.ctrlKey || (c.attr("aria-selected", "false"), this.tabs.eq(d).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", d)
                },
                this.delay))
            }
        },
        _panelKeydown: function(a) {
            this._handlePageNav(a) || a.ctrlKey && a.keyCode === b.ui.keyCode.UP && (a.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(a) {
            return a.altKey && a.keyCode === b.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : a.altKey && a.keyCode === b.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(a, c) {
            for (var d = this.tabs.length - 1; - 1 !== b.inArray((a > d && (a = 0), 0 > a && (a = d), a), this.options.disabled);) a = c ? a + 1 : a - 1;
            return a
        },
        _focusNextTab: function(a, b) {
            return a = this._findNextTab(a, b),
            this.tabs.eq(a).focus(),
            a
        },
        _setOption: function(a, b) {
            return "active" === a ? (this._activate(b), void 0) : "disabled" === a ? (this._setupDisabled(b), void 0) : (this._super(a, b), "collapsible" === a && (this.element.toggleClass("ui-tabs-collapsible", b), b || !1 !== this.options.active || this._activate(0)), "event" === a && this._setupEvents(b), "heightStyle" === a && this._setupHeightStyle(b), void 0)
        },
        _sanitizeSelector: function(a) {
            return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$\x26") : ""
        },
        refresh: function() {
            var a = this.options,
            c = this.tablist.children(":has(a[href])");
            a.disabled = b.map(c.filter(".ui-state-disabled"),
            function(a) {
                return c.index(a)
            });
            this._processTabs(); ! 1 !== a.active && this.anchors.length ? this.active.length && !b.contains(this.tablist[0], this.active[0]) ? this.tabs.length === a.disabled.length ? (a.active = !1, this.active = b()) : this._activate(this._findNextTab(Math.max(0, a.active - 1), !1)) : a.active = this.tabs.index(this.active) : (a.active = !1, this.active = b());
            this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            });
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            });
            this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var a = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("\x3e li", "mousedown" + this.eventNamespace,
            function(a) {
                b(this).is(".ui-state-disabled") && a.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace,
            function() {
                b(this).closest("li").is(".ui-state-disabled") && this.blur()
            });
            this.tabs = this.tablist.find("\x3e li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            });
            this.anchors = this.tabs.map(function() {
                return b("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            });
            this.panels = b();
            this.anchors.each(function(c, d) {
                var e, f, g, h = b(d).uniqueId().attr("id"),
                k = b(d).closest("li"),
                p = k.attr("aria-controls");
                a._isLocal(d) ? (e = d.hash, g = e.substring(1), f = a.element.find(a._sanitizeSelector(e))) : (g = k.attr("aria-controls") || b({}).uniqueId()[0].id, e = "#" + g, f = a.element.find(e), f.length || (f = a._createPanel(g), f.insertAfter(a.panels[c - 1] || a.tablist)), f.attr("aria-live", "polite"));
                f.length && (a.panels = a.panels.add(f));
                p && k.data("ui-tabs-aria-controls", p);
                k.attr({
                    "aria-controls": g,
                    "aria-labelledby": h
                });
                f.attr("aria-labelledby", h)
            });
            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(a) {
            return b("\x3cdiv\x3e").attr("id", a).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(a) {
            b.isArray(a) && (a.length ? a.length === this.anchors.length && (a = !0) : a = !1);
            for (var c, d = 0; c = this.tabs[d]; d++) ! 0 === a || -1 !== b.inArray(d, a) ? b(c).addClass("ui-state-disabled").attr("aria-disabled", "true") : b(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = a
        },
        _setupEvents: function(a) {
            var c = {};
            a && b.each(a.split(" "),
            function(a, b) {
                c[b] = "_eventHandler"
            });
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(!0, this.anchors, {
                click: function(a) {
                    a.preventDefault()
                }
            });
            this._on(this.anchors, c);
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            });
            this._on(this.panels, {
                keydown: "_panelKeydown"
            });
            this._focusable(this.tabs);
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(a) {
            var c, d = this.element.parent();
            "fill" === a ? (c = d.height(), c -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var a = b(this),
                d = a.css("position");
                "absolute" !== d && "fixed" !== d && (c -= a.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                c -= b(this).outerHeight(!0)
            }), this.panels.each(function() {
                b(this).height(Math.max(0, c - b(this).innerHeight() + b(this).height()))
            }).css("overflow", "auto")) : "auto" === a && (c = 0, this.panels.each(function() {
                c = Math.max(c, b(this).height("").height())
            }).height(c))
        },
        _eventHandler: function(a) {
            var c = this.options,
            d = this.active,
            e = b(a.currentTarget).closest("li"),
            f = e[0] === d[0],
            g = f && c.collapsible,
            h = g ? b() : this._getPanelForTab(e),
            k = d.length ? this._getPanelForTab(d) : b(),
            d = {
                oldTab: d,
                oldPanel: k,
                newTab: g ? b() : e,
                newPanel: h
            };
            a.preventDefault();
            e.hasClass("ui-state-disabled") || e.hasClass("ui-tabs-loading") || this.running || f && !c.collapsible || !1 === this._trigger("beforeActivate", a, d) || (c.active = g ? !1 : this.tabs.index(e), this.active = f ? b() : e, this.xhr && this.xhr.abort(), k.length || h.length || b.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(e), a), this._toggle(a, d))
        },
        _toggle: function(a, c) {
            function d() {
                f.running = !1;
                f._trigger("activate", a, c)
            }
            function e() {
                c.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
                g.length && f.options.show ? f._show(g, f.options.show, d) : (g.show(), d())
            }
            var f = this,
            g = c.newPanel,
            h = c.oldPanel;
            this.running = !0;
            h.length && this.options.hide ? this._hide(h, this.options.hide,
            function() {
                c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                e()
            }) : (c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), h.hide(), e());
            h.attr("aria-hidden", "true");
            c.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            g.length && h.length ? c.oldTab.attr("tabIndex", -1) : g.length && this.tabs.filter(function() {
                return 0 === b(this).attr("tabIndex")
            }).attr("tabIndex", -1);
            g.attr("aria-hidden", "false");
            c.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(a) {
            var c;
            a = this._findActive(a);
            a[0] !== this.active[0] && (a.length || (a = this.active), c = a.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: c,
                currentTarget: c,
                preventDefault: b.noop
            }))
        },
        _findActive: function(a) {
            return ! 1 === a ? b() : this.tabs.eq(a)
        },
        _getIndex: function(a) {
            return "string" == typeof a && (a = this.anchors.index(this.anchors.filter("[href$\x3d'" + a + "']"))),
            a
        },
        _destroy: function() {
            this.xhr && this.xhr.abort();
            this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
            this.tablist.unbind(this.eventNamespace);
            this.tabs.add(this.panels).each(function() {
                b.data(this, "ui-tabs-destroy") ? b(this).remove() : b(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            });
            this.tabs.each(function() {
                var a = b(this),
                c = a.data("ui-tabs-aria-controls");
                c ? a.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : a.removeAttr("aria-controls")
            });
            this.panels.show();
            "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(a) {
            var c = this.options.disabled; ! 1 !== c && (void 0 === a ? c = !1 : (a = this._getIndex(a), c = b.isArray(c) ? b.map(c,
            function(b) {
                return b !== a ? b: null
            }) : b.map(this.tabs,
            function(b, c) {
                return c !== a ? c: null
            })), this._setupDisabled(c))
        },
        disable: function(a) {
            var c = this.options.disabled;
            if (!0 !== c) {
                if (void 0 === a) c = !0;
                else {
                    if (a = this._getIndex(a), -1 !== b.inArray(a, c)) return;
                    c = b.isArray(c) ? b.merge([a], c).sort() : [a]
                }
                this._setupDisabled(c)
            }
        },
        load: function(a, c) {
            a = this._getIndex(a);
            var d = this,
            e = this.tabs.eq(a),
            f = e.find(".ui-tabs-anchor"),
            g = this._getPanelForTab(e),
            h = {
                tab: e,
                panel: g
            };
            this._isLocal(f[0]) || (this.xhr = b.ajax(this._ajaxSettings(f, c, h)), this.xhr && "canceled" !== this.xhr.statusText && (e.addClass("ui-tabs-loading"), g.attr("aria-busy", "true"), this.xhr.success(function(a) {
                setTimeout(function() {
                    g.html(a);
                    d._trigger("load", c, h)
                },
                1)
            }).complete(function(a, b) {
                setTimeout(function() {
                    "abort" === b && d.panels.stop(!1, !0);
                    e.removeClass("ui-tabs-loading");
                    g.removeAttr("aria-busy");
                    a === d.xhr && delete d.xhr
                },
                1)
            })))
        },
        _ajaxSettings: function(a, c, d) {
            var e = this;
            return {
                url: a.attr("href"),
                beforeSend: function(a, g) {
                    return e._trigger("beforeLoad", c, b.extend({
                        jqXHR: a,
                        ajaxSettings: g
                    },
                    d))
                }
            }
        },
        _getPanelForTab: function(a) {
            a = b(a).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + a))
        }
    });
    b.widget("ui.tooltip", {
        version: "1.11.1",
        options: {
            content: function() {
                var a = b(this).attr("title") || "";
                return b("\x3ca\x3e").text(a).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(a, c) {
            var d = (a.attr("aria-describedby") || "").split(/\s+/);
            d.push(c);
            a.data("ui-tooltip-id", c).attr("aria-describedby", b.trim(d.join(" ")))
        },
        _removeDescribedBy: function(a) {
            var c = a.data("ui-tooltip-id"),
            d = (a.attr("aria-describedby") || "").split(/\s+/),
            c = b.inArray(c, d); - 1 !== c && d.splice(c, 1);
            a.removeData("ui-tooltip-id"); (d = b.trim(d.join(" "))) ? a.attr("aria-describedby", d) : a.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            });
            this.tooltips = {};
            this.parents = {};
            this.options.disabled && this._disable();
            this.liveRegion = b("\x3cdiv\x3e").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
        },
        _setOption: function(a, c) {
            var d = this;
            return "disabled" === a ? (this[c ? "_disable": "_enable"](), this.options[a] = c, void 0) : (this._super(a, c), "content" === a && b.each(this.tooltips,
            function(a, b) {
                d._updateContent(b)
            }), void 0)
        },
        _disable: function() {
            var a = this;
            b.each(this.tooltips,
            function(c, d) {
                var e = b.Event("blur");
                e.target = e.currentTarget = d[0];
                a.close(e, !0)
            });
            this.element.find(this.options.items).addBack().each(function() {
                var a = b(this);
                a.is("[title]") && a.data("ui-tooltip-title", a.attr("title")).removeAttr("title")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var a = b(this);
                a.data("ui-tooltip-title") && a.attr("title", a.data("ui-tooltip-title"))
            })
        },
        open: function(a) {
            var c = this,
            d = b(a ? a.target: this.element).closest(this.options.items);
            d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), d.data("ui-tooltip-open", !0), a && "mouseover" === a.type && d.parents().each(function() {
                var a, d = b(this);
                d.data("ui-tooltip-open") && (a = b.Event("blur"), a.target = a.currentTarget = this, c.close(a, !0));
                d.attr("title") && (d.uniqueId(), c.parents[this.id] = {
                    element: this,
                    title: d.attr("title")
                },
                d.attr("title", ""))
            }), this._updateContent(d, a))
        },
        _updateContent: function(a, b) {
            var d, e = this.options.content,
            f = this,
            g = b ? b.type: null;
            return "string" == typeof e ? this._open(b, a, e) : (d = e.call(a[0],
            function(d) {
                a.data("ui-tooltip-open") && f._delay(function() {
                    b && (b.type = g);
                    this._open(b, a, d)
                })
            }), d && this._open(b, a, d), void 0)
        },
        _open: function(a, c, d) {
            function e(a) {
                k.of = a;
                f.is(":hidden") || f.position(k)
            }
            var f, g, h, k = b.extend({},
            this.options.position);
            if (d) {
                if (f = this._find(c), f.length) return f.find(".ui-tooltip-content").html(d),
                void 0;
                c.is("[title]") && (a && "mouseover" === a.type ? c.attr("title", "") : c.removeAttr("title"));
                f = this._tooltip(c);
                this._addDescribedBy(c, f.attr("id"));
                f.find(".ui-tooltip-content").html(d);
                this.liveRegion.children().hide();
                d.clone ? (h = d.clone(), h.removeAttr("id").find("[id]").removeAttr("id")) : h = d;
                b("\x3cdiv\x3e").html(h).appendTo(this.liveRegion);
                this.options.track && a && /^mouse/.test(a.type) ? (this._on(this.document, {
                    mousemove: e
                }), e(a)) : f.position(b.extend({
                    of: c
                },
                this.options.position));
                this.closing = this.hiding = !1;
                f.hide();
                this._show(f, this.options.show);
                this.options.show && this.options.show.delay && (g = this.delayedShow = setInterval(function() {
                    f.is(":visible") && (e(k.of), clearInterval(g))
                },
                b.fx.interval));
                this._trigger("open", a, {
                    tooltip: f
                });
                d = {
                    keyup: function(a) {
                        a.keyCode === b.ui.keyCode.ESCAPE && (a = b.Event(a), a.currentTarget = c[0], this.close(a, !0))
                    }
                };
                c[0] !== this.element[0] && (d.remove = function() {
                    this._removeTooltip(f)
                });
                a && "mouseover" !== a.type || (d.mouseleave = "close");
                a && "focusin" !== a.type || (d.focusout = "close");
                this._on(!0, c, d)
            }
        },
        close: function(a) {
            var c = this,
            d = b(a ? a.currentTarget: this.element),
            e = this._find(d);
            this.closing || (clearInterval(this.delayedShow), d.data("ui-tooltip-title") && !d.attr("title") && d.attr("title", d.data("ui-tooltip-title")), this._removeDescribedBy(d), this.hiding = !0, e.stop(!0), this._hide(e, this.options.hide,
            function() {
                c._removeTooltip(b(this));
                this.closing = this.hiding = !1
            }), d.removeData("ui-tooltip-open"), this._off(d, "mouseleave focusout keyup"), d[0] !== this.element[0] && this._off(d, "remove"), this._off(this.document, "mousemove"), a && "mouseleave" === a.type && b.each(this.parents,
            function(a, d) {
                b(d.element).attr("title", d.title);
                delete c.parents[a]
            }), this.closing = !0, this._trigger("close", a, {
                tooltip: e
            }), this.hiding || (this.closing = !1))
        },
        _tooltip: function(a) {
            var c = b("\x3cdiv\x3e").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
            d = c.uniqueId().attr("id");
            return b("\x3cdiv\x3e").addClass("ui-tooltip-content").appendTo(c),
            c.appendTo(this.document[0].body),
            this.tooltips[d] = a,
            c
        },
        _find: function(a) {
            return (a = a.data("ui-tooltip-id")) ? b("#" + a) : b()
        },
        _removeTooltip: function(a) {
            a.remove();
            delete this.tooltips[a.attr("id")]
        },
        _destroy: function() {
            var a = this;
            b.each(this.tooltips,
            function(c, d) {
                var e = b.Event("blur");
                e.target = e.currentTarget = d[0];
                a.close(e, !0);
                b("#" + c).remove();
                d.data("ui-tooltip-title") && (d.attr("title") || d.attr("title", d.data("ui-tooltip-title")), d.removeData("ui-tooltip-title"))
            });
            this.liveRegion.remove()
        }
    });
    b.effects = {
        effect: {}
    }; (function(a, b) {
        function d(a, b, c) {
            var d = q[b.type] || {};
            return null == a ? c || !b.def ? null: b.def: (a = d.floor ? ~~a: parseFloat(a), isNaN(a) ? b.def: d.mod ? (a + d.mod) % d.mod: 0 > a ? 0 : a > d.max ? d.max: a)
        }
        function e(d) {
            var e = p(),
            f = e._rgba = [];
            return d = d.toLowerCase(),
            u(k,
            function(a, g) {
                var h, n = g.re.exec(d),
                n = n && g.parse(n),
                k = g.space || "rgba";
                return n ? (h = e[k](n), e[m[k].cache] = h[m[k].cache], f = e._rgba = h._rgba, !1) : b
            }),
            f.length ? ("0,0,0,0" === f.join() && a.extend(f, g.transparent), e) : g[d]
        }
        function f(a, b, d) {
            return d = (d + 1) % 1,
            1 > 6 * d ? a + 6 * (b - a) * d: 1 > 2 * d ? b: 2 > 3 * d ? a + 6 * (b - a) * (2 / 3 - d) : a
        }
        var g, h = /^([\-+])=\s*(\d+\.?\d*)/,
        k = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(a) {
                return [a[1], a[2], a[3], a[4]]
            }
        },
        {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(a) {
                return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
            }
        },
        {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(a) {
                return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
            }
        },
        {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(a) {
                return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
            }
        },
        {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(a) {
                return [a[1], a[2] / 100, a[3] / 100, a[4]]
            }
        }],
        p = a.Color = function(b, d, c, e) {
            return new a.Color.fn.parse(b, d, c, e)
        },
        m = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        },
        q = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        },
        s = p.support = {},
        t = a("\x3cp\x3e")[0],
        u = a.each;
        t.style.cssText = "background-color:rgba(1,1,1,.5)";
        s.rgba = -1 < t.style.backgroundColor.indexOf("rgba");
        u(m,
        function(a, b) {
            b.cache = "_" + a;
            b.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        });
        p.fn = a.extend(p.prototype, {
            parse: function(f, h, k, q) {
                if (f === b) return this._rgba = [null, null, null, null],
                this; (f.jquery || f.nodeType) && (f = a(f).css(h), h = b);
                var s = this,
                t = a.type(f),
                J = this._rgba = [];
                return h !== b && (f = [f, h, k, q], t = "array"),
                "string" === t ? this.parse(e(f) || g._default) : "array" === t ? (u(m.rgba.props,
                function(a, b) {
                    J[b.idx] = d(f[b.idx], b)
                }), this) : "object" === t ? (f instanceof p ? u(m,
                function(a, b) {
                    f[b.cache] && (s[b.cache] = f[b.cache].slice())
                }) : u(m,
                function(b, c) {
                    var e = c.cache;
                    u(c.props,
                    function(a, b) {
                        if (!s[e] && c.to) {
                            if ("alpha" === a || null == f[a]) return;
                            s[e] = c.to(s._rgba)
                        }
                        s[e][b.idx] = d(f[a], b, !0)
                    });
                    s[e] && 0 > a.inArray(null, s[e].slice(0, 3)) && (s[e][3] = 1, c.from && (s._rgba = c.from(s[e])))
                }), this) : b
            },
            is: function(a) {
                var d = p(a),
                e = !0,
                f = this;
                return u(m,
                function(a, g) {
                    var h, n = d[g.cache];
                    return n && (h = f[g.cache] || g.to && g.to(f._rgba) || [], u(g.props,
                    function(a, d) {
                        return null != n[d.idx] ? e = n[d.idx] === h[d.idx] : b
                    })),
                    e
                }),
                e
            },
            _space: function() {
                var a = [],
                b = this;
                return u(m,
                function(d, c) {
                    b[c.cache] && a.push(d)
                }),
                a.pop()
            },
            transition: function(a, b) {
                var c = p(a),
                e = c._space(),
                f = m[e],
                g = 0 === this.alpha() ? p("transparent") : this,
                h = g[f.cache] || f.to(g._rgba),
                n = h.slice();
                return c = c[f.cache],
                u(f.props,
                function(a, e) {
                    var f = e.idx,
                    g = h[f],
                    k = c[f],
                    p = q[e.type] || {};
                    null !== k && (null === g ? n[f] = k: (p.mod && (k - g > p.mod / 2 ? g += p.mod: g - k > p.mod / 2 && (g -= p.mod)), n[f] = d((k - g) * b + g, e)))
                }),
                this[e](n)
            },
            blend: function(b) {
                if (1 === this._rgba[3]) return this;
                var d = this._rgba.slice(),
                c = d.pop(),
                e = p(b)._rgba;
                return p(a.map(d,
                function(a, b) {
                    return (1 - c) * e[b] + c * a
                }))
            },
            toRgbaString: function() {
                var b = "rgba(",
                d = a.map(this._rgba,
                function(a, b) {
                    return null == a ? 2 < b ? 1 : 0 : a
                });
                return 1 === d[3] && (d.pop(), b = "rgb("),
                b + d.join() + ")"
            },
            toHslaString: function() {
                var b = "hsla(",
                d = a.map(this.hsla(),
                function(a, b) {
                    return null == a && (a = 2 < b ? 1 : 0),
                    b && 3 > b && (a = Math.round(100 * a) + "%"),
                    a
                });
                return 1 === d[3] && (d.pop(), b = "hsl("),
                b + d.join() + ")"
            },
            toHexString: function(b) {
                var d = this._rgba.slice(),
                c = d.pop();
                return b && d.push(~~ (255 * c)),
                "#" + a.map(d,
                function(a) {
                    return a = (a || 0).toString(16),
                    1 === a.length ? "0" + a: a
                }).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent": this.toRgbaString()
            }
        });
        p.fn.parse.prototype = p.fn;
        m.hsla.to = function(a) {
            if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
            var b, d, c = a[0] / 255,
            e = a[1] / 255,
            f = a[2] / 255;
            a = a[3];
            var g = Math.max(c, e, f),
            h = Math.min(c, e, f),
            n = g - h,
            k = g + h,
            p = .5 * k;
            return b = h === g ? 0 : c === g ? 60 * (e - f) / n + 360 : e === g ? 60 * (f - c) / n + 120 : 60 * (c - e) / n + 240,
            d = 0 === n ? 0 : .5 >= p ? n / k: n / (2 - k),
            [Math.round(b) % 360, d, p, null == a ? 1 : a]
        };
        m.hsla.from = function(a) {
            if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
            var b = a[0] / 360,
            d = a[1],
            c = a[2];
            a = a[3];
            d = .5 >= c ? c * (1 + d) : c + d - c * d;
            c = 2 * c - d;
            return [Math.round(255 * f(c, d, b + 1 / 3)), Math.round(255 * f(c, d, b)), Math.round(255 * f(c, d, b - 1 / 3)), a]
        };
        u(m,
        function(e, f) {
            var g = f.props,
            n = f.cache,
            k = f.to,
            m = f.from;
            p.fn[e] = function(e) {
                if (k && !this[n] && (this[n] = k(this._rgba)), e === b) return this[n].slice();
                var f, h = a.type(e),
                q = "array" === h || "object" === h ? e: arguments,
                s = this[n].slice();
                return u(g,
                function(a, b) {
                    var c = q["object" === h ? a: b.idx];
                    null == c && (c = s[b.idx]);
                    s[b.idx] = d(c, b)
                }),
                m ? (f = p(m(s)), f[n] = s, f) : p(s)
            };
            u(g,
            function(b, d) {
                p.fn[b] || (p.fn[b] = function(c) {
                    var f, g = a.type(c),
                    n = "alpha" === b ? this._hsla ? "hsla": "rgba": e,
                    k = this[n](),
                    p = k[d.idx];
                    return "undefined" === g ? p: ("function" === g && (c = c.call(this, p), g = a.type(c)), null == c && d.empty ? this: ("string" === g && (f = h.exec(c), f && (c = p + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), k[d.idx] = c, this[n](k)))
                })
            })
        });
        p.hook = function(b) {
            b = b.split(" ");
            u(b,
            function(b, d) {
                a.cssHooks[d] = {
                    set: function(b, c) {
                        var f, g = "";
                        if ("transparent" !== c && ("string" !== a.type(c) || (f = e(c)))) {
                            if (c = p(f || c), !s.rgba && 1 !== c._rgba[3]) {
                                for (f = "backgroundColor" === d ? b.parentNode: b; ("" === g || "transparent" === g) && f && f.style;) try {
                                    g = a.css(f, "backgroundColor"),
                                    f = f.parentNode
                                } catch(h) {}
                                c = c.blend(g && "transparent" !== g ? g: "_default")
                            }
                            c = c.toRgbaString()
                        }
                        try {
                            b.style[d] = c
                        } catch(n) {}
                    }
                };
                a.fx.step[d] = function(b) {
                    b.colorInit || (b.start = p(b.elem, d), b.end = p(b.end), b.colorInit = !0);
                    a.cssHooks[d].set(b.elem, b.start.transition(b.end, b.pos))
                }
            })
        };
        p.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
        a.cssHooks.borderColor = {
            expand: function(a) {
                var b = {};
                return u(["Top", "Right", "Bottom", "Left"],
                function(c, d) {
                    b["border" + d + "Color"] = a
                }),
                b
            }
        };
        g = a.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    })(b); (function() {
        function a(a) {
            var d, c = a.ownerDocument.defaultView ? a.ownerDocument.defaultView.getComputedStyle(a, null) : a.currentStyle,
            g = {};
            if (c && c.length && c[0] && c[c[0]]) for (a = c.length; a--;) d = c[a],
            "string" == typeof c[d] && (g[b.camelCase(d)] = c[d]);
            else for (d in c)"string" == typeof c[d] && (g[d] = c[d]);
            return g
        }
        var c = ["add", "remove", "toggle"],
        d = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        b.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"],
        function(a, c) {
            b.fx.step[c] = function(a) { ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (b.style(a.elem, c, a.end), a.setAttr = !0)
            }
        });
        b.fn.addBack || (b.fn.addBack = function(a) {
            return this.add(null == a ? this.prevObject: this.prevObject.filter(a))
        });
        b.effects.animateClass = function(e, f, g, h) {
            var k = b.speed(f, g, h);
            return this.queue(function() {
                var f, g = b(this),
                h = g.attr("class") || "",
                n = k.children ? g.find("*").addBack() : g,
                n = n.map(function() {
                    return {
                        el: b(this),
                        start: a(this)
                    }
                });
                f = function() {
                    b.each(c,
                    function(a, b) {
                        e[b] && g[b + "Class"](e[b])
                    })
                };
                f();
                n = n.map(function() {
                    this.end = a(this.el[0]);
                    var c = this.start,
                    e = this.end,
                    f, g, h = {};
                    for (f in e) g = e[f],
                    c[f] !== g && (d[f] || (b.fx.step[f] || !isNaN(parseFloat(g))) && (h[f] = g));
                    return this.diff = h,
                    this
                });
                g.attr("class", h);
                n = n.map(function() {
                    var a = this,
                    c = b.Deferred(),
                    d = b.extend({},
                    k, {
                        queue: !1,
                        complete: function() {
                            c.resolve(a)
                        }
                    });
                    return this.el.animate(this.diff, d),
                    c.promise()
                });
                b.when.apply(b, n.get()).done(function() {
                    f();
                    b.each(arguments,
                    function() {
                        var a = this.el;
                        b.each(this.diff,
                        function(b) {
                            a.css(b, "")
                        })
                    });
                    k.complete.call(g[0])
                })
            })
        };
        b.fn.extend({
            addClass: function(a) {
                return function(c, d, g, h) {
                    return d ? b.effects.animateClass.call(this, {
                        add: c
                    },
                    d, g, h) : a.apply(this, arguments)
                }
            } (b.fn.addClass),
            removeClass: function(a) {
                return function(c, d, g, h) {
                    return 1 < arguments.length ? b.effects.animateClass.call(this, {
                        remove: c
                    },
                    d, g, h) : a.apply(this, arguments)
                }
            } (b.fn.removeClass),
            toggleClass: function(a) {
                return function(c, d, g, h, k) {
                    return "boolean" == typeof d || void 0 === d ? g ? b.effects.animateClass.call(this, d ? {
                        add: c
                    }: {
                        remove: c
                    },
                    g, h, k) : a.apply(this, arguments) : b.effects.animateClass.call(this, {
                        toggle: c
                    },
                    d, g, h)
                }
            } (b.fn.toggleClass),
            switchClass: function(a, c, d, g, h) {
                return b.effects.animateClass.call(this, {
                    add: c,
                    remove: a
                },
                d, g, h)
            }
        })
    })(); (function() {
        function a(a, c, f, g) {
            return b.isPlainObject(a) && (c = a, a = a.effect),
            a = {
                effect: a
            },
            null == c && (c = {}),
            b.isFunction(c) && (g = c, f = null, c = {}),
            ("number" == typeof c || b.fx.speeds[c]) && (g = f, f = c, c = {}),
            b.isFunction(f) && (g = f, f = null),
            c && b.extend(a, c),
            f = f || c.duration,
            a.duration = b.fx.off ? 0 : "number" == typeof f ? f: f in b.fx.speeds ? b.fx.speeds[f] : b.fx.speeds._default,
            a.complete = g || c.complete,
            a
        }
        function c(a) {
            return ! a || "number" == typeof a || b.fx.speeds[a] ? !0 : "string" != typeof a || b.effects.effect[a] ? b.isFunction(a) ? !0 : "object" != typeof a || a.effect ? !1 : !0 : !0
        }
        b.extend(b.effects, {
            version: "1.11.1",
            save: function(a, b) {
                for (var c = 0; b.length > c; c++) null !== b[c] && a.data("ui-effects-" + b[c], a[0].style[b[c]])
            },
            restore: function(a, b) {
                var c, g;
                for (g = 0; b.length > g; g++) null !== b[g] && (c = a.data("ui-effects-" + b[g]), void 0 === c && (c = ""), a.css(b[g], c))
            },
            setMode: function(a, b) {
                return "toggle" === b && (b = a.is(":hidden") ? "show": "hide"),
                b
            },
            getBaseline: function(a, b) {
                var c, g;
                switch (a[0]) {
                case "top":
                    c = 0;
                    break;
                case "middle":
                    c = .5;
                    break;
                case "bottom":
                    c = 1;
                    break;
                default:
                    c = a[0] / b.height
                }
                switch (a[1]) {
                case "left":
                    g = 0;
                    break;
                case "center":
                    g = .5;
                    break;
                case "right":
                    g = 1;
                    break;
                default:
                    g = a[1] / b.width
                }
                return {
                    x: g,
                    y: c
                }
            },
            createWrapper: function(a) {
                if (a.parent().is(".ui-effects-wrapper")) return a.parent();
                var c = {
                    width: a.outerWidth(!0),
                    height: a.outerHeight(!0),
                    "float": a.css("float")
                },
                f = b("\x3cdiv\x3e\x3c/div\x3e").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }),
                g = {
                    width: a.width(),
                    height: a.height()
                },
                h = document.activeElement;
                try {
                    h.id
                } catch(k) {
                    h = document.body
                }
                return a.wrap(f),
                (a[0] === h || b.contains(a[0], h)) && b(h).focus(),
                f = a.parent(),
                "static" === a.css("position") ? (f.css({
                    position: "relative"
                }), a.css({
                    position: "relative"
                })) : (b.extend(c, {
                    position: a.css("position"),
                    zIndex: a.css("z-index")
                }), b.each(["top", "left", "bottom", "right"],
                function(b, f) {
                    c[f] = a.css(f);
                    isNaN(parseInt(c[f], 10)) && (c[f] = "auto")
                }), a.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })),
                a.css(g),
                f.css(c).show()
            },
            removeWrapper: function(a) {
                var c = document.activeElement;
                return a.parent().is(".ui-effects-wrapper") && (a.parent().replaceWith(a), (a[0] === c || b.contains(a[0], c)) && b(c).focus()),
                a
            },
            setTransition: function(a, c, f, g) {
                return g = g || {},
                b.each(c,
                function(b, c) {
                    var e = a.cssUnit(c);
                    0 < e[0] && (g[c] = e[0] * f + e[1])
                }),
                g
            }
        });
        b.fn.extend({
            effect: function() {
                function c(a) {
                    function d() {
                        b.isFunction(g) && g.call(f[0]);
                        b.isFunction(a) && a()
                    }
                    var f = b(this),
                    g = e.complete,
                    k = e.mode; (f.is(":hidden") ? "hide" === k: "show" === k) ? (f[k](), d()) : h.call(f[0], e, d)
                }
                var e = a.apply(this, arguments),
                f = e.mode,
                g = e.queue,
                h = b.effects.effect[e.effect];
                return b.fx.off || !h ? f ? this[f](e.duration, e.complete) : this.each(function() {
                    e.complete && e.complete.call(this)
                }) : !1 === g ? this.each(c) : this.queue(g || "fx", c)
            },
            show: function(b) {
                return function(e) {
                    if (c(e)) return b.apply(this, arguments);
                    var f = a.apply(this, arguments);
                    return f.mode = "show",
                    this.effect.call(this, f)
                }
            } (b.fn.show),
            hide: function(b) {
                return function(e) {
                    if (c(e)) return b.apply(this, arguments);
                    var f = a.apply(this, arguments);
                    return f.mode = "hide",
                    this.effect.call(this, f)
                }
            } (b.fn.hide),
            toggle: function(b) {
                return function(e) {
                    if (c(e) || "boolean" == typeof e) return b.apply(this, arguments);
                    var f = a.apply(this, arguments);
                    return f.mode = "toggle",
                    this.effect.call(this, f)
                }
            } (b.fn.toggle),
            cssUnit: function(a) {
                var c = this.css(a),
                f = [];
                return b.each(["em", "px", "%", "pt"],
                function(a, b) {
                    0 < c.indexOf(b) && (f = [parseFloat(c), b])
                }),
                f
            }
        })
    })(); (function() {
        var a = {};
        b.each(["Quad", "Cubic", "Quart", "Quint", "Expo"],
        function(b, d) {
            a[d] = function(a) {
                return Math.pow(a, b + 2)
            }
        });
        b.extend(a, {
            Sine: function(a) {
                return 1 - Math.cos(a * Math.PI / 2)
            },
            Circ: function(a) {
                return 1 - Math.sqrt(1 - a * a)
            },
            Elastic: function(a) {
                return 0 === a || 1 === a ? a: -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(a) {
                return a * a * (3 * a - 2)
            },
            Bounce: function(a) {
                for (var b, e = 4; ((b = Math.pow(2, --e)) - 1) / 11 > a;);
                return 1 / Math.pow(4, 3 - e) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
            }
        });
        b.each(a,
        function(a, d) {
            b.easing["easeIn" + a] = d;
            b.easing["easeOut" + a] = function(a) {
                return 1 - d(1 - a)
            };
            b.easing["easeInOut" + a] = function(a) {
                return.5 > a ? d(2 * a) / 2 : 1 - d( - 2 * a + 2) / 2
            }
        })
    })();
    b.effects;
    b.effects.effect.blind = function(a, c) {
        var d, e, f, g = b(this),
        h = "position top bottom left right height width".split(" "),
        k = b.effects.setMode(g, a.mode || "hide");
        d = a.direction || "up";
        var p = /up|down|vertical/.test(d),
        m = p ? "height": "width",
        q = p ? "top": "left",
        s = /up|left|vertical|horizontal/.test(d),
        t = {},
        u = "show" === k;
        g.parent().is(".ui-effects-wrapper") ? b.effects.save(g.parent(), h) : b.effects.save(g, h);
        g.show();
        d = b.effects.createWrapper(g).css({
            overflow: "hidden"
        });
        e = d[m]();
        f = parseFloat(d.css(q)) || 0;
        t[m] = u ? e: 0;
        s || (g.css(p ? "bottom": "right", 0).css(p ? "top": "left", "auto").css({
            position: "absolute"
        }), t[q] = u ? f: e + f);
        u && (d.css(m, 0), s || d.css(q, f + e));
        d.animate(t, {
            duration: a.duration,
            easing: a.easing,
            queue: !1,
            complete: function() {
                "hide" === k && g.hide();
                b.effects.restore(g, h);
                b.effects.removeWrapper(g);
                c()
            }
        })
    };
    b.effects.effect.bounce = function(a, c) {
        var d, e, f, g = b(this),
        h = "position top bottom left right height width".split(" "),
        k = b.effects.setMode(g, a.mode || "effect"),
        p = "hide" === k;
        d = "show" === k;
        var m = a.direction || "up",
        k = a.distance,
        q = a.times || 5,
        s = 2 * q + (d || p ? 1 : 0),
        t = a.duration / s,
        u = a.easing,
        w = "up" === m || "down" === m ? "top": "left",
        m = "up" === m || "left" === m,
        x = g.queue(),
        A = x.length; (d || p) && h.push("opacity");
        b.effects.save(g, h);
        g.show();
        b.effects.createWrapper(g);
        k || (k = g["top" === w ? "outerHeight": "outerWidth"]() / 3);
        d && (f = {
            opacity: 1
        },
        f[w] = 0, g.css("opacity", 0).css(w, m ? 2 * -k: 2 * k).animate(f, t, u));
        p && (k /= Math.pow(2, q - 1));
        f = {};
        for (d = f[w] = 0; q > d; d++) e = {},
        e[w] = (m ? "-\x3d": "+\x3d") + k,
        g.animate(e, t, u).animate(f, t, u),
        k = p ? 2 * k: k / 2;
        p && (e = {
            opacity: 0
        },
        e[w] = (m ? "-\x3d": "+\x3d") + k, g.animate(e, t, u));
        g.queue(function() {
            p && g.hide();
            b.effects.restore(g, h);
            b.effects.removeWrapper(g);
            c()
        });
        1 < A && x.splice.apply(x, [1, 0].concat(x.splice(A, s + 1)));
        g.dequeue()
    };
    b.effects.effect.clip = function(a, c) {
        var d, e, f = b(this),
        g = "position top bottom left right height width".split(" "),
        h = "show" === b.effects.setMode(f, a.mode || "hide"),
        k = "vertical" === (a.direction || "vertical"),
        p = k ? "height": "width",
        k = k ? "top": "left",
        m = {};
        b.effects.save(f, g);
        f.show();
        d = b.effects.createWrapper(f).css({
            overflow: "hidden"
        });
        d = "IMG" === f[0].tagName ? d: f;
        e = d[p]();
        h && (d.css(p, 0), d.css(k, e / 2));
        m[p] = h ? e: 0;
        m[k] = h ? 0 : e / 2;
        d.animate(m, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: function() {
                h || f.hide();
                b.effects.restore(f, g);
                b.effects.removeWrapper(f);
                c()
            }
        })
    };
    b.effects.effect.drop = function(a, c) {
        var d, e = b(this),
        g = "position top bottom left right opacity height width".split(" "),
        h = b.effects.setMode(e, a.mode || "hide"),
        k = "show" === h;
        d = a.direction || "left";
        var p = "up" === d || "down" === d ? "top": "left",
        m = "up" === d || "left" === d ? "pos": "neg",
        q = {
            opacity: k ? 1 : 0
        };
        b.effects.save(e, g);
        e.show();
        b.effects.createWrapper(e);
        d = a.distance || e["top" === p ? "outerHeight": "outerWidth"](!0) / 2;
        k && e.css("opacity", 0).css(p, "pos" === m ? -d: d);
        q[p] = (k ? "pos" === m ? "+\x3d": "-\x3d": "pos" === m ? "-\x3d": "+\x3d") + d;
        e.animate(q, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: function() {
                "hide" === h && e.hide();
                b.effects.restore(e, g);
                b.effects.removeWrapper(e);
                c()
            }
        })
    };
    b.effects.effect.explode = function(a, c) {
        function d() {
            I.push(this);
            I.length === q * s && (t.css({
                visibility: "visible"
            }), b(I).remove(), u || t.hide(), c())
        }
        var e, g, h, k, p, m, q = a.pieces ? Math.round(Math.sqrt(a.pieces)) : 3,
        s = q,
        t = b(this),
        u = "show" === b.effects.setMode(t, a.mode || "hide"),
        w = t.show().css("visibility", "hidden").offset(),
        x = Math.ceil(t.outerWidth() / s),
        A = Math.ceil(t.outerHeight() / q),
        I = [];
        for (e = 0; q > e; e++) for (k = w.top + e * A, m = e - (q - 1) / 2, g = 0; s > g; g++) h = w.left + g * x,
        p = g - (s - 1) / 2,
        t.clone().appendTo("body").wrap("\x3cdiv\x3e\x3c/div\x3e").css({
            position: "absolute",
            visibility: "visible",
            left: -g * x,
            top: -e * A
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: x,
            height: A,
            left: h + (u ? p * x: 0),
            top: k + (u ? m * A: 0),
            opacity: u ? 0 : 1
        }).animate({
            left: h + (u ? 0 : p * x),
            top: k + (u ? 0 : m * A),
            opacity: u ? 1 : 0
        },
        a.duration || 500, a.easing, d)
    };
    b.effects.effect.fade = function(a, c) {
        var d = b(this),
        e = b.effects.setMode(d, a.mode || "toggle");
        d.animate({
            opacity: e
        },
        {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: c
        })
    };
    b.effects.effect.fold = function(a, c) {
        var d, e, g = b(this),
        h = "position top bottom left right height width".split(" ");
        d = b.effects.setMode(g, a.mode || "hide");
        var k = "show" === d,
        p = "hide" === d,
        m = a.size || 15,
        q = /([0-9]+)%/.exec(m),
        s = !!a.horizFirst,
        t = (e = k !== s) ? ["width", "height"] : ["height", "width"],
        u = a.duration / 2,
        w = {},
        x = {};
        b.effects.save(g, h);
        g.show();
        d = b.effects.createWrapper(g).css({
            overflow: "hidden"
        });
        e = e ? [d.width(), d.height()] : [d.height(), d.width()];
        q && (m = parseInt(q[1], 10) / 100 * e[p ? 0 : 1]);
        k && d.css(s ? {
            height: 0,
            width: m
        }: {
            height: m,
            width: 0
        });
        w[t[0]] = k ? e[0] : m;
        x[t[1]] = k ? e[1] : 0;
        d.animate(w, u, a.easing).animate(x, u, a.easing,
        function() {
            p && g.hide();
            b.effects.restore(g, h);
            b.effects.removeWrapper(g);
            c()
        })
    };
    b.effects.effect.highlight = function(a, c) {
        var d = b(this),
        e = ["backgroundImage", "backgroundColor", "opacity"],
        g = b.effects.setMode(d, a.mode || "show"),
        h = {
            backgroundColor: d.css("backgroundColor")
        };
        "hide" === g && (h.opacity = 0);
        b.effects.save(d, e);
        d.show().css({
            backgroundImage: "none",
            backgroundColor: a.color || "#ffff99"
        }).animate(h, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: function() {
                "hide" === g && d.hide();
                b.effects.restore(d, e);
                c()
            }
        })
    };
    b.effects.effect.size = function(a, c) {
        var d, e, g, h, k, p, m = b(this),
        q = "position top bottom left right width height overflow opacity".split(" ");
        k = "position top bottom left right overflow opacity".split(" ");
        var s = ["width", "height", "overflow"],
        t = ["fontSize"],
        u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
        w = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
        x = b.effects.setMode(m, a.mode || "effect"),
        A = a.restore || "effect" !== x,
        I = a.scale || "both",
        R = a.origin || ["middle", "center"],
        U = m.css("position"),
        B = A ? q: k,
        J = {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        };
        "show" === x && m.show();
        k = {
            height: m.height(),
            width: m.width(),
            outerHeight: m.outerHeight(),
            outerWidth: m.outerWidth()
        };
        "toggle" === a.mode && "show" === x ? (m.from = a.to || J, m.to = a.from || k) : (m.from = a.from || ("show" === x ? J: k), m.to = a.to || ("hide" === x ? J: k));
        g = m.from.height / k.height;
        h = m.from.width / k.width;
        d = m.to.height / k.height;
        e = m.to.width / k.width; ("box" === I || "both" === I) && (g !== d && (B = B.concat(u), m.from = b.effects.setTransition(m, u, g, m.from), m.to = b.effects.setTransition(m, u, d, m.to)), h !== e && (B = B.concat(w), m.from = b.effects.setTransition(m, w, h, m.from), m.to = b.effects.setTransition(m, w, e, m.to))); ("content" === I || "both" === I) && g !== d && (B = B.concat(t).concat(s), m.from = b.effects.setTransition(m, t, g, m.from), m.to = b.effects.setTransition(m, t, d, m.to));
        b.effects.save(m, B);
        m.show();
        b.effects.createWrapper(m);
        m.css("overflow", "hidden").css(m.from);
        R && (p = b.effects.getBaseline(R, k), m.from.top = (k.outerHeight - m.outerHeight()) * p.y, m.from.left = (k.outerWidth - m.outerWidth()) * p.x, m.to.top = (k.outerHeight - m.to.outerHeight) * p.y, m.to.left = (k.outerWidth - m.to.outerWidth) * p.x);
        m.css(m.from);
        "content" !== I && "both" !== I || (u = u.concat(["marginTop", "marginBottom"]).concat(t), w = w.concat(["marginLeft", "marginRight"]), s = q.concat(u).concat(w), m.find("*[width]").each(function() {
            var c = b(this),
            k = c.height(),
            p = c.width(),
            m = c.outerHeight(),
            q = c.outerWidth();
            A && b.effects.save(c, s);
            c.from = {
                height: k * g,
                width: p * h,
                outerHeight: m * g,
                outerWidth: q * h
            };
            c.to = {
                height: k * d,
                width: p * e,
                outerHeight: k * d,
                outerWidth: p * e
            };
            g !== d && (c.from = b.effects.setTransition(c, u, g, c.from), c.to = b.effects.setTransition(c, u, d, c.to));
            h !== e && (c.from = b.effects.setTransition(c, w, h, c.from), c.to = b.effects.setTransition(c, w, e, c.to));
            c.css(c.from);
            c.animate(c.to, a.duration, a.easing,
            function() {
                A && b.effects.restore(c, s)
            })
        }));
        m.animate(m.to, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: function() {
                0 === m.to.opacity && m.css("opacity", m.from.opacity);
                "hide" === x && m.hide();
                b.effects.restore(m, B);
                A || ("static" === U ? m.css({
                    position: "relative",
                    top: m.to.top,
                    left: m.to.left
                }) : b.each(["top", "left"],
                function(a, b) {
                    m.css(b,
                    function(b, c) {
                        var d = parseInt(c, 10),
                        e = a ? m.to.left: m.to.top;
                        return "auto" === c ? e + "px": d + e + "px"
                    })
                }));
                b.effects.removeWrapper(m);
                c()
            }
        })
    };
    b.effects.effect.scale = function(a, c) {
        var d = b(this),
        e = b.extend(!0, {},
        a),
        g = b.effects.setMode(d, a.mode || "effect"),
        h = parseInt(a.percent, 10) || (0 === parseInt(a.percent, 10) ? 0 : "hide" === g ? 0 : 100),
        k = a.direction || "both",
        p = a.origin,
        m = {
            height: d.height(),
            width: d.width(),
            outerHeight: d.outerHeight(),
            outerWidth: d.outerWidth()
        },
        q = "horizontal" !== k ? h / 100 : 1,
        h = "vertical" !== k ? h / 100 : 1;
        e.effect = "size";
        e.queue = !1;
        e.complete = c;
        "effect" !== g && (e.origin = p || ["middle", "center"], e.restore = !0);
        e.from = a.from || ("show" === g ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        }: m);
        e.to = {
            height: m.height * q,
            width: m.width * h,
            outerHeight: m.outerHeight * q,
            outerWidth: m.outerWidth * h
        };
        e.fade && ("show" === g && (e.from.opacity = 0, e.to.opacity = 1), "hide" === g && (e.from.opacity = 1, e.to.opacity = 0));
        d.effect(e)
    };
    b.effects.effect.puff = function(a, c) {
        var d = b(this),
        e = b.effects.setMode(d, a.mode || "hide"),
        g = "hide" === e,
        h = parseInt(a.percent, 10) || 150,
        k = h / 100,
        p = {
            height: d.height(),
            width: d.width(),
            outerHeight: d.outerHeight(),
            outerWidth: d.outerWidth()
        };
        b.extend(a, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: e,
            complete: c,
            percent: g ? h: 100,
            from: g ? p: {
                height: p.height * k,
                width: p.width * k,
                outerHeight: p.outerHeight * k,
                outerWidth: p.outerWidth * k
            }
        });
        d.effect(a)
    };
    b.effects.effect.pulsate = function(a, c) {
        var d, e = b(this),
        g = b.effects.setMode(e, a.mode || "show");
        d = "show" === g;
        var h = "hide" === g,
        g = 2 * (a.times || 5) + (d || "hide" === g ? 1 : 0),
        k = a.duration / g,
        p = 0,
        m = e.queue(),
        q = m.length; (d || !e.is(":visible")) && (e.css("opacity", 0).show(), p = 1);
        for (d = 1; g > d; d++) e.animate({
            opacity: p
        },
        k, a.easing),
        p = 1 - p;
        e.animate({
            opacity: p
        },
        k, a.easing);
        e.queue(function() {
            h && e.hide();
            c()
        });
        1 < q && m.splice.apply(m, [1, 0].concat(m.splice(q, g + 1)));
        e.dequeue()
    };
    b.effects.effect.shake = function(a, c) {
        var d, e = b(this),
        g = "position top bottom left right height width".split(" "),
        h = b.effects.setMode(e, a.mode || "effect"),
        k = a.direction || "left";
        d = a.distance || 20;
        var p = a.times || 3,
        m = 2 * p + 1,
        q = Math.round(a.duration / m),
        s = "up" === k || "down" === k ? "top": "left",
        t = "up" === k || "left" === k,
        k = {},
        u = {},
        w = {},
        x = e.queue(),
        A = x.length;
        b.effects.save(e, g);
        e.show();
        b.effects.createWrapper(e);
        k[s] = (t ? "-\x3d": "+\x3d") + d;
        u[s] = (t ? "+\x3d": "-\x3d") + 2 * d;
        w[s] = (t ? "-\x3d": "+\x3d") + 2 * d;
        e.animate(k, q, a.easing);
        for (d = 1; p > d; d++) e.animate(u, q, a.easing).animate(w, q, a.easing);
        e.animate(u, q, a.easing).animate(k, q / 2, a.easing).queue(function() {
            "hide" === h && e.hide();
            b.effects.restore(e, g);
            b.effects.removeWrapper(e);
            c()
        });
        1 < A && x.splice.apply(x, [1, 0].concat(x.splice(A, m + 1)));
        e.dequeue()
    };
    b.effects.effect.slide = function(a, c) {
        var d, e = b(this),
        g = "position top bottom left right width height".split(" "),
        h = b.effects.setMode(e, a.mode || "show"),
        k = "show" === h;
        d = a.direction || "left";
        var p = "up" === d || "down" === d ? "top": "left",
        m = "up" === d || "left" === d,
        q = {};
        b.effects.save(e, g);
        e.show();
        d = a.distance || e["top" === p ? "outerHeight": "outerWidth"](!0);
        b.effects.createWrapper(e).css({
            overflow: "hidden"
        });
        k && e.css(p, m ? isNaN(d) ? "-" + d: -d: d);
        q[p] = (k ? m ? "+\x3d": "-\x3d": m ? "-\x3d": "+\x3d") + d;
        e.animate(q, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: function() {
                "hide" === h && e.hide();
                b.effects.restore(e, g);
                b.effects.removeWrapper(e);
                c()
            }
        })
    };
    b.effects.effect.transfer = function(a, c) {
        var d = b(this),
        e = b(a.to),
        g = "fixed" === e.css("position"),
        h = b("body"),
        k = g ? h.scrollTop() : 0,
        h = g ? h.scrollLeft() : 0,
        p = e.offset(),
        e = {
            top: p.top - k,
            left: p.left - h,
            height: e.innerHeight(),
            width: e.innerWidth()
        },
        p = d.offset(),
        m = b("\x3cdiv class\x3d'ui-effects-transfer'\x3e\x3c/div\x3e").appendTo(document.body).addClass(a.className).css({
            top: p.top - k,
            left: p.left - h,
            height: d.innerHeight(),
            width: d.innerWidth(),
            position: g ? "fixed": "absolute"
        }).animate(e, a.duration, a.easing,
        function() {
            m.remove();
            c()
        })
    }
});
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d",
    encode: function(b) {
        var k = "",
        h, m, g, p, q, s, t = 0;
        for (b = Base64._utf8_encode(b); t < b.length;) h = b.charCodeAt(t++),
        m = b.charCodeAt(t++),
        g = b.charCodeAt(t++),
        p = h >> 2,
        h = (h & 3) << 4 | m >> 4,
        q = (m & 15) << 2 | g >> 6,
        s = g & 63,
        isNaN(m) ? q = s = 64 : isNaN(g) && (s = 64),
        k = k + this._keyStr.charAt(p) + this._keyStr.charAt(h) + this._keyStr.charAt(q) + this._keyStr.charAt(s);
        return k
    },
    decode: function(b) {
        var k = "",
        h, m, g, p, q, s = 0;
        for (b = b.replace(/[^A-Za-z0-9\+\/\=]/g, ""); s < b.length;) h = this._keyStr.indexOf(b.charAt(s++)),
        m = this._keyStr.indexOf(b.charAt(s++)),
        p = this._keyStr.indexOf(b.charAt(s++)),
        q = this._keyStr.indexOf(b.charAt(s++)),
        h = h << 2 | m >> 4,
        m = (m & 15) << 4 | p >> 2,
        g = (p & 3) << 6 | q,
        k += String.fromCharCode(h),
        64 != p && (k += String.fromCharCode(m)),
        64 != q && (k += String.fromCharCode(g));
        return k = Base64._utf8_decode(k)
    },
    _utf8_encode: function(b) {
        b = b.replace(/\r\n/g, "\n");
        for (var k = "",
        h = 0; h < b.length; h++) {
            var m = b.charCodeAt(h);
            128 > m ? k += String.fromCharCode(m) : (127 < m && 2048 > m ? k += String.fromCharCode(m >> 6 | 192) : (k += String.fromCharCode(m >> 12 | 224), k += String.fromCharCode(m >> 6 & 63 | 128)), k += String.fromCharCode(m & 63 | 128))
        }
        return k
    },
    _utf8_decode: function(b) {
        for (var k = "",
        h = 0,
        m = c1 = c2 = 0; h < b.length;) m = b.charCodeAt(h),
        128 > m ? (k += String.fromCharCode(m), h++) : 191 < m && 224 > m ? (c2 = b.charCodeAt(h + 1), k += String.fromCharCode((m & 31) << 6 | c2 & 63), h += 2) : (c2 = b.charCodeAt(h + 1), c3 = b.charCodeAt(h + 2), k += String.fromCharCode((m & 15) << 12 | (c2 & 63) << 6 | c3 & 63), h += 3);
        return k
    }
};
$(function() {
    Vjudge.init();
    $("a.login").click(function() {
        var b = this.href;
        Vjudge.doIfLoggedIn(function() {
            0 <= b.indexOf("void(0)") ? location.reload() : location.href = b
        });
        return ! 1
    });
    $("a.register").click(function() {
        $("#dialog-form-register").dialog("open");
        return ! 1
    });
    $("#logout").click(function() {
        $.post(basePath + "/user/logout.action",
        function(b) {
            window.location.reload()
        });
        return ! 1
    });
    0 <= location.href.indexOf("/contest/") ? $("#nav_contest").addClass("active") : 0 <= location.href.indexOf("/status") ? $("#nav_status").addClass("active") : 0 <= location.href.indexOf("/problem") ? $("#nav_problem").addClass("active") : 0 <= location.href.indexOf("/toIndex") && $("#nav_home").addClass("active")
});
Vjudge = new
function() {
    var b, k, h, m;
    this.init = function() {
        Vjudge.enhance();
        Vjudge.initDialogs();
        Vjudge.renderCurrentTime()
    };
    this.enhance = function() {
        Date.prototype.format = function(b) {
            var h = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                S: this.getMilliseconds()
            };
            /(y+)/.test(b) && (b = b.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var k in h)(new RegExp("(" + k + ")")).test(b) && (b = b.replace(RegExp.$1, 1 == RegExp.$1.length ? h[k] : ("00" + h[k]).substr(("" + h[k]).length)));
            return b
        };
        $.widget("custom.selectmenu", $.ui.selectmenu, {
            _renderItem: function(b, h) {
                var k = $("\x3cli\x3e", {
                    text: h.label
                });
                h.disabled && k.addClass("ui-state-disabled");
                $("\x3cspan\x3e", {
                    style: h.element.attr("data-style"),
                    "class": "ui-icon " + h.element.attr("data-class")
                }).appendTo(k);
                return k.appendTo(b)
            }
        })
    };
    this.getServerTime = function() {
        void 0 === b && (b = $("#serverTime").val() - (new Date).valueOf());
        return new Date((new Date).valueOf() + b)
    };
    this.renderCurrentTime = function() {
        var b = function() {
            $(".currentTime").html(Vjudge.getServerTime().format("yyyy-MM-dd hh:mm:ss"))
        };
        b();
        setInterval(b, 1E3)
    };
    this.renderLocalizedTime = function(b, h) {
        var k = !1;
        $(".localizedTime").each(function() {
            var m = $(this),
            t = m.text(),
            A = (new Date(parseInt(t))).format("yyyy-MM-dd hh:mm:ss"),
            w,
            u = h ? h.call(m) : $(),
            x = function() {
                var b = (Vjudge.getServerTime().valueOf() - t) / 1E3,
                g = Math.abs(b),
                b = 0 < b ? "ago": "later";
                return 60 > g ? Math.round(g) + " sec " + b: 3600 > g ? Math.round(g / 60) + " min " + b: 86400 > g ? Math.round(g / 3600) + " hr " + b: 2592E3 > g ? Math.round(g / 86400) + " days " + b: 31536E3 > g ? Math.round(g / 2592E3) + " months " + b: Math.round(g / 31536E3) + " years " + b
            },
            U = function() {
                m.text(k ? A: x());
                61 > Math.abs((Vjudge.getServerTime().valueOf() - t) / 1E3) && (clearTimeout(w), w = setTimeout(U, 1E3))
            };
            U();
            b.call(m).mouseenter(function() {
                k = !0;
                $(".localizedTime").trigger("updateTime");
                u.trigger("updateTime")
            }).mouseleave(function() {
                k = !1;
                $(".localizedTime").trigger("updateTime");
                u.trigger("updateTime")
            });
            m.bind("updateTime", U);
            u.unbind("updateTime");
            u.bind("updateTime",
            function() {
                k ? $(this).animate({
                    width: "160px"
                },
                {
                    queue: !1,
                    duration: 200
                }) : $(this).animate({
                    width: "110px"
                },
                {
                    queue: !1,
                    duration: 200
                })
            })
        })
    };
    this.parseUrlParameter = function() {
        for (var b = {},
        h = window.location.href.replace(/#.+$/, ""), k = h.indexOf("?"), h = h.substring(k + 1).split("\x26"), k = 0; k < h.length; k++) try {
            var m = h[k].split("\x3d");
            b[m[0]] = m[1]
        } catch(t) {}
        return b
    };
    this.doIfLoggedIn = function(b) {
        $.post(basePath + "/user/checkLogInStatus.action",
        function(h) {
            "true" == h ? b() : (k = b, $("#dialog-form-login").dialog("open"))
        })
    };
    this.initDialogs = function() {
        var b = function(b) {
            var g = $("p.validateTips");
            g.text(b).addClass("ui-state-highlight");
            setTimeout(function() {
                g.removeClass("ui-state-highlight", 1500)
            },
            500)
        };
        h = $("#dialog-form-login").dialog({
            autoOpen: !1,
            height: 300,
            width: 400,
            position: {
                my: "center",
                at: "center center-150px",
                of: window
            },
            modal: !0,
            show: {
                effect: "fade",
                duration: 300
            },
            buttons: {
                Login: function() {
                    var p = {
                        username: $("#username").val(),
                        password: $("#password").val()
                    };
                    $("#login_form").submit();
                    $.post(basePath + "/user/login.action", p,
                    function(p) {
                        "success" == p ? (h.dialog("close"), k()) : b(p)
                    })
                },
                Cancel: function() {
                    h.dialog("close")
                }
            },
            close: function() {
                $("p.validateTips").html("");
                h.find("input").val("")
            }
        }).keyup(function(b) {
            13 == b.keyCode && h.dialog("option", "buttons").Login()
        });
        m = $("#dialog-form-register").dialog({
            autoOpen: !1,
            height: 650,
            width: 550,
            modal: !0,
            show: {
                effect: "fade",
                duration: 300
            },
            buttons: {
                Register: function() {
                    var h = {
                        username: $("#username1").val(),
                        password: $("#password1").val(),
                        repassword: $("#repassword").val(),
                        nickname: $("#nickname").val(),
                        school: $("#school").val(),
                        qq: $("#qq").val(),
                        email: $("#email").val(),
                        blog: $("#blog").val(),
                        share: $("#share").val()
                    };
                    $.post(basePath + "/user/register.action", h,
                    function(h) {
                        "success" == h ? (m.dialog("close"), window.location.reload()) : b(h)
                    })
                },
                Cancel: function() {
                    m.dialog("close")
                }
            },
            close: function() {
                $("p.validateTips").html("");
                m.find(":input").val("");
                m.find("textarea").val("")
            },
            create: function(b, g) {}
        })
    };
    this.isScrolledIntoView = function(b) {
        var h = $(window).scrollTop(),
        k = h + $(window).height(),
        m = $(b).offset();
        if (void 0 == m) return ! 1;
        m = m.top;
        return m + $(b).height() >= h && m <= k
    };
    this.sendGaPageview = function() {
        var b = window.location.pathname + window.location.search + window.location.hash;
        "function" == typeof ga && ga("send", "pageview", b)
    };
    this.storage = new
    function() {
        var b = {};
        this.set = function(h, k, m) {
            try { (m ? b: localStorage)[h] = "object" == typeof k ? JSON.stringify(k) : k
            } catch(t) {
                console.error(t)
            }
        };
        this.get = function(h, k, m) {
            h = (m ? b: localStorage)[h];
            if (!h) return k;
            try {
                return JSON.parse(h)
            } catch(t) {
                return console.error(t),
                h
            }
        }
    }
};
if (null == dwr) var dwr = {};
null == dwr.engine && (dwr.engine = {});
if (null == DWREngine) var DWREngine = dwr.engine;
dwr.engine.setErrorHandler = function(b) {
    dwr.engine._errorHandler = b
};
dwr.engine.setWarningHandler = function(b) {
    dwr.engine._warningHandler = b
};
dwr.engine.setTextHtmlHandler = function(b) {
    dwr.engine._textHtmlHandler = b
};
dwr.engine.setTimeout = function(b) {
    dwr.engine._timeout = b
};
dwr.engine.setPreHook = function(b) {
    dwr.engine._preHook = b
};
dwr.engine.setPostHook = function(b) {
    dwr.engine._postHook = b
};
dwr.engine.setHeaders = function(b) {
    dwr.engine._headers = b
};
dwr.engine.setParameters = function(b) {
    dwr.engine._parameters = b
};
dwr.engine.XMLHttpRequest = 1;
dwr.engine.IFrame = 2;
dwr.engine.ScriptTag = 3;
dwr.engine.setRpcType = function(b) {
    b != dwr.engine.XMLHttpRequest && b != dwr.engine.IFrame && b != dwr.engine.ScriptTag ? dwr.engine._handleError(null, {
        name: "dwr.engine.invalidRpcType",
        message: "RpcType must be one of dwr.engine.XMLHttpRequest or dwr.engine.IFrame or dwr.engine.ScriptTag"
    }) : dwr.engine._rpcType = b
};
dwr.engine.setHttpMethod = function(b) {
    "GET" != b && "POST" != b ? dwr.engine._handleError(null, {
        name: "dwr.engine.invalidHttpMethod",
        message: "Remoting method must be one of GET or POST"
    }) : dwr.engine._httpMethod = b
};
dwr.engine.setOrdered = function(b) {
    dwr.engine._ordered = b
};
dwr.engine.setAsync = function(b) {
    dwr.engine._async = b
};
dwr.engine.setActiveReverseAjax = function(b) {
    b ? dwr.engine._activeReverseAjax || (dwr.engine._activeReverseAjax = !0, dwr.engine._poll()) : (dwr.engine._activeReverseAjax && dwr.engine._pollReq && dwr.engine._pollReq.abort(), dwr.engine._activeReverseAjax = !1)
};
dwr.engine.defaultErrorHandler = function(b, k) {
    dwr.engine._debug("Error: " + k.name + ", " + k.message, !0);
    null == b || "" == b ? alert("A server error has occured.") : -1 != b.indexOf("0x80040111") ? dwr.engine._debug(b) : alert(b)
};
dwr.engine.defaultWarningHandler = function(b, k) {
    dwr.engine._debug(b)
};
dwr.engine.beginBatch = function() {
    dwr.engine._batch ? dwr.engine._handleError(null, {
        name: "dwr.engine.batchBegun",
        message: "Batch already begun"
    }) : dwr.engine._batch = dwr.engine._createBatch()
};
dwr.engine.endBatch = function(b) {
    var k = dwr.engine._batch;
    null == k ? dwr.engine._handleError(null, {
        name: "dwr.engine.batchNotBegun",
        message: "No batch in progress"
    }) : (dwr.engine._batch = null, 0 != k.map.callCount && (b && dwr.engine._mergeBatch(k, b), dwr.engine._ordered && 0 != dwr.engine._batchesLength ? dwr.engine._batchQueue[dwr.engine._batchQueue.length] = k: dwr.engine._sendData(k)))
};
dwr.engine.setPollMethod = function(b) {
    dwr.engine.setPollType(b)
};
dwr.engine.setMethod = function(b) {
    dwr.engine.setRpcType(b)
};
dwr.engine.setVerb = function(b) {
    dwr.engine.setHttpMethod(b)
};
dwr.engine.setPollType = function() {
    dwr.engine._debug("Manually setting the Poll Type is not supported")
};
dwr.engine._origScriptSessionId = "BFADD655A107EB49B4228F916E0C4AF3";
dwr.engine._sessionCookieName = "JSESSIONID";
dwr.engine._allowGetForSafariButMakeForgeryEasier = "false";
dwr.engine._scriptTagProtection = "throw 'allowScriptTagRemoting is false.';";
dwr.engine._defaultPath = "../dwr";
dwr.engine._pollWithXhr = "false";
dwr.engine._scriptSessionId = null;
dwr.engine._getScriptSessionId = function() {
    null == dwr.engine._scriptSessionId && (dwr.engine._scriptSessionId = dwr.engine._origScriptSessionId + Math.floor(1E3 * Math.random()));
    return dwr.engine._scriptSessionId
};
dwr.engine._errorHandler = dwr.engine.defaultErrorHandler;
dwr.engine._warningHandler = dwr.engine.defaultWarningHandler;
dwr.engine._preHook = null;
dwr.engine._postHook = null;
dwr.engine._batches = {};
dwr.engine._batchesLength = 0;
dwr.engine._batchQueue = [];
dwr.engine._rpcType = dwr.engine.XMLHttpRequest;
dwr.engine._httpMethod = "POST";
dwr.engine._ordered = !1;
dwr.engine._async = !0;
dwr.engine._batch = null;
dwr.engine._timeout = 0;
dwr.engine._DOMDocument = "Msxml2.DOMDocument.6.0 Msxml2.DOMDocument.5.0 Msxml2.DOMDocument.4.0 Msxml2.DOMDocument.3.0 MSXML2.DOMDocument MSXML.DOMDocument Microsoft.XMLDOM".split(" ");
dwr.engine._XMLHTTP = "Msxml2.XMLHTTP.6.0 Msxml2.XMLHTTP.5.0 Msxml2.XMLHTTP.4.0 MSXML2.XMLHTTP.3.0 MSXML2.XMLHTTP Microsoft.XMLHTTP".split(" ");
dwr.engine._activeReverseAjax = !1;
dwr.engine._outstandingIFrames = [];
dwr.engine._pollReq = null;
dwr.engine._pollCometInterval = 200;
dwr.engine._pollRetries = 0;
dwr.engine._maxPollRetries = 0;
dwr.engine._textHtmlHandler = null;
dwr.engine._headers = null;
dwr.engine._parameters = null;
dwr.engine._postSeperator = "\n";
dwr.engine._defaultInterceptor = function(b) {
    return b
};
dwr.engine._urlRewriteHandler = dwr.engine._defaultInterceptor;
dwr.engine._contentRewriteHandler = dwr.engine._defaultInterceptor;
dwr.engine._replyRewriteHandler = dwr.engine._defaultInterceptor;
dwr.engine._nextBatchId = 0;
dwr.engine._propnames = "rpcType httpMethod async timeout errorHandler warningHandler textHtmlHandler".split(" ");
dwr.engine._partialResponseNo = 0;
dwr.engine._partialResponseYes = 1;
dwr.engine._partialResponseFlush = 2;
dwr.engine._unloading = !1;
dwr.engine._execute = function(b, k, h, m) {
    var g = !1;
    null == dwr.engine._batch && (dwr.engine.beginBatch(), g = !0);
    for (var p = dwr.engine._batch,
    q = [], s = 0; s < arguments.length - 3; s++) q[s] = arguments[s + 3];
    if (null == p.path) p.path = b;
    else if (p.path != b) {
        dwr.engine._handleError(p, {
            name: "dwr.engine.multipleServlets",
            message: "Can't batch requests to multiple DWR Servlets."
        });
        return
    }
    s = q[q.length - 1];
    s = "function" == typeof s || null == s ? {
        callback: q.pop()
    }: q.pop();
    dwr.engine._mergeBatch(p, s);
    p.handlers[p.map.callCount] = {
        exceptionHandler: s.exceptionHandler,
        callback: s.callback
    };
    var t = "c" + p.map.callCount + "-";
    p.map[t + "scriptName"] = k;
    p.map[t + "methodName"] = h;
    p.map[t + "id"] = p.map.callCount;
    for (var A = [], s = 0; s < q.length; s++) dwr.engine._serializeAll(p, A, q[s], t + "param" + s);
    p.map.callCount++;
    g && dwr.engine.endBatch()
};
dwr.engine._poll = function() {
    if (dwr.engine._activeReverseAjax) {
        var b = dwr.engine._createBatch();
        b.map.id = 0;
        b.map.callCount = 1;
        b.isPoll = !0;
        "true" == dwr.engine._pollWithXhr ? (b.rpcType = dwr.engine.XMLHttpRequest, b.map.partialResponse = dwr.engine._partialResponseNo) : -1 != navigator.userAgent.indexOf("Gecko/") ? (b.rpcType = dwr.engine.XMLHttpRequest, b.map.partialResponse = dwr.engine._partialResponseYes) : (b.rpcType = dwr.engine.XMLHttpRequest, b.map.partialResponse = dwr.engine._partialResponseNo);
        b.httpMethod = "POST";
        b.async = !0;
        b.timeout = 0;
        b.path = dwr.engine._defaultPath;
        b.preHooks = [];
        b.postHooks = [];
        b.errorHandler = dwr.engine._pollErrorHandler;
        b.warningHandler = dwr.engine._pollErrorHandler;
        b.handlers[0] = {
            callback: function(b) {
                dwr.engine._pollRetries = 0;
                setTimeout(dwr.engine._poll, b)
            }
        };
        dwr.engine._sendData(b);
        b.rpcType == dwr.engine.XMLHttpRequest && b.map.partialResponse == dwr.engine._partialResponseYes && dwr.engine._checkCometPoll()
    }
};
dwr.engine._pollErrorHandler = function(b, k) {
    dwr.engine._pollRetries++;
    dwr.engine._debug("Reverse Ajax poll failed (pollRetries\x3d" + dwr.engine._pollRetries + "): " + k.name + " : " + k.message);
    dwr.engine._pollRetries < dwr.engine._maxPollRetries ? setTimeout(dwr.engine._poll, 1E4) : (dwr.engine._activeReverseAjax = !1, dwr.engine._debug("Giving up."))
};
dwr.engine._createBatch = function() {
    var b = {
        map: {
            callCount: 0,
            page: window.location.pathname + window.location.search,
            httpSessionId: dwr.engine._getJSessionId(),
            scriptSessionId: dwr.engine._getScriptSessionId()
        },
        charsProcessed: 0,
        paramCount: 0,
        parameters: {},
        headers: {},
        isPoll: !1,
        handlers: {},
        preHooks: [],
        postHooks: [],
        rpcType: dwr.engine._rpcType,
        httpMethod: dwr.engine._httpMethod,
        async: dwr.engine._async,
        timeout: dwr.engine._timeout,
        errorHandler: dwr.engine._errorHandler,
        warningHandler: dwr.engine._warningHandler,
        textHtmlHandler: dwr.engine._textHtmlHandler
    };
    dwr.engine._preHook && b.preHooks.push(dwr.engine._preHook);
    dwr.engine._postHook && b.postHooks.push(dwr.engine._postHook);
    var k, h;
    if (dwr.engine._headers) for (k in dwr.engine._headers) h = dwr.engine._headers[k],
    "function" != typeof h && (b.headers[k] = h);
    if (dwr.engine._parameters) for (k in dwr.engine._parameters) h = dwr.engine._parameters[k],
    "function" != typeof h && (b.parameters[k] = h);
    return b
};
dwr.engine._mergeBatch = function(b, k) {
    var h, m;
    for (m = 0; m < dwr.engine._propnames.length; m++) h = dwr.engine._propnames[m],
    null != k[h] && (b[h] = k[h]);
    null != k.preHook && b.preHooks.unshift(k.preHook);
    null != k.postHook && b.postHooks.push(k.postHook);
    if (k.headers) for (h in k.headers) m = k.headers[h],
    "function" != typeof m && (b.headers[h] = m);
    if (k.parameters) for (h in k.parameters) m = k.parameters[h],
    "function" != typeof m && (b.map["p-" + h] = "" + m)
};
dwr.engine._getJSessionId = function() {
    for (var b = document.cookie.split(";"), k = 0; k < b.length; k++) {
        for (var h = b[k];
        " " == h.charAt(0);) h = h.substring(1, h.length);
        if (0 == h.indexOf(dwr.engine._sessionCookieName + "\x3d")) return h.substring(dwr.engine._sessionCookieName.length + 1, h.length)
    }
    return ""
};
dwr.engine._checkCometPoll = function() {
    for (var b = 0; b < dwr.engine._outstandingIFrames.length; b++) {
        var k = "",
        h = dwr.engine._outstandingIFrames[b];
        try {
            k = dwr.engine._getTextFromCometIFrame(h)
        } catch(m) {
            dwr.engine._handleWarning(h.batch, m)
        }
        "" != k && dwr.engine._processCometResponse(k, h.batch)
    }
    dwr.engine._pollReq && (b = dwr.engine._pollReq, k = b.responseText, null != k && dwr.engine._processCometResponse(k, b.batch)); (0 < dwr.engine._outstandingIFrames.length || dwr.engine._pollReq) && setTimeout(dwr.engine._checkCometPoll, dwr.engine._pollCometInterval)
};
dwr.engine._getTextFromCometIFrame = function(b) {
    b = b.contentWindow.document.body;
    if (null == b) return "";
    b = b.innerHTML;
    if (0 == b.indexOf("\x3cPRE\x3e") || 0 == b.indexOf("\x3cpre\x3e")) b = b.substring(5, b.length - 7);
    return b
};
dwr.engine._processCometResponse = function(b, k) {
    if (k.charsProcessed != b.length) if (0 == b.length) k.charsProcessed = 0;
    else {
        var h = b.indexOf("//#DWR-START#", k.charsProcessed);
        if ( - 1 == h) k.charsProcessed = b.length;
        else {
            var m = b.lastIndexOf("//#DWR-END#"); - 1 != m && (13 == b.charCodeAt(m + 11) && 10 == b.charCodeAt(m + 12) ? k.charsProcessed = m + 13 : k.charsProcessed = m + 11, h = b.substring(h + 13, m), dwr.engine._receivedBatch = k, dwr.engine._eval(h), dwr.engine._receivedBatch = null)
        }
    }
};
dwr.engine._sendData = function(b) {
    b.map.batchId = dwr.engine._nextBatchId;
    dwr.engine._nextBatchId++;
    dwr.engine._batches[b.map.batchId] = b;
    dwr.engine._batchesLength++;
    b.completed = !1;
    for (var k = 0; k < b.preHooks.length; k++) b.preHooks[k]();
    b.preHooks = null;
    b.timeout && 0 != b.timeout && (b.timeoutId = setTimeout(function() {
        dwr.engine._abortRequest(b)
    },
    b.timeout));
    b.rpcType == dwr.engine.XMLHttpRequest && (window.XMLHttpRequest ? b.req = new XMLHttpRequest: !window.ActiveXObject || 0 <= navigator.userAgent.indexOf("Mac") && 0 <= navigator.userAgent.indexOf("MSIE") || (b.req = dwr.engine._newActiveXObject(dwr.engine._XMLHTTP)));
    var h;
    if (b.req) {
        b.async && (b.req.onreadystatechange = function() {
            "undefined" != typeof dwr && dwr.engine._stateChange(b)
        });
        b.isPoll && (dwr.engine._pollReq = b.req, !document.all || window.opera) && (b.req.batch = b);
        k = navigator.userAgent.indexOf("Safari/");
        0 <= k && (k = navigator.userAgent.substring(k + 7), 400 > parseInt(k, 10) && ("true" == dwr.engine._allowGetForSafariButMakeForgeryEasier ? b.httpMethod = "GET": dwr.engine._handleWarning(b, {
            name: "dwr.engine.oldSafari",
            message: "Safari GET support disabled. See getahead.org/dwr/server/servlet and allowGetForSafariButMakeForgeryEasier."
        })));
        b.mode = b.isPoll ? dwr.engine._ModePlainPoll: dwr.engine._ModePlainCall;
        k = dwr.engine._constructRequest(b);
        try {
            b.req.open(b.httpMethod, k.url, b.async);
            try {
                for (h in b.headers) {
                    var m = b.headers[h];
                    "string" == typeof m && b.req.setRequestHeader(h, m)
                }
                b.headers["Content-Type"] || b.req.setRequestHeader("Content-Type", "text/plain")
            } catch(g) {
                dwr.engine._handleWarning(b, g)
            }
            b.req.send(k.body);
            b.async || dwr.engine._stateChange(b)
        } catch(p) {
            dwr.engine._handleError(b, p)
        }
    } else if (b.rpcType != dwr.engine.ScriptTag) if (m = b.isPoll ? "dwr-if-poll-" + b.map.batchId: "dwr-if-" + b.map.batchId, b.div = document.createElement("div"), document.body.appendChild(b.div), b.div.innerHTML = "\x3ciframe src\x3d'javascript:void(0)' frameborder\x3d'0' style\x3d'width:0px;height:0px;border:0;' id\x3d'" + m + "' name\x3d'" + m + "' onload\x3d'dwr.engine._iframeLoadingComplete (" + b.map.batchId + ");'\x3e\x3c/iframe\x3e", b.document = document, b.iframe = b.document.getElementById(m), b.iframe.batch = b, b.mode = b.isPoll ? dwr.engine._ModeHtmlPoll: dwr.engine._ModeHtmlCall, b.isPoll && dwr.engine._outstandingIFrames.push(b.iframe), k = dwr.engine._constructRequest(b), "GET" == b.httpMethod) b.iframe.setAttribute("src", k.url);
    else {
        b.form = b.document.createElement("form");
        b.form.setAttribute("id", "dwr-form");
        b.form.setAttribute("action", k.url);
        b.form.setAttribute("style", "display:none;");
        b.form.setAttribute("target", m);
        b.form.target = m;
        b.form.setAttribute("method", b.httpMethod);
        for (h in b.map) m = b.map[h],
        "function" != typeof m && (k = b.document.createElement("input"), k.setAttribute("type", "hidden"), k.setAttribute("name", h), k.setAttribute("value", m), b.form.appendChild(k));
        b.document.body.appendChild(b.form);
        b.form.submit()
    } else b.httpMethod = "GET",
    b.mode = b.isPoll ? dwr.engine._ModePlainPoll: dwr.engine._ModePlainCall,
    k = dwr.engine._constructRequest(b),
    b.script = document.createElement("script"),
    b.script.id = "dwr-st-" + b.map["c0-id"],
    b.script.src = k.url,
    document.body.appendChild(b.script)
};
dwr.engine._ModePlainCall = "/call/plaincall/";
dwr.engine._ModeHtmlCall = "/call/htmlcall/";
dwr.engine._ModePlainPoll = "/call/plainpoll/";
dwr.engine._ModeHtmlPoll = "/call/htmlpoll/";
dwr.engine._constructRequest = function(b) {
    var k = {
        url: b.path + b.mode,
        body: null
    };
    k.url = 1 == b.isPoll ? k.url + "ReverseAjax.dwr": 1 == b.map.callCount ? k.url + (b.map["c0-scriptName"] + "." + b.map["c0-methodName"] + ".dwr") : k.url + ("Multiple." + b.map.callCount + ".dwr");
    var h = location.href.match(/jsessionid=([^?]+)/);
    null != h && (k.url += ";jsessionid\x3d" + h[1]);
    var m;
    if ("GET" == b.httpMethod) {
        b.map.callCount = "" + b.map.callCount;
        k.url += "?";
        for (m in b.map)"function" != typeof b.map[m] && (k.url += encodeURIComponent(m) + "\x3d" + encodeURIComponent(b.map[m]) + "\x26");
        k.url = k.url.substring(0, k.url.length - 1)
    } else {
        k.body = "";
        if (document.all && !window.opera) {
            h = [];
            for (m in b.map)"function" != typeof b.map[m] && h.push(m + "\x3d" + b.map[m] + dwr.engine._postSeperator);
            k.body = h.join("")
        } else for (m in b.map)"function" != typeof b.map[m] && (k.body += m + "\x3d" + b.map[m] + dwr.engine._postSeperator);
        k.body = dwr.engine._contentRewriteHandler(k.body)
    }
    k.url = dwr.engine._urlRewriteHandler(k.url);
    return k
};
dwr.engine._stateChange = function(b) {
    var k;
    if (b.completed) dwr.engine._debug("Error: _stateChange() with batch.completed");
    else {
        var h = b.req;
        try {
            if (4 != h.readyState) return
        } catch(m) {
            dwr.engine._handleWarning(b, m);
            dwr.engine._clearUp(b);
            return
        }
        if (dwr.engine._unloading) dwr.engine._debug("Ignoring reply from server as page is unloading.");
        else {
            try {
                var g = h.responseText,
                g = dwr.engine._replyRewriteHandler(g),
                p = h.status;
                if (null == g || "" == g) dwr.engine._handleWarning(b, {
                    name: "dwr.engine.missingData",
                    message: "No data received from server"
                });
                else if (200 != p) dwr.engine._handleError(b, {
                    name: "dwr.engine.http." + p,
                    message: h.statusText
                });
                else {
                    var q = h.getResponseHeader("Content-Type");
                    q.match(/^text\/plain/) || q.match(/^text\/javascript/) ? b.isPoll && b.map.partialResponse == dwr.engine._partialResponseYes ? dwr.engine._processCometResponse(g, b) : -1 == g.search("//#DWR") ? dwr.engine._handleWarning(b, {
                        name: "dwr.engine.invalidReply",
                        message: "Invalid reply from server"
                    }) : k = g: q.match(/^text\/html/) && "function" == typeof b.textHtmlHandler ? b.textHtmlHandler({
                        status: p,
                        responseText: g,
                        contentType: q
                    }) : dwr.engine._handleWarning(b, {
                        name: "dwr.engine.invalidMimeType",
                        message: "Invalid content type: '" + q + "'"
                    })
                }
            } catch(s) {
                dwr.engine._handleWarning(b, s)
            }
            dwr.engine._callPostHooks(b);
            dwr.engine._receivedBatch = b;
            null != k && (k = k.replace(dwr.engine._scriptTagProtection, ""));
            dwr.engine._eval(k);
            dwr.engine._receivedBatch = null;
            dwr.engine._validateBatch(b);
            b.completed || dwr.engine._clearUp(b)
        }
    }
};
dwr.engine._validateBatch = function(b) {
    if (!b.completed) for (var k = 0; k < b.map.callCount; k++) if (null != b.handlers[k]) {
        dwr.engine._handleWarning(b, {
            name: "dwr.engine.incompleteReply",
            message: "Incomplete reply from server"
        });
        break
    }
};
dwr.engine._iframeLoadingComplete = function(b) { (b = dwr.engine._batches[b]) && dwr.engine._validateBatch(b)
};
dwr.engine._remoteHandleCallback = function(b, k, h) {
    var m = dwr.engine._batches[b];
    if (null == m) dwr.engine._debug("Warning: batch \x3d\x3d null in remoteHandleCallback for batchId\x3d" + b, !0);
    else try {
        var g = m.handlers[k];
        m.handlers[k] = null;
        g ? "function" == typeof g.callback && g.callback(h) : dwr.engine._debug("Warning: Missing handlers. callId\x3d" + k, !0)
    } catch(p) {
        dwr.engine._handleError(m, p)
    }
};
dwr.engine._remoteHandleException = function(b, k, h) {
    b = dwr.engine._batches[b];
    if (null == b) dwr.engine._debug("Warning: null batch in remoteHandleException", !0);
    else {
        var m = b.handlers[k];
        b.handlers[k] = null;
        null == m ? dwr.engine._debug("Warning: null handlers in remoteHandleException", !0) : (void 0 == h.message && (h.message = ""), "function" == typeof m.exceptionHandler ? m.exceptionHandler(h.message, h) : "function" == typeof b.errorHandler && b.errorHandler(h.message, h))
    }
};
dwr.engine._remoteHandleBatchException = function(b, k) {
    var h = null == dwr.engine._receivedBatch && null != k;
    h && (dwr.engine._receivedBatch = dwr.engine._batches[k]);
    void 0 == b.message && (b.message = "");
    dwr.engine._handleError(dwr.engine._receivedBatch, b);
    h && (dwr.engine._receivedBatch = null, dwr.engine._clearUp(dwr.engine._batches[k]))
};
dwr.engine._remotePollCometDisabled = function(b, k) {
    dwr.engine.setActiveReverseAjax(!1);
    var h = null == dwr.engine._receivedBatch && null != k;
    h && (dwr.engine._receivedBatch = dwr.engine._batches[k]);
    void 0 == b.message && (b.message = "");
    dwr.engine._handleError(dwr.engine._receivedBatch, b);
    h && (dwr.engine._receivedBatch = null, dwr.engine._clearUp(dwr.engine._batches[k]))
};
dwr.engine._remoteBeginIFrameResponse = function(b, k) {
    null != b && (dwr.engine._receivedBatch = b.batch);
    dwr.engine._callPostHooks(dwr.engine._receivedBatch)
};
dwr.engine._remoteEndIFrameResponse = function(b) {
    dwr.engine._clearUp(dwr.engine._receivedBatch);
    dwr.engine._receivedBatch = null
};
dwr.engine._eval = function(b) {
    return null == b ? null: "" == b ? (dwr.engine._debug("Warning: blank script", !0), null) : eval(b)
};
dwr.engine._abortRequest = function(b) {
    b && !b.completed && (dwr.engine._clearUp(b), b.req && b.req.abort(), dwr.engine._handleError(b, {
        name: "dwr.engine.timeout",
        message: "Timeout"
    }))
};
dwr.engine._callPostHooks = function(b) {
    if (b.postHooks) {
        for (var k = 0; k < b.postHooks.length; k++) b.postHooks[k]();
        b.postHooks = null
    }
};
dwr.engine._clearUp = function(b) {
    if (b) if (b.completed) dwr.engine._debug("Warning: Double complete", !0);
    else {
        b.div && b.div.parentNode.removeChild(b.div);
        if (b.iframe) {
            for (var k = 0; k < dwr.engine._outstandingIFrames.length; k++) dwr.engine._outstandingIFrames[k] == b.iframe && dwr.engine._outstandingIFrames.splice(k, 1);
            b.iframe.parentNode.removeChild(b.iframe)
        }
        b.form && b.form.parentNode.removeChild(b.form);
        b.req && (b.req == dwr.engine._pollReq && (dwr.engine._pollReq = null), delete b.req);
        b.timeoutId && (clearTimeout(b.timeoutId), delete b.timeoutId);
        b.map && (b.map.batchId || 0 == b.map.batchId) && (delete dwr.engine._batches[b.map.batchId], dwr.engine._batchesLength--);
        b.completed = !0;
        0 != dwr.engine._batchQueue.length && (b = dwr.engine._batchQueue.shift(), dwr.engine._sendData(b))
    } else dwr.engine._debug("Warning: null batch in dwr.engine._clearUp()", !0)
};
dwr.engine._unloader = function() {
    dwr.engine._unloading = !0;
    dwr.engine._batchQueue.length = 0;
    for (var b in dwr.engine._batches) {
        var k = dwr.engine._batches[b];
        k && k.map && (k.req && k.req.abort(), dwr.engine._clearUp(k))
    }
};
window.addEventListener ? window.addEventListener("unload", dwr.engine._unloader, !1) : window.attachEvent && window.attachEvent("onunload", dwr.engine._unloader);
dwr.engine._handleError = function(b, k) {
    "string" == typeof k && (k = {
        name: "unknown",
        message: k
    });
    null == k.message && (k.message = "");
    null == k.name && (k.name = "unknown");
    b && "function" == typeof b.errorHandler ? b.errorHandler(k.message, k) : dwr.engine._errorHandler && dwr.engine._errorHandler(k.message, k);
    b && dwr.engine._clearUp(b)
};
dwr.engine._handleWarning = function(b, k) {
    "string" == typeof k && (k = {
        name: "unknown",
        message: k
    });
    null == k.message && (k.message = "");
    null == k.name && (k.name = "unknown");
    b && "function" == typeof b.warningHandler ? b.warningHandler(k.message, k) : dwr.engine._warningHandler && dwr.engine._warningHandler(k.message, k);
    b && dwr.engine._clearUp(b)
};
dwr.engine._serializeAll = function(b, k, h, m) {
    if (null == h) b.map[m] = "null:null";
    else switch (typeof h) {
    case "boolean":
        b.map[m] = "boolean:" + h;
        break;
    case "number":
        b.map[m] = "number:" + h;
        break;
    case "string":
        b.map[m] = "string:" + encodeURIComponent(h);
        break;
    case "object":
        var g = Object.prototype.toString.call(h);
        b.map[m] = "[object String]" == g ? "String:" + encodeURIComponent(h) : "[object Boolean]" == g ? "Boolean:" + h: "[object Number]" == g ? "Number:" + h: "[object Date]" == g ? "Date:" + h.getTime() : "[object Array]" == g ? dwr.engine._serializeArray(b, k, h, m) : dwr.engine._serializeObject(b, k, h, m);
        break;
    case "function":
        break;
    default:
        dwr.engine._handleWarning(null, {
            name: "dwr.engine.unexpectedType",
            message: "Unexpected type: " + typeof h + ", attempting default converter."
        }),
        b.map[m] = "default:" + h
    }
};
dwr.engine._lookup = function(b, k, h) {
    for (var m, g = 0; g < b.length; g++) if (b[g].data == k) {
        m = b[g];
        break
    }
    if (m) return "reference:" + m.name;
    b.push({
        data: k,
        name: h
    });
    return null
};
dwr.engine._serializeObject = function(b, k, h, m) {
    var g = dwr.engine._lookup(k, h, m);
    if (g) return g;
    if (h.nodeName && h.nodeType) return dwr.engine._serializeXml(b, k, h, m);
    m = "Object_" + dwr.engine._getObjectClassName(h) + ":{";
    for (var p in h)"function" != typeof h[p] && (b.paramCount++, g = "c" + dwr.engine._batch.map.callCount + "-e" + b.paramCount, dwr.engine._serializeAll(b, k, h[p], g), m += encodeURIComponent(p) + ":reference:" + g + ", ");
    ", " == m.substring(m.length - 2) && (m = m.substring(0, m.length - 2));
    return m + "}"
};
dwr.engine._errorClasses = {
    Error: Error,
    EvalError: EvalError,
    RangeError: RangeError,
    ReferenceError: ReferenceError,
    SyntaxError: SyntaxError,
    TypeError: TypeError,
    URIError: URIError
};
dwr.engine._getObjectClassName = function(b) {
    if (b && b.constructor && b.constructor.toString) {
        var k = b.constructor.toString();
        if ((k = k.match(/function\s+(\w+)/)) && 2 == k.length) return k[1]
    }
    if (b && b.constructor) for (var h in dwr.engine._errorClasses) if (b.constructor == dwr.engine._errorClasses[h]) return h;
    return b && (k = Object.prototype.toString.call(b), (k = k.match(/\[object\s+(\w+)/)) && 2 == k.length) ? k[1] : "Object"
};
dwr.engine._serializeXml = function(b, k, h, m) {
    if (b = dwr.engine._lookup(k, h, m)) return b;
    h = window.XMLSerializer ? (new XMLSerializer).serializeToString(h) : h.toXml ? h.toXml: h.innerHTML;
    return "XML:" + encodeURIComponent(h)
};
dwr.engine._serializeArray = function(b, k, h, m) {
    if (m = dwr.engine._lookup(k, h, m)) return m;
    if (document.all && !window.opera) {
        var g = ["Array:["];
        for (m = 0; m < h.length; m++) {
            0 != m && g.push(",");
            b.paramCount++;
            var p = "c" + dwr.engine._batch.map.callCount + "-e" + b.paramCount;
            dwr.engine._serializeAll(b, k, h[m], p);
            g.push("reference:");
            g.push(p)
        }
        g.push("]");
        g = g.join("")
    } else {
        g = "Array:[";
        for (m = 0; m < h.length; m++) 0 != m && (g += ","),
        b.paramCount++,
        p = "c" + dwr.engine._batch.map.callCount + "-e" + b.paramCount,
        dwr.engine._serializeAll(b, k, h[m], p),
        g += "reference:",
        g += p;
        g += "]"
    }
    return g
};
dwr.engine._unserializeDocument = function(b) {
    var k;
    if (window.DOMParser) {
        k = (new DOMParser).parseFromString(b, "text/xml");
        if (!k.documentElement || "parsererror" == k.documentElement.tagName) throw b = k.documentElement.firstChild.data,
        b += "\n" + k.documentElement.firstChild.nextSibling.firstChild.data,
        b;
        return k
    }
    if (window.ActiveXObject) return k = dwr.engine._newActiveXObject(dwr.engine._DOMDocument),
    k.loadXML(b),
    k;
    k = document.createElement("div");
    k.innerHTML = b;
    return k
};
dwr.engine._newActiveXObject = function(b) {
    for (var k, h = 0; h < b.length; h++) try {
        k = new ActiveXObject(b[h]);
        break
    } catch(m) {}
    return k
};
dwr.engine._debug = function(b, k) {
    var h = !1;
    try {
        window.console ? (k && window.console.trace && window.console.trace(), window.console.log(b), h = !0) : window.opera && window.opera.postError && (window.opera.postError(b), h = !0)
    } catch(m) {}
    if (!h && (h = document.getElementById("dwr-debug"))) {
        var g = b + "\x3cbr/\x3e" + h.innerHTML;
        2048 < g.length && (g = g.substring(0, 2048));
        h.innerHTML = g
    }
}; (function(b) {
    function k(h) {
        if (b.facebox.settings.inited) return ! 0;
        b.facebox.settings.inited = !0;
        b(document).trigger("init.facebox");
        g();
        var k = b.facebox.settings.imageTypes.join("|");
        b.facebox.settings.imageTypesRegexp = new RegExp("\\.(" + k + ")(\\?.*)?$", "i");
        h && b.extend(b.facebox.settings, h);
        b("body").append(b.facebox.settings.faceboxHtml);
        var p = [new Image, new Image];
        p[0].src = b.facebox.settings.closeImage;
        p[1].src = b.facebox.settings.loadingImage;
        b("#facebox").find(".b:first, .bl").each(function() {
            p.push(new Image);
            p.slice( - 1).src = b(this).css("background-image").replace(/url\((.+)\)/, "$1")
        });
        b("#facebox .close").click(b.facebox.close).append('\x3cimg src\x3d"' + b.facebox.settings.closeImage + '" class\x3d"close_image" title\x3d"close"\x3e')
    }
    function h() {
        var b, g;
        self.pageYOffset ? (g = self.pageYOffset, b = self.pageXOffset) : document.documentElement && document.documentElement.scrollTop ? (g = document.documentElement.scrollTop, b = document.documentElement.scrollLeft) : document.body && (g = document.body.scrollTop, b = document.body.scrollLeft);
        return [b, g]
    }
    function m() {
        var b;
        self.innerHeight ? b = self.innerHeight: document.documentElement && document.documentElement.clientHeight ? b = document.documentElement.clientHeight: document.body && (b = document.body.clientHeight);
        return b
    }
    function g() {
        var g = b.facebox.settings;
        g.loadingImage = g.loading_image || g.loadingImage;
        g.closeImage = g.close_image || g.closeImage;
        g.imageTypes = g.image_types || g.imageTypes;
        g.faceboxHtml = g.facebox_html || g.faceboxHtml
    }
    function p(g, h) {
        if (g.match(/#/)) {
            var k = window.location.href.split("#")[0],
            k = g.replace(k, "");
            "#" != k && b.facebox.reveal(b(k).html(), h)
        } else g.match(b.facebox.settings.imageTypesRegexp) ? q(g, h) : s(g, h)
    }
    function q(g, h) {
        var k = new Image;
        k.onload = function() {
            b.facebox.reveal('\x3cdiv class\x3d"image"\x3e\x3cimg src\x3d"' + k.src + '" /\x3e\x3c/div\x3e', h)
        };
        k.src = g
    }
    function s(g, h) {
        b.get(g,
        function(g) {
            b.facebox.reveal(g, h)
        })
    }
    function t() {
        return 0 == b.facebox.settings.overlay || null === b.facebox.settings.opacity
    }
    function A() {
        if (!t()) return 0 == b("#facebox_overlay").length && b("body").append('\x3cdiv id\x3d"facebox_overlay" class\x3d"facebox_hide"\x3e\x3c/div\x3e'),
        b("#facebox_overlay").hide().addClass("facebox_overlayBG").css("opacity", b.facebox.settings.opacity).click(function() {
            b(document).trigger("close.facebox")
        }).fadeIn(200),
        !1
    }
    function w() {
        if (!t()) return b("#facebox_overlay").fadeOut(200,
        function() {
            b("#facebox_overlay").removeClass("facebox_overlayBG");
            b("#facebox_overlay").addClass("facebox_hide");
            b("#facebox_overlay").remove()
        }),
        !1
    }
    b.facebox = function(g, h) {
        b.facebox.loading();
        g.ajax ? s(g.ajax, h) : g.image ? q(g.image, h) : g.div ? p(g.div, h) : b.isFunction(g) ? g.call(b) : b.facebox.reveal(g, h)
    };
    b.extend(b.facebox, {
        settings: {
            opacity: .2,
            overlay: !0,
            loadingImage: "/facebox/loading.gif",
            closeImage: "/facebox/closelabel.png",
            imageTypes: ["png", "jpg", "jpeg", "gif"],
            faceboxHtml: '\t\x3cdiv id\x3d"facebox" style\x3d"display:none;"\x3e \t  \x3cdiv class\x3d"popup"\x3e \t\t\x3cdiv class\x3d"content"\x3e \t\t\x3c/div\x3e \t\t\x3ca href\x3d"#" class\x3d"close"\x3e\x3c/a\x3e \t  \x3c/div\x3e \t\x3c/div\x3e'
        },
        loading: function() {
            k();
            if (1 == b("#facebox .loading").length) return ! 0;
            A();
            b("#facebox .content").empty().append('\x3cdiv class\x3d"loading"\x3e\x3cimg src\x3d"' + b.facebox.settings.loadingImage + '"/\x3e\x3c/div\x3e');
            b("#facebox").show().css({
                top: h()[1] + m() / 10,
                left: b(window).width() / 2 - b("#facebox .popup").outerWidth() / 2,
                "z-index": 1E6
            });
            b(document).bind("keydown.facebox",
            function(g) {
                27 == g.keyCode && b.facebox.close();
                return ! 0
            });
            b(document).trigger("loading.facebox")
        },
        reveal: function(g, h) {
            b(document).trigger("beforeReveal.facebox");
            h && b("#facebox .content").addClass(h);
            b("#facebox .content").empty().append(g);
            b("#facebox .popup").children().fadeIn("normal");
            b("#facebox").css("left", b(window).width() / 2 - b("#facebox .popup").outerWidth() / 2);
            b(document).trigger("reveal.facebox").trigger("afterReveal.facebox")
        },
        close: function() {
            b(document).trigger("close.facebox");
            return ! 1
        }
    });
    b.fn.facebox = function(g) {
        function h() {
            b.facebox.loading(!0);
            var g = this.rel.match(/facebox\[?\.(\w+)\]?/);
            g && (g = g[1]);
            p(this.href, g);
            return ! 1
        }
        if (0 != b(this).length) return k(g),
        this.bind("click.facebox", h)
    };
    b(document).bind("close.facebox",
    function() {
        b(document).unbind("keydown.facebox");
        b("#facebox").fadeOut(function() {
            b("#facebox .content").removeClass().addClass("content");
            b("#facebox .loading").remove();
            b(document).trigger("afterClose.facebox")
        });
        w()
    })
})(jQuery); (function(b, k, h) {
    function m(b) {
        b = b || location.href;
        return "#" + b.replace(/^[^#]*#?(.*)$/, "$1")
    }
    "$:nomunge";
    var g, p = b.event.special,
    q = document.documentMode,
    s = "onhashchange" in k && (q === h || 7 < q);
    b.fn.hashchange = function(b) {
        return b ? this.bind("hashchange", b) : this.trigger("hashchange")
    };
    b.fn.hashchange.delay = 50;
    p.hashchange = b.extend(p.hashchange, {
        setup: function() {
            if (s) return ! 1;
            b(g.start)
        },
        teardown: function() {
            if (s) return ! 1;
            b(g.stop)
        }
    });
    g = function() {
        function g() {
            var h = m(),
            a = I(s);
            h !== s ? (U(s = h, a), b(k).trigger("hashchange")) : a !== s && (location.href = location.href.replace(/#.*/, "") + a);
            q = setTimeout(g, b.fn.hashchange.delay)
        }
        var p = {},
        q, s = m(),
        x = function(b) {
            return b
        },
        U = x,
        I = x;
        p.start = function() {
            q || g()
        };
        p.stop = function() {
            q && clearTimeout(q);
            q = h
        };
        return p
    } ()
})(jQuery, this); (function(b) {
    "function" === typeof define && define.amd ? define(["jquery"], b) : "object" === typeof exports ? b(require("jquery")) : b(jQuery)
})(function(b) {
    function k(b) {
        b = g.json ? JSON.stringify(b) : String(b);
        return g.raw ? b: encodeURIComponent(b)
    }
    function h(h, k) {
        var s;
        if (g.raw) s = h;
        else a: {
            var t = h;
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                t = decodeURIComponent(t.replace(m, " "));
                s = g.json ? JSON.parse(t) : t;
                break a
            } catch(A) {}
            s = void 0
        }
        return b.isFunction(k) ? k(s) : s
    }
    var m = /\+/g,
    g = b.cookie = function(p, m, s) {
        if (1 < arguments.length && !b.isFunction(m)) {
            s = b.extend({},
            g.defaults, s);
            if ("number" === typeof s.expires) {
                var t = s.expires,
                A = s.expires = new Date;
                A.setTime( + A + 864E5 * t)
            }
            return document.cookie = [g.raw ? p: encodeURIComponent(p), "\x3d", k(m), s.expires ? "; expires\x3d" + s.expires.toUTCString() : "", s.path ? "; path\x3d" + s.path: "", s.domain ? "; domain\x3d" + s.domain: "", s.secure ? "; secure": ""].join("")
        }
        for (var t = p ? void 0 : {},
        A = document.cookie ? document.cookie.split("; ") : [], w = 0, u = A.length; w < u; w++) {
            var x = A[w].split("\x3d"),
            U;
            U = x.shift();
            U = g.raw ? U: decodeURIComponent(U);
            x = x.join("\x3d");
            if (p && p === U) {
                t = h(x, m);
                break
            }
            p || void 0 === (x = h(x)) || (t[U] = x)
        }
        return t
    };
    g.defaults = {};
    b.removeCookie = function(g, h) {
        if (void 0 === b.cookie(g)) return ! 1;
        b.cookie(g, "", b.extend({},
        h, {
            expires: -1
        }));
        return ! b.cookie(g)
    }
}); (function(b, k, h) {
    var m = function(g) {
        function m(a) {
            var b, c, d = {};
            g.each(a,
            function(e) { (b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ") && (c = e.replace(b[0], b[2].toLowerCase()), d[c] = e, "o" === b[1] && m(a[e]))
            });
            a._hungarianMap = d
        }
        function q(a, b, c) {
            a._hungarianMap || m(a);
            var d;
            g.each(b,
            function(e) {
                d = a._hungarianMap[e];
                d === h || !c && b[d] !== h || ("o" === d.charAt(0) ? (b[d] || (b[d] = {}), g.extend(!0, b[d], b[e]), q(a[d], b[d], c)) : b[d] = b[e])
            })
        }
        function s(a) {
            var b = F.defaults.oLanguage,
            c = a.sZeroRecords; ! a.sEmptyTable && c && "No data available in table" === b.sEmptyTable && xa(a, a, "sZeroRecords", "sEmptyTable"); ! a.sLoadingRecords && c && "Loading..." === b.sLoadingRecords && xa(a, a, "sZeroRecords", "sLoadingRecords");
            a.sInfoThousands && (a.sThousands = a.sInfoThousands); (a = a.sDecimal) && Pb(a)
        }
        function t(a) {
            Ca(a, "ordering", "bSort");
            Ca(a, "orderMulti", "bSortMulti");
            Ca(a, "orderClasses", "bSortClasses");
            Ca(a, "orderCellsTop", "bSortCellsTop");
            Ca(a, "order", "aaSorting");
            Ca(a, "orderFixed", "aaSortingFixed");
            Ca(a, "paging", "bPaginate");
            Ca(a, "pagingType", "sPaginationType");
            Ca(a, "pageLength", "iDisplayLength");
            Ca(a, "searching", "bFilter");
            if (a = a.aoSearchCols) for (var b = 0,
            c = a.length; b < c; b++) a[b] && q(F.models.oSearch, a[b])
        }
        function A(a) {
            Ca(a, "orderable", "bSortable");
            Ca(a, "orderData", "aDataSort");
            Ca(a, "orderSequence", "asSorting");
            Ca(a, "orderDataType", "sortDataType")
        }
        function w(a) {
            a = a.oBrowser;
            var b = g("\x3cdiv/\x3e").css({
                position: "absolute",
                top: 0,
                left: 0,
                height: 1,
                width: 1,
                overflow: "hidden"
            }).append(g("\x3cdiv/\x3e").css({
                position: "absolute",
                top: 1,
                left: 1,
                width: 100,
                overflow: "scroll"
            }).append(g('\x3cdiv class\x3d"test"/\x3e').css({
                width: "100%",
                height: 10
            }))).appendTo("body"),
            c = b.find(".test");
            a.bScrollOversize = 100 === c[0].offsetWidth;
            a.bScrollbarLeft = 1 !== c.offset().left;
            b.remove()
        }
        function u(a, b, c, d, e, g) {
            var f, k = !1;
            for (c !== h && (f = c, k = !0); d !== e;) a.hasOwnProperty(d) && (f = k ? b(f, a[d], d, a) : a[d], k = !0, d += g);
            return f
        }
        function x(a, b) {
            var c = F.defaults.column,
            d = a.aoColumns.length,
            c = g.extend({},
            F.models.oColumn, c, {
                nTh: b ? b: k.createElement("th"),
                sTitle: c.sTitle ? c.sTitle: b ? b.innerHTML: "",
                aDataSort: c.aDataSort ? c.aDataSort: [d],
                mData: c.mData ? c.mData: d,
                idx: d
            });
            a.aoColumns.push(c);
            c = a.aoPreSearchCols;
            c[d] = g.extend({},
            F.models.oSearch, c[d]);
            U(a, d, null)
        }
        function U(a, b, c) {
            b = a.aoColumns[b];
            var d = a.oClasses,
            e = g(b.nTh);
            if (!b.sWidthOrig) {
                b.sWidthOrig = e.attr("width") || null;
                var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
                f && (b.sWidthOrig = f[1])
            }
            c !== h && null !== c && (A(c), q(F.defaults.column, c), c.mDataProp !== h && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), g.extend(b, c), xa(b, c, "sWidth", "sWidthOrig"), "number" === typeof c.iDataSort && (b.aDataSort = [c.iDataSort]), xa(b, c, "aDataSort"));
            var k = b.mData,
            l = ma(k),
            n = b.mRender ? ma(b.mRender) : null;
            c = function(a) {
                return "string" === typeof a && -1 !== a.indexOf("@")
            };
            b._bAttrSrc = g.isPlainObject(k) && (c(k.sort) || c(k.type) || c(k.filter));
            b.fnGetData = function(a, b, c) {
                var d = l(a, b, h, c);
                return n && b ? n(d, b, a, c) : d
            };
            b.fnSetData = function(a, b, c) {
                return G(k)(a, b, c)
            };
            a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));
            a = -1 !== g.inArray("asc", b.asSorting);
            c = -1 !== g.inArray("desc", b.asSorting);
            b.bSortable && (a || c) ? a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI) : (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "")
        }
        function I(a) {
            if (!1 !== a.oFeatures.bAutoWidth) {
                var b = a.aoColumns;
                Sa(a);
                for (var c = 0,
                d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth
            }
            b = a.oScroll;
            "" === b.sY && "" === b.sX || Qa(a);
            ja(a, null, "column-sizing", [a])
        }
        function R(a, b) {
            var c = d(a, "bVisible");
            return "number" === typeof c[b] ? c[b] : null
        }
        function a(a, b) {
            var c = d(a, "bVisible"),
            c = g.inArray(b, c);
            return - 1 !== c ? c: null
        }
        function c(a) {
            return d(a, "bVisible").length
        }
        function d(a, b) {
            var c = [];
            g.map(a.aoColumns,
            function(a, d) {
                a[b] && c.push(d)
            });
            return c
        }
        function e(a) {
            var b = a.aoColumns,
            c = a.aoData,
            d = F.ext.type.detect,
            e, g, f, k, l, n, m, p, q;
            e = 0;
            for (g = b.length; e < g; e++) if (m = b[e], q = [], !m.sType && m._sManualType) m.sType = m._sManualType;
            else if (!m.sType) {
                f = 0;
                for (k = d.length; f < k; f++) {
                    l = 0;
                    for (n = c.length; l < n && (q[l] === h && (q[l] = C(a, l, e, "type")), p = d[f](q[l], a), p && "html" !== p); l++);
                    if (p) {
                        m.sType = p;
                        break
                    }
                }
                m.sType || (m.sType = "string")
            }
        }
        function f(a, b, c, d) {
            var e, f, k, l, n, m, p = a.aoColumns;
            if (b) for (e = b.length - 1; 0 <= e; e--) {
                m = b[e];
                var q = m.targets !== h ? m.targets: m.aTargets;
                g.isArray(q) || (q = [q]);
                f = 0;
                for (k = q.length; f < k; f++) if ("number" === typeof q[f] && 0 <= q[f]) {
                    for (; p.length <= q[f];) x(a);
                    d(q[f], m)
                } else if ("number" === typeof q[f] && 0 > q[f]) d(p.length + q[f], m);
                else if ("string" === typeof q[f]) for (l = 0, n = p.length; l < n; l++)("_all" == q[f] || g(p[l].nTh).hasClass(q[f])) && d(l, m)
            }
            if (c) for (e = 0, a = c.length; e < a; e++) d(e, c[e])
        }
        function n(a, b, c, d) {
            var e = a.aoData.length,
            f = g.extend(!0, {},
            F.models.oRow, {
                src: c ? "dom": "data"
            });
            f._aData = b;
            a.aoData.push(f);
            b = a.aoColumns;
            for (var f = 0,
            h = b.length; f < h; f++) c && z(a, e, f, C(a, e, f)),
            b[f].sType = null;
            a.aiDisplayMaster.push(e); ! c && a.oFeatures.bDeferRender || aa(a, e, c, d);
            return e
        }
        function O(a, b) {
            var c;
            b instanceof g || (b = g(b));
            return b.map(function(b, d) {
                c = Z(a, d);
                return n(a, c.data, d, c.cells)
            })
        }
        function C(a, b, c, d) {
            var e = a.iDraw,
            g = a.aoColumns[c],
            f = a.aoData[b]._aData,
            k = g.sDefaultContent;
            c = g.fnGetData(f, d, {
                settings: a,
                row: b,
                col: c
            });
            if (c === h) return a.iDrawError != e && null === k && (Ma(a, 0, "Requested unknown parameter " + ("function" == typeof g.mData ? "{function}": "'" + g.mData + "'") + " for row " + b, 4), a.iDrawError = e),
            k;
            if ((c === f || null === c) && null !== k) c = k;
            else if ("function" === typeof c) return c.call(f);
            return null === c && "display" == d ? "": c
        }
        function z(a, b, c, d) {
            a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
                settings: a,
                row: b,
                col: c
            })
        }
        function T(a) {
            return g.map(a.match(/(\\.|[^\.])+/g),
            function(a) {
                return a.replace(/\\./g, ".")
            })
        }
        function ma(a) {
            if (g.isPlainObject(a)) {
                var b = {};
                g.each(a,
                function(a, c) {
                    c && (b[a] = ma(c))
                });
                return function(a, c, d, e) {
                    var g = b[c] || b._;
                    return g !== h ? g(a, c, d, e) : a
                }
            }
            if (null === a) return function(a) {
                return a
            };
            if ("function" === typeof a) return function(b, c, d, e) {
                return a(b, c, d, e)
            };
            if ("string" === typeof a && ( - 1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
                var c = function(a, b, d) {
                    var e, g;
                    if ("" !== d) {
                        g = T(d);
                        for (var r = 0,
                        f = g.length; r < f; r++) {
                            d = g[r].match(cb);
                            e = g[r].match(Ua);
                            if (d) {
                                g[r] = g[r].replace(cb, "");
                                "" !== g[r] && (a = a[g[r]]);
                                e = [];
                                g.splice(0, r + 1);
                                g = g.join(".");
                                r = 0;
                                for (f = a.length; r < f; r++) e.push(c(a[r], b, g));
                                a = d[0].substring(1, d[0].length - 1);
                                a = "" === a ? e: e.join(a);
                                break
                            } else if (e) {
                                g[r] = g[r].replace(Ua, "");
                                a = a[g[r]]();
                                continue
                            }
                            if (null === a || a[g[r]] === h) return h;
                            a = a[g[r]]
                        }
                    }
                    return a
                };
                return function(b, d) {
                    return c(b, d, a)
                }
            }
            return function(b) {
                return b[a]
            }
        }
        function G(a) {
            if (g.isPlainObject(a)) return G(a._);
            if (null === a) return function() {};
            if ("function" === typeof a) return function(b, c, d) {
                a(b, "set", c, d)
            };
            if ("string" === typeof a && ( - 1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
                var b = function(a, c, d) {
                    d = T(d);
                    var e;
                    e = d[d.length - 1];
                    for (var g, r, f = 0,
                    k = d.length - 1; f < k; f++) {
                        g = d[f].match(cb);
                        r = d[f].match(Ua);
                        if (g) {
                            d[f] = d[f].replace(cb, "");
                            a[d[f]] = [];
                            e = d.slice();
                            e.splice(0, f + 1);
                            g = e.join(".");
                            r = 0;
                            for (k = c.length; r < k; r++) e = {},
                            b(e, c[r], g),
                            a[d[f]].push(e);
                            return
                        }
                        r && (d[f] = d[f].replace(Ua, ""), a = a[d[f]](c));
                        if (null === a[d[f]] || a[d[f]] === h) a[d[f]] = {};
                        a = a[d[f]]
                    }
                    if (e.match(Ua)) a[e.replace(Ua, "")](c);
                    else a[e.replace(cb, "")] = c
                };
                return function(c, d) {
                    return b(c, d, a)
                }
            }
            return function(b, c) {
                b[a] = c
            }
        }
        function ea(a) {
            return Ba(a.aoData, "_aData")
        }
        function ca(a) {
            a.aoData.length = 0;
            a.aiDisplayMaster.length = 0;
            a.aiDisplay.length = 0
        }
        function E(a, b, c) {
            for (var d = -1,
            e = 0,
            g = a.length; e < g; e++) a[e] == b ? d = e: a[e] > b && a[e]--; - 1 != d && c === h && a.splice(d, 1)
        }
        function fa(a, b, c, d) {
            var e = a.aoData[b],
            g;
            if ("dom" !== c && (c && "auto" !== c || "dom" !== e.src)) {
                var f = e.anCells,
                k;
                if (f) for (c = 0, g = f.length; c < g; c++) {
                    for (k = f[c]; k.childNodes.length;) k.removeChild(k.firstChild);
                    f[c].innerHTML = C(a, b, c, "display")
                }
            } else e._aData = Z(a, e).data;
            e._aSortData = null;
            e._aFilterData = null;
            a = a.aoColumns;
            if (d !== h) a[d].sType = null;
            else for (c = 0, g = a.length; c < g; c++) a[c].sType = null;
            ha(e)
        }
        function Z(a, b) {
            var c = [],
            d = [],
            e = b.firstChild,
            f,
            h,
            k,
            l = 0,
            n,
            m = a.aoColumns,
            p = function(a, b, c) {
                "string" === typeof a && (b = a.indexOf("@"), -1 !== b && (a = a.substring(b + 1), k["@" + a] = c.getAttribute(a)))
            },
            q = function(a) {
                h = m[l];
                n = g.trim(a.innerHTML);
                h && h._bAttrSrc ? (k = {
                    display: n
                },
                p(h.mData.sort, k, a), p(h.mData.type, k, a), p(h.mData.filter, k, a), c.push(k)) : c.push(n);
                l++
            };
            if (e) for (; e;) {
                f = e.nodeName.toUpperCase();
                if ("TD" == f || "TH" == f) q(e),
                d.push(e);
                e = e.nextSibling
            } else for (d = b.anCells, e = 0, f = d.length; e < f; e++) q(d[e]);
            return {
                data: c,
                cells: d
            }
        }
        function aa(a, b, c, d) {
            var e = a.aoData[b],
            g = e._aData,
            f = [],
            h,
            l,
            n,
            m,
            p;
            if (null === e.nTr) {
                h = c || k.createElement("tr");
                e.nTr = h;
                e.anCells = f;
                h._DT_RowIndex = b;
                ha(e);
                m = 0;
                for (p = a.aoColumns.length; m < p; m++) {
                    n = a.aoColumns[m];
                    l = c ? d[m] : k.createElement(n.sCellType);
                    f.push(l);
                    if (!c || n.mRender || n.mData !== m) l.innerHTML = C(a, b, m, "display");
                    n.sClass && (l.className += " " + n.sClass);
                    n.bVisible && !c ? h.appendChild(l) : !n.bVisible && c && l.parentNode.removeChild(l);
                    n.fnCreatedCell && n.fnCreatedCell.call(a.oInstance, l, C(a, b, m), g, b, m)
                }
                ja(a, "aoRowCreatedCallback", null, [h, g, b])
            }
            e.nTr.setAttribute("role", "row")
        }
        function ha(a) {
            var b = a.nTr,
            c = a._aData;
            if (b) {
                c.DT_RowId && (b.id = c.DT_RowId);
                if (c.DT_RowClass) {
                    var d = c.DT_RowClass.split(" ");
                    a.__rowc = a.__rowc ? ob(a.__rowc.concat(d)) : d;
                    g(b).removeClass(a.__rowc.join(" ")).addClass(c.DT_RowClass)
                }
                c.DT_RowData && g(b).data(c.DT_RowData)
            }
        }
        function B(a) {
            var b, c, d, e, f, h = a.nTHead,
            k = a.nTFoot,
            l = 0 === g("th, td", h).length,
            n = a.oClasses,
            m = a.aoColumns;
            l && (e = g("\x3ctr/\x3e").appendTo(h));
            b = 0;
            for (c = m.length; b < c; b++) f = m[b],
            d = g(f.nTh).addClass(f.sClass),
            l && d.appendTo(e),
            a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), sb(a, f.nTh, b))),
            f.sTitle != d.html() && d.html(f.sTitle),
            gb(a, "header")(a, d, f, n);
            l && Ga(a.aoHeader, h);
            g(h).find("\x3etr").attr("role", "row");
            g(h).find("\x3etr\x3eth, \x3etr\x3etd").addClass(n.sHeaderTH);
            g(k).find("\x3etr\x3eth, \x3etr\x3etd").addClass(n.sFooterTH);
            if (null !== k) for (a = a.aoFooter[0], b = 0, c = a.length; b < c; b++) f = m[b],
            f.nTf = a[b].cell,
            f.sClass && g(f.nTf).addClass(f.sClass)
        }
        function J(a, b, c) {
            var d, e, f, k = [],
            l = [],
            n = a.aoColumns.length,
            m;
            if (b) {
                c === h && (c = !1);
                d = 0;
                for (e = b.length; d < e; d++) {
                    k[d] = b[d].slice();
                    k[d].nTr = b[d].nTr;
                    for (f = n - 1; 0 <= f; f--) a.aoColumns[f].bVisible || c || k[d].splice(f, 1);
                    l.push([])
                }
                d = 0;
                for (e = k.length; d < e; d++) {
                    if (a = k[d].nTr) for (; f = a.firstChild;) a.removeChild(f);
                    f = 0;
                    for (b = k[d].length; f < b; f++) if (m = n = 1, l[d][f] === h) {
                        a.appendChild(k[d][f].cell);
                        for (l[d][f] = 1; k[d + n] !== h && k[d][f].cell == k[d + n][f].cell;) l[d + n][f] = 1,
                        n++;
                        for (; k[d][f + m] !== h && k[d][f].cell == k[d][f + m].cell;) {
                            for (c = 0; c < n; c++) l[d + c][f + m] = 1;
                            m++
                        }
                        g(k[d][f].cell).attr("rowspan", n).attr("colspan", m)
                    }
                }
            }
        }
        function N(a) {
            var b = ja(a, "aoPreDrawCallback", "preDraw", [a]);
            if ( - 1 !== g.inArray(!1, b)) za(a, !1);
            else {
                var b = [],
                d = 0,
                e = a.asStripeClasses,
                f = e.length,
                k = a.oLanguage,
                l = a.iInitDisplayStart,
                n = "ssp" == na(a),
                m = a.aiDisplay;
                a.bDrawing = !0;
                l !== h && -1 !== l && (a._iDisplayStart = n ? l: l >= a.fnRecordsDisplay() ? 0 : l, a.iInitDisplayStart = -1);
                var l = a._iDisplayStart,
                p = a.fnDisplayEnd();
                if (a.bDeferLoading) a.bDeferLoading = !1,
                a.iDraw++,
                za(a, !1);
                else if (n) {
                    if (!a.bDestroying && !qa(a)) return
                } else a.iDraw++;
                if (0 !== m.length) for (k = n ? a.aoData.length: p, n = n ? 0 : l; n < k; n++) {
                    var q = m[n],
                    s = a.aoData[q];
                    null === s.nTr && aa(a, q);
                    q = s.nTr;
                    if (0 !== f) {
                        var t = e[d % f];
                        s._sRowStripe != t && (g(q).removeClass(s._sRowStripe).addClass(t), s._sRowStripe = t)
                    }
                    ja(a, "aoRowCallback", null, [q, s._aData, d, n]);
                    b.push(q);
                    d++
                } else d = k.sZeroRecords,
                1 == a.iDraw && "ajax" == na(a) ? d = k.sLoadingRecords: k.sEmptyTable && 0 === a.fnRecordsTotal() && (d = k.sEmptyTable),
                b[0] = g("\x3ctr/\x3e", {
                    "class": f ? e[0] : ""
                }).append(g("\x3ctd /\x3e", {
                    valign: "top",
                    colSpan: c(a),
                    "class": a.oClasses.sRowEmpty
                }).html(d))[0];
                ja(a, "aoHeaderCallback", "header", [g(a.nTHead).children("tr")[0], ea(a), l, p, m]);
                ja(a, "aoFooterCallback", "footer", [g(a.nTFoot).children("tr")[0], ea(a), l, p, m]);
                e = g(a.nTBody);
                e.children().detach();
                e.append(g(b));
                ja(a, "aoDrawCallback", "draw", [a]);
                a.bSorted = !1;
                a.bFiltered = !1;
                a.bDrawing = !1
            }
        }
        function M(a, b) {
            var c = a.oFeatures,
            d = c.bFilter;
            c.bSort && Mb(a);
            d ? l(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice(); ! 0 !== b && (a._iDisplayStart = 0);
            a._drawHold = b;
            N(a);
            a._drawHold = !1
        }
        function ta(a) {
            var b = a.oClasses,
            c = g(a.nTable),
            c = g("\x3cdiv/\x3e").insertBefore(c),
            d = a.oFeatures,
            e = g("\x3cdiv/\x3e", {
                id: a.sTableId + "_wrapper",
                "class": b.sWrapper + (a.nTFoot ? "": " " + b.sNoFooter)
            });
            a.nHolding = c[0];
            a.nTableWrapper = e[0];
            a.nTableReinsertBefore = a.nTable.nextSibling;
            for (var f = a.sDom.split(""), h, k, l, n, m, p, q = 0; q < f.length; q++) {
                h = null;
                k = f[q];
                if ("\x3c" == k) {
                    l = g("\x3cdiv/\x3e")[0];
                    n = f[q + 1];
                    if ("'" == n || '"' == n) {
                        m = "";
                        for (p = 2; f[q + p] != n;) m += f[q + p],
                        p++;
                        "H" == m ? m = b.sJUIHeader: "F" == m && (m = b.sJUIFooter); - 1 != m.indexOf(".") ? (n = m.split("."), l.id = n[0].substr(1, n[0].length - 1), l.className = n[1]) : "#" == m.charAt(0) ? l.id = m.substr(1, m.length - 1) : l.className = m;
                        q += p
                    }
                    e.append(l);
                    e = g(l)
                } else if ("\x3e" == k) e = e.parent();
                else if ("l" == k && d.bPaginate && d.bLengthChange) h = ab(a);
                else if ("f" == k && d.bFilter) h = K(a);
                else if ("r" == k && d.bProcessing) h = ba(a);
                else if ("t" == k) h = Hb(a);
                else if ("i" == k && d.bInfo) h = $a(a);
                else if ("p" == k && d.bPaginate) h = Ja(a);
                else if (0 !== F.ext.feature.length) for (l = F.ext.feature, p = 0, n = l.length; p < n; p++) if (k == l[p].cFeature) {
                    h = l[p].fnInit(a);
                    break
                }
                h && (l = a.aanFeatures, l[k] || (l[k] = []), l[k].push(h), e.append(h))
            }
            c.replaceWith(e)
        }
        function Ga(a, b) {
            var c = g(b).children("tr"),
            d,
            e,
            f,
            h,
            k,
            l,
            n,
            m,
            p,
            q;
            a.splice(0, a.length);
            f = 0;
            for (l = c.length; f < l; f++) a.push([]);
            f = 0;
            for (l = c.length; f < l; f++) for (d = c[f], e = d.firstChild; e;) {
                if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) {
                    m = 1 * e.getAttribute("colspan");
                    p = 1 * e.getAttribute("rowspan");
                    m = m && 0 !== m && 1 !== m ? m: 1;
                    p = p && 0 !== p && 1 !== p ? p: 1;
                    h = 0;
                    for (k = a[f]; k[h];) h++;
                    n = h;
                    q = 1 === m ? !0 : !1;
                    for (k = 0; k < m; k++) for (h = 0; h < p; h++) a[f + h][n + k] = {
                        cell: e,
                        unique: q
                    },
                    a[f + h].nTr = d
                }
                e = e.nextSibling
            }
        }
        function ua(a, b, c) {
            var d = [];
            c || (c = a.aoHeader, b && (c = [], Ga(c, b)));
            b = 0;
            for (var e = c.length; b < e; b++) for (var g = 0,
            f = c[b].length; g < f; g++) ! c[b][g].unique || d[g] && a.bSortCellsTop || (d[g] = c[b][g].cell);
            return d
        }
        function Ia(a, b, c) {
            ja(a, "aoServerParams", "serverParams", [b]);
            if (b && g.isArray(b)) {
                var d = {},
                e = /(.*?)\[\]$/;
                g.each(b,
                function(a, b) {
                    var c = b.name.match(e);
                    c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value
                });
                b = d
            }
            var f, h = a.ajax,
            k = a.oInstance;
            if (g.isPlainObject(h) && h.data) {
                f = h.data;
                var l = g.isFunction(f) ? f(b) : f;
                b = g.isFunction(f) && l ? l: g.extend(!0, b, l);
                delete h.data
            }
            l = {
                data: b,
                success: function(b) {
                    var d = b.error || b.sError;
                    d && a.oApi._fnLog(a, 0, d);
                    a.json = b;
                    ja(a, null, "xhr", [a, b]);
                    c(b)
                },
                dataType: "json",
                cache: !1,
                type: a.sServerMethod,
                error: function(b, c) {
                    var d = a.oApi._fnLog;
                    "parsererror" == c ? d(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && d(a, 0, "Ajax error", 7);
                    za(a, !1)
                }
            };
            a.oAjaxData = b;
            ja(a, null, "preXhr", [a, b]);
            a.fnServerData ? a.fnServerData.call(k, a.sAjaxSource, g.map(b,
            function(a, b) {
                return {
                    name: b,
                    value: a
                }
            }), c, a) : a.sAjaxSource || "string" === typeof h ? a.jqXHR = g.ajax(g.extend(l, {
                url: h || a.sAjaxSource
            })) : g.isFunction(h) ? a.jqXHR = h.call(k, b, c, a) : (a.jqXHR = g.ajax(g.extend(l, h)), h.data = f)
        }
        function qa(a) {
            return a.bAjaxDataGet ? (a.iDraw++, za(a, !0), Ia(a, la(a),
            function(b) {
                ra(a, b)
            }), !1) : !0
        }
        function la(a) {
            var b = a.aoColumns,
            c = b.length,
            d = a.oFeatures,
            e = a.oPreviousSearch,
            f = a.aoPreSearchCols,
            h, k = [],
            l,
            n,
            m,
            p = Va(a);
            h = a._iDisplayStart;
            l = !1 !== d.bPaginate ? a._iDisplayLength: -1;
            var q = function(a, b) {
                k.push({
                    name: a,
                    value: b
                })
            };
            q("sEcho", a.iDraw);
            q("iColumns", c);
            q("sColumns", Ba(b, "sName").join(","));
            q("iDisplayStart", h);
            q("iDisplayLength", l);
            var s = {
                draw: a.iDraw,
                columns: [],
                order: [],
                start: h,
                length: l,
                search: {
                    value: e.sSearch,
                    regex: e.bRegex
                }
            };
            for (h = 0; h < c; h++) n = b[h],
            m = f[h],
            l = "function" == typeof n.mData ? "function": n.mData,
            s.columns.push({
                data: l,
                name: n.sName,
                searchable: n.bSearchable,
                orderable: n.bSortable,
                search: {
                    value: m.sSearch,
                    regex: m.bRegex
                }
            }),
            q("mDataProp_" + h, l),
            d.bFilter && (q("sSearch_" + h, m.sSearch), q("bRegex_" + h, m.bRegex), q("bSearchable_" + h, n.bSearchable)),
            d.bSort && q("bSortable_" + h, n.bSortable);
            d.bFilter && (q("sSearch", e.sSearch), q("bRegex", e.bRegex));
            d.bSort && (g.each(p,
            function(a, b) {
                s.order.push({
                    column: b.col,
                    dir: b.dir
                });
                q("iSortCol_" + a, b.col);
                q("sSortDir_" + a, b.dir)
            }), q("iSortingCols", p.length));
            b = F.ext.legacy.ajax;
            return null === b ? a.sAjaxSource ? k: s: b ? k: s
        }
        function ra(a, b) {
            var c = b.sEcho !== h ? b.sEcho: b.draw,
            d = b.iTotalRecords !== h ? b.iTotalRecords: b.recordsTotal,
            e = b.iTotalDisplayRecords !== h ? b.iTotalDisplayRecords: b.recordsFiltered;
            if (c) {
                if (1 * c < a.iDraw) return;
                a.iDraw = 1 * c
            }
            ca(a);
            a._iRecordsTotal = parseInt(d, 10);
            a._iRecordsDisplay = parseInt(e, 10);
            c = V(a, b);
            d = 0;
            for (e = c.length; d < e; d++) n(a, c[d]);
            a.aiDisplay = a.aiDisplayMaster.slice();
            a.bAjaxDataGet = !1;
            N(a);
            a._bInitComplete || ya(a, b);
            a.bAjaxDataGet = !0;
            za(a, !1)
        }
        function V(a, b) {
            var c = g.isPlainObject(a.ajax) && a.ajax.dataSrc !== h ? a.ajax.dataSrc: a.sAjaxDataProp;
            return "data" === c ? b.aaData || b[c] : "" !== c ? ma(c)(b) : b
        }
        function K(a) {
            var b = a.oClasses,
            c = a.sTableId,
            d = a.oLanguage,
            e = a.oPreviousSearch,
            f = a.aanFeatures,
            h = '\x3cinput type\x3d"search" class\x3d"' + b.sFilterInput + '"/\x3e',
            n = d.sSearch,
            n = n.match(/_INPUT_/) ? n.replace("_INPUT_", h) : n + h,
            b = g("\x3cdiv/\x3e", {
                id: f.f ? null: c + "_filter",
                "class": b.sFilter
            }).append(g("\x3clabel/\x3e").append(n)),
            f = function() {
                var b = this.value ? this.value: "";
                b != e.sSearch && (l(a, {
                    sSearch: b,
                    bRegex: e.bRegex,
                    bSmart: e.bSmart,
                    bCaseInsensitive: e.bCaseInsensitive
                }), a._iDisplayStart = 0, N(a))
            },
            m = g("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT", "ssp" === na(a) ? ib(f, 400) : f).bind("keypress.DT",
            function(a) {
                if (13 == a.keyCode) return ! 1
            }).attr("aria-controls", c);
            g(a.nTable).on("search.dt.DT",
            function(b, c) {
                if (a === c) try {
                    m[0] !== k.activeElement && m.val(e.sSearch)
                } catch(d) {}
            });
            return b[0]
        }
        function l(a, b, c) {
            var d = a.oPreviousSearch,
            g = a.aoPreSearchCols,
            f = function(a) {
                d.sSearch = a.sSearch;
                d.bRegex = a.bRegex;
                d.bSmart = a.bSmart;
                d.bCaseInsensitive = a.bCaseInsensitive
            };
            e(a);
            if ("ssp" != na(a)) {
                Ea(a, b.sSearch, c, b.bEscapeRegex !== h ? !b.bEscapeRegex: b.bRegex, b.bSmart, b.bCaseInsensitive);
                f(b);
                for (b = 0; b < g.length; b++) Da(a, g[b].sSearch, b, g[b].bEscapeRegex !== h ? !g[b].bEscapeRegex: g[b].bRegex, g[b].bSmart, g[b].bCaseInsensitive);
                va(a)
            } else f(b);
            a.bFiltered = !0;
            ja(a, null, "search", [a])
        }
        function va(a) {
            for (var b = F.ext.search,
            c = a.aiDisplay,
            d, e, g = 0,
            f = b.length; g < f; g++) {
                for (var h = [], k = 0, l = c.length; k < l; k++) e = c[k],
                d = a.aoData[e],
                b[g](a, d._aFilterData, e, d._aData, k) && h.push(e);
                c.length = 0;
                c.push.apply(c, h)
            }
        }
        function Da(a, b, c, d, e, g) {
            if ("" !== b) {
                var f = a.aiDisplay;
                d = oa(b, d, e, g);
                for (e = f.length - 1; 0 <= e; e--) b = a.aoData[f[e]]._aFilterData[c],
                d.test(b) || f.splice(e, 1)
            }
        }
        function Ea(a, b, c, d, e, g) {
            d = oa(b, d, e, g);
            e = a.oPreviousSearch.sSearch;
            g = a.aiDisplayMaster;
            var f;
            0 !== F.ext.search.length && (c = !0);
            f = Oa(a);
            if (0 >= b.length) a.aiDisplay = g.slice();
            else {
                if (f || c || e.length > b.length || 0 !== b.indexOf(e) || a.bSorted) a.aiDisplay = g.slice();
                b = a.aiDisplay;
                for (c = b.length - 1; 0 <= c; c--) d.test(a.aoData[b[c]]._sFilterRow) || b.splice(c, 1)
            }
        }
        function oa(a, b, c, d) {
            a = b ? a: Fa(a);
            c && (a = "^(?\x3d.*?" + g.map(a.match(/"[^"]+"|[^ ]+/g) || "",
            function(a) {
                return '"' === a.charAt(0) ? a.match(/^"(.*)"$/)[1] : a
            }).join(")(?\x3d.*?") + ").*$");
            return RegExp(a, d ? "i": "")
        }
        function Fa(a) {
            return a.replace(Ta, "\\$1")
        }
        function Oa(a) {
            var b = a.aoColumns,
            c, d, e, g, f, h, k, l, n = F.ext.type.search;
            c = !1;
            d = 0;
            for (g = a.aoData.length; d < g; d++) if (l = a.aoData[d], !l._aFilterData) {
                h = [];
                e = 0;
                for (f = b.length; e < f; e++) c = b[e],
                c.bSearchable ? (k = C(a, d, e, "filter"), n[c.sType] && (k = n[c.sType](k)), null === k && (k = ""), "string" !== typeof k && k.toString && (k = k.toString())) : k = "",
                k.indexOf && -1 !== k.indexOf("\x26") && (db.innerHTML = k, k = Ub ? db.textContent: db.innerText),
                k.replace && (k = k.replace(/[\r\n]/g, "")),
                h.push(k);
                l._aFilterData = h;
                l._sFilterRow = h.join("  ");
                c = !0
            }
            return c
        }
        function vb(a) {
            return {
                search: a.sSearch,
                smart: a.bSmart,
                regex: a.bRegex,
                caseInsensitive: a.bCaseInsensitive
            }
        }
        function Gb(a) {
            return {
                sSearch: a.search,
                bSmart: a.smart,
                bRegex: a.regex,
                bCaseInsensitive: a.caseInsensitive
            }
        }
        function $a(a) {
            var b = a.sTableId,
            c = a.aanFeatures.i,
            d = g("\x3cdiv/\x3e", {
                "class": a.oClasses.sInfo,
                id: c ? null: b + "_info"
            });
            c || (a.aoDrawCallback.push({
                fn: Jb,
                sName: "information"
            }), d.attr("role", "status").attr("aria-live", "polite"), g(a.nTable).attr("aria-describedby", b + "_info"));
            return d[0]
        }
        function Jb(a) {
            var b = a.aanFeatures.i;
            if (0 !== b.length) {
                var c = a.oLanguage,
                d = a._iDisplayStart + 1,
                e = a.fnDisplayEnd(),
                f = a.fnRecordsTotal(),
                h = a.fnRecordsDisplay(),
                k = h ? c.sInfo: c.sInfoEmpty;
                h !== f && (k += " " + c.sInfoFiltered);
                k += c.sInfoPostFix;
                k = Pa(a, k);
                c = c.fnInfoCallback;
                null !== c && (k = c.call(a.oInstance, a, d, e, f, h, k));
                g(b).html(k)
            }
        }
        function Pa(a, b) {
            var c = a.fnFormatNumber,
            d = a._iDisplayStart + 1,
            e = a._iDisplayLength,
            g = a.fnRecordsDisplay(),
            f = -1 === e;
            return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, g)).replace(/_PAGE_/g, c.call(a, f ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, f ? 1 : Math.ceil(g / e)))
        }
        function hb(a) {
            var b, c, d = a.iInitDisplayStart,
            e = a.aoColumns,
            g;
            c = a.oFeatures;
            if (a.bInitialised) {
                ta(a);
                B(a);
                J(a, a.aoHeader);
                J(a, a.aoFooter);
                za(a, !0);
                c.bAutoWidth && Sa(a);
                b = 0;
                for (c = e.length; b < c; b++) g = e[b],
                g.sWidth && (g.nTh.style.width = Y(g.sWidth));
                M(a);
                e = na(a);
                "ssp" != e && ("ajax" == e ? Ia(a, [],
                function(c) {
                    var e = V(a, c);
                    for (b = 0; b < e.length; b++) n(a, e[b]);
                    a.iInitDisplayStart = d;
                    M(a);
                    za(a, !1);
                    ya(a, c)
                },
                a) : (za(a, !1), ya(a)))
            } else setTimeout(function() {
                hb(a)
            },
            200)
        }
        function ya(a, b) {
            a._bInitComplete = !0;
            b && I(a);
            ja(a, "aoInitComplete", "init", [a, b])
        }
        function fb(a, b) {
            var c = parseInt(b, 10);
            a._iDisplayLength = c;
            lb(a);
            ja(a, null, "length", [a, c])
        }
        function ab(a) {
            for (var b = a.oClasses,
            c = a.sTableId,
            d = a.aLengthMenu,
            e = g.isArray(d[0]), f = e ? d[0] : d, d = e ? d[1] : d, e = g("\x3cselect/\x3e", {
                name: c + "_length",
                "aria-controls": c,
                "class": b.sLengthSelect
            }), h = 0, k = f.length; h < k; h++) e[0][h] = new Option(d[h], f[h]);
            var l = g("\x3cdiv\x3e\x3clabel/\x3e\x3c/div\x3e").addClass(b.sLength);
            a.aanFeatures.l || (l[0].id = c + "_length");
            l.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
            g("select", l).val(a._iDisplayLength).bind("change.DT",
            function() {
                fb(a, g(this).val());
                N(a)
            });
            g(a.nTable).bind("length.dt.DT",
            function(b, c, d) {
                a === c && g("select", l).val(d)
            });
            return l[0]
        }
        function Ja(a) {
            var b = a.sPaginationType,
            c = F.ext.pager[b],
            d = "function" === typeof c,
            e = function(a) {
                N(a)
            },
            b = g("\x3cdiv/\x3e").addClass(a.oClasses.sPaging + b)[0],
            f = a.aanFeatures;
            d || c.fnInit(a, b, e);
            f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
                fn: function(a) {
                    if (d) {
                        var b = a._iDisplayStart,
                        g = a._iDisplayLength,
                        r = a.fnRecordsDisplay(),
                        h = -1 === g,
                        b = h ? 0 : Math.ceil(b / g),
                        g = h ? 1 : Math.ceil(r / g),
                        r = c(b, g),
                        k,
                        h = 0;
                        for (k = f.p.length; h < k; h++) gb(a, "pageButton")(a, f.p[h], h, r, b, g)
                    } else c.fnUpdate(a, e)
                },
                sName: "pagination"
            }));
            return b
        }
        function S(a, b, c) {
            var d = a._iDisplayStart,
            e = a._iDisplayLength,
            g = a.fnRecordsDisplay();
            0 === g || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > g && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e: 0, 0 > d && (d = 0)) : "next" == b ? d + e < g && (d += e) : "last" == b ? d = Math.floor((g - 1) / e) * e: Ma(a, 0, "Unknown paging action: " + b, 5);
            b = a._iDisplayStart !== d;
            a._iDisplayStart = d;
            b && (ja(a, null, "page", [a]), c && N(a));
            return b
        }
        function ba(a) {
            return g("\x3cdiv/\x3e", {
                id: a.aanFeatures.r ? null: a.sTableId + "_processing",
                "class": a.oClasses.sProcessing
            }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]
        }
        function za(a, b) {
            a.oFeatures.bProcessing && g(a.aanFeatures.r).css("display", b ? "block": "none");
            ja(a, null, "processing", [a, b])
        }
        function Hb(a) {
            var b = g(a.nTable);
            b.attr("role", "grid");
            var c = a.oScroll;
            if ("" === c.sX && "" === c.sY) return a.nTable;
            var d = c.sX,
            e = c.sY,
            f = a.oClasses,
            h = b.children("caption"),
            k = h.length ? h[0]._captionSide: null,
            l = g(b[0].cloneNode(!1)),
            n = g(b[0].cloneNode(!1)),
            m = b.children("tfoot");
            c.sX && "100%" === b.attr("width") && b.removeAttr("width");
            m.length || (m = null);
            c = g("\x3cdiv/\x3e", {
                "class": f.sScrollWrapper
            }).append(g("\x3cdiv/\x3e", {
                "class": f.sScrollHead
            }).css({
                overflow: "hidden",
                position: "relative",
                border: 0,
                width: d ? d ? Y(d) : null: "100%"
            }).append(g("\x3cdiv/\x3e", {
                "class": f.sScrollHeadInner
            }).css({
                "box-sizing": "content-box",
                width: c.sXInner || "100%"
            }).append(l.removeAttr("id").css("margin-left", 0).append(b.children("thead")))).append("top" === k ? h: null)).append(g("\x3cdiv/\x3e", {
                "class": f.sScrollBody
            }).css({
                overflow: "auto",
                height: e ? Y(e) : null,
                width: d ? Y(d) : null
            }).append(b));
            m && c.append(g("\x3cdiv/\x3e", {
                "class": f.sScrollFoot
            }).css({
                overflow: "hidden",
                border: 0,
                width: d ? d ? Y(d) : null: "100%"
            }).append(g("\x3cdiv/\x3e", {
                "class": f.sScrollFootInner
            }).append(n.removeAttr("id").css("margin-left", 0).append(b.children("tfoot")))).append("bottom" === k ? h: null));
            var b = c.children(),
            p = b[0],
            f = b[1],
            q = m ? b[2] : null;
            d && g(f).scroll(function() {
                var a = this.scrollLeft;
                p.scrollLeft = a;
                m && (q.scrollLeft = a)
            });
            a.nScrollHead = p;
            a.nScrollBody = f;
            a.nScrollFoot = q;
            a.aoDrawCallback.push({
                fn: Qa,
                sName: "scrolling"
            });
            return c[0]
        }
        function Qa(a) {
            var b = a.oScroll,
            c = b.sX,
            d = b.sXInner,
            e = b.sY,
            f = b.iBarWidth,
            h = g(a.nScrollHead),
            k = h[0].style,
            l = h.children("div"),
            n = l[0].style,
            m = l.children("table"),
            l = a.nScrollBody,
            p = g(l),
            q = l.style,
            s = g(a.nScrollFoot).children("div"),
            t = s.children("table"),
            u = g(a.nTHead),
            B = g(a.nTable),
            w = B[0],
            J = w.style,
            x = a.nTFoot ? g(a.nTFoot) : null,
            A = a.oBrowser,
            E = A.bScrollOversize,
            M,
            N,
            C,
            la,
            K,
            z = [],
            F = [],
            H = [],
            I,
            G = function(a) {
                a = a.style;
                a.paddingTop = "0";
                a.paddingBottom = "0";
                a.borderTopWidth = "0";
                a.borderBottomWidth = "0";
                a.height = 0
            };
            B.children("thead, tfoot").remove();
            K = u.clone().prependTo(B);
            M = u.find("tr");
            C = K.find("tr");
            K.find("th, td").removeAttr("tabindex");
            x && (la = x.clone().prependTo(B), N = x.find("tr"), la = la.find("tr"));
            c || (q.width = "100%", h[0].style.width = "100%");
            g.each(ua(a, K),
            function(b, c) {
                I = R(a, b);
                c.style.width = a.aoColumns[I].sWidth
            });
            x && sa(function(a) {
                a.style.width = ""
            },
            la);
            b.bCollapse && "" !== e && (q.height = p[0].offsetHeight + u[0].offsetHeight + "px");
            h = B.outerWidth();
            if ("" === c) {
                if (J.width = "100%", E && (B.find("tbody").height() > l.offsetHeight || "scroll" == p.css("overflow-y"))) J.width = Y(B.outerWidth() - f)
            } else "" !== d ? J.width = Y(d) : h == p.width() && p.height() < B.height() ? (J.width = Y(h - f), B.outerWidth() > h - f && (J.width = Y(h))) : J.width = Y(h);
            h = B.outerWidth();
            sa(G, C);
            sa(function(a) {
                H.push(a.innerHTML);
                z.push(Y(g(a).css("width")))
            },
            C);
            sa(function(a, b) {
                a.style.width = z[b]
            },
            M);
            g(C).height(0);
            x && (sa(G, la), sa(function(a) {
                F.push(Y(g(a).css("width")))
            },
            la), sa(function(a, b) {
                a.style.width = F[b]
            },
            N), g(la).height(0));
            sa(function(a, b) {
                a.innerHTML = '\x3cdiv class\x3d"dataTables_sizing" style\x3d"height:0;overflow:hidden;"\x3e' + H[b] + "\x3c/div\x3e";
                a.style.width = z[b]
            },
            C);
            x && sa(function(a, b) {
                a.innerHTML = "";
                a.style.width = F[b]
            },
            la);
            B.outerWidth() < h ? (N = l.scrollHeight > l.offsetHeight || "scroll" == p.css("overflow-y") ? h + f: h, E && (l.scrollHeight > l.offsetHeight || "scroll" == p.css("overflow-y")) && (J.width = Y(N - f)), "" !== c && "" === d || Ma(a, 1, "Possible column misalignment", 6)) : N = "100%";
            q.width = Y(N);
            k.width = Y(N);
            x && (a.nScrollFoot.style.width = Y(N)); ! e && E && (q.height = Y(w.offsetHeight + f));
            e && b.bCollapse && (q.height = Y(e), b = c && w.offsetWidth > l.offsetWidth ? f: 0, w.offsetHeight < l.offsetHeight && (q.height = Y(w.offsetHeight + b)));
            b = B.outerWidth();
            m[0].style.width = Y(b);
            n.width = Y(b);
            m = B.height() > l.clientHeight || "scroll" == p.css("overflow-y");
            A = "padding" + (A.bScrollbarLeft ? "Left": "Right");
            n[A] = m ? f + "px": "0px";
            x && (t[0].style.width = Y(b), s[0].style.width = Y(b), s[0].style[A] = m ? f + "px": "0px");
            p.scroll(); ! a.bSorted && !a.bFiltered || a._drawHold || (l.scrollTop = 0)
        }
        function sa(a, b, c) {
            for (var d = 0,
            e = 0,
            g = b.length,
            f, h; e < g;) {
                f = b[e].firstChild;
                for (h = c ? c[e].firstChild: null; f;) 1 === f.nodeType && (c ? a(f, h, d) : a(f, d), d++),
                f = f.nextSibling,
                h = c ? h.nextSibling: null;
                e++
            }
        }
        function Sa(a) {
            var e = a.nTable,
            f = a.aoColumns,
            h = a.oScroll,
            k = h.sY,
            l = h.sX,
            n = h.sXInner,
            m = f.length,
            h = d(a, "bVisible"),
            p = g("th", a.nTHead),
            q = e.getAttribute("width"),
            s = e.parentNode,
            t = !1,
            B,
            u;
            for (B = 0; B < h.length; B++) u = f[h[B]],
            null !== u.sWidth && (u.sWidth = Kb(u.sWidthOrig, s), t = !0);
            if (t || l || k || m != c(a) || m != p.length) {
                m = g(e).clone().empty().css("visibility", "hidden").removeAttr("id").append(g(a.nTHead).clone(!1)).append(g(a.nTFoot).clone(!1)).append(g("\x3ctbody\x3e\x3ctr/\x3e\x3c/tbody\x3e"));
                m.find("tfoot th, tfoot td").css("width", "");
                var w = m.find("tbody tr"),
                p = ua(a, m.find("thead")[0]);
                for (B = 0; B < h.length; B++) u = f[h[B]],
                p[B].style.width = null !== u.sWidthOrig && "" !== u.sWidthOrig ? Y(u.sWidthOrig) : "";
                if (a.aoData.length) for (B = 0; B < h.length; B++) t = h[B],
                u = f[t],
                g(wb(a, t)).clone(!1).append(u.sContentPadding).appendTo(w);
                m.appendTo(s);
                l && n ? m.width(n) : l ? (m.css("width", "auto"), m.width() < s.offsetWidth && m.width(s.offsetWidth)) : k ? m.width(s.offsetWidth) : q && m.width(q);
                Lb(a, m[0]);
                if (l) {
                    for (B = n = 0; B < h.length; B++) u = f[h[B]],
                    k = g(p[B]).outerWidth(),
                    n += null === u.sWidthOrig ? k: parseInt(u.sWidth, 10) + k - g(p[B]).width();
                    m.width(Y(n));
                    e.style.width = Y(n)
                }
                for (B = 0; B < h.length; B++) if (u = f[h[B]], k = g(p[B]).width()) u.sWidth = Y(k);
                e.style.width = Y(m.css("width"));
                m.remove()
            } else for (B = 0; B < m; B++) f[B].sWidth = Y(p.eq(B).width());
            q && (e.style.width = Y(q)); ! q && !l || a._reszEvt || (g(b).bind("resize.DT-" + a.sInstance, ib(function() {
                I(a)
            })), a._reszEvt = !0)
        }
        function ib(a, b) {
            var c = b || 200,
            d, e;
            return function() {
                var b = this,
                g = +new Date,
                f = arguments;
                d && g < d + c ? (clearTimeout(e), e = setTimeout(function() {
                    d = h;
                    a.apply(b, f)
                },
                c)) : d ? (d = g, a.apply(b, f)) : d = g
            }
        }
        function Kb(a, b) {
            if (!a) return 0;
            var c = g("\x3cdiv/\x3e").css("width", Y(a)).appendTo(b || k.body),
            d = c[0].offsetWidth;
            c.remove();
            return d
        }
        function Lb(a, b) {
            var c = a.oScroll;
            if (c.sX || c.sY) c = c.sX ? 0 : c.iBarWidth,
            b.style.width = Y(g(b).outerWidth() - c)
        }
        function wb(a, b) {
            var c = xb(a, b);
            if (0 > c) return null;
            var d = a.aoData[c];
            return d.nTr ? d.anCells[b] : g("\x3ctd/\x3e").html(C(a, c, b, "display"))[0]
        }
        function xb(a, b) {
            for (var c, d = -1,
            e = -1,
            g = 0,
            f = a.aoData.length; g < f; g++) c = C(a, g, b, "display") + "",
            c = c.replace(Vb, ""),
            c.length > d && (d = c.length, e = g);
            return e
        }
        function Y(a) {
            return null === a ? "0px": "number" == typeof a ? 0 > a ? "0px": a + "px": a.match(/\d$/) ? a + "px": a
        }
        function yb() {
            if (!F.__scrollbarWidth) {
                var a = g("\x3cp/\x3e").css({
                    width: "100%",
                    height: 200,
                    padding: 0
                })[0],
                b = g("\x3cdiv/\x3e").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 200,
                    height: 150,
                    padding: 0,
                    overflow: "hidden",
                    visibility: "hidden"
                }).append(a).appendTo("body"),
                c = a.offsetWidth;
                b.css("overflow", "scroll");
                a = a.offsetWidth;
                c === a && (a = b[0].clientWidth);
                b.remove();
                F.__scrollbarWidth = c - a
            }
            return F.__scrollbarWidth
        }
        function Va(a) {
            var b, c, d = [],
            e = a.aoColumns,
            f,
            h,
            k,
            l;
            b = a.aaSortingFixed;
            c = g.isPlainObject(b);
            var n = [];
            f = function(a) {
                a.length && !g.isArray(a[0]) ? n.push(a) : n.push.apply(n, a)
            };
            g.isArray(b) && f(b);
            c && b.pre && f(b.pre);
            f(a.aaSorting);
            c && b.post && f(b.post);
            for (a = 0; a < n.length; a++) for (l = n[a][0], f = e[l].aDataSort, b = 0, c = f.length; b < c; b++) h = f[b],
            k = e[h].sType || "string",
            d.push({
                src: l,
                col: h,
                dir: n[a][1],
                index: n[a][2],
                type: k,
                formatter: F.ext.type.order[k + "-pre"]
            });
            return d
        }
        function Mb(a) {
            var b, c, d = [],
            g = F.ext.type.order,
            f = a.aoData,
            h = 0,
            k,
            l = a.aiDisplayMaster,
            n;
            e(a);
            n = Va(a);
            b = 0;
            for (c = n.length; b < c; b++) k = n[b],
            k.formatter && h++,
            Aa(a, k.col);
            if ("ssp" != na(a) && 0 !== n.length) {
                b = 0;
                for (c = l.length; b < c; b++) d[l[b]] = b;
                h === n.length ? l.sort(function(a, b) {
                    var c, e, g, h, k = n.length,
                    r = f[a]._aSortData,
                    l = f[b]._aSortData;
                    for (g = 0; g < k; g++) if (h = n[g], c = r[h.col], e = l[h.col], c = c < e ? -1 : c > e ? 1 : 0, 0 !== c) return "asc" === h.dir ? c: -c;
                    c = d[a];
                    e = d[b];
                    return c < e ? -1 : c > e ? 1 : 0
                }) : l.sort(function(a, b) {
                    var c, e, h, k, r = n.length,
                    l = f[a]._aSortData,
                    m = f[b]._aSortData;
                    for (h = 0; h < r; h++) if (k = n[h], c = l[k.col], e = m[k.col], k = g[k.type + "-" + k.dir] || g["string-" + k.dir], c = k(c, e), 0 !== c) return c;
                    c = d[a];
                    e = d[b];
                    return c < e ? -1 : c > e ? 1 : 0
                })
            }
            a.bSorted = !0
        }
        function Nb(a) {
            var b, c, d = a.aoColumns,
            e = Va(a);
            a = a.oLanguage.oAria;
            for (var g = 0,
            f = d.length; g < f; g++) {
                c = d[g];
                var h = c.asSorting;
                b = c.sTitle.replace(/<.*?>/g, "");
                var k = c.nTh;
                k.removeAttribute("aria-sort");
                c.bSortable && (0 < e.length && e[0].col == g ? (k.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending": "descending"), c = h[e[0].index + 1] || h[0]) : c = h[0], b += "asc" === c ? a.sSortAscending: a.sSortDescending);
                k.setAttribute("aria-label", b)
            }
        }
        function jb(a, b, c, d) {
            var e = a.aaSorting,
            f = a.aoColumns[b].asSorting,
            k = function(a) {
                var b = a._idx;
                b === h && (b = g.inArray(a[1], f));
                return b + 1 >= f.length ? 0 : b + 1
            };
            "number" === typeof e[0] && (e = a.aaSorting = [e]);
            c && a.oFeatures.bSortMulti ? (c = g.inArray(b, Ba(e, "0")), -1 !== c ? (b = k(e[c]), e[c][1] = f[b], e[c]._idx = b) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = k(e[0]), e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0);
            M(a);
            "function" == typeof d && d(a)
        }
        function sb(a, b, c, d) {
            var e = a.aoColumns[c];
            ub(b, {},
            function(b) { ! 1 !== e.bSortable && (a.oFeatures.bProcessing ? (za(a, !0), setTimeout(function() {
                    jb(a, c, b.shiftKey, d);
                    "ssp" !== na(a) && za(a, !1)
                },
                0)) : jb(a, c, b.shiftKey, d))
            })
        }
        function kb(a) {
            var b = a.aLastSort,
            c = a.oClasses.sSortColumn,
            d = Va(a),
            e = a.oFeatures,
            f,
            h;
            if (e.bSort && e.bSortClasses) {
                e = 0;
                for (f = b.length; e < f; e++) h = b[e].src,
                g(Ba(a.aoData, "anCells", h)).removeClass(c + (2 > e ? e + 1 : 3));
                e = 0;
                for (f = d.length; e < f; e++) h = d[e].src,
                g(Ba(a.aoData, "anCells", h)).addClass(c + (2 > e ? e + 1 : 3))
            }
            a.aLastSort = d
        }
        function Aa(b, c) {
            var d = b.aoColumns[c],
            e = F.ext.order[d.sSortDataType],
            g;
            e && (g = e.call(b.oInstance, b, c, a(b, c)));
            for (var f, h = F.ext.type.order[d.sType + "-pre"], k = 0, l = b.aoData.length; k < l; k++) if (d = b.aoData[k], d._aSortData || (d._aSortData = []), !d._aSortData[c] || e) f = e ? g[k] : C(b, k, c, "sort"),
            d._aSortData[c] = h ? h(f) : f
        }
        function Ra(a) {
            if (a.oFeatures.bStateSave && !a.bDestroying) {
                var b = {
                    time: +new Date,
                    start: a._iDisplayStart,
                    length: a._iDisplayLength,
                    order: g.extend(!0, [], a.aaSorting),
                    search: vb(a.oPreviousSearch),
                    columns: g.map(a.aoColumns,
                    function(b, c) {
                        return {
                            visible: b.bVisible,
                            search: vb(a.aoPreSearchCols[c])
                        }
                    })
                };
                ja(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
                a.oSavedState = b;
                a.fnStateSaveCallback.call(a.oInstance, a, b)
            }
        }
        function tb(a) {
            var b, c, d = a.aoColumns;
            if (a.oFeatures.bStateSave) {
                var e = a.fnStateLoadCallback.call(a.oInstance, a);
                if (e && e.time && (b = ja(a, "aoStateLoadParams", "stateLoadParams", [a, e]), -1 === g.inArray(!1, b) && (b = a.iStateDuration, !(0 < b && e.time < +new Date - 1E3 * b) && d.length === e.columns.length))) {
                    a.oLoadedState = g.extend(!0, {},
                    e);
                    a._iDisplayStart = e.start;
                    a.iInitDisplayStart = e.start;
                    a._iDisplayLength = e.length;
                    a.aaSorting = [];
                    g.each(e.order,
                    function(b, c) {
                        a.aaSorting.push(c[0] >= d.length ? [0, c[1]] : c)
                    });
                    g.extend(a.oPreviousSearch, Gb(e.search));
                    b = 0;
                    for (c = e.columns.length; b < c; b++) {
                        var f = e.columns[b];
                        d[b].bVisible = f.visible;
                        g.extend(a.aoPreSearchCols[b], Gb(f.search))
                    }
                    ja(a, "aoStateLoaded", "stateLoaded", [a, e])
                }
            }
        }
        function Za(a) {
            var b = F.settings;
            a = g.inArray(a, Ba(b, "nTable"));
            return - 1 !== a ? b[a] : null
        }
        function Ma(a, c, d, e) {
            d = "DataTables warning: " + (null !== a ? "table id\x3d" + a.sTableId + " - ": "") + d;
            e && (d += ". For more information about this error, please see http://datatables.net/tn/" + e);
            if (c) b.console && console.log && console.log(d);
            else if (a = F.ext, "alert" == (a.sErrMode || a.errMode)) alert(d);
            else throw Error(d);
        }
        function xa(a, b, c, d) {
            g.isArray(c) ? g.each(c,
            function(c, d) {
                g.isArray(d) ? xa(a, b, d[0], d[1]) : xa(a, b, d)
            }) : (d === h && (d = c), b[c] !== h && (a[d] = b[c]))
        }
        function Ob(a, b, c) {
            var d, e;
            for (e in b) b.hasOwnProperty(e) && (d = b[e], g.isPlainObject(d) ? (g.isPlainObject(a[e]) || (a[e] = {}), g.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !== e && g.isArray(d) ? d.slice() : d);
            return a
        }
        function ub(a, b, c) {
            g(a).bind("click.DT", b,
            function(b) {
                a.blur();
                c(b)
            }).bind("keypress.DT", b,
            function(a) {
                13 === a.which && (a.preventDefault(), c(a))
            }).bind("selectstart.DT",
            function() {
                return ! 1
            })
        }
        function wa(a, b, c, d) {
            c && a[b].push({
                fn: c,
                sName: d
            })
        }
        function ja(a, b, c, d) {
            var e = [];
            b && (e = g.map(a[b].slice().reverse(),
            function(b) {
                return b.fn.apply(a.oInstance, d)
            }));
            null !== c && g(a.nTable).trigger(c + ".dt", d);
            return e
        }
        function lb(a) {
            var b = a._iDisplayStart,
            c = a.fnDisplayEnd(),
            d = a._iDisplayLength;
            c === a.fnRecordsDisplay() && (b = c - d);
            if ( - 1 === d || 0 > b) b = 0;
            a._iDisplayStart = b
        }
        function gb(a, b) {
            var c = a.renderer,
            d = F.ext.renderer[b];
            return g.isPlainObject(c) && c[b] ? d[c[b]] || d._: "string" === typeof c ? d[c] || d._: d._
        }
        function na(a) {
            return a.oFeatures.bServerSide ? "ssp": a.ajax || a.sAjaxSource ? "ajax": "dom"
        }
        function Wa(a, b) {
            var c = [],
            c = Yb.numbers_length,
            d = Math.floor(c / 2);
            b <= c ? c = Na(0, b) : a <= d ? (c = Na(0, c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = Na(b - (c - 2), b) : (c = Na(a - 1, a + 2), c.push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0));
            c.DT_el = "span";
            return c
        }
        function Pb(a) {
            g.each({
                num: function(b) {
                    return Ib(b, a)
                },
                "num-fmt": function(b) {
                    return Ib(b, a, Ha)
                },
                "html-num": function(b) {
                    return Ib(b, a, nb)
                },
                "html-num-fmt": function(b) {
                    return Ib(b, a, nb, Ha)
                }
            },
            function(b, c) {
                ia.type.order[b + a + "-pre"] = c
            })
        }
        function zb(a) {
            return function() {
                var b = [Za(this[F.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
                return F.ext.internal[a].apply(this, b)
            }
        }
        var F, ia, X, P, da, Ab = {},
        mb = /[\r\n]/g,
        nb = /<.*?>/g,
        Bb = /^[\w\+\-]/,
        Cb = /[\w\+\-]$/,
        Ta = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),
        Ha = /[',$\u00a3\u20ac\u00a5%\u2009\u202F]/g,
        Ka = function(a) {
            return a && !0 !== a && "-" !== a ? !1 : !0
        },
        Db = function(a) {
            var b = parseInt(a, 10);
            return ! isNaN(b) && isFinite(a) ? b: null
        },
        Qb = function(a, b) {
            Ab[b] || (Ab[b] = RegExp(Fa(b), "g"));
            return "string" === typeof a ? a.replace(/\./g, "").replace(Ab[b], ".") : a
        },
        Eb = function(a, b, c) {
            var d = "string" === typeof a;
            b && d && (a = Qb(a, b));
            c && d && (a = a.replace(Ha, ""));
            return Ka(a) || !isNaN(parseFloat(a)) && isFinite(a)
        },
        Rb = function(a, b, c) {
            return Ka(a) ? !0 : Ka(a) || "string" === typeof a ? Eb(a.replace(nb, ""), b, c) ? !0 : null: null
        },
        Ba = function(a, b, c) {
            var d = [],
            e = 0,
            g = a.length;
            if (c !== h) for (; e < g; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
            else for (; e < g; e++) a[e] && d.push(a[e][b]);
            return d
        },
        bb = function(a, b, c, d) {
            var e = [],
            g = 0,
            f = b.length;
            if (d !== h) for (; g < f; g++) e.push(a[b[g]][c][d]);
            else for (; g < f; g++) e.push(a[b[g]][c]);
            return e
        },
        Na = function(a, b) {
            var c = [],
            d;
            b === h ? (b = 0, d = a) : (d = b, b = a);
            for (var e = b; e < d; e++) c.push(e);
            return c
        },
        ob = function(a) {
            var b = [],
            c,
            d,
            e = a.length,
            g,
            f = 0;
            d = 0;
            a: for (; d < e; d++) {
                c = a[d];
                for (g = 0; g < f; g++) if (b[g] === c) continue a;
                b.push(c);
                f++
            }
            return b
        },
        Ca = function(a, b, c) {
            a[b] !== h && (a[c] = a[b])
        },
        cb = /\[.*?\]$/,
        Ua = /\(\)$/,
        db = g("\x3cdiv\x3e")[0],
        Ub = db.textContent !== h,
        Vb = /<.*?>/g;
        F = function(a) {
            this.$ = function(a, b) {
                return this.api(!0).$(a, b)
            };
            this._ = function(a, b) {
                return this.api(!0).rows(a, b).data()
            };
            this.api = function(a) {
                return a ? new X(Za(this[ia.iApiIndex])) : new X(this)
            };
            this.fnAddData = function(a, b) {
                var c = this.api(!0),
                d = g.isArray(a) && (g.isArray(a[0]) || g.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a); (b === h || b) && c.draw();
                return d.flatten().toArray()
            };
            this.fnAdjustColumnSizing = function(a) {
                var b = this.api(!0).columns.adjust(),
                c = b.settings()[0],
                d = c.oScroll;
                a === h || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && Qa(c)
            };
            this.fnClearTable = function(a) {
                var b = this.api(!0).clear(); (a === h || a) && b.draw()
            };
            this.fnClose = function(a) {
                this.api(!0).row(a).child.hide()
            };
            this.fnDeleteRow = function(a, b, c) {
                var d = this.api(!0);
                a = d.rows(a);
                var e = a.settings()[0],
                g = e.aoData[a[0][0]];
                a.remove();
                b && b.call(this, e, g); (c === h || c) && d.draw();
                return g
            };
            this.fnDestroy = function(a) {
                this.api(!0).destroy(a)
            };
            this.fnDraw = function(a) {
                this.api(!0).draw(!a)
            };
            this.fnFilter = function(a, b, c, d, e, g) {
                e = this.api(!0);
                null === b || b === h ? e.search(a, c, d, g) : e.column(b).search(a, c, d, g);
                e.draw()
            };
            this.fnGetData = function(a, b) {
                var c = this.api(!0);
                if (a !== h) {
                    var d = a.nodeName ? a.nodeName.toLowerCase() : "";
                    return b !== h || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null
                }
                return c.data().toArray()
            };
            this.fnGetNodes = function(a) {
                var b = this.api(!0);
                return a !== h ? b.row(a).node() : b.rows().nodes().flatten().toArray()
            };
            this.fnGetPosition = function(a) {
                var b = this.api(!0),
                c = a.nodeName.toUpperCase();
                return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null
            };
            this.fnIsOpen = function(a) {
                return this.api(!0).row(a).child.isShown()
            };
            this.fnOpen = function(a, b, c) {
                return this.api(!0).row(a).child(b, c).show().child()[0]
            };
            this.fnPageChange = function(a, b) {
                var c = this.api(!0).page(a); (b === h || b) && c.draw(!1)
            };
            this.fnSetColumnVis = function(a, b, c) {
                a = this.api(!0).column(a).visible(b); (c === h || c) && a.columns.adjust().draw()
            };
            this.fnSettings = function() {
                return Za(this[ia.iApiIndex])
            };
            this.fnSort = function(a) {
                this.api(!0).order(a).draw()
            };
            this.fnSortListener = function(a, b, c) {
                this.api(!0).order.listener(a, b, c)
            };
            this.fnUpdate = function(a, b, c, d, e) {
                var g = this.api(!0);
                c === h || null === c ? g.row(b).data(a) : g.cell(b, c).data(a); (e === h || e) && g.columns.adjust(); (d === h || d) && g.draw();
                return 0
            };
            this.fnVersionCheck = ia.fnVersionCheck;
            var b = this,
            c = a === h,
            d = this.length;
            c && (a = {});
            this.oApi = this.internal = ia.internal;
            for (var e in F.ext.internal) e && (this[e] = zb(e));
            this.each(function() {
                var e = {},
                k = 1 < d ? Ob(e, a, !0) : a,
                l = 0,
                m,
                p = this.getAttribute("id"),
                e = !1,
                B = F.defaults;
                if ("table" != this.nodeName.toLowerCase()) Ma(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                else {
                    t(B);
                    A(B.column);
                    q(B, B, !0);
                    q(B.column, B.column, !0);
                    q(B, k);
                    var y = F.settings,
                    l = 0;
                    for (m = y.length; l < m; l++) {
                        if (y[l].nTable == this) {
                            m = k.bRetrieve !== h ? k.bRetrieve: B.bRetrieve;
                            if (c || m) return y[l].oInstance;
                            if (k.bDestroy !== h ? k.bDestroy: B.bDestroy) {
                                y[l].oInstance.fnDestroy();
                                break
                            } else {
                                Ma(y[l], 0, "Cannot reinitialise DataTable", 3);
                                return
                            }
                        }
                        if (y[l].sTableId == this.id) {
                            y.splice(l, 1);
                            break
                        }
                    }
                    if (null === p || "" === p) this.id = p = "DataTables_Table_" + F.ext._unique++;
                    var u = g.extend(!0, {},
                    F.models.oSettings, {
                        nTable: this,
                        oApi: b.internal,
                        oInit: k,
                        sDestroyWidth: g(this)[0].style.width,
                        sInstance: p,
                        sTableId: p
                    });
                    y.push(u);
                    u.oInstance = 1 === b.length ? b: g(this).dataTable();
                    t(k);
                    k.oLanguage && s(k.oLanguage);
                    k.aLengthMenu && !k.iDisplayLength && (k.iDisplayLength = g.isArray(k.aLengthMenu[0]) ? k.aLengthMenu[0][0] : k.aLengthMenu[0]);
                    k = Ob(g.extend(!0, {},
                    B), k);
                    xa(u.oFeatures, k, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
                    xa(u, k, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"], ["bJQueryUI", "bJUI"]]);
                    xa(u.oScroll, k, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]);
                    xa(u.oLanguage, k, "fnInfoCallback");
                    wa(u, "aoDrawCallback", k.fnDrawCallback, "user");
                    wa(u, "aoServerParams", k.fnServerParams, "user");
                    wa(u, "aoStateSaveParams", k.fnStateSaveParams, "user");
                    wa(u, "aoStateLoadParams", k.fnStateLoadParams, "user");
                    wa(u, "aoStateLoaded", k.fnStateLoaded, "user");
                    wa(u, "aoRowCallback", k.fnRowCallback, "user");
                    wa(u, "aoRowCreatedCallback", k.fnCreatedRow, "user");
                    wa(u, "aoHeaderCallback", k.fnHeaderCallback, "user");
                    wa(u, "aoFooterCallback", k.fnFooterCallback, "user");
                    wa(u, "aoInitComplete", k.fnInitComplete, "user");
                    wa(u, "aoPreDrawCallback", k.fnPreDrawCallback, "user");
                    p = u.oClasses;
                    k.bJQueryUI ? (g.extend(p, F.ext.oJUIClasses, k.oClasses), k.sDom === B.sDom && "lfrtip" === B.sDom && (u.sDom = '\x3c"H"lfr\x3et\x3c"F"ip\x3e'), u.renderer) ? g.isPlainObject(u.renderer) && !u.renderer.header && (u.renderer.header = "jqueryui") : u.renderer = "jqueryui": g.extend(p, F.ext.classes, k.oClasses);
                    g(this).addClass(p.sTable);
                    if ("" !== u.oScroll.sX || "" !== u.oScroll.sY) u.oScroll.iBarWidth = yb(); ! 0 === u.oScroll.sX && (u.oScroll.sX = "100%");
                    u.iInitDisplayStart === h && (u.iInitDisplayStart = k.iDisplayStart, u._iDisplayStart = k.iDisplayStart);
                    null !== k.iDeferLoading && (u.bDeferLoading = !0, l = g.isArray(k.iDeferLoading), u._iRecordsDisplay = l ? k.iDeferLoading[0] : k.iDeferLoading, u._iRecordsTotal = l ? k.iDeferLoading[1] : k.iDeferLoading);
                    "" !== k.oLanguage.sUrl ? (u.oLanguage.sUrl = k.oLanguage.sUrl, g.getJSON(u.oLanguage.sUrl, null,
                    function(a) {
                        s(a);
                        q(B.oLanguage, a);
                        g.extend(!0, u.oLanguage, k.oLanguage, a);
                        hb(u)
                    }), e = !0) : g.extend(!0, u.oLanguage, k.oLanguage);
                    null === k.asStripeClasses && (u.asStripeClasses = [p.sStripeOdd, p.sStripeEven]);
                    var l = u.asStripeClasses,
                    J = g("tbody tr:eq(0)", this); - 1 !== g.inArray(!0, g.map(l,
                    function(a) {
                        return J.hasClass(a)
                    })) && (g("tbody tr", this).removeClass(l.join(" ")), u.asDestroyStripes = l.slice());
                    var y = [],
                    N,
                    l = this.getElementsByTagName("thead");
                    0 !== l.length && (Ga(u.aoHeader, l[0]), y = ua(u));
                    if (null === k.aoColumns) for (N = [], l = 0, m = y.length; l < m; l++) N.push(null);
                    else N = k.aoColumns;
                    l = 0;
                    for (m = N.length; l < m; l++) x(u, y ? y[l] : null);
                    f(u, k.aoColumnDefs, N,
                    function(a, b) {
                        U(u, a, b)
                    });
                    if (J.length) {
                        var E = function(a, b) {
                            return a.getAttribute("data-" + b) ? b: null
                        };
                        g.each(Z(u, J[0]).cells,
                        function(a, b) {
                            var c = u.aoColumns[a];
                            if (c.mData === a) {
                                var d = E(b, "sort") || E(b, "order"),
                                e = E(b, "filter") || E(b, "search");
                                if (null !== d || null !== e) c.mData = {
                                    _: a + ".display",
                                    sort: null !== d ? a + ".@data-" + d: h,
                                    type: null !== d ? a + ".@data-" + d: h,
                                    filter: null !== e ? a + ".@data-" + e: h
                                },
                                U(u, a)
                            }
                        })
                    }
                    var M = u.oFeatures;
                    k.bStateSave && (M.bStateSave = !0, tb(u, k), wa(u, "aoDrawCallback", Ra, "state_save"));
                    if (k.aaSorting === h) for (y = u.aaSorting, l = 0, m = y.length; l < m; l++) y[l][1] = u.aoColumns[l].asSorting[0];
                    kb(u);
                    M.bSort && wa(u, "aoDrawCallback",
                    function() {
                        if (u.bSorted) {
                            var a = Va(u),
                            b = {};
                            g.each(a,
                            function(a, c) {
                                b[c.src] = c.dir
                            });
                            ja(u, null, "order", [u, a, b]);
                            Nb(u)
                        }
                    });
                    wa(u, "aoDrawCallback",
                    function() { (u.bSorted || "ssp" === na(u) || M.bDeferRender) && kb(u)
                    },
                    "sc");
                    w(u);
                    l = g(this).children("caption").each(function() {
                        this._captionSide = g(this).css("caption-side")
                    });
                    m = g(this).children("thead");
                    0 === m.length && (m = g("\x3cthead/\x3e").appendTo(this));
                    u.nTHead = m[0];
                    m = g(this).children("tbody");
                    0 === m.length && (m = g("\x3ctbody/\x3e").appendTo(this));
                    u.nTBody = m[0];
                    m = g(this).children("tfoot");
                    0 === m.length && 0 < l.length && ("" !== u.oScroll.sX || "" !== u.oScroll.sY) && (m = g("\x3ctfoot/\x3e").appendTo(this));
                    0 === m.length || 0 === m.children().length ? g(this).addClass(p.sNoFooter) : 0 < m.length && (u.nTFoot = m[0], Ga(u.aoFooter, u.nTFoot));
                    if (k.aaData) for (l = 0; l < k.aaData.length; l++) n(u, k.aaData[l]);
                    else(u.bDeferLoading || "dom" == na(u)) && O(u, g(u.nTBody).children("tr"));
                    u.aiDisplay = u.aiDisplayMaster.slice();
                    u.bInitialised = !0; ! 1 === e && hb(u)
                }
            });
            b = null;
            return this
        };
        var Sb = [],
        ka = Array.prototype,
        Wb = function(a) {
            var b, c, d = F.settings,
            e = g.map(d,
            function(a) {
                return a.nTable
            });
            if (a) {
                if (a.nTable && a.oApi) return [a];
                if (a.nodeName && "table" === a.nodeName.toLowerCase()) return b = g.inArray(a, e),
                -1 !== b ? [d[b]] : null;
                if (a && "function" === typeof a.settings) return a.settings().toArray();
                "string" === typeof a ? c = g(a) : a instanceof g && (c = a)
            } else return [];
            if (c) return c.map(function() {
                b = g.inArray(this, e);
                return - 1 !== b ? d[b] : null
            }).toArray()
        };
        X = function(a, b) {
            if (!this instanceof X) throw "DT API must be constructed as a new object";
            var c = [],
            d = function(a) { (a = Wb(a)) && c.push.apply(c, a)
            };
            if (g.isArray(a)) for (var e = 0,
            f = a.length; e < f; e++) d(a[e]);
            else d(a);
            this.context = ob(c);
            b && this.push.apply(this, b.toArray ? b.toArray() : b);
            this.selector = {
                rows: null,
                cols: null,
                opts: null
            };
            X.extend(this, this, Sb)
        };
        F.Api = X;
        X.prototype = {
            concat: ka.concat,
            context: [],
            each: function(a) {
                for (var b = 0,
                c = this.length; b < c; b++) a.call(this, this[b], b, this);
                return this
            },
            eq: function(a) {
                var b = this.context;
                return b.length > a ? new X(b[a], this[a]) : null
            },
            filter: function(a) {
                var b = [];
                if (ka.filter) b = ka.filter.call(this, a, this);
                else for (var c = 0,
                d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]);
                return new X(this.context, b)
            },
            flatten: function() {
                var a = [];
                return new X(this.context, a.concat.apply(a, this.toArray()))
            },
            join: ka.join,
            indexOf: ka.indexOf ||
            function(a, b) {
                for (var c = b || 0,
                d = this.length; c < d; c++) if (this[c] === a) return c;
                return - 1
            },
            iterator: function(a, b, c) {
                var d = [],
                e,
                g,
                f,
                k,
                l,
                n = this.context,
                m,
                p,
                q = this.selector;
                "string" === typeof a && (c = b, b = a, a = !1);
                g = 0;
                for (f = n.length; g < f; g++) if ("table" === b) e = c(n[g], g),
                e !== h && d.push(e);
                else if ("columns" === b || "rows" === b) e = c(n[g], this[g], g),
                e !== h && d.push(e);
                else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) for (p = this[g], "column-rows" === b && (m = rb(n[g], q.opts)), k = 0, l = p.length; k < l; k++) e = p[k],
                e = "cell" === b ? c(n[g], e.row, e.column, g, k) : c(n[g], e, g, k, m),
                e !== h && d.push(e);
                return d.length ? (a = new X(n, a ? d.concat.apply([], d) : d), b = a.selector, b.rows = q.rows, b.cols = q.cols, b.opts = q.opts, a) : this
            },
            lastIndexOf: ka.lastIndexOf ||
            function(a, b) {
                return this.indexOf.apply(this.toArray.reverse(), arguments)
            },
            length: 0,
            map: function(a) {
                var b = [];
                if (ka.map) b = ka.map.call(this, a, this);
                else for (var c = 0,
                d = this.length; c < d; c++) b.push(a.call(this, this[c], c));
                return new X(this.context, b)
            },
            pluck: function(a) {
                return this.map(function(b) {
                    return b[a]
                })
            },
            pop: ka.pop,
            push: ka.push,
            reduce: ka.reduce ||
            function(a, b) {
                return u(this, a, b, 0, this.length, 1)
            },
            reduceRight: ka.reduceRight ||
            function(a, b) {
                return u(this, a, b, this.length - 1, -1, -1)
            },
            reverse: ka.reverse,
            selector: null,
            shift: ka.shift,
            sort: ka.sort,
            splice: ka.splice,
            toArray: function() {
                return ka.slice.call(this)
            },
            to$: function() {
                return g(this)
            },
            toJQuery: function() {
                return g(this)
            },
            unique: function() {
                return new X(this.context, ob(this))
            },
            unshift: ka.unshift
        };
        X.extend = function(a, b, c) {
            if (b && (b instanceof X || b.__dt_wrapper)) {
                var d, e, f, h = function(a, b, c) {
                    return function() {
                        var d = b.apply(a, arguments);
                        X.extend(d, d, c.methodExt);
                        return d
                    }
                };
                d = 0;
                for (e = c.length; d < e; d++) f = c[d],
                b[f.name] = "function" === typeof f.val ? h(a, f.val, f) : g.isPlainObject(f.val) ? {}: f.val,
                b[f.name].__dt_wrapper = !0,
                X.extend(a, b[f.name], f.propExt)
            }
        };
        X.register = P = function(a, b) {
            if (g.isArray(a)) for (var c = 0,
            d = a.length; c < d; c++) X.register(a[c], b);
            else for (var e = a.split("."), f = Sb, h, k, c = 0, d = e.length; c < d; c++) {
                h = (k = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c];
                var l;
                a: {
                    l = 0;
                    for (var n = f.length; l < n; l++) if (f[l].name === h) {
                        l = f[l];
                        break a
                    }
                    l = null
                }
                l || (l = {
                    name: h,
                    val: {},
                    methodExt: [],
                    propExt: []
                },
                f.push(l));
                c === d - 1 ? l.val = b: f = k ? l.methodExt: l.propExt
            }
        };
        X.registerPlural = da = function(a, b, c) {
            X.register(a, c);
            X.register(b,
            function() {
                var a = c.apply(this, arguments);
                return a === this ? this: a instanceof X ? a.length ? g.isArray(a[0]) ? new X(a.context, a[0]) : a[0] : h: a
            })
        };
        P("tables()",
        function(a) {
            var b;
            if (a) {
                b = X;
                var c = this.context;
                if ("number" === typeof a) a = [c[a]];
                else {
                    var d = g.map(c,
                    function(a) {
                        return a.nTable
                    });
                    a = g(d).filter(a).map(function() {
                        var a = g.inArray(this, d);
                        return c[a]
                    }).toArray()
                }
                b = new b(a)
            } else b = this;
            return b
        });
        P("table()",
        function(a) {
            a = this.tables(a);
            var b = a.context;
            return b.length ? new X(b[0]) : a
        });
        da("tables().nodes()", "table().node()",
        function() {
            return this.iterator("table",
            function(a) {
                return a.nTable
            })
        });
        da("tables().body()", "table().body()",
        function() {
            return this.iterator("table",
            function(a) {
                return a.nTBody
            })
        });
        da("tables().header()", "table().header()",
        function() {
            return this.iterator("table",
            function(a) {
                return a.nTHead
            })
        });
        da("tables().footer()", "table().footer()",
        function() {
            return this.iterator("table",
            function(a) {
                return a.nTFoot
            })
        });
        da("tables().containers()", "table().container()",
        function() {
            return this.iterator("table",
            function(a) {
                return a.nTableWrapper
            })
        });
        P("draw()",
        function(a) {
            return this.iterator("table",
            function(b) {
                M(b, !1 === a)
            })
        });
        P("page()",
        function(a) {
            return a === h ? this.page.info().page: this.iterator("table",
            function(b) {
                S(b, a)
            })
        });
        P("page.info()",
        function() {
            if (0 === this.context.length) return h;
            var a = this.context[0],
            b = a._iDisplayStart,
            c = a._iDisplayLength,
            d = a.fnRecordsDisplay(),
            e = -1 === c;
            return {
                page: e ? 0 : Math.floor(b / c),
                pages: e ? 1 : Math.ceil(d / c),
                start: b,
                end: a.fnDisplayEnd(),
                length: c,
                recordsTotal: a.fnRecordsTotal(),
                recordsDisplay: d
            }
        });
        P("page.len()",
        function(a) {
            return a === h ? 0 !== this.context.length ? this.context[0]._iDisplayLength: h: this.iterator("table",
            function(b) {
                fb(b, a)
            })
        });
        var Xa = function(a, b, c) {
            "ssp" == na(a) ? M(a, b) : (za(a, !0), Ia(a, [],
            function(c) {
                ca(a);
                c = V(a, c);
                for (var d = 0,
                e = c.length; d < e; d++) n(a, c[d]);
                M(a, b);
                za(a, !1)
            }));
            if (c) {
                var d = new X(a);
                d.one("draw",
                function() {
                    c(d.ajax.json())
                })
            }
        };
        P("ajax.json()",
        function() {
            var a = this.context;
            if (0 < a.length) return a[0].json
        });
        P("ajax.params()",
        function() {
            var a = this.context;
            if (0 < a.length) return a[0].oAjaxData
        });
        P("ajax.reload()",
        function(a, b) {
            return this.iterator("table",
            function(c) {
                Xa(c, !1 === b, a)
            })
        });
        P("ajax.url()",
        function(a) {
            var b = this.context;
            if (a === h) {
                if (0 === b.length) return h;
                b = b[0];
                return b.ajax ? g.isPlainObject(b.ajax) ? b.ajax.url: b.ajax: b.sAjaxSource
            }
            return this.iterator("table",
            function(b) {
                g.isPlainObject(b.ajax) ? b.ajax.url = a: b.ajax = a
            })
        });
        P("ajax.url().load()",
        function(a, b) {
            return this.iterator("table",
            function(c) {
                Xa(c, !1 === b, a)
            })
        });
        var pb = function(a, b) {
            var c = [],
            d,
            e,
            f,
            k,
            l,
            n;
            a && "string" !== typeof a && a.length !== h || (a = [a]);
            f = 0;
            for (k = a.length; f < k; f++) for (e = a[f] && a[f].split ? a[f].split(",") : [a[f]], l = 0, n = e.length; l < n; l++)(d = b("string" === typeof e[l] ? g.trim(e[l]) : e[l])) && d.length && c.push.apply(c, d);
            return c
        },
        eb = function(a) {
            a || (a = {});
            a.filter && !a.search && (a.search = a.filter);
            return {
                search: a.search || "none",
                order: a.order || "current",
                page: a.page || "all"
            }
        },
        qb = function(a) {
            for (var b = 0,
            c = a.length; b < c; b++) if (0 < a[b].length) return a[0] = a[b],
            a.length = 1,
            a.context = [a.context[b]],
            a;
            a.length = 0;
            return a
        },
        rb = function(a, b) {
            var c, d, e, f = [],
            h = a.aiDisplay;
            c = a.aiDisplayMaster;
            var k = b.search;
            d = b.order;
            e = b.page;
            if ("ssp" == na(a)) return "removed" === k ? [] : Na(0, c.length);
            if ("current" == e) for (c = a._iDisplayStart, d = a.fnDisplayEnd(); c < d; c++) f.push(h[c]);
            else if ("current" == d || "applied" == d) f = "none" == k ? c.slice() : "applied" == k ? h.slice() : g.map(c,
            function(a) {
                return - 1 === g.inArray(a, h) ? a: null
            });
            else if ("index" == d || "original" == d) for (c = 0, d = a.aoData.length; c < d; c++)"none" == k ? f.push(c) : (e = g.inArray(c, h), ( - 1 === e && "removed" == k || 0 <= e && "applied" == k) && f.push(c));
            return f
        };
        P("rows()",
        function(a, b) {
            a === h ? a = "": g.isPlainObject(a) && (b = a, a = "");
            b = eb(b);
            var c = this.iterator("table",
            function(c) {
                var d = b;
                return pb(a,
                function(a) {
                    var b = Db(a);
                    if (null !== b && !d) return [b];
                    var e = rb(c, d);
                    if (null !== b && -1 !== g.inArray(b, e)) return [b];
                    if (!a) return e;
                    for (var b = [], f = 0, h = e.length; f < h; f++) b.push(c.aoData[e[f]].nTr);
                    return a.nodeName && -1 !== g.inArray(a, b) ? [a._DT_RowIndex] : g(b).filter(a).map(function() {
                        return this._DT_RowIndex
                    }).toArray()
                })
            });
            c.selector.rows = a;
            c.selector.opts = b;
            return c
        });
        P("rows().nodes()",
        function() {
            return this.iterator("row",
            function(a, b) {
                return a.aoData[b].nTr || h
            })
        });
        P("rows().data()",
        function() {
            return this.iterator(!0, "rows",
            function(a, b) {
                return bb(a.aoData, b, "_aData")
            })
        });
        da("rows().cache()", "row().cache()",
        function(a) {
            return this.iterator("row",
            function(b, c) {
                var d = b.aoData[c];
                return "search" === a ? d._aFilterData: d._aSortData
            })
        });
        da("rows().invalidate()", "row().invalidate()",
        function(a) {
            return this.iterator("row",
            function(b, c) {
                fa(b, c, a)
            })
        });
        da("rows().indexes()", "row().index()",
        function() {
            return this.iterator("row",
            function(a, b) {
                return b
            })
        });
        da("rows().remove()", "row().remove()",
        function() {
            var a = this;
            return this.iterator("row",
            function(b, c, d) {
                var e = b.aoData;
                e.splice(c, 1);
                for (var f = 0,
                h = e.length; f < h; f++) null !== e[f].nTr && (e[f].nTr._DT_RowIndex = f);
                g.inArray(c, b.aiDisplay);
                E(b.aiDisplayMaster, c);
                E(b.aiDisplay, c);
                E(a[d], c, !1);
                lb(b)
            })
        });
        P("rows.add()",
        function(a) {
            var b = this.iterator("table",
            function(b) {
                var c, d, e, g = [];
                d = 0;
                for (e = a.length; d < e; d++) c = a[d],
                c.nodeName && "TR" === c.nodeName.toUpperCase() ? g.push(O(b, c)[0]) : g.push(n(b, c));
                return g
            }),
            c = this.rows( - 1);
            c.pop();
            c.push.apply(c, b.toArray());
            return c
        });
        P("row()",
        function(a, b) {
            return qb(this.rows(a, b))
        });
        P("row().data()",
        function(a) {
            var b = this.context;
            if (a === h) return b.length && this.length ? b[0].aoData[this[0]]._aData: h;
            b[0].aoData[this[0]]._aData = a;
            fa(b[0], this[0], "data");
            return this
        });
        P("row().node()",
        function() {
            var a = this.context;
            return a.length && this.length ? a[0].aoData[this[0]].nTr || null: null
        });
        P("row.add()",
        function(a) {
            a instanceof g && a.length && (a = a[0]);
            var b = this.iterator("table",
            function(b) {
                return a.nodeName && "TR" === a.nodeName.toUpperCase() ? O(b, a)[0] : n(b, a)
            });
            return this.row(b[0])
        });
        var Fb = function(a) {
            var b = a.context;
            b.length && a.length && (a = b[0].aoData[a[0]], a._details && (a._details.remove(), a._detailsShow = h, a._details = h))
        },
        Tb = function(a, b) {
            var d = a.context;
            if (d.length && a.length) {
                var e = d[0].aoData[a[0]];
                if (e._details) { (e._detailsShow = b) ? e._details.insertAfter(e.nTr) : e._details.detach();
                    var g = d[0],
                    f = new X(g),
                    h = g.aoData;
                    f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
                    0 < Ba(h, "_details").length && (f.on("draw.dt.DT_details",
                    function(a, b) {
                        g === b && f.rows({
                            page: "current"
                        }).eq(0).each(function(a) {
                            a = h[a];
                            a._detailsShow && a._details.insertAfter(a.nTr)
                        })
                    }), f.on("column-visibility.dt.DT_details",
                    function(a, b) {
                        if (g === b) for (var d, e = c(b), f = 0, k = h.length; f < k; f++) d = h[f],
                        d._details && d._details.children("td[colspan]").attr("colspan", e)
                    }), f.on("destroy.dt.DT_details",
                    function(a, b) {
                        if (g === b) for (var c = 0,
                        d = h.length; c < d; c++) h[c]._details && Fb(h[c])
                    }))
                }
            }
        };
        P("row().child()",
        function(a, b) {
            var d = this.context;
            if (a === h) return d.length && this.length ? d[0].aoData[this[0]]._details: h;
            if (!0 === a) this.child.show();
            else if (!1 === a) Fb(this);
            else if (d.length && this.length) {
                var e = d[0],
                d = d[0].aoData[this[0]],
                f = [],
                k = function(a, b) {
                    if (a.nodeName && "tr" === a.nodeName.toLowerCase()) f.push(a);
                    else {
                        var d = g("\x3ctr\x3e\x3ctd/\x3e\x3c/tr\x3e").addClass(b);
                        g("td", d).addClass(b).html(a)[0].colSpan = c(e);
                        f.push(d[0])
                    }
                };
                if (g.isArray(a) || a instanceof g) for (var l = 0,
                n = a.length; l < n; l++) k(a[l], b);
                else k(a, b);
                d._details && d._details.remove();
                d._details = g(f);
                d._detailsShow && d._details.insertAfter(d.nTr)
            }
            return this
        });
        P(["row().child.show()", "row().child().show()"],
        function() {
            Tb(this, !0);
            return this
        });
        P(["row().child.hide()", "row().child().hide()"],
        function() {
            Tb(this, !1);
            return this
        });
        P(["row().child.remove()", "row().child().remove()"],
        function() {
            Fb(this);
            return this
        });
        P("row().child.isShown()",
        function() {
            var a = this.context;
            return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1
        });
        var H = /^(.+):(name|visIdx|visible)$/;
        P("columns()",
        function(a, b) {
            a === h ? a = "": g.isPlainObject(a) && (b = a, a = "");
            b = eb(b);
            var c = this.iterator("table",
            function(b) {
                var c = a,
                d = b.aoColumns,
                e = Ba(d, "sName"),
                f = Ba(d, "nTh");
                return pb(c,
                function(a) {
                    var c = Db(a);
                    if ("" === a) return Na(d.length);
                    if (null !== c) return [0 <= c ? c: d.length + c];
                    var h = "string" === typeof a ? a.match(H) : "";
                    if (h) switch (h[2]) {
                    case "visIdx":
                    case "visible":
                        return a = parseInt(h[1], 10),
                        0 > a ? (c = g.map(d,
                        function(a, b) {
                            return a.bVisible ? b: null
                        }), [c[c.length + a]]) : [R(b, a)];
                    case "name":
                        return g.map(e,
                        function(a, b) {
                            return a === h[1] ? b: null
                        })
                    } else return g(f).filter(a).map(function() {
                        return g.inArray(this, f)
                    }).toArray()
                })
            });
            c.selector.cols = a;
            c.selector.opts = b;
            return c
        });
        da("columns().header()", "column().header()",
        function() {
            return this.iterator("column",
            function(a, b) {
                return a.aoColumns[b].nTh
            })
        });
        da("columns().footer()", "column().footer()",
        function() {
            return this.iterator("column",
            function(a, b) {
                return a.aoColumns[b].nTf
            })
        });
        da("columns().data()", "column().data()",
        function() {
            return this.iterator("column-rows",
            function(a, b, c, d, e) {
                c = [];
                d = 0;
                for (var g = e.length; d < g; d++) c.push(C(a, e[d], b, ""));
                return c
            })
        });
        da("columns().cache()", "column().cache()",
        function(a) {
            return this.iterator("column-rows",
            function(b, c, d, e, g) {
                return bb(b.aoData, g, "search" === a ? "_aFilterData": "_aSortData", c)
            })
        });
        da("columns().nodes()", "column().nodes()",
        function() {
            return this.iterator("column-rows",
            function(a, b, c, d, e) {
                return bb(a.aoData, e, "anCells", b)
            })
        });
        da("columns().visible()", "column().visible()",
        function(a, b) {
            return this.iterator("column",
            function(c, d) {
                var e;
                if (a === h) e = c.aoColumns[d].bVisible;
                else {
                    var f = c.aoColumns;
                    e = f[d];
                    var k = c.aoData,
                    l, n, m;
                    if (a === h) e = e.bVisible;
                    else {
                        if (e.bVisible !== a) {
                            if (a) {
                                var p = g.inArray(!0, Ba(f, "bVisible"), d + 1);
                                l = 0;
                                for (n = k.length; l < n; l++) m = k[l].nTr,
                                f = k[l].anCells,
                                m && m.insertBefore(f[d], f[p] || null)
                            } else g(Ba(c.aoData, "anCells", d)).detach();
                            e.bVisible = a;
                            J(c, c.aoHeader);
                            J(c, c.aoFooter);
                            if (b === h || b) I(c),
                            (c.oScroll.sX || c.oScroll.sY) && Qa(c);
                            ja(c, null, "column-visibility", [c, d, a]);
                            Ra(c)
                        }
                        e = void 0
                    }
                }
                return e
            })
        });
        da("columns().indexes()", "column().index()",
        function(b) {
            return this.iterator("column",
            function(c, d) {
                return "visible" === b ? a(c, d) : d
            })
        });
        P("columns.adjust()",
        function() {
            return this.iterator("table",
            function(a) {
                I(a)
            })
        });
        P("column.index()",
        function(b, c) {
            if (0 !== this.context.length) {
                var d = this.context[0];
                if ("fromVisible" === b || "toData" === b) return R(d, c);
                if ("fromData" === b || "toVisible" === b) return a(d, c)
            }
        });
        P("column()",
        function(a, b) {
            return qb(this.columns(a, b))
        });
        P("cells()",
        function(a, b, c) {
            g.isPlainObject(a) && (typeof a.row !== h ? (c = b, b = null) : (c = a, a = null));
            g.isPlainObject(b) && (c = b, b = null);
            if (null === b || b === h) return this.iterator("table",
            function(b) {
                var d = a,
                e = eb(c),
                f = b.aoData,
                k = rb(b, e),
                e = bb(f, k, "anCells"),
                l = g([].concat.apply([], e)),
                n,
                m = b.aoColumns.length,
                p,
                q,
                s,
                u;
                return pb(d,
                function(a) {
                    if (null === a || a === h) {
                        p = [];
                        q = 0;
                        for (s = k.length; q < s; q++) for (n = k[q], u = 0; u < m; u++) p.push({
                            row: n,
                            column: u
                        });
                        return p
                    }
                    return g.isPlainObject(a) ? [a] : l.filter(a).map(function(a, b) {
                        n = b.parentNode._DT_RowIndex;
                        return {
                            row: n,
                            column: g.inArray(b, f[n].anCells)
                        }
                    }).toArray()
                })
            });
            var d = this.columns(b, c),
            e = this.rows(a, c),
            f,
            k,
            l,
            n,
            m,
            p = this.iterator("table",
            function(a, b) {
                f = [];
                k = 0;
                for (l = e[b].length; k < l; k++) for (n = 0, m = d[b].length; n < m; n++) f.push({
                    row: e[b][k],
                    column: d[b][n]
                });
                return f
            });
            g.extend(p.selector, {
                cols: b,
                rows: a,
                opts: c
            });
            return p
        });
        da("cells().nodes()", "cell().node()",
        function() {
            return this.iterator("cell",
            function(a, b, c) {
                return a.aoData[b].anCells[c]
            })
        });
        P("cells().data()",
        function() {
            return this.iterator("cell",
            function(a, b, c) {
                return C(a, b, c)
            })
        });
        da("cells().cache()", "cell().cache()",
        function(a) {
            a = "search" === a ? "_aFilterData": "_aSortData";
            return this.iterator("cell",
            function(b, c, d) {
                return b.aoData[c][a][d]
            })
        });
        da("cells().indexes()", "cell().index()",
        function() {
            return this.iterator("cell",
            function(b, c, d) {
                return {
                    row: c,
                    column: d,
                    columnVisible: a(b, d)
                }
            })
        });
        P(["cells().invalidate()", "cell().invalidate()"],
        function(a) {
            var b = this.selector;
            this.rows(b.rows, b.opts).invalidate(a);
            return this
        });
        P("cell()",
        function(a, b, c) {
            return qb(this.cells(a, b, c))
        });
        P("cell().data()",
        function(a) {
            var b = this.context,
            c = this[0];
            if (a === h) return b.length && c.length ? C(b[0], c[0].row, c[0].column) : h;
            z(b[0], c[0].row, c[0].column, a);
            fa(b[0], c[0].row, "data", c[0].column);
            return this
        });
        P("order()",
        function(a, b) {
            var c = this.context;
            if (a === h) return 0 !== c.length ? c[0].aaSorting: h;
            "number" === typeof a ? a = [[a, b]] : g.isArray(a[0]) || (a = Array.prototype.slice.call(arguments));
            return this.iterator("table",
            function(b) {
                b.aaSorting = a.slice()
            })
        });
        P("order.listener()",
        function(a, b, c) {
            return this.iterator("table",
            function(d) {
                sb(d, a, b, c)
            })
        });
        P(["columns().order()", "column().order()"],
        function(a) {
            var b = this;
            return this.iterator("table",
            function(c, d) {
                var e = [];
                g.each(b[d],
                function(b, c) {
                    e.push([c, a])
                });
                c.aaSorting = e
            })
        });
        P("search()",
        function(a, b, c, d) {
            var e = this.context;
            return a === h ? 0 !== e.length ? e[0].oPreviousSearch.sSearch: h: this.iterator("table",
            function(e) {
                e.oFeatures.bFilter && l(e, g.extend({},
                e.oPreviousSearch, {
                    sSearch: a + "",
                    bRegex: null === b ? !1 : b,
                    bSmart: null === c ? !0 : c,
                    bCaseInsensitive: null === d ? !0 : d
                }), 1)
            })
        });
        da("columns().search()", "column().search()",
        function(a, b, c, d) {
            return this.iterator("column",
            function(e, f) {
                var k = e.aoPreSearchCols;
                if (a === h) return k[f].sSearch;
                e.oFeatures.bFilter && (g.extend(k[f], {
                    sSearch: a + "",
                    bRegex: null === b ? !1 : b,
                    bSmart: null === c ? !0 : c,
                    bCaseInsensitive: null === d ? !0 : d
                }), l(e, e.oPreviousSearch, 1))
            })
        });
        P("state()",
        function() {
            return this.context.length ? this.context[0].oSavedState: null
        });
        P("state.clear()",
        function() {
            return this.iterator("table",
            function(a) {
                a.fnStateSaveCallback.call(a.oInstance, a, {})
            })
        });
        P("state.loaded()",
        function() {
            return this.context.length ? this.context[0].oLoadedState: null
        });
        P("state.save()",
        function() {
            return this.iterator("table",
            function(a) {
                Ra(a)
            })
        });
        F.versionCheck = F.fnVersionCheck = function(a) {
            var b = F.version.split(".");
            a = a.split(".");
            for (var c, d, e = 0,
            f = a.length; e < f; e++) if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d;
            return ! 0
        };
        F.isDataTable = F.fnIsDataTable = function(a) {
            var b = g(a).get(0),
            c = !1;
            g.each(F.settings,
            function(a, d) {
                if (d.nTable === b || d.nScrollHead === b || d.nScrollFoot === b) c = !0
            });
            return c
        };
        F.tables = F.fnTables = function(a) {
            return jQuery.map(F.settings,
            function(b) {
                if (!a || a && g(b.nTable).is(":visible")) return b.nTable
            })
        };
        F.camelToHungarian = q;
        P("$()",
        function(a, b) {
            var c = this.rows(b).nodes(),
            c = g(c);
            return g([].concat(c.filter(a).toArray(), c.find(a).toArray()))
        });
        g.each(["on", "one", "off"],
        function(a, b) {
            P(b + "()",
            function() {
                var a = Array.prototype.slice.call(arguments);
                a[0].match(/\.dt\b/) || (a[0] += ".dt");
                var c = g(this.tables().nodes());
                c[b].apply(c, a);
                return this
            })
        });
        P("clear()",
        function() {
            return this.iterator("table",
            function(a) {
                ca(a)
            })
        });
        P("settings()",
        function() {
            return new X(this.context, this.context)
        });
        P("data()",
        function() {
            return this.iterator("table",
            function(a) {
                return Ba(a.aoData, "_aData")
            }).flatten()
        });
        P("destroy()",
        function(a) {
            a = a || !1;
            return this.iterator("table",
            function(c) {
                var d = c.nTableWrapper.parentNode,
                e = c.oClasses,
                f = c.nTable,
                h = c.nTBody,
                k = c.nTHead,
                l = c.nTFoot,
                n = g(f),
                h = g(h),
                m = g(c.nTableWrapper),
                p = g.map(c.aoData,
                function(a) {
                    return a.nTr
                }),
                q;
                c.bDestroying = !0;
                ja(c, "aoDestroyCallback", "destroy", [c]);
                a || (new X(c)).columns().visible(!0);
                m.unbind(".DT").find(":not(tbody *)").unbind(".DT");
                g(b).unbind(".DT-" + c.sInstance);
                f != k.parentNode && (n.children("thead").detach(), n.append(k));
                l && f != l.parentNode && (n.children("tfoot").detach(), n.append(l));
                n.detach();
                m.detach();
                c.aaSorting = [];
                c.aaSortingFixed = [];
                kb(c);
                g(p).removeClass(c.asStripeClasses.join(" "));
                g("th, td", k).removeClass(e.sSortable + " " + e.sSortableAsc + " " + e.sSortableDesc + " " + e.sSortableNone);
                c.bJUI && (g("th span." + e.sSortIcon + ", td span." + e.sSortIcon, k).detach(), g("th, td", k).each(function() {
                    var a = g("div." + e.sSortJUIWrapper, this);
                    g(this).append(a.contents());
                    a.detach()
                })); ! a && d && d.insertBefore(f, c.nTableReinsertBefore);
                h.children().detach();
                h.append(p);
                n.css("width", c.sDestroyWidth).removeClass(e.sTable); (q = c.asDestroyStripes.length) && h.children().each(function(a) {
                    g(this).addClass(c.asDestroyStripes[a % q])
                });
                d = g.inArray(c, F.settings); - 1 !== d && F.settings.splice(d, 1)
            })
        });
        F.version = "1.10.2";
        F.settings = [];
        F.models = {};
        F.models.oSearch = {
            bCaseInsensitive: !0,
            sSearch: "",
            bRegex: !1,
            bSmart: !0
        };
        F.models.oRow = {
            nTr: null,
            anCells: null,
            _aData: [],
            _aSortData: null,
            _aFilterData: null,
            _sFilterRow: null,
            _sRowStripe: "",
            src: null
        };
        F.models.oColumn = {
            idx: null,
            aDataSort: null,
            asSorting: null,
            bSearchable: null,
            bSortable: null,
            bVisible: null,
            _sManualType: null,
            _bAttrSrc: !1,
            fnCreatedCell: null,
            fnGetData: null,
            fnSetData: null,
            mData: null,
            mRender: null,
            nTh: null,
            nTf: null,
            sClass: null,
            sContentPadding: null,
            sDefaultContent: null,
            sName: null,
            sSortDataType: "std",
            sSortingClass: null,
            sSortingClassJUI: null,
            sTitle: null,
            sType: null,
            sWidth: null,
            sWidthOrig: null
        };
        F.defaults = {
            aaData: null,
            aaSorting: [[0, "asc"]],
            aaSortingFixed: [],
            ajax: null,
            aLengthMenu: [10, 25, 50, 100],
            aoColumns: null,
            aoColumnDefs: null,
            aoSearchCols: [],
            asStripeClasses: null,
            bAutoWidth: !0,
            bDeferRender: !1,
            bDestroy: !1,
            bFilter: !0,
            bInfo: !0,
            bJQueryUI: !1,
            bLengthChange: !0,
            bPaginate: !0,
            bProcessing: !1,
            bRetrieve: !1,
            bScrollCollapse: !1,
            bServerSide: !1,
            bSort: !0,
            bSortMulti: !0,
            bSortCellsTop: !1,
            bSortClasses: !0,
            bStateSave: !1,
            fnCreatedRow: null,
            fnDrawCallback: null,
            fnFooterCallback: null,
            fnFormatNumber: function(a) {
                return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
            },
            fnHeaderCallback: null,
            fnInfoCallback: null,
            fnInitComplete: null,
            fnPreDrawCallback: null,
            fnRowCallback: null,
            fnServerData: null,
            fnServerParams: null,
            fnStateLoadCallback: function(a) {
                try {
                    return JSON.parse(( - 1 === a.iStateDuration ? sessionStorage: localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname))
                } catch(b) {}
            },
            fnStateLoadParams: null,
            fnStateLoaded: null,
            fnStateSaveCallback: function(a, b) {
                try { ( - 1 === a.iStateDuration ? sessionStorage: localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b))
                } catch(c) {}
            },
            fnStateSaveParams: null,
            iStateDuration: 7200,
            iDeferLoading: null,
            iDisplayLength: 10,
            iDisplayStart: 0,
            iTabIndex: 0,
            oClasses: {},
            oLanguage: {
                oAria: {
                    sSortAscending: ": activate to sort column ascending",
                    sSortDescending: ": activate to sort column descending"
                },
                oPaginate: {
                    sFirst: "First",
                    sLast: "Last",
                    sNext: "Next",
                    sPrevious: "Previous"
                },
                sEmptyTable: "No data available in table",
                sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                sInfoEmpty: "Showing 0 to 0 of 0 entries",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sDecimal: "",
                sThousands: ",",
                sLengthMenu: "Show _MENU_ entries",
                sLoadingRecords: "Loading...",
                sProcessing: "Processing...",
                sSearch: "Search:",
                sSearchPlaceholder: "",
                sUrl: "",
                sZeroRecords: "No matching records found"
            },
            oSearch: g.extend({},
            F.models.oSearch),
            sAjaxDataProp: "data",
            sAjaxSource: null,
            sDom: "lfrtip",
            sPaginationType: "simple_numbers",
            sScrollX: "",
            sScrollXInner: "",
            sScrollY: "",
            sServerMethod: "GET",
            renderer: null
        };
        m(F.defaults);
        F.defaults.column = {
            aDataSort: null,
            iDataSort: -1,
            asSorting: ["asc", "desc"],
            bSearchable: !0,
            bSortable: !0,
            bVisible: !0,
            fnCreatedCell: null,
            mData: null,
            mRender: null,
            sCellType: "td",
            sClass: "",
            sContentPadding: "",
            sDefaultContent: null,
            sName: "",
            sSortDataType: "std",
            sTitle: null,
            sType: null,
            sWidth: null
        };
        m(F.defaults.column);
        F.models.oSettings = {
            oFeatures: {
                bAutoWidth: null,
                bDeferRender: null,
                bFilter: null,
                bInfo: null,
                bLengthChange: null,
                bPaginate: null,
                bProcessing: null,
                bServerSide: null,
                bSort: null,
                bSortMulti: null,
                bSortClasses: null,
                bStateSave: null
            },
            oScroll: {
                bCollapse: null,
                iBarWidth: 0,
                sX: null,
                sXInner: null,
                sY: null
            },
            oLanguage: {
                fnInfoCallback: null
            },
            oBrowser: {
                bScrollOversize: !1,
                bScrollbarLeft: !1
            },
            ajax: null,
            aanFeatures: [],
            aoData: [],
            aiDisplay: [],
            aiDisplayMaster: [],
            aoColumns: [],
            aoHeader: [],
            aoFooter: [],
            oPreviousSearch: {},
            aoPreSearchCols: [],
            aaSorting: null,
            aaSortingFixed: [],
            asStripeClasses: null,
            asDestroyStripes: [],
            sDestroyWidth: 0,
            aoRowCallback: [],
            aoHeaderCallback: [],
            aoFooterCallback: [],
            aoDrawCallback: [],
            aoRowCreatedCallback: [],
            aoPreDrawCallback: [],
            aoInitComplete: [],
            aoStateSaveParams: [],
            aoStateLoadParams: [],
            aoStateLoaded: [],
            sTableId: "",
            nTable: null,
            nTHead: null,
            nTFoot: null,
            nTBody: null,
            nTableWrapper: null,
            bDeferLoading: !1,
            bInitialised: !1,
            aoOpenRows: [],
            sDom: null,
            sPaginationType: "two_button",
            iStateDuration: 0,
            aoStateSave: [],
            aoStateLoad: [],
            oSavedState: null,
            oLoadedState: null,
            sAjaxSource: null,
            sAjaxDataProp: null,
            bAjaxDataGet: !0,
            jqXHR: null,
            json: h,
            oAjaxData: h,
            fnServerData: null,
            aoServerParams: [],
            sServerMethod: null,
            fnFormatNumber: null,
            aLengthMenu: null,
            iDraw: 0,
            bDrawing: !1,
            iDrawError: -1,
            _iDisplayLength: 10,
            _iDisplayStart: 0,
            _iRecordsTotal: 0,
            _iRecordsDisplay: 0,
            bJUI: null,
            oClasses: {},
            bFiltered: !1,
            bSorted: !1,
            bSortCellsTop: null,
            oInit: null,
            aoDestroyCallback: [],
            fnRecordsTotal: function() {
                return "ssp" == na(this) ? 1 * this._iRecordsTotal: this.aiDisplayMaster.length
            },
            fnRecordsDisplay: function() {
                return "ssp" == na(this) ? 1 * this._iRecordsDisplay: this.aiDisplay.length
            },
            fnDisplayEnd: function() {
                var a = this._iDisplayLength,
                b = this._iDisplayStart,
                c = b + a,
                d = this.aiDisplay.length,
                e = this.oFeatures,
                f = e.bPaginate;
                return e.bServerSide ? !1 === f || -1 === a ? b + d: Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d: c
            },
            oInstance: null,
            sInstance: null,
            iTabIndex: 0,
            nScrollHead: null,
            nScrollFoot: null,
            aLastSort: [],
            oPlugins: {}
        };
        F.ext = ia = {
            classes: {},
            errMode: "alert",
            feature: [],
            search: [],
            internal: {},
            legacy: {
                ajax: null
            },
            pager: {},
            renderer: {
                pageButton: {},
                header: {}
            },
            order: {},
            type: {
                detect: [],
                search: {},
                order: {}
            },
            _unique: 0,
            fnVersionCheck: F.fnVersionCheck,
            iApiIndex: 0,
            oJUIClasses: {},
            sVersion: F.version
        };
        g.extend(ia, {
            afnFiltering: ia.search,
            aTypes: ia.type.detect,
            ofnSearch: ia.type.search,
            oSort: ia.type.order,
            afnSortData: ia.order,
            aoFeatures: ia.feature,
            oApi: ia.internal,
            oStdClasses: ia.classes,
            oPagination: ia.pager
        });
        g.extend(F.ext.classes, {
            sTable: "dataTable",
            sNoFooter: "no-footer",
            sPageButton: "paginate_button",
            sPageButtonActive: "current",
            sPageButtonDisabled: "disabled",
            sStripeOdd: "odd",
            sStripeEven: "even",
            sRowEmpty: "dataTables_empty",
            sWrapper: "dataTables_wrapper",
            sFilter: "dataTables_filter",
            sInfo: "dataTables_info",
            sPaging: "dataTables_paginate paging_",
            sLength: "dataTables_length",
            sProcessing: "dataTables_processing",
            sSortAsc: "sorting_asc",
            sSortDesc: "sorting_desc",
            sSortable: "sorting",
            sSortableAsc: "sorting_asc_disabled",
            sSortableDesc: "sorting_desc_disabled",
            sSortableNone: "sorting_disabled",
            sSortColumn: "sorting_",
            sFilterInput: "",
            sLengthSelect: "",
            sScrollWrapper: "dataTables_scroll",
            sScrollHead: "dataTables_scrollHead",
            sScrollHeadInner: "dataTables_scrollHeadInner",
            sScrollBody: "dataTables_scrollBody",
            sScrollFoot: "dataTables_scrollFoot",
            sScrollFootInner: "dataTables_scrollFootInner",
            sHeaderTH: "",
            sFooterTH: "",
            sSortJUIAsc: "",
            sSortJUIDesc: "",
            sSortJUI: "",
            sSortJUIAscAllowed: "",
            sSortJUIDescAllowed: "",
            sSortJUIWrapper: "",
            sSortIcon: "",
            sJUIHeader: "",
            sJUIFooter: ""
        });
        var Ya = "",
        Ya = "",
        W = Ya + "ui-state-default",
        La = Ya + "css_right ui-icon ui-icon-",
        Xb = Ya + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
        g.extend(F.ext.oJUIClasses, F.ext.classes, {
            sPageButton: "fg-button ui-button " + W,
            sPageButtonActive: "ui-state-disabled",
            sPageButtonDisabled: "ui-state-disabled",
            sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
            sSortAsc: W + " sorting_asc",
            sSortDesc: W + " sorting_desc",
            sSortable: W + " sorting",
            sSortableAsc: W + " sorting_asc_disabled",
            sSortableDesc: W + " sorting_desc_disabled",
            sSortableNone: W + " sorting_disabled",
            sSortJUIAsc: La + "triangle-1-n",
            sSortJUIDesc: La + "triangle-1-s",
            sSortJUI: La + "carat-2-n-s",
            sSortJUIAscAllowed: La + "carat-1-n",
            sSortJUIDescAllowed: La + "carat-1-s",
            sSortJUIWrapper: "DataTables_sort_wrapper",
            sSortIcon: "DataTables_sort_icon",
            sScrollHead: "dataTables_scrollHead " + W,
            sScrollFoot: "dataTables_scrollFoot " + W,
            sHeaderTH: W,
            sFooterTH: W,
            sJUIHeader: Xb + " ui-corner-tl ui-corner-tr",
            sJUIFooter: Xb + " ui-corner-bl ui-corner-br"
        });
        var Yb = F.ext.pager;
        g.extend(Yb, {
            simple: function() {
                return ["previous", "next"]
            },
            full: function() {
                return ["first", "previous", "next", "last"]
            },
            simple_numbers: function(a, b) {
                return ["previous", Wa(a, b), "next"]
            },
            full_numbers: function(a, b) {
                return ["first", "previous", Wa(a, b), "next", "last"]
            },
            _numbers: Wa,
            numbers_length: 7
        });
        g.extend(!0, F.ext.renderer, {
            pageButton: {
                _: function(a, b, c, d, e, f) {
                    var h = a.oClasses,
                    l = a.oLanguage.oPaginate,
                    n, m, p = 0,
                    q = function(b, d) {
                        var k, s, u, t, B = function(b) {
                            S(a, b.data.action, !0)
                        };
                        k = 0;
                        for (s = d.length; k < s; k++) if (t = d[k], g.isArray(t)) u = g("\x3c" + (t.DT_el || "div") + "/\x3e").appendTo(b),
                        q(u, t);
                        else {
                            m = n = "";
                            switch (t) {
                            case "ellipsis":
                                b.append("\x3cspan\x3e\x26hellip;\x3c/span\x3e");
                                break;
                            case "first":
                                n = l.sFirst;
                                m = t + (0 < e ? "": " " + h.sPageButtonDisabled);
                                break;
                            case "previous":
                                n = l.sPrevious;
                                m = t + (0 < e ? "": " " + h.sPageButtonDisabled);
                                break;
                            case "next":
                                n = l.sNext;
                                m = t + (e < f - 1 ? "": " " + h.sPageButtonDisabled);
                                break;
                            case "last":
                                n = l.sLast;
                                m = t + (e < f - 1 ? "": " " + h.sPageButtonDisabled);
                                break;
                            default:
                                n = t + 1,
                                m = e === t ? h.sPageButtonActive: ""
                            }
                            n && (u = g("\x3ca\x3e", {
                                "class": h.sPageButton + " " + m,
                                "aria-controls": a.sTableId,
                                "data-dt-idx": p,
                                tabindex: a.iTabIndex,
                                id: 0 === c && "string" === typeof t ? a.sTableId + "_" + t: null
                            }).html(n).appendTo(b), ub(u, {
                                action: t
                            },
                            B), p++)
                        }
                    };
                    try {
                        var s = g(k.activeElement).data("dt-idx");
                        q(g(b).empty(), d);
                        null !== s && g(b).find("[data-dt-idx\x3d" + s + "]").focus()
                    } catch(u) {}
                }
            }
        });
        var Ib = function(a, b, c, d) {
            if (!a || "-" === a) return - Infinity;
            b && (a = Qb(a, b));
            a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
            return 1 * a
        };
        g.extend(ia.type.order, {
            "date-pre": function(a) {
                return Date.parse(a) || 0
            },
            "html-pre": function(a) {
                return Ka(a) ? "": a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + ""
            },
            "string-pre": function(a) {
                return Ka(a) ? "": "string" === typeof a ? a.toLowerCase() : a.toString ? a.toString() : ""
            },
            "string-asc": function(a, b) {
                return a < b ? -1 : a > b ? 1 : 0
            },
            "string-desc": function(a, b) {
                return a < b ? 1 : a > b ? -1 : 0
            }
        });
        Pb("");
        g.extend(F.ext.type.detect, [function(a, b) {
            var c = b.oLanguage.sDecimal;
            return Eb(a, c) ? "num" + c: null
        },
        function(a) {
            if (a && (!Bb.test(a) || !Cb.test(a))) return null;
            var b = Date.parse(a);
            return null !== b && !isNaN(b) || Ka(a) ? "date": null
        },
        function(a, b) {
            var c = b.oLanguage.sDecimal;
            return Eb(a, c, !0) ? "num-fmt" + c: null
        },
        function(a, b) {
            var c = b.oLanguage.sDecimal;
            return Rb(a, c) ? "html-num" + c: null
        },
        function(a, b) {
            var c = b.oLanguage.sDecimal;
            return Rb(a, c, !0) ? "html-num-fmt" + c: null
        },
        function(a) {
            return Ka(a) || "string" === typeof a && -1 !== a.indexOf("\x3c") ? "html": null
        }]);
        g.extend(F.ext.type.search, {
            html: function(a) {
                return Ka(a) ? a: "string" === typeof a ? a.replace(mb, " ").replace(nb, "") : ""
            },
            string: function(a) {
                return Ka(a) ? a: "string" === typeof a ? a.replace(mb, " ") : a
            }
        });
        g.extend(!0, F.ext.renderer, {
            header: {
                _: function(a, b, c, d) {
                    g(a.nTable).on("order.dt.DT",
                    function(e, f, g, h) {
                        a === f && (e = c.idx, b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass("asc" == h[e] ? d.sSortAsc: "desc" == h[e] ? d.sSortDesc: c.sSortingClass))
                    })
                },
                jqueryui: function(a, b, c, d) {
                    var e = c.idx;
                    g("\x3cdiv/\x3e").addClass(d.sSortJUIWrapper).append(b.contents()).append(g("\x3cspan/\x3e").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
                    g(a.nTable).on("order.dt.DT",
                    function(f, g, h, k) {
                        a === g && (b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass("asc" == k[e] ? d.sSortAsc: "desc" == k[e] ? d.sSortDesc: c.sSortingClass), b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass("asc" == k[e] ? d.sSortJUIAsc: "desc" == k[e] ? d.sSortJUIDesc: c.sSortingClassJUI))
                    })
                }
            }
        });
        F.render = {
            number: function(a, b, c, d) {
                return {
                    display: function(e) {
                        var f = 0 > e ? "-": "";
                        e = Math.abs(parseFloat(e));
                        var g = parseInt(e, 10);
                        e = c ? b + (e - g).toFixed(c).substring(2) : "";
                        return f + (d || "") + g.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + e
                    }
                }
            }
        };
        g.extend(F.ext.internal, {
            _fnExternApiFunc: zb,
            _fnBuildAjax: Ia,
            _fnAjaxUpdate: qa,
            _fnAjaxParameters: la,
            _fnAjaxUpdateDraw: ra,
            _fnAjaxDataSrc: V,
            _fnAddColumn: x,
            _fnColumnOptions: U,
            _fnAdjustColumnSizing: I,
            _fnVisibleToColumnIndex: R,
            _fnColumnIndexToVisible: a,
            _fnVisbleColumns: c,
            _fnGetColumns: d,
            _fnColumnTypes: e,
            _fnApplyColumnDefs: f,
            _fnHungarianMap: m,
            _fnCamelToHungarian: q,
            _fnLanguageCompat: s,
            _fnBrowserDetect: w,
            _fnAddData: n,
            _fnAddTr: O,
            _fnNodeToDataIndex: function(a, b) {
                return b._DT_RowIndex !== h ? b._DT_RowIndex: null
            },
            _fnNodeToColumnIndex: function(a, b, c) {
                return g.inArray(c, a.aoData[b].anCells)
            },
            _fnGetCellData: C,
            _fnSetCellData: z,
            _fnSplitObjNotation: T,
            _fnGetObjectDataFn: ma,
            _fnSetObjectDataFn: G,
            _fnGetDataMaster: ea,
            _fnClearTable: ca,
            _fnDeleteIndex: E,
            _fnInvalidateRow: fa,
            _fnGetRowElements: Z,
            _fnCreateTr: aa,
            _fnBuildHead: B,
            _fnDrawHead: J,
            _fnDraw: N,
            _fnReDraw: M,
            _fnAddOptionsHtml: ta,
            _fnDetectHeader: Ga,
            _fnGetUniqueThs: ua,
            _fnFeatureHtmlFilter: K,
            _fnFilterComplete: l,
            _fnFilterCustom: va,
            _fnFilterColumn: Da,
            _fnFilter: Ea,
            _fnFilterCreateSearch: oa,
            _fnEscapeRegex: Fa,
            _fnFilterData: Oa,
            _fnFeatureHtmlInfo: $a,
            _fnUpdateInfo: Jb,
            _fnInfoMacros: Pa,
            _fnInitialise: hb,
            _fnInitComplete: ya,
            _fnLengthChange: fb,
            _fnFeatureHtmlLength: ab,
            _fnFeatureHtmlPaginate: Ja,
            _fnPageChange: S,
            _fnFeatureHtmlProcessing: ba,
            _fnProcessingDisplay: za,
            _fnFeatureHtmlTable: Hb,
            _fnScrollDraw: Qa,
            _fnApplyToChildren: sa,
            _fnCalculateColumnWidths: Sa,
            _fnThrottle: ib,
            _fnConvertToWidth: Kb,
            _fnScrollingWidthAdjust: Lb,
            _fnGetWidestNode: wb,
            _fnGetMaxLenString: xb,
            _fnStringToCss: Y,
            _fnScrollBarWidth: yb,
            _fnSortFlatten: Va,
            _fnSort: Mb,
            _fnSortAria: Nb,
            _fnSortListener: jb,
            _fnSortAttachListener: sb,
            _fnSortingClasses: kb,
            _fnSortData: Aa,
            _fnSaveState: Ra,
            _fnLoadState: tb,
            _fnSettingsFromNode: Za,
            _fnLog: Ma,
            _fnMap: xa,
            _fnBindAction: ub,
            _fnCallbackReg: wa,
            _fnCallbackFire: ja,
            _fnLengthOverflow: lb,
            _fnRenderer: gb,
            _fnDataSource: na,
            _fnRowAttributes: ha,
            _fnCalculateEnd: function() {}
        });
        g.fn.dataTable = F;
        g.fn.dataTableSettings = F.settings;
        g.fn.dataTableExt = F.ext;
        g.fn.DataTable = function(a) {
            return g(this).dataTable(a).api()
        };
        g.each(F,
        function(a, b) {
            g.fn.DataTable[a] = b
        });
        return g.fn.dataTable
    };
    "function" === typeof define && define.amd ? define("datatables", ["jquery"], m) : "object" === typeof exports ? m(require("jquery")) : jQuery && !jQuery.fn.dataTable && m(jQuery)
})(window, document); (function(b) {
    var k = function(b) {
        var k = b.clone(),
        g = b.find("canvas");
        g.length && k.find("canvas").each(function(b) {
            this.getContext("2d").drawImage(g.get(b), 0, 0)
        });
        return k
    };
    b.fn.quicksand = function(h, m, g) {
        var p = {
            duration: 750,
            easing: "swing",
            attribute: "data-id",
            adjustHeight: "auto",
            adjustWidth: "auto",
            useScaling: !1,
            enhancement: function(b) {},
            selector: "\x3e *",
            atomic: !1,
            dx: 0,
            dy: 0,
            maxWidth: 0,
            retainExisting: !0
        },
        q = function() {
            for (var b = ["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"], g = document.createElement("div"), h = 0; h < b.length; h++) if ("undefined" != typeof g.style[b[h]]) return ! 0;
            return ! 1
        } ();
        b.extend(p, m);
        q && "undefined" != typeof b.fn.scale || (p.useScaling = !1);
        var s;
        "function" == typeof m ? s = m: typeof("function" == g) && (s = g);
        return this.each(function(g) {
            var m, q = [],
            u;
            u = "function" == typeof p.attribute ? b(h) : k(b(h).filter("[" + p.attribute + "]"));
            var x = b(this);
            g = b(this).css("height");
            var U = b(this).css("width"),
            I,
            R = !1,
            a = !1,
            c = b(x).offset(),
            d = [],
            e = b(this).find(p.selector),
            f = b(e).innerWidth();
            if (navigator.userAgent.match(/msie [6]/i)) x.html("").append(u);
            else {
                var n = 0,
                O = function() {
                    b(this).css("margin", "").css("position", "").css("top", "").css("left", "").css("opacity", "");
                    if (!n) {
                        n = 1;
                        if (!p.atomic) {
                            var c = x.find(p.selector);
                            if (p.retainExisting) {
                                var d = b([]);
                                G.find(p.selector).each(function(a) {
                                    var e = b([]);
                                    if ("function" == typeof p.attribute) {
                                        var g = p.attribute(b(this));
                                        c.each(function() {
                                            if (p.attribute(this) == g) return e = b(this),
                                            !1
                                        })
                                    } else e = c.filter("[" + p.attribute + '\x3d"' + b(this).attr(p.attribute) + '"]');
                                    0 < e.length && (d = d.add(e), 0 === a ? x.prepend(e) : e.insertAfter(x.find(p.selector).get(a - 1)))
                                });
                                c.not(d).remove()
                            } else x.prepend(G.find(p.selector)),
                            c.remove();
                            R && x.css("height", I);
                            a && x.css("width", U)
                        }
                        p.enhancement(x);
                        "function" == typeof s && s.call(this)
                    } ! 1 === p.adjustHeight && x.css("height", "auto"); ! 1 === p.adjustWidth && x.css("width", "auto")
                },
                C = x.offsetParent(),
                z = C.offset();
                "relative" == C.css("position") ? "body" != C.get(0).nodeName.toLowerCase() && (z.top += parseFloat(C.css("border-top-width")) || 0, z.left += parseFloat(C.css("border-left-width")) || 0) : (z.top -= parseFloat(C.css("border-top-width")) || 0, z.left -= parseFloat(C.css("border-left-width")) || 0, z.top -= parseFloat(C.css("margin-top")) || 0, z.left -= parseFloat(C.css("margin-left")) || 0);
                isNaN(z.left) && (z.left = 0);
                isNaN(z.top) && (z.top = 0);
                z.left -= p.dx;
                z.top -= p.dy;
                x.css("height", b(this).height());
                x.css("width", b(this).width());
                e.each(function(a) {
                    d[a] = b(this).offset()
                });
                b(this).stop();
                var T = 0,
                ma = 0;
                e.each(function(a) {
                    b(this).stop();
                    var c = b(this).get(0);
                    "absolute" == c.style.position ? (T = -p.dx, ma = -p.dy) : (T = p.dx, ma = p.dy);
                    c.style.position = "absolute";
                    c.style.margin = "0";
                    p.adjustWidth || (c.style.width = f + "px");
                    c.style.top = d[a].top - parseFloat(c.style.marginTop) - z.top + ma + "px";
                    c.style.left = d[a].left - parseFloat(c.style.marginLeft) - z.left + T + "px";
                    0 < p.maxWidth && d[a].left > p.maxWidth && (c.style.display = "none")
                });
                var G = k(b(x)),
                C = G.get(0);
                C.innerHTML = "";
                C.setAttribute("id", "");
                C.style.height = "auto";
                C.style.width = x.width() + "px";
                G.append(u);
                G.insertBefore(x);
                G.css("opacity", 0);
                C.style.zIndex = -1;
                C.style.margin = "0";
                C.style.position = "absolute";
                C.style.top = c.top - z.top + "px";
                C.style.left = c.left - z.left + "px";
                "dynamic" === p.adjustHeight ? x.animate({
                    height: G.height()
                },
                p.duration, p.easing) : "auto" === p.adjustHeight && (I = G.height(), parseFloat(g) < parseFloat(I) ? x.css("height", I) : R = !0);
                "dynamic" === p.adjustWidth ? x.animate({
                    width: G.width()
                },
                p.duration, p.easing) : "auto" === p.adjustWidth && (g = G.width(), parseFloat(U) < parseFloat(g) ? x.css("width", g) : a = !0);
                e.each(function(a) {
                    var c = [];
                    "function" == typeof p.attribute ? (m = p.attribute(b(this)), u.each(function() {
                        if (p.attribute(this) == m) return c = b(this),
                        !1
                    })) : c = u.filter("[" + p.attribute + '\x3d"' + b(this).attr(p.attribute) + '"]');
                    c.length ? p.useScaling ? q.push({
                        element: b(this),
                        dest: c,
                        style: {
                            top: b(this).offset().top,
                            left: b(this).offset().left,
                            opacity: ""
                        },
                        animation: {
                            top: c.offset().top - z.top,
                            left: c.offset().left - z.left,
                            opacity: 1,
                            scale: "1.0"
                        }
                    }) : q.push({
                        element: b(this),
                        dest: c,
                        style: {
                            top: b(this).offset().top,
                            left: b(this).offset().left,
                            opacity: ""
                        },
                        animation: {
                            top: c.offset().top - z.top,
                            left: c.offset().left - z.left,
                            opacity: 1
                        }
                    }) : p.useScaling ? q.push({
                        element: b(this),
                        animation: {
                            opacity: "0.0",
                            style: {
                                top: b(this).offset().top,
                                left: b(this).offset().left,
                                opacity: ""
                            },
                            scale: "0.0"
                        }
                    }) : q.push({
                        element: b(this),
                        style: {
                            top: b(this).offset().top,
                            left: b(this).offset().left,
                            opacity: ""
                        },
                        animation: {
                            opacity: "0.0"
                        }
                    })
                });
                u.each(function(a) {
                    var c = [],
                    d = [];
                    "function" == typeof p.attribute ? (m = p.attribute(b(this)), e.each(function() {
                        if (p.attribute(this) == m) return c = b(this),
                        !1
                    }), u.each(function() {
                        if (p.attribute(this) == m) return d = b(this),
                        !1
                    })) : (c = e.filter("[" + p.attribute + '\x3d"' + b(this).attr(p.attribute) + '"]'), d = u.filter("[" + p.attribute + '\x3d"' + b(this).attr(p.attribute) + '"]'));
                    if (0 === c.length && 0 < d.length) {
                        a = p.useScaling ? {
                            opacity: "1.0",
                            scale: "1.0"
                        }: {
                            opacity: "1.0"
                        };
                        var g = k(d),
                        h = g.get(0);
                        h.style.position = "absolute";
                        h.style.margin = "0";
                        p.adjustWidth || (h.style.width = f + "px");
                        h.style.top = d.offset().top - z.top + "px";
                        h.style.left = d.offset().left - z.left + "px";
                        g.css("opacity", 0);
                        p.useScaling && g.scale(0);
                        g.appendTo(x); (0 === p.maxWidth || d.offset().left < p.maxWidth) && q.push({
                            element: b(g),
                            dest: d,
                            animation: a
                        })
                    }
                });
                G.remove();
                if (p.atomic) {
                    $toDelete = x.find(p.selector);
                    x.prepend(G.find(p.selector));
                    for (g = 0; g < q.length; g++) q[g].dest && q[g].style ? (c = q[g].dest, C = c.offset(), c.css({
                        position: "relative",
                        top: q[g].style.top - C.top,
                        left: q[g].style.left - C.left
                    }), c.animate({
                        top: "0",
                        left: "0"
                    },
                    p.duration, p.easing, O)) : q[g].element.animate(q[g].animation, p.duration, p.easing, O);
                    $toDelete.remove()
                } else for (p.enhancement(x), g = 0; g < q.length; g++) q[g].element.animate(q[g].animation, p.duration, p.easing, O)
            }
        })
    }
})(jQuery); (function(b) {
    b(["jquery"],
    function(b) {
        function h(g) {
            return b.isFunction(g) || "object" == typeof g ? g: {
                top: g,
                left: g
            }
        }
        var m = b.scrollTo = function(g, h, m) {
            return b(window).scrollTo(g, h, m)
        };
        m.defaults = {
            axis: "xy",
            duration: 1.3 <= parseFloat(b.fn.jquery) ? 0 : 1,
            limit: !0
        };
        m.window = function(g) {
            return b(window)._scrollable()
        };
        b.fn._scrollable = function() {
            return this.map(function() {
                if (this.nodeName && -1 == b.inArray(this.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])) return this;
                var g = (this.contentWindow || this).document || this.ownerDocument || this;
                return /webkit/i.test(navigator.userAgent) || "BackCompat" == g.compatMode ? g.body: g.documentElement
            })
        };
        b.fn.scrollTo = function(g, p, q) {
            "object" == typeof p && (q = p, p = 0);
            "function" == typeof q && (q = {
                onAfter: q
            });
            "max" == g && (g = 9E9);
            q = b.extend({},
            m.defaults, q);
            p = p || q.duration;
            q.queue = q.queue && 1 < q.axis.length;
            q.queue && (p /= 2);
            q.offset = h(q.offset);
            q.over = h(q.over);
            return this._scrollable().each(function() {
                function s(b) {
                    A.animate(x, p, q.easing, b &&
                    function() {
                        b.call(this, w, q)
                    })
                }
                if (null != g) {
                    var t = this,
                    A = b(t),
                    w = g,
                    u,
                    x = {},
                    U = A.is("html,body");
                    switch (typeof w) {
                    case "number":
                    case "string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(w)) {
                            w = h(w);
                            break
                        }
                        w = U ? b(w) : b(w, this);
                        if (!w.length) return;
                    case "object":
                        if (w.is || w.style) u = (w = b(w)).offset()
                    }
                    var I = b.isFunction(q.offset) && q.offset(t, w) || q.offset;
                    b.each(q.axis.split(""),
                    function(b, a) {
                        var c = "x" == a ? "Left": "Top",
                        d = c.toLowerCase(),
                        e = "scroll" + c,
                        g = t[e],
                        h = m.max(t, a);
                        u ? (x[e] = u[d] + (U ? 0 : g - A.offset()[d]), q.margin && (x[e] -= parseInt(w.css("margin" + c)) || 0, x[e] -= parseInt(w.css("border" + c + "Width")) || 0), x[e] += I[d] || 0, q.over[d] && (x[e] += w["x" == a ? "width": "height"]() * q.over[d])) : (c = w[d], x[e] = c.slice && "%" == c.slice( - 1) ? parseFloat(c) / 100 * h: c);
                        q.limit && /^\d+$/.test(x[e]) && (x[e] = 0 >= x[e] ? 0 : Math.min(x[e], h)); ! b && q.queue && (g != x[e] && s(q.onAfterFirst), delete x[e])
                    });
                    s(q.onAfter)
                }
            }).end()
        };
        m.max = function(g, h) {
            var m = "x" == h ? "Width": "Height",
            s = "scroll" + m;
            if (!b(g).is("html,body")) return g[s] - b(g)[m.toLowerCase()]();
            var m = "client" + m,
            t = g.ownerDocument.documentElement,
            A = g.ownerDocument.body;
            return Math.max(t[s], A[s]) - Math.min(t[m], A[m])
        };
        return m
    })
})("function" === typeof define && define.amd ? define: function(b, k) {
    "undefined" !== typeof module && module.exports ? module.exports = k(require("jquery")) : k(jQuery)
});
this.sh_languages || (this.sh_languages = {});
var sh_requests = {};
function sh_isEmailAddress(b) {
    return /^mailto:/.test(b) ? !1 : -1 !== b.indexOf("@")
}
function sh_setHref(b, k, h) {
    h = h.substring(b[k - 2].pos, b[k - 1].pos);
    2 <= h.length && "\x3c" === h.charAt(0) && "\x3e" === h.charAt(h.length - 1) && (h = h.substr(1, h.length - 2));
    sh_isEmailAddress(h) && (h = "mailto:" + h);
    b[k - 2].node.href = h
}
function sh_konquerorExec(b) {
    var k = [""];
    k.index = b.length;
    k.input = b;
    return k
}
function sh_highlightString(b, k) {
    if (/Konqueror/.test(navigator.userAgent) && !k.konquered) {
        for (var h = 0; h < k.length; h++) for (var m = 0; m < k[h].length; m++) {
            var g = k[h][m][0];
            "$" === g.source && (g.exec = sh_konquerorExec)
        }
        k.konquered = !0
    }
    var p = document.createElement("a"),
    q = document.createElement("span"),
    s = [],
    t = 0,
    A = [],
    w = 0,
    u = null,
    m = function(a, c) {
        var d = a.length;
        if (0 !== d) {
            if (!c) {
                var e = A.length;
                0 !== e && (e = A[e - 1], e[3] || (c = e[1]))
            }
            u !== c && (u && (s[t++] = {
                pos: w
            },
            "sh-url" === u && sh_setHref(s, t, b)), c && (e = "sh-url" === c ? p.cloneNode(!1) : q.cloneNode(!1), e.className = c, s[t++] = {
                node: e,
                pos: w
            }));
            w += d;
            u = c
        }
    },
    g = /\r\n|\r|\n/g;
    g.lastIndex = 0;
    for (var x = b.length,
    h = 0; w < x;) {
        h++;
        var U = w,
        I, R;
        R = g.exec(b);
        null === R ? R = I = x: (I = R.index, R = g.lastIndex);
        I = b.substring(U, I);
        for (var a = [];;) {
            var c = w - U,
            d;
            d = A.length;
            d = 0 === d ? 0 : A[d - 1][2];
            var e = k[d],
            f = e.length,
            n = a[d];
            n || (n = a[d] = []);
            d = null;
            for (var O = -1,
            C = 0; C < f; C++) {
                var z;
                C < n.length && (null === n[C] || c <= n[C].index) ? z = n[C] : (z = e[C][0], z.lastIndex = c, z = z.exec(I), n[C] = z);
                if (null !== z && (null === d || z.index < d.index) && (d = z, O = C, z.index === c)) break
            }
            if (null === d) {
                m(I.substring(c), null);
                break
            } else {
                d.index > c && m(I.substring(c, d.index), null);
                c = e[O];
                e = c[1];
                if (e instanceof Array) for (n = 0; n < e.length; n++) f = d[n + 1],
                m(f, e[n]);
                else f = d[0],
                m(f, e);
                switch (c[2]) {
                case - 1 : break;
                case - 2 : A.pop();
                    break;
                case - 3 : A.length = 0;
                    break;
                default:
                    A.push(c)
                }
            }
        }
        u && (s[t++] = {
            pos: w
        },
        "sh-url" === u && sh_setHref(s, t, b), u = null);
        w = R
    }
    m = [];
    m[0] = s;
    m[1] = h;
    return m
}
function sh_getClasses(b) {
    var k = [];
    if ((b = b.className) && 0 < b.length) {
        b = b.split(" ");
        for (var h = 0; h < b.length; h++) 0 < b[h].length && k.push(b[h])
    }
    return k
}
function sh_addClass(b, k) {
    for (var h = sh_getClasses(b), m = 0; m < h.length; m++) if (k.toLowerCase() === h[m].toLowerCase()) return;
    h.push(k);
    b.className = h.join(" ")
}
function sh_extractTagsFromNodeList(b, k) {
    for (var h = b.length,
    m = 0; m < h; m++) {
        var g = b.item(m);
        switch (g.nodeType) {
        case 1:
            "br" === g.nodeName.toLowerCase() ? (g = /MSIE/.test(navigator.userAgent) ? "\r": "\n", k.text.push(g), k.pos++) : (k.tags.push({
                node: g.cloneNode(!1),
                pos: k.pos
            }), sh_extractTagsFromNodeList(g.childNodes, k), k.tags.push({
                pos: k.pos
            }));
            break;
        case 3:
        case 4:
            k.text.push(g.data),
            k.pos += g.length
        }
    }
}
function sh_extractTags(b, k) {
    var h = {
        text: []
    };
    h.tags = k;
    h.pos = 0;
    sh_extractTagsFromNodeList(b.childNodes, h);
    return h.text.join("")
}
function sh_mergeTags(b, k) {
    var h = b.length;
    if (0 === h) return k;
    var m = k.length;
    if (0 === m) return b;
    for (var g = [], p = 0, q = 0; p < h && q < m;) {
        var s = b[p],
        t = k[q];
        s.pos <= t.pos ? (g.push(s), p++) : (g.push(t), k[q + 1].pos <= s.pos ? (q++, g.push(k[q]), q++) : (g.push({
            pos: s.pos
        }), k[q] = {
            node: t.node.cloneNode(!1),
            pos: s.pos
        }))
    }
    for (; p < h;) g.push(b[p]),
    p++;
    for (; q < m;) g.push(k[q]),
    q++;
    return g
}
function sh_insertTags(b, k) {
    for (var h = document,
    m = document.createDocumentFragment(), g = 0, p = b.length, q = 0, s = k.length, t = m; q < s || g < p;) {
        var A, w;
        g < p ? (A = b[g], w = A.pos) : w = s;
        w <= q ? (A.node ? (w = A.node, t.appendChild(w), t = w) : t = t.parentNode, g++) : (t.appendChild(h.createTextNode(k.substring(q, w))), q = w)
    }
    return m
}
function shx_selectAll(b) {
    if (window.getSelection) window.getSelection().selectAllChildren(b);
    else if (document.selection) {
        var k = document.selection.createRange();
        k.moveToElementText(b);
        k.select()
    }
}
function _inArray(b, k) {
    for (var h = 0; h < b.length; h++) if (b[h] == k) return ! 0;
    return ! 1
}
function _hasClass(b, k) {
    var h = b.className.split(" ");
    return _inArray(h, k)
}
function _isBrace(b) {
    return "(" == b || ")" == b || "{" == b || "}" == b || "[" == b || "]" == b
}
function _isOpenBrace(b) {
    return "(" == b || "{" == b || "[" == b
}
function _isClosedBrace(b) {
    return ")" == b || "}" == b || "]" == b
}
function _isVarNameChar(b) {
    return ! (("a" > b || "z" < b) && ("A" > b || "Z" < b) && ("0" > b || "9" < b) && "$" != b && "_" != b)
}
var shx_hilitedBraces = [];
function shx_unhilitBrace() {
    for (; shx_hilitedBraces.length;) {
        var b = shx_hilitedBraces.pop(),
        k = b.parentNode;
        k.parentNode.replaceChild(b, k)
    }
}
function shx_hilitBrace(b, k, h, m) {
    var g = function(g) {
        return g.firstChild || g.nextSibling || (g.parentNode !== b ? g.parentNode.nextSibling: !1)
    },
    p = function(g) {
        return g.lastChild || g.previousSibling || (g.parentNode !== b ? g.parentNode.previousSibling: !1)
    },
    q = function(b) {
        var g = document.createElement("span");
        g.setAttribute("class", "shx-hilit-brace");
        b.parentNode.replaceChild(g, b);
        g.appendChild(b);
        shx_hilitedBraces.push(b)
    },
    s;
    switch (m) {
    case "(":
        s = ")";
        break;
    case ")":
        s = "(";
        break;
    case "{":
        s = "}";
        break;
    case "}":
        s = "{";
        break;
    case "[":
        s = "]";
        break;
    case "]":
        s = "[";
        break;
    default:
        return
    }
    shx_unhilitWord(b);
    shx_unhilitBrace();
    0 != h && (k = k.splitText(h), h = 0);
    h + 1 < k.length && k.splitText(h + 1);
    h = k;
    var t = k.nodeValue,
    A = [m],
    w,
    g = _isOpenBrace(m) ? g: p,
    p = _isOpenBrace(m) ? 1 : -1;
    for (h = g(h); h && 0 < A.length; h = g(h)) {
        if (3 == h.nodeType) for (t = h.nodeValue, w = 1 == p ? 0 : t.length - 1; 0 <= w && w < t.length && (t[w] == m ? A.push(m) : t[w] == s && A.pop(), 0 != A.length); w += p);
        if (0 == A.length) break
    }
    h && (0 != w && (h = h.splitText(w), w = 0), w + 1 < h.length && h.splitText(w + 1), q(k), q(h));
    b.normalize()
}
function shx_unhilitWord(b) {
    for (var k = b.firstChild; k; k = k.firstChild || k.nextSibling || (k.parentNode !== b ? k.parentNode.nextSibling: !1)) if (3 == k.nodeType && _hasClass(k.parentNode, "shx-hilit")) {
        var h = k.parentNode;
        h.parentNode.replaceChild(k, h)
    }
}
function shx_hilitWord(b, k, h) {
    h || (h = !0);
    shx_unhilitBrace();
    b.normalize();
    for (var m = [], g = [], p = "", q = 0, s = b.firstChild; s; s = s.firstChild || s.nextSibling || (s.parentNode !== b ? s.parentNode.nextSibling: !1)) if (3 == s.nodeType) {
        if (_hasClass(s.parentNode, "shx-hilit")) {
            var t = s.parentNode;
            t.parentNode.replaceChild(s, t)
        }
        m.push(s);
        g.push(q);
        p += s.nodeValue;
        q += s.nodeValue.length
    }
    g.push(q);
    s = [];
    q = k.length;
    for (t = p.indexOf(k); - 1 != t; t = p.indexOf(k, t + q)) h ? (0 > t - 1 || 0 <= t - 1 && !_isVarNameChar(p[t - 1])) && (t + q >= p.length || t + q < p.length && !_isVarNameChar(p[t + q])) && s.push(t) : s.push(t);
    k = 0;
    h = !1;
    for (var t = s[k], A, p = [], w = 0; w < m.length; w++) if (t >= g[w] && t < g[w + 1]) {
        h = !h;
        var u = t - g[w];
        0 != u && u != m[w].nodeValue.length ? (A = m[w].splitText(u), m.splice(w + 1, 0, A), g.splice(w + 1, 0, t)) : (A = m[w], w--);
        if (h) p.push(A);
        else {
            0 != u && m[w] != p[p.length - 1] && p.push(m[w]);
            for (t = 0; t < p.length; t++) A = p[t],
            u = document.createElement("span"),
            u.setAttribute("class", "shx-hilit"),
            u.setAttribute("title", "Count : " + s.length),
            A.parentNode.replaceChild(u, A),
            u.appendChild(A);
            p = []
        }
        t = h ? s[k] + q: s[++k]
    } else h && m[w] != p[p.length - 1] && p.push(m[w]);
    b.normalize()
}
function shx_hilit(b, k) {
    if (window.getSelection) {
        var h = null;
        try {
            h = window.getSelection().getRangeAt(0)
        } catch(m) {
            return
        }
        if (h.startContainer) {
            var g = document.createRange();
            g.selectNode(h.startContainer);
            var p = g.toString(),
            g = h.startOffset;
            if (_isBrace(p[g]) || 0 < g && _isBrace(p[g - 1])) g = _isBrace(p[g]) ? g: g - 1,
            p = p[g],
            shx_hilitBrace(k, h.startContainer, g, p);
            else {
                for (endPos = g = h.startOffset; 0 <= g && _isVarNameChar(p[g]); g--);
                for (g++; endPos < p.length && _isVarNameChar(p[endPos]); endPos++);
                g < endPos && (p = p.substring(g, endPos), shx_hilitWord(k, p))
            }
        }
    } else if (window.document.selection && (h = window.document.selection.createRange(), 0 == h.text.length)) if (g = h.duplicate(), p = null, h = g.moveStart("character", -1), 0 != h && (_isBrace(g.text[0]) ? p = g.text[0] : g.moveStart("character", 1)), p || (h = g.moveStart("character", 1), 0 != h && (_isBrace(g.text[0]) ? p = g.text[0] : g.moveStart("character", -1))), p) {
        var h = g.parentElement(),
        q = document.body.createTextRange();
        q.moveToElementText(h);
        q.setEndPoint("EndToEnd", g);
        for (var g = q.text,
        q = null,
        s = -1,
        h = h.firstChild; h; h = h.nextSibling) if (3 == h.nodeType) {
            var t = h.nodeValue;
            if (0 == g.indexOf(t) && g != t) g = g.substring(t.length);
            else {
                q = h;
                s = g.length - 1;
                break
            }
        }
        shx_hilitBrace(k, q, s, p)
    } else {
        do h = g.moveStart("character", -1);
        while (0 != h && _isVarNameChar(g.text[0]));
        for (h = g.moveStart("character", 1); 0 != h && _isVarNameChar(g.text[g.text.length - 1]);) h = g.moveEnd("character", 1);
        g.moveEnd("character", -1);
        0 < g.text.length && (p = g.text, shx_hilitWord(k, p))
    }
}
function sh_lineNumbers(b, k) {
    b.onmouseup = function(g) {
        shx_hilit(g, b)
    };
    var h = document.createElement("div"),
    m = document.createElement("div");
    h.setAttribute("class", "shx-wrapper");
    m.setAttribute("class", "shx-innerWrapper");
    var g = document.createElement("div");
    g.setAttribute("class", "shx-topbar");
    var p = document.createElement("span"),
    q = document.createElement("span");
    p.setAttribute("class", "shx-actions");
    q.appendChild(document.createTextNode("Select All"));
    q.onclick = function() {
        shx_selectAll(b);
        q = null
    };
    p.appendChild(q);
    var s = b.getAttribute("title");
    null != s && 0 < s.length && (b.removeAttribute("title"), g.appendChild(document.createTextNode(s)));
    g.appendChild(p);
    s = document.createElement("pre");
    s.setAttribute("class", "shx-linenum");
    for (var t = "",
    A = 1; A <= k; A++) t += "\x3cspan\x3e" + A + "\x3c/span\x3e\n";
    s.innerHTML = t;
    h.appendChild(g);
    h.appendChild(m);
    b.parentNode.replaceChild(h, b);
    m.appendChild(s);
    m.appendChild(b);
    s.style.paddingBottom = 0;
    s.style.paddingBottom = b.offsetHeight - s.clientHeight + "px";
    g.style.height = p.offsetHeight + "px"
}
function sh_highlightElement(b, k) {
    sh_addClass(b, "sh-sourceCode");
    for (var h = [], m = sh_extractTags(b, h), g = sh_highlightString(m, k), h = sh_mergeTags(h, g[0]), m = sh_insertTags(h, m); b.hasChildNodes();) b.removeChild(b.firstChild);
    b.appendChild(m);
    sh_lineNumbers(b, g[1])
}
function sh_getXMLHttpRequest() {
    if (window.ActiveXObject) return new ActiveXObject("Msxml2.XMLHTTP");
    if (window.XMLHttpRequest) return new XMLHttpRequest;
    throw "No XMLHttpRequest implementation available";
}
function sh_load(b, k, h, m) {
    b in sh_requests ? sh_requests[b].push(k) : (sh_requests[b] = [k], k = h + "lang/sh_" + b + m, b = document.createElement("script"), b.setAttribute("type", "text/javascript"), b.setAttribute("src", k), (k = document.getElementsByTagName("head")) && k[0] ? k[0].appendChild(b) : document.body.appendChild(b))
}
function sh_afterLoad(b) {
    for (var k = sh_requests[b], h = 0; h < k.length; h++) sh_highlightElement(k[h], sh_languages[b])
}
function sh_highlightDocument(b, k) {
    for (var h = document.getElementsByTagName("pre"), m = [], g = 0; g < h.length; g++) m.push(h.item(g));
    for (g = 0; g < m.length; g++) for (var h = m[g], p = sh_getClasses(h), q = 0; q < p.length; q++) {
        var s = p[q].toLowerCase();
        if ("sh-sourcecode" !== s && "sh-" === s.substr(0, 3)) {
            p = s.substring(3);
            if (p in sh_languages) sh_highlightElement(h, sh_languages[sh_lang]);
            else if ("string" === typeof b && "string" === typeof k) sh_load(p, h, b, k);
            else throw 'Found \x3cpre\x3e element with class\x3d"' + s + '", but no such language exists';
            break
        }
    }
}
$(function() {
    function b() {
        $("#addTable tr.tr_problem:visible").each(function(b) {
            $("td:last-child", $(this)).prev().html(String.fromCharCode(65 + b) + " - ")
        })
    }
    function k() {
        var g;
        g = $("#addTable tr.tr_problem:visible").length ? $("tr#addRow").prev() : $("tr#addRow");
        var h = g.clone();
        $("[name\x3dOJs]", h).val($("[name\x3dOJs]", g).val());
        $("[name\x3dtitles]", h).val("");
        $("td:eq(4), td:eq(5)", h).html("");
        h.removeAttr("id");
        $(":input", h).removeAttr("id");
        g = $("[name\x3dprobNums]", h);
        g.val().match(/^\s*\d+\s*$/) ? g.val(parseInt(g.val()) + 1) : g.val("");
        h.insertBefore("tr#addRow").show();
        b();
        26 <= $("#addTable tr.tr_problem:visible").length && $("#addBtn").hide()
    }
    if (0 != $("#js_require_editContest").length) {
        var h = parseInt($("[name\x3dbeginTime]").val());
        NaN != h && 0 < h && (h = new Date(h), $("[name\x3d_beginTime]").val(h.format("yyyy-MM-dd")), $("[name\x3dhour]").val(h.getHours()), $("[name\x3dminute]").val(h.getMinutes()));
        var m = function() {
            0 == $("input[name\x3d'contestType']:checked").val() ? ($(".real_contest_element").show(), $(".replay_element").hide()) : ($(".real_contest_element").hide(), $(".replay_element").show())
        };
        m();
        $("input[name\x3d'contestType']").change(function() {
            m()
        });
        $("#addBtn").click(function() {
            k()
        });
        $(document).on("click", ".deleteRow",
        function() {
            $(this).parent().parent().remove();
            b();
            26 > $("#addTable tr.tr_problem:visible").length && $("#addBtn").show()
        });
        $(document).on("mouseover", "tr.tr_problem",
        function() {
            $(this).css("background-color", "#CCEEFF")
        }).on("mouseout", "tr.tr_problem",
        function() {
            $(this).css("background-color", "transparent")
        });
        $("#form").submit(function() {
            $("#submit").attr("disabled", !0);
            $("#errorMsg").html("");
            if (1 > $("#addTable tr.tr_problem:visible").length) return $("#errorMsg").html("Please add one problem at least!"),
            $("#submit").attr("disabled", !1),
            !1;
            if (26 < $("#addTable tr.tr_problem:visible").length) return $("#errorMsg").html("At most 26 problems!"),
            $("#submit").attr("disabled", !1),
            !1;
            for (var b = 0,
            h = 0,
            k = $("#addTable tr.tr_problem:visible"), m = 0; m < k.length; m += 1) {
                for (var t = 0; t < m; t += 1) if ($("[name\x3dOJs]", k.eq(m)).val() == $("[name\x3dOJs]", k.eq(t)).val() && $("[name\x3dprobNums]", k.eq(m)).val() == $("[name\x3dprobNums]", k.eq(t)).val()) {
                    b = 1;
                    break
                }
                if (0 < k.eq(m).find("td span").length) {
                    h = 1;
                    break
                }
            }
            if (1 == b) return $("#errorMsg").html("Duplicate problems are not allowed!"),
            $("#submit").attr("disabled", !1),
            !1;
            if (1 == h) return $("#errorMsg").html("There are invalid problems!"),
            $("#submit").attr("disabled", !1),
            !1;
            b = parseInt($("#hour").val());
            h = parseInt($("#minute").val());
            k = parseInt($("#d_day").val());
            m = parseInt($("#d_hour").val());
            t = parseInt($("#d_minute").val());
            if (isNaN(b) || 0 > b || 23 < b || isNaN(h) || 0 > h || 59 < h || isNaN(k) || 0 > k || isNaN(m) || 0 > m || 23 < m || isNaN(t) || 0 > t || 59 < t) return $("#errorMsg").html("Date format error!"),
            $("#submit").attr("disabled", !1),
            !1;
            k = $("[name\x3d'_beginTime']").val().split("-");
            $("[name\x3d'beginTime']").val((new Date(k[0], parseInt(k[1], 10) - 1, k[2], b, h, 0)).getTime());
            $("tr:not(:visible)").remove()
        });
        1 > $("#addTable tr.tr_problem:visible").length && k();
        $("[name\x3d'_beginTime']").datepicker({
            dateFormat: "yy-mm-dd",
            maxDate: 30,
            showAnim: "blind",
            changeMonth: !0,
            changeYear: !0
        });
        $(".clk_select").click(function() {
            this.select()
        });
        $(".clk_select").blur(function() {
            if (!this.value || this.value.match(/^\s+$/)) this.value = 0
        });
        b();
        window.setInterval(function() {
            $("tr.tr_problem:visible").each(function() {
                var b = $(this),
                h = $("[name\x3dOJs]", b).val(),
                k = $("[name\x3dprobNums]", b).val(),
                m = h + "|" + k;
                b.attr("lastHash") != m && (b.attr("lastHash", m), "" != k && judgeService.findProblemSimple(h, k,
                function(m) {
                    var s = m[0],
                    w = m[1],
                    u = m[2],
                    x = m[4];
                    h == m[3] && k.trim() == x && (null == s ? b.children().eq( - 1).html("\x3cspan style\x3d'color:red'\x3eNo such problem!\x3c/span\x3e") : (b.children().eq( - 1).html("\x3ca target\x3d'_blank' href\x3d'" + basePath + "/problem/viewProblem.action?id\x3d" + s + "'\x3e" + w + "\x3c/a\x3e" + (2 == u ? "\x3cspan style\x3d'color:red'\x3e(Crawl Failed)\x3c/span\x3e": 1 == u ? "\x3cspan style\x3d'color:green'\x3e(Crawling)\x3c/span\x3e": "")), $("[name\x3dpids]", b).val(s), 1 == u && window.setTimeout(function() {
                        b.attr("lastHash", "")
                    },
                    2E3)))
                }))
            })
        },
        500)
    }
});
$(function() {
    function b() {
        return $("#listContest").DataTable({
            processing: !0,
            serverSide: !0,
            lengthMenu: [10, 20, 25, 50, 100],
            pageLength: 20,
            dom: '\x3c"H"pr\x3c"#buttonContainer_l"\x3e\x3c"#buttonContainer_r"\x3e\x3et\x3c"F"il\x3e',
            jQueryUI: !0,
            autoWidth: !1,
            stateSave: !0,
            language: {
                info: "_START_ to _END_ of _TOTAL_ contests",
                infoEmpty: "No contests",
                infoFiltered: " (filtering from _MAX_ total contests)",
                thousands: ""
            },
            order: [[2, "desc"]],
            pagingType: "simple_numbers",
            ajax: {
                url: basePath + "/contest/listContest.action",
                type: "POST",
                data: function(b) {
                    $.extend(b, h())
                },
                dataSrc: function(b) {
                    for (var h = [], k = 0, m = b.data.length; k < m; k++) {
                        var t = b.data[k];
                        h.push({
                            contestId: t[0],
                            contestTitle: t[1],
                            contestBeginTime: t[2],
                            contestEndTime: t[3],
                            contestPublic: t[4],
                            managerUserName: t[5],
                            managerUserId: t[6]
                        })
                    }
                    return h
                }
            },
            columns: [{
                className: "contest_id",
                orderSequence: ["desc", "asc"],
                data: function(b) {
                    return b.contestId
                }
            },
            {
                className: "title",
                data: function(b) {
                    return "\x3cdiv class\x3d'title'\x3e\x3ca cid\x3d'" + b.contestId + "' class\x3d'contest_entry' href\x3d'" + basePath + "/contest/view.action?cid\x3d" + b.contestId + "#overview'\x3e" + b.contestTitle + "\x3c/a\x3e\x3c/div\x3e"
                }
            },
            {
                className: "date",
                orderSequence: ["desc", "asc"],
                data: function(b) {
                    return "\x3cdiv class\x3d'localizedTime'\x3e" + b.contestBeginTime + "\x3c/div\x3e"
                }
            },
            {
                className: "length",
                orderable: !1,
                data: function(b) {
                    b = Math.round((b.contestEndTime - b.contestBeginTime) / 1E3);
                    var h = b / 86400,
                    k = b / 3600,
                    m = b / 60;
                    return 1 <= h ? Math.round(10 * h) / 10 + " days": 1 <= k ? Math.round(10 * k) / 10 + " hours": 0 < b ? Math.round(10 * m) / 10 + " minutes": "-"
                }
            },
            {
                className: "openness",
                orderable: !1,
                data: function(b) {
                    return b.contestPublic ? "Public": "Private"
                }
            },
            {
                className: "manager",
                data: function(b) {
                    return "\x3ca href\x3d'" + basePath + "/user/profile.action?uid\x3d" + b.managerUserId + "'\x3e" + b.managerUserName + "\x3c/a\x3e"
                }
            }],
            createdRow: function(b, h, k) {
                k = Vjudge.getServerTime().valueOf();
                k < h.contestBeginTime ? $(b).addClass("Scheduled") : k < h.contestEndTime ? $(b).addClass("Running") : $(b).addClass("Ended");
                $(b).find("td:eq(4)").addClass(h.contestPublic ? "Public": "Private")
            },
            preDrawCallback: function(b) {},
            drawCallback: function(b) {
                Vjudge.renderLocalizedTime(function() {
                    return this.parent()
                },
                function() {
                    return $("th.date")
                })
            },
            initComplete: function(b, h) {
                $("#filter").button().appendTo("#buttonContainer_l").click(function() {
                    k() || m.draw()
                });
                $("#reset").button().appendTo("#buttonContainer_l").click(function() {
                    $("[name\x3d'contestType']:first").prop("checked", !0);
                    $("[name\x3d'contestRunningStatus']:first").prop("checked", !0);
                    $("[name\x3d'title']").val("");
                    $("[name\x3d'manager']").val("");
                    k() || m.draw()
                });
                $("#contestRunningStatus").appendTo("#buttonContainer_r");
                $("#contestType").appendTo("#buttonContainer_r")
            }
        })
    }
    function k(b) {
        var h = $("input[name\x3d'contestType']:checked").val();
        b = 1 == h ? 3 : "contestType" == b ? 0 : $("input[name\x3d'contestRunningStatus']:checked").val();
        var k = $("[name\x3d'contestOpenness']").val(),
        m = $("input[name\x3d'title']").val(),
        t = $("input[name\x3d'manager']").val(),
        A = location.hash;
        location.hash = "#contestType\x3d" + h + "\x26contestRunningStatus\x3d" + b + "\x26contestOpenness\x3d" + k + "\x26title\x3d" + m + "\x26manager\x3d" + t;
        return A != location.hash
    }
    function h() {
        var b = {
            contestType: "0",
            contestRunningStatus: "0",
            contestOpenness: "0",
            title: "",
            manager: ""
        };
        try {
            return Vjudge.storage.get("contest.list.queryParam", b)
        } catch(h) {
            return console.error(h),
            b
        }
    }
    if (0 != $("#js_require_listContest").length) {
        $("#contestType").buttonset();
        $("input[name\x3d'contestType']").change(function() {
            k("contestType")
        });
        $("#contestRunningStatus").buttonset();
        $("[name\x3d'contestRunningStatus']").change(function() {
            k("contestRunningStatus")
        });
        $("#contestOpenness").selectmenu({
            change: function() {
                console.log($("[name\x3d'contestOpenness']").length);
                k("contestOpenness")
            }
        }).selectmenu("menuWidget").addClass("ui-menu-icons avatar");
        $(["#contestOpenness"]).each(function(b, h) {
            var k = h + "-button",
            m = h + "-menu";
            $(k).mouseenter(function() {
                $(h).selectmenu("open")
            }).mouseleave(function() {
                setTimeout(function() {
                    $(m).is(":hover") || $(k).is(":hover") || $(h).selectmenu("close")
                },
                100)
            });
            $(m).mouseleave(function() {
                $(h).selectmenu("close")
            })
        });
        $(".search_text").click(function(b) {
            b.stopPropagation()
        }).keypress(function(b) {
            b.stopPropagation()
        }).change(function() {
            k($(this).attr("name"))
        });
        $(window).hashchange(function() {
            for (var b = h(), k = /(\w+)=([^$&]*)/g;;) {
                var q = k.exec(location.hash);
                if (null == q) break;
                b[q[1]] = q[2]
            }
            Vjudge.storage.set("contest.list.queryParam", b);
            $("[name\x3d'contestType']").filter("[value\x3d" + b.contestType + "]").prop("checked", !0);
            $("#contestType").buttonset("refresh");
            $("[name\x3d'contestRunningStatus']:not([value\x3d3])").prop("disabled", 1 == b.contestType ? "disabled": !1);
            $("[name\x3d'contestRunningStatus']").filter("[value\x3d" + b.contestRunningStatus + "]").prop("checked", !0);
            $("#contestRunningStatus").buttonset("refresh");
            $("[name\x3d'contestOpenness']").val(b.contestOpenness).selectmenu("refresh");
            $("[name\x3d'title']").val(b.title);
            $("[name\x3d'manager']").val(b.manager);
            m && m.draw();
            Vjudge.sendGaPageview()
        }).hashchange();
        var m = b()
    }
});
$(function() {
    function b() {
        0 == $("[name\x3dids]:checked").length ? $("#checkAll").prop("checked", !1) : 0 == $("[name\x3dids]:not(:checked)").length && $("#checkAll").prop("checked", !0)
    }
    $("#same_contests_table").DataTable({
        scrollY: 400,
        scrollCollapse: !0,
        jQueryUI: !0,
        bPaginate: !1,
        bLengthChange: !1,
        bFilter: !1,
        bSort: !1,
        bInfo: !1,
        bAutoWidth: !1
    });
    $("#same_contests_table_wrapper").css("min-height", "100px");
    for (var k = $("[name\x3dcid]").val(), k = Vjudge.storage.get("contest_" + k, [k]), h = 0; h < k.length; h++) $("input[type\x3dcheckbox][value\x3d" + k[h] + "]").prop("checked", "true");
    $("[name\x3dshowTeams]").eq(Vjudge.storage.get("show_all_teams", 0)).prop("checked", "checked");
    $("[name\x3dshowNick]").prop("checked", 1 == Vjudge.storage.get("show_nick", !0) ? "checked": "");
    $("[name\x3dshowUsername]").prop("checked", 1 == Vjudge.storage.get("show_username", !0) ? "checked": "");
    $("[name\x3dshowAnimation]").eq(Vjudge.storage.get("show_animation", "1")).prop("checked", "checked");
    $("[name\x3dhideTime]").eq(Vjudge.storage.get("hide_time", "1")).prop("checked", "checked");
    $("[name\x3dincludePractice]").eq(Vjudge.storage.get("include_practice", "1")).prop("checked", "checked");
    $("#showTeams").buttonset();
    $("#teamName").buttonset();
    $("#showAnimation").buttonset();
    $("#hideTime").buttonset();
    $("#includePractice").buttonset();
    $("[name\x3dids]").click(function() {
        b()
    });
    $("#checkAll").click(function() {
        $("[name\x3dids]").prop("checked", $(this).prop("checked"))
    });
    $("[name\x3dshowTeams], [name\x3dshowNick], [name\x3dshowUsername], [name\x3dhideTime], [name\x3dincludePractice], [name\x3dids], #checkAll").click(function() {
        $(document).trigger("contest_setting_change")
    });
    $("#exportRank").button();
    $("#exportRank").click(function() {
        window.open("about:blank").document.write(Vjudge.storage.get("exportRankHtml", "", !0))
    });
    b()
});
$(function() {
    0 != $("#team_submissions_table").length && $("#team_submissions_table").dataTable({
        paging: !1,
        lengthChange: !1,
        searching: !1,
        ordering: !1,
        info: !1,
        autoWidth: !1
    })
});
$(function() {
    function b() {
        e.tabs("option", "active", 1);
        z = location.hash;
        var a = $("#problem_number_container \x3e input[value\x3d" + C[1] + "]");
        a.length && (a.prop("checked", "checked"), $("#problem_number_container").buttonset("refresh"));
        var b = $("#problem_number_container input:checked").val();
        n[b] || $.ajax({
            url: basePath + "/contest/showProblem.action?cid\x3d" + I + "\x26num\x3d" + b,
            type: "get",
            async: !1,
            success: function(a) {
                n[b] = a
            }
        });
        a = n[b];
        $("#problem_title").html("\x3cspan style\x3d'color:green'\x3e" + b + " - \x3c/span\x3e" + a.title);
        $("span.crawlInfo").hide();
        1 == a.timeLimit ? $("#crawling").show() : 2 == a.timeLimit ? $("#crawlFailed").show() : ($("#timeLimit").html(a.timeLimit), $("#memoryLimit").html(a.memoryLimit), $("#_64IOFormat").html(a._64IOFormat), $("#crawlSuccess").show());
        $("#problem_status").attr("href", basePath + "/contest/view.action?cid\x3d" + I + "#status//" + b + "/0");
        a.pid && $("#problem_practice").attr("href", basePath + "/problem/viewProblem.action?id\x3d" + a.pid);
        a.originProblemNumber && ($("#problem_origin").button("destroy"), $("#problem_origin").attr("href", basePath + "/problem/visitOriginUrl.action?id\x3d" + a.pid).text(a.originProblemNumber), $("#problem_origin").button());
        $("#desc_index").html("");
        for (var c in a.descriptions)"0" == a.descriptions[c].author && (a.descriptions[c].author = "System Crawler"),
        $("#desc_index").append("\x3coption did\x3d'" + a.descriptions[c].id + "' value\x3d'" + c + "'\x3e" + a.descriptions[c].author + "  (" + a.descriptions[c].updateTime + ")\x3c/option\x3e");
        t(b, a.desc_index)
    }
    function k() {
        e.tabs("option", "active", 2);
        var a = m();
        $.extend(a, {
            un: C[1],
            num: C[2],
            res: C[3],
            lang: C[4]
        });
        Vjudge.storage.set("contest.status.queryParam", a);
        $("[name\x3d'un']").val(a.un);
        $("[name\x3d'num']").val(a.num).selectmenu("refresh");
        $("[name\x3d'res']").val(a.res).selectmenu("refresh");
        $("[name\x3d'lang']").val(a.lang).selectmenu("refresh");
        O ? O.draw() : O = $("#table_status").DataTable({
            autoWidth: !1,
            processing: !0,
            serverSide: !0,
            pageLength: 20,
            lengthChange: !1,
            searching: !1,
            ordering: !1,
            info: !1,
            stateSave: !0,
            pagingType: "simple_numbers",
            dom: '\x3c"H"pr\x3c"#buttonContainer"\x3e\x3et\x3c"F"\x3e',
            jQueryUI: !0,
            ajax: {
                url: basePath + "/contest/fetchStatus.action?cid\x3d" + I,
                type: "POST",
                data: function(a) {
                    $.extend(a, m())
                },
                dataSrc: function(a) {
                    return a.data
                }
            },
            columns: [{
                className: "run_id",
                data: function(a) {
                    return a[0]
                }
            },
            {
                className: "username",
                data: function(a) {
                    return "\x3ca href\x3d'" + basePath + "/user/profile.action?uid\x3d" + a[9] + "'\x3e" + a[1] + "\x3c/a\x3e\x3cimg src\x3d'" + basePath + "/images/find_me.png' /\x3e"
                }
            },
            {
                className: "prob_num",
                data: function(a) {
                    return "\x3ca href\x3d'" + basePath + "/contest/view.action?cid\x3d" + I + "#problem/" + a[2] + "'\x3e" + a[2] + "\x3c/a\x3e\x3cimg src\x3d'" + basePath + "/images/find_me.png' /\x3e"
                }
            },
            {
                className: "result",
                data: function(a) {
                    var b = a[3];
                    a[12] && (b = "\x3ca href\x3d'" + basePath + "/problem/fetchSubmissionInfo.action?id\x3d" + a[0] + "' rel\x3d'facebox'\x3e" + b + "\x3c/a\x3e");
                    return "\x3cdiv\x3e" + b + "\x3c/div\x3e"
                }
            },
            {
                className: "memory",
                data: function(a) {
                    return 0 == a[13] ? a[4] : ""
                }
            },
            {
                className: "time",
                data: function(a) {
                    return 0 == a[13] ? a[5] : ""
                }
            },
            {
                className: "language",
                data: function(a) {
                    return "\x3cdiv\x3e" + (a[10] ? "\x3ca " + (2 == a[10] ? "class\x3d'shared'": "") + " target\x3d'_blank' href\x3d'" + basePath + "/contest/viewSource.action?id\x3d" + a[0] + "'\x3e" + a[6] + "\x3c/a\x3e": a[6]) + "\x3c/div\x3e"
                }
            },
            {
                className: "length",
                data: function(a) {
                    return a[7]
                }
            },
            {
                className: "date",
                data: function(a) {
                    return "\x3cdiv class\x3d'localizedTime'\x3e" + a[8] + "\x3c/div\x3e"
                }
            }],
            preDrawCallback: function(a) {
                $("[name\x3d'un']").val($("[name\x3d'un']").val().replace(/%\d\d|\s+/g, ""))
            },
            createdRow: function(a, b, c) {
                c = $(a);
                c.addClass(0 == b[13] ? "yes": 1 == b[13] ? "no": "pending");
                b[14] && c.addClass("working");
                c.attr("id", b[0]);
                $("a[rel\x3dfacebox]", c).facebox({
                    loadingImage: basePath + "/facebox/loading.gif",
                    closeImage: basePath + "/facebox/closelabel.png"
                });
                2 == b[13] && 0 == b[14] ? c.addClass("rejudge") : isSup && $("td:eq(8)", c).addClass("rejudge");
                $("td.username img", a).click(function() {
                    var a = $(this).parent().find("a").text();
                    $("#un").val() == a ? $("#un").val("") : $("#un").val(a);
                    h("un")
                });
                $("td.prob_num img", a).click(function() {
                    var a = b[2].replace(/<.+?>/g, "");
                    $("#num").val() == a ? $("#num").val("-").selectmenu("refresh") : $("#num").val(a).selectmenu("refresh");
                    h("num")
                });
                return c
            },
            fnDrawCallback: function(a) {
                Vjudge.renderLocalizedTime(function() {
                    return this.parent()
                },
                function() {
                    return $("th.date")
                });
                A()
            },
            initComplete: function(a, b) {
                $("#filter").button().appendTo("#buttonContainer").click(function() {
                    h() || O.draw()
                });
                $("#reset").button().appendTo("#buttonContainer").click(function() {
                    $("[name\x3d'un']").val("");
                    $("[name\x3d'num']").val("-").selectmenu("refresh");
                    $("[name\x3d'res']").val("0").selectmenu("refresh");
                    $("[name\x3d'lang']").val("").selectmenu("refresh");
                    h() || O.draw()
                })
            }
        })
    }
    function h(a) {
        a = $("[name\x3d'un']").val();
        var b = $("[name\x3d'num']").val(),
        c = $("[name\x3d'res']").val(),
        d = $("[name\x3d'lang']").val(),
        e = location.hash;
        location.hash = "#status/" + a + "/" + b + "/" + c + "/" + d;
        return e != location.hash
    }
    function m() {
        var a = {
            un: "",
            num: "-",
            res: "0",
            lang: ""
        };
        try {
            return Vjudge.storage.get("contest.status.queryParam", a)
        } catch(b) {
            return console.error(b),
            a
        }
    }
    function g() {
        var a = Math.max(c, 0) / d[0];
        $("#time_index").css("width", 2 + 100 * a + "%");.93 < a ? ($("#time_total span").text(""), $("#time_index span").text(u(c == d[0] ? d[0] : c - d[0]))) : ($("#time_total span").text(u(d[0])), $("#time_index span").text(u(c)))
    }
    function p() {
        if (! (0 > c)) {
            var b = (new Date).valueOf(),
            e = 3E5 < b - E ? 99999999 : C && "#rank" == C[0] ? 1E4: 6E4,
            b = d[1] >= d[0] ? 0 : Math.round((ma - d[1] + a + e - b) / 1E3),
            f = "Rank";
            0 < b && (f += " (" + b + ")");
            $("div#contest_tabs \x3e ul:first \x3e li:eq(3) \x3e a").text(f);
            c > ma && c - ma < e || ($("#calc_rank").css("visibility", "visible"), setTimeout(function() {
                R = Vjudge.storage.get("contest_" + I, [I]);
                for (var a = 0,
                b = 0; b < R.length; b++) void 0 == T[R[b]] ? judgeService.getRankInfo(R[b],
                function(b) {
                    T[b.cid] = {
                        cid: b.cid,
                        dataURL: b.dataURL,
                        isReplay: b.isReplay,
                        title: b.title,
                        managerId: b.managerId,
                        managerName: b.managerName,
                        endTime: (new Date).valueOf() + b.remainingLength,
                        beginTime: b.beginTime,
                        length: parseInt(b.length),
                        lastFetchTime: 0
                    }; ++a == R.length && q()
                }) : ++a == R.length && q()
            },
            10))
        }
    }
    function q() {
        for (var b = 0,
        e = 0; e < R.length; e++) T[R[e]].length && (!T[R[e]].data || T[R[e]].lastFetchTime < Math.min(a + c - d[1], T[R[e]].endTime)) ? $.getJSON(basePath + "/" + T[R[e]].dataURL,
        function(a) {
            var c = a[0];
            T[c].data = a;
            T[c].lastFetchTime = (new Date).valueOf(); ++b == R.length && s()
        }) : ++b == R.length && s()
    }
    function s() {
        for (var a = $("table#viewContest tr").length - 1, b = {},
        e = [], f = [], g = [], h = [], k = {},
        m = {},
        n = $("#my_account").attr("uid") + "_" + I, p = 0; p < a; ++p) f[p] = g[p] = 0;
        $.each(R,
        function(a, h) { ! isNaN(h) && T[h].length && $.each(T[h].data,
            function(a, l) {
                if (0 != a) if (1 == a) for (z in l) {
                    var n = l[z];
                    k[z] = n[0];
                    m[z] = n[1]
                } else if (n = Vjudge.storage.get("include_practice", "1"), 1E3 * l[3] < (c < d[0] || 0 == n ? c: 1E99) && (n = l[0] + "_" + h, b[n] || (b[n] = []), void 0 == b[n][l[1]] && (b[n][l[1]] = [ - 1, 0]), 0 > b[n][l[1]][0])) if (f[l[1]]++, l[2]) {
                    b[n][l[1]][0] = l[3];
                    if (void 0 == e[l[1]] || l[3] < e[l[1]]) e[l[1]] = l[3];
                    g[l[1]]++
                } else b[n][l[1]][1]++
            })
        });
        var q = [],
        s;
        for (s in b) {
            var t = 0,
            p = 0,
            l;
            for (l in b[s]) b[s][l] && (0 <= b[s][l][0] ? (s == n && (h[l] = 2), t++, p += b[s][l][0] + 1200 * b[s][l][1]) : s == n && (h[l] = 1));
            q.push([s, t, p])
        }
        q.sort(function(a, b) {
            return b[1] - a[1] || a[2] - b[2]
        });
        var x = 1 == Vjudge.storage.get("show_nick", !0),
        A = 1 == Vjudge.storage.get("show_username", !0),
        E = Vjudge.storage.get("show_all_teams", 0);
        s = 1 == Vjudge.storage.get("hide_time", !1);
        t = [];
        for (l = 0; l < q.length; ++l) {
            var p = q[l],
            C = p[0].lastIndexOf("_"),
            z = p[0].substr(0, C),
            C = p[0].substr(C + 1);
            if (! (0 == E && 50 <= l) || I == C && k[z]) {
                t.push("\x3cdiv data-id\x3d'" + escape(p[0]).replace(/\W/g, "_") + "' class\x3d'disp");
                I == C && (t.push(" cur_tr"), n == p[0] && t.push(" my_tr"));
                t.push("' cid\x3d'" + C + "' u\x3d'" + k[z] + "'\x3e\x3cdiv class\x3d'meta_td rank'\x3e" + (l + 1) + "\x3c/div\x3e\x3cdiv class\x3d'meta_td id");
                k[z] ? t.push("' title\x3d'" + (x == A ? m[z] && k[z] != m[z] ? k[z] + " (" + m[z] + ")": k[z] : x && m[z] ? m[z] : k[z]) + "'\x3e\x3ca target\x3d'_blank' href\x3d'" + basePath + "/user/profile.action?uid\x3d" + z + "'\x3e" + (x == A ? m[z] && k[z] != m[z] ? k[z] + "\x3cspan style\x3d'color:gray'\x3e(" + m[z] + ")\x3c/span\x3e": k[z] : x && m[z] ? m[z] : k[z]) + "\x3c/a\x3e\x3c/div\x3e") : t.push(" replay' title\x3d'" + z + "'\x3e" + z + "\x3c/div\x3e");
                var C = u(p[2], 0, 1),
                G = u(p[2], 1, 1);
                t.push("\x3cdiv class\x3d'meta_td solve'\x3e" + p[1] + "\x3c/div\x3e\x3cdiv class\x3d'meta_td penalty_td' v0\x3d'" + C + "' v1\x3d'" + G + "'\x3e" + G + "\x3c/div\x3e");
                C = b[p[0]];
                for (p = 0; p <= a; ++p) if (G = C[p]) {
                    t.push("\x3cdiv ");
                    0 > G[0] ? t.push("class\x3d'red") : 1E3 * G[0] > d[0] ? t.push("class\x3d'solved_practice") : e[p] == G[0] ? t.push("class\x3d'solvedfirst") : t.push("class\x3d'green");
                    var O = u(G[0], 0, 1);
                    t.push(" standing_time' pid\x3d'" + p + "'" + (0 <= G[0] ? " title\x3d'" + O + "'": "") + "\x3e");
                    s ? t.push((G[1] ? "\x3cspan\x3e-" + G[1] + "\x3c/span\x3e": "") + "\x3c/div\x3e") : t.push((1E3 * G[0] <= d[0] ? O: fa) + "\x3cbr /\x3e" + (G[1] ? "\x3cspan\x3e(-" + G[1] + ")\x3c/span\x3e": fa) + "\x3c/div\x3e")
                } else t.push("\x3cdiv class\x3d'standing_time'/\x3e");
                t.push("\x3c/div\x3e")
            }
        }
        ea = ["\x3ctr\x3e\x3cth\x3eRank\x3c/th\x3e\x3cth\x3eId\x3c/th\x3e\x3cth\x3eSolve\x3c/th\x3e\x3cth\x3ePenalty\x3c/th\x3e"];
        for (l = 0; l < a; l++) ea.push("\x3cth\x3e" + String.fromCharCode(65 + l) + "\x3c/th\x3e");
        ea.push("\x3c/tr\x3e");
        for (l = 0; l < q.length; ++l) if (p = q[l], C = p[0].lastIndexOf("_"), z = p[0].substr(0, C), C = p[0].substr(C + 1), !(0 == E && 50 <= l) || I == C && k[z]) {
            ea.push("\x3ctr\x3e\x3ctd\x3e" + (l + 1) + "\x3c/td\x3e\x3ctd\x3e");
            k[z] ? ea.push((x == A ? m[z] && k[z] != m[z] ? k[z] + "(" + m[z] + ")": k[z] : x && m[z] ? m[z] : k[z]) + "\x3c/td\x3e") : ea.push(z + "\x3c/td\x3e");
            C = u(p[2], 0, 1);
            ea.push("\x3ctd\x3e" + p[1] + "\x3c/td\x3e\x3ctd\x3e" + C + "\x3c/td\x3e");
            C = b[p[0]];
            for (p = 0; p <= a; ++p)(G = C[p]) ? ea.push("\x3ctd\x3e" + u(G[0], 0, 1) + (G[1] ? "(-" + G[1] + ")": "") + "\x3c/td\x3e") : ea.push("\x3ctd/\x3e");
            ea.push("\x3c/tr\x3e")
        }
        ea = ("\x3ctable\x3e" + ea.join("") + "\x3c/table\x3e").replace(fa, "");
        Vjudge.storage.set("exportRankHtml", ea, !0);
        for (p = l = q = n = 0; p < a; ++p) q += f[p],
        l += g[p],
        n < g[p] && (n = g[p]);
        for (p = 0; p < a; ++p) f[p] ? (x = n ? g[p] / n: 0, $("#rank_foot div").eq(p + 4).css("background-color", w(x)).removeClass("white-font").removeClass("black-font").addClass(.5 > x ? "black-font": "white-font").html((2 == h[p] ? "\x3cimg src\x3d'" + basePath + "/images/yes.png' height\x3d'20'/\x3e": 1 == h[p] ? "\x3cimg src\x3d'" + basePath + "/images/no.png' height\x3d'20'/\x3e": fa) + "\x3cbr /\x3e\x3ca href\x3d'" + basePath + "/contest/view.action?cid\x3d" + I + "#status//" + String.fromCharCode(65 + p) + "/1'\x3e" + g[p] + "\x3c/a\x3e" + (s ? "": "/\x3ca href\x3d'" + basePath + "/contest/view.action?cid\x3d" + I + "#status//" + String.fromCharCode(65 + p) + "/0'\x3e" + f[p] + "\x3c/a\x3e\x3cbr /\x3e" + Math.floor(100 * g[p] / f[p]) + "%"))) : $("#rank_foot div").eq(p + 4).css("background", "transparent").html(""),
        2 == h[p] ? $("#viewContest tbody tr:eq(" + p + ") td:eq(0)").html("\x3cimg src\x3d'" + basePath + "/images/yes.png' height\x3d'15'/\x3e") : 1 == h[p] ? $("#viewContest tbody tr:eq(" + p + ") td:eq(0)").html("\x3cimg src\x3d'" + basePath + "/images/no.png' height\x3d'15'/\x3e") : $("#viewContest tbody tr:eq(" + p + ") td:eq(0)").html(""),
        0 < f[p] ? $("#viewContest tbody tr:eq(" + p + ") td:eq(1)").html("\x3ca href\x3d'" + basePath + "/contest/view.action?cid\x3d" + I + "#status//" + String.fromCharCode(65 + p) + "/1'\x3e" + g[p] + "\x3c/a\x3e / \x3ca href\x3d'" + basePath + "/contest/view.action?cid\x3d" + I + "#status//" + String.fromCharCode(65 + p) + "/0'\x3e" + f[p] + "\x3c/a\x3e") : $("#viewContest tbody tr:eq(" + p + ") td:eq(1)").html("");
        q && !s ? $("#rank_foot div").eq(a + 4).css("background-color", "#D3D6FF").html(fa + "\x3cbr /\x3e" + l + "/" + q + "\x3cbr /\x3e" + Math.floor(100 * l / q) + "%") : $("#rank_foot div").eq(a + 4).css("background-color", "transparent").html("");
        $("#rank_header").width($("#rank").css("width"));
        $("#rank_foot").width($("#rank").css("width"));
        $("#rank_data_destination").html(t.join("")).prepend($("#rank_header").clone().css({
            position: "",
            top: "",
            "z-index": ""
        }).attr("id", "rank_header_1").show()).append($("#rank_foot").clone().css({
            position: "",
            bottom: "",
            "z-index": ""
        }).attr("id", "rank_foot_1").show());
        $("#rank").toggleClass("hide_time", s);
        0 == location.hash.indexOf("#rank") && 2 < $("#rank_data_source \x3e div").length && 0 < Vjudge.storage.get("show_animation", "1") && 70 >= $("#rank_data_destination \x3e div").length ? ($("#rank_data_destination \x3e div").each(function() {
            $("#rank_data_source \x3e div[data-id\x3d" + $(this).attr("data-id") + "]").html(this.innerHTML)
        }), $("#rank_data_source").quicksand($("#rank_data_destination \x3e div"), {
            duration: 1E3
        },
        function() {
            $("#rank_data_destination").html("");
            U()
        })) : ($("#rank_data_source").removeAttr("style").html($("#rank_data_destination").html()), $("#rank_data_destination").html(""), U());
        $("#calc_rank").css("visibility", "hidden");
        ma = c
    }
    function t(a, b) {
        var c = n[a],
        d = c.descriptions[b];
        $("[name\x3ddesc_index]").val(b);
        $("div.hiddable").hide();
        for (var e in d) d[e] && ($("#vj_" + e).show(), $("#vj_" + e + " div").html(d[e]));
        c.desc_index = b
    }
    function A() {
        var a = [];
        $("tr.working").each(function() {
            a.push($(this).attr("id"))
        });
        a.length && judgeService.getResult(a,
        function(a) {
            for (var b in a) {
                var c = a[b],
                d = c[0],
                e = c[1],
                f = c[2],
                g = c[3],
                h = c[4],
                k = c[5],
                c = c[6],
                m = $("#" + d);
                m.length && (h && (e = "\x3ca href\x3d'" + basePath + "/problem/fetchSubmissionInfo.action?id\x3d" + d + "' rel\x3d'facebox'\x3e" + e + "\x3c/a\x3e"), m.removeClass("pending"), m.removeClass("no"), m.removeClass("yes"), m.removeClass("working"), 0 == k ? (m.addClass("yes"), $(".memory", m).html(f + " KB"), $(".time", m).html(g + " ms")) : 1 == k ? m.addClass("no") : m.addClass("pending"), c ? m.addClass("working") : 2 == k && m.addClass("rejudge"), $(".result", m).html(e), $("a[rel\x3dfacebox]", m).facebox({
                    loadingImage: basePath + "/facebox/loading.gif",
                    closeImage: basePath + "/facebox/closelabel.png"
                }))
            }
            clearTimeout(ca);
            ca = setTimeout(A, 2E3)
        })
    }
    function w(a) {
        for (a = (65793 * Math.floor(255 * (1 - a))).toString(16); 6 > a.length;) a = "0" + a;
        return "#" + a
    }
    function u(a, b, c) {
        var d = "";
        1 != c && (a /= 1E3);
        if ( - 1 == a) return fa;
        0 > a && (a = -a, d = "-");
        if (1 == b) return d + Math.floor(a / 60);
        b = Math.floor(a % 3600 / 60);
        c = Math.floor(a % 60 + .5);
        return d + Math.floor(a / 3600) + ":" + (10 > b ? "0": "") + b + ":" + (10 > c ? "0": "") + c
    }
    function x() {
        clearInterval(G);
        var b = function() {
            c = Math.min(d[1] + (new Date).valueOf() - a, d[0]);
            f.slider("value", Math.max(c, 0));
            g();
            0 < c && 1E3 > c && 0 < d[0] && window.location.reload();
            p()
        };
        b();
        d[1] < d[0] && (G = setInterval(b, 1E3))
    }
    function U() {
        if ("#rank" == C[0]) {
            var a = $(window).scrollLeft(),
            b = $("div.my_tr");
            b.length && !Vjudge.isScrolledIntoView(b[0]) ? $("#img_find_me").css("visibility", "visible") : $("#img_find_me").css("visibility", "hidden");
            0 < a || !Vjudge.isScrolledIntoView("#contest_title") ? $("#img_go_top").css("visibility", "visible") : $("#img_go_top").css("visibility", "hidden");
            b = $("#contest_tabs").offset().left;
            $("#rank_header").css("left", 3 + b - a + "px");
            $("#rank_foot").css("left", 3 + b - a + "px");
            Vjudge.isScrolledIntoView("#rank_header_1") ? $("#rank_header").hide() : $("#rank_header").show();
            Vjudge.isScrolledIntoView("#rank_foot_1") ? $("#rank_foot").hide() : $("#rank_foot").show()
        }
    }
    if (0 != $("#js_require_view_contest").length) {
        "use strict";
        var I, R, a, c, d, e, f, n = {},
        O, C, z = "#problem/A",
        T = {},
        ma = -99999999,
        G, ea, ca, E, fa = decodeURIComponent("%E3%80%80");
        I = $("#cid").val();
        DWREngine.setAsync(!1);
        judgeService.getContestTimeInfo(I,
        function(b) {
            a = (new Date).valueOf();
            d = b;
            $("#time_total span").text(u(d[0]))
        });
        DWREngine.setAsync(!0);
        var Z, aa;
        f = $("#time_controller").slider({
            range: "min",
            min: 0,
            max: d[0],
            value: 0,
            start: function() {
                clearInterval(G);
                Z = (new Date).valueOf();
                G = 0
            },
            slide: function(b, e) {
                c = parseInt(e.value);
                g();
                if (e.value > d[1] + Z - a) return aa = !0,
                !1
            },
            stop: function(b, e) {
                e.value > d[1] + Z - a && (aa = !0);
                aa ? (x(), aa = !1, 0 == location.hash.indexOf("#rank") && (location.hash = "#rank", $.scrollTo({
                    top: "0px",
                    left: "0px"
                },
                0))) : (c = parseInt(e.value), g(), 0 == location.hash.indexOf("#rank") && (location.hash = "#rank/" + c), p())
            }
        });
        e = $("#contest_tabs").tabs({
            activate: function(a, b) {
                var c = b.newTab.find("a").attr("rel");
                E = (new Date).valueOf();
                0 != location.hash.indexOf(c) && (location.hash = "#problem" == c ? z: c);
                0 == location.hash.indexOf("#rank") ? $("#contest_tabs").css("min-width", 400 + 80 * $("table#viewContest tr").length + "px") : $("#contest_tabs").css("min-width", 0);
                $.scrollTo({
                    top: "0px",
                    left: "0px"
                },
                0)
            }
        });
        $("#viewContest").dataTable({
            paging: !1,
            lengthChange: !1,
            searching: !1,
            ordering: !1,
            info: !1,
            autoWidth: !1
        });
        $("span.plainDate").each(function() {
            $(this).html((new Date(parseInt($(this).html()))).format("yyyy-MM-dd hh:mm:ss"))
        });
        $("#contest_opt a").button();
        $("#delete_contest").click(function() {
            confirm("Sure to delete this contest?") && $.post(basePath + "/contest/deleteContest.action?cid\x3d" + I,
            function(a) {
                location.reload()
            })
        });
        $("#dialog-form-contest-login").dialog({
            autoOpen: !0,
            height: 250,
            width: 350,
            position: {
                my: "center",
                at: "center",
                of: window
            },
            modal: !0,
            buttons: {
                Login: function() {
                    var a = $("#cid").val(),
                    a = {
                        password: $("#contest_password").val(),
                        cid: a
                    };
                    $.post(basePath + "/contest/loginContest.action", a,
                    function(a) {
                        "success" == a ? window.location.reload() : ha(a)
                    })
                },
                Cancel: function() {
                    $(this).dialog("close")
                }
            },
            close: function() {
                window.location = basePath + "/contest/toListContest.action"
            }
        }).keyup(function(a) {
            13 == a.keyCode && $(this).dialog("option", "buttons").Login()
        });
        $("#problem_opt").find("a").button();
        $(":radio[name\x3dproblem_number]").each(function() {
            $(this).next().html($(this).val())
        });
        $("input[name\x3dproblem_number]").change(function() {
            location.hash = "#problem/" + $(this).val()
        });
        $("#problem_number_container").buttonset().show();
        $("#desc_index").change(function() {
            var a = $(":input[name\x3dproblem_number]:checked").val(),
            b = $("#desc_index \x3e option:eq(" + this.value + ")").attr("did");
            t(a, this.value);
            $.post(basePath + "/contest/appointDescription.action?cid\x3d" + I + "\x26num\x3d" + a + "\x26id\x3d" + b)
        });
        $("#submit").click(function() {
            Vjudge.doIfLoggedIn(function() {
                var a = $(":input[name\x3dproblem_number]:checked").val(),
                b = n[a];
                if (b) {
                    $("#submit_num").html(a + " - " + b.title);
                    a = $("select#language");
                    a.html("");
                    for (var c in b.languageList) a.append("\x3coption value\x3d'" + c + "'\x3e" + b.languageList[c] + "\x3c/option\x3e");
                    Vjudge.storage.get("lang_" + b.oj, null) && $("select#language").val(Vjudge.storage.get("lang_" + b.oj));
                    $("#dialog-form-submit").dialog("open")
                }
            });
            return ! 1
        });
        var ha = function(a) {
            var b = $("p.validateTips");
            b.text(a).addClass("ui-state-highlight");
            setTimeout(function() {
                b.removeClass("ui-state-highlight", 1500)
            },
            500)
        };
        $("#dialog-form-submit").dialog({
            autoOpen: !1,
            height: 650,
            width: 600,
            position: {
                my: "center",
                at: "center center-50px",
                of: window
            },
            modal: !0,
            buttons: {
                Submit: function() {
                    ha("Submitting...");
                    $("#dialog-form-submit").parent().find("button:first").hide();
                    var a = $(":input[name\x3dproblem_number]:checked").val(),
                    b = {
                        cid: I,
                        num: a,
                        language: $("[name\x3dlanguage]").val(),
                        isOpen: $(":input[name\x3disOpen]:checked").val(),
                        source: Base64.encode($("[name\x3dsource]").val())
                    };
                    Vjudge.storage.set("lang_" + n[a].oj, $("select#language").val());
                    $.ajax({
                        type: "POST",
                        url: basePath + "/contest/submit.action",
                        data: b,
                        success: function(a) {
                            "success" == a ? ($("#dialog-form-submit").dialog("close"), location.hash = "#status//-/0/") : (ha(a), $("#dialog-form-submit").parent().find("button:first").show())
                        },
                        error: function() {
                            ha("Connection timeout.");
                            $("#dialog-form-submit").parent().find("button:first").show()
                        }
                    })
                },
                Cancel: function() {
                    $(this).dialog("close")
                }
            },
            close: function() {
                $("#dialog-form-submit").parent().find("button:first").show();
                $("p.validateTips").html("");
                $(this).find("textarea").val("")
            }
        });
        $("#num").prepend("\x3coption value\x3d'-'\x3eAll\x3c/option\x3e");
        $("#num").selectmenu({
            change: function() {
                h("num")
            }
        }).selectmenu("menuWidget").addClass("ui-menu-icons avatar");
        $("#res").selectmenu({
            change: function() {
                h("res")
            }
        }).selectmenu("menuWidget").addClass("ui-menu-icons avatar");
        $("#lang").selectmenu({
            change: function() {
                h("lang")
            }
        }).selectmenu("menuWidget").addClass("ui-menu-icons avatar");
        $(["#num", "#res", "#lang"]).each(function(a, b) {
            var c = b + "-button",
            d = b + "-menu";
            $(c).mouseenter(function() {
                $(b).selectmenu("open")
            }).mouseleave(function() {
                setTimeout(function() {
                    $(d).is(":hover") || $(c).is(":hover") || $(b).selectmenu("close")
                },
                100)
            });
            $(d).mouseleave(function() {
                $(b).selectmenu("close")
            })
        });
        $(".search_text").click(function(a) {
            a.stopPropagation()
        }).keypress(function(a) {
            a.stopPropagation()
        }).keyup(function(a) {}).change(function() {
            h($(this).attr("name"))
        });
        $(document).on("click", ".rejudge",
        function() {
            var a = $(this),
            a = a.is("td") ? a.parent() : a,
            b = a.attr("id");
            a.removeClass("no");
            a.removeClass("yes");
            a.addClass("working");
            a.removeClass("rejudge");
            $.post(basePath + "/problem/rejudge.action", {
                id: b
            },
            function() {
                clearTimeout(ca);
                ca = setTimeout(A, 1E3)
            })
        });
        $(document).on("click", ".rejudge a",
        function(a) {
            a.stopPropagation()
        });
        $("#rank").css("width", 400 + 80 * $("table#viewContest tr").length + "px");
        $(document).on("mouseenter", "div.meta_td",
        function() {
            var a = $(this).parent().attr("cid");
            $("div[cid\x3d" + a + "] div.meta_td").addClass("same_td")
        }).on("mouseleave", "div.meta_td",
        function() {
            var a = $(this).parent().attr("cid");
            $("div[cid\x3d" + a + "] div.meta_td").removeClass("same_td")
        });
        $(document).on("click", "div.meta_td.rank, div.meta_td.id",
        function() {
            var a = $(this).parent().attr("cid"),
            a = T[a],
            b = (new Date).valueOf() > a.endTime;
            $.facebox("\x3ctable\x3e\x3ctr\x3e\x3ctd style\x3d'font-weight:bold;padding:5px'\x3eTitle\x3c/td\x3e\x3ctd\x3e" + (b && a.cid != I ? "\x3ca href\x3d'" + basePath + "/contest/view.action?cid\x3d" + a.cid + "#overview' target\x3d'_blank'\x3e": "") + (a.isReplay ? "\x3cimg src\x3d'" + basePath + "/images/replay.png' height\x3d'18' /\x3e ": "") + a.title + (b && a.cid != I ? "\x3c/a\x3e": "") + "\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd style\x3d'font-weight:bold;padding:5px'\x3eBegin Time\x3c/td\x3e\x3ctd\x3e" + (new Date(a.beginTime)).format("yyyy-MM-dd hh:mm:ss") + "\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd style\x3d'font-weight:bold;padding:5px'\x3eLength\x3c/td\x3e\x3ctd\x3e" + u(a.length) + "\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd style\x3d'font-weight:bold;padding:5px'\x3eManager\x3c/td\x3e\x3ctd\x3e\x3ca href\x3d'" + basePath + "/user/profile.action?uid\x3d" + a.managerId + "' target\x3d'_blank'\x3e" + a.managerName + "\x3c/a\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e");
            $("#facebox").css({
                "z-index": "1000000"
            })
        });
        $(document).on("click", "div.meta_td a",
        function(a) {
            a.stopPropagation()
        });
        $(document).on("mouseenter", "div.penalty_td",
        function() {
            $(this).text($(this).attr("v0"))
        }).on("mouseleave", "div.penalty_td",
        function() {
            $(this).text($(this).attr("v1"))
        });
        $(document).on("click", "div.standing_time, div.solve, div.penalty_td",
        function() {
            var a = $(this);
            if (a.hasClass("red") || a.hasClass("green") || a.hasClass("solvedfirst") || a.hasClass("solved_practice") || a.hasClass("penalty_td") || a.hasClass("solve")) {
                var b = a.parent();
                if (! (0 < b.find("div.replay").length)) {
                    var c = b.attr("cid"),
                    a = parseInt(a.attr("pid")),
                    d = /\d+/g.exec(b.attr("data-id"))[0];
                    isNaN(a) ? (b = b.attr("u"), location.hash = "#status/" + b + "/-/0") : $.facebox({
                        ajax: basePath + "/contest/listTeamSubmissions.action?uid\x3d" + d + "\x26cid\x3d" + c + "\x26num\x3d" + String.fromCharCode(65 + a),
                        loadingImage: basePath + "/facebox/loading.gif",
                        closeImage: basePath + "/facebox/closelabel.png"
                    })
                }
            }
        });
        $("#dialog-form-rank-setting").dialog({
            autoOpen: !1,
            width: 950,
            position: {
                my: "top",
                at: "center center-40%",
                of: window
            },
            modal: !0,
            show: {
                effect: "fade",
                duration: 300
            },
            buttons: {
                OK: function() {
                    $(this).dialog("close")
                }
            }
        });
        $(document).bind("contest_setting_change",
        function() {
            var a = [I];
            $("[name\x3dids]:checked").each(function() {
                a.push($(this).val())
            });
            var b = $("[name\x3dshowTeams]:checked").val(),
            c = 0 < $("[name\x3dshowNick]:checked").length,
            d = 0 < $("[name\x3dshowUsername]:checked").length,
            e = $("[name\x3dshowAnimation]:checked").val(),
            f = $("[name\x3dhideTime]:checked").val(),
            g = $("[name\x3dincludePractice]:checked").val();
            Vjudge.storage.set("contest_" + I, a);
            Vjudge.storage.set("show_all_teams", b);
            Vjudge.storage.set("show_nick", c);
            Vjudge.storage.set("show_username", d);
            Vjudge.storage.set("show_animation", e);
            Vjudge.storage.set("hide_time", f);
            Vjudge.storage.set("include_practice", g);
            ma = -99999999;
            p()
        });
        $("#rank_setting").click(function() {
            $.scrollTo({
                top: "0px",
                left: "0px"
            },
            0);
            var a = $("#dialog-form-rank-setting");
            a.dialog("open");
            a.html() || a.load(basePath + "/contest/showRankSetting.action?cid\x3d" + I)
        });
        $(window).scroll(U);
        $("#img_find_me").click(function() {
            $.scrollTo($("div.my_tr")[0], 800, {
                offset: {
                    top: 120 - $(window).height(),
                    left: -100
                }
            });
            return ! 1
        });
        $("#img_go_top").click(function() {
            $.scrollTo({
                top: "0px",
                left: "0px"
            },
            800);
            return ! 1
        });
        $("#div_rank_tool \x3e img").mouseover(function() {
            $(this).css("background", "#CCEEFF")
        }).mouseout(function() {
            $(this).css("background", "transparent")
        });
        x();
        p();
        $(window).hashchange(function() {
            var h = $("#contest_tabs \x3e ul \x3e li").length;
            C = location.hash.split("/");
            "#problem" == C[0] && 1 < h ? b() : "#status" == C[0] && 2 < h ? k() : "#rank" == C[0] && 3 < h ? (e.tabs("option", "active", 3), $("#contest_tabs").css("min-width", 400 + 80 * $("table#viewContest tr").length + "px"), !isNaN(C[1]) && 0 <= C[1] && C[1] <= Math.min(d[1] + (new Date).valueOf() - a, d[0]) && (c = parseInt(C[1]), f.slider("value", c), g(), clearInterval(G), G = 0)) : "#discuss" == C[0] && 4 < h ? (e.tabs("option", "active", 4), $("#disqus_thread").html() || _showDiscuss()) : e.tabs("option", "active", 0);
            Vjudge.sendGaPageview()
        }).hashchange();
        $("#contest_tabs").show()
    }
}); (function(b) {
    b.fn.menumaker = function(k) {
        var h = b(this),
        m = b.extend({
            title: "Menu",
            format: "dropdown",
            sticky: !1
        },
        k);
        return this.each(function() {
            h.prepend('\x3cdiv id\x3d"menu-button"\x3e' + m.title + "\x3c/div\x3e");
            b(this).find("#menu-button").on("click",
            function() {
                b(this).toggleClass("menu-opened");
                var g = b(this).next("ul");
                g.hasClass("open") ? g.hide().removeClass("open") : (g.show().addClass("open"), "dropdown" === m.format && g.find("ul").show())
            });
            h.find("li ul").parent().addClass("has-sub");
            multiTg = function() {
                h.find(".has-sub").prepend('\x3cspan class\x3d"submenu-button"\x3e\x3c/span\x3e');
                h.find(".submenu-button").on("click",
                function() {
                    b(this).toggleClass("submenu-opened");
                    b(this).siblings("ul").hasClass("open") ? b(this).siblings("ul").removeClass("open").hide() : b(this).siblings("ul").addClass("open").show()
                })
            };
            "multitoggle" === m.format ? multiTg() : h.addClass("dropdown"); ! 0 === m.sticky && h.css("position", "fixed");
            resizeFix = function() {
                512 < b(window).width() && h.find("ul").show();
                512 >= b(window).width() && h.find("ul").hide().removeClass("open")
            };
            resizeFix();
            return b(window).on("resize", resizeFix)
        })
    }
})(jQuery);
$(document).ready(function() {
    $("#cssmenu").menumaker({
        title: "Menu",
        format: "multitoggle"
    });
    $("#cssmenu").prepend("\x3cdiv id\x3d'menu-line'\x3e\x3c/div\x3e");
    var b = !1,
    k, h = 0,
    m = $("#cssmenu #menu-line"),
    g,
    p,
    q;
    $("#cssmenu \x3e ul \x3e li").each(function() {
        $(this).hasClass("active") && (k = $(this), b = !0)
    }); ! 1 === b && (k = $("#cssmenu \x3e ul \x3e li").first());
    q = g = k.width();
    p = h = k.position().left;
    m.css("width", g);
    m.css("left", h);
    $("#cssmenu \x3e ul \x3e li").hover(function() {
        k = $(this);
        g = k.width();
        h = k.position().left;
        m.css("width", g);
        m.css("left", h)
    },
    function() {
        m.css("left", p);
        m.css("width", q)
    })
}); (function(b, k, h) {
    b = function(b, g) {
        b.extend(!0, g.defaults, {
            dom: '\x3c"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix ui-corner-tl ui-corner-tr"lfr\x3et\x3c"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix ui-corner-bl ui-corner-br"ip\x3e',
            renderer: "jqueryui"
        });
        b.extend(g.ext.classes, {
            sWrapper: "dataTables_wrapper dt-jqueryui",
            sPageButton: "fg-button ui-button ui-state-default",
            sPageButtonActive: "ui-state-disabled",
            sPageButtonDisabled: "ui-state-disabled",
            sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
            sSortAsc: "ui-state-default sorting_asc",
            sSortDesc: "ui-state-default sorting_desc",
            sSortable: "ui-state-default sorting",
            sSortableAsc: "ui-state-default sorting_asc_disabled",
            sSortableDesc: "ui-state-default sorting_desc_disabled",
            sSortableNone: "ui-state-default sorting_disabled",
            sSortIcon: "DataTables_sort_icon",
            sScrollHead: "dataTables_scrollHead ui-state-default",
            sScrollFoot: "dataTables_scrollFoot ui-state-default",
            sHeaderTH: "ui-state-default",
            sFooterTH: "ui-state-default"
        });
        g.ext.renderer.header.jqueryui = function(g, h, k, t) {
            var A = "css_right ui-icon ui-icon-carat-2-n-s",
            w = -1 !== b.inArray("asc", k.asSorting),
            u = -1 !== b.inArray("desc", k.asSorting);
            k.bSortable && (w || u) ? w && !u ? A = "css_right ui-icon ui-icon-carat-1-n": !w && u && (A = "css_right ui-icon ui-icon-carat-1-s") : A = "";
            b("\x3cdiv/\x3e").addClass("DataTables_sort_wrapper").append(h.contents()).append(b("\x3cspan/\x3e").addClass(t.sSortIcon + " " + A)).appendTo(h);
            b(g.nTable).on("order.dt",
            function(b, g, m, p) {
                b = k.idx;
                h.removeClass(t.sSortAsc + " " + t.sSortDesc).addClass("asc" == p[b] ? t.sSortAsc: "desc" == p[b] ? t.sSortDesc: k.sSortingClass);
                h.find("span." + t.sSortIcon).removeClass("css_right ui-icon ui-icon-triangle-1-n css_right ui-icon ui-icon-triangle-1-s css_right ui-icon ui-icon-carat-2-n-s css_right ui-icon ui-icon-carat-1-n css_right ui-icon ui-icon-carat-1-s").addClass("asc" == p[b] ? "css_right ui-icon ui-icon-triangle-1-n": "desc" == p[b] ? "css_right ui-icon ui-icon-triangle-1-s": A)
            })
        };
        g.TableTools && b.extend(!0, g.TableTools.classes, {
            container: "DTTT_container ui-buttonset ui-buttonset-multi",
            buttons: {
                normal: "DTTT_button ui-button ui-state-default"
            },
            collection: {
                container: "DTTT_collection ui-buttonset ui-buttonset-multi"
            }
        })
    };
    "function" === typeof define && define.amd ? define(["jquery", "datatables"], b) : "object" === typeof exports ? b(require("jquery"), require("datatables")) : jQuery && b(jQuery, jQuery.fn.dataTable)
})(window, document);
$(function() {
    0 != $("#js_require_editDescription").length && (document.getElementById("editorsForm"), $("#remarks").focus(), $("#editorsForm").submit(function() {
        if (450 < $("[name\x3d'description.remarks']").val().length) return $("#tabs").tabs("select", 0),
        $("#remarks").focus(),
        alert("Remarks should be shorter than 450 characters !"),
        !1
    }), $("#tabs").tabs({
        cookie: {
            expires: 30
        }
    }), $("#tabs").removeClass("ui-widget-content"), $("#tabs").addClass("ui-widget-content-custom"), CKEDITOR.replace("description", {
        sharedSpaces: {
            top: "topSpace",
            bottom: "bottomSpace"
        }
    }), CKEDITOR.replace("input", {
        sharedSpaces: {
            top: "topSpace",
            bottom: "bottomSpace"
        },
        removePlugins: "maximize,resize"
    }), CKEDITOR.replace("output", {
        sharedSpaces: {
            top: "topSpace",
            bottom: "bottomSpace"
        },
        removePlugins: "maximize,resize"
    }), CKEDITOR.replace("sampleInput", {
        sharedSpaces: {
            top: "topSpace",
            bottom: "bottomSpace"
        },
        removePlugins: "maximize,resize"
    }), CKEDITOR.replace("sampleOutput", {
        sharedSpaces: {
            top: "topSpace",
            bottom: "bottomSpace"
        },
        removePlugins: "maximize,resize"
    }), CKEDITOR.replace("hint", {
        sharedSpaces: {
            top: "topSpace",
            bottom: "bottomSpace"
        },
        removePlugins: "maximize,resize"
    }))
});
$(function() {
    0 != $("#js_require_listOL").length && (jQuery.fn.dataTableExt.oSort["custom-time-asc"] = function(b, k) {
        var h = b.split(/\D+/),
        m = k.split(/\D+/),
        g,
        p;
        if (h.length != m.length) return h.length < m.length ? -1 : 1;
        for (var q = 0; q < h.length && q < m.length; q++) if (g = parseInt(h[q], 10), p = parseInt(m[q], 10), g != p) return g < p ? -1 : 1;
        return 0
    },
    jQuery.fn.dataTableExt.oSort["custom-time-desc"] = function(b, k) {
        var h = b.split(/\D+/),
        m = k.split(/\D+/),
        g,
        p;
        if (h.length != m.length) return h.length > m.length ? -1 : 1;
        for (var q = 0; q < h.length && q < m.length; q++) if (g = parseInt(h[q], 10), p = parseInt(m[q], 10), g != p) return g > p ? -1 : 1;
        return 0
    },
    $("#listOL").dataTable({
        aaSorting: [[6, "asc"]],
        bPaginate: !1,
        bLengthChange: !1,
        bFilter: !0,
        bSort: !0,
        bInfo: !1,
        bAutoWidth: !1,
        bStateSave: !0,
        aoColumns: [{
            sType: "html"
        },
        {
            sType: "html"
        },
        {
            sType: "html"
        },
        {
            sType: "html"
        },
        {
            sType: "custom-time"
        },
        {
            sType: "custom-time"
        },
        {
            sType: "custom-time"
        },
        {
            sType: "string"
        },
        {
            sType: "string"
        },
        {
            sType: "string"
        }]
    }))
});
$(function() {
    function b() {
        return $("#listProblem").DataTable({
            processing: !0,
            serverSide: !0,
            lengthMenu: [10, 20, 25, 50, 100],
            pageLength: 20,
            dom: '\x3c"H"pr\x3c"#buttonContainer"\x3e\x3et\x3c"F"il\x3e',
            jQueryUI: !0,
            autoWidth: !1,
            stateSave: !0,
            language: {
                info: "_START_ to _END_ of _TOTAL_ problems",
                infoEmpty: "No problems",
                infoFiltered: " (filtering from _MAX_ total problems)",
                thousands: ""
            },
            order: [[3, "desc"]],
            pagingType: "simple_numbers",
            ajax: {
                url: basePath + "/problem/listProblem.action",
                type: "POST",
                data: function(b) {
                    $.extend(b, h())
                },
                dataSrc: function(b) {
                    for (var h = [], k = 0, m = b.data.length; k < m; k++) {
                        var t = b.data[k];
                        h.push([t[0], "\x3ca href\x3d'" + basePath + "/problem/visitOriginUrl.action?id\x3d" + t[5] + "' target\x3d'_blank'\x3e" + t[1] + "\x3c/a\x3e", "\x3ca href\x3d'" + basePath + "/problem/viewProblem.action?id\x3d" + t[5] + "'\x3e" + t[2] + "\x3c/a\x3e", "\x3cdiv class\x3d'localizedTime'\x3e" + t[3] + "\x3c/div\x3e", "\x3cdiv\x3e" + (t[4] || "") + "\x3c/div\x3e", t[7]])
                    }
                    return h
                }
            },
            columns: [{
                className: "oj",
                orderable: !1,
                searchable: !1
            },
            {
                className: "prob_num"
            },
            {
                className: "title"
            },
            {
                className: "date",
                orderSequence: ["desc", "asc"]
            },
            {
                className: "source"
            },
            {
                visible: !1
            }],
            createdRow: function(b, h, k) {
                1 != h[5] && 2 != h[5] || $(b).addClass("Running")
            },
            preDrawCallback: function(b) {
                0 < $("#probNum").val().length && $("#probNum").is(":focus") ? ($("#title").val(""), $("#source").val("")) : (0 < $("#title").val().length || 0 < $("#source").val().length) && $("#probNum").val("")
            },
            drawCallback: function(b) {
                Vjudge.renderLocalizedTime(function() {
                    return this.parent()
                },
                function() {
                    return $("th.date")
                })
            },
            initComplete: function(b, h) {
                $("#filter").button().appendTo("#buttonContainer").click(function() {
                    k() || m.draw()
                });
                $("#reset").button().appendTo("#buttonContainer").click(function() {
                    $("[name\x3d'OJId']").val("All");
                    $("[name\x3d'probNum']").val("");
                    $("[name\x3d'title']").val("");
                    $("[name\x3d'source']").val("");
                    k() || m.draw()
                })
            }
        })
    }
    function k(b) {
        b = $("[name\x3d'OJId']").val();
        var h = $("[name\x3d'probNum']").val(),
        k = $("[name\x3d'title']").val(),
        m = $("[name\x3d'source']").val(),
        t = location.hash;
        location.hash = "#OJId\x3d" + b + "\x26probNum\x3d" + h + "\x26title\x3d" + k + "\x26source\x3d" + m;
        return t != location.hash
    }
    function h() {
        var b = {
            OJId: "All",
            probNum: "",
            title: "",
            source: ""
        };
        try {
            return Vjudge.storage.get("problem.list.queryParam", b)
        } catch(h) {
            return console.error(h),
            b
        }
    }
    if (0 != $("#js_require_listProblem").length) {
        $("#OJId").selectmenu({
            change: function() {
                k("OJId")
            }
        }).selectmenu("menuWidget").addClass("ui-menu-icons avatar");
        $(["#OJId"]).each(function(b, h) {
            var k = h + "-button",
            m = h + "-menu";
            $(k).mouseenter(function() {
                $(h).selectmenu("open")
            }).mouseleave(function() {
                setTimeout(function() {
                    $(m).is(":hover") || $(k).is(":hover") || $(h).selectmenu("close")
                },
                100)
            });
            $(m).mouseleave(function() {
                $(h).selectmenu("close")
            })
        });
        $(".search_text").click(function(b) {
            b.stopPropagation()
        }).keypress(function(b) {
            b.stopPropagation()
        }).change(function() {
            k($(this).attr("name"))
        });
        $(window).hashchange(function() {
            for (var b = h(), k = /(\w+)=([^$&]*)/g;;) {
                var q = k.exec(location.hash);
                if (null == q) break;
                b[q[1]] = q[2]
            }
            Vjudge.storage.set("problem.list.queryParam", b);
            $("[name\x3d'OJId']").val(b.OJId).selectmenu("refresh");
            $("[name\x3d'probNum']").val(b.probNum);
            $("[name\x3d'title']").val(b.title);
            $("[name\x3d'source']").val(b.source);
            m && m.draw();
            Vjudge.sendGaPageview()
        }).hashchange();
        var m = b()
    }
});
$(function() {
    function b() {
        return $("#status").DataTable({
            processing: !0,
            serverSide: !0,
            pageLength: 20,
            dom: '\x3c"H"pr\x3c"#buttonContainer"\x3e\x3et\x3c"F"\x3e',
            jQueryUI: !0,
            autoWidth: !1,
            stateSave: !0,
            ordering: !0,
            pagingType: "simple_numbers",
            ajax: {
                url: basePath + "/problem/fetchStatus.action",
                type: "POST",
                data: function(b) {
                    $.extend(b, h())
                },
                dataSrc: function(b) {
                    for (var g = [], h = 0, k = b.data.length; h < k; h++) {
                        var m = b.data[h];
                        g.push([m[0] + (0 < m[13] ? "(\x3ca href\x3d'" + basePath + "/contest/view.action?cid\x3d" + m[13] + "#overview' target\x3d'_blank'\x3e#\x3c/a\x3e)": ""), "\x3cdiv\x3e\x3ca href\x3d'" + basePath + "/user/profile.action?uid\x3d" + m[9] + "' target\x3d'_blank'\x3e" + m[1] + "\x3c/a\x3e\x3cimg src\x3d'" + basePath + "/images/find_me.png' /\x3e\x3c/div\x3e", "\x3cdiv\x3e\x3ca href\x3d'" + basePath + "/problem/visitOriginUrl.action?id\x3d" + m[2] + "' target\x3d'_blank'\x3e" + m[11] + "\x3c/a\x3e\x3c/div\x3e", "\x3cdiv\x3e\x3ca href\x3d'" + basePath + "/problem/viewProblem.action?id\x3d" + m[2] + "'\x3e" + m[12] + "\x3c/a\x3e\x3cimg src\x3d'" + basePath + "/images/find_me.png' /\x3e\x3c/div\x3e", "\x3cdiv\x3e" + (m[14] ? "\x3ca href\x3d'" + basePath + "/problem/fetchSubmissionInfo.action?id\x3d" + m[0] + "' rel\x3d'facebox'\x3e" + m[3] + "\x3c/a\x3e": m[3]) + "\x3c/div\x3e", 0 == m[15] && 0 < m[4] ? m[4] : "", 0 == m[15] ? m[5] : "", "\x3cdiv\x3e" + (m[10] ? "\x3ca " + (2 == m[10] ? "class\x3d'shared'": "") + " target\x3d'_blank' href\x3d'" + basePath + "/problem/viewSource.action?id\x3d" + m[0] + "'\x3e" + m[6] + "\x3c/a\x3e": m[6]) + "\x3c/div\x3e", m[7], "\x3cdiv class\x3d'localizedTime'\x3e" + m[8] + "\x3c/div\x3e", m[15], m[16]])
                    }
                    return g
                }
            },
            columns: [{
                className: "run_id"
            },
            {
                className: "username"
            },
            {
                className: "oj"
            },
            {
                className: "prob_num"
            },
            {
                className: "result"
            },
            {
                className: "memory"
            },
            {
                className: "time"
            },
            {
                className: "language"
            },
            {
                className: "length"
            },
            {
                className: "date"
            },
            {
                visible: !1
            },
            {
                visible: !1
            }],
            columnDefs: [{
                targets: "_all",
                orderable: !1
            }],
            createdRow: function(b, g, h) {
                h = $(b);
                h.addClass(0 == g[10] ? "yes": 1 == g[10] ? "no": "pending");
                g[11] && h.addClass("working");
                h.attr("id", g[0].replace(/\(.+/, ""));
                $("a[rel\x3dfacebox]", h).facebox({
                    loadingImage: basePath + "/facebox/loading.gif",
                    closeImage: basePath + "/facebox/closelabel.png"
                });
                2 == g[10] && 0 == g[11] ? h.addClass("rejudge") : p && $("td.date", h).addClass("rejudge");
                $("td.username img", b).click(function() {
                    var b = $(this).parent().find("a").text();
                    $("#un").val() == b ? $("#un").val("") : $("#un").val(b);
                    k("un")
                });
                $("td.prob_num img", b).click(function() {
                    var b = g[2].replace(/<.+?>/g, ""),
                    h = $(this).parent().find("a").text();
                    $("#OJId").val() == b && $("#probNum").val() == h ? ($("#OJId").val("All").selectmenu("refresh"), $("#probNum").val("")) : ($("#OJId").val(g[2].replace(/<.+?>/g, "")).selectmenu("refresh"), $("#probNum").val($(this).parent().find("a").text()));
                    k("probNum")
                })
            },
            preDrawCallback: function(b) {
                b = this.api();
                var g = h().orderBy;
                "run_id" == g ? b.order([0, "desc"]) : "memory" == g ? b.order([5, "asc"]) : "time" == g ? b.order([6, "asc"]) : "length" == g && b.order([8, "asc"])
            },
            drawCallback: function(b) {
                Vjudge.renderLocalizedTime(function() {
                    return this.parent()
                },
                function() {
                    return $("th.date")
                });
                m()
            },
            initComplete: function(b, g) {
                $("#filter").button().appendTo("#buttonContainer").click(function() {
                    k() || q.draw()
                });
                $("#reset").button().appendTo("#buttonContainer").click(function() {
                    $(".errorMessage").remove();
                    $("[name\x3d'un']").val("");
                    $("[name\x3d'OJId']").val("All");
                    $("[name\x3d'probNum']").val("");
                    $("[name\x3d'orderBy']").val("run_id");
                    $("[name\x3d'res']").val("0");
                    $("[name\x3d'language']").val("");
                    k() || q.draw()
                })
            }
        })
    }
    function k(b) {
        var g = $("[name\x3d'un']").val(),
        h = $("[name\x3d'OJId']").val(),
        k = $("[name\x3d'probNum']").val(),
        m = "All" != h && k ? $("[name\x3d'orderBy']").val() : "run_id",
        p = $("[name\x3d'res']").val(),
        q = $("[name\x3d'language']").val();
        "res" == b ? m = 1 == p ? m: "run_id": p = "run_id" != m ? "1": p;
        b = location.hash;
        location.hash = "#un\x3d" + g + "\x26OJId\x3d" + h + "\x26probNum\x3d" + k + "\x26res\x3d" + p + "\x26orderBy\x3d" + m + "\x26language\x3d" + q;
        return b != location.hash
    }
    function h() {
        var b = {
            un: "",
            OJId: "All",
            probNum: "",
            res: "0",
            language: "",
            orderBy: "run_id"
        };
        try {
            return Vjudge.storage.get("problem.status.queryParam", b)
        } catch(g) {
            return console.error(g),
            b
        }
    }
    function m() {
        var b = [];
        $("tr.working").each(function() {
            b.push($(this).attr("id"))
        });
        b.length && judgeService.getResult(b,
        function(b) {
            for (var h in b) {
                var k = b[h],
                p = k[0],
                q = k[1],
                s = k[2],
                I = k[3],
                R = k[4],
                a = k[5],
                k = k[6],
                c = $("#" + p);
                c.length && (R && (q = "\x3ca href\x3d'" + basePath + "/problem/fetchSubmissionInfo.action?id\x3d" + p + "' rel\x3d'facebox'\x3e" + q + "\x3c/a\x3e"), c.removeClass("pending"), c.removeClass("no"), c.removeClass("yes"), c.removeClass("working"), 0 == a ? (c.addClass("yes"), $(".memory", c).html(s), $(".time", c).html(I)) : 1 == a ? c.addClass("no") : c.addClass("pending"), k ? c.addClass("working") : 2 == a && c.addClass("rejudge"), $(".result", c).html(q), $("a[rel\x3dfacebox]", c).facebox({
                    loadingImage: "facebox/loading.gif",
                    closeImage: "facebox/closelabel.png"
                }))
            }
            clearTimeout(g);
            g = setTimeout(m, 2E3)
        })
    }
    if (0 != $("#js_require_problem_status").length) {
        var g, p = 1 == $("#isSup").val();
        $("#OJId").selectmenu({
            change: function() {
                k("OJId")
            }
        }).selectmenu("menuWidget").addClass("ui-menu-icons avatar");
        $("#res").selectmenu({
            change: function() {
                k("res")
            }
        });
        $("#language").selectmenu({
            change: function() {
                k("language")
            }
        });
        $(["#OJId", "#res", "#language"]).each(function(b, g) {
            var h = g + "-button",
            k = g + "-menu";
            $(h).mouseenter(function() {
                $(g).selectmenu("open")
            }).mouseleave(function() {
                setTimeout(function() {
                    $(k).is(":hover") || $(h).is(":hover") || $(g).selectmenu("close")
                },
                100)
            });
            $(k).mouseleave(function() {
                $(g).selectmenu("close")
            })
        });
        $(".search_text").click(function(b) {
            b.stopPropagation()
        }).keypress(function(b) {
            b.stopPropagation()
        }).keyup(function(b) {}).change(function() {
            k($(this).attr("name"))
        });
        $(["run_id", "memory", "time", "length"]).each(function(b, g) {
            $("th." + g).click(function(b) {
                $("[name\x3dorderBy]").val(g);
                k("orderBy")
            })
        });
        $(window).hashchange(function() {
            for (var b = h(), g = /(\w+)=([^$&]*)/g;;) {
                var k = g.exec(location.hash);
                if (null == k) break;
                b[k[1]] = k[2]
            }
            Vjudge.storage.set("problem.status.queryParam", b);
            $("[name\x3d'un']").val(b.un);
            $("[name\x3d'OJId']").val(b.OJId).selectmenu("refresh");
            $("[name\x3d'probNum']").val(b.probNum);
            $("[name\x3d'res']").val(b.res).selectmenu("refresh");
            $("[name\x3d'language']").val(b.language).selectmenu("refresh");
            $("[name\x3d'orderBy']").val(b.orderBy);
            q && q.draw();
            Vjudge.sendGaPageview()
        }).hashchange();
        $(document).on("click", ".rejudge",
        function() {
            var b = $(this).closest("tr"),
            h = b.attr("id");
            b.removeClass("no");
            b.removeClass("yes");
            b.addClass("working");
            b.removeClass("rejudge");
            $.post(basePath + "/problem/rejudge.action", {
                id: h
            },
            function() {
                clearTimeout(g);
                g = setTimeout(m, 1E3)
            })
        });
        $(document).on("click", ".rejudge a",
        function(b) {
            b.stopPropagation()
        });
        var q = b()
    }
});
$(document).ready(function() {
    function b() {
        1 == t && judgeService.getProblemStatus(q,
        function(g) {
            console.log(g);
            1 == g ? setTimeout(b, 2E3) : window.location.reload()
        })
    }
    function k(b) {
        $(".hiddable").hide();
        $(".selected").removeClass("selected");
        $(".desc_info:eq(" + b + ")").addClass("selected");
        $(".opt:eq(" + b + ")").show();
        $(".remark:eq(" + b + ")").animate({
            height: "show",
            opacity: "show"
        },
        "fast");
        for (elem in m[b]) m[b][elem] && ($("#vj_" + elem).show(), $("#vj_" + elem + " div").html(m[b][elem]));
        $(".textBG img").load(function() {
            g[$(this).attr("src")] = $(this).attr("width");
            p[$(this).attr("src")] = $(this).attr("height");
            $(this).resizeImg()
        })
    }
    function h() {
        0 == ($.cookie("menuHide") || 0) ? ($("td#right_view").show(), $("#bt").attr("src", basePath + "/images/to_right.png")) : ($("td#right_view").hide(), $("#bt").attr("src", basePath + "/images/to_left.png"))
    }
    if (0 != $("#js_require_viewProblem").length) {
        var m, g = {},
        p = {},
        q = $("input[name\x3dpid]").val(),
        s = $("input[name\x3dtimeLimit]").val(),
        t = 1 == s || 2 == s ? s: 0;
        h();
        DWREngine.setAsync(!1);
        judgeService.fetchDescriptions(q,
        function(b) {
            m = b
        });
        DWREngine.setAsync(!0);
        $(".desc_info").click(function() {
            $(this).hasClass("selected") || k($(this).children()[0].id.substring(4))
        });
        $("a.vote").click(function() {
            $.post(basePath + "/problem/vote4Description.action", {
                id: $(this)[0].id.substring(5)
            });
            $(this).parent().next().children().eq(1).html(parseInt($(this).parent().next().children().eq(1).html()) + 1);
            $("a.vote").each(function() {
                $(this).parent().next().show();
                $(this).parent().remove()
            })
        });
        $("a.delete_desc").click(function() {
            confirm("Sure to delete this description?") && $.post(basePath + "/problem/deleteDescription.action", {
                id: $(this)[0].id.substring(4)
            },
            function() {
                location.reload()
            })
        });
        $("#mid_view").mouseover(function() {
            $(this).addClass("mid_hover")
        }).mouseout(function() {
            $(this).removeClass("mid_hover")
        }).click(function() {
            var b = $.cookie("menuHide") || 0;
            $.cookie("menuHide", 1 - b, {
                path: "/",
                expires: 30
            });
            h()
        });
        $(".opt_btn a").button();
        if (0 <= location.href.indexOf("edit\x3d")) k($("input[name\x3dvote]").length - 1);
        else {
            var A, w = -1;
            $("input[name\x3dvote]").each(function(b) {
                var g = $(this).val();
                g.match(/\d+/) && (curVote = parseInt(g), curVote >= w && (w = curVote, A = b))
            });
            k(A)
        }
        $(window).resize(function() {
            $(".textBG img").each(function() {
                $(this).resizeImg()
            })
        });
        b();
        jQuery.prototype.resizeImg = function() {
            var b = $(this).attr("src");
            if (void 0 != g[b]) {
                var h = Math.min(.99 * (document.body.clientWidth - 320) / g[b], 1);
                $(this).attr("width", h * g[b]);
                $(this).attr("height", h * p[b])
            }
        }
    }
});
$(function() {
    if (0 != $("#js_require_submit").length) {
        var b = $("input[name\x3doj]").val();
        $.cookie("lang_" + b) && $("select#language").val($.cookie("lang_" + b));
        $("select#language").change(function() {
            $.cookie("lang_" + b, $(this).val(), {
                expires: 30,
                path: "/"
            })
        });
        $("#form").submit(function() {
            console.log($("textarea[name\x3d'tmp_source']").val());
            $("#submit").attr("disabled", !0);
            $("textarea[name\x3d'tmp_source']").attr("disabled", !0);
            $("input[name\x3d'source']").val(Base64.encode($("textarea[name\x3d'tmp_source']").val()));
            return ! 0
        })
    }
});
$(function() {
    0 != $("#js_require_profile").length && ($("#confirm_mail").click(function() {
        window.confirm("Confirm you email?") && (window.location.href = this.href);
        return ! 1
    }), $("#find_password").click(function() {
        window.confirm("Find password of this account through Email?") && (window.location.href = this.href);
        return ! 1
    }))
});
$(function() {
    if (0 != $("#js_require_viewSource").length) {
        var b = function() {
            1 == $("input[name\x3dopen]:checked").val() ? $("p#info").css("visibility", "visible") : $("p#info").css("visibility", "hidden")
        };
        b();
        $("input[name\x3dopen]").change(function() {
            $.post(basePath + "/problem/toggleOpen.action?id\x3d" + $("[name\x3dsid]").val(), b)
        });
        sh_highlightDocument(basePath + "/shjsx/", ".min.js");
        _showDiscuss()
    }
});