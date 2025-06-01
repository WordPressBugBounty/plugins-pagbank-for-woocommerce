import { a as se } from "../ui/shared/axios-5e1c0094.js";
var f = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ee(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ce = {
  visa: {
    niceType: "Visa",
    type: "visa",
    patterns: [4],
    gaps: [4, 8, 12],
    lengths: [16, 18, 19],
    code: {
      name: "CVV",
      size: 3
    }
  },
  mastercard: {
    niceType: "Mastercard",
    type: "mastercard",
    patterns: [[51, 55], [2221, 2229], [223, 229], [23, 26], [270, 271], 2720],
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      name: "CVC",
      size: 3
    }
  },
  "american-express": {
    niceType: "American Express",
    type: "american-express",
    patterns: [34, 37],
    gaps: [4, 10],
    lengths: [15],
    code: {
      name: "CID",
      size: 4
    }
  },
  "diners-club": {
    niceType: "Diners Club",
    type: "diners-club",
    patterns: [[300, 305], 36, 38, 39],
    gaps: [4, 10],
    lengths: [14, 16, 19],
    code: {
      name: "CVV",
      size: 3
    }
  },
  discover: {
    niceType: "Discover",
    type: "discover",
    patterns: [6011, [644, 649], 65],
    gaps: [4, 8, 12],
    lengths: [16, 19],
    code: {
      name: "CID",
      size: 3
    }
  },
  jcb: {
    niceType: "JCB",
    type: "jcb",
    patterns: [2131, 1800, [3528, 3589]],
    gaps: [4, 8, 12],
    lengths: [16, 17, 18, 19],
    code: {
      name: "CVV",
      size: 3
    }
  },
  unionpay: {
    niceType: "UnionPay",
    type: "unionpay",
    patterns: [
      620,
      [624, 626],
      [62100, 62182],
      [62184, 62187],
      [62185, 62197],
      [62200, 62205],
      [622010, 622999],
      622018,
      [622019, 622999],
      [62207, 62209],
      [622126, 622925],
      [623, 626],
      6270,
      6272,
      6276,
      [627700, 627779],
      [627781, 627799],
      [6282, 6289],
      6291,
      6292,
      810,
      [8110, 8131],
      [8132, 8151],
      [8152, 8163],
      [8164, 8171]
    ],
    gaps: [4, 8, 12],
    lengths: [14, 15, 16, 17, 18, 19],
    code: {
      name: "CVN",
      size: 3
    }
  },
  maestro: {
    niceType: "Maestro",
    type: "maestro",
    patterns: [
      493698,
      [5e5, 504174],
      [504176, 506698],
      [506779, 508999],
      [56, 59],
      63,
      67,
      6
    ],
    gaps: [4, 8, 12],
    lengths: [12, 13, 14, 15, 16, 17, 18, 19],
    code: {
      name: "CVC",
      size: 3
    }
  },
  elo: {
    niceType: "Elo",
    type: "elo",
    patterns: [
      401178,
      401179,
      438935,
      457631,
      457632,
      431274,
      451416,
      457393,
      504175,
      [506699, 506778],
      [509e3, 509999],
      627780,
      636297,
      636368,
      [650031, 650033],
      [650035, 650051],
      [650405, 650439],
      [650485, 650538],
      [650541, 650598],
      [650700, 650718],
      [650720, 650727],
      [650901, 650978],
      [651652, 651679],
      [655e3, 655019],
      [655021, 655058]
    ],
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      name: "CVE",
      size: 3
    }
  },
  mir: {
    niceType: "Mir",
    type: "mir",
    patterns: [[2200, 2204]],
    gaps: [4, 8, 12],
    lengths: [16, 17, 18, 19],
    code: {
      name: "CVP2",
      size: 3
    }
  },
  hiper: {
    niceType: "Hiper",
    type: "hiper",
    patterns: [637095, 63737423, 63743358, 637568, 637599, 637609, 637612],
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      name: "CVC",
      size: 3
    }
  },
  hipercard: {
    niceType: "Hipercard",
    type: "hipercard",
    patterns: [606282],
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      name: "CVC",
      size: 3
    }
  }
}, le = ce, S = {}, T = {};
Object.defineProperty(T, "__esModule", { value: !0 });
T.clone = void 0;
function ue(e) {
  return e ? JSON.parse(JSON.stringify(e)) : null;
}
T.clone = ue;
var j = {};
Object.defineProperty(j, "__esModule", { value: !0 });
j.matches = void 0;
function de(e, r, t) {
  var n = String(r).length, a = e.substr(0, n), i = parseInt(a, 10);
  return r = parseInt(String(r).substr(0, a.length), 10), t = parseInt(String(t).substr(0, a.length), 10), i >= r && i <= t;
}
function fe(e, r) {
  return r = String(r), r.substring(0, e.length) === e.substring(0, r.length);
}
function pe(e, r) {
  return Array.isArray(r) ? de(e, r[0], r[1]) : fe(e, r);
}
j.matches = pe;
Object.defineProperty(S, "__esModule", { value: !0 });
S.addMatchingCardsToResults = void 0;
var me = T, he = j;
function ve(e, r, t) {
  var n, a;
  for (n = 0; n < r.patterns.length; n++) {
    var i = r.patterns[n];
    if (he.matches(e, i)) {
      var c = me.clone(r);
      Array.isArray(i) ? a = String(i[0]).length : a = String(i).length, e.length >= a && (c.matchStrength = a), t.push(c);
      break;
    }
  }
}
S.addMatchingCardsToResults = ve;
var $ = {};
Object.defineProperty($, "__esModule", { value: !0 });
$.isValidInputType = void 0;
function ge(e) {
  return typeof e == "string" || e instanceof String;
}
$.isValidInputType = ge;
var B = {};
Object.defineProperty(B, "__esModule", { value: !0 });
B.findBestMatch = void 0;
function ye(e) {
  var r = e.filter(function(t) {
    return t.matchStrength;
  }).length;
  return r > 0 && r === e.length;
}
function _e(e) {
  return ye(e) ? e.reduce(function(r, t) {
    return !r || Number(r.matchStrength) < Number(t.matchStrength) ? t : r;
  }) : null;
}
B.findBestMatch = _e;
var D = f && f.__assign || function() {
  return D = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, D.apply(this, arguments);
}, re = le, be = S, Ce = $, Ve = B, O = T, P = {}, d = {
  VISA: "visa",
  MASTERCARD: "mastercard",
  AMERICAN_EXPRESS: "american-express",
  DINERS_CLUB: "diners-club",
  DISCOVER: "discover",
  JCB: "jcb",
  UNIONPAY: "unionpay",
  MAESTRO: "maestro",
  ELO: "elo",
  MIR: "mir",
  HIPER: "hiper",
  HIPERCARD: "hipercard"
}, te = [
  d.VISA,
  d.MASTERCARD,
  d.AMERICAN_EXPRESS,
  d.DINERS_CLUB,
  d.DISCOVER,
  d.JCB,
  d.UNIONPAY,
  d.MAESTRO,
  d.ELO,
  d.MIR,
  d.HIPER,
  d.HIPERCARD
], g = O.clone(te);
function J(e) {
  return P[e] || re[e];
}
function we() {
  return g.map(function(e) {
    return O.clone(J(e));
  });
}
function q(e, r) {
  r === void 0 && (r = !1);
  var t = g.indexOf(e);
  if (!r && t === -1)
    throw new Error('"' + e + '" is not a supported card type.');
  return t;
}
function y(e) {
  var r = [];
  if (!Ce.isValidInputType(e))
    return r;
  if (e.length === 0)
    return we();
  g.forEach(function(n) {
    var a = J(n);
    be.addMatchingCardsToResults(e, a, r);
  });
  var t = Ve.findBestMatch(r);
  return t ? [t] : r;
}
y.getTypeInfo = function(e) {
  return O.clone(J(e));
};
y.removeCard = function(e) {
  var r = q(e);
  g.splice(r, 1);
};
y.addCard = function(e) {
  var r = q(e.type, !0);
  P[e.type] = e, r === -1 && g.push(e.type);
};
y.updateCard = function(e, r) {
  var t = P[e] || re[e];
  if (!t)
    throw new Error('"' + e + "\" is not a recognized type. Use `addCard` instead.'");
  if (r.type && t.type !== r.type)
    throw new Error("Cannot overwrite type parameter.");
  var n = O.clone(t);
  n = D(D({}, n), r), P[n.type] = n;
};
y.changeOrder = function(e, r) {
  var t = q(e);
  g.splice(t, 1), g.splice(r, 0, e);
};
y.resetModifications = function() {
  g = O.clone(te), P = {};
};
y.types = d;
var ne = y, x = {};
Object.defineProperty(x, "__esModule", { value: !0 });
x.cardholderName = void 0;
var Ee = /^[\d\s-]*$/, Ie = 255;
function E(e, r) {
  return { isValid: e, isPotentiallyValid: r };
}
function ke(e) {
  return typeof e != "string" ? E(!1, !1) : e.length === 0 ? E(!1, !0) : e.length > Ie ? E(!1, !1) : Ee.test(e) ? E(!1, !0) : E(!0, !0);
}
x.cardholderName = ke;
var L = {};
function Pe(e) {
  for (var r = 0, t = !1, n = e.length - 1, a; n >= 0; )
    a = parseInt(e.charAt(n), 10), t && (a *= 2, a > 9 && (a = a % 10 + 1)), t = !t, r += a, n--;
  return r % 10 === 0;
}
var Te = Pe;
Object.defineProperty(L, "__esModule", { value: !0 });
L.cardNumber = void 0;
var Oe = Te, W = ne;
function _(e, r, t) {
  return {
    card: e,
    isPotentiallyValid: r,
    isValid: t
  };
}
function Me(e, r) {
  r === void 0 && (r = {});
  var t, n, a;
  if (typeof e != "string" && typeof e != "number")
    return _(null, !1, !1);
  var i = String(e).replace(/-|\s/g, "");
  if (!/^\d*$/.test(i))
    return _(null, !1, !1);
  var c = W(i);
  if (c.length === 0)
    return _(null, !1, !1);
  if (c.length !== 1)
    return _(null, !0, !1);
  var o = c[0];
  if (r.maxLength && i.length > r.maxLength)
    return _(o, !1, !1);
  o.type === W.types.UNIONPAY && r.luhnValidateUnionPay !== !0 ? n = !0 : n = Oe(i), a = Math.max.apply(null, o.lengths), r.maxLength && (a = Math.min(r.maxLength, a));
  for (var l = 0; l < o.lengths.length; l++)
    if (o.lengths[l] === i.length)
      return t = i.length < a || n, _(o, t, n);
  return _(o, i.length < a, !1);
}
L.cardNumber = Me;
var Y = {}, U = {}, V = {};
Object.defineProperty(V, "__esModule", { value: !0 });
V.expirationYear = void 0;
var Ne = 19;
function v(e, r, t) {
  return {
    isValid: e,
    isPotentiallyValid: r,
    isCurrentYear: t || !1
  };
}
function Ae(e, r) {
  r === void 0 && (r = Ne);
  var t;
  if (typeof e != "string")
    return v(!1, !1);
  if (e.replace(/\s/g, "") === "")
    return v(!1, !0);
  if (!/^\d*$/.test(e))
    return v(!1, !1);
  var n = e.length;
  if (n < 2)
    return v(!1, !0);
  var a = (/* @__PURE__ */ new Date()).getFullYear();
  if (n === 3) {
    var i = e.slice(0, 2), c = String(a).slice(0, 2);
    return v(!1, i === c);
  }
  if (n > 4)
    return v(!1, !1);
  var o = parseInt(e, 10), l = Number(String(a).substr(2, 2)), m = !1;
  if (n === 2) {
    if (String(a).substr(0, 2) === e)
      return v(!1, !0);
    t = l === o, m = o >= l && o <= l + r;
  } else
    n === 4 && (t = a === o, m = o >= a && o <= a + r);
  return v(m, m, t);
}
V.expirationYear = Ae;
var H = {};
Object.defineProperty(H, "__esModule", { value: !0 });
H.isArray = void 0;
H.isArray = Array.isArray || function(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
};
Object.defineProperty(U, "__esModule", { value: !0 });
U.parseDate = void 0;
var De = V, Re = H;
function Se(e) {
  var r = Number(e[0]), t;
  return r === 0 ? 2 : r > 1 || r === 1 && Number(e[1]) > 2 ? 1 : r === 1 ? (t = e.substr(1), De.expirationYear(t).isPotentiallyValid ? 1 : 2) : e.length === 5 ? 1 : e.length > 5 ? 2 : 1;
}
function je(e) {
  var r;
  if (/^\d{4}-\d{1,2}$/.test(e) ? r = e.split("-").reverse() : /\//.test(e) ? r = e.split(/\s*\/\s*/g) : /\s/.test(e) && (r = e.split(/ +/g)), Re.isArray(r))
    return {
      month: r[0] || "",
      year: r.slice(1).join()
    };
  var t = Se(e), n = e.substr(0, t);
  return {
    month: n,
    year: e.substr(n.length)
  };
}
U.parseDate = je;
var M = {};
Object.defineProperty(M, "__esModule", { value: !0 });
M.expirationMonth = void 0;
function I(e, r, t) {
  return {
    isValid: e,
    isPotentiallyValid: r,
    isValidForThisYear: t || !1
  };
}
function $e(e) {
  var r = (/* @__PURE__ */ new Date()).getMonth() + 1;
  if (typeof e != "string")
    return I(!1, !1);
  if (e.replace(/\s/g, "") === "" || e === "0")
    return I(!1, !0);
  if (!/^\d*$/.test(e))
    return I(!1, !1);
  var t = parseInt(e, 10);
  if (isNaN(Number(e)))
    return I(!1, !1);
  var n = t > 0 && t < 13;
  return I(n, n, n && t >= r);
}
M.expirationMonth = $e;
var X = f && f.__assign || function() {
  return X = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, X.apply(this, arguments);
};
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.expirationDate = void 0;
var Be = U, xe = M, Le = V;
function k(e, r, t, n) {
  return {
    isValid: e,
    isPotentiallyValid: r,
    month: t,
    year: n
  };
}
function Ye(e, r) {
  var t;
  if (typeof e == "string")
    e = e.replace(/^(\d\d) (\d\d(\d\d)?)$/, "$1/$2"), t = Be.parseDate(String(e));
  else if (e !== null && typeof e == "object") {
    var n = X({}, e);
    t = {
      month: String(n.month),
      year: String(n.year)
    };
  } else
    return k(!1, !1, null, null);
  var a = xe.expirationMonth(t.month), i = Le.expirationYear(t.year, r);
  if (a.isValid) {
    if (i.isCurrentYear) {
      var c = a.isValidForThisYear;
      return k(c, c, t.month, t.year);
    }
    if (i.isValid)
      return k(!0, !0, t.month, t.year);
  }
  return a.isPotentiallyValid && i.isPotentiallyValid ? k(!1, !0, null, null) : k(!1, !1, null, null);
}
Y.expirationDate = Ye;
var Q = {};
Object.defineProperty(Q, "__esModule", { value: !0 });
Q.cvv = void 0;
var ae = 3;
function Ue(e, r) {
  for (var t = 0; t < e.length; t++)
    if (r === e[t])
      return !0;
  return !1;
}
function He(e) {
  for (var r = ae, t = 0; t < e.length; t++)
    r = e[t] > r ? e[t] : r;
  return r;
}
function C(e, r) {
  return { isValid: e, isPotentiallyValid: r };
}
function Qe(e, r) {
  return r === void 0 && (r = ae), r = r instanceof Array ? r : [r], typeof e != "string" || !/^\d*$/.test(e) ? C(!1, !1) : Ue(r, e.length) ? C(!0, !0) : e.length < Math.min.apply(null, r) ? C(!1, !0) : e.length > He(r) ? C(!1, !1) : C(!0, !0);
}
Q.cvv = Qe;
var z = {};
Object.defineProperty(z, "__esModule", { value: !0 });
z.postalCode = void 0;
var ze = 3;
function F(e, r) {
  return { isValid: e, isPotentiallyValid: r };
}
function Ge(e, r) {
  r === void 0 && (r = {});
  var t = r.minLength || ze;
  return typeof e != "string" ? F(!1, !1) : e.length < t ? F(!1, !0) : F(!0, !0);
}
z.postalCode = Ge;
var Fe = f && f.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t), Object.defineProperty(e, n, { enumerable: !0, get: function() {
    return r[t];
  } });
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), Xe = f && f.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), Je = f && f.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && Fe(r, e, t);
  return Xe(r, e), r;
}, qe = Je(ne), Ke = x, We = L, Ze = Y, er = M, rr = V, tr = Q, nr = z, ar = {
  creditCardType: qe,
  cardholderName: Ke.cardholderName,
  number: We.cardNumber,
  expirationDate: Ze.expirationDate,
  expirationMonth: er.expirationMonth,
  expirationYear: rr.expirationYear,
  cvv: tr.cvv,
  postalCode: nr.postalCode
}, ir = ar;
const N = /* @__PURE__ */ ee(ir);
function or(e) {
  return e && e.length ? e[0] : void 0;
}
var sr = or, cr = sr;
const lr = /* @__PURE__ */ ee(cr), R = {
  checkout: jQuery("form.checkout"),
  orderReview: jQuery("form#order_review")
}, Z = () => {
  const e = jQuery(document.body).hasClass("woocommerce-order-pay"), r = e ? R.orderReview : R.checkout;
  let t = jQuery(
    e ? ".woocommerce-notices-wrapper" : ".woocommerce-NoticeGroup-updateOrderReview, .woocommerce-NoticeGroup-checkout"
  );
  t.length > 0 || (t = r), jQuery.scroll_to_notices(t);
}, A = (e) => {
  if (jQuery(document.body).hasClass("woocommerce-order-pay")) {
    const t = jQuery(".woocommerce-notices-wrapper"), n = jQuery("form#order_review");
    t.empty(), t.append(
      '<div class="woocommerce-NoticeGroup woocommerce-NoticeGroup-checkout"><ul class="woocommerce-error" role="alert"><li>' + e + "</li></ul></div>"
    ), setTimeout(() => {
      n.removeClass("processing").unblock();
    }, 500), n.find(".input-text, select, input:checkbox").trigger("validate").trigger("blur"), Z();
  } else {
    jQuery(
      ".woocommerce-NoticeGroup-checkout, .woocommerce-error, .woocommerce-message"
    ).remove();
    const t = jQuery("form.checkout");
    t.prepend(
      '<div class="woocommerce-NoticeGroup woocommerce-NoticeGroup-checkout"><ul class="woocommerce-error" role="alert"><li>' + e + "</li></ul></div>"
    ), t.removeClass("processing").unblock(), t.find(".input-text, select, input:checkbox").trigger("validate").trigger("blur"), Z(), jQuery(document.body).trigger("checkout_error", [e]);
  }
}, ie = () => {
  const e = document.querySelector(
    "[name=wc-pagbank_credit_card-payment-token]:checked"
  );
  if (e !== null && e.value !== "new")
    return !0;
  try {
    const r = document.getElementById(
      "pagbank_credit_card-card-holder"
    ), t = document.getElementById(
      "pagbank_credit_card-card-number"
    ), n = document.getElementById(
      "pagbank_credit_card-card-expiry"
    ), a = document.getElementById(
      "pagbank_credit_card-card-cvc"
    );
    if (r == null || t == null || n == null || a == null)
      throw new Error(
        "Não foi possível encontrar os campos do cartão de crédito. Entre em contato com nosso suporte."
      );
    const i = (p) => p.length === 2 ? `20${p}` : p, o = (({
      holder: p,
      number: s,
      expiryDate: u,
      cvc: h
    }) => {
      if (!N.cardholderName(p).isValid)
        throw new Error(PagBankCheckoutCreditCardVariables.messages.invalid_holder_name);
      const K = N.number(s);
      if (K.card == null || !K.isValid)
        throw new Error(PagBankCheckoutCreditCardVariables.messages.invalid_card_number);
      const G = N.expirationDate(u);
      if (!G.isValid)
        throw new Error(
          PagBankCheckoutCreditCardVariables.messages.invalid_card_expiry_date
        );
      if (!N.cvv(h).isValid)
        throw new Error(PagBankCheckoutCreditCardVariables.messages.invalid_security_code);
      return {
        holder: p.trim(),
        number: s.replace(/\s/g, ""),
        expirationDate: {
          month: G.month,
          year: i(
            G.year
          )
        },
        cvc: h.trim()
      };
    })({
      holder: r.value,
      number: t.value,
      expiryDate: n.value,
      cvc: a.value
    }), l = PagSeguro.encryptCard({
      publicKey: PagBankCheckoutCreditCardVariables.settings.card_public_key,
      holder: o.holder,
      number: o.number,
      expMonth: o.expirationDate.month,
      expYear: o.expirationDate.year,
      securityCode: o.cvc
    }), m = {
      INVALID_NUMBER: PagBankCheckoutCreditCardVariables.messages.invalid_card_number,
      INVALID_SECURITY_CODE: PagBankCheckoutCreditCardVariables.messages.invalid_security_code,
      INVALID_EXPIRATION_MONTH: PagBankCheckoutCreditCardVariables.messages.invalid_card_expiry_date,
      INVALID_EXPIRATION_YEAR: PagBankCheckoutCreditCardVariables.messages.invalid_card_expiry_date,
      INVALID_PUBLIC_KEY: PagBankCheckoutCreditCardVariables.messages.invalid_public_key,
      INVALID_HOLDER: PagBankCheckoutCreditCardVariables.messages.invalid_holder_name
    };
    if (l.hasErrors) {
      const p = l.errors.map((s) => m[s.code]);
      throw new Error(lr(p));
    }
    const w = document.getElementById(
      "pagbank_credit_card-encrypted-card"
    ), b = document.getElementById(
      "pagbank_credit_card-card-bin"
    );
    if (w == null)
      throw new Error(PagBankCheckoutCreditCardVariables.messages.invalid_encrypted_card);
    if (b === null)
      throw new Error(PagBankCheckoutCreditCardVariables.messages.invalid_card_bin);
    return w.value = l.encryptedCard, b.value = o.number.substring(0, 6), !0;
  } catch (r) {
    return r instanceof Error && A(r.message), !1;
  }
};
R.orderReview.on(
  "submit",
  (e) => {
    e.preventDefault(), ie() && e.currentTarget.submit();
  }
);
R.checkout.on("checkout_place_order_pagbank_credit_card", ie);
const oe = () => {
  try {
    if (!(PagBankCheckoutCreditCardVariables.settings.installments_enabled && PagBankCheckoutCreditCardVariables.settings.transfer_of_interest_enabled))
      return;
    const r = jQuery("#order_review"), t = document.getElementById(
      "pagbank_credit_card-installments"
    ), n = document.getElementById(
      "pagbank_credit_card-card-number"
    );
    if (t === null)
      throw new Error("Installments select not found");
    if (n === null)
      throw new Error("Card number input not found");
    const a = t.getAttribute("data-nonce"), i = t.getAttribute("data-amount"), c = t.getAttribute("data-url");
    if (a === null || i === null || c === null)
      throw new Error("Invalid nonce, amount or url");
    const o = document.querySelectorAll(
      "[name=wc-pagbank_credit_card-payment-token]"
    ), l = (s) => {
      s ? r.addClass("processing").block({
        message: null,
        overlayCSS: {
          background: "#fff",
          opacity: 0.6
        }
      }) : r.removeClass("processing").unblock();
    }, m = (s) => {
      t.innerHTML = "", s.forEach((u) => {
        t.appendChild(
          new Option(u.title, u.installments.toString(), u.installments === 1)
        );
      }), t.removeAttribute("disabled");
    }, w = async (s) => {
      l(!0);
      try {
        const { data: u } = await se.get(c, {
          params: {
            nonce: s.nonce,
            amount: s.amount,
            card_bin: s.type === "card_bin" ? s.cardBin : void 0,
            payment_token: s.type === "payment_token" ? s.paymentToken : void 0
          }
        });
        m(u.data);
      } catch {
        const h = document.getElementById(
          "pagbank_credit_card-card-number"
        );
        h != null && (h.value = ""), A("Não foi possível calcular as parcelas. Tente novamente.");
      } finally {
        l(!1);
      }
    }, b = async (s) => {
      if (t.innerHTML = "", t.setAttribute("disabled", "disabled"), s === "new") {
        const u = n.value.replace(/\s/g, "").substring(0, 6);
        u !== null && u.length === 6 && w({
          type: "card_bin",
          nonce: a,
          amount: i,
          cardBin: u
        });
      } else
        w({
          type: "payment_token",
          nonce: a,
          amount: i,
          paymentToken: s
        });
    };
    o.forEach((s) => {
      s.addEventListener("change", (u) => {
        const h = u.target;
        h.checked && b(h.value);
      });
    }), (() => {
      const s = document.querySelector(
        "[name=wc-pagbank_credit_card-payment-token]:checked"
      );
      b(
        s === null ? "new" : s.value
      ), n.addEventListener("change", () => {
        b("new");
      });
    })();
  } catch (e) {
    e instanceof Error ? A(e.message) : A("Unknown error");
  }
};
jQuery(document.body).on("updated_checkout", oe);
jQuery(document).ready(() => {
  jQuery(document.body).hasClass("woocommerce-order-pay") && oe();
});
