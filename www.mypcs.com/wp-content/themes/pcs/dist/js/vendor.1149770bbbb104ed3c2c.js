/*! For license information please see vendor.1149770bbbb104ed3c2c.js.LICENSE.txt */
(self.webpackChunkpcs_website = self.webpackChunkpcs_website || []).push([
    [121], {
        2674: function(e, t, n) {
            var r;

            function i(e) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, i(e)
            }
            e = n.nmd(e),
                function(t, n) {
                    "use strict";
                    "object" === i(e) && "object" === i(e.exports) ? e.exports = t.document ? n(t, !0) : function(e) {
                        if (!e.document) throw new Error("jQuery requires a window with a document");
                        return n(e)
                    } : n(t)
                }("undefined" != typeof window ? window : this, (function(n, o) {
                    "use strict";
                    var a = [],
                        s = Object.getPrototypeOf,
                        u = a.slice,
                        l = a.flat ? function(e) {
                            return a.flat.call(e)
                        } : function(e) {
                            return a.concat.apply([], e)
                        },
                        c = a.push,
                        f = a.indexOf,
                        p = {},
                        d = p.toString,
                        h = p.hasOwnProperty,
                        g = h.toString,
                        v = g.call(Object),
                        y = {},
                        m = function(e) {
                            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
                        },
                        x = function(e) {
                            return null != e && e === e.window
                        },
                        b = n.document,
                        w = {
                            type: !0,
                            src: !0,
                            nonce: !0,
                            noModule: !0
                        };

                    function T(e, t, n) {
                        var r, i, o = (n = n || b).createElement("script");
                        if (o.text = e, t)
                            for (r in w)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
                        n.head.appendChild(o).parentNode.removeChild(o)
                    }

                    function C(e) {
                        return null == e ? e + "" : "object" === i(e) || "function" == typeof e ? p[d.call(e)] || "object" : i(e)
                    }
                    var S = "3.7.1",
                        k = /HTML$/i,
                        E = function(e, t) {
                            return new E.fn.init(e, t)
                        };

                    function j(e) {
                        var t = !!e && "length" in e && e.length,
                            n = C(e);
                        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                    }

                    function A(e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                    }
                    E.fn = E.prototype = {
                        jquery: S,
                        constructor: E,
                        length: 0,
                        toArray: function() {
                            return u.call(this)
                        },
                        get: function(e) {
                            return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e]
                        },
                        pushStack: function(e) {
                            var t = E.merge(this.constructor(), e);
                            return t.prevObject = this, t
                        },
                        each: function(e) {
                            return E.each(this, e)
                        },
                        map: function(e) {
                            return this.pushStack(E.map(this, (function(t, n) {
                                return e.call(t, n, t)
                            })))
                        },
                        slice: function() {
                            return this.pushStack(u.apply(this, arguments))
                        },
                        first: function() {
                            return this.eq(0)
                        },
                        last: function() {
                            return this.eq(-1)
                        },
                        even: function() {
                            return this.pushStack(E.grep(this, (function(e, t) {
                                return (t + 1) % 2
                            })))
                        },
                        odd: function() {
                            return this.pushStack(E.grep(this, (function(e, t) {
                                return t % 2
                            })))
                        },
                        eq: function(e) {
                            var t = this.length,
                                n = +e + (e < 0 ? t : 0);
                            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                        },
                        end: function() {
                            return this.prevObject || this.constructor()
                        },
                        push: c,
                        sort: a.sort,
                        splice: a.splice
                    }, E.extend = E.fn.extend = function() {
                        var e, t, n, r, o, a, s = arguments[0] || {},
                            u = 1,
                            l = arguments.length,
                            c = !1;
                        for ("boolean" == typeof s && (c = s, s = arguments[u] || {}, u++), "object" === i(s) || m(s) || (s = {}), u === l && (s = this, u--); u < l; u++)
                            if (null != (e = arguments[u]))
                                for (t in e) r = e[t], "__proto__" !== t && s !== r && (c && r && (E.isPlainObject(r) || (o = Array.isArray(r))) ? (n = s[t], a = o && !Array.isArray(n) ? [] : o || E.isPlainObject(n) ? n : {}, o = !1, s[t] = E.extend(c, a, r)) : void 0 !== r && (s[t] = r));
                        return s
                    }, E.extend({
                        expando: "jQuery" + (S + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function(e) {
                            throw new Error(e)
                        },
                        noop: function() {},
                        isPlainObject: function(e) {
                            var t, n;
                            return !(!e || "[object Object]" !== d.call(e)) && (!(t = s(e)) || "function" == typeof(n = h.call(t, "constructor") && t.constructor) && g.call(n) === v)
                        },
                        isEmptyObject: function(e) {
                            var t;
                            for (t in e) return !1;
                            return !0
                        },
                        globalEval: function(e, t, n) {
                            T(e, {
                                nonce: t && t.nonce
                            }, n)
                        },
                        each: function(e, t) {
                            var n, r = 0;
                            if (j(e))
                                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                            else
                                for (r in e)
                                    if (!1 === t.call(e[r], r, e[r])) break;
                            return e
                        },
                        text: function(e) {
                            var t, n = "",
                                r = 0,
                                i = e.nodeType;
                            if (!i)
                                for (; t = e[r++];) n += E.text(t);
                            return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n
                        },
                        makeArray: function(e, t) {
                            var n = t || [];
                            return null != e && (j(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
                        },
                        inArray: function(e, t, n) {
                            return null == t ? -1 : f.call(t, e, n)
                        },
                        isXMLDoc: function(e) {
                            var t = e && e.namespaceURI,
                                n = e && (e.ownerDocument || e).documentElement;
                            return !k.test(t || n && n.nodeName || "HTML")
                        },
                        merge: function(e, t) {
                            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                            return e.length = i, e
                        },
                        grep: function(e, t, n) {
                            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                            return r
                        },
                        map: function(e, t, n) {
                            var r, i, o = 0,
                                a = [];
                            if (j(e))
                                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                            else
                                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                            return l(a)
                        },
                        guid: 1,
                        support: y
                    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = a[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                        p["[object " + t + "]"] = t.toLowerCase()
                    }));
                    var D = a.pop,
                        N = a.sort,
                        q = a.splice,
                        L = "[\\x20\\t\\r\\n\\f]",
                        H = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g");
                    E.contains = function(e, t) {
                        var n = t && t.parentNode;
                        return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                    };
                    var O = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

                    function P(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    }
                    E.escapeSelector = function(e) {
                        return (e + "").replace(O, P)
                    };
                    var M = b,
                        R = c;
                    ! function() {
                        var e, t, r, i, o, s, l, c, p, d, g = R,
                            v = E.expando,
                            m = 0,
                            x = 0,
                            b = ee(),
                            w = ee(),
                            T = ee(),
                            C = ee(),
                            S = function(e, t) {
                                return e === t && (o = !0), 0
                            },
                            k = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            j = "(?:\\\\[\\da-fA-F]{1,6}" + L + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                            O = "\\[" + L + "*(" + j + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + L + "*\\]",
                            P = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
                            I = new RegExp(L + "+", "g"),
                            W = new RegExp("^" + L + "*," + L + "*"),
                            F = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                            $ = new RegExp(L + "|>"),
                            B = new RegExp(P),
                            _ = new RegExp("^" + j + "$"),
                            z = {
                                ID: new RegExp("^#(" + j + ")"),
                                CLASS: new RegExp("^\\.(" + j + ")"),
                                TAG: new RegExp("^(" + j + "|[*])"),
                                ATTR: new RegExp("^" + O),
                                PSEUDO: new RegExp("^" + P),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                                bool: new RegExp("^(?:" + k + ")$", "i"),
                                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
                            },
                            X = /^(?:input|select|textarea|button)$/i,
                            U = /^h\d$/i,
                            V = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            G = /[+~]/,
                            Y = new RegExp("\\\\[\\da-fA-F]{1,6}" + L + "?|\\\\([^\\r\\n\\f])", "g"),
                            Q = function(e, t) {
                                var n = "0x" + e.slice(1) - 65536;
                                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                            },
                            J = function() {
                                ue()
                            },
                            K = pe((function(e) {
                                return !0 === e.disabled && A(e, "fieldset")
                            }), {
                                dir: "parentNode",
                                next: "legend"
                            });
                        try {
                            g.apply(a = u.call(M.childNodes), M.childNodes), a[M.childNodes.length].nodeType
                        } catch (e) {
                            g = {
                                apply: function(e, t) {
                                    R.apply(e, u.call(t))
                                },
                                call: function(e) {
                                    R.apply(e, u.call(arguments, 1))
                                }
                            }
                        }

                        function Z(e, t, n, r) {
                            var i, o, a, u, l, f, d, h = t && t.ownerDocument,
                                m = t ? t.nodeType : 9;
                            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
                            if (!r && (ue(t), t = t || s, c)) {
                                if (11 !== m && (l = V.exec(e)))
                                    if (i = l[1]) {
                                        if (9 === m) {
                                            if (!(a = t.getElementById(i))) return n;
                                            if (a.id === i) return g.call(n, a), n
                                        } else if (h && (a = h.getElementById(i)) && Z.contains(t, a) && a.id === i) return g.call(n, a), n
                                    } else {
                                        if (l[2]) return g.apply(n, t.getElementsByTagName(e)), n;
                                        if ((i = l[3]) && t.getElementsByClassName) return g.apply(n, t.getElementsByClassName(i)), n
                                    }
                                if (!(C[e + " "] || p && p.test(e))) {
                                    if (d = e, h = t, 1 === m && ($.test(e) || F.test(e))) {
                                        for ((h = G.test(e) && se(t.parentNode) || t) == t && y.scope || ((u = t.getAttribute("id")) ? u = E.escapeSelector(u) : t.setAttribute("id", u = v)), o = (f = ce(e)).length; o--;) f[o] = (u ? "#" + u : ":scope") + " " + fe(f[o]);
                                        d = f.join(",")
                                    }
                                    try {
                                        return g.apply(n, h.querySelectorAll(d)), n
                                    } catch (t) {
                                        C(e, !0)
                                    } finally {
                                        u === v && t.removeAttribute("id")
                                    }
                                }
                            }
                            return me(e.replace(H, "$1"), t, n, r)
                        }

                        function ee() {
                            var e = [];
                            return function n(r, i) {
                                return e.push(r + " ") > t.cacheLength && delete n[e.shift()], n[r + " "] = i
                            }
                        }

                        function te(e) {
                            return e[v] = !0, e
                        }

                        function ne(e) {
                            var t = s.createElement("fieldset");
                            try {
                                return !!e(t)
                            } catch (e) {
                                return !1
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t), t = null
                            }
                        }

                        function re(e) {
                            return function(t) {
                                return A(t, "input") && t.type === e
                            }
                        }

                        function ie(e) {
                            return function(t) {
                                return (A(t, "input") || A(t, "button")) && t.type === e
                            }
                        }

                        function oe(e) {
                            return function(t) {
                                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && K(t) === e : t.disabled === e : "label" in t && t.disabled === e
                            }
                        }

                        function ae(e) {
                            return te((function(t) {
                                return t = +t, te((function(n, r) {
                                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                                }))
                            }))
                        }

                        function se(e) {
                            return e && void 0 !== e.getElementsByTagName && e
                        }

                        function ue(e) {
                            var n, r = e ? e.ownerDocument || e : M;
                            return r != s && 9 === r.nodeType && r.documentElement ? (l = (s = r).documentElement, c = !E.isXMLDoc(s), d = l.matches || l.webkitMatchesSelector || l.msMatchesSelector, l.msMatchesSelector && M != s && (n = s.defaultView) && n.top !== n && n.addEventListener("unload", J), y.getById = ne((function(e) {
                                return l.appendChild(e).id = E.expando, !s.getElementsByName || !s.getElementsByName(E.expando).length
                            })), y.disconnectedMatch = ne((function(e) {
                                return d.call(e, "*")
                            })), y.scope = ne((function() {
                                return s.querySelectorAll(":scope")
                            })), y.cssHas = ne((function() {
                                try {
                                    return s.querySelector(":has(*,:jqfake)"), !1
                                } catch (e) {
                                    return !0
                                }
                            })), y.getById ? (t.filter.ID = function(e) {
                                var t = e.replace(Y, Q);
                                return function(e) {
                                    return e.getAttribute("id") === t
                                }
                            }, t.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && c) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : []
                                }
                            }) : (t.filter.ID = function(e) {
                                var t = e.replace(Y, Q);
                                return function(e) {
                                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }, t.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && c) {
                                    var n, r, i, o = t.getElementById(e);
                                    if (o) {
                                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                        for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                    }
                                    return []
                                }
                            }), t.find.TAG = function(e, t) {
                                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
                            }, t.find.CLASS = function(e, t) {
                                if (void 0 !== t.getElementsByClassName && c) return t.getElementsByClassName(e)
                            }, p = [], ne((function(e) {
                                var t;
                                l.appendChild(e).innerHTML = "<a id='" + v + "' href='' disabled='disabled'></a><select id='" + v + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || p.push("\\[" + L + "*(?:value|" + k + ")"), e.querySelectorAll("[id~=" + v + "-]").length || p.push("~="), e.querySelectorAll("a#" + v + "+*").length || p.push(".#.+[+~]"), e.querySelectorAll(":checked").length || p.push(":checked"), (t = s.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), l.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"), (t = s.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || p.push("\\[" + L + "*name" + L + "*=" + L + "*(?:''|\"\")")
                            })), y.cssHas || p.push(":has"), p = p.length && new RegExp(p.join("|")), S = function(e, t) {
                                if (e === t) return o = !0, 0;
                                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !y.sortDetached && t.compareDocumentPosition(e) === n ? e === s || e.ownerDocument == M && Z.contains(M, e) ? -1 : t === s || t.ownerDocument == M && Z.contains(M, t) ? 1 : i ? f.call(i, e) - f.call(i, t) : 0 : 4 & n ? -1 : 1)
                            }, s) : s
                        }
                        for (e in Z.matches = function(e, t) {
                                return Z(e, null, null, t)
                            }, Z.matchesSelector = function(e, t) {
                                if (ue(e), c && !C[t + " "] && (!p || !p.test(t))) try {
                                    var n = d.call(e, t);
                                    if (n || y.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                                } catch (e) {
                                    C(t, !0)
                                }
                                return Z(t, s, null, [e]).length > 0
                            }, Z.contains = function(e, t) {
                                return (e.ownerDocument || e) != s && ue(e), E.contains(e, t)
                            }, Z.attr = function(e, n) {
                                (e.ownerDocument || e) != s && ue(e);
                                var r = t.attrHandle[n.toLowerCase()],
                                    i = r && h.call(t.attrHandle, n.toLowerCase()) ? r(e, n, !c) : void 0;
                                return void 0 !== i ? i : e.getAttribute(n)
                            }, Z.error = function(e) {
                                throw new Error("Syntax error, unrecognized expression: " + e)
                            }, E.uniqueSort = function(e) {
                                var t, n = [],
                                    r = 0,
                                    a = 0;
                                if (o = !y.sortStable, i = !y.sortStable && u.call(e, 0), N.call(e, S), o) {
                                    for (; t = e[a++];) t === e[a] && (r = n.push(a));
                                    for (; r--;) q.call(e, n[r], 1)
                                }
                                return i = null, e
                            }, E.fn.uniqueSort = function() {
                                return this.pushStack(E.uniqueSort(u.apply(this)))
                            }, t = E.expr = {
                                cacheLength: 50,
                                createPseudo: te,
                                match: z,
                                attrHandle: {},
                                find: {},
                                relative: {
                                    ">": {
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
                                    ATTR: function(e) {
                                        return e[1] = e[1].replace(Y, Q), e[3] = (e[3] || e[4] || e[5] || "").replace(Y, Q), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                    },
                                    CHILD: function(e) {
                                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || Z.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Z.error(e[0]), e
                                    },
                                    PSEUDO: function(e) {
                                        var t, n = !e[6] && e[2];
                                        return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && B.test(n) && (t = ce(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                    }
                                },
                                filter: {
                                    TAG: function(e) {
                                        var t = e.replace(Y, Q).toLowerCase();
                                        return "*" === e ? function() {
                                            return !0
                                        } : function(e) {
                                            return A(e, t)
                                        }
                                    },
                                    CLASS: function(e) {
                                        var t = b[e + " "];
                                        return t || (t = new RegExp("(^|" + L + ")" + e + "(" + L + "|$)")) && b(e, (function(e) {
                                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                        }))
                                    },
                                    ATTR: function(e, t, n) {
                                        return function(r) {
                                            var i = Z.attr(r, e);
                                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(I, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                        }
                                    },
                                    CHILD: function(e, t, n, r, i) {
                                        var o = "nth" !== e.slice(0, 3),
                                            a = "last" !== e.slice(-4),
                                            s = "of-type" === t;
                                        return 1 === r && 0 === i ? function(e) {
                                            return !!e.parentNode
                                        } : function(t, n, u) {
                                            var l, c, f, p, d, h = o !== a ? "nextSibling" : "previousSibling",
                                                g = t.parentNode,
                                                y = s && t.nodeName.toLowerCase(),
                                                x = !u && !s,
                                                b = !1;
                                            if (g) {
                                                if (o) {
                                                    for (; h;) {
                                                        for (f = t; f = f[h];)
                                                            if (s ? A(f, y) : 1 === f.nodeType) return !1;
                                                        d = h = "only" === e && !d && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (d = [a ? g.firstChild : g.lastChild], a && x) {
                                                    for (b = (p = (l = (c = g[v] || (g[v] = {}))[e] || [])[0] === m && l[1]) && l[2], f = p && g.childNodes[p]; f = ++p && f && f[h] || (b = p = 0) || d.pop();)
                                                        if (1 === f.nodeType && ++b && f === t) {
                                                            c[e] = [m, p, b];
                                                            break
                                                        }
                                                } else if (x && (b = p = (l = (c = t[v] || (t[v] = {}))[e] || [])[0] === m && l[1]), !1 === b)
                                                    for (;
                                                        (f = ++p && f && f[h] || (b = p = 0) || d.pop()) && (!(s ? A(f, y) : 1 === f.nodeType) || !++b || (x && ((c = f[v] || (f[v] = {}))[e] = [m, b]), f !== t)););
                                                return (b -= i) === r || b % r == 0 && b / r >= 0
                                            }
                                        }
                                    },
                                    PSEUDO: function(e, n) {
                                        var r, i = t.pseudos[e] || t.setFilters[e.toLowerCase()] || Z.error("unsupported pseudo: " + e);
                                        return i[v] ? i(n) : i.length > 1 ? (r = [e, e, "", n], t.setFilters.hasOwnProperty(e.toLowerCase()) ? te((function(e, t) {
                                            for (var r, o = i(e, n), a = o.length; a--;) e[r = f.call(e, o[a])] = !(t[r] = o[a])
                                        })) : function(e) {
                                            return i(e, 0, r)
                                        }) : i
                                    }
                                },
                                pseudos: {
                                    not: te((function(e) {
                                        var t = [],
                                            n = [],
                                            r = ye(e.replace(H, "$1"));
                                        return r[v] ? te((function(e, t, n, i) {
                                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                                        })) : function(e, i, o) {
                                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                                        }
                                    })),
                                    has: te((function(e) {
                                        return function(t) {
                                            return Z(e, t).length > 0
                                        }
                                    })),
                                    contains: te((function(e) {
                                        return e = e.replace(Y, Q),
                                            function(t) {
                                                return (t.textContent || E.text(t)).indexOf(e) > -1
                                            }
                                    })),
                                    lang: te((function(e) {
                                        return _.test(e || "") || Z.error("unsupported lang: " + e), e = e.replace(Y, Q).toLowerCase(),
                                            function(t) {
                                                var n;
                                                do {
                                                    if (n = c ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                                return !1
                                            }
                                    })),
                                    target: function(e) {
                                        var t = n.location && n.location.hash;
                                        return t && t.slice(1) === e.id
                                    },
                                    root: function(e) {
                                        return e === l
                                    },
                                    focus: function(e) {
                                        return e === function() {
                                            try {
                                                return s.activeElement
                                            } catch (e) {}
                                        }() && s.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                                    },
                                    enabled: oe(!1),
                                    disabled: oe(!0),
                                    checked: function(e) {
                                        return A(e, "input") && !!e.checked || A(e, "option") && !!e.selected
                                    },
                                    selected: function(e) {
                                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                    },
                                    empty: function(e) {
                                        for (e = e.firstChild; e; e = e.nextSibling)
                                            if (e.nodeType < 6) return !1;
                                        return !0
                                    },
                                    parent: function(e) {
                                        return !t.pseudos.empty(e)
                                    },
                                    header: function(e) {
                                        return U.test(e.nodeName)
                                    },
                                    input: function(e) {
                                        return X.test(e.nodeName)
                                    },
                                    button: function(e) {
                                        return A(e, "input") && "button" === e.type || A(e, "button")
                                    },
                                    text: function(e) {
                                        var t;
                                        return A(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                    },
                                    first: ae((function() {
                                        return [0]
                                    })),
                                    last: ae((function(e, t) {
                                        return [t - 1]
                                    })),
                                    eq: ae((function(e, t, n) {
                                        return [n < 0 ? n + t : n]
                                    })),
                                    even: ae((function(e, t) {
                                        for (var n = 0; n < t; n += 2) e.push(n);
                                        return e
                                    })),
                                    odd: ae((function(e, t) {
                                        for (var n = 1; n < t; n += 2) e.push(n);
                                        return e
                                    })),
                                    lt: ae((function(e, t, n) {
                                        var r;
                                        for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                                        return e
                                    })),
                                    gt: ae((function(e, t, n) {
                                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                        return e
                                    }))
                                }
                            }, t.pseudos.nth = t.pseudos.eq, {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0
                            }) t.pseudos[e] = re(e);
                        for (e in {
                                submit: !0,
                                reset: !0
                            }) t.pseudos[e] = ie(e);

                        function le() {}

                        function ce(e, n) {
                            var r, i, o, a, s, u, l, c = w[e + " "];
                            if (c) return n ? 0 : c.slice(0);
                            for (s = e, u = [], l = t.preFilter; s;) {
                                for (a in r && !(i = W.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = F.exec(s)) && (r = i.shift(), o.push({
                                        value: r,
                                        type: i[0].replace(H, " ")
                                    }), s = s.slice(r.length)), t.filter) !(i = z[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                                    value: r,
                                    type: a,
                                    matches: i
                                }), s = s.slice(r.length));
                                if (!r) break
                            }
                            return n ? s.length : s ? Z.error(e) : w(e, u).slice(0)
                        }

                        function fe(e) {
                            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                            return r
                        }

                        function pe(e, t, n) {
                            var r = t.dir,
                                i = t.next,
                                o = i || r,
                                a = n && "parentNode" === o,
                                s = x++;
                            return t.first ? function(t, n, i) {
                                for (; t = t[r];)
                                    if (1 === t.nodeType || a) return e(t, n, i);
                                return !1
                            } : function(t, n, u) {
                                var l, c, f = [m, s];
                                if (u) {
                                    for (; t = t[r];)
                                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                                } else
                                    for (; t = t[r];)
                                        if (1 === t.nodeType || a)
                                            if (c = t[v] || (t[v] = {}), i && A(t, i)) t = t[r] || t;
                                            else {
                                                if ((l = c[o]) && l[0] === m && l[1] === s) return f[2] = l[2];
                                                if (c[o] = f, f[2] = e(t, n, u)) return !0
                                            } return !1
                            }
                        }

                        function de(e) {
                            return e.length > 1 ? function(t, n, r) {
                                for (var i = e.length; i--;)
                                    if (!e[i](t, n, r)) return !1;
                                return !0
                            } : e[0]
                        }

                        function he(e, t, n, r, i) {
                            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                            return a
                        }

                        function ge(e, t, n, r, i, o) {
                            return r && !r[v] && (r = ge(r)), i && !i[v] && (i = ge(i, o)), te((function(o, a, s, u) {
                                var l, c, p, d, h = [],
                                    v = [],
                                    y = a.length,
                                    m = o || function(e, t, n) {
                                        for (var r = 0, i = t.length; r < i; r++) Z(e, t[r], n);
                                        return n
                                    }(t || "*", s.nodeType ? [s] : s, []),
                                    x = !e || !o && t ? m : he(m, h, e, s, u);
                                if (n ? n(x, d = i || (o ? e : y || r) ? [] : a, s, u) : d = x, r)
                                    for (l = he(d, v), r(l, [], s, u), c = l.length; c--;)(p = l[c]) && (d[v[c]] = !(x[v[c]] = p));
                                if (o) {
                                    if (i || e) {
                                        if (i) {
                                            for (l = [], c = d.length; c--;)(p = d[c]) && l.push(x[c] = p);
                                            i(null, d = [], l, u)
                                        }
                                        for (c = d.length; c--;)(p = d[c]) && (l = i ? f.call(o, p) : h[c]) > -1 && (o[l] = !(a[l] = p))
                                    }
                                } else d = he(d === a ? d.splice(y, d.length) : d), i ? i(null, a, d, u) : g.apply(a, d)
                            }))
                        }

                        function ve(e) {
                            for (var n, i, o, a = e.length, s = t.relative[e[0].type], u = s || t.relative[" "], l = s ? 1 : 0, c = pe((function(e) {
                                    return e === n
                                }), u, !0), p = pe((function(e) {
                                    return f.call(n, e) > -1
                                }), u, !0), d = [function(e, t, i) {
                                    var o = !s && (i || t != r) || ((n = t).nodeType ? c(e, t, i) : p(e, t, i));
                                    return n = null, o
                                }]; l < a; l++)
                                if (i = t.relative[e[l].type]) d = [pe(de(d), i)];
                                else {
                                    if ((i = t.filter[e[l].type].apply(null, e[l].matches))[v]) {
                                        for (o = ++l; o < a && !t.relative[e[o].type]; o++);
                                        return ge(l > 1 && de(d), l > 1 && fe(e.slice(0, l - 1).concat({
                                            value: " " === e[l - 2].type ? "*" : ""
                                        })).replace(H, "$1"), i, l < o && ve(e.slice(l, o)), o < a && ve(e = e.slice(o)), o < a && fe(e))
                                    }
                                    d.push(i)
                                }
                            return de(d)
                        }

                        function ye(e, n) {
                            var i, o = [],
                                a = [],
                                u = T[e + " "];
                            if (!u) {
                                for (n || (n = ce(e)), i = n.length; i--;)(u = ve(n[i]))[v] ? o.push(u) : a.push(u);
                                u = T(e, function(e, n) {
                                    var i = n.length > 0,
                                        o = e.length > 0,
                                        a = function(a, u, l, f, p) {
                                            var d, h, v, y = 0,
                                                x = "0",
                                                b = a && [],
                                                w = [],
                                                T = r,
                                                C = a || o && t.find.TAG("*", p),
                                                S = m += null == T ? 1 : Math.random() || .1,
                                                k = C.length;
                                            for (p && (r = u == s || u || p); x !== k && null != (d = C[x]); x++) {
                                                if (o && d) {
                                                    for (h = 0, u || d.ownerDocument == s || (ue(d), l = !c); v = e[h++];)
                                                        if (v(d, u || s, l)) {
                                                            g.call(f, d);
                                                            break
                                                        }
                                                    p && (m = S)
                                                }
                                                i && ((d = !v && d) && y--, a && b.push(d))
                                            }
                                            if (y += x, i && x !== y) {
                                                for (h = 0; v = n[h++];) v(b, w, u, l);
                                                if (a) {
                                                    if (y > 0)
                                                        for (; x--;) b[x] || w[x] || (w[x] = D.call(f));
                                                    w = he(w)
                                                }
                                                g.apply(f, w), p && !a && w.length > 0 && y + n.length > 1 && E.uniqueSort(f)
                                            }
                                            return p && (m = S, r = T), b
                                        };
                                    return i ? te(a) : a
                                }(a, o)), u.selector = e
                            }
                            return u
                        }

                        function me(e, n, r, i) {
                            var o, a, s, u, l, f = "function" == typeof e && e,
                                p = !i && ce(e = f.selector || e);
                            if (r = r || [], 1 === p.length) {
                                if ((a = p[0] = p[0].slice(0)).length > 2 && "ID" === (s = a[0]).type && 9 === n.nodeType && c && t.relative[a[1].type]) {
                                    if (!(n = (t.find.ID(s.matches[0].replace(Y, Q), n) || [])[0])) return r;
                                    f && (n = n.parentNode), e = e.slice(a.shift().value.length)
                                }
                                for (o = z.needsContext.test(e) ? 0 : a.length; o-- && (s = a[o], !t.relative[u = s.type]);)
                                    if ((l = t.find[u]) && (i = l(s.matches[0].replace(Y, Q), G.test(a[0].type) && se(n.parentNode) || n))) {
                                        if (a.splice(o, 1), !(e = i.length && fe(a))) return g.apply(r, i), r;
                                        break
                                    }
                            }
                            return (f || ye(e, p))(i, n, !c, r, !n || G.test(e) && se(n.parentNode) || n), r
                        }
                        le.prototype = t.filters = t.pseudos, t.setFilters = new le, y.sortStable = v.split("").sort(S).join("") === v, ue(), y.sortDetached = ne((function(e) {
                            return 1 & e.compareDocumentPosition(s.createElement("fieldset"))
                        })), E.find = Z, E.expr[":"] = E.expr.pseudos, E.unique = E.uniqueSort, Z.compile = ye, Z.select = me, Z.setDocument = ue, Z.tokenize = ce, Z.escape = E.escapeSelector, Z.getText = E.text, Z.isXML = E.isXMLDoc, Z.selectors = E.expr, Z.support = E.support, Z.uniqueSort = E.uniqueSort
                    }();
                    var I = function(e, t, n) {
                            for (var r = [], i = void 0 !== n;
                                (e = e[t]) && 9 !== e.nodeType;)
                                if (1 === e.nodeType) {
                                    if (i && E(e).is(n)) break;
                                    r.push(e)
                                }
                            return r
                        },
                        W = function(e, t) {
                            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                            return n
                        },
                        F = E.expr.match.needsContext,
                        $ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                    function B(e, t, n) {
                        return m(t) ? E.grep(e, (function(e, r) {
                            return !!t.call(e, r, e) !== n
                        })) : t.nodeType ? E.grep(e, (function(e) {
                            return e === t !== n
                        })) : "string" != typeof t ? E.grep(e, (function(e) {
                            return f.call(t, e) > -1 !== n
                        })) : E.filter(t, e, n)
                    }
                    E.filter = function(e, t, n) {
                        var r = t[0];
                        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, (function(e) {
                            return 1 === e.nodeType
                        })))
                    }, E.fn.extend({
                        find: function(e) {
                            var t, n, r = this.length,
                                i = this;
                            if ("string" != typeof e) return this.pushStack(E(e).filter((function() {
                                for (t = 0; t < r; t++)
                                    if (E.contains(i[t], this)) return !0
                            })));
                            for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
                            return r > 1 ? E.uniqueSort(n) : n
                        },
                        filter: function(e) {
                            return this.pushStack(B(this, e || [], !1))
                        },
                        not: function(e) {
                            return this.pushStack(B(this, e || [], !0))
                        },
                        is: function(e) {
                            return !!B(this, "string" == typeof e && F.test(e) ? E(e) : e || [], !1).length
                        }
                    });
                    var _, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                    (E.fn.init = function(e, t, n) {
                        var r, i;
                        if (!e) return this;
                        if (n = n || _, "string" == typeof e) {
                            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : z.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                            if (r[1]) {
                                if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), $.test(r[1]) && E.isPlainObject(t))
                                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                                return this
                            }
                            return (i = b.getElementById(r[2])) && (this[0] = i, this.length = 1), this
                        }
                        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
                    }).prototype = E.fn, _ = E(b);
                    var X = /^(?:parents|prev(?:Until|All))/,
                        U = {
                            children: !0,
                            contents: !0,
                            next: !0,
                            prev: !0
                        };

                    function V(e, t) {
                        for (;
                            (e = e[t]) && 1 !== e.nodeType;);
                        return e
                    }
                    E.fn.extend({
                        has: function(e) {
                            var t = E(e, this),
                                n = t.length;
                            return this.filter((function() {
                                for (var e = 0; e < n; e++)
                                    if (E.contains(this, t[e])) return !0
                            }))
                        },
                        closest: function(e, t) {
                            var n, r = 0,
                                i = this.length,
                                o = [],
                                a = "string" != typeof e && E(e);
                            if (!F.test(e))
                                for (; r < i; r++)
                                    for (n = this[r]; n && n !== t; n = n.parentNode)
                                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                                            o.push(n);
                                            break
                                        }
                            return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o)
                        },
                        index: function(e) {
                            return e ? "string" == typeof e ? f.call(E(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                        },
                        add: function(e, t) {
                            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
                        },
                        addBack: function(e) {
                            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                        }
                    }), E.each({
                        parent: function(e) {
                            var t = e.parentNode;
                            return t && 11 !== t.nodeType ? t : null
                        },
                        parents: function(e) {
                            return I(e, "parentNode")
                        },
                        parentsUntil: function(e, t, n) {
                            return I(e, "parentNode", n)
                        },
                        next: function(e) {
                            return V(e, "nextSibling")
                        },
                        prev: function(e) {
                            return V(e, "previousSibling")
                        },
                        nextAll: function(e) {
                            return I(e, "nextSibling")
                        },
                        prevAll: function(e) {
                            return I(e, "previousSibling")
                        },
                        nextUntil: function(e, t, n) {
                            return I(e, "nextSibling", n)
                        },
                        prevUntil: function(e, t, n) {
                            return I(e, "previousSibling", n)
                        },
                        siblings: function(e) {
                            return W((e.parentNode || {}).firstChild, e)
                        },
                        children: function(e) {
                            return W(e.firstChild)
                        },
                        contents: function(e) {
                            return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
                        }
                    }, (function(e, t) {
                        E.fn[e] = function(n, r) {
                            var i = E.map(this, t, n);
                            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = E.filter(r, i)), this.length > 1 && (U[e] || E.uniqueSort(i), X.test(e) && i.reverse()), this.pushStack(i)
                        }
                    }));
                    var G = /[^\x20\t\r\n\f]+/g;

                    function Y(e) {
                        return e
                    }

                    function Q(e) {
                        throw e
                    }

                    function J(e, t, n, r) {
                        var i;
                        try {
                            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                        } catch (e) {
                            n.apply(void 0, [e])
                        }
                    }
                    E.Callbacks = function(e) {
                        e = "string" == typeof e ? function(e) {
                            var t = {};
                            return E.each(e.match(G) || [], (function(e, n) {
                                t[n] = !0
                            })), t
                        }(e) : E.extend({}, e);
                        var t, n, r, i, o = [],
                            a = [],
                            s = -1,
                            u = function() {
                                for (i = i || e.once, r = t = !0; a.length; s = -1)
                                    for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                            },
                            l = {
                                add: function() {
                                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                                        E.each(n, (function(n, r) {
                                            m(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== C(r) && t(r)
                                        }))
                                    }(arguments), n && !t && u()), this
                                },
                                remove: function() {
                                    return E.each(arguments, (function(e, t) {
                                        for (var n;
                                            (n = E.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                                    })), this
                                },
                                has: function(e) {
                                    return e ? E.inArray(e, o) > -1 : o.length > 0
                                },
                                empty: function() {
                                    return o && (o = []), this
                                },
                                disable: function() {
                                    return i = a = [], o = n = "", this
                                },
                                disabled: function() {
                                    return !o
                                },
                                lock: function() {
                                    return i = a = [], n || t || (o = n = ""), this
                                },
                                locked: function() {
                                    return !!i
                                },
                                fireWith: function(e, n) {
                                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                                },
                                fire: function() {
                                    return l.fireWith(this, arguments), this
                                },
                                fired: function() {
                                    return !!r
                                }
                            };
                        return l
                    }, E.extend({
                        Deferred: function(e) {
                            var t = [
                                    ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                                    ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                                    ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
                                ],
                                r = "pending",
                                o = {
                                    state: function() {
                                        return r
                                    },
                                    always: function() {
                                        return a.done(arguments).fail(arguments), this
                                    },
                                    catch: function(e) {
                                        return o.then(null, e)
                                    },
                                    pipe: function() {
                                        var e = arguments;
                                        return E.Deferred((function(n) {
                                            E.each(t, (function(t, r) {
                                                var i = m(e[r[4]]) && e[r[4]];
                                                a[r[1]]((function() {
                                                    var e = i && i.apply(this, arguments);
                                                    e && m(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                                }))
                                            })), e = null
                                        })).promise()
                                    },
                                    then: function(e, r, o) {
                                        var a = 0;

                                        function s(e, t, r, o) {
                                            return function() {
                                                var u = this,
                                                    l = arguments,
                                                    c = function() {
                                                        var n, c;
                                                        if (!(e < a)) {
                                                            if ((n = r.apply(u, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                            c = n && ("object" === i(n) || "function" == typeof n) && n.then, m(c) ? o ? c.call(n, s(a, t, Y, o), s(a, t, Q, o)) : (a++, c.call(n, s(a, t, Y, o), s(a, t, Q, o), s(a, t, Y, t.notifyWith))) : (r !== Y && (u = void 0, l = [n]), (o || t.resolveWith)(u, l))
                                                        }
                                                    },
                                                    f = o ? c : function() {
                                                        try {
                                                            c()
                                                        } catch (n) {
                                                            E.Deferred.exceptionHook && E.Deferred.exceptionHook(n, f.error), e + 1 >= a && (r !== Q && (u = void 0, l = [n]), t.rejectWith(u, l))
                                                        }
                                                    };
                                                e ? f() : (E.Deferred.getErrorHook ? f.error = E.Deferred.getErrorHook() : E.Deferred.getStackHook && (f.error = E.Deferred.getStackHook()), n.setTimeout(f))
                                            }
                                        }
                                        return E.Deferred((function(n) {
                                            t[0][3].add(s(0, n, m(o) ? o : Y, n.notifyWith)), t[1][3].add(s(0, n, m(e) ? e : Y)), t[2][3].add(s(0, n, m(r) ? r : Q))
                                        })).promise()
                                    },
                                    promise: function(e) {
                                        return null != e ? E.extend(e, o) : o
                                    }
                                },
                                a = {};
                            return E.each(t, (function(e, n) {
                                var i = n[2],
                                    s = n[5];
                                o[n[1]] = i.add, s && i.add((function() {
                                    r = s
                                }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), i.add(n[3].fire), a[n[0]] = function() {
                                    return a[n[0] + "With"](this === a ? void 0 : this, arguments), this
                                }, a[n[0] + "With"] = i.fireWith
                            })), o.promise(a), e && e.call(a, a), a
                        },
                        when: function(e) {
                            var t = arguments.length,
                                n = t,
                                r = Array(n),
                                i = u.call(arguments),
                                o = E.Deferred(),
                                a = function(e) {
                                    return function(n) {
                                        r[e] = this, i[e] = arguments.length > 1 ? u.call(arguments) : n, --t || o.resolveWith(r, i)
                                    }
                                };
                            if (t <= 1 && (J(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || m(i[n] && i[n].then))) return o.then();
                            for (; n--;) J(i[n], a(n), o.reject);
                            return o.promise()
                        }
                    });
                    var K = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                    E.Deferred.exceptionHook = function(e, t) {
                        n.console && n.console.warn && e && K.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                    }, E.readyException = function(e) {
                        n.setTimeout((function() {
                            throw e
                        }))
                    };
                    var Z = E.Deferred();

                    function ee() {
                        b.removeEventListener("DOMContentLoaded", ee), n.removeEventListener("load", ee), E.ready()
                    }
                    E.fn.ready = function(e) {
                        return Z.then(e).catch((function(e) {
                            E.readyException(e)
                        })), this
                    }, E.extend({
                        isReady: !1,
                        readyWait: 1,
                        ready: function(e) {
                            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0, !0 !== e && --E.readyWait > 0 || Z.resolveWith(b, [E]))
                        }
                    }), E.ready.then = Z.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(E.ready) : (b.addEventListener("DOMContentLoaded", ee), n.addEventListener("load", ee));
                    var te = function(e, t, n, r, i, o, a) {
                            var s = 0,
                                u = e.length,
                                l = null == n;
                            if ("object" === C(n))
                                for (s in i = !0, n) te(e, t, s, n[s], !0, o, a);
                            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                                    return l.call(E(e), n)
                                })), t))
                                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
                        },
                        ne = /^-ms-/,
                        re = /-([a-z])/g;

                    function ie(e, t) {
                        return t.toUpperCase()
                    }

                    function oe(e) {
                        return e.replace(ne, "ms-").replace(re, ie)
                    }
                    var ae = function(e) {
                        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                    };

                    function se() {
                        this.expando = E.expando + se.uid++
                    }
                    se.uid = 1, se.prototype = {
                        cache: function(e) {
                            var t = e[this.expando];
                            return t || (t = {}, ae(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: !0
                            }))), t
                        },
                        set: function(e, t, n) {
                            var r, i = this.cache(e);
                            if ("string" == typeof t) i[oe(t)] = n;
                            else
                                for (r in t) i[oe(r)] = t[r];
                            return i
                        },
                        get: function(e, t) {
                            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][oe(t)]
                        },
                        access: function(e, t, n) {
                            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                        },
                        remove: function(e, t) {
                            var n, r = e[this.expando];
                            if (void 0 !== r) {
                                if (void 0 !== t) {
                                    n = (t = Array.isArray(t) ? t.map(oe) : (t = oe(t)) in r ? [t] : t.match(G) || []).length;
                                    for (; n--;) delete r[t[n]]
                                }(void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                            }
                        },
                        hasData: function(e) {
                            var t = e[this.expando];
                            return void 0 !== t && !E.isEmptyObject(t)
                        }
                    };
                    var ue = new se,
                        le = new se,
                        ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        fe = /[A-Z]/g;

                    function pe(e, t, n) {
                        var r;
                        if (void 0 === n && 1 === e.nodeType)
                            if (r = "data-" + t.replace(fe, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                                try {
                                    n = function(e) {
                                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ce.test(e) ? JSON.parse(e) : e)
                                    }(n)
                                } catch (e) {}
                                le.set(e, t, n)
                            } else n = void 0;
                        return n
                    }
                    E.extend({
                        hasData: function(e) {
                            return le.hasData(e) || ue.hasData(e)
                        },
                        data: function(e, t, n) {
                            return le.access(e, t, n)
                        },
                        removeData: function(e, t) {
                            le.remove(e, t)
                        },
                        _data: function(e, t, n) {
                            return ue.access(e, t, n)
                        },
                        _removeData: function(e, t) {
                            ue.remove(e, t)
                        }
                    }), E.fn.extend({
                        data: function(e, t) {
                            var n, r, o, a = this[0],
                                s = a && a.attributes;
                            if (void 0 === e) {
                                if (this.length && (o = le.get(a), 1 === a.nodeType && !ue.get(a, "hasDataAttrs"))) {
                                    for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = oe(r.slice(5)), pe(a, r, o[r]));
                                    ue.set(a, "hasDataAttrs", !0)
                                }
                                return o
                            }
                            return "object" === i(e) ? this.each((function() {
                                le.set(this, e)
                            })) : te(this, (function(t) {
                                var n;
                                if (a && void 0 === t) return void 0 !== (n = le.get(a, e)) || void 0 !== (n = pe(a, e)) ? n : void 0;
                                this.each((function() {
                                    le.set(this, e, t)
                                }))
                            }), null, t, arguments.length > 1, null, !0)
                        },
                        removeData: function(e) {
                            return this.each((function() {
                                le.remove(this, e)
                            }))
                        }
                    }), E.extend({
                        queue: function(e, t, n) {
                            var r;
                            if (e) return t = (t || "fx") + "queue", r = ue.get(e, t), n && (!r || Array.isArray(n) ? r = ue.access(e, t, E.makeArray(n)) : r.push(n)), r || []
                        },
                        dequeue: function(e, t) {
                            t = t || "fx";
                            var n = E.queue(e, t),
                                r = n.length,
                                i = n.shift(),
                                o = E._queueHooks(e, t);
                            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, (function() {
                                E.dequeue(e, t)
                            }), o)), !r && o && o.empty.fire()
                        },
                        _queueHooks: function(e, t) {
                            var n = t + "queueHooks";
                            return ue.get(e, n) || ue.access(e, n, {
                                empty: E.Callbacks("once memory").add((function() {
                                    ue.remove(e, [t + "queue", n])
                                }))
                            })
                        }
                    }), E.fn.extend({
                        queue: function(e, t) {
                            var n = 2;
                            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? E.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                                var n = E.queue(this, e, t);
                                E._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e)
                            }))
                        },
                        dequeue: function(e) {
                            return this.each((function() {
                                E.dequeue(this, e)
                            }))
                        },
                        clearQueue: function(e) {
                            return this.queue(e || "fx", [])
                        },
                        promise: function(e, t) {
                            var n, r = 1,
                                i = E.Deferred(),
                                o = this,
                                a = this.length,
                                s = function() {
                                    --r || i.resolveWith(o, [o])
                                };
                            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = ue.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                            return s(), i.promise(t)
                        }
                    });
                    var de = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        he = new RegExp("^(?:([+-])=|)(" + de + ")([a-z%]*)$", "i"),
                        ge = ["Top", "Right", "Bottom", "Left"],
                        ve = b.documentElement,
                        ye = function(e) {
                            return E.contains(e.ownerDocument, e)
                        },
                        me = {
                            composed: !0
                        };
                    ve.getRootNode && (ye = function(e) {
                        return E.contains(e.ownerDocument, e) || e.getRootNode(me) === e.ownerDocument
                    });
                    var xe = function(e, t) {
                        return "none" === (e = t || e).style.display || "" === e.style.display && ye(e) && "none" === E.css(e, "display")
                    };

                    function be(e, t, n, r) {
                        var i, o, a = 20,
                            s = r ? function() {
                                return r.cur()
                            } : function() {
                                return E.css(e, t, "")
                            },
                            u = s(),
                            l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
                            c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && he.exec(E.css(e, t));
                        if (c && c[3] !== l) {
                            for (u /= 2, l = l || c[3], c = +u || 1; a--;) E.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                            c *= 2, E.style(e, t, c + l), n = n || []
                        }
                        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
                    }
                    var we = {};

                    function Te(e) {
                        var t, n = e.ownerDocument,
                            r = e.nodeName,
                            i = we[r];
                        return i || (t = n.body.appendChild(n.createElement(r)), i = E.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), we[r] = i, i)
                    }

                    function Ce(e, t) {
                        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = ue.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && xe(r) && (i[o] = Te(r))) : "none" !== n && (i[o] = "none", ue.set(r, "display", n)));
                        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
                        return e
                    }
                    E.fn.extend({
                        show: function() {
                            return Ce(this, !0)
                        },
                        hide: function() {
                            return Ce(this)
                        },
                        toggle: function(e) {
                            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                                xe(this) ? E(this).show() : E(this).hide()
                            }))
                        }
                    });
                    var Se, ke, Ee = /^(?:checkbox|radio)$/i,
                        je = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                        Ae = /^$|^module$|\/(?:java|ecma)script/i;
                    Se = b.createDocumentFragment().appendChild(b.createElement("div")), (ke = b.createElement("input")).setAttribute("type", "radio"), ke.setAttribute("checked", "checked"), ke.setAttribute("name", "t"), Se.appendChild(ke), y.checkClone = Se.cloneNode(!0).cloneNode(!0).lastChild.checked, Se.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!Se.cloneNode(!0).lastChild.defaultValue, Se.innerHTML = "<option></option>", y.option = !!Se.lastChild;
                    var De = {
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: [0, "", ""]
                    };

                    function Ne(e, t) {
                        var n;
                        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? E.merge([e], n) : n
                    }

                    function qe(e, t) {
                        for (var n = 0, r = e.length; n < r; n++) ue.set(e[n], "globalEval", !t || ue.get(t[n], "globalEval"))
                    }
                    De.tbody = De.tfoot = De.colgroup = De.caption = De.thead, De.th = De.td, y.option || (De.optgroup = De.option = [1, "<select multiple='multiple'>", "</select>"]);
                    var Le = /<|&#?\w+;/;

                    function He(e, t, n, r, i) {
                        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                            if ((o = e[d]) || 0 === o)
                                if ("object" === C(o)) E.merge(p, o.nodeType ? [o] : o);
                                else if (Le.test(o)) {
                            for (a = a || f.appendChild(t.createElement("div")), s = (je.exec(o) || ["", ""])[1].toLowerCase(), u = De[s] || De._default, a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
                            E.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
                        } else p.push(t.createTextNode(o));
                        for (f.textContent = "", d = 0; o = p[d++];)
                            if (r && E.inArray(o, r) > -1) i && i.push(o);
                            else if (l = ye(o), a = Ne(f.appendChild(o), "script"), l && qe(a), n)
                            for (c = 0; o = a[c++];) Ae.test(o.type || "") && n.push(o);
                        return f
                    }
                    var Oe = /^([^.]*)(?:\.(.+)|)/;

                    function Pe() {
                        return !0
                    }

                    function Me() {
                        return !1
                    }

                    function Re(e, t, n, r, o, a) {
                        var s, u;
                        if ("object" === i(t)) {
                            for (u in "string" != typeof n && (r = r || n, n = void 0), t) Re(e, u, n, r, t[u], a);
                            return e
                        }
                        if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Me;
                        else if (!o) return e;
                        return 1 === a && (s = o, o = function(e) {
                            return E().off(e), s.apply(this, arguments)
                        }, o.guid = s.guid || (s.guid = E.guid++)), e.each((function() {
                            E.event.add(this, t, o, r, n)
                        }))
                    }

                    function Ie(e, t, n) {
                        n ? (ue.set(e, t, !1), E.event.add(e, t, {
                            namespace: !1,
                            handler: function(e) {
                                var n, r = ue.get(this, t);
                                if (1 & e.isTrigger && this[t]) {
                                    if (r)(E.event.special[t] || {}).delegateType && e.stopPropagation();
                                    else if (r = u.call(arguments), ue.set(this, t, r), this[t](), n = ue.get(this, t), ue.set(this, t, !1), r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n
                                } else r && (ue.set(this, t, E.event.trigger(r[0], r.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Pe)
                            }
                        })) : void 0 === ue.get(e, t) && E.event.add(e, t, Pe)
                    }
                    E.event = {
                        global: {},
                        add: function(e, t, n, r, i) {
                            var o, a, s, u, l, c, f, p, d, h, g, v = ue.get(e);
                            if (ae(e))
                                for (n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(ve, i), n.guid || (n.guid = E.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(t) {
                                        return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0
                                    }), l = (t = (t || "").match(G) || [""]).length; l--;) d = g = (s = Oe.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = E.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = E.event.special[d] || {}, c = E.extend({
                                    type: d,
                                    origType: g,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext: i && E.expr.match.needsContext.test(i),
                                    namespace: h.join(".")
                                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), E.event.global[d] = !0)
                        },
                        remove: function(e, t, n, r, i) {
                            var o, a, s, u, l, c, f, p, d, h, g, v = ue.hasData(e) && ue.get(e);
                            if (v && (u = v.events)) {
                                for (l = (t = (t || "").match(G) || [""]).length; l--;)
                                    if (d = g = (s = Oe.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                                        for (f = E.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || E.removeEvent(e, d, v.handle), delete u[d])
                                    } else
                                        for (d in u) E.event.remove(e, d + t[l], n, r, !0);
                                E.isEmptyObject(u) && ue.remove(e, "handle events")
                            }
                        },
                        dispatch: function(e) {
                            var t, n, r, i, o, a, s = new Array(arguments.length),
                                u = E.event.fix(e),
                                l = (ue.get(this, "events") || Object.create(null))[u.type] || [],
                                c = E.event.special[u.type] || {};
                            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                                for (a = E.event.handlers.call(this, u, l), t = 0;
                                    (i = a[t++]) && !u.isPropagationStopped();)
                                    for (u.currentTarget = i.elem, n = 0;
                                        (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                                return c.postDispatch && c.postDispatch.call(this, u), u.result
                            }
                        },
                        handlers: function(e, t) {
                            var n, r, i, o, a, s = [],
                                u = t.delegateCount,
                                l = e.target;
                            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                                for (; l !== this; l = l.parentNode || this)
                                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? E(i, this).index(l) > -1 : E.find(i, this, null, [l]).length), a[i] && o.push(r);
                                        o.length && s.push({
                                            elem: l,
                                            handlers: o
                                        })
                                    }
                            return l = this, u < t.length && s.push({
                                elem: l,
                                handlers: t.slice(u)
                            }), s
                        },
                        addProp: function(e, t) {
                            Object.defineProperty(E.Event.prototype, e, {
                                enumerable: !0,
                                configurable: !0,
                                get: m(t) ? function() {
                                    if (this.originalEvent) return t(this.originalEvent)
                                } : function() {
                                    if (this.originalEvent) return this.originalEvent[e]
                                },
                                set: function(t) {
                                    Object.defineProperty(this, e, {
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: t
                                    })
                                }
                            })
                        },
                        fix: function(e) {
                            return e[E.expando] ? e : new E.Event(e)
                        },
                        special: {
                            load: {
                                noBubble: !0
                            },
                            click: {
                                setup: function(e) {
                                    var t = this || e;
                                    return Ee.test(t.type) && t.click && A(t, "input") && Ie(t, "click", !0), !1
                                },
                                trigger: function(e) {
                                    var t = this || e;
                                    return Ee.test(t.type) && t.click && A(t, "input") && Ie(t, "click"), !0
                                },
                                _default: function(e) {
                                    var t = e.target;
                                    return Ee.test(t.type) && t.click && A(t, "input") && ue.get(t, "click") || A(t, "a")
                                }
                            },
                            beforeunload: {
                                postDispatch: function(e) {
                                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                                }
                            }
                        }
                    }, E.removeEvent = function(e, t, n) {
                        e.removeEventListener && e.removeEventListener(t, n)
                    }, E.Event = function(e, t) {
                        if (!(this instanceof E.Event)) return new E.Event(e, t);
                        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Pe : Me, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
                    }, E.Event.prototype = {
                        constructor: E.Event,
                        isDefaultPrevented: Me,
                        isPropagationStopped: Me,
                        isImmediatePropagationStopped: Me,
                        isSimulated: !1,
                        preventDefault: function() {
                            var e = this.originalEvent;
                            this.isDefaultPrevented = Pe, e && !this.isSimulated && e.preventDefault()
                        },
                        stopPropagation: function() {
                            var e = this.originalEvent;
                            this.isPropagationStopped = Pe, e && !this.isSimulated && e.stopPropagation()
                        },
                        stopImmediatePropagation: function() {
                            var e = this.originalEvent;
                            this.isImmediatePropagationStopped = Pe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                        }
                    }, E.each({
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: !0
                    }, E.event.addProp), E.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function(e, t) {
                        function n(e) {
                            if (b.documentMode) {
                                var n = ue.get(this, "handle"),
                                    r = E.event.fix(e);
                                r.type = "focusin" === e.type ? "focus" : "blur", r.isSimulated = !0, n(e), r.target === r.currentTarget && n(r)
                            } else E.event.simulate(t, e.target, E.event.fix(e))
                        }
                        E.event.special[e] = {
                            setup: function() {
                                var r;
                                if (Ie(this, e, !0), !b.documentMode) return !1;
                                (r = ue.get(this, t)) || this.addEventListener(t, n), ue.set(this, t, (r || 0) + 1)
                            },
                            trigger: function() {
                                return Ie(this, e), !0
                            },
                            teardown: function() {
                                var e;
                                if (!b.documentMode) return !1;
                                (e = ue.get(this, t) - 1) ? ue.set(this, t, e): (this.removeEventListener(t, n), ue.remove(this, t))
                            },
                            _default: function(t) {
                                return ue.get(t.target, e)
                            },
                            delegateType: t
                        }, E.event.special[t] = {
                            setup: function() {
                                var r = this.ownerDocument || this.document || this,
                                    i = b.documentMode ? this : r,
                                    o = ue.get(i, t);
                                o || (b.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)), ue.set(i, t, (o || 0) + 1)
                            },
                            teardown: function() {
                                var r = this.ownerDocument || this.document || this,
                                    i = b.documentMode ? this : r,
                                    o = ue.get(i, t) - 1;
                                o ? ue.set(i, t, o) : (b.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0), ue.remove(i, t))
                            }
                        }
                    })), E.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    }, (function(e, t) {
                        E.event.special[e] = {
                            delegateType: t,
                            bindType: t,
                            handle: function(e) {
                                var n, r = e.relatedTarget,
                                    i = e.handleObj;
                                return r && (r === this || E.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                            }
                        }
                    })), E.fn.extend({
                        on: function(e, t, n, r) {
                            return Re(this, e, t, n, r)
                        },
                        one: function(e, t, n, r) {
                            return Re(this, e, t, n, r, 1)
                        },
                        off: function(e, t, n) {
                            var r, o;
                            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                            if ("object" === i(e)) {
                                for (o in e) this.off(o, t, e[o]);
                                return this
                            }
                            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Me), this.each((function() {
                                E.event.remove(this, e, n, t)
                            }))
                        }
                    });
                    var We = /<script|<style|<link/i,
                        Fe = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        $e = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

                    function Be(e, t) {
                        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
                    }

                    function _e(e) {
                        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
                    }

                    function ze(e) {
                        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
                    }

                    function Xe(e, t) {
                        var n, r, i, o, a, s;
                        if (1 === t.nodeType) {
                            if (ue.hasData(e) && (s = ue.get(e).events))
                                for (i in ue.remove(t, "handle events"), s)
                                    for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
                            le.hasData(e) && (o = le.access(e), a = E.extend({}, o), le.set(t, a))
                        }
                    }

                    function Ue(e, t) {
                        var n = t.nodeName.toLowerCase();
                        "input" === n && Ee.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                    }

                    function Ve(e, t, n, r) {
                        t = l(t);
                        var i, o, a, s, u, c, f = 0,
                            p = e.length,
                            d = p - 1,
                            h = t[0],
                            g = m(h);
                        if (g || p > 1 && "string" == typeof h && !y.checkClone && Fe.test(h)) return e.each((function(i) {
                            var o = e.eq(i);
                            g && (t[0] = h.call(this, i, o.html())), Ve(o, t, n, r)
                        }));
                        if (p && (o = (i = He(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                            for (s = (a = E.map(Ne(i, "script"), _e)).length; f < p; f++) u = i, f !== d && (u = E.clone(u, !0, !0), s && E.merge(a, Ne(u, "script"))), n.call(e[f], u, f);
                            if (s)
                                for (c = a[a.length - 1].ownerDocument, E.map(a, ze), f = 0; f < s; f++) u = a[f], Ae.test(u.type || "") && !ue.access(u, "globalEval") && E.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {
                                    nonce: u.nonce || u.getAttribute("nonce")
                                }, c) : T(u.textContent.replace($e, ""), u, c))
                        }
                        return e
                    }

                    function Ge(e, t, n) {
                        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(Ne(r)), r.parentNode && (n && ye(r) && qe(Ne(r, "script")), r.parentNode.removeChild(r));
                        return e
                    }
                    E.extend({
                        htmlPrefilter: function(e) {
                            return e
                        },
                        clone: function(e, t, n) {
                            var r, i, o, a, s = e.cloneNode(!0),
                                u = ye(e);
                            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                                for (a = Ne(s), r = 0, i = (o = Ne(e)).length; r < i; r++) Ue(o[r], a[r]);
                            if (t)
                                if (n)
                                    for (o = o || Ne(e), a = a || Ne(s), r = 0, i = o.length; r < i; r++) Xe(o[r], a[r]);
                                else Xe(e, s);
                            return (a = Ne(s, "script")).length > 0 && qe(a, !u && Ne(e, "script")), s
                        },
                        cleanData: function(e) {
                            for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                                if (ae(n)) {
                                    if (t = n[ue.expando]) {
                                        if (t.events)
                                            for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                                        n[ue.expando] = void 0
                                    }
                                    n[le.expando] && (n[le.expando] = void 0)
                                }
                        }
                    }), E.fn.extend({
                        detach: function(e) {
                            return Ge(this, e, !0)
                        },
                        remove: function(e) {
                            return Ge(this, e)
                        },
                        text: function(e) {
                            return te(this, (function(e) {
                                return void 0 === e ? E.text(this) : this.empty().each((function() {
                                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                                }))
                            }), null, e, arguments.length)
                        },
                        append: function() {
                            return Ve(this, arguments, (function(e) {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Be(this, e).appendChild(e)
                            }))
                        },
                        prepend: function() {
                            return Ve(this, arguments, (function(e) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var t = Be(this, e);
                                    t.insertBefore(e, t.firstChild)
                                }
                            }))
                        },
                        before: function() {
                            return Ve(this, arguments, (function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this)
                            }))
                        },
                        after: function() {
                            return Ve(this, arguments, (function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                            }))
                        },
                        empty: function() {
                            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(Ne(e, !1)), e.textContent = "");
                            return this
                        },
                        clone: function(e, t) {
                            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                                return E.clone(this, e, t)
                            }))
                        },
                        html: function(e) {
                            return te(this, (function(e) {
                                var t = this[0] || {},
                                    n = 0,
                                    r = this.length;
                                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                if ("string" == typeof e && !We.test(e) && !De[(je.exec(e) || ["", ""])[1].toLowerCase()]) {
                                    e = E.htmlPrefilter(e);
                                    try {
                                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(Ne(t, !1)), t.innerHTML = e);
                                        t = 0
                                    } catch (e) {}
                                }
                                t && this.empty().append(e)
                            }), null, e, arguments.length)
                        },
                        replaceWith: function() {
                            var e = [];
                            return Ve(this, arguments, (function(t) {
                                var n = this.parentNode;
                                E.inArray(this, e) < 0 && (E.cleanData(Ne(this)), n && n.replaceChild(t, this))
                            }), e)
                        }
                    }), E.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    }, (function(e, t) {
                        E.fn[e] = function(e) {
                            for (var n, r = [], i = E(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), E(i[a])[t](n), c.apply(r, n.get());
                            return this.pushStack(r)
                        }
                    }));
                    var Ye = new RegExp("^(" + de + ")(?!px)[a-z%]+$", "i"),
                        Qe = /^--/,
                        Je = function(e) {
                            var t = e.ownerDocument.defaultView;
                            return t && t.opener || (t = n), t.getComputedStyle(e)
                        },
                        Ke = function(e, t, n) {
                            var r, i, o = {};
                            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                            for (i in r = n.call(e), t) e.style[i] = o[i];
                            return r
                        },
                        Ze = new RegExp(ge.join("|"), "i");

                    function et(e, t, n) {
                        var r, i, o, a, s = Qe.test(t),
                            u = e.style;
                        return (n = n || Je(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(H, "$1") || void 0), "" !== a || ye(e) || (a = E.style(e, t)), !y.pixelBoxStyles() && Ye.test(a) && Ze.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
                    }

                    function tt(e, t) {
                        return {
                            get: function() {
                                if (!e()) return (this.get = t).apply(this, arguments);
                                delete this.get
                            }
                        }
                    }! function() {
                        function e() {
                            if (c) {
                                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ve.appendChild(l).appendChild(c);
                                var e = n.getComputedStyle(c);
                                r = "1%" !== e.top, u = 12 === t(e.marginLeft), c.style.right = "60%", a = 36 === t(e.right), i = 36 === t(e.width), c.style.position = "absolute", o = 12 === t(c.offsetWidth / 3), ve.removeChild(l), c = null
                            }
                        }

                        function t(e) {
                            return Math.round(parseFloat(e))
                        }
                        var r, i, o, a, s, u, l = b.createElement("div"),
                            c = b.createElement("div");
                        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === c.style.backgroundClip, E.extend(y, {
                            boxSizingReliable: function() {
                                return e(), i
                            },
                            pixelBoxStyles: function() {
                                return e(), a
                            },
                            pixelPosition: function() {
                                return e(), r
                            },
                            reliableMarginLeft: function() {
                                return e(), u
                            },
                            scrollboxSize: function() {
                                return e(), o
                            },
                            reliableTrDimensions: function() {
                                var e, t, r, i;
                                return null == s && (e = b.createElement("table"), t = b.createElement("tr"), r = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", r.style.height = "9px", r.style.display = "block", ve.appendChild(e).appendChild(t).appendChild(r), i = n.getComputedStyle(t), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight, ve.removeChild(e)), s
                            }
                        }))
                    }();
                    var nt = ["Webkit", "Moz", "ms"],
                        rt = b.createElement("div").style,
                        it = {};

                    function ot(e) {
                        var t = E.cssProps[e] || it[e];
                        return t || (e in rt ? e : it[e] = function(e) {
                            for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;)
                                if ((e = nt[n] + t) in rt) return e
                        }(e) || e)
                    }
                    var at = /^(none|table(?!-c[ea]).+)/,
                        st = {
                            position: "absolute",
                            visibility: "hidden",
                            display: "block"
                        },
                        ut = {
                            letterSpacing: "0",
                            fontWeight: "400"
                        };

                    function lt(e, t, n) {
                        var r = he.exec(t);
                        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                    }

                    function ct(e, t, n, r, i, o) {
                        var a = "width" === t ? 1 : 0,
                            s = 0,
                            u = 0,
                            l = 0;
                        if (n === (r ? "border" : "content")) return 0;
                        for (; a < 4; a += 2) "margin" === n && (l += E.css(e, n + ge[a], !0, i)), r ? ("content" === n && (u -= E.css(e, "padding" + ge[a], !0, i)), "margin" !== n && (u -= E.css(e, "border" + ge[a] + "Width", !0, i))) : (u += E.css(e, "padding" + ge[a], !0, i), "padding" !== n ? u += E.css(e, "border" + ge[a] + "Width", !0, i) : s += E.css(e, "border" + ge[a] + "Width", !0, i));
                        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l
                    }

                    function ft(e, t, n) {
                        var r = Je(e),
                            i = (!y.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
                            o = i,
                            a = et(e, t, r),
                            s = "offset" + t[0].toUpperCase() + t.slice(1);
                        if (Ye.test(a)) {
                            if (!n) return a;
                            a = "auto"
                        }
                        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + ct(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
                    }

                    function pt(e, t, n, r, i) {
                        return new pt.prototype.init(e, t, n, r, i)
                    }
                    E.extend({
                        cssHooks: {
                            opacity: {
                                get: function(e, t) {
                                    if (t) {
                                        var n = et(e, "opacity");
                                        return "" === n ? "1" : n
                                    }
                                }
                            }
                        },
                        cssNumber: {
                            animationIterationCount: !0,
                            aspectRatio: !0,
                            borderImageSlice: !0,
                            columnCount: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            gridArea: !0,
                            gridColumn: !0,
                            gridColumnEnd: !0,
                            gridColumnStart: !0,
                            gridRow: !0,
                            gridRowEnd: !0,
                            gridRowStart: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            scale: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0,
                            fillOpacity: !0,
                            floodOpacity: !0,
                            stopOpacity: !0,
                            strokeMiterlimit: !0,
                            strokeOpacity: !0
                        },
                        cssProps: {},
                        style: function(e, t, n, r) {
                            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                var o, a, s, u = oe(t),
                                    l = Qe.test(t),
                                    c = e.style;
                                if (l || (t = ot(u)), s = E.cssHooks[t] || E.cssHooks[u], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, r)) ? o : c[t];
                                "string" === (a = i(n)) && (o = he.exec(n)) && o[1] && (n = be(e, t, o), a = "number"), null != n && n == n && ("number" !== a || l || (n += o && o[3] || (E.cssNumber[u] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l ? c.setProperty(t, n) : c[t] = n))
                            }
                        },
                        css: function(e, t, n, r) {
                            var i, o, a, s = oe(t);
                            return Qe.test(t) || (t = ot(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = et(e, t, r)), "normal" === i && t in ut && (i = ut[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                        }
                    }), E.each(["height", "width"], (function(e, t) {
                        E.cssHooks[t] = {
                            get: function(e, n, r) {
                                if (n) return !at.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ft(e, t, r) : Ke(e, st, (function() {
                                    return ft(e, t, r)
                                }))
                            },
                            set: function(e, n, r) {
                                var i, o = Je(e),
                                    a = !y.scrollboxSize() && "absolute" === o.position,
                                    s = (a || r) && "border-box" === E.css(e, "boxSizing", !1, o),
                                    u = r ? ct(e, t, r, s, o) : 0;
                                return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - ct(e, t, "border", !1, o) - .5)), u && (i = he.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = E.css(e, t)), lt(0, n, u)
                            }
                        }
                    })), E.cssHooks.marginLeft = tt(y.reliableMarginLeft, (function(e, t) {
                        if (t) return (parseFloat(et(e, "marginLeft")) || e.getBoundingClientRect().left - Ke(e, {
                            marginLeft: 0
                        }, (function() {
                            return e.getBoundingClientRect().left
                        }))) + "px"
                    })), E.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    }, (function(e, t) {
                        E.cssHooks[e + t] = {
                            expand: function(n) {
                                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ge[r] + t] = o[r] || o[r - 2] || o[0];
                                return i
                            }
                        }, "margin" !== e && (E.cssHooks[e + t].set = lt)
                    })), E.fn.extend({
                        css: function(e, t) {
                            return te(this, (function(e, t, n) {
                                var r, i, o = {},
                                    a = 0;
                                if (Array.isArray(t)) {
                                    for (r = Je(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);
                                    return o
                                }
                                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
                            }), e, t, arguments.length > 1)
                        }
                    }), E.Tween = pt, pt.prototype = {
                        constructor: pt,
                        init: function(e, t, n, r, i, o) {
                            this.elem = e, this.prop = n, this.easing = i || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (E.cssNumber[n] ? "" : "px")
                        },
                        cur: function() {
                            var e = pt.propHooks[this.prop];
                            return e && e.get ? e.get(this) : pt.propHooks._default.get(this)
                        },
                        run: function(e) {
                            var t, n = pt.propHooks[this.prop];
                            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : pt.propHooks._default.set(this), this
                        }
                    }, pt.prototype.init.prototype = pt.prototype, pt.propHooks = {
                        _default: {
                            get: function(e) {
                                var t;
                                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                            },
                            set: function(e) {
                                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[ot(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
                            }
                        }
                    }, pt.propHooks.scrollTop = pt.propHooks.scrollLeft = {
                        set: function(e) {
                            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                        }
                    }, E.easing = {
                        linear: function(e) {
                            return e
                        },
                        swing: function(e) {
                            return .5 - Math.cos(e * Math.PI) / 2
                        },
                        _default: "swing"
                    }, E.fx = pt.prototype.init, E.fx.step = {};
                    var dt, ht, gt = /^(?:toggle|show|hide)$/,
                        vt = /queueHooks$/;

                    function yt() {
                        ht && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(yt) : n.setTimeout(yt, E.fx.interval), E.fx.tick())
                    }

                    function mt() {
                        return n.setTimeout((function() {
                            dt = void 0
                        })), dt = Date.now()
                    }

                    function xt(e, t) {
                        var n, r = 0,
                            i = {
                                height: e
                            };
                        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ge[r])] = i["padding" + n] = e;
                        return t && (i.opacity = i.width = e), i
                    }

                    function bt(e, t, n) {
                        for (var r, i = (wt.tweeners[t] || []).concat(wt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                            if (r = i[o].call(n, t, e)) return r
                    }

                    function wt(e, t, n) {
                        var r, i, o = 0,
                            a = wt.prefilters.length,
                            s = E.Deferred().always((function() {
                                delete u.elem
                            })),
                            u = function() {
                                if (i) return !1;
                                for (var t = dt || mt(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
                            },
                            l = s.promise({
                                elem: e,
                                props: E.extend({}, t),
                                opts: E.extend(!0, {
                                    specialEasing: {},
                                    easing: E.easing._default
                                }, n),
                                originalProperties: t,
                                originalOptions: n,
                                startTime: dt || mt(),
                                duration: n.duration,
                                tweens: [],
                                createTween: function(t, n) {
                                    var r = E.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                                    return l.tweens.push(r), r
                                },
                                stop: function(t) {
                                    var n = 0,
                                        r = t ? l.tweens.length : 0;
                                    if (i) return this;
                                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                                }
                            }),
                            c = l.props;
                        for (! function(e, t) {
                                var n, r, i, o, a;
                                for (n in e)
                                    if (i = t[r = oe(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = E.cssHooks[r]) && "expand" in a)
                                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                                    else t[r] = i
                            }(c, l.opts.specialEasing); o < a; o++)
                            if (r = wt.prefilters[o].call(l, e, c, l.opts)) return m(r.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
                        return E.map(c, bt, l), m(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), E.fx.timer(E.extend(u, {
                            elem: e,
                            anim: l,
                            queue: l.opts.queue
                        })), l
                    }
                    E.Animation = E.extend(wt, {
                            tweeners: {
                                "*": [function(e, t) {
                                    var n = this.createTween(e, t);
                                    return be(n.elem, e, he.exec(t), n), n
                                }]
                            },
                            tweener: function(e, t) {
                                m(e) ? (t = e, e = ["*"]) : e = e.match(G);
                                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], wt.tweeners[n] = wt.tweeners[n] || [], wt.tweeners[n].unshift(t)
                            },
                            prefilters: [function(e, t, n) {
                                var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                                    p = this,
                                    d = {},
                                    h = e.style,
                                    g = e.nodeType && xe(e),
                                    v = ue.get(e, "fxshow");
                                for (r in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                                        a.unqueued || s()
                                    }), a.unqueued++, p.always((function() {
                                        p.always((function() {
                                            a.unqueued--, E.queue(e, "fx").length || a.empty.fire()
                                        }))
                                    }))), t)
                                    if (i = t[r], gt.test(i)) {
                                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                                            if ("show" !== i || !v || void 0 === v[r]) continue;
                                            g = !0
                                        }
                                        d[r] = v && v[r] || E.style(e, r)
                                    }
                                if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(d))
                                    for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = ue.get(e, "display")), "none" === (c = E.css(e, "display")) && (l ? c = l : (Ce([e], !0), l = e.style.display || l, c = E.css(e, "display"), Ce([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === E.css(e, "float") && (u || (p.done((function() {
                                            h.display = l
                                        })), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function() {
                                            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                                        }))), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = ue.access(e, "fxshow", {
                                        display: l
                                    }), o && (v.hidden = !g), g && Ce([e], !0), p.done((function() {
                                        for (r in g || Ce([e]), ue.remove(e, "fxshow"), d) E.style(e, r, d[r])
                                    }))), u = bt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
                            }],
                            prefilter: function(e, t) {
                                t ? wt.prefilters.unshift(e) : wt.prefilters.push(e)
                            }
                        }), E.speed = function(e, t, n) {
                            var r = e && "object" === i(e) ? E.extend({}, e) : {
                                complete: n || !n && t || m(e) && e,
                                duration: e,
                                easing: n && t || t && !m(t) && t
                            };
                            return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                                m(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue)
                            }, r
                        }, E.fn.extend({
                            fadeTo: function(e, t, n, r) {
                                return this.filter(xe).css("opacity", 0).show().end().animate({
                                    opacity: t
                                }, e, n, r)
                            },
                            animate: function(e, t, n, r) {
                                var i = E.isEmptyObject(e),
                                    o = E.speed(t, n, r),
                                    a = function() {
                                        var t = wt(this, E.extend({}, e), o);
                                        (i || ue.get(this, "finish")) && t.stop(!0)
                                    };
                                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                            },
                            stop: function(e, t, n) {
                                var r = function(e) {
                                    var t = e.stop;
                                    delete e.stop, t(n)
                                };
                                return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                                    var t = !0,
                                        i = null != e && e + "queueHooks",
                                        o = E.timers,
                                        a = ue.get(this);
                                    if (i) a[i] && a[i].stop && r(a[i]);
                                    else
                                        for (i in a) a[i] && a[i].stop && vt.test(i) && r(a[i]);
                                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                                    !t && n || E.dequeue(this, e)
                                }))
                            },
                            finish: function(e) {
                                return !1 !== e && (e = e || "fx"), this.each((function() {
                                    var t, n = ue.get(this),
                                        r = n[e + "queue"],
                                        i = n[e + "queueHooks"],
                                        o = E.timers,
                                        a = r ? r.length : 0;
                                    for (n.finish = !0, E.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                    delete n.finish
                                }))
                            }
                        }), E.each(["toggle", "show", "hide"], (function(e, t) {
                            var n = E.fn[t];
                            E.fn[t] = function(e, r, i) {
                                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(xt(t, !0), e, r, i)
                            }
                        })), E.each({
                            slideDown: xt("show"),
                            slideUp: xt("hide"),
                            slideToggle: xt("toggle"),
                            fadeIn: {
                                opacity: "show"
                            },
                            fadeOut: {
                                opacity: "hide"
                            },
                            fadeToggle: {
                                opacity: "toggle"
                            }
                        }, (function(e, t) {
                            E.fn[e] = function(e, n, r) {
                                return this.animate(t, e, n, r)
                            }
                        })), E.timers = [], E.fx.tick = function() {
                            var e, t = 0,
                                n = E.timers;
                            for (dt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                            n.length || E.fx.stop(), dt = void 0
                        }, E.fx.timer = function(e) {
                            E.timers.push(e), E.fx.start()
                        }, E.fx.interval = 13, E.fx.start = function() {
                            ht || (ht = !0, yt())
                        }, E.fx.stop = function() {
                            ht = null
                        }, E.fx.speeds = {
                            slow: 600,
                            fast: 200,
                            _default: 400
                        }, E.fn.delay = function(e, t) {
                            return e = E.fx && E.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, r) {
                                var i = n.setTimeout(t, e);
                                r.stop = function() {
                                    n.clearTimeout(i)
                                }
                            }))
                        },
                        function() {
                            var e = b.createElement("input"),
                                t = b.createElement("select").appendChild(b.createElement("option"));
                            e.type = "checkbox", y.checkOn = "" !== e.value, y.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", y.radioValue = "t" === e.value
                        }();
                    var Tt, Ct = E.expr.attrHandle;
                    E.fn.extend({
                        attr: function(e, t) {
                            return te(this, E.attr, e, t, arguments.length > 1)
                        },
                        removeAttr: function(e) {
                            return this.each((function() {
                                E.removeAttr(this, e)
                            }))
                        }
                    }), E.extend({
                        attr: function(e, t, n) {
                            var r, i, o = e.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? Tt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
                        },
                        attrHooks: {
                            type: {
                                set: function(e, t) {
                                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                                        var n = e.value;
                                        return e.setAttribute("type", t), n && (e.value = n), t
                                    }
                                }
                            }
                        },
                        removeAttr: function(e, t) {
                            var n, r = 0,
                                i = t && t.match(G);
                            if (i && 1 === e.nodeType)
                                for (; n = i[r++];) e.removeAttribute(n)
                        }
                    }), Tt = {
                        set: function(e, t, n) {
                            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
                        }
                    }, E.each(E.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                        var n = Ct[t] || E.find.attr;
                        Ct[t] = function(e, t, r) {
                            var i, o, a = t.toLowerCase();
                            return r || (o = Ct[a], Ct[a] = i, i = null != n(e, t, r) ? a : null, Ct[a] = o), i
                        }
                    }));
                    var St = /^(?:input|select|textarea|button)$/i,
                        kt = /^(?:a|area)$/i;

                    function Et(e) {
                        return (e.match(G) || []).join(" ")
                    }

                    function jt(e) {
                        return e.getAttribute && e.getAttribute("class") || ""
                    }

                    function At(e) {
                        return Array.isArray(e) ? e : "string" == typeof e && e.match(G) || []
                    }
                    E.fn.extend({
                        prop: function(e, t) {
                            return te(this, E.prop, e, t, arguments.length > 1)
                        },
                        removeProp: function(e) {
                            return this.each((function() {
                                delete this[E.propFix[e] || e]
                            }))
                        }
                    }), E.extend({
                        prop: function(e, t, n) {
                            var r, i, o = e.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                        },
                        propHooks: {
                            tabIndex: {
                                get: function(e) {
                                    var t = E.find.attr(e, "tabindex");
                                    return t ? parseInt(t, 10) : St.test(e.nodeName) || kt.test(e.nodeName) && e.href ? 0 : -1
                                }
                            }
                        },
                        propFix: {
                            for: "htmlFor",
                            class: "className"
                        }
                    }), y.optSelected || (E.propHooks.selected = {
                        get: function(e) {
                            var t = e.parentNode;
                            return t && t.parentNode && t.parentNode.selectedIndex, null
                        },
                        set: function(e) {
                            var t = e.parentNode;
                            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                        }
                    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                        E.propFix[this.toLowerCase()] = this
                    })), E.fn.extend({
                        addClass: function(e) {
                            var t, n, r, i, o, a;
                            return m(e) ? this.each((function(t) {
                                E(this).addClass(e.call(this, t, jt(this)))
                            })) : (t = At(e)).length ? this.each((function() {
                                if (r = jt(this), n = 1 === this.nodeType && " " + Et(r) + " ") {
                                    for (o = 0; o < t.length; o++) i = t[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                                    a = Et(n), r !== a && this.setAttribute("class", a)
                                }
                            })) : this
                        },
                        removeClass: function(e) {
                            var t, n, r, i, o, a;
                            return m(e) ? this.each((function(t) {
                                E(this).removeClass(e.call(this, t, jt(this)))
                            })) : arguments.length ? (t = At(e)).length ? this.each((function() {
                                if (r = jt(this), n = 1 === this.nodeType && " " + Et(r) + " ") {
                                    for (o = 0; o < t.length; o++)
                                        for (i = t[o]; n.indexOf(" " + i + " ") > -1;) n = n.replace(" " + i + " ", " ");
                                    a = Et(n), r !== a && this.setAttribute("class", a)
                                }
                            })) : this : this.attr("class", "")
                        },
                        toggleClass: function(e, t) {
                            var n, r, o, a, s = i(e),
                                u = "string" === s || Array.isArray(e);
                            return m(e) ? this.each((function(n) {
                                E(this).toggleClass(e.call(this, n, jt(this), t), t)
                            })) : "boolean" == typeof t && u ? t ? this.addClass(e) : this.removeClass(e) : (n = At(e), this.each((function() {
                                if (u)
                                    for (a = E(this), o = 0; o < n.length; o++) r = n[o], a.hasClass(r) ? a.removeClass(r) : a.addClass(r);
                                else void 0 !== e && "boolean" !== s || ((r = jt(this)) && ue.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : ue.get(this, "__className__") || ""))
                            })))
                        },
                        hasClass: function(e) {
                            var t, n, r = 0;
                            for (t = " " + e + " "; n = this[r++];)
                                if (1 === n.nodeType && (" " + Et(jt(n)) + " ").indexOf(t) > -1) return !0;
                            return !1
                        }
                    });
                    var Dt = /\r/g;
                    E.fn.extend({
                        val: function(e) {
                            var t, n, r, i = this[0];
                            return arguments.length ? (r = m(e), this.each((function(n) {
                                var i;
                                1 === this.nodeType && (null == (i = r ? e.call(this, n, E(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = E.map(i, (function(e) {
                                    return null == e ? "" : e + ""
                                }))), (t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                            }))) : i ? (t = E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(Dt, "") : null == n ? "" : n : void 0
                        }
                    }), E.extend({
                        valHooks: {
                            option: {
                                get: function(e) {
                                    var t = E.find.attr(e, "value");
                                    return null != t ? t : Et(E.text(e))
                                }
                            },
                            select: {
                                get: function(e) {
                                    var t, n, r, i = e.options,
                                        o = e.selectedIndex,
                                        a = "select-one" === e.type,
                                        s = a ? null : [],
                                        u = a ? o + 1 : i.length;
                                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                            if (t = E(n).val(), a) return t;
                                            s.push(t)
                                        }
                                    return s
                                },
                                set: function(e, t) {
                                    for (var n, r, i = e.options, o = E.makeArray(t), a = i.length; a--;)((r = i[a]).selected = E.inArray(E.valHooks.option.get(r), o) > -1) && (n = !0);
                                    return n || (e.selectedIndex = -1), o
                                }
                            }
                        }
                    }), E.each(["radio", "checkbox"], (function() {
                        E.valHooks[this] = {
                            set: function(e, t) {
                                if (Array.isArray(t)) return e.checked = E.inArray(E(e).val(), t) > -1
                            }
                        }, y.checkOn || (E.valHooks[this].get = function(e) {
                            return null === e.getAttribute("value") ? "on" : e.value
                        })
                    }));
                    var Nt = n.location,
                        qt = {
                            guid: Date.now()
                        },
                        Lt = /\?/;
                    E.parseXML = function(e) {
                        var t, r;
                        if (!e || "string" != typeof e) return null;
                        try {
                            t = (new n.DOMParser).parseFromString(e, "text/xml")
                        } catch (e) {}
                        return r = t && t.getElementsByTagName("parsererror")[0], t && !r || E.error("Invalid XML: " + (r ? E.map(r.childNodes, (function(e) {
                            return e.textContent
                        })).join("\n") : e)), t
                    };
                    var Ht = /^(?:focusinfocus|focusoutblur)$/,
                        Ot = function(e) {
                            e.stopPropagation()
                        };
                    E.extend(E.event, {
                        trigger: function(e, t, r, o) {
                            var a, s, u, l, c, f, p, d, g = [r || b],
                                v = h.call(e, "type") ? e.type : e,
                                y = h.call(e, "namespace") ? e.namespace.split(".") : [];
                            if (s = d = u = r = r || b, 3 !== r.nodeType && 8 !== r.nodeType && !Ht.test(v + E.event.triggered) && (v.indexOf(".") > -1 && (y = v.split("."), v = y.shift(), y.sort()), c = v.indexOf(":") < 0 && "on" + v, (e = e[E.expando] ? e : new E.Event(v, "object" === i(e) && e)).isTrigger = o ? 2 : 3, e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : E.makeArray(t, [e]), p = E.event.special[v] || {}, o || !p.trigger || !1 !== p.trigger.apply(r, t))) {
                                if (!o && !p.noBubble && !x(r)) {
                                    for (l = p.delegateType || v, Ht.test(l + v) || (s = s.parentNode); s; s = s.parentNode) g.push(s), u = s;
                                    u === (r.ownerDocument || b) && g.push(u.defaultView || u.parentWindow || n)
                                }
                                for (a = 0;
                                    (s = g[a++]) && !e.isPropagationStopped();) d = s, e.type = a > 1 ? l : p.bindType || v, (f = (ue.get(s, "events") || Object.create(null))[e.type] && ue.get(s, "handle")) && f.apply(s, t), (f = c && s[c]) && f.apply && ae(s) && (e.result = f.apply(s, t), !1 === e.result && e.preventDefault());
                                return e.type = v, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(g.pop(), t) || !ae(r) || c && m(r[v]) && !x(r) && ((u = r[c]) && (r[c] = null), E.event.triggered = v, e.isPropagationStopped() && d.addEventListener(v, Ot), r[v](), e.isPropagationStopped() && d.removeEventListener(v, Ot), E.event.triggered = void 0, u && (r[c] = u)), e.result
                            }
                        },
                        simulate: function(e, t, n) {
                            var r = E.extend(new E.Event, n, {
                                type: e,
                                isSimulated: !0
                            });
                            E.event.trigger(r, null, t)
                        }
                    }), E.fn.extend({
                        trigger: function(e, t) {
                            return this.each((function() {
                                E.event.trigger(e, t, this)
                            }))
                        },
                        triggerHandler: function(e, t) {
                            var n = this[0];
                            if (n) return E.event.trigger(e, t, n, !0)
                        }
                    });
                    var Pt = /\[\]$/,
                        Mt = /\r?\n/g,
                        Rt = /^(?:submit|button|image|reset|file)$/i,
                        It = /^(?:input|select|textarea|keygen)/i;

                    function Wt(e, t, n, r) {
                        var o;
                        if (Array.isArray(t)) E.each(t, (function(t, o) {
                            n || Pt.test(e) ? r(e, o) : Wt(e + "[" + ("object" === i(o) && null != o ? t : "") + "]", o, n, r)
                        }));
                        else if (n || "object" !== C(t)) r(e, t);
                        else
                            for (o in t) Wt(e + "[" + o + "]", t[o], n, r)
                    }
                    E.param = function(e, t) {
                        var n, r = [],
                            i = function(e, t) {
                                var n = m(t) ? t() : t;
                                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                            };
                        if (null == e) return "";
                        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, (function() {
                            i(this.name, this.value)
                        }));
                        else
                            for (n in e) Wt(n, e[n], t, i);
                        return r.join("&")
                    }, E.fn.extend({
                        serialize: function() {
                            return E.param(this.serializeArray())
                        },
                        serializeArray: function() {
                            return this.map((function() {
                                var e = E.prop(this, "elements");
                                return e ? E.makeArray(e) : this
                            })).filter((function() {
                                var e = this.type;
                                return this.name && !E(this).is(":disabled") && It.test(this.nodeName) && !Rt.test(e) && (this.checked || !Ee.test(e))
                            })).map((function(e, t) {
                                var n = E(this).val();
                                return null == n ? null : Array.isArray(n) ? E.map(n, (function(e) {
                                    return {
                                        name: t.name,
                                        value: e.replace(Mt, "\r\n")
                                    }
                                })) : {
                                    name: t.name,
                                    value: n.replace(Mt, "\r\n")
                                }
                            })).get()
                        }
                    });
                    var Ft = /%20/g,
                        $t = /#.*$/,
                        Bt = /([?&])_=[^&]*/,
                        _t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                        zt = /^(?:GET|HEAD)$/,
                        Xt = /^\/\//,
                        Ut = {},
                        Vt = {},
                        Gt = "*/".concat("*"),
                        Yt = b.createElement("a");

                    function Qt(e) {
                        return function(t, n) {
                            "string" != typeof t && (n = t, t = "*");
                            var r, i = 0,
                                o = t.toLowerCase().match(G) || [];
                            if (m(n))
                                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                        }
                    }

                    function Jt(e, t, n, r) {
                        var i = {},
                            o = e === Vt;

                        function a(s) {
                            var u;
                            return i[s] = !0, E.each(e[s] || [], (function(e, s) {
                                var l = s(t, n, r);
                                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
                            })), u
                        }
                        return a(t.dataTypes[0]) || !i["*"] && a("*")
                    }

                    function Kt(e, t) {
                        var n, r, i = E.ajaxSettings.flatOptions || {};
                        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                        return r && E.extend(!0, e, r), e
                    }
                    Yt.href = Nt.href, E.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: Nt.href,
                            type: "GET",
                            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Nt.protocol),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: {
                                "*": Gt,
                                text: "text/plain",
                                html: "text/html",
                                xml: "application/xml, text/xml",
                                json: "application/json, text/javascript"
                            },
                            contents: {
                                xml: /\bxml\b/,
                                html: /\bhtml/,
                                json: /\bjson\b/
                            },
                            responseFields: {
                                xml: "responseXML",
                                text: "responseText",
                                json: "responseJSON"
                            },
                            converters: {
                                "* text": String,
                                "text html": !0,
                                "text json": JSON.parse,
                                "text xml": E.parseXML
                            },
                            flatOptions: {
                                url: !0,
                                context: !0
                            }
                        },
                        ajaxSetup: function(e, t) {
                            return t ? Kt(Kt(e, E.ajaxSettings), t) : Kt(E.ajaxSettings, e)
                        },
                        ajaxPrefilter: Qt(Ut),
                        ajaxTransport: Qt(Vt),
                        ajax: function(e, t) {
                            "object" === i(e) && (t = e, e = void 0), t = t || {};
                            var r, o, a, s, u, l, c, f, p, d, h = E.ajaxSetup({}, t),
                                g = h.context || h,
                                v = h.context && (g.nodeType || g.jquery) ? E(g) : E.event,
                                y = E.Deferred(),
                                m = E.Callbacks("once memory"),
                                x = h.statusCode || {},
                                w = {},
                                T = {},
                                C = "canceled",
                                S = {
                                    readyState: 0,
                                    getResponseHeader: function(e) {
                                        var t;
                                        if (c) {
                                            if (!s)
                                                for (s = {}; t = _t.exec(a);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                            t = s[e.toLowerCase() + " "]
                                        }
                                        return null == t ? null : t.join(", ")
                                    },
                                    getAllResponseHeaders: function() {
                                        return c ? a : null
                                    },
                                    setRequestHeader: function(e, t) {
                                        return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, w[e] = t), this
                                    },
                                    overrideMimeType: function(e) {
                                        return null == c && (h.mimeType = e), this
                                    },
                                    statusCode: function(e) {
                                        var t;
                                        if (e)
                                            if (c) S.always(e[S.status]);
                                            else
                                                for (t in e) x[t] = [x[t], e[t]];
                                        return this
                                    },
                                    abort: function(e) {
                                        var t = e || C;
                                        return r && r.abort(t), k(0, t), this
                                    }
                                };
                            if (y.promise(S), h.url = ((e || h.url || Nt.href) + "").replace(Xt, Nt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(G) || [""], null == h.crossDomain) {
                                l = b.createElement("a");
                                try {
                                    l.href = h.url, l.href = l.href, h.crossDomain = Yt.protocol + "//" + Yt.host != l.protocol + "//" + l.host
                                } catch (e) {
                                    h.crossDomain = !0
                                }
                            }
                            if (h.data && h.processData && "string" != typeof h.data && (h.data = E.param(h.data, h.traditional)), Jt(Ut, h, t, S), c) return S;
                            for (p in (f = E.event && h.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !zt.test(h.type), o = h.url.replace($t, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ft, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Lt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Bt, "$1"), d = (Lt.test(o) ? "&" : "?") + "_=" + qt.guid++ + d), h.url = o + d), h.ifModified && (E.lastModified[o] && S.setRequestHeader("If-Modified-Since", E.lastModified[o]), E.etag[o] && S.setRequestHeader("If-None-Match", E.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : h.accepts["*"]), h.headers) S.setRequestHeader(p, h.headers[p]);
                            if (h.beforeSend && (!1 === h.beforeSend.call(g, S, h) || c)) return S.abort();
                            if (C = "abort", m.add(h.complete), S.done(h.success), S.fail(h.error), r = Jt(Vt, h, t, S)) {
                                if (S.readyState = 1, f && v.trigger("ajaxSend", [S, h]), c) return S;
                                h.async && h.timeout > 0 && (u = n.setTimeout((function() {
                                    S.abort("timeout")
                                }), h.timeout));
                                try {
                                    c = !1, r.send(w, k)
                                } catch (e) {
                                    if (c) throw e;
                                    k(-1, e)
                                }
                            } else k(-1, "No Transport");

                            function k(e, t, i, s) {
                                var l, p, d, b, w, T = t;
                                c || (c = !0, u && n.clearTimeout(u), r = void 0, a = s || "", S.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, i && (b = function(e, t, n) {
                                    for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                    if (r)
                                        for (i in s)
                                            if (s[i] && s[i].test(r)) {
                                                u.unshift(i);
                                                break
                                            }
                                    if (u[0] in n) o = u[0];
                                    else {
                                        for (i in n) {
                                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                                o = i;
                                                break
                                            }
                                            a || (a = i)
                                        }
                                        o = o || a
                                    }
                                    if (o) return o !== u[0] && u.unshift(o), n[o]
                                }(h, S, i)), !l && E.inArray("script", h.dataTypes) > -1 && E.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), b = function(e, t, n, r) {
                                    var i, o, a, s, u, l = {},
                                        c = e.dataTypes.slice();
                                    if (c[1])
                                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                                    for (o = c.shift(); o;)
                                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                                            if ("*" === o) o = u;
                                            else if ("*" !== u && u !== o) {
                                        if (!(a = l[u + " " + o] || l["* " + o]))
                                            for (i in l)
                                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                                    break
                                                }
                                        if (!0 !== a)
                                            if (a && e.throws) t = a(t);
                                            else try {
                                                t = a(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: a ? e : "No conversion from " + u + " to " + o
                                                }
                                            }
                                    }
                                    return {
                                        state: "success",
                                        data: t
                                    }
                                }(h, b, S, l), l ? (h.ifModified && ((w = S.getResponseHeader("Last-Modified")) && (E.lastModified[o] = w), (w = S.getResponseHeader("etag")) && (E.etag[o] = w)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, p = b.data, l = !(d = b.error))) : (d = T, !e && T || (T = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || T) + "", l ? y.resolveWith(g, [p, T, S]) : y.rejectWith(g, [S, T, d]), S.statusCode(x), x = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [S, h, l ? p : d]), m.fireWith(g, [S, T]), f && (v.trigger("ajaxComplete", [S, h]), --E.active || E.event.trigger("ajaxStop")))
                            }
                            return S
                        },
                        getJSON: function(e, t, n) {
                            return E.get(e, t, n, "json")
                        },
                        getScript: function(e, t) {
                            return E.get(e, void 0, t, "script")
                        }
                    }), E.each(["get", "post"], (function(e, t) {
                        E[t] = function(e, n, r, i) {
                            return m(n) && (i = i || r, r = n, n = void 0), E.ajax(E.extend({
                                url: e,
                                type: t,
                                dataType: i,
                                data: n,
                                success: r
                            }, E.isPlainObject(e) && e))
                        }
                    })), E.ajaxPrefilter((function(e) {
                        var t;
                        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                    })), E._evalUrl = function(e, t, n) {
                        return E.ajax({
                            url: e,
                            type: "GET",
                            dataType: "script",
                            cache: !0,
                            async: !1,
                            global: !1,
                            converters: {
                                "text script": function() {}
                            },
                            dataFilter: function(e) {
                                E.globalEval(e, t, n)
                            }
                        })
                    }, E.fn.extend({
                        wrapAll: function(e) {
                            var t;
                            return this[0] && (m(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                                return e
                            })).append(this)), this
                        },
                        wrapInner: function(e) {
                            return m(e) ? this.each((function(t) {
                                E(this).wrapInner(e.call(this, t))
                            })) : this.each((function() {
                                var t = E(this),
                                    n = t.contents();
                                n.length ? n.wrapAll(e) : t.append(e)
                            }))
                        },
                        wrap: function(e) {
                            var t = m(e);
                            return this.each((function(n) {
                                E(this).wrapAll(t ? e.call(this, n) : e)
                            }))
                        },
                        unwrap: function(e) {
                            return this.parent(e).not("body").each((function() {
                                E(this).replaceWith(this.childNodes)
                            })), this
                        }
                    }), E.expr.pseudos.hidden = function(e) {
                        return !E.expr.pseudos.visible(e)
                    }, E.expr.pseudos.visible = function(e) {
                        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                    }, E.ajaxSettings.xhr = function() {
                        try {
                            return new n.XMLHttpRequest
                        } catch (e) {}
                    };
                    var Zt = {
                            0: 200,
                            1223: 204
                        },
                        en = E.ajaxSettings.xhr();
                    y.cors = !!en && "withCredentials" in en, y.ajax = en = !!en, E.ajaxTransport((function(e) {
                        var t, r;
                        if (y.cors || en && !e.crossDomain) return {
                            send: function(i, o) {
                                var a, s = e.xhr();
                                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                    for (a in e.xhrFields) s[a] = e.xhrFields[a];
                                for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                                t = function(e) {
                                    return function() {
                                        t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Zt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                            binary: s.response
                                        } : {
                                            text: s.responseText
                                        }, s.getAllResponseHeaders()))
                                    }
                                }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                                    4 === s.readyState && n.setTimeout((function() {
                                        t && r()
                                    }))
                                }, t = t("abort");
                                try {
                                    s.send(e.hasContent && e.data || null)
                                } catch (e) {
                                    if (t) throw e
                                }
                            },
                            abort: function() {
                                t && t()
                            }
                        }
                    })), E.ajaxPrefilter((function(e) {
                        e.crossDomain && (e.contents.script = !1)
                    })), E.ajaxSetup({
                        accepts: {
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        },
                        contents: {
                            script: /\b(?:java|ecma)script\b/
                        },
                        converters: {
                            "text script": function(e) {
                                return E.globalEval(e), e
                            }
                        }
                    }), E.ajaxPrefilter("script", (function(e) {
                        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
                    })), E.ajaxTransport("script", (function(e) {
                        var t, n;
                        if (e.crossDomain || e.scriptAttrs) return {
                            send: function(r, i) {
                                t = E("<script>").attr(e.scriptAttrs || {}).prop({
                                    charset: e.scriptCharset,
                                    src: e.url
                                }).on("load error", n = function(e) {
                                    t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                                }), b.head.appendChild(t[0])
                            },
                            abort: function() {
                                n && n()
                            }
                        }
                    }));
                    var tn, nn = [],
                        rn = /(=)\?(?=&|$)|\?\?/;
                    E.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function() {
                            var e = nn.pop() || E.expando + "_" + qt.guid++;
                            return this[e] = !0, e
                        }
                    }), E.ajaxPrefilter("json jsonp", (function(e, t, r) {
                        var i, o, a, s = !1 !== e.jsonp && (rn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && rn.test(e.data) && "data");
                        if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(rn, "$1" + i) : !1 !== e.jsonp && (e.url += (Lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                            return a || E.error(i + " was not called"), a[0]
                        }, e.dataTypes[0] = "json", o = n[i], n[i] = function() {
                            a = arguments
                        }, r.always((function() {
                            void 0 === o ? E(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, nn.push(i)), a && m(o) && o(a[0]), a = o = void 0
                        })), "script"
                    })), y.createHTMLDocument = ((tn = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === tn.childNodes.length), E.parseHTML = function(e, t, n) {
                        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(r)) : t = b), o = !n && [], (i = $.exec(e)) ? [t.createElement(i[1])] : (i = He([e], t, o), o && o.length && E(o).remove(), E.merge([], i.childNodes)));
                        var r, i, o
                    }, E.fn.load = function(e, t, n) {
                        var r, o, a, s = this,
                            u = e.indexOf(" ");
                        return u > -1 && (r = Et(e.slice(u)), e = e.slice(0, u)), m(t) ? (n = t, t = void 0) : t && "object" === i(t) && (o = "POST"), s.length > 0 && E.ajax({
                            url: e,
                            type: o || "GET",
                            dataType: "html",
                            data: t
                        }).done((function(e) {
                            a = arguments, s.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
                        })).always(n && function(e, t) {
                            s.each((function() {
                                n.apply(this, a || [e.responseText, t, e])
                            }))
                        }), this
                    }, E.expr.pseudos.animated = function(e) {
                        return E.grep(E.timers, (function(t) {
                            return e === t.elem
                        })).length
                    }, E.offset = {
                        setOffset: function(e, t, n) {
                            var r, i, o, a, s, u, l = E.css(e, "position"),
                                c = E(e),
                                f = {};
                            "static" === l && (e.style.position = "relative"), s = c.offset(), o = E.css(e, "top"), u = E.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, E.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
                        }
                    }, E.fn.extend({
                        offset: function(e) {
                            if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                                E.offset.setOffset(this, e, t)
                            }));
                            var t, n, r = this[0];
                            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                                top: t.top + n.pageYOffset,
                                left: t.left + n.pageXOffset
                            }) : {
                                top: 0,
                                left: 0
                            } : void 0
                        },
                        position: function() {
                            if (this[0]) {
                                var e, t, n, r = this[0],
                                    i = {
                                        top: 0,
                                        left: 0
                                    };
                                if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();
                                else {
                                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) e = e.parentNode;
                                    e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0))
                                }
                                return {
                                    top: t.top - i.top - E.css(r, "marginTop", !0),
                                    left: t.left - i.left - E.css(r, "marginLeft", !0)
                                }
                            }
                        },
                        offsetParent: function() {
                            return this.map((function() {
                                for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
                                return e || ve
                            }))
                        }
                    }), E.each({
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset"
                    }, (function(e, t) {
                        var n = "pageYOffset" === t;
                        E.fn[e] = function(r) {
                            return te(this, (function(e, r, i) {
                                var o;
                                if (x(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                            }), e, r, arguments.length)
                        }
                    })), E.each(["top", "left"], (function(e, t) {
                        E.cssHooks[t] = tt(y.pixelPosition, (function(e, n) {
                            if (n) return n = et(e, t), Ye.test(n) ? E(e).position()[t] + "px" : n
                        }))
                    })), E.each({
                        Height: "height",
                        Width: "width"
                    }, (function(e, t) {
                        E.each({
                            padding: "inner" + e,
                            content: t,
                            "": "outer" + e
                        }, (function(n, r) {
                            E.fn[r] = function(i, o) {
                                var a = arguments.length && (n || "boolean" != typeof i),
                                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                                return te(this, (function(t, n, i) {
                                    var o;
                                    return x(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? E.css(t, n, s) : E.style(t, n, i, s)
                                }), t, a ? i : void 0, a)
                            }
                        }))
                    })), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                        E.fn[t] = function(e) {
                            return this.on(t, e)
                        }
                    })), E.fn.extend({
                        bind: function(e, t, n) {
                            return this.on(e, null, t, n)
                        },
                        unbind: function(e, t) {
                            return this.off(e, null, t)
                        },
                        delegate: function(e, t, n, r) {
                            return this.on(t, e, n, r)
                        },
                        undelegate: function(e, t, n) {
                            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                        },
                        hover: function(e, t) {
                            return this.on("mouseenter", e).on("mouseleave", t || e)
                        }
                    }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                        E.fn[t] = function(e, n) {
                            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                        }
                    }));
                    var on = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                    E.proxy = function(e, t) {
                        var n, r, i;
                        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = u.call(arguments, 2), i = function() {
                            return e.apply(t || this, r.concat(u.call(arguments)))
                        }, i.guid = e.guid = e.guid || E.guid++, i
                    }, E.holdReady = function(e) {
                        e ? E.readyWait++ : E.ready(!0)
                    }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = A, E.isFunction = m, E.isWindow = x, E.camelCase = oe, E.type = C, E.now = Date.now, E.isNumeric = function(e) {
                        var t = E.type(e);
                        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                    }, E.trim = function(e) {
                        return null == e ? "" : (e + "").replace(on, "$1")
                    }, void 0 === (r = function() {
                        return E
                    }.apply(t, [])) || (e.exports = r);
                    var an = n.jQuery,
                        sn = n.$;
                    return E.noConflict = function(e) {
                        return n.$ === E && (n.$ = sn), e && n.jQuery === E && (n.jQuery = an), E
                    }, void 0 === o && (n.jQuery = n.$ = E), E
                }))
        }
    }
]);