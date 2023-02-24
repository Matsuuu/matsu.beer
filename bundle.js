(() => {
  // node_modules/@lit/reactive-element/css-tag.js
  var t = window;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var n = /* @__PURE__ */ new WeakMap();
  var o = class {
    constructor(t3, e4, n5) {
      if (this._$cssResult$ = true, n5 !== s)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t3, this.t = e4;
    }
    get styleSheet() {
      let t3 = this.o;
      const s5 = this.t;
      if (e && void 0 === t3) {
        const e4 = void 0 !== s5 && 1 === s5.length;
        e4 && (t3 = n.get(s5)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e4 && n.set(s5, t3));
      }
      return t3;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t3) => new o("string" == typeof t3 ? t3 : t3 + "", void 0, s);
  var i = (t3, ...e4) => {
    const n5 = 1 === t3.length ? t3[0] : e4.reduce((e5, s5, n6) => e5 + ((t4) => {
      if (true === t4._$cssResult$)
        return t4.cssText;
      if ("number" == typeof t4)
        return t4;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s5) + t3[n6 + 1], t3[0]);
    return new o(n5, t3, s);
  };
  var S = (s5, n5) => {
    e ? s5.adoptedStyleSheets = n5.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet) : n5.forEach((e4) => {
      const n6 = document.createElement("style"), o5 = t.litNonce;
      void 0 !== o5 && n6.setAttribute("nonce", o5), n6.textContent = e4.cssText, s5.appendChild(n6);
    });
  };
  var c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
    let e4 = "";
    for (const s5 of t4.cssRules)
      e4 += s5.cssText;
    return r(e4);
  })(t3) : t3;

  // node_modules/@lit/reactive-element/reactive-element.js
  var s2;
  var e2 = window;
  var r2 = e2.trustedTypes;
  var h = r2 ? r2.emptyScript : "";
  var o2 = e2.reactiveElementPolyfillSupport;
  var n2 = { toAttribute(t3, i3) {
    switch (i3) {
      case Boolean:
        t3 = t3 ? h : null;
        break;
      case Object:
      case Array:
        t3 = null == t3 ? t3 : JSON.stringify(t3);
    }
    return t3;
  }, fromAttribute(t3, i3) {
    let s5 = t3;
    switch (i3) {
      case Boolean:
        s5 = null !== t3;
        break;
      case Number:
        s5 = null === t3 ? null : Number(t3);
        break;
      case Object:
      case Array:
        try {
          s5 = JSON.parse(t3);
        } catch (t4) {
          s5 = null;
        }
    }
    return s5;
  } };
  var a = (t3, i3) => i3 !== t3 && (i3 == i3 || t3 == t3);
  var l = { attribute: true, type: String, converter: n2, reflect: false, hasChanged: a };
  var d = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this.u();
    }
    static addInitializer(t3) {
      var i3;
      this.finalize(), (null !== (i3 = this.h) && void 0 !== i3 ? i3 : this.h = []).push(t3);
    }
    static get observedAttributes() {
      this.finalize();
      const t3 = [];
      return this.elementProperties.forEach((i3, s5) => {
        const e4 = this._$Ep(s5, i3);
        void 0 !== e4 && (this._$Ev.set(e4, s5), t3.push(e4));
      }), t3;
    }
    static createProperty(t3, i3 = l) {
      if (i3.state && (i3.attribute = false), this.finalize(), this.elementProperties.set(t3, i3), !i3.noAccessor && !this.prototype.hasOwnProperty(t3)) {
        const s5 = "symbol" == typeof t3 ? Symbol() : "__" + t3, e4 = this.getPropertyDescriptor(t3, s5, i3);
        void 0 !== e4 && Object.defineProperty(this.prototype, t3, e4);
      }
    }
    static getPropertyDescriptor(t3, i3, s5) {
      return { get() {
        return this[i3];
      }, set(e4) {
        const r4 = this[t3];
        this[i3] = e4, this.requestUpdate(t3, r4, s5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t3) {
      return this.elementProperties.get(t3) || l;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized"))
        return false;
      this.finalized = true;
      const t3 = Object.getPrototypeOf(this);
      if (t3.finalize(), void 0 !== t3.h && (this.h = [...t3.h]), this.elementProperties = new Map(t3.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const t4 = this.properties, i3 = [...Object.getOwnPropertyNames(t4), ...Object.getOwnPropertySymbols(t4)];
        for (const s5 of i3)
          this.createProperty(s5, t4[s5]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i3) {
      const s5 = [];
      if (Array.isArray(i3)) {
        const e4 = new Set(i3.flat(1 / 0).reverse());
        for (const i4 of e4)
          s5.unshift(c(i4));
      } else
        void 0 !== i3 && s5.push(c(i3));
      return s5;
    }
    static _$Ep(t3, i3) {
      const s5 = i3.attribute;
      return false === s5 ? void 0 : "string" == typeof s5 ? s5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
    }
    u() {
      var t3;
      this._$E_ = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t3 = this.constructor.h) || void 0 === t3 || t3.forEach((t4) => t4(this));
    }
    addController(t3) {
      var i3, s5;
      (null !== (i3 = this._$ES) && void 0 !== i3 ? i3 : this._$ES = []).push(t3), void 0 !== this.renderRoot && this.isConnected && (null === (s5 = t3.hostConnected) || void 0 === s5 || s5.call(t3));
    }
    removeController(t3) {
      var i3;
      null === (i3 = this._$ES) || void 0 === i3 || i3.splice(this._$ES.indexOf(t3) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t3, i3) => {
        this.hasOwnProperty(i3) && (this._$Ei.set(i3, this[i3]), delete this[i3]);
      });
    }
    createRenderRoot() {
      var t3;
      const s5 = null !== (t3 = this.shadowRoot) && void 0 !== t3 ? t3 : this.attachShadow(this.constructor.shadowRootOptions);
      return S(s5, this.constructor.elementStyles), s5;
    }
    connectedCallback() {
      var t3;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
        var i3;
        return null === (i3 = t4.hostConnected) || void 0 === i3 ? void 0 : i3.call(t4);
      });
    }
    enableUpdating(t3) {
    }
    disconnectedCallback() {
      var t3;
      null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
        var i3;
        return null === (i3 = t4.hostDisconnected) || void 0 === i3 ? void 0 : i3.call(t4);
      });
    }
    attributeChangedCallback(t3, i3, s5) {
      this._$AK(t3, s5);
    }
    _$EO(t3, i3, s5 = l) {
      var e4;
      const r4 = this.constructor._$Ep(t3, s5);
      if (void 0 !== r4 && true === s5.reflect) {
        const h3 = (void 0 !== (null === (e4 = s5.converter) || void 0 === e4 ? void 0 : e4.toAttribute) ? s5.converter : n2).toAttribute(i3, s5.type);
        this._$El = t3, null == h3 ? this.removeAttribute(r4) : this.setAttribute(r4, h3), this._$El = null;
      }
    }
    _$AK(t3, i3) {
      var s5;
      const e4 = this.constructor, r4 = e4._$Ev.get(t3);
      if (void 0 !== r4 && this._$El !== r4) {
        const t4 = e4.getPropertyOptions(r4), h3 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== (null === (s5 = t4.converter) || void 0 === s5 ? void 0 : s5.fromAttribute) ? t4.converter : n2;
        this._$El = r4, this[r4] = h3.fromAttribute(i3, t4.type), this._$El = null;
      }
    }
    requestUpdate(t3, i3, s5) {
      let e4 = true;
      void 0 !== t3 && (((s5 = s5 || this.constructor.getPropertyOptions(t3)).hasChanged || a)(this[t3], i3) ? (this._$AL.has(t3) || this._$AL.set(t3, i3), true === s5.reflect && this._$El !== t3 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t3, s5))) : e4 = false), !this.isUpdatePending && e4 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = true;
      try {
        await this._$E_;
      } catch (t4) {
        Promise.reject(t4);
      }
      const t3 = this.scheduleUpdate();
      return null != t3 && await t3, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t3;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((t4, i4) => this[i4] = t4), this._$Ei = void 0);
      let i3 = false;
      const s5 = this._$AL;
      try {
        i3 = this.shouldUpdate(s5), i3 ? (this.willUpdate(s5), null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
          var i4;
          return null === (i4 = t4.hostUpdate) || void 0 === i4 ? void 0 : i4.call(t4);
        }), this.update(s5)) : this._$Ek();
      } catch (t4) {
        throw i3 = false, this._$Ek(), t4;
      }
      i3 && this._$AE(s5);
    }
    willUpdate(t3) {
    }
    _$AE(t3) {
      var i3;
      null === (i3 = this._$ES) || void 0 === i3 || i3.forEach((t4) => {
        var i4;
        return null === (i4 = t4.hostUpdated) || void 0 === i4 ? void 0 : i4.call(t4);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
    }
    _$Ek() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(t3) {
      return true;
    }
    update(t3) {
      void 0 !== this._$EC && (this._$EC.forEach((t4, i3) => this._$EO(i3, this[i3], t4)), this._$EC = void 0), this._$Ek();
    }
    updated(t3) {
    }
    firstUpdated(t3) {
    }
  };
  d.finalized = true, d.elementProperties = /* @__PURE__ */ new Map(), d.elementStyles = [], d.shadowRootOptions = { mode: "open" }, null == o2 || o2({ ReactiveElement: d }), (null !== (s2 = e2.reactiveElementVersions) && void 0 !== s2 ? s2 : e2.reactiveElementVersions = []).push("1.6.1");

  // node_modules/lit-html/lit-html.js
  var t2;
  var i2 = window;
  var s3 = i2.trustedTypes;
  var e3 = s3 ? s3.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
  var o3 = `lit$${(Math.random() + "").slice(9)}$`;
  var n3 = "?" + o3;
  var l2 = `<${n3}>`;
  var h2 = document;
  var r3 = (t3 = "") => h2.createComment(t3);
  var d2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
  var u = Array.isArray;
  var c2 = (t3) => u(t3) || "function" == typeof (null == t3 ? void 0 : t3[Symbol.iterator]);
  var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var a2 = /-->/g;
  var f = />/g;
  var _ = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var m = /'/g;
  var p = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var g = (t3) => (i3, ...s5) => ({ _$litType$: t3, strings: i3, values: s5 });
  var y = g(1);
  var w = g(2);
  var x = Symbol.for("lit-noChange");
  var b = Symbol.for("lit-nothing");
  var T = /* @__PURE__ */ new WeakMap();
  var A = h2.createTreeWalker(h2, 129, null, false);
  var E = (t3, i3) => {
    const s5 = t3.length - 1, n5 = [];
    let h3, r4 = 2 === i3 ? "<svg>" : "", d3 = v;
    for (let i4 = 0; i4 < s5; i4++) {
      const s6 = t3[i4];
      let e4, u3, c3 = -1, g2 = 0;
      for (; g2 < s6.length && (d3.lastIndex = g2, u3 = d3.exec(s6), null !== u3); )
        g2 = d3.lastIndex, d3 === v ? "!--" === u3[1] ? d3 = a2 : void 0 !== u3[1] ? d3 = f : void 0 !== u3[2] ? ($.test(u3[2]) && (h3 = RegExp("</" + u3[2], "g")), d3 = _) : void 0 !== u3[3] && (d3 = _) : d3 === _ ? ">" === u3[0] ? (d3 = null != h3 ? h3 : v, c3 = -1) : void 0 === u3[1] ? c3 = -2 : (c3 = d3.lastIndex - u3[2].length, e4 = u3[1], d3 = void 0 === u3[3] ? _ : '"' === u3[3] ? p : m) : d3 === p || d3 === m ? d3 = _ : d3 === a2 || d3 === f ? d3 = v : (d3 = _, h3 = void 0);
      const y2 = d3 === _ && t3[i4 + 1].startsWith("/>") ? " " : "";
      r4 += d3 === v ? s6 + l2 : c3 >= 0 ? (n5.push(e4), s6.slice(0, c3) + "$lit$" + s6.slice(c3) + o3 + y2) : s6 + o3 + (-2 === c3 ? (n5.push(void 0), i4) : y2);
    }
    const u2 = r4 + (t3[s5] || "<?>") + (2 === i3 ? "</svg>" : "");
    if (!Array.isArray(t3) || !t3.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [void 0 !== e3 ? e3.createHTML(u2) : u2, n5];
  };
  var C = class {
    constructor({ strings: t3, _$litType$: i3 }, e4) {
      let l4;
      this.parts = [];
      let h3 = 0, d3 = 0;
      const u2 = t3.length - 1, c3 = this.parts, [v2, a3] = E(t3, i3);
      if (this.el = C.createElement(v2, e4), A.currentNode = this.el.content, 2 === i3) {
        const t4 = this.el.content, i4 = t4.firstChild;
        i4.remove(), t4.append(...i4.childNodes);
      }
      for (; null !== (l4 = A.nextNode()) && c3.length < u2; ) {
        if (1 === l4.nodeType) {
          if (l4.hasAttributes()) {
            const t4 = [];
            for (const i4 of l4.getAttributeNames())
              if (i4.endsWith("$lit$") || i4.startsWith(o3)) {
                const s5 = a3[d3++];
                if (t4.push(i4), void 0 !== s5) {
                  const t5 = l4.getAttribute(s5.toLowerCase() + "$lit$").split(o3), i5 = /([.?@])?(.*)/.exec(s5);
                  c3.push({ type: 1, index: h3, name: i5[2], strings: t5, ctor: "." === i5[1] ? M : "?" === i5[1] ? k : "@" === i5[1] ? H : S2 });
                } else
                  c3.push({ type: 6, index: h3 });
              }
            for (const i4 of t4)
              l4.removeAttribute(i4);
          }
          if ($.test(l4.tagName)) {
            const t4 = l4.textContent.split(o3), i4 = t4.length - 1;
            if (i4 > 0) {
              l4.textContent = s3 ? s3.emptyScript : "";
              for (let s5 = 0; s5 < i4; s5++)
                l4.append(t4[s5], r3()), A.nextNode(), c3.push({ type: 2, index: ++h3 });
              l4.append(t4[i4], r3());
            }
          }
        } else if (8 === l4.nodeType)
          if (l4.data === n3)
            c3.push({ type: 2, index: h3 });
          else {
            let t4 = -1;
            for (; -1 !== (t4 = l4.data.indexOf(o3, t4 + 1)); )
              c3.push({ type: 7, index: h3 }), t4 += o3.length - 1;
          }
        h3++;
      }
    }
    static createElement(t3, i3) {
      const s5 = h2.createElement("template");
      return s5.innerHTML = t3, s5;
    }
  };
  function P(t3, i3, s5 = t3, e4) {
    var o5, n5, l4, h3;
    if (i3 === x)
      return i3;
    let r4 = void 0 !== e4 ? null === (o5 = s5._$Co) || void 0 === o5 ? void 0 : o5[e4] : s5._$Cl;
    const u2 = d2(i3) ? void 0 : i3._$litDirective$;
    return (null == r4 ? void 0 : r4.constructor) !== u2 && (null === (n5 = null == r4 ? void 0 : r4._$AO) || void 0 === n5 || n5.call(r4, false), void 0 === u2 ? r4 = void 0 : (r4 = new u2(t3), r4._$AT(t3, s5, e4)), void 0 !== e4 ? (null !== (l4 = (h3 = s5)._$Co) && void 0 !== l4 ? l4 : h3._$Co = [])[e4] = r4 : s5._$Cl = r4), void 0 !== r4 && (i3 = P(t3, r4._$AS(t3, i3.values), r4, e4)), i3;
  }
  var V = class {
    constructor(t3, i3) {
      this.u = [], this._$AN = void 0, this._$AD = t3, this._$AM = i3;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    v(t3) {
      var i3;
      const { el: { content: s5 }, parts: e4 } = this._$AD, o5 = (null !== (i3 = null == t3 ? void 0 : t3.creationScope) && void 0 !== i3 ? i3 : h2).importNode(s5, true);
      A.currentNode = o5;
      let n5 = A.nextNode(), l4 = 0, r4 = 0, d3 = e4[0];
      for (; void 0 !== d3; ) {
        if (l4 === d3.index) {
          let i4;
          2 === d3.type ? i4 = new N(n5, n5.nextSibling, this, t3) : 1 === d3.type ? i4 = new d3.ctor(n5, d3.name, d3.strings, this, t3) : 6 === d3.type && (i4 = new I(n5, this, t3)), this.u.push(i4), d3 = e4[++r4];
        }
        l4 !== (null == d3 ? void 0 : d3.index) && (n5 = A.nextNode(), l4++);
      }
      return o5;
    }
    p(t3) {
      let i3 = 0;
      for (const s5 of this.u)
        void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t3, s5, i3), i3 += s5.strings.length - 2) : s5._$AI(t3[i3])), i3++;
    }
  };
  var N = class {
    constructor(t3, i3, s5, e4) {
      var o5;
      this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = t3, this._$AB = i3, this._$AM = s5, this.options = e4, this._$Cm = null === (o5 = null == e4 ? void 0 : e4.isConnected) || void 0 === o5 || o5;
    }
    get _$AU() {
      var t3, i3;
      return null !== (i3 = null === (t3 = this._$AM) || void 0 === t3 ? void 0 : t3._$AU) && void 0 !== i3 ? i3 : this._$Cm;
    }
    get parentNode() {
      let t3 = this._$AA.parentNode;
      const i3 = this._$AM;
      return void 0 !== i3 && 11 === t3.nodeType && (t3 = i3.parentNode), t3;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t3, i3 = this) {
      t3 = P(this, t3, i3), d2(t3) ? t3 === b || null == t3 || "" === t3 ? (this._$AH !== b && this._$AR(), this._$AH = b) : t3 !== this._$AH && t3 !== x && this.g(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : c2(t3) ? this.k(t3) : this.g(t3);
    }
    O(t3, i3 = this._$AB) {
      return this._$AA.parentNode.insertBefore(t3, i3);
    }
    T(t3) {
      this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
    }
    g(t3) {
      this._$AH !== b && d2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(h2.createTextNode(t3)), this._$AH = t3;
    }
    $(t3) {
      var i3;
      const { values: s5, _$litType$: e4 } = t3, o5 = "number" == typeof e4 ? this._$AC(t3) : (void 0 === e4.el && (e4.el = C.createElement(e4.h, this.options)), e4);
      if ((null === (i3 = this._$AH) || void 0 === i3 ? void 0 : i3._$AD) === o5)
        this._$AH.p(s5);
      else {
        const t4 = new V(o5, this), i4 = t4.v(this.options);
        t4.p(s5), this.T(i4), this._$AH = t4;
      }
    }
    _$AC(t3) {
      let i3 = T.get(t3.strings);
      return void 0 === i3 && T.set(t3.strings, i3 = new C(t3)), i3;
    }
    k(t3) {
      u(this._$AH) || (this._$AH = [], this._$AR());
      const i3 = this._$AH;
      let s5, e4 = 0;
      for (const o5 of t3)
        e4 === i3.length ? i3.push(s5 = new N(this.O(r3()), this.O(r3()), this, this.options)) : s5 = i3[e4], s5._$AI(o5), e4++;
      e4 < i3.length && (this._$AR(s5 && s5._$AB.nextSibling, e4), i3.length = e4);
    }
    _$AR(t3 = this._$AA.nextSibling, i3) {
      var s5;
      for (null === (s5 = this._$AP) || void 0 === s5 || s5.call(this, false, true, i3); t3 && t3 !== this._$AB; ) {
        const i4 = t3.nextSibling;
        t3.remove(), t3 = i4;
      }
    }
    setConnected(t3) {
      var i3;
      void 0 === this._$AM && (this._$Cm = t3, null === (i3 = this._$AP) || void 0 === i3 || i3.call(this, t3));
    }
  };
  var S2 = class {
    constructor(t3, i3, s5, e4, o5) {
      this.type = 1, this._$AH = b, this._$AN = void 0, this.element = t3, this.name = i3, this._$AM = e4, this.options = o5, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = b;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3, i3 = this, s5, e4) {
      const o5 = this.strings;
      let n5 = false;
      if (void 0 === o5)
        t3 = P(this, t3, i3, 0), n5 = !d2(t3) || t3 !== this._$AH && t3 !== x, n5 && (this._$AH = t3);
      else {
        const e5 = t3;
        let l4, h3;
        for (t3 = o5[0], l4 = 0; l4 < o5.length - 1; l4++)
          h3 = P(this, e5[s5 + l4], i3, l4), h3 === x && (h3 = this._$AH[l4]), n5 || (n5 = !d2(h3) || h3 !== this._$AH[l4]), h3 === b ? t3 = b : t3 !== b && (t3 += (null != h3 ? h3 : "") + o5[l4 + 1]), this._$AH[l4] = h3;
      }
      n5 && !e4 && this.j(t3);
    }
    j(t3) {
      t3 === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t3 ? t3 : "");
    }
  };
  var M = class extends S2 {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t3) {
      this.element[this.name] = t3 === b ? void 0 : t3;
    }
  };
  var R = s3 ? s3.emptyScript : "";
  var k = class extends S2 {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t3) {
      t3 && t3 !== b ? this.element.setAttribute(this.name, R) : this.element.removeAttribute(this.name);
    }
  };
  var H = class extends S2 {
    constructor(t3, i3, s5, e4, o5) {
      super(t3, i3, s5, e4, o5), this.type = 5;
    }
    _$AI(t3, i3 = this) {
      var s5;
      if ((t3 = null !== (s5 = P(this, t3, i3, 0)) && void 0 !== s5 ? s5 : b) === x)
        return;
      const e4 = this._$AH, o5 = t3 === b && e4 !== b || t3.capture !== e4.capture || t3.once !== e4.once || t3.passive !== e4.passive, n5 = t3 !== b && (e4 === b || o5);
      o5 && this.element.removeEventListener(this.name, this, e4), n5 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
    }
    handleEvent(t3) {
      var i3, s5;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s5 = null === (i3 = this.options) || void 0 === i3 ? void 0 : i3.host) && void 0 !== s5 ? s5 : this.element, t3) : this._$AH.handleEvent(t3);
    }
  };
  var I = class {
    constructor(t3, i3, s5) {
      this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i3, this.options = s5;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3) {
      P(this, t3);
    }
  };
  var z = i2.litHtmlPolyfillSupport;
  null == z || z(C, N), (null !== (t2 = i2.litHtmlVersions) && void 0 !== t2 ? t2 : i2.litHtmlVersions = []).push("2.6.1");
  var Z = (t3, i3, s5) => {
    var e4, o5;
    const n5 = null !== (e4 = null == s5 ? void 0 : s5.renderBefore) && void 0 !== e4 ? e4 : i3;
    let l4 = n5._$litPart$;
    if (void 0 === l4) {
      const t4 = null !== (o5 = null == s5 ? void 0 : s5.renderBefore) && void 0 !== o5 ? o5 : null;
      n5._$litPart$ = l4 = new N(i3.insertBefore(r3(), t4), t4, void 0, null != s5 ? s5 : {});
    }
    return l4._$AI(t3), l4;
  };

  // node_modules/lit-element/lit-element.js
  var l3;
  var o4;
  var s4 = class extends d {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var t3, e4;
      const i3 = super.createRenderRoot();
      return null !== (t3 = (e4 = this.renderOptions).renderBefore) && void 0 !== t3 || (e4.renderBefore = i3.firstChild), i3;
    }
    update(t3) {
      const i3 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = Z(i3, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t3;
      super.connectedCallback(), null === (t3 = this._$Do) || void 0 === t3 || t3.setConnected(true);
    }
    disconnectedCallback() {
      var t3;
      super.disconnectedCallback(), null === (t3 = this._$Do) || void 0 === t3 || t3.setConnected(false);
    }
    render() {
      return x;
    }
  };
  s4.finalized = true, s4._$litElement$ = true, null === (l3 = globalThis.litElementHydrateSupport) || void 0 === l3 || l3.call(globalThis, { LitElement: s4 });
  var n4 = globalThis.litElementPolyfillSupport;
  null == n4 || n4({ LitElement: s4 });
  (null !== (o4 = globalThis.litElementVersions) && void 0 !== o4 ? o4 : globalThis.litElementVersions = []).push("3.2.2");

  // node_modules/webcomponent-qr-code/dist/index.js
  !function(t3) {
    var e4 = {};
    function r4(n5) {
      if (e4[n5])
        return e4[n5].exports;
      var o5 = e4[n5] = { i: n5, l: false, exports: {} };
      return t3[n5].call(o5.exports, o5, o5.exports, r4), o5.l = true, o5.exports;
    }
    r4.m = t3, r4.c = e4, r4.d = function(t4, e5, n5) {
      r4.o(t4, e5) || Object.defineProperty(t4, e5, { enumerable: true, get: n5 });
    }, r4.r = function(t4) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t4, "__esModule", { value: true });
    }, r4.t = function(t4, e5) {
      if (1 & e5 && (t4 = r4(t4)), 8 & e5)
        return t4;
      if (4 & e5 && "object" == typeof t4 && t4 && t4.__esModule)
        return t4;
      var n5 = /* @__PURE__ */ Object.create(null);
      if (r4.r(n5), Object.defineProperty(n5, "default", { enumerable: true, value: t4 }), 2 & e5 && "string" != typeof t4)
        for (var o5 in t4)
          r4.d(n5, o5, function(e6) {
            return t4[e6];
          }.bind(null, o5));
      return n5;
    }, r4.n = function(t4) {
      var e5 = t4 && t4.__esModule ? function() {
        return t4.default;
      } : function() {
        return t4;
      };
      return r4.d(e5, "a", e5), e5;
    }, r4.o = function(t4, e5) {
      return Object.prototype.hasOwnProperty.call(t4, e5);
    }, r4.p = "", r4(r4.s = 1);
  }([function(t3, e4, r4) {
    var n5, o5, i3;
    o5 = [], void 0 === (i3 = "function" == typeof (n5 = function() {
      for (var t4 = [null, [[10, 7, 17, 13], [1, 1, 1, 1], []], [[16, 10, 28, 22], [1, 1, 1, 1], [4, 16]], [[26, 15, 22, 18], [1, 1, 2, 2], [4, 20]], [[18, 20, 16, 26], [2, 1, 4, 2], [4, 24]], [[24, 26, 22, 18], [2, 1, 4, 4], [4, 28]], [[16, 18, 28, 24], [4, 2, 4, 4], [4, 32]], [[18, 20, 26, 18], [4, 2, 5, 6], [4, 20, 36]], [[22, 24, 26, 22], [4, 2, 6, 6], [4, 22, 40]], [[22, 30, 24, 20], [5, 2, 8, 8], [4, 24, 44]], [[26, 18, 28, 24], [5, 4, 8, 8], [4, 26, 48]], [[30, 20, 24, 28], [5, 4, 11, 8], [4, 28, 52]], [[22, 24, 28, 26], [8, 4, 11, 10], [4, 30, 56]], [[22, 26, 22, 24], [9, 4, 16, 12], [4, 32, 60]], [[24, 30, 24, 20], [9, 4, 16, 16], [4, 24, 44, 64]], [[24, 22, 24, 30], [10, 6, 18, 12], [4, 24, 46, 68]], [[28, 24, 30, 24], [10, 6, 16, 17], [4, 24, 48, 72]], [[28, 28, 28, 28], [11, 6, 19, 16], [4, 28, 52, 76]], [[26, 30, 28, 28], [13, 6, 21, 18], [4, 28, 54, 80]], [[26, 28, 26, 26], [14, 7, 25, 21], [4, 28, 56, 84]], [[26, 28, 28, 30], [16, 8, 25, 20], [4, 32, 60, 88]], [[26, 28, 30, 28], [17, 8, 25, 23], [4, 26, 48, 70, 92]], [[28, 28, 24, 30], [17, 9, 34, 23], [4, 24, 48, 72, 96]], [[28, 30, 30, 30], [18, 9, 30, 25], [4, 28, 52, 76, 100]], [[28, 30, 30, 30], [20, 10, 32, 27], [4, 26, 52, 78, 104]], [[28, 26, 30, 30], [21, 12, 35, 29], [4, 30, 56, 82, 108]], [[28, 28, 30, 28], [23, 12, 37, 34], [4, 28, 56, 84, 112]], [[28, 30, 30, 30], [25, 12, 40, 34], [4, 32, 60, 88, 116]], [[28, 30, 30, 30], [26, 13, 42, 35], [4, 24, 48, 72, 96, 120]], [[28, 30, 30, 30], [28, 14, 45, 38], [4, 28, 52, 76, 100, 124]], [[28, 30, 30, 30], [29, 15, 48, 40], [4, 24, 50, 76, 102, 128]], [[28, 30, 30, 30], [31, 16, 51, 43], [4, 28, 54, 80, 106, 132]], [[28, 30, 30, 30], [33, 17, 54, 45], [4, 32, 58, 84, 110, 136]], [[28, 30, 30, 30], [35, 18, 57, 48], [4, 28, 56, 84, 112, 140]], [[28, 30, 30, 30], [37, 19, 60, 51], [4, 32, 60, 88, 116, 144]], [[28, 30, 30, 30], [38, 19, 63, 53], [4, 28, 52, 76, 100, 124, 148]], [[28, 30, 30, 30], [40, 20, 66, 56], [4, 22, 48, 74, 100, 126, 152]], [[28, 30, 30, 30], [43, 21, 70, 59], [4, 26, 52, 78, 104, 130, 156]], [[28, 30, 30, 30], [45, 22, 74, 62], [4, 30, 56, 82, 108, 134, 160]], [[28, 30, 30, 30], [47, 24, 77, 65], [4, 24, 52, 80, 108, 136, 164]], [[28, 30, 30, 30], [49, 25, 81, 68], [4, 28, 56, 84, 112, 140, 168]]], e5 = /^\d*$/, r5 = /^[A-Za-z0-9 $%*+\-./:]*$/, n6 = /^[A-Z0-9 $%*+\-./:]*$/, o6 = [], i4 = [-1], a3 = 0, u2 = 1; a3 < 255; ++a3)
        o6.push(u2), i4[u2] = a3, u2 = 2 * u2 ^ (u2 >= 128 ? 285 : 0);
      var f2 = [[]];
      for (a3 = 0; a3 < 30; ++a3) {
        for (var c3 = f2[a3], s5 = [], l4 = 0; l4 <= a3; ++l4) {
          var h3 = l4 < a3 ? o6[c3[l4]] : 0, p2 = o6[(a3 + (c3[l4 - 1] || 0)) % 255];
          s5.push(i4[h3 ^ p2]);
        }
        f2.push(s5);
      }
      var d3 = {};
      for (a3 = 0; a3 < 45; ++a3)
        d3["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".charAt(a3)] = a3;
      var v2 = [function(t5, e6) {
        return (t5 + e6) % 2 == 0;
      }, function(t5, e6) {
        return t5 % 2 == 0;
      }, function(t5, e6) {
        return e6 % 3 == 0;
      }, function(t5, e6) {
        return (t5 + e6) % 3 == 0;
      }, function(t5, e6) {
        return ((t5 / 2 | 0) + (e6 / 3 | 0)) % 2 == 0;
      }, function(t5, e6) {
        return t5 * e6 % 2 + t5 * e6 % 3 == 0;
      }, function(t5, e6) {
        return (t5 * e6 % 2 + t5 * e6 % 3) % 2 == 0;
      }, function(t5, e6) {
        return ((t5 + e6) % 2 + t5 * e6 % 3) % 2 == 0;
      }], g2 = function(t5) {
        return t5 > 6;
      }, y2 = function(e6, r6) {
        var n7 = -8 & function(e7) {
          var r7 = t4[e7], n8 = 16 * e7 * e7 + 128 * e7 + 64;
          return g2(e7) && (n8 -= 36), r7[2].length && (n8 -= 25 * r7[2].length * r7[2].length - 10 * r7[2].length - 55), n8;
        }(e6), o7 = t4[e6];
        return n7 -= 8 * o7[0][r6] * o7[1][r6];
      }, b2 = function(t5, e6) {
        switch (e6) {
          case 1:
            return t5 < 10 ? 10 : t5 < 27 ? 12 : 14;
          case 2:
            return t5 < 10 ? 9 : t5 < 27 ? 11 : 13;
          case 4:
            return t5 < 10 ? 8 : 16;
          case 8:
            return t5 < 10 ? 8 : t5 < 27 ? 10 : 12;
        }
      }, m2 = function(t5, e6, r6) {
        var n7 = y2(t5, r6) - 4 - b2(t5, e6);
        switch (e6) {
          case 1:
            return 3 * (n7 / 10 | 0) + (n7 % 10 < 4 ? 0 : n7 % 10 < 7 ? 1 : 2);
          case 2:
            return 2 * (n7 / 11 | 0) + (n7 % 11 < 6 ? 0 : 1);
          case 4:
            return n7 / 8 | 0;
          case 8:
            return n7 / 13 | 0;
        }
      }, w2 = function(t5, e6) {
        for (var r6 = t5.slice(0), n7 = t5.length, a4 = e6.length, u3 = 0; u3 < a4; ++u3)
          r6.push(0);
        for (u3 = 0; u3 < n7; ) {
          var f3 = i4[r6[u3++]];
          if (f3 >= 0)
            for (var c4 = 0; c4 < a4; ++c4)
              r6[u3 + c4] ^= o6[(f3 + e6[c4]) % 255];
        }
        return r6.slice(n7);
      }, O = function(t5, e6, r6, n7) {
        for (var o7 = t5 << n7, i5 = e6 - 1; i5 >= 0; --i5)
          o7 >> n7 + i5 & 1 && (o7 ^= r6 << i5);
        return t5 << n7 | o7;
      }, x2 = function(t5, e6, r6) {
        for (var n7 = v2[r6], o7 = t5.length, i5 = 0; i5 < o7; ++i5)
          for (var a4 = 0; a4 < o7; ++a4)
            e6[i5][a4] || (t5[i5][a4] ^= n7(i5, a4));
        return t5;
      }, P2 = function(t5, e6, r6, n7) {
        for (var o7 = t5.length, i5 = 21522 ^ O(r6 << 3 | n7, 5, 1335, 10), a4 = 0; a4 < 15; ++a4) {
          var u3 = [o7 - 1, o7 - 2, o7 - 3, o7 - 4, o7 - 5, o7 - 6, o7 - 7, o7 - 8, 7, 5, 4, 3, 2, 1, 0][a4];
          t5[[0, 1, 2, 3, 4, 5, 7, 8, o7 - 7, o7 - 6, o7 - 5, o7 - 4, o7 - 3, o7 - 2, o7 - 1][a4]][8] = t5[8][u3] = i5 >> a4 & 1;
        }
        return t5;
      }, j = function(t5) {
        for (var e6 = function(t6) {
          for (var e7 = 0, r7 = 0; r7 < t6.length; ++r7)
            t6[r7] >= 5 && (e7 += t6[r7] - 5 + 3);
          for (r7 = 5; r7 < t6.length; r7 += 2) {
            var n8 = t6[r7];
            t6[r7 - 1] == n8 && t6[r7 - 2] == 3 * n8 && t6[r7 - 3] == n8 && t6[r7 - 4] == n8 && (t6[r7 - 5] >= 4 * n8 || t6[r7 + 1] >= 4 * n8) && (e7 += 40);
          }
          return e7;
        }, r6 = t5.length, n7 = 0, o7 = 0, i5 = 0; i5 < r6; ++i5) {
          var a4, u3 = t5[i5];
          a4 = [0];
          for (var f3 = 0; f3 < r6; ) {
            for (c4 = 0; f3 < r6 && u3[f3]; ++c4)
              ++f3;
            for (a4.push(c4), c4 = 0; f3 < r6 && !u3[f3]; ++c4)
              ++f3;
            a4.push(c4);
          }
          for (n7 += e6(a4), a4 = [0], f3 = 0; f3 < r6; ) {
            var c4;
            for (c4 = 0; f3 < r6 && t5[f3][i5]; ++c4)
              ++f3;
            for (a4.push(c4), c4 = 0; f3 < r6 && !t5[f3][i5]; ++c4)
              ++f3;
            a4.push(c4);
          }
          n7 += e6(a4);
          var s6 = t5[i5 + 1] || [];
          for (o7 += u3[0], f3 = 1; f3 < r6; ++f3) {
            var l5 = u3[f3];
            o7 += l5, u3[f3 - 1] == l5 && s6[f3] === l5 && s6[f3 - 1] === l5 && (n7 += 3);
          }
        }
        return n7 += 10 * (Math.abs(o7 / r6 / r6 - 0.5) / 0.05 | 0);
      }, S3 = function(e6, r6, n7, o7, i5) {
        var a4 = t4[r6], u3 = function(t5, e7, r7, n8) {
          var o8 = [], i6 = 0, a5 = 8, u4 = r7.length, f3 = function(t6, e8) {
            if (e8 >= a5) {
              for (o8.push(i6 | t6 >> (e8 -= a5)); e8 >= 8; )
                o8.push(t6 >> (e8 -= 8) & 255);
              i6 = 0, a5 = 8;
            }
            e8 > 0 && (i6 |= (t6 & (1 << e8) - 1) << (a5 -= e8));
          }, c5 = b2(t5, e7);
          switch (f3(e7, 4), f3(u4, c5), e7) {
            case 1:
              for (var s7 = 2; s7 < u4; s7 += 3)
                f3(parseInt(r7.substring(s7 - 2, s7 + 1), 10), 10);
              f3(parseInt(r7.substring(s7 - 2), 10), [0, 4, 7][u4 % 3]);
              break;
            case 2:
              for (s7 = 1; s7 < u4; s7 += 2)
                f3(45 * d3[r7.charAt(s7 - 1)] + d3[r7.charAt(s7)], 11);
              u4 % 2 == 1 && f3(d3[r7.charAt(s7 - 1)], 6);
              break;
            case 4:
              for (s7 = 0; s7 < u4; ++s7)
                f3(r7[s7], 8);
          }
          for (f3(0, 4), a5 < 8 && o8.push(i6); o8.length + 1 < n8; )
            o8.push(236, 17);
          return o8.length < n8 && o8.push(236), o8;
        }(r6, n7, e6, y2(r6, o7) >> 3);
        u3 = function(t5, e7, r7) {
          for (var n8 = [], o8 = t5.length / e7 | 0, i6 = 0, a5 = e7 - t5.length % e7, u4 = 0; u4 < a5; ++u4)
            n8.push(i6), i6 += o8;
          for (u4 = a5; u4 < e7; ++u4)
            n8.push(i6), i6 += o8 + 1;
          n8.push(i6);
          var f3 = [];
          for (u4 = 0; u4 < e7; ++u4)
            f3.push(w2(t5.slice(n8[u4], n8[u4 + 1]), r7));
          var c5 = [], s7 = t5.length / e7 | 0;
          for (u4 = 0; u4 < s7; ++u4)
            for (var l6 = 0; l6 < e7; ++l6)
              c5.push(t5[n8[l6] + u4]);
          for (l6 = a5; l6 < e7; ++l6)
            c5.push(t5[n8[l6 + 1] - 1]);
          for (u4 = 0; u4 < r7.length; ++u4)
            for (l6 = 0; l6 < e7; ++l6)
              c5.push(f3[l6][u4]);
          return c5;
        }(u3, a4[1][o7], f2[a4[0][o7]]);
        var c4 = function(e7) {
          for (var r7 = t4[e7], n8 = function(t5) {
            return 4 * t5 + 17;
          }(e7), o8 = [], i6 = [], a5 = 0; a5 < n8; ++a5)
            o8.push([]), i6.push([]);
          var u4 = function(t5, e8, r8, n9, a6) {
            for (var u5 = 0; u5 < r8; ++u5)
              for (var f4 = 0; f4 < n9; ++f4)
                o8[t5 + u5][e8 + f4] = a6[u5] >> f4 & 1, i6[t5 + u5][e8 + f4] = 1;
          };
          for (u4(0, 0, 9, 9, [127, 65, 93, 93, 93, 65, 383, 0, 64]), u4(n8 - 8, 0, 8, 9, [256, 127, 65, 93, 93, 93, 65, 127]), u4(0, n8 - 8, 9, 8, [254, 130, 186, 186, 186, 130, 254, 0, 0]), a5 = 9; a5 < n8 - 8; ++a5)
            o8[6][a5] = o8[a5][6] = 1 & ~a5, i6[6][a5] = i6[a5][6] = 1;
          var f3 = r7[2], c5 = f3.length;
          for (a5 = 0; a5 < c5; ++a5)
            for (var s7 = 0 == a5 ? c5 - 1 : c5, l6 = 0 == a5 || a5 == c5 - 1 ? 1 : 0; l6 < s7; ++l6)
              u4(f3[a5], f3[l6], 5, 5, [31, 17, 21, 17, 31]);
          if (g2(e7)) {
            var h5 = O(e7, 6, 7973, 12), p4 = 0;
            for (a5 = 0; a5 < 6; ++a5)
              for (l6 = 0; l6 < 3; ++l6)
                o8[a5][n8 - 11 + l6] = o8[n8 - 11 + l6][a5] = h5 >> p4++ & 1, i6[a5][n8 - 11 + l6] = i6[n8 - 11 + l6][a5] = 1;
          }
          return { matrix: o8, reserved: i6 };
        }(r6), s6 = c4.matrix, l5 = c4.reserved;
        if (function(t5, e7, r7) {
          for (var n8 = t5.length, o8 = 0, i6 = -1, a5 = n8 - 1; a5 >= 0; a5 -= 2) {
            6 == a5 && --a5;
            for (var u4 = i6 < 0 ? n8 - 1 : 0, f3 = 0; f3 < n8; ++f3) {
              for (var c5 = a5; c5 > a5 - 2; --c5)
                e7[u4][c5] || (t5[u4][c5] = r7[o8 >> 3] >> (7 & ~o8) & 1, ++o8);
              u4 += i6;
            }
            i6 = -i6;
          }
        }(s6, l5, u3), i5 < 0) {
          x2(s6, l5, 0), P2(s6, 0, o7, 0);
          var h4 = 0, p3 = j(s6);
          for (x2(s6, l5, 0), i5 = 1; i5 < 8; ++i5) {
            x2(s6, l5, i5), P2(s6, 0, o7, i5);
            var v3 = j(s6);
            p3 > v3 && (p3 = v3, h4 = i5), x2(s6, l5, i5);
          }
          i5 = h4;
        }
        return x2(s6, l5, i5), P2(s6, 0, o7, i5), s6;
      }, A2 = { generate: function(t5, o7) {
        var i5 = { numeric: 1, alphanumeric: 2, octet: 4 }, a4 = { L: 1, M: 0, Q: 3, H: 2 }, u3 = (o7 = o7 || {}).version || -1, f3 = a4[(o7.ecclevel || "L").toUpperCase()], c4 = o7.mode ? i5[o7.mode.toLowerCase()] : -1, s6 = "mask" in o7 ? o7.mask : -1;
        if (c4 < 0)
          c4 = "string" == typeof t5 ? t5.match(e5) ? 1 : t5.match(n6) ? 2 : 4 : 4;
        else if (1 != c4 && 2 != c4 && 4 != c4)
          throw "invalid or unsupported mode";
        if (null === (t5 = function(t6, n7) {
          switch (t6) {
            case 1:
              return n7.match(e5) ? n7 : null;
            case 2:
              return n7.match(r5) ? n7.toUpperCase() : null;
            case 4:
              if ("string" == typeof n7) {
                for (var o8 = [], i6 = 0; i6 < n7.length; ++i6) {
                  var a5 = n7.charCodeAt(i6);
                  a5 < 128 ? o8.push(a5) : a5 < 2048 ? o8.push(192 | a5 >> 6, 128 | 63 & a5) : a5 < 65536 ? o8.push(224 | a5 >> 12, 128 | a5 >> 6 & 63, 128 | 63 & a5) : o8.push(240 | a5 >> 18, 128 | a5 >> 12 & 63, 128 | a5 >> 6 & 63, 128 | 63 & a5);
                }
                return o8;
              }
              return n7;
          }
        }(c4, t5)))
          throw "invalid data format";
        if (f3 < 0 || f3 > 3)
          throw "invalid ECC level";
        if (u3 < 0) {
          for (u3 = 1; u3 <= 40 && !(t5.length <= m2(u3, c4, f3)); ++u3)
            ;
          if (u3 > 40)
            throw "too large data";
        } else if (u3 < 1 || u3 > 40)
          throw "invalid version";
        if (-1 != s6 && (s6 < 0 || s6 > 8))
          throw "invalid mask";
        return S3(t5, u3, c4, f3, s6);
      }, generateHTML: function(t5, e6) {
        e6 = e6 || {};
        for (var r6 = A2.generate(t5, e6), n7 = Math.max(e6.modulesize || 5, 0.5), o7 = Math.max(null !== e6.margin ? e6.margin : 4, 0), i5 = document.createElement("div"), a4 = r6.length, u3 = ['<table border="0" cellspacing="0" cellpadding="0" style="border:' + n7 * o7 + 'px solid #fff;background:#fff">'], f3 = 0; f3 < a4; ++f3) {
          u3.push("<tr>");
          for (var c4 = 0; c4 < a4; ++c4)
            u3.push('<td style="width:' + n7 + "px;height:" + n7 + "px" + (r6[f3][c4] ? ";background:#000" : "") + '" part="' + (r6[f3][c4] ? "module-fg" : "module-bg") + '" ></td>');
          u3.push("</tr>");
        }
        return i5.className = "qrcode", i5.innerHTML = u3.join("") + "</table>", i5;
      }, generateSVG: function(t5, e6) {
        e6 = e6 || {};
        var r6 = A2.generate(t5, e6), n7 = r6.length, o7 = Math.max(e6.modulesize || 5, 0.5), i5 = Math.max(null !== e6.margin ? e6.margin : 4, 0), a4 = o7 * (n7 + 2 * i5), u3 = ' class= "fg" width="' + o7 + '" height="' + o7 + '"/>', f3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        f3.setAttribute("viewBox", "0 0 " + a4 + " " + a4), f3.setAttribute("style", "shape-rendering:crispEdges"), e6.modulesize && (f3.setAttribute("width", a4), f3.setAttribute("height", a4));
        for (var c4 = ["<style scoped>.bg{fill:#FFF}.fg{fill:#000}</style>", '<rect class="bg" x="0" y="0"', 'width="' + a4 + '" height="' + a4 + '"/>'], s6 = i5 * o7, l5 = 0; l5 < n7; ++l5) {
          for (var h4 = i5 * o7, p3 = 0; p3 < n7; ++p3)
            r6[l5][p3] && c4.push('<rect x="' + h4 + '" y="' + s6 + '"', u3), h4 += o7;
          s6 += o7;
        }
        return f3.innerHTML = c4.join(""), f3;
      }, generatePNG: function(t5, e6) {
        e6 = e6 || {};
        var r6, n7 = A2.generate(t5, e6), o7 = Math.max(e6.modulesize || 5, 0.5), i5 = Math.max(null !== e6.margin ? e6.margin : 4, 0), a4 = n7.length, u3 = o7 * (a4 + 2 * i5), f3 = document.createElement("canvas");
        if (f3.width = f3.height = u3, !(r6 = f3.getContext("2d")))
          throw "canvas support is needed for PNG output";
        r6.fillStyle = "#fff", r6.fillRect(0, 0, u3, u3), r6.fillStyle = "#000";
        for (var c4 = 0; c4 < a4; ++c4)
          for (var s6 = 0; s6 < a4; ++s6)
            n7[c4][s6] && r6.fillRect(o7 * (i5 + s6), o7 * (i5 + c4), o7, o7);
        return f3.toDataURL();
      } };
      return A2;
    }) ? n5.apply(e4, o5) : n5) || (t3.exports = i3);
  }, function(t3, e4, r4) {
    "use strict";
    r4.r(e4);
    var n5 = r4(0), o5 = r4.n(n5);
    function i3(t4) {
      return (i3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t5) {
        return typeof t5;
      } : function(t5) {
        return t5 && "function" == typeof Symbol && t5.constructor === Symbol && t5 !== Symbol.prototype ? "symbol" : typeof t5;
      })(t4);
    }
    function a3(t4, e5) {
      for (var r5 = 0; r5 < e5.length; r5++) {
        var n6 = e5[r5];
        n6.enumerable = n6.enumerable || false, n6.configurable = true, "value" in n6 && (n6.writable = true), Object.defineProperty(t4, (o6 = n6.key, a4 = void 0, a4 = function(t5, e6) {
          if ("object" !== i3(t5) || null === t5)
            return t5;
          var r6 = t5[Symbol.toPrimitive];
          if (void 0 !== r6) {
            var n7 = r6.call(t5, e6 || "default");
            if ("object" !== i3(n7))
              return n7;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e6 ? String : Number)(t5);
        }(o6, "string"), "symbol" === i3(a4) ? a4 : String(a4)), n6);
      }
      var o6, a4;
    }
    function u2(t4, e5) {
      if (e5 && ("object" === i3(e5) || "function" == typeof e5))
        return e5;
      if (void 0 !== e5)
        throw new TypeError("Derived constructors may only return object or undefined");
      return f2(t4);
    }
    function f2(t4) {
      if (void 0 === t4)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t4;
    }
    function c3(t4) {
      var e5 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
      return (c3 = function(t5) {
        if (null === t5 || (r5 = t5, -1 === Function.toString.call(r5).indexOf("[native code]")))
          return t5;
        var r5;
        if ("function" != typeof t5)
          throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== e5) {
          if (e5.has(t5))
            return e5.get(t5);
          e5.set(t5, n6);
        }
        function n6() {
          return s5(t5, arguments, p2(this).constructor);
        }
        return n6.prototype = Object.create(t5.prototype, { constructor: { value: n6, enumerable: false, writable: true, configurable: true } }), h3(n6, t5);
      })(t4);
    }
    function s5(t4, e5, r5) {
      return (s5 = l4() ? Reflect.construct.bind() : function(t5, e6, r6) {
        var n6 = [null];
        n6.push.apply(n6, e6);
        var o6 = new (Function.bind.apply(t5, n6))();
        return r6 && h3(o6, r6.prototype), o6;
      }).apply(null, arguments);
    }
    function l4() {
      if ("undefined" == typeof Reflect || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if ("function" == typeof Proxy)
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (t4) {
        return false;
      }
    }
    function h3(t4, e5) {
      return (h3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t5, e6) {
        return t5.__proto__ = e6, t5;
      })(t4, e5);
    }
    function p2(t4) {
      return (p2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t5) {
        return t5.__proto__ || Object.getPrototypeOf(t5);
      })(t4);
    }
    var d3 = function(t4) {
      !function(t5, e6) {
        if ("function" != typeof e6 && null !== e6)
          throw new TypeError("Super expression must either be null or a function");
        t5.prototype = Object.create(e6 && e6.prototype, { constructor: { value: t5, writable: true, configurable: true } }), Object.defineProperty(t5, "prototype", { writable: false }), e6 && h3(t5, e6);
      }(d4, t4);
      var e5, r5, n6, i4, c4, s6 = (e5 = d4, r5 = l4(), function() {
        var t5, n7 = p2(e5);
        if (r5) {
          var o6 = p2(this).constructor;
          t5 = Reflect.construct(n7, arguments, o6);
        } else
          t5 = n7.apply(this, arguments);
        return u2(this, t5);
      });
      function d4() {
        var t5;
        return function(t6, e6) {
          if (!(t6 instanceof e6))
            throw new TypeError("Cannot call a class as a function");
        }(this, d4), (t5 = s6.call(this))._defineProperty = t5._defineProperty.bind(f2(t5)), t5.attachShadow({ mode: "open" }), Object.keys(d4.defaultAttributes).map(t5._defineProperty), t5;
      }
      return n6 = d4, c4 = [{ key: "defaultAttributes", get: function() {
        return { data: null, format: "png", modulesize: 5, margin: 4 };
      } }, { key: "observedAttributes", get: function() {
        return Object.keys(d4.defaultAttributes);
      } }], (i4 = [{ key: "attributeChangedCallback", value: function(t5, e6, r6) {
        var n7 = this[t5 + "Changed"];
        n7 && "function" == typeof n7 && n7.call(this, e6, r6), this.generate();
      } }, { key: "_defineProperty", value: function(t5) {
        var e6 = this;
        Object.defineProperty(this, t5, { get: function() {
          var r6 = e6.getAttribute(t5);
          return null === r6 ? d4.defaultAttributes[t5] : r6;
        }, set: function(r6) {
          e6.setAttribute(t5, r6);
        } });
      } }, { key: "getOptions", value: function() {
        var t5 = this.modulesize, e6 = this.margin;
        return { modulesize: null !== t5 ? parseInt(t5) : t5, margin: null !== e6 ? parseInt(e6) : e6 };
      } }, { key: "generate", value: function() {
        try {
          this.clear(), null !== this.data ? "png" === this.format ? this.generatePNG() : "html" === this.format ? this.generateHTML() : "svg" === this.format ? this.generateSVG() : this.shadowRoot.textContent = "qr-code: ".concat(this.format, " not supported!") : this.shadowRoot.textContent = "qr-code: no data!";
        } catch (t5) {
          console.error(t5), this.shadowRoot.textContent = "qr-code: error!";
        }
      } }, { key: "generatePNG", value: function() {
        var t5 = document.createElement("img");
        t5.src = o5.a.generatePNG(this.data, this.getOptions()), t5.setAttribute("part", "img"), this.shadowRoot.appendChild(t5);
      } }, { key: "generateHTML", value: function() {
        var t5 = o5.a.generateHTML(this.data, this.getOptions()).firstChild;
        t5.setAttribute("part", "table"), this.shadowRoot.appendChild(t5);
      } }, { key: "generateSVG", value: function() {
        var t5 = o5.a.generateSVG(this.data, this.getOptions());
        t5.setAttribute("part", "svg"), this.shadowRoot.appendChild(t5);
      } }, { key: "clear", value: function() {
        for (; this.shadowRoot.lastChild; )
          this.shadowRoot.removeChild(this.shadowRoot.lastChild);
      } }]) && a3(n6.prototype, i4), c4 && a3(n6, c4), Object.defineProperty(n6, "prototype", { writable: false }), d4;
    }(c3(HTMLElement));
    customElements.get("qr-code") || customElements.define("qr-code", d3);
  }]);

  // label-factory/lib/beer-label.js
  var BeerLabel = class extends s4 {
    static get properties() {
      return {
        beerName: { attribute: "beer-name" },
        beerStyle: { attribute: "beer-style" },
        abv: { attribute: "abv" },
        beerContains: { attribute: "contains" },
        themeColor: { attribute: "theme-color" }
      };
    }
    constructor() {
      super();
      this.beerName = "Placeholder";
      this.beerStyle = "Placeholder";
      this.abv = "0.0%";
      this.beerContains = "";
      this.themeColor = "";
    }
    themeColorAsRGB() {
      const colorSplit = this.themeColor.split(",");
      const [r4, g2, b2] = colorSplit;
      return { r: r4, g: g2, b: b2 };
    }
    updated(_changedProperties) {
      if (_changedProperties.has("themeColor")) {
        const rgb = this.themeColorAsRGB();
        this.style.setProperty("--label-theme-color-r", rgb.r);
        this.style.setProperty("--label-theme-color-g", rgb.g);
        this.style.setProperty("--label-theme-color-b", rgb.b);
        this.setQrCodeColors();
      }
    }
    firstUpdated() {
    }
    setQrCodeColors() {
      const styleTag = this.shadowRoot.querySelector("qr-code").shadowRoot.querySelector("style");
      console.log("Style", styleTag);
      styleTag.innerHTML = `
    .fg{fill:#FFF;}
    .bg{fill:transparent;}
    svg {
        width: 5cqh;
        height: 5cqh;
        display: block;
        margin: auto;
    }
    `;
    }
    render() {
      return y`
      <div class="background"></div>

      <img
        class="front"
        src="https://raw.githubusercontent.com/Matsuuu/matsu.beer/main/label-factory/assets/matsu-brewing-logo-full-color-rgb-outline.png"
      />

      <div class="beer-info">
        <h1>${this.beerName}</h1>

        <div class="style-bubble">
          <p>${this.beerStyle}</p>
        </div>
      </div>

      <div class="mandatory-stuff">
        <section id="specs">
          <p>${this.abv} ${this.beerStyle}</p>
          ${this.beerContains.length > 0 ? y`<p>Contains ${this.beerContains}</p>` : ""}
        </section>
        <section id="information">
          <slot name="description">
        </section>
        <section id="socials">
            <qr-code format="svg" data="https://matsu.beer"></qr-code>
        </section>
      </div>
    `;
    }
    static get styles() {
      return i`
      :host {
        display: flex;
        border-radius: 4px;
          height: fit-content;
        aspect-ratio: 2.02 / 1;
        display: flex;
        position: relative;
        overflow: hidden;
        background: #000;
        --label-theme-color: rgb(
          var(--label-theme-color-r),
          var(--label-theme-color-g),
          var(--label-theme-color-b)
        );
        border: 6px solid var(--label-theme-color);
        color: var(--label-theme-color);

          --size-scale: 1;
          --title-size: 5cqw;
      }

      .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(https://img.freepik.com/free-vector/halftone-background-abstract-black-white-dots-shape_314614-1558.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        filter: invert(1);
        opacity: 0.3;
      }

      img {
        height: 35cqw;
        margin: auto;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }

      .beer-info {
        position: absolute;
        left: 3rem;
        top: 0;
        bottom: 0;
        height: 100%;
        min-width: 25%;
        max-width: 25%;
        display: flex;
        flex-direction: column;
        font-size: 2rem;
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      .beer-info h1 {
        font-size: var(--title-size);
          margin: 1rem 0;
      }

      .mandatory-stuff {
        container-type: inline-size;
        inline-size: 15%;
          /*font-weight: normal;*/
          font-weight: bold;
        position: absolute;
        right: 3rem;
        top: 5%;
        height: calc(90% - 2rem);
        max-width: 15%;
        color: #fff;
        background: rgba(
          var(--label-theme-color-r),
          var(--label-theme-color-g),
          var(--label-theme-color-b),
          0.7
        );
        display: flex;
        flex-direction: column;
        font-size: 1cqw;
        border-radius: 8px;
        padding: 1rem;
      }

      .mandatory-stuff ::slotted(*) {
          font-size: 1cqw;
          margin: 0.9rem 0;
      }

      .mandatory-stuff section {
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
      }

      #specs {
        flex-grow: 1;
      }

      #specs p {
        margin: 0.25rem 0;
      }

      #information {
        flex-grow: 3;
      }

      #socials {
        flex-grow: 1;
      }

      .front {
        z-index: 10;
      }

      ul {
        list-style: none;
        padding: 0;
        line-height: 1.5;
      }

      i {
        vertical-align: text-top;
      }

      .style-bubble {
        display: flex;
        aspect-ratio: 1/1;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background: rgba(
          var(--label-theme-color-r),
          var(--label-theme-color-g),
          var(--label-theme-color-b),
          0.8
        );
        border: 6px solid var(--label-theme-color);
        border-radius: 50%;
        height: var(--title-size);
        width: var(--title-size);
        color: #fff;
        text-align: center;
          font-size: 1.4cqw;
      }
    `;
    }
  };
  if (!customElements.get("beer-label")) {
    customElements.define("beer-label", BeerLabel);
  }

  // label-factory/beers/amber-management.js
  var AmberManagement = y`
  <beer-label
    beer-name="Amber Management"
    beer-style="Amber Ale"
    abv="4.2%"
    contains="East Kent Goldings & Fuggle"
    theme-color="255,191,0"
    style="--title-size: 3.6cqw"
  >
    <p slot="description">
      Sit down, relax and grab yourself one a bottle of Amber
      Management. The smooth caramelly flavor will sooth you down in an instant.
    </p>
  </beer-label>
`;

  // label-factory/beers/java-is-life.js
  var JavaIsLife = y`
  <beer-label
    beer-name="Java is Life"
    beer-style="Coffee Porter"
    abv="7.5%"
    contains="Malts, Hops and cold brewed coffee"
    theme-color="139,69,19"
  >
    <p slot="description">
      Java means two things: first of all it is a synonym for coffee, secondly
      it's a programming language.
    </p>
    <p slot="description">
      Both of these are crucial for human survival. The other keeps the
    </p>
  </beer-label>
`;

  // label-factory/beers/pretty-hoppy-pilsner.js
  var PrettyHoppyPilsner = y`
  <beer-label
    beer-name="Pretty Hoppy Pilsner"
    beer-style="Pilsner"
    abv="5.3%"
    contains="Malts and Hops"
    theme-color="120,124,180"
  >
    <img slot="description" style="filter: invert(1); margin: 0 0 0rem 0" src="https://simplr.fi/assets/simplr_horisontal_black.svg" />
  <p slot="description">PHP - the langauge and this beer both might be polarizing. You either love it or you hate it. <br> One thing however you can't deny: They both get the job done.</p>
  </beer-label>
`;

  // label-factory/beers/silicon-valley.js
  var SiliconValley = y`
  <beer-label
    beer-name="Silicon Valley"
    beer-style="West Coast IPA"
    abv="6.3%"
    contains="Malts and Hops"
    theme-color="17,140,79"
  >
    <p slot="description">
      "Is that beer? No, you're not drinking that piss. We drink my piss! Tres
      Comas!"
    </p>
    <p slot="description">
      This hoppy west coast ipa will guarantee you a relaxing afternoon after a
      long day's work on your startup.
    </p>
  </beer-label>
`;

  // label-factory/beers/simplr-saison.js
  var SimplrSaison = y`
  <beer-label
    beer-name="Simplr Saison"
    beer-style="Saison"
    abv="5.1%"
    contains="Malts, Hops and Yeast"
    theme-color="255,109,0"
  >
    <img slot="description" style="filter: invert(1); margin: 0 0 0rem 0" src="https://simplr.fi/assets/simplr_horisontal_black.svg" />
  <p slot="description">Modern Problems, Simplr Solutions.<br> If this crispy sud and some extreme programming doesn't solve your problem, nothing will.</p>
  </beer-label>
`;
})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
