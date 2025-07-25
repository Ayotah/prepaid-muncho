/* clarity-js v0.8.0: https://github.com/microsoft/clarity (License: MIT) */ ! function() {
    "use strict";
    var t = Object.freeze({
            __proto__: null,
            get queue() {
                return Sr
            },
            get start() {
                return kr
            },
            get stop() {
                return Tr
            },
            get track() {
                return gr
            }
        }),
        e = Object.freeze({
            __proto__: null,
            get clone() {
                return Ur
            },
            get compute() {
                return Fr
            },
            get data() {
                return jr
            },
            get keys() {
                return Ar
            },
            get reset() {
                return Vr
            },
            get start() {
                return Hr
            },
            get stop() {
                return Jr
            },
            get trigger() {
                return qr
            },
            get update() {
                return Br
            }
        }),
        n = Object.freeze({
            __proto__: null,
            get check() {
                return ti
            },
            get compute() {
                return ni
            },
            get data() {
                return Yr
            },
            get start() {
                return $r
            },
            get stop() {
                return ai
            },
            get trigger() {
                return ei
            }
        }),
        a = Object.freeze({
            __proto__: null,
            get compute() {
                return li
            },
            get data() {
                return ri
            },
            get log() {
                return si
            },
            get reset() {
                return di
            },
            get start() {
                return ui
            },
            get stop() {
                return ci
            },
            get updates() {
                return ii
            }
        }),
        r = Object.freeze({
            __proto__: null,
            get callback() {
                return Ti
            },
            get callbacks() {
                return hi
            },
            get clear() {
                return Si
            },
            get consent() {
                return ki
            },
            get data() {
                return pi
            },
            get electron() {
                return vi
            },
            get id() {
                return wi
            },
            get metadata() {
                return bi
            },
            get save() {
                return Ei
            },
            get shortid() {
                return Ni
            },
            get start() {
                return mi
            },
            get stop() {
                return yi
            }
        }),
        i = Object.freeze({
            __proto__: null,
            get data() {
                return Xi
            },
            get envelope() {
                return Ai
            },
            get start() {
                return Yi
            },
            get stop() {
                return ji
            }
        }),
        o = {
            projectId: null,
            delay: 1e3,
            lean: !1,
            track: !0,
            content: !0,
            drop: [],
            mask: [],
            unmask: [],
            regions: [],
            cookies: [],
            fraud: !0,
            checksum: [],
            report: null,
            upload: null,
            fallback: null,
            upgrade: null,
            action: null,
            dob: null,
            delayDom: !1,
            throttleDom: !0,
            conversions: !1,
            includeSubdomains: !0,
            throttleMutations: !1,
            dropMutations: !1,
            criticalMs: 200,
            discard: []
        };

    function u(t) {
        return window.Zone && "__symbol__" in window.Zone ? window.Zone.__symbol__(t) : t
    }
    var c = 0;

    function s(t) {
        void 0 === t && (t = null);
        var e = t && t.timeStamp > 0 ? t.timeStamp : performance.now(),
            n = t && t.view ? t.view.performance.timeOrigin : performance.timeOrigin;
        return Math.max(Math.round(e + n - c), 0)
    }
    var l = "0.8.0";

    function d(t, e) {
        void 0 === e && (e = null);
        for (var n, a = 5381, r = a, i = 0; i < t.length; i += 2) {
            if (a = (a << 5) + a ^ t.charCodeAt(i), i + 1 < t.length) r = (r << 5) + r ^ t.charCodeAt(i + 1)
        }
        return n = Math.abs(a + 11579 * r), (e ? n % Math.pow(2, e) : n).toString(36)
    }
    var f = /\S/gi,
        p = 255,
        h = !0,
        v = null,
        g = null,
        m = null;

    function y(t, e, n, a, r) {
        if (void 0 === a && (a = !1), t) {
            if ("input" == e && ("checkbox" === r || "radio" === r)) return t;
            switch (n) {
                case 0:
                    return t;
                case 1:
                    switch (e) {
                        case "*T":
                        case "value":
                        case "placeholder":
                        case "click":
                            return function(t) {
                                var e = -1,
                                    n = 0,
                                    a = !1,
                                    r = !1,
                                    i = !1,
                                    o = null;
                                E();
                                for (var u = 0; u < t.length; u++) {
                                    var c = t.charCodeAt(u);
                                    if (a = a || c >= 48 && c <= 57, r = r || 64 === c, i = 9 === c || 10 === c || 13 === c || 32 === c, 0 === u || u === t.length - 1 || i) {
                                        if (a || r) {
                                            null === o && (o = t.split(""));
                                            var s = t.substring(e + 1, i ? u : u + 1);
                                            s = h && null !== m ? s.match(m) ? s : S(s, "▪", "▫") : k(s), o.splice(e + 1 - n, s.length, s), n += s.length - 1
                                        }
                                        i && (a = !1, r = !1, e = u)
                                    }
                                }
                                return o ? o.join("") : t
                            }(t);
                        case "input":
                        case "change":
                            return T(t)
                    }
                    return t;
                case 2:
                case 3:
                    switch (e) {
                        case "*T":
                        case "data-":
                            return a ? w(t) : k(t);
                        case "src":
                        case "srcset":
                        case "title":
                        case "alt":
                            return 3 === n ? "" : t;
                        case "value":
                        case "click":
                        case "input":
                        case "change":
                            return T(t);
                        case "placeholder":
                            return k(t)
                    }
                    break;
                case 4:
                    switch (e) {
                        case "*T":
                        case "data-":
                            return a ? w(t) : k(t);
                        case "value":
                        case "input":
                        case "click":
                        case "change":
                            return Array(5).join("•");
                        case "checksum":
                            return ""
                    }
                    break;
                case 5:
                    switch (e) {
                        case "*T":
                        case "data-":
                            return S(t, "▪", "▫");
                        case "value":
                        case "input":
                        case "click":
                        case "change":
                            return Array(5).join("•");
                        case "checksum":
                        case "src":
                        case "srcset":
                        case "alt":
                        case "title":
                            return ""
                    }
            }
        }
        return t
    }

    function b(t, e, n) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        var a = t;
        if (e) a = "".concat("https://").concat("Electron");
        else {
            var r = o.drop;
            if (r && r.length > 0 && t && t.indexOf("?") > 0) {
                var i = t.split("?"),
                    u = i[0],
                    c = i[1];
                a = u + "?" + c.split("&").map((function(t) {
                    return r.some((function(e) {
                        return 0 === t.indexOf("".concat(e, "="))
                    })) ? "".concat(t.split("=")[0], "=").concat("*na*") : t
                })).join("&")
            }
        }
        return n && (a = a.substring(0, p)), a
    }

    function w(t) {
        var e = t.trim();
        if (e.length > 0) {
            var n = e[0],
                a = t.indexOf(n),
                r = t.substr(0, a),
                i = t.substr(a + e.length);
            return "".concat(r).concat(e.length.toString(36)).concat(i)
        }
        return t
    }

    function k(t) {
        return t.replace(f, "•")
    }

    function S(t, e, n) {
        return E(), t ? t.replace(g, e).replace(v, n) : t
    }

    function T(t) {
        for (var e = 5 * (Math.floor(t.length / 5) + 1), n = "", a = 0; a < e; a++) n += a > 0 && a % 5 == 0 ? " " : "•";
        return n
    }

    function E() {
        if (h && null === v) try {
            v = new RegExp("\\p{N}", "gu"), g = new RegExp("\\p{L}", "gu"), m = new RegExp("\\p{Sc}", "gu")
        } catch (t) {
            h = !1
        }
    }
    var O = null,
        M = null,
        N = !1;

    function x() {
        N && (O = {
            time: s(),
            event: 4,
            data: {
                visible: M.visible,
                docWidth: M.docWidth,
                docHeight: M.docHeight,
                screenWidth: M.screenWidth,
                screenHeight: M.screenHeight,
                scrollX: M.scrollX,
                scrollY: M.scrollY,
                pointerX: M.pointerX,
                pointerY: M.pointerY,
                activityTime: M.activityTime,
                scrollTime: M.scrollTime,
                pointerTime: M.pointerTime,
                moveX: M.moveX,
                moveY: M.moveY,
                moveTime: M.moveTime,
                downX: M.downX,
                downY: M.downY,
                downTime: M.downTime,
                upX: M.upX,
                upY: M.upY,
                upTime: M.upTime,
                pointerPrevX: M.pointerPrevX,
                pointerPrevY: M.pointerPrevY,
                pointerPrevTime: M.pointerPrevTime
            }
        }), M = M || {
            visible: 1,
            docWidth: 0,
            docHeight: 0,
            screenWidth: 0,
            screenHeight: 0,
            scrollX: 0,
            scrollY: 0,
            pointerX: 0,
            pointerY: 0,
            activityTime: 0,
            scrollTime: 0,
            pointerTime: 0,
            moveX: 0,
            moveY: 0,
            moveTime: 0,
            downX: 0,
            downY: 0,
            downTime: 0,
            upX: 0,
            upY: 0,
            upTime: 0,
            pointerPrevX: 0,
            pointerPrevY: 0,
            pointerPrevTime: 0
        }
    }

    function _(t, e, n, a) {
        switch (t) {
            case 8:
                M.docWidth = e, M.docHeight = n;
                break;
            case 11:
                M.screenWidth = e, M.screenHeight = n;
                break;
            case 10:
                M.scrollX = e, M.scrollY = n, M.scrollTime = a;
                break;
            case 12:
                M.moveX = e, M.moveY = n, M.moveTime = a, M.pointerPrevX = M.pointerX, M.pointerPrevY = M.pointerY, M.pointerPrevTime = M.pointerTime, M.pointerX = e, M.pointerY = n, M.pointerTime = a;
                break;
            case 13:
                M.downX = e, M.downY = n, M.downTime = a, M.pointerPrevX = M.pointerX, M.pointerPrevY = M.pointerY, M.pointerPrevTime = M.pointerTime, M.pointerX = e, M.pointerY = n, M.pointerTime = a;
                break;
            case 14:
                M.upX = e, M.upY = n, M.upTime = a, M.pointerPrevX = M.pointerX, M.pointerPrevY = M.pointerY, M.pointerPrevTime = M.pointerTime, M.pointerX = e, M.pointerY = n, M.pointerTime = a;
                break;
            default:
                M.pointerPrevX = M.pointerX, M.pointerPrevY = M.pointerY, M.pointerPrevTime = M.pointerTime, M.pointerX = e, M.pointerY = n, M.pointerTime = a
        }
        N = !0
    }

    function I(t) {
        M.activityTime = t
    }

    function C(t, e) {
        M.visible = "visible" === e ? 1 : 0, M.visible || I(t), N = !0
    }

    function D() {
        N && Qr(4)
    }
    var P = Object.freeze({
            __proto__: null,
            activity: I,
            compute: D,
            reset: x,
            start: function() {
                N = !1, x()
            },
            get state() {
                return O
            },
            stop: function() {
                x()
            },
            track: _,
            visibility: C
        }),
        X = null;

    function Y(t, e) {
        eo() && t && "string" == typeof t && t.length < 255 && (X = e && "string" == typeof e && e.length < 255 ? {
            key: t,
            value: e
        } : {
            value: t
        }, Qr(24))
    }
    var j, A = null,
        R = null;

    function L(t) {
        t in A || (A[t] = 0), t in R || (R[t] = 0), A[t]++, R[t]++
    }

    function z(t, e) {
        null !== e && (t in A || (A[t] = 0), t in R || (R[t] = 0), A[t] += e, R[t] += e)
    }

    function W(t, e) {
        null !== e && !1 === isNaN(e) && (t in A || (A[t] = 0), (e > A[t] || 0 === A[t]) && (R[t] = e, A[t] = e))
    }

    function H(t, e, n) {
        return window.setTimeout(zi(t), e, n)
    }

    function q(t) {
        return window.clearTimeout(t)
    }
    var U = 0,
        F = 0,
        V = null;

    function B() {
        V && q(V), V = H(J, F), U = s()
    }

    function J() {
        var t = s();
        j = {
            gap: t - U
        }, Qr(25), j.gap < 3e5 ? V = H(J, F) : Qi && (Y("clarity", "suspend"), xo(), ["mousemove", "touchstart"].forEach((function(t) {
            return Hi(document, t, no)
        })), ["resize", "scroll", "pageshow"].forEach((function(t) {
            return Hi(window, t, no)
        })))
    }
    var G = Object.freeze({
            __proto__: null,
            get data() {
                return j
            },
            reset: B,
            start: function() {
                F = 6e4, U = 0
            },
            stop: function() {
                q(V), U = 0, F = 0
            }
        }),
        K = null;

    function Z(t, e) {
        if (t in K) {
            var n = K[t],
                a = n[n.length - 1];
            e - a[0] > 100 ? K[t].push([e, 0]) : a[1] = e - a[0]
        } else K[t] = [
            [e, 0]
        ]
    }

    function Q() {
        Qr(36)
    }

    function $() {
        K = {}
    }
    var tt = Object.freeze({
            __proto__: null,
            compute: Q,
            get data() {
                return K
            },
            reset: $,
            start: function() {
                K = {}
            },
            stop: function() {
                K = {}
            },
            track: Z
        }),
        et = null;

    function nt(t) {
        eo() && o.lean && (o.lean = !1, et = {
            key: t
        }, Ti(), Ei(), o.upgrade && o.upgrade(t), Qr(3))
    }
    var at = Object.freeze({
        __proto__: null,
        get data() {
            return et
        },
        start: function() {
            !o.lean && o.upgrade && o.upgrade("Config"), et = null
        },
        stop: function() {
            et = null
        },
        upgrade: nt
    });

    function rt(t, e, n, a) {
        return new(n || (n = Promise))((function(r, i) {
            function o(t) {
                try {
                    c(a.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    c(a.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(o, u)
            }
            c((a = a.apply(t, e || [])).next())
        }))
    }

    function it(t, e) {
        var n, a, r, i, o = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(u) {
            return function(c) {
                return function(u) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; i && (i = 0, u[0] && (o = 0)), o;) try {
                        if (n = 1, a && (r = 2 & u[0] ? a.return : u[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, u[1])).done) return r;
                        switch (a = 0, r && (u = [2 & u[0], r.value]), u[0]) {
                            case 0:
                            case 1:
                                r = u;
                                break;
                            case 4:
                                return o.label++, {
                                    value: u[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, a = u[1], u = [0];
                                continue;
                            case 7:
                                u = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === u[0] && (!r || u[1] > r[0] && u[1] < r[3])) {
                                    o.label = u[1];
                                    break
                                }
                                if (6 === u[0] && o.label < r[1]) {
                                    o.label = r[1], r = u;
                                    break
                                }
                                if (r && o.label < r[2]) {
                                    o.label = r[2], o.ops.push(u);
                                    break
                                }
                                r[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        u = e.call(t, o)
                    } catch (t) {
                        u = [6, t], a = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & u[0]) throw u[1];
                    return {
                        value: u[0] ? u[1] : void 0,
                        done: !0
                    }
                }([u, c])
            }
        }
    }
    var ot = null;

    function ut(t, e) {
        st(t, "string" == typeof e ? [e] : e)
    }

    function ct(t, e, n, a) {
        return void 0 === e && (e = null), void 0 === n && (n = null), void 0 === a && (a = null), rt(this, void 0, void 0, (function() {
            var r, i;
            return it(this, (function(o) {
                switch (o.label) {
                    case 0:
                        return i = {}, [4, ft(t)];
                    case 1:
                        return i.userId = o.sent(), i.userHint = a || ((u = t) && u.length >= 5 ? "".concat(u.substring(0, 2)).concat(S(u.substring(2), "*", "*")) : S(u, "*", "*")), st("userId", [(r = i).userId]), st("userHint", [r.userHint]), st("userType", [pt(t)]), e && (st("sessionId", [e]), r.sessionId = e), n && (st("pageId", [n]), r.pageId = n), [2, r]
                }
                var u
            }))
        }))
    }

    function st(t, e) {
        if (eo() && t && e && "string" == typeof t && t.length < 255) {
            for (var n = (t in ot ? ot[t] : []), a = 0; a < e.length; a++) "string" == typeof e[a] && e[a].length < 255 && n.push(e[a]);
            ot[t] = n
        }
    }

    function lt() {
        Qr(34)
    }

    function dt() {
        ot = {}
    }

    function ft(t) {
        return rt(this, void 0, void 0, (function() {
            var e;
            return it(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 4, , 5]), crypto && t ? [4, crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t))] : [3, 2];
                    case 1:
                        return e = n.sent(), [2, Array.prototype.map.call(new Uint8Array(e), (function(t) {
                            return ("00" + t.toString(16)).slice(-2)
                        })).join("")];
                    case 2:
                        return [2, ""];
                    case 3:
                        return [3, 5];
                    case 4:
                        return n.sent(), [2, ""];
                    case 5:
                        return [2]
                }
            }))
        }))
    }

    function pt(t) {
        return t && t.indexOf("@") > 0 ? "email" : "string"
    }
    var ht = "CompressionStream" in window;

    function vt(t) {
        return rt(this, void 0, void 0, (function() {
            var e, n;
            return it(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return a.trys.push([0, 3, , 4]), ht ? (e = new ReadableStream({
                            start: function(e) {
                                return rt(this, void 0, void 0, (function() {
                                    return it(this, (function(n) {
                                        return e.enqueue(t), e.close(), [2]
                                    }))
                                }))
                            }
                        }).pipeThrough(new TextEncoderStream).pipeThrough(new window.CompressionStream("gzip")), n = Uint8Array.bind, [4, gt(e)]) : [3, 2];
                    case 1:
                        return [2, new(n.apply(Uint8Array, [void 0, a.sent()]))];
                    case 2:
                        return [3, 4];
                    case 3:
                        return a.sent(), [3, 4];
                    case 4:
                        return [2, null]
                }
            }))
        }))
    }

    function gt(t) {
        return rt(this, void 0, void 0, (function() {
            var e, n, a, r, i;
            return it(this, (function(o) {
                switch (o.label) {
                    case 0:
                        e = t.getReader(), n = [], a = !1, r = [], o.label = 1;
                    case 1:
                        return a ? [3, 3] : [4, e.read()];
                    case 2:
                        return i = o.sent(), a = i.done, r = i.value, a ? [2, n] : (n.push.apply(n, r), [3, 1]);
                    case 3:
                        return [2, n]
                }
            }))
        }))
    }
    var mt = null;

    function yt(t) {
        try {
            if (!mt) return;
            var e = function(t) {
                try {
                    return JSON.parse(t)
                } catch (t) {
                    return []
                }
            }(t);
            e.forEach((function(t) {
                mt(t)
            }))
        } catch (t) {}
    }
    var bt = [P, a, Object.freeze({
        __proto__: null,
        compute: lt,
        get data() {
            return ot
        },
        identify: ct,
        reset: dt,
        set: ut,
        start: function() {
            dt()
        },
        stop: function() {
            dt()
        }
    }), n, tt, r, i, t, G, at, e];

    function wt() {
        A = {}, R = {}, L(5), bt.forEach((function(t) {
            return zi(t.start)()
        }))
    }

    function kt() {
        bt.slice().reverse().forEach((function(t) {
            return zi(t.stop)()
        })), A = {}, R = {}
    }

    function St() {
        lt(), D(), li(), Qr(0), Q(), ni(), Fr()
    }
    var Tt, Et = [];

    function Ot(t, e, n) {
        o.fraud && null !== t && n && n.length >= 5 && (Tt = {
            id: t,
            target: e,
            checksum: d(n, 28)
        }, Et.indexOf(Tt.checksum) < 0 && (Et.push(Tt.checksum), Cr(41)))
    }
    var Mt = "load,active,fixed,visible,focus,show,collaps,animat".split(","),
        Nt = {};

    function xt(t, e) {
        var n = t.attributes,
            a = t.prefix ? t.prefix[e] : null,
            r = 0 === e ? "".concat("~").concat(t.position - 1) : ":nth-of-type(".concat(t.position, ")");
        switch (t.tag) {
            case "STYLE":
            case "TITLE":
            case "LINK":
            case "META":
            case "*T":
            case "*D":
                return "";
            case "HTML":
                return "HTML";
            default:
                if (null === a) return "";
                a = "".concat(a).concat(">"), t.tag = 0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag;
                var i = "".concat(a).concat(t.tag).concat(r),
                    o = "id" in n && n.id.length > 0 ? n.id : null,
                    u = "BODY" !== t.tag && "class" in n && n.class.length > 0 ? n.class.trim().split(/\s+/).filter((function(t) {
                        return _t(t)
                    })).join(".") : null;
                if (u && u.length > 0)
                    if (0 === e) {
                        var c = "".concat(function(t) {
                            for (var e = t.split(">"), n = 0; n < e.length; n++) {
                                var a = e[n].indexOf("~"),
                                    r = e[n].indexOf(".");
                                e[n] = e[n].substring(0, r > 0 ? r : a > 0 ? a : e[n].length)
                            }
                            return e.join(">")
                        }(a)).concat(t.tag).concat(".").concat(u);
                        c in Nt || (Nt[c] = []), Nt[c].indexOf(t.id) < 0 && Nt[c].push(t.id), i = "".concat(c).concat("~").concat(Nt[c].indexOf(t.id))
                    } else i = "".concat(a).concat(t.tag, ".").concat(u).concat(r);
                return i = o && _t(o) ? "".concat(function(t) {
                    var e = t.lastIndexOf("*S"),
                        n = t.lastIndexOf("".concat("iframe:").concat("HTML")),
                        a = Math.max(e, n);
                    if (a < 0) return "";
                    return t.substring(0, t.indexOf(">", a) + 1)
                }(a)).concat("#").concat(o) : i, i
        }
    }

    function _t(t) {
        if (!t) return !1;
        if (Mt.some((function(e) {
                return t.toLowerCase().indexOf(e) >= 0
            }))) return !1;
        for (var e = 0; e < t.length; e++) {
            var n = t.charCodeAt(e);
            if (n >= 48 && n <= 57) return !1
        }
        return !0
    }
    var It = 1,
        Ct = null,
        Dt = [],
        Pt = [],
        Xt = {},
        Yt = [],
        jt = [],
        At = [],
        Rt = [],
        Lt = [],
        zt = [],
        Wt = null,
        Ht = null,
        qt = null,
        Ut = null;

    function Ft() {
        Bt(), Jt(document, !0)
    }

    function Vt() {
        Bt()
    }

    function Bt() {
        It = 1, Dt = [], Pt = [], Xt = {}, Yt = [], jt = [], At = "address,password,contact".split(","), Rt = "password,secret,pass,social,ssn,code,hidden".split(","), Lt = "radio,checkbox,range,button,reset,submit".split(","), zt = "INPUT,SELECT,TEXTAREA".split(","), Ct = new Map, Wt = new WeakMap, Ht = new WeakMap, qt = new WeakMap, Ut = new WeakMap, Nt = {}
    }

    function Jt(t, e) {
        void 0 === e && (e = !1);
        try {
            e && o.unmask.forEach((function(t) {
                return t.indexOf("!") < 0 ? jt.push(t) : Yt.push(t.substr(1))
            })), "querySelectorAll" in t && (o.regions.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return Qa(t, "".concat(e[0]))
                }))
            })), o.mask.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return qt.set(t, 3)
                }))
            })), o.checksum.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return Ut.set(t, e[0])
                }))
            })), jt.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return qt.set(t, 0)
                }))
            })))
        } catch (t) {
            Xr(5, 1, t ? t.name : null)
        }
    }

    function Gt(t, e) {
        if (void 0 === e && (e = !1), null === t) return null;
        var n = Wt.get(t);
        return !n && e && (n = It++, Wt.set(t, n)), n || null
    }

    function Kt(t) {
        var e = !1;
        if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
            var n = t;
            try {
                n.contentDocument && (Ht.set(n.contentDocument, n), e = !0)
            } catch (t) {}
        }
        return e
    }

    function Zt(t) {
        var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
        return e && Ht.has(e) ? Ht.get(e) : null
    }

    function Qt(t, e, n) {
        if ("object" == typeof t[n] && "object" == typeof e[n]) {
            for (var a in t[n])
                if (t[n][a] !== e[n][a]) return !0;
            for (var a in e[n])
                if (e[n][a] !== t[n][a]) return !0;
            return !1
        }
        return t[n] !== e[n]
    }

    function $t(t) {
        var e = t.parent && t.parent in Dt ? Dt[t.parent] : null,
            n = e ? e.selector : null,
            a = t.data,
            r = function(t, e) {
                e.metadata.position = 1;
                for (var n = t ? t.children.indexOf(e.id) : -1; n-- > 0;) {
                    var a = Dt[t.children[n]];
                    if (e.data.tag === a.data.tag) {
                        e.metadata.position = a.metadata.position + 1;
                        break
                    }
                }
                return e.metadata.position
            }(e, t),
            i = {
                id: t.id,
                tag: a.tag,
                prefix: n,
                position: r,
                attributes: a.attributes
            };
        t.selector = [xt(i, 0), xt(i, 1)], t.hash = t.selector.map((function(t) {
            return t ? d(t) : null
        })), t.hash.forEach((function(e) {
            return Xt[e] = t.id
        }))
    }

    function te(t) {
        var e = ee(ae(t));
        return null !== e && null !== e.textContent ? e.textContent.substr(0, 25) : ""
    }

    function ee(t) {
        return Ct.has(t) ? Ct.get(t) : null
    }

    function ne(t) {
        var e = Gt(t);
        return e in Dt ? Dt[e] : null
    }

    function ae(t) {
        return t in Xt ? Xt[t] : null
    }

    function re(t) {
        return Ct.has(Gt(t))
    }

    function ie() {
        for (var t = [], e = 0, n = Pt; e < n.length; e++) {
            var a = n[e];
            a in Dt && t.push(Dt[a])
        }
        return Pt = [], t
    }

    function oe(t) {
        if (Ct.get(t).nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
            Ct.delete(t);
            var e = t in Dt ? Dt[t] : null;
            if (e && e.children)
                for (var n = 0, a = e.children; n < a.length; n++) {
                    oe(a[n])
                }
        }
    }

    function ue(t) {
        for (var e = null; null === e && t.previousSibling;) e = Gt(t.previousSibling), t = t.previousSibling;
        return e
    }

    function ce(t, e, n, a) {
        void 0 === n && (n = !0), void 0 === a && (a = !1);
        var r = Pt.indexOf(t);
        r >= 0 && 1 === e && a ? (Pt.splice(r, 1), Pt.push(t)) : -1 === r && n && Pt.push(t)
    }
    var se = Object.freeze({
            __proto__: null,
            add: function(t, e, n, a) {
                var r = e ? Gt(e) : null;
                if (e && r || null != t.host || t.nodeType === Node.DOCUMENT_TYPE_NODE) {
                    var i = Gt(t, !0),
                        u = ue(t),
                        c = null,
                        s = $a(t) ? i : null,
                        l = Ut.has(t) ? Ut.get(t) : null,
                        d = o.content ? 1 : 3;
                    r >= 0 && Dt[r] && ((c = Dt[r]).children.push(i), s = null === s ? c.region : s, l = null === l ? c.metadata.fraud : l, d = c.metadata.privacy), n.attributes && "data-clarity-region" in n.attributes && (Qa(t, n.attributes["data-clarity-region"]), s = i), Ct.set(i, t), Dt[i] = {
                            id: i,
                            parent: r,
                            previous: u,
                            children: [],
                            data: n,
                            selector: null,
                            hash: null,
                            region: s,
                            metadata: {
                                active: !0,
                                suspend: !1,
                                privacy: d,
                                position: null,
                                fraud: l,
                                size: null
                            }
                        },
                        function(t, e, n) {
                            var a, r = e.data,
                                i = e.metadata,
                                o = i.privacy,
                                u = r.attributes || {},
                                c = r.tag.toUpperCase();
                            switch (!0) {
                                case zt.indexOf(c) >= 0:
                                    var s = u.type,
                                        l = "",
                                        d = ["class", "style"];
                                    Object.keys(u).filter((function(t) {
                                        return !d.includes(t)
                                    })).forEach((function(t) {
                                        return l += u[t].toLowerCase()
                                    }));
                                    var f = Rt.some((function(t) {
                                        return l.indexOf(t) >= 0
                                    }));
                                    i.privacy = "INPUT" === c && Lt.indexOf(s) >= 0 ? o : f ? 4 : 2;
                                    break;
                                case "data-clarity-mask" in u:
                                    i.privacy = 3;
                                    break;
                                case "data-clarity-unmask" in u:
                                    i.privacy = 0;
                                    break;
                                case qt.has(t):
                                    i.privacy = qt.get(t);
                                    break;
                                case Ut.has(t):
                                    i.privacy = 2;
                                    break;
                                case "*T" === c:
                                    var p = n && n.data ? n.data.tag : "",
                                        h = n && n.selector ? n.selector[1] : "",
                                        v = ["STYLE", "TITLE", "svg:style"];
                                    i.privacy = v.includes(p) || Yt.some((function(t) {
                                        return h.indexOf(t) >= 0
                                    })) ? 0 : o;
                                    break;
                                case 1 === o:
                                    i.privacy = function(t, e, n) {
                                        if (t && e.some((function(e) {
                                                return t.indexOf(e) >= 0
                                            }))) return 2;
                                        return n.privacy
                                    }(u.class, At, i);
                                    break;
                                case "IMG" === c:
                                    (null === (a = u.src) || void 0 === a ? void 0 : a.startsWith("blob:")) && (i.privacy = 3)
                            }
                        }(t, Dt[i], c), $t(Dt[i]),
                        function(t) {
                            if ("IMG" === t.data.tag && 3 === t.metadata.privacy) {
                                var e = ee(t.id);
                                !e || e.complete && 0 !== e.naturalWidth || Hi(e, "load", (function() {
                                    e.setAttribute("data-clarity-loaded", "".concat(Ni()))
                                })), t.metadata.size = []
                            }
                        }(Dt[i]), ce(i, a)
                }
            },
            get: ne,
            getId: Gt,
            getNode: ee,
            getValue: function(t) {
                return t in Dt ? Dt[t] : null
            },
            has: re,
            hashText: te,
            iframe: Zt,
            lookup: ae,
            parse: Jt,
            sameorigin: Kt,
            start: Ft,
            stop: Vt,
            update: function(t, e, n, a) {
                var r = Gt(t),
                    i = e ? Gt(e) : null,
                    o = ue(t),
                    u = !1,
                    c = !1;
                if (r in Dt) {
                    var s = Dt[r];
                    if (s.metadata.active = !0, s.previous !== o && (u = !0, s.previous = o), s.parent !== i) {
                        u = !0;
                        var l = s.parent;
                        if (s.parent = i, null !== i && i >= 0) {
                            var d = null === o ? 0 : Dt[i].children.indexOf(o) + 1;
                            Dt[i].children.splice(d, 0, r), s.region = $a(t) ? r : Dt[i].region
                        } else ! function(t, e) {
                            if (t in Dt) {
                                var n = Dt[t];
                                n.metadata.active = !1, n.parent = null, ce(t, e), oe(t)
                            }
                        }(r, a);
                        if (null !== l && l >= 0) {
                            var f = Dt[l].children.indexOf(r);
                            f >= 0 && Dt[l].children.splice(f, 1)
                        }
                        c = !0
                    }
                    for (var p in n) Qt(s.data, n, p) && (u = !0, s.data[p] = n[p]);
                    $t(s), ce(r, a, u, c)
                }
            },
            updates: ie
        }),
        le = 5e3,
        de = {},
        fe = [],
        pe = null,
        he = null,
        ve = null;

    function ge() {
        de = {}, fe = [], pe = null, he = null
    }

    function me(t, e) {
        return void 0 === e && (e = 0), rt(this, void 0, void 0, (function() {
            var n, a, r;
            return it(this, (function(i) {
                for (n = 0, a = fe; n < a.length; n++)
                    if (a[n].task === t) return [2];
                return r = new Promise((function(n) {
                    fe[1 === e ? "unshift" : "push"]({
                        task: t,
                        resolve: n,
                        id: wi()
                    })
                })), null === pe && null === he && ye(), [2, r]
            }))
        }))
    }

    function ye() {
        var t = fe.shift();
        t && (pe = t, t.task().then((function() {
            t.id === wi() && (t.resolve(), pe = null, ye())
        })).catch((function(e) {
            t.id === wi() && (e && Xr(0, 1, e.name, e.message, e.stack), pe = null, ye())
        })))
    }

    function be(t) {
        var e = Te(t);
        return e in de ? performance.now() - de[e].start > de[e].yield ? 0 : 1 : 2
    }

    function we(t) {
        de[Te(t)] = {
            start: performance.now(),
            calls: 0,
            yield: 30
        }
    }

    function ke(t) {
        var e = performance.now(),
            n = Te(t),
            a = e - de[n].start;
        z(t.cost, a), L(5), de[n].calls > 0 && z(4, a)
    }

    function Se(t) {
        return rt(this, void 0, void 0, (function() {
            var e, n;
            return it(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return (e = Te(t)) in de ? (ke(t), n = de[e], [4, Ee()]) : [3, 2];
                    case 1:
                        n.yield = a.sent().timeRemaining(),
                            function(t) {
                                var e = Te(t);
                                if (de && de[e]) {
                                    var n = de[e].calls,
                                        a = de[e].yield;
                                    we(t), de[e].calls = n + 1, de[e].yield = a
                                }
                            }(t), a.label = 2;
                    case 2:
                        return [2, e in de ? 1 : 2]
                }
            }))
        }))
    }

    function Te(t) {
        return "".concat(t.id, ".").concat(t.cost)
    }

    function Ee() {
        return rt(this, void 0, void 0, (function() {
            return it(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return he ? [4, he] : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2, new Promise((function(t) {
                            Me(t, {
                                timeout: le
                            })
                        }))]
                }
            }))
        }))
    }
    var Oe, Me = window.requestIdleCallback || function(t, e) {
        var n = performance.now(),
            a = new MessageChannel,
            r = a.port1,
            i = a.port2;
        r.onmessage = function(a) {
            var r = performance.now(),
                o = r - n,
                u = r - a.data;
            if (u > 30 && o < e.timeout) requestAnimationFrame((function() {
                i.postMessage(r)
            }));
            else {
                var c = o > e.timeout;
                t({
                    didTimeout: c,
                    timeRemaining: function() {
                        return c ? 30 : Math.max(0, 30 - u)
                    }
                })
            }
        }, requestAnimationFrame((function() {
            i.postMessage(performance.now())
        }))
    };

    function Ne() {
        Oe = null
    }

    function xe() {
        xe.dn = 19;
        var t = document.body,
            e = document.documentElement,
            n = t ? t.clientWidth : null,
            a = t ? t.scrollWidth : null,
            r = t ? t.offsetWidth : null,
            i = e ? e.clientWidth : null,
            o = e ? e.scrollWidth : null,
            u = e ? e.offsetWidth : null,
            c = Math.max(n, a, r, i, o, u),
            s = t ? t.clientHeight : null,
            l = t ? t.scrollHeight : null,
            d = t ? t.offsetHeight : null,
            f = e ? e.clientHeight : null,
            p = e ? e.scrollHeight : null,
            h = e ? e.offsetHeight : null,
            v = Math.max(s, l, d, f, p, h);
        null !== Oe && c === Oe.width && v === Oe.height || null === c || null === v || (Oe = {
            width: c,
            height: v
        }, Ha(8))
    }
    var _e = [];

    function Ie(t) {
        Ie.dn = 5;
        var e = ir(t);
        if (e) {
            var n = e.value,
                a = n && n.length >= 5 && o.fraud && -1 === "password,secret,pass,social,ssn,code,hidden".indexOf(e.type) ? d(n, 28) : "";
            _e.push({
                time: s(t),
                event: 42,
                data: {
                    target: ir(t),
                    type: e.type,
                    value: n,
                    checksum: a
                }
            }), me(ur.bind(this, 42))
        }
    }

    function Ce() {
        _e = []
    }

    function De(t) {
        var e = {
            x: 0,
            y: 0
        };
        if (t && t.offsetParent)
            do {
                var n = t.offsetParent,
                    a = null === n ? Zt(t.ownerDocument) : null;
                e.x += t.offsetLeft, e.y += t.offsetTop, t = a || n
            } while (t);
        return e
    }
    var Pe = ["input", "textarea", "radio", "button", "canvas"],
        Xe = [];

    function Ye(t) {
        Hi(t, "click", je.bind(this, 9, t), !0)
    }

    function je(t, e, n) {
        je.dn = 6;
        var a = Zt(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = De(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        var c = ir(n),
            l = function(t) {
                for (; t && t !== document;) {
                    if (t.nodeType === Node.ELEMENT_NODE) {
                        var e = t;
                        if ("A" === e.tagName) return e
                    }
                    t = t.parentNode
                }
                return null
            }(c),
            d = function(t) {
                var e = null,
                    n = document.documentElement;
                if ("function" == typeof t.getBoundingClientRect) {
                    var a = t.getBoundingClientRect();
                    a && a.width > 0 && a.height > 0 && (e = {
                        x: Math.floor(a.left + ("pageXOffset" in window ? window.pageXOffset : n.scrollLeft)),
                        y: Math.floor(a.top + ("pageYOffset" in window ? window.pageYOffset : n.scrollTop)),
                        w: Math.floor(a.width),
                        h: Math.floor(a.height)
                    })
                }
                return e
            }(c);
        0 === n.detail && d && (i = Math.round(d.x + d.w / 2), o = Math.round(d.y + d.h / 2));
        var f = d ? Math.max(Math.floor((i - d.x) / d.w * 32767), 0) : 0,
            p = d ? Math.max(Math.floor((o - d.y) / d.h * 32767), 0) : 0;
        if (null !== i && null !== o) {
            var h = function(t) {
                var e = null,
                    n = !1;
                if (t) {
                    var a = t.textContent || String(t.value || "") || t.alt;
                    if (a) {
                        var r = a.replace(/\s+/g, " ").trim();
                        n = (e = r.substring(0, 25)).length === r.length
                    }
                }
                return {
                    text: e,
                    isFullText: n ? 1 : 0
                }
            }(c);
            Xe.push({
                time: s(n),
                event: t,
                data: {
                    target: c,
                    x: i,
                    y: o,
                    eX: f,
                    eY: p,
                    button: n.button,
                    reaction: Ae(c),
                    context: Re(l),
                    text: h.text,
                    link: l ? l.href : null,
                    hash: null,
                    trust: n.isTrusted ? 1 : 0,
                    isFullText: h.isFullText
                }
            }), me(ur.bind(this, t))
        }
    }

    function Ae(t) {
        if (t.nodeType === Node.ELEMENT_NODE) {
            var e = t.tagName.toLowerCase();
            if (Pe.indexOf(e) >= 0) return 0
        }
        return 1
    }

    function Re(t) {
        if (t && t.hasAttribute("target")) switch (t.getAttribute("target")) {
            case "_blank":
                return 1;
            case "_parent":
                return 2;
            case "_top":
                return 3
        }
        return 0
    }

    function Le() {
        Xe = []
    }
    var ze = [];

    function We(t, e) {
        We.dn = 7, ze.push({
            time: s(e),
            event: 38,
            data: {
                target: ir(e),
                action: t
            }
        }), me(ur.bind(this, 38))
    }

    function He() {
        ze = []
    }
    var qe = null,
        Ue = [];

    function Fe(t) {
        Fe.dn = 9;
        var e = ir(t),
            n = ne(e);
        if (e && e.type && n) {
            var a = e.value,
                r = e.type;
            switch (e.type) {
                case "radio":
                case "checkbox":
                    a = e.checked ? "true" : "false"
            }
            var i = {
                target: e,
                value: a,
                type: r
            };
            Ue.length > 0 && Ue[Ue.length - 1].data.target === i.target && Ue.pop(), Ue.push({
                time: s(t),
                event: 27,
                data: i
            }), q(qe), qe = H(Ve, 1e3, 27)
        }
    }

    function Ve(t) {
        me(ur.bind(this, t))
    }

    function Be() {
        Ue = []
    }
    var Je, Ge = [],
        Ke = null,
        Ze = !1,
        Qe = 0,
        $e = new Set;

    function tn(t, e, n) {
        tn.dn = 10;
        var a = Zt(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = De(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        null !== i && null !== o && nn({
            time: s(n),
            event: t,
            data: {
                target: ir(n),
                x: i,
                y: o
            }
        })
    }

    function en(t, e, n) {
        en.dn = 11;
        var a = Zt(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = n.changedTouches,
            o = s(n);
        if (i)
            for (var u = 0; u < i.length; u++) {
                var c = i[u],
                    l = "clientX" in c ? Math.round(c.clientX + r.scrollLeft) : null,
                    d = "clientY" in c ? Math.round(c.clientY + r.scrollTop) : null;
                l = l && a ? l + Math.round(a.offsetLeft) : l, d = d && a ? d + Math.round(a.offsetTop) : d;
                var f = "identifier" in c ? c.identifier : void 0;
                switch (t) {
                    case 17:
                        0 === $e.size && (Ze = !0, Qe = f), $e.add(f);
                        break;
                    case 18:
                    case 20:
                        $e.delete(f)
                }
                var p = Ze && Qe === f;
                null !== l && null !== d && nn({
                    time: o,
                    event: t,
                    data: {
                        target: ir(n),
                        x: l,
                        y: d,
                        id: f,
                        isPrimary: p
                    }
                }), 20 !== t && 18 !== t || Qe === f && (Ze = !1)
            }
    }

    function nn(t) {
        switch (t.event) {
            case 12:
            case 15:
            case 19:
                var e = Ge.length,
                    n = e > 1 ? Ge[e - 2] : null;
                n && function(t, e) {
                    var n = t.data.x - e.data.x,
                        a = t.data.y - e.data.y,
                        r = Math.sqrt(n * n + a * a),
                        i = e.time - t.time,
                        o = e.data.target === t.data.target;
                    return e.event === t.event && o && r < 20 && i < 25
                }(n, t) && Ge.pop(), Ge.push(t), q(Ke), Ke = H(an, 500, t.event);
                break;
            default:
                Ge.push(t), an(t.event)
        }
    }

    function an(t) {
        me(ur.bind(this, t))
    }

    function rn() {
        Ge = []
    }
    var on = null,
        un = !1;

    function cn() {
        cn.dn = 12;
        var t = document.documentElement;
        Je = {
            width: t && "clientWidth" in t ? Math.min(t.clientWidth, window.innerWidth) : window.innerWidth,
            height: t && "clientHeight" in t ? Math.min(t.clientHeight, window.innerHeight) : window.innerHeight
        }, un ? (q(on), on = H(sn, 500, 11)) : (ur(11), un = !0)
    }

    function sn(t) {
        me(ur.bind(this, t))
    }

    function ln() {
        Je = null, q(on)
    }
    var dn = [],
        fn = null,
        pn = null,
        hn = null;

    function vn(t) {
        void 0 === t && (t = null), vn.dn = 13;
        var e = window,
            n = document.documentElement,
            a = t ? ir(t) : n;
        if (a && a.nodeType === Node.DOCUMENT_NODE) {
            var r = Zt(a);
            e = r ? r.contentWindow : e, a = n = a.documentElement
        }
        var i = a === n && "pageXOffset" in e ? Math.round(e.pageXOffset) : Math.round(a.scrollLeft),
            o = a === n && "pageYOffset" in e ? Math.round(e.pageYOffset) : Math.round(a.scrollTop),
            u = window.innerWidth,
            c = window.innerHeight,
            l = u / 3,
            d = u > c ? .15 * c : .2 * c,
            f = c - d,
            p = gn(l, d),
            h = gn(l, f),
            v = {
                time: s(t),
                event: 10,
                data: {
                    target: a,
                    x: i,
                    y: o,
                    top: p,
                    bottom: h
                }
            };
        if (null === t && 0 === i && 0 === o || null === i || null === o) return fn = p, void(pn = h);
        var g = dn.length,
            m = g > 1 ? dn[g - 2] : null;
        m && function(t, e) {
            var n = t.data.x - e.data.x,
                a = t.data.y - e.data.y;
            return n * n + a * a < 400 && e.time - t.time < 25
        }(m, v) && dn.pop(), dn.push(v), q(hn), hn = H(mn, 500, 10)
    }

    function gn(t, e) {
        var n, a, r;
        return "caretPositionFromPoint" in document ? r = null === (n = document.caretPositionFromPoint(t, e)) || void 0 === n ? void 0 : n.offsetNode : "caretRangeFromPoint" in document && (r = null === (a = document.caretRangeFromPoint(t, e)) || void 0 === a ? void 0 : a.startContainer), r || (r = document.elementFromPoint(t, e)), r && r.nodeType === Node.TEXT_NODE && (r = r.parentNode), r
    }

    function mn(t) {
        me(ur.bind(this, t))
    }

    function yn() {
        var t, e;
        if (yn.dn = 14, fn) {
            var n = or(fn, null);
            si(31, null === (t = null == n ? void 0 : n.hash) || void 0 === t ? void 0 : t.join("."))
        }
        if (pn) {
            var a = or(pn, null);
            si(32, null === (e = null == a ? void 0 : a.hash) || void 0 === e ? void 0 : e.join("."))
        }
    }
    var bn = null,
        wn = null,
        kn = null;

    function Sn(t) {
        Sn.dn = 15;
        var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
        if (null !== e && !(null === e.anchorNode && null === e.focusNode || e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)) {
            var n = bn.start ? bn.start : null;
            null !== wn && null !== bn.start && n !== e.anchorNode && (q(kn), Tn(21)), bn = {
                start: e.anchorNode,
                startOffset: e.anchorOffset,
                end: e.focusNode,
                endOffset: e.focusOffset
            }, wn = e, q(kn), kn = H(Tn, 500, 21)
        }
    }

    function Tn(t) {
        me(ur.bind(this, t))
    }

    function En() {
        wn = null, bn = {
            start: 0,
            startOffset: 0,
            end: 0,
            endOffset: 0
        }
    }
    var On, Mn, Nn = [];

    function xn(t) {
        xn.dn = 16, Nn.push({
            time: s(t),
            event: 39,
            data: {
                target: ir(t)
            }
        }), me(ur.bind(this, 39))
    }

    function _n() {
        Nn = []
    }

    function In(t) {
        In.dn = 17, On = {
            name: t.type,
            persisted: t.persisted ? 1 : 0
        }, ur(26, s(t)), xo()
    }

    function Cn() {
        On = null
    }

    function Dn(t) {
        void 0 === t && (t = null), Dn.dn = 18, Mn = {
            visible: "visibilityState" in document ? document.visibilityState : "default"
        }, ur(28, s(t))
    }

    function Pn() {
        Mn = null
    }

    function Xn(t) {
        ! function(t) {
            var e = Zt(t);
            Hi(e ? e.contentWindow : t === document ? window : t, "scroll", vn, !0)
        }(t), t.nodeType === Node.DOCUMENT_NODE && (Ye(t), function(t) {
            Hi(t, "cut", We.bind(this, 0), !0), Hi(t, "copy", We.bind(this, 1), !0), Hi(t, "paste", We.bind(this, 2), !0)
        }(t), function(t) {
            Hi(t, "mousedown", tn.bind(this, 13, t), !0), Hi(t, "mouseup", tn.bind(this, 14, t), !0), Hi(t, "mousemove", tn.bind(this, 12, t), !0), Hi(t, "wheel", tn.bind(this, 15, t), !0), Hi(t, "dblclick", tn.bind(this, 16, t), !0), Hi(t, "touchstart", en.bind(this, 17, t), !0), Hi(t, "touchend", en.bind(this, 18, t), !0), Hi(t, "touchmove", en.bind(this, 19, t), !0), Hi(t, "touchcancel", en.bind(this, 20, t), !0)
        }(t), function(t) {
            Hi(t, "input", Fe, !0)
        }(t), function(t) {
            Hi(t, "selectstart", Sn.bind(this, t), !0), Hi(t, "selectionchange", Sn.bind(this, t), !0)
        }(t), function(t) {
            Hi(t, "change", Ie, !0)
        }(t), function(t) {
            Hi(t, "submit", xn, !0)
        }(t))
    }
    var Yn = Object.freeze({
        __proto__: null,
        observe: Xn,
        start: function t() {
            t.dn = 8, cr = [], lr(), Le(), He(), rn(), Be(), un = !1, Hi(window, "resize", cn), cn(), Hi(document, "visibilitychange", Dn), Dn(), dn = [], vn(), En(), Ce(), _n(), Hi(window, "pagehide", In)
        },
        stop: function() {
            cr = [], lr(), Le(), He(), q(Ke), Ge.length > 0 && an(Ge[Ge.length - 1].event), q(qe), Be(), ln(), Pn(), q(hn), dn = [], fn = null, pn = null, En(), q(kn), Ce(), _n(), Cn()
        }
    });

    function jn(t, e, n, a) {
        return rt(this, void 0, void 0, (function() {
            var r, i, o, u, c;
            return it(this, (function(s) {
                switch (s.label) {
                    case 0:
                        r = [t], s.label = 1;
                    case 1:
                        if (!(r.length > 0)) return [3, 4];
                        for (i = r.shift(), o = i.firstChild; o;) r.push(o), o = o.nextSibling;
                        return 0 !== (u = be(e)) ? [3, 3] : [4, Se(e)];
                    case 2:
                        u = s.sent(), s.label = 3;
                    case 3:
                        return 2 === u ? [3, 4] : ((c = fa(i, n, a)) && r.push(c), [3, 1]);
                    case 4:
                        return [2]
                }
            }))
        }))
    }
    var An = [],
        Rn = [],
        Ln = {},
        zn = null,
        Wn = null,
        Hn = null,
        qn = null,
        Un = null,
        Fn = [],
        Vn = null,
        Bn = null,
        Jn = null,
        Gn = {},
        Kn = null,
        Zn = new WeakMap,
        Qn = ["data-google-query-id", "data-load-complete", "data-google-container-id"];

    function $n() {
        if ($n.dn = 21, An = [], Fn = [], Vn = null, Jn = 0, Gn = {}, Kn = 0, Zn = new WeakMap, null === zn && (zn = CSSStyleSheet.prototype.insertRule, CSSStyleSheet.prototype.insertRule = function() {
                return eo() && ia(this.ownerNode), zn.apply(this, arguments)
            }), "CSSMediaRule" in window && null === qn && (qn = CSSMediaRule.prototype.insertRule, CSSMediaRule.prototype.insertRule = function() {
                return eo() && ia(this.parentStyleSheet.ownerNode), qn.apply(this, arguments)
            }), null === Wn && (Wn = CSSStyleSheet.prototype.deleteRule, CSSStyleSheet.prototype.deleteRule = function() {
                return eo() && ia(this.ownerNode), Wn.apply(this, arguments)
            }), "CSSMediaRule" in window && null === Un && (Un = CSSMediaRule.prototype.deleteRule, CSSMediaRule.prototype.deleteRule = function() {
                return eo() && ia(this.parentStyleSheet.ownerNode), Un.apply(this, arguments)
            }), null === Hn) {
            Hn = Element.prototype.attachShadow;
            try {
                Element.prototype.attachShadow = function() {
                    return eo() ? ia(Hn.apply(this, arguments)) : Hn.apply(this, arguments)
                }
            } catch (t) {
                Hn = null
            }
        }
    }

    function ta(t) {
        ta.dn = 22;
        var e = s();
        Z(6, e), Rn.push({
            time: e,
            mutations: t
        }), me(na, 1).then((function() {
            H(xe), zi(tr)()
        }))
    }

    function ea(t, e, n, a) {
        return rt(this, void 0, void 0, (function() {
            var r, i, u;
            return it(this, (function(c) {
                switch (c.label) {
                    case 0:
                        return 0 !== (r = be(t)) ? [3, 2] : [4, Se(t)];
                    case 1:
                        r = c.sent(), c.label = 2;
                    case 2:
                        if (2 === r) return [2];
                        switch (i = e.target, u = o.throttleDom ? function(t, e, n, a) {
                            var r = t.target ? ne(t.target.parentNode) : null;
                            if (r && "HTML" !== r.data.tag) {
                                var i = a > Jn,
                                    u = n < Kn,
                                    c = ne(t.target),
                                    s = c && c.selector ? c.selector.join() : t.target.nodeName,
                                    l = r.selector ? r.selector.join() : "",
                                    d = o.throttleMutations && u && (0 === o.discard.length || o.discard.some((function(t) {
                                        return s.includes(t)
                                    }))),
                                    f = [l, s, t.attributeName, aa(t.addedNodes), aa(t.removedNodes)].join();
                                Gn[f] = f in Gn ? Gn[f] : [0, n];
                                var p = Gn[f];
                                if (!1 === i && p[0] >= 10 && ra(p[2], 2, e, a), p[0] = i || d ? p[1] === n ? p[0] : p[0] + 1 : 1, p[1] = n, p[0] >= 10 || d) return p[2] = t.removedNodes, n > a + 3e3 ? t.type : (o.dropMutations || (Ln[f] = {
                                    mutation: t,
                                    timestamp: a
                                }), "throttle")
                            }
                            return t.type
                        }(e, t, n, a) : e.type, u && i && i.ownerDocument && Jt(i.ownerDocument), u && i && i.nodeType == Node.DOCUMENT_FRAGMENT_NODE && i.host && Jt(i), u) {
                            case "attributes":
                                Qn.indexOf(e.attributeName) < 0 && fa(i, 3, a);
                                break;
                            case "characterData":
                                fa(i, 4, a);
                                break;
                            case "childList":
                                ra(e.addedNodes, 1, t, a), ra(e.removedNodes, 2, t, a)
                        }
                        return [2]
                }
            }))
        }))
    }

    function na() {
        return rt(this, void 0, void 0, (function() {
            var t, e, n, a, r, i, o, u, c, l, d;
            return it(this, (function(f) {
                switch (f.label) {
                    case 0:
                        we(t = {
                            id: wi(),
                            cost: 3
                        }), f.label = 1;
                    case 1:
                        if (!(Rn.length > 0)) return [3, 7];
                        e = Rn.shift(), n = s(), a = 0, r = e.mutations, f.label = 2;
                    case 2:
                        return a < r.length ? (i = r[a], [4, ea(t, i, n, e.time)]) : [3, 5];
                    case 3:
                        f.sent(), f.label = 4;
                    case 4:
                        return a++, [3, 2];
                    case 5:
                        return [4, Ha(6, t, e.time)];
                    case 6:
                        return f.sent(), [3, 1];
                    case 7:
                        o = !1, u = 0, c = Object.keys(Ln), f.label = 8;
                    case 8:
                        return u < c.length ? (l = c[u], d = Ln[l], delete Ln[l], [4, ea(t, d.mutation, s(), d.timestamp)]) : [3, 11];
                    case 9:
                        f.sent(), o = !0, f.label = 10;
                    case 10:
                        return u++, [3, 8];
                    case 11:
                        return Object.keys(Ln).length > 0 && function() {
                            Bn && q(Bn);
                            Bn = H((function() {
                                me(na, 1)
                            }), 33)
                        }(), 0 === Object.keys(Ln).length && o ? [4, Ha(6, t, s())] : [3, 13];
                    case 12:
                        f.sent(), f.label = 13;
                    case 13:
                        return function() {
                            var t = s();
                            Object.keys(Gn).length > 1e4 && (Gn = {}, L(38));
                            for (var e = 0, n = Object.keys(Gn); e < n.length; e++) {
                                var a = n[e];
                                t > Gn[a][1] + 3e4 && delete Gn[a]
                            }
                        }(), ke(t), [2]
                }
            }))
        }))
    }

    function aa(t) {
        for (var e = [], n = 0; t && n < t.length; n++) e.push(t[n].nodeName);
        return e.join()
    }

    function ra(t, e, n, a) {
        return rt(this, void 0, void 0, (function() {
            var r, i, o, u;
            return it(this, (function(c) {
                switch (c.label) {
                    case 0:
                        r = t ? t.length : 0, i = 0, c.label = 1;
                    case 1:
                        return i < r ? (o = t[i], 1 !== e ? [3, 2] : (jn(o, n, e, a), [3, 5])) : [3, 6];
                    case 2:
                        return 0 !== (u = be(n)) ? [3, 4] : [4, Se(n)];
                    case 3:
                        u = c.sent(), c.label = 4;
                    case 4:
                        if (2 === u) return [3, 6];
                        fa(o, e, a), c.label = 5;
                    case 5:
                        return i++, [3, 1];
                    case 6:
                        return [2]
                }
            }))
        }))
    }

    function ia(t) {
        return Fn.indexOf(t) < 0 && Fn.push(t), Vn && q(Vn), Vn = H((function() {
            ! function() {
                for (var t = 0, e = Fn; t < e.length; t++) {
                    var n = e[t];
                    if (n) {
                        var a = n.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
                        if (a && re(n)) continue;
                        oa(n, a ? "childList" : "characterData")
                    }
                }
                Fn = []
            }()
        }), 33), t
    }

    function oa(t, e) {
        oa.dn = 23, zi(ta)([{
            addedNodes: [t],
            attributeName: null,
            attributeNamespace: null,
            nextSibling: null,
            oldValue: null,
            previousSibling: null,
            removedNodes: [],
            target: t,
            type: e
        }])
    }
    var ua = /[^0-9\.]/g;

    function ca(t) {
        for (var e = 0, n = Object.keys(t); e < n.length; e++) {
            var a = n[e],
                r = t[a];
            if ("@type" === a && "string" == typeof r) switch (r = (r = r.toLowerCase()).indexOf("article") >= 0 || r.indexOf("posting") >= 0 ? "article" : r) {
                case "article":
                case "recipe":
                    si(5, t[a]), si(8, t.creator), si(18, t.headline);
                    break;
                case "product":
                    si(5, t[a]), si(10, t.name), si(12, t.sku), t.brand && si(6, t.brand.name);
                    break;
                case "aggregaterating":
                    t.ratingValue && (W(11, sa(t.ratingValue, 100)), W(18, sa(t.bestRating)), W(19, sa(t.worstRating))), W(12, sa(t.ratingCount)), W(17, sa(t.reviewCount));
                    break;
                case "offer":
                    si(7, t.availability), si(14, t.itemCondition), si(13, t.priceCurrency), si(12, t.sku), W(13, sa(t.price));
                    break;
                case "brand":
                    si(6, t.name)
            }
            null !== r && "object" == typeof r && ca(r)
        }
    }

    function sa(t, e) {
        if (void 0 === e && (e = 1), null !== t) switch (typeof t) {
            case "number":
                return Math.round(t * e);
            case "string":
                return Math.round(parseFloat(t.replace(ua, "")) * e)
        }
        return null
    }
    var la = ["title", "alt", "onload", "onfocus", "onerror", "data-drupal-form-submit-last", "aria-label"],
        da = /[\r\n]+/g;

    function fa(t, e, n) {
        var a, r = null;
        if (2 === e && !1 === re(t)) return r;
        0 !== e && t.nodeType === Node.TEXT_NODE && t.parentElement && "STYLE" === t.parentElement.tagName && (t = t.parentNode);
        var i = !1 === re(t) ? "add" : "update",
            o = t.parentElement ? t.parentElement : null,
            u = t.ownerDocument !== document;
        switch (t.nodeType) {
            case Node.DOCUMENT_TYPE_NODE:
                o = u && t.parentNode ? Zt(t.parentNode) : o;
                var c = t,
                    s = {
                        tag: (u ? "iframe:" : "") + "*D",
                        attributes: {
                            name: c.name ? c.name : "HTML",
                            publicId: c.publicId,
                            systemId: c.systemId
                        }
                    };
                se[i](t, o, s, e);
                break;
            case Node.DOCUMENT_NODE:
                t === document && Jt(document), Oa(t, n), pa(t);
                break;
            case Node.DOCUMENT_FRAGMENT_NODE:
                var l = t;
                if (l.host) {
                    if (Jt(l), "function" === typeof l.constructor && l.constructor.toString().indexOf("[native code]") >= 0) {
                        pa(l);
                        var d = {
                            tag: "*S",
                            attributes: {
                                style: ""
                            }
                        };
                        se[i](t, l.host, d, e)
                    } else se[i](t, l.host, {
                        tag: "*P",
                        attributes: {}
                    }, e);
                    Oa(t, n)
                }
                break;
            case Node.TEXT_NODE:
                if (o = o || t.parentNode, "update" === i || o && re(o) && "STYLE" !== o.tagName && "NOSCRIPT" !== o.tagName) {
                    var f = {
                        tag: "*T",
                        value: t.nodeValue
                    };
                    se[i](t, o, f, e)
                }
                break;
            case Node.ELEMENT_NODE:
                var p = t,
                    h = p.tagName,
                    v = function(t) {
                        var e = {},
                            n = t.attributes;
                        if (n && n.length > 0)
                            for (var a = 0; a < n.length; a++) {
                                var r = n[a].name;
                                la.indexOf(r) < 0 && (e[r] = n[a].value)
                            }
                        "INPUT" === t.tagName && !("value" in e) && t.value && (e.value = t.value);
                        return e
                    }(p);
                switch (o = t.parentElement ? t.parentElement : t.parentNode ? t.parentNode : null, "http://www.w3.org/2000/svg" === p.namespaceURI && (h = "svg:" + h), h) {
                    case "HTML":
                        o = u && o ? Zt(o) : o;
                        var g = {
                            tag: (u ? "iframe:" : "") + h,
                            attributes: v
                        };
                        se[i](t, o, g, e);
                        break;
                    case "SCRIPT":
                        if ("type" in v && "application/ld+json" === v.type) try {
                            ca(JSON.parse(p.text.replace(da, "")))
                        } catch (t) {}
                        break;
                    case "NOSCRIPT":
                        var m = {
                            tag: h,
                            attributes: {},
                            value: ""
                        };
                        se[i](t, o, m, e);
                        break;
                    case "META":
                        var y = "property" in v ? "property" : "name" in v ? "name" : null;
                        if (y && "content" in v) {
                            var b = v.content;
                            switch (v[y]) {
                                case "og:title":
                                    si(20, b);
                                    break;
                                case "og:type":
                                    si(19, b);
                                    break;
                                case "generator":
                                    si(21, b)
                            }
                        }
                        break;
                    case "HEAD":
                        var w = {
                                tag: h,
                                attributes: v
                            },
                            k = u && (null === (a = t.ownerDocument) || void 0 === a ? void 0 : a.location) ? t.ownerDocument.location : location;
                        w.attributes["*B"] = k.protocol + "//" + k.host + k.pathname, se[i](t, o, w, e);
                        break;
                    case "BASE":
                        var S = ne(t.parentElement);
                        if (S) {
                            var T = document.createElement("a");
                            T.href = v.href, S.data.attributes["*B"] = T.protocol + "//" + T.host + T.pathname
                        }
                        break;
                    case "STYLE":
                        var E = {
                            tag: h,
                            attributes: v,
                            value: ha(p)
                        };
                        se[i](t, o, E, e);
                        break;
                    case "IFRAME":
                        var O = t,
                            M = {
                                tag: h,
                                attributes: v
                            };
                        Kt(O) && (! function(t) {
                            !1 === re(t) && Hi(t, "load", oa.bind(this, t, "childList"), !0)
                        }(O), M.attributes["*O"] = "true", O.contentDocument && O.contentWindow && "loading" !== O.contentDocument.readyState && (r = O.contentDocument)), se[i](t, o, M, e);
                        break;
                    case "LINK":
                        if (vi && "stylesheet" === v.rel) {
                            for (var N in Object.keys(document.styleSheets)) {
                                var x = document.styleSheets[N];
                                if (x.ownerNode == p) {
                                    var _ = {
                                        tag: "STYLE",
                                        attributes: v,
                                        value: va(x)
                                    };
                                    se[i](t, o, _, e);
                                    break
                                }
                            }
                            break
                        }
                        var I = {
                            tag: h,
                            attributes: v
                        };
                        se[i](t, o, I, e);
                        break;
                    case "VIDEO":
                    case "AUDIO":
                    case "SOURCE":
                        "src" in v && v.src.startsWith("data:") && (v.src = "");
                        var C = {
                            tag: h,
                            attributes: v
                        };
                        se[i](t, o, C, e);
                        break;
                    default:
                        var D = {
                            tag: h,
                            attributes: v
                        };
                        p.shadowRoot && (r = p.shadowRoot), se[i](t, o, D, e)
                }
        }
        return r
    }

    function pa(t) {
        re(t) || (! function(t) {
            var e;
            try {
                Zn.has(t) && (null === (e = Zn.get(t)) || void 0 === e || e.disconnect());
                var n = u("MutationObserver"),
                    a = n in window ? new window[n](zi(ta)) : null;
                a && (a.observe(t, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }), Zn.set(t, a), An.push(a))
            } catch (t) {
                Xr(2, 0, t ? t.name : null)
            }
        }(t), Xn(t))
    }

    function ha(t) {
        var e = t.textContent ? t.textContent.trim() : "",
            n = t.dataset ? Object.keys(t.dataset).length : 0;
        return (0 === e.length || n > 0 || t.id.length > 0) && (e = va(t.sheet)), e
    }

    function va(t) {
        var e = "",
            n = null;
        try {
            n = t ? t.cssRules : []
        } catch (t) {
            if (Xr(1, 1, t ? t.name : null), t && "SecurityError" !== t.name) throw t
        }
        if (null !== n)
            for (var a = 0; a < n.length; a++) e += n[a].cssText;
        return e
    }
    var ga = [],
        ma = [],
        ya = null,
        ba = null,
        wa = "claritySheetId",
        ka = {},
        Sa = {},
        Ta = [],
        Ea = [];

    function Oa(t, e) {
        if (-1 === Ta.indexOf(t) && Ta.push(t), e = e || s(), null == t ? void 0 : t.adoptedStyleSheets) {
            W(36, 1);
            for (var n = [], a = 0, r = t.adoptedStyleSheets; a < r.length; a++) {
                var i = r[a];
                i[wa] && -1 !== Ea.indexOf(i[wa]) || (i[wa] = Ni(), Ea.push(i[wa]), Na(e, i[wa], 0), Na(e, i[wa], 2, va(i))), n.push(i[wa])
            }
            var o = Gt(t, !0);
            ka[o] || (ka[o] = []),
                function(t, e) {
                    if (t.length !== e.length) return !1;
                    return t.every((function(t, n) {
                        return t === e[n]
                    }))
                }(n, ka[o]) || (! function(t, e, n, a) {
                    ma.push({
                        time: t,
                        event: 45,
                        data: {
                            id: e,
                            operation: n,
                            newIds: a
                        }
                    }), Ha(45)
                }(e, t == document ? -1 : Gt(t), 3, n), ka[o] = n, Sa[o] = e)
        }
    }

    function Ma() {
        ma = [], ga = []
    }

    function Na(t, e, n, a) {
        ga.push({
            time: t,
            event: 46,
            data: {
                id: e,
                operation: n,
                cssRules: a
            }
        }), Ha(46)
    }
    var xa = [],
        _a = null,
        Ia = null,
        Ca = null,
        Da = null,
        Pa = null,
        Xa = null,
        Ya = "clarityAnimationId",
        ja = "clarityOperationCount",
        Aa = 20;

    function Ra() {
        xa = []
    }

    function La(t, e, n, a, r, i, o) {
        xa.push({
            time: t,
            event: 44,
            data: {
                id: e,
                operation: n,
                keyFrames: a,
                timing: r,
                targetId: i,
                timeline: o
            }
        }), Ha(44)
    }

    function za(t, e) {
        null === t && (t = Animation.prototype[e], Animation.prototype[e] = function() {
            return Wa(this, e), t.apply(this, arguments)
        })
    }

    function Wa(t, e) {
        if (eo()) {
            var n = t.effect,
                a = Gt(n.target);
            if (null !== a && n.getKeyframes && n.getTiming) {
                if (!t[Ya]) {
                    t[Ya] = Ni(), t[ja] = 0;
                    var r = n.getKeyframes(),
                        i = n.getTiming();
                    La(s(), t[Ya], 0, JSON.stringify(r), JSON.stringify(i), a)
                }
                if (t[ja]++ < Aa) {
                    var o = null;
                    switch (e) {
                        case "play":
                            o = 1;
                            break;
                        case "pause":
                            o = 2;
                            break;
                        case "cancel":
                            o = 3;
                            break;
                        case "finish":
                            o = 4;
                            break;
                        case "commitStyles":
                            o = 5
                    }
                    o && La(s(), t[Ya], o)
                }
            }
        }
    }

    function Ha(t, e, n) {
        return void 0 === e && (e = null), void 0 === n && (n = null), rt(this, void 0, void 0, (function() {
            var a, r, i, u, c, l, d, f, p, h, v, g, m, b, w, k, S, T, E, O, M, N, x, C, D, P, X, Y, j;
            return it(this, (function(A) {
                switch (A.label) {
                    case 0:
                        switch (a = n || s(), r = [a, t], t) {
                            case 8:
                                return [3, 1];
                            case 7:
                                return [3, 2];
                            case 45:
                            case 46:
                                return [3, 3];
                            case 44:
                                return [3, 4];
                            case 5:
                            case 6:
                                return [3, 5]
                        }
                        return [3, 12];
                    case 1:
                        return i = Oe, r.push(i.width), r.push(i.height), _(t, i.width, i.height), Sr(r), [3, 12];
                    case 2:
                        for (u = 0, c = Va; u < c.length; u++) l = c[u], (r = [l.time, 7]).push(l.data.id), r.push(l.data.interaction), r.push(l.data.visibility), r.push(l.data.name), Sr(r);
                        return rr(), [3, 12];
                    case 3:
                        for (d = 0, f = ma; d < f.length; d++) m = f[d], (r = [m.time, m.event]).push(m.data.id), r.push(m.data.operation), r.push(m.data.newIds), Sr(r);
                        for (p = 0, h = ga; p < h.length; p++) m = h[p], (r = [m.time, m.event]).push(m.data.id), r.push(m.data.operation), r.push(m.data.cssRules), Sr(r);
                        return Ma(), [3, 12];
                    case 4:
                        for (v = 0, g = xa; v < g.length; v++) m = g[v], (r = [m.time, m.event]).push(m.data.id), r.push(m.data.operation), r.push(m.data.keyFrames), r.push(m.data.timing), r.push(m.data.timeline), r.push(m.data.targetId), Sr(r);
                        return Ra(), [3, 12];
                    case 5:
                        if (2 === be(e)) return [3, 12];
                        if (!((b = ie()).length > 0)) return [3, 11];
                        w = 0, k = b, A.label = 6;
                    case 6:
                        return w < k.length ? (S = k[w], 0 !== (T = be(e)) ? [3, 8] : [4, Se(e)]) : [3, 10];
                    case 7:
                        T = A.sent(), A.label = 8;
                    case 8:
                        if (2 === T) return [3, 10];
                        for (E = S.data, O = S.metadata.active, M = S.metadata.suspend, N = S.metadata.privacy, x = function(t) {
                                var e = t.metadata.privacy;
                                return "*T" === t.data.tag && !(0 === e || 1 === e)
                            }(S), C = 0, D = O ? ["tag", "attributes", "value"] : ["tag"]; C < D.length; C++)
                            if (E[P = D[C]] || "" === E[P]) switch (P) {
                                case "tag":
                                    X = qa(S), Y = x ? -1 : 1, r.push(S.id * Y), S.parent && O && (r.push(S.parent), S.previous && r.push(S.previous)), r.push(M ? "*M" : E[P]), X && 2 === X.length && r.push("".concat("#").concat(Ua(X[0]), ".").concat(Ua(X[1])));
                                    break;
                                case "attributes":
                                    for (j in E[P]) void 0 !== E[P][j] && r.push(Fa(j, E[P][j], N));
                                    break;
                                case "value":
                                    Ot(S.metadata.fraud, S.id, E[P]), r.push(y(E[P], E.tag, N, x))
                            }
                        A.label = 9;
                    case 9:
                        return w++, [3, 6];
                    case 10:
                        6 === t && I(a), Sr(function(t) {
                            for (var e = [], n = {}, a = 0, r = null, i = 0; i < t.length; i++)
                                if ("string" == typeof t[i]) {
                                    var o = t[i],
                                        u = n[o] || -1;
                                    u >= 0 ? r ? r.push(u) : (r = [u], e.push(r), a++) : (r = null, e.push(o), n[o] = a++)
                                } else r = null, e.push(t[i]), a++;
                            return e
                        }(r), !o.lean), A.label = 11;
                    case 11:
                        return [3, 12];
                    case 12:
                        return [2]
                }
            }))
        }))
    }

    function qa(t) {
        if (null !== t.metadata.size && 0 === t.metadata.size.length) {
            var e = ee(t.id);
            if (e) return [Math.floor(100 * e.offsetWidth), Math.floor(100 * e.offsetHeight)]
        }
        return t.metadata.size
    }

    function Ua(t) {
        return t.toString(36)
    }

    function Fa(t, e, n) {
        return "".concat(t, "=").concat(y(e, 0 === t.indexOf("data-") ? "data-" : t, n))
    }
    var Va = [],
        Ba = null,
        Ja = {},
        Ga = [],
        Ka = !1,
        Za = null;

    function Qa(t, e) {
        !1 === Ba.has(t) && (Ba.set(t, e), (Za = null === Za && Ka ? new IntersectionObserver(er, {
            threshold: [0, .05, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
        }) : Za) && t && t.nodeType === Node.ELEMENT_NODE && Za.observe(t))
    }

    function $a(t) {
        return Ba && Ba.has(t)
    }

    function tr() {
        tr.dn = 24;
        for (var t = [], e = 0, n = Ga; e < n.length; e++) {
            var a = n[e],
                r = Gt(a.node);
            r ? (a.state.data.id = r, Ja[r] = a.state.data, Va.push(a.state)) : t.push(a)
        }
        Ga = t, Va.length > 0 && Ha(7)
    }

    function er(t) {
        for (var e = 0, n = t; e < n.length; e++) {
            var a = n[e],
                r = a.target,
                i = a.boundingClientRect,
                o = a.intersectionRect,
                u = a.rootBounds;
            if (Ba.has(r) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
                var c = r ? Gt(r) : null,
                    s = c in Ja ? Ja[c] : {
                        id: c,
                        name: Ba.get(r),
                        interaction: 16,
                        visibility: 0
                    },
                    l = (o ? o.width * o.height * 1 / (u.width * u.height) : 0) > .05 || a.intersectionRatio > .8,
                    d = (l || 10 == s.visibility) && Math.abs(i.top) + u.height > i.height;
                nr(r, s, s.interaction, d ? 13 : l ? 10 : 0), s.visibility >= 13 && Za && Za.unobserve(r)
            }
        }
        Va.length > 0 && Ha(7)
    }

    function nr(t, e, n, a) {
        var r = n > e.interaction || a > e.visibility;
        e.interaction = n > e.interaction ? n : e.interaction, e.visibility = a > e.visibility ? a : e.visibility, e.id ? (e.id in Ja && r || !(e.id in Ja)) && (Ja[e.id] = e, Va.push(ar(e))) : Ga.push({
            node: t,
            state: ar(e)
        })
    }

    function ar(t) {
        return {
            time: s(),
            data: {
                id: t.id,
                interaction: t.interaction,
                visibility: t.visibility,
                name: t.name
            }
        }
    }

    function rr() {
        Va = []
    }

    function ir(t) {
        var e = t.composed && t.composedPath ? t.composedPath() : null,
            n = e && e.length > 0 ? e[0] : t.target;
        return Jn = s() + 3e3, Kn = s() + o.criticalMs, n && n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    }

    function or(t, e, n) {
        void 0 === n && (n = null);
        var a = {
            id: 0,
            hash: null,
            privacy: 2,
            node: t
        };
        if (t) {
            var r = ne(t);
            if (null !== r) {
                var i = r.metadata;
                a.id = r.id, a.hash = r.hash, a.privacy = i.privacy, r.region && function(t, e) {
                    var n = ee(t),
                        a = t in Ja ? Ja[t] : {
                            id: t,
                            visibility: 0,
                            interaction: 16,
                            name: Ba.get(n)
                        },
                        r = 16;
                    switch (e) {
                        case 9:
                            r = 20;
                            break;
                        case 27:
                            r = 30
                    }
                    nr(n, a, r, a.visibility)
                }(r.region, e), i.fraud && Ot(i.fraud, r.id, n || r.data.value)
            }
        }
        return a
    }

    function ur(t, e) {
        return void 0 === e && (e = null), rt(this, void 0, void 0, (function() {
            var n, a, r, i, o, u, c, l, d, f, p, h, v, g, m, w, k, S, T, E, O, M, N, x, I, D, P, X, Y, j, A, R, L, z, W;
            return it(this, (function(H) {
                switch (n = e || s(), a = [n, t], t) {
                    case 13:
                    case 14:
                    case 12:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                        for (r = 0, i = Ge; r < i.length; r++) z = i[r], (o = or(z.data.target, z.event)).id > 0 && ((a = [z.time, z.event]).push(o.id), a.push(z.data.x), a.push(z.data.y), void 0 !== z.data.id && (a.push(z.data.id), void 0 !== z.data.isPrimary && a.push(z.data.isPrimary.toString())), Sr(a), _(z.event, z.data.x, z.data.y, z.time));
                        rn();
                        break;
                    case 9:
                        for (u = 0, c = Xe; u < c.length; u++) z = c[u], l = or(z.data.target, z.event, z.data.text), a = [z.time, z.event], d = l.hash ? l.hash.join(".") : "", a.push(l.id), a.push(z.data.x), a.push(z.data.y), a.push(z.data.eX), a.push(z.data.eY), a.push(z.data.button), a.push(z.data.reaction), a.push(z.data.context), a.push(y(z.data.text, "click", l.privacy)), a.push(b(z.data.link)), a.push(d), a.push(z.data.trust), a.push(z.data.isFullText), Sr(a), dr(z.time, z.event, d, z.data.x, z.data.y, z.data.reaction, z.data.context);
                        Le();
                        break;
                    case 38:
                        for (f = 0, p = ze; f < p.length; f++) z = p[f], a = [z.time, z.event], (A = or(z.data.target, z.event)).id > 0 && (a.push(A.id), a.push(z.data.action), Sr(a));
                        He();
                        break;
                    case 11:
                        h = Je, a.push(h.width), a.push(h.height), _(t, h.width, h.height), ln(), Sr(a);
                        break;
                    case 26:
                        v = On, a.push(v.name), a.push(v.persisted), Cn(), Sr(a);
                        break;
                    case 27:
                        for (g = 0, m = Ue; g < m.length; g++) z = m[g], w = or(z.data.target, z.event, z.data.value), (a = [z.time, z.event]).push(w.id), a.push(y(z.data.value, "input", w.privacy, !1, z.data.type)), Sr(a);
                        Be();
                        break;
                    case 21:
                        (k = bn) && (S = or(k.start, t), T = or(k.end, t), a.push(S.id), a.push(k.startOffset), a.push(T.id), a.push(k.endOffset), En(), Sr(a));
                        break;
                    case 10:
                        for (E = 0, O = dn; E < O.length; E++) z = O[E], M = or(z.data.target, z.event), N = or(z.data.top, z.event), x = or(z.data.bottom, z.event), I = (null == N ? void 0 : N.hash) ? N.hash.join(".") : "", D = (null == x ? void 0 : x.hash) ? x.hash.join(".") : "", M.id > 0 && ((a = [z.time, z.event]).push(M.id), a.push(z.data.x), a.push(z.data.y), a.push(I), a.push(D), Sr(a), _(z.event, z.data.x, z.data.y, z.time));
                        dn = [], fn = null, pn = null;
                        break;
                    case 42:
                        for (P = 0, X = _e; P < X.length; P++) z = X[P], a = [z.time, z.event], (A = or(z.data.target, z.event)).id > 0 && ((a = [z.time, z.event]).push(A.id), a.push(z.data.type), a.push(y(z.data.value, "change", A.privacy)), a.push(y(z.data.checksum, "checksum", A.privacy)), Sr(a));
                        Ce();
                        break;
                    case 39:
                        for (Y = 0, j = Nn; Y < j.length; Y++) z = j[Y], a = [z.time, z.event], (A = or(z.data.target, z.event)).id > 0 && (a.push(A.id), Sr(a));
                        _n();
                        break;
                    case 22:
                        for (R = 0, L = sr; R < L.length; R++) z = L[R], (a = [z.time, z.event]).push(z.data.type), a.push(z.data.hash), a.push(z.data.x), a.push(z.data.y), a.push(z.data.reaction), a.push(z.data.context), Sr(a, !1);
                        lr();
                        break;
                    case 28:
                        W = Mn, a.push(W.visible), Sr(a), C(n, W.visible), Pn()
                }
                return [2]
            }))
        }))
    }
    var cr = [],
        sr = [];

    function lr() {
        sr = []
    }

    function dr(t, e, n, a, r, i, o) {
        void 0 === i && (i = 1), void 0 === o && (o = 0), cr.push({
            time: t,
            event: 22,
            data: {
                type: e,
                hash: n,
                x: a,
                y: r,
                reaction: i,
                context: o
            }
        }), _(e, a, r, t)
    }
    var fr, pr, hr, vr, gr, mr = 0,
        yr = 0,
        br = null,
        wr = 0;

    function kr() {
        vr = !0, mr = 0, yr = 0, wr = 0, fr = [], pr = [], hr = {}, gr = null
    }

    function Sr(t, e) {
        if (void 0 === e && (e = !0), vr) {
            var n = s(),
                a = t.length > 1 ? t[1] : null,
                r = JSON.stringify(t);
            switch (a) {
                case 5:
                    mr += r.length;
                case 37:
                case 6:
                case 43:
                case 45:
                case 46:
                    yr += r.length, fr.push(r);
                    break;
                default:
                    pr.push(r)
            }
            L(25);
            var i = function() {
                var t = !1 === o.lean && mr > 0 ? 100 : Xi.sequence * o.delay;
                return "string" == typeof o.upload ? Math.max(Math.min(t, 3e4), 100) : o.delay
            }();
            n - wr > 2 * i && (q(br), br = null), e && null === br && (25 !== a && B(), br = H(Er, i), wr = n, ti(yr))
        }
    }

    function Tr() {
        q(br), Er(!0), mr = 0, yr = 0, wr = 0, fr = [], pr = [], hr = {}, gr = null, vr = !1
    }

    function Er(t) {
        return void 0 === t && (t = !1), rt(this, void 0, void 0, (function() {
            var e, n, a, r, i, u, c, s;
            return it(this, (function(l) {
                switch (l.label) {
                    case 0:
                        return br = null, (e = !1 === o.lean && yr > 0 && (yr < 1048576 || Xi.sequence > 0)) && W(1, 1), tr(),
                            function() {
                                var t = [];
                                sr = [];
                                for (var e = Xi.start + Xi.duration, n = Math.max(e - 2e3, 0), a = 0, r = cr; a < r.length; a++) {
                                    var i = r[a];
                                    i.time >= n && (i.time <= e && sr.push(i), t.push(i))
                                }
                                cr = t, ur(22)
                            }(), St(),
                            function() {
                                for (var t = 0, e = Ta; t < e.length; t++) {
                                    var n = e[t],
                                        a = n == document ? -1 : Gt(n),
                                        r = a in Sa ? Sa[a] : null;
                                    Oa(document, r)
                                }
                            }(), n = !0 === t, a = JSON.stringify(Ai(n)), r = "[".concat(pr.join(), "]"), i = e ? "[".concat(fr.join(), "]") : "", u = function(t) {
                                return t.p.length > 0 ? '{"e":'.concat(t.e, ',"a":').concat(t.a, ',"p":').concat(t.p, "}") : '{"e":'.concat(t.e, ',"a":').concat(t.a, "}")
                            }({
                                e: a,
                                a: r,
                                p: i
                            }), n ? (s = null, [3, 3]) : [3, 1];
                    case 1:
                        return [4, vt(u)];
                    case 2:
                        s = l.sent(), l.label = 3;
                    case 3:
                        return z(2, (c = s) ? c.length : u.length), Or(u, c, Xi.sequence, n), pr = [], e && (fr = [], yr = 0, mr = 0), [2]
                }
            }))
        }))
    }

    function Or(t, e, n, a) {
        if (void 0 === a && (a = !1), "string" == typeof o.upload) {
            var r = o.upload,
                i = !1;
            if (a && "sendBeacon" in navigator) try {
                (i = navigator.sendBeacon.bind(navigator)(r, t)) && Nr(n)
            } catch (t) {}
            if (!1 === i) {
                n in hr ? hr[n].attempts++ : hr[n] = {
                    data: t,
                    attempts: 1
                };
                var u = new XMLHttpRequest;
                u.open("POST", r, !0), u.timeout = 15e3, u.ontimeout = function() {
                    Li(new Error("".concat("Timeout", " : ").concat(r)))
                }, null !== n && (u.onreadystatechange = function() {
                    zi(Mr)(u, n)
                }), u.withCredentials = !0, e ? (u.setRequestHeader("Accept", "application/x-clarity-gzip"), u.send(e)) : u.send(t)
            }
        } else if (o.upload) {
            (0, o.upload)(t), Nr(n)
        }
    }

    function Mr(t, e) {
        var n = hr[e];
        t && 4 === t.readyState && n && ((t.status < 200 || t.status > 208) && n.attempts <= 1 ? t.status >= 400 && t.status < 500 ? ei(6) : (0 === t.status && (o.upload = o.fallback ? o.fallback : o.upload), Or(n.data, null, e)) : (gr = {
            sequence: e,
            attempts: n.attempts,
            status: t.status
        }, n.attempts > 1 && Qr(2), 200 === t.status && t.responseText && function(t) {
            for (var e = t && t.length > 0 ? t.split("\n") : [], n = 0, a = e; n < a.length; n++) {
                var r = a[n],
                    i = r && r.length > 0 ? r.split(/ (.*)/) : [""];
                switch (i[0]) {
                    case "END":
                        ei(6);
                        break;
                    case "UPGRADE":
                        nt("Auto");
                        break;
                    case "ACTION":
                        o.action && i.length > 1 && o.action(i[1]);
                        break;
                    case "EXTRACT":
                        i.length > 1 && qr(i[1]);
                        break;
                    case "SIGNAL":
                        i.length > 1 && yt(i[1])
                }
            }
        }(t.responseText), 0 === t.status && (Or(n.data, null, e, !0), ei(3)), t.status >= 200 && t.status <= 208 && Nr(e), delete hr[e]))
    }

    function Nr(t) {
        1 === t && (Ei(), Ti())
    }
    var xr, _r = {};

    function Ir(t) {
        Ir.dn = 4;
        var e = t.error || t;
        return e.message in _r || (_r[e.message] = 0), _r[e.message]++ >= 5 || e && e.message && (xr = {
            message: e.message,
            line: t.lineno,
            column: t.colno,
            stack: e.stack,
            source: t.filename
        }, Cr(31)), !0
    }

    function Cr(t) {
        return rt(this, void 0, void 0, (function() {
            var e;
            return it(this, (function(n) {
                switch (e = [s(), t], t) {
                    case 31:
                        e.push(xr.message), e.push(xr.line), e.push(xr.column), e.push(xr.stack), e.push(b(xr.source)), Sr(e);
                        break;
                    case 33:
                        Dr && (e.push(Dr.code), e.push(Dr.name), e.push(Dr.message), e.push(Dr.stack), e.push(Dr.severity), Sr(e, !1));
                        break;
                    case 41:
                        Tt && (e.push(Tt.id), e.push(Tt.target), e.push(Tt.checksum), Sr(e, !1))
                }
                return [2]
            }))
        }))
    }
    var Dr, Pr = {};

    function Xr(t, e, n, a, r) {
        void 0 === n && (n = null), void 0 === a && (a = null), void 0 === r && (r = null);
        var i = n ? "".concat(n, "|").concat(a) : "";
        t in Pr && Pr[t].indexOf(i) >= 0 || (Dr = {
            code: t,
            name: n,
            message: a,
            stack: r,
            severity: e
        }, t in Pr ? Pr[t].push(i) : Pr[t] = [i], Cr(33))
    }
    var Yr, jr = {},
        Ar = new Set,
        Rr = {},
        Lr = {},
        zr = {},
        Wr = {};

    function Hr() {
        Vr()
    }

    function qr(t) {
        try {
            var e = t && t.length > 0 ? t.split(/ (.*)/) : [""],
                n = e[0].split(/\|(.*)/),
                a = parseInt(n[0]),
                r = n.length > 1 ? n[1] : "",
                i = e.length > 1 ? JSON.parse(e[1]) : {};
            for (var o in Rr[a] = {}, Lr[a] = {}, zr[a] = {}, Wr[a] = r, i) {
                var u = parseInt(o),
                    c = i[o],
                    s = 2;
                switch (c.startsWith("~") ? s = 0 : c.startsWith("!") && (s = 4), s) {
                    case 0:
                        var l = c.substring(1, c.length);
                        Rr[a][u] = Gr(l);
                        break;
                    case 2:
                        Lr[a][u] = c;
                        break;
                    case 4:
                        var d = c.substring(1, c.length);
                        zr[a][u] = d
                }
            }
        } catch (t) {
            Xr(8, 1, t ? t.name : null)
        }
    }

    function Ur(t) {
        return JSON.parse(JSON.stringify(t))
    }

    function Fr() {
        try {
            for (var t in Rr) {
                var e = parseInt(t);
                if ("" == Wr[e] || document.querySelector(Wr[e])) {
                    var n = Rr[e];
                    for (var a in n) {
                        var r = parseInt(a),
                            i = (p = Kr(Ur(n[r]))) ? JSON.stringify(p).substring(0, 1e4) : p;
                        i && Br(e, r, i)
                    }
                    var o = Lr[e];
                    for (var u in o) {
                        var c = parseInt(u),
                            s = document.querySelectorAll(o[c]);
                        if (s) Br(e, c, Array.from(s).map((function(t) {
                            return t.textContent
                        })).join("<SEP>").substring(0, 1e4))
                    }
                    var l = zr[e];
                    for (var d in l) {
                        var f = parseInt(d);
                        Br(e, f, te(l[f]).trim().substring(0, 1e4))
                    }
                }
            }
            Ar.size > 0 && Qr(40)
        } catch (t) {
            Xr(5, 1, t ? t.name : null)
        }
        var p
    }

    function Vr() {
        Ar.clear()
    }

    function Br(t, e, n) {
        var a, r = !1;
        t in jr || (jr[t] = {}, r = !0), a = zr[t], 0 == Object.keys(a).length || e in jr[t] && jr[t][e] == n || (r = !0), jr[t][e] = n, r && Ar.add(t)
    }

    function Jr() {
        Vr()
    }

    function Gr(t) {
        for (var e = [], n = t.split("."); n.length > 0;) {
            var a = n.shift(),
                r = a.indexOf("["),
                i = a.indexOf("{"),
                o = a.indexOf("}");
            e.push({
                name: r > 0 ? a.substring(0, r) : i > 0 ? a.substring(0, i) : a,
                type: r > 0 ? 1 : i > 0 ? 2 : 3,
                condition: i > 0 ? a.substring(i + 1, o) : null
            })
        }
        return e
    }

    function Kr(t, e) {
        if (void 0 === e && (e = window), 0 == t.length) return e;
        var n, a = t.shift();
        if (e && e[a.name]) {
            var r = e[a.name];
            if (1 !== a.type && Zr(r, a.condition)) n = Kr(t, r);
            else if (Array.isArray(r)) {
                for (var i = [], o = 0, u = r; o < u.length; o++) {
                    var c = u[o];
                    if (Zr(c, a.condition)) {
                        var s = Kr(t, c);
                        s && i.push(s)
                    }
                }
                n = i
            }
            return n
        }
        return null
    }

    function Zr(t, e) {
        if (e) {
            var n = e.split(":");
            return n.length > 1 ? t[n[0]] == n[1] : t[n[0]]
        }
        return !0
    }

    function Qr(t) {
        var e = [s(), t];
        switch (t) {
            case 4:
                var n = O;
                n && ((e = [n.time, n.event]).push(n.data.visible), e.push(n.data.docWidth), e.push(n.data.docHeight), e.push(n.data.screenWidth), e.push(n.data.screenHeight), e.push(n.data.scrollX), e.push(n.data.scrollY), e.push(n.data.pointerX), e.push(n.data.pointerY), e.push(n.data.activityTime), e.push(n.data.scrollTime), e.push(n.data.pointerTime), e.push(n.data.moveX), e.push(n.data.moveY), e.push(n.data.moveTime), e.push(n.data.downX), e.push(n.data.downY), e.push(n.data.downTime), e.push(n.data.upX), e.push(n.data.upY), e.push(n.data.upTime), e.push(n.data.pointerPrevX), e.push(n.data.pointerPrevY), e.push(n.data.pointerPrevTime), Sr(e, !1)), x();
                break;
            case 25:
                e.push(j.gap), Sr(e);
                break;
            case 35:
                e.push(Yr.check), Sr(e, !1);
                break;
            case 3:
                e.push(et.key), Sr(e);
                break;
            case 2:
                e.push(gr.sequence), e.push(gr.attempts), e.push(gr.status), Sr(e, !1);
                break;
            case 24:
                X.key && e.push(X.key), e.push(X.value), Sr(e);
                break;
            case 34:
                var a = Object.keys(ot);
                if (a.length > 0) {
                    for (var r = 0, i = a; r < i.length; r++) {
                        var o = i[r];
                        e.push(o), e.push(ot[o])
                    }
                    dt(), Sr(e, !1)
                }
                break;
            case 0:
                var u = Object.keys(R);
                if (u.length > 0) {
                    for (var c = 0, l = u; c < l.length; c++) {
                        var d = l[c],
                            f = parseInt(d, 10);
                        e.push(f), e.push(Math.round(R[d]))
                    }
                    R = {}, Sr(e, !1)
                }
                break;
            case 1:
                var p = Object.keys(ii);
                if (p.length > 0) {
                    for (var h = 0, v = p; h < v.length; h++) {
                        var g = v[h];
                        f = parseInt(g, 10);
                        e.push(f), e.push(ii[g])
                    }
                    di(), Sr(e, !1)
                }
                break;
            case 36:
                var m = Object.keys(K);
                if (m.length > 0) {
                    for (var y = 0, b = m; y < b.length; y++) {
                        var w = b[y];
                        f = parseInt(w, 10);
                        e.push(f), e.push([].concat.apply([], K[w]))
                    }
                    $(), Sr(e, !1)
                }
                break;
            case 40:
                Ar.forEach((function(t) {
                    e.push(t);
                    var n = [];
                    for (var a in jr[t]) {
                        var r = parseInt(a, 10);
                        n.push(r), n.push(jr[t][a])
                    }
                    e.push(n)
                })), Vr(), Sr(e, !1)
        }
    }

    function $r() {
        Yr = {
            check: 0
        }
    }

    function ti(t) {
        if (0 === Yr.check) {
            var e = Yr.check;
            e = Xi.sequence >= 128 ? 1 : e, e = Xi.pageNum >= 128 ? 7 : e, e = s() > 72e5 ? 2 : e, (e = t > 10485760 ? 2 : e) !== Yr.check && ei(e)
        }
    }

    function ei(t) {
        Yr.check = t, 5 !== t && (Si(), xo())
    }

    function ni() {
        0 !== Yr.check && Qr(35)
    }

    function ai() {
        Yr = null
    }
    var ri = null,
        ii = null,
        oi = !1;

    function ui() {
        ri = {}, ii = {}, oi = !1
    }

    function ci() {
        ri = {}, ii = {}, oi = !1
    }

    function si(t, e) {
        if (e && (e = "".concat(e), t in ri || (ri[t] = []), ri[t].indexOf(e) < 0)) {
            if (ri[t].length > 128) return void(oi || (oi = !0, ei(5)));
            ri[t].push(e), t in ii || (ii[t] = []), ii[t].push(e)
        }
    }

    function li() {
        Qr(1)
    }

    function di() {
        ii = {}, oi = !1
    }

    function fi(t) {
        si(36, t.toString())
    }
    var pi = null,
        hi = [],
        vi = 0,
        gi = null;

    function mi() {
        var t, e, n;
        gi = null;
        var a = navigator && "userAgent" in navigator ? navigator.userAgent : "",
            r = null !== (n = null === (e = null === (t = null === Intl || void 0 === Intl ? void 0 : Intl.DateTimeFormat()) || void 0 === t ? void 0 : t.resolvedOptions()) || void 0 === e ? void 0 : e.timeZone) && void 0 !== n ? n : "",
            i = (new Date).getTimezoneOffset().toString(),
            u = window.location.ancestorOrigins ? Array.from(window.location.ancestorOrigins).toString() : "",
            c = document && document.title ? document.title : "";
        vi = a.indexOf("Electron") > 0 ? 1 : 0;
        var s, l = function() {
                var t = {
                        session: Ni(),
                        ts: Math.round(Date.now()),
                        count: 1,
                        upgrade: null,
                        upload: ""
                    },
                    e = Ii("_clsk", !o.includeSubdomains);
                if (e) {
                    var n = e.split("|");
                    n.length >= 5 && t.ts - xi(n[1]) < 18e5 && (t.session = n[0], t.count = xi(n[2]) + 1, t.upgrade = xi(n[3]), t.upload = n.length >= 6 ? "".concat("https://").concat(n[5], "/").concat(n[4]) : "".concat("https://").concat(n[4]))
                }
                return t
            }(),
            f = _i(),
            p = o.projectId || d(location.host);
        pi = {
            projectId: p,
            userId: f.id,
            sessionId: l.session,
            pageNum: l.count
        }, o.lean = o.track && null !== l.upgrade ? 0 === l.upgrade : o.lean, o.upload = o.track && "string" == typeof o.upload && l.upload && l.upload.length > "https://".length ? l.upload : o.upload, si(0, a), si(3, c), si(1, b(location.href, !!vi)), si(2, document.referrer), si(15, function() {
            var t = Ni();
            if (o.track && Oi(window, "sessionStorage")) {
                var e = sessionStorage.getItem("_cltk");
                t = e || t, sessionStorage.setItem("_cltk", t)
            }
            return t
        }()), si(16, document.documentElement.lang), si(17, document.dir), si(26, "".concat(window.devicePixelRatio)), si(28, f.dob.toString()), si(29, f.version.toString()), si(33, u), si(34, r), si(35, i), W(0, l.ts), W(1, 0), W(35, vi), navigator && (si(9, navigator.language), W(33, navigator.hardwareConcurrency), W(32, navigator.maxTouchPoints), W(34, Math.round(navigator.deviceMemory)), (s = navigator.userAgentData) && s.getHighEntropyValues ? s.getHighEntropyValues(["model", "platform", "platformVersion", "uaFullVersion"]).then((function(t) {
            var e;
            si(22, t.platform), si(23, t.platformVersion), null === (e = t.brands) || void 0 === e || e.forEach((function(t) {
                si(24, t.name + "~" + t.version)
            })), si(25, t.model), W(27, t.mobile ? 1 : 0)
        })) : si(22, navigator.platform)), screen && (W(14, Math.round(screen.width)), W(15, Math.round(screen.height)), W(16, Math.round(screen.colorDepth)));
        for (var h = 0, v = o.cookies; h < v.length; h++) {
            var g = v[h],
                m = Ii(g);
            m && ut(g, m)
        }! function(t) {
            fi(t ? 1 : 0)
        }(o.track), Mi(f)
    }

    function yi() {
        gi = null, pi = null, hi.forEach((function(t) {
            t.called = !1
        }))
    }

    function bi(t, e, n) {
        void 0 === e && (e = !0), void 0 === n && (n = !1);
        var a = o.lean ? 0 : 1,
            r = !1;
        pi && (a || !1 === e) && (t(pi, !o.lean), r = !0), !n && r || hi.push({
            callback: t,
            wait: e,
            recall: n,
            called: r
        })
    }

    function wi() {
        return pi ? [pi.userId, pi.sessionId, pi.pageNum].join(".") : ""
    }

    function ki(t) {
        if (void 0 === t && (t = !0), !t) return o.track = !1, Di("_clsk", "", -Number.MAX_VALUE), Di("_clck", "", -Number.MAX_VALUE), xo(), void window.setTimeout(No, 250);
        eo() && (o.track = !0, Mi(_i(), 1), Ei(), fi(2))
    }

    function Si() {
        Di("_clsk", "", 0)
    }

    function Ti() {
        ! function(t) {
            if (hi.length > 0)
                for (var e = 0; e < hi.length; e++) {
                    var n = hi[e];
                    !n.callback || n.called || n.wait && !t || (n.callback(pi, !o.lean), n.called = !0, n.recall || (hi.splice(e, 1), e--))
                }
        }(o.lean ? 0 : 1)
    }

    function Ei() {
        if (pi && o.track) {
            var t = Math.round(Date.now()),
                e = o.upload && "string" == typeof o.upload ? o.upload.replace("https://", "") : "",
                n = o.lean ? 0 : 1;
            Di("_clsk", [pi.sessionId, t, pi.pageNum, n, e].join("|"), 1)
        }
    }

    function Oi(t, e) {
        try {
            return !!t[e]
        } catch (t) {
            return !1
        }
    }

    function Mi(t, e) {
        void 0 === e && (e = null), e = null === e ? t.consent : e;
        var n = Math.ceil((Date.now() + 31536e6) / 864e5),
            a = 0 === t.dob ? null === o.dob ? 0 : o.dob : t.dob;
        (null === t.expiry || Math.abs(n - t.expiry) >= 1 || t.consent !== e || t.dob !== a) && Di("_clck", [pi.userId, 2, n.toString(36), e, a].join("|"), 365)
    }

    function Ni() {
        var t = Math.floor(Math.random() * Math.pow(2, 32));
        return window && window.crypto && window.crypto.getRandomValues && Uint32Array && (t = window.crypto.getRandomValues(new Uint32Array(1))[0]), t.toString(36)
    }

    function xi(t, e) {
        return void 0 === e && (e = 10), parseInt(t, e)
    }

    function _i() {
        var t = {
                id: Ni(),
                version: 0,
                expiry: null,
                consent: 0,
                dob: 0
            },
            e = Ii("_clck", !o.includeSubdomains);
        if (e && e.length > 0) {
            for (var n = e.split("|"), a = 0, r = 0, i = document.cookie.split(";"); r < i.length; r++) {
                a += "_clck" === i[r].split("=")[0].trim() ? 1 : 0
            }
            if (1 === n.length || a > 1) {
                var u = "".concat(";").concat("expires=").concat(new Date(0).toUTCString()).concat(";path=/");
                document.cookie = "".concat("_clck", "=").concat(u), document.cookie = "".concat("_clsk", "=").concat(u)
            }
            n.length > 1 && (t.version = xi(n[1])), n.length > 2 && (t.expiry = xi(n[2], 36)), n.length > 3 && 1 === xi(n[3]) && (t.consent = 1), n.length > 4 && xi(n[1]) > 1 && (t.dob = xi(n[4])), o.track = o.track || 1 === t.consent, t.id = o.track ? n[0] : t.id
        }
        return t
    }

    function Ii(t, e) {
        var n;
        if (void 0 === e && (e = !1), Oi(document, "cookie")) {
            var a = document.cookie.split(";");
            if (a)
                for (var r = 0; r < a.length; r++) {
                    var i = a[r].split("=");
                    if (i.length > 1 && i[0] && i[0].trim() === t) {
                        for (var o = Ci(i[1]), u = o[0], c = o[1]; u;) u = (n = Ci(c))[0], c = n[1];
                        return e ? c.endsWith("".concat("~", "1")) ? c.substring(0, c.length - 2) : null : c
                    }
                }
        }
        return null
    }

    function Ci(t) {
        try {
            var e = decodeURIComponent(t);
            return [e != t, e]
        } catch (t) {}
        return [!1, t]
    }

    function Di(t, e, n) {
        if ((o.track || "" == e) && (navigator && navigator.cookieEnabled || Oi(document, "cookie"))) {
            var a = function(t) {
                    return encodeURIComponent(t)
                }(e),
                r = new Date;
            r.setDate(r.getDate() + n);
            var i = r ? "expires=" + r.toUTCString() : "",
                u = "".concat(t, "=").concat(a).concat(";").concat(i).concat(";path=/");
            try {
                if (null === gi) {
                    for (var c = location.hostname ? location.hostname.split(".") : [], s = c.length - 1; s >= 0; s--)
                        if (gi = ".".concat(c[s]).concat(gi || ""), s < c.length - 1 && (document.cookie = "".concat(u).concat(";").concat("domain=").concat(gi), Ii(t) === e)) return;
                    gi = ""
                }
            } catch (t) {
                gi = ""
            }
            document.cookie = gi ? "".concat(u).concat(";").concat("domain=").concat(gi) : u
        }
    }
    var Pi, Xi = null;

    function Yi() {
        var t = pi;
        Xi = {
            version: l,
            sequence: 0,
            start: 0,
            duration: 0,
            projectId: t.projectId,
            userId: t.userId,
            sessionId: t.sessionId,
            pageNum: t.pageNum,
            upload: 0,
            end: 0,
            applicationPlatform: 0,
            url: ""
        }
    }

    function ji() {
        Xi = null
    }

    function Ai(t) {
        return Xi.start = Xi.start + Xi.duration, Xi.duration = s() - Xi.start, Xi.sequence++, Xi.upload = t && "sendBeacon" in navigator ? 1 : 0, Xi.end = t ? 1 : 0, Xi.applicationPlatform = 0, Xi.url = b(location.href, !1, !0), [Xi.version, Xi.sequence, Xi.start, Xi.duration, Xi.projectId, Xi.userId, Xi.sessionId, Xi.pageNum, Xi.upload, Xi.end, Xi.applicationPlatform, Xi.url]
    }

    function Ri() {
        Pi = []
    }

    function Li(t) {
        if (Pi && -1 === Pi.indexOf(t.message)) {
            var e = o.report;
            if (e && e.length > 0) {
                var n = {
                    v: Xi.version,
                    p: Xi.projectId,
                    u: Xi.userId,
                    s: Xi.sessionId,
                    n: Xi.pageNum
                };
                t.message && (n.m = t.message), t.stack && (n.e = t.stack);
                var a = new XMLHttpRequest;
                a.open("POST", e, !0), a.send(JSON.stringify(n)), Pi.push(t.message)
            }
        }
        return t
    }

    function zi(t) {
        return function() {
            var e = performance.now();
            try {
                t.apply(this, arguments)
            } catch (t) {
                throw Li(t)
            }
            var n = performance.now() - e;
            z(4, n), n > 30 && (L(7), W(6, n), Xr(9, 0, "".concat(t.dn || t.name, "-").concat(n)))
        }
    }
    var Wi = [];

    function Hi(t, e, n, a, r) {
        void 0 === a && (a = !1), void 0 === r && (r = !0), n = zi(n);
        try {
            t[u("addEventListener")](e, n, {
                capture: a,
                passive: r
            }), Wi.push({
                event: e,
                target: t,
                listener: n,
                options: {
                    capture: a,
                    passive: r
                }
            })
        } catch (t) {}
    }

    function qi() {
        for (var t = 0, e = Wi; t < e.length; t++) {
            var n = e[t];
            try {
                n.target[u("removeEventListener")](n.event, n.listener, {
                    capture: n.options.capture,
                    passive: n.options.passive
                })
            } catch (t) {}
        }
        Wi = []
    }
    var Ui = null,
        Fi = null,
        Vi = null,
        Bi = 0;

    function Ji() {
        return !(Bi++ > 20) || (Xr(4, 0), !1)
    }

    function Gi() {
        Gi.dn = 1, Bi = 0, Vi !== Zi() && (xo(), window.setTimeout(Ki, 250))
    }

    function Ki() {
        No(), W(29, 1)
    }

    function Zi() {
        return location.href ? location.href.replace(location.hash, "") : location.href
    }
    var Qi = !1;

    function $i() {
        Qi = !0, c = performance.now() + performance.timeOrigin, ge(), qi(), Ri(), Vi = Zi(), Bi = 0, Hi(window, "popstate", Gi), null === Ui && (Ui = history.pushState, history.pushState = function() {
            Ui.apply(this, arguments), eo() && Ji() && Gi()
        }), null === Fi && (Fi = history.replaceState, history.replaceState = function() {
            Fi.apply(this, arguments), eo() && Ji() && Gi()
        })
    }

    function to() {
        Vi = null, Bi = 0, Ri(), qi(), ge(), c = 0, Qi = !1
    }

    function eo() {
        return Qi
    }

    function no() {
        no.dn = 2, No(), Y("clarity", "restart")
    }
    var ao = Object.freeze({
        __proto__: null,
        start: function t() {
            t.dn = 3,
                function() {
                    Et = [], W(26, navigator.webdriver ? 1 : 0);
                    try {
                        W(31, window.top == window.self || window.top == window ? 1 : 2)
                    } catch (t) {
                        W(31, 0)
                    }
                }(), Hi(window, "error", Ir), _r = {}, Pr = {}
        },
        stop: function() {
            Pr = {}
        }
    });

    function ro() {
        return rt(this, void 0, void 0, (function() {
            var t, e;
            return it(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return t = s(), we(e = {
                            id: wi(),
                            cost: 3
                        }), [4, jn(document, e, 0, t)];
                    case 1:
                        return n.sent(), Oa(document, t), [4, Ha(5, e, t)];
                    case 2:
                        return n.sent(), ke(e), [2]
                }
            }))
        }))
    }
    var io = Object.freeze({
        __proto__: null,
        hashText: te,
        start: function t() {
            t.dn = 20, Ne(), xe(), rr(), Za = null, Ba = new WeakMap, Ja = {}, Ga = [], Ka = !!window.IntersectionObserver, Ft(), o.delayDom ? Hi(window, "load", (function() {
                    $n()
                })) : $n(), me(ro, 1).then((function() {
                    zi(xe)(), zi(tr)(), zi(yn)()
                })), window.CSSStyleSheet && CSSStyleSheet.prototype && (null === ya && (ya = CSSStyleSheet.prototype.replace, CSSStyleSheet.prototype.replace = function() {
                    return eo() && (W(36, 1), Ea.indexOf(this[wa]) > -1 && Na(s(), this[wa], 1, arguments[0])), ya.apply(this, arguments)
                }), null === ba && (ba = CSSStyleSheet.prototype.replaceSync, CSSStyleSheet.prototype.replaceSync = function() {
                    return eo() && (W(36, 1), Ea.indexOf(this[wa]) > -1 && Na(s(), this[wa], 2, arguments[0])), ba.apply(this, arguments)
                })),
                function() {
                    if (window.Animation && window.Animation.prototype && window.KeyframeEffect && window.KeyframeEffect.prototype && window.KeyframeEffect.prototype.getKeyframes && window.KeyframeEffect.prototype.getTiming && (Ra(), za(Ia, "play"), za(Ca, "pause"), za(Da, "commitStyles"), za(Pa, "cancel"), za(Xa, "finish"), null === _a && (_a = Element.prototype.animate, Element.prototype.animate = function() {
                            var t = _a.apply(this, arguments);
                            return Wa(t, "play"), t
                        }), document.getAnimations))
                        for (var t = 0, e = document.getAnimations(); t < e.length; t++) {
                            var n = e[t];
                            "finished" === n.playState ? Wa(n, "finish") : "paused" === n.playState || "idle" === n.playState ? Wa(n, "pause") : "running" === n.playState && Wa(n, "play")
                        }
                }()
        },
        stop: function() {
            rr(), Ba = null, Ja = {}, Ga = [], Za && (Za.disconnect(), Za = null), Ka = !1, Vt(),
                function() {
                    for (var t = 0, e = An; t < e.length; t++) {
                        var n = e[t];
                        n && n.disconnect()
                    }
                    An = [], Gn = {}, Rn = [], Ln = [], Fn = [], Jn = 0, Vn = null, Kn = 0
                }(), Ne(), ka = {}, Sa = {}, Ta = [], Ea = [], Ma(), Ra()
        }
    });
    var oo = null;

    function uo() {
        oo = null
    }

    function co(t) {
        oo = {
                fetchStart: Math.round(t.fetchStart),
                connectStart: Math.round(t.connectStart),
                connectEnd: Math.round(t.connectEnd),
                requestStart: Math.round(t.requestStart),
                responseStart: Math.round(t.responseStart),
                responseEnd: Math.round(t.responseEnd),
                domInteractive: Math.round(t.domInteractive),
                domComplete: Math.round(t.domComplete),
                loadEventStart: Math.round(t.loadEventStart),
                loadEventEnd: Math.round(t.loadEventEnd),
                redirectCount: Math.round(t.redirectCount),
                size: t.transferSize ? t.transferSize : 0,
                type: t.type,
                protocol: t.nextHopProtocol,
                encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
                decodedSize: t.decodedBodySize ? t.decodedBodySize : 0
            },
            function(t) {
                rt(this, void 0, void 0, (function() {
                    var e, n;
                    return it(this, (function(a) {
                        return e = s(), n = [e, t], 29 === t && (n.push(oo.fetchStart), n.push(oo.connectStart), n.push(oo.connectEnd), n.push(oo.requestStart), n.push(oo.responseStart), n.push(oo.responseEnd), n.push(oo.domInteractive), n.push(oo.domComplete), n.push(oo.loadEventStart), n.push(oo.loadEventEnd), n.push(oo.redirectCount), n.push(oo.size), n.push(oo.type), n.push(oo.protocol), n.push(oo.encodedSize), n.push(oo.decodedSize), uo(), Sr(n)), [2]
                    }))
                }))
            }(29)
    }
    var so, lo = 0,
        fo = 1 / 0,
        po = 0,
        ho = 0,
        vo = [],
        go = new Map,
        mo = function() {
            return lo || 0
        },
        yo = function() {
            if (!vo.length) return -1;
            var t = Math.min(vo.length - 1, Math.floor((mo() - ho) / 50));
            return vo[t].latency
        },
        bo = function() {
            ho = mo(), vo.length = 0, go.clear()
        },
        wo = function(t) {
            if (t.interactionId && !(t.duration < 40)) {
                ! function(t) {
                    "interactionCount" in performance ? lo = performance.interactionCount : t.interactionId && (fo = Math.min(fo, t.interactionId), po = Math.max(po, t.interactionId), lo = po ? (po - fo) / 7 + 1 : 0)
                }(t);
                var e = vo[vo.length - 1],
                    n = go.get(t.interactionId);
                if (n || vo.length < 10 || t.duration > (null == e ? void 0 : e.latency)) {
                    if (n) t.duration > n.latency && (n.latency = t.duration);
                    else {
                        var a = {
                            id: t.interactionId,
                            latency: t.duration
                        };
                        go.set(a.id, a), vo.push(a)
                    }
                    vo.sort((function(t, e) {
                        return e.latency - t.latency
                    })), vo.length > 10 && vo.splice(10).forEach((function(t) {
                        return go.delete(t.id)
                    }))
                }
            }
        },
        ko = ["navigation", "resource", "longtask", "first-input", "layout-shift", "largest-contentful-paint", "event"];

    function So() {
        So.dn = 26;
        try {
            so && so.disconnect(), so = new PerformanceObserver(zi(To));
            for (var t = 0, e = ko; t < e.length; t++) {
                var n = e[t];
                PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 && ("layout-shift" === n && z(9, 0), so.observe({
                    type: n,
                    buffered: !0
                }))
            }
        } catch (t) {
            Xr(3, 1)
        }
    }

    function To(t) {
        To.dn = 27,
            function(t) {
                for (var e = (!("visibilityState" in document) || "visible" === document.visibilityState), n = 0; n < t.length; n++) {
                    var a = t[n];
                    switch (a.entryType) {
                        case "navigation":
                            co(a);
                            break;
                        case "resource":
                            var r = a.name;
                            si(4, Eo(r)), r !== o.upload && r !== o.fallback || W(28, a.duration);
                            break;
                        case "longtask":
                            L(7);
                            break;
                        case "first-input":
                            e && W(10, a.processingStart - a.startTime);
                            break;
                        case "event":
                            e && "PerformanceEventTiming" in window && "interactionId" in PerformanceEventTiming.prototype && (wo(a), si(37, yo().toString()));
                            break;
                        case "layout-shift":
                            e && !a.hadRecentInput && z(9, 1e3 * a.value);
                            break;
                        case "largest-contentful-paint":
                            e && W(8, a.startTime)
                    }
                }
            }(t.getEntries())
    }

    function Eo(t) {
        var e = document.createElement("a");
        return e.href = t, e.host
    }
    var Oo = Object.freeze({
            __proto__: null,
            start: function t() {
                t.dn = 25, uo(),
                    function() {
                        navigator && "connection" in navigator && si(27, navigator.connection.effectiveType), window.PerformanceObserver && PerformanceObserver.supportedEntryTypes ? "complete" !== document.readyState ? Hi(window, "load", H.bind(this, So, 0)) : So() : Xr(3, 0)
                    }()
            },
            stop: function() {
                so && so.disconnect(), so = null, bo(), uo()
            }
        }),
        Mo = [ao, io, Yn, Oo];

    function No(t) {
        void 0 === t && (t = null),
            function() {
                try {
                    var t = navigator && "globalPrivacyControl" in navigator && 1 == navigator.globalPrivacyControl;
                    return !1 === Qi && "undefined" != typeof Promise && window.MutationObserver && document.createTreeWalker && "now" in Date && "now" in performance && "undefined" != typeof WeakMap && !t
                } catch (t) {
                    return !1
                }
            }() && (! function(t) {
                if (null === t || Qi) return !1;
                for (var e in t) e in o && (o[e] = t[e])
            }(t), $i(), wt(), Mo.forEach((function(t) {
                return zi(t.start)()
            })), null === t && Do())
    }

    function xo() {
        eo() && (Mo.slice().reverse().forEach((function(t) {
            return zi(t.stop)()
        })), kt(), to(), void 0 !== Io && (Io[Co] = function() {
            (Io[Co].q = Io[Co].q || []).push(arguments), "start" === arguments[0] && Io[Co].q.unshift(Io[Co].q.pop()) && Do()
        }))
    }
    var _o = Object.freeze({
            __proto__: null,
            consent: ki,
            event: Y,
            hashText: te,
            identify: ct,
            metadata: bi,
            pause: function() {
                eo() && (Y("clarity", "pause"), null === he && (he = new Promise((function(t) {
                    ve = t
                }))))
            },
            resume: function() {
                eo() && (he && (ve(), he = null, null === pe && ye()), Y("clarity", "resume"))
            },
            set: ut,
            signal: function(t) {
                mt = t
            },
            start: No,
            stop: xo,
            upgrade: nt,
            version: l
        }),
        Io = window,
        Co = "clarity";

    function Do() {
        if (void 0 !== Io) {
            if (Io[Co] && Io[Co].v) return console.warn("Error CL001: Multiple Clarity tags detected.");
            var t = Io[Co] && Io[Co].q || [];
            for (Io[Co] = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    return _o[t].apply(_o, e)
                }, Io[Co].v = l; t.length > 0;) Io[Co].apply(Io, t.shift())
        }
    }
    Do()
}();