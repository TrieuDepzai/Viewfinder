!function(t) {
  var e = {};
  function i(n) {
      if (e[n])
          return e[n].exports;
      var o = e[n] = {
          i: n,
          l: !1,
          exports: {}
      };
      return t[n].call(o.exports, o, o.exports, i),
      o.l = !0,
      o.exports
  }
  i.m = t,
  i.c = e,
  i.d = function(t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: n
      })
  }
  ,
  i.r = function(t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
      }),
      Object.defineProperty(t, "__esModule", {
          value: !0
      })
  }
  ,
  i.t = function(t, e) {
      if (1 & e && (t = i(t)),
      8 & e)
          return t;
      if (4 & e && "object" == typeof t && t && t.__esModule)
          return t;
      var n = Object.create(null);
      if (i.r(n),
      Object.defineProperty(n, "default", {
          enumerable: !0,
          value: t
      }),
      2 & e && "string" != typeof t)
          for (var o in t)
              i.d(n, o, function(e) {
                  return t[e]
              }
              .bind(null, o));
      return n
  }
  ,
  i.n = function(t) {
      var e = t && t.__esModule ? function() {
          return t.default
      }
      : function() {
          return t
      }
      ;
      return i.d(e, "a", e),
      e
  }
  ,
  i.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
  }
  ,
  i.p = "",
  i(i.s = 2)
}([function(t, e, i) {
  var n, o, r;
  /*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
  o = "undefined" != typeof window ? window : this,
  r = function(i, o) {
      var r = []
        , s = r.slice
        , a = r.concat
        , l = r.push
        , c = r.indexOf
        , d = {}
        , u = d.toString
        , h = d.hasOwnProperty
        , f = {}
        , p = "1.11.2"
        , g = function(t, e) {
          return new g.fn.init(t,e)
      }
        , m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
        , v = /^-ms-/
        , y = /-([\da-z])/gi
        , b = function(t, e) {
          return e.toUpperCase()
      };
      function w(t) {
          var e = t.length
            , i = g.type(t);
          return "function" !== i && !g.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
      }
      g.fn = g.prototype = {
          jquery: p,
          constructor: g,
          selector: "",
          length: 0,
          toArray: function() {
              return s.call(this)
          },
          get: function(t) {
              return null != t ? 0 > t ? this[t + this.length] : this[t] : s.call(this)
          },
          pushStack: function(t) {
              var e = g.merge(this.constructor(), t);
              return e.prevObject = this,
              e.context = this.context,
              e
          },
          each: function(t, e) {
              return g.each(this, t, e)
          },
          map: function(t) {
              return this.pushStack(g.map(this, function(e, i) {
                  return t.call(e, i, e)
              }))
          },
          slice: function() {
              return this.pushStack(s.apply(this, arguments))
          },
          first: function() {
              return this.eq(0)
          },
          last: function() {
              return this.eq(-1)
          },
          eq: function(t) {
              var e = this.length
                , i = +t + (0 > t ? e : 0);
              return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
          },
          end: function() {
              return this.prevObject || this.constructor(null)
          },
          push: l,
          sort: r.sort,
          splice: r.splice
      },
      g.extend = g.fn.extend = function() {
          var t, e, i, n, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
          for ("boolean" == typeof s && (c = s,
          s = arguments[a] || {},
          a++),
          "object" == typeof s || g.isFunction(s) || (s = {}),
          a === l && (s = this,
          a--); l > a; a++)
              if (null != (o = arguments[a]))
                  for (n in o)
                      t = s[n],
                      s !== (i = o[n]) && (c && i && (g.isPlainObject(i) || (e = g.isArray(i))) ? (e ? (e = !1,
                      r = t && g.isArray(t) ? t : []) : r = t && g.isPlainObject(t) ? t : {},
                      s[n] = g.extend(c, r, i)) : void 0 !== i && (s[n] = i));
          return s
      }
      ,
      g.extend({
          expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function(t) {
              throw new Error(t)
          },
          noop: function() {},
          isFunction: function(t) {
              return "function" === g.type(t)
          },
          isArray: Array.isArray || function(t) {
              return "array" === g.type(t)
          }
          ,
          isWindow: function(t) {
              return null != t && t == t.window
          },
          isNumeric: function(t) {
              return !g.isArray(t) && t - parseFloat(t) + 1 >= 0
          },
          isEmptyObject: function(t) {
              var e;
              for (e in t)
                  return !1;
              return !0
          },
          isPlainObject: function(t) {
              var e;
              if (!t || "object" !== g.type(t) || t.nodeType || g.isWindow(t))
                  return !1;
              try {
                  if (t.constructor && !h.call(t, "constructor") && !h.call(t.constructor.prototype, "isPrototypeOf"))
                      return !1
              } catch (t) {
                  return !1
              }
              if (f.ownLast)
                  for (e in t)
                      return h.call(t, e);
              for (e in t)
                  ;
              return void 0 === e || h.call(t, e)
          },
          type: function(t) {
              return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? d[u.call(t)] || "object" : typeof t
          },
          globalEval: function(t) {
              t && g.trim(t) && (i.execScript || function(t) {
                  i.eval.call(i, t)
              }
              )(t)
          },
          camelCase: function(t) {
              return t.replace(v, "ms-").replace(y, b)
          },
          nodeName: function(t, e) {
              return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
          },
          each: function(t, e, i) {
              var n = 0
                , o = t.length
                , r = w(t);
              if (i) {
                  if (r)
                      for (; o > n && !1 !== e.apply(t[n], i); n++)
                          ;
                  else
                      for (n in t)
                          if (!1 === e.apply(t[n], i))
                              break
              } else if (r)
                  for (; o > n && !1 !== e.call(t[n], n, t[n]); n++)
                      ;
              else
                  for (n in t)
                      if (!1 === e.call(t[n], n, t[n]))
                          break;
              return t
          },
          trim: function(t) {
              return null == t ? "" : (t + "").replace(m, "")
          },
          makeArray: function(t, e) {
              var i = e || [];
              return null != t && (w(Object(t)) ? g.merge(i, "string" == typeof t ? [t] : t) : l.call(i, t)),
              i
          },
          inArray: function(t, e, i) {
              var n;
              if (e) {
                  if (c)
                      return c.call(e, t, i);
                  for (n = e.length,
                  i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                      if (i in e && e[i] === t)
                          return i
              }
              return -1
          },
          merge: function(t, e) {
              for (var i = +e.length, n = 0, o = t.length; i > n; )
                  t[o++] = e[n++];
              if (i != i)
                  for (; void 0 !== e[n]; )
                      t[o++] = e[n++];
              return t.length = o,
              t
          },
          grep: function(t, e, i) {
              for (var n = [], o = 0, r = t.length, s = !i; r > o; o++)
                  !e(t[o], o) !== s && n.push(t[o]);
              return n
          },
          map: function(t, e, i) {
              var n, o = 0, r = t.length, s = [];
              if (w(t))
                  for (; r > o; o++)
                      null != (n = e(t[o], o, i)) && s.push(n);
              else
                  for (o in t)
                      null != (n = e(t[o], o, i)) && s.push(n);
              return a.apply([], s)
          },
          guid: 1,
          proxy: function(t, e) {
              var i, n, o;
              return "string" == typeof e && (o = t[e],
              e = t,
              t = o),
              g.isFunction(t) ? (i = s.call(arguments, 2),
              (n = function() {
                  return t.apply(e || this, i.concat(s.call(arguments)))
              }
              ).guid = t.guid = t.guid || g.guid++,
              n) : void 0
          },
          now: function() {
              return +new Date
          },
          support: f
      }),
      g.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
          d["[object " + e + "]"] = e.toLowerCase()
      });
      var x = function(t) {
          var e, i, n, o, r, s, a, l, c, d, u, h, f, p, g, m, v, y, b, w = "sizzle" + 1 * new Date, x = t.document, A = 0, C = 0, S = st(), T = st(), _ = st(), E = function(t, e) {
              return t === e && (u = !0),
              0
          }, k = 1 << 31, I = {}.hasOwnProperty, F = [], D = F.pop, $ = F.push, L = F.push, O = F.slice, N = function(t, e) {
              for (var i = 0, n = t.length; n > i; i++)
                  if (t[i] === e)
                      return i;
              return -1
          }, M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", B = "[\\x20\\t\\r\\n\\f]", P = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", H = P.replace("w", "w#"), j = "\\[" + B + "*(" + P + ")(?:" + B + "*([*^$|!~]?=)" + B + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + B + "*\\]", V = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)", R = new RegExp(B + "+","g"), z = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$","g"), U = new RegExp("^" + B + "*," + B + "*"), Q = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"), q = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]","g"), G = new RegExp(V), K = new RegExp("^" + H + "$"), W = {
              ID: new RegExp("^#(" + P + ")"),
              CLASS: new RegExp("^\\.(" + P + ")"),
              TAG: new RegExp("^(" + P.replace("w", "w*") + ")"),
              ATTR: new RegExp("^" + j),
              PSEUDO: new RegExp("^" + V),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)","i"),
              bool: new RegExp("^(?:" + M + ")$","i"),
              needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)","i")
          }, Y = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tt = /[+~]/, et = /'|\\/g, it = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)","ig"), nt = function(t, e, i) {
              var n = "0x" + e - 65536;
              return n != n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
          }, ot = function() {
              h()
          };
          try {
              L.apply(F = O.call(x.childNodes), x.childNodes),
              F[x.childNodes.length].nodeType
          } catch (t) {
              L = {
                  apply: F.length ? function(t, e) {
                      $.apply(t, O.call(e))
                  }
                  : function(t, e) {
                      for (var i = t.length, n = 0; t[i++] = e[n++]; )
                          ;
                      t.length = i - 1
                  }
              }
          }
          function rt(t, e, n, o) {
              var r, a, c, d, u, p, v, y, A, C;
              if ((e ? e.ownerDocument || e : x) !== f && h(e),
              n = n || [],
              d = (e = e || f).nodeType,
              "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d)
                  return n;
              if (!o && g) {
                  if (11 !== d && (r = J.exec(t)))
                      if (c = r[1]) {
                          if (9 === d) {
                              if (!(a = e.getElementById(c)) || !a.parentNode)
                                  return n;
                              if (a.id === c)
                                  return n.push(a),
                                  n
                          } else if (e.ownerDocument && (a = e.ownerDocument.getElementById(c)) && b(e, a) && a.id === c)
                              return n.push(a),
                              n
                      } else {
                          if (r[2])
                              return L.apply(n, e.getElementsByTagName(t)),
                              n;
                          if ((c = r[3]) && i.getElementsByClassName)
                              return L.apply(n, e.getElementsByClassName(c)),
                              n
                      }
                  if (i.qsa && (!m || !m.test(t))) {
                      if (y = v = w,
                      A = e,
                      C = 1 !== d && t,
                      1 === d && "object" !== e.nodeName.toLowerCase()) {
                          for (p = s(t),
                          (v = e.getAttribute("id")) ? y = v.replace(et, "\\$&") : e.setAttribute("id", y),
                          y = "[id='" + y + "'] ",
                          u = p.length; u--; )
                              p[u] = y + mt(p[u]);
                          A = tt.test(t) && pt(e.parentNode) || e,
                          C = p.join(",")
                      }
                      if (C)
                          try {
                              return L.apply(n, A.querySelectorAll(C)),
                              n
                          } catch (t) {} finally {
                              v || e.removeAttribute("id")
                          }
                  }
              }
              return l(t.replace(z, "$1"), e, n, o)
          }
          function st() {
              var t = [];
              return function e(i, o) {
                  return t.push(i + " ") > n.cacheLength && delete e[t.shift()],
                  e[i + " "] = o
              }
          }
          function at(t) {
              return t[w] = !0,
              t
          }
          function lt(t) {
              var e = f.createElement("div");
              try {
                  return !!t(e)
              } catch (t) {
                  return !1
              } finally {
                  e.parentNode && e.parentNode.removeChild(e),
                  e = null
              }
          }
          function ct(t, e) {
              for (var i = t.split("|"), o = t.length; o--; )
                  n.attrHandle[i[o]] = e
          }
          function dt(t, e) {
              var i = e && t
                , n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || k) - (~t.sourceIndex || k);
              if (n)
                  return n;
              if (i)
                  for (; i = i.nextSibling; )
                      if (i === e)
                          return -1;
              return t ? 1 : -1
          }
          function ut(t) {
              return function(e) {
                  return "input" === e.nodeName.toLowerCase() && e.type === t
              }
          }
          function ht(t) {
              return function(e) {
                  var i = e.nodeName.toLowerCase();
                  return ("input" === i || "button" === i) && e.type === t
              }
          }
          function ft(t) {
              return at(function(e) {
                  return e = +e,
                  at(function(i, n) {
                      for (var o, r = t([], i.length, e), s = r.length; s--; )
                          i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                  })
              })
          }
          function pt(t) {
              return t && void 0 !== t.getElementsByTagName && t
          }
          for (e in i = rt.support = {},
          r = rt.isXML = function(t) {
              var e = t && (t.ownerDocument || t).documentElement;
              return !!e && "HTML" !== e.nodeName
          }
          ,
          h = rt.setDocument = function(t) {
              var e, o, s = t ? t.ownerDocument || t : x;
              return s !== f && 9 === s.nodeType && s.documentElement ? (f = s,
              p = s.documentElement,
              (o = s.defaultView) && o !== o.top && (o.addEventListener ? o.addEventListener("unload", ot, !1) : o.attachEvent && o.attachEvent("onunload", ot)),
              g = !r(s),
              i.attributes = lt(function(t) {
                  return t.className = "i",
                  !t.getAttribute("className")
              }),
              i.getElementsByTagName = lt(function(t) {
                  return t.appendChild(s.createComment("")),
                  !t.getElementsByTagName("*").length
              }),
              i.getElementsByClassName = Z.test(s.getElementsByClassName),
              i.getById = lt(function(t) {
                  return p.appendChild(t).id = w,
                  !s.getElementsByName || !s.getElementsByName(w).length
              }),
              i.getById ? (n.find.ID = function(t, e) {
                  if (void 0 !== e.getElementById && g) {
                      var i = e.getElementById(t);
                      return i && i.parentNode ? [i] : []
                  }
              }
              ,
              n.filter.ID = function(t) {
                  var e = t.replace(it, nt);
                  return function(t) {
                      return t.getAttribute("id") === e
                  }
              }
              ) : (delete n.find.ID,
              n.filter.ID = function(t) {
                  var e = t.replace(it, nt);
                  return function(t) {
                      var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                      return i && i.value === e
                  }
              }
              ),
              n.find.TAG = i.getElementsByTagName ? function(t, e) {
                  return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
              }
              : function(t, e) {
                  var i, n = [], o = 0, r = e.getElementsByTagName(t);
                  if ("*" === t) {
                      for (; i = r[o++]; )
                          1 === i.nodeType && n.push(i);
                      return n
                  }
                  return r
              }
              ,
              n.find.CLASS = i.getElementsByClassName && function(t, e) {
                  return g ? e.getElementsByClassName(t) : void 0
              }
              ,
              v = [],
              m = [],
              (i.qsa = Z.test(s.querySelectorAll)) && (lt(function(t) {
                  p.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\f]' msallowcapture=''><option selected=''></option></select>",
                  t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + B + "*(?:''|\"\")"),
                  t.querySelectorAll("[selected]").length || m.push("\\[" + B + "*(?:value|" + M + ")"),
                  t.querySelectorAll("[id~=" + w + "-]").length || m.push("~="),
                  t.querySelectorAll(":checked").length || m.push(":checked"),
                  t.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
              }),
              lt(function(t) {
                  var e = s.createElement("input");
                  e.setAttribute("type", "hidden"),
                  t.appendChild(e).setAttribute("name", "D"),
                  t.querySelectorAll("[name=d]").length && m.push("name" + B + "*[*^$|!~]?="),
                  t.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"),
                  t.querySelectorAll("*,:x"),
                  m.push(",.*:")
              })),
              (i.matchesSelector = Z.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && lt(function(t) {
                  i.disconnectedMatch = y.call(t, "div"),
                  y.call(t, "[s!='']:x"),
                  v.push("!=", V)
              }),
              m = m.length && new RegExp(m.join("|")),
              v = v.length && new RegExp(v.join("|")),
              e = Z.test(p.compareDocumentPosition),
              b = e || Z.test(p.contains) ? function(t, e) {
                  var i = 9 === t.nodeType ? t.documentElement : t
                    , n = e && e.parentNode;
                  return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
              }
              : function(t, e) {
                  if (e)
                      for (; e = e.parentNode; )
                          if (e === t)
                              return !0;
                  return !1
              }
              ,
              E = e ? function(t, e) {
                  if (t === e)
                      return u = !0,
                      0;
                  var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                  return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === s || t.ownerDocument === x && b(x, t) ? -1 : e === s || e.ownerDocument === x && b(x, e) ? 1 : d ? N(d, t) - N(d, e) : 0 : 4 & n ? -1 : 1)
              }
              : function(t, e) {
                  if (t === e)
                      return u = !0,
                      0;
                  var i, n = 0, o = t.parentNode, r = e.parentNode, a = [t], l = [e];
                  if (!o || !r)
                      return t === s ? -1 : e === s ? 1 : o ? -1 : r ? 1 : d ? N(d, t) - N(d, e) : 0;
                  if (o === r)
                      return dt(t, e);
                  for (i = t; i = i.parentNode; )
                      a.unshift(i);
                  for (i = e; i = i.parentNode; )
                      l.unshift(i);
                  for (; a[n] === l[n]; )
                      n++;
                  return n ? dt(a[n], l[n]) : a[n] === x ? -1 : l[n] === x ? 1 : 0
              }
              ,
              s) : f
          }
          ,
          rt.matches = function(t, e) {
              return rt(t, null, null, e)
          }
          ,
          rt.matchesSelector = function(t, e) {
              if ((t.ownerDocument || t) !== f && h(t),
              e = e.replace(q, "='$1']"),
              !(!i.matchesSelector || !g || v && v.test(e) || m && m.test(e)))
                  try {
                      var n = y.call(t, e);
                      if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                          return n
                  } catch (t) {}
              return rt(e, f, null, [t]).length > 0
          }
          ,
          rt.contains = function(t, e) {
              return (t.ownerDocument || t) !== f && h(t),
              b(t, e)
          }
          ,
          rt.attr = function(t, e) {
              (t.ownerDocument || t) !== f && h(t);
              var o = n.attrHandle[e.toLowerCase()]
                , r = o && I.call(n.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
              return void 0 !== r ? r : i.attributes || !g ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
          }
          ,
          rt.error = function(t) {
              throw new Error("Syntax error, unrecognized expression: " + t)
          }
          ,
          rt.uniqueSort = function(t) {
              var e, n = [], o = 0, r = 0;
              if (u = !i.detectDuplicates,
              d = !i.sortStable && t.slice(0),
              t.sort(E),
              u) {
                  for (; e = t[r++]; )
                      e === t[r] && (o = n.push(r));
                  for (; o--; )
                      t.splice(n[o], 1)
              }
              return d = null,
              t
          }
          ,
          o = rt.getText = function(t) {
              var e, i = "", n = 0, r = t.nodeType;
              if (r) {
                  if (1 === r || 9 === r || 11 === r) {
                      if ("string" == typeof t.textContent)
                          return t.textContent;
                      for (t = t.firstChild; t; t = t.nextSibling)
                          i += o(t)
                  } else if (3 === r || 4 === r)
                      return t.nodeValue
              } else
                  for (; e = t[n++]; )
                      i += o(e);
              return i
          }
          ,
          (n = rt.selectors = {
              cacheLength: 50,
              createPseudo: at,
              match: W,
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
                  ATTR: function(t) {
                      return t[1] = t[1].replace(it, nt),
                      t[3] = (t[3] || t[4] || t[5] || "").replace(it, nt),
                      "~=" === t[2] && (t[3] = " " + t[3] + " "),
                      t.slice(0, 4)
                  },
                  CHILD: function(t) {
                      return t[1] = t[1].toLowerCase(),
                      "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]),
                      t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                      t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]),
                      t
                  },
                  PSEUDO: function(t) {
                      var e, i = !t[6] && t[2];
                      return W.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && G.test(i) && (e = s(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e),
                      t[2] = i.slice(0, e)),
                      t.slice(0, 3))
                  }
              },
              filter: {
                  TAG: function(t) {
                      var e = t.replace(it, nt).toLowerCase();
                      return "*" === t ? function() {
                          return !0
                      }
                      : function(t) {
                          return t.nodeName && t.nodeName.toLowerCase() === e
                      }
                  },
                  CLASS: function(t) {
                      var e = S[t + " "];
                      return e || (e = new RegExp("(^|" + B + ")" + t + "(" + B + "|$)")) && S(t, function(t) {
                          return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                      })
                  },
                  ATTR: function(t, e, i) {
                      return function(n) {
                          var o = rt.attr(n, t);
                          return null == o ? "!=" === e : !e || (o += "",
                          "=" === e ? o === i : "!=" === e ? o !== i : "^=" === e ? i && 0 === o.indexOf(i) : "*=" === e ? i && o.indexOf(i) > -1 : "$=" === e ? i && o.slice(-i.length) === i : "~=" === e ? (" " + o.replace(R, " ") + " ").indexOf(i) > -1 : "|=" === e && (o === i || o.slice(0, i.length + 1) === i + "-"))
                      }
                  },
                  CHILD: function(t, e, i, n, o) {
                      var r = "nth" !== t.slice(0, 3)
                        , s = "last" !== t.slice(-4)
                        , a = "of-type" === e;
                      return 1 === n && 0 === o ? function(t) {
                          return !!t.parentNode
                      }
                      : function(e, i, l) {
                          var c, d, u, h, f, p, g = r !== s ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a;
                          if (m) {
                              if (r) {
                                  for (; g; ) {
                                      for (u = e; u = u[g]; )
                                          if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType)
                                              return !1;
                                      p = g = "only" === t && !p && "nextSibling"
                                  }
                                  return !0
                              }
                              if (p = [s ? m.firstChild : m.lastChild],
                              s && y) {
                                  for (f = (c = (d = m[w] || (m[w] = {}))[t] || [])[0] === A && c[1],
                                  h = c[0] === A && c[2],
                                  u = f && m.childNodes[f]; u = ++f && u && u[g] || (h = f = 0) || p.pop(); )
                                      if (1 === u.nodeType && ++h && u === e) {
                                          d[t] = [A, f, h];
                                          break
                                      }
                              } else if (y && (c = (e[w] || (e[w] = {}))[t]) && c[0] === A)
                                  h = c[1];
                              else
                                  for (; (u = ++f && u && u[g] || (h = f = 0) || p.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++h || (y && ((u[w] || (u[w] = {}))[t] = [A, h]),
                                  u !== e)); )
                                      ;
                              return (h -= o) === n || h % n == 0 && h / n >= 0
                          }
                      }
                  },
                  PSEUDO: function(t, e) {
                      var i, o = n.pseudos[t] || n.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);
                      return o[w] ? o(e) : o.length > 1 ? (i = [t, t, "", e],
                      n.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function(t, i) {
                          for (var n, r = o(t, e), s = r.length; s--; )
                              t[n = N(t, r[s])] = !(i[n] = r[s])
                      }) : function(t) {
                          return o(t, 0, i)
                      }
                      ) : o
                  }
              },
              pseudos: {
                  not: at(function(t) {
                      var e = []
                        , i = []
                        , n = a(t.replace(z, "$1"));
                      return n[w] ? at(function(t, e, i, o) {
                          for (var r, s = n(t, null, o, []), a = t.length; a--; )
                              (r = s[a]) && (t[a] = !(e[a] = r))
                      }) : function(t, o, r) {
                          return e[0] = t,
                          n(e, null, r, i),
                          e[0] = null,
                          !i.pop()
                      }
                  }),
                  has: at(function(t) {
                      return function(e) {
                          return rt(t, e).length > 0
                      }
                  }),
                  contains: at(function(t) {
                      return t = t.replace(it, nt),
                      function(e) {
                          return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                      }
                  }),
                  lang: at(function(t) {
                      return K.test(t || "") || rt.error("unsupported lang: " + t),
                      t = t.replace(it, nt).toLowerCase(),
                      function(e) {
                          var i;
                          do {
                              if (i = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                  return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                          } while ((e = e.parentNode) && 1 === e.nodeType);
                          return !1
                      }
                  }),
                  target: function(e) {
                      var i = t.location && t.location.hash;
                      return i && i.slice(1) === e.id
                  },
                  root: function(t) {
                      return t === p
                  },
                  focus: function(t) {
                      return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                  },
                  enabled: function(t) {
                      return !1 === t.disabled
                  },
                  disabled: function(t) {
                      return !0 === t.disabled
                  },
                  checked: function(t) {
                      var e = t.nodeName.toLowerCase();
                      return "input" === e && !!t.checked || "option" === e && !!t.selected
                  },
                  selected: function(t) {
                      return t.parentNode && t.parentNode.selectedIndex,
                      !0 === t.selected
                  },
                  empty: function(t) {
                      for (t = t.firstChild; t; t = t.nextSibling)
                          if (t.nodeType < 6)
                              return !1;
                      return !0
                  },
                  parent: function(t) {
                      return !n.pseudos.empty(t)
                  },
                  header: function(t) {
                      return X.test(t.nodeName)
                  },
                  input: function(t) {
                      return Y.test(t.nodeName)
                  },
                  button: function(t) {
                      var e = t.nodeName.toLowerCase();
                      return "input" === e && "button" === t.type || "button" === e
                  },
                  text: function(t) {
                      var e;
                      return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                  },
                  first: ft(function() {
                      return [0]
                  }),
                  last: ft(function(t, e) {
                      return [e - 1]
                  }),
                  eq: ft(function(t, e, i) {
                      return [0 > i ? i + e : i]
                  }),
                  even: ft(function(t, e) {
                      for (var i = 0; e > i; i += 2)
                          t.push(i);
                      return t
                  }),
                  odd: ft(function(t, e) {
                      for (var i = 1; e > i; i += 2)
                          t.push(i);
                      return t
                  }),
                  lt: ft(function(t, e, i) {
                      for (var n = 0 > i ? i + e : i; --n >= 0; )
                          t.push(n);
                      return t
                  }),
                  gt: ft(function(t, e, i) {
                      for (var n = 0 > i ? i + e : i; ++n < e; )
                          t.push(n);
                      return t
                  })
              }
          }).pseudos.nth = n.pseudos.eq,
          {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0
          })
              n.pseudos[e] = ut(e);
          for (e in {
              submit: !0,
              reset: !0
          })
              n.pseudos[e] = ht(e);
          function gt() {}
          function mt(t) {
              for (var e = 0, i = t.length, n = ""; i > e; e++)
                  n += t[e].value;
              return n
          }
          function vt(t, e, i) {
              var n = e.dir
                , o = i && "parentNode" === n
                , r = C++;
              return e.first ? function(e, i, r) {
                  for (; e = e[n]; )
                      if (1 === e.nodeType || o)
                          return t(e, i, r)
              }
              : function(e, i, s) {
                  var a, l, c = [A, r];
                  if (s) {
                      for (; e = e[n]; )
                          if ((1 === e.nodeType || o) && t(e, i, s))
                              return !0
                  } else
                      for (; e = e[n]; )
                          if (1 === e.nodeType || o) {
                              if ((a = (l = e[w] || (e[w] = {}))[n]) && a[0] === A && a[1] === r)
                                  return c[2] = a[2];
                              if (l[n] = c,
                              c[2] = t(e, i, s))
                                  return !0
                          }
              }
          }
          function yt(t) {
              return t.length > 1 ? function(e, i, n) {
                  for (var o = t.length; o--; )
                      if (!t[o](e, i, n))
                          return !1;
                  return !0
              }
              : t[0]
          }
          function bt(t, e, i, n, o) {
              for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)
                  (r = t[a]) && (!i || i(r, n, o)) && (s.push(r),
                  c && e.push(a));
              return s
          }
          function wt(t, e, i, n, o, r) {
              return n && !n[w] && (n = wt(n)),
              o && !o[w] && (o = wt(o, r)),
              at(function(r, s, a, l) {
                  var c, d, u, h = [], f = [], p = s.length, g = r || function(t, e, i) {
                      for (var n = 0, o = e.length; o > n; n++)
                          rt(t, e[n], i);
                      return i
                  }(e || "*", a.nodeType ? [a] : a, []), m = !t || !r && e ? g : bt(g, h, t, a, l), v = i ? o || (r ? t : p || n) ? [] : s : m;
                  if (i && i(m, v, a, l),
                  n)
                      for (c = bt(v, f),
                      n(c, [], a, l),
                      d = c.length; d--; )
                          (u = c[d]) && (v[f[d]] = !(m[f[d]] = u));
                  if (r) {
                      if (o || t) {
                          if (o) {
                              for (c = [],
                              d = v.length; d--; )
                                  (u = v[d]) && c.push(m[d] = u);
                              o(null, v = [], c, l)
                          }
                          for (d = v.length; d--; )
                              (u = v[d]) && (c = o ? N(r, u) : h[d]) > -1 && (r[c] = !(s[c] = u))
                      }
                  } else
                      v = bt(v === s ? v.splice(p, v.length) : v),
                      o ? o(null, s, v, l) : L.apply(s, v)
              })
          }
          function xt(t) {
              for (var e, i, o, r = t.length, s = n.relative[t[0].type], a = s || n.relative[" "], l = s ? 1 : 0, d = vt(function(t) {
                  return t === e
              }, a, !0), u = vt(function(t) {
                  return N(e, t) > -1
              }, a, !0), h = [function(t, i, n) {
                  var o = !s && (n || i !== c) || ((e = i).nodeType ? d(t, i, n) : u(t, i, n));
                  return e = null,
                  o
              }
              ]; r > l; l++)
                  if (i = n.relative[t[l].type])
                      h = [vt(yt(h), i)];
                  else {
                      if ((i = n.filter[t[l].type].apply(null, t[l].matches))[w]) {
                          for (o = ++l; r > o && !n.relative[t[o].type]; o++)
                              ;
                          return wt(l > 1 && yt(h), l > 1 && mt(t.slice(0, l - 1).concat({
                              value: " " === t[l - 2].type ? "*" : ""
                          })).replace(z, "$1"), i, o > l && xt(t.slice(l, o)), r > o && xt(t = t.slice(o)), r > o && mt(t))
                      }
                      h.push(i)
                  }
              return yt(h)
          }
          function At(t, e) {
              var i = e.length > 0
                , o = t.length > 0
                , r = function(r, s, a, l, d) {
                  var u, h, p, g = 0, m = "0", v = r && [], y = [], b = c, w = r || o && n.find.TAG("*", d), x = A += null == b ? 1 : Math.random() || .1, C = w.length;
                  for (d && (c = s !== f && s); m !== C && null != (u = w[m]); m++) {
                      if (o && u) {
                          for (h = 0; p = t[h++]; )
                              if (p(u, s, a)) {
                                  l.push(u);
                                  break
                              }
                          d && (A = x)
                      }
                      i && ((u = !p && u) && g--,
                      r && v.push(u))
                  }
                  if (g += m,
                  i && m !== g) {
                      for (h = 0; p = e[h++]; )
                          p(v, y, s, a);
                      if (r) {
                          if (g > 0)
                              for (; m--; )
                                  v[m] || y[m] || (y[m] = D.call(l));
                          y = bt(y)
                      }
                      L.apply(l, y),
                      d && !r && y.length > 0 && g + e.length > 1 && rt.uniqueSort(l)
                  }
                  return d && (A = x,
                  c = b),
                  v
              };
              return i ? at(r) : r
          }
          return gt.prototype = n.filters = n.pseudos,
          n.setFilters = new gt,
          s = rt.tokenize = function(t, e) {
              var i, o, r, s, a, l, c, d = T[t + " "];
              if (d)
                  return e ? 0 : d.slice(0);
              for (a = t,
              l = [],
              c = n.preFilter; a; ) {
                  for (s in (!i || (o = U.exec(a))) && (o && (a = a.slice(o[0].length) || a),
                  l.push(r = [])),
                  i = !1,
                  (o = Q.exec(a)) && (i = o.shift(),
                  r.push({
                      value: i,
                      type: o[0].replace(z, " ")
                  }),
                  a = a.slice(i.length)),
                  n.filter)
                      !(o = W[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(),
                      r.push({
                          value: i,
                          type: s,
                          matches: o
                      }),
                      a = a.slice(i.length));
                  if (!i)
                      break
              }
              return e ? a.length : a ? rt.error(t) : T(t, l).slice(0)
          }
          ,
          a = rt.compile = function(t, e) {
              var i, n = [], o = [], r = _[t + " "];
              if (!r) {
                  for (e || (e = s(t)),
                  i = e.length; i--; )
                      (r = xt(e[i]))[w] ? n.push(r) : o.push(r);
                  (r = _(t, At(o, n))).selector = t
              }
              return r
          }
          ,
          l = rt.select = function(t, e, o, r) {
              var l, c, d, u, h, f = "function" == typeof t && t, p = !r && s(t = f.selector || t);
              if (o = o || [],
              1 === p.length) {
                  if ((c = p[0] = p[0].slice(0)).length > 2 && "ID" === (d = c[0]).type && i.getById && 9 === e.nodeType && g && n.relative[c[1].type]) {
                      if (!(e = (n.find.ID(d.matches[0].replace(it, nt), e) || [])[0]))
                          return o;
                      f && (e = e.parentNode),
                      t = t.slice(c.shift().value.length)
                  }
                  for (l = W.needsContext.test(t) ? 0 : c.length; l-- && (d = c[l],
                  !n.relative[u = d.type]); )
                      if ((h = n.find[u]) && (r = h(d.matches[0].replace(it, nt), tt.test(c[0].type) && pt(e.parentNode) || e))) {
                          if (c.splice(l, 1),
                          !(t = r.length && mt(c)))
                              return L.apply(o, r),
                              o;
                          break
                      }
              }
              return (f || a(t, p))(r, e, !g, o, tt.test(t) && pt(e.parentNode) || e),
              o
          }
          ,
          i.sortStable = w.split("").sort(E).join("") === w,
          i.detectDuplicates = !!u,
          h(),
          i.sortDetached = lt(function(t) {
              return 1 & t.compareDocumentPosition(f.createElement("div"))
          }),
          lt(function(t) {
              return t.innerHTML = "<a href='#'></a>",
              "#" === t.firstChild.getAttribute("href")
          }) || ct("type|href|height|width", function(t, e, i) {
              return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
          }),
          i.attributes && lt(function(t) {
              return t.innerHTML = "<input/>",
              t.firstChild.setAttribute("value", ""),
              "" === t.firstChild.getAttribute("value")
          }) || ct("value", function(t, e, i) {
              return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
          }),
          lt(function(t) {
              return null == t.getAttribute("disabled")
          }) || ct(M, function(t, e, i) {
              var n;
              return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
          }),
          rt
      }(i);
      g.find = x,
      g.expr = x.selectors,
      g.expr[":"] = g.expr.pseudos,
      g.unique = x.uniqueSort,
      g.text = x.getText,
      g.isXMLDoc = x.isXML,
      g.contains = x.contains;
      var A = g.expr.match.needsContext
        , C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
        , S = /^.[^:#\[\.,]*$/;
      function T(t, e, i) {
          if (g.isFunction(e))
              return g.grep(t, function(t, n) {
                  return !!e.call(t, n, t) !== i
              });
          if (e.nodeType)
              return g.grep(t, function(t) {
                  return t === e !== i
              });
          if ("string" == typeof e) {
              if (S.test(e))
                  return g.filter(e, t, i);
              e = g.filter(e, t)
          }
          return g.grep(t, function(t) {
              return g.inArray(t, e) >= 0 !== i
          })
      }
      g.filter = function(t, e, i) {
          var n = e[0];
          return i && (t = ":not(" + t + ")"),
          1 === e.length && 1 === n.nodeType ? g.find.matchesSelector(n, t) ? [n] : [] : g.find.matches(t, g.grep(e, function(t) {
              return 1 === t.nodeType
          }))
      }
      ,
      g.fn.extend({
          find: function(t) {
              var e, i = [], n = this, o = n.length;
              if ("string" != typeof t)
                  return this.pushStack(g(t).filter(function() {
                      for (e = 0; o > e; e++)
                          if (g.contains(n[e], this))
                              return !0
                  }));
              for (e = 0; o > e; e++)
                  g.find(t, n[e], i);
              return (i = this.pushStack(o > 1 ? g.unique(i) : i)).selector = this.selector ? this.selector + " " + t : t,
              i
          },
          filter: function(t) {
              return this.pushStack(T(this, t || [], !1))
          },
          not: function(t) {
              return this.pushStack(T(this, t || [], !0))
          },
          is: function(t) {
              return !!T(this, "string" == typeof t && A.test(t) ? g(t) : t || [], !1).length
          }
      });
      var _, E = i.document, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
      (g.fn.init = function(t, e) {
          var i, n;
          if (!t)
              return this;
          if ("string" == typeof t) {
              if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : k.exec(t)) || !i[1] && e)
                  return !e || e.jquery ? (e || _).find(t) : this.constructor(e).find(t);
              if (i[1]) {
                  if (e = e instanceof g ? e[0] : e,
                  g.merge(this, g.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : E, !0)),
                  C.test(i[1]) && g.isPlainObject(e))
                      for (i in e)
                          g.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                  return this
              }
              if ((n = E.getElementById(i[2])) && n.parentNode) {
                  if (n.id !== i[2])
                      return _.find(t);
                  this.length = 1,
                  this[0] = n
              }
              return this.context = E,
              this.selector = t,
              this
          }
          return t.nodeType ? (this.context = this[0] = t,
          this.length = 1,
          this) : g.isFunction(t) ? void 0 !== _.ready ? _.ready(t) : t(g) : (void 0 !== t.selector && (this.selector = t.selector,
          this.context = t.context),
          g.makeArray(t, this))
      }
      ).prototype = g.fn,
      _ = g(E);
      var I = /^(?:parents|prev(?:Until|All))/
        , F = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
      };
      function D(t, e) {
          do {
              t = t[e]
          } while (t && 1 !== t.nodeType);
          return t
      }
      g.extend({
          dir: function(t, e, i) {
              for (var n = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === i || 1 !== o.nodeType || !g(o).is(i)); )
                  1 === o.nodeType && n.push(o),
                  o = o[e];
              return n
          },
          sibling: function(t, e) {
              for (var i = []; t; t = t.nextSibling)
                  1 === t.nodeType && t !== e && i.push(t);
              return i
          }
      }),
      g.fn.extend({
          has: function(t) {
              var e, i = g(t, this), n = i.length;
              return this.filter(function() {
                  for (e = 0; n > e; e++)
                      if (g.contains(this, i[e]))
                          return !0
              })
          },
          closest: function(t, e) {
              for (var i, n = 0, o = this.length, r = [], s = A.test(t) || "string" != typeof t ? g(t, e || this.context) : 0; o > n; n++)
                  for (i = this[n]; i && i !== e; i = i.parentNode)
                      if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && g.find.matchesSelector(i, t))) {
                          r.push(i);
                          break
                      }
              return this.pushStack(r.length > 1 ? g.unique(r) : r)
          },
          index: function(t) {
              return t ? "string" == typeof t ? g.inArray(this[0], g(t)) : g.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
          },
          add: function(t, e) {
              return this.pushStack(g.unique(g.merge(this.get(), g(t, e))))
          },
          addBack: function(t) {
              return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
          }
      }),
      g.each({
          parent: function(t) {
              var e = t.parentNode;
              return e && 11 !== e.nodeType ? e : null
          },
          parents: function(t) {
              return g.dir(t, "parentNode")
          },
          parentsUntil: function(t, e, i) {
              return g.dir(t, "parentNode", i)
          },
          next: function(t) {
              return D(t, "nextSibling")
          },
          prev: function(t) {
              return D(t, "previousSibling")
          },
          nextAll: function(t) {
              return g.dir(t, "nextSibling")
          },
          prevAll: function(t) {
              return g.dir(t, "previousSibling")
          },
          nextUntil: function(t, e, i) {
              return g.dir(t, "nextSibling", i)
          },
          prevUntil: function(t, e, i) {
              return g.dir(t, "previousSibling", i)
          },
          siblings: function(t) {
              return g.sibling((t.parentNode || {}).firstChild, t)
          },
          children: function(t) {
              return g.sibling(t.firstChild)
          },
          contents: function(t) {
              return g.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : g.merge([], t.childNodes)
          }
      }, function(t, e) {
          g.fn[t] = function(i, n) {
              var o = g.map(this, e, i);
              return "Until" !== t.slice(-5) && (n = i),
              n && "string" == typeof n && (o = g.filter(n, o)),
              this.length > 1 && (F[t] || (o = g.unique(o)),
              I.test(t) && (o = o.reverse())),
              this.pushStack(o)
          }
      });
      var $, L = /\S+/g, O = {};
      function N() {
          E.addEventListener ? (E.removeEventListener("DOMContentLoaded", M, !1),
          i.removeEventListener("load", M, !1)) : (E.detachEvent("onreadystatechange", M),
          i.detachEvent("onload", M))
      }
      function M() {
          (E.addEventListener || "load" === event.type || "complete" === E.readyState) && (N(),
          g.ready())
      }
      g.Callbacks = function(t) {
          t = "string" == typeof t ? O[t] || function(t) {
              var e = O[t] = {};
              return g.each(t.match(L) || [], function(t, i) {
                  e[i] = !0
              }),
              e
          }(t) : g.extend({}, t);
          var e, i, n, o, r, s, a = [], l = !t.once && [], c = function(u) {
              for (i = t.memory && u,
              n = !0,
              r = s || 0,
              s = 0,
              o = a.length,
              e = !0; a && o > r; r++)
                  if (!1 === a[r].apply(u[0], u[1]) && t.stopOnFalse) {
                      i = !1;
                      break
                  }
              e = !1,
              a && (l ? l.length && c(l.shift()) : i ? a = [] : d.disable())
          }, d = {
              add: function() {
                  if (a) {
                      var n = a.length;
                      !function e(i) {
                          g.each(i, function(i, n) {
                              var o = g.type(n);
                              "function" === o ? t.unique && d.has(n) || a.push(n) : n && n.length && "string" !== o && e(n)
                          })
                      }(arguments),
                      e ? o = a.length : i && (s = n,
                      c(i))
                  }
                  return this
              },
              remove: function() {
                  return a && g.each(arguments, function(t, i) {
                      for (var n; (n = g.inArray(i, a, n)) > -1; )
                          a.splice(n, 1),
                          e && (o >= n && o--,
                          r >= n && r--)
                  }),
                  this
              },
              has: function(t) {
                  return t ? g.inArray(t, a) > -1 : !(!a || !a.length)
              },
              empty: function() {
                  return a = [],
                  o = 0,
                  this
              },
              disable: function() {
                  return a = l = i = void 0,
                  this
              },
              disabled: function() {
                  return !a
              },
              lock: function() {
                  return l = void 0,
                  i || d.disable(),
                  this
              },
              locked: function() {
                  return !l
              },
              fireWith: function(t, i) {
                  return !a || n && !l || (i = [t, (i = i || []).slice ? i.slice() : i],
                  e ? l.push(i) : c(i)),
                  this
              },
              fire: function() {
                  return d.fireWith(this, arguments),
                  this
              },
              fired: function() {
                  return !!n
              }
          };
          return d
      }
      ,
      g.extend({
          Deferred: function(t) {
              var e = [["resolve", "done", g.Callbacks("once memory"), "resolved"], ["reject", "fail", g.Callbacks("once memory"), "rejected"], ["notify", "progress", g.Callbacks("memory")]]
                , i = "pending"
                , n = {
                  state: function() {
                      return i
                  },
                  always: function() {
                      return o.done(arguments).fail(arguments),
                      this
                  },
                  then: function() {
                      var t = arguments;
                      return g.Deferred(function(i) {
                          g.each(e, function(e, r) {
                              var s = g.isFunction(t[e]) && t[e];
                              o[r[1]](function() {
                                  var t = s && s.apply(this, arguments);
                                  t && g.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments)
                              })
                          }),
                          t = null
                      }).promise()
                  },
                  promise: function(t) {
                      return null != t ? g.extend(t, n) : n
                  }
              }
                , o = {};
              return n.pipe = n.then,
              g.each(e, function(t, r) {
                  var s = r[2]
                    , a = r[3];
                  n[r[1]] = s.add,
                  a && s.add(function() {
                      i = a
                  }, e[1 ^ t][2].disable, e[2][2].lock),
                  o[r[0]] = function() {
                      return o[r[0] + "With"](this === o ? n : this, arguments),
                      this
                  }
                  ,
                  o[r[0] + "With"] = s.fireWith
              }),
              n.promise(o),
              t && t.call(o, o),
              o
          },
          when: function(t) {
              var e, i, n, o = 0, r = s.call(arguments), a = r.length, l = 1 !== a || t && g.isFunction(t.promise) ? a : 0, c = 1 === l ? t : g.Deferred(), d = function(t, i, n) {
                  return function(o) {
                      i[t] = this,
                      n[t] = arguments.length > 1 ? s.call(arguments) : o,
                      n === e ? c.notifyWith(i, n) : --l || c.resolveWith(i, n)
                  }
              };
              if (a > 1)
                  for (e = new Array(a),
                  i = new Array(a),
                  n = new Array(a); a > o; o++)
                      r[o] && g.isFunction(r[o].promise) ? r[o].promise().done(d(o, n, r)).fail(c.reject).progress(d(o, i, e)) : --l;
              return l || c.resolveWith(n, r),
              c.promise()
          }
      }),
      g.fn.ready = function(t) {
          return g.ready.promise().done(t),
          this
      }
      ,
      g.extend({
          isReady: !1,
          readyWait: 1,
          holdReady: function(t) {
              t ? g.readyWait++ : g.ready(!0)
          },
          ready: function(t) {
              if (!0 === t ? !--g.readyWait : !g.isReady) {
                  if (!E.body)
                      return setTimeout(g.ready);
                  g.isReady = !0,
                  !0 !== t && --g.readyWait > 0 || ($.resolveWith(E, [g]),
                  g.fn.triggerHandler && (g(E).triggerHandler("ready"),
                  g(E).off("ready")))
              }
          }
      }),
      g.ready.promise = function(t) {
          if (!$)
              if ($ = g.Deferred(),
              "complete" === E.readyState)
                  setTimeout(g.ready);
              else if (E.addEventListener)
                  E.addEventListener("DOMContentLoaded", M, !1),
                  i.addEventListener("load", M, !1);
              else {
                  E.attachEvent("onreadystatechange", M),
                  i.attachEvent("onload", M);
                  var e = !1;
                  try {
                      e = null == i.frameElement && E.documentElement
                  } catch (t) {}
                  e && e.doScroll && function t() {
                      if (!g.isReady) {
                          try {
                              e.doScroll("left")
                          } catch (e) {
                              return setTimeout(t, 50)
                          }
                          N(),
                          g.ready()
                      }
                  }()
              }
          return $.promise(t)
      }
      ;
      var B, P = "undefined";
      for (B in g(f))
          break;
      f.ownLast = "0" !== B,
      f.inlineBlockNeedsLayout = !1,
      g(function() {
          var t, e, i, n;
          (i = E.getElementsByTagName("body")[0]) && i.style && (e = E.createElement("div"),
          (n = E.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
          i.appendChild(n).appendChild(e),
          typeof e.style.zoom !== P && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
          f.inlineBlockNeedsLayout = t = 3 === e.offsetWidth,
          t && (i.style.zoom = 1)),
          i.removeChild(n))
      }),
      function() {
          var t = E.createElement("div");
          if (null == f.deleteExpando) {
              f.deleteExpando = !0;
              try {
                  delete t.test
              } catch (t) {
                  f.deleteExpando = !1
              }
          }
          t = null
      }(),
      g.acceptData = function(t) {
          var e = g.noData[(t.nodeName + " ").toLowerCase()]
            , i = +t.nodeType || 1;
          return (1 === i || 9 === i) && (!e || !0 !== e && t.getAttribute("classid") === e)
      }
      ;
      var H = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , j = /([A-Z])/g;
      function V(t, e, i) {
          if (void 0 === i && 1 === t.nodeType) {
              var n = "data-" + e.replace(j, "-$1").toLowerCase();
              if ("string" == typeof (i = t.getAttribute(n))) {
                  try {
                      i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : H.test(i) ? g.parseJSON(i) : i)
                  } catch (t) {}
                  g.data(t, e, i)
              } else
                  i = void 0
          }
          return i
      }
      function R(t) {
          var e;
          for (e in t)
              if (("data" !== e || !g.isEmptyObject(t[e])) && "toJSON" !== e)
                  return !1;
          return !0
      }
      function z(t, e, i, n) {
          if (g.acceptData(t)) {
              var o, s, a = g.expando, l = t.nodeType, c = l ? g.cache : t, d = l ? t[a] : t[a] && a;
              if (d && c[d] && (n || c[d].data) || void 0 !== i || "string" != typeof e)
                  return d || (d = l ? t[a] = r.pop() || g.guid++ : a),
                  c[d] || (c[d] = l ? {} : {
                      toJSON: g.noop
                  }),
                  ("object" == typeof e || "function" == typeof e) && (n ? c[d] = g.extend(c[d], e) : c[d].data = g.extend(c[d].data, e)),
                  s = c[d],
                  n || (s.data || (s.data = {}),
                  s = s.data),
                  void 0 !== i && (s[g.camelCase(e)] = i),
                  "string" == typeof e ? null == (o = s[e]) && (o = s[g.camelCase(e)]) : o = s,
                  o
          }
      }
      function U(t, e, i) {
          if (g.acceptData(t)) {
              var n, o, r = t.nodeType, s = r ? g.cache : t, a = r ? t[g.expando] : g.expando;
              if (s[a]) {
                  if (e && (n = i ? s[a] : s[a].data)) {
                      g.isArray(e) ? e = e.concat(g.map(e, g.camelCase)) : e in n ? e = [e] : e = (e = g.camelCase(e))in n ? [e] : e.split(" "),
                      o = e.length;
                      for (; o--; )
                          delete n[e[o]];
                      if (i ? !R(n) : !g.isEmptyObject(n))
                          return
                  }
                  (i || (delete s[a].data,
                  R(s[a]))) && (r ? g.cleanData([t], !0) : f.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
              }
          }
      }
      g.extend({
          cache: {},
          noData: {
              "applet ": !0,
              "embed ": !0,
              "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
          },
          hasData: function(t) {
              return !!(t = t.nodeType ? g.cache[t[g.expando]] : t[g.expando]) && !R(t)
          },
          data: function(t, e, i) {
              return z(t, e, i)
          },
          removeData: function(t, e) {
              return U(t, e)
          },
          _data: function(t, e, i) {
              return z(t, e, i, !0)
          },
          _removeData: function(t, e) {
              return U(t, e, !0)
          }
      }),
      g.fn.extend({
          data: function(t, e) {
              var i, n, o, r = this[0], s = r && r.attributes;
              if (void 0 === t) {
                  if (this.length && (o = g.data(r),
                  1 === r.nodeType && !g._data(r, "parsedAttrs"))) {
                      for (i = s.length; i--; )
                          s[i] && (0 === (n = s[i].name).indexOf("data-") && V(r, n = g.camelCase(n.slice(5)), o[n]));
                      g._data(r, "parsedAttrs", !0)
                  }
                  return o
              }
              return "object" == typeof t ? this.each(function() {
                  g.data(this, t)
              }) : arguments.length > 1 ? this.each(function() {
                  g.data(this, t, e)
              }) : r ? V(r, t, g.data(r, t)) : void 0
          },
          removeData: function(t) {
              return this.each(function() {
                  g.removeData(this, t)
              })
          }
      }),
      g.extend({
          queue: function(t, e, i) {
              var n;
              return t ? (e = (e || "fx") + "queue",
              n = g._data(t, e),
              i && (!n || g.isArray(i) ? n = g._data(t, e, g.makeArray(i)) : n.push(i)),
              n || []) : void 0
          },
          dequeue: function(t, e) {
              e = e || "fx";
              var i = g.queue(t, e)
                , n = i.length
                , o = i.shift()
                , r = g._queueHooks(t, e);
              "inprogress" === o && (o = i.shift(),
              n--),
              o && ("fx" === e && i.unshift("inprogress"),
              delete r.stop,
              o.call(t, function() {
                  g.dequeue(t, e)
              }, r)),
              !n && r && r.empty.fire()
          },
          _queueHooks: function(t, e) {
              var i = e + "queueHooks";
              return g._data(t, i) || g._data(t, i, {
                  empty: g.Callbacks("once memory").add(function() {
                      g._removeData(t, e + "queue"),
                      g._removeData(t, i)
                  })
              })
          }
      }),
      g.fn.extend({
          queue: function(t, e) {
              var i = 2;
              return "string" != typeof t && (e = t,
              t = "fx",
              i--),
              arguments.length < i ? g.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                  var i = g.queue(this, t, e);
                  g._queueHooks(this, t),
                  "fx" === t && "inprogress" !== i[0] && g.dequeue(this, t)
              })
          },
          dequeue: function(t) {
              return this.each(function() {
                  g.dequeue(this, t)
              })
          },
          clearQueue: function(t) {
              return this.queue(t || "fx", [])
          },
          promise: function(t, e) {
              var i, n = 1, o = g.Deferred(), r = this, s = this.length, a = function() {
                  --n || o.resolveWith(r, [r])
              };
              for ("string" != typeof t && (e = t,
              t = void 0),
              t = t || "fx"; s--; )
                  (i = g._data(r[s], t + "queueHooks")) && i.empty && (n++,
                  i.empty.add(a));
              return a(),
              o.promise(e)
          }
      });
      var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , q = ["Top", "Right", "Bottom", "Left"]
        , G = function(t, e) {
          return t = e || t,
          "none" === g.css(t, "display") || !g.contains(t.ownerDocument, t)
      }
        , K = g.access = function(t, e, i, n, o, r, s) {
          var a = 0
            , l = t.length
            , c = null == i;
          if ("object" === g.type(i))
              for (a in o = !0,
              i)
                  g.access(t, e, a, i[a], !0, r, s);
          else if (void 0 !== n && (o = !0,
          g.isFunction(n) || (s = !0),
          c && (s ? (e.call(t, n),
          e = null) : (c = e,
          e = function(t, e, i) {
              return c.call(g(t), i)
          }
          )),
          e))
              for (; l > a; a++)
                  e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
          return o ? t : c ? e.call(t) : l ? e(t[0], i) : r
      }
        , W = /^(?:checkbox|radio)$/i;
      !function() {
          var t = E.createElement("input")
            , e = E.createElement("div")
            , i = E.createDocumentFragment();
          if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
          f.leadingWhitespace = 3 === e.firstChild.nodeType,
          f.tbody = !e.getElementsByTagName("tbody").length,
          f.htmlSerialize = !!e.getElementsByTagName("link").length,
          f.html5Clone = "<:nav></:nav>" !== E.createElement("nav").cloneNode(!0).outerHTML,
          t.type = "checkbox",
          t.checked = !0,
          i.appendChild(t),
          f.appendChecked = t.checked,
          e.innerHTML = "<textarea>x</textarea>",
          f.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
          i.appendChild(e),
          e.innerHTML = "<input type='radio' checked='checked' name='t'/>",
          f.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
          f.noCloneEvent = !0,
          e.attachEvent && (e.attachEvent("onclick", function() {
              f.noCloneEvent = !1
          }),
          e.cloneNode(!0).click()),
          null == f.deleteExpando) {
              f.deleteExpando = !0;
              try {
                  delete e.test
              } catch (t) {
                  f.deleteExpando = !1
              }
          }
      }(),
      function() {
          var t, e, n = E.createElement("div");
          for (t in {
              submit: !0,
              change: !0,
              focusin: !0
          })
              e = "on" + t,
              (f[t + "Bubbles"] = e in i) || (n.setAttribute(e, "t"),
              f[t + "Bubbles"] = !1 === n.attributes[e].expando);
          n = null
      }();
      var Y = /^(?:input|select|textarea)$/i
        , X = /^key/
        , Z = /^(?:mouse|pointer|contextmenu)|click/
        , J = /^(?:focusinfocus|focusoutblur)$/
        , tt = /^([^.]*)(?:\.(.+)|)$/;
      function et() {
          return !0
      }
      function it() {
          return !1
      }
      function nt() {
          try {
              return E.activeElement
          } catch (t) {}
      }
      function ot(t) {
          var e = rt.split("|")
            , i = t.createDocumentFragment();
          if (i.createElement)
              for (; e.length; )
                  i.createElement(e.pop());
          return i
      }
      g.event = {
          global: {},
          add: function(t, e, i, n, o) {
              var r, s, a, l, c, d, u, h, f, p, m, v = g._data(t);
              if (v) {
                  for (i.handler && (i = (l = i).handler,
                  o = l.selector),
                  i.guid || (i.guid = g.guid++),
                  (s = v.events) || (s = v.events = {}),
                  (d = v.handle) || ((d = v.handle = function(t) {
                      return typeof g === P || t && g.event.triggered === t.type ? void 0 : g.event.dispatch.apply(d.elem, arguments)
                  }
                  ).elem = t),
                  a = (e = (e || "").match(L) || [""]).length; a--; )
                      f = m = (r = tt.exec(e[a]) || [])[1],
                      p = (r[2] || "").split(".").sort(),
                      f && (c = g.event.special[f] || {},
                      f = (o ? c.delegateType : c.bindType) || f,
                      c = g.event.special[f] || {},
                      u = g.extend({
                          type: f,
                          origType: m,
                          data: n,
                          handler: i,
                          guid: i.guid,
                          selector: o,
                          needsContext: o && g.expr.match.needsContext.test(o),
                          namespace: p.join(".")
                      }, l),
                      (h = s[f]) || ((h = s[f] = []).delegateCount = 0,
                      c.setup && !1 !== c.setup.call(t, n, p, d) || (t.addEventListener ? t.addEventListener(f, d, !1) : t.attachEvent && t.attachEvent("on" + f, d))),
                      c.add && (c.add.call(t, u),
                      u.handler.guid || (u.handler.guid = i.guid)),
                      o ? h.splice(h.delegateCount++, 0, u) : h.push(u),
                      g.event.global[f] = !0);
                  t = null
              }
          },
          remove: function(t, e, i, n, o) {
              var r, s, a, l, c, d, u, h, f, p, m, v = g.hasData(t) && g._data(t);
              if (v && (d = v.events)) {
                  for (c = (e = (e || "").match(L) || [""]).length; c--; )
                      if (f = m = (a = tt.exec(e[c]) || [])[1],
                      p = (a[2] || "").split(".").sort(),
                      f) {
                          for (u = g.event.special[f] || {},
                          h = d[f = (n ? u.delegateType : u.bindType) || f] || [],
                          a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                          l = r = h.length; r--; )
                              s = h[r],
                              !o && m !== s.origType || i && i.guid !== s.guid || a && !a.test(s.namespace) || n && n !== s.selector && ("**" !== n || !s.selector) || (h.splice(r, 1),
                              s.selector && h.delegateCount--,
                              u.remove && u.remove.call(t, s));
                          l && !h.length && (u.teardown && !1 !== u.teardown.call(t, p, v.handle) || g.removeEvent(t, f, v.handle),
                          delete d[f])
                      } else
                          for (f in d)
                              g.event.remove(t, f + e[c], i, n, !0);
                  g.isEmptyObject(d) && (delete v.handle,
                  g._removeData(t, "events"))
              }
          },
          trigger: function(t, e, n, o) {
              var r, s, a, l, c, d, u, f = [n || E], p = h.call(t, "type") ? t.type : t, m = h.call(t, "namespace") ? t.namespace.split(".") : [];
              if (a = d = n = n || E,
              3 !== n.nodeType && 8 !== n.nodeType && !J.test(p + g.event.triggered) && (p.indexOf(".") >= 0 && (m = p.split("."),
              p = m.shift(),
              m.sort()),
              s = p.indexOf(":") < 0 && "on" + p,
              (t = t[g.expando] ? t : new g.Event(p,"object" == typeof t && t)).isTrigger = o ? 2 : 3,
              t.namespace = m.join("."),
              t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
              t.result = void 0,
              t.target || (t.target = n),
              e = null == e ? [t] : g.makeArray(e, [t]),
              c = g.event.special[p] || {},
              o || !c.trigger || !1 !== c.trigger.apply(n, e))) {
                  if (!o && !c.noBubble && !g.isWindow(n)) {
                      for (l = c.delegateType || p,
                      J.test(l + p) || (a = a.parentNode); a; a = a.parentNode)
                          f.push(a),
                          d = a;
                      d === (n.ownerDocument || E) && f.push(d.defaultView || d.parentWindow || i)
                  }
                  for (u = 0; (a = f[u++]) && !t.isPropagationStopped(); )
                      t.type = u > 1 ? l : c.bindType || p,
                      (r = (g._data(a, "events") || {})[t.type] && g._data(a, "handle")) && r.apply(a, e),
                      (r = s && a[s]) && r.apply && g.acceptData(a) && (t.result = r.apply(a, e),
                      !1 === t.result && t.preventDefault());
                  if (t.type = p,
                  !o && !t.isDefaultPrevented() && (!c._default || !1 === c._default.apply(f.pop(), e)) && g.acceptData(n) && s && n[p] && !g.isWindow(n)) {
                      (d = n[s]) && (n[s] = null),
                      g.event.triggered = p;
                      try {
                          n[p]()
                      } catch (t) {}
                      g.event.triggered = void 0,
                      d && (n[s] = d)
                  }
                  return t.result
              }
          },
          dispatch: function(t) {
              t = g.event.fix(t);
              var e, i, n, o, r, a = [], l = s.call(arguments), c = (g._data(this, "events") || {})[t.type] || [], d = g.event.special[t.type] || {};
              if (l[0] = t,
              t.delegateTarget = this,
              !d.preDispatch || !1 !== d.preDispatch.call(this, t)) {
                  for (a = g.event.handlers.call(this, t, c),
                  e = 0; (o = a[e++]) && !t.isPropagationStopped(); )
                      for (t.currentTarget = o.elem,
                      r = 0; (n = o.handlers[r++]) && !t.isImmediatePropagationStopped(); )
                          (!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n,
                          t.data = n.data,
                          void 0 !== (i = ((g.event.special[n.origType] || {}).handle || n.handler).apply(o.elem, l)) && !1 === (t.result = i) && (t.preventDefault(),
                          t.stopPropagation()));
                  return d.postDispatch && d.postDispatch.call(this, t),
                  t.result
              }
          },
          handlers: function(t, e) {
              var i, n, o, r, s = [], a = e.delegateCount, l = t.target;
              if (a && l.nodeType && (!t.button || "click" !== t.type))
                  for (; l != this; l = l.parentNode || this)
                      if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                          for (o = [],
                          r = 0; a > r; r++)
                              void 0 === o[i = (n = e[r]).selector + " "] && (o[i] = n.needsContext ? g(i, this).index(l) >= 0 : g.find(i, this, null, [l]).length),
                              o[i] && o.push(n);
                          o.length && s.push({
                              elem: l,
                              handlers: o
                          })
                      }
              return a < e.length && s.push({
                  elem: this,
                  handlers: e.slice(a)
              }),
              s
          },
          fix: function(t) {
              if (t[g.expando])
                  return t;
              var e, i, n, o = t.type, r = t, s = this.fixHooks[o];
              for (s || (this.fixHooks[o] = s = Z.test(o) ? this.mouseHooks : X.test(o) ? this.keyHooks : {}),
              n = s.props ? this.props.concat(s.props) : this.props,
              t = new g.Event(r),
              e = n.length; e--; )
                  t[i = n[e]] = r[i];
              return t.target || (t.target = r.srcElement || E),
              3 === t.target.nodeType && (t.target = t.target.parentNode),
              t.metaKey = !!t.metaKey,
              s.filter ? s.filter(t, r) : t
          },
          props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
          fixHooks: {},
          keyHooks: {
              props: "char charCode key keyCode".split(" "),
              filter: function(t, e) {
                  return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                  t
              }
          },
          mouseHooks: {
              props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
              filter: function(t, e) {
                  var i, n, o, r = e.button, s = e.fromElement;
                  return null == t.pageX && null != e.clientX && (o = (n = t.target.ownerDocument || E).documentElement,
                  i = n.body,
                  t.pageX = e.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0),
                  t.pageY = e.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)),
                  !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s),
                  t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                  t
              }
          },
          special: {
              load: {
                  noBubble: !0
              },
              focus: {
                  trigger: function() {
                      if (this !== nt() && this.focus)
                          try {
                              return this.focus(),
                              !1
                          } catch (t) {}
                  },
                  delegateType: "focusin"
              },
              blur: {
                  trigger: function() {
                      return this === nt() && this.blur ? (this.blur(),
                      !1) : void 0
                  },
                  delegateType: "focusout"
              },
              click: {
                  trigger: function() {
                      return g.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                      !1) : void 0
                  },
                  _default: function(t) {
                      return g.nodeName(t.target, "a")
                  }
              },
              beforeunload: {
                  postDispatch: function(t) {
                      void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                  }
              }
          },
          simulate: function(t, e, i, n) {
              var o = g.extend(new g.Event, i, {
                  type: t,
                  isSimulated: !0,
                  originalEvent: {}
              });
              n ? g.event.trigger(o, null, e) : g.event.dispatch.call(e, o),
              o.isDefaultPrevented() && i.preventDefault()
          }
      },
      g.removeEvent = E.removeEventListener ? function(t, e, i) {
          t.removeEventListener && t.removeEventListener(e, i, !1)
      }
      : function(t, e, i) {
          var n = "on" + e;
          t.detachEvent && (typeof t[n] === P && (t[n] = null),
          t.detachEvent(n, i))
      }
      ,
      g.Event = function(t, e) {
          return this instanceof g.Event ? (t && t.type ? (this.originalEvent = t,
          this.type = t.type,
          this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? et : it) : this.type = t,
          e && g.extend(this, e),
          this.timeStamp = t && t.timeStamp || g.now(),
          void (this[g.expando] = !0)) : new g.Event(t,e)
      }
      ,
      g.Event.prototype = {
          isDefaultPrevented: it,
          isPropagationStopped: it,
          isImmediatePropagationStopped: it,
          preventDefault: function() {
              var t = this.originalEvent;
              this.isDefaultPrevented = et,
              t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
          },
          stopPropagation: function() {
              var t = this.originalEvent;
              this.isPropagationStopped = et,
              t && (t.stopPropagation && t.stopPropagation(),
              t.cancelBubble = !0)
          },
          stopImmediatePropagation: function() {
              var t = this.originalEvent;
              this.isImmediatePropagationStopped = et,
              t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
              this.stopPropagation()
          }
      },
      g.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
      }, function(t, e) {
          g.event.special[t] = {
              delegateType: e,
              bindType: e,
              handle: function(t) {
                  var i, n = t.relatedTarget, o = t.handleObj;
                  return (!n || n !== this && !g.contains(this, n)) && (t.type = o.origType,
                  i = o.handler.apply(this, arguments),
                  t.type = e),
                  i
              }
          }
      }),
      f.submitBubbles || (g.event.special.submit = {
          setup: function() {
              return !g.nodeName(this, "form") && void g.event.add(this, "click._submit keypress._submit", function(t) {
                  var e = t.target
                    , i = g.nodeName(e, "input") || g.nodeName(e, "button") ? e.form : void 0;
                  i && !g._data(i, "submitBubbles") && (g.event.add(i, "submit._submit", function(t) {
                      t._submit_bubble = !0
                  }),
                  g._data(i, "submitBubbles", !0))
              })
          },
          postDispatch: function(t) {
              t._submit_bubble && (delete t._submit_bubble,
              this.parentNode && !t.isTrigger && g.event.simulate("submit", this.parentNode, t, !0))
          },
          teardown: function() {
              return !g.nodeName(this, "form") && void g.event.remove(this, "._submit")
          }
      }),
      f.changeBubbles || (g.event.special.change = {
          setup: function() {
              return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (g.event.add(this, "propertychange._change", function(t) {
                  "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
              }),
              g.event.add(this, "click._change", function(t) {
                  this._just_changed && !t.isTrigger && (this._just_changed = !1),
                  g.event.simulate("change", this, t, !0)
              })),
              !1) : void g.event.add(this, "beforeactivate._change", function(t) {
                  var e = t.target;
                  Y.test(e.nodeName) && !g._data(e, "changeBubbles") && (g.event.add(e, "change._change", function(t) {
                      !this.parentNode || t.isSimulated || t.isTrigger || g.event.simulate("change", this.parentNode, t, !0)
                  }),
                  g._data(e, "changeBubbles", !0))
              })
          },
          handle: function(t) {
              var e = t.target;
              return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
          },
          teardown: function() {
              return g.event.remove(this, "._change"),
              !Y.test(this.nodeName)
          }
      }),
      f.focusinBubbles || g.each({
          focus: "focusin",
          blur: "focusout"
      }, function(t, e) {
          var i = function(t) {
              g.event.simulate(e, t.target, g.event.fix(t), !0)
          };
          g.event.special[e] = {
              setup: function() {
                  var n = this.ownerDocument || this
                    , o = g._data(n, e);
                  o || n.addEventListener(t, i, !0),
                  g._data(n, e, (o || 0) + 1)
              },
              teardown: function() {
                  var n = this.ownerDocument || this
                    , o = g._data(n, e) - 1;
                  o ? g._data(n, e, o) : (n.removeEventListener(t, i, !0),
                  g._removeData(n, e))
              }
          }
      }),
      g.fn.extend({
          on: function(t, e, i, n, o) {
              var r, s;
              if ("object" == typeof t) {
                  for (r in "string" != typeof e && (i = i || e,
                  e = void 0),
                  t)
                      this.on(r, e, i, t[r], o);
                  return this
              }
              if (null == i && null == n ? (n = e,
              i = e = void 0) : null == n && ("string" == typeof e ? (n = i,
              i = void 0) : (n = i,
              i = e,
              e = void 0)),
              !1 === n)
                  n = it;
              else if (!n)
                  return this;
              return 1 === o && (s = n,
              (n = function(t) {
                  return g().off(t),
                  s.apply(this, arguments)
              }
              ).guid = s.guid || (s.guid = g.guid++)),
              this.each(function() {
                  g.event.add(this, t, n, i, e)
              })
          },
          one: function(t, e, i, n) {
              return this.on(t, e, i, n, 1)
          },
          off: function(t, e, i) {
              var n, o;
              if (t && t.preventDefault && t.handleObj)
                  return n = t.handleObj,
                  g(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                  this;
              if ("object" == typeof t) {
                  for (o in t)
                      this.off(o, e, t[o]);
                  return this
              }
              return (!1 === e || "function" == typeof e) && (i = e,
              e = void 0),
              !1 === i && (i = it),
              this.each(function() {
                  g.event.remove(this, t, i, e)
              })
          },
          trigger: function(t, e) {
              return this.each(function() {
                  g.event.trigger(t, e, this)
              })
          },
          triggerHandler: function(t, e) {
              var i = this[0];
              return i ? g.event.trigger(t, e, i, !0) : void 0
          }
      });
      var rt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
        , st = / jQuery\d+="(?:null|\d+)"/g
        , at = new RegExp("<(?:" + rt + ")[\\s/>]","i")
        , lt = /^\s+/
        , ct = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
        , dt = /<([\w:]+)/
        , ut = /<tbody/i
        , ht = /<|&#?\w+;/
        , ft = /<(?:script|style|link)/i
        , pt = /checked\s*(?:[^=]|=\s*.checked.)/i
        , gt = /^$|\/(?:java|ecma)script/i
        , mt = /^true\/(.*)/
        , vt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
        , yt = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          legend: [1, "<fieldset>", "</fieldset>"],
          area: [1, "<map>", "</map>"],
          param: [1, "<object>", "</object>"],
          thead: [1, "<table>", "</table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: f.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
      }
        , bt = ot(E).appendChild(E.createElement("div"));
      function wt(t, e) {
          var i, n, o = 0, r = typeof t.getElementsByTagName !== P ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== P ? t.querySelectorAll(e || "*") : void 0;
          if (!r)
              for (r = [],
              i = t.childNodes || t; null != (n = i[o]); o++)
                  !e || g.nodeName(n, e) ? r.push(n) : g.merge(r, wt(n, e));
          return void 0 === e || e && g.nodeName(t, e) ? g.merge([t], r) : r
      }
      function xt(t) {
          W.test(t.type) && (t.defaultChecked = t.checked)
      }
      function At(t, e) {
          return g.nodeName(t, "table") && g.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
      }
      function Ct(t) {
          return t.type = (null !== g.find.attr(t, "type")) + "/" + t.type,
          t
      }
      function St(t) {
          var e = mt.exec(t.type);
          return e ? t.type = e[1] : t.removeAttribute("type"),
          t
      }
      function Tt(t, e) {
          for (var i, n = 0; null != (i = t[n]); n++)
              g._data(i, "globalEval", !e || g._data(e[n], "globalEval"))
      }
      function _t(t, e) {
          if (1 === e.nodeType && g.hasData(t)) {
              var i, n, o, r = g._data(t), s = g._data(e, r), a = r.events;
              if (a)
                  for (i in delete s.handle,
                  s.events = {},
                  a)
                      for (n = 0,
                      o = a[i].length; o > n; n++)
                          g.event.add(e, i, a[i][n]);
              s.data && (s.data = g.extend({}, s.data))
          }
      }
      function Et(t, e) {
          var i, n, o;
          if (1 === e.nodeType) {
              if (i = e.nodeName.toLowerCase(),
              !f.noCloneEvent && e[g.expando]) {
                  for (n in (o = g._data(e)).events)
                      g.removeEvent(e, n, o.handle);
                  e.removeAttribute(g.expando)
              }
              "script" === i && e.text !== t.text ? (Ct(e).text = t.text,
              St(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML),
              f.html5Clone && t.innerHTML && !g.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && W.test(t.type) ? (e.defaultChecked = e.checked = t.checked,
              e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
          }
      }
      yt.optgroup = yt.option,
      yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead,
      yt.th = yt.td,
      g.extend({
          clone: function(t, e, i) {
              var n, o, r, s, a, l = g.contains(t.ownerDocument, t);
              if (f.html5Clone || g.isXMLDoc(t) || !at.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (bt.innerHTML = t.outerHTML,
              bt.removeChild(r = bt.firstChild)),
              !(f.noCloneEvent && f.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || g.isXMLDoc(t)))
                  for (n = wt(r),
                  a = wt(t),
                  s = 0; null != (o = a[s]); ++s)
                      n[s] && Et(o, n[s]);
              if (e)
                  if (i)
                      for (a = a || wt(t),
                      n = n || wt(r),
                      s = 0; null != (o = a[s]); s++)
                          _t(o, n[s]);
                  else
                      _t(t, r);
              return (n = wt(r, "script")).length > 0 && Tt(n, !l && wt(t, "script")),
              n = a = o = null,
              r
          },
          buildFragment: function(t, e, i, n) {
              for (var o, r, s, a, l, c, d, u = t.length, h = ot(e), p = [], m = 0; u > m; m++)
                  if ((r = t[m]) || 0 === r)
                      if ("object" === g.type(r))
                          g.merge(p, r.nodeType ? [r] : r);
                      else if (ht.test(r)) {
                          for (a = a || h.appendChild(e.createElement("div")),
                          l = (dt.exec(r) || ["", ""])[1].toLowerCase(),
                          d = yt[l] || yt._default,
                          a.innerHTML = d[1] + r.replace(ct, "<$1></$2>") + d[2],
                          o = d[0]; o--; )
                              a = a.lastChild;
                          if (!f.leadingWhitespace && lt.test(r) && p.push(e.createTextNode(lt.exec(r)[0])),
                          !f.tbody)
                              for (o = (r = "table" !== l || ut.test(r) ? "<table>" !== d[1] || ut.test(r) ? 0 : a : a.firstChild) && r.childNodes.length; o--; )
                                  g.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
                          for (g.merge(p, a.childNodes),
                          a.textContent = ""; a.firstChild; )
                              a.removeChild(a.firstChild);
                          a = h.lastChild
                      } else
                          p.push(e.createTextNode(r));
              for (a && h.removeChild(a),
              f.appendChecked || g.grep(wt(p, "input"), xt),
              m = 0; r = p[m++]; )
                  if ((!n || -1 === g.inArray(r, n)) && (s = g.contains(r.ownerDocument, r),
                  a = wt(h.appendChild(r), "script"),
                  s && Tt(a),
                  i))
                      for (o = 0; r = a[o++]; )
                          gt.test(r.type || "") && i.push(r);
              return a = null,
              h
          },
          cleanData: function(t, e) {
              for (var i, n, o, s, a = 0, l = g.expando, c = g.cache, d = f.deleteExpando, u = g.event.special; null != (i = t[a]); a++)
                  if ((e || g.acceptData(i)) && (s = (o = i[l]) && c[o])) {
                      if (s.events)
                          for (n in s.events)
                              u[n] ? g.event.remove(i, n) : g.removeEvent(i, n, s.handle);
                      c[o] && (delete c[o],
                      d ? delete i[l] : typeof i.removeAttribute !== P ? i.removeAttribute(l) : i[l] = null,
                      r.push(o))
                  }
          }
      }),
      g.fn.extend({
          text: function(t) {
              return K(this, function(t) {
                  return void 0 === t ? g.text(this) : this.empty().append((this[0] && this[0].ownerDocument || E).createTextNode(t))
              }, null, t, arguments.length)
          },
          append: function() {
              return this.domManip(arguments, function(t) {
                  1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || At(this, t).appendChild(t)
              })
          },
          prepend: function() {
              return this.domManip(arguments, function(t) {
                  if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                      var e = At(this, t);
                      e.insertBefore(t, e.firstChild)
                  }
              })
          },
          before: function() {
              return this.domManip(arguments, function(t) {
                  this.parentNode && this.parentNode.insertBefore(t, this)
              })
          },
          after: function() {
              return this.domManip(arguments, function(t) {
                  this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
              })
          },
          remove: function(t, e) {
              for (var i, n = t ? g.filter(t, this) : this, o = 0; null != (i = n[o]); o++)
                  e || 1 !== i.nodeType || g.cleanData(wt(i)),
                  i.parentNode && (e && g.contains(i.ownerDocument, i) && Tt(wt(i, "script")),
                  i.parentNode.removeChild(i));
              return this
          },
          empty: function() {
              for (var t, e = 0; null != (t = this[e]); e++) {
                  for (1 === t.nodeType && g.cleanData(wt(t, !1)); t.firstChild; )
                      t.removeChild(t.firstChild);
                  t.options && g.nodeName(t, "select") && (t.options.length = 0)
              }
              return this
          },
          clone: function(t, e) {
              return t = null != t && t,
              e = null == e ? t : e,
              this.map(function() {
                  return g.clone(this, t, e)
              })
          },
          html: function(t) {
              return K(this, function(t) {
                  var e = this[0] || {}
                    , i = 0
                    , n = this.length;
                  if (void 0 === t)
                      return 1 === e.nodeType ? e.innerHTML.replace(st, "") : void 0;
                  if (!("string" != typeof t || ft.test(t) || !f.htmlSerialize && at.test(t) || !f.leadingWhitespace && lt.test(t) || yt[(dt.exec(t) || ["", ""])[1].toLowerCase()])) {
                      t = t.replace(ct, "<$1></$2>");
                      try {
                          for (; n > i; i++)
                              1 === (e = this[i] || {}).nodeType && (g.cleanData(wt(e, !1)),
                              e.innerHTML = t);
                          e = 0
                      } catch (t) {}
                  }
                  e && this.empty().append(t)
              }, null, t, arguments.length)
          },
          replaceWith: function() {
              var t = arguments[0];
              return this.domManip(arguments, function(e) {
                  t = this.parentNode,
                  g.cleanData(wt(this)),
                  t && t.replaceChild(e, this)
              }),
              t && (t.length || t.nodeType) ? this : this.remove()
          },
          detach: function(t) {
              return this.remove(t, !0)
          },
          domManip: function(t, e) {
              t = a.apply([], t);
              var i, n, o, r, s, l, c = 0, d = this.length, u = this, h = d - 1, p = t[0], m = g.isFunction(p);
              if (m || d > 1 && "string" == typeof p && !f.checkClone && pt.test(p))
                  return this.each(function(i) {
                      var n = u.eq(i);
                      m && (t[0] = p.call(this, i, n.html())),
                      n.domManip(t, e)
                  });
              if (d && (i = (l = g.buildFragment(t, this[0].ownerDocument, !1, this)).firstChild,
              1 === l.childNodes.length && (l = i),
              i)) {
                  for (o = (r = g.map(wt(l, "script"), Ct)).length; d > c; c++)
                      n = l,
                      c !== h && (n = g.clone(n, !0, !0),
                      o && g.merge(r, wt(n, "script"))),
                      e.call(this[c], n, c);
                  if (o)
                      for (s = r[r.length - 1].ownerDocument,
                      g.map(r, St),
                      c = 0; o > c; c++)
                          n = r[c],
                          gt.test(n.type || "") && !g._data(n, "globalEval") && g.contains(s, n) && (n.src ? g._evalUrl && g._evalUrl(n.src) : g.globalEval((n.text || n.textContent || n.innerHTML || "").replace(vt, "")));
                  l = i = null
              }
              return this
          }
      }),
      g.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
      }, function(t, e) {
          g.fn[t] = function(t) {
              for (var i, n = 0, o = [], r = g(t), s = r.length - 1; s >= n; n++)
                  i = n === s ? this : this.clone(!0),
                  g(r[n])[e](i),
                  l.apply(o, i.get());
              return this.pushStack(o)
          }
      });
      var kt, It = {};
      function Ft(t, e) {
          var n, o = g(e.createElement(t)).appendTo(e.body), r = i.getDefaultComputedStyle && (n = i.getDefaultComputedStyle(o[0])) ? n.display : g.css(o[0], "display");
          return o.detach(),
          r
      }
      function Dt(t) {
          var e = E
            , i = It[t];
          return i || ("none" !== (i = Ft(t, e)) && i || ((e = ((kt = (kt || g("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || kt[0].contentDocument).document).write(),
          e.close(),
          i = Ft(t, e),
          kt.detach()),
          It[t] = i),
          i
      }
      !function() {
          var t;
          f.shrinkWrapBlocks = function() {
              return null != t ? t : (t = !1,
              (i = E.getElementsByTagName("body")[0]) && i.style ? (e = E.createElement("div"),
              (n = E.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
              i.appendChild(n).appendChild(e),
              typeof e.style.zoom !== P && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
              e.appendChild(E.createElement("div")).style.width = "5px",
              t = 3 !== e.offsetWidth),
              i.removeChild(n),
              t) : void 0);
              var e, i, n
          }
      }();
      var $t, Lt, Ot = /^margin/, Nt = new RegExp("^(" + Q + ")(?!px)[a-z%]+$","i"), Mt = /^(top|right|bottom|left)$/;
      function Bt(t, e) {
          return {
              get: function() {
                  var i = t();
                  if (null != i)
                      return i ? void delete this.get : (this.get = e).apply(this, arguments)
              }
          }
      }
      i.getComputedStyle ? ($t = function(t) {
          return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : i.getComputedStyle(t, null)
      }
      ,
      Lt = function(t, e, i) {
          var n, o, r, s, a = t.style;
          return s = (i = i || $t(t)) ? i.getPropertyValue(e) || i[e] : void 0,
          i && ("" !== s || g.contains(t.ownerDocument, t) || (s = g.style(t, e)),
          Nt.test(s) && Ot.test(e) && (n = a.width,
          o = a.minWidth,
          r = a.maxWidth,
          a.minWidth = a.maxWidth = a.width = s,
          s = i.width,
          a.width = n,
          a.minWidth = o,
          a.maxWidth = r)),
          void 0 === s ? s : s + ""
      }
      ) : E.documentElement.currentStyle && ($t = function(t) {
          return t.currentStyle
      }
      ,
      Lt = function(t, e, i) {
          var n, o, r, s, a = t.style;
          return null == (s = (i = i || $t(t)) ? i[e] : void 0) && a && a[e] && (s = a[e]),
          Nt.test(s) && !Mt.test(e) && (n = a.left,
          (r = (o = t.runtimeStyle) && o.left) && (o.left = t.currentStyle.left),
          a.left = "fontSize" === e ? "1em" : s,
          s = a.pixelLeft + "px",
          a.left = n,
          r && (o.left = r)),
          void 0 === s ? s : s + "" || "auto"
      }
      ),
      function() {
          var t, e, n, o, r, s, a;
          if ((t = E.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
          e = (n = t.getElementsByTagName("a")[0]) && n.style) {
              function l() {
                  var t, e, n, l;
                  (e = E.getElementsByTagName("body")[0]) && e.style && (t = E.createElement("div"),
                  (n = E.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                  e.appendChild(n).appendChild(t),
                  t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                  o = r = !1,
                  a = !0,
                  i.getComputedStyle && (o = "1%" !== (i.getComputedStyle(t, null) || {}).top,
                  r = "4px" === (i.getComputedStyle(t, null) || {
                      width: "4px"
                  }).width,
                  (l = t.appendChild(E.createElement("div"))).style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                  l.style.marginRight = l.style.width = "0",
                  t.style.width = "1px",
                  a = !parseFloat((i.getComputedStyle(l, null) || {}).marginRight),
                  t.removeChild(l)),
                  t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                  (l = t.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                  (s = 0 === l[0].offsetHeight) && (l[0].style.display = "",
                  l[1].style.display = "none",
                  s = 0 === l[0].offsetHeight),
                  e.removeChild(n))
              }
              e.cssText = "float:left;opacity:.5",
              f.opacity = "0.5" === e.opacity,
              f.cssFloat = !!e.cssFloat,
              t.style.backgroundClip = "content-box",
              t.cloneNode(!0).style.backgroundClip = "",
              f.clearCloneStyle = "content-box" === t.style.backgroundClip,
              f.boxSizing = "" === e.boxSizing || "" === e.MozBoxSizing || "" === e.WebkitBoxSizing,
              g.extend(f, {
                  reliableHiddenOffsets: function() {
                      return null == s && l(),
                      s
                  },
                  boxSizingReliable: function() {
                      return null == r && l(),
                      r
                  },
                  pixelPosition: function() {
                      return null == o && l(),
                      o
                  },
                  reliableMarginRight: function() {
                      return null == a && l(),
                      a
                  }
              })
          }
      }(),
      g.swap = function(t, e, i, n) {
          var o, r, s = {};
          for (r in e)
              s[r] = t.style[r],
              t.style[r] = e[r];
          for (r in o = i.apply(t, n || []),
          e)
              t.style[r] = s[r];
          return o
      }
      ;
      var Pt = /alpha\([^)]*\)/i
        , Ht = /opacity\s*=\s*([^)]*)/
        , jt = /^(none|table(?!-c[ea]).+)/
        , Vt = new RegExp("^(" + Q + ")(.*)$","i")
        , Rt = new RegExp("^([+-])=(" + Q + ")","i")
        , zt = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
      }
        , Ut = {
          letterSpacing: "0",
          fontWeight: "400"
      }
        , Qt = ["Webkit", "O", "Moz", "ms"];
      function qt(t, e) {
          if (e in t)
              return e;
          for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, o = Qt.length; o--; )
              if ((e = Qt[o] + i)in t)
                  return e;
          return n
      }
      function Gt(t, e) {
          for (var i, n, o, r = [], s = 0, a = t.length; a > s; s++)
              (n = t[s]).style && (r[s] = g._data(n, "olddisplay"),
              i = n.style.display,
              e ? (r[s] || "none" !== i || (n.style.display = ""),
              "" === n.style.display && G(n) && (r[s] = g._data(n, "olddisplay", Dt(n.nodeName)))) : (o = G(n),
              (i && "none" !== i || !o) && g._data(n, "olddisplay", o ? i : g.css(n, "display"))));
          for (s = 0; a > s; s++)
              (n = t[s]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[s] || "" : "none"));
          return t
      }
      function Kt(t, e, i) {
          var n = Vt.exec(e);
          return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
      }
      function Wt(t, e, i, n, o) {
          for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2)
              "margin" === i && (s += g.css(t, i + q[r], !0, o)),
              n ? ("content" === i && (s -= g.css(t, "padding" + q[r], !0, o)),
              "margin" !== i && (s -= g.css(t, "border" + q[r] + "Width", !0, o))) : (s += g.css(t, "padding" + q[r], !0, o),
              "padding" !== i && (s += g.css(t, "border" + q[r] + "Width", !0, o)));
          return s
      }
      function Yt(t, e, i) {
          var n = !0
            , o = "width" === e ? t.offsetWidth : t.offsetHeight
            , r = $t(t)
            , s = f.boxSizing && "border-box" === g.css(t, "boxSizing", !1, r);
          if (0 >= o || null == o) {
              if ((0 > (o = Lt(t, e, r)) || null == o) && (o = t.style[e]),
              Nt.test(o))
                  return o;
              n = s && (f.boxSizingReliable() || o === t.style[e]),
              o = parseFloat(o) || 0
          }
          return o + Wt(t, e, i || (s ? "border" : "content"), n, r) + "px"
      }
      function Xt(t, e, i, n, o) {
          return new Xt.prototype.init(t,e,i,n,o)
      }
      g.extend({
          cssHooks: {
              opacity: {
                  get: function(t, e) {
                      if (e) {
                          var i = Lt(t, "opacity");
                          return "" === i ? "1" : i
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
              float: f.cssFloat ? "cssFloat" : "styleFloat"
          },
          style: function(t, e, i, n) {
              if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                  var o, r, s, a = g.camelCase(e), l = t.style;
                  if (e = g.cssProps[a] || (g.cssProps[a] = qt(l, a)),
                  s = g.cssHooks[e] || g.cssHooks[a],
                  void 0 === i)
                      return s && "get"in s && void 0 !== (o = s.get(t, !1, n)) ? o : l[e];
                  if ("string" === (r = typeof i) && (o = Rt.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(g.css(t, e)),
                  r = "number"),
                  null != i && i == i && ("number" !== r || g.cssNumber[a] || (i += "px"),
                  f.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"),
                  !(s && "set"in s && void 0 === (i = s.set(t, i, n)))))
                      try {
                          l[e] = i
                      } catch (t) {}
              }
          },
          css: function(t, e, i, n) {
              var o, r, s, a = g.camelCase(e);
              return e = g.cssProps[a] || (g.cssProps[a] = qt(t.style, a)),
              (s = g.cssHooks[e] || g.cssHooks[a]) && "get"in s && (r = s.get(t, !0, i)),
              void 0 === r && (r = Lt(t, e, n)),
              "normal" === r && e in Ut && (r = Ut[e]),
              "" === i || i ? (o = parseFloat(r),
              !0 === i || g.isNumeric(o) ? o || 0 : r) : r
          }
      }),
      g.each(["height", "width"], function(t, e) {
          g.cssHooks[e] = {
              get: function(t, i, n) {
                  return i ? jt.test(g.css(t, "display")) && 0 === t.offsetWidth ? g.swap(t, zt, function() {
                      return Yt(t, e, n)
                  }) : Yt(t, e, n) : void 0
              },
              set: function(t, i, n) {
                  var o = n && $t(t);
                  return Kt(0, i, n ? Wt(t, e, n, f.boxSizing && "border-box" === g.css(t, "boxSizing", !1, o), o) : 0)
              }
          }
      }),
      f.opacity || (g.cssHooks.opacity = {
          get: function(t, e) {
              return Ht.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
          },
          set: function(t, e) {
              var i = t.style
                , n = t.currentStyle
                , o = g.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : ""
                , r = n && n.filter || i.filter || "";
              i.zoom = 1,
              (e >= 1 || "" === e) && "" === g.trim(r.replace(Pt, "")) && i.removeAttribute && (i.removeAttribute("filter"),
              "" === e || n && !n.filter) || (i.filter = Pt.test(r) ? r.replace(Pt, o) : r + " " + o)
          }
      }),
      g.cssHooks.marginRight = Bt(f.reliableMarginRight, function(t, e) {
          return e ? g.swap(t, {
              display: "inline-block"
          }, Lt, [t, "marginRight"]) : void 0
      }),
      g.each({
          margin: "",
          padding: "",
          border: "Width"
      }, function(t, e) {
          g.cssHooks[t + e] = {
              expand: function(i) {
                  for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++)
                      o[t + q[n] + e] = r[n] || r[n - 2] || r[0];
                  return o
              }
          },
          Ot.test(t) || (g.cssHooks[t + e].set = Kt)
      }),
      g.fn.extend({
          css: function(t, e) {
              return K(this, function(t, e, i) {
                  var n, o, r = {}, s = 0;
                  if (g.isArray(e)) {
                      for (n = $t(t),
                      o = e.length; o > s; s++)
                          r[e[s]] = g.css(t, e[s], !1, n);
                      return r
                  }
                  return void 0 !== i ? g.style(t, e, i) : g.css(t, e)
              }, t, e, arguments.length > 1)
          },
          show: function() {
              return Gt(this, !0)
          },
          hide: function() {
              return Gt(this)
          },
          toggle: function(t) {
              return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                  G(this) ? g(this).show() : g(this).hide()
              })
          }
      }),
      g.Tween = Xt,
      Xt.prototype = {
          constructor: Xt,
          init: function(t, e, i, n, o, r) {
              this.elem = t,
              this.prop = i,
              this.easing = o || "swing",
              this.options = e,
              this.start = this.now = this.cur(),
              this.end = n,
              this.unit = r || (g.cssNumber[i] ? "" : "px")
          },
          cur: function() {
              var t = Xt.propHooks[this.prop];
              return t && t.get ? t.get(this) : Xt.propHooks._default.get(this)
          },
          run: function(t) {
              var e, i = Xt.propHooks[this.prop];
              return this.pos = e = this.options.duration ? g.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t,
              this.now = (this.end - this.start) * e + this.start,
              this.options.step && this.options.step.call(this.elem, this.now, this),
              i && i.set ? i.set(this) : Xt.propHooks._default.set(this),
              this
          }
      },
      Xt.prototype.init.prototype = Xt.prototype,
      Xt.propHooks = {
          _default: {
              get: function(t) {
                  var e;
                  return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = g.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 : t.elem[t.prop]
              },
              set: function(t) {
                  g.fx.step[t.prop] ? g.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[g.cssProps[t.prop]] || g.cssHooks[t.prop]) ? g.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
              }
          }
      },
      Xt.propHooks.scrollTop = Xt.propHooks.scrollLeft = {
          set: function(t) {
              t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
          }
      },
      g.easing = {
          linear: function(t) {
              return t
          },
          swing: function(t) {
              return .5 - Math.cos(t * Math.PI) / 2
          }
      },
      g.fx = Xt.prototype.init,
      g.fx.step = {};
      var Zt, Jt, te = /^(?:toggle|show|hide)$/, ee = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$","i"), ie = /queueHooks$/, ne = [function(t, e, i) {
          var n, o, r, s, a, l, c, d = this, u = {}, h = t.style, p = t.nodeType && G(t), m = g._data(t, "fxshow");
          for (n in i.queue || (null == (a = g._queueHooks(t, "fx")).unqueued && (a.unqueued = 0,
          l = a.empty.fire,
          a.empty.fire = function() {
              a.unqueued || l()
          }
          ),
          a.unqueued++,
          d.always(function() {
              d.always(function() {
                  a.unqueued--,
                  g.queue(t, "fx").length || a.empty.fire()
              })
          })),
          1 === t.nodeType && ("height"in e || "width"in e) && (i.overflow = [h.overflow, h.overflowX, h.overflowY],
          c = g.css(t, "display"),
          "inline" === ("none" === c ? g._data(t, "olddisplay") || Dt(t.nodeName) : c) && "none" === g.css(t, "float") && (f.inlineBlockNeedsLayout && "inline" !== Dt(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")),
          i.overflow && (h.overflow = "hidden",
          f.shrinkWrapBlocks() || d.always(function() {
              h.overflow = i.overflow[0],
              h.overflowX = i.overflow[1],
              h.overflowY = i.overflow[2]
          })),
          e)
              if (o = e[n],
              te.exec(o)) {
                  if (delete e[n],
                  r = r || "toggle" === o,
                  o === (p ? "hide" : "show")) {
                      if ("show" !== o || !m || void 0 === m[n])
                          continue;
                      p = !0
                  }
                  u[n] = m && m[n] || g.style(t, n)
              } else
                  c = void 0;
          if (g.isEmptyObject(u))
              "inline" === ("none" === c ? Dt(t.nodeName) : c) && (h.display = c);
          else
              for (n in m ? "hidden"in m && (p = m.hidden) : m = g._data(t, "fxshow", {}),
              r && (m.hidden = !p),
              p ? g(t).show() : d.done(function() {
                  g(t).hide()
              }),
              d.done(function() {
                  var e;
                  for (e in g._removeData(t, "fxshow"),
                  u)
                      g.style(t, e, u[e])
              }),
              u)
                  s = ae(p ? m[n] : 0, n, d),
                  n in m || (m[n] = s.start,
                  p && (s.end = s.start,
                  s.start = "width" === n || "height" === n ? 1 : 0))
      }
      ], oe = {
          "*": [function(t, e) {
              var i = this.createTween(t, e)
                , n = i.cur()
                , o = ee.exec(e)
                , r = o && o[3] || (g.cssNumber[t] ? "" : "px")
                , s = (g.cssNumber[t] || "px" !== r && +n) && ee.exec(g.css(i.elem, t))
                , a = 1
                , l = 20;
              if (s && s[3] !== r) {
                  r = r || s[3],
                  o = o || [],
                  s = +n || 1;
                  do {
                      s /= a = a || ".5",
                      g.style(i.elem, t, s + r)
                  } while (a !== (a = i.cur() / n) && 1 !== a && --l)
              }
              return o && (s = i.start = +s || +n || 0,
              i.unit = r,
              i.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]),
              i
          }
          ]
      };
      function re() {
          return setTimeout(function() {
              Zt = void 0
          }),
          Zt = g.now()
      }
      function se(t, e) {
          var i, n = {
              height: t
          }, o = 0;
          for (e = e ? 1 : 0; 4 > o; o += 2 - e)
              n["margin" + (i = q[o])] = n["padding" + i] = t;
          return e && (n.opacity = n.width = t),
          n
      }
      function ae(t, e, i) {
          for (var n, o = (oe[e] || []).concat(oe["*"]), r = 0, s = o.length; s > r; r++)
              if (n = o[r].call(i, e, t))
                  return n
      }
      function le(t, e, i) {
          var n, o, r = 0, s = ne.length, a = g.Deferred().always(function() {
              delete l.elem
          }), l = function() {
              if (o)
                  return !1;
              for (var e = Zt || re(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), r = 0, s = c.tweens.length; s > r; r++)
                  c.tweens[r].run(n);
              return a.notifyWith(t, [c, n, i]),
              1 > n && s ? i : (a.resolveWith(t, [c]),
              !1)
          }, c = a.promise({
              elem: t,
              props: g.extend({}, e),
              opts: g.extend(!0, {
                  specialEasing: {}
              }, i),
              originalProperties: e,
              originalOptions: i,
              startTime: Zt || re(),
              duration: i.duration,
              tweens: [],
              createTween: function(e, i) {
                  var n = g.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                  return c.tweens.push(n),
                  n
              },
              stop: function(e) {
                  var i = 0
                    , n = e ? c.tweens.length : 0;
                  if (o)
                      return this;
                  for (o = !0; n > i; i++)
                      c.tweens[i].run(1);
                  return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]),
                  this
              }
          }), d = c.props;
          for (function(t, e) {
              var i, n, o, r, s;
              for (i in t)
                  if (o = e[n = g.camelCase(i)],
                  r = t[i],
                  g.isArray(r) && (o = r[1],
                  r = t[i] = r[0]),
                  i !== n && (t[n] = r,
                  delete t[i]),
                  (s = g.cssHooks[n]) && "expand"in s)
                      for (i in r = s.expand(r),
                      delete t[n],
                      r)
                          i in t || (t[i] = r[i],
                          e[i] = o);
                  else
                      e[n] = o
          }(d, c.opts.specialEasing); s > r; r++)
              if (n = ne[r].call(c, t, d, c.opts))
                  return n;
          return g.map(d, ae, c),
          g.isFunction(c.opts.start) && c.opts.start.call(t, c),
          g.fx.timer(g.extend(l, {
              elem: t,
              anim: c,
              queue: c.opts.queue
          })),
          c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
      }
      g.Animation = g.extend(le, {
          tweener: function(t, e) {
              g.isFunction(t) ? (e = t,
              t = ["*"]) : t = t.split(" ");
              for (var i, n = 0, o = t.length; o > n; n++)
                  i = t[n],
                  oe[i] = oe[i] || [],
                  oe[i].unshift(e)
          },
          prefilter: function(t, e) {
              e ? ne.unshift(t) : ne.push(t)
          }
      }),
      g.speed = function(t, e, i) {
          var n = t && "object" == typeof t ? g.extend({}, t) : {
              complete: i || !i && e || g.isFunction(t) && t,
              duration: t,
              easing: i && e || e && !g.isFunction(e) && e
          };
          return n.duration = g.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in g.fx.speeds ? g.fx.speeds[n.duration] : g.fx.speeds._default,
          (null == n.queue || !0 === n.queue) && (n.queue = "fx"),
          n.old = n.complete,
          n.complete = function() {
              g.isFunction(n.old) && n.old.call(this),
              n.queue && g.dequeue(this, n.queue)
          }
          ,
          n
      }
      ,
      g.fn.extend({
          fadeTo: function(t, e, i, n) {
              return this.filter(G).css("opacity", 0).show().end().animate({
                  opacity: e
              }, t, i, n)
          },
          animate: function(t, e, i, n) {
              var o = g.isEmptyObject(t)
                , r = g.speed(e, i, n)
                , s = function() {
                  var e = le(this, g.extend({}, t), r);
                  (o || g._data(this, "finish")) && e.stop(!0)
              };
              return s.finish = s,
              o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
          },
          stop: function(t, e, i) {
              var n = function(t) {
                  var e = t.stop;
                  delete t.stop,
                  e(i)
              };
              return "string" != typeof t && (i = e,
              e = t,
              t = void 0),
              e && !1 !== t && this.queue(t || "fx", []),
              this.each(function() {
                  var e = !0
                    , o = null != t && t + "queueHooks"
                    , r = g.timers
                    , s = g._data(this);
                  if (o)
                      s[o] && s[o].stop && n(s[o]);
                  else
                      for (o in s)
                          s[o] && s[o].stop && ie.test(o) && n(s[o]);
                  for (o = r.length; o--; )
                      r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(i),
                      e = !1,
                      r.splice(o, 1));
                  (e || !i) && g.dequeue(this, t)
              })
          },
          finish: function(t) {
              return !1 !== t && (t = t || "fx"),
              this.each(function() {
                  var e, i = g._data(this), n = i[t + "queue"], o = i[t + "queueHooks"], r = g.timers, s = n ? n.length : 0;
                  for (i.finish = !0,
                  g.queue(this, t, []),
                  o && o.stop && o.stop.call(this, !0),
                  e = r.length; e--; )
                      r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0),
                      r.splice(e, 1));
                  for (e = 0; s > e; e++)
                      n[e] && n[e].finish && n[e].finish.call(this);
                  delete i.finish
              })
          }
      }),
      g.each(["toggle", "show", "hide"], function(t, e) {
          var i = g.fn[e];
          g.fn[e] = function(t, n, o) {
              return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(se(e, !0), t, n, o)
          }
      }),
      g.each({
          slideDown: se("show"),
          slideUp: se("hide"),
          slideToggle: se("toggle"),
          fadeIn: {
              opacity: "show"
          },
          fadeOut: {
              opacity: "hide"
          },
          fadeToggle: {
              opacity: "toggle"
          }
      }, function(t, e) {
          g.fn[t] = function(t, i, n) {
              return this.animate(e, t, i, n)
          }
      }),
      g.timers = [],
      g.fx.tick = function() {
          var t, e = g.timers, i = 0;
          for (Zt = g.now(); i < e.length; i++)
              (t = e[i])() || e[i] !== t || e.splice(i--, 1);
          e.length || g.fx.stop(),
          Zt = void 0
      }
      ,
      g.fx.timer = function(t) {
          g.timers.push(t),
          t() ? g.fx.start() : g.timers.pop()
      }
      ,
      g.fx.interval = 13,
      g.fx.start = function() {
          Jt || (Jt = setInterval(g.fx.tick, g.fx.interval))
      }
      ,
      g.fx.stop = function() {
          clearInterval(Jt),
          Jt = null
      }
      ,
      g.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
      },
      g.fn.delay = function(t, e) {
          return t = g.fx && g.fx.speeds[t] || t,
          e = e || "fx",
          this.queue(e, function(e, i) {
              var n = setTimeout(e, t);
              i.stop = function() {
                  clearTimeout(n)
              }
          })
      }
      ,
      function() {
          var t, e, i, n, o;
          (e = E.createElement("div")).setAttribute("className", "t"),
          e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
          n = e.getElementsByTagName("a")[0],
          o = (i = E.createElement("select")).appendChild(E.createElement("option")),
          t = e.getElementsByTagName("input")[0],
          n.style.cssText = "top:1px",
          f.getSetAttribute = "t" !== e.className,
          f.style = /top/.test(n.getAttribute("style")),
          f.hrefNormalized = "/a" === n.getAttribute("href"),
          f.checkOn = !!t.value,
          f.optSelected = o.selected,
          f.enctype = !!E.createElement("form").enctype,
          i.disabled = !0,
          f.optDisabled = !o.disabled,
          (t = E.createElement("input")).setAttribute("value", ""),
          f.input = "" === t.getAttribute("value"),
          t.value = "t",
          t.setAttribute("type", "radio"),
          f.radioValue = "t" === t.value
      }();
      var ce = /\r/g;
      g.fn.extend({
          val: function(t) {
              var e, i, n, o = this[0];
              return arguments.length ? (n = g.isFunction(t),
              this.each(function(i) {
                  var o;
                  1 === this.nodeType && (null == (o = n ? t.call(this, i, g(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : g.isArray(o) && (o = g.map(o, function(t) {
                      return null == t ? "" : t + ""
                  })),
                  (e = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()]) && "set"in e && void 0 !== e.set(this, o, "value") || (this.value = o))
              })) : o ? (e = g.valHooks[o.type] || g.valHooks[o.nodeName.toLowerCase()]) && "get"in e && void 0 !== (i = e.get(o, "value")) ? i : "string" == typeof (i = o.value) ? i.replace(ce, "") : null == i ? "" : i : void 0
          }
      }),
      g.extend({
          valHooks: {
              option: {
                  get: function(t) {
                      var e = g.find.attr(t, "value");
                      return null != e ? e : g.trim(g.text(t))
                  }
              },
              select: {
                  get: function(t) {
                      for (var e, i, n = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : n.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                          if (!(!(i = n[l]).selected && l !== o || (f.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && g.nodeName(i.parentNode, "optgroup"))) {
                              if (e = g(i).val(),
                              r)
                                  return e;
                              s.push(e)
                          }
                      return s
                  },
                  set: function(t, e) {
                      for (var i, n, o = t.options, r = g.makeArray(e), s = o.length; s--; )
                          if (n = o[s],
                          g.inArray(g.valHooks.option.get(n), r) >= 0)
                              try {
                                  n.selected = i = !0
                              } catch (t) {
                                  n.scrollHeight
                              }
                          else
                              n.selected = !1;
                      return i || (t.selectedIndex = -1),
                      o
                  }
              }
          }
      }),
      g.each(["radio", "checkbox"], function() {
          g.valHooks[this] = {
              set: function(t, e) {
                  return g.isArray(e) ? t.checked = g.inArray(g(t).val(), e) >= 0 : void 0
              }
          },
          f.checkOn || (g.valHooks[this].get = function(t) {
              return null === t.getAttribute("value") ? "on" : t.value
          }
          )
      });
      var de, ue, he = g.expr.attrHandle, fe = /^(?:checked|selected)$/i, pe = f.getSetAttribute, ge = f.input;
      g.fn.extend({
          attr: function(t, e) {
              return K(this, g.attr, t, e, arguments.length > 1)
          },
          removeAttr: function(t) {
              return this.each(function() {
                  g.removeAttr(this, t)
              })
          }
      }),
      g.extend({
          attr: function(t, e, i) {
              var n, o, r = t.nodeType;
              if (t && 3 !== r && 8 !== r && 2 !== r)
                  return typeof t.getAttribute === P ? g.prop(t, e, i) : (1 === r && g.isXMLDoc(t) || (e = e.toLowerCase(),
                  n = g.attrHooks[e] || (g.expr.match.bool.test(e) ? ue : de)),
                  void 0 === i ? n && "get"in n && null !== (o = n.get(t, e)) ? o : null == (o = g.find.attr(t, e)) ? void 0 : o : null !== i ? n && "set"in n && void 0 !== (o = n.set(t, i, e)) ? o : (t.setAttribute(e, i + ""),
                  i) : void g.removeAttr(t, e))
          },
          removeAttr: function(t, e) {
              var i, n, o = 0, r = e && e.match(L);
              if (r && 1 === t.nodeType)
                  for (; i = r[o++]; )
                      n = g.propFix[i] || i,
                      g.expr.match.bool.test(i) ? ge && pe || !fe.test(i) ? t[n] = !1 : t[g.camelCase("default-" + i)] = t[n] = !1 : g.attr(t, i, ""),
                      t.removeAttribute(pe ? i : n)
          },
          attrHooks: {
              type: {
                  set: function(t, e) {
                      if (!f.radioValue && "radio" === e && g.nodeName(t, "input")) {
                          var i = t.value;
                          return t.setAttribute("type", e),
                          i && (t.value = i),
                          e
                      }
                  }
              }
          }
      }),
      ue = {
          set: function(t, e, i) {
              return !1 === e ? g.removeAttr(t, i) : ge && pe || !fe.test(i) ? t.setAttribute(!pe && g.propFix[i] || i, i) : t[g.camelCase("default-" + i)] = t[i] = !0,
              i
          }
      },
      g.each(g.expr.match.bool.source.match(/\w+/g), function(t, e) {
          var i = he[e] || g.find.attr;
          he[e] = ge && pe || !fe.test(e) ? function(t, e, n) {
              var o, r;
              return n || (r = he[e],
              he[e] = o,
              o = null != i(t, e, n) ? e.toLowerCase() : null,
              he[e] = r),
              o
          }
          : function(t, e, i) {
              return i ? void 0 : t[g.camelCase("default-" + e)] ? e.toLowerCase() : null
          }
      }),
      ge && pe || (g.attrHooks.value = {
          set: function(t, e, i) {
              return g.nodeName(t, "input") ? void (t.defaultValue = e) : de && de.set(t, e, i)
          }
      }),
      pe || (de = {
          set: function(t, e, i) {
              var n = t.getAttributeNode(i);
              return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)),
              n.value = e += "",
              "value" === i || e === t.getAttribute(i) ? e : void 0
          }
      },
      he.id = he.name = he.coords = function(t, e, i) {
          var n;
          return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
      }
      ,
      g.valHooks.button = {
          get: function(t, e) {
              var i = t.getAttributeNode(e);
              return i && i.specified ? i.value : void 0
          },
          set: de.set
      },
      g.attrHooks.contenteditable = {
          set: function(t, e, i) {
              de.set(t, "" !== e && e, i)
          }
      },
      g.each(["width", "height"], function(t, e) {
          g.attrHooks[e] = {
              set: function(t, i) {
                  return "" === i ? (t.setAttribute(e, "auto"),
                  i) : void 0
              }
          }
      })),
      f.style || (g.attrHooks.style = {
          get: function(t) {
              return t.style.cssText || void 0
          },
          set: function(t, e) {
              return t.style.cssText = e + ""
          }
      });
      var me = /^(?:input|select|textarea|button|object)$/i
        , ve = /^(?:a|area)$/i;
      g.fn.extend({
          prop: function(t, e) {
              return K(this, g.prop, t, e, arguments.length > 1)
          },
          removeProp: function(t) {
              return t = g.propFix[t] || t,
              this.each(function() {
                  try {
                      this[t] = void 0,
                      delete this[t]
                  } catch (t) {}
              })
          }
      }),
      g.extend({
          propFix: {
              for: "htmlFor",
              class: "className"
          },
          prop: function(t, e, i) {
              var n, o, r = t.nodeType;
              if (t && 3 !== r && 8 !== r && 2 !== r)
                  return (1 !== r || !g.isXMLDoc(t)) && (e = g.propFix[e] || e,
                  o = g.propHooks[e]),
                  void 0 !== i ? o && "set"in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get"in o && null !== (n = o.get(t, e)) ? n : t[e]
          },
          propHooks: {
              tabIndex: {
                  get: function(t) {
                      var e = g.find.attr(t, "tabindex");
                      return e ? parseInt(e, 10) : me.test(t.nodeName) || ve.test(t.nodeName) && t.href ? 0 : -1
                  }
              }
          }
      }),
      f.hrefNormalized || g.each(["href", "src"], function(t, e) {
          g.propHooks[e] = {
              get: function(t) {
                  return t.getAttribute(e, 4)
              }
          }
      }),
      f.optSelected || (g.propHooks.selected = {
          get: function(t) {
              var e = t.parentNode;
              return e && (e.selectedIndex,
              e.parentNode && e.parentNode.selectedIndex),
              null
          }
      }),
      g.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
          g.propFix[this.toLowerCase()] = this
      }),
      f.enctype || (g.propFix.enctype = "encoding");
      var ye = /[\t\r\n\f]/g;
      g.fn.extend({
          addClass: function(t) {
              var e, i, n, o, r, s, a = 0, l = this.length, c = "string" == typeof t && t;
              if (g.isFunction(t))
                  return this.each(function(e) {
                      g(this).addClass(t.call(this, e, this.className))
                  });
              if (c)
                  for (e = (t || "").match(L) || []; l > a; a++)
                      if (n = 1 === (i = this[a]).nodeType && (i.className ? (" " + i.className + " ").replace(ye, " ") : " ")) {
                          for (r = 0; o = e[r++]; )
                              n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                          s = g.trim(n),
                          i.className !== s && (i.className = s)
                      }
              return this
          },
          removeClass: function(t) {
              var e, i, n, o, r, s, a = 0, l = this.length, c = 0 === arguments.length || "string" == typeof t && t;
              if (g.isFunction(t))
                  return this.each(function(e) {
                      g(this).removeClass(t.call(this, e, this.className))
                  });
              if (c)
                  for (e = (t || "").match(L) || []; l > a; a++)
                      if (n = 1 === (i = this[a]).nodeType && (i.className ? (" " + i.className + " ").replace(ye, " ") : "")) {
                          for (r = 0; o = e[r++]; )
                              for (; n.indexOf(" " + o + " ") >= 0; )
                                  n = n.replace(" " + o + " ", " ");
                          s = t ? g.trim(n) : "",
                          i.className !== s && (i.className = s)
                      }
              return this
          },
          toggleClass: function(t, e) {
              var i = typeof t;
              return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(g.isFunction(t) ? function(i) {
                  g(this).toggleClass(t.call(this, i, this.className, e), e)
              }
              : function() {
                  if ("string" === i)
                      for (var e, n = 0, o = g(this), r = t.match(L) || []; e = r[n++]; )
                          o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                  else
                      (i === P || "boolean" === i) && (this.className && g._data(this, "__className__", this.className),
                      this.className = this.className || !1 === t ? "" : g._data(this, "__className__") || "")
              }
              )
          },
          hasClass: function(t) {
              for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                  if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(ye, " ").indexOf(e) >= 0)
                      return !0;
              return !1
          }
      }),
      g.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
          g.fn[e] = function(t, i) {
              return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
          }
      }),
      g.fn.extend({
          hover: function(t, e) {
              return this.mouseenter(t).mouseleave(e || t)
          },
          bind: function(t, e, i) {
              return this.on(t, null, e, i)
          },
          unbind: function(t, e) {
              return this.off(t, null, e)
          },
          delegate: function(t, e, i, n) {
              return this.on(e, t, i, n)
          },
          undelegate: function(t, e, i) {
              return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
          }
      });
      var be = g.now()
        , we = /\?/
        , xe = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
      g.parseJSON = function(t) {
          if (i.JSON && i.JSON.parse)
              return i.JSON.parse(t + "");
          var e, n = null, o = g.trim(t + "");
          return o && !g.trim(o.replace(xe, function(t, i, o, r) {
              return e && i && (n = 0),
              0 === n ? t : (e = o || i,
              n += !r - !o,
              "")
          })) ? Function("return " + o)() : g.error("Invalid JSON: " + t)
      }
      ,
      g.parseXML = function(t) {
          var e;
          if (!t || "string" != typeof t)
              return null;
          try {
              i.DOMParser ? e = (new DOMParser).parseFromString(t, "text/xml") : ((e = new ActiveXObject("Microsoft.XMLDOM")).async = "false",
              e.loadXML(t))
          } catch (t) {
              e = void 0
          }
          return e && e.documentElement && !e.getElementsByTagName("parsererror").length || g.error("Invalid XML: " + t),
          e
      }
      ;
      var Ae, Ce, Se = /#.*$/, Te = /([?&])_=[^&]*/, _e = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ee = /^(?:GET|HEAD)$/, ke = /^\/\//, Ie = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Fe = {}, De = {}, $e = "*/".concat("*");
      try {
          Ce = location.href
      } catch (t) {
          (Ce = E.createElement("a")).href = "",
          Ce = Ce.href
      }
      function Le(t) {
          return function(e, i) {
              "string" != typeof e && (i = e,
              e = "*");
              var n, o = 0, r = e.toLowerCase().match(L) || [];
              if (g.isFunction(i))
                  for (; n = r[o++]; )
                      "+" === n.charAt(0) ? (n = n.slice(1) || "*",
                      (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
          }
      }
      function Oe(t, e, i, n) {
          var o = {}
            , r = t === De;
          function s(a) {
              var l;
              return o[a] = !0,
              g.each(t[a] || [], function(t, a) {
                  var c = a(e, i, n);
                  return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c),
                  s(c),
                  !1)
              }),
              l
          }
          return s(e.dataTypes[0]) || !o["*"] && s("*")
      }
      function Ne(t, e) {
          var i, n, o = g.ajaxSettings.flatOptions || {};
          for (n in e)
              void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
          return i && g.extend(!0, t, i),
          t
      }
      Ae = Ie.exec(Ce.toLowerCase()) || [],
      g.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
              url: Ce,
              type: "GET",
              isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ae[1]),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                  "*": $e,
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
                  "text json": g.parseJSON,
                  "text xml": g.parseXML
              },
              flatOptions: {
                  url: !0,
                  context: !0
              }
          },
          ajaxSetup: function(t, e) {
              return e ? Ne(Ne(t, g.ajaxSettings), e) : Ne(g.ajaxSettings, t)
          },
          ajaxPrefilter: Le(Fe),
          ajaxTransport: Le(De),
          ajax: function(t, e) {
              "object" == typeof t && (e = t,
              t = void 0),
              e = e || {};
              var i, n, o, r, s, a, l, c, d = g.ajaxSetup({}, e), u = d.context || d, h = d.context && (u.nodeType || u.jquery) ? g(u) : g.event, f = g.Deferred(), p = g.Callbacks("once memory"), m = d.statusCode || {}, v = {}, y = {}, b = 0, w = "canceled", x = {
                  readyState: 0,
                  getResponseHeader: function(t) {
                      var e;
                      if (2 === b) {
                          if (!c)
                              for (c = {}; e = _e.exec(r); )
                                  c[e[1].toLowerCase()] = e[2];
                          e = c[t.toLowerCase()]
                      }
                      return null == e ? null : e
                  },
                  getAllResponseHeaders: function() {
                      return 2 === b ? r : null
                  },
                  setRequestHeader: function(t, e) {
                      var i = t.toLowerCase();
                      return b || (t = y[i] = y[i] || t,
                      v[t] = e),
                      this
                  },
                  overrideMimeType: function(t) {
                      return b || (d.mimeType = t),
                      this
                  },
                  statusCode: function(t) {
                      var e;
                      if (t)
                          if (2 > b)
                              for (e in t)
                                  m[e] = [m[e], t[e]];
                          else
                              x.always(t[x.status]);
                      return this
                  },
                  abort: function(t) {
                      var e = t || w;
                      return l && l.abort(e),
                      A(0, e),
                      this
                  }
              };
              if (f.promise(x).complete = p.add,
              x.success = x.done,
              x.error = x.fail,
              d.url = ((t || d.url || Ce) + "").replace(Se, "").replace(ke, Ae[1] + "//"),
              d.type = e.method || e.type || d.method || d.type,
              d.dataTypes = g.trim(d.dataType || "*").toLowerCase().match(L) || [""],
              null == d.crossDomain && (i = Ie.exec(d.url.toLowerCase()),
              d.crossDomain = !(!i || i[1] === Ae[1] && i[2] === Ae[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ae[3] || ("http:" === Ae[1] ? "80" : "443")))),
              d.data && d.processData && "string" != typeof d.data && (d.data = g.param(d.data, d.traditional)),
              Oe(Fe, d, e, x),
              2 === b)
                  return x;
              for (n in (a = g.event && d.global) && 0 == g.active++ && g.event.trigger("ajaxStart"),
              d.type = d.type.toUpperCase(),
              d.hasContent = !Ee.test(d.type),
              o = d.url,
              d.hasContent || (d.data && (o = d.url += (we.test(o) ? "&" : "?") + d.data,
              delete d.data),
              !1 === d.cache && (d.url = Te.test(o) ? o.replace(Te, "$1_=" + be++) : o + (we.test(o) ? "&" : "?") + "_=" + be++)),
              d.ifModified && (g.lastModified[o] && x.setRequestHeader("If-Modified-Since", g.lastModified[o]),
              g.etag[o] && x.setRequestHeader("If-None-Match", g.etag[o])),
              (d.data && d.hasContent && !1 !== d.contentType || e.contentType) && x.setRequestHeader("Content-Type", d.contentType),
              x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + $e + "; q=0.01" : "") : d.accepts["*"]),
              d.headers)
                  x.setRequestHeader(n, d.headers[n]);
              if (d.beforeSend && (!1 === d.beforeSend.call(u, x, d) || 2 === b))
                  return x.abort();
              for (n in w = "abort",
              {
                  success: 1,
                  error: 1,
                  complete: 1
              })
                  x[n](d[n]);
              if (l = Oe(De, d, e, x)) {
                  x.readyState = 1,
                  a && h.trigger("ajaxSend", [x, d]),
                  d.async && d.timeout > 0 && (s = setTimeout(function() {
                      x.abort("timeout")
                  }, d.timeout));
                  try {
                      b = 1,
                      l.send(v, A)
                  } catch (t) {
                      if (!(2 > b))
                          throw t;
                      A(-1, t)
                  }
              } else
                  A(-1, "No Transport");
              function A(t, e, i, n) {
                  var c, v, y, w, A, C = e;
                  2 !== b && (b = 2,
                  s && clearTimeout(s),
                  l = void 0,
                  r = n || "",
                  x.readyState = t > 0 ? 4 : 0,
                  c = t >= 200 && 300 > t || 304 === t,
                  i && (w = function(t, e, i) {
                      for (var n, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0]; )
                          l.shift(),
                          void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
                      if (o)
                          for (s in a)
                              if (a[s] && a[s].test(o)) {
                                  l.unshift(s);
                                  break
                              }
                      if (l[0]in i)
                          r = l[0];
                      else {
                          for (s in i) {
                              if (!l[0] || t.converters[s + " " + l[0]]) {
                                  r = s;
                                  break
                              }
                              n || (n = s)
                          }
                          r = r || n
                      }
                      return r ? (r !== l[0] && l.unshift(r),
                      i[r]) : void 0
                  }(d, x, i)),
                  w = function(t, e, i, n) {
                      var o, r, s, a, l, c = {}, d = t.dataTypes.slice();
                      if (d[1])
                          for (s in t.converters)
                              c[s.toLowerCase()] = t.converters[s];
                      for (r = d.shift(); r; )
                          if (t.responseFields[r] && (i[t.responseFields[r]] = e),
                          !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                          l = r,
                          r = d.shift())
                              if ("*" === r)
                                  r = l;
                              else if ("*" !== l && l !== r) {
                                  if (!(s = c[l + " " + r] || c["* " + r]))
                                      for (o in c)
                                          if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                              !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0],
                                              d.unshift(a[1]));
                                              break
                                          }
                                  if (!0 !== s)
                                      if (s && t.throws)
                                          e = s(e);
                                      else
                                          try {
                                              e = s(e)
                                          } catch (t) {
                                              return {
                                                  state: "parsererror",
                                                  error: s ? t : "No conversion from " + l + " to " + r
                                              }
                                          }
                              }
                      return {
                          state: "success",
                          data: e
                      }
                  }(d, w, x, c),
                  c ? (d.ifModified && ((A = x.getResponseHeader("Last-Modified")) && (g.lastModified[o] = A),
                  (A = x.getResponseHeader("etag")) && (g.etag[o] = A)),
                  204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state,
                  v = w.data,
                  c = !(y = w.error))) : (y = C,
                  (t || !C) && (C = "error",
                  0 > t && (t = 0))),
                  x.status = t,
                  x.statusText = (e || C) + "",
                  c ? f.resolveWith(u, [v, C, x]) : f.rejectWith(u, [x, C, y]),
                  x.statusCode(m),
                  m = void 0,
                  a && h.trigger(c ? "ajaxSuccess" : "ajaxError", [x, d, c ? v : y]),
                  p.fireWith(u, [x, C]),
                  a && (h.trigger("ajaxComplete", [x, d]),
                  --g.active || g.event.trigger("ajaxStop")))
              }
              return x
          },
          getJSON: function(t, e, i) {
              return g.get(t, e, i, "json")
          },
          getScript: function(t, e) {
              return g.get(t, void 0, e, "script")
          }
      }),
      g.each(["get", "post"], function(t, e) {
          g[e] = function(t, i, n, o) {
              return g.isFunction(i) && (o = o || n,
              n = i,
              i = void 0),
              g.ajax({
                  url: t,
                  type: e,
                  dataType: o,
                  data: i,
                  success: n
              })
          }
      }),
      g._evalUrl = function(t) {
          return g.ajax({
              url: t,
              type: "GET",
              dataType: "script",
              async: !1,
              global: !1,
              throws: !0
          })
      }
      ,
      g.fn.extend({
          wrapAll: function(t) {
              if (g.isFunction(t))
                  return this.each(function(e) {
                      g(this).wrapAll(t.call(this, e))
                  });
              if (this[0]) {
                  var e = g(t, this[0].ownerDocument).eq(0).clone(!0);
                  this[0].parentNode && e.insertBefore(this[0]),
                  e.map(function() {
                      for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; )
                          t = t.firstChild;
                      return t
                  }).append(this)
              }
              return this
          },
          wrapInner: function(t) {
              return this.each(g.isFunction(t) ? function(e) {
                  g(this).wrapInner(t.call(this, e))
              }
              : function() {
                  var e = g(this)
                    , i = e.contents();
                  i.length ? i.wrapAll(t) : e.append(t)
              }
              )
          },
          wrap: function(t) {
              var e = g.isFunction(t);
              return this.each(function(i) {
                  g(this).wrapAll(e ? t.call(this, i) : t)
              })
          },
          unwrap: function() {
              return this.parent().each(function() {
                  g.nodeName(this, "body") || g(this).replaceWith(this.childNodes)
              }).end()
          }
      }),
      g.expr.filters.hidden = function(t) {
          return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !f.reliableHiddenOffsets() && "none" === (t.style && t.style.display || g.css(t, "display"))
      }
      ,
      g.expr.filters.visible = function(t) {
          return !g.expr.filters.hidden(t)
      }
      ;
      var Me = /%20/g
        , Be = /\[\]$/
        , Pe = /\r?\n/g
        , He = /^(?:submit|button|image|reset|file)$/i
        , je = /^(?:input|select|textarea|keygen)/i;
      function Ve(t, e, i, n) {
          var o;
          if (g.isArray(e))
              g.each(e, function(e, o) {
                  i || Be.test(t) ? n(t, o) : Ve(t + "[" + ("object" == typeof o ? e : "") + "]", o, i, n)
              });
          else if (i || "object" !== g.type(e))
              n(t, e);
          else
              for (o in e)
                  Ve(t + "[" + o + "]", e[o], i, n)
      }
      g.param = function(t, e) {
          var i, n = [], o = function(t, e) {
              e = g.isFunction(e) ? e() : null == e ? "" : e,
              n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
          };
          if (void 0 === e && (e = g.ajaxSettings && g.ajaxSettings.traditional),
          g.isArray(t) || t.jquery && !g.isPlainObject(t))
              g.each(t, function() {
                  o(this.name, this.value)
              });
          else
              for (i in t)
                  Ve(i, t[i], e, o);
          return n.join("&").replace(Me, "+")
      }
      ,
      g.fn.extend({
          serialize: function() {
              return g.param(this.serializeArray())
          },
          serializeArray: function() {
              return this.map(function() {
                  var t = g.prop(this, "elements");
                  return t ? g.makeArray(t) : this
              }).filter(function() {
                  var t = this.type;
                  return this.name && !g(this).is(":disabled") && je.test(this.nodeName) && !He.test(t) && (this.checked || !W.test(t))
              }).map(function(t, e) {
                  var i = g(this).val();
                  return null == i ? null : g.isArray(i) ? g.map(i, function(t) {
                      return {
                          name: e.name,
                          value: t.replace(Pe, "\r\n")
                      }
                  }) : {
                      name: e.name,
                      value: i.replace(Pe, "\r\n")
                  }
              }).get()
          }
      }),
      g.ajaxSettings.xhr = void 0 !== i.ActiveXObject ? function() {
          return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Qe() || function() {
              try {
                  return new i.ActiveXObject("Microsoft.XMLHTTP")
              } catch (t) {}
          }()
      }
      : Qe;
      var Re = 0
        , ze = {}
        , Ue = g.ajaxSettings.xhr();
      function Qe() {
          try {
              return new i.XMLHttpRequest
          } catch (t) {}
      }
      i.attachEvent && i.attachEvent("onunload", function() {
          for (var t in ze)
              ze[t](void 0, !0)
      }),
      f.cors = !!Ue && "withCredentials"in Ue,
      (Ue = f.ajax = !!Ue) && g.ajaxTransport(function(t) {
          var e;
          if (!t.crossDomain || f.cors)
              return {
                  send: function(i, n) {
                      var o, r = t.xhr(), s = ++Re;
                      if (r.open(t.type, t.url, t.async, t.username, t.password),
                      t.xhrFields)
                          for (o in t.xhrFields)
                              r[o] = t.xhrFields[o];
                      for (o in t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType),
                      t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                      i)
                          void 0 !== i[o] && r.setRequestHeader(o, i[o] + "");
                      r.send(t.hasContent && t.data || null),
                      e = function(i, o) {
                          var a, l, c;
                          if (e && (o || 4 === r.readyState))
                              if (delete ze[s],
                              e = void 0,
                              r.onreadystatechange = g.noop,
                              o)
                                  4 !== r.readyState && r.abort();
                              else {
                                  c = {},
                                  a = r.status,
                                  "string" == typeof r.responseText && (c.text = r.responseText);
                                  try {
                                      l = r.statusText
                                  } catch (t) {
                                      l = ""
                                  }
                                  a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                              }
                          c && n(a, l, c, r.getAllResponseHeaders())
                      }
                      ,
                      t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = ze[s] = e : e()
                  },
                  abort: function() {
                      e && e(void 0, !0)
                  }
              }
      }),
      g.ajaxSetup({
          accepts: {
              script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
              script: /(?:java|ecma)script/
          },
          converters: {
              "text script": function(t) {
                  return g.globalEval(t),
                  t
              }
          }
      }),
      g.ajaxPrefilter("script", function(t) {
          void 0 === t.cache && (t.cache = !1),
          t.crossDomain && (t.type = "GET",
          t.global = !1)
      }),
      g.ajaxTransport("script", function(t) {
          if (t.crossDomain) {
              var e, i = E.head || g("head")[0] || E.documentElement;
              return {
                  send: function(n, o) {
                      (e = E.createElement("script")).async = !0,
                      t.scriptCharset && (e.charset = t.scriptCharset),
                      e.src = t.url,
                      e.onload = e.onreadystatechange = function(t, i) {
                          (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null,
                          e.parentNode && e.parentNode.removeChild(e),
                          e = null,
                          i || o(200, "success"))
                      }
                      ,
                      i.insertBefore(e, i.firstChild)
                  },
                  abort: function() {
                      e && e.onload(void 0, !0)
                  }
              }
          }
      });
      var qe = []
        , Ge = /(=)\?(?=&|$)|\?\?/;
      g.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
              var t = qe.pop() || g.expando + "_" + be++;
              return this[t] = !0,
              t
          }
      }),
      g.ajaxPrefilter("json jsonp", function(t, e, n) {
          var o, r, s, a = !1 !== t.jsonp && (Ge.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ge.test(t.data) && "data");
          return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = g.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
          a ? t[a] = t[a].replace(Ge, "$1" + o) : !1 !== t.jsonp && (t.url += (we.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
          t.converters["script json"] = function() {
              return s || g.error(o + " was not called"),
              s[0]
          }
          ,
          t.dataTypes[0] = "json",
          r = i[o],
          i[o] = function() {
              s = arguments
          }
          ,
          n.always(function() {
              i[o] = r,
              t[o] && (t.jsonpCallback = e.jsonpCallback,
              qe.push(o)),
              s && g.isFunction(r) && r(s[0]),
              s = r = void 0
          }),
          "script") : void 0
      }),
      g.parseHTML = function(t, e, i) {
          if (!t || "string" != typeof t)
              return null;
          "boolean" == typeof e && (i = e,
          e = !1),
          e = e || E;
          var n = C.exec(t)
            , o = !i && [];
          return n ? [e.createElement(n[1])] : (n = g.buildFragment([t], e, o),
          o && o.length && g(o).remove(),
          g.merge([], n.childNodes))
      }
      ;
      var Ke = g.fn.load;
      g.fn.load = function(t, e, i) {
          if ("string" != typeof t && Ke)
              return Ke.apply(this, arguments);
          var n, o, r, s = this, a = t.indexOf(" ");
          return a >= 0 && (n = g.trim(t.slice(a, t.length)),
          t = t.slice(0, a)),
          g.isFunction(e) ? (i = e,
          e = void 0) : e && "object" == typeof e && (r = "POST"),
          s.length > 0 && g.ajax({
              url: t,
              type: r,
              dataType: "html",
              data: e
          }).done(function(t) {
              o = arguments,
              s.html(n ? g("<div>").append(g.parseHTML(t)).find(n) : t)
          }).complete(i && function(t, e) {
              s.each(i, o || [t.responseText, e, t])
          }
          ),
          this
      }
      ,
      g.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
          g.fn[e] = function(t) {
              return this.on(e, t)
          }
      }),
      g.expr.filters.animated = function(t) {
          return g.grep(g.timers, function(e) {
              return t === e.elem
          }).length
      }
      ;
      var We = i.document.documentElement;
      function Ye(t) {
          return g.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
      }
      g.offset = {
          setOffset: function(t, e, i) {
              var n, o, r, s, a, l, c = g.css(t, "position"), d = g(t), u = {};
              "static" === c && (t.style.position = "relative"),
              a = d.offset(),
              r = g.css(t, "top"),
              l = g.css(t, "left"),
              ("absolute" === c || "fixed" === c) && g.inArray("auto", [r, l]) > -1 ? (s = (n = d.position()).top,
              o = n.left) : (s = parseFloat(r) || 0,
              o = parseFloat(l) || 0),
              g.isFunction(e) && (e = e.call(t, i, a)),
              null != e.top && (u.top = e.top - a.top + s),
              null != e.left && (u.left = e.left - a.left + o),
              "using"in e ? e.using.call(t, u) : d.css(u)
          }
      },
      g.fn.extend({
          offset: function(t) {
              if (arguments.length)
                  return void 0 === t ? this : this.each(function(e) {
                      g.offset.setOffset(this, t, e)
                  });
              var e, i, n = {
                  top: 0,
                  left: 0
              }, o = this[0], r = o && o.ownerDocument;
              return r ? (e = r.documentElement,
              g.contains(e, o) ? (typeof o.getBoundingClientRect !== P && (n = o.getBoundingClientRect()),
              i = Ye(r),
              {
                  top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                  left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
              }) : n) : void 0
          },
          position: function() {
              if (this[0]) {
                  var t, e, i = {
                      top: 0,
                      left: 0
                  }, n = this[0];
                  return "fixed" === g.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(),
                  e = this.offset(),
                  g.nodeName(t[0], "html") || (i = t.offset()),
                  i.top += g.css(t[0], "borderTopWidth", !0),
                  i.left += g.css(t[0], "borderLeftWidth", !0)),
                  {
                      top: e.top - i.top - g.css(n, "marginTop", !0),
                      left: e.left - i.left - g.css(n, "marginLeft", !0)
                  }
              }
          },
          offsetParent: function() {
              return this.map(function() {
                  for (var t = this.offsetParent || We; t && !g.nodeName(t, "html") && "static" === g.css(t, "position"); )
                      t = t.offsetParent;
                  return t || We
              })
          }
      }),
      g.each({
          scrollLeft: "pageXOffset",
          scrollTop: "pageYOffset"
      }, function(t, e) {
          var i = /Y/.test(e);
          g.fn[t] = function(n) {
              return K(this, function(t, n, o) {
                  var r = Ye(t);
                  return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[n] : t[n] : void (r ? r.scrollTo(i ? g(r).scrollLeft() : o, i ? o : g(r).scrollTop()) : t[n] = o)
              }, t, n, arguments.length, null)
          }
      }),
      g.each(["top", "left"], function(t, e) {
          g.cssHooks[e] = Bt(f.pixelPosition, function(t, i) {
              return i ? (i = Lt(t, e),
              Nt.test(i) ? g(t).position()[e] + "px" : i) : void 0
          })
      }),
      g.each({
          Height: "height",
          Width: "width"
      }, function(t, e) {
          g.each({
              padding: "inner" + t,
              content: e,
              "": "outer" + t
          }, function(i, n) {
              g.fn[n] = function(n, o) {
                  var r = arguments.length && (i || "boolean" != typeof n)
                    , s = i || (!0 === n || !0 === o ? "margin" : "border");
                  return K(this, function(e, i, n) {
                      var o;
                      return g.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement,
                      Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? g.css(e, i, s) : g.style(e, i, n, s)
                  }, e, r ? n : void 0, r, null)
              }
          })
      }),
      g.fn.size = function() {
          return this.length
      }
      ,
      g.fn.andSelf = g.fn.addBack,
      void 0 === (n = function() {
          return g
      }
      .apply(e, [])) || (t.exports = n);
      var Xe = i.jQuery
        , Ze = i.$;
      return g.noConflict = function(t) {
          return i.$ === g && (i.$ = Ze),
          t && i.jQuery === g && (i.jQuery = Xe),
          g
      }
      ,
      typeof o === P && (i.jQuery = i.$ = g),
      g
  }
  ,
  "object" == typeof t.exports ? t.exports = o.document ? r(o, !0) : function(t) {
      if (!t.document)
          throw new Error("jQuery requires a window with a document");
      return r(t)
  }
  : r(o)
}
, function(t, e) {
  !function(t, e, i) {
      var n = {
          calibrationThreshold: 100,
          calibrationDelay: 500,
          supportDelay: 500,
          calibrateX: !1,
          calibrateY: !0,
          invertX: !0,
          invertY: !0,
          limitX: !1,
          limitY: !1,
          scalarX: 10,
          scalarY: 10,
          frictionX: .1,
          frictionY: .1
      };
      function o(t, e) {
          this.element = t,
          this.layers = t.getElementsByClassName("layer");
          var i = {
              calibrateX: this.data(this.element, "calibrate-x"),
              calibrateY: this.data(this.element, "calibrate-y"),
              invertX: this.data(this.element, "invert-x"),
              invertY: this.data(this.element, "invert-y"),
              limitX: this.data(this.element, "limit-x"),
              limitY: this.data(this.element, "limit-y"),
              scalarX: this.data(this.element, "scalar-x"),
              scalarY: this.data(this.element, "scalar-y"),
              frictionX: this.data(this.element, "friction-x"),
              frictionY: this.data(this.element, "friction-y")
          };
          for (var o in i)
              null === i[o] && delete i[o];
          this.extend(this, n, e, i),
          this.calibrationTimer = null,
          this.calibrationFlag = !0,
          this.enabled = !1,
          this.depths = [],
          this.raf = null,
          this.ox = 0,
          this.oy = 0,
          this.ow = 0,
          this.oh = 0,
          this.cx = 0,
          this.cy = 0,
          this.ix = 0,
          this.iy = 0,
          this.mx = 0,
          this.my = 0,
          this.vx = 0,
          this.vy = 0,
          this.onMouseMove = this.onMouseMove.bind(this),
          this.onDeviceOrientation = this.onDeviceOrientation.bind(this),
          this.onOrientationTimer = this.onOrientationTimer.bind(this),
          this.onCalibrationTimer = this.onCalibrationTimer.bind(this),
          this.onAnimationFrame = this.onAnimationFrame.bind(this),
          this.onWindowResize = this.onWindowResize.bind(this),
          this.initialise()
      }
      o.prototype.extend = function() {
          if (arguments.length > 1)
              for (var t = arguments[0], e = 1, i = arguments.length; e < i; e++) {
                  var n = arguments[e];
                  for (var o in n)
                      t[o] = n[o]
              }
      }
      ,
      o.prototype.data = function(t, e) {
          return this.deserialize(t.getAttribute("data-" + e))
      }
      ,
      o.prototype.deserialize = function(t) {
          return "true" === t || "false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t)
      }
      ,
      o.prototype.offset = function(t) {
          for (var e = 0, i = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop); )
              e += t.offsetLeft - t.scrollLeft,
              i += t.offsetTop - t.scrollTop,
              t = t.offsetParent;
          return {
              top: i,
              left: e
          }
      }
      ,
      o.prototype.camelCase = function(t) {
          return t.replace(/-+(.)?/g, function(t, e) {
              return e ? e.toUpperCase() : ""
          })
      }
      ,
      o.prototype.transformSupport = function(i) {
          for (var n = e.createElement("div"), o = !1, r = null, s = !1, a = null, l = null, c = 0, d = this.vendors.length; c < d; c++)
              if (null !== this.vendors[c] ? (a = this.vendors[c][0] + "transform",
              l = this.vendors[c][1] + "Transform") : (a = "transform",
              l = "transform"),
              void 0 !== n.style[l]) {
                  o = !0;
                  break
              }
          switch (i) {
          case "2D":
              s = o;
              break;
          case "3D":
              o && (e.body.appendChild(n),
              n.style[l] = "translate3d(1px,1px,1px)",
              s = void 0 !== (r = t.getComputedStyle(n).getPropertyValue(a)) && r.length > 0 && "none" !== r,
              e.body.removeChild(n))
          }
          return s
      }
      ,
      o.prototype.ww = null,
      o.prototype.wh = null,
      o.prototype.hw = null,
      o.prototype.hh = null,
      o.prototype.portrait = null,
      o.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|IEMobile)/),
      o.prototype.vendors = [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]],
      o.prototype.motionSupport = void 0 !== t.DeviceMotionEvent,
      o.prototype.orientationSupport = void 0 !== t.DeviceOrientationEvent,
      o.prototype.orientationStatus = 0,
      o.prototype.transform2DSupport = o.prototype.transformSupport("2D"),
      o.prototype.transform3DSupport = o.prototype.transformSupport("3D"),
      o.prototype.initialise = function() {
          this.transform3DSupport && this.accelerate(this.element),
          "static" === t.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative");
          for (var e = 0, i = this.layers.length; e < i; e++) {
              var n = this.layers[e];
              this.transform3DSupport && this.accelerate(n),
              n.style.position = e ? "absolute" : "relative",
              n.style.display = "block",
              n.style.height = "100%",
              n.style.width = "100%",
              n.style.left = 0,
              n.style.top = 0,
              this.depths.push(this.data(n, "depth") || 0)
          }
          this.updateDimensions(),
          this.enable(),
          this.queueCalibration(this.calibrationDelay)
      }
      ,
      o.prototype.updateDimensions = function() {
          this.ox = this.offset(this.element).left,
          this.oy = this.offset(this.element).top,
          this.ow = this.element.offsetWidth,
          this.oh = this.element.offsetHeight,
          this.ww = t.innerWidth,
          this.wh = t.innerHeight,
          this.hw = this.ww / 2,
          this.hh = this.wh / 2
      }
      ,
      o.prototype.queueCalibration = function(t) {
          clearTimeout(this.calibrationTimer),
          this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
      }
      ,
      o.prototype.enable = function() {
          this.enabled || (this.enabled = !0,
          this.orientationSupport ? (this.portrait = null,
          t.addEventListener("deviceorientation", this.onDeviceOrientation),
          setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0,
          this.cy = 0,
          this.portrait = !1,
          t.addEventListener("mousemove", this.onMouseMove)),
          t.addEventListener("resize", this.onWindowResize),
          this.raf = requestAnimationFrame(this.onAnimationFrame))
      }
      ,
      o.prototype.disable = function() {
          this.enabled && (this.enabled = !1,
          this.orientationSupport ? t.removeEventListener("deviceorientation", this.onDeviceOrientation) : t.removeEventListener("mousemove", this.onMouseMove),
          t.removeEventListener("resize", this.onWindowResize),
          cancelAnimationFrame(this.raf))
      }
      ,
      o.prototype.calibrate = function(t, e) {
          this.calibrateX = void 0 === t ? this.calibrateX : t,
          this.calibrateY = void 0 === e ? this.calibrateY : e
      }
      ,
      o.prototype.invert = function(t, e) {
          this.invertX = void 0 === t ? this.invertX : t,
          this.invertY = void 0 === e ? this.invertY : e
      }
      ,
      o.prototype.friction = function(t, e) {
          this.frictionX = void 0 === t ? this.frictionX : t,
          this.frictionY = void 0 === e ? this.frictionY : e
      }
      ,
      o.prototype.scalar = function(t, e) {
          this.scalarX = void 0 === t ? this.scalarX : t,
          this.scalarY = void 0 === e ? this.scalarY : e
      }
      ,
      o.prototype.limit = function(t, e) {
          this.limitX = void 0 === t ? this.limitX : t,
          this.limitY = void 0 === e ? this.limitY : e
      }
      ,
      o.prototype.clamp = function(t, e, i) {
          return t = Math.max(t, e),
          t = Math.min(t, i)
      }
      ,
      o.prototype.css = function(t, e, i) {
          for (var n = null, o = 0, r = this.vendors.length; o < r; o++)
              if (n = null !== this.vendors[o] ? this.camelCase(this.vendors[o][1] + "-" + e) : e,
              void 0 !== t.style[n]) {
                  t.style[n] = i;
                  break
              }
      }
      ,
      o.prototype.accelerate = function(t) {
          this.css(t, "transform", "translate3d(0,0,0)"),
          this.css(t, "transform-style", "preserve-3d"),
          this.css(t, "backface-visibility", "hidden")
      }
      ,
      o.prototype.setPosition = function(t, e, i) {
          e += "%",
          i += "%",
          this.transform3DSupport ? this.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e,
          t.style.top = i)
      }
      ,
      o.prototype.onOrientationTimer = function(t) {
          this.orientationSupport && 0 === this.orientationStatus && (this.disable(),
          this.orientationSupport = !1,
          this.enable())
      }
      ,
      o.prototype.onCalibrationTimer = function(t) {
          this.calibrationFlag = !0
      }
      ,
      o.prototype.onWindowResize = function(t) {
          this.updateDimensions()
      }
      ,
      o.prototype.onAnimationFrame = function() {
          var t = this.ix - this.cx
            , e = this.iy - this.cy;
          (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0),
          this.portrait ? (this.mx = (this.calibrateX ? e : this.iy) * this.scalarX,
          this.my = (this.calibrateY ? t : this.ix) * this.scalarY) : (this.mx = (this.calibrateX ? t : this.ix) * this.scalarX,
          this.my = (this.calibrateY ? e : this.iy) * this.scalarY),
          isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)),
          isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)),
          this.vx += (this.mx - this.vx) * this.frictionX,
          this.vy += (this.my - this.vy) * this.frictionY;
          for (var i = 0, n = this.layers.length; i < n; i++) {
              var o = this.layers[i]
                , r = this.depths[i]
                , s = this.vx * r * (this.invertX ? -1 : 1)
                , a = this.vy * r * (this.invertY ? -1 : 1);
              this.setPosition(o, s, a)
          }
          this.raf = requestAnimationFrame(this.onAnimationFrame)
      }
      ,
      o.prototype.onDeviceOrientation = function(t) {
          if (!this.desktop && null !== t.beta && null !== t.gamma) {
              this.orientationStatus = 1;
              var e = (t.beta || 0) / 30
                , i = (t.gamma || 0) / 30
                , n = this.wh > this.ww;
              this.portrait !== n && (this.portrait = n,
              this.calibrationFlag = !0),
              this.calibrationFlag && (this.calibrationFlag = !1,
              this.cx = e,
              this.cy = i),
              this.ix = e,
              this.iy = i
          }
      }
      ,
      o.prototype.onMouseMove = function(t) {
          this.ix = (t.pageX - this.hw) / this.hw,
          this.iy = (t.pageY - this.hh) / this.hh
      }
      ,
      t.Parallax = o
  }(window, document),
  function() {
      for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i)
          window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"],
          window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
      window.requestAnimationFrame || (window.requestAnimationFrame = function(e, i) {
          var n = (new Date).getTime()
            , o = Math.max(0, 16 - (n - t))
            , r = window.setTimeout(function() {
              e(n + o)
          }, o);
          return t = n + o,
          r
      }
      ),
      window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
          clearTimeout(t)
      }
      )
  }()
}
, function(t, e, i) {
  var n = [];
  function o(t) {
      return n = t.keys(),
      t.keys().map(t)
  }
  var r = []
    , s = o(i(3));
  n.forEach(function(t, e) {
      r[t] = s[e]
  }),
  n = [],
  s = o(i(18)),
  n.forEach(function(t, e) {
      r[t] = s[e]
  }),
  n = [];
  var a = o(i(19));
  n.forEach(function(t, e) {
      r[t] = a[e]
  }),
  n = [];
  var l = o(i(23));
  n.forEach(function(t, e) {
      r["temp" + t] = l[e]
  }),
  window.mpireModules.forEach(function(t) {
      r[t.key][t.f](t.params)
  });
  var c = i(0)
    , d = window.location
    , u = d.pathname
    , h = d.origin
    , f = c("#menu a").filter(function() {
      if (this.href.replace(h, "") == u)
          return !0
  }).parent().children("a").addClass("active");
  void 0 === f[0] && (f = c("#menu a").filter(function() {
      if (this.href.replace(h, "") == (u = "/our-work.html"))
          return !0
  }).parent().children("a").addClass("active")),
  f.is("a") && f.addClass("active").parent().parent("li").children("a").addClass("active"),
  "undefined" != typeof active_menu && c("#menu a").filter(function() {
      $this = c(this);
      var t = this.href.replace(h, "");
      "/" != active_menu && 0 == t.indexOf(active_menu) && $this.parent().children("a").addClass("active")
  }),
  c(document).ready(function() {
      c("input[name=token]").val(tokenKey),
      c("input.tk").val(token).attr("name", tokenKey)
  }),
  i(27),
  i(32)
}
, function(t, e, i) {
  var n = {
      "./Contact/views/web/js/contact.js": 4,
      "./Footer/views/web/js/footer.js": 16,
      "./Loadingz/views/web/js/loadingz.js": 17
  };
  function o(t) {
      var e = r(t);
      return i(e)
  }
  function r(t) {
      if (!i.o(n, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw e.code = "MODULE_NOT_FOUND",
          e
      }
      return n[t]
  }
  o.keys = function() {
      return Object.keys(n)
  }
  ,
  o.resolve = r,
  t.exports = o,
  o.id = 3
}
, function(t, e, i) {
  window.jQuery = i(0),
  i(5),
  i(6),
  i(7),
  t.exports = {
      run: function(t) {
          $("#contact-submit").on("click", function() {
              $("#contactform").submit()
          }),
          $("#contactform").formValidation({
              icon: {
                  valid: "form-control-feedback demo-icon icon-ok",
                  invalid: "form-control-feedback demo-icon icon-cancel",
                  validating: "form-control-feedback demo-icon icon-arrows-cw"
              },
              row: {
                  valid: "has-success",
                  invalid: "has-error"
              }
          }).on("err.field.fv", function(t, e) {}).on("success.form.fv", function(t) {
              var e = $(t.target);
              t.preventDefault(),
              e.mpireAjaxSubmit({}, function(t) {
                  if (200 === t.code) {
                      var i = e.find(".alert-success");
                      i.show(),
                      setTimeout(function() {
                          i.hide()
                      }, 5e3)
                  } else {
                      var n = e.find(".alert-danger");
                      n.html(t.message.error_message),
                      n.show(),
                      setTimeout(function() {
                          n.hide()
                      }, 5e3)
                  }
                  e.data("formValidation").resetForm(),
                  $("input[name=token]").val(t.message.token_key),
                  $("input.tk").val(t.message.token).attr("name", t.message.token_key)
              })
          })
      }
  }
}
, function(t, e) {
  if (/*!
* FormValidation (http://formvalidation.io)
* The best jQuery plugin to validate form fields. Support Bootstrap, Foundation, Pure, SemanticUI, UIKit and custom frameworks
*
* @version     v0.8.1, built on 2016-07-29 1:10:54 AM
* @author      https://twitter.com/formvalidation
* @copyright   (c) 2013 - 2016 Nguyen Huu Phuoc
* @license     http://formvalidation.io/license/
*/
  window.FormValidation = {
      AddOn: {},
      Framework: {},
      I18n: {},
      Validator: {}
  },
  "undefined" == typeof jQuery)
      throw new Error("FormValidation requires jQuery");
  var i;
  !function(t) {
      var e = jQuery.fn.jquery.split(" ")[0].split(".");
      if (+e[0] < 2 && +e[1] < 9 || 1 == +e[0] && 9 == +e[1] && +e[2] < 1)
          throw new Error("FormValidation requires jQuery version 1.9.1 or higher")
  }(),
  i = jQuery,
  FormValidation.Base = function(t, e, n) {
      this.$form = i(t),
      this.options = i.extend({}, i.fn.formValidation.DEFAULT_OPTIONS, e),
      this._namespace = n || "fv",
      this.$invalidFields = i([]),
      this.$submitButton = null,
      this.$hiddenButton = null,
      this.STATUS_NOT_VALIDATED = "NOT_VALIDATED",
      this.STATUS_VALIDATING = "VALIDATING",
      this.STATUS_INVALID = "INVALID",
      this.STATUS_VALID = "VALID",
      this.STATUS_IGNORED = "IGNORED",
      this.DEFAULT_MESSAGE = i.fn.formValidation.DEFAULT_MESSAGE,
      this._ieVersion = function() {
          for (var t = 3, e = document.createElement("div"), i = e.all || []; e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><br><![endif]--\x3e",
          i[0]; )
              ;
          return t > 4 ? t : document.documentMode
      }();
      var o = document.createElement("div");
      this._changeEvent = 9 !== this._ieVersion && "oninput"in o ? "input" : "keyup",
      this._submitIfValid = null,
      this._cacheFields = {},
      this._init()
  }
  ,
  FormValidation.Base.prototype = {
      constructor: FormValidation.Base,
      _exceedThreshold: function(t) {
          var e = this._namespace
            , n = t.attr("data-" + e + "-field")
            , o = this.options.fields[n].threshold || this.options.threshold;
          return !o || -1 !== i.inArray(t.attr("type"), ["button", "checkbox", "file", "hidden", "image", "radio", "reset", "submit"]) || t.val().length >= o
      },
      _init: function() {
          var t = this
            , e = this._namespace
            , n = {
              addOns: {},
              autoFocus: this.$form.attr("data-" + e + "-autofocus"),
              button: {
                  selector: this.$form.attr("data-" + e + "-button-selector") || this.$form.attr("data-" + e + "-submitbuttons"),
                  disabled: this.$form.attr("data-" + e + "-button-disabled")
              },
              control: {
                  valid: this.$form.attr("data-" + e + "-control-valid"),
                  invalid: this.$form.attr("data-" + e + "-control-invalid")
              },
              err: {
                  clazz: this.$form.attr("data-" + e + "-err-clazz"),
                  container: this.$form.attr("data-" + e + "-err-container") || this.$form.attr("data-" + e + "-container"),
                  parent: this.$form.attr("data-" + e + "-err-parent")
              },
              events: {
                  formInit: this.$form.attr("data-" + e + "-events-form-init"),
                  formPreValidate: this.$form.attr("data-" + e + "-events-form-prevalidate"),
                  formError: this.$form.attr("data-" + e + "-events-form-error"),
                  formReset: this.$form.attr("data-" + e + "-events-form-reset"),
                  formSuccess: this.$form.attr("data-" + e + "-events-form-success"),
                  fieldAdded: this.$form.attr("data-" + e + "-events-field-added"),
                  fieldRemoved: this.$form.attr("data-" + e + "-events-field-removed"),
                  fieldInit: this.$form.attr("data-" + e + "-events-field-init"),
                  fieldError: this.$form.attr("data-" + e + "-events-field-error"),
                  fieldReset: this.$form.attr("data-" + e + "-events-field-reset"),
                  fieldSuccess: this.$form.attr("data-" + e + "-events-field-success"),
                  fieldStatus: this.$form.attr("data-" + e + "-events-field-status"),
                  localeChanged: this.$form.attr("data-" + e + "-events-locale-changed"),
                  validatorError: this.$form.attr("data-" + e + "-events-validator-error"),
                  validatorSuccess: this.$form.attr("data-" + e + "-events-validator-success"),
                  validatorIgnored: this.$form.attr("data-" + e + "-events-validator-ignored")
              },
              excluded: this.$form.attr("data-" + e + "-excluded"),
              icon: {
                  valid: this.$form.attr("data-" + e + "-icon-valid") || this.$form.attr("data-" + e + "-feedbackicons-valid"),
                  invalid: this.$form.attr("data-" + e + "-icon-invalid") || this.$form.attr("data-" + e + "-feedbackicons-invalid"),
                  validating: this.$form.attr("data-" + e + "-icon-validating") || this.$form.attr("data-" + e + "-feedbackicons-validating"),
                  feedback: this.$form.attr("data-" + e + "-icon-feedback")
              },
              live: this.$form.attr("data-" + e + "-live"),
              locale: this.$form.attr("data-" + e + "-locale"),
              message: this.$form.attr("data-" + e + "-message"),
              onPreValidate: this.$form.attr("data-" + e + "-onprevalidate"),
              onError: this.$form.attr("data-" + e + "-onerror"),
              onReset: this.$form.attr("data-" + e + "-onreset"),
              onSuccess: this.$form.attr("data-" + e + "-onsuccess"),
              row: {
                  selector: this.$form.attr("data-" + e + "-row-selector") || this.$form.attr("data-" + e + "-group"),
                  valid: this.$form.attr("data-" + e + "-row-valid"),
                  invalid: this.$form.attr("data-" + e + "-row-invalid"),
                  feedback: this.$form.attr("data-" + e + "-row-feedback")
              },
              threshold: this.$form.attr("data-" + e + "-threshold"),
              trigger: this.$form.attr("data-" + e + "-trigger"),
              verbose: this.$form.attr("data-" + e + "-verbose"),
              fields: {}
          };
          for (var o in this.$form.attr("novalidate", "novalidate").addClass(this.options.elementClass).on("submit." + e, function(e) {
              e.preventDefault(),
              t.validate()
          }).on("click." + e, this.options.button.selector, function() {
              t.$submitButton = i(this),
              t._submitIfValid = !0
          }),
          !0 !== this.options.declarative && "true" !== this.options.declarative || this.$form.find("[name], [data-" + e + "-field]").each(function() {
              var o = i(this)
                , r = o.attr("name") || o.attr("data-" + e + "-field")
                , s = t._parseOptions(o);
              s && (o.attr("data-" + e + "-field", r),
              n.fields[r] = i.extend({}, s, n.fields[r]))
          }),
          this.options = i.extend(!0, this.options, n),
          "string" == typeof this.options.err.parent && (this.options.err.parent = new RegExp(this.options.err.parent)),
          this.options.container && (this.options.err.container = this.options.container,
          delete this.options.container),
          this.options.feedbackIcons && (this.options.icon = i.extend(!0, this.options.icon, this.options.feedbackIcons),
          delete this.options.feedbackIcons),
          this.options.group && (this.options.row.selector = this.options.group,
          delete this.options.group),
          this.options.submitButtons && (this.options.button.selector = this.options.submitButtons,
          delete this.options.submitButtons),
          FormValidation.I18n[this.options.locale] || (this.options.locale = i.fn.formValidation.DEFAULT_OPTIONS.locale),
          !0 !== this.options.declarative && "true" !== this.options.declarative || (this.options = i.extend(!0, this.options, {
              addOns: this._parseAddOnOptions()
          })),
          this.$hiddenButton = i("<button/>").attr("type", "submit").prependTo(this.$form).addClass("fv-hidden-submit").css({
              display: "none",
              width: 0,
              height: 0
          }),
          this.$form.on("click." + this._namespace, '[type="submit"]', function(e) {
              if (!e.isDefaultPrevented()) {
                  var n = i(e.target)
                    , o = n.is('[type="submit"]') ? n.eq(0) : n.parent('[type="submit"]').eq(0);
                  if (t.options.button.selector && !o.is(t.options.button.selector) && !o.is(t.$hiddenButton))
                      return t.$form.off("submit." + t._namespace).submit(),
                      !1
              }
          }),
          this.options.fields)
              this._initField(o);
          for (var r in this.options.addOns)
              "function" == typeof FormValidation.AddOn[r].init && FormValidation.AddOn[r].init(this, this.options.addOns[r]);
          this.$form.trigger(i.Event(this.options.events.formInit), {
              bv: this,
              fv: this,
              options: this.options
          }),
          this.options.onPreValidate && this.$form.on(this.options.events.formPreValidate, function(e) {
              FormValidation.Helper.call(t.options.onPreValidate, [e])
          }),
          this.options.onSuccess && this.$form.on(this.options.events.formSuccess, function(e) {
              FormValidation.Helper.call(t.options.onSuccess, [e])
          }),
          this.options.onError && this.$form.on(this.options.events.formError, function(e) {
              FormValidation.Helper.call(t.options.onError, [e])
          }),
          this.options.onReset && this.$form.on(this.options.events.formReset, function(e) {
              FormValidation.Helper.call(t.options.onReset, [e])
          })
      },
      _initField: function(t) {
          var e = this._namespace
            , n = i([]);
          switch (typeof t) {
          case "object":
              n = t,
              t = t.attr("data-" + e + "-field");
              break;
          case "string":
              (n = this.getFieldElements(t)).attr("data-" + e + "-field", t)
          }
          if (0 !== n.length && null !== this.options.fields[t] && null !== this.options.fields[t].validators) {
              var o, r, s = this.options.fields[t].validators;
              for (o in s)
                  r = s[o].alias || o,
                  FormValidation.Validator[r] || delete this.options.fields[t].validators[o];
              null === this.options.fields[t].enabled && (this.options.fields[t].enabled = !0);
              for (var a = this, l = n.length, c = n.attr("type"), d = 1 === l || "radio" === c || "checkbox" === c, u = this._getFieldTrigger(n.eq(0)), h = this.options.err.clazz.split(" ").join("."), f = i.map(u, function(t) {
                  return t + ".update." + e
              }).join(" "), p = 0; p < l; p++) {
                  var g = n.eq(p)
                    , m = this.options.fields[t].row || this.options.row.selector
                    , v = g.closest(m)
                    , y = "function" == typeof (this.options.fields[t].container || this.options.fields[t].err || this.options.err.container) ? (this.options.fields[t].container || this.options.fields[t].err || this.options.err.container).call(this, g, this) : this.options.fields[t].container || this.options.fields[t].err || this.options.err.container
                    , b = y && "tooltip" !== y && "popover" !== y ? i(y) : this._getMessageContainer(g, m);
                  for (o in y && "tooltip" !== y && "popover" !== y && b.addClass(this.options.err.clazz),
                  b.find("." + h + "[data-" + e + "-validator][data-" + e + '-for="' + t + '"]').remove(),
                  v.find("i[data-" + e + '-icon-for="' + t + '"]').remove(),
                  g.off(f).on(f, function() {
                      a.updateStatus(i(this), a.STATUS_NOT_VALIDATED)
                  }),
                  g.data(e + ".messages", b),
                  s)
                      g.data(e + ".result." + o, this.STATUS_NOT_VALIDATED),
                      d && p !== l - 1 || i("<small/>").css("display", "none").addClass(this.options.err.clazz).attr("data-" + e + "-validator", o).attr("data-" + e + "-for", t).attr("data-" + e + "-result", this.STATUS_NOT_VALIDATED).html(this._getMessage(t, o)).appendTo(b),
                      r = s[o].alias || o,
                      "function" == typeof FormValidation.Validator[r].init && FormValidation.Validator[r].init(this, g, this.options.fields[t].validators[o], o);
                  if (!1 !== this.options.fields[t].icon && "false" !== this.options.fields[t].icon && this.options.icon && this.options.icon.valid && this.options.icon.invalid && this.options.icon.validating && (!d || p === l - 1)) {
                      v.addClass(this.options.row.feedback);
                      var w = i("<i/>").css("display", "none").addClass(this.options.icon.feedback).attr("data-" + e + "-icon-for", t).insertAfter(g);
                      (d ? n : g).data(e + ".icon", w),
                      "tooltip" !== y && "popover" !== y || ((d ? n : g).on(this.options.events.fieldError, function() {
                          v.addClass("fv-has-tooltip")
                      }).on(this.options.events.fieldSuccess, function() {
                          v.removeClass("fv-has-tooltip")
                      }),
                      g.off("focus.container." + e).on("focus.container." + e, function() {
                          a._showTooltip(i(this), y)
                      }).off("blur.container." + e).on("blur.container." + e, function() {
                          a._hideTooltip(i(this), y)
                      })),
                      "string" == typeof this.options.fields[t].icon && "true" !== this.options.fields[t].icon ? w.appendTo(i(this.options.fields[t].icon)) : this._fixIcon(g, w)
                  }
              }
              var x = [];
              for (o in s)
                  r = s[o].alias || o,
                  s[o].priority = parseInt(s[o].priority || FormValidation.Validator[r].priority || 1, 10),
                  x.push({
                      validator: o,
                      priority: s[o].priority
                  });
              x = x.sort(function(t, e) {
                  return t.priority - e.priority
              }),
              n.data(e + ".validators", x).on(this.options.events.fieldSuccess, function(t, e) {
                  var i = a.getOptions(e.field, null, "onSuccess");
                  i && FormValidation.Helper.call(i, [t, e])
              }).on(this.options.events.fieldError, function(t, e) {
                  var i = a.getOptions(e.field, null, "onError");
                  i && FormValidation.Helper.call(i, [t, e])
              }).on(this.options.events.fieldReset, function(t, e) {
                  var i = a.getOptions(e.field, null, "onReset");
                  i && FormValidation.Helper.call(i, [t, e])
              }).on(this.options.events.fieldStatus, function(t, e) {
                  var i = a.getOptions(e.field, null, "onStatus");
                  i && FormValidation.Helper.call(i, [t, e])
              }).on(this.options.events.validatorError, function(t, e) {
                  var i = a.getOptions(e.field, e.validator, "onError");
                  i && FormValidation.Helper.call(i, [t, e])
              }).on(this.options.events.validatorIgnored, function(t, e) {
                  var i = a.getOptions(e.field, e.validator, "onIgnored");
                  i && FormValidation.Helper.call(i, [t, e])
              }).on(this.options.events.validatorSuccess, function(t, e) {
                  var i = a.getOptions(e.field, e.validator, "onSuccess");
                  i && FormValidation.Helper.call(i, [t, e])
              }),
              this.onLiveChange(n, "live", function() {
                  a._exceedThreshold(i(this)) && a.validateField(i(this))
              }),
              n.trigger(i.Event(this.options.events.fieldInit), {
                  bv: this,
                  fv: this,
                  field: t,
                  element: n
              })
          }
      },
      _isExcluded: function(t) {
          var e = this._namespace
            , n = t.attr("data-" + e + "-excluded")
            , o = t.attr("data-" + e + "-field") || t.attr("name");
          switch (!0) {
          case !!o && this.options.fields && this.options.fields[o] && ("true" === this.options.fields[o].excluded || !0 === this.options.fields[o].excluded):
          case "true" === n:
          case "" === n:
              return !0;
          case !!o && this.options.fields && this.options.fields[o] && ("false" === this.options.fields[o].excluded || !1 === this.options.fields[o].excluded):
          case "false" === n:
              return !1;
          case !!o && this.options.fields && this.options.fields[o] && "function" == typeof this.options.fields[o].excluded:
              return this.options.fields[o].excluded.call(this, t, this);
          case !!o && this.options.fields && this.options.fields[o] && "string" == typeof this.options.fields[o].excluded:
          case n:
              return FormValidation.Helper.call(this.options.fields[o].excluded, [t, this]);
          default:
              if (this.options.excluded) {
                  "string" == typeof this.options.excluded && (this.options.excluded = i.map(this.options.excluded.split(","), function(t) {
                      return i.trim(t)
                  }));
                  for (var r = this.options.excluded.length, s = 0; s < r; s++)
                      if ("string" == typeof this.options.excluded[s] && t.is(this.options.excluded[s]) || "function" == typeof this.options.excluded[s] && !0 === this.options.excluded[s].call(this, t, this))
                          return !0
              }
              return !1
          }
      },
      _getFieldTrigger: function(t) {
          var e = this._namespace
            , i = t.data(e + ".trigger");
          if (i)
              return i;
          var n = t.attr("type")
            , o = t.attr("data-" + e + "-field")
            , r = "radio" === n || "checkbox" === n || "file" === n || "SELECT" === t.get(0).tagName ? "change" : this._ieVersion >= 10 && t.attr("placeholder") ? "keyup" : this._changeEvent;
          return i = ((this.options.fields[o] ? this.options.fields[o].trigger : null) || this.options.trigger || r).split(" "),
          t.data(e + ".trigger", i),
          i
      },
      _getMessage: function(t, e) {
          if (!this.options.fields[t] || !this.options.fields[t].validators)
              return "";
          var i = this.options.fields[t].validators
            , n = i[e] && i[e].alias ? i[e].alias : e;
          if (!FormValidation.Validator[n])
              return "";
          switch (!0) {
          case !!i[e].message:
              return i[e].message;
          case !!this.options.fields[t].message:
              return this.options.fields[t].message;
          case !!this.options.message:
              return this.options.message;
          case !!FormValidation.I18n[this.options.locale] && !!FormValidation.I18n[this.options.locale][n] && !!FormValidation.I18n[this.options.locale][n].default:
              return FormValidation.I18n[this.options.locale][n].default;
          default:
              return this.DEFAULT_MESSAGE
          }
      },
      _getMessageContainer: function(t, e) {
          if (!this.options.err.parent)
              throw new Error("The err.parent option is not defined");
          var i = t.parent();
          if (i.is(e))
              return i;
          var n = i.attr("class");
          return n && this.options.err.parent.test(n) ? i : this._getMessageContainer(i, e)
      },
      _parseAddOnOptions: function() {
          var t, e, i, n, o = this._namespace, r = this.$form.attr("data-" + o + "-addons"), s = this.options.addOns || {};
          if (r) {
              r = r.replace(/\s/g, "").split(",");
              for (var a = 0; a < r.length; a++)
                  s[r[a]] || (s[r[a]] = {})
          }
          for (t in s)
              if (FormValidation.AddOn[t]) {
                  if (e = FormValidation.AddOn[t].html5Attributes)
                      for (i in e)
                          (n = this.$form.attr("data-" + o + "-addons-" + t.toLowerCase() + "-" + i.toLowerCase())) && (s[t][e[i]] = n)
              } else
                  delete s[t];
          return s
      },
      _parseOptions: function(t) {
          var e, n, o, r, s, a, l, c, d, u = this._namespace, h = t.attr("name") || t.attr("data-" + u + "-field"), f = {}, p = new RegExp("^data-" + u + "-([a-z]+)-alias$"), g = i.extend({}, FormValidation.Validator);
          for (n in i.each(t.get(0).attributes, function(t, e) {
              e.value && p.test(e.name) && (n = e.name.split("-")[2],
              g[e.value] && (g[n] = g[e.value],
              g[n].alias = e.value))
          }),
          g)
              if (e = g[n],
              o = "data-" + u + "-" + n.toLowerCase(),
              r = t.attr(o) + "",
              (d = "function" == typeof e.enableByHtml5 ? e.enableByHtml5(t) : null) && "false" !== r || !0 !== d && ("" === r || "true" === r || o === r.toLowerCase()))
                  for (c in e.html5Attributes = i.extend({}, {
                      message: "message",
                      onerror: "onError",
                      onreset: "onReset",
                      onsuccess: "onSuccess",
                      priority: "priority",
                      transformer: "transformer"
                  }, e.html5Attributes),
                  f[n] = i.extend({}, !0 === d ? {} : d, f[n]),
                  e.alias && (f[n].alias = e.alias),
                  e.html5Attributes)
                      s = e.html5Attributes[c],
                      a = "data-" + u + "-" + n.toLowerCase() + "-" + c,
                      (l = t.attr(a)) && ("true" === l || a === l.toLowerCase() ? l = !0 : "false" === l && (l = !1),
                      f[n][s] = l);
          var m = {
              autoFocus: t.attr("data-" + u + "-autofocus"),
              err: t.attr("data-" + u + "-err-container") || t.attr("data-" + u + "-container"),
              enabled: t.attr("data-" + u + "-enabled"),
              excluded: t.attr("data-" + u + "-excluded"),
              icon: t.attr("data-" + u + "-icon") || t.attr("data-" + u + "-feedbackicons") || (this.options.fields && this.options.fields[h] ? this.options.fields[h].feedbackIcons : null),
              message: t.attr("data-" + u + "-message"),
              onError: t.attr("data-" + u + "-onerror"),
              onReset: t.attr("data-" + u + "-onreset"),
              onStatus: t.attr("data-" + u + "-onstatus"),
              onSuccess: t.attr("data-" + u + "-onsuccess"),
              row: t.attr("data-" + u + "-row") || t.attr("data-" + u + "-group") || (this.options.fields && this.options.fields[h] ? this.options.fields[h].group : null),
              selector: t.attr("data-" + u + "-selector"),
              threshold: t.attr("data-" + u + "-threshold"),
              transformer: t.attr("data-" + u + "-transformer"),
              trigger: t.attr("data-" + u + "-trigger"),
              verbose: t.attr("data-" + u + "-verbose"),
              validators: f
          }
            , v = i.isEmptyObject(m);
          return !i.isEmptyObject(f) || !v && this.options.fields && this.options.fields[h] ? m : null
      },
      _submit: function() {
          var t = this.isValid();
          if (null !== t) {
              var e = t ? this.options.events.formSuccess : this.options.events.formError
                , n = i.Event(e);
              this.$form.trigger(n),
              this.$submitButton && (t ? this._onSuccess(n) : this._onError(n))
          }
      },
      _onError: function(t) {
          if (!t.isDefaultPrevented()) {
              if ("submitted" === this.options.live) {
                  this.options.live = "enabled";
                  var e = this;
                  for (var n in this.options.fields)
                      o = n,
                      r = void 0,
                      (r = e.getFieldElements(o)).length && e.onLiveChange(r, "live", function() {
                          e._exceedThreshold(i(this)) && e.validateField(i(this))
                      })
              }
              for (var o, r, s = this._namespace, a = 0; a < this.$invalidFields.length; a++) {
                  var l = this.$invalidFields.eq(a);
                  if (this.isOptionEnabled(l.attr("data-" + s + "-field"), "autoFocus")) {
                      l.focus();
                      break
                  }
              }
          }
      },
      _onFieldValidated: function(t, e) {
          var n = this._namespace
            , o = t.attr("data-" + n + "-field")
            , r = this.options.fields[o].validators
            , s = {}
            , a = 0
            , l = {
              bv: this,
              fv: this,
              field: o,
              element: t,
              validator: e,
              result: t.data(n + ".response." + e)
          };
          if (e)
              switch (t.data(n + ".result." + e)) {
              case this.STATUS_INVALID:
                  t.trigger(i.Event(this.options.events.validatorError), l);
                  break;
              case this.STATUS_VALID:
                  t.trigger(i.Event(this.options.events.validatorSuccess), l);
                  break;
              case this.STATUS_IGNORED:
                  t.trigger(i.Event(this.options.events.validatorIgnored), l)
              }
          for (var c in s[this.STATUS_NOT_VALIDATED] = 0,
          s[this.STATUS_VALIDATING] = 0,
          s[this.STATUS_INVALID] = 0,
          s[this.STATUS_VALID] = 0,
          s[this.STATUS_IGNORED] = 0,
          r)
              if (!1 !== r[c].enabled) {
                  a++;
                  var d = t.data(n + ".result." + c);
                  d && s[d]++
              }
          s[this.STATUS_VALID] + s[this.STATUS_IGNORED] === a ? (this.$invalidFields = this.$invalidFields.not(t),
          t.trigger(i.Event(this.options.events.fieldSuccess), l)) : (0 === s[this.STATUS_NOT_VALIDATED] || !this.isOptionEnabled(o, "verbose")) && 0 === s[this.STATUS_VALIDATING] && s[this.STATUS_INVALID] > 0 && (this.$invalidFields = this.$invalidFields.add(t),
          t.trigger(i.Event(this.options.events.fieldError), l))
      },
      _onSuccess: function(t) {
          t.isDefaultPrevented() || this.disableSubmitButtons(!0).defaultSubmit()
      },
      _fixIcon: function(t, e) {},
      _createTooltip: function(t, e, i) {},
      _destroyTooltip: function(t, e) {},
      _hideTooltip: function(t, e) {},
      _showTooltip: function(t, e) {},
      defaultSubmit: function() {
          var t = this._namespace;
          this.$submitButton && i("<input/>").attr({
              type: "hidden",
              name: this.$submitButton.attr("name")
          }).attr("data-" + t + "-submit-hidden", "").val(this.$submitButton.val()).appendTo(this.$form),
          this.$form.off("submit." + t).submit()
      },
      disableSubmitButtons: function(t) {
          return t ? "disabled" !== this.options.live && this.$form.find(this.options.button.selector).attr("disabled", "disabled").addClass(this.options.button.disabled) : this.$form.find(this.options.button.selector).removeAttr("disabled").removeClass(this.options.button.disabled),
          this
      },
      getFieldElements: function(t) {
          if (!this._cacheFields[t])
              if (this.options.fields[t] && this.options.fields[t].selector) {
                  var e = this.$form.find(this.options.fields[t].selector);
                  this._cacheFields[t] = e.length ? e : i(this.options.fields[t].selector)
              } else
                  this._cacheFields[t] = this.$form.find('[name="' + t + '"]');
          return this._cacheFields[t]
      },
      getFieldValue: function(t, e) {
          var i, n = this._namespace;
          if ("string" == typeof t) {
              if (0 === (i = this.getFieldElements(t)).length)
                  return null
          } else
              t = (i = t).attr("data-" + n + "-field");
          if (!t || !this.options.fields[t])
              return i.val();
          var o = (this.options.fields[t].validators && this.options.fields[t].validators[e] ? this.options.fields[t].validators[e].transformer : null) || this.options.fields[t].transformer;
          return o ? FormValidation.Helper.call(o, [i, e, this]) : i.val()
      },
      getNamespace: function() {
          return this._namespace
      },
      getOptions: function(t, e, i) {
          var n = this._namespace;
          if (!t)
              return i ? this.options[i] : this.options;
          if ("object" == typeof t && (t = t.attr("data-" + n + "-field")),
          !this.options.fields[t])
              return null;
          var o = this.options.fields[t];
          return e ? o.validators && o.validators[e] ? i ? o.validators[e][i] : o.validators[e] : null : i ? o[i] : o
      },
      getStatus: function(t, e) {
          var i = this._namespace;
          switch (typeof t) {
          case "object":
              return t.data(i + ".result." + e);
          case "string":
          default:
              return this.getFieldElements(t).eq(0).data(i + ".result." + e)
          }
      },
      isOptionEnabled: function(t, e) {
          return !(!this.options.fields[t] || "true" !== this.options.fields[t][e] && !0 !== this.options.fields[t][e]) || (!this.options.fields[t] || "false" !== this.options.fields[t][e] && !1 !== this.options.fields[t][e]) && ("true" === this.options[e] || !0 === this.options[e])
      },
      isValid: function() {
          for (var t in this.options.fields) {
              var e = this.isValidField(t);
              if (null === e)
                  return null;
              if (!1 === e)
                  return !1
          }
          return !0
      },
      isValidContainer: function(t) {
          var e = this
            , n = this._namespace
            , o = []
            , r = "string" == typeof t ? i(t) : t;
          if (0 === r.length)
              return !0;
          r.find("[data-" + n + "-field]").each(function() {
              var t = i(this);
              e._isExcluded(t) || o.push(t)
          });
          for (var s = o.length, a = this.options.err.clazz.split(" ").join("."), l = 0; l < s; l++) {
              var c = o[l]
                , d = c.attr("data-" + n + "-field")
                , u = c.data(n + ".messages").find("." + a + "[data-" + n + "-validator][data-" + n + '-for="' + d + '"]');
              if (!this.options.fields || !this.options.fields[d] || "false" !== this.options.fields[d].enabled && !1 !== this.options.fields[d].enabled) {
                  if (u.filter("[data-" + n + '-result="' + this.STATUS_INVALID + '"]').length > 0)
                      return !1;
                  if (u.filter("[data-" + n + '-result="' + this.STATUS_NOT_VALIDATED + '"]').length > 0 || u.filter("[data-" + n + '-result="' + this.STATUS_VALIDATING + '"]').length > 0)
                      return null
              }
          }
          return !0
      },
      isValidField: function(t) {
          var e = this._namespace
            , n = i([]);
          switch (typeof t) {
          case "object":
              n = t,
              t = t.attr("data-" + e + "-field");
              break;
          case "string":
              n = this.getFieldElements(t)
          }
          if (0 === n.length || !this.options.fields[t] || "false" === this.options.fields[t].enabled || !1 === this.options.fields[t].enabled)
              return !0;
          for (var o, r, s, a = n.attr("type"), l = "radio" === a || "checkbox" === a ? 1 : n.length, c = 0; c < l; c++)
              if (o = n.eq(c),
              !this._isExcluded(o))
                  for (r in this.options.fields[t].validators)
                      if (!1 !== this.options.fields[t].validators[r].enabled) {
                          if ((s = o.data(e + ".result." + r)) === this.STATUS_VALIDATING || s === this.STATUS_NOT_VALIDATED)
                              return null;
                          if (s === this.STATUS_INVALID)
                              return !1
                      }
          return !0
      },
      offLiveChange: function(t, e) {
          if (null === t || 0 === t.length)
              return this;
          var n = this._namespace
            , o = this._getFieldTrigger(t.eq(0))
            , r = i.map(o, function(t) {
              return t + "." + e + "." + n
          }).join(" ");
          return t.off(r),
          this
      },
      onLiveChange: function(t, e, n) {
          if (null === t || 0 === t.length)
              return this;
          var o = this._namespace
            , r = this._getFieldTrigger(t.eq(0))
            , s = i.map(r, function(t) {
              return t + "." + e + "." + o
          }).join(" ");
          switch (this.options.live) {
          case "submitted":
              break;
          case "disabled":
              t.off(s);
              break;
          case "enabled":
          default:
              t.off(s).on(s, function(t) {
                  n.apply(this, arguments)
              })
          }
          return this
      },
      updateMessage: function(t, e, n) {
          var o = this._namespace
            , r = i([]);
          switch (typeof t) {
          case "object":
              r = t,
              t = t.attr("data-" + o + "-field");
              break;
          case "string":
              r = this.getFieldElements(t)
          }
          var s = this.options.err.clazz.split(" ").join(".");
          return r.each(function() {
              i(this).data(o + ".messages").find("." + s + "[data-" + o + '-validator="' + e + '"][data-' + o + '-for="' + t + '"]').html(n)
          }),
          this
      },
      updateStatus: function(t, e, n) {
          var o = this._namespace
            , r = i([]);
          switch (typeof t) {
          case "object":
              r = t,
              t = t.attr("data-" + o + "-field");
              break;
          case "string":
              r = this.getFieldElements(t)
          }
          if (!t || !this.options.fields[t])
              return this;
          e === this.STATUS_NOT_VALIDATED && (this._submitIfValid = !1);
          for (var s = r.attr("type"), a = this.options.fields[t].row || this.options.row.selector, l = "radio" === s || "checkbox" === s ? 1 : r.length, c = this.options.err.clazz.split(" ").join("."), d = 0; d < l; d++) {
              var u = r.eq(d);
              if (!this._isExcluded(u)) {
                  var h, f, p = u.closest(a), g = u.data(o + ".messages").find("." + c + "[data-" + o + "-validator][data-" + o + '-for="' + t + '"]'), m = n ? g.filter("[data-" + o + '-validator="' + n + '"]') : g, v = u.data(o + ".icon"), y = "function" == typeof (this.options.fields[t].container || this.options.fields[t].err || this.options.err.container) ? (this.options.fields[t].container || this.options.fields[t].err || this.options.err.container).call(this, u, this) : this.options.fields[t].container || this.options.fields[t].err || this.options.err.container, b = null;
                  if (n)
                      u.data(o + ".result." + n, e);
                  else
                      for (var w in this.options.fields[t].validators)
                          u.data(o + ".result." + w, e);
                  switch (m.attr("data-" + o + "-result", e),
                  e) {
                  case this.STATUS_VALIDATING:
                      b = null,
                      this.disableSubmitButtons(!0),
                      u.removeClass(this.options.control.valid).removeClass(this.options.control.invalid),
                      p.removeClass(this.options.row.valid).removeClass(this.options.row.invalid),
                      v && v.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).addClass(this.options.icon.validating).show();
                      break;
                  case this.STATUS_INVALID:
                      b = !1,
                      this.disableSubmitButtons(!0),
                      u.removeClass(this.options.control.valid).addClass(this.options.control.invalid),
                      p.removeClass(this.options.row.valid).addClass(this.options.row.invalid),
                      v && v.removeClass(this.options.icon.valid).removeClass(this.options.icon.validating).addClass(this.options.icon.invalid).show();
                      break;
                  case this.STATUS_IGNORED:
                  case this.STATUS_VALID:
                      h = g.filter("[data-" + o + '-result="' + this.STATUS_VALIDATING + '"]').length > 0,
                      f = g.filter("[data-" + o + '-result="' + this.STATUS_NOT_VALIDATED + '"]').length > 0;
                      var x = g.filter("[data-" + o + '-result="' + this.STATUS_IGNORED + '"]').length;
                      b = h || f ? null : g.filter("[data-" + o + '-result="' + this.STATUS_VALID + '"]').length + x === g.length,
                      u.removeClass(this.options.control.valid).removeClass(this.options.control.invalid),
                      !0 === b ? (this.disableSubmitButtons(!1 === this.isValid()),
                      e === this.STATUS_VALID && u.addClass(this.options.control.valid)) : !1 === b && (this.disableSubmitButtons(!0),
                      e === this.STATUS_VALID && u.addClass(this.options.control.invalid)),
                      v && (v.removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).removeClass(this.options.icon.valid),
                      e !== this.STATUS_VALID && x === g.length || v.addClass(h ? this.options.icon.validating : null === b ? "" : b ? this.options.icon.valid : this.options.icon.invalid).show());
                      var A = this.isValidContainer(p);
                      null !== A && (p.removeClass(this.options.row.valid).removeClass(this.options.row.invalid),
                      e !== this.STATUS_VALID && x === g.length || p.addClass(A ? this.options.row.valid : this.options.row.invalid));
                      break;
                  case this.STATUS_NOT_VALIDATED:
                  default:
                      b = null,
                      this.disableSubmitButtons(!1),
                      u.removeClass(this.options.control.valid).removeClass(this.options.control.invalid),
                      p.removeClass(this.options.row.valid).removeClass(this.options.row.invalid),
                      v && v.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).hide()
                  }
                  !v || "tooltip" !== y && "popover" !== y ? e === this.STATUS_INVALID ? m.show() : m.hide() : !1 === b ? this._createTooltip(u, g.filter("[data-" + o + '-result="' + this.STATUS_INVALID + '"]').eq(0).html(), y) : this._destroyTooltip(u, y),
                  u.trigger(i.Event(this.options.events.fieldStatus), {
                      bv: this,
                      fv: this,
                      field: t,
                      element: u,
                      status: e,
                      validator: n
                  }),
                  this._onFieldValidated(u, n)
              }
          }
          return this
      },
      validate: function() {
          if (i.isEmptyObject(this.options.fields))
              return this._submit(),
              this;
          for (var t in this.$form.trigger(i.Event(this.options.events.formPreValidate)),
          this.disableSubmitButtons(!0),
          this._submitIfValid = !1,
          this.options.fields)
              this.validateField(t);
          return this._submit(),
          this._submitIfValid = !0,
          this
      },
      validateField: function(t) {
          var e = this._namespace
            , n = i([]);
          switch (typeof t) {
          case "object":
              n = t,
              t = t.attr("data-" + e + "-field");
              break;
          case "string":
              n = this.getFieldElements(t)
          }
          if (0 === n.length || !this.options.fields[t] || "false" === this.options.fields[t].enabled || !1 === this.options.fields[t].enabled)
              return this;
          for (var o, r, s, a = this, l = n.attr("type"), c = "radio" !== l && "checkbox" !== l || "disabled" === this.options.live ? n.length : 1, d = "radio" === l || "checkbox" === l, u = this.options.fields[t].validators, h = this.isOptionEnabled(t, "verbose"), f = 0; f < c; f++) {
              var p = n.eq(f);
              if (!this._isExcluded(p))
                  for (var g = !1, m = p.data(e + ".validators"), v = m.length, y = 0; y < v && (o = m[y].validator,
                  p.data(e + ".dfs." + o) && p.data(e + ".dfs." + o).reject(),
                  !g); y++) {
                      var b = p.data(e + ".result." + o);
                      if (b !== this.STATUS_VALID && b !== this.STATUS_INVALID)
                          if (!1 !== u[o].enabled)
                              if (p.data(e + ".result." + o, this.STATUS_VALIDATING),
                              r = u[o].alias || o,
                              "object" == typeof (s = FormValidation.Validator[r].validate(this, p, u[o], o)) && s.resolve)
                                  this.updateStatus(d ? t : p, this.STATUS_VALIDATING, o),
                                  p.data(e + ".dfs." + o, s),
                                  s.done(function(t, i, n) {
                                      t.removeData(e + ".dfs." + i).data(e + ".response." + i, n),
                                      n.message && a.updateMessage(t, i, n.message),
                                      a.updateStatus(d ? t.attr("data-" + e + "-field") : t, !0 === n.valid ? a.STATUS_VALID : !1 === n.valid ? a.STATUS_INVALID : a.STATUS_IGNORED, i),
                                      n.valid && !0 === a._submitIfValid ? a._submit() : !1 !== n.valid || h || (g = !0)
                                  });
                              else if ("object" == typeof s && void 0 !== s.valid) {
                                  if (p.data(e + ".response." + o, s),
                                  s.message && this.updateMessage(d ? t : p, o, s.message),
                                  this.updateStatus(d ? t : p, !0 === s.valid ? this.STATUS_VALID : !1 === s.valid ? this.STATUS_INVALID : this.STATUS_IGNORED, o),
                                  !1 === s.valid && !h)
                                      break
                              } else if ("boolean" == typeof s) {
                                  if (p.data(e + ".response." + o, s),
                                  this.updateStatus(d ? t : p, s ? this.STATUS_VALID : this.STATUS_INVALID, o),
                                  !s && !h)
                                      break
                              } else
                                  null === s && (p.data(e + ".response." + o, s),
                                  this.updateStatus(d ? t : p, this.STATUS_IGNORED, o));
                          else
                              this.updateStatus(d ? t : p, this.STATUS_IGNORED, o);
                      else
                          this._onFieldValidated(p, o)
                  }
          }
          return this
      },
      addField: function(t, e) {
          var n = this._namespace
            , o = i([]);
          switch (typeof t) {
          case "object":
              o = t,
              t = t.attr("data-" + n + "-field") || t.attr("name");
              break;
          case "string":
              delete this._cacheFields[t],
              o = this.getFieldElements(t)
          }
          o.attr("data-" + n + "-field", t);
          for (var r = o.attr("type"), s = "radio" === r || "checkbox" === r ? 1 : o.length, a = 0; a < s; a++) {
              var l = o.eq(a)
                , c = this._parseOptions(l);
              c = null === c ? e : i.extend(!0, c, e),
              this.options.fields[t] = i.extend(!0, this.options.fields[t], c),
              this._cacheFields[t] = this._cacheFields[t] ? this._cacheFields[t].add(l) : l,
              this._initField("checkbox" === r || "radio" === r ? t : l)
          }
          return this.disableSubmitButtons(!1),
          this.$form.trigger(i.Event(this.options.events.fieldAdded), {
              field: t,
              element: o,
              options: this.options.fields[t]
          }),
          this
      },
      destroy: function() {
          var t, e, i, n, o, r, s, a, l = this._namespace;
          for (e in this.options.fields)
              for (i = this.getFieldElements(e),
              t = 0; t < i.length; t++)
                  for (o in n = i.eq(t),
                  this.options.fields[e].validators)
                      n.data(l + ".dfs." + o) && n.data(l + ".dfs." + o).reject(),
                      n.removeData(l + ".result." + o).removeData(l + ".response." + o).removeData(l + ".dfs." + o),
                      a = this.options.fields[e].validators[o].alias || o,
                      "function" == typeof FormValidation.Validator[a].destroy && FormValidation.Validator[a].destroy(this, n, this.options.fields[e].validators[o], o);
          var c = this.options.err.clazz.split(" ").join(".");
          for (e in this.options.fields)
              for (i = this.getFieldElements(e),
              s = this.options.fields[e].row || this.options.row.selector,
              t = 0; t < i.length; t++) {
                  var d = (n = i.eq(t)).data(l + ".messages");
                  d && d.find("." + c + "[data-" + l + "-validator][data-" + l + '-for="' + e + '"]').remove(),
                  n.removeData(l + ".messages").removeData(l + ".validators").closest(s).removeClass(this.options.row.valid).removeClass(this.options.row.invalid).removeClass(this.options.row.feedback).end().off("." + l).removeAttr("data-" + l + "-field");
                  var u = "function" == typeof (this.options.fields[e].container || this.options.fields[e].err || this.options.err.container) ? (this.options.fields[e].container || this.options.fields[e].err || this.options.err.container).call(this, n, this) : this.options.fields[e].container || this.options.fields[e].err || this.options.err.container;
                  "tooltip" !== u && "popover" !== u || this._destroyTooltip(n, u),
                  (r = n.data(l + ".icon")) && r.remove(),
                  n.removeData(l + ".icon").removeData(l + ".trigger")
              }
          for (var h in this.options.addOns)
              "function" == typeof FormValidation.AddOn[h].destroy && FormValidation.AddOn[h].destroy(this, this.options.addOns[h]);
          this.disableSubmitButtons(!1),
          this.$hiddenButton.remove(),
          this.$form.removeClass(this.options.elementClass).off("." + l).removeData("bootstrapValidator").removeData("formValidation").find("[data-" + l + "-submit-hidden]").remove().end().find('[type="submit"]').off("click." + l)
      },
      enableFieldValidators: function(t, e, i) {
          var n = this.options.fields[t].validators;
          if (i && n && n[i] && n[i].enabled !== e)
              this.options.fields[t].validators[i].enabled = e,
              this.updateStatus(t, this.STATUS_NOT_VALIDATED, i);
          else if (!i && this.options.fields[t].enabled !== e)
              for (var o in this.options.fields[t].enabled = e,
              n)
                  this.enableFieldValidators(t, e, o);
          return this
      },
      getDynamicOption: function(t, e) {
          var i = "string" == typeof t ? this.getFieldElements(t) : t
            , n = i.val();
          if ("function" == typeof e)
              return FormValidation.Helper.call(e, [n, this, i]);
          if ("string" == typeof e) {
              var o = this.getFieldElements(e);
              return o.length ? o.val() : FormValidation.Helper.call(e, [n, this, i]) || e
          }
          return null
      },
      getForm: function() {
          return this.$form
      },
      getInvalidFields: function() {
          return this.$invalidFields
      },
      getLocale: function() {
          return this.options.locale
      },
      getMessages: function(t, e) {
          var n = this
            , o = this._namespace
            , r = []
            , s = i([]);
          switch (!0) {
          case t && "object" == typeof t:
              s = t;
              break;
          case t && "string" == typeof t:
              var a = this.getFieldElements(t);
              if (a.length > 0) {
                  var l = a.attr("type");
                  s = "radio" === l || "checkbox" === l ? a.eq(0) : a
              }
              break;
          default:
              s = this.$invalidFields
          }
          var c = e ? "[data-" + o + '-validator="' + e + '"]' : ""
            , d = this.options.err.clazz.split(" ").join(".");
          return s.each(function() {
              r = r.concat(i(this).data(o + ".messages").find("." + d + "[data-" + o + '-for="' + i(this).attr("data-" + o + "-field") + '"][data-' + o + '-result="' + n.STATUS_INVALID + '"]' + c).map(function() {
                  var t = i(this).attr("data-" + o + "-validator")
                    , e = i(this).attr("data-" + o + "-for");
                  return !1 === n.options.fields[e].validators[t].enabled ? "" : i(this).html()
              }).get())
          }),
          r
      },
      getSubmitButton: function() {
          return this.$submitButton
      },
      removeField: function(t) {
          var e = this._namespace
            , n = i([]);
          switch (typeof t) {
          case "object":
              n = t,
              t = t.attr("data-" + e + "-field") || t.attr("name"),
              n.attr("data-" + e + "-field", t);
              break;
          case "string":
              n = this.getFieldElements(t)
          }
          if (0 === n.length)
              return this;
          for (var o = n.attr("type"), r = "radio" === o || "checkbox" === o ? 1 : n.length, s = 0; s < r; s++) {
              var a = n.eq(s);
              this.$invalidFields = this.$invalidFields.not(a),
              this._cacheFields[t] = this._cacheFields[t].not(a)
          }
          return this._cacheFields[t] && 0 !== this._cacheFields[t].length || delete this.options.fields[t],
          "checkbox" !== o && "radio" !== o || this._initField(t),
          this.disableSubmitButtons(!1),
          this.$form.trigger(i.Event(this.options.events.fieldRemoved), {
              field: t,
              element: n
          }),
          this
      },
      resetField: function(t, e) {
          var n = this._namespace
            , o = i([]);
          switch (typeof t) {
          case "object":
              o = t,
              t = t.attr("data-" + n + "-field");
              break;
          case "string":
              o = this.getFieldElements(t)
          }
          var r = 0
            , s = o.length;
          if (this.options.fields[t])
              for (r = 0; r < s; r++)
                  for (var a in this.options.fields[t].validators)
                      o.eq(r).removeData(n + ".dfs." + a);
          if (e) {
              var l = o.attr("type");
              "radio" === l || "checkbox" === l ? o.prop("checked", !1).removeAttr("selected") : o.val("")
          }
          for (this.updateStatus(t, this.STATUS_NOT_VALIDATED),
          r = 0; r < s; r++)
              o.eq(r).trigger(i.Event(this.options.events.fieldReset), {
                  fv: this,
                  field: t,
                  element: o.eq(r),
                  resetValue: e
              });
          return this
      },
      resetForm: function(t) {
          for (var e in this.options.fields)
              this.resetField(e, t);
          return this.$invalidFields = i([]),
          this.$submitButton = null,
          this.disableSubmitButtons(!1),
          this.$form.trigger(i.Event(this.options.events.formReset), {
              fv: this,
              resetValue: t
          }),
          this
      },
      revalidateField: function(t) {
          return this.updateStatus(t, this.STATUS_NOT_VALIDATED).validateField(t),
          this
      },
      setLocale: function(t) {
          return this.options.locale = t,
          this.$form.trigger(i.Event(this.options.events.localeChanged), {
              locale: t,
              bv: this,
              fv: this
          }),
          this
      },
      updateOption: function(t, e, i, n) {
          var o = this._namespace;
          return "object" == typeof t && (t = t.attr("data-" + o + "-field")),
          this.options.fields[t] && this.options.fields[t].validators[e] && (this.options.fields[t].validators[e][i] = n,
          this.updateStatus(t, this.STATUS_NOT_VALIDATED, e)),
          this
      },
      validateContainer: function(t) {
          var e = this
            , n = this._namespace
            , o = []
            , r = "string" == typeof t ? i(t) : t;
          if (0 === r.length)
              return this;
          r.find("[data-" + n + "-field]").each(function() {
              var t = i(this);
              e._isExcluded(t) || o.push(t)
          });
          for (var s = o.length, a = 0; a < s; a++)
              this.validateField(o[a]);
          return this
      }
  },
  i.fn.formValidation = function(t) {
      var e = arguments;
      return this.each(function() {
          var n = i(this)
            , o = n.data("formValidation")
            , r = "object" == typeof t && t;
          if (!o) {
              var s = (r.framework || n.attr("data-fv-framework") || "bootstrap").toLowerCase()
                , a = s.substr(0, 1).toUpperCase() + s.substr(1);
              if (void 0 === FormValidation.Framework[a])
                  throw new Error("The class FormValidation.Framework." + a + " is not implemented");
              o = new FormValidation.Framework[a](this,r),
              n.addClass("fv-form-" + s).data("formValidation", o)
          }
          "string" == typeof t && o[t].apply(o, Array.prototype.slice.call(e, 1))
      })
  }
  ,
  i.fn.formValidation.Constructor = FormValidation.Base,
  i.fn.formValidation.DEFAULT_MESSAGE = "This value is not valid",
  i.fn.formValidation.DEFAULT_OPTIONS = {
      autoFocus: !0,
      declarative: !0,
      elementClass: "fv-form",
      events: {
          formInit: "init.form.fv",
          formPreValidate: "prevalidate.form.fv",
          formError: "err.form.fv",
          formReset: "rst.form.fv",
          formSuccess: "success.form.fv",
          fieldAdded: "added.field.fv",
          fieldRemoved: "removed.field.fv",
          fieldInit: "init.field.fv",
          fieldError: "err.field.fv",
          fieldReset: "rst.field.fv",
          fieldSuccess: "success.field.fv",
          fieldStatus: "status.field.fv",
          localeChanged: "changed.locale.fv",
          validatorError: "err.validator.fv",
          validatorSuccess: "success.validator.fv",
          validatorIgnored: "ignored.validator.fv"
      },
      excluded: [":disabled", ":hidden", ":not(:visible)"],
      fields: null,
      live: "enabled",
      locale: "en_US",
      message: null,
      threshold: null,
      verbose: !0,
      button: {
          selector: '[type="submit"]:not([formnovalidate])',
          disabled: ""
      },
      control: {
          valid: "",
          invalid: ""
      },
      err: {
          clazz: "",
          container: null,
          parent: null
      },
      icon: {
          valid: null,
          invalid: null,
          validating: null,
          feedback: ""
      },
      row: {
          selector: null,
          valid: "",
          invalid: "",
          feedback: ""
      }
  },
  function(t) {
      FormValidation.Helper = {
          call: function(t, e) {
              if ("function" == typeof t)
                  return t.apply(this, e);
              if ("string" == typeof t) {
                  "()" === t.substring(t.length - 2) && (t = t.substring(0, t.length - 2));
                  for (var i = t.split("."), n = i.pop(), o = window, r = 0; r < i.length; r++)
                      o = o[i[r]];
                  return void 0 === o[n] ? null : o[n].apply(this, e)
              }
          },
          date: function(t, e, i, n) {
              if (isNaN(t) || isNaN(e) || isNaN(i))
                  return !1;
              if (i.length > 2 || e.length > 2 || t.length > 4)
                  return !1;
              if (i = parseInt(i, 10),
              e = parseInt(e, 10),
              (t = parseInt(t, 10)) < 1e3 || t > 9999 || e <= 0 || e > 12)
                  return !1;
              var o = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
              if ((t % 400 == 0 || t % 100 != 0 && t % 4 == 0) && (o[1] = 29),
              i <= 0 || i > o[e - 1])
                  return !1;
              if (!0 === n) {
                  var r = new Date
                    , s = r.getFullYear()
                    , a = r.getMonth()
                    , l = r.getDate();
                  return t < s || t === s && e - 1 < a || t === s && e - 1 === a && i < l
              }
              return !0
          },
          format: function(e, i) {
              for (var n in t.isArray(i) || (i = [i]),
              i)
                  e = e.replace("%s", i[n]);
              return e
          },
          luhn: function(t) {
              for (var e = t.length, i = 0, n = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]], o = 0; e--; )
                  o += n[i][parseInt(t.charAt(e), 10)],
                  i ^= 1;
              return o % 10 == 0 && o > 0
          },
          mod11And10: function(t) {
              for (var e = 5, i = t.length, n = 0; n < i; n++)
                  e = (2 * (e || 10) % 11 + parseInt(t.charAt(n), 10)) % 10;
              return 1 === e
          },
          mod37And36: function(t, e) {
              for (var i = (e = e || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ").length, n = t.length, o = Math.floor(i / 2), r = 0; r < n; r++)
                  o = (2 * (o || i) % (i + 1) + e.indexOf(t.charAt(r))) % i;
              return 1 === o
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              base64: {
                  default: "Please enter a valid base 64 encoded"
              }
          }
      }),
      FormValidation.Validator.base64 = {
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              return "" === o || /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{4})$/.test(o)
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              between: {
                  default: "Please enter a value between %s and %s",
                  notInclusive: "Please enter a value between %s and %s strictly"
              }
          }
      }),
      FormValidation.Validator.between = {
          html5Attributes: {
              message: "message",
              min: "min",
              max: "max",
              inclusive: "inclusive"
          },
          enableByHtml5: function(t) {
              return "range" === t.attr("type") && {
                  min: t.attr("min"),
                  max: t.attr("max")
              }
          },
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o);
              if ("" === r)
                  return !0;
              r = this._format(r);
              var s = e.getLocale()
                , a = t.isNumeric(n.min) ? n.min : e.getDynamicOption(i, n.min)
                , l = t.isNumeric(n.max) ? n.max : e.getDynamicOption(i, n.max)
                , c = this._format(a)
                , d = this._format(l);
              return !0 === n.inclusive || void 0 === n.inclusive ? {
                  valid: t.isNumeric(r) && parseFloat(r) >= c && parseFloat(r) <= d,
                  message: FormValidation.Helper.format(n.message || FormValidation.I18n[s].between.default, [a, l])
              } : {
                  valid: t.isNumeric(r) && parseFloat(r) > c && parseFloat(r) < d,
                  message: FormValidation.Helper.format(n.message || FormValidation.I18n[s].between.notInclusive, [a, l])
              }
          },
          _format: function(t) {
              return (t + "").replace(",", ".")
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              bic: {
                  default: "Please enter a valid BIC number"
              }
          }
      }),
      FormValidation.Validator.bic = {
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              return "" === o || /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(o)
          }
      }
  }(jQuery),
  jQuery,
  FormValidation.Validator.blank = {
      validate: function(t, e, i, n) {
          return !0
      }
  },
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              callback: {
                  default: "Please enter a valid value"
              }
          }
      }),
      FormValidation.Validator.callback = {
          priority: 999,
          html5Attributes: {
              message: "message",
              callback: "callback"
          },
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o)
                , s = new t.Deferred
                , a = {
                  valid: !0
              };
              if (n.callback) {
                  var l = FormValidation.Helper.call(n.callback, [r, e, i]);
                  a = "boolean" == typeof l || null === l ? {
                      valid: l
                  } : l
              }
              return s.resolve(i, o, a),
              s
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              choice: {
                  default: "Please enter a valid value",
                  less: "Please choose %s options at minimum",
                  more: "Please choose %s options at maximum",
                  between: "Please choose %s - %s options"
              }
          }
      }),
      FormValidation.Validator.choice = {
          html5Attributes: {
              message: "message",
              min: "min",
              max: "max"
          },
          validate: function(e, i, n, o) {
              var r = e.getLocale()
                , s = e.getNamespace()
                , a = i.is("select") ? e.getFieldElements(i.attr("data-" + s + "-field")).find("option").filter(":selected").length : e.getFieldElements(i.attr("data-" + s + "-field")).filter(":checked").length
                , l = n.min ? t.isNumeric(n.min) ? n.min : e.getDynamicOption(i, n.min) : null
                , c = n.max ? t.isNumeric(n.max) ? n.max : e.getDynamicOption(i, n.max) : null
                , d = !0
                , u = n.message || FormValidation.I18n[r].choice.default;
              switch ((l && a < parseInt(l, 10) || c && a > parseInt(c, 10)) && (d = !1),
              !0) {
              case !!l && !!c:
                  u = FormValidation.Helper.format(n.message || FormValidation.I18n[r].choice.between, [parseInt(l, 10), parseInt(c, 10)]);
                  break;
              case !!l:
                  u = FormValidation.Helper.format(n.message || FormValidation.I18n[r].choice.less, parseInt(l, 10));
                  break;
              case !!c:
                  u = FormValidation.Helper.format(n.message || FormValidation.I18n[r].choice.more, parseInt(c, 10))
              }
              return {
                  valid: d,
                  message: u
              }
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              color: {
                  default: "Please enter a valid color"
              }
          }
      }),
      FormValidation.Validator.color = {
          html5Attributes: {
              message: "message",
              type: "type"
          },
          enableByHtml5: function(t) {
              return "color" === t.attr("type")
          },
          SUPPORTED_TYPES: ["hex", "rgb", "rgba", "hsl", "hsla", "keyword"],
          KEYWORD_COLORS: ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "transparent", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o);
              if ("" === r)
                  return !0;
              if (this.enableByHtml5(i))
                  return /^#[0-9A-F]{6}$/i.test(r);
              var s = n.type || this.SUPPORTED_TYPES;
              t.isArray(s) || (s = s.replace(/s/g, "").split(","));
              for (var a, l = !1, c = 0; c < s.length; c++)
                  if (a = "_" + s[c].toLowerCase(),
                  l = l || this[a](r))
                      return !0;
              return !1
          },
          _hex: function(t) {
              return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
          },
          _hsl: function(t) {
              return /^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(t)
          },
          _hsla: function(t) {
              return /^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(t)
          },
          _keyword: function(e) {
              return t.inArray(e, this.KEYWORD_COLORS) >= 0
          },
          _rgb: function(t) {
              return /^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/.test(t) || /^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(t)
          },
          _rgba: function(t) {
              return /^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(t) || /^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(t)
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              creditCard: {
                  default: "Please enter a valid credit card number"
              }
          }
      }),
      FormValidation.Validator.creditCard = {
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o);
              if ("" === r)
                  return !0;
              if (/[^0-9-\s]+/.test(r))
                  return !1;
              if (r = r.replace(/\D/g, ""),
              !FormValidation.Helper.luhn(r))
                  return !1;
              var s, a, l = {
                  AMERICAN_EXPRESS: {
                      length: [15],
                      prefix: ["34", "37"]
                  },
                  DANKORT: {
                      length: [16],
                      prefix: ["5019"]
                  },
                  DINERS_CLUB: {
                      length: [14],
                      prefix: ["300", "301", "302", "303", "304", "305", "36"]
                  },
                  DINERS_CLUB_US: {
                      length: [16],
                      prefix: ["54", "55"]
                  },
                  DISCOVER: {
                      length: [16],
                      prefix: ["6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65"]
                  },
                  ELO: {
                      length: [16],
                      prefix: ["4011", "4312", "4389", "4514", "4573", "4576", "5041", "5066", "5067", "509", "6277", "6362", "6363", "650", "6516", "6550"]
                  },
                  FORBRUGSFORENINGEN: {
                      length: [16],
                      prefix: ["600722"]
                  },
                  JCB: {
                      length: [16],
                      prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"]
                  },
                  LASER: {
                      length: [16, 17, 18, 19],
                      prefix: ["6304", "6706", "6771", "6709"]
                  },
                  MAESTRO: {
                      length: [12, 13, 14, 15, 16, 17, 18, 19],
                      prefix: ["5018", "5020", "5038", "5868", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766"]
                  },
                  MASTERCARD: {
                      length: [16],
                      prefix: ["51", "52", "53", "54", "55"]
                  },
                  SOLO: {
                      length: [16, 18, 19],
                      prefix: ["6334", "6767"]
                  },
                  UNIONPAY: {
                      length: [16, 17, 18, 19],
                      prefix: ["622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925"]
                  },
                  VISA_ELECTRON: {
                      length: [16],
                      prefix: ["4026", "417500", "4405", "4508", "4844", "4913", "4917"]
                  },
                  VISA: {
                      length: [16],
                      prefix: ["4"]
                  }
              };
              for (s in l)
                  for (a in l[s].prefix)
                      if (r.substr(0, l[s].prefix[a].length) === l[s].prefix[a] && -1 !== t.inArray(r.length, l[s].length))
                          return {
                              valid: !0,
                              type: s
                          };
              return !1
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              cusip: {
                  default: "Please enter a valid CUSIP number"
              }
          }
      }),
      FormValidation.Validator.cusip = {
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o);
              if ("" === r)
                  return !0;
              if (r = r.toUpperCase(),
              !/^[0-9A-Z]{9}$/.test(r))
                  return !1;
              for (var s = t.map(r.split(""), function(t) {
                  var e = t.charCodeAt(0);
                  return e >= "A".charCodeAt(0) && e <= "Z".charCodeAt(0) ? e - "A".charCodeAt(0) + 10 : t
              }), a = s.length, l = 0, c = 0; c < a - 1; c++) {
                  var d = parseInt(s[c], 10);
                  c % 2 != 0 && (d *= 2),
                  d > 9 && (d -= 9),
                  l += d
              }
              return (l = (10 - l % 10) % 10) === parseInt(s[a - 1], 10)
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              cvv: {
                  default: "Please enter a valid CVV number"
              }
          }
      }),
      FormValidation.Validator.cvv = {
          html5Attributes: {
              message: "message",
              ccfield: "creditCardField"
          },
          init: function(t, e, i, n) {
              if (i.creditCardField) {
                  var o = t.getFieldElements(i.creditCardField);
                  t.onLiveChange(o, "live_" + n, function() {
                      t.getStatus(e, n) !== t.STATUS_NOT_VALIDATED && t.revalidateField(e)
                  })
              }
          },
          destroy: function(t, e, i, n) {
              if (i.creditCardField) {
                  var o = t.getFieldElements(i.creditCardField);
                  t.offLiveChange(o, "live_" + n)
              }
          },
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o);
              if ("" === r)
                  return !0;
              if (!/^[0-9]{3,4}$/.test(r))
                  return !1;
              if (!n.creditCardField)
                  return !0;
              var s = e.getFieldValue(n.creditCardField, "creditCard");
              if (null === s || "" === s)
                  return !0;
              s = s.replace(/\D/g, "");
              var a, l, c = {
                  AMERICAN_EXPRESS: {
                      length: [15],
                      prefix: ["34", "37"]
                  },
                  DANKORT: {
                      length: [16],
                      prefix: ["5019"]
                  },
                  DINERS_CLUB: {
                      length: [14],
                      prefix: ["300", "301", "302", "303", "304", "305", "36"]
                  },
                  DINERS_CLUB_US: {
                      length: [16],
                      prefix: ["54", "55"]
                  },
                  DISCOVER: {
                      length: [16],
                      prefix: ["6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65"]
                  },
                  ELO: {
                      length: [16],
                      prefix: ["4011", "4312", "4389", "4514", "4573", "4576", "5041", "5066", "5067", "509", "6277", "6362", "6363", "650", "6516", "6550"]
                  },
                  FORBRUGSFORENINGEN: {
                      length: [16],
                      prefix: ["600722"]
                  },
                  JCB: {
                      length: [16],
                      prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"]
                  },
                  LASER: {
                      length: [16, 17, 18, 19],
                      prefix: ["6304", "6706", "6771", "6709"]
                  },
                  MAESTRO: {
                      length: [12, 13, 14, 15, 16, 17, 18, 19],
                      prefix: ["5018", "5020", "5038", "5868", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766"]
                  },
                  MASTERCARD: {
                      length: [16],
                      prefix: ["51", "52", "53", "54", "55"]
                  },
                  SOLO: {
                      length: [16, 18, 19],
                      prefix: ["6334", "6767"]
                  },
                  UNIONPAY: {
                      length: [16, 17, 18, 19],
                      prefix: ["622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925"]
                  },
                  VISA_ELECTRON: {
                      length: [16],
                      prefix: ["4026", "417500", "4405", "4508", "4844", "4913", "4917"]
                  },
                  VISA: {
                      length: [16],
                      prefix: ["4"]
                  }
              }, d = null;
              for (a in c)
                  for (l in c[a].prefix)
                      if (s.substr(0, c[a].prefix[l].length) === c[a].prefix[l] && -1 !== t.inArray(s.length, c[a].length)) {
                          d = a;
                          break
                      }
              return null !== d && ("AMERICAN_EXPRESS" === d ? 4 === r.length : 3 === r.length)
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              date: {
                  default: "Please enter a valid date",
                  min: "Please enter a date after %s",
                  max: "Please enter a date before %s",
                  range: "Please enter a date in the range %s - %s"
              }
          }
      }),
      FormValidation.Validator.date = {
          html5Attributes: {
              message: "message",
              format: "format",
              min: "min",
              max: "max",
              separator: "separator"
          },
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o);
              if ("" === r)
                  return !0;
              n.format = n.format || "MM/DD/YYYY",
              "date" === i.attr("type") && (n.format = "YYYY-MM-DD");
              var s = e.getLocale()
                , a = n.message || FormValidation.I18n[s].date.default
                , l = n.format.split(" ")
                , c = l[0]
                , d = l.length > 1 ? l[1] : null
                , u = l.length > 2 ? l[2] : null
                , h = r.split(" ")
                , f = h[0]
                , p = h.length > 1 ? h[1] : null;
              if (l.length !== h.length)
                  return {
                      valid: !1,
                      message: a
                  };
              var g = n.separator;
              if (g || (g = -1 !== f.indexOf("/") ? "/" : -1 !== f.indexOf("-") ? "-" : -1 !== f.indexOf(".") ? "." : null),
              null === g || -1 === f.indexOf(g))
                  return {
                      valid: !1,
                      message: a
                  };
              if (f = f.split(g),
              c = c.split(g),
              f.length !== c.length)
                  return {
                      valid: !1,
                      message: a
                  };
              var m = f[t.inArray("YYYY", c)]
                , v = f[t.inArray("MM", c)]
                , y = f[t.inArray("DD", c)];
              if (!m || !v || !y || 4 !== m.length)
                  return {
                      valid: !1,
                      message: a
                  };
              var b = null
                , w = null
                , x = null;
              if (d) {
                  if (d = d.split(":"),
                  p = p.split(":"),
                  d.length !== p.length)
                      return {
                          valid: !1,
                          message: a
                      };
                  if (w = p.length > 0 ? p[0] : null,
                  b = p.length > 1 ? p[1] : null,
                  x = p.length > 2 ? p[2] : null,
                  "" === w || "" === b || "" === x)
                      return {
                          valid: !1,
                          message: a
                      };
                  if (x) {
                      if (isNaN(x) || x.length > 2)
                          return {
                              valid: !1,
                              message: a
                          };
                      if ((x = parseInt(x, 10)) < 0 || x > 60)
                          return {
                              valid: !1,
                              message: a
                          }
                  }
                  if (w) {
                      if (isNaN(w) || w.length > 2)
                          return {
                              valid: !1,
                              message: a
                          };
                      if ((w = parseInt(w, 10)) < 0 || w >= 24 || u && w > 12)
                          return {
                              valid: !1,
                              message: a
                          }
                  }
                  if (b) {
                      if (isNaN(b) || b.length > 2)
                          return {
                              valid: !1,
                              message: a
                          };
                      if ((b = parseInt(b, 10)) < 0 || b > 59)
                          return {
                              valid: !1,
                              message: a
                          }
                  }
              }
              var A = FormValidation.Helper.date(m, v, y)
                , C = null
                , S = null
                , T = n.min
                , _ = n.max;
              switch (T && (C = T instanceof Date ? T : this._parseDate(T, c, g) || this._parseDate(e.getDynamicOption(i, T), c, g),
              T = this._formatDate(C, n.format)),
              _ && (S = _ instanceof Date ? _ : this._parseDate(_, c, g) || this._parseDate(e.getDynamicOption(i, _), c, g),
              _ = this._formatDate(S, n.format)),
              f = new Date(m,v - 1,y,w,b,x),
              !0) {
              case T && !_ && A:
                  A = f.getTime() >= C.getTime(),
                  a = n.message || FormValidation.Helper.format(FormValidation.I18n[s].date.min, T);
                  break;
              case _ && !T && A:
                  A = f.getTime() <= S.getTime(),
                  a = n.message || FormValidation.Helper.format(FormValidation.I18n[s].date.max, _);
                  break;
              case _ && T && A:
                  A = f.getTime() <= S.getTime() && f.getTime() >= C.getTime(),
                  a = n.message || FormValidation.Helper.format(FormValidation.I18n[s].date.range, [T, _])
              }
              return {
                  valid: A,
                  date: f,
                  message: a
              }
          },
          _parseDate: function(e, i, n) {
              if (e instanceof Date)
                  return e;
              if ("string" != typeof e)
                  return null;
              var o = t.inArray("YYYY", i)
                , r = t.inArray("MM", i)
                , s = t.inArray("DD", i);
              if (-1 === o || -1 === r || -1 === s)
                  return null;
              var a = 0
                , l = 0
                , c = 0
                , d = e.split(" ")
                , u = d[0].split(n);
              if (u.length < 3)
                  return null;
              if (d.length > 1) {
                  var h = d[1].split(":");
                  l = h.length > 0 ? h[0] : null,
                  a = h.length > 1 ? h[1] : null,
                  c = h.length > 2 ? h[2] : null
              }
              return new Date(u[o],u[r] - 1,u[s],l,a,c)
          },
          _formatDate: function(t, e) {
              e = e.replace(/Y/g, "y").replace(/M/g, "m").replace(/D/g, "d").replace(/:m/g, ":M").replace(/:mm/g, ":MM").replace(/:S/, ":s").replace(/:SS/, ":ss");
              var i = {
                  d: function(t) {
                      return t.getDate()
                  },
                  dd: function(t) {
                      var e = t.getDate();
                      return e < 10 ? "0" + e : e
                  },
                  m: function(t) {
                      return t.getMonth() + 1
                  },
                  mm: function(t) {
                      var e = t.getMonth() + 1;
                      return e < 10 ? "0" + e : e
                  },
                  yy: function(t) {
                      return ("" + t.getFullYear()).substr(2)
                  },
                  yyyy: function(t) {
                      return t.getFullYear()
                  },
                  h: function(t) {
                      return t.getHours() % 12 || 12
                  },
                  hh: function(t) {
                      var e = t.getHours() % 12 || 12;
                      return e < 10 ? "0" + e : e
                  },
                  H: function(t) {
                      return t.getHours()
                  },
                  HH: function(t) {
                      var e = t.getHours();
                      return e < 10 ? "0" + e : e
                  },
                  M: function(t) {
                      return t.getMinutes()
                  },
                  MM: function(t) {
                      var e = t.getMinutes();
                      return e < 10 ? "0" + e : e
                  },
                  s: function(t) {
                      return t.getSeconds()
                  },
                  ss: function(t) {
                      var e = t.getSeconds();
                      return e < 10 ? "0" + e : e
                  }
              };
              return e.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g, function(e) {
                  return i[e] ? i[e](t) : e.slice(1, e.length - 1)
              })
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              different: {
                  default: "Please enter a different value"
              }
          }
      }),
      FormValidation.Validator.different = {
          html5Attributes: {
              message: "message",
              field: "field"
          },
          init: function(e, i, n, o) {
              for (var r = n.field.split(","), s = 0; s < r.length; s++) {
                  var a = e.getFieldElements(t.trim(r[s]));
                  e.onLiveChange(a, "live_" + o, function() {
                      e.getStatus(i, o) !== e.STATUS_NOT_VALIDATED && e.revalidateField(i)
                  })
              }
          },
          destroy: function(e, i, n, o) {
              for (var r = n.field.split(","), s = 0; s < r.length; s++) {
                  var a = e.getFieldElements(t.trim(r[s]));
                  e.offLiveChange(a, "live_" + o)
              }
          },
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o);
              if ("" === r)
                  return !0;
              for (var s = n.field.split(","), a = !0, l = 0; l < s.length; l++) {
                  var c = e.getFieldElements(t.trim(s[l]));
                  if (null != c && 0 !== c.length) {
                      var d = e.getFieldValue(c, o);
                      r === d ? a = !1 : "" !== d && e.updateStatus(c, e.STATUS_VALID, o)
                  }
              }
              return a
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              digits: {
                  default: "Please enter only digits"
              }
          }
      }),
      FormValidation.Validator.digits = {
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              return "" === o || /^\d+$/.test(o)
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              ean: {
                  default: "Please enter a valid EAN number"
              }
          }
      }),
      FormValidation.Validator.ean = {
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              if ("" === o)
                  return !0;
              if (!/^(\d{8}|\d{12}|\d{13})$/.test(o))
                  return !1;
              for (var r = o.length, s = 0, a = 8 === r ? [3, 1] : [1, 3], l = 0; l < r - 1; l++)
                  s += parseInt(o.charAt(l), 10) * a[l % 2];
              return (s = (10 - s % 10) % 10) + "" === o.charAt(r - 1)
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              ein: {
                  default: "Please enter a valid EIN number"
              }
          }
      }),
      FormValidation.Validator.ein = {
          CAMPUS: {
              ANDOVER: ["10", "12"],
              ATLANTA: ["60", "67"],
              AUSTIN: ["50", "53"],
              BROOKHAVEN: ["01", "02", "03", "04", "05", "06", "11", "13", "14", "16", "21", "22", "23", "25", "34", "51", "52", "54", "55", "56", "57", "58", "59", "65"],
              CINCINNATI: ["30", "32", "35", "36", "37", "38", "61"],
              FRESNO: ["15", "24"],
              KANSAS_CITY: ["40", "44"],
              MEMPHIS: ["94", "95"],
              OGDEN: ["80", "90"],
              PHILADELPHIA: ["33", "39", "41", "42", "43", "48", "62", "63", "64", "66", "68", "71", "72", "73", "74", "75", "76", "77", "81", "82", "83", "84", "85", "86", "87", "88", "91", "92", "93", "98", "99"],
              INTERNET: ["20", "26", "27", "45", "46", "47"],
              SMALL_BUSINESS_ADMINISTRATION: ["31"]
          },
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o);
              if ("" === r)
                  return !0;
              if (!/^[0-9]{2}-?[0-9]{7}$/.test(r))
                  return !1;
              var s = r.substr(0, 2) + "";
              for (var a in this.CAMPUS)
                  if (-1 !== t.inArray(s, this.CAMPUS[a]))
                      return {
                          valid: !0,
                          campus: a
                      };
              return !1
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              emailAddress: {
                  default: "Please enter a valid email address"
              }
          }
      }),
      FormValidation.Validator.emailAddress = {
          html5Attributes: {
              message: "message",
              multiple: "multiple",
              separator: "separator"
          },
          enableByHtml5: function(t) {
              return "email" === t.attr("type")
          },
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              if ("" === o)
                  return !0;
              var r = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
              if (!0 === i.multiple || "true" === i.multiple) {
                  for (var s = i.separator || /[,;]/, a = this._splitEmailAddresses(o, s), l = 0; l < a.length; l++)
                      if (!r.test(a[l]))
                          return !1;
                  return !0
              }
              return r.test(o)
          },
          _splitEmailAddresses: function(t, e) {
              for (var i = t.split(/"/), n = i.length, o = [], r = "", s = 0; s < n; s++)
                  if (s % 2 == 0) {
                      var a = i[s].split(e)
                        , l = a.length;
                      if (1 === l)
                          r += a[0];
                      else {
                          o.push(r + a[0]);
                          for (var c = 1; c < l - 1; c++)
                              o.push(a[c]);
                          r = a[l - 1]
                      }
                  } else
                      r += '"' + i[s],
                      s < n - 1 && (r += '"');
              return o.push(r),
              o
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              file: {
                  default: "Please choose a valid file"
              }
          }
      }),
      FormValidation.Validator.file = {
          Error: {
              EXTENSION: "EXTENSION",
              MAX_FILES: "MAX_FILES",
              MAX_SIZE: "MAX_SIZE",
              MAX_TOTAL_SIZE: "MAX_TOTAL_SIZE",
              MIN_FILES: "MIN_FILES",
              MIN_SIZE: "MIN_SIZE",
              MIN_TOTAL_SIZE: "MIN_TOTAL_SIZE",
              TYPE: "TYPE"
          },
          html5Attributes: {
              extension: "extension",
              maxfiles: "maxFiles",
              minfiles: "minFiles",
              maxsize: "maxSize",
              minsize: "minSize",
              maxtotalsize: "maxTotalSize",
              mintotalsize: "minTotalSize",
              message: "message",
              type: "type"
          },
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o);
              if ("" === r)
                  return !0;
              var s, a = n.extension ? n.extension.toLowerCase().split(",") : null, l = n.type ? n.type.toLowerCase().split(",") : null;
              if (window.File && window.FileList && window.FileReader) {
                  var c = i.get(0).files
                    , d = c.length
                    , u = 0;
                  if (n.maxFiles && d > parseInt(n.maxFiles, 10))
                      return {
                          valid: !1,
                          error: this.Error.MAX_FILES
                      };
                  if (n.minFiles && d < parseInt(n.minFiles, 10))
                      return {
                          valid: !1,
                          error: this.Error.MIN_FILES
                      };
                  for (var h = {}, f = 0; f < d; f++) {
                      if (u += c[f].size,
                      s = c[f].name.substr(c[f].name.lastIndexOf(".") + 1),
                      h = {
                          file: c[f],
                          size: c[f].size,
                          ext: s,
                          type: c[f].type
                      },
                      n.minSize && c[f].size < parseInt(n.minSize, 10))
                          return {
                              valid: !1,
                              error: this.Error.MIN_SIZE,
                              metaData: h
                          };
                      if (n.maxSize && c[f].size > parseInt(n.maxSize, 10))
                          return {
                              valid: !1,
                              error: this.Error.MAX_SIZE,
                              metaData: h
                          };
                      if (a && -1 === t.inArray(s.toLowerCase(), a))
                          return {
                              valid: !1,
                              error: this.Error.EXTENSION,
                              metaData: h
                          };
                      if (c[f].type && l && -1 === t.inArray(c[f].type.toLowerCase(), l))
                          return {
                              valid: !1,
                              error: this.Error.TYPE,
                              metaData: h
                          }
                  }
                  if (n.maxTotalSize && u > parseInt(n.maxTotalSize, 10))
                      return {
                          valid: !1,
                          error: this.Error.MAX_TOTAL_SIZE,
                          metaData: {
                              totalSize: u
                          }
                      };
                  if (n.minTotalSize && u < parseInt(n.minTotalSize, 10))
                      return {
                          valid: !1,
                          error: this.Error.MIN_TOTAL_SIZE,
                          metaData: {
                              totalSize: u
                          }
                      }
              } else if (s = r.substr(r.lastIndexOf(".") + 1),
              a && -1 === t.inArray(s.toLowerCase(), a))
                  return {
                      valid: !1,
                      error: this.Error.EXTENSION,
                      metaData: {
                          ext: s
                      }
                  };
              return !0
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              greaterThan: {
                  default: "Please enter a value greater than or equal to %s",
                  notInclusive: "Please enter a value greater than %s"
              }
          }
      }),
      FormValidation.Validator.greaterThan = {
          html5Attributes: {
              message: "message",
              value: "value",
              inclusive: "inclusive"
          },
          enableByHtml5: function(t) {
              var e = t.attr("type")
                , i = t.attr("min");
              return !(!i || "date" === e) && {
                  value: i
              }
          },
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o);
              if ("" === r)
                  return !0;
              r = this._format(r);
              var s = e.getLocale()
                , a = t.isNumeric(n.value) ? n.value : e.getDynamicOption(i, n.value)
                , l = this._format(a);
              return !0 === n.inclusive || void 0 === n.inclusive ? {
                  valid: t.isNumeric(r) && parseFloat(r) >= l,
                  message: FormValidation.Helper.format(n.message || FormValidation.I18n[s].greaterThan.default, a)
              } : {
                  valid: t.isNumeric(r) && parseFloat(r) > l,
                  message: FormValidation.Helper.format(n.message || FormValidation.I18n[s].greaterThan.notInclusive, a)
              }
          },
          _format: function(t) {
              return (t + "").replace(",", ".")
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              grid: {
                  default: "Please enter a valid GRId number"
              }
          }
      }),
      FormValidation.Validator.grid = {
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              return "" === o || (o = o.toUpperCase(),
              !!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(o) && ("GRID:" === (o = o.replace(/\s/g, "").replace(/-/g, "")).substr(0, 5) && (o = o.substr(5)),
              FormValidation.Helper.mod37And36(o)))
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              hex: {
                  default: "Please enter a valid hexadecimal number"
              }
          }
      }),
      FormValidation.Validator.hex = {
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              return "" === o || /^[0-9a-fA-F]+$/.test(o)
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              iban: {
                  default: "Please enter a valid IBAN number",
                  country: "Please enter a valid IBAN number in %s",
                  countries: {
                      AD: "Andorra",
                      AE: "United Arab Emirates",
                      AL: "Albania",
                      AO: "Angola",
                      AT: "Austria",
                      AZ: "Azerbaijan",
                      BA: "Bosnia and Herzegovina",
                      BE: "Belgium",
                      BF: "Burkina Faso",
                      BG: "Bulgaria",
                      BH: "Bahrain",
                      BI: "Burundi",
                      BJ: "Benin",
                      BR: "Brazil",
                      CH: "Switzerland",
                      CI: "Ivory Coast",
                      CM: "Cameroon",
                      CR: "Costa Rica",
                      CV: "Cape Verde",
                      CY: "Cyprus",
                      CZ: "Czech Republic",
                      DE: "Germany",
                      DK: "Denmark",
                      DO: "Dominican Republic",
                      DZ: "Algeria",
                      EE: "Estonia",
                      ES: "Spain",
                      FI: "Finland",
                      FO: "Faroe Islands",
                      FR: "France",
                      GB: "United Kingdom",
                      GE: "Georgia",
                      GI: "Gibraltar",
                      GL: "Greenland",
                      GR: "Greece",
                      GT: "Guatemala",
                      HR: "Croatia",
                      HU: "Hungary",
                      IE: "Ireland",
                      IL: "Israel",
                      IR: "Iran",
                      IS: "Iceland",
                      IT: "Italy",
                      JO: "Jordan",
                      KW: "Kuwait",
                      KZ: "Kazakhstan",
                      LB: "Lebanon",
                      LI: "Liechtenstein",
                      LT: "Lithuania",
                      LU: "Luxembourg",
                      LV: "Latvia",
                      MC: "Monaco",
                      MD: "Moldova",
                      ME: "Montenegro",
                      MG: "Madagascar",
                      MK: "Macedonia",
                      ML: "Mali",
                      MR: "Mauritania",
                      MT: "Malta",
                      MU: "Mauritius",
                      MZ: "Mozambique",
                      NL: "Netherlands",
                      NO: "Norway",
                      PK: "Pakistan",
                      PL: "Poland",
                      PS: "Palestine",
                      PT: "Portugal",
                      QA: "Qatar",
                      RO: "Romania",
                      RS: "Serbia",
                      SA: "Saudi Arabia",
                      SE: "Sweden",
                      SI: "Slovenia",
                      SK: "Slovakia",
                      SM: "San Marino",
                      SN: "Senegal",
                      TL: "East Timor",
                      TN: "Tunisia",
                      TR: "Turkey",
                      VG: "Virgin Islands, British",
                      XK: "Republic of Kosovo"
                  }
              }
          }
      }),
      FormValidation.Validator.iban = {
          html5Attributes: {
              message: "message",
              country: "country",
              sepa: "sepa"
          },
          REGEX: {
              AD: "AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}",
              AE: "AE[0-9]{2}[0-9]{3}[0-9]{16}",
              AL: "AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}",
              AO: "AO[0-9]{2}[0-9]{21}",
              AT: "AT[0-9]{2}[0-9]{5}[0-9]{11}",
              AZ: "AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}",
              BA: "BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}",
              BE: "BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}",
              BF: "BF[0-9]{2}[0-9]{23}",
              BG: "BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}",
              BH: "BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}",
              BI: "BI[0-9]{2}[0-9]{12}",
              BJ: "BJ[0-9]{2}[A-Z]{1}[0-9]{23}",
              BR: "BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]",
              CH: "CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
              CI: "CI[0-9]{2}[A-Z]{1}[0-9]{23}",
              CM: "CM[0-9]{2}[0-9]{23}",
              CR: "CR[0-9]{2}[0-9]{3}[0-9]{14}",
              CV: "CV[0-9]{2}[0-9]{21}",
              CY: "CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}",
              CZ: "CZ[0-9]{2}[0-9]{20}",
              DE: "DE[0-9]{2}[0-9]{8}[0-9]{10}",
              DK: "DK[0-9]{2}[0-9]{14}",
              DO: "DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}",
              DZ: "DZ[0-9]{2}[0-9]{20}",
              EE: "EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}",
              ES: "ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}",
              FI: "FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}",
              FO: "FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
              FR: "FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
              GB: "GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
              GE: "GE[0-9]{2}[A-Z]{2}[0-9]{16}",
              GI: "GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}",
              GL: "GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
              GR: "GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}",
              GT: "GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}",
              HR: "HR[0-9]{2}[0-9]{7}[0-9]{10}",
              HU: "HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}",
              IE: "IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
              IL: "IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}",
              IR: "IR[0-9]{2}[0-9]{22}",
              IS: "IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}",
              IT: "IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
              JO: "JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}",
              KW: "KW[0-9]{2}[A-Z]{4}[0-9]{22}",
              KZ: "KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
              LB: "LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}",
              LI: "LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
              LT: "LT[0-9]{2}[0-9]{5}[0-9]{11}",
              LU: "LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
              LV: "LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}",
              MC: "MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
              MD: "MD[0-9]{2}[A-Z0-9]{20}",
              ME: "ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
              MG: "MG[0-9]{2}[0-9]{23}",
              MK: "MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}",
              ML: "ML[0-9]{2}[A-Z]{1}[0-9]{23}",
              MR: "MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}",
              MT: "MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}",
              MU: "MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}",
              MZ: "MZ[0-9]{2}[0-9]{21}",
              NL: "NL[0-9]{2}[A-Z]{4}[0-9]{10}",
              NO: "NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}",
              PK: "PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
              PL: "PL[0-9]{2}[0-9]{8}[0-9]{16}",
              PS: "PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
              PT: "PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}",
              QA: "QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
              RO: "RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
              RS: "RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
              SA: "SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}",
              SE: "SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}",
              SI: "SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}",
              SK: "SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}",
              SM: "SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
              SN: "SN[0-9]{2}[A-Z]{1}[0-9]{23}",
              TL: "TL38[0-9]{3}[0-9]{14}[0-9]{2}",
              TN: "TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
              TR: "TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}",
              VG: "VG[0-9]{2}[A-Z]{4}[0-9]{16}",
              XK: "XK[0-9]{2}[0-9]{4}[0-9]{10}[0-9]{2}"
          },
          SEPA_COUNTRIES: ["AT", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GI", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK", "SM"],
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o);
              if ("" === r)
                  return !0;
              r = r.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
              var s = n.country;
              s ? "string" == typeof s && this.REGEX[s] || (s = e.getDynamicOption(i, s)) : s = r.substr(0, 2);
              var a = e.getLocale();
              if (!this.REGEX[s])
                  return !1;
              if (void 0 !== typeof n.sepa) {
                  var l = -1 !== t.inArray(s, this.SEPA_COUNTRIES);
                  if (("true" === n.sepa || !0 === n.sepa) && !l || ("false" === n.sepa || !1 === n.sepa) && l)
                      return !1
              }
              if (!new RegExp("^" + this.REGEX[s] + "$").test(r))
                  return {
                      valid: !1,
                      message: FormValidation.Helper.format(n.message || FormValidation.I18n[a].iban.country, FormValidation.I18n[a].iban.countries[s])
                  };
              r = r.substr(4) + r.substr(0, 4),
              r = (r = t.map(r.split(""), function(t) {
                  var e = t.charCodeAt(0);
                  return e >= "A".charCodeAt(0) && e <= "Z".charCodeAt(0) ? e - "A".charCodeAt(0) + 10 : t
              })).join("");
              for (var c = parseInt(r.substr(0, 1), 10), d = r.length, u = 1; u < d; ++u)
                  c = (10 * c + parseInt(r.substr(u, 1), 10)) % 97;
              return {
                  valid: 1 === c,
                  message: FormValidation.Helper.format(n.message || FormValidation.I18n[a].iban.country, FormValidation.I18n[a].iban.countries[s])
              }
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              id: {
                  default: "Please enter a valid identification number",
                  country: "Please enter a valid identification number in %s",
                  countries: {
                      BA: "Bosnia and Herzegovina",
                      BG: "Bulgaria",
                      BR: "Brazil",
                      CH: "Switzerland",
                      CL: "Chile",
                      CN: "China",
                      CZ: "Czech Republic",
                      DK: "Denmark",
                      EE: "Estonia",
                      ES: "Spain",
                      FI: "Finland",
                      HR: "Croatia",
                      IE: "Ireland",
                      IS: "Iceland",
                      LT: "Lithuania",
                      LV: "Latvia",
                      ME: "Montenegro",
                      MK: "Macedonia",
                      NL: "Netherlands",
                      PL: "Poland",
                      RO: "Romania",
                      RS: "Serbia",
                      SE: "Sweden",
                      SI: "Slovenia",
                      SK: "Slovakia",
                      SM: "San Marino",
                      TH: "Thailand",
                      TR: "Turkey",
                      ZA: "South Africa"
                  }
              }
          }
      }),
      FormValidation.Validator.id = {
          html5Attributes: {
              message: "message",
              country: "country"
          },
          COUNTRY_CODES: ["BA", "BG", "BR", "CH", "CL", "CN", "CZ", "DK", "EE", "ES", "FI", "HR", "IE", "IS", "LT", "LV", "ME", "MK", "NL", "PL", "RO", "RS", "SE", "SI", "SK", "SM", "TH", "TR", "ZA"],
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o);
              if ("" === r)
                  return !0;
              var s = e.getLocale()
                , a = n.country;
              if (a ? "string" == typeof a && -1 !== t.inArray(a.toUpperCase(), this.COUNTRY_CODES) || (a = e.getDynamicOption(i, a)) : a = r.substr(0, 2),
              -1 === t.inArray(a, this.COUNTRY_CODES))
                  return !0;
              var l = this[["_", a.toLowerCase()].join("")](r);
              return (l = !0 === l || !1 === l ? {
                  valid: l
              } : l).message = FormValidation.Helper.format(n.message || FormValidation.I18n[s].id.country, FormValidation.I18n[s].id.countries[a.toUpperCase()]),
              l
          },
          _validateJMBG: function(t, e) {
              if (!/^\d{13}$/.test(t))
                  return !1;
              var i = parseInt(t.substr(0, 2), 10)
                , n = parseInt(t.substr(2, 2), 10)
                , o = (parseInt(t.substr(4, 3), 10),
              parseInt(t.substr(7, 2), 10))
                , r = parseInt(t.substr(12, 1), 10);
              if (i > 31 || n > 12)
                  return !1;
              for (var s = 0, a = 0; a < 6; a++)
                  s += (7 - a) * (parseInt(t.charAt(a), 10) + parseInt(t.charAt(a + 6), 10));
              if (10 !== (s = 11 - s % 11) && 11 !== s || (s = 0),
              s !== r)
                  return !1;
              switch (e.toUpperCase()) {
              case "BA":
                  return 10 <= o && o <= 19;
              case "MK":
                  return 41 <= o && o <= 49;
              case "ME":
                  return 20 <= o && o <= 29;
              case "RS":
                  return 70 <= o && o <= 99;
              case "SI":
                  return 50 <= o && o <= 59;
              default:
                  return !0
              }
          },
          _ba: function(t) {
              return this._validateJMBG(t, "BA")
          },
          _mk: function(t) {
              return this._validateJMBG(t, "MK")
          },
          _me: function(t) {
              return this._validateJMBG(t, "ME")
          },
          _rs: function(t) {
              return this._validateJMBG(t, "RS")
          },
          _si: function(t) {
              return this._validateJMBG(t, "SI")
          },
          _bg: function(t) {
              if (!/^\d{10}$/.test(t) && !/^\d{6}\s\d{3}\s\d{1}$/.test(t))
                  return !1;
              t = t.replace(/\s/g, "");
              var e = parseInt(t.substr(0, 2), 10) + 1900
                , i = parseInt(t.substr(2, 2), 10)
                , n = parseInt(t.substr(4, 2), 10);
              if (i > 40 ? (e += 100,
              i -= 40) : i > 20 && (e -= 100,
              i -= 20),
              !FormValidation.Helper.date(e, i, n))
                  return !1;
              for (var o = 0, r = [2, 4, 8, 5, 10, 9, 7, 3, 6], s = 0; s < 9; s++)
                  o += parseInt(t.charAt(s), 10) * r[s];
              return (o = o % 11 % 10) + "" === t.substr(9, 1)
          },
          _br: function(t) {
              if (t = t.replace(/\D/g, ""),
              !/^\d{11}$/.test(t) || /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(t))
                  return !1;
              for (var e = 0, i = 0; i < 9; i++)
                  e += (10 - i) * parseInt(t.charAt(i), 10);
              if (10 !== (e = 11 - e % 11) && 11 !== e || (e = 0),
              e + "" !== t.charAt(9))
                  return !1;
              var n = 0;
              for (i = 0; i < 10; i++)
                  n += (11 - i) * parseInt(t.charAt(i), 10);
              return 10 !== (n = 11 - n % 11) && 11 !== n || (n = 0),
              n + "" === t.charAt(10)
          },
          _ch: function(t) {
              if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(t))
                  return !1;
              for (var e = (t = t.replace(/\D/g, "").substr(3)).length, i = 0, n = 8 === e ? [3, 1] : [1, 3], o = 0; o < e - 1; o++)
                  i += parseInt(t.charAt(o), 10) * n[o % 2];
              return (i = 10 - i % 10) + "" === t.charAt(e - 1)
          },
          _cl: function(t) {
              if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(t))
                  return !1;
              for (t = t.replace(/\-/g, ""); t.length < 9; )
                  t = "0" + t;
              for (var e = 0, i = [3, 2, 7, 6, 5, 4, 3, 2], n = 0; n < 8; n++)
                  e += parseInt(t.charAt(n), 10) * i[n];
              return 11 === (e = 11 - e % 11) ? e = 0 : 10 === e && (e = "K"),
              e + "" === t.charAt(8).toUpperCase()
          },
          _cn: function(e) {
              if (e = e.trim(),
              !/^\d{15}$/.test(e) && !/^\d{17}[\dXx]{1}$/.test(e))
                  return !1;
              var i = {
                  11: {
                      0: [0],
                      1: [[0, 9], [11, 17]],
                      2: [0, 28, 29]
                  },
                  12: {
                      0: [0],
                      1: [[0, 16]],
                      2: [0, 21, 23, 25]
                  },
                  13: {
                      0: [0],
                      1: [[0, 5], 7, 8, 21, [23, 33], [81, 85]],
                      2: [[0, 5], [7, 9], [23, 25], 27, 29, 30, 81, 83],
                      3: [[0, 4], [21, 24]],
                      4: [[0, 4], 6, 21, [23, 35], 81],
                      5: [[0, 3], [21, 35], 81, 82],
                      6: [[0, 4], [21, 38], [81, 84]],
                      7: [[0, 3], 5, 6, [21, 33]],
                      8: [[0, 4], [21, 28]],
                      9: [[0, 3], [21, 30], [81, 84]],
                      10: [[0, 3], [22, 26], 28, 81, 82],
                      11: [[0, 2], [21, 28], 81, 82]
                  },
                  14: {
                      0: [0],
                      1: [0, 1, [5, 10], [21, 23], 81],
                      2: [[0, 3], 11, 12, [21, 27]],
                      3: [[0, 3], 11, 21, 22],
                      4: [[0, 2], 11, 21, [23, 31], 81],
                      5: [[0, 2], 21, 22, 24, 25, 81],
                      6: [[0, 3], [21, 24]],
                      7: [[0, 2], [21, 29], 81],
                      8: [[0, 2], [21, 30], 81, 82],
                      9: [[0, 2], [21, 32], 81],
                      10: [[0, 2], [21, 34], 81, 82],
                      11: [[0, 2], [21, 30], 81, 82],
                      23: [[0, 3], 22, 23, [25, 30], 32, 33]
                  },
                  15: {
                      0: [0],
                      1: [[0, 5], [21, 25]],
                      2: [[0, 7], [21, 23]],
                      3: [[0, 4]],
                      4: [[0, 4], [21, 26], [28, 30]],
                      5: [[0, 2], [21, 26], 81],
                      6: [[0, 2], [21, 27]],
                      7: [[0, 3], [21, 27], [81, 85]],
                      8: [[0, 2], [21, 26]],
                      9: [[0, 2], [21, 29], 81],
                      22: [[0, 2], [21, 24]],
                      25: [[0, 2], [22, 31]],
                      26: [[0, 2], [24, 27], [29, 32], 34],
                      28: [0, 1, [22, 27]],
                      29: [0, [21, 23]]
                  },
                  21: {
                      0: [0],
                      1: [[0, 6], [11, 14], [22, 24], 81],
                      2: [[0, 4], [11, 13], 24, [81, 83]],
                      3: [[0, 4], 11, 21, 23, 81],
                      4: [[0, 4], 11, [21, 23]],
                      5: [[0, 5], 21, 22],
                      6: [[0, 4], 24, 81, 82],
                      7: [[0, 3], 11, 26, 27, 81, 82],
                      8: [[0, 4], 11, 81, 82],
                      9: [[0, 5], 11, 21, 22],
                      10: [[0, 5], 11, 21, 81],
                      11: [[0, 3], 21, 22],
                      12: [[0, 2], 4, 21, 23, 24, 81, 82],
                      13: [[0, 3], 21, 22, 24, 81, 82],
                      14: [[0, 4], 21, 22, 81]
                  },
                  22: {
                      0: [0],
                      1: [[0, 6], 12, 22, [81, 83]],
                      2: [[0, 4], 11, 21, [81, 84]],
                      3: [[0, 3], 22, 23, 81, 82],
                      4: [[0, 3], 21, 22],
                      5: [[0, 3], 21, 23, 24, 81, 82],
                      6: [[0, 2], 4, 5, [21, 23], 25, 81],
                      7: [[0, 2], [21, 24], 81],
                      8: [[0, 2], 21, 22, 81, 82],
                      24: [[0, 6], 24, 26]
                  },
                  23: {
                      0: [0],
                      1: [[0, 12], 21, [23, 29], [81, 84]],
                      2: [[0, 8], 21, [23, 25], 27, [29, 31], 81],
                      3: [[0, 7], 21, 81, 82],
                      4: [[0, 7], 21, 22],
                      5: [[0, 3], 5, 6, [21, 24]],
                      6: [[0, 6], [21, 24]],
                      7: [[0, 16], 22, 81],
                      8: [[0, 5], 11, 22, 26, 28, 33, 81, 82],
                      9: [[0, 4], 21],
                      10: [[0, 5], 24, 25, 81, [83, 85]],
                      11: [[0, 2], 21, 23, 24, 81, 82],
                      12: [[0, 2], [21, 26], [81, 83]],
                      27: [[0, 4], [21, 23]]
                  },
                  31: {
                      0: [0],
                      1: [0, 1, [3, 10], [12, 20]],
                      2: [0, 30]
                  },
                  32: {
                      0: [0],
                      1: [[0, 7], 11, [13, 18], 24, 25],
                      2: [[0, 6], 11, 81, 82],
                      3: [[0, 5], 11, 12, [21, 24], 81, 82],
                      4: [[0, 2], 4, 5, 11, 12, 81, 82],
                      5: [[0, 9], [81, 85]],
                      6: [[0, 2], 11, 12, 21, 23, [81, 84]],
                      7: [0, 1, 3, 5, 6, [21, 24]],
                      8: [[0, 4], 11, 26, [29, 31]],
                      9: [[0, 3], [21, 25], 28, 81, 82],
                      10: [[0, 3], 11, 12, 23, 81, 84, 88],
                      11: [[0, 2], 11, 12, [81, 83]],
                      12: [[0, 4], [81, 84]],
                      13: [[0, 2], 11, [21, 24]]
                  },
                  33: {
                      0: [0],
                      1: [[0, 6], [8, 10], 22, 27, 82, 83, 85],
                      2: [0, 1, [3, 6], 11, 12, 25, 26, [81, 83]],
                      3: [[0, 4], 22, 24, [26, 29], 81, 82],
                      4: [[0, 2], 11, 21, 24, [81, 83]],
                      5: [[0, 3], [21, 23]],
                      6: [[0, 2], 21, 24, [81, 83]],
                      7: [[0, 3], 23, 26, 27, [81, 84]],
                      8: [[0, 3], 22, 24, 25, 81],
                      9: [[0, 3], 21, 22],
                      10: [[0, 4], [21, 24], 81, 82],
                      11: [[0, 2], [21, 27], 81]
                  },
                  34: {
                      0: [0],
                      1: [[0, 4], 11, [21, 24], 81],
                      2: [[0, 4], 7, 8, [21, 23], 25],
                      3: [[0, 4], 11, [21, 23]],
                      4: [[0, 6], 21],
                      5: [[0, 4], 6, [21, 23]],
                      6: [[0, 4], 21],
                      7: [[0, 3], 11, 21],
                      8: [[0, 3], 11, [22, 28], 81],
                      10: [[0, 4], [21, 24]],
                      11: [[0, 3], 22, [24, 26], 81, 82],
                      12: [[0, 4], 21, 22, 25, 26, 82],
                      13: [[0, 2], [21, 24]],
                      14: [[0, 2], [21, 24]],
                      15: [[0, 3], [21, 25]],
                      16: [[0, 2], [21, 23]],
                      17: [[0, 2], [21, 23]],
                      18: [[0, 2], [21, 25], 81]
                  },
                  35: {
                      0: [0],
                      1: [[0, 5], 11, [21, 25], 28, 81, 82],
                      2: [[0, 6], [11, 13]],
                      3: [[0, 5], 22],
                      4: [[0, 3], 21, [23, 30], 81],
                      5: [[0, 5], 21, [24, 27], [81, 83]],
                      6: [[0, 3], [22, 29], 81],
                      7: [[0, 2], [21, 25], [81, 84]],
                      8: [[0, 2], [21, 25], 81],
                      9: [[0, 2], [21, 26], 81, 82]
                  },
                  36: {
                      0: [0],
                      1: [[0, 5], 11, [21, 24]],
                      2: [[0, 3], 22, 81],
                      3: [[0, 2], 13, [21, 23]],
                      4: [[0, 3], 21, [23, 30], 81, 82],
                      5: [[0, 2], 21],
                      6: [[0, 2], 22, 81],
                      7: [[0, 2], [21, 35], 81, 82],
                      8: [[0, 3], [21, 30], 81],
                      9: [[0, 2], [21, 26], [81, 83]],
                      10: [[0, 2], [21, 30]],
                      11: [[0, 2], [21, 30], 81]
                  },
                  37: {
                      0: [0],
                      1: [[0, 5], 12, 13, [24, 26], 81],
                      2: [[0, 3], 5, [11, 14], [81, 85]],
                      3: [[0, 6], [21, 23]],
                      4: [[0, 6], 81],
                      5: [[0, 3], [21, 23]],
                      6: [[0, 2], [11, 13], 34, [81, 87]],
                      7: [[0, 5], 24, 25, [81, 86]],
                      8: [[0, 2], 11, [26, 32], [81, 83]],
                      9: [[0, 3], 11, 21, 23, 82, 83],
                      10: [[0, 2], [81, 83]],
                      11: [[0, 3], 21, 22],
                      12: [[0, 3]],
                      13: [[0, 2], 11, 12, [21, 29]],
                      14: [[0, 2], [21, 28], 81, 82],
                      15: [[0, 2], [21, 26], 81],
                      16: [[0, 2], [21, 26]],
                      17: [[0, 2], [21, 28]]
                  },
                  41: {
                      0: [0],
                      1: [[0, 6], 8, 22, [81, 85]],
                      2: [[0, 5], 11, [21, 25]],
                      3: [[0, 7], 11, [22, 29], 81],
                      4: [[0, 4], 11, [21, 23], 25, 81, 82],
                      5: [[0, 3], 5, 6, 22, 23, 26, 27, 81],
                      6: [[0, 3], 11, 21, 22],
                      7: [[0, 4], 11, 21, [24, 28], 81, 82],
                      8: [[0, 4], 11, [21, 23], 25, [81, 83]],
                      9: [[0, 2], 22, 23, [26, 28]],
                      10: [[0, 2], [23, 25], 81, 82],
                      11: [[0, 4], [21, 23]],
                      12: [[0, 2], 21, 22, 24, 81, 82],
                      13: [[0, 3], [21, 30], 81],
                      14: [[0, 3], [21, 26], 81],
                      15: [[0, 3], [21, 28]],
                      16: [[0, 2], [21, 28], 81],
                      17: [[0, 2], [21, 29]],
                      90: [0, 1]
                  },
                  42: {
                      0: [0],
                      1: [[0, 7], [11, 17]],
                      2: [[0, 5], 22, 81],
                      3: [[0, 3], [21, 25], 81],
                      5: [[0, 6], [25, 29], [81, 83]],
                      6: [[0, 2], 6, 7, [24, 26], [82, 84]],
                      7: [[0, 4]],
                      8: [[0, 2], 4, 21, 22, 81],
                      9: [[0, 2], [21, 23], 81, 82, 84],
                      10: [[0, 3], [22, 24], 81, 83, 87],
                      11: [[0, 2], [21, 27], 81, 82],
                      12: [[0, 2], [21, 24], 81],
                      13: [[0, 3], 21, 81],
                      28: [[0, 2], 22, 23, [25, 28]],
                      90: [0, [4, 6], 21]
                  },
                  43: {
                      0: [0],
                      1: [[0, 5], 11, 12, 21, 22, 24, 81],
                      2: [[0, 4], 11, 21, [23, 25], 81],
                      3: [[0, 2], 4, 21, 81, 82],
                      4: [0, 1, [5, 8], 12, [21, 24], 26, 81, 82],
                      5: [[0, 3], 11, [21, 25], [27, 29], 81],
                      6: [[0, 3], 11, 21, 23, 24, 26, 81, 82],
                      7: [[0, 3], [21, 26], 81],
                      8: [[0, 2], 11, 21, 22],
                      9: [[0, 3], [21, 23], 81],
                      10: [[0, 3], [21, 28], 81],
                      11: [[0, 3], [21, 29]],
                      12: [[0, 2], [21, 30], 81],
                      13: [[0, 2], 21, 22, 81, 82],
                      31: [0, 1, [22, 27], 30]
                  },
                  44: {
                      0: [0],
                      1: [[0, 7], [11, 16], 83, 84],
                      2: [[0, 5], 21, 22, 24, 29, 32, 33, 81, 82],
                      3: [0, 1, [3, 8]],
                      4: [[0, 4]],
                      5: [0, 1, [6, 15], 23, 82, 83],
                      6: [0, 1, [4, 8]],
                      7: [0, 1, [3, 5], 81, [83, 85]],
                      8: [[0, 4], 11, 23, 25, [81, 83]],
                      9: [[0, 3], 23, [81, 83]],
                      12: [[0, 3], [23, 26], 83, 84],
                      13: [[0, 3], [22, 24], 81],
                      14: [[0, 2], [21, 24], 26, 27, 81],
                      15: [[0, 2], 21, 23, 81],
                      16: [[0, 2], [21, 25]],
                      17: [[0, 2], 21, 23, 81],
                      18: [[0, 3], 21, 23, [25, 27], 81, 82],
                      19: [0],
                      20: [0],
                      51: [[0, 3], 21, 22],
                      52: [[0, 3], 21, 22, 24, 81],
                      53: [[0, 2], [21, 23], 81]
                  },
                  45: {
                      0: [0],
                      1: [[0, 9], [21, 27]],
                      2: [[0, 5], [21, 26]],
                      3: [[0, 5], 11, 12, [21, 32]],
                      4: [0, 1, [3, 6], 11, [21, 23], 81],
                      5: [[0, 3], 12, 21],
                      6: [[0, 3], 21, 81],
                      7: [[0, 3], 21, 22],
                      8: [[0, 4], 21, 81],
                      9: [[0, 3], [21, 24], 81],
                      10: [[0, 2], [21, 31]],
                      11: [[0, 2], [21, 23]],
                      12: [[0, 2], [21, 29], 81],
                      13: [[0, 2], [21, 24], 81],
                      14: [[0, 2], [21, 25], 81]
                  },
                  46: {
                      0: [0],
                      1: [0, 1, [5, 8]],
                      2: [0, 1],
                      3: [0, [21, 23]],
                      90: [[0, 3], [5, 7], [21, 39]]
                  },
                  50: {
                      0: [0],
                      1: [[0, 19]],
                      2: [0, [22, 38], [40, 43]],
                      3: [0, [81, 84]]
                  },
                  51: {
                      0: [0],
                      1: [0, 1, [4, 8], [12, 15], [21, 24], 29, 31, 32, [81, 84]],
                      3: [[0, 4], 11, 21, 22],
                      4: [[0, 3], 11, 21, 22],
                      5: [[0, 4], 21, 22, 24, 25],
                      6: [0, 1, 3, 23, 26, [81, 83]],
                      7: [0, 1, 3, 4, [22, 27], 81],
                      8: [[0, 2], 11, 12, [21, 24]],
                      9: [[0, 4], [21, 23]],
                      10: [[0, 2], 11, 24, 25, 28],
                      11: [[0, 2], [11, 13], 23, 24, 26, 29, 32, 33, 81],
                      13: [[0, 4], [21, 25], 81],
                      14: [[0, 2], [21, 25]],
                      15: [[0, 3], [21, 29]],
                      16: [[0, 3], [21, 23], 81],
                      17: [[0, 3], [21, 25], 81],
                      18: [[0, 3], [21, 27]],
                      19: [[0, 3], [21, 23]],
                      20: [[0, 2], 21, 22, 81],
                      32: [0, [21, 33]],
                      33: [0, [21, 38]],
                      34: [0, 1, [22, 37]]
                  },
                  52: {
                      0: [0],
                      1: [[0, 3], [11, 15], [21, 23], 81],
                      2: [0, 1, 3, 21, 22],
                      3: [[0, 3], [21, 30], 81, 82],
                      4: [[0, 2], [21, 25]],
                      5: [[0, 2], [21, 27]],
                      6: [[0, 3], [21, 28]],
                      22: [0, 1, [22, 30]],
                      23: [0, 1, [22, 28]],
                      24: [0, 1, [22, 28]],
                      26: [0, 1, [22, 36]],
                      27: [[0, 2], 22, 23, [25, 32]]
                  },
                  53: {
                      0: [0],
                      1: [[0, 3], [11, 14], 21, 22, [24, 29], 81],
                      3: [[0, 2], [21, 26], 28, 81],
                      4: [[0, 2], [21, 28]],
                      5: [[0, 2], [21, 24]],
                      6: [[0, 2], [21, 30]],
                      7: [[0, 2], [21, 24]],
                      8: [[0, 2], [21, 29]],
                      9: [[0, 2], [21, 27]],
                      23: [0, 1, [22, 29], 31],
                      25: [[0, 4], [22, 32]],
                      26: [0, 1, [21, 28]],
                      27: [0, 1, [22, 30]],
                      28: [0, 1, 22, 23],
                      29: [0, 1, [22, 32]],
                      31: [0, 2, 3, [22, 24]],
                      34: [0, [21, 23]],
                      33: [0, 21, [23, 25]],
                      35: [0, [21, 28]]
                  },
                  54: {
                      0: [0],
                      1: [[0, 2], [21, 27]],
                      21: [0, [21, 29], 32, 33],
                      22: [0, [21, 29], [31, 33]],
                      23: [0, 1, [22, 38]],
                      24: [0, [21, 31]],
                      25: [0, [21, 27]],
                      26: [0, [21, 27]]
                  },
                  61: {
                      0: [0],
                      1: [[0, 4], [11, 16], 22, [24, 26]],
                      2: [[0, 4], 22],
                      3: [[0, 4], [21, 24], [26, 31]],
                      4: [[0, 4], [22, 31], 81],
                      5: [[0, 2], [21, 28], 81, 82],
                      6: [[0, 2], [21, 32]],
                      7: [[0, 2], [21, 30]],
                      8: [[0, 2], [21, 31]],
                      9: [[0, 2], [21, 29]],
                      10: [[0, 2], [21, 26]]
                  },
                  62: {
                      0: [0],
                      1: [[0, 5], 11, [21, 23]],
                      2: [0, 1],
                      3: [[0, 2], 21],
                      4: [[0, 3], [21, 23]],
                      5: [[0, 3], [21, 25]],
                      6: [[0, 2], [21, 23]],
                      7: [[0, 2], [21, 25]],
                      8: [[0, 2], [21, 26]],
                      9: [[0, 2], [21, 24], 81, 82],
                      10: [[0, 2], [21, 27]],
                      11: [[0, 2], [21, 26]],
                      12: [[0, 2], [21, 28]],
                      24: [0, 21, [24, 29]],
                      26: [0, 21, [23, 30]],
                      29: [0, 1, [21, 27]],
                      30: [0, 1, [21, 27]]
                  },
                  63: {
                      0: [0],
                      1: [[0, 5], [21, 23]],
                      2: [0, 2, [21, 25]],
                      21: [0, [21, 23], [26, 28]],
                      22: [0, [21, 24]],
                      23: [0, [21, 24]],
                      25: [0, [21, 25]],
                      26: [0, [21, 26]],
                      27: [0, 1, [21, 26]],
                      28: [[0, 2], [21, 23]]
                  },
                  64: {
                      0: [0],
                      1: [0, 1, [4, 6], 21, 22, 81],
                      2: [[0, 3], 5, [21, 23]],
                      3: [[0, 3], [21, 24], 81],
                      4: [[0, 2], [21, 25]],
                      5: [[0, 2], 21, 22]
                  },
                  65: {
                      0: [0],
                      1: [[0, 9], 21],
                      2: [[0, 5]],
                      21: [0, 1, 22, 23],
                      22: [0, 1, 22, 23],
                      23: [[0, 3], [23, 25], 27, 28],
                      28: [0, 1, [22, 29]],
                      29: [0, 1, [22, 29]],
                      30: [0, 1, [22, 24]],
                      31: [0, 1, [21, 31]],
                      32: [0, 1, [21, 27]],
                      40: [0, 2, 3, [21, 28]],
                      42: [[0, 2], 21, [23, 26]],
                      43: [0, 1, [21, 26]],
                      90: [[0, 4]],
                      27: [[0, 2], 22, 23]
                  },
                  71: {
                      0: [0]
                  },
                  81: {
                      0: [0]
                  },
                  82: {
                      0: [0]
                  }
              }
                , n = parseInt(e.substr(0, 2), 10)
                , o = parseInt(e.substr(2, 2), 10)
                , r = parseInt(e.substr(4, 2), 10);
              if (!i[n] || !i[n][o])
                  return !1;
              for (var s, a = !1, l = i[n][o], c = 0; c < l.length; c++)
                  if (t.isArray(l[c]) && l[c][0] <= r && r <= l[c][1] || !t.isArray(l[c]) && r === l[c]) {
                      a = !0;
                      break
                  }
              if (!a)
                  return !1;
              s = 18 === e.length ? e.substr(6, 8) : "19" + e.substr(6, 6);
              var d = parseInt(s.substr(0, 4), 10)
                , u = parseInt(s.substr(4, 2), 10)
                , h = parseInt(s.substr(6, 2), 10);
              if (!FormValidation.Helper.date(d, u, h))
                  return !1;
              if (18 === e.length) {
                  var f = 0
                    , p = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                  for (c = 0; c < 17; c++)
                      f += parseInt(e.charAt(c), 10) * p[c];
                  return f = (12 - f % 11) % 11,
                  ("X" !== e.charAt(17).toUpperCase() ? parseInt(e.charAt(17), 10) : 10) === f
              }
              return !0
          },
          _cz: function(t) {
              if (!/^\d{9,10}$/.test(t))
                  return !1;
              var e = 1900 + parseInt(t.substr(0, 2), 10)
                , i = parseInt(t.substr(2, 2), 10) % 50 % 20
                , n = parseInt(t.substr(4, 2), 10);
              if (9 === t.length) {
                  if (e >= 1980 && (e -= 100),
                  e > 1953)
                      return !1
              } else
                  e < 1954 && (e += 100);
              if (!FormValidation.Helper.date(e, i, n))
                  return !1;
              if (10 === t.length) {
                  var o = parseInt(t.substr(0, 9), 10) % 11;
                  return e < 1985 && (o %= 10),
                  o + "" === t.substr(9, 1)
              }
              return !0
          },
          _dk: function(t) {
              if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(t))
                  return !1;
              t = t.replace(/-/g, "");
              var e = parseInt(t.substr(0, 2), 10)
                , i = parseInt(t.substr(2, 2), 10)
                , n = parseInt(t.substr(4, 2), 10);
              switch (!0) {
              case -1 !== "5678".indexOf(t.charAt(6)) && n >= 58:
                  n += 1800;
                  break;
              case -1 !== "0123".indexOf(t.charAt(6)):
              case -1 !== "49".indexOf(t.charAt(6)) && n >= 37:
                  n += 1900;
                  break;
              default:
                  n += 2e3
              }
              return FormValidation.Helper.date(n, i, e)
          },
          _ee: function(t) {
              return this._lt(t)
          },
          _es: function(t) {
              var e = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(t)
                , i = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(t)
                , n = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(t);
              if (!e && !i && !n)
                  return !1;
              t = t.replace(/-/g, "");
              var o, r;
              if (e || i) {
                  r = "DNI";
                  var s = "XYZ".indexOf(t.charAt(0));
                  return -1 !== s && (t = s + t.substr(1) + "",
                  r = "NIE"),
                  {
                      valid: (o = "TRWAGMYFPDXBNJZSQVHLCKE"[(o = parseInt(t.substr(0, 8), 10)) % 23]) === t.substr(8, 1),
                      type: r
                  }
              }
              o = t.substr(1, 7),
              r = "CIF";
              for (var a = t[0], l = t.substr(-1), c = 0, d = 0; d < o.length; d++)
                  if (d % 2 != 0)
                      c += parseInt(o[d], 10);
                  else {
                      var u = "" + 2 * parseInt(o[d], 10);
                      c += parseInt(u[0], 10),
                      2 === u.length && (c += parseInt(u[1], 10))
                  }
              var h = c - 10 * Math.floor(c / 10);
              return 0 !== h && (h = 10 - h),
              {
                  valid: -1 !== "KQS".indexOf(a) ? l === "JABCDEFGHI"[h] : -1 !== "ABEH".indexOf(a) ? l === "" + h : l === "" + h || l === "JABCDEFGHI"[h],
                  type: r
              }
          },
          _fi: function(t) {
              if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(t))
                  return !1;
              var e = parseInt(t.substr(0, 2), 10)
                , i = parseInt(t.substr(2, 2), 10)
                , n = parseInt(t.substr(4, 2), 10);
              if (n = {
                  "+": 1800,
                  "-": 1900,
                  A: 2e3
              }[t.charAt(6)] + n,
              !FormValidation.Helper.date(n, i, e))
                  return !1;
              if (parseInt(t.substr(7, 3), 10) < 2)
                  return !1;
              var o = t.substr(0, 6) + t.substr(7, 3) + "";
              return o = parseInt(o, 10),
              "0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(o % 31) === t.charAt(10)
          },
          _hr: function(t) {
              return !!/^[0-9]{11}$/.test(t) && FormValidation.Helper.mod11And10(t)
          },
          _ie: function(t) {
              if (!/^\d{7}[A-W][AHWTX]?$/.test(t))
                  return !1;
              var e = function(t) {
                  for (; t.length < 7; )
                      t = "0" + t;
                  for (var e = 0, i = 0; i < 7; i++)
                      e += parseInt(t.charAt(i), 10) * (8 - i);
                  return "WABCDEFGHIJKLMNOPQRSTUV"[(e += 9 * "WABCDEFGHIJKLMNOPQRSTUV".indexOf(t.substr(7))) % 23]
              };
              return 9 !== t.length || "A" !== t.charAt(8) && "H" !== t.charAt(8) ? t.charAt(7) === e(t.substr(0, 7)) : t.charAt(7) === e(t.substr(0, 7) + t.substr(8) + "")
          },
          _is: function(t) {
              if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(t))
                  return !1;
              t = t.replace(/-/g, "");
              var e = parseInt(t.substr(0, 2), 10)
                , i = parseInt(t.substr(2, 2), 10)
                , n = parseInt(t.substr(4, 2), 10)
                , o = parseInt(t.charAt(9), 10);
              if (n = 9 === o ? 1900 + n : 100 * (20 + o) + n,
              !FormValidation.Helper.date(n, i, e, !0))
                  return !1;
              for (var r = 0, s = [3, 2, 7, 6, 5, 4, 3, 2], a = 0; a < 8; a++)
                  r += parseInt(t.charAt(a), 10) * s[a];
              return (r = 11 - r % 11) + "" === t.charAt(8)
          },
          _lt: function(t) {
              if (!/^[0-9]{11}$/.test(t))
                  return !1;
              var e = parseInt(t.charAt(0), 10)
                , i = parseInt(t.substr(1, 2), 10)
                , n = parseInt(t.substr(3, 2), 10)
                , o = parseInt(t.substr(5, 2), 10);
              if (i = 100 * (e % 2 == 0 ? 17 + e / 2 : 17 + (e + 1) / 2) + i,
              !FormValidation.Helper.date(i, n, o, !0))
                  return !1;
              for (var r = 0, s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1], a = 0; a < 10; a++)
                  r += parseInt(t.charAt(a), 10) * s[a];
              if (10 !== (r %= 11))
                  return r + "" === t.charAt(10);
              for (r = 0,
              s = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3],
              a = 0; a < 10; a++)
                  r += parseInt(t.charAt(a), 10) * s[a];
              return 10 === (r %= 11) && (r = 0),
              r + "" === t.charAt(10)
          },
          _lv: function(t) {
              if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(t))
                  return !1;
              t = t.replace(/\D/g, "");
              var e = parseInt(t.substr(0, 2), 10)
                , i = parseInt(t.substr(2, 2), 10)
                , n = parseInt(t.substr(4, 2), 10);
              if (n = n + 1800 + 100 * parseInt(t.charAt(6), 10),
              !FormValidation.Helper.date(n, i, e, !0))
                  return !1;
              for (var o = 0, r = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], s = 0; s < 10; s++)
                  o += parseInt(t.charAt(s), 10) * r[s];
              return (o = (o + 1) % 11 % 10) + "" === t.charAt(10)
          },
          _nl: function(t) {
              if (t.length < 8)
                  return !1;
              if (8 === t.length && (t = "0" + t),
              !/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(t))
                  return !1;
              if (t = t.replace(/\./g, ""),
              0 === parseInt(t, 10))
                  return !1;
              for (var e = 0, i = t.length, n = 0; n < i - 1; n++)
                  e += (9 - n) * parseInt(t.charAt(n), 10);
              return 10 === (e %= 11) && (e = 0),
              e + "" === t.charAt(i - 1)
          },
          _pl: function(t) {
              if (!/^[0-9]{11}$/.test(t))
                  return !1;
              for (var e = 0, i = t.length, n = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7], o = 0; o < i - 1; o++)
                  e += n[o] * parseInt(t.charAt(o), 10);
              return 0 === (e %= 10) && (e = 10),
              (e = 10 - e) + "" === t.charAt(i - 1)
          },
          _ro: function(t) {
              if (!/^[0-9]{13}$/.test(t))
                  return !1;
              var e = parseInt(t.charAt(0), 10);
              if (0 === e || 7 === e || 8 === e)
                  return !1;
              var i = parseInt(t.substr(1, 2), 10)
                , n = parseInt(t.substr(3, 2), 10)
                , o = parseInt(t.substr(5, 2), 10);
              if (o > 31 && n > 12)
                  return !1;
              if (9 !== e && (i = {
                  1: 1900,
                  2: 1900,
                  3: 1800,
                  4: 1800,
                  5: 2e3,
                  6: 2e3
              }[e + ""] + i,
              !FormValidation.Helper.date(i, n, o)))
                  return !1;
              for (var r = 0, s = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9], a = t.length, l = 0; l < a - 1; l++)
                  r += parseInt(t.charAt(l), 10) * s[l];
              return 10 === (r %= 11) && (r = 1),
              r + "" === t.charAt(a - 1)
          },
          _se: function(t) {
              if (!/^[0-9]{10}$/.test(t) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(t))
                  return !1;
              t = t.replace(/[^0-9]/g, "");
              var e = parseInt(t.substr(0, 2), 10) + 1900
                , i = parseInt(t.substr(2, 2), 10)
                , n = parseInt(t.substr(4, 2), 10);
              return !!FormValidation.Helper.date(e, i, n) && FormValidation.Helper.luhn(t)
          },
          _sk: function(t) {
              return this._cz(t)
          },
          _sm: function(t) {
              return /^\d{5}$/.test(t)
          },
          _th: function(t) {
              if (13 !== t.length)
                  return !1;
              for (var e = 0, i = 0; i < 12; i++)
                  e += parseInt(t.charAt(i), 10) * (13 - i);
              return (11 - e % 11) % 10 === parseInt(t.charAt(12), 10)
          },
          _tr: function(t) {
              if (11 !== t.length)
                  return !1;
              for (var e = 0, i = 0; i < 10; i++)
                  e += parseInt(t.charAt(i), 10);
              return e % 10 === parseInt(t.charAt(10), 10)
          },
          _za: function(t) {
              if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(t))
                  return !1;
              var e = parseInt(t.substr(0, 2), 10)
                , i = (new Date).getFullYear() % 100
                , n = parseInt(t.substr(2, 2), 10)
                , o = parseInt(t.substr(4, 2), 10);
              return e = e >= i ? e + 1900 : e + 2e3,
              !!FormValidation.Helper.date(e, n, o) && FormValidation.Helper.luhn(t)
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              identical: {
                  default: "Please enter the same value"
              }
          }
      }),
      FormValidation.Validator.identical = {
          html5Attributes: {
              message: "message",
              field: "field"
          },
          init: function(t, e, i, n) {
              var o = t.getFieldElements(i.field);
              t.onLiveChange(o, "live_" + n, function() {
                  t.getStatus(e, n) !== t.STATUS_NOT_VALIDATED && t.revalidateField(e)
              })
          },
          destroy: function(t, e, i, n) {
              var o = t.getFieldElements(i.field);
              t.offLiveChange(o, "live_" + n)
          },
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n)
                , r = t.getFieldElements(i.field);
              return null === r || 0 === r.length || o === t.getFieldValue(r, n) && (t.updateStatus(r, t.STATUS_VALID, n),
              !0)
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              imei: {
                  default: "Please enter a valid IMEI number"
              }
          }
      }),
      FormValidation.Validator.imei = {
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              if ("" === o)
                  return !0;
              switch (!0) {
              case /^\d{15}$/.test(o):
              case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(o):
              case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(o):
                  return o = o.replace(/[^0-9]/g, ""),
                  FormValidation.Helper.luhn(o);
              case /^\d{14}$/.test(o):
              case /^\d{16}$/.test(o):
              case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(o):
              case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(o):
                  return !0;
              default:
                  return !1
              }
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              imo: {
                  default: "Please enter a valid IMO number"
              }
          }
      }),
      FormValidation.Validator.imo = {
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              if ("" === o)
                  return !0;
              if (!/^IMO \d{7}$/i.test(o))
                  return !1;
              for (var r = 0, s = o.replace(/^.*(\d{7})$/, "$1"), a = 6; a >= 1; a--)
                  r += s.slice(6 - a, -a) * (a + 1);
              return r % 10 === parseInt(s.charAt(6), 10)
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              integer: {
                  default: "Please enter a valid number"
              }
          }
      }),
      FormValidation.Validator.integer = {
          html5Attributes: {
              message: "message",
              thousandsseparator: "thousandsSeparator",
              decimalseparator: "decimalSeparator"
          },
          enableByHtml5: function(t) {
              return "number" === t.attr("type") && (void 0 === t.attr("step") || t.attr("step") % 1 == 0)
          },
          validate: function(t, e, i, n) {
              if (this.enableByHtml5(e) && e.get(0).validity && !0 === e.get(0).validity.badInput)
                  return !1;
              var o = t.getFieldValue(e, n);
              if ("" === o)
                  return !0;
              var r = i.decimalSeparator || "."
                , s = i.thousandsSeparator || "";
              r = "." === r ? "\\." : r,
              s = "." === s ? "\\." : s;
              var a = new RegExp("^-?[0-9]{1,3}(" + s + "[0-9]{3})*(" + r + "[0-9]+)?$")
                , l = new RegExp(s,"g");
              return !!a.test(o) && (s && (o = o.replace(l, "")),
              r && (o = o.replace(r, ".")),
              !(isNaN(o) || !isFinite(o)) && (o = parseFloat(o),
              Math.floor(o) === o))
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              ip: {
                  default: "Please enter a valid IP address",
                  ipv4: "Please enter a valid IPv4 address",
                  ipv6: "Please enter a valid IPv6 address"
              }
          }
      }),
      FormValidation.Validator.ip = {
          html5Attributes: {
              message: "message",
              ipv4: "ipv4",
              ipv6: "ipv6"
          },
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o);
              if ("" === r)
                  return !0;
              n = t.extend({}, {
                  ipv4: !0,
                  ipv6: !0
              }, n);
              var s, a = e.getLocale(), l = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/, c = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*(\/(\d|\d\d|1[0-1]\d|12[0-8]))?$/, d = !1;
              switch (!0) {
              case n.ipv4 && !n.ipv6:
                  d = l.test(r),
                  s = n.message || FormValidation.I18n[a].ip.ipv4;
                  break;
              case !n.ipv4 && n.ipv6:
                  d = c.test(r),
                  s = n.message || FormValidation.I18n[a].ip.ipv6;
                  break;
              case n.ipv4 && n.ipv6:
              default:
                  d = l.test(r) || c.test(r),
                  s = n.message || FormValidation.I18n[a].ip.default
              }
              return {
                  valid: d,
                  message: s
              }
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              isbn: {
                  default: "Please enter a valid ISBN number"
              }
          }
      }),
      FormValidation.Validator.isbn = {
          validate: function(t, e, i, n) {
              var o, r = t.getFieldValue(e, n);
              if ("" === r)
                  return !0;
              switch (!0) {
              case /^\d{9}[\dX]$/.test(r):
              case 13 === r.length && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(r):
              case 13 === r.length && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(r):
                  o = "ISBN10";
                  break;
              case /^(978|979)\d{9}[\dX]$/.test(r):
              case 17 === r.length && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(r):
              case 17 === r.length && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(r):
                  o = "ISBN13";
                  break;
              default:
                  return !1
              }
              var s, a, l = (r = r.replace(/[^0-9X]/gi, "")).split(""), c = l.length, d = 0;
              switch (o) {
              case "ISBN10":
                  for (d = 0,
                  s = 0; s < c - 1; s++)
                      d += parseInt(l[s], 10) * (10 - s);
                  return 11 === (a = 11 - d % 11) ? a = 0 : 10 === a && (a = "X"),
                  {
                      type: o,
                      valid: a + "" === l[c - 1]
                  };
              case "ISBN13":
                  for (d = 0,
                  s = 0; s < c - 1; s++)
                      d += s % 2 == 0 ? parseInt(l[s], 10) : 3 * parseInt(l[s], 10);
                  return 10 === (a = 10 - d % 10) && (a = "0"),
                  {
                      type: o,
                      valid: a + "" === l[c - 1]
                  };
              default:
                  return !1
              }
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              isin: {
                  default: "Please enter a valid ISIN number"
              }
          }
      }),
      FormValidation.Validator.isin = {
          COUNTRY_CODES: "AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW",
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              if ("" === o)
                  return !0;
              if (o = o.toUpperCase(),
              !new RegExp("^(" + this.COUNTRY_CODES + ")[0-9A-Z]{10}$").test(o))
                  return !1;
              for (var r = "", s = o.length, a = 0; a < s - 1; a++) {
                  var l = o.charCodeAt(a);
                  r += l > 57 ? (l - 55).toString() : o.charAt(a)
              }
              var c = ""
                , d = r.length
                , u = d % 2 != 0 ? 0 : 1;
              for (a = 0; a < d; a++)
                  c += parseInt(r[a], 10) * (a % 2 === u ? 2 : 1) + "";
              var h = 0;
              for (a = 0; a < c.length; a++)
                  h += parseInt(c.charAt(a), 10);
              return (h = (10 - h % 10) % 10) + "" === o.charAt(s - 1)
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              ismn: {
                  default: "Please enter a valid ISMN number"
              }
          }
      }),
      FormValidation.Validator.ismn = {
          validate: function(t, e, i, n) {
              var o, r = t.getFieldValue(e, n);
              if ("" === r)
                  return !0;
              switch (!0) {
              case /^M\d{9}$/.test(r):
              case /^M-\d{4}-\d{4}-\d{1}$/.test(r):
              case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(r):
                  o = "ISMN10";
                  break;
              case /^9790\d{9}$/.test(r):
              case /^979-0-\d{4}-\d{4}-\d{1}$/.test(r):
              case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(r):
                  o = "ISMN13";
                  break;
              default:
                  return !1
              }
              "ISMN10" === o && (r = "9790" + r.substr(1));
              for (var s = (r = r.replace(/[^0-9]/gi, "")).length, a = 0, l = [1, 3], c = 0; c < s - 1; c++)
                  a += parseInt(r.charAt(c), 10) * l[c % 2];
              return {
                  type: o,
                  valid: (a = 10 - a % 10) + "" === r.charAt(s - 1)
              }
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              issn: {
                  default: "Please enter a valid ISSN number"
              }
          }
      }),
      FormValidation.Validator.issn = {
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              if ("" === o)
                  return !0;
              if (!/^\d{4}\-\d{3}[\dX]$/.test(o))
                  return !1;
              var r = (o = o.replace(/[^0-9X]/gi, "")).split("")
                , s = r.length
                , a = 0;
              "X" === r[7] && (r[7] = 10);
              for (var l = 0; l < s; l++)
                  a += parseInt(r[l], 10) * (8 - l);
              return a % 11 == 0
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              lessThan: {
                  default: "Please enter a value less than or equal to %s",
                  notInclusive: "Please enter a value less than %s"
              }
          }
      }),
      FormValidation.Validator.lessThan = {
          html5Attributes: {
              message: "message",
              value: "value",
              inclusive: "inclusive"
          },
          enableByHtml5: function(t) {
              var e = t.attr("type")
                , i = t.attr("max");
              return !(!i || "date" === e) && {
                  value: i
              }
          },
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o);
              if ("" === r)
                  return !0;
              r = this._format(r);
              var s = e.getLocale()
                , a = t.isNumeric(n.value) ? n.value : e.getDynamicOption(i, n.value)
                , l = this._format(a);
              return !0 === n.inclusive || void 0 === n.inclusive ? {
                  valid: t.isNumeric(r) && parseFloat(r) <= l,
                  message: FormValidation.Helper.format(n.message || FormValidation.I18n[s].lessThan.default, a)
              } : {
                  valid: t.isNumeric(r) && parseFloat(r) < l,
                  message: FormValidation.Helper.format(n.message || FormValidation.I18n[s].lessThan.notInclusive, a)
              }
          },
          _format: function(t) {
              return (t + "").replace(",", ".")
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              mac: {
                  default: "Please enter a valid MAC address"
              }
          }
      }),
      FormValidation.Validator.mac = {
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              return "" === o || (/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(o) || /^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/.test(o))
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              meid: {
                  default: "Please enter a valid MEID number"
              }
          }
      }),
      FormValidation.Validator.meid = {
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              if ("" === o)
                  return !0;
              switch (!0) {
              case /^[0-9A-F]{15}$/i.test(o):
              case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(o):
              case /^\d{19}$/.test(o):
              case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(o):
                  var r = o.charAt(o.length - 1);
                  if ((o = o.replace(/[- ]/g, "")).match(/^\d*$/i))
                      return FormValidation.Helper.luhn(o);
                  o = o.slice(0, -1);
                  for (var s = "", a = 1; a <= 13; a += 2)
                      s += (2 * parseInt(o.charAt(a), 16)).toString(16);
                  var l = 0;
                  for (a = 0; a < s.length; a++)
                      l += parseInt(s.charAt(a), 16);
                  return l % 10 == 0 ? "0" === r : r === (2 * (10 * Math.floor((l + 10) / 10) - l)).toString(16);
              case /^[0-9A-F]{14}$/i.test(o):
              case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(o):
              case /^\d{18}$/.test(o):
              case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(o):
                  return !0;
              default:
                  return !1
              }
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              notEmpty: {
                  default: "Please enter a value"
              }
          }
      }),
      FormValidation.Validator.notEmpty = {
          enableByHtml5: function(t) {
              var e = t.attr("required") + "";
              return "required" === e || "true" === e
          },
          validate: function(e, i, n, o) {
              var r = i.attr("type");
              if ("radio" === r || "checkbox" === r) {
                  var s = e.getNamespace();
                  return e.getFieldElements(i.attr("data-" + s + "-field")).filter(":checked").length > 0
              }
              if ("number" === r && i.get(0).validity && !0 === i.get(0).validity.badInput)
                  return !0;
              var a = e.getFieldValue(i, o);
              return "" !== t.trim(a)
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              numeric: {
                  default: "Please enter a valid float number"
              }
          }
      }),
      FormValidation.Validator.numeric = {
          html5Attributes: {
              message: "message",
              separator: "separator",
              thousandsseparator: "thousandsSeparator",
              decimalseparator: "decimalSeparator"
          },
          enableByHtml5: function(t) {
              return "number" === t.attr("type") && void 0 !== t.attr("step") && t.attr("step") % 1 != 0
          },
          validate: function(t, e, i, n) {
              if (this.enableByHtml5(e) && e.get(0).validity && !0 === e.get(0).validity.badInput)
                  return !1;
              var o = t.getFieldValue(e, n);
              if ("" === o)
                  return !0;
              var r = i.separator || i.decimalSeparator || "."
                , s = i.thousandsSeparator || "";
              o.substr(0, 1) === r ? o = "0" + r + o.substr(1) : o.substr(0, 2) === "-" + r && (o = "-0" + r + o.substr(2)),
              r = "." === r ? "\\." : r,
              s = "." === s ? "\\." : s;
              var a = new RegExp("^-?[0-9]{1,3}(" + s + "[0-9]{3})*(" + r + "[0-9]+)?$")
                , l = new RegExp(s,"g");
              return !!a.test(o) && (s && (o = o.replace(l, "")),
              r && (o = o.replace(r, ".")),
              !isNaN(parseFloat(o)) && isFinite(o))
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              phone: {
                  default: "Please enter a valid phone number",
                  country: "Please enter a valid phone number in %s",
                  countries: {
                      AE: "United Arab Emirates",
                      BG: "Bulgaria",
                      BR: "Brazil",
                      CN: "China",
                      CZ: "Czech Republic",
                      DE: "Germany",
                      DK: "Denmark",
                      ES: "Spain",
                      FR: "France",
                      GB: "United Kingdom",
                      IN: "India",
                      MA: "Morocco",
                      NL: "Netherlands",
                      PK: "Pakistan",
                      RO: "Romania",
                      RU: "Russia",
                      SK: "Slovakia",
                      TH: "Thailand",
                      US: "USA",
                      VE: "Venezuela"
                  }
              }
          }
      }),
      FormValidation.Validator.phone = {
          html5Attributes: {
              message: "message",
              country: "country"
          },
          COUNTRY_CODES: ["AE", "BG", "BR", "CN", "CZ", "DE", "DK", "ES", "FR", "GB", "IN", "MA", "NL", "PK", "RO", "RU", "SK", "TH", "US", "VE"],
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o);
              if ("" === r)
                  return !0;
              var s = e.getLocale()
                , a = n.country;
              if ("string" == typeof a && -1 !== t.inArray(a, this.COUNTRY_CODES) || (a = e.getDynamicOption(i, a)),
              !a || -1 === t.inArray(a.toUpperCase(), this.COUNTRY_CODES))
                  return !0;
              var l = !0;
              switch (a.toUpperCase()) {
              case "AE":
                  r = t.trim(r),
                  l = /^(((\+|00)?971[\s\.-]?(\(0\)[\s\.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s\.-]?[0-9]){7}$/.test(r);
                  break;
              case "BG":
                  r = r.replace(/\+|\s|-|\/|\(|\)/gi, ""),
                  l = /^(0|359|00)(((700|900)[0-9]{5}|((800)[0-9]{5}|(800)[0-9]{4}))|(87|88|89)([0-9]{7})|((2[0-9]{7})|(([3-9][0-9])(([0-9]{6})|([0-9]{5})))))$/.test(r);
                  break;
              case "BR":
                  r = t.trim(r),
                  l = /^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(r);
                  break;
              case "CN":
                  r = t.trim(r),
                  l = /^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/.test(r);
                  break;
              case "CZ":
                  l = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(r);
                  break;
              case "DE":
                  r = t.trim(r),
                  l = /^(((((((00|\+)49[ \-\/]?)|0)[1-9][0-9]{1,4})[ \-\/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-\/]?))[0-9]{1,7}([ \-\/]?[0-9]{1,5})?)$/.test(r);
                  break;
              case "DK":
                  r = t.trim(r),
                  l = /^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/.test(r);
                  break;
              case "ES":
                  r = t.trim(r),
                  l = /^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/.test(r);
                  break;
              case "FR":
                  r = t.trim(r),
                  l = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(r);
                  break;
              case "GB":
                  r = t.trim(r),
                  l = /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(r);
                  break;
              case "IN":
                  r = t.trim(r),
                  l = /((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/.test(r);
                  break;
              case "MA":
                  r = t.trim(r),
                  l = /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(r);
                  break;
              case "NL":
                  r = t.trim(r),
                  l = /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm.test(r);
                  break;
              case "PK":
                  r = t.trim(r),
                  l = /^0?3[0-9]{2}[0-9]{7}$/.test(r);
                  break;
              case "RO":
                  l = /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/g.test(r);
                  break;
              case "RU":
                  l = /^((8|\+7|007)[\-\.\/ ]?)?([\(\/\.]?\d{3}[\)\/\.]?[\-\.\/ ]?)?[\d\-\.\/ ]{7,10}$/g.test(r);
                  break;
              case "SK":
                  l = /^(((00)([- ]?)|\+)(421)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(r);
                  break;
              case "TH":
                  l = /^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/.test(r);
                  break;
              case "VE":
                  r = t.trim(r),
                  l = /^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/.test(r);
                  break;
              case "US":
              default:
                  l = /^(?:(1\-?)|(\+1 ?))?\(?\d{3}\)?[\-\.\s]?\d{3}[\-\.\s]?\d{4}$/.test(r)
              }
              return {
                  valid: l,
                  message: FormValidation.Helper.format(n.message || FormValidation.I18n[s].phone.country, FormValidation.I18n[s].phone.countries[a])
              }
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              promise: {
                  default: "Please enter a valid value"
              }
          }
      }),
      FormValidation.Validator.promise = {
          priority: 999,
          html5Attributes: {
              message: "message",
              promise: "promise"
          },
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o)
                , s = new t.Deferred;
              return FormValidation.Helper.call(n.promise, [r, e, i]).done(function(t) {
                  s.resolve(i, o, t)
              }).fail(function(t) {
                  (t = t || {}).valid = !1,
                  s.resolve(i, o, t)
              }),
              s
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              regexp: {
                  default: "Please enter a value matching the pattern"
              }
          }
      }),
      FormValidation.Validator.regexp = {
          html5Attributes: {
              message: "message",
              flags: "flags",
              regexp: "regexp"
          },
          enableByHtml5: function(t) {
              var e = t.attr("pattern");
              return !!e && {
                  regexp: e
              }
          },
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              return "" === o || ("string" == typeof i.regexp ? i.flags ? new RegExp(i.regexp,i.flags) : new RegExp(i.regexp) : i.regexp).test(o)
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              remote: {
                  default: "Please enter a valid value"
              }
          }
      }),
      FormValidation.Validator.remote = {
          priority: 1e3,
          html5Attributes: {
              async: "async",
              crossdomain: "crossDomain",
              data: "data",
              datatype: "dataType",
              delay: "delay",
              message: "message",
              name: "name",
              type: "type",
              url: "url",
              validkey: "validKey"
          },
          destroy: function(t, e, i, n) {
              var o = t.getNamespace()
                , r = e.data(o + "." + n + ".timer");
              r && (clearTimeout(r),
              e.removeData(o + "." + n + ".timer"))
          },
          validate: function(e, i, n, o) {
              var r = e.getNamespace()
                , s = e.getFieldValue(i, o)
                , a = new t.Deferred;
              if ("" === s)
                  return a.resolve(i, o, {
                      valid: !0
                  }),
                  a;
              var l = i.attr("data-" + r + "-field")
                , c = n.data || {}
                , d = n.url
                , u = n.validKey || "valid";
              "function" == typeof c && (c = c.call(this, e, i, s)),
              "string" == typeof c && (c = JSON.parse(c)),
              "function" == typeof d && (d = d.call(this, e, i, s)),
              c[n.name || l] = s;
              var h = {
                  async: null === n.async || !0 === n.async || "true" === n.async,
                  data: c,
                  dataType: n.dataType || "json",
                  headers: n.headers || {},
                  type: n.type || "GET",
                  url: d
              };
              function f() {
                  var e = t.ajax(h);
                  return e.success(function(t) {
                      t.valid = !0 === t[u] || "true" === t[u] || !1 !== t[u] && "false" !== t[u] && null,
                      a.resolve(i, o, t)
                  }).error(function(t) {
                      a.resolve(i, o, {
                          valid: !1
                      })
                  }),
                  a.fail(function() {
                      e.abort()
                  }),
                  a
              }
              return null !== n.crossDomain && (h.crossDomain = !0 === n.crossDomain || "true" === n.crossDomain),
              n.delay ? (i.data(r + "." + o + ".timer") && clearTimeout(i.data(r + "." + o + ".timer")),
              i.data(r + "." + o + ".timer", setTimeout(f, n.delay)),
              a) : f()
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              rtn: {
                  default: "Please enter a valid RTN number"
              }
          }
      }),
      FormValidation.Validator.rtn = {
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              if ("" === o)
                  return !0;
              if (!/^\d{9}$/.test(o))
                  return !1;
              for (var r = 0, s = 0; s < o.length; s += 3)
                  r += 3 * parseInt(o.charAt(s), 10) + 7 * parseInt(o.charAt(s + 1), 10) + parseInt(o.charAt(s + 2), 10);
              return 0 !== r && r % 10 == 0
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              sedol: {
                  default: "Please enter a valid SEDOL number"
              }
          }
      }),
      FormValidation.Validator.sedol = {
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              if ("" === o)
                  return !0;
              if (o = o.toUpperCase(),
              !/^[0-9A-Z]{7}$/.test(o))
                  return !1;
              for (var r = 0, s = [1, 3, 1, 7, 3, 9, 1], a = o.length, l = 0; l < a - 1; l++)
                  r += s[l] * parseInt(o.charAt(l), 36);
              return (r = (10 - r % 10) % 10) + "" === o.charAt(a - 1)
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              siren: {
                  default: "Please enter a valid SIREN number"
              }
          }
      }),
      FormValidation.Validator.siren = {
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              return "" === o || !!/^\d{9}$/.test(o) && FormValidation.Helper.luhn(o)
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              siret: {
                  default: "Please enter a valid SIRET number"
              }
          }
      }),
      FormValidation.Validator.siret = {
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              if ("" === o)
                  return !0;
              for (var r, s = 0, a = o.length, l = 0; l < a; l++)
                  r = parseInt(o.charAt(l), 10),
                  l % 2 == 0 && (r *= 2) > 9 && (r -= 9),
                  s += r;
              return s % 10 == 0
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              step: {
                  default: "Please enter a valid step of %s"
              }
          }
      }),
      FormValidation.Validator.step = {
          html5Attributes: {
              message: "message",
              base: "baseValue",
              step: "step"
          },
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o);
              if ("" === r)
                  return !0;
              if (n = t.extend({}, {
                  baseValue: 0,
                  step: 1
              }, n),
              r = parseFloat(r),
              !t.isNumeric(r))
                  return !1;
              var s = e.getLocale()
                , a = function(t, e) {
                  if (0 === e)
                      return 1;
                  var i = (t + "").split(".")
                    , n = (e + "").split(".")
                    , o = (1 === i.length ? 0 : i[1].length) + (1 === n.length ? 0 : n[1].length);
                  return function(t, e) {
                      var i = Math.pow(10, e)
                        , n = (t *= i) > 0 | -(t < 0);
                      return t % 1 == .5 * n ? (Math.floor(t) + (n > 0)) / i : Math.round(t) / i
                  }(t - e * Math.floor(t / e), o)
              }(r - n.baseValue, n.step);
              return {
                  valid: 0 === a || a === n.step,
                  message: FormValidation.Helper.format(n.message || FormValidation.I18n[s].step.default, [n.step])
              }
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              stringCase: {
                  default: "Please enter only lowercase characters",
                  upper: "Please enter only uppercase characters"
              }
          }
      }),
      FormValidation.Validator.stringCase = {
          html5Attributes: {
              message: "message",
              case: "case"
          },
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              if ("" === o)
                  return !0;
              var r = t.getLocale()
                , s = (i.case || "lower").toLowerCase();
              return {
                  valid: "upper" === s ? o === o.toUpperCase() : o === o.toLowerCase(),
                  message: i.message || ("upper" === s ? FormValidation.I18n[r].stringCase.upper : FormValidation.I18n[r].stringCase.default)
              }
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              stringLength: {
                  default: "Please enter a value with valid length",
                  less: "Please enter less than %s characters",
                  more: "Please enter more than %s characters",
                  between: "Please enter value between %s and %s characters long"
              }
          }
      }),
      FormValidation.Validator.stringLength = {
          html5Attributes: {
              message: "message",
              min: "min",
              max: "max",
              trim: "trim",
              utf8bytes: "utf8Bytes"
          },
          enableByHtml5: function(e) {
              var i = {}
                , n = e.attr("maxlength")
                , o = e.attr("minlength");
              return n && (i.max = parseInt(n, 10)),
              o && (i.min = parseInt(o, 10)),
              !t.isEmptyObject(i) && i
          },
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o);
              if (!0 !== n.trim && "true" !== n.trim || (r = t.trim(r)),
              "" === r)
                  return !0;
              var s = e.getLocale()
                , a = t.isNumeric(n.min) ? n.min : e.getDynamicOption(i, n.min)
                , l = t.isNumeric(n.max) ? n.max : e.getDynamicOption(i, n.max)
                , c = n.utf8Bytes ? function(t) {
                  for (var e = t.length, i = t.length - 1; i >= 0; i--) {
                      var n = t.charCodeAt(i);
                      n > 127 && n <= 2047 ? e++ : n > 2047 && n <= 65535 && (e += 2),
                      n >= 56320 && n <= 57343 && i--
                  }
                  return e
              }(r) : r.length
                , d = !0
                , u = n.message || FormValidation.I18n[s].stringLength.default;
              switch ((a && c < parseInt(a, 10) || l && c > parseInt(l, 10)) && (d = !1),
              !0) {
              case !!a && !!l:
                  u = FormValidation.Helper.format(n.message || FormValidation.I18n[s].stringLength.between, [parseInt(a, 10), parseInt(l, 10)]);
                  break;
              case !!a:
                  u = FormValidation.Helper.format(n.message || FormValidation.I18n[s].stringLength.more, parseInt(a, 10) - 1);
                  break;
              case !!l:
                  u = FormValidation.Helper.format(n.message || FormValidation.I18n[s].stringLength.less, parseInt(l, 10) + 1)
              }
              return {
                  valid: d,
                  message: u
              }
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              uri: {
                  default: "Please enter a valid URI"
              }
          }
      }),
      FormValidation.Validator.uri = {
          html5Attributes: {
              message: "message",
              allowlocal: "allowLocal",
              allowemptyprotocol: "allowEmptyProtocol",
              protocol: "protocol"
          },
          enableByHtml5: function(t) {
              return "url" === t.attr("type")
          },
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              if ("" === o)
                  return !0;
              var r = !0 === i.allowLocal || "true" === i.allowLocal
                , s = !0 === i.allowEmptyProtocol || "true" === i.allowEmptyProtocol
                , a = (i.protocol || "http, https, ftp").split(",").join("|").replace(/\s/g, "");
              return new RegExp("^(?:(?:" + a + ")://)" + (s ? "?" : "") + "(?:\\S+(?::\\S*)?@)?(?:" + (r ? "" : "(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})") + "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" + (r ? "?" : "") + ")(?::\\d{2,5})?(?:/[^\\s]*)?$","i").test(o)
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              uuid: {
                  default: "Please enter a valid UUID number",
                  version: "Please enter a valid UUID version %s number"
              }
          }
      }),
      FormValidation.Validator.uuid = {
          html5Attributes: {
              message: "message",
              version: "version"
          },
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              if ("" === o)
                  return !0;
              var r = t.getLocale()
                , s = {
                  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
              }
                , a = i.version ? i.version + "" : "all";
              return {
                  valid: null === s[a] || s[a].test(o),
                  message: i.version ? FormValidation.Helper.format(i.message || FormValidation.I18n[r].uuid.version, i.version) : i.message || FormValidation.I18n[r].uuid.default
              }
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              vat: {
                  default: "Please enter a valid VAT number",
                  country: "Please enter a valid VAT number in %s",
                  countries: {
                      AT: "Austria",
                      BE: "Belgium",
                      BG: "Bulgaria",
                      BR: "Brazil",
                      CH: "Switzerland",
                      CY: "Cyprus",
                      CZ: "Czech Republic",
                      DE: "Germany",
                      DK: "Denmark",
                      EE: "Estonia",
                      ES: "Spain",
                      FI: "Finland",
                      FR: "France",
                      GB: "United Kingdom",
                      GR: "Greek",
                      EL: "Greek",
                      HU: "Hungary",
                      HR: "Croatia",
                      IE: "Ireland",
                      IS: "Iceland",
                      IT: "Italy",
                      LT: "Lithuania",
                      LU: "Luxembourg",
                      LV: "Latvia",
                      MT: "Malta",
                      NL: "Netherlands",
                      NO: "Norway",
                      PL: "Poland",
                      PT: "Portugal",
                      RO: "Romania",
                      RU: "Russia",
                      RS: "Serbia",
                      SE: "Sweden",
                      SI: "Slovenia",
                      SK: "Slovakia",
                      VE: "Venezuela",
                      ZA: "South Africa"
                  }
              }
          }
      }),
      FormValidation.Validator.vat = {
          html5Attributes: {
              message: "message",
              country: "country"
          },
          COUNTRY_CODES: ["AT", "BE", "BG", "BR", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IS", "IT", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "RS", "SE", "SK", "SI", "VE", "ZA"],
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o);
              if ("" === r)
                  return !0;
              var s = e.getLocale()
                , a = n.country;
              if (a ? "string" == typeof a && -1 !== t.inArray(a.toUpperCase(), this.COUNTRY_CODES) || (a = e.getDynamicOption(i, a)) : a = r.substr(0, 2),
              -1 === t.inArray(a, this.COUNTRY_CODES))
                  return !0;
              var l = this[["_", a.toLowerCase()].join("")](r);
              return (l = !0 === l || !1 === l ? {
                  valid: l
              } : l).message = FormValidation.Helper.format(n.message || FormValidation.I18n[s].vat.country, FormValidation.I18n[s].vat.countries[a.toUpperCase()]),
              l
          },
          _at: function(t) {
              if (/^ATU[0-9]{8}$/.test(t) && (t = t.substr(2)),
              !/^U[0-9]{8}$/.test(t))
                  return !1;
              t = t.substr(1);
              for (var e = 0, i = [1, 2, 1, 2, 1, 2, 1], n = 0, o = 0; o < 7; o++)
                  (n = parseInt(t.charAt(o), 10) * i[o]) > 9 && (n = Math.floor(n / 10) + n % 10),
                  e += n;
              return 10 === (e = 10 - (e + 4) % 10) && (e = 0),
              e + "" === t.substr(7, 1)
          },
          _be: function(t) {
              return /^BE[0]{0,1}[0-9]{9}$/.test(t) && (t = t.substr(2)),
              !!/^[0]{0,1}[0-9]{9}$/.test(t) && (9 === t.length && (t = "0" + t),
              "0" !== t.substr(1, 1) && (parseInt(t.substr(0, 8), 10) + parseInt(t.substr(8, 2), 10)) % 97 == 0)
          },
          _bg: function(t) {
              if (/^BG[0-9]{9,10}$/.test(t) && (t = t.substr(2)),
              !/^[0-9]{9,10}$/.test(t))
                  return !1;
              var e = 0
                , i = 0;
              if (9 === t.length) {
                  for (i = 0; i < 8; i++)
                      e += parseInt(t.charAt(i), 10) * (i + 1);
                  if (10 === (e %= 11))
                      for (e = 0,
                      i = 0; i < 8; i++)
                          e += parseInt(t.charAt(i), 10) * (i + 3);
                  return (e %= 10) + "" === t.substr(8)
              }
              if (10 === t.length) {
                  return function(t) {
                      var e = parseInt(t.substr(0, 2), 10) + 1900
                        , i = parseInt(t.substr(2, 2), 10)
                        , n = parseInt(t.substr(4, 2), 10);
                      if (i > 40 ? (e += 100,
                      i -= 40) : i > 20 && (e -= 100,
                      i -= 20),
                      !FormValidation.Helper.date(e, i, n))
                          return !1;
                      for (var o = 0, r = [2, 4, 8, 5, 10, 9, 7, 3, 6], s = 0; s < 9; s++)
                          o += parseInt(t.charAt(s), 10) * r[s];
                      return (o = o % 11 % 10) + "" === t.substr(9, 1)
                  }(t) || function(t) {
                      for (var e = 0, i = [21, 19, 17, 13, 11, 9, 7, 3, 1], n = 0; n < 9; n++)
                          e += parseInt(t.charAt(n), 10) * i[n];
                      return (e %= 10) + "" === t.substr(9, 1)
                  }(t) || function(t) {
                      for (var e = 0, i = [4, 3, 2, 7, 6, 5, 4, 3, 2], n = 0; n < 9; n++)
                          e += parseInt(t.charAt(n), 10) * i[n];
                      return 10 != (e = 11 - e % 11) && (11 === e && (e = 0),
                      e + "" === t.substr(9, 1))
                  }(t)
              }
              return !1
          },
          _br: function(t) {
              if ("" === t)
                  return !0;
              var e = t.replace(/[^\d]+/g, "");
              if ("" === e || 14 !== e.length)
                  return !1;
              if ("00000000000000" === e || "11111111111111" === e || "22222222222222" === e || "33333333333333" === e || "44444444444444" === e || "55555555555555" === e || "66666666666666" === e || "77777777777777" === e || "88888888888888" === e || "99999999999999" === e)
                  return !1;
              for (var i = e.length - 2, n = e.substring(0, i), o = e.substring(i), r = 0, s = i - 7, a = i; a >= 1; a--)
                  r += parseInt(n.charAt(i - a), 10) * s--,
                  s < 2 && (s = 9);
              var l = r % 11 < 2 ? 0 : 11 - r % 11;
              if (l !== parseInt(o.charAt(0), 10))
                  return !1;
              for (i += 1,
              n = e.substring(0, i),
              r = 0,
              s = i - 7,
              a = i; a >= 1; a--)
                  r += parseInt(n.charAt(i - a), 10) * s--,
                  s < 2 && (s = 9);
              return (l = r % 11 < 2 ? 0 : 11 - r % 11) === parseInt(o.charAt(1), 10)
          },
          _ch: function(t) {
              if (/^CHE[0-9]{9}(MWST)?$/.test(t) && (t = t.substr(2)),
              !/^E[0-9]{9}(MWST)?$/.test(t))
                  return !1;
              t = t.substr(1);
              for (var e = 0, i = [5, 4, 3, 2, 7, 6, 5, 4], n = 0; n < 8; n++)
                  e += parseInt(t.charAt(n), 10) * i[n];
              return 10 != (e = 11 - e % 11) && (11 === e && (e = 0),
              e + "" === t.substr(8, 1))
          },
          _cy: function(t) {
              if (/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(t) && (t = t.substr(2)),
              !/^[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(t))
                  return !1;
              if ("12" === t.substr(0, 2))
                  return !1;
              for (var e = 0, i = {
                  0: 1,
                  1: 0,
                  2: 5,
                  3: 7,
                  4: 9,
                  5: 13,
                  6: 15,
                  7: 17,
                  8: 19,
                  9: 21
              }, n = 0; n < 8; n++) {
                  var o = parseInt(t.charAt(n), 10);
                  n % 2 == 0 && (o = i[o + ""]),
                  e += o
              }
              return (e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[e % 26]) + "" === t.substr(8, 1)
          },
          _cz: function(t) {
              if (/^CZ[0-9]{8,10}$/.test(t) && (t = t.substr(2)),
              !/^[0-9]{8,10}$/.test(t))
                  return !1;
              var e = 0
                , i = 0;
              if (8 === t.length) {
                  if (t.charAt(0) + "" == "9")
                      return !1;
                  for (e = 0,
                  i = 0; i < 7; i++)
                      e += parseInt(t.charAt(i), 10) * (8 - i);
                  return 10 === (e = 11 - e % 11) && (e = 0),
                  11 === e && (e = 1),
                  e + "" === t.substr(7, 1)
              }
              if (9 === t.length && t.charAt(0) + "" == "6") {
                  for (e = 0,
                  i = 0; i < 7; i++)
                      e += parseInt(t.charAt(i + 1), 10) * (8 - i);
                  return 10 === (e = 11 - e % 11) && (e = 0),
                  11 === e && (e = 1),
                  (e = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][e - 1]) + "" === t.substr(8, 1)
              }
              if (9 === t.length || 10 === t.length) {
                  var n = 1900 + parseInt(t.substr(0, 2), 10)
                    , o = parseInt(t.substr(2, 2), 10) % 50 % 20
                    , r = parseInt(t.substr(4, 2), 10);
                  if (9 === t.length) {
                      if (n >= 1980 && (n -= 100),
                      n > 1953)
                          return !1
                  } else
                      n < 1954 && (n += 100);
                  if (!FormValidation.Helper.date(n, o, r))
                      return !1;
                  if (10 === t.length) {
                      var s = parseInt(t.substr(0, 9), 10) % 11;
                      return n < 1985 && (s %= 10),
                      s + "" === t.substr(9, 1)
                  }
                  return !0
              }
              return !1
          },
          _de: function(t) {
              return /^DE[0-9]{9}$/.test(t) && (t = t.substr(2)),
              !!/^[0-9]{9}$/.test(t) && FormValidation.Helper.mod11And10(t)
          },
          _dk: function(t) {
              if (/^DK[0-9]{8}$/.test(t) && (t = t.substr(2)),
              !/^[0-9]{8}$/.test(t))
                  return !1;
              for (var e = 0, i = [2, 7, 6, 5, 4, 3, 2, 1], n = 0; n < 8; n++)
                  e += parseInt(t.charAt(n), 10) * i[n];
              return e % 11 == 0
          },
          _ee: function(t) {
              if (/^EE[0-9]{9}$/.test(t) && (t = t.substr(2)),
              !/^[0-9]{9}$/.test(t))
                  return !1;
              for (var e = 0, i = [3, 7, 1, 3, 7, 1, 3, 7, 1], n = 0; n < 9; n++)
                  e += parseInt(t.charAt(n), 10) * i[n];
              return e % 10 == 0
          },
          _es: function(t) {
              if (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t) && (t = t.substr(2)),
              !/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t))
                  return !1;
              var e = t.charAt(0);
              return /^[0-9]$/.test(e) ? {
                  valid: function(t) {
                      var e = parseInt(t.substr(0, 8), 10);
                      return (e = "TRWAGMYFPDXBNJZSQVHLCKE"[e % 23]) + "" === t.substr(8, 1)
                  }(t),
                  type: "DNI"
              } : /^[XYZ]$/.test(e) ? {
                  valid: function(t) {
                      var e = ["XYZ".indexOf(t.charAt(0)), t.substr(1)].join("");
                      return (e = "TRWAGMYFPDXBNJZSQVHLCKE"[(e = parseInt(e, 10)) % 23]) + "" === t.substr(8, 1)
                  }(t),
                  type: "NIE"
              } : {
                  valid: function(t) {
                      var e = t.charAt(0);
                      if (-1 !== "KLM".indexOf(e))
                          return "TRWAGMYFPDXBNJZSQVHLCKE"[parseInt(t.substr(1, 8), 10) % 23] + "" === t.substr(8, 1);
                      if (-1 !== "ABCDEFGHJNPQRSUVW".indexOf(e)) {
                          for (var i = 0, n = [2, 1, 2, 1, 2, 1, 2], o = 0, r = 0; r < 7; r++)
                              (o = parseInt(t.charAt(r + 1), 10) * n[r]) > 9 && (o = Math.floor(o / 10) + o % 10),
                              i += o;
                          return 10 == (i = 10 - i % 10) && (i = 0),
                          i + "" === t.substr(8, 1) || "JABCDEFGHI"[i] === t.substr(8, 1)
                      }
                      return !1
                  }(t),
                  type: "CIF"
              }
          },
          _fi: function(t) {
              if (/^FI[0-9]{8}$/.test(t) && (t = t.substr(2)),
              !/^[0-9]{8}$/.test(t))
                  return !1;
              for (var e = 0, i = [7, 9, 10, 5, 8, 4, 2, 1], n = 0; n < 8; n++)
                  e += parseInt(t.charAt(n), 10) * i[n];
              return e % 11 == 0
          },
          _fr: function(t) {
              if (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(t) && (t = t.substr(2)),
              !/^[0-9A-Z]{2}[0-9]{9}$/.test(t))
                  return !1;
              if (!FormValidation.Helper.luhn(t.substr(2)))
                  return !1;
              if (/^[0-9]{2}$/.test(t.substr(0, 2)))
                  return t.substr(0, 2) === parseInt(t.substr(2) + "12", 10) % 97 + "";
              var e, i = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";
              return e = /^[0-9]{1}$/.test(t.charAt(0)) ? 24 * i.indexOf(t.charAt(0)) + i.indexOf(t.charAt(1)) - 10 : 34 * i.indexOf(t.charAt(0)) + i.indexOf(t.charAt(1)) - 100,
              (parseInt(t.substr(2), 10) + 1 + Math.floor(e / 11)) % 11 == e % 11
          },
          _gb: function(t) {
              if ((/^GB[0-9]{9}$/.test(t) || /^GB[0-9]{12}$/.test(t) || /^GBGD[0-9]{3}$/.test(t) || /^GBHA[0-9]{3}$/.test(t) || /^GB(GD|HA)8888[0-9]{5}$/.test(t)) && (t = t.substr(2)),
              !(/^[0-9]{9}$/.test(t) || /^[0-9]{12}$/.test(t) || /^GD[0-9]{3}$/.test(t) || /^HA[0-9]{3}$/.test(t) || /^(GD|HA)8888[0-9]{5}$/.test(t)))
                  return !1;
              var e = t.length;
              if (5 === e) {
                  var i = t.substr(0, 2)
                    , n = parseInt(t.substr(2), 10);
                  return "GD" === i && n < 500 || "HA" === i && n >= 500
              }
              if (11 === e && ("GD8888" === t.substr(0, 6) || "HA8888" === t.substr(0, 6)))
                  return !("GD" === t.substr(0, 2) && parseInt(t.substr(6, 3), 10) >= 500 || "HA" === t.substr(0, 2) && parseInt(t.substr(6, 3), 10) < 500) && parseInt(t.substr(6, 3), 10) % 97 === parseInt(t.substr(9, 2), 10);
              if (9 === e || 12 === e) {
                  for (var o = 0, r = [8, 7, 6, 5, 4, 3, 2, 10, 1], s = 0; s < 9; s++)
                      o += parseInt(t.charAt(s), 10) * r[s];
                  return o %= 97,
                  parseInt(t.substr(0, 3), 10) >= 100 ? 0 === o || 42 === o || 55 === o : 0 === o
              }
              return !0
          },
          _gr: function(t) {
              if (/^(GR|EL)[0-9]{9}$/.test(t) && (t = t.substr(2)),
              !/^[0-9]{9}$/.test(t))
                  return !1;
              8 === t.length && (t = "0" + t);
              for (var e = 0, i = [256, 128, 64, 32, 16, 8, 4, 2], n = 0; n < 8; n++)
                  e += parseInt(t.charAt(n), 10) * i[n];
              return (e = e % 11 % 10) + "" === t.substr(8, 1)
          },
          _el: function(t) {
              return this._gr(t)
          },
          _hu: function(t) {
              if (/^HU[0-9]{8}$/.test(t) && (t = t.substr(2)),
              !/^[0-9]{8}$/.test(t))
                  return !1;
              for (var e = 0, i = [9, 7, 3, 1, 9, 7, 3, 1], n = 0; n < 8; n++)
                  e += parseInt(t.charAt(n), 10) * i[n];
              return e % 10 == 0
          },
          _hr: function(t) {
              return /^HR[0-9]{11}$/.test(t) && (t = t.substr(2)),
              !!/^[0-9]{11}$/.test(t) && FormValidation.Helper.mod11And10(t)
          },
          _ie: function(t) {
              if (/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(t) && (t = t.substr(2)),
              !/^[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(t))
                  return !1;
              var e = function(t) {
                  for (; t.length < 7; )
                      t = "0" + t;
                  for (var e = 0, i = 0; i < 7; i++)
                      e += parseInt(t.charAt(i), 10) * (8 - i);
                  return "WABCDEFGHIJKLMNOPQRSTUV"[(e += 9 * "WABCDEFGHIJKLMNOPQRSTUV".indexOf(t.substr(7))) % 23]
              };
              return /^[0-9]+$/.test(t.substr(0, 7)) ? t.charAt(7) === e(t.substr(0, 7) + t.substr(8) + "") : -1 === "ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(t.charAt(1)) || t.charAt(7) === e(t.substr(2, 5) + t.substr(0, 1) + "")
          },
          _is: function(t) {
              return /^IS[0-9]{5,6}$/.test(t) && (t = t.substr(2)),
              /^[0-9]{5,6}$/.test(t)
          },
          _it: function(t) {
              if (/^IT[0-9]{11}$/.test(t) && (t = t.substr(2)),
              !/^[0-9]{11}$/.test(t))
                  return !1;
              if (0 === parseInt(t.substr(0, 7), 10))
                  return !1;
              var e = parseInt(t.substr(7, 3), 10);
              return !(e < 1 || e > 201 && 999 !== e && 888 !== e) && FormValidation.Helper.luhn(t)
          },
          _lt: function(t) {
              if (/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(t) && (t = t.substr(2)),
              !/^([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(t))
                  return !1;
              var e, i = t.length, n = 0;
              for (e = 0; e < i - 1; e++)
                  n += parseInt(t.charAt(e), 10) * (1 + e % 9);
              var o = n % 11;
              if (10 === o)
                  for (n = 0,
                  e = 0; e < i - 1; e++)
                      n += parseInt(t.charAt(e), 10) * (1 + (e + 2) % 9);
              return (o = o % 11 % 10) + "" === t.charAt(i - 1)
          },
          _lu: function(t) {
              return /^LU[0-9]{8}$/.test(t) && (t = t.substr(2)),
              !!/^[0-9]{8}$/.test(t) && parseInt(t.substr(0, 6), 10) % 89 + "" === t.substr(6, 2)
          },
          _lv: function(t) {
              if (/^LV[0-9]{11}$/.test(t) && (t = t.substr(2)),
              !/^[0-9]{11}$/.test(t))
                  return !1;
              var e, i = parseInt(t.charAt(0), 10), n = 0, o = [], r = t.length;
              if (i > 3) {
                  for (n = 0,
                  o = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1],
                  e = 0; e < r; e++)
                      n += parseInt(t.charAt(e), 10) * o[e];
                  return 3 === (n %= 11)
              }
              var s = parseInt(t.substr(0, 2), 10)
                , a = parseInt(t.substr(2, 2), 10)
                , l = parseInt(t.substr(4, 2), 10);
              if (l = l + 1800 + 100 * parseInt(t.charAt(6), 10),
              !FormValidation.Helper.date(l, a, s))
                  return !1;
              for (n = 0,
              o = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9],
              e = 0; e < r - 1; e++)
                  n += parseInt(t.charAt(e), 10) * o[e];
              return (n = (n + 1) % 11 % 10) + "" === t.charAt(r - 1)
          },
          _mt: function(t) {
              if (/^MT[0-9]{8}$/.test(t) && (t = t.substr(2)),
              !/^[0-9]{8}$/.test(t))
                  return !1;
              for (var e = 0, i = [3, 4, 6, 7, 8, 9, 10, 1], n = 0; n < 8; n++)
                  e += parseInt(t.charAt(n), 10) * i[n];
              return e % 37 == 0
          },
          _nl: function(t) {
              if (/^NL[0-9]{9}B[0-9]{2}$/.test(t) && (t = t.substr(2)),
              !/^[0-9]{9}B[0-9]{2}$/.test(t))
                  return !1;
              for (var e = 0, i = [9, 8, 7, 6, 5, 4, 3, 2], n = 0; n < 8; n++)
                  e += parseInt(t.charAt(n), 10) * i[n];
              return (e %= 11) > 9 && (e = 0),
              e + "" === t.substr(8, 1)
          },
          _no: function(t) {
              if (/^NO[0-9]{9}$/.test(t) && (t = t.substr(2)),
              !/^[0-9]{9}$/.test(t))
                  return !1;
              for (var e = 0, i = [3, 2, 7, 6, 5, 4, 3, 2], n = 0; n < 8; n++)
                  e += parseInt(t.charAt(n), 10) * i[n];
              return 11 === (e = 11 - e % 11) && (e = 0),
              e + "" === t.substr(8, 1)
          },
          _pl: function(t) {
              if (/^PL[0-9]{10}$/.test(t) && (t = t.substr(2)),
              !/^[0-9]{10}$/.test(t))
                  return !1;
              for (var e = 0, i = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1], n = 0; n < 10; n++)
                  e += parseInt(t.charAt(n), 10) * i[n];
              return e % 11 == 0
          },
          _pt: function(t) {
              if (/^PT[0-9]{9}$/.test(t) && (t = t.substr(2)),
              !/^[0-9]{9}$/.test(t))
                  return !1;
              for (var e = 0, i = [9, 8, 7, 6, 5, 4, 3, 2], n = 0; n < 8; n++)
                  e += parseInt(t.charAt(n), 10) * i[n];
              return (e = 11 - e % 11) > 9 && (e = 0),
              e + "" === t.substr(8, 1)
          },
          _ro: function(t) {
              if (/^RO[1-9][0-9]{1,9}$/.test(t) && (t = t.substr(2)),
              !/^[1-9][0-9]{1,9}$/.test(t))
                  return !1;
              for (var e = t.length, i = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - e), n = 0, o = 0; o < e - 1; o++)
                  n += parseInt(t.charAt(o), 10) * i[o];
              return (n = 10 * n % 11 % 10) + "" === t.substr(e - 1, 1)
          },
          _ru: function(t) {
              if (/^RU([0-9]{10}|[0-9]{12})$/.test(t) && (t = t.substr(2)),
              !/^([0-9]{10}|[0-9]{12})$/.test(t))
                  return !1;
              var e = 0;
              if (10 === t.length) {
                  var i = 0
                    , n = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
                  for (e = 0; e < 10; e++)
                      i += parseInt(t.charAt(e), 10) * n[e];
                  return (i %= 11) > 9 && (i %= 10),
                  i + "" === t.substr(9, 1)
              }
              if (12 === t.length) {
                  var o = 0
                    , r = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0]
                    , s = 0
                    , a = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
                  for (e = 0; e < 11; e++)
                      o += parseInt(t.charAt(e), 10) * r[e],
                      s += parseInt(t.charAt(e), 10) * a[e];
                  return (o %= 11) > 9 && (o %= 10),
                  (s %= 11) > 9 && (s %= 10),
                  o + "" === t.substr(10, 1) && s + "" === t.substr(11, 1)
              }
              return !1
          },
          _rs: function(t) {
              if (/^RS[0-9]{9}$/.test(t) && (t = t.substr(2)),
              !/^[0-9]{9}$/.test(t))
                  return !1;
              for (var e = 10, i = 0, n = 0; n < 8; n++)
                  0 === (i = (parseInt(t.charAt(n), 10) + e) % 10) && (i = 10),
                  e = 2 * i % 11;
              return (e + parseInt(t.substr(8, 1), 10)) % 10 == 1
          },
          _se: function(t) {
              return /^SE[0-9]{10}01$/.test(t) && (t = t.substr(2)),
              !!/^[0-9]{10}01$/.test(t) && (t = t.substr(0, 10),
              FormValidation.Helper.luhn(t))
          },
          _si: function(t) {
              var e = t.match(/^(SI)?([1-9][0-9]{7})$/);
              if (!e)
                  return !1;
              e[1] && (t = t.substr(2));
              for (var i = 0, n = [8, 7, 6, 5, 4, 3, 2], o = 0; o < 7; o++)
                  i += parseInt(t.charAt(o), 10) * n[o];
              return 10 === (i = 11 - i % 11) && (i = 0),
              i + "" === t.substr(7, 1)
          },
          _sk: function(t) {
              return /^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t) && (t = t.substr(2)),
              !!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t) && parseInt(t, 10) % 11 == 0
          },
          _ve: function(t) {
              if (/^VE[VEJPG][0-9]{9}$/.test(t) && (t = t.substr(2)),
              !/^[VEJPG][0-9]{9}$/.test(t))
                  return !1;
              for (var e = {
                  V: 4,
                  E: 8,
                  J: 12,
                  P: 16,
                  G: 20
              }[t.charAt(0)], i = [3, 2, 7, 6, 5, 4, 3, 2], n = 0; n < 8; n++)
                  e += parseInt(t.charAt(n + 1), 10) * i[n];
              return 11 !== (e = 11 - e % 11) && 10 !== e || (e = 0),
              e + "" === t.substr(9, 1)
          },
          _za: function(t) {
              return /^ZA4[0-9]{9}$/.test(t) && (t = t.substr(2)),
              /^4[0-9]{9}$/.test(t)
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              vin: {
                  default: "Please enter a valid VIN number"
              }
          }
      }),
      FormValidation.Validator.vin = {
          validate: function(t, e, i, n) {
              var o = t.getFieldValue(e, n);
              if ("" === o)
                  return !0;
              if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(o))
                  return !1;
              for (var r = {
                  A: 1,
                  B: 2,
                  C: 3,
                  D: 4,
                  E: 5,
                  F: 6,
                  G: 7,
                  H: 8,
                  J: 1,
                  K: 2,
                  L: 3,
                  M: 4,
                  N: 5,
                  P: 7,
                  R: 9,
                  S: 2,
                  T: 3,
                  U: 4,
                  V: 5,
                  W: 6,
                  X: 7,
                  Y: 8,
                  Z: 9,
                  1: 1,
                  2: 2,
                  3: 3,
                  4: 4,
                  5: 5,
                  6: 6,
                  7: 7,
                  8: 8,
                  9: 9,
                  0: 0
              }, s = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2], a = 0, l = (o = o.toUpperCase()).length, c = 0; c < l; c++)
                  a += r[o.charAt(c) + ""] * s[c];
              var d = a % 11;
              return 10 === d && (d = "X"),
              d + "" === o.charAt(8)
          }
      }
  }(jQuery),
  function(t) {
      FormValidation.I18n = t.extend(!0, FormValidation.I18n || {}, {
          en_US: {
              zipCode: {
                  default: "Please enter a valid postal code",
                  country: "Please enter a valid postal code in %s",
                  countries: {
                      AT: "Austria",
                      BG: "Bulgaria",
                      BR: "Brazil",
                      CA: "Canada",
                      CH: "Switzerland",
                      CZ: "Czech Republic",
                      DE: "Germany",
                      DK: "Denmark",
                      ES: "Spain",
                      FR: "France",
                      GB: "United Kingdom",
                      IE: "Ireland",
                      IN: "India",
                      IT: "Italy",
                      MA: "Morocco",
                      NL: "Netherlands",
                      PL: "Poland",
                      PT: "Portugal",
                      RO: "Romania",
                      RU: "Russia",
                      SE: "Sweden",
                      SG: "Singapore",
                      SK: "Slovakia",
                      US: "USA"
                  }
              }
          }
      }),
      FormValidation.Validator.zipCode = {
          html5Attributes: {
              message: "message",
              country: "country"
          },
          COUNTRY_CODES: ["AT", "BG", "BR", "CA", "CH", "CZ", "DE", "DK", "ES", "FR", "GB", "IE", "IN", "IT", "MA", "NL", "PL", "PT", "RO", "RU", "SE", "SG", "SK", "US"],
          validate: function(e, i, n, o) {
              var r = e.getFieldValue(i, o);
              if ("" === r || !n.country)
                  return !0;
              var s = e.getLocale()
                , a = n.country;
              if ("string" == typeof a && -1 !== t.inArray(a, this.COUNTRY_CODES) || (a = e.getDynamicOption(i, a)),
              !a || -1 === t.inArray(a.toUpperCase(), this.COUNTRY_CODES))
                  return !0;
              var l = !1;
              switch (a = a.toUpperCase()) {
              case "AT":
                  l = /^([1-9]{1})(\d{3})$/.test(r);
                  break;
              case "BG":
                  l = /^([1-9]{1}[0-9]{3})$/.test(t.trim(r));
                  break;
              case "BR":
                  l = /^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(r);
                  break;
              case "CA":
                  l = /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(r);
                  break;
              case "CH":
                  l = /^([1-9]{1})(\d{3})$/.test(r);
                  break;
              case "CZ":
                  l = /^(\d{3})([ ]?)(\d{2})$/.test(r);
                  break;
              case "DE":
                  l = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(r);
                  break;
              case "DK":
                  l = /^(DK(-|\s)?)?\d{4}$/i.test(r);
                  break;
              case "ES":
                  l = /^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(r);
                  break;
              case "FR":
                  l = /^[0-9]{5}$/i.test(r);
                  break;
              case "GB":
                  l = this._gb(r);
                  break;
              case "IN":
                  l = /^\d{3}\s?\d{3}$/.test(r);
                  break;
              case "IE":
                  l = /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(r);
                  break;
              case "IT":
                  l = /^(I-|IT-)?\d{5}$/i.test(r);
                  break;
              case "MA":
                  l = /^[1-9][0-9]{4}$/i.test(r);
                  break;
              case "NL":
                  l = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(r);
                  break;
              case "PL":
                  l = /^[0-9]{2}\-[0-9]{3}$/.test(r);
                  break;
              case "PT":
                  l = /^[1-9]\d{3}-\d{3}$/.test(r);
                  break;
              case "RO":
                  l = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(r);
                  break;
              case "RU":
                  l = /^[0-9]{6}$/i.test(r);
                  break;
              case "SE":
                  l = /^(S-)?\d{3}\s?\d{2}$/i.test(r);
                  break;
              case "SG":
                  l = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(r);
                  break;
              case "SK":
                  l = /^(\d{3})([ ]?)(\d{2})$/.test(r);
                  break;
              case "US":
              default:
                  l = /^\d{4,5}([\-]?\d{4})?$/.test(r)
              }
              return {
                  valid: l,
                  message: FormValidation.Helper.format(n.message || FormValidation.I18n[s].zipCode.country, FormValidation.I18n[s].zipCode.countries[a])
              }
          },
          _gb: function(t) {
              for (var e = "[ABCDEFGHIJKLMNOPRSTUWYZ]", i = "[ABDEFGHJLNPQRSTUWXYZ]", n = [new RegExp("^(" + e + "{1}[ABCDEFGHKLMNOPQRSTUVWXY]?[0-9]{1,2})(\\s*)([0-9]{1}" + i + "{2})$","i"), new RegExp("^(" + e + "{1}[0-9]{1}[ABCDEFGHJKPMNRSTUVWXY]{1})(\\s*)([0-9]{1}" + i + "{2})$","i"), new RegExp("^(" + e + "{1}[ABCDEFGHKLMNOPQRSTUVWXY]{1}?[0-9]{1}[ABEHMNPRVWXY]{1})(\\s*)([0-9]{1}" + i + "{2})$","i"), new RegExp("^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$","i"), /^(GIR)(\s*)(0AA)$/i, /^(BFPO)(\s*)([0-9]{1,4})$/i, /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i, /^([A-Z]{4})(\s*)(1ZZ)$/i, /^(AI-2640)$/i], o = 0; o < n.length; o++)
                  if (n[o].test(t))
                      return !0;
              return !1
          }
      }
  }(jQuery)
}
, function(t, e) {
  var i;
  i = jQuery,
  FormValidation.Framework.Bootstrap = function(t, e, n) {
      e = i.extend(!0, {
          button: {
              selector: '[type="submit"]:not([formnovalidate])',
              disabled: "disabled"
          },
          err: {
              clazz: "help-block",
              parent: "^(.*)col-(xs|sm|md|lg)-(offset-){0,1}[0-9]+(.*)$"
          },
          icon: {
              valid: null,
              invalid: null,
              validating: null,
              feedback: "form-control-feedback"
          },
          row: {
              selector: ".form-group",
              valid: "has-success",
              invalid: "has-error",
              feedback: "has-feedback"
          }
      }, e),
      FormValidation.Base.apply(this, [t, e, n])
  }
  ,
  FormValidation.Framework.Bootstrap.prototype = i.extend({}, FormValidation.Base.prototype, {
      _fixIcon: function(t, e) {
          var i = this._namespace
            , n = t.attr("type")
            , o = t.attr("data-" + i + "-field")
            , r = this.options.fields[o].row || this.options.row.selector
            , s = t.closest(r);
          if ("checkbox" === n || "radio" === n) {
              var a = t.parent();
              a.hasClass(n) ? e.insertAfter(a) : a.parent().hasClass(n) && e.insertAfter(a.parent())
          }
          0 !== s.find(".input-group").length && e.addClass("fv-bootstrap-icon-input-group").insertAfter(s.find(".input-group").eq(0))
      },
      _createTooltip: function(t, e, i) {
          var n = this._namespace
            , o = t.data(n + ".icon");
          if (o)
              switch (i) {
              case "popover":
                  o.css({
                      cursor: "pointer",
                      "pointer-events": "auto"
                  }).popover("destroy").popover({
                      container: "body",
                      content: e,
                      html: !0,
                      placement: "auto top",
                      trigger: "hover click"
                  });
                  break;
              case "tooltip":
              default:
                  o.css({
                      cursor: "pointer",
                      "pointer-events": "auto"
                  }).tooltip("destroy").tooltip({
                      container: "body",
                      html: !0,
                      placement: "auto top",
                      title: e
                  })
              }
      },
      _destroyTooltip: function(t, e) {
          var i = this._namespace
            , n = t.data(i + ".icon");
          if (n)
              switch (e) {
              case "popover":
                  n.css({
                      cursor: "",
                      "pointer-events": "none"
                  }).popover("destroy");
                  break;
              case "tooltip":
              default:
                  n.css({
                      cursor: "",
                      "pointer-events": "none"
                  }).tooltip("destroy")
              }
      },
      _hideTooltip: function(t, e) {
          var i = this._namespace
            , n = t.data(i + ".icon");
          if (n)
              switch (e) {
              case "popover":
                  n.popover("hide");
                  break;
              case "tooltip":
              default:
                  n.tooltip("hide")
              }
      },
      _showTooltip: function(t, e) {
          var i = this._namespace
            , n = t.data(i + ".icon");
          if (n)
              switch (e) {
              case "popover":
                  n.popover("show");
                  break;
              case "tooltip":
              default:
                  n.tooltip("show")
              }
      }
  }),
  i.fn.bootstrapValidator = function(t) {
      var e = arguments;
      return this.each(function() {
          var n = i(this)
            , o = n.data("formValidation") || n.data("bootstrapValidator")
            , r = "object" == typeof t && t;
          o || (o = new FormValidation.Framework.Bootstrap(this,i.extend({}, {
              events: {
                  formInit: "init.form.bv",
                  formPreValidate: "prevalidate.form.bv",
                  formError: "error.form.bv",
                  formSuccess: "success.form.bv",
                  fieldAdded: "added.field.bv",
                  fieldRemoved: "removed.field.bv",
                  fieldInit: "init.field.bv",
                  fieldError: "error.field.bv",
                  fieldSuccess: "success.field.bv",
                  fieldStatus: "status.field.bv",
                  localeChanged: "changed.locale.bv",
                  validatorError: "error.validator.bv",
                  validatorSuccess: "success.validator.bv"
              }
          }, r),"bv"),
          n.addClass("fv-form-bootstrap").data("formValidation", o).data("bootstrapValidator", o)),
          "string" == typeof t && o[t].apply(o, Array.prototype.slice.call(e, 1))
      })
  }
  ,
  i.fn.bootstrapValidator.Constructor = FormValidation.Framework.Bootstrap
}
, function(t, e, i) {
  var n = i(8);
  i(9),
  i(10);
  i(15);
  var o = i(0)
    , r = {
      url: "",
      is_clear: !0,
      success_message: "",
      data: {},
      showMessage: !0
  };
  o.fn.mpireAjaxForm = function(t, e) {
      o(this).each(function() {
          var i = this;
          r.url = "",
          r.data = "",
          o.extend(!0, r, t);
          r.url ? r.url : o(i).attr("action");
          o(this).ajaxForm({
              url: o(i).attr("action"),
              data: r.data,
              method: o(i).attr("method"),
              error: function(t, e, i) {},
              beforeSubmit: function(t, e, i) {
                  o.LoadingOverlay("show")
              },
              uploadProgress: function(t, e, i, n) {},
              success: function(t, s, a) {
                  200 === t.code ? (void 0 !== e && e(t),
                  r.is_clear && o(i).resetForm(),
                  s = n.isUndefined(t.message.success_message) ? t.message : t.message.success_message,
                  r.showMessage && o.alert.success(s)) : (s = n.isUndefined(t.message.error_message) ? t.message : t.message.error_message,
                  r.showMessage && o.alert.error(s)),
                  o.LoadingOverlay("hide"),
                  o(i).find("input[type=submit],button").removeClass("m-disabled disabled").prop("disabled", !1)
              }
          })
      })
  }
  ,
  o.fn.mpireAjaxSubmit = function(t, e, i) {
      o(this).each(function() {
          var i = this;
          r.url = "",
          r.data = "",
          o.extend(!0, r, t);
          var s = r.url ? r.url : o(i).attr("action");
          o(this).ajaxSubmit({
              url: s,
              data: r.data,
              method: o(i).attr("method"),
              dataType: "json",
              error: function(t, e, i) {},
              beforeSubmit: function(t, e, n) {
                  r.is_single_element ? o(i).LoadingOverlay("show") : o.LoadingOverlay("show")
              },
              uploadProgress: function(t, e, i, n) {},
              success: function(t, s, a) {
                  200 == t.code ? (r.is_clear && o(i).resetForm(),
                  s = n.isUndefined(t.message.success_message) ? t.message : t.message.success_message,
                  r.showMessage && o.alert.success(s)) : (s = n.isUndefined(t.message.error_message) ? t.message : t.message.error_message,
                  r.showMessage && o.alert.error(s)),
                  o.LoadingOverlay("hide"),
                  o(i).find("input[type=submit],button").removeClass("m-disabled disabled").prop("disabled", !1),
                  void 0 !== e && e(t)
              }
          })
      })
  }
}
, function(t, e, i) {
  var n;
  (function() {
      function i(t) {
          return function(e, i, n, o) {
              i = A(i, o, 4);
              var r = !I(e) && x.keys(e)
                , s = (r || e).length
                , a = t > 0 ? 0 : s - 1;
              return arguments.length < 3 && (n = e[r ? r[a] : a],
              a += t),
              function(e, i, n, o, r, s) {
                  for (; r >= 0 && s > r; r += t) {
                      var a = o ? o[r] : r;
                      n = i(n, e[a], a, e)
                  }
                  return n
              }(e, i, n, r, a, s)
          }
      }
      function o(t) {
          return function(e, i, n) {
              i = C(i, n);
              for (var o = k(e), r = t > 0 ? 0 : o - 1; r >= 0 && o > r; r += t)
                  if (i(e[r], r, e))
                      return r;
              return -1
          }
      }
      function r(t, e, i) {
          return function(n, o, r) {
              var s = 0
                , a = k(n);
              if ("number" == typeof r)
                  t > 0 ? s = r >= 0 ? r : Math.max(r + a, s) : a = r >= 0 ? Math.min(r + 1, a) : r + a + 1;
              else if (i && r && a)
                  return n[r = i(n, o)] === o ? r : -1;
              if (o != o)
                  return (r = e(f.call(n, s, a), x.isNaN)) >= 0 ? r + s : -1;
              for (r = t > 0 ? s : a - 1; r >= 0 && a > r; r += t)
                  if (n[r] === o)
                      return r;
              return -1
          }
      }
      function s(t, e) {
          var i = O.length
            , n = t.constructor
            , o = x.isFunction(n) && n.prototype || d
            , r = "constructor";
          for (x.has(t, r) && !x.contains(e, r) && e.push(r); i--; )
              (r = O[i])in t && t[r] !== o[r] && !x.contains(e, r) && e.push(r)
      }
      var a = this
        , l = a._
        , c = Array.prototype
        , d = Object.prototype
        , u = Function.prototype
        , h = c.push
        , f = c.slice
        , p = d.toString
        , g = d.hasOwnProperty
        , m = Array.isArray
        , v = Object.keys
        , y = u.bind
        , b = Object.create
        , w = function() {}
        , x = function(t) {
          return t instanceof x ? t : this instanceof x ? void (this._wrapped = t) : new x(t)
      };
      t.exports && (e = t.exports = x),
      e._ = x,
      x.VERSION = "1.8.3";
      var A = function(t, e, i) {
          if (void 0 === e)
              return t;
          switch (null == i ? 3 : i) {
          case 1:
              return function(i) {
                  return t.call(e, i)
              }
              ;
          case 2:
              return function(i, n) {
                  return t.call(e, i, n)
              }
              ;
          case 3:
              return function(i, n, o) {
                  return t.call(e, i, n, o)
              }
              ;
          case 4:
              return function(i, n, o, r) {
                  return t.call(e, i, n, o, r)
              }
          }
          return function() {
              return t.apply(e, arguments)
          }
      }
        , C = function(t, e, i) {
          return null == t ? x.identity : x.isFunction(t) ? A(t, e, i) : x.isObject(t) ? x.matcher(t) : x.property(t)
      };
      x.iteratee = function(t, e) {
          return C(t, e, 1 / 0)
      }
      ;
      var S = function(t, e) {
          return function(i) {
              var n = arguments.length;
              if (2 > n || null == i)
                  return i;
              for (var o = 1; n > o; o++)
                  for (var r = arguments[o], s = t(r), a = s.length, l = 0; a > l; l++) {
                      var c = s[l];
                      e && void 0 !== i[c] || (i[c] = r[c])
                  }
              return i
          }
      }
        , T = function(t) {
          if (!x.isObject(t))
              return {};
          if (b)
              return b(t);
          w.prototype = t;
          var e = new w;
          return w.prototype = null,
          e
      }
        , _ = function(t) {
          return function(e) {
              return null == e ? void 0 : e[t]
          }
      }
        , E = Math.pow(2, 53) - 1
        , k = _("length")
        , I = function(t) {
          var e = k(t);
          return "number" == typeof e && e >= 0 && E >= e
      };
      x.each = x.forEach = function(t, e, i) {
          var n, o;
          if (e = A(e, i),
          I(t))
              for (n = 0,
              o = t.length; o > n; n++)
                  e(t[n], n, t);
          else {
              var r = x.keys(t);
              for (n = 0,
              o = r.length; o > n; n++)
                  e(t[r[n]], r[n], t)
          }
          return t
      }
      ,
      x.map = x.collect = function(t, e, i) {
          e = C(e, i);
          for (var n = !I(t) && x.keys(t), o = (n || t).length, r = Array(o), s = 0; o > s; s++) {
              var a = n ? n[s] : s;
              r[s] = e(t[a], a, t)
          }
          return r
      }
      ,
      x.reduce = x.foldl = x.inject = i(1),
      x.reduceRight = x.foldr = i(-1),
      x.find = x.detect = function(t, e, i) {
          var n;
          return void 0 !== (n = I(t) ? x.findIndex(t, e, i) : x.findKey(t, e, i)) && -1 !== n ? t[n] : void 0
      }
      ,
      x.filter = x.select = function(t, e, i) {
          var n = [];
          return e = C(e, i),
          x.each(t, function(t, i, o) {
              e(t, i, o) && n.push(t)
          }),
          n
      }
      ,
      x.reject = function(t, e, i) {
          return x.filter(t, x.negate(C(e)), i)
      }
      ,
      x.every = x.all = function(t, e, i) {
          e = C(e, i);
          for (var n = !I(t) && x.keys(t), o = (n || t).length, r = 0; o > r; r++) {
              var s = n ? n[r] : r;
              if (!e(t[s], s, t))
                  return !1
          }
          return !0
      }
      ,
      x.some = x.any = function(t, e, i) {
          e = C(e, i);
          for (var n = !I(t) && x.keys(t), o = (n || t).length, r = 0; o > r; r++) {
              var s = n ? n[r] : r;
              if (e(t[s], s, t))
                  return !0
          }
          return !1
      }
      ,
      x.contains = x.includes = x.include = function(t, e, i, n) {
          return I(t) || (t = x.values(t)),
          ("number" != typeof i || n) && (i = 0),
          x.indexOf(t, e, i) >= 0
      }
      ,
      x.invoke = function(t, e) {
          var i = f.call(arguments, 2)
            , n = x.isFunction(e);
          return x.map(t, function(t) {
              var o = n ? e : t[e];
              return null == o ? o : o.apply(t, i)
          })
      }
      ,
      x.pluck = function(t, e) {
          return x.map(t, x.property(e))
      }
      ,
      x.where = function(t, e) {
          return x.filter(t, x.matcher(e))
      }
      ,
      x.findWhere = function(t, e) {
          return x.find(t, x.matcher(e))
      }
      ,
      x.max = function(t, e, i) {
          var n, o, r = -1 / 0, s = -1 / 0;
          if (null == e && null != t)
              for (var a = 0, l = (t = I(t) ? t : x.values(t)).length; l > a; a++)
                  (n = t[a]) > r && (r = n);
          else
              e = C(e, i),
              x.each(t, function(t, i, n) {
                  ((o = e(t, i, n)) > s || o === -1 / 0 && r === -1 / 0) && (r = t,
                  s = o)
              });
          return r
      }
      ,
      x.min = function(t, e, i) {
          var n, o, r = 1 / 0, s = 1 / 0;
          if (null == e && null != t)
              for (var a = 0, l = (t = I(t) ? t : x.values(t)).length; l > a; a++)
                  n = t[a],
                  r > n && (r = n);
          else
              e = C(e, i),
              x.each(t, function(t, i, n) {
                  o = e(t, i, n),
                  (s > o || 1 / 0 === o && 1 / 0 === r) && (r = t,
                  s = o)
              });
          return r
      }
      ,
      x.shuffle = function(t) {
          for (var e, i = I(t) ? t : x.values(t), n = i.length, o = Array(n), r = 0; n > r; r++)
              (e = x.random(0, r)) !== r && (o[r] = o[e]),
              o[e] = i[r];
          return o
      }
      ,
      x.sample = function(t, e, i) {
          return null == e || i ? (I(t) || (t = x.values(t)),
          t[x.random(t.length - 1)]) : x.shuffle(t).slice(0, Math.max(0, e))
      }
      ,
      x.sortBy = function(t, e, i) {
          return e = C(e, i),
          x.pluck(x.map(t, function(t, i, n) {
              return {
                  value: t,
                  index: i,
                  criteria: e(t, i, n)
              }
          }).sort(function(t, e) {
              var i = t.criteria
                , n = e.criteria;
              if (i !== n) {
                  if (i > n || void 0 === i)
                      return 1;
                  if (n > i || void 0 === n)
                      return -1
              }
              return t.index - e.index
          }), "value")
      }
      ;
      var F = function(t) {
          return function(e, i, n) {
              var o = {};
              return i = C(i, n),
              x.each(e, function(n, r) {
                  var s = i(n, r, e);
                  t(o, n, s)
              }),
              o
          }
      };
      x.groupBy = F(function(t, e, i) {
          x.has(t, i) ? t[i].push(e) : t[i] = [e]
      }),
      x.indexBy = F(function(t, e, i) {
          t[i] = e
      }),
      x.countBy = F(function(t, e, i) {
          x.has(t, i) ? t[i]++ : t[i] = 1
      }),
      x.toArray = function(t) {
          return t ? x.isArray(t) ? f.call(t) : I(t) ? x.map(t, x.identity) : x.values(t) : []
      }
      ,
      x.size = function(t) {
          return null == t ? 0 : I(t) ? t.length : x.keys(t).length
      }
      ,
      x.partition = function(t, e, i) {
          e = C(e, i);
          var n = []
            , o = [];
          return x.each(t, function(t, i, r) {
              (e(t, i, r) ? n : o).push(t)
          }),
          [n, o]
      }
      ,
      x.first = x.head = x.take = function(t, e, i) {
          return null == t ? void 0 : null == e || i ? t[0] : x.initial(t, t.length - e)
      }
      ,
      x.initial = function(t, e, i) {
          return f.call(t, 0, Math.max(0, t.length - (null == e || i ? 1 : e)))
      }
      ,
      x.last = function(t, e, i) {
          return null == t ? void 0 : null == e || i ? t[t.length - 1] : x.rest(t, Math.max(0, t.length - e))
      }
      ,
      x.rest = x.tail = x.drop = function(t, e, i) {
          return f.call(t, null == e || i ? 1 : e)
      }
      ,
      x.compact = function(t) {
          return x.filter(t, x.identity)
      }
      ;
      var D = function(t, e, i, n) {
          for (var o = [], r = 0, s = n || 0, a = k(t); a > s; s++) {
              var l = t[s];
              if (I(l) && (x.isArray(l) || x.isArguments(l))) {
                  e || (l = D(l, e, i));
                  var c = 0
                    , d = l.length;
                  for (o.length += d; d > c; )
                      o[r++] = l[c++]
              } else
                  i || (o[r++] = l)
          }
          return o
      };
      x.flatten = function(t, e) {
          return D(t, e, !1)
      }
      ,
      x.without = function(t) {
          return x.difference(t, f.call(arguments, 1))
      }
      ,
      x.uniq = x.unique = function(t, e, i, n) {
          x.isBoolean(e) || (n = i,
          i = e,
          e = !1),
          null != i && (i = C(i, n));
          for (var o = [], r = [], s = 0, a = k(t); a > s; s++) {
              var l = t[s]
                , c = i ? i(l, s, t) : l;
              e ? (s && r === c || o.push(l),
              r = c) : i ? x.contains(r, c) || (r.push(c),
              o.push(l)) : x.contains(o, l) || o.push(l)
          }
          return o
      }
      ,
      x.union = function() {
          return x.uniq(D(arguments, !0, !0))
      }
      ,
      x.intersection = function(t) {
          for (var e = [], i = arguments.length, n = 0, o = k(t); o > n; n++) {
              var r = t[n];
              if (!x.contains(e, r)) {
                  for (var s = 1; i > s && x.contains(arguments[s], r); s++)
                      ;
                  s === i && e.push(r)
              }
          }
          return e
      }
      ,
      x.difference = function(t) {
          var e = D(arguments, !0, !0, 1);
          return x.filter(t, function(t) {
              return !x.contains(e, t)
          })
      }
      ,
      x.zip = function() {
          return x.unzip(arguments)
      }
      ,
      x.unzip = function(t) {
          for (var e = t && x.max(t, k).length || 0, i = Array(e), n = 0; e > n; n++)
              i[n] = x.pluck(t, n);
          return i
      }
      ,
      x.object = function(t, e) {
          for (var i = {}, n = 0, o = k(t); o > n; n++)
              e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
          return i
      }
      ,
      x.findIndex = o(1),
      x.findLastIndex = o(-1),
      x.sortedIndex = function(t, e, i, n) {
          for (var o = (i = C(i, n, 1))(e), r = 0, s = k(t); s > r; ) {
              var a = Math.floor((r + s) / 2);
              i(t[a]) < o ? r = a + 1 : s = a
          }
          return r
      }
      ,
      x.indexOf = r(1, x.findIndex, x.sortedIndex),
      x.lastIndexOf = r(-1, x.findLastIndex),
      x.range = function(t, e, i) {
          null == e && (e = t || 0,
          t = 0),
          i = i || 1;
          for (var n = Math.max(Math.ceil((e - t) / i), 0), o = Array(n), r = 0; n > r; r++,
          t += i)
              o[r] = t;
          return o
      }
      ;
      var $ = function(t, e, i, n, o) {
          if (!(n instanceof e))
              return t.apply(i, o);
          var r = T(t.prototype)
            , s = t.apply(r, o);
          return x.isObject(s) ? s : r
      };
      x.bind = function(t, e) {
          if (y && t.bind === y)
              return y.apply(t, f.call(arguments, 1));
          if (!x.isFunction(t))
              throw new TypeError("Bind must be called on a function");
          var i = f.call(arguments, 2)
            , n = function() {
              return $(t, n, e, this, i.concat(f.call(arguments)))
          };
          return n
      }
      ,
      x.partial = function(t) {
          var e = f.call(arguments, 1)
            , i = function() {
              for (var n = 0, o = e.length, r = Array(o), s = 0; o > s; s++)
                  r[s] = e[s] === x ? arguments[n++] : e[s];
              for (; n < arguments.length; )
                  r.push(arguments[n++]);
              return $(t, i, this, this, r)
          };
          return i
      }
      ,
      x.bindAll = function(t) {
          var e, i, n = arguments.length;
          if (1 >= n)
              throw new Error("bindAll must be passed function names");
          for (e = 1; n > e; e++)
              t[i = arguments[e]] = x.bind(t[i], t);
          return t
      }
      ,
      x.memoize = function(t, e) {
          var i = function(n) {
              var o = i.cache
                , r = "" + (e ? e.apply(this, arguments) : n);
              return x.has(o, r) || (o[r] = t.apply(this, arguments)),
              o[r]
          };
          return i.cache = {},
          i
      }
      ,
      x.delay = function(t, e) {
          var i = f.call(arguments, 2);
          return setTimeout(function() {
              return t.apply(null, i)
          }, e)
      }
      ,
      x.defer = x.partial(x.delay, x, 1),
      x.throttle = function(t, e, i) {
          var n, o, r, s = null, a = 0;
          i || (i = {});
          var l = function() {
              a = !1 === i.leading ? 0 : x.now(),
              s = null,
              r = t.apply(n, o),
              s || (n = o = null)
          };
          return function() {
              var c = x.now();
              a || !1 !== i.leading || (a = c);
              var d = e - (c - a);
              return n = this,
              o = arguments,
              0 >= d || d > e ? (s && (clearTimeout(s),
              s = null),
              a = c,
              r = t.apply(n, o),
              s || (n = o = null)) : s || !1 === i.trailing || (s = setTimeout(l, d)),
              r
          }
      }
      ,
      x.debounce = function(t, e, i) {
          var n, o, r, s, a, l = function() {
              var c = x.now() - s;
              e > c && c >= 0 ? n = setTimeout(l, e - c) : (n = null,
              i || (a = t.apply(r, o),
              n || (r = o = null)))
          };
          return function() {
              r = this,
              o = arguments,
              s = x.now();
              var c = i && !n;
              return n || (n = setTimeout(l, e)),
              c && (a = t.apply(r, o),
              r = o = null),
              a
          }
      }
      ,
      x.wrap = function(t, e) {
          return x.partial(e, t)
      }
      ,
      x.negate = function(t) {
          return function() {
              return !t.apply(this, arguments)
          }
      }
      ,
      x.compose = function() {
          var t = arguments
            , e = t.length - 1;
          return function() {
              for (var i = e, n = t[e].apply(this, arguments); i--; )
                  n = t[i].call(this, n);
              return n
          }
      }
      ,
      x.after = function(t, e) {
          return function() {
              return --t < 1 ? e.apply(this, arguments) : void 0
          }
      }
      ,
      x.before = function(t, e) {
          var i;
          return function() {
              return --t > 0 && (i = e.apply(this, arguments)),
              1 >= t && (e = null),
              i
          }
      }
      ,
      x.once = x.partial(x.before, 2);
      var L = !{
          toString: null
      }.propertyIsEnumerable("toString")
        , O = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
      x.keys = function(t) {
          if (!x.isObject(t))
              return [];
          if (v)
              return v(t);
          var e = [];
          for (var i in t)
              x.has(t, i) && e.push(i);
          return L && s(t, e),
          e
      }
      ,
      x.allKeys = function(t) {
          if (!x.isObject(t))
              return [];
          var e = [];
          for (var i in t)
              e.push(i);
          return L && s(t, e),
          e
      }
      ,
      x.values = function(t) {
          for (var e = x.keys(t), i = e.length, n = Array(i), o = 0; i > o; o++)
              n[o] = t[e[o]];
          return n
      }
      ,
      x.mapObject = function(t, e, i) {
          e = C(e, i);
          for (var n, o = x.keys(t), r = o.length, s = {}, a = 0; r > a; a++)
              s[n = o[a]] = e(t[n], n, t);
          return s
      }
      ,
      x.pairs = function(t) {
          for (var e = x.keys(t), i = e.length, n = Array(i), o = 0; i > o; o++)
              n[o] = [e[o], t[e[o]]];
          return n
      }
      ,
      x.invert = function(t) {
          for (var e = {}, i = x.keys(t), n = 0, o = i.length; o > n; n++)
              e[t[i[n]]] = i[n];
          return e
      }
      ,
      x.functions = x.methods = function(t) {
          var e = [];
          for (var i in t)
              x.isFunction(t[i]) && e.push(i);
          return e.sort()
      }
      ,
      x.extend = S(x.allKeys),
      x.extendOwn = x.assign = S(x.keys),
      x.findKey = function(t, e, i) {
          e = C(e, i);
          for (var n, o = x.keys(t), r = 0, s = o.length; s > r; r++)
              if (e(t[n = o[r]], n, t))
                  return n
      }
      ,
      x.pick = function(t, e, i) {
          var n, o, r = {}, s = t;
          if (null == s)
              return r;
          x.isFunction(e) ? (o = x.allKeys(s),
          n = A(e, i)) : (o = D(arguments, !1, !1, 1),
          n = function(t, e, i) {
              return e in i
          }
          ,
          s = Object(s));
          for (var a = 0, l = o.length; l > a; a++) {
              var c = o[a]
                , d = s[c];
              n(d, c, s) && (r[c] = d)
          }
          return r
      }
      ,
      x.omit = function(t, e, i) {
          if (x.isFunction(e))
              e = x.negate(e);
          else {
              var n = x.map(D(arguments, !1, !1, 1), String);
              e = function(t, e) {
                  return !x.contains(n, e)
              }
          }
          return x.pick(t, e, i)
      }
      ,
      x.defaults = S(x.allKeys, !0),
      x.create = function(t, e) {
          var i = T(t);
          return e && x.extendOwn(i, e),
          i
      }
      ,
      x.clone = function(t) {
          return x.isObject(t) ? x.isArray(t) ? t.slice() : x.extend({}, t) : t
      }
      ,
      x.tap = function(t, e) {
          return e(t),
          t
      }
      ,
      x.isMatch = function(t, e) {
          var i = x.keys(e)
            , n = i.length;
          if (null == t)
              return !n;
          for (var o = Object(t), r = 0; n > r; r++) {
              var s = i[r];
              if (e[s] !== o[s] || !(s in o))
                  return !1
          }
          return !0
      }
      ;
      var N = function(t, e, i, n) {
          if (t === e)
              return 0 !== t || 1 / t == 1 / e;
          if (null == t || null == e)
              return t === e;
          t instanceof x && (t = t._wrapped),
          e instanceof x && (e = e._wrapped);
          var o = p.call(t);
          if (o !== p.call(e))
              return !1;
          switch (o) {
          case "[object RegExp]":
          case "[object String]":
              return "" + t == "" + e;
          case "[object Number]":
              return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
          case "[object Date]":
          case "[object Boolean]":
              return +t == +e
          }
          var r = "[object Array]" === o;
          if (!r) {
              if ("object" != typeof t || "object" != typeof e)
                  return !1;
              var s = t.constructor
                , a = e.constructor;
              if (s !== a && !(x.isFunction(s) && s instanceof s && x.isFunction(a) && a instanceof a) && "constructor"in t && "constructor"in e)
                  return !1
          }
          n = n || [];
          for (var l = (i = i || []).length; l--; )
              if (i[l] === t)
                  return n[l] === e;
          if (i.push(t),
          n.push(e),
          r) {
              if ((l = t.length) !== e.length)
                  return !1;
              for (; l--; )
                  if (!N(t[l], e[l], i, n))
                      return !1
          } else {
              var c, d = x.keys(t);
              if (l = d.length,
              x.keys(e).length !== l)
                  return !1;
              for (; l--; )
                  if (c = d[l],
                  !x.has(e, c) || !N(t[c], e[c], i, n))
                      return !1
          }
          return i.pop(),
          n.pop(),
          !0
      };
      x.isEqual = function(t, e) {
          return N(t, e)
      }
      ,
      x.isEmpty = function(t) {
          return null == t || (I(t) && (x.isArray(t) || x.isString(t) || x.isArguments(t)) ? 0 === t.length : 0 === x.keys(t).length)
      }
      ,
      x.isElement = function(t) {
          return !(!t || 1 !== t.nodeType)
      }
      ,
      x.isArray = m || function(t) {
          return "[object Array]" === p.call(t)
      }
      ,
      x.isObject = function(t) {
          var e = typeof t;
          return "function" === e || "object" === e && !!t
      }
      ,
      x.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
          x["is" + t] = function(e) {
              return p.call(e) === "[object " + t + "]"
          }
      }),
      x.isArguments(arguments) || (x.isArguments = function(t) {
          return x.has(t, "callee")
      }
      ),
      "object" != typeof Int8Array && (x.isFunction = function(t) {
          return "function" == typeof t || !1
      }
      ),
      x.isFinite = function(t) {
          return isFinite(t) && !isNaN(parseFloat(t))
      }
      ,
      x.isNaN = function(t) {
          return x.isNumber(t) && t !== +t
      }
      ,
      x.isBoolean = function(t) {
          return !0 === t || !1 === t || "[object Boolean]" === p.call(t)
      }
      ,
      x.isNull = function(t) {
          return null === t
      }
      ,
      x.isUndefined = function(t) {
          return void 0 === t
      }
      ,
      x.has = function(t, e) {
          return null != t && g.call(t, e)
      }
      ,
      x.noConflict = function() {
          return a._ = l,
          this
      }
      ,
      x.identity = function(t) {
          return t
      }
      ,
      x.constant = function(t) {
          return function() {
              return t
          }
      }
      ,
      x.noop = function() {}
      ,
      x.property = _,
      x.propertyOf = function(t) {
          return null == t ? function() {}
          : function(e) {
              return t[e]
          }
      }
      ,
      x.matcher = x.matches = function(t) {
          return t = x.extendOwn({}, t),
          function(e) {
              return x.isMatch(e, t)
          }
      }
      ,
      x.times = function(t, e, i) {
          var n = Array(Math.max(0, t));
          e = A(e, i, 1);
          for (var o = 0; t > o; o++)
              n[o] = e(o);
          return n
      }
      ,
      x.random = function(t, e) {
          return null == e && (e = t,
          t = 0),
          t + Math.floor(Math.random() * (e - t + 1))
      }
      ,
      x.now = Date.now || function() {
          return (new Date).getTime()
      }
      ;
      var M = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;"
      }
        , B = x.invert(M)
        , P = function(t) {
          var e = function(e) {
              return t[e]
          }
            , i = "(?:" + x.keys(t).join("|") + ")"
            , n = RegExp(i)
            , o = RegExp(i, "g");
          return function(t) {
              return t = null == t ? "" : "" + t,
              n.test(t) ? t.replace(o, e) : t
          }
      };
      x.escape = P(M),
      x.unescape = P(B),
      x.result = function(t, e, i) {
          var n = null == t ? void 0 : t[e];
          return void 0 === n && (n = i),
          x.isFunction(n) ? n.call(t) : n
      }
      ;
      var H = 0;
      x.uniqueId = function(t) {
          var e = ++H + "";
          return t ? t + e : e
      }
      ,
      x.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g
      };
      var j = /(.)^/
        , V = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029"
      }
        , R = /\\|'|\r|\n|\u2028|\u2029/g
        , z = function(t) {
          return "\\" + V[t]
      };
      x.template = function(t, e, i) {
          !e && i && (e = i),
          e = x.defaults({}, e, x.templateSettings);
          var n = RegExp([(e.escape || j).source, (e.interpolate || j).source, (e.evaluate || j).source].join("|") + "|$", "g")
            , o = 0
            , r = "__p+='";
          t.replace(n, function(e, i, n, s, a) {
              return r += t.slice(o, a).replace(R, z),
              o = a + e.length,
              i ? r += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : n ? r += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : s && (r += "';\n" + s + "\n__p+='"),
              e
          }),
          r += "';\n",
          e.variable || (r = "with(obj||{}){\n" + r + "}\n"),
          r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
          try {
              var s = new Function(e.variable || "obj","_",r)
          } catch (t) {
              throw t.source = r,
              t
          }
          var a = function(t) {
              return s.call(this, t, x)
          }
            , l = e.variable || "obj";
          return a.source = "function(" + l + "){\n" + r + "}",
          a
      }
      ,
      x.chain = function(t) {
          var e = x(t);
          return e._chain = !0,
          e
      }
      ;
      var U = function(t, e) {
          return t._chain ? x(e).chain() : e
      };
      x.mixin = function(t) {
          x.each(x.functions(t), function(e) {
              var i = x[e] = t[e];
              x.prototype[e] = function() {
                  var t = [this._wrapped];
                  return h.apply(t, arguments),
                  U(this, i.apply(x, t))
              }
          })
      }
      ,
      x.mixin(x),
      x.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
          var e = c[t];
          x.prototype[t] = function() {
              var i = this._wrapped;
              return e.apply(i, arguments),
              "shift" !== t && "splice" !== t || 0 !== i.length || delete i[0],
              U(this, i)
          }
      }),
      x.each(["concat", "join", "slice"], function(t) {
          var e = c[t];
          x.prototype[t] = function() {
              return U(this, e.apply(this._wrapped, arguments))
          }
      }),
      x.prototype.value = function() {
          return this._wrapped
      }
      ,
      x.prototype.valueOf = x.prototype.toJSON = x.prototype.value,
      x.prototype.toString = function() {
          return "" + this._wrapped
      }
      ,
      void 0 === (n = function() {
          return x
      }
      .apply(e, [])) || (t.exports = n)
  }
  ).call(this)
}
, function(t, e, i) {
  var n, o, r;
  /*!
* jQuery Form Plugin
* version: 3.51.0-2014.06.20
* Requires jQuery v1.5 or later
* Copyright (c) 2014 M. Alsup
* Examples and documentation at: http://malsup.com/jquery/form/
* Project repository: https://github.com/malsup/form
* Dual licensed under the MIT and GPL licenses.
* https://github.com/malsup/form#copyright-and-license
*/
  /*!
* jQuery Form Plugin
* version: 3.51.0-2014.06.20
* Requires jQuery v1.5 or later
* Copyright (c) 2014 M. Alsup
* Examples and documentation at: http://malsup.com/jquery/form/
* Project repository: https://github.com/malsup/form
* Dual licensed under the MIT and GPL licenses.
* https://github.com/malsup/form#copyright-and-license
*/
  !function(s) {
      "use strict";
      o = [i(0)],
      void 0 === (r = "function" == typeof (n = function(t) {
          var e = {};
          e.fileapi = void 0 !== t("<input type='file'/>").get(0).files,
          e.formdata = void 0 !== window.FormData;
          var i = !!t.fn.prop;
          function n(e) {
              var i = e.data;
              e.isDefaultPrevented() || (e.preventDefault(),
              t(e.target).ajaxSubmit(i))
          }
          function o(e) {
              var i = e.target
                , n = t(i);
              if (!n.is("[type=submit],[type=image]")) {
                  var o = n.closest("[type=submit]");
                  if (0 === o.length)
                      return;
                  i = o[0]
              }
              var r = this;
              if (r.clk = i,
              "image" == i.type)
                  if (void 0 !== e.offsetX)
                      r.clk_x = e.offsetX,
                      r.clk_y = e.offsetY;
                  else if ("function" == typeof t.fn.offset) {
                      var s = n.offset();
                      r.clk_x = e.pageX - s.left,
                      r.clk_y = e.pageY - s.top
                  } else
                      r.clk_x = e.pageX - i.offsetLeft,
                      r.clk_y = e.pageY - i.offsetTop;
              setTimeout(function() {
                  r.clk = r.clk_x = r.clk_y = null
              }, 100)
          }
          function r() {
              if (t.fn.ajaxSubmit.debug) {
                  var e = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                  window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e)
              }
          }
          t.fn.attr2 = function() {
              if (!i)
                  return this.attr.apply(this, arguments);
              var t = this.prop.apply(this, arguments);
              return t && t.jquery || "string" == typeof t ? t : this.attr.apply(this, arguments)
          }
          ,
          t.fn.ajaxSubmit = function(n) {
              if (!this.length)
                  return r("ajaxSubmit: skipping submit process - no element selected"),
                  this;
              var o, s, a, l = this;
              "function" == typeof n ? n = {
                  success: n
              } : void 0 === n && (n = {}),
              o = n.type || this.attr2("method"),
              s = n.url || this.attr2("action"),
              (a = (a = "string" == typeof s ? t.trim(s) : "") || window.location.href || "") && (a = (a.match(/^([^#]+)/) || [])[1]),
              n = t.extend(!0, {
                  url: a,
                  success: t.ajaxSettings.success,
                  type: o || t.ajaxSettings.type,
                  iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
              }, n);
              var c = {};
              if (this.trigger("form-pre-serialize", [this, n, c]),
              c.veto)
                  return r("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),
                  this;
              if (n.beforeSerialize && !1 === n.beforeSerialize(this, n))
                  return r("ajaxSubmit: submit aborted via beforeSerialize callback"),
                  this;
              var d = n.traditional;
              void 0 === d && (d = t.ajaxSettings.traditional);
              var u, h = [], f = this.formToArray(n.semantic, h);
              if (n.data && (n.extraData = n.data,
              u = t.param(n.data, d)),
              n.beforeSubmit && !1 === n.beforeSubmit(f, this, n))
                  return r("ajaxSubmit: submit aborted via beforeSubmit callback"),
                  this;
              if (this.trigger("form-submit-validate", [f, this, n, c]),
              c.veto)
                  return r("ajaxSubmit: submit vetoed via form-submit-validate trigger"),
                  this;
              var p = t.param(f, d);
              u && (p = p ? p + "&" + u : u),
              "GET" == n.type.toUpperCase() ? (n.url += (n.url.indexOf("?") >= 0 ? "&" : "?") + p,
              n.data = null) : n.data = p;
              var g = [];
              if (n.resetForm && g.push(function() {
                  l.resetForm()
              }),
              n.clearForm && g.push(function() {
                  l.clearForm(n.includeHidden)
              }),
              !n.dataType && n.target) {
                  var m = n.success || function() {}
                  ;
                  g.push(function(e) {
                      var i = n.replaceTarget ? "replaceWith" : "html";
                      t(n.target)[i](e).each(m, arguments)
                  })
              } else
                  n.success && g.push(n.success);
              if (n.success = function(t, e, i) {
                  for (var o = n.context || this, r = 0, s = g.length; r < s; r++)
                      g[r].apply(o, [t, e, i || l, l])
              }
              ,
              n.error) {
                  var v = n.error;
                  n.error = function(t, e, i) {
                      var o = n.context || this;
                      v.apply(o, [t, e, i, l])
                  }
              }
              if (n.complete) {
                  var y = n.complete;
                  n.complete = function(t, e) {
                      var i = n.context || this;
                      y.apply(i, [t, e, l])
                  }
              }
              var b = t("input[type=file]:enabled", this).filter(function() {
                  return "" !== t(this).val()
              })
                , w = b.length > 0
                , x = "multipart/form-data"
                , A = l.attr("enctype") == x || l.attr("encoding") == x
                , C = e.fileapi && e.formdata;
              r("fileAPI :" + C);
              var S, T = (w || A) && !C;
              !1 !== n.iframe && (n.iframe || T) ? n.closeKeepAlive ? t.get(n.closeKeepAlive, function() {
                  S = E(f)
              }) : S = E(f) : S = (w || A) && C ? function(e) {
                  for (var i = new FormData, r = 0; r < e.length; r++)
                      i.append(e[r].name, e[r].value);
                  if (n.extraData) {
                      var s = function(e) {
                          var i, o, r = t.param(e, n.traditional).split("&"), s = r.length, a = [];
                          for (i = 0; i < s; i++)
                              r[i] = r[i].replace(/\+/g, " "),
                              o = r[i].split("="),
                              a.push([decodeURIComponent(o[0]), decodeURIComponent(o[1])]);
                          return a
                      }(n.extraData);
                      for (r = 0; r < s.length; r++)
                          s[r] && i.append(s[r][0], s[r][1])
                  }
                  n.data = null;
                  var a = t.extend(!0, {}, t.ajaxSettings, n, {
                      contentType: !1,
                      processData: !1,
                      cache: !1,
                      type: o || "POST"
                  });
                  n.uploadProgress && (a.xhr = function() {
                      var e = t.ajaxSettings.xhr();
                      return e.upload && e.upload.addEventListener("progress", function(t) {
                          var e = 0
                            , i = t.loaded || t.position
                            , o = t.total;
                          t.lengthComputable && (e = Math.ceil(i / o * 100)),
                          n.uploadProgress(t, i, o, e)
                      }, !1),
                      e
                  }
                  );
                  a.data = null;
                  var l = a.beforeSend;
                  return a.beforeSend = function(t, e) {
                      n.formData ? e.data = n.formData : e.data = i,
                      l && l.call(this, t, e)
                  }
                  ,
                  t.ajax(a)
              }(f) : t.ajax(n),
              l.removeData("jqxhr").data("jqxhr", S);
              for (var _ = 0; _ < h.length; _++)
                  h[_] = null;
              return this.trigger("form-submit-notify", [this, n]),
              this;
              function E(e) {
                  var s, a, c, d, u, f, p, g, m, v, y, b, w = l[0], x = t.Deferred();
                  if (x.abort = function(t) {
                      g.abort(t)
                  }
                  ,
                  e)
                      for (a = 0; a < h.length; a++)
                          s = t(h[a]),
                          i ? s.prop("disabled", !1) : s.removeAttr("disabled");
                  if ((c = t.extend(!0, {}, t.ajaxSettings, n)).context = c.context || c,
                  u = "jqFormIO" + (new Date).getTime(),
                  c.iframeTarget ? (f = t(c.iframeTarget),
                  (v = f.attr2("name")) ? u = v : f.attr2("name", u)) : (f = t('<iframe name="' + u + '" src="' + c.iframeSrc + '" />')).css({
                      position: "absolute",
                      top: "-1000px",
                      left: "-1000px"
                  }),
                  p = f[0],
                  g = {
                      aborted: 0,
                      responseText: null,
                      responseXML: null,
                      status: 0,
                      statusText: "n/a",
                      getAllResponseHeaders: function() {},
                      getResponseHeader: function() {},
                      setRequestHeader: function() {},
                      abort: function(e) {
                          var i = "timeout" === e ? "timeout" : "aborted";
                          r("aborting upload... " + i),
                          this.aborted = 1;
                          try {
                              p.contentWindow.document.execCommand && p.contentWindow.document.execCommand("Stop")
                          } catch (t) {}
                          f.attr("src", c.iframeSrc),
                          g.error = i,
                          c.error && c.error.call(c.context, g, i, e),
                          d && t.event.trigger("ajaxError", [g, c, i]),
                          c.complete && c.complete.call(c.context, g, i)
                      }
                  },
                  (d = c.global) && 0 == t.active++ && t.event.trigger("ajaxStart"),
                  d && t.event.trigger("ajaxSend", [g, c]),
                  c.beforeSend && !1 === c.beforeSend.call(c.context, g, c))
                      return c.global && t.active--,
                      x.reject(),
                      x;
                  if (g.aborted)
                      return x.reject(),
                      x;
                  (m = w.clk) && (v = m.name) && !m.disabled && (c.extraData = c.extraData || {},
                  c.extraData[v] = m.value,
                  "image" == m.type && (c.extraData[v + ".x"] = w.clk_x,
                  c.extraData[v + ".y"] = w.clk_y));
                  var A = 1
                    , C = 2;
                  function S(t) {
                      var e = null;
                      try {
                          t.contentWindow && (e = t.contentWindow.document)
                      } catch (t) {
                          r("cannot get iframe.contentWindow document: " + t)
                      }
                      if (e)
                          return e;
                      try {
                          e = t.contentDocument ? t.contentDocument : t.document
                      } catch (i) {
                          r("cannot get iframe.contentDocument: " + i),
                          e = t.document
                      }
                      return e
                  }
                  var T = t("meta[name=csrf-token]").attr("content")
                    , _ = t("meta[name=csrf-param]").attr("content");
                  function E() {
                      var e = l.attr2("target")
                        , i = l.attr2("action")
                        , n = l.attr("enctype") || l.attr("encoding") || "multipart/form-data";
                      w.setAttribute("target", u),
                      o && !/post/i.test(o) || w.setAttribute("method", "POST"),
                      i != c.url && w.setAttribute("action", c.url),
                      c.skipEncodingOverride || o && !/post/i.test(o) || l.attr({
                          encoding: "multipart/form-data",
                          enctype: "multipart/form-data"
                      }),
                      c.timeout && (b = setTimeout(function() {
                          y = !0,
                          $(A)
                      }, c.timeout));
                      var s = [];
                      try {
                          if (c.extraData)
                              for (var a in c.extraData)
                                  c.extraData.hasOwnProperty(a) && (t.isPlainObject(c.extraData[a]) && c.extraData[a].hasOwnProperty("name") && c.extraData[a].hasOwnProperty("value") ? s.push(t('<input type="hidden" name="' + c.extraData[a].name + '">').val(c.extraData[a].value).appendTo(w)[0]) : s.push(t('<input type="hidden" name="' + a + '">').val(c.extraData[a]).appendTo(w)[0]));
                          c.iframeTarget || f.appendTo("body"),
                          p.attachEvent ? p.attachEvent("onload", $) : p.addEventListener("load", $, !1),
                          setTimeout(function t() {
                              try {
                                  var e = S(p).readyState;
                                  r("state = " + e),
                                  e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                              } catch (t) {
                                  r("Server abort: ", t, " (", t.name, ")"),
                                  $(C),
                                  b && clearTimeout(b),
                                  b = void 0
                              }
                          }, 15);
                          try {
                              w.submit()
                          } catch (t) {
                              var d = document.createElement("form").submit;
                              d.apply(w)
                          }
                      } finally {
                          w.setAttribute("action", i),
                          w.setAttribute("enctype", n),
                          e ? w.setAttribute("target", e) : l.removeAttr("target"),
                          t(s).remove()
                      }
                  }
                  _ && T && (c.extraData = c.extraData || {},
                  c.extraData[_] = T),
                  c.forceSync ? E() : setTimeout(E, 10);
                  var k, I, F, D = 50;
                  function $(e) {
                      if (!g.aborted && !F) {
                          if ((I = S(p)) || (r("cannot access response document"),
                          e = C),
                          e === A && g)
                              return g.abort("timeout"),
                              void x.reject(g, "timeout");
                          if (e == C && g)
                              return g.abort("server abort"),
                              void x.reject(g, "error", "server abort");
                          if (I && I.location.href != c.iframeSrc || y) {
                              p.detachEvent ? p.detachEvent("onload", $) : p.removeEventListener("load", $, !1);
                              var i, n = "success";
                              try {
                                  if (y)
                                      throw "timeout";
                                  var o = "xml" == c.dataType || I.XMLDocument || t.isXMLDoc(I);
                                  if (r("isXml=" + o),
                                  !o && window.opera && (null === I.body || !I.body.innerHTML) && --D)
                                      return r("requeing onLoad callback, DOM not available"),
                                      void setTimeout($, 250);
                                  var s = I.body ? I.body : I.documentElement;
                                  g.responseText = s ? s.innerHTML : null,
                                  g.responseXML = I.XMLDocument ? I.XMLDocument : I,
                                  o && (c.dataType = "xml"),
                                  g.getResponseHeader = function(t) {
                                      var e = {
                                          "content-type": c.dataType
                                      };
                                      return e[t.toLowerCase()]
                                  }
                                  ,
                                  s && (g.status = Number(s.getAttribute("status")) || g.status,
                                  g.statusText = s.getAttribute("statusText") || g.statusText);
                                  var a = (c.dataType || "").toLowerCase()
                                    , l = /(json|script|text)/.test(a);
                                  if (l || c.textarea) {
                                      var u = I.getElementsByTagName("textarea")[0];
                                      if (u)
                                          g.responseText = u.value,
                                          g.status = Number(u.getAttribute("status")) || g.status,
                                          g.statusText = u.getAttribute("statusText") || g.statusText;
                                      else if (l) {
                                          var h = I.getElementsByTagName("pre")[0]
                                            , m = I.getElementsByTagName("body")[0];
                                          h ? g.responseText = h.textContent ? h.textContent : h.innerText : m && (g.responseText = m.textContent ? m.textContent : m.innerText)
                                      }
                                  } else
                                      "xml" == a && !g.responseXML && g.responseText && (g.responseXML = L(g.responseText));
                                  try {
                                      k = N(g, a, c)
                                  } catch (t) {
                                      n = "parsererror",
                                      g.error = i = t || n
                                  }
                              } catch (t) {
                                  r("error caught: ", t),
                                  n = "error",
                                  g.error = i = t || n
                              }
                              g.aborted && (r("upload aborted"),
                              n = null),
                              g.status && (n = g.status >= 200 && g.status < 300 || 304 === g.status ? "success" : "error"),
                              "success" === n ? (c.success && c.success.call(c.context, k, "success", g),
                              x.resolve(g.responseText, "success", g),
                              d && t.event.trigger("ajaxSuccess", [g, c])) : n && (void 0 === i && (i = g.statusText),
                              c.error && c.error.call(c.context, g, n, i),
                              x.reject(g, "error", i),
                              d && t.event.trigger("ajaxError", [g, c, i])),
                              d && t.event.trigger("ajaxComplete", [g, c]),
                              d && !--t.active && t.event.trigger("ajaxStop"),
                              c.complete && c.complete.call(c.context, g, n),
                              F = !0,
                              c.timeout && clearTimeout(b),
                              setTimeout(function() {
                                  c.iframeTarget ? f.attr("src", c.iframeSrc) : f.remove(),
                                  g.responseXML = null
                              }, 100)
                          }
                      }
                  }
                  var L = t.parseXML || function(t, e) {
                      return window.ActiveXObject ? ((e = new ActiveXObject("Microsoft.XMLDOM")).async = "false",
                      e.loadXML(t)) : e = (new DOMParser).parseFromString(t, "text/xml"),
                      e && e.documentElement && "parsererror" != e.documentElement.nodeName ? e : null
                  }
                    , O = t.parseJSON || function(t) {
                      return window.eval("(" + t + ")")
                  }
                    , N = function(e, i, n) {
                      var o = e.getResponseHeader("content-type") || ""
                        , r = "xml" === i || !i && o.indexOf("xml") >= 0
                        , s = r ? e.responseXML : e.responseText;
                      return r && "parsererror" === s.documentElement.nodeName && t.error && t.error("parsererror"),
                      n && n.dataFilter && (s = n.dataFilter(s, i)),
                      "string" == typeof s && ("json" === i || !i && o.indexOf("json") >= 0 ? s = O(s) : ("script" === i || !i && o.indexOf("javascript") >= 0) && t.globalEval(s)),
                      s
                  };
                  return x
              }
          }
          ,
          t.fn.ajaxForm = function(e) {
              if ((e = e || {}).delegation = e.delegation && t.isFunction(t.fn.on),
              !e.delegation && 0 === this.length) {
                  var i = {
                      s: this.selector,
                      c: this.context
                  };
                  return !t.isReady && i.s ? (r("DOM not ready, queuing ajaxForm"),
                  t(function() {
                      t(i.s, i.c).ajaxForm(e)
                  }),
                  this) : (r("terminating; zero elements found by selector" + (t.isReady ? "" : " (DOM not ready)")),
                  this)
              }
              return e.delegation ? (t(document).off("submit.form-plugin", this.selector, n).off("click.form-plugin", this.selector, o).on("submit.form-plugin", this.selector, e, n).on("click.form-plugin", this.selector, e, o),
              this) : this.ajaxFormUnbind().bind("submit.form-plugin", e, n).bind("click.form-plugin", e, o)
          }
          ,
          t.fn.ajaxFormUnbind = function() {
              return this.unbind("submit.form-plugin click.form-plugin")
          }
          ,
          t.fn.formToArray = function(i, n) {
              var o = [];
              if (0 === this.length)
                  return o;
              var r, s, a, l, c, d, u, h, f = this[0], p = this.attr("id"), g = i ? f.getElementsByTagName("*") : f.elements;
              if (g && !/MSIE [678]/.test(navigator.userAgent) && (g = t(g).get()),
              p && (r = t(':input[form="' + p + '"]').get()).length && (g = (g || []).concat(r)),
              !g || !g.length)
                  return o;
              for (s = 0,
              u = g.length; s < u; s++)
                  if (d = g[s],
                  (l = d.name) && !d.disabled)
                      if (i && f.clk && "image" == d.type)
                          f.clk == d && (o.push({
                              name: l,
                              value: t(d).val(),
                              type: d.type
                          }),
                          o.push({
                              name: l + ".x",
                              value: f.clk_x
                          }, {
                              name: l + ".y",
                              value: f.clk_y
                          }));
                      else if ((c = t.fieldValue(d, !0)) && c.constructor == Array)
                          for (n && n.push(d),
                          a = 0,
                          h = c.length; a < h; a++)
                              o.push({
                                  name: l,
                                  value: c[a]
                              });
                      else if (e.fileapi && "file" == d.type) {
                          n && n.push(d);
                          var m = d.files;
                          if (m.length)
                              for (a = 0; a < m.length; a++)
                                  o.push({
                                      name: l,
                                      value: m[a],
                                      type: d.type
                                  });
                          else
                              o.push({
                                  name: l,
                                  value: "",
                                  type: d.type
                              })
                      } else
                          null != c && (n && n.push(d),
                          o.push({
                              name: l,
                              value: c,
                              type: d.type,
                              required: d.required
                          }));
              if (!i && f.clk) {
                  var v = t(f.clk)
                    , y = v[0];
                  (l = y.name) && !y.disabled && "image" == y.type && (o.push({
                      name: l,
                      value: v.val()
                  }),
                  o.push({
                      name: l + ".x",
                      value: f.clk_x
                  }, {
                      name: l + ".y",
                      value: f.clk_y
                  }))
              }
              return o
          }
          ,
          t.fn.formSerialize = function(e) {
              return t.param(this.formToArray(e))
          }
          ,
          t.fn.fieldSerialize = function(e) {
              var i = [];
              return this.each(function() {
                  var n = this.name;
                  if (n) {
                      var o = t.fieldValue(this, e);
                      if (o && o.constructor == Array)
                          for (var r = 0, s = o.length; r < s; r++)
                              i.push({
                                  name: n,
                                  value: o[r]
                              });
                      else
                          null != o && i.push({
                              name: this.name,
                              value: o
                          })
                  }
              }),
              t.param(i)
          }
          ,
          t.fn.fieldValue = function(e) {
              for (var i = [], n = 0, o = this.length; n < o; n++) {
                  var r = this[n]
                    , s = t.fieldValue(r, e);
                  null == s || s.constructor == Array && !s.length || (s.constructor == Array ? t.merge(i, s) : i.push(s))
              }
              return i
          }
          ,
          t.fieldValue = function(e, i) {
              var n = e.name
                , o = e.type
                , r = e.tagName.toLowerCase();
              if (void 0 === i && (i = !0),
              i && (!n || e.disabled || "reset" == o || "button" == o || ("checkbox" == o || "radio" == o) && !e.checked || ("submit" == o || "image" == o) && e.form && e.form.clk != e || "select" == r && -1 == e.selectedIndex))
                  return null;
              if ("select" == r) {
                  var s = e.selectedIndex;
                  if (s < 0)
                      return null;
                  for (var a = [], l = e.options, c = "select-one" == o, d = c ? s + 1 : l.length, u = c ? s : 0; u < d; u++) {
                      var h = l[u];
                      if (h.selected) {
                          var f = h.value;
                          if (f || (f = h.attributes && h.attributes.value && !h.attributes.value.specified ? h.text : h.value),
                          c)
                              return f;
                          a.push(f)
                      }
                  }
                  return a
              }
              return t(e).val()
          }
          ,
          t.fn.clearForm = function(e) {
              return this.each(function() {
                  t("input,select,textarea", this).clearFields(e)
              })
          }
          ,
          t.fn.clearFields = t.fn.clearInputs = function(e) {
              var i = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
              return this.each(function() {
                  var n = this.type
                    , o = this.tagName.toLowerCase();
                  i.test(n) || "textarea" == o ? this.value = "" : "checkbox" == n || "radio" == n ? this.checked = !1 : "select" == o ? this.selectedIndex = -1 : "file" == n ? /MSIE/.test(navigator.userAgent) ? t(this).replaceWith(t(this).clone(!0)) : t(this).val("") : e && (!0 === e && /hidden/.test(n) || "string" == typeof e && t(this).is(e)) && (this.value = "")
              })
          }
          ,
          t.fn.resetForm = function() {
              return this.each(function() {
                  ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
              })
          }
          ,
          t.fn.enable = function(t) {
              return void 0 === t && (t = !0),
              this.each(function() {
                  this.disabled = !t
              })
          }
          ,
          t.fn.selected = function(e) {
              return void 0 === e && (e = !0),
              this.each(function() {
                  var i = this.type;
                  if ("checkbox" == i || "radio" == i)
                      this.checked = e;
                  else if ("option" == this.tagName.toLowerCase()) {
                      var n = t(this).parent("select");
                      e && n[0] && "select-one" == n[0].type && n.find("option").selected(!1),
                      this.selected = e
                  }
              })
          }
          ,
          t.fn.ajaxSubmit.debug = !1
      }
      ) ? n.apply(e, o) : n) || (t.exports = r)
  }()
}
, function(t, e, i) {
  var n = i(0)
    , o = i(11)
    , r = i(13)
    , s = {
      containerId: "toast-container",
      positionClass: "toast-top-right",
      iconClass: "toast-just-text toast-success",
      timeOut: 5e3
  };
  n.alert = {},
  n.alert.success = function(t) {
      var e = n.extend({}, s);
      e.iconClass = "toast-just-text toast-success",
      r.options = e,
      r.success(t, "")
  }
  ,
  n.alert.error = function(t) {
      var e = n.extend({}, s);
      e.iconClass = "toast-just-text toast-error",
      r.options = e,
      r.error(t, "")
  }
  ,
  n.alert.alert = function(t) {
      o.alert("Notice", t)
  }
  ,
  n.alert.confirm = function() {
      switch (o.theme("bootstrap"),
      o.okBtn("Accept"),
      o.cancelBtn("Cancel"),
      arguments.length) {
      case 1:
          o.confirm(arguments[0]);
          break;
      case 2:
          o.confirm(arguments[0], arguments[1]);
          break;
      case 3:
          o.confirm(arguments[0], arguments[1], arguments[2]);
          break;
      case 4:
          o.confirm(arguments[0], arguments[1], arguments[2], arguments[3])
      }
  }
}
, function(t, e, i) {
  (function(t) {
      var n;
      !function() {
          "use strict";
          function o() {
              var t = {
                  parent: document.body,
                  version: "1.0.12",
                  defaultOkLabel: "Ok",
                  okLabel: "Ok",
                  defaultCancelLabel: "Cancel",
                  cancelLabel: "Cancel",
                  defaultMaxLogItems: 2,
                  maxLogItems: 2,
                  promptValue: "",
                  promptPlaceholder: "",
                  closeLogOnClick: !1,
                  closeLogOnClickDefault: !1,
                  delay: 5e3,
                  defaultDelay: 5e3,
                  logContainerClass: "alertify-logs",
                  logContainerDefaultClass: "alertify-logs",
                  dialogs: {
                      buttons: {
                          holder: "<nav>{{buttons}}</nav>",
                          ok: "<button class='ok' tabindex='1'>{{ok}}</button>",
                          cancel: "<button class='cancel' tabindex='2'>{{cancel}}</button>"
                      },
                      input: "<input type='text'>",
                      message: "<p class='msg'>{{message}}</p>",
                      log: "<div class='{{class}}'>{{message}}</div>"
                  },
                  defaultDialogs: {
                      buttons: {
                          holder: "<nav>{{buttons}}</nav>",
                          ok: "<button class='ok' tabindex='1'>{{ok}}</button>",
                          cancel: "<button class='cancel' tabindex='2'>{{cancel}}</button>"
                      },
                      input: "<input type='text'>",
                      message: "<p class='msg'>{{message}}</p>",
                      log: "<div class='{{class}}'>{{message}}</div>"
                  },
                  build: function(t) {
                      var e = this.dialogs.buttons.ok
                        , i = "<div class='dialog'><div>" + this.dialogs.message.replace("{{message}}", t.message);
                      return "confirm" !== t.type && "prompt" !== t.type || (e = this.dialogs.buttons.cancel + this.dialogs.buttons.ok),
                      "prompt" === t.type && (i += this.dialogs.input),
                      (i + this.dialogs.buttons.holder + "</div></div>").replace("{{buttons}}", e).replace("{{ok}}", this.okLabel).replace("{{cancel}}", this.cancelLabel)
                  },
                  setCloseLogOnClick: function(t) {
                      this.closeLogOnClick = !!t
                  },
                  close: function(t, e) {
                      this.closeLogOnClick && t.addEventListener("click", function() {
                          r(t)
                      }),
                      0 > (e = e && !isNaN(+e) ? +e : this.delay) ? r(t) : e > 0 && setTimeout(function() {
                          r(t)
                      }, e)
                  },
                  dialog: function(t, e, i, n) {
                      return this.setup({
                          type: e,
                          message: t,
                          onOkay: i,
                          onCancel: n
                      })
                  },
                  log: function(t, e, i) {
                      var n = document.querySelectorAll(".alertify-logs > div");
                      if (n) {
                          var o = n.length - this.maxLogItems;
                          if (o >= 0)
                              for (var r = 0, s = o + 1; s > r; r++)
                                  this.close(n[r], -1)
                      }
                      this.notify(t, e, i)
                  },
                  setLogPosition: function(t) {
                      this.logContainerClass = "alertify-logs " + t
                  },
                  setupLogContainer: function() {
                      var t = document.querySelector(".alertify-logs")
                        , e = this.logContainerClass;
                      return t || ((t = document.createElement("div")).className = e,
                      this.parent.appendChild(t)),
                      t.className !== e && (t.className = e),
                      t
                  },
                  notify: function(e, i, n) {
                      var o = this.setupLogContainer()
                        , r = document.createElement("div");
                      r.className = i || "default",
                      t.logTemplateMethod ? r.innerHTML = t.logTemplateMethod(e) : r.innerHTML = e,
                      "function" == typeof n && r.addEventListener("click", n),
                      o.appendChild(r),
                      setTimeout(function() {
                          r.className += " show"
                      }, 10),
                      this.close(r, this.delay)
                  },
                  setup: function(t) {
                      function e(e) {
                          "function" != typeof e && (e = function() {}
                          ),
                          o && o.addEventListener("click", function(n) {
                              t.onOkay && "function" == typeof t.onOkay && (a ? t.onOkay(a.value, n) : t.onOkay(n)),
                              e(a ? {
                                  buttonClicked: "ok",
                                  inputValue: a.value,
                                  event: n
                              } : {
                                  buttonClicked: "ok",
                                  event: n
                              }),
                              r(i)
                          }),
                          s && s.addEventListener("click", function(n) {
                              t.onCancel && "function" == typeof t.onCancel && t.onCancel(n),
                              e({
                                  buttonClicked: "cancel",
                                  event: n
                              }),
                              r(i)
                          }),
                          a && a.addEventListener("keyup", function(t) {
                              13 === t.which && o.click()
                          })
                      }
                      var i = document.createElement("div");
                      i.className = "alertify hide",
                      i.innerHTML = this.build(t);
                      var n, o = i.querySelector(".ok"), s = i.querySelector(".cancel"), a = i.querySelector("input"), l = i.querySelector("label");
                      return a && ("string" == typeof this.promptPlaceholder && (l ? l.textContent = this.promptPlaceholder : a.placeholder = this.promptPlaceholder),
                      "string" == typeof this.promptValue && (a.value = this.promptValue)),
                      "function" == typeof Promise ? n = new Promise(e) : e(),
                      this.parent.appendChild(i),
                      setTimeout(function() {
                          i.classList.remove("hide"),
                          a && t.type && "prompt" === t.type ? (a.select(),
                          a.focus()) : o && o.focus()
                      }, 100),
                      n
                  },
                  okBtn: function(t) {
                      return this.okLabel = t,
                      this
                  },
                  setDelay: function(t) {
                      return t = t || 0,
                      this.delay = isNaN(t) ? this.defaultDelay : parseInt(t, 10),
                      this
                  },
                  cancelBtn: function(t) {
                      return this.cancelLabel = t,
                      this
                  },
                  setMaxLogItems: function(t) {
                      this.maxLogItems = parseInt(t || this.defaultMaxLogItems)
                  },
                  theme: function(t) {
                      switch (t.toLowerCase()) {
                      case "bootstrap":
                          this.dialogs.buttons.ok = "<button class='ok btn btn-primary' tabindex='1'>{{ok}}</button>",
                          this.dialogs.buttons.cancel = "<button class='cancel btn btn-default' tabindex='2'>{{cancel}}</button>",
                          this.dialogs.input = "<input type='text' class='form-control'>";
                          break;
                      case "purecss":
                          this.dialogs.buttons.ok = "<button class='ok pure-button' tabindex='1'>{{ok}}</button>",
                          this.dialogs.buttons.cancel = "<button class='cancel pure-button' tabindex='2'>{{cancel}}</button>";
                          break;
                      case "mdl":
                      case "material-design-light":
                          this.dialogs.buttons.ok = "<button class='ok mdl-button mdl-js-button mdl-js-ripple-effect'  tabindex='1'>{{ok}}</button>",
                          this.dialogs.buttons.cancel = "<button class='cancel mdl-button mdl-js-button mdl-js-ripple-effect' tabindex='2'>{{cancel}}</button>",
                          this.dialogs.input = "<div class='mdl-textfield mdl-js-textfield'><input class='mdl-textfield__input'><label class='md-textfield__label'></label></div>";
                          break;
                      case "angular-material":
                          this.dialogs.buttons.ok = "<button class='ok md-primary md-button' tabindex='1'>{{ok}}</button>",
                          this.dialogs.buttons.cancel = "<button class='cancel md-button' tabindex='2'>{{cancel}}</button>",
                          this.dialogs.input = "<div layout='column'><md-input-container md-no-float><input type='text'></md-input-container></div>";
                          break;
                      case "default":
                      default:
                          this.dialogs.buttons.ok = this.defaultDialogs.buttons.ok,
                          this.dialogs.buttons.cancel = this.defaultDialogs.buttons.cancel,
                          this.dialogs.input = this.defaultDialogs.input
                      }
                  },
                  reset: function() {
                      this.parent = document.body,
                      this.theme("default"),
                      this.okBtn(this.defaultOkLabel),
                      this.cancelBtn(this.defaultCancelLabel),
                      this.setMaxLogItems(),
                      this.promptValue = "",
                      this.promptPlaceholder = "",
                      this.delay = this.defaultDelay,
                      this.setCloseLogOnClick(this.closeLogOnClickDefault),
                      this.setLogPosition("bottom left"),
                      this.logTemplateMethod = null
                  },
                  injectCSS: function() {
                      if (!document.querySelector("#alertifyCSS")) {
                          var t = document.getElementsByTagName("head")[0]
                            , e = document.createElement("style");
                          e.type = "text/css",
                          e.id = "alertifyCSS",
                          e.innerHTML = ".alertify-logs>*{padding:12px 24px;color:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.2);border-radius:1px}.alertify-logs>*,.alertify-logs>.default{background:rgba(0,0,0,.8)}.alertify-logs>.error{background:rgba(244,67,54,.8)}.alertify-logs>.success{background:rgba(76,175,80,.9)}.alertify{position:fixed;background-color:rgba(0,0,0,.3);left:0;right:0;top:0;bottom:0;width:100%;height:100%;z-index:1}.alertify.hide{opacity:0;pointer-events:none}.alertify,.alertify.show{box-sizing:border-box;transition:all .33s cubic-bezier(.25,.8,.25,1)}.alertify,.alertify *{box-sizing:border-box}.alertify .dialog{padding:12px}.alertify .alert,.alertify .dialog{width:100%;margin:0 auto;position:relative;top:50%;transform:translateY(-50%)}.alertify .alert>*,.alertify .dialog>*{width:400px;max-width:95%;margin:0 auto;text-align:center;padding:12px;background:#fff;box-shadow:0 2px 4px -1px rgba(0,0,0,.14),0 4px 5px 0 rgba(0,0,0,.098),0 1px 10px 0 rgba(0,0,0,.084)}.alertify .alert .msg,.alertify .dialog .msg{padding:12px;margin-bottom:12px;margin:0;text-align:left}.alertify .alert input:not(.form-control),.alertify .dialog input:not(.form-control){margin-bottom:15px;width:100%;font-size:100%;padding:12px}.alertify .alert input:not(.form-control):focus,.alertify .dialog input:not(.form-control):focus{outline-offset:-2px}.alertify .alert nav,.alertify .dialog nav{text-align:right}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button),.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button){background:transparent;box-sizing:border-box;color:rgba(0,0,0,.87);position:relative;outline:0;border:0;display:inline-block;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center;padding:0 6px;margin:6px 8px;line-height:36px;min-height:36px;white-space:nowrap;min-width:88px;text-align:center;text-transform:uppercase;font-size:14px;text-decoration:none;cursor:pointer;border:1px solid transparent;border-radius:2px}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active,.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover{background-color:rgba(0,0,0,.05)}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):focus,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):focus{border:1px solid rgba(0,0,0,.1)}.alertify .alert nav button.btn,.alertify .dialog nav button.btn{margin:6px 4px}.alertify-logs{position:fixed;z-index:1}.alertify-logs.bottom,.alertify-logs:not(.top){bottom:16px}.alertify-logs.left,.alertify-logs:not(.right){left:16px}.alertify-logs.left>*,.alertify-logs:not(.right)>*{float:left;transform:translateZ(0);height:auto}.alertify-logs.left>.show,.alertify-logs:not(.right)>.show{left:0}.alertify-logs.left>*,.alertify-logs.left>.hide,.alertify-logs:not(.right)>*,.alertify-logs:not(.right)>.hide{left:-110%}.alertify-logs.right{right:16px}.alertify-logs.right>*{float:right;transform:translateZ(0)}.alertify-logs.right>.show{right:0;opacity:1}.alertify-logs.right>*,.alertify-logs.right>.hide{right:-110%;opacity:0}.alertify-logs.top{top:0}.alertify-logs>*{box-sizing:border-box;transition:all .4s cubic-bezier(.25,.8,.25,1);position:relative;clear:both;backface-visibility:hidden;perspective:1000;max-height:0;margin:0;padding:0;overflow:hidden;opacity:0;pointer-events:none}.alertify-logs>.show{margin-top:12px;opacity:1;max-height:1000px;padding:12px;pointer-events:auto}",
                          t.insertBefore(e, t.firstChild)
                      }
                  },
                  removeCSS: function() {
                      var t = document.querySelector("#alertifyCSS");
                      t && t.parentNode && t.parentNode.removeChild(t)
                  }
              };
              return t.injectCSS(),
              {
                  _$$alertify: t,
                  parent: function(e) {
                      t.parent = e
                  },
                  reset: function() {
                      return t.reset(),
                      this
                  },
                  alert: function(e, i, n) {
                      return t.dialog(e, "alert", i, n) || this
                  },
                  confirm: function(e, i, n) {
                      return t.dialog(e, "confirm", i, n) || this
                  },
                  prompt: function(e, i, n) {
                      return t.dialog(e, "prompt", i, n) || this
                  },
                  log: function(e, i) {
                      return t.log(e, "default", i),
                      this
                  },
                  theme: function(e) {
                      return t.theme(e),
                      this
                  },
                  success: function(e, i) {
                      return t.log(e, "success", i),
                      this
                  },
                  error: function(e, i) {
                      return t.log(e, "error", i),
                      this
                  },
                  cancelBtn: function(e) {
                      return t.cancelBtn(e),
                      this
                  },
                  okBtn: function(e) {
                      return t.okBtn(e),
                      this
                  },
                  delay: function(e) {
                      return t.setDelay(e),
                      this
                  },
                  placeholder: function(e) {
                      return t.promptPlaceholder = e,
                      this
                  },
                  defaultValue: function(e) {
                      return t.promptValue = e,
                      this
                  },
                  maxLogItems: function(e) {
                      return t.setMaxLogItems(e),
                      this
                  },
                  closeLogOnClick: function(e) {
                      return t.setCloseLogOnClick(!!e),
                      this
                  },
                  logPosition: function(e) {
                      return t.setLogPosition(e || ""),
                      this
                  },
                  setLogTemplate: function(e) {
                      return t.logTemplateMethod = e,
                      this
                  },
                  clearLogs: function() {
                      return t.setupLogContainer().innerHTML = "",
                      this
                  },
                  version: t.version
              }
          }
          var r = function(t) {
              if (t) {
                  var e = function() {
                      t && t.parentNode && t.parentNode.removeChild(t)
                  };
                  t.classList.remove("show"),
                  t.classList.add("hide"),
                  t.addEventListener("transitionend", e),
                  setTimeout(e, 500)
              }
          };
          if (t && t.exports) {
              t.exports = function() {
                  return new o
              }
              ;
              var s = new o;
              for (var a in s)
                  t.exports[a] = s[a]
          } else
              void 0 === (n = function() {
                  return new o
              }
              .call(e, i, e, t)) || (t.exports = n)
      }()
  }
  ).call(this, i(12)(t))
}
, function(t, e) {
  t.exports = function(t) {
      return t.webpackPolyfill || (t.deprecate = function() {}
      ,
      t.paths = [],
      t.children || (t.children = []),
      Object.defineProperty(t, "loaded", {
          enumerable: !0,
          get: function() {
              return t.l
          }
      }),
      Object.defineProperty(t, "id", {
          enumerable: !0,
          get: function() {
              return t.i
          }
      }),
      t.webpackPolyfill = 1),
      t
  }
}
, function(t, e, i) {
  var n, o;
  i(14),
  n = [i(0)],
  void 0 === (o = function(t) {
      return function() {
          function e(e, i) {
              return e || (e = s()),
              (l = t("#" + e.containerId)).length ? l : (i && (l = function(e) {
                  return (l = t("<div/>").attr("id", e.containerId).addClass(e.positionClass)).appendTo(t(e.target)),
                  l
              }(e)),
              l)
          }
          function i(e) {
              for (var i = l.children(), o = i.length - 1; o >= 0; o--)
                  n(t(i[o]), e)
          }
          function n(e, i, n) {
              var o = !(!n || !n.force) && n.force;
              return !(!e || !o && 0 !== t(":focus", e).length || (e[i.hideMethod]({
                  duration: i.hideDuration,
                  easing: i.hideEasing,
                  complete: function() {
                      a(e)
                  }
              }),
              0))
          }
          function o(t) {
              c && c(t)
          }
          function r(i) {
              function n(t) {
                  return null == t && (t = ""),
                  t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
              }
              function r(e) {
                  var i = e && !1 !== p.closeMethod ? p.closeMethod : p.hideMethod
                    , n = e && !1 !== p.closeDuration ? p.closeDuration : p.hideDuration
                    , r = e && !1 !== p.closeEasing ? p.closeEasing : p.hideEasing;
                  if (!t(":focus", v).length || e)
                      return clearTimeout(A.intervalId),
                      v[i]({
                          duration: n,
                          easing: r,
                          complete: function() {
                              a(v),
                              clearTimeout(m),
                              p.onHidden && "hidden" !== C.state && p.onHidden(),
                              C.state = "hidden",
                              C.endTime = new Date,
                              o(C)
                          }
                      })
              }
              function c() {
                  (p.timeOut > 0 || p.extendedTimeOut > 0) && (m = setTimeout(r, p.extendedTimeOut),
                  A.maxHideTime = parseFloat(p.extendedTimeOut),
                  A.hideEta = (new Date).getTime() + A.maxHideTime)
              }
              function h() {
                  clearTimeout(m),
                  A.hideEta = 0,
                  v.stop(!0, !0)[p.showMethod]({
                      duration: p.showDuration,
                      easing: p.showEasing
                  })
              }
              function f() {
                  var t = (A.hideEta - (new Date).getTime()) / A.maxHideTime * 100;
                  w.width(t + "%")
              }
              var p = s()
                , g = i.iconClass || p.iconClass;
              if (void 0 !== i.optionsOverride && (p = t.extend(p, i.optionsOverride),
              g = i.optionsOverride.iconClass || g),
              !function(t, e) {
                  if (t.preventDuplicates) {
                      if (e.message === d)
                          return !0;
                      d = e.message
                  }
                  return !1
              }(p, i)) {
                  u++,
                  l = e(p, !0);
                  var m = null
                    , v = t("<div/>")
                    , y = t("<div/>")
                    , b = t("<div/>")
                    , w = t("<div/>")
                    , x = t(p.closeHtml)
                    , A = {
                      intervalId: null,
                      hideEta: null,
                      maxHideTime: null
                  }
                    , C = {
                      toastId: u,
                      state: "visible",
                      startTime: new Date,
                      options: p,
                      map: i
                  };
                  return i.iconClass && v.addClass(p.toastClass).addClass(g),
                  function() {
                      if (i.title) {
                          var t = i.title;
                          p.escapeHtml && (t = n(i.title)),
                          y.append(t).addClass(p.titleClass),
                          v.append(y)
                      }
                  }(),
                  function() {
                      if (i.message) {
                          var t = i.message;
                          p.escapeHtml && (t = n(i.message)),
                          b.append(t).addClass(p.messageClass),
                          v.append(b)
                      }
                  }(),
                  p.closeButton && (x.addClass(p.closeClass).attr("role", "button"),
                  v.prepend(x)),
                  p.progressBar && (w.addClass(p.progressClass),
                  v.prepend(w)),
                  p.rtl && v.addClass("rtl"),
                  p.newestOnTop ? l.prepend(v) : l.append(v),
                  function() {
                      var t = "";
                      switch (i.iconClass) {
                      case "toast-success":
                      case "toast-info":
                          t = "polite";
                          break;
                      default:
                          t = "assertive"
                      }
                      v.attr("aria-live", t)
                  }(),
                  v.hide(),
                  v[p.showMethod]({
                      duration: p.showDuration,
                      easing: p.showEasing,
                      complete: p.onShown
                  }),
                  p.timeOut > 0 && (m = setTimeout(r, p.timeOut),
                  A.maxHideTime = parseFloat(p.timeOut),
                  A.hideEta = (new Date).getTime() + A.maxHideTime,
                  p.progressBar && (A.intervalId = setInterval(f, 10))),
                  p.closeOnHover && v.hover(h, c),
                  !p.onclick && p.tapToDismiss && v.click(r),
                  p.closeButton && x && x.click(function(t) {
                      t.stopPropagation ? t.stopPropagation() : void 0 !== t.cancelBubble && !0 !== t.cancelBubble && (t.cancelBubble = !0),
                      p.onCloseClick && p.onCloseClick(t),
                      r(!0)
                  }),
                  p.onclick && v.click(function(t) {
                      p.onclick(t),
                      r()
                  }),
                  o(C),
                  p.debug && console && console.log(C),
                  v
              }
          }
          function s() {
              return t.extend({}, {
                  tapToDismiss: !0,
                  toastClass: "toast",
                  containerId: "toast-container",
                  debug: !1,
                  showMethod: "fadeIn",
                  showDuration: 300,
                  showEasing: "swing",
                  onShown: void 0,
                  hideMethod: "fadeOut",
                  hideDuration: 1e3,
                  hideEasing: "swing",
                  onHidden: void 0,
                  closeMethod: !1,
                  closeDuration: !1,
                  closeEasing: !1,
                  closeOnHover: !0,
                  extendedTimeOut: 1e3,
                  iconClasses: {
                      error: "toast-error",
                      info: "toast-info",
                      success: "toast-success",
                      warning: "toast-warning"
                  },
                  iconClass: "toast-info",
                  positionClass: "toast-top-right",
                  timeOut: 5e3,
                  titleClass: "toast-title",
                  messageClass: "toast-message",
                  escapeHtml: !1,
                  target: "body",
                  closeHtml: '<button type="button">&times;</button>',
                  closeClass: "toast-close-button",
                  newestOnTop: !0,
                  preventDuplicates: !1,
                  progressBar: !1,
                  progressClass: "toast-progress",
                  rtl: !1
              }, f.options)
          }
          function a(t) {
              l || (l = e()),
              t.is(":visible") || (t.remove(),
              t = null,
              0 === l.children().length && (l.remove(),
              d = void 0))
          }
          var l, c, d, u = 0, h = {
              error: "error",
              info: "info",
              success: "success",
              warning: "warning"
          }, f = {
              clear: function(t, o) {
                  var r = s();
                  l || e(r),
                  n(t, r, o) || i(r)
              },
              remove: function(i) {
                  var n = s();
                  return l || e(n),
                  i && 0 === t(":focus", i).length ? void a(i) : void (l.children().length && l.remove())
              },
              error: function(t, e, i) {
                  return r({
                      type: h.error,
                      iconClass: s().iconClasses.error,
                      message: t,
                      optionsOverride: i,
                      title: e
                  })
              },
              getContainer: e,
              info: function(t, e, i) {
                  return r({
                      type: h.info,
                      iconClass: s().iconClasses.info,
                      message: t,
                      optionsOverride: i,
                      title: e
                  })
              },
              options: {},
              subscribe: function(t) {
                  c = t
              },
              success: function(t, e, i) {
                  return r({
                      type: h.success,
                      iconClass: s().iconClasses.success,
                      message: t,
                      optionsOverride: i,
                      title: e
                  })
              },
              version: "2.1.3",
              warning: function(t, e, i) {
                  return r({
                      type: h.warning,
                      iconClass: s().iconClasses.warning,
                      message: t,
                      optionsOverride: i,
                      title: e
                  })
              }
          };
          return f
      }()
  }
  .apply(e, n)) || (t.exports = o)
}
, function(t, e) {
  t.exports = function() {
      throw new Error("define cannot be used indirect")
  }
}
, function(t, e) {
  !function(t, e) {
      var i = {
          color: "rgba(255, 255, 255, 0.8)",
          custom: "",
          fade: !0,
          fontawesome: "",
          image: "data:image/gif;base64,R0lGODlhZABkAKUAADQyNJyanGRmZMzOzExOTLS2tISChOzq7ERCRKyqrHR2dNze3FxaXMTCxIyOjPT29Dw6PKSipGxubNTW1FRWVLy+vIyKjPTy9ExKTLSytHx+fOTm5GRiZMzKzJSWlPz+/DQ2NJyenGxqbNTS1FRSVLy6vISGhOzu7ERGRKyurHx6fOTi5FxeXMTGxJSSlPz6/Dw+PKSmpHRydNza3P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBQA0ACwAAAAAZABkAAAG/kCacEgsGo/IJO1SEEBAosJFSa1ar9jswQQBeAEgyyFLLpvNL893DXC9zvC4XDggsb+EwXzPtyZAd14gCX2FhkQRgIEAIYeOSAMWIgoxY1UpioEpj5xCFx6ZACQVH1QjFIt5nY8PIV1sKCtUaYsOpVcfb6tWM6iBJlUnJqEAJidYKxYaFbq7SSXEXxQPVQ8VEjBQFVNXDypeKCPOSR8ZiwAox50rLF8Z40kV0V7Tqw8WXgQT8EgzDIvAdm1I4WFAM35EPqSAcYeAul25ECZ5EYPAGgH7JGo08mFACAcOChy4tbHkkA8PDppcybKly5cwY8rc8+HEiBYDRs509qKF/goCCAhIaEBy56MBFtcQaGCU04ukbFgsaErlQAQFETZgGbAIRAmqEx0oskDNirlFMcAieWDHCwtZVkqce6fWyAMBXyQ8pHKCYcOMdROOEIBBQIssAQI5KBs44YEWcLGcELvGWONCHyZ40OBhQtHLoEOLHk26tOnTqFOrXs26tevXEj+0MCFDBTPYSi64QPAFhgFLrl8c2HCC5IsUvNeAiMB49YsCFBCwICrkgIRABICvboEBz1QaC7oHmuEa1JdBQhZAZfOdtXlBdE8oCERBa+tTX94KeZ58TYjPqfWkAAsaiDPEcX6B4UFzrV1wAoNCbBCCCSG0h9uFGGao4YYc/nbo4YcghijiiCW9sMEMG6i04QsjKKCICICJ9sACE6wAoRILcMAGBRZe9kIIDKDAQALcWBGCYgDWVcIrACBQQpJHtHOHAHs1dt0aGhRJhZRR2QeaCGwooKUSBgSiwY1qRcBGDCpCkqAgh4l2wpUAKOBlFS9UQIEiBFRQ2gsDFKAHGR8skEAIKSwAJYmMNuroo5BGSkSbHa6wmQEljNnJBzOMUGVJMxCgCAwWfOrIARpggAIFBSw6zgl4sZGAq3uc8M0ag5bUAApT0jrHAG8CoMFKBfQnDZp9tDDlSh3wyoYEvsoxgrNfOLDSA2Uq5ycuKzQAGaVHnOBCJrGwtEKsUwDAEAOyRbyQgQAoIMBBAeAasUEMArBgQq4rndCCB4myWwSwa8DAbzXDPRBtU/M9++E/O35I5xcCfNgAMdt2+EACe4JAAZsgvrBABRUsUK+knAQBACH5BAkFADQALAAAAABkAGQAAAb+QJpwSCwaj8gk7bNKaVSx2UtJrVqv2CytwgJ4AZTCVEsum7ED0veLaJzfcPhDsV4LTvG83jpR170oLXuDhEQdBH9eMBVXHwcHF4VnLwMJGQtXfYkAKB1VlBoMFAIekZJYLxMUXiAQBitVc5sseEovATB1LBMfp1Yjq3UyD1UtKH8gBVUNIIkSsL5KDxabjFQfBYhfMCljSQ8Cm8m90UgzXYkaVi8LMSoKIVJVExibACbE5Ucj2n8CvsbsScinr8gCBpvUnaJnTwPBgkMeGNhUwtcDdIlSkINI5NyfgdE6NPt4gOORCQJycbKwodyHEMfszDCJ5ESDFClGPLTYwgT+i1EhWtIcKu3AhhMbiSpdyrSp06dQoya5sOKEN6kcTyRQIEBGgFpYC14woRIACAklw+oLkMjATrVJUhWQ16jfGgoT4Fb50AIRCmtWLoysE0gvlRfUvGi4agtCok6GbYX44iApFTr+hEau6YKFAc1WOsT8Mm6zLataXlQIZrYEY9N6PjwYkKLFBcuwc+vezbu379/AgwsfTry48ePIk1950CFFA1PKr6GEQJ1ChdfIcS/gUAdDC9zFHzTI0ILgiwiDv6iAjjxFLgQJhpzQkIhAWuQXEHohkO8C/T8UgGbcA/qBkc956SnG3nHuAcANESuEs0Yg4BH3QgsFlEfEBzP+CNAMCAR8F91eM1QwwVsjpqjiiiy26OKLMMYo44w01gjXBy/kWCGLFxQgAgEsxADWbw9AosUDISCwhgUowvbBBBYoYMEA2CExgZJrwFCRb/l9wcJMV0SQiAm/ZVBHDDsWMdkfGqRpWAJ1hFClEQ0kEsJvE5S1CBYbSFAHAQLq9kIMx4AQQ5NIrKABCiDAIAAmwX1wVBkPTFBBBwvaqOmmnHbq6aegKiHpADrR+EIIBCCAggILuKnHCw1IwIADgQ71QQx1iABNNC806AUFmdJ0QoFfaFTOASLUkUJTE9jlRWXlLMDas01tQKwXIbgKxwEy1KFMUx78mRcWJ0wwwgFZ2grxQQn9CIBoVgqMRIAYjUxgAAkkKNDBnEY80JMGMdRK1AW0FbABv0WcgBEABOy63APpGlbAHx7IKGYdZMZY55kynuDnFwHOeIAHLLDgAKQzvnDCwaEqFQQAIfkECQUANAAsAAAAAGQAZAAABv5AmnBILBqPyKTwMqtUZheldEqtWq/ClQMDAMBMC6x4TMZeZKCuWnAou9/wGERN93zg+Dz1JaHTWSd6goNEJwJ+ahQrhIxJLxuBVQ8iiF0sG1QPJSYqHhONZh4YIBAsJQ9UEWmIJlQTHH4BkaBSJxZ+MCl3tYd+BItSGwyIICGotEoFMIgos0ozGnQCA1QhlQAUn8hIDwbXBVUnAyEhLSe7Si8s1wAF6NuFMtceoBcE7DEv8EYP0ZUpoD6s+7bPyIcEq+iAaAPKwzUUIwry8+ZHF60TFCqF0CexyAMHLFCgkFDhGK0BAhKC8BClo8EFA0Y4o/VhRQoLCjw04Oiy5/6RDw8u8PRJtKjRo0iTKh304cWDB++W7jtQwoUBFyU2RFXyYUIICwFabJX6TMGyLiAUaJvyogSFOQBQxCBb5YCChGpYmFQyAAGuDHSlvFA1j8otRApaBj5yQt41FoqTwELEIsziIxsGVvo1hRJlTJeNHNCMiABoJTHwdnEwNPQSE+wktD5yoA8dCpZdE/nQAsW1FlRqmlglIbduIg9CqAbA2grQE0+PI+FNAQYIGCwK7JWe58GEFiMicx9Pvrz58+jTq1/Pvr379/B9PtoeX8oFUTAQmFgxtj6RC7BJA4x/MPFHRAtcKJTAbO3NwAEGHMwwxAcxVKIBfe05oIYDRP5UiMiF/mm42oEJ0pECg+zNEJIAEg5xwWFrnFZfgVFdEAMB1zmglX/BncPjj0AGKeSQRBZp5JFIJqnkktx90B+RLyxQQAAVGHjkCw0M0wWL6b2wQgvGUZGZH7KdxxsLBHDQwBUNIALDWuRNEqMVKbgJnHkPZGRJmHyphsKA5L0QQBogOIAhEhf4syGKx52QggYxiDfFfQSgQIAHhwr5wQIj7Mjkp6CGKuqopJZqxQMrMKRkBwJggIEBgNLkaAAdZCrRAmd1IYGqtKiIlgtIueAHCHfS8oIHKvHqk2N0ZPBkHon6USxRDilEDTLJKTRTTyvco4YG23J1gY9XLHCXF08hJNWCCRRQ4IGMU5yQgAIyhKDsFDal0IKtEn1wwQYb8OtRAHCBYICkQq6QaxfXGjkDIhUguYFvaoDAp5AvxHDWSgL790IFJmignakk7xMEACH5BAkFADQALAAAAABkAGQAAAb+QJpwSCwaj8ik8HVaLU4vpXRKrVqvy4KKRFBkHtiweBxOoABoACxEbrvftMU5jYaN4Pj8NAKipy16gYJDJn5pEoOJeR6GaBpWJy0VM1GKVi8jFiwCMRsfVCMIhiANVCcBcyAsE5WWSh8Vc2giM1UOfXQarUkvFrhpJAOuUjMMhrpUFzEUaCghB1QTv7kXw0kxEKMnVS8bCxMbYFQBjQAEE9ZIjI3oihrlMB3pRzHTaduKDuUEd/NFEwQMsfikaEA5Afj8DfmQIVuac65evPODooXCIxUUsGDhYIG1Aw5kUahwEcmDDQd2uXowIEaMAh5LypxJs6bNmzhz6tzJM8/+hwUNSlRYoHLKiwElOlTrWeVBBhYw1LCIsZTKCg0EYKAQsYLplA8JRNGBwIbKAQl+KGzwqqRDwEbCpjQYFYEtkhchygFwQCXvMYJ2iVwoVA7RnkaPAhd5oK9wtKh0QJBUTORDCntp6k55EAIyGhPiKA9ZIaARCmjJCghAMTWhaCEfOshCA2FylQ8vHrwA/HrhBhMEUBDQsIB3bzgXNrg+zry58+fQo0ufTr269evYsy+ZUCJBgRnGtRtRxgAGBBgMElR90cGABBNEs58wYA+EhW0vEnjGUKGo9AKYAQBCATRMwAwdAqx1XWnliEBDBvbAYJF1L4jVCAw0pOBQGhL+XveCZ4ZgOAAJfrAQk3UMNiIADZz9AkIG/kWXgl4pCPFABQIQIMEAoVl3ggKNKLCceENsYIEsCDigIJFHsBSDByEMEB6TVFZp5ZVYZqnlllx26eWXrlwwQQcjDHnlBi6cAYMGSzrHxJRK4LUhACZAB5IA911xQIrNtNkbXn2A4AKcR6xwIIe1NNdLGirEeMQFKqTVY2+wqEmgFZWmAcKEzj0wQgEjTErFAhpQoICUYKaq6qqsturqq7CyekIMMijQgqOC4KYbTi/IkAYEMeCax1EahWDmRQbRwUJXwyzAILA3zUgHDO240gIGh9zUQYknWrIAC2mUVdMLaKEBQgpXwuLxQQkicHTsRRuEoIAGBVRFxQcTRBDCCOka0YSoND1wwgWEHhEbBRCAQEADBYt3QrloMPAukQccqgZqWV7gaxosTCzewSAoXEHDRC6QQAzFxaqyJUEAACH5BAkFADQALAAAAABkAGQAAAb+QJpwSCwaj8jk8HW5vJTQqHRKrQ4/q5jBEFt8rOCwGDzjgAAAEGsybrvftJcETQdwHvC8PjqA1dEgLXuDhEMlZ38gKYWMeg0Qf2gFVl+NYActIQkzeFInFJEoJ1IvAyowICQhF5ZTKxKIKKtTJSh1IJNRHw0EfxajrUovGn8wJZVQLxUKKCgKFZ1QD6CJGcFKAxiREk9SHxcbGyfIUB2RaAqs10cFCJEE3Ywp5wACG+tHLbZ/LPGFDfQkAMNH5AKHSCHIETrhJ5IHfwSFzOhFx8RARh8yNKQj4GLEIQs8KNBQIJqlBxkEwIBBQMW9jzCPfNjQocIEkzFz6tzJs6f+z59AgwodKuXBggkrcE45sAAiUSgzTHCgwMHCBIVKTgSgQIJDCqxPjUxg8YfBjCkXVPyJADaskAMizlFwemQAIjoEDrhF0mBfpAFS5hUDvNeI4HMxpBSIBINN4SIZ6AHIBWUFRTrcHhcZcPnPAlIFLlNwrHnIAwvnNFB5MSGEgxReShfZoOCPgBWUPrQt/SCFAgoSSsoeTry48ePIkytfzry58+fQoxN8sWDECrrSxWpgQIKFhs8FWySoMC76iwLa6pCoUIk2xxHRZ6T/QwH3C9R1FHhcHkFyAhorHFQHAfA9Vxs9qi1A1oCEOSeDZKo9YIJtej3ngWQhSLQgACj+tLDbcX2c05gQM8VgggcbYJfcCyHcBUgKKkp3ngAowIACBxXEmB0NGwxQwQD77SjkkEQWaeSRSCap5JJMjvHCDAM0teQHHQhAAAoYSNCCjkV8cMAKG3zo1gMxQLKWmEtUIAMLEmTAJVEdzFcHBA2WcxkMHRB3AX6poXnaHxIQt8GGkVBQoRIXEFMHC4JScw4BLwkTwh8OEAeXZBQodcQCAuAVaWksSlbpFA8U8FqQj73yqKY7jjBHHQKQduQGKWgggQYphDnlAxc8gGaTwAYr7LDEXkNdASVc8KseH7yJTwJmroHPASkEMICzrVzgFwAOsDrICw6gQYKsOS3wh35d16ywoTU8XWAmGiZ4u8cDagEAQ4E8hdAQC3W2soIJCpQgL0EXVOBBCFeB8QK2XQ4Mk25goMQCC24y2YI7HAqi5AcJ1JHAstA10BAMGiv5QAIEUJCAw0I2W+zLOgUBACH5BAkFADQALAAAAABkAGQAAAb+QJpwSCwaj8ikcslsOp/Q5WOQSAwe0ax2q724SAAQyYPlms9oWggEaIdj6bi8+cC43YTyfM+nLWB3bRAbfYVyB4CBMCeGjUMXAxUtBy9PKoEAGk4fBykqEh4TH45NByqJAh2VTQssdyyErDJsbSgNo6RJLw6BHCubCyEaGjELuEsvFrRuDAu5SQtggQXHTB8XJ9VLF4l3IHDPRx0omCHaewuYbQ7hRxvSdxWOJ8t3Ie1Gu4Gwjh8imDAG4DPywAQMEDAkiCI1gUKgGOcGflhRYYKefhNMUKAgIcXAj0pebFhwISLIkyhTqlzJsqXLlzBjSrlwUaajBxkMqDBQ4UL+lA0BNIQ4YJOOgW4IPPhs8qEFATcIJhQN6aBem3tNTly6I2HVVCMzXGEiYLLICjt3UBD9aqQFWkyMmKx4mjYuWyId6GKqieSBhUCa7hbZ8A8TiyczFNCS8EswkQ8prIKQt2lDixgtNpT9+iDGMhAp+FpznOTDhhgOUmQjzbq169ewY8ueTbu27du4c+vG9+KE193bEkgQoCDFbxovDmygtPvDBAnLIGhYS6OzHRQR7N4+IUOdgzIlusHwmLuD1TYEnL3Y6kbB0tsR1LXpgFxBIAnaaweQD4CyZ3vH0VaBfDBIRcMJVbVhQiy4bSBWIO4N8cAMFYlGW1N6tcHCDMD+KTGDRgRQ4ACDHSaxwgQHbFbiiiy26OKLMMYo44w01mgjEheEIAAFAiSQXxMvPBCgYx8M4NArBjoRjAUhzKCiTSsUFogAFhqxwixtCPCeYy8kcF4bLTAV2R0FtHaBAfyZAGR8d0TQmlb8KeBEBQjcIRBrD/AinwdOeEELGa19UEE3gYwAxQYVaPbaAy6cxyeMJ3hATi1KyThFAh6kYFGNHzx546egXvjAAQesZmkHDgyngY8xfhBBhiAY0FhKQb7gKRoNQKCOCVt+dEAIDCgwwK1cXPCgIregFAEtAsxayACTquPBkOF0Vwt9jRRQp3wmVJmLB26w4EwjLWzrHbVTz2xgAgsCVEDsFiccG4i7KT2wAHWOpCCfBCSyNoMLHoxLhwljLeRaK1n2q8QDFQhAAAoiesvWOOgZCsUDG8xQkmwIA9AsjR+MoIEJBodq8skDBQEAIfkECQUANAAsAAAAAGQAZAAABv5AmnBILBqPyKRyyWw6n9Dla1IqLV7RrHarfUQoMASrhOWaz2haAQJoA2CTtHzuZLndGrp+X8Tc2wJ8gnoCfwB5g4lDHxcbB2VOFWxuMAtPDxMpEQMnik8NKhwiKReXKSwwMAIVkEsXAShtICoHnkwTfm0wEQ9PLwstLRutSh8ZMH8mxLZFGn8EM4oPhX8o0cxHL3Z/A4ovsX8wDdhHHzLhcYkvFIYoI+RHDX8KnYkfAYYCvfBFHykEMFBo2GDrgAYQbggQ5HfkxABL2E4U0KDAw0KGGDNq3Mixo8ePIEOKHEmypMkPExIESLEiy4cBBWYsM3mkAAEIICBwaPHhyf6Kc20UlKKZpASyOyjSMXkRAKGbFESRXFBgCIADJyck/JER9ciCbX8CNTlB9Q6irkRWUAvr5MUxNyBaoC3ywETVGE9OhABDIcbMriMI/GFxscmDBRNW7JtL5MMIsBJm9GQ85/CEYZQza97MubPnz6BDix5NurTp06gZTghgIUZhIYxODD19wgUCWRgKtBqggoWKAZNJvwgxyQ0GnkJWsGvD4hrpDSSqahgaozgIvKVHVAVAYWEIpwBAhDDdYTsFiCNyAXBnegG4PxLqvSjAAAYFVqYfuDAEokLwDydscEJwpa2gAHggBLBYakY8UIACAmggF4MUVmjhhRhmqOGGHP526OGHIG7xwgABmBDBCgReeIBdlHgwmxMrDHBAinNdYAF4skQARQMCECCBUpR1oB5SCyqhlhsy/EXTBzFsB0A3TczAgBssFNnVcE5WgJUBsoSg5EkZ4HgHkEtsEIICMdST2QzLPUMjgwW810ZSGn5QgQAogICCAgN8idoHBwzQwgRqhmjooYiW9sIDfqb2wQoFeOBBAu/U2YEAxZGQQaO2fPDCm3xsIFg1BYCKzQsteJBBoYJ8wGVVArSk0QC5BMCpGSdEVxUME2bUZBscsLrHDEP+UcJGLUyiTF4ZCIAAAjJU8CISom4X10YPZKCAA68pcUBZcFkwrREfqLAdC1QQYWtqgw6IGV4Efk5w1B9+BTmqIectYYycAHhgZVQROAlCAU2YKQALJkBJ2T0CJ3BhwNYSbGEL9z5DZmp1bRfAuqVtAK4bJoxL4QYpCBCQBNJqFAQAIfkECQUANAAsAAAAAGQAZAAABv5AmnBILBqPyKRyyWw6n1Dma3P6RK/YrHZhEYhCB614TB4eOCAAAGS6lN9wZ0RNBwzi+HxRU1cn9IB4Ln0AFYGHRS8XD1EzKHUUJ09TJSUDjIhOKxEaLgMvkxUCKCgKE1ZNLwUUajAumJlKDyJpABQtqE0fGy0Dkk8TJH0xsUsZfQq/gR8hhJHFSSZ9LCuILxaEBAvQSDF9EsqAH97TbtxGJwx0MCm5gQssfSnnSCsmBBK4sR8zIjAwKEKAokcQyYMBAza4K8iwocOHECNKnEixosWLGDPSu9ChxISBUR6E0dhkgQAMMEiYGOnkQgQYAAhkAEnSyAJhdZI5+VABwf66DTWPfPBQiw6IO6k89CkQ1MgDFYQAEEsVoI+hpkReQCU0z8kAdWoomMM6JEXRVtt2ttAgwcQpskROGKgDIgQsJydO3IUr5EAICigEFNjLV8yHDw8OF17MuLHjx5AjS55MubLly5gza05ysMGChZuHvKhAAQYEGAqqEXnQosCnyx8aYPjGkkYEnxhKXD6xlW4GVBcI0OFAU/KG2YRMYApOh0XxyBseJR8bAgIAGEwtn1AQNUauCyVitHge+UUJmHVYACWiOLMq4WoEfA595ESBFANA09/Pv7///wAGKOCABBZo4GMfXDBAATO8oN9mDxTgkxocjBfFCyeQ19QLGf5MSAcBE0CxggYCBBAOWSsIEJUGk0izxm+FNSBdHzA8aMQF3KnhgYYkVYAeIYQh8UEGMBHQgY0aDYBTHwRA8cAIDAYZFI5RheBfin208d8GDgjAggQpnMjfBwcsIOaBaKap5hgYHrCBlKGtEIIMLIjgCY9xKFhABi2cec4IEpxFQAJIlrGBBSRAAAIGMqRV0AqBEgLDCIc8IMNZAHCgGj0vmBUVABLgOcYxUZkgKiAX8PEpCuvpIcOnAmzKzQUifAoACkjpwUpUFIS4kapRoSCrQRMEoIABMSxwKg0SfKoeQZ1iSocAhT4Qg4cAkFBCoTQU8KkDcCJi0qctMEEkIWsYULrECSoyOQNDHyhJSAiFbsDBpxpwu0COaoDILSInOEABAQSokB8TFczYBwWOKvHBBDHE0EG43Hxwwga1LVHAj0yqG5qMn2qzn72fKrCsZOf2gYKv+z2QAHxhXdXfCxN4IIECMazwbyBBAAAh+QQJBQA0ACwAAAAAZABkAAAG/kCacEgsGo/IpHLJbDqf0Kh0Sq1CLxmNpfWyer/fiwkGAKBSXbB63RyAymXCgU2vFzNw+MbOp7fyADBzfYRhCm8AICFpTg8HGxcfhU8XLSkle1ArHgIKKSdPHwsuHCwmI5NOLiiBGitRLyegUAcKeRSDqUkLEHAgMZKFDYhwEbpKFYAmD4UfEYAAGsdJM4CLk8nW00gfJnACC6kbAnkoudtFDxUeFSfBzSsKKCgS4ej3ShsbzPj9/v8AAwocSLCgwYMIEyr092LFiFcLC71wQQEDhQCznhyIoCJBxohHXnjLY+LCkxMm3oCIwAhkkQms8oCY8WQCg2/8XBYpQQZQ/oUnKzjAUdBSp5AWPfO0CFWCBQoBE4wauSACEItzTEQN2PBO6pABLOBQaNHVqxVRBTwUWFDW7JcPbd3KnUu3rt27ePPq3cu3r9+/gAMXeXGgqGAiHzaYQACDRIqcQkR1gOh3BjlfASAP4IBBAOW9D0IQizOAiAE4AfxesAUIRAYiGuB4UM1a5ushI5x69hsaGoHSQ7Rmqhw2jwPIh2l8WKEBBogzyJMPcWRYuvXr2LNr3869u/fvgU+MqDAhevIHGRigQNC5Q1ydLy4cePA+5Mg8EBKYj/hhgoReCLjAVRMFQEOaWSPc5IsKHyFBlYFleLBfQg+c1loBTMxAAIQA/gjQYEQzFAeIAkxMsCGEAmAVkU0GSsDEARRwqMGHC50ggYEOMCEShynUh9AHMYwWSFRMnBAjNDOa9UIAMQFAQAM+EjGAAKO5ItcHLXhgQghshbJBASZo4EAFJmn3wQsPvBAleGy22WYs9G2njgcGOJDBgJMkNsAAK1S3zQkuIAAHBBIQSQgWIpBAAAcB+KnLAy70YlWZfDiTVCIWTDjJABhAGAMhKwgZSAn4vBADhwIQkgCEJqxpxwsecEgAIS5AqICmfZiKahMfHNBBBAlMEEkTpxpogqOFDNAkIJ8y0YJQZUCggT1LrHBpGSD8hM8FDohKAI0vHZmHBJQm8UEAWEIu488JDgDCACpL7AgNCCk08UAKR8IQQrn9DOCABBqUgKsQCygIjQKuCqFPwghNQAKKyO61gsEjMmyXvNBgaN0KIg41MF8DHBKtCcNZ98EJA6RA3seEBAEAIfkECQUANAAsAAAAAGQAZAAABv5AmnBILBqPyKRyyWw6n9CodEqtQj+TSGZl7Xq/rwIBAmGNvuj080QCuAGah3pOL67ebtapzp8fMHgKF32EYCkEICAUA1EfFycvhVEXK3tRLwMhMQsfUCcZKioRB5JOByYcEg2lNA8RMG4gGqxMDm8CXJIzbXgTtEoCbwSMkiMQeAAFv0kBIG4CpJILFMi+y0cbLhQKI52SD81vCt7XRi8PD+TfFQoSKZbl8fLz9PX29/j5+vv8/f7/AAMKpPJhgAEOFhZIeTCiwAw5A498SICHQAd1Sz5kgGURY0QaB3i9MQCPyQUFbzxE+khkAAJkLKI1eWHiTQqPEWegQCahJP6TFRoEeBjEksgLFXhAxFj55MUFpkWHLFDgDIUHn1GtnBjQYgLErGDDih1LtqzZs2jTql3Ltq1bGi86RNA0AupbIgc8IAKgKALWtweoIgNggmjaBx0EEBDRYmWEwW+UpX0RA5YbGAnkMIDsRoLaCZvxUJhBwxlnFGorHMMDowSN1ZAJpLb8pjUNFpwByFC7gAMyCgpT5K6gNgxtEAU6ndAA2cRXtC8mBNUwgNwJB3sBEAhh+K7RASliFJiA07v58+jTq1/Pvr379+wvbHie/sMMAxQIMHDw9+OHFwCWh0QBO4lGXlYHRMACARJU0J0SKwAymAQbRLUcHgjEQB8SHv5wBoFkLCUAmxsYKLTEC8FwphJLR0GWARMv+MaZAxsC9ABKg8XQBHOcxSBgPx90OBgxS7TAGQFnFLUAAcgo0J8RDpj2BggvZjUBCyiAgIIJFTpxQQgUmMZCAXaxdEEL4/14xAsLVFBACyuoCd+cdNZp551CzFBAAimMUGMfJ6xQZjkfFMDAaiRcJQkWLsjAgQYd0PNBCRJO6cKgagwQ2mUVyNnHBiJwZiIfD2wqzKjXdFDgYCEQsoCUtaUgj2ozEtIBZ63GM0ClyOjYxAMbzLDCAZgasQBkyMlzgAScdbnEBgGQkAgLCTyIxAfMwuTsNR+0sGpKcl6AFB4QBODEAFi41RbpPJgwGYtfTWQwohsooJrEBwt4wAIFDhxYzwMDvPmnER/gOFgE6D0QKmQeoPcBjzmm1wCs9G7r3QcO0AYADMSp90AGChBAgQaNsffCCRtscIKnhAQBACH5BAkFADQALAAAAABkAGQAAAb+QJpwSCwaj8ikcslsOp/QqHRKrUofL6t2yxVeQiRKKtstm5efAgwAQHTO8PjwFWGzM/K8+VOCsFFveoJbDzEULAVkUC+Kg08vH1SQUi8jMREtD45NDwUqDhubNC0sbBgJoksdCGwmjXknBnYAMK+pRDF2HCeOKwKzAKG3RwMEbB62cReydijJwy8dHgW8jh8DFGwgBcNJH5OiHycFBQuR3ejp6uvs7e7v8PHy7y8PFw/n84MfKykmMhYyCNOnZ4AAP9oUzCAIKxswAAoOMFxyIoGHFs+MfLDw0E6MfBOLzMBgR8JAJQcYdGSjoFrIIhpmgYiRccgMYytZnHxJ4wP+CWAmLjBZ4bCjgJ08f83yoGnJCwUrAThoynNIHzsEBjhpAaIjCq1VibyIIYCCAoxOPnjoOCZskQ8HFpwAyeRFBQEwYCAQMICuWy0PFgxYUfOv4cOIEytezLix48eQI0sOe2JAgwEuJyt50UAEARQkZKDVjITOmlkIEhRG/GJFAAspJAoZgMLrwsgfKuAEIGCFkABRQ0hewQGYgywyoiqQ3KL2LAESoa7UILmDczsCeOVamULyBgnAPES66dU37gGl2Gio9qLA9T8VVh+GWyAG5iITFFAgQEDDbdJK8DPBCn4BaOCBCCao4IIMNujggxBG6MgFJajAggbxLfZNgUr+LCACMAZk5tYHMyTgQAwLyEfDUw+BwNRhIxTFQAUc4tfVQxRMYNgFStnBgmxL1NERCBUYtspDLTQhZIvc/FXBabM0uUQDKwFi2AokyaQjEw/sNosEIvKkFjAaULVEMcBQsABiHxiCAgUehOnNCCbsR4EJSP11glxTBDbBBipKKOighBZqqBEXjFBBBwfUKIejt6ygHwIYSJDhIONooEEEeUbaIxsIFADpFgdocBoIDHS6yQsO3DgLAWbC8QFwwEgQayrfrbSlHC8UZQcGuw6zQHEdFZnHA1DaAUMD6RyQXEfBBnjBBgdcMKoQL6T36n/DtOmqj/I9UCEJDJjQgXxkH6TwLQAmXJtHqcCgkGQTGbyXlRMneAClBECmk69zCowg3wZessGCig9MEEMILciZzq1LqNviCAxGsC4AIDC7YAkXg7Dmghf4yoYE7kKGzSw6OfjCBCEooEEMG5QsmTgXBJpHEAAh+QQJBQA0ACwAAAAAZABkAAAG/kCacEgsGo/IpHLJbDqf0Kh0Sq1ar9is9TMwmUYfrXjcXHAAAMGKzG5+LpPNK9pBoAmjth55cbBIFAoND08rLGgCG3uLQlwMaJAgLoROMx4ea4yLGyKQngAFmjQfKxMXokofGRCfkCyniy8FAgwWiqhHDxatkCh5iwOPaDG4RxcKvGgwLYwVKJAaxUa6yQAwE4wLhwAgKdJFHwUgyQKUey8dEhQhsN9DJyrJzJofLw9h7kULyJ4wKfj5Ah6IoYAFCwcD5gRcSOPFiQMnzDGcSLGixYsYxdQDmBHVgxEFQmRI2FHUCRcEIBEI0K6kHgvjPEEIoNClkhcLKhyA0iIZ/ooKNpU8MDAORAiJSnYl81AzaJEGnjDMYyKhmgakToU4+ESsSbxkDrBmjeEJRKgmKar9y2rkwDYAGm4xuUCBVyK2Rj5YMpFiAZQBdT2RwIb3yAexTA6EYEGABbvCkCNLnky5suXLmDNr3sy5s+d8HzZMyPS5yQoLLBiwsEC6tOERb9EwGMCR84URFWaYO8Dvk4ATn1doQAPCA6UBrHgN8PzCRUxrJYQUqNaV84FOnqLRmJ7MW+cDVT2ZEDLBDi/CnD9EeA6jg5ALBngpaLn5RAgYAAisFbJCwfM0C9S22QsbbHBCU6OkoIAACiQAnGtMHCYghBRWaOGFGGao4YYc/nbo4YeofHBACgGkcMCEkaEoVATmcZMCYlmF1kACLez0RAb49RPdZDOIMA4EGrR2U2CfSGAjZC/0xo1xTWzwn0roFbZASp6wIJcSKyRDwHKRLfCMJxRcmcQDX35ipWQPnJEdfUl4wIsHKgbVQo750ebECSb8Z0KcTi3ggAIhiDlXARpIoEEBMFr4wAWJgujoo5BGKukSH5ywwAoIZvhBAjKwIIADM+DywAAVYDrRCwEkhwYLfjHywQgiIIAACi5kKo0zrShg6xjafBICn4t84AIvEDR6hSqtUHDkNy+YkMyybHzg5icoRPmNB09aY+wQb1ywq2FpfRLmQiMQCYkDZ8COskACBpiQwArp0rCAuQB4wJAsdAKggKBIzKAmNyLwe8QLDbylwYMLceGAABKkcEK8SqIxnhOhVVDABAhLdkC+ymzL2QwcWwNthReU2Uu8nE3rSXUZ9vElCkxyOGoMMQzg8aRtBAEAOw==",
          imagePosition: "center center",
          maxSize: "100px",
          minSize: "20px",
          resizeInterval: 50,
          size: "50%",
          zIndex: 9999
      };
      function n(i, n) {
          var o = (i = t(i)).is("body")
            , s = i.data("LoadingOverlayCount");
          if (s === e && (s = 0),
          0 == s) {
              var a = t("<div>", {
                  class: "loadingoverlay",
                  css: {
                      "background-color": n.color,
                      display: "flex",
                      "flex-direction": "column",
                      "align-items": "center",
                      "justify-content": "center"
                  }
              });
              if (n.zIndex !== e && a.css("z-index", n.zIndex),
              n.image && a.css({
                  "background-image": "url(" + n.image + ")",
                  "background-position": n.imagePosition,
                  "background-repeat": "no-repeat"
              }),
              n.fontawesome && t("<div>", {
                  class: "loadingoverlay_fontawesome " + n.fontawesome
              }).appendTo(a),
              n.custom && t(n.custom).appendTo(a),
              o ? a.css({
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
              }) : a.css("position", "fixed" == i.css("position") ? "fixed" : "absolute"),
              r(i, a, n, o),
              n.resizeInterval > 0) {
                  var l = setInterval(function() {
                      r(i, a, n, o)
                  }, n.resizeInterval);
                  i.data("LoadingOverlayResizeIntervalId", l)
              }
              n.fade ? !0 === n.fade ? n.fade = [400, 200] : "string" != typeof n.fade && "number" != typeof n.fade || (n.fade = [n.fade, n.fade]) : n.fade = [0, 0],
              i.data({
                  LoadingOverlay: a,
                  LoadingOverlayFadeOutDuration: n.fade[1]
              }),
              a.hide().appendTo("body").fadeIn(n.fade[0])
          }
          s++,
          i.data("LoadingOverlayCount", s)
      }
      function o(i, n) {
          var o = (i = t(i)).data("LoadingOverlayCount");
          if (o !== e)
              if (o--,
              n || o <= 0) {
                  var r = i.data("LoadingOverlayResizeIntervalId");
                  r && clearInterval(r),
                  i.data("LoadingOverlay").fadeOut(i.data("LoadingOverlayFadeOutDuration"), function() {
                      t(this).remove()
                  }),
                  i.removeData(["LoadingOverlay", "LoadingOverlayCount", "LoadingOverlayFadeOutDuration", "LoadingOverlayResizeIntervalId"])
              } else
                  i.data("LoadingOverlayCount", o)
      }
      function r(e, i, n, o) {
          if (!o) {
              var r = "fixed" == e.css("position") ? e.position() : e.offset();
              i.css({
                  top: r.top + parseInt(e.css("border-top-width"), 10),
                  left: r.left + parseInt(e.css("border-left-width"), 10),
                  width: e.innerWidth(),
                  height: e.innerHeight()
              })
          }
          var s = o ? t(window) : e
            , a = "auto";
          n.size && "auto" != n.size && (a = Math.min(s.innerWidth(), s.innerHeight()) * parseFloat(n.size) / 100,
          n.maxSize && a > parseInt(n.maxSize, 10) && (a = parseInt(n.maxSize, 10) + "px"),
          n.minSize && a < parseInt(n.minSize, 10) && (a = parseInt(n.minSize, 10) + "px")),
          i.css("background-size", a),
          i.children(".loadingoverlay_fontawesome").css("font-size", a)
      }
      t.LoadingOverlaySetup = function(e) {
          t.extend(!0, i, e)
      }
      ,
      t.LoadingOverlay = function(e, r) {
          switch (e.toLowerCase()) {
          case "show":
              n("body", t.extend(!0, {}, i, r));
              break;
          case "hide":
              o("body", r)
          }
      }
      ,
      t.fn.LoadingOverlay = function(e, r) {
          switch (e.toLowerCase()) {
          case "show":
              var s = t.extend(!0, {}, i, r);
              return this.each(function() {
                  n(this, s)
              });
          case "hide":
              return this.each(function() {
                  o(this, r)
              })
          }
      }
  }(jQuery)
}
, function(t, e, i) {
  window.$ = window.jQuery = i(0),
  t.exports = {
      run: function(t) {
          $("input[name=token]").val(tokenKey),
          $("input.tk").val(token).attr("name", tokenKey);
          var e = function(t) {
              var e = $(t).css("background-image").match(/^url\(["']?(.+?)["']?\)$/)
                , i = new $.Deferred;
              if (e) {
                  var n = new Image;
                  n.onload = i.resolve,
                  n.onerror = i.reject,
                  n.src = e[1]
              } else
                  i.reject();
              return i.then(function() {
                  return {
                      width: this.width,
                      height: this.height
                  }
              })
          };
          function i() {
              $(".div-bg").each(function(t, i) {
                  var n = $(this);
                  e($(this)).then(function(t) {
                      var e = t.width / t.height
                        , i = $(".div-bg").width()
                        , n = i / e;
                      return $(this).height(n),
                      n = i / e
                  }).then(function(t) {
                      n.css({
                          height: t
                      });
                      var e = n.parents("div.mar70").find(".div-table")
                        , i = t / 2 - e.outerHeight(!0) / 2;
                      e.css("padding-top", i)
                  }).fail(function() {
                      console.log("Could not get size because could not load image")
                  })
              })
          }
          $(window).resize(function() {
              i()
          }),
          $(document).ready(function() {
              setTimeout(function() {
                  $(window).width() >= 1024 && $(".div-table").paroller({
                      factor: .3,
                      factorXs: .1,
                      type: "foreground",
                      direction: "vertical"
                  })
              }, 1e3),
              i(),
              $("li.noi-dung").slideUp(),
              $("li.title").addClass("down"),
              $("li.title").click(function(t) {
                  var e = $(this).next()
                    , i = $("li.noi-dung").not(e);
                  e.slideToggle(),
                  i.slideUp(),
                  $("li.title").not(this).removeClass("up").addClass("down"),
                  $(this).toggleClass("down").toggleClass("up")
              }),
              $(".navbar-toggle").click(function(t) {
                  $(".collapse").hasClass("in") ? $(this).removeClass("open") : $(this).addClass("open")
              })
          })
      }
  }
}
, function(t, e, i) {
  window.jQuery = i(0),
  t.exports = {
      run: function() {
          $(document).ready(function() {
              var t = !1;
              $(document).on("keypress", function(e) {
                  116 == e.keyCode && (t = !0)
              }),
              $(document).on("click", "a", function() {
                  t = !0
              }),
              $(document).on("submit", "form", function() {
                  t = !0
              }),
              $(document).bind("click", "input[type=submit]", function() {
                  t = !0
              }),
              $(document).bind("click", "button[type=submit]", function() {
                  t = !0
              }),
              window.onbeforeunload = function() {
                  t || (document.cookie = "loading=; expires = Thu, 01 Jan 1970 00:00:00 GMT")
              }
              ,
              window.addEventListener("beforeunload", function(t) {})
          })
      }
  }
}
, function(t, e) {
  function i(t) {
      var e = new Error("Cannot find module '" + t + "'");
      throw e.code = "MODULE_NOT_FOUND",
      e
  }
  i.keys = function() {
      return []
  }
  ,
  i.resolve = i,
  t.exports = i,
  i.id = 18
}
, function(t, e, i) {
  var n = {
      "./article/index/web/js/article_top.js": 20,
      "./category/index/web/js/our-work-list.js": 22
  };
  function o(t) {
      var e = r(t);
      return i(e)
  }
  function r(t) {
      if (!i.o(n, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw e.code = "MODULE_NOT_FOUND",
          e
      }
      return n[t]
  }
  o.keys = function() {
      return Object.keys(n)
  }
  ,
  o.resolve = r,
  t.exports = o,
  o.id = 19
}
, function(t, e, i) {
  window.$ = window.jQuery = i(0),
  i(21),
  t.exports = {
      run: function(t) {
          $(".wrap-slide-titu").slick({
              infinite: !0,
              speed: 700,
              autoplaySpeed: 1500,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: !0,
              fade: !1,
              cssEase: "ease-in-out",
              arrows: !0,
              dots: !0
          })
      }
  }
}
, function(t, e, i) {
  var n, o, r;
  !function(s) {
      "use strict";
      o = [i(0)],
      void 0 === (r = "function" == typeof (n = function(t) {
          var e = window.Slick || {};
          (e = function() {
              var e = 0;
              return function(i, n) {
                  var o, r = this;
                  r.defaults = {
                      accessibility: !0,
                      adaptiveHeight: !1,
                      appendArrows: t(i),
                      appendDots: t(i),
                      arrows: !0,
                      asNavFor: null,
                      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                      nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                      autoplay: !1,
                      autoplaySpeed: 3e3,
                      centerMode: !1,
                      centerPadding: "50px",
                      cssEase: "ease",
                      customPaging: function(e, i) {
                          return t('<button type="button" />').text(i + 1)
                      },
                      dots: !1,
                      dotsClass: "slick-dots",
                      draggable: !0,
                      easing: "linear",
                      edgeFriction: .35,
                      fade: !1,
                      focusOnSelect: !1,
                      focusOnChange: !1,
                      infinite: !0,
                      initialSlide: 0,
                      lazyLoad: "ondemand",
                      mobileFirst: !1,
                      pauseOnHover: !0,
                      pauseOnFocus: !0,
                      pauseOnDotsHover: !1,
                      respondTo: "window",
                      responsive: null,
                      rows: 1,
                      rtl: !1,
                      slide: "",
                      slidesPerRow: 1,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      speed: 500,
                      swipe: !0,
                      swipeToSlide: !1,
                      touchMove: !0,
                      touchThreshold: 5,
                      useCSS: !0,
                      useTransform: !0,
                      variableWidth: !1,
                      vertical: !1,
                      verticalSwiping: !1,
                      waitForAnimate: !0,
                      zIndex: 1e3
                  },
                  r.initials = {
                      animating: !1,
                      dragging: !1,
                      autoPlayTimer: null,
                      currentDirection: 0,
                      currentLeft: null,
                      currentSlide: 0,
                      direction: 1,
                      $dots: null,
                      listWidth: null,
                      listHeight: null,
                      loadIndex: 0,
                      $nextArrow: null,
                      $prevArrow: null,
                      scrolling: !1,
                      slideCount: null,
                      slideWidth: null,
                      $slideTrack: null,
                      $slides: null,
                      sliding: !1,
                      slideOffset: 0,
                      swipeLeft: null,
                      swiping: !1,
                      $list: null,
                      touchObject: {},
                      transformsEnabled: !1,
                      unslicked: !1
                  },
                  t.extend(r, r.initials),
                  r.activeBreakpoint = null,
                  r.animType = null,
                  r.animProp = null,
                  r.breakpoints = [],
                  r.breakpointSettings = [],
                  r.cssTransitions = !1,
                  r.focussed = !1,
                  r.interrupted = !1,
                  r.hidden = "hidden",
                  r.paused = !0,
                  r.positionProp = null,
                  r.respondTo = null,
                  r.rowCount = 1,
                  r.shouldClick = !0,
                  r.$slider = t(i),
                  r.$slidesCache = null,
                  r.transformType = null,
                  r.transitionType = null,
                  r.visibilityChange = "visibilitychange",
                  r.windowWidth = 0,
                  r.windowTimer = null,
                  o = t(i).data("slick") || {},
                  r.options = t.extend({}, r.defaults, n, o),
                  r.currentSlide = r.options.initialSlide,
                  r.originalSettings = r.options,
                  void 0 !== document.mozHidden ? (r.hidden = "mozHidden",
                  r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden",
                  r.visibilityChange = "webkitvisibilitychange"),
                  r.autoPlay = t.proxy(r.autoPlay, r),
                  r.autoPlayClear = t.proxy(r.autoPlayClear, r),
                  r.autoPlayIterator = t.proxy(r.autoPlayIterator, r),
                  r.changeSlide = t.proxy(r.changeSlide, r),
                  r.clickHandler = t.proxy(r.clickHandler, r),
                  r.selectHandler = t.proxy(r.selectHandler, r),
                  r.setPosition = t.proxy(r.setPosition, r),
                  r.swipeHandler = t.proxy(r.swipeHandler, r),
                  r.dragHandler = t.proxy(r.dragHandler, r),
                  r.keyHandler = t.proxy(r.keyHandler, r),
                  r.instanceUid = e++,
                  r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
                  r.registerBreakpoints(),
                  r.init(!0)
              }
          }()).prototype.activateADA = function() {
              this.$slideTrack.find(".slick-active").attr({
                  "aria-hidden": "false"
              }).find("a, input, button, select").attr({
                  tabindex: "0"
              })
          }
          ,
          e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
              var o = this;
              if ("boolean" == typeof i)
                  n = i,
                  i = null;
              else if (i < 0 || i >= o.slideCount)
                  return !1;
              o.unload(),
              "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : !0 === n ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack),
              o.$slides = o.$slideTrack.children(this.options.slide),
              o.$slideTrack.children(this.options.slide).detach(),
              o.$slideTrack.append(o.$slides),
              o.$slides.each(function(e, i) {
                  t(i).attr("data-slick-index", e)
              }),
              o.$slidesCache = o.$slides,
              o.reinit()
          }
          ,
          e.prototype.animateHeight = function() {
              var t = this;
              if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                  var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                  t.$list.animate({
                      height: e
                  }, t.options.speed)
              }
          }
          ,
          e.prototype.animateSlide = function(e, i) {
              var n = {}
                , o = this;
              o.animateHeight(),
              !0 === o.options.rtl && !1 === o.options.vertical && (e = -e),
              !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
                  left: e
              }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
                  top: e
              }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
              t({
                  animStart: o.currentLeft
              }).animate({
                  animStart: e
              }, {
                  duration: o.options.speed,
                  easing: o.options.easing,
                  step: function(t) {
                      t = Math.ceil(t),
                      !1 === o.options.vertical ? (n[o.animType] = "translate(" + t + "px, 0px)",
                      o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)",
                      o.$slideTrack.css(n))
                  },
                  complete: function() {
                      i && i.call()
                  }
              })) : (o.applyTransition(),
              e = Math.ceil(e),
              !1 === o.options.vertical ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)",
              o.$slideTrack.css(n),
              i && setTimeout(function() {
                  o.disableTransition(),
                  i.call()
              }, o.options.speed))
          }
          ,
          e.prototype.getNavTarget = function() {
              var e = this.options.asNavFor;
              return e && null !== e && (e = t(e).not(this.$slider)),
              e
          }
          ,
          e.prototype.asNavFor = function(e) {
              var i = this.getNavTarget();
              null !== i && "object" == typeof i && i.each(function() {
                  var i = t(this).slick("getSlick");
                  i.unslicked || i.slideHandler(e, !0)
              })
          }
          ,
          e.prototype.applyTransition = function(t) {
              var e = this
                , i = {};
              !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
              !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
          }
          ,
          e.prototype.autoPlay = function() {
              var t = this;
              t.autoPlayClear(),
              t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
          }
          ,
          e.prototype.autoPlayClear = function() {
              this.autoPlayTimer && clearInterval(this.autoPlayTimer)
          }
          ,
          e.prototype.autoPlayIterator = function() {
              var t = this
                , e = t.currentSlide + t.options.slidesToScroll;
              t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll,
              t.currentSlide - 1 == 0 && (t.direction = 1))),
              t.slideHandler(e))
          }
          ,
          e.prototype.buildArrows = function() {
              var e = this;
              !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"),
              e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"),
              e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
              e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
              e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
              e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
              !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                  "aria-disabled": "true",
                  tabindex: "-1"
              }))
          }
          ,
          e.prototype.buildDots = function() {
              var e, i, n = this;
              if (!0 === n.options.dots) {
                  for (n.$slider.addClass("slick-dotted"),
                  i = t("<ul />").addClass(n.options.dotsClass),
                  e = 0; e <= n.getDotCount(); e += 1)
                      i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
                  n.$dots = i.appendTo(n.options.appendDots),
                  n.$dots.find("li").first().addClass("slick-active")
              }
          }
          ,
          e.prototype.buildOut = function() {
              var e = this;
              e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
              e.slideCount = e.$slides.length,
              e.$slides.each(function(e, i) {
                  t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
              }),
              e.$slider.addClass("slick-slider"),
              e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
              e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
              e.$slideTrack.css("opacity", 0),
              !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
              t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
              e.setupInfinite(),
              e.buildArrows(),
              e.buildDots(),
              e.updateDots(),
              e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
              !0 === e.options.draggable && e.$list.addClass("draggable")
          }
          ,
          e.prototype.buildRows = function() {
              var t, e, i, n, o, r, s, a = this;
              if (n = document.createDocumentFragment(),
              r = a.$slider.children(),
              a.options.rows > 1) {
                  for (s = a.options.slidesPerRow * a.options.rows,
                  o = Math.ceil(r.length / s),
                  t = 0; t < o; t++) {
                      var l = document.createElement("div");
                      for (e = 0; e < a.options.rows; e++) {
                          var c = document.createElement("div");
                          for (i = 0; i < a.options.slidesPerRow; i++) {
                              var d = t * s + (e * a.options.slidesPerRow + i);
                              r.get(d) && c.appendChild(r.get(d))
                          }
                          l.appendChild(c)
                      }
                      n.appendChild(l)
                  }
                  a.$slider.empty().append(n),
                  a.$slider.children().children().children().css({
                      width: 100 / a.options.slidesPerRow + "%",
                      display: "inline-block"
                  })
              }
          }
          ,
          e.prototype.checkResponsive = function(e, i) {
              var n, o, r, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || t(window).width();
              if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)),
              s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                  for (n in o = null,
                  s.breakpoints)
                      s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[n] && (o = s.breakpoints[n]) : r > s.breakpoints[n] && (o = s.breakpoints[n]));
                  null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || i) && (s.activeBreakpoint = o,
                  "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]),
                  !0 === e && (s.currentSlide = s.options.initialSlide),
                  s.refresh(e)),
                  a = o) : (s.activeBreakpoint = o,
                  "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]),
                  !0 === e && (s.currentSlide = s.options.initialSlide),
                  s.refresh(e)),
                  a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null,
                  s.options = s.originalSettings,
                  !0 === e && (s.currentSlide = s.options.initialSlide),
                  s.refresh(e),
                  a = o),
                  e || !1 === a || s.$slider.trigger("breakpoint", [s, a])
              }
          }
          ,
          e.prototype.changeSlide = function(e, i) {
              var n, o, r, s = this, a = t(e.currentTarget);
              switch (a.is("a") && e.preventDefault(),
              a.is("li") || (a = a.closest("li")),
              r = s.slideCount % s.options.slidesToScroll != 0,
              n = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll,
              e.data.message) {
              case "previous":
                  o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n,
                  s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
                  break;
              case "next":
                  o = 0 === n ? s.options.slidesToScroll : n,
                  s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
                  break;
              case "index":
                  var l = 0 === e.data.index ? 0 : e.data.index || a.index() * s.options.slidesToScroll;
                  s.slideHandler(s.checkNavigable(l), !1, i),
                  a.children().trigger("focus");
                  break;
              default:
                  return
              }
          }
          ,
          e.prototype.checkNavigable = function(t) {
              var e, i;
              if (e = this.getNavigableIndexes(),
              i = 0,
              t > e[e.length - 1])
                  t = e[e.length - 1];
              else
                  for (var n in e) {
                      if (t < e[n]) {
                          t = i;
                          break
                      }
                      i = e[n]
                  }
              return t
          }
          ,
          e.prototype.cleanUpEvents = function() {
              var e = this;
              e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
              !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
              e.$slider.off("focus.slick blur.slick"),
              !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
              e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
              !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
              e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
              e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
              e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
              e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
              e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
              e.$list.off("click.slick", e.clickHandler),
              t(document).off(e.visibilityChange, e.visibility),
              e.cleanUpSlideEvents(),
              !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
              !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler),
              t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
              t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
              t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
              t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
          }
          ,
          e.prototype.cleanUpSlideEvents = function() {
              var e = this;
              e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
              e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
          }
          ,
          e.prototype.cleanUpRows = function() {
              var t, e = this;
              e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"),
              e.$slider.empty().append(t))
          }
          ,
          e.prototype.clickHandler = function(t) {
              !1 === this.shouldClick && (t.stopImmediatePropagation(),
              t.stopPropagation(),
              t.preventDefault())
          }
          ,
          e.prototype.destroy = function(e) {
              var i = this;
              i.autoPlayClear(),
              i.touchObject = {},
              i.cleanUpEvents(),
              t(".slick-cloned", i.$slider).detach(),
              i.$dots && i.$dots.remove(),
              i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
              i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
              i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
              i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
              i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                  t(this).attr("style", t(this).data("originalStyling"))
              }),
              i.$slideTrack.children(this.options.slide).detach(),
              i.$slideTrack.detach(),
              i.$list.detach(),
              i.$slider.append(i.$slides)),
              i.cleanUpRows(),
              i.$slider.removeClass("slick-slider"),
              i.$slider.removeClass("slick-initialized"),
              i.$slider.removeClass("slick-dotted"),
              i.unslicked = !0,
              e || i.$slider.trigger("destroy", [i])
          }
          ,
          e.prototype.disableTransition = function(t) {
              var e = this
                , i = {};
              i[e.transitionType] = "",
              !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
          }
          ,
          e.prototype.fadeSlide = function(t, e) {
              var i = this;
              !1 === i.cssTransitions ? (i.$slides.eq(t).css({
                  zIndex: i.options.zIndex
              }),
              i.$slides.eq(t).animate({
                  opacity: 1
              }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t),
              i.$slides.eq(t).css({
                  opacity: 1,
                  zIndex: i.options.zIndex
              }),
              e && setTimeout(function() {
                  i.disableTransition(t),
                  e.call()
              }, i.options.speed))
          }
          ,
          e.prototype.fadeSlideOut = function(t) {
              var e = this;
              !1 === e.cssTransitions ? e.$slides.eq(t).animate({
                  opacity: 0,
                  zIndex: e.options.zIndex - 2
              }, e.options.speed, e.options.easing) : (e.applyTransition(t),
              e.$slides.eq(t).css({
                  opacity: 0,
                  zIndex: e.options.zIndex - 2
              }))
          }
          ,
          e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
              var e = this;
              null !== t && (e.$slidesCache = e.$slides,
              e.unload(),
              e.$slideTrack.children(this.options.slide).detach(),
              e.$slidesCache.filter(t).appendTo(e.$slideTrack),
              e.reinit())
          }
          ,
          e.prototype.focusHandler = function() {
              var e = this;
              e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
                  i.stopImmediatePropagation();
                  var n = t(this);
                  setTimeout(function() {
                      e.options.pauseOnFocus && (e.focussed = n.is(":focus"),
                      e.autoPlay())
                  }, 0)
              })
          }
          ,
          e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
              return this.currentSlide
          }
          ,
          e.prototype.getDotCount = function() {
              var t = this
                , e = 0
                , i = 0
                , n = 0;
              if (!0 === t.options.infinite)
                  if (t.slideCount <= t.options.slidesToShow)
                      ++n;
                  else
                      for (; e < t.slideCount; )
                          ++n,
                          e = i + t.options.slidesToScroll,
                          i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
              else if (!0 === t.options.centerMode)
                  n = t.slideCount;
              else if (t.options.asNavFor)
                  for (; e < t.slideCount; )
                      ++n,
                      e = i + t.options.slidesToScroll,
                      i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
              else
                  n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
              return n - 1
          }
          ,
          e.prototype.getLeft = function(t) {
              var e, i, n, o, r = this, s = 0;
              return r.slideOffset = 0,
              i = r.$slides.first().outerHeight(!0),
              !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1,
              o = -1,
              !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)),
              s = i * r.options.slidesToShow * o),
              r.slideCount % r.options.slidesToScroll != 0 && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (t > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth * -1,
              s = (r.options.slidesToShow - (t - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1,
              s = r.slideCount % r.options.slidesToScroll * i * -1))) : t + r.options.slidesToShow > r.slideCount && (r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth,
              s = (t + r.options.slidesToShow - r.slideCount) * i),
              r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0,
              s = 0),
              !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0,
              r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)),
              e = !1 === r.options.vertical ? t * r.slideWidth * -1 + r.slideOffset : t * i * -1 + s,
              !0 === r.options.variableWidth && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow),
              e = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
              !0 === r.options.centerMode && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow + 1),
              e = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
              e += (r.$list.width() - n.outerWidth()) / 2)),
              e
          }
          ,
          e.prototype.getOption = e.prototype.slickGetOption = function(t) {
              return this.options[t]
          }
          ,
          e.prototype.getNavigableIndexes = function() {
              var t, e = this, i = 0, n = 0, o = [];
              for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll,
              n = -1 * e.options.slidesToScroll,
              t = 2 * e.slideCount); i < t; )
                  o.push(i),
                  i = n + e.options.slidesToScroll,
                  n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
              return o
          }
          ,
          e.prototype.getSlick = function() {
              return this
          }
          ,
          e.prototype.getSlideCount = function() {
              var e, i, n = this;
              return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0,
              !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(o, r) {
                  if (r.offsetLeft - i + t(r).outerWidth() / 2 > -1 * n.swipeLeft)
                      return e = r,
                      !1
              }),
              Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
          }
          ,
          e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
              this.changeSlide({
                  data: {
                      message: "index",
                      index: parseInt(t)
                  }
              }, e)
          }
          ,
          e.prototype.init = function(e) {
              var i = this;
              t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"),
              i.buildRows(),
              i.buildOut(),
              i.setProps(),
              i.startLoad(),
              i.loadSlider(),
              i.initializeEvents(),
              i.updateArrows(),
              i.updateDots(),
              i.checkResponsive(!0),
              i.focusHandler()),
              e && i.$slider.trigger("init", [i]),
              !0 === i.options.accessibility && i.initADA(),
              i.options.autoplay && (i.paused = !1,
              i.autoPlay())
          }
          ,
          e.prototype.initADA = function() {
              var e = this
                , i = Math.ceil(e.slideCount / e.options.slidesToShow)
                , n = e.getNavigableIndexes().filter(function(t) {
                  return t >= 0 && t < e.slideCount
              });
              e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                  "aria-hidden": "true",
                  tabindex: "-1"
              }).find("a, input, button, select").attr({
                  tabindex: "-1"
              }),
              null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
                  var o = n.indexOf(i);
                  t(this).attr({
                      role: "tabpanel",
                      id: "slick-slide" + e.instanceUid + i,
                      tabindex: -1
                  }),
                  -1 !== o && t(this).attr({
                      "aria-describedby": "slick-slide-control" + e.instanceUid + o
                  })
              }),
              e.$dots.attr("role", "tablist").find("li").each(function(o) {
                  var r = n[o];
                  t(this).attr({
                      role: "presentation"
                  }),
                  t(this).find("button").first().attr({
                      role: "tab",
                      id: "slick-slide-control" + e.instanceUid + o,
                      "aria-controls": "slick-slide" + e.instanceUid + r,
                      "aria-label": o + 1 + " of " + i,
                      "aria-selected": null,
                      tabindex: "-1"
                  })
              }).eq(e.currentSlide).find("button").attr({
                  "aria-selected": "true",
                  tabindex: "0"
              }).end());
              for (var o = e.currentSlide, r = o + e.options.slidesToShow; o < r; o++)
                  e.$slides.eq(o).attr("tabindex", 0);
              e.activateADA()
          }
          ,
          e.prototype.initArrowEvents = function() {
              var t = this;
              !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                  message: "previous"
              }, t.changeSlide),
              t.$nextArrow.off("click.slick").on("click.slick", {
                  message: "next"
              }, t.changeSlide),
              !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler),
              t.$nextArrow.on("keydown.slick", t.keyHandler)))
          }
          ,
          e.prototype.initDotEvents = function() {
              var e = this;
              !0 === e.options.dots && (t("li", e.$dots).on("click.slick", {
                  message: "index"
              }, e.changeSlide),
              !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
              !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
          }
          ,
          e.prototype.initSlideEvents = function() {
              var e = this;
              e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
              e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
          }
          ,
          e.prototype.initializeEvents = function() {
              var e = this;
              e.initArrowEvents(),
              e.initDotEvents(),
              e.initSlideEvents(),
              e.$list.on("touchstart.slick mousedown.slick", {
                  action: "start"
              }, e.swipeHandler),
              e.$list.on("touchmove.slick mousemove.slick", {
                  action: "move"
              }, e.swipeHandler),
              e.$list.on("touchend.slick mouseup.slick", {
                  action: "end"
              }, e.swipeHandler),
              e.$list.on("touchcancel.slick mouseleave.slick", {
                  action: "end"
              }, e.swipeHandler),
              e.$list.on("click.slick", e.clickHandler),
              t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
              !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
              !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
              t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)),
              t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)),
              t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
              t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
              t(e.setPosition)
          }
          ,
          e.prototype.initUI = function() {
              var t = this;
              !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(),
              t.$nextArrow.show()),
              !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
          }
          ,
          e.prototype.keyHandler = function(t) {
              var e = this;
              t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
                  data: {
                      message: !0 === e.options.rtl ? "next" : "previous"
                  }
              }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
                  data: {
                      message: !0 === e.options.rtl ? "previous" : "next"
                  }
              }))
          }
          ,
          e.prototype.lazyLoad = function() {
              function e(e) {
                  t("img[data-lazy]", e).each(function() {
                      var e = t(this)
                        , i = t(this).attr("data-lazy")
                        , n = t(this).attr("data-srcset")
                        , o = t(this).attr("data-sizes") || r.$slider.attr("data-sizes")
                        , s = document.createElement("img");
                      s.onload = function() {
                          e.animate({
                              opacity: 0
                          }, 100, function() {
                              n && (e.attr("srcset", n),
                              o && e.attr("sizes", o)),
                              e.attr("src", i).animate({
                                  opacity: 1
                              }, 200, function() {
                                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                              }),
                              r.$slider.trigger("lazyLoaded", [r, e, i])
                          })
                      }
                      ,
                      s.onerror = function() {
                          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                          r.$slider.trigger("lazyLoadError", [r, e, i])
                      }
                      ,
                      s.src = i
                  })
              }
              var i, n, o, r = this;
              if (!0 === r.options.centerMode ? !0 === r.options.infinite ? o = (n = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)),
              o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide,
              o = Math.ceil(n + r.options.slidesToShow),
              !0 === r.options.fade && (n > 0 && n--,
              o <= r.slideCount && o++)),
              i = r.$slider.find(".slick-slide").slice(n, o),
              "anticipated" === r.options.lazyLoad)
                  for (var s = n - 1, a = o, l = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++)
                      s < 0 && (s = r.slideCount - 1),
                      i = (i = i.add(l.eq(s))).add(l.eq(a)),
                      s--,
                      a++;
              e(i),
              r.slideCount <= r.options.slidesToShow ? e(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? e(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && e(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
          }
          ,
          e.prototype.loadSlider = function() {
              var t = this;
              t.setPosition(),
              t.$slideTrack.css({
                  opacity: 1
              }),
              t.$slider.removeClass("slick-loading"),
              t.initUI(),
              "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
          }
          ,
          e.prototype.next = e.prototype.slickNext = function() {
              this.changeSlide({
                  data: {
                      message: "next"
                  }
              })
          }
          ,
          e.prototype.orientationChange = function() {
              this.checkResponsive(),
              this.setPosition()
          }
          ,
          e.prototype.pause = e.prototype.slickPause = function() {
              this.autoPlayClear(),
              this.paused = !0
          }
          ,
          e.prototype.play = e.prototype.slickPlay = function() {
              var t = this;
              t.autoPlay(),
              t.options.autoplay = !0,
              t.paused = !1,
              t.focussed = !1,
              t.interrupted = !1
          }
          ,
          e.prototype.postSlide = function(e) {
              var i = this;
              i.unslicked || (i.$slider.trigger("afterChange", [i, e]),
              i.animating = !1,
              i.slideCount > i.options.slidesToShow && i.setPosition(),
              i.swipeLeft = null,
              i.options.autoplay && i.autoPlay(),
              !0 === i.options.accessibility && (i.initADA(),
              i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
          }
          ,
          e.prototype.prev = e.prototype.slickPrev = function() {
              this.changeSlide({
                  data: {
                      message: "previous"
                  }
              })
          }
          ,
          e.prototype.preventDefault = function(t) {
              t.preventDefault()
          }
          ,
          e.prototype.progressiveLazyLoad = function(e) {
              e = e || 1;
              var i, n, o, r, s, a = this, l = t("img[data-lazy]", a.$slider);
              l.length ? (i = l.first(),
              n = i.attr("data-lazy"),
              o = i.attr("data-srcset"),
              r = i.attr("data-sizes") || a.$slider.attr("data-sizes"),
              (s = document.createElement("img")).onload = function() {
                  o && (i.attr("srcset", o),
                  r && i.attr("sizes", r)),
                  i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                  !0 === a.options.adaptiveHeight && a.setPosition(),
                  a.$slider.trigger("lazyLoaded", [a, i, n]),
                  a.progressiveLazyLoad()
              }
              ,
              s.onerror = function() {
                  e < 3 ? setTimeout(function() {
                      a.progressiveLazyLoad(e + 1)
                  }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                  a.$slider.trigger("lazyLoadError", [a, i, n]),
                  a.progressiveLazyLoad())
              }
              ,
              s.src = n) : a.$slider.trigger("allImagesLoaded", [a])
          }
          ,
          e.prototype.refresh = function(e) {
              var i, n, o = this;
              n = o.slideCount - o.options.slidesToShow,
              !o.options.infinite && o.currentSlide > n && (o.currentSlide = n),
              o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
              i = o.currentSlide,
              o.destroy(!0),
              t.extend(o, o.initials, {
                  currentSlide: i
              }),
              o.init(),
              e || o.changeSlide({
                  data: {
                      message: "index",
                      index: i
                  }
              }, !1)
          }
          ,
          e.prototype.registerBreakpoints = function() {
              var e, i, n, o = this, r = o.options.responsive || null;
              if ("array" === t.type(r) && r.length) {
                  for (e in o.respondTo = o.options.respondTo || "window",
                  r)
                      if (n = o.breakpoints.length - 1,
                      r.hasOwnProperty(e)) {
                          for (i = r[e].breakpoint; n >= 0; )
                              o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1),
                              n--;
                          o.breakpoints.push(i),
                          o.breakpointSettings[i] = r[e].settings
                      }
                  o.breakpoints.sort(function(t, e) {
                      return o.options.mobileFirst ? t - e : e - t
                  })
              }
          }
          ,
          e.prototype.reinit = function() {
              var e = this;
              e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
              e.slideCount = e.$slides.length,
              e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
              e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
              e.registerBreakpoints(),
              e.setProps(),
              e.setupInfinite(),
              e.buildArrows(),
              e.updateArrows(),
              e.initArrowEvents(),
              e.buildDots(),
              e.updateDots(),
              e.initDotEvents(),
              e.cleanUpSlideEvents(),
              e.initSlideEvents(),
              e.checkResponsive(!1, !0),
              !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
              e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
              e.setPosition(),
              e.focusHandler(),
              e.paused = !e.options.autoplay,
              e.autoPlay(),
              e.$slider.trigger("reInit", [e])
          }
          ,
          e.prototype.resize = function() {
              var e = this;
              t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
              e.windowDelay = window.setTimeout(function() {
                  e.windowWidth = t(window).width(),
                  e.checkResponsive(),
                  e.unslicked || e.setPosition()
              }, 50))
          }
          ,
          e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
              var n = this;
              if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : n.slideCount - 1 : !0 === e ? --t : t,
              n.slideCount < 1 || t < 0 || t > n.slideCount - 1)
                  return !1;
              n.unload(),
              !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(),
              n.$slides = n.$slideTrack.children(this.options.slide),
              n.$slideTrack.children(this.options.slide).detach(),
              n.$slideTrack.append(n.$slides),
              n.$slidesCache = n.$slides,
              n.reinit()
          }
          ,
          e.prototype.setCSS = function(t) {
              var e, i, n = this, o = {};
              !0 === n.options.rtl && (t = -t),
              e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px",
              i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px",
              o[n.positionProp] = t,
              !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {},
              !1 === n.cssTransitions ? (o[n.animType] = "translate(" + e + ", " + i + ")",
              n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)",
              n.$slideTrack.css(o)))
          }
          ,
          e.prototype.setDimensions = function() {
              var t = this;
              !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
                  padding: "0px " + t.options.centerPadding
              }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow),
              !0 === t.options.centerMode && t.$list.css({
                  padding: t.options.centerPadding + " 0px"
              })),
              t.listWidth = t.$list.width(),
              t.listHeight = t.$list.height(),
              !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow),
              t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth),
              t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
              var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
              !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
          }
          ,
          e.prototype.setFade = function() {
              var e, i = this;
              i.$slides.each(function(n, o) {
                  e = i.slideWidth * n * -1,
                  !0 === i.options.rtl ? t(o).css({
                      position: "relative",
                      right: e,
                      top: 0,
                      zIndex: i.options.zIndex - 2,
                      opacity: 0
                  }) : t(o).css({
                      position: "relative",
                      left: e,
                      top: 0,
                      zIndex: i.options.zIndex - 2,
                      opacity: 0
                  })
              }),
              i.$slides.eq(i.currentSlide).css({
                  zIndex: i.options.zIndex - 1,
                  opacity: 1
              })
          }
          ,
          e.prototype.setHeight = function() {
              var t = this;
              if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                  var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                  t.$list.css("height", e)
              }
          }
          ,
          e.prototype.setOption = e.prototype.slickSetOption = function() {
              var e, i, n, o, r, s = this, a = !1;
              if ("object" === t.type(arguments[0]) ? (n = arguments[0],
              a = arguments[1],
              r = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0],
              o = arguments[1],
              a = arguments[2],
              "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")),
              "single" === r)
                  s.options[n] = o;
              else if ("multiple" === r)
                  t.each(n, function(t, e) {
                      s.options[t] = e
                  });
              else if ("responsive" === r)
                  for (i in o)
                      if ("array" !== t.type(s.options.responsive))
                          s.options.responsive = [o[i]];
                      else {
                          for (e = s.options.responsive.length - 1; e >= 0; )
                              s.options.responsive[e].breakpoint === o[i].breakpoint && s.options.responsive.splice(e, 1),
                              e--;
                          s.options.responsive.push(o[i])
                      }
              a && (s.unload(),
              s.reinit())
          }
          ,
          e.prototype.setPosition = function() {
              var t = this;
              t.setDimensions(),
              t.setHeight(),
              !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(),
              t.$slider.trigger("setPosition", [t])
          }
          ,
          e.prototype.setProps = function() {
              var t = this
                , e = document.body.style;
              t.positionProp = !0 === t.options.vertical ? "top" : "left",
              "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
              void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0),
              t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex),
              void 0 !== e.OTransform && (t.animType = "OTransform",
              t.transformType = "-o-transform",
              t.transitionType = "OTransition",
              void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
              void 0 !== e.MozTransform && (t.animType = "MozTransform",
              t.transformType = "-moz-transform",
              t.transitionType = "MozTransition",
              void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
              void 0 !== e.webkitTransform && (t.animType = "webkitTransform",
              t.transformType = "-webkit-transform",
              t.transitionType = "webkitTransition",
              void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
              void 0 !== e.msTransform && (t.animType = "msTransform",
              t.transformType = "-ms-transform",
              t.transitionType = "msTransition",
              void 0 === e.msTransform && (t.animType = !1)),
              void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform",
              t.transformType = "transform",
              t.transitionType = "transition"),
              t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
          }
          ,
          e.prototype.setSlideClasses = function(t) {
              var e, i, n, o, r = this;
              if (i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
              r.$slides.eq(t).addClass("slick-current"),
              !0 === r.options.centerMode) {
                  var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                  e = Math.floor(r.options.slidesToShow / 2),
                  !0 === r.options.infinite && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e + s, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + t,
                  i.slice(n - e + 1 + s, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
                  0 === t ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")),
                  r.$slides.eq(t).addClass("slick-center")
              } else
                  t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow,
                  n = !0 === r.options.infinite ? r.options.slidesToShow + t : t,
                  r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
              "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
          }
          ,
          e.prototype.setupInfinite = function() {
              var e, i, n, o = this;
              if (!0 === o.options.fade && (o.options.centerMode = !1),
              !0 === o.options.infinite && !1 === o.options.fade && (i = null,
              o.slideCount > o.options.slidesToShow)) {
                  for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow,
                  e = o.slideCount; e > o.slideCount - n; e -= 1)
                      i = e - 1,
                      t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                  for (e = 0; e < n + o.slideCount; e += 1)
                      i = e,
                      t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                  o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                      t(this).attr("id", "")
                  })
              }
          }
          ,
          e.prototype.interrupt = function(t) {
              t || this.autoPlay(),
              this.interrupted = t
          }
          ,
          e.prototype.selectHandler = function(e) {
              var i = this
                , n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide")
                , o = parseInt(n.attr("data-slick-index"));
              o || (o = 0),
              i.slideCount <= i.options.slidesToShow ? i.slideHandler(o, !1, !0) : i.slideHandler(o)
          }
          ,
          e.prototype.slideHandler = function(t, e, i) {
              var n, o, r, s, a, l = null, c = this;
              if (e = e || !1,
              !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t))
                  if (!1 === e && c.asNavFor(t),
                  n = t,
                  l = c.getLeft(n),
                  s = c.getLeft(c.currentSlide),
                  c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft,
                  !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll))
                      !1 === c.options.fade && (n = c.currentSlide,
                      !0 !== i ? c.animateSlide(s, function() {
                          c.postSlide(n)
                      }) : c.postSlide(n));
                  else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll))
                      !1 === c.options.fade && (n = c.currentSlide,
                      !0 !== i ? c.animateSlide(s, function() {
                          c.postSlide(n)
                      }) : c.postSlide(n));
                  else {
                      if (c.options.autoplay && clearInterval(c.autoPlayTimer),
                      o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n,
                      c.animating = !0,
                      c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
                      r = c.currentSlide,
                      c.currentSlide = o,
                      c.setSlideClasses(c.currentSlide),
                      c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide),
                      c.updateDots(),
                      c.updateArrows(),
                      !0 === c.options.fade)
                          return !0 !== i ? (c.fadeSlideOut(r),
                          c.fadeSlide(o, function() {
                              c.postSlide(o)
                          })) : c.postSlide(o),
                          void c.animateHeight();
                      !0 !== i ? c.animateSlide(l, function() {
                          c.postSlide(o)
                      }) : c.postSlide(o)
                  }
          }
          ,
          e.prototype.startLoad = function() {
              var t = this;
              !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(),
              t.$nextArrow.hide()),
              !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
              t.$slider.addClass("slick-loading")
          }
          ,
          e.prototype.swipeDirection = function() {
              var t, e, i, n, o = this;
              return t = o.touchObject.startX - o.touchObject.curX,
              e = o.touchObject.startY - o.touchObject.curY,
              i = Math.atan2(e, t),
              (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
              n <= 45 && n >= 0 ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
          }
          ,
          e.prototype.swipeEnd = function(t) {
              var e, i, n = this;
              if (n.dragging = !1,
              n.swiping = !1,
              n.scrolling)
                  return n.scrolling = !1,
                  !1;
              if (n.interrupted = !1,
              n.shouldClick = !(n.touchObject.swipeLength > 10),
              void 0 === n.touchObject.curX)
                  return !1;
              if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]),
              n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                  switch (i = n.swipeDirection()) {
                  case "left":
                  case "down":
                      e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(),
                      n.currentDirection = 0;
                      break;
                  case "right":
                  case "up":
                      e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(),
                      n.currentDirection = 1
                  }
                  "vertical" != i && (n.slideHandler(e),
                  n.touchObject = {},
                  n.$slider.trigger("swipe", [n, i]))
              } else
                  n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide),
                  n.touchObject = {})
          }
          ,
          e.prototype.swipeHandler = function(t) {
              var e = this;
              if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse")))
                  switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1,
                  e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
                  !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                  t.data.action) {
                  case "start":
                      e.swipeStart(t);
                      break;
                  case "move":
                      e.swipeMove(t);
                      break;
                  case "end":
                      e.swipeEnd(t)
                  }
          }
          ,
          e.prototype.swipeMove = function(t) {
              var e, i, n, o, r, s, a = this;
              return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null,
              !(!a.dragging || a.scrolling || r && 1 !== r.length) && (e = a.getLeft(a.currentSlide),
              a.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX,
              a.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY,
              a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))),
              s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))),
              !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0,
              !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s),
              i = a.swipeDirection(),
              void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0,
              t.preventDefault()),
              o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1),
              !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
              n = a.touchObject.swipeLength,
              a.touchObject.edgeHit = !1,
              !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction,
              a.touchObject.edgeHit = !0),
              !1 === a.options.vertical ? a.swipeLeft = e + n * o : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * o,
              !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * o),
              !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null,
              !1) : void a.setCSS(a.swipeLeft))))
          }
          ,
          e.prototype.swipeStart = function(t) {
              var e, i = this;
              if (i.interrupted = !0,
              1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow)
                  return i.touchObject = {},
                  !1;
              void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
              i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX,
              i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY,
              i.dragging = !0
          }
          ,
          e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
              var t = this;
              null !== t.$slidesCache && (t.unload(),
              t.$slideTrack.children(this.options.slide).detach(),
              t.$slidesCache.appendTo(t.$slideTrack),
              t.reinit())
          }
          ,
          e.prototype.unload = function() {
              var e = this;
              t(".slick-cloned", e.$slider).remove(),
              e.$dots && e.$dots.remove(),
              e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
              e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
              e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
          }
          ,
          e.prototype.unslick = function(t) {
              var e = this;
              e.$slider.trigger("unslick", [e, t]),
              e.destroy()
          }
          ,
          e.prototype.updateArrows = function() {
              var t = this;
              Math.floor(t.options.slidesToShow / 2),
              !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
              t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
              0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
              t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
              t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
              t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
          }
          ,
          e.prototype.updateDots = function() {
              var t = this;
              null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(),
              t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
          }
          ,
          e.prototype.visibility = function() {
              var t = this;
              t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
          }
          ,
          t.fn.slick = function() {
              var t, i, n = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = n.length;
              for (t = 0; t < s; t++)
                  if ("object" == typeof o || void 0 === o ? n[t].slick = new e(n[t],o) : i = n[t].slick[o].apply(n[t].slick, r),
                  void 0 !== i)
                      return i;
              return n
          }
      }
      ) ? n.apply(e, o) : n) || (t.exports = r)
  }()
}
, function(t, e, i) {
  window.$ = window.jQuery = i(0),
  t.exports = {
      run: function() {
          $(document).ready(function() {
              $(".slider-for-wl").slick({
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: !1,
                  asNavFor: ".slider-nav-wl",
                  responsive: [{
                      breakpoint: 768,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }]
              }),
              $(".slider-nav-wl").slick({
                  infinite: !0,
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  asNavFor: ".slider-for-wl",
                  dots: !1,
                  arrows: !1,
                  centerMode: !0,
                  centerPadding: "0px",
                  focusOnSelect: !0,
                  responsive: [{
                      breakpoint: 1024,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3,
                          infinite: !0
                      }
                  }, {
                      breakpoint: 600,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2
                      }
                  }, {
                      breakpoint: 480,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }]
              });
              var t = $(".pagingInfo");
              $(".slider-nav-wl").on("init reInit afterChange", function(e, i, n, o) {
                  var r = (n || 0) + 1;
                  t.text(r + "/" + i.slideCount)
              }),
              $(".next-slide-wl").click(function() {
                  $(".slider-for-wl").slick("slickNext")
              }),
              $(".prev-slide-wl").click(function() {
                  $(".slider-for-wl").slick("slickPrev")
              });
              $(window).height();
              $(".slick-slide:not(.slick-current) .text-slide-for").click(function() {
                  $(".slider-for-wl").slick("slickNext")
              });
              var e = document.getElementById("scene");
              new Parallax(e),
              $(".slider-for-wl .item").length
          }),
          $("body").addClass("hideOverflowX")
      }
  },
  $(".project_cat .btn-more").mouseenter(function() {
      $(".menu-col-wl").fadeIn()
  }),
  $(".menu-col-wl").mouseleave(function() {
      $(".menu-col-wl").fadeOut()
  })
}
, function(t, e, i) {
  var n = {
      "./web/js/about.js": 24,
      "./web/js/home-page.js": 25,
      "./web/js/our-work.js": 26
  };
  function o(t) {
      var e = r(t);
      return i(e)
  }
  function r(t) {
      if (!i.o(n, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw e.code = "MODULE_NOT_FOUND",
          e
      }
      return n[t]
  }
  o.keys = function() {
      return Object.keys(n)
  }
  ,
  o.resolve = r,
  t.exports = o,
  o.id = 23
}
, function(t, e, i) {
  window.$ = window.jQuery = i(0),
  i(1),
  t.exports = {
      run: function() {
          $(document).ready(function() {
              var t = document.getElementById("scene")
                , e = document.getElementById("scene2");
              new Parallax(t),
              new Parallax(e)
          })
      }
  }
}
, function(t, e, i) {
  window.$ = window.jQuery = i(0),
  t.exports = {
      run: function() {
          $(document).ready(function() {
              var t = document.getElementById("scene");
              new Parallax(t);
              $(window).scroll(function() {
                  var t = $(".circle_ruler").offset().top;
                  $(".circle_ruler").css("top", t / 36 - 110)
              }),
              $(window).width() < 768 && ($(".slider-for").slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: !1,
                  fade: !0,
                  asNavFor: ".slider-nav",
                  touchMove: !1
              }),
              $(".slider-nav").slick({
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  asNavFor: ".slider-for",
                  dots: !1,
                  focusOnSelect: !0,
                  responsive: [{
                      breakpoint: 768,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2
                      }
                  }, {
                      breakpoint: 480,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }]
              })),
              $(".slide-stage").slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: !1,
                  dots: !1,
                  autoplay: !0
              }),
              $(".btn-right-slick").click(function() {
                  $(".slide-stage").slick("slickNext")
              }),
              $(".featured_project:first-child").addClass("show-img"),
              $(".item_project").mouseover(function() {
                  var t = $(this).data("id");
                  $("#" + t);
                  $(".featured_project").removeClass("show-img"),
                  $(".wrap-img-project").removeClass("show-img"),
                  $("#" + t).addClass("show-img"),
                  $("." + t + " .wrap-img-project").addClass("show-img")
              });
              $(".point-sec").waypoint(function(t) {
                  var e = this;
                  "down" === t && (e = this.next());
                  var i = $(e.element).attr("id");
                  $(e.element);
                  $(".text-sec").removeClass("active"),
                  $(".text-sec." + i).addClass("active")
              }, {
                  offset: "-50%"
              }),
              $(".slide-home-banner").waypoint(function(t) {
                  $(".featured_project").addClass("bg-opacity70")
              }, {
                  offset: "80%"
              })
          })
      }
  }
}
, function(t, e, i) {
  window.$ = window.jQuery = i(0),
  i(1),
  t.exports = {
      run: function() {
          function t() {
              $(".wrap-img-project-ow img").each(function() {
                  var t = $(this)
                    , e = t.width()
                    , i = t.height()
                    , n = e / i
                    , o = t.parent().width()
                    , r = t.parent().height();
                  n < o / r ? t.css({
                      width: o + "px",
                      height: "auto",
                      "margin-left": 0
                  }) : t.css({
                      width: "auto",
                      height: r + "px",
                      "margin-left": -(e / (i / r) - o) / 2
                  })
              })
          }
          $(document).ready(function() {
              var e = document.getElementById("scene");
              new Parallax(e);
              $(".slider-for").slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: !1,
                  fade: !0,
                  asNavFor: ".slider-nav",
                  touchMove: !1
              }),
              $(".slider-nav").slick({
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  asNavFor: ".slider-for",
                  dots: !1,
                  focusOnSelect: !0,
                  responsive: [{
                      breakpoint: 1024,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3,
                          infinite: !0
                      }
                  }, {
                      breakpoint: 600,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2
                      }
                  }, {
                      breakpoint: 480,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }]
              }),
              t(),
              $(".wrap-img-project-ow:nth-of-type(1)").find("video.video-ow")[0].play()
          }),
          $(window).resize(function() {
              t()
          }),
          $(".link-video-wrap .nav-link").mouseover(function() {
              var e = $(this).data("id")
                , i = $("#" + e)
                , n = $('.text-right-ow[data-ow="' + e + '"]');
              $(".video-ow").removeClass("show-video"),
              $(".text-right-ow").removeClass("show-video"),
              $("#" + e).addClass("show-video"),
              $(n).addClass("show-video"),
              $("video#" + e).length > 0 && i[0].play(),
              t()
          })
      }
  }
}
, function(t, e, i) {
  i(28),
  i(29);
  i(30);
  var n = i(31)
    , o = function() {
      $(function() {
          $(".count_up").each(function() {
              var t, e, i, n, o, r = $(this), s = r.data("autostart"), a = r.find(".hours"), l = r.find(".minutes"), c = r.find(".seconds"), d = r.find(".milliseconds"), u = r.find(".toggle"), h = r.find(".reset"), f = u.data("pausetext"), p = u.data("resumetext"), g = u.text();
              function m(t, e) {
                  for (t = "" + (0 | t); t.length < e; )
                      t = "0" + t;
                  return t
              }
              function v(t, e, i, n) {
                  a.text(m(t, 2)),
                  l.text(m(e, 2)),
                  c.text(m(i, 2)),
                  d.text(m(n, 2))
              }
              function y() {
                  var r, a, l, c, d;
                  s = "true",
                  r = Date.now(),
                  a = t,
                  l = e,
                  c = i,
                  d = n,
                  o = setInterval(function() {
                      var o = Date.now() - r;
                      v(t = o / 36e5 + a, e = (o / 6e4 + l) % 60, i = (o / 1e3 + c) % 60, n = (o + d) % 100)
                  }, 25),
                  u.text(f)
              }
              function b() {
                  s = "false",
                  clearTimeout(o),
                  u.text(p)
              }
              function w() {
                  s = !1,
                  b(),
                  v(t = e = i = n = 0, e, i, n),
                  u.text(g)
              }
              u.on("click", function() {
                  s ? b() : y()
              }),
              h.on("click", function() {
                  w()
              }),
              w(),
              s && y()
          })
      })
  }
    , r = function() {
      $('a[href*="#"]:not("[data-toggle]")').on("click", function(t) {
          t.preventDefault(),
          $("html, body").animate({
              scrollTop: $($(this).attr("href")).offset().top
          }, 500, "linear")
      })
  }
    , s = function() {
      $(".counter").length && $(".counter").each(function() {
          var t = 1.7 * $(window).height()
            , e = $(this);
          $(window).scroll(function() {
              if (!(parseInt($(window).scrollTop()) >= t))
                  return !1;
              var i = e.attr("data-count");
              $({
                  countNum: e.text()
              }).animate({
                  countNum: i
              }, {
                  duration: 1500,
                  easing: "linear",
                  step: function() {
                      e.text(Math.floor(this.countNum))
                  },
                  complete: function() {
                      e.text(this.countNum)
                  }
              })
          })
      })
  }
    , a = function() {
      $('a[data-toggle="tab"]').on("shown.bs.tab", function(t) {
          n.refresh()
      })
  }
    , l = function() {
      $(".btn-menu").click(function() {
          $(".menu_show").toggleClass("onshow")
      })
  }
    , c = function() {
      $(".loading_page").length && (setTimeout(function() {
          $(".loading_page").addClass("hide_loading")
      }, 1e3),
      setTimeout(function() {
          $(".loading_page_second").addClass("hide_loading")
      }, 1150))
  }
    , d = function() {
      $(".slide_project").owlCarousel({
          loop: !0,
          margin: 10,
          nav: !0,
          navText: ['<div class="fs-13 cl-lightblue text-uppercase">Prev</div>', '<div class="fs-13 cl-lightblue text-uppercase">Next</div>'],
          dots: !1,
          autoplay: !1,
          autoplayTimeout: 8e3,
          onInitialized: function(t) {
              $all = t.item.count,
              $(".slide_project .owl-next .fs-13").text("Next 1/" + $all)
          },
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 1
              },
              1000: {
                  items: 1
              }
          }
      }),
      $(".slide_project").on("changed.owl.carousel", function(t) {
          $all = t.item.count,
          1 == t.item.index ? $index = $all : $index = 1 * t.item.index - 1,
          $(".slide_project .owl-next .fs-13").text("Next " + $index + "/" + $all)
      })
  }
    , u = function() {
      $("[data-fancybox]").fancybox({
          youtube: {
              controls: 1,
              showinfo: 0
          },
          vimeo: {
              color: "f00"
          }
      })
  }
    , h = function() {
      $(".parallax").length && $(".parallax").each(function() {
          var t = $(this).find(">img").attr("src");
          $(this).find(">img").attr("style", "opacity: 0"),
          $(this).attr("style", "background-image: url(" + t + ")")
      })
  };
  jQuery(document).ready(function() {
      o(),
      s(),
      u(),
      r(),
      l(),
      c(),
      d(),
      h(),
      a(),
      setTimeout(function() {
          n.init({
              offset: 100,
              duration: 800,
              easing: "ease-in-sine",
              disable: function() {
                  return window.innerWidth < 768
              }
          })
      }, 1800),
      $(window).scroll(function() {
          $(".logo_site").offset().top > 50 ? $(".logo-right").addClass("hide-logo-right") : $(".logo-right").removeClass("hide-logo-right")
      })
  })
}
, function(t, e) {
  /*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
  !function() {
      "use strict";
      var t = 0
        , e = {};
      function i(n) {
          if (!n)
              throw new Error("No options passed to Waypoint constructor");
          if (!n.element)
              throw new Error("No element option passed to Waypoint constructor");
          if (!n.handler)
              throw new Error("No handler option passed to Waypoint constructor");
          this.key = "waypoint-" + t,
          this.options = i.Adapter.extend({}, i.defaults, n),
          this.element = this.options.element,
          this.adapter = new i.Adapter(this.element),
          this.callback = n.handler,
          this.axis = this.options.horizontal ? "horizontal" : "vertical",
          this.enabled = this.options.enabled,
          this.triggerPoint = null,
          this.group = i.Group.findOrCreate({
              name: this.options.group,
              axis: this.axis
          }),
          this.context = i.Context.findOrCreateByElement(this.options.context),
          i.offsetAliases[this.options.offset] && (this.options.offset = i.offsetAliases[this.options.offset]),
          this.group.add(this),
          this.context.add(this),
          e[this.key] = this,
          t += 1
      }
      i.prototype.queueTrigger = function(t) {
          this.group.queueTrigger(this, t)
      }
      ,
      i.prototype.trigger = function(t) {
          this.enabled && this.callback && this.callback.apply(this, t)
      }
      ,
      i.prototype.destroy = function() {
          this.context.remove(this),
          this.group.remove(this),
          delete e[this.key]
      }
      ,
      i.prototype.disable = function() {
          return this.enabled = !1,
          this
      }
      ,
      i.prototype.enable = function() {
          return this.context.refresh(),
          this.enabled = !0,
          this
      }
      ,
      i.prototype.next = function() {
          return this.group.next(this)
      }
      ,
      i.prototype.previous = function() {
          return this.group.previous(this)
      }
      ,
      i.invokeAll = function(t) {
          var i = [];
          for (var n in e)
              i.push(e[n]);
          for (var o = 0, r = i.length; o < r; o++)
              i[o][t]()
      }
      ,
      i.destroyAll = function() {
          i.invokeAll("destroy")
      }
      ,
      i.disableAll = function() {
          i.invokeAll("disable")
      }
      ,
      i.enableAll = function() {
          for (var t in i.Context.refreshAll(),
          e)
              e[t].enabled = !0;
          return this
      }
      ,
      i.refreshAll = function() {
          i.Context.refreshAll()
      }
      ,
      i.viewportHeight = function() {
          return window.innerHeight || document.documentElement.clientHeight
      }
      ,
      i.viewportWidth = function() {
          return document.documentElement.clientWidth
      }
      ,
      i.adapters = [],
      i.defaults = {
          context: window,
          continuous: !0,
          enabled: !0,
          group: "default",
          horizontal: !1,
          offset: 0
      },
      i.offsetAliases = {
          "bottom-in-view": function() {
              return this.context.innerHeight() - this.adapter.outerHeight()
          },
          "right-in-view": function() {
              return this.context.innerWidth() - this.adapter.outerWidth()
          }
      },
      window.Waypoint = i
  }(),
  function() {
      "use strict";
      function t(t) {
          window.setTimeout(t, 1e3 / 60)
      }
      var e = 0
        , i = {}
        , n = window.Waypoint
        , o = window.onload;
      function r(t) {
          this.element = t,
          this.Adapter = n.Adapter,
          this.adapter = new this.Adapter(t),
          this.key = "waypoint-context-" + e,
          this.didScroll = !1,
          this.didResize = !1,
          this.oldScroll = {
              x: this.adapter.scrollLeft(),
              y: this.adapter.scrollTop()
          },
          this.waypoints = {
              vertical: {},
              horizontal: {}
          },
          t.waypointContextKey = this.key,
          i[t.waypointContextKey] = this,
          e += 1,
          n.windowContext || (n.windowContext = !0,
          n.windowContext = new r(window)),
          this.createThrottledScrollHandler(),
          this.createThrottledResizeHandler()
      }
      r.prototype.add = function(t) {
          var e = t.options.horizontal ? "horizontal" : "vertical";
          this.waypoints[e][t.key] = t,
          this.refresh()
      }
      ,
      r.prototype.checkEmpty = function() {
          var t = this.Adapter.isEmptyObject(this.waypoints.horizontal)
            , e = this.Adapter.isEmptyObject(this.waypoints.vertical)
            , n = this.element == this.element.window;
          t && e && !n && (this.adapter.off(".waypoints"),
          delete i[this.key])
      }
      ,
      r.prototype.createThrottledResizeHandler = function() {
          var t = this;
          function e() {
              t.handleResize(),
              t.didResize = !1
          }
          this.adapter.on("resize.waypoints", function() {
              t.didResize || (t.didResize = !0,
              n.requestAnimationFrame(e))
          })
      }
      ,
      r.prototype.createThrottledScrollHandler = function() {
          var t = this;
          function e() {
              t.handleScroll(),
              t.didScroll = !1
          }
          this.adapter.on("scroll.waypoints", function() {
              t.didScroll && !n.isTouch || (t.didScroll = !0,
              n.requestAnimationFrame(e))
          })
      }
      ,
      r.prototype.handleResize = function() {
          n.Context.refreshAll()
      }
      ,
      r.prototype.handleScroll = function() {
          var t = {}
            , e = {
              horizontal: {
                  newScroll: this.adapter.scrollLeft(),
                  oldScroll: this.oldScroll.x,
                  forward: "right",
                  backward: "left"
              },
              vertical: {
                  newScroll: this.adapter.scrollTop(),
                  oldScroll: this.oldScroll.y,
                  forward: "down",
                  backward: "up"
              }
          };
          for (var i in e) {
              var n = e[i]
                , o = n.newScroll > n.oldScroll ? n.forward : n.backward;
              for (var r in this.waypoints[i]) {
                  var s = this.waypoints[i][r];
                  if (null !== s.triggerPoint) {
                      var a = n.oldScroll < s.triggerPoint
                        , l = n.newScroll >= s.triggerPoint;
                      (a && l || !a && !l) && (s.queueTrigger(o),
                      t[s.group.id] = s.group)
                  }
              }
          }
          for (var c in t)
              t[c].flushTriggers();
          this.oldScroll = {
              x: e.horizontal.newScroll,
              y: e.vertical.newScroll
          }
      }
      ,
      r.prototype.innerHeight = function() {
          return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
      }
      ,
      r.prototype.remove = function(t) {
          delete this.waypoints[t.axis][t.key],
          this.checkEmpty()
      }
      ,
      r.prototype.innerWidth = function() {
          return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
      }
      ,
      r.prototype.destroy = function() {
          var t = [];
          for (var e in this.waypoints)
              for (var i in this.waypoints[e])
                  t.push(this.waypoints[e][i]);
          for (var n = 0, o = t.length; n < o; n++)
              t[n].destroy()
      }
      ,
      r.prototype.refresh = function() {
          var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), o = {};
          for (var r in this.handleScroll(),
          t = {
              horizontal: {
                  contextOffset: e ? 0 : i.left,
                  contextScroll: e ? 0 : this.oldScroll.x,
                  contextDimension: this.innerWidth(),
                  oldScroll: this.oldScroll.x,
                  forward: "right",
                  backward: "left",
                  offsetProp: "left"
              },
              vertical: {
                  contextOffset: e ? 0 : i.top,
                  contextScroll: e ? 0 : this.oldScroll.y,
                  contextDimension: this.innerHeight(),
                  oldScroll: this.oldScroll.y,
                  forward: "down",
                  backward: "up",
                  offsetProp: "top"
              }
          }) {
              var s = t[r];
              for (var a in this.waypoints[r]) {
                  var l, c, d, u, h = this.waypoints[r][a], f = h.options.offset, p = h.triggerPoint, g = 0, m = null == p;
                  h.element !== h.element.window && (g = h.adapter.offset()[s.offsetProp]),
                  "function" == typeof f ? f = f.apply(h) : "string" == typeof f && (f = parseFloat(f),
                  h.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))),
                  l = s.contextScroll - s.contextOffset,
                  h.triggerPoint = Math.floor(g + l - f),
                  c = p < s.oldScroll,
                  d = h.triggerPoint >= s.oldScroll,
                  u = !c && !d,
                  !m && (c && d) ? (h.queueTrigger(s.backward),
                  o[h.group.id] = h.group) : !m && u ? (h.queueTrigger(s.forward),
                  o[h.group.id] = h.group) : m && s.oldScroll >= h.triggerPoint && (h.queueTrigger(s.forward),
                  o[h.group.id] = h.group)
              }
          }
          return n.requestAnimationFrame(function() {
              for (var t in o)
                  o[t].flushTriggers()
          }),
          this
      }
      ,
      r.findOrCreateByElement = function(t) {
          return r.findByElement(t) || new r(t)
      }
      ,
      r.refreshAll = function() {
          for (var t in i)
              i[t].refresh()
      }
      ,
      r.findByElement = function(t) {
          return i[t.waypointContextKey]
      }
      ,
      window.onload = function() {
          o && o(),
          r.refreshAll()
      }
      ,
      n.requestAnimationFrame = function(e) {
          (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
      }
      ,
      n.Context = r
  }(),
  function() {
      "use strict";
      function t(t, e) {
          return t.triggerPoint - e.triggerPoint
      }
      function e(t, e) {
          return e.triggerPoint - t.triggerPoint
      }
      var i = {
          vertical: {},
          horizontal: {}
      }
        , n = window.Waypoint;
      function o(t) {
          this.name = t.name,
          this.axis = t.axis,
          this.id = this.name + "-" + this.axis,
          this.waypoints = [],
          this.clearTriggerQueues(),
          i[this.axis][this.name] = this
      }
      o.prototype.add = function(t) {
          this.waypoints.push(t)
      }
      ,
      o.prototype.clearTriggerQueues = function() {
          this.triggerQueues = {
              up: [],
              down: [],
              left: [],
              right: []
          }
      }
      ,
      o.prototype.flushTriggers = function() {
          for (var i in this.triggerQueues) {
              var n = this.triggerQueues[i]
                , o = "up" === i || "left" === i;
              n.sort(o ? e : t);
              for (var r = 0, s = n.length; r < s; r += 1) {
                  var a = n[r];
                  (a.options.continuous || r === n.length - 1) && a.trigger([i])
              }
          }
          this.clearTriggerQueues()
      }
      ,
      o.prototype.next = function(e) {
          this.waypoints.sort(t);
          var i = n.Adapter.inArray(e, this.waypoints);
          return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
      }
      ,
      o.prototype.previous = function(e) {
          this.waypoints.sort(t);
          var i = n.Adapter.inArray(e, this.waypoints);
          return i ? this.waypoints[i - 1] : null
      }
      ,
      o.prototype.queueTrigger = function(t, e) {
          this.triggerQueues[e].push(t)
      }
      ,
      o.prototype.remove = function(t) {
          var e = n.Adapter.inArray(t, this.waypoints);
          e > -1 && this.waypoints.splice(e, 1)
      }
      ,
      o.prototype.first = function() {
          return this.waypoints[0]
      }
      ,
      o.prototype.last = function() {
          return this.waypoints[this.waypoints.length - 1]
      }
      ,
      o.findOrCreate = function(t) {
          return i[t.axis][t.name] || new o(t)
      }
      ,
      n.Group = o
  }(),
  function() {
      "use strict";
      var t = window.jQuery
        , e = window.Waypoint;
      function i(e) {
          this.$element = t(e)
      }
      t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, e) {
          i.prototype[e] = function() {
              var t = Array.prototype.slice.call(arguments);
              return this.$element[e].apply(this.$element, t)
          }
      }),
      t.each(["extend", "inArray", "isEmptyObject"], function(e, n) {
          i[n] = t[n]
      }),
      e.adapters.push({
          name: "jquery",
          Adapter: i
      }),
      e.Adapter = i
  }(),
  function() {
      "use strict";
      var t = window.Waypoint;
      function e(e) {
          return function() {
              var i = []
                , n = arguments[0];
              return e.isFunction(arguments[0]) && ((n = e.extend({}, arguments[1])).handler = arguments[0]),
              this.each(function() {
                  var o = e.extend({}, n, {
                      element: this
                  });
                  "string" == typeof o.context && (o.context = e(this).closest(o.context)[0]),
                  i.push(new t(o))
              }),
              i
          }
      }
      window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
  }()
}
, function(t, e) {
  !function(t, e, i, n) {
      "use strict";
      function o(t, e) {
          var n, o, r, s = [], a = 0;
          t && t.isDefaultPrevented() || (t.preventDefault(),
          e = e || {},
          t && t.data && (e = f(t.data.options, e)),
          n = e.$target || i(t.currentTarget).trigger("blur"),
          (r = i.fancybox.getInstance()) && r.$trigger && r.$trigger.is(n) || (e.selector ? s = i(e.selector) : (o = n.attr("data-fancybox") || "") ? s = (s = t.data ? t.data.items : []).length ? s.filter('[data-fancybox="' + o + '"]') : i('[data-fancybox="' + o + '"]') : s = [n],
          (a = i(s).index(n)) < 0 && (a = 0),
          (r = i.fancybox.open(s, e, a)).$trigger = n))
      }
      if (t.console = t.console || {
          info: function(t) {}
      },
      i) {
          if (i.fn.fancybox)
              return void console.info("fancyBox already initialized");
          var r = {
              closeExisting: !1,
              loop: !1,
              gutter: 50,
              keyboard: !0,
              preventCaptionOverlap: !0,
              arrows: !0,
              infobar: !0,
              smallBtn: "auto",
              toolbar: "auto",
              buttons: ["zoom", "slideShow", "thumbs", "close"],
              idleTime: 3,
              protect: !1,
              modal: !1,
              image: {
                  preload: !1
              },
              ajax: {
                  settings: {
                      data: {
                          fancybox: !0
                      }
                  }
              },
              iframe: {
                  tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                  preload: !0,
                  css: {},
                  attr: {
                      scrolling: "auto"
                  }
              },
              video: {
                  tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                  format: "",
                  autoStart: !0
              },
              defaultType: "image",
              animationEffect: "zoom",
              animationDuration: 366,
              zoomOpacity: "auto",
              transitionEffect: "fade",
              transitionDuration: 366,
              slideClass: "",
              baseClass: "",
              baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
              spinnerTpl: '<div class="fancybox-loading"></div>',
              errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
              btnTpl: {
                  download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                  zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                  close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                  arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                  arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                  smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
              },
              parentEl: "body",
              hideScrollbar: !0,
              autoFocus: !0,
              backFocus: !0,
              trapFocus: !0,
              fullScreen: {
                  autoStart: !1
              },
              touch: {
                  vertical: !0,
                  momentum: !0
              },
              hash: null,
              media: {},
              slideShow: {
                  autoStart: !1,
                  speed: 3e3
              },
              thumbs: {
                  autoStart: !1,
                  hideOnClose: !0,
                  parentEl: ".fancybox-container",
                  axis: "y"
              },
              wheel: "auto",
              onInit: i.noop,
              beforeLoad: i.noop,
              afterLoad: i.noop,
              beforeShow: i.noop,
              afterShow: i.noop,
              beforeClose: i.noop,
              afterClose: i.noop,
              onActivate: i.noop,
              onDeactivate: i.noop,
              clickContent: function(t, e) {
                  return "image" === t.type && "zoom"
              },
              clickSlide: "close",
              clickOutside: "close",
              dblclickContent: !1,
              dblclickSlide: !1,
              dblclickOutside: !1,
              mobile: {
                  preventCaptionOverlap: !1,
                  idleTime: !1,
                  clickContent: function(t, e) {
                      return "image" === t.type && "toggleControls"
                  },
                  clickSlide: function(t, e) {
                      return "image" === t.type ? "toggleControls" : "close"
                  },
                  dblclickContent: function(t, e) {
                      return "image" === t.type && "zoom"
                  },
                  dblclickSlide: function(t, e) {
                      return "image" === t.type && "zoom"
                  }
              },
              lang: "en",
              i18n: {
                  en: {
                      CLOSE: "Close",
                      NEXT: "Next",
                      PREV: "Previous",
                      ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                      PLAY_START: "Start slideshow",
                      PLAY_STOP: "Pause slideshow",
                      FULL_SCREEN: "Full screen",
                      THUMBS: "Thumbnails",
                      DOWNLOAD: "Download",
                      SHARE: "Share",
                      ZOOM: "Zoom"
                  },
                  de: {
                      CLOSE: "Schlie&szlig;en",
                      NEXT: "Weiter",
                      PREV: "Zur&uuml;ck",
                      ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                      PLAY_START: "Diaschau starten",
                      PLAY_STOP: "Diaschau beenden",
                      FULL_SCREEN: "Vollbild",
                      THUMBS: "Vorschaubilder",
                      DOWNLOAD: "Herunterladen",
                      SHARE: "Teilen",
                      ZOOM: "Vergr&ouml;&szlig;ern"
                  }
              }
          }
            , s = i(t)
            , a = i(e)
            , l = 0
            , c = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
              return t.setTimeout(e, 1e3 / 60)
          }
            , d = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
              t.clearTimeout(e)
          }
            , u = function() {
              var t, i = e.createElement("fakeelement"), n = {
                  transition: "transitionend",
                  OTransition: "oTransitionEnd",
                  MozTransition: "transitionend",
                  WebkitTransition: "webkitTransitionEnd"
              };
              for (t in n)
                  if (void 0 !== i.style[t])
                      return n[t];
              return "transitionend"
          }()
            , h = function(t) {
              return t && t.length && t[0].offsetHeight
          }
            , f = function(t, e) {
              var n = i.extend(!0, {}, t, e);
              return i.each(e, function(t, e) {
                  i.isArray(e) && (n[t] = e)
              }),
              n
          }
            , p = function(t) {
              var n, o;
              return !(!t || t.ownerDocument !== e) && (i(".fancybox-container").css("pointer-events", "none"),
              n = {
                  x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                  y: t.getBoundingClientRect().top + t.offsetHeight / 2
              },
              o = e.elementFromPoint(n.x, n.y) === t,
              i(".fancybox-container").css("pointer-events", ""),
              o)
          }
            , g = function(t, e, n) {
              var o = this;
              o.opts = f({
                  index: n
              }, i.fancybox.defaults),
              i.isPlainObject(e) && (o.opts = f(o.opts, e)),
              i.fancybox.isMobile && (o.opts = f(o.opts, o.opts.mobile)),
              o.id = o.opts.id || ++l,
              o.currIndex = parseInt(o.opts.index, 10) || 0,
              o.prevIndex = null,
              o.prevPos = null,
              o.currPos = 0,
              o.firstRun = !0,
              o.group = [],
              o.slides = {},
              o.addContent(t),
              o.group.length && o.init()
          };
          i.extend(g.prototype, {
              init: function() {
                  var n, o, r = this, s = r.group[r.currIndex].opts;
                  s.closeExisting && i.fancybox.close(!0),
                  i("body").addClass("fancybox-active"),
                  !i.fancybox.getInstance() && !1 !== s.hideScrollbar && !i.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"),
                  i("body").addClass("compensate-for-scrollbar")),
                  o = "",
                  i.each(s.buttons, function(t, e) {
                      o += s.btnTpl[e] || ""
                  }),
                  n = i(r.translate(r, s.baseTpl.replace("{{buttons}}", o).replace("{{arrows}}", s.btnTpl.arrowLeft + s.btnTpl.arrowRight))).attr("id", "fancybox-container-" + r.id).addClass(s.baseClass).data("FancyBox", r).appendTo(s.parentEl),
                  r.$refs = {
                      container: n
                  },
                  ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) {
                      r.$refs[t] = n.find(".fancybox-" + t)
                  }),
                  r.trigger("onInit"),
                  r.activate(),
                  r.jumpTo(r.currIndex)
              },
              translate: function(t, e) {
                  var i = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                  return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                      return void 0 === i[e] ? t : i[e]
                  })
              },
              addContent: function(t) {
                  var e, n = this, o = i.makeArray(t);
                  i.each(o, function(t, e) {
                      var o, r, s, a, l, c = {}, d = {};
                      i.isPlainObject(e) ? (c = e,
                      d = e.opts || e) : "object" === i.type(e) && i(e).length ? (d = (o = i(e)).data() || {},
                      (d = i.extend(!0, {}, d, d.options)).$orig = o,
                      c.src = n.opts.src || d.src || o.attr("href"),
                      c.type || c.src || (c.type = "inline",
                      c.src = e)) : c = {
                          type: "html",
                          src: e + ""
                      },
                      c.opts = i.extend(!0, {}, n.opts, d),
                      i.isArray(d.buttons) && (c.opts.buttons = d.buttons),
                      i.fancybox.isMobile && c.opts.mobile && (c.opts = f(c.opts, c.opts.mobile)),
                      r = c.type || c.opts.type,
                      a = c.src || "",
                      !r && a && ((s = a.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (r = "video",
                      c.opts.video.format || (c.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? r = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? (r = "iframe",
                      c = i.extend(!0, c, {
                          contentType: "pdf",
                          opts: {
                              iframe: {
                                  preload: !1
                              }
                          }
                      })) : "#" === a.charAt(0) && (r = "inline")),
                      r ? c.type = r : n.trigger("objectNeedsType", c),
                      c.contentType || (c.contentType = i.inArray(c.type, ["html", "inline", "ajax"]) > -1 ? "html" : c.type),
                      c.index = n.group.length,
                      "auto" == c.opts.smallBtn && (c.opts.smallBtn = i.inArray(c.type, ["html", "inline", "ajax"]) > -1),
                      "auto" === c.opts.toolbar && (c.opts.toolbar = !c.opts.smallBtn),
                      c.$thumb = c.opts.$thumb || null,
                      c.opts.$trigger && c.index === n.opts.index && (c.$thumb = c.opts.$trigger.find("img:first"),
                      c.$thumb.length && (c.opts.$orig = c.opts.$trigger)),
                      c.$thumb && c.$thumb.length || !c.opts.$orig || (c.$thumb = c.opts.$orig.find("img:first")),
                      c.$thumb && !c.$thumb.length && (c.$thumb = null),
                      c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null),
                      "function" === i.type(c.opts.caption) && (c.opts.caption = c.opts.caption.apply(e, [n, c])),
                      "function" === i.type(n.opts.caption) && (c.opts.caption = n.opts.caption.apply(e, [n, c])),
                      c.opts.caption instanceof i || (c.opts.caption = void 0 === c.opts.caption ? "" : c.opts.caption + ""),
                      "ajax" === c.type && ((l = a.split(/\s+/, 2)).length > 1 && (c.src = l.shift(),
                      c.opts.filter = l.shift())),
                      c.opts.modal && (c.opts = i.extend(!0, c.opts, {
                          trapFocus: !0,
                          infobar: 0,
                          toolbar: 0,
                          smallBtn: 0,
                          keyboard: 0,
                          slideShow: 0,
                          fullScreen: 0,
                          thumbs: 0,
                          touch: 0,
                          clickContent: !1,
                          clickSlide: !1,
                          clickOutside: !1,
                          dblclickContent: !1,
                          dblclickSlide: !1,
                          dblclickOutside: !1
                      })),
                      n.group.push(c)
                  }),
                  Object.keys(n.slides).length && (n.updateControls(),
                  (e = n.Thumbs) && e.isActive && (e.create(),
                  e.focus()))
              },
              addEvents: function() {
                  var e = this;
                  e.removeEvents(),
                  e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                      t.stopPropagation(),
                      t.preventDefault(),
                      e.close(t)
                  }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(t) {
                      t.stopPropagation(),
                      t.preventDefault(),
                      e.previous()
                  }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(t) {
                      t.stopPropagation(),
                      t.preventDefault(),
                      e.next()
                  }).on("click.fb", "[data-fancybox-zoom]", function(t) {
                      e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                  }),
                  s.on("orientationchange.fb resize.fb", function(t) {
                      t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && d(e.requestId),
                      e.requestId = c(function() {
                          e.update(t)
                      })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(),
                      setTimeout(function() {
                          e.$refs.stage.show(),
                          e.update(t)
                      }, i.fancybox.isMobile ? 600 : 250))
                  }),
                  a.on("keydown.fb", function(t) {
                      var n = (i.fancybox ? i.fancybox.getInstance() : null).current
                        , o = t.keyCode || t.which;
                      if (9 != o)
                          return !n.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || i(t.target).is("input,textarea,video,audio") ? void 0 : 8 === o || 27 === o ? (t.preventDefault(),
                          void e.close(t)) : 37 === o || 38 === o ? (t.preventDefault(),
                          void e.previous()) : 39 === o || 40 === o ? (t.preventDefault(),
                          void e.next()) : void e.trigger("afterKeydown", t, o);
                      n.opts.trapFocus && e.focus(t)
                  }),
                  e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0,
                  a.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) {
                      e.idleSecondsCounter = 0,
                      e.isIdle && e.showControls(),
                      e.isIdle = !1
                  }),
                  e.idleInterval = t.setInterval(function() {
                      ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0,
                      e.idleSecondsCounter = 0,
                      e.hideControls())
                  }, 1e3))
              },
              removeEvents: function() {
                  var e = this;
                  s.off("orientationchange.fb resize.fb"),
                  a.off("keydown.fb .fb-idle"),
                  this.$refs.container.off(".fb-close .fb-prev .fb-next"),
                  e.idleInterval && (t.clearInterval(e.idleInterval),
                  e.idleInterval = null)
              },
              previous: function(t) {
                  return this.jumpTo(this.currPos - 1, t)
              },
              next: function(t) {
                  return this.jumpTo(this.currPos + 1, t)
              },
              jumpTo: function(t, e) {
                  var n, o, r, s, a, l, c, d, u, f = this, p = f.group.length;
                  if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
                      if (t = parseInt(t, 10),
                      !(r = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || t >= p))
                          return !1;
                      if (n = f.firstRun = !Object.keys(f.slides).length,
                      a = f.current,
                      f.prevIndex = f.currIndex,
                      f.prevPos = f.currPos,
                      s = f.createSlide(t),
                      p > 1 && ((r || s.index < p - 1) && f.createSlide(t + 1),
                      (r || s.index > 0) && f.createSlide(t - 1)),
                      f.current = s,
                      f.currIndex = s.index,
                      f.currPos = s.pos,
                      f.trigger("beforeShow", n),
                      f.updateControls(),
                      s.forcedDuration = void 0,
                      i.isNumeric(e) ? s.forcedDuration = e : e = s.opts[n ? "animationDuration" : "transitionDuration"],
                      e = parseInt(e, 10),
                      o = f.isMoved(s),
                      s.$slide.addClass("fancybox-slide--current"),
                      n)
                          return s.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"),
                          f.$refs.container.addClass("fancybox-is-open").trigger("focus"),
                          f.loadSlide(s),
                          void f.preload("image");
                      l = i.fancybox.getTranslate(a.$slide),
                      c = i.fancybox.getTranslate(f.$refs.stage),
                      i.each(f.slides, function(t, e) {
                          i.fancybox.stop(e.$slide, !0)
                      }),
                      a.pos !== s.pos && (a.isComplete = !1),
                      a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),
                      o ? (u = l.left - (a.pos * l.width + a.pos * a.opts.gutter),
                      i.each(f.slides, function(t, n) {
                          n.$slide.removeClass("fancybox-animated").removeClass(function(t, e) {
                              return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                          });
                          var o = n.pos * l.width + n.pos * n.opts.gutter;
                          i.fancybox.setTranslate(n.$slide, {
                              top: 0,
                              left: o - c.left + u
                          }),
                          n.pos !== s.pos && n.$slide.addClass("fancybox-slide--" + (n.pos > s.pos ? "next" : "previous")),
                          h(n.$slide),
                          i.fancybox.animate(n.$slide, {
                              top: 0,
                              left: (n.pos - s.pos) * l.width + (n.pos - s.pos) * n.opts.gutter
                          }, e, function() {
                              n.$slide.css({
                                  transform: "",
                                  opacity: ""
                              }).removeClass("fancybox-slide--next fancybox-slide--previous"),
                              n.pos === f.currPos && f.complete()
                          })
                      })) : e && s.opts.transitionEffect && (d = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect,
                      a.$slide.addClass("fancybox-slide--" + (a.pos > s.pos ? "next" : "previous")),
                      i.fancybox.animate(a.$slide, d, e, function() {
                          a.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")
                      }, !1)),
                      s.isLoaded ? f.revealContent(s) : f.loadSlide(s),
                      f.preload("image")
                  }
              },
              createSlide: function(t) {
                  var e, n, o = this;
                  return n = (n = t % o.group.length) < 0 ? o.group.length + n : n,
                  !o.slides[t] && o.group[n] && (e = i('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage),
                  o.slides[t] = i.extend(!0, {}, o.group[n], {
                      pos: t,
                      $slide: e,
                      isLoaded: !1
                  }),
                  o.updateSlide(o.slides[t])),
                  o.slides[t]
              },
              scaleToActual: function(t, e, n) {
                  var o, r, s, a, l, c = this, d = c.current, u = d.$content, h = i.fancybox.getTranslate(d.$slide).width, f = i.fancybox.getTranslate(d.$slide).height, p = d.width, g = d.height;
                  c.isAnimating || c.isMoved() || !u || "image" != d.type || !d.isLoaded || d.hasError || (c.isAnimating = !0,
                  i.fancybox.stop(u),
                  t = void 0 === t ? .5 * h : t,
                  e = void 0 === e ? .5 * f : e,
                  (o = i.fancybox.getTranslate(u)).top -= i.fancybox.getTranslate(d.$slide).top,
                  o.left -= i.fancybox.getTranslate(d.$slide).left,
                  a = p / o.width,
                  l = g / o.height,
                  r = .5 * h - .5 * p,
                  s = .5 * f - .5 * g,
                  p > h && ((r = o.left * a - (t * a - t)) > 0 && (r = 0),
                  r < h - p && (r = h - p)),
                  g > f && ((s = o.top * l - (e * l - e)) > 0 && (s = 0),
                  s < f - g && (s = f - g)),
                  c.updateCursor(p, g),
                  i.fancybox.animate(u, {
                      top: s,
                      left: r,
                      scaleX: a,
                      scaleY: l
                  }, n || 366, function() {
                      c.isAnimating = !1
                  }),
                  c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop())
              },
              scaleToFit: function(t) {
                  var e, n = this, o = n.current, r = o.$content;
                  n.isAnimating || n.isMoved() || !r || "image" != o.type || !o.isLoaded || o.hasError || (n.isAnimating = !0,
                  i.fancybox.stop(r),
                  e = n.getFitPos(o),
                  n.updateCursor(e.width, e.height),
                  i.fancybox.animate(r, {
                      top: e.top,
                      left: e.left,
                      scaleX: e.width / r.width(),
                      scaleY: e.height / r.height()
                  }, t || 366, function() {
                      n.isAnimating = !1
                  }))
              },
              getFitPos: function(t) {
                  var e, n, o, r, s = t.$content, a = t.$slide, l = t.width || t.opts.width, c = t.height || t.opts.height, d = {};
                  return !!(t.isLoaded && s && s.length) && (e = i.fancybox.getTranslate(this.$refs.stage).width,
                  n = i.fancybox.getTranslate(this.$refs.stage).height,
                  e -= parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + parseFloat(s.css("marginLeft")) + parseFloat(s.css("marginRight")),
                  n -= parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + parseFloat(s.css("marginTop")) + parseFloat(s.css("marginBottom")),
                  l && c || (l = e,
                  c = n),
                  (l *= o = Math.min(1, e / l, n / c)) > e - .5 && (l = e),
                  (c *= o) > n - .5 && (c = n),
                  "image" === t.type ? (d.top = Math.floor(.5 * (n - c)) + parseFloat(a.css("paddingTop")),
                  d.left = Math.floor(.5 * (e - l)) + parseFloat(a.css("paddingLeft"))) : "video" === t.contentType && (c > l / (r = t.opts.width && t.opts.height ? l / c : t.opts.ratio || 16 / 9) ? c = l / r : l > c * r && (l = c * r)),
                  d.width = l,
                  d.height = c,
                  d)
              },
              update: function(t) {
                  var e = this;
                  i.each(e.slides, function(i, n) {
                      e.updateSlide(n, t)
                  })
              },
              updateSlide: function(t, e) {
                  var n = this
                    , o = t && t.$content
                    , r = t.width || t.opts.width
                    , s = t.height || t.opts.height
                    , a = t.$slide;
                  n.adjustCaption(t),
                  o && (r || s || "video" === t.contentType) && !t.hasError && (i.fancybox.stop(o),
                  i.fancybox.setTranslate(o, n.getFitPos(t)),
                  t.pos === n.currPos && (n.isAnimating = !1,
                  n.updateCursor())),
                  n.adjustLayout(t),
                  a.length && (a.trigger("refresh"),
                  t.pos === n.currPos && n.$refs.toolbar.add(n.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", a.get(0).scrollHeight > a.get(0).clientHeight)),
                  n.trigger("onUpdate", t, e)
              },
              centerSlide: function(t) {
                  var e = this
                    , n = e.current
                    , o = n.$slide;
                  !e.isClosing && n && (o.siblings().css({
                      transform: "",
                      opacity: ""
                  }),
                  o.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),
                  i.fancybox.animate(o, {
                      top: 0,
                      left: 0,
                      opacity: 1
                  }, void 0 === t ? 0 : t, function() {
                      o.css({
                          transform: "",
                          opacity: ""
                      }),
                      n.isComplete || e.complete()
                  }, !1))
              },
              isMoved: function(t) {
                  var e, n, o = t || this.current;
                  return !!o && (n = i.fancybox.getTranslate(this.$refs.stage),
                  e = i.fancybox.getTranslate(o.$slide),
                  !o.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - n.top) > .5 || Math.abs(e.left - n.left) > .5))
              },
              updateCursor: function(t, e) {
                  var n, o, r = this, s = r.current, a = r.$refs.container;
                  s && !r.isClosing && r.Guestures && (a.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),
                  o = !!(n = r.canPan(t, e)) || r.isZoomable(),
                  a.toggleClass("fancybox-is-zoomable", o),
                  i("[data-fancybox-zoom]").prop("disabled", !o),
                  n ? a.addClass("fancybox-can-pan") : o && ("zoom" === s.opts.clickContent || i.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? a.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || r.group.length > 1) && "video" !== s.contentType && a.addClass("fancybox-can-swipe"))
              },
              isZoomable: function() {
                  var t, e = this, i = e.current;
                  if (i && !e.isClosing && "image" === i.type && !i.hasError) {
                      if (!i.isLoaded)
                          return !0;
                      if ((t = e.getFitPos(i)) && (i.width > t.width || i.height > t.height))
                          return !0
                  }
                  return !1
              },
              isScaledDown: function(t, e) {
                  var n = !1
                    , o = this.current
                    , r = o.$content;
                  return void 0 !== t && void 0 !== e ? n = t < o.width && e < o.height : r && (n = (n = i.fancybox.getTranslate(r)).width < o.width && n.height < o.height),
                  n
              },
              canPan: function(t, e) {
                  var n = this.current
                    , o = null
                    , r = !1;
                  return "image" === n.type && (n.isComplete || t && e) && !n.hasError && (r = this.getFitPos(n),
                  void 0 !== t && void 0 !== e ? o = {
                      width: t,
                      height: e
                  } : n.isComplete && (o = i.fancybox.getTranslate(n.$content)),
                  o && r && (r = Math.abs(o.width - r.width) > 1.5 || Math.abs(o.height - r.height) > 1.5)),
                  r
              },
              loadSlide: function(t) {
                  var e, n, o, r = this;
                  if (!t.isLoading && !t.isLoaded) {
                      if (t.isLoading = !0,
                      !1 === r.trigger("beforeLoad", t))
                          return t.isLoading = !1,
                          !1;
                      switch (e = t.type,
                      (n = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass),
                      e) {
                      case "image":
                          r.setImage(t);
                          break;
                      case "iframe":
                          r.setIframe(t);
                          break;
                      case "html":
                          r.setContent(t, t.src || t.content);
                          break;
                      case "video":
                          r.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                          break;
                      case "inline":
                          i(t.src).length ? r.setContent(t, i(t.src)) : r.setError(t);
                          break;
                      case "ajax":
                          r.showLoading(t),
                          o = i.ajax(i.extend({}, t.opts.ajax.settings, {
                              url: t.src,
                              success: function(e, i) {
                                  "success" === i && r.setContent(t, e)
                              },
                              error: function(e, i) {
                                  e && "abort" !== i && r.setError(t)
                              }
                          })),
                          n.one("onReset", function() {
                              o.abort()
                          });
                          break;
                      default:
                          r.setError(t)
                      }
                      return !0
                  }
              },
              setImage: function(t) {
                  var n, o = this;
                  setTimeout(function() {
                      var e = t.$image;
                      o.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || o.showLoading(t)
                  }, 50),
                  o.checkSrcset(t),
                  t.$content = i('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),
                  !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width,
                  t.height = t.opts.height,
                  (n = e.createElement("img")).onerror = function() {
                      i(this).remove(),
                      t.$ghost = null
                  }
                  ,
                  n.onload = function() {
                      o.afterLoad(t)
                  }
                  ,
                  t.$ghost = i(n).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)),
                  o.setBigImage(t)
              },
              checkSrcset: function(e) {
                  var i, n, o, r, s = e.opts.srcset || e.opts.image.srcset;
                  if (s) {
                      o = t.devicePixelRatio || 1,
                      r = t.innerWidth * o,
                      (n = s.split(",").map(function(t) {
                          var e = {};
                          return t.trim().split(/\s+/).forEach(function(t, i) {
                              var n = parseInt(t.substring(0, t.length - 1), 10);
                              if (0 === i)
                                  return e.url = t;
                              n && (e.value = n,
                              e.postfix = t[t.length - 1])
                          }),
                          e
                      })).sort(function(t, e) {
                          return t.value - e.value
                      });
                      for (var a = 0; a < n.length; a++) {
                          var l = n[a];
                          if ("w" === l.postfix && l.value >= r || "x" === l.postfix && l.value >= o) {
                              i = l;
                              break
                          }
                      }
                      !i && n.length && (i = n[n.length - 1]),
                      i && (e.src = i.url,
                      e.width && e.height && "w" == i.postfix && (e.height = e.width / e.height * i.value,
                      e.width = i.value),
                      e.opts.srcset = s)
                  }
              },
              setBigImage: function(t) {
                  var n = this
                    , o = e.createElement("img")
                    , r = i(o);
                  t.$image = r.one("error", function() {
                      n.setError(t)
                  }).one("load", function() {
                      var e;
                      t.$ghost || (n.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight),
                      n.afterLoad(t)),
                      n.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"),
                      r.attr("sizes", e).attr("srcset", t.opts.srcset)),
                      t.$ghost && setTimeout(function() {
                          t.$ghost && !n.isClosing && t.$ghost.hide()
                      }, Math.min(300, Math.max(1e3, t.height / 1600))),
                      n.hideLoading(t))
                  }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content),
                  (o.complete || "complete" == o.readyState) && r.naturalWidth && r.naturalHeight ? r.trigger("load") : o.error && r.trigger("error")
              },
              resolveImageSlideSize: function(t, e, i) {
                  var n = parseInt(t.opts.width, 10)
                    , o = parseInt(t.opts.height, 10);
                  t.width = e,
                  t.height = i,
                  n > 0 && (t.width = n,
                  t.height = Math.floor(n * i / e)),
                  o > 0 && (t.width = Math.floor(o * e / i),
                  t.height = o)
              },
              setIframe: function(t) {
                  var e, n = this, o = t.opts.iframe, r = t.$slide;
                  t.$content = i('<div class="fancybox-content' + (o.preload ? " fancybox-is-hidden" : "") + '"></div>').css(o.css).appendTo(r),
                  r.addClass("fancybox-slide--" + t.contentType),
                  t.$iframe = e = i(o.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(o.attr).appendTo(t.$content),
                  o.preload ? (n.showLoading(t),
                  e.on("load.fb error.fb", function(e) {
                      this.isReady = 1,
                      t.$slide.trigger("refresh"),
                      n.afterLoad(t)
                  }),
                  r.on("refresh.fb", function() {
                      var i, n = t.$content, s = o.css.width, a = o.css.height;
                      if (1 === e[0].isReady) {
                          try {
                              i = e.contents().find("body")
                          } catch (t) {}
                          i && i.length && i.children().length && (r.css("overflow", "visible"),
                          n.css({
                              width: "100%",
                              "max-width": "100%",
                              height: "9999px"
                          }),
                          void 0 === s && (s = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))),
                          n.css("width", s || "").css("max-width", ""),
                          void 0 === a && (a = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))),
                          n.css("height", a || ""),
                          r.css("overflow", "auto")),
                          n.removeClass("fancybox-is-hidden")
                      }
                  })) : n.afterLoad(t),
                  e.attr("src", t.src),
                  r.one("onReset", function() {
                      try {
                          i(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                      } catch (t) {}
                      i(this).off("refresh.fb").empty(),
                      t.isLoaded = !1,
                      t.isRevealed = !1
                  })
              },
              setContent: function(t, e) {
                  var n = this;
                  n.isClosing || (n.hideLoading(t),
                  t.$content && i.fancybox.stop(t.$content),
                  t.$slide.empty(),
                  function(t) {
                      return t && t.hasOwnProperty && t instanceof i
                  }(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"),
                  t.$placeholder = i("<div>").hide().insertAfter(e),
                  e.css("display", "inline-block")) : t.hasError || ("string" === i.type(e) && (e = i("<div>").append(i.trim(e)).contents()),
                  t.opts.filter && (e = i("<div>").html(e).find(t.opts.filter))),
                  t.$slide.one("onReset", function() {
                      i(this).find("video,audio").trigger("pause"),
                      t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),
                      t.$placeholder = null),
                      t.$smallBtn && (t.$smallBtn.remove(),
                      t.$smallBtn = null),
                      t.hasError || (i(this).empty(),
                      t.isLoaded = !1,
                      t.isRevealed = !1)
                  }),
                  i(e).appendTo(t.$slide),
                  i(e).is("video,audio") && (i(e).addClass("fancybox-video"),
                  i(e).wrap("<div></div>"),
                  t.contentType = "video",
                  t.opts.width = t.opts.width || i(e).attr("width"),
                  t.opts.height = t.opts.height || i(e).attr("height")),
                  t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),
                  t.$content.siblings().hide(),
                  t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()),
                  t.$content.addClass("fancybox-content"),
                  t.$slide.addClass("fancybox-slide--" + t.contentType),
                  n.afterLoad(t))
              },
              setError: function(t) {
                  t.hasError = !0,
                  t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"),
                  t.contentType = "html",
                  this.setContent(t, this.translate(t, t.opts.errorTpl)),
                  t.pos === this.currPos && (this.isAnimating = !1)
              },
              showLoading: function(t) {
                  var e = this;
                  (t = t || e.current) && !t.$spinner && (t.$spinner = i(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
              },
              hideLoading: function(t) {
                  (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(),
                  delete t.$spinner)
              },
              afterLoad: function(t) {
                  var e = this;
                  e.isClosing || (t.isLoading = !1,
                  t.isLoaded = !0,
                  e.trigger("afterLoad", t),
                  e.hideLoading(t),
                  !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = i(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)),
                  t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                      return 2 == t.button && t.preventDefault(),
                      !0
                  }),
                  "image" === t.type && i('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
                  e.adjustCaption(t),
                  e.adjustLayout(t),
                  t.pos === e.currPos && e.updateCursor(),
                  e.revealContent(t))
              },
              adjustCaption: function(t) {
                  var e, i = this, n = t || i.current, o = n.opts.caption, r = n.opts.preventCaptionOverlap, s = i.$refs.caption, a = !1;
                  s.toggleClass("fancybox-caption--separate", r),
                  r && o && o.length && (n.pos !== i.currPos ? ((e = s.clone().appendTo(s.parent())).children().eq(0).empty().html(o),
                  a = e.outerHeight(!0),
                  e.empty().remove()) : i.$caption && (a = i.$caption.outerHeight(!0)),
                  n.$slide.css("padding-bottom", a || ""))
              },
              adjustLayout: function(t) {
                  var e, i, n, o, r = t || this.current;
                  r.isLoaded && !0 !== r.opts.disableLayoutFix && (r.$content.css("margin-bottom", ""),
                  r.$content.outerHeight() > r.$slide.height() + .5 && (n = r.$slide[0].style["padding-bottom"],
                  o = r.$slide.css("padding-bottom"),
                  parseFloat(o) > 0 && (e = r.$slide[0].scrollHeight,
                  r.$slide.css("padding-bottom", 0),
                  Math.abs(e - r.$slide[0].scrollHeight) < 1 && (i = o),
                  r.$slide.css("padding-bottom", n))),
                  r.$content.css("margin-bottom", i))
              },
              revealContent: function(t) {
                  var e, n, o, r, s = this, a = t.$slide, l = !1, c = !1, d = s.isMoved(t), u = t.isRevealed;
                  return t.isRevealed = !0,
                  e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"],
                  o = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"],
                  o = parseInt(void 0 === t.forcedDuration ? o : t.forcedDuration, 10),
                  !d && t.pos === s.currPos && o || (e = !1),
                  "zoom" === e && (t.pos === s.currPos && o && "image" === t.type && !t.hasError && (c = s.getThumbPos(t)) ? l = s.getFitPos(t) : e = "fade"),
                  "zoom" === e ? (s.isAnimating = !0,
                  l.scaleX = l.width / c.width,
                  l.scaleY = l.height / c.height,
                  "auto" == (r = t.opts.zoomOpacity) && (r = Math.abs(t.width / t.height - c.width / c.height) > .1),
                  r && (c.opacity = .1,
                  l.opacity = 1),
                  i.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), c),
                  h(t.$content),
                  void i.fancybox.animate(t.$content, l, o, function() {
                      s.isAnimating = !1,
                      s.complete()
                  })) : (s.updateSlide(t),
                  e ? (i.fancybox.stop(a),
                  n = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e,
                  a.addClass(n).removeClass("fancybox-slide--current"),
                  t.$content.removeClass("fancybox-is-hidden"),
                  h(a),
                  "image" !== t.type && t.$content.hide().show(0),
                  void i.fancybox.animate(a, "fancybox-slide--current", o, function() {
                      a.removeClass(n).css({
                          transform: "",
                          opacity: ""
                      }),
                      t.pos === s.currPos && s.complete()
                  }, !0)) : (t.$content.removeClass("fancybox-is-hidden"),
                  u || !d || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"),
                  void (t.pos === s.currPos && s.complete())))
              },
              getThumbPos: function(t) {
                  var e, n, o, r, s, a = !1, l = t.$thumb;
                  return !(!l || !p(l[0])) && (e = i.fancybox.getTranslate(l),
                  n = parseFloat(l.css("border-top-width") || 0),
                  o = parseFloat(l.css("border-right-width") || 0),
                  r = parseFloat(l.css("border-bottom-width") || 0),
                  s = parseFloat(l.css("border-left-width") || 0),
                  a = {
                      top: e.top + n,
                      left: e.left + s,
                      width: e.width - o - s,
                      height: e.height - n - r,
                      scaleX: 1,
                      scaleY: 1
                  },
                  e.width > 0 && e.height > 0 && a)
              },
              complete: function() {
                  var t, e = this, n = e.current, o = {};
                  !e.isMoved() && n.isLoaded && (n.isComplete || (n.isComplete = !0,
                  n.$slide.siblings().trigger("onReset"),
                  e.preload("inline"),
                  h(n.$slide),
                  n.$slide.addClass("fancybox-slide--complete"),
                  i.each(e.slides, function(t, n) {
                      n.pos >= e.currPos - 1 && n.pos <= e.currPos + 1 ? o[n.pos] = n : n && (i.fancybox.stop(n.$slide),
                      n.$slide.off().remove())
                  }),
                  e.slides = o),
                  e.isAnimating = !1,
                  e.updateCursor(),
                  e.trigger("afterShow"),
                  n.opts.video.autoStart && n.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
                      this.webkitExitFullscreen && this.webkitExitFullscreen(),
                      e.next()
                  }),
                  n.opts.autoFocus && "html" === n.contentType && ((t = n.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)),
                  n.$slide.scrollTop(0).scrollLeft(0))
              },
              preload: function(t) {
                  var e, i, n = this;
                  n.group.length < 2 || (i = n.slides[n.currPos + 1],
                  (e = n.slides[n.currPos - 1]) && e.type === t && n.loadSlide(e),
                  i && i.type === t && n.loadSlide(i))
              },
              focus: function(t, n) {
                  var o, r, s = this, a = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                  s.isClosing || ((o = (o = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (n ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible")).filter(a).filter(function() {
                      return "hidden" !== i(this).css("visibility") && !i(this).hasClass("disabled")
                  })).length ? (r = o.index(e.activeElement),
                  t && t.shiftKey ? (r < 0 || 0 == r) && (t.preventDefault(),
                  o.eq(o.length - 1).trigger("focus")) : (r < 0 || r == o.length - 1) && (t && t.preventDefault(),
                  o.eq(0).trigger("focus"))) : s.$refs.container.trigger("focus"))
              },
              activate: function() {
                  var t = this;
                  i(".fancybox-container").each(function() {
                      var e = i(this).data("FancyBox");
                      e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"),
                      e.removeEvents(),
                      e.isVisible = !1)
                  }),
                  t.isVisible = !0,
                  (t.current || t.isIdle) && (t.update(),
                  t.updateControls()),
                  t.trigger("onActivate"),
                  t.addEvents()
              },
              close: function(t, e) {
                  var n, o, r, s, a, l, d, u = this, f = u.current, p = function() {
                      u.cleanUp(t)
                  };
                  return !(u.isClosing || (u.isClosing = !0,
                  !1 === u.trigger("beforeClose", t) ? (u.isClosing = !1,
                  c(function() {
                      u.update()
                  }),
                  1) : (u.removeEvents(),
                  r = f.$content,
                  n = f.opts.animationEffect,
                  o = i.isNumeric(e) ? e : n ? f.opts.animationDuration : 0,
                  f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                  !0 !== t ? i.fancybox.stop(f.$slide) : n = !1,
                  f.$slide.siblings().trigger("onReset").remove(),
                  o && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", o + "ms"),
                  u.hideLoading(f),
                  u.hideControls(!0),
                  u.updateCursor(),
                  "zoom" !== n || r && o && "image" === f.type && !u.isMoved() && !f.hasError && (d = u.getThumbPos(f)) || (n = "fade"),
                  "zoom" === n ? (i.fancybox.stop(r),
                  s = i.fancybox.getTranslate(r),
                  l = {
                      top: s.top,
                      left: s.left,
                      scaleX: s.width / d.width,
                      scaleY: s.height / d.height,
                      width: d.width,
                      height: d.height
                  },
                  a = f.opts.zoomOpacity,
                  "auto" == a && (a = Math.abs(f.width / f.height - d.width / d.height) > .1),
                  a && (d.opacity = 0),
                  i.fancybox.setTranslate(r, l),
                  h(r),
                  i.fancybox.animate(r, d, o, p),
                  0) : (n && o ? i.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + n, o, p) : !0 === t ? setTimeout(p, o) : p(),
                  0))))
              },
              cleanUp: function(e) {
                  var n, o, r, s = this, a = s.current.opts.$orig;
                  s.current.$slide.trigger("onReset"),
                  s.$refs.container.empty().remove(),
                  s.trigger("afterClose", e),
                  s.current.opts.backFocus && (a && a.length && a.is(":visible") || (a = s.$trigger),
                  a && a.length && (o = t.scrollX,
                  r = t.scrollY,
                  a.trigger("focus"),
                  i("html, body").scrollTop(r).scrollLeft(o))),
                  s.current = null,
                  (n = i.fancybox.getInstance()) ? n.activate() : (i("body").removeClass("fancybox-active compensate-for-scrollbar"),
                  i("#fancybox-style-noscroll").remove())
              },
              trigger: function(t, e) {
                  var n, o = Array.prototype.slice.call(arguments, 1), r = this, s = e && e.opts ? e : r.current;
                  if (s ? o.unshift(s) : s = r,
                  o.unshift(r),
                  i.isFunction(s.opts[t]) && (n = s.opts[t].apply(s, o)),
                  !1 === n)
                      return n;
                  "afterClose" !== t && r.$refs ? r.$refs.container.trigger(t + ".fb", o) : a.trigger(t + ".fb", o)
              },
              updateControls: function() {
                  var t = this
                    , n = t.current
                    , o = n.index
                    , r = t.$refs.container
                    , s = t.$refs.caption
                    , a = n.opts.caption;
                  n.$slide.trigger("refresh"),
                  a && a.length ? (t.$caption = s,
                  s.children().eq(0).html(a)) : t.$caption = null,
                  t.hasHiddenControls || t.isIdle || t.showControls(),
                  r.find("[data-fancybox-count]").html(t.group.length),
                  r.find("[data-fancybox-index]").html(o + 1),
                  r.find("[data-fancybox-prev]").prop("disabled", !n.opts.loop && o <= 0),
                  r.find("[data-fancybox-next]").prop("disabled", !n.opts.loop && o >= t.group.length - 1),
                  "image" === n.type ? r.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : n.opts.toolbar && r.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
                  i(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
              },
              hideControls: function(t) {
                  var e = ["infobar", "toolbar", "nav"];
                  !t && this.current.opts.preventCaptionOverlap || e.push("caption"),
                  this.$refs.container.removeClass(e.map(function(t) {
                      return "fancybox-show-" + t
                  }).join(" ")),
                  this.hasHiddenControls = !0
              },
              showControls: function() {
                  var t = this
                    , e = t.current ? t.current.opts : t.opts
                    , i = t.$refs.container;
                  t.hasHiddenControls = !1,
                  t.idleSecondsCounter = 0,
                  i.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal)
              },
              toggleControls: function() {
                  this.hasHiddenControls ? this.showControls() : this.hideControls()
              }
          }),
          i.fancybox = {
              version: "3.5.6",
              defaults: r,
              getInstance: function(t) {
                  var e = i('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox")
                    , n = Array.prototype.slice.call(arguments, 1);
                  return e instanceof g && ("string" === i.type(t) ? e[t].apply(e, n) : "function" === i.type(t) && t.apply(e, n),
                  e)
              },
              open: function(t, e, i) {
                  return new g(t,e,i)
              },
              close: function(t) {
                  var e = this.getInstance();
                  e && (e.close(),
                  !0 === t && this.close(t))
              },
              destroy: function() {
                  this.close(!0),
                  a.add("body").off("click.fb-start", "**")
              },
              isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
              use3d: function() {
                  var i = e.createElement("div");
                  return t.getComputedStyle && t.getComputedStyle(i) && t.getComputedStyle(i).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
              }(),
              getTranslate: function(t) {
                  var e;
                  return !(!t || !t.length) && {
                      top: (e = t[0].getBoundingClientRect()).top || 0,
                      left: e.left || 0,
                      width: e.width,
                      height: e.height,
                      opacity: parseFloat(t.css("opacity"))
                  }
              },
              setTranslate: function(t, e) {
                  var i = ""
                    , n = {};
                  if (t && e)
                      return void 0 === e.left && void 0 === e.top || (i = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px",
                      i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"),
                      void 0 !== e.scaleX && void 0 !== e.scaleY ? i += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (i += " scaleX(" + e.scaleX + ")"),
                      i.length && (n.transform = i),
                      void 0 !== e.opacity && (n.opacity = e.opacity),
                      void 0 !== e.width && (n.width = e.width),
                      void 0 !== e.height && (n.height = e.height),
                      t.css(n)
              },
              animate: function(t, e, n, o, r) {
                  var s, a = this;
                  i.isFunction(n) && (o = n,
                  n = null),
                  a.stop(t),
                  s = a.getTranslate(t),
                  t.on(u, function(l) {
                      (!l || !l.originalEvent || t.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName) && (a.stop(t),
                      i.isNumeric(n) && t.css("transition-duration", ""),
                      i.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && a.setTranslate(t, {
                          top: e.top,
                          left: e.left,
                          width: s.width * e.scaleX,
                          height: s.height * e.scaleY,
                          scaleX: 1,
                          scaleY: 1
                      }) : !0 !== r && t.removeClass(e),
                      i.isFunction(o) && o(l))
                  }),
                  i.isNumeric(n) && t.css("transition-duration", n + "ms"),
                  i.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width,
                  delete e.height,
                  t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")),
                  i.fancybox.setTranslate(t, e)) : t.addClass(e),
                  t.data("timer", setTimeout(function() {
                      t.trigger(u)
                  }, n + 33))
              },
              stop: function(t, e) {
                  t && t.length && (clearTimeout(t.data("timer")),
                  e && t.trigger(u),
                  t.off(u).css("transition-duration", ""),
                  t.parent().removeClass("fancybox-is-scaling"))
              }
          },
          i.fn.fancybox = function(t) {
              var e;
              return (e = (t = t || {}).selector || !1) ? i("body").off("click.fb-start", e).on("click.fb-start", e, {
                  options: t
              }, o) : this.off("click.fb-start").on("click.fb-start", {
                  items: this,
                  options: t
              }, o),
              this
          }
          ,
          a.on("click.fb-start", "[data-fancybox]", o),
          a.on("click.fb-start", "[data-fancybox-trigger]", function(t) {
              i('[data-fancybox="' + i(this).attr("data-fancybox-trigger") + '"]').eq(i(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                  $trigger: i(this)
              })
          }),
          function() {
              var t = null;
              a.on("mousedown mouseup focus blur", ".fancybox-button", function(e) {
                  switch (e.type) {
                  case "mousedown":
                      t = i(this);
                      break;
                  case "mouseup":
                      t = null;
                      break;
                  case "focusin":
                      i(".fancybox-button").removeClass("fancybox-focus"),
                      i(this).is(t) || i(this).is("[disabled]") || i(this).addClass("fancybox-focus");
                      break;
                  case "focusout":
                      i(".fancybox-button").removeClass("fancybox-focus")
                  }
              })
          }()
      }
  }(window, document, jQuery),
  function(t) {
      "use strict";
      var e = {
          youtube: {
              matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
              params: {
                  autoplay: 1,
                  autohide: 1,
                  fs: 1,
                  rel: 0,
                  hd: 1,
                  wmode: "transparent",
                  enablejsapi: 1,
                  html5: 1
              },
              paramPlace: 8,
              type: "iframe",
              url: "https://www.youtube-nocookie.com/embed/$4",
              thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
          },
          vimeo: {
              matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
              params: {
                  autoplay: 1,
                  hd: 1,
                  show_title: 1,
                  show_byline: 1,
                  show_portrait: 0,
                  fullscreen: 1
              },
              paramPlace: 3,
              type: "iframe",
              url: "//player.vimeo.com/video/$2"
          },
          instagram: {
              matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
              type: "image",
              url: "//$1/p/$2/media/?size=l"
          },
          gmap_place: {
              matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
              type: "iframe",
              url: function(t) {
                  return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
              }
          },
          gmap_search: {
              matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
              type: "iframe",
              url: function(t) {
                  return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
              }
          }
      }
        , i = function(e, i, n) {
          if (e)
              return n = n || "",
              "object" === t.type(n) && (n = t.param(n, !0)),
              t.each(i, function(t, i) {
                  e = e.replace("$" + t, i || "")
              }),
              n.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + n),
              e
      };
      t(document).on("objectNeedsType.fb", function(n, o, r) {
          var s, a, l, c, d, u, h, f = r.src || "", p = !1;
          s = t.extend(!0, {}, e, r.opts.media),
          t.each(s, function(e, n) {
              if (l = f.match(n.matcher)) {
                  if (p = n.type,
                  h = e,
                  u = {},
                  n.paramPlace && l[n.paramPlace]) {
                      "?" == (d = l[n.paramPlace])[0] && (d = d.substring(1)),
                      d = d.split("&");
                      for (var o = 0; o < d.length; ++o) {
                          var s = d[o].split("=", 2);
                          2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
                      }
                  }
                  return c = t.extend(!0, {}, n.params, r.opts[e], u),
                  f = "function" === t.type(n.url) ? n.url.call(this, l, c, r) : i(n.url, l, c),
                  a = "function" === t.type(n.thumb) ? n.thumb.call(this, l, c, r) : i(n.thumb, l),
                  "youtube" === e ? f = f.replace(/&t=((\d+)m)?(\d+)s/, function(t, e, i, n) {
                      return "&start=" + ((i ? 60 * parseInt(i, 10) : 0) + parseInt(n, 10))
                  }) : "vimeo" === e && (f = f.replace("&%23", "#")),
                  !1
              }
          }),
          p ? (r.opts.thumb || r.opts.$thumb && r.opts.$thumb.length || (r.opts.thumb = a),
          "iframe" === p && (r.opts = t.extend(!0, r.opts, {
              iframe: {
                  preload: !1,
                  attr: {
                      scrolling: "no"
                  }
              }
          })),
          t.extend(r, {
              type: p,
              src: f,
              origSrc: r.src,
              contentSource: h,
              contentType: "image" === p ? "image" : "gmap_place" == h || "gmap_search" == h ? "map" : "video"
          })) : f && (r.type = r.opts.defaultType)
      });
      var n = {
          youtube: {
              src: "https://www.youtube.com/iframe_api",
              class: "YT",
              loading: !1,
              loaded: !1
          },
          vimeo: {
              src: "https://player.vimeo.com/api/player.js",
              class: "Vimeo",
              loading: !1,
              loaded: !1
          },
          load: function(t) {
              var e, i = this;
              this[t].loaded ? setTimeout(function() {
                  i.done(t)
              }) : this[t].loading || (this[t].loading = !0,
              (e = document.createElement("script")).type = "text/javascript",
              e.src = this[t].src,
              "youtube" === t ? window.onYouTubeIframeAPIReady = function() {
                  i[t].loaded = !0,
                  i.done(t)
              }
              : e.onload = function() {
                  i[t].loaded = !0,
                  i.done(t)
              }
              ,
              document.body.appendChild(e))
          },
          done: function(e) {
              var i, n;
              "youtube" === e && delete window.onYouTubeIframeAPIReady,
              (i = t.fancybox.getInstance()) && (n = i.current.$content.find("iframe"),
              "youtube" === e && void 0 !== YT && YT ? new YT.Player(n.attr("id"),{
                  events: {
                      onStateChange: function(t) {
                          0 == t.data && i.next()
                      }
                  }
              }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(n).on("ended", function() {
                  i.next()
              }))
          }
      };
      t(document).on({
          "afterShow.fb": function(t, e, i) {
              e.group.length > 1 && ("youtube" === i.contentSource || "vimeo" === i.contentSource) && n.load(i.contentSource)
          }
      })
  }(jQuery),
  function(t, e, i) {
      "use strict";
      var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
          return t.setTimeout(e, 1e3 / 60)
      }
        , o = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
          t.clearTimeout(e)
      }
        , r = function(e) {
          var i = [];
          for (var n in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e])
              e[n].pageX ? i.push({
                  x: e[n].pageX,
                  y: e[n].pageY
              }) : e[n].clientX && i.push({
                  x: e[n].clientX,
                  y: e[n].clientY
              });
          return i
      }
        , s = function(t, e, i) {
          return e && t ? "x" === i ? t.x - e.x : "y" === i ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
      }
        , a = function(t) {
          if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || i.isFunction(t.get(0).onclick) || t.data("selectable"))
              return !0;
          for (var e = 0, n = t[0].attributes, o = n.length; e < o; e++)
              if ("data-fancybox-" === n[e].nodeName.substr(0, 14))
                  return !0;
          return !1
      }
        , l = function(e) {
          var i = t.getComputedStyle(e)["overflow-y"]
            , n = t.getComputedStyle(e)["overflow-x"]
            , o = ("scroll" === i || "auto" === i) && e.scrollHeight > e.clientHeight
            , r = ("scroll" === n || "auto" === n) && e.scrollWidth > e.clientWidth;
          return o || r
      }
        , c = function(t) {
          for (var e = !1; !(e = l(t.get(0))) && ((t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body")); )
              ;
          return e
      }
        , d = function(t) {
          var e = this;
          e.instance = t,
          e.$bg = t.$refs.bg,
          e.$stage = t.$refs.stage,
          e.$container = t.$refs.container,
          e.destroy(),
          e.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(e, "ontouchstart"))
      };
      d.prototype.destroy = function() {
          var t = this;
          t.$container.off(".fb.touch"),
          i(e).off(".fb.touch"),
          t.requestId && (o(t.requestId),
          t.requestId = null),
          t.tapped && (clearTimeout(t.tapped),
          t.tapped = null)
      }
      ,
      d.prototype.ontouchstart = function(n) {
          var o = this
            , l = i(n.target)
            , d = o.instance
            , u = d.current
            , h = u.$slide
            , f = u.$content
            , p = "touchstart" == n.type;
          if (p && o.$container.off("mousedown.fb.touch"),
          (!n.originalEvent || 2 != n.originalEvent.button) && h.length && l.length && !a(l) && !a(l.parent()) && (l.is("img") || !(n.originalEvent.clientX > l[0].clientWidth + l.offset().left))) {
              if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated"))
                  return n.stopPropagation(),
                  void n.preventDefault();
              o.realPoints = o.startPoints = r(n),
              o.startPoints.length && (u.touch && n.stopPropagation(),
              o.startEvent = n,
              o.canTap = !0,
              o.$target = l,
              o.$content = f,
              o.opts = u.opts.touch,
              o.isPanning = !1,
              o.isSwiping = !1,
              o.isZooming = !1,
              o.isScrolling = !1,
              o.canPan = d.canPan(),
              o.startTime = (new Date).getTime(),
              o.distanceX = o.distanceY = o.distance = 0,
              o.canvasWidth = Math.round(h[0].clientWidth),
              o.canvasHeight = Math.round(h[0].clientHeight),
              o.contentLastPos = null,
              o.contentStartPos = i.fancybox.getTranslate(o.$content) || {
                  top: 0,
                  left: 0
              },
              o.sliderStartPos = i.fancybox.getTranslate(h),
              o.stagePos = i.fancybox.getTranslate(d.$refs.stage),
              o.sliderStartPos.top -= o.stagePos.top,
              o.sliderStartPos.left -= o.stagePos.left,
              o.contentStartPos.top -= o.stagePos.top,
              o.contentStartPos.left -= o.stagePos.left,
              i(e).off(".fb.touch").on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(o, "ontouchend")).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(o, "ontouchmove")),
              i.fancybox.isMobile && e.addEventListener("scroll", o.onscroll, !0),
              ((o.opts || o.canPan) && (l.is(o.$stage) || o.$stage.find(l).length) || (l.is(".fancybox-image") && n.preventDefault(),
              i.fancybox.isMobile && l.parents(".fancybox-caption").length)) && (o.isScrollable = c(l) || c(l.parent()),
              i.fancybox.isMobile && o.isScrollable || n.preventDefault(),
              (1 === o.startPoints.length || u.hasError) && (o.canPan ? (i.fancybox.stop(o.$content),
              o.isPanning = !0) : o.isSwiping = !0,
              o.$container.addClass("fancybox-is-grabbing")),
              2 === o.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (o.canTap = !1,
              o.isSwiping = !1,
              o.isPanning = !1,
              o.isZooming = !0,
              i.fancybox.stop(o.$content),
              o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - i(t).scrollLeft(),
              o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - i(t).scrollTop(),
              o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width,
              o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height,
              o.startDistanceBetweenFingers = s(o.startPoints[0], o.startPoints[1]))))
          }
      }
      ,
      d.prototype.onscroll = function(t) {
          this.isScrolling = !0,
          e.removeEventListener("scroll", this.onscroll, !0)
      }
      ,
      d.prototype.ontouchmove = function(t) {
          var e = this;
          return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void (e.canTap = !1) : (e.newPoints = r(t),
          void ((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(),
          e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"),
          e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"),
          e.distance = s(e.newPoints[0], e.startPoints[0]),
          e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
      }
      ,
      d.prototype.onSwipe = function(e) {
          var r, s = this, a = s.instance, l = s.isSwiping, c = s.sliderStartPos.left || 0;
          if (!0 !== l)
              "x" == l && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? c += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? c -= Math.pow(-s.distanceX, .8) : c += s.distanceX),
              s.sliderLastPos = {
                  top: "x" == l ? 0 : s.sliderStartPos.top + s.distanceY,
                  left: c
              },
              s.requestId && (o(s.requestId),
              s.requestId = null),
              s.requestId = n(function() {
                  s.sliderLastPos && (i.each(s.instance.slides, function(t, e) {
                      var n = e.pos - s.instance.currPos;
                      i.fancybox.setTranslate(e.$slide, {
                          top: s.sliderLastPos.top,
                          left: s.sliderLastPos.left + n * s.canvasWidth + n * e.opts.gutter
                      })
                  }),
                  s.$container.addClass("fancybox-is-sliding"))
              });
          else if (Math.abs(s.distance) > 10) {
              if (s.canTap = !1,
              a.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : a.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && i(t).width() > 800 ? s.isSwiping = "x" : (r = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI),
              s.isSwiping = r > 45 && r < 135 ? "y" : "x"),
              "y" === s.isSwiping && i.fancybox.isMobile && s.isScrollable)
                  return void (s.isScrolling = !0);
              a.isDragging = s.isSwiping,
              s.startPoints = s.newPoints,
              i.each(a.slides, function(t, e) {
                  var n, o;
                  i.fancybox.stop(e.$slide),
                  n = i.fancybox.getTranslate(e.$slide),
                  o = i.fancybox.getTranslate(a.$refs.stage),
                  e.$slide.css({
                      transform: "",
                      opacity: "",
                      "transition-duration": ""
                  }).removeClass("fancybox-animated").removeClass(function(t, e) {
                      return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                  }),
                  e.pos === a.current.pos && (s.sliderStartPos.top = n.top - o.top,
                  s.sliderStartPos.left = n.left - o.left),
                  i.fancybox.setTranslate(e.$slide, {
                      top: n.top - o.top,
                      left: n.left - o.left
                  })
              }),
              a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop()
          }
      }
      ,
      d.prototype.onPan = function() {
          var t = this;
          s(t.newPoints[0], t.realPoints[0]) < (i.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1,
          t.contentLastPos = t.limitMovement(),
          t.requestId && o(t.requestId),
          t.requestId = n(function() {
              i.fancybox.setTranslate(t.$content, t.contentLastPos)
          }))
      }
      ,
      d.prototype.limitMovement = function() {
          var t, e, i, n, o, r, s = this, a = s.canvasWidth, l = s.canvasHeight, c = s.distanceX, d = s.distanceY, u = s.contentStartPos, h = u.left, f = u.top, p = u.width, g = u.height;
          return o = p > a ? h + c : h,
          r = f + d,
          t = Math.max(0, .5 * a - .5 * p),
          e = Math.max(0, .5 * l - .5 * g),
          i = Math.min(a - p, .5 * a - .5 * p),
          n = Math.min(l - g, .5 * l - .5 * g),
          c > 0 && o > t && (o = t - 1 + Math.pow(-t + h + c, .8) || 0),
          c < 0 && o < i && (o = i + 1 - Math.pow(i - h - c, .8) || 0),
          d > 0 && r > e && (r = e - 1 + Math.pow(-e + f + d, .8) || 0),
          d < 0 && r < n && (r = n + 1 - Math.pow(n - f - d, .8) || 0),
          {
              top: r,
              left: o
          }
      }
      ,
      d.prototype.limitPosition = function(t, e, i, n) {
          var o = this.canvasWidth
            , r = this.canvasHeight;
          return i > o ? t = (t = t > 0 ? 0 : t) < o - i ? o - i : t : t = Math.max(0, o / 2 - i / 2),
          n > r ? e = (e = e > 0 ? 0 : e) < r - n ? r - n : e : e = Math.max(0, r / 2 - n / 2),
          {
              top: e,
              left: t
          }
      }
      ,
      d.prototype.onZoom = function() {
          var e = this
            , r = e.contentStartPos
            , a = r.width
            , l = r.height
            , c = r.left
            , d = r.top
            , u = s(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers
            , h = Math.floor(a * u)
            , f = Math.floor(l * u)
            , p = (a - h) * e.percentageOfImageAtPinchPointX
            , g = (l - f) * e.percentageOfImageAtPinchPointY
            , m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - i(t).scrollLeft()
            , v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - i(t).scrollTop()
            , y = m - e.centerPointStartX
            , b = {
              top: d + (g + (v - e.centerPointStartY)),
              left: c + (p + y),
              scaleX: u,
              scaleY: u
          };
          e.canTap = !1,
          e.newWidth = h,
          e.newHeight = f,
          e.contentLastPos = b,
          e.requestId && o(e.requestId),
          e.requestId = n(function() {
              i.fancybox.setTranslate(e.$content, e.contentLastPos)
          })
      }
      ,
      d.prototype.ontouchend = function(t) {
          var n = this
            , s = n.isSwiping
            , a = n.isPanning
            , l = n.isZooming
            , c = n.isScrolling;
          if (n.endPoints = r(t),
          n.dMs = Math.max((new Date).getTime() - n.startTime, 1),
          n.$container.removeClass("fancybox-is-grabbing"),
          i(e).off(".fb.touch"),
          e.removeEventListener("scroll", n.onscroll, !0),
          n.requestId && (o(n.requestId),
          n.requestId = null),
          n.isSwiping = !1,
          n.isPanning = !1,
          n.isZooming = !1,
          n.isScrolling = !1,
          n.instance.isDragging = !1,
          n.canTap)
              return n.onTap(t);
          n.speed = 100,
          n.velocityX = n.distanceX / n.dMs * .5,
          n.velocityY = n.distanceY / n.dMs * .5,
          a ? n.endPanning() : l ? n.endZooming() : n.endSwiping(s, c)
      }
      ,
      d.prototype.endSwiping = function(t, e) {
          var n = this
            , o = !1
            , r = n.instance.group.length
            , s = Math.abs(n.distanceX)
            , a = "x" == t && r > 1 && (n.dMs > 130 && s > 10 || s > 50);
          n.sliderLastPos = null,
          "y" == t && !e && Math.abs(n.distanceY) > 50 ? (i.fancybox.animate(n.instance.current.$slide, {
              top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY,
              opacity: 0
          }, 200),
          o = n.instance.close(!0, 250)) : a && n.distanceX > 0 ? o = n.instance.previous(300) : a && n.distanceX < 0 && (o = n.instance.next(300)),
          !1 !== o || "x" != t && "y" != t || n.instance.centerSlide(200),
          n.$container.removeClass("fancybox-is-sliding")
      }
      ,
      d.prototype.endPanning = function() {
          var t, e, n, o = this;
          o.contentLastPos && (!1 === o.opts.momentum || o.dMs > 350 ? (t = o.contentLastPos.left,
          e = o.contentLastPos.top) : (t = o.contentLastPos.left + 500 * o.velocityX,
          e = o.contentLastPos.top + 500 * o.velocityY),
          (n = o.limitPosition(t, e, o.contentStartPos.width, o.contentStartPos.height)).width = o.contentStartPos.width,
          n.height = o.contentStartPos.height,
          i.fancybox.animate(o.$content, n, 366))
      }
      ,
      d.prototype.endZooming = function() {
          var t, e, n, o, r = this, s = r.instance.current, a = r.newWidth, l = r.newHeight;
          r.contentLastPos && (t = r.contentLastPos.left,
          o = {
              top: e = r.contentLastPos.top,
              left: t,
              width: a,
              height: l,
              scaleX: 1,
              scaleY: 1
          },
          i.fancybox.setTranslate(r.$content, o),
          a < r.canvasWidth && l < r.canvasHeight ? r.instance.scaleToFit(150) : a > s.width || l > s.height ? r.instance.scaleToActual(r.centerPointStartX, r.centerPointStartY, 150) : (n = r.limitPosition(t, e, a, l),
          i.fancybox.animate(r.$content, n, 150)))
      }
      ,
      d.prototype.onTap = function(e) {
          var n, o = this, s = i(e.target), a = o.instance, l = a.current, c = e && r(e) || o.startPoints, d = c[0] ? c[0].x - i(t).scrollLeft() - o.stagePos.left : 0, u = c[0] ? c[0].y - i(t).scrollTop() - o.stagePos.top : 0, h = function(t) {
              var n = l.opts[t];
              if (i.isFunction(n) && (n = n.apply(a, [l, e])),
              n)
                  switch (n) {
                  case "close":
                      a.close(o.startEvent);
                      break;
                  case "toggleControls":
                      a.toggleControls();
                      break;
                  case "next":
                      a.next();
                      break;
                  case "nextOrClose":
                      a.group.length > 1 ? a.next() : a.close(o.startEvent);
                      break;
                  case "zoom":
                      "image" == l.type && (l.isLoaded || l.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(d, u) : a.group.length < 2 && a.close(o.startEvent))
                  }
          };
          if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
              if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))
                  n = "Outside";
              else if (s.is(".fancybox-slide"))
                  n = "Slide";
              else {
                  if (!a.current.$content || !a.current.$content.find(s).addBack().filter(s).length)
                      return;
                  n = "Content"
              }
              if (o.tapped) {
                  if (clearTimeout(o.tapped),
                  o.tapped = null,
                  Math.abs(d - o.tapX) > 50 || Math.abs(u - o.tapY) > 50)
                      return this;
                  h("dblclick" + n)
              } else
                  o.tapX = d,
                  o.tapY = u,
                  l.opts["dblclick" + n] && l.opts["dblclick" + n] !== l.opts["click" + n] ? o.tapped = setTimeout(function() {
                      o.tapped = null,
                      a.isAnimating || h("click" + n)
                  }, 500) : h("click" + n);
              return this
          }
      }
      ,
      i(e).on("onActivate.fb", function(t, e) {
          e && !e.Guestures && (e.Guestures = new d(e))
      }).on("beforeClose.fb", function(t, e) {
          e && e.Guestures && e.Guestures.destroy()
      })
  }(window, document, jQuery),
  function(t, e) {
      "use strict";
      e.extend(!0, e.fancybox.defaults, {
          btnTpl: {
              slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
          },
          slideShow: {
              autoStart: !1,
              speed: 3e3,
              progress: !0
          }
      });
      var i = function(t) {
          this.instance = t,
          this.init()
      };
      e.extend(i.prototype, {
          timer: null,
          isActive: !1,
          $button: null,
          init: function() {
              var t = this
                , i = t.instance
                , n = i.group[i.currIndex].opts.slideShow;
              t.$button = i.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                  t.toggle()
              }),
              i.group.length < 2 || !n ? t.$button.hide() : n.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(i.$refs.inner))
          },
          set: function(t) {
              var i = this
                , n = i.instance
                , o = n.current;
              o && (!0 === t || o.opts.loop || n.currIndex < n.group.length - 1) ? i.isActive && "video" !== o.contentType && (i.$progress && e.fancybox.animate(i.$progress.show(), {
                  scaleX: 1
              }, o.opts.slideShow.speed),
              i.timer = setTimeout(function() {
                  n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0)
              }, o.opts.slideShow.speed)) : (i.stop(),
              n.idleSecondsCounter = 0,
              n.showControls())
          },
          clear: function() {
              var t = this;
              clearTimeout(t.timer),
              t.timer = null,
              t.$progress && t.$progress.removeAttr("style").hide()
          },
          start: function() {
              var t = this
                , e = t.instance.current;
              e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),
              t.isActive = !0,
              e.isComplete && t.set(!0),
              t.instance.trigger("onSlideShowChange", !0))
          },
          stop: function() {
              var t = this
                , e = t.instance.current;
              t.clear(),
              t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),
              t.isActive = !1,
              t.instance.trigger("onSlideShowChange", !1),
              t.$progress && t.$progress.removeAttr("style").hide()
          },
          toggle: function() {
              var t = this;
              t.isActive ? t.stop() : t.start()
          }
      }),
      e(t).on({
          "onInit.fb": function(t, e) {
              e && !e.SlideShow && (e.SlideShow = new i(e))
          },
          "beforeShow.fb": function(t, e, i, n) {
              var o = e && e.SlideShow;
              n ? o && i.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
          },
          "afterShow.fb": function(t, e, i) {
              var n = e && e.SlideShow;
              n && n.isActive && n.set()
          },
          "afterKeydown.fb": function(i, n, o, r, s) {
              var a = n && n.SlideShow;
              !a || !o.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (r.preventDefault(),
              a.toggle())
          },
          "beforeClose.fb onDeactivate.fb": function(t, e) {
              var i = e && e.SlideShow;
              i && i.stop()
          }
      }),
      e(t).on("visibilitychange", function() {
          var i = e.fancybox.getInstance()
            , n = i && i.SlideShow;
          n && n.isActive && (t.hidden ? n.clear() : n.set())
      })
  }(document, jQuery),
  function(t, e) {
      "use strict";
      var i = function() {
          for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], i = {}, n = 0; n < e.length; n++) {
              var o = e[n];
              if (o && o[1]in t) {
                  for (var r = 0; r < o.length; r++)
                      i[e[0][r]] = o[r];
                  return i
              }
          }
          return !1
      }();
      if (i) {
          var n = {
              request: function(e) {
                  (e = e || t.documentElement)[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
              },
              exit: function() {
                  t[i.exitFullscreen]()
              },
              toggle: function(e) {
                  e = e || t.documentElement,
                  this.isFullscreen() ? this.exit() : this.request(e)
              },
              isFullscreen: function() {
                  return Boolean(t[i.fullscreenElement])
              },
              enabled: function() {
                  return Boolean(t[i.fullscreenEnabled])
              }
          };
          e.extend(!0, e.fancybox.defaults, {
              btnTpl: {
                  fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
              },
              fullScreen: {
                  autoStart: !1
              }
          }),
          e(t).on(i.fullscreenchange, function() {
              var t = n.isFullscreen()
                , i = e.fancybox.getInstance();
              i && (i.current && "image" === i.current.type && i.isAnimating && (i.isAnimating = !1,
              i.update(!0, !0, 0),
              i.isComplete || i.complete()),
              i.trigger("onFullscreenChange", t),
              i.$refs.container.toggleClass("fancybox-is-fullscreen", t),
              i.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
          })
      }
      e(t).on({
          "onInit.fb": function(t, e) {
              i ? e && e.group[e.currIndex].opts.fullScreen ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                  t.stopPropagation(),
                  t.preventDefault(),
                  n.toggle()
              }),
              e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && n.request(),
              e.FullScreen = n) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
          },
          "afterKeydown.fb": function(t, e, i, n, o) {
              e && e.FullScreen && 70 === o && (n.preventDefault(),
              e.FullScreen.toggle())
          },
          "beforeClose.fb": function(t, e) {
              e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && n.exit()
          }
      })
  }(document, jQuery),
  function(t, e) {
      "use strict";
      var i = "fancybox-thumbs";
      e.fancybox.defaults = e.extend(!0, {
          btnTpl: {
              thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
          },
          thumbs: {
              autoStart: !1,
              hideOnClose: !0,
              parentEl: ".fancybox-container",
              axis: "y"
          }
      }, e.fancybox.defaults);
      var n = function(t) {
          this.init(t)
      };
      e.extend(n.prototype, {
          $button: null,
          $grid: null,
          $list: null,
          isVisible: !1,
          isActive: !1,
          init: function(t) {
              var e = this
                , i = t.group
                , n = 0;
              e.instance = t,
              e.opts = i[t.currIndex].opts.thumbs,
              t.Thumbs = e,
              e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
              for (var o = 0, r = i.length; o < r && (i[o].thumb && n++,
              !(n > 1)); o++)
                  ;
              n > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function() {
                  e.toggle()
              }),
              e.isActive = !0) : e.$button.hide()
          },
          create: function() {
              var t, n = this, o = n.instance, r = n.opts.parentEl, s = [];
              n.$grid || (n.$grid = e('<div class="' + i + " " + i + "-" + n.opts.axis + '"></div>').appendTo(o.$refs.container.find(r).addBack().filter(r)),
              n.$grid.on("click", "a", function() {
                  o.jumpTo(e(this).attr("data-index"))
              })),
              n.$list || (n.$list = e('<div class="' + i + '__list">').appendTo(n.$grid)),
              e.each(o.group, function(e, i) {
                  (t = i.thumb) || "image" !== i.type || (t = i.src),
                  s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
              }),
              n.$list[0].innerHTML = s.join(""),
              "x" === n.opts.axis && n.$list.width(parseInt(n.$grid.css("padding-right"), 10) + o.group.length * n.$list.children().eq(0).outerWidth(!0))
          },
          focus: function(t) {
              var e, i, n = this, o = n.$list, r = n.$grid;
              n.instance.current && (i = (e = o.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + n.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(),
              "y" === n.opts.axis && (i.top < 0 || i.top > o.height() - e.outerHeight()) ? o.stop().animate({
                  scrollTop: o.scrollTop() + i.top
              }, t) : "x" === n.opts.axis && (i.left < r.scrollLeft() || i.left > r.scrollLeft() + (r.width() - e.outerWidth())) && o.parent().stop().animate({
                  scrollLeft: i.left
              }, t))
          },
          update: function() {
              var t = this;
              t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible),
              t.isVisible ? (t.$grid || t.create(),
              t.instance.trigger("onThumbsShow"),
              t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"),
              t.instance.update()
          },
          hide: function() {
              this.isVisible = !1,
              this.update()
          },
          show: function() {
              this.isVisible = !0,
              this.update()
          },
          toggle: function() {
              this.isVisible = !this.isVisible,
              this.update()
          }
      }),
      e(t).on({
          "onInit.fb": function(t, e) {
              var i;
              e && !e.Thumbs && ((i = new n(e)).isActive && !0 === i.opts.autoStart && i.show())
          },
          "beforeShow.fb": function(t, e, i, n) {
              var o = e && e.Thumbs;
              o && o.isVisible && o.focus(n ? 0 : 250)
          },
          "afterKeydown.fb": function(t, e, i, n, o) {
              var r = e && e.Thumbs;
              r && r.isActive && 71 === o && (n.preventDefault(),
              r.toggle())
          },
          "beforeClose.fb": function(t, e) {
              var i = e && e.Thumbs;
              i && i.isVisible && !1 !== i.opts.hideOnClose && i.$grid.hide()
          }
      })
  }(document, jQuery),
  function(t, e) {
      "use strict";
      e.extend(!0, e.fancybox.defaults, {
          btnTpl: {
              share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
          },
          share: {
              url: function(t, e) {
                  return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
              },
              tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
          }
      }),
      e(t).on("click", "[data-fancybox-share]", function() {
          var t, i, n = e.fancybox.getInstance(), o = n.current || null;
          o && ("function" === e.type(o.opts.share.url) && (t = o.opts.share.url.apply(o, [n, o])),
          i = o.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === o.type ? encodeURIComponent(o.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, function(t) {
              var e = {
                  "&": "&amp;",
                  "<": "&lt;",
                  ">": "&gt;",
                  '"': "&quot;",
                  "'": "&#39;",
                  "/": "&#x2F;",
                  "`": "&#x60;",
                  "=": "&#x3D;"
              };
              return String(t).replace(/[&<>"'`=\/]/g, function(t) {
                  return e[t]
              })
          }(t)).replace(/\{\{descr\}\}/g, n.$caption ? encodeURIComponent(n.$caption.text()) : ""),
          e.fancybox.open({
              src: n.translate(n, i),
              type: "html",
              opts: {
                  touch: !1,
                  animationEffect: !1,
                  afterLoad: function(t, e) {
                      n.$refs.container.one("beforeClose.fb", function() {
                          t.close(null, 0)
                      }),
                      e.$content.find(".fancybox-share__button").click(function() {
                          return window.open(this.href, "Share", "width=550, height=450"),
                          !1
                      })
                  },
                  mobile: {
                      autoFocus: !1
                  }
              }
          }))
      })
  }(document, jQuery),
  function(t, e, i) {
      "use strict";
      function n() {
          var e = t.location.hash.substr(1)
            , i = e.split("-")
            , n = i.length > 1 && /^\+?\d+$/.test(i[i.length - 1]) && parseInt(i.pop(-1), 10) || 1;
          return {
              hash: e,
              index: n < 1 ? 1 : n,
              gallery: i.join("-")
          }
      }
      function o(t) {
          "" !== t.gallery && i("[data-fancybox='" + i.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
      }
      function r(t) {
          var e, i;
          return !!t && ("" !== (i = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && i)
      }
      i.escapeSelector || (i.escapeSelector = function(t) {
          return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) {
              return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
          })
      }
      ),
      i(function() {
          !1 !== i.fancybox.defaults.hash && (i(e).on({
              "onInit.fb": function(t, e) {
                  var i, o;
                  !1 !== e.group[e.currIndex].opts.hash && (i = n(),
                  (o = r(e)) && i.gallery && o == i.gallery && (e.currIndex = i.index - 1))
              },
              "beforeShow.fb": function(i, n, o, s) {
                  var a;
                  o && !1 !== o.opts.hash && (a = r(n)) && (n.currentHash = a + (n.group.length > 1 ? "-" + (o.index + 1) : ""),
                  t.location.hash !== "#" + n.currentHash && (s && !n.origHash && (n.origHash = t.location.hash),
                  n.hashTimer && clearTimeout(n.hashTimer),
                  n.hashTimer = setTimeout(function() {
                      "replaceState"in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + n.currentHash),
                      s && (n.hasCreatedHistory = !0)) : t.location.hash = n.currentHash,
                      n.hashTimer = null
                  }, 300)))
              },
              "beforeClose.fb": function(i, n, o) {
                  o && !1 !== o.opts.hash && (clearTimeout(n.hashTimer),
                  n.currentHash && n.hasCreatedHistory ? t.history.back() : n.currentHash && ("replaceState"in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (n.origHash || "")) : t.location.hash = n.origHash),
                  n.currentHash = null)
              }
          }),
          i(t).on("hashchange.fb", function() {
              var t = n()
                , e = null;
              i.each(i(".fancybox-container").get().reverse(), function(t, n) {
                  var o = i(n).data("FancyBox");
                  if (o && o.currentHash)
                      return e = o,
                      !1
              }),
              e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null,
              e.close()) : "" !== t.gallery && o(t)
          }),
          setTimeout(function() {
              i.fancybox.getInstance() || o(n())
          }, 50))
      })
  }(window, document, jQuery),
  function(t, e) {
      "use strict";
      var i = (new Date).getTime();
      e(t).on({
          "onInit.fb": function(t, e, n) {
              e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
                  var n = e.current
                    , o = (new Date).getTime();
                  e.group.length < 2 || !1 === n.opts.wheel || "auto" === n.opts.wheel && "image" !== n.type || (t.preventDefault(),
                  t.stopPropagation(),
                  n.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t,
                  o - i < 250 || (i = o,
                  e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
              })
          }
      })
  }(document, jQuery)
}
, function(t, e) {
  var i, n, o;
  !function(t, e, i, n) {
      function o(e, i) {
          this.settings = null,
          this.options = t.extend({}, o.Defaults, i),
          this.$element = t(e),
          this._handlers = {},
          this._plugins = {},
          this._supress = {},
          this._current = null,
          this._speed = null,
          this._coordinates = [],
          this._breakpoint = null,
          this._width = null,
          this._items = [],
          this._clones = [],
          this._mergers = [],
          this._widths = [],
          this._invalidated = {},
          this._pipe = [],
          this._drag = {
              time: null,
              target: null,
              pointer: null,
              stage: {
                  start: null,
                  current: null
              },
              direction: null
          },
          this._states = {
              current: {},
              tags: {
                  initializing: ["busy"],
                  animating: ["busy"],
                  dragging: ["interacting"]
              }
          },
          t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) {
              this._handlers[i] = t.proxy(this[i], this)
          }, this)),
          t.each(o.Plugins, t.proxy(function(t, e) {
              this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
          }, this)),
          t.each(o.Workers, t.proxy(function(e, i) {
              this._pipe.push({
                  filter: i.filter,
                  run: t.proxy(i.run, this)
              })
          }, this)),
          this.setup(),
          this.initialize()
      }
      o.Defaults = {
          items: 3,
          loop: !1,
          center: !1,
          rewind: !1,
          mouseDrag: !0,
          touchDrag: !0,
          pullDrag: !0,
          freeDrag: !1,
          margin: 0,
          stagePadding: 0,
          merge: !1,
          mergeFit: !0,
          autoWidth: !1,
          startPosition: 0,
          rtl: !1,
          smartSpeed: 250,
          fluidSpeed: !1,
          dragEndSpeed: !1,
          responsive: {},
          responsiveRefreshRate: 200,
          responsiveBaseElement: e,
          fallbackEasing: "swing",
          info: !1,
          nestedItemSelector: !1,
          itemElement: "div",
          stageElement: "div",
          refreshClass: "owl-refresh",
          loadedClass: "owl-loaded",
          loadingClass: "owl-loading",
          rtlClass: "owl-rtl",
          responsiveClass: "owl-responsive",
          dragClass: "owl-drag",
          itemClass: "owl-item",
          stageClass: "owl-stage",
          stageOuterClass: "owl-stage-outer",
          grabClass: "owl-grab"
      },
      o.Width = {
          Default: "default",
          Inner: "inner",
          Outer: "outer"
      },
      o.Type = {
          Event: "event",
          State: "state"
      },
      o.Plugins = {},
      o.Workers = [{
          filter: ["width", "settings"],
          run: function() {
              this._width = this.$element.width()
          }
      }, {
          filter: ["width", "items", "settings"],
          run: function(t) {
              t.current = this._items && this._items[this.relative(this._current)]
          }
      }, {
          filter: ["items", "settings"],
          run: function() {
              this.$stage.children(".cloned").remove()
          }
      }, {
          filter: ["width", "items", "settings"],
          run: function(t) {
              var e = this.settings.margin || ""
                , i = !this.settings.autoWidth
                , n = this.settings.rtl
                , o = {
                  width: "auto",
                  "margin-left": n ? e : "",
                  "margin-right": n ? "" : e
              };
              !i && this.$stage.children().css(o),
              t.css = o
          }
      }, {
          filter: ["width", "items", "settings"],
          run: function(t) {
              var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin
                , i = null
                , n = this._items.length
                , o = !this.settings.autoWidth
                , r = [];
              for (t.items = {
                  merge: !1,
                  width: e
              }; n--; )
                  i = this._mergers[n],
                  i = this.settings.mergeFit && Math.min(i, this.settings.items) || i,
                  t.items.merge = i > 1 || t.items.merge,
                  r[n] = o ? e * i : this._items[n].width();
              this._widths = r
          }
      }, {
          filter: ["items", "settings"],
          run: function() {
              var e = []
                , i = this._items
                , n = this.settings
                , o = Math.max(2 * n.items, 4)
                , r = 2 * Math.ceil(i.length / 2)
                , s = n.loop && i.length ? n.rewind ? o : Math.max(o, r) : 0
                , a = ""
                , l = "";
              for (s /= 2; s--; )
                  e.push(this.normalize(e.length / 2, !0)),
                  a += i[e[e.length - 1]][0].outerHTML,
                  e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)),
                  l = i[e[e.length - 1]][0].outerHTML + l;
              this._clones = e,
              t(a).addClass("cloned").appendTo(this.$stage),
              t(l).addClass("cloned").prependTo(this.$stage)
          }
      }, {
          filter: ["width", "items", "settings"],
          run: function() {
              for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, o = 0, r = []; ++i < e; )
                  n = r[i - 1] || 0,
                  o = this._widths[this.relative(i)] + this.settings.margin,
                  r.push(n + o * t);
              this._coordinates = r
          }
      }, {
          filter: ["width", "items", "settings"],
          run: function() {
              var t = this.settings.stagePadding
                , e = this._coordinates
                , i = {
                  width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                  "padding-left": t || "",
                  "padding-right": t || ""
              };
              this.$stage.css(i)
          }
      }, {
          filter: ["width", "items", "settings"],
          run: function(t) {
              var e = this._coordinates.length
                , i = !this.settings.autoWidth
                , n = this.$stage.children();
              if (i && t.items.merge)
                  for (; e--; )
                      t.css.width = this._widths[this.relative(e)],
                      n.eq(e).css(t.css);
              else
                  i && (t.css.width = t.items.width,
                  n.css(t.css))
          }
      }, {
          filter: ["items"],
          run: function() {
              this._coordinates.length < 1 && this.$stage.removeAttr("style")
          }
      }, {
          filter: ["width", "items", "settings"],
          run: function(t) {
              t.current = t.current ? this.$stage.children().index(t.current) : 0,
              t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)),
              this.reset(t.current)
          }
      }, {
          filter: ["position"],
          run: function() {
              this.animate(this.coordinates(this._current))
          }
      }, {
          filter: ["width", "position", "items", "settings"],
          run: function() {
              var t, e, i, n, o = this.settings.rtl ? 1 : -1, r = 2 * this.settings.stagePadding, s = this.coordinates(this.current()) + r, a = s + this.width() * o, l = [];
              for (i = 0,
              n = this._coordinates.length; i < n; i++)
                  t = this._coordinates[i - 1] || 0,
                  e = Math.abs(this._coordinates[i]) + r * o,
                  (this.op(t, "<=", s) && this.op(t, ">", a) || this.op(e, "<", s) && this.op(e, ">", a)) && l.push(i);
              this.$stage.children(".active").removeClass("active"),
              this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"),
              this.settings.center && (this.$stage.children(".center").removeClass("center"),
              this.$stage.children().eq(this.current()).addClass("center"))
          }
      }],
      o.prototype.initialize = function() {
          var e, i, o;
          (this.enter("initializing"),
          this.trigger("initialize"),
          this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
          this.settings.autoWidth && !this.is("pre-loading")) && (e = this.$element.find("img"),
          i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n,
          o = this.$element.children(i).width(),
          e.length && o <= 0 && this.preloadAutoWidthImages(e));
          this.$element.addClass(this.options.loadingClass),
          this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'),
          this.$element.append(this.$stage.parent()),
          this.replace(this.$element.children().not(this.$stage.parent())),
          this.$element.is(":visible") ? this.refresh() : this.invalidate("width"),
          this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),
          this.registerEventHandlers(),
          this.leave("initializing"),
          this.trigger("initialized")
      }
      ,
      o.prototype.setup = function() {
          var e = this.viewport()
            , i = this.options.responsive
            , n = -1
            , o = null;
          i ? (t.each(i, function(t) {
              t <= e && t > n && (n = Number(t))
          }),
          "function" == typeof (o = t.extend({}, this.options, i[n])).stagePadding && (o.stagePadding = o.stagePadding()),
          delete o.responsive,
          o.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s","g"), "$1" + n))) : o = t.extend({}, this.options),
          this.trigger("change", {
              property: {
                  name: "settings",
                  value: o
              }
          }),
          this._breakpoint = n,
          this.settings = o,
          this.invalidate("settings"),
          this.trigger("changed", {
              property: {
                  name: "settings",
                  value: this.settings
              }
          })
      }
      ,
      o.prototype.optionsLogic = function() {
          this.settings.autoWidth && (this.settings.stagePadding = !1,
          this.settings.merge = !1)
      }
      ,
      o.prototype.prepare = function(e) {
          var i = this.trigger("prepare", {
              content: e
          });
          return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)),
          this.trigger("prepared", {
              content: i.data
          }),
          i.data
      }
      ,
      o.prototype.update = function() {
          for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) {
              return this[t]
          }, this._invalidated), o = {}; e < i; )
              (this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(o),
              e++;
          this._invalidated = {},
          !this.is("valid") && this.enter("valid")
      }
      ,
      o.prototype.width = function(t) {
          switch (t = t || o.Width.Default) {
          case o.Width.Inner:
          case o.Width.Outer:
              return this._width;
          default:
              return this._width - 2 * this.settings.stagePadding + this.settings.margin
          }
      }
      ,
      o.prototype.refresh = function() {
          this.enter("refreshing"),
          this.trigger("refresh"),
          this.setup(),
          this.optionsLogic(),
          this.$element.addClass(this.options.refreshClass),
          this.update(),
          this.$element.removeClass(this.options.refreshClass),
          this.leave("refreshing"),
          this.trigger("refreshed")
      }
      ,
      o.prototype.onThrottledResize = function() {
          e.clearTimeout(this.resizeTimer),
          this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
      }
      ,
      o.prototype.onResize = function() {
          return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"),
          this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"),
          !1) : (this.invalidate("width"),
          this.refresh(),
          this.leave("resizing"),
          void this.trigger("resized")))
      }
      ,
      o.prototype.registerEventHandlers = function() {
          t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)),
          !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize),
          this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
          this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)),
          this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
              return !1
          })),
          this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)),
          this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
      }
      ,
      o.prototype.onDragStart = function(e) {
          var n = null;
          3 !== e.which && (t.support.transform ? n = {
              x: (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === n.length ? 12 : 4],
              y: n[16 === n.length ? 13 : 5]
          } : (n = this.$stage.position(),
          n = {
              x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
              y: n.top
          }),
          this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(),
          this.invalidate("position")),
          this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type),
          this.speed(0),
          this._drag.time = (new Date).getTime(),
          this._drag.target = t(e.target),
          this._drag.stage.start = n,
          this._drag.stage.current = n,
          this._drag.pointer = this.pointer(e),
          t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)),
          t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
              var n = this.difference(this._drag.pointer, this.pointer(e));
              t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)),
              Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(),
              this.enter("dragging"),
              this.trigger("drag"))
          }, this)))
      }
      ,
      o.prototype.onDragMove = function(t) {
          var e = null
            , i = null
            , n = null
            , o = this.difference(this._drag.pointer, this.pointer(t))
            , r = this.difference(this._drag.stage.start, o);
          this.is("dragging") && (t.preventDefault(),
          this.settings.loop ? (e = this.coordinates(this.minimum()),
          i = this.coordinates(this.maximum() + 1) - e,
          r.x = ((r.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()),
          i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()),
          n = this.settings.pullDrag ? -1 * o.x / 5 : 0,
          r.x = Math.max(Math.min(r.x, e + n), i + n)),
          this._drag.stage.current = r,
          this.animate(r.x))
      }
      ,
      o.prototype.onDragEnd = function(e) {
          var n = this.difference(this._drag.pointer, this.pointer(e))
            , o = this._drag.stage.current
            , r = n.x > 0 ^ this.settings.rtl ? "left" : "right";
          t(i).off(".owl.core"),
          this.$element.removeClass(this.options.grabClass),
          (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(o.x, 0 !== n.x ? r : this._drag.direction)),
          this.invalidate("position"),
          this.update(),
          this._drag.direction = r,
          (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
              return !1
          })),
          this.is("dragging") && (this.leave("dragging"),
          this.trigger("dragged"))
      }
      ,
      o.prototype.closest = function(e, i) {
          var n = -1
            , o = this.width()
            , r = this.coordinates();
          return this.settings.freeDrag || t.each(r, t.proxy(function(t, s) {
              return "left" === i && e > s - 30 && e < s + 30 ? n = t : "right" === i && e > s - o - 30 && e < s - o + 30 ? n = t + 1 : this.op(e, "<", s) && this.op(e, ">", r[t + 1] || s - o) && (n = "left" === i ? t + 1 : t),
              -1 === n
          }, this)),
          this.settings.loop || (this.op(e, ">", r[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", r[this.maximum()]) && (n = e = this.maximum())),
          n
      }
      ,
      o.prototype.animate = function(e) {
          var i = this.speed() > 0;
          this.is("animating") && this.onTransitionEnd(),
          i && (this.enter("animating"),
          this.trigger("translate")),
          t.support.transform3d && t.support.transition ? this.$stage.css({
              transform: "translate3d(" + e + "px,0px,0px)",
              transition: this.speed() / 1e3 + "s"
          }) : i ? this.$stage.animate({
              left: e + "px"
          }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
              left: e + "px"
          })
      }
      ,
      o.prototype.is = function(t) {
          return this._states.current[t] && this._states.current[t] > 0
      }
      ,
      o.prototype.current = function(t) {
          if (t === n)
              return this._current;
          if (0 === this._items.length)
              return n;
          if (t = this.normalize(t),
          this._current !== t) {
              var e = this.trigger("change", {
                  property: {
                      name: "position",
                      value: t
                  }
              });
              e.data !== n && (t = this.normalize(e.data)),
              this._current = t,
              this.invalidate("position"),
              this.trigger("changed", {
                  property: {
                      name: "position",
                      value: this._current
                  }
              })
          }
          return this._current
      }
      ,
      o.prototype.invalidate = function(e) {
          return "string" === t.type(e) && (this._invalidated[e] = !0,
          this.is("valid") && this.leave("valid")),
          t.map(this._invalidated, function(t, e) {
              return e
          })
      }
      ,
      o.prototype.reset = function(t) {
          (t = this.normalize(t)) !== n && (this._speed = 0,
          this._current = t,
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(t)),
          this.release(["translate", "translated"]))
      }
      ,
      o.prototype.normalize = function(t, e) {
          var i = this._items.length
            , o = e ? 0 : this._clones.length;
          return !this.isNumeric(t) || i < 1 ? t = n : (t < 0 || t >= i + o) && (t = ((t - o / 2) % i + i) % i + o / 2),
          t
      }
      ,
      o.prototype.relative = function(t) {
          return t -= this._clones.length / 2,
          this.normalize(t, !0)
      }
      ,
      o.prototype.maximum = function(t) {
          var e, i, n, o = this.settings, r = this._coordinates.length;
          if (o.loop)
              r = this._clones.length / 2 + this._items.length - 1;
          else if (o.autoWidth || o.merge) {
              for (e = this._items.length,
              i = this._items[--e].width(),
              n = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > n); )
                  ;
              r = e + 1
          } else
              r = o.center ? this._items.length - 1 : this._items.length - o.items;
          return t && (r -= this._clones.length / 2),
          Math.max(r, 0)
      }
      ,
      o.prototype.minimum = function(t) {
          return t ? 0 : this._clones.length / 2
      }
      ,
      o.prototype.items = function(t) {
          return t === n ? this._items.slice() : (t = this.normalize(t, !0),
          this._items[t])
      }
      ,
      o.prototype.mergers = function(t) {
          return t === n ? this._mergers.slice() : (t = this.normalize(t, !0),
          this._mergers[t])
      }
      ,
      o.prototype.clones = function(e) {
          var i = this._clones.length / 2
            , o = i + this._items.length
            , r = function(t) {
              return t % 2 == 0 ? o + t / 2 : i - (t + 1) / 2
          };
          return e === n ? t.map(this._clones, function(t, e) {
              return r(e)
          }) : t.map(this._clones, function(t, i) {
              return t === e ? r(i) : null
          })
      }
      ,
      o.prototype.speed = function(t) {
          return t !== n && (this._speed = t),
          this._speed
      }
      ,
      o.prototype.coordinates = function(e) {
          var i, o = 1, r = e - 1;
          return e === n ? t.map(this._coordinates, t.proxy(function(t, e) {
              return this.coordinates(e)
          }, this)) : (this.settings.center ? (this.settings.rtl && (o = -1,
          r = e + 1),
          i = this._coordinates[e],
          i += (this.width() - i + (this._coordinates[r] || 0)) / 2 * o) : i = this._coordinates[r] || 0,
          i = Math.ceil(i))
      }
      ,
      o.prototype.duration = function(t, e, i) {
          return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
      }
      ,
      o.prototype.to = function(t, e) {
          var i = this.current()
            , n = null
            , o = t - this.relative(i)
            , r = (o > 0) - (o < 0)
            , s = this._items.length
            , a = this.minimum()
            , l = this.maximum();
          this.settings.loop ? (!this.settings.rewind && Math.abs(o) > s / 2 && (o += -1 * r * s),
          (n = (((t = i + o) - a) % s + s) % s + a) !== t && n - o <= l && n - o > 0 && (i = n - o,
          t = n,
          this.reset(i))) : this.settings.rewind ? t = (t % (l += 1) + l) % l : t = Math.max(a, Math.min(l, t)),
          this.speed(this.duration(i, t, e)),
          this.current(t),
          this.$element.is(":visible") && this.update()
      }
      ,
      o.prototype.next = function(t) {
          t = t || !1,
          this.to(this.relative(this.current()) + 1, t)
      }
      ,
      o.prototype.prev = function(t) {
          t = t || !1,
          this.to(this.relative(this.current()) - 1, t)
      }
      ,
      o.prototype.onTransitionEnd = function(t) {
          if (t !== n && (t.stopPropagation(),
          (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)))
              return !1;
          this.leave("animating"),
          this.trigger("translated")
      }
      ,
      o.prototype.viewport = function() {
          var n;
          return this.options.responsiveBaseElement !== e ? n = t(this.options.responsiveBaseElement).width() : e.innerWidth ? n = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."),
          n
      }
      ,
      o.prototype.replace = function(e) {
          this.$stage.empty(),
          this._items = [],
          e && (e = e instanceof jQuery ? e : t(e)),
          this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)),
          e.filter(function() {
              return 1 === this.nodeType
          }).each(t.proxy(function(t, e) {
              e = this.prepare(e),
              this.$stage.append(e),
              this._items.push(e),
              this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
          }, this)),
          this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
          this.invalidate("items")
      }
      ,
      o.prototype.add = function(e, i) {
          var o = this.relative(this._current);
          i = i === n ? this._items.length : this.normalize(i, !0),
          e = e instanceof jQuery ? e : t(e),
          this.trigger("add", {
              content: e,
              position: i
          }),
          e = this.prepare(e),
          0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e),
          0 !== this._items.length && this._items[i - 1].after(e),
          this._items.push(e),
          this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e),
          this._items.splice(i, 0, e),
          this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
          this._items[o] && this.reset(this._items[o].index()),
          this.invalidate("items"),
          this.trigger("added", {
              content: e,
              position: i
          })
      }
      ,
      o.prototype.remove = function(t) {
          (t = this.normalize(t, !0)) !== n && (this.trigger("remove", {
              content: this._items[t],
              position: t
          }),
          this._items[t].remove(),
          this._items.splice(t, 1),
          this._mergers.splice(t, 1),
          this.invalidate("items"),
          this.trigger("removed", {
              content: null,
              position: t
          }))
      }
      ,
      o.prototype.preloadAutoWidthImages = function(e) {
          e.each(t.proxy(function(e, i) {
              this.enter("pre-loading"),
              i = t(i),
              t(new Image).one("load", t.proxy(function(t) {
                  i.attr("src", t.target.src),
                  i.css("opacity", 1),
                  this.leave("pre-loading"),
                  !this.is("pre-loading") && !this.is("initializing") && this.refresh()
              }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
          }, this))
      }
      ,
      o.prototype.destroy = function() {
          for (var n in this.$element.off(".owl.core"),
          this.$stage.off(".owl.core"),
          t(i).off(".owl.core"),
          !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer),
          this.off(e, "resize", this._handlers.onThrottledResize)),
          this._plugins)
              this._plugins[n].destroy();
          this.$stage.children(".cloned").remove(),
          this.$stage.unwrap(),
          this.$stage.children().contents().unwrap(),
          this.$stage.children().unwrap(),
          this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s","g"), "")).removeData("owl.carousel")
      }
      ,
      o.prototype.op = function(t, e, i) {
          var n = this.settings.rtl;
          switch (e) {
          case "<":
              return n ? t > i : t < i;
          case ">":
              return n ? t < i : t > i;
          case ">=":
              return n ? t <= i : t >= i;
          case "<=":
              return n ? t >= i : t <= i
          }
      }
      ,
      o.prototype.on = function(t, e, i, n) {
          t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
      }
      ,
      o.prototype.off = function(t, e, i, n) {
          t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
      }
      ,
      o.prototype.trigger = function(e, i, n, r, s) {
          var a = {
              item: {
                  count: this._items.length,
                  index: this.current()
              }
          }
            , l = t.camelCase(t.grep(["on", e, n], function(t) {
              return t
          }).join("-").toLowerCase())
            , c = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
              relatedTarget: this
          }, a, i));
          return this._supress[e] || (t.each(this._plugins, function(t, e) {
              e.onTrigger && e.onTrigger(c)
          }),
          this.register({
              type: o.Type.Event,
              name: e
          }),
          this.$element.trigger(c),
          this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)),
          c
      }
      ,
      o.prototype.enter = function(e) {
          t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
              this._states.current[e] === n && (this._states.current[e] = 0),
              this._states.current[e]++
          }, this))
      }
      ,
      o.prototype.leave = function(e) {
          t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
              this._states.current[e]--
          }, this))
      }
      ,
      o.prototype.register = function(e) {
          if (e.type === o.Type.Event) {
              if (t.event.special[e.name] || (t.event.special[e.name] = {}),
              !t.event.special[e.name].owl) {
                  var i = t.event.special[e.name]._default;
                  t.event.special[e.name]._default = function(t) {
                      return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                  }
                  ,
                  t.event.special[e.name].owl = !0
              }
          } else
              e.type === o.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags,
              this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, n) {
                  return t.inArray(i, this._states.tags[e.name]) === n
              }, this)))
      }
      ,
      o.prototype.suppress = function(e) {
          t.each(e, t.proxy(function(t, e) {
              this._supress[e] = !0
          }, this))
      }
      ,
      o.prototype.release = function(e) {
          t.each(e, t.proxy(function(t, e) {
              delete this._supress[e]
          }, this))
      }
      ,
      o.prototype.pointer = function(t) {
          var i = {
              x: null,
              y: null
          };
          return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX,
          i.y = t.pageY) : (i.x = t.clientX,
          i.y = t.clientY),
          i
      }
      ,
      o.prototype.isNumeric = function(t) {
          return !isNaN(parseFloat(t))
      }
      ,
      o.prototype.difference = function(t, e) {
          return {
              x: t.x - e.x,
              y: t.y - e.y
          }
      }
      ,
      t.fn.owlCarousel = function(e) {
          var i = Array.prototype.slice.call(arguments, 1);
          return this.each(function() {
              var n = t(this)
                , r = n.data("owl.carousel");
              r || (r = new o(this,"object" == typeof e && e),
              n.data("owl.carousel", r),
              t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, i) {
                  r.register({
                      type: o.Type.Event,
                      name: i
                  }),
                  r.$element.on(i + ".owl.carousel.core", t.proxy(function(t) {
                      t.namespace && t.relatedTarget !== this && (this.suppress([i]),
                      r[i].apply(this, [].slice.call(arguments, 1)),
                      this.release([i]))
                  }, r))
              })),
              "string" == typeof e && "_" !== e.charAt(0) && r[e].apply(r, i)
          })
      }
      ,
      t.fn.owlCarousel.Constructor = o
  }(window.Zepto || window.jQuery, window, document),
  i = window.Zepto || window.jQuery,
  n = window,
  document,
  (o = function(t) {
      this._core = t,
      this._interval = null,
      this._visible = null,
      this._handlers = {
          "initialized.owl.carousel": i.proxy(function(t) {
              t.namespace && this._core.settings.autoRefresh && this.watch()
          }, this)
      },
      this._core.options = i.extend({}, o.Defaults, this._core.options),
      this._core.$element.on(this._handlers)
  }
  ).Defaults = {
      autoRefresh: !0,
      autoRefreshInterval: 500
  },
  o.prototype.watch = function() {
      this._interval || (this._visible = this._core.$element.is(":visible"),
      this._interval = n.setInterval(i.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
  }
  ,
  o.prototype.refresh = function() {
      this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible,
      this._core.$element.toggleClass("owl-hidden", !this._visible),
      this._visible && this._core.invalidate("width") && this._core.refresh())
  }
  ,
  o.prototype.destroy = function() {
      var t, e;
      for (t in n.clearInterval(this._interval),
      this._handlers)
          this._core.$element.off(t, this._handlers[t]);
      for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null)
  }
  ,
  i.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o,
  function(t, e, i, n) {
      var o = function(e) {
          this._core = e,
          this._loaded = [],
          this._handlers = {
              "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                  if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                      for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, o = i.center && -1 * n || 0, r = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + o, s = this._core.clones().length, a = t.proxy(function(t, e) {
                          this.load(e)
                      }, this); o++ < n; )
                          this.load(s / 2 + this._core.relative(r)),
                          s && t.each(this._core.clones(this._core.relative(r)), a),
                          r++
              }, this)
          },
          this._core.options = t.extend({}, o.Defaults, this._core.options),
          this._core.$element.on(this._handlers)
      };
      o.Defaults = {
          lazyLoad: !1
      },
      o.prototype.load = function(i) {
          var n = this._core.$stage.children().eq(i)
            , o = n && n.find(".owl-lazy");
          !o || t.inArray(n.get(0), this._loaded) > -1 || (o.each(t.proxy(function(i, n) {
              var o, r = t(n), s = e.devicePixelRatio > 1 && r.attr("data-src-retina") || r.attr("data-src");
              this._core.trigger("load", {
                  element: r,
                  url: s
              }, "lazy"),
              r.is("img") ? r.one("load.owl.lazy", t.proxy(function() {
                  r.css("opacity", 1),
                  this._core.trigger("loaded", {
                      element: r,
                      url: s
                  }, "lazy")
              }, this)).attr("src", s) : ((o = new Image).onload = t.proxy(function() {
                  r.css({
                      "background-image": 'url("' + s + '")',
                      opacity: "1"
                  }),
                  this._core.trigger("loaded", {
                      element: r,
                      url: s
                  }, "lazy")
              }, this),
              o.src = s)
          }, this)),
          this._loaded.push(n.get(0)))
      }
      ,
      o.prototype.destroy = function() {
          var t, e;
          for (t in this.handlers)
              this._core.$element.off(t, this.handlers[t]);
          for (e in Object.getOwnPropertyNames(this))
              "function" != typeof this[e] && (this[e] = null)
      }
      ,
      t.fn.owlCarousel.Constructor.Plugins.Lazy = o
  }(window.Zepto || window.jQuery, window, document),
  function(t, e, i, n) {
      var o = function(e) {
          this._core = e,
          this._handlers = {
              "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                  t.namespace && this._core.settings.autoHeight && this.update()
              }, this),
              "changed.owl.carousel": t.proxy(function(t) {
                  t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
              }, this),
              "loaded.owl.lazy": t.proxy(function(t) {
                  t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
              }, this)
          },
          this._core.options = t.extend({}, o.Defaults, this._core.options),
          this._core.$element.on(this._handlers)
      };
      o.Defaults = {
          autoHeight: !1,
          autoHeightClass: "owl-height"
      },
      o.prototype.update = function() {
          var e, i = this._core._current, n = i + this._core.settings.items, o = this._core.$stage.children().toArray().slice(i, n), r = [];
          t.each(o, function(e, i) {
              r.push(t(i).height())
          }),
          e = Math.max.apply(null, r),
          this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass)
      }
      ,
      o.prototype.destroy = function() {
          var t, e;
          for (t in this._handlers)
              this._core.$element.off(t, this._handlers[t]);
          for (e in Object.getOwnPropertyNames(this))
              "function" != typeof this[e] && (this[e] = null)
      }
      ,
      t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o
  }(window.Zepto || window.jQuery, window, document),
  function(t, e, i, n) {
      var o = function(e) {
          this._core = e,
          this._videos = {},
          this._playing = null,
          this._handlers = {
              "initialized.owl.carousel": t.proxy(function(t) {
                  t.namespace && this._core.register({
                      type: "state",
                      name: "playing",
                      tags: ["interacting"]
                  })
              }, this),
              "resize.owl.carousel": t.proxy(function(t) {
                  t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
              }, this),
              "refreshed.owl.carousel": t.proxy(function(t) {
                  t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
              }, this),
              "changed.owl.carousel": t.proxy(function(t) {
                  t.namespace && "position" === t.property.name && this._playing && this.stop()
              }, this),
              "prepared.owl.carousel": t.proxy(function(e) {
                  if (e.namespace) {
                      var i = t(e.content).find(".owl-video");
                      i.length && (i.css("display", "none"),
                      this.fetch(i, t(e.content)))
                  }
              }, this)
          },
          this._core.options = t.extend({}, o.Defaults, this._core.options),
          this._core.$element.on(this._handlers),
          this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
              this.play(t)
          }, this))
      };
      o.Defaults = {
          video: !1,
          videoHeight: !1,
          videoWidth: !1
      },
      o.prototype.fetch = function(t, e) {
          var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
            , n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id")
            , o = t.attr("data-width") || this._core.settings.videoWidth
            , r = t.attr("data-height") || this._core.settings.videoHeight
            , s = t.attr("href");
          if (!s)
              throw new Error("Missing video URL.");
          if ((n = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1)
              i = "youtube";
          else if (n[3].indexOf("vimeo") > -1)
              i = "vimeo";
          else {
              if (!(n[3].indexOf("vzaar") > -1))
                  throw new Error("Video URL not supported.");
              i = "vzaar"
          }
          n = n[6],
          this._videos[s] = {
              type: i,
              id: n,
              width: o,
              height: r
          },
          e.attr("data-video", s),
          this.thumbnail(t, this._videos[s])
      }
      ,
      o.prototype.thumbnail = function(e, i) {
          var n, o, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "", s = e.find("img"), a = "src", l = "", c = this._core.settings, d = function(t) {
              '<div class="owl-video-play-icon"></div>',
              n = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + a + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>',
              e.after(n),
              e.after('<div class="owl-video-play-icon"></div>')
          };
          if (e.wrap('<div class="owl-video-wrapper"' + r + "></div>"),
          this._core.settings.lazyLoad && (a = "data-src",
          l = "owl-lazy"),
          s.length)
              return d(s.attr(a)),
              s.remove(),
              !1;
          "youtube" === i.type ? (o = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg",
          d(o)) : "vimeo" === i.type ? t.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + i.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function(t) {
                  o = t[0].thumbnail_large,
                  d(o)
              }
          }) : "vzaar" === i.type && t.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + i.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function(t) {
                  o = t.framegrab_url,
                  d(o)
              }
          })
      }
      ,
      o.prototype.stop = function() {
          this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          this._playing = null,
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video")
      }
      ,
      o.prototype.play = function(e) {
          var i, n = t(e.target).closest("." + this._core.settings.itemClass), o = this._videos[n.attr("data-video")], r = o.width || "100%", s = o.height || this._core.$stage.height();
          this._playing || (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          n = this._core.items(this._core.relative(n.index())),
          this._core.reset(n.index()),
          "youtube" === o.type ? i = '<iframe width="' + r + '" height="' + s + '" src="//www.youtube.com/embed/' + o.id + "?autoplay=1&rel=0&v=" + o.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === o.type ? i = '<iframe src="//player.vimeo.com/video/' + o.id + '?autoplay=1" width="' + r + '" height="' + s + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === o.type && (i = '<iframe frameborder="0"height="' + s + '"width="' + r + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + o.id + '/player?autoplay=true"></iframe>'),
          t('<div class="owl-video-frame">' + i + "</div>").insertAfter(n.find(".owl-video")),
          this._playing = n.addClass("owl-video-playing"))
      }
      ,
      o.prototype.isInFullScreen = function() {
          var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
          return e && t(e).parent().hasClass("owl-video-frame")
      }
      ,
      o.prototype.destroy = function() {
          var t, e;
          for (t in this._core.$element.off("click.owl.video"),
          this._handlers)
              this._core.$element.off(t, this._handlers[t]);
          for (e in Object.getOwnPropertyNames(this))
              "function" != typeof this[e] && (this[e] = null)
      }
      ,
      t.fn.owlCarousel.Constructor.Plugins.Video = o
  }(window.Zepto || window.jQuery, window, document),
  function(t, e, i, n) {
      var o = function(e) {
          this.core = e,
          this.core.options = t.extend({}, o.Defaults, this.core.options),
          this.swapping = !0,
          this.previous = n,
          this.next = n,
          this.handlers = {
              "change.owl.carousel": t.proxy(function(t) {
                  t.namespace && "position" == t.property.name && (this.previous = this.core.current(),
                  this.next = t.property.value)
              }, this),
              "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                  t.namespace && (this.swapping = "translated" == t.type)
              }, this),
              "translate.owl.carousel": t.proxy(function(t) {
                  t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
              }, this)
          },
          this.core.$element.on(this.handlers)
      };
      o.Defaults = {
          animateOut: !1,
          animateIn: !1
      },
      o.prototype.swap = function() {
          if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
              this.core.speed(0);
              var e, i = t.proxy(this.clear, this), n = this.core.$stage.children().eq(this.previous), o = this.core.$stage.children().eq(this.next), r = this.core.settings.animateIn, s = this.core.settings.animateOut;
              this.core.current() !== this.previous && (s && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
              n.one(t.support.animation.end, i).css({
                  left: e + "px"
              }).addClass("animated owl-animated-out").addClass(s)),
              r && o.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(r))
          }
      }
      ,
      o.prototype.clear = function(e) {
          t(e.target).css({
              left: ""
          }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd()
      }
      ,
      o.prototype.destroy = function() {
          var t, e;
          for (t in this.handlers)
              this.core.$element.off(t, this.handlers[t]);
          for (e in Object.getOwnPropertyNames(this))
              "function" != typeof this[e] && (this[e] = null)
      }
      ,
      t.fn.owlCarousel.Constructor.Plugins.Animate = o
  }(window.Zepto || window.jQuery, window, document),
  function(t, e, i, n) {
      var o = function(e) {
          this._core = e,
          this._timeout = null,
          this._paused = !1,
          this._handlers = {
              "changed.owl.carousel": t.proxy(function(t) {
                  t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
              }, this),
              "initialized.owl.carousel": t.proxy(function(t) {
                  t.namespace && this._core.settings.autoplay && this.play()
              }, this),
              "play.owl.autoplay": t.proxy(function(t, e, i) {
                  t.namespace && this.play(e, i)
              }, this),
              "stop.owl.autoplay": t.proxy(function(t) {
                  t.namespace && this.stop()
              }, this),
              "mouseover.owl.autoplay": t.proxy(function() {
                  this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
              }, this),
              "mouseleave.owl.autoplay": t.proxy(function() {
                  this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
              }, this),
              "touchstart.owl.core": t.proxy(function() {
                  this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
              }, this),
              "touchend.owl.core": t.proxy(function() {
                  this._core.settings.autoplayHoverPause && this.play()
              }, this)
          },
          this._core.$element.on(this._handlers),
          this._core.options = t.extend({}, o.Defaults, this._core.options)
      };
      o.Defaults = {
          autoplay: !1,
          autoplayTimeout: 5e3,
          autoplayHoverPause: !1,
          autoplaySpeed: !1
      },
      o.prototype.play = function(t, e) {
          this._paused = !1,
          this._core.is("rotating") || (this._core.enter("rotating"),
          this._setAutoPlayInterval())
      }
      ,
      o.prototype._getNextTimeout = function(n, o) {
          return this._timeout && e.clearTimeout(this._timeout),
          e.setTimeout(t.proxy(function() {
              this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(o || this._core.settings.autoplaySpeed)
          }, this), n || this._core.settings.autoplayTimeout)
      }
      ,
      o.prototype._setAutoPlayInterval = function() {
          this._timeout = this._getNextTimeout()
      }
      ,
      o.prototype.stop = function() {
          this._core.is("rotating") && (e.clearTimeout(this._timeout),
          this._core.leave("rotating"))
      }
      ,
      o.prototype.pause = function() {
          this._core.is("rotating") && (this._paused = !0)
      }
      ,
      o.prototype.destroy = function() {
          var t, e;
          for (t in this.stop(),
          this._handlers)
              this._core.$element.off(t, this._handlers[t]);
          for (e in Object.getOwnPropertyNames(this))
              "function" != typeof this[e] && (this[e] = null)
      }
      ,
      t.fn.owlCarousel.Constructor.Plugins.autoplay = o
  }(window.Zepto || window.jQuery, window, document),
  function(t, e, i, n) {
      "use strict";
      var o = function(e) {
          this._core = e,
          this._initialized = !1,
          this._pages = [],
          this._controls = {},
          this._templates = [],
          this.$element = this._core.$element,
          this._overrides = {
              next: this._core.next,
              prev: this._core.prev,
              to: this._core.to
          },
          this._handlers = {
              "prepared.owl.carousel": t.proxy(function(e) {
                  e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
              }, this),
              "added.owl.carousel": t.proxy(function(t) {
                  t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
              }, this),
              "remove.owl.carousel": t.proxy(function(t) {
                  t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
              }, this),
              "changed.owl.carousel": t.proxy(function(t) {
                  t.namespace && "position" == t.property.name && this.draw()
              }, this),
              "initialized.owl.carousel": t.proxy(function(t) {
                  t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"),
                  this.initialize(),
                  this.update(),
                  this.draw(),
                  this._initialized = !0,
                  this._core.trigger("initialized", null, "navigation"))
              }, this),
              "refreshed.owl.carousel": t.proxy(function(t) {
                  t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"),
                  this.update(),
                  this.draw(),
                  this._core.trigger("refreshed", null, "navigation"))
              }, this)
          },
          this._core.options = t.extend({}, o.Defaults, this._core.options),
          this.$element.on(this._handlers)
      };
      o.Defaults = {
          nav: !1,
          navText: ["prev", "next"],
          navSpeed: !1,
          navElement: "div",
          navContainer: !1,
          navContainerClass: "owl-nav",
          navClass: ["owl-prev", "owl-next"],
          slideBy: 1,
          dotClass: "owl-dot",
          dotsClass: "owl-dots",
          dots: !0,
          dotsEach: !1,
          dotsData: !1,
          dotsSpeed: !1,
          dotsContainer: !1
      },
      o.prototype.initialize = function() {
          var e, i = this._core.settings;
          for (e in this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"),
          this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
              this.prev(i.navSpeed)
          }, this)),
          this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
              this.next(i.navSpeed)
          }, this)),
          i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]),
          this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"),
          this._controls.$absolute.on("click", "div", t.proxy(function(e) {
              var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
              e.preventDefault(),
              this.to(n, i.dotsSpeed)
          }, this)),
          this._overrides)
              this._core[e] = t.proxy(this[e], this)
      }
      ,
      o.prototype.destroy = function() {
          var t, e, i, n;
          for (t in this._handlers)
              this.$element.off(t, this._handlers[t]);
          for (e in this._controls)
              this._controls[e].remove();
          for (n in this.overides)
              this._core[n] = this._overrides[n];
          for (i in Object.getOwnPropertyNames(this))
              "function" != typeof this[i] && (this[i] = null)
      }
      ,
      o.prototype.update = function() {
          var t, e, i = this._core.clones().length / 2, n = i + this._core.items().length, o = this._core.maximum(!0), r = this._core.settings, s = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
          if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)),
          r.dots || "page" == r.slideBy)
              for (this._pages = [],
              t = i,
              e = 0,
              0; t < n; t++) {
                  if (e >= s || 0 === e) {
                      if (this._pages.push({
                          start: Math.min(o, t - i),
                          end: t - i + s - 1
                      }),
                      Math.min(o, t - i) === o)
                          break;
                      e = 0,
                      0
                  }
                  e += this._core.mergers(this._core.relative(t))
              }
      }
      ,
      o.prototype.draw = function() {
          var e, i = this._core.settings, n = this._core.items().length <= i.items, o = this._core.relative(this._core.current()), r = i.loop || i.rewind;
          this._controls.$relative.toggleClass("disabled", !i.nav || n),
          i.nav && (this._controls.$previous.toggleClass("disabled", !r && o <= this._core.minimum(!0)),
          this._controls.$next.toggleClass("disabled", !r && o >= this._core.maximum(!0))),
          this._controls.$absolute.toggleClass("disabled", !i.dots || n),
          i.dots && (e = this._pages.length - this._controls.$absolute.children().length,
          i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(),
          this._controls.$absolute.find(".active").removeClass("active"),
          this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
      }
      ,
      o.prototype.onTrigger = function(e) {
          var i = this._core.settings;
          e.page = {
              index: t.inArray(this.current(), this._pages),
              count: this._pages.length,
              size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
          }
      }
      ,
      o.prototype.current = function() {
          var e = this._core.relative(this._core.current());
          return t.grep(this._pages, t.proxy(function(t, i) {
              return t.start <= e && t.end >= e
          }, this)).pop()
      }
      ,
      o.prototype.getPosition = function(e) {
          var i, n, o = this._core.settings;
          return "page" == o.slideBy ? (i = t.inArray(this.current(), this._pages),
          n = this._pages.length,
          e ? ++i : --i,
          i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()),
          n = this._core.items().length,
          e ? i += o.slideBy : i -= o.slideBy),
          i
      }
      ,
      o.prototype.next = function(e) {
          t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
      }
      ,
      o.prototype.prev = function(e) {
          t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
      }
      ,
      o.prototype.to = function(e, i, n) {
          var o;
          !n && this._pages.length ? (o = this._pages.length,
          t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
      }
      ,
      t.fn.owlCarousel.Constructor.Plugins.Navigation = o
  }(window.Zepto || window.jQuery, window, document),
  function(t, e, i, n) {
      "use strict";
      var o = function(i) {
          this._core = i,
          this._hashes = {},
          this.$element = this._core.$element,
          this._handlers = {
              "initialized.owl.carousel": t.proxy(function(i) {
                  i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
              }, this),
              "prepared.owl.carousel": t.proxy(function(e) {
                  if (e.namespace) {
                      var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                      if (!i)
                          return;
                      this._hashes[i] = e.content
                  }
              }, this),
              "changed.owl.carousel": t.proxy(function(i) {
                  if (i.namespace && "position" === i.property.name) {
                      var n = this._core.items(this._core.relative(this._core.current()))
                        , o = t.map(this._hashes, function(t, e) {
                          return t === n ? e : null
                      }).join();
                      if (!o || e.location.hash.slice(1) === o)
                          return;
                      e.location.hash = o
                  }
              }, this)
          },
          this._core.options = t.extend({}, o.Defaults, this._core.options),
          this.$element.on(this._handlers),
          t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
              var i = e.location.hash.substring(1)
                , n = this._core.$stage.children()
                , o = this._hashes[i] && n.index(this._hashes[i]);
              void 0 !== o && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0)
          }, this))
      };
      o.Defaults = {
          URLhashListener: !1
      },
      o.prototype.destroy = function() {
          var i, n;
          for (i in t(e).off("hashchange.owl.navigation"),
          this._handlers)
              this._core.$element.off(i, this._handlers[i]);
          for (n in Object.getOwnPropertyNames(this))
              "function" != typeof this[n] && (this[n] = null)
      }
      ,
      t.fn.owlCarousel.Constructor.Plugins.Hash = o
  }(window.Zepto || window.jQuery, window, document),
  function(t, e, i, n) {
      function o(e, i) {
          var o = !1
            , r = e.charAt(0).toUpperCase() + e.slice(1);
          return t.each((e + " " + a.join(r + " ") + r).split(" "), function(t, e) {
              if (s[e] !== n)
                  return o = !i || e,
                  !1
          }),
          o
      }
      function r(t) {
          return o(t, !0)
      }
      var s = t("<support>").get(0).style
        , a = "Webkit Moz O ms".split(" ")
        , l = {
          transition: {
              end: {
                  WebkitTransition: "webkitTransitionEnd",
                  MozTransition: "transitionend",
                  OTransition: "oTransitionEnd",
                  transition: "transitionend"
              }
          },
          animation: {
              end: {
                  WebkitAnimation: "webkitAnimationEnd",
                  MozAnimation: "animationend",
                  OAnimation: "oAnimationEnd",
                  animation: "animationend"
              }
          }
      }
        , c = function() {
          return !!o("transform")
      }
        , d = function() {
          return !!o("perspective")
      }
        , u = function() {
          return !!o("animation")
      };
      (function() {
          return !!o("transition")
      }
      )() && (t.support.transition = new String(r("transition")),
      t.support.transition.end = l.transition.end[t.support.transition]),
      u() && (t.support.animation = new String(r("animation")),
      t.support.animation.end = l.animation.end[t.support.animation]),
      c() && (t.support.transform = new String(r("transform")),
      t.support.transform3d = d())
  }(window.Zepto || window.jQuery, window, document)
}
, function(t, e, i) {
  t.exports = function(t) {
      function e(n) {
          if (i[n])
              return i[n].exports;
          var o = i[n] = {
              exports: {},
              id: n,
              loaded: !1
          };
          return t[n].call(o.exports, o, o.exports, e),
          o.loaded = !0,
          o.exports
      }
      var i = {};
      return e.m = t,
      e.c = i,
      e.p = "dist/",
      e(0)
  }([function(t, e, i) {
      "use strict";
      function n(t) {
          return t && t.__esModule ? t : {
              default: t
          }
      }
      var o = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var n in i)
                  Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
          }
          return t
      }
        , r = i(1)
        , s = (n(r),
      i(6))
        , a = n(s)
        , l = i(7)
        , c = n(l)
        , d = i(8)
        , u = n(d)
        , h = i(9)
        , f = n(h)
        , p = i(10)
        , g = n(p)
        , m = i(11)
        , v = n(m)
        , y = i(14)
        , b = n(y)
        , w = []
        , x = !1
        , A = document.all && !window.atob
        , C = {
          offset: 120,
          delay: 0,
          easing: "ease",
          duration: 400,
          disable: !1,
          once: !1,
          startEvent: "DOMContentLoaded",
          throttleDelay: 99,
          debounceDelay: 50,
          disableMutationObserver: !1
      }
        , S = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (t && (x = !0),
          x)
              return w = (0,
              v.default)(w, C),
              (0,
              g.default)(w, C.once),
              w
      }
        , T = function() {
          w = (0,
          b.default)(),
          S()
      };
      t.exports = {
          init: function(t) {
              return C = o(C, t),
              w = (0,
              b.default)(),
              function(t) {
                  return !0 === t || "mobile" === t && f.default.mobile() || "phone" === t && f.default.phone() || "tablet" === t && f.default.tablet() || "function" == typeof t && !0 === t()
              }(C.disable) || A ? void w.forEach(function(t, e) {
                  t.node.removeAttribute("data-aos"),
                  t.node.removeAttribute("data-aos-easing"),
                  t.node.removeAttribute("data-aos-duration"),
                  t.node.removeAttribute("data-aos-delay")
              }) : (document.querySelector("body").setAttribute("data-aos-easing", C.easing),
              document.querySelector("body").setAttribute("data-aos-duration", C.duration),
              document.querySelector("body").setAttribute("data-aos-delay", C.delay),
              "DOMContentLoaded" === C.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? S(!0) : "load" === C.startEvent ? window.addEventListener(C.startEvent, function() {
                  S(!0)
              }) : document.addEventListener(C.startEvent, function() {
                  S(!0)
              }),
              window.addEventListener("resize", (0,
              c.default)(S, C.debounceDelay, !0)),
              window.addEventListener("orientationchange", (0,
              c.default)(S, C.debounceDelay, !0)),
              window.addEventListener("scroll", (0,
              a.default)(function() {
                  (0,
                  g.default)(w, C.once)
              }, C.throttleDelay)),
              C.disableMutationObserver || (0,
              u.default)("[data-aos]", T),
              w)
          },
          refresh: S,
          refreshHard: T
      }
  }
  , function(t, e) {}
  , , , , , function(t, e) {
      (function(e) {
          "use strict";
          function i(t, e, i) {
              function o(e) {
                  var i = u
                    , n = h;
                  return u = h = void 0,
                  v = e,
                  p = t.apply(n, i)
              }
              function s(t) {
                  var i = t - m
                    , n = t - v;
                  return void 0 === m || i >= e || i < 0 || b && n >= f
              }
              function l() {
                  var t = A();
                  return s(t) ? c(t) : void (g = setTimeout(l, function(t) {
                      var i = t - v
                        , n = e - (t - m);
                      return b ? x(n, f - i) : n
                  }(t)))
              }
              function c(t) {
                  return g = void 0,
                  C && u ? o(t) : (u = h = void 0,
                  p)
              }
              function d() {
                  var t = A()
                    , i = s(t);
                  if (u = arguments,
                  h = this,
                  m = t,
                  i) {
                      if (void 0 === g)
                          return function(t) {
                              return v = t,
                              g = setTimeout(l, e),
                              y ? o(t) : p
                          }(m);
                      if (b)
                          return g = setTimeout(l, e),
                          o(m)
                  }
                  return void 0 === g && (g = setTimeout(l, e)),
                  p
              }
              var u, h, f, p, g, m, v = 0, y = !1, b = !1, C = !0;
              if ("function" != typeof t)
                  throw new TypeError(a);
              return e = r(e) || 0,
              n(i) && (y = !!i.leading,
              f = (b = "maxWait"in i) ? w(r(i.maxWait) || 0, e) : f,
              C = "trailing"in i ? !!i.trailing : C),
              d.cancel = function() {
                  void 0 !== g && clearTimeout(g),
                  v = 0,
                  u = m = h = g = void 0
              }
              ,
              d.flush = function() {
                  return void 0 === g ? p : c(A())
              }
              ,
              d
          }
          function n(t) {
              var e = void 0 === t ? "undefined" : s(t);
              return !!t && ("object" == e || "function" == e)
          }
          function o(t) {
              return "symbol" == (void 0 === t ? "undefined" : s(t)) || function(t) {
                  return !!t && "object" == (void 0 === t ? "undefined" : s(t))
              }(t) && b.call(t) == c
          }
          function r(t) {
              if ("number" == typeof t)
                  return t;
              if (o(t))
                  return l;
              if (n(t)) {
                  var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                  t = n(e) ? e + "" : e
              }
              if ("string" != typeof t)
                  return 0 === t ? t : +t;
              t = t.replace(d, "");
              var i = h.test(t);
              return i || f.test(t) ? p(t.slice(2), i ? 2 : 8) : u.test(t) ? l : +t
          }
          var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
          }
          : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }
            , a = "Expected a function"
            , l = NaN
            , c = "[object Symbol]"
            , d = /^\s+|\s+$/g
            , u = /^[-+]0x[0-9a-f]+$/i
            , h = /^0b[01]+$/i
            , f = /^0o[0-7]+$/i
            , p = parseInt
            , g = "object" == (void 0 === e ? "undefined" : s(e)) && e && e.Object === Object && e
            , m = "object" == ("undefined" == typeof self ? "undefined" : s(self)) && self && self.Object === Object && self
            , v = g || m || Function("return this")()
            , y = Object.prototype
            , b = y.toString
            , w = Math.max
            , x = Math.min
            , A = function() {
              return v.Date.now()
          };
          t.exports = function(t, e, o) {
              var r = !0
                , s = !0;
              if ("function" != typeof t)
                  throw new TypeError(a);
              return n(o) && (r = "leading"in o ? !!o.leading : r,
              s = "trailing"in o ? !!o.trailing : s),
              i(t, e, {
                  leading: r,
                  maxWait: e,
                  trailing: s
              })
          }
      }
      ).call(e, function() {
          return this
      }())
  }
  , function(t, e) {
      (function(e) {
          "use strict";
          function i(t) {
              var e = void 0 === t ? "undefined" : r(t);
              return !!t && ("object" == e || "function" == e)
          }
          function n(t) {
              return "symbol" == (void 0 === t ? "undefined" : r(t)) || function(t) {
                  return !!t && "object" == (void 0 === t ? "undefined" : r(t))
              }(t) && y.call(t) == l
          }
          function o(t) {
              if ("number" == typeof t)
                  return t;
              if (n(t))
                  return a;
              if (i(t)) {
                  var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                  t = i(e) ? e + "" : e
              }
              if ("string" != typeof t)
                  return 0 === t ? t : +t;
              t = t.replace(c, "");
              var o = u.test(t);
              return o || h.test(t) ? f(t.slice(2), o ? 2 : 8) : d.test(t) ? a : +t
          }
          var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
          }
          : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }
            , s = "Expected a function"
            , a = NaN
            , l = "[object Symbol]"
            , c = /^\s+|\s+$/g
            , d = /^[-+]0x[0-9a-f]+$/i
            , u = /^0b[01]+$/i
            , h = /^0o[0-7]+$/i
            , f = parseInt
            , p = "object" == (void 0 === e ? "undefined" : r(e)) && e && e.Object === Object && e
            , g = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self
            , m = p || g || Function("return this")()
            , v = Object.prototype
            , y = v.toString
            , b = Math.max
            , w = Math.min
            , x = function() {
              return m.Date.now()
          };
          t.exports = function(t, e, n) {
              function r(e) {
                  var i = u
                    , n = h;
                  return u = h = void 0,
                  v = e,
                  p = t.apply(n, i)
              }
              function a(t) {
                  var i = t - m
                    , n = t - v;
                  return void 0 === m || i >= e || i < 0 || A && n >= f
              }
              function l() {
                  var t = x();
                  return a(t) ? c(t) : void (g = setTimeout(l, function(t) {
                      var i = t - v
                        , n = e - (t - m);
                      return A ? w(n, f - i) : n
                  }(t)))
              }
              function c(t) {
                  return g = void 0,
                  C && u ? r(t) : (u = h = void 0,
                  p)
              }
              function d() {
                  var t = x()
                    , i = a(t);
                  if (u = arguments,
                  h = this,
                  m = t,
                  i) {
                      if (void 0 === g)
                          return function(t) {
                              return v = t,
                              g = setTimeout(l, e),
                              y ? r(t) : p
                          }(m);
                      if (A)
                          return g = setTimeout(l, e),
                          r(m)
                  }
                  return void 0 === g && (g = setTimeout(l, e)),
                  p
              }
              var u, h, f, p, g, m, v = 0, y = !1, A = !1, C = !0;
              if ("function" != typeof t)
                  throw new TypeError(s);
              return e = o(e) || 0,
              i(n) && (y = !!n.leading,
              f = (A = "maxWait"in n) ? b(o(n.maxWait) || 0, e) : f,
              C = "trailing"in n ? !!n.trailing : C),
              d.cancel = function() {
                  void 0 !== g && clearTimeout(g),
                  v = 0,
                  u = m = h = g = void 0
              }
              ,
              d.flush = function() {
                  return void 0 === g ? p : c(x())
              }
              ,
              d
          }
      }
      ).call(e, function() {
          return this
      }())
  }
  , function(t, e) {
      "use strict";
      function i(t) {
          t && t.forEach(function(t) {
              var e = Array.prototype.slice.call(t.addedNodes)
                , i = Array.prototype.slice.call(t.removedNodes)
                , n = e.concat(i).filter(function(t) {
                  return t.hasAttribute && t.hasAttribute("data-aos")
              }).length;
              n && r()
          })
      }
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var n = window.document
        , o = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
        , r = function() {};
      e.default = function(t, e) {
          var s = new o(i);
          r = e,
          s.observe(n.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0
          })
      }
  }
  , function(t, e) {
      "use strict";
      function i() {
          return navigator.userAgent || navigator.vendor || window.opera || ""
      }
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var n = function() {
          function t(t, e) {
              for (var i = 0; i < e.length; i++) {
                  var n = e[i];
                  n.enumerable = n.enumerable || !1,
                  n.configurable = !0,
                  "value"in n && (n.writable = !0),
                  Object.defineProperty(t, n.key, n)
              }
          }
          return function(e, i, n) {
              return i && t(e.prototype, i),
              n && t(e, n),
              e
          }
      }()
        , o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
        , r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
        , s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
        , a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
        , l = function() {
          function t() {
              !function(t, e) {
                  if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function")
              }(this, t)
          }
          return n(t, [{
              key: "phone",
              value: function() {
                  var t = i();
                  return !(!o.test(t) && !r.test(t.substr(0, 4)))
              }
          }, {
              key: "mobile",
              value: function() {
                  var t = i();
                  return !(!s.test(t) && !a.test(t.substr(0, 4)))
              }
          }, {
              key: "tablet",
              value: function() {
                  return this.mobile() && !this.phone()
              }
          }]),
          t
      }();
      e.default = new l
  }
  , function(t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      e.default = function(t, e) {
          var i = window.pageYOffset
            , n = window.innerHeight;
          t.forEach(function(t, o) {
              !function(t, e, i) {
                  var n = t.node.getAttribute("data-aos-once");
                  e > t.position ? t.node.classList.add("aos-animate") : void 0 !== n && ("false" === n || !i && "true" !== n) && t.node.classList.remove("aos-animate")
              }(t, n + i, e)
          })
      }
  }
  , function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var n = i(12)
        , o = function(t) {
          return t && t.__esModule ? t : {
              default: t
          }
      }(n);
      e.default = function(t, e) {
          return t.forEach(function(t, i) {
              t.node.classList.add("aos-init"),
              t.position = (0,
              o.default)(t.node, e.offset)
          }),
          t
      }
  }
  , function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var n = i(13)
        , o = function(t) {
          return t && t.__esModule ? t : {
              default: t
          }
      }(n);
      e.default = function(t, e) {
          var i = 0
            , n = 0
            , r = window.innerHeight
            , s = {
              offset: t.getAttribute("data-aos-offset"),
              anchor: t.getAttribute("data-aos-anchor"),
              anchorPlacement: t.getAttribute("data-aos-anchor-placement")
          };
          switch (s.offset && !isNaN(s.offset) && (n = parseInt(s.offset)),
          s.anchor && document.querySelectorAll(s.anchor) && (t = document.querySelectorAll(s.anchor)[0]),
          i = (0,
          o.default)(t).top,
          s.anchorPlacement) {
          case "top-bottom":
              break;
          case "center-bottom":
              i += t.offsetHeight / 2;
              break;
          case "bottom-bottom":
              i += t.offsetHeight;
              break;
          case "top-center":
              i += r / 2;
              break;
          case "bottom-center":
              i += r / 2 + t.offsetHeight;
              break;
          case "center-center":
              i += r / 2 + t.offsetHeight / 2;
              break;
          case "top-top":
              i += r;
              break;
          case "bottom-top":
              i += t.offsetHeight + r;
              break;
          case "center-top":
              i += t.offsetHeight / 2 + r
          }
          return s.anchorPlacement || s.offset || isNaN(e) || (n = e),
          i + n
      }
  }
  , function(t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      e.default = function(t) {
          for (var e = 0, i = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop); )
              e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0),
              i += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0),
              t = t.offsetParent;
          return {
              top: i,
              left: e
          }
      }
  }
  , function(t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      e.default = function(t) {
          return t = t || document.querySelectorAll("[data-aos]"),
          Array.prototype.map.call(t, function(t) {
              return {
                  node: t
              }
          })
      }
  }
  ])
}
, function(t, e, i) {
  (function(t) {
      /*!
* Bootstrap v4.2.1 (https://getbootstrap.com/)
* Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
      !function(e, i) {
          "use strict";
          function n(t, e) {
              for (var i = 0; i < e.length; i++) {
                  var n = e[i];
                  n.enumerable = n.enumerable || !1,
                  n.configurable = !0,
                  "value"in n && (n.writable = !0),
                  Object.defineProperty(t, n.key, n)
              }
          }
          function o(t, e, i) {
              return e && n(t.prototype, e),
              i && n(t, i),
              t
          }
          function r(t) {
              for (var e = 1; e < arguments.length; e++) {
                  var i = null != arguments[e] ? arguments[e] : {}
                    , n = Object.keys(i);
                  "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                      return Object.getOwnPropertyDescriptor(i, t).enumerable
                  }))),
                  n.forEach(function(e) {
                      var n, o, r;
                      n = t,
                      r = i[o = e],
                      o in n ? Object.defineProperty(n, o, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      }) : n[o] = r
                  })
              }
              return t
          }
          i = i && i.hasOwnProperty("default") ? i.default : i;
          var s = "transitionend"
            , a = {
              TRANSITION_END: "bsTransitionEnd",
              getUID: function(t) {
                  for (; t += ~~(1e6 * Math.random()),
                  document.getElementById(t); )
                      ;
                  return t
              },
              getSelectorFromElement: function(t) {
                  var e = t.getAttribute("data-target");
                  if (!e || "#" === e) {
                      var i = t.getAttribute("href");
                      e = i && "#" !== i ? i.trim() : ""
                  }
                  return e && document.querySelector(e) ? e : null
              },
              getTransitionDurationFromElement: function(t) {
                  if (!t)
                      return 0;
                  var e = i(t).css("transition-duration")
                    , n = i(t).css("transition-delay")
                    , o = parseFloat(e)
                    , r = parseFloat(n);
                  return o || r ? (e = e.split(",")[0],
                  n = n.split(",")[0],
                  1e3 * (parseFloat(e) + parseFloat(n))) : 0
              },
              reflow: function(t) {
                  return t.offsetHeight
              },
              triggerTransitionEnd: function(t) {
                  i(t).trigger(s)
              },
              supportsTransitionEnd: function() {
                  return Boolean(s)
              },
              isElement: function(t) {
                  return (t[0] || t).nodeType
              },
              typeCheckConfig: function(t, e, i) {
                  for (var n in i)
                      if (Object.prototype.hasOwnProperty.call(i, n)) {
                          var o = i[n]
                            , r = e[n]
                            , s = r && a.isElement(r) ? "element" : (l = r,
                          {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                          if (!new RegExp(o).test(s))
                              throw new Error(t.toUpperCase() + ': Option "' + n + '" provided type "' + s + '" but expected type "' + o + '".')
                      }
                  var l
              },
              findShadowRoot: function(t) {
                  if (!document.documentElement.attachShadow)
                      return null;
                  if ("function" != typeof t.getRootNode)
                      return t instanceof ShadowRoot ? t : t.parentNode ? a.findShadowRoot(t.parentNode) : null;
                  var e = t.getRootNode();
                  return e instanceof ShadowRoot ? e : null
              }
          };
          i.fn.emulateTransitionEnd = function(t) {
              var e = this
                , n = !1;
              return i(this).one(a.TRANSITION_END, function() {
                  n = !0
              }),
              setTimeout(function() {
                  n || a.triggerTransitionEnd(e)
              }, t),
              this
          }
          ,
          i.event.special[a.TRANSITION_END] = {
              bindType: s,
              delegateType: s,
              handle: function(t) {
                  if (i(t.target).is(this))
                      return t.handleObj.handler.apply(this, arguments)
              }
          };
          var l = "alert"
            , c = "bs.alert"
            , d = "." + c
            , u = i.fn[l]
            , h = {
              CLOSE: "close" + d,
              CLOSED: "closed" + d,
              CLICK_DATA_API: "click" + d + ".data-api"
          }
            , f = function() {
              function t(t) {
                  this._element = t
              }
              var e = t.prototype;
              return e.close = function(t) {
                  var e = this._element;
                  t && (e = this._getRootElement(t)),
                  this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
              }
              ,
              e.dispose = function() {
                  i.removeData(this._element, c),
                  this._element = null
              }
              ,
              e._getRootElement = function(t) {
                  var e = a.getSelectorFromElement(t)
                    , n = !1;
                  return e && (n = document.querySelector(e)),
                  n || (n = i(t).closest(".alert")[0]),
                  n
              }
              ,
              e._triggerCloseEvent = function(t) {
                  var e = i.Event(h.CLOSE);
                  return i(t).trigger(e),
                  e
              }
              ,
              e._removeElement = function(t) {
                  var e = this;
                  if (i(t).removeClass("show"),
                  i(t).hasClass("fade")) {
                      var n = a.getTransitionDurationFromElement(t);
                      i(t).one(a.TRANSITION_END, function(i) {
                          return e._destroyElement(t, i)
                      }).emulateTransitionEnd(n)
                  } else
                      this._destroyElement(t)
              }
              ,
              e._destroyElement = function(t) {
                  i(t).detach().trigger(h.CLOSED).remove()
              }
              ,
              t._jQueryInterface = function(e) {
                  return this.each(function() {
                      var n = i(this)
                        , o = n.data(c);
                      o || (o = new t(this),
                      n.data(c, o)),
                      "close" === e && o[e](this)
                  })
              }
              ,
              t._handleDismiss = function(t) {
                  return function(e) {
                      e && e.preventDefault(),
                      t.close(this)
                  }
              }
              ,
              o(t, null, [{
                  key: "VERSION",
                  get: function() {
                      return "4.2.1"
                  }
              }]),
              t
          }();
          i(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', f._handleDismiss(new f)),
          i.fn[l] = f._jQueryInterface,
          i.fn[l].Constructor = f,
          i.fn[l].noConflict = function() {
              return i.fn[l] = u,
              f._jQueryInterface
          }
          ;
          var p = "button"
            , g = "bs.button"
            , m = "." + g
            , v = ".data-api"
            , y = i.fn[p]
            , b = "active"
            , w = '[data-toggle^="button"]'
            , x = ".btn"
            , A = {
              CLICK_DATA_API: "click" + m + v,
              FOCUS_BLUR_DATA_API: "focus" + m + v + " blur" + m + v
          }
            , C = function() {
              function t(t) {
                  this._element = t
              }
              var e = t.prototype;
              return e.toggle = function() {
                  var t = !0
                    , e = !0
                    , n = i(this._element).closest('[data-toggle="buttons"]')[0];
                  if (n) {
                      var o = this._element.querySelector('input:not([type="hidden"])');
                      if (o) {
                          if ("radio" === o.type)
                              if (o.checked && this._element.classList.contains(b))
                                  t = !1;
                              else {
                                  var r = n.querySelector(".active");
                                  r && i(r).removeClass(b)
                              }
                          if (t) {
                              if (o.hasAttribute("disabled") || n.hasAttribute("disabled") || o.classList.contains("disabled") || n.classList.contains("disabled"))
                                  return;
                              o.checked = !this._element.classList.contains(b),
                              i(o).trigger("change")
                          }
                          o.focus(),
                          e = !1
                      }
                  }
                  e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(b)),
                  t && i(this._element).toggleClass(b)
              }
              ,
              e.dispose = function() {
                  i.removeData(this._element, g),
                  this._element = null
              }
              ,
              t._jQueryInterface = function(e) {
                  return this.each(function() {
                      var n = i(this).data(g);
                      n || (n = new t(this),
                      i(this).data(g, n)),
                      "toggle" === e && n[e]()
                  })
              }
              ,
              o(t, null, [{
                  key: "VERSION",
                  get: function() {
                      return "4.2.1"
                  }
              }]),
              t
          }();
          i(document).on(A.CLICK_DATA_API, w, function(t) {
              t.preventDefault();
              var e = t.target;
              i(e).hasClass("btn") || (e = i(e).closest(x)),
              C._jQueryInterface.call(i(e), "toggle")
          }).on(A.FOCUS_BLUR_DATA_API, w, function(t) {
              var e = i(t.target).closest(x)[0];
              i(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
          }),
          i.fn[p] = C._jQueryInterface,
          i.fn[p].Constructor = C,
          i.fn[p].noConflict = function() {
              return i.fn[p] = y,
              C._jQueryInterface
          }
          ;
          var S = "carousel"
            , T = "bs.carousel"
            , _ = "." + T
            , E = ".data-api"
            , k = i.fn[S]
            , I = {
              interval: 5e3,
              keyboard: !0,
              slide: !1,
              pause: "hover",
              wrap: !0,
              touch: !0
          }
            , F = {
              interval: "(number|boolean)",
              keyboard: "boolean",
              slide: "(boolean|string)",
              pause: "(string|boolean)",
              wrap: "boolean",
              touch: "boolean"
          }
            , D = "next"
            , $ = "prev"
            , L = {
              SLIDE: "slide" + _,
              SLID: "slid" + _,
              KEYDOWN: "keydown" + _,
              MOUSEENTER: "mouseenter" + _,
              MOUSELEAVE: "mouseleave" + _,
              TOUCHSTART: "touchstart" + _,
              TOUCHMOVE: "touchmove" + _,
              TOUCHEND: "touchend" + _,
              POINTERDOWN: "pointerdown" + _,
              POINTERUP: "pointerup" + _,
              DRAG_START: "dragstart" + _,
              LOAD_DATA_API: "load" + _ + E,
              CLICK_DATA_API: "click" + _ + E
          }
            , O = "active"
            , N = ".active.carousel-item"
            , M = ".carousel-indicators"
            , B = {
              TOUCH: "touch",
              PEN: "pen"
          }
            , P = function() {
              function t(t, e) {
                  this._items = null,
                  this._interval = null,
                  this._activeElement = null,
                  this._isPaused = !1,
                  this._isSliding = !1,
                  this.touchTimeout = null,
                  this.touchStartX = 0,
                  this.touchDeltaX = 0,
                  this._config = this._getConfig(e),
                  this._element = t,
                  this._indicatorsElement = this._element.querySelector(M),
                  this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints,
                  this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
                  this._addEventListeners()
              }
              var e = t.prototype;
              return e.next = function() {
                  this._isSliding || this._slide(D)
              }
              ,
              e.nextWhenVisible = function() {
                  !document.hidden && i(this._element).is(":visible") && "hidden" !== i(this._element).css("visibility") && this.next()
              }
              ,
              e.prev = function() {
                  this._isSliding || this._slide($)
              }
              ,
              e.pause = function(t) {
                  t || (this._isPaused = !0),
                  this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (a.triggerTransitionEnd(this._element),
                  this.cycle(!0)),
                  clearInterval(this._interval),
                  this._interval = null
              }
              ,
              e.cycle = function(t) {
                  t || (this._isPaused = !1),
                  this._interval && (clearInterval(this._interval),
                  this._interval = null),
                  this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
              }
              ,
              e.to = function(t) {
                  var e = this;
                  this._activeElement = this._element.querySelector(N);
                  var n = this._getItemIndex(this._activeElement);
                  if (!(t > this._items.length - 1 || t < 0))
                      if (this._isSliding)
                          i(this._element).one(L.SLID, function() {
                              return e.to(t)
                          });
                      else {
                          if (n === t)
                              return this.pause(),
                              void this.cycle();
                          var o = n < t ? D : $;
                          this._slide(o, this._items[t])
                      }
              }
              ,
              e.dispose = function() {
                  i(this._element).off(_),
                  i.removeData(this._element, T),
                  this._items = null,
                  this._config = null,
                  this._element = null,
                  this._interval = null,
                  this._isPaused = null,
                  this._isSliding = null,
                  this._activeElement = null,
                  this._indicatorsElement = null
              }
              ,
              e._getConfig = function(t) {
                  return t = r({}, I, t),
                  a.typeCheckConfig(S, t, F),
                  t
              }
              ,
              e._handleSwipe = function() {
                  var t = Math.abs(this.touchDeltaX);
                  if (!(t <= 40)) {
                      var e = t / this.touchDeltaX;
                      0 < e && this.prev(),
                      e < 0 && this.next()
                  }
              }
              ,
              e._addEventListeners = function() {
                  var t = this;
                  this._config.keyboard && i(this._element).on(L.KEYDOWN, function(e) {
                      return t._keydown(e)
                  }),
                  "hover" === this._config.pause && i(this._element).on(L.MOUSEENTER, function(e) {
                      return t.pause(e)
                  }).on(L.MOUSELEAVE, function(e) {
                      return t.cycle(e)
                  }),
                  this._addTouchEventListeners()
              }
              ,
              e._addTouchEventListeners = function() {
                  var t = this;
                  if (this._touchSupported) {
                      var e = function(e) {
                          t._pointerEvent && B[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                      }
                        , n = function(e) {
                          t._pointerEvent && B[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                          t._handleSwipe(),
                          "hover" === t._config.pause && (t.pause(),
                          t.touchTimeout && clearTimeout(t.touchTimeout),
                          t.touchTimeout = setTimeout(function(e) {
                              return t.cycle(e)
                          }, 500 + t._config.interval))
                      };
                      i(this._element.querySelectorAll(".carousel-item img")).on(L.DRAG_START, function(t) {
                          return t.preventDefault()
                      }),
                      this._pointerEvent ? (i(this._element).on(L.POINTERDOWN, function(t) {
                          return e(t)
                      }),
                      i(this._element).on(L.POINTERUP, function(t) {
                          return n(t)
                      }),
                      this._element.classList.add("pointer-event")) : (i(this._element).on(L.TOUCHSTART, function(t) {
                          return e(t)
                      }),
                      i(this._element).on(L.TOUCHMOVE, function(e) {
                          var i;
                          (i = e).originalEvent.touches && 1 < i.originalEvent.touches.length ? t.touchDeltaX = 0 : t.touchDeltaX = i.originalEvent.touches[0].clientX - t.touchStartX
                      }),
                      i(this._element).on(L.TOUCHEND, function(t) {
                          return n(t)
                      }))
                  }
              }
              ,
              e._keydown = function(t) {
                  if (!/input|textarea/i.test(t.target.tagName))
                      switch (t.which) {
                      case 37:
                          t.preventDefault(),
                          this.prev();
                          break;
                      case 39:
                          t.preventDefault(),
                          this.next()
                      }
              }
              ,
              e._getItemIndex = function(t) {
                  return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [],
                  this._items.indexOf(t)
              }
              ,
              e._getItemByDirection = function(t, e) {
                  var i = t === D
                    , n = t === $
                    , o = this._getItemIndex(e)
                    , r = this._items.length - 1;
                  if ((n && 0 === o || i && o === r) && !this._config.wrap)
                      return e;
                  var s = (o + (t === $ ? -1 : 1)) % this._items.length;
                  return -1 === s ? this._items[this._items.length - 1] : this._items[s]
              }
              ,
              e._triggerSlideEvent = function(t, e) {
                  var n = this._getItemIndex(t)
                    , o = this._getItemIndex(this._element.querySelector(N))
                    , r = i.Event(L.SLIDE, {
                      relatedTarget: t,
                      direction: e,
                      from: o,
                      to: n
                  });
                  return i(this._element).trigger(r),
                  r
              }
              ,
              e._setActiveIndicatorElement = function(t) {
                  if (this._indicatorsElement) {
                      var e = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                      i(e).removeClass(O);
                      var n = this._indicatorsElement.children[this._getItemIndex(t)];
                      n && i(n).addClass(O)
                  }
              }
              ,
              e._slide = function(t, e) {
                  var n, o, r, s = this, l = this._element.querySelector(N), c = this._getItemIndex(l), d = e || l && this._getItemByDirection(t, l), u = this._getItemIndex(d), h = Boolean(this._interval);
                  if (r = t === D ? (n = "carousel-item-left",
                  o = "carousel-item-next",
                  "left") : (n = "carousel-item-right",
                  o = "carousel-item-prev",
                  "right"),
                  d && i(d).hasClass(O))
                      this._isSliding = !1;
                  else if (!this._triggerSlideEvent(d, r).isDefaultPrevented() && l && d) {
                      this._isSliding = !0,
                      h && this.pause(),
                      this._setActiveIndicatorElement(d);
                      var f = i.Event(L.SLID, {
                          relatedTarget: d,
                          direction: r,
                          from: c,
                          to: u
                      });
                      if (i(this._element).hasClass("slide")) {
                          i(d).addClass(o),
                          a.reflow(d),
                          i(l).addClass(n),
                          i(d).addClass(n);
                          var p = parseInt(d.getAttribute("data-interval"), 10);
                          this._config.interval = p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                          p) : this._config.defaultInterval || this._config.interval;
                          var g = a.getTransitionDurationFromElement(l);
                          i(l).one(a.TRANSITION_END, function() {
                              i(d).removeClass(n + " " + o).addClass(O),
                              i(l).removeClass(O + " " + o + " " + n),
                              s._isSliding = !1,
                              setTimeout(function() {
                                  return i(s._element).trigger(f)
                              }, 0)
                          }).emulateTransitionEnd(g)
                      } else
                          i(l).removeClass(O),
                          i(d).addClass(O),
                          this._isSliding = !1,
                          i(this._element).trigger(f);
                      h && this.cycle()
                  }
              }
              ,
              t._jQueryInterface = function(e) {
                  return this.each(function() {
                      var n = i(this).data(T)
                        , o = r({}, I, i(this).data());
                      "object" == typeof e && (o = r({}, o, e));
                      var s = "string" == typeof e ? e : o.slide;
                      if (n || (n = new t(this,o),
                      i(this).data(T, n)),
                      "number" == typeof e)
                          n.to(e);
                      else if ("string" == typeof s) {
                          if (void 0 === n[s])
                              throw new TypeError('No method named "' + s + '"');
                          n[s]()
                      } else
                          o.interval && (n.pause(),
                          n.cycle())
                  })
              }
              ,
              t._dataApiClickHandler = function(e) {
                  var n = a.getSelectorFromElement(this);
                  if (n) {
                      var o = i(n)[0];
                      if (o && i(o).hasClass("carousel")) {
                          var s = r({}, i(o).data(), i(this).data())
                            , l = this.getAttribute("data-slide-to");
                          l && (s.interval = !1),
                          t._jQueryInterface.call(i(o), s),
                          l && i(o).data(T).to(l),
                          e.preventDefault()
                      }
                  }
              }
              ,
              o(t, null, [{
                  key: "VERSION",
                  get: function() {
                      return "4.2.1"
                  }
              }, {
                  key: "Default",
                  get: function() {
                      return I
                  }
              }]),
              t
          }();
          i(document).on(L.CLICK_DATA_API, "[data-slide], [data-slide-to]", P._dataApiClickHandler),
          i(window).on(L.LOAD_DATA_API, function() {
              for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, n = t.length; e < n; e++) {
                  var o = i(t[e]);
                  P._jQueryInterface.call(o, o.data())
              }
          }),
          i.fn[S] = P._jQueryInterface,
          i.fn[S].Constructor = P,
          i.fn[S].noConflict = function() {
              return i.fn[S] = k,
              P._jQueryInterface
          }
          ;
          var H = "collapse"
            , j = "bs.collapse"
            , V = "." + j
            , R = i.fn[H]
            , z = {
              toggle: !0,
              parent: ""
          }
            , U = {
              toggle: "boolean",
              parent: "(string|element)"
          }
            , Q = {
              SHOW: "show" + V,
              SHOWN: "shown" + V,
              HIDE: "hide" + V,
              HIDDEN: "hidden" + V,
              CLICK_DATA_API: "click" + V + ".data-api"
          }
            , q = "show"
            , G = "collapse"
            , K = "collapsing"
            , W = "collapsed"
            , Y = '[data-toggle="collapse"]'
            , X = function() {
              function t(t, e) {
                  this._isTransitioning = !1,
                  this._element = t,
                  this._config = this._getConfig(e),
                  this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                  for (var i = [].slice.call(document.querySelectorAll(Y)), n = 0, o = i.length; n < o; n++) {
                      var r = i[n]
                        , s = a.getSelectorFromElement(r)
                        , l = [].slice.call(document.querySelectorAll(s)).filter(function(e) {
                          return e === t
                      });
                      null !== s && 0 < l.length && (this._selector = s,
                      this._triggerArray.push(r))
                  }
                  this._parent = this._config.parent ? this._getParent() : null,
                  this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                  this._config.toggle && this.toggle()
              }
              var e = t.prototype;
              return e.toggle = function() {
                  i(this._element).hasClass(q) ? this.hide() : this.show()
              }
              ,
              e.show = function() {
                  var e, n, o = this;
                  if (!(this._isTransitioning || i(this._element).hasClass(q) || (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(t) {
                      return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains(G)
                  })).length && (e = null),
                  e && (n = i(e).not(this._selector).data(j)) && n._isTransitioning))) {
                      var r = i.Event(Q.SHOW);
                      if (i(this._element).trigger(r),
                      !r.isDefaultPrevented()) {
                          e && (t._jQueryInterface.call(i(e).not(this._selector), "hide"),
                          n || i(e).data(j, null));
                          var s = this._getDimension();
                          i(this._element).removeClass(G).addClass(K),
                          this._element.style[s] = 0,
                          this._triggerArray.length && i(this._triggerArray).removeClass(W).attr("aria-expanded", !0),
                          this.setTransitioning(!0);
                          var l = "scroll" + (s[0].toUpperCase() + s.slice(1))
                            , c = a.getTransitionDurationFromElement(this._element);
                          i(this._element).one(a.TRANSITION_END, function() {
                              i(o._element).removeClass(K).addClass(G).addClass(q),
                              o._element.style[s] = "",
                              o.setTransitioning(!1),
                              i(o._element).trigger(Q.SHOWN)
                          }).emulateTransitionEnd(c),
                          this._element.style[s] = this._element[l] + "px"
                      }
                  }
              }
              ,
              e.hide = function() {
                  var t = this;
                  if (!this._isTransitioning && i(this._element).hasClass(q)) {
                      var e = i.Event(Q.HIDE);
                      if (i(this._element).trigger(e),
                      !e.isDefaultPrevented()) {
                          var n = this._getDimension();
                          this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                          a.reflow(this._element),
                          i(this._element).addClass(K).removeClass(G).removeClass(q);
                          var o = this._triggerArray.length;
                          if (0 < o)
                              for (var r = 0; r < o; r++) {
                                  var s = this._triggerArray[r]
                                    , l = a.getSelectorFromElement(s);
                                  null !== l && (i([].slice.call(document.querySelectorAll(l))).hasClass(q) || i(s).addClass(W).attr("aria-expanded", !1))
                              }
                          this.setTransitioning(!0),
                          this._element.style[n] = "";
                          var c = a.getTransitionDurationFromElement(this._element);
                          i(this._element).one(a.TRANSITION_END, function() {
                              t.setTransitioning(!1),
                              i(t._element).removeClass(K).addClass(G).trigger(Q.HIDDEN)
                          }).emulateTransitionEnd(c)
                      }
                  }
              }
              ,
              e.setTransitioning = function(t) {
                  this._isTransitioning = t
              }
              ,
              e.dispose = function() {
                  i.removeData(this._element, j),
                  this._config = null,
                  this._parent = null,
                  this._element = null,
                  this._triggerArray = null,
                  this._isTransitioning = null
              }
              ,
              e._getConfig = function(t) {
                  return (t = r({}, z, t)).toggle = Boolean(t.toggle),
                  a.typeCheckConfig(H, t, U),
                  t
              }
              ,
              e._getDimension = function() {
                  return i(this._element).hasClass("width") ? "width" : "height"
              }
              ,
              e._getParent = function() {
                  var e, n = this;
                  a.isElement(this._config.parent) ? (e = this._config.parent,
                  void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
                  var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
                    , r = [].slice.call(e.querySelectorAll(o));
                  return i(r).each(function(e, i) {
                      n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i])
                  }),
                  e
              }
              ,
              e._addAriaAndCollapsedClass = function(t, e) {
                  var n = i(t).hasClass(q);
                  e.length && i(e).toggleClass(W, !n).attr("aria-expanded", n)
              }
              ,
              t._getTargetFromElement = function(t) {
                  var e = a.getSelectorFromElement(t);
                  return e ? document.querySelector(e) : null
              }
              ,
              t._jQueryInterface = function(e) {
                  return this.each(function() {
                      var n = i(this)
                        , o = n.data(j)
                        , s = r({}, z, n.data(), "object" == typeof e && e ? e : {});
                      if (!o && s.toggle && /show|hide/.test(e) && (s.toggle = !1),
                      o || (o = new t(this,s),
                      n.data(j, o)),
                      "string" == typeof e) {
                          if (void 0 === o[e])
                              throw new TypeError('No method named "' + e + '"');
                          o[e]()
                      }
                  })
              }
              ,
              o(t, null, [{
                  key: "VERSION",
                  get: function() {
                      return "4.2.1"
                  }
              }, {
                  key: "Default",
                  get: function() {
                      return z
                  }
              }]),
              t
          }();
          i(document).on(Q.CLICK_DATA_API, Y, function(t) {
              "A" === t.currentTarget.tagName && t.preventDefault();
              var e = i(this)
                , n = a.getSelectorFromElement(this)
                , o = [].slice.call(document.querySelectorAll(n));
              i(o).each(function() {
                  var t = i(this)
                    , n = t.data(j) ? "toggle" : e.data();
                  X._jQueryInterface.call(t, n)
              })
          }),
          i.fn[H] = X._jQueryInterface,
          i.fn[H].Constructor = X,
          i.fn[H].noConflict = function() {
              return i.fn[H] = R,
              X._jQueryInterface
          }
          ;
          for (var Z = "undefined" != typeof window && "undefined" != typeof document, J = ["Edge", "Trident", "Firefox"], tt = 0, et = 0; et < J.length; et += 1)
              if (Z && 0 <= navigator.userAgent.indexOf(J[et])) {
                  tt = 1;
                  break
              }
          var it = Z && window.Promise ? function(t) {
              var e = !1;
              return function() {
                  e || (e = !0,
                  window.Promise.resolve().then(function() {
                      e = !1,
                      t()
                  }))
              }
          }
          : function(t) {
              var e = !1;
              return function() {
                  e || (e = !0,
                  setTimeout(function() {
                      e = !1,
                      t()
                  }, tt))
              }
          }
          ;
          function nt(t) {
              return t && "[object Function]" === {}.toString.call(t)
          }
          function ot(t, e) {
              if (1 !== t.nodeType)
                  return [];
              var i = t.ownerDocument.defaultView.getComputedStyle(t, null);
              return e ? i[e] : i
          }
          function rt(t) {
              return "HTML" === t.nodeName ? t : t.parentNode || t.host
          }
          function st(t) {
              if (!t)
                  return document.body;
              switch (t.nodeName) {
              case "HTML":
              case "BODY":
                  return t.ownerDocument.body;
              case "#document":
                  return t.body
              }
              var e = ot(t)
                , i = e.overflow
                , n = e.overflowX
                , o = e.overflowY;
              return /(auto|scroll|overlay)/.test(i + o + n) ? t : st(rt(t))
          }
          var at = Z && !(!window.MSInputMethodContext || !document.documentMode)
            , lt = Z && /MSIE 10/.test(navigator.userAgent);
          function ct(t) {
              return 11 === t ? at : 10 === t ? lt : at || lt
          }
          function dt(t) {
              if (!t)
                  return document.documentElement;
              for (var e = ct(10) ? document.body : null, i = t.offsetParent || null; i === e && t.nextElementSibling; )
                  i = (t = t.nextElementSibling).offsetParent;
              var n = i && i.nodeName;
              return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) && "static" === ot(i, "position") ? dt(i) : i : t ? t.ownerDocument.documentElement : document.documentElement
          }
          function ut(t) {
              return null !== t.parentNode ? ut(t.parentNode) : t
          }
          function ht(t, e) {
              if (!(t && t.nodeType && e && e.nodeType))
                  return document.documentElement;
              var i = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING
                , n = i ? t : e
                , o = i ? e : t
                , r = document.createRange();
              r.setStart(n, 0),
              r.setEnd(o, 0);
              var s, a, l = r.commonAncestorContainer;
              if (t !== l && e !== l || n.contains(o))
                  return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && dt(s.firstElementChild) !== s ? dt(l) : l;
              var c = ut(t);
              return c.host ? ht(c.host, e) : ht(t, ut(e).host)
          }
          function ft(t) {
              var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft"
                , i = t.nodeName;
              if ("BODY" !== i && "HTML" !== i)
                  return t[e];
              var n = t.ownerDocument.documentElement;
              return (t.ownerDocument.scrollingElement || n)[e]
          }
          function pt(t, e) {
              var i = "x" === e ? "Left" : "Top"
                , n = "Left" === i ? "Right" : "Bottom";
              return parseFloat(t["border" + i + "Width"], 10) + parseFloat(t["border" + n + "Width"], 10)
          }
          function gt(t, e, i, n) {
              return Math.max(e["offset" + t], e["scroll" + t], i["client" + t], i["offset" + t], i["scroll" + t], ct(10) ? parseInt(i["offset" + t]) + parseInt(n["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(n["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
          }
          function mt(t) {
              var e = t.body
                , i = t.documentElement
                , n = ct(10) && getComputedStyle(i);
              return {
                  height: gt("Height", e, i, n),
                  width: gt("Width", e, i, n)
              }
          }
          var vt = function() {
              function t(t, e) {
                  for (var i = 0; i < e.length; i++) {
                      var n = e[i];
                      n.enumerable = n.enumerable || !1,
                      n.configurable = !0,
                      "value"in n && (n.writable = !0),
                      Object.defineProperty(t, n.key, n)
                  }
              }
              return function(e, i, n) {
                  return i && t(e.prototype, i),
                  n && t(e, n),
                  e
              }
          }()
            , yt = function(t, e, i) {
              return e in t ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : t[e] = i,
              t
          }
            , bt = Object.assign || function(t) {
              for (var e = 1; e < arguments.length; e++) {
                  var i = arguments[e];
                  for (var n in i)
                      Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
              }
              return t
          }
          ;
          function wt(t) {
              return bt({}, t, {
                  right: t.left + t.width,
                  bottom: t.top + t.height
              })
          }
          function xt(t) {
              var e = {};
              try {
                  if (ct(10)) {
                      e = t.getBoundingClientRect();
                      var i = ft(t, "top")
                        , n = ft(t, "left");
                      e.top += i,
                      e.left += n,
                      e.bottom += i,
                      e.right += n
                  } else
                      e = t.getBoundingClientRect()
              } catch (t) {}
              var o = {
                  left: e.left,
                  top: e.top,
                  width: e.right - e.left,
                  height: e.bottom - e.top
              }
                , r = "HTML" === t.nodeName ? mt(t.ownerDocument) : {}
                , s = r.width || t.clientWidth || o.right - o.left
                , a = r.height || t.clientHeight || o.bottom - o.top
                , l = t.offsetWidth - s
                , c = t.offsetHeight - a;
              if (l || c) {
                  var d = ot(t);
                  l -= pt(d, "x"),
                  c -= pt(d, "y"),
                  o.width -= l,
                  o.height -= c
              }
              return wt(o)
          }
          function At(t, e) {
              var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
                , n = ct(10)
                , o = "HTML" === e.nodeName
                , r = xt(t)
                , s = xt(e)
                , a = st(t)
                , l = ot(e)
                , c = parseFloat(l.borderTopWidth, 10)
                , d = parseFloat(l.borderLeftWidth, 10);
              i && o && (s.top = Math.max(s.top, 0),
              s.left = Math.max(s.left, 0));
              var u = wt({
                  top: r.top - s.top - c,
                  left: r.left - s.left - d,
                  width: r.width,
                  height: r.height
              });
              if (u.marginTop = 0,
              u.marginLeft = 0,
              !n && o) {
                  var h = parseFloat(l.marginTop, 10)
                    , f = parseFloat(l.marginLeft, 10);
                  u.top -= c - h,
                  u.bottom -= c - h,
                  u.left -= d - f,
                  u.right -= d - f,
                  u.marginTop = h,
                  u.marginLeft = f
              }
              return (n && !i ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (u = function(t, e) {
                  var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
                    , n = ft(e, "top")
                    , o = ft(e, "left")
                    , r = i ? -1 : 1;
                  return t.top += n * r,
                  t.bottom += n * r,
                  t.left += o * r,
                  t.right += o * r,
                  t
              }(u, e)),
              u
          }
          function Ct(t) {
              if (!t || !t.parentElement || ct())
                  return document.documentElement;
              for (var e = t.parentElement; e && "none" === ot(e, "transform"); )
                  e = e.parentElement;
              return e || document.documentElement
          }
          function St(t, e, i, n) {
              var o = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]
                , r = {
                  top: 0,
                  left: 0
              }
                , s = o ? Ct(t) : ht(t, e);
              if ("viewport" === n)
                  r = function(t) {
                      var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                        , i = t.ownerDocument.documentElement
                        , n = At(t, i)
                        , o = Math.max(i.clientWidth, window.innerWidth || 0)
                        , r = Math.max(i.clientHeight, window.innerHeight || 0)
                        , s = e ? 0 : ft(i)
                        , a = e ? 0 : ft(i, "left");
                      return wt({
                          top: s - n.top + n.marginTop,
                          left: a - n.left + n.marginLeft,
                          width: o,
                          height: r
                      })
                  }(s, o);
              else {
                  var a = void 0;
                  "scrollParent" === n ? "BODY" === (a = st(rt(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === n ? t.ownerDocument.documentElement : n;
                  var l = At(a, s, o);
                  if ("HTML" !== a.nodeName || function t(e) {
                      var i = e.nodeName;
                      return "BODY" !== i && "HTML" !== i && ("fixed" === ot(e, "position") || t(rt(e)))
                  }(s))
                      r = l;
                  else {
                      var c = mt(t.ownerDocument)
                        , d = c.height
                        , u = c.width;
                      r.top += l.top - l.marginTop,
                      r.bottom = d + l.top,
                      r.left += l.left - l.marginLeft,
                      r.right = u + l.left
                  }
              }
              var h = "number" == typeof (i = i || 0);
              return r.left += h ? i : i.left || 0,
              r.top += h ? i : i.top || 0,
              r.right -= h ? i : i.right || 0,
              r.bottom -= h ? i : i.bottom || 0,
              r
          }
          function Tt(t, e, i, n, o) {
              var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
              if (-1 === t.indexOf("auto"))
                  return t;
              var s = St(i, n, r, o)
                , a = {
                  top: {
                      width: s.width,
                      height: e.top - s.top
                  },
                  right: {
                      width: s.right - e.right,
                      height: s.height
                  },
                  bottom: {
                      width: s.width,
                      height: s.bottom - e.bottom
                  },
                  left: {
                      width: e.left - s.left,
                      height: s.height
                  }
              }
                , l = Object.keys(a).map(function(t) {
                  return bt({
                      key: t
                  }, a[t], {
                      area: (e = a[t],
                      e.width * e.height)
                  });
                  var e
              }).sort(function(t, e) {
                  return e.area - t.area
              })
                , c = l.filter(function(t) {
                  var e = t.width
                    , n = t.height;
                  return e >= i.clientWidth && n >= i.clientHeight
              })
                , d = 0 < c.length ? c[0].key : l[0].key
                , u = t.split("-")[1];
              return d + (u ? "-" + u : "")
          }
          function _t(t, e, i) {
              var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
              return At(i, n ? Ct(e) : ht(e, i), n)
          }
          function Et(t) {
              var e = t.ownerDocument.defaultView.getComputedStyle(t)
                , i = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0)
                , n = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
              return {
                  width: t.offsetWidth + n,
                  height: t.offsetHeight + i
              }
          }
          function kt(t) {
              var e = {
                  left: "right",
                  right: "left",
                  bottom: "top",
                  top: "bottom"
              };
              return t.replace(/left|right|bottom|top/g, function(t) {
                  return e[t]
              })
          }
          function It(t, e, i) {
              i = i.split("-")[0];
              var n = Et(t)
                , o = {
                  width: n.width,
                  height: n.height
              }
                , r = -1 !== ["right", "left"].indexOf(i)
                , s = r ? "top" : "left"
                , a = r ? "left" : "top"
                , l = r ? "height" : "width"
                , c = r ? "width" : "height";
              return o[s] = e[s] + e[l] / 2 - n[l] / 2,
              o[a] = i === a ? e[a] - n[c] : e[kt(a)],
              o
          }
          function Ft(t, e) {
              return Array.prototype.find ? t.find(e) : t.filter(e)[0]
          }
          function Dt(t, e, i) {
              return (void 0 === i ? t : t.slice(0, function(t, e, i) {
                  if (Array.prototype.findIndex)
                      return t.findIndex(function(t) {
                          return t[e] === i
                      });
                  var n = Ft(t, function(t) {
                      return t[e] === i
                  });
                  return t.indexOf(n)
              }(t, "name", i))).forEach(function(t) {
                  t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                  var i = t.function || t.fn;
                  t.enabled && nt(i) && (e.offsets.popper = wt(e.offsets.popper),
                  e.offsets.reference = wt(e.offsets.reference),
                  e = i(e, t))
              }),
              e
          }
          function $t(t, e) {
              return t.some(function(t) {
                  var i = t.name;
                  return t.enabled && i === e
              })
          }
          function Lt(t) {
              for (var e = [!1, "ms", "Webkit", "Moz", "O"], i = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < e.length; n++) {
                  var o = e[n]
                    , r = o ? "" + o + i : t;
                  if (void 0 !== document.body.style[r])
                      return r
              }
              return null
          }
          function Ot(t) {
              var e = t.ownerDocument;
              return e ? e.defaultView : window
          }
          function Nt(t) {
              return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
          }
          function Mt(t, e) {
              Object.keys(e).forEach(function(i) {
                  var n = "";
                  -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && Nt(e[i]) && (n = "px"),
                  t.style[i] = e[i] + n
              })
          }
          var Bt = Z && /Firefox/i.test(navigator.userAgent);
          function Pt(t, e, i) {
              var n = Ft(t, function(t) {
                  return t.name === e
              })
                , o = !!n && t.some(function(t) {
                  return t.name === i && t.enabled && t.order < n.order
              });
              if (!o) {
                  var r = "`" + e + "`"
                    , s = "`" + i + "`";
                  console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
              }
              return o
          }
          var Ht = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
            , jt = Ht.slice(3);
          function Vt(t) {
              var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                , i = jt.indexOf(t)
                , n = jt.slice(i + 1).concat(jt.slice(0, i));
              return e ? n.reverse() : n
          }
          var Rt = {
              placement: "bottom",
              positionFixed: !1,
              eventsEnabled: !0,
              removeOnDestroy: !1,
              onCreate: function() {},
              onUpdate: function() {},
              modifiers: {
                  shift: {
                      order: 100,
                      enabled: !0,
                      fn: function(t) {
                          var e = t.placement
                            , i = e.split("-")[0]
                            , n = e.split("-")[1];
                          if (n) {
                              var o = t.offsets
                                , r = o.reference
                                , s = o.popper
                                , a = -1 !== ["bottom", "top"].indexOf(i)
                                , l = a ? "left" : "top"
                                , c = a ? "width" : "height"
                                , d = {
                                  start: yt({}, l, r[l]),
                                  end: yt({}, l, r[l] + r[c] - s[c])
                              };
                              t.offsets.popper = bt({}, s, d[n])
                          }
                          return t
                      }
                  },
                  offset: {
                      order: 200,
                      enabled: !0,
                      fn: function(t, e) {
                          var i = e.offset
                            , n = t.placement
                            , o = t.offsets
                            , r = o.popper
                            , s = o.reference
                            , a = n.split("-")[0]
                            , l = void 0;
                          return l = Nt(+i) ? [+i, 0] : function(t, e, i, n) {
                              var o = [0, 0]
                                , r = -1 !== ["right", "left"].indexOf(n)
                                , s = t.split(/(\+|\-)/).map(function(t) {
                                  return t.trim()
                              })
                                , a = s.indexOf(Ft(s, function(t) {
                                  return -1 !== t.search(/,|\s/)
                              }));
                              s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                              var l = /\s*,\s*|\s+/
                                , c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                              return (c = c.map(function(t, n) {
                                  var o = (1 === n ? !r : r) ? "height" : "width"
                                    , s = !1;
                                  return t.reduce(function(t, e) {
                                      return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e,
                                      s = !0,
                                      t) : s ? (t[t.length - 1] += e,
                                      s = !1,
                                      t) : t.concat(e)
                                  }, []).map(function(t) {
                                      return function(t, e, i, n) {
                                          var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                                            , r = +o[1]
                                            , s = o[2];
                                          if (!r)
                                              return t;
                                          if (0 !== s.indexOf("%"))
                                              return "vh" !== s && "vw" !== s ? r : ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
                                          var a = void 0;
                                          switch (s) {
                                          case "%p":
                                              a = i;
                                              break;
                                          case "%":
                                          case "%r":
                                          default:
                                              a = n
                                          }
                                          return wt(a)[e] / 100 * r
                                      }(t, o, e, i)
                                  })
                              })).forEach(function(t, e) {
                                  t.forEach(function(i, n) {
                                      Nt(i) && (o[e] += i * ("-" === t[n - 1] ? -1 : 1))
                                  })
                              }),
                              o
                          }(i, r, s, a),
                          "left" === a ? (r.top += l[0],
                          r.left -= l[1]) : "right" === a ? (r.top += l[0],
                          r.left += l[1]) : "top" === a ? (r.left += l[0],
                          r.top -= l[1]) : "bottom" === a && (r.left += l[0],
                          r.top += l[1]),
                          t.popper = r,
                          t
                      },
                      offset: 0
                  },
                  preventOverflow: {
                      order: 300,
                      enabled: !0,
                      fn: function(t, e) {
                          var i = e.boundariesElement || dt(t.instance.popper);
                          t.instance.reference === i && (i = dt(i));
                          var n = Lt("transform")
                            , o = t.instance.popper.style
                            , r = o.top
                            , s = o.left
                            , a = o[n];
                          o.top = "",
                          o.left = "",
                          o[n] = "";
                          var l = St(t.instance.popper, t.instance.reference, e.padding, i, t.positionFixed);
                          o.top = r,
                          o.left = s,
                          o[n] = a,
                          e.boundaries = l;
                          var c = e.priority
                            , d = t.offsets.popper
                            , u = {
                              primary: function(t) {
                                  var i = d[t];
                                  return d[t] < l[t] && !e.escapeWithReference && (i = Math.max(d[t], l[t])),
                                  yt({}, t, i)
                              },
                              secondary: function(t) {
                                  var i = "right" === t ? "left" : "top"
                                    , n = d[i];
                                  return d[t] > l[t] && !e.escapeWithReference && (n = Math.min(d[i], l[t] - ("right" === t ? d.width : d.height))),
                                  yt({}, i, n)
                              }
                          };
                          return c.forEach(function(t) {
                              var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                              d = bt({}, d, u[e](t))
                          }),
                          t.offsets.popper = d,
                          t
                      },
                      priority: ["left", "right", "top", "bottom"],
                      padding: 5,
                      boundariesElement: "scrollParent"
                  },
                  keepTogether: {
                      order: 400,
                      enabled: !0,
                      fn: function(t) {
                          var e = t.offsets
                            , i = e.popper
                            , n = e.reference
                            , o = t.placement.split("-")[0]
                            , r = Math.floor
                            , s = -1 !== ["top", "bottom"].indexOf(o)
                            , a = s ? "right" : "bottom"
                            , l = s ? "left" : "top"
                            , c = s ? "width" : "height";
                          return i[a] < r(n[l]) && (t.offsets.popper[l] = r(n[l]) - i[c]),
                          i[l] > r(n[a]) && (t.offsets.popper[l] = r(n[a])),
                          t
                      }
                  },
                  arrow: {
                      order: 500,
                      enabled: !0,
                      fn: function(t, e) {
                          var i;
                          if (!Pt(t.instance.modifiers, "arrow", "keepTogether"))
                              return t;
                          var n = e.element;
                          if ("string" == typeof n) {
                              if (!(n = t.instance.popper.querySelector(n)))
                                  return t
                          } else if (!t.instance.popper.contains(n))
                              return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                              t;
                          var o = t.placement.split("-")[0]
                            , r = t.offsets
                            , s = r.popper
                            , a = r.reference
                            , l = -1 !== ["left", "right"].indexOf(o)
                            , c = l ? "height" : "width"
                            , d = l ? "Top" : "Left"
                            , u = d.toLowerCase()
                            , h = l ? "left" : "top"
                            , f = l ? "bottom" : "right"
                            , p = Et(n)[c];
                          a[f] - p < s[u] && (t.offsets.popper[u] -= s[u] - (a[f] - p)),
                          a[u] + p > s[f] && (t.offsets.popper[u] += a[u] + p - s[f]),
                          t.offsets.popper = wt(t.offsets.popper);
                          var g = a[u] + a[c] / 2 - p / 2
                            , m = ot(t.instance.popper)
                            , v = parseFloat(m["margin" + d], 10)
                            , y = parseFloat(m["border" + d + "Width"], 10)
                            , b = g - t.offsets.popper[u] - v - y;
                          return b = Math.max(Math.min(s[c] - p, b), 0),
                          t.arrowElement = n,
                          t.offsets.arrow = (yt(i = {}, u, Math.round(b)),
                          yt(i, h, ""),
                          i),
                          t
                      },
                      element: "[x-arrow]"
                  },
                  flip: {
                      order: 600,
                      enabled: !0,
                      fn: function(t, e) {
                          if ($t(t.instance.modifiers, "inner"))
                              return t;
                          if (t.flipped && t.placement === t.originalPlacement)
                              return t;
                          var i = St(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed)
                            , n = t.placement.split("-")[0]
                            , o = kt(n)
                            , r = t.placement.split("-")[1] || ""
                            , s = [];
                          switch (e.behavior) {
                          case "flip":
                              s = [n, o];
                              break;
                          case "clockwise":
                              s = Vt(n);
                              break;
                          case "counterclockwise":
                              s = Vt(n, !0);
                              break;
                          default:
                              s = e.behavior
                          }
                          return s.forEach(function(a, l) {
                              if (n !== a || s.length === l + 1)
                                  return t;
                              n = t.placement.split("-")[0],
                              o = kt(n);
                              var c, d = t.offsets.popper, u = t.offsets.reference, h = Math.floor, f = "left" === n && h(d.right) > h(u.left) || "right" === n && h(d.left) < h(u.right) || "top" === n && h(d.bottom) > h(u.top) || "bottom" === n && h(d.top) < h(u.bottom), p = h(d.left) < h(i.left), g = h(d.right) > h(i.right), m = h(d.top) < h(i.top), v = h(d.bottom) > h(i.bottom), y = "left" === n && p || "right" === n && g || "top" === n && m || "bottom" === n && v, b = -1 !== ["top", "bottom"].indexOf(n), w = !!e.flipVariations && (b && "start" === r && p || b && "end" === r && g || !b && "start" === r && m || !b && "end" === r && v);
                              (f || y || w) && (t.flipped = !0,
                              (f || y) && (n = s[l + 1]),
                              w && (r = "end" === (c = r) ? "start" : "start" === c ? "end" : c),
                              t.placement = n + (r ? "-" + r : ""),
                              t.offsets.popper = bt({}, t.offsets.popper, It(t.instance.popper, t.offsets.reference, t.placement)),
                              t = Dt(t.instance.modifiers, t, "flip"))
                          }),
                          t
                      },
                      behavior: "flip",
                      padding: 5,
                      boundariesElement: "viewport"
                  },
                  inner: {
                      order: 700,
                      enabled: !1,
                      fn: function(t) {
                          var e = t.placement
                            , i = e.split("-")[0]
                            , n = t.offsets
                            , o = n.popper
                            , r = n.reference
                            , s = -1 !== ["left", "right"].indexOf(i)
                            , a = -1 === ["top", "left"].indexOf(i);
                          return o[s ? "left" : "top"] = r[i] - (a ? o[s ? "width" : "height"] : 0),
                          t.placement = kt(e),
                          t.offsets.popper = wt(o),
                          t
                      }
                  },
                  hide: {
                      order: 800,
                      enabled: !0,
                      fn: function(t) {
                          if (!Pt(t.instance.modifiers, "hide", "preventOverflow"))
                              return t;
                          var e = t.offsets.reference
                            , i = Ft(t.instance.modifiers, function(t) {
                              return "preventOverflow" === t.name
                          }).boundaries;
                          if (e.bottom < i.top || e.left > i.right || e.top > i.bottom || e.right < i.left) {
                              if (!0 === t.hide)
                                  return t;
                              t.hide = !0,
                              t.attributes["x-out-of-boundaries"] = ""
                          } else {
                              if (!1 === t.hide)
                                  return t;
                              t.hide = !1,
                              t.attributes["x-out-of-boundaries"] = !1
                          }
                          return t
                      }
                  },
                  computeStyle: {
                      order: 850,
                      enabled: !0,
                      fn: function(t, e) {
                          var i = e.x
                            , n = e.y
                            , o = t.offsets.popper
                            , r = Ft(t.instance.modifiers, function(t) {
                              return "applyStyle" === t.name
                          }).gpuAcceleration;
                          void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                          var s, a, l, c, d, u, h, f, p, g, m, v, y = void 0 !== r ? r : e.gpuAcceleration, b = dt(t.instance.popper), w = xt(b), x = {
                              position: o.position
                          }, A = (s = t,
                          a = window.devicePixelRatio < 2 || !Bt,
                          l = s.offsets,
                          c = l.popper,
                          d = l.reference,
                          u = -1 !== ["left", "right"].indexOf(s.placement),
                          h = -1 !== s.placement.indexOf("-"),
                          f = d.width % 2 == c.width % 2,
                          p = d.width % 2 == 1 && c.width % 2 == 1,
                          g = function(t) {
                              return t
                          }
                          ,
                          m = a ? u || h || f ? Math.round : Math.floor : g,
                          v = a ? Math.round : g,
                          {
                              left: m(p && !h && a ? c.left - 1 : c.left),
                              top: v(c.top),
                              bottom: v(c.bottom),
                              right: m(c.right)
                          }), C = "bottom" === i ? "top" : "bottom", S = "right" === n ? "left" : "right", T = Lt("transform"), _ = void 0, E = void 0;
                          if (E = "bottom" === C ? "HTML" === b.nodeName ? -b.clientHeight + A.bottom : -w.height + A.bottom : A.top,
                          _ = "right" === S ? "HTML" === b.nodeName ? -b.clientWidth + A.right : -w.width + A.right : A.left,
                          y && T)
                              x[T] = "translate3d(" + _ + "px, " + E + "px, 0)",
                              x[C] = 0,
                              x[S] = 0,
                              x.willChange = "transform";
                          else {
                              var k = "bottom" === C ? -1 : 1
                                , I = "right" === S ? -1 : 1;
                              x[C] = E * k,
                              x[S] = _ * I,
                              x.willChange = C + ", " + S
                          }
                          var F = {
                              "x-placement": t.placement
                          };
                          return t.attributes = bt({}, F, t.attributes),
                          t.styles = bt({}, x, t.styles),
                          t.arrowStyles = bt({}, t.offsets.arrow, t.arrowStyles),
                          t
                      },
                      gpuAcceleration: !0,
                      x: "bottom",
                      y: "right"
                  },
                  applyStyle: {
                      order: 900,
                      enabled: !0,
                      fn: function(t) {
                          var e, i;
                          return Mt(t.instance.popper, t.styles),
                          e = t.instance.popper,
                          i = t.attributes,
                          Object.keys(i).forEach(function(t) {
                              !1 !== i[t] ? e.setAttribute(t, i[t]) : e.removeAttribute(t)
                          }),
                          t.arrowElement && Object.keys(t.arrowStyles).length && Mt(t.arrowElement, t.arrowStyles),
                          t
                      },
                      onLoad: function(t, e, i, n, o) {
                          var r = _t(o, e, t, i.positionFixed)
                            , s = Tt(i.placement, r, e, t, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                          return e.setAttribute("x-placement", s),
                          Mt(e, {
                              position: i.positionFixed ? "fixed" : "absolute"
                          }),
                          i
                      },
                      gpuAcceleration: void 0
                  }
              }
          }
            , zt = function() {
              function t(e, i) {
                  var n = this
                    , o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                  !function(t, e) {
                      if (!(t instanceof e))
                          throw new TypeError("Cannot call a class as a function")
                  }(this, t),
                  this.scheduleUpdate = function() {
                      return requestAnimationFrame(n.update)
                  }
                  ,
                  this.update = it(this.update.bind(this)),
                  this.options = bt({}, t.Defaults, o),
                  this.state = {
                      isDestroyed: !1,
                      isCreated: !1,
                      scrollParents: []
                  },
                  this.reference = e && e.jquery ? e[0] : e,
                  this.popper = i && i.jquery ? i[0] : i,
                  this.options.modifiers = {},
                  Object.keys(bt({}, t.Defaults.modifiers, o.modifiers)).forEach(function(e) {
                      n.options.modifiers[e] = bt({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
                  }),
                  this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                      return bt({
                          name: t
                      }, n.options.modifiers[t])
                  }).sort(function(t, e) {
                      return t.order - e.order
                  }),
                  this.modifiers.forEach(function(t) {
                      t.enabled && nt(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
                  }),
                  this.update();
                  var r = this.options.eventsEnabled;
                  r && this.enableEventListeners(),
                  this.state.eventsEnabled = r
              }
              return vt(t, [{
                  key: "update",
                  value: function() {
                      return function() {
                          if (!this.state.isDestroyed) {
                              var t = {
                                  instance: this,
                                  styles: {},
                                  arrowStyles: {},
                                  attributes: {},
                                  flipped: !1,
                                  offsets: {}
                              };
                              t.offsets.reference = _t(this.state, this.popper, this.reference, this.options.positionFixed),
                              t.placement = Tt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                              t.originalPlacement = t.placement,
                              t.positionFixed = this.options.positionFixed,
                              t.offsets.popper = It(this.popper, t.offsets.reference, t.placement),
                              t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                              t = Dt(this.modifiers, t),
                              this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0,
                              this.options.onCreate(t))
                          }
                      }
                      .call(this)
                  }
              }, {
                  key: "destroy",
                  value: function() {
                      return function() {
                          return this.state.isDestroyed = !0,
                          $t(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                          this.popper.style.position = "",
                          this.popper.style.top = "",
                          this.popper.style.left = "",
                          this.popper.style.right = "",
                          this.popper.style.bottom = "",
                          this.popper.style.willChange = "",
                          this.popper.style[Lt("transform")] = ""),
                          this.disableEventListeners(),
                          this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                          this
                      }
                      .call(this)
                  }
              }, {
                  key: "enableEventListeners",
                  value: function() {
                      return function() {
                          this.state.eventsEnabled || (this.state = function(t, e, i, n) {
                              i.updateBound = n,
                              Ot(t).addEventListener("resize", i.updateBound, {
                                  passive: !0
                              });
                              var o = st(t);
                              return function t(e, i, n, o) {
                                  var r = "BODY" === e.nodeName
                                    , s = r ? e.ownerDocument.defaultView : e;
                                  s.addEventListener(i, n, {
                                      passive: !0
                                  }),
                                  r || t(st(s.parentNode), i, n, o),
                                  o.push(s)
                              }(o, "scroll", i.updateBound, i.scrollParents),
                              i.scrollElement = o,
                              i.eventsEnabled = !0,
                              i
                          }(this.reference, this.options, this.state, this.scheduleUpdate))
                      }
                      .call(this)
                  }
              }, {
                  key: "disableEventListeners",
                  value: function() {
                      return function() {
                          var t, e;
                          this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
                          this.state = (t = this.reference,
                          e = this.state,
                          Ot(t).removeEventListener("resize", e.updateBound),
                          e.scrollParents.forEach(function(t) {
                              t.removeEventListener("scroll", e.updateBound)
                          }),
                          e.updateBound = null,
                          e.scrollParents = [],
                          e.scrollElement = null,
                          e.eventsEnabled = !1,
                          e))
                      }
                      .call(this)
                  }
              }]),
              t
          }();
          zt.Utils = ("undefined" != typeof window ? window : t).PopperUtils,
          zt.placements = Ht,
          zt.Defaults = Rt;
          var Ut = "dropdown"
            , Qt = "bs.dropdown"
            , qt = "." + Qt
            , Gt = ".data-api"
            , Kt = i.fn[Ut]
            , Wt = new RegExp("38|40|27")
            , Yt = {
              HIDE: "hide" + qt,
              HIDDEN: "hidden" + qt,
              SHOW: "show" + qt,
              SHOWN: "shown" + qt,
              CLICK: "click" + qt,
              CLICK_DATA_API: "click" + qt + Gt,
              KEYDOWN_DATA_API: "keydown" + qt + Gt,
              KEYUP_DATA_API: "keyup" + qt + Gt
          }
            , Xt = "disabled"
            , Zt = "show"
            , Jt = "dropdown-menu-right"
            , te = '[data-toggle="dropdown"]'
            , ee = ".dropdown-menu"
            , ie = {
              offset: 0,
              flip: !0,
              boundary: "scrollParent",
              reference: "toggle",
              display: "dynamic"
          }
            , ne = {
              offset: "(number|string|function)",
              flip: "boolean",
              boundary: "(string|element)",
              reference: "(string|element)",
              display: "string"
          }
            , oe = function() {
              function t(t, e) {
                  this._element = t,
                  this._popper = null,
                  this._config = this._getConfig(e),
                  this._menu = this._getMenuElement(),
                  this._inNavbar = this._detectNavbar(),
                  this._addEventListeners()
              }
              var e = t.prototype;
              return e.toggle = function() {
                  if (!this._element.disabled && !i(this._element).hasClass(Xt)) {
                      var e = t._getParentFromElement(this._element)
                        , n = i(this._menu).hasClass(Zt);
                      if (t._clearMenus(),
                      !n) {
                          var o = {
                              relatedTarget: this._element
                          }
                            , r = i.Event(Yt.SHOW, o);
                          if (i(e).trigger(r),
                          !r.isDefaultPrevented()) {
                              if (!this._inNavbar) {
                                  if (void 0 === zt)
                                      throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                  var s = this._element;
                                  "parent" === this._config.reference ? s = e : a.isElement(this._config.reference) && (s = this._config.reference,
                                  void 0 !== this._config.reference.jquery && (s = this._config.reference[0])),
                                  "scrollParent" !== this._config.boundary && i(e).addClass("position-static"),
                                  this._popper = new zt(s,this._menu,this._getPopperConfig())
                              }
                              "ontouchstart"in document.documentElement && 0 === i(e).closest(".navbar-nav").length && i(document.body).children().on("mouseover", null, i.noop),
                              this._element.focus(),
                              this._element.setAttribute("aria-expanded", !0),
                              i(this._menu).toggleClass(Zt),
                              i(e).toggleClass(Zt).trigger(i.Event(Yt.SHOWN, o))
                          }
                      }
                  }
              }
              ,
              e.show = function() {
                  if (!(this._element.disabled || i(this._element).hasClass(Xt) || i(this._menu).hasClass(Zt))) {
                      var e = {
                          relatedTarget: this._element
                      }
                        , n = i.Event(Yt.SHOW, e)
                        , o = t._getParentFromElement(this._element);
                      i(o).trigger(n),
                      n.isDefaultPrevented() || (i(this._menu).toggleClass(Zt),
                      i(o).toggleClass(Zt).trigger(i.Event(Yt.SHOWN, e)))
                  }
              }
              ,
              e.hide = function() {
                  if (!this._element.disabled && !i(this._element).hasClass(Xt) && i(this._menu).hasClass(Zt)) {
                      var e = {
                          relatedTarget: this._element
                      }
                        , n = i.Event(Yt.HIDE, e)
                        , o = t._getParentFromElement(this._element);
                      i(o).trigger(n),
                      n.isDefaultPrevented() || (i(this._menu).toggleClass(Zt),
                      i(o).toggleClass(Zt).trigger(i.Event(Yt.HIDDEN, e)))
                  }
              }
              ,
              e.dispose = function() {
                  i.removeData(this._element, Qt),
                  i(this._element).off(qt),
                  this._element = null,
                  (this._menu = null) !== this._popper && (this._popper.destroy(),
                  this._popper = null)
              }
              ,
              e.update = function() {
                  this._inNavbar = this._detectNavbar(),
                  null !== this._popper && this._popper.scheduleUpdate()
              }
              ,
              e._addEventListeners = function() {
                  var t = this;
                  i(this._element).on(Yt.CLICK, function(e) {
                      e.preventDefault(),
                      e.stopPropagation(),
                      t.toggle()
                  })
              }
              ,
              e._getConfig = function(t) {
                  return t = r({}, this.constructor.Default, i(this._element).data(), t),
                  a.typeCheckConfig(Ut, t, this.constructor.DefaultType),
                  t
              }
              ,
              e._getMenuElement = function() {
                  if (!this._menu) {
                      var e = t._getParentFromElement(this._element);
                      e && (this._menu = e.querySelector(ee))
                  }
                  return this._menu
              }
              ,
              e._getPlacement = function() {
                  var t = i(this._element.parentNode)
                    , e = "bottom-start";
                  return t.hasClass("dropup") ? (e = "top-start",
                  i(this._menu).hasClass(Jt) && (e = "top-end")) : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : i(this._menu).hasClass(Jt) && (e = "bottom-end"),
                  e
              }
              ,
              e._detectNavbar = function() {
                  return 0 < i(this._element).closest(".navbar").length
              }
              ,
              e._getPopperConfig = function() {
                  var t = this
                    , e = {};
                  "function" == typeof this._config.offset ? e.fn = function(e) {
                      return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}),
                      e
                  }
                  : e.offset = this._config.offset;
                  var i = {
                      placement: this._getPlacement(),
                      modifiers: {
                          offset: e,
                          flip: {
                              enabled: this._config.flip
                          },
                          preventOverflow: {
                              boundariesElement: this._config.boundary
                          }
                      }
                  };
                  return "static" === this._config.display && (i.modifiers.applyStyle = {
                      enabled: !1
                  }),
                  i
              }
              ,
              t._jQueryInterface = function(e) {
                  return this.each(function() {
                      var n = i(this).data(Qt);
                      if (n || (n = new t(this,"object" == typeof e ? e : null),
                      i(this).data(Qt, n)),
                      "string" == typeof e) {
                          if (void 0 === n[e])
                              throw new TypeError('No method named "' + e + '"');
                          n[e]()
                      }
                  })
              }
              ,
              t._clearMenus = function(e) {
                  if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                      for (var n = [].slice.call(document.querySelectorAll(te)), o = 0, r = n.length; o < r; o++) {
                          var s = t._getParentFromElement(n[o])
                            , a = i(n[o]).data(Qt)
                            , l = {
                              relatedTarget: n[o]
                          };
                          if (e && "click" === e.type && (l.clickEvent = e),
                          a) {
                              var c = a._menu;
                              if (i(s).hasClass(Zt) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && i.contains(s, e.target))) {
                                  var d = i.Event(Yt.HIDE, l);
                                  i(s).trigger(d),
                                  d.isDefaultPrevented() || ("ontouchstart"in document.documentElement && i(document.body).children().off("mouseover", null, i.noop),
                                  n[o].setAttribute("aria-expanded", "false"),
                                  i(c).removeClass(Zt),
                                  i(s).removeClass(Zt).trigger(i.Event(Yt.HIDDEN, l)))
                              }
                          }
                      }
              }
              ,
              t._getParentFromElement = function(t) {
                  var e, i = a.getSelectorFromElement(t);
                  return i && (e = document.querySelector(i)),
                  e || t.parentNode
              }
              ,
              t._dataApiKeydownHandler = function(e) {
                  if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || i(e.target).closest(ee).length)) : Wt.test(e.which)) && (e.preventDefault(),
                  e.stopPropagation(),
                  !this.disabled && !i(this).hasClass(Xt))) {
                      var n = t._getParentFromElement(this)
                        , o = i(n).hasClass(Zt);
                      if (o && (!o || 27 !== e.which && 32 !== e.which)) {
                          var r = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));
                          if (0 !== r.length) {
                              var s = r.indexOf(e.target);
                              38 === e.which && 0 < s && s--,
                              40 === e.which && s < r.length - 1 && s++,
                              s < 0 && (s = 0),
                              r[s].focus()
                          }
                      } else {
                          if (27 === e.which) {
                              var a = n.querySelector(te);
                              i(a).trigger("focus")
                          }
                          i(this).trigger("click")
                      }
                  }
              }
              ,
              o(t, null, [{
                  key: "VERSION",
                  get: function() {
                      return "4.2.1"
                  }
              }, {
                  key: "Default",
                  get: function() {
                      return ie
                  }
              }, {
                  key: "DefaultType",
                  get: function() {
                      return ne
                  }
              }]),
              t
          }();
          i(document).on(Yt.KEYDOWN_DATA_API, te, oe._dataApiKeydownHandler).on(Yt.KEYDOWN_DATA_API, ee, oe._dataApiKeydownHandler).on(Yt.CLICK_DATA_API + " " + Yt.KEYUP_DATA_API, oe._clearMenus).on(Yt.CLICK_DATA_API, te, function(t) {
              t.preventDefault(),
              t.stopPropagation(),
              oe._jQueryInterface.call(i(this), "toggle")
          }).on(Yt.CLICK_DATA_API, ".dropdown form", function(t) {
              t.stopPropagation()
          }),
          i.fn[Ut] = oe._jQueryInterface,
          i.fn[Ut].Constructor = oe,
          i.fn[Ut].noConflict = function() {
              return i.fn[Ut] = Kt,
              oe._jQueryInterface
          }
          ;
          var re = "modal"
            , se = "bs.modal"
            , ae = "." + se
            , le = i.fn[re]
            , ce = {
              backdrop: !0,
              keyboard: !0,
              focus: !0,
              show: !0
          }
            , de = {
              backdrop: "(boolean|string)",
              keyboard: "boolean",
              focus: "boolean",
              show: "boolean"
          }
            , ue = {
              HIDE: "hide" + ae,
              HIDDEN: "hidden" + ae,
              SHOW: "show" + ae,
              SHOWN: "shown" + ae,
              FOCUSIN: "focusin" + ae,
              RESIZE: "resize" + ae,
              CLICK_DISMISS: "click.dismiss" + ae,
              KEYDOWN_DISMISS: "keydown.dismiss" + ae,
              MOUSEUP_DISMISS: "mouseup.dismiss" + ae,
              MOUSEDOWN_DISMISS: "mousedown.dismiss" + ae,
              CLICK_DATA_API: "click" + ae + ".data-api"
          }
            , he = "modal-open"
            , fe = "fade"
            , pe = "show"
            , ge = ".modal-dialog"
            , me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
            , ve = ".sticky-top"
            , ye = function() {
              function t(t, e) {
                  this._config = this._getConfig(e),
                  this._element = t,
                  this._dialog = t.querySelector(ge),
                  this._backdrop = null,
                  this._isShown = !1,
                  this._isBodyOverflowing = !1,
                  this._ignoreBackdropClick = !1,
                  this._isTransitioning = !1,
                  this._scrollbarWidth = 0
              }
              var e = t.prototype;
              return e.toggle = function(t) {
                  return this._isShown ? this.hide() : this.show(t)
              }
              ,
              e.show = function(t) {
                  var e = this;
                  if (!this._isShown && !this._isTransitioning) {
                      i(this._element).hasClass(fe) && (this._isTransitioning = !0);
                      var n = i.Event(ue.SHOW, {
                          relatedTarget: t
                      });
                      i(this._element).trigger(n),
                      this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                      this._checkScrollbar(),
                      this._setScrollbar(),
                      this._adjustDialog(),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      i(this._element).on(ue.CLICK_DISMISS, '[data-dismiss="modal"]', function(t) {
                          return e.hide(t)
                      }),
                      i(this._dialog).on(ue.MOUSEDOWN_DISMISS, function() {
                          i(e._element).one(ue.MOUSEUP_DISMISS, function(t) {
                              i(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                          })
                      }),
                      this._showBackdrop(function() {
                          return e._showElement(t)
                      }))
                  }
              }
              ,
              e.hide = function(t) {
                  var e = this;
                  if (t && t.preventDefault(),
                  this._isShown && !this._isTransitioning) {
                      var n = i.Event(ue.HIDE);
                      if (i(this._element).trigger(n),
                      this._isShown && !n.isDefaultPrevented()) {
                          this._isShown = !1;
                          var o = i(this._element).hasClass(fe);
                          if (o && (this._isTransitioning = !0),
                          this._setEscapeEvent(),
                          this._setResizeEvent(),
                          i(document).off(ue.FOCUSIN),
                          i(this._element).removeClass(pe),
                          i(this._element).off(ue.CLICK_DISMISS),
                          i(this._dialog).off(ue.MOUSEDOWN_DISMISS),
                          o) {
                              var r = a.getTransitionDurationFromElement(this._element);
                              i(this._element).one(a.TRANSITION_END, function(t) {
                                  return e._hideModal(t)
                              }).emulateTransitionEnd(r)
                          } else
                              this._hideModal()
                      }
                  }
              }
              ,
              e.dispose = function() {
                  [window, this._element, this._dialog].forEach(function(t) {
                      return i(t).off(ae)
                  }),
                  i(document).off(ue.FOCUSIN),
                  i.removeData(this._element, se),
                  this._config = null,
                  this._element = null,
                  this._dialog = null,
                  this._backdrop = null,
                  this._isShown = null,
                  this._isBodyOverflowing = null,
                  this._ignoreBackdropClick = null,
                  this._isTransitioning = null,
                  this._scrollbarWidth = null
              }
              ,
              e.handleUpdate = function() {
                  this._adjustDialog()
              }
              ,
              e._getConfig = function(t) {
                  return t = r({}, ce, t),
                  a.typeCheckConfig(re, t, de),
                  t
              }
              ,
              e._showElement = function(t) {
                  var e = this
                    , n = i(this._element).hasClass(fe);
                  this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                  this._element.style.display = "block",
                  this._element.removeAttribute("aria-hidden"),
                  this._element.setAttribute("aria-modal", !0),
                  this._element.scrollTop = 0,
                  n && a.reflow(this._element),
                  i(this._element).addClass(pe),
                  this._config.focus && this._enforceFocus();
                  var o = i.Event(ue.SHOWN, {
                      relatedTarget: t
                  })
                    , r = function() {
                      e._config.focus && e._element.focus(),
                      e._isTransitioning = !1,
                      i(e._element).trigger(o)
                  };
                  if (n) {
                      var s = a.getTransitionDurationFromElement(this._dialog);
                      i(this._dialog).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
                  } else
                      r()
              }
              ,
              e._enforceFocus = function() {
                  var t = this;
                  i(document).off(ue.FOCUSIN).on(ue.FOCUSIN, function(e) {
                      document !== e.target && t._element !== e.target && 0 === i(t._element).has(e.target).length && t._element.focus()
                  })
              }
              ,
              e._setEscapeEvent = function() {
                  var t = this;
                  this._isShown && this._config.keyboard ? i(this._element).on(ue.KEYDOWN_DISMISS, function(e) {
                      27 === e.which && (e.preventDefault(),
                      t.hide())
                  }) : this._isShown || i(this._element).off(ue.KEYDOWN_DISMISS)
              }
              ,
              e._setResizeEvent = function() {
                  var t = this;
                  this._isShown ? i(window).on(ue.RESIZE, function(e) {
                      return t.handleUpdate(e)
                  }) : i(window).off(ue.RESIZE)
              }
              ,
              e._hideModal = function() {
                  var t = this;
                  this._element.style.display = "none",
                  this._element.setAttribute("aria-hidden", !0),
                  this._element.removeAttribute("aria-modal"),
                  this._isTransitioning = !1,
                  this._showBackdrop(function() {
                      i(document.body).removeClass(he),
                      t._resetAdjustments(),
                      t._resetScrollbar(),
                      i(t._element).trigger(ue.HIDDEN)
                  })
              }
              ,
              e._removeBackdrop = function() {
                  this._backdrop && (i(this._backdrop).remove(),
                  this._backdrop = null)
              }
              ,
              e._showBackdrop = function(t) {
                  var e = this
                    , n = i(this._element).hasClass(fe) ? fe : "";
                  if (this._isShown && this._config.backdrop) {
                      if (this._backdrop = document.createElement("div"),
                      this._backdrop.className = "modal-backdrop",
                      n && this._backdrop.classList.add(n),
                      i(this._backdrop).appendTo(document.body),
                      i(this._element).on(ue.CLICK_DISMISS, function(t) {
                          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                      }),
                      n && a.reflow(this._backdrop),
                      i(this._backdrop).addClass(pe),
                      !t)
                          return;
                      if (!n)
                          return void t();
                      var o = a.getTransitionDurationFromElement(this._backdrop);
                      i(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(o)
                  } else if (!this._isShown && this._backdrop) {
                      i(this._backdrop).removeClass(pe);
                      var r = function() {
                          e._removeBackdrop(),
                          t && t()
                      };
                      if (i(this._element).hasClass(fe)) {
                          var s = a.getTransitionDurationFromElement(this._backdrop);
                          i(this._backdrop).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
                      } else
                          r()
                  } else
                      t && t()
              }
              ,
              e._adjustDialog = function() {
                  var t = this._element.scrollHeight > document.documentElement.clientHeight;
                  !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                  this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
              }
              ,
              e._resetAdjustments = function() {
                  this._element.style.paddingLeft = "",
                  this._element.style.paddingRight = ""
              }
              ,
              e._checkScrollbar = function() {
                  var t = document.body.getBoundingClientRect();
                  this._isBodyOverflowing = t.left + t.right < window.innerWidth,
                  this._scrollbarWidth = this._getScrollbarWidth()
              }
              ,
              e._setScrollbar = function() {
                  var t = this;
                  if (this._isBodyOverflowing) {
                      var e = [].slice.call(document.querySelectorAll(me))
                        , n = [].slice.call(document.querySelectorAll(ve));
                      i(e).each(function(e, n) {
                          var o = n.style.paddingRight
                            , r = i(n).css("padding-right");
                          i(n).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px")
                      }),
                      i(n).each(function(e, n) {
                          var o = n.style.marginRight
                            , r = i(n).css("margin-right");
                          i(n).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px")
                      });
                      var o = document.body.style.paddingRight
                        , r = i(document.body).css("padding-right");
                      i(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                  }
                  i(document.body).addClass(he)
              }
              ,
              e._resetScrollbar = function() {
                  var t = [].slice.call(document.querySelectorAll(me));
                  i(t).each(function(t, e) {
                      var n = i(e).data("padding-right");
                      i(e).removeData("padding-right"),
                      e.style.paddingRight = n || ""
                  });
                  var e = [].slice.call(document.querySelectorAll("" + ve));
                  i(e).each(function(t, e) {
                      var n = i(e).data("margin-right");
                      void 0 !== n && i(e).css("margin-right", n).removeData("margin-right")
                  });
                  var n = i(document.body).data("padding-right");
                  i(document.body).removeData("padding-right"),
                  document.body.style.paddingRight = n || ""
              }
              ,
              e._getScrollbarWidth = function() {
                  var t = document.createElement("div");
                  t.className = "modal-scrollbar-measure",
                  document.body.appendChild(t);
                  var e = t.getBoundingClientRect().width - t.clientWidth;
                  return document.body.removeChild(t),
                  e
              }
              ,
              t._jQueryInterface = function(e, n) {
                  return this.each(function() {
                      var o = i(this).data(se)
                        , s = r({}, ce, i(this).data(), "object" == typeof e && e ? e : {});
                      if (o || (o = new t(this,s),
                      i(this).data(se, o)),
                      "string" == typeof e) {
                          if (void 0 === o[e])
                              throw new TypeError('No method named "' + e + '"');
                          o[e](n)
                      } else
                          s.show && o.show(n)
                  })
              }
              ,
              o(t, null, [{
                  key: "VERSION",
                  get: function() {
                      return "4.2.1"
                  }
              }, {
                  key: "Default",
                  get: function() {
                      return ce
                  }
              }]),
              t
          }();
          i(document).on(ue.CLICK_DATA_API, '[data-toggle="modal"]', function(t) {
              var e, n = this, o = a.getSelectorFromElement(this);
              o && (e = document.querySelector(o));
              var s = i(e).data(se) ? "toggle" : r({}, i(e).data(), i(this).data());
              "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
              var l = i(e).one(ue.SHOW, function(t) {
                  t.isDefaultPrevented() || l.one(ue.HIDDEN, function() {
                      i(n).is(":visible") && n.focus()
                  })
              });
              ye._jQueryInterface.call(i(e), s, this)
          }),
          i.fn[re] = ye._jQueryInterface,
          i.fn[re].Constructor = ye,
          i.fn[re].noConflict = function() {
              return i.fn[re] = le,
              ye._jQueryInterface
          }
          ;
          var be = "tooltip"
            , we = "bs.tooltip"
            , xe = "." + we
            , Ae = i.fn[be]
            , Ce = "bs-tooltip"
            , Se = new RegExp("(^|\\s)" + Ce + "\\S+","g")
            , Te = {
              animation: "boolean",
              template: "string",
              title: "(string|element|function)",
              trigger: "string",
              delay: "(number|object)",
              html: "boolean",
              selector: "(string|boolean)",
              placement: "(string|function)",
              offset: "(number|string)",
              container: "(string|element|boolean)",
              fallbackPlacement: "(string|array)",
              boundary: "(string|element)"
          }
            , _e = {
              AUTO: "auto",
              TOP: "top",
              RIGHT: "right",
              BOTTOM: "bottom",
              LEFT: "left"
          }
            , Ee = {
              animation: !0,
              template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
              trigger: "hover focus",
              title: "",
              delay: 0,
              html: !1,
              selector: !1,
              placement: "top",
              offset: 0,
              container: !1,
              fallbackPlacement: "flip",
              boundary: "scrollParent"
          }
            , ke = "show"
            , Ie = {
              HIDE: "hide" + xe,
              HIDDEN: "hidden" + xe,
              SHOW: "show" + xe,
              SHOWN: "shown" + xe,
              INSERTED: "inserted" + xe,
              CLICK: "click" + xe,
              FOCUSIN: "focusin" + xe,
              FOCUSOUT: "focusout" + xe,
              MOUSEENTER: "mouseenter" + xe,
              MOUSELEAVE: "mouseleave" + xe
          }
            , Fe = "fade"
            , De = "show"
            , $e = "hover"
            , Le = "focus"
            , Oe = function() {
              function t(t, e) {
                  if (void 0 === zt)
                      throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                  this._isEnabled = !0,
                  this._timeout = 0,
                  this._hoverState = "",
                  this._activeTrigger = {},
                  this._popper = null,
                  this.element = t,
                  this.config = this._getConfig(e),
                  this.tip = null,
                  this._setListeners()
              }
              var e = t.prototype;
              return e.enable = function() {
                  this._isEnabled = !0
              }
              ,
              e.disable = function() {
                  this._isEnabled = !1
              }
              ,
              e.toggleEnabled = function() {
                  this._isEnabled = !this._isEnabled
              }
              ,
              e.toggle = function(t) {
                  if (this._isEnabled)
                      if (t) {
                          var e = this.constructor.DATA_KEY
                            , n = i(t.currentTarget).data(e);
                          n || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                          i(t.currentTarget).data(e, n)),
                          n._activeTrigger.click = !n._activeTrigger.click,
                          n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                      } else {
                          if (i(this.getTipElement()).hasClass(De))
                              return void this._leave(null, this);
                          this._enter(null, this)
                      }
              }
              ,
              e.dispose = function() {
                  clearTimeout(this._timeout),
                  i.removeData(this.element, this.constructor.DATA_KEY),
                  i(this.element).off(this.constructor.EVENT_KEY),
                  i(this.element).closest(".modal").off("hide.bs.modal"),
                  this.tip && i(this.tip).remove(),
                  this._isEnabled = null,
                  this._timeout = null,
                  this._hoverState = null,
                  (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
                  this._popper = null,
                  this.element = null,
                  this.config = null,
                  this.tip = null
              }
              ,
              e.show = function() {
                  var t = this;
                  if ("none" === i(this.element).css("display"))
                      throw new Error("Please use show on visible elements");
                  var e = i.Event(this.constructor.Event.SHOW);
                  if (this.isWithContent() && this._isEnabled) {
                      i(this.element).trigger(e);
                      var n = a.findShadowRoot(this.element)
                        , o = i.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                      if (e.isDefaultPrevented() || !o)
                          return;
                      var r = this.getTipElement()
                        , s = a.getUID(this.constructor.NAME);
                      r.setAttribute("id", s),
                      this.element.setAttribute("aria-describedby", s),
                      this.setContent(),
                      this.config.animation && i(r).addClass(Fe);
                      var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement
                        , c = this._getAttachment(l);
                      this.addAttachmentClass(c);
                      var d = this._getContainer();
                      i(r).data(this.constructor.DATA_KEY, this),
                      i.contains(this.element.ownerDocument.documentElement, this.tip) || i(r).appendTo(d),
                      i(this.element).trigger(this.constructor.Event.INSERTED),
                      this._popper = new zt(this.element,r,{
                          placement: c,
                          modifiers: {
                              offset: {
                                  offset: this.config.offset
                              },
                              flip: {
                                  behavior: this.config.fallbackPlacement
                              },
                              arrow: {
                                  element: ".arrow"
                              },
                              preventOverflow: {
                                  boundariesElement: this.config.boundary
                              }
                          },
                          onCreate: function(e) {
                              e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                          },
                          onUpdate: function(e) {
                              return t._handlePopperPlacementChange(e)
                          }
                      }),
                      i(r).addClass(De),
                      "ontouchstart"in document.documentElement && i(document.body).children().on("mouseover", null, i.noop);
                      var u = function() {
                          t.config.animation && t._fixTransition();
                          var e = t._hoverState;
                          t._hoverState = null,
                          i(t.element).trigger(t.constructor.Event.SHOWN),
                          "out" === e && t._leave(null, t)
                      };
                      if (i(this.tip).hasClass(Fe)) {
                          var h = a.getTransitionDurationFromElement(this.tip);
                          i(this.tip).one(a.TRANSITION_END, u).emulateTransitionEnd(h)
                      } else
                          u()
                  }
              }
              ,
              e.hide = function(t) {
                  var e = this
                    , n = this.getTipElement()
                    , o = i.Event(this.constructor.Event.HIDE)
                    , r = function() {
                      e._hoverState !== ke && n.parentNode && n.parentNode.removeChild(n),
                      e._cleanTipClass(),
                      e.element.removeAttribute("aria-describedby"),
                      i(e.element).trigger(e.constructor.Event.HIDDEN),
                      null !== e._popper && e._popper.destroy(),
                      t && t()
                  };
                  if (i(this.element).trigger(o),
                  !o.isDefaultPrevented()) {
                      if (i(n).removeClass(De),
                      "ontouchstart"in document.documentElement && i(document.body).children().off("mouseover", null, i.noop),
                      this._activeTrigger.click = !1,
                      this._activeTrigger[Le] = !1,
                      this._activeTrigger[$e] = !1,
                      i(this.tip).hasClass(Fe)) {
                          var s = a.getTransitionDurationFromElement(n);
                          i(n).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
                      } else
                          r();
                      this._hoverState = ""
                  }
              }
              ,
              e.update = function() {
                  null !== this._popper && this._popper.scheduleUpdate()
              }
              ,
              e.isWithContent = function() {
                  return Boolean(this.getTitle())
              }
              ,
              e.addAttachmentClass = function(t) {
                  i(this.getTipElement()).addClass(Ce + "-" + t)
              }
              ,
              e.getTipElement = function() {
                  return this.tip = this.tip || i(this.config.template)[0],
                  this.tip
              }
              ,
              e.setContent = function() {
                  var t = this.getTipElement();
                  this.setElementContent(i(t.querySelectorAll(".tooltip-inner")), this.getTitle()),
                  i(t).removeClass(Fe + " " + De)
              }
              ,
              e.setElementContent = function(t, e) {
                  var n = this.config.html;
                  "object" == typeof e && (e.nodeType || e.jquery) ? n ? i(e).parent().is(t) || t.empty().append(e) : t.text(i(e).text()) : t[n ? "html" : "text"](e)
              }
              ,
              e.getTitle = function() {
                  var t = this.element.getAttribute("data-original-title");
                  return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                  t
              }
              ,
              e._getContainer = function() {
                  return !1 === this.config.container ? document.body : a.isElement(this.config.container) ? i(this.config.container) : i(document).find(this.config.container)
              }
              ,
              e._getAttachment = function(t) {
                  return _e[t.toUpperCase()]
              }
              ,
              e._setListeners = function() {
                  var t = this;
                  this.config.trigger.split(" ").forEach(function(e) {
                      if ("click" === e)
                          i(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
                              return t.toggle(e)
                          });
                      else if ("manual" !== e) {
                          var n = e === $e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN
                            , o = e === $e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                          i(t.element).on(n, t.config.selector, function(e) {
                              return t._enter(e)
                          }).on(o, t.config.selector, function(e) {
                              return t._leave(e)
                          })
                      }
                  }),
                  i(this.element).closest(".modal").on("hide.bs.modal", function() {
                      t.element && t.hide()
                  }),
                  this.config.selector ? this.config = r({}, this.config, {
                      trigger: "manual",
                      selector: ""
                  }) : this._fixTitle()
              }
              ,
              e._fixTitle = function() {
                  var t = typeof this.element.getAttribute("data-original-title");
                  (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                  this.element.setAttribute("title", ""))
              }
              ,
              e._enter = function(t, e) {
                  var n = this.constructor.DATA_KEY;
                  (e = e || i(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                  i(t.currentTarget).data(n, e)),
                  t && (e._activeTrigger["focusin" === t.type ? Le : $e] = !0),
                  i(e.getTipElement()).hasClass(De) || e._hoverState === ke ? e._hoverState = ke : (clearTimeout(e._timeout),
                  e._hoverState = ke,
                  e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                      e._hoverState === ke && e.show()
                  }, e.config.delay.show) : e.show())
              }
              ,
              e._leave = function(t, e) {
                  var n = this.constructor.DATA_KEY;
                  (e = e || i(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                  i(t.currentTarget).data(n, e)),
                  t && (e._activeTrigger["focusout" === t.type ? Le : $e] = !1),
                  e._isWithActiveTrigger() || (clearTimeout(e._timeout),
                  e._hoverState = "out",
                  e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                      "out" === e._hoverState && e.hide()
                  }, e.config.delay.hide) : e.hide())
              }
              ,
              e._isWithActiveTrigger = function() {
                  for (var t in this._activeTrigger)
                      if (this._activeTrigger[t])
                          return !0;
                  return !1
              }
              ,
              e._getConfig = function(t) {
                  return "number" == typeof (t = r({}, this.constructor.Default, i(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                      show: t.delay,
                      hide: t.delay
                  }),
                  "number" == typeof t.title && (t.title = t.title.toString()),
                  "number" == typeof t.content && (t.content = t.content.toString()),
                  a.typeCheckConfig(be, t, this.constructor.DefaultType),
                  t
              }
              ,
              e._getDelegateConfig = function() {
                  var t = {};
                  if (this.config)
                      for (var e in this.config)
                          this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                  return t
              }
              ,
              e._cleanTipClass = function() {
                  var t = i(this.getTipElement())
                    , e = t.attr("class").match(Se);
                  null !== e && e.length && t.removeClass(e.join(""))
              }
              ,
              e._handlePopperPlacementChange = function(t) {
                  var e = t.instance;
                  this.tip = e.popper,
                  this._cleanTipClass(),
                  this.addAttachmentClass(this._getAttachment(t.placement))
              }
              ,
              e._fixTransition = function() {
                  var t = this.getTipElement()
                    , e = this.config.animation;
                  null === t.getAttribute("x-placement") && (i(t).removeClass(Fe),
                  this.config.animation = !1,
                  this.hide(),
                  this.show(),
                  this.config.animation = e)
              }
              ,
              t._jQueryInterface = function(e) {
                  return this.each(function() {
                      var n = i(this).data(we)
                        , o = "object" == typeof e && e;
                      if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this,o),
                      i(this).data(we, n)),
                      "string" == typeof e)) {
                          if (void 0 === n[e])
                              throw new TypeError('No method named "' + e + '"');
                          n[e]()
                      }
                  })
              }
              ,
              o(t, null, [{
                  key: "VERSION",
                  get: function() {
                      return "4.2.1"
                  }
              }, {
                  key: "Default",
                  get: function() {
                      return Ee
                  }
              }, {
                  key: "NAME",
                  get: function() {
                      return be
                  }
              }, {
                  key: "DATA_KEY",
                  get: function() {
                      return we
                  }
              }, {
                  key: "Event",
                  get: function() {
                      return Ie
                  }
              }, {
                  key: "EVENT_KEY",
                  get: function() {
                      return xe
                  }
              }, {
                  key: "DefaultType",
                  get: function() {
                      return Te
                  }
              }]),
              t
          }();
          i.fn[be] = Oe._jQueryInterface,
          i.fn[be].Constructor = Oe,
          i.fn[be].noConflict = function() {
              return i.fn[be] = Ae,
              Oe._jQueryInterface
          }
          ;
          var Ne = "popover"
            , Me = "bs.popover"
            , Be = "." + Me
            , Pe = i.fn[Ne]
            , He = "bs-popover"
            , je = new RegExp("(^|\\s)" + He + "\\S+","g")
            , Ve = r({}, Oe.Default, {
              placement: "right",
              trigger: "click",
              content: "",
              template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
          })
            , Re = r({}, Oe.DefaultType, {
              content: "(string|element|function)"
          })
            , ze = {
              HIDE: "hide" + Be,
              HIDDEN: "hidden" + Be,
              SHOW: "show" + Be,
              SHOWN: "shown" + Be,
              INSERTED: "inserted" + Be,
              CLICK: "click" + Be,
              FOCUSIN: "focusin" + Be,
              FOCUSOUT: "focusout" + Be,
              MOUSEENTER: "mouseenter" + Be,
              MOUSELEAVE: "mouseleave" + Be
          }
            , Ue = function(t) {
              var e, n;
              function r() {
                  return t.apply(this, arguments) || this
              }
              n = t,
              (e = r).prototype = Object.create(n.prototype),
              (e.prototype.constructor = e).__proto__ = n;
              var s = r.prototype;
              return s.isWithContent = function() {
                  return this.getTitle() || this._getContent()
              }
              ,
              s.addAttachmentClass = function(t) {
                  i(this.getTipElement()).addClass(He + "-" + t)
              }
              ,
              s.getTipElement = function() {
                  return this.tip = this.tip || i(this.config.template)[0],
                  this.tip
              }
              ,
              s.setContent = function() {
                  var t = i(this.getTipElement());
                  this.setElementContent(t.find(".popover-header"), this.getTitle());
                  var e = this._getContent();
                  "function" == typeof e && (e = e.call(this.element)),
                  this.setElementContent(t.find(".popover-body"), e),
                  t.removeClass("fade show")
              }
              ,
              s._getContent = function() {
                  return this.element.getAttribute("data-content") || this.config.content
              }
              ,
              s._cleanTipClass = function() {
                  var t = i(this.getTipElement())
                    , e = t.attr("class").match(je);
                  null !== e && 0 < e.length && t.removeClass(e.join(""))
              }
              ,
              r._jQueryInterface = function(t) {
                  return this.each(function() {
                      var e = i(this).data(Me)
                        , n = "object" == typeof t ? t : null;
                      if ((e || !/dispose|hide/.test(t)) && (e || (e = new r(this,n),
                      i(this).data(Me, e)),
                      "string" == typeof t)) {
                          if (void 0 === e[t])
                              throw new TypeError('No method named "' + t + '"');
                          e[t]()
                      }
                  })
              }
              ,
              o(r, null, [{
                  key: "VERSION",
                  get: function() {
                      return "4.2.1"
                  }
              }, {
                  key: "Default",
                  get: function() {
                      return Ve
                  }
              }, {
                  key: "NAME",
                  get: function() {
                      return Ne
                  }
              }, {
                  key: "DATA_KEY",
                  get: function() {
                      return Me
                  }
              }, {
                  key: "Event",
                  get: function() {
                      return ze
                  }
              }, {
                  key: "EVENT_KEY",
                  get: function() {
                      return Be
                  }
              }, {
                  key: "DefaultType",
                  get: function() {
                      return Re
                  }
              }]),
              r
          }(Oe);
          i.fn[Ne] = Ue._jQueryInterface,
          i.fn[Ne].Constructor = Ue,
          i.fn[Ne].noConflict = function() {
              return i.fn[Ne] = Pe,
              Ue._jQueryInterface
          }
          ;
          var Qe = "scrollspy"
            , qe = "bs.scrollspy"
            , Ge = "." + qe
            , Ke = i.fn[Qe]
            , We = {
              offset: 10,
              method: "auto",
              target: ""
          }
            , Ye = {
              offset: "number",
              method: "string",
              target: "(string|element)"
          }
            , Xe = {
              ACTIVATE: "activate" + Ge,
              SCROLL: "scroll" + Ge,
              LOAD_DATA_API: "load" + Ge + ".data-api"
          }
            , Ze = "active"
            , Je = ".nav, .list-group"
            , ti = ".nav-link"
            , ei = ".list-group-item"
            , ii = ".dropdown-item"
            , ni = "position"
            , oi = function() {
              function t(t, e) {
                  var n = this;
                  this._element = t,
                  this._scrollElement = "BODY" === t.tagName ? window : t,
                  this._config = this._getConfig(e),
                  this._selector = this._config.target + " " + ti + "," + this._config.target + " " + ei + "," + this._config.target + " " + ii,
                  this._offsets = [],
                  this._targets = [],
                  this._activeTarget = null,
                  this._scrollHeight = 0,
                  i(this._scrollElement).on(Xe.SCROLL, function(t) {
                      return n._process(t)
                  }),
                  this.refresh(),
                  this._process()
              }
              var e = t.prototype;
              return e.refresh = function() {
                  var t = this
                    , e = this._scrollElement === this._scrollElement.window ? "offset" : ni
                    , n = "auto" === this._config.method ? e : this._config.method
                    , o = n === ni ? this._getScrollTop() : 0;
                  this._offsets = [],
                  this._targets = [],
                  this._scrollHeight = this._getScrollHeight(),
                  [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                      var e, r = a.getSelectorFromElement(t);
                      if (r && (e = document.querySelector(r)),
                      e) {
                          var s = e.getBoundingClientRect();
                          if (s.width || s.height)
                              return [i(e)[n]().top + o, r]
                      }
                      return null
                  }).filter(function(t) {
                      return t
                  }).sort(function(t, e) {
                      return t[0] - e[0]
                  }).forEach(function(e) {
                      t._offsets.push(e[0]),
                      t._targets.push(e[1])
                  })
              }
              ,
              e.dispose = function() {
                  i.removeData(this._element, qe),
                  i(this._scrollElement).off(Ge),
                  this._element = null,
                  this._scrollElement = null,
                  this._config = null,
                  this._selector = null,
                  this._offsets = null,
                  this._targets = null,
                  this._activeTarget = null,
                  this._scrollHeight = null
              }
              ,
              e._getConfig = function(t) {
                  if ("string" != typeof (t = r({}, We, "object" == typeof t && t ? t : {})).target) {
                      var e = i(t.target).attr("id");
                      e || (e = a.getUID(Qe),
                      i(t.target).attr("id", e)),
                      t.target = "#" + e
                  }
                  return a.typeCheckConfig(Qe, t, Ye),
                  t
              }
              ,
              e._getScrollTop = function() {
                  return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
              }
              ,
              e._getScrollHeight = function() {
                  return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
              }
              ,
              e._getOffsetHeight = function() {
                  return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
              }
              ,
              e._process = function() {
                  var t = this._getScrollTop() + this._config.offset
                    , e = this._getScrollHeight()
                    , i = this._config.offset + e - this._getOffsetHeight();
                  if (this._scrollHeight !== e && this.refresh(),
                  i <= t) {
                      var n = this._targets[this._targets.length - 1];
                      this._activeTarget !== n && this._activate(n)
                  } else {
                      if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                          return this._activeTarget = null,
                          void this._clear();
                      for (var o = this._offsets.length; o--; )
                          this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                  }
              }
              ,
              e._activate = function(t) {
                  this._activeTarget = t,
                  this._clear();
                  var e = this._selector.split(",").map(function(e) {
                      return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                  })
                    , n = i([].slice.call(document.querySelectorAll(e.join(","))));
                  n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(Ze),
                  n.addClass(Ze)) : (n.addClass(Ze),
                  n.parents(Je).prev(ti + ", " + ei).addClass(Ze),
                  n.parents(Je).prev(".nav-item").children(ti).addClass(Ze)),
                  i(this._scrollElement).trigger(Xe.ACTIVATE, {
                      relatedTarget: t
                  })
              }
              ,
              e._clear = function() {
                  [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                      return t.classList.contains(Ze)
                  }).forEach(function(t) {
                      return t.classList.remove(Ze)
                  })
              }
              ,
              t._jQueryInterface = function(e) {
                  return this.each(function() {
                      var n = i(this).data(qe);
                      if (n || (n = new t(this,"object" == typeof e && e),
                      i(this).data(qe, n)),
                      "string" == typeof e) {
                          if (void 0 === n[e])
                              throw new TypeError('No method named "' + e + '"');
                          n[e]()
                      }
                  })
              }
              ,
              o(t, null, [{
                  key: "VERSION",
                  get: function() {
                      return "4.2.1"
                  }
              }, {
                  key: "Default",
                  get: function() {
                      return We
                  }
              }]),
              t
          }();
          i(window).on(Xe.LOAD_DATA_API, function() {
              for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--; ) {
                  var n = i(t[e]);
                  oi._jQueryInterface.call(n, n.data())
              }
          }),
          i.fn[Qe] = oi._jQueryInterface,
          i.fn[Qe].Constructor = oi,
          i.fn[Qe].noConflict = function() {
              return i.fn[Qe] = Ke,
              oi._jQueryInterface
          }
          ;
          var ri = "bs.tab"
            , si = "." + ri
            , ai = i.fn.tab
            , li = {
              HIDE: "hide" + si,
              HIDDEN: "hidden" + si,
              SHOW: "show" + si,
              SHOWN: "shown" + si,
              CLICK_DATA_API: "click" + si + ".data-api"
          }
            , ci = "active"
            , di = ".active"
            , ui = "> li > .active"
            , hi = function() {
              function t(t) {
                  this._element = t
              }
              var e = t.prototype;
              return e.show = function() {
                  var t = this;
                  if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && i(this._element).hasClass(ci) || i(this._element).hasClass("disabled"))) {
                      var e, n, o = i(this._element).closest(".nav, .list-group")[0], r = a.getSelectorFromElement(this._element);
                      if (o) {
                          var s = "UL" === o.nodeName || "OL" === o.nodeName ? ui : di;
                          n = (n = i.makeArray(i(o).find(s)))[n.length - 1]
                      }
                      var l = i.Event(li.HIDE, {
                          relatedTarget: this._element
                      })
                        , c = i.Event(li.SHOW, {
                          relatedTarget: n
                      });
                      if (n && i(n).trigger(l),
                      i(this._element).trigger(c),
                      !c.isDefaultPrevented() && !l.isDefaultPrevented()) {
                          r && (e = document.querySelector(r)),
                          this._activate(this._element, o);
                          var d = function() {
                              var e = i.Event(li.HIDDEN, {
                                  relatedTarget: t._element
                              })
                                , o = i.Event(li.SHOWN, {
                                  relatedTarget: n
                              });
                              i(n).trigger(e),
                              i(t._element).trigger(o)
                          };
                          e ? this._activate(e, e.parentNode, d) : d()
                      }
                  }
              }
              ,
              e.dispose = function() {
                  i.removeData(this._element, ri),
                  this._element = null
              }
              ,
              e._activate = function(t, e, n) {
                  var o = this
                    , r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? i(e).children(di) : i(e).find(ui))[0]
                    , s = n && r && i(r).hasClass("fade")
                    , l = function() {
                      return o._transitionComplete(t, r, n)
                  };
                  if (r && s) {
                      var c = a.getTransitionDurationFromElement(r);
                      i(r).removeClass("show").one(a.TRANSITION_END, l).emulateTransitionEnd(c)
                  } else
                      l()
              }
              ,
              e._transitionComplete = function(t, e, n) {
                  if (e) {
                      i(e).removeClass(ci);
                      var o = i(e.parentNode).find("> .dropdown-menu .active")[0];
                      o && i(o).removeClass(ci),
                      "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                  }
                  if (i(t).addClass(ci),
                  "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                  a.reflow(t),
                  i(t).addClass("show"),
                  t.parentNode && i(t.parentNode).hasClass("dropdown-menu")) {
                      var r = i(t).closest(".dropdown")[0];
                      if (r) {
                          var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                          i(s).addClass(ci)
                      }
                      t.setAttribute("aria-expanded", !0)
                  }
                  n && n()
              }
              ,
              t._jQueryInterface = function(e) {
                  return this.each(function() {
                      var n = i(this)
                        , o = n.data(ri);
                      if (o || (o = new t(this),
                      n.data(ri, o)),
                      "string" == typeof e) {
                          if (void 0 === o[e])
                              throw new TypeError('No method named "' + e + '"');
                          o[e]()
                      }
                  })
              }
              ,
              o(t, null, [{
                  key: "VERSION",
                  get: function() {
                      return "4.2.1"
                  }
              }]),
              t
          }();
          i(document).on(li.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(t) {
              t.preventDefault(),
              hi._jQueryInterface.call(i(this), "show")
          }),
          i.fn.tab = hi._jQueryInterface,
          i.fn.tab.Constructor = hi,
          i.fn.tab.noConflict = function() {
              return i.fn.tab = ai,
              hi._jQueryInterface
          }
          ;
          var fi = "toast"
            , pi = "bs.toast"
            , gi = "." + pi
            , mi = i.fn[fi]
            , vi = {
              CLICK_DISMISS: "click.dismiss" + gi,
              HIDE: "hide" + gi,
              HIDDEN: "hidden" + gi,
              SHOW: "show" + gi,
              SHOWN: "shown" + gi
          }
            , yi = "show"
            , bi = "showing"
            , wi = {
              animation: "boolean",
              autohide: "boolean",
              delay: "number"
          }
            , xi = {
              animation: !0,
              autohide: !0,
              delay: 500
          }
            , Ai = function() {
              function t(t, e) {
                  this._element = t,
                  this._config = this._getConfig(e),
                  this._timeout = null,
                  this._setListeners()
              }
              var e = t.prototype;
              return e.show = function() {
                  var t = this;
                  i(this._element).trigger(vi.SHOW),
                  this._config.animation && this._element.classList.add("fade");
                  var e = function() {
                      t._element.classList.remove(bi),
                      t._element.classList.add(yi),
                      i(t._element).trigger(vi.SHOWN),
                      t._config.autohide && t.hide()
                  };
                  if (this._element.classList.remove("hide"),
                  this._element.classList.add(bi),
                  this._config.animation) {
                      var n = a.getTransitionDurationFromElement(this._element);
                      i(this._element).one(a.TRANSITION_END, e).emulateTransitionEnd(n)
                  } else
                      e()
              }
              ,
              e.hide = function(t) {
                  var e = this;
                  this._element.classList.contains(yi) && (i(this._element).trigger(vi.HIDE),
                  t ? this._close() : this._timeout = setTimeout(function() {
                      e._close()
                  }, this._config.delay))
              }
              ,
              e.dispose = function() {
                  clearTimeout(this._timeout),
                  this._timeout = null,
                  this._element.classList.contains(yi) && this._element.classList.remove(yi),
                  i(this._element).off(vi.CLICK_DISMISS),
                  i.removeData(this._element, pi),
                  this._element = null,
                  this._config = null
              }
              ,
              e._getConfig = function(t) {
                  return t = r({}, xi, i(this._element).data(), "object" == typeof t && t ? t : {}),
                  a.typeCheckConfig(fi, t, this.constructor.DefaultType),
                  t
              }
              ,
              e._setListeners = function() {
                  var t = this;
                  i(this._element).on(vi.CLICK_DISMISS, '[data-dismiss="toast"]', function() {
                      return t.hide(!0)
                  })
              }
              ,
              e._close = function() {
                  var t = this
                    , e = function() {
                      t._element.classList.add("hide"),
                      i(t._element).trigger(vi.HIDDEN)
                  };
                  if (this._element.classList.remove(yi),
                  this._config.animation) {
                      var n = a.getTransitionDurationFromElement(this._element);
                      i(this._element).one(a.TRANSITION_END, e).emulateTransitionEnd(n)
                  } else
                      e()
              }
              ,
              t._jQueryInterface = function(e) {
                  return this.each(function() {
                      var n = i(this)
                        , o = n.data(pi);
                      if (o || (o = new t(this,"object" == typeof e && e),
                      n.data(pi, o)),
                      "string" == typeof e) {
                          if (void 0 === o[e])
                              throw new TypeError('No method named "' + e + '"');
                          o[e](this)
                      }
                  })
              }
              ,
              o(t, null, [{
                  key: "VERSION",
                  get: function() {
                      return "4.2.1"
                  }
              }, {
                  key: "DefaultType",
                  get: function() {
                      return wi
                  }
              }]),
              t
          }();
          i.fn[fi] = Ai._jQueryInterface,
          i.fn[fi].Constructor = Ai,
          i.fn[fi].noConflict = function() {
              return i.fn[fi] = mi,
              Ai._jQueryInterface
          }
          ,
          function() {
              if (void 0 === i)
                  throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
              var t = i.fn.jquery.split(" ")[0].split(".");
              if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0])
                  throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
          }(),
          e.Util = a,
          e.Alert = f,
          e.Button = C,
          e.Carousel = P,
          e.Collapse = X,
          e.Dropdown = oe,
          e.Modal = ye,
          e.Popover = Ue,
          e.Scrollspy = oi,
          e.Tab = hi,
          e.Toast = Ai,
          e.Tooltip = Oe,
          Object.defineProperty(e, "__esModule", {
              value: !0
          })
      }(e, i(0))
  }
  ).call(this, i(33))
}
, function(t, e) {
  var i;
  i = function() {
      return this
  }();
  try {
      i = i || new Function("return this")()
  } catch (t) {
      "object" == typeof window && (i = window)
  }
  t.exports = i
}
]);
