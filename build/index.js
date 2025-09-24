import Pe, { useState as Jt, useRef as pr, useLayoutEffect as Ii, useEffect as rn, useSyncExternalStore as as, isValidElement as yn, cloneElement as Zn, useCallback as Br } from "react";
function os(c, h) {
  for (var f = 0; f < h.length; f++) {
    const E = h[f];
    if (typeof E != "string" && !Array.isArray(E)) {
      for (const C in E)
        if (C !== "default" && !(C in c)) {
          const w = Object.getOwnPropertyDescriptor(E, C);
          w && Object.defineProperty(c, C, w.get ? w : {
            enumerable: !0,
            get: () => E[C]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(c, Symbol.toStringTag, { value: "Module" }));
}
var xn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ls(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var wn = { exports: {} }, Jr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var li;
function cs() {
  if (li) return Jr;
  li = 1;
  var c = Pe, h = Symbol.for("react.element"), f = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, C = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(B, N, p) {
    var M, v = {}, ee = null, q = null;
    p !== void 0 && (ee = "" + p), N.key !== void 0 && (ee = "" + N.key), N.ref !== void 0 && (q = N.ref);
    for (M in N) E.call(N, M) && !w.hasOwnProperty(M) && (v[M] = N[M]);
    if (B && B.defaultProps) for (M in N = B.defaultProps, N) v[M] === void 0 && (v[M] = N[M]);
    return { $$typeof: h, type: B, key: ee, ref: q, props: v, _owner: C.current };
  }
  return Jr.Fragment = f, Jr.jsx = _, Jr.jsxs = _, Jr;
}
var $r = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ci;
function fs() {
  return ci || (ci = 1, process.env.NODE_ENV !== "production" && function() {
    var c = Pe, h = Symbol.for("react.element"), f = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), B = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), me = Symbol.iterator, j = "@@iterator";
    function ue(m) {
      if (m === null || typeof m != "object")
        return null;
      var k = me && m[me] || m[j];
      return typeof k == "function" ? k : null;
    }
    var oe = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function G(m) {
      {
        for (var k = arguments.length, Y = new Array(k > 1 ? k - 1 : 0), J = 1; J < k; J++)
          Y[J - 1] = arguments[J];
        V("error", m, Y);
      }
    }
    function V(m, k, Y) {
      {
        var J = oe.ReactDebugCurrentFrame, Ae = J.getStackAddendum();
        Ae !== "" && (k += "%s", Y = Y.concat([Ae]));
        var Se = Y.map(function(xe) {
          return String(xe);
        });
        Se.unshift("Warning: " + k), Function.prototype.apply.call(console[m], console, Se);
      }
    }
    var z = !1, be = !1, ce = !1, L = !1, K = !1, F;
    F = Symbol.for("react.module.reference");
    function it(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === E || m === w || K || m === C || m === p || m === M || L || m === q || z || be || ce || typeof m == "object" && m !== null && (m.$$typeof === ee || m.$$typeof === v || m.$$typeof === _ || m.$$typeof === B || m.$$typeof === N || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === F || m.getModuleId !== void 0));
    }
    function Ce(m, k, Y) {
      var J = m.displayName;
      if (J)
        return J;
      var Ae = k.displayName || k.name || "";
      return Ae !== "" ? Y + "(" + Ae + ")" : Y;
    }
    function $(m) {
      return m.displayName || "Context";
    }
    function he(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && G("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case E:
          return "Fragment";
        case f:
          return "Portal";
        case w:
          return "Profiler";
        case C:
          return "StrictMode";
        case p:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case B:
            var k = m;
            return $(k) + ".Consumer";
          case _:
            var Y = m;
            return $(Y._context) + ".Provider";
          case N:
            return Ce(m, m.render, "ForwardRef");
          case v:
            var J = m.displayName || null;
            return J !== null ? J : he(m.type) || "Memo";
          case ee: {
            var Ae = m, Se = Ae._payload, xe = Ae._init;
            try {
              return he(xe(Se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Oe = Object.assign, D = 0, Ve, se, It, Mt, Bt, dr, le;
    function ot() {
    }
    ot.__reactDisabledLog = !0;
    function Ke() {
      {
        if (D === 0) {
          Ve = console.log, se = console.info, It = console.warn, Mt = console.error, Bt = console.group, dr = console.groupCollapsed, le = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: ot,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        D++;
      }
    }
    function kr() {
      {
        if (D--, D === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Oe({}, m, {
              value: Ve
            }),
            info: Oe({}, m, {
              value: se
            }),
            warn: Oe({}, m, {
              value: It
            }),
            error: Oe({}, m, {
              value: Mt
            }),
            group: Oe({}, m, {
              value: Bt
            }),
            groupCollapsed: Oe({}, m, {
              value: dr
            }),
            groupEnd: Oe({}, m, {
              value: le
            })
          });
        }
        D < 0 && G("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = oe.ReactCurrentDispatcher, gr;
    function qe(m, k, Y) {
      {
        if (gr === void 0)
          try {
            throw Error();
          } catch (Ae) {
            var J = Ae.stack.trim().match(/\n( *(at )?)/);
            gr = J && J[1] || "";
          }
        return `
` + gr + m;
      }
    }
    var $t = !1, zt;
    {
      var Ct = typeof WeakMap == "function" ? WeakMap : Map;
      zt = new Ct();
    }
    function xr(m, k) {
      if (!m || $t)
        return "";
      {
        var Y = zt.get(m);
        if (Y !== void 0)
          return Y;
      }
      var J;
      $t = !0;
      var Ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Se;
      Se = re.current, re.current = null, Ke();
      try {
        if (k) {
          var xe = function() {
            throw Error();
          };
          if (Object.defineProperty(xe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(xe, []);
            } catch (Je) {
              J = Je;
            }
            Reflect.construct(m, [], xe);
          } else {
            try {
              xe.call();
            } catch (Je) {
              J = Je;
            }
            m.call(xe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Je) {
            J = Je;
          }
          m();
        }
      } catch (Je) {
        if (Je && J && typeof Je.stack == "string") {
          for (var fe = Je.stack.split(`
`), wt = J.stack.split(`
`), Qe = fe.length - 1, Re = wt.length - 1; Qe >= 1 && Re >= 0 && fe[Qe] !== wt[Re]; )
            Re--;
          for (; Qe >= 1 && Re >= 0; Qe--, Re--)
            if (fe[Qe] !== wt[Re]) {
              if (Qe !== 1 || Re !== 1)
                do
                  if (Qe--, Re--, Re < 0 || fe[Qe] !== wt[Re]) {
                    var Fe = `
` + fe[Qe].replace(" at new ", " at ");
                    return m.displayName && Fe.includes("<anonymous>") && (Fe = Fe.replace("<anonymous>", m.displayName)), typeof m == "function" && zt.set(m, Fe), Fe;
                  }
                while (Qe >= 1 && Re >= 0);
              break;
            }
        }
      } finally {
        $t = !1, re.current = Se, kr(), Error.prepareStackTrace = Ae;
      }
      var ve = m ? m.displayName || m.name : "", jt = ve ? qe(ve) : "";
      return typeof m == "function" && zt.set(m, jt), jt;
    }
    function _e(m, k, Y) {
      return xr(m, !1);
    }
    function ar(m) {
      var k = m.prototype;
      return !!(k && k.isReactComponent);
    }
    function bt(m, k, Y) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return xr(m, ar(m));
      if (typeof m == "string")
        return qe(m);
      switch (m) {
        case p:
          return qe("Suspense");
        case M:
          return qe("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case N:
            return _e(m.render);
          case v:
            return bt(m.type, k, Y);
          case ee: {
            var J = m, Ae = J._payload, Se = J._init;
            try {
              return bt(Se(Ae), k, Y);
            } catch {
            }
          }
        }
      return "";
    }
    var Gt = Object.prototype.hasOwnProperty, lt = {}, Be = oe.ReactDebugCurrentFrame;
    function Ee(m) {
      if (m) {
        var k = m._owner, Y = bt(m.type, m._source, k ? k.type : null);
        Be.setExtraStackFrame(Y);
      } else
        Be.setExtraStackFrame(null);
    }
    function Ir(m, k, Y, J, Ae) {
      {
        var Se = Function.call.bind(Gt);
        for (var xe in m)
          if (Se(m, xe)) {
            var fe = void 0;
            try {
              if (typeof m[xe] != "function") {
                var wt = Error((J || "React class") + ": " + Y + " type `" + xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw wt.name = "Invariant Violation", wt;
              }
              fe = m[xe](k, xe, J, Y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Qe) {
              fe = Qe;
            }
            fe && !(fe instanceof Error) && (Ee(Ae), G("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", J || "React class", Y, xe, typeof fe), Ee(null)), fe instanceof Error && !(fe.message in lt) && (lt[fe.message] = !0, Ee(Ae), G("Failed %s type: %s", Y, fe.message), Ee(null));
          }
      }
    }
    var Q = Array.isArray;
    function or(m) {
      return Q(m);
    }
    function an(m) {
      {
        var k = typeof Symbol == "function" && Symbol.toStringTag, Y = k && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return Y;
      }
    }
    function Ht(m) {
      try {
        return br(m), !1;
      } catch {
        return !0;
      }
    }
    function br(m) {
      return "" + m;
    }
    function St(m) {
      if (Ht(m))
        return G("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", an(m)), br(m);
    }
    var Ur = oe.ReactCurrentOwner, Yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, dt, Vr;
    function _r(m) {
      if (Gt.call(m, "ref")) {
        var k = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function Tn(m) {
      if (Gt.call(m, "key")) {
        var k = Object.getOwnPropertyDescriptor(m, "key").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function et(m, k) {
      typeof m.ref == "string" && Ur.current;
    }
    function X(m, k) {
      {
        var Y = function() {
          dt || (dt = !0, G("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        Y.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: Y,
          configurable: !0
        });
      }
    }
    function st(m, k) {
      {
        var Y = function() {
          Vr || (Vr = !0, G("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        Y.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: Y,
          configurable: !0
        });
      }
    }
    var Le = function(m, k, Y, J, Ae, Se, xe) {
      var fe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: h,
        // Built-in properties that belong on the element
        type: m,
        key: k,
        ref: Y,
        props: xe,
        // Record the component responsible for creating this element.
        _owner: Se
      };
      return fe._store = {}, Object.defineProperty(fe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(fe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: J
      }), Object.defineProperty(fe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ae
      }), Object.freeze && (Object.freeze(fe.props), Object.freeze(fe)), fe;
    };
    function Ze(m, k, Y, J, Ae) {
      {
        var Se, xe = {}, fe = null, wt = null;
        Y !== void 0 && (St(Y), fe = "" + Y), Tn(k) && (St(k.key), fe = "" + k.key), _r(k) && (wt = k.ref, et(k, Ae));
        for (Se in k)
          Gt.call(k, Se) && !Yt.hasOwnProperty(Se) && (xe[Se] = k[Se]);
        if (m && m.defaultProps) {
          var Qe = m.defaultProps;
          for (Se in Qe)
            xe[Se] === void 0 && (xe[Se] = Qe[Se]);
        }
        if (fe || wt) {
          var Re = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          fe && X(xe, Re), wt && st(xe, Re);
        }
        return Le(m, fe, wt, Ae, J, Ur.current, xe);
      }
    }
    var er = oe.ReactCurrentOwner, Tr = oe.ReactDebugCurrentFrame;
    function tr(m) {
      if (m) {
        var k = m._owner, Y = bt(m.type, m._source, k ? k.type : null);
        Tr.setExtraStackFrame(Y);
      } else
        Tr.setExtraStackFrame(null);
    }
    var ye;
    ye = !1;
    function Wt(m) {
      return typeof m == "object" && m !== null && m.$$typeof === h;
    }
    function Gr() {
      {
        if (er.current) {
          var m = he(er.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function on(m) {
      return "";
    }
    var Nt = {};
    function Hr(m) {
      {
        var k = Gr();
        if (!k) {
          var Y = typeof m == "string" ? m : m.displayName || m.name;
          Y && (k = `

Check the top-level render call using <` + Y + ">.");
        }
        return k;
      }
    }
    function ft(m, k) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var Y = Hr(k);
        if (Nt[Y])
          return;
        Nt[Y] = !0;
        var J = "";
        m && m._owner && m._owner !== er.current && (J = " It was passed a child from " + he(m._owner.type) + "."), tr(m), G('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, J), tr(null);
      }
    }
    function rr(m, k) {
      {
        if (typeof m != "object")
          return;
        if (or(m))
          for (var Y = 0; Y < m.length; Y++) {
            var J = m[Y];
            Wt(J) && ft(J, k);
          }
        else if (Wt(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var Ae = ue(m);
          if (typeof Ae == "function" && Ae !== m.entries)
            for (var Se = Ae.call(m), xe; !(xe = Se.next()).done; )
              Wt(xe.value) && ft(xe.value, k);
        }
      }
    }
    function Sr(m) {
      {
        var k = m.type;
        if (k == null || typeof k == "string")
          return;
        var Y;
        if (typeof k == "function")
          Y = k.propTypes;
        else if (typeof k == "object" && (k.$$typeof === N || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        k.$$typeof === v))
          Y = k.propTypes;
        else
          return;
        if (Y) {
          var J = he(k);
          Ir(Y, m.props, "prop", J, m);
        } else if (k.PropTypes !== void 0 && !ye) {
          ye = !0;
          var Ae = he(k);
          G("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ae || "Unknown");
        }
        typeof k.getDefaultProps == "function" && !k.getDefaultProps.isReactClassApproved && G("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ft(m) {
      {
        for (var k = Object.keys(m.props), Y = 0; Y < k.length; Y++) {
          var J = k[Y];
          if (J !== "children" && J !== "key") {
            tr(m), G("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", J), tr(null);
            break;
          }
        }
        m.ref !== null && (tr(m), G("Invalid attribute `ref` supplied to `React.Fragment`."), tr(null));
      }
    }
    var ln = {};
    function Zt(m, k, Y, J, Ae, Se) {
      {
        var xe = it(m);
        if (!xe) {
          var fe = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var wt = on();
          wt ? fe += wt : fe += Gr();
          var Qe;
          m === null ? Qe = "null" : or(m) ? Qe = "array" : m !== void 0 && m.$$typeof === h ? (Qe = "<" + (he(m.type) || "Unknown") + " />", fe = " Did you accidentally export a JSX literal instead of a component?") : Qe = typeof m, G("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Qe, fe);
        }
        var Re = Ze(m, k, Y, Ae, Se);
        if (Re == null)
          return Re;
        if (xe) {
          var Fe = k.children;
          if (Fe !== void 0)
            if (J)
              if (or(Fe)) {
                for (var ve = 0; ve < Fe.length; ve++)
                  rr(Fe[ve], m);
                Object.freeze && Object.freeze(Fe);
              } else
                G("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              rr(Fe, m);
        }
        if (Gt.call(k, "key")) {
          var jt = he(m), Je = Object.keys(k).filter(function(Sn) {
            return Sn !== "key";
          }), wr = Je.length > 0 ? "{key: someKey, " + Je.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ln[jt + wr]) {
            var P = Je.length > 0 ? "{" + Je.join(": ..., ") + ": ...}" : "{}";
            G(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, wr, jt, P, jt), ln[jt + wr] = !0;
          }
        }
        return m === E ? Ft(Re) : Sr(Re), Re;
      }
    }
    function Wr(m, k, Y) {
      return Zt(m, k, Y, !0);
    }
    function pt(m, k, Y) {
      return Zt(m, k, Y, !1);
    }
    var nr = pt, Ot = Wr;
    $r.Fragment = E, $r.jsx = nr, $r.jsxs = Ot;
  }()), $r;
}
var fi;
function us() {
  return fi || (fi = 1, process.env.NODE_ENV === "production" ? wn.exports = cs() : wn.exports = fs()), wn.exports;
}
var Ne = us(), An = /* @__PURE__ */ ((c) => (c.IOS = "ios", c.ANDROID = "android", c.WEB = "web", c))(An || {});
const hs = () => {
  const c = navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(c) ? An.IOS : /android/.test(c) ? An.ANDROID : An.WEB;
};
var Z;
(function(c) {
  c[c.QR_CODE = 0] = "QR_CODE", c[c.AZTEC = 1] = "AZTEC", c[c.CODABAR = 2] = "CODABAR", c[c.CODE_39 = 3] = "CODE_39", c[c.CODE_93 = 4] = "CODE_93", c[c.CODE_128 = 5] = "CODE_128", c[c.DATA_MATRIX = 6] = "DATA_MATRIX", c[c.MAXICODE = 7] = "MAXICODE", c[c.ITF = 8] = "ITF", c[c.EAN_13 = 9] = "EAN_13", c[c.EAN_8 = 10] = "EAN_8", c[c.PDF_417 = 11] = "PDF_417", c[c.RSS_14 = 12] = "RSS_14", c[c.RSS_EXPANDED = 13] = "RSS_EXPANDED", c[c.UPC_A = 14] = "UPC_A", c[c.UPC_E = 15] = "UPC_E", c[c.UPC_EAN_EXTENSION = 16] = "UPC_EAN_EXTENSION";
})(Z || (Z = {}));
var ui = /* @__PURE__ */ new Map([
  [Z.QR_CODE, "QR_CODE"],
  [Z.AZTEC, "AZTEC"],
  [Z.CODABAR, "CODABAR"],
  [Z.CODE_39, "CODE_39"],
  [Z.CODE_93, "CODE_93"],
  [Z.CODE_128, "CODE_128"],
  [Z.DATA_MATRIX, "DATA_MATRIX"],
  [Z.MAXICODE, "MAXICODE"],
  [Z.ITF, "ITF"],
  [Z.EAN_13, "EAN_13"],
  [Z.EAN_8, "EAN_8"],
  [Z.PDF_417, "PDF_417"],
  [Z.RSS_14, "RSS_14"],
  [Z.RSS_EXPANDED, "RSS_EXPANDED"],
  [Z.UPC_A, "UPC_A"],
  [Z.UPC_E, "UPC_E"],
  [Z.UPC_EAN_EXTENSION, "UPC_EAN_EXTENSION"]
]), hi;
(function(c) {
  c[c.UNKNOWN = 0] = "UNKNOWN", c[c.URL = 1] = "URL";
})(hi || (hi = {}));
function ds(c) {
  return Object.values(Z).includes(c);
}
var mn;
(function(c) {
  c[c.SCAN_TYPE_CAMERA = 0] = "SCAN_TYPE_CAMERA", c[c.SCAN_TYPE_FILE = 1] = "SCAN_TYPE_FILE";
})(mn || (mn = {}));
var gs = function() {
  function c() {
  }
  return c.GITHUB_PROJECT_URL = "https://github.com/mebjas/html5-qrcode", c.SCAN_DEFAULT_FPS = 2, c.DEFAULT_DISABLE_FLIP = !1, c.DEFAULT_REMEMBER_LAST_CAMERA_USED = !0, c.DEFAULT_SUPPORTED_SCAN_TYPE = [
    mn.SCAN_TYPE_CAMERA,
    mn.SCAN_TYPE_FILE
  ], c;
}(), bi = function() {
  function c(h, f) {
    this.format = h, this.formatName = f;
  }
  return c.prototype.toString = function() {
    return this.formatName;
  }, c.create = function(h) {
    if (!ui.has(h))
      throw "".concat(h, " not in html5QrcodeSupportedFormatsTextMap");
    return new c(h, ui.get(h));
  }, c;
}(), di = function() {
  function c() {
  }
  return c.createFromText = function(h) {
    var f = {
      text: h
    };
    return {
      decodedText: h,
      result: f
    };
  }, c.createFromQrcodeResult = function(h) {
    return {
      decodedText: h.text,
      result: h
    };
  }, c;
}(), Hn;
(function(c) {
  c[c.UNKWOWN_ERROR = 0] = "UNKWOWN_ERROR", c[c.IMPLEMENTATION_ERROR = 1] = "IMPLEMENTATION_ERROR", c[c.NO_CODE_FOUND_ERROR = 2] = "NO_CODE_FOUND_ERROR";
})(Hn || (Hn = {}));
var xs = function() {
  function c() {
  }
  return c.createFrom = function(h) {
    return {
      errorMessage: h,
      type: Hn.UNKWOWN_ERROR
    };
  }, c;
}(), ws = function() {
  function c(h) {
    this.verbose = h;
  }
  return c.prototype.log = function(h) {
    this.verbose && console.log(h);
  }, c.prototype.warn = function(h) {
    this.verbose && console.warn(h);
  }, c.prototype.logError = function(h, f) {
    (this.verbose || f === !0) && console.error(h);
  }, c.prototype.logErrors = function(h) {
    if (h.length === 0)
      throw "Logger#logError called without arguments";
    this.verbose && console.error(h);
  }, c;
}();
function ir(c) {
  return typeof c > "u" || c === null;
}
var Fr = function() {
  function c() {
  }
  return c.codeParseError = function(h) {
    return "QR code parse error, error = ".concat(h);
  }, c.errorGettingUserMedia = function(h) {
    return "Error getting userMedia, error = ".concat(h);
  }, c.onlyDeviceSupportedError = function() {
    return "The device doesn't support navigator.mediaDevices , only supported cameraIdOrConfig in this case is deviceId parameter (string).";
  }, c.cameraStreamingNotSupported = function() {
    return "Camera streaming not supported by the browser.";
  }, c.unableToQuerySupportedDevices = function() {
    return "Unable to query supported devices, unknown error.";
  }, c.insecureContextCameraQueryError = function() {
    return "Camera access is only supported in secure context like https or localhost.";
  }, c.scannerPaused = function() {
    return "Scanner paused";
  }, c;
}(), _i = function() {
  function c() {
  }
  return c.isMediaStreamConstraintsValid = function(h, f) {
    if (typeof h != "object") {
      var E = typeof h;
      return f.logError("videoConstraints should be of type object, the " + "object passed is of type ".concat(E, "."), !0), !1;
    }
    for (var C = [
      "autoGainControl",
      "channelCount",
      "echoCancellation",
      "latency",
      "noiseSuppression",
      "sampleRate",
      "sampleSize",
      "volume"
    ], w = new Set(C), _ = Object.keys(h), B = 0, N = _; B < N.length; B++) {
      var p = N[B];
      if (w.has(p))
        return f.logError("".concat(p, " is not supported videoConstaints."), !0), !1;
    }
    return !0;
  }, c;
}(), en = { exports: {} }, Es = en.exports, gi;
function As() {
  return gi || (gi = 1, function(c, h) {
    (function(f, E) {
      E(h);
    })(Es, function(f) {
      function E(d) {
        return d == null;
      }
      var C = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, e) {
        d.__proto__ = e;
      } || function(d, e) {
        for (var t in e) e.hasOwnProperty(t) && (d[t] = e[t]);
      };
      function w(d, e) {
        C(d, e);
        function t() {
          this.constructor = d;
        }
        d.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
      }
      function _(d, e) {
        var t = Object.setPrototypeOf;
        t ? t(d, e) : d.__proto__ = e;
      }
      function B(d, e) {
        e === void 0 && (e = d.constructor);
        var t = Error.captureStackTrace;
        t && t(d, e);
      }
      var N = function(d) {
        w(e, d);
        function e(t) {
          var r = this.constructor, n = d.call(this, t) || this;
          return Object.defineProperty(n, "name", {
            value: r.name,
            enumerable: !1
          }), _(n, r.prototype), B(n), n;
        }
        return e;
      }(Error);
      class p extends N {
        /**
         * Allows Exception to be constructed directly
         * with some message and prototype definition.
         */
        constructor(e = void 0) {
          super(e), this.message = e;
        }
        getKind() {
          return this.constructor.kind;
        }
      }
      p.kind = "Exception";
      class M extends p {
      }
      M.kind = "ArgumentException";
      class v extends p {
      }
      v.kind = "IllegalArgumentException";
      class ee {
        constructor(e) {
          if (this.binarizer = e, e === null)
            throw new v("Binarizer must be non-null.");
        }
        /**
         * @return The width of the bitmap.
         */
        getWidth() {
          return this.binarizer.getWidth();
        }
        /**
         * @return The height of the bitmap.
         */
        getHeight() {
          return this.binarizer.getHeight();
        }
        /**
         * Converts one row of luminance data to 1 bit data. May actually do the conversion, or return
         * cached data. Callers should assume this method is expensive and call it as seldom as possible.
         * This method is intended for decoding 1D barcodes and may choose to apply sharpening.
         *
         * @param y The row to fetch, which must be in [0, bitmap height)
         * @param row An optional preallocated array. If null or too small, it will be ignored.
         *            If used, the Binarizer will call BitArray.clear(). Always use the returned object.
         * @return The array of bits for this row (true means black).
         * @throws NotFoundException if row can't be binarized
         */
        getBlackRow(e, t) {
          return this.binarizer.getBlackRow(e, t);
        }
        /**
         * Converts a 2D array of luminance data to 1 bit. As above, assume this method is expensive
         * and do not call it repeatedly. This method is intended for decoding 2D barcodes and may or
         * may not apply sharpening. Therefore, a row from this matrix may not be identical to one
         * fetched using getBlackRow(), so don't mix and match between them.
         *
         * @return The 2D array of bits for the image (true means black).
         * @throws NotFoundException if image can't be binarized to make a matrix
         */
        getBlackMatrix() {
          return (this.matrix === null || this.matrix === void 0) && (this.matrix = this.binarizer.getBlackMatrix()), this.matrix;
        }
        /**
         * @return Whether this bitmap can be cropped.
         */
        isCropSupported() {
          return this.binarizer.getLuminanceSource().isCropSupported();
        }
        /**
         * Returns a new object with cropped image data. Implementations may keep a reference to the
         * original data rather than a copy. Only callable if isCropSupported() is true.
         *
         * @param left The left coordinate, which must be in [0,getWidth())
         * @param top The top coordinate, which must be in [0,getHeight())
         * @param width The width of the rectangle to crop.
         * @param height The height of the rectangle to crop.
         * @return A cropped version of this object.
         */
        crop(e, t, r, n) {
          const i = this.binarizer.getLuminanceSource().crop(e, t, r, n);
          return new ee(this.binarizer.createBinarizer(i));
        }
        /**
         * @return Whether this bitmap supports counter-clockwise rotation.
         */
        isRotateSupported() {
          return this.binarizer.getLuminanceSource().isRotateSupported();
        }
        /**
         * Returns a new object with rotated image data by 90 degrees counterclockwise.
         * Only callable if {@link #isRotateSupported()} is true.
         *
         * @return A rotated version of this object.
         */
        rotateCounterClockwise() {
          const e = this.binarizer.getLuminanceSource().rotateCounterClockwise();
          return new ee(this.binarizer.createBinarizer(e));
        }
        /**
         * Returns a new object with rotated image data by 45 degrees counterclockwise.
         * Only callable if {@link #isRotateSupported()} is true.
         *
         * @return A rotated version of this object.
         */
        rotateCounterClockwise45() {
          const e = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
          return new ee(this.binarizer.createBinarizer(e));
        }
        /*@Override*/
        toString() {
          try {
            return this.getBlackMatrix().toString();
          } catch {
            return "";
          }
        }
      }
      class q extends p {
        static getChecksumInstance() {
          return new q();
        }
      }
      q.kind = "ChecksumException";
      class me {
        constructor(e) {
          this.source = e;
        }
        getLuminanceSource() {
          return this.source;
        }
        getWidth() {
          return this.source.getWidth();
        }
        getHeight() {
          return this.source.getHeight();
        }
      }
      class j {
        // public static void arraycopy(Object src, int srcPos, Object dest, int destPos, int length)
        /**
         * Makes a copy of a array.
         */
        static arraycopy(e, t, r, n, i) {
          for (; i--; )
            r[n++] = e[t++];
        }
        /**
         * Returns the current time in milliseconds.
         */
        static currentTimeMillis() {
          return Date.now();
        }
      }
      class ue extends p {
      }
      ue.kind = "IndexOutOfBoundsException";
      class oe extends ue {
        constructor(e = void 0, t = void 0) {
          super(t), this.index = e, this.message = t;
        }
      }
      oe.kind = "ArrayIndexOutOfBoundsException";
      class G {
        /**
         * Assigns the specified int value to each element of the specified array
         * of ints.
         *
         * @param a the array to be filled
         * @param val the value to be stored in all elements of the array
         */
        static fill(e, t) {
          for (let r = 0, n = e.length; r < n; r++)
            e[r] = t;
        }
        /**
         * Assigns the specified int value to each element of the specified
         * range of the specified array of ints.  The range to be filled
         * extends from index {@code fromIndex}, inclusive, to index
         * {@code toIndex}, exclusive.  (If {@code fromIndex==toIndex}, the
         * range to be filled is empty.)
         *
         * @param a the array to be filled
         * @param fromIndex the index of the first element (inclusive) to be
         *        filled with the specified value
         * @param toIndex the index of the last element (exclusive) to be
         *        filled with the specified value
         * @param val the value to be stored in all elements of the array
         * @throws IllegalArgumentException if {@code fromIndex > toIndex}
         * @throws ArrayIndexOutOfBoundsException if {@code fromIndex < 0} or
         *         {@code toIndex > a.length}
         */
        static fillWithin(e, t, r, n) {
          G.rangeCheck(e.length, t, r);
          for (let i = t; i < r; i++)
            e[i] = n;
        }
        /**
         * Checks that {@code fromIndex} and {@code toIndex} are in
         * the range and throws an exception if they aren't.
         */
        static rangeCheck(e, t, r) {
          if (t > r)
            throw new v("fromIndex(" + t + ") > toIndex(" + r + ")");
          if (t < 0)
            throw new oe(t);
          if (r > e)
            throw new oe(r);
        }
        static asList(...e) {
          return e;
        }
        static create(e, t, r) {
          return Array.from({ length: e }).map((i) => Array.from({ length: t }).fill(r));
        }
        static createInt32Array(e, t, r) {
          return Array.from({ length: e }).map((i) => Int32Array.from({ length: t }).fill(r));
        }
        static equals(e, t) {
          if (!e || !t || !e.length || !t.length || e.length !== t.length)
            return !1;
          for (let r = 0, n = e.length; r < n; r++)
            if (e[r] !== t[r])
              return !1;
          return !0;
        }
        static hashCode(e) {
          if (e === null)
            return 0;
          let t = 1;
          for (const r of e)
            t = 31 * t + r;
          return t;
        }
        static fillUint8Array(e, t) {
          for (let r = 0; r !== e.length; r++)
            e[r] = t;
        }
        static copyOf(e, t) {
          return e.slice(0, t);
        }
        static copyOfUint8Array(e, t) {
          if (e.length <= t) {
            const r = new Uint8Array(t);
            return r.set(e), r;
          }
          return e.slice(0, t);
        }
        static copyOfRange(e, t, r) {
          const n = r - t, i = new Int32Array(n);
          return j.arraycopy(e, t, i, 0, n), i;
        }
        /*
        * Returns the index of of the element in a sorted array or (-n-1) where n is the insertion point
        * for the new element.
        * Parameters:
        *     ar - A sorted array
        *     el - An element to search for
        *     comparator - A comparator function. The function takes two arguments: (a, b) and returns:
        *        a negative number  if a is less than b;
        *        0 if a is equal to b;
        *        a positive number of a is greater than b.
        * The array may contain duplicate elements. If there are more than one equal elements in the array,
        * the returned value can be the index of any one of the equal elements.
        *
        * http://jsfiddle.net/aryzhov/pkfst550/
        */
        static binarySearch(e, t, r) {
          r === void 0 && (r = G.numberComparator);
          let n = 0, i = e.length - 1;
          for (; n <= i; ) {
            const s = i + n >> 1, a = r(t, e[s]);
            if (a > 0)
              n = s + 1;
            else if (a < 0)
              i = s - 1;
            else
              return s;
          }
          return -n - 1;
        }
        static numberComparator(e, t) {
          return e - t;
        }
      }
      class V {
        static numberOfTrailingZeros(e) {
          let t;
          if (e === 0)
            return 32;
          let r = 31;
          return t = e << 16, t !== 0 && (r -= 16, e = t), t = e << 8, t !== 0 && (r -= 8, e = t), t = e << 4, t !== 0 && (r -= 4, e = t), t = e << 2, t !== 0 && (r -= 2, e = t), r - (e << 1 >>> 31);
        }
        static numberOfLeadingZeros(e) {
          if (e === 0)
            return 32;
          let t = 1;
          return e >>> 16 || (t += 16, e <<= 16), e >>> 24 || (t += 8, e <<= 8), e >>> 28 || (t += 4, e <<= 4), e >>> 30 || (t += 2, e <<= 2), t -= e >>> 31, t;
        }
        static toHexString(e) {
          return e.toString(16);
        }
        static toBinaryString(e) {
          return String(parseInt(String(e), 2));
        }
        // Returns the number of one-bits in the two's complement binary representation of the specified int value. This function is sometimes referred to as the population count.
        // Returns:
        // the number of one-bits in the two's complement binary representation of the specified int value.
        static bitCount(e) {
          return e = e - (e >>> 1 & 1431655765), e = (e & 858993459) + (e >>> 2 & 858993459), e = e + (e >>> 4) & 252645135, e = e + (e >>> 8), e = e + (e >>> 16), e & 63;
        }
        static truncDivision(e, t) {
          return Math.trunc(e / t);
        }
        /**
         * Converts A string to an integer.
         * @param s A string to convert into a number.
         * @param radix A value between 2 and 36 that specifies the base of the number in numString. If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. All other strings are considered decimal.
         */
        static parseInt(e, t = void 0) {
          return parseInt(e, t);
        }
      }
      V.MIN_VALUE_32_BITS = -2147483648, V.MAX_VALUE = Number.MAX_SAFE_INTEGER;
      class z {
        // For testing only
        constructor(e, t) {
          e === void 0 ? (this.size = 0, this.bits = new Int32Array(1)) : (this.size = e, t == null ? this.bits = z.makeArray(e) : this.bits = t);
        }
        getSize() {
          return this.size;
        }
        getSizeInBytes() {
          return Math.floor((this.size + 7) / 8);
        }
        ensureCapacity(e) {
          if (e > this.bits.length * 32) {
            const t = z.makeArray(e);
            j.arraycopy(this.bits, 0, t, 0, this.bits.length), this.bits = t;
          }
        }
        /**
         * @param i bit to get
         * @return true iff bit i is set
         */
        get(e) {
          return (this.bits[Math.floor(e / 32)] & 1 << (e & 31)) !== 0;
        }
        /**
         * Sets bit i.
         *
         * @param i bit to set
         */
        set(e) {
          this.bits[Math.floor(e / 32)] |= 1 << (e & 31);
        }
        /**
         * Flips bit i.
         *
         * @param i bit to set
         */
        flip(e) {
          this.bits[Math.floor(e / 32)] ^= 1 << (e & 31);
        }
        /**
         * @param from first bit to check
         * @return index of first bit that is set, starting from the given index, or size if none are set
         *  at or beyond this given index
         * @see #getNextUnset(int)
         */
        getNextSet(e) {
          const t = this.size;
          if (e >= t)
            return t;
          const r = this.bits;
          let n = Math.floor(e / 32), i = r[n];
          i &= ~((1 << (e & 31)) - 1);
          const s = r.length;
          for (; i === 0; ) {
            if (++n === s)
              return t;
            i = r[n];
          }
          const a = n * 32 + V.numberOfTrailingZeros(i);
          return a > t ? t : a;
        }
        /**
         * @param from index to start looking for unset bit
         * @return index of next unset bit, or {@code size} if none are unset until the end
         * @see #getNextSet(int)
         */
        getNextUnset(e) {
          const t = this.size;
          if (e >= t)
            return t;
          const r = this.bits;
          let n = Math.floor(e / 32), i = ~r[n];
          i &= ~((1 << (e & 31)) - 1);
          const s = r.length;
          for (; i === 0; ) {
            if (++n === s)
              return t;
            i = ~r[n];
          }
          const a = n * 32 + V.numberOfTrailingZeros(i);
          return a > t ? t : a;
        }
        /**
         * Sets a block of 32 bits, starting at bit i.
         *
         * @param i first bit to set
         * @param newBits the new value of the next 32 bits. Note again that the least-significant bit
         * corresponds to bit i, the next-least-significant to i+1, and so on.
         */
        setBulk(e, t) {
          this.bits[Math.floor(e / 32)] = t;
        }
        /**
         * Sets a range of bits.
         *
         * @param start start of range, inclusive.
         * @param end end of range, exclusive
         */
        setRange(e, t) {
          if (t < e || e < 0 || t > this.size)
            throw new v();
          if (t === e)
            return;
          t--;
          const r = Math.floor(e / 32), n = Math.floor(t / 32), i = this.bits;
          for (let s = r; s <= n; s++) {
            const a = s > r ? 0 : e & 31, l = (2 << (s < n ? 31 : t & 31)) - (1 << a);
            i[s] |= l;
          }
        }
        /**
         * Clears all bits (sets to false).
         */
        clear() {
          const e = this.bits.length, t = this.bits;
          for (let r = 0; r < e; r++)
            t[r] = 0;
        }
        /**
         * Efficient method to check if a range of bits is set, or not set.
         *
         * @param start start of range, inclusive.
         * @param end end of range, exclusive
         * @param value if true, checks that bits in range are set, otherwise checks that they are not set
         * 
         * @return true iff all bits are set or not set in range, according to value argument
         * @throws IllegalArgumentException if end is less than start or the range is not contained in the array
         */
        isRange(e, t, r) {
          if (t < e || e < 0 || t > this.size)
            throw new v();
          if (t === e)
            return !0;
          t--;
          const n = Math.floor(e / 32), i = Math.floor(t / 32), s = this.bits;
          for (let a = n; a <= i; a++) {
            const o = a > n ? 0 : e & 31, u = (2 << (a < i ? 31 : t & 31)) - (1 << o) & 4294967295;
            if ((s[a] & u) !== (r ? u : 0))
              return !1;
          }
          return !0;
        }
        appendBit(e) {
          this.ensureCapacity(this.size + 1), e && (this.bits[Math.floor(this.size / 32)] |= 1 << (this.size & 31)), this.size++;
        }
        /**
         * Appends the least-significant bits, from value, in order from most-significant to
         * least-significant. For example, appending 6 bits from 0x000001E will append the bits
         * 0, 1, 1, 1, 1, 0 in that order.
         *
         * @param value {@code int} containing bits to append
         * @param numBits bits from value to append
         */
        appendBits(e, t) {
          if (t < 0 || t > 32)
            throw new v("Num bits must be between 0 and 32");
          this.ensureCapacity(this.size + t);
          for (let r = t; r > 0; r--)
            this.appendBit((e >> r - 1 & 1) === 1);
        }
        appendBitArray(e) {
          const t = e.size;
          this.ensureCapacity(this.size + t);
          for (let r = 0; r < t; r++)
            this.appendBit(e.get(r));
        }
        xor(e) {
          if (this.size !== e.size)
            throw new v("Sizes don't match");
          const t = this.bits;
          for (let r = 0, n = t.length; r < n; r++)
            t[r] ^= e.bits[r];
        }
        /**
         *
         * @param bitOffset first bit to start writing
         * @param array array to write into. Bytes are written most-significant byte first. This is the opposite
         *  of the internal representation, which is exposed by {@link #getBitArray()}
         * @param offset position in array to start writing
         * @param numBytes how many bytes to write
         */
        toBytes(e, t, r, n) {
          for (let i = 0; i < n; i++) {
            let s = 0;
            for (let a = 0; a < 8; a++)
              this.get(e) && (s |= 1 << 7 - a), e++;
            t[r + i] = /*(byte)*/
            s;
          }
        }
        /**
         * @return underlying array of ints. The first element holds the first 32 bits, and the least
         *         significant bit is bit 0.
         */
        getBitArray() {
          return this.bits;
        }
        /**
         * Reverses all bits in the array.
         */
        reverse() {
          const e = new Int32Array(this.bits.length), t = Math.floor((this.size - 1) / 32), r = t + 1, n = this.bits;
          for (let i = 0; i < r; i++) {
            let s = n[i];
            s = s >> 1 & 1431655765 | (s & 1431655765) << 1, s = s >> 2 & 858993459 | (s & 858993459) << 2, s = s >> 4 & 252645135 | (s & 252645135) << 4, s = s >> 8 & 16711935 | (s & 16711935) << 8, s = s >> 16 & 65535 | (s & 65535) << 16, e[t - i] = /*(int)*/
            s;
          }
          if (this.size !== r * 32) {
            const i = r * 32 - this.size;
            let s = e[0] >>> i;
            for (let a = 1; a < r; a++) {
              const o = e[a];
              s |= o << 32 - i, e[a - 1] = s, s = o >>> i;
            }
            e[r - 1] = s;
          }
          this.bits = e;
        }
        static makeArray(e) {
          return new Int32Array(Math.floor((e + 31) / 32));
        }
        /*@Override*/
        equals(e) {
          if (!(e instanceof z))
            return !1;
          const t = e;
          return this.size === t.size && G.equals(this.bits, t.bits);
        }
        /*@Override*/
        hashCode() {
          return 31 * this.size + G.hashCode(this.bits);
        }
        /*@Override*/
        toString() {
          let e = "";
          for (let t = 0, r = this.size; t < r; t++)
            (t & 7) === 0 && (e += " "), e += this.get(t) ? "X" : ".";
          return e;
        }
        /*@Override*/
        clone() {
          return new z(this.size, this.bits.slice());
        }
      }
      var be;
      (function(d) {
        d[d.OTHER = 0] = "OTHER", d[d.PURE_BARCODE = 1] = "PURE_BARCODE", d[d.POSSIBLE_FORMATS = 2] = "POSSIBLE_FORMATS", d[d.TRY_HARDER = 3] = "TRY_HARDER", d[d.CHARACTER_SET = 4] = "CHARACTER_SET", d[d.ALLOWED_LENGTHS = 5] = "ALLOWED_LENGTHS", d[d.ASSUME_CODE_39_CHECK_DIGIT = 6] = "ASSUME_CODE_39_CHECK_DIGIT", d[d.ASSUME_GS1 = 7] = "ASSUME_GS1", d[d.RETURN_CODABAR_START_END = 8] = "RETURN_CODABAR_START_END", d[d.NEED_RESULT_POINT_CALLBACK = 9] = "NEED_RESULT_POINT_CALLBACK", d[d.ALLOWED_EAN_EXTENSIONS = 10] = "ALLOWED_EAN_EXTENSIONS";
      })(be || (be = {}));
      var ce = be;
      class L extends p {
        static getFormatInstance() {
          return new L();
        }
      }
      L.kind = "FormatException";
      var K;
      (function(d) {
        d[d.Cp437 = 0] = "Cp437", d[d.ISO8859_1 = 1] = "ISO8859_1", d[d.ISO8859_2 = 2] = "ISO8859_2", d[d.ISO8859_3 = 3] = "ISO8859_3", d[d.ISO8859_4 = 4] = "ISO8859_4", d[d.ISO8859_5 = 5] = "ISO8859_5", d[d.ISO8859_6 = 6] = "ISO8859_6", d[d.ISO8859_7 = 7] = "ISO8859_7", d[d.ISO8859_8 = 8] = "ISO8859_8", d[d.ISO8859_9 = 9] = "ISO8859_9", d[d.ISO8859_10 = 10] = "ISO8859_10", d[d.ISO8859_11 = 11] = "ISO8859_11", d[d.ISO8859_13 = 12] = "ISO8859_13", d[d.ISO8859_14 = 13] = "ISO8859_14", d[d.ISO8859_15 = 14] = "ISO8859_15", d[d.ISO8859_16 = 15] = "ISO8859_16", d[d.SJIS = 16] = "SJIS", d[d.Cp1250 = 17] = "Cp1250", d[d.Cp1251 = 18] = "Cp1251", d[d.Cp1252 = 19] = "Cp1252", d[d.Cp1256 = 20] = "Cp1256", d[d.UnicodeBigUnmarked = 21] = "UnicodeBigUnmarked", d[d.UTF8 = 22] = "UTF8", d[d.ASCII = 23] = "ASCII", d[d.Big5 = 24] = "Big5", d[d.GB18030 = 25] = "GB18030", d[d.EUC_KR = 26] = "EUC_KR";
      })(K || (K = {}));
      class F {
        constructor(e, t, r, ...n) {
          this.valueIdentifier = e, this.name = r, typeof t == "number" ? this.values = Int32Array.from([t]) : this.values = t, this.otherEncodingNames = n, F.VALUE_IDENTIFIER_TO_ECI.set(e, this), F.NAME_TO_ECI.set(r, this);
          const i = this.values;
          for (let s = 0, a = i.length; s !== a; s++) {
            const o = i[s];
            F.VALUES_TO_ECI.set(o, this);
          }
          for (const s of n)
            F.NAME_TO_ECI.set(s, this);
        }
        // CharacterSetECI(value: number /*int*/) {
        //   this(new Int32Array {value})
        // }
        // CharacterSetECI(value: number /*int*/, String... otherEncodingNames) {
        //   this.values = new Int32Array {value}
        //   this.otherEncodingNames = otherEncodingNames
        // }
        // CharacterSetECI(values: Int32Array, String... otherEncodingNames) {
        //   this.values = values
        //   this.otherEncodingNames = otherEncodingNames
        // }
        getValueIdentifier() {
          return this.valueIdentifier;
        }
        getName() {
          return this.name;
        }
        getValue() {
          return this.values[0];
        }
        /**
         * @param value character set ECI value
         * @return {@code CharacterSetECI} representing ECI of given value, or null if it is legal but
         *   unsupported
         * @throws FormatException if ECI value is invalid
         */
        static getCharacterSetECIByValue(e) {
          if (e < 0 || e >= 900)
            throw new L("incorect value");
          const t = F.VALUES_TO_ECI.get(e);
          if (t === void 0)
            throw new L("incorect value");
          return t;
        }
        /**
         * @param name character set ECI encoding name
         * @return CharacterSetECI representing ECI for character encoding, or null if it is legal
         *   but unsupported
         */
        static getCharacterSetECIByName(e) {
          const t = F.NAME_TO_ECI.get(e);
          if (t === void 0)
            throw new L("incorect value");
          return t;
        }
        equals(e) {
          if (!(e instanceof F))
            return !1;
          const t = e;
          return this.getName() === t.getName();
        }
      }
      F.VALUE_IDENTIFIER_TO_ECI = /* @__PURE__ */ new Map(), F.VALUES_TO_ECI = /* @__PURE__ */ new Map(), F.NAME_TO_ECI = /* @__PURE__ */ new Map(), F.Cp437 = new F(K.Cp437, Int32Array.from([0, 2]), "Cp437"), F.ISO8859_1 = new F(K.ISO8859_1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1"), F.ISO8859_2 = new F(K.ISO8859_2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2"), F.ISO8859_3 = new F(K.ISO8859_3, 5, "ISO-8859-3", "ISO88593", "ISO8859_3"), F.ISO8859_4 = new F(K.ISO8859_4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4"), F.ISO8859_5 = new F(K.ISO8859_5, 7, "ISO-8859-5", "ISO88595", "ISO8859_5"), F.ISO8859_6 = new F(K.ISO8859_6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6"), F.ISO8859_7 = new F(K.ISO8859_7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7"), F.ISO8859_8 = new F(K.ISO8859_8, 10, "ISO-8859-8", "ISO88598", "ISO8859_8"), F.ISO8859_9 = new F(K.ISO8859_9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9"), F.ISO8859_10 = new F(K.ISO8859_10, 12, "ISO-8859-10", "ISO885910", "ISO8859_10"), F.ISO8859_11 = new F(K.ISO8859_11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11"), F.ISO8859_13 = new F(K.ISO8859_13, 15, "ISO-8859-13", "ISO885913", "ISO8859_13"), F.ISO8859_14 = new F(K.ISO8859_14, 16, "ISO-8859-14", "ISO885914", "ISO8859_14"), F.ISO8859_15 = new F(K.ISO8859_15, 17, "ISO-8859-15", "ISO885915", "ISO8859_15"), F.ISO8859_16 = new F(K.ISO8859_16, 18, "ISO-8859-16", "ISO885916", "ISO8859_16"), F.SJIS = new F(K.SJIS, 20, "SJIS", "Shift_JIS"), F.Cp1250 = new F(K.Cp1250, 21, "Cp1250", "windows-1250"), F.Cp1251 = new F(K.Cp1251, 22, "Cp1251", "windows-1251"), F.Cp1252 = new F(K.Cp1252, 23, "Cp1252", "windows-1252"), F.Cp1256 = new F(K.Cp1256, 24, "Cp1256", "windows-1256"), F.UnicodeBigUnmarked = new F(K.UnicodeBigUnmarked, 25, "UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig"), F.UTF8 = new F(K.UTF8, 26, "UTF8", "UTF-8"), F.ASCII = new F(K.ASCII, Int32Array.from([27, 170]), "ASCII", "US-ASCII"), F.Big5 = new F(K.Big5, 28, "Big5"), F.GB18030 = new F(K.GB18030, 29, "GB18030", "GB2312", "EUC_CN", "GBK"), F.EUC_KR = new F(K.EUC_KR, 30, "EUC_KR", "EUC-KR");
      class it extends p {
      }
      it.kind = "UnsupportedOperationException";
      class Ce {
        /**
         * Decodes some Uint8Array to a string format.
         */
        static decode(e, t) {
          const r = this.encodingName(t);
          return this.customDecoder ? this.customDecoder(e, r) : typeof TextDecoder > "u" || this.shouldDecodeOnFallback(r) ? this.decodeFallback(e, r) : new TextDecoder(r).decode(e);
        }
        /**
         * Checks if the decoding method should use the fallback for decoding
         * once Node TextDecoder doesn't support all encoding formats.
         *
         * @param encodingName
         */
        static shouldDecodeOnFallback(e) {
          return !Ce.isBrowser() && e === "ISO-8859-1";
        }
        /**
         * Encodes some string into a Uint8Array.
         */
        static encode(e, t) {
          const r = this.encodingName(t);
          return this.customEncoder ? this.customEncoder(e, r) : typeof TextEncoder > "u" ? this.encodeFallback(e) : new TextEncoder().encode(e);
        }
        static isBrowser() {
          return typeof window < "u" && {}.toString.call(window) === "[object Window]";
        }
        /**
         * Returns the string value from some encoding character set.
         */
        static encodingName(e) {
          return typeof e == "string" ? e : e.getName();
        }
        /**
         * Returns character set from some encoding character set.
         */
        static encodingCharacterSet(e) {
          return e instanceof F ? e : F.getCharacterSetECIByName(e);
        }
        /**
         * Runs a fallback for the native decoding funcion.
         */
        static decodeFallback(e, t) {
          const r = this.encodingCharacterSet(t);
          if (Ce.isDecodeFallbackSupported(r)) {
            let n = "";
            for (let i = 0, s = e.length; i < s; i++) {
              let a = e[i].toString(16);
              a.length < 2 && (a = "0" + a), n += "%" + a;
            }
            return decodeURIComponent(n);
          }
          if (r.equals(F.UnicodeBigUnmarked))
            return String.fromCharCode.apply(null, new Uint16Array(e.buffer));
          throw new it(`Encoding ${this.encodingName(t)} not supported by fallback.`);
        }
        static isDecodeFallbackSupported(e) {
          return e.equals(F.UTF8) || e.equals(F.ISO8859_1) || e.equals(F.ASCII);
        }
        /**
         * Runs a fallback for the native encoding funcion.
         *
         * @see https://stackoverflow.com/a/17192845/4367683
         */
        static encodeFallback(e) {
          const r = btoa(unescape(encodeURIComponent(e))).split(""), n = [];
          for (let i = 0; i < r.length; i++)
            n.push(r[i].charCodeAt(0));
          return new Uint8Array(n);
        }
      }
      class $ {
        // SHIFT_JIS.equalsIgnoreCase(PLATFORM_DEFAULT_ENCODING) ||
        // EUC_JP.equalsIgnoreCase(PLATFORM_DEFAULT_ENCODING);
        static castAsNonUtf8Char(e, t = null) {
          const r = t ? t.getName() : this.ISO88591;
          return Ce.decode(new Uint8Array([e]), r);
        }
        /**
         * @param bytes bytes encoding a string, whose encoding should be guessed
         * @param hints decode hints if applicable
         * @return name of guessed encoding; at the moment will only guess one of:
         *  {@link #SHIFT_JIS}, {@link #UTF8}, {@link #ISO88591}, or the platform
         *  default encoding if none of these can possibly be correct
         */
        static guessEncoding(e, t) {
          if (t != null && t.get(ce.CHARACTER_SET) !== void 0)
            return t.get(ce.CHARACTER_SET).toString();
          const r = e.length;
          let n = !0, i = !0, s = !0, a = 0, o = 0, l = 0, u = 0, g = 0, x = 0, y = 0, I = 0, b = 0, T = 0, R = 0;
          const H = e.length > 3 && e[0] === /*(byte) */
          239 && e[1] === /*(byte) */
          187 && e[2] === /*(byte) */
          191;
          for (let W = 0; W < r && (n || i || s); W++) {
            const U = e[W] & 255;
            s && (a > 0 ? (U & 128) === 0 ? s = !1 : a-- : (U & 128) !== 0 && ((U & 64) === 0 ? s = !1 : (a++, (U & 32) === 0 ? o++ : (a++, (U & 16) === 0 ? l++ : (a++, (U & 8) === 0 ? u++ : s = !1))))), n && (U > 127 && U < 160 ? n = !1 : U > 159 && (U < 192 || U === 215 || U === 247) && R++), i && (g > 0 ? U < 64 || U === 127 || U > 252 ? i = !1 : g-- : U === 128 || U === 160 || U > 239 ? i = !1 : U > 160 && U < 224 ? (x++, I = 0, y++, y > b && (b = y)) : U > 127 ? (g++, y = 0, I++, I > T && (T = I)) : (y = 0, I = 0));
          }
          return s && a > 0 && (s = !1), i && g > 0 && (i = !1), s && (H || o + l + u > 0) ? $.UTF8 : i && ($.ASSUME_SHIFT_JIS || b >= 3 || T >= 3) ? $.SHIFT_JIS : n && i ? b === 2 && x === 2 || R * 10 >= r ? $.SHIFT_JIS : $.ISO88591 : n ? $.ISO88591 : i ? $.SHIFT_JIS : s ? $.UTF8 : $.PLATFORM_DEFAULT_ENCODING;
        }
        /**
         *
         * @see https://stackoverflow.com/a/13439711/4367683
         *
         * @param append The new string to append.
         * @param args Argumets values to be formated.
         */
        static format(e, ...t) {
          let r = -1;
          function n(s, a, o, l, u, g) {
            if (s === "%%")
              return "%";
            if (t[++r] === void 0)
              return;
            s = l ? parseInt(l.substr(1)) : void 0;
            let x = u ? parseInt(u.substr(1)) : void 0, y;
            switch (g) {
              case "s":
                y = t[r];
                break;
              case "c":
                y = t[r][0];
                break;
              case "f":
                y = parseFloat(t[r]).toFixed(s);
                break;
              case "p":
                y = parseFloat(t[r]).toPrecision(s);
                break;
              case "e":
                y = parseFloat(t[r]).toExponential(s);
                break;
              case "x":
                y = parseInt(t[r]).toString(x || 16);
                break;
              case "d":
                y = parseFloat(parseInt(t[r], x || 10).toPrecision(s)).toFixed(0);
                break;
            }
            y = typeof y == "object" ? JSON.stringify(y) : (+y).toString(x);
            let I = parseInt(o), b = o && o[0] + "" == "0" ? "0" : " ";
            for (; y.length < I; )
              y = a !== void 0 ? y + b : b + y;
            return y;
          }
          let i = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
          return e.replace(i, n);
        }
        /**
         *
         */
        static getBytes(e, t) {
          return Ce.encode(e, t);
        }
        /**
         * Returns the charcode at the specified index or at index zero.
         */
        static getCharCode(e, t = 0) {
          return e.charCodeAt(t);
        }
        /**
         * Returns char for given charcode
         */
        static getCharAt(e) {
          return String.fromCharCode(e);
        }
      }
      $.SHIFT_JIS = F.SJIS.getName(), $.GB2312 = "GB2312", $.ISO88591 = F.ISO8859_1.getName(), $.EUC_JP = "EUC_JP", $.UTF8 = F.UTF8.getName(), $.PLATFORM_DEFAULT_ENCODING = $.UTF8, $.ASSUME_SHIFT_JIS = !1;
      class he {
        constructor(e = "") {
          this.value = e;
        }
        enableDecoding(e) {
          return this.encoding = e, this;
        }
        append(e) {
          return typeof e == "string" ? this.value += e.toString() : this.encoding ? this.value += $.castAsNonUtf8Char(e, this.encoding) : this.value += String.fromCharCode(e), this;
        }
        appendChars(e, t, r) {
          for (let n = t; t < t + r; n++)
            this.append(e[n]);
          return this;
        }
        length() {
          return this.value.length;
        }
        charAt(e) {
          return this.value.charAt(e);
        }
        deleteCharAt(e) {
          this.value = this.value.substr(0, e) + this.value.substring(e + 1);
        }
        setCharAt(e, t) {
          this.value = this.value.substr(0, e) + t + this.value.substr(e + 1);
        }
        substring(e, t) {
          return this.value.substring(e, t);
        }
        /**
         * @note helper method for RSS Expanded
         */
        setLengthToZero() {
          this.value = "";
        }
        toString() {
          return this.value;
        }
        insert(e, t) {
          this.value = this.value.substr(0, e) + t + this.value.substr(e + t.length);
        }
      }
      class Oe {
        /**
         * Creates an empty square {@link BitMatrix}.
         *
         * @param dimension height and width
         */
        // public constructor(dimension: number /*int*/) {
        //   this(dimension, dimension)
        // }
        /**
         * Creates an empty {@link BitMatrix}.
         *
         * @param width bit matrix width
         * @param height bit matrix height
         */
        // public constructor(width: number /*int*/, height: number /*int*/) {
        //   if (width < 1 || height < 1) {
        //     throw new IllegalArgumentException("Both dimensions must be greater than 0")
        //   }
        //   this.width = width
        //   this.height = height
        //   this.rowSize = (width + 31) / 32
        //   bits = new int[rowSize * height];
        // }
        constructor(e, t, r, n) {
          if (this.width = e, this.height = t, this.rowSize = r, this.bits = n, t == null && (t = e), this.height = t, e < 1 || t < 1)
            throw new v("Both dimensions must be greater than 0");
          r == null && (r = Math.floor((e + 31) / 32)), this.rowSize = r, n == null && (this.bits = new Int32Array(this.rowSize * this.height));
        }
        /**
         * Interprets a 2D array of booleans as a {@link BitMatrix}, where "true" means an "on" bit.
         *
         * @function parse
         * @param image bits of the image, as a row-major 2D array. Elements are arrays representing rows
         * @return {@link BitMatrix} representation of image
         */
        static parseFromBooleanArray(e) {
          const t = e.length, r = e[0].length, n = new Oe(r, t);
          for (let i = 0; i < t; i++) {
            const s = e[i];
            for (let a = 0; a < r; a++)
              s[a] && n.set(a, i);
          }
          return n;
        }
        /**
         *
         * @function parse
         * @param stringRepresentation
         * @param setString
         * @param unsetString
         */
        static parseFromString(e, t, r) {
          if (e === null)
            throw new v("stringRepresentation cannot be null");
          const n = new Array(e.length);
          let i = 0, s = 0, a = -1, o = 0, l = 0;
          for (; l < e.length; )
            if (e.charAt(l) === `
` || e.charAt(l) === "\r") {
              if (i > s) {
                if (a === -1)
                  a = i - s;
                else if (i - s !== a)
                  throw new v("row lengths do not match");
                s = i, o++;
              }
              l++;
            } else if (e.substring(l, l + t.length) === t)
              l += t.length, n[i] = !0, i++;
            else if (e.substring(l, l + r.length) === r)
              l += r.length, n[i] = !1, i++;
            else
              throw new v("illegal character encountered: " + e.substring(l));
          if (i > s) {
            if (a === -1)
              a = i - s;
            else if (i - s !== a)
              throw new v("row lengths do not match");
            o++;
          }
          const u = new Oe(a, o);
          for (let g = 0; g < i; g++)
            n[g] && u.set(Math.floor(g % a), Math.floor(g / a));
          return u;
        }
        /**
         * <p>Gets the requested bit, where true means black.</p>
         *
         * @param x The horizontal component (i.e. which column)
         * @param y The vertical component (i.e. which row)
         * @return value of given bit in matrix
         */
        get(e, t) {
          const r = t * this.rowSize + Math.floor(e / 32);
          return (this.bits[r] >>> (e & 31) & 1) !== 0;
        }
        /**
         * <p>Sets the given bit to true.</p>
         *
         * @param x The horizontal component (i.e. which column)
         * @param y The vertical component (i.e. which row)
         */
        set(e, t) {
          const r = t * this.rowSize + Math.floor(e / 32);
          this.bits[r] |= 1 << (e & 31) & 4294967295;
        }
        unset(e, t) {
          const r = t * this.rowSize + Math.floor(e / 32);
          this.bits[r] &= ~(1 << (e & 31) & 4294967295);
        }
        /**
         * <p>Flips the given bit.</p>
         *
         * @param x The horizontal component (i.e. which column)
         * @param y The vertical component (i.e. which row)
         */
        flip(e, t) {
          const r = t * this.rowSize + Math.floor(e / 32);
          this.bits[r] ^= 1 << (e & 31) & 4294967295;
        }
        /**
         * Exclusive-or (XOR): Flip the bit in this {@code BitMatrix} if the corresponding
         * mask bit is set.
         *
         * @param mask XOR mask
         */
        xor(e) {
          if (this.width !== e.getWidth() || this.height !== e.getHeight() || this.rowSize !== e.getRowSize())
            throw new v("input matrix dimensions do not match");
          const t = new z(Math.floor(this.width / 32) + 1), r = this.rowSize, n = this.bits;
          for (let i = 0, s = this.height; i < s; i++) {
            const a = i * r, o = e.getRow(i, t).getBitArray();
            for (let l = 0; l < r; l++)
              n[a + l] ^= o[l];
          }
        }
        /**
         * Clears all bits (sets to false).
         */
        clear() {
          const e = this.bits, t = e.length;
          for (let r = 0; r < t; r++)
            e[r] = 0;
        }
        /**
         * <p>Sets a square region of the bit matrix to true.</p>
         *
         * @param left The horizontal position to begin at (inclusive)
         * @param top The vertical position to begin at (inclusive)
         * @param width The width of the region
         * @param height The height of the region
         */
        setRegion(e, t, r, n) {
          if (t < 0 || e < 0)
            throw new v("Left and top must be nonnegative");
          if (n < 1 || r < 1)
            throw new v("Height and width must be at least 1");
          const i = e + r, s = t + n;
          if (s > this.height || i > this.width)
            throw new v("The region must fit inside the matrix");
          const a = this.rowSize, o = this.bits;
          for (let l = t; l < s; l++) {
            const u = l * a;
            for (let g = e; g < i; g++)
              o[u + Math.floor(g / 32)] |= 1 << (g & 31) & 4294967295;
          }
        }
        /**
         * A fast method to retrieve one row of data from the matrix as a BitArray.
         *
         * @param y The row to retrieve
         * @param row An optional caller-allocated BitArray, will be allocated if null or too small
         * @return The resulting BitArray - this reference should always be used even when passing
         *         your own row
         */
        getRow(e, t) {
          t == null || t.getSize() < this.width ? t = new z(this.width) : t.clear();
          const r = this.rowSize, n = this.bits, i = e * r;
          for (let s = 0; s < r; s++)
            t.setBulk(s * 32, n[i + s]);
          return t;
        }
        /**
         * @param y row to set
         * @param row {@link BitArray} to copy from
         */
        setRow(e, t) {
          j.arraycopy(t.getBitArray(), 0, this.bits, e * this.rowSize, this.rowSize);
        }
        /**
         * Modifies this {@code BitMatrix} to represent the same but rotated 180 degrees
         */
        rotate180() {
          const e = this.getWidth(), t = this.getHeight();
          let r = new z(e), n = new z(e);
          for (let i = 0, s = Math.floor((t + 1) / 2); i < s; i++)
            r = this.getRow(i, r), n = this.getRow(t - 1 - i, n), r.reverse(), n.reverse(), this.setRow(i, n), this.setRow(t - 1 - i, r);
        }
        /**
         * This is useful in detecting the enclosing rectangle of a 'pure' barcode.
         *
         * @return {@code left,top,width,height} enclosing rectangle of all 1 bits, or null if it is all white
         */
        getEnclosingRectangle() {
          const e = this.width, t = this.height, r = this.rowSize, n = this.bits;
          let i = e, s = t, a = -1, o = -1;
          for (let l = 0; l < t; l++)
            for (let u = 0; u < r; u++) {
              const g = n[l * r + u];
              if (g !== 0) {
                if (l < s && (s = l), l > o && (o = l), u * 32 < i) {
                  let x = 0;
                  for (; (g << 31 - x & 4294967295) === 0; )
                    x++;
                  u * 32 + x < i && (i = u * 32 + x);
                }
                if (u * 32 + 31 > a) {
                  let x = 31;
                  for (; !(g >>> x); )
                    x--;
                  u * 32 + x > a && (a = u * 32 + x);
                }
              }
            }
          return a < i || o < s ? null : Int32Array.from([i, s, a - i + 1, o - s + 1]);
        }
        /**
         * This is useful in detecting a corner of a 'pure' barcode.
         *
         * @return {@code x,y} coordinate of top-left-most 1 bit, or null if it is all white
         */
        getTopLeftOnBit() {
          const e = this.rowSize, t = this.bits;
          let r = 0;
          for (; r < t.length && t[r] === 0; )
            r++;
          if (r === t.length)
            return null;
          const n = r / e;
          let i = r % e * 32;
          const s = t[r];
          let a = 0;
          for (; (s << 31 - a & 4294967295) === 0; )
            a++;
          return i += a, Int32Array.from([i, n]);
        }
        getBottomRightOnBit() {
          const e = this.rowSize, t = this.bits;
          let r = t.length - 1;
          for (; r >= 0 && t[r] === 0; )
            r--;
          if (r < 0)
            return null;
          const n = Math.floor(r / e);
          let i = Math.floor(r % e) * 32;
          const s = t[r];
          let a = 31;
          for (; !(s >>> a); )
            a--;
          return i += a, Int32Array.from([i, n]);
        }
        /**
         * @return The width of the matrix
         */
        getWidth() {
          return this.width;
        }
        /**
         * @return The height of the matrix
         */
        getHeight() {
          return this.height;
        }
        /**
         * @return The row size of the matrix
         */
        getRowSize() {
          return this.rowSize;
        }
        /*@Override*/
        equals(e) {
          if (!(e instanceof Oe))
            return !1;
          const t = e;
          return this.width === t.width && this.height === t.height && this.rowSize === t.rowSize && G.equals(this.bits, t.bits);
        }
        /*@Override*/
        hashCode() {
          let e = this.width;
          return e = 31 * e + this.width, e = 31 * e + this.height, e = 31 * e + this.rowSize, e = 31 * e + G.hashCode(this.bits), e;
        }
        /**
         * @return string representation using "X" for set and " " for unset bits
         */
        /*@Override*/
        // public toString(): string {
        //   return toString(": "X, "  ")
        // }
        /**
         * @param setString representation of a set bit
         * @param unsetString representation of an unset bit
         * @return string representation of entire matrix utilizing given strings
         */
        // public toString(setString: string = "X ", unsetString: string = "  "): string {
        //   return this.buildToString(setString, unsetString, "\n")
        // }
        /**
         * @param setString representation of a set bit
         * @param unsetString representation of an unset bit
         * @param lineSeparator newline character in string representation
         * @return string representation of entire matrix utilizing given strings and line separator
         * @deprecated call {@link #toString(String,String)} only, which uses \n line separator always
         */
        // @Deprecated
        toString(e = "X ", t = "  ", r = `
`) {
          return this.buildToString(e, t, r);
        }
        buildToString(e, t, r) {
          let n = new he();
          for (let i = 0, s = this.height; i < s; i++) {
            for (let a = 0, o = this.width; a < o; a++)
              n.append(this.get(a, i) ? e : t);
            n.append(r);
          }
          return n.toString();
        }
        /*@Override*/
        clone() {
          return new Oe(this.width, this.height, this.rowSize, this.bits.slice());
        }
      }
      class D extends p {
        static getNotFoundInstance() {
          return new D();
        }
      }
      D.kind = "NotFoundException";
      class Ve extends me {
        constructor(e) {
          super(e), this.luminances = Ve.EMPTY, this.buckets = new Int32Array(Ve.LUMINANCE_BUCKETS);
        }
        // Applies simple sharpening to the row data to improve performance of the 1D Readers.
        /*@Override*/
        getBlackRow(e, t) {
          const r = this.getLuminanceSource(), n = r.getWidth();
          t == null || t.getSize() < n ? t = new z(n) : t.clear(), this.initArrays(n);
          const i = r.getRow(e, this.luminances), s = this.buckets;
          for (let o = 0; o < n; o++)
            s[(i[o] & 255) >> Ve.LUMINANCE_SHIFT]++;
          const a = Ve.estimateBlackPoint(s);
          if (n < 3)
            for (let o = 0; o < n; o++)
              (i[o] & 255) < a && t.set(o);
          else {
            let o = i[0] & 255, l = i[1] & 255;
            for (let u = 1; u < n - 1; u++) {
              const g = i[u + 1] & 255;
              (l * 4 - o - g) / 2 < a && t.set(u), o = l, l = g;
            }
          }
          return t;
        }
        // Does not sharpen the data, as this call is intended to only be used by 2D Readers.
        /*@Override*/
        getBlackMatrix() {
          const e = this.getLuminanceSource(), t = e.getWidth(), r = e.getHeight(), n = new Oe(t, r);
          this.initArrays(t);
          const i = this.buckets;
          for (let o = 1; o < 5; o++) {
            const l = Math.floor(r * o / 5), u = e.getRow(l, this.luminances), g = Math.floor(t * 4 / 5);
            for (let x = Math.floor(t / 5); x < g; x++) {
              const y = u[x] & 255;
              i[y >> Ve.LUMINANCE_SHIFT]++;
            }
          }
          const s = Ve.estimateBlackPoint(i), a = e.getMatrix();
          for (let o = 0; o < r; o++) {
            const l = o * t;
            for (let u = 0; u < t; u++)
              (a[l + u] & 255) < s && n.set(u, o);
          }
          return n;
        }
        /*@Override*/
        createBinarizer(e) {
          return new Ve(e);
        }
        initArrays(e) {
          this.luminances.length < e && (this.luminances = new Uint8ClampedArray(e));
          const t = this.buckets;
          for (let r = 0; r < Ve.LUMINANCE_BUCKETS; r++)
            t[r] = 0;
        }
        static estimateBlackPoint(e) {
          const t = e.length;
          let r = 0, n = 0, i = 0;
          for (let u = 0; u < t; u++)
            e[u] > i && (n = u, i = e[u]), e[u] > r && (r = e[u]);
          let s = 0, a = 0;
          for (let u = 0; u < t; u++) {
            const g = u - n, x = e[u] * g * g;
            x > a && (s = u, a = x);
          }
          if (n > s) {
            const u = n;
            n = s, s = u;
          }
          if (s - n <= t / 16)
            throw new D();
          let o = s - 1, l = -1;
          for (let u = s - 1; u > n; u--) {
            const g = u - n, x = g * g * (s - u) * (r - e[u]);
            x > l && (o = u, l = x);
          }
          return o << Ve.LUMINANCE_SHIFT;
        }
      }
      Ve.LUMINANCE_BITS = 5, Ve.LUMINANCE_SHIFT = 8 - Ve.LUMINANCE_BITS, Ve.LUMINANCE_BUCKETS = 1 << Ve.LUMINANCE_BITS, Ve.EMPTY = Uint8ClampedArray.from([0]);
      class se extends Ve {
        constructor(e) {
          super(e), this.matrix = null;
        }
        /**
         * Calculates the final BitMatrix once for all requests. This could be called once from the
         * constructor instead, but there are some advantages to doing it lazily, such as making
         * profiling easier, and not doing heavy lifting when callers don't expect it.
         */
        /*@Override*/
        getBlackMatrix() {
          if (this.matrix !== null)
            return this.matrix;
          const e = this.getLuminanceSource(), t = e.getWidth(), r = e.getHeight();
          if (t >= se.MINIMUM_DIMENSION && r >= se.MINIMUM_DIMENSION) {
            const n = e.getMatrix();
            let i = t >> se.BLOCK_SIZE_POWER;
            (t & se.BLOCK_SIZE_MASK) !== 0 && i++;
            let s = r >> se.BLOCK_SIZE_POWER;
            (r & se.BLOCK_SIZE_MASK) !== 0 && s++;
            const a = se.calculateBlackPoints(n, i, s, t, r), o = new Oe(t, r);
            se.calculateThresholdForBlock(n, i, s, t, r, a, o), this.matrix = o;
          } else
            this.matrix = super.getBlackMatrix();
          return this.matrix;
        }
        /*@Override*/
        createBinarizer(e) {
          return new se(e);
        }
        /**
         * For each block in the image, calculate the average black point using a 5x5 grid
         * of the blocks around it. Also handles the corner cases (fractional blocks are computed based
         * on the last pixels in the row/column which are also used in the previous block).
         */
        static calculateThresholdForBlock(e, t, r, n, i, s, a) {
          const o = i - se.BLOCK_SIZE, l = n - se.BLOCK_SIZE;
          for (let u = 0; u < r; u++) {
            let g = u << se.BLOCK_SIZE_POWER;
            g > o && (g = o);
            const x = se.cap(u, 2, r - 3);
            for (let y = 0; y < t; y++) {
              let I = y << se.BLOCK_SIZE_POWER;
              I > l && (I = l);
              const b = se.cap(y, 2, t - 3);
              let T = 0;
              for (let H = -2; H <= 2; H++) {
                const W = s[x + H];
                T += W[b - 2] + W[b - 1] + W[b] + W[b + 1] + W[b + 2];
              }
              const R = T / 25;
              se.thresholdBlock(e, I, g, R, n, a);
            }
          }
        }
        static cap(e, t, r) {
          return e < t ? t : e > r ? r : e;
        }
        /**
         * Applies a single threshold to a block of pixels.
         */
        static thresholdBlock(e, t, r, n, i, s) {
          for (let a = 0, o = r * i + t; a < se.BLOCK_SIZE; a++, o += i)
            for (let l = 0; l < se.BLOCK_SIZE; l++)
              (e[o + l] & 255) <= n && s.set(t + l, r + a);
        }
        /**
         * Calculates a single black point for each block of pixels and saves it away.
         * See the following thread for a discussion of this algorithm:
         *  http://groups.google.com/group/zxing/browse_thread/thread/d06efa2c35a7ddc0
         */
        static calculateBlackPoints(e, t, r, n, i) {
          const s = i - se.BLOCK_SIZE, a = n - se.BLOCK_SIZE, o = new Array(r);
          for (let l = 0; l < r; l++) {
            o[l] = new Int32Array(t);
            let u = l << se.BLOCK_SIZE_POWER;
            u > s && (u = s);
            for (let g = 0; g < t; g++) {
              let x = g << se.BLOCK_SIZE_POWER;
              x > a && (x = a);
              let y = 0, I = 255, b = 0;
              for (let R = 0, H = u * n + x; R < se.BLOCK_SIZE; R++, H += n) {
                for (let W = 0; W < se.BLOCK_SIZE; W++) {
                  const U = e[H + W] & 255;
                  y += U, U < I && (I = U), U > b && (b = U);
                }
                if (b - I > se.MIN_DYNAMIC_RANGE)
                  for (R++, H += n; R < se.BLOCK_SIZE; R++, H += n)
                    for (let W = 0; W < se.BLOCK_SIZE; W++)
                      y += e[H + W] & 255;
              }
              let T = y >> se.BLOCK_SIZE_POWER * 2;
              if (b - I <= se.MIN_DYNAMIC_RANGE && (T = I / 2, l > 0 && g > 0)) {
                const R = (o[l - 1][g] + 2 * o[l][g - 1] + o[l - 1][g - 1]) / 4;
                I < R && (T = R);
              }
              o[l][g] = T;
            }
          }
          return o;
        }
      }
      se.BLOCK_SIZE_POWER = 3, se.BLOCK_SIZE = 1 << se.BLOCK_SIZE_POWER, se.BLOCK_SIZE_MASK = se.BLOCK_SIZE - 1, se.MINIMUM_DIMENSION = se.BLOCK_SIZE * 5, se.MIN_DYNAMIC_RANGE = 24;
      class It {
        constructor(e, t) {
          this.width = e, this.height = t;
        }
        /**
         * @return The width of the bitmap.
         */
        getWidth() {
          return this.width;
        }
        /**
         * @return The height of the bitmap.
         */
        getHeight() {
          return this.height;
        }
        /**
         * @return Whether this subclass supports cropping.
         */
        isCropSupported() {
          return !1;
        }
        /**
         * Returns a new object with cropped image data. Implementations may keep a reference to the
         * original data rather than a copy. Only callable if isCropSupported() is true.
         *
         * @param left The left coordinate, which must be in [0,getWidth())
         * @param top The top coordinate, which must be in [0,getHeight())
         * @param width The width of the rectangle to crop.
         * @param height The height of the rectangle to crop.
         * @return A cropped version of this object.
         */
        crop(e, t, r, n) {
          throw new it("This luminance source does not support cropping.");
        }
        /**
         * @return Whether this subclass supports counter-clockwise rotation.
         */
        isRotateSupported() {
          return !1;
        }
        /**
         * Returns a new object with rotated image data by 90 degrees counterclockwise.
         * Only callable if {@link #isRotateSupported()} is true.
         *
         * @return A rotated version of this object.
         */
        rotateCounterClockwise() {
          throw new it("This luminance source does not support rotation by 90 degrees.");
        }
        /**
         * Returns a new object with rotated image data by 45 degrees counterclockwise.
         * Only callable if {@link #isRotateSupported()} is true.
         *
         * @return A rotated version of this object.
         */
        rotateCounterClockwise45() {
          throw new it("This luminance source does not support rotation by 45 degrees.");
        }
        /*@Override*/
        toString() {
          const e = new Uint8ClampedArray(this.width);
          let t = new he();
          for (let r = 0; r < this.height; r++) {
            const n = this.getRow(r, e);
            for (let i = 0; i < this.width; i++) {
              const s = n[i] & 255;
              let a;
              s < 64 ? a = "#" : s < 128 ? a = "+" : s < 192 ? a = "." : a = " ", t.append(a);
            }
            t.append(`
`);
          }
          return t.toString();
        }
      }
      class Mt extends It {
        constructor(e) {
          super(e.getWidth(), e.getHeight()), this.delegate = e;
        }
        /*@Override*/
        getRow(e, t) {
          const r = this.delegate.getRow(e, t), n = this.getWidth();
          for (let i = 0; i < n; i++)
            r[i] = /*(byte)*/
            255 - (r[i] & 255);
          return r;
        }
        /*@Override*/
        getMatrix() {
          const e = this.delegate.getMatrix(), t = this.getWidth() * this.getHeight(), r = new Uint8ClampedArray(t);
          for (let n = 0; n < t; n++)
            r[n] = /*(byte)*/
            255 - (e[n] & 255);
          return r;
        }
        /*@Override*/
        isCropSupported() {
          return this.delegate.isCropSupported();
        }
        /*@Override*/
        crop(e, t, r, n) {
          return new Mt(this.delegate.crop(e, t, r, n));
        }
        /*@Override*/
        isRotateSupported() {
          return this.delegate.isRotateSupported();
        }
        /**
         * @return original delegate {@link LuminanceSource} since invert undoes itself
         */
        /*@Override*/
        invert() {
          return this.delegate;
        }
        /*@Override*/
        rotateCounterClockwise() {
          return new Mt(this.delegate.rotateCounterClockwise());
        }
        /*@Override*/
        rotateCounterClockwise45() {
          return new Mt(this.delegate.rotateCounterClockwise45());
        }
      }
      class Bt extends It {
        constructor(e) {
          super(e.width, e.height), this.canvas = e, this.tempCanvasElement = null, this.buffer = Bt.makeBufferFromCanvasImageData(e);
        }
        static makeBufferFromCanvasImageData(e) {
          const t = e.getContext("2d").getImageData(0, 0, e.width, e.height);
          return Bt.toGrayscaleBuffer(t.data, e.width, e.height);
        }
        static toGrayscaleBuffer(e, t, r) {
          const n = new Uint8ClampedArray(t * r);
          for (let i = 0, s = 0, a = e.length; i < a; i += 4, s++) {
            let o;
            if (e[i + 3] === 0)
              o = 255;
            else {
              const u = e[i], g = e[i + 1], x = e[i + 2];
              o = 306 * u + 601 * g + 117 * x + 512 >> 10;
            }
            n[s] = o;
          }
          return n;
        }
        getRow(e, t) {
          if (e < 0 || e >= this.getHeight())
            throw new v("Requested row is outside the image: " + e);
          const r = this.getWidth(), n = e * r;
          return t === null ? t = this.buffer.slice(n, n + r) : (t.length < r && (t = new Uint8ClampedArray(r)), t.set(this.buffer.slice(n, n + r))), t;
        }
        getMatrix() {
          return this.buffer;
        }
        isCropSupported() {
          return !0;
        }
        crop(e, t, r, n) {
          return super.crop(e, t, r, n), this;
        }
        /**
         * This is always true, since the image is a gray-scale image.
         *
         * @return true
         */
        isRotateSupported() {
          return !0;
        }
        rotateCounterClockwise() {
          return this.rotate(-90), this;
        }
        rotateCounterClockwise45() {
          return this.rotate(-45), this;
        }
        getTempCanvasElement() {
          if (this.tempCanvasElement === null) {
            const e = this.canvas.ownerDocument.createElement("canvas");
            e.width = this.canvas.width, e.height = this.canvas.height, this.tempCanvasElement = e;
          }
          return this.tempCanvasElement;
        }
        rotate(e) {
          const t = this.getTempCanvasElement(), r = t.getContext("2d"), n = e * Bt.DEGREE_TO_RADIANS, i = this.canvas.width, s = this.canvas.height, a = Math.ceil(Math.abs(Math.cos(n)) * i + Math.abs(Math.sin(n)) * s), o = Math.ceil(Math.abs(Math.sin(n)) * i + Math.abs(Math.cos(n)) * s);
          return t.width = a, t.height = o, r.translate(a / 2, o / 2), r.rotate(n), r.drawImage(this.canvas, i / -2, s / -2), this.buffer = Bt.makeBufferFromCanvasImageData(t), this;
        }
        invert() {
          return new Mt(this);
        }
      }
      Bt.DEGREE_TO_RADIANS = Math.PI / 180;
      class dr {
        /**
         * Creates an instance of VideoInputDevice.
         *
         * @param {string} deviceId the video input device id
         * @param {string} label the label of the device if available
         */
        constructor(e, t, r) {
          this.deviceId = e, this.label = t, this.kind = "videoinput", this.groupId = r || void 0;
        }
        /** @inheritdoc */
        toJSON() {
          return {
            kind: this.kind,
            groupId: this.groupId,
            deviceId: this.deviceId,
            label: this.label
          };
        }
      }
      var le = (globalThis || xn || self || window || void 0) && (globalThis || xn || self || window || void 0).__awaiter || function(d, e, t, r) {
        function n(i) {
          return i instanceof t ? i : new t(function(s) {
            s(i);
          });
        }
        return new (t || (t = Promise))(function(i, s) {
          function a(u) {
            try {
              l(r.next(u));
            } catch (g) {
              s(g);
            }
          }
          function o(u) {
            try {
              l(r.throw(u));
            } catch (g) {
              s(g);
            }
          }
          function l(u) {
            u.done ? i(u.value) : n(u.value).then(a, o);
          }
          l((r = r.apply(d, e || [])).next());
        });
      };
      class ot {
        /**
         * Creates an instance of BrowserCodeReader.
         * @param {Reader} reader The reader instance to decode the barcode
         * @param {number} [timeBetweenScansMillis=500] the time delay between subsequent successful decode tries
         *
         * @memberOf BrowserCodeReader
         */
        constructor(e, t = 500, r) {
          this.reader = e, this.timeBetweenScansMillis = t, this._hints = r, this._stopContinuousDecode = !1, this._stopAsyncDecode = !1, this._timeBetweenDecodingAttempts = 0;
        }
        /**
         * If navigator is present.
         */
        get hasNavigator() {
          return typeof navigator < "u";
        }
        /**
         * If mediaDevices under navigator is supported.
         */
        get isMediaDevicesSuported() {
          return this.hasNavigator && !!navigator.mediaDevices;
        }
        /**
         * If enumerateDevices under navigator is supported.
         */
        get canEnumerateDevices() {
          return !!(this.isMediaDevicesSuported && navigator.mediaDevices.enumerateDevices);
        }
        /** Time between two decoding tries in milli seconds. */
        get timeBetweenDecodingAttempts() {
          return this._timeBetweenDecodingAttempts;
        }
        /**
         * Change the time span the decoder waits between two decoding tries.
         *
         * @param {number} millis Time between two decoding tries in milli seconds.
         */
        set timeBetweenDecodingAttempts(e) {
          this._timeBetweenDecodingAttempts = e < 0 ? 0 : e;
        }
        /**
         * Sets the hints.
         */
        set hints(e) {
          this._hints = e || null;
        }
        /**
         * Sets the hints.
         */
        get hints() {
          return this._hints;
        }
        /**
         * Lists all the available video input devices.
         */
        listVideoInputDevices() {
          return le(this, void 0, void 0, function* () {
            if (!this.hasNavigator)
              throw new Error("Can't enumerate devices, navigator is not present.");
            if (!this.canEnumerateDevices)
              throw new Error("Can't enumerate devices, method not supported.");
            const e = yield navigator.mediaDevices.enumerateDevices(), t = [];
            for (const r of e) {
              const n = r.kind === "video" ? "videoinput" : r.kind;
              if (n !== "videoinput")
                continue;
              const i = r.deviceId || r.id, s = r.label || `Video device ${t.length + 1}`, a = r.groupId, o = { deviceId: i, label: s, kind: n, groupId: a };
              t.push(o);
            }
            return t;
          });
        }
        /**
         * Obtain the list of available devices with type 'videoinput'.
         *
         * @returns {Promise<VideoInputDevice[]>} an array of available video input devices
         *
         * @memberOf BrowserCodeReader
         *
         * @deprecated Use `listVideoInputDevices` instead.
         */
        getVideoInputDevices() {
          return le(this, void 0, void 0, function* () {
            return (yield this.listVideoInputDevices()).map((t) => new dr(t.deviceId, t.label));
          });
        }
        /**
         * Let's you find a device using it's Id.
         */
        findDeviceById(e) {
          return le(this, void 0, void 0, function* () {
            const t = yield this.listVideoInputDevices();
            return t ? t.find((r) => r.deviceId === e) : null;
          });
        }
        /**
         * Decodes the barcode from the device specified by deviceId while showing the video in the specified video element.
         *
         * @param deviceId the id of one of the devices obtained after calling getVideoInputDevices. Can be undefined, in this case it will decode from one of the available devices, preffering the main camera (environment facing) if available.
         * @param video the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
         * @returns The decoding result.
         *
         * @memberOf BrowserCodeReader
         *
         * @deprecated Use `decodeOnceFromVideoDevice` instead.
         */
        decodeFromInputVideoDevice(e, t) {
          return le(this, void 0, void 0, function* () {
            return yield this.decodeOnceFromVideoDevice(e, t);
          });
        }
        /**
         * In one attempt, tries to decode the barcode from the device specified by deviceId while showing the video in the specified video element.
         *
         * @param deviceId the id of one of the devices obtained after calling getVideoInputDevices. Can be undefined, in this case it will decode from one of the available devices, preffering the main camera (environment facing) if available.
         * @param video the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
         * @returns The decoding result.
         *
         * @memberOf BrowserCodeReader
         */
        decodeOnceFromVideoDevice(e, t) {
          return le(this, void 0, void 0, function* () {
            this.reset();
            let r;
            e ? r = { deviceId: { exact: e } } : r = { facingMode: "environment" };
            const n = { video: r };
            return yield this.decodeOnceFromConstraints(n, t);
          });
        }
        /**
         * In one attempt, tries to decode the barcode from a stream obtained from the given constraints while showing the video in the specified video element.
         *
         * @param constraints the media stream constraints to get s valid media stream to decode from
         * @param video the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
         * @returns The decoding result.
         *
         * @memberOf BrowserCodeReader
         */
        decodeOnceFromConstraints(e, t) {
          return le(this, void 0, void 0, function* () {
            const r = yield navigator.mediaDevices.getUserMedia(e);
            return yield this.decodeOnceFromStream(r, t);
          });
        }
        /**
         * In one attempt, tries to decode the barcode from a stream obtained from the given constraints while showing the video in the specified video element.
         *
         * @param {MediaStream} [constraints] the media stream constraints to get s valid media stream to decode from
         * @param {string|HTMLVideoElement} [video] the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
         * @returns {Promise<Result>} The decoding result.
         *
         * @memberOf BrowserCodeReader
         */
        decodeOnceFromStream(e, t) {
          return le(this, void 0, void 0, function* () {
            this.reset();
            const r = yield this.attachStreamToVideo(e, t);
            return yield this.decodeOnce(r);
          });
        }
        /**
         * Continuously decodes the barcode from the device specified by device while showing the video in the specified video element.
         *
         * @param {string|null} [deviceId] the id of one of the devices obtained after calling getVideoInputDevices. Can be undefined, in this case it will decode from one of the available devices, preffering the main camera (environment facing) if available.
         * @param {string|HTMLVideoElement|null} [video] the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
         * @returns {Promise<void>}
         *
         * @memberOf BrowserCodeReader
         *
         * @deprecated Use `decodeFromVideoDevice` instead.
         */
        decodeFromInputVideoDeviceContinuously(e, t, r) {
          return le(this, void 0, void 0, function* () {
            return yield this.decodeFromVideoDevice(e, t, r);
          });
        }
        /**
         * Continuously tries to decode the barcode from the device specified by device while showing the video in the specified video element.
         *
         * @param {string|null} [deviceId] the id of one of the devices obtained after calling getVideoInputDevices. Can be undefined, in this case it will decode from one of the available devices, preffering the main camera (environment facing) if available.
         * @param {string|HTMLVideoElement|null} [video] the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
         * @returns {Promise<void>}
         *
         * @memberOf BrowserCodeReader
         */
        decodeFromVideoDevice(e, t, r) {
          return le(this, void 0, void 0, function* () {
            let n;
            e ? n = { deviceId: { exact: e } } : n = { facingMode: "environment" };
            const i = { video: n };
            return yield this.decodeFromConstraints(i, t, r);
          });
        }
        /**
         * Continuously tries to decode the barcode from a stream obtained from the given constraints while showing the video in the specified video element.
         *
         * @param {MediaStream} [constraints] the media stream constraints to get s valid media stream to decode from
         * @param {string|HTMLVideoElement} [video] the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
         * @returns {Promise<Result>} The decoding result.
         *
         * @memberOf BrowserCodeReader
         */
        decodeFromConstraints(e, t, r) {
          return le(this, void 0, void 0, function* () {
            const n = yield navigator.mediaDevices.getUserMedia(e);
            return yield this.decodeFromStream(n, t, r);
          });
        }
        /**
         * In one attempt, tries to decode the barcode from a stream obtained from the given constraints while showing the video in the specified video element.
         *
         * @param {MediaStream} [constraints] the media stream constraints to get s valid media stream to decode from
         * @param {string|HTMLVideoElement} [video] the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
         * @returns {Promise<Result>} The decoding result.
         *
         * @memberOf BrowserCodeReader
         */
        decodeFromStream(e, t, r) {
          return le(this, void 0, void 0, function* () {
            this.reset();
            const n = yield this.attachStreamToVideo(e, t);
            return yield this.decodeContinuously(n, r);
          });
        }
        /**
         * Breaks the decoding loop.
         */
        stopAsyncDecode() {
          this._stopAsyncDecode = !0;
        }
        /**
         * Breaks the decoding loop.
         */
        stopContinuousDecode() {
          this._stopContinuousDecode = !0;
        }
        /**
         * Sets the new stream and request a new decoding-with-delay.
         *
         * @param stream The stream to be shown in the video element.
         * @param decodeFn A callback for the decode method.
         */
        attachStreamToVideo(e, t) {
          return le(this, void 0, void 0, function* () {
            const r = this.prepareVideoElement(t);
            return this.addVideoSource(r, e), this.videoElement = r, this.stream = e, yield this.playVideoOnLoadAsync(r), r;
          });
        }
        /**
         *
         * @param videoElement
         */
        playVideoOnLoadAsync(e) {
          return new Promise((t, r) => this.playVideoOnLoad(e, () => t()));
        }
        /**
         * Binds listeners and callbacks to the videoElement.
         *
         * @param element
         * @param callbackFn
         */
        playVideoOnLoad(e, t) {
          this.videoEndedListener = () => this.stopStreams(), this.videoCanPlayListener = () => this.tryPlayVideo(e), e.addEventListener("ended", this.videoEndedListener), e.addEventListener("canplay", this.videoCanPlayListener), e.addEventListener("playing", t), this.tryPlayVideo(e);
        }
        /**
         * Checks if the given video element is currently playing.
         */
        isVideoPlaying(e) {
          return e.currentTime > 0 && !e.paused && !e.ended && e.readyState > 2;
        }
        /**
         * Just tries to play the video and logs any errors.
         * The play call is only made is the video is not already playing.
         */
        tryPlayVideo(e) {
          return le(this, void 0, void 0, function* () {
            if (this.isVideoPlaying(e)) {
              console.warn("Trying to play video that is already playing.");
              return;
            }
            try {
              yield e.play();
            } catch {
              console.warn("It was not possible to play the video.");
            }
          });
        }
        /**
         * Searches and validates a media element.
         */
        getMediaElement(e, t) {
          const r = document.getElementById(e);
          if (!r)
            throw new M(`element with id '${e}' not found`);
          if (r.nodeName.toLowerCase() !== t.toLowerCase())
            throw new M(`element with id '${e}' must be an ${t} element`);
          return r;
        }
        /**
         * Decodes the barcode from an image.
         *
         * @param {(string|HTMLImageElement)} [source] The image element that can be either an element id or the element itself. Can be undefined in which case the decoding will be done from the imageUrl parameter.
         * @param {string} [url]
         * @returns {Promise<Result>} The decoding result.
         *
         * @memberOf BrowserCodeReader
         */
        decodeFromImage(e, t) {
          if (!e && !t)
            throw new M("either imageElement with a src set or an url must be provided");
          return t && !e ? this.decodeFromImageUrl(t) : this.decodeFromImageElement(e);
        }
        /**
         * Decodes the barcode from a video.
         *
         * @param {(string|HTMLImageElement)} [source] The image element that can be either an element id or the element itself. Can be undefined in which case the decoding will be done from the imageUrl parameter.
         * @param {string} [url]
         * @returns {Promise<Result>} The decoding result.
         *
         * @memberOf BrowserCodeReader
         */
        decodeFromVideo(e, t) {
          if (!e && !t)
            throw new M("Either an element with a src set or an URL must be provided");
          return t && !e ? this.decodeFromVideoUrl(t) : this.decodeFromVideoElement(e);
        }
        /**
         * Decodes continuously the barcode from a video.
         *
         * @param {(string|HTMLImageElement)} [source] The image element that can be either an element id or the element itself. Can be undefined in which case the decoding will be done from the imageUrl parameter.
         * @param {string} [url]
         * @returns {Promise<Result>} The decoding result.
         *
         * @memberOf BrowserCodeReader
         *
         * @experimental
         */
        decodeFromVideoContinuously(e, t, r) {
          if (e === void 0 && t === void 0)
            throw new M("Either an element with a src set or an URL must be provided");
          return t && !e ? this.decodeFromVideoUrlContinuously(t, r) : this.decodeFromVideoElementContinuously(e, r);
        }
        /**
         * Decodes something from an image HTML element.
         */
        decodeFromImageElement(e) {
          if (!e)
            throw new M("An image element must be provided.");
          this.reset();
          const t = this.prepareImageElement(e);
          this.imageElement = t;
          let r;
          return this.isImageLoaded(t) ? r = this.decodeOnce(t, !1, !0) : r = this._decodeOnLoadImage(t), r;
        }
        /**
         * Decodes something from an image HTML element.
         */
        decodeFromVideoElement(e) {
          const t = this._decodeFromVideoElementSetup(e);
          return this._decodeOnLoadVideo(t);
        }
        /**
         * Decodes something from an image HTML element.
         */
        decodeFromVideoElementContinuously(e, t) {
          const r = this._decodeFromVideoElementSetup(e);
          return this._decodeOnLoadVideoContinuously(r, t);
        }
        /**
         * Sets up the video source so it can be decoded when loaded.
         *
         * @param source The video source element.
         */
        _decodeFromVideoElementSetup(e) {
          if (!e)
            throw new M("A video element must be provided.");
          this.reset();
          const t = this.prepareVideoElement(e);
          return this.videoElement = t, t;
        }
        /**
         * Decodes an image from a URL.
         */
        decodeFromImageUrl(e) {
          if (!e)
            throw new M("An URL must be provided.");
          this.reset();
          const t = this.prepareImageElement();
          this.imageElement = t;
          const r = this._decodeOnLoadImage(t);
          return t.src = e, r;
        }
        /**
         * Decodes an image from a URL.
         */
        decodeFromVideoUrl(e) {
          if (!e)
            throw new M("An URL must be provided.");
          this.reset();
          const t = this.prepareVideoElement(), r = this.decodeFromVideoElement(t);
          return t.src = e, r;
        }
        /**
         * Decodes an image from a URL.
         *
         * @experimental
         */
        decodeFromVideoUrlContinuously(e, t) {
          if (!e)
            throw new M("An URL must be provided.");
          this.reset();
          const r = this.prepareVideoElement(), n = this.decodeFromVideoElementContinuously(r, t);
          return r.src = e, n;
        }
        _decodeOnLoadImage(e) {
          return new Promise((t, r) => {
            this.imageLoadedListener = () => this.decodeOnce(e, !1, !0).then(t, r), e.addEventListener("load", this.imageLoadedListener);
          });
        }
        _decodeOnLoadVideo(e) {
          return le(this, void 0, void 0, function* () {
            return yield this.playVideoOnLoadAsync(e), yield this.decodeOnce(e);
          });
        }
        _decodeOnLoadVideoContinuously(e, t) {
          return le(this, void 0, void 0, function* () {
            yield this.playVideoOnLoadAsync(e), this.decodeContinuously(e, t);
          });
        }
        isImageLoaded(e) {
          return !(!e.complete || e.naturalWidth === 0);
        }
        prepareImageElement(e) {
          let t;
          return typeof e > "u" && (t = document.createElement("img"), t.width = 200, t.height = 200), typeof e == "string" && (t = this.getMediaElement(e, "img")), e instanceof HTMLImageElement && (t = e), t;
        }
        /**
         * Sets a HTMLVideoElement for scanning or creates a new one.
         *
         * @param videoSource The HTMLVideoElement to be set.
         */
        prepareVideoElement(e) {
          let t;
          return !e && typeof document < "u" && (t = document.createElement("video"), t.width = 200, t.height = 200), typeof e == "string" && (t = this.getMediaElement(e, "video")), e instanceof HTMLVideoElement && (t = e), t.setAttribute("autoplay", "true"), t.setAttribute("muted", "true"), t.setAttribute("playsinline", "true"), t;
        }
        /**
         * Tries to decode from the video input until it finds some value.
         */
        decodeOnce(e, t = !0, r = !0) {
          this._stopAsyncDecode = !1;
          const n = (i, s) => {
            if (this._stopAsyncDecode) {
              s(new D("Video stream has ended before any code could be detected.")), this._stopAsyncDecode = void 0;
              return;
            }
            try {
              const a = this.decode(e);
              i(a);
            } catch (a) {
              const o = t && a instanceof D, u = (a instanceof q || a instanceof L) && r;
              if (o || u)
                return setTimeout(n, this._timeBetweenDecodingAttempts, i, s);
              s(a);
            }
          };
          return new Promise((i, s) => n(i, s));
        }
        /**
         * Continuously decodes from video input.
         */
        decodeContinuously(e, t) {
          this._stopContinuousDecode = !1;
          const r = () => {
            if (this._stopContinuousDecode) {
              this._stopContinuousDecode = void 0;
              return;
            }
            try {
              const n = this.decode(e);
              t(n, null), setTimeout(r, this.timeBetweenScansMillis);
            } catch (n) {
              t(null, n);
              const i = n instanceof q || n instanceof L, s = n instanceof D;
              (i || s) && setTimeout(r, this._timeBetweenDecodingAttempts);
            }
          };
          r();
        }
        /**
         * Gets the BinaryBitmap for ya! (and decodes it)
         */
        decode(e) {
          const t = this.createBinaryBitmap(e);
          return this.decodeBitmap(t);
        }
        /**
         * Returns true if media element is indeed a {@link HtmlVideoElement}.
         */
        _isHTMLVideoElement(e) {
          return e.videoWidth !== 0;
        }
        /**
         * Overwriting this allows you to manipulate the next frame in anyway
         * you want before decode.
         */
        drawFrameOnCanvas(e, t, r) {
          t || (t = {
            sx: 0,
            sy: 0,
            sWidth: e.videoWidth,
            sHeight: e.videoHeight,
            dx: 0,
            dy: 0,
            dWidth: e.videoWidth,
            dHeight: e.videoHeight
          }), r || (r = this.captureCanvasContext), r.drawImage(
            e,
            t.sx,
            t.sy,
            t.sWidth,
            t.sHeight,
            t.dx,
            t.dy,
            t.dWidth,
            t.dHeight
          );
        }
        /**
         * Ovewriting this allows you to manipulate the snapshot image in anyway
         *  you want before decode.
         */
        drawImageOnCanvas(e, t, r = this.captureCanvasContext) {
          t || (t = {
            sx: 0,
            sy: 0,
            sWidth: e.naturalWidth,
            sHeight: e.naturalHeight,
            dx: 0,
            dy: 0,
            dWidth: e.naturalWidth,
            dHeight: e.naturalHeight
          }), r || (r = this.captureCanvasContext), r.drawImage(
            e,
            t.sx,
            t.sy,
            t.sWidth,
            t.sHeight,
            t.dx,
            t.dy,
            t.dWidth,
            t.dHeight
          );
        }
        /**
         * Creates a binaryBitmap based in some image source.
         *
         * @param mediaElement HTML element containing drawable image source.
         */
        createBinaryBitmap(e) {
          this.getCaptureCanvasContext(e), this._isHTMLVideoElement(e) ? this.drawFrameOnCanvas(e) : this.drawImageOnCanvas(e);
          const t = this.getCaptureCanvas(e), r = new Bt(t), n = new se(r);
          return new ee(n);
        }
        getCaptureCanvasContext(e) {
          if (!this.captureCanvasContext) {
            const r = this.getCaptureCanvas(e).getContext("2d");
            this.captureCanvasContext = r;
          }
          return this.captureCanvasContext;
        }
        getCaptureCanvas(e) {
          if (!this.captureCanvas) {
            const t = this.createCaptureCanvas(e);
            this.captureCanvas = t;
          }
          return this.captureCanvas;
        }
        /**
         * Call the encapsulated readers decode
         */
        decodeBitmap(e) {
          return this.reader.decode(e, this._hints);
        }
        /**
         * 🖌 Prepares the canvas for capture and scan frames.
         */
        createCaptureCanvas(e) {
          if (typeof document > "u")
            return this._destroyCaptureCanvas(), null;
          const t = document.createElement("canvas");
          let r, n;
          return typeof e < "u" && (e instanceof HTMLVideoElement ? (r = e.videoWidth, n = e.videoHeight) : e instanceof HTMLImageElement && (r = e.naturalWidth || e.width, n = e.naturalHeight || e.height)), t.style.width = r + "px", t.style.height = n + "px", t.width = r, t.height = n, t;
        }
        /**
         * Stops the continuous scan and cleans the stream.
         */
        stopStreams() {
          this.stream && (this.stream.getVideoTracks().forEach((e) => e.stop()), this.stream = void 0), this._stopAsyncDecode === !1 && this.stopAsyncDecode(), this._stopContinuousDecode === !1 && this.stopContinuousDecode();
        }
        /**
         * Resets the code reader to the initial state. Cancels any ongoing barcode scanning from video or camera.
         *
         * @memberOf BrowserCodeReader
         */
        reset() {
          this.stopStreams(), this._destroyVideoElement(), this._destroyImageElement(), this._destroyCaptureCanvas();
        }
        _destroyVideoElement() {
          this.videoElement && (typeof this.videoEndedListener < "u" && this.videoElement.removeEventListener("ended", this.videoEndedListener), typeof this.videoPlayingEventListener < "u" && this.videoElement.removeEventListener("playing", this.videoPlayingEventListener), typeof this.videoCanPlayListener < "u" && this.videoElement.removeEventListener("loadedmetadata", this.videoCanPlayListener), this.cleanVideoSource(this.videoElement), this.videoElement = void 0);
        }
        _destroyImageElement() {
          this.imageElement && (this.imageLoadedListener !== void 0 && this.imageElement.removeEventListener("load", this.imageLoadedListener), this.imageElement.src = void 0, this.imageElement.removeAttribute("src"), this.imageElement = void 0);
        }
        /**
         * Cleans canvas references 🖌
         */
        _destroyCaptureCanvas() {
          this.captureCanvasContext = void 0, this.captureCanvas = void 0;
        }
        /**
         * Defines what the videoElement src will be.
         *
         * @param videoElement
         * @param stream
         */
        addVideoSource(e, t) {
          try {
            e.srcObject = t;
          } catch {
            e.src = URL.createObjectURL(t);
          }
        }
        /**
         * Unbinds a HTML video src property.
         *
         * @param videoElement
         */
        cleanVideoSource(e) {
          try {
            e.srcObject = null;
          } catch {
            e.src = "";
          }
          this.videoElement.removeAttribute("src");
        }
      }
      class Ke {
        // public constructor(private text: string,
        //               Uint8Array rawBytes,
        //               ResultPoconst resultPoints: Int32Array,
        //               BarcodeFormat format) {
        //   this(text, rawBytes, resultPoints, format, System.currentTimeMillis())
        // }
        // public constructor(text: string,
        //               Uint8Array rawBytes,
        //               ResultPoconst resultPoints: Int32Array,
        //               BarcodeFormat format,
        //               long timestamp) {
        //   this(text, rawBytes, rawBytes == null ? 0 : 8 * rawBytes.length,
        //        resultPoints, format, timestamp)
        // }
        constructor(e, t, r = t == null ? 0 : 8 * t.length, n, i, s = j.currentTimeMillis()) {
          this.text = e, this.rawBytes = t, this.numBits = r, this.resultPoints = n, this.format = i, this.timestamp = s, this.text = e, this.rawBytes = t, r == null ? this.numBits = t == null ? 0 : 8 * t.length : this.numBits = r, this.resultPoints = n, this.format = i, this.resultMetadata = null, s == null ? this.timestamp = j.currentTimeMillis() : this.timestamp = s;
        }
        /**
         * @return raw text encoded by the barcode
         */
        getText() {
          return this.text;
        }
        /**
         * @return raw bytes encoded by the barcode, if applicable, otherwise {@code null}
         */
        getRawBytes() {
          return this.rawBytes;
        }
        /**
         * @return how many bits of {@link #getRawBytes()} are valid; typically 8 times its length
         * @since 3.3.0
         */
        getNumBits() {
          return this.numBits;
        }
        /**
         * @return points related to the barcode in the image. These are typically points
         *         identifying finder patterns or the corners of the barcode. The exact meaning is
         *         specific to the type of barcode that was decoded.
         */
        getResultPoints() {
          return this.resultPoints;
        }
        /**
         * @return {@link BarcodeFormat} representing the format of the barcode that was decoded
         */
        getBarcodeFormat() {
          return this.format;
        }
        /**
         * @return {@link Map} mapping {@link ResultMetadataType} keys to values. May be
         *   {@code null}. This contains optional metadata about what was detected about the barcode,
         *   like orientation.
         */
        getResultMetadata() {
          return this.resultMetadata;
        }
        putMetadata(e, t) {
          this.resultMetadata === null && (this.resultMetadata = /* @__PURE__ */ new Map()), this.resultMetadata.set(e, t);
        }
        putAllMetadata(e) {
          e !== null && (this.resultMetadata === null ? this.resultMetadata = e : this.resultMetadata = new Map(e));
        }
        addResultPoints(e) {
          const t = this.resultPoints;
          if (t === null)
            this.resultPoints = e;
          else if (e !== null && e.length > 0) {
            const r = new Array(t.length + e.length);
            j.arraycopy(t, 0, r, 0, t.length), j.arraycopy(e, 0, r, t.length, e.length), this.resultPoints = r;
          }
        }
        getTimestamp() {
          return this.timestamp;
        }
        /*@Override*/
        toString() {
          return this.text;
        }
      }
      var kr;
      (function(d) {
        d[d.AZTEC = 0] = "AZTEC", d[d.CODABAR = 1] = "CODABAR", d[d.CODE_39 = 2] = "CODE_39", d[d.CODE_93 = 3] = "CODE_93", d[d.CODE_128 = 4] = "CODE_128", d[d.DATA_MATRIX = 5] = "DATA_MATRIX", d[d.EAN_8 = 6] = "EAN_8", d[d.EAN_13 = 7] = "EAN_13", d[d.ITF = 8] = "ITF", d[d.MAXICODE = 9] = "MAXICODE", d[d.PDF_417 = 10] = "PDF_417", d[d.QR_CODE = 11] = "QR_CODE", d[d.RSS_14 = 12] = "RSS_14", d[d.RSS_EXPANDED = 13] = "RSS_EXPANDED", d[d.UPC_A = 14] = "UPC_A", d[d.UPC_E = 15] = "UPC_E", d[d.UPC_EAN_EXTENSION = 16] = "UPC_EAN_EXTENSION";
      })(kr || (kr = {}));
      var re = kr, gr;
      (function(d) {
        d[d.OTHER = 0] = "OTHER", d[d.ORIENTATION = 1] = "ORIENTATION", d[d.BYTE_SEGMENTS = 2] = "BYTE_SEGMENTS", d[d.ERROR_CORRECTION_LEVEL = 3] = "ERROR_CORRECTION_LEVEL", d[d.ISSUE_NUMBER = 4] = "ISSUE_NUMBER", d[d.SUGGESTED_PRICE = 5] = "SUGGESTED_PRICE", d[d.POSSIBLE_COUNTRY = 6] = "POSSIBLE_COUNTRY", d[d.UPC_EAN_EXTENSION = 7] = "UPC_EAN_EXTENSION", d[d.PDF417_EXTRA_METADATA = 8] = "PDF417_EXTRA_METADATA", d[d.STRUCTURED_APPEND_SEQUENCE = 9] = "STRUCTURED_APPEND_SEQUENCE", d[d.STRUCTURED_APPEND_PARITY = 10] = "STRUCTURED_APPEND_PARITY";
      })(gr || (gr = {}));
      var qe = gr;
      class $t {
        // public constructor(rawBytes: Uint8Array,
        //                      text: string,
        //                      List<Uint8Array> byteSegments,
        //                      String ecLevel) {
        //   this(rawBytes, text, byteSegments, ecLevel, -1, -1)
        // }
        constructor(e, t, r, n, i = -1, s = -1) {
          this.rawBytes = e, this.text = t, this.byteSegments = r, this.ecLevel = n, this.structuredAppendSequenceNumber = i, this.structuredAppendParity = s, this.numBits = e == null ? 0 : 8 * e.length;
        }
        /**
         * @return raw bytes representing the result, or {@code null} if not applicable
         */
        getRawBytes() {
          return this.rawBytes;
        }
        /**
         * @return how many bits of {@link #getRawBytes()} are valid; typically 8 times its length
         * @since 3.3.0
         */
        getNumBits() {
          return this.numBits;
        }
        /**
         * @param numBits overrides the number of bits that are valid in {@link #getRawBytes()}
         * @since 3.3.0
         */
        setNumBits(e) {
          this.numBits = e;
        }
        /**
         * @return text representation of the result
         */
        getText() {
          return this.text;
        }
        /**
         * @return list of byte segments in the result, or {@code null} if not applicable
         */
        getByteSegments() {
          return this.byteSegments;
        }
        /**
         * @return name of error correction level used, or {@code null} if not applicable
         */
        getECLevel() {
          return this.ecLevel;
        }
        /**
         * @return number of errors corrected, or {@code null} if not applicable
         */
        getErrorsCorrected() {
          return this.errorsCorrected;
        }
        setErrorsCorrected(e) {
          this.errorsCorrected = e;
        }
        /**
         * @return number of erasures corrected, or {@code null} if not applicable
         */
        getErasures() {
          return this.erasures;
        }
        setErasures(e) {
          this.erasures = e;
        }
        /**
         * @return arbitrary additional metadata
         */
        getOther() {
          return this.other;
        }
        setOther(e) {
          this.other = e;
        }
        hasStructuredAppend() {
          return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0;
        }
        getStructuredAppendParity() {
          return this.structuredAppendParity;
        }
        getStructuredAppendSequenceNumber() {
          return this.structuredAppendSequenceNumber;
        }
      }
      class zt {
        /**
         * @return 2 to the power of a in GF(size)
         */
        exp(e) {
          return this.expTable[e];
        }
        /**
         * @return base 2 log of a in GF(size)
         */
        log(e) {
          if (e === 0)
            throw new v();
          return this.logTable[e];
        }
        /**
         * Implements both addition and subtraction -- they are the same in GF(size).
         *
         * @return sum/difference of a and b
         */
        static addOrSubtract(e, t) {
          return e ^ t;
        }
      }
      class Ct {
        /**
         * @param field the {@link GenericGF} instance representing the field to use
         * to perform computations
         * @param coefficients coefficients as ints representing elements of GF(size), arranged
         * from most significant (highest-power term) coefficient to least significant
         * @throws IllegalArgumentException if argument is null or empty,
         * or if leading coefficient is 0 and this is not a
         * constant polynomial (that is, it is not the monomial "0")
         */
        constructor(e, t) {
          if (t.length === 0)
            throw new v();
          this.field = e;
          const r = t.length;
          if (r > 1 && t[0] === 0) {
            let n = 1;
            for (; n < r && t[n] === 0; )
              n++;
            n === r ? this.coefficients = Int32Array.from([0]) : (this.coefficients = new Int32Array(r - n), j.arraycopy(t, n, this.coefficients, 0, this.coefficients.length));
          } else
            this.coefficients = t;
        }
        getCoefficients() {
          return this.coefficients;
        }
        /**
         * @return degree of this polynomial
         */
        getDegree() {
          return this.coefficients.length - 1;
        }
        /**
         * @return true iff this polynomial is the monomial "0"
         */
        isZero() {
          return this.coefficients[0] === 0;
        }
        /**
         * @return coefficient of x^degree term in this polynomial
         */
        getCoefficient(e) {
          return this.coefficients[this.coefficients.length - 1 - e];
        }
        /**
         * @return evaluation of this polynomial at a given point
         */
        evaluateAt(e) {
          if (e === 0)
            return this.getCoefficient(0);
          const t = this.coefficients;
          let r;
          if (e === 1) {
            r = 0;
            for (let s = 0, a = t.length; s !== a; s++) {
              const o = t[s];
              r = zt.addOrSubtract(r, o);
            }
            return r;
          }
          r = t[0];
          const n = t.length, i = this.field;
          for (let s = 1; s < n; s++)
            r = zt.addOrSubtract(i.multiply(e, r), t[s]);
          return r;
        }
        addOrSubtract(e) {
          if (!this.field.equals(e.field))
            throw new v("GenericGFPolys do not have same GenericGF field");
          if (this.isZero())
            return e;
          if (e.isZero())
            return this;
          let t = this.coefficients, r = e.coefficients;
          if (t.length > r.length) {
            const s = t;
            t = r, r = s;
          }
          let n = new Int32Array(r.length);
          const i = r.length - t.length;
          j.arraycopy(r, 0, n, 0, i);
          for (let s = i; s < r.length; s++)
            n[s] = zt.addOrSubtract(t[s - i], r[s]);
          return new Ct(this.field, n);
        }
        multiply(e) {
          if (!this.field.equals(e.field))
            throw new v("GenericGFPolys do not have same GenericGF field");
          if (this.isZero() || e.isZero())
            return this.field.getZero();
          const t = this.coefficients, r = t.length, n = e.coefficients, i = n.length, s = new Int32Array(r + i - 1), a = this.field;
          for (let o = 0; o < r; o++) {
            const l = t[o];
            for (let u = 0; u < i; u++)
              s[o + u] = zt.addOrSubtract(s[o + u], a.multiply(l, n[u]));
          }
          return new Ct(a, s);
        }
        multiplyScalar(e) {
          if (e === 0)
            return this.field.getZero();
          if (e === 1)
            return this;
          const t = this.coefficients.length, r = this.field, n = new Int32Array(t), i = this.coefficients;
          for (let s = 0; s < t; s++)
            n[s] = r.multiply(i[s], e);
          return new Ct(r, n);
        }
        multiplyByMonomial(e, t) {
          if (e < 0)
            throw new v();
          if (t === 0)
            return this.field.getZero();
          const r = this.coefficients, n = r.length, i = new Int32Array(n + e), s = this.field;
          for (let a = 0; a < n; a++)
            i[a] = s.multiply(r[a], t);
          return new Ct(s, i);
        }
        divide(e) {
          if (!this.field.equals(e.field))
            throw new v("GenericGFPolys do not have same GenericGF field");
          if (e.isZero())
            throw new v("Divide by 0");
          const t = this.field;
          let r = t.getZero(), n = this;
          const i = e.getCoefficient(e.getDegree()), s = t.inverse(i);
          for (; n.getDegree() >= e.getDegree() && !n.isZero(); ) {
            const a = n.getDegree() - e.getDegree(), o = t.multiply(n.getCoefficient(n.getDegree()), s), l = e.multiplyByMonomial(a, o), u = t.buildMonomial(a, o);
            r = r.addOrSubtract(u), n = n.addOrSubtract(l);
          }
          return [r, n];
        }
        /*@Override*/
        toString() {
          let e = "";
          for (let t = this.getDegree(); t >= 0; t--) {
            let r = this.getCoefficient(t);
            if (r !== 0) {
              if (r < 0 ? (e += " - ", r = -r) : e.length > 0 && (e += " + "), t === 0 || r !== 1) {
                const n = this.field.log(r);
                n === 0 ? e += "1" : n === 1 ? e += "a" : (e += "a^", e += n);
              }
              t !== 0 && (t === 1 ? e += "x" : (e += "x^", e += t));
            }
          }
          return e;
        }
      }
      class xr extends p {
      }
      xr.kind = "ArithmeticException";
      class _e extends zt {
        /**
         * Create a representation of GF(size) using the given primitive polynomial.
         *
         * @param primitive irreducible polynomial whose coefficients are represented by
         *  the bits of an int, where the least-significant bit represents the constant
         *  coefficient
         * @param size the size of the field
         * @param b the factor b in the generator polynomial can be 0- or 1-based
         *  (g(x) = (x+a^b)(x+a^(b+1))...(x+a^(b+2t-1))).
         *  In most cases it should be 1, but for QR code it is 0.
         */
        constructor(e, t, r) {
          super(), this.primitive = e, this.size = t, this.generatorBase = r;
          const n = new Int32Array(t);
          let i = 1;
          for (let a = 0; a < t; a++)
            n[a] = i, i *= 2, i >= t && (i ^= e, i &= t - 1);
          this.expTable = n;
          const s = new Int32Array(t);
          for (let a = 0; a < t - 1; a++)
            s[n[a]] = a;
          this.logTable = s, this.zero = new Ct(this, Int32Array.from([0])), this.one = new Ct(this, Int32Array.from([1]));
        }
        getZero() {
          return this.zero;
        }
        getOne() {
          return this.one;
        }
        /**
         * @return the monomial representing coefficient * x^degree
         */
        buildMonomial(e, t) {
          if (e < 0)
            throw new v();
          if (t === 0)
            return this.zero;
          const r = new Int32Array(e + 1);
          return r[0] = t, new Ct(this, r);
        }
        /**
         * @return multiplicative inverse of a
         */
        inverse(e) {
          if (e === 0)
            throw new xr();
          return this.expTable[this.size - this.logTable[e] - 1];
        }
        /**
         * @return product of a and b in GF(size)
         */
        multiply(e, t) {
          return e === 0 || t === 0 ? 0 : this.expTable[(this.logTable[e] + this.logTable[t]) % (this.size - 1)];
        }
        getSize() {
          return this.size;
        }
        getGeneratorBase() {
          return this.generatorBase;
        }
        /*@Override*/
        toString() {
          return "GF(0x" + V.toHexString(this.primitive) + "," + this.size + ")";
        }
        equals(e) {
          return e === this;
        }
      }
      _e.AZTEC_DATA_12 = new _e(4201, 4096, 1), _e.AZTEC_DATA_10 = new _e(1033, 1024, 1), _e.AZTEC_DATA_6 = new _e(67, 64, 1), _e.AZTEC_PARAM = new _e(19, 16, 1), _e.QR_CODE_FIELD_256 = new _e(285, 256, 0), _e.DATA_MATRIX_FIELD_256 = new _e(301, 256, 1), _e.AZTEC_DATA_8 = _e.DATA_MATRIX_FIELD_256, _e.MAXICODE_FIELD_64 = _e.AZTEC_DATA_6;
      class ar extends p {
      }
      ar.kind = "ReedSolomonException";
      class bt extends p {
      }
      bt.kind = "IllegalStateException";
      class Gt {
        constructor(e) {
          this.field = e;
        }
        /**
         * <p>Decodes given set of received codewords, which include both data and error-correction
         * codewords. Really, this means it uses Reed-Solomon to detect and correct errors, in-place,
         * in the input.</p>
         *
         * @param received data and error-correction codewords
         * @param twoS number of error-correction codewords available
         * @throws ReedSolomonException if decoding fails for any reason
         */
        decode(e, t) {
          const r = this.field, n = new Ct(r, e), i = new Int32Array(t);
          let s = !0;
          for (let y = 0; y < t; y++) {
            const I = n.evaluateAt(r.exp(y + r.getGeneratorBase()));
            i[i.length - 1 - y] = I, I !== 0 && (s = !1);
          }
          if (s)
            return;
          const a = new Ct(r, i), o = this.runEuclideanAlgorithm(r.buildMonomial(t, 1), a, t), l = o[0], u = o[1], g = this.findErrorLocations(l), x = this.findErrorMagnitudes(u, g);
          for (let y = 0; y < g.length; y++) {
            const I = e.length - 1 - r.log(g[y]);
            if (I < 0)
              throw new ar("Bad error location");
            e[I] = _e.addOrSubtract(e[I], x[y]);
          }
        }
        runEuclideanAlgorithm(e, t, r) {
          if (e.getDegree() < t.getDegree()) {
            const y = e;
            e = t, t = y;
          }
          const n = this.field;
          let i = e, s = t, a = n.getZero(), o = n.getOne();
          for (; s.getDegree() >= (r / 2 | 0); ) {
            let y = i, I = a;
            if (i = s, a = o, i.isZero())
              throw new ar("r_{i-1} was zero");
            s = y;
            let b = n.getZero();
            const T = i.getCoefficient(i.getDegree()), R = n.inverse(T);
            for (; s.getDegree() >= i.getDegree() && !s.isZero(); ) {
              const H = s.getDegree() - i.getDegree(), W = n.multiply(s.getCoefficient(s.getDegree()), R);
              b = b.addOrSubtract(n.buildMonomial(H, W)), s = s.addOrSubtract(i.multiplyByMonomial(H, W));
            }
            if (o = b.multiply(a).addOrSubtract(I), s.getDegree() >= i.getDegree())
              throw new bt("Division algorithm failed to reduce polynomial?");
          }
          const l = o.getCoefficient(0);
          if (l === 0)
            throw new ar("sigmaTilde(0) was zero");
          const u = n.inverse(l), g = o.multiplyScalar(u), x = s.multiplyScalar(u);
          return [g, x];
        }
        findErrorLocations(e) {
          const t = e.getDegree();
          if (t === 1)
            return Int32Array.from([e.getCoefficient(1)]);
          const r = new Int32Array(t);
          let n = 0;
          const i = this.field;
          for (let s = 1; s < i.getSize() && n < t; s++)
            e.evaluateAt(s) === 0 && (r[n] = i.inverse(s), n++);
          if (n !== t)
            throw new ar("Error locator degree does not match number of roots");
          return r;
        }
        findErrorMagnitudes(e, t) {
          const r = t.length, n = new Int32Array(r), i = this.field;
          for (let s = 0; s < r; s++) {
            const a = i.inverse(t[s]);
            let o = 1;
            for (let l = 0; l < r; l++)
              if (s !== l) {
                const u = i.multiply(t[l], a), g = (u & 1) === 0 ? u | 1 : u & -2;
                o = i.multiply(o, g);
              }
            n[s] = i.multiply(e.evaluateAt(a), i.inverse(o)), i.getGeneratorBase() !== 0 && (n[s] = i.multiply(n[s], a));
          }
          return n;
        }
      }
      var lt;
      (function(d) {
        d[d.UPPER = 0] = "UPPER", d[d.LOWER = 1] = "LOWER", d[d.MIXED = 2] = "MIXED", d[d.DIGIT = 3] = "DIGIT", d[d.PUNCT = 4] = "PUNCT", d[d.BINARY = 5] = "BINARY";
      })(lt || (lt = {}));
      class Be {
        decode(e) {
          this.ddata = e;
          let t = e.getBits(), r = this.extractBits(t), n = this.correctBits(r), i = Be.convertBoolArrayToByteArray(n), s = Be.getEncodedData(n), a = new $t(i, s, null, null);
          return a.setNumBits(n.length), a;
        }
        // This method is used for testing the high-level encoder
        static highLevelDecode(e) {
          return this.getEncodedData(e);
        }
        /**
         * Gets the string encoded in the aztec code bits
         *
         * @return the decoded string
         */
        static getEncodedData(e) {
          let t = e.length, r = lt.UPPER, n = lt.UPPER, i = "", s = 0;
          for (; s < t; )
            if (n === lt.BINARY) {
              if (t - s < 5)
                break;
              let a = Be.readCode(e, s, 5);
              if (s += 5, a === 0) {
                if (t - s < 11)
                  break;
                a = Be.readCode(e, s, 11) + 31, s += 11;
              }
              for (let o = 0; o < a; o++) {
                if (t - s < 8) {
                  s = t;
                  break;
                }
                const l = Be.readCode(e, s, 8);
                i += /*(char)*/
                $.castAsNonUtf8Char(l), s += 8;
              }
              n = r;
            } else {
              let a = n === lt.DIGIT ? 4 : 5;
              if (t - s < a)
                break;
              let o = Be.readCode(e, s, a);
              s += a;
              let l = Be.getCharacter(n, o);
              l.startsWith("CTRL_") ? (r = n, n = Be.getTable(l.charAt(5)), l.charAt(6) === "L" && (r = n)) : (i += l, n = r);
            }
          return i;
        }
        /**
         * gets the table corresponding to the char passed
         */
        static getTable(e) {
          switch (e) {
            case "L":
              return lt.LOWER;
            case "P":
              return lt.PUNCT;
            case "M":
              return lt.MIXED;
            case "D":
              return lt.DIGIT;
            case "B":
              return lt.BINARY;
            case "U":
            default:
              return lt.UPPER;
          }
        }
        /**
         * Gets the character (or string) corresponding to the passed code in the given table
         *
         * @param table the table used
         * @param code the code of the character
         */
        static getCharacter(e, t) {
          switch (e) {
            case lt.UPPER:
              return Be.UPPER_TABLE[t];
            case lt.LOWER:
              return Be.LOWER_TABLE[t];
            case lt.MIXED:
              return Be.MIXED_TABLE[t];
            case lt.PUNCT:
              return Be.PUNCT_TABLE[t];
            case lt.DIGIT:
              return Be.DIGIT_TABLE[t];
            default:
              throw new bt("Bad table");
          }
        }
        /**
         * <p>Performs RS error correction on an array of bits.</p>
         *
         * @return the corrected array
         * @throws FormatException if the input contains too many errors
         */
        correctBits(e) {
          let t, r;
          this.ddata.getNbLayers() <= 2 ? (r = 6, t = _e.AZTEC_DATA_6) : this.ddata.getNbLayers() <= 8 ? (r = 8, t = _e.AZTEC_DATA_8) : this.ddata.getNbLayers() <= 22 ? (r = 10, t = _e.AZTEC_DATA_10) : (r = 12, t = _e.AZTEC_DATA_12);
          let n = this.ddata.getNbDatablocks(), i = e.length / r;
          if (i < n)
            throw new L();
          let s = e.length % r, a = new Int32Array(i);
          for (let x = 0; x < i; x++, s += r)
            a[x] = Be.readCode(e, s, r);
          try {
            new Gt(t).decode(a, i - n);
          } catch (x) {
            throw new L(x);
          }
          let o = (1 << r) - 1, l = 0;
          for (let x = 0; x < n; x++) {
            let y = a[x];
            if (y === 0 || y === o)
              throw new L();
            (y === 1 || y === o - 1) && l++;
          }
          let u = new Array(n * r - l), g = 0;
          for (let x = 0; x < n; x++) {
            let y = a[x];
            if (y === 1 || y === o - 1)
              u.fill(y > 1, g, g + r - 1), g += r - 1;
            else
              for (let I = r - 1; I >= 0; --I)
                u[g++] = (y & 1 << I) !== 0;
          }
          return u;
        }
        /**
         * Gets the array of bits from an Aztec Code matrix
         *
         * @return the array of bits
         */
        extractBits(e) {
          let t = this.ddata.isCompact(), r = this.ddata.getNbLayers(), n = (t ? 11 : 14) + r * 4, i = new Int32Array(n), s = new Array(this.totalBitsInLayer(r, t));
          if (t)
            for (let a = 0; a < i.length; a++)
              i[a] = a;
          else {
            let a = n + 1 + 2 * V.truncDivision(V.truncDivision(n, 2) - 1, 15), o = n / 2, l = V.truncDivision(a, 2);
            for (let u = 0; u < o; u++) {
              let g = u + V.truncDivision(u, 15);
              i[o - u - 1] = l - g - 1, i[o + u] = l + g + 1;
            }
          }
          for (let a = 0, o = 0; a < r; a++) {
            let l = (r - a) * 4 + (t ? 9 : 12), u = a * 2, g = n - 1 - u;
            for (let x = 0; x < l; x++) {
              let y = x * 2;
              for (let I = 0; I < 2; I++)
                s[o + y + I] = e.get(i[u + I], i[u + x]), s[o + 2 * l + y + I] = e.get(i[u + x], i[g - I]), s[o + 4 * l + y + I] = e.get(i[g - I], i[g - x]), s[o + 6 * l + y + I] = e.get(i[g - x], i[u + I]);
            }
            o += l * 8;
          }
          return s;
        }
        /**
         * Reads a code of given length and at given index in an array of bits
         */
        static readCode(e, t, r) {
          let n = 0;
          for (let i = t; i < t + r; i++)
            n <<= 1, e[i] && (n |= 1);
          return n;
        }
        /**
         * Reads a code of length 8 in an array of bits, padding with zeros
         */
        static readByte(e, t) {
          let r = e.length - t;
          return r >= 8 ? Be.readCode(e, t, 8) : Be.readCode(e, t, r) << 8 - r;
        }
        /**
         * Packs a bit array into bytes, most significant bit first
         */
        static convertBoolArrayToByteArray(e) {
          let t = new Uint8Array((e.length + 7) / 8);
          for (let r = 0; r < t.length; r++)
            t[r] = Be.readByte(e, 8 * r);
          return t;
        }
        totalBitsInLayer(e, t) {
          return ((t ? 88 : 112) + 16 * e) * e;
        }
      }
      Be.UPPER_TABLE = [
        "CTRL_PS",
        " ",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "CTRL_LL",
        "CTRL_ML",
        "CTRL_DL",
        "CTRL_BS"
      ], Be.LOWER_TABLE = [
        "CTRL_PS",
        " ",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "CTRL_US",
        "CTRL_ML",
        "CTRL_DL",
        "CTRL_BS"
      ], Be.MIXED_TABLE = [
        // Module parse failed: Octal literal in strict mode (50:29)
        // so number string were scaped
        "CTRL_PS",
        " ",
        "\\1",
        "\\2",
        "\\3",
        "\\4",
        "\\5",
        "\\6",
        "\\7",
        "\b",
        "	",
        `
`,
        "\\13",
        "\f",
        "\r",
        "\\33",
        "\\34",
        "\\35",
        "\\36",
        "\\37",
        "@",
        "\\",
        "^",
        "_",
        "`",
        "|",
        "~",
        "\\177",
        "CTRL_LL",
        "CTRL_UL",
        "CTRL_PL",
        "CTRL_BS"
      ], Be.PUNCT_TABLE = [
        "",
        "\r",
        `\r
`,
        ". ",
        ", ",
        ": ",
        "!",
        '"',
        "#",
        "$",
        "%",
        "&",
        "'",
        "(",
        ")",
        "*",
        "+",
        ",",
        "-",
        ".",
        "/",
        ":",
        ";",
        "<",
        "=",
        ">",
        "?",
        "[",
        "]",
        "{",
        "}",
        "CTRL_UL"
      ], Be.DIGIT_TABLE = [
        "CTRL_PS",
        " ",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        ",",
        ".",
        "CTRL_UL",
        "CTRL_US"
      ];
      class Ee {
        constructor() {
        }
        /**
         * Ends up being a bit faster than {@link Math#round(float)}. This merely rounds its
         * argument to the nearest int, where x.5 rounds up to x+1. Semantics of this shortcut
         * differ slightly from {@link Math#round(float)} in that half rounds down for negative
         * values. -2.5 rounds to -3, not -2. For purposes here it makes no difference.
         *
         * @param d real value to round
         * @return nearest {@code int}
         */
        static round(e) {
          return e === NaN ? 0 : e <= Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : e >= Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : (
            /*(int) */
            e + (e < 0 ? -0.5 : 0.5) | 0
          );
        }
        // TYPESCRIPTPORT: maybe remove round method and call directly Math.round, it looks like it doesn't make sense for js
        /**
         * @param aX point A x coordinate
         * @param aY point A y coordinate
         * @param bX point B x coordinate
         * @param bY point B y coordinate
         * @return Euclidean distance between points A and B
         */
        static distance(e, t, r, n) {
          const i = e - r, s = t - n;
          return (
            /*(float) */
            Math.sqrt(i * i + s * s)
          );
        }
        /**
         * @param aX point A x coordinate
         * @param aY point A y coordinate
         * @param bX point B x coordinate
         * @param bY point B y coordinate
         * @return Euclidean distance between points A and B
         */
        // public static distance(aX: number /*int*/, aY: number /*int*/, bX: number /*int*/, bY: number /*int*/): float {
        //   const xDiff = aX - bX
        //   const yDiff = aY - bY
        //   return (float) Math.sqrt(xDiff * xDiff + yDiff * yDiff);
        // }
        /**
         * @param array values to sum
         * @return sum of values in array
         */
        static sum(e) {
          let t = 0;
          for (let r = 0, n = e.length; r !== n; r++) {
            const i = e[r];
            t += i;
          }
          return t;
        }
      }
      class Ir {
        /**
         * SincTS has no difference between int and float, there's all numbers,
         * this is used only to polyfill Java code.
         */
        static floatToIntBits(e) {
          return e;
        }
      }
      Ir.MAX_VALUE = Number.MAX_SAFE_INTEGER;
      class Q {
        constructor(e, t) {
          this.x = e, this.y = t;
        }
        getX() {
          return this.x;
        }
        getY() {
          return this.y;
        }
        /*@Override*/
        equals(e) {
          if (e instanceof Q) {
            const t = e;
            return this.x === t.x && this.y === t.y;
          }
          return !1;
        }
        /*@Override*/
        hashCode() {
          return 31 * Ir.floatToIntBits(this.x) + Ir.floatToIntBits(this.y);
        }
        /*@Override*/
        toString() {
          return "(" + this.x + "," + this.y + ")";
        }
        /**
         * Orders an array of three ResultPoints in an order [A,B,C] such that AB is less than AC
         * and BC is less than AC, and the angle between BC and BA is less than 180 degrees.
         *
         * @param patterns array of three {@code ResultPoint} to order
         */
        static orderBestPatterns(e) {
          const t = this.distance(e[0], e[1]), r = this.distance(e[1], e[2]), n = this.distance(e[0], e[2]);
          let i, s, a;
          if (r >= t && r >= n ? (s = e[0], i = e[1], a = e[2]) : n >= r && n >= t ? (s = e[1], i = e[0], a = e[2]) : (s = e[2], i = e[0], a = e[1]), this.crossProductZ(i, s, a) < 0) {
            const o = i;
            i = a, a = o;
          }
          e[0] = i, e[1] = s, e[2] = a;
        }
        /**
         * @param pattern1 first pattern
         * @param pattern2 second pattern
         * @return distance between two points
         */
        static distance(e, t) {
          return Ee.distance(e.x, e.y, t.x, t.y);
        }
        /**
         * Returns the z component of the cross product between vectors BC and BA.
         */
        static crossProductZ(e, t, r) {
          const n = t.x, i = t.y;
          return (r.x - n) * (e.y - i) - (r.y - i) * (e.x - n);
        }
      }
      class or {
        constructor(e, t) {
          this.bits = e, this.points = t;
        }
        getBits() {
          return this.bits;
        }
        getPoints() {
          return this.points;
        }
      }
      class an extends or {
        constructor(e, t, r, n, i) {
          super(e, t), this.compact = r, this.nbDatablocks = n, this.nbLayers = i;
        }
        getNbLayers() {
          return this.nbLayers;
        }
        getNbDatablocks() {
          return this.nbDatablocks;
        }
        isCompact() {
          return this.compact;
        }
      }
      class Ht {
        // public constructor(private image: BitMatrix) /*throws NotFoundException*/ {
        //   this(image, INIT_SIZE, image.getWidth() / 2, image.getHeight() / 2)
        // }
        /**
         * @param image barcode image to find a rectangle in
         * @param initSize initial size of search area around center
         * @param x x position of search center
         * @param y y position of search center
         * @throws NotFoundException if image is too small to accommodate {@code initSize}
         */
        constructor(e, t, r, n) {
          this.image = e, this.height = e.getHeight(), this.width = e.getWidth(), t == null && (t = Ht.INIT_SIZE), r == null && (r = e.getWidth() / 2 | 0), n == null && (n = e.getHeight() / 2 | 0);
          const i = t / 2 | 0;
          if (this.leftInit = r - i, this.rightInit = r + i, this.upInit = n - i, this.downInit = n + i, this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width)
            throw new D();
        }
        /**
         * <p>
         * Detects a candidate barcode-like rectangular region within an image. It
         * starts around the center of the image, increases the size of the candidate
         * region until it finds a white rectangular region.
         * </p>
         *
         * @return {@link ResultPoint}[] describing the corners of the rectangular
         *         region. The first and last points are opposed on the diagonal, as
         *         are the second and third. The first point will be the topmost
         *         point and the last, the bottommost. The second point will be
         *         leftmost and the third, the rightmost
         * @throws NotFoundException if no Data Matrix Code can be found
         */
        detect() {
          let e = this.leftInit, t = this.rightInit, r = this.upInit, n = this.downInit, i = !1, s = !0, a = !1, o = !1, l = !1, u = !1, g = !1;
          const x = this.width, y = this.height;
          for (; s; ) {
            s = !1;
            let I = !0;
            for (; (I || !o) && t < x; )
              I = this.containsBlackPoint(r, n, t, !1), I ? (t++, s = !0, o = !0) : o || t++;
            if (t >= x) {
              i = !0;
              break;
            }
            let b = !0;
            for (; (b || !l) && n < y; )
              b = this.containsBlackPoint(e, t, n, !0), b ? (n++, s = !0, l = !0) : l || n++;
            if (n >= y) {
              i = !0;
              break;
            }
            let T = !0;
            for (; (T || !u) && e >= 0; )
              T = this.containsBlackPoint(r, n, e, !1), T ? (e--, s = !0, u = !0) : u || e--;
            if (e < 0) {
              i = !0;
              break;
            }
            let R = !0;
            for (; (R || !g) && r >= 0; )
              R = this.containsBlackPoint(e, t, r, !0), R ? (r--, s = !0, g = !0) : g || r--;
            if (r < 0) {
              i = !0;
              break;
            }
            s && (a = !0);
          }
          if (!i && a) {
            const I = t - e;
            let b = null;
            for (let W = 1; b === null && W < I; W++)
              b = this.getBlackPointOnSegment(e, n - W, e + W, n);
            if (b == null)
              throw new D();
            let T = null;
            for (let W = 1; T === null && W < I; W++)
              T = this.getBlackPointOnSegment(e, r + W, e + W, r);
            if (T == null)
              throw new D();
            let R = null;
            for (let W = 1; R === null && W < I; W++)
              R = this.getBlackPointOnSegment(t, r + W, t - W, r);
            if (R == null)
              throw new D();
            let H = null;
            for (let W = 1; H === null && W < I; W++)
              H = this.getBlackPointOnSegment(t, n - W, t - W, n);
            if (H == null)
              throw new D();
            return this.centerEdges(H, b, R, T);
          } else
            throw new D();
        }
        getBlackPointOnSegment(e, t, r, n) {
          const i = Ee.round(Ee.distance(e, t, r, n)), s = (r - e) / i, a = (n - t) / i, o = this.image;
          for (let l = 0; l < i; l++) {
            const u = Ee.round(e + l * s), g = Ee.round(t + l * a);
            if (o.get(u, g))
              return new Q(u, g);
          }
          return null;
        }
        /**
         * recenters the points of a constant distance towards the center
         *
         * @param y bottom most point
         * @param z left most point
         * @param x right most point
         * @param t top most point
         * @return {@link ResultPoint}[] describing the corners of the rectangular
         *         region. The first and last points are opposed on the diagonal, as
         *         are the second and third. The first point will be the topmost
         *         point and the last, the bottommost. The second point will be
         *         leftmost and the third, the rightmost
         */
        centerEdges(e, t, r, n) {
          const i = e.getX(), s = e.getY(), a = t.getX(), o = t.getY(), l = r.getX(), u = r.getY(), g = n.getX(), x = n.getY(), y = Ht.CORR;
          return i < this.width / 2 ? [
            new Q(g - y, x + y),
            new Q(a + y, o + y),
            new Q(l - y, u - y),
            new Q(i + y, s - y)
          ] : [
            new Q(g + y, x + y),
            new Q(a + y, o - y),
            new Q(l - y, u + y),
            new Q(i - y, s - y)
          ];
        }
        /**
         * Determines whether a segment contains a black point
         *
         * @param a          min value of the scanned coordinate
         * @param b          max value of the scanned coordinate
         * @param fixed      value of fixed coordinate
         * @param horizontal set to true if scan must be horizontal, false if vertical
         * @return true if a black point has been found, else false.
         */
        containsBlackPoint(e, t, r, n) {
          const i = this.image;
          if (n) {
            for (let s = e; s <= t; s++)
              if (i.get(s, r))
                return !0;
          } else
            for (let s = e; s <= t; s++)
              if (i.get(r, s))
                return !0;
          return !1;
        }
      }
      Ht.INIT_SIZE = 10, Ht.CORR = 1;
      class br {
        /**
         * <p>Checks a set of points that have been transformed to sample points on an image against
         * the image's dimensions to see if the point are even within the image.</p>
         *
         * <p>This method will actually "nudge" the endpoints back onto the image if they are found to be
         * barely (less than 1 pixel) off the image. This accounts for imperfect detection of finder
         * patterns in an image where the QR Code runs all the way to the image border.</p>
         *
         * <p>For efficiency, the method will check points from either end of the line until one is found
         * to be within the image. Because the set of points are assumed to be linear, this is valid.</p>
         *
         * @param image image into which the points should map
         * @param points actual points in x1,y1,...,xn,yn form
         * @throws NotFoundException if an endpoint is lies outside the image boundaries
         */
        static checkAndNudgePoints(e, t) {
          const r = e.getWidth(), n = e.getHeight();
          let i = !0;
          for (let s = 0; s < t.length && i; s += 2) {
            const a = Math.floor(t[s]), o = Math.floor(t[s + 1]);
            if (a < -1 || a > r || o < -1 || o > n)
              throw new D();
            i = !1, a === -1 ? (t[s] = 0, i = !0) : a === r && (t[s] = r - 1, i = !0), o === -1 ? (t[s + 1] = 0, i = !0) : o === n && (t[s + 1] = n - 1, i = !0);
          }
          i = !0;
          for (let s = t.length - 2; s >= 0 && i; s -= 2) {
            const a = Math.floor(t[s]), o = Math.floor(t[s + 1]);
            if (a < -1 || a > r || o < -1 || o > n)
              throw new D();
            i = !1, a === -1 ? (t[s] = 0, i = !0) : a === r && (t[s] = r - 1, i = !0), o === -1 ? (t[s + 1] = 0, i = !0) : o === n && (t[s + 1] = n - 1, i = !0);
          }
        }
      }
      class St {
        constructor(e, t, r, n, i, s, a, o, l) {
          this.a11 = e, this.a21 = t, this.a31 = r, this.a12 = n, this.a22 = i, this.a32 = s, this.a13 = a, this.a23 = o, this.a33 = l;
        }
        static quadrilateralToQuadrilateral(e, t, r, n, i, s, a, o, l, u, g, x, y, I, b, T) {
          const R = St.quadrilateralToSquare(e, t, r, n, i, s, a, o);
          return St.squareToQuadrilateral(l, u, g, x, y, I, b, T).times(R);
        }
        transformPoints(e) {
          const t = e.length, r = this.a11, n = this.a12, i = this.a13, s = this.a21, a = this.a22, o = this.a23, l = this.a31, u = this.a32, g = this.a33;
          for (let x = 0; x < t; x += 2) {
            const y = e[x], I = e[x + 1], b = i * y + o * I + g;
            e[x] = (r * y + s * I + l) / b, e[x + 1] = (n * y + a * I + u) / b;
          }
        }
        transformPointsWithValues(e, t) {
          const r = this.a11, n = this.a12, i = this.a13, s = this.a21, a = this.a22, o = this.a23, l = this.a31, u = this.a32, g = this.a33, x = e.length;
          for (let y = 0; y < x; y++) {
            const I = e[y], b = t[y], T = i * I + o * b + g;
            e[y] = (r * I + s * b + l) / T, t[y] = (n * I + a * b + u) / T;
          }
        }
        static squareToQuadrilateral(e, t, r, n, i, s, a, o) {
          const l = e - r + i - a, u = t - n + s - o;
          if (l === 0 && u === 0)
            return new St(r - e, i - r, e, n - t, s - n, t, 0, 0, 1);
          {
            const g = r - i, x = a - i, y = n - s, I = o - s, b = g * I - x * y, T = (l * I - x * u) / b, R = (g * u - l * y) / b;
            return new St(r - e + T * r, a - e + R * a, e, n - t + T * n, o - t + R * o, t, T, R, 1);
          }
        }
        static quadrilateralToSquare(e, t, r, n, i, s, a, o) {
          return St.squareToQuadrilateral(e, t, r, n, i, s, a, o).buildAdjoint();
        }
        buildAdjoint() {
          return new St(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21);
        }
        times(e) {
          return new St(this.a11 * e.a11 + this.a21 * e.a12 + this.a31 * e.a13, this.a11 * e.a21 + this.a21 * e.a22 + this.a31 * e.a23, this.a11 * e.a31 + this.a21 * e.a32 + this.a31 * e.a33, this.a12 * e.a11 + this.a22 * e.a12 + this.a32 * e.a13, this.a12 * e.a21 + this.a22 * e.a22 + this.a32 * e.a23, this.a12 * e.a31 + this.a22 * e.a32 + this.a32 * e.a33, this.a13 * e.a11 + this.a23 * e.a12 + this.a33 * e.a13, this.a13 * e.a21 + this.a23 * e.a22 + this.a33 * e.a23, this.a13 * e.a31 + this.a23 * e.a32 + this.a33 * e.a33);
        }
      }
      class Ur extends br {
        /*@Override*/
        sampleGrid(e, t, r, n, i, s, a, o, l, u, g, x, y, I, b, T, R, H, W) {
          const U = St.quadrilateralToQuadrilateral(n, i, s, a, o, l, u, g, x, y, I, b, T, R, H, W);
          return this.sampleGridWithTransform(e, t, r, U);
        }
        /*@Override*/
        sampleGridWithTransform(e, t, r, n) {
          if (t <= 0 || r <= 0)
            throw new D();
          const i = new Oe(t, r), s = new Float32Array(2 * t);
          for (let a = 0; a < r; a++) {
            const o = s.length, l = a + 0.5;
            for (let u = 0; u < o; u += 2)
              s[u] = u / 2 + 0.5, s[u + 1] = l;
            n.transformPoints(s), br.checkAndNudgePoints(e, s);
            try {
              for (let u = 0; u < o; u += 2)
                e.get(Math.floor(s[u]), Math.floor(s[u + 1])) && i.set(u / 2, a);
            } catch {
              throw new D();
            }
          }
          return i;
        }
      }
      class Yt {
        /**
         * Sets the implementation of GridSampler used by the library. One global
         * instance is stored, which may sound problematic. But, the implementation provided
         * ought to be appropriate for the entire platform, and all uses of this library
         * in the whole lifetime of the JVM. For instance, an Android activity can swap in
         * an implementation that takes advantage of native platform libraries.
         *
         * @param newGridSampler The platform-specific object to install.
         */
        static setGridSampler(e) {
          Yt.gridSampler = e;
        }
        /**
         * @return the current implementation of GridSampler
         */
        static getInstance() {
          return Yt.gridSampler;
        }
      }
      Yt.gridSampler = new Ur();
      class dt {
        constructor(e, t) {
          this.x = e, this.y = t;
        }
        toResultPoint() {
          return new Q(this.getX(), this.getY());
        }
        getX() {
          return this.x;
        }
        getY() {
          return this.y;
        }
      }
      class Vr {
        constructor(e) {
          this.EXPECTED_CORNER_BITS = new Int32Array([
            3808,
            476,
            2107,
            1799
          ]), this.image = e;
        }
        detect() {
          return this.detectMirror(!1);
        }
        /**
         * Detects an Aztec Code in an image.
         *
         * @param isMirror if true, image is a mirror-image of original
         * @return {@link AztecDetectorResult} encapsulating results of detecting an Aztec Code
         * @throws NotFoundException if no Aztec Code can be found
         */
        detectMirror(e) {
          let t = this.getMatrixCenter(), r = this.getBullsEyeCorners(t);
          if (e) {
            let s = r[0];
            r[0] = r[2], r[2] = s;
          }
          this.extractParameters(r);
          let n = this.sampleGrid(this.image, r[this.shift % 4], r[(this.shift + 1) % 4], r[(this.shift + 2) % 4], r[(this.shift + 3) % 4]), i = this.getMatrixCornerPoints(r);
          return new an(n, i, this.compact, this.nbDataBlocks, this.nbLayers);
        }
        /**
         * Extracts the number of data layers and data blocks from the layer around the bull's eye.
         *
         * @param bullsEyeCorners the array of bull's eye corners
         * @throws NotFoundException in case of too many errors or invalid parameters
         */
        extractParameters(e) {
          if (!this.isValidPoint(e[0]) || !this.isValidPoint(e[1]) || !this.isValidPoint(e[2]) || !this.isValidPoint(e[3]))
            throw new D();
          let t = 2 * this.nbCenterLayers, r = new Int32Array([
            this.sampleLine(e[0], e[1], t),
            this.sampleLine(e[1], e[2], t),
            this.sampleLine(e[2], e[3], t),
            this.sampleLine(e[3], e[0], t)
            // Top
          ]);
          this.shift = this.getRotation(r, t);
          let n = 0;
          for (let s = 0; s < 4; s++) {
            let a = r[(this.shift + s) % 4];
            this.compact ? (n <<= 7, n += a >> 1 & 127) : (n <<= 10, n += (a >> 2 & 992) + (a >> 1 & 31));
          }
          let i = this.getCorrectedParameterData(n, this.compact);
          this.compact ? (this.nbLayers = (i >> 6) + 1, this.nbDataBlocks = (i & 63) + 1) : (this.nbLayers = (i >> 11) + 1, this.nbDataBlocks = (i & 2047) + 1);
        }
        getRotation(e, t) {
          let r = 0;
          e.forEach((n, i, s) => {
            let a = (n >> t - 2 << 1) + (n & 1);
            r = (r << 3) + a;
          }), r = ((r & 1) << 11) + (r >> 1);
          for (let n = 0; n < 4; n++)
            if (V.bitCount(r ^ this.EXPECTED_CORNER_BITS[n]) <= 2)
              return n;
          throw new D();
        }
        /**
         * Corrects the parameter bits using Reed-Solomon algorithm.
         *
         * @param parameterData parameter bits
         * @param compact true if this is a compact Aztec code
         * @throws NotFoundException if the array contains too many errors
         */
        getCorrectedParameterData(e, t) {
          let r, n;
          t ? (r = 7, n = 2) : (r = 10, n = 4);
          let i = r - n, s = new Int32Array(r);
          for (let o = r - 1; o >= 0; --o)
            s[o] = e & 15, e >>= 4;
          try {
            new Gt(_e.AZTEC_PARAM).decode(s, i);
          } catch {
            throw new D();
          }
          let a = 0;
          for (let o = 0; o < n; o++)
            a = (a << 4) + s[o];
          return a;
        }
        /**
         * Finds the corners of a bull-eye centered on the passed point.
         * This returns the centers of the diagonal points just outside the bull's eye
         * Returns [topRight, bottomRight, bottomLeft, topLeft]
         *
         * @param pCenter Center point
         * @return The corners of the bull-eye
         * @throws NotFoundException If no valid bull-eye can be found
         */
        getBullsEyeCorners(e) {
          let t = e, r = e, n = e, i = e, s = !0;
          for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
            let g = this.getFirstDifferent(t, s, 1, -1), x = this.getFirstDifferent(r, s, 1, 1), y = this.getFirstDifferent(n, s, -1, 1), I = this.getFirstDifferent(i, s, -1, -1);
            if (this.nbCenterLayers > 2) {
              let b = this.distancePoint(I, g) * this.nbCenterLayers / (this.distancePoint(i, t) * (this.nbCenterLayers + 2));
              if (b < 0.75 || b > 1.25 || !this.isWhiteOrBlackRectangle(g, x, y, I))
                break;
            }
            t = g, r = x, n = y, i = I, s = !s;
          }
          if (this.nbCenterLayers !== 5 && this.nbCenterLayers !== 7)
            throw new D();
          this.compact = this.nbCenterLayers === 5;
          let a = new Q(t.getX() + 0.5, t.getY() - 0.5), o = new Q(r.getX() + 0.5, r.getY() + 0.5), l = new Q(n.getX() - 0.5, n.getY() + 0.5), u = new Q(i.getX() - 0.5, i.getY() - 0.5);
          return this.expandSquare([a, o, l, u], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers);
        }
        /**
         * Finds a candidate center point of an Aztec code from an image
         *
         * @return the center point
         */
        getMatrixCenter() {
          let e, t, r, n;
          try {
            let a = new Ht(this.image).detect();
            e = a[0], t = a[1], r = a[2], n = a[3];
          } catch {
            let o = this.image.getWidth() / 2, l = this.image.getHeight() / 2;
            e = this.getFirstDifferent(new dt(o + 7, l - 7), !1, 1, -1).toResultPoint(), t = this.getFirstDifferent(new dt(o + 7, l + 7), !1, 1, 1).toResultPoint(), r = this.getFirstDifferent(new dt(o - 7, l + 7), !1, -1, 1).toResultPoint(), n = this.getFirstDifferent(new dt(o - 7, l - 7), !1, -1, -1).toResultPoint();
          }
          let i = Ee.round((e.getX() + n.getX() + t.getX() + r.getX()) / 4), s = Ee.round((e.getY() + n.getY() + t.getY() + r.getY()) / 4);
          try {
            let a = new Ht(this.image, 15, i, s).detect();
            e = a[0], t = a[1], r = a[2], n = a[3];
          } catch {
            e = this.getFirstDifferent(new dt(i + 7, s - 7), !1, 1, -1).toResultPoint(), t = this.getFirstDifferent(new dt(i + 7, s + 7), !1, 1, 1).toResultPoint(), r = this.getFirstDifferent(new dt(i - 7, s + 7), !1, -1, 1).toResultPoint(), n = this.getFirstDifferent(new dt(i - 7, s - 7), !1, -1, -1).toResultPoint();
          }
          return i = Ee.round((e.getX() + n.getX() + t.getX() + r.getX()) / 4), s = Ee.round((e.getY() + n.getY() + t.getY() + r.getY()) / 4), new dt(i, s);
        }
        /**
         * Gets the Aztec code corners from the bull's eye corners and the parameters.
         *
         * @param bullsEyeCorners the array of bull's eye corners
         * @return the array of aztec code corners
         */
        getMatrixCornerPoints(e) {
          return this.expandSquare(e, 2 * this.nbCenterLayers, this.getDimension());
        }
        /**
         * Creates a BitMatrix by sampling the provided image.
         * topLeft, topRight, bottomRight, and bottomLeft are the centers of the squares on the
         * diagonal just outside the bull's eye.
         */
        sampleGrid(e, t, r, n, i) {
          let s = Yt.getInstance(), a = this.getDimension(), o = a / 2 - this.nbCenterLayers, l = a / 2 + this.nbCenterLayers;
          return s.sampleGrid(
            e,
            a,
            a,
            o,
            o,
            // topleft
            l,
            o,
            // topright
            l,
            l,
            // bottomright
            o,
            l,
            // bottomleft
            t.getX(),
            t.getY(),
            r.getX(),
            r.getY(),
            n.getX(),
            n.getY(),
            i.getX(),
            i.getY()
          );
        }
        /**
         * Samples a line.
         *
         * @param p1   start point (inclusive)
         * @param p2   end point (exclusive)
         * @param size number of bits
         * @return the array of bits as an int (first bit is high-order bit of result)
         */
        sampleLine(e, t, r) {
          let n = 0, i = this.distanceResultPoint(e, t), s = i / r, a = e.getX(), o = e.getY(), l = s * (t.getX() - e.getX()) / i, u = s * (t.getY() - e.getY()) / i;
          for (let g = 0; g < r; g++)
            this.image.get(Ee.round(a + g * l), Ee.round(o + g * u)) && (n |= 1 << r - g - 1);
          return n;
        }
        /**
         * @return true if the border of the rectangle passed in parameter is compound of white points only
         *         or black points only
         */
        isWhiteOrBlackRectangle(e, t, r, n) {
          let i = 3;
          e = new dt(e.getX() - i, e.getY() + i), t = new dt(t.getX() - i, t.getY() - i), r = new dt(r.getX() + i, r.getY() - i), n = new dt(n.getX() + i, n.getY() + i);
          let s = this.getColor(n, e);
          if (s === 0)
            return !1;
          let a = this.getColor(e, t);
          return a !== s || (a = this.getColor(t, r), a !== s) ? !1 : (a = this.getColor(r, n), a === s);
        }
        /**
         * Gets the color of a segment
         *
         * @return 1 if segment more than 90% black, -1 if segment is more than 90% white, 0 else
         */
        getColor(e, t) {
          let r = this.distancePoint(e, t), n = (t.getX() - e.getX()) / r, i = (t.getY() - e.getY()) / r, s = 0, a = e.getX(), o = e.getY(), l = this.image.get(e.getX(), e.getY()), u = Math.ceil(r);
          for (let x = 0; x < u; x++)
            a += n, o += i, this.image.get(Ee.round(a), Ee.round(o)) !== l && s++;
          let g = s / r;
          return g > 0.1 && g < 0.9 ? 0 : g <= 0.1 === l ? 1 : -1;
        }
        /**
         * Gets the coordinate of the first point with a different color in the given direction
         */
        getFirstDifferent(e, t, r, n) {
          let i = e.getX() + r, s = e.getY() + n;
          for (; this.isValid(i, s) && this.image.get(i, s) === t; )
            i += r, s += n;
          for (i -= r, s -= n; this.isValid(i, s) && this.image.get(i, s) === t; )
            i += r;
          for (i -= r; this.isValid(i, s) && this.image.get(i, s) === t; )
            s += n;
          return s -= n, new dt(i, s);
        }
        /**
         * Expand the square represented by the corner points by pushing out equally in all directions
         *
         * @param cornerPoints the corners of the square, which has the bull's eye at its center
         * @param oldSide the original length of the side of the square in the target bit matrix
         * @param newSide the new length of the size of the square in the target bit matrix
         * @return the corners of the expanded square
         */
        expandSquare(e, t, r) {
          let n = r / (2 * t), i = e[0].getX() - e[2].getX(), s = e[0].getY() - e[2].getY(), a = (e[0].getX() + e[2].getX()) / 2, o = (e[0].getY() + e[2].getY()) / 2, l = new Q(a + n * i, o + n * s), u = new Q(a - n * i, o - n * s);
          i = e[1].getX() - e[3].getX(), s = e[1].getY() - e[3].getY(), a = (e[1].getX() + e[3].getX()) / 2, o = (e[1].getY() + e[3].getY()) / 2;
          let g = new Q(a + n * i, o + n * s), x = new Q(a - n * i, o - n * s);
          return [l, g, u, x];
        }
        isValid(e, t) {
          return e >= 0 && e < this.image.getWidth() && t > 0 && t < this.image.getHeight();
        }
        isValidPoint(e) {
          let t = Ee.round(e.getX()), r = Ee.round(e.getY());
          return this.isValid(t, r);
        }
        distancePoint(e, t) {
          return Ee.distance(e.getX(), e.getY(), t.getX(), t.getY());
        }
        distanceResultPoint(e, t) {
          return Ee.distance(e.getX(), e.getY(), t.getX(), t.getY());
        }
        getDimension() {
          return this.compact ? 4 * this.nbLayers + 11 : this.nbLayers <= 4 ? 4 * this.nbLayers + 15 : 4 * this.nbLayers + 2 * (V.truncDivision(this.nbLayers - 4, 8) + 1) + 15;
        }
      }
      class _r {
        /**
         * Locates and decodes a Data Matrix code in an image.
         *
         * @return a String representing the content encoded by the Data Matrix code
         * @throws NotFoundException if a Data Matrix code cannot be found
         * @throws FormatException if a Data Matrix code cannot be decoded
         */
        decode(e, t = null) {
          let r = null, n = new Vr(e.getBlackMatrix()), i = null, s = null;
          try {
            let u = n.detectMirror(!1);
            i = u.getPoints(), this.reportFoundResultPoints(t, i), s = new Be().decode(u);
          } catch (u) {
            r = u;
          }
          if (s == null)
            try {
              let u = n.detectMirror(!0);
              i = u.getPoints(), this.reportFoundResultPoints(t, i), s = new Be().decode(u);
            } catch (u) {
              throw r ?? u;
            }
          let a = new Ke(s.getText(), s.getRawBytes(), s.getNumBits(), i, re.AZTEC, j.currentTimeMillis()), o = s.getByteSegments();
          o != null && a.putMetadata(qe.BYTE_SEGMENTS, o);
          let l = s.getECLevel();
          return l != null && a.putMetadata(qe.ERROR_CORRECTION_LEVEL, l), a;
        }
        reportFoundResultPoints(e, t) {
          if (e != null) {
            let r = e.get(ce.NEED_RESULT_POINT_CALLBACK);
            r != null && t.forEach((n, i, s) => {
              r.foundPossibleResultPoint(n);
            });
          }
        }
        // @Override
        reset() {
        }
      }
      class Tn extends ot {
        /**
         * Creates an instance of BrowserAztecCodeReader.
         * @param {number} [timeBetweenScansMillis=500] the time delay between subsequent decode tries
         *
         * @memberOf BrowserAztecCodeReader
         */
        constructor(e = 500) {
          super(new _r(), e);
        }
      }
      class et {
        /*
        @Override
        public Result decode(BinaryBitmap image) throws NotFoundException, FormatException {
          return decode(image, null);
        }
        */
        // Note that we don't try rotation without the try harder flag, even if rotation was supported.
        // @Override
        decode(e, t) {
          try {
            return this.doDecode(e, t);
          } catch {
            if (t && t.get(ce.TRY_HARDER) === !0 && e.isRotateSupported()) {
              const i = e.rotateCounterClockwise(), s = this.doDecode(i, t), a = s.getResultMetadata();
              let o = 270;
              a !== null && a.get(qe.ORIENTATION) === !0 && (o = o + a.get(qe.ORIENTATION) % 360), s.putMetadata(qe.ORIENTATION, o);
              const l = s.getResultPoints();
              if (l !== null) {
                const u = i.getHeight();
                for (let g = 0; g < l.length; g++)
                  l[g] = new Q(u - l[g].getY() - 1, l[g].getX());
              }
              return s;
            } else
              throw new D();
          }
        }
        // @Override
        reset() {
        }
        /**
         * We're going to examine rows from the middle outward, searching alternately above and below the
         * middle, and farther out each time. rowStep is the number of rows between each successive
         * attempt above and below the middle. So we'd scan row middle, then middle - rowStep, then
         * middle + rowStep, then middle - (2 * rowStep), etc.
         * rowStep is bigger as the image is taller, but is always at least 1. We've somewhat arbitrarily
         * decided that moving up and down by about 1/16 of the image is pretty good; we try more of the
         * image if "trying harder".
         *
         * @param image The image to decode
         * @param hints Any hints that were requested
         * @return The contents of the decoded barcode
         * @throws NotFoundException Any spontaneous errors which occur
         */
        doDecode(e, t) {
          const r = e.getWidth(), n = e.getHeight();
          let i = new z(r);
          const s = t && t.get(ce.TRY_HARDER) === !0, a = Math.max(1, n >> (s ? 8 : 5));
          let o;
          s ? o = n : o = 15;
          const l = Math.trunc(n / 2);
          for (let u = 0; u < o; u++) {
            const g = Math.trunc((u + 1) / 2), x = (u & 1) === 0, y = l + a * (x ? g : -g);
            if (y < 0 || y >= n)
              break;
            try {
              i = e.getBlackRow(y, i);
            } catch {
              continue;
            }
            for (let I = 0; I < 2; I++) {
              if (I === 1 && (i.reverse(), t && t.get(ce.NEED_RESULT_POINT_CALLBACK) === !0)) {
                const b = /* @__PURE__ */ new Map();
                t.forEach((T, R) => b.set(R, T)), b.delete(ce.NEED_RESULT_POINT_CALLBACK), t = b;
              }
              try {
                const b = this.decodeRow(y, i, t);
                if (I === 1) {
                  b.putMetadata(qe.ORIENTATION, 180);
                  const T = b.getResultPoints();
                  T !== null && (T[0] = new Q(r - T[0].getX() - 1, T[0].getY()), T[1] = new Q(r - T[1].getX() - 1, T[1].getY()));
                }
                return b;
              } catch {
              }
            }
          }
          throw new D();
        }
        /**
         * Records the size of successive runs of white and black pixels in a row, starting at a given point.
         * The values are recorded in the given array, and the number of runs recorded is equal to the size
         * of the array. If the row starts on a white pixel at the given start point, then the first count
         * recorded is the run of white pixels starting from that point; likewise it is the count of a run
         * of black pixels if the row begin on a black pixels at that point.
         *
         * @param row row to count from
         * @param start offset into row to start at
         * @param counters array into which to record counts
         * @throws NotFoundException if counters cannot be filled entirely from row before running out
         *  of pixels
         */
        static recordPattern(e, t, r) {
          const n = r.length;
          for (let l = 0; l < n; l++)
            r[l] = 0;
          const i = e.getSize();
          if (t >= i)
            throw new D();
          let s = !e.get(t), a = 0, o = t;
          for (; o < i; ) {
            if (e.get(o) !== s)
              r[a]++;
            else {
              if (++a === n)
                break;
              r[a] = 1, s = !s;
            }
            o++;
          }
          if (!(a === n || a === n - 1 && o === i))
            throw new D();
        }
        static recordPatternInReverse(e, t, r) {
          let n = r.length, i = e.get(t);
          for (; t > 0 && n >= 0; )
            e.get(--t) !== i && (n--, i = !i);
          if (n >= 0)
            throw new D();
          et.recordPattern(e, t + 1, r);
        }
        /**
         * Determines how closely a set of observed counts of runs of black/white values matches a given
         * target pattern. This is reported as the ratio of the total variance from the expected pattern
         * proportions across all pattern elements, to the length of the pattern.
         *
         * @param counters observed counters
         * @param pattern expected pattern
         * @param maxIndividualVariance The most any counter can differ before we give up
         * @return ratio of total variance between counters and pattern compared to total pattern size
         */
        static patternMatchVariance(e, t, r) {
          const n = e.length;
          let i = 0, s = 0;
          for (let l = 0; l < n; l++)
            i += e[l], s += t[l];
          if (i < s)
            return Number.POSITIVE_INFINITY;
          const a = i / s;
          r *= a;
          let o = 0;
          for (let l = 0; l < n; l++) {
            const u = e[l], g = t[l] * a, x = u > g ? u - g : g - u;
            if (x > r)
              return Number.POSITIVE_INFINITY;
            o += x;
          }
          return o / i;
        }
      }
      class X extends et {
        static findStartPattern(e) {
          const t = e.getSize(), r = e.getNextSet(0);
          let n = 0, i = Int32Array.from([0, 0, 0, 0, 0, 0]), s = r, a = !1;
          const o = 6;
          for (let l = r; l < t; l++)
            if (e.get(l) !== a)
              i[n]++;
            else {
              if (n === o - 1) {
                let u = X.MAX_AVG_VARIANCE, g = -1;
                for (let x = X.CODE_START_A; x <= X.CODE_START_C; x++) {
                  const y = et.patternMatchVariance(i, X.CODE_PATTERNS[x], X.MAX_INDIVIDUAL_VARIANCE);
                  y < u && (u = y, g = x);
                }
                if (g >= 0 && e.isRange(Math.max(0, s - (l - s) / 2), s, !1))
                  return Int32Array.from([s, l, g]);
                s += i[0] + i[1], i = i.slice(2, i.length - 1), i[n - 1] = 0, i[n] = 0, n--;
              } else
                n++;
              i[n] = 1, a = !a;
            }
          throw new D();
        }
        static decodeCode(e, t, r) {
          et.recordPattern(e, r, t);
          let n = X.MAX_AVG_VARIANCE, i = -1;
          for (let s = 0; s < X.CODE_PATTERNS.length; s++) {
            const a = X.CODE_PATTERNS[s], o = this.patternMatchVariance(t, a, X.MAX_INDIVIDUAL_VARIANCE);
            o < n && (n = o, i = s);
          }
          if (i >= 0)
            return i;
          throw new D();
        }
        decodeRow(e, t, r) {
          const n = r && r.get(ce.ASSUME_GS1) === !0, i = X.findStartPattern(t), s = i[2];
          let a = 0;
          const o = new Uint8Array(20);
          o[a++] = s;
          let l;
          switch (s) {
            case X.CODE_START_A:
              l = X.CODE_CODE_A;
              break;
            case X.CODE_START_B:
              l = X.CODE_CODE_B;
              break;
            case X.CODE_START_C:
              l = X.CODE_CODE_C;
              break;
            default:
              throw new L();
          }
          let u = !1, g = !1, x = "", y = i[0], I = i[1];
          const b = Int32Array.from([0, 0, 0, 0, 0, 0]);
          let T = 0, R = 0, H = s, W = 0, U = !0, pe = !1, de = !1;
          for (; !u; ) {
            const Mr = g;
            switch (g = !1, T = R, R = X.decodeCode(t, b, I), o[a++] = R, R !== X.CODE_STOP && (U = !0), R !== X.CODE_STOP && (W++, H += W * R), y = I, I += b.reduce((is, ss) => is + ss, 0), R) {
              case X.CODE_START_A:
              case X.CODE_START_B:
              case X.CODE_START_C:
                throw new L();
            }
            switch (l) {
              case X.CODE_CODE_A:
                if (R < 64)
                  de === pe ? x += String.fromCharCode(32 + R) : x += String.fromCharCode(32 + R + 128), de = !1;
                else if (R < 96)
                  de === pe ? x += String.fromCharCode(R - 64) : x += String.fromCharCode(R + 64), de = !1;
                else
                  switch (R !== X.CODE_STOP && (U = !1), R) {
                    case X.CODE_FNC_1:
                      n && (x.length === 0 ? x += "]C1" : x += "");
                      break;
                    case X.CODE_FNC_2:
                    case X.CODE_FNC_3:
                      break;
                    case X.CODE_FNC_4_A:
                      !pe && de ? (pe = !0, de = !1) : pe && de ? (pe = !1, de = !1) : de = !0;
                      break;
                    case X.CODE_SHIFT:
                      g = !0, l = X.CODE_CODE_B;
                      break;
                    case X.CODE_CODE_B:
                      l = X.CODE_CODE_B;
                      break;
                    case X.CODE_CODE_C:
                      l = X.CODE_CODE_C;
                      break;
                    case X.CODE_STOP:
                      u = !0;
                      break;
                  }
                break;
              case X.CODE_CODE_B:
                if (R < 96)
                  de === pe ? x += String.fromCharCode(32 + R) : x += String.fromCharCode(32 + R + 128), de = !1;
                else
                  switch (R !== X.CODE_STOP && (U = !1), R) {
                    case X.CODE_FNC_1:
                      n && (x.length === 0 ? x += "]C1" : x += "");
                      break;
                    case X.CODE_FNC_2:
                    case X.CODE_FNC_3:
                      break;
                    case X.CODE_FNC_4_B:
                      !pe && de ? (pe = !0, de = !1) : pe && de ? (pe = !1, de = !1) : de = !0;
                      break;
                    case X.CODE_SHIFT:
                      g = !0, l = X.CODE_CODE_A;
                      break;
                    case X.CODE_CODE_A:
                      l = X.CODE_CODE_A;
                      break;
                    case X.CODE_CODE_C:
                      l = X.CODE_CODE_C;
                      break;
                    case X.CODE_STOP:
                      u = !0;
                      break;
                  }
                break;
              case X.CODE_CODE_C:
                if (R < 100)
                  R < 10 && (x += "0"), x += R;
                else
                  switch (R !== X.CODE_STOP && (U = !1), R) {
                    case X.CODE_FNC_1:
                      n && (x.length === 0 ? x += "]C1" : x += "");
                      break;
                    case X.CODE_CODE_A:
                      l = X.CODE_CODE_A;
                      break;
                    case X.CODE_CODE_B:
                      l = X.CODE_CODE_B;
                      break;
                    case X.CODE_STOP:
                      u = !0;
                      break;
                  }
                break;
            }
            Mr && (l = l === X.CODE_CODE_A ? X.CODE_CODE_B : X.CODE_CODE_A);
          }
          const vt = I - y;
          if (I = t.getNextUnset(I), !t.isRange(I, Math.min(t.getSize(), I + (I - y) / 2), !1))
            throw new D();
          if (H -= W * T, H % 103 !== T)
            throw new q();
          const Xt = x.length;
          if (Xt === 0)
            throw new D();
          Xt > 0 && U && (l === X.CODE_CODE_C ? x = x.substring(0, Xt - 2) : x = x.substring(0, Xt - 1));
          const Dt = (i[1] + i[0]) / 2, He = y + vt / 2, mt = o.length, Lt = new Uint8Array(mt);
          for (let Mr = 0; Mr < mt; Mr++)
            Lt[Mr] = o[Mr];
          const Dr = [new Q(Dt, e), new Q(He, e)];
          return new Ke(x, Lt, 0, Dr, re.CODE_128, (/* @__PURE__ */ new Date()).getTime());
        }
      }
      X.CODE_PATTERNS = [
        Int32Array.from([2, 1, 2, 2, 2, 2]),
        Int32Array.from([2, 2, 2, 1, 2, 2]),
        Int32Array.from([2, 2, 2, 2, 2, 1]),
        Int32Array.from([1, 2, 1, 2, 2, 3]),
        Int32Array.from([1, 2, 1, 3, 2, 2]),
        Int32Array.from([1, 3, 1, 2, 2, 2]),
        Int32Array.from([1, 2, 2, 2, 1, 3]),
        Int32Array.from([1, 2, 2, 3, 1, 2]),
        Int32Array.from([1, 3, 2, 2, 1, 2]),
        Int32Array.from([2, 2, 1, 2, 1, 3]),
        Int32Array.from([2, 2, 1, 3, 1, 2]),
        Int32Array.from([2, 3, 1, 2, 1, 2]),
        Int32Array.from([1, 1, 2, 2, 3, 2]),
        Int32Array.from([1, 2, 2, 1, 3, 2]),
        Int32Array.from([1, 2, 2, 2, 3, 1]),
        Int32Array.from([1, 1, 3, 2, 2, 2]),
        Int32Array.from([1, 2, 3, 1, 2, 2]),
        Int32Array.from([1, 2, 3, 2, 2, 1]),
        Int32Array.from([2, 2, 3, 2, 1, 1]),
        Int32Array.from([2, 2, 1, 1, 3, 2]),
        Int32Array.from([2, 2, 1, 2, 3, 1]),
        Int32Array.from([2, 1, 3, 2, 1, 2]),
        Int32Array.from([2, 2, 3, 1, 1, 2]),
        Int32Array.from([3, 1, 2, 1, 3, 1]),
        Int32Array.from([3, 1, 1, 2, 2, 2]),
        Int32Array.from([3, 2, 1, 1, 2, 2]),
        Int32Array.from([3, 2, 1, 2, 2, 1]),
        Int32Array.from([3, 1, 2, 2, 1, 2]),
        Int32Array.from([3, 2, 2, 1, 1, 2]),
        Int32Array.from([3, 2, 2, 2, 1, 1]),
        Int32Array.from([2, 1, 2, 1, 2, 3]),
        Int32Array.from([2, 1, 2, 3, 2, 1]),
        Int32Array.from([2, 3, 2, 1, 2, 1]),
        Int32Array.from([1, 1, 1, 3, 2, 3]),
        Int32Array.from([1, 3, 1, 1, 2, 3]),
        Int32Array.from([1, 3, 1, 3, 2, 1]),
        Int32Array.from([1, 1, 2, 3, 1, 3]),
        Int32Array.from([1, 3, 2, 1, 1, 3]),
        Int32Array.from([1, 3, 2, 3, 1, 1]),
        Int32Array.from([2, 1, 1, 3, 1, 3]),
        Int32Array.from([2, 3, 1, 1, 1, 3]),
        Int32Array.from([2, 3, 1, 3, 1, 1]),
        Int32Array.from([1, 1, 2, 1, 3, 3]),
        Int32Array.from([1, 1, 2, 3, 3, 1]),
        Int32Array.from([1, 3, 2, 1, 3, 1]),
        Int32Array.from([1, 1, 3, 1, 2, 3]),
        Int32Array.from([1, 1, 3, 3, 2, 1]),
        Int32Array.from([1, 3, 3, 1, 2, 1]),
        Int32Array.from([3, 1, 3, 1, 2, 1]),
        Int32Array.from([2, 1, 1, 3, 3, 1]),
        Int32Array.from([2, 3, 1, 1, 3, 1]),
        Int32Array.from([2, 1, 3, 1, 1, 3]),
        Int32Array.from([2, 1, 3, 3, 1, 1]),
        Int32Array.from([2, 1, 3, 1, 3, 1]),
        Int32Array.from([3, 1, 1, 1, 2, 3]),
        Int32Array.from([3, 1, 1, 3, 2, 1]),
        Int32Array.from([3, 3, 1, 1, 2, 1]),
        Int32Array.from([3, 1, 2, 1, 1, 3]),
        Int32Array.from([3, 1, 2, 3, 1, 1]),
        Int32Array.from([3, 3, 2, 1, 1, 1]),
        Int32Array.from([3, 1, 4, 1, 1, 1]),
        Int32Array.from([2, 2, 1, 4, 1, 1]),
        Int32Array.from([4, 3, 1, 1, 1, 1]),
        Int32Array.from([1, 1, 1, 2, 2, 4]),
        Int32Array.from([1, 1, 1, 4, 2, 2]),
        Int32Array.from([1, 2, 1, 1, 2, 4]),
        Int32Array.from([1, 2, 1, 4, 2, 1]),
        Int32Array.from([1, 4, 1, 1, 2, 2]),
        Int32Array.from([1, 4, 1, 2, 2, 1]),
        Int32Array.from([1, 1, 2, 2, 1, 4]),
        Int32Array.from([1, 1, 2, 4, 1, 2]),
        Int32Array.from([1, 2, 2, 1, 1, 4]),
        Int32Array.from([1, 2, 2, 4, 1, 1]),
        Int32Array.from([1, 4, 2, 1, 1, 2]),
        Int32Array.from([1, 4, 2, 2, 1, 1]),
        Int32Array.from([2, 4, 1, 2, 1, 1]),
        Int32Array.from([2, 2, 1, 1, 1, 4]),
        Int32Array.from([4, 1, 3, 1, 1, 1]),
        Int32Array.from([2, 4, 1, 1, 1, 2]),
        Int32Array.from([1, 3, 4, 1, 1, 1]),
        Int32Array.from([1, 1, 1, 2, 4, 2]),
        Int32Array.from([1, 2, 1, 1, 4, 2]),
        Int32Array.from([1, 2, 1, 2, 4, 1]),
        Int32Array.from([1, 1, 4, 2, 1, 2]),
        Int32Array.from([1, 2, 4, 1, 1, 2]),
        Int32Array.from([1, 2, 4, 2, 1, 1]),
        Int32Array.from([4, 1, 1, 2, 1, 2]),
        Int32Array.from([4, 2, 1, 1, 1, 2]),
        Int32Array.from([4, 2, 1, 2, 1, 1]),
        Int32Array.from([2, 1, 2, 1, 4, 1]),
        Int32Array.from([2, 1, 4, 1, 2, 1]),
        Int32Array.from([4, 1, 2, 1, 2, 1]),
        Int32Array.from([1, 1, 1, 1, 4, 3]),
        Int32Array.from([1, 1, 1, 3, 4, 1]),
        Int32Array.from([1, 3, 1, 1, 4, 1]),
        Int32Array.from([1, 1, 4, 1, 1, 3]),
        Int32Array.from([1, 1, 4, 3, 1, 1]),
        Int32Array.from([4, 1, 1, 1, 1, 3]),
        Int32Array.from([4, 1, 1, 3, 1, 1]),
        Int32Array.from([1, 1, 3, 1, 4, 1]),
        Int32Array.from([1, 1, 4, 1, 3, 1]),
        Int32Array.from([3, 1, 1, 1, 4, 1]),
        Int32Array.from([4, 1, 1, 1, 3, 1]),
        Int32Array.from([2, 1, 1, 4, 1, 2]),
        Int32Array.from([2, 1, 1, 2, 1, 4]),
        Int32Array.from([2, 1, 1, 2, 3, 2]),
        Int32Array.from([2, 3, 3, 1, 1, 1, 2])
      ], X.MAX_AVG_VARIANCE = 0.25, X.MAX_INDIVIDUAL_VARIANCE = 0.7, X.CODE_SHIFT = 98, X.CODE_CODE_C = 99, X.CODE_CODE_B = 100, X.CODE_CODE_A = 101, X.CODE_FNC_1 = 102, X.CODE_FNC_2 = 97, X.CODE_FNC_3 = 96, X.CODE_FNC_4_A = 101, X.CODE_FNC_4_B = 100, X.CODE_START_A = 103, X.CODE_START_B = 104, X.CODE_START_C = 105, X.CODE_STOP = 106;
      class st extends et {
        /**
         * Creates a reader that assumes all encoded data is data, and does not treat the final
         * character as a check digit. It will not decoded "extended Code 39" sequences.
         */
        // public Code39Reader() {
        //   this(false);
        // }
        /**
         * Creates a reader that can be configured to check the last character as a check digit.
         * It will not decoded "extended Code 39" sequences.
         *
         * @param usingCheckDigit if true, treat the last data character as a check digit, not
         * data, and verify that the checksum passes.
         */
        // public Code39Reader(boolean usingCheckDigit) {
        //   this(usingCheckDigit, false);
        // }
        /**
         * Creates a reader that can be configured to check the last character as a check digit,
         * or optionally attempt to decode "extended Code 39" sequences that are used to encode
         * the full ASCII character set.
         *
         * @param usingCheckDigit if true, treat the last data character as a check digit, not
         * data, and verify that the checksum passes.
         * @param extendedMode if true, will attempt to decode extended Code 39 sequences in the
         * text.
         */
        constructor(e = !1, t = !1) {
          super(), this.usingCheckDigit = e, this.extendedMode = t, this.decodeRowResult = "", this.counters = new Int32Array(9);
        }
        decodeRow(e, t, r) {
          let n = this.counters;
          n.fill(0), this.decodeRowResult = "";
          let i = st.findAsteriskPattern(t, n), s = t.getNextSet(i[1]), a = t.getSize(), o, l;
          do {
            st.recordPattern(t, s, n);
            let b = st.toNarrowWidePattern(n);
            if (b < 0)
              throw new D();
            o = st.patternToChar(b), this.decodeRowResult += o, l = s;
            for (let T of n)
              s += T;
            s = t.getNextSet(s);
          } while (o !== "*");
          this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
          let u = 0;
          for (let b of n)
            u += b;
          let g = s - l - u;
          if (s !== a && g * 2 < u)
            throw new D();
          if (this.usingCheckDigit) {
            let b = this.decodeRowResult.length - 1, T = 0;
            for (let R = 0; R < b; R++)
              T += st.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(R));
            if (this.decodeRowResult.charAt(b) !== st.ALPHABET_STRING.charAt(T % 43))
              throw new q();
            this.decodeRowResult = this.decodeRowResult.substring(0, b);
          }
          if (this.decodeRowResult.length === 0)
            throw new D();
          let x;
          this.extendedMode ? x = st.decodeExtended(this.decodeRowResult) : x = this.decodeRowResult;
          let y = (i[1] + i[0]) / 2, I = l + u / 2;
          return new Ke(x, null, 0, [new Q(y, e), new Q(I, e)], re.CODE_39, (/* @__PURE__ */ new Date()).getTime());
        }
        static findAsteriskPattern(e, t) {
          let r = e.getSize(), n = e.getNextSet(0), i = 0, s = n, a = !1, o = t.length;
          for (let l = n; l < r; l++)
            if (e.get(l) !== a)
              t[i]++;
            else {
              if (i === o - 1) {
                if (this.toNarrowWidePattern(t) === st.ASTERISK_ENCODING && e.isRange(Math.max(0, s - Math.floor((l - s) / 2)), s, !1))
                  return [s, l];
                s += t[0] + t[1], t.copyWithin(0, 2, 2 + i - 1), t[i - 1] = 0, t[i] = 0, i--;
              } else
                i++;
              t[i] = 1, a = !a;
            }
          throw new D();
        }
        // For efficiency, returns -1 on failure. Not throwing here saved as many as 700 exceptions
        // per image when using some of our blackbox images.
        static toNarrowWidePattern(e) {
          let t = e.length, r = 0, n;
          do {
            let i = 2147483647;
            for (let o of e)
              o < i && o > r && (i = o);
            r = i, n = 0;
            let s = 0, a = 0;
            for (let o = 0; o < t; o++) {
              let l = e[o];
              l > r && (a |= 1 << t - 1 - o, n++, s += l);
            }
            if (n === 3) {
              for (let o = 0; o < t && n > 0; o++) {
                let l = e[o];
                if (l > r && (n--, l * 2 >= s))
                  return -1;
              }
              return a;
            }
          } while (n > 3);
          return -1;
        }
        static patternToChar(e) {
          for (let t = 0; t < st.CHARACTER_ENCODINGS.length; t++)
            if (st.CHARACTER_ENCODINGS[t] === e)
              return st.ALPHABET_STRING.charAt(t);
          if (e === st.ASTERISK_ENCODING)
            return "*";
          throw new D();
        }
        static decodeExtended(e) {
          let t = e.length, r = "";
          for (let n = 0; n < t; n++) {
            let i = e.charAt(n);
            if (i === "+" || i === "$" || i === "%" || i === "/") {
              let s = e.charAt(n + 1), a = "\0";
              switch (i) {
                case "+":
                  if (s >= "A" && s <= "Z")
                    a = String.fromCharCode(s.charCodeAt(0) + 32);
                  else
                    throw new L();
                  break;
                case "$":
                  if (s >= "A" && s <= "Z")
                    a = String.fromCharCode(s.charCodeAt(0) - 64);
                  else
                    throw new L();
                  break;
                case "%":
                  if (s >= "A" && s <= "E")
                    a = String.fromCharCode(s.charCodeAt(0) - 38);
                  else if (s >= "F" && s <= "J")
                    a = String.fromCharCode(s.charCodeAt(0) - 11);
                  else if (s >= "K" && s <= "O")
                    a = String.fromCharCode(s.charCodeAt(0) + 16);
                  else if (s >= "P" && s <= "T")
                    a = String.fromCharCode(s.charCodeAt(0) + 43);
                  else if (s === "U")
                    a = "\0";
                  else if (s === "V")
                    a = "@";
                  else if (s === "W")
                    a = "`";
                  else if (s === "X" || s === "Y" || s === "Z")
                    a = "";
                  else
                    throw new L();
                  break;
                case "/":
                  if (s >= "A" && s <= "O")
                    a = String.fromCharCode(s.charCodeAt(0) - 32);
                  else if (s === "Z")
                    a = ":";
                  else
                    throw new L();
                  break;
              }
              r += a, n++;
            } else
              r += i;
          }
          return r;
        }
      }
      st.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%", st.CHARACTER_ENCODINGS = [
        52,
        289,
        97,
        352,
        49,
        304,
        112,
        37,
        292,
        100,
        265,
        73,
        328,
        25,
        280,
        88,
        13,
        268,
        76,
        28,
        259,
        67,
        322,
        19,
        274,
        82,
        7,
        262,
        70,
        22,
        385,
        193,
        448,
        145,
        400,
        208,
        133,
        388,
        196,
        168,
        162,
        138,
        42
        // /-%
      ], st.ASTERISK_ENCODING = 148;
      class Le extends et {
        constructor() {
          super(...arguments), this.narrowLineWidth = -1;
        }
        // See ITFWriter.PATTERNS
        /*
        
          /!**
           * Patterns of Wide / Narrow lines to indicate each digit
           *!/
          */
        decodeRow(e, t, r) {
          let n = this.decodeStart(t), i = this.decodeEnd(t), s = new he();
          Le.decodeMiddle(t, n[1], i[0], s);
          let a = s.toString(), o = null;
          r != null && (o = r.get(ce.ALLOWED_LENGTHS)), o == null && (o = Le.DEFAULT_ALLOWED_LENGTHS);
          let l = a.length, u = !1, g = 0;
          for (let I of o) {
            if (l === I) {
              u = !0;
              break;
            }
            I > g && (g = I);
          }
          if (!u && l > g && (u = !0), !u)
            throw new L();
          const x = [new Q(n[1], e), new Q(i[0], e)];
          return new Ke(
            a,
            null,
            // no natural byte representation for these barcodes
            0,
            x,
            re.ITF,
            (/* @__PURE__ */ new Date()).getTime()
          );
        }
        /*
        /!**
         * @param row          row of black/white values to search
         * @param payloadStart offset of start pattern
         * @param resultString {@link StringBuilder} to append decoded chars to
         * @throws NotFoundException if decoding could not complete successfully
         *!/*/
        static decodeMiddle(e, t, r, n) {
          let i = new Int32Array(10), s = new Int32Array(5), a = new Int32Array(5);
          for (i.fill(0), s.fill(0), a.fill(0); t < r; ) {
            et.recordPattern(e, t, i);
            for (let l = 0; l < 5; l++) {
              let u = 2 * l;
              s[l] = i[u], a[l] = i[u + 1];
            }
            let o = Le.decodeDigit(s);
            n.append(o.toString()), o = this.decodeDigit(a), n.append(o.toString()), i.forEach(function(l) {
              t += l;
            });
          }
        }
        /*/!**
         * Identify where the start of the middle / payload section starts.
         *
         * @param row row of black/white values to search
         * @return Array, containing index of start of 'start block' and end of
         *         'start block'
         *!/*/
        decodeStart(e) {
          let t = Le.skipWhiteSpace(e), r = Le.findGuardPattern(e, t, Le.START_PATTERN);
          return this.narrowLineWidth = (r[1] - r[0]) / 4, this.validateQuietZone(e, r[0]), r;
        }
        /*/!**
         * The start & end patterns must be pre/post fixed by a quiet zone. This
         * zone must be at least 10 times the width of a narrow line.  Scan back until
         * we either get to the start of the barcode or match the necessary number of
         * quiet zone pixels.
         *
         * Note: Its assumed the row is reversed when using this method to find
         * quiet zone after the end pattern.
         *
         * ref: http://www.barcode-1.net/i25code.html
         *
         * @param row bit array representing the scanned barcode.
         * @param startPattern index into row of the start or end pattern.
         * @throws NotFoundException if the quiet zone cannot be found
         *!/*/
        validateQuietZone(e, t) {
          let r = this.narrowLineWidth * 10;
          r = r < t ? r : t;
          for (let n = t - 1; r > 0 && n >= 0 && !e.get(n); n--)
            r--;
          if (r !== 0)
            throw new D();
        }
        /*
        /!**
         * Skip all whitespace until we get to the first black line.
         *
         * @param row row of black/white values to search
         * @return index of the first black line.
         * @throws NotFoundException Throws exception if no black lines are found in the row
         *!/*/
        static skipWhiteSpace(e) {
          const t = e.getSize(), r = e.getNextSet(0);
          if (r === t)
            throw new D();
          return r;
        }
        /*/!**
         * Identify where the end of the middle / payload section ends.
         *
         * @param row row of black/white values to search
         * @return Array, containing index of start of 'end block' and end of 'end
         *         block'
         *!/*/
        decodeEnd(e) {
          e.reverse();
          try {
            let t = Le.skipWhiteSpace(e), r;
            try {
              r = Le.findGuardPattern(e, t, Le.END_PATTERN_REVERSED[0]);
            } catch (i) {
              i instanceof D && (r = Le.findGuardPattern(e, t, Le.END_PATTERN_REVERSED[1]));
            }
            this.validateQuietZone(e, r[0]);
            let n = r[0];
            return r[0] = e.getSize() - r[1], r[1] = e.getSize() - n, r;
          } finally {
            e.reverse();
          }
        }
        /*
        /!**
         * @param row       row of black/white values to search
         * @param rowOffset position to start search
         * @param pattern   pattern of counts of number of black and white pixels that are
         *                  being searched for as a pattern
         * @return start/end horizontal offset of guard pattern, as an array of two
         *         ints
         * @throws NotFoundException if pattern is not found
         *!/*/
        static findGuardPattern(e, t, r) {
          let n = r.length, i = new Int32Array(n), s = e.getSize(), a = !1, o = 0, l = t;
          i.fill(0);
          for (let u = t; u < s; u++)
            if (e.get(u) !== a)
              i[o]++;
            else {
              if (o === n - 1) {
                if (et.patternMatchVariance(i, r, Le.MAX_INDIVIDUAL_VARIANCE) < Le.MAX_AVG_VARIANCE)
                  return [l, u];
                l += i[0] + i[1], j.arraycopy(i, 2, i, 0, o - 1), i[o - 1] = 0, i[o] = 0, o--;
              } else
                o++;
              i[o] = 1, a = !a;
            }
          throw new D();
        }
        /*/!**
         * Attempts to decode a sequence of ITF black/white lines into single
         * digit.
         *
         * @param counters the counts of runs of observed black/white/black/... values
         * @return The decoded digit
         * @throws NotFoundException if digit cannot be decoded
         *!/*/
        static decodeDigit(e) {
          let t = Le.MAX_AVG_VARIANCE, r = -1, n = Le.PATTERNS.length;
          for (let i = 0; i < n; i++) {
            let s = Le.PATTERNS[i], a = et.patternMatchVariance(e, s, Le.MAX_INDIVIDUAL_VARIANCE);
            a < t ? (t = a, r = i) : a === t && (r = -1);
          }
          if (r >= 0)
            return r % 10;
          throw new D();
        }
      }
      Le.PATTERNS = [
        Int32Array.from([1, 1, 2, 2, 1]),
        Int32Array.from([2, 1, 1, 1, 2]),
        Int32Array.from([1, 2, 1, 1, 2]),
        Int32Array.from([2, 2, 1, 1, 1]),
        Int32Array.from([1, 1, 2, 1, 2]),
        Int32Array.from([2, 1, 2, 1, 1]),
        Int32Array.from([1, 2, 2, 1, 1]),
        Int32Array.from([1, 1, 1, 2, 2]),
        Int32Array.from([2, 1, 1, 2, 1]),
        Int32Array.from([1, 2, 1, 2, 1]),
        Int32Array.from([1, 1, 3, 3, 1]),
        Int32Array.from([3, 1, 1, 1, 3]),
        Int32Array.from([1, 3, 1, 1, 3]),
        Int32Array.from([3, 3, 1, 1, 1]),
        Int32Array.from([1, 1, 3, 1, 3]),
        Int32Array.from([3, 1, 3, 1, 1]),
        Int32Array.from([1, 3, 3, 1, 1]),
        Int32Array.from([1, 1, 1, 3, 3]),
        Int32Array.from([3, 1, 1, 3, 1]),
        Int32Array.from([1, 3, 1, 3, 1])
        // 9
      ], Le.MAX_AVG_VARIANCE = 0.38, Le.MAX_INDIVIDUAL_VARIANCE = 0.5, Le.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14], Le.START_PATTERN = Int32Array.from([1, 1, 1, 1]), Le.END_PATTERN_REVERSED = [
        Int32Array.from([1, 1, 2]),
        Int32Array.from([1, 1, 3])
        // 3x
      ];
      class Ze extends et {
        constructor() {
          super(...arguments), this.decodeRowStringBuffer = "";
        }
        static findStartGuardPattern(e) {
          let t = !1, r, n = 0, i = Int32Array.from([0, 0, 0]);
          for (; !t; ) {
            i = Int32Array.from([0, 0, 0]), r = Ze.findGuardPattern(e, n, !1, this.START_END_PATTERN, i);
            let s = r[0];
            n = r[1];
            let a = s - (n - s);
            a >= 0 && (t = e.isRange(a, s, !1));
          }
          return r;
        }
        static checkChecksum(e) {
          return Ze.checkStandardUPCEANChecksum(e);
        }
        static checkStandardUPCEANChecksum(e) {
          let t = e.length;
          if (t === 0)
            return !1;
          let r = parseInt(e.charAt(t - 1), 10);
          return Ze.getStandardUPCEANChecksum(e.substring(0, t - 1)) === r;
        }
        static getStandardUPCEANChecksum(e) {
          let t = e.length, r = 0;
          for (let n = t - 1; n >= 0; n -= 2) {
            let i = e.charAt(n).charCodeAt(0) - 48;
            if (i < 0 || i > 9)
              throw new L();
            r += i;
          }
          r *= 3;
          for (let n = t - 2; n >= 0; n -= 2) {
            let i = e.charAt(n).charCodeAt(0) - 48;
            if (i < 0 || i > 9)
              throw new L();
            r += i;
          }
          return (1e3 - r) % 10;
        }
        static decodeEnd(e, t) {
          return Ze.findGuardPattern(e, t, !1, Ze.START_END_PATTERN, new Int32Array(Ze.START_END_PATTERN.length).fill(0));
        }
        /**
         * @throws NotFoundException
         */
        static findGuardPatternWithoutCounters(e, t, r, n) {
          return this.findGuardPattern(e, t, r, n, new Int32Array(n.length));
        }
        /**
         * @param row row of black/white values to search
         * @param rowOffset position to start search
         * @param whiteFirst if true, indicates that the pattern specifies white/black/white/...
         * pixel counts, otherwise, it is interpreted as black/white/black/...
         * @param pattern pattern of counts of number of black and white pixels that are being
         * searched for as a pattern
         * @param counters array of counters, as long as pattern, to re-use
         * @return start/end horizontal offset of guard pattern, as an array of two ints
         * @throws NotFoundException if pattern is not found
         */
        static findGuardPattern(e, t, r, n, i) {
          let s = e.getSize();
          t = r ? e.getNextUnset(t) : e.getNextSet(t);
          let a = 0, o = t, l = n.length, u = r;
          for (let g = t; g < s; g++)
            if (e.get(g) !== u)
              i[a]++;
            else {
              if (a === l - 1) {
                if (et.patternMatchVariance(i, n, Ze.MAX_INDIVIDUAL_VARIANCE) < Ze.MAX_AVG_VARIANCE)
                  return Int32Array.from([o, g]);
                o += i[0] + i[1];
                let x = i.slice(2, i.length - 1);
                for (let y = 0; y < a - 1; y++)
                  i[y] = x[y];
                i[a - 1] = 0, i[a] = 0, a--;
              } else
                a++;
              i[a] = 1, u = !u;
            }
          throw new D();
        }
        static decodeDigit(e, t, r, n) {
          this.recordPattern(e, r, t);
          let i = this.MAX_AVG_VARIANCE, s = -1, a = n.length;
          for (let o = 0; o < a; o++) {
            let l = n[o], u = et.patternMatchVariance(t, l, Ze.MAX_INDIVIDUAL_VARIANCE);
            u < i && (i = u, s = o);
          }
          if (s >= 0)
            return s;
          throw new D();
        }
      }
      Ze.MAX_AVG_VARIANCE = 0.48, Ze.MAX_INDIVIDUAL_VARIANCE = 0.7, Ze.START_END_PATTERN = Int32Array.from([1, 1, 1]), Ze.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1]), Ze.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]), Ze.L_PATTERNS = [
        Int32Array.from([3, 2, 1, 1]),
        Int32Array.from([2, 2, 2, 1]),
        Int32Array.from([2, 1, 2, 2]),
        Int32Array.from([1, 4, 1, 1]),
        Int32Array.from([1, 1, 3, 2]),
        Int32Array.from([1, 2, 3, 1]),
        Int32Array.from([1, 1, 1, 4]),
        Int32Array.from([1, 3, 1, 2]),
        Int32Array.from([1, 2, 1, 3]),
        Int32Array.from([3, 1, 1, 2])
      ];
      class er {
        constructor() {
          this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5], this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), this.decodeRowStringBuffer = "";
        }
        decodeRow(e, t, r) {
          let n = this.decodeRowStringBuffer, i = this.decodeMiddle(t, r, n), s = n.toString(), a = er.parseExtensionString(s), o = [
            new Q((r[0] + r[1]) / 2, e),
            new Q(i, e)
          ], l = new Ke(s, null, 0, o, re.UPC_EAN_EXTENSION, (/* @__PURE__ */ new Date()).getTime());
          return a != null && l.putAllMetadata(a), l;
        }
        decodeMiddle(e, t, r) {
          let n = this.decodeMiddleCounters;
          n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
          let i = e.getSize(), s = t[1], a = 0;
          for (let l = 0; l < 5 && s < i; l++) {
            let u = Ze.decodeDigit(
              e,
              n,
              s,
              Ze.L_AND_G_PATTERNS
            );
            r += String.fromCharCode(48 + u % 10);
            for (let g of n)
              s += g;
            u >= 10 && (a |= 1 << 4 - l), l !== 4 && (s = e.getNextSet(s), s = e.getNextUnset(s));
          }
          if (r.length !== 5)
            throw new D();
          let o = this.determineCheckDigit(a);
          if (er.extensionChecksum(r.toString()) !== o)
            throw new D();
          return s;
        }
        static extensionChecksum(e) {
          let t = e.length, r = 0;
          for (let n = t - 2; n >= 0; n -= 2)
            r += e.charAt(n).charCodeAt(0) - 48;
          r *= 3;
          for (let n = t - 1; n >= 0; n -= 2)
            r += e.charAt(n).charCodeAt(0) - 48;
          return r *= 3, r % 10;
        }
        determineCheckDigit(e) {
          for (let t = 0; t < 10; t++)
            if (e === this.CHECK_DIGIT_ENCODINGS[t])
              return t;
          throw new D();
        }
        static parseExtensionString(e) {
          if (e.length !== 5)
            return null;
          let t = er.parseExtension5String(e);
          return t == null ? null : /* @__PURE__ */ new Map([[qe.SUGGESTED_PRICE, t]]);
        }
        static parseExtension5String(e) {
          let t;
          switch (e.charAt(0)) {
            case "0":
              t = "£";
              break;
            case "5":
              t = "$";
              break;
            case "9":
              switch (e) {
                case "90000":
                  return null;
                case "99991":
                  return "0.00";
                case "99990":
                  return "Used";
              }
              t = "";
              break;
            default:
              t = "";
              break;
          }
          let r = parseInt(e.substring(1)), n = (r / 100).toString(), i = r % 100, s = i < 10 ? "0" + i : i.toString();
          return t + n + "." + s;
        }
      }
      class Tr {
        constructor() {
          this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), this.decodeRowStringBuffer = "";
        }
        decodeRow(e, t, r) {
          let n = this.decodeRowStringBuffer, i = this.decodeMiddle(t, r, n), s = n.toString(), a = Tr.parseExtensionString(s), o = [
            new Q((r[0] + r[1]) / 2, e),
            new Q(i, e)
          ], l = new Ke(s, null, 0, o, re.UPC_EAN_EXTENSION, (/* @__PURE__ */ new Date()).getTime());
          return a != null && l.putAllMetadata(a), l;
        }
        decodeMiddle(e, t, r) {
          let n = this.decodeMiddleCounters;
          n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
          let i = e.getSize(), s = t[1], a = 0;
          for (let o = 0; o < 2 && s < i; o++) {
            let l = Ze.decodeDigit(e, n, s, Ze.L_AND_G_PATTERNS);
            r += String.fromCharCode(48 + l % 10);
            for (let u of n)
              s += u;
            l >= 10 && (a |= 1 << 1 - o), o !== 1 && (s = e.getNextSet(s), s = e.getNextUnset(s));
          }
          if (r.length !== 2)
            throw new D();
          if (parseInt(r.toString()) % 4 !== a)
            throw new D();
          return s;
        }
        static parseExtensionString(e) {
          return e.length !== 2 ? null : /* @__PURE__ */ new Map([[qe.ISSUE_NUMBER, parseInt(e)]]);
        }
      }
      class tr {
        static decodeRow(e, t, r) {
          let n = Ze.findGuardPattern(
            t,
            r,
            !1,
            this.EXTENSION_START_PATTERN,
            new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0)
          );
          try {
            return new er().decodeRow(e, t, n);
          } catch {
            return new Tr().decodeRow(e, t, n);
          }
        }
      }
      tr.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]);
      class ye extends Ze {
        constructor() {
          super(), this.decodeRowStringBuffer = "", ye.L_AND_G_PATTERNS = ye.L_PATTERNS.map((e) => Int32Array.from(e));
          for (let e = 10; e < 20; e++) {
            let t = ye.L_PATTERNS[e - 10], r = new Int32Array(t.length);
            for (let n = 0; n < t.length; n++)
              r[n] = t[t.length - n - 1];
            ye.L_AND_G_PATTERNS[e] = r;
          }
        }
        decodeRow(e, t, r) {
          let n = ye.findStartGuardPattern(t), i = r == null ? null : r.get(ce.NEED_RESULT_POINT_CALLBACK);
          if (i != null) {
            const U = new Q((n[0] + n[1]) / 2, e);
            i.foundPossibleResultPoint(U);
          }
          let s = this.decodeMiddle(t, n, this.decodeRowStringBuffer), a = s.rowOffset, o = s.resultString;
          if (i != null) {
            const U = new Q(a, e);
            i.foundPossibleResultPoint(U);
          }
          let l = this.decodeEnd(t, a);
          if (i != null) {
            const U = new Q((l[0] + l[1]) / 2, e);
            i.foundPossibleResultPoint(U);
          }
          let u = l[1], g = u + (u - l[0]);
          if (g >= t.getSize() || !t.isRange(u, g, !1))
            throw new D();
          let x = o.toString();
          if (x.length < 8)
            throw new L();
          if (!ye.checkChecksum(x))
            throw new q();
          let y = (n[1] + n[0]) / 2, I = (l[1] + l[0]) / 2, b = this.getBarcodeFormat(), T = [new Q(y, e), new Q(I, e)], R = new Ke(x, null, 0, T, b, (/* @__PURE__ */ new Date()).getTime()), H = 0;
          try {
            let U = tr.decodeRow(e, t, l[1]);
            R.putMetadata(qe.UPC_EAN_EXTENSION, U.getText()), R.putAllMetadata(U.getResultMetadata()), R.addResultPoints(U.getResultPoints()), H = U.getText().length;
          } catch {
          }
          let W = r == null ? null : r.get(ce.ALLOWED_EAN_EXTENSIONS);
          if (W != null) {
            let U = !1;
            for (let pe in W)
              if (H.toString() === pe) {
                U = !0;
                break;
              }
            if (!U)
              throw new D();
          }
          return R;
        }
        decodeEnd(e, t) {
          return ye.findGuardPattern(
            e,
            t,
            !1,
            ye.START_END_PATTERN,
            new Int32Array(ye.START_END_PATTERN.length).fill(0)
          );
        }
        static checkChecksum(e) {
          return ye.checkStandardUPCEANChecksum(e);
        }
        static checkStandardUPCEANChecksum(e) {
          let t = e.length;
          if (t === 0)
            return !1;
          let r = parseInt(e.charAt(t - 1), 10);
          return ye.getStandardUPCEANChecksum(e.substring(0, t - 1)) === r;
        }
        static getStandardUPCEANChecksum(e) {
          let t = e.length, r = 0;
          for (let n = t - 1; n >= 0; n -= 2) {
            let i = e.charAt(n).charCodeAt(0) - 48;
            if (i < 0 || i > 9)
              throw new L();
            r += i;
          }
          r *= 3;
          for (let n = t - 2; n >= 0; n -= 2) {
            let i = e.charAt(n).charCodeAt(0) - 48;
            if (i < 0 || i > 9)
              throw new L();
            r += i;
          }
          return (1e3 - r) % 10;
        }
      }
      class Wt extends ye {
        constructor() {
          super(), this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
        }
        decodeMiddle(e, t, r) {
          let n = this.decodeMiddleCounters;
          n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
          let i = e.getSize(), s = t[1], a = 0;
          for (let l = 0; l < 6 && s < i; l++) {
            let u = ye.decodeDigit(e, n, s, ye.L_AND_G_PATTERNS);
            r += String.fromCharCode(48 + u % 10);
            for (let g of n)
              s += g;
            u >= 10 && (a |= 1 << 5 - l);
          }
          r = Wt.determineFirstDigit(r, a), s = ye.findGuardPattern(
            e,
            s,
            !0,
            ye.MIDDLE_PATTERN,
            new Int32Array(ye.MIDDLE_PATTERN.length).fill(0)
          )[1];
          for (let l = 0; l < 6 && s < i; l++) {
            let u = ye.decodeDigit(e, n, s, ye.L_PATTERNS);
            r += String.fromCharCode(48 + u);
            for (let g of n)
              s += g;
          }
          return { rowOffset: s, resultString: r };
        }
        getBarcodeFormat() {
          return re.EAN_13;
        }
        static determineFirstDigit(e, t) {
          for (let r = 0; r < 10; r++)
            if (t === this.FIRST_DIGIT_ENCODINGS[r])
              return e = String.fromCharCode(48 + r) + e, e;
          throw new D();
        }
      }
      Wt.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26];
      class Gr extends ye {
        constructor() {
          super(), this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
        }
        decodeMiddle(e, t, r) {
          const n = this.decodeMiddleCounters;
          n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
          let i = e.getSize(), s = t[1];
          for (let o = 0; o < 4 && s < i; o++) {
            let l = ye.decodeDigit(e, n, s, ye.L_PATTERNS);
            r += String.fromCharCode(48 + l);
            for (let u of n)
              s += u;
          }
          s = ye.findGuardPattern(e, s, !0, ye.MIDDLE_PATTERN, new Int32Array(ye.MIDDLE_PATTERN.length).fill(0))[1];
          for (let o = 0; o < 4 && s < i; o++) {
            let l = ye.decodeDigit(e, n, s, ye.L_PATTERNS);
            r += String.fromCharCode(48 + l);
            for (let u of n)
              s += u;
          }
          return { rowOffset: s, resultString: r };
        }
        getBarcodeFormat() {
          return re.EAN_8;
        }
      }
      class on extends ye {
        constructor() {
          super(...arguments), this.ean13Reader = new Wt();
        }
        // @Override
        getBarcodeFormat() {
          return re.UPC_A;
        }
        // Note that we don't try rotation without the try harder flag, even if rotation was supported.
        // @Override
        decode(e, t) {
          return this.maybeReturnResult(this.ean13Reader.decode(e));
        }
        // @Override
        decodeRow(e, t, r) {
          return this.maybeReturnResult(this.ean13Reader.decodeRow(e, t, r));
        }
        // @Override
        decodeMiddle(e, t, r) {
          return this.ean13Reader.decodeMiddle(e, t, r);
        }
        maybeReturnResult(e) {
          let t = e.getText();
          if (t.charAt(0) === "0") {
            let r = new Ke(t.substring(1), null, null, e.getResultPoints(), re.UPC_A);
            return e.getResultMetadata() != null && r.putAllMetadata(e.getResultMetadata()), r;
          } else
            throw new D();
        }
        reset() {
          this.ean13Reader.reset();
        }
      }
      class Nt extends ye {
        constructor() {
          super(), this.decodeMiddleCounters = new Int32Array(4);
        }
        /**
         * @throws NotFoundException
         */
        // @Override
        decodeMiddle(e, t, r) {
          const n = this.decodeMiddleCounters.map((l) => l);
          n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
          const i = e.getSize();
          let s = t[1], a = 0;
          for (let l = 0; l < 6 && s < i; l++) {
            const u = Nt.decodeDigit(
              e,
              n,
              s,
              Nt.L_AND_G_PATTERNS
            );
            r += String.fromCharCode(48 + u % 10);
            for (let g of n)
              s += g;
            u >= 10 && (a |= 1 << 5 - l);
          }
          let o = Nt.determineNumSysAndCheckDigit(
            r,
            a
          );
          return { rowOffset: s, resultString: o };
        }
        /**
         * @throws NotFoundException
         */
        // @Override
        decodeEnd(e, t) {
          return Nt.findGuardPatternWithoutCounters(
            e,
            t,
            !0,
            Nt.MIDDLE_END_PATTERN
          );
        }
        /**
         * @throws FormatException
         */
        // @Override
        checkChecksum(e) {
          return ye.checkChecksum(Nt.convertUPCEtoUPCA(e));
        }
        /**
         * @throws NotFoundException
         */
        static determineNumSysAndCheckDigit(e, t) {
          for (let r = 0; r <= 1; r++)
            for (let n = 0; n < 10; n++)
              if (t === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[r][n]) {
                let i = String.fromCharCode(48 + r), s = String.fromCharCode(48 + n);
                return i + e + s;
              }
          throw D.getNotFoundInstance();
        }
        // @Override
        getBarcodeFormat() {
          return re.UPC_E;
        }
        /**
         * Expands a UPC-E value back into its full, equivalent UPC-A code value.
         *
         * @param upce UPC-E code as string of digits
         * @return equivalent UPC-A code as string of digits
         */
        static convertUPCEtoUPCA(e) {
          const t = e.slice(1, 7).split("").map((i) => i.charCodeAt(0)), r = new he(
            /*12*/
          );
          r.append(e.charAt(0));
          let n = t[5];
          switch (n) {
            case 0:
            case 1:
            case 2:
              r.appendChars(t, 0, 2), r.append(n), r.append("0000"), r.appendChars(t, 2, 3);
              break;
            case 3:
              r.appendChars(t, 0, 3), r.append("00000"), r.appendChars(t, 3, 2);
              break;
            case 4:
              r.appendChars(t, 0, 4), r.append("00000"), r.append(t[4]);
              break;
            default:
              r.appendChars(t, 0, 5), r.append("0000"), r.append(n);
              break;
          }
          return e.length >= 8 && r.append(e.charAt(7)), r.toString();
        }
      }
      Nt.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]), Nt.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [
        Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]),
        Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 26])
      ];
      class Hr extends et {
        constructor(e) {
          super();
          let t = e == null ? null : e.get(ce.POSSIBLE_FORMATS), r = [];
          E(t) ? (r.push(new Wt()), r.push(new on()), r.push(new Gr()), r.push(new Nt())) : (t.indexOf(re.EAN_13) > -1 && r.push(new Wt()), t.indexOf(re.UPC_A) > -1 && r.push(new on()), t.indexOf(re.EAN_8) > -1 && r.push(new Gr()), t.indexOf(re.UPC_E) > -1 && r.push(new Nt())), this.readers = r;
        }
        decodeRow(e, t, r) {
          for (let n of this.readers)
            try {
              const i = n.decodeRow(e, t, r), s = i.getBarcodeFormat() === re.EAN_13 && i.getText().charAt(0) === "0", a = r == null ? null : r.get(ce.POSSIBLE_FORMATS), o = a == null || a.includes(re.UPC_A);
              if (s && o) {
                const l = i.getRawBytes(), u = new Ke(
                  i.getText().substring(1),
                  l,
                  l ? l.length : null,
                  i.getResultPoints(),
                  re.UPC_A
                );
                return u.putAllMetadata(i.getResultMetadata()), u;
              }
              return i;
            } catch {
            }
          throw new D();
        }
        reset() {
          for (let e of this.readers)
            e.reset();
        }
      }
      class ft extends et {
        constructor() {
          super(), this.decodeFinderCounters = new Int32Array(4), this.dataCharacterCounters = new Int32Array(8), this.oddRoundingErrors = new Array(4), this.evenRoundingErrors = new Array(4), this.oddCounts = new Array(this.dataCharacterCounters.length / 2), this.evenCounts = new Array(this.dataCharacterCounters.length / 2);
        }
        getDecodeFinderCounters() {
          return this.decodeFinderCounters;
        }
        getDataCharacterCounters() {
          return this.dataCharacterCounters;
        }
        getOddRoundingErrors() {
          return this.oddRoundingErrors;
        }
        getEvenRoundingErrors() {
          return this.evenRoundingErrors;
        }
        getOddCounts() {
          return this.oddCounts;
        }
        getEvenCounts() {
          return this.evenCounts;
        }
        parseFinderValue(e, t) {
          for (let r = 0; r < t.length; r++)
            if (et.patternMatchVariance(e, t[r], ft.MAX_INDIVIDUAL_VARIANCE) < ft.MAX_AVG_VARIANCE)
              return r;
          throw new D();
        }
        /**
         * @param array values to sum
         * @return sum of values
         * @deprecated call {@link MathUtils#sum(int[])}
         */
        static count(e) {
          return Ee.sum(new Int32Array(e));
        }
        static increment(e, t) {
          let r = 0, n = t[0];
          for (let i = 1; i < e.length; i++)
            t[i] > n && (n = t[i], r = i);
          e[r]++;
        }
        static decrement(e, t) {
          let r = 0, n = t[0];
          for (let i = 1; i < e.length; i++)
            t[i] < n && (n = t[i], r = i);
          e[r]--;
        }
        static isFinderPattern(e) {
          let t = e[0] + e[1], r = t + e[2] + e[3], n = t / r;
          if (n >= ft.MIN_FINDER_PATTERN_RATIO && n <= ft.MAX_FINDER_PATTERN_RATIO) {
            let i = Number.MAX_SAFE_INTEGER, s = Number.MIN_SAFE_INTEGER;
            for (let a of e)
              a > s && (s = a), a < i && (i = a);
            return s < 10 * i;
          }
          return !1;
        }
      }
      ft.MAX_AVG_VARIANCE = 0.2, ft.MAX_INDIVIDUAL_VARIANCE = 0.45, ft.MIN_FINDER_PATTERN_RATIO = 9.5 / 12, ft.MAX_FINDER_PATTERN_RATIO = 12.5 / 14;
      class rr {
        constructor(e, t) {
          this.value = e, this.checksumPortion = t;
        }
        getValue() {
          return this.value;
        }
        getChecksumPortion() {
          return this.checksumPortion;
        }
        toString() {
          return this.value + "(" + this.checksumPortion + ")";
        }
        equals(e) {
          if (!(e instanceof rr))
            return !1;
          const t = e;
          return this.value === t.value && this.checksumPortion === t.checksumPortion;
        }
        hashCode() {
          return this.value ^ this.checksumPortion;
        }
      }
      class Sr {
        constructor(e, t, r, n, i) {
          this.value = e, this.startEnd = t, this.value = e, this.startEnd = t, this.resultPoints = new Array(), this.resultPoints.push(new Q(r, i)), this.resultPoints.push(new Q(n, i));
        }
        getValue() {
          return this.value;
        }
        getStartEnd() {
          return this.startEnd;
        }
        getResultPoints() {
          return this.resultPoints;
        }
        equals(e) {
          if (!(e instanceof Sr))
            return !1;
          const t = e;
          return this.value === t.value;
        }
        hashCode() {
          return this.value;
        }
      }
      class Ft {
        constructor() {
        }
        static getRSSvalue(e, t, r) {
          let n = 0;
          for (let o of e)
            n += o;
          let i = 0, s = 0, a = e.length;
          for (let o = 0; o < a - 1; o++) {
            let l;
            for (l = 1, s |= 1 << o; l < e[o]; l++, s &= ~(1 << o)) {
              let u = Ft.combins(n - l - 1, a - o - 2);
              if (r && s === 0 && n - l - (a - o - 1) >= a - o - 1 && (u -= Ft.combins(n - l - (a - o), a - o - 2)), a - o - 1 > 1) {
                let g = 0;
                for (let x = n - l - (a - o - 2); x > t; x--)
                  g += Ft.combins(n - l - x - 1, a - o - 3);
                u -= g * (a - 1 - o);
              } else n - l > t && u--;
              i += u;
            }
            n -= l;
          }
          return i;
        }
        static combins(e, t) {
          let r, n;
          e - t > t ? (n = t, r = e - t) : (n = e - t, r = t);
          let i = 1, s = 1;
          for (let a = e; a > r; a--)
            i *= a, s <= n && (i /= s, s++);
          for (; s <= n; )
            i /= s, s++;
          return i;
        }
      }
      class ln {
        static buildBitArray(e) {
          let t = e.length * 2 - 1;
          e[e.length - 1].getRightChar() == null && (t -= 1);
          let r = 12 * t, n = new z(r), i = 0, a = e[0].getRightChar().getValue();
          for (let o = 11; o >= 0; --o)
            (a & 1 << o) != 0 && n.set(i), i++;
          for (let o = 1; o < e.length; ++o) {
            let l = e[o], u = l.getLeftChar().getValue();
            for (let g = 11; g >= 0; --g)
              (u & 1 << g) != 0 && n.set(i), i++;
            if (l.getRightChar() != null) {
              let g = l.getRightChar().getValue();
              for (let x = 11; x >= 0; --x)
                (g & 1 << x) != 0 && n.set(i), i++;
            }
          }
          return n;
        }
      }
      class Zt {
        constructor(e, t) {
          t ? this.decodedInformation = null : (this.finished = e, this.decodedInformation = t);
        }
        getDecodedInformation() {
          return this.decodedInformation;
        }
        isFinished() {
          return this.finished;
        }
      }
      class Wr {
        constructor(e) {
          this.newPosition = e;
        }
        getNewPosition() {
          return this.newPosition;
        }
      }
      class pt extends Wr {
        constructor(e, t) {
          super(e), this.value = t;
        }
        getValue() {
          return this.value;
        }
        isFNC1() {
          return this.value === pt.FNC1;
        }
      }
      pt.FNC1 = "$";
      class nr extends Wr {
        constructor(e, t, r) {
          super(e), r ? (this.remaining = !0, this.remainingValue = this.remainingValue) : (this.remaining = !1, this.remainingValue = 0), this.newString = t;
        }
        getNewString() {
          return this.newString;
        }
        isRemaining() {
          return this.remaining;
        }
        getRemainingValue() {
          return this.remainingValue;
        }
      }
      class Ot extends Wr {
        constructor(e, t, r) {
          if (super(e), t < 0 || t > 10 || r < 0 || r > 10)
            throw new L();
          this.firstDigit = t, this.secondDigit = r;
        }
        getFirstDigit() {
          return this.firstDigit;
        }
        getSecondDigit() {
          return this.secondDigit;
        }
        getValue() {
          return this.firstDigit * 10 + this.secondDigit;
        }
        isFirstDigitFNC1() {
          return this.firstDigit === Ot.FNC1;
        }
        isSecondDigitFNC1() {
          return this.secondDigit === Ot.FNC1;
        }
        isAnyFNC1() {
          return this.firstDigit === Ot.FNC1 || this.secondDigit === Ot.FNC1;
        }
      }
      Ot.FNC1 = 10;
      class m {
        constructor() {
        }
        static parseFieldsInGeneralPurpose(e) {
          if (!e)
            return null;
          if (e.length < 2)
            throw new D();
          let t = e.substring(0, 2);
          for (let i of m.TWO_DIGIT_DATA_LENGTH)
            if (i[0] === t)
              return i[1] === m.VARIABLE_LENGTH ? m.processVariableAI(2, i[2], e) : m.processFixedAI(2, i[1], e);
          if (e.length < 3)
            throw new D();
          let r = e.substring(0, 3);
          for (let i of m.THREE_DIGIT_DATA_LENGTH)
            if (i[0] === r)
              return i[1] === m.VARIABLE_LENGTH ? m.processVariableAI(3, i[2], e) : m.processFixedAI(3, i[1], e);
          for (let i of m.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH)
            if (i[0] === r)
              return i[1] === m.VARIABLE_LENGTH ? m.processVariableAI(4, i[2], e) : m.processFixedAI(4, i[1], e);
          if (e.length < 4)
            throw new D();
          let n = e.substring(0, 4);
          for (let i of m.FOUR_DIGIT_DATA_LENGTH)
            if (i[0] === n)
              return i[1] === m.VARIABLE_LENGTH ? m.processVariableAI(4, i[2], e) : m.processFixedAI(4, i[1], e);
          throw new D();
        }
        static processFixedAI(e, t, r) {
          if (r.length < e)
            throw new D();
          let n = r.substring(0, e);
          if (r.length < e + t)
            throw new D();
          let i = r.substring(e, e + t), s = r.substring(e + t), a = "(" + n + ")" + i, o = m.parseFieldsInGeneralPurpose(s);
          return o == null ? a : a + o;
        }
        static processVariableAI(e, t, r) {
          let n = r.substring(0, e), i;
          r.length < e + t ? i = r.length : i = e + t;
          let s = r.substring(e, i), a = r.substring(i), o = "(" + n + ")" + s, l = m.parseFieldsInGeneralPurpose(a);
          return l == null ? o : o + l;
        }
      }
      m.VARIABLE_LENGTH = [], m.TWO_DIGIT_DATA_LENGTH = [
        ["00", 18],
        ["01", 14],
        ["02", 14],
        ["10", m.VARIABLE_LENGTH, 20],
        ["11", 6],
        ["12", 6],
        ["13", 6],
        ["15", 6],
        ["17", 6],
        ["20", 2],
        ["21", m.VARIABLE_LENGTH, 20],
        ["22", m.VARIABLE_LENGTH, 29],
        ["30", m.VARIABLE_LENGTH, 8],
        ["37", m.VARIABLE_LENGTH, 8],
        // internal company codes
        ["90", m.VARIABLE_LENGTH, 30],
        ["91", m.VARIABLE_LENGTH, 30],
        ["92", m.VARIABLE_LENGTH, 30],
        ["93", m.VARIABLE_LENGTH, 30],
        ["94", m.VARIABLE_LENGTH, 30],
        ["95", m.VARIABLE_LENGTH, 30],
        ["96", m.VARIABLE_LENGTH, 30],
        ["97", m.VARIABLE_LENGTH, 3],
        ["98", m.VARIABLE_LENGTH, 30],
        ["99", m.VARIABLE_LENGTH, 30]
      ], m.THREE_DIGIT_DATA_LENGTH = [
        // Same format as above
        ["240", m.VARIABLE_LENGTH, 30],
        ["241", m.VARIABLE_LENGTH, 30],
        ["242", m.VARIABLE_LENGTH, 6],
        ["250", m.VARIABLE_LENGTH, 30],
        ["251", m.VARIABLE_LENGTH, 30],
        ["253", m.VARIABLE_LENGTH, 17],
        ["254", m.VARIABLE_LENGTH, 20],
        ["400", m.VARIABLE_LENGTH, 30],
        ["401", m.VARIABLE_LENGTH, 30],
        ["402", 17],
        ["403", m.VARIABLE_LENGTH, 30],
        ["410", 13],
        ["411", 13],
        ["412", 13],
        ["413", 13],
        ["414", 13],
        ["420", m.VARIABLE_LENGTH, 20],
        ["421", m.VARIABLE_LENGTH, 15],
        ["422", 3],
        ["423", m.VARIABLE_LENGTH, 15],
        ["424", 3],
        ["425", 3],
        ["426", 3]
      ], m.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [
        // Same format as above
        ["310", 6],
        ["311", 6],
        ["312", 6],
        ["313", 6],
        ["314", 6],
        ["315", 6],
        ["316", 6],
        ["320", 6],
        ["321", 6],
        ["322", 6],
        ["323", 6],
        ["324", 6],
        ["325", 6],
        ["326", 6],
        ["327", 6],
        ["328", 6],
        ["329", 6],
        ["330", 6],
        ["331", 6],
        ["332", 6],
        ["333", 6],
        ["334", 6],
        ["335", 6],
        ["336", 6],
        ["340", 6],
        ["341", 6],
        ["342", 6],
        ["343", 6],
        ["344", 6],
        ["345", 6],
        ["346", 6],
        ["347", 6],
        ["348", 6],
        ["349", 6],
        ["350", 6],
        ["351", 6],
        ["352", 6],
        ["353", 6],
        ["354", 6],
        ["355", 6],
        ["356", 6],
        ["357", 6],
        ["360", 6],
        ["361", 6],
        ["362", 6],
        ["363", 6],
        ["364", 6],
        ["365", 6],
        ["366", 6],
        ["367", 6],
        ["368", 6],
        ["369", 6],
        ["390", m.VARIABLE_LENGTH, 15],
        ["391", m.VARIABLE_LENGTH, 18],
        ["392", m.VARIABLE_LENGTH, 15],
        ["393", m.VARIABLE_LENGTH, 18],
        ["703", m.VARIABLE_LENGTH, 30]
      ], m.FOUR_DIGIT_DATA_LENGTH = [
        // Same format as above
        ["7001", 13],
        ["7002", m.VARIABLE_LENGTH, 30],
        ["7003", 10],
        ["8001", 14],
        ["8002", m.VARIABLE_LENGTH, 20],
        ["8003", m.VARIABLE_LENGTH, 30],
        ["8004", m.VARIABLE_LENGTH, 30],
        ["8005", 6],
        ["8006", 18],
        ["8007", m.VARIABLE_LENGTH, 30],
        ["8008", m.VARIABLE_LENGTH, 12],
        ["8018", 18],
        ["8020", m.VARIABLE_LENGTH, 25],
        ["8100", 6],
        ["8101", 10],
        ["8102", 2],
        ["8110", m.VARIABLE_LENGTH, 70],
        ["8200", m.VARIABLE_LENGTH, 70]
      ];
      class k {
        constructor(e) {
          this.buffer = new he(), this.information = e;
        }
        decodeAllCodes(e, t) {
          let r = t, n = null;
          do {
            let i = this.decodeGeneralPurposeField(r, n), s = m.parseFieldsInGeneralPurpose(i.getNewString());
            if (s != null && e.append(s), i.isRemaining() ? n = "" + i.getRemainingValue() : n = null, r === i.getNewPosition())
              break;
            r = i.getNewPosition();
          } while (!0);
          return e.toString();
        }
        isStillNumeric(e) {
          if (e + 7 > this.information.getSize())
            return e + 4 <= this.information.getSize();
          for (let t = e; t < e + 3; ++t)
            if (this.information.get(t))
              return !0;
          return this.information.get(e + 3);
        }
        decodeNumeric(e) {
          if (e + 7 > this.information.getSize()) {
            let i = this.extractNumericValueFromBitArray(e, 4);
            return i === 0 ? new Ot(this.information.getSize(), Ot.FNC1, Ot.FNC1) : new Ot(this.information.getSize(), i - 1, Ot.FNC1);
          }
          let t = this.extractNumericValueFromBitArray(e, 7), r = (t - 8) / 11, n = (t - 8) % 11;
          return new Ot(e + 7, r, n);
        }
        extractNumericValueFromBitArray(e, t) {
          return k.extractNumericValueFromBitArray(this.information, e, t);
        }
        static extractNumericValueFromBitArray(e, t, r) {
          let n = 0;
          for (let i = 0; i < r; ++i)
            e.get(t + i) && (n |= 1 << r - i - 1);
          return n;
        }
        decodeGeneralPurposeField(e, t) {
          this.buffer.setLengthToZero(), t != null && this.buffer.append(t), this.current.setPosition(e);
          let r = this.parseBlocks();
          return r != null && r.isRemaining() ? new nr(this.current.getPosition(), this.buffer.toString(), r.getRemainingValue()) : new nr(this.current.getPosition(), this.buffer.toString());
        }
        parseBlocks() {
          let e, t;
          do {
            let r = this.current.getPosition();
            if (this.current.isAlpha() ? (t = this.parseAlphaBlock(), e = t.isFinished()) : this.current.isIsoIec646() ? (t = this.parseIsoIec646Block(), e = t.isFinished()) : (t = this.parseNumericBlock(), e = t.isFinished()), !(r !== this.current.getPosition()) && !e)
              break;
          } while (!e);
          return t.getDecodedInformation();
        }
        parseNumericBlock() {
          for (; this.isStillNumeric(this.current.getPosition()); ) {
            let e = this.decodeNumeric(this.current.getPosition());
            if (this.current.setPosition(e.getNewPosition()), e.isFirstDigitFNC1()) {
              let t;
              return e.isSecondDigitFNC1() ? t = new nr(this.current.getPosition(), this.buffer.toString()) : t = new nr(this.current.getPosition(), this.buffer.toString(), e.getSecondDigit()), new Zt(!0, t);
            }
            if (this.buffer.append(e.getFirstDigit()), e.isSecondDigitFNC1()) {
              let t = new nr(this.current.getPosition(), this.buffer.toString());
              return new Zt(!0, t);
            }
            this.buffer.append(e.getSecondDigit());
          }
          return this.isNumericToAlphaNumericLatch(this.current.getPosition()) && (this.current.setAlpha(), this.current.incrementPosition(4)), new Zt(!1);
        }
        parseIsoIec646Block() {
          for (; this.isStillIsoIec646(this.current.getPosition()); ) {
            let e = this.decodeIsoIec646(this.current.getPosition());
            if (this.current.setPosition(e.getNewPosition()), e.isFNC1()) {
              let t = new nr(this.current.getPosition(), this.buffer.toString());
              return new Zt(!0, t);
            }
            this.buffer.append(e.getValue());
          }
          return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setAlpha()), new Zt(!1);
        }
        parseAlphaBlock() {
          for (; this.isStillAlpha(this.current.getPosition()); ) {
            let e = this.decodeAlphanumeric(this.current.getPosition());
            if (this.current.setPosition(e.getNewPosition()), e.isFNC1()) {
              let t = new nr(this.current.getPosition(), this.buffer.toString());
              return new Zt(!0, t);
            }
            this.buffer.append(e.getValue());
          }
          return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setIsoIec646()), new Zt(!1);
        }
        isStillIsoIec646(e) {
          if (e + 5 > this.information.getSize())
            return !1;
          let t = this.extractNumericValueFromBitArray(e, 5);
          if (t >= 5 && t < 16)
            return !0;
          if (e + 7 > this.information.getSize())
            return !1;
          let r = this.extractNumericValueFromBitArray(e, 7);
          if (r >= 64 && r < 116)
            return !0;
          if (e + 8 > this.information.getSize())
            return !1;
          let n = this.extractNumericValueFromBitArray(e, 8);
          return n >= 232 && n < 253;
        }
        decodeIsoIec646(e) {
          let t = this.extractNumericValueFromBitArray(e, 5);
          if (t === 15)
            return new pt(e + 5, pt.FNC1);
          if (t >= 5 && t < 15)
            return new pt(e + 5, "0" + (t - 5));
          let r = this.extractNumericValueFromBitArray(e, 7);
          if (r >= 64 && r < 90)
            return new pt(e + 7, "" + (r + 1));
          if (r >= 90 && r < 116)
            return new pt(e + 7, "" + (r + 7));
          let n = this.extractNumericValueFromBitArray(e, 8), i;
          switch (n) {
            case 232:
              i = "!";
              break;
            case 233:
              i = '"';
              break;
            case 234:
              i = "%";
              break;
            case 235:
              i = "&";
              break;
            case 236:
              i = "'";
              break;
            case 237:
              i = "(";
              break;
            case 238:
              i = ")";
              break;
            case 239:
              i = "*";
              break;
            case 240:
              i = "+";
              break;
            case 241:
              i = ",";
              break;
            case 242:
              i = "-";
              break;
            case 243:
              i = ".";
              break;
            case 244:
              i = "/";
              break;
            case 245:
              i = ":";
              break;
            case 246:
              i = ";";
              break;
            case 247:
              i = "<";
              break;
            case 248:
              i = "=";
              break;
            case 249:
              i = ">";
              break;
            case 250:
              i = "?";
              break;
            case 251:
              i = "_";
              break;
            case 252:
              i = " ";
              break;
            default:
              throw new L();
          }
          return new pt(e + 8, i);
        }
        isStillAlpha(e) {
          if (e + 5 > this.information.getSize())
            return !1;
          let t = this.extractNumericValueFromBitArray(e, 5);
          if (t >= 5 && t < 16)
            return !0;
          if (e + 6 > this.information.getSize())
            return !1;
          let r = this.extractNumericValueFromBitArray(e, 6);
          return r >= 16 && r < 63;
        }
        decodeAlphanumeric(e) {
          let t = this.extractNumericValueFromBitArray(e, 5);
          if (t === 15)
            return new pt(e + 5, pt.FNC1);
          if (t >= 5 && t < 15)
            return new pt(e + 5, "0" + (t - 5));
          let r = this.extractNumericValueFromBitArray(e, 6);
          if (r >= 32 && r < 58)
            return new pt(e + 6, "" + (r + 33));
          let n;
          switch (r) {
            case 58:
              n = "*";
              break;
            case 59:
              n = ",";
              break;
            case 60:
              n = "-";
              break;
            case 61:
              n = ".";
              break;
            case 62:
              n = "/";
              break;
            default:
              throw new bt("Decoding invalid alphanumeric value: " + r);
          }
          return new pt(e + 6, n);
        }
        isAlphaTo646ToAlphaLatch(e) {
          if (e + 1 > this.information.getSize())
            return !1;
          for (let t = 0; t < 5 && t + e < this.information.getSize(); ++t)
            if (t === 2) {
              if (!this.information.get(e + 2))
                return !1;
            } else if (this.information.get(e + t))
              return !1;
          return !0;
        }
        isAlphaOr646ToNumericLatch(e) {
          if (e + 3 > this.information.getSize())
            return !1;
          for (let t = e; t < e + 3; ++t)
            if (this.information.get(t))
              return !1;
          return !0;
        }
        isNumericToAlphaNumericLatch(e) {
          if (e + 1 > this.information.getSize())
            return !1;
          for (let t = 0; t < 4 && t + e < this.information.getSize(); ++t)
            if (this.information.get(e + t))
              return !1;
          return !0;
        }
      }
      class Y {
        constructor(e) {
          this.information = e, this.generalDecoder = new k(e);
        }
        getInformation() {
          return this.information;
        }
        getGeneralDecoder() {
          return this.generalDecoder;
        }
      }
      class J extends Y {
        constructor(e) {
          super(e);
        }
        encodeCompressedGtin(e, t) {
          e.append("(01)");
          let r = e.length();
          e.append("9"), this.encodeCompressedGtinWithoutAI(e, t, r);
        }
        encodeCompressedGtinWithoutAI(e, t, r) {
          for (let n = 0; n < 4; ++n) {
            let i = this.getGeneralDecoder().extractNumericValueFromBitArray(t + 10 * n, 10);
            i / 100 === 0 && e.append("0"), i / 10 === 0 && e.append("0"), e.append(i);
          }
          J.appendCheckDigit(e, r);
        }
        static appendCheckDigit(e, t) {
          let r = 0;
          for (let n = 0; n < 13; n++) {
            let i = e.charAt(n + t).charCodeAt(0) - 48;
            r += (n & 1) === 0 ? 3 * i : i;
          }
          r = 10 - r % 10, r === 10 && (r = 0), e.append(r);
        }
      }
      J.GTIN_SIZE = 40;
      class Ae extends J {
        // the second one is the encodation method, and the other two are for the variable length
        constructor(e) {
          super(e);
        }
        parseInformation() {
          let e = new he();
          e.append("(01)");
          let t = e.length(), r = this.getGeneralDecoder().extractNumericValueFromBitArray(Ae.HEADER_SIZE, 4);
          return e.append(r), this.encodeCompressedGtinWithoutAI(e, Ae.HEADER_SIZE + 4, t), this.getGeneralDecoder().decodeAllCodes(e, Ae.HEADER_SIZE + 44);
        }
      }
      Ae.HEADER_SIZE = 4;
      class Se extends Y {
        constructor(e) {
          super(e);
        }
        parseInformation() {
          let e = new he();
          return this.getGeneralDecoder().decodeAllCodes(e, Se.HEADER_SIZE);
        }
      }
      Se.HEADER_SIZE = 5;
      class xe extends J {
        constructor(e) {
          super(e);
        }
        encodeCompressedWeight(e, t, r) {
          let n = this.getGeneralDecoder().extractNumericValueFromBitArray(t, r);
          this.addWeightCode(e, n);
          let i = this.checkWeight(n), s = 1e5;
          for (let a = 0; a < 5; ++a)
            i / s === 0 && e.append("0"), s /= 10;
          e.append(i);
        }
      }
      class fe extends xe {
        constructor(e) {
          super(e);
        }
        parseInformation() {
          if (this.getInformation().getSize() != fe.HEADER_SIZE + xe.GTIN_SIZE + fe.WEIGHT_SIZE)
            throw new D();
          let e = new he();
          return this.encodeCompressedGtin(e, fe.HEADER_SIZE), this.encodeCompressedWeight(e, fe.HEADER_SIZE + xe.GTIN_SIZE, fe.WEIGHT_SIZE), e.toString();
        }
      }
      fe.HEADER_SIZE = 5, fe.WEIGHT_SIZE = 15;
      class wt extends fe {
        constructor(e) {
          super(e);
        }
        addWeightCode(e, t) {
          e.append("(3103)");
        }
        checkWeight(e) {
          return e;
        }
      }
      class Qe extends fe {
        constructor(e) {
          super(e);
        }
        addWeightCode(e, t) {
          t < 1e4 ? e.append("(3202)") : e.append("(3203)");
        }
        checkWeight(e) {
          return e < 1e4 ? e : e - 1e4;
        }
      }
      class Re extends J {
        constructor(e) {
          super(e);
        }
        parseInformation() {
          if (this.getInformation().getSize() < Re.HEADER_SIZE + J.GTIN_SIZE)
            throw new D();
          let e = new he();
          this.encodeCompressedGtin(e, Re.HEADER_SIZE);
          let t = this.getGeneralDecoder().extractNumericValueFromBitArray(Re.HEADER_SIZE + J.GTIN_SIZE, Re.LAST_DIGIT_SIZE);
          e.append("(392"), e.append(t), e.append(")");
          let r = this.getGeneralDecoder().decodeGeneralPurposeField(Re.HEADER_SIZE + J.GTIN_SIZE + Re.LAST_DIGIT_SIZE, null);
          return e.append(r.getNewString()), e.toString();
        }
      }
      Re.HEADER_SIZE = 8, Re.LAST_DIGIT_SIZE = 2;
      class Fe extends J {
        constructor(e) {
          super(e);
        }
        parseInformation() {
          if (this.getInformation().getSize() < Fe.HEADER_SIZE + J.GTIN_SIZE)
            throw new D();
          let e = new he();
          this.encodeCompressedGtin(e, Fe.HEADER_SIZE);
          let t = this.getGeneralDecoder().extractNumericValueFromBitArray(Fe.HEADER_SIZE + J.GTIN_SIZE, Fe.LAST_DIGIT_SIZE);
          e.append("(393"), e.append(t), e.append(")");
          let r = this.getGeneralDecoder().extractNumericValueFromBitArray(Fe.HEADER_SIZE + J.GTIN_SIZE + Fe.LAST_DIGIT_SIZE, Fe.FIRST_THREE_DIGITS_SIZE);
          r / 100 == 0 && e.append("0"), r / 10 == 0 && e.append("0"), e.append(r);
          let n = this.getGeneralDecoder().decodeGeneralPurposeField(Fe.HEADER_SIZE + J.GTIN_SIZE + Fe.LAST_DIGIT_SIZE + Fe.FIRST_THREE_DIGITS_SIZE, null);
          return e.append(n.getNewString()), e.toString();
        }
      }
      Fe.HEADER_SIZE = 8, Fe.LAST_DIGIT_SIZE = 2, Fe.FIRST_THREE_DIGITS_SIZE = 10;
      class ve extends xe {
        constructor(e, t, r) {
          super(e), this.dateCode = r, this.firstAIdigits = t;
        }
        parseInformation() {
          if (this.getInformation().getSize() != ve.HEADER_SIZE + ve.GTIN_SIZE + ve.WEIGHT_SIZE + ve.DATE_SIZE)
            throw new D();
          let e = new he();
          return this.encodeCompressedGtin(e, ve.HEADER_SIZE), this.encodeCompressedWeight(e, ve.HEADER_SIZE + ve.GTIN_SIZE, ve.WEIGHT_SIZE), this.encodeCompressedDate(e, ve.HEADER_SIZE + ve.GTIN_SIZE + ve.WEIGHT_SIZE), e.toString();
        }
        encodeCompressedDate(e, t) {
          let r = this.getGeneralDecoder().extractNumericValueFromBitArray(t, ve.DATE_SIZE);
          if (r == 38400)
            return;
          e.append("("), e.append(this.dateCode), e.append(")");
          let n = r % 32;
          r /= 32;
          let i = r % 12 + 1;
          r /= 12;
          let s = r;
          s / 10 == 0 && e.append("0"), e.append(s), i / 10 == 0 && e.append("0"), e.append(i), n / 10 == 0 && e.append("0"), e.append(n);
        }
        addWeightCode(e, t) {
          e.append("("), e.append(this.firstAIdigits), e.append(t / 1e5), e.append(")");
        }
        checkWeight(e) {
          return e % 1e5;
        }
      }
      ve.HEADER_SIZE = 8, ve.WEIGHT_SIZE = 20, ve.DATE_SIZE = 16;
      function jt(d) {
        try {
          if (d.get(1))
            return new Ae(d);
          if (!d.get(2))
            return new Se(d);
          switch (k.extractNumericValueFromBitArray(d, 1, 4)) {
            case 4:
              return new wt(d);
            case 5:
              return new Qe(d);
          }
          switch (k.extractNumericValueFromBitArray(d, 1, 5)) {
            case 12:
              return new Re(d);
            case 13:
              return new Fe(d);
          }
          switch (k.extractNumericValueFromBitArray(d, 1, 7)) {
            case 56:
              return new ve(d, "310", "11");
            case 57:
              return new ve(d, "320", "11");
            case 58:
              return new ve(d, "310", "13");
            case 59:
              return new ve(d, "320", "13");
            case 60:
              return new ve(d, "310", "15");
            case 61:
              return new ve(d, "320", "15");
            case 62:
              return new ve(d, "310", "17");
            case 63:
              return new ve(d, "320", "17");
          }
        } catch (e) {
          throw console.log(e), new bt("unknown decoder: " + d);
        }
      }
      class Je {
        constructor(e, t, r, n) {
          this.leftchar = e, this.rightchar = t, this.finderpattern = r, this.maybeLast = n;
        }
        mayBeLast() {
          return this.maybeLast;
        }
        getLeftChar() {
          return this.leftchar;
        }
        getRightChar() {
          return this.rightchar;
        }
        getFinderPattern() {
          return this.finderpattern;
        }
        mustBeLast() {
          return this.rightchar == null;
        }
        toString() {
          return "[ " + this.leftchar + ", " + this.rightchar + " : " + (this.finderpattern == null ? "null" : this.finderpattern.getValue()) + " ]";
        }
        static equals(e, t) {
          return e instanceof Je ? Je.equalsOrNull(e.leftchar, t.leftchar) && Je.equalsOrNull(e.rightchar, t.rightchar) && Je.equalsOrNull(e.finderpattern, t.finderpattern) : !1;
        }
        static equalsOrNull(e, t) {
          return e === null ? t === null : Je.equals(e, t);
        }
        hashCode() {
          return this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue();
        }
      }
      class wr {
        constructor(e, t, r) {
          this.pairs = e, this.rowNumber = t, this.wasReversed = r;
        }
        getPairs() {
          return this.pairs;
        }
        getRowNumber() {
          return this.rowNumber;
        }
        isReversed() {
          return this.wasReversed;
        }
        // check implementation
        isEquivalent(e) {
          return this.checkEqualitity(this, e);
        }
        // @Override
        toString() {
          return "{ " + this.pairs + " }";
        }
        /**
         * Two rows are equal if they contain the same pairs in the same order.
         */
        // @Override
        // check implementation
        equals(e, t) {
          return e instanceof wr ? this.checkEqualitity(e, t) && e.wasReversed === t.wasReversed : !1;
        }
        checkEqualitity(e, t) {
          if (!e || !t)
            return;
          let r;
          return e.forEach((n, i) => {
            t.forEach((s) => {
              n.getLeftChar().getValue() === s.getLeftChar().getValue() && n.getRightChar().getValue() === s.getRightChar().getValue() && n.getFinderPatter().getValue() === s.getFinderPatter().getValue() && (r = !0);
            });
          }), r;
        }
      }
      class P extends ft {
        constructor(e) {
          super(...arguments), this.pairs = new Array(P.MAX_PAIRS), this.rows = new Array(), this.startEnd = [2], this.verbose = e === !0;
        }
        decodeRow(e, t, r) {
          this.pairs.length = 0, this.startFromEven = !1;
          try {
            return P.constructResult(this.decodeRow2pairs(e, t));
          } catch (n) {
            this.verbose && console.log(n);
          }
          return this.pairs.length = 0, this.startFromEven = !0, P.constructResult(this.decodeRow2pairs(e, t));
        }
        reset() {
          this.pairs.length = 0, this.rows.length = 0;
        }
        // Not private for testing
        decodeRow2pairs(e, t) {
          let r = !1;
          for (; !r; )
            try {
              this.pairs.push(this.retrieveNextPair(t, this.pairs, e));
            } catch (i) {
              if (i instanceof D) {
                if (!this.pairs.length)
                  throw new D();
                r = !0;
              }
            }
          if (this.checkChecksum())
            return this.pairs;
          let n;
          if (this.rows.length ? n = !0 : n = !1, this.storeRow(e, !1), n) {
            let i = this.checkRowsBoolean(!1);
            if (i != null || (i = this.checkRowsBoolean(!0), i != null))
              return i;
          }
          throw new D();
        }
        // Need to Verify
        checkRowsBoolean(e) {
          if (this.rows.length > 25)
            return this.rows.length = 0, null;
          this.pairs.length = 0, e && (this.rows = this.rows.reverse());
          let t = null;
          try {
            t = this.checkRows(new Array(), 0);
          } catch (r) {
            this.verbose && console.log(r);
          }
          return e && (this.rows = this.rows.reverse()), t;
        }
        // Try to construct a valid rows sequence
        // Recursion is used to implement backtracking
        checkRows(e, t) {
          for (let r = t; r < this.rows.length; r++) {
            let n = this.rows[r];
            this.pairs.length = 0;
            for (let s of e)
              this.pairs.push(s.getPairs());
            if (this.pairs.push(n.getPairs()), !P.isValidSequence(this.pairs))
              continue;
            if (this.checkChecksum())
              return this.pairs;
            let i = new Array(e);
            i.push(n);
            try {
              return this.checkRows(i, r + 1);
            } catch (s) {
              this.verbose && console.log(s);
            }
          }
          throw new D();
        }
        // Whether the pairs form a valid find pattern sequence,
        // either complete or a prefix
        static isValidSequence(e) {
          for (let t of P.FINDER_PATTERN_SEQUENCES) {
            if (e.length > t.length)
              continue;
            let r = !0;
            for (let n = 0; n < e.length; n++)
              if (e[n].getFinderPattern().getValue() != t[n]) {
                r = !1;
                break;
              }
            if (r)
              return !0;
          }
          return !1;
        }
        storeRow(e, t) {
          let r = 0, n = !1, i = !1;
          for (; r < this.rows.length; ) {
            let s = this.rows[r];
            if (s.getRowNumber() > e) {
              i = s.isEquivalent(this.pairs);
              break;
            }
            n = s.isEquivalent(this.pairs), r++;
          }
          i || n || P.isPartialRow(this.pairs, this.rows) || (this.rows.push(r, new wr(this.pairs, e, t)), this.removePartialRows(this.pairs, this.rows));
        }
        // Remove all the rows that contains only specified pairs
        removePartialRows(e, t) {
          for (let r of t)
            if (r.getPairs().length !== e.length) {
              for (let n of r.getPairs())
                for (let i of e)
                  if (Je.equals(n, i))
                    break;
            }
        }
        // Returns true when one of the rows already contains all the pairs
        static isPartialRow(e, t) {
          for (let r of t) {
            let n = !0;
            for (let i of e) {
              let s = !1;
              for (let a of r.getPairs())
                if (i.equals(a)) {
                  s = !0;
                  break;
                }
              if (!s) {
                n = !1;
                break;
              }
            }
            if (n)
              return !0;
          }
          return !1;
        }
        // Only used for unit testing
        getRows() {
          return this.rows;
        }
        // Not private for unit testing
        static constructResult(e) {
          let t = ln.buildBitArray(e), n = jt(t).parseInformation(), i = e[0].getFinderPattern().getResultPoints(), s = e[e.length - 1].getFinderPattern().getResultPoints(), a = [i[0], i[1], s[0], s[1]];
          return new Ke(n, null, null, a, re.RSS_EXPANDED, null);
        }
        checkChecksum() {
          let e = this.pairs.get(0), t = e.getLeftChar(), r = e.getRightChar();
          if (r == null)
            return !1;
          let n = r.getChecksumPortion(), i = 2;
          for (let a = 1; a < this.pairs.size(); ++a) {
            let o = this.pairs.get(a);
            n += o.getLeftChar().getChecksumPortion(), i++;
            let l = o.getRightChar();
            l != null && (n += l.getChecksumPortion(), i++);
          }
          return n %= 211, 211 * (i - 4) + n == t.getValue();
        }
        static getNextSecondBar(e, t) {
          let r;
          return e.get(t) ? (r = e.getNextUnset(t), r = e.getNextSet(r)) : (r = e.getNextSet(t), r = e.getNextUnset(r)), r;
        }
        // not private for testing
        retrieveNextPair(e, t, r) {
          let n = t.length % 2 == 0;
          this.startFromEven && (n = !n);
          let i, s = !0, a = -1;
          do
            this.findNextPair(e, t, a), i = this.parseFoundFinderPattern(e, r, n), i == null ? a = P.getNextSecondBar(e, this.startEnd[0]) : s = !1;
          while (s);
          let o = this.decodeDataCharacter(e, i, n, !0);
          if (!this.isEmptyPair(t) && t[t.length - 1].mustBeLast())
            throw new D();
          let l;
          try {
            l = this.decodeDataCharacter(e, i, n, !1);
          } catch (u) {
            l = null, this.verbose && console.log(u);
          }
          return new Je(o, l, i, !0);
        }
        isEmptyPair(e) {
          return e.length === 0;
        }
        findNextPair(e, t, r) {
          let n = this.getDecodeFinderCounters();
          n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
          let i = e.getSize(), s;
          r >= 0 ? s = r : this.isEmptyPair(t) ? s = 0 : s = t[t.length - 1].getFinderPattern().getStartEnd()[1];
          let a = t.length % 2 != 0;
          this.startFromEven && (a = !a);
          let o = !1;
          for (; s < i && (o = !e.get(s), !!o); )
            s++;
          let l = 0, u = s;
          for (let g = s; g < i; g++)
            if (e.get(g) != o)
              n[l]++;
            else {
              if (l == 3) {
                if (a && P.reverseCounters(n), P.isFinderPattern(n)) {
                  this.startEnd[0] = u, this.startEnd[1] = g;
                  return;
                }
                a && P.reverseCounters(n), u += n[0] + n[1], n[0] = n[2], n[1] = n[3], n[2] = 0, n[3] = 0, l--;
              } else
                l++;
              n[l] = 1, o = !o;
            }
          throw new D();
        }
        static reverseCounters(e) {
          let t = e.length;
          for (let r = 0; r < t / 2; ++r) {
            let n = e[r];
            e[r] = e[t - r - 1], e[t - r - 1] = n;
          }
        }
        parseFoundFinderPattern(e, t, r) {
          let n, i, s;
          if (r) {
            let l = this.startEnd[0] - 1;
            for (; l >= 0 && !e.get(l); )
              l--;
            l++, n = this.startEnd[0] - l, i = l, s = this.startEnd[1];
          } else
            i = this.startEnd[0], s = e.getNextUnset(this.startEnd[1] + 1), n = s - this.startEnd[1];
          let a = this.getDecodeFinderCounters();
          j.arraycopy(a, 0, a, 1, a.length - 1), a[0] = n;
          let o;
          try {
            o = this.parseFinderValue(a, P.FINDER_PATTERNS);
          } catch {
            return null;
          }
          return new Sr(o, [i, s], i, s, t);
        }
        decodeDataCharacter(e, t, r, n) {
          let i = this.getDataCharacterCounters();
          for (let He = 0; He < i.length; He++)
            i[He] = 0;
          if (n)
            P.recordPatternInReverse(e, t.getStartEnd()[0], i);
          else {
            P.recordPattern(e, t.getStartEnd()[1], i);
            for (let He = 0, mt = i.length - 1; He < mt; He++, mt--) {
              let Lt = i[He];
              i[He] = i[mt], i[mt] = Lt;
            }
          }
          let s = 17, a = Ee.sum(new Int32Array(i)) / s, o = (t.getStartEnd()[1] - t.getStartEnd()[0]) / 15;
          if (Math.abs(a - o) / o > 0.3)
            throw new D();
          let l = this.getOddCounts(), u = this.getEvenCounts(), g = this.getOddRoundingErrors(), x = this.getEvenRoundingErrors();
          for (let He = 0; He < i.length; He++) {
            let mt = 1 * i[He] / a, Lt = mt + 0.5;
            if (Lt < 1) {
              if (mt < 0.3)
                throw new D();
              Lt = 1;
            } else if (Lt > 8) {
              if (mt > 8.7)
                throw new D();
              Lt = 8;
            }
            let Dr = He / 2;
            (He & 1) == 0 ? (l[Dr] = Lt, g[Dr] = mt - Lt) : (u[Dr] = Lt, x[Dr] = mt - Lt);
          }
          this.adjustOddEvenCounts(s);
          let y = 4 * t.getValue() + (r ? 0 : 2) + (n ? 0 : 1) - 1, I = 0, b = 0;
          for (let He = l.length - 1; He >= 0; He--) {
            if (P.isNotA1left(t, r, n)) {
              let mt = P.WEIGHTS[y][2 * He];
              b += l[He] * mt;
            }
            I += l[He];
          }
          let T = 0;
          for (let He = u.length - 1; He >= 0; He--)
            if (P.isNotA1left(t, r, n)) {
              let mt = P.WEIGHTS[y][2 * He + 1];
              T += u[He] * mt;
            }
          let R = b + T;
          if ((I & 1) != 0 || I > 13 || I < 4)
            throw new D();
          let H = (13 - I) / 2, W = P.SYMBOL_WIDEST[H], U = 9 - W, pe = Ft.getRSSvalue(l, W, !0), de = Ft.getRSSvalue(u, U, !1), vt = P.EVEN_TOTAL_SUBSET[H], Xt = P.GSUM[H], Dt = pe * vt + de + Xt;
          return new rr(Dt, R);
        }
        static isNotA1left(e, t, r) {
          return !(e.getValue() == 0 && t && r);
        }
        adjustOddEvenCounts(e) {
          let t = Ee.sum(new Int32Array(this.getOddCounts())), r = Ee.sum(new Int32Array(this.getEvenCounts())), n = !1, i = !1;
          t > 13 ? i = !0 : t < 4 && (n = !0);
          let s = !1, a = !1;
          r > 13 ? a = !0 : r < 4 && (s = !0);
          let o = t + r - e, l = (t & 1) == 1, u = (r & 1) == 0;
          if (o == 1)
            if (l) {
              if (u)
                throw new D();
              i = !0;
            } else {
              if (!u)
                throw new D();
              a = !0;
            }
          else if (o == -1)
            if (l) {
              if (u)
                throw new D();
              n = !0;
            } else {
              if (!u)
                throw new D();
              s = !0;
            }
          else if (o == 0) {
            if (l) {
              if (!u)
                throw new D();
              t < r ? (n = !0, a = !0) : (i = !0, s = !0);
            } else if (u)
              throw new D();
          } else
            throw new D();
          if (n) {
            if (i)
              throw new D();
            P.increment(this.getOddCounts(), this.getOddRoundingErrors());
          }
          if (i && P.decrement(this.getOddCounts(), this.getOddRoundingErrors()), s) {
            if (a)
              throw new D();
            P.increment(this.getEvenCounts(), this.getOddRoundingErrors());
          }
          a && P.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
        }
      }
      P.SYMBOL_WIDEST = [7, 5, 4, 3, 1], P.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204], P.GSUM = [0, 348, 1388, 2948, 3988], P.FINDER_PATTERNS = [
        Int32Array.from([1, 8, 4, 1]),
        Int32Array.from([3, 6, 4, 1]),
        Int32Array.from([3, 4, 6, 1]),
        Int32Array.from([3, 2, 8, 1]),
        Int32Array.from([2, 6, 5, 1]),
        Int32Array.from([2, 2, 9, 1])
        // F
      ], P.WEIGHTS = [
        [1, 3, 9, 27, 81, 32, 96, 77],
        [20, 60, 180, 118, 143, 7, 21, 63],
        [189, 145, 13, 39, 117, 140, 209, 205],
        [193, 157, 49, 147, 19, 57, 171, 91],
        [62, 186, 136, 197, 169, 85, 44, 132],
        [185, 133, 188, 142, 4, 12, 36, 108],
        [113, 128, 173, 97, 80, 29, 87, 50],
        [150, 28, 84, 41, 123, 158, 52, 156],
        [46, 138, 203, 187, 139, 206, 196, 166],
        [76, 17, 51, 153, 37, 111, 122, 155],
        [43, 129, 176, 106, 107, 110, 119, 146],
        [16, 48, 144, 10, 30, 90, 59, 177],
        [109, 116, 137, 200, 178, 112, 125, 164],
        [70, 210, 208, 202, 184, 130, 179, 115],
        [134, 191, 151, 31, 93, 68, 204, 190],
        [148, 22, 66, 198, 172, 94, 71, 2],
        [6, 18, 54, 162, 64, 192, 154, 40],
        [120, 149, 25, 75, 14, 42, 126, 167],
        [79, 26, 78, 23, 69, 207, 199, 175],
        [103, 98, 83, 38, 114, 131, 182, 124],
        [161, 61, 183, 127, 170, 88, 53, 159],
        [55, 165, 73, 8, 24, 72, 5, 15],
        [45, 135, 194, 160, 58, 174, 100, 89]
      ], P.FINDER_PAT_A = 0, P.FINDER_PAT_B = 1, P.FINDER_PAT_C = 2, P.FINDER_PAT_D = 3, P.FINDER_PAT_E = 4, P.FINDER_PAT_F = 5, P.FINDER_PATTERN_SEQUENCES = [
        [P.FINDER_PAT_A, P.FINDER_PAT_A],
        [P.FINDER_PAT_A, P.FINDER_PAT_B, P.FINDER_PAT_B],
        [P.FINDER_PAT_A, P.FINDER_PAT_C, P.FINDER_PAT_B, P.FINDER_PAT_D],
        [P.FINDER_PAT_A, P.FINDER_PAT_E, P.FINDER_PAT_B, P.FINDER_PAT_D, P.FINDER_PAT_C],
        [P.FINDER_PAT_A, P.FINDER_PAT_E, P.FINDER_PAT_B, P.FINDER_PAT_D, P.FINDER_PAT_D, P.FINDER_PAT_F],
        [P.FINDER_PAT_A, P.FINDER_PAT_E, P.FINDER_PAT_B, P.FINDER_PAT_D, P.FINDER_PAT_E, P.FINDER_PAT_F, P.FINDER_PAT_F],
        [P.FINDER_PAT_A, P.FINDER_PAT_A, P.FINDER_PAT_B, P.FINDER_PAT_B, P.FINDER_PAT_C, P.FINDER_PAT_C, P.FINDER_PAT_D, P.FINDER_PAT_D],
        [P.FINDER_PAT_A, P.FINDER_PAT_A, P.FINDER_PAT_B, P.FINDER_PAT_B, P.FINDER_PAT_C, P.FINDER_PAT_C, P.FINDER_PAT_D, P.FINDER_PAT_E, P.FINDER_PAT_E],
        [P.FINDER_PAT_A, P.FINDER_PAT_A, P.FINDER_PAT_B, P.FINDER_PAT_B, P.FINDER_PAT_C, P.FINDER_PAT_C, P.FINDER_PAT_D, P.FINDER_PAT_E, P.FINDER_PAT_F, P.FINDER_PAT_F],
        [P.FINDER_PAT_A, P.FINDER_PAT_A, P.FINDER_PAT_B, P.FINDER_PAT_B, P.FINDER_PAT_C, P.FINDER_PAT_D, P.FINDER_PAT_D, P.FINDER_PAT_E, P.FINDER_PAT_E, P.FINDER_PAT_F, P.FINDER_PAT_F]
      ], P.MAX_PAIRS = 11;
      class Sn extends rr {
        constructor(e, t, r) {
          super(e, t), this.count = 0, this.finderPattern = r;
        }
        getFinderPattern() {
          return this.finderPattern;
        }
        getCount() {
          return this.count;
        }
        incrementCount() {
          this.count++;
        }
      }
      class tt extends ft {
        constructor() {
          super(...arguments), this.possibleLeftPairs = [], this.possibleRightPairs = [];
        }
        decodeRow(e, t, r) {
          const n = this.decodePair(t, !1, e, r);
          tt.addOrTally(this.possibleLeftPairs, n), t.reverse();
          let i = this.decodePair(t, !0, e, r);
          tt.addOrTally(this.possibleRightPairs, i), t.reverse();
          for (let s of this.possibleLeftPairs)
            if (s.getCount() > 1) {
              for (let a of this.possibleRightPairs)
                if (a.getCount() > 1 && tt.checkChecksum(s, a))
                  return tt.constructResult(s, a);
            }
          throw new D();
        }
        static addOrTally(e, t) {
          if (t == null)
            return;
          let r = !1;
          for (let n of e)
            if (n.getValue() === t.getValue()) {
              n.incrementCount(), r = !0;
              break;
            }
          r || e.push(t);
        }
        reset() {
          this.possibleLeftPairs.length = 0, this.possibleRightPairs.length = 0;
        }
        static constructResult(e, t) {
          let r = 4537077 * e.getValue() + t.getValue(), n = new String(r).toString(), i = new he();
          for (let l = 13 - n.length; l > 0; l--)
            i.append("0");
          i.append(n);
          let s = 0;
          for (let l = 0; l < 13; l++) {
            let u = i.charAt(l).charCodeAt(0) - 48;
            s += (l & 1) === 0 ? 3 * u : u;
          }
          s = 10 - s % 10, s === 10 && (s = 0), i.append(s.toString());
          let a = e.getFinderPattern().getResultPoints(), o = t.getFinderPattern().getResultPoints();
          return new Ke(i.toString(), null, 0, [a[0], a[1], o[0], o[1]], re.RSS_14, (/* @__PURE__ */ new Date()).getTime());
        }
        static checkChecksum(e, t) {
          let r = (e.getChecksumPortion() + 16 * t.getChecksumPortion()) % 79, n = 9 * e.getFinderPattern().getValue() + t.getFinderPattern().getValue();
          return n > 72 && n--, n > 8 && n--, r === n;
        }
        decodePair(e, t, r, n) {
          try {
            let i = this.findFinderPattern(e, t), s = this.parseFoundFinderPattern(e, r, t, i), a = n == null ? null : n.get(ce.NEED_RESULT_POINT_CALLBACK);
            if (a != null) {
              let u = (i[0] + i[1]) / 2;
              t && (u = e.getSize() - 1 - u), a.foundPossibleResultPoint(new Q(u, r));
            }
            let o = this.decodeDataCharacter(e, s, !0), l = this.decodeDataCharacter(e, s, !1);
            return new Sn(1597 * o.getValue() + l.getValue(), o.getChecksumPortion() + 4 * l.getChecksumPortion(), s);
          } catch {
            return null;
          }
        }
        decodeDataCharacter(e, t, r) {
          let n = this.getDataCharacterCounters();
          for (let T = 0; T < n.length; T++)
            n[T] = 0;
          if (r)
            et.recordPatternInReverse(e, t.getStartEnd()[0], n);
          else {
            et.recordPattern(e, t.getStartEnd()[1] + 1, n);
            for (let T = 0, R = n.length - 1; T < R; T++, R--) {
              let H = n[T];
              n[T] = n[R], n[R] = H;
            }
          }
          let i = r ? 16 : 15, s = Ee.sum(new Int32Array(n)) / i, a = this.getOddCounts(), o = this.getEvenCounts(), l = this.getOddRoundingErrors(), u = this.getEvenRoundingErrors();
          for (let T = 0; T < n.length; T++) {
            let R = n[T] / s, H = Math.floor(R + 0.5);
            H < 1 ? H = 1 : H > 8 && (H = 8);
            let W = Math.floor(T / 2);
            (T & 1) === 0 ? (a[W] = H, l[W] = R - H) : (o[W] = H, u[W] = R - H);
          }
          this.adjustOddEvenCounts(r, i);
          let g = 0, x = 0;
          for (let T = a.length - 1; T >= 0; T--)
            x *= 9, x += a[T], g += a[T];
          let y = 0, I = 0;
          for (let T = o.length - 1; T >= 0; T--)
            y *= 9, y += o[T], I += o[T];
          let b = x + 3 * y;
          if (r) {
            if ((g & 1) !== 0 || g > 12 || g < 4)
              throw new D();
            let T = (12 - g) / 2, R = tt.OUTSIDE_ODD_WIDEST[T], H = 9 - R, W = Ft.getRSSvalue(a, R, !1), U = Ft.getRSSvalue(o, H, !0), pe = tt.OUTSIDE_EVEN_TOTAL_SUBSET[T], de = tt.OUTSIDE_GSUM[T];
            return new rr(W * pe + U + de, b);
          } else {
            if ((I & 1) !== 0 || I > 10 || I < 4)
              throw new D();
            let T = (10 - I) / 2, R = tt.INSIDE_ODD_WIDEST[T], H = 9 - R, W = Ft.getRSSvalue(a, R, !0), U = Ft.getRSSvalue(o, H, !1), pe = tt.INSIDE_ODD_TOTAL_SUBSET[T], de = tt.INSIDE_GSUM[T];
            return new rr(U * pe + W + de, b);
          }
        }
        findFinderPattern(e, t) {
          let r = this.getDecodeFinderCounters();
          r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 0;
          let n = e.getSize(), i = !1, s = 0;
          for (; s < n && (i = !e.get(s), t !== i); )
            s++;
          let a = 0, o = s;
          for (let l = s; l < n; l++)
            if (e.get(l) !== i)
              r[a]++;
            else {
              if (a === 3) {
                if (ft.isFinderPattern(r))
                  return [o, l];
                o += r[0] + r[1], r[0] = r[2], r[1] = r[3], r[2] = 0, r[3] = 0, a--;
              } else
                a++;
              r[a] = 1, i = !i;
            }
          throw new D();
        }
        parseFoundFinderPattern(e, t, r, n) {
          let i = e.get(n[0]), s = n[0] - 1;
          for (; s >= 0 && i !== e.get(s); )
            s--;
          s++;
          const a = n[0] - s, o = this.getDecodeFinderCounters(), l = new Int32Array(o.length);
          j.arraycopy(o, 0, l, 1, o.length - 1), l[0] = a;
          const u = this.parseFinderValue(l, tt.FINDER_PATTERNS);
          let g = s, x = n[1];
          return r && (g = e.getSize() - 1 - g, x = e.getSize() - 1 - x), new Sr(u, [s, n[1]], g, x, t);
        }
        adjustOddEvenCounts(e, t) {
          let r = Ee.sum(new Int32Array(this.getOddCounts())), n = Ee.sum(new Int32Array(this.getEvenCounts())), i = !1, s = !1, a = !1, o = !1;
          e ? (r > 12 ? s = !0 : r < 4 && (i = !0), n > 12 ? o = !0 : n < 4 && (a = !0)) : (r > 11 ? s = !0 : r < 5 && (i = !0), n > 10 ? o = !0 : n < 4 && (a = !0));
          let l = r + n - t, u = (r & 1) === (e ? 1 : 0), g = (n & 1) === 1;
          if (l === 1)
            if (u) {
              if (g)
                throw new D();
              s = !0;
            } else {
              if (!g)
                throw new D();
              o = !0;
            }
          else if (l === -1)
            if (u) {
              if (g)
                throw new D();
              i = !0;
            } else {
              if (!g)
                throw new D();
              a = !0;
            }
          else if (l === 0) {
            if (u) {
              if (!g)
                throw new D();
              r < n ? (i = !0, o = !0) : (s = !0, a = !0);
            } else if (g)
              throw new D();
          } else
            throw new D();
          if (i) {
            if (s)
              throw new D();
            ft.increment(this.getOddCounts(), this.getOddRoundingErrors());
          }
          if (s && ft.decrement(this.getOddCounts(), this.getOddRoundingErrors()), a) {
            if (o)
              throw new D();
            ft.increment(this.getEvenCounts(), this.getOddRoundingErrors());
          }
          o && ft.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
        }
      }
      tt.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126], tt.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81], tt.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715], tt.INSIDE_GSUM = [0, 336, 1036, 1516], tt.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1], tt.INSIDE_ODD_WIDEST = [2, 4, 6, 8], tt.FINDER_PATTERNS = [
        Int32Array.from([3, 8, 2, 1]),
        Int32Array.from([3, 5, 5, 1]),
        Int32Array.from([3, 3, 7, 1]),
        Int32Array.from([3, 1, 9, 1]),
        Int32Array.from([2, 7, 4, 1]),
        Int32Array.from([2, 5, 6, 1]),
        Int32Array.from([2, 3, 8, 1]),
        Int32Array.from([1, 5, 7, 1]),
        Int32Array.from([1, 3, 9, 1])
      ];
      class Nr extends et {
        constructor(e, t) {
          super(), this.readers = [], this.verbose = t === !0;
          const r = e ? e.get(ce.POSSIBLE_FORMATS) : null, n = e && e.get(ce.ASSUME_CODE_39_CHECK_DIGIT) !== void 0;
          r ? ((r.includes(re.EAN_13) || r.includes(re.UPC_A) || r.includes(re.EAN_8) || r.includes(re.UPC_E)) && this.readers.push(new Hr(e)), r.includes(re.CODE_39) && this.readers.push(new st(n)), r.includes(re.CODE_128) && this.readers.push(new X()), r.includes(re.ITF) && this.readers.push(new Le()), r.includes(re.RSS_14) && this.readers.push(new tt()), r.includes(re.RSS_EXPANDED) && this.readers.push(new P(this.verbose))) : (this.readers.push(new Hr(e)), this.readers.push(new st()), this.readers.push(new Hr(e)), this.readers.push(new X()), this.readers.push(new Le()), this.readers.push(new tt()), this.readers.push(new P(this.verbose)));
        }
        // @Override
        decodeRow(e, t, r) {
          for (let n = 0; n < this.readers.length; n++)
            try {
              return this.readers[n].decodeRow(e, t, r);
            } catch {
            }
          throw new D();
        }
        // @Override
        reset() {
          this.readers.forEach((e) => e.reset());
        }
      }
      class Bi extends ot {
        /**
         * Creates an instance of BrowserBarcodeReader.
         * @param {number} [timeBetweenScansMillis=500] the time delay between subsequent decode tries
         * @param {Map<DecodeHintType, any>} hints
         */
        constructor(e = 500, t) {
          super(new Nr(t), e, t);
        }
      }
      class Me {
        constructor(e, t, r) {
          this.ecCodewords = e, this.ecBlocks = [t], r && this.ecBlocks.push(r);
        }
        getECCodewords() {
          return this.ecCodewords;
        }
        getECBlocks() {
          return this.ecBlocks;
        }
      }
      class De {
        constructor(e, t) {
          this.count = e, this.dataCodewords = t;
        }
        getCount() {
          return this.count;
        }
        getDataCodewords() {
          return this.dataCodewords;
        }
      }
      class Ie {
        constructor(e, t, r, n, i, s) {
          this.versionNumber = e, this.symbolSizeRows = t, this.symbolSizeColumns = r, this.dataRegionSizeRows = n, this.dataRegionSizeColumns = i, this.ecBlocks = s;
          let a = 0;
          const o = s.getECCodewords(), l = s.getECBlocks();
          for (let u of l)
            a += u.getCount() * (u.getDataCodewords() + o);
          this.totalCodewords = a;
        }
        getVersionNumber() {
          return this.versionNumber;
        }
        getSymbolSizeRows() {
          return this.symbolSizeRows;
        }
        getSymbolSizeColumns() {
          return this.symbolSizeColumns;
        }
        getDataRegionSizeRows() {
          return this.dataRegionSizeRows;
        }
        getDataRegionSizeColumns() {
          return this.dataRegionSizeColumns;
        }
        getTotalCodewords() {
          return this.totalCodewords;
        }
        getECBlocks() {
          return this.ecBlocks;
        }
        /**
         * <p>Deduces version information from Data Matrix dimensions.</p>
         *
         * @param numRows Number of rows in modules
         * @param numColumns Number of columns in modules
         * @return Version for a Data Matrix Code of those dimensions
         * @throws FormatException if dimensions do correspond to a valid Data Matrix size
         */
        static getVersionForDimensions(e, t) {
          if ((e & 1) !== 0 || (t & 1) !== 0)
            throw new L();
          for (let r of Ie.VERSIONS)
            if (r.symbolSizeRows === e && r.symbolSizeColumns === t)
              return r;
          throw new L();
        }
        //  @Override
        toString() {
          return "" + this.versionNumber;
        }
        /**
         * See ISO 16022:2006 5.5.1 Table 7
         */
        static buildVersions() {
          return [
            new Ie(1, 10, 10, 8, 8, new Me(5, new De(1, 3))),
            new Ie(2, 12, 12, 10, 10, new Me(7, new De(1, 5))),
            new Ie(3, 14, 14, 12, 12, new Me(10, new De(1, 8))),
            new Ie(4, 16, 16, 14, 14, new Me(12, new De(1, 12))),
            new Ie(5, 18, 18, 16, 16, new Me(14, new De(1, 18))),
            new Ie(6, 20, 20, 18, 18, new Me(18, new De(1, 22))),
            new Ie(7, 22, 22, 20, 20, new Me(20, new De(1, 30))),
            new Ie(8, 24, 24, 22, 22, new Me(24, new De(1, 36))),
            new Ie(9, 26, 26, 24, 24, new Me(28, new De(1, 44))),
            new Ie(10, 32, 32, 14, 14, new Me(36, new De(1, 62))),
            new Ie(11, 36, 36, 16, 16, new Me(42, new De(1, 86))),
            new Ie(12, 40, 40, 18, 18, new Me(48, new De(1, 114))),
            new Ie(13, 44, 44, 20, 20, new Me(56, new De(1, 144))),
            new Ie(14, 48, 48, 22, 22, new Me(68, new De(1, 174))),
            new Ie(15, 52, 52, 24, 24, new Me(42, new De(2, 102))),
            new Ie(16, 64, 64, 14, 14, new Me(56, new De(2, 140))),
            new Ie(17, 72, 72, 16, 16, new Me(36, new De(4, 92))),
            new Ie(18, 80, 80, 18, 18, new Me(48, new De(4, 114))),
            new Ie(19, 88, 88, 20, 20, new Me(56, new De(4, 144))),
            new Ie(20, 96, 96, 22, 22, new Me(68, new De(4, 174))),
            new Ie(21, 104, 104, 24, 24, new Me(56, new De(6, 136))),
            new Ie(22, 120, 120, 18, 18, new Me(68, new De(6, 175))),
            new Ie(23, 132, 132, 20, 20, new Me(62, new De(8, 163))),
            new Ie(24, 144, 144, 22, 22, new Me(62, new De(8, 156), new De(2, 155))),
            new Ie(25, 8, 18, 6, 16, new Me(7, new De(1, 5))),
            new Ie(26, 8, 32, 6, 14, new Me(11, new De(1, 10))),
            new Ie(27, 12, 26, 10, 24, new Me(14, new De(1, 16))),
            new Ie(28, 12, 36, 10, 16, new Me(18, new De(1, 22))),
            new Ie(29, 16, 36, 14, 16, new Me(24, new De(1, 32))),
            new Ie(30, 16, 48, 14, 22, new Me(28, new De(1, 49)))
          ];
        }
      }
      Ie.VERSIONS = Ie.buildVersions();
      class Nn {
        /**
         * @param bitMatrix {@link BitMatrix} to parse
         * @throws FormatException if dimension is < 8 or > 144 or not 0 mod 2
         */
        constructor(e) {
          const t = e.getHeight();
          if (t < 8 || t > 144 || (t & 1) !== 0)
            throw new L();
          this.version = Nn.readVersion(e), this.mappingBitMatrix = this.extractDataRegion(e), this.readMappingMatrix = new Oe(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight());
        }
        getVersion() {
          return this.version;
        }
        /**
         * <p>Creates the version object based on the dimension of the original bit matrix from
         * the datamatrix code.</p>
         *
         * <p>See ISO 16022:2006 Table 7 - ECC 200 symbol attributes</p>
         *
         * @param bitMatrix Original {@link BitMatrix} including alignment patterns
         * @return {@link Version} encapsulating the Data Matrix Code's "version"
         * @throws FormatException if the dimensions of the mapping matrix are not valid
         * Data Matrix dimensions.
         */
        static readVersion(e) {
          const t = e.getHeight(), r = e.getWidth();
          return Ie.getVersionForDimensions(t, r);
        }
        /**
         * <p>Reads the bits in the {@link BitMatrix} representing the mapping matrix (No alignment patterns)
         * in the correct order in order to reconstitute the codewords bytes contained within the
         * Data Matrix Code.</p>
         *
         * @return bytes encoded within the Data Matrix Code
         * @throws FormatException if the exact number of bytes expected is not read
         */
        readCodewords() {
          const e = new Int8Array(this.version.getTotalCodewords());
          let t = 0, r = 4, n = 0;
          const i = this.mappingBitMatrix.getHeight(), s = this.mappingBitMatrix.getWidth();
          let a = !1, o = !1, l = !1, u = !1;
          do
            if (r === i && n === 0 && !a)
              e[t++] = this.readCorner1(i, s) & 255, r -= 2, n += 2, a = !0;
            else if (r === i - 2 && n === 0 && (s & 3) !== 0 && !o)
              e[t++] = this.readCorner2(i, s) & 255, r -= 2, n += 2, o = !0;
            else if (r === i + 4 && n === 2 && (s & 7) === 0 && !l)
              e[t++] = this.readCorner3(i, s) & 255, r -= 2, n += 2, l = !0;
            else if (r === i - 2 && n === 0 && (s & 7) === 4 && !u)
              e[t++] = this.readCorner4(i, s) & 255, r -= 2, n += 2, u = !0;
            else {
              do
                r < i && n >= 0 && !this.readMappingMatrix.get(n, r) && (e[t++] = this.readUtah(r, n, i, s) & 255), r -= 2, n += 2;
              while (r >= 0 && n < s);
              r += 1, n += 3;
              do
                r >= 0 && n < s && !this.readMappingMatrix.get(n, r) && (e[t++] = this.readUtah(r, n, i, s) & 255), r += 2, n -= 2;
              while (r < i && n >= 0);
              r += 3, n += 1;
            }
          while (r < i || n < s);
          if (t !== this.version.getTotalCodewords())
            throw new L();
          return e;
        }
        /**
         * <p>Reads a bit of the mapping matrix accounting for boundary wrapping.</p>
         *
         * @param row Row to read in the mapping matrix
         * @param column Column to read in the mapping matrix
         * @param numRows Number of rows in the mapping matrix
         * @param numColumns Number of columns in the mapping matrix
         * @return value of the given bit in the mapping matrix
         */
        readModule(e, t, r, n) {
          return e < 0 && (e += r, t += 4 - (r + 4 & 7)), t < 0 && (t += n, e += 4 - (n + 4 & 7)), this.readMappingMatrix.set(t, e), this.mappingBitMatrix.get(t, e);
        }
        /**
         * <p>Reads the 8 bits of the standard Utah-shaped pattern.</p>
         *
         * <p>See ISO 16022:2006, 5.8.1 Figure 6</p>
         *
         * @param row Current row in the mapping matrix, anchored at the 8th bit (LSB) of the pattern
         * @param column Current column in the mapping matrix, anchored at the 8th bit (LSB) of the pattern
         * @param numRows Number of rows in the mapping matrix
         * @param numColumns Number of columns in the mapping matrix
         * @return byte from the utah shape
         */
        readUtah(e, t, r, n) {
          let i = 0;
          return this.readModule(e - 2, t - 2, r, n) && (i |= 1), i <<= 1, this.readModule(e - 2, t - 1, r, n) && (i |= 1), i <<= 1, this.readModule(e - 1, t - 2, r, n) && (i |= 1), i <<= 1, this.readModule(e - 1, t - 1, r, n) && (i |= 1), i <<= 1, this.readModule(e - 1, t, r, n) && (i |= 1), i <<= 1, this.readModule(e, t - 2, r, n) && (i |= 1), i <<= 1, this.readModule(e, t - 1, r, n) && (i |= 1), i <<= 1, this.readModule(e, t, r, n) && (i |= 1), i;
        }
        /**
         * <p>Reads the 8 bits of the special corner condition 1.</p>
         *
         * <p>See ISO 16022:2006, Figure F.3</p>
         *
         * @param numRows Number of rows in the mapping matrix
         * @param numColumns Number of columns in the mapping matrix
         * @return byte from the Corner condition 1
         */
        readCorner1(e, t) {
          let r = 0;
          return this.readModule(e - 1, 0, e, t) && (r |= 1), r <<= 1, this.readModule(e - 1, 1, e, t) && (r |= 1), r <<= 1, this.readModule(e - 1, 2, e, t) && (r |= 1), r <<= 1, this.readModule(0, t - 2, e, t) && (r |= 1), r <<= 1, this.readModule(0, t - 1, e, t) && (r |= 1), r <<= 1, this.readModule(1, t - 1, e, t) && (r |= 1), r <<= 1, this.readModule(2, t - 1, e, t) && (r |= 1), r <<= 1, this.readModule(3, t - 1, e, t) && (r |= 1), r;
        }
        /**
         * <p>Reads the 8 bits of the special corner condition 2.</p>
         *
         * <p>See ISO 16022:2006, Figure F.4</p>
         *
         * @param numRows Number of rows in the mapping matrix
         * @param numColumns Number of columns in the mapping matrix
         * @return byte from the Corner condition 2
         */
        readCorner2(e, t) {
          let r = 0;
          return this.readModule(e - 3, 0, e, t) && (r |= 1), r <<= 1, this.readModule(e - 2, 0, e, t) && (r |= 1), r <<= 1, this.readModule(e - 1, 0, e, t) && (r |= 1), r <<= 1, this.readModule(0, t - 4, e, t) && (r |= 1), r <<= 1, this.readModule(0, t - 3, e, t) && (r |= 1), r <<= 1, this.readModule(0, t - 2, e, t) && (r |= 1), r <<= 1, this.readModule(0, t - 1, e, t) && (r |= 1), r <<= 1, this.readModule(1, t - 1, e, t) && (r |= 1), r;
        }
        /**
         * <p>Reads the 8 bits of the special corner condition 3.</p>
         *
         * <p>See ISO 16022:2006, Figure F.5</p>
         *
         * @param numRows Number of rows in the mapping matrix
         * @param numColumns Number of columns in the mapping matrix
         * @return byte from the Corner condition 3
         */
        readCorner3(e, t) {
          let r = 0;
          return this.readModule(e - 1, 0, e, t) && (r |= 1), r <<= 1, this.readModule(e - 1, t - 1, e, t) && (r |= 1), r <<= 1, this.readModule(0, t - 3, e, t) && (r |= 1), r <<= 1, this.readModule(0, t - 2, e, t) && (r |= 1), r <<= 1, this.readModule(0, t - 1, e, t) && (r |= 1), r <<= 1, this.readModule(1, t - 3, e, t) && (r |= 1), r <<= 1, this.readModule(1, t - 2, e, t) && (r |= 1), r <<= 1, this.readModule(1, t - 1, e, t) && (r |= 1), r;
        }
        /**
         * <p>Reads the 8 bits of the special corner condition 4.</p>
         *
         * <p>See ISO 16022:2006, Figure F.6</p>
         *
         * @param numRows Number of rows in the mapping matrix
         * @param numColumns Number of columns in the mapping matrix
         * @return byte from the Corner condition 4
         */
        readCorner4(e, t) {
          let r = 0;
          return this.readModule(e - 3, 0, e, t) && (r |= 1), r <<= 1, this.readModule(e - 2, 0, e, t) && (r |= 1), r <<= 1, this.readModule(e - 1, 0, e, t) && (r |= 1), r <<= 1, this.readModule(0, t - 2, e, t) && (r |= 1), r <<= 1, this.readModule(0, t - 1, e, t) && (r |= 1), r <<= 1, this.readModule(1, t - 1, e, t) && (r |= 1), r <<= 1, this.readModule(2, t - 1, e, t) && (r |= 1), r <<= 1, this.readModule(3, t - 1, e, t) && (r |= 1), r;
        }
        /**
         * <p>Extracts the data region from a {@link BitMatrix} that contains
         * alignment patterns.</p>
         *
         * @param bitMatrix Original {@link BitMatrix} with alignment patterns
         * @return BitMatrix that has the alignment patterns removed
         */
        extractDataRegion(e) {
          const t = this.version.getSymbolSizeRows(), r = this.version.getSymbolSizeColumns();
          if (e.getHeight() !== t)
            throw new v("Dimension of bitMatrix must match the version size");
          const n = this.version.getDataRegionSizeRows(), i = this.version.getDataRegionSizeColumns(), s = t / n | 0, a = r / i | 0, o = s * n, l = a * i, u = new Oe(l, o);
          for (let g = 0; g < s; ++g) {
            const x = g * n;
            for (let y = 0; y < a; ++y) {
              const I = y * i;
              for (let b = 0; b < n; ++b) {
                const T = g * (n + 2) + 1 + b, R = x + b;
                for (let H = 0; H < i; ++H) {
                  const W = y * (i + 2) + 1 + H;
                  if (e.get(W, T)) {
                    const U = I + H;
                    u.set(U, R);
                  }
                }
              }
            }
          }
          return u;
        }
      }
      class On {
        constructor(e, t) {
          this.numDataCodewords = e, this.codewords = t;
        }
        /**
         * <p>When Data Matrix Codes use multiple data blocks, they actually interleave the bytes of each of them.
         * That is, the first byte of data block 1 to n is written, then the second bytes, and so on. This
         * method will separate the data into original blocks.</p>
         *
         * @param rawCodewords bytes as read directly from the Data Matrix Code
         * @param version version of the Data Matrix Code
         * @return DataBlocks containing original bytes, "de-interleaved" from representation in the
         *         Data Matrix Code
         */
        static getDataBlocks(e, t) {
          const r = t.getECBlocks();
          let n = 0;
          const i = r.getECBlocks();
          for (let b of i)
            n += b.getCount();
          const s = new Array(n);
          let a = 0;
          for (let b of i)
            for (let T = 0; T < b.getCount(); T++) {
              const R = b.getDataCodewords(), H = r.getECCodewords() + R;
              s[a++] = new On(R, new Uint8Array(H));
            }
          const l = s[0].codewords.length - r.getECCodewords(), u = l - 1;
          let g = 0;
          for (let b = 0; b < u; b++)
            for (let T = 0; T < a; T++)
              s[T].codewords[b] = e[g++];
          const x = t.getVersionNumber() === 24, y = x ? 8 : a;
          for (let b = 0; b < y; b++)
            s[b].codewords[l - 1] = e[g++];
          const I = s[0].codewords.length;
          for (let b = l; b < I; b++)
            for (let T = 0; T < a; T++) {
              const R = x ? (T + 8) % a : T, H = x && R > 7 ? b - 1 : b;
              s[R].codewords[H] = e[g++];
            }
          if (g !== e.length)
            throw new v();
          return s;
        }
        getNumDataCodewords() {
          return this.numDataCodewords;
        }
        getCodewords() {
          return this.codewords;
        }
      }
      class Rn {
        /**
         * @param bytes bytes from which this will read bits. Bits will be read from the first byte first.
         * Bits are read within a byte from most-significant to least-significant bit.
         */
        constructor(e) {
          this.bytes = e, this.byteOffset = 0, this.bitOffset = 0;
        }
        /**
         * @return index of next bit in current byte which would be read by the next call to {@link #readBits(int)}.
         */
        getBitOffset() {
          return this.bitOffset;
        }
        /**
         * @return index of next byte in input byte array which would be read by the next call to {@link #readBits(int)}.
         */
        getByteOffset() {
          return this.byteOffset;
        }
        /**
         * @param numBits number of bits to read
         * @return int representing the bits read. The bits will appear as the least-significant
         *         bits of the int
         * @throws IllegalArgumentException if numBits isn't in [1,32] or more than is available
         */
        readBits(e) {
          if (e < 1 || e > 32 || e > this.available())
            throw new v("" + e);
          let t = 0, r = this.bitOffset, n = this.byteOffset;
          const i = this.bytes;
          if (r > 0) {
            const s = 8 - r, a = e < s ? e : s, o = s - a, l = 255 >> 8 - a << o;
            t = (i[n] & l) >> o, e -= a, r += a, r === 8 && (r = 0, n++);
          }
          if (e > 0) {
            for (; e >= 8; )
              t = t << 8 | i[n] & 255, n++, e -= 8;
            if (e > 0) {
              const s = 8 - e, a = 255 >> s << s;
              t = t << e | (i[n] & a) >> s, r += e;
            }
          }
          return this.bitOffset = r, this.byteOffset = n, t;
        }
        /**
         * @return number of bits that can be read successfully
         */
        available() {
          return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
        }
      }
      var ut;
      (function(d) {
        d[d.PAD_ENCODE = 0] = "PAD_ENCODE", d[d.ASCII_ENCODE = 1] = "ASCII_ENCODE", d[d.C40_ENCODE = 2] = "C40_ENCODE", d[d.TEXT_ENCODE = 3] = "TEXT_ENCODE", d[d.ANSIX12_ENCODE = 4] = "ANSIX12_ENCODE", d[d.EDIFACT_ENCODE = 5] = "EDIFACT_ENCODE", d[d.BASE256_ENCODE = 6] = "BASE256_ENCODE";
      })(ut || (ut = {}));
      class lr {
        static decode(e) {
          const t = new Rn(e), r = new he(), n = new he(), i = new Array();
          let s = ut.ASCII_ENCODE;
          do
            if (s === ut.ASCII_ENCODE)
              s = this.decodeAsciiSegment(t, r, n);
            else {
              switch (s) {
                case ut.C40_ENCODE:
                  this.decodeC40Segment(t, r);
                  break;
                case ut.TEXT_ENCODE:
                  this.decodeTextSegment(t, r);
                  break;
                case ut.ANSIX12_ENCODE:
                  this.decodeAnsiX12Segment(t, r);
                  break;
                case ut.EDIFACT_ENCODE:
                  this.decodeEdifactSegment(t, r);
                  break;
                case ut.BASE256_ENCODE:
                  this.decodeBase256Segment(t, r, i);
                  break;
                default:
                  throw new L();
              }
              s = ut.ASCII_ENCODE;
            }
          while (s !== ut.PAD_ENCODE && t.available() > 0);
          return n.length() > 0 && r.append(n.toString()), new $t(e, r.toString(), i.length === 0 ? null : i, null);
        }
        /**
         * See ISO 16022:2006, 5.2.3 and Annex C, Table C.2
         */
        static decodeAsciiSegment(e, t, r) {
          let n = !1;
          do {
            let i = e.readBits(8);
            if (i === 0)
              throw new L();
            if (i <= 128)
              return n && (i += 128), t.append(String.fromCharCode(i - 1)), ut.ASCII_ENCODE;
            if (i === 129)
              return ut.PAD_ENCODE;
            if (i <= 229) {
              const s = i - 130;
              s < 10 && t.append("0"), t.append("" + s);
            } else
              switch (i) {
                case 230:
                  return ut.C40_ENCODE;
                case 231:
                  return ut.BASE256_ENCODE;
                case 232:
                  t.append("");
                  break;
                case 233:
                // Structured Append
                case 234:
                  break;
                case 235:
                  n = !0;
                  break;
                case 236:
                  t.append("[)>05"), r.insert(0, "");
                  break;
                case 237:
                  t.append("[)>06"), r.insert(0, "");
                  break;
                case 238:
                  return ut.ANSIX12_ENCODE;
                case 239:
                  return ut.TEXT_ENCODE;
                case 240:
                  return ut.EDIFACT_ENCODE;
                case 241:
                  break;
                default:
                  if (i !== 254 || e.available() !== 0)
                    throw new L();
                  break;
              }
          } while (e.available() > 0);
          return ut.ASCII_ENCODE;
        }
        /**
         * See ISO 16022:2006, 5.2.5 and Annex C, Table C.1
         */
        static decodeC40Segment(e, t) {
          let r = !1;
          const n = [];
          let i = 0;
          do {
            if (e.available() === 8)
              return;
            const s = e.readBits(8);
            if (s === 254)
              return;
            this.parseTwoBytes(s, e.readBits(8), n);
            for (let a = 0; a < 3; a++) {
              const o = n[a];
              switch (i) {
                case 0:
                  if (o < 3)
                    i = o + 1;
                  else if (o < this.C40_BASIC_SET_CHARS.length) {
                    const l = this.C40_BASIC_SET_CHARS[o];
                    r ? (t.append(String.fromCharCode(l.charCodeAt(0) + 128)), r = !1) : t.append(l);
                  } else
                    throw new L();
                  break;
                case 1:
                  r ? (t.append(String.fromCharCode(o + 128)), r = !1) : t.append(String.fromCharCode(o)), i = 0;
                  break;
                case 2:
                  if (o < this.C40_SHIFT2_SET_CHARS.length) {
                    const l = this.C40_SHIFT2_SET_CHARS[o];
                    r ? (t.append(String.fromCharCode(l.charCodeAt(0) + 128)), r = !1) : t.append(l);
                  } else
                    switch (o) {
                      case 27:
                        t.append("");
                        break;
                      case 30:
                        r = !0;
                        break;
                      default:
                        throw new L();
                    }
                  i = 0;
                  break;
                case 3:
                  r ? (t.append(String.fromCharCode(o + 224)), r = !1) : t.append(String.fromCharCode(o + 96)), i = 0;
                  break;
                default:
                  throw new L();
              }
            }
          } while (e.available() > 0);
        }
        /**
         * See ISO 16022:2006, 5.2.6 and Annex C, Table C.2
         */
        static decodeTextSegment(e, t) {
          let r = !1, n = [], i = 0;
          do {
            if (e.available() === 8)
              return;
            const s = e.readBits(8);
            if (s === 254)
              return;
            this.parseTwoBytes(s, e.readBits(8), n);
            for (let a = 0; a < 3; a++) {
              const o = n[a];
              switch (i) {
                case 0:
                  if (o < 3)
                    i = o + 1;
                  else if (o < this.TEXT_BASIC_SET_CHARS.length) {
                    const l = this.TEXT_BASIC_SET_CHARS[o];
                    r ? (t.append(String.fromCharCode(l.charCodeAt(0) + 128)), r = !1) : t.append(l);
                  } else
                    throw new L();
                  break;
                case 1:
                  r ? (t.append(String.fromCharCode(o + 128)), r = !1) : t.append(String.fromCharCode(o)), i = 0;
                  break;
                case 2:
                  if (o < this.TEXT_SHIFT2_SET_CHARS.length) {
                    const l = this.TEXT_SHIFT2_SET_CHARS[o];
                    r ? (t.append(String.fromCharCode(l.charCodeAt(0) + 128)), r = !1) : t.append(l);
                  } else
                    switch (o) {
                      case 27:
                        t.append("");
                        break;
                      case 30:
                        r = !0;
                        break;
                      default:
                        throw new L();
                    }
                  i = 0;
                  break;
                case 3:
                  if (o < this.TEXT_SHIFT3_SET_CHARS.length) {
                    const l = this.TEXT_SHIFT3_SET_CHARS[o];
                    r ? (t.append(String.fromCharCode(l.charCodeAt(0) + 128)), r = !1) : t.append(l), i = 0;
                  } else
                    throw new L();
                  break;
                default:
                  throw new L();
              }
            }
          } while (e.available() > 0);
        }
        /**
         * See ISO 16022:2006, 5.2.7
         */
        static decodeAnsiX12Segment(e, t) {
          const r = [];
          do {
            if (e.available() === 8)
              return;
            const n = e.readBits(8);
            if (n === 254)
              return;
            this.parseTwoBytes(n, e.readBits(8), r);
            for (let i = 0; i < 3; i++) {
              const s = r[i];
              switch (s) {
                case 0:
                  t.append("\r");
                  break;
                case 1:
                  t.append("*");
                  break;
                case 2:
                  t.append(">");
                  break;
                case 3:
                  t.append(" ");
                  break;
                default:
                  if (s < 14)
                    t.append(String.fromCharCode(s + 44));
                  else if (s < 40)
                    t.append(String.fromCharCode(s + 51));
                  else
                    throw new L();
                  break;
              }
            }
          } while (e.available() > 0);
        }
        static parseTwoBytes(e, t, r) {
          let n = (e << 8) + t - 1, i = Math.floor(n / 1600);
          r[0] = i, n -= i * 1600, i = Math.floor(n / 40), r[1] = i, r[2] = n - i * 40;
        }
        /**
         * See ISO 16022:2006, 5.2.8 and Annex C Table C.3
         */
        static decodeEdifactSegment(e, t) {
          do {
            if (e.available() <= 16)
              return;
            for (let r = 0; r < 4; r++) {
              let n = e.readBits(6);
              if (n === 31) {
                const i = 8 - e.getBitOffset();
                i !== 8 && e.readBits(i);
                return;
              }
              (n & 32) === 0 && (n |= 64), t.append(String.fromCharCode(n));
            }
          } while (e.available() > 0);
        }
        /**
         * See ISO 16022:2006, 5.2.9 and Annex B, B.2
         */
        static decodeBase256Segment(e, t, r) {
          let n = 1 + e.getByteOffset();
          const i = this.unrandomize255State(e.readBits(8), n++);
          let s;
          if (i === 0 ? s = e.available() / 8 | 0 : i < 250 ? s = i : s = 250 * (i - 249) + this.unrandomize255State(e.readBits(8), n++), s < 0)
            throw new L();
          const a = new Uint8Array(s);
          for (let o = 0; o < s; o++) {
            if (e.available() < 8)
              throw new L();
            a[o] = this.unrandomize255State(e.readBits(8), n++);
          }
          r.push(a);
          try {
            t.append(Ce.decode(a, $.ISO88591));
          } catch (o) {
            throw new bt("Platform does not support required encoding: " + o.message);
          }
        }
        /**
         * See ISO 16022:2006, Annex B, B.2
         */
        static unrandomize255State(e, t) {
          const r = 149 * t % 255 + 1, n = e - r;
          return n >= 0 ? n : n + 256;
        }
      }
      lr.C40_BASIC_SET_CHARS = [
        "*",
        "*",
        "*",
        " ",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ], lr.C40_SHIFT2_SET_CHARS = [
        "!",
        '"',
        "#",
        "$",
        "%",
        "&",
        "'",
        "(",
        ")",
        "*",
        "+",
        ",",
        "-",
        ".",
        "/",
        ":",
        ";",
        "<",
        "=",
        ">",
        "?",
        "@",
        "[",
        "\\",
        "]",
        "^",
        "_"
      ], lr.TEXT_BASIC_SET_CHARS = [
        "*",
        "*",
        "*",
        " ",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
      ], lr.TEXT_SHIFT2_SET_CHARS = lr.C40_SHIFT2_SET_CHARS, lr.TEXT_SHIFT3_SET_CHARS = [
        "`",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "{",
        "|",
        "}",
        "~",
        ""
      ];
      class Li {
        constructor() {
          this.rsDecoder = new Gt(_e.DATA_MATRIX_FIELD_256);
        }
        /**
         * <p>Decodes a Data Matrix Code represented as a {@link BitMatrix}. A 1 or "true" is taken
         * to mean a black module.</p>
         *
         * @param bits booleans representing white/black Data Matrix Code modules
         * @return text and bytes encoded within the Data Matrix Code
         * @throws FormatException if the Data Matrix Code cannot be decoded
         * @throws ChecksumException if error correction fails
         */
        decode(e) {
          const t = new Nn(e), r = t.getVersion(), n = t.readCodewords(), i = On.getDataBlocks(n, r);
          let s = 0;
          for (let l of i)
            s += l.getNumDataCodewords();
          const a = new Uint8Array(s), o = i.length;
          for (let l = 0; l < o; l++) {
            const u = i[l], g = u.getCodewords(), x = u.getNumDataCodewords();
            this.correctErrors(g, x);
            for (let y = 0; y < x; y++)
              a[y * o + l] = g[y];
          }
          return lr.decode(a);
        }
        /**
         * <p>Given data and error-correction codewords received, possibly corrupted by errors, attempts to
         * correct the errors in-place using Reed-Solomon error correction.</p>
         *
         * @param codewordBytes data and error correction codewords
         * @param numDataCodewords number of codewords that are data bytes
         * @throws ChecksumException if error correction fails
         */
        correctErrors(e, t) {
          const r = new Int32Array(e);
          try {
            this.rsDecoder.decode(r, e.length - t);
          } catch {
            throw new q();
          }
          for (let n = 0; n < t; n++)
            e[n] = r[n];
        }
      }
      class at {
        constructor(e) {
          this.image = e, this.rectangleDetector = new Ht(this.image);
        }
        /**
         * <p>Detects a Data Matrix Code in an image.</p>
         *
         * @return {@link DetectorResult} encapsulating results of detecting a Data Matrix Code
         * @throws NotFoundException if no Data Matrix Code can be found
         */
        detect() {
          const e = this.rectangleDetector.detect();
          let t = this.detectSolid1(e);
          if (t = this.detectSolid2(t), t[3] = this.correctTopRight(t), !t[3])
            throw new D();
          t = this.shiftToModuleCenter(t);
          const r = t[0], n = t[1], i = t[2], s = t[3];
          let a = this.transitionsBetween(r, s) + 1, o = this.transitionsBetween(i, s) + 1;
          (a & 1) === 1 && (a += 1), (o & 1) === 1 && (o += 1), 4 * a < 7 * o && 4 * o < 7 * a && (a = o = Math.max(a, o));
          let l = at.sampleGrid(this.image, r, n, i, s, a, o);
          return new or(l, [r, n, i, s]);
        }
        static shiftPoint(e, t, r) {
          let n = (t.getX() - e.getX()) / (r + 1), i = (t.getY() - e.getY()) / (r + 1);
          return new Q(e.getX() + n, e.getY() + i);
        }
        static moveAway(e, t, r) {
          let n = e.getX(), i = e.getY();
          return n < t ? n -= 1 : n += 1, i < r ? i -= 1 : i += 1, new Q(n, i);
        }
        /**
         * Detect a solid side which has minimum transition.
         */
        detectSolid1(e) {
          let t = e[0], r = e[1], n = e[3], i = e[2], s = this.transitionsBetween(t, r), a = this.transitionsBetween(r, n), o = this.transitionsBetween(n, i), l = this.transitionsBetween(i, t), u = s, g = [i, t, r, n];
          return u > a && (u = a, g[0] = t, g[1] = r, g[2] = n, g[3] = i), u > o && (u = o, g[0] = r, g[1] = n, g[2] = i, g[3] = t), u > l && (g[0] = n, g[1] = i, g[2] = t, g[3] = r), g;
        }
        /**
         * Detect a second solid side next to first solid side.
         */
        detectSolid2(e) {
          let t = e[0], r = e[1], n = e[2], i = e[3], s = this.transitionsBetween(t, i), a = at.shiftPoint(r, n, (s + 1) * 4), o = at.shiftPoint(n, r, (s + 1) * 4), l = this.transitionsBetween(a, t), u = this.transitionsBetween(o, i);
          return l < u ? (e[0] = t, e[1] = r, e[2] = n, e[3] = i) : (e[0] = r, e[1] = n, e[2] = i, e[3] = t), e;
        }
        /**
         * Calculates the corner position of the white top right module.
         */
        correctTopRight(e) {
          let t = e[0], r = e[1], n = e[2], i = e[3], s = this.transitionsBetween(t, i), a = this.transitionsBetween(r, i), o = at.shiftPoint(t, r, (a + 1) * 4), l = at.shiftPoint(n, r, (s + 1) * 4);
          s = this.transitionsBetween(o, i), a = this.transitionsBetween(l, i);
          let u = new Q(i.getX() + (n.getX() - r.getX()) / (s + 1), i.getY() + (n.getY() - r.getY()) / (s + 1)), g = new Q(i.getX() + (t.getX() - r.getX()) / (a + 1), i.getY() + (t.getY() - r.getY()) / (a + 1));
          if (!this.isValid(u))
            return this.isValid(g) ? g : null;
          if (!this.isValid(g))
            return u;
          let x = this.transitionsBetween(o, u) + this.transitionsBetween(l, u), y = this.transitionsBetween(o, g) + this.transitionsBetween(l, g);
          return x > y ? u : g;
        }
        /**
         * Shift the edge points to the module center.
         */
        shiftToModuleCenter(e) {
          let t = e[0], r = e[1], n = e[2], i = e[3], s = this.transitionsBetween(t, i) + 1, a = this.transitionsBetween(n, i) + 1, o = at.shiftPoint(t, r, a * 4), l = at.shiftPoint(n, r, s * 4);
          s = this.transitionsBetween(o, i) + 1, a = this.transitionsBetween(l, i) + 1, (s & 1) === 1 && (s += 1), (a & 1) === 1 && (a += 1);
          let u = (t.getX() + r.getX() + n.getX() + i.getX()) / 4, g = (t.getY() + r.getY() + n.getY() + i.getY()) / 4;
          t = at.moveAway(t, u, g), r = at.moveAway(r, u, g), n = at.moveAway(n, u, g), i = at.moveAway(i, u, g);
          let x, y;
          return o = at.shiftPoint(t, r, a * 4), o = at.shiftPoint(o, i, s * 4), x = at.shiftPoint(r, t, a * 4), x = at.shiftPoint(x, n, s * 4), l = at.shiftPoint(n, i, a * 4), l = at.shiftPoint(l, r, s * 4), y = at.shiftPoint(i, n, a * 4), y = at.shiftPoint(y, t, s * 4), [o, x, l, y];
        }
        isValid(e) {
          return e.getX() >= 0 && e.getX() < this.image.getWidth() && e.getY() > 0 && e.getY() < this.image.getHeight();
        }
        static sampleGrid(e, t, r, n, i, s, a) {
          return Yt.getInstance().sampleGrid(e, s, a, 0.5, 0.5, s - 0.5, 0.5, s - 0.5, a - 0.5, 0.5, a - 0.5, t.getX(), t.getY(), i.getX(), i.getY(), n.getX(), n.getY(), r.getX(), r.getY());
        }
        /**
         * Counts the number of black/white transitions between two points, using something like Bresenham's algorithm.
         */
        transitionsBetween(e, t) {
          let r = Math.trunc(e.getX()), n = Math.trunc(e.getY()), i = Math.trunc(t.getX()), s = Math.trunc(t.getY()), a = Math.abs(s - n) > Math.abs(i - r);
          if (a) {
            let b = r;
            r = n, n = b, b = i, i = s, s = b;
          }
          let o = Math.abs(i - r), l = Math.abs(s - n), u = -o / 2, g = n < s ? 1 : -1, x = r < i ? 1 : -1, y = 0, I = this.image.get(a ? n : r, a ? r : n);
          for (let b = r, T = n; b !== i; b += x) {
            let R = this.image.get(a ? T : b, a ? b : T);
            if (R !== I && (y++, I = R), u += l, u > 0) {
              if (T === s)
                break;
              T += g, u -= o;
            }
          }
          return y;
        }
      }
      class cr {
        constructor() {
          this.decoder = new Li();
        }
        /**
         * Locates and decodes a Data Matrix code in an image.
         *
         * @return a String representing the content encoded by the Data Matrix code
         * @throws NotFoundException if a Data Matrix code cannot be found
         * @throws FormatException if a Data Matrix code cannot be decoded
         * @throws ChecksumException if error correction fails
         */
        // @Override
        // public Result decode(BinaryBitmap image) throws NotFoundException, ChecksumException, FormatException {
        //   return decode(image, null);
        // }
        // @Override
        decode(e, t = null) {
          let r, n;
          if (t != null && t.has(ce.PURE_BARCODE)) {
            const l = cr.extractPureBits(e.getBlackMatrix());
            r = this.decoder.decode(l), n = cr.NO_POINTS;
          } else {
            const l = new at(e.getBlackMatrix()).detect();
            r = this.decoder.decode(l.getBits()), n = l.getPoints();
          }
          const i = r.getRawBytes(), s = new Ke(r.getText(), i, 8 * i.length, n, re.DATA_MATRIX, j.currentTimeMillis()), a = r.getByteSegments();
          a != null && s.putMetadata(qe.BYTE_SEGMENTS, a);
          const o = r.getECLevel();
          return o != null && s.putMetadata(qe.ERROR_CORRECTION_LEVEL, o), s;
        }
        // @Override
        reset() {
        }
        /**
         * This method detects a code in a "pure" image -- that is, pure monochrome image
         * which contains only an unrotated, unskewed, image of a code, with some white border
         * around it. This is a specialized method that works exceptionally fast in this special
         * case.
         *
         * @see com.google.zxing.qrcode.QRCodeReader#extractPureBits(BitMatrix)
         */
        static extractPureBits(e) {
          const t = e.getTopLeftOnBit(), r = e.getBottomRightOnBit();
          if (t == null || r == null)
            throw new D();
          const n = this.moduleSize(t, e);
          let i = t[1];
          const s = r[1];
          let a = t[0];
          const l = (r[0] - a + 1) / n, u = (s - i + 1) / n;
          if (l <= 0 || u <= 0)
            throw new D();
          const g = n / 2;
          i += g, a += g;
          const x = new Oe(l, u);
          for (let y = 0; y < u; y++) {
            const I = i + y * n;
            for (let b = 0; b < l; b++)
              e.get(a + b * n, I) && x.set(b, y);
          }
          return x;
        }
        static moduleSize(e, t) {
          const r = t.getWidth();
          let n = e[0];
          const i = e[1];
          for (; n < r && t.get(n, i); )
            n++;
          if (n === r)
            throw new D();
          const s = n - e[0];
          if (s === 0)
            throw new D();
          return s;
        }
      }
      cr.NO_POINTS = [];
      class Pi extends ot {
        /**
         * Creates an instance of BrowserQRCodeReader.
         * @param {number} [timeBetweenScansMillis=500] the time delay between subsequent decode tries
         */
        constructor(e = 500) {
          super(new cr(), e);
        }
      }
      var Or;
      (function(d) {
        d[d.L = 0] = "L", d[d.M = 1] = "M", d[d.Q = 2] = "Q", d[d.H = 3] = "H";
      })(Or || (Or = {}));
      class Xe {
        constructor(e, t, r) {
          this.value = e, this.stringValue = t, this.bits = r, Xe.FOR_BITS.set(r, this), Xe.FOR_VALUE.set(e, this);
        }
        getValue() {
          return this.value;
        }
        getBits() {
          return this.bits;
        }
        static fromString(e) {
          switch (e) {
            case "L":
              return Xe.L;
            case "M":
              return Xe.M;
            case "Q":
              return Xe.Q;
            case "H":
              return Xe.H;
            default:
              throw new M(e + "not available");
          }
        }
        toString() {
          return this.stringValue;
        }
        equals(e) {
          if (!(e instanceof Xe))
            return !1;
          const t = e;
          return this.value === t.value;
        }
        /**
         * @param bits int containing the two bits encoding a QR Code's error correction level
         * @return ErrorCorrectionLevel representing the encoded error correction level
         */
        static forBits(e) {
          if (e < 0 || e >= Xe.FOR_BITS.size)
            throw new v();
          return Xe.FOR_BITS.get(e);
        }
      }
      Xe.FOR_BITS = /* @__PURE__ */ new Map(), Xe.FOR_VALUE = /* @__PURE__ */ new Map(), Xe.L = new Xe(Or.L, "L", 1), Xe.M = new Xe(Or.M, "M", 0), Xe.Q = new Xe(Or.Q, "Q", 3), Xe.H = new Xe(Or.H, "H", 2);
      class yt {
        constructor(e) {
          this.errorCorrectionLevel = Xe.forBits(e >> 3 & 3), this.dataMask = /*(byte) */
          e & 7;
        }
        static numBitsDiffering(e, t) {
          return V.bitCount(e ^ t);
        }
        /**
         * @param maskedFormatInfo1 format info indicator, with mask still applied
         * @param maskedFormatInfo2 second copy of same info; both are checked at the same time
         *  to establish best match
         * @return information about the format it specifies, or {@code null}
         *  if doesn't seem to match any known pattern
         */
        static decodeFormatInformation(e, t) {
          const r = yt.doDecodeFormatInformation(e, t);
          return r !== null ? r : yt.doDecodeFormatInformation(e ^ yt.FORMAT_INFO_MASK_QR, t ^ yt.FORMAT_INFO_MASK_QR);
        }
        static doDecodeFormatInformation(e, t) {
          let r = Number.MAX_SAFE_INTEGER, n = 0;
          for (const i of yt.FORMAT_INFO_DECODE_LOOKUP) {
            const s = i[0];
            if (s === e || s === t)
              return new yt(i[1]);
            let a = yt.numBitsDiffering(e, s);
            a < r && (n = i[1], r = a), e !== t && (a = yt.numBitsDiffering(t, s), a < r && (n = i[1], r = a));
          }
          return r <= 3 ? new yt(n) : null;
        }
        getErrorCorrectionLevel() {
          return this.errorCorrectionLevel;
        }
        getDataMask() {
          return this.dataMask;
        }
        /*@Override*/
        hashCode() {
          return this.errorCorrectionLevel.getBits() << 3 | this.dataMask;
        }
        /*@Override*/
        equals(e) {
          if (!(e instanceof yt))
            return !1;
          const t = e;
          return this.errorCorrectionLevel === t.errorCorrectionLevel && this.dataMask === t.dataMask;
        }
      }
      yt.FORMAT_INFO_MASK_QR = 21522, yt.FORMAT_INFO_DECODE_LOOKUP = [
        Int32Array.from([21522, 0]),
        Int32Array.from([20773, 1]),
        Int32Array.from([24188, 2]),
        Int32Array.from([23371, 3]),
        Int32Array.from([17913, 4]),
        Int32Array.from([16590, 5]),
        Int32Array.from([20375, 6]),
        Int32Array.from([19104, 7]),
        Int32Array.from([30660, 8]),
        Int32Array.from([29427, 9]),
        Int32Array.from([32170, 10]),
        Int32Array.from([30877, 11]),
        Int32Array.from([26159, 12]),
        Int32Array.from([25368, 13]),
        Int32Array.from([27713, 14]),
        Int32Array.from([26998, 15]),
        Int32Array.from([5769, 16]),
        Int32Array.from([5054, 17]),
        Int32Array.from([7399, 18]),
        Int32Array.from([6608, 19]),
        Int32Array.from([1890, 20]),
        Int32Array.from([597, 21]),
        Int32Array.from([3340, 22]),
        Int32Array.from([2107, 23]),
        Int32Array.from([13663, 24]),
        Int32Array.from([12392, 25]),
        Int32Array.from([16177, 26]),
        Int32Array.from([14854, 27]),
        Int32Array.from([9396, 28]),
        Int32Array.from([8579, 29]),
        Int32Array.from([11994, 30]),
        Int32Array.from([11245, 31])
      ];
      class S {
        constructor(e, ...t) {
          this.ecCodewordsPerBlock = e, this.ecBlocks = t;
        }
        getECCodewordsPerBlock() {
          return this.ecCodewordsPerBlock;
        }
        getNumBlocks() {
          let e = 0;
          const t = this.ecBlocks;
          for (const r of t)
            e += r.getCount();
          return e;
        }
        getTotalECCodewords() {
          return this.ecCodewordsPerBlock * this.getNumBlocks();
        }
        getECBlocks() {
          return this.ecBlocks;
        }
      }
      class A {
        constructor(e, t) {
          this.count = e, this.dataCodewords = t;
        }
        getCount() {
          return this.count;
        }
        getDataCodewords() {
          return this.dataCodewords;
        }
      }
      class te {
        constructor(e, t, ...r) {
          this.versionNumber = e, this.alignmentPatternCenters = t, this.ecBlocks = r;
          let n = 0;
          const i = r[0].getECCodewordsPerBlock(), s = r[0].getECBlocks();
          for (const a of s)
            n += a.getCount() * (a.getDataCodewords() + i);
          this.totalCodewords = n;
        }
        getVersionNumber() {
          return this.versionNumber;
        }
        getAlignmentPatternCenters() {
          return this.alignmentPatternCenters;
        }
        getTotalCodewords() {
          return this.totalCodewords;
        }
        getDimensionForVersion() {
          return 17 + 4 * this.versionNumber;
        }
        getECBlocksForLevel(e) {
          return this.ecBlocks[e.getValue()];
        }
        /**
         * <p>Deduces version information purely from QR Code dimensions.</p>
         *
         * @param dimension dimension in modules
         * @return Version for a QR Code of that dimension
         * @throws FormatException if dimension is not 1 mod 4
         */
        static getProvisionalVersionForDimension(e) {
          if (e % 4 !== 1)
            throw new L();
          try {
            return this.getVersionForNumber((e - 17) / 4);
          } catch {
            throw new L();
          }
        }
        static getVersionForNumber(e) {
          if (e < 1 || e > 40)
            throw new v();
          return te.VERSIONS[e - 1];
        }
        static decodeVersionInformation(e) {
          let t = Number.MAX_SAFE_INTEGER, r = 0;
          for (let n = 0; n < te.VERSION_DECODE_INFO.length; n++) {
            const i = te.VERSION_DECODE_INFO[n];
            if (i === e)
              return te.getVersionForNumber(n + 7);
            const s = yt.numBitsDiffering(e, i);
            s < t && (r = n + 7, t = s);
          }
          return t <= 3 ? te.getVersionForNumber(r) : null;
        }
        /**
         * See ISO 18004:2006 Annex E
         */
        buildFunctionPattern() {
          const e = this.getDimensionForVersion(), t = new Oe(e);
          t.setRegion(0, 0, 9, 9), t.setRegion(e - 8, 0, 8, 9), t.setRegion(0, e - 8, 9, 8);
          const r = this.alignmentPatternCenters.length;
          for (let n = 0; n < r; n++) {
            const i = this.alignmentPatternCenters[n] - 2;
            for (let s = 0; s < r; s++)
              n === 0 && (s === 0 || s === r - 1) || n === r - 1 && s === 0 || t.setRegion(this.alignmentPatternCenters[s] - 2, i, 5, 5);
          }
          return t.setRegion(6, 9, 1, e - 17), t.setRegion(9, 6, e - 17, 1), this.versionNumber > 6 && (t.setRegion(e - 11, 0, 3, 6), t.setRegion(0, e - 11, 6, 3)), t;
        }
        /*@Override*/
        toString() {
          return "" + this.versionNumber;
        }
      }
      te.VERSION_DECODE_INFO = Int32Array.from([
        31892,
        34236,
        39577,
        42195,
        48118,
        51042,
        55367,
        58893,
        63784,
        68472,
        70749,
        76311,
        79154,
        84390,
        87683,
        92361,
        96236,
        102084,
        102881,
        110507,
        110734,
        117786,
        119615,
        126325,
        127568,
        133589,
        136944,
        141498,
        145311,
        150283,
        152622,
        158308,
        161089,
        167017
      ]), te.VERSIONS = [
        new te(1, new Int32Array(0), new S(7, new A(1, 19)), new S(10, new A(1, 16)), new S(13, new A(1, 13)), new S(17, new A(1, 9))),
        new te(2, Int32Array.from([6, 18]), new S(10, new A(1, 34)), new S(16, new A(1, 28)), new S(22, new A(1, 22)), new S(28, new A(1, 16))),
        new te(3, Int32Array.from([6, 22]), new S(15, new A(1, 55)), new S(26, new A(1, 44)), new S(18, new A(2, 17)), new S(22, new A(2, 13))),
        new te(4, Int32Array.from([6, 26]), new S(20, new A(1, 80)), new S(18, new A(2, 32)), new S(26, new A(2, 24)), new S(16, new A(4, 9))),
        new te(5, Int32Array.from([6, 30]), new S(26, new A(1, 108)), new S(24, new A(2, 43)), new S(18, new A(2, 15), new A(2, 16)), new S(22, new A(2, 11), new A(2, 12))),
        new te(6, Int32Array.from([6, 34]), new S(18, new A(2, 68)), new S(16, new A(4, 27)), new S(24, new A(4, 19)), new S(28, new A(4, 15))),
        new te(7, Int32Array.from([6, 22, 38]), new S(20, new A(2, 78)), new S(18, new A(4, 31)), new S(18, new A(2, 14), new A(4, 15)), new S(26, new A(4, 13), new A(1, 14))),
        new te(8, Int32Array.from([6, 24, 42]), new S(24, new A(2, 97)), new S(22, new A(2, 38), new A(2, 39)), new S(22, new A(4, 18), new A(2, 19)), new S(26, new A(4, 14), new A(2, 15))),
        new te(9, Int32Array.from([6, 26, 46]), new S(30, new A(2, 116)), new S(22, new A(3, 36), new A(2, 37)), new S(20, new A(4, 16), new A(4, 17)), new S(24, new A(4, 12), new A(4, 13))),
        new te(10, Int32Array.from([6, 28, 50]), new S(18, new A(2, 68), new A(2, 69)), new S(26, new A(4, 43), new A(1, 44)), new S(24, new A(6, 19), new A(2, 20)), new S(28, new A(6, 15), new A(2, 16))),
        new te(11, Int32Array.from([6, 30, 54]), new S(20, new A(4, 81)), new S(30, new A(1, 50), new A(4, 51)), new S(28, new A(4, 22), new A(4, 23)), new S(24, new A(3, 12), new A(8, 13))),
        new te(12, Int32Array.from([6, 32, 58]), new S(24, new A(2, 92), new A(2, 93)), new S(22, new A(6, 36), new A(2, 37)), new S(26, new A(4, 20), new A(6, 21)), new S(28, new A(7, 14), new A(4, 15))),
        new te(13, Int32Array.from([6, 34, 62]), new S(26, new A(4, 107)), new S(22, new A(8, 37), new A(1, 38)), new S(24, new A(8, 20), new A(4, 21)), new S(22, new A(12, 11), new A(4, 12))),
        new te(14, Int32Array.from([6, 26, 46, 66]), new S(30, new A(3, 115), new A(1, 116)), new S(24, new A(4, 40), new A(5, 41)), new S(20, new A(11, 16), new A(5, 17)), new S(24, new A(11, 12), new A(5, 13))),
        new te(15, Int32Array.from([6, 26, 48, 70]), new S(22, new A(5, 87), new A(1, 88)), new S(24, new A(5, 41), new A(5, 42)), new S(30, new A(5, 24), new A(7, 25)), new S(24, new A(11, 12), new A(7, 13))),
        new te(16, Int32Array.from([6, 26, 50, 74]), new S(24, new A(5, 98), new A(1, 99)), new S(28, new A(7, 45), new A(3, 46)), new S(24, new A(15, 19), new A(2, 20)), new S(30, new A(3, 15), new A(13, 16))),
        new te(17, Int32Array.from([6, 30, 54, 78]), new S(28, new A(1, 107), new A(5, 108)), new S(28, new A(10, 46), new A(1, 47)), new S(28, new A(1, 22), new A(15, 23)), new S(28, new A(2, 14), new A(17, 15))),
        new te(18, Int32Array.from([6, 30, 56, 82]), new S(30, new A(5, 120), new A(1, 121)), new S(26, new A(9, 43), new A(4, 44)), new S(28, new A(17, 22), new A(1, 23)), new S(28, new A(2, 14), new A(19, 15))),
        new te(19, Int32Array.from([6, 30, 58, 86]), new S(28, new A(3, 113), new A(4, 114)), new S(26, new A(3, 44), new A(11, 45)), new S(26, new A(17, 21), new A(4, 22)), new S(26, new A(9, 13), new A(16, 14))),
        new te(20, Int32Array.from([6, 34, 62, 90]), new S(28, new A(3, 107), new A(5, 108)), new S(26, new A(3, 41), new A(13, 42)), new S(30, new A(15, 24), new A(5, 25)), new S(28, new A(15, 15), new A(10, 16))),
        new te(21, Int32Array.from([6, 28, 50, 72, 94]), new S(28, new A(4, 116), new A(4, 117)), new S(26, new A(17, 42)), new S(28, new A(17, 22), new A(6, 23)), new S(30, new A(19, 16), new A(6, 17))),
        new te(22, Int32Array.from([6, 26, 50, 74, 98]), new S(28, new A(2, 111), new A(7, 112)), new S(28, new A(17, 46)), new S(30, new A(7, 24), new A(16, 25)), new S(24, new A(34, 13))),
        new te(23, Int32Array.from([6, 30, 54, 78, 102]), new S(30, new A(4, 121), new A(5, 122)), new S(28, new A(4, 47), new A(14, 48)), new S(30, new A(11, 24), new A(14, 25)), new S(30, new A(16, 15), new A(14, 16))),
        new te(24, Int32Array.from([6, 28, 54, 80, 106]), new S(30, new A(6, 117), new A(4, 118)), new S(28, new A(6, 45), new A(14, 46)), new S(30, new A(11, 24), new A(16, 25)), new S(30, new A(30, 16), new A(2, 17))),
        new te(25, Int32Array.from([6, 32, 58, 84, 110]), new S(26, new A(8, 106), new A(4, 107)), new S(28, new A(8, 47), new A(13, 48)), new S(30, new A(7, 24), new A(22, 25)), new S(30, new A(22, 15), new A(13, 16))),
        new te(26, Int32Array.from([6, 30, 58, 86, 114]), new S(28, new A(10, 114), new A(2, 115)), new S(28, new A(19, 46), new A(4, 47)), new S(28, new A(28, 22), new A(6, 23)), new S(30, new A(33, 16), new A(4, 17))),
        new te(27, Int32Array.from([6, 34, 62, 90, 118]), new S(30, new A(8, 122), new A(4, 123)), new S(28, new A(22, 45), new A(3, 46)), new S(30, new A(8, 23), new A(26, 24)), new S(30, new A(12, 15), new A(28, 16))),
        new te(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new S(30, new A(3, 117), new A(10, 118)), new S(28, new A(3, 45), new A(23, 46)), new S(30, new A(4, 24), new A(31, 25)), new S(30, new A(11, 15), new A(31, 16))),
        new te(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new S(30, new A(7, 116), new A(7, 117)), new S(28, new A(21, 45), new A(7, 46)), new S(30, new A(1, 23), new A(37, 24)), new S(30, new A(19, 15), new A(26, 16))),
        new te(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new S(30, new A(5, 115), new A(10, 116)), new S(28, new A(19, 47), new A(10, 48)), new S(30, new A(15, 24), new A(25, 25)), new S(30, new A(23, 15), new A(25, 16))),
        new te(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new S(30, new A(13, 115), new A(3, 116)), new S(28, new A(2, 46), new A(29, 47)), new S(30, new A(42, 24), new A(1, 25)), new S(30, new A(23, 15), new A(28, 16))),
        new te(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new S(30, new A(17, 115)), new S(28, new A(10, 46), new A(23, 47)), new S(30, new A(10, 24), new A(35, 25)), new S(30, new A(19, 15), new A(35, 16))),
        new te(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new S(30, new A(17, 115), new A(1, 116)), new S(28, new A(14, 46), new A(21, 47)), new S(30, new A(29, 24), new A(19, 25)), new S(30, new A(11, 15), new A(46, 16))),
        new te(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new S(30, new A(13, 115), new A(6, 116)), new S(28, new A(14, 46), new A(23, 47)), new S(30, new A(44, 24), new A(7, 25)), new S(30, new A(59, 16), new A(1, 17))),
        new te(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new S(30, new A(12, 121), new A(7, 122)), new S(28, new A(12, 47), new A(26, 48)), new S(30, new A(39, 24), new A(14, 25)), new S(30, new A(22, 15), new A(41, 16))),
        new te(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new S(30, new A(6, 121), new A(14, 122)), new S(28, new A(6, 47), new A(34, 48)), new S(30, new A(46, 24), new A(10, 25)), new S(30, new A(2, 15), new A(64, 16))),
        new te(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new S(30, new A(17, 122), new A(4, 123)), new S(28, new A(29, 46), new A(14, 47)), new S(30, new A(49, 24), new A(10, 25)), new S(30, new A(24, 15), new A(46, 16))),
        new te(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new S(30, new A(4, 122), new A(18, 123)), new S(28, new A(13, 46), new A(32, 47)), new S(30, new A(48, 24), new A(14, 25)), new S(30, new A(42, 15), new A(32, 16))),
        new te(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new S(30, new A(20, 117), new A(4, 118)), new S(28, new A(40, 47), new A(7, 48)), new S(30, new A(43, 24), new A(22, 25)), new S(30, new A(10, 15), new A(67, 16))),
        new te(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new S(30, new A(19, 118), new A(6, 119)), new S(28, new A(18, 47), new A(31, 48)), new S(30, new A(34, 24), new A(34, 25)), new S(30, new A(20, 15), new A(61, 16)))
      ];
      var gt;
      (function(d) {
        d[d.DATA_MASK_000 = 0] = "DATA_MASK_000", d[d.DATA_MASK_001 = 1] = "DATA_MASK_001", d[d.DATA_MASK_010 = 2] = "DATA_MASK_010", d[d.DATA_MASK_011 = 3] = "DATA_MASK_011", d[d.DATA_MASK_100 = 4] = "DATA_MASK_100", d[d.DATA_MASK_101 = 5] = "DATA_MASK_101", d[d.DATA_MASK_110 = 6] = "DATA_MASK_110", d[d.DATA_MASK_111 = 7] = "DATA_MASK_111";
      })(gt || (gt = {}));
      class kt {
        // See ISO 18004:2006 6.8.1
        constructor(e, t) {
          this.value = e, this.isMasked = t;
        }
        // End of enum constants.
        /**
         * <p>Implementations of this method reverse the data masking process applied to a QR Code and
         * make its bits ready to read.</p>
         *
         * @param bits representation of QR Code bits
         * @param dimension dimension of QR Code, represented by bits, being unmasked
         */
        unmaskBitMatrix(e, t) {
          for (let r = 0; r < t; r++)
            for (let n = 0; n < t; n++)
              this.isMasked(r, n) && e.flip(n, r);
        }
      }
      kt.values = /* @__PURE__ */ new Map([
        /**
         * 000: mask bits for which (x + y) mod 2 == 0
         */
        [gt.DATA_MASK_000, new kt(gt.DATA_MASK_000, (d, e) => (d + e & 1) === 0)],
        /**
         * 001: mask bits for which x mod 2 == 0
         */
        [gt.DATA_MASK_001, new kt(gt.DATA_MASK_001, (d, e) => (d & 1) === 0)],
        /**
         * 010: mask bits for which y mod 3 == 0
         */
        [gt.DATA_MASK_010, new kt(gt.DATA_MASK_010, (d, e) => e % 3 === 0)],
        /**
         * 011: mask bits for which (x + y) mod 3 == 0
         */
        [gt.DATA_MASK_011, new kt(gt.DATA_MASK_011, (d, e) => (d + e) % 3 === 0)],
        /**
         * 100: mask bits for which (x/2 + y/3) mod 2 == 0
         */
        [gt.DATA_MASK_100, new kt(gt.DATA_MASK_100, (d, e) => (Math.floor(d / 2) + Math.floor(e / 3) & 1) === 0)],
        /**
         * 101: mask bits for which xy mod 2 + xy mod 3 == 0
         * equivalently, such that xy mod 6 == 0
         */
        [gt.DATA_MASK_101, new kt(gt.DATA_MASK_101, (d, e) => d * e % 6 === 0)],
        /**
         * 110: mask bits for which (xy mod 2 + xy mod 3) mod 2 == 0
         * equivalently, such that xy mod 6 < 3
         */
        [gt.DATA_MASK_110, new kt(gt.DATA_MASK_110, (d, e) => d * e % 6 < 3)],
        /**
         * 111: mask bits for which ((x+y)mod 2 + xy mod 3) mod 2 == 0
         * equivalently, such that (x + y + xy mod 3) mod 2 == 0
         */
        [gt.DATA_MASK_111, new kt(gt.DATA_MASK_111, (d, e) => (d + e + d * e % 3 & 1) === 0)]
      ]);
      class Fi {
        /**
         * @param bitMatrix {@link BitMatrix} to parse
         * @throws FormatException if dimension is not >= 21 and 1 mod 4
         */
        constructor(e) {
          const t = e.getHeight();
          if (t < 21 || (t & 3) !== 1)
            throw new L();
          this.bitMatrix = e;
        }
        /**
         * <p>Reads format information from one of its two locations within the QR Code.</p>
         *
         * @return {@link FormatInformation} encapsulating the QR Code's format info
         * @throws FormatException if both format information locations cannot be parsed as
         * the valid encoding of format information
         */
        readFormatInformation() {
          if (this.parsedFormatInfo !== null && this.parsedFormatInfo !== void 0)
            return this.parsedFormatInfo;
          let e = 0;
          for (let i = 0; i < 6; i++)
            e = this.copyBit(i, 8, e);
          e = this.copyBit(7, 8, e), e = this.copyBit(8, 8, e), e = this.copyBit(8, 7, e);
          for (let i = 5; i >= 0; i--)
            e = this.copyBit(8, i, e);
          const t = this.bitMatrix.getHeight();
          let r = 0;
          const n = t - 7;
          for (let i = t - 1; i >= n; i--)
            r = this.copyBit(8, i, r);
          for (let i = t - 8; i < t; i++)
            r = this.copyBit(i, 8, r);
          if (this.parsedFormatInfo = yt.decodeFormatInformation(e, r), this.parsedFormatInfo !== null)
            return this.parsedFormatInfo;
          throw new L();
        }
        /**
         * <p>Reads version information from one of its two locations within the QR Code.</p>
         *
         * @return {@link Version} encapsulating the QR Code's version
         * @throws FormatException if both version information locations cannot be parsed as
         * the valid encoding of version information
         */
        readVersion() {
          if (this.parsedVersion !== null && this.parsedVersion !== void 0)
            return this.parsedVersion;
          const e = this.bitMatrix.getHeight(), t = Math.floor((e - 17) / 4);
          if (t <= 6)
            return te.getVersionForNumber(t);
          let r = 0;
          const n = e - 11;
          for (let s = 5; s >= 0; s--)
            for (let a = e - 9; a >= n; a--)
              r = this.copyBit(a, s, r);
          let i = te.decodeVersionInformation(r);
          if (i !== null && i.getDimensionForVersion() === e)
            return this.parsedVersion = i, i;
          r = 0;
          for (let s = 5; s >= 0; s--)
            for (let a = e - 9; a >= n; a--)
              r = this.copyBit(s, a, r);
          if (i = te.decodeVersionInformation(r), i !== null && i.getDimensionForVersion() === e)
            return this.parsedVersion = i, i;
          throw new L();
        }
        copyBit(e, t, r) {
          return (this.isMirror ? this.bitMatrix.get(t, e) : this.bitMatrix.get(e, t)) ? r << 1 | 1 : r << 1;
        }
        /**
         * <p>Reads the bits in the {@link BitMatrix} representing the finder pattern in the
         * correct order in order to reconstruct the codewords bytes contained within the
         * QR Code.</p>
         *
         * @return bytes encoded within the QR Code
         * @throws FormatException if the exact number of bytes expected is not read
         */
        readCodewords() {
          const e = this.readFormatInformation(), t = this.readVersion(), r = kt.values.get(e.getDataMask()), n = this.bitMatrix.getHeight();
          r.unmaskBitMatrix(this.bitMatrix, n);
          const i = t.buildFunctionPattern();
          let s = !0;
          const a = new Uint8Array(t.getTotalCodewords());
          let o = 0, l = 0, u = 0;
          for (let g = n - 1; g > 0; g -= 2) {
            g === 6 && g--;
            for (let x = 0; x < n; x++) {
              const y = s ? n - 1 - x : x;
              for (let I = 0; I < 2; I++)
                i.get(g - I, y) || (u++, l <<= 1, this.bitMatrix.get(g - I, y) && (l |= 1), u === 8 && (a[o++] = /*(byte) */
                l, u = 0, l = 0));
            }
            s = !s;
          }
          if (o !== t.getTotalCodewords())
            throw new L();
          return a;
        }
        /**
         * Revert the mask removal done while reading the code words. The bit matrix should revert to its original state.
         */
        remask() {
          if (this.parsedFormatInfo === null)
            return;
          const e = kt.values[this.parsedFormatInfo.getDataMask()], t = this.bitMatrix.getHeight();
          e.unmaskBitMatrix(this.bitMatrix, t);
        }
        /**
         * Prepare the parser for a mirrored operation.
         * This flag has effect only on the {@link #readFormatInformation()} and the
         * {@link #readVersion()}. Before proceeding with {@link #readCodewords()} the
         * {@link #mirror()} method should be called.
         *
         * @param mirror Whether to read version and format information mirrored.
         */
        setMirror(e) {
          this.parsedVersion = null, this.parsedFormatInfo = null, this.isMirror = e;
        }
        /** Mirror the bit matrix in order to attempt a second reading. */
        mirror() {
          const e = this.bitMatrix;
          for (let t = 0, r = e.getWidth(); t < r; t++)
            for (let n = t + 1, i = e.getHeight(); n < i; n++)
              e.get(t, n) !== e.get(n, t) && (e.flip(n, t), e.flip(t, n));
        }
      }
      class vn {
        constructor(e, t) {
          this.numDataCodewords = e, this.codewords = t;
        }
        /**
         * <p>When QR Codes use multiple data blocks, they are actually interleaved.
         * That is, the first byte of data block 1 to n is written, then the second bytes, and so on. This
         * method will separate the data into original blocks.</p>
         *
         * @param rawCodewords bytes as read directly from the QR Code
         * @param version version of the QR Code
         * @param ecLevel error-correction level of the QR Code
         * @return DataBlocks containing original bytes, "de-interleaved" from representation in the
         *         QR Code
         */
        static getDataBlocks(e, t, r) {
          if (e.length !== t.getTotalCodewords())
            throw new v();
          const n = t.getECBlocksForLevel(r);
          let i = 0;
          const s = n.getECBlocks();
          for (const I of s)
            i += I.getCount();
          const a = new Array(i);
          let o = 0;
          for (const I of s)
            for (let b = 0; b < I.getCount(); b++) {
              const T = I.getDataCodewords(), R = n.getECCodewordsPerBlock() + T;
              a[o++] = new vn(T, new Uint8Array(R));
            }
          const l = a[0].codewords.length;
          let u = a.length - 1;
          for (; u >= 0 && a[u].codewords.length !== l; )
            u--;
          u++;
          const g = l - n.getECCodewordsPerBlock();
          let x = 0;
          for (let I = 0; I < g; I++)
            for (let b = 0; b < o; b++)
              a[b].codewords[I] = e[x++];
          for (let I = u; I < o; I++)
            a[I].codewords[g] = e[x++];
          const y = a[0].codewords.length;
          for (let I = g; I < y; I++)
            for (let b = 0; b < o; b++) {
              const T = b < u ? I : I + 1;
              a[b].codewords[T] = e[x++];
            }
          return a;
        }
        getNumDataCodewords() {
          return this.numDataCodewords;
        }
        getCodewords() {
          return this.codewords;
        }
      }
      var Ut;
      (function(d) {
        d[d.TERMINATOR = 0] = "TERMINATOR", d[d.NUMERIC = 1] = "NUMERIC", d[d.ALPHANUMERIC = 2] = "ALPHANUMERIC", d[d.STRUCTURED_APPEND = 3] = "STRUCTURED_APPEND", d[d.BYTE = 4] = "BYTE", d[d.ECI = 5] = "ECI", d[d.KANJI = 6] = "KANJI", d[d.FNC1_FIRST_POSITION = 7] = "FNC1_FIRST_POSITION", d[d.FNC1_SECOND_POSITION = 8] = "FNC1_SECOND_POSITION", d[d.HANZI = 9] = "HANZI";
      })(Ut || (Ut = {}));
      class ne {
        constructor(e, t, r, n) {
          this.value = e, this.stringValue = t, this.characterCountBitsForVersions = r, this.bits = n, ne.FOR_BITS.set(n, this), ne.FOR_VALUE.set(e, this);
        }
        /**
         * @param bits four bits encoding a QR Code data mode
         * @return Mode encoded by these bits
         * @throws IllegalArgumentException if bits do not correspond to a known mode
         */
        static forBits(e) {
          const t = ne.FOR_BITS.get(e);
          if (t === void 0)
            throw new v();
          return t;
        }
        /**
         * @param version version in question
         * @return number of bits used, in this QR Code symbol {@link Version}, to encode the
         *         count of characters that will follow encoded in this Mode
         */
        getCharacterCountBits(e) {
          const t = e.getVersionNumber();
          let r;
          return t <= 9 ? r = 0 : t <= 26 ? r = 1 : r = 2, this.characterCountBitsForVersions[r];
        }
        getValue() {
          return this.value;
        }
        getBits() {
          return this.bits;
        }
        equals(e) {
          if (!(e instanceof ne))
            return !1;
          const t = e;
          return this.value === t.value;
        }
        toString() {
          return this.stringValue;
        }
      }
      ne.FOR_BITS = /* @__PURE__ */ new Map(), ne.FOR_VALUE = /* @__PURE__ */ new Map(), ne.TERMINATOR = new ne(Ut.TERMINATOR, "TERMINATOR", Int32Array.from([0, 0, 0]), 0), ne.NUMERIC = new ne(Ut.NUMERIC, "NUMERIC", Int32Array.from([10, 12, 14]), 1), ne.ALPHANUMERIC = new ne(Ut.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from([9, 11, 13]), 2), ne.STRUCTURED_APPEND = new ne(Ut.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3), ne.BYTE = new ne(Ut.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4), ne.ECI = new ne(Ut.ECI, "ECI", Int32Array.from([0, 0, 0]), 7), ne.KANJI = new ne(Ut.KANJI, "KANJI", Int32Array.from([8, 10, 12]), 8), ne.FNC1_FIRST_POSITION = new ne(Ut.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION", Int32Array.from([0, 0, 0]), 5), ne.FNC1_SECOND_POSITION = new ne(Ut.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION", Int32Array.from([0, 0, 0]), 9), ne.HANZI = new ne(Ut.HANZI, "HANZI", Int32Array.from([8, 10, 12]), 13);
      class $e {
        static decode(e, t, r, n) {
          const i = new Rn(e);
          let s = new he();
          const a = new Array();
          let o = -1, l = -1;
          try {
            let u = null, g = !1, x;
            do {
              if (i.available() < 4)
                x = ne.TERMINATOR;
              else {
                const y = i.readBits(4);
                x = ne.forBits(y);
              }
              switch (x) {
                case ne.TERMINATOR:
                  break;
                case ne.FNC1_FIRST_POSITION:
                case ne.FNC1_SECOND_POSITION:
                  g = !0;
                  break;
                case ne.STRUCTURED_APPEND:
                  if (i.available() < 16)
                    throw new L();
                  o = i.readBits(8), l = i.readBits(8);
                  break;
                case ne.ECI:
                  const y = $e.parseECIValue(i);
                  if (u = F.getCharacterSetECIByValue(y), u === null)
                    throw new L();
                  break;
                case ne.HANZI:
                  const I = i.readBits(4), b = i.readBits(x.getCharacterCountBits(t));
                  I === $e.GB2312_SUBSET && $e.decodeHanziSegment(i, s, b);
                  break;
                default:
                  const T = i.readBits(x.getCharacterCountBits(t));
                  switch (x) {
                    case ne.NUMERIC:
                      $e.decodeNumericSegment(i, s, T);
                      break;
                    case ne.ALPHANUMERIC:
                      $e.decodeAlphanumericSegment(i, s, T, g);
                      break;
                    case ne.BYTE:
                      $e.decodeByteSegment(i, s, T, u, a, n);
                      break;
                    case ne.KANJI:
                      $e.decodeKanjiSegment(i, s, T);
                      break;
                    default:
                      throw new L();
                  }
                  break;
              }
            } while (x !== ne.TERMINATOR);
          } catch {
            throw new L();
          }
          return new $t(e, s.toString(), a.length === 0 ? null : a, r === null ? null : r.toString(), o, l);
        }
        /**
         * See specification GBT 18284-2000
         */
        static decodeHanziSegment(e, t, r) {
          if (r * 13 > e.available())
            throw new L();
          const n = new Uint8Array(2 * r);
          let i = 0;
          for (; r > 0; ) {
            const s = e.readBits(13);
            let a = s / 96 << 8 & 4294967295 | s % 96;
            a < 959 ? a += 41377 : a += 42657, n[i] = /*(byte) */
            a >> 8 & 255, n[i + 1] = /*(byte) */
            a & 255, i += 2, r--;
          }
          try {
            t.append(Ce.decode(n, $.GB2312));
          } catch (s) {
            throw new L(s);
          }
        }
        static decodeKanjiSegment(e, t, r) {
          if (r * 13 > e.available())
            throw new L();
          const n = new Uint8Array(2 * r);
          let i = 0;
          for (; r > 0; ) {
            const s = e.readBits(13);
            let a = s / 192 << 8 & 4294967295 | s % 192;
            a < 7936 ? a += 33088 : a += 49472, n[i] = /*(byte) */
            a >> 8, n[i + 1] = /*(byte) */
            a, i += 2, r--;
          }
          try {
            t.append(Ce.decode(n, $.SHIFT_JIS));
          } catch (s) {
            throw new L(s);
          }
        }
        static decodeByteSegment(e, t, r, n, i, s) {
          if (8 * r > e.available())
            throw new L();
          const a = new Uint8Array(r);
          for (let l = 0; l < r; l++)
            a[l] = /*(byte) */
            e.readBits(8);
          let o;
          n === null ? o = $.guessEncoding(a, s) : o = n.getName();
          try {
            t.append(Ce.decode(a, o));
          } catch (l) {
            throw new L(l);
          }
          i.push(a);
        }
        static toAlphaNumericChar(e) {
          if (e >= $e.ALPHANUMERIC_CHARS.length)
            throw new L();
          return $e.ALPHANUMERIC_CHARS[e];
        }
        static decodeAlphanumericSegment(e, t, r, n) {
          const i = t.length();
          for (; r > 1; ) {
            if (e.available() < 11)
              throw new L();
            const s = e.readBits(11);
            t.append($e.toAlphaNumericChar(Math.floor(s / 45))), t.append($e.toAlphaNumericChar(s % 45)), r -= 2;
          }
          if (r === 1) {
            if (e.available() < 6)
              throw new L();
            t.append($e.toAlphaNumericChar(e.readBits(6)));
          }
          if (n)
            for (let s = i; s < t.length(); s++)
              t.charAt(s) === "%" && (s < t.length() - 1 && t.charAt(s + 1) === "%" ? t.deleteCharAt(s + 1) : t.setCharAt(s, ""));
        }
        static decodeNumericSegment(e, t, r) {
          for (; r >= 3; ) {
            if (e.available() < 10)
              throw new L();
            const n = e.readBits(10);
            if (n >= 1e3)
              throw new L();
            t.append($e.toAlphaNumericChar(Math.floor(n / 100))), t.append($e.toAlphaNumericChar(Math.floor(n / 10) % 10)), t.append($e.toAlphaNumericChar(n % 10)), r -= 3;
          }
          if (r === 2) {
            if (e.available() < 7)
              throw new L();
            const n = e.readBits(7);
            if (n >= 100)
              throw new L();
            t.append($e.toAlphaNumericChar(Math.floor(n / 10))), t.append($e.toAlphaNumericChar(n % 10));
          } else if (r === 1) {
            if (e.available() < 4)
              throw new L();
            const n = e.readBits(4);
            if (n >= 10)
              throw new L();
            t.append($e.toAlphaNumericChar(n));
          }
        }
        static parseECIValue(e) {
          const t = e.readBits(8);
          if ((t & 128) === 0)
            return t & 127;
          if ((t & 192) === 128) {
            const r = e.readBits(8);
            return (t & 63) << 8 & 4294967295 | r;
          }
          if ((t & 224) === 192) {
            const r = e.readBits(16);
            return (t & 31) << 16 & 4294967295 | r;
          }
          throw new L();
        }
      }
      $e.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", $e.GB2312_SUBSET = 1;
      class Kn {
        constructor(e) {
          this.mirrored = e;
        }
        /**
         * @return true if the QR Code was mirrored.
         */
        isMirrored() {
          return this.mirrored;
        }
        /**
         * Apply the result points' order correction due to mirroring.
         *
         * @param points Array of points to apply mirror correction to.
         */
        applyMirroredCorrection(e) {
          if (!this.mirrored || e === null || e.length < 3)
            return;
          const t = e[0];
          e[0] = e[2], e[2] = t;
        }
      }
      class ki {
        constructor() {
          this.rsDecoder = new Gt(_e.QR_CODE_FIELD_256);
        }
        // public decode(image: boolean[][]): DecoderResult /*throws ChecksumException, FormatException*/ {
        //   return decode(image, null)
        // }
        /**
         * <p>Convenience method that can decode a QR Code represented as a 2D array of booleans.
         * "true" is taken to mean a black module.</p>
         *
         * @param image booleans representing white/black QR Code modules
         * @param hints decoding hints that should be used to influence decoding
         * @return text and bytes encoded within the QR Code
         * @throws FormatException if the QR Code cannot be decoded
         * @throws ChecksumException if error correction fails
         */
        decodeBooleanArray(e, t) {
          return this.decodeBitMatrix(Oe.parseFromBooleanArray(e), t);
        }
        // public decodeBitMatrix(bits: BitMatrix): DecoderResult /*throws ChecksumException, FormatException*/ {
        //   return decode(bits, null)
        // }
        /**
         * <p>Decodes a QR Code represented as a {@link BitMatrix}. A 1 or "true" is taken to mean a black module.</p>
         *
         * @param bits booleans representing white/black QR Code modules
         * @param hints decoding hints that should be used to influence decoding
         * @return text and bytes encoded within the QR Code
         * @throws FormatException if the QR Code cannot be decoded
         * @throws ChecksumException if error correction fails
         */
        decodeBitMatrix(e, t) {
          const r = new Fi(e);
          let n = null;
          try {
            return this.decodeBitMatrixParser(r, t);
          } catch (i) {
            n = i;
          }
          try {
            r.remask(), r.setMirror(!0), r.readVersion(), r.readFormatInformation(), r.mirror();
            const i = this.decodeBitMatrixParser(r, t);
            return i.setOther(new Kn(!0)), i;
          } catch (i) {
            throw n !== null ? n : i;
          }
        }
        decodeBitMatrixParser(e, t) {
          const r = e.readVersion(), n = e.readFormatInformation().getErrorCorrectionLevel(), i = e.readCodewords(), s = vn.getDataBlocks(i, r, n);
          let a = 0;
          for (const u of s)
            a += u.getNumDataCodewords();
          const o = new Uint8Array(a);
          let l = 0;
          for (const u of s) {
            const g = u.getCodewords(), x = u.getNumDataCodewords();
            this.correctErrors(g, x);
            for (let y = 0; y < x; y++)
              o[l++] = g[y];
          }
          return $e.decode(o, r, n, t);
        }
        /**
         * <p>Given data and error-correction codewords received, possibly corrupted by errors, attempts to
         * correct the errors in-place using Reed-Solomon error correction.</p>
         *
         * @param codewordBytes data and error correction codewords
         * @param numDataCodewords number of codewords that are data bytes
         * @throws ChecksumException if error correction fails
         */
        correctErrors(e, t) {
          const r = new Int32Array(e);
          try {
            this.rsDecoder.decode(r, e.length - t);
          } catch {
            throw new q();
          }
          for (let n = 0; n < t; n++)
            e[n] = /*(byte) */
            r[n];
        }
      }
      class Dn extends Q {
        constructor(e, t, r) {
          super(e, t), this.estimatedModuleSize = r;
        }
        /**
         * <p>Determines if this alignment pattern "about equals" an alignment pattern at the stated
         * position and size -- meaning, it is at nearly the same center with nearly the same size.</p>
         */
        aboutEquals(e, t, r) {
          if (Math.abs(t - this.getY()) <= e && Math.abs(r - this.getX()) <= e) {
            const n = Math.abs(e - this.estimatedModuleSize);
            return n <= 1 || n <= this.estimatedModuleSize;
          }
          return !1;
        }
        /**
         * Combines this object's current estimate of a finder pattern position and module size
         * with a new estimate. It returns a new {@code FinderPattern} containing an average of the two.
         */
        combineEstimate(e, t, r) {
          const n = (this.getX() + t) / 2, i = (this.getY() + e) / 2, s = (this.estimatedModuleSize + r) / 2;
          return new Dn(n, i, s);
        }
      }
      class cn {
        /**
         * <p>Creates a finder that will look in a portion of the whole image.</p>
         *
         * @param image image to search
         * @param startX left column from which to start searching
         * @param startY top row from which to start searching
         * @param width width of region to search
         * @param height height of region to search
         * @param moduleSize estimated module size so far
         */
        constructor(e, t, r, n, i, s, a) {
          this.image = e, this.startX = t, this.startY = r, this.width = n, this.height = i, this.moduleSize = s, this.resultPointCallback = a, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(3);
        }
        /**
         * <p>This method attempts to find the bottom-right alignment pattern in the image. It is a bit messy since
         * it's pretty performance-critical and so is written to be fast foremost.</p>
         *
         * @return {@link AlignmentPattern} if found
         * @throws NotFoundException if not found
         */
        find() {
          const e = this.startX, t = this.height, r = this.width, n = e + r, i = this.startY + t / 2, s = new Int32Array(3), a = this.image;
          for (let o = 0; o < t; o++) {
            const l = i + ((o & 1) === 0 ? Math.floor((o + 1) / 2) : -Math.floor((o + 1) / 2));
            s[0] = 0, s[1] = 0, s[2] = 0;
            let u = e;
            for (; u < n && !a.get(u, l); )
              u++;
            let g = 0;
            for (; u < n; ) {
              if (a.get(u, l))
                if (g === 1)
                  s[1]++;
                else if (g === 2) {
                  if (this.foundPatternCross(s)) {
                    const x = this.handlePossibleCenter(s, l, u);
                    if (x !== null)
                      return x;
                  }
                  s[0] = s[2], s[1] = 1, s[2] = 0, g = 1;
                } else
                  s[++g]++;
              else
                g === 1 && g++, s[g]++;
              u++;
            }
            if (this.foundPatternCross(s)) {
              const x = this.handlePossibleCenter(s, l, n);
              if (x !== null)
                return x;
            }
          }
          if (this.possibleCenters.length !== 0)
            return this.possibleCenters[0];
          throw new D();
        }
        /**
         * Given a count of black/white/black pixels just seen and an end position,
         * figures the location of the center of this black/white/black run.
         */
        static centerFromEnd(e, t) {
          return t - e[2] - e[1] / 2;
        }
        /**
         * @param stateCount count of black/white/black pixels just read
         * @return true iff the proportions of the counts is close enough to the 1/1/1 ratios
         *         used by alignment patterns to be considered a match
         */
        foundPatternCross(e) {
          const t = this.moduleSize, r = t / 2;
          for (let n = 0; n < 3; n++)
            if (Math.abs(t - e[n]) >= r)
              return !1;
          return !0;
        }
        /**
         * <p>After a horizontal scan finds a potential alignment pattern, this method
         * "cross-checks" by scanning down vertically through the center of the possible
         * alignment pattern to see if the same proportion is detected.</p>
         *
         * @param startI row where an alignment pattern was detected
         * @param centerJ center of the section that appears to cross an alignment pattern
         * @param maxCount maximum reasonable number of modules that should be
         * observed in any reading state, based on the results of the horizontal scan
         * @return vertical center of alignment pattern, or {@link Float#NaN} if not found
         */
        crossCheckVertical(e, t, r, n) {
          const i = this.image, s = i.getHeight(), a = this.crossCheckStateCount;
          a[0] = 0, a[1] = 0, a[2] = 0;
          let o = e;
          for (; o >= 0 && i.get(t, o) && a[1] <= r; )
            a[1]++, o--;
          if (o < 0 || a[1] > r)
            return NaN;
          for (; o >= 0 && !i.get(t, o) && a[0] <= r; )
            a[0]++, o--;
          if (a[0] > r)
            return NaN;
          for (o = e + 1; o < s && i.get(t, o) && a[1] <= r; )
            a[1]++, o++;
          if (o === s || a[1] > r)
            return NaN;
          for (; o < s && !i.get(t, o) && a[2] <= r; )
            a[2]++, o++;
          if (a[2] > r)
            return NaN;
          const l = a[0] + a[1] + a[2];
          return 5 * Math.abs(l - n) >= 2 * n ? NaN : this.foundPatternCross(a) ? cn.centerFromEnd(a, o) : NaN;
        }
        /**
         * <p>This is called when a horizontal scan finds a possible alignment pattern. It will
         * cross check with a vertical scan, and if successful, will see if this pattern had been
         * found on a previous horizontal scan. If so, we consider it confirmed and conclude we have
         * found the alignment pattern.</p>
         *
         * @param stateCount reading state module counts from horizontal scan
         * @param i row where alignment pattern may be found
         * @param j end of possible alignment pattern in row
         * @return {@link AlignmentPattern} if we have found the same pattern twice, or null if not
         */
        handlePossibleCenter(e, t, r) {
          const n = e[0] + e[1] + e[2], i = cn.centerFromEnd(e, r), s = this.crossCheckVertical(
            t,
            /*(int) */
            i,
            2 * e[1],
            n
          );
          if (!isNaN(s)) {
            const a = (e[0] + e[1] + e[2]) / 3;
            for (const l of this.possibleCenters)
              if (l.aboutEquals(a, s, i))
                return l.combineEstimate(s, i, a);
            const o = new Dn(i, s, a);
            this.possibleCenters.push(o), this.resultPointCallback !== null && this.resultPointCallback !== void 0 && this.resultPointCallback.foundPossibleResultPoint(o);
          }
          return null;
        }
      }
      class Mn extends Q {
        // FinderPattern(posX: number/*float*/, posY: number/*float*/, estimatedModuleSize: number/*float*/) {
        //   this(posX, posY, estimatedModuleSize, 1)
        // }
        constructor(e, t, r, n) {
          super(e, t), this.estimatedModuleSize = r, this.count = n, n === void 0 && (this.count = 1);
        }
        getEstimatedModuleSize() {
          return this.estimatedModuleSize;
        }
        getCount() {
          return this.count;
        }
        /*
        void incrementCount() {
          this.count++
        }
         */
        /**
         * <p>Determines if this finder pattern "about equals" a finder pattern at the stated
         * position and size -- meaning, it is at nearly the same center with nearly the same size.</p>
         */
        aboutEquals(e, t, r) {
          if (Math.abs(t - this.getY()) <= e && Math.abs(r - this.getX()) <= e) {
            const n = Math.abs(e - this.estimatedModuleSize);
            return n <= 1 || n <= this.estimatedModuleSize;
          }
          return !1;
        }
        /**
         * Combines this object's current estimate of a finder pattern position and module size
         * with a new estimate. It returns a new {@code FinderPattern} containing a weighted average
         * based on count.
         */
        combineEstimate(e, t, r) {
          const n = this.count + 1, i = (this.count * this.getX() + t) / n, s = (this.count * this.getY() + e) / n, a = (this.count * this.estimatedModuleSize + r) / n;
          return new Mn(i, s, a, n);
        }
      }
      class Ui {
        constructor(e) {
          this.bottomLeft = e[0], this.topLeft = e[1], this.topRight = e[2];
        }
        getBottomLeft() {
          return this.bottomLeft;
        }
        getTopLeft() {
          return this.topLeft;
        }
        getTopRight() {
          return this.topRight;
        }
      }
      class xt {
        /**
         * <p>Creates a finder that will search the image for three finder patterns.</p>
         *
         * @param image image to search
         */
        // public constructor(image: BitMatrix) {
        //   this(image, null)
        // }
        constructor(e, t) {
          this.image = e, this.resultPointCallback = t, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(5), this.resultPointCallback = t;
        }
        getImage() {
          return this.image;
        }
        getPossibleCenters() {
          return this.possibleCenters;
        }
        find(e) {
          const t = e != null && e.get(ce.TRY_HARDER) !== void 0, r = e != null && e.get(ce.PURE_BARCODE) !== void 0, n = this.image, i = n.getHeight(), s = n.getWidth();
          let a = Math.floor(3 * i / (4 * xt.MAX_MODULES));
          (a < xt.MIN_SKIP || t) && (a = xt.MIN_SKIP);
          let o = !1;
          const l = new Int32Array(5);
          for (let g = a - 1; g < i && !o; g += a) {
            l[0] = 0, l[1] = 0, l[2] = 0, l[3] = 0, l[4] = 0;
            let x = 0;
            for (let y = 0; y < s; y++)
              if (n.get(y, g))
                (x & 1) === 1 && x++, l[x]++;
              else if ((x & 1) === 0)
                if (x === 4)
                  if (xt.foundPatternCross(l)) {
                    if (this.handlePossibleCenter(l, g, y, r) === !0)
                      if (a = 2, this.hasSkipped === !0)
                        o = this.haveMultiplyConfirmedCenters();
                      else {
                        const b = this.findRowSkip();
                        b > l[2] && (g += b - l[2] - a, y = s - 1);
                      }
                    else {
                      l[0] = l[2], l[1] = l[3], l[2] = l[4], l[3] = 1, l[4] = 0, x = 3;
                      continue;
                    }
                    x = 0, l[0] = 0, l[1] = 0, l[2] = 0, l[3] = 0, l[4] = 0;
                  } else
                    l[0] = l[2], l[1] = l[3], l[2] = l[4], l[3] = 1, l[4] = 0, x = 3;
                else
                  l[++x]++;
              else
                l[x]++;
            xt.foundPatternCross(l) && this.handlePossibleCenter(l, g, s, r) === !0 && (a = l[0], this.hasSkipped && (o = this.haveMultiplyConfirmedCenters()));
          }
          const u = this.selectBestPatterns();
          return Q.orderBestPatterns(u), new Ui(u);
        }
        /**
         * Given a count of black/white/black/white/black pixels just seen and an end position,
         * figures the location of the center of this run.
         */
        static centerFromEnd(e, t) {
          return t - e[4] - e[3] - e[2] / 2;
        }
        /**
         * @param stateCount count of black/white/black/white/black pixels just read
         * @return true iff the proportions of the counts is close enough to the 1/1/3/1/1 ratios
         *         used by finder patterns to be considered a match
         */
        static foundPatternCross(e) {
          let t = 0;
          for (let i = 0; i < 5; i++) {
            const s = e[i];
            if (s === 0)
              return !1;
            t += s;
          }
          if (t < 7)
            return !1;
          const r = t / 7, n = r / 2;
          return Math.abs(r - e[0]) < n && Math.abs(r - e[1]) < n && Math.abs(3 * r - e[2]) < 3 * n && Math.abs(r - e[3]) < n && Math.abs(r - e[4]) < n;
        }
        getCrossCheckStateCount() {
          const e = this.crossCheckStateCount;
          return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e;
        }
        /**
         * After a vertical and horizontal scan finds a potential finder pattern, this method
         * "cross-cross-cross-checks" by scanning down diagonally through the center of the possible
         * finder pattern to see if the same proportion is detected.
         *
         * @param startI row where a finder pattern was detected
         * @param centerJ center of the section that appears to cross a finder pattern
         * @param maxCount maximum reasonable number of modules that should be
         *  observed in any reading state, based on the results of the horizontal scan
         * @param originalStateCountTotal The original state count total.
         * @return true if proportions are withing expected limits
         */
        crossCheckDiagonal(e, t, r, n) {
          const i = this.getCrossCheckStateCount();
          let s = 0;
          const a = this.image;
          for (; e >= s && t >= s && a.get(t - s, e - s); )
            i[2]++, s++;
          if (e < s || t < s)
            return !1;
          for (; e >= s && t >= s && !a.get(t - s, e - s) && i[1] <= r; )
            i[1]++, s++;
          if (e < s || t < s || i[1] > r)
            return !1;
          for (; e >= s && t >= s && a.get(t - s, e - s) && i[0] <= r; )
            i[0]++, s++;
          if (i[0] > r)
            return !1;
          const o = a.getHeight(), l = a.getWidth();
          for (s = 1; e + s < o && t + s < l && a.get(t + s, e + s); )
            i[2]++, s++;
          if (e + s >= o || t + s >= l)
            return !1;
          for (; e + s < o && t + s < l && !a.get(t + s, e + s) && i[3] < r; )
            i[3]++, s++;
          if (e + s >= o || t + s >= l || i[3] >= r)
            return !1;
          for (; e + s < o && t + s < l && a.get(t + s, e + s) && i[4] < r; )
            i[4]++, s++;
          if (i[4] >= r)
            return !1;
          const u = i[0] + i[1] + i[2] + i[3] + i[4];
          return Math.abs(u - n) < 2 * n && xt.foundPatternCross(i);
        }
        /**
         * <p>After a horizontal scan finds a potential finder pattern, this method
         * "cross-checks" by scanning down vertically through the center of the possible
         * finder pattern to see if the same proportion is detected.</p>
         *
         * @param startI row where a finder pattern was detected
         * @param centerJ center of the section that appears to cross a finder pattern
         * @param maxCount maximum reasonable number of modules that should be
         * observed in any reading state, based on the results of the horizontal scan
         * @return vertical center of finder pattern, or {@link Float#NaN} if not found
         */
        crossCheckVertical(e, t, r, n) {
          const i = this.image, s = i.getHeight(), a = this.getCrossCheckStateCount();
          let o = e;
          for (; o >= 0 && i.get(t, o); )
            a[2]++, o--;
          if (o < 0)
            return NaN;
          for (; o >= 0 && !i.get(t, o) && a[1] <= r; )
            a[1]++, o--;
          if (o < 0 || a[1] > r)
            return NaN;
          for (; o >= 0 && i.get(t, o) && a[0] <= r; )
            a[0]++, o--;
          if (a[0] > r)
            return NaN;
          for (o = e + 1; o < s && i.get(t, o); )
            a[2]++, o++;
          if (o === s)
            return NaN;
          for (; o < s && !i.get(t, o) && a[3] < r; )
            a[3]++, o++;
          if (o === s || a[3] >= r)
            return NaN;
          for (; o < s && i.get(t, o) && a[4] < r; )
            a[4]++, o++;
          if (a[4] >= r)
            return NaN;
          const l = a[0] + a[1] + a[2] + a[3] + a[4];
          return 5 * Math.abs(l - n) >= 2 * n ? NaN : xt.foundPatternCross(a) ? xt.centerFromEnd(a, o) : NaN;
        }
        /**
         * <p>Like {@link #crossCheckVertical(int, int, int, int)}, and in fact is basically identical,
         * except it reads horizontally instead of vertically. This is used to cross-cross
         * check a vertical cross check and locate the real center of the alignment pattern.</p>
         */
        crossCheckHorizontal(e, t, r, n) {
          const i = this.image, s = i.getWidth(), a = this.getCrossCheckStateCount();
          let o = e;
          for (; o >= 0 && i.get(o, t); )
            a[2]++, o--;
          if (o < 0)
            return NaN;
          for (; o >= 0 && !i.get(o, t) && a[1] <= r; )
            a[1]++, o--;
          if (o < 0 || a[1] > r)
            return NaN;
          for (; o >= 0 && i.get(o, t) && a[0] <= r; )
            a[0]++, o--;
          if (a[0] > r)
            return NaN;
          for (o = e + 1; o < s && i.get(o, t); )
            a[2]++, o++;
          if (o === s)
            return NaN;
          for (; o < s && !i.get(o, t) && a[3] < r; )
            a[3]++, o++;
          if (o === s || a[3] >= r)
            return NaN;
          for (; o < s && i.get(o, t) && a[4] < r; )
            a[4]++, o++;
          if (a[4] >= r)
            return NaN;
          const l = a[0] + a[1] + a[2] + a[3] + a[4];
          return 5 * Math.abs(l - n) >= n ? NaN : xt.foundPatternCross(a) ? xt.centerFromEnd(a, o) : NaN;
        }
        /**
         * <p>This is called when a horizontal scan finds a possible alignment pattern. It will
         * cross check with a vertical scan, and if successful, will, ah, cross-cross-check
         * with another horizontal scan. This is needed primarily to locate the real horizontal
         * center of the pattern in cases of extreme skew.
         * And then we cross-cross-cross check with another diagonal scan.</p>
         *
         * <p>If that succeeds the finder pattern location is added to a list that tracks
         * the number of times each location has been nearly-matched as a finder pattern.
         * Each additional find is more evidence that the location is in fact a finder
         * pattern center
         *
         * @param stateCount reading state module counts from horizontal scan
         * @param i row where finder pattern may be found
         * @param j end of possible finder pattern in row
         * @param pureBarcode true if in "pure barcode" mode
         * @return true if a finder pattern candidate was found this time
         */
        handlePossibleCenter(e, t, r, n) {
          const i = e[0] + e[1] + e[2] + e[3] + e[4];
          let s = xt.centerFromEnd(e, r), a = this.crossCheckVertical(
            t,
            /*(int) */
            Math.floor(s),
            e[2],
            i
          );
          if (!isNaN(a) && (s = this.crossCheckHorizontal(
            /*(int) */
            Math.floor(s),
            /*(int) */
            Math.floor(a),
            e[2],
            i
          ), !isNaN(s) && (!n || this.crossCheckDiagonal(
            /*(int) */
            Math.floor(a),
            /*(int) */
            Math.floor(s),
            e[2],
            i
          )))) {
            const o = i / 7;
            let l = !1;
            const u = this.possibleCenters;
            for (let g = 0, x = u.length; g < x; g++) {
              const y = u[g];
              if (y.aboutEquals(o, a, s)) {
                u[g] = y.combineEstimate(a, s, o), l = !0;
                break;
              }
            }
            if (!l) {
              const g = new Mn(s, a, o);
              u.push(g), this.resultPointCallback !== null && this.resultPointCallback !== void 0 && this.resultPointCallback.foundPossibleResultPoint(g);
            }
            return !0;
          }
          return !1;
        }
        /**
         * @return number of rows we could safely skip during scanning, based on the first
         *         two finder patterns that have been located. In some cases their position will
         *         allow us to infer that the third pattern must lie below a certain point farther
         *         down in the image.
         */
        findRowSkip() {
          if (this.possibleCenters.length <= 1)
            return 0;
          let t = null;
          for (const r of this.possibleCenters)
            if (r.getCount() >= xt.CENTER_QUORUM)
              if (t == null)
                t = r;
              else
                return this.hasSkipped = !0, /*(int) */
                Math.floor((Math.abs(t.getX() - r.getX()) - Math.abs(t.getY() - r.getY())) / 2);
          return 0;
        }
        /**
         * @return true iff we have found at least 3 finder patterns that have been detected
         *         at least {@link #CENTER_QUORUM} times each, and, the estimated module size of the
         *         candidates is "pretty similar"
         */
        haveMultiplyConfirmedCenters() {
          let e = 0, t = 0;
          const r = this.possibleCenters.length;
          for (const s of this.possibleCenters)
            s.getCount() >= xt.CENTER_QUORUM && (e++, t += s.getEstimatedModuleSize());
          if (e < 3)
            return !1;
          const n = t / r;
          let i = 0;
          for (const s of this.possibleCenters)
            i += Math.abs(s.getEstimatedModuleSize() - n);
          return i <= 0.05 * t;
        }
        /**
         * @return the 3 best {@link FinderPattern}s from our list of candidates. The "best" are
         *         those that have been detected at least {@link #CENTER_QUORUM} times, and whose module
         *         size differs from the average among those patterns the least
         * @throws NotFoundException if 3 such finder patterns do not exist
         */
        selectBestPatterns() {
          const e = this.possibleCenters.length;
          if (e < 3)
            throw new D();
          const t = this.possibleCenters;
          let r;
          if (e > 3) {
            let n = 0, i = 0;
            for (const o of this.possibleCenters) {
              const l = o.getEstimatedModuleSize();
              n += l, i += l * l;
            }
            r = n / e;
            let s = Math.sqrt(i / e - r * r);
            t.sort(
              /**
               * <p>Orders by furthest from average</p>
               */
              // FurthestFromAverageComparator implements Comparator<FinderPattern>
              (o, l) => {
                const u = Math.abs(l.getEstimatedModuleSize() - r), g = Math.abs(o.getEstimatedModuleSize() - r);
                return u < g ? -1 : u > g ? 1 : 0;
              }
            );
            const a = Math.max(0.2 * r, s);
            for (let o = 0; o < t.length && t.length > 3; o++) {
              const l = t[o];
              Math.abs(l.getEstimatedModuleSize() - r) > a && (t.splice(o, 1), o--);
            }
          }
          if (t.length > 3) {
            let n = 0;
            for (const i of t)
              n += i.getEstimatedModuleSize();
            r = n / t.length, t.sort(
              /**
               * <p>Orders by {@link FinderPattern#getCount()}, descending.</p>
               */
              // CenterComparator implements Comparator<FinderPattern>
              (i, s) => {
                if (s.getCount() === i.getCount()) {
                  const a = Math.abs(s.getEstimatedModuleSize() - r), o = Math.abs(i.getEstimatedModuleSize() - r);
                  return a < o ? 1 : a > o ? -1 : 0;
                } else
                  return s.getCount() - i.getCount();
              }
            ), t.splice(3);
          }
          return [
            t[0],
            t[1],
            t[2]
          ];
        }
      }
      xt.CENTER_QUORUM = 2, xt.MIN_SKIP = 3, xt.MAX_MODULES = 57;
      class Xr {
        constructor(e) {
          this.image = e;
        }
        getImage() {
          return this.image;
        }
        getResultPointCallback() {
          return this.resultPointCallback;
        }
        /**
         * <p>Detects a QR Code in an image.</p>
         *
         * @return {@link DetectorResult} encapsulating results of detecting a QR Code
         * @throws NotFoundException if QR Code cannot be found
         * @throws FormatException if a QR Code cannot be decoded
         */
        // public detect(): DetectorResult /*throws NotFoundException, FormatException*/ {
        //   return detect(null)
        // }
        /**
         * <p>Detects a QR Code in an image.</p>
         *
         * @param hints optional hints to detector
         * @return {@link DetectorResult} encapsulating results of detecting a QR Code
         * @throws NotFoundException if QR Code cannot be found
         * @throws FormatException if a QR Code cannot be decoded
         */
        detect(e) {
          this.resultPointCallback = e == null ? null : (
            /*(ResultPointCallback) */
            e.get(ce.NEED_RESULT_POINT_CALLBACK)
          );
          const r = new xt(this.image, this.resultPointCallback).find(e);
          return this.processFinderPatternInfo(r);
        }
        processFinderPatternInfo(e) {
          const t = e.getTopLeft(), r = e.getTopRight(), n = e.getBottomLeft(), i = this.calculateModuleSize(t, r, n);
          if (i < 1)
            throw new D("No pattern found in proccess finder.");
          const s = Xr.computeDimension(t, r, n, i), a = te.getProvisionalVersionForDimension(s), o = a.getDimensionForVersion() - 7;
          let l = null;
          if (a.getAlignmentPatternCenters().length > 0) {
            const y = r.getX() - t.getX() + n.getX(), I = r.getY() - t.getY() + n.getY(), b = 1 - 3 / o, T = (
              /*(int) */
              Math.floor(t.getX() + b * (y - t.getX()))
            ), R = (
              /*(int) */
              Math.floor(t.getY() + b * (I - t.getY()))
            );
            for (let H = 4; H <= 16; H <<= 1)
              try {
                l = this.findAlignmentInRegion(i, T, R, H);
                break;
              } catch (W) {
                if (!(W instanceof D))
                  throw W;
              }
          }
          const u = Xr.createTransform(t, r, n, l, s), g = Xr.sampleGrid(this.image, u, s);
          let x;
          return l === null ? x = [n, t, r] : x = [n, t, r, l], new or(g, x);
        }
        static createTransform(e, t, r, n, i) {
          const s = i - 3.5;
          let a, o, l, u;
          return n !== null ? (a = n.getX(), o = n.getY(), l = s - 3, u = l) : (a = t.getX() - e.getX() + r.getX(), o = t.getY() - e.getY() + r.getY(), l = s, u = s), St.quadrilateralToQuadrilateral(3.5, 3.5, s, 3.5, l, u, 3.5, s, e.getX(), e.getY(), t.getX(), t.getY(), a, o, r.getX(), r.getY());
        }
        static sampleGrid(e, t, r) {
          return Yt.getInstance().sampleGridWithTransform(e, r, r, t);
        }
        /**
         * <p>Computes the dimension (number of modules on a size) of the QR Code based on the position
         * of the finder patterns and estimated module size.</p>
         */
        static computeDimension(e, t, r, n) {
          const i = Ee.round(Q.distance(e, t) / n), s = Ee.round(Q.distance(e, r) / n);
          let a = Math.floor((i + s) / 2) + 7;
          switch (a & 3) {
            // mod 4
            case 0:
              a++;
              break;
            // 1? do nothing
            case 2:
              a--;
              break;
            case 3:
              throw new D("Dimensions could be not found.");
          }
          return a;
        }
        /**
         * <p>Computes an average estimated module size based on estimated derived from the positions
         * of the three finder patterns.</p>
         *
         * @param topLeft detected top-left finder pattern center
         * @param topRight detected top-right finder pattern center
         * @param bottomLeft detected bottom-left finder pattern center
         * @return estimated module size
         */
        calculateModuleSize(e, t, r) {
          return (this.calculateModuleSizeOneWay(e, t) + this.calculateModuleSizeOneWay(e, r)) / 2;
        }
        /**
         * <p>Estimates module size based on two finder patterns -- it uses
         * {@link #sizeOfBlackWhiteBlackRunBothWays(int, int, int, int)} to figure the
         * width of each, measuring along the axis between their centers.</p>
         */
        calculateModuleSizeOneWay(e, t) {
          const r = this.sizeOfBlackWhiteBlackRunBothWays(
            /*(int) */
            Math.floor(e.getX()),
            /*(int) */
            Math.floor(e.getY()),
            /*(int) */
            Math.floor(t.getX()),
            /*(int) */
            Math.floor(t.getY())
          ), n = this.sizeOfBlackWhiteBlackRunBothWays(
            /*(int) */
            Math.floor(t.getX()),
            /*(int) */
            Math.floor(t.getY()),
            /*(int) */
            Math.floor(e.getX()),
            /*(int) */
            Math.floor(e.getY())
          );
          return isNaN(r) ? n / 7 : isNaN(n) ? r / 7 : (r + n) / 14;
        }
        /**
         * See {@link #sizeOfBlackWhiteBlackRun(int, int, int, int)}; computes the total width of
         * a finder pattern by looking for a black-white-black run from the center in the direction
         * of another point (another finder pattern center), and in the opposite direction too.
         */
        sizeOfBlackWhiteBlackRunBothWays(e, t, r, n) {
          let i = this.sizeOfBlackWhiteBlackRun(e, t, r, n), s = 1, a = e - (r - e);
          a < 0 ? (s = e / /*(float) */
          (e - a), a = 0) : a >= this.image.getWidth() && (s = (this.image.getWidth() - 1 - e) / /*(float) */
          (a - e), a = this.image.getWidth() - 1);
          let o = (
            /*(int) */
            Math.floor(t - (n - t) * s)
          );
          return s = 1, o < 0 ? (s = t / /*(float) */
          (t - o), o = 0) : o >= this.image.getHeight() && (s = (this.image.getHeight() - 1 - t) / /*(float) */
          (o - t), o = this.image.getHeight() - 1), a = /*(int) */
          Math.floor(e + (a - e) * s), i += this.sizeOfBlackWhiteBlackRun(e, t, a, o), i - 1;
        }
        /**
         * <p>This method traces a line from a point in the image, in the direction towards another point.
         * It begins in a black region, and keeps going until it finds white, then black, then white again.
         * It reports the distance from the start to this point.</p>
         *
         * <p>This is used when figuring out how wide a finder pattern is, when the finder pattern
         * may be skewed or rotated.</p>
         */
        sizeOfBlackWhiteBlackRun(e, t, r, n) {
          const i = Math.abs(n - t) > Math.abs(r - e);
          if (i) {
            let y = e;
            e = t, t = y, y = r, r = n, n = y;
          }
          const s = Math.abs(r - e), a = Math.abs(n - t);
          let o = -s / 2;
          const l = e < r ? 1 : -1, u = t < n ? 1 : -1;
          let g = 0;
          const x = r + l;
          for (let y = e, I = t; y !== x; y += l) {
            const b = i ? I : y, T = i ? y : I;
            if (g === 1 === this.image.get(b, T)) {
              if (g === 2)
                return Ee.distance(y, I, e, t);
              g++;
            }
            if (o += a, o > 0) {
              if (I === n)
                break;
              I += u, o -= s;
            }
          }
          return g === 2 ? Ee.distance(r + l, n, e, t) : NaN;
        }
        /**
         * <p>Attempts to locate an alignment pattern in a limited region of the image, which is
         * guessed to contain it. This method uses {@link AlignmentPattern}.</p>
         *
         * @param overallEstModuleSize estimated module size so far
         * @param estAlignmentX x coordinate of center of area probably containing alignment pattern
         * @param estAlignmentY y coordinate of above
         * @param allowanceFactor number of pixels in all directions to search from the center
         * @return {@link AlignmentPattern} if found, or null otherwise
         * @throws NotFoundException if an unexpected error occurs during detection
         */
        findAlignmentInRegion(e, t, r, n) {
          const i = (
            /*(int) */
            Math.floor(n * e)
          ), s = Math.max(0, t - i), a = Math.min(this.image.getWidth() - 1, t + i);
          if (a - s < e * 3)
            throw new D("Alignment top exceeds estimated module size.");
          const o = Math.max(0, r - i), l = Math.min(this.image.getHeight() - 1, r + i);
          if (l - o < e * 3)
            throw new D("Alignment bottom exceeds estimated module size.");
          return new cn(this.image, s, o, a - s, l - o, e, this.resultPointCallback).find();
        }
      }
      class fr {
        constructor() {
          this.decoder = new ki();
        }
        getDecoder() {
          return this.decoder;
        }
        /**
         * Locates and decodes a QR code in an image.
         *
         * @return a representing: string the content encoded by the QR code
         * @throws NotFoundException if a QR code cannot be found
         * @throws FormatException if a QR code cannot be decoded
         * @throws ChecksumException if error correction fails
         */
        /*@Override*/
        // public decode(image: BinaryBitmap): Result /*throws NotFoundException, ChecksumException, FormatException */ {
        //   return this.decode(image, null)
        // }
        /*@Override*/
        decode(e, t) {
          let r, n;
          if (t != null && t.get(ce.PURE_BARCODE) !== void 0) {
            const o = fr.extractPureBits(e.getBlackMatrix());
            r = this.decoder.decodeBitMatrix(o, t), n = fr.NO_POINTS;
          } else {
            const o = new Xr(e.getBlackMatrix()).detect(t);
            r = this.decoder.decodeBitMatrix(o.getBits(), t), n = o.getPoints();
          }
          r.getOther() instanceof Kn && r.getOther().applyMirroredCorrection(n);
          const i = new Ke(r.getText(), r.getRawBytes(), void 0, n, re.QR_CODE, void 0), s = r.getByteSegments();
          s !== null && i.putMetadata(qe.BYTE_SEGMENTS, s);
          const a = r.getECLevel();
          return a !== null && i.putMetadata(qe.ERROR_CORRECTION_LEVEL, a), r.hasStructuredAppend() && (i.putMetadata(qe.STRUCTURED_APPEND_SEQUENCE, r.getStructuredAppendSequenceNumber()), i.putMetadata(qe.STRUCTURED_APPEND_PARITY, r.getStructuredAppendParity())), i;
        }
        /*@Override*/
        reset() {
        }
        /**
         * This method detects a code in a "pure" image -- that is, pure monochrome image
         * which contains only an unrotated, unskewed, image of a code, with some white border
         * around it. This is a specialized method that works exceptionally fast in this special
         * case.
         *
         * @see com.google.zxing.datamatrix.DataMatrixReader#extractPureBits(BitMatrix)
         */
        static extractPureBits(e) {
          const t = e.getTopLeftOnBit(), r = e.getBottomRightOnBit();
          if (t === null || r === null)
            throw new D();
          const n = this.moduleSize(t, e);
          let i = t[1], s = r[1], a = t[0], o = r[0];
          if (a >= o || i >= s)
            throw new D();
          if (s - i !== o - a && (o = a + (s - i), o >= e.getWidth()))
            throw new D();
          const l = Math.round((o - a + 1) / n), u = Math.round((s - i + 1) / n);
          if (l <= 0 || u <= 0)
            throw new D();
          if (u !== l)
            throw new D();
          const g = (
            /*(int) */
            Math.floor(n / 2)
          );
          i += g, a += g;
          const x = a + /*(int) */
          Math.floor((l - 1) * n) - o;
          if (x > 0) {
            if (x > g)
              throw new D();
            a -= x;
          }
          const y = i + /*(int) */
          Math.floor((u - 1) * n) - s;
          if (y > 0) {
            if (y > g)
              throw new D();
            i -= y;
          }
          const I = new Oe(l, u);
          for (let b = 0; b < u; b++) {
            const T = i + /*(int) */
            Math.floor(b * n);
            for (let R = 0; R < l; R++)
              e.get(a + /*(int) */
              Math.floor(R * n), T) && I.set(R, b);
          }
          return I;
        }
        static moduleSize(e, t) {
          const r = t.getHeight(), n = t.getWidth();
          let i = e[0], s = e[1], a = !0, o = 0;
          for (; i < n && s < r; ) {
            if (a !== t.get(i, s)) {
              if (++o === 5)
                break;
              a = !a;
            }
            i++, s++;
          }
          if (i === n || s === r)
            throw new D();
          return (i - e[0]) / 7;
        }
      }
      fr.NO_POINTS = new Array();
      class ae {
        PDF417Common() {
        }
        /**
         * @param moduleBitCount values to sum
         * @return sum of values
         * @deprecated call {@link MathUtils#sum(int[])}
         */
        // @Deprecated
        static getBitCountSum(e) {
          return Ee.sum(e);
        }
        static toIntArray(e) {
          if (e == null || !e.length)
            return ae.EMPTY_INT_ARRAY;
          const t = new Int32Array(e.length);
          let r = 0;
          for (const n of e)
            t[r++] = n;
          return t;
        }
        /**
         * @param symbol encoded symbol to translate to a codeword
         * @return the codeword corresponding to the symbol.
         */
        static getCodeword(e) {
          const t = G.binarySearch(ae.SYMBOL_TABLE, e & 262143);
          return t < 0 ? -1 : (ae.CODEWORD_TABLE[t] - 1) % ae.NUMBER_OF_CODEWORDS;
        }
      }
      ae.NUMBER_OF_CODEWORDS = 929, ae.MAX_CODEWORDS_IN_BARCODE = ae.NUMBER_OF_CODEWORDS - 1, ae.MIN_ROWS_IN_BARCODE = 3, ae.MAX_ROWS_IN_BARCODE = 90, ae.MODULES_IN_CODEWORD = 17, ae.MODULES_IN_STOP_PATTERN = 18, ae.BARS_IN_MODULE = 8, ae.EMPTY_INT_ARRAY = new Int32Array([]), ae.SYMBOL_TABLE = Int32Array.from([
        66142,
        66170,
        66206,
        66236,
        66290,
        66292,
        66350,
        66382,
        66396,
        66454,
        66470,
        66476,
        66594,
        66600,
        66614,
        66626,
        66628,
        66632,
        66640,
        66654,
        66662,
        66668,
        66682,
        66690,
        66718,
        66720,
        66748,
        66758,
        66776,
        66798,
        66802,
        66804,
        66820,
        66824,
        66832,
        66846,
        66848,
        66876,
        66880,
        66936,
        66950,
        66956,
        66968,
        66992,
        67006,
        67022,
        67036,
        67042,
        67044,
        67048,
        67062,
        67118,
        67150,
        67164,
        67214,
        67228,
        67256,
        67294,
        67322,
        67350,
        67366,
        67372,
        67398,
        67404,
        67416,
        67438,
        67474,
        67476,
        67490,
        67492,
        67496,
        67510,
        67618,
        67624,
        67650,
        67656,
        67664,
        67678,
        67686,
        67692,
        67706,
        67714,
        67716,
        67728,
        67742,
        67744,
        67772,
        67782,
        67788,
        67800,
        67822,
        67826,
        67828,
        67842,
        67848,
        67870,
        67872,
        67900,
        67904,
        67960,
        67974,
        67992,
        68016,
        68030,
        68046,
        68060,
        68066,
        68068,
        68072,
        68086,
        68104,
        68112,
        68126,
        68128,
        68156,
        68160,
        68216,
        68336,
        68358,
        68364,
        68376,
        68400,
        68414,
        68448,
        68476,
        68494,
        68508,
        68536,
        68546,
        68548,
        68552,
        68560,
        68574,
        68582,
        68588,
        68654,
        68686,
        68700,
        68706,
        68708,
        68712,
        68726,
        68750,
        68764,
        68792,
        68802,
        68804,
        68808,
        68816,
        68830,
        68838,
        68844,
        68858,
        68878,
        68892,
        68920,
        68976,
        68990,
        68994,
        68996,
        69e3,
        69008,
        69022,
        69024,
        69052,
        69062,
        69068,
        69080,
        69102,
        69106,
        69108,
        69142,
        69158,
        69164,
        69190,
        69208,
        69230,
        69254,
        69260,
        69272,
        69296,
        69310,
        69326,
        69340,
        69386,
        69394,
        69396,
        69410,
        69416,
        69430,
        69442,
        69444,
        69448,
        69456,
        69470,
        69478,
        69484,
        69554,
        69556,
        69666,
        69672,
        69698,
        69704,
        69712,
        69726,
        69754,
        69762,
        69764,
        69776,
        69790,
        69792,
        69820,
        69830,
        69836,
        69848,
        69870,
        69874,
        69876,
        69890,
        69918,
        69920,
        69948,
        69952,
        70008,
        70022,
        70040,
        70064,
        70078,
        70094,
        70108,
        70114,
        70116,
        70120,
        70134,
        70152,
        70174,
        70176,
        70264,
        70384,
        70412,
        70448,
        70462,
        70496,
        70524,
        70542,
        70556,
        70584,
        70594,
        70600,
        70608,
        70622,
        70630,
        70636,
        70664,
        70672,
        70686,
        70688,
        70716,
        70720,
        70776,
        70896,
        71136,
        71180,
        71192,
        71216,
        71230,
        71264,
        71292,
        71360,
        71416,
        71452,
        71480,
        71536,
        71550,
        71554,
        71556,
        71560,
        71568,
        71582,
        71584,
        71612,
        71622,
        71628,
        71640,
        71662,
        71726,
        71732,
        71758,
        71772,
        71778,
        71780,
        71784,
        71798,
        71822,
        71836,
        71864,
        71874,
        71880,
        71888,
        71902,
        71910,
        71916,
        71930,
        71950,
        71964,
        71992,
        72048,
        72062,
        72066,
        72068,
        72080,
        72094,
        72096,
        72124,
        72134,
        72140,
        72152,
        72174,
        72178,
        72180,
        72206,
        72220,
        72248,
        72304,
        72318,
        72416,
        72444,
        72456,
        72464,
        72478,
        72480,
        72508,
        72512,
        72568,
        72588,
        72600,
        72624,
        72638,
        72654,
        72668,
        72674,
        72676,
        72680,
        72694,
        72726,
        72742,
        72748,
        72774,
        72780,
        72792,
        72814,
        72838,
        72856,
        72880,
        72894,
        72910,
        72924,
        72930,
        72932,
        72936,
        72950,
        72966,
        72972,
        72984,
        73008,
        73022,
        73056,
        73084,
        73102,
        73116,
        73144,
        73156,
        73160,
        73168,
        73182,
        73190,
        73196,
        73210,
        73226,
        73234,
        73236,
        73250,
        73252,
        73256,
        73270,
        73282,
        73284,
        73296,
        73310,
        73318,
        73324,
        73346,
        73348,
        73352,
        73360,
        73374,
        73376,
        73404,
        73414,
        73420,
        73432,
        73454,
        73498,
        73518,
        73522,
        73524,
        73550,
        73564,
        73570,
        73572,
        73576,
        73590,
        73800,
        73822,
        73858,
        73860,
        73872,
        73886,
        73888,
        73916,
        73944,
        73970,
        73972,
        73992,
        74014,
        74016,
        74044,
        74048,
        74104,
        74118,
        74136,
        74160,
        74174,
        74210,
        74212,
        74216,
        74230,
        74244,
        74256,
        74270,
        74272,
        74360,
        74480,
        74502,
        74508,
        74544,
        74558,
        74592,
        74620,
        74638,
        74652,
        74680,
        74690,
        74696,
        74704,
        74726,
        74732,
        74782,
        74784,
        74812,
        74992,
        75232,
        75288,
        75326,
        75360,
        75388,
        75456,
        75512,
        75576,
        75632,
        75646,
        75650,
        75652,
        75664,
        75678,
        75680,
        75708,
        75718,
        75724,
        75736,
        75758,
        75808,
        75836,
        75840,
        75896,
        76016,
        76256,
        76736,
        76824,
        76848,
        76862,
        76896,
        76924,
        76992,
        77048,
        77296,
        77340,
        77368,
        77424,
        77438,
        77536,
        77564,
        77572,
        77576,
        77584,
        77600,
        77628,
        77632,
        77688,
        77702,
        77708,
        77720,
        77744,
        77758,
        77774,
        77788,
        77870,
        77902,
        77916,
        77922,
        77928,
        77966,
        77980,
        78008,
        78018,
        78024,
        78032,
        78046,
        78060,
        78074,
        78094,
        78136,
        78192,
        78206,
        78210,
        78212,
        78224,
        78238,
        78240,
        78268,
        78278,
        78284,
        78296,
        78322,
        78324,
        78350,
        78364,
        78448,
        78462,
        78560,
        78588,
        78600,
        78622,
        78624,
        78652,
        78656,
        78712,
        78726,
        78744,
        78768,
        78782,
        78798,
        78812,
        78818,
        78820,
        78824,
        78838,
        78862,
        78876,
        78904,
        78960,
        78974,
        79072,
        79100,
        79296,
        79352,
        79368,
        79376,
        79390,
        79392,
        79420,
        79424,
        79480,
        79600,
        79628,
        79640,
        79664,
        79678,
        79712,
        79740,
        79772,
        79800,
        79810,
        79812,
        79816,
        79824,
        79838,
        79846,
        79852,
        79894,
        79910,
        79916,
        79942,
        79948,
        79960,
        79982,
        79988,
        80006,
        80024,
        80048,
        80062,
        80078,
        80092,
        80098,
        80100,
        80104,
        80134,
        80140,
        80176,
        80190,
        80224,
        80252,
        80270,
        80284,
        80312,
        80328,
        80336,
        80350,
        80358,
        80364,
        80378,
        80390,
        80396,
        80408,
        80432,
        80446,
        80480,
        80508,
        80576,
        80632,
        80654,
        80668,
        80696,
        80752,
        80766,
        80776,
        80784,
        80798,
        80800,
        80828,
        80844,
        80856,
        80878,
        80882,
        80884,
        80914,
        80916,
        80930,
        80932,
        80936,
        80950,
        80962,
        80968,
        80976,
        80990,
        80998,
        81004,
        81026,
        81028,
        81040,
        81054,
        81056,
        81084,
        81094,
        81100,
        81112,
        81134,
        81154,
        81156,
        81160,
        81168,
        81182,
        81184,
        81212,
        81216,
        81272,
        81286,
        81292,
        81304,
        81328,
        81342,
        81358,
        81372,
        81380,
        81384,
        81398,
        81434,
        81454,
        81458,
        81460,
        81486,
        81500,
        81506,
        81508,
        81512,
        81526,
        81550,
        81564,
        81592,
        81602,
        81604,
        81608,
        81616,
        81630,
        81638,
        81644,
        81702,
        81708,
        81722,
        81734,
        81740,
        81752,
        81774,
        81778,
        81780,
        82050,
        82078,
        82080,
        82108,
        82180,
        82184,
        82192,
        82206,
        82208,
        82236,
        82240,
        82296,
        82316,
        82328,
        82352,
        82366,
        82402,
        82404,
        82408,
        82440,
        82448,
        82462,
        82464,
        82492,
        82496,
        82552,
        82672,
        82694,
        82700,
        82712,
        82736,
        82750,
        82784,
        82812,
        82830,
        82882,
        82884,
        82888,
        82896,
        82918,
        82924,
        82952,
        82960,
        82974,
        82976,
        83004,
        83008,
        83064,
        83184,
        83424,
        83468,
        83480,
        83504,
        83518,
        83552,
        83580,
        83648,
        83704,
        83740,
        83768,
        83824,
        83838,
        83842,
        83844,
        83848,
        83856,
        83872,
        83900,
        83910,
        83916,
        83928,
        83950,
        83984,
        84e3,
        84028,
        84032,
        84088,
        84208,
        84448,
        84928,
        85040,
        85054,
        85088,
        85116,
        85184,
        85240,
        85488,
        85560,
        85616,
        85630,
        85728,
        85756,
        85764,
        85768,
        85776,
        85790,
        85792,
        85820,
        85824,
        85880,
        85894,
        85900,
        85912,
        85936,
        85966,
        85980,
        86048,
        86080,
        86136,
        86256,
        86496,
        86976,
        88160,
        88188,
        88256,
        88312,
        88560,
        89056,
        89200,
        89214,
        89312,
        89340,
        89536,
        89592,
        89608,
        89616,
        89632,
        89664,
        89720,
        89840,
        89868,
        89880,
        89904,
        89952,
        89980,
        89998,
        90012,
        90040,
        90190,
        90204,
        90254,
        90268,
        90296,
        90306,
        90308,
        90312,
        90334,
        90382,
        90396,
        90424,
        90480,
        90494,
        90500,
        90504,
        90512,
        90526,
        90528,
        90556,
        90566,
        90572,
        90584,
        90610,
        90612,
        90638,
        90652,
        90680,
        90736,
        90750,
        90848,
        90876,
        90884,
        90888,
        90896,
        90910,
        90912,
        90940,
        90944,
        91e3,
        91014,
        91020,
        91032,
        91056,
        91070,
        91086,
        91100,
        91106,
        91108,
        91112,
        91126,
        91150,
        91164,
        91192,
        91248,
        91262,
        91360,
        91388,
        91584,
        91640,
        91664,
        91678,
        91680,
        91708,
        91712,
        91768,
        91888,
        91928,
        91952,
        91966,
        92e3,
        92028,
        92046,
        92060,
        92088,
        92098,
        92100,
        92104,
        92112,
        92126,
        92134,
        92140,
        92188,
        92216,
        92272,
        92384,
        92412,
        92608,
        92664,
        93168,
        93200,
        93214,
        93216,
        93244,
        93248,
        93304,
        93424,
        93664,
        93720,
        93744,
        93758,
        93792,
        93820,
        93888,
        93944,
        93980,
        94008,
        94064,
        94078,
        94084,
        94088,
        94096,
        94110,
        94112,
        94140,
        94150,
        94156,
        94168,
        94246,
        94252,
        94278,
        94284,
        94296,
        94318,
        94342,
        94348,
        94360,
        94384,
        94398,
        94414,
        94428,
        94440,
        94470,
        94476,
        94488,
        94512,
        94526,
        94560,
        94588,
        94606,
        94620,
        94648,
        94658,
        94660,
        94664,
        94672,
        94686,
        94694,
        94700,
        94714,
        94726,
        94732,
        94744,
        94768,
        94782,
        94816,
        94844,
        94912,
        94968,
        94990,
        95004,
        95032,
        95088,
        95102,
        95112,
        95120,
        95134,
        95136,
        95164,
        95180,
        95192,
        95214,
        95218,
        95220,
        95244,
        95256,
        95280,
        95294,
        95328,
        95356,
        95424,
        95480,
        95728,
        95758,
        95772,
        95800,
        95856,
        95870,
        95968,
        95996,
        96008,
        96016,
        96030,
        96032,
        96060,
        96064,
        96120,
        96152,
        96176,
        96190,
        96220,
        96226,
        96228,
        96232,
        96290,
        96292,
        96296,
        96310,
        96322,
        96324,
        96328,
        96336,
        96350,
        96358,
        96364,
        96386,
        96388,
        96392,
        96400,
        96414,
        96416,
        96444,
        96454,
        96460,
        96472,
        96494,
        96498,
        96500,
        96514,
        96516,
        96520,
        96528,
        96542,
        96544,
        96572,
        96576,
        96632,
        96646,
        96652,
        96664,
        96688,
        96702,
        96718,
        96732,
        96738,
        96740,
        96744,
        96758,
        96772,
        96776,
        96784,
        96798,
        96800,
        96828,
        96832,
        96888,
        97008,
        97030,
        97036,
        97048,
        97072,
        97086,
        97120,
        97148,
        97166,
        97180,
        97208,
        97220,
        97224,
        97232,
        97246,
        97254,
        97260,
        97326,
        97330,
        97332,
        97358,
        97372,
        97378,
        97380,
        97384,
        97398,
        97422,
        97436,
        97464,
        97474,
        97476,
        97480,
        97488,
        97502,
        97510,
        97516,
        97550,
        97564,
        97592,
        97648,
        97666,
        97668,
        97672,
        97680,
        97694,
        97696,
        97724,
        97734,
        97740,
        97752,
        97774,
        97830,
        97836,
        97850,
        97862,
        97868,
        97880,
        97902,
        97906,
        97908,
        97926,
        97932,
        97944,
        97968,
        97998,
        98012,
        98018,
        98020,
        98024,
        98038,
        98618,
        98674,
        98676,
        98838,
        98854,
        98874,
        98892,
        98904,
        98926,
        98930,
        98932,
        98968,
        99006,
        99042,
        99044,
        99048,
        99062,
        99166,
        99194,
        99246,
        99286,
        99350,
        99366,
        99372,
        99386,
        99398,
        99416,
        99438,
        99442,
        99444,
        99462,
        99504,
        99518,
        99534,
        99548,
        99554,
        99556,
        99560,
        99574,
        99590,
        99596,
        99608,
        99632,
        99646,
        99680,
        99708,
        99726,
        99740,
        99768,
        99778,
        99780,
        99784,
        99792,
        99806,
        99814,
        99820,
        99834,
        99858,
        99860,
        99874,
        99880,
        99894,
        99906,
        99920,
        99934,
        99962,
        99970,
        99972,
        99976,
        99984,
        99998,
        1e5,
        100028,
        100038,
        100044,
        100056,
        100078,
        100082,
        100084,
        100142,
        100174,
        100188,
        100246,
        100262,
        100268,
        100306,
        100308,
        100390,
        100396,
        100410,
        100422,
        100428,
        100440,
        100462,
        100466,
        100468,
        100486,
        100504,
        100528,
        100542,
        100558,
        100572,
        100578,
        100580,
        100584,
        100598,
        100620,
        100656,
        100670,
        100704,
        100732,
        100750,
        100792,
        100802,
        100808,
        100816,
        100830,
        100838,
        100844,
        100858,
        100888,
        100912,
        100926,
        100960,
        100988,
        101056,
        101112,
        101148,
        101176,
        101232,
        101246,
        101250,
        101252,
        101256,
        101264,
        101278,
        101280,
        101308,
        101318,
        101324,
        101336,
        101358,
        101362,
        101364,
        101410,
        101412,
        101416,
        101430,
        101442,
        101448,
        101456,
        101470,
        101478,
        101498,
        101506,
        101508,
        101520,
        101534,
        101536,
        101564,
        101580,
        101618,
        101620,
        101636,
        101640,
        101648,
        101662,
        101664,
        101692,
        101696,
        101752,
        101766,
        101784,
        101838,
        101858,
        101860,
        101864,
        101934,
        101938,
        101940,
        101966,
        101980,
        101986,
        101988,
        101992,
        102030,
        102044,
        102072,
        102082,
        102084,
        102088,
        102096,
        102138,
        102166,
        102182,
        102188,
        102214,
        102220,
        102232,
        102254,
        102282,
        102290,
        102292,
        102306,
        102308,
        102312,
        102326,
        102444,
        102458,
        102470,
        102476,
        102488,
        102514,
        102516,
        102534,
        102552,
        102576,
        102590,
        102606,
        102620,
        102626,
        102632,
        102646,
        102662,
        102668,
        102704,
        102718,
        102752,
        102780,
        102798,
        102812,
        102840,
        102850,
        102856,
        102864,
        102878,
        102886,
        102892,
        102906,
        102936,
        102974,
        103008,
        103036,
        103104,
        103160,
        103224,
        103280,
        103294,
        103298,
        103300,
        103312,
        103326,
        103328,
        103356,
        103366,
        103372,
        103384,
        103406,
        103410,
        103412,
        103472,
        103486,
        103520,
        103548,
        103616,
        103672,
        103920,
        103992,
        104048,
        104062,
        104160,
        104188,
        104194,
        104196,
        104200,
        104208,
        104224,
        104252,
        104256,
        104312,
        104326,
        104332,
        104344,
        104368,
        104382,
        104398,
        104412,
        104418,
        104420,
        104424,
        104482,
        104484,
        104514,
        104520,
        104528,
        104542,
        104550,
        104570,
        104578,
        104580,
        104592,
        104606,
        104608,
        104636,
        104652,
        104690,
        104692,
        104706,
        104712,
        104734,
        104736,
        104764,
        104768,
        104824,
        104838,
        104856,
        104910,
        104930,
        104932,
        104936,
        104968,
        104976,
        104990,
        104992,
        105020,
        105024,
        105080,
        105200,
        105240,
        105278,
        105312,
        105372,
        105410,
        105412,
        105416,
        105424,
        105446,
        105518,
        105524,
        105550,
        105564,
        105570,
        105572,
        105576,
        105614,
        105628,
        105656,
        105666,
        105672,
        105680,
        105702,
        105722,
        105742,
        105756,
        105784,
        105840,
        105854,
        105858,
        105860,
        105864,
        105872,
        105888,
        105932,
        105970,
        105972,
        106006,
        106022,
        106028,
        106054,
        106060,
        106072,
        106100,
        106118,
        106124,
        106136,
        106160,
        106174,
        106190,
        106210,
        106212,
        106216,
        106250,
        106258,
        106260,
        106274,
        106276,
        106280,
        106306,
        106308,
        106312,
        106320,
        106334,
        106348,
        106394,
        106414,
        106418,
        106420,
        106566,
        106572,
        106610,
        106612,
        106630,
        106636,
        106648,
        106672,
        106686,
        106722,
        106724,
        106728,
        106742,
        106758,
        106764,
        106776,
        106800,
        106814,
        106848,
        106876,
        106894,
        106908,
        106936,
        106946,
        106948,
        106952,
        106960,
        106974,
        106982,
        106988,
        107032,
        107056,
        107070,
        107104,
        107132,
        107200,
        107256,
        107292,
        107320,
        107376,
        107390,
        107394,
        107396,
        107400,
        107408,
        107422,
        107424,
        107452,
        107462,
        107468,
        107480,
        107502,
        107506,
        107508,
        107544,
        107568,
        107582,
        107616,
        107644,
        107712,
        107768,
        108016,
        108060,
        108088,
        108144,
        108158,
        108256,
        108284,
        108290,
        108292,
        108296,
        108304,
        108318,
        108320,
        108348,
        108352,
        108408,
        108422,
        108428,
        108440,
        108464,
        108478,
        108494,
        108508,
        108514,
        108516,
        108520,
        108592,
        108640,
        108668,
        108736,
        108792,
        109040,
        109536,
        109680,
        109694,
        109792,
        109820,
        110016,
        110072,
        110084,
        110088,
        110096,
        110112,
        110140,
        110144,
        110200,
        110320,
        110342,
        110348,
        110360,
        110384,
        110398,
        110432,
        110460,
        110478,
        110492,
        110520,
        110532,
        110536,
        110544,
        110558,
        110658,
        110686,
        110714,
        110722,
        110724,
        110728,
        110736,
        110750,
        110752,
        110780,
        110796,
        110834,
        110836,
        110850,
        110852,
        110856,
        110864,
        110878,
        110880,
        110908,
        110912,
        110968,
        110982,
        111e3,
        111054,
        111074,
        111076,
        111080,
        111108,
        111112,
        111120,
        111134,
        111136,
        111164,
        111168,
        111224,
        111344,
        111372,
        111422,
        111456,
        111516,
        111554,
        111556,
        111560,
        111568,
        111590,
        111632,
        111646,
        111648,
        111676,
        111680,
        111736,
        111856,
        112096,
        112152,
        112224,
        112252,
        112320,
        112440,
        112514,
        112516,
        112520,
        112528,
        112542,
        112544,
        112588,
        112686,
        112718,
        112732,
        112782,
        112796,
        112824,
        112834,
        112836,
        112840,
        112848,
        112870,
        112890,
        112910,
        112924,
        112952,
        113008,
        113022,
        113026,
        113028,
        113032,
        113040,
        113054,
        113056,
        113100,
        113138,
        113140,
        113166,
        113180,
        113208,
        113264,
        113278,
        113376,
        113404,
        113416,
        113424,
        113440,
        113468,
        113472,
        113560,
        113614,
        113634,
        113636,
        113640,
        113686,
        113702,
        113708,
        113734,
        113740,
        113752,
        113778,
        113780,
        113798,
        113804,
        113816,
        113840,
        113854,
        113870,
        113890,
        113892,
        113896,
        113926,
        113932,
        113944,
        113968,
        113982,
        114016,
        114044,
        114076,
        114114,
        114116,
        114120,
        114128,
        114150,
        114170,
        114194,
        114196,
        114210,
        114212,
        114216,
        114242,
        114244,
        114248,
        114256,
        114270,
        114278,
        114306,
        114308,
        114312,
        114320,
        114334,
        114336,
        114364,
        114380,
        114420,
        114458,
        114478,
        114482,
        114484,
        114510,
        114524,
        114530,
        114532,
        114536,
        114842,
        114866,
        114868,
        114970,
        114994,
        114996,
        115042,
        115044,
        115048,
        115062,
        115130,
        115226,
        115250,
        115252,
        115278,
        115292,
        115298,
        115300,
        115304,
        115318,
        115342,
        115394,
        115396,
        115400,
        115408,
        115422,
        115430,
        115436,
        115450,
        115478,
        115494,
        115514,
        115526,
        115532,
        115570,
        115572,
        115738,
        115758,
        115762,
        115764,
        115790,
        115804,
        115810,
        115812,
        115816,
        115830,
        115854,
        115868,
        115896,
        115906,
        115912,
        115920,
        115934,
        115942,
        115948,
        115962,
        115996,
        116024,
        116080,
        116094,
        116098,
        116100,
        116104,
        116112,
        116126,
        116128,
        116156,
        116166,
        116172,
        116184,
        116206,
        116210,
        116212,
        116246,
        116262,
        116268,
        116282,
        116294,
        116300,
        116312,
        116334,
        116338,
        116340,
        116358,
        116364,
        116376,
        116400,
        116414,
        116430,
        116444,
        116450,
        116452,
        116456,
        116498,
        116500,
        116514,
        116520,
        116534,
        116546,
        116548,
        116552,
        116560,
        116574,
        116582,
        116588,
        116602,
        116654,
        116694,
        116714,
        116762,
        116782,
        116786,
        116788,
        116814,
        116828,
        116834,
        116836,
        116840,
        116854,
        116878,
        116892,
        116920,
        116930,
        116936,
        116944,
        116958,
        116966,
        116972,
        116986,
        117006,
        117048,
        117104,
        117118,
        117122,
        117124,
        117136,
        117150,
        117152,
        117180,
        117190,
        117196,
        117208,
        117230,
        117234,
        117236,
        117304,
        117360,
        117374,
        117472,
        117500,
        117506,
        117508,
        117512,
        117520,
        117536,
        117564,
        117568,
        117624,
        117638,
        117644,
        117656,
        117680,
        117694,
        117710,
        117724,
        117730,
        117732,
        117736,
        117750,
        117782,
        117798,
        117804,
        117818,
        117830,
        117848,
        117874,
        117876,
        117894,
        117936,
        117950,
        117966,
        117986,
        117988,
        117992,
        118022,
        118028,
        118040,
        118064,
        118078,
        118112,
        118140,
        118172,
        118210,
        118212,
        118216,
        118224,
        118238,
        118246,
        118266,
        118306,
        118312,
        118338,
        118352,
        118366,
        118374,
        118394,
        118402,
        118404,
        118408,
        118416,
        118430,
        118432,
        118460,
        118476,
        118514,
        118516,
        118574,
        118578,
        118580,
        118606,
        118620,
        118626,
        118628,
        118632,
        118678,
        118694,
        118700,
        118730,
        118738,
        118740,
        118830,
        118834,
        118836,
        118862,
        118876,
        118882,
        118884,
        118888,
        118902,
        118926,
        118940,
        118968,
        118978,
        118980,
        118984,
        118992,
        119006,
        119014,
        119020,
        119034,
        119068,
        119096,
        119152,
        119166,
        119170,
        119172,
        119176,
        119184,
        119198,
        119200,
        119228,
        119238,
        119244,
        119256,
        119278,
        119282,
        119284,
        119324,
        119352,
        119408,
        119422,
        119520,
        119548,
        119554,
        119556,
        119560,
        119568,
        119582,
        119584,
        119612,
        119616,
        119672,
        119686,
        119692,
        119704,
        119728,
        119742,
        119758,
        119772,
        119778,
        119780,
        119784,
        119798,
        119920,
        119934,
        120032,
        120060,
        120256,
        120312,
        120324,
        120328,
        120336,
        120352,
        120384,
        120440,
        120560,
        120582,
        120588,
        120600,
        120624,
        120638,
        120672,
        120700,
        120718,
        120732,
        120760,
        120770,
        120772,
        120776,
        120784,
        120798,
        120806,
        120812,
        120870,
        120876,
        120890,
        120902,
        120908,
        120920,
        120946,
        120948,
        120966,
        120972,
        120984,
        121008,
        121022,
        121038,
        121058,
        121060,
        121064,
        121078,
        121100,
        121112,
        121136,
        121150,
        121184,
        121212,
        121244,
        121282,
        121284,
        121288,
        121296,
        121318,
        121338,
        121356,
        121368,
        121392,
        121406,
        121440,
        121468,
        121536,
        121592,
        121656,
        121730,
        121732,
        121736,
        121744,
        121758,
        121760,
        121804,
        121842,
        121844,
        121890,
        121922,
        121924,
        121928,
        121936,
        121950,
        121958,
        121978,
        121986,
        121988,
        121992,
        122e3,
        122014,
        122016,
        122044,
        122060,
        122098,
        122100,
        122116,
        122120,
        122128,
        122142,
        122144,
        122172,
        122176,
        122232,
        122246,
        122264,
        122318,
        122338,
        122340,
        122344,
        122414,
        122418,
        122420,
        122446,
        122460,
        122466,
        122468,
        122472,
        122510,
        122524,
        122552,
        122562,
        122564,
        122568,
        122576,
        122598,
        122618,
        122646,
        122662,
        122668,
        122694,
        122700,
        122712,
        122738,
        122740,
        122762,
        122770,
        122772,
        122786,
        122788,
        122792,
        123018,
        123026,
        123028,
        123042,
        123044,
        123048,
        123062,
        123098,
        123146,
        123154,
        123156,
        123170,
        123172,
        123176,
        123190,
        123202,
        123204,
        123208,
        123216,
        123238,
        123244,
        123258,
        123290,
        123314,
        123316,
        123402,
        123410,
        123412,
        123426,
        123428,
        123432,
        123446,
        123458,
        123464,
        123472,
        123486,
        123494,
        123500,
        123514,
        123522,
        123524,
        123528,
        123536,
        123552,
        123580,
        123590,
        123596,
        123608,
        123630,
        123634,
        123636,
        123674,
        123698,
        123700,
        123740,
        123746,
        123748,
        123752,
        123834,
        123914,
        123922,
        123924,
        123938,
        123944,
        123958,
        123970,
        123976,
        123984,
        123998,
        124006,
        124012,
        124026,
        124034,
        124036,
        124048,
        124062,
        124064,
        124092,
        124102,
        124108,
        124120,
        124142,
        124146,
        124148,
        124162,
        124164,
        124168,
        124176,
        124190,
        124192,
        124220,
        124224,
        124280,
        124294,
        124300,
        124312,
        124336,
        124350,
        124366,
        124380,
        124386,
        124388,
        124392,
        124406,
        124442,
        124462,
        124466,
        124468,
        124494,
        124508,
        124514,
        124520,
        124558,
        124572,
        124600,
        124610,
        124612,
        124616,
        124624,
        124646,
        124666,
        124694,
        124710,
        124716,
        124730,
        124742,
        124748,
        124760,
        124786,
        124788,
        124818,
        124820,
        124834,
        124836,
        124840,
        124854,
        124946,
        124948,
        124962,
        124964,
        124968,
        124982,
        124994,
        124996,
        125e3,
        125008,
        125022,
        125030,
        125036,
        125050,
        125058,
        125060,
        125064,
        125072,
        125086,
        125088,
        125116,
        125126,
        125132,
        125144,
        125166,
        125170,
        125172,
        125186,
        125188,
        125192,
        125200,
        125216,
        125244,
        125248,
        125304,
        125318,
        125324,
        125336,
        125360,
        125374,
        125390,
        125404,
        125410,
        125412,
        125416,
        125430,
        125444,
        125448,
        125456,
        125472,
        125504,
        125560,
        125680,
        125702,
        125708,
        125720,
        125744,
        125758,
        125792,
        125820,
        125838,
        125852,
        125880,
        125890,
        125892,
        125896,
        125904,
        125918,
        125926,
        125932,
        125978,
        125998,
        126002,
        126004,
        126030,
        126044,
        126050,
        126052,
        126056,
        126094,
        126108,
        126136,
        126146,
        126148,
        126152,
        126160,
        126182,
        126202,
        126222,
        126236,
        126264,
        126320,
        126334,
        126338,
        126340,
        126344,
        126352,
        126366,
        126368,
        126412,
        126450,
        126452,
        126486,
        126502,
        126508,
        126522,
        126534,
        126540,
        126552,
        126574,
        126578,
        126580,
        126598,
        126604,
        126616,
        126640,
        126654,
        126670,
        126684,
        126690,
        126692,
        126696,
        126738,
        126754,
        126756,
        126760,
        126774,
        126786,
        126788,
        126792,
        126800,
        126814,
        126822,
        126828,
        126842,
        126894,
        126898,
        126900,
        126934,
        127126,
        127142,
        127148,
        127162,
        127178,
        127186,
        127188,
        127254,
        127270,
        127276,
        127290,
        127302,
        127308,
        127320,
        127342,
        127346,
        127348,
        127370,
        127378,
        127380,
        127394,
        127396,
        127400,
        127450,
        127510,
        127526,
        127532,
        127546,
        127558,
        127576,
        127598,
        127602,
        127604,
        127622,
        127628,
        127640,
        127664,
        127678,
        127694,
        127708,
        127714,
        127716,
        127720,
        127734,
        127754,
        127762,
        127764,
        127778,
        127784,
        127810,
        127812,
        127816,
        127824,
        127838,
        127846,
        127866,
        127898,
        127918,
        127922,
        127924,
        128022,
        128038,
        128044,
        128058,
        128070,
        128076,
        128088,
        128110,
        128114,
        128116,
        128134,
        128140,
        128152,
        128176,
        128190,
        128206,
        128220,
        128226,
        128228,
        128232,
        128246,
        128262,
        128268,
        128280,
        128304,
        128318,
        128352,
        128380,
        128398,
        128412,
        128440,
        128450,
        128452,
        128456,
        128464,
        128478,
        128486,
        128492,
        128506,
        128522,
        128530,
        128532,
        128546,
        128548,
        128552,
        128566,
        128578,
        128580,
        128584,
        128592,
        128606,
        128614,
        128634,
        128642,
        128644,
        128648,
        128656,
        128670,
        128672,
        128700,
        128716,
        128754,
        128756,
        128794,
        128814,
        128818,
        128820,
        128846,
        128860,
        128866,
        128868,
        128872,
        128886,
        128918,
        128934,
        128940,
        128954,
        128978,
        128980,
        129178,
        129198,
        129202,
        129204,
        129238,
        129258,
        129306,
        129326,
        129330,
        129332,
        129358,
        129372,
        129378,
        129380,
        129384,
        129398,
        129430,
        129446,
        129452,
        129466,
        129482,
        129490,
        129492,
        129562,
        129582,
        129586,
        129588,
        129614,
        129628,
        129634,
        129636,
        129640,
        129654,
        129678,
        129692,
        129720,
        129730,
        129732,
        129736,
        129744,
        129758,
        129766,
        129772,
        129814,
        129830,
        129836,
        129850,
        129862,
        129868,
        129880,
        129902,
        129906,
        129908,
        129930,
        129938,
        129940,
        129954,
        129956,
        129960,
        129974,
        130010
      ]), ae.CODEWORD_TABLE = Int32Array.from([
        2627,
        1819,
        2622,
        2621,
        1813,
        1812,
        2729,
        2724,
        2723,
        2779,
        2774,
        2773,
        902,
        896,
        908,
        868,
        865,
        861,
        859,
        2511,
        873,
        871,
        1780,
        835,
        2493,
        825,
        2491,
        842,
        837,
        844,
        1764,
        1762,
        811,
        810,
        809,
        2483,
        807,
        2482,
        806,
        2480,
        815,
        814,
        813,
        812,
        2484,
        817,
        816,
        1745,
        1744,
        1742,
        1746,
        2655,
        2637,
        2635,
        2626,
        2625,
        2623,
        2628,
        1820,
        2752,
        2739,
        2737,
        2728,
        2727,
        2725,
        2730,
        2785,
        2783,
        2778,
        2777,
        2775,
        2780,
        787,
        781,
        747,
        739,
        736,
        2413,
        754,
        752,
        1719,
        692,
        689,
        681,
        2371,
        678,
        2369,
        700,
        697,
        694,
        703,
        1688,
        1686,
        642,
        638,
        2343,
        631,
        2341,
        627,
        2338,
        651,
        646,
        643,
        2345,
        654,
        652,
        1652,
        1650,
        1647,
        1654,
        601,
        599,
        2322,
        596,
        2321,
        594,
        2319,
        2317,
        611,
        610,
        608,
        606,
        2324,
        603,
        2323,
        615,
        614,
        612,
        1617,
        1616,
        1614,
        1612,
        616,
        1619,
        1618,
        2575,
        2538,
        2536,
        905,
        901,
        898,
        909,
        2509,
        2507,
        2504,
        870,
        867,
        864,
        860,
        2512,
        875,
        872,
        1781,
        2490,
        2489,
        2487,
        2485,
        1748,
        836,
        834,
        832,
        830,
        2494,
        827,
        2492,
        843,
        841,
        839,
        845,
        1765,
        1763,
        2701,
        2676,
        2674,
        2653,
        2648,
        2656,
        2634,
        2633,
        2631,
        2629,
        1821,
        2638,
        2636,
        2770,
        2763,
        2761,
        2750,
        2745,
        2753,
        2736,
        2735,
        2733,
        2731,
        1848,
        2740,
        2738,
        2786,
        2784,
        591,
        588,
        576,
        569,
        566,
        2296,
        1590,
        537,
        534,
        526,
        2276,
        522,
        2274,
        545,
        542,
        539,
        548,
        1572,
        1570,
        481,
        2245,
        466,
        2242,
        462,
        2239,
        492,
        485,
        482,
        2249,
        496,
        494,
        1534,
        1531,
        1528,
        1538,
        413,
        2196,
        406,
        2191,
        2188,
        425,
        419,
        2202,
        415,
        2199,
        432,
        430,
        427,
        1472,
        1467,
        1464,
        433,
        1476,
        1474,
        368,
        367,
        2160,
        365,
        2159,
        362,
        2157,
        2155,
        2152,
        378,
        377,
        375,
        2166,
        372,
        2165,
        369,
        2162,
        383,
        381,
        379,
        2168,
        1419,
        1418,
        1416,
        1414,
        385,
        1411,
        384,
        1423,
        1422,
        1420,
        1424,
        2461,
        802,
        2441,
        2439,
        790,
        786,
        783,
        794,
        2409,
        2406,
        2403,
        750,
        742,
        738,
        2414,
        756,
        753,
        1720,
        2367,
        2365,
        2362,
        2359,
        1663,
        693,
        691,
        684,
        2373,
        680,
        2370,
        702,
        699,
        696,
        704,
        1690,
        1687,
        2337,
        2336,
        2334,
        2332,
        1624,
        2329,
        1622,
        640,
        637,
        2344,
        634,
        2342,
        630,
        2340,
        650,
        648,
        645,
        2346,
        655,
        653,
        1653,
        1651,
        1649,
        1655,
        2612,
        2597,
        2595,
        2571,
        2568,
        2565,
        2576,
        2534,
        2529,
        2526,
        1787,
        2540,
        2537,
        907,
        904,
        900,
        910,
        2503,
        2502,
        2500,
        2498,
        1768,
        2495,
        1767,
        2510,
        2508,
        2506,
        869,
        866,
        863,
        2513,
        876,
        874,
        1782,
        2720,
        2713,
        2711,
        2697,
        2694,
        2691,
        2702,
        2672,
        2670,
        2664,
        1828,
        2678,
        2675,
        2647,
        2646,
        2644,
        2642,
        1823,
        2639,
        1822,
        2654,
        2652,
        2650,
        2657,
        2771,
        1855,
        2765,
        2762,
        1850,
        1849,
        2751,
        2749,
        2747,
        2754,
        353,
        2148,
        344,
        342,
        336,
        2142,
        332,
        2140,
        345,
        1375,
        1373,
        306,
        2130,
        299,
        2128,
        295,
        2125,
        319,
        314,
        311,
        2132,
        1354,
        1352,
        1349,
        1356,
        262,
        257,
        2101,
        253,
        2096,
        2093,
        274,
        273,
        267,
        2107,
        263,
        2104,
        280,
        278,
        275,
        1316,
        1311,
        1308,
        1320,
        1318,
        2052,
        202,
        2050,
        2044,
        2040,
        219,
        2063,
        212,
        2060,
        208,
        2055,
        224,
        221,
        2066,
        1260,
        1258,
        1252,
        231,
        1248,
        229,
        1266,
        1264,
        1261,
        1268,
        155,
        1998,
        153,
        1996,
        1994,
        1991,
        1988,
        165,
        164,
        2007,
        162,
        2006,
        159,
        2003,
        2e3,
        172,
        171,
        169,
        2012,
        166,
        2010,
        1186,
        1184,
        1182,
        1179,
        175,
        1176,
        173,
        1192,
        1191,
        1189,
        1187,
        176,
        1194,
        1193,
        2313,
        2307,
        2305,
        592,
        589,
        2294,
        2292,
        2289,
        578,
        572,
        568,
        2297,
        580,
        1591,
        2272,
        2267,
        2264,
        1547,
        538,
        536,
        529,
        2278,
        525,
        2275,
        547,
        544,
        541,
        1574,
        1571,
        2237,
        2235,
        2229,
        1493,
        2225,
        1489,
        478,
        2247,
        470,
        2244,
        465,
        2241,
        493,
        488,
        484,
        2250,
        498,
        495,
        1536,
        1533,
        1530,
        1539,
        2187,
        2186,
        2184,
        2182,
        1432,
        2179,
        1430,
        2176,
        1427,
        414,
        412,
        2197,
        409,
        2195,
        405,
        2193,
        2190,
        426,
        424,
        421,
        2203,
        418,
        2201,
        431,
        429,
        1473,
        1471,
        1469,
        1466,
        434,
        1477,
        1475,
        2478,
        2472,
        2470,
        2459,
        2457,
        2454,
        2462,
        803,
        2437,
        2432,
        2429,
        1726,
        2443,
        2440,
        792,
        789,
        785,
        2401,
        2399,
        2393,
        1702,
        2389,
        1699,
        2411,
        2408,
        2405,
        745,
        741,
        2415,
        758,
        755,
        1721,
        2358,
        2357,
        2355,
        2353,
        1661,
        2350,
        1660,
        2347,
        1657,
        2368,
        2366,
        2364,
        2361,
        1666,
        690,
        687,
        2374,
        683,
        2372,
        701,
        698,
        705,
        1691,
        1689,
        2619,
        2617,
        2610,
        2608,
        2605,
        2613,
        2593,
        2588,
        2585,
        1803,
        2599,
        2596,
        2563,
        2561,
        2555,
        1797,
        2551,
        1795,
        2573,
        2570,
        2567,
        2577,
        2525,
        2524,
        2522,
        2520,
        1786,
        2517,
        1785,
        2514,
        1783,
        2535,
        2533,
        2531,
        2528,
        1788,
        2541,
        2539,
        906,
        903,
        911,
        2721,
        1844,
        2715,
        2712,
        1838,
        1836,
        2699,
        2696,
        2693,
        2703,
        1827,
        1826,
        1824,
        2673,
        2671,
        2669,
        2666,
        1829,
        2679,
        2677,
        1858,
        1857,
        2772,
        1854,
        1853,
        1851,
        1856,
        2766,
        2764,
        143,
        1987,
        139,
        1986,
        135,
        133,
        131,
        1984,
        128,
        1983,
        125,
        1981,
        138,
        137,
        136,
        1985,
        1133,
        1132,
        1130,
        112,
        110,
        1974,
        107,
        1973,
        104,
        1971,
        1969,
        122,
        121,
        119,
        117,
        1977,
        114,
        1976,
        124,
        1115,
        1114,
        1112,
        1110,
        1117,
        1116,
        84,
        83,
        1953,
        81,
        1952,
        78,
        1950,
        1948,
        1945,
        94,
        93,
        91,
        1959,
        88,
        1958,
        85,
        1955,
        99,
        97,
        95,
        1961,
        1086,
        1085,
        1083,
        1081,
        1078,
        100,
        1090,
        1089,
        1087,
        1091,
        49,
        47,
        1917,
        44,
        1915,
        1913,
        1910,
        1907,
        59,
        1926,
        56,
        1925,
        53,
        1922,
        1919,
        66,
        64,
        1931,
        61,
        1929,
        1042,
        1040,
        1038,
        71,
        1035,
        70,
        1032,
        68,
        1048,
        1047,
        1045,
        1043,
        1050,
        1049,
        12,
        10,
        1869,
        1867,
        1864,
        1861,
        21,
        1880,
        19,
        1877,
        1874,
        1871,
        28,
        1888,
        25,
        1886,
        22,
        1883,
        982,
        980,
        977,
        974,
        32,
        30,
        991,
        989,
        987,
        984,
        34,
        995,
        994,
        992,
        2151,
        2150,
        2147,
        2146,
        2144,
        356,
        355,
        354,
        2149,
        2139,
        2138,
        2136,
        2134,
        1359,
        343,
        341,
        338,
        2143,
        335,
        2141,
        348,
        347,
        346,
        1376,
        1374,
        2124,
        2123,
        2121,
        2119,
        1326,
        2116,
        1324,
        310,
        308,
        305,
        2131,
        302,
        2129,
        298,
        2127,
        320,
        318,
        316,
        313,
        2133,
        322,
        321,
        1355,
        1353,
        1351,
        1357,
        2092,
        2091,
        2089,
        2087,
        1276,
        2084,
        1274,
        2081,
        1271,
        259,
        2102,
        256,
        2100,
        252,
        2098,
        2095,
        272,
        269,
        2108,
        266,
        2106,
        281,
        279,
        277,
        1317,
        1315,
        1313,
        1310,
        282,
        1321,
        1319,
        2039,
        2037,
        2035,
        2032,
        1203,
        2029,
        1200,
        1197,
        207,
        2053,
        205,
        2051,
        201,
        2049,
        2046,
        2043,
        220,
        218,
        2064,
        215,
        2062,
        211,
        2059,
        228,
        226,
        223,
        2069,
        1259,
        1257,
        1254,
        232,
        1251,
        230,
        1267,
        1265,
        1263,
        2316,
        2315,
        2312,
        2311,
        2309,
        2314,
        2304,
        2303,
        2301,
        2299,
        1593,
        2308,
        2306,
        590,
        2288,
        2287,
        2285,
        2283,
        1578,
        2280,
        1577,
        2295,
        2293,
        2291,
        579,
        577,
        574,
        571,
        2298,
        582,
        581,
        1592,
        2263,
        2262,
        2260,
        2258,
        1545,
        2255,
        1544,
        2252,
        1541,
        2273,
        2271,
        2269,
        2266,
        1550,
        535,
        532,
        2279,
        528,
        2277,
        546,
        543,
        549,
        1575,
        1573,
        2224,
        2222,
        2220,
        1486,
        2217,
        1485,
        2214,
        1482,
        1479,
        2238,
        2236,
        2234,
        2231,
        1496,
        2228,
        1492,
        480,
        477,
        2248,
        473,
        2246,
        469,
        2243,
        490,
        487,
        2251,
        497,
        1537,
        1535,
        1532,
        2477,
        2476,
        2474,
        2479,
        2469,
        2468,
        2466,
        2464,
        1730,
        2473,
        2471,
        2453,
        2452,
        2450,
        2448,
        1729,
        2445,
        1728,
        2460,
        2458,
        2456,
        2463,
        805,
        804,
        2428,
        2427,
        2425,
        2423,
        1725,
        2420,
        1724,
        2417,
        1722,
        2438,
        2436,
        2434,
        2431,
        1727,
        2444,
        2442,
        793,
        791,
        788,
        795,
        2388,
        2386,
        2384,
        1697,
        2381,
        1696,
        2378,
        1694,
        1692,
        2402,
        2400,
        2398,
        2395,
        1703,
        2392,
        1701,
        2412,
        2410,
        2407,
        751,
        748,
        744,
        2416,
        759,
        757,
        1807,
        2620,
        2618,
        1806,
        1805,
        2611,
        2609,
        2607,
        2614,
        1802,
        1801,
        1799,
        2594,
        2592,
        2590,
        2587,
        1804,
        2600,
        2598,
        1794,
        1793,
        1791,
        1789,
        2564,
        2562,
        2560,
        2557,
        1798,
        2554,
        1796,
        2574,
        2572,
        2569,
        2578,
        1847,
        1846,
        2722,
        1843,
        1842,
        1840,
        1845,
        2716,
        2714,
        1835,
        1834,
        1832,
        1830,
        1839,
        1837,
        2700,
        2698,
        2695,
        2704,
        1817,
        1811,
        1810,
        897,
        862,
        1777,
        829,
        826,
        838,
        1760,
        1758,
        808,
        2481,
        1741,
        1740,
        1738,
        1743,
        2624,
        1818,
        2726,
        2776,
        782,
        740,
        737,
        1715,
        686,
        679,
        695,
        1682,
        1680,
        639,
        628,
        2339,
        647,
        644,
        1645,
        1643,
        1640,
        1648,
        602,
        600,
        597,
        595,
        2320,
        593,
        2318,
        609,
        607,
        604,
        1611,
        1610,
        1608,
        1606,
        613,
        1615,
        1613,
        2328,
        926,
        924,
        892,
        886,
        899,
        857,
        850,
        2505,
        1778,
        824,
        823,
        821,
        819,
        2488,
        818,
        2486,
        833,
        831,
        828,
        840,
        1761,
        1759,
        2649,
        2632,
        2630,
        2746,
        2734,
        2732,
        2782,
        2781,
        570,
        567,
        1587,
        531,
        527,
        523,
        540,
        1566,
        1564,
        476,
        467,
        463,
        2240,
        486,
        483,
        1524,
        1521,
        1518,
        1529,
        411,
        403,
        2192,
        399,
        2189,
        423,
        416,
        1462,
        1457,
        1454,
        428,
        1468,
        1465,
        2210,
        366,
        363,
        2158,
        360,
        2156,
        357,
        2153,
        376,
        373,
        370,
        2163,
        1410,
        1409,
        1407,
        1405,
        382,
        1402,
        380,
        1417,
        1415,
        1412,
        1421,
        2175,
        2174,
        777,
        774,
        771,
        784,
        732,
        725,
        722,
        2404,
        743,
        1716,
        676,
        674,
        668,
        2363,
        665,
        2360,
        685,
        1684,
        1681,
        626,
        624,
        622,
        2335,
        620,
        2333,
        617,
        2330,
        641,
        635,
        649,
        1646,
        1644,
        1642,
        2566,
        928,
        925,
        2530,
        2527,
        894,
        891,
        888,
        2501,
        2499,
        2496,
        858,
        856,
        854,
        851,
        1779,
        2692,
        2668,
        2665,
        2645,
        2643,
        2640,
        2651,
        2768,
        2759,
        2757,
        2744,
        2743,
        2741,
        2748,
        352,
        1382,
        340,
        337,
        333,
        1371,
        1369,
        307,
        300,
        296,
        2126,
        315,
        312,
        1347,
        1342,
        1350,
        261,
        258,
        250,
        2097,
        246,
        2094,
        271,
        268,
        264,
        1306,
        1301,
        1298,
        276,
        1312,
        1309,
        2115,
        203,
        2048,
        195,
        2045,
        191,
        2041,
        213,
        209,
        2056,
        1246,
        1244,
        1238,
        225,
        1234,
        222,
        1256,
        1253,
        1249,
        1262,
        2080,
        2079,
        154,
        1997,
        150,
        1995,
        147,
        1992,
        1989,
        163,
        160,
        2004,
        156,
        2001,
        1175,
        1174,
        1172,
        1170,
        1167,
        170,
        1164,
        167,
        1185,
        1183,
        1180,
        1177,
        174,
        1190,
        1188,
        2025,
        2024,
        2022,
        587,
        586,
        564,
        559,
        556,
        2290,
        573,
        1588,
        520,
        518,
        512,
        2268,
        508,
        2265,
        530,
        1568,
        1565,
        461,
        457,
        2233,
        450,
        2230,
        446,
        2226,
        479,
        471,
        489,
        1526,
        1523,
        1520,
        397,
        395,
        2185,
        392,
        2183,
        389,
        2180,
        2177,
        410,
        2194,
        402,
        422,
        1463,
        1461,
        1459,
        1456,
        1470,
        2455,
        799,
        2433,
        2430,
        779,
        776,
        773,
        2397,
        2394,
        2390,
        734,
        728,
        724,
        746,
        1717,
        2356,
        2354,
        2351,
        2348,
        1658,
        677,
        675,
        673,
        670,
        667,
        688,
        1685,
        1683,
        2606,
        2589,
        2586,
        2559,
        2556,
        2552,
        927,
        2523,
        2521,
        2518,
        2515,
        1784,
        2532,
        895,
        893,
        890,
        2718,
        2709,
        2707,
        2689,
        2687,
        2684,
        2663,
        2662,
        2660,
        2658,
        1825,
        2667,
        2769,
        1852,
        2760,
        2758,
        142,
        141,
        1139,
        1138,
        134,
        132,
        129,
        126,
        1982,
        1129,
        1128,
        1126,
        1131,
        113,
        111,
        108,
        105,
        1972,
        101,
        1970,
        120,
        118,
        115,
        1109,
        1108,
        1106,
        1104,
        123,
        1113,
        1111,
        82,
        79,
        1951,
        75,
        1949,
        72,
        1946,
        92,
        89,
        86,
        1956,
        1077,
        1076,
        1074,
        1072,
        98,
        1069,
        96,
        1084,
        1082,
        1079,
        1088,
        1968,
        1967,
        48,
        45,
        1916,
        42,
        1914,
        39,
        1911,
        1908,
        60,
        57,
        54,
        1923,
        50,
        1920,
        1031,
        1030,
        1028,
        1026,
        67,
        1023,
        65,
        1020,
        62,
        1041,
        1039,
        1036,
        1033,
        69,
        1046,
        1044,
        1944,
        1943,
        1941,
        11,
        9,
        1868,
        7,
        1865,
        1862,
        1859,
        20,
        1878,
        16,
        1875,
        13,
        1872,
        970,
        968,
        966,
        963,
        29,
        960,
        26,
        23,
        983,
        981,
        978,
        975,
        33,
        971,
        31,
        990,
        988,
        985,
        1906,
        1904,
        1902,
        993,
        351,
        2145,
        1383,
        331,
        330,
        328,
        326,
        2137,
        323,
        2135,
        339,
        1372,
        1370,
        294,
        293,
        291,
        289,
        2122,
        286,
        2120,
        283,
        2117,
        309,
        303,
        317,
        1348,
        1346,
        1344,
        245,
        244,
        242,
        2090,
        239,
        2088,
        236,
        2085,
        2082,
        260,
        2099,
        249,
        270,
        1307,
        1305,
        1303,
        1300,
        1314,
        189,
        2038,
        186,
        2036,
        183,
        2033,
        2030,
        2026,
        206,
        198,
        2047,
        194,
        216,
        1247,
        1245,
        1243,
        1240,
        227,
        1237,
        1255,
        2310,
        2302,
        2300,
        2286,
        2284,
        2281,
        565,
        563,
        561,
        558,
        575,
        1589,
        2261,
        2259,
        2256,
        2253,
        1542,
        521,
        519,
        517,
        514,
        2270,
        511,
        533,
        1569,
        1567,
        2223,
        2221,
        2218,
        2215,
        1483,
        2211,
        1480,
        459,
        456,
        453,
        2232,
        449,
        474,
        491,
        1527,
        1525,
        1522,
        2475,
        2467,
        2465,
        2451,
        2449,
        2446,
        801,
        800,
        2426,
        2424,
        2421,
        2418,
        1723,
        2435,
        780,
        778,
        775,
        2387,
        2385,
        2382,
        2379,
        1695,
        2375,
        1693,
        2396,
        735,
        733,
        730,
        727,
        749,
        1718,
        2616,
        2615,
        2604,
        2603,
        2601,
        2584,
        2583,
        2581,
        2579,
        1800,
        2591,
        2550,
        2549,
        2547,
        2545,
        1792,
        2542,
        1790,
        2558,
        929,
        2719,
        1841,
        2710,
        2708,
        1833,
        1831,
        2690,
        2688,
        2686,
        1815,
        1809,
        1808,
        1774,
        1756,
        1754,
        1737,
        1736,
        1734,
        1739,
        1816,
        1711,
        1676,
        1674,
        633,
        629,
        1638,
        1636,
        1633,
        1641,
        598,
        1605,
        1604,
        1602,
        1600,
        605,
        1609,
        1607,
        2327,
        887,
        853,
        1775,
        822,
        820,
        1757,
        1755,
        1584,
        524,
        1560,
        1558,
        468,
        464,
        1514,
        1511,
        1508,
        1519,
        408,
        404,
        400,
        1452,
        1447,
        1444,
        417,
        1458,
        1455,
        2208,
        364,
        361,
        358,
        2154,
        1401,
        1400,
        1398,
        1396,
        374,
        1393,
        371,
        1408,
        1406,
        1403,
        1413,
        2173,
        2172,
        772,
        726,
        723,
        1712,
        672,
        669,
        666,
        682,
        1678,
        1675,
        625,
        623,
        621,
        618,
        2331,
        636,
        632,
        1639,
        1637,
        1635,
        920,
        918,
        884,
        880,
        889,
        849,
        848,
        847,
        846,
        2497,
        855,
        852,
        1776,
        2641,
        2742,
        2787,
        1380,
        334,
        1367,
        1365,
        301,
        297,
        1340,
        1338,
        1335,
        1343,
        255,
        251,
        247,
        1296,
        1291,
        1288,
        265,
        1302,
        1299,
        2113,
        204,
        196,
        192,
        2042,
        1232,
        1230,
        1224,
        214,
        1220,
        210,
        1242,
        1239,
        1235,
        1250,
        2077,
        2075,
        151,
        148,
        1993,
        144,
        1990,
        1163,
        1162,
        1160,
        1158,
        1155,
        161,
        1152,
        157,
        1173,
        1171,
        1168,
        1165,
        168,
        1181,
        1178,
        2021,
        2020,
        2018,
        2023,
        585,
        560,
        557,
        1585,
        516,
        509,
        1562,
        1559,
        458,
        447,
        2227,
        472,
        1516,
        1513,
        1510,
        398,
        396,
        393,
        390,
        2181,
        386,
        2178,
        407,
        1453,
        1451,
        1449,
        1446,
        420,
        1460,
        2209,
        769,
        764,
        720,
        712,
        2391,
        729,
        1713,
        664,
        663,
        661,
        659,
        2352,
        656,
        2349,
        671,
        1679,
        1677,
        2553,
        922,
        919,
        2519,
        2516,
        885,
        883,
        881,
        2685,
        2661,
        2659,
        2767,
        2756,
        2755,
        140,
        1137,
        1136,
        130,
        127,
        1125,
        1124,
        1122,
        1127,
        109,
        106,
        102,
        1103,
        1102,
        1100,
        1098,
        116,
        1107,
        1105,
        1980,
        80,
        76,
        73,
        1947,
        1068,
        1067,
        1065,
        1063,
        90,
        1060,
        87,
        1075,
        1073,
        1070,
        1080,
        1966,
        1965,
        46,
        43,
        40,
        1912,
        36,
        1909,
        1019,
        1018,
        1016,
        1014,
        58,
        1011,
        55,
        1008,
        51,
        1029,
        1027,
        1024,
        1021,
        63,
        1037,
        1034,
        1940,
        1939,
        1937,
        1942,
        8,
        1866,
        4,
        1863,
        1,
        1860,
        956,
        954,
        952,
        949,
        946,
        17,
        14,
        969,
        967,
        964,
        961,
        27,
        957,
        24,
        979,
        976,
        972,
        1901,
        1900,
        1898,
        1896,
        986,
        1905,
        1903,
        350,
        349,
        1381,
        329,
        327,
        324,
        1368,
        1366,
        292,
        290,
        287,
        284,
        2118,
        304,
        1341,
        1339,
        1337,
        1345,
        243,
        240,
        237,
        2086,
        233,
        2083,
        254,
        1297,
        1295,
        1293,
        1290,
        1304,
        2114,
        190,
        187,
        184,
        2034,
        180,
        2031,
        177,
        2027,
        199,
        1233,
        1231,
        1229,
        1226,
        217,
        1223,
        1241,
        2078,
        2076,
        584,
        555,
        554,
        552,
        550,
        2282,
        562,
        1586,
        507,
        506,
        504,
        502,
        2257,
        499,
        2254,
        515,
        1563,
        1561,
        445,
        443,
        441,
        2219,
        438,
        2216,
        435,
        2212,
        460,
        454,
        475,
        1517,
        1515,
        1512,
        2447,
        798,
        797,
        2422,
        2419,
        770,
        768,
        766,
        2383,
        2380,
        2376,
        721,
        719,
        717,
        714,
        731,
        1714,
        2602,
        2582,
        2580,
        2548,
        2546,
        2543,
        923,
        921,
        2717,
        2706,
        2705,
        2683,
        2682,
        2680,
        1771,
        1752,
        1750,
        1733,
        1732,
        1731,
        1735,
        1814,
        1707,
        1670,
        1668,
        1631,
        1629,
        1626,
        1634,
        1599,
        1598,
        1596,
        1594,
        1603,
        1601,
        2326,
        1772,
        1753,
        1751,
        1581,
        1554,
        1552,
        1504,
        1501,
        1498,
        1509,
        1442,
        1437,
        1434,
        401,
        1448,
        1445,
        2206,
        1392,
        1391,
        1389,
        1387,
        1384,
        359,
        1399,
        1397,
        1394,
        1404,
        2171,
        2170,
        1708,
        1672,
        1669,
        619,
        1632,
        1630,
        1628,
        1773,
        1378,
        1363,
        1361,
        1333,
        1328,
        1336,
        1286,
        1281,
        1278,
        248,
        1292,
        1289,
        2111,
        1218,
        1216,
        1210,
        197,
        1206,
        193,
        1228,
        1225,
        1221,
        1236,
        2073,
        2071,
        1151,
        1150,
        1148,
        1146,
        152,
        1143,
        149,
        1140,
        145,
        1161,
        1159,
        1156,
        1153,
        158,
        1169,
        1166,
        2017,
        2016,
        2014,
        2019,
        1582,
        510,
        1556,
        1553,
        452,
        448,
        1506,
        1500,
        394,
        391,
        387,
        1443,
        1441,
        1439,
        1436,
        1450,
        2207,
        765,
        716,
        713,
        1709,
        662,
        660,
        657,
        1673,
        1671,
        916,
        914,
        879,
        878,
        877,
        882,
        1135,
        1134,
        1121,
        1120,
        1118,
        1123,
        1097,
        1096,
        1094,
        1092,
        103,
        1101,
        1099,
        1979,
        1059,
        1058,
        1056,
        1054,
        77,
        1051,
        74,
        1066,
        1064,
        1061,
        1071,
        1964,
        1963,
        1007,
        1006,
        1004,
        1002,
        999,
        41,
        996,
        37,
        1017,
        1015,
        1012,
        1009,
        52,
        1025,
        1022,
        1936,
        1935,
        1933,
        1938,
        942,
        940,
        938,
        935,
        932,
        5,
        2,
        955,
        953,
        950,
        947,
        18,
        943,
        15,
        965,
        962,
        958,
        1895,
        1894,
        1892,
        1890,
        973,
        1899,
        1897,
        1379,
        325,
        1364,
        1362,
        288,
        285,
        1334,
        1332,
        1330,
        241,
        238,
        234,
        1287,
        1285,
        1283,
        1280,
        1294,
        2112,
        188,
        185,
        181,
        178,
        2028,
        1219,
        1217,
        1215,
        1212,
        200,
        1209,
        1227,
        2074,
        2072,
        583,
        553,
        551,
        1583,
        505,
        503,
        500,
        513,
        1557,
        1555,
        444,
        442,
        439,
        436,
        2213,
        455,
        451,
        1507,
        1505,
        1502,
        796,
        763,
        762,
        760,
        767,
        711,
        710,
        708,
        706,
        2377,
        718,
        715,
        1710,
        2544,
        917,
        915,
        2681,
        1627,
        1597,
        1595,
        2325,
        1769,
        1749,
        1747,
        1499,
        1438,
        1435,
        2204,
        1390,
        1388,
        1385,
        1395,
        2169,
        2167,
        1704,
        1665,
        1662,
        1625,
        1623,
        1620,
        1770,
        1329,
        1282,
        1279,
        2109,
        1214,
        1207,
        1222,
        2068,
        2065,
        1149,
        1147,
        1144,
        1141,
        146,
        1157,
        1154,
        2013,
        2011,
        2008,
        2015,
        1579,
        1549,
        1546,
        1495,
        1487,
        1433,
        1431,
        1428,
        1425,
        388,
        1440,
        2205,
        1705,
        658,
        1667,
        1664,
        1119,
        1095,
        1093,
        1978,
        1057,
        1055,
        1052,
        1062,
        1962,
        1960,
        1005,
        1003,
        1e3,
        997,
        38,
        1013,
        1010,
        1932,
        1930,
        1927,
        1934,
        941,
        939,
        936,
        933,
        6,
        930,
        3,
        951,
        948,
        944,
        1889,
        1887,
        1884,
        1881,
        959,
        1893,
        1891,
        35,
        1377,
        1360,
        1358,
        1327,
        1325,
        1322,
        1331,
        1277,
        1275,
        1272,
        1269,
        235,
        1284,
        2110,
        1205,
        1204,
        1201,
        1198,
        182,
        1195,
        179,
        1213,
        2070,
        2067,
        1580,
        501,
        1551,
        1548,
        440,
        437,
        1497,
        1494,
        1490,
        1503,
        761,
        709,
        707,
        1706,
        913,
        912,
        2198,
        1386,
        2164,
        2161,
        1621,
        1766,
        2103,
        1208,
        2058,
        2054,
        1145,
        1142,
        2005,
        2002,
        1999,
        2009,
        1488,
        1429,
        1426,
        2200,
        1698,
        1659,
        1656,
        1975,
        1053,
        1957,
        1954,
        1001,
        998,
        1924,
        1921,
        1918,
        1928,
        937,
        934,
        931,
        1879,
        1876,
        1873,
        1870,
        945,
        1885,
        1882,
        1323,
        1273,
        1270,
        2105,
        1202,
        1199,
        1196,
        1211,
        2061,
        2057,
        1576,
        1543,
        1540,
        1484,
        1481,
        1478,
        1491,
        1700
      ]);
      class Vi {
        constructor(e, t) {
          this.bits = e, this.points = t;
        }
        getBits() {
          return this.bits;
        }
        getPoints() {
          return this.points;
        }
      }
      class ge {
        /**
         * <p>Detects a PDF417 Code in an image. Only checks 0 and 180 degree rotations.</p>
         *
         * @param image barcode image to decode
         * @param hints optional hints to detector
         * @param multiple if true, then the image is searched for multiple codes. If false, then at most one code will
         * be found and returned
         * @return {@link PDF417DetectorResult} encapsulating results of detecting a PDF417 code
         * @throws NotFoundException if no PDF417 Code can be found
         */
        static detectMultiple(e, t, r) {
          let n = e.getBlackMatrix(), i = ge.detect(r, n);
          return i.length || (n = n.clone(), n.rotate180(), i = ge.detect(r, n)), new Vi(n, i);
        }
        /**
         * Detects PDF417 codes in an image. Only checks 0 degree rotation
         * @param multiple if true, then the image is searched for multiple codes. If false, then at most one code will
         * be found and returned
         * @param bitMatrix bit matrix to detect barcodes in
         * @return List of ResultPoint arrays containing the coordinates of found barcodes
         */
        static detect(e, t) {
          const r = new Array();
          let n = 0, i = 0, s = !1;
          for (; n < t.getHeight(); ) {
            const a = ge.findVertices(t, n, i);
            if (a[0] == null && a[3] == null) {
              if (!s)
                break;
              s = !1, i = 0;
              for (const o of r)
                o[1] != null && (n = Math.trunc(Math.max(n, o[1].getY()))), o[3] != null && (n = Math.max(n, Math.trunc(o[3].getY())));
              n += ge.ROW_STEP;
              continue;
            }
            if (s = !0, r.push(a), !e)
              break;
            a[2] != null ? (i = Math.trunc(a[2].getX()), n = Math.trunc(a[2].getY())) : (i = Math.trunc(a[4].getX()), n = Math.trunc(a[4].getY()));
          }
          return r;
        }
        /**
         * Locate the vertices and the codewords area of a black blob using the Start
         * and Stop patterns as locators.
         *
         * @param matrix the scanned barcode image.
         * @return an array containing the vertices:
         *           vertices[0] x, y top left barcode
         *           vertices[1] x, y bottom left barcode
         *           vertices[2] x, y top right barcode
         *           vertices[3] x, y bottom right barcode
         *           vertices[4] x, y top left codeword area
         *           vertices[5] x, y bottom left codeword area
         *           vertices[6] x, y top right codeword area
         *           vertices[7] x, y bottom right codeword area
         */
        static findVertices(e, t, r) {
          const n = e.getHeight(), i = e.getWidth(), s = new Array(8);
          return ge.copyToResult(s, ge.findRowsWithPattern(e, n, i, t, r, ge.START_PATTERN), ge.INDEXES_START_PATTERN), s[4] != null && (r = Math.trunc(s[4].getX()), t = Math.trunc(s[4].getY())), ge.copyToResult(s, ge.findRowsWithPattern(e, n, i, t, r, ge.STOP_PATTERN), ge.INDEXES_STOP_PATTERN), s;
        }
        static copyToResult(e, t, r) {
          for (let n = 0; n < r.length; n++)
            e[r[n]] = t[n];
        }
        static findRowsWithPattern(e, t, r, n, i, s) {
          const a = new Array(4);
          let o = !1;
          const l = new Int32Array(s.length);
          for (; n < t; n += ge.ROW_STEP) {
            let g = ge.findGuardPattern(e, i, n, r, !1, s, l);
            if (g != null) {
              for (; n > 0; ) {
                const x = ge.findGuardPattern(e, i, --n, r, !1, s, l);
                if (x != null)
                  g = x;
                else {
                  n++;
                  break;
                }
              }
              a[0] = new Q(g[0], n), a[1] = new Q(g[1], n), o = !0;
              break;
            }
          }
          let u = n + 1;
          if (o) {
            let g = 0, x = Int32Array.from([Math.trunc(a[0].getX()), Math.trunc(a[1].getX())]);
            for (; u < t; u++) {
              const y = ge.findGuardPattern(e, x[0], u, r, !1, s, l);
              if (y != null && Math.abs(x[0] - y[0]) < ge.MAX_PATTERN_DRIFT && Math.abs(x[1] - y[1]) < ge.MAX_PATTERN_DRIFT)
                x = y, g = 0;
              else {
                if (g > ge.SKIPPED_ROW_COUNT_MAX)
                  break;
                g++;
              }
            }
            u -= g + 1, a[2] = new Q(x[0], u), a[3] = new Q(x[1], u);
          }
          return u - n < ge.BARCODE_MIN_HEIGHT && G.fill(a, null), a;
        }
        /**
         * @param matrix row of black/white values to search
         * @param column x position to start search
         * @param row y position to start search
         * @param width the number of pixels to search on this row
         * @param pattern pattern of counts of number of black and white pixels that are
         *                 being searched for as a pattern
         * @param counters array of counters, as long as pattern, to re-use
         * @return start/end horizontal offset of guard pattern, as an array of two ints.
         */
        static findGuardPattern(e, t, r, n, i, s, a) {
          G.fillWithin(a, 0, a.length, 0);
          let o = t, l = 0;
          for (; e.get(o, r) && o > 0 && l++ < ge.MAX_PIXEL_DRIFT; )
            o--;
          let u = o, g = 0, x = s.length;
          for (let y = i; u < n; u++)
            if (e.get(u, r) !== y)
              a[g]++;
            else {
              if (g === x - 1) {
                if (ge.patternMatchVariance(a, s, ge.MAX_INDIVIDUAL_VARIANCE) < ge.MAX_AVG_VARIANCE)
                  return new Int32Array([o, u]);
                o += a[0] + a[1], j.arraycopy(a, 2, a, 0, g - 1), a[g - 1] = 0, a[g] = 0, g--;
              } else
                g++;
              a[g] = 1, y = !y;
            }
          return g === x - 1 && ge.patternMatchVariance(a, s, ge.MAX_INDIVIDUAL_VARIANCE) < ge.MAX_AVG_VARIANCE ? new Int32Array([o, u - 1]) : null;
        }
        /**
         * Determines how closely a set of observed counts of runs of black/white
         * values matches a given target pattern. This is reported as the ratio of
         * the total variance from the expected pattern proportions across all
         * pattern elements, to the length of the pattern.
         *
         * @param counters observed counters
         * @param pattern expected pattern
         * @param maxIndividualVariance The most any counter can differ before we give up
         * @return ratio of total variance between counters and pattern compared to total pattern size
         */
        static patternMatchVariance(e, t, r) {
          let n = e.length, i = 0, s = 0;
          for (let l = 0; l < n; l++)
            i += e[l], s += t[l];
          if (i < s)
            return (
              /*Float.POSITIVE_INFINITY*/
              1 / 0
            );
          let a = i / s;
          r *= a;
          let o = 0;
          for (let l = 0; l < n; l++) {
            let u = e[l], g = t[l] * a, x = u > g ? u - g : g - u;
            if (x > r)
              return (
                /*Float.POSITIVE_INFINITY*/
                1 / 0
              );
            o += x;
          }
          return o / i;
        }
      }
      ge.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5]), ge.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3]), ge.MAX_AVG_VARIANCE = 0.42, ge.MAX_INDIVIDUAL_VARIANCE = 0.8, ge.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3]), ge.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1]), ge.MAX_PIXEL_DRIFT = 3, ge.MAX_PATTERN_DRIFT = 5, ge.SKIPPED_ROW_COUNT_MAX = 25, ge.ROW_STEP = 5, ge.BARCODE_MIN_HEIGHT = 10;
      class Et {
        constructor(e, t) {
          if (t.length === 0)
            throw new v();
          this.field = e;
          let r = (
            /*int*/
            t.length
          );
          if (r > 1 && t[0] === 0) {
            let n = (
              /*int*/
              1
            );
            for (; n < r && t[n] === 0; )
              n++;
            n === r ? this.coefficients = new Int32Array([0]) : (this.coefficients = new Int32Array(r - n), j.arraycopy(t, n, this.coefficients, 0, this.coefficients.length));
          } else
            this.coefficients = t;
        }
        getCoefficients() {
          return this.coefficients;
        }
        /**
         * @return degree of this polynomial
         */
        getDegree() {
          return this.coefficients.length - 1;
        }
        /**
         * @return true iff this polynomial is the monomial "0"
         */
        isZero() {
          return this.coefficients[0] === 0;
        }
        /**
         * @return coefficient of x^degree term in this polynomial
         */
        getCoefficient(e) {
          return this.coefficients[this.coefficients.length - 1 - e];
        }
        /**
         * @return evaluation of this polynomial at a given point
         */
        evaluateAt(e) {
          if (e === 0)
            return this.getCoefficient(0);
          if (e === 1) {
            let n = (
              /*int*/
              0
            );
            for (let i of this.coefficients)
              n = this.field.add(n, i);
            return n;
          }
          let t = (
            /*int*/
            this.coefficients[0]
          ), r = (
            /*int*/
            this.coefficients.length
          );
          for (let n = 1; n < r; n++)
            t = this.field.add(this.field.multiply(e, t), this.coefficients[n]);
          return t;
        }
        add(e) {
          if (!this.field.equals(e.field))
            throw new v("ModulusPolys do not have same ModulusGF field");
          if (this.isZero())
            return e;
          if (e.isZero())
            return this;
          let t = this.coefficients, r = e.coefficients;
          if (t.length > r.length) {
            let s = t;
            t = r, r = s;
          }
          let n = new Int32Array(r.length), i = (
            /*int*/
            r.length - t.length
          );
          j.arraycopy(r, 0, n, 0, i);
          for (let s = i; s < r.length; s++)
            n[s] = this.field.add(t[s - i], r[s]);
          return new Et(this.field, n);
        }
        subtract(e) {
          if (!this.field.equals(e.field))
            throw new v("ModulusPolys do not have same ModulusGF field");
          return e.isZero() ? this : this.add(e.negative());
        }
        multiply(e) {
          return e instanceof Et ? this.multiplyOther(e) : this.multiplyScalar(e);
        }
        multiplyOther(e) {
          if (!this.field.equals(e.field))
            throw new v("ModulusPolys do not have same ModulusGF field");
          if (this.isZero() || e.isZero())
            return new Et(this.field, new Int32Array([0]));
          let t = this.coefficients, r = (
            /*int*/
            t.length
          ), n = e.coefficients, i = (
            /*int*/
            n.length
          ), s = new Int32Array(r + i - 1);
          for (let a = 0; a < r; a++) {
            let o = (
              /*int*/
              t[a]
            );
            for (let l = 0; l < i; l++)
              s[a + l] = this.field.add(s[a + l], this.field.multiply(o, n[l]));
          }
          return new Et(this.field, s);
        }
        negative() {
          let e = (
            /*int*/
            this.coefficients.length
          ), t = new Int32Array(e);
          for (let r = 0; r < e; r++)
            t[r] = this.field.subtract(0, this.coefficients[r]);
          return new Et(this.field, t);
        }
        multiplyScalar(e) {
          if (e === 0)
            return new Et(this.field, new Int32Array([0]));
          if (e === 1)
            return this;
          let t = (
            /*int*/
            this.coefficients.length
          ), r = new Int32Array(t);
          for (let n = 0; n < t; n++)
            r[n] = this.field.multiply(this.coefficients[n], e);
          return new Et(this.field, r);
        }
        multiplyByMonomial(e, t) {
          if (e < 0)
            throw new v();
          if (t === 0)
            return new Et(this.field, new Int32Array([0]));
          let r = (
            /*int*/
            this.coefficients.length
          ), n = new Int32Array(r + e);
          for (let i = 0; i < r; i++)
            n[i] = this.field.multiply(this.coefficients[i], t);
          return new Et(this.field, n);
        }
        /*
          ModulusPoly[] divide(other: ModulusPoly) {
            if (!field.equals(other.field)) {
              throw new IllegalArgumentException("ModulusPolys do not have same ModulusGF field");
            }
            if (other.isZero()) {
              throw new IllegalArgumentException("Divide by 0");
            }
        
            let quotient: ModulusPoly = field.getZero();
            let remainder: ModulusPoly = this;
        
            let denominatorLeadingTerm: /*int/ number = other.getCoefficient(other.getDegree());
            let inverseDenominatorLeadingTerm: /*int/ number = field.inverse(denominatorLeadingTerm);
        
            while (remainder.getDegree() >= other.getDegree() && !remainder.isZero()) {
              let degreeDifference: /*int/ number = remainder.getDegree() - other.getDegree();
              let scale: /*int/ number = field.multiply(remainder.getCoefficient(remainder.getDegree()), inverseDenominatorLeadingTerm);
              let term: ModulusPoly = other.multiplyByMonomial(degreeDifference, scale);
              let iterationQuotient: ModulusPoly = field.buildMonomial(degreeDifference, scale);
              quotient = quotient.add(iterationQuotient);
              remainder = remainder.subtract(term);
            }
        
            return new ModulusPoly[] { quotient, remainder };
          }
          */
        // @Override
        toString() {
          let e = new he(
            /*8 * this.getDegree()*/
          );
          for (let t = this.getDegree(); t >= 0; t--) {
            let r = (
              /*int*/
              this.getCoefficient(t)
            );
            r !== 0 && (r < 0 ? (e.append(" - "), r = -r) : e.length() > 0 && e.append(" + "), (t === 0 || r !== 1) && e.append(r), t !== 0 && (t === 1 ? e.append("x") : (e.append("x^"), e.append(t))));
          }
          return e.toString();
        }
      }
      class Gi {
        add(e, t) {
          return (e + t) % this.modulus;
        }
        subtract(e, t) {
          return (this.modulus + e - t) % this.modulus;
        }
        exp(e) {
          return this.expTable[e];
        }
        log(e) {
          if (e === 0)
            throw new v();
          return this.logTable[e];
        }
        inverse(e) {
          if (e === 0)
            throw new xr();
          return this.expTable[this.modulus - this.logTable[e] - 1];
        }
        multiply(e, t) {
          return e === 0 || t === 0 ? 0 : this.expTable[(this.logTable[e] + this.logTable[t]) % (this.modulus - 1)];
        }
        getSize() {
          return this.modulus;
        }
        equals(e) {
          return e === this;
        }
      }
      class Bn extends Gi {
        // private /*final*/ modulus: /*int*/ number;
        constructor(e, t) {
          super(), this.modulus = e, this.expTable = new Int32Array(e), this.logTable = new Int32Array(e);
          let r = (
            /*int*/
            1
          );
          for (let n = 0; n < e; n++)
            this.expTable[n] = r, r = r * t % e;
          for (let n = 0; n < e - 1; n++)
            this.logTable[this.expTable[n]] = n;
          this.zero = new Et(this, new Int32Array([0])), this.one = new Et(this, new Int32Array([1]));
        }
        getZero() {
          return this.zero;
        }
        getOne() {
          return this.one;
        }
        buildMonomial(e, t) {
          if (e < 0)
            throw new v();
          if (t === 0)
            return this.zero;
          let r = new Int32Array(e + 1);
          return r[0] = t, new Et(this, r);
        }
      }
      Bn.PDF417_GF = new Bn(ae.NUMBER_OF_CODEWORDS, 3);
      class qn {
        constructor() {
          this.field = Bn.PDF417_GF;
        }
        /**
         * @param received received codewords
         * @param numECCodewords number of those codewords used for EC
         * @param erasures location of erasures
         * @return number of errors
         * @throws ChecksumException if errors cannot be corrected, maybe because of too many errors
         */
        decode(e, t, r) {
          let n = new Et(this.field, e), i = new Int32Array(t), s = !1;
          for (let I = t; I > 0; I--) {
            let b = n.evaluateAt(this.field.exp(I));
            i[t - I] = b, b !== 0 && (s = !0);
          }
          if (!s)
            return 0;
          let a = this.field.getOne();
          if (r != null)
            for (const I of r) {
              let b = this.field.exp(e.length - 1 - I), T = new Et(this.field, new Int32Array([this.field.subtract(0, b), 1]));
              a = a.multiply(T);
            }
          let o = new Et(this.field, i), l = this.runEuclideanAlgorithm(this.field.buildMonomial(t, 1), o, t), u = l[0], g = l[1], x = this.findErrorLocations(u), y = this.findErrorMagnitudes(g, u, x);
          for (let I = 0; I < x.length; I++) {
            let b = e.length - 1 - this.field.log(x[I]);
            if (b < 0)
              throw q.getChecksumInstance();
            e[b] = this.field.subtract(e[b], y[I]);
          }
          return x.length;
        }
        /**
         *
         * @param ModulusPoly
         * @param a
         * @param ModulusPoly
         * @param b
         * @param int
         * @param R
         * @throws ChecksumException
         */
        runEuclideanAlgorithm(e, t, r) {
          if (e.getDegree() < t.getDegree()) {
            let x = e;
            e = t, t = x;
          }
          let n = e, i = t, s = this.field.getZero(), a = this.field.getOne();
          for (; i.getDegree() >= Math.round(r / 2); ) {
            let x = n, y = s;
            if (n = i, s = a, n.isZero())
              throw q.getChecksumInstance();
            i = x;
            let I = this.field.getZero(), b = n.getCoefficient(n.getDegree()), T = this.field.inverse(b);
            for (; i.getDegree() >= n.getDegree() && !i.isZero(); ) {
              let R = i.getDegree() - n.getDegree(), H = this.field.multiply(i.getCoefficient(i.getDegree()), T);
              I = I.add(this.field.buildMonomial(R, H)), i = i.subtract(n.multiplyByMonomial(R, H));
            }
            a = I.multiply(s).subtract(y).negative();
          }
          let o = a.getCoefficient(0);
          if (o === 0)
            throw q.getChecksumInstance();
          let l = this.field.inverse(o), u = a.multiply(l), g = i.multiply(l);
          return [u, g];
        }
        /**
         *
         * @param errorLocator
         * @throws ChecksumException
         */
        findErrorLocations(e) {
          let t = e.getDegree(), r = new Int32Array(t), n = 0;
          for (let i = 1; i < this.field.getSize() && n < t; i++)
            e.evaluateAt(i) === 0 && (r[n] = this.field.inverse(i), n++);
          if (n !== t)
            throw q.getChecksumInstance();
          return r;
        }
        findErrorMagnitudes(e, t, r) {
          let n = t.getDegree(), i = new Int32Array(n);
          for (let l = 1; l <= n; l++)
            i[n - l] = this.field.multiply(l, t.getCoefficient(l));
          let s = new Et(this.field, i), a = r.length, o = new Int32Array(a);
          for (let l = 0; l < a; l++) {
            let u = this.field.inverse(r[l]), g = this.field.subtract(0, e.evaluateAt(u)), x = this.field.inverse(s.evaluateAt(u));
            o[l] = this.field.multiply(g, x);
          }
          return o;
        }
      }
      class Er {
        constructor(e, t, r, n, i) {
          e instanceof Er ? this.constructor_2(e) : this.constructor_1(e, t, r, n, i);
        }
        /**
         *
         * @param image
         * @param topLeft
         * @param bottomLeft
         * @param topRight
         * @param bottomRight
         *
         * @throws NotFoundException
         */
        constructor_1(e, t, r, n, i) {
          const s = t == null || r == null, a = n == null || i == null;
          if (s && a)
            throw new D();
          s ? (t = new Q(0, n.getY()), r = new Q(0, i.getY())) : a && (n = new Q(e.getWidth() - 1, t.getY()), i = new Q(e.getWidth() - 1, r.getY())), this.image = e, this.topLeft = t, this.bottomLeft = r, this.topRight = n, this.bottomRight = i, this.minX = Math.trunc(Math.min(t.getX(), r.getX())), this.maxX = Math.trunc(Math.max(n.getX(), i.getX())), this.minY = Math.trunc(Math.min(t.getY(), n.getY())), this.maxY = Math.trunc(Math.max(r.getY(), i.getY()));
        }
        constructor_2(e) {
          this.image = e.image, this.topLeft = e.getTopLeft(), this.bottomLeft = e.getBottomLeft(), this.topRight = e.getTopRight(), this.bottomRight = e.getBottomRight(), this.minX = e.getMinX(), this.maxX = e.getMaxX(), this.minY = e.getMinY(), this.maxY = e.getMaxY();
        }
        /**
         * @throws NotFoundException
         */
        static merge(e, t) {
          return e == null ? t : t == null ? e : new Er(e.image, e.topLeft, e.bottomLeft, t.topRight, t.bottomRight);
        }
        /**
         * @throws NotFoundException
         */
        addMissingRows(e, t, r) {
          let n = this.topLeft, i = this.bottomLeft, s = this.topRight, a = this.bottomRight;
          if (e > 0) {
            let o = r ? this.topLeft : this.topRight, l = Math.trunc(o.getY() - e);
            l < 0 && (l = 0);
            let u = new Q(o.getX(), l);
            r ? n = u : s = u;
          }
          if (t > 0) {
            let o = r ? this.bottomLeft : this.bottomRight, l = Math.trunc(o.getY() + t);
            l >= this.image.getHeight() && (l = this.image.getHeight() - 1);
            let u = new Q(o.getX(), l);
            r ? i = u : a = u;
          }
          return new Er(this.image, n, i, s, a);
        }
        getMinX() {
          return this.minX;
        }
        getMaxX() {
          return this.maxX;
        }
        getMinY() {
          return this.minY;
        }
        getMaxY() {
          return this.maxY;
        }
        getTopLeft() {
          return this.topLeft;
        }
        getTopRight() {
          return this.topRight;
        }
        getBottomLeft() {
          return this.bottomLeft;
        }
        getBottomRight() {
          return this.bottomRight;
        }
      }
      class Hi {
        constructor(e, t, r, n) {
          this.columnCount = e, this.errorCorrectionLevel = n, this.rowCountUpperPart = t, this.rowCountLowerPart = r, this.rowCount = t + r;
        }
        getColumnCount() {
          return this.columnCount;
        }
        getErrorCorrectionLevel() {
          return this.errorCorrectionLevel;
        }
        getRowCount() {
          return this.rowCount;
        }
        getRowCountUpperPart() {
          return this.rowCountUpperPart;
        }
        getRowCountLowerPart() {
          return this.rowCountLowerPart;
        }
      }
      class zr {
        constructor() {
          this.buffer = "";
        }
        /**
         *
         * @see https://stackoverflow.com/a/13439711/4367683
         *
         * @param str
         * @param arr
         */
        static form(e, t) {
          let r = -1;
          function n(s, a, o, l, u, g) {
            if (s === "%%")
              return "%";
            if (t[++r] === void 0)
              return;
            s = l ? parseInt(l.substr(1)) : void 0;
            let x = u ? parseInt(u.substr(1)) : void 0, y;
            switch (g) {
              case "s":
                y = t[r];
                break;
              case "c":
                y = t[r][0];
                break;
              case "f":
                y = parseFloat(t[r]).toFixed(s);
                break;
              case "p":
                y = parseFloat(t[r]).toPrecision(s);
                break;
              case "e":
                y = parseFloat(t[r]).toExponential(s);
                break;
              case "x":
                y = parseInt(t[r]).toString(x || 16);
                break;
              case "d":
                y = parseFloat(parseInt(t[r], x || 10).toPrecision(s)).toFixed(0);
                break;
            }
            y = typeof y == "object" ? JSON.stringify(y) : (+y).toString(x);
            let I = parseInt(o), b = o && o[0] + "" == "0" ? "0" : " ";
            for (; y.length < I; )
              y = a !== void 0 ? y + b : b + y;
            return y;
          }
          let i = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
          return e.replace(i, n);
        }
        /**
         *
         * @param append The new string to append.
         * @param args Argumets values to be formated.
         */
        format(e, ...t) {
          this.buffer += zr.form(e, t);
        }
        /**
         * Returns the Formatter string value.
         */
        toString() {
          return this.buffer;
        }
      }
      class Yr {
        constructor(e) {
          this.boundingBox = new Er(e), this.codewords = new Array(e.getMaxY() - e.getMinY() + 1);
        }
        /*final*/
        getCodewordNearby(e) {
          let t = this.getCodeword(e);
          if (t != null)
            return t;
          for (let r = 1; r < Yr.MAX_NEARBY_DISTANCE; r++) {
            let n = this.imageRowToCodewordIndex(e) - r;
            if (n >= 0 && (t = this.codewords[n], t != null) || (n = this.imageRowToCodewordIndex(e) + r, n < this.codewords.length && (t = this.codewords[n], t != null)))
              return t;
          }
          return null;
        }
        /*final int*/
        imageRowToCodewordIndex(e) {
          return e - this.boundingBox.getMinY();
        }
        /*final void*/
        setCodeword(e, t) {
          this.codewords[this.imageRowToCodewordIndex(e)] = t;
        }
        /*final*/
        getCodeword(e) {
          return this.codewords[this.imageRowToCodewordIndex(e)];
        }
        /*final*/
        getBoundingBox() {
          return this.boundingBox;
        }
        /*final*/
        getCodewords() {
          return this.codewords;
        }
        // @Override
        toString() {
          const e = new zr();
          let t = 0;
          for (const r of this.codewords) {
            if (r == null) {
              e.format("%3d:    |   %n", t++);
              continue;
            }
            e.format("%3d: %3d|%3d%n", t++, r.getRowNumber(), r.getValue());
          }
          return e.toString();
        }
      }
      Yr.MAX_NEARBY_DISTANCE = 5;
      class Zr {
        constructor() {
          this.values = /* @__PURE__ */ new Map();
        }
        /**
         * Add an occurrence of a value
         */
        setValue(e) {
          e = Math.trunc(e);
          let t = this.values.get(e);
          t == null && (t = 0), t++, this.values.set(e, t);
        }
        /**
         * Determines the maximum occurrence of a set value and returns all values which were set with this occurrence.
         * @return an array of int, containing the values with the highest occurrence, or null, if no value was set
         */
        getValue() {
          let e = -1, t = new Array();
          for (const [r, n] of this.values.entries()) {
            const i = {
              getKey: () => r,
              getValue: () => n
            };
            i.getValue() > e ? (e = i.getValue(), t = [], t.push(i.getKey())) : i.getValue() === e && t.push(i.getKey());
          }
          return ae.toIntArray(t);
        }
        getConfidence(e) {
          return this.values.get(e);
        }
      }
      class Qn extends Yr {
        constructor(e, t) {
          super(e), this._isLeft = t;
        }
        setRowNumbers() {
          for (let e of this.getCodewords())
            e?.setRowNumberAsRowIndicatorColumn();
        }
        // TODO implement properly
        // TODO maybe we should add missing codewords to store the correct row number to make
        // finding row numbers for other columns easier
        // use row height count to make detection of invalid row numbers more reliable
        adjustCompleteIndicatorColumnRowNumbers(e) {
          let t = this.getCodewords();
          this.setRowNumbers(), this.removeIncorrectCodewords(t, e);
          let r = this.getBoundingBox(), n = this._isLeft ? r.getTopLeft() : r.getTopRight(), i = this._isLeft ? r.getBottomLeft() : r.getBottomRight(), s = this.imageRowToCodewordIndex(Math.trunc(n.getY())), a = this.imageRowToCodewordIndex(Math.trunc(i.getY())), o = -1, l = 1, u = 0;
          for (let g = s; g < a; g++) {
            if (t[g] == null)
              continue;
            let x = t[g], y = x.getRowNumber() - o;
            if (y === 0)
              u++;
            else if (y === 1)
              l = Math.max(l, u), u = 1, o = x.getRowNumber();
            else if (y < 0 || x.getRowNumber() >= e.getRowCount() || y > g)
              t[g] = null;
            else {
              let I;
              l > 2 ? I = (l - 2) * y : I = y;
              let b = I >= g;
              for (let T = 1; T <= I && !b; T++)
                b = t[g - T] != null;
              b ? t[g] = null : (o = x.getRowNumber(), u = 1);
            }
          }
        }
        getRowHeights() {
          let e = this.getBarcodeMetadata();
          if (e == null)
            return null;
          this.adjustIncompleteIndicatorColumnRowNumbers(e);
          let t = new Int32Array(e.getRowCount());
          for (let r of this.getCodewords())
            if (r != null) {
              let n = r.getRowNumber();
              if (n >= t.length)
                continue;
              t[n]++;
            }
          return t;
        }
        // TODO maybe we should add missing codewords to store the correct row number to make
        // finding row numbers for other columns easier
        // use row height count to make detection of invalid row numbers more reliable
        adjustIncompleteIndicatorColumnRowNumbers(e) {
          let t = this.getBoundingBox(), r = this._isLeft ? t.getTopLeft() : t.getTopRight(), n = this._isLeft ? t.getBottomLeft() : t.getBottomRight(), i = this.imageRowToCodewordIndex(Math.trunc(r.getY())), s = this.imageRowToCodewordIndex(Math.trunc(n.getY())), a = this.getCodewords(), o = -1;
          for (let l = i; l < s; l++) {
            if (a[l] == null)
              continue;
            let u = a[l];
            u.setRowNumberAsRowIndicatorColumn();
            let g = u.getRowNumber() - o;
            g === 0 || (g === 1 ? o = u.getRowNumber() : u.getRowNumber() >= e.getRowCount() ? a[l] = null : o = u.getRowNumber());
          }
        }
        getBarcodeMetadata() {
          let e = this.getCodewords(), t = new Zr(), r = new Zr(), n = new Zr(), i = new Zr();
          for (let a of e) {
            if (a == null)
              continue;
            a.setRowNumberAsRowIndicatorColumn();
            let o = a.getValue() % 30, l = a.getRowNumber();
            switch (this._isLeft || (l += 2), l % 3) {
              case 0:
                r.setValue(o * 3 + 1);
                break;
              case 1:
                i.setValue(o / 3), n.setValue(o % 3);
                break;
              case 2:
                t.setValue(o + 1);
                break;
            }
          }
          if (t.getValue().length === 0 || r.getValue().length === 0 || n.getValue().length === 0 || i.getValue().length === 0 || t.getValue()[0] < 1 || r.getValue()[0] + n.getValue()[0] < ae.MIN_ROWS_IN_BARCODE || r.getValue()[0] + n.getValue()[0] > ae.MAX_ROWS_IN_BARCODE)
            return null;
          let s = new Hi(t.getValue()[0], r.getValue()[0], n.getValue()[0], i.getValue()[0]);
          return this.removeIncorrectCodewords(e, s), s;
        }
        removeIncorrectCodewords(e, t) {
          for (let r = 0; r < e.length; r++) {
            let n = e[r];
            if (e[r] == null)
              continue;
            let i = n.getValue() % 30, s = n.getRowNumber();
            if (s > t.getRowCount()) {
              e[r] = null;
              continue;
            }
            switch (this._isLeft || (s += 2), s % 3) {
              case 0:
                i * 3 + 1 !== t.getRowCountUpperPart() && (e[r] = null);
                break;
              case 1:
                (Math.trunc(i / 3) !== t.getErrorCorrectionLevel() || i % 3 !== t.getRowCountLowerPart()) && (e[r] = null);
                break;
              case 2:
                i + 1 !== t.getColumnCount() && (e[r] = null);
                break;
            }
          }
        }
        isLeft() {
          return this._isLeft;
        }
        // @Override
        toString() {
          return "IsLeft: " + this._isLeft + `
` + super.toString();
        }
      }
      class jr {
        constructor(e, t) {
          this.ADJUST_ROW_NUMBER_SKIP = 2, this.barcodeMetadata = e, this.barcodeColumnCount = e.getColumnCount(), this.boundingBox = t, this.detectionResultColumns = new Array(this.barcodeColumnCount + 2);
        }
        getDetectionResultColumns() {
          this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]), this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount + 1]);
          let e = ae.MAX_CODEWORDS_IN_BARCODE, t;
          do
            t = e, e = this.adjustRowNumbersAndGetCount();
          while (e > 0 && e < t);
          return this.detectionResultColumns;
        }
        adjustIndicatorColumnRowNumbers(e) {
          e?.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata);
        }
        // TODO ensure that no detected codewords with unknown row number are left
        // we should be able to estimate the row height and use it as a hint for the row number
        // we should also fill the rows top to bottom and bottom to top
        /**
         * @return number of codewords which don't have a valid row number. Note that the count is not accurate as codewords
         * will be counted several times. It just serves as an indicator to see when we can stop adjusting row numbers
         */
        adjustRowNumbersAndGetCount() {
          let e = this.adjustRowNumbersByRow();
          if (e === 0)
            return 0;
          for (let t = 1; t < this.barcodeColumnCount + 1; t++) {
            let r = this.detectionResultColumns[t].getCodewords();
            for (let n = 0; n < r.length; n++)
              r[n] != null && (r[n].hasValidRowNumber() || this.adjustRowNumbers(t, n, r));
          }
          return e;
        }
        adjustRowNumbersByRow() {
          return this.adjustRowNumbersFromBothRI(), this.adjustRowNumbersFromLRI() + this.adjustRowNumbersFromRRI();
        }
        adjustRowNumbersFromBothRI() {
          if (this.detectionResultColumns[0] == null || this.detectionResultColumns[this.barcodeColumnCount + 1] == null)
            return;
          let e = this.detectionResultColumns[0].getCodewords(), t = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
          for (let r = 0; r < e.length; r++)
            if (e[r] != null && t[r] != null && e[r].getRowNumber() === t[r].getRowNumber())
              for (let n = 1; n <= this.barcodeColumnCount; n++) {
                let i = this.detectionResultColumns[n].getCodewords()[r];
                i != null && (i.setRowNumber(e[r].getRowNumber()), i.hasValidRowNumber() || (this.detectionResultColumns[n].getCodewords()[r] = null));
              }
        }
        adjustRowNumbersFromRRI() {
          if (this.detectionResultColumns[this.barcodeColumnCount + 1] == null)
            return 0;
          let e = 0, t = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
          for (let r = 0; r < t.length; r++) {
            if (t[r] == null)
              continue;
            let n = t[r].getRowNumber(), i = 0;
            for (let s = this.barcodeColumnCount + 1; s > 0 && i < this.ADJUST_ROW_NUMBER_SKIP; s--) {
              let a = this.detectionResultColumns[s].getCodewords()[r];
              a != null && (i = jr.adjustRowNumberIfValid(n, i, a), a.hasValidRowNumber() || e++);
            }
          }
          return e;
        }
        adjustRowNumbersFromLRI() {
          if (this.detectionResultColumns[0] == null)
            return 0;
          let e = 0, t = this.detectionResultColumns[0].getCodewords();
          for (let r = 0; r < t.length; r++) {
            if (t[r] == null)
              continue;
            let n = t[r].getRowNumber(), i = 0;
            for (let s = 1; s < this.barcodeColumnCount + 1 && i < this.ADJUST_ROW_NUMBER_SKIP; s++) {
              let a = this.detectionResultColumns[s].getCodewords()[r];
              a != null && (i = jr.adjustRowNumberIfValid(n, i, a), a.hasValidRowNumber() || e++);
            }
          }
          return e;
        }
        static adjustRowNumberIfValid(e, t, r) {
          return r == null || r.hasValidRowNumber() || (r.isValidRowNumber(e) ? (r.setRowNumber(e), t = 0) : ++t), t;
        }
        adjustRowNumbers(e, t, r) {
          if (!this.detectionResultColumns[e - 1])
            return;
          let n = r[t], i = this.detectionResultColumns[e - 1].getCodewords(), s = i;
          this.detectionResultColumns[e + 1] != null && (s = this.detectionResultColumns[e + 1].getCodewords());
          let a = new Array(14);
          a[2] = i[t], a[3] = s[t], t > 0 && (a[0] = r[t - 1], a[4] = i[t - 1], a[5] = s[t - 1]), t > 1 && (a[8] = r[t - 2], a[10] = i[t - 2], a[11] = s[t - 2]), t < r.length - 1 && (a[1] = r[t + 1], a[6] = i[t + 1], a[7] = s[t + 1]), t < r.length - 2 && (a[9] = r[t + 2], a[12] = i[t + 2], a[13] = s[t + 2]);
          for (let o of a)
            if (jr.adjustRowNumber(n, o))
              return;
        }
        /**
         * @return true, if row number was adjusted, false otherwise
         */
        static adjustRowNumber(e, t) {
          return t == null ? !1 : t.hasValidRowNumber() && t.getBucket() === e.getBucket() ? (e.setRowNumber(t.getRowNumber()), !0) : !1;
        }
        getBarcodeColumnCount() {
          return this.barcodeColumnCount;
        }
        getBarcodeRowCount() {
          return this.barcodeMetadata.getRowCount();
        }
        getBarcodeECLevel() {
          return this.barcodeMetadata.getErrorCorrectionLevel();
        }
        setBoundingBox(e) {
          this.boundingBox = e;
        }
        getBoundingBox() {
          return this.boundingBox;
        }
        setDetectionResultColumn(e, t) {
          this.detectionResultColumns[e] = t;
        }
        getDetectionResultColumn(e) {
          return this.detectionResultColumns[e];
        }
        // @Override
        toString() {
          let e = this.detectionResultColumns[0];
          e == null && (e = this.detectionResultColumns[this.barcodeColumnCount + 1]);
          let t = new zr();
          for (let r = 0; r < e.getCodewords().length; r++) {
            t.format("CW %3d:", r);
            for (let n = 0; n < this.barcodeColumnCount + 2; n++) {
              if (this.detectionResultColumns[n] == null) {
                t.format("    |   ");
                continue;
              }
              let i = this.detectionResultColumns[n].getCodewords()[r];
              if (i == null) {
                t.format("    |   ");
                continue;
              }
              t.format(" %3d|%3d", i.getRowNumber(), i.getValue());
            }
            t.format("%n");
          }
          return t.toString();
        }
      }
      class Kr {
        constructor(e, t, r, n) {
          this.rowNumber = Kr.BARCODE_ROW_UNKNOWN, this.startX = Math.trunc(e), this.endX = Math.trunc(t), this.bucket = Math.trunc(r), this.value = Math.trunc(n);
        }
        hasValidRowNumber() {
          return this.isValidRowNumber(this.rowNumber);
        }
        isValidRowNumber(e) {
          return e !== Kr.BARCODE_ROW_UNKNOWN && this.bucket === e % 3 * 3;
        }
        setRowNumberAsRowIndicatorColumn() {
          this.rowNumber = Math.trunc(Math.trunc(this.value / 30) * 3 + Math.trunc(this.bucket / 3));
        }
        getWidth() {
          return this.endX - this.startX;
        }
        getStartX() {
          return this.startX;
        }
        getEndX() {
          return this.endX;
        }
        getBucket() {
          return this.bucket;
        }
        getValue() {
          return this.value;
        }
        getRowNumber() {
          return this.rowNumber;
        }
        setRowNumber(e) {
          this.rowNumber = e;
        }
        //   @Override
        toString() {
          return this.rowNumber + "|" + this.value;
        }
      }
      Kr.BARCODE_ROW_UNKNOWN = -1;
      class Rt {
        /* @note
         * this action have to be performed before first use of class
         * - static constructor
         * working with 32bit float (based from Java logic)
        */
        static initialize() {
          for (let e = 0; e < ae.SYMBOL_TABLE.length; e++) {
            let t = ae.SYMBOL_TABLE[e], r = t & 1;
            for (let n = 0; n < ae.BARS_IN_MODULE; n++) {
              let i = 0;
              for (; (t & 1) === r; )
                i += 1, t >>= 1;
              r = t & 1, Rt.RATIOS_TABLE[e] || (Rt.RATIOS_TABLE[e] = new Array(ae.BARS_IN_MODULE)), Rt.RATIOS_TABLE[e][ae.BARS_IN_MODULE - n - 1] = Math.fround(i / ae.MODULES_IN_CODEWORD);
            }
          }
          this.bSymbolTableReady = !0;
        }
        static getDecodedValue(e) {
          let t = Rt.getDecodedCodewordValue(Rt.sampleBitCounts(e));
          return t !== -1 ? t : Rt.getClosestDecodedValue(e);
        }
        static sampleBitCounts(e) {
          let t = Ee.sum(e), r = new Int32Array(ae.BARS_IN_MODULE), n = 0, i = 0;
          for (let s = 0; s < ae.MODULES_IN_CODEWORD; s++) {
            let a = t / (2 * ae.MODULES_IN_CODEWORD) + s * t / ae.MODULES_IN_CODEWORD;
            i + e[n] <= a && (i += e[n], n++), r[n]++;
          }
          return r;
        }
        static getDecodedCodewordValue(e) {
          let t = Rt.getBitValue(e);
          return ae.getCodeword(t) === -1 ? -1 : t;
        }
        static getBitValue(e) {
          let t = (
            /*long*/
            0
          );
          for (let r = 0; r < e.length; r++)
            for (let n = 0; n < e[r]; n++)
              t = t << 1 | (r % 2 === 0 ? 1 : 0);
          return Math.trunc(t);
        }
        // working with 32bit float (as in Java)
        static getClosestDecodedValue(e) {
          let t = Ee.sum(e), r = new Array(ae.BARS_IN_MODULE);
          if (t > 1)
            for (let s = 0; s < r.length; s++)
              r[s] = Math.fround(e[s] / t);
          let n = Ir.MAX_VALUE, i = -1;
          this.bSymbolTableReady || Rt.initialize();
          for (let s = 0; s < Rt.RATIOS_TABLE.length; s++) {
            let a = 0, o = Rt.RATIOS_TABLE[s];
            for (let l = 0; l < ae.BARS_IN_MODULE; l++) {
              let u = Math.fround(o[l] - r[l]);
              if (a += Math.fround(u * u), a >= n)
                break;
            }
            a < n && (n = a, i = ae.SYMBOL_TABLE[s]);
          }
          return i;
        }
      }
      Rt.bSymbolTableReady = !1, Rt.RATIOS_TABLE = new Array(ae.SYMBOL_TABLE.length).map((d) => new Array(ae.BARS_IN_MODULE));
      class Jn {
        constructor() {
          this.segmentCount = -1, this.fileSize = -1, this.timestamp = -1, this.checksum = -1;
        }
        /**
         * The Segment ID represents the segment of the whole file distributed over different symbols.
         *
         * @return File segment index
         */
        getSegmentIndex() {
          return this.segmentIndex;
        }
        setSegmentIndex(e) {
          this.segmentIndex = e;
        }
        /**
         * Is the same for each related PDF417 symbol
         *
         * @return File ID
         */
        getFileId() {
          return this.fileId;
        }
        setFileId(e) {
          this.fileId = e;
        }
        /**
         * @return always null
         * @deprecated use dedicated already parsed fields
         */
        //   @Deprecated
        getOptionalData() {
          return this.optionalData;
        }
        /**
         * @param optionalData old optional data format as int array
         * @deprecated parse and use new fields
         */
        //   @Deprecated
        setOptionalData(e) {
          this.optionalData = e;
        }
        /**
         * @return true if it is the last segment
         */
        isLastSegment() {
          return this.lastSegment;
        }
        setLastSegment(e) {
          this.lastSegment = e;
        }
        /**
         * @return count of segments, -1 if not set
         */
        getSegmentCount() {
          return this.segmentCount;
        }
        setSegmentCount(e) {
          this.segmentCount = e;
        }
        getSender() {
          return this.sender || null;
        }
        setSender(e) {
          this.sender = e;
        }
        getAddressee() {
          return this.addressee || null;
        }
        setAddressee(e) {
          this.addressee = e;
        }
        /**
         * Filename of the encoded file
         *
         * @return filename
         */
        getFileName() {
          return this.fileName;
        }
        setFileName(e) {
          this.fileName = e;
        }
        /**
         * filesize in bytes of the encoded file
         *
         * @return filesize in bytes, -1 if not set
         */
        getFileSize() {
          return this.fileSize;
        }
        setFileSize(e) {
          this.fileSize = e;
        }
        /**
         * 16-bit CRC checksum using CCITT-16
         *
         * @return crc checksum, -1 if not set
         */
        getChecksum() {
          return this.checksum;
        }
        setChecksum(e) {
          this.checksum = e;
        }
        /**
         * unix epock timestamp, elapsed seconds since 1970-01-01
         *
         * @return elapsed seconds, -1 if not set
         */
        getTimestamp() {
          return this.timestamp;
        }
        setTimestamp(e) {
          this.timestamp = e;
        }
      }
      class $n {
        /**
         * Parses a string to a number, since JS has no really Int64.
         *
         * @param num Numeric string.
         * @param radix Destination radix.
         */
        static parseLong(e, t = void 0) {
          return parseInt(e, t);
        }
      }
      class ei extends p {
      }
      ei.kind = "NullPointerException";
      class Wi {
        /**
         * Writes <code>b.length</code> bytes from the specified byte array
         * to this output stream. The general contract for <code>write(b)</code>
         * is that it should have exactly the same effect as the call
         * <code>write(b, 0, b.length)</code>.
         *
         * @param      b   the data.
         * @exception  IOException  if an I/O error occurs.
         * @see        java.io.OutputStream#write(byte[], int, int)
         */
        writeBytes(e) {
          this.writeBytesOffset(e, 0, e.length);
        }
        /**
         * Writes <code>len</code> bytes from the specified byte array
         * starting at offset <code>off</code> to this output stream.
         * The general contract for <code>write(b, off, len)</code> is that
         * some of the bytes in the array <code>b</code> are written to the
         * output stream in order; element <code>b[off]</code> is the first
         * byte written and <code>b[off+len-1]</code> is the last byte written
         * by this operation.
         * <p>
         * The <code>write</code> method of <code>OutputStream</code> calls
         * the write method of one argument on each of the bytes to be
         * written out. Subclasses are encouraged to override this method and
         * provide a more efficient implementation.
         * <p>
         * If <code>b</code> is <code>null</code>, a
         * <code>NullPointerException</code> is thrown.
         * <p>
         * If <code>off</code> is negative, or <code>len</code> is negative, or
         * <code>off+len</code> is greater than the length of the array
         * <code>b</code>, then an <tt>IndexOutOfBoundsException</tt> is thrown.
         *
         * @param      b     the data.
         * @param      off   the start offset in the data.
         * @param      len   the number of bytes to write.
         * @exception  IOException  if an I/O error occurs. In particular,
         *             an <code>IOException</code> is thrown if the output
         *             stream is closed.
         */
        writeBytesOffset(e, t, r) {
          if (e == null)
            throw new ei();
          if (t < 0 || t > e.length || r < 0 || t + r > e.length || t + r < 0)
            throw new ue();
          if (r === 0)
            return;
          for (let n = 0; n < r; n++)
            this.write(e[t + n]);
        }
        /**
         * Flushes this output stream and forces any buffered output bytes
         * to be written out. The general contract of <code>flush</code> is
         * that calling it is an indication that, if any bytes previously
         * written have been buffered by the implementation of the output
         * stream, such bytes should immediately be written to their
         * intended destination.
         * <p>
         * If the intended destination of this stream is an abstraction provided by
         * the underlying operating system, for example a file, then flushing the
         * stream guarantees only that bytes previously written to the stream are
         * passed to the operating system for writing; it does not guarantee that
         * they are actually written to a physical device such as a disk drive.
         * <p>
         * The <code>flush</code> method of <code>OutputStream</code> does nothing.
         *
         * @exception  IOException  if an I/O error occurs.
         */
        flush() {
        }
        /**
         * Closes this output stream and releases any system resources
         * associated with this stream. The general contract of <code>close</code>
         * is that it closes the output stream. A closed stream cannot perform
         * output operations and cannot be reopened.
         * <p>
         * The <code>close</code> method of <code>OutputStream</code> does nothing.
         *
         * @exception  IOException  if an I/O error occurs.
         */
        close() {
        }
      }
      class Xi extends p {
      }
      class zi extends Wi {
        /**
         * Creates a new byte array output stream. The buffer capacity is
         * initially 32 bytes, though its size increases if necessary.
         */
        // public constructor() {
        //     this(32);
        // }
        /**
         * Creates a new byte array output stream, with a buffer capacity of
         * the specified size, in bytes.
         *
         * @param   size   the initial size.
         * @exception  IllegalArgumentException if size is negative.
         */
        constructor(e = 32) {
          if (super(), this.count = 0, e < 0)
            throw new v("Negative initial size: " + e);
          this.buf = new Uint8Array(e);
        }
        /**
         * Increases the capacity if necessary to ensure that it can hold
         * at least the number of elements specified by the minimum
         * capacity argument.
         *
         * @param minCapacity the desired minimum capacity
         * @throws OutOfMemoryError if {@code minCapacity < 0}.  This is
         * interpreted as a request for the unsatisfiably large capacity
         * {@code (long) Integer.MAX_VALUE + (minCapacity - Integer.MAX_VALUE)}.
         */
        ensureCapacity(e) {
          e - this.buf.length > 0 && this.grow(e);
        }
        /**
         * Increases the capacity to ensure that it can hold at least the
         * number of elements specified by the minimum capacity argument.
         *
         * @param minCapacity the desired minimum capacity
         */
        grow(e) {
          let r = this.buf.length << 1;
          if (r - e < 0 && (r = e), r < 0) {
            if (e < 0)
              throw new Xi();
            r = V.MAX_VALUE;
          }
          this.buf = G.copyOfUint8Array(this.buf, r);
        }
        /**
         * Writes the specified byte to this byte array output stream.
         *
         * @param   b   the byte to be written.
         */
        write(e) {
          this.ensureCapacity(this.count + 1), this.buf[this.count] = /*(byte)*/
          e, this.count += 1;
        }
        /**
         * Writes <code>len</code> bytes from the specified byte array
         * starting at offset <code>off</code> to this byte array output stream.
         *
         * @param   b     the data.
         * @param   off   the start offset in the data.
         * @param   len   the number of bytes to write.
         */
        writeBytesOffset(e, t, r) {
          if (t < 0 || t > e.length || r < 0 || t + r - e.length > 0)
            throw new ue();
          this.ensureCapacity(this.count + r), j.arraycopy(e, t, this.buf, this.count, r), this.count += r;
        }
        /**
         * Writes the complete contents of this byte array output stream to
         * the specified output stream argument, as if by calling the output
         * stream's write method using <code>out.write(buf, 0, count)</code>.
         *
         * @param      out   the output stream to which to write the data.
         * @exception  IOException  if an I/O error occurs.
         */
        writeTo(e) {
          e.writeBytesOffset(this.buf, 0, this.count);
        }
        /**
         * Resets the <code>count</code> field of this byte array output
         * stream to zero, so that all currently accumulated output in the
         * output stream is discarded. The output stream can be used again,
         * reusing the already allocated buffer space.
         *
         * @see     java.io.ByteArrayInputStream#count
         */
        reset() {
          this.count = 0;
        }
        /**
         * Creates a newly allocated byte array. Its size is the current
         * size of this output stream and the valid contents of the buffer
         * have been copied into it.
         *
         * @return  the current contents of this output stream, as a byte array.
         * @see     java.io.ByteArrayOutputStream#size()
         */
        toByteArray() {
          return G.copyOfUint8Array(this.buf, this.count);
        }
        /**
         * Returns the current size of the buffer.
         *
         * @return  the value of the <code>count</code> field, which is the number
         *          of valid bytes in this output stream.
         * @see     java.io.ByteArrayOutputStream#count
         */
        size() {
          return this.count;
        }
        toString(e) {
          return e ? typeof e == "string" ? this.toString_string(e) : this.toString_number(e) : this.toString_void();
        }
        /**
         * Converts the buffer's contents into a string decoding bytes using the
         * platform's default character set. The length of the new <tt>String</tt>
         * is a function of the character set, and hence may not be equal to the
         * size of the buffer.
         *
         * <p> This method always replaces malformed-input and unmappable-character
         * sequences with the default replacement string for the platform's
         * default character set. The {@linkplain java.nio.charset.CharsetDecoder}
         * class should be used when more control over the decoding process is
         * required.
         *
         * @return String decoded from the buffer's contents.
         * @since  JDK1.1
         */
        toString_void() {
          return new String(
            this.buf
            /*, 0, this.count*/
          ).toString();
        }
        /**
         * Converts the buffer's contents into a string by decoding the bytes using
         * the specified {@link java.nio.charset.Charset charsetName}. The length of
         * the new <tt>String</tt> is a function of the charset, and hence may not be
         * equal to the length of the byte array.
         *
         * <p> This method always replaces malformed-input and unmappable-character
         * sequences with this charset's default replacement string. The {@link
         * java.nio.charset.CharsetDecoder} class should be used when more control
         * over the decoding process is required.
         *
         * @param  charsetName  the name of a supported
         *              {@linkplain java.nio.charset.Charset </code>charset<code>}
         * @return String decoded from the buffer's contents.
         * @exception  UnsupportedEncodingException
         *             If the named charset is not supported
         * @since   JDK1.1
         */
        toString_string(e) {
          return new String(
            this.buf
            /*, 0, this.count, charsetName*/
          ).toString();
        }
        /**
         * Creates a newly allocated string. Its size is the current size of
         * the output stream and the valid contents of the buffer have been
         * copied into it. Each character <i>c</i> in the resulting string is
         * constructed from the corresponding element <i>b</i> in the byte
         * array such that:
         * <blockquote><pre>
         *     c == (char)(((hibyte &amp; 0xff) &lt;&lt; 8) | (b &amp; 0xff))
         * </pre></blockquote>
         *
         * @deprecated This method does not properly convert bytes into characters.
         * As of JDK&nbsp;1.1, the preferred way to do this is via the
         * <code>toString(String enc)</code> method, which takes an encoding-name
         * argument, or the <code>toString()</code> method, which uses the
         * platform's default character encoding.
         *
         * @param      hibyte    the high byte of each resulting Unicode character.
         * @return     the current contents of the output stream, as a string.
         * @see        java.io.ByteArrayOutputStream#size()
         * @see        java.io.ByteArrayOutputStream#toString(String)
         * @see        java.io.ByteArrayOutputStream#toString()
         */
        // @Deprecated
        toString_number(e) {
          return new String(
            this.buf
            /*, hibyte, 0, this.count*/
          ).toString();
        }
        /**
         * Closing a <tt>ByteArrayOutputStream</tt> has no effect. The methods in
         * this class can be called after the stream has been closed without
         * generating an <tt>IOException</tt>.
         * <p>
         *
         * @throws IOException
         */
        close() {
        }
      }
      var ke;
      (function(d) {
        d[d.ALPHA = 0] = "ALPHA", d[d.LOWER = 1] = "LOWER", d[d.MIXED = 2] = "MIXED", d[d.PUNCT = 3] = "PUNCT", d[d.ALPHA_SHIFT = 4] = "ALPHA_SHIFT", d[d.PUNCT_SHIFT = 5] = "PUNCT_SHIFT";
      })(ke || (ke = {}));
      function ti() {
        if (typeof window < "u")
          return window.BigInt || null;
        if (typeof xn < "u")
          return xn.BigInt || null;
        if (typeof self < "u")
          return self.BigInt || null;
        throw new Error("Can't search globals for BigInt!");
      }
      let fn;
      function ur(d) {
        if (typeof fn > "u" && (fn = ti()), fn === null)
          throw new Error("BigInt is not supported!");
        return fn(d);
      }
      function Yi() {
        let d = [];
        d[0] = ur(1);
        let e = ur(900);
        d[1] = e;
        for (let t = 2; t < 16; t++)
          d[t] = d[t - 1] * e;
        return d;
      }
      class O {
        //   private DecodedBitStreamParser() {
        // }
        /**
         *
         * @param codewords
         * @param ecLevel
         *
         * @throws FormatException
         */
        static decode(e, t) {
          let r = new he(""), n = F.ISO8859_1;
          r.enableDecoding(n);
          let i = 1, s = e[i++], a = new Jn();
          for (; i < e[0]; ) {
            switch (s) {
              case O.TEXT_COMPACTION_MODE_LATCH:
                i = O.textCompaction(e, i, r);
                break;
              case O.BYTE_COMPACTION_MODE_LATCH:
              case O.BYTE_COMPACTION_MODE_LATCH_6:
                i = O.byteCompaction(s, e, n, i, r);
                break;
              case O.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                r.append(
                  /*(char)*/
                  e[i++]
                );
                break;
              case O.NUMERIC_COMPACTION_MODE_LATCH:
                i = O.numericCompaction(e, i, r);
                break;
              case O.ECI_CHARSET:
                F.getCharacterSetECIByValue(e[i++]);
                break;
              case O.ECI_GENERAL_PURPOSE:
                i += 2;
                break;
              case O.ECI_USER_DEFINED:
                i++;
                break;
              case O.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                i = O.decodeMacroBlock(e, i, a);
                break;
              case O.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
              case O.MACRO_PDF417_TERMINATOR:
                throw new L();
              default:
                i--, i = O.textCompaction(e, i, r);
                break;
            }
            if (i < e.length)
              s = e[i++];
            else
              throw L.getFormatInstance();
          }
          if (r.length() === 0)
            throw L.getFormatInstance();
          let o = new $t(null, r.toString(), null, t);
          return o.setOther(a), o;
        }
        /**
         *
         * @param int
         * @param param1
         * @param codewords
         * @param int
         * @param codeIndex
         * @param PDF417ResultMetadata
         * @param resultMetadata
         *
         * @throws FormatException
         */
        // @SuppressWarnings("deprecation")
        static decodeMacroBlock(e, t, r) {
          if (t + O.NUMBER_OF_SEQUENCE_CODEWORDS > e[0])
            throw L.getFormatInstance();
          let n = new Int32Array(O.NUMBER_OF_SEQUENCE_CODEWORDS);
          for (let a = 0; a < O.NUMBER_OF_SEQUENCE_CODEWORDS; a++, t++)
            n[a] = e[t];
          r.setSegmentIndex(V.parseInt(O.decodeBase900toBase10(n, O.NUMBER_OF_SEQUENCE_CODEWORDS)));
          let i = new he();
          t = O.textCompaction(e, t, i), r.setFileId(i.toString());
          let s = -1;
          for (e[t] === O.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (s = t + 1); t < e[0]; )
            switch (e[t]) {
              case O.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                switch (t++, e[t]) {
                  case O.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
                    let a = new he();
                    t = O.textCompaction(e, t + 1, a), r.setFileName(a.toString());
                    break;
                  case O.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
                    let o = new he();
                    t = O.textCompaction(e, t + 1, o), r.setSender(o.toString());
                    break;
                  case O.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
                    let l = new he();
                    t = O.textCompaction(e, t + 1, l), r.setAddressee(l.toString());
                    break;
                  case O.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
                    let u = new he();
                    t = O.numericCompaction(e, t + 1, u), r.setSegmentCount(V.parseInt(u.toString()));
                    break;
                  case O.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
                    let g = new he();
                    t = O.numericCompaction(e, t + 1, g), r.setTimestamp($n.parseLong(g.toString()));
                    break;
                  case O.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
                    let x = new he();
                    t = O.numericCompaction(e, t + 1, x), r.setChecksum(V.parseInt(x.toString()));
                    break;
                  case O.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
                    let y = new he();
                    t = O.numericCompaction(e, t + 1, y), r.setFileSize($n.parseLong(y.toString()));
                    break;
                  default:
                    throw L.getFormatInstance();
                }
                break;
              case O.MACRO_PDF417_TERMINATOR:
                t++, r.setLastSegment(!0);
                break;
              default:
                throw L.getFormatInstance();
            }
          if (s !== -1) {
            let a = t - s;
            r.isLastSegment() && a--, r.setOptionalData(G.copyOfRange(e, s, s + a));
          }
          return t;
        }
        /**
         * Text Compaction mode (see 5.4.1.5) permits all printable ASCII characters to be
         * encoded, i.e. values 32 - 126 inclusive in accordance with ISO/IEC 646 (IRV), as
         * well as selected control characters.
         *
         * @param codewords The array of codewords (data + error)
         * @param codeIndex The current index into the codeword array.
         * @param result    The decoded data is appended to the result.
         * @return The next index into the codeword array.
         */
        static textCompaction(e, t, r) {
          let n = new Int32Array((e[0] - t) * 2), i = new Int32Array((e[0] - t) * 2), s = 0, a = !1;
          for (; t < e[0] && !a; ) {
            let o = e[t++];
            if (o < O.TEXT_COMPACTION_MODE_LATCH)
              n[s] = o / 30, n[s + 1] = o % 30, s += 2;
            else
              switch (o) {
                case O.TEXT_COMPACTION_MODE_LATCH:
                  n[s++] = O.TEXT_COMPACTION_MODE_LATCH;
                  break;
                case O.BYTE_COMPACTION_MODE_LATCH:
                case O.BYTE_COMPACTION_MODE_LATCH_6:
                case O.NUMERIC_COMPACTION_MODE_LATCH:
                case O.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                case O.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                case O.MACRO_PDF417_TERMINATOR:
                  t--, a = !0;
                  break;
                case O.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  n[s] = O.MODE_SHIFT_TO_BYTE_COMPACTION_MODE, o = e[t++], i[s] = o, s++;
                  break;
              }
          }
          return O.decodeTextCompaction(n, i, s, r), t;
        }
        /**
         * The Text Compaction mode includes all the printable ASCII characters
         * (i.e. values from 32 to 126) and three ASCII control characters: HT or tab
         * (9: e), LF or line feed (10: e), and CR or carriage
         * return (13: e). The Text Compaction mode also includes various latch
         * and shift characters which are used exclusively within the mode. The Text
         * Compaction mode encodes up to 2 characters per codeword. The compaction rules
         * for converting data into PDF417 codewords are defined in 5.4.2.2. The sub-mode
         * switches are defined in 5.4.2.3.
         *
         * @param textCompactionData The text compaction data.
         * @param byteCompactionData The byte compaction data if there
         *                           was a mode shift.
         * @param length             The size of the text compaction and byte compaction data.
         * @param result             The decoded data is appended to the result.
         */
        static decodeTextCompaction(e, t, r, n) {
          let i = ke.ALPHA, s = ke.ALPHA, a = 0;
          for (; a < r; ) {
            let o = e[a], l = (
              /*char*/
              ""
            );
            switch (i) {
              case ke.ALPHA:
                if (o < 26)
                  l = /*(char)('A' + subModeCh) */
                  String.fromCharCode(65 + o);
                else
                  switch (o) {
                    case 26:
                      l = " ";
                      break;
                    case O.LL:
                      i = ke.LOWER;
                      break;
                    case O.ML:
                      i = ke.MIXED;
                      break;
                    case O.PS:
                      s = i, i = ke.PUNCT_SHIFT;
                      break;
                    case O.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                      n.append(
                        /*(char)*/
                        t[a]
                      );
                      break;
                    case O.TEXT_COMPACTION_MODE_LATCH:
                      i = ke.ALPHA;
                      break;
                  }
                break;
              case ke.LOWER:
                if (o < 26)
                  l = /*(char)('a' + subModeCh)*/
                  String.fromCharCode(97 + o);
                else
                  switch (o) {
                    case 26:
                      l = " ";
                      break;
                    case O.AS:
                      s = i, i = ke.ALPHA_SHIFT;
                      break;
                    case O.ML:
                      i = ke.MIXED;
                      break;
                    case O.PS:
                      s = i, i = ke.PUNCT_SHIFT;
                      break;
                    case O.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                      n.append(
                        /*(char)*/
                        t[a]
                      );
                      break;
                    case O.TEXT_COMPACTION_MODE_LATCH:
                      i = ke.ALPHA;
                      break;
                  }
                break;
              case ke.MIXED:
                if (o < O.PL)
                  l = O.MIXED_CHARS[o];
                else
                  switch (o) {
                    case O.PL:
                      i = ke.PUNCT;
                      break;
                    case 26:
                      l = " ";
                      break;
                    case O.LL:
                      i = ke.LOWER;
                      break;
                    case O.AL:
                      i = ke.ALPHA;
                      break;
                    case O.PS:
                      s = i, i = ke.PUNCT_SHIFT;
                      break;
                    case O.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                      n.append(
                        /*(char)*/
                        t[a]
                      );
                      break;
                    case O.TEXT_COMPACTION_MODE_LATCH:
                      i = ke.ALPHA;
                      break;
                  }
                break;
              case ke.PUNCT:
                if (o < O.PAL)
                  l = O.PUNCT_CHARS[o];
                else
                  switch (o) {
                    case O.PAL:
                      i = ke.ALPHA;
                      break;
                    case O.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                      n.append(
                        /*(char)*/
                        t[a]
                      );
                      break;
                    case O.TEXT_COMPACTION_MODE_LATCH:
                      i = ke.ALPHA;
                      break;
                  }
                break;
              case ke.ALPHA_SHIFT:
                if (i = s, o < 26)
                  l = /*(char)('A' + subModeCh)*/
                  String.fromCharCode(65 + o);
                else
                  switch (o) {
                    case 26:
                      l = " ";
                      break;
                    case O.TEXT_COMPACTION_MODE_LATCH:
                      i = ke.ALPHA;
                      break;
                  }
                break;
              case ke.PUNCT_SHIFT:
                if (i = s, o < O.PAL)
                  l = O.PUNCT_CHARS[o];
                else
                  switch (o) {
                    case O.PAL:
                      i = ke.ALPHA;
                      break;
                    case O.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                      n.append(
                        /*(char)*/
                        t[a]
                      );
                      break;
                    case O.TEXT_COMPACTION_MODE_LATCH:
                      i = ke.ALPHA;
                      break;
                  }
                break;
            }
            l !== "" && n.append(l), a++;
          }
        }
        /**
         * Byte Compaction mode (see 5.4.3) permits all 256 possible 8-bit byte values to be encoded.
         * This includes all ASCII characters value 0 to 127 inclusive and provides for international
         * character set support.
         *
         * @param mode      The byte compaction mode i.e. 901 or 924
         * @param codewords The array of codewords (data + error)
         * @param encoding  Currently active character encoding
         * @param codeIndex The current index into the codeword array.
         * @param result    The decoded data is appended to the result.
         * @return The next index into the codeword array.
         */
        static byteCompaction(e, t, r, n, i) {
          let s = new zi(), a = 0, o = (
            /*long*/
            0
          ), l = !1;
          switch (e) {
            case O.BYTE_COMPACTION_MODE_LATCH:
              let u = new Int32Array(6), g = t[n++];
              for (; n < t[0] && !l; )
                switch (u[a++] = g, o = 900 * o + g, g = t[n++], g) {
                  case O.TEXT_COMPACTION_MODE_LATCH:
                  case O.BYTE_COMPACTION_MODE_LATCH:
                  case O.NUMERIC_COMPACTION_MODE_LATCH:
                  case O.BYTE_COMPACTION_MODE_LATCH_6:
                  case O.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                  case O.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                  case O.MACRO_PDF417_TERMINATOR:
                    n--, l = !0;
                    break;
                  default:
                    if (a % 5 === 0 && a > 0) {
                      for (let x = 0; x < 6; ++x)
                        s.write(
                          /*(byte)*/
                          Number(ur(o) >> ur(8 * (5 - x)))
                        );
                      o = 0, a = 0;
                    }
                    break;
                }
              n === t[0] && g < O.TEXT_COMPACTION_MODE_LATCH && (u[a++] = g);
              for (let x = 0; x < a; x++)
                s.write(
                  /*(byte)*/
                  u[x]
                );
              break;
            case O.BYTE_COMPACTION_MODE_LATCH_6:
              for (; n < t[0] && !l; ) {
                let x = t[n++];
                if (x < O.TEXT_COMPACTION_MODE_LATCH)
                  a++, o = 900 * o + x;
                else
                  switch (x) {
                    case O.TEXT_COMPACTION_MODE_LATCH:
                    case O.BYTE_COMPACTION_MODE_LATCH:
                    case O.NUMERIC_COMPACTION_MODE_LATCH:
                    case O.BYTE_COMPACTION_MODE_LATCH_6:
                    case O.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                    case O.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                    case O.MACRO_PDF417_TERMINATOR:
                      n--, l = !0;
                      break;
                  }
                if (a % 5 === 0 && a > 0) {
                  for (let y = 0; y < 6; ++y)
                    s.write(
                      /*(byte)*/
                      Number(ur(o) >> ur(8 * (5 - y)))
                    );
                  o = 0, a = 0;
                }
              }
              break;
          }
          return i.append(Ce.decode(s.toByteArray(), r)), n;
        }
        /**
         * Numeric Compaction mode (see 5.4.4) permits efficient encoding of numeric data strings.
         *
         * @param codewords The array of codewords (data + error)
         * @param codeIndex The current index into the codeword array.
         * @param result    The decoded data is appended to the result.
         * @return The next index into the codeword array.
         *
         * @throws FormatException
         */
        static numericCompaction(e, t, r) {
          let n = 0, i = !1, s = new Int32Array(O.MAX_NUMERIC_CODEWORDS);
          for (; t < e[0] && !i; ) {
            let a = e[t++];
            if (t === e[0] && (i = !0), a < O.TEXT_COMPACTION_MODE_LATCH)
              s[n] = a, n++;
            else
              switch (a) {
                case O.TEXT_COMPACTION_MODE_LATCH:
                case O.BYTE_COMPACTION_MODE_LATCH:
                case O.BYTE_COMPACTION_MODE_LATCH_6:
                case O.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                case O.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                case O.MACRO_PDF417_TERMINATOR:
                  t--, i = !0;
                  break;
              }
            (n % O.MAX_NUMERIC_CODEWORDS === 0 || a === O.NUMERIC_COMPACTION_MODE_LATCH || i) && n > 0 && (r.append(O.decodeBase900toBase10(s, n)), n = 0);
          }
          return t;
        }
        /**
         * Convert a list of Numeric Compacted codewords from Base 900 to Base 10.
         *
         * @param codewords The array of codewords
         * @param count     The number of codewords
         * @return The decoded string representing the Numeric data.
         *
         * EXAMPLE
         * Encode the fifteen digit numeric string 000213298174000
         * Prefix the numeric string with a 1 and set the initial value of
         * t = 1 000 213 298 174 000
         * Calculate codeword 0
         * d0 = 1 000 213 298 174 000 mod 900 = 200
         *
         * t = 1 000 213 298 174 000 div 900 = 1 111 348 109 082
         * Calculate codeword 1
         * d1 = 1 111 348 109 082 mod 900 = 282
         *
         * t = 1 111 348 109 082 div 900 = 1 234 831 232
         * Calculate codeword 2
         * d2 = 1 234 831 232 mod 900 = 632
         *
         * t = 1 234 831 232 div 900 = 1 372 034
         * Calculate codeword 3
         * d3 = 1 372 034 mod 900 = 434
         *
         * t = 1 372 034 div 900 = 1 524
         * Calculate codeword 4
         * d4 = 1 524 mod 900 = 624
         *
         * t = 1 524 div 900 = 1
         * Calculate codeword 5
         * d5 = 1 mod 900 = 1
         * t = 1 div 900 = 0
         * Codeword sequence is: 1, 624, 434, 632, 282, 200
         *
         * Decode the above codewords involves
         *   1 x 900 power of 5 + 624 x 900 power of 4 + 434 x 900 power of 3 +
         * 632 x 900 power of 2 + 282 x 900 power of 1 + 200 x 900 power of 0 = 1000213298174000
         *
         * Remove leading 1 =>  Result is 000213298174000
         *
         * @throws FormatException
         */
        static decodeBase900toBase10(e, t) {
          let r = ur(0);
          for (let i = 0; i < t; i++)
            r += O.EXP900[t - i - 1] * ur(e[i]);
          let n = r.toString();
          if (n.charAt(0) !== "1")
            throw new L();
          return n.substring(1);
        }
      }
      O.TEXT_COMPACTION_MODE_LATCH = 900, O.BYTE_COMPACTION_MODE_LATCH = 901, O.NUMERIC_COMPACTION_MODE_LATCH = 902, O.BYTE_COMPACTION_MODE_LATCH_6 = 924, O.ECI_USER_DEFINED = 925, O.ECI_GENERAL_PURPOSE = 926, O.ECI_CHARSET = 927, O.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928, O.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923, O.MACRO_PDF417_TERMINATOR = 922, O.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913, O.MAX_NUMERIC_CODEWORDS = 15, O.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0, O.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1, O.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2, O.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3, O.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4, O.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5, O.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6, O.PL = 25, O.LL = 27, O.AS = 27, O.ML = 28, O.AL = 28, O.PS = 29, O.PAL = 29, O.PUNCT_CHARS = `;<>@[\\]_\`~!\r	,:
-.$/"|*()?{}'`, O.MIXED_CHARS = "0123456789&\r	,:#-.$/+%*=^", O.EXP900 = ti() ? Yi() : [], O.NUMBER_OF_SEQUENCE_CODEWORDS = 2;
      class we {
        constructor() {
        }
        /**
         * @TODO don't pass in minCodewordWidth and maxCodewordWidth, pass in barcode columns for start and stop pattern
         *
         * columns. That way width can be deducted from the pattern column.
         * This approach also allows to detect more details about the barcode, e.g. if a bar type (white or black) is wider
         * than it should be. This can happen if the scanner used a bad blackpoint.
         *
         * @param BitMatrix
         * @param image
         * @param ResultPoint
         * @param imageTopLeft
         * @param ResultPoint
         * @param imageBottomLeft
         * @param ResultPoint
         * @param imageTopRight
         * @param ResultPoint
         * @param imageBottomRight
         * @param int
         * @param minCodewordWidth
         * @param int
         * @param maxCodewordWidth
         *
         * @throws NotFoundException
         * @throws FormatException
         * @throws ChecksumException
         */
        static decode(e, t, r, n, i, s, a) {
          let o = new Er(e, t, r, n, i), l = null, u = null, g;
          for (let I = !0; ; I = !1) {
            if (t != null && (l = we.getRowIndicatorColumn(e, o, t, !0, s, a)), n != null && (u = we.getRowIndicatorColumn(e, o, n, !1, s, a)), g = we.merge(l, u), g == null)
              throw D.getNotFoundInstance();
            let b = g.getBoundingBox();
            if (I && b != null && (b.getMinY() < o.getMinY() || b.getMaxY() > o.getMaxY()))
              o = b;
            else
              break;
          }
          g.setBoundingBox(o);
          let x = g.getBarcodeColumnCount() + 1;
          g.setDetectionResultColumn(0, l), g.setDetectionResultColumn(x, u);
          let y = l != null;
          for (let I = 1; I <= x; I++) {
            let b = y ? I : x - I;
            if (g.getDetectionResultColumn(b) !== /* null */
            void 0)
              continue;
            let T;
            b === 0 || b === x ? T = new Qn(o, b === 0) : T = new Yr(o), g.setDetectionResultColumn(b, T);
            let R = -1, H = R;
            for (let W = o.getMinY(); W <= o.getMaxY(); W++) {
              if (R = we.getStartColumn(g, b, W, y), R < 0 || R > o.getMaxX()) {
                if (H === -1)
                  continue;
                R = H;
              }
              let U = we.detectCodeword(e, o.getMinX(), o.getMaxX(), y, R, W, s, a);
              U != null && (T.setCodeword(W, U), H = R, s = Math.min(s, U.getWidth()), a = Math.max(a, U.getWidth()));
            }
          }
          return we.createDecoderResult(g);
        }
        /**
         *
         * @param leftRowIndicatorColumn
         * @param rightRowIndicatorColumn
         *
         * @throws NotFoundException
         */
        static merge(e, t) {
          if (e == null && t == null)
            return null;
          let r = we.getBarcodeMetadata(e, t);
          if (r == null)
            return null;
          let n = Er.merge(we.adjustBoundingBox(e), we.adjustBoundingBox(t));
          return new jr(r, n);
        }
        /**
         *
         * @param rowIndicatorColumn
         *
         * @throws NotFoundException
         */
        static adjustBoundingBox(e) {
          if (e == null)
            return null;
          let t = e.getRowHeights();
          if (t == null)
            return null;
          let r = we.getMax(t), n = 0;
          for (let a of t)
            if (n += r - a, a > 0)
              break;
          let i = e.getCodewords();
          for (let a = 0; n > 0 && i[a] == null; a++)
            n--;
          let s = 0;
          for (let a = t.length - 1; a >= 0 && (s += r - t[a], !(t[a] > 0)); a--)
            ;
          for (let a = i.length - 1; s > 0 && i[a] == null; a--)
            s--;
          return e.getBoundingBox().addMissingRows(n, s, e.isLeft());
        }
        static getMax(e) {
          let t = -1;
          for (let r of e)
            t = Math.max(t, r);
          return t;
        }
        static getBarcodeMetadata(e, t) {
          let r;
          if (e == null || (r = e.getBarcodeMetadata()) == null)
            return t == null ? null : t.getBarcodeMetadata();
          let n;
          return t == null || (n = t.getBarcodeMetadata()) == null ? r : r.getColumnCount() !== n.getColumnCount() && r.getErrorCorrectionLevel() !== n.getErrorCorrectionLevel() && r.getRowCount() !== n.getRowCount() ? null : r;
        }
        static getRowIndicatorColumn(e, t, r, n, i, s) {
          let a = new Qn(t, n);
          for (let o = 0; o < 2; o++) {
            let l = o === 0 ? 1 : -1, u = Math.trunc(Math.trunc(r.getX()));
            for (let g = Math.trunc(Math.trunc(r.getY())); g <= t.getMaxY() && g >= t.getMinY(); g += l) {
              let x = we.detectCodeword(e, 0, e.getWidth(), n, u, g, i, s);
              x != null && (a.setCodeword(g, x), n ? u = x.getStartX() : u = x.getEndX());
            }
          }
          return a;
        }
        /**
         *
         * @param detectionResult
         * @param BarcodeValue
         * @param param2
         * @param param3
         * @param barcodeMatrix
         *
         * @throws NotFoundException
         */
        static adjustCodewordCount(e, t) {
          let r = t[0][1], n = r.getValue(), i = e.getBarcodeColumnCount() * e.getBarcodeRowCount() - we.getNumberOfECCodeWords(e.getBarcodeECLevel());
          if (n.length === 0) {
            if (i < 1 || i > ae.MAX_CODEWORDS_IN_BARCODE)
              throw D.getNotFoundInstance();
            r.setValue(i);
          } else n[0] !== i && r.setValue(i);
        }
        /**
         *
         * @param detectionResult
         *
         * @throws FormatException
         * @throws ChecksumException
         * @throws NotFoundException
         */
        static createDecoderResult(e) {
          let t = we.createBarcodeMatrix(e);
          we.adjustCodewordCount(e, t);
          let r = new Array(), n = new Int32Array(e.getBarcodeRowCount() * e.getBarcodeColumnCount()), i = (
            /*List<int[]>*/
            []
          ), s = (
            /*Collection<Integer>*/
            new Array()
          );
          for (let o = 0; o < e.getBarcodeRowCount(); o++)
            for (let l = 0; l < e.getBarcodeColumnCount(); l++) {
              let u = t[o][l + 1].getValue(), g = o * e.getBarcodeColumnCount() + l;
              u.length === 0 ? r.push(g) : u.length === 1 ? n[g] = u[0] : (s.push(g), i.push(u));
            }
          let a = new Array(i.length);
          for (let o = 0; o < a.length; o++)
            a[o] = i[o];
          return we.createDecoderResultFromAmbiguousValues(e.getBarcodeECLevel(), n, ae.toIntArray(r), ae.toIntArray(s), a);
        }
        /**
         * This method deals with the fact, that the decoding process doesn't always yield a single most likely value. The
         * current error correction implementation doesn't deal with erasures very well, so it's better to provide a value
         * for these ambiguous codewords instead of treating it as an erasure. The problem is that we don't know which of
         * the ambiguous values to choose. We try decode using the first value, and if that fails, we use another of the
         * ambiguous values and try to decode again. This usually only happens on very hard to read and decode barcodes,
         * so decoding the normal barcodes is not affected by this.
         *
         * @param erasureArray contains the indexes of erasures
         * @param ambiguousIndexes array with the indexes that have more than one most likely value
         * @param ambiguousIndexValues two dimensional array that contains the ambiguous values. The first dimension must
         * be the same length as the ambiguousIndexes array
         *
         * @throws FormatException
         * @throws ChecksumException
         */
        static createDecoderResultFromAmbiguousValues(e, t, r, n, i) {
          let s = new Int32Array(n.length), a = 100;
          for (; a-- > 0; ) {
            for (let o = 0; o < s.length; o++)
              t[n[o]] = i[o][s[o]];
            try {
              return we.decodeCodewords(t, e, r);
            } catch (o) {
              if (!(o instanceof q))
                throw o;
            }
            if (s.length === 0)
              throw q.getChecksumInstance();
            for (let o = 0; o < s.length; o++)
              if (s[o] < i[o].length - 1) {
                s[o]++;
                break;
              } else if (s[o] = 0, o === s.length - 1)
                throw q.getChecksumInstance();
          }
          throw q.getChecksumInstance();
        }
        static createBarcodeMatrix(e) {
          let t = Array.from({ length: e.getBarcodeRowCount() }, () => new Array(e.getBarcodeColumnCount() + 2));
          for (let n = 0; n < t.length; n++)
            for (let i = 0; i < t[n].length; i++)
              t[n][i] = new Zr();
          let r = 0;
          for (let n of e.getDetectionResultColumns()) {
            if (n != null) {
              for (let i of n.getCodewords())
                if (i != null) {
                  let s = i.getRowNumber();
                  if (s >= 0) {
                    if (s >= t.length)
                      continue;
                    t[s][r].setValue(i.getValue());
                  }
                }
            }
            r++;
          }
          return t;
        }
        static isValidBarcodeColumn(e, t) {
          return t >= 0 && t <= e.getBarcodeColumnCount() + 1;
        }
        static getStartColumn(e, t, r, n) {
          let i = n ? 1 : -1, s = null;
          if (we.isValidBarcodeColumn(e, t - i) && (s = e.getDetectionResultColumn(t - i).getCodeword(r)), s != null)
            return n ? s.getEndX() : s.getStartX();
          if (s = e.getDetectionResultColumn(t).getCodewordNearby(r), s != null)
            return n ? s.getStartX() : s.getEndX();
          if (we.isValidBarcodeColumn(e, t - i) && (s = e.getDetectionResultColumn(t - i).getCodewordNearby(r)), s != null)
            return n ? s.getEndX() : s.getStartX();
          let a = 0;
          for (; we.isValidBarcodeColumn(e, t - i); ) {
            t -= i;
            for (let o of e.getDetectionResultColumn(t).getCodewords())
              if (o != null)
                return (n ? o.getEndX() : o.getStartX()) + i * a * (o.getEndX() - o.getStartX());
            a++;
          }
          return n ? e.getBoundingBox().getMinX() : e.getBoundingBox().getMaxX();
        }
        static detectCodeword(e, t, r, n, i, s, a, o) {
          i = we.adjustCodewordStartColumn(e, t, r, n, i, s);
          let l = we.getModuleBitCount(e, t, r, n, i, s);
          if (l == null)
            return null;
          let u, g = Ee.sum(l);
          if (n)
            u = i + g;
          else {
            for (let I = 0; I < l.length / 2; I++) {
              let b = l[I];
              l[I] = l[l.length - 1 - I], l[l.length - 1 - I] = b;
            }
            u = i, i = u - g;
          }
          if (!we.checkCodewordSkew(g, a, o))
            return null;
          let x = Rt.getDecodedValue(l), y = ae.getCodeword(x);
          return y === -1 ? null : new Kr(i, u, we.getCodewordBucketNumber(x), y);
        }
        static getModuleBitCount(e, t, r, n, i, s) {
          let a = i, o = new Int32Array(8), l = 0, u = n ? 1 : -1, g = n;
          for (; (n ? a < r : a >= t) && l < o.length; )
            e.get(a, s) === g ? (o[l]++, a += u) : (l++, g = !g);
          return l === o.length || a === (n ? r : t) && l === o.length - 1 ? o : null;
        }
        static getNumberOfECCodeWords(e) {
          return 2 << e;
        }
        static adjustCodewordStartColumn(e, t, r, n, i, s) {
          let a = i, o = n ? -1 : 1;
          for (let l = 0; l < 2; l++) {
            for (; (n ? a >= t : a < r) && n === e.get(a, s); ) {
              if (Math.abs(i - a) > we.CODEWORD_SKEW_SIZE)
                return i;
              a += o;
            }
            o = -o, n = !n;
          }
          return a;
        }
        static checkCodewordSkew(e, t, r) {
          return t - we.CODEWORD_SKEW_SIZE <= e && e <= r + we.CODEWORD_SKEW_SIZE;
        }
        /**
         * @throws FormatException,
         * @throws ChecksumException
         */
        static decodeCodewords(e, t, r) {
          if (e.length === 0)
            throw L.getFormatInstance();
          let n = 1 << t + 1, i = we.correctErrors(e, r, n);
          we.verifyCodewordCount(e, n);
          let s = O.decode(e, "" + t);
          return s.setErrorsCorrected(i), s.setErasures(r.length), s;
        }
        /**
         * <p>Given data and error-correction codewords received, possibly corrupted by errors, attempts to
         * correct the errors in-place.</p>
         *
         * @param codewords   data and error correction codewords
         * @param erasures positions of any known erasures
         * @param numECCodewords number of error correction codewords that are available in codewords
         * @throws ChecksumException if error correction fails
         */
        static correctErrors(e, t, r) {
          if (t != null && t.length > r / 2 + we.MAX_ERRORS || r < 0 || r > we.MAX_EC_CODEWORDS)
            throw q.getChecksumInstance();
          return we.errorCorrection.decode(e, r, t);
        }
        /**
         * Verify that all is OK with the codeword array.
         * @throws FormatException
         */
        static verifyCodewordCount(e, t) {
          if (e.length < 4)
            throw L.getFormatInstance();
          let r = e[0];
          if (r > e.length)
            throw L.getFormatInstance();
          if (r === 0)
            if (t < e.length)
              e[0] = e.length - t;
            else
              throw L.getFormatInstance();
        }
        static getBitCountForCodeword(e) {
          let t = new Int32Array(8), r = 0, n = t.length - 1;
          for (; !((e & 1) !== r && (r = e & 1, n--, n < 0)); )
            t[n]++, e >>= 1;
          return t;
        }
        static getCodewordBucketNumber(e) {
          return e instanceof Int32Array ? this.getCodewordBucketNumber_Int32Array(e) : this.getCodewordBucketNumber_number(e);
        }
        static getCodewordBucketNumber_number(e) {
          return we.getCodewordBucketNumber(we.getBitCountForCodeword(e));
        }
        static getCodewordBucketNumber_Int32Array(e) {
          return (e[0] - e[2] + e[4] - e[6] + 9) % 9;
        }
        static toString(e) {
          let t = new zr();
          for (let r = 0; r < e.length; r++) {
            t.format("Row %2d: ", r);
            for (let n = 0; n < e[r].length; n++) {
              let i = e[r][n];
              i.getValue().length === 0 ? t.format("        ", null) : t.format("%4d(%2d)", i.getValue()[0], i.getConfidence(i.getValue()[0]));
            }
            t.format("%n");
          }
          return t.toString();
        }
      }
      we.CODEWORD_SKEW_SIZE = 2, we.MAX_ERRORS = 3, we.MAX_EC_CODEWORDS = 512, we.errorCorrection = new qn();
      class At {
        // private static /*final Result[]*/ EMPTY_RESULT_ARRAY: Result[] = new Result([0]);
        /**
         * Locates and decodes a PDF417 code in an image.
         *
         * @return a String representing the content encoded by the PDF417 code
         * @throws NotFoundException if a PDF417 code cannot be found,
         * @throws FormatException if a PDF417 cannot be decoded
         * @throws ChecksumException
         */
        // @Override
        decode(e, t = null) {
          let r = At.decode(e, t, !1);
          if (r == null || r.length === 0 || r[0] == null)
            throw D.getNotFoundInstance();
          return r[0];
        }
        /**
         *
         * @param BinaryBitmap
         * @param image
         * @throws NotFoundException
         */
        //   @Override
        decodeMultiple(e, t = null) {
          try {
            return At.decode(e, t, !0);
          } catch (r) {
            throw r instanceof L || r instanceof q ? D.getNotFoundInstance() : r;
          }
        }
        /**
         *
         * @param image
         * @param hints
         * @param multiple
         *
         * @throws NotFoundException
         * @throws FormatExceptionß
         * @throws ChecksumException
         */
        static decode(e, t, r) {
          const n = new Array(), i = ge.detectMultiple(e, t, r);
          for (const s of i.getPoints()) {
            const a = we.decode(i.getBits(), s[4], s[5], s[6], s[7], At.getMinCodewordWidth(s), At.getMaxCodewordWidth(s)), o = new Ke(a.getText(), a.getRawBytes(), void 0, s, re.PDF_417);
            o.putMetadata(qe.ERROR_CORRECTION_LEVEL, a.getECLevel());
            const l = a.getOther();
            l != null && o.putMetadata(qe.PDF417_EXTRA_METADATA, l), n.push(o);
          }
          return n.map((s) => s);
        }
        static getMaxWidth(e, t) {
          return e == null || t == null ? 0 : Math.trunc(Math.abs(e.getX() - t.getX()));
        }
        static getMinWidth(e, t) {
          return e == null || t == null ? V.MAX_VALUE : Math.trunc(Math.abs(e.getX() - t.getX()));
        }
        static getMaxCodewordWidth(e) {
          return Math.floor(Math.max(Math.max(At.getMaxWidth(e[0], e[4]), At.getMaxWidth(e[6], e[2]) * ae.MODULES_IN_CODEWORD / ae.MODULES_IN_STOP_PATTERN), Math.max(At.getMaxWidth(e[1], e[5]), At.getMaxWidth(e[7], e[3]) * ae.MODULES_IN_CODEWORD / ae.MODULES_IN_STOP_PATTERN)));
        }
        static getMinCodewordWidth(e) {
          return Math.floor(Math.min(Math.min(At.getMinWidth(e[0], e[4]), At.getMinWidth(e[6], e[2]) * ae.MODULES_IN_CODEWORD / ae.MODULES_IN_STOP_PATTERN), Math.min(At.getMinWidth(e[1], e[5]), At.getMinWidth(e[7], e[3]) * ae.MODULES_IN_CODEWORD / ae.MODULES_IN_STOP_PATTERN)));
        }
        // @Override
        reset() {
        }
      }
      class un extends p {
      }
      un.kind = "ReaderException";
      class ri {
        /**
         * Creates an instance of this class
         * 
         * @param {Boolean} verbose if 'true' logs will be dumped to console, otherwise hidden.
         * @param hints The hints to use, clearing the previous state.
         */
        constructor(e, t) {
          this.verbose = e === !0, t && this.setHints(t);
        }
        /**
         * This version of decode honors the intent of Reader.decode(BinaryBitmap) in that it
         * passes null as a hint to the decoders. However, that makes it inefficient to call repeatedly.
         * Use setHints() followed by decodeWithState() for continuous scan applications.
         *
         * @param image The pixel data to decode
         * @return The contents of the image
         *
         * @throws NotFoundException Any errors which occurred
         */
        /*@Override*/
        // public decode(image: BinaryBitmap): Result {
        //   setHints(null)
        //   return decodeInternal(image)
        // }
        /**
         * Decode an image using the hints provided. Does not honor existing state.
         *
         * @param image The pixel data to decode
         * @param hints The hints to use, clearing the previous state.
         * @return The contents of the image
         *
         * @throws NotFoundException Any errors which occurred
         */
        /*@Override*/
        decode(e, t) {
          return t && this.setHints(t), this.decodeInternal(e);
        }
        /**
         * Decode an image using the state set up by calling setHints() previously. Continuous scan
         * clients will get a <b>large</b> speed increase by using this instead of decode().
         *
         * @param image The pixel data to decode
         * @return The contents of the image
         *
         * @throws NotFoundException Any errors which occurred
         */
        decodeWithState(e) {
          return (this.readers === null || this.readers === void 0) && this.setHints(null), this.decodeInternal(e);
        }
        /**
         * This method adds state to the MultiFormatReader. By setting the hints once, subsequent calls
         * to decodeWithState(image) can reuse the same set of readers without reallocating memory. This
         * is important for performance in continuous scan clients.
         *
         * @param hints The set of hints to use for subsequent calls to decode(image)
         */
        setHints(e) {
          this.hints = e;
          const t = !E(e) && e.get(ce.TRY_HARDER) === !0, r = E(e) ? null : e.get(ce.POSSIBLE_FORMATS), n = new Array();
          if (!E(r)) {
            const i = r.some((s) => s === re.UPC_A || s === re.UPC_E || s === re.EAN_13 || s === re.EAN_8 || s === re.CODABAR || s === re.CODE_39 || s === re.CODE_93 || s === re.CODE_128 || s === re.ITF || s === re.RSS_14 || s === re.RSS_EXPANDED);
            i && !t && n.push(new Nr(e, this.verbose)), r.includes(re.QR_CODE) && n.push(new fr()), r.includes(re.DATA_MATRIX) && n.push(new cr()), r.includes(re.AZTEC) && n.push(new _r()), r.includes(re.PDF_417) && n.push(new At()), i && t && n.push(new Nr(e, this.verbose));
          }
          n.length === 0 && (t || n.push(new Nr(e, this.verbose)), n.push(new fr()), n.push(new cr()), n.push(new _r()), n.push(new At()), t && n.push(new Nr(e, this.verbose))), this.readers = n;
        }
        /*@Override*/
        reset() {
          if (this.readers !== null)
            for (const e of this.readers)
              e.reset();
        }
        /**
         * @throws NotFoundException
         */
        decodeInternal(e) {
          if (this.readers === null)
            throw new un("No readers where selected, nothing can be read.");
          for (const t of this.readers)
            try {
              return t.decode(e, this.hints);
            } catch (r) {
              if (r instanceof un)
                continue;
            }
          throw new D("No MultiFormat Readers were able to detect the code.");
        }
      }
      class Zi extends ot {
        constructor(e = null, t = 500) {
          const r = new ri();
          r.setHints(e), super(r, t);
        }
        /**
         * Overwrite decodeBitmap to call decodeWithState, which will pay
         * attention to the hints set in the constructor function
         */
        decodeBitmap(e) {
          return this.reader.decodeWithState(e);
        }
      }
      class ji extends ot {
        /**
         * Creates an instance of BrowserPDF417Reader.
         * @param {number} [timeBetweenScansMillis=500] the time delay between subsequent decode tries
         */
        constructor(e = 500) {
          super(new At(), e);
        }
      }
      class Ki extends ot {
        /**
         * Creates an instance of BrowserQRCodeReader.
         * @param {number} [timeBetweenScansMillis=500] the time delay between subsequent decode tries
         */
        constructor(e = 500) {
          super(new fr(), e);
        }
      }
      var Ln;
      (function(d) {
        d[d.ERROR_CORRECTION = 0] = "ERROR_CORRECTION", d[d.CHARACTER_SET = 1] = "CHARACTER_SET", d[d.DATA_MATRIX_SHAPE = 2] = "DATA_MATRIX_SHAPE", d[d.MIN_SIZE = 3] = "MIN_SIZE", d[d.MAX_SIZE = 4] = "MAX_SIZE", d[d.MARGIN = 5] = "MARGIN", d[d.PDF417_COMPACT = 6] = "PDF417_COMPACT", d[d.PDF417_COMPACTION = 7] = "PDF417_COMPACTION", d[d.PDF417_DIMENSIONS = 8] = "PDF417_DIMENSIONS", d[d.AZTEC_LAYERS = 9] = "AZTEC_LAYERS", d[d.QR_VERSION = 10] = "QR_VERSION";
      })(Ln || (Ln = {}));
      var ht = Ln;
      class Pn {
        /**
         * A reed solomon error-correcting encoding constructor is created by
         * passing as Galois Field with of size equal to the number of code
         * words (symbols) in the alphabet (the number of values in each
         * element of arrays that are encoded/decoded).
         * @param field A galois field with a number of elements equal to the size
         * of the alphabet of symbols to encode.
         */
        constructor(e) {
          this.field = e, this.cachedGenerators = [], this.cachedGenerators.push(new Ct(e, Int32Array.from([1])));
        }
        buildGenerator(e) {
          const t = this.cachedGenerators;
          if (e >= t.length) {
            let r = t[t.length - 1];
            const n = this.field;
            for (let i = t.length; i <= e; i++) {
              const s = r.multiply(new Ct(n, Int32Array.from([1, n.exp(i - 1 + n.getGeneratorBase())])));
              t.push(s), r = s;
            }
          }
          return t[e];
        }
        /**
         * <p>Encode a sequence of code words (symbols) using Reed-Solomon to allow decoders
         * to detect and correct errors that may have been introduced when the resulting
         * data is stored or transmitted.</p>
         *
         * @param toEncode array used for both and output. Caller initializes the array with
         * the code words (symbols) to be encoded followed by empty elements allocated to make
         * space for error-correction code words in the encoded output. The array contains
         * the encdoded output when encode returns. Code words are encoded as numbers from
         * 0 to n-1, where n is the number of possible code words (symbols), as determined
         * by the size of the Galois Field passed in the constructor of this object.
         * @param ecBytes the number of elements reserved in the array (first parameter)
         * to store error-correction code words. Thus, the number of code words (symbols)
         * to encode in the first parameter is thus toEncode.length - ecBytes.
         * Note, the use of "bytes" in the name of this parameter is misleading, as there may
         * be more or fewer than 256 symbols being encoded, as determined by the number of
         * elements in the Galois Field passed as a constructor to this object.
         * @throws IllegalArgumentException thrown in response to validation errros.
         */
        encode(e, t) {
          if (t === 0)
            throw new v("No error correction bytes");
          const r = e.length - t;
          if (r <= 0)
            throw new v("No data bytes provided");
          const n = this.buildGenerator(t), i = new Int32Array(r);
          j.arraycopy(e, 0, i, 0, r);
          let s = new Ct(this.field, i);
          s = s.multiplyByMonomial(t, 1);
          const o = s.divide(n)[1].getCoefficients(), l = t - o.length;
          for (let u = 0; u < l; u++)
            e[r + u] = 0;
          j.arraycopy(o, 0, e, r + l, o.length);
        }
      }
      class rt {
        constructor() {
        }
        /**
         * Apply mask penalty rule 1 and return the penalty. Find repetitive cells with the same color and
         * give penalty to them. Example: 00000 or 11111.
         */
        static applyMaskPenaltyRule1(e) {
          return rt.applyMaskPenaltyRule1Internal(e, !0) + rt.applyMaskPenaltyRule1Internal(e, !1);
        }
        /**
         * Apply mask penalty rule 2 and return the penalty. Find 2x2 blocks with the same color and give
         * penalty to them. This is actually equivalent to the spec's rule, which is to find MxN blocks and give a
         * penalty proportional to (M-1)x(N-1), because this is the number of 2x2 blocks inside such a block.
         */
        static applyMaskPenaltyRule2(e) {
          let t = 0;
          const r = e.getArray(), n = e.getWidth(), i = e.getHeight();
          for (let s = 0; s < i - 1; s++) {
            const a = r[s];
            for (let o = 0; o < n - 1; o++) {
              const l = a[o];
              l === a[o + 1] && l === r[s + 1][o] && l === r[s + 1][o + 1] && t++;
            }
          }
          return rt.N2 * t;
        }
        /**
         * Apply mask penalty rule 3 and return the penalty. Find consecutive runs of 1:1:3:1:1:4
         * starting with black, or 4:1:1:3:1:1 starting with white, and give penalty to them.  If we
         * find patterns like 000010111010000, we give penalty once.
         */
        static applyMaskPenaltyRule3(e) {
          let t = 0;
          const r = e.getArray(), n = e.getWidth(), i = e.getHeight();
          for (let s = 0; s < i; s++)
            for (let a = 0; a < n; a++) {
              const o = r[s];
              a + 6 < n && o[a] === 1 && o[a + 1] === 0 && o[a + 2] === 1 && o[a + 3] === 1 && o[a + 4] === 1 && o[a + 5] === 0 && o[a + 6] === 1 && (rt.isWhiteHorizontal(o, a - 4, a) || rt.isWhiteHorizontal(o, a + 7, a + 11)) && t++, s + 6 < i && r[s][a] === 1 && r[s + 1][a] === 0 && r[s + 2][a] === 1 && r[s + 3][a] === 1 && r[s + 4][a] === 1 && r[s + 5][a] === 0 && r[s + 6][a] === 1 && (rt.isWhiteVertical(r, a, s - 4, s) || rt.isWhiteVertical(r, a, s + 7, s + 11)) && t++;
            }
          return t * rt.N3;
        }
        static isWhiteHorizontal(e, t, r) {
          t = Math.max(t, 0), r = Math.min(r, e.length);
          for (let n = t; n < r; n++)
            if (e[n] === 1)
              return !1;
          return !0;
        }
        static isWhiteVertical(e, t, r, n) {
          r = Math.max(r, 0), n = Math.min(n, e.length);
          for (let i = r; i < n; i++)
            if (e[i][t] === 1)
              return !1;
          return !0;
        }
        /**
         * Apply mask penalty rule 4 and return the penalty. Calculate the ratio of dark cells and give
         * penalty if the ratio is far from 50%. It gives 10 penalty for 5% distance.
         */
        static applyMaskPenaltyRule4(e) {
          let t = 0;
          const r = e.getArray(), n = e.getWidth(), i = e.getHeight();
          for (let o = 0; o < i; o++) {
            const l = r[o];
            for (let u = 0; u < n; u++)
              l[u] === 1 && t++;
          }
          const s = e.getHeight() * e.getWidth();
          return Math.floor(Math.abs(t * 2 - s) * 10 / s) * rt.N4;
        }
        /**
         * Return the mask bit for "getMaskPattern" at "x" and "y". See 8.8 of JISX0510:2004 for mask
         * pattern conditions.
         */
        static getDataMaskBit(e, t, r) {
          let n, i;
          switch (e) {
            case 0:
              n = r + t & 1;
              break;
            case 1:
              n = r & 1;
              break;
            case 2:
              n = t % 3;
              break;
            case 3:
              n = (r + t) % 3;
              break;
            case 4:
              n = Math.floor(r / 2) + Math.floor(t / 3) & 1;
              break;
            case 5:
              i = r * t, n = (i & 1) + i % 3;
              break;
            case 6:
              i = r * t, n = (i & 1) + i % 3 & 1;
              break;
            case 7:
              i = r * t, n = i % 3 + (r + t & 1) & 1;
              break;
            default:
              throw new v("Invalid mask pattern: " + e);
          }
          return n === 0;
        }
        /**
         * Helper function for applyMaskPenaltyRule1. We need this for doing this calculation in both
         * vertical and horizontal orders respectively.
         */
        static applyMaskPenaltyRule1Internal(e, t) {
          let r = 0;
          const n = t ? e.getHeight() : e.getWidth(), i = t ? e.getWidth() : e.getHeight(), s = e.getArray();
          for (let a = 0; a < n; a++) {
            let o = 0, l = -1;
            for (let u = 0; u < i; u++) {
              const g = t ? s[a][u] : s[u][a];
              g === l ? o++ : (o >= 5 && (r += rt.N1 + (o - 5)), o = 1, l = g);
            }
            o >= 5 && (r += rt.N1 + (o - 5));
          }
          return r;
        }
      }
      rt.N1 = 3, rt.N2 = 3, rt.N3 = 40, rt.N4 = 10;
      class hn {
        constructor(e, t) {
          this.width = e, this.height = t;
          const r = new Array(t);
          for (let n = 0; n !== t; n++)
            r[n] = new Uint8Array(e);
          this.bytes = r;
        }
        getHeight() {
          return this.height;
        }
        getWidth() {
          return this.width;
        }
        get(e, t) {
          return this.bytes[t][e];
        }
        /**
         * @return an internal representation as bytes, in row-major order. array[y][x] represents point (x,y)
         */
        getArray() {
          return this.bytes;
        }
        // TYPESCRIPTPORT: preffer to let two methods instead of override to avoid type comparison inside
        setNumber(e, t, r) {
          this.bytes[t][e] = r;
        }
        // public set(x: number /*int*/, y: number /*int*/, value: number /*int*/): void {
        //   bytes[y][x] = (byte) value
        // }
        setBoolean(e, t, r) {
          this.bytes[t][e] = /*(byte) */
          r ? 1 : 0;
        }
        clear(e) {
          for (const t of this.bytes)
            G.fill(t, e);
        }
        equals(e) {
          if (!(e instanceof hn))
            return !1;
          const t = e;
          if (this.width !== t.width || this.height !== t.height)
            return !1;
          for (let r = 0, n = this.height; r < n; ++r) {
            const i = this.bytes[r], s = t.bytes[r];
            for (let a = 0, o = this.width; a < o; ++a)
              if (i[a] !== s[a])
                return !1;
          }
          return !0;
        }
        /*@Override*/
        toString() {
          const e = new he();
          for (let t = 0, r = this.height; t < r; ++t) {
            const n = this.bytes[t];
            for (let i = 0, s = this.width; i < s; ++i)
              switch (n[i]) {
                case 0:
                  e.append(" 0");
                  break;
                case 1:
                  e.append(" 1");
                  break;
                default:
                  e.append("  ");
                  break;
              }
            e.append(`
`);
          }
          return e.toString();
        }
      }
      class Ar {
        constructor() {
          this.maskPattern = -1;
        }
        getMode() {
          return this.mode;
        }
        getECLevel() {
          return this.ecLevel;
        }
        getVersion() {
          return this.version;
        }
        getMaskPattern() {
          return this.maskPattern;
        }
        getMatrix() {
          return this.matrix;
        }
        /*@Override*/
        toString() {
          const e = new he();
          return e.append(`<<
`), e.append(" mode: "), e.append(this.mode ? this.mode.toString() : "null"), e.append(`
 ecLevel: `), e.append(this.ecLevel ? this.ecLevel.toString() : "null"), e.append(`
 version: `), e.append(this.version ? this.version.toString() : "null"), e.append(`
 maskPattern: `), e.append(this.maskPattern.toString()), this.matrix ? (e.append(`
 matrix:
`), e.append(this.matrix.toString())) : e.append(`
 matrix: null
`), e.append(`>>
`), e.toString();
        }
        setMode(e) {
          this.mode = e;
        }
        setECLevel(e) {
          this.ecLevel = e;
        }
        setVersion(e) {
          this.version = e;
        }
        setMaskPattern(e) {
          this.maskPattern = e;
        }
        setMatrix(e) {
          this.matrix = e;
        }
        // Check if "mask_pattern" is valid.
        static isValidMaskPattern(e) {
          return e >= 0 && e < Ar.NUM_MASK_PATTERNS;
        }
      }
      Ar.NUM_MASK_PATTERNS = 8;
      class Ge extends p {
      }
      Ge.kind = "WriterException";
      class ie {
        constructor() {
        }
        // Set all cells to -1 (TYPESCRIPTPORT: 255).  -1 (TYPESCRIPTPORT: 255) means that the cell is empty (not set yet).
        //
        // JAVAPORT: We shouldn't need to do this at all. The code should be rewritten to begin encoding
        // with the ByteMatrix initialized all to zero.
        static clearMatrix(e) {
          e.clear(
            /*(byte) */
            /*-1*/
            255
          );
        }
        // Build 2D matrix of QR Code from "dataBits" with "ecLevel", "version" and "getMaskPattern". On
        // success, store the result in "matrix" and return true.
        static buildMatrix(e, t, r, n, i) {
          ie.clearMatrix(i), ie.embedBasicPatterns(r, i), ie.embedTypeInfo(t, n, i), ie.maybeEmbedVersionInfo(r, i), ie.embedDataBits(e, n, i);
        }
        // Embed basic patterns. On success, modify the matrix and return true.
        // The basic patterns are:
        // - Position detection patterns
        // - Timing patterns
        // - Dark dot at the left bottom corner
        // - Position adjustment patterns, if need be
        static embedBasicPatterns(e, t) {
          ie.embedPositionDetectionPatternsAndSeparators(t), ie.embedDarkDotAtLeftBottomCorner(t), ie.maybeEmbedPositionAdjustmentPatterns(e, t), ie.embedTimingPatterns(t);
        }
        // Embed type information. On success, modify the matrix.
        static embedTypeInfo(e, t, r) {
          const n = new z();
          ie.makeTypeInfoBits(e, t, n);
          for (let i = 0, s = n.getSize(); i < s; ++i) {
            const a = n.get(n.getSize() - 1 - i), o = ie.TYPE_INFO_COORDINATES[i], l = o[0], u = o[1];
            if (r.setBoolean(l, u, a), i < 8) {
              const g = r.getWidth() - i - 1;
              r.setBoolean(g, 8, a);
            } else {
              const x = r.getHeight() - 7 + (i - 8);
              r.setBoolean(8, x, a);
            }
          }
        }
        // Embed version information if need be. On success, modify the matrix and return true.
        // See 8.10 of JISX0510:2004 (p.47) for how to embed version information.
        static maybeEmbedVersionInfo(e, t) {
          if (e.getVersionNumber() < 7)
            return;
          const r = new z();
          ie.makeVersionInfoBits(e, r);
          let n = 17;
          for (let i = 0; i < 6; ++i)
            for (let s = 0; s < 3; ++s) {
              const a = r.get(n);
              n--, t.setBoolean(i, t.getHeight() - 11 + s, a), t.setBoolean(t.getHeight() - 11 + s, i, a);
            }
        }
        // Embed "dataBits" using "getMaskPattern". On success, modify the matrix and return true.
        // For debugging purposes, it skips masking process if "getMaskPattern" is -1(TYPESCRIPTPORT: 255).
        // See 8.7 of JISX0510:2004 (p.38) for how to embed data bits.
        static embedDataBits(e, t, r) {
          let n = 0, i = -1, s = r.getWidth() - 1, a = r.getHeight() - 1;
          for (; s > 0; ) {
            for (s === 6 && (s -= 1); a >= 0 && a < r.getHeight(); ) {
              for (let o = 0; o < 2; ++o) {
                const l = s - o;
                if (!ie.isEmpty(r.get(l, a)))
                  continue;
                let u;
                n < e.getSize() ? (u = e.get(n), ++n) : u = !1, t !== 255 && rt.getDataMaskBit(t, l, a) && (u = !u), r.setBoolean(l, a, u);
              }
              a += i;
            }
            i = -i, a += i, s -= 2;
          }
          if (n !== e.getSize())
            throw new Ge("Not all bits consumed: " + n + "/" + e.getSize());
        }
        // Return the position of the most significant bit set (one: to) in the "value". The most
        // significant bit is position 32. If there is no bit set, return 0. Examples:
        // - findMSBSet(0) => 0
        // - findMSBSet(1) => 1
        // - findMSBSet(255) => 8
        static findMSBSet(e) {
          return 32 - V.numberOfLeadingZeros(e);
        }
        // Calculate BCH (Bose-Chaudhuri-Hocquenghem) code for "value" using polynomial "poly". The BCH
        // code is used for encoding type information and version information.
        // Example: Calculation of version information of 7.
        // f(x) is created from 7.
        //   - 7 = 000111 in 6 bits
        //   - f(x) = x^2 + x^1 + x^0
        // g(x) is given by the standard (p. 67)
        //   - g(x) = x^12 + x^11 + x^10 + x^9 + x^8 + x^5 + x^2 + 1
        // Multiply f(x) by x^(18 - 6)
        //   - f'(x) = f(x) * x^(18 - 6)
        //   - f'(x) = x^14 + x^13 + x^12
        // Calculate the remainder of f'(x) / g(x)
        //         x^2
        //         __________________________________________________
        //   g(x) )x^14 + x^13 + x^12
        //         x^14 + x^13 + x^12 + x^11 + x^10 + x^7 + x^4 + x^2
        //         --------------------------------------------------
        //                              x^11 + x^10 + x^7 + x^4 + x^2
        //
        // The remainder is x^11 + x^10 + x^7 + x^4 + x^2
        // Encode it in binary: 110010010100
        // The return value is 0xc94 (1100 1001 0100)
        //
        // Since all coefficients in the polynomials are 1 or 0, we can do the calculation by bit
        // operations. We don't care if coefficients are positive or negative.
        static calculateBCHCode(e, t) {
          if (t === 0)
            throw new v("0 polynomial");
          const r = ie.findMSBSet(t);
          for (e <<= r - 1; ie.findMSBSet(e) >= r; )
            e ^= t << ie.findMSBSet(e) - r;
          return e;
        }
        // Make bit vector of type information. On success, store the result in "bits" and return true.
        // Encode error correction level and mask pattern. See 8.9 of
        // JISX0510:2004 (p.45) for details.
        static makeTypeInfoBits(e, t, r) {
          if (!Ar.isValidMaskPattern(t))
            throw new Ge("Invalid mask pattern");
          const n = e.getBits() << 3 | t;
          r.appendBits(n, 5);
          const i = ie.calculateBCHCode(n, ie.TYPE_INFO_POLY);
          r.appendBits(i, 10);
          const s = new z();
          if (s.appendBits(ie.TYPE_INFO_MASK_PATTERN, 15), r.xor(s), r.getSize() !== 15)
            throw new Ge("should not happen but we got: " + r.getSize());
        }
        // Make bit vector of version information. On success, store the result in "bits" and return true.
        // See 8.10 of JISX0510:2004 (p.45) for details.
        static makeVersionInfoBits(e, t) {
          t.appendBits(e.getVersionNumber(), 6);
          const r = ie.calculateBCHCode(e.getVersionNumber(), ie.VERSION_INFO_POLY);
          if (t.appendBits(r, 12), t.getSize() !== 18)
            throw new Ge("should not happen but we got: " + t.getSize());
        }
        // Check if "value" is empty.
        static isEmpty(e) {
          return e === 255;
        }
        static embedTimingPatterns(e) {
          for (let t = 8; t < e.getWidth() - 8; ++t) {
            const r = (t + 1) % 2;
            ie.isEmpty(e.get(t, 6)) && e.setNumber(t, 6, r), ie.isEmpty(e.get(6, t)) && e.setNumber(6, t, r);
          }
        }
        // Embed the lonely dark dot at left bottom corner. JISX0510:2004 (p.46)
        static embedDarkDotAtLeftBottomCorner(e) {
          if (e.get(8, e.getHeight() - 8) === 0)
            throw new Ge();
          e.setNumber(8, e.getHeight() - 8, 1);
        }
        static embedHorizontalSeparationPattern(e, t, r) {
          for (let n = 0; n < 8; ++n) {
            if (!ie.isEmpty(r.get(e + n, t)))
              throw new Ge();
            r.setNumber(e + n, t, 0);
          }
        }
        static embedVerticalSeparationPattern(e, t, r) {
          for (let n = 0; n < 7; ++n) {
            if (!ie.isEmpty(r.get(e, t + n)))
              throw new Ge();
            r.setNumber(e, t + n, 0);
          }
        }
        static embedPositionAdjustmentPattern(e, t, r) {
          for (let n = 0; n < 5; ++n) {
            const i = ie.POSITION_ADJUSTMENT_PATTERN[n];
            for (let s = 0; s < 5; ++s)
              r.setNumber(e + s, t + n, i[s]);
          }
        }
        static embedPositionDetectionPattern(e, t, r) {
          for (let n = 0; n < 7; ++n) {
            const i = ie.POSITION_DETECTION_PATTERN[n];
            for (let s = 0; s < 7; ++s)
              r.setNumber(e + s, t + n, i[s]);
          }
        }
        // Embed position detection patterns and surrounding vertical/horizontal separators.
        static embedPositionDetectionPatternsAndSeparators(e) {
          const t = ie.POSITION_DETECTION_PATTERN[0].length;
          ie.embedPositionDetectionPattern(0, 0, e), ie.embedPositionDetectionPattern(e.getWidth() - t, 0, e), ie.embedPositionDetectionPattern(0, e.getWidth() - t, e);
          const r = 8;
          ie.embedHorizontalSeparationPattern(0, r - 1, e), ie.embedHorizontalSeparationPattern(e.getWidth() - r, r - 1, e), ie.embedHorizontalSeparationPattern(0, e.getWidth() - r, e);
          const n = 7;
          ie.embedVerticalSeparationPattern(n, 0, e), ie.embedVerticalSeparationPattern(e.getHeight() - n - 1, 0, e), ie.embedVerticalSeparationPattern(n, e.getHeight() - n, e);
        }
        // Embed position adjustment patterns if need be.
        static maybeEmbedPositionAdjustmentPatterns(e, t) {
          if (e.getVersionNumber() < 2)
            return;
          const r = e.getVersionNumber() - 1, n = ie.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[r];
          for (let i = 0, s = n.length; i !== s; i++) {
            const a = n[i];
            if (a >= 0)
              for (let o = 0; o !== s; o++) {
                const l = n[o];
                l >= 0 && ie.isEmpty(t.get(l, a)) && ie.embedPositionAdjustmentPattern(l - 2, a - 2, t);
              }
          }
        }
      }
      ie.POSITION_DETECTION_PATTERN = Array.from([
        Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
        Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
        Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
        Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
        Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
        Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
        Int32Array.from([1, 1, 1, 1, 1, 1, 1])
      ]), ie.POSITION_ADJUSTMENT_PATTERN = Array.from([
        Int32Array.from([1, 1, 1, 1, 1]),
        Int32Array.from([1, 0, 0, 0, 1]),
        Int32Array.from([1, 0, 1, 0, 1]),
        Int32Array.from([1, 0, 0, 0, 1]),
        Int32Array.from([1, 1, 1, 1, 1])
      ]), ie.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([
        Int32Array.from([-1, -1, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 18, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 22, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 26, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 30, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 34, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 22, 38, -1, -1, -1, -1]),
        Int32Array.from([6, 24, 42, -1, -1, -1, -1]),
        Int32Array.from([6, 26, 46, -1, -1, -1, -1]),
        Int32Array.from([6, 28, 50, -1, -1, -1, -1]),
        Int32Array.from([6, 30, 54, -1, -1, -1, -1]),
        Int32Array.from([6, 32, 58, -1, -1, -1, -1]),
        Int32Array.from([6, 34, 62, -1, -1, -1, -1]),
        Int32Array.from([6, 26, 46, 66, -1, -1, -1]),
        Int32Array.from([6, 26, 48, 70, -1, -1, -1]),
        Int32Array.from([6, 26, 50, 74, -1, -1, -1]),
        Int32Array.from([6, 30, 54, 78, -1, -1, -1]),
        Int32Array.from([6, 30, 56, 82, -1, -1, -1]),
        Int32Array.from([6, 30, 58, 86, -1, -1, -1]),
        Int32Array.from([6, 34, 62, 90, -1, -1, -1]),
        Int32Array.from([6, 28, 50, 72, 94, -1, -1]),
        Int32Array.from([6, 26, 50, 74, 98, -1, -1]),
        Int32Array.from([6, 30, 54, 78, 102, -1, -1]),
        Int32Array.from([6, 28, 54, 80, 106, -1, -1]),
        Int32Array.from([6, 32, 58, 84, 110, -1, -1]),
        Int32Array.from([6, 30, 58, 86, 114, -1, -1]),
        Int32Array.from([6, 34, 62, 90, 118, -1, -1]),
        Int32Array.from([6, 26, 50, 74, 98, 122, -1]),
        Int32Array.from([6, 30, 54, 78, 102, 126, -1]),
        Int32Array.from([6, 26, 52, 78, 104, 130, -1]),
        Int32Array.from([6, 30, 56, 82, 108, 134, -1]),
        Int32Array.from([6, 34, 60, 86, 112, 138, -1]),
        Int32Array.from([6, 30, 58, 86, 114, 142, -1]),
        Int32Array.from([6, 34, 62, 90, 118, 146, -1]),
        Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
        Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
        Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
        Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
        Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
        Int32Array.from([6, 30, 58, 86, 114, 142, 170])
      ]), ie.TYPE_INFO_COORDINATES = Array.from([
        Int32Array.from([8, 0]),
        Int32Array.from([8, 1]),
        Int32Array.from([8, 2]),
        Int32Array.from([8, 3]),
        Int32Array.from([8, 4]),
        Int32Array.from([8, 5]),
        Int32Array.from([8, 7]),
        Int32Array.from([8, 8]),
        Int32Array.from([7, 8]),
        Int32Array.from([5, 8]),
        Int32Array.from([4, 8]),
        Int32Array.from([3, 8]),
        Int32Array.from([2, 8]),
        Int32Array.from([1, 8]),
        Int32Array.from([0, 8])
      ]), ie.VERSION_INFO_POLY = 7973, ie.TYPE_INFO_POLY = 1335, ie.TYPE_INFO_MASK_PATTERN = 21522;
      class qi {
        constructor(e, t) {
          this.dataBytes = e, this.errorCorrectionBytes = t;
        }
        getDataBytes() {
          return this.dataBytes;
        }
        getErrorCorrectionBytes() {
          return this.errorCorrectionBytes;
        }
      }
      class ze {
        // TYPESCRIPTPORT: changed to UTF8, the default for js
        constructor() {
        }
        // The mask penalty calculation is complicated.  See Table 21 of JISX0510:2004 (p.45) for details.
        // Basically it applies four rules and summate all penalties.
        static calculateMaskPenalty(e) {
          return rt.applyMaskPenaltyRule1(e) + rt.applyMaskPenaltyRule2(e) + rt.applyMaskPenaltyRule3(e) + rt.applyMaskPenaltyRule4(e);
        }
        /**
         * @param content text to encode
         * @param ecLevel error correction level to use
         * @return {@link QRCode} representing the encoded QR code
         * @throws WriterException if encoding can't succeed, because of for example invalid content
         *   or configuration
         */
        // public static encode(content: string, ecLevel: ErrorCorrectionLevel): QRCode /*throws WriterException*/ {
        //   return encode(content, ecLevel, null)
        // }
        static encode(e, t, r = null) {
          let n = ze.DEFAULT_BYTE_MODE_ENCODING;
          const i = r !== null && r.get(ht.CHARACTER_SET) !== void 0;
          i && (n = r.get(ht.CHARACTER_SET).toString());
          const s = this.chooseMode(e, n), a = new z();
          if (s === ne.BYTE && (i || ze.DEFAULT_BYTE_MODE_ENCODING !== n)) {
            const W = F.getCharacterSetECIByName(n);
            W !== void 0 && this.appendECI(W, a);
          }
          this.appendModeInfo(s, a);
          const o = new z();
          this.appendBytes(e, s, o, n);
          let l;
          if (r !== null && r.get(ht.QR_VERSION) !== void 0) {
            const W = Number.parseInt(r.get(ht.QR_VERSION).toString(), 10);
            l = te.getVersionForNumber(W);
            const U = this.calculateBitsNeeded(s, a, o, l);
            if (!this.willFit(U, l, t))
              throw new Ge("Data too big for requested version");
          } else
            l = this.recommendVersion(t, s, a, o);
          const u = new z();
          u.appendBitArray(a);
          const g = s === ne.BYTE ? o.getSizeInBytes() : e.length;
          this.appendLengthInfo(g, l, s, u), u.appendBitArray(o);
          const x = l.getECBlocksForLevel(t), y = l.getTotalCodewords() - x.getTotalECCodewords();
          this.terminateBits(y, u);
          const I = this.interleaveWithECBytes(u, l.getTotalCodewords(), y, x.getNumBlocks()), b = new Ar();
          b.setECLevel(t), b.setMode(s), b.setVersion(l);
          const T = l.getDimensionForVersion(), R = new hn(T, T), H = this.chooseMaskPattern(I, t, l, R);
          return b.setMaskPattern(H), ie.buildMatrix(I, t, l, H, R), b.setMatrix(R), b;
        }
        /**
         * Decides the smallest version of QR code that will contain all of the provided data.
         *
         * @throws WriterException if the data cannot fit in any version
         */
        static recommendVersion(e, t, r, n) {
          const i = this.calculateBitsNeeded(t, r, n, te.getVersionForNumber(1)), s = this.chooseVersion(i, e), a = this.calculateBitsNeeded(t, r, n, s);
          return this.chooseVersion(a, e);
        }
        static calculateBitsNeeded(e, t, r, n) {
          return t.getSize() + e.getCharacterCountBits(n) + r.getSize();
        }
        /**
         * @return the code point of the table used in alphanumeric mode or
         *  -1 if there is no corresponding code in the table.
         */
        static getAlphanumericCode(e) {
          return e < ze.ALPHANUMERIC_TABLE.length ? ze.ALPHANUMERIC_TABLE[e] : -1;
        }
        // public static chooseMode(content: string): Mode {
        //   return chooseMode(content, null);
        // }
        /**
         * Choose the best mode by examining the content. Note that 'encoding' is used as a hint;
         * if it is Shift_JIS, and the input is only double-byte Kanji, then we return {@link Mode#KANJI}.
         */
        static chooseMode(e, t = null) {
          if (F.SJIS.getName() === t && this.isOnlyDoubleByteKanji(e))
            return ne.KANJI;
          let r = !1, n = !1;
          for (let i = 0, s = e.length; i < s; ++i) {
            const a = e.charAt(i);
            if (ze.isDigit(a))
              r = !0;
            else if (this.getAlphanumericCode(a.charCodeAt(0)) !== -1)
              n = !0;
            else
              return ne.BYTE;
          }
          return n ? ne.ALPHANUMERIC : r ? ne.NUMERIC : ne.BYTE;
        }
        static isOnlyDoubleByteKanji(e) {
          let t;
          try {
            t = Ce.encode(e, F.SJIS);
          } catch {
            return !1;
          }
          const r = t.length;
          if (r % 2 !== 0)
            return !1;
          for (let n = 0; n < r; n += 2) {
            const i = t[n] & 255;
            if ((i < 129 || i > 159) && (i < 224 || i > 235))
              return !1;
          }
          return !0;
        }
        static chooseMaskPattern(e, t, r, n) {
          let i = Number.MAX_SAFE_INTEGER, s = -1;
          for (let a = 0; a < Ar.NUM_MASK_PATTERNS; a++) {
            ie.buildMatrix(e, t, r, a, n);
            let o = this.calculateMaskPenalty(n);
            o < i && (i = o, s = a);
          }
          return s;
        }
        static chooseVersion(e, t) {
          for (let r = 1; r <= 40; r++) {
            const n = te.getVersionForNumber(r);
            if (ze.willFit(e, n, t))
              return n;
          }
          throw new Ge("Data too big");
        }
        /**
         * @return true if the number of input bits will fit in a code with the specified version and
         * error correction level.
         */
        static willFit(e, t, r) {
          const n = t.getTotalCodewords(), s = t.getECBlocksForLevel(r).getTotalECCodewords(), a = n - s, o = (e + 7) / 8;
          return a >= o;
        }
        /**
         * Terminate bits as described in 8.4.8 and 8.4.9 of JISX0510:2004 (p.24).
         */
        static terminateBits(e, t) {
          const r = e * 8;
          if (t.getSize() > r)
            throw new Ge("data bits cannot fit in the QR Code" + t.getSize() + " > " + r);
          for (let s = 0; s < 4 && t.getSize() < r; ++s)
            t.appendBit(!1);
          const n = t.getSize() & 7;
          if (n > 0)
            for (let s = n; s < 8; s++)
              t.appendBit(!1);
          const i = e - t.getSizeInBytes();
          for (let s = 0; s < i; ++s)
            t.appendBits((s & 1) === 0 ? 236 : 17, 8);
          if (t.getSize() !== r)
            throw new Ge("Bits size does not equal capacity");
        }
        /**
         * Get number of data bytes and number of error correction bytes for block id "blockID". Store
         * the result in "numDataBytesInBlock", and "numECBytesInBlock". See table 12 in 8.5.1 of
         * JISX0510:2004 (p.30)
         */
        static getNumDataBytesAndNumECBytesForBlockID(e, t, r, n, i, s) {
          if (n >= r)
            throw new Ge("Block ID too large");
          const a = e % r, o = r - a, l = Math.floor(e / r), u = l + 1, g = Math.floor(t / r), x = g + 1, y = l - g, I = u - x;
          if (y !== I)
            throw new Ge("EC bytes mismatch");
          if (r !== o + a)
            throw new Ge("RS blocks mismatch");
          if (e !== (g + y) * o + (x + I) * a)
            throw new Ge("Total bytes mismatch");
          n < o ? (i[0] = g, s[0] = y) : (i[0] = x, s[0] = I);
        }
        /**
         * Interleave "bits" with corresponding error correction bytes. On success, store the result in
         * "result". The interleave rule is complicated. See 8.6 of JISX0510:2004 (p.37) for details.
         */
        static interleaveWithECBytes(e, t, r, n) {
          if (e.getSizeInBytes() !== r)
            throw new Ge("Number of bits and data bytes does not match");
          let i = 0, s = 0, a = 0;
          const o = new Array();
          for (let u = 0; u < n; ++u) {
            const g = new Int32Array(1), x = new Int32Array(1);
            ze.getNumDataBytesAndNumECBytesForBlockID(t, r, n, u, g, x);
            const y = g[0], I = new Uint8Array(y);
            e.toBytes(8 * i, I, 0, y);
            const b = ze.generateECBytes(I, x[0]);
            o.push(new qi(I, b)), s = Math.max(s, y), a = Math.max(a, b.length), i += g[0];
          }
          if (r !== i)
            throw new Ge("Data bytes does not match offset");
          const l = new z();
          for (let u = 0; u < s; ++u)
            for (const g of o) {
              const x = g.getDataBytes();
              u < x.length && l.appendBits(x[u], 8);
            }
          for (let u = 0; u < a; ++u)
            for (const g of o) {
              const x = g.getErrorCorrectionBytes();
              u < x.length && l.appendBits(x[u], 8);
            }
          if (t !== l.getSizeInBytes())
            throw new Ge("Interleaving error: " + t + " and " + l.getSizeInBytes() + " differ.");
          return l;
        }
        static generateECBytes(e, t) {
          const r = e.length, n = new Int32Array(r + t);
          for (let s = 0; s < r; s++)
            n[s] = e[s] & 255;
          new Pn(_e.QR_CODE_FIELD_256).encode(n, t);
          const i = new Uint8Array(t);
          for (let s = 0; s < t; s++)
            i[s] = /*(byte) */
            n[r + s];
          return i;
        }
        /**
         * Append mode info. On success, store the result in "bits".
         */
        static appendModeInfo(e, t) {
          t.appendBits(e.getBits(), 4);
        }
        /**
         * Append length info. On success, store the result in "bits".
         */
        static appendLengthInfo(e, t, r, n) {
          const i = r.getCharacterCountBits(t);
          if (e >= 1 << i)
            throw new Ge(e + " is bigger than " + ((1 << i) - 1));
          n.appendBits(e, i);
        }
        /**
         * Append "bytes" in "mode" mode (encoding) into "bits". On success, store the result in "bits".
         */
        static appendBytes(e, t, r, n) {
          switch (t) {
            case ne.NUMERIC:
              ze.appendNumericBytes(e, r);
              break;
            case ne.ALPHANUMERIC:
              ze.appendAlphanumericBytes(e, r);
              break;
            case ne.BYTE:
              ze.append8BitBytes(e, r, n);
              break;
            case ne.KANJI:
              ze.appendKanjiBytes(e, r);
              break;
            default:
              throw new Ge("Invalid mode: " + t);
          }
        }
        static getDigit(e) {
          return e.charCodeAt(0) - 48;
        }
        static isDigit(e) {
          const t = ze.getDigit(e);
          return t >= 0 && t <= 9;
        }
        static appendNumericBytes(e, t) {
          const r = e.length;
          let n = 0;
          for (; n < r; ) {
            const i = ze.getDigit(e.charAt(n));
            if (n + 2 < r) {
              const s = ze.getDigit(e.charAt(n + 1)), a = ze.getDigit(e.charAt(n + 2));
              t.appendBits(i * 100 + s * 10 + a, 10), n += 3;
            } else if (n + 1 < r) {
              const s = ze.getDigit(e.charAt(n + 1));
              t.appendBits(i * 10 + s, 7), n += 2;
            } else
              t.appendBits(i, 4), n++;
          }
        }
        static appendAlphanumericBytes(e, t) {
          const r = e.length;
          let n = 0;
          for (; n < r; ) {
            const i = ze.getAlphanumericCode(e.charCodeAt(n));
            if (i === -1)
              throw new Ge();
            if (n + 1 < r) {
              const s = ze.getAlphanumericCode(e.charCodeAt(n + 1));
              if (s === -1)
                throw new Ge();
              t.appendBits(i * 45 + s, 11), n += 2;
            } else
              t.appendBits(i, 6), n++;
          }
        }
        static append8BitBytes(e, t, r) {
          let n;
          try {
            n = Ce.encode(e, r);
          } catch (i) {
            throw new Ge(i);
          }
          for (let i = 0, s = n.length; i !== s; i++) {
            const a = n[i];
            t.appendBits(a, 8);
          }
        }
        /**
         * @throws WriterException
         */
        static appendKanjiBytes(e, t) {
          let r;
          try {
            r = Ce.encode(e, F.SJIS);
          } catch (i) {
            throw new Ge(i);
          }
          const n = r.length;
          for (let i = 0; i < n; i += 2) {
            const s = r[i] & 255, a = r[i + 1] & 255, o = s << 8 & 4294967295 | a;
            let l = -1;
            if (o >= 33088 && o <= 40956 ? l = o - 33088 : o >= 57408 && o <= 60351 && (l = o - 49472), l === -1)
              throw new Ge("Invalid byte sequence");
            const u = (l >> 8) * 192 + (l & 255);
            t.appendBits(u, 13);
          }
        }
        static appendECI(e, t) {
          t.appendBits(ne.ECI.getBits(), 4), t.appendBits(e.getValue(), 8);
        }
      }
      ze.ALPHANUMERIC_TABLE = Int32Array.from([
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        36,
        -1,
        -1,
        -1,
        37,
        38,
        -1,
        -1,
        -1,
        -1,
        39,
        40,
        -1,
        41,
        42,
        43,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        44,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        -1,
        -1,
        -1,
        -1,
        -1
      ]), ze.DEFAULT_BYTE_MODE_ENCODING = F.UTF8.getName();
      class mr {
        /**
         * Writes and renders a QRCode SVG element.
         *
         * @param contents
         * @param width
         * @param height
         * @param hints
         */
        write(e, t, r, n = null) {
          if (e.length === 0)
            throw new v("Found empty contents");
          if (t < 0 || r < 0)
            throw new v("Requested dimensions are too small: " + t + "x" + r);
          let i = Xe.L, s = mr.QUIET_ZONE_SIZE;
          n !== null && (n.get(ht.ERROR_CORRECTION) !== void 0 && (i = Xe.fromString(n.get(ht.ERROR_CORRECTION).toString())), n.get(ht.MARGIN) !== void 0 && (s = Number.parseInt(n.get(ht.MARGIN).toString(), 10)));
          const a = ze.encode(e, i, n);
          return this.renderResult(a, t, r, s);
        }
        /**
         * Renders the result and then appends it to the DOM.
         */
        writeToDom(e, t, r, n, i = null) {
          typeof e == "string" && (e = document.querySelector(e));
          const s = this.write(t, r, n, i);
          e && e.appendChild(s);
        }
        /**
         * Note that the input matrix uses 0 == white, 1 == black.
         * The output matrix uses 0 == black, 255 == white (i.e. an 8 bit greyscale bitmap).
         */
        renderResult(e, t, r, n) {
          const i = e.getMatrix();
          if (i === null)
            throw new bt();
          const s = i.getWidth(), a = i.getHeight(), o = s + n * 2, l = a + n * 2, u = Math.max(t, o), g = Math.max(r, l), x = Math.min(Math.floor(u / o), Math.floor(g / l)), y = Math.floor((u - s * x) / 2), I = Math.floor((g - a * x) / 2), b = this.createSVGElement(u, g);
          for (let T = 0, R = I; T < a; T++, R += x)
            for (let H = 0, W = y; H < s; H++, W += x)
              if (i.get(H, T) === 1) {
                const U = this.createSvgRectElement(W, R, x, x);
                b.appendChild(U);
              }
          return b;
        }
        /**
         * Creates a SVG element.
         *
         * @param w SVG's width attribute
         * @param h SVG's height attribute
         */
        createSVGElement(e, t) {
          const r = document.createElementNS(mr.SVG_NS, "svg");
          return r.setAttributeNS(null, "height", e.toString()), r.setAttributeNS(null, "width", t.toString()), r;
        }
        /**
         * Creates a SVG rect element.
         *
         * @param x Element's x coordinate
         * @param y Element's y coordinate
         * @param w Element's width attribute
         * @param h Element's height attribute
         */
        createSvgRectElement(e, t, r, n) {
          const i = document.createElementNS(mr.SVG_NS, "rect");
          return i.setAttributeNS(null, "x", e.toString()), i.setAttributeNS(null, "y", t.toString()), i.setAttributeNS(null, "height", r.toString()), i.setAttributeNS(null, "width", n.toString()), i.setAttributeNS(null, "fill", "#000000"), i;
        }
      }
      mr.QUIET_ZONE_SIZE = 4, mr.SVG_NS = "http://www.w3.org/2000/svg";
      class Rr {
        /*@Override*/
        // public encode(contents: string, format: BarcodeFormat, width: number /*int*/, height: number /*int*/): BitMatrix
        //     /*throws WriterException */ {
        //   return encode(contents, format, width, height, null)
        // }
        /*@Override*/
        encode(e, t, r, n, i) {
          if (e.length === 0)
            throw new v("Found empty contents");
          if (t !== re.QR_CODE)
            throw new v("Can only encode QR_CODE, but got " + t);
          if (r < 0 || n < 0)
            throw new v(`Requested dimensions are too small: ${r}x${n}`);
          let s = Xe.L, a = Rr.QUIET_ZONE_SIZE;
          i !== null && (i.get(ht.ERROR_CORRECTION) !== void 0 && (s = Xe.fromString(i.get(ht.ERROR_CORRECTION).toString())), i.get(ht.MARGIN) !== void 0 && (a = Number.parseInt(i.get(ht.MARGIN).toString(), 10)));
          const o = ze.encode(e, s, i);
          return Rr.renderResult(o, r, n, a);
        }
        // Note that the input matrix uses 0 == white, 1 == black, while the output matrix uses
        // 0 == black, 255 == white (i.e. an 8 bit greyscale bitmap).
        static renderResult(e, t, r, n) {
          const i = e.getMatrix();
          if (i === null)
            throw new bt();
          const s = i.getWidth(), a = i.getHeight(), o = s + n * 2, l = a + n * 2, u = Math.max(t, o), g = Math.max(r, l), x = Math.min(Math.floor(u / o), Math.floor(g / l)), y = Math.floor((u - s * x) / 2), I = Math.floor((g - a * x) / 2), b = new Oe(u, g);
          for (let T = 0, R = I; T < a; T++, R += x)
            for (let H = 0, W = y; H < s; H++, W += x)
              i.get(H, T) === 1 && b.setRegion(W, R, x, x);
          return b;
        }
      }
      Rr.QUIET_ZONE_SIZE = 4;
      class Qi {
        /*@Override*/
        // public encode(contents: string,
        //                         format: BarcodeFormat,
        //                         width: number /*int*/,
        //                         height: number /*int*/): BitMatrix /*throws WriterException */ {
        //   return encode(contents, format, width, height, null)
        // }
        /*@Override*/
        encode(e, t, r, n, i) {
          let s;
          switch (t) {
            // case BarcodeFormat.EAN_8:
            //   writer = new EAN8Writer()
            //   break
            // case BarcodeFormat.UPC_E:
            //   writer = new UPCEWriter()
            //   break
            // case BarcodeFormat.EAN_13:
            //   writer = new EAN13Writer()
            //   break
            // case BarcodeFormat.UPC_A:
            //   writer = new UPCAWriter()
            //   break
            case re.QR_CODE:
              s = new Rr();
              break;
            // case BarcodeFormat.CODE_39:
            //   writer = new Code39Writer()
            //   break
            // case BarcodeFormat.CODE_93:
            //   writer = new Code93Writer()
            //   break
            // case BarcodeFormat.CODE_128:
            //   writer = new Code128Writer()
            //   break
            // case BarcodeFormat.ITF:
            //   writer = new ITFWriter()
            //   break
            // case BarcodeFormat.PDF_417:
            //   writer = new PDF417Writer()
            //   break
            // case BarcodeFormat.CODABAR:
            //   writer = new CodaBarWriter()
            //   break
            // case BarcodeFormat.DATA_MATRIX:
            //   writer = new DataMatrixWriter()
            //   break
            // case BarcodeFormat.AZTEC:
            //   writer = new AztecWriter()
            //   break
            default:
              throw new v("No encoder available for format " + t);
          }
          return s.encode(e, t, r, n, i);
        }
      }
      class Kt extends It {
        constructor(e, t, r, n, i, s, a, o) {
          if (super(s, a), this.yuvData = e, this.dataWidth = t, this.dataHeight = r, this.left = n, this.top = i, n + s > t || i + a > r)
            throw new v("Crop rectangle does not fit within image data.");
          o && this.reverseHorizontal(s, a);
        }
        /*@Override*/
        getRow(e, t) {
          if (e < 0 || e >= this.getHeight())
            throw new v("Requested row is outside the image: " + e);
          const r = this.getWidth();
          (t == null || t.length < r) && (t = new Uint8ClampedArray(r));
          const n = (e + this.top) * this.dataWidth + this.left;
          return j.arraycopy(this.yuvData, n, t, 0, r), t;
        }
        /*@Override*/
        getMatrix() {
          const e = this.getWidth(), t = this.getHeight();
          if (e === this.dataWidth && t === this.dataHeight)
            return this.yuvData;
          const r = e * t, n = new Uint8ClampedArray(r);
          let i = this.top * this.dataWidth + this.left;
          if (e === this.dataWidth)
            return j.arraycopy(this.yuvData, i, n, 0, r), n;
          for (let s = 0; s < t; s++) {
            const a = s * e;
            j.arraycopy(this.yuvData, i, n, a, e), i += this.dataWidth;
          }
          return n;
        }
        /*@Override*/
        isCropSupported() {
          return !0;
        }
        /*@Override*/
        crop(e, t, r, n) {
          return new Kt(this.yuvData, this.dataWidth, this.dataHeight, this.left + e, this.top + t, r, n, !1);
        }
        renderThumbnail() {
          const e = this.getWidth() / Kt.THUMBNAIL_SCALE_FACTOR, t = this.getHeight() / Kt.THUMBNAIL_SCALE_FACTOR, r = new Int32Array(e * t), n = this.yuvData;
          let i = this.top * this.dataWidth + this.left;
          for (let s = 0; s < t; s++) {
            const a = s * e;
            for (let o = 0; o < e; o++) {
              const l = n[i + o * Kt.THUMBNAIL_SCALE_FACTOR] & 255;
              r[a + o] = 4278190080 | l * 65793;
            }
            i += this.dataWidth * Kt.THUMBNAIL_SCALE_FACTOR;
          }
          return r;
        }
        /**
         * @return width of image from {@link #renderThumbnail()}
         */
        getThumbnailWidth() {
          return this.getWidth() / Kt.THUMBNAIL_SCALE_FACTOR;
        }
        /**
         * @return height of image from {@link #renderThumbnail()}
         */
        getThumbnailHeight() {
          return this.getHeight() / Kt.THUMBNAIL_SCALE_FACTOR;
        }
        reverseHorizontal(e, t) {
          const r = this.yuvData;
          for (let n = 0, i = this.top * this.dataWidth + this.left; n < t; n++, i += this.dataWidth) {
            const s = i + e / 2;
            for (let a = i, o = i + e - 1; a < s; a++, o--) {
              const l = r[a];
              r[a] = r[o], r[o] = l;
            }
          }
        }
        invert() {
          return new Mt(this);
        }
      }
      Kt.THUMBNAIL_SCALE_FACTOR = 2;
      class Fn extends It {
        constructor(e, t, r, n, i, s, a) {
          if (super(t, r), this.dataWidth = n, this.dataHeight = i, this.left = s, this.top = a, e.BYTES_PER_ELEMENT === 4) {
            const o = t * r, l = new Uint8ClampedArray(o);
            for (let u = 0; u < o; u++) {
              const g = e[u], x = g >> 16 & 255, y = g >> 7 & 510, I = g & 255;
              l[u] = /*(byte) */
              (x + y + I) / 4 & 255;
            }
            this.luminances = l;
          } else
            this.luminances = e;
          if (n === void 0 && (this.dataWidth = t), i === void 0 && (this.dataHeight = r), s === void 0 && (this.left = 0), a === void 0 && (this.top = 0), this.left + t > this.dataWidth || this.top + r > this.dataHeight)
            throw new v("Crop rectangle does not fit within image data.");
        }
        /*@Override*/
        getRow(e, t) {
          if (e < 0 || e >= this.getHeight())
            throw new v("Requested row is outside the image: " + e);
          const r = this.getWidth();
          (t == null || t.length < r) && (t = new Uint8ClampedArray(r));
          const n = (e + this.top) * this.dataWidth + this.left;
          return j.arraycopy(this.luminances, n, t, 0, r), t;
        }
        /*@Override*/
        getMatrix() {
          const e = this.getWidth(), t = this.getHeight();
          if (e === this.dataWidth && t === this.dataHeight)
            return this.luminances;
          const r = e * t, n = new Uint8ClampedArray(r);
          let i = this.top * this.dataWidth + this.left;
          if (e === this.dataWidth)
            return j.arraycopy(this.luminances, i, n, 0, r), n;
          for (let s = 0; s < t; s++) {
            const a = s * e;
            j.arraycopy(this.luminances, i, n, a, e), i += this.dataWidth;
          }
          return n;
        }
        /*@Override*/
        isCropSupported() {
          return !0;
        }
        /*@Override*/
        crop(e, t, r, n) {
          return new Fn(this.luminances, r, n, this.dataWidth, this.dataHeight, this.left + e, this.top + t);
        }
        invert() {
          return new Mt(this);
        }
      }
      class ni extends F {
        static forName(e) {
          return this.getCharacterSetECIByName(e);
        }
      }
      class kn {
      }
      kn.ISO_8859_1 = F.ISO8859_1;
      class ii {
        /**
         * @return {@code true} if compact instead of full mode
         */
        isCompact() {
          return this.compact;
        }
        setCompact(e) {
          this.compact = e;
        }
        /**
         * @return size in pixels (width and height)
         */
        getSize() {
          return this.size;
        }
        setSize(e) {
          this.size = e;
        }
        /**
         * @return number of levels
         */
        getLayers() {
          return this.layers;
        }
        setLayers(e) {
          this.layers = e;
        }
        /**
         * @return number of data codewords
         */
        getCodeWords() {
          return this.codeWords;
        }
        setCodeWords(e) {
          this.codeWords = e;
        }
        /**
         * @return the symbol image
         */
        getMatrix() {
          return this.matrix;
        }
        setMatrix(e) {
          this.matrix = e;
        }
      }
      class si {
        /**
         * The singletonList(T) method is used to return an immutable list containing only the specified object.
         */
        static singletonList(e) {
          return [e];
        }
        /**
         * The min(Collection<? extends T>, Comparator<? super T>) method is used to return the minimum element of the given collection, according to the order induced by the specified comparator.
         */
        static min(e, t) {
          return e.sort(t)[0];
        }
      }
      class Ji {
        constructor(e) {
          this.previous = e;
        }
        getPrevious() {
          return this.previous;
        }
      }
      class vr extends Ji {
        constructor(e, t, r) {
          super(e), this.value = t, this.bitCount = r;
        }
        /**
         * @Override
         */
        appendTo(e, t) {
          e.appendBits(this.value, this.bitCount);
        }
        add(e, t) {
          return new vr(this, e, t);
        }
        addBinaryShift(e, t) {
          return console.warn("addBinaryShift on SimpleToken, this simply returns a copy of this token"), new vr(this, e, t);
        }
        /**
         * @Override
         */
        toString() {
          let e = this.value & (1 << this.bitCount) - 1;
          return e |= 1 << this.bitCount, "<" + V.toBinaryString(e | 1 << this.bitCount).substring(1) + ">";
        }
      }
      class Un extends vr {
        constructor(e, t, r) {
          super(e, 0, 0), this.binaryShiftStart = t, this.binaryShiftByteCount = r;
        }
        /**
         * @Override
         */
        appendTo(e, t) {
          for (let r = 0; r < this.binaryShiftByteCount; r++)
            (r === 0 || r === 31 && this.binaryShiftByteCount <= 62) && (e.appendBits(31, 5), this.binaryShiftByteCount > 62 ? e.appendBits(this.binaryShiftByteCount - 31, 16) : r === 0 ? e.appendBits(Math.min(this.binaryShiftByteCount, 31), 5) : e.appendBits(this.binaryShiftByteCount - 31, 5)), e.appendBits(t[this.binaryShiftStart + r], 8);
        }
        addBinaryShift(e, t) {
          return new Un(this, e, t);
        }
        /**
         * @Override
         */
        toString() {
          return "<" + this.binaryShiftStart + "::" + (this.binaryShiftStart + this.binaryShiftByteCount - 1) + ">";
        }
      }
      function $i(d, e, t) {
        return new Un(d, e, t);
      }
      function qr(d, e, t) {
        return new vr(d, e, t);
      }
      const es = [
        "UPPER",
        "LOWER",
        "DIGIT",
        "MIXED",
        "PUNCT"
      ], hr = 0, dn = 1, Vt = 2, ai = 3, qt = 4, ts = new vr(null, 0, 0), Vn = [
        Int32Array.from([
          0,
          (5 << 16) + 28,
          (5 << 16) + 30,
          (5 << 16) + 29,
          656318
          // UPPER -> MIXED -> PUNCT
        ]),
        Int32Array.from([
          (9 << 16) + 480 + 14,
          0,
          (5 << 16) + 30,
          (5 << 16) + 29,
          656318
          // LOWER -> MIXED -> PUNCT
        ]),
        Int32Array.from([
          (4 << 16) + 14,
          (9 << 16) + 448 + 28,
          0,
          (9 << 16) + 448 + 29,
          932798
          // DIGIT -> UPPER -> MIXED -> PUNCT
        ]),
        Int32Array.from([
          (5 << 16) + 29,
          (5 << 16) + 28,
          656318,
          0,
          (5 << 16) + 30
          // MIXED -> PUNCT
        ]),
        Int32Array.from([
          (5 << 16) + 31,
          656380,
          656382,
          656381,
          0
        ])
      ];
      function rs(d) {
        for (let e of d)
          G.fill(e, -1);
        return d[hr][qt] = 0, d[dn][qt] = 0, d[dn][hr] = 28, d[ai][qt] = 0, d[Vt][qt] = 0, d[Vt][hr] = 15, d;
      }
      const oi = rs(G.createInt32Array(6, 6));
      class Qt {
        constructor(e, t, r, n) {
          this.token = e, this.mode = t, this.binaryShiftByteCount = r, this.bitCount = n;
        }
        getMode() {
          return this.mode;
        }
        getToken() {
          return this.token;
        }
        getBinaryShiftByteCount() {
          return this.binaryShiftByteCount;
        }
        getBitCount() {
          return this.bitCount;
        }
        // Create a new state representing this state with a latch to a (not
        // necessary different) mode, and then a code.
        latchAndAppend(e, t) {
          let r = this.bitCount, n = this.token;
          if (e !== this.mode) {
            let s = Vn[this.mode][e];
            n = qr(n, s & 65535, s >> 16), r += s >> 16;
          }
          let i = e === Vt ? 4 : 5;
          return n = qr(n, t, i), new Qt(n, e, 0, r + i);
        }
        // Create a new state representing this state, with a temporary shift
        // to a different mode to output a single value.
        shiftAndAppend(e, t) {
          let r = this.token, n = this.mode === Vt ? 4 : 5;
          return r = qr(r, oi[this.mode][e], n), r = qr(r, t, 5), new Qt(r, this.mode, 0, this.bitCount + n + 5);
        }
        // Create a new state representing this state, but an additional character
        // output in Binary Shift mode.
        addBinaryShiftChar(e) {
          let t = this.token, r = this.mode, n = this.bitCount;
          if (this.mode === qt || this.mode === Vt) {
            let a = Vn[r][hr];
            t = qr(t, a & 65535, a >> 16), n += a >> 16, r = hr;
          }
          let i = this.binaryShiftByteCount === 0 || this.binaryShiftByteCount === 31 ? 18 : this.binaryShiftByteCount === 62 ? 9 : 8, s = new Qt(t, r, this.binaryShiftByteCount + 1, n + i);
          return s.binaryShiftByteCount === 2078 && (s = s.endBinaryShift(e + 1)), s;
        }
        // Create the state identical to this one, but we are no longer in
        // Binary Shift mode.
        endBinaryShift(e) {
          if (this.binaryShiftByteCount === 0)
            return this;
          let t = this.token;
          return t = $i(t, e - this.binaryShiftByteCount, this.binaryShiftByteCount), new Qt(t, this.mode, 0, this.bitCount);
        }
        // Returns true if "this" state is better (equal: or) to be in than "that"
        // state under all possible circumstances.
        isBetterThanOrEqualTo(e) {
          let t = this.bitCount + (Vn[this.mode][e.mode] >> 16);
          return this.binaryShiftByteCount < e.binaryShiftByteCount ? t += Qt.calculateBinaryShiftCost(e) - Qt.calculateBinaryShiftCost(this) : this.binaryShiftByteCount > e.binaryShiftByteCount && e.binaryShiftByteCount > 0 && (t += 10), t <= e.bitCount;
        }
        toBitArray(e) {
          let t = [];
          for (let n = this.endBinaryShift(e.length).token; n !== null; n = n.getPrevious())
            t.unshift(n);
          let r = new z();
          for (const n of t)
            n.appendTo(r, e);
          return r;
        }
        /**
         * @Override
         */
        toString() {
          return $.format("%s bits=%d bytes=%d", es[this.mode], this.bitCount, this.binaryShiftByteCount);
        }
        static calculateBinaryShiftCost(e) {
          return e.binaryShiftByteCount > 62 ? 21 : e.binaryShiftByteCount > 31 ? 20 : e.binaryShiftByteCount > 0 ? 10 : 0;
        }
      }
      Qt.INITIAL_STATE = new Qt(ts, hr, 0, 0);
      function ns(d) {
        const e = $.getCharCode(" "), t = $.getCharCode("."), r = $.getCharCode(",");
        d[hr][e] = 1;
        const n = $.getCharCode("Z"), i = $.getCharCode("A");
        for (let x = i; x <= n; x++)
          d[hr][x] = x - i + 2;
        d[dn][e] = 1;
        const s = $.getCharCode("z"), a = $.getCharCode("a");
        for (let x = a; x <= s; x++)
          d[dn][x] = x - a + 2;
        d[Vt][e] = 1;
        const o = $.getCharCode("9"), l = $.getCharCode("0");
        for (let x = l; x <= o; x++)
          d[Vt][x] = x - l + 2;
        d[Vt][r] = 12, d[Vt][t] = 13;
        const u = [
          "\0",
          " ",
          "",
          "",
          "",
          "",
          "",
          "",
          "\x07",
          "\b",
          "	",
          `
`,
          "\v",
          "\f",
          "\r",
          "\x1B",
          "",
          "",
          "",
          "",
          "@",
          "\\",
          "^",
          "_",
          "`",
          "|",
          "~",
          ""
        ];
        for (let x = 0; x < u.length; x++)
          d[ai][$.getCharCode(u[x])] = x;
        const g = [
          "\0",
          "\r",
          "\0",
          "\0",
          "\0",
          "\0",
          "!",
          "'",
          "#",
          "$",
          "%",
          "&",
          "'",
          "(",
          ")",
          "*",
          "+",
          ",",
          "-",
          ".",
          "/",
          ":",
          ";",
          "<",
          "=",
          ">",
          "?",
          "[",
          "]",
          "{",
          "}"
        ];
        for (let x = 0; x < g.length; x++)
          $.getCharCode(g[x]) > 0 && (d[qt][$.getCharCode(g[x])] = x);
        return d;
      }
      const Gn = ns(G.createInt32Array(5, 256));
      class Qr {
        constructor(e) {
          this.text = e;
        }
        /**
         * @return text represented by this encoder encoded as a {@link BitArray}
         */
        encode() {
          const e = $.getCharCode(" "), t = $.getCharCode(`
`);
          let r = si.singletonList(Qt.INITIAL_STATE);
          for (let i = 0; i < this.text.length; i++) {
            let s, a = i + 1 < this.text.length ? this.text[i + 1] : 0;
            switch (this.text[i]) {
              case $.getCharCode("\r"):
                s = a === t ? 2 : 0;
                break;
              case $.getCharCode("."):
                s = a === e ? 3 : 0;
                break;
              case $.getCharCode(","):
                s = a === e ? 4 : 0;
                break;
              case $.getCharCode(":"):
                s = a === e ? 5 : 0;
                break;
              default:
                s = 0;
            }
            s > 0 ? (r = Qr.updateStateListForPair(r, i, s), i++) : r = this.updateStateListForChar(r, i);
          }
          return si.min(r, (i, s) => i.getBitCount() - s.getBitCount()).toBitArray(this.text);
        }
        // We update a set of states for a new character by updating each state
        // for the new character, merging the results, and then removing the
        // non-optimal states.
        updateStateListForChar(e, t) {
          const r = [];
          for (let n of e)
            this.updateStateForChar(n, t, r);
          return Qr.simplifyStates(r);
        }
        // Return a set of states that represent the possible ways of updating this
        // state for the next character.  The resulting set of states are added to
        // the "result" list.
        updateStateForChar(e, t, r) {
          let n = this.text[t] & 255, i = Gn[e.getMode()][n] > 0, s = null;
          for (let a = 0; a <= qt; a++) {
            let o = Gn[a][n];
            if (o > 0) {
              if (s == null && (s = e.endBinaryShift(t)), !i || a === e.getMode() || a === Vt) {
                const l = s.latchAndAppend(a, o);
                r.push(l);
              }
              if (!i && oi[e.getMode()][a] >= 0) {
                const l = s.shiftAndAppend(a, o);
                r.push(l);
              }
            }
          }
          if (e.getBinaryShiftByteCount() > 0 || Gn[e.getMode()][n] === 0) {
            let a = e.addBinaryShiftChar(t);
            r.push(a);
          }
        }
        static updateStateListForPair(e, t, r) {
          const n = [];
          for (let i of e)
            this.updateStateForPair(i, t, r, n);
          return this.simplifyStates(n);
        }
        static updateStateForPair(e, t, r, n) {
          let i = e.endBinaryShift(t);
          if (n.push(i.latchAndAppend(qt, r)), e.getMode() !== qt && n.push(i.shiftAndAppend(qt, r)), r === 3 || r === 4) {
            let s = i.latchAndAppend(Vt, 16 - r).latchAndAppend(Vt, 1);
            n.push(s);
          }
          if (e.getBinaryShiftByteCount() > 0) {
            let s = e.addBinaryShiftChar(t).addBinaryShiftChar(t + 1);
            n.push(s);
          }
        }
        static simplifyStates(e) {
          let t = [];
          for (const r of e) {
            let n = !0;
            for (const i of t) {
              if (i.isBetterThanOrEqualTo(r)) {
                n = !1;
                break;
              }
              r.isBetterThanOrEqualTo(i) && (t = t.filter((s) => s !== i));
            }
            n && t.push(r);
          }
          return t;
        }
      }
      class Te {
        constructor() {
        }
        /**
         * Encodes the given binary content as an Aztec symbol
         *
         * @param data input data string
         * @return Aztec symbol matrix with metadata
         */
        static encodeBytes(e) {
          return Te.encode(e, Te.DEFAULT_EC_PERCENT, Te.DEFAULT_AZTEC_LAYERS);
        }
        /**
         * Encodes the given binary content as an Aztec symbol
         *
         * @param data input data string
         * @param minECCPercent minimal percentage of error check words (According to ISO/IEC 24778:2008,
         *                      a minimum of 23% + 3 words is recommended)
         * @param userSpecifiedLayers if non-zero, a user-specified value for the number of layers
         * @return Aztec symbol matrix with metadata
         */
        static encode(e, t, r) {
          let n = new Qr(e).encode(), i = V.truncDivision(n.getSize() * t, 100) + 11, s = n.getSize() + i, a, o, l, u, g;
          if (r !== Te.DEFAULT_AZTEC_LAYERS) {
            if (a = r < 0, o = Math.abs(r), o > (a ? Te.MAX_NB_BITS_COMPACT : Te.MAX_NB_BITS))
              throw new v($.format("Illegal value %s for layers", r));
            l = Te.totalBitsInLayer(o, a), u = Te.WORD_SIZE[o];
            let U = l - l % u;
            if (g = Te.stuffBits(n, u), g.getSize() + i > U)
              throw new v("Data to large for user specified layer");
            if (a && g.getSize() > u * 64)
              throw new v("Data to large for user specified layer");
          } else {
            u = 0, g = null;
            for (let U = 0; ; U++) {
              if (U > Te.MAX_NB_BITS)
                throw new v("Data too large for an Aztec code");
              if (a = U <= 3, o = a ? U + 1 : U, l = Te.totalBitsInLayer(o, a), s > l)
                continue;
              (g == null || u !== Te.WORD_SIZE[o]) && (u = Te.WORD_SIZE[o], g = Te.stuffBits(n, u));
              let pe = l - l % u;
              if (!(a && g.getSize() > u * 64) && g.getSize() + i <= pe)
                break;
            }
          }
          let x = Te.generateCheckWords(g, l, u), y = g.getSize() / u, I = Te.generateModeMessage(a, o, y), b = (a ? 11 : 14) + o * 4, T = new Int32Array(b), R;
          if (a) {
            R = b;
            for (let U = 0; U < T.length; U++)
              T[U] = U;
          } else {
            R = b + 1 + 2 * V.truncDivision(V.truncDivision(b, 2) - 1, 15);
            let U = V.truncDivision(b, 2), pe = V.truncDivision(R, 2);
            for (let de = 0; de < U; de++) {
              let vt = de + V.truncDivision(de, 15);
              T[U - de - 1] = pe - vt - 1, T[U + de] = pe + vt + 1;
            }
          }
          let H = new Oe(R);
          for (let U = 0, pe = 0; U < o; U++) {
            let de = (o - U) * 4 + (a ? 9 : 12);
            for (let vt = 0; vt < de; vt++) {
              let Xt = vt * 2;
              for (let Dt = 0; Dt < 2; Dt++)
                x.get(pe + Xt + Dt) && H.set(T[U * 2 + Dt], T[U * 2 + vt]), x.get(pe + de * 2 + Xt + Dt) && H.set(T[U * 2 + vt], T[b - 1 - U * 2 - Dt]), x.get(pe + de * 4 + Xt + Dt) && H.set(T[b - 1 - U * 2 - Dt], T[b - 1 - U * 2 - vt]), x.get(pe + de * 6 + Xt + Dt) && H.set(T[b - 1 - U * 2 - vt], T[U * 2 + Dt]);
            }
            pe += de * 8;
          }
          if (Te.drawModeMessage(H, a, R, I), a)
            Te.drawBullsEye(H, V.truncDivision(R, 2), 5);
          else {
            Te.drawBullsEye(H, V.truncDivision(R, 2), 7);
            for (let U = 0, pe = 0; U < V.truncDivision(b, 2) - 1; U += 15, pe += 16)
              for (let de = V.truncDivision(R, 2) & 1; de < R; de += 2)
                H.set(V.truncDivision(R, 2) - pe, de), H.set(V.truncDivision(R, 2) + pe, de), H.set(de, V.truncDivision(R, 2) - pe), H.set(de, V.truncDivision(R, 2) + pe);
          }
          let W = new ii();
          return W.setCompact(a), W.setSize(R), W.setLayers(o), W.setCodeWords(y), W.setMatrix(H), W;
        }
        static drawBullsEye(e, t, r) {
          for (let n = 0; n < r; n += 2)
            for (let i = t - n; i <= t + n; i++)
              e.set(i, t - n), e.set(i, t + n), e.set(t - n, i), e.set(t + n, i);
          e.set(t - r, t - r), e.set(t - r + 1, t - r), e.set(t - r, t - r + 1), e.set(t + r, t - r), e.set(t + r, t - r + 1), e.set(t + r, t + r - 1);
        }
        static generateModeMessage(e, t, r) {
          let n = new z();
          return e ? (n.appendBits(t - 1, 2), n.appendBits(r - 1, 6), n = Te.generateCheckWords(n, 28, 4)) : (n.appendBits(t - 1, 5), n.appendBits(r - 1, 11), n = Te.generateCheckWords(n, 40, 4)), n;
        }
        static drawModeMessage(e, t, r, n) {
          let i = V.truncDivision(r, 2);
          if (t)
            for (let s = 0; s < 7; s++) {
              let a = i - 3 + s;
              n.get(s) && e.set(a, i - 5), n.get(s + 7) && e.set(i + 5, a), n.get(20 - s) && e.set(a, i + 5), n.get(27 - s) && e.set(i - 5, a);
            }
          else
            for (let s = 0; s < 10; s++) {
              let a = i - 5 + s + V.truncDivision(s, 5);
              n.get(s) && e.set(a, i - 7), n.get(s + 10) && e.set(i + 7, a), n.get(29 - s) && e.set(a, i + 7), n.get(39 - s) && e.set(i - 7, a);
            }
        }
        static generateCheckWords(e, t, r) {
          let n = e.getSize() / r, i = new Pn(Te.getGF(r)), s = V.truncDivision(t, r), a = Te.bitsToWords(e, r, s);
          i.encode(a, s - n);
          let o = t % r, l = new z();
          l.appendBits(0, o);
          for (const u of Array.from(a))
            l.appendBits(u, r);
          return l;
        }
        static bitsToWords(e, t, r) {
          let n = new Int32Array(r), i, s;
          for (i = 0, s = e.getSize() / t; i < s; i++) {
            let a = 0;
            for (let o = 0; o < t; o++)
              a |= e.get(i * t + o) ? 1 << t - o - 1 : 0;
            n[i] = a;
          }
          return n;
        }
        static getGF(e) {
          switch (e) {
            case 4:
              return _e.AZTEC_PARAM;
            case 6:
              return _e.AZTEC_DATA_6;
            case 8:
              return _e.AZTEC_DATA_8;
            case 10:
              return _e.AZTEC_DATA_10;
            case 12:
              return _e.AZTEC_DATA_12;
            default:
              throw new v("Unsupported word size " + e);
          }
        }
        static stuffBits(e, t) {
          let r = new z(), n = e.getSize(), i = (1 << t) - 2;
          for (let s = 0; s < n; s += t) {
            let a = 0;
            for (let o = 0; o < t; o++)
              (s + o >= n || e.get(s + o)) && (a |= 1 << t - 1 - o);
            (a & i) === i ? (r.appendBits(a & i, t), s--) : (a & i) === 0 ? (r.appendBits(a | 1, t), s--) : r.appendBits(a, t);
          }
          return r;
        }
        static totalBitsInLayer(e, t) {
          return ((t ? 88 : 112) + 16 * e) * e;
        }
      }
      Te.DEFAULT_EC_PERCENT = 33, Te.DEFAULT_AZTEC_LAYERS = 0, Te.MAX_NB_BITS = 32, Te.MAX_NB_BITS_COMPACT = 4, Te.WORD_SIZE = Int32Array.from([
        4,
        6,
        6,
        8,
        8,
        8,
        8,
        8,
        8,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        12,
        12,
        12,
        12,
        12,
        12,
        12,
        12,
        12,
        12
      ]);
      class gn {
        // @Override
        encode(e, t, r, n) {
          return this.encodeWithHints(e, t, r, n, null);
        }
        // @Override
        encodeWithHints(e, t, r, n, i) {
          let s = kn.ISO_8859_1, a = Te.DEFAULT_EC_PERCENT, o = Te.DEFAULT_AZTEC_LAYERS;
          return i != null && (i.has(ht.CHARACTER_SET) && (s = ni.forName(i.get(ht.CHARACTER_SET).toString())), i.has(ht.ERROR_CORRECTION) && (a = V.parseInt(i.get(ht.ERROR_CORRECTION).toString())), i.has(ht.AZTEC_LAYERS) && (o = V.parseInt(i.get(ht.AZTEC_LAYERS).toString()))), gn.encodeLayers(e, t, r, n, s, a, o);
        }
        static encodeLayers(e, t, r, n, i, s, a) {
          if (t !== re.AZTEC)
            throw new v("Can only encode AZTEC, but got " + t);
          let o = Te.encode($.getBytes(e, i), s, a);
          return gn.renderResult(o, r, n);
        }
        static renderResult(e, t, r) {
          let n = e.getMatrix();
          if (n == null)
            throw new bt();
          let i = n.getWidth(), s = n.getHeight(), a = Math.max(t, i), o = Math.max(r, s), l = Math.min(a / i, o / s), u = (a - i * l) / 2, g = (o - s * l) / 2, x = new Oe(a, o);
          for (let y = 0, I = g; y < s; y++, I += l)
            for (let b = 0, T = u; b < i; b++, T += l)
              n.get(b, y) && x.setRegion(T, I, l, l);
          return x;
        }
      }
      f.AbstractExpandedDecoder = Y, f.ArgumentException = M, f.ArithmeticException = xr, f.AztecCode = ii, f.AztecCodeReader = _r, f.AztecCodeWriter = gn, f.AztecDecoder = Be, f.AztecDetector = Vr, f.AztecDetectorResult = an, f.AztecEncoder = Te, f.AztecHighLevelEncoder = Qr, f.AztecPoint = dt, f.BarcodeFormat = re, f.Binarizer = me, f.BinaryBitmap = ee, f.BitArray = z, f.BitMatrix = Oe, f.BitSource = Rn, f.BrowserAztecCodeReader = Tn, f.BrowserBarcodeReader = Bi, f.BrowserCodeReader = ot, f.BrowserDatamatrixCodeReader = Pi, f.BrowserMultiFormatReader = Zi, f.BrowserPDF417Reader = ji, f.BrowserQRCodeReader = Ki, f.BrowserQRCodeSvgWriter = mr, f.CharacterSetECI = F, f.ChecksumException = q, f.Code128Reader = X, f.Code39Reader = st, f.DataMatrixDecodedBitStreamParser = lr, f.DataMatrixReader = cr, f.DecodeHintType = ce, f.DecoderResult = $t, f.DefaultGridSampler = Ur, f.DetectorResult = or, f.EAN13Reader = Wt, f.EncodeHintType = ht, f.Exception = p, f.FormatException = L, f.GenericGF = _e, f.GenericGFPoly = Ct, f.GlobalHistogramBinarizer = Ve, f.GridSampler = br, f.GridSamplerInstance = Yt, f.HTMLCanvasElementLuminanceSource = Bt, f.HybridBinarizer = se, f.ITFReader = Le, f.IllegalArgumentException = v, f.IllegalStateException = bt, f.InvertedLuminanceSource = Mt, f.LuminanceSource = It, f.MathUtils = Ee, f.MultiFormatOneDReader = Nr, f.MultiFormatReader = ri, f.MultiFormatWriter = Qi, f.NotFoundException = D, f.OneDReader = et, f.PDF417DecodedBitStreamParser = O, f.PDF417DecoderErrorCorrection = qn, f.PDF417Reader = At, f.PDF417ResultMetadata = Jn, f.PerspectiveTransform = St, f.PlanarYUVLuminanceSource = Kt, f.QRCodeByteMatrix = hn, f.QRCodeDataMask = kt, f.QRCodeDecodedBitStreamParser = $e, f.QRCodeDecoderErrorCorrectionLevel = Xe, f.QRCodeDecoderFormatInformation = yt, f.QRCodeEncoder = ze, f.QRCodeEncoderQRCode = Ar, f.QRCodeMaskUtil = rt, f.QRCodeMatrixUtil = ie, f.QRCodeMode = ne, f.QRCodeReader = fr, f.QRCodeVersion = te, f.QRCodeWriter = Rr, f.RGBLuminanceSource = Fn, f.RSS14Reader = tt, f.RSSExpandedReader = P, f.ReaderException = un, f.ReedSolomonDecoder = Gt, f.ReedSolomonEncoder = Pn, f.ReedSolomonException = ar, f.Result = Ke, f.ResultMetadataType = qe, f.ResultPoint = Q, f.StringUtils = $, f.UnsupportedOperationException = it, f.VideoInputDevice = dr, f.WhiteRectangleDetector = Ht, f.WriterException = Ge, f.ZXingArrays = G, f.ZXingCharset = ni, f.ZXingInteger = V, f.ZXingStandardCharsets = kn, f.ZXingStringBuilder = he, f.ZXingStringEncoding = Ce, f.ZXingSystem = j, f.createAbstractExpandedDecoder = jt, Object.defineProperty(f, "__esModule", { value: !0 });
    });
  }(en, en.exports)), en.exports;
}
var Ye = As();
const ms = /* @__PURE__ */ ls(Ye), Cs = /* @__PURE__ */ os({
  __proto__: null,
  default: ms
}, [Ye]);
var xi = function() {
  function c(h, f, E) {
    if (this.formatMap = /* @__PURE__ */ new Map([
      [Z.QR_CODE, Ye.BarcodeFormat.QR_CODE],
      [Z.AZTEC, Ye.BarcodeFormat.AZTEC],
      [Z.CODABAR, Ye.BarcodeFormat.CODABAR],
      [Z.CODE_39, Ye.BarcodeFormat.CODE_39],
      [Z.CODE_93, Ye.BarcodeFormat.CODE_93],
      [
        Z.CODE_128,
        Ye.BarcodeFormat.CODE_128
      ],
      [
        Z.DATA_MATRIX,
        Ye.BarcodeFormat.DATA_MATRIX
      ],
      [
        Z.MAXICODE,
        Ye.BarcodeFormat.MAXICODE
      ],
      [Z.ITF, Ye.BarcodeFormat.ITF],
      [Z.EAN_13, Ye.BarcodeFormat.EAN_13],
      [Z.EAN_8, Ye.BarcodeFormat.EAN_8],
      [Z.PDF_417, Ye.BarcodeFormat.PDF_417],
      [Z.RSS_14, Ye.BarcodeFormat.RSS_14],
      [
        Z.RSS_EXPANDED,
        Ye.BarcodeFormat.RSS_EXPANDED
      ],
      [Z.UPC_A, Ye.BarcodeFormat.UPC_A],
      [Z.UPC_E, Ye.BarcodeFormat.UPC_E],
      [
        Z.UPC_EAN_EXTENSION,
        Ye.BarcodeFormat.UPC_EAN_EXTENSION
      ]
    ]), this.reverseFormatMap = this.createReverseFormatMap(), !Cs)
      throw "Use html5qrcode.min.js without edit, ZXing not found.";
    this.verbose = f, this.logger = E;
    var C = this.createZXingFormats(h), w = /* @__PURE__ */ new Map();
    w.set(Ye.DecodeHintType.POSSIBLE_FORMATS, C), w.set(Ye.DecodeHintType.TRY_HARDER, !1), this.hints = w;
  }
  return c.prototype.decodeAsync = function(h) {
    var f = this;
    return new Promise(function(E, C) {
      try {
        E(f.decode(h));
      } catch (w) {
        C(w);
      }
    });
  }, c.prototype.decode = function(h) {
    var f = new Ye.MultiFormatReader(this.verbose, this.hints), E = new Ye.HTMLCanvasElementLuminanceSource(h), C = new Ye.BinaryBitmap(new Ye.HybridBinarizer(E)), w = f.decode(C);
    return {
      text: w.text,
      format: bi.create(this.toHtml5QrcodeSupportedFormats(w.format)),
      debugData: this.createDebugData()
    };
  }, c.prototype.createReverseFormatMap = function() {
    var h = /* @__PURE__ */ new Map();
    return this.formatMap.forEach(function(f, E, C) {
      h.set(f, E);
    }), h;
  }, c.prototype.toHtml5QrcodeSupportedFormats = function(h) {
    if (!this.reverseFormatMap.has(h))
      throw "reverseFormatMap doesn't have ".concat(h);
    return this.reverseFormatMap.get(h);
  }, c.prototype.createZXingFormats = function(h) {
    for (var f = [], E = 0, C = h; E < C.length; E++) {
      var w = C[E];
      this.formatMap.has(w) ? f.push(this.formatMap.get(w)) : this.logger.logError("".concat(w, " is not supported by") + "ZXingHtml5QrcodeShim");
    }
    return f;
  }, c.prototype.createDebugData = function() {
    return { decoderName: "zxing-js" };
  }, c;
}(), ps = function(c, h, f, E) {
  function C(w) {
    return w instanceof f ? w : new f(function(_) {
      _(w);
    });
  }
  return new (f || (f = Promise))(function(w, _) {
    function B(M) {
      try {
        p(E.next(M));
      } catch (v) {
        _(v);
      }
    }
    function N(M) {
      try {
        p(E.throw(M));
      } catch (v) {
        _(v);
      }
    }
    function p(M) {
      M.done ? w(M.value) : C(M.value).then(B, N);
    }
    p((E = E.apply(c, h || [])).next());
  });
}, ys = function(c, h) {
  var f = { label: 0, sent: function() {
    if (w[0] & 1) throw w[1];
    return w[1];
  }, trys: [], ops: [] }, E, C, w, _;
  return _ = { next: B(0), throw: B(1), return: B(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
    return this;
  }), _;
  function B(p) {
    return function(M) {
      return N([p, M]);
    };
  }
  function N(p) {
    if (E) throw new TypeError("Generator is already executing.");
    for (; _ && (_ = 0, p[0] && (f = 0)), f; ) try {
      if (E = 1, C && (w = p[0] & 2 ? C.return : p[0] ? C.throw || ((w = C.return) && w.call(C), 0) : C.next) && !(w = w.call(C, p[1])).done) return w;
      switch (C = 0, w && (p = [p[0] & 2, w.value]), p[0]) {
        case 0:
        case 1:
          w = p;
          break;
        case 4:
          return f.label++, { value: p[1], done: !1 };
        case 5:
          f.label++, C = p[1], p = [0];
          continue;
        case 7:
          p = f.ops.pop(), f.trys.pop();
          continue;
        default:
          if (w = f.trys, !(w = w.length > 0 && w[w.length - 1]) && (p[0] === 6 || p[0] === 2)) {
            f = 0;
            continue;
          }
          if (p[0] === 3 && (!w || p[1] > w[0] && p[1] < w[3])) {
            f.label = p[1];
            break;
          }
          if (p[0] === 6 && f.label < w[1]) {
            f.label = w[1], w = p;
            break;
          }
          if (w && f.label < w[2]) {
            f.label = w[2], f.ops.push(p);
            break;
          }
          w[2] && f.ops.pop(), f.trys.pop();
          continue;
      }
      p = h.call(c, f);
    } catch (M) {
      p = [6, M], C = 0;
    } finally {
      E = w = 0;
    }
    if (p[0] & 5) throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}, wi = function() {
  function c(h, f, E) {
    if (this.formatMap = /* @__PURE__ */ new Map([
      [Z.QR_CODE, "qr_code"],
      [Z.AZTEC, "aztec"],
      [Z.CODABAR, "codabar"],
      [Z.CODE_39, "code_39"],
      [Z.CODE_93, "code_93"],
      [Z.CODE_128, "code_128"],
      [Z.DATA_MATRIX, "data_matrix"],
      [Z.ITF, "itf"],
      [Z.EAN_13, "ean_13"],
      [Z.EAN_8, "ean_8"],
      [Z.PDF_417, "pdf417"],
      [Z.UPC_A, "upc_a"],
      [Z.UPC_E, "upc_e"]
    ]), this.reverseFormatMap = this.createReverseFormatMap(), !c.isSupported())
      throw "Use html5qrcode.min.js without edit, Use BarcodeDetectorDelegate only if it isSupported();";
    this.verbose = f, this.logger = E;
    var C = this.createBarcodeDetectorFormats(h);
    if (this.detector = new BarcodeDetector(C), !this.detector)
      throw "BarcodeDetector detector not supported";
  }
  return c.isSupported = function() {
    if (!("BarcodeDetector" in window))
      return !1;
    var h = new BarcodeDetector({ formats: ["qr_code"] });
    return typeof h < "u";
  }, c.prototype.decodeAsync = function(h) {
    return ps(this, void 0, void 0, function() {
      var f, E;
      return ys(this, function(C) {
        switch (C.label) {
          case 0:
            return [4, this.detector.detect(h)];
          case 1:
            if (f = C.sent(), !f || f.length === 0)
              throw "No barcode or QR code detected.";
            return E = this.selectLargestBarcode(f), [2, {
              text: E.rawValue,
              format: bi.create(this.toHtml5QrcodeSupportedFormats(E.format)),
              debugData: this.createDebugData()
            }];
        }
      });
    });
  }, c.prototype.selectLargestBarcode = function(h) {
    for (var f = null, E = 0, C = 0, w = h; C < w.length; C++) {
      var _ = w[C], B = _.boundingBox.width * _.boundingBox.height;
      B > E && (E = B, f = _);
    }
    if (!f)
      throw "No largest barcode found";
    return f;
  }, c.prototype.createBarcodeDetectorFormats = function(h) {
    for (var f = [], E = 0, C = h; E < C.length; E++) {
      var w = C[E];
      this.formatMap.has(w) ? f.push(this.formatMap.get(w)) : this.logger.warn("".concat(w, " is not supported by") + "BarcodeDetectorDelegate");
    }
    return { formats: f };
  }, c.prototype.toHtml5QrcodeSupportedFormats = function(h) {
    if (!this.reverseFormatMap.has(h))
      throw "reverseFormatMap doesn't have ".concat(h);
    return this.reverseFormatMap.get(h);
  }, c.prototype.createReverseFormatMap = function() {
    var h = /* @__PURE__ */ new Map();
    return this.formatMap.forEach(function(f, E, C) {
      h.set(f, E);
    }), h;
  }, c.prototype.createDebugData = function() {
    return { decoderName: "BarcodeDetector" };
  }, c;
}(), Ei = function(c, h, f, E) {
  function C(w) {
    return w instanceof f ? w : new f(function(_) {
      _(w);
    });
  }
  return new (f || (f = Promise))(function(w, _) {
    function B(M) {
      try {
        p(E.next(M));
      } catch (v) {
        _(v);
      }
    }
    function N(M) {
      try {
        p(E.throw(M));
      } catch (v) {
        _(v);
      }
    }
    function p(M) {
      M.done ? w(M.value) : C(M.value).then(B, N);
    }
    p((E = E.apply(c, h || [])).next());
  });
}, Ai = function(c, h) {
  var f = { label: 0, sent: function() {
    if (w[0] & 1) throw w[1];
    return w[1];
  }, trys: [], ops: [] }, E, C, w, _;
  return _ = { next: B(0), throw: B(1), return: B(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
    return this;
  }), _;
  function B(p) {
    return function(M) {
      return N([p, M]);
    };
  }
  function N(p) {
    if (E) throw new TypeError("Generator is already executing.");
    for (; _ && (_ = 0, p[0] && (f = 0)), f; ) try {
      if (E = 1, C && (w = p[0] & 2 ? C.return : p[0] ? C.throw || ((w = C.return) && w.call(C), 0) : C.next) && !(w = w.call(C, p[1])).done) return w;
      switch (C = 0, w && (p = [p[0] & 2, w.value]), p[0]) {
        case 0:
        case 1:
          w = p;
          break;
        case 4:
          return f.label++, { value: p[1], done: !1 };
        case 5:
          f.label++, C = p[1], p = [0];
          continue;
        case 7:
          p = f.ops.pop(), f.trys.pop();
          continue;
        default:
          if (w = f.trys, !(w = w.length > 0 && w[w.length - 1]) && (p[0] === 6 || p[0] === 2)) {
            f = 0;
            continue;
          }
          if (p[0] === 3 && (!w || p[1] > w[0] && p[1] < w[3])) {
            f.label = p[1];
            break;
          }
          if (p[0] === 6 && f.label < w[1]) {
            f.label = w[1], w = p;
            break;
          }
          if (w && f.label < w[2]) {
            f.label = w[2], f.ops.push(p);
            break;
          }
          w[2] && f.ops.pop(), f.trys.pop();
          continue;
      }
      p = h.call(c, f);
    } catch (M) {
      p = [6, M], C = 0;
    } finally {
      E = w = 0;
    }
    if (p[0] & 5) throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}, Is = function() {
  function c(h, f, E, C) {
    this.EXECUTIONS_TO_REPORT_PERFORMANCE = 100, this.executions = 0, this.executionResults = [], this.wasPrimaryDecoderUsedInLastDecode = !1, this.verbose = E, f && wi.isSupported() ? (this.primaryDecoder = new wi(h, E, C), this.secondaryDecoder = new xi(h, E, C)) : this.primaryDecoder = new xi(h, E, C);
  }
  return c.prototype.decodeAsync = function(h) {
    return Ei(this, void 0, void 0, function() {
      var f;
      return Ai(this, function(E) {
        switch (E.label) {
          case 0:
            f = performance.now(), E.label = 1;
          case 1:
            return E.trys.push([1, , 3, 4]), [4, this.getDecoder().decodeAsync(h)];
          case 2:
            return [2, E.sent()];
          case 3:
            return this.possiblyLogPerformance(f), [7];
          case 4:
            return [2];
        }
      });
    });
  }, c.prototype.decodeRobustlyAsync = function(h) {
    return Ei(this, void 0, void 0, function() {
      var f, E;
      return Ai(this, function(C) {
        switch (C.label) {
          case 0:
            f = performance.now(), C.label = 1;
          case 1:
            return C.trys.push([1, 3, 4, 5]), [4, this.primaryDecoder.decodeAsync(h)];
          case 2:
            return [2, C.sent()];
          case 3:
            if (E = C.sent(), this.secondaryDecoder)
              return [2, this.secondaryDecoder.decodeAsync(h)];
            throw E;
          case 4:
            return this.possiblyLogPerformance(f), [7];
          case 5:
            return [2];
        }
      });
    });
  }, c.prototype.getDecoder = function() {
    return this.secondaryDecoder ? this.wasPrimaryDecoderUsedInLastDecode === !1 ? (this.wasPrimaryDecoderUsedInLastDecode = !0, this.primaryDecoder) : (this.wasPrimaryDecoderUsedInLastDecode = !1, this.secondaryDecoder) : this.primaryDecoder;
  }, c.prototype.possiblyLogPerformance = function(h) {
    if (this.verbose) {
      var f = performance.now() - h;
      this.executionResults.push(f), this.executions++, this.possiblyFlushPerformanceReport();
    }
  }, c.prototype.possiblyFlushPerformanceReport = function() {
    if (!(this.executions < this.EXECUTIONS_TO_REPORT_PERFORMANCE)) {
      for (var h = 0, f = 0, E = this.executionResults; f < E.length; f++) {
        var C = E[f];
        h += C;
      }
      var w = h / this.executionResults.length;
      console.log("".concat(w, " ms for ").concat(this.executionResults.length, " last runs.")), this.executions = 0, this.executionResults = [];
    }
  }, c;
}(), jn = /* @__PURE__ */ function() {
  var c = function(h, f) {
    return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(E, C) {
      E.__proto__ = C;
    } || function(E, C) {
      for (var w in C) Object.prototype.hasOwnProperty.call(C, w) && (E[w] = C[w]);
    }, c(h, f);
  };
  return function(h, f) {
    if (typeof f != "function" && f !== null)
      throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
    c(h, f);
    function E() {
      this.constructor = h;
    }
    h.prototype = f === null ? Object.create(f) : (E.prototype = f.prototype, new E());
  };
}(), Cn = function(c, h, f, E) {
  function C(w) {
    return w instanceof f ? w : new f(function(_) {
      _(w);
    });
  }
  return new (f || (f = Promise))(function(w, _) {
    function B(M) {
      try {
        p(E.next(M));
      } catch (v) {
        _(v);
      }
    }
    function N(M) {
      try {
        p(E.throw(M));
      } catch (v) {
        _(v);
      }
    }
    function p(M) {
      M.done ? w(M.value) : C(M.value).then(B, N);
    }
    p((E = E.apply(c, h || [])).next());
  });
}, pn = function(c, h) {
  var f = { label: 0, sent: function() {
    if (w[0] & 1) throw w[1];
    return w[1];
  }, trys: [], ops: [] }, E, C, w, _;
  return _ = { next: B(0), throw: B(1), return: B(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
    return this;
  }), _;
  function B(p) {
    return function(M) {
      return N([p, M]);
    };
  }
  function N(p) {
    if (E) throw new TypeError("Generator is already executing.");
    for (; _ && (_ = 0, p[0] && (f = 0)), f; ) try {
      if (E = 1, C && (w = p[0] & 2 ? C.return : p[0] ? C.throw || ((w = C.return) && w.call(C), 0) : C.next) && !(w = w.call(C, p[1])).done) return w;
      switch (C = 0, w && (p = [p[0] & 2, w.value]), p[0]) {
        case 0:
        case 1:
          w = p;
          break;
        case 4:
          return f.label++, { value: p[1], done: !1 };
        case 5:
          f.label++, C = p[1], p = [0];
          continue;
        case 7:
          p = f.ops.pop(), f.trys.pop();
          continue;
        default:
          if (w = f.trys, !(w = w.length > 0 && w[w.length - 1]) && (p[0] === 6 || p[0] === 2)) {
            f = 0;
            continue;
          }
          if (p[0] === 3 && (!w || p[1] > w[0] && p[1] < w[3])) {
            f.label = p[1];
            break;
          }
          if (p[0] === 6 && f.label < w[1]) {
            f.label = w[1], w = p;
            break;
          }
          if (w && f.label < w[2]) {
            f.label = w[2], f.ops.push(p);
            break;
          }
          w[2] && f.ops.pop(), f.trys.pop();
          continue;
      }
      p = h.call(c, f);
    } catch (M) {
      p = [6, M], C = 0;
    } finally {
      E = w = 0;
    }
    if (p[0] & 5) throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}, Ti = function() {
  function c(h, f) {
    this.name = h, this.track = f;
  }
  return c.prototype.isSupported = function() {
    return this.track.getCapabilities ? this.name in this.track.getCapabilities() : !1;
  }, c.prototype.apply = function(h) {
    var f = {};
    f[this.name] = h;
    var E = { advanced: [f] };
    return this.track.applyConstraints(E);
  }, c.prototype.value = function() {
    var h = this.track.getSettings();
    if (this.name in h) {
      var f = h[this.name];
      return f;
    }
    return null;
  }, c;
}(), bs = function(c) {
  jn(h, c);
  function h(f, E) {
    return c.call(this, f, E) || this;
  }
  return h.prototype.min = function() {
    return this.getCapabilities().min;
  }, h.prototype.max = function() {
    return this.getCapabilities().max;
  }, h.prototype.step = function() {
    return this.getCapabilities().step;
  }, h.prototype.apply = function(f) {
    var E = {};
    E[this.name] = f;
    var C = { advanced: [E] };
    return this.track.applyConstraints(C);
  }, h.prototype.getCapabilities = function() {
    this.failIfNotSupported();
    var f = this.track.getCapabilities(), E = f[this.name];
    return {
      min: E.min,
      max: E.max,
      step: E.step
    };
  }, h.prototype.failIfNotSupported = function() {
    if (!this.isSupported())
      throw new Error("".concat(this.name, " capability not supported"));
  }, h;
}(Ti), _s = function(c) {
  jn(h, c);
  function h(f) {
    return c.call(this, "zoom", f) || this;
  }
  return h;
}(bs), Ts = function(c) {
  jn(h, c);
  function h(f) {
    return c.call(this, "torch", f) || this;
  }
  return h;
}(Ti), Ss = function() {
  function c(h) {
    this.track = h;
  }
  return c.prototype.zoomFeature = function() {
    return new _s(this.track);
  }, c.prototype.torchFeature = function() {
    return new Ts(this.track);
  }, c;
}(), Ns = function() {
  function c(h, f, E) {
    this.isClosed = !1, this.parentElement = h, this.mediaStream = f, this.callbacks = E, this.surface = this.createVideoElement(this.parentElement.clientWidth), h.append(this.surface);
  }
  return c.prototype.createVideoElement = function(h) {
    var f = document.createElement("video");
    return f.style.width = "".concat(h, "px"), f.style.display = "block", f.muted = !0, f.setAttribute("muted", "true"), f.playsInline = !0, f;
  }, c.prototype.setupSurface = function() {
    var h = this;
    this.surface.onabort = function() {
      throw "RenderedCameraImpl video surface onabort() called";
    }, this.surface.onerror = function() {
      throw "RenderedCameraImpl video surface onerror() called";
    };
    var f = function() {
      var E = h.surface.clientWidth, C = h.surface.clientHeight;
      h.callbacks.onRenderSurfaceReady(E, C), h.surface.removeEventListener("playing", f);
    };
    this.surface.addEventListener("playing", f), this.surface.srcObject = this.mediaStream, this.surface.play();
  }, c.create = function(h, f, E, C) {
    return Cn(this, void 0, void 0, function() {
      var w, _;
      return pn(this, function(B) {
        switch (B.label) {
          case 0:
            return w = new c(h, f, C), E.aspectRatio ? (_ = {
              aspectRatio: E.aspectRatio
            }, [4, w.getFirstTrackOrFail().applyConstraints(_)]) : [3, 2];
          case 1:
            B.sent(), B.label = 2;
          case 2:
            return w.setupSurface(), [2, w];
        }
      });
    });
  }, c.prototype.failIfClosed = function() {
    if (this.isClosed)
      throw "The RenderedCamera has already been closed.";
  }, c.prototype.getFirstTrackOrFail = function() {
    if (this.failIfClosed(), this.mediaStream.getVideoTracks().length === 0)
      throw "No video tracks found";
    return this.mediaStream.getVideoTracks()[0];
  }, c.prototype.pause = function() {
    this.failIfClosed(), this.surface.pause();
  }, c.prototype.resume = function(h) {
    this.failIfClosed();
    var f = this, E = function() {
      setTimeout(h, 200), f.surface.removeEventListener("playing", E);
    };
    this.surface.addEventListener("playing", E), this.surface.play();
  }, c.prototype.isPaused = function() {
    return this.failIfClosed(), this.surface.paused;
  }, c.prototype.getSurface = function() {
    return this.failIfClosed(), this.surface;
  }, c.prototype.getRunningTrackCapabilities = function() {
    return this.getFirstTrackOrFail().getCapabilities();
  }, c.prototype.getRunningTrackSettings = function() {
    return this.getFirstTrackOrFail().getSettings();
  }, c.prototype.applyVideoConstraints = function(h) {
    return Cn(this, void 0, void 0, function() {
      return pn(this, function(f) {
        if ("aspectRatio" in h)
          throw "Changing 'aspectRatio' in run-time is not yet supported.";
        return [2, this.getFirstTrackOrFail().applyConstraints(h)];
      });
    });
  }, c.prototype.close = function() {
    if (this.isClosed)
      return Promise.resolve();
    var h = this;
    return new Promise(function(f, E) {
      var C = h.mediaStream.getVideoTracks(), w = C.length, _ = 0;
      h.mediaStream.getVideoTracks().forEach(function(B) {
        h.mediaStream.removeTrack(B), B.stop(), ++_, _ >= w && (h.isClosed = !0, h.parentElement.removeChild(h.surface), f());
      });
    });
  }, c.prototype.getCapabilities = function() {
    return new Ss(this.getFirstTrackOrFail());
  }, c;
}(), Os = function() {
  function c(h) {
    this.mediaStream = h;
  }
  return c.prototype.render = function(h, f, E) {
    return Cn(this, void 0, void 0, function() {
      return pn(this, function(C) {
        return [2, Ns.create(h, this.mediaStream, f, E)];
      });
    });
  }, c.create = function(h) {
    return Cn(this, void 0, void 0, function() {
      var f, E;
      return pn(this, function(C) {
        switch (C.label) {
          case 0:
            if (!navigator.mediaDevices)
              throw "navigator.mediaDevices not supported";
            return f = {
              audio: !1,
              video: h
            }, [4, navigator.mediaDevices.getUserMedia(f)];
          case 1:
            return E = C.sent(), [2, new c(E)];
        }
      });
    });
  }, c;
}(), mi = function(c, h, f, E) {
  function C(w) {
    return w instanceof f ? w : new f(function(_) {
      _(w);
    });
  }
  return new (f || (f = Promise))(function(w, _) {
    function B(M) {
      try {
        p(E.next(M));
      } catch (v) {
        _(v);
      }
    }
    function N(M) {
      try {
        p(E.throw(M));
      } catch (v) {
        _(v);
      }
    }
    function p(M) {
      M.done ? w(M.value) : C(M.value).then(B, N);
    }
    p((E = E.apply(c, h || [])).next());
  });
}, Ci = function(c, h) {
  var f = { label: 0, sent: function() {
    if (w[0] & 1) throw w[1];
    return w[1];
  }, trys: [], ops: [] }, E, C, w, _;
  return _ = { next: B(0), throw: B(1), return: B(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
    return this;
  }), _;
  function B(p) {
    return function(M) {
      return N([p, M]);
    };
  }
  function N(p) {
    if (E) throw new TypeError("Generator is already executing.");
    for (; _ && (_ = 0, p[0] && (f = 0)), f; ) try {
      if (E = 1, C && (w = p[0] & 2 ? C.return : p[0] ? C.throw || ((w = C.return) && w.call(C), 0) : C.next) && !(w = w.call(C, p[1])).done) return w;
      switch (C = 0, w && (p = [p[0] & 2, w.value]), p[0]) {
        case 0:
        case 1:
          w = p;
          break;
        case 4:
          return f.label++, { value: p[1], done: !1 };
        case 5:
          f.label++, C = p[1], p = [0];
          continue;
        case 7:
          p = f.ops.pop(), f.trys.pop();
          continue;
        default:
          if (w = f.trys, !(w = w.length > 0 && w[w.length - 1]) && (p[0] === 6 || p[0] === 2)) {
            f = 0;
            continue;
          }
          if (p[0] === 3 && (!w || p[1] > w[0] && p[1] < w[3])) {
            f.label = p[1];
            break;
          }
          if (p[0] === 6 && f.label < w[1]) {
            f.label = w[1], w = p;
            break;
          }
          if (w && f.label < w[2]) {
            f.label = w[2], f.ops.push(p);
            break;
          }
          w[2] && f.ops.pop(), f.trys.pop();
          continue;
      }
      p = h.call(c, f);
    } catch (M) {
      p = [6, M], C = 0;
    } finally {
      E = w = 0;
    }
    if (p[0] & 5) throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}, Rs = function() {
  function c() {
  }
  return c.failIfNotSupported = function() {
    return mi(this, void 0, void 0, function() {
      return Ci(this, function(h) {
        if (!navigator.mediaDevices)
          throw "navigator.mediaDevices not supported";
        return [2, new c()];
      });
    });
  }, c.prototype.create = function(h) {
    return mi(this, void 0, void 0, function() {
      return Ci(this, function(f) {
        return [2, Os.create(h)];
      });
    });
  }, c;
}(), vs = function(c, h, f, E) {
  function C(w) {
    return w instanceof f ? w : new f(function(_) {
      _(w);
    });
  }
  return new (f || (f = Promise))(function(w, _) {
    function B(M) {
      try {
        p(E.next(M));
      } catch (v) {
        _(v);
      }
    }
    function N(M) {
      try {
        p(E.throw(M));
      } catch (v) {
        _(v);
      }
    }
    function p(M) {
      M.done ? w(M.value) : C(M.value).then(B, N);
    }
    p((E = E.apply(c, h || [])).next());
  });
}, Ds = function(c, h) {
  var f = { label: 0, sent: function() {
    if (w[0] & 1) throw w[1];
    return w[1];
  }, trys: [], ops: [] }, E, C, w, _;
  return _ = { next: B(0), throw: B(1), return: B(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
    return this;
  }), _;
  function B(p) {
    return function(M) {
      return N([p, M]);
    };
  }
  function N(p) {
    if (E) throw new TypeError("Generator is already executing.");
    for (; _ && (_ = 0, p[0] && (f = 0)), f; ) try {
      if (E = 1, C && (w = p[0] & 2 ? C.return : p[0] ? C.throw || ((w = C.return) && w.call(C), 0) : C.next) && !(w = w.call(C, p[1])).done) return w;
      switch (C = 0, w && (p = [p[0] & 2, w.value]), p[0]) {
        case 0:
        case 1:
          w = p;
          break;
        case 4:
          return f.label++, { value: p[1], done: !1 };
        case 5:
          f.label++, C = p[1], p = [0];
          continue;
        case 7:
          p = f.ops.pop(), f.trys.pop();
          continue;
        default:
          if (w = f.trys, !(w = w.length > 0 && w[w.length - 1]) && (p[0] === 6 || p[0] === 2)) {
            f = 0;
            continue;
          }
          if (p[0] === 3 && (!w || p[1] > w[0] && p[1] < w[3])) {
            f.label = p[1];
            break;
          }
          if (p[0] === 6 && f.label < w[1]) {
            f.label = w[1], w = p;
            break;
          }
          if (w && f.label < w[2]) {
            f.label = w[2], f.ops.push(p);
            break;
          }
          w[2] && f.ops.pop(), f.trys.pop();
          continue;
      }
      p = h.call(c, f);
    } catch (M) {
      p = [6, M], C = 0;
    } finally {
      E = w = 0;
    }
    if (p[0] & 5) throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}, Ms = function() {
  function c() {
  }
  return c.retrieve = function() {
    if (navigator.mediaDevices)
      return c.getCamerasFromMediaDevices();
    var h = MediaStreamTrack;
    return MediaStreamTrack && h.getSources ? c.getCamerasFromMediaStreamTrack() : c.rejectWithError();
  }, c.rejectWithError = function() {
    var h = Fr.unableToQuerySupportedDevices();
    return c.isHttpsOrLocalhost() || (h = Fr.insecureContextCameraQueryError()), Promise.reject(h);
  }, c.isHttpsOrLocalhost = function() {
    if (location.protocol === "https:")
      return !0;
    var h = location.host.split(":")[0];
    return h === "127.0.0.1" || h === "localhost";
  }, c.getCamerasFromMediaDevices = function() {
    return vs(this, void 0, void 0, function() {
      var h, f, E, C, w, _, B;
      return Ds(this, function(N) {
        switch (N.label) {
          case 0:
            return h = function(p) {
              for (var M = p.getVideoTracks(), v = 0, ee = M; v < ee.length; v++) {
                var q = ee[v];
                q.enabled = !1, q.stop(), p.removeTrack(q);
              }
            }, [4, navigator.mediaDevices.getUserMedia({ audio: !1, video: !0 })];
          case 1:
            return f = N.sent(), [4, navigator.mediaDevices.enumerateDevices()];
          case 2:
            for (E = N.sent(), C = [], w = 0, _ = E; w < _.length; w++)
              B = _[w], B.kind === "videoinput" && C.push({
                id: B.deviceId,
                label: B.label
              });
            return h(f), [2, C];
        }
      });
    });
  }, c.getCamerasFromMediaStreamTrack = function() {
    return new Promise(function(h, f) {
      var E = function(w) {
        for (var _ = [], B = 0, N = w; B < N.length; B++) {
          var p = N[B];
          p.kind === "video" && _.push({
            id: p.id,
            label: p.label
          });
        }
        h(_);
      }, C = MediaStreamTrack;
      C.getSources(E);
    });
  }, c;
}(), We;
(function(c) {
  c[c.UNKNOWN = 0] = "UNKNOWN", c[c.NOT_STARTED = 1] = "NOT_STARTED", c[c.SCANNING = 2] = "SCANNING", c[c.PAUSED = 3] = "PAUSED";
})(We || (We = {}));
var Bs = function() {
  function c() {
    this.state = We.NOT_STARTED, this.onGoingTransactionNewState = We.UNKNOWN;
  }
  return c.prototype.directTransition = function(h) {
    this.failIfTransitionOngoing(), this.validateTransition(h), this.state = h;
  }, c.prototype.startTransition = function(h) {
    return this.failIfTransitionOngoing(), this.validateTransition(h), this.onGoingTransactionNewState = h, this;
  }, c.prototype.execute = function() {
    if (this.onGoingTransactionNewState === We.UNKNOWN)
      throw "Transaction is already cancelled, cannot execute().";
    var h = this.onGoingTransactionNewState;
    this.onGoingTransactionNewState = We.UNKNOWN, this.directTransition(h);
  }, c.prototype.cancel = function() {
    if (this.onGoingTransactionNewState === We.UNKNOWN)
      throw "Transaction is already cancelled, cannot cancel().";
    this.onGoingTransactionNewState = We.UNKNOWN;
  }, c.prototype.getState = function() {
    return this.state;
  }, c.prototype.failIfTransitionOngoing = function() {
    if (this.onGoingTransactionNewState !== We.UNKNOWN)
      throw "Cannot transition to a new state, already under transition";
  }, c.prototype.validateTransition = function(h) {
    switch (this.state) {
      case We.UNKNOWN:
        throw "Transition from unknown is not allowed";
      case We.NOT_STARTED:
        this.failIfNewStateIs(h, [We.PAUSED]);
        break;
      case We.SCANNING:
        break;
      case We.PAUSED:
        break;
    }
  }, c.prototype.failIfNewStateIs = function(h, f) {
    for (var E = 0, C = f; E < C.length; E++) {
      var w = C[E];
      if (h === w)
        throw "Cannot transition from ".concat(this.state, " to ").concat(h);
    }
  }, c;
}(), Ls = function() {
  function c(h) {
    this.stateManager = h;
  }
  return c.prototype.startTransition = function(h) {
    return this.stateManager.startTransition(h);
  }, c.prototype.directTransition = function(h) {
    this.stateManager.directTransition(h);
  }, c.prototype.getState = function() {
    return this.stateManager.getState();
  }, c.prototype.canScanFile = function() {
    return this.stateManager.getState() === We.NOT_STARTED;
  }, c.prototype.isScanning = function() {
    return this.stateManager.getState() !== We.NOT_STARTED;
  }, c.prototype.isStrictlyScanning = function() {
    return this.stateManager.getState() === We.SCANNING;
  }, c.prototype.isPaused = function() {
    return this.stateManager.getState() === We.PAUSED;
  }, c;
}(), Ps = function() {
  function c() {
  }
  return c.create = function() {
    return new Ls(new Bs());
  }, c;
}(), Fs = /* @__PURE__ */ function() {
  var c = function(h, f) {
    return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(E, C) {
      E.__proto__ = C;
    } || function(E, C) {
      for (var w in C) Object.prototype.hasOwnProperty.call(C, w) && (E[w] = C[w]);
    }, c(h, f);
  };
  return function(h, f) {
    if (typeof f != "function" && f !== null)
      throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
    c(h, f);
    function E() {
      this.constructor = h;
    }
    h.prototype = f === null ? Object.create(f) : (E.prototype = f.prototype, new E());
  };
}(), Pt = function(c) {
  Fs(h, c);
  function h() {
    return c !== null && c.apply(this, arguments) || this;
  }
  return h.DEFAULT_WIDTH = 300, h.DEFAULT_WIDTH_OFFSET = 2, h.FILE_SCAN_MIN_HEIGHT = 300, h.FILE_SCAN_HIDDEN_CANVAS_PADDING = 100, h.MIN_QR_BOX_SIZE = 50, h.SHADED_LEFT = 1, h.SHADED_RIGHT = 2, h.SHADED_TOP = 3, h.SHADED_BOTTOM = 4, h.SHADED_REGION_ELEMENT_ID = "qr-shaded-region", h.VERBOSE = !1, h.BORDER_SHADER_DEFAULT_COLOR = "#ffffff", h.BORDER_SHADER_MATCH_COLOR = "rgb(90, 193, 56)", h;
}(gs), ks = function() {
  function c(h, f) {
    this.logger = f, this.fps = Pt.SCAN_DEFAULT_FPS, h ? (h.fps && (this.fps = h.fps), this.disableFlip = h.disableFlip === !0, this.qrbox = h.qrbox, this.aspectRatio = h.aspectRatio, this.videoConstraints = h.videoConstraints) : this.disableFlip = Pt.DEFAULT_DISABLE_FLIP;
  }
  return c.prototype.isMediaStreamConstraintsValid = function() {
    return this.videoConstraints ? _i.isMediaStreamConstraintsValid(this.videoConstraints, this.logger) : (this.logger.logError("Empty videoConstraints", !0), !1);
  }, c.prototype.isShadedBoxEnabled = function() {
    return !ir(this.qrbox);
  }, c.create = function(h, f) {
    return new c(h, f);
  }, c;
}(), En = function() {
  function c(h, f) {
    if (this.element = null, this.canvasElement = null, this.scannerPausedUiElement = null, this.hasBorderShaders = null, this.borderShaders = null, this.qrMatch = null, this.renderedCamera = null, this.qrRegion = null, this.context = null, this.lastScanImageFile = null, this.isScanning = !1, !document.getElementById(h))
      throw "HTML Element with id=".concat(h, " not found");
    this.elementId = h, this.verbose = !1;
    var E;
    typeof f == "boolean" ? this.verbose = f === !0 : f && (E = f, this.verbose = E.verbose === !0, E.experimentalFeatures), this.logger = new ws(this.verbose), this.qrcode = new Is(this.getSupportedFormats(f), this.getUseBarCodeDetectorIfSupported(E), this.verbose, this.logger), this.foreverScanTimeout, this.shouldScan = !0, this.stateManagerProxy = Ps.create();
  }
  return c.prototype.start = function(h, f, E, C) {
    var w = this;
    if (!h)
      throw "cameraIdOrConfig is required";
    if (!E || typeof E != "function")
      throw "qrCodeSuccessCallback is required and should be a function.";
    var _;
    C ? _ = C : _ = this.verbose ? this.logger.log : function() {
    };
    var B = ks.create(f, this.logger);
    this.clearElement();
    var N = !1;
    B.videoConstraints && (B.isMediaStreamConstraintsValid() ? N = !0 : this.logger.logError("'videoConstraints' is not valid 'MediaStreamConstraints, it will be ignored.'", !0));
    var p = N, M = document.getElementById(this.elementId);
    M.clientWidth ? M.clientWidth : Pt.DEFAULT_WIDTH, M.style.position = "relative", this.shouldScan = !0, this.element = M;
    var v = this, ee = this.stateManagerProxy.startTransition(We.SCANNING);
    return new Promise(function(q, me) {
      var j = p ? B.videoConstraints : v.createVideoConstraints(h);
      if (!j) {
        ee.cancel(), me("videoConstraints should be defined");
        return;
      }
      var ue = {};
      (!p || B.aspectRatio) && (ue.aspectRatio = B.aspectRatio);
      var oe = {
        onRenderSurfaceReady: function(G, V) {
          v.setupUi(G, V, B), v.isScanning = !0, v.foreverScan(B, E, _);
        }
      };
      Rs.failIfNotSupported().then(function(G) {
        G.create(j).then(function(V) {
          return V.render(w.element, ue, oe).then(function(z) {
            v.renderedCamera = z, ee.execute(), q(null);
          }).catch(function(z) {
            ee.cancel(), me(z);
          });
        }).catch(function(V) {
          ee.cancel(), me(Fr.errorGettingUserMedia(V));
        });
      }).catch(function(G) {
        ee.cancel(), me(Fr.cameraStreamingNotSupported());
      });
    });
  }, c.prototype.pause = function(h) {
    if (!this.stateManagerProxy.isStrictlyScanning())
      throw "Cannot pause, scanner is not scanning.";
    this.stateManagerProxy.directTransition(We.PAUSED), this.showPausedState(), (ir(h) || h !== !0) && (h = !1), h && this.renderedCamera && this.renderedCamera.pause();
  }, c.prototype.resume = function() {
    if (!this.stateManagerProxy.isPaused())
      throw "Cannot result, scanner is not paused.";
    if (!this.renderedCamera)
      throw "renderedCamera doesn't exist while trying resume()";
    var h = this, f = function() {
      h.stateManagerProxy.directTransition(We.SCANNING), h.hidePausedState();
    };
    if (!this.renderedCamera.isPaused()) {
      f();
      return;
    }
    this.renderedCamera.resume(function() {
      f();
    });
  }, c.prototype.getState = function() {
    return this.stateManagerProxy.getState();
  }, c.prototype.stop = function() {
    var h = this;
    if (!this.stateManagerProxy.isScanning())
      throw "Cannot stop, scanner is not running or paused.";
    var f = this.stateManagerProxy.startTransition(We.NOT_STARTED);
    this.shouldScan = !1, this.foreverScanTimeout && clearTimeout(this.foreverScanTimeout);
    var E = function() {
      if (h.element) {
        var w = document.getElementById(Pt.SHADED_REGION_ELEMENT_ID);
        w && h.element.removeChild(w);
      }
    }, C = this;
    return this.renderedCamera.close().then(function() {
      return C.renderedCamera = null, C.element && (C.element.removeChild(C.canvasElement), C.canvasElement = null), E(), C.qrRegion && (C.qrRegion = null), C.context && (C.context = null), f.execute(), C.hidePausedState(), C.isScanning = !1, Promise.resolve();
    });
  }, c.prototype.scanFile = function(h, f) {
    return this.scanFileV2(h, f).then(function(E) {
      return E.decodedText;
    });
  }, c.prototype.scanFileV2 = function(h, f) {
    var E = this;
    if (!h || !(h instanceof File))
      throw "imageFile argument is mandatory and should be instance of File. Use 'event.target.files[0]'.";
    if (ir(f) && (f = !0), !this.stateManagerProxy.canScanFile())
      throw "Cannot start file scan - ongoing camera scan";
    return new Promise(function(C, w) {
      E.possiblyCloseLastScanImageFile(), E.clearElement(), E.lastScanImageFile = URL.createObjectURL(h);
      var _ = new Image();
      _.onload = function() {
        var B = _.width, N = _.height, p = document.getElementById(E.elementId), M = p.clientWidth ? p.clientWidth : Pt.DEFAULT_WIDTH, v = Math.max(p.clientHeight ? p.clientHeight : N, Pt.FILE_SCAN_MIN_HEIGHT), ee = E.computeCanvasDrawConfig(B, N, M, v);
        if (f) {
          var q = E.createCanvasElement(M, v, "qr-canvas-visible");
          q.style.display = "inline-block", p.appendChild(q);
          var me = q.getContext("2d");
          if (!me)
            throw "Unable to get 2d context from canvas";
          me.canvas.width = M, me.canvas.height = v, me.drawImage(_, 0, 0, B, N, ee.x, ee.y, ee.width, ee.height);
        }
        var j = Pt.FILE_SCAN_HIDDEN_CANVAS_PADDING, ue = Math.max(_.width, ee.width), oe = Math.max(_.height, ee.height), G = ue + 2 * j, V = oe + 2 * j, z = E.createCanvasElement(G, V);
        p.appendChild(z);
        var be = z.getContext("2d");
        if (!be)
          throw "Unable to get 2d context from canvas";
        be.canvas.width = G, be.canvas.height = V, be.drawImage(_, 0, 0, B, N, j, j, ue, oe);
        try {
          E.qrcode.decodeRobustlyAsync(z).then(function(ce) {
            C(di.createFromQrcodeResult(ce));
          }).catch(w);
        } catch (ce) {
          w("QR code parse error, error = ".concat(ce));
        }
      }, _.onerror = w, _.onabort = w, _.onstalled = w, _.onsuspend = w, _.src = URL.createObjectURL(h);
    });
  }, c.prototype.clear = function() {
    this.clearElement();
  }, c.getCameras = function() {
    return Ms.retrieve();
  }, c.prototype.getRunningTrackCapabilities = function() {
    return this.getRenderedCameraOrFail().getRunningTrackCapabilities();
  }, c.prototype.getRunningTrackSettings = function() {
    return this.getRenderedCameraOrFail().getRunningTrackSettings();
  }, c.prototype.getRunningTrackCameraCapabilities = function() {
    return this.getRenderedCameraOrFail().getCapabilities();
  }, c.prototype.applyVideoConstraints = function(h) {
    if (h) {
      if (!_i.isMediaStreamConstraintsValid(h, this.logger))
        throw "invalid videoConstaints passed, check logs for more details";
    } else throw "videoConstaints is required argument.";
    return this.getRenderedCameraOrFail().applyVideoConstraints(h);
  }, c.prototype.getRenderedCameraOrFail = function() {
    if (this.renderedCamera == null)
      throw "Scanning is not in running state, call this API only when QR code scanning using camera is in running state.";
    return this.renderedCamera;
  }, c.prototype.getSupportedFormats = function(h) {
    var f = [
      Z.QR_CODE,
      Z.AZTEC,
      Z.CODABAR,
      Z.CODE_39,
      Z.CODE_93,
      Z.CODE_128,
      Z.DATA_MATRIX,
      Z.MAXICODE,
      Z.ITF,
      Z.EAN_13,
      Z.EAN_8,
      Z.PDF_417,
      Z.RSS_14,
      Z.RSS_EXPANDED,
      Z.UPC_A,
      Z.UPC_E,
      Z.UPC_EAN_EXTENSION
    ];
    if (!h || typeof h == "boolean" || !h.formatsToSupport)
      return f;
    if (!Array.isArray(h.formatsToSupport))
      throw "configOrVerbosityFlag.formatsToSupport should be undefined or an array.";
    if (h.formatsToSupport.length === 0)
      throw "Atleast 1 formatsToSupport is needed.";
    for (var E = [], C = 0, w = h.formatsToSupport; C < w.length; C++) {
      var _ = w[C];
      ds(_) ? E.push(_) : this.logger.warn("Invalid format: ".concat(_, " passed in config, ignoring."));
    }
    if (E.length === 0)
      throw "None of formatsToSupport match supported values.";
    return E;
  }, c.prototype.getUseBarCodeDetectorIfSupported = function(h) {
    if (ir(h))
      return !0;
    if (!ir(h.useBarCodeDetectorIfSupported))
      return h.useBarCodeDetectorIfSupported !== !1;
    if (ir(h.experimentalFeatures))
      return !0;
    var f = h.experimentalFeatures;
    return ir(f.useBarCodeDetectorIfSupported) ? !0 : f.useBarCodeDetectorIfSupported !== !1;
  }, c.prototype.validateQrboxSize = function(h, f, E) {
    var C = this, w = E.qrbox;
    this.validateQrboxConfig(w);
    var _ = this.toQrdimensions(h, f, w), B = function(p) {
      if (p < Pt.MIN_QR_BOX_SIZE)
        throw "minimum size of 'config.qrbox' dimension value is" + " ".concat(Pt.MIN_QR_BOX_SIZE, "px.");
    }, N = function(p) {
      return p > h && (C.logger.warn("`qrbox.width` or `qrbox` is larger than the width of the root element. The width will be truncated to the width of root element."), p = h), p;
    };
    B(_.width), B(_.height), _.width = N(_.width);
  }, c.prototype.validateQrboxConfig = function(h) {
    if (typeof h != "number" && typeof h != "function" && (h.width === void 0 || h.height === void 0))
      throw "Invalid instance of QrDimensions passed for 'config.qrbox'. Both 'width' and 'height' should be set.";
  }, c.prototype.toQrdimensions = function(h, f, E) {
    if (typeof E == "number")
      return { width: E, height: E };
    if (typeof E == "function")
      try {
        return E(h, f);
      } catch (C) {
        throw new Error("qrbox config was passed as a function but it failed with unknown error" + C);
      }
    return E;
  }, c.prototype.setupUi = function(h, f, E) {
    E.isShadedBoxEnabled() && this.validateQrboxSize(h, f, E);
    var C = ir(E.qrbox) ? { width: h, height: f } : E.qrbox;
    this.validateQrboxConfig(C);
    var w = this.toQrdimensions(h, f, C);
    w.height > f && this.logger.warn("[Html5Qrcode] config.qrbox has height that isgreater than the height of the video stream. Shading will be ignored");
    var _ = E.isShadedBoxEnabled() && w.height <= f, B = {
      x: 0,
      y: 0,
      width: h,
      height: f
    }, N = _ ? this.getShadedRegionBounds(h, f, w) : B, p = this.createCanvasElement(N.width, N.height), M = { willReadFrequently: !0 }, v = p.getContext("2d", M);
    v.canvas.width = N.width, v.canvas.height = N.height, this.element.append(p), _ && this.possiblyInsertShadingElement(this.element, h, f, w), this.createScannerPausedUiElement(this.element), this.qrRegion = N, this.context = v, this.canvasElement = p;
  }, c.prototype.createScannerPausedUiElement = function(h) {
    var f = document.createElement("div");
    f.innerText = Fr.scannerPaused(), f.style.display = "none", f.style.position = "absolute", f.style.top = "0px", f.style.zIndex = "1", f.style.background = "rgba(9, 9, 9, 0.46)", f.style.color = "#FFECEC", f.style.textAlign = "center", f.style.width = "100%", h.appendChild(f), this.scannerPausedUiElement = f;
  }, c.prototype.scanContext = function(h, f) {
    var E = this;
    return this.stateManagerProxy.isPaused() ? Promise.resolve(!1) : this.qrcode.decodeAsync(this.canvasElement).then(function(C) {
      return h(C.text, di.createFromQrcodeResult(C)), E.possiblyUpdateShaders(!0), !0;
    }).catch(function(C) {
      E.possiblyUpdateShaders(!1);
      var w = Fr.codeParseError(C);
      return f(w, xs.createFrom(w)), !1;
    });
  }, c.prototype.foreverScan = function(h, f, E) {
    var C = this;
    if (this.shouldScan && this.renderedCamera) {
      var w = this.renderedCamera.getSurface(), _ = w.videoWidth / w.clientWidth, B = w.videoHeight / w.clientHeight;
      if (!this.qrRegion)
        throw "qrRegion undefined when localMediaStream is ready.";
      var N = this.qrRegion.width * _, p = this.qrRegion.height * B, M = this.qrRegion.x * _, v = this.qrRegion.y * B;
      this.context.drawImage(w, M, v, N, p, 0, 0, this.qrRegion.width, this.qrRegion.height);
      var ee = function() {
        C.foreverScanTimeout = setTimeout(function() {
          C.foreverScan(h, f, E);
        }, C.getTimeoutFps(h.fps));
      };
      this.scanContext(f, E).then(function(q) {
        !q && h.disableFlip !== !0 ? (C.context.translate(C.context.canvas.width, 0), C.context.scale(-1, 1), C.scanContext(f, E).finally(function() {
          ee();
        })) : ee();
      }).catch(function(q) {
        C.logger.logError("Error happend while scanning context", q), ee();
      });
    }
  }, c.prototype.createVideoConstraints = function(h) {
    if (typeof h == "string")
      return { deviceId: { exact: h } };
    if (typeof h == "object") {
      var f = "facingMode", E = "deviceId", C = { user: !0, environment: !0 }, w = "exact", _ = function(me) {
        if (me in C)
          return !0;
        throw "config has invalid 'facingMode' value = " + "'".concat(me, "'");
      }, B = Object.keys(h);
      if (B.length !== 1)
        throw "'cameraIdOrConfig' object should have exactly 1 key," + " if passed as an object, found ".concat(B.length, " keys");
      var N = Object.keys(h)[0];
      if (N !== f && N !== E)
        throw "Only '".concat(f, "' and '").concat(E, "' ") + " are supported for 'cameraIdOrConfig'";
      if (N === f) {
        var p = h.facingMode;
        if (typeof p == "string") {
          if (_(p))
            return { facingMode: p };
        } else if (typeof p == "object")
          if (w in p) {
            if (_(p["".concat(w)]))
              return {
                facingMode: {
                  exact: p["".concat(w)]
                }
              };
          } else
            throw "'facingMode' should be string or object with" + " ".concat(w, " as key.");
        else {
          var M = typeof p;
          throw "Invalid type of 'facingMode' = ".concat(M);
        }
      } else {
        var v = h.deviceId;
        if (typeof v == "string")
          return { deviceId: v };
        if (typeof v == "object") {
          if (w in v)
            return {
              deviceId: { exact: v["".concat(w)] }
            };
          throw "'deviceId' should be string or object with" + " ".concat(w, " as key.");
        } else {
          var ee = typeof v;
          throw "Invalid type of 'deviceId' = ".concat(ee);
        }
      }
    }
    var q = typeof h;
    throw "Invalid type of 'cameraIdOrConfig' = ".concat(q);
  }, c.prototype.computeCanvasDrawConfig = function(h, f, E, C) {
    if (h <= E && f <= C) {
      var w = (E - h) / 2, _ = (C - f) / 2;
      return {
        x: w,
        y: _,
        width: h,
        height: f
      };
    } else {
      var B = h, N = f;
      return h > E && (f = E / h * f, h = E), f > C && (h = C / f * h, f = C), this.logger.log("Image downsampled from " + "".concat(B, "X").concat(N) + " to ".concat(h, "X").concat(f, ".")), this.computeCanvasDrawConfig(h, f, E, C);
    }
  }, c.prototype.clearElement = function() {
    if (this.stateManagerProxy.isScanning())
      throw "Cannot clear while scan is ongoing, close it first.";
    var h = document.getElementById(this.elementId);
    h && (h.innerHTML = "");
  }, c.prototype.possiblyUpdateShaders = function(h) {
    this.qrMatch !== h && (this.hasBorderShaders && this.borderShaders && this.borderShaders.length && this.borderShaders.forEach(function(f) {
      f.style.backgroundColor = h ? Pt.BORDER_SHADER_MATCH_COLOR : Pt.BORDER_SHADER_DEFAULT_COLOR;
    }), this.qrMatch = h);
  }, c.prototype.possiblyCloseLastScanImageFile = function() {
    this.lastScanImageFile && (URL.revokeObjectURL(this.lastScanImageFile), this.lastScanImageFile = null);
  }, c.prototype.createCanvasElement = function(h, f, E) {
    var C = h, w = f, _ = document.createElement("canvas");
    return _.style.width = "".concat(C, "px"), _.style.height = "".concat(w, "px"), _.style.display = "none", _.id = ir(E) ? "qr-canvas" : E, _;
  }, c.prototype.getShadedRegionBounds = function(h, f, E) {
    if (E.width > h || E.height > f)
      throw "'config.qrbox' dimensions should not be greater than the dimensions of the root HTML element.";
    return {
      x: (h - E.width) / 2,
      y: (f - E.height) / 2,
      width: E.width,
      height: E.height
    };
  }, c.prototype.possiblyInsertShadingElement = function(h, f, E, C) {
    if (!(f - C.width < 1 || E - C.height < 1)) {
      var w = document.createElement("div");
      w.style.position = "absolute";
      var _ = (f - C.width) / 2, B = (E - C.height) / 2;
      if (w.style.borderLeft = "".concat(_, "px solid rgba(0, 0, 0, 0.48)"), w.style.borderRight = "".concat(_, "px solid rgba(0, 0, 0, 0.48)"), w.style.borderTop = "".concat(B, "px solid rgba(0, 0, 0, 0.48)"), w.style.borderBottom = "".concat(B, "px solid rgba(0, 0, 0, 0.48)"), w.style.boxSizing = "border-box", w.style.top = "0px", w.style.bottom = "0px", w.style.left = "0px", w.style.right = "0px", w.id = "".concat(Pt.SHADED_REGION_ELEMENT_ID), f - C.width < 11 || E - C.height < 11)
        this.hasBorderShaders = !1;
      else {
        var N = 5, p = 40;
        this.insertShaderBorders(w, p, N, -N, null, 0, !0), this.insertShaderBorders(w, p, N, -N, null, 0, !1), this.insertShaderBorders(w, p, N, null, -N, 0, !0), this.insertShaderBorders(w, p, N, null, -N, 0, !1), this.insertShaderBorders(w, N, p + N, -N, null, -N, !0), this.insertShaderBorders(w, N, p + N, null, -N, -N, !0), this.insertShaderBorders(w, N, p + N, -N, null, -N, !1), this.insertShaderBorders(w, N, p + N, null, -N, -N, !1), this.hasBorderShaders = !0;
      }
      h.append(w);
    }
  }, c.prototype.insertShaderBorders = function(h, f, E, C, w, _, B) {
    var N = document.createElement("div");
    N.style.position = "absolute", N.style.backgroundColor = Pt.BORDER_SHADER_DEFAULT_COLOR, N.style.width = "".concat(f, "px"), N.style.height = "".concat(E, "px"), C !== null && (N.style.top = "".concat(C, "px")), w !== null && (N.style.bottom = "".concat(w, "px")), B ? N.style.left = "".concat(_, "px") : N.style.right = "".concat(_, "px"), this.borderShaders || (this.borderShaders = []), this.borderShaders.push(N), h.appendChild(N);
  }, c.prototype.showPausedState = function() {
    if (!this.scannerPausedUiElement)
      throw "[internal error] scanner paused UI element not found";
    this.scannerPausedUiElement.style.display = "block";
  }, c.prototype.hidePausedState = function() {
    if (!this.scannerPausedUiElement)
      throw "[internal error] scanner paused UI element not found";
    this.scannerPausedUiElement.style.display = "none";
  }, c.prototype.getTimeoutFps = function(h) {
    return 1e3 / h;
  }, c;
}(), pi;
(function(c) {
  c[c.STATUS_DEFAULT = 0] = "STATUS_DEFAULT", c[c.STATUS_SUCCESS = 1] = "STATUS_SUCCESS", c[c.STATUS_WARNING = 2] = "STATUS_WARNING", c[c.STATUS_REQUESTING_PERMISSION = 3] = "STATUS_REQUESTING_PERMISSION";
})(pi || (pi = {}));
var nt = /* @__PURE__ */ ((c) => (c.CAMERA_ACCESS_DENIED = "CAMERA_ACCESS_DENIED", c.NO_CAMERA_FOUND = "NO_CAMERA_FOUND", c.CAMERA_INITIALIZATION_FAILED = "CAMERA_INITIALIZATION_FAILED", c.SCANNER_START_FAILED = "SCANNER_START_FAILED", c.SCANNER_STOP_FAILED = "SCANNER_STOP_FAILED", c.CAMERA_SWITCH_FAILED = "CAMERA_SWITCH_FAILED", c.TORCH_TOGGLE_FAILED = "TORCH_TOGGLE_FAILED", c.TORCH_NOT_SUPPORTED = "TORCH_NOT_SUPPORTED", c.ZOOM_SET_FAILED = "ZOOM_SET_FAILED", c.ZOOM_NOT_SUPPORTED = "ZOOM_NOT_SUPPORTED", c.FILE_SCAN_FAILED = "FILE_SCAN_FAILED", c.PERMISSION_REQUEST_FAILED = "PERMISSION_REQUEST_FAILED", c.SCANNER_NOT_INITIALIZED = "SCANNER_NOT_INITIALIZED", c.SCANNER_NOT_ACTIVE = "SCANNER_NOT_ACTIVE", c.UNKNOWN_ERROR = "UNKNOWN_ERROR", c))(nt || {});
class ct extends Error {
  type;
  originalError;
  constructor(h, f, E) {
    super(f), this.name = "QRScannerCustomError", this.type = h, this.originalError = E, Error.captureStackTrace && Error.captureStackTrace(this, ct);
  }
}
class Us {
  scanner = null;
  currentCameraId = null;
  elementId = "";
  onSuccessCallback = null;
  // private onErrorCallback: ((error: Error) => void) | null = null;
  async start(h, f, E, C, w) {
    try {
      this.elementId = h.id, this.scanner = new En(this.elementId), this.onSuccessCallback = E;
      const _ = await En.getCameras();
      if (!_ || _.length === 0)
        throw new ct(
          nt.NO_CAMERA_FOUND,
          "No camera devices found",
          void 0
        );
      this.currentCameraId = _.find(
        (N) => N.label.toLowerCase().includes("back") || N.label.toLowerCase().includes("environment")
      )?.id || _[0].id;
      const B = {
        fps: f?.fps ?? 10,
        qrbox: f?.qrbox ?? 250,
        aspectRatio: 1,
        disableFlip: !1
      };
      await this.scanner.start(
        { deviceId: { exact: this.currentCameraId } },
        B,
        (N) => {
          E(N);
        },
        (N) => {
        }
      ), f?.zoom && await this.setZoom(f.zoom);
    } catch (_) {
      throw _ instanceof ct ? _ : new ct(
        nt.SCANNER_START_FAILED,
        `Failed to start QR scanner: ${_.message}`,
        _
      );
    }
  }
  async stop() {
    if (this.scanner && this.scanner.getState() !== We.NOT_STARTED)
      try {
        await this.scanner.stop(), this.scanner.clear();
      } catch (h) {
        throw new ct(
          nt.SCANNER_STOP_FAILED,
          `Failed to stop scanner: ${h.message}`,
          h
        );
      } finally {
        this.scanner = null, this.onSuccessCallback = null;
      }
  }
  async getCameras() {
    try {
      return (await En.getCameras()).map((f) => ({
        deviceId: f.id,
        label: f.label,
        kind: "videoinput",
        groupId: ""
      }));
    } catch (h) {
      throw new ct(
        nt.CAMERA_INITIALIZATION_FAILED,
        `Failed to get cameras: ${h.message}`,
        h
      );
    }
  }
  async switchCamera(h, f) {
    if (!this.scanner || this.scanner.getState() === We.NOT_STARTED)
      throw new ct(
        nt.SCANNER_NOT_ACTIVE,
        "Scanner not active",
        void 0
      );
    try {
      await this.scanner.stop(), this.currentCameraId = h;
      const E = {
        fps: f.fps || 10,
        qrbox: f.qrbox || 250,
        aspectRatio: 1,
        disableFlip: !1
      };
      await this.scanner.start(
        { deviceId: { exact: h } },
        E,
        (C) => {
          this.onSuccessCallback && this.onSuccessCallback(C);
        },
        (C) => {
        }
      );
    } catch (E) {
      throw new ct(
        nt.CAMERA_SWITCH_FAILED,
        `Failed to switch camera: ${E.message}`,
        E
      );
    }
  }
  async toggleTorch(h) {
    if (!this.scanner || this.scanner.getState() === We.NOT_STARTED)
      throw new ct(
        nt.SCANNER_NOT_INITIALIZED,
        "Scanner not initialized",
        void 0
      );
    try {
      await this.scanner.applyVideoConstraints({
        advanced: [{ torch: h }]
      });
    } catch (f) {
      throw f.message.toLowerCase().includes("torch") || f.message.toLowerCase().includes("constraint") ? new ct(
        nt.TORCH_NOT_SUPPORTED,
        "Torch not supported on this device",
        f
      ) : new ct(
        nt.TORCH_TOGGLE_FAILED,
        `Failed to toggle torch: ${f.message}`,
        f
      );
    }
  }
  async setZoom(h) {
    if (!this.scanner || this.scanner.getState() === We.NOT_STARTED)
      throw new ct(
        nt.SCANNER_NOT_INITIALIZED,
        "Scanner not initialized",
        void 0
      );
    try {
      await this.scanner.applyVideoConstraints({
        advanced: [{ zoom: h }]
      });
    } catch (f) {
      throw f.message.toLowerCase().includes("zoom") || f.message.toLowerCase().includes("constraint") ? new ct(
        nt.ZOOM_NOT_SUPPORTED,
        "Zoom not supported on this device",
        f
      ) : new ct(
        nt.ZOOM_SET_FAILED,
        `Failed to set zoom: ${f.message}`,
        f
      );
    }
  }
  async scanFile(h) {
    const f = `temp-scanner-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`, E = document.createElement("div");
    E.id = f, E.style.display = "none", document.body.appendChild(E);
    try {
      const w = await new En(f).scanFile(h, !0);
      return document.body.contains(E) && document.body.removeChild(E), w;
    } catch (C) {
      throw document.body.contains(E) && document.body.removeChild(E), new ct(
        nt.FILE_SCAN_FAILED,
        `Failed to scan file: ${C.message}`,
        C
      );
    }
  }
  async hasCameraPermission() {
    try {
      return (await navigator.mediaDevices.getUserMedia({ video: !0 })).getTracks().forEach((f) => f.stop()), !0;
    } catch {
      return !1;
    }
  }
  async requestCameraPermission() {
    try {
      return (await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }
      })).getTracks().forEach((f) => f.stop()), !0;
    } catch (h) {
      throw new ct(
        nt.CAMERA_ACCESS_DENIED,
        "Camera access denied or unavailable",
        h
      );
    }
  }
  async isTorchAvailable() {
    if (!this.scanner || this.scanner.getState() === We.NOT_STARTED)
      return !1;
    try {
      return !!(await this.scanner.getRunningTrackCapabilities()).torch;
    } catch {
      return !1;
    }
  }
  getCurrentCameraId() {
    return this.currentCameraId;
  }
}
const je = new Us();
function Vs(c) {
  const h = Pe.useRef(null), f = hs();
  return Pe.useEffect(() => {
    if (!h.current) return;
    c.setLoadingScanner(!0);
    const E = setTimeout(async () => {
      if (h.current)
        try {
          if (!await je.hasCameraPermission?.() && !await je.requestCameraPermission?.()) {
            c.setLoadingScanner(!1);
            return;
          }
          await je.start(
            h.current,
            {
              fps: c.config.fps || 10,
              qrbox: c.config.qrbox || { height: 200, width: 200 },
              zoom: c.config.zoom
            },
            c.onScanSuccess,
            c.onError ?? (() => {
            }),
            f
            // pass to engine
          ), c.setLoadingScanner(!1);
        } catch (C) {
          c.onError && c.onError(C), c.setLoadingScanner(!1);
        }
    }, 40);
    return () => {
      c.setLoadingScanner(!1), clearTimeout(E), je.stop();
    };
  }, [
    c.config.fps,
    c.config.qrbox,
    c.config.zoom,
    c.onScanSuccess,
    c.onError,
    f
  ]), {
    containerRef: h,
    switchCamera: je.switchCamera?.bind(je),
    toggleTorch: je.toggleTorch?.bind(je),
    setZoom: je.setZoom?.bind(je),
    scanFile: je.scanFile?.bind(je),
    stop: je.stop?.bind(je),
    hasCameraPermission: je.hasCameraPermission?.bind(je),
    requestCameraPermission: je.requestCameraPermission?.bind(je),
    isTorchAvailable: je.isTorchAvailable?.bind(je),
    getCameras: je.getCameras?.bind(je),
    getCurrentCameraId: je.getCurrentCameraId?.bind(je)
  };
}
const Gs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='36'%20height='36'%20fill='%23fafafa'%20viewBox='0%200%20256%20256'%3e%3cpath%20d='M184,16H72A16,16,0,0,0,56,32V77.33a16.12,16.12,0,0,0,3.2,9.6L80,114.67V224a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V114.67l20.8-27.74a16.12,16.12,0,0,0,3.2-9.6V32A16,16,0,0,0,184,16ZM72,32H184V56H72V32Zm91.2,73.07a16.12,16.12,0,0,0-3.2,9.6V224H96V114.67a16.12,16.12,0,0,0-3.2-9.6L72,77.33V72H184v5.33ZM136,120v32a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Z'%3e%3c/path%3e%3c/svg%3e", Hs = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='36'%20height='36'%20fill='%23fafafa'%20viewBox='0%200%20256%20256'%3e%3cpath%20d='M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z'%3e%3c/path%3e%3c/svg%3e", Ws = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='36'%20height='36'%20fill='%23fafafa'%20viewBox='0%200%20256%20256'%3e%3cpath%20d='M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z'%3e%3c/path%3e%3c/svg%3e", _t = {
  // Toast Messages
  TOAST: {
    CAMERA_ACCESS_DENIED: "Camera access denied. Please allow camera permission and refresh the page.",
    NO_CAMERA_FOUND: "No camera found on this device.",
    SCANNER_START_FAILED: "Failed to start QR scanner",
    SCANNER_NOT_INITIALIZED: "Failed to initialize QR scanner",
    FILE_SCAN_FAILED: "Failed to scan file"
  },
  // Error Messages
  ERROR: {
    FAILED_TO_TOGGLE_TORCH: "Failed to toggle torch",
    FAILED_TO_SWITCH_CAMERA: "Failed to switch camera",
    FAILED_TO_SCAN_FILE: "Failed to scan file"
  },
  // UI Labels
  UI: {
    SCANNED_STATUS: "✅ Scanned",
    INITIALIZING_CAMERA: "Initializing camera...",
    SWITCH_CAMERA: "Switch Camera"
  },
  // Alt Text for Images
  ALT_TEXT: {
    CLOSE: "Close",
    TOGGLE_TORCH: "Toggle Torch",
    FILE_UPLOAD: "Upload File"
  },
  // Camera Labels
  CAMERA: {
    DEFAULT_LABEL: (c) => `Camera ${c.slice(-4)}`
  }
};
function Si(c) {
  var h, f, E = "";
  if (typeof c == "string" || typeof c == "number") E += c;
  else if (typeof c == "object") if (Array.isArray(c)) {
    var C = c.length;
    for (h = 0; h < C; h++) c[h] && (f = Si(c[h])) && (E && (E += " "), E += f);
  } else for (f in c) c[f] && (E && (E += " "), E += f);
  return E;
}
function Cr() {
  for (var c, h, f = 0, E = "", C = arguments.length; f < C; f++) (c = arguments[f]) && (h = Si(c)) && (E && (E += " "), E += h);
  return E;
}
function Xs(c) {
  if (typeof document > "u") return;
  let h = document.head || document.getElementsByTagName("head")[0], f = document.createElement("style");
  f.type = "text/css", h.firstChild ? h.insertBefore(f, h.firstChild) : h.appendChild(f), f.styleSheet ? f.styleSheet.cssText = c : f.appendChild(document.createTextNode(c));
}
Xs(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var nn = (c) => typeof c == "number" && !isNaN(c), yr = (c) => typeof c == "string", sr = (c) => typeof c == "function", zs = (c) => yr(c) || nn(c), Wn = (c) => yr(c) || sr(c) ? c : null, Ys = (c, h) => c === !1 || nn(c) && c > 0 ? c : h, Xn = (c) => yn(c) || yr(c) || sr(c) || nn(c);
function Zs(c, h, f = 300) {
  let { scrollHeight: E, style: C } = c;
  requestAnimationFrame(() => {
    C.minHeight = "initial", C.height = E + "px", C.transition = `all ${f}ms`, requestAnimationFrame(() => {
      C.height = "0", C.padding = "0", C.margin = "0", setTimeout(h, f);
    });
  });
}
function js({ enter: c, exit: h, appendPosition: f = !1, collapse: E = !0, collapseDuration: C = 300 }) {
  return function({ children: w, position: _, preventExitTransition: B, done: N, nodeRef: p, isIn: M, playToast: v }) {
    let ee = f ? `${c}--${_}` : c, q = f ? `${h}--${_}` : h, me = pr(0);
    return Ii(() => {
      let j = p.current, ue = ee.split(" "), oe = (G) => {
        G.target === p.current && (v(), j.removeEventListener("animationend", oe), j.removeEventListener("animationcancel", oe), me.current === 0 && G.type !== "animationcancel" && j.classList.remove(...ue));
      };
      j.classList.add(...ue), j.addEventListener("animationend", oe), j.addEventListener("animationcancel", oe);
    }, []), rn(() => {
      let j = p.current, ue = () => {
        j.removeEventListener("animationend", ue), E ? Zs(j, N, C) : N();
      };
      M || (B ? ue() : (me.current = 1, j.className += ` ${q}`, j.addEventListener("animationend", ue)));
    }, [M]), Pe.createElement(Pe.Fragment, null, w);
  };
}
function yi(c, h) {
  return { content: Ni(c.content, c.props), containerId: c.props.containerId, id: c.props.toastId, theme: c.props.theme, type: c.props.type, data: c.props.data || {}, isLoading: c.props.isLoading, icon: c.props.icon, reason: c.removalReason, status: h };
}
function Ni(c, h, f = !1) {
  return yn(c) && !yr(c.type) ? Zn(c, { closeToast: h.closeToast, toastProps: h, data: h.data, isPaused: f }) : sr(c) ? c({ closeToast: h.closeToast, toastProps: h, data: h.data, isPaused: f }) : c;
}
function Ks({ closeToast: c, theme: h, ariaLabel: f = "close" }) {
  return Pe.createElement("button", { className: `Toastify__close-button Toastify__close-button--${h}`, type: "button", onClick: (E) => {
    E.stopPropagation(), c(!0);
  }, "aria-label": f }, Pe.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, Pe.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function qs({ delay: c, isRunning: h, closeToast: f, type: E = "default", hide: C, className: w, controlledProgress: _, progress: B, rtl: N, isIn: p, theme: M }) {
  let v = C || _ && B === 0, ee = { animationDuration: `${c}ms`, animationPlayState: h ? "running" : "paused" };
  _ && (ee.transform = `scaleX(${B})`);
  let q = Cr("Toastify__progress-bar", _ ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${M}`, `Toastify__progress-bar--${E}`, { "Toastify__progress-bar--rtl": N }), me = sr(w) ? w({ rtl: N, type: E, defaultClassName: q }) : Cr(q, w), j = { [_ && B >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: _ && B < 1 ? null : () => {
    p && f();
  } };
  return Pe.createElement("div", { className: "Toastify__progress-bar--wrp", "data-hidden": v }, Pe.createElement("div", { className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${M} Toastify__progress-bar--${E}` }), Pe.createElement("div", { role: "progressbar", "aria-hidden": v ? "true" : "false", "aria-label": "notification timer", className: me, style: ee, ...j }));
}
var Qs = 1, Oi = () => `${Qs++}`;
function Js(c, h, f) {
  let E = 1, C = 0, w = [], _ = [], B = h, N = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Set(), M = (G) => (p.add(G), () => p.delete(G)), v = () => {
    _ = Array.from(N.values()), p.forEach((G) => G());
  }, ee = ({ containerId: G, toastId: V, updateId: z }) => {
    let be = G ? G !== c : c !== 1, ce = N.has(V) && z == null;
    return be || ce;
  }, q = (G, V) => {
    N.forEach((z) => {
      var be;
      (V == null || V === z.props.toastId) && ((be = z.toggle) == null || be.call(z, G));
    });
  }, me = (G) => {
    var V, z;
    (z = (V = G.props) == null ? void 0 : V.onClose) == null || z.call(V, G.removalReason), G.isActive = !1;
  }, j = (G) => {
    if (G == null) N.forEach(me);
    else {
      let V = N.get(G);
      V && me(V);
    }
    v();
  }, ue = () => {
    C -= w.length, w = [];
  }, oe = (G) => {
    var V, z;
    let { toastId: be, updateId: ce } = G.props, L = ce == null;
    G.staleId && N.delete(G.staleId), G.isActive = !0, N.set(be, G), v(), f(yi(G, L ? "added" : "updated")), L && ((z = (V = G.props).onOpen) == null || z.call(V));
  };
  return { id: c, props: B, observe: M, toggle: q, removeToast: j, toasts: N, clearQueue: ue, buildToast: (G, V) => {
    if (ee(V)) return;
    let { toastId: z, updateId: be, data: ce, staleId: L, delay: K } = V, F = be == null;
    F && C++;
    let it = { ...B, style: B.toastStyle, key: E++, ...Object.fromEntries(Object.entries(V).filter(([$, he]) => he != null)), toastId: z, updateId: be, data: ce, isIn: !1, className: Wn(V.className || B.toastClassName), progressClassName: Wn(V.progressClassName || B.progressClassName), autoClose: V.isLoading ? !1 : Ys(V.autoClose, B.autoClose), closeToast($) {
      N.get(z).removalReason = $, j(z);
    }, deleteToast() {
      let $ = N.get(z);
      if ($ != null) {
        if (f(yi($, "removed")), N.delete(z), C--, C < 0 && (C = 0), w.length > 0) {
          oe(w.shift());
          return;
        }
        v();
      }
    } };
    it.closeButton = B.closeButton, V.closeButton === !1 || Xn(V.closeButton) ? it.closeButton = V.closeButton : V.closeButton === !0 && (it.closeButton = Xn(B.closeButton) ? B.closeButton : !0);
    let Ce = { content: G, props: it, staleId: L };
    B.limit && B.limit > 0 && C > B.limit && F ? w.push(Ce) : nn(K) ? setTimeout(() => {
      oe(Ce);
    }, K) : oe(Ce);
  }, setProps(G) {
    B = G;
  }, setToggle: (G, V) => {
    let z = N.get(G);
    z && (z.toggle = V);
  }, isToastActive: (G) => {
    var V;
    return (V = N.get(G)) == null ? void 0 : V.isActive;
  }, getSnapshot: () => _ };
}
var Tt = /* @__PURE__ */ new Map(), tn = [], zn = /* @__PURE__ */ new Set(), $s = (c) => zn.forEach((h) => h(c)), Ri = () => Tt.size > 0;
function ea() {
  tn.forEach((c) => Di(c.content, c.options)), tn = [];
}
var ta = (c, { containerId: h }) => {
  var f;
  return (f = Tt.get(h || 1)) == null ? void 0 : f.toasts.get(c);
};
function vi(c, h) {
  var f;
  if (h) return !!((f = Tt.get(h)) != null && f.isToastActive(c));
  let E = !1;
  return Tt.forEach((C) => {
    C.isToastActive(c) && (E = !0);
  }), E;
}
function ra(c) {
  if (!Ri()) {
    tn = tn.filter((h) => c != null && h.options.toastId !== c);
    return;
  }
  if (c == null || zs(c)) Tt.forEach((h) => {
    h.removeToast(c);
  });
  else if (c && ("containerId" in c || "id" in c)) {
    let h = Tt.get(c.containerId);
    h ? h.removeToast(c.id) : Tt.forEach((f) => {
      f.removeToast(c.id);
    });
  }
}
var na = (c = {}) => {
  Tt.forEach((h) => {
    h.props.limit && (!c.containerId || h.id === c.containerId) && h.clearQueue();
  });
};
function Di(c, h) {
  Xn(c) && (Ri() || tn.push({ content: c, options: h }), Tt.forEach((f) => {
    f.buildToast(c, h);
  }));
}
function ia(c) {
  var h;
  (h = Tt.get(c.containerId || 1)) == null || h.setToggle(c.id, c.fn);
}
function Mi(c, h) {
  Tt.forEach((f) => {
    (h == null || !(h != null && h.containerId) || h?.containerId === f.id) && f.toggle(c, h?.id);
  });
}
function sa(c) {
  let h = c.containerId || 1;
  return { subscribe(f) {
    let E = Js(h, c, $s);
    Tt.set(h, E);
    let C = E.observe(f);
    return ea(), () => {
      C(), Tt.delete(h);
    };
  }, setProps(f) {
    var E;
    (E = Tt.get(h)) == null || E.setProps(f);
  }, getSnapshot() {
    var f;
    return (f = Tt.get(h)) == null ? void 0 : f.getSnapshot();
  } };
}
function aa(c) {
  return zn.add(c), () => {
    zn.delete(c);
  };
}
function oa(c) {
  return c && (yr(c.toastId) || nn(c.toastId)) ? c.toastId : Oi();
}
function sn(c, h) {
  return Di(c, h), h.toastId;
}
function In(c, h) {
  return { ...h, type: h && h.type || c, toastId: oa(h) };
}
function bn(c) {
  return (h, f) => sn(h, In(c, f));
}
function Ue(c, h) {
  return sn(c, In("default", h));
}
Ue.loading = (c, h) => sn(c, In("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...h }));
function la(c, { pending: h, error: f, success: E }, C) {
  let w;
  h && (w = yr(h) ? Ue.loading(h, C) : Ue.loading(h.render, { ...C, ...h }));
  let _ = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, B = (p, M, v) => {
    if (M == null) {
      Ue.dismiss(w);
      return;
    }
    let ee = { type: p, ..._, ...C, data: v }, q = yr(M) ? { render: M } : M;
    return w ? Ue.update(w, { ...ee, ...q }) : Ue(q.render, { ...ee, ...q }), v;
  }, N = sr(c) ? c() : c;
  return N.then((p) => B("success", E, p)).catch((p) => B("error", f, p)), N;
}
Ue.promise = la;
Ue.success = bn("success");
Ue.info = bn("info");
Ue.error = bn("error");
Ue.warning = bn("warning");
Ue.warn = Ue.warning;
Ue.dark = (c, h) => sn(c, In("default", { theme: "dark", ...h }));
function ca(c) {
  ra(c);
}
Ue.dismiss = ca;
Ue.clearWaitingQueue = na;
Ue.isActive = vi;
Ue.update = (c, h = {}) => {
  let f = ta(c, h);
  if (f) {
    let { props: E, content: C } = f, w = { delay: 100, ...E, ...h, toastId: h.toastId || c, updateId: Oi() };
    w.toastId !== c && (w.staleId = c);
    let _ = w.render || C;
    delete w.render, sn(_, w);
  }
};
Ue.done = (c) => {
  Ue.update(c, { progress: 1 });
};
Ue.onChange = aa;
Ue.play = (c) => Mi(!0, c);
Ue.pause = (c) => Mi(!1, c);
function fa(c) {
  var h;
  let { subscribe: f, getSnapshot: E, setProps: C } = pr(sa(c)).current;
  C(c);
  let w = (h = as(f, E, E)) == null ? void 0 : h.slice();
  function _(B) {
    if (!w) return [];
    let N = /* @__PURE__ */ new Map();
    return c.newestOnTop && w.reverse(), w.forEach((p) => {
      let { position: M } = p.props;
      N.has(M) || N.set(M, []), N.get(M).push(p);
    }), Array.from(N, (p) => B(p[0], p[1]));
  }
  return { getToastToRender: _, isToastActive: vi, count: w?.length };
}
function ua(c) {
  let [h, f] = Jt(!1), [E, C] = Jt(!1), w = pr(null), _ = pr({ start: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, didMove: !1 }).current, { autoClose: B, pauseOnHover: N, closeToast: p, onClick: M, closeOnClick: v } = c;
  ia({ id: c.toastId, containerId: c.containerId, fn: f }), rn(() => {
    if (c.pauseOnFocusLoss) return ee(), () => {
      q();
    };
  }, [c.pauseOnFocusLoss]);
  function ee() {
    document.hasFocus() || oe(), window.addEventListener("focus", ue), window.addEventListener("blur", oe);
  }
  function q() {
    window.removeEventListener("focus", ue), window.removeEventListener("blur", oe);
  }
  function me(L) {
    if (c.draggable === !0 || c.draggable === L.pointerType) {
      G();
      let K = w.current;
      _.canCloseOnClick = !0, _.canDrag = !0, K.style.transition = "none", c.draggableDirection === "x" ? (_.start = L.clientX, _.removalDistance = K.offsetWidth * (c.draggablePercent / 100)) : (_.start = L.clientY, _.removalDistance = K.offsetHeight * (c.draggablePercent === 80 ? c.draggablePercent * 1.5 : c.draggablePercent) / 100);
    }
  }
  function j(L) {
    let { top: K, bottom: F, left: it, right: Ce } = w.current.getBoundingClientRect();
    L.nativeEvent.type !== "touchend" && c.pauseOnHover && L.clientX >= it && L.clientX <= Ce && L.clientY >= K && L.clientY <= F ? oe() : ue();
  }
  function ue() {
    f(!0);
  }
  function oe() {
    f(!1);
  }
  function G() {
    _.didMove = !1, document.addEventListener("pointermove", z), document.addEventListener("pointerup", be);
  }
  function V() {
    document.removeEventListener("pointermove", z), document.removeEventListener("pointerup", be);
  }
  function z(L) {
    let K = w.current;
    if (_.canDrag && K) {
      _.didMove = !0, h && oe(), c.draggableDirection === "x" ? _.delta = L.clientX - _.start : _.delta = L.clientY - _.start, _.start !== L.clientX && (_.canCloseOnClick = !1);
      let F = c.draggableDirection === "x" ? `${_.delta}px, var(--y)` : `0, calc(${_.delta}px + var(--y))`;
      K.style.transform = `translate3d(${F},0)`, K.style.opacity = `${1 - Math.abs(_.delta / _.removalDistance)}`;
    }
  }
  function be() {
    V();
    let L = w.current;
    if (_.canDrag && _.didMove && L) {
      if (_.canDrag = !1, Math.abs(_.delta) > _.removalDistance) {
        C(!0), c.closeToast(!0), c.collapseAll();
        return;
      }
      L.style.transition = "transform 0.2s, opacity 0.2s", L.style.removeProperty("transform"), L.style.removeProperty("opacity");
    }
  }
  let ce = { onPointerDown: me, onPointerUp: j };
  return B && N && (ce.onMouseEnter = oe, c.stacked || (ce.onMouseLeave = ue)), v && (ce.onClick = (L) => {
    M && M(L), _.canCloseOnClick && p(!0);
  }), { playToast: ue, pauseToast: oe, isRunning: h, preventExitTransition: E, toastRef: w, eventHandlers: ce };
}
var ha = typeof window < "u" ? Ii : rn, _n = ({ theme: c, type: h, isLoading: f, ...E }) => Pe.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: c === "colored" ? "currentColor" : `var(--toastify-icon-color-${h})`, ...E });
function da(c) {
  return Pe.createElement(_n, { ...c }, Pe.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}
function ga(c) {
  return Pe.createElement(_n, { ...c }, Pe.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}
function xa(c) {
  return Pe.createElement(_n, { ...c }, Pe.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}
function wa(c) {
  return Pe.createElement(_n, { ...c }, Pe.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}
function Ea() {
  return Pe.createElement("div", { className: "Toastify__spinner" });
}
var Yn = { info: ga, warning: da, success: xa, error: wa, spinner: Ea }, Aa = (c) => c in Yn;
function ma({ theme: c, type: h, isLoading: f, icon: E }) {
  let C = null, w = { theme: c, type: h };
  return E === !1 || (sr(E) ? C = E({ ...w, isLoading: f }) : yn(E) ? C = Zn(E, w) : f ? C = Yn.spinner() : Aa(h) && (C = Yn[h](w))), C;
}
var Ca = (c) => {
  let { isRunning: h, preventExitTransition: f, toastRef: E, eventHandlers: C, playToast: w } = ua(c), { closeButton: _, children: B, autoClose: N, onClick: p, type: M, hideProgressBar: v, closeToast: ee, transition: q, position: me, className: j, style: ue, progressClassName: oe, updateId: G, role: V, progress: z, rtl: be, toastId: ce, deleteToast: L, isIn: K, isLoading: F, closeOnClick: it, theme: Ce, ariaLabel: $ } = c, he = Cr("Toastify__toast", `Toastify__toast-theme--${Ce}`, `Toastify__toast--${M}`, { "Toastify__toast--rtl": be }, { "Toastify__toast--close-on-click": it }), Oe = sr(j) ? j({ rtl: be, position: me, type: M, defaultClassName: he }) : Cr(he, j), D = ma(c), Ve = !!z || !N, se = { closeToast: ee, type: M, theme: Ce }, It = null;
  return _ === !1 || (sr(_) ? It = _(se) : yn(_) ? It = Zn(_, se) : It = Ks(se)), Pe.createElement(q, { isIn: K, done: L, position: me, preventExitTransition: f, nodeRef: E, playToast: w }, Pe.createElement("div", { id: ce, tabIndex: 0, onClick: p, "data-in": K, className: Oe, ...C, style: ue, ref: E, ...K && { role: V, "aria-label": $ } }, D != null && Pe.createElement("div", { className: Cr("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !F }) }, D), Ni(B, c, !h), It, !c.customProgressBar && Pe.createElement(qs, { ...G && !Ve ? { key: `p-${G}` } : {}, rtl: be, theme: Ce, delay: N, isRunning: h, isIn: K, closeToast: ee, hide: v, type: M, className: oe, controlledProgress: Ve, progress: z || 0 })));
}, pa = (c, h = !1) => ({ enter: `Toastify--animate Toastify__${c}-enter`, exit: `Toastify--animate Toastify__${c}-exit`, appendPosition: h }), ya = js(pa("bounce", !0)), Ia = { position: "top-right", transition: ya, autoClose: 5e3, closeButton: !0, pauseOnHover: !0, pauseOnFocusLoss: !0, draggable: "touch", draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light", "aria-label": "Notifications Alt+T", hotKeys: (c) => c.altKey && c.code === "KeyT" };
function ba(c) {
  let h = { ...Ia, ...c }, f = c.stacked, [E, C] = Jt(!0), w = pr(null), { getToastToRender: _, isToastActive: B, count: N } = fa(h), { className: p, style: M, rtl: v, containerId: ee, hotKeys: q } = h;
  function me(ue) {
    let oe = Cr("Toastify__toast-container", `Toastify__toast-container--${ue}`, { "Toastify__toast-container--rtl": v });
    return sr(p) ? p({ position: ue, rtl: v, defaultClassName: oe }) : Cr(oe, Wn(p));
  }
  function j() {
    f && (C(!0), Ue.play());
  }
  return ha(() => {
    var ue;
    if (f) {
      let oe = w.current.querySelectorAll('[data-in="true"]'), G = 12, V = (ue = h.position) == null ? void 0 : ue.includes("top"), z = 0, be = 0;
      Array.from(oe).reverse().forEach((ce, L) => {
        let K = ce;
        K.classList.add("Toastify__toast--stacked"), L > 0 && (K.dataset.collapsed = `${E}`), K.dataset.pos || (K.dataset.pos = V ? "top" : "bot");
        let F = z * (E ? 0.2 : 1) + (E ? 0 : G * L);
        K.style.setProperty("--y", `${V ? F : F * -1}px`), K.style.setProperty("--g", `${G}`), K.style.setProperty("--s", `${1 - (E ? be : 0)}`), z += K.offsetHeight, be += 0.025;
      });
    }
  }, [E, N, f]), rn(() => {
    function ue(oe) {
      var G;
      let V = w.current;
      q(oe) && ((G = V.querySelector('[tabIndex="0"]')) == null || G.focus(), C(!1), Ue.pause()), oe.key === "Escape" && (document.activeElement === V || V != null && V.contains(document.activeElement)) && (C(!0), Ue.play());
    }
    return document.addEventListener("keydown", ue), () => {
      document.removeEventListener("keydown", ue);
    };
  }, [q]), Pe.createElement("section", { ref: w, className: "Toastify", id: ee, onMouseEnter: () => {
    f && (C(!1), Ue.pause());
  }, onMouseLeave: j, "aria-live": "polite", "aria-atomic": "false", "aria-relevant": "additions text", "aria-label": h["aria-label"] }, _((ue, oe) => {
    let G = oe.length ? { ...M } : { ...M, pointerEvents: "none" };
    return Pe.createElement("div", { tabIndex: -1, className: me(ue), "data-stacked": f, style: G, key: `c-${ue}` }, oe.map(({ content: V, props: z }) => Pe.createElement(Ca, { ...z, stacked: f, collapseAll: j, isIn: B(z.toastId, z.containerId), key: `t-${z.key}` }, V)));
  }));
}
const _a = {
  success: {
    position: "top-right",
    autoClose: 3e3,
    hideProgressBar: !1,
    closeOnClick: !0,
    pauseOnHover: !0,
    draggable: !0
  },
  error: {
    position: "top-right",
    autoClose: 3e3,
    hideProgressBar: !1,
    closeOnClick: !0,
    pauseOnHover: !0,
    draggable: !0
  },
  warning: {
    position: "top-right",
    autoClose: 3e3,
    hideProgressBar: !1,
    closeOnClick: !0,
    pauseOnHover: !0,
    draggable: !0
  },
  info: {
    position: "top-right",
    autoClose: 3e3,
    hideProgressBar: !1,
    closeOnClick: !0,
    pauseOnHover: !0,
    draggable: !0
  }
}, Lr = ({ type: c, message: h, config: f }) => {
  const C = {
    ..._a[c],
    ...f,
    type: c
  };
  Ue(h, C);
}, Pr = {
  // QR Scanner specific methods
  qrScanner: {
    success: (c) => Lr({
      type: "success",
      message: c,
      config: { autoClose: 3e3 }
    }),
    cameraAccessDenied: (c) => Lr({
      type: "error",
      message: c,
      config: { autoClose: 5e3 }
      // Longer for critical errors
    }),
    noCameraFound: (c) => Lr({
      type: "error",
      message: c,
      config: { autoClose: 3e3 }
    }),
    torchNotSupported: (c) => Lr({
      type: "warning",
      message: c,
      config: { autoClose: 3e3 }
    }),
    scannerFailed: (c) => Lr({
      type: "error",
      message: c,
      config: { autoClose: 3e3 }
    }),
    fileScanFailed: (c) => Lr({
      type: "error",
      message: c,
      config: { autoClose: 3e3 }
    })
  }
}, Sa = ({
  onScanSuccess: c,
  onError: h,
  config: f,
  renderSuccessState: E,
  renderErrorState: C,
  enableTorchToggle: w = !0,
  enableCameraSwitching: _ = !1,
  enableFileUpload: B = !0,
  show: N = !1,
  onClose: p
}) => {
  const [M, v] = Jt(!1), [ee, q] = Jt(null), [me, j] = Jt(null), [ue, oe] = Jt([]), [G, V] = Jt(""), [z, be] = Jt(!1), [ce, L] = Jt(!1), K = pr(null), F = pr(null), it = Br(
    (le) => {
      q(le), j(null), be(!0), c(le), setTimeout(() => {
        be(!1);
      }, 1e3);
    },
    [c, E]
  ), Ce = Br(
    (le) => {
      if (j(le), q(null), be(!1), h?.(le), !C && le instanceof ct)
        switch (le.type) {
          case nt.CAMERA_ACCESS_DENIED:
            Pr.qrScanner.cameraAccessDenied(_t.TOAST.CAMERA_ACCESS_DENIED);
            break;
          case nt.NO_CAMERA_FOUND:
            Pr.qrScanner.noCameraFound(_t.TOAST.NO_CAMERA_FOUND);
            break;
          case nt.TORCH_NOT_SUPPORTED:
            Pr.qrScanner.torchNotSupported(`${le.message}`);
            break;
          case nt.SCANNER_START_FAILED:
            Pr.qrScanner.scannerFailed(_t.TOAST.SCANNER_START_FAILED);
            break;
          case nt.SCANNER_NOT_INITIALIZED:
            Pr.qrScanner.scannerFailed(_t.TOAST.SCANNER_NOT_INITIALIZED);
            break;
          case nt.FILE_SCAN_FAILED:
            Pr.qrScanner.fileScanFailed(_t.TOAST.FILE_SCAN_FAILED);
            break;
          default:
            console.warn("Unhandled QRScannerCustomError:", le);
            break;
        }
    },
    [h, C]
  ), {
    containerRef: $,
    switchCamera: he,
    toggleTorch: Oe,
    scanFile: D,
    getCameras: Ve,
    stop: se
  } = Vs({
    onScanSuccess: it,
    onError: Ce,
    config: f,
    setLoadingScanner: L
  }), It = Br(async () => {
    try {
      const le = !M;
      await Oe?.(le), v(le);
    } catch (le) {
      Ce(le || _t.ERROR.FAILED_TO_TOGGLE_TORCH);
    }
  }, [M, Oe, Ce]), Mt = Br(
    async (le) => {
      if (le)
        try {
          await he?.(le, f), V(le);
        } catch {
          Ce(new Error(_t.ERROR.FAILED_TO_SWITCH_CAMERA));
        }
    },
    [he, f, Ce]
  ), Bt = Br(
    async (le) => {
      const ot = le.target.files?.[0];
      if (ot && D)
        try {
          const Ke = await D(ot);
          it(Ke), K.current && (K.current.value = "");
        } catch (Ke) {
          K.current && (K.current.value = ""), Ke instanceof ct ? Ce(Ke) : Ce(
            new ct(
              nt.FILE_SCAN_FAILED,
              _t.ERROR.FAILED_TO_SCAN_FILE,
              Ke
            )
          );
        }
    },
    [D, it, Ce]
  ), dr = Br(async () => {
    try {
      await se?.();
    } catch (le) {
      console.warn("Failed to stop scanner:", le);
    } finally {
      p?.();
    }
  }, [se, p]);
  return rn(() => {
    N && (async () => {
      if (!ue.length)
        try {
          if (Ve) {
            const ot = await Ve();
            oe([...ot]);
          }
        } catch (ot) {
          Ce(ot), oe([]);
        }
    })();
  }, [N]), N ? /* @__PURE__ */ Ne.jsxs("div", { className: "container-wrapper", ref: F, children: [
    /* @__PURE__ */ Ne.jsxs("div", { className: "top-controls", children: [
      /* @__PURE__ */ Ne.jsx("button", { onClick: dr, className: "icon-btn", children: /* @__PURE__ */ Ne.jsx("img", { src: Ws, alt: _t.ALT_TEXT.CLOSE, className: "icon-img" }) }),
      w && /* @__PURE__ */ Ne.jsx("button", { onClick: It, className: "icon-btn", children: /* @__PURE__ */ Ne.jsx("img", { src: Gs, alt: _t.ALT_TEXT.TOGGLE_TORCH, className: "icon-img" }) })
    ] }),
    /* @__PURE__ */ Ne.jsxs("div", { className: "scanner-area", children: [
      /* @__PURE__ */ Ne.jsxs("div", { className: "qr-scanner-frame", children: [
        /* @__PURE__ */ Ne.jsx("div", { className: `corner top-left ${z ? "success" : ""}` }),
        /* @__PURE__ */ Ne.jsx("div", { className: `corner top-right ${z ? "success" : ""}` }),
        /* @__PURE__ */ Ne.jsx(
          "div",
          {
            className: `corner bottom-left ${z ? "success" : ""}`
          }
        ),
        /* @__PURE__ */ Ne.jsx(
          "div",
          {
            className: `corner bottom-right ${z ? "success" : ""}`
          }
        )
      ] }),
      /* @__PURE__ */ Ne.jsx("div", { ref: $, id: "qr-reader", className: "scanner-video" }),
      (z || ce) && /* @__PURE__ */ Ne.jsx("div", { className: "notification-overlay", children: /* @__PURE__ */ Ne.jsx("div", { className: "notification-message", children: z ? /* @__PURE__ */ Ne.jsx("span", { className: "scanned-message", children: _t.UI.SCANNED_STATUS }) : /* @__PURE__ */ Ne.jsxs(Ne.Fragment, { children: [
        /* @__PURE__ */ Ne.jsx("div", { className: "loading-spinner" }),
        /* @__PURE__ */ Ne.jsx("span", { children: _t.UI.INITIALIZING_CAMERA })
      ] }) }) })
    ] }),
    E && ee && /* @__PURE__ */ Ne.jsx("div", { className: "custom-success", children: E(ee) }),
    C && me && /* @__PURE__ */ Ne.jsx("div", { className: "custom-error", children: C(me) }),
    /* @__PURE__ */ Ne.jsxs("div", { className: "bottom-controls", children: [
      _ && ue.length > 1 && /* @__PURE__ */ Ne.jsxs(
        "select",
        {
          onChange: (le) => Mt(le.target.value),
          value: G,
          id: "camera-select",
          children: [
            /* @__PURE__ */ Ne.jsx("option", { value: "", disabled: !0, children: _t.UI.SWITCH_CAMERA }),
            ue.map((le, ot) => /* @__PURE__ */ Ne.jsx("option", { value: le.deviceId, children: le.label || _t.CAMERA.DEFAULT_LABEL(le.deviceId) }, ot))
          ]
        }
      ),
      B && /* @__PURE__ */ Ne.jsxs(Ne.Fragment, { children: [
        /* @__PURE__ */ Ne.jsx(
          "input",
          {
            ref: K,
            type: "file",
            accept: "image/*",
            style: { display: "none" },
            onChange: Bt
          }
        ),
        /* @__PURE__ */ Ne.jsx(
          "button",
          {
            onClick: () => K.current?.click(),
            className: "icon-btn file-input-btn",
            children: /* @__PURE__ */ Ne.jsx(
              "img",
              {
                src: Hs,
                alt: _t.ALT_TEXT.FILE_UPLOAD,
                className: "icon-img"
              }
            )
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ Ne.jsx(ba, { style: { zIndex: 9999 } })
  ] }) : null;
};
export {
  Sa as QrScanner
};
//# sourceMappingURL=index.js.map
