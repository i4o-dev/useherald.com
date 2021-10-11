var lp = Object.defineProperty,
	fp = Object.defineProperties;
var pp = Object.getOwnPropertyDescriptors;
var Js = Object.getOwnPropertySymbols;
var dp = Object.prototype.hasOwnProperty,
	hp = Object.prototype.propertyIsEnumerable;
var Ys = (ie, m, ke) =>
		m in ie
			? lp(ie, m, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: ke,
			  })
			: (ie[m] = ke),
	vn = (ie, m) => {
		for (var ke in m || (m = {})) dp.call(m, ke) && Ys(ie, ke, m[ke]);
		if (Js) for (var ke of Js(m)) hp.call(m, ke) && Ys(ie, ke, m[ke]);
		return ie;
	},
	Dn = (ie, m) => fp(ie, pp(m));
(function (ie, m) {
	typeof exports == 'object' && typeof module != 'undefined'
		? m(exports, require('react'))
		: typeof define == 'function' && define.amd
		? define(['exports', 'react'], m)
		: ((ie = typeof globalThis != 'undefined' ? globalThis : ie || self),
		  m((ie['herald-widget'] = {}), ie.React));
})(this, function (ie, m) {
	'use strict';
	function ke(e) {
		return e && typeof e == 'object' && 'default' in e ? e : { default: e };
	}
	var I = ke(m),
		mp = '';
	function me() {
		return (
			(me =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r)
							Object.prototype.hasOwnProperty.call(r, n) &&
								(e[n] = r[n]);
					}
					return e;
				}),
			me.apply(this, arguments)
		);
	}
	function ut(e, t) {
		if (e == null) return {};
		var r = {},
			n = Object.keys(e),
			o,
			s;
		for (s = 0; s < n.length; s++)
			(o = n[s]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
		return r;
	}
	function Zs(e, t) {
		if (!!e) {
			if (typeof e == 'string') return yn(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			if (
				(r === 'Object' && e.constructor && (r = e.constructor.name),
				r === 'Map' || r === 'Set')
			)
				return Array.from(e);
			if (
				r === 'Arguments' ||
				/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
			)
				return yn(e, t);
		}
	}
	function yn(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n;
	}
	function it(e, t) {
		var r;
		if (typeof Symbol == 'undefined' || e[Symbol.iterator] == null) {
			if (
				Array.isArray(e) ||
				(r = Zs(e)) ||
				(t && e && typeof e.length == 'number')
			) {
				r && (e = r);
				var n = 0;
				return function () {
					return n >= e.length
						? { done: !0 }
						: { done: !1, value: e[n++] };
				};
			}
			throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
		}
		return (r = e[Symbol.iterator]()), r.next.bind(r);
	}
	function _e(e, t) {
		if (e in t) {
			for (
				var r = t[e],
					n = arguments.length,
					o = new Array(n > 2 ? n - 2 : 0),
					s = 2;
				s < n;
				s++
			)
				o[s - 2] = arguments[s];
			return typeof r == 'function' ? r.apply(void 0, o) : r;
		}
		var a = new Error(
			'Tried to handle "' +
				e +
				'" but there is no handler defined. Only defined handlers are: ' +
				Object.keys(t)
					.map(function (c) {
						return '"' + c + '"';
					})
					.join(', ') +
				'.'
		);
		throw (Error.captureStackTrace && Error.captureStackTrace(a, _e), a);
	}
	var Ne;
	(function (e) {
		(e[(e.None = 0)] = 'None'),
			(e[(e.RenderStrategy = 1)] = 'RenderStrategy'),
			(e[(e.Static = 2)] = 'Static');
	})(Ne || (Ne = {}));
	var we;
	(function (e) {
		(e[(e.Unmount = 0)] = 'Unmount'), (e[(e.Hidden = 1)] = 'Hidden');
	})(we || (we = {}));
	function Qe(e) {
		var t = e.props,
			r = e.slot,
			n = e.defaultTag,
			o = e.features,
			s = e.visible,
			a = s === void 0 ? !0 : s,
			c = e.name;
		if (a) return Mt(t, r, n, c);
		var l = o != null ? o : Ne.None;
		if (l & Ne.Static) {
			var u = t.static,
				i = u === void 0 ? !1 : u,
				f = ut(t, ['static']);
			if (i) return Mt(f, r, n, c);
		}
		if (l & Ne.RenderStrategy) {
			var h,
				g = t.unmount,
				p = g === void 0 ? !0 : g,
				D = ut(t, ['unmount']),
				y = p ? we.Unmount : we.Hidden;
			return _e(
				y,
				((h = {}),
				(h[we.Unmount] = function () {
					return null;
				}),
				(h[we.Hidden] = function () {
					return Mt(
						me({}, D, { hidden: !0, style: { display: 'none' } }),
						r,
						n,
						c
					);
				}),
				h)
			);
		}
		return Mt(t, r, n, c);
	}
	function Mt(e, t, r, n) {
		var o;
		t === void 0 && (t = {});
		var s = wr(e, ['unmount', 'static']),
			a = s.as,
			c = a === void 0 ? r : a,
			l = s.children,
			u = s.refName,
			i = u === void 0 ? 'ref' : u,
			f = ut(s, ['as', 'children', 'refName']),
			h = e.ref !== void 0 ? ((o = {}), (o[i] = e.ref), o) : {},
			g = typeof l == 'function' ? l(t) : l;
		if (
			(f.className &&
				typeof f.className == 'function' &&
				(f.className = f.className(t)),
			c === m.Fragment && Object.keys(f).length > 0)
		) {
			if (!m.isValidElement(g) || (Array.isArray(g) && g.length > 1))
				throw new Error(
					[
						'Passing props on "Fragment"!',
						'',
						'The current component <' +
							n +
							' /> is rendering a "Fragment".',
						'However we need to passthrough the following props:',
						Object.keys(f).map(function (p) {
							return '  - ' + p;
						}).join(`
`),
						'',
						'You can apply a few solutions:',
						[
							'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
							'Render a single element as the child so that we can forward the props onto that element.',
						].map(function (p) {
							return '  - ' + p;
						}).join(`
`),
					].join(`
`)
				);
			return m.cloneElement(
				g,
				Object.assign(
					{},
					Xs(Qs(wr(f, ['ref'])), g.props, ['onClick']),
					h
				)
			);
		}
		return m.createElement(
			c,
			Object.assign({}, wr(f, ['ref']), c !== m.Fragment && h),
			g
		);
	}
	function Xs(e, t, r) {
		for (
			var n = Object.assign({}, e),
				o = function () {
					var l = a.value;
					if (e[l] !== void 0 && t[l] !== void 0) {
						var u;
						Object.assign(
							n,
							((u = {}),
							(u[l] = function (i) {
								i.defaultPrevented || e[l](i),
									i.defaultPrevented || t[l](i);
							}),
							u)
						);
					}
				},
				s = it(r),
				a;
			!(a = s()).done;

		)
			o();
		return n;
	}
	function Ar(e) {
		var t;
		return Object.assign(m.forwardRef(e), {
			displayName: (t = e.displayName) != null ? t : e.name,
		});
	}
	function Qs(e) {
		var t = Object.assign({}, e);
		for (var r in t) t[r] === void 0 && delete t[r];
		return t;
	}
	function wr(e, t) {
		t === void 0 && (t = []);
		for (var r = Object.assign({}, e), n = it(t), o; !(o = n()).done; ) {
			var s = o.value;
			s in r && delete r[s];
		}
		return r;
	}
	var ct = typeof window != 'undefined' ? m.useLayoutEffect : m.useEffect,
		Er = { serverHandoffComplete: !1 };
	function An() {
		var e = m.useState(Er.serverHandoffComplete),
			t = e[0],
			r = e[1];
		return (
			m.useEffect(
				function () {
					t !== !0 && r(!0);
				},
				[t]
			),
			m.useEffect(function () {
				Er.serverHandoffComplete === !1 &&
					(Er.serverHandoffComplete = !0);
			}, []),
			t
		);
	}
	var q =
		typeof globalThis != 'undefined'
			? globalThis
			: typeof window != 'undefined'
			? window
			: typeof global != 'undefined'
			? global
			: typeof self != 'undefined'
			? self
			: {};
	function Ht() {
		for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
			t[r] = arguments[r];
		var n = m.useRef(t);
		return (
			m.useEffect(
				function () {
					n.current = t;
				},
				[t]
			),
			m.useCallback(
				function (o) {
					for (var s = it(n.current), a; !(a = s()).done; ) {
						var c = a.value;
						c != null &&
							(typeof c == 'function' ? c(o) : (c.current = o));
					}
				},
				[n]
			)
		);
	}
	var Le;
	(function (e) {
		(e.Space = ' '),
			(e.Enter = 'Enter'),
			(e.Escape = 'Escape'),
			(e.Backspace = 'Backspace'),
			(e.ArrowLeft = 'ArrowLeft'),
			(e.ArrowUp = 'ArrowUp'),
			(e.ArrowRight = 'ArrowRight'),
			(e.ArrowDown = 'ArrowDown'),
			(e.Home = 'Home'),
			(e.End = 'End'),
			(e.PageUp = 'PageUp'),
			(e.PageDown = 'PageDown'),
			(e.Tab = 'Tab');
	})(Le || (Le = {}));
	function wn(e) {
		for (
			var t, r, n = e.parentElement, o = null;
			n && !(n instanceof HTMLFieldSetElement);

		)
			n instanceof HTMLLegendElement && (o = n), (n = n.parentElement);
		var s =
			(t =
				((r = n) == null ? void 0 : r.getAttribute('disabled')) ===
				'') != null
				? t
				: !1;
		return s && Ks(o) ? !1 : s;
	}
	function Ks(e) {
		if (!e) return !1;
		for (var t = e.previousElementSibling; t !== null; ) {
			if (t instanceof HTMLLegendElement) return !1;
			t = t.previousElementSibling;
		}
		return !0;
	}
	var ea = 0;
	function En() {
		return ++ea;
	}
	function jt() {
		var e = An(),
			t = m.useState(e ? En : null),
			r = t[0],
			n = t[1];
		return (
			ct(
				function () {
					r === null && n(En());
				},
				[r]
			),
			r != null ? '' + r : void 0
		);
	}
	function xt(e, t, r) {
		var n = m.useRef(t);
		(n.current = t),
			m.useEffect(
				function () {
					function o(s) {
						n.current.call(window, s);
					}
					return (
						window.addEventListener(e, o, r),
						function () {
							return window.removeEventListener(e, o, r);
						}
					);
				},
				[e, r]
			);
	}
	var xr = [
			'[contentEditable=true]',
			'[tabindex]',
			'a[href]',
			'area[href]',
			'button:not([disabled])',
			'iframe',
			'input:not([disabled])',
			'select:not([disabled])',
			'textarea:not([disabled])',
		]
			.map(function (e) {
				return e + ":not([tabindex='-1'])";
			})
			.join(','),
		ne;
	(function (e) {
		(e[(e.First = 1)] = 'First'),
			(e[(e.Previous = 2)] = 'Previous'),
			(e[(e.Next = 4)] = 'Next'),
			(e[(e.Last = 8)] = 'Last'),
			(e[(e.WrapAround = 16)] = 'WrapAround'),
			(e[(e.NoScroll = 32)] = 'NoScroll');
	})(ne || (ne = {}));
	var $e;
	(function (e) {
		(e[(e.Error = 0)] = 'Error'),
			(e[(e.Overflow = 1)] = 'Overflow'),
			(e[(e.Success = 2)] = 'Success'),
			(e[(e.Underflow = 3)] = 'Underflow');
	})($e || ($e = {}));
	var Gt;
	(function (e) {
		(e[(e.Previous = -1)] = 'Previous'), (e[(e.Next = 1)] = 'Next');
	})(Gt || (Gt = {}));
	function zt(e) {
		return (
			e === void 0 && (e = document.body),
			e == null ? [] : Array.from(e.querySelectorAll(xr))
		);
	}
	var lt;
	(function (e) {
		(e[(e.Strict = 0)] = 'Strict'), (e[(e.Loose = 1)] = 'Loose');
	})(lt || (lt = {}));
	function ta(e, t) {
		var r;
		return (
			t === void 0 && (t = lt.Strict),
			e === document.body
				? !1
				: _e(
						t,
						((r = {}),
						(r[lt.Strict] = function () {
							return e.matches(xr);
						}),
						(r[lt.Loose] = function () {
							for (var n = e; n !== null; ) {
								if (n.matches(xr)) return !0;
								n = n.parentElement;
							}
							return !1;
						}),
						r)
				  )
		);
	}
	function Ke(e, t) {
		var r = Array.isArray(e) ? e : zt(e),
			n = document.activeElement,
			o = (function () {
				if (t & (ne.First | ne.Next)) return Gt.Next;
				if (t & (ne.Previous | ne.Last)) return Gt.Previous;
				throw new Error(
					'Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last'
				);
			})(),
			s = (function () {
				if (t & ne.First) return 0;
				if (t & ne.Previous) return Math.max(0, r.indexOf(n)) - 1;
				if (t & ne.Next) return Math.max(0, r.indexOf(n)) + 1;
				if (t & ne.Last) return r.length - 1;
				throw new Error(
					'Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last'
				);
			})(),
			a = t & ne.NoScroll ? { preventScroll: !0 } : {},
			c = 0,
			l = r.length,
			u = void 0;
		do {
			var i;
			if (c >= l || c + l <= 0) return $e.Error;
			var f = s + c;
			if (t & ne.WrapAround) f = (f + l) % l;
			else {
				if (f < 0) return $e.Underflow;
				if (f >= l) return $e.Overflow;
			}
			(u = r[f]), (i = u) == null || i.focus(a), (c += o);
		} while (u !== document.activeElement);
		return (
			u.hasAttribute('tabindex') || u.setAttribute('tabindex', '0'),
			$e.Success
		);
	}
	function ra() {
		var e = m.useRef(!1);
		return (
			m.useEffect(function () {
				return (
					(e.current = !0),
					function () {
						e.current = !1;
					}
				);
			}, []),
			e
		);
	}
	var Cr = m.createContext(null);
	Cr.displayName = 'OpenClosedContext';
	var Pe;
	(function (e) {
		(e[(e.Open = 0)] = 'Open'), (e[(e.Closed = 1)] = 'Closed');
	})(Pe || (Pe = {}));
	function Wt() {
		return m.useContext(Cr);
	}
	function xn(e) {
		var t = e.value,
			r = e.children;
		return I.default.createElement(Cr.Provider, { value: t }, r);
	}
	function Cn(e) {
		var t;
		if (e.type) return e.type;
		var r = (t = e.as) != null ? t : 'button';
		if (typeof r == 'string' && r.toLowerCase() === 'button')
			return 'button';
	}
	function na(e, t) {
		var r = m.useState(function () {
				return Cn(e);
			}),
			n = r[0],
			o = r[1];
		return (
			ct(
				function () {
					o(Cn(e));
				},
				[e.type, e.as]
			),
			ct(
				function () {
					n ||
						!t.current ||
						(t.current instanceof HTMLButtonElement &&
							!t.current.hasAttribute('type') &&
							o('button'));
				},
				[n, t]
			),
			n
		);
	}
	function qn() {
		var e = [],
			t = {
				requestAnimationFrame: (function (r) {
					function n() {
						return r.apply(this, arguments);
					}
					return (
						(n.toString = function () {
							return r.toString();
						}),
						n
					);
				})(function () {
					var r = requestAnimationFrame.apply(void 0, arguments);
					t.add(function () {
						return cancelAnimationFrame(r);
					});
				}),
				nextFrame: function () {
					for (
						var n = arguments.length, o = new Array(n), s = 0;
						s < n;
						s++
					)
						o[s] = arguments[s];
					t.requestAnimationFrame(function () {
						t.requestAnimationFrame.apply(t, o);
					});
				},
				setTimeout: (function (r) {
					function n() {
						return r.apply(this, arguments);
					}
					return (
						(n.toString = function () {
							return r.toString();
						}),
						n
					);
				})(function () {
					var r = setTimeout.apply(void 0, arguments);
					t.add(function () {
						return clearTimeout(r);
					});
				}),
				add: function (n) {
					e.push(n);
				},
				dispose: function () {
					for (var n = it(e.splice(0)), o; !(o = n()).done; ) {
						var s = o.value;
						s();
					}
				},
			};
		return t;
	}
	var We, W;
	(function (e) {
		(e[(e.Open = 0)] = 'Open'), (e[(e.Closed = 1)] = 'Closed');
	})(W || (W = {}));
	var Q;
	(function (e) {
		(e[(e.TogglePopover = 0)] = 'TogglePopover'),
			(e[(e.ClosePopover = 1)] = 'ClosePopover'),
			(e[(e.SetButton = 2)] = 'SetButton'),
			(e[(e.SetButtonId = 3)] = 'SetButtonId'),
			(e[(e.SetPanel = 4)] = 'SetPanel'),
			(e[(e.SetPanelId = 5)] = 'SetPanelId');
	})(Q || (Q = {}));
	var oa =
			((We = {}),
			(We[Q.TogglePopover] = function (e) {
				var t;
				return me({}, e, {
					popoverState: _e(
						e.popoverState,
						((t = {}),
						(t[W.Open] = W.Closed),
						(t[W.Closed] = W.Open),
						t)
					),
				});
			}),
			(We[Q.ClosePopover] = function (e) {
				return e.popoverState === W.Closed
					? e
					: me({}, e, { popoverState: W.Closed });
			}),
			(We[Q.SetButton] = function (e, t) {
				return e.button === t.button
					? e
					: me({}, e, { button: t.button });
			}),
			(We[Q.SetButtonId] = function (e, t) {
				return e.buttonId === t.buttonId
					? e
					: me({}, e, { buttonId: t.buttonId });
			}),
			(We[Q.SetPanel] = function (e, t) {
				return e.panel === t.panel ? e : me({}, e, { panel: t.panel });
			}),
			(We[Q.SetPanelId] = function (e, t) {
				return e.panelId === t.panelId
					? e
					: me({}, e, { panelId: t.panelId });
			}),
			We),
		qr = m.createContext(null);
	qr.displayName = 'PopoverContext';
	function Jt(e) {
		var t = m.useContext(qr);
		if (t === null) {
			var r = new Error(
				'<' +
					e +
					' /> is missing a parent <' +
					Ee.name +
					' /> component.'
			);
			throw (
				(Error.captureStackTrace && Error.captureStackTrace(r, Jt), r)
			);
		}
		return t;
	}
	var Sr = m.createContext(null);
	Sr.displayName = 'PopoverAPIContext';
	function Sn(e) {
		var t = m.useContext(Sr);
		if (t === null) {
			var r = new Error(
				'<' +
					e +
					' /> is missing a parent <' +
					Ee.name +
					' /> component.'
			);
			throw (
				(Error.captureStackTrace && Error.captureStackTrace(r, Sn), r)
			);
		}
		return t;
	}
	var Br = m.createContext(null);
	Br.displayName = 'PopoverGroupContext';
	function Bn() {
		return m.useContext(Br);
	}
	var Tr = m.createContext(null);
	Tr.displayName = 'PopoverPanelContext';
	function sa() {
		return m.useContext(Tr);
	}
	function aa(e, t) {
		return _e(t.type, oa, e, t);
	}
	var ua = 'div';
	function Ee(e) {
		var t,
			r = 'headlessui-popover-button-' + jt(),
			n = 'headlessui-popover-panel-' + jt(),
			o = m.useReducer(aa, {
				popoverState: W.Closed,
				button: null,
				buttonId: r,
				panel: null,
				panelId: n,
			}),
			s = o[0],
			a = s.popoverState,
			c = s.button,
			l = s.panel,
			u = o[1];
		m.useEffect(
			function () {
				return u({ type: Q.SetButtonId, buttonId: r });
			},
			[r, u]
		),
			m.useEffect(
				function () {
					return u({ type: Q.SetPanelId, panelId: n });
				},
				[n, u]
			);
		var i = m.useMemo(
				function () {
					return {
						buttonId: r,
						panelId: n,
						close: function () {
							return u({ type: Q.ClosePopover });
						},
					};
				},
				[r, n, u]
			),
			f = Bn(),
			h = f == null ? void 0 : f.registerPopover,
			g = m.useCallback(
				function () {
					var C;
					return (C =
						f == null ? void 0 : f.isFocusWithinPopoverGroup()) !=
						null
						? C
						: (c == null
								? void 0
								: c.contains(document.activeElement)) ||
								(l == null
									? void 0
									: l.contains(document.activeElement));
				},
				[f, c, l]
			);
		m.useEffect(
			function () {
				return h == null ? void 0 : h(i);
			},
			[h, i]
		),
			xt(
				'focus',
				function () {
					a === W.Open &&
						(g() || !c || !l || u({ type: Q.ClosePopover }));
				},
				!0
			),
			xt('mousedown', function (C) {
				var S = C.target;
				a === W.Open &&
					((c == null ? void 0 : c.contains(S)) ||
						(l == null ? void 0 : l.contains(S)) ||
						(u({ type: Q.ClosePopover }),
						ta(S, lt.Loose) ||
							(C.preventDefault(), c == null || c.focus())));
			});
		var p = m.useCallback(
				function (C) {
					u({ type: Q.ClosePopover });
					var S = (function () {
						return C
							? C instanceof HTMLElement
								? C
								: C.current instanceof HTMLElement
								? C.current
								: c
							: c;
					})();
					S == null || S.focus();
				},
				[u, c]
			),
			D = m.useMemo(
				function () {
					return { close: p };
				},
				[p]
			),
			y = m.useMemo(
				function () {
					return { open: a === W.Open, close: p };
				},
				[a, p]
			);
		return I.default.createElement(
			qr.Provider,
			{ value: o },
			I.default.createElement(
				Sr.Provider,
				{ value: D },
				I.default.createElement(
					xn,
					{
						value: _e(
							a,
							((t = {}),
							(t[W.Open] = Pe.Open),
							(t[W.Closed] = Pe.Closed),
							t)
						),
					},
					Qe({ props: e, slot: y, defaultTag: ua, name: 'Popover' })
				)
			)
		);
	}
	var ia = 'button',
		ca = Ar(function e(t, r) {
			var n = Jt([Ee.name, e.name].join('.')),
				o = n[0],
				s = n[1],
				a = m.useRef(null),
				c = Bn(),
				l = c == null ? void 0 : c.closeOthers,
				u = sa(),
				i = u === null ? !1 : u === o.panelId,
				f = Ht(
					a,
					r,
					i
						? null
						: function (O) {
								return s({ type: Q.SetButton, button: O });
						  }
				),
				h = Ht(a, r),
				g = m.useRef(null),
				p = m.useRef(
					typeof window == 'undefined' ? null : document.activeElement
				);
			xt(
				'focus',
				function () {
					(p.current = g.current),
						(g.current = document.activeElement);
				},
				!0
			);
			var D = m.useCallback(
					function (O) {
						var j;
						if (i) {
							if (o.popoverState === W.Closed) return;
							switch (O.key) {
								case Le.Space:
								case Le.Enter:
									O.preventDefault(),
										O.stopPropagation(),
										s({ type: Q.ClosePopover }),
										(j = o.button) == null || j.focus();
									break;
							}
						} else
							switch (O.key) {
								case Le.Space:
								case Le.Enter:
									O.preventDefault(),
										O.stopPropagation(),
										o.popoverState === W.Closed &&
											(l == null || l(o.buttonId)),
										s({ type: Q.TogglePopover });
									break;
								case Le.Escape:
									if (o.popoverState !== W.Open)
										return l == null
											? void 0
											: l(o.buttonId);
									if (
										!a.current ||
										!a.current.contains(
											document.activeElement
										)
									)
										return;
									s({ type: Q.ClosePopover });
									break;
								case Le.Tab:
									if (
										o.popoverState !== W.Open ||
										!o.panel ||
										!o.button
									)
										return;
									if (O.shiftKey) {
										var J;
										if (
											!p.current ||
											((J = o.button) == null
												? void 0
												: J.contains(p.current)) ||
											o.panel.contains(p.current)
										)
											return;
										var d = zt(),
											b = d.indexOf(p.current),
											A = d.indexOf(o.button);
										if (A > b) return;
										O.preventDefault(),
											O.stopPropagation(),
											Ke(o.panel, ne.Last);
									} else
										O.preventDefault(),
											O.stopPropagation(),
											Ke(o.panel, ne.First);
									break;
							}
					},
					[s, o.popoverState, o.buttonId, o.button, o.panel, a, l, i]
				),
				y = m.useCallback(
					function (O) {
						var j;
						if (
							!i &&
							(O.key === Le.Space && O.preventDefault(),
							o.popoverState === W.Open &&
								!!o.panel &&
								!!o.button)
						)
							switch (O.key) {
								case Le.Tab:
									if (
										!p.current ||
										((j = o.button) == null
											? void 0
											: j.contains(p.current)) ||
										o.panel.contains(p.current)
									)
										return;
									var J = zt(),
										d = J.indexOf(p.current),
										b = J.indexOf(o.button);
									if (b > d) return;
									O.preventDefault(),
										O.stopPropagation(),
										Ke(o.panel, ne.Last);
									break;
							}
					},
					[o.popoverState, o.panel, o.button, i]
				),
				C = m.useCallback(
					function (O) {
						if (!wn(O.currentTarget) && !t.disabled)
							if (i) {
								var j;
								s({ type: Q.ClosePopover }),
									(j = o.button) == null || j.focus();
							} else {
								var J;
								o.popoverState === W.Closed &&
									(l == null || l(o.buttonId)),
									(J = o.button) == null || J.focus(),
									s({ type: Q.TogglePopover });
							}
					},
					[s, o.button, o.popoverState, o.buttonId, t.disabled, l, i]
				),
				S = m.useMemo(
					function () {
						return { open: o.popoverState === W.Open };
					},
					[o]
				),
				E = na(t, a),
				X = t,
				U = i
					? { ref: h, type: E, onKeyDown: D, onClick: C }
					: {
							ref: f,
							id: o.buttonId,
							type: E,
							'aria-expanded': t.disabled
								? void 0
								: o.popoverState === W.Open,
							'aria-controls': o.panel ? o.panelId : void 0,
							onKeyDown: D,
							onKeyUp: y,
							onClick: C,
					  };
			return Qe({
				props: me({}, X, U),
				slot: S,
				defaultTag: ia,
				name: 'Popover.Button',
			});
		}),
		la = 'div',
		fa = Ne.RenderStrategy | Ne.Static,
		pa = Ar(function e(t, r) {
			var n = Jt([Ee.name, e.name].join('.')),
				o = n[0].popoverState,
				s = n[1],
				a = Ht(r),
				c = 'headlessui-popover-overlay-' + jt(),
				l = Wt(),
				u = (function () {
					return l !== null ? l === Pe.Open : o === W.Open;
				})(),
				i = m.useCallback(
					function (p) {
						if (wn(p.currentTarget)) return p.preventDefault();
						s({ type: Q.ClosePopover });
					},
					[s]
				),
				f = m.useMemo(
					function () {
						return { open: o === W.Open };
					},
					[o]
				),
				h = { ref: a, id: c, 'aria-hidden': !0, onClick: i },
				g = t;
			return Qe({
				props: me({}, g, h),
				slot: f,
				defaultTag: la,
				features: fa,
				visible: u,
				name: 'Popover.Overlay',
			});
		}),
		da = 'div',
		ha = Ne.RenderStrategy | Ne.Static,
		ma = Ar(function e(t, r) {
			var n = t.focus,
				o = n === void 0 ? !1 : n,
				s = ut(t, ['focus']),
				a = Jt([Ee.name, e.name].join('.')),
				c = a[0],
				l = a[1],
				u = Sn([Ee.name, e.name].join('.')),
				i = u.close,
				f = m.useRef(null),
				h = Ht(f, r, function (S) {
					l({ type: Q.SetPanel, panel: S });
				}),
				g = Wt(),
				p = (function () {
					return g !== null
						? g === Pe.Open
						: c.popoverState === W.Open;
				})(),
				D = m.useCallback(
					function (S) {
						var E;
						switch (S.key) {
							case Le.Escape:
								if (
									c.popoverState !== W.Open ||
									!f.current ||
									!f.current.contains(document.activeElement)
								)
									return;
								S.preventDefault(),
									l({ type: Q.ClosePopover }),
									(E = c.button) == null || E.focus();
								break;
						}
					},
					[c, f, l]
				);
			m.useEffect(
				function () {
					return function () {
						return l({ type: Q.SetPanel, panel: null });
					};
				},
				[l]
			),
				m.useEffect(
					function () {
						var S;
						c.popoverState === W.Closed &&
							((S = t.unmount) != null ? S : !0) &&
							l({ type: Q.SetPanel, panel: null });
					},
					[c.popoverState, t.unmount, l]
				),
				m.useEffect(
					function () {
						if (!!o && c.popoverState === W.Open && !!f.current) {
							var S = document.activeElement;
							f.current.contains(S) || Ke(f.current, ne.First);
						}
					},
					[o, f, c.popoverState]
				),
				xt('keydown', function (S) {
					if (
						c.popoverState === W.Open &&
						!!f.current &&
						S.key === Le.Tab &&
						!!document.activeElement &&
						!!f.current &&
						!!f.current.contains(document.activeElement)
					) {
						S.preventDefault();
						var E = Ke(
							f.current,
							S.shiftKey ? ne.Previous : ne.Next
						);
						if (E === $e.Underflow) {
							var X;
							return (X = c.button) == null ? void 0 : X.focus();
						} else if (E === $e.Overflow) {
							if (!c.button) return;
							var U = zt(),
								O = U.indexOf(c.button),
								j = U.splice(O + 1).filter(function (J) {
									var d;
									return !((d = f.current) == null
										? void 0
										: d.contains(J));
								});
							Ke(j, ne.First) === $e.Error &&
								Ke(document.body, ne.First);
						}
					}
				}),
				xt(
					'focus',
					function () {
						var S;
						!o ||
							(c.popoverState === W.Open &&
								(!f.current ||
									((S = f.current) == null
										? void 0
										: S.contains(document.activeElement)) ||
									l({ type: Q.ClosePopover })));
					},
					!0
				);
			var y = m.useMemo(
					function () {
						return { open: c.popoverState === W.Open, close: i };
					},
					[c, i]
				),
				C = { ref: h, id: c.panelId, onKeyDown: D };
			return I.default.createElement(
				Tr.Provider,
				{ value: c.panelId },
				Qe({
					props: me({}, s, C),
					slot: y,
					defaultTag: da,
					features: ha,
					visible: p,
					name: 'Popover.Panel',
				})
			);
		}),
		ga = 'div';
	function ba(e) {
		var t = m.useRef(null),
			r = m.useState([]),
			n = r[0],
			o = r[1],
			s = m.useCallback(
				function (g) {
					o(function (p) {
						var D = p.indexOf(g);
						if (D !== -1) {
							var y = p.slice();
							return y.splice(D, 1), y;
						}
						return p;
					});
				},
				[o]
			),
			a = m.useCallback(
				function (g) {
					return (
						o(function (p) {
							return [].concat(p, [g]);
						}),
						function () {
							return s(g);
						}
					);
				},
				[o, s]
			),
			c = m.useCallback(
				function () {
					var g,
						p = document.activeElement;
					return ((g = t.current) == null ? void 0 : g.contains(p))
						? !0
						: n.some(function (D) {
								var y, C;
								return (
									((y = document.getElementById(
										D.buttonId
									)) == null
										? void 0
										: y.contains(p)) ||
									((C = document.getElementById(D.panelId)) ==
									null
										? void 0
										: C.contains(p))
								);
						  });
				},
				[t, n]
			),
			l = m.useCallback(
				function (g) {
					for (var p = it(n), D; !(D = p()).done; ) {
						var y = D.value;
						y.buttonId !== g && y.close();
					}
				},
				[n]
			),
			u = m.useMemo(
				function () {
					return {
						registerPopover: a,
						unregisterPopover: s,
						isFocusWithinPopoverGroup: c,
						closeOthers: l,
					};
				},
				[a, s, c, l]
			),
			i = m.useMemo(function () {
				return {};
			}, []),
			f = { ref: t },
			h = e;
		return I.default.createElement(
			Br.Provider,
			{ value: u },
			Qe({
				props: me({}, h, f),
				slot: i,
				defaultTag: ga,
				name: 'Popover.Group',
			})
		);
	}
	(Ee.Button = ca), (Ee.Overlay = pa), (Ee.Panel = ma), (Ee.Group = ba);
	function Tn() {
		var e = m.useRef(!0);
		return (
			m.useEffect(function () {
				e.current = !1;
			}, []),
			e.current
		);
	}
	function va(e) {
		var t = { called: !1 };
		return function () {
			if (!t.called) return (t.called = !0), e.apply(void 0, arguments);
		};
	}
	function kr(e) {
		for (
			var t,
				r = arguments.length,
				n = new Array(r > 1 ? r - 1 : 0),
				o = 1;
			o < r;
			o++
		)
			n[o - 1] = arguments[o];
		e && n.length > 0 && (t = e.classList).add.apply(t, n);
	}
	function Yt(e) {
		for (
			var t,
				r = arguments.length,
				n = new Array(r > 1 ? r - 1 : 0),
				o = 1;
			o < r;
			o++
		)
			n[o - 1] = arguments[o];
		e && n.length > 0 && (t = e.classList).remove.apply(t, n);
	}
	var Je;
	(function (e) {
		(e.Finished = 'finished'), (e.Cancelled = 'cancelled');
	})(Je || (Je = {}));
	function Da(e, t) {
		var r = qn();
		if (!e) return r.dispose;
		var n = getComputedStyle(e),
			o = n.transitionDuration,
			s = n.transitionDelay,
			a = [o, s].map(function (u) {
				var i = u
						.split(',')
						.filter(Boolean)
						.map(function (g) {
							return g.includes('ms')
								? parseFloat(g)
								: parseFloat(g) * 1e3;
						})
						.sort(function (g, p) {
							return p - g;
						}),
					f = i[0],
					h = f === void 0 ? 0 : f;
				return h;
			}),
			c = a[0],
			l = a[1];
		return (
			c !== 0
				? r.setTimeout(function () {
						t(Je.Finished);
				  }, c + l)
				: t(Je.Finished),
			r.add(function () {
				return t(Je.Cancelled);
			}),
			r.dispose
		);
	}
	function kn(e, t, r, n, o, s) {
		var a = qn(),
			c = s !== void 0 ? va(s) : function () {};
		return (
			Yt.apply(void 0, [e].concat(o)),
			kr.apply(void 0, [e].concat(t, r)),
			a.nextFrame(function () {
				Yt.apply(void 0, [e].concat(r)),
					kr.apply(void 0, [e].concat(n)),
					a.add(
						Da(e, function (l) {
							return (
								Yt.apply(void 0, [e].concat(n, t)),
								kr.apply(void 0, [e].concat(o)),
								c(l)
							);
						})
					);
			}),
			a.add(function () {
				return Yt.apply(void 0, [e].concat(t, r, n, o));
			}),
			a.add(function () {
				return c(Je.Cancelled);
			}),
			a.dispose
		);
	}
	function et(e) {
		return (
			e === void 0 && (e = ''),
			m.useMemo(
				function () {
					return e.split(' ').filter(function (t) {
						return t.trim().length > 1;
					});
				},
				[e]
			)
		);
	}
	var Zt = m.createContext(null);
	Zt.displayName = 'TransitionContext';
	var K;
	(function (e) {
		(e.Visible = 'visible'), (e.Hidden = 'hidden');
	})(K || (K = {}));
	function ya() {
		var e = m.useContext(Zt);
		if (e === null)
			throw new Error(
				'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
			);
		return e;
	}
	function Aa() {
		var e = m.useContext(Xt);
		if (e === null)
			throw new Error(
				'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
			);
		return e;
	}
	var Xt = m.createContext(null);
	Xt.displayName = 'NestingContext';
	function Qt(e) {
		return 'children' in e
			? Qt(e.children)
			: e.current.filter(function (t) {
					var r = t.state;
					return r === K.Visible;
			  }).length > 0;
	}
	function Ln(e) {
		var t = m.useRef(e),
			r = m.useRef([]),
			n = ra();
		m.useEffect(
			function () {
				t.current = e;
			},
			[e]
		);
		var o = m.useCallback(
				function (a, c) {
					var l;
					c === void 0 && (c = we.Hidden);
					var u = r.current.findIndex(function (i) {
						var f = i.id;
						return f === a;
					});
					u !== -1 &&
						(_e(
							c,
							((l = {}),
							(l[we.Unmount] = function () {
								r.current.splice(u, 1);
							}),
							(l[we.Hidden] = function () {
								r.current[u].state = K.Hidden;
							}),
							l)
						),
						!Qt(r) &&
							n.current &&
							(t.current == null || t.current()));
				},
				[t, n, r]
			),
			s = m.useCallback(
				function (a) {
					var c = r.current.find(function (l) {
						var u = l.id;
						return u === a;
					});
					return (
						c
							? c.state !== K.Visible && (c.state = K.Visible)
							: r.current.push({ id: a, state: K.Visible }),
						function () {
							return o(a, we.Unmount);
						}
					);
				},
				[r, o]
			);
		return m.useMemo(
			function () {
				return { children: r, register: s, unregister: o };
			},
			[s, o, r]
		);
	}
	function wa() {}
	var Ea = ['beforeEnter', 'afterEnter', 'beforeLeave', 'afterLeave'];
	function Fn(e) {
		for (var t = {}, r = it(Ea), n; !(n = r()).done; ) {
			var o,
				s = n.value;
			t[s] = (o = e[s]) != null ? o : wa;
		}
		return t;
	}
	function xa(e) {
		var t = m.useRef(Fn(e));
		return (
			m.useEffect(
				function () {
					t.current = Fn(e);
				},
				[e]
			),
			t
		);
	}
	var Ca = 'div',
		_n = Ne.RenderStrategy;
	function Nn(e) {
		var t,
			r = e.beforeEnter,
			n = e.afterEnter,
			o = e.beforeLeave,
			s = e.afterLeave,
			a = e.enter,
			c = e.enterFrom,
			l = e.enterTo,
			u = e.entered,
			i = e.leave,
			f = e.leaveFrom,
			h = e.leaveTo,
			g = ut(e, [
				'beforeEnter',
				'afterEnter',
				'beforeLeave',
				'afterLeave',
				'enter',
				'enterFrom',
				'enterTo',
				'entered',
				'leave',
				'leaveFrom',
				'leaveTo',
			]),
			p = m.useRef(null),
			D = m.useState(K.Visible),
			y = D[0],
			C = D[1],
			S = g.unmount ? we.Unmount : we.Hidden,
			E = ya(),
			X = E.show,
			U = E.appear,
			O = Aa(),
			j = O.register,
			J = O.unregister,
			d = Tn(),
			b = jt(),
			A = m.useRef(!1),
			B = Ln(function () {
				A.current || (C(K.Hidden), J(b), _.current.afterLeave());
			});
		ct(
			function () {
				if (!!b) return j(b);
			},
			[j, b]
		),
			ct(
				function () {
					var P;
					if (S === we.Hidden && !!b) {
						if (X && y !== K.Visible) {
							C(K.Visible);
							return;
						}
						_e(
							y,
							((P = {}),
							(P[K.Hidden] = function () {
								return J(b);
							}),
							(P[K.Visible] = function () {
								return j(b);
							}),
							P)
						);
					}
				},
				[y, b, j, J, X, S]
			);
		var L = et(a),
			x = et(c),
			F = et(l),
			Y = et(u),
			M = et(i),
			T = et(f),
			w = et(h),
			_ = xa({
				beforeEnter: r,
				afterEnter: n,
				beforeLeave: o,
				afterLeave: s,
			}),
			k = An();
		m.useEffect(
			function () {
				if (k && y === K.Visible && p.current === null)
					throw new Error(
						'Did you forget to passthrough the `ref` to the actual DOM node?'
					);
			},
			[p, y, k]
		);
		var V = d && !U;
		ct(
			function () {
				var P = p.current;
				if (!!P && !V)
					return (
						(A.current = !0),
						X && _.current.beforeEnter(),
						X || _.current.beforeLeave(),
						X
							? kn(P, L, x, F, Y, function (G) {
									(A.current = !1),
										G === Je.Finished &&
											_.current.afterEnter();
							  })
							: kn(P, M, T, w, Y, function (G) {
									(A.current = !1),
										G === Je.Finished &&
											(Qt(B) ||
												(C(K.Hidden),
												J(b),
												_.current.afterLeave()));
							  })
					);
			},
			[_, b, A, J, B, p, V, X, L, x, F, M, T, w]
		);
		var oe = { ref: p },
			R = g;
		return I.default.createElement(
			Xt.Provider,
			{ value: B },
			I.default.createElement(
				xn,
				{
					value: _e(
						y,
						((t = {}),
						(t[K.Visible] = Pe.Open),
						(t[K.Hidden] = Pe.Closed),
						t)
					),
				},
				Qe({
					props: me({}, R, oe),
					defaultTag: Ca,
					features: _n,
					visible: y === K.Visible,
					name: 'Transition.Child',
				})
			)
		);
	}
	function Ct(e) {
		var t = e.show,
			r = e.appear,
			n = r === void 0 ? !1 : r,
			o = e.unmount,
			s = ut(e, ['show', 'appear', 'unmount']),
			a = Wt();
		if (t === void 0 && a !== null) {
			var c;
			t = _e(a, ((c = {}), (c[Pe.Open] = !0), (c[Pe.Closed] = !1), c));
		}
		if (![!0, !1].includes(t))
			throw new Error(
				'A <Transition /> is used but it is missing a `show={true | false}` prop.'
			);
		var l = m.useState(t ? K.Visible : K.Hidden),
			u = l[0],
			i = l[1],
			f = Ln(function () {
				i(K.Hidden);
			}),
			h = Tn(),
			g = m.useMemo(
				function () {
					return { show: t, appear: n || !h };
				},
				[t, n, h]
			);
		m.useEffect(
			function () {
				t ? i(K.Visible) : Qt(f) || i(K.Hidden);
			},
			[t, f]
		);
		var p = { unmount: o };
		return I.default.createElement(
			Xt.Provider,
			{ value: f },
			I.default.createElement(
				Zt.Provider,
				{ value: g },
				Qe({
					props: me({}, p, {
						as: m.Fragment,
						children: I.default.createElement(
							Nn,
							Object.assign({}, p, s)
						),
					}),
					defaultTag: m.Fragment,
					features: _n,
					visible: u === K.Visible,
					name: 'Transition',
				})
			)
		);
	}
	(Ct.Child = function (t) {
		var r = m.useContext(Zt) !== null,
			n = Wt() !== null;
		return !r && n
			? I.default.createElement(Ct, Object.assign({}, t))
			: I.default.createElement(Nn, Object.assign({}, t));
	}),
		(Ct.Root = Ct);
	function Oe(e, t) {
		if (t.length < e)
			throw new TypeError(
				e +
					' argument' +
					(e > 1 ? 's' : '') +
					' required, but only ' +
					t.length +
					' present'
			);
	}
	function he(e) {
		Oe(1, arguments);
		var t = Object.prototype.toString.call(e);
		return e instanceof Date ||
			(typeof e == 'object' && t === '[object Date]')
			? new Date(e.getTime())
			: typeof e == 'number' || t === '[object Number]'
			? new Date(e)
			: ((typeof e == 'string' || t === '[object String]') &&
					typeof console != 'undefined' &&
					(console.warn(
						"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"
					),
					console.warn(new Error().stack)),
			  new Date(NaN));
	}
	function Pn(e) {
		var t = new Date(
			Date.UTC(
				e.getFullYear(),
				e.getMonth(),
				e.getDate(),
				e.getHours(),
				e.getMinutes(),
				e.getSeconds(),
				e.getMilliseconds()
			)
		);
		return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
	}
	function Kt(e, t) {
		Oe(2, arguments);
		var r = he(e),
			n = he(t),
			o = r.getTime() - n.getTime();
		return o < 0 ? -1 : o > 0 ? 1 : o;
	}
	function qa(e, t) {
		Oe(2, arguments);
		var r = he(e),
			n = he(t),
			o = r.getFullYear() - n.getFullYear(),
			s = r.getMonth() - n.getMonth();
		return o * 12 + s;
	}
	function Sa(e, t) {
		return Oe(2, arguments), he(e).getTime() - he(t).getTime();
	}
	var On = {
			ceil: Math.ceil,
			round: Math.round,
			floor: Math.floor,
			trunc: function (e) {
				return e < 0 ? Math.ceil(e) : Math.floor(e);
			},
		},
		Ba = 'trunc';
	function Ta(e) {
		return e ? On[e] : On[Ba];
	}
	function ka(e) {
		Oe(1, arguments);
		var t = he(e);
		return t.setHours(23, 59, 59, 999), t;
	}
	function La(e) {
		Oe(1, arguments);
		var t = he(e),
			r = t.getMonth();
		return (
			t.setFullYear(t.getFullYear(), r + 1, 0),
			t.setHours(23, 59, 59, 999),
			t
		);
	}
	function Fa(e) {
		Oe(1, arguments);
		var t = he(e);
		return ka(t).getTime() === La(t).getTime();
	}
	function _a(e, t) {
		Oe(2, arguments);
		var r = he(e),
			n = he(t),
			o = Kt(r, n),
			s = Math.abs(qa(r, n)),
			a;
		if (s < 1) a = 0;
		else {
			r.getMonth() === 1 && r.getDate() > 27 && r.setDate(30),
				r.setMonth(r.getMonth() - o * s);
			var c = Kt(r, n) === -o;
			Fa(he(e)) && s === 1 && Kt(e, n) === 1 && (c = !1),
				(a = o * (s - Number(c)));
		}
		return a === 0 ? 0 : a;
	}
	function Na(e, t, r) {
		Oe(2, arguments);
		var n = Sa(e, t) / 1e3;
		return Ta(r == null ? void 0 : r.roundingMethod)(n);
	}
	var Pa = {
			lessThanXSeconds: {
				one: 'less than a second',
				other: 'less than {{count}} seconds',
			},
			xSeconds: { one: '1 second', other: '{{count}} seconds' },
			halfAMinute: 'half a minute',
			lessThanXMinutes: {
				one: 'less than a minute',
				other: 'less than {{count}} minutes',
			},
			xMinutes: { one: '1 minute', other: '{{count}} minutes' },
			aboutXHours: {
				one: 'about 1 hour',
				other: 'about {{count}} hours',
			},
			xHours: { one: '1 hour', other: '{{count}} hours' },
			xDays: { one: '1 day', other: '{{count}} days' },
			aboutXWeeks: {
				one: 'about 1 week',
				other: 'about {{count}} weeks',
			},
			xWeeks: { one: '1 week', other: '{{count}} weeks' },
			aboutXMonths: {
				one: 'about 1 month',
				other: 'about {{count}} months',
			},
			xMonths: { one: '1 month', other: '{{count}} months' },
			aboutXYears: {
				one: 'about 1 year',
				other: 'about {{count}} years',
			},
			xYears: { one: '1 year', other: '{{count}} years' },
			overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
			almostXYears: {
				one: 'almost 1 year',
				other: 'almost {{count}} years',
			},
		},
		Oa = function (e, t, r) {
			var n,
				o = Pa[e];
			return (
				typeof o == 'string'
					? (n = o)
					: t === 1
					? (n = o.one)
					: (n = o.other.replace('{{count}}', t.toString())),
				r != null && r.addSuffix
					? r.comparison && r.comparison > 0
						? 'in ' + n
						: n + ' ago'
					: n
			);
		},
		Ia = Oa;
	function Lr(e) {
		return function () {
			var t =
					arguments.length > 0 && arguments[0] !== void 0
						? arguments[0]
						: {},
				r = t.width ? String(t.width) : e.defaultWidth,
				n = e.formats[r] || e.formats[e.defaultWidth];
			return n;
		};
	}
	var Ra = {
			full: 'EEEE, MMMM do, y',
			long: 'MMMM do, y',
			medium: 'MMM d, y',
			short: 'MM/dd/yyyy',
		},
		Ua = {
			full: 'h:mm:ss a zzzz',
			long: 'h:mm:ss a z',
			medium: 'h:mm:ss a',
			short: 'h:mm a',
		},
		Va = {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: '{{date}}, {{time}}',
			short: '{{date}}, {{time}}',
		},
		$a = {
			date: Lr({ formats: Ra, defaultWidth: 'full' }),
			time: Lr({ formats: Ua, defaultWidth: 'full' }),
			dateTime: Lr({ formats: Va, defaultWidth: 'full' }),
		},
		Ma = $a,
		Ha = {
			lastWeek: "'last' eeee 'at' p",
			yesterday: "'yesterday at' p",
			today: "'today at' p",
			tomorrow: "'tomorrow at' p",
			nextWeek: "eeee 'at' p",
			other: 'P',
		},
		ja = function (e, t, r, n) {
			return Ha[e];
		},
		Ga = ja;
	function qt(e) {
		return function (t, r) {
			var n = r || {},
				o = n.context ? String(n.context) : 'standalone',
				s;
			if (o === 'formatting' && e.formattingValues) {
				var a = e.defaultFormattingWidth || e.defaultWidth,
					c = n.width ? String(n.width) : a;
				s = e.formattingValues[c] || e.formattingValues[a];
			} else {
				var l = e.defaultWidth,
					u = n.width ? String(n.width) : e.defaultWidth;
				s = e.values[u] || e.values[l];
			}
			var i = e.argumentCallback ? e.argumentCallback(t) : t;
			return s[i];
		};
	}
	var za = {
			narrow: ['B', 'A'],
			abbreviated: ['BC', 'AD'],
			wide: ['Before Christ', 'Anno Domini'],
		},
		Wa = {
			narrow: ['1', '2', '3', '4'],
			abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
			wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
		},
		Ja = {
			narrow: [
				'J',
				'F',
				'M',
				'A',
				'M',
				'J',
				'J',
				'A',
				'S',
				'O',
				'N',
				'D',
			],
			abbreviated: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec',
			],
			wide: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			],
		},
		Ya = {
			narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
			short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
			abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			wide: [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
			],
		},
		Za = {
			narrow: {
				am: 'a',
				pm: 'p',
				midnight: 'mi',
				noon: 'n',
				morning: 'morning',
				afternoon: 'afternoon',
				evening: 'evening',
				night: 'night',
			},
			abbreviated: {
				am: 'AM',
				pm: 'PM',
				midnight: 'midnight',
				noon: 'noon',
				morning: 'morning',
				afternoon: 'afternoon',
				evening: 'evening',
				night: 'night',
			},
			wide: {
				am: 'a.m.',
				pm: 'p.m.',
				midnight: 'midnight',
				noon: 'noon',
				morning: 'morning',
				afternoon: 'afternoon',
				evening: 'evening',
				night: 'night',
			},
		},
		Xa = {
			narrow: {
				am: 'a',
				pm: 'p',
				midnight: 'mi',
				noon: 'n',
				morning: 'in the morning',
				afternoon: 'in the afternoon',
				evening: 'in the evening',
				night: 'at night',
			},
			abbreviated: {
				am: 'AM',
				pm: 'PM',
				midnight: 'midnight',
				noon: 'noon',
				morning: 'in the morning',
				afternoon: 'in the afternoon',
				evening: 'in the evening',
				night: 'at night',
			},
			wide: {
				am: 'a.m.',
				pm: 'p.m.',
				midnight: 'midnight',
				noon: 'noon',
				morning: 'in the morning',
				afternoon: 'in the afternoon',
				evening: 'in the evening',
				night: 'at night',
			},
		},
		Qa = function (e, t) {
			var r = Number(e),
				n = r % 100;
			if (n > 20 || n < 10)
				switch (n % 10) {
					case 1:
						return r + 'st';
					case 2:
						return r + 'nd';
					case 3:
						return r + 'rd';
				}
			return r + 'th';
		},
		Ka = {
			ordinalNumber: Qa,
			era: qt({ values: za, defaultWidth: 'wide' }),
			quarter: qt({
				values: Wa,
				defaultWidth: 'wide',
				argumentCallback: function (e) {
					return e - 1;
				},
			}),
			month: qt({ values: Ja, defaultWidth: 'wide' }),
			day: qt({ values: Ya, defaultWidth: 'wide' }),
			dayPeriod: qt({
				values: Za,
				defaultWidth: 'wide',
				formattingValues: Xa,
				defaultFormattingWidth: 'wide',
			}),
		},
		eu = Ka;
	function St(e) {
		return function (t) {
			var r =
					arguments.length > 1 && arguments[1] !== void 0
						? arguments[1]
						: {},
				n = r.width,
				o =
					(n && e.matchPatterns[n]) ||
					e.matchPatterns[e.defaultMatchWidth],
				s = t.match(o);
			if (!s) return null;
			var a = s[0],
				c =
					(n && e.parsePatterns[n]) ||
					e.parsePatterns[e.defaultParseWidth],
				l = Array.isArray(c)
					? ru(c, function (f) {
							return f.test(a);
					  })
					: tu(c, function (f) {
							return f.test(a);
					  }),
				u;
			(u = e.valueCallback ? e.valueCallback(l) : l),
				(u = r.valueCallback ? r.valueCallback(u) : u);
			var i = t.slice(a.length);
			return { value: u, rest: i };
		};
	}
	function tu(e, t) {
		for (var r in e) if (e.hasOwnProperty(r) && t(e[r])) return r;
	}
	function ru(e, t) {
		for (var r = 0; r < e.length; r++) if (t(e[r])) return r;
	}
	function nu(e) {
		return function (t) {
			var r =
					arguments.length > 1 && arguments[1] !== void 0
						? arguments[1]
						: {},
				n = t.match(e.matchPattern);
			if (!n) return null;
			var o = n[0],
				s = t.match(e.parsePattern);
			if (!s) return null;
			var a = e.valueCallback ? e.valueCallback(s[0]) : s[0];
			a = r.valueCallback ? r.valueCallback(a) : a;
			var c = t.slice(o.length);
			return { value: a, rest: c };
		};
	}
	var ou = /^(\d+)(th|st|nd|rd)?/i,
		su = /\d+/i,
		au = {
			narrow: /^(b|a)/i,
			abbreviated:
				/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			wide: /^(before christ|before common era|anno domini|common era)/i,
		},
		uu = { any: [/^b/i, /^(a|c)/i] },
		iu = {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234](th|st|nd|rd)? quarter/i,
		},
		cu = { any: [/1/i, /2/i, /3/i, /4/i] },
		lu = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
			wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
		},
		fu = {
			narrow: [
				/^j/i,
				/^f/i,
				/^m/i,
				/^a/i,
				/^m/i,
				/^j/i,
				/^j/i,
				/^a/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i,
			],
			any: [
				/^ja/i,
				/^f/i,
				/^mar/i,
				/^ap/i,
				/^may/i,
				/^jun/i,
				/^jul/i,
				/^au/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i,
			],
		},
		pu = {
			narrow: /^[smtwf]/i,
			short: /^(su|mo|tu|we|th|fr|sa)/i,
			abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
			wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
		},
		du = {
			narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
			any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
		},
		hu = {
			narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
			any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
		},
		mu = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mi/i,
				noon: /^no/i,
				morning: /morning/i,
				afternoon: /afternoon/i,
				evening: /evening/i,
				night: /night/i,
			},
		},
		gu = {
			ordinalNumber: nu({
				matchPattern: ou,
				parsePattern: su,
				valueCallback: function (e) {
					return parseInt(e, 10);
				},
			}),
			era: St({
				matchPatterns: au,
				defaultMatchWidth: 'wide',
				parsePatterns: uu,
				defaultParseWidth: 'any',
			}),
			quarter: St({
				matchPatterns: iu,
				defaultMatchWidth: 'wide',
				parsePatterns: cu,
				defaultParseWidth: 'any',
				valueCallback: function (e) {
					return e + 1;
				},
			}),
			month: St({
				matchPatterns: lu,
				defaultMatchWidth: 'wide',
				parsePatterns: fu,
				defaultParseWidth: 'any',
			}),
			day: St({
				matchPatterns: pu,
				defaultMatchWidth: 'wide',
				parsePatterns: du,
				defaultParseWidth: 'any',
			}),
			dayPeriod: St({
				matchPatterns: hu,
				defaultMatchWidth: 'any',
				parsePatterns: mu,
				defaultParseWidth: 'any',
			}),
		},
		bu = gu,
		vu = {
			code: 'en-US',
			formatDistance: Ia,
			formatLong: Ma,
			formatRelative: Ga,
			localize: eu,
			match: bu,
			options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
		},
		Du = vu;
	function yu(e, t) {
		if (e == null)
			throw new TypeError(
				'assign requires that input parameter not be null or undefined'
			);
		t = t || {};
		for (var r in t)
			Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
		return e;
	}
	function Au(e) {
		return yu({}, e);
	}
	var In = 1440,
		wu = 2520,
		Fr = 43200,
		Eu = 86400;
	function xu(e, t) {
		var r =
			arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		Oe(2, arguments);
		var n = r.locale || Du;
		if (!n.formatDistance)
			throw new RangeError('locale must contain formatDistance property');
		var o = Kt(e, t);
		if (isNaN(o)) throw new RangeError('Invalid time value');
		var s = Au(r);
		(s.addSuffix = Boolean(r.addSuffix)), (s.comparison = o);
		var a, c;
		o > 0 ? ((a = he(t)), (c = he(e))) : ((a = he(e)), (c = he(t)));
		var l = Na(c, a),
			u = (Pn(c) - Pn(a)) / 1e3,
			i = Math.round((l - u) / 60),
			f;
		if (i < 2)
			return r.includeSeconds
				? l < 5
					? n.formatDistance('lessThanXSeconds', 5, s)
					: l < 10
					? n.formatDistance('lessThanXSeconds', 10, s)
					: l < 20
					? n.formatDistance('lessThanXSeconds', 20, s)
					: l < 40
					? n.formatDistance('halfAMinute', null, s)
					: l < 60
					? n.formatDistance('lessThanXMinutes', 1, s)
					: n.formatDistance('xMinutes', 1, s)
				: i === 0
				? n.formatDistance('lessThanXMinutes', 1, s)
				: n.formatDistance('xMinutes', i, s);
		if (i < 45) return n.formatDistance('xMinutes', i, s);
		if (i < 90) return n.formatDistance('aboutXHours', 1, s);
		if (i < In) {
			var h = Math.round(i / 60);
			return n.formatDistance('aboutXHours', h, s);
		} else {
			if (i < wu) return n.formatDistance('xDays', 1, s);
			if (i < Fr) {
				var g = Math.round(i / In);
				return n.formatDistance('xDays', g, s);
			} else if (i < Eu)
				return (
					(f = Math.round(i / Fr)),
					n.formatDistance('aboutXMonths', f, s)
				);
		}
		if (((f = _a(c, a)), f < 12)) {
			var p = Math.round(i / Fr);
			return n.formatDistance('xMonths', p, s);
		} else {
			var D = f % 12,
				y = Math.floor(f / 12);
			return D < 3
				? n.formatDistance('aboutXYears', y, s)
				: D < 9
				? n.formatDistance('overXYears', y, s)
				: n.formatDistance('almostXYears', y + 1, s);
		}
	}
	var _r = {},
		Ie = {},
		ft = {};
	(function (e) {
		Object.defineProperty(e, '__esModule', { value: !0 }),
			(e.Doctype =
				e.CDATA =
				e.Tag =
				e.Style =
				e.Script =
				e.Comment =
				e.Directive =
				e.Text =
				e.Root =
				e.isTag =
				e.ElementType =
					void 0);
		var t;
		(function (n) {
			(n.Root = 'root'),
				(n.Text = 'text'),
				(n.Directive = 'directive'),
				(n.Comment = 'comment'),
				(n.Script = 'script'),
				(n.Style = 'style'),
				(n.Tag = 'tag'),
				(n.CDATA = 'cdata'),
				(n.Doctype = 'doctype');
		})((t = e.ElementType || (e.ElementType = {})));
		function r(n) {
			return (
				n.type === t.Tag || n.type === t.Script || n.type === t.Style
			);
		}
		(e.isTag = r),
			(e.Root = t.Root),
			(e.Text = t.Text),
			(e.Directive = t.Directive),
			(e.Comment = t.Comment),
			(e.Script = t.Script),
			(e.Style = t.Style),
			(e.Tag = t.Tag),
			(e.CDATA = t.CDATA),
			(e.Doctype = t.Doctype);
	})(ft);
	var $ = {},
		tt =
			(q && q.__extends) ||
			(function () {
				var e = function (t, r) {
					return (
						(e =
							Object.setPrototypeOf ||
							({ __proto__: [] } instanceof Array &&
								function (n, o) {
									n.__proto__ = o;
								}) ||
							function (n, o) {
								for (var s in o)
									Object.prototype.hasOwnProperty.call(
										o,
										s
									) && (n[s] = o[s]);
							}),
						e(t, r)
					);
				};
				return function (t, r) {
					if (typeof r != 'function' && r !== null)
						throw new TypeError(
							'Class extends value ' +
								String(r) +
								' is not a constructor or null'
						);
					e(t, r);
					function n() {
						this.constructor = t;
					}
					t.prototype =
						r === null
							? Object.create(r)
							: ((n.prototype = r.prototype), new n());
				};
			})(),
		Bt =
			(q && q.__assign) ||
			function () {
				return (
					(Bt =
						Object.assign ||
						function (e) {
							for (
								var t, r = 1, n = arguments.length;
								r < n;
								r++
							) {
								t = arguments[r];
								for (var o in t)
									Object.prototype.hasOwnProperty.call(
										t,
										o
									) && (e[o] = t[o]);
							}
							return e;
						}),
					Bt.apply(this, arguments)
				);
			};
	Object.defineProperty($, '__esModule', { value: !0 }),
		($.cloneNode =
			$.hasChildren =
			$.isDocument =
			$.isDirective =
			$.isComment =
			$.isText =
			$.isCDATA =
			$.isTag =
			$.Element =
			$.Document =
			$.NodeWithChildren =
			$.ProcessingInstruction =
			$.Comment =
			$.Text =
			$.DataNode =
			$.Node =
				void 0);
	var te = ft,
		Cu = new Map([
			[te.ElementType.Tag, 1],
			[te.ElementType.Script, 1],
			[te.ElementType.Style, 1],
			[te.ElementType.Directive, 1],
			[te.ElementType.Text, 3],
			[te.ElementType.CDATA, 4],
			[te.ElementType.Comment, 8],
			[te.ElementType.Root, 9],
		]),
		Nr = (function () {
			function e(t) {
				(this.type = t),
					(this.parent = null),
					(this.prev = null),
					(this.next = null),
					(this.startIndex = null),
					(this.endIndex = null);
			}
			return (
				Object.defineProperty(e.prototype, 'nodeType', {
					get: function () {
						var t;
						return (t = Cu.get(this.type)) !== null && t !== void 0
							? t
							: 1;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(e.prototype, 'parentNode', {
					get: function () {
						return this.parent;
					},
					set: function (t) {
						this.parent = t;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(e.prototype, 'previousSibling', {
					get: function () {
						return this.prev;
					},
					set: function (t) {
						this.prev = t;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(e.prototype, 'nextSibling', {
					get: function () {
						return this.next;
					},
					set: function (t) {
						this.next = t;
					},
					enumerable: !1,
					configurable: !0,
				}),
				(e.prototype.cloneNode = function (t) {
					return t === void 0 && (t = !1), Pr(this, t);
				}),
				e
			);
		})();
	$.Node = Nr;
	var er = (function (e) {
		tt(t, e);
		function t(r, n) {
			var o = e.call(this, r) || this;
			return (o.data = n), o;
		}
		return (
			Object.defineProperty(t.prototype, 'nodeValue', {
				get: function () {
					return this.data;
				},
				set: function (r) {
					this.data = r;
				},
				enumerable: !1,
				configurable: !0,
			}),
			t
		);
	})(Nr);
	$.DataNode = er;
	var Rn = (function (e) {
		tt(t, e);
		function t(r) {
			return e.call(this, te.ElementType.Text, r) || this;
		}
		return t;
	})(er);
	$.Text = Rn;
	var Un = (function (e) {
		tt(t, e);
		function t(r) {
			return e.call(this, te.ElementType.Comment, r) || this;
		}
		return t;
	})(er);
	$.Comment = Un;
	var Vn = (function (e) {
		tt(t, e);
		function t(r, n) {
			var o = e.call(this, te.ElementType.Directive, n) || this;
			return (o.name = r), o;
		}
		return t;
	})(er);
	$.ProcessingInstruction = Vn;
	var tr = (function (e) {
		tt(t, e);
		function t(r, n) {
			var o = e.call(this, r) || this;
			return (o.children = n), o;
		}
		return (
			Object.defineProperty(t.prototype, 'firstChild', {
				get: function () {
					var r;
					return (r = this.children[0]) !== null && r !== void 0
						? r
						: null;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, 'lastChild', {
				get: function () {
					return this.children.length > 0
						? this.children[this.children.length - 1]
						: null;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, 'childNodes', {
				get: function () {
					return this.children;
				},
				set: function (r) {
					this.children = r;
				},
				enumerable: !1,
				configurable: !0,
			}),
			t
		);
	})(Nr);
	$.NodeWithChildren = tr;
	var $n = (function (e) {
		tt(t, e);
		function t(r) {
			return e.call(this, te.ElementType.Root, r) || this;
		}
		return t;
	})(tr);
	$.Document = $n;
	var Mn = (function (e) {
		tt(t, e);
		function t(r, n, o, s) {
			o === void 0 && (o = []),
				s === void 0 &&
					(s =
						r === 'script'
							? te.ElementType.Script
							: r === 'style'
							? te.ElementType.Style
							: te.ElementType.Tag);
			var a = e.call(this, s, o) || this;
			return (a.name = r), (a.attribs = n), a;
		}
		return (
			Object.defineProperty(t.prototype, 'tagName', {
				get: function () {
					return this.name;
				},
				set: function (r) {
					this.name = r;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, 'attributes', {
				get: function () {
					var r = this;
					return Object.keys(this.attribs).map(function (n) {
						var o, s;
						return {
							name: n,
							value: r.attribs[n],
							namespace:
								(o = r['x-attribsNamespace']) === null ||
								o === void 0
									? void 0
									: o[n],
							prefix:
								(s = r['x-attribsPrefix']) === null ||
								s === void 0
									? void 0
									: s[n],
						};
					});
				},
				enumerable: !1,
				configurable: !0,
			}),
			t
		);
	})(tr);
	$.Element = Mn;
	function Hn(e) {
		return (0, te.isTag)(e);
	}
	$.isTag = Hn;
	function jn(e) {
		return e.type === te.ElementType.CDATA;
	}
	$.isCDATA = jn;
	function Gn(e) {
		return e.type === te.ElementType.Text;
	}
	$.isText = Gn;
	function zn(e) {
		return e.type === te.ElementType.Comment;
	}
	$.isComment = zn;
	function Wn(e) {
		return e.type === te.ElementType.Directive;
	}
	$.isDirective = Wn;
	function Jn(e) {
		return e.type === te.ElementType.Root;
	}
	$.isDocument = Jn;
	function qu(e) {
		return Object.prototype.hasOwnProperty.call(e, 'children');
	}
	$.hasChildren = qu;
	function Pr(e, t) {
		t === void 0 && (t = !1);
		var r;
		if (Gn(e)) r = new Rn(e.data);
		else if (zn(e)) r = new Un(e.data);
		else if (Hn(e)) {
			var n = t ? Or(e.children) : [],
				o = new Mn(e.name, Bt({}, e.attribs), n);
			n.forEach(function (l) {
				return (l.parent = o);
			}),
				e['x-attribsNamespace'] &&
					(o['x-attribsNamespace'] = Bt({}, e['x-attribsNamespace'])),
				e['x-attribsPrefix'] &&
					(o['x-attribsPrefix'] = Bt({}, e['x-attribsPrefix'])),
				(r = o);
		} else if (jn(e)) {
			var n = t ? Or(e.children) : [],
				s = new tr(te.ElementType.CDATA, n);
			n.forEach(function (u) {
				return (u.parent = s);
			}),
				(r = s);
		} else if (Jn(e)) {
			var n = t ? Or(e.children) : [],
				a = new $n(n);
			n.forEach(function (u) {
				return (u.parent = a);
			}),
				e['x-mode'] && (a['x-mode'] = e['x-mode']),
				(r = a);
		} else if (Wn(e)) {
			var c = new Vn(e.name, e.data);
			e['x-name'] != null &&
				((c['x-name'] = e['x-name']),
				(c['x-publicId'] = e['x-publicId']),
				(c['x-systemId'] = e['x-systemId'])),
				(r = c);
		} else throw new Error('Not implemented yet: ' + e.type);
		return (r.startIndex = e.startIndex), (r.endIndex = e.endIndex), r;
	}
	$.cloneNode = Pr;
	function Or(e) {
		for (
			var t = e.map(function (n) {
					return Pr(n, !0);
				}),
				r = 1;
			r < t.length;
			r++
		)
			(t[r].prev = t[r - 1]), (t[r - 1].next = t[r]);
		return t;
	}
	(function (e) {
		var t =
				(q && q.__createBinding) ||
				(Object.create
					? function (l, u, i, f) {
							f === void 0 && (f = i),
								Object.defineProperty(l, f, {
									enumerable: !0,
									get: function () {
										return u[i];
									},
								});
					  }
					: function (l, u, i, f) {
							f === void 0 && (f = i), (l[f] = u[i]);
					  }),
			r =
				(q && q.__exportStar) ||
				function (l, u) {
					for (var i in l)
						i !== 'default' &&
							!Object.prototype.hasOwnProperty.call(u, i) &&
							t(u, l, i);
				};
		Object.defineProperty(e, '__esModule', { value: !0 }),
			(e.DomHandler = void 0);
		var n = ft,
			o = $;
		r($, e);
		var s = /\s+/g,
			a = {
				normalizeWhitespace: !1,
				withStartIndices: !1,
				withEndIndices: !1,
				xmlMode: !1,
			},
			c = (function () {
				function l(u, i, f) {
					(this.dom = []),
						(this.root = new o.Document(this.dom)),
						(this.done = !1),
						(this.tagStack = [this.root]),
						(this.lastNode = null),
						(this.parser = null),
						typeof i == 'function' && ((f = i), (i = a)),
						typeof u == 'object' && ((i = u), (u = void 0)),
						(this.callback = u != null ? u : null),
						(this.options = i != null ? i : a),
						(this.elementCB = f != null ? f : null);
				}
				return (
					(l.prototype.onparserinit = function (u) {
						this.parser = u;
					}),
					(l.prototype.onreset = function () {
						(this.dom = []),
							(this.root = new o.Document(this.dom)),
							(this.done = !1),
							(this.tagStack = [this.root]),
							(this.lastNode = null),
							(this.parser = null);
					}),
					(l.prototype.onend = function () {
						this.done ||
							((this.done = !0),
							(this.parser = null),
							this.handleCallback(null));
					}),
					(l.prototype.onerror = function (u) {
						this.handleCallback(u);
					}),
					(l.prototype.onclosetag = function () {
						this.lastNode = null;
						var u = this.tagStack.pop();
						this.options.withEndIndices &&
							(u.endIndex = this.parser.endIndex),
							this.elementCB && this.elementCB(u);
					}),
					(l.prototype.onopentag = function (u, i) {
						var f = this.options.xmlMode
								? n.ElementType.Tag
								: void 0,
							h = new o.Element(u, i, void 0, f);
						this.addNode(h), this.tagStack.push(h);
					}),
					(l.prototype.ontext = function (u) {
						var i = this.options.normalizeWhitespace,
							f = this.lastNode;
						if (f && f.type === n.ElementType.Text)
							i
								? (f.data = (f.data + u).replace(s, ' '))
								: (f.data += u),
								this.options.withEndIndices &&
									(f.endIndex = this.parser.endIndex);
						else {
							i && (u = u.replace(s, ' '));
							var h = new o.Text(u);
							this.addNode(h), (this.lastNode = h);
						}
					}),
					(l.prototype.oncomment = function (u) {
						if (
							this.lastNode &&
							this.lastNode.type === n.ElementType.Comment
						) {
							this.lastNode.data += u;
							return;
						}
						var i = new o.Comment(u);
						this.addNode(i), (this.lastNode = i);
					}),
					(l.prototype.oncommentend = function () {
						this.lastNode = null;
					}),
					(l.prototype.oncdatastart = function () {
						var u = new o.Text(''),
							i = new o.NodeWithChildren(n.ElementType.CDATA, [
								u,
							]);
						this.addNode(i), (u.parent = i), (this.lastNode = u);
					}),
					(l.prototype.oncdataend = function () {
						this.lastNode = null;
					}),
					(l.prototype.onprocessinginstruction = function (u, i) {
						var f = new o.ProcessingInstruction(u, i);
						this.addNode(f);
					}),
					(l.prototype.handleCallback = function (u) {
						if (typeof this.callback == 'function')
							this.callback(u, this.dom);
						else if (u) throw u;
					}),
					(l.prototype.addNode = function (u) {
						var i = this.tagStack[this.tagStack.length - 1],
							f = i.children[i.children.length - 1];
						this.options.withStartIndices &&
							(u.startIndex = this.parser.startIndex),
							this.options.withEndIndices &&
								(u.endIndex = this.parser.endIndex),
							i.children.push(u),
							f && ((u.prev = f), (f.next = u)),
							(u.parent = i),
							(this.lastNode = null);
					}),
					l
				);
			})();
		(e.DomHandler = c), (e.default = c);
	})(Ie);
	var Ye = {},
		Me = {},
		Yn = { exports: {} };
	(function (e) {
		(function (t, r) {
			e.exports ? (e.exports = r()) : (t.nearley = r());
		})(q, function () {
			function t(u, i, f) {
				return (
					(this.id = ++t.highestId),
					(this.name = u),
					(this.symbols = i),
					(this.postprocess = f),
					this
				);
			}
			(t.highestId = 0),
				(t.prototype.toString = function (u) {
					var i =
						typeof u == 'undefined'
							? this.symbols.map(l).join(' ')
							: this.symbols.slice(0, u).map(l).join(' ') +
							  ' \u25CF ' +
							  this.symbols.slice(u).map(l).join(' ');
					return this.name + ' \u2192 ' + i;
				});
			function r(u, i, f, h) {
				(this.rule = u),
					(this.dot = i),
					(this.reference = f),
					(this.data = []),
					(this.wantedBy = h),
					(this.isComplete = this.dot === u.symbols.length);
			}
			(r.prototype.toString = function () {
				return (
					'{' +
					this.rule.toString(this.dot) +
					'}, from: ' +
					(this.reference || 0)
				);
			}),
				(r.prototype.nextState = function (u) {
					var i = new r(
						this.rule,
						this.dot + 1,
						this.reference,
						this.wantedBy
					);
					return (
						(i.left = this),
						(i.right = u),
						i.isComplete &&
							((i.data = i.build()), (i.right = void 0)),
						i
					);
				}),
				(r.prototype.build = function () {
					var u = [],
						i = this;
					do u.push(i.right.data), (i = i.left);
					while (i.left);
					return u.reverse(), u;
				}),
				(r.prototype.finish = function () {
					this.rule.postprocess &&
						(this.data = this.rule.postprocess(
							this.data,
							this.reference,
							a.fail
						));
				});
			function n(u, i) {
				(this.grammar = u),
					(this.index = i),
					(this.states = []),
					(this.wants = {}),
					(this.scannable = []),
					(this.completed = {});
			}
			(n.prototype.process = function (u) {
				for (
					var i = this.states,
						f = this.wants,
						h = this.completed,
						g = 0;
					g < i.length;
					g++
				) {
					var p = i[g];
					if (p.isComplete) {
						if ((p.finish(), p.data !== a.fail)) {
							for (var D = p.wantedBy, y = D.length; y--; ) {
								var C = D[y];
								this.complete(C, p);
							}
							if (p.reference === this.index) {
								var S = p.rule.name;
								(this.completed[S] =
									this.completed[S] || []).push(p);
							}
						}
					} else {
						var S = p.rule.symbols[p.dot];
						if (typeof S != 'string') {
							this.scannable.push(p);
							continue;
						}
						if (f[S]) {
							if ((f[S].push(p), h.hasOwnProperty(S)))
								for (var E = h[S], y = 0; y < E.length; y++) {
									var X = E[y];
									this.complete(p, X);
								}
						} else (f[S] = [p]), this.predict(S);
					}
				}
			}),
				(n.prototype.predict = function (u) {
					for (
						var i = this.grammar.byName[u] || [], f = 0;
						f < i.length;
						f++
					) {
						var h = i[f],
							g = this.wants[u],
							p = new r(h, 0, this.index, g);
						this.states.push(p);
					}
				}),
				(n.prototype.complete = function (u, i) {
					var f = u.nextState(i);
					this.states.push(f);
				});
			function o(u, i) {
				(this.rules = u), (this.start = i || this.rules[0].name);
				var f = (this.byName = {});
				this.rules.forEach(function (h) {
					f.hasOwnProperty(h.name) || (f[h.name] = []),
						f[h.name].push(h);
				});
			}
			o.fromCompiled = function (u, i) {
				var f = u.Lexer;
				u.ParserStart && ((i = u.ParserStart), (u = u.ParserRules));
				var u = u.map(function (g) {
						return new t(g.name, g.symbols, g.postprocess);
					}),
					h = new o(u, i);
				return (h.lexer = f), h;
			};
			function s() {
				this.reset('');
			}
			(s.prototype.reset = function (u, i) {
				(this.buffer = u),
					(this.index = 0),
					(this.line = i ? i.line : 1),
					(this.lastLineBreak = i ? -i.col : 0);
			}),
				(s.prototype.next = function () {
					if (this.index < this.buffer.length) {
						var u = this.buffer[this.index++];
						return (
							u ===
								`
` && ((this.line += 1), (this.lastLineBreak = this.index)),
							{ value: u }
						);
					}
				}),
				(s.prototype.save = function () {
					return {
						line: this.line,
						col: this.index - this.lastLineBreak,
					};
				}),
				(s.prototype.formatError = function (u, i) {
					var f = this.buffer;
					if (typeof f == 'string') {
						var h = f
							.split(
								`
`
							)
							.slice(Math.max(0, this.line - 5), this.line);
						f.indexOf(
							`
`,
							this.index
						);
						var g = this.index - this.lastLineBreak,
							p = String(this.line).length;
						return (
							(i +=
								' at line ' +
								this.line +
								' col ' +
								g +
								`:

`),
							(i += h.map(function (y, C) {
								return (
									D(this.line - h.length + C + 1, p) + ' ' + y
								);
							}, this).join(`
`)),
							(i +=
								`
` +
								D('', p + g) +
								`^
`),
							i
						);
					} else return i + ' at index ' + (this.index - 1);
					function D(y, C) {
						var S = String(y);
						return Array(C - S.length + 1).join(' ') + S;
					}
				});
			function a(u, i, f) {
				if (u instanceof o)
					var h = u,
						f = i;
				else var h = o.fromCompiled(u, i);
				(this.grammar = h),
					(this.options = {
						keepHistory: !1,
						lexer: h.lexer || new s(),
					});
				for (var g in f || {}) this.options[g] = f[g];
				(this.lexer = this.options.lexer), (this.lexerState = void 0);
				var p = new n(h, 0);
				(this.table = [p]),
					(p.wants[h.start] = []),
					p.predict(h.start),
					p.process(),
					(this.current = 0);
			}
			(a.fail = {}),
				(a.prototype.feed = function (u) {
					var i = this.lexer;
					i.reset(u, this.lexerState);
					for (var f; ; ) {
						try {
							if (((f = i.next()), !f)) break;
						} catch (j) {
							var D = new n(this.grammar, this.current + 1);
							this.table.push(D);
							var h = new Error(this.reportLexerError(j));
							throw (
								((h.offset = this.current),
								(h.token = j.token),
								h)
							);
						}
						var g = this.table[this.current];
						this.options.keepHistory ||
							delete this.table[this.current - 1];
						var p = this.current + 1,
							D = new n(this.grammar, p);
						this.table.push(D);
						for (
							var y = f.text !== void 0 ? f.text : f.value,
								C = i.constructor === s ? f.value : f,
								S = g.scannable,
								E = S.length;
							E--;

						) {
							var X = S[E],
								U = X.rule.symbols[X.dot];
							if (
								U.test
									? U.test(C)
									: U.type
									? U.type === f.type
									: U.literal === y
							) {
								var O = X.nextState({
									data: C,
									token: f,
									isToken: !0,
									reference: p - 1,
								});
								D.states.push(O);
							}
						}
						if ((D.process(), D.states.length === 0)) {
							var h = new Error(this.reportError(f));
							throw ((h.offset = this.current), (h.token = f), h);
						}
						this.options.keepHistory && (g.lexerState = i.save()),
							this.current++;
					}
					return (
						g && (this.lexerState = i.save()),
						(this.results = this.finish()),
						this
					);
				}),
				(a.prototype.reportLexerError = function (u) {
					var i,
						f,
						h = u.token;
					return (
						h
							? ((i =
									'input ' +
									JSON.stringify(h.text[0]) +
									' (lexer error)'),
							  (f = this.lexer.formatError(h, 'Syntax error')))
							: ((i = 'input (lexer error)'), (f = u.message)),
						this.reportErrorCommon(f, i)
					);
				}),
				(a.prototype.reportError = function (u) {
					var i =
							(u.type ? u.type + ' token: ' : '') +
							JSON.stringify(u.value !== void 0 ? u.value : u),
						f = this.lexer.formatError(u, 'Syntax error');
					return this.reportErrorCommon(f, i);
				}),
				(a.prototype.reportErrorCommon = function (u, i) {
					var f = [];
					f.push(u);
					var h = this.table.length - 2,
						g = this.table[h],
						p = g.states.filter(function (y) {
							var C = y.rule.symbols[y.dot];
							return C && typeof C != 'string';
						});
					if (p.length === 0)
						f.push(
							'Unexpected ' +
								i +
								`. I did not expect any more input. Here is the state of my parse table:
`
						),
							this.displayStateStack(g.states, f);
					else {
						f.push(
							'Unexpected ' +
								i +
								`. Instead, I was expecting to see one of the following:
`
						);
						var D = p.map(function (y) {
							return this.buildFirstStateStack(y, []) || [y];
						}, this);
						D.forEach(function (y) {
							var C = y[0],
								S = C.rule.symbols[C.dot],
								E = this.getSymbolDisplay(S);
							f.push('A ' + E + ' based on:'),
								this.displayStateStack(y, f);
						}, this);
					}
					return (
						f.push(''),
						f.join(`
`)
					);
				}),
				(a.prototype.displayStateStack = function (u, i) {
					for (var f, h = 0, g = 0; g < u.length; g++) {
						var p = u[g],
							D = p.rule.toString(p.dot);
						D === f
							? h++
							: (h > 0 &&
									i.push(
										'    ^ ' +
											h +
											' more lines identical to this'
									),
							  (h = 0),
							  i.push('    ' + D)),
							(f = D);
					}
				}),
				(a.prototype.getSymbolDisplay = function (u) {
					return c(u);
				}),
				(a.prototype.buildFirstStateStack = function (u, i) {
					if (i.indexOf(u) !== -1) return null;
					if (u.wantedBy.length === 0) return [u];
					var f = u.wantedBy[0],
						h = [u].concat(i),
						g = this.buildFirstStateStack(f, h);
					return g === null ? null : [u].concat(g);
				}),
				(a.prototype.save = function () {
					var u = this.table[this.current];
					return (u.lexerState = this.lexerState), u;
				}),
				(a.prototype.restore = function (u) {
					var i = u.index;
					(this.current = i),
						(this.table[i] = u),
						this.table.splice(i + 1),
						(this.lexerState = u.lexerState),
						(this.results = this.finish());
				}),
				(a.prototype.rewind = function (u) {
					if (!this.options.keepHistory)
						throw new Error(
							'set option `keepHistory` to enable rewinding'
						);
					this.restore(this.table[u]);
				}),
				(a.prototype.finish = function () {
					var u = [],
						i = this.grammar.start,
						f = this.table[this.table.length - 1];
					return (
						f.states.forEach(function (h) {
							h.rule.name === i &&
								h.dot === h.rule.symbols.length &&
								h.reference === 0 &&
								h.data !== a.fail &&
								u.push(h);
						}),
						u.map(function (h) {
							return h.data;
						})
					);
				});
			function c(u) {
				var i = typeof u;
				if (i === 'string') return u;
				if (i === 'object') {
					if (u.literal) return JSON.stringify(u.literal);
					if (u instanceof RegExp) return 'character matching ' + u;
					if (u.type) return u.type + ' token';
					if (u.test) return 'token matching ' + String(u.test);
					throw new Error('Unknown symbol type: ' + u);
				}
			}
			function l(u) {
				var i = typeof u;
				if (i === 'string') return u;
				if (i === 'object') {
					if (u.literal) return JSON.stringify(u.literal);
					if (u instanceof RegExp) return u.toString();
					if (u.type) return '%' + u.type;
					if (u.test) return '<' + String(u.test) + '>';
					throw new Error('Unknown symbol type: ' + u);
				}
			}
			return { Parser: a, Grammar: o, Rule: t };
		});
	})(Yn);
	var Zn = { exports: {} };
	(function (e) {
		(function (t, r) {
			e.exports ? (e.exports = r()) : (t.moo = r());
		})(q, function () {
			var t = Object.prototype.hasOwnProperty,
				r = Object.prototype.toString,
				n = typeof new RegExp().sticky == 'boolean';
			function o(d) {
				return d && r.call(d) === '[object RegExp]';
			}
			function s(d) {
				return d && typeof d == 'object' && !o(d) && !Array.isArray(d);
			}
			function a(d) {
				return d.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
			}
			function c(d) {
				var b = new RegExp('|' + d);
				return b.exec('').length - 1;
			}
			function l(d) {
				return '(' + d + ')';
			}
			function u(d) {
				if (!d.length) return '(?!)';
				var b = d
					.map(function (A) {
						return '(?:' + A + ')';
					})
					.join('|');
				return '(?:' + b + ')';
			}
			function i(d) {
				if (typeof d == 'string') return '(?:' + a(d) + ')';
				if (o(d)) {
					if (d.ignoreCase)
						throw new Error('RegExp /i flag not allowed');
					if (d.global) throw new Error('RegExp /g flag is implied');
					if (d.sticky) throw new Error('RegExp /y flag is implied');
					if (d.multiline)
						throw new Error('RegExp /m flag is implied');
					return d.source;
				} else throw new Error('Not a pattern: ' + d);
			}
			function f(d) {
				for (
					var b = Object.getOwnPropertyNames(d), A = [], B = 0;
					B < b.length;
					B++
				) {
					var L = b[B],
						x = d[L],
						F = [].concat(x);
					if (L === 'include') {
						for (var Y = 0; Y < F.length; Y++)
							A.push({ include: F[Y] });
						continue;
					}
					var M = [];
					F.forEach(function (T) {
						s(T)
							? (M.length && A.push(g(L, M)),
							  A.push(g(L, T)),
							  (M = []))
							: M.push(T);
					}),
						M.length && A.push(g(L, M));
				}
				return A;
			}
			function h(d) {
				for (var b = [], A = 0; A < d.length; A++) {
					var B = d[A];
					if (B.include) {
						for (
							var L = [].concat(B.include), x = 0;
							x < L.length;
							x++
						)
							b.push({ include: L[x] });
						continue;
					}
					if (!B.type)
						throw new Error(
							'Rule has no type: ' + JSON.stringify(B)
						);
					b.push(g(B.type, B));
				}
				return b;
			}
			function g(d, b) {
				if ((s(b) || (b = { match: b }), b.include))
					throw new Error(
						'Matching rules cannot also include states'
					);
				var A = {
					defaultType: d,
					lineBreaks: !!b.error || !!b.fallback,
					pop: !1,
					next: null,
					push: null,
					error: !1,
					fallback: !1,
					value: null,
					type: null,
					shouldThrow: !1,
				};
				for (var B in b) t.call(b, B) && (A[B] = b[B]);
				if (typeof A.type == 'string' && d !== A.type)
					throw new Error(
						"Type transform cannot be a string (type '" +
							A.type +
							"' for token '" +
							d +
							"')"
					);
				var L = A.match;
				return (
					(A.match = Array.isArray(L) ? L : L ? [L] : []),
					A.match.sort(function (x, F) {
						return o(x) && o(F)
							? 0
							: o(F)
							? -1
							: o(x)
							? 1
							: F.length - x.length;
					}),
					A
				);
			}
			function p(d) {
				return Array.isArray(d) ? h(d) : f(d);
			}
			var D = g('error', { lineBreaks: !0, shouldThrow: !0 });
			function y(d, b) {
				for (
					var A = null,
						B = Object.create(null),
						L = !0,
						x = null,
						F = [],
						Y = [],
						M = 0;
					M < d.length;
					M++
				)
					d[M].fallback && (L = !1);
				for (var M = 0; M < d.length; M++) {
					var T = d[M];
					if (T.include)
						throw new Error(
							'Inheritance is not allowed in stateless lexers'
						);
					if (T.error || T.fallback) {
						if (A)
							throw !T.fallback == !A.fallback
								? new Error(
										'Multiple ' +
											(T.fallback
												? 'fallback'
												: 'error') +
											" rules not allowed (for token '" +
											T.defaultType +
											"')"
								  )
								: new Error(
										"fallback and error are mutually exclusive (for token '" +
											T.defaultType +
											"')"
								  );
						A = T;
					}
					var w = T.match.slice();
					if (L)
						for (
							;
							w.length &&
							typeof w[0] == 'string' &&
							w[0].length === 1;

						) {
							var _ = w.shift();
							B[_.charCodeAt(0)] = T;
						}
					if (T.pop || T.push || T.next) {
						if (!b)
							throw new Error(
								"State-switching options are not allowed in stateless lexers (for token '" +
									T.defaultType +
									"')"
							);
						if (T.fallback)
							throw new Error(
								"State-switching options are not allowed on fallback tokens (for token '" +
									T.defaultType +
									"')"
							);
					}
					if (w.length !== 0) {
						(L = !1), F.push(T);
						for (var k = 0; k < w.length; k++) {
							var V = w[k];
							if (!!o(V)) {
								if (x === null) x = V.unicode;
								else if (x !== V.unicode && T.fallback === !1)
									throw new Error(
										'If one rule is /u then all must be'
									);
							}
						}
						var oe = u(w.map(i)),
							R = new RegExp(oe);
						if (R.test(''))
							throw new Error(
								'RegExp matches empty string: ' + R
							);
						var P = c(oe);
						if (P > 0)
							throw new Error(
								'RegExp has capture groups: ' +
									R +
									`
Use (?: \u2026 ) instead`
							);
						if (
							!T.lineBreaks &&
							R.test(`
`)
						)
							throw new Error(
								'Rule should declare lineBreaks: ' + R
							);
						Y.push(l(oe));
					}
				}
				var G = A && A.fallback,
					H = n && !G ? 'ym' : 'gm',
					se = n || G ? '' : '|';
				x === !0 && (H += 'u');
				var de = new RegExp(u(Y) + se, H);
				return { regexp: de, groups: F, fast: B, error: A || D };
			}
			function C(d) {
				var b = y(p(d));
				return new U({ start: b }, 'start');
			}
			function S(d, b, A) {
				var B = d && (d.push || d.next);
				if (B && !A[B])
					throw new Error(
						"Missing state '" +
							B +
							"' (in token '" +
							d.defaultType +
							"' of state '" +
							b +
							"')"
					);
				if (d && d.pop && +d.pop != 1)
					throw new Error(
						"pop must be 1 (in token '" +
							d.defaultType +
							"' of state '" +
							b +
							"')"
					);
			}
			function E(d, b) {
				var A = d.$all ? p(d.$all) : [];
				delete d.$all;
				var B = Object.getOwnPropertyNames(d);
				b || (b = B[0]);
				for (var L = Object.create(null), x = 0; x < B.length; x++) {
					var F = B[x];
					L[F] = p(d[F]).concat(A);
				}
				for (var x = 0; x < B.length; x++)
					for (
						var F = B[x], Y = L[F], M = Object.create(null), T = 0;
						T < Y.length;
						T++
					) {
						var w = Y[T];
						if (!!w.include) {
							var _ = [T, 1];
							if (w.include !== F && !M[w.include]) {
								M[w.include] = !0;
								var k = L[w.include];
								if (!k)
									throw new Error(
										"Cannot include nonexistent state '" +
											w.include +
											"' (in state '" +
											F +
											"')"
									);
								for (var V = 0; V < k.length; V++) {
									var oe = k[V];
									Y.indexOf(oe) === -1 && _.push(oe);
								}
							}
							Y.splice.apply(Y, _), T--;
						}
					}
				for (var R = Object.create(null), x = 0; x < B.length; x++) {
					var F = B[x];
					R[F] = y(L[F], !0);
				}
				for (var x = 0; x < B.length; x++) {
					for (
						var P = B[x], G = R[P], H = G.groups, T = 0;
						T < H.length;
						T++
					)
						S(H[T], P, R);
					for (
						var se = Object.getOwnPropertyNames(G.fast), T = 0;
						T < se.length;
						T++
					)
						S(G.fast[se[T]], P, R);
				}
				return new U(R, b);
			}
			function X(d) {
				for (
					var b = Object.create(null),
						A = Object.create(null),
						B = Object.getOwnPropertyNames(d),
						L = 0;
					L < B.length;
					L++
				) {
					var x = B[L],
						F = d[x],
						Y = Array.isArray(F) ? F : [F];
					Y.forEach(function (k) {
						if (
							((A[k.length] = A[k.length] || []).push(k),
							typeof k != 'string')
						)
							throw new Error(
								"keyword must be string (in keyword '" +
									x +
									"')"
							);
						b[k] = x;
					});
				}
				function M(k) {
					return JSON.stringify(k);
				}
				var T = '';
				T += `switch (value.length) {
`;
				for (var w in A) {
					var _ = A[w];
					(T +=
						'case ' +
						w +
						`:
`),
						(T += `switch (value) {
`),
						_.forEach(function (k) {
							var V = b[k];
							T +=
								'case ' +
								M(k) +
								': return ' +
								M(V) +
								`
`;
						}),
						(T += `}
`);
				}
				return (
					(T += `}
`),
					Function('value', T)
				);
			}
			var U = function (d, b) {
				(this.startState = b),
					(this.states = d),
					(this.buffer = ''),
					(this.stack = []),
					this.reset();
			};
			(U.prototype.reset = function (d, b) {
				return (
					(this.buffer = d || ''),
					(this.index = 0),
					(this.line = b ? b.line : 1),
					(this.col = b ? b.col : 1),
					(this.queuedToken = b ? b.queuedToken : null),
					(this.queuedThrow = b ? b.queuedThrow : null),
					this.setState(b ? b.state : this.startState),
					(this.stack = b && b.stack ? b.stack.slice() : []),
					this
				);
			}),
				(U.prototype.save = function () {
					return {
						line: this.line,
						col: this.col,
						state: this.state,
						stack: this.stack.slice(),
						queuedToken: this.queuedToken,
						queuedThrow: this.queuedThrow,
					};
				}),
				(U.prototype.setState = function (d) {
					if (!(!d || this.state === d)) {
						this.state = d;
						var b = this.states[d];
						(this.groups = b.groups),
							(this.error = b.error),
							(this.re = b.regexp),
							(this.fast = b.fast);
					}
				}),
				(U.prototype.popState = function () {
					this.setState(this.stack.pop());
				}),
				(U.prototype.pushState = function (d) {
					this.stack.push(this.state), this.setState(d);
				});
			var O = n
				? function (d, b) {
						return d.exec(b);
				  }
				: function (d, b) {
						var A = d.exec(b);
						return A[0].length === 0 ? null : A;
				  };
			U.prototype._getGroup = function (d) {
				for (var b = this.groups.length, A = 0; A < b; A++)
					if (d[A + 1] !== void 0) return this.groups[A];
				throw new Error('Cannot find token type for matched text');
			};
			function j() {
				return this.value;
			}
			if (
				((U.prototype.next = function () {
					var d = this.index;
					if (this.queuedGroup) {
						var b = this._token(
							this.queuedGroup,
							this.queuedText,
							d
						);
						return (
							(this.queuedGroup = null), (this.queuedText = ''), b
						);
					}
					var A = this.buffer;
					if (d !== A.length) {
						var B = this.fast[A.charCodeAt(d)];
						if (B) return this._token(B, A.charAt(d), d);
						var L = this.re;
						L.lastIndex = d;
						var x = O(L, A),
							F = this.error;
						if (x == null)
							return this._token(F, A.slice(d, A.length), d);
						var B = this._getGroup(x),
							Y = x[0];
						return F.fallback && x.index !== d
							? ((this.queuedGroup = B),
							  (this.queuedText = Y),
							  this._token(F, A.slice(d, x.index), d))
							: this._token(B, Y, d);
					}
				}),
				(U.prototype._token = function (d, b, A) {
					var B = 0;
					if (d.lineBreaks) {
						var L = /\n/g,
							x = 1;
						if (
							b ===
							`
`
						)
							B = 1;
						else for (; L.exec(b); ) B++, (x = L.lastIndex);
					}
					var F = {
							type:
								(typeof d.type == 'function' && d.type(b)) ||
								d.defaultType,
							value:
								typeof d.value == 'function' ? d.value(b) : b,
							text: b,
							toString: j,
							offset: A,
							lineBreaks: B,
							line: this.line,
							col: this.col,
						},
						Y = b.length;
					if (
						((this.index += Y),
						(this.line += B),
						B !== 0 ? (this.col = Y - x + 1) : (this.col += Y),
						d.shouldThrow)
					)
						throw new Error(this.formatError(F, 'invalid syntax'));
					return (
						d.pop
							? this.popState()
							: d.push
							? this.pushState(d.push)
							: d.next && this.setState(d.next),
						F
					);
				}),
				typeof Symbol != 'undefined' && Symbol.iterator)
			) {
				var J = function (d) {
					this.lexer = d;
				};
				(J.prototype.next = function () {
					var d = this.lexer.next();
					return { value: d, done: !d };
				}),
					(J.prototype[Symbol.iterator] = function () {
						return this;
					}),
					(U.prototype[Symbol.iterator] = function () {
						return new J(this);
					});
			}
			return (
				(U.prototype.formatError = function (d, b) {
					if (d == null)
						var A = this.buffer.slice(this.index),
							d = {
								text: A,
								offset: this.index,
								lineBreaks:
									A.indexOf(`
`) === -1
										? 0
										: 1,
								line: this.line,
								col: this.col,
							};
					var B = Math.max(0, d.offset - d.col + 1),
						L = d.lineBreaks
							? d.text.indexOf(`
`)
							: d.text.length,
						x = this.buffer.substring(B, d.offset + L);
					return (
						(b +=
							' at line ' +
							d.line +
							' col ' +
							d.col +
							`:

`),
						(b +=
							'  ' +
							x +
							`
`),
						(b += '  ' + Array(d.col).join(' ') + '^'),
						b
					);
				}),
				(U.prototype.clone = function () {
					return new U(this.states, this.state);
				}),
				(U.prototype.has = function (d) {
					return !0;
				}),
				{
					compile: C,
					states: E,
					error: Object.freeze({ error: !0 }),
					fallback: Object.freeze({ fallback: !0 }),
					keywords: X,
				}
			);
		});
	})(Zn),
		Object.defineProperty(Me, '__esModule', { value: !0 });
	var Xn = Yn.exports,
		Su = Zn.exports;
	function Bu(e) {
		if (e && e.__esModule) return e;
		var t = Object.create(null);
		return (
			e &&
				Object.keys(e).forEach(function (r) {
					if (r !== 'default') {
						var n = Object.getOwnPropertyDescriptor(e, r);
						Object.defineProperty(
							t,
							r,
							n.get
								? n
								: {
										enumerable: !0,
										get: function () {
											return e[r];
										},
								  }
						);
					}
				}),
			(t.default = e),
			Object.freeze(t)
		);
	}
	var Tu = Bu(Su);
	function Re(e) {
		return e[0];
	}
	const z = Tu.compile({
		ws: { match: /[ \t\r\n\f]+/, lineBreaks: !0 },
		idn: { match: /[a-zA-Z_-][a-zA-Z0-9_-]*/ },
		hashToken: { match: /#[a-zA-Z0-9_-]+/, value: (e) => e.slice(1) },
		str1: {
			match: /'(?:\\['\\]|[^\n'\\])*'/,
			value: (e) => e.slice(1, -1),
		},
		str2: {
			match: /"(?:\\["\\]|[^\n"\\])*"/,
			value: (e) => e.slice(1, -1),
		},
		asterisk: '*',
		fullstop: '.',
		comma: ',',
		lbr: '[',
		rbr: ']',
		eq: '=',
		gt: '>',
		vbar: '|',
		plus: '+',
		tilde: '~',
		caret: '^',
		dollar: '$',
	});
	function Ir(e) {
		return e[0].value;
	}
	function Qn(e) {
		return e[1];
	}
	function Rr([e, t, r], [n, o, s]) {
		return [e + n, t + o, r + s];
	}
	const Kn = {
		Lexer: z,
		ParserRules: [
			{
				name: 'main',
				symbols: ['_', 'listSelector', '_'],
				postprocess: Qn,
			},
			{
				name: 'mainNoList',
				symbols: ['_', 'complexSelector', '_'],
				postprocess: Qn,
			},
			{
				name: 'listSelector',
				symbols: ['complexSelector'],
				postprocess: ([e]) => ({ type: 'list', list: [e] }),
			},
			{
				name: 'listSelector',
				symbols: [
					'listSelector',
					'_',
					z.has('comma') ? { type: 'comma' } : comma,
					'_',
					'complexSelector',
				],
				postprocess: ([e, , , , t]) => ({
					type: 'list',
					list: [...e.list, t],
				}),
			},
			{
				name: 'complexSelector',
				symbols: ['compoundSelector'],
				postprocess: Re,
			},
			{
				name: 'complexSelector',
				symbols: ['complexSelector', '__', 'compoundSelector'],
				postprocess: ([e, , t]) => ({
					type: 'compound',
					list: [
						...t.list,
						{
							type: 'combinator',
							combinator: ' ',
							left: e,
							specificity: e.specificity,
						},
					],
					specificity: Rr(e.specificity, t.specificity),
				}),
			},
			{
				name: 'complexSelector',
				symbols: [
					'complexSelector',
					'_',
					'combinator',
					'_',
					'compoundSelector',
				],
				postprocess: ([e, , t, , r]) => ({
					type: 'compound',
					list: [
						...r.list,
						{
							type: 'combinator',
							combinator: t,
							left: e,
							specificity: e.specificity,
						},
					],
					specificity: Rr(e.specificity, r.specificity),
				}),
			},
			{
				name: 'combinator',
				symbols: [z.has('gt') ? { type: 'gt' } : gt],
				postprocess: () => '>',
			},
			{
				name: 'combinator',
				symbols: [z.has('plus') ? { type: 'plus' } : plus],
				postprocess: () => '+',
			},
			{
				name: 'combinator',
				symbols: [z.has('tilde') ? { type: 'tilde' } : tilde],
				postprocess: () => '~',
			},
			{
				name: 'combinator',
				symbols: [
					z.has('vbar') ? { type: 'vbar' } : vbar,
					z.has('vbar') ? { type: 'vbar' } : vbar,
				],
				postprocess: () => '||',
			},
			{
				name: 'compoundSelector',
				symbols: ['typeSelector'],
				postprocess: ([e]) => ({
					type: 'compound',
					list: [e],
					specificity: e.specificity,
				}),
			},
			{
				name: 'compoundSelector',
				symbols: ['subclassSelector'],
				postprocess: ([e]) => ({
					type: 'compound',
					list: [e],
					specificity: e.specificity,
				}),
			},
			{
				name: 'compoundSelector',
				symbols: ['compoundSelector', 'subclassSelector'],
				postprocess: ([e, t]) => ({
					type: 'compound',
					list: [...e.list, t],
					specificity: Rr(e.specificity, t.specificity),
				}),
			},
			{
				name: 'subclassSelector',
				symbols: ['idSelector'],
				postprocess: Re,
			},
			{
				name: 'subclassSelector',
				symbols: ['classSelector'],
				postprocess: Re,
			},
			{
				name: 'subclassSelector',
				symbols: ['attrSelector'],
				postprocess: Re,
			},
			{
				name: 'attrSelector',
				symbols: ['attrPresenceSelector'],
				postprocess: Re,
			},
			{
				name: 'attrSelector',
				symbols: ['attrValueSelector'],
				postprocess: Re,
			},
			{ name: 'typeSelector', symbols: ['tagSelector'], postprocess: Re },
			{ name: 'typeSelector', symbols: ['uniSelector'], postprocess: Re },
			{
				name: 'attrPresenceSelector',
				symbols: [
					z.has('lbr') ? { type: 'lbr' } : lbr,
					'_',
					'wqname',
					'_',
					z.has('rbr') ? { type: 'rbr' } : rbr,
				],
				postprocess: ([, , e]) => ({
					type: 'attrPresence',
					name: e.name,
					namespace: e.namespace,
					specificity: [0, 1, 0],
				}),
			},
			{
				name: 'attrValueSelector',
				symbols: [
					z.has('lbr') ? { type: 'lbr' } : lbr,
					'_',
					'wqname',
					'_',
					'attrMatcher',
					'_',
					'attrValue',
					'_',
					z.has('rbr') ? { type: 'rbr' } : rbr,
				],
				postprocess: ([, , e, , t, , r]) => ({
					type: 'attrValue',
					name: e.name,
					namespace: e.namespace,
					matcher: t,
					value: r.value,
					modifier: r.modifier,
					specificity: [0, 1, 0],
				}),
			},
			{
				name: 'attrMatcher',
				symbols: [z.has('eq') ? { type: 'eq' } : eq],
				postprocess: () => '=',
			},
			{
				name: 'attrMatcher',
				symbols: [
					z.has('tilde') ? { type: 'tilde' } : tilde,
					z.has('eq') ? { type: 'eq' } : eq,
				],
				postprocess: () => '~=',
			},
			{
				name: 'attrMatcher',
				symbols: [
					z.has('vbar') ? { type: 'vbar' } : vbar,
					z.has('eq') ? { type: 'eq' } : eq,
				],
				postprocess: () => '|=',
			},
			{
				name: 'attrMatcher',
				symbols: [
					z.has('caret') ? { type: 'caret' } : caret,
					z.has('eq') ? { type: 'eq' } : eq,
				],
				postprocess: () => '^=',
			},
			{
				name: 'attrMatcher',
				symbols: [
					z.has('dollar') ? { type: 'dollar' } : dollar,
					z.has('eq') ? { type: 'eq' } : eq,
				],
				postprocess: () => '$=',
			},
			{
				name: 'attrMatcher',
				symbols: [
					z.has('asterisk') ? { type: 'asterisk' } : asterisk,
					z.has('eq') ? { type: 'eq' } : eq,
				],
				postprocess: () => '*=',
			},
			{
				name: 'attrValue',
				symbols: ['str'],
				postprocess: ([e]) => ({ value: e, modifier: null }),
			},
			{
				name: 'attrValue',
				symbols: ['idn'],
				postprocess: ([e]) => ({ value: e, modifier: null }),
			},
			{
				name: 'attrValue',
				symbols: ['str', '_', 'attrModifier'],
				postprocess: ([e, , t]) => ({ value: e, modifier: t }),
			},
			{
				name: 'attrValue',
				symbols: ['idn', '__', 'attrModifier'],
				postprocess: ([e, , t]) => ({ value: e, modifier: t }),
			},
			{
				name: 'attrModifier',
				symbols: [{ literal: 'i' }],
				postprocess: () => 'i',
			},
			{
				name: 'attrModifier',
				symbols: [{ literal: 'I' }],
				postprocess: () => 'i',
			},
			{
				name: 'attrModifier',
				symbols: [{ literal: 's' }],
				postprocess: () => 's',
			},
			{
				name: 'attrModifier',
				symbols: [{ literal: 'S' }],
				postprocess: () => 's',
			},
			{
				name: 'idSelector',
				symbols: [
					z.has('hashToken') ? { type: 'hashToken' } : hashToken,
				],
				postprocess: ([{ value: e }]) => ({
					type: 'id',
					name: e,
					specificity: [1, 0, 0],
				}),
			},
			{
				name: 'classSelector',
				symbols: [
					z.has('fullstop') ? { type: 'fullstop' } : fullstop,
					'idn',
				],
				postprocess: ([, e]) => ({
					type: 'class',
					name: e,
					specificity: [0, 1, 0],
				}),
			},
			{
				name: 'tagSelector',
				symbols: ['wqname'],
				postprocess: ([e]) => ({
					type: 'tag',
					name: e.name,
					namespace: e.namespace,
					specificity: [0, 0, 1],
				}),
			},
			{
				name: 'uniSelector',
				symbols: [z.has('asterisk') ? { type: 'asterisk' } : asterisk],
				postprocess: () => ({
					type: 'universal',
					namespace: null,
					specificity: [0, 0, 0],
				}),
			},
			{
				name: 'uniSelector',
				symbols: [
					'ns',
					z.has('asterisk') ? { type: 'asterisk' } : asterisk,
				],
				postprocess: ([e]) => ({
					type: 'universal',
					namespace: e,
					specificity: [0, 0, 0],
				}),
			},
			{
				name: 'wqname',
				symbols: ['idn'],
				postprocess: ([e]) => ({ name: e, namespace: null }),
			},
			{
				name: 'wqname',
				symbols: ['ns', 'idn'],
				postprocess: ([e, t]) => ({ name: t, namespace: e }),
			},
			{
				name: 'ns',
				symbols: [z.has('vbar') ? { type: 'vbar' } : vbar],
				postprocess: () => '',
			},
			{
				name: 'ns',
				symbols: ['idn', z.has('vbar') ? { type: 'vbar' } : vbar],
				postprocess: Re,
			},
			{
				name: 'str',
				symbols: [z.has('str1') ? { type: 'str1' } : str1],
				postprocess: Ir,
			},
			{
				name: 'str',
				symbols: [z.has('str2') ? { type: 'str2' } : str2],
				postprocess: Ir,
			},
			{
				name: 'idn',
				symbols: [z.has('idn') ? { type: 'idn' } : idn],
				postprocess: Ir,
			},
			{
				name: '_$ebnf$1',
				symbols: [z.has('ws') ? { type: 'ws' } : ws],
				postprocess: Re,
			},
			{ name: '_$ebnf$1', symbols: [], postprocess: () => null },
			{ name: '_', symbols: ['_$ebnf$1'], postprocess: () => null },
			{
				name: '__',
				symbols: [z.has('ws') ? { type: 'ws' } : ws],
				postprocess: () => null,
			},
		],
		ParserStart: 'main',
	};
	var ku = Object.freeze({ __proto__: null });
	const Lu = Dn(vn({}, Kn), { ParserStart: 'mainNoList' });
	function Fu(e) {
		return eo(Kn, e);
	}
	function _u(e) {
		return eo(Lu, e);
	}
	function eo(e, t) {
		const r = new Xn.Parser(Xn.Grammar.fromCompiled(e));
		if ((r.feed(t), r.results.length === 0))
			throw new Error(
				'Failed to parse - input string might be incomplete.'
			);
		return r.results[0];
	}
	function Ue(e) {
		if (!e.type) throw new Error('This is not an AST node.');
		switch (e.type) {
			case 'universal':
				return rr(e.namespace) + '*';
			case 'tag':
				return rr(e.namespace) + e.name;
			case 'class':
				return '.' + e.name;
			case 'id':
				return '#' + e.name;
			case 'attrPresence':
				return `[${rr(e.namespace)}${e.name}]`;
			case 'attrValue':
				return `[${rr(
					e.namespace
				)}${e.name}${e.matcher}${Nu(e.value)}${e.modifier ? e.modifier : ''}]`;
			case 'combinator':
				return Ue(e.left) + e.combinator;
			case 'compound':
				return e.list.reduce(
					(t, r) => (r.type === 'combinator' ? Ue(r) + t : t + Ue(r)),
					''
				);
			case 'list':
				return e.list.map(Ue).join(',');
		}
	}
	function rr(e) {
		return e || e === '' ? e + '|' : '';
	}
	function Nu(e) {
		return e.indexOf('"') === -1
			? `"${e}"`
			: e.indexOf("'") === -1
			? `'${e}'`
			: `"${e.replace('"', '\\"')}"`;
	}
	function nr(e) {
		if (!e.type) throw new Error('This is not an AST node.');
		switch (e.type) {
			case 'compound': {
				e.list.forEach(nr), e.list.sort((t, r) => Ur(to(t), to(r)));
				break;
			}
			case 'combinator': {
				nr(e.left);
				break;
			}
			case 'list': {
				e.list.forEach(nr),
					e.list.sort((t, r) => (Ue(t) < Ue(r) ? -1 : 1));
				break;
			}
		}
		return e;
	}
	function to(e) {
		switch (e.type) {
			case 'universal':
				return [1];
			case 'tag':
				return [1];
			case 'id':
				return [2];
			case 'class':
				return [3, e.name];
			case 'attrPresence':
				return [4, Ue(e)];
			case 'attrValue':
				return [5, Ue(e)];
			case 'combinator':
				return [15, Ue(e)];
		}
	}
	function Pu(e, t) {
		return Ur(e.specificity, t.specificity);
	}
	function Ou(e, t) {
		return Ur(e, t);
	}
	function Ur(e, t) {
		if (!Array.isArray(e) || !Array.isArray(t))
			throw new Error('Arguments must be arrays.');
		const r = e.length < t.length ? e.length : t.length;
		for (let n = 0; n < r; n++)
			if (e[n] !== t[n]) return e[n] < t[n] ? -1 : 1;
		return e.length - t.length;
	}
	(Me.Ast = ku),
		(Me.compareSelectors = Pu),
		(Me.compareSpecificity = Ou),
		(Me.normalize = nr),
		(Me.parse = Fu),
		(Me.parse1 = _u),
		(Me.serialize = Ue),
		Object.defineProperty(Ye, '__esModule', { value: !0 });
	var Vr = Me;
	function Iu(e) {
		if (e && e.__esModule) return e;
		var t = Object.create(null);
		return (
			e &&
				Object.keys(e).forEach(function (r) {
					if (r !== 'default') {
						var n = Object.getOwnPropertyDescriptor(e, r);
						Object.defineProperty(
							t,
							r,
							n.get
								? n
								: {
										enumerable: !0,
										get: function () {
											return e[r];
										},
								  }
						);
					}
				}),
			(t.default = e),
			Object.freeze(t)
		);
	}
	var $r = Iu(Vr),
		Ru = Object.freeze({ __proto__: null }),
		Uu = Object.freeze({ __proto__: null });
	const Vu = (e) =>
			`\u25BD
` + Ze(e, Mr),
		Mr = [
			['\u251C\u2500', '\u2502 '],
			['\u2514\u2500', '  '],
		],
		$u = [
			['\u2520\u2500', '\u2503 '],
			['\u2516\u2500', '  '],
		],
		ro = [
			['\u255F\u2500', '\u2551 '],
			['\u2559\u2500', '  '],
		];
	function Ze(e, t = $u) {
		return Hu(
			t,
			e.map((r) => Mu(r))
		);
	}
	function Mu(e) {
		switch (e.type) {
			case 'terminal': {
				const t = e.valueContainer;
				return `\u25C1 #${
					t.index
				} ${JSON.stringify(t.specificity)} ${t.value}`;
			}
			case 'tagName':
				return `\u25FB Tag name
${Ze(e.variants, ro)}`;
			case 'attrValue':
				return `\u25A3 Attr value: ${e.name}
${Ze(e.matchers, ro)}`;
			case 'attrPresence':
				return `\u25E8 Attr presence: ${e.name}
${Ze(e.cont)}`;
			case 'pushElement':
				return `\u25C9 Push element: ${e.combinator}
${Ze(e.cont, Mr)}`;
			case 'popElement':
				return `\u25CC Pop element
${Ze(e.cont, Mr)}`;
			case 'variant':
				return `\u25C7 = ${e.value}
${Ze(e.cont)}`;
			case 'matcher':
				return `\u25C8 ${e.matcher} "${e.value}"${e.modifier || ''}
${Ze(e.cont)}`;
		}
	}
	function Hu(e, t) {
		return t.map((r, n, { length: o }) => ju(e, r, n === o - 1)).join(`
`);
	}
	function ju(e, t, r = !0) {
		const n = e[r ? 1 : 0];
		return (
			n[0] +
			t
				.split(
					`
`
				)
				.join(
					`
` + n[1]
				)
		);
	}
	var Gu = Object.freeze({ __proto__: null, treeify: Vu });
	class zu {
		constructor(t) {
			this.branches = pt(Wu(t));
		}
		build(t) {
			return t(this.branches);
		}
	}
	function Wu(e) {
		const t = e.length,
			r = new Array(t);
		for (let n = 0; n < t; n++) {
			const [o, s] = e[n],
				a = Ju($r.parse1(o));
			r[n] = {
				ast: a,
				terminal: {
					type: 'terminal',
					valueContainer: {
						index: n,
						value: s,
						specificity: a.specificity,
					},
				},
			};
		}
		return r;
	}
	function Ju(e) {
		return no(e), $r.normalize(e), e;
	}
	function no(e) {
		const t = [];
		e.list.forEach((r) => {
			switch (r.type) {
				case 'class':
					t.push({
						matcher: '~=',
						modifier: null,
						name: 'class',
						namespace: null,
						specificity: r.specificity,
						type: 'attrValue',
						value: r.name,
					});
					break;
				case 'id':
					t.push({
						matcher: '=',
						modifier: null,
						name: 'id',
						namespace: null,
						specificity: r.specificity,
						type: 'attrValue',
						value: r.name,
					});
					break;
				case 'combinator':
					no(r.left), t.push(r);
					break;
				case 'universal':
					break;
				default:
					t.push(r);
					break;
			}
		}),
			(e.list = t);
	}
	function pt(e) {
		const t = [];
		for (; e.length; ) {
			const r = uo(e, (a) => !0, oo),
				{ matches: n, nonmatches: o, empty: s } = Zu(e, r);
			(e = o), n.length && t.push(Xu(r, n)), s.length && t.push(...Yu(s));
		}
		return t;
	}
	function Yu(e) {
		const t = [];
		for (const r of e) {
			const n = r.terminal;
			if (n.type === 'terminal') t.push(n);
			else {
				const { matches: o, rest: s } = ri(
					n.cont,
					(a) => a.type === 'terminal'
				);
				o.forEach((a) => t.push(a)),
					s.length && ((n.cont = s), t.push(n));
			}
		}
		return t;
	}
	function Zu(e, t) {
		const r = [],
			n = [],
			o = [];
		for (const s of e) {
			const a = s.ast.list;
			a.length ? (a.some((l) => oo(l) === t) ? r : n).push(s) : o.push(s);
		}
		return { matches: r, nonmatches: n, empty: o };
	}
	function oo(e) {
		switch (e.type) {
			case 'attrPresence':
				return `attrPresence ${e.name}`;
			case 'attrValue':
				return `attrValue ${e.name}`;
			case 'combinator':
				return `combinator ${e.combinator}`;
			default:
				return e.type;
		}
	}
	function Xu(e, t) {
		if (e === 'tag') return Qu(t);
		if (e.startsWith('attrValue ')) return ei(e.substring(10), t);
		if (e.startsWith('attrPresence ')) return Ku(e.substring(13), t);
		if (e === 'combinator >') return so('>', t);
		if (e === 'combinator +') return so('+', t);
		throw new Error(`Unsupported selector kind: ${e}`);
	}
	function Qu(e) {
		const t = Hr(
				e,
				(n) => n.type === 'tag',
				(n) => n.name
			),
			r = Object.entries(t).map(([n, o]) => ({
				type: 'variant',
				value: n,
				cont: pt(o.items),
			}));
		return { type: 'tagName', variants: r };
	}
	function Ku(e, t) {
		for (const r of t)
			ao(r, (n) => n.type === 'attrPresence' && n.name === e);
		return { type: 'attrPresence', name: e, cont: pt(t) };
	}
	function ei(e, t) {
		const r = Hr(
				t,
				(o) => o.type === 'attrValue' && o.name === e,
				(o) => `${o.matcher} ${o.modifier || ''} ${o.value}`
			),
			n = [];
		for (const o of Object.values(r)) {
			const s = o.oneSimpleSelector,
				a = ti(s),
				c = pt(o.items);
			n.push({
				type: 'matcher',
				matcher: s.matcher,
				modifier: s.modifier,
				value: s.value,
				predicate: a,
				cont: c,
			});
		}
		return { type: 'attrValue', name: e, matchers: n };
	}
	function ti(e) {
		if (e.modifier === 'i') {
			const t = e.value.toLowerCase();
			switch (e.matcher) {
				case '=':
					return (r) => t === r.toLowerCase();
				case '~=':
					return (r) =>
						r
							.toLowerCase()
							.split(/[ \t]+/)
							.includes(t);
				case '^=':
					return (r) => r.toLowerCase().startsWith(t);
				case '$=':
					return (r) => r.toLowerCase().endsWith(t);
				case '*=':
					return (r) => r.toLowerCase().includes(t);
				case '|=':
					return (r) => {
						const n = r.toLowerCase();
						return (
							t === n || (n.startsWith(t) && n[t.length] === '-')
						);
					};
			}
		} else {
			const t = e.value;
			switch (e.matcher) {
				case '=':
					return (r) => t === r;
				case '~=':
					return (r) => r.split(/[ \t]+/).includes(t);
				case '^=':
					return (r) => r.startsWith(t);
				case '$=':
					return (r) => r.endsWith(t);
				case '*=':
					return (r) => r.includes(t);
				case '|=':
					return (r) =>
						t === r || (r.startsWith(t) && r[t.length] === '-');
			}
		}
	}
	function so(e, t) {
		const r = Hr(
				t,
				(o) => o.type === 'combinator' && o.combinator === e,
				(o) => $r.serialize(o.left)
			),
			n = [];
		for (const o of Object.values(r)) {
			const s = pt(o.items),
				a = o.oneSimpleSelector.left;
			n.push({ ast: a, terminal: { type: 'popElement', cont: s } });
		}
		return { type: 'pushElement', combinator: e, cont: pt(n) };
	}
	function Hr(e, t, r) {
		const n = {};
		for (; e.length; ) {
			const o = uo(e, t, r),
				s = (i) => t(i) && r(i) === o,
				a = (i) => i.ast.list.some(s),
				{ matches: c, rest: l } = ni(e, a);
			let u = null;
			for (const i of c) {
				const f = ao(i, s);
				u || (u = f);
			}
			if (u == null) throw new Error('No simple selector is found.');
			(n[o] = { oneSimpleSelector: u, items: c }), (e = l);
		}
		return n;
	}
	function ao(e, t) {
		const r = e.ast.list,
			n = new Array(r.length);
		let o = -1;
		for (let a = r.length; a-- > 0; ) t(r[a]) && ((n[a] = !0), (o = a));
		if (o == -1)
			throw new Error("Couldn't find the required simple selector.");
		const s = r[o];
		return (e.ast.list = r.filter((a, c) => !n[c])), s;
	}
	function uo(e, t, r) {
		const n = {};
		for (const a of e) {
			const c = {};
			for (const l of a.ast.list.filter(t)) c[r(l)] = !0;
			for (const l of Object.keys(c)) n[l] ? n[l]++ : (n[l] = 1);
		}
		let o = '',
			s = 0;
		for (const a of Object.entries(n)) a[1] > s && ((o = a[0]), (s = a[1]));
		return o;
	}
	function ri(e, t) {
		const r = [],
			n = [];
		for (const o of e) t(o) ? r.push(o) : n.push(o);
		return { matches: r, rest: n };
	}
	function ni(e, t) {
		const r = [],
			n = [];
		for (const o of e) t(o) ? r.push(o) : n.push(o);
		return { matches: r, rest: n };
	}
	class oi {
		constructor(t) {
			this.f = t;
		}
		pickAll(t) {
			return this.f(t);
		}
		pick1(t, r = !1) {
			const n = this.f(t),
				o = n.length;
			if (o === 0) return null;
			if (o === 1) return n[0].value;
			const s = r ? si : ai;
			let a = n[0];
			for (let c = 1; c < o; c++) {
				const l = n[c];
				s(a, l) && (a = l);
			}
			return a.value;
		}
	}
	function si(e, t) {
		const r = Vr.compareSpecificity(t.specificity, e.specificity);
		return r > 0 || (r === 0 && t.index < e.index);
	}
	function ai(e, t) {
		const r = Vr.compareSpecificity(t.specificity, e.specificity);
		return r > 0 || (r === 0 && t.index > e.index);
	}
	(Ye.Ast = Ru),
		(Ye.DecisionTree = zu),
		(Ye.Picker = oi),
		(Ye.Treeify = Gu),
		(Ye.Types = Uu),
		Object.defineProperty(_r, '__esModule', { value: !0 });
	var io = Ie,
		ui = Ye;
	function ii(e) {
		return new ui.Picker(dt(e));
	}
	function dt(e) {
		const t = e.map(ci);
		return (r, ...n) => lo(t, (o) => o(r, ...n));
	}
	function ci(e) {
		switch (e.type) {
			case 'terminal': {
				const t = [e.valueContainer];
				return (r, ...n) => t;
			}
			case 'tagName':
				return li(e);
			case 'attrValue':
				return pi(e);
			case 'attrPresence':
				return fi(e);
			case 'pushElement':
				return di(e);
			case 'popElement':
				return mi(e);
		}
	}
	function li(e) {
		const t = {};
		for (const r of e.variants) t[r.value] = dt(r.cont);
		return (r, ...n) => {
			const o = t[r.name];
			return o ? o(r, ...n) : [];
		};
	}
	function fi(e) {
		const t = e.name,
			r = dt(e.cont);
		return (n, ...o) =>
			Object.prototype.hasOwnProperty.call(n.attribs, t)
				? r(n, ...o)
				: [];
	}
	function pi(e) {
		const t = [];
		for (const n of e.matchers) {
			const o = n.predicate,
				s = dt(n.cont);
			t.push((a, c, ...l) => (o(a) ? s(c, ...l) : []));
		}
		const r = e.name;
		return (n, ...o) => {
			const s = n.attribs[r];
			return s || s === '' ? lo(t, (a) => a(s, n, ...o)) : [];
		};
	}
	function di(e) {
		const t = dt(e.cont),
			r = e.combinator === '+' ? co : hi;
		return (n, ...o) => {
			const s = r(n);
			return s === null ? [] : t(s, n, ...o);
		};
	}
	const co = (e) => {
			const t = e.prev;
			return t === null ? null : io.isTag(t) ? t : co(t);
		},
		hi = (e) => {
			const t = e.parent;
			return t && io.isTag(t) ? t : null;
		};
	function mi(e) {
		const t = dt(e.cont);
		return (r, n, ...o) => t(n, ...o);
	}
	function lo(e, t) {
		return [].concat(...gi(e, t));
	}
	function gi(e, t) {
		const r = e.length,
			n = new Array(r);
		for (let o = 0; o < r; o++) n[o] = t(e[o]);
		return n;
	}
	_r.hp2Builder = ii;
	var bi = function (t) {
		return vi(t) && !Di(t);
	};
	function vi(e) {
		return !!e && typeof e == 'object';
	}
	function Di(e) {
		var t = Object.prototype.toString.call(e);
		return t === '[object RegExp]' || t === '[object Date]' || wi(e);
	}
	var yi = typeof Symbol == 'function' && Symbol.for,
		Ai = yi ? Symbol.for('react.element') : 60103;
	function wi(e) {
		return e.$$typeof === Ai;
	}
	function Ei(e) {
		return Array.isArray(e) ? [] : {};
	}
	function Tt(e, t) {
		return t.clone !== !1 && t.isMergeableObject(e) ? ht(Ei(e), e, t) : e;
	}
	function xi(e, t, r) {
		return e.concat(t).map(function (n) {
			return Tt(n, r);
		});
	}
	function Ci(e, t) {
		if (!t.customMerge) return ht;
		var r = t.customMerge(e);
		return typeof r == 'function' ? r : ht;
	}
	function qi(e) {
		return Object.getOwnPropertySymbols
			? Object.getOwnPropertySymbols(e).filter(function (t) {
					return e.propertyIsEnumerable(t);
			  })
			: [];
	}
	function fo(e) {
		return Object.keys(e).concat(qi(e));
	}
	function po(e, t) {
		try {
			return t in e;
		} catch (r) {
			return !1;
		}
	}
	function Si(e, t) {
		return (
			po(e, t) &&
			!(
				Object.hasOwnProperty.call(e, t) &&
				Object.propertyIsEnumerable.call(e, t)
			)
		);
	}
	function Bi(e, t, r) {
		var n = {};
		return (
			r.isMergeableObject(e) &&
				fo(e).forEach(function (o) {
					n[o] = Tt(e[o], r);
				}),
			fo(t).forEach(function (o) {
				Si(e, o) ||
					(po(e, o) && r.isMergeableObject(t[o])
						? (n[o] = Ci(o, r)(e[o], t[o], r))
						: (n[o] = Tt(t[o], r)));
			}),
			n
		);
	}
	function ht(e, t, r) {
		(r = r || {}),
			(r.arrayMerge = r.arrayMerge || xi),
			(r.isMergeableObject = r.isMergeableObject || bi),
			(r.cloneUnlessOtherwiseSpecified = Tt);
		var n = Array.isArray(t),
			o = Array.isArray(e),
			s = n === o;
		return s ? (n ? r.arrayMerge(e, t, r) : Bi(e, t, r)) : Tt(t, r);
	}
	ht.all = function (t, r) {
		if (!Array.isArray(t))
			throw new Error('first argument should be an array');
		return t.reduce(function (n, o) {
			return ht(n, o, r);
		}, {});
	};
	var Ti = ht,
		ho = Ti,
		or = { exports: {} };
	/*! https://mths.be/he v1.2.0 by @mathias | MIT license */ (function (
		e,
		t
	) {
		(function (r) {
			var n = t,
				o = e && e.exports == n && e,
				s = typeof q == 'object' && q;
			(s.global === s || s.window === s) && (r = s);
			var a = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
				c = /[\x01-\x7F]/g,
				l =
					/[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
				u =
					/<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g,
				i = {
					'\xAD': 'shy',
					'\u200C': 'zwnj',
					'\u200D': 'zwj',
					'\u200E': 'lrm',
					'\u2063': 'ic',
					'\u2062': 'it',
					'\u2061': 'af',
					'\u200F': 'rlm',
					'\u200B': 'ZeroWidthSpace',
					'\u2060': 'NoBreak',
					'\u0311': 'DownBreve',
					'\u20DB': 'tdot',
					'\u20DC': 'DotDot',
					'	': 'Tab',
					'\n': 'NewLine',
					'\u2008': 'puncsp',
					'\u205F': 'MediumSpace',
					'\u2009': 'thinsp',
					'\u200A': 'hairsp',
					'\u2004': 'emsp13',
					'\u2002': 'ensp',
					'\u2005': 'emsp14',
					'\u2003': 'emsp',
					'\u2007': 'numsp',
					'\xA0': 'nbsp',
					'\u205F\u200A': 'ThickSpace',
					'\u203E': 'oline',
					_: 'lowbar',
					'\u2010': 'dash',
					'\u2013': 'ndash',
					'\u2014': 'mdash',
					'\u2015': 'horbar',
					',': 'comma',
					';': 'semi',
					'\u204F': 'bsemi',
					':': 'colon',
					'\u2A74': 'Colone',
					'!': 'excl',
					'\xA1': 'iexcl',
					'?': 'quest',
					'\xBF': 'iquest',
					'.': 'period',
					'\u2025': 'nldr',
					'\u2026': 'mldr',
					'\xB7': 'middot',
					"'": 'apos',
					'\u2018': 'lsquo',
					'\u2019': 'rsquo',
					'\u201A': 'sbquo',
					'\u2039': 'lsaquo',
					'\u203A': 'rsaquo',
					'"': 'quot',
					'\u201C': 'ldquo',
					'\u201D': 'rdquo',
					'\u201E': 'bdquo',
					'\xAB': 'laquo',
					'\xBB': 'raquo',
					'(': 'lpar',
					')': 'rpar',
					'[': 'lsqb',
					']': 'rsqb',
					'{': 'lcub',
					'}': 'rcub',
					'\u2308': 'lceil',
					'\u2309': 'rceil',
					'\u230A': 'lfloor',
					'\u230B': 'rfloor',
					'\u2985': 'lopar',
					'\u2986': 'ropar',
					'\u298B': 'lbrke',
					'\u298C': 'rbrke',
					'\u298D': 'lbrkslu',
					'\u298E': 'rbrksld',
					'\u298F': 'lbrksld',
					'\u2990': 'rbrkslu',
					'\u2991': 'langd',
					'\u2992': 'rangd',
					'\u2993': 'lparlt',
					'\u2994': 'rpargt',
					'\u2995': 'gtlPar',
					'\u2996': 'ltrPar',
					'\u27E6': 'lobrk',
					'\u27E7': 'robrk',
					'\u27E8': 'lang',
					'\u27E9': 'rang',
					'\u27EA': 'Lang',
					'\u27EB': 'Rang',
					'\u27EC': 'loang',
					'\u27ED': 'roang',
					'\u2772': 'lbbrk',
					'\u2773': 'rbbrk',
					'\u2016': 'Vert',
					'\xA7': 'sect',
					'\xB6': 'para',
					'@': 'commat',
					'*': 'ast',
					'/': 'sol',
					undefined: null,
					'&': 'amp',
					'#': 'num',
					'%': 'percnt',
					'\u2030': 'permil',
					'\u2031': 'pertenk',
					'\u2020': 'dagger',
					'\u2021': 'Dagger',
					'\u2022': 'bull',
					'\u2043': 'hybull',
					'\u2032': 'prime',
					'\u2033': 'Prime',
					'\u2034': 'tprime',
					'\u2057': 'qprime',
					'\u2035': 'bprime',
					'\u2041': 'caret',
					'`': 'grave',
					'\xB4': 'acute',
					'\u02DC': 'tilde',
					'^': 'Hat',
					'\xAF': 'macr',
					'\u02D8': 'breve',
					'\u02D9': 'dot',
					'\xA8': 'die',
					'\u02DA': 'ring',
					'\u02DD': 'dblac',
					'\xB8': 'cedil',
					'\u02DB': 'ogon',
					'\u02C6': 'circ',
					'\u02C7': 'caron',
					'\xB0': 'deg',
					'\xA9': 'copy',
					'\xAE': 'reg',
					'\u2117': 'copysr',
					'\u2118': 'wp',
					'\u211E': 'rx',
					'\u2127': 'mho',
					'\u2129': 'iiota',
					'\u2190': 'larr',
					'\u219A': 'nlarr',
					'\u2192': 'rarr',
					'\u219B': 'nrarr',
					'\u2191': 'uarr',
					'\u2193': 'darr',
					'\u2194': 'harr',
					'\u21AE': 'nharr',
					'\u2195': 'varr',
					'\u2196': 'nwarr',
					'\u2197': 'nearr',
					'\u2198': 'searr',
					'\u2199': 'swarr',
					'\u219D': 'rarrw',
					'\u219D\u0338': 'nrarrw',
					'\u219E': 'Larr',
					'\u219F': 'Uarr',
					'\u21A0': 'Rarr',
					'\u21A1': 'Darr',
					'\u21A2': 'larrtl',
					'\u21A3': 'rarrtl',
					'\u21A4': 'mapstoleft',
					'\u21A5': 'mapstoup',
					'\u21A6': 'map',
					'\u21A7': 'mapstodown',
					'\u21A9': 'larrhk',
					'\u21AA': 'rarrhk',
					'\u21AB': 'larrlp',
					'\u21AC': 'rarrlp',
					'\u21AD': 'harrw',
					'\u21B0': 'lsh',
					'\u21B1': 'rsh',
					'\u21B2': 'ldsh',
					'\u21B3': 'rdsh',
					'\u21B5': 'crarr',
					'\u21B6': 'cularr',
					'\u21B7': 'curarr',
					'\u21BA': 'olarr',
					'\u21BB': 'orarr',
					'\u21BC': 'lharu',
					'\u21BD': 'lhard',
					'\u21BE': 'uharr',
					'\u21BF': 'uharl',
					'\u21C0': 'rharu',
					'\u21C1': 'rhard',
					'\u21C2': 'dharr',
					'\u21C3': 'dharl',
					'\u21C4': 'rlarr',
					'\u21C5': 'udarr',
					'\u21C6': 'lrarr',
					'\u21C7': 'llarr',
					'\u21C8': 'uuarr',
					'\u21C9': 'rrarr',
					'\u21CA': 'ddarr',
					'\u21CB': 'lrhar',
					'\u21CC': 'rlhar',
					'\u21D0': 'lArr',
					'\u21CD': 'nlArr',
					'\u21D1': 'uArr',
					'\u21D2': 'rArr',
					'\u21CF': 'nrArr',
					'\u21D3': 'dArr',
					'\u21D4': 'iff',
					'\u21CE': 'nhArr',
					'\u21D5': 'vArr',
					'\u21D6': 'nwArr',
					'\u21D7': 'neArr',
					'\u21D8': 'seArr',
					'\u21D9': 'swArr',
					'\u21DA': 'lAarr',
					'\u21DB': 'rAarr',
					'\u21DD': 'zigrarr',
					'\u21E4': 'larrb',
					'\u21E5': 'rarrb',
					'\u21F5': 'duarr',
					'\u21FD': 'loarr',
					'\u21FE': 'roarr',
					'\u21FF': 'hoarr',
					'\u2200': 'forall',
					'\u2201': 'comp',
					'\u2202': 'part',
					'\u2202\u0338': 'npart',
					'\u2203': 'exist',
					'\u2204': 'nexist',
					'\u2205': 'empty',
					'\u2207': 'Del',
					'\u2208': 'in',
					'\u2209': 'notin',
					'\u220B': 'ni',
					'\u220C': 'notni',
					'\u03F6': 'bepsi',
					'\u220F': 'prod',
					'\u2210': 'coprod',
					'\u2211': 'sum',
					'+': 'plus',
					'\xB1': 'pm',
					'\xF7': 'div',
					'\xD7': 'times',
					'<': 'lt',
					'\u226E': 'nlt',
					'<\u20D2': 'nvlt',
					'=': 'equals',
					'\u2260': 'ne',
					'=\u20E5': 'bne',
					'\u2A75': 'Equal',
					'>': 'gt',
					'\u226F': 'ngt',
					'>\u20D2': 'nvgt',
					'\xAC': 'not',
					'|': 'vert',
					'\xA6': 'brvbar',
					'\u2212': 'minus',
					'\u2213': 'mp',
					'\u2214': 'plusdo',
					'\u2044': 'frasl',
					'\u2216': 'setmn',
					'\u2217': 'lowast',
					'\u2218': 'compfn',
					'\u221A': 'Sqrt',
					'\u221D': 'prop',
					'\u221E': 'infin',
					'\u221F': 'angrt',
					'\u2220': 'ang',
					'\u2220\u20D2': 'nang',
					'\u2221': 'angmsd',
					'\u2222': 'angsph',
					'\u2223': 'mid',
					'\u2224': 'nmid',
					'\u2225': 'par',
					'\u2226': 'npar',
					'\u2227': 'and',
					'\u2228': 'or',
					'\u2229': 'cap',
					'\u2229\uFE00': 'caps',
					'\u222A': 'cup',
					'\u222A\uFE00': 'cups',
					'\u222B': 'int',
					'\u222C': 'Int',
					'\u222D': 'tint',
					'\u2A0C': 'qint',
					'\u222E': 'oint',
					'\u222F': 'Conint',
					'\u2230': 'Cconint',
					'\u2231': 'cwint',
					'\u2232': 'cwconint',
					'\u2233': 'awconint',
					'\u2234': 'there4',
					'\u2235': 'becaus',
					'\u2236': 'ratio',
					'\u2237': 'Colon',
					'\u2238': 'minusd',
					'\u223A': 'mDDot',
					'\u223B': 'homtht',
					'\u223C': 'sim',
					'\u2241': 'nsim',
					'\u223C\u20D2': 'nvsim',
					'\u223D': 'bsim',
					'\u223D\u0331': 'race',
					'\u223E': 'ac',
					'\u223E\u0333': 'acE',
					'\u223F': 'acd',
					'\u2240': 'wr',
					'\u2242': 'esim',
					'\u2242\u0338': 'nesim',
					'\u2243': 'sime',
					'\u2244': 'nsime',
					'\u2245': 'cong',
					'\u2247': 'ncong',
					'\u2246': 'simne',
					'\u2248': 'ap',
					'\u2249': 'nap',
					'\u224A': 'ape',
					'\u224B': 'apid',
					'\u224B\u0338': 'napid',
					'\u224C': 'bcong',
					'\u224D': 'CupCap',
					'\u226D': 'NotCupCap',
					'\u224D\u20D2': 'nvap',
					'\u224E': 'bump',
					'\u224E\u0338': 'nbump',
					'\u224F': 'bumpe',
					'\u224F\u0338': 'nbumpe',
					'\u2250': 'doteq',
					'\u2250\u0338': 'nedot',
					'\u2251': 'eDot',
					'\u2252': 'efDot',
					'\u2253': 'erDot',
					'\u2254': 'colone',
					'\u2255': 'ecolon',
					'\u2256': 'ecir',
					'\u2257': 'cire',
					'\u2259': 'wedgeq',
					'\u225A': 'veeeq',
					'\u225C': 'trie',
					'\u225F': 'equest',
					'\u2261': 'equiv',
					'\u2262': 'nequiv',
					'\u2261\u20E5': 'bnequiv',
					'\u2264': 'le',
					'\u2270': 'nle',
					'\u2264\u20D2': 'nvle',
					'\u2265': 'ge',
					'\u2271': 'nge',
					'\u2265\u20D2': 'nvge',
					'\u2266': 'lE',
					'\u2266\u0338': 'nlE',
					'\u2267': 'gE',
					'\u2267\u0338': 'ngE',
					'\u2268\uFE00': 'lvnE',
					'\u2268': 'lnE',
					'\u2269': 'gnE',
					'\u2269\uFE00': 'gvnE',
					'\u226A': 'll',
					'\u226A\u0338': 'nLtv',
					'\u226A\u20D2': 'nLt',
					'\u226B': 'gg',
					'\u226B\u0338': 'nGtv',
					'\u226B\u20D2': 'nGt',
					'\u226C': 'twixt',
					'\u2272': 'lsim',
					'\u2274': 'nlsim',
					'\u2273': 'gsim',
					'\u2275': 'ngsim',
					'\u2276': 'lg',
					'\u2278': 'ntlg',
					'\u2277': 'gl',
					'\u2279': 'ntgl',
					'\u227A': 'pr',
					'\u2280': 'npr',
					'\u227B': 'sc',
					'\u2281': 'nsc',
					'\u227C': 'prcue',
					'\u22E0': 'nprcue',
					'\u227D': 'sccue',
					'\u22E1': 'nsccue',
					'\u227E': 'prsim',
					'\u227F': 'scsim',
					'\u227F\u0338': 'NotSucceedsTilde',
					'\u2282': 'sub',
					'\u2284': 'nsub',
					'\u2282\u20D2': 'vnsub',
					'\u2283': 'sup',
					'\u2285': 'nsup',
					'\u2283\u20D2': 'vnsup',
					'\u2286': 'sube',
					'\u2288': 'nsube',
					'\u2287': 'supe',
					'\u2289': 'nsupe',
					'\u228A\uFE00': 'vsubne',
					'\u228A': 'subne',
					'\u228B\uFE00': 'vsupne',
					'\u228B': 'supne',
					'\u228D': 'cupdot',
					'\u228E': 'uplus',
					'\u228F': 'sqsub',
					'\u228F\u0338': 'NotSquareSubset',
					'\u2290': 'sqsup',
					'\u2290\u0338': 'NotSquareSuperset',
					'\u2291': 'sqsube',
					'\u22E2': 'nsqsube',
					'\u2292': 'sqsupe',
					'\u22E3': 'nsqsupe',
					'\u2293': 'sqcap',
					'\u2293\uFE00': 'sqcaps',
					'\u2294': 'sqcup',
					'\u2294\uFE00': 'sqcups',
					'\u2295': 'oplus',
					'\u2296': 'ominus',
					'\u2297': 'otimes',
					'\u2298': 'osol',
					'\u2299': 'odot',
					'\u229A': 'ocir',
					'\u229B': 'oast',
					'\u229D': 'odash',
					'\u229E': 'plusb',
					'\u229F': 'minusb',
					'\u22A0': 'timesb',
					'\u22A1': 'sdotb',
					'\u22A2': 'vdash',
					'\u22AC': 'nvdash',
					'\u22A3': 'dashv',
					'\u22A4': 'top',
					'\u22A5': 'bot',
					'\u22A7': 'models',
					'\u22A8': 'vDash',
					'\u22AD': 'nvDash',
					'\u22A9': 'Vdash',
					'\u22AE': 'nVdash',
					'\u22AA': 'Vvdash',
					'\u22AB': 'VDash',
					'\u22AF': 'nVDash',
					'\u22B0': 'prurel',
					'\u22B2': 'vltri',
					'\u22EA': 'nltri',
					'\u22B3': 'vrtri',
					'\u22EB': 'nrtri',
					'\u22B4': 'ltrie',
					'\u22EC': 'nltrie',
					'\u22B4\u20D2': 'nvltrie',
					'\u22B5': 'rtrie',
					'\u22ED': 'nrtrie',
					'\u22B5\u20D2': 'nvrtrie',
					'\u22B6': 'origof',
					'\u22B7': 'imof',
					'\u22B8': 'mumap',
					'\u22B9': 'hercon',
					'\u22BA': 'intcal',
					'\u22BB': 'veebar',
					'\u22BD': 'barvee',
					'\u22BE': 'angrtvb',
					'\u22BF': 'lrtri',
					'\u22C0': 'Wedge',
					'\u22C1': 'Vee',
					'\u22C2': 'xcap',
					'\u22C3': 'xcup',
					'\u22C4': 'diam',
					'\u22C5': 'sdot',
					'\u22C6': 'Star',
					'\u22C7': 'divonx',
					'\u22C8': 'bowtie',
					'\u22C9': 'ltimes',
					'\u22CA': 'rtimes',
					'\u22CB': 'lthree',
					'\u22CC': 'rthree',
					'\u22CD': 'bsime',
					'\u22CE': 'cuvee',
					'\u22CF': 'cuwed',
					'\u22D0': 'Sub',
					'\u22D1': 'Sup',
					'\u22D2': 'Cap',
					'\u22D3': 'Cup',
					'\u22D4': 'fork',
					'\u22D5': 'epar',
					'\u22D6': 'ltdot',
					'\u22D7': 'gtdot',
					'\u22D8': 'Ll',
					'\u22D8\u0338': 'nLl',
					'\u22D9': 'Gg',
					'\u22D9\u0338': 'nGg',
					'\u22DA\uFE00': 'lesg',
					'\u22DA': 'leg',
					'\u22DB': 'gel',
					'\u22DB\uFE00': 'gesl',
					'\u22DE': 'cuepr',
					'\u22DF': 'cuesc',
					'\u22E6': 'lnsim',
					'\u22E7': 'gnsim',
					'\u22E8': 'prnsim',
					'\u22E9': 'scnsim',
					'\u22EE': 'vellip',
					'\u22EF': 'ctdot',
					'\u22F0': 'utdot',
					'\u22F1': 'dtdot',
					'\u22F2': 'disin',
					'\u22F3': 'isinsv',
					'\u22F4': 'isins',
					'\u22F5': 'isindot',
					'\u22F5\u0338': 'notindot',
					'\u22F6': 'notinvc',
					'\u22F7': 'notinvb',
					'\u22F9': 'isinE',
					'\u22F9\u0338': 'notinE',
					'\u22FA': 'nisd',
					'\u22FB': 'xnis',
					'\u22FC': 'nis',
					'\u22FD': 'notnivc',
					'\u22FE': 'notnivb',
					'\u2305': 'barwed',
					'\u2306': 'Barwed',
					'\u230C': 'drcrop',
					'\u230D': 'dlcrop',
					'\u230E': 'urcrop',
					'\u230F': 'ulcrop',
					'\u2310': 'bnot',
					'\u2312': 'profline',
					'\u2313': 'profsurf',
					'\u2315': 'telrec',
					'\u2316': 'target',
					'\u231C': 'ulcorn',
					'\u231D': 'urcorn',
					'\u231E': 'dlcorn',
					'\u231F': 'drcorn',
					'\u2322': 'frown',
					'\u2323': 'smile',
					'\u232D': 'cylcty',
					'\u232E': 'profalar',
					'\u2336': 'topbot',
					'\u233D': 'ovbar',
					'\u233F': 'solbar',
					'\u237C': 'angzarr',
					'\u23B0': 'lmoust',
					'\u23B1': 'rmoust',
					'\u23B4': 'tbrk',
					'\u23B5': 'bbrk',
					'\u23B6': 'bbrktbrk',
					'\u23DC': 'OverParenthesis',
					'\u23DD': 'UnderParenthesis',
					'\u23DE': 'OverBrace',
					'\u23DF': 'UnderBrace',
					'\u23E2': 'trpezium',
					'\u23E7': 'elinters',
					'\u2423': 'blank',
					'\u2500': 'boxh',
					'\u2502': 'boxv',
					'\u250C': 'boxdr',
					'\u2510': 'boxdl',
					'\u2514': 'boxur',
					'\u2518': 'boxul',
					'\u251C': 'boxvr',
					'\u2524': 'boxvl',
					'\u252C': 'boxhd',
					'\u2534': 'boxhu',
					'\u253C': 'boxvh',
					'\u2550': 'boxH',
					'\u2551': 'boxV',
					'\u2552': 'boxdR',
					'\u2553': 'boxDr',
					'\u2554': 'boxDR',
					'\u2555': 'boxdL',
					'\u2556': 'boxDl',
					'\u2557': 'boxDL',
					'\u2558': 'boxuR',
					'\u2559': 'boxUr',
					'\u255A': 'boxUR',
					'\u255B': 'boxuL',
					'\u255C': 'boxUl',
					'\u255D': 'boxUL',
					'\u255E': 'boxvR',
					'\u255F': 'boxVr',
					'\u2560': 'boxVR',
					'\u2561': 'boxvL',
					'\u2562': 'boxVl',
					'\u2563': 'boxVL',
					'\u2564': 'boxHd',
					'\u2565': 'boxhD',
					'\u2566': 'boxHD',
					'\u2567': 'boxHu',
					'\u2568': 'boxhU',
					'\u2569': 'boxHU',
					'\u256A': 'boxvH',
					'\u256B': 'boxVh',
					'\u256C': 'boxVH',
					'\u2580': 'uhblk',
					'\u2584': 'lhblk',
					'\u2588': 'block',
					'\u2591': 'blk14',
					'\u2592': 'blk12',
					'\u2593': 'blk34',
					'\u25A1': 'squ',
					'\u25AA': 'squf',
					'\u25AB': 'EmptyVerySmallSquare',
					'\u25AD': 'rect',
					'\u25AE': 'marker',
					'\u25B1': 'fltns',
					'\u25B3': 'xutri',
					'\u25B4': 'utrif',
					'\u25B5': 'utri',
					'\u25B8': 'rtrif',
					'\u25B9': 'rtri',
					'\u25BD': 'xdtri',
					'\u25BE': 'dtrif',
					'\u25BF': 'dtri',
					'\u25C2': 'ltrif',
					'\u25C3': 'ltri',
					'\u25CA': 'loz',
					'\u25CB': 'cir',
					'\u25EC': 'tridot',
					'\u25EF': 'xcirc',
					'\u25F8': 'ultri',
					'\u25F9': 'urtri',
					'\u25FA': 'lltri',
					'\u25FB': 'EmptySmallSquare',
					'\u25FC': 'FilledSmallSquare',
					'\u2605': 'starf',
					'\u2606': 'star',
					'\u260E': 'phone',
					'\u2640': 'female',
					'\u2642': 'male',
					'\u2660': 'spades',
					'\u2663': 'clubs',
					'\u2665': 'hearts',
					'\u2666': 'diams',
					'\u266A': 'sung',
					'\u2713': 'check',
					'\u2717': 'cross',
					'\u2720': 'malt',
					'\u2736': 'sext',
					'\u2758': 'VerticalSeparator',
					'\u27C8': 'bsolhsub',
					'\u27C9': 'suphsol',
					'\u27F5': 'xlarr',
					'\u27F6': 'xrarr',
					'\u27F7': 'xharr',
					'\u27F8': 'xlArr',
					'\u27F9': 'xrArr',
					'\u27FA': 'xhArr',
					'\u27FC': 'xmap',
					'\u27FF': 'dzigrarr',
					'\u2902': 'nvlArr',
					'\u2903': 'nvrArr',
					'\u2904': 'nvHarr',
					'\u2905': 'Map',
					'\u290C': 'lbarr',
					'\u290D': 'rbarr',
					'\u290E': 'lBarr',
					'\u290F': 'rBarr',
					'\u2910': 'RBarr',
					'\u2911': 'DDotrahd',
					'\u2912': 'UpArrowBar',
					'\u2913': 'DownArrowBar',
					'\u2916': 'Rarrtl',
					'\u2919': 'latail',
					'\u291A': 'ratail',
					'\u291B': 'lAtail',
					'\u291C': 'rAtail',
					'\u291D': 'larrfs',
					'\u291E': 'rarrfs',
					'\u291F': 'larrbfs',
					'\u2920': 'rarrbfs',
					'\u2923': 'nwarhk',
					'\u2924': 'nearhk',
					'\u2925': 'searhk',
					'\u2926': 'swarhk',
					'\u2927': 'nwnear',
					'\u2928': 'toea',
					'\u2929': 'tosa',
					'\u292A': 'swnwar',
					'\u2933': 'rarrc',
					'\u2933\u0338': 'nrarrc',
					'\u2935': 'cudarrr',
					'\u2936': 'ldca',
					'\u2937': 'rdca',
					'\u2938': 'cudarrl',
					'\u2939': 'larrpl',
					'\u293C': 'curarrm',
					'\u293D': 'cularrp',
					'\u2945': 'rarrpl',
					'\u2948': 'harrcir',
					'\u2949': 'Uarrocir',
					'\u294A': 'lurdshar',
					'\u294B': 'ldrushar',
					'\u294E': 'LeftRightVector',
					'\u294F': 'RightUpDownVector',
					'\u2950': 'DownLeftRightVector',
					'\u2951': 'LeftUpDownVector',
					'\u2952': 'LeftVectorBar',
					'\u2953': 'RightVectorBar',
					'\u2954': 'RightUpVectorBar',
					'\u2955': 'RightDownVectorBar',
					'\u2956': 'DownLeftVectorBar',
					'\u2957': 'DownRightVectorBar',
					'\u2958': 'LeftUpVectorBar',
					'\u2959': 'LeftDownVectorBar',
					'\u295A': 'LeftTeeVector',
					'\u295B': 'RightTeeVector',
					'\u295C': 'RightUpTeeVector',
					'\u295D': 'RightDownTeeVector',
					'\u295E': 'DownLeftTeeVector',
					'\u295F': 'DownRightTeeVector',
					'\u2960': 'LeftUpTeeVector',
					'\u2961': 'LeftDownTeeVector',
					'\u2962': 'lHar',
					'\u2963': 'uHar',
					'\u2964': 'rHar',
					'\u2965': 'dHar',
					'\u2966': 'luruhar',
					'\u2967': 'ldrdhar',
					'\u2968': 'ruluhar',
					'\u2969': 'rdldhar',
					'\u296A': 'lharul',
					'\u296B': 'llhard',
					'\u296C': 'rharul',
					'\u296D': 'lrhard',
					'\u296E': 'udhar',
					'\u296F': 'duhar',
					'\u2970': 'RoundImplies',
					'\u2971': 'erarr',
					'\u2972': 'simrarr',
					'\u2973': 'larrsim',
					'\u2974': 'rarrsim',
					'\u2975': 'rarrap',
					'\u2976': 'ltlarr',
					'\u2978': 'gtrarr',
					'\u2979': 'subrarr',
					'\u297B': 'suplarr',
					'\u297C': 'lfisht',
					'\u297D': 'rfisht',
					'\u297E': 'ufisht',
					'\u297F': 'dfisht',
					'\u299A': 'vzigzag',
					'\u299C': 'vangrt',
					'\u299D': 'angrtvbd',
					'\u29A4': 'ange',
					'\u29A5': 'range',
					'\u29A6': 'dwangle',
					'\u29A7': 'uwangle',
					'\u29A8': 'angmsdaa',
					'\u29A9': 'angmsdab',
					'\u29AA': 'angmsdac',
					'\u29AB': 'angmsdad',
					'\u29AC': 'angmsdae',
					'\u29AD': 'angmsdaf',
					'\u29AE': 'angmsdag',
					'\u29AF': 'angmsdah',
					'\u29B0': 'bemptyv',
					'\u29B1': 'demptyv',
					'\u29B2': 'cemptyv',
					'\u29B3': 'raemptyv',
					'\u29B4': 'laemptyv',
					'\u29B5': 'ohbar',
					'\u29B6': 'omid',
					'\u29B7': 'opar',
					'\u29B9': 'operp',
					'\u29BB': 'olcross',
					'\u29BC': 'odsold',
					'\u29BE': 'olcir',
					'\u29BF': 'ofcir',
					'\u29C0': 'olt',
					'\u29C1': 'ogt',
					'\u29C2': 'cirscir',
					'\u29C3': 'cirE',
					'\u29C4': 'solb',
					'\u29C5': 'bsolb',
					'\u29C9': 'boxbox',
					'\u29CD': 'trisb',
					'\u29CE': 'rtriltri',
					'\u29CF': 'LeftTriangleBar',
					'\u29CF\u0338': 'NotLeftTriangleBar',
					'\u29D0': 'RightTriangleBar',
					'\u29D0\u0338': 'NotRightTriangleBar',
					'\u29DC': 'iinfin',
					'\u29DD': 'infintie',
					'\u29DE': 'nvinfin',
					'\u29E3': 'eparsl',
					'\u29E4': 'smeparsl',
					'\u29E5': 'eqvparsl',
					'\u29EB': 'lozf',
					'\u29F4': 'RuleDelayed',
					'\u29F6': 'dsol',
					'\u2A00': 'xodot',
					'\u2A01': 'xoplus',
					'\u2A02': 'xotime',
					'\u2A04': 'xuplus',
					'\u2A06': 'xsqcup',
					'\u2A0D': 'fpartint',
					'\u2A10': 'cirfnint',
					'\u2A11': 'awint',
					'\u2A12': 'rppolint',
					'\u2A13': 'scpolint',
					'\u2A14': 'npolint',
					'\u2A15': 'pointint',
					'\u2A16': 'quatint',
					'\u2A17': 'intlarhk',
					'\u2A22': 'pluscir',
					'\u2A23': 'plusacir',
					'\u2A24': 'simplus',
					'\u2A25': 'plusdu',
					'\u2A26': 'plussim',
					'\u2A27': 'plustwo',
					'\u2A29': 'mcomma',
					'\u2A2A': 'minusdu',
					'\u2A2D': 'loplus',
					'\u2A2E': 'roplus',
					'\u2A2F': 'Cross',
					'\u2A30': 'timesd',
					'\u2A31': 'timesbar',
					'\u2A33': 'smashp',
					'\u2A34': 'lotimes',
					'\u2A35': 'rotimes',
					'\u2A36': 'otimesas',
					'\u2A37': 'Otimes',
					'\u2A38': 'odiv',
					'\u2A39': 'triplus',
					'\u2A3A': 'triminus',
					'\u2A3B': 'tritime',
					'\u2A3C': 'iprod',
					'\u2A3F': 'amalg',
					'\u2A40': 'capdot',
					'\u2A42': 'ncup',
					'\u2A43': 'ncap',
					'\u2A44': 'capand',
					'\u2A45': 'cupor',
					'\u2A46': 'cupcap',
					'\u2A47': 'capcup',
					'\u2A48': 'cupbrcap',
					'\u2A49': 'capbrcup',
					'\u2A4A': 'cupcup',
					'\u2A4B': 'capcap',
					'\u2A4C': 'ccups',
					'\u2A4D': 'ccaps',
					'\u2A50': 'ccupssm',
					'\u2A53': 'And',
					'\u2A54': 'Or',
					'\u2A55': 'andand',
					'\u2A56': 'oror',
					'\u2A57': 'orslope',
					'\u2A58': 'andslope',
					'\u2A5A': 'andv',
					'\u2A5B': 'orv',
					'\u2A5C': 'andd',
					'\u2A5D': 'ord',
					'\u2A5F': 'wedbar',
					'\u2A66': 'sdote',
					'\u2A6A': 'simdot',
					'\u2A6D': 'congdot',
					'\u2A6D\u0338': 'ncongdot',
					'\u2A6E': 'easter',
					'\u2A6F': 'apacir',
					'\u2A70': 'apE',
					'\u2A70\u0338': 'napE',
					'\u2A71': 'eplus',
					'\u2A72': 'pluse',
					'\u2A73': 'Esim',
					'\u2A77': 'eDDot',
					'\u2A78': 'equivDD',
					'\u2A79': 'ltcir',
					'\u2A7A': 'gtcir',
					'\u2A7B': 'ltquest',
					'\u2A7C': 'gtquest',
					'\u2A7D': 'les',
					'\u2A7D\u0338': 'nles',
					'\u2A7E': 'ges',
					'\u2A7E\u0338': 'nges',
					'\u2A7F': 'lesdot',
					'\u2A80': 'gesdot',
					'\u2A81': 'lesdoto',
					'\u2A82': 'gesdoto',
					'\u2A83': 'lesdotor',
					'\u2A84': 'gesdotol',
					'\u2A85': 'lap',
					'\u2A86': 'gap',
					'\u2A87': 'lne',
					'\u2A88': 'gne',
					'\u2A89': 'lnap',
					'\u2A8A': 'gnap',
					'\u2A8B': 'lEg',
					'\u2A8C': 'gEl',
					'\u2A8D': 'lsime',
					'\u2A8E': 'gsime',
					'\u2A8F': 'lsimg',
					'\u2A90': 'gsiml',
					'\u2A91': 'lgE',
					'\u2A92': 'glE',
					'\u2A93': 'lesges',
					'\u2A94': 'gesles',
					'\u2A95': 'els',
					'\u2A96': 'egs',
					'\u2A97': 'elsdot',
					'\u2A98': 'egsdot',
					'\u2A99': 'el',
					'\u2A9A': 'eg',
					'\u2A9D': 'siml',
					'\u2A9E': 'simg',
					'\u2A9F': 'simlE',
					'\u2AA0': 'simgE',
					'\u2AA1': 'LessLess',
					'\u2AA1\u0338': 'NotNestedLessLess',
					'\u2AA2': 'GreaterGreater',
					'\u2AA2\u0338': 'NotNestedGreaterGreater',
					'\u2AA4': 'glj',
					'\u2AA5': 'gla',
					'\u2AA6': 'ltcc',
					'\u2AA7': 'gtcc',
					'\u2AA8': 'lescc',
					'\u2AA9': 'gescc',
					'\u2AAA': 'smt',
					'\u2AAB': 'lat',
					'\u2AAC': 'smte',
					'\u2AAC\uFE00': 'smtes',
					'\u2AAD': 'late',
					'\u2AAD\uFE00': 'lates',
					'\u2AAE': 'bumpE',
					'\u2AAF': 'pre',
					'\u2AAF\u0338': 'npre',
					'\u2AB0': 'sce',
					'\u2AB0\u0338': 'nsce',
					'\u2AB3': 'prE',
					'\u2AB4': 'scE',
					'\u2AB5': 'prnE',
					'\u2AB6': 'scnE',
					'\u2AB7': 'prap',
					'\u2AB8': 'scap',
					'\u2AB9': 'prnap',
					'\u2ABA': 'scnap',
					'\u2ABB': 'Pr',
					'\u2ABC': 'Sc',
					'\u2ABD': 'subdot',
					'\u2ABE': 'supdot',
					'\u2ABF': 'subplus',
					'\u2AC0': 'supplus',
					'\u2AC1': 'submult',
					'\u2AC2': 'supmult',
					'\u2AC3': 'subedot',
					'\u2AC4': 'supedot',
					'\u2AC5': 'subE',
					'\u2AC5\u0338': 'nsubE',
					'\u2AC6': 'supE',
					'\u2AC6\u0338': 'nsupE',
					'\u2AC7': 'subsim',
					'\u2AC8': 'supsim',
					'\u2ACB\uFE00': 'vsubnE',
					'\u2ACB': 'subnE',
					'\u2ACC\uFE00': 'vsupnE',
					'\u2ACC': 'supnE',
					'\u2ACF': 'csub',
					'\u2AD0': 'csup',
					'\u2AD1': 'csube',
					'\u2AD2': 'csupe',
					'\u2AD3': 'subsup',
					'\u2AD4': 'supsub',
					'\u2AD5': 'subsub',
					'\u2AD6': 'supsup',
					'\u2AD7': 'suphsub',
					'\u2AD8': 'supdsub',
					'\u2AD9': 'forkv',
					'\u2ADA': 'topfork',
					'\u2ADB': 'mlcp',
					'\u2AE4': 'Dashv',
					'\u2AE6': 'Vdashl',
					'\u2AE7': 'Barv',
					'\u2AE8': 'vBar',
					'\u2AE9': 'vBarv',
					'\u2AEB': 'Vbar',
					'\u2AEC': 'Not',
					'\u2AED': 'bNot',
					'\u2AEE': 'rnmid',
					'\u2AEF': 'cirmid',
					'\u2AF0': 'midcir',
					'\u2AF1': 'topcir',
					'\u2AF2': 'nhpar',
					'\u2AF3': 'parsim',
					'\u2AFD': 'parsl',
					'\u2AFD\u20E5': 'nparsl',
					'\u266D': 'flat',
					'\u266E': 'natur',
					'\u266F': 'sharp',
					'\xA4': 'curren',
					'\xA2': 'cent',
					$: 'dollar',
					'\xA3': 'pound',
					'\xA5': 'yen',
					'\u20AC': 'euro',
					'\xB9': 'sup1',
					'\xBD': 'half',
					'\u2153': 'frac13',
					'\xBC': 'frac14',
					'\u2155': 'frac15',
					'\u2159': 'frac16',
					'\u215B': 'frac18',
					'\xB2': 'sup2',
					'\u2154': 'frac23',
					'\u2156': 'frac25',
					'\xB3': 'sup3',
					'\xBE': 'frac34',
					'\u2157': 'frac35',
					'\u215C': 'frac38',
					'\u2158': 'frac45',
					'\u215A': 'frac56',
					'\u215D': 'frac58',
					'\u215E': 'frac78',
					'\u{1D4B6}': 'ascr',
					'\u{1D552}': 'aopf',
					'\u{1D51E}': 'afr',
					'\u{1D538}': 'Aopf',
					'\u{1D504}': 'Afr',
					'\u{1D49C}': 'Ascr',
					ª: 'ordf',
					á: 'aacute',
					Á: 'Aacute',
					à: 'agrave',
					À: 'Agrave',
					ă: 'abreve',
					Ă: 'Abreve',
					â: 'acirc',
					Â: 'Acirc',
					å: 'aring',
					Å: 'angst',
					ä: 'auml',
					Ä: 'Auml',
					ã: 'atilde',
					Ã: 'Atilde',
					ą: 'aogon',
					Ą: 'Aogon',
					ā: 'amacr',
					Ā: 'Amacr',
					æ: 'aelig',
					Æ: 'AElig',
					'\u{1D4B7}': 'bscr',
					'\u{1D553}': 'bopf',
					'\u{1D51F}': 'bfr',
					'\u{1D539}': 'Bopf',
					ℬ: 'Bscr',
					'\u{1D505}': 'Bfr',
					'\u{1D520}': 'cfr',
					'\u{1D4B8}': 'cscr',
					'\u{1D554}': 'copf',
					ℭ: 'Cfr',
					'\u{1D49E}': 'Cscr',
					ℂ: 'Copf',
					ć: 'cacute',
					Ć: 'Cacute',
					ĉ: 'ccirc',
					Ĉ: 'Ccirc',
					č: 'ccaron',
					Č: 'Ccaron',
					ċ: 'cdot',
					Ċ: 'Cdot',
					ç: 'ccedil',
					Ç: 'Ccedil',
					'\u2105': 'incare',
					'\u{1D521}': 'dfr',
					'\u2146': 'dd',
					'\u{1D555}': 'dopf',
					'\u{1D4B9}': 'dscr',
					'\u{1D49F}': 'Dscr',
					'\u{1D507}': 'Dfr',
					'\u2145': 'DD',
					'\u{1D53B}': 'Dopf',
					ď: 'dcaron',
					Ď: 'Dcaron',
					đ: 'dstrok',
					Đ: 'Dstrok',
					ð: 'eth',
					Ð: 'ETH',
					'\u2147': 'ee',
					ℯ: 'escr',
					'\u{1D522}': 'efr',
					'\u{1D556}': 'eopf',
					ℰ: 'Escr',
					'\u{1D508}': 'Efr',
					'\u{1D53C}': 'Eopf',
					é: 'eacute',
					É: 'Eacute',
					è: 'egrave',
					È: 'Egrave',
					ê: 'ecirc',
					Ê: 'Ecirc',
					ě: 'ecaron',
					Ě: 'Ecaron',
					ë: 'euml',
					Ë: 'Euml',
					ė: 'edot',
					Ė: 'Edot',
					ę: 'eogon',
					Ę: 'Eogon',
					ē: 'emacr',
					Ē: 'Emacr',
					'\u{1D523}': 'ffr',
					'\u{1D557}': 'fopf',
					'\u{1D4BB}': 'fscr',
					'\u{1D509}': 'Ffr',
					'\u{1D53D}': 'Fopf',
					ℱ: 'Fscr',
					ﬀ: 'fflig',
					ﬃ: 'ffilig',
					ﬄ: 'ffllig',
					ﬁ: 'filig',
					fj: 'fjlig',
					ﬂ: 'fllig',
					ƒ: 'fnof',
					ℊ: 'gscr',
					'\u{1D558}': 'gopf',
					'\u{1D524}': 'gfr',
					'\u{1D4A2}': 'Gscr',
					'\u{1D53E}': 'Gopf',
					'\u{1D50A}': 'Gfr',
					ǵ: 'gacute',
					ğ: 'gbreve',
					Ğ: 'Gbreve',
					ĝ: 'gcirc',
					Ĝ: 'Gcirc',
					ġ: 'gdot',
					Ġ: 'Gdot',
					Ģ: 'Gcedil',
					'\u{1D525}': 'hfr',
					ℎ: 'planckh',
					'\u{1D4BD}': 'hscr',
					'\u{1D559}': 'hopf',
					ℋ: 'Hscr',
					ℌ: 'Hfr',
					ℍ: 'Hopf',
					ĥ: 'hcirc',
					Ĥ: 'Hcirc',
					ℏ: 'hbar',
					ħ: 'hstrok',
					Ħ: 'Hstrok',
					'\u{1D55A}': 'iopf',
					'\u{1D526}': 'ifr',
					'\u{1D4BE}': 'iscr',
					'\u2148': 'ii',
					'\u{1D540}': 'Iopf',
					ℐ: 'Iscr',
					ℑ: 'Im',
					í: 'iacute',
					Í: 'Iacute',
					ì: 'igrave',
					Ì: 'Igrave',
					î: 'icirc',
					Î: 'Icirc',
					ï: 'iuml',
					Ï: 'Iuml',
					ĩ: 'itilde',
					Ĩ: 'Itilde',
					İ: 'Idot',
					į: 'iogon',
					Į: 'Iogon',
					ī: 'imacr',
					Ī: 'Imacr',
					ĳ: 'ijlig',
					Ĳ: 'IJlig',
					ı: 'imath',
					'\u{1D4BF}': 'jscr',
					'\u{1D55B}': 'jopf',
					'\u{1D527}': 'jfr',
					'\u{1D4A5}': 'Jscr',
					'\u{1D50D}': 'Jfr',
					'\u{1D541}': 'Jopf',
					ĵ: 'jcirc',
					Ĵ: 'Jcirc',
					'\u0237': 'jmath',
					'\u{1D55C}': 'kopf',
					'\u{1D4C0}': 'kscr',
					'\u{1D528}': 'kfr',
					'\u{1D4A6}': 'Kscr',
					'\u{1D542}': 'Kopf',
					'\u{1D50E}': 'Kfr',
					ķ: 'kcedil',
					Ķ: 'Kcedil',
					'\u{1D529}': 'lfr',
					'\u{1D4C1}': 'lscr',
					ℓ: 'ell',
					'\u{1D55D}': 'lopf',
					ℒ: 'Lscr',
					'\u{1D50F}': 'Lfr',
					'\u{1D543}': 'Lopf',
					ĺ: 'lacute',
					Ĺ: 'Lacute',
					ľ: 'lcaron',
					Ľ: 'Lcaron',
					ļ: 'lcedil',
					Ļ: 'Lcedil',
					ł: 'lstrok',
					Ł: 'Lstrok',
					ŀ: 'lmidot',
					Ŀ: 'Lmidot',
					'\u{1D52A}': 'mfr',
					'\u{1D55E}': 'mopf',
					'\u{1D4C2}': 'mscr',
					'\u{1D510}': 'Mfr',
					'\u{1D544}': 'Mopf',
					ℳ: 'Mscr',
					'\u{1D52B}': 'nfr',
					'\u{1D55F}': 'nopf',
					'\u{1D4C3}': 'nscr',
					ℕ: 'Nopf',
					'\u{1D4A9}': 'Nscr',
					'\u{1D511}': 'Nfr',
					ń: 'nacute',
					Ń: 'Nacute',
					ň: 'ncaron',
					Ň: 'Ncaron',
					ñ: 'ntilde',
					Ñ: 'Ntilde',
					ņ: 'ncedil',
					Ņ: 'Ncedil',
					'\u2116': 'numero',
					ŋ: 'eng',
					Ŋ: 'ENG',
					'\u{1D560}': 'oopf',
					'\u{1D52C}': 'ofr',
					ℴ: 'oscr',
					'\u{1D4AA}': 'Oscr',
					'\u{1D512}': 'Ofr',
					'\u{1D546}': 'Oopf',
					º: 'ordm',
					ó: 'oacute',
					Ó: 'Oacute',
					ò: 'ograve',
					Ò: 'Ograve',
					ô: 'ocirc',
					Ô: 'Ocirc',
					ö: 'ouml',
					Ö: 'Ouml',
					ő: 'odblac',
					Ő: 'Odblac',
					õ: 'otilde',
					Õ: 'Otilde',
					ø: 'oslash',
					Ø: 'Oslash',
					ō: 'omacr',
					Ō: 'Omacr',
					œ: 'oelig',
					Œ: 'OElig',
					'\u{1D52D}': 'pfr',
					'\u{1D4C5}': 'pscr',
					'\u{1D561}': 'popf',
					ℙ: 'Popf',
					'\u{1D513}': 'Pfr',
					'\u{1D4AB}': 'Pscr',
					'\u{1D562}': 'qopf',
					'\u{1D52E}': 'qfr',
					'\u{1D4C6}': 'qscr',
					'\u{1D4AC}': 'Qscr',
					'\u{1D514}': 'Qfr',
					ℚ: 'Qopf',
					ĸ: 'kgreen',
					'\u{1D52F}': 'rfr',
					'\u{1D563}': 'ropf',
					'\u{1D4C7}': 'rscr',
					ℛ: 'Rscr',
					ℜ: 'Re',
					ℝ: 'Ropf',
					ŕ: 'racute',
					Ŕ: 'Racute',
					ř: 'rcaron',
					Ř: 'Rcaron',
					ŗ: 'rcedil',
					Ŗ: 'Rcedil',
					'\u{1D564}': 'sopf',
					'\u{1D4C8}': 'sscr',
					'\u{1D530}': 'sfr',
					'\u{1D54A}': 'Sopf',
					'\u{1D516}': 'Sfr',
					'\u{1D4AE}': 'Sscr',
					'\u24C8': 'oS',
					ś: 'sacute',
					Ś: 'Sacute',
					ŝ: 'scirc',
					Ŝ: 'Scirc',
					š: 'scaron',
					Š: 'Scaron',
					ş: 'scedil',
					Ş: 'Scedil',
					ß: 'szlig',
					'\u{1D531}': 'tfr',
					'\u{1D4C9}': 'tscr',
					'\u{1D565}': 'topf',
					'\u{1D4AF}': 'Tscr',
					'\u{1D517}': 'Tfr',
					'\u{1D54B}': 'Topf',
					ť: 'tcaron',
					Ť: 'Tcaron',
					ţ: 'tcedil',
					Ţ: 'Tcedil',
					'\u2122': 'trade',
					ŧ: 'tstrok',
					Ŧ: 'Tstrok',
					'\u{1D4CA}': 'uscr',
					'\u{1D566}': 'uopf',
					'\u{1D532}': 'ufr',
					'\u{1D54C}': 'Uopf',
					'\u{1D518}': 'Ufr',
					'\u{1D4B0}': 'Uscr',
					ú: 'uacute',
					Ú: 'Uacute',
					ù: 'ugrave',
					Ù: 'Ugrave',
					ŭ: 'ubreve',
					Ŭ: 'Ubreve',
					û: 'ucirc',
					Û: 'Ucirc',
					ů: 'uring',
					Ů: 'Uring',
					ü: 'uuml',
					Ü: 'Uuml',
					ű: 'udblac',
					Ű: 'Udblac',
					ũ: 'utilde',
					Ũ: 'Utilde',
					ų: 'uogon',
					Ų: 'Uogon',
					ū: 'umacr',
					Ū: 'Umacr',
					'\u{1D533}': 'vfr',
					'\u{1D567}': 'vopf',
					'\u{1D4CB}': 'vscr',
					'\u{1D519}': 'Vfr',
					'\u{1D54D}': 'Vopf',
					'\u{1D4B1}': 'Vscr',
					'\u{1D568}': 'wopf',
					'\u{1D4CC}': 'wscr',
					'\u{1D534}': 'wfr',
					'\u{1D4B2}': 'Wscr',
					'\u{1D54E}': 'Wopf',
					'\u{1D51A}': 'Wfr',
					ŵ: 'wcirc',
					Ŵ: 'Wcirc',
					'\u{1D535}': 'xfr',
					'\u{1D4CD}': 'xscr',
					'\u{1D569}': 'xopf',
					'\u{1D54F}': 'Xopf',
					'\u{1D51B}': 'Xfr',
					'\u{1D4B3}': 'Xscr',
					'\u{1D536}': 'yfr',
					'\u{1D4CE}': 'yscr',
					'\u{1D56A}': 'yopf',
					'\u{1D4B4}': 'Yscr',
					'\u{1D51C}': 'Yfr',
					'\u{1D550}': 'Yopf',
					ý: 'yacute',
					Ý: 'Yacute',
					ŷ: 'ycirc',
					Ŷ: 'Ycirc',
					ÿ: 'yuml',
					Ÿ: 'Yuml',
					'\u{1D4CF}': 'zscr',
					'\u{1D537}': 'zfr',
					'\u{1D56B}': 'zopf',
					ℨ: 'Zfr',
					ℤ: 'Zopf',
					'\u{1D4B5}': 'Zscr',
					ź: 'zacute',
					Ź: 'Zacute',
					ž: 'zcaron',
					Ž: 'Zcaron',
					ż: 'zdot',
					Ż: 'Zdot',
					Ƶ: 'imped',
					þ: 'thorn',
					Þ: 'THORN',
					ŉ: 'napos',
					α: 'alpha',
					Α: 'Alpha',
					β: 'beta',
					Β: 'Beta',
					γ: 'gamma',
					Γ: 'Gamma',
					δ: 'delta',
					Δ: 'Delta',
					ε: 'epsi',
					'\u03F5': 'epsiv',
					Ε: 'Epsilon',
					ϝ: 'gammad',
					Ϝ: 'Gammad',
					ζ: 'zeta',
					Ζ: 'Zeta',
					η: 'eta',
					Η: 'Eta',
					θ: 'theta',
					ϑ: 'thetav',
					Θ: 'Theta',
					ι: 'iota',
					Ι: 'Iota',
					κ: 'kappa',
					ϰ: 'kappav',
					Κ: 'Kappa',
					λ: 'lambda',
					Λ: 'Lambda',
					μ: 'mu',
					µ: 'micro',
					Μ: 'Mu',
					ν: 'nu',
					Ν: 'Nu',
					ξ: 'xi',
					Ξ: 'Xi',
					ο: 'omicron',
					Ο: 'Omicron',
					π: 'pi',
					ϖ: 'piv',
					Π: 'Pi',
					ρ: 'rho',
					ϱ: 'rhov',
					Ρ: 'Rho',
					σ: 'sigma',
					Σ: 'Sigma',
					ς: 'sigmaf',
					τ: 'tau',
					Τ: 'Tau',
					υ: 'upsi',
					Υ: 'Upsilon',
					ϒ: 'Upsi',
					φ: 'phi',
					ϕ: 'phiv',
					Φ: 'Phi',
					χ: 'chi',
					Χ: 'Chi',
					ψ: 'psi',
					Ψ: 'Psi',
					ω: 'omega',
					Ω: 'ohm',
					а: 'acy',
					А: 'Acy',
					б: 'bcy',
					Б: 'Bcy',
					в: 'vcy',
					В: 'Vcy',
					г: 'gcy',
					Г: 'Gcy',
					ѓ: 'gjcy',
					Ѓ: 'GJcy',
					д: 'dcy',
					Д: 'Dcy',
					ђ: 'djcy',
					Ђ: 'DJcy',
					е: 'iecy',
					Е: 'IEcy',
					ё: 'iocy',
					Ё: 'IOcy',
					є: 'jukcy',
					Є: 'Jukcy',
					ж: 'zhcy',
					Ж: 'ZHcy',
					з: 'zcy',
					З: 'Zcy',
					ѕ: 'dscy',
					Ѕ: 'DScy',
					и: 'icy',
					И: 'Icy',
					і: 'iukcy',
					І: 'Iukcy',
					ї: 'yicy',
					Ї: 'YIcy',
					й: 'jcy',
					Й: 'Jcy',
					ј: 'jsercy',
					Ј: 'Jsercy',
					к: 'kcy',
					К: 'Kcy',
					ќ: 'kjcy',
					Ќ: 'KJcy',
					л: 'lcy',
					Л: 'Lcy',
					љ: 'ljcy',
					Љ: 'LJcy',
					м: 'mcy',
					М: 'Mcy',
					н: 'ncy',
					Н: 'Ncy',
					њ: 'njcy',
					Њ: 'NJcy',
					о: 'ocy',
					О: 'Ocy',
					п: 'pcy',
					П: 'Pcy',
					р: 'rcy',
					Р: 'Rcy',
					с: 'scy',
					С: 'Scy',
					т: 'tcy',
					Т: 'Tcy',
					ћ: 'tshcy',
					Ћ: 'TSHcy',
					у: 'ucy',
					У: 'Ucy',
					ў: 'ubrcy',
					Ў: 'Ubrcy',
					ф: 'fcy',
					Ф: 'Fcy',
					х: 'khcy',
					Х: 'KHcy',
					ц: 'tscy',
					Ц: 'TScy',
					ч: 'chcy',
					Ч: 'CHcy',
					џ: 'dzcy',
					Џ: 'DZcy',
					ш: 'shcy',
					Ш: 'SHcy',
					щ: 'shchcy',
					Щ: 'SHCHcy',
					ъ: 'hardcy',
					Ъ: 'HARDcy',
					ы: 'ycy',
					Ы: 'Ycy',
					ь: 'softcy',
					Ь: 'SOFTcy',
					э: 'ecy',
					Э: 'Ecy',
					ю: 'yucy',
					Ю: 'YUcy',
					я: 'yacy',
					Я: 'YAcy',
					ℵ: 'aleph',
					ℶ: 'beth',
					ℷ: 'gimel',
					ℸ: 'daleth',
				},
				f = /["&'<>`]/g,
				h = {
					'"': '&quot;',
					'&': '&amp;',
					"'": '&#x27;',
					'<': '&lt;',
					'>': '&gt;',
					'`': '&#x60;',
				},
				g = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/,
				p =
					/[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
				D =
					/&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g,
				y = {
					aacute: '\xE1',
					Aacute: '\xC1',
					abreve: '\u0103',
					Abreve: '\u0102',
					ac: '\u223E',
					acd: '\u223F',
					acE: '\u223E\u0333',
					acirc: '\xE2',
					Acirc: '\xC2',
					acute: '\xB4',
					acy: '\u0430',
					Acy: '\u0410',
					aelig: '\xE6',
					AElig: '\xC6',
					af: '\u2061',
					afr: '\u{1D51E}',
					Afr: '\u{1D504}',
					agrave: '\xE0',
					Agrave: '\xC0',
					alefsym: '\u2135',
					aleph: '\u2135',
					alpha: '\u03B1',
					Alpha: '\u0391',
					amacr: '\u0101',
					Amacr: '\u0100',
					amalg: '\u2A3F',
					amp: '&',
					AMP: '&',
					and: '\u2227',
					And: '\u2A53',
					andand: '\u2A55',
					andd: '\u2A5C',
					andslope: '\u2A58',
					andv: '\u2A5A',
					ang: '\u2220',
					ange: '\u29A4',
					angle: '\u2220',
					angmsd: '\u2221',
					angmsdaa: '\u29A8',
					angmsdab: '\u29A9',
					angmsdac: '\u29AA',
					angmsdad: '\u29AB',
					angmsdae: '\u29AC',
					angmsdaf: '\u29AD',
					angmsdag: '\u29AE',
					angmsdah: '\u29AF',
					angrt: '\u221F',
					angrtvb: '\u22BE',
					angrtvbd: '\u299D',
					angsph: '\u2222',
					angst: '\xC5',
					angzarr: '\u237C',
					aogon: '\u0105',
					Aogon: '\u0104',
					aopf: '\u{1D552}',
					Aopf: '\u{1D538}',
					ap: '\u2248',
					apacir: '\u2A6F',
					ape: '\u224A',
					apE: '\u2A70',
					apid: '\u224B',
					apos: "'",
					ApplyFunction: '\u2061',
					approx: '\u2248',
					approxeq: '\u224A',
					aring: '\xE5',
					Aring: '\xC5',
					ascr: '\u{1D4B6}',
					Ascr: '\u{1D49C}',
					Assign: '\u2254',
					ast: '*',
					asymp: '\u2248',
					asympeq: '\u224D',
					atilde: '\xE3',
					Atilde: '\xC3',
					auml: '\xE4',
					Auml: '\xC4',
					awconint: '\u2233',
					awint: '\u2A11',
					backcong: '\u224C',
					backepsilon: '\u03F6',
					backprime: '\u2035',
					backsim: '\u223D',
					backsimeq: '\u22CD',
					Backslash: '\u2216',
					Barv: '\u2AE7',
					barvee: '\u22BD',
					barwed: '\u2305',
					Barwed: '\u2306',
					barwedge: '\u2305',
					bbrk: '\u23B5',
					bbrktbrk: '\u23B6',
					bcong: '\u224C',
					bcy: '\u0431',
					Bcy: '\u0411',
					bdquo: '\u201E',
					becaus: '\u2235',
					because: '\u2235',
					Because: '\u2235',
					bemptyv: '\u29B0',
					bepsi: '\u03F6',
					bernou: '\u212C',
					Bernoullis: '\u212C',
					beta: '\u03B2',
					Beta: '\u0392',
					beth: '\u2136',
					between: '\u226C',
					bfr: '\u{1D51F}',
					Bfr: '\u{1D505}',
					bigcap: '\u22C2',
					bigcirc: '\u25EF',
					bigcup: '\u22C3',
					bigodot: '\u2A00',
					bigoplus: '\u2A01',
					bigotimes: '\u2A02',
					bigsqcup: '\u2A06',
					bigstar: '\u2605',
					bigtriangledown: '\u25BD',
					bigtriangleup: '\u25B3',
					biguplus: '\u2A04',
					bigvee: '\u22C1',
					bigwedge: '\u22C0',
					bkarow: '\u290D',
					blacklozenge: '\u29EB',
					blacksquare: '\u25AA',
					blacktriangle: '\u25B4',
					blacktriangledown: '\u25BE',
					blacktriangleleft: '\u25C2',
					blacktriangleright: '\u25B8',
					blank: '\u2423',
					blk12: '\u2592',
					blk14: '\u2591',
					blk34: '\u2593',
					block: '\u2588',
					bne: '=\u20E5',
					bnequiv: '\u2261\u20E5',
					bnot: '\u2310',
					bNot: '\u2AED',
					bopf: '\u{1D553}',
					Bopf: '\u{1D539}',
					bot: '\u22A5',
					bottom: '\u22A5',
					bowtie: '\u22C8',
					boxbox: '\u29C9',
					boxdl: '\u2510',
					boxdL: '\u2555',
					boxDl: '\u2556',
					boxDL: '\u2557',
					boxdr: '\u250C',
					boxdR: '\u2552',
					boxDr: '\u2553',
					boxDR: '\u2554',
					boxh: '\u2500',
					boxH: '\u2550',
					boxhd: '\u252C',
					boxhD: '\u2565',
					boxHd: '\u2564',
					boxHD: '\u2566',
					boxhu: '\u2534',
					boxhU: '\u2568',
					boxHu: '\u2567',
					boxHU: '\u2569',
					boxminus: '\u229F',
					boxplus: '\u229E',
					boxtimes: '\u22A0',
					boxul: '\u2518',
					boxuL: '\u255B',
					boxUl: '\u255C',
					boxUL: '\u255D',
					boxur: '\u2514',
					boxuR: '\u2558',
					boxUr: '\u2559',
					boxUR: '\u255A',
					boxv: '\u2502',
					boxV: '\u2551',
					boxvh: '\u253C',
					boxvH: '\u256A',
					boxVh: '\u256B',
					boxVH: '\u256C',
					boxvl: '\u2524',
					boxvL: '\u2561',
					boxVl: '\u2562',
					boxVL: '\u2563',
					boxvr: '\u251C',
					boxvR: '\u255E',
					boxVr: '\u255F',
					boxVR: '\u2560',
					bprime: '\u2035',
					breve: '\u02D8',
					Breve: '\u02D8',
					brvbar: '\xA6',
					bscr: '\u{1D4B7}',
					Bscr: '\u212C',
					bsemi: '\u204F',
					bsim: '\u223D',
					bsime: '\u22CD',
					bsol: '\\',
					bsolb: '\u29C5',
					bsolhsub: '\u27C8',
					bull: '\u2022',
					bullet: '\u2022',
					bump: '\u224E',
					bumpe: '\u224F',
					bumpE: '\u2AAE',
					bumpeq: '\u224F',
					Bumpeq: '\u224E',
					cacute: '\u0107',
					Cacute: '\u0106',
					cap: '\u2229',
					Cap: '\u22D2',
					capand: '\u2A44',
					capbrcup: '\u2A49',
					capcap: '\u2A4B',
					capcup: '\u2A47',
					capdot: '\u2A40',
					CapitalDifferentialD: '\u2145',
					caps: '\u2229\uFE00',
					caret: '\u2041',
					caron: '\u02C7',
					Cayleys: '\u212D',
					ccaps: '\u2A4D',
					ccaron: '\u010D',
					Ccaron: '\u010C',
					ccedil: '\xE7',
					Ccedil: '\xC7',
					ccirc: '\u0109',
					Ccirc: '\u0108',
					Cconint: '\u2230',
					ccups: '\u2A4C',
					ccupssm: '\u2A50',
					cdot: '\u010B',
					Cdot: '\u010A',
					cedil: '\xB8',
					Cedilla: '\xB8',
					cemptyv: '\u29B2',
					cent: '\xA2',
					centerdot: '\xB7',
					CenterDot: '\xB7',
					cfr: '\u{1D520}',
					Cfr: '\u212D',
					chcy: '\u0447',
					CHcy: '\u0427',
					check: '\u2713',
					checkmark: '\u2713',
					chi: '\u03C7',
					Chi: '\u03A7',
					cir: '\u25CB',
					circ: '\u02C6',
					circeq: '\u2257',
					circlearrowleft: '\u21BA',
					circlearrowright: '\u21BB',
					circledast: '\u229B',
					circledcirc: '\u229A',
					circleddash: '\u229D',
					CircleDot: '\u2299',
					circledR: '\xAE',
					circledS: '\u24C8',
					CircleMinus: '\u2296',
					CirclePlus: '\u2295',
					CircleTimes: '\u2297',
					cire: '\u2257',
					cirE: '\u29C3',
					cirfnint: '\u2A10',
					cirmid: '\u2AEF',
					cirscir: '\u29C2',
					ClockwiseContourIntegral: '\u2232',
					CloseCurlyDoubleQuote: '\u201D',
					CloseCurlyQuote: '\u2019',
					clubs: '\u2663',
					clubsuit: '\u2663',
					colon: ':',
					Colon: '\u2237',
					colone: '\u2254',
					Colone: '\u2A74',
					coloneq: '\u2254',
					comma: ',',
					commat: '@',
					comp: '\u2201',
					compfn: '\u2218',
					complement: '\u2201',
					complexes: '\u2102',
					cong: '\u2245',
					congdot: '\u2A6D',
					Congruent: '\u2261',
					conint: '\u222E',
					Conint: '\u222F',
					ContourIntegral: '\u222E',
					copf: '\u{1D554}',
					Copf: '\u2102',
					coprod: '\u2210',
					Coproduct: '\u2210',
					copy: '\xA9',
					COPY: '\xA9',
					copysr: '\u2117',
					CounterClockwiseContourIntegral: '\u2233',
					crarr: '\u21B5',
					cross: '\u2717',
					Cross: '\u2A2F',
					cscr: '\u{1D4B8}',
					Cscr: '\u{1D49E}',
					csub: '\u2ACF',
					csube: '\u2AD1',
					csup: '\u2AD0',
					csupe: '\u2AD2',
					ctdot: '\u22EF',
					cudarrl: '\u2938',
					cudarrr: '\u2935',
					cuepr: '\u22DE',
					cuesc: '\u22DF',
					cularr: '\u21B6',
					cularrp: '\u293D',
					cup: '\u222A',
					Cup: '\u22D3',
					cupbrcap: '\u2A48',
					cupcap: '\u2A46',
					CupCap: '\u224D',
					cupcup: '\u2A4A',
					cupdot: '\u228D',
					cupor: '\u2A45',
					cups: '\u222A\uFE00',
					curarr: '\u21B7',
					curarrm: '\u293C',
					curlyeqprec: '\u22DE',
					curlyeqsucc: '\u22DF',
					curlyvee: '\u22CE',
					curlywedge: '\u22CF',
					curren: '\xA4',
					curvearrowleft: '\u21B6',
					curvearrowright: '\u21B7',
					cuvee: '\u22CE',
					cuwed: '\u22CF',
					cwconint: '\u2232',
					cwint: '\u2231',
					cylcty: '\u232D',
					dagger: '\u2020',
					Dagger: '\u2021',
					daleth: '\u2138',
					darr: '\u2193',
					dArr: '\u21D3',
					Darr: '\u21A1',
					dash: '\u2010',
					dashv: '\u22A3',
					Dashv: '\u2AE4',
					dbkarow: '\u290F',
					dblac: '\u02DD',
					dcaron: '\u010F',
					Dcaron: '\u010E',
					dcy: '\u0434',
					Dcy: '\u0414',
					dd: '\u2146',
					DD: '\u2145',
					ddagger: '\u2021',
					ddarr: '\u21CA',
					DDotrahd: '\u2911',
					ddotseq: '\u2A77',
					deg: '\xB0',
					Del: '\u2207',
					delta: '\u03B4',
					Delta: '\u0394',
					demptyv: '\u29B1',
					dfisht: '\u297F',
					dfr: '\u{1D521}',
					Dfr: '\u{1D507}',
					dHar: '\u2965',
					dharl: '\u21C3',
					dharr: '\u21C2',
					DiacriticalAcute: '\xB4',
					DiacriticalDot: '\u02D9',
					DiacriticalDoubleAcute: '\u02DD',
					DiacriticalGrave: '`',
					DiacriticalTilde: '\u02DC',
					diam: '\u22C4',
					diamond: '\u22C4',
					Diamond: '\u22C4',
					diamondsuit: '\u2666',
					diams: '\u2666',
					die: '\xA8',
					DifferentialD: '\u2146',
					digamma: '\u03DD',
					disin: '\u22F2',
					div: '\xF7',
					divide: '\xF7',
					divideontimes: '\u22C7',
					divonx: '\u22C7',
					djcy: '\u0452',
					DJcy: '\u0402',
					dlcorn: '\u231E',
					dlcrop: '\u230D',
					dollar: '$',
					dopf: '\u{1D555}',
					Dopf: '\u{1D53B}',
					dot: '\u02D9',
					Dot: '\xA8',
					DotDot: '\u20DC',
					doteq: '\u2250',
					doteqdot: '\u2251',
					DotEqual: '\u2250',
					dotminus: '\u2238',
					dotplus: '\u2214',
					dotsquare: '\u22A1',
					doublebarwedge: '\u2306',
					DoubleContourIntegral: '\u222F',
					DoubleDot: '\xA8',
					DoubleDownArrow: '\u21D3',
					DoubleLeftArrow: '\u21D0',
					DoubleLeftRightArrow: '\u21D4',
					DoubleLeftTee: '\u2AE4',
					DoubleLongLeftArrow: '\u27F8',
					DoubleLongLeftRightArrow: '\u27FA',
					DoubleLongRightArrow: '\u27F9',
					DoubleRightArrow: '\u21D2',
					DoubleRightTee: '\u22A8',
					DoubleUpArrow: '\u21D1',
					DoubleUpDownArrow: '\u21D5',
					DoubleVerticalBar: '\u2225',
					downarrow: '\u2193',
					Downarrow: '\u21D3',
					DownArrow: '\u2193',
					DownArrowBar: '\u2913',
					DownArrowUpArrow: '\u21F5',
					DownBreve: '\u0311',
					downdownarrows: '\u21CA',
					downharpoonleft: '\u21C3',
					downharpoonright: '\u21C2',
					DownLeftRightVector: '\u2950',
					DownLeftTeeVector: '\u295E',
					DownLeftVector: '\u21BD',
					DownLeftVectorBar: '\u2956',
					DownRightTeeVector: '\u295F',
					DownRightVector: '\u21C1',
					DownRightVectorBar: '\u2957',
					DownTee: '\u22A4',
					DownTeeArrow: '\u21A7',
					drbkarow: '\u2910',
					drcorn: '\u231F',
					drcrop: '\u230C',
					dscr: '\u{1D4B9}',
					Dscr: '\u{1D49F}',
					dscy: '\u0455',
					DScy: '\u0405',
					dsol: '\u29F6',
					dstrok: '\u0111',
					Dstrok: '\u0110',
					dtdot: '\u22F1',
					dtri: '\u25BF',
					dtrif: '\u25BE',
					duarr: '\u21F5',
					duhar: '\u296F',
					dwangle: '\u29A6',
					dzcy: '\u045F',
					DZcy: '\u040F',
					dzigrarr: '\u27FF',
					eacute: '\xE9',
					Eacute: '\xC9',
					easter: '\u2A6E',
					ecaron: '\u011B',
					Ecaron: '\u011A',
					ecir: '\u2256',
					ecirc: '\xEA',
					Ecirc: '\xCA',
					ecolon: '\u2255',
					ecy: '\u044D',
					Ecy: '\u042D',
					eDDot: '\u2A77',
					edot: '\u0117',
					eDot: '\u2251',
					Edot: '\u0116',
					ee: '\u2147',
					efDot: '\u2252',
					efr: '\u{1D522}',
					Efr: '\u{1D508}',
					eg: '\u2A9A',
					egrave: '\xE8',
					Egrave: '\xC8',
					egs: '\u2A96',
					egsdot: '\u2A98',
					el: '\u2A99',
					Element: '\u2208',
					elinters: '\u23E7',
					ell: '\u2113',
					els: '\u2A95',
					elsdot: '\u2A97',
					emacr: '\u0113',
					Emacr: '\u0112',
					empty: '\u2205',
					emptyset: '\u2205',
					EmptySmallSquare: '\u25FB',
					emptyv: '\u2205',
					EmptyVerySmallSquare: '\u25AB',
					emsp: '\u2003',
					emsp13: '\u2004',
					emsp14: '\u2005',
					eng: '\u014B',
					ENG: '\u014A',
					ensp: '\u2002',
					eogon: '\u0119',
					Eogon: '\u0118',
					eopf: '\u{1D556}',
					Eopf: '\u{1D53C}',
					epar: '\u22D5',
					eparsl: '\u29E3',
					eplus: '\u2A71',
					epsi: '\u03B5',
					epsilon: '\u03B5',
					Epsilon: '\u0395',
					epsiv: '\u03F5',
					eqcirc: '\u2256',
					eqcolon: '\u2255',
					eqsim: '\u2242',
					eqslantgtr: '\u2A96',
					eqslantless: '\u2A95',
					Equal: '\u2A75',
					equals: '=',
					EqualTilde: '\u2242',
					equest: '\u225F',
					Equilibrium: '\u21CC',
					equiv: '\u2261',
					equivDD: '\u2A78',
					eqvparsl: '\u29E5',
					erarr: '\u2971',
					erDot: '\u2253',
					escr: '\u212F',
					Escr: '\u2130',
					esdot: '\u2250',
					esim: '\u2242',
					Esim: '\u2A73',
					eta: '\u03B7',
					Eta: '\u0397',
					eth: '\xF0',
					ETH: '\xD0',
					euml: '\xEB',
					Euml: '\xCB',
					euro: '\u20AC',
					excl: '!',
					exist: '\u2203',
					Exists: '\u2203',
					expectation: '\u2130',
					exponentiale: '\u2147',
					ExponentialE: '\u2147',
					fallingdotseq: '\u2252',
					fcy: '\u0444',
					Fcy: '\u0424',
					female: '\u2640',
					ffilig: '\uFB03',
					fflig: '\uFB00',
					ffllig: '\uFB04',
					ffr: '\u{1D523}',
					Ffr: '\u{1D509}',
					filig: '\uFB01',
					FilledSmallSquare: '\u25FC',
					FilledVerySmallSquare: '\u25AA',
					fjlig: 'fj',
					flat: '\u266D',
					fllig: '\uFB02',
					fltns: '\u25B1',
					fnof: '\u0192',
					fopf: '\u{1D557}',
					Fopf: '\u{1D53D}',
					forall: '\u2200',
					ForAll: '\u2200',
					fork: '\u22D4',
					forkv: '\u2AD9',
					Fouriertrf: '\u2131',
					fpartint: '\u2A0D',
					frac12: '\xBD',
					frac13: '\u2153',
					frac14: '\xBC',
					frac15: '\u2155',
					frac16: '\u2159',
					frac18: '\u215B',
					frac23: '\u2154',
					frac25: '\u2156',
					frac34: '\xBE',
					frac35: '\u2157',
					frac38: '\u215C',
					frac45: '\u2158',
					frac56: '\u215A',
					frac58: '\u215D',
					frac78: '\u215E',
					frasl: '\u2044',
					frown: '\u2322',
					fscr: '\u{1D4BB}',
					Fscr: '\u2131',
					gacute: '\u01F5',
					gamma: '\u03B3',
					Gamma: '\u0393',
					gammad: '\u03DD',
					Gammad: '\u03DC',
					gap: '\u2A86',
					gbreve: '\u011F',
					Gbreve: '\u011E',
					Gcedil: '\u0122',
					gcirc: '\u011D',
					Gcirc: '\u011C',
					gcy: '\u0433',
					Gcy: '\u0413',
					gdot: '\u0121',
					Gdot: '\u0120',
					ge: '\u2265',
					gE: '\u2267',
					gel: '\u22DB',
					gEl: '\u2A8C',
					geq: '\u2265',
					geqq: '\u2267',
					geqslant: '\u2A7E',
					ges: '\u2A7E',
					gescc: '\u2AA9',
					gesdot: '\u2A80',
					gesdoto: '\u2A82',
					gesdotol: '\u2A84',
					gesl: '\u22DB\uFE00',
					gesles: '\u2A94',
					gfr: '\u{1D524}',
					Gfr: '\u{1D50A}',
					gg: '\u226B',
					Gg: '\u22D9',
					ggg: '\u22D9',
					gimel: '\u2137',
					gjcy: '\u0453',
					GJcy: '\u0403',
					gl: '\u2277',
					gla: '\u2AA5',
					glE: '\u2A92',
					glj: '\u2AA4',
					gnap: '\u2A8A',
					gnapprox: '\u2A8A',
					gne: '\u2A88',
					gnE: '\u2269',
					gneq: '\u2A88',
					gneqq: '\u2269',
					gnsim: '\u22E7',
					gopf: '\u{1D558}',
					Gopf: '\u{1D53E}',
					grave: '`',
					GreaterEqual: '\u2265',
					GreaterEqualLess: '\u22DB',
					GreaterFullEqual: '\u2267',
					GreaterGreater: '\u2AA2',
					GreaterLess: '\u2277',
					GreaterSlantEqual: '\u2A7E',
					GreaterTilde: '\u2273',
					gscr: '\u210A',
					Gscr: '\u{1D4A2}',
					gsim: '\u2273',
					gsime: '\u2A8E',
					gsiml: '\u2A90',
					gt: '>',
					Gt: '\u226B',
					GT: '>',
					gtcc: '\u2AA7',
					gtcir: '\u2A7A',
					gtdot: '\u22D7',
					gtlPar: '\u2995',
					gtquest: '\u2A7C',
					gtrapprox: '\u2A86',
					gtrarr: '\u2978',
					gtrdot: '\u22D7',
					gtreqless: '\u22DB',
					gtreqqless: '\u2A8C',
					gtrless: '\u2277',
					gtrsim: '\u2273',
					gvertneqq: '\u2269\uFE00',
					gvnE: '\u2269\uFE00',
					Hacek: '\u02C7',
					hairsp: '\u200A',
					half: '\xBD',
					hamilt: '\u210B',
					hardcy: '\u044A',
					HARDcy: '\u042A',
					harr: '\u2194',
					hArr: '\u21D4',
					harrcir: '\u2948',
					harrw: '\u21AD',
					Hat: '^',
					hbar: '\u210F',
					hcirc: '\u0125',
					Hcirc: '\u0124',
					hearts: '\u2665',
					heartsuit: '\u2665',
					hellip: '\u2026',
					hercon: '\u22B9',
					hfr: '\u{1D525}',
					Hfr: '\u210C',
					HilbertSpace: '\u210B',
					hksearow: '\u2925',
					hkswarow: '\u2926',
					hoarr: '\u21FF',
					homtht: '\u223B',
					hookleftarrow: '\u21A9',
					hookrightarrow: '\u21AA',
					hopf: '\u{1D559}',
					Hopf: '\u210D',
					horbar: '\u2015',
					HorizontalLine: '\u2500',
					hscr: '\u{1D4BD}',
					Hscr: '\u210B',
					hslash: '\u210F',
					hstrok: '\u0127',
					Hstrok: '\u0126',
					HumpDownHump: '\u224E',
					HumpEqual: '\u224F',
					hybull: '\u2043',
					hyphen: '\u2010',
					iacute: '\xED',
					Iacute: '\xCD',
					ic: '\u2063',
					icirc: '\xEE',
					Icirc: '\xCE',
					icy: '\u0438',
					Icy: '\u0418',
					Idot: '\u0130',
					iecy: '\u0435',
					IEcy: '\u0415',
					iexcl: '\xA1',
					iff: '\u21D4',
					ifr: '\u{1D526}',
					Ifr: '\u2111',
					igrave: '\xEC',
					Igrave: '\xCC',
					ii: '\u2148',
					iiiint: '\u2A0C',
					iiint: '\u222D',
					iinfin: '\u29DC',
					iiota: '\u2129',
					ijlig: '\u0133',
					IJlig: '\u0132',
					Im: '\u2111',
					imacr: '\u012B',
					Imacr: '\u012A',
					image: '\u2111',
					ImaginaryI: '\u2148',
					imagline: '\u2110',
					imagpart: '\u2111',
					imath: '\u0131',
					imof: '\u22B7',
					imped: '\u01B5',
					Implies: '\u21D2',
					in: '\u2208',
					incare: '\u2105',
					infin: '\u221E',
					infintie: '\u29DD',
					inodot: '\u0131',
					int: '\u222B',
					Int: '\u222C',
					intcal: '\u22BA',
					integers: '\u2124',
					Integral: '\u222B',
					intercal: '\u22BA',
					Intersection: '\u22C2',
					intlarhk: '\u2A17',
					intprod: '\u2A3C',
					InvisibleComma: '\u2063',
					InvisibleTimes: '\u2062',
					iocy: '\u0451',
					IOcy: '\u0401',
					iogon: '\u012F',
					Iogon: '\u012E',
					iopf: '\u{1D55A}',
					Iopf: '\u{1D540}',
					iota: '\u03B9',
					Iota: '\u0399',
					iprod: '\u2A3C',
					iquest: '\xBF',
					iscr: '\u{1D4BE}',
					Iscr: '\u2110',
					isin: '\u2208',
					isindot: '\u22F5',
					isinE: '\u22F9',
					isins: '\u22F4',
					isinsv: '\u22F3',
					isinv: '\u2208',
					it: '\u2062',
					itilde: '\u0129',
					Itilde: '\u0128',
					iukcy: '\u0456',
					Iukcy: '\u0406',
					iuml: '\xEF',
					Iuml: '\xCF',
					jcirc: '\u0135',
					Jcirc: '\u0134',
					jcy: '\u0439',
					Jcy: '\u0419',
					jfr: '\u{1D527}',
					Jfr: '\u{1D50D}',
					jmath: '\u0237',
					jopf: '\u{1D55B}',
					Jopf: '\u{1D541}',
					jscr: '\u{1D4BF}',
					Jscr: '\u{1D4A5}',
					jsercy: '\u0458',
					Jsercy: '\u0408',
					jukcy: '\u0454',
					Jukcy: '\u0404',
					kappa: '\u03BA',
					Kappa: '\u039A',
					kappav: '\u03F0',
					kcedil: '\u0137',
					Kcedil: '\u0136',
					kcy: '\u043A',
					Kcy: '\u041A',
					kfr: '\u{1D528}',
					Kfr: '\u{1D50E}',
					kgreen: '\u0138',
					khcy: '\u0445',
					KHcy: '\u0425',
					kjcy: '\u045C',
					KJcy: '\u040C',
					kopf: '\u{1D55C}',
					Kopf: '\u{1D542}',
					kscr: '\u{1D4C0}',
					Kscr: '\u{1D4A6}',
					lAarr: '\u21DA',
					lacute: '\u013A',
					Lacute: '\u0139',
					laemptyv: '\u29B4',
					lagran: '\u2112',
					lambda: '\u03BB',
					Lambda: '\u039B',
					lang: '\u27E8',
					Lang: '\u27EA',
					langd: '\u2991',
					langle: '\u27E8',
					lap: '\u2A85',
					Laplacetrf: '\u2112',
					laquo: '\xAB',
					larr: '\u2190',
					lArr: '\u21D0',
					Larr: '\u219E',
					larrb: '\u21E4',
					larrbfs: '\u291F',
					larrfs: '\u291D',
					larrhk: '\u21A9',
					larrlp: '\u21AB',
					larrpl: '\u2939',
					larrsim: '\u2973',
					larrtl: '\u21A2',
					lat: '\u2AAB',
					latail: '\u2919',
					lAtail: '\u291B',
					late: '\u2AAD',
					lates: '\u2AAD\uFE00',
					lbarr: '\u290C',
					lBarr: '\u290E',
					lbbrk: '\u2772',
					lbrace: '{',
					lbrack: '[',
					lbrke: '\u298B',
					lbrksld: '\u298F',
					lbrkslu: '\u298D',
					lcaron: '\u013E',
					Lcaron: '\u013D',
					lcedil: '\u013C',
					Lcedil: '\u013B',
					lceil: '\u2308',
					lcub: '{',
					lcy: '\u043B',
					Lcy: '\u041B',
					ldca: '\u2936',
					ldquo: '\u201C',
					ldquor: '\u201E',
					ldrdhar: '\u2967',
					ldrushar: '\u294B',
					ldsh: '\u21B2',
					le: '\u2264',
					lE: '\u2266',
					LeftAngleBracket: '\u27E8',
					leftarrow: '\u2190',
					Leftarrow: '\u21D0',
					LeftArrow: '\u2190',
					LeftArrowBar: '\u21E4',
					LeftArrowRightArrow: '\u21C6',
					leftarrowtail: '\u21A2',
					LeftCeiling: '\u2308',
					LeftDoubleBracket: '\u27E6',
					LeftDownTeeVector: '\u2961',
					LeftDownVector: '\u21C3',
					LeftDownVectorBar: '\u2959',
					LeftFloor: '\u230A',
					leftharpoondown: '\u21BD',
					leftharpoonup: '\u21BC',
					leftleftarrows: '\u21C7',
					leftrightarrow: '\u2194',
					Leftrightarrow: '\u21D4',
					LeftRightArrow: '\u2194',
					leftrightarrows: '\u21C6',
					leftrightharpoons: '\u21CB',
					leftrightsquigarrow: '\u21AD',
					LeftRightVector: '\u294E',
					LeftTee: '\u22A3',
					LeftTeeArrow: '\u21A4',
					LeftTeeVector: '\u295A',
					leftthreetimes: '\u22CB',
					LeftTriangle: '\u22B2',
					LeftTriangleBar: '\u29CF',
					LeftTriangleEqual: '\u22B4',
					LeftUpDownVector: '\u2951',
					LeftUpTeeVector: '\u2960',
					LeftUpVector: '\u21BF',
					LeftUpVectorBar: '\u2958',
					LeftVector: '\u21BC',
					LeftVectorBar: '\u2952',
					leg: '\u22DA',
					lEg: '\u2A8B',
					leq: '\u2264',
					leqq: '\u2266',
					leqslant: '\u2A7D',
					les: '\u2A7D',
					lescc: '\u2AA8',
					lesdot: '\u2A7F',
					lesdoto: '\u2A81',
					lesdotor: '\u2A83',
					lesg: '\u22DA\uFE00',
					lesges: '\u2A93',
					lessapprox: '\u2A85',
					lessdot: '\u22D6',
					lesseqgtr: '\u22DA',
					lesseqqgtr: '\u2A8B',
					LessEqualGreater: '\u22DA',
					LessFullEqual: '\u2266',
					LessGreater: '\u2276',
					lessgtr: '\u2276',
					LessLess: '\u2AA1',
					lesssim: '\u2272',
					LessSlantEqual: '\u2A7D',
					LessTilde: '\u2272',
					lfisht: '\u297C',
					lfloor: '\u230A',
					lfr: '\u{1D529}',
					Lfr: '\u{1D50F}',
					lg: '\u2276',
					lgE: '\u2A91',
					lHar: '\u2962',
					lhard: '\u21BD',
					lharu: '\u21BC',
					lharul: '\u296A',
					lhblk: '\u2584',
					ljcy: '\u0459',
					LJcy: '\u0409',
					ll: '\u226A',
					Ll: '\u22D8',
					llarr: '\u21C7',
					llcorner: '\u231E',
					Lleftarrow: '\u21DA',
					llhard: '\u296B',
					lltri: '\u25FA',
					lmidot: '\u0140',
					Lmidot: '\u013F',
					lmoust: '\u23B0',
					lmoustache: '\u23B0',
					lnap: '\u2A89',
					lnapprox: '\u2A89',
					lne: '\u2A87',
					lnE: '\u2268',
					lneq: '\u2A87',
					lneqq: '\u2268',
					lnsim: '\u22E6',
					loang: '\u27EC',
					loarr: '\u21FD',
					lobrk: '\u27E6',
					longleftarrow: '\u27F5',
					Longleftarrow: '\u27F8',
					LongLeftArrow: '\u27F5',
					longleftrightarrow: '\u27F7',
					Longleftrightarrow: '\u27FA',
					LongLeftRightArrow: '\u27F7',
					longmapsto: '\u27FC',
					longrightarrow: '\u27F6',
					Longrightarrow: '\u27F9',
					LongRightArrow: '\u27F6',
					looparrowleft: '\u21AB',
					looparrowright: '\u21AC',
					lopar: '\u2985',
					lopf: '\u{1D55D}',
					Lopf: '\u{1D543}',
					loplus: '\u2A2D',
					lotimes: '\u2A34',
					lowast: '\u2217',
					lowbar: '_',
					LowerLeftArrow: '\u2199',
					LowerRightArrow: '\u2198',
					loz: '\u25CA',
					lozenge: '\u25CA',
					lozf: '\u29EB',
					lpar: '(',
					lparlt: '\u2993',
					lrarr: '\u21C6',
					lrcorner: '\u231F',
					lrhar: '\u21CB',
					lrhard: '\u296D',
					lrm: '\u200E',
					lrtri: '\u22BF',
					lsaquo: '\u2039',
					lscr: '\u{1D4C1}',
					Lscr: '\u2112',
					lsh: '\u21B0',
					Lsh: '\u21B0',
					lsim: '\u2272',
					lsime: '\u2A8D',
					lsimg: '\u2A8F',
					lsqb: '[',
					lsquo: '\u2018',
					lsquor: '\u201A',
					lstrok: '\u0142',
					Lstrok: '\u0141',
					lt: '<',
					Lt: '\u226A',
					LT: '<',
					ltcc: '\u2AA6',
					ltcir: '\u2A79',
					ltdot: '\u22D6',
					lthree: '\u22CB',
					ltimes: '\u22C9',
					ltlarr: '\u2976',
					ltquest: '\u2A7B',
					ltri: '\u25C3',
					ltrie: '\u22B4',
					ltrif: '\u25C2',
					ltrPar: '\u2996',
					lurdshar: '\u294A',
					luruhar: '\u2966',
					lvertneqq: '\u2268\uFE00',
					lvnE: '\u2268\uFE00',
					macr: '\xAF',
					male: '\u2642',
					malt: '\u2720',
					maltese: '\u2720',
					map: '\u21A6',
					Map: '\u2905',
					mapsto: '\u21A6',
					mapstodown: '\u21A7',
					mapstoleft: '\u21A4',
					mapstoup: '\u21A5',
					marker: '\u25AE',
					mcomma: '\u2A29',
					mcy: '\u043C',
					Mcy: '\u041C',
					mdash: '\u2014',
					mDDot: '\u223A',
					measuredangle: '\u2221',
					MediumSpace: '\u205F',
					Mellintrf: '\u2133',
					mfr: '\u{1D52A}',
					Mfr: '\u{1D510}',
					mho: '\u2127',
					micro: '\xB5',
					mid: '\u2223',
					midast: '*',
					midcir: '\u2AF0',
					middot: '\xB7',
					minus: '\u2212',
					minusb: '\u229F',
					minusd: '\u2238',
					minusdu: '\u2A2A',
					MinusPlus: '\u2213',
					mlcp: '\u2ADB',
					mldr: '\u2026',
					mnplus: '\u2213',
					models: '\u22A7',
					mopf: '\u{1D55E}',
					Mopf: '\u{1D544}',
					mp: '\u2213',
					mscr: '\u{1D4C2}',
					Mscr: '\u2133',
					mstpos: '\u223E',
					mu: '\u03BC',
					Mu: '\u039C',
					multimap: '\u22B8',
					mumap: '\u22B8',
					nabla: '\u2207',
					nacute: '\u0144',
					Nacute: '\u0143',
					nang: '\u2220\u20D2',
					nap: '\u2249',
					napE: '\u2A70\u0338',
					napid: '\u224B\u0338',
					napos: '\u0149',
					napprox: '\u2249',
					natur: '\u266E',
					natural: '\u266E',
					naturals: '\u2115',
					nbsp: '\xA0',
					nbump: '\u224E\u0338',
					nbumpe: '\u224F\u0338',
					ncap: '\u2A43',
					ncaron: '\u0148',
					Ncaron: '\u0147',
					ncedil: '\u0146',
					Ncedil: '\u0145',
					ncong: '\u2247',
					ncongdot: '\u2A6D\u0338',
					ncup: '\u2A42',
					ncy: '\u043D',
					Ncy: '\u041D',
					ndash: '\u2013',
					ne: '\u2260',
					nearhk: '\u2924',
					nearr: '\u2197',
					neArr: '\u21D7',
					nearrow: '\u2197',
					nedot: '\u2250\u0338',
					NegativeMediumSpace: '\u200B',
					NegativeThickSpace: '\u200B',
					NegativeThinSpace: '\u200B',
					NegativeVeryThinSpace: '\u200B',
					nequiv: '\u2262',
					nesear: '\u2928',
					nesim: '\u2242\u0338',
					NestedGreaterGreater: '\u226B',
					NestedLessLess: '\u226A',
					NewLine: `
`,
					nexist: '\u2204',
					nexists: '\u2204',
					nfr: '\u{1D52B}',
					Nfr: '\u{1D511}',
					nge: '\u2271',
					ngE: '\u2267\u0338',
					ngeq: '\u2271',
					ngeqq: '\u2267\u0338',
					ngeqslant: '\u2A7E\u0338',
					nges: '\u2A7E\u0338',
					nGg: '\u22D9\u0338',
					ngsim: '\u2275',
					ngt: '\u226F',
					nGt: '\u226B\u20D2',
					ngtr: '\u226F',
					nGtv: '\u226B\u0338',
					nharr: '\u21AE',
					nhArr: '\u21CE',
					nhpar: '\u2AF2',
					ni: '\u220B',
					nis: '\u22FC',
					nisd: '\u22FA',
					niv: '\u220B',
					njcy: '\u045A',
					NJcy: '\u040A',
					nlarr: '\u219A',
					nlArr: '\u21CD',
					nldr: '\u2025',
					nle: '\u2270',
					nlE: '\u2266\u0338',
					nleftarrow: '\u219A',
					nLeftarrow: '\u21CD',
					nleftrightarrow: '\u21AE',
					nLeftrightarrow: '\u21CE',
					nleq: '\u2270',
					nleqq: '\u2266\u0338',
					nleqslant: '\u2A7D\u0338',
					nles: '\u2A7D\u0338',
					nless: '\u226E',
					nLl: '\u22D8\u0338',
					nlsim: '\u2274',
					nlt: '\u226E',
					nLt: '\u226A\u20D2',
					nltri: '\u22EA',
					nltrie: '\u22EC',
					nLtv: '\u226A\u0338',
					nmid: '\u2224',
					NoBreak: '\u2060',
					NonBreakingSpace: '\xA0',
					nopf: '\u{1D55F}',
					Nopf: '\u2115',
					not: '\xAC',
					Not: '\u2AEC',
					NotCongruent: '\u2262',
					NotCupCap: '\u226D',
					NotDoubleVerticalBar: '\u2226',
					NotElement: '\u2209',
					NotEqual: '\u2260',
					NotEqualTilde: '\u2242\u0338',
					NotExists: '\u2204',
					NotGreater: '\u226F',
					NotGreaterEqual: '\u2271',
					NotGreaterFullEqual: '\u2267\u0338',
					NotGreaterGreater: '\u226B\u0338',
					NotGreaterLess: '\u2279',
					NotGreaterSlantEqual: '\u2A7E\u0338',
					NotGreaterTilde: '\u2275',
					NotHumpDownHump: '\u224E\u0338',
					NotHumpEqual: '\u224F\u0338',
					notin: '\u2209',
					notindot: '\u22F5\u0338',
					notinE: '\u22F9\u0338',
					notinva: '\u2209',
					notinvb: '\u22F7',
					notinvc: '\u22F6',
					NotLeftTriangle: '\u22EA',
					NotLeftTriangleBar: '\u29CF\u0338',
					NotLeftTriangleEqual: '\u22EC',
					NotLess: '\u226E',
					NotLessEqual: '\u2270',
					NotLessGreater: '\u2278',
					NotLessLess: '\u226A\u0338',
					NotLessSlantEqual: '\u2A7D\u0338',
					NotLessTilde: '\u2274',
					NotNestedGreaterGreater: '\u2AA2\u0338',
					NotNestedLessLess: '\u2AA1\u0338',
					notni: '\u220C',
					notniva: '\u220C',
					notnivb: '\u22FE',
					notnivc: '\u22FD',
					NotPrecedes: '\u2280',
					NotPrecedesEqual: '\u2AAF\u0338',
					NotPrecedesSlantEqual: '\u22E0',
					NotReverseElement: '\u220C',
					NotRightTriangle: '\u22EB',
					NotRightTriangleBar: '\u29D0\u0338',
					NotRightTriangleEqual: '\u22ED',
					NotSquareSubset: '\u228F\u0338',
					NotSquareSubsetEqual: '\u22E2',
					NotSquareSuperset: '\u2290\u0338',
					NotSquareSupersetEqual: '\u22E3',
					NotSubset: '\u2282\u20D2',
					NotSubsetEqual: '\u2288',
					NotSucceeds: '\u2281',
					NotSucceedsEqual: '\u2AB0\u0338',
					NotSucceedsSlantEqual: '\u22E1',
					NotSucceedsTilde: '\u227F\u0338',
					NotSuperset: '\u2283\u20D2',
					NotSupersetEqual: '\u2289',
					NotTilde: '\u2241',
					NotTildeEqual: '\u2244',
					NotTildeFullEqual: '\u2247',
					NotTildeTilde: '\u2249',
					NotVerticalBar: '\u2224',
					npar: '\u2226',
					nparallel: '\u2226',
					nparsl: '\u2AFD\u20E5',
					npart: '\u2202\u0338',
					npolint: '\u2A14',
					npr: '\u2280',
					nprcue: '\u22E0',
					npre: '\u2AAF\u0338',
					nprec: '\u2280',
					npreceq: '\u2AAF\u0338',
					nrarr: '\u219B',
					nrArr: '\u21CF',
					nrarrc: '\u2933\u0338',
					nrarrw: '\u219D\u0338',
					nrightarrow: '\u219B',
					nRightarrow: '\u21CF',
					nrtri: '\u22EB',
					nrtrie: '\u22ED',
					nsc: '\u2281',
					nsccue: '\u22E1',
					nsce: '\u2AB0\u0338',
					nscr: '\u{1D4C3}',
					Nscr: '\u{1D4A9}',
					nshortmid: '\u2224',
					nshortparallel: '\u2226',
					nsim: '\u2241',
					nsime: '\u2244',
					nsimeq: '\u2244',
					nsmid: '\u2224',
					nspar: '\u2226',
					nsqsube: '\u22E2',
					nsqsupe: '\u22E3',
					nsub: '\u2284',
					nsube: '\u2288',
					nsubE: '\u2AC5\u0338',
					nsubset: '\u2282\u20D2',
					nsubseteq: '\u2288',
					nsubseteqq: '\u2AC5\u0338',
					nsucc: '\u2281',
					nsucceq: '\u2AB0\u0338',
					nsup: '\u2285',
					nsupe: '\u2289',
					nsupE: '\u2AC6\u0338',
					nsupset: '\u2283\u20D2',
					nsupseteq: '\u2289',
					nsupseteqq: '\u2AC6\u0338',
					ntgl: '\u2279',
					ntilde: '\xF1',
					Ntilde: '\xD1',
					ntlg: '\u2278',
					ntriangleleft: '\u22EA',
					ntrianglelefteq: '\u22EC',
					ntriangleright: '\u22EB',
					ntrianglerighteq: '\u22ED',
					nu: '\u03BD',
					Nu: '\u039D',
					num: '#',
					numero: '\u2116',
					numsp: '\u2007',
					nvap: '\u224D\u20D2',
					nvdash: '\u22AC',
					nvDash: '\u22AD',
					nVdash: '\u22AE',
					nVDash: '\u22AF',
					nvge: '\u2265\u20D2',
					nvgt: '>\u20D2',
					nvHarr: '\u2904',
					nvinfin: '\u29DE',
					nvlArr: '\u2902',
					nvle: '\u2264\u20D2',
					nvlt: '<\u20D2',
					nvltrie: '\u22B4\u20D2',
					nvrArr: '\u2903',
					nvrtrie: '\u22B5\u20D2',
					nvsim: '\u223C\u20D2',
					nwarhk: '\u2923',
					nwarr: '\u2196',
					nwArr: '\u21D6',
					nwarrow: '\u2196',
					nwnear: '\u2927',
					oacute: '\xF3',
					Oacute: '\xD3',
					oast: '\u229B',
					ocir: '\u229A',
					ocirc: '\xF4',
					Ocirc: '\xD4',
					ocy: '\u043E',
					Ocy: '\u041E',
					odash: '\u229D',
					odblac: '\u0151',
					Odblac: '\u0150',
					odiv: '\u2A38',
					odot: '\u2299',
					odsold: '\u29BC',
					oelig: '\u0153',
					OElig: '\u0152',
					ofcir: '\u29BF',
					ofr: '\u{1D52C}',
					Ofr: '\u{1D512}',
					ogon: '\u02DB',
					ograve: '\xF2',
					Ograve: '\xD2',
					ogt: '\u29C1',
					ohbar: '\u29B5',
					ohm: '\u03A9',
					oint: '\u222E',
					olarr: '\u21BA',
					olcir: '\u29BE',
					olcross: '\u29BB',
					oline: '\u203E',
					olt: '\u29C0',
					omacr: '\u014D',
					Omacr: '\u014C',
					omega: '\u03C9',
					Omega: '\u03A9',
					omicron: '\u03BF',
					Omicron: '\u039F',
					omid: '\u29B6',
					ominus: '\u2296',
					oopf: '\u{1D560}',
					Oopf: '\u{1D546}',
					opar: '\u29B7',
					OpenCurlyDoubleQuote: '\u201C',
					OpenCurlyQuote: '\u2018',
					operp: '\u29B9',
					oplus: '\u2295',
					or: '\u2228',
					Or: '\u2A54',
					orarr: '\u21BB',
					ord: '\u2A5D',
					order: '\u2134',
					orderof: '\u2134',
					ordf: '\xAA',
					ordm: '\xBA',
					origof: '\u22B6',
					oror: '\u2A56',
					orslope: '\u2A57',
					orv: '\u2A5B',
					oS: '\u24C8',
					oscr: '\u2134',
					Oscr: '\u{1D4AA}',
					oslash: '\xF8',
					Oslash: '\xD8',
					osol: '\u2298',
					otilde: '\xF5',
					Otilde: '\xD5',
					otimes: '\u2297',
					Otimes: '\u2A37',
					otimesas: '\u2A36',
					ouml: '\xF6',
					Ouml: '\xD6',
					ovbar: '\u233D',
					OverBar: '\u203E',
					OverBrace: '\u23DE',
					OverBracket: '\u23B4',
					OverParenthesis: '\u23DC',
					par: '\u2225',
					para: '\xB6',
					parallel: '\u2225',
					parsim: '\u2AF3',
					parsl: '\u2AFD',
					part: '\u2202',
					PartialD: '\u2202',
					pcy: '\u043F',
					Pcy: '\u041F',
					percnt: '%',
					period: '.',
					permil: '\u2030',
					perp: '\u22A5',
					pertenk: '\u2031',
					pfr: '\u{1D52D}',
					Pfr: '\u{1D513}',
					phi: '\u03C6',
					Phi: '\u03A6',
					phiv: '\u03D5',
					phmmat: '\u2133',
					phone: '\u260E',
					pi: '\u03C0',
					Pi: '\u03A0',
					pitchfork: '\u22D4',
					piv: '\u03D6',
					planck: '\u210F',
					planckh: '\u210E',
					plankv: '\u210F',
					plus: '+',
					plusacir: '\u2A23',
					plusb: '\u229E',
					pluscir: '\u2A22',
					plusdo: '\u2214',
					plusdu: '\u2A25',
					pluse: '\u2A72',
					PlusMinus: '\xB1',
					plusmn: '\xB1',
					plussim: '\u2A26',
					plustwo: '\u2A27',
					pm: '\xB1',
					Poincareplane: '\u210C',
					pointint: '\u2A15',
					popf: '\u{1D561}',
					Popf: '\u2119',
					pound: '\xA3',
					pr: '\u227A',
					Pr: '\u2ABB',
					prap: '\u2AB7',
					prcue: '\u227C',
					pre: '\u2AAF',
					prE: '\u2AB3',
					prec: '\u227A',
					precapprox: '\u2AB7',
					preccurlyeq: '\u227C',
					Precedes: '\u227A',
					PrecedesEqual: '\u2AAF',
					PrecedesSlantEqual: '\u227C',
					PrecedesTilde: '\u227E',
					preceq: '\u2AAF',
					precnapprox: '\u2AB9',
					precneqq: '\u2AB5',
					precnsim: '\u22E8',
					precsim: '\u227E',
					prime: '\u2032',
					Prime: '\u2033',
					primes: '\u2119',
					prnap: '\u2AB9',
					prnE: '\u2AB5',
					prnsim: '\u22E8',
					prod: '\u220F',
					Product: '\u220F',
					profalar: '\u232E',
					profline: '\u2312',
					profsurf: '\u2313',
					prop: '\u221D',
					Proportion: '\u2237',
					Proportional: '\u221D',
					propto: '\u221D',
					prsim: '\u227E',
					prurel: '\u22B0',
					pscr: '\u{1D4C5}',
					Pscr: '\u{1D4AB}',
					psi: '\u03C8',
					Psi: '\u03A8',
					puncsp: '\u2008',
					qfr: '\u{1D52E}',
					Qfr: '\u{1D514}',
					qint: '\u2A0C',
					qopf: '\u{1D562}',
					Qopf: '\u211A',
					qprime: '\u2057',
					qscr: '\u{1D4C6}',
					Qscr: '\u{1D4AC}',
					quaternions: '\u210D',
					quatint: '\u2A16',
					quest: '?',
					questeq: '\u225F',
					quot: '"',
					QUOT: '"',
					rAarr: '\u21DB',
					race: '\u223D\u0331',
					racute: '\u0155',
					Racute: '\u0154',
					radic: '\u221A',
					raemptyv: '\u29B3',
					rang: '\u27E9',
					Rang: '\u27EB',
					rangd: '\u2992',
					range: '\u29A5',
					rangle: '\u27E9',
					raquo: '\xBB',
					rarr: '\u2192',
					rArr: '\u21D2',
					Rarr: '\u21A0',
					rarrap: '\u2975',
					rarrb: '\u21E5',
					rarrbfs: '\u2920',
					rarrc: '\u2933',
					rarrfs: '\u291E',
					rarrhk: '\u21AA',
					rarrlp: '\u21AC',
					rarrpl: '\u2945',
					rarrsim: '\u2974',
					rarrtl: '\u21A3',
					Rarrtl: '\u2916',
					rarrw: '\u219D',
					ratail: '\u291A',
					rAtail: '\u291C',
					ratio: '\u2236',
					rationals: '\u211A',
					rbarr: '\u290D',
					rBarr: '\u290F',
					RBarr: '\u2910',
					rbbrk: '\u2773',
					rbrace: '}',
					rbrack: ']',
					rbrke: '\u298C',
					rbrksld: '\u298E',
					rbrkslu: '\u2990',
					rcaron: '\u0159',
					Rcaron: '\u0158',
					rcedil: '\u0157',
					Rcedil: '\u0156',
					rceil: '\u2309',
					rcub: '}',
					rcy: '\u0440',
					Rcy: '\u0420',
					rdca: '\u2937',
					rdldhar: '\u2969',
					rdquo: '\u201D',
					rdquor: '\u201D',
					rdsh: '\u21B3',
					Re: '\u211C',
					real: '\u211C',
					realine: '\u211B',
					realpart: '\u211C',
					reals: '\u211D',
					rect: '\u25AD',
					reg: '\xAE',
					REG: '\xAE',
					ReverseElement: '\u220B',
					ReverseEquilibrium: '\u21CB',
					ReverseUpEquilibrium: '\u296F',
					rfisht: '\u297D',
					rfloor: '\u230B',
					rfr: '\u{1D52F}',
					Rfr: '\u211C',
					rHar: '\u2964',
					rhard: '\u21C1',
					rharu: '\u21C0',
					rharul: '\u296C',
					rho: '\u03C1',
					Rho: '\u03A1',
					rhov: '\u03F1',
					RightAngleBracket: '\u27E9',
					rightarrow: '\u2192',
					Rightarrow: '\u21D2',
					RightArrow: '\u2192',
					RightArrowBar: '\u21E5',
					RightArrowLeftArrow: '\u21C4',
					rightarrowtail: '\u21A3',
					RightCeiling: '\u2309',
					RightDoubleBracket: '\u27E7',
					RightDownTeeVector: '\u295D',
					RightDownVector: '\u21C2',
					RightDownVectorBar: '\u2955',
					RightFloor: '\u230B',
					rightharpoondown: '\u21C1',
					rightharpoonup: '\u21C0',
					rightleftarrows: '\u21C4',
					rightleftharpoons: '\u21CC',
					rightrightarrows: '\u21C9',
					rightsquigarrow: '\u219D',
					RightTee: '\u22A2',
					RightTeeArrow: '\u21A6',
					RightTeeVector: '\u295B',
					rightthreetimes: '\u22CC',
					RightTriangle: '\u22B3',
					RightTriangleBar: '\u29D0',
					RightTriangleEqual: '\u22B5',
					RightUpDownVector: '\u294F',
					RightUpTeeVector: '\u295C',
					RightUpVector: '\u21BE',
					RightUpVectorBar: '\u2954',
					RightVector: '\u21C0',
					RightVectorBar: '\u2953',
					ring: '\u02DA',
					risingdotseq: '\u2253',
					rlarr: '\u21C4',
					rlhar: '\u21CC',
					rlm: '\u200F',
					rmoust: '\u23B1',
					rmoustache: '\u23B1',
					rnmid: '\u2AEE',
					roang: '\u27ED',
					roarr: '\u21FE',
					robrk: '\u27E7',
					ropar: '\u2986',
					ropf: '\u{1D563}',
					Ropf: '\u211D',
					roplus: '\u2A2E',
					rotimes: '\u2A35',
					RoundImplies: '\u2970',
					rpar: ')',
					rpargt: '\u2994',
					rppolint: '\u2A12',
					rrarr: '\u21C9',
					Rrightarrow: '\u21DB',
					rsaquo: '\u203A',
					rscr: '\u{1D4C7}',
					Rscr: '\u211B',
					rsh: '\u21B1',
					Rsh: '\u21B1',
					rsqb: ']',
					rsquo: '\u2019',
					rsquor: '\u2019',
					rthree: '\u22CC',
					rtimes: '\u22CA',
					rtri: '\u25B9',
					rtrie: '\u22B5',
					rtrif: '\u25B8',
					rtriltri: '\u29CE',
					RuleDelayed: '\u29F4',
					ruluhar: '\u2968',
					rx: '\u211E',
					sacute: '\u015B',
					Sacute: '\u015A',
					sbquo: '\u201A',
					sc: '\u227B',
					Sc: '\u2ABC',
					scap: '\u2AB8',
					scaron: '\u0161',
					Scaron: '\u0160',
					sccue: '\u227D',
					sce: '\u2AB0',
					scE: '\u2AB4',
					scedil: '\u015F',
					Scedil: '\u015E',
					scirc: '\u015D',
					Scirc: '\u015C',
					scnap: '\u2ABA',
					scnE: '\u2AB6',
					scnsim: '\u22E9',
					scpolint: '\u2A13',
					scsim: '\u227F',
					scy: '\u0441',
					Scy: '\u0421',
					sdot: '\u22C5',
					sdotb: '\u22A1',
					sdote: '\u2A66',
					searhk: '\u2925',
					searr: '\u2198',
					seArr: '\u21D8',
					searrow: '\u2198',
					sect: '\xA7',
					semi: ';',
					seswar: '\u2929',
					setminus: '\u2216',
					setmn: '\u2216',
					sext: '\u2736',
					sfr: '\u{1D530}',
					Sfr: '\u{1D516}',
					sfrown: '\u2322',
					sharp: '\u266F',
					shchcy: '\u0449',
					SHCHcy: '\u0429',
					shcy: '\u0448',
					SHcy: '\u0428',
					ShortDownArrow: '\u2193',
					ShortLeftArrow: '\u2190',
					shortmid: '\u2223',
					shortparallel: '\u2225',
					ShortRightArrow: '\u2192',
					ShortUpArrow: '\u2191',
					shy: '\xAD',
					sigma: '\u03C3',
					Sigma: '\u03A3',
					sigmaf: '\u03C2',
					sigmav: '\u03C2',
					sim: '\u223C',
					simdot: '\u2A6A',
					sime: '\u2243',
					simeq: '\u2243',
					simg: '\u2A9E',
					simgE: '\u2AA0',
					siml: '\u2A9D',
					simlE: '\u2A9F',
					simne: '\u2246',
					simplus: '\u2A24',
					simrarr: '\u2972',
					slarr: '\u2190',
					SmallCircle: '\u2218',
					smallsetminus: '\u2216',
					smashp: '\u2A33',
					smeparsl: '\u29E4',
					smid: '\u2223',
					smile: '\u2323',
					smt: '\u2AAA',
					smte: '\u2AAC',
					smtes: '\u2AAC\uFE00',
					softcy: '\u044C',
					SOFTcy: '\u042C',
					sol: '/',
					solb: '\u29C4',
					solbar: '\u233F',
					sopf: '\u{1D564}',
					Sopf: '\u{1D54A}',
					spades: '\u2660',
					spadesuit: '\u2660',
					spar: '\u2225',
					sqcap: '\u2293',
					sqcaps: '\u2293\uFE00',
					sqcup: '\u2294',
					sqcups: '\u2294\uFE00',
					Sqrt: '\u221A',
					sqsub: '\u228F',
					sqsube: '\u2291',
					sqsubset: '\u228F',
					sqsubseteq: '\u2291',
					sqsup: '\u2290',
					sqsupe: '\u2292',
					sqsupset: '\u2290',
					sqsupseteq: '\u2292',
					squ: '\u25A1',
					square: '\u25A1',
					Square: '\u25A1',
					SquareIntersection: '\u2293',
					SquareSubset: '\u228F',
					SquareSubsetEqual: '\u2291',
					SquareSuperset: '\u2290',
					SquareSupersetEqual: '\u2292',
					SquareUnion: '\u2294',
					squarf: '\u25AA',
					squf: '\u25AA',
					srarr: '\u2192',
					sscr: '\u{1D4C8}',
					Sscr: '\u{1D4AE}',
					ssetmn: '\u2216',
					ssmile: '\u2323',
					sstarf: '\u22C6',
					star: '\u2606',
					Star: '\u22C6',
					starf: '\u2605',
					straightepsilon: '\u03F5',
					straightphi: '\u03D5',
					strns: '\xAF',
					sub: '\u2282',
					Sub: '\u22D0',
					subdot: '\u2ABD',
					sube: '\u2286',
					subE: '\u2AC5',
					subedot: '\u2AC3',
					submult: '\u2AC1',
					subne: '\u228A',
					subnE: '\u2ACB',
					subplus: '\u2ABF',
					subrarr: '\u2979',
					subset: '\u2282',
					Subset: '\u22D0',
					subseteq: '\u2286',
					subseteqq: '\u2AC5',
					SubsetEqual: '\u2286',
					subsetneq: '\u228A',
					subsetneqq: '\u2ACB',
					subsim: '\u2AC7',
					subsub: '\u2AD5',
					subsup: '\u2AD3',
					succ: '\u227B',
					succapprox: '\u2AB8',
					succcurlyeq: '\u227D',
					Succeeds: '\u227B',
					SucceedsEqual: '\u2AB0',
					SucceedsSlantEqual: '\u227D',
					SucceedsTilde: '\u227F',
					succeq: '\u2AB0',
					succnapprox: '\u2ABA',
					succneqq: '\u2AB6',
					succnsim: '\u22E9',
					succsim: '\u227F',
					SuchThat: '\u220B',
					sum: '\u2211',
					Sum: '\u2211',
					sung: '\u266A',
					sup: '\u2283',
					Sup: '\u22D1',
					sup1: '\xB9',
					sup2: '\xB2',
					sup3: '\xB3',
					supdot: '\u2ABE',
					supdsub: '\u2AD8',
					supe: '\u2287',
					supE: '\u2AC6',
					supedot: '\u2AC4',
					Superset: '\u2283',
					SupersetEqual: '\u2287',
					suphsol: '\u27C9',
					suphsub: '\u2AD7',
					suplarr: '\u297B',
					supmult: '\u2AC2',
					supne: '\u228B',
					supnE: '\u2ACC',
					supplus: '\u2AC0',
					supset: '\u2283',
					Supset: '\u22D1',
					supseteq: '\u2287',
					supseteqq: '\u2AC6',
					supsetneq: '\u228B',
					supsetneqq: '\u2ACC',
					supsim: '\u2AC8',
					supsub: '\u2AD4',
					supsup: '\u2AD6',
					swarhk: '\u2926',
					swarr: '\u2199',
					swArr: '\u21D9',
					swarrow: '\u2199',
					swnwar: '\u292A',
					szlig: '\xDF',
					Tab: '	',
					target: '\u2316',
					tau: '\u03C4',
					Tau: '\u03A4',
					tbrk: '\u23B4',
					tcaron: '\u0165',
					Tcaron: '\u0164',
					tcedil: '\u0163',
					Tcedil: '\u0162',
					tcy: '\u0442',
					Tcy: '\u0422',
					tdot: '\u20DB',
					telrec: '\u2315',
					tfr: '\u{1D531}',
					Tfr: '\u{1D517}',
					there4: '\u2234',
					therefore: '\u2234',
					Therefore: '\u2234',
					theta: '\u03B8',
					Theta: '\u0398',
					thetasym: '\u03D1',
					thetav: '\u03D1',
					thickapprox: '\u2248',
					thicksim: '\u223C',
					ThickSpace: '\u205F\u200A',
					thinsp: '\u2009',
					ThinSpace: '\u2009',
					thkap: '\u2248',
					thksim: '\u223C',
					thorn: '\xFE',
					THORN: '\xDE',
					tilde: '\u02DC',
					Tilde: '\u223C',
					TildeEqual: '\u2243',
					TildeFullEqual: '\u2245',
					TildeTilde: '\u2248',
					times: '\xD7',
					timesb: '\u22A0',
					timesbar: '\u2A31',
					timesd: '\u2A30',
					tint: '\u222D',
					toea: '\u2928',
					top: '\u22A4',
					topbot: '\u2336',
					topcir: '\u2AF1',
					topf: '\u{1D565}',
					Topf: '\u{1D54B}',
					topfork: '\u2ADA',
					tosa: '\u2929',
					tprime: '\u2034',
					trade: '\u2122',
					TRADE: '\u2122',
					triangle: '\u25B5',
					triangledown: '\u25BF',
					triangleleft: '\u25C3',
					trianglelefteq: '\u22B4',
					triangleq: '\u225C',
					triangleright: '\u25B9',
					trianglerighteq: '\u22B5',
					tridot: '\u25EC',
					trie: '\u225C',
					triminus: '\u2A3A',
					TripleDot: '\u20DB',
					triplus: '\u2A39',
					trisb: '\u29CD',
					tritime: '\u2A3B',
					trpezium: '\u23E2',
					tscr: '\u{1D4C9}',
					Tscr: '\u{1D4AF}',
					tscy: '\u0446',
					TScy: '\u0426',
					tshcy: '\u045B',
					TSHcy: '\u040B',
					tstrok: '\u0167',
					Tstrok: '\u0166',
					twixt: '\u226C',
					twoheadleftarrow: '\u219E',
					twoheadrightarrow: '\u21A0',
					uacute: '\xFA',
					Uacute: '\xDA',
					uarr: '\u2191',
					uArr: '\u21D1',
					Uarr: '\u219F',
					Uarrocir: '\u2949',
					ubrcy: '\u045E',
					Ubrcy: '\u040E',
					ubreve: '\u016D',
					Ubreve: '\u016C',
					ucirc: '\xFB',
					Ucirc: '\xDB',
					ucy: '\u0443',
					Ucy: '\u0423',
					udarr: '\u21C5',
					udblac: '\u0171',
					Udblac: '\u0170',
					udhar: '\u296E',
					ufisht: '\u297E',
					ufr: '\u{1D532}',
					Ufr: '\u{1D518}',
					ugrave: '\xF9',
					Ugrave: '\xD9',
					uHar: '\u2963',
					uharl: '\u21BF',
					uharr: '\u21BE',
					uhblk: '\u2580',
					ulcorn: '\u231C',
					ulcorner: '\u231C',
					ulcrop: '\u230F',
					ultri: '\u25F8',
					umacr: '\u016B',
					Umacr: '\u016A',
					uml: '\xA8',
					UnderBar: '_',
					UnderBrace: '\u23DF',
					UnderBracket: '\u23B5',
					UnderParenthesis: '\u23DD',
					Union: '\u22C3',
					UnionPlus: '\u228E',
					uogon: '\u0173',
					Uogon: '\u0172',
					uopf: '\u{1D566}',
					Uopf: '\u{1D54C}',
					uparrow: '\u2191',
					Uparrow: '\u21D1',
					UpArrow: '\u2191',
					UpArrowBar: '\u2912',
					UpArrowDownArrow: '\u21C5',
					updownarrow: '\u2195',
					Updownarrow: '\u21D5',
					UpDownArrow: '\u2195',
					UpEquilibrium: '\u296E',
					upharpoonleft: '\u21BF',
					upharpoonright: '\u21BE',
					uplus: '\u228E',
					UpperLeftArrow: '\u2196',
					UpperRightArrow: '\u2197',
					upsi: '\u03C5',
					Upsi: '\u03D2',
					upsih: '\u03D2',
					upsilon: '\u03C5',
					Upsilon: '\u03A5',
					UpTee: '\u22A5',
					UpTeeArrow: '\u21A5',
					upuparrows: '\u21C8',
					urcorn: '\u231D',
					urcorner: '\u231D',
					urcrop: '\u230E',
					uring: '\u016F',
					Uring: '\u016E',
					urtri: '\u25F9',
					uscr: '\u{1D4CA}',
					Uscr: '\u{1D4B0}',
					utdot: '\u22F0',
					utilde: '\u0169',
					Utilde: '\u0168',
					utri: '\u25B5',
					utrif: '\u25B4',
					uuarr: '\u21C8',
					uuml: '\xFC',
					Uuml: '\xDC',
					uwangle: '\u29A7',
					vangrt: '\u299C',
					varepsilon: '\u03F5',
					varkappa: '\u03F0',
					varnothing: '\u2205',
					varphi: '\u03D5',
					varpi: '\u03D6',
					varpropto: '\u221D',
					varr: '\u2195',
					vArr: '\u21D5',
					varrho: '\u03F1',
					varsigma: '\u03C2',
					varsubsetneq: '\u228A\uFE00',
					varsubsetneqq: '\u2ACB\uFE00',
					varsupsetneq: '\u228B\uFE00',
					varsupsetneqq: '\u2ACC\uFE00',
					vartheta: '\u03D1',
					vartriangleleft: '\u22B2',
					vartriangleright: '\u22B3',
					vBar: '\u2AE8',
					Vbar: '\u2AEB',
					vBarv: '\u2AE9',
					vcy: '\u0432',
					Vcy: '\u0412',
					vdash: '\u22A2',
					vDash: '\u22A8',
					Vdash: '\u22A9',
					VDash: '\u22AB',
					Vdashl: '\u2AE6',
					vee: '\u2228',
					Vee: '\u22C1',
					veebar: '\u22BB',
					veeeq: '\u225A',
					vellip: '\u22EE',
					verbar: '|',
					Verbar: '\u2016',
					vert: '|',
					Vert: '\u2016',
					VerticalBar: '\u2223',
					VerticalLine: '|',
					VerticalSeparator: '\u2758',
					VerticalTilde: '\u2240',
					VeryThinSpace: '\u200A',
					vfr: '\u{1D533}',
					Vfr: '\u{1D519}',
					vltri: '\u22B2',
					vnsub: '\u2282\u20D2',
					vnsup: '\u2283\u20D2',
					vopf: '\u{1D567}',
					Vopf: '\u{1D54D}',
					vprop: '\u221D',
					vrtri: '\u22B3',
					vscr: '\u{1D4CB}',
					Vscr: '\u{1D4B1}',
					vsubne: '\u228A\uFE00',
					vsubnE: '\u2ACB\uFE00',
					vsupne: '\u228B\uFE00',
					vsupnE: '\u2ACC\uFE00',
					Vvdash: '\u22AA',
					vzigzag: '\u299A',
					wcirc: '\u0175',
					Wcirc: '\u0174',
					wedbar: '\u2A5F',
					wedge: '\u2227',
					Wedge: '\u22C0',
					wedgeq: '\u2259',
					weierp: '\u2118',
					wfr: '\u{1D534}',
					Wfr: '\u{1D51A}',
					wopf: '\u{1D568}',
					Wopf: '\u{1D54E}',
					wp: '\u2118',
					wr: '\u2240',
					wreath: '\u2240',
					wscr: '\u{1D4CC}',
					Wscr: '\u{1D4B2}',
					xcap: '\u22C2',
					xcirc: '\u25EF',
					xcup: '\u22C3',
					xdtri: '\u25BD',
					xfr: '\u{1D535}',
					Xfr: '\u{1D51B}',
					xharr: '\u27F7',
					xhArr: '\u27FA',
					xi: '\u03BE',
					Xi: '\u039E',
					xlarr: '\u27F5',
					xlArr: '\u27F8',
					xmap: '\u27FC',
					xnis: '\u22FB',
					xodot: '\u2A00',
					xopf: '\u{1D569}',
					Xopf: '\u{1D54F}',
					xoplus: '\u2A01',
					xotime: '\u2A02',
					xrarr: '\u27F6',
					xrArr: '\u27F9',
					xscr: '\u{1D4CD}',
					Xscr: '\u{1D4B3}',
					xsqcup: '\u2A06',
					xuplus: '\u2A04',
					xutri: '\u25B3',
					xvee: '\u22C1',
					xwedge: '\u22C0',
					yacute: '\xFD',
					Yacute: '\xDD',
					yacy: '\u044F',
					YAcy: '\u042F',
					ycirc: '\u0177',
					Ycirc: '\u0176',
					ycy: '\u044B',
					Ycy: '\u042B',
					yen: '\xA5',
					yfr: '\u{1D536}',
					Yfr: '\u{1D51C}',
					yicy: '\u0457',
					YIcy: '\u0407',
					yopf: '\u{1D56A}',
					Yopf: '\u{1D550}',
					yscr: '\u{1D4CE}',
					Yscr: '\u{1D4B4}',
					yucy: '\u044E',
					YUcy: '\u042E',
					yuml: '\xFF',
					Yuml: '\u0178',
					zacute: '\u017A',
					Zacute: '\u0179',
					zcaron: '\u017E',
					Zcaron: '\u017D',
					zcy: '\u0437',
					Zcy: '\u0417',
					zdot: '\u017C',
					Zdot: '\u017B',
					zeetrf: '\u2128',
					ZeroWidthSpace: '\u200B',
					zeta: '\u03B6',
					Zeta: '\u0396',
					zfr: '\u{1D537}',
					Zfr: '\u2128',
					zhcy: '\u0436',
					ZHcy: '\u0416',
					zigrarr: '\u21DD',
					zopf: '\u{1D56B}',
					Zopf: '\u2124',
					zscr: '\u{1D4CF}',
					Zscr: '\u{1D4B5}',
					zwj: '\u200D',
					zwnj: '\u200C',
				},
				C = {
					aacute: '\xE1',
					Aacute: '\xC1',
					acirc: '\xE2',
					Acirc: '\xC2',
					acute: '\xB4',
					aelig: '\xE6',
					AElig: '\xC6',
					agrave: '\xE0',
					Agrave: '\xC0',
					amp: '&',
					AMP: '&',
					aring: '\xE5',
					Aring: '\xC5',
					atilde: '\xE3',
					Atilde: '\xC3',
					auml: '\xE4',
					Auml: '\xC4',
					brvbar: '\xA6',
					ccedil: '\xE7',
					Ccedil: '\xC7',
					cedil: '\xB8',
					cent: '\xA2',
					copy: '\xA9',
					COPY: '\xA9',
					curren: '\xA4',
					deg: '\xB0',
					divide: '\xF7',
					eacute: '\xE9',
					Eacute: '\xC9',
					ecirc: '\xEA',
					Ecirc: '\xCA',
					egrave: '\xE8',
					Egrave: '\xC8',
					eth: '\xF0',
					ETH: '\xD0',
					euml: '\xEB',
					Euml: '\xCB',
					frac12: '\xBD',
					frac14: '\xBC',
					frac34: '\xBE',
					gt: '>',
					GT: '>',
					iacute: '\xED',
					Iacute: '\xCD',
					icirc: '\xEE',
					Icirc: '\xCE',
					iexcl: '\xA1',
					igrave: '\xEC',
					Igrave: '\xCC',
					iquest: '\xBF',
					iuml: '\xEF',
					Iuml: '\xCF',
					laquo: '\xAB',
					lt: '<',
					LT: '<',
					macr: '\xAF',
					micro: '\xB5',
					middot: '\xB7',
					nbsp: '\xA0',
					not: '\xAC',
					ntilde: '\xF1',
					Ntilde: '\xD1',
					oacute: '\xF3',
					Oacute: '\xD3',
					ocirc: '\xF4',
					Ocirc: '\xD4',
					ograve: '\xF2',
					Ograve: '\xD2',
					ordf: '\xAA',
					ordm: '\xBA',
					oslash: '\xF8',
					Oslash: '\xD8',
					otilde: '\xF5',
					Otilde: '\xD5',
					ouml: '\xF6',
					Ouml: '\xD6',
					para: '\xB6',
					plusmn: '\xB1',
					pound: '\xA3',
					quot: '"',
					QUOT: '"',
					raquo: '\xBB',
					reg: '\xAE',
					REG: '\xAE',
					sect: '\xA7',
					shy: '\xAD',
					sup1: '\xB9',
					sup2: '\xB2',
					sup3: '\xB3',
					szlig: '\xDF',
					thorn: '\xFE',
					THORN: '\xDE',
					times: '\xD7',
					uacute: '\xFA',
					Uacute: '\xDA',
					ucirc: '\xFB',
					Ucirc: '\xDB',
					ugrave: '\xF9',
					Ugrave: '\xD9',
					uml: '\xA8',
					uuml: '\xFC',
					Uuml: '\xDC',
					yacute: '\xFD',
					Yacute: '\xDD',
					yen: '\xA5',
					yuml: '\xFF',
				},
				S = {
					0: '\uFFFD',
					128: '\u20AC',
					130: '\u201A',
					131: '\u0192',
					132: '\u201E',
					133: '\u2026',
					134: '\u2020',
					135: '\u2021',
					136: '\u02C6',
					137: '\u2030',
					138: '\u0160',
					139: '\u2039',
					140: '\u0152',
					142: '\u017D',
					145: '\u2018',
					146: '\u2019',
					147: '\u201C',
					148: '\u201D',
					149: '\u2022',
					150: '\u2013',
					151: '\u2014',
					152: '\u02DC',
					153: '\u2122',
					154: '\u0161',
					155: '\u203A',
					156: '\u0153',
					158: '\u017E',
					159: '\u0178',
				},
				E = [
					1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20,
					21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129,
					130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141,
					142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153,
					154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979,
					64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987,
					64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995,
					64996, 64997, 64998, 64999, 65e3, 65001, 65002, 65003,
					65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071,
					196606, 196607, 262142, 262143, 327678, 327679, 393214,
					393215, 458750, 458751, 524286, 524287, 589822, 589823,
					655358, 655359, 720894, 720895, 786430, 786431, 851966,
					851967, 917502, 917503, 983038, 983039, 1048574, 1048575,
					1114110, 1114111,
				],
				X = String.fromCharCode,
				U = {},
				O = U.hasOwnProperty,
				j = function (w, _) {
					return O.call(w, _);
				},
				J = function (w, _) {
					for (var k = -1, V = w.length; ++k < V; )
						if (w[k] == _) return !0;
					return !1;
				},
				d = function (w, _) {
					if (!w) return _;
					var k = {},
						V;
					for (V in _) k[V] = j(w, V) ? w[V] : _[V];
					return k;
				},
				b = function (w, _) {
					var k = '';
					return (w >= 55296 && w <= 57343) || w > 1114111
						? (_ &&
								L(
									'character reference outside the permissible Unicode range'
								),
						  '\uFFFD')
						: j(S, w)
						? (_ && L('disallowed character reference'), S[w])
						: (_ && J(E, w) && L('disallowed character reference'),
						  w > 65535 &&
								((w -= 65536),
								(k += X(((w >>> 10) & 1023) | 55296)),
								(w = 56320 | (w & 1023))),
						  (k += X(w)),
						  k);
				},
				A = function (w) {
					return '&#x' + w.toString(16).toUpperCase() + ';';
				},
				B = function (w) {
					return '&#' + w + ';';
				},
				L = function (w) {
					throw Error('Parse error: ' + w);
				},
				x = function (w, _) {
					_ = d(_, x.options);
					var k = _.strict;
					k && p.test(w) && L('forbidden code point');
					var V = _.encodeEverything,
						oe = _.useNamedReferences,
						R = _.allowUnsafeSymbols,
						P = _.decimal ? B : A,
						G = function (H) {
							return P(H.charCodeAt(0));
						};
					return (
						V
							? ((w = w.replace(c, function (H) {
									return oe && j(i, H)
										? '&' + i[H] + ';'
										: G(H);
							  })),
							  oe &&
									(w = w
										.replace(/&gt;\u20D2/g, '&nvgt;')
										.replace(/&lt;\u20D2/g, '&nvlt;')
										.replace(/&#x66;&#x6A;/g, '&fjlig;')),
							  oe &&
									(w = w.replace(u, function (H) {
										return '&' + i[H] + ';';
									})))
							: oe
							? (R ||
									(w = w.replace(f, function (H) {
										return '&' + i[H] + ';';
									})),
							  (w = w
									.replace(/&gt;\u20D2/g, '&nvgt;')
									.replace(/&lt;\u20D2/g, '&nvlt;')),
							  (w = w.replace(u, function (H) {
									return '&' + i[H] + ';';
							  })))
							: R || (w = w.replace(f, G)),
						w
							.replace(a, function (H) {
								var se = H.charCodeAt(0),
									de = H.charCodeAt(1),
									ae =
										(se - 55296) * 1024 +
										de -
										56320 +
										65536;
								return P(ae);
							})
							.replace(l, G)
					);
				};
			x.options = {
				allowUnsafeSymbols: !1,
				encodeEverything: !1,
				strict: !1,
				useNamedReferences: !1,
				decimal: !1,
			};
			var F = function (w, _) {
				_ = d(_, F.options);
				var k = _.strict;
				return (
					k && g.test(w) && L('malformed character reference'),
					w.replace(D, function (V, oe, R, P, G, H, se, de, ae) {
						var ue, fe, Ae, pe, wt, Et;
						return oe
							? ((wt = oe), y[wt])
							: R
							? ((wt = R),
							  (Et = P),
							  Et && _.isAttributeValue
									? (k &&
											Et == '=' &&
											L(
												'`&` did not start a character reference'
											),
									  V)
									: (k &&
											L(
												'named character reference was not terminated by a semicolon'
											),
									  C[wt] + (Et || '')))
							: G
							? ((Ae = G),
							  (fe = H),
							  k &&
									!fe &&
									L(
										'character reference was not terminated by a semicolon'
									),
							  (ue = parseInt(Ae, 10)),
							  b(ue, k))
							: se
							? ((pe = se),
							  (fe = de),
							  k &&
									!fe &&
									L(
										'character reference was not terminated by a semicolon'
									),
							  (ue = parseInt(pe, 16)),
							  b(ue, k))
							: (k &&
									L(
										'named character reference was not terminated by a semicolon'
									),
							  V);
					})
				);
			};
			F.options = { isAttributeValue: !1, strict: !1 };
			var Y = function (w) {
					return w.replace(f, function (_) {
						return h[_];
					});
				},
				M = {
					version: '1.2.0',
					encode: x,
					decode: F,
					escape: Y,
					unescape: F,
				};
			if (n && !n.nodeType)
				if (o) o.exports = M;
				else for (var T in M) j(M, T) && (n[T] = M[T]);
			else r.he = M;
		})(q);
	})(or, or.exports);
	var mo = {},
		kt = {},
		sr = {},
		ar = {},
		ki = {
			0: 65533,
			128: 8364,
			130: 8218,
			131: 402,
			132: 8222,
			133: 8230,
			134: 8224,
			135: 8225,
			136: 710,
			137: 8240,
			138: 352,
			139: 8249,
			140: 338,
			142: 381,
			145: 8216,
			146: 8217,
			147: 8220,
			148: 8221,
			149: 8226,
			150: 8211,
			151: 8212,
			152: 732,
			153: 8482,
			154: 353,
			155: 8250,
			156: 339,
			158: 382,
			159: 376,
		},
		Li =
			(q && q.__importDefault) ||
			function (e) {
				return e && e.__esModule ? e : { default: e };
			};
	Object.defineProperty(ar, '__esModule', { value: !0 });
	var go = Li(ki),
		Fi =
			String.fromCodePoint ||
			function (e) {
				var t = '';
				return (
					e > 65535 &&
						((e -= 65536),
						(t += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
						(e = 56320 | (e & 1023))),
					(t += String.fromCharCode(e)),
					t
				);
			};
	function _i(e) {
		return (e >= 55296 && e <= 57343) || e > 1114111
			? '\uFFFD'
			: (e in go.default && (e = go.default[e]), Fi(e));
	}
	ar.default = _i;
	var jr = {
			Aacute: '\xC1',
			aacute: '\xE1',
			Abreve: '\u0102',
			abreve: '\u0103',
			ac: '\u223E',
			acd: '\u223F',
			acE: '\u223E\u0333',
			Acirc: '\xC2',
			acirc: '\xE2',
			acute: '\xB4',
			Acy: '\u0410',
			acy: '\u0430',
			AElig: '\xC6',
			aelig: '\xE6',
			af: '\u2061',
			Afr: '\u{1D504}',
			afr: '\u{1D51E}',
			Agrave: '\xC0',
			agrave: '\xE0',
			alefsym: '\u2135',
			aleph: '\u2135',
			Alpha: '\u0391',
			alpha: '\u03B1',
			Amacr: '\u0100',
			amacr: '\u0101',
			amalg: '\u2A3F',
			amp: '&',
			AMP: '&',
			andand: '\u2A55',
			And: '\u2A53',
			and: '\u2227',
			andd: '\u2A5C',
			andslope: '\u2A58',
			andv: '\u2A5A',
			ang: '\u2220',
			ange: '\u29A4',
			angle: '\u2220',
			angmsdaa: '\u29A8',
			angmsdab: '\u29A9',
			angmsdac: '\u29AA',
			angmsdad: '\u29AB',
			angmsdae: '\u29AC',
			angmsdaf: '\u29AD',
			angmsdag: '\u29AE',
			angmsdah: '\u29AF',
			angmsd: '\u2221',
			angrt: '\u221F',
			angrtvb: '\u22BE',
			angrtvbd: '\u299D',
			angsph: '\u2222',
			angst: '\xC5',
			angzarr: '\u237C',
			Aogon: '\u0104',
			aogon: '\u0105',
			Aopf: '\u{1D538}',
			aopf: '\u{1D552}',
			apacir: '\u2A6F',
			ap: '\u2248',
			apE: '\u2A70',
			ape: '\u224A',
			apid: '\u224B',
			apos: "'",
			ApplyFunction: '\u2061',
			approx: '\u2248',
			approxeq: '\u224A',
			Aring: '\xC5',
			aring: '\xE5',
			Ascr: '\u{1D49C}',
			ascr: '\u{1D4B6}',
			Assign: '\u2254',
			ast: '*',
			asymp: '\u2248',
			asympeq: '\u224D',
			Atilde: '\xC3',
			atilde: '\xE3',
			Auml: '\xC4',
			auml: '\xE4',
			awconint: '\u2233',
			awint: '\u2A11',
			backcong: '\u224C',
			backepsilon: '\u03F6',
			backprime: '\u2035',
			backsim: '\u223D',
			backsimeq: '\u22CD',
			Backslash: '\u2216',
			Barv: '\u2AE7',
			barvee: '\u22BD',
			barwed: '\u2305',
			Barwed: '\u2306',
			barwedge: '\u2305',
			bbrk: '\u23B5',
			bbrktbrk: '\u23B6',
			bcong: '\u224C',
			Bcy: '\u0411',
			bcy: '\u0431',
			bdquo: '\u201E',
			becaus: '\u2235',
			because: '\u2235',
			Because: '\u2235',
			bemptyv: '\u29B0',
			bepsi: '\u03F6',
			bernou: '\u212C',
			Bernoullis: '\u212C',
			Beta: '\u0392',
			beta: '\u03B2',
			beth: '\u2136',
			between: '\u226C',
			Bfr: '\u{1D505}',
			bfr: '\u{1D51F}',
			bigcap: '\u22C2',
			bigcirc: '\u25EF',
			bigcup: '\u22C3',
			bigodot: '\u2A00',
			bigoplus: '\u2A01',
			bigotimes: '\u2A02',
			bigsqcup: '\u2A06',
			bigstar: '\u2605',
			bigtriangledown: '\u25BD',
			bigtriangleup: '\u25B3',
			biguplus: '\u2A04',
			bigvee: '\u22C1',
			bigwedge: '\u22C0',
			bkarow: '\u290D',
			blacklozenge: '\u29EB',
			blacksquare: '\u25AA',
			blacktriangle: '\u25B4',
			blacktriangledown: '\u25BE',
			blacktriangleleft: '\u25C2',
			blacktriangleright: '\u25B8',
			blank: '\u2423',
			blk12: '\u2592',
			blk14: '\u2591',
			blk34: '\u2593',
			block: '\u2588',
			bne: '=\u20E5',
			bnequiv: '\u2261\u20E5',
			bNot: '\u2AED',
			bnot: '\u2310',
			Bopf: '\u{1D539}',
			bopf: '\u{1D553}',
			bot: '\u22A5',
			bottom: '\u22A5',
			bowtie: '\u22C8',
			boxbox: '\u29C9',
			boxdl: '\u2510',
			boxdL: '\u2555',
			boxDl: '\u2556',
			boxDL: '\u2557',
			boxdr: '\u250C',
			boxdR: '\u2552',
			boxDr: '\u2553',
			boxDR: '\u2554',
			boxh: '\u2500',
			boxH: '\u2550',
			boxhd: '\u252C',
			boxHd: '\u2564',
			boxhD: '\u2565',
			boxHD: '\u2566',
			boxhu: '\u2534',
			boxHu: '\u2567',
			boxhU: '\u2568',
			boxHU: '\u2569',
			boxminus: '\u229F',
			boxplus: '\u229E',
			boxtimes: '\u22A0',
			boxul: '\u2518',
			boxuL: '\u255B',
			boxUl: '\u255C',
			boxUL: '\u255D',
			boxur: '\u2514',
			boxuR: '\u2558',
			boxUr: '\u2559',
			boxUR: '\u255A',
			boxv: '\u2502',
			boxV: '\u2551',
			boxvh: '\u253C',
			boxvH: '\u256A',
			boxVh: '\u256B',
			boxVH: '\u256C',
			boxvl: '\u2524',
			boxvL: '\u2561',
			boxVl: '\u2562',
			boxVL: '\u2563',
			boxvr: '\u251C',
			boxvR: '\u255E',
			boxVr: '\u255F',
			boxVR: '\u2560',
			bprime: '\u2035',
			breve: '\u02D8',
			Breve: '\u02D8',
			brvbar: '\xA6',
			bscr: '\u{1D4B7}',
			Bscr: '\u212C',
			bsemi: '\u204F',
			bsim: '\u223D',
			bsime: '\u22CD',
			bsolb: '\u29C5',
			bsol: '\\',
			bsolhsub: '\u27C8',
			bull: '\u2022',
			bullet: '\u2022',
			bump: '\u224E',
			bumpE: '\u2AAE',
			bumpe: '\u224F',
			Bumpeq: '\u224E',
			bumpeq: '\u224F',
			Cacute: '\u0106',
			cacute: '\u0107',
			capand: '\u2A44',
			capbrcup: '\u2A49',
			capcap: '\u2A4B',
			cap: '\u2229',
			Cap: '\u22D2',
			capcup: '\u2A47',
			capdot: '\u2A40',
			CapitalDifferentialD: '\u2145',
			caps: '\u2229\uFE00',
			caret: '\u2041',
			caron: '\u02C7',
			Cayleys: '\u212D',
			ccaps: '\u2A4D',
			Ccaron: '\u010C',
			ccaron: '\u010D',
			Ccedil: '\xC7',
			ccedil: '\xE7',
			Ccirc: '\u0108',
			ccirc: '\u0109',
			Cconint: '\u2230',
			ccups: '\u2A4C',
			ccupssm: '\u2A50',
			Cdot: '\u010A',
			cdot: '\u010B',
			cedil: '\xB8',
			Cedilla: '\xB8',
			cemptyv: '\u29B2',
			cent: '\xA2',
			centerdot: '\xB7',
			CenterDot: '\xB7',
			cfr: '\u{1D520}',
			Cfr: '\u212D',
			CHcy: '\u0427',
			chcy: '\u0447',
			check: '\u2713',
			checkmark: '\u2713',
			Chi: '\u03A7',
			chi: '\u03C7',
			circ: '\u02C6',
			circeq: '\u2257',
			circlearrowleft: '\u21BA',
			circlearrowright: '\u21BB',
			circledast: '\u229B',
			circledcirc: '\u229A',
			circleddash: '\u229D',
			CircleDot: '\u2299',
			circledR: '\xAE',
			circledS: '\u24C8',
			CircleMinus: '\u2296',
			CirclePlus: '\u2295',
			CircleTimes: '\u2297',
			cir: '\u25CB',
			cirE: '\u29C3',
			cire: '\u2257',
			cirfnint: '\u2A10',
			cirmid: '\u2AEF',
			cirscir: '\u29C2',
			ClockwiseContourIntegral: '\u2232',
			CloseCurlyDoubleQuote: '\u201D',
			CloseCurlyQuote: '\u2019',
			clubs: '\u2663',
			clubsuit: '\u2663',
			colon: ':',
			Colon: '\u2237',
			Colone: '\u2A74',
			colone: '\u2254',
			coloneq: '\u2254',
			comma: ',',
			commat: '@',
			comp: '\u2201',
			compfn: '\u2218',
			complement: '\u2201',
			complexes: '\u2102',
			cong: '\u2245',
			congdot: '\u2A6D',
			Congruent: '\u2261',
			conint: '\u222E',
			Conint: '\u222F',
			ContourIntegral: '\u222E',
			copf: '\u{1D554}',
			Copf: '\u2102',
			coprod: '\u2210',
			Coproduct: '\u2210',
			copy: '\xA9',
			COPY: '\xA9',
			copysr: '\u2117',
			CounterClockwiseContourIntegral: '\u2233',
			crarr: '\u21B5',
			cross: '\u2717',
			Cross: '\u2A2F',
			Cscr: '\u{1D49E}',
			cscr: '\u{1D4B8}',
			csub: '\u2ACF',
			csube: '\u2AD1',
			csup: '\u2AD0',
			csupe: '\u2AD2',
			ctdot: '\u22EF',
			cudarrl: '\u2938',
			cudarrr: '\u2935',
			cuepr: '\u22DE',
			cuesc: '\u22DF',
			cularr: '\u21B6',
			cularrp: '\u293D',
			cupbrcap: '\u2A48',
			cupcap: '\u2A46',
			CupCap: '\u224D',
			cup: '\u222A',
			Cup: '\u22D3',
			cupcup: '\u2A4A',
			cupdot: '\u228D',
			cupor: '\u2A45',
			cups: '\u222A\uFE00',
			curarr: '\u21B7',
			curarrm: '\u293C',
			curlyeqprec: '\u22DE',
			curlyeqsucc: '\u22DF',
			curlyvee: '\u22CE',
			curlywedge: '\u22CF',
			curren: '\xA4',
			curvearrowleft: '\u21B6',
			curvearrowright: '\u21B7',
			cuvee: '\u22CE',
			cuwed: '\u22CF',
			cwconint: '\u2232',
			cwint: '\u2231',
			cylcty: '\u232D',
			dagger: '\u2020',
			Dagger: '\u2021',
			daleth: '\u2138',
			darr: '\u2193',
			Darr: '\u21A1',
			dArr: '\u21D3',
			dash: '\u2010',
			Dashv: '\u2AE4',
			dashv: '\u22A3',
			dbkarow: '\u290F',
			dblac: '\u02DD',
			Dcaron: '\u010E',
			dcaron: '\u010F',
			Dcy: '\u0414',
			dcy: '\u0434',
			ddagger: '\u2021',
			ddarr: '\u21CA',
			DD: '\u2145',
			dd: '\u2146',
			DDotrahd: '\u2911',
			ddotseq: '\u2A77',
			deg: '\xB0',
			Del: '\u2207',
			Delta: '\u0394',
			delta: '\u03B4',
			demptyv: '\u29B1',
			dfisht: '\u297F',
			Dfr: '\u{1D507}',
			dfr: '\u{1D521}',
			dHar: '\u2965',
			dharl: '\u21C3',
			dharr: '\u21C2',
			DiacriticalAcute: '\xB4',
			DiacriticalDot: '\u02D9',
			DiacriticalDoubleAcute: '\u02DD',
			DiacriticalGrave: '`',
			DiacriticalTilde: '\u02DC',
			diam: '\u22C4',
			diamond: '\u22C4',
			Diamond: '\u22C4',
			diamondsuit: '\u2666',
			diams: '\u2666',
			die: '\xA8',
			DifferentialD: '\u2146',
			digamma: '\u03DD',
			disin: '\u22F2',
			div: '\xF7',
			divide: '\xF7',
			divideontimes: '\u22C7',
			divonx: '\u22C7',
			DJcy: '\u0402',
			djcy: '\u0452',
			dlcorn: '\u231E',
			dlcrop: '\u230D',
			dollar: '$',
			Dopf: '\u{1D53B}',
			dopf: '\u{1D555}',
			Dot: '\xA8',
			dot: '\u02D9',
			DotDot: '\u20DC',
			doteq: '\u2250',
			doteqdot: '\u2251',
			DotEqual: '\u2250',
			dotminus: '\u2238',
			dotplus: '\u2214',
			dotsquare: '\u22A1',
			doublebarwedge: '\u2306',
			DoubleContourIntegral: '\u222F',
			DoubleDot: '\xA8',
			DoubleDownArrow: '\u21D3',
			DoubleLeftArrow: '\u21D0',
			DoubleLeftRightArrow: '\u21D4',
			DoubleLeftTee: '\u2AE4',
			DoubleLongLeftArrow: '\u27F8',
			DoubleLongLeftRightArrow: '\u27FA',
			DoubleLongRightArrow: '\u27F9',
			DoubleRightArrow: '\u21D2',
			DoubleRightTee: '\u22A8',
			DoubleUpArrow: '\u21D1',
			DoubleUpDownArrow: '\u21D5',
			DoubleVerticalBar: '\u2225',
			DownArrowBar: '\u2913',
			downarrow: '\u2193',
			DownArrow: '\u2193',
			Downarrow: '\u21D3',
			DownArrowUpArrow: '\u21F5',
			DownBreve: '\u0311',
			downdownarrows: '\u21CA',
			downharpoonleft: '\u21C3',
			downharpoonright: '\u21C2',
			DownLeftRightVector: '\u2950',
			DownLeftTeeVector: '\u295E',
			DownLeftVectorBar: '\u2956',
			DownLeftVector: '\u21BD',
			DownRightTeeVector: '\u295F',
			DownRightVectorBar: '\u2957',
			DownRightVector: '\u21C1',
			DownTeeArrow: '\u21A7',
			DownTee: '\u22A4',
			drbkarow: '\u2910',
			drcorn: '\u231F',
			drcrop: '\u230C',
			Dscr: '\u{1D49F}',
			dscr: '\u{1D4B9}',
			DScy: '\u0405',
			dscy: '\u0455',
			dsol: '\u29F6',
			Dstrok: '\u0110',
			dstrok: '\u0111',
			dtdot: '\u22F1',
			dtri: '\u25BF',
			dtrif: '\u25BE',
			duarr: '\u21F5',
			duhar: '\u296F',
			dwangle: '\u29A6',
			DZcy: '\u040F',
			dzcy: '\u045F',
			dzigrarr: '\u27FF',
			Eacute: '\xC9',
			eacute: '\xE9',
			easter: '\u2A6E',
			Ecaron: '\u011A',
			ecaron: '\u011B',
			Ecirc: '\xCA',
			ecirc: '\xEA',
			ecir: '\u2256',
			ecolon: '\u2255',
			Ecy: '\u042D',
			ecy: '\u044D',
			eDDot: '\u2A77',
			Edot: '\u0116',
			edot: '\u0117',
			eDot: '\u2251',
			ee: '\u2147',
			efDot: '\u2252',
			Efr: '\u{1D508}',
			efr: '\u{1D522}',
			eg: '\u2A9A',
			Egrave: '\xC8',
			egrave: '\xE8',
			egs: '\u2A96',
			egsdot: '\u2A98',
			el: '\u2A99',
			Element: '\u2208',
			elinters: '\u23E7',
			ell: '\u2113',
			els: '\u2A95',
			elsdot: '\u2A97',
			Emacr: '\u0112',
			emacr: '\u0113',
			empty: '\u2205',
			emptyset: '\u2205',
			EmptySmallSquare: '\u25FB',
			emptyv: '\u2205',
			EmptyVerySmallSquare: '\u25AB',
			emsp13: '\u2004',
			emsp14: '\u2005',
			emsp: '\u2003',
			ENG: '\u014A',
			eng: '\u014B',
			ensp: '\u2002',
			Eogon: '\u0118',
			eogon: '\u0119',
			Eopf: '\u{1D53C}',
			eopf: '\u{1D556}',
			epar: '\u22D5',
			eparsl: '\u29E3',
			eplus: '\u2A71',
			epsi: '\u03B5',
			Epsilon: '\u0395',
			epsilon: '\u03B5',
			epsiv: '\u03F5',
			eqcirc: '\u2256',
			eqcolon: '\u2255',
			eqsim: '\u2242',
			eqslantgtr: '\u2A96',
			eqslantless: '\u2A95',
			Equal: '\u2A75',
			equals: '=',
			EqualTilde: '\u2242',
			equest: '\u225F',
			Equilibrium: '\u21CC',
			equiv: '\u2261',
			equivDD: '\u2A78',
			eqvparsl: '\u29E5',
			erarr: '\u2971',
			erDot: '\u2253',
			escr: '\u212F',
			Escr: '\u2130',
			esdot: '\u2250',
			Esim: '\u2A73',
			esim: '\u2242',
			Eta: '\u0397',
			eta: '\u03B7',
			ETH: '\xD0',
			eth: '\xF0',
			Euml: '\xCB',
			euml: '\xEB',
			euro: '\u20AC',
			excl: '!',
			exist: '\u2203',
			Exists: '\u2203',
			expectation: '\u2130',
			exponentiale: '\u2147',
			ExponentialE: '\u2147',
			fallingdotseq: '\u2252',
			Fcy: '\u0424',
			fcy: '\u0444',
			female: '\u2640',
			ffilig: '\uFB03',
			fflig: '\uFB00',
			ffllig: '\uFB04',
			Ffr: '\u{1D509}',
			ffr: '\u{1D523}',
			filig: '\uFB01',
			FilledSmallSquare: '\u25FC',
			FilledVerySmallSquare: '\u25AA',
			fjlig: 'fj',
			flat: '\u266D',
			fllig: '\uFB02',
			fltns: '\u25B1',
			fnof: '\u0192',
			Fopf: '\u{1D53D}',
			fopf: '\u{1D557}',
			forall: '\u2200',
			ForAll: '\u2200',
			fork: '\u22D4',
			forkv: '\u2AD9',
			Fouriertrf: '\u2131',
			fpartint: '\u2A0D',
			frac12: '\xBD',
			frac13: '\u2153',
			frac14: '\xBC',
			frac15: '\u2155',
			frac16: '\u2159',
			frac18: '\u215B',
			frac23: '\u2154',
			frac25: '\u2156',
			frac34: '\xBE',
			frac35: '\u2157',
			frac38: '\u215C',
			frac45: '\u2158',
			frac56: '\u215A',
			frac58: '\u215D',
			frac78: '\u215E',
			frasl: '\u2044',
			frown: '\u2322',
			fscr: '\u{1D4BB}',
			Fscr: '\u2131',
			gacute: '\u01F5',
			Gamma: '\u0393',
			gamma: '\u03B3',
			Gammad: '\u03DC',
			gammad: '\u03DD',
			gap: '\u2A86',
			Gbreve: '\u011E',
			gbreve: '\u011F',
			Gcedil: '\u0122',
			Gcirc: '\u011C',
			gcirc: '\u011D',
			Gcy: '\u0413',
			gcy: '\u0433',
			Gdot: '\u0120',
			gdot: '\u0121',
			ge: '\u2265',
			gE: '\u2267',
			gEl: '\u2A8C',
			gel: '\u22DB',
			geq: '\u2265',
			geqq: '\u2267',
			geqslant: '\u2A7E',
			gescc: '\u2AA9',
			ges: '\u2A7E',
			gesdot: '\u2A80',
			gesdoto: '\u2A82',
			gesdotol: '\u2A84',
			gesl: '\u22DB\uFE00',
			gesles: '\u2A94',
			Gfr: '\u{1D50A}',
			gfr: '\u{1D524}',
			gg: '\u226B',
			Gg: '\u22D9',
			ggg: '\u22D9',
			gimel: '\u2137',
			GJcy: '\u0403',
			gjcy: '\u0453',
			gla: '\u2AA5',
			gl: '\u2277',
			glE: '\u2A92',
			glj: '\u2AA4',
			gnap: '\u2A8A',
			gnapprox: '\u2A8A',
			gne: '\u2A88',
			gnE: '\u2269',
			gneq: '\u2A88',
			gneqq: '\u2269',
			gnsim: '\u22E7',
			Gopf: '\u{1D53E}',
			gopf: '\u{1D558}',
			grave: '`',
			GreaterEqual: '\u2265',
			GreaterEqualLess: '\u22DB',
			GreaterFullEqual: '\u2267',
			GreaterGreater: '\u2AA2',
			GreaterLess: '\u2277',
			GreaterSlantEqual: '\u2A7E',
			GreaterTilde: '\u2273',
			Gscr: '\u{1D4A2}',
			gscr: '\u210A',
			gsim: '\u2273',
			gsime: '\u2A8E',
			gsiml: '\u2A90',
			gtcc: '\u2AA7',
			gtcir: '\u2A7A',
			gt: '>',
			GT: '>',
			Gt: '\u226B',
			gtdot: '\u22D7',
			gtlPar: '\u2995',
			gtquest: '\u2A7C',
			gtrapprox: '\u2A86',
			gtrarr: '\u2978',
			gtrdot: '\u22D7',
			gtreqless: '\u22DB',
			gtreqqless: '\u2A8C',
			gtrless: '\u2277',
			gtrsim: '\u2273',
			gvertneqq: '\u2269\uFE00',
			gvnE: '\u2269\uFE00',
			Hacek: '\u02C7',
			hairsp: '\u200A',
			half: '\xBD',
			hamilt: '\u210B',
			HARDcy: '\u042A',
			hardcy: '\u044A',
			harrcir: '\u2948',
			harr: '\u2194',
			hArr: '\u21D4',
			harrw: '\u21AD',
			Hat: '^',
			hbar: '\u210F',
			Hcirc: '\u0124',
			hcirc: '\u0125',
			hearts: '\u2665',
			heartsuit: '\u2665',
			hellip: '\u2026',
			hercon: '\u22B9',
			hfr: '\u{1D525}',
			Hfr: '\u210C',
			HilbertSpace: '\u210B',
			hksearow: '\u2925',
			hkswarow: '\u2926',
			hoarr: '\u21FF',
			homtht: '\u223B',
			hookleftarrow: '\u21A9',
			hookrightarrow: '\u21AA',
			hopf: '\u{1D559}',
			Hopf: '\u210D',
			horbar: '\u2015',
			HorizontalLine: '\u2500',
			hscr: '\u{1D4BD}',
			Hscr: '\u210B',
			hslash: '\u210F',
			Hstrok: '\u0126',
			hstrok: '\u0127',
			HumpDownHump: '\u224E',
			HumpEqual: '\u224F',
			hybull: '\u2043',
			hyphen: '\u2010',
			Iacute: '\xCD',
			iacute: '\xED',
			ic: '\u2063',
			Icirc: '\xCE',
			icirc: '\xEE',
			Icy: '\u0418',
			icy: '\u0438',
			Idot: '\u0130',
			IEcy: '\u0415',
			iecy: '\u0435',
			iexcl: '\xA1',
			iff: '\u21D4',
			ifr: '\u{1D526}',
			Ifr: '\u2111',
			Igrave: '\xCC',
			igrave: '\xEC',
			ii: '\u2148',
			iiiint: '\u2A0C',
			iiint: '\u222D',
			iinfin: '\u29DC',
			iiota: '\u2129',
			IJlig: '\u0132',
			ijlig: '\u0133',
			Imacr: '\u012A',
			imacr: '\u012B',
			image: '\u2111',
			ImaginaryI: '\u2148',
			imagline: '\u2110',
			imagpart: '\u2111',
			imath: '\u0131',
			Im: '\u2111',
			imof: '\u22B7',
			imped: '\u01B5',
			Implies: '\u21D2',
			incare: '\u2105',
			in: '\u2208',
			infin: '\u221E',
			infintie: '\u29DD',
			inodot: '\u0131',
			intcal: '\u22BA',
			int: '\u222B',
			Int: '\u222C',
			integers: '\u2124',
			Integral: '\u222B',
			intercal: '\u22BA',
			Intersection: '\u22C2',
			intlarhk: '\u2A17',
			intprod: '\u2A3C',
			InvisibleComma: '\u2063',
			InvisibleTimes: '\u2062',
			IOcy: '\u0401',
			iocy: '\u0451',
			Iogon: '\u012E',
			iogon: '\u012F',
			Iopf: '\u{1D540}',
			iopf: '\u{1D55A}',
			Iota: '\u0399',
			iota: '\u03B9',
			iprod: '\u2A3C',
			iquest: '\xBF',
			iscr: '\u{1D4BE}',
			Iscr: '\u2110',
			isin: '\u2208',
			isindot: '\u22F5',
			isinE: '\u22F9',
			isins: '\u22F4',
			isinsv: '\u22F3',
			isinv: '\u2208',
			it: '\u2062',
			Itilde: '\u0128',
			itilde: '\u0129',
			Iukcy: '\u0406',
			iukcy: '\u0456',
			Iuml: '\xCF',
			iuml: '\xEF',
			Jcirc: '\u0134',
			jcirc: '\u0135',
			Jcy: '\u0419',
			jcy: '\u0439',
			Jfr: '\u{1D50D}',
			jfr: '\u{1D527}',
			jmath: '\u0237',
			Jopf: '\u{1D541}',
			jopf: '\u{1D55B}',
			Jscr: '\u{1D4A5}',
			jscr: '\u{1D4BF}',
			Jsercy: '\u0408',
			jsercy: '\u0458',
			Jukcy: '\u0404',
			jukcy: '\u0454',
			Kappa: '\u039A',
			kappa: '\u03BA',
			kappav: '\u03F0',
			Kcedil: '\u0136',
			kcedil: '\u0137',
			Kcy: '\u041A',
			kcy: '\u043A',
			Kfr: '\u{1D50E}',
			kfr: '\u{1D528}',
			kgreen: '\u0138',
			KHcy: '\u0425',
			khcy: '\u0445',
			KJcy: '\u040C',
			kjcy: '\u045C',
			Kopf: '\u{1D542}',
			kopf: '\u{1D55C}',
			Kscr: '\u{1D4A6}',
			kscr: '\u{1D4C0}',
			lAarr: '\u21DA',
			Lacute: '\u0139',
			lacute: '\u013A',
			laemptyv: '\u29B4',
			lagran: '\u2112',
			Lambda: '\u039B',
			lambda: '\u03BB',
			lang: '\u27E8',
			Lang: '\u27EA',
			langd: '\u2991',
			langle: '\u27E8',
			lap: '\u2A85',
			Laplacetrf: '\u2112',
			laquo: '\xAB',
			larrb: '\u21E4',
			larrbfs: '\u291F',
			larr: '\u2190',
			Larr: '\u219E',
			lArr: '\u21D0',
			larrfs: '\u291D',
			larrhk: '\u21A9',
			larrlp: '\u21AB',
			larrpl: '\u2939',
			larrsim: '\u2973',
			larrtl: '\u21A2',
			latail: '\u2919',
			lAtail: '\u291B',
			lat: '\u2AAB',
			late: '\u2AAD',
			lates: '\u2AAD\uFE00',
			lbarr: '\u290C',
			lBarr: '\u290E',
			lbbrk: '\u2772',
			lbrace: '{',
			lbrack: '[',
			lbrke: '\u298B',
			lbrksld: '\u298F',
			lbrkslu: '\u298D',
			Lcaron: '\u013D',
			lcaron: '\u013E',
			Lcedil: '\u013B',
			lcedil: '\u013C',
			lceil: '\u2308',
			lcub: '{',
			Lcy: '\u041B',
			lcy: '\u043B',
			ldca: '\u2936',
			ldquo: '\u201C',
			ldquor: '\u201E',
			ldrdhar: '\u2967',
			ldrushar: '\u294B',
			ldsh: '\u21B2',
			le: '\u2264',
			lE: '\u2266',
			LeftAngleBracket: '\u27E8',
			LeftArrowBar: '\u21E4',
			leftarrow: '\u2190',
			LeftArrow: '\u2190',
			Leftarrow: '\u21D0',
			LeftArrowRightArrow: '\u21C6',
			leftarrowtail: '\u21A2',
			LeftCeiling: '\u2308',
			LeftDoubleBracket: '\u27E6',
			LeftDownTeeVector: '\u2961',
			LeftDownVectorBar: '\u2959',
			LeftDownVector: '\u21C3',
			LeftFloor: '\u230A',
			leftharpoondown: '\u21BD',
			leftharpoonup: '\u21BC',
			leftleftarrows: '\u21C7',
			leftrightarrow: '\u2194',
			LeftRightArrow: '\u2194',
			Leftrightarrow: '\u21D4',
			leftrightarrows: '\u21C6',
			leftrightharpoons: '\u21CB',
			leftrightsquigarrow: '\u21AD',
			LeftRightVector: '\u294E',
			LeftTeeArrow: '\u21A4',
			LeftTee: '\u22A3',
			LeftTeeVector: '\u295A',
			leftthreetimes: '\u22CB',
			LeftTriangleBar: '\u29CF',
			LeftTriangle: '\u22B2',
			LeftTriangleEqual: '\u22B4',
			LeftUpDownVector: '\u2951',
			LeftUpTeeVector: '\u2960',
			LeftUpVectorBar: '\u2958',
			LeftUpVector: '\u21BF',
			LeftVectorBar: '\u2952',
			LeftVector: '\u21BC',
			lEg: '\u2A8B',
			leg: '\u22DA',
			leq: '\u2264',
			leqq: '\u2266',
			leqslant: '\u2A7D',
			lescc: '\u2AA8',
			les: '\u2A7D',
			lesdot: '\u2A7F',
			lesdoto: '\u2A81',
			lesdotor: '\u2A83',
			lesg: '\u22DA\uFE00',
			lesges: '\u2A93',
			lessapprox: '\u2A85',
			lessdot: '\u22D6',
			lesseqgtr: '\u22DA',
			lesseqqgtr: '\u2A8B',
			LessEqualGreater: '\u22DA',
			LessFullEqual: '\u2266',
			LessGreater: '\u2276',
			lessgtr: '\u2276',
			LessLess: '\u2AA1',
			lesssim: '\u2272',
			LessSlantEqual: '\u2A7D',
			LessTilde: '\u2272',
			lfisht: '\u297C',
			lfloor: '\u230A',
			Lfr: '\u{1D50F}',
			lfr: '\u{1D529}',
			lg: '\u2276',
			lgE: '\u2A91',
			lHar: '\u2962',
			lhard: '\u21BD',
			lharu: '\u21BC',
			lharul: '\u296A',
			lhblk: '\u2584',
			LJcy: '\u0409',
			ljcy: '\u0459',
			llarr: '\u21C7',
			ll: '\u226A',
			Ll: '\u22D8',
			llcorner: '\u231E',
			Lleftarrow: '\u21DA',
			llhard: '\u296B',
			lltri: '\u25FA',
			Lmidot: '\u013F',
			lmidot: '\u0140',
			lmoustache: '\u23B0',
			lmoust: '\u23B0',
			lnap: '\u2A89',
			lnapprox: '\u2A89',
			lne: '\u2A87',
			lnE: '\u2268',
			lneq: '\u2A87',
			lneqq: '\u2268',
			lnsim: '\u22E6',
			loang: '\u27EC',
			loarr: '\u21FD',
			lobrk: '\u27E6',
			longleftarrow: '\u27F5',
			LongLeftArrow: '\u27F5',
			Longleftarrow: '\u27F8',
			longleftrightarrow: '\u27F7',
			LongLeftRightArrow: '\u27F7',
			Longleftrightarrow: '\u27FA',
			longmapsto: '\u27FC',
			longrightarrow: '\u27F6',
			LongRightArrow: '\u27F6',
			Longrightarrow: '\u27F9',
			looparrowleft: '\u21AB',
			looparrowright: '\u21AC',
			lopar: '\u2985',
			Lopf: '\u{1D543}',
			lopf: '\u{1D55D}',
			loplus: '\u2A2D',
			lotimes: '\u2A34',
			lowast: '\u2217',
			lowbar: '_',
			LowerLeftArrow: '\u2199',
			LowerRightArrow: '\u2198',
			loz: '\u25CA',
			lozenge: '\u25CA',
			lozf: '\u29EB',
			lpar: '(',
			lparlt: '\u2993',
			lrarr: '\u21C6',
			lrcorner: '\u231F',
			lrhar: '\u21CB',
			lrhard: '\u296D',
			lrm: '\u200E',
			lrtri: '\u22BF',
			lsaquo: '\u2039',
			lscr: '\u{1D4C1}',
			Lscr: '\u2112',
			lsh: '\u21B0',
			Lsh: '\u21B0',
			lsim: '\u2272',
			lsime: '\u2A8D',
			lsimg: '\u2A8F',
			lsqb: '[',
			lsquo: '\u2018',
			lsquor: '\u201A',
			Lstrok: '\u0141',
			lstrok: '\u0142',
			ltcc: '\u2AA6',
			ltcir: '\u2A79',
			lt: '<',
			LT: '<',
			Lt: '\u226A',
			ltdot: '\u22D6',
			lthree: '\u22CB',
			ltimes: '\u22C9',
			ltlarr: '\u2976',
			ltquest: '\u2A7B',
			ltri: '\u25C3',
			ltrie: '\u22B4',
			ltrif: '\u25C2',
			ltrPar: '\u2996',
			lurdshar: '\u294A',
			luruhar: '\u2966',
			lvertneqq: '\u2268\uFE00',
			lvnE: '\u2268\uFE00',
			macr: '\xAF',
			male: '\u2642',
			malt: '\u2720',
			maltese: '\u2720',
			Map: '\u2905',
			map: '\u21A6',
			mapsto: '\u21A6',
			mapstodown: '\u21A7',
			mapstoleft: '\u21A4',
			mapstoup: '\u21A5',
			marker: '\u25AE',
			mcomma: '\u2A29',
			Mcy: '\u041C',
			mcy: '\u043C',
			mdash: '\u2014',
			mDDot: '\u223A',
			measuredangle: '\u2221',
			MediumSpace: '\u205F',
			Mellintrf: '\u2133',
			Mfr: '\u{1D510}',
			mfr: '\u{1D52A}',
			mho: '\u2127',
			micro: '\xB5',
			midast: '*',
			midcir: '\u2AF0',
			mid: '\u2223',
			middot: '\xB7',
			minusb: '\u229F',
			minus: '\u2212',
			minusd: '\u2238',
			minusdu: '\u2A2A',
			MinusPlus: '\u2213',
			mlcp: '\u2ADB',
			mldr: '\u2026',
			mnplus: '\u2213',
			models: '\u22A7',
			Mopf: '\u{1D544}',
			mopf: '\u{1D55E}',
			mp: '\u2213',
			mscr: '\u{1D4C2}',
			Mscr: '\u2133',
			mstpos: '\u223E',
			Mu: '\u039C',
			mu: '\u03BC',
			multimap: '\u22B8',
			mumap: '\u22B8',
			nabla: '\u2207',
			Nacute: '\u0143',
			nacute: '\u0144',
			nang: '\u2220\u20D2',
			nap: '\u2249',
			napE: '\u2A70\u0338',
			napid: '\u224B\u0338',
			napos: '\u0149',
			napprox: '\u2249',
			natural: '\u266E',
			naturals: '\u2115',
			natur: '\u266E',
			nbsp: '\xA0',
			nbump: '\u224E\u0338',
			nbumpe: '\u224F\u0338',
			ncap: '\u2A43',
			Ncaron: '\u0147',
			ncaron: '\u0148',
			Ncedil: '\u0145',
			ncedil: '\u0146',
			ncong: '\u2247',
			ncongdot: '\u2A6D\u0338',
			ncup: '\u2A42',
			Ncy: '\u041D',
			ncy: '\u043D',
			ndash: '\u2013',
			nearhk: '\u2924',
			nearr: '\u2197',
			neArr: '\u21D7',
			nearrow: '\u2197',
			ne: '\u2260',
			nedot: '\u2250\u0338',
			NegativeMediumSpace: '\u200B',
			NegativeThickSpace: '\u200B',
			NegativeThinSpace: '\u200B',
			NegativeVeryThinSpace: '\u200B',
			nequiv: '\u2262',
			nesear: '\u2928',
			nesim: '\u2242\u0338',
			NestedGreaterGreater: '\u226B',
			NestedLessLess: '\u226A',
			NewLine: `
`,
			nexist: '\u2204',
			nexists: '\u2204',
			Nfr: '\u{1D511}',
			nfr: '\u{1D52B}',
			ngE: '\u2267\u0338',
			nge: '\u2271',
			ngeq: '\u2271',
			ngeqq: '\u2267\u0338',
			ngeqslant: '\u2A7E\u0338',
			nges: '\u2A7E\u0338',
			nGg: '\u22D9\u0338',
			ngsim: '\u2275',
			nGt: '\u226B\u20D2',
			ngt: '\u226F',
			ngtr: '\u226F',
			nGtv: '\u226B\u0338',
			nharr: '\u21AE',
			nhArr: '\u21CE',
			nhpar: '\u2AF2',
			ni: '\u220B',
			nis: '\u22FC',
			nisd: '\u22FA',
			niv: '\u220B',
			NJcy: '\u040A',
			njcy: '\u045A',
			nlarr: '\u219A',
			nlArr: '\u21CD',
			nldr: '\u2025',
			nlE: '\u2266\u0338',
			nle: '\u2270',
			nleftarrow: '\u219A',
			nLeftarrow: '\u21CD',
			nleftrightarrow: '\u21AE',
			nLeftrightarrow: '\u21CE',
			nleq: '\u2270',
			nleqq: '\u2266\u0338',
			nleqslant: '\u2A7D\u0338',
			nles: '\u2A7D\u0338',
			nless: '\u226E',
			nLl: '\u22D8\u0338',
			nlsim: '\u2274',
			nLt: '\u226A\u20D2',
			nlt: '\u226E',
			nltri: '\u22EA',
			nltrie: '\u22EC',
			nLtv: '\u226A\u0338',
			nmid: '\u2224',
			NoBreak: '\u2060',
			NonBreakingSpace: '\xA0',
			nopf: '\u{1D55F}',
			Nopf: '\u2115',
			Not: '\u2AEC',
			not: '\xAC',
			NotCongruent: '\u2262',
			NotCupCap: '\u226D',
			NotDoubleVerticalBar: '\u2226',
			NotElement: '\u2209',
			NotEqual: '\u2260',
			NotEqualTilde: '\u2242\u0338',
			NotExists: '\u2204',
			NotGreater: '\u226F',
			NotGreaterEqual: '\u2271',
			NotGreaterFullEqual: '\u2267\u0338',
			NotGreaterGreater: '\u226B\u0338',
			NotGreaterLess: '\u2279',
			NotGreaterSlantEqual: '\u2A7E\u0338',
			NotGreaterTilde: '\u2275',
			NotHumpDownHump: '\u224E\u0338',
			NotHumpEqual: '\u224F\u0338',
			notin: '\u2209',
			notindot: '\u22F5\u0338',
			notinE: '\u22F9\u0338',
			notinva: '\u2209',
			notinvb: '\u22F7',
			notinvc: '\u22F6',
			NotLeftTriangleBar: '\u29CF\u0338',
			NotLeftTriangle: '\u22EA',
			NotLeftTriangleEqual: '\u22EC',
			NotLess: '\u226E',
			NotLessEqual: '\u2270',
			NotLessGreater: '\u2278',
			NotLessLess: '\u226A\u0338',
			NotLessSlantEqual: '\u2A7D\u0338',
			NotLessTilde: '\u2274',
			NotNestedGreaterGreater: '\u2AA2\u0338',
			NotNestedLessLess: '\u2AA1\u0338',
			notni: '\u220C',
			notniva: '\u220C',
			notnivb: '\u22FE',
			notnivc: '\u22FD',
			NotPrecedes: '\u2280',
			NotPrecedesEqual: '\u2AAF\u0338',
			NotPrecedesSlantEqual: '\u22E0',
			NotReverseElement: '\u220C',
			NotRightTriangleBar: '\u29D0\u0338',
			NotRightTriangle: '\u22EB',
			NotRightTriangleEqual: '\u22ED',
			NotSquareSubset: '\u228F\u0338',
			NotSquareSubsetEqual: '\u22E2',
			NotSquareSuperset: '\u2290\u0338',
			NotSquareSupersetEqual: '\u22E3',
			NotSubset: '\u2282\u20D2',
			NotSubsetEqual: '\u2288',
			NotSucceeds: '\u2281',
			NotSucceedsEqual: '\u2AB0\u0338',
			NotSucceedsSlantEqual: '\u22E1',
			NotSucceedsTilde: '\u227F\u0338',
			NotSuperset: '\u2283\u20D2',
			NotSupersetEqual: '\u2289',
			NotTilde: '\u2241',
			NotTildeEqual: '\u2244',
			NotTildeFullEqual: '\u2247',
			NotTildeTilde: '\u2249',
			NotVerticalBar: '\u2224',
			nparallel: '\u2226',
			npar: '\u2226',
			nparsl: '\u2AFD\u20E5',
			npart: '\u2202\u0338',
			npolint: '\u2A14',
			npr: '\u2280',
			nprcue: '\u22E0',
			nprec: '\u2280',
			npreceq: '\u2AAF\u0338',
			npre: '\u2AAF\u0338',
			nrarrc: '\u2933\u0338',
			nrarr: '\u219B',
			nrArr: '\u21CF',
			nrarrw: '\u219D\u0338',
			nrightarrow: '\u219B',
			nRightarrow: '\u21CF',
			nrtri: '\u22EB',
			nrtrie: '\u22ED',
			nsc: '\u2281',
			nsccue: '\u22E1',
			nsce: '\u2AB0\u0338',
			Nscr: '\u{1D4A9}',
			nscr: '\u{1D4C3}',
			nshortmid: '\u2224',
			nshortparallel: '\u2226',
			nsim: '\u2241',
			nsime: '\u2244',
			nsimeq: '\u2244',
			nsmid: '\u2224',
			nspar: '\u2226',
			nsqsube: '\u22E2',
			nsqsupe: '\u22E3',
			nsub: '\u2284',
			nsubE: '\u2AC5\u0338',
			nsube: '\u2288',
			nsubset: '\u2282\u20D2',
			nsubseteq: '\u2288',
			nsubseteqq: '\u2AC5\u0338',
			nsucc: '\u2281',
			nsucceq: '\u2AB0\u0338',
			nsup: '\u2285',
			nsupE: '\u2AC6\u0338',
			nsupe: '\u2289',
			nsupset: '\u2283\u20D2',
			nsupseteq: '\u2289',
			nsupseteqq: '\u2AC6\u0338',
			ntgl: '\u2279',
			Ntilde: '\xD1',
			ntilde: '\xF1',
			ntlg: '\u2278',
			ntriangleleft: '\u22EA',
			ntrianglelefteq: '\u22EC',
			ntriangleright: '\u22EB',
			ntrianglerighteq: '\u22ED',
			Nu: '\u039D',
			nu: '\u03BD',
			num: '#',
			numero: '\u2116',
			numsp: '\u2007',
			nvap: '\u224D\u20D2',
			nvdash: '\u22AC',
			nvDash: '\u22AD',
			nVdash: '\u22AE',
			nVDash: '\u22AF',
			nvge: '\u2265\u20D2',
			nvgt: '>\u20D2',
			nvHarr: '\u2904',
			nvinfin: '\u29DE',
			nvlArr: '\u2902',
			nvle: '\u2264\u20D2',
			nvlt: '<\u20D2',
			nvltrie: '\u22B4\u20D2',
			nvrArr: '\u2903',
			nvrtrie: '\u22B5\u20D2',
			nvsim: '\u223C\u20D2',
			nwarhk: '\u2923',
			nwarr: '\u2196',
			nwArr: '\u21D6',
			nwarrow: '\u2196',
			nwnear: '\u2927',
			Oacute: '\xD3',
			oacute: '\xF3',
			oast: '\u229B',
			Ocirc: '\xD4',
			ocirc: '\xF4',
			ocir: '\u229A',
			Ocy: '\u041E',
			ocy: '\u043E',
			odash: '\u229D',
			Odblac: '\u0150',
			odblac: '\u0151',
			odiv: '\u2A38',
			odot: '\u2299',
			odsold: '\u29BC',
			OElig: '\u0152',
			oelig: '\u0153',
			ofcir: '\u29BF',
			Ofr: '\u{1D512}',
			ofr: '\u{1D52C}',
			ogon: '\u02DB',
			Ograve: '\xD2',
			ograve: '\xF2',
			ogt: '\u29C1',
			ohbar: '\u29B5',
			ohm: '\u03A9',
			oint: '\u222E',
			olarr: '\u21BA',
			olcir: '\u29BE',
			olcross: '\u29BB',
			oline: '\u203E',
			olt: '\u29C0',
			Omacr: '\u014C',
			omacr: '\u014D',
			Omega: '\u03A9',
			omega: '\u03C9',
			Omicron: '\u039F',
			omicron: '\u03BF',
			omid: '\u29B6',
			ominus: '\u2296',
			Oopf: '\u{1D546}',
			oopf: '\u{1D560}',
			opar: '\u29B7',
			OpenCurlyDoubleQuote: '\u201C',
			OpenCurlyQuote: '\u2018',
			operp: '\u29B9',
			oplus: '\u2295',
			orarr: '\u21BB',
			Or: '\u2A54',
			or: '\u2228',
			ord: '\u2A5D',
			order: '\u2134',
			orderof: '\u2134',
			ordf: '\xAA',
			ordm: '\xBA',
			origof: '\u22B6',
			oror: '\u2A56',
			orslope: '\u2A57',
			orv: '\u2A5B',
			oS: '\u24C8',
			Oscr: '\u{1D4AA}',
			oscr: '\u2134',
			Oslash: '\xD8',
			oslash: '\xF8',
			osol: '\u2298',
			Otilde: '\xD5',
			otilde: '\xF5',
			otimesas: '\u2A36',
			Otimes: '\u2A37',
			otimes: '\u2297',
			Ouml: '\xD6',
			ouml: '\xF6',
			ovbar: '\u233D',
			OverBar: '\u203E',
			OverBrace: '\u23DE',
			OverBracket: '\u23B4',
			OverParenthesis: '\u23DC',
			para: '\xB6',
			parallel: '\u2225',
			par: '\u2225',
			parsim: '\u2AF3',
			parsl: '\u2AFD',
			part: '\u2202',
			PartialD: '\u2202',
			Pcy: '\u041F',
			pcy: '\u043F',
			percnt: '%',
			period: '.',
			permil: '\u2030',
			perp: '\u22A5',
			pertenk: '\u2031',
			Pfr: '\u{1D513}',
			pfr: '\u{1D52D}',
			Phi: '\u03A6',
			phi: '\u03C6',
			phiv: '\u03D5',
			phmmat: '\u2133',
			phone: '\u260E',
			Pi: '\u03A0',
			pi: '\u03C0',
			pitchfork: '\u22D4',
			piv: '\u03D6',
			planck: '\u210F',
			planckh: '\u210E',
			plankv: '\u210F',
			plusacir: '\u2A23',
			plusb: '\u229E',
			pluscir: '\u2A22',
			plus: '+',
			plusdo: '\u2214',
			plusdu: '\u2A25',
			pluse: '\u2A72',
			PlusMinus: '\xB1',
			plusmn: '\xB1',
			plussim: '\u2A26',
			plustwo: '\u2A27',
			pm: '\xB1',
			Poincareplane: '\u210C',
			pointint: '\u2A15',
			popf: '\u{1D561}',
			Popf: '\u2119',
			pound: '\xA3',
			prap: '\u2AB7',
			Pr: '\u2ABB',
			pr: '\u227A',
			prcue: '\u227C',
			precapprox: '\u2AB7',
			prec: '\u227A',
			preccurlyeq: '\u227C',
			Precedes: '\u227A',
			PrecedesEqual: '\u2AAF',
			PrecedesSlantEqual: '\u227C',
			PrecedesTilde: '\u227E',
			preceq: '\u2AAF',
			precnapprox: '\u2AB9',
			precneqq: '\u2AB5',
			precnsim: '\u22E8',
			pre: '\u2AAF',
			prE: '\u2AB3',
			precsim: '\u227E',
			prime: '\u2032',
			Prime: '\u2033',
			primes: '\u2119',
			prnap: '\u2AB9',
			prnE: '\u2AB5',
			prnsim: '\u22E8',
			prod: '\u220F',
			Product: '\u220F',
			profalar: '\u232E',
			profline: '\u2312',
			profsurf: '\u2313',
			prop: '\u221D',
			Proportional: '\u221D',
			Proportion: '\u2237',
			propto: '\u221D',
			prsim: '\u227E',
			prurel: '\u22B0',
			Pscr: '\u{1D4AB}',
			pscr: '\u{1D4C5}',
			Psi: '\u03A8',
			psi: '\u03C8',
			puncsp: '\u2008',
			Qfr: '\u{1D514}',
			qfr: '\u{1D52E}',
			qint: '\u2A0C',
			qopf: '\u{1D562}',
			Qopf: '\u211A',
			qprime: '\u2057',
			Qscr: '\u{1D4AC}',
			qscr: '\u{1D4C6}',
			quaternions: '\u210D',
			quatint: '\u2A16',
			quest: '?',
			questeq: '\u225F',
			quot: '"',
			QUOT: '"',
			rAarr: '\u21DB',
			race: '\u223D\u0331',
			Racute: '\u0154',
			racute: '\u0155',
			radic: '\u221A',
			raemptyv: '\u29B3',
			rang: '\u27E9',
			Rang: '\u27EB',
			rangd: '\u2992',
			range: '\u29A5',
			rangle: '\u27E9',
			raquo: '\xBB',
			rarrap: '\u2975',
			rarrb: '\u21E5',
			rarrbfs: '\u2920',
			rarrc: '\u2933',
			rarr: '\u2192',
			Rarr: '\u21A0',
			rArr: '\u21D2',
			rarrfs: '\u291E',
			rarrhk: '\u21AA',
			rarrlp: '\u21AC',
			rarrpl: '\u2945',
			rarrsim: '\u2974',
			Rarrtl: '\u2916',
			rarrtl: '\u21A3',
			rarrw: '\u219D',
			ratail: '\u291A',
			rAtail: '\u291C',
			ratio: '\u2236',
			rationals: '\u211A',
			rbarr: '\u290D',
			rBarr: '\u290F',
			RBarr: '\u2910',
			rbbrk: '\u2773',
			rbrace: '}',
			rbrack: ']',
			rbrke: '\u298C',
			rbrksld: '\u298E',
			rbrkslu: '\u2990',
			Rcaron: '\u0158',
			rcaron: '\u0159',
			Rcedil: '\u0156',
			rcedil: '\u0157',
			rceil: '\u2309',
			rcub: '}',
			Rcy: '\u0420',
			rcy: '\u0440',
			rdca: '\u2937',
			rdldhar: '\u2969',
			rdquo: '\u201D',
			rdquor: '\u201D',
			rdsh: '\u21B3',
			real: '\u211C',
			realine: '\u211B',
			realpart: '\u211C',
			reals: '\u211D',
			Re: '\u211C',
			rect: '\u25AD',
			reg: '\xAE',
			REG: '\xAE',
			ReverseElement: '\u220B',
			ReverseEquilibrium: '\u21CB',
			ReverseUpEquilibrium: '\u296F',
			rfisht: '\u297D',
			rfloor: '\u230B',
			rfr: '\u{1D52F}',
			Rfr: '\u211C',
			rHar: '\u2964',
			rhard: '\u21C1',
			rharu: '\u21C0',
			rharul: '\u296C',
			Rho: '\u03A1',
			rho: '\u03C1',
			rhov: '\u03F1',
			RightAngleBracket: '\u27E9',
			RightArrowBar: '\u21E5',
			rightarrow: '\u2192',
			RightArrow: '\u2192',
			Rightarrow: '\u21D2',
			RightArrowLeftArrow: '\u21C4',
			rightarrowtail: '\u21A3',
			RightCeiling: '\u2309',
			RightDoubleBracket: '\u27E7',
			RightDownTeeVector: '\u295D',
			RightDownVectorBar: '\u2955',
			RightDownVector: '\u21C2',
			RightFloor: '\u230B',
			rightharpoondown: '\u21C1',
			rightharpoonup: '\u21C0',
			rightleftarrows: '\u21C4',
			rightleftharpoons: '\u21CC',
			rightrightarrows: '\u21C9',
			rightsquigarrow: '\u219D',
			RightTeeArrow: '\u21A6',
			RightTee: '\u22A2',
			RightTeeVector: '\u295B',
			rightthreetimes: '\u22CC',
			RightTriangleBar: '\u29D0',
			RightTriangle: '\u22B3',
			RightTriangleEqual: '\u22B5',
			RightUpDownVector: '\u294F',
			RightUpTeeVector: '\u295C',
			RightUpVectorBar: '\u2954',
			RightUpVector: '\u21BE',
			RightVectorBar: '\u2953',
			RightVector: '\u21C0',
			ring: '\u02DA',
			risingdotseq: '\u2253',
			rlarr: '\u21C4',
			rlhar: '\u21CC',
			rlm: '\u200F',
			rmoustache: '\u23B1',
			rmoust: '\u23B1',
			rnmid: '\u2AEE',
			roang: '\u27ED',
			roarr: '\u21FE',
			robrk: '\u27E7',
			ropar: '\u2986',
			ropf: '\u{1D563}',
			Ropf: '\u211D',
			roplus: '\u2A2E',
			rotimes: '\u2A35',
			RoundImplies: '\u2970',
			rpar: ')',
			rpargt: '\u2994',
			rppolint: '\u2A12',
			rrarr: '\u21C9',
			Rrightarrow: '\u21DB',
			rsaquo: '\u203A',
			rscr: '\u{1D4C7}',
			Rscr: '\u211B',
			rsh: '\u21B1',
			Rsh: '\u21B1',
			rsqb: ']',
			rsquo: '\u2019',
			rsquor: '\u2019',
			rthree: '\u22CC',
			rtimes: '\u22CA',
			rtri: '\u25B9',
			rtrie: '\u22B5',
			rtrif: '\u25B8',
			rtriltri: '\u29CE',
			RuleDelayed: '\u29F4',
			ruluhar: '\u2968',
			rx: '\u211E',
			Sacute: '\u015A',
			sacute: '\u015B',
			sbquo: '\u201A',
			scap: '\u2AB8',
			Scaron: '\u0160',
			scaron: '\u0161',
			Sc: '\u2ABC',
			sc: '\u227B',
			sccue: '\u227D',
			sce: '\u2AB0',
			scE: '\u2AB4',
			Scedil: '\u015E',
			scedil: '\u015F',
			Scirc: '\u015C',
			scirc: '\u015D',
			scnap: '\u2ABA',
			scnE: '\u2AB6',
			scnsim: '\u22E9',
			scpolint: '\u2A13',
			scsim: '\u227F',
			Scy: '\u0421',
			scy: '\u0441',
			sdotb: '\u22A1',
			sdot: '\u22C5',
			sdote: '\u2A66',
			searhk: '\u2925',
			searr: '\u2198',
			seArr: '\u21D8',
			searrow: '\u2198',
			sect: '\xA7',
			semi: ';',
			seswar: '\u2929',
			setminus: '\u2216',
			setmn: '\u2216',
			sext: '\u2736',
			Sfr: '\u{1D516}',
			sfr: '\u{1D530}',
			sfrown: '\u2322',
			sharp: '\u266F',
			SHCHcy: '\u0429',
			shchcy: '\u0449',
			SHcy: '\u0428',
			shcy: '\u0448',
			ShortDownArrow: '\u2193',
			ShortLeftArrow: '\u2190',
			shortmid: '\u2223',
			shortparallel: '\u2225',
			ShortRightArrow: '\u2192',
			ShortUpArrow: '\u2191',
			shy: '\xAD',
			Sigma: '\u03A3',
			sigma: '\u03C3',
			sigmaf: '\u03C2',
			sigmav: '\u03C2',
			sim: '\u223C',
			simdot: '\u2A6A',
			sime: '\u2243',
			simeq: '\u2243',
			simg: '\u2A9E',
			simgE: '\u2AA0',
			siml: '\u2A9D',
			simlE: '\u2A9F',
			simne: '\u2246',
			simplus: '\u2A24',
			simrarr: '\u2972',
			slarr: '\u2190',
			SmallCircle: '\u2218',
			smallsetminus: '\u2216',
			smashp: '\u2A33',
			smeparsl: '\u29E4',
			smid: '\u2223',
			smile: '\u2323',
			smt: '\u2AAA',
			smte: '\u2AAC',
			smtes: '\u2AAC\uFE00',
			SOFTcy: '\u042C',
			softcy: '\u044C',
			solbar: '\u233F',
			solb: '\u29C4',
			sol: '/',
			Sopf: '\u{1D54A}',
			sopf: '\u{1D564}',
			spades: '\u2660',
			spadesuit: '\u2660',
			spar: '\u2225',
			sqcap: '\u2293',
			sqcaps: '\u2293\uFE00',
			sqcup: '\u2294',
			sqcups: '\u2294\uFE00',
			Sqrt: '\u221A',
			sqsub: '\u228F',
			sqsube: '\u2291',
			sqsubset: '\u228F',
			sqsubseteq: '\u2291',
			sqsup: '\u2290',
			sqsupe: '\u2292',
			sqsupset: '\u2290',
			sqsupseteq: '\u2292',
			square: '\u25A1',
			Square: '\u25A1',
			SquareIntersection: '\u2293',
			SquareSubset: '\u228F',
			SquareSubsetEqual: '\u2291',
			SquareSuperset: '\u2290',
			SquareSupersetEqual: '\u2292',
			SquareUnion: '\u2294',
			squarf: '\u25AA',
			squ: '\u25A1',
			squf: '\u25AA',
			srarr: '\u2192',
			Sscr: '\u{1D4AE}',
			sscr: '\u{1D4C8}',
			ssetmn: '\u2216',
			ssmile: '\u2323',
			sstarf: '\u22C6',
			Star: '\u22C6',
			star: '\u2606',
			starf: '\u2605',
			straightepsilon: '\u03F5',
			straightphi: '\u03D5',
			strns: '\xAF',
			sub: '\u2282',
			Sub: '\u22D0',
			subdot: '\u2ABD',
			subE: '\u2AC5',
			sube: '\u2286',
			subedot: '\u2AC3',
			submult: '\u2AC1',
			subnE: '\u2ACB',
			subne: '\u228A',
			subplus: '\u2ABF',
			subrarr: '\u2979',
			subset: '\u2282',
			Subset: '\u22D0',
			subseteq: '\u2286',
			subseteqq: '\u2AC5',
			SubsetEqual: '\u2286',
			subsetneq: '\u228A',
			subsetneqq: '\u2ACB',
			subsim: '\u2AC7',
			subsub: '\u2AD5',
			subsup: '\u2AD3',
			succapprox: '\u2AB8',
			succ: '\u227B',
			succcurlyeq: '\u227D',
			Succeeds: '\u227B',
			SucceedsEqual: '\u2AB0',
			SucceedsSlantEqual: '\u227D',
			SucceedsTilde: '\u227F',
			succeq: '\u2AB0',
			succnapprox: '\u2ABA',
			succneqq: '\u2AB6',
			succnsim: '\u22E9',
			succsim: '\u227F',
			SuchThat: '\u220B',
			sum: '\u2211',
			Sum: '\u2211',
			sung: '\u266A',
			sup1: '\xB9',
			sup2: '\xB2',
			sup3: '\xB3',
			sup: '\u2283',
			Sup: '\u22D1',
			supdot: '\u2ABE',
			supdsub: '\u2AD8',
			supE: '\u2AC6',
			supe: '\u2287',
			supedot: '\u2AC4',
			Superset: '\u2283',
			SupersetEqual: '\u2287',
			suphsol: '\u27C9',
			suphsub: '\u2AD7',
			suplarr: '\u297B',
			supmult: '\u2AC2',
			supnE: '\u2ACC',
			supne: '\u228B',
			supplus: '\u2AC0',
			supset: '\u2283',
			Supset: '\u22D1',
			supseteq: '\u2287',
			supseteqq: '\u2AC6',
			supsetneq: '\u228B',
			supsetneqq: '\u2ACC',
			supsim: '\u2AC8',
			supsub: '\u2AD4',
			supsup: '\u2AD6',
			swarhk: '\u2926',
			swarr: '\u2199',
			swArr: '\u21D9',
			swarrow: '\u2199',
			swnwar: '\u292A',
			szlig: '\xDF',
			Tab: '	',
			target: '\u2316',
			Tau: '\u03A4',
			tau: '\u03C4',
			tbrk: '\u23B4',
			Tcaron: '\u0164',
			tcaron: '\u0165',
			Tcedil: '\u0162',
			tcedil: '\u0163',
			Tcy: '\u0422',
			tcy: '\u0442',
			tdot: '\u20DB',
			telrec: '\u2315',
			Tfr: '\u{1D517}',
			tfr: '\u{1D531}',
			there4: '\u2234',
			therefore: '\u2234',
			Therefore: '\u2234',
			Theta: '\u0398',
			theta: '\u03B8',
			thetasym: '\u03D1',
			thetav: '\u03D1',
			thickapprox: '\u2248',
			thicksim: '\u223C',
			ThickSpace: '\u205F\u200A',
			ThinSpace: '\u2009',
			thinsp: '\u2009',
			thkap: '\u2248',
			thksim: '\u223C',
			THORN: '\xDE',
			thorn: '\xFE',
			tilde: '\u02DC',
			Tilde: '\u223C',
			TildeEqual: '\u2243',
			TildeFullEqual: '\u2245',
			TildeTilde: '\u2248',
			timesbar: '\u2A31',
			timesb: '\u22A0',
			times: '\xD7',
			timesd: '\u2A30',
			tint: '\u222D',
			toea: '\u2928',
			topbot: '\u2336',
			topcir: '\u2AF1',
			top: '\u22A4',
			Topf: '\u{1D54B}',
			topf: '\u{1D565}',
			topfork: '\u2ADA',
			tosa: '\u2929',
			tprime: '\u2034',
			trade: '\u2122',
			TRADE: '\u2122',
			triangle: '\u25B5',
			triangledown: '\u25BF',
			triangleleft: '\u25C3',
			trianglelefteq: '\u22B4',
			triangleq: '\u225C',
			triangleright: '\u25B9',
			trianglerighteq: '\u22B5',
			tridot: '\u25EC',
			trie: '\u225C',
			triminus: '\u2A3A',
			TripleDot: '\u20DB',
			triplus: '\u2A39',
			trisb: '\u29CD',
			tritime: '\u2A3B',
			trpezium: '\u23E2',
			Tscr: '\u{1D4AF}',
			tscr: '\u{1D4C9}',
			TScy: '\u0426',
			tscy: '\u0446',
			TSHcy: '\u040B',
			tshcy: '\u045B',
			Tstrok: '\u0166',
			tstrok: '\u0167',
			twixt: '\u226C',
			twoheadleftarrow: '\u219E',
			twoheadrightarrow: '\u21A0',
			Uacute: '\xDA',
			uacute: '\xFA',
			uarr: '\u2191',
			Uarr: '\u219F',
			uArr: '\u21D1',
			Uarrocir: '\u2949',
			Ubrcy: '\u040E',
			ubrcy: '\u045E',
			Ubreve: '\u016C',
			ubreve: '\u016D',
			Ucirc: '\xDB',
			ucirc: '\xFB',
			Ucy: '\u0423',
			ucy: '\u0443',
			udarr: '\u21C5',
			Udblac: '\u0170',
			udblac: '\u0171',
			udhar: '\u296E',
			ufisht: '\u297E',
			Ufr: '\u{1D518}',
			ufr: '\u{1D532}',
			Ugrave: '\xD9',
			ugrave: '\xF9',
			uHar: '\u2963',
			uharl: '\u21BF',
			uharr: '\u21BE',
			uhblk: '\u2580',
			ulcorn: '\u231C',
			ulcorner: '\u231C',
			ulcrop: '\u230F',
			ultri: '\u25F8',
			Umacr: '\u016A',
			umacr: '\u016B',
			uml: '\xA8',
			UnderBar: '_',
			UnderBrace: '\u23DF',
			UnderBracket: '\u23B5',
			UnderParenthesis: '\u23DD',
			Union: '\u22C3',
			UnionPlus: '\u228E',
			Uogon: '\u0172',
			uogon: '\u0173',
			Uopf: '\u{1D54C}',
			uopf: '\u{1D566}',
			UpArrowBar: '\u2912',
			uparrow: '\u2191',
			UpArrow: '\u2191',
			Uparrow: '\u21D1',
			UpArrowDownArrow: '\u21C5',
			updownarrow: '\u2195',
			UpDownArrow: '\u2195',
			Updownarrow: '\u21D5',
			UpEquilibrium: '\u296E',
			upharpoonleft: '\u21BF',
			upharpoonright: '\u21BE',
			uplus: '\u228E',
			UpperLeftArrow: '\u2196',
			UpperRightArrow: '\u2197',
			upsi: '\u03C5',
			Upsi: '\u03D2',
			upsih: '\u03D2',
			Upsilon: '\u03A5',
			upsilon: '\u03C5',
			UpTeeArrow: '\u21A5',
			UpTee: '\u22A5',
			upuparrows: '\u21C8',
			urcorn: '\u231D',
			urcorner: '\u231D',
			urcrop: '\u230E',
			Uring: '\u016E',
			uring: '\u016F',
			urtri: '\u25F9',
			Uscr: '\u{1D4B0}',
			uscr: '\u{1D4CA}',
			utdot: '\u22F0',
			Utilde: '\u0168',
			utilde: '\u0169',
			utri: '\u25B5',
			utrif: '\u25B4',
			uuarr: '\u21C8',
			Uuml: '\xDC',
			uuml: '\xFC',
			uwangle: '\u29A7',
			vangrt: '\u299C',
			varepsilon: '\u03F5',
			varkappa: '\u03F0',
			varnothing: '\u2205',
			varphi: '\u03D5',
			varpi: '\u03D6',
			varpropto: '\u221D',
			varr: '\u2195',
			vArr: '\u21D5',
			varrho: '\u03F1',
			varsigma: '\u03C2',
			varsubsetneq: '\u228A\uFE00',
			varsubsetneqq: '\u2ACB\uFE00',
			varsupsetneq: '\u228B\uFE00',
			varsupsetneqq: '\u2ACC\uFE00',
			vartheta: '\u03D1',
			vartriangleleft: '\u22B2',
			vartriangleright: '\u22B3',
			vBar: '\u2AE8',
			Vbar: '\u2AEB',
			vBarv: '\u2AE9',
			Vcy: '\u0412',
			vcy: '\u0432',
			vdash: '\u22A2',
			vDash: '\u22A8',
			Vdash: '\u22A9',
			VDash: '\u22AB',
			Vdashl: '\u2AE6',
			veebar: '\u22BB',
			vee: '\u2228',
			Vee: '\u22C1',
			veeeq: '\u225A',
			vellip: '\u22EE',
			verbar: '|',
			Verbar: '\u2016',
			vert: '|',
			Vert: '\u2016',
			VerticalBar: '\u2223',
			VerticalLine: '|',
			VerticalSeparator: '\u2758',
			VerticalTilde: '\u2240',
			VeryThinSpace: '\u200A',
			Vfr: '\u{1D519}',
			vfr: '\u{1D533}',
			vltri: '\u22B2',
			vnsub: '\u2282\u20D2',
			vnsup: '\u2283\u20D2',
			Vopf: '\u{1D54D}',
			vopf: '\u{1D567}',
			vprop: '\u221D',
			vrtri: '\u22B3',
			Vscr: '\u{1D4B1}',
			vscr: '\u{1D4CB}',
			vsubnE: '\u2ACB\uFE00',
			vsubne: '\u228A\uFE00',
			vsupnE: '\u2ACC\uFE00',
			vsupne: '\u228B\uFE00',
			Vvdash: '\u22AA',
			vzigzag: '\u299A',
			Wcirc: '\u0174',
			wcirc: '\u0175',
			wedbar: '\u2A5F',
			wedge: '\u2227',
			Wedge: '\u22C0',
			wedgeq: '\u2259',
			weierp: '\u2118',
			Wfr: '\u{1D51A}',
			wfr: '\u{1D534}',
			Wopf: '\u{1D54E}',
			wopf: '\u{1D568}',
			wp: '\u2118',
			wr: '\u2240',
			wreath: '\u2240',
			Wscr: '\u{1D4B2}',
			wscr: '\u{1D4CC}',
			xcap: '\u22C2',
			xcirc: '\u25EF',
			xcup: '\u22C3',
			xdtri: '\u25BD',
			Xfr: '\u{1D51B}',
			xfr: '\u{1D535}',
			xharr: '\u27F7',
			xhArr: '\u27FA',
			Xi: '\u039E',
			xi: '\u03BE',
			xlarr: '\u27F5',
			xlArr: '\u27F8',
			xmap: '\u27FC',
			xnis: '\u22FB',
			xodot: '\u2A00',
			Xopf: '\u{1D54F}',
			xopf: '\u{1D569}',
			xoplus: '\u2A01',
			xotime: '\u2A02',
			xrarr: '\u27F6',
			xrArr: '\u27F9',
			Xscr: '\u{1D4B3}',
			xscr: '\u{1D4CD}',
			xsqcup: '\u2A06',
			xuplus: '\u2A04',
			xutri: '\u25B3',
			xvee: '\u22C1',
			xwedge: '\u22C0',
			Yacute: '\xDD',
			yacute: '\xFD',
			YAcy: '\u042F',
			yacy: '\u044F',
			Ycirc: '\u0176',
			ycirc: '\u0177',
			Ycy: '\u042B',
			ycy: '\u044B',
			yen: '\xA5',
			Yfr: '\u{1D51C}',
			yfr: '\u{1D536}',
			YIcy: '\u0407',
			yicy: '\u0457',
			Yopf: '\u{1D550}',
			yopf: '\u{1D56A}',
			Yscr: '\u{1D4B4}',
			yscr: '\u{1D4CE}',
			YUcy: '\u042E',
			yucy: '\u044E',
			yuml: '\xFF',
			Yuml: '\u0178',
			Zacute: '\u0179',
			zacute: '\u017A',
			Zcaron: '\u017D',
			zcaron: '\u017E',
			Zcy: '\u0417',
			zcy: '\u0437',
			Zdot: '\u017B',
			zdot: '\u017C',
			zeetrf: '\u2128',
			ZeroWidthSpace: '\u200B',
			Zeta: '\u0396',
			zeta: '\u03B6',
			zfr: '\u{1D537}',
			Zfr: '\u2128',
			ZHcy: '\u0416',
			zhcy: '\u0436',
			zigrarr: '\u21DD',
			zopf: '\u{1D56B}',
			Zopf: '\u2124',
			Zscr: '\u{1D4B5}',
			zscr: '\u{1D4CF}',
			zwj: '\u200D',
			zwnj: '\u200C',
		},
		bo = {
			Aacute: '\xC1',
			aacute: '\xE1',
			Acirc: '\xC2',
			acirc: '\xE2',
			acute: '\xB4',
			AElig: '\xC6',
			aelig: '\xE6',
			Agrave: '\xC0',
			agrave: '\xE0',
			amp: '&',
			AMP: '&',
			Aring: '\xC5',
			aring: '\xE5',
			Atilde: '\xC3',
			atilde: '\xE3',
			Auml: '\xC4',
			auml: '\xE4',
			brvbar: '\xA6',
			Ccedil: '\xC7',
			ccedil: '\xE7',
			cedil: '\xB8',
			cent: '\xA2',
			copy: '\xA9',
			COPY: '\xA9',
			curren: '\xA4',
			deg: '\xB0',
			divide: '\xF7',
			Eacute: '\xC9',
			eacute: '\xE9',
			Ecirc: '\xCA',
			ecirc: '\xEA',
			Egrave: '\xC8',
			egrave: '\xE8',
			ETH: '\xD0',
			eth: '\xF0',
			Euml: '\xCB',
			euml: '\xEB',
			frac12: '\xBD',
			frac14: '\xBC',
			frac34: '\xBE',
			gt: '>',
			GT: '>',
			Iacute: '\xCD',
			iacute: '\xED',
			Icirc: '\xCE',
			icirc: '\xEE',
			iexcl: '\xA1',
			Igrave: '\xCC',
			igrave: '\xEC',
			iquest: '\xBF',
			Iuml: '\xCF',
			iuml: '\xEF',
			laquo: '\xAB',
			lt: '<',
			LT: '<',
			macr: '\xAF',
			micro: '\xB5',
			middot: '\xB7',
			nbsp: '\xA0',
			not: '\xAC',
			Ntilde: '\xD1',
			ntilde: '\xF1',
			Oacute: '\xD3',
			oacute: '\xF3',
			Ocirc: '\xD4',
			ocirc: '\xF4',
			Ograve: '\xD2',
			ograve: '\xF2',
			ordf: '\xAA',
			ordm: '\xBA',
			Oslash: '\xD8',
			oslash: '\xF8',
			Otilde: '\xD5',
			otilde: '\xF5',
			Ouml: '\xD6',
			ouml: '\xF6',
			para: '\xB6',
			plusmn: '\xB1',
			pound: '\xA3',
			quot: '"',
			QUOT: '"',
			raquo: '\xBB',
			reg: '\xAE',
			REG: '\xAE',
			sect: '\xA7',
			shy: '\xAD',
			sup1: '\xB9',
			sup2: '\xB2',
			sup3: '\xB3',
			szlig: '\xDF',
			THORN: '\xDE',
			thorn: '\xFE',
			times: '\xD7',
			Uacute: '\xDA',
			uacute: '\xFA',
			Ucirc: '\xDB',
			ucirc: '\xFB',
			Ugrave: '\xD9',
			ugrave: '\xF9',
			uml: '\xA8',
			Uuml: '\xDC',
			uuml: '\xFC',
			Yacute: '\xDD',
			yacute: '\xFD',
			yen: '\xA5',
			yuml: '\xFF',
		},
		Gr = { amp: '&', apos: "'", gt: '>', lt: '<', quot: '"' },
		ur =
			(q && q.__importDefault) ||
			function (e) {
				return e && e.__esModule ? e : { default: e };
			};
	Object.defineProperty(sr, '__esModule', { value: !0 });
	var Ni = ur(ar),
		Pi = ur(jr),
		zr = ur(bo),
		Oi = ur(Gr);
	function xe(e) {
		return (
			e === ' ' ||
			e ===
				`
` ||
			e === '	' ||
			e === '\f' ||
			e === '\r'
		);
	}
	function vo(e) {
		return (e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z');
	}
	function ce(e, t, r) {
		var n = e.toLowerCase();
		return e === n
			? function (o, s) {
					s === n ? (o._state = t) : ((o._state = r), o._index--);
			  }
			: function (o, s) {
					s === n || s === e
						? (o._state = t)
						: ((o._state = r), o._index--);
			  };
	}
	function Fe(e, t) {
		var r = e.toLowerCase();
		return function (n, o) {
			o === r || o === e ? (n._state = t) : ((n._state = 3), n._index--);
		};
	}
	var Ii = ce('C', 24, 16),
		Ri = ce('D', 25, 16),
		Ui = ce('A', 26, 16),
		Vi = ce('T', 27, 16),
		$i = ce('A', 28, 16),
		Mi = Fe('R', 35),
		Hi = Fe('I', 36),
		ji = Fe('P', 37),
		Gi = Fe('T', 38),
		zi = ce('R', 40, 1),
		Wi = ce('I', 41, 1),
		Ji = ce('P', 42, 1),
		Yi = ce('T', 43, 1),
		Zi = Fe('Y', 45),
		Xi = Fe('L', 46),
		Qi = Fe('E', 47),
		Ki = ce('Y', 49, 1),
		ec = ce('L', 50, 1),
		tc = ce('E', 51, 1),
		rc = Fe('I', 54),
		nc = Fe('T', 55),
		oc = Fe('L', 56),
		sc = Fe('E', 57),
		ac = ce('I', 58, 1),
		uc = ce('T', 59, 1),
		ic = ce('L', 60, 1),
		cc = ce('E', 61, 1),
		lc = ce('#', 63, 64),
		fc = ce('X', 66, 65),
		pc = (function () {
			function e(t, r) {
				var n;
				(this._state = 1),
					(this.buffer = ''),
					(this.sectionStart = 0),
					(this._index = 0),
					(this.bufferOffset = 0),
					(this.baseState = 1),
					(this.special = 1),
					(this.running = !0),
					(this.ended = !1),
					(this.cbs = r),
					(this.xmlMode = !!(t == null ? void 0 : t.xmlMode)),
					(this.decodeEntities =
						(n = t == null ? void 0 : t.decodeEntities) !== null &&
						n !== void 0
							? n
							: !0);
			}
			return (
				(e.prototype.reset = function () {
					(this._state = 1),
						(this.buffer = ''),
						(this.sectionStart = 0),
						(this._index = 0),
						(this.bufferOffset = 0),
						(this.baseState = 1),
						(this.special = 1),
						(this.running = !0),
						(this.ended = !1);
				}),
				(e.prototype.write = function (t) {
					this.ended &&
						this.cbs.onerror(Error('.write() after done!')),
						(this.buffer += t),
						this.parse();
				}),
				(e.prototype.end = function (t) {
					this.ended && this.cbs.onerror(Error('.end() after done!')),
						t && this.write(t),
						(this.ended = !0),
						this.running && this.finish();
				}),
				(e.prototype.pause = function () {
					this.running = !1;
				}),
				(e.prototype.resume = function () {
					(this.running = !0),
						this._index < this.buffer.length && this.parse(),
						this.ended && this.finish();
				}),
				(e.prototype.getAbsoluteIndex = function () {
					return this.bufferOffset + this._index;
				}),
				(e.prototype.stateText = function (t) {
					t === '<'
						? (this._index > this.sectionStart &&
								this.cbs.ontext(this.getSection()),
						  (this._state = 2),
						  (this.sectionStart = this._index))
						: this.decodeEntities &&
						  t === '&' &&
						  (this.special === 1 || this.special === 4) &&
						  (this._index > this.sectionStart &&
								this.cbs.ontext(this.getSection()),
						  (this.baseState = 1),
						  (this._state = 62),
						  (this.sectionStart = this._index));
				}),
				(e.prototype.isTagStartChar = function (t) {
					return (
						vo(t) ||
						(this.xmlMode && !xe(t) && t !== '/' && t !== '>')
					);
				}),
				(e.prototype.stateBeforeTagName = function (t) {
					t === '/'
						? (this._state = 5)
						: t === '<'
						? (this.cbs.ontext(this.getSection()),
						  (this.sectionStart = this._index))
						: t === '>' || this.special !== 1 || xe(t)
						? (this._state = 1)
						: t === '!'
						? ((this._state = 15),
						  (this.sectionStart = this._index + 1))
						: t === '?'
						? ((this._state = 17),
						  (this.sectionStart = this._index + 1))
						: this.isTagStartChar(t)
						? ((this._state =
								!this.xmlMode && (t === 's' || t === 'S')
									? 32
									: !this.xmlMode && (t === 't' || t === 'T')
									? 52
									: 3),
						  (this.sectionStart = this._index))
						: (this._state = 1);
				}),
				(e.prototype.stateInTagName = function (t) {
					(t === '/' || t === '>' || xe(t)) &&
						(this.emitToken('onopentagname'),
						(this._state = 8),
						this._index--);
				}),
				(e.prototype.stateBeforeClosingTagName = function (t) {
					xe(t) ||
						(t === '>'
							? (this._state = 1)
							: this.special !== 1
							? this.special !== 4 && (t === 's' || t === 'S')
								? (this._state = 33)
								: this.special === 4 && (t === 't' || t === 'T')
								? (this._state = 53)
								: ((this._state = 1), this._index--)
							: this.isTagStartChar(t)
							? ((this._state = 6),
							  (this.sectionStart = this._index))
							: ((this._state = 20),
							  (this.sectionStart = this._index)));
				}),
				(e.prototype.stateInClosingTagName = function (t) {
					(t === '>' || xe(t)) &&
						(this.emitToken('onclosetag'),
						(this._state = 7),
						this._index--);
				}),
				(e.prototype.stateAfterClosingTagName = function (t) {
					t === '>' &&
						((this._state = 1),
						(this.sectionStart = this._index + 1));
				}),
				(e.prototype.stateBeforeAttributeName = function (t) {
					t === '>'
						? (this.cbs.onopentagend(),
						  (this._state = 1),
						  (this.sectionStart = this._index + 1))
						: t === '/'
						? (this._state = 4)
						: xe(t) ||
						  ((this._state = 9),
						  (this.sectionStart = this._index));
				}),
				(e.prototype.stateInSelfClosingTag = function (t) {
					t === '>'
						? (this.cbs.onselfclosingtag(),
						  (this._state = 1),
						  (this.sectionStart = this._index + 1),
						  (this.special = 1))
						: xe(t) || ((this._state = 8), this._index--);
				}),
				(e.prototype.stateInAttributeName = function (t) {
					(t === '=' || t === '/' || t === '>' || xe(t)) &&
						(this.cbs.onattribname(this.getSection()),
						(this.sectionStart = -1),
						(this._state = 10),
						this._index--);
				}),
				(e.prototype.stateAfterAttributeName = function (t) {
					t === '='
						? (this._state = 11)
						: t === '/' || t === '>'
						? (this.cbs.onattribend(void 0),
						  (this._state = 8),
						  this._index--)
						: xe(t) ||
						  (this.cbs.onattribend(void 0),
						  (this._state = 9),
						  (this.sectionStart = this._index));
				}),
				(e.prototype.stateBeforeAttributeValue = function (t) {
					t === '"'
						? ((this._state = 12),
						  (this.sectionStart = this._index + 1))
						: t === "'"
						? ((this._state = 13),
						  (this.sectionStart = this._index + 1))
						: xe(t) ||
						  ((this._state = 14),
						  (this.sectionStart = this._index),
						  this._index--);
				}),
				(e.prototype.handleInAttributeValue = function (t, r) {
					t === r
						? (this.emitToken('onattribdata'),
						  this.cbs.onattribend(r),
						  (this._state = 8))
						: this.decodeEntities &&
						  t === '&' &&
						  (this.emitToken('onattribdata'),
						  (this.baseState = this._state),
						  (this._state = 62),
						  (this.sectionStart = this._index));
				}),
				(e.prototype.stateInAttributeValueDoubleQuotes = function (t) {
					this.handleInAttributeValue(t, '"');
				}),
				(e.prototype.stateInAttributeValueSingleQuotes = function (t) {
					this.handleInAttributeValue(t, "'");
				}),
				(e.prototype.stateInAttributeValueNoQuotes = function (t) {
					xe(t) || t === '>'
						? (this.emitToken('onattribdata'),
						  this.cbs.onattribend(null),
						  (this._state = 8),
						  this._index--)
						: this.decodeEntities &&
						  t === '&' &&
						  (this.emitToken('onattribdata'),
						  (this.baseState = this._state),
						  (this._state = 62),
						  (this.sectionStart = this._index));
				}),
				(e.prototype.stateBeforeDeclaration = function (t) {
					this._state = t === '[' ? 23 : t === '-' ? 18 : 16;
				}),
				(e.prototype.stateInDeclaration = function (t) {
					t === '>' &&
						(this.cbs.ondeclaration(this.getSection()),
						(this._state = 1),
						(this.sectionStart = this._index + 1));
				}),
				(e.prototype.stateInProcessingInstruction = function (t) {
					t === '>' &&
						(this.cbs.onprocessinginstruction(this.getSection()),
						(this._state = 1),
						(this.sectionStart = this._index + 1));
				}),
				(e.prototype.stateBeforeComment = function (t) {
					t === '-'
						? ((this._state = 19),
						  (this.sectionStart = this._index + 1))
						: (this._state = 16);
				}),
				(e.prototype.stateInComment = function (t) {
					t === '-' && (this._state = 21);
				}),
				(e.prototype.stateInSpecialComment = function (t) {
					t === '>' &&
						(this.cbs.oncomment(
							this.buffer.substring(
								this.sectionStart,
								this._index
							)
						),
						(this._state = 1),
						(this.sectionStart = this._index + 1));
				}),
				(e.prototype.stateAfterComment1 = function (t) {
					t === '-' ? (this._state = 22) : (this._state = 19);
				}),
				(e.prototype.stateAfterComment2 = function (t) {
					t === '>'
						? (this.cbs.oncomment(
								this.buffer.substring(
									this.sectionStart,
									this._index - 2
								)
						  ),
						  (this._state = 1),
						  (this.sectionStart = this._index + 1))
						: t !== '-' && (this._state = 19);
				}),
				(e.prototype.stateBeforeCdata6 = function (t) {
					t === '['
						? ((this._state = 29),
						  (this.sectionStart = this._index + 1))
						: ((this._state = 16), this._index--);
				}),
				(e.prototype.stateInCdata = function (t) {
					t === ']' && (this._state = 30);
				}),
				(e.prototype.stateAfterCdata1 = function (t) {
					t === ']' ? (this._state = 31) : (this._state = 29);
				}),
				(e.prototype.stateAfterCdata2 = function (t) {
					t === '>'
						? (this.cbs.oncdata(
								this.buffer.substring(
									this.sectionStart,
									this._index - 2
								)
						  ),
						  (this._state = 1),
						  (this.sectionStart = this._index + 1))
						: t !== ']' && (this._state = 29);
				}),
				(e.prototype.stateBeforeSpecialS = function (t) {
					t === 'c' || t === 'C'
						? (this._state = 34)
						: t === 't' || t === 'T'
						? (this._state = 44)
						: ((this._state = 3), this._index--);
				}),
				(e.prototype.stateBeforeSpecialSEnd = function (t) {
					this.special === 2 && (t === 'c' || t === 'C')
						? (this._state = 39)
						: this.special === 3 && (t === 't' || t === 'T')
						? (this._state = 48)
						: (this._state = 1);
				}),
				(e.prototype.stateBeforeSpecialLast = function (t, r) {
					(t === '/' || t === '>' || xe(t)) && (this.special = r),
						(this._state = 3),
						this._index--;
				}),
				(e.prototype.stateAfterSpecialLast = function (t, r) {
					t === '>' || xe(t)
						? ((this.special = 1),
						  (this._state = 6),
						  (this.sectionStart = this._index - r),
						  this._index--)
						: (this._state = 1);
				}),
				(e.prototype.parseFixedEntity = function (t) {
					if (
						(t === void 0 &&
							(t = this.xmlMode ? Oi.default : Pi.default),
						this.sectionStart + 1 < this._index)
					) {
						var r = this.buffer.substring(
							this.sectionStart + 1,
							this._index
						);
						Object.prototype.hasOwnProperty.call(t, r) &&
							(this.emitPartial(t[r]),
							(this.sectionStart = this._index + 1));
					}
				}),
				(e.prototype.parseLegacyEntity = function () {
					for (
						var t = this.sectionStart + 1,
							r = Math.min(this._index - t, 6);
						r >= 2;

					) {
						var n = this.buffer.substr(t, r);
						if (
							Object.prototype.hasOwnProperty.call(zr.default, n)
						) {
							this.emitPartial(zr.default[n]),
								(this.sectionStart += r + 1);
							return;
						}
						r--;
					}
				}),
				(e.prototype.stateInNamedEntity = function (t) {
					t === ';'
						? (this.parseFixedEntity(),
						  this.baseState === 1 &&
								this.sectionStart + 1 < this._index &&
								!this.xmlMode &&
								this.parseLegacyEntity(),
						  (this._state = this.baseState))
						: (t < '0' || t > '9') &&
						  !vo(t) &&
						  (this.xmlMode ||
								this.sectionStart + 1 === this._index ||
								(this.baseState !== 1
									? t !== '=' &&
									  this.parseFixedEntity(zr.default)
									: this.parseLegacyEntity()),
						  (this._state = this.baseState),
						  this._index--);
				}),
				(e.prototype.decodeNumericEntity = function (t, r, n) {
					var o = this.sectionStart + t;
					if (o !== this._index) {
						var s = this.buffer.substring(o, this._index),
							a = parseInt(s, r);
						this.emitPartial(Ni.default(a)),
							(this.sectionStart = n
								? this._index + 1
								: this._index);
					}
					this._state = this.baseState;
				}),
				(e.prototype.stateInNumericEntity = function (t) {
					t === ';'
						? this.decodeNumericEntity(2, 10, !0)
						: (t < '0' || t > '9') &&
						  (this.xmlMode
								? (this._state = this.baseState)
								: this.decodeNumericEntity(2, 10, !1),
						  this._index--);
				}),
				(e.prototype.stateInHexEntity = function (t) {
					t === ';'
						? this.decodeNumericEntity(3, 16, !0)
						: (t < 'a' || t > 'f') &&
						  (t < 'A' || t > 'F') &&
						  (t < '0' || t > '9') &&
						  (this.xmlMode
								? (this._state = this.baseState)
								: this.decodeNumericEntity(3, 16, !1),
						  this._index--);
				}),
				(e.prototype.cleanup = function () {
					this.sectionStart < 0
						? ((this.buffer = ''),
						  (this.bufferOffset += this._index),
						  (this._index = 0))
						: this.running &&
						  (this._state === 1
								? (this.sectionStart !== this._index &&
										this.cbs.ontext(
											this.buffer.substr(
												this.sectionStart
											)
										),
								  (this.buffer = ''),
								  (this.bufferOffset += this._index),
								  (this._index = 0))
								: this.sectionStart === this._index
								? ((this.buffer = ''),
								  (this.bufferOffset += this._index),
								  (this._index = 0))
								: ((this.buffer = this.buffer.substr(
										this.sectionStart
								  )),
								  (this._index -= this.sectionStart),
								  (this.bufferOffset += this.sectionStart)),
						  (this.sectionStart = 0));
				}),
				(e.prototype.parse = function () {
					for (; this._index < this.buffer.length && this.running; ) {
						var t = this.buffer.charAt(this._index);
						this._state === 1
							? this.stateText(t)
							: this._state === 12
							? this.stateInAttributeValueDoubleQuotes(t)
							: this._state === 9
							? this.stateInAttributeName(t)
							: this._state === 19
							? this.stateInComment(t)
							: this._state === 20
							? this.stateInSpecialComment(t)
							: this._state === 8
							? this.stateBeforeAttributeName(t)
							: this._state === 3
							? this.stateInTagName(t)
							: this._state === 6
							? this.stateInClosingTagName(t)
							: this._state === 2
							? this.stateBeforeTagName(t)
							: this._state === 10
							? this.stateAfterAttributeName(t)
							: this._state === 13
							? this.stateInAttributeValueSingleQuotes(t)
							: this._state === 11
							? this.stateBeforeAttributeValue(t)
							: this._state === 5
							? this.stateBeforeClosingTagName(t)
							: this._state === 7
							? this.stateAfterClosingTagName(t)
							: this._state === 32
							? this.stateBeforeSpecialS(t)
							: this._state === 21
							? this.stateAfterComment1(t)
							: this._state === 14
							? this.stateInAttributeValueNoQuotes(t)
							: this._state === 4
							? this.stateInSelfClosingTag(t)
							: this._state === 16
							? this.stateInDeclaration(t)
							: this._state === 15
							? this.stateBeforeDeclaration(t)
							: this._state === 22
							? this.stateAfterComment2(t)
							: this._state === 18
							? this.stateBeforeComment(t)
							: this._state === 33
							? this.stateBeforeSpecialSEnd(t)
							: this._state === 53
							? ac(this, t)
							: this._state === 39
							? zi(this, t)
							: this._state === 40
							? Wi(this, t)
							: this._state === 41
							? Ji(this, t)
							: this._state === 34
							? Mi(this, t)
							: this._state === 35
							? Hi(this, t)
							: this._state === 36
							? ji(this, t)
							: this._state === 37
							? Gi(this, t)
							: this._state === 38
							? this.stateBeforeSpecialLast(t, 2)
							: this._state === 42
							? Yi(this, t)
							: this._state === 43
							? this.stateAfterSpecialLast(t, 6)
							: this._state === 44
							? Zi(this, t)
							: this._state === 29
							? this.stateInCdata(t)
							: this._state === 45
							? Xi(this, t)
							: this._state === 46
							? Qi(this, t)
							: this._state === 47
							? this.stateBeforeSpecialLast(t, 3)
							: this._state === 48
							? Ki(this, t)
							: this._state === 49
							? ec(this, t)
							: this._state === 50
							? tc(this, t)
							: this._state === 51
							? this.stateAfterSpecialLast(t, 5)
							: this._state === 52
							? rc(this, t)
							: this._state === 54
							? nc(this, t)
							: this._state === 55
							? oc(this, t)
							: this._state === 56
							? sc(this, t)
							: this._state === 57
							? this.stateBeforeSpecialLast(t, 4)
							: this._state === 58
							? uc(this, t)
							: this._state === 59
							? ic(this, t)
							: this._state === 60
							? cc(this, t)
							: this._state === 61
							? this.stateAfterSpecialLast(t, 5)
							: this._state === 17
							? this.stateInProcessingInstruction(t)
							: this._state === 64
							? this.stateInNamedEntity(t)
							: this._state === 23
							? Ii(this, t)
							: this._state === 62
							? lc(this, t)
							: this._state === 24
							? Ri(this, t)
							: this._state === 25
							? Ui(this, t)
							: this._state === 30
							? this.stateAfterCdata1(t)
							: this._state === 31
							? this.stateAfterCdata2(t)
							: this._state === 26
							? Vi(this, t)
							: this._state === 27
							? $i(this, t)
							: this._state === 28
							? this.stateBeforeCdata6(t)
							: this._state === 66
							? this.stateInHexEntity(t)
							: this._state === 65
							? this.stateInNumericEntity(t)
							: this._state === 63
							? fc(this, t)
							: this.cbs.onerror(
									Error('unknown _state'),
									this._state
							  ),
							this._index++;
					}
					this.cleanup();
				}),
				(e.prototype.finish = function () {
					this.sectionStart < this._index &&
						this.handleTrailingData(),
						this.cbs.onend();
				}),
				(e.prototype.handleTrailingData = function () {
					var t = this.buffer.substr(this.sectionStart);
					this._state === 29 ||
					this._state === 30 ||
					this._state === 31
						? this.cbs.oncdata(t)
						: this._state === 19 ||
						  this._state === 21 ||
						  this._state === 22
						? this.cbs.oncomment(t)
						: this._state === 64 && !this.xmlMode
						? (this.parseLegacyEntity(),
						  this.sectionStart < this._index &&
								((this._state = this.baseState),
								this.handleTrailingData()))
						: this._state === 65 && !this.xmlMode
						? (this.decodeNumericEntity(2, 10, !1),
						  this.sectionStart < this._index &&
								((this._state = this.baseState),
								this.handleTrailingData()))
						: this._state === 66 && !this.xmlMode
						? (this.decodeNumericEntity(3, 16, !1),
						  this.sectionStart < this._index &&
								((this._state = this.baseState),
								this.handleTrailingData()))
						: this._state !== 3 &&
						  this._state !== 8 &&
						  this._state !== 11 &&
						  this._state !== 10 &&
						  this._state !== 9 &&
						  this._state !== 13 &&
						  this._state !== 12 &&
						  this._state !== 14 &&
						  this._state !== 6 &&
						  this.cbs.ontext(t);
				}),
				(e.prototype.getSection = function () {
					return this.buffer.substring(
						this.sectionStart,
						this._index
					);
				}),
				(e.prototype.emitToken = function (t) {
					this.cbs[t](this.getSection()), (this.sectionStart = -1);
				}),
				(e.prototype.emitPartial = function (t) {
					this.baseState !== 1
						? this.cbs.onattribdata(t)
						: this.cbs.ontext(t);
				}),
				e
			);
		})();
	sr.default = pc;
	var dc =
		(q && q.__importDefault) ||
		function (e) {
			return e && e.__esModule ? e : { default: e };
		};
	Object.defineProperty(kt, '__esModule', { value: !0 }),
		(kt.Parser = void 0);
	var hc = dc(sr),
		mt = new Set([
			'input',
			'option',
			'optgroup',
			'select',
			'button',
			'datalist',
			'textarea',
		]),
		Z = new Set(['p']),
		Do = {
			tr: new Set(['tr', 'th', 'td']),
			th: new Set(['th']),
			td: new Set(['thead', 'th', 'td']),
			body: new Set(['head', 'link', 'script']),
			li: new Set(['li']),
			p: Z,
			h1: Z,
			h2: Z,
			h3: Z,
			h4: Z,
			h5: Z,
			h6: Z,
			select: mt,
			input: mt,
			output: mt,
			button: mt,
			datalist: mt,
			textarea: mt,
			option: new Set(['option']),
			optgroup: new Set(['optgroup', 'option']),
			dd: new Set(['dt', 'dd']),
			dt: new Set(['dt', 'dd']),
			address: Z,
			article: Z,
			aside: Z,
			blockquote: Z,
			details: Z,
			div: Z,
			dl: Z,
			fieldset: Z,
			figcaption: Z,
			figure: Z,
			footer: Z,
			form: Z,
			header: Z,
			hr: Z,
			main: Z,
			nav: Z,
			ol: Z,
			pre: Z,
			section: Z,
			table: Z,
			ul: Z,
			rt: new Set(['rt', 'rp']),
			rp: new Set(['rt', 'rp']),
			tbody: new Set(['thead', 'tbody']),
			tfoot: new Set(['thead', 'tbody']),
		},
		Wr = new Set([
			'area',
			'base',
			'basefont',
			'br',
			'col',
			'command',
			'embed',
			'frame',
			'hr',
			'img',
			'input',
			'isindex',
			'keygen',
			'link',
			'meta',
			'param',
			'source',
			'track',
			'wbr',
		]),
		yo = new Set(['math', 'svg']),
		Ao = new Set([
			'mi',
			'mo',
			'mn',
			'ms',
			'mtext',
			'annotation-xml',
			'foreignObject',
			'desc',
			'title',
		]),
		mc = /\s|\//,
		gc = (function () {
			function e(t, r) {
				r === void 0 && (r = {});
				var n, o, s, a, c;
				(this.startIndex = 0),
					(this.endIndex = null),
					(this.tagname = ''),
					(this.attribname = ''),
					(this.attribvalue = ''),
					(this.attribs = null),
					(this.stack = []),
					(this.foreignContext = []),
					(this.options = r),
					(this.cbs = t != null ? t : {}),
					(this.lowerCaseTagNames =
						(n = r.lowerCaseTags) !== null && n !== void 0
							? n
							: !r.xmlMode),
					(this.lowerCaseAttributeNames =
						(o = r.lowerCaseAttributeNames) !== null && o !== void 0
							? o
							: !r.xmlMode),
					(this.tokenizer = new (
						(s = r.Tokenizer) !== null && s !== void 0
							? s
							: hc.default
					)(this.options, this)),
					(c = (a = this.cbs).onparserinit) === null ||
						c === void 0 ||
						c.call(a, this);
			}
			return (
				(e.prototype.updatePosition = function (t) {
					this.endIndex === null
						? this.tokenizer.sectionStart <= t
							? (this.startIndex = 0)
							: (this.startIndex =
									this.tokenizer.sectionStart - t)
						: (this.startIndex = this.endIndex + 1),
						(this.endIndex = this.tokenizer.getAbsoluteIndex());
				}),
				(e.prototype.ontext = function (t) {
					var r, n;
					this.updatePosition(1),
						this.endIndex--,
						(n = (r = this.cbs).ontext) === null ||
							n === void 0 ||
							n.call(r, t);
				}),
				(e.prototype.onopentagname = function (t) {
					var r, n;
					if (
						(this.lowerCaseTagNames && (t = t.toLowerCase()),
						(this.tagname = t),
						!this.options.xmlMode &&
							Object.prototype.hasOwnProperty.call(Do, t))
					)
						for (
							var o = void 0;
							this.stack.length > 0 &&
							Do[t].has((o = this.stack[this.stack.length - 1]));

						)
							this.onclosetag(o);
					(this.options.xmlMode || !Wr.has(t)) &&
						(this.stack.push(t),
						yo.has(t)
							? this.foreignContext.push(!0)
							: Ao.has(t) && this.foreignContext.push(!1)),
						(n = (r = this.cbs).onopentagname) === null ||
							n === void 0 ||
							n.call(r, t),
						this.cbs.onopentag && (this.attribs = {});
				}),
				(e.prototype.onopentagend = function () {
					var t, r;
					this.updatePosition(1),
						this.attribs &&
							((r = (t = this.cbs).onopentag) === null ||
								r === void 0 ||
								r.call(t, this.tagname, this.attribs),
							(this.attribs = null)),
						!this.options.xmlMode &&
							this.cbs.onclosetag &&
							Wr.has(this.tagname) &&
							this.cbs.onclosetag(this.tagname),
						(this.tagname = '');
				}),
				(e.prototype.onclosetag = function (t) {
					if (
						(this.updatePosition(1),
						this.lowerCaseTagNames && (t = t.toLowerCase()),
						(yo.has(t) || Ao.has(t)) && this.foreignContext.pop(),
						this.stack.length &&
							(this.options.xmlMode || !Wr.has(t)))
					) {
						var r = this.stack.lastIndexOf(t);
						if (r !== -1)
							if (this.cbs.onclosetag)
								for (r = this.stack.length - r; r--; )
									this.cbs.onclosetag(this.stack.pop());
							else this.stack.length = r;
						else
							t === 'p' &&
								!this.options.xmlMode &&
								(this.onopentagname(t), this.closeCurrentTag());
					} else
						!this.options.xmlMode &&
							(t === 'br' || t === 'p') &&
							(this.onopentagname(t), this.closeCurrentTag());
				}),
				(e.prototype.onselfclosingtag = function () {
					this.options.xmlMode ||
					this.options.recognizeSelfClosing ||
					this.foreignContext[this.foreignContext.length - 1]
						? this.closeCurrentTag()
						: this.onopentagend();
				}),
				(e.prototype.closeCurrentTag = function () {
					var t,
						r,
						n = this.tagname;
					this.onopentagend(),
						this.stack[this.stack.length - 1] === n &&
							((r = (t = this.cbs).onclosetag) === null ||
								r === void 0 ||
								r.call(t, n),
							this.stack.pop());
				}),
				(e.prototype.onattribname = function (t) {
					this.lowerCaseAttributeNames && (t = t.toLowerCase()),
						(this.attribname = t);
				}),
				(e.prototype.onattribdata = function (t) {
					this.attribvalue += t;
				}),
				(e.prototype.onattribend = function (t) {
					var r, n;
					(n = (r = this.cbs).onattribute) === null ||
						n === void 0 ||
						n.call(r, this.attribname, this.attribvalue, t),
						this.attribs &&
							!Object.prototype.hasOwnProperty.call(
								this.attribs,
								this.attribname
							) &&
							(this.attribs[this.attribname] = this.attribvalue),
						(this.attribname = ''),
						(this.attribvalue = '');
				}),
				(e.prototype.getInstructionName = function (t) {
					var r = t.search(mc),
						n = r < 0 ? t : t.substr(0, r);
					return this.lowerCaseTagNames && (n = n.toLowerCase()), n;
				}),
				(e.prototype.ondeclaration = function (t) {
					if (this.cbs.onprocessinginstruction) {
						var r = this.getInstructionName(t);
						this.cbs.onprocessinginstruction('!' + r, '!' + t);
					}
				}),
				(e.prototype.onprocessinginstruction = function (t) {
					if (this.cbs.onprocessinginstruction) {
						var r = this.getInstructionName(t);
						this.cbs.onprocessinginstruction('?' + r, '?' + t);
					}
				}),
				(e.prototype.oncomment = function (t) {
					var r, n, o, s;
					this.updatePosition(4),
						(n = (r = this.cbs).oncomment) === null ||
							n === void 0 ||
							n.call(r, t),
						(s = (o = this.cbs).oncommentend) === null ||
							s === void 0 ||
							s.call(o);
				}),
				(e.prototype.oncdata = function (t) {
					var r, n, o, s, a, c;
					this.updatePosition(1),
						this.options.xmlMode || this.options.recognizeCDATA
							? ((n = (r = this.cbs).oncdatastart) === null ||
									n === void 0 ||
									n.call(r),
							  (s = (o = this.cbs).ontext) === null ||
									s === void 0 ||
									s.call(o, t),
							  (c = (a = this.cbs).oncdataend) === null ||
									c === void 0 ||
									c.call(a))
							: this.oncomment('[CDATA[' + t + ']]');
				}),
				(e.prototype.onerror = function (t) {
					var r, n;
					(n = (r = this.cbs).onerror) === null ||
						n === void 0 ||
						n.call(r, t);
				}),
				(e.prototype.onend = function () {
					var t, r;
					if (this.cbs.onclosetag)
						for (
							var n = this.stack.length;
							n > 0;
							this.cbs.onclosetag(this.stack[--n])
						);
					(r = (t = this.cbs).onend) === null ||
						r === void 0 ||
						r.call(t);
				}),
				(e.prototype.reset = function () {
					var t, r, n, o;
					(r = (t = this.cbs).onreset) === null ||
						r === void 0 ||
						r.call(t),
						this.tokenizer.reset(),
						(this.tagname = ''),
						(this.attribname = ''),
						(this.attribs = null),
						(this.stack = []),
						(o = (n = this.cbs).onparserinit) === null ||
							o === void 0 ||
							o.call(n, this);
				}),
				(e.prototype.parseComplete = function (t) {
					this.reset(), this.end(t);
				}),
				(e.prototype.write = function (t) {
					this.tokenizer.write(t);
				}),
				(e.prototype.end = function (t) {
					this.tokenizer.end(t);
				}),
				(e.prototype.pause = function () {
					this.tokenizer.pause();
				}),
				(e.prototype.resume = function () {
					this.tokenizer.resume();
				}),
				(e.prototype.parseChunk = function (t) {
					this.write(t);
				}),
				(e.prototype.done = function (t) {
					this.end(t);
				}),
				e
			);
		})();
	kt.Parser = gc;
	var rt = {},
		Jr = {},
		Ce = {},
		Yr = {},
		wo = {},
		He = {},
		ir =
			(q && q.__importDefault) ||
			function (e) {
				return e && e.__esModule ? e : { default: e };
			};
	Object.defineProperty(He, '__esModule', { value: !0 }),
		(He.decodeHTML = He.decodeHTMLStrict = He.decodeXML = void 0);
	var Zr = ir(jr),
		bc = ir(bo),
		vc = ir(Gr),
		Eo = ir(ar),
		Dc = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
	(He.decodeXML = xo(vc.default)), (He.decodeHTMLStrict = xo(Zr.default));
	function xo(e) {
		var t = qo(e);
		return function (r) {
			return String(r).replace(Dc, t);
		};
	}
	var Co = function (e, t) {
		return e < t ? 1 : -1;
	};
	He.decodeHTML = (function () {
		for (
			var e = Object.keys(bc.default).sort(Co),
				t = Object.keys(Zr.default).sort(Co),
				r = 0,
				n = 0;
			r < t.length;
			r++
		)
			e[n] === t[r] ? ((t[r] += ';?'), n++) : (t[r] += ';');
		var o = new RegExp(
				'&(?:' + t.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)',
				'g'
			),
			s = qo(Zr.default);
		function a(c) {
			return c.substr(-1) !== ';' && (c += ';'), s(c);
		}
		return function (c) {
			return String(c).replace(o, a);
		};
	})();
	function qo(e) {
		return function (r) {
			if (r.charAt(1) === '#') {
				var n = r.charAt(2);
				return n === 'X' || n === 'x'
					? Eo.default(parseInt(r.substr(3), 16))
					: Eo.default(parseInt(r.substr(2), 10));
			}
			return e[r.slice(1, -1)] || r;
		};
	}
	var qe = {},
		So =
			(q && q.__importDefault) ||
			function (e) {
				return e && e.__esModule ? e : { default: e };
			};
	Object.defineProperty(qe, '__esModule', { value: !0 }),
		(qe.escapeUTF8 =
			qe.escape =
			qe.encodeNonAsciiHTML =
			qe.encodeHTML =
			qe.encodeXML =
				void 0);
	var yc = So(Gr),
		Bo = ko(yc.default),
		To = Lo(Bo);
	qe.encodeXML = No(Bo);
	var Ac = So(jr),
		Xr = ko(Ac.default),
		wc = Lo(Xr);
	(qe.encodeHTML = xc(Xr, wc)), (qe.encodeNonAsciiHTML = No(Xr));
	function ko(e) {
		return Object.keys(e)
			.sort()
			.reduce(function (t, r) {
				return (t[e[r]] = '&' + r + ';'), t;
			}, {});
	}
	function Lo(e) {
		for (var t = [], r = [], n = 0, o = Object.keys(e); n < o.length; n++) {
			var s = o[n];
			s.length === 1 ? t.push('\\' + s) : r.push(s);
		}
		t.sort();
		for (var a = 0; a < t.length - 1; a++) {
			for (
				var c = a;
				c < t.length - 1 &&
				t[c].charCodeAt(1) + 1 === t[c + 1].charCodeAt(1);

			)
				c += 1;
			var l = 1 + c - a;
			l < 3 || t.splice(a, l, t[a] + '-' + t[c]);
		}
		return r.unshift('[' + t.join('') + ']'), new RegExp(r.join('|'), 'g');
	}
	var Fo =
			/(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
		Ec =
			String.prototype.codePointAt != null
				? function (e) {
						return e.codePointAt(0);
				  }
				: function (e) {
						return (
							(e.charCodeAt(0) - 55296) * 1024 +
							e.charCodeAt(1) -
							56320 +
							65536
						);
				  };
	function cr(e) {
		return (
			'&#x' +
			(e.length > 1 ? Ec(e) : e.charCodeAt(0))
				.toString(16)
				.toUpperCase() +
			';'
		);
	}
	function xc(e, t) {
		return function (r) {
			return r
				.replace(t, function (n) {
					return e[n];
				})
				.replace(Fo, cr);
		};
	}
	var _o = new RegExp(To.source + '|' + Fo.source, 'g');
	function Cc(e) {
		return e.replace(_o, cr);
	}
	qe.escape = Cc;
	function qc(e) {
		return e.replace(To, cr);
	}
	qe.escapeUTF8 = qc;
	function No(e) {
		return function (t) {
			return t.replace(_o, function (r) {
				return e[r] || cr(r);
			});
		};
	}
	(function (e) {
		Object.defineProperty(e, '__esModule', { value: !0 }),
			(e.decodeXMLStrict =
				e.decodeHTML5Strict =
				e.decodeHTML4Strict =
				e.decodeHTML5 =
				e.decodeHTML4 =
				e.decodeHTMLStrict =
				e.decodeHTML =
				e.decodeXML =
				e.encodeHTML5 =
				e.encodeHTML4 =
				e.escapeUTF8 =
				e.escape =
				e.encodeNonAsciiHTML =
				e.encodeHTML =
				e.encodeXML =
				e.encode =
				e.decodeStrict =
				e.decode =
					void 0);
		var t = He,
			r = qe;
		function n(l, u) {
			return (!u || u <= 0 ? t.decodeXML : t.decodeHTML)(l);
		}
		e.decode = n;
		function o(l, u) {
			return (!u || u <= 0 ? t.decodeXML : t.decodeHTMLStrict)(l);
		}
		e.decodeStrict = o;
		function s(l, u) {
			return (!u || u <= 0 ? r.encodeXML : r.encodeHTML)(l);
		}
		e.encode = s;
		var a = qe;
		Object.defineProperty(e, 'encodeXML', {
			enumerable: !0,
			get: function () {
				return a.encodeXML;
			},
		}),
			Object.defineProperty(e, 'encodeHTML', {
				enumerable: !0,
				get: function () {
					return a.encodeHTML;
				},
			}),
			Object.defineProperty(e, 'encodeNonAsciiHTML', {
				enumerable: !0,
				get: function () {
					return a.encodeNonAsciiHTML;
				},
			}),
			Object.defineProperty(e, 'escape', {
				enumerable: !0,
				get: function () {
					return a.escape;
				},
			}),
			Object.defineProperty(e, 'escapeUTF8', {
				enumerable: !0,
				get: function () {
					return a.escapeUTF8;
				},
			}),
			Object.defineProperty(e, 'encodeHTML4', {
				enumerable: !0,
				get: function () {
					return a.encodeHTML;
				},
			}),
			Object.defineProperty(e, 'encodeHTML5', {
				enumerable: !0,
				get: function () {
					return a.encodeHTML;
				},
			});
		var c = He;
		Object.defineProperty(e, 'decodeXML', {
			enumerable: !0,
			get: function () {
				return c.decodeXML;
			},
		}),
			Object.defineProperty(e, 'decodeHTML', {
				enumerable: !0,
				get: function () {
					return c.decodeHTML;
				},
			}),
			Object.defineProperty(e, 'decodeHTMLStrict', {
				enumerable: !0,
				get: function () {
					return c.decodeHTMLStrict;
				},
			}),
			Object.defineProperty(e, 'decodeHTML4', {
				enumerable: !0,
				get: function () {
					return c.decodeHTML;
				},
			}),
			Object.defineProperty(e, 'decodeHTML5', {
				enumerable: !0,
				get: function () {
					return c.decodeHTML;
				},
			}),
			Object.defineProperty(e, 'decodeHTML4Strict', {
				enumerable: !0,
				get: function () {
					return c.decodeHTMLStrict;
				},
			}),
			Object.defineProperty(e, 'decodeHTML5Strict', {
				enumerable: !0,
				get: function () {
					return c.decodeHTMLStrict;
				},
			}),
			Object.defineProperty(e, 'decodeXMLStrict', {
				enumerable: !0,
				get: function () {
					return c.decodeXML;
				},
			});
	})(wo);
	var bt = {};
	Object.defineProperty(bt, '__esModule', { value: !0 }),
		(bt.attributeNames = bt.elementNames = void 0),
		(bt.elementNames = new Map([
			['altglyph', 'altGlyph'],
			['altglyphdef', 'altGlyphDef'],
			['altglyphitem', 'altGlyphItem'],
			['animatecolor', 'animateColor'],
			['animatemotion', 'animateMotion'],
			['animatetransform', 'animateTransform'],
			['clippath', 'clipPath'],
			['feblend', 'feBlend'],
			['fecolormatrix', 'feColorMatrix'],
			['fecomponenttransfer', 'feComponentTransfer'],
			['fecomposite', 'feComposite'],
			['feconvolvematrix', 'feConvolveMatrix'],
			['fediffuselighting', 'feDiffuseLighting'],
			['fedisplacementmap', 'feDisplacementMap'],
			['fedistantlight', 'feDistantLight'],
			['fedropshadow', 'feDropShadow'],
			['feflood', 'feFlood'],
			['fefunca', 'feFuncA'],
			['fefuncb', 'feFuncB'],
			['fefuncg', 'feFuncG'],
			['fefuncr', 'feFuncR'],
			['fegaussianblur', 'feGaussianBlur'],
			['feimage', 'feImage'],
			['femerge', 'feMerge'],
			['femergenode', 'feMergeNode'],
			['femorphology', 'feMorphology'],
			['feoffset', 'feOffset'],
			['fepointlight', 'fePointLight'],
			['fespecularlighting', 'feSpecularLighting'],
			['fespotlight', 'feSpotLight'],
			['fetile', 'feTile'],
			['feturbulence', 'feTurbulence'],
			['foreignobject', 'foreignObject'],
			['glyphref', 'glyphRef'],
			['lineargradient', 'linearGradient'],
			['radialgradient', 'radialGradient'],
			['textpath', 'textPath'],
		])),
		(bt.attributeNames = new Map([
			['definitionurl', 'definitionURL'],
			['attributename', 'attributeName'],
			['attributetype', 'attributeType'],
			['basefrequency', 'baseFrequency'],
			['baseprofile', 'baseProfile'],
			['calcmode', 'calcMode'],
			['clippathunits', 'clipPathUnits'],
			['diffuseconstant', 'diffuseConstant'],
			['edgemode', 'edgeMode'],
			['filterunits', 'filterUnits'],
			['glyphref', 'glyphRef'],
			['gradienttransform', 'gradientTransform'],
			['gradientunits', 'gradientUnits'],
			['kernelmatrix', 'kernelMatrix'],
			['kernelunitlength', 'kernelUnitLength'],
			['keypoints', 'keyPoints'],
			['keysplines', 'keySplines'],
			['keytimes', 'keyTimes'],
			['lengthadjust', 'lengthAdjust'],
			['limitingconeangle', 'limitingConeAngle'],
			['markerheight', 'markerHeight'],
			['markerunits', 'markerUnits'],
			['markerwidth', 'markerWidth'],
			['maskcontentunits', 'maskContentUnits'],
			['maskunits', 'maskUnits'],
			['numoctaves', 'numOctaves'],
			['pathlength', 'pathLength'],
			['patterncontentunits', 'patternContentUnits'],
			['patterntransform', 'patternTransform'],
			['patternunits', 'patternUnits'],
			['pointsatx', 'pointsAtX'],
			['pointsaty', 'pointsAtY'],
			['pointsatz', 'pointsAtZ'],
			['preservealpha', 'preserveAlpha'],
			['preserveaspectratio', 'preserveAspectRatio'],
			['primitiveunits', 'primitiveUnits'],
			['refx', 'refX'],
			['refy', 'refY'],
			['repeatcount', 'repeatCount'],
			['repeatdur', 'repeatDur'],
			['requiredextensions', 'requiredExtensions'],
			['requiredfeatures', 'requiredFeatures'],
			['specularconstant', 'specularConstant'],
			['specularexponent', 'specularExponent'],
			['spreadmethod', 'spreadMethod'],
			['startoffset', 'startOffset'],
			['stddeviation', 'stdDeviation'],
			['stitchtiles', 'stitchTiles'],
			['surfacescale', 'surfaceScale'],
			['systemlanguage', 'systemLanguage'],
			['tablevalues', 'tableValues'],
			['targetx', 'targetX'],
			['targety', 'targetY'],
			['textlength', 'textLength'],
			['viewbox', 'viewBox'],
			['viewtarget', 'viewTarget'],
			['xchannelselector', 'xChannelSelector'],
			['ychannelselector', 'yChannelSelector'],
			['zoomandpan', 'zoomAndPan'],
		]));
	var vt =
			(q && q.__assign) ||
			function () {
				return (
					(vt =
						Object.assign ||
						function (e) {
							for (
								var t, r = 1, n = arguments.length;
								r < n;
								r++
							) {
								t = arguments[r];
								for (var o in t)
									Object.prototype.hasOwnProperty.call(
										t,
										o
									) && (e[o] = t[o]);
							}
							return e;
						}),
					vt.apply(this, arguments)
				);
			},
		Sc =
			(q && q.__createBinding) ||
			(Object.create
				? function (e, t, r, n) {
						n === void 0 && (n = r),
							Object.defineProperty(e, n, {
								enumerable: !0,
								get: function () {
									return t[r];
								},
							});
				  }
				: function (e, t, r, n) {
						n === void 0 && (n = r), (e[n] = t[r]);
				  }),
		Bc =
			(q && q.__setModuleDefault) ||
			(Object.create
				? function (e, t) {
						Object.defineProperty(e, 'default', {
							enumerable: !0,
							value: t,
						});
				  }
				: function (e, t) {
						e.default = t;
				  }),
		Tc =
			(q && q.__importStar) ||
			function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (e != null)
					for (var r in e)
						r !== 'default' &&
							Object.prototype.hasOwnProperty.call(e, r) &&
							Sc(t, e, r);
				return Bc(t, e), t;
			};
	Object.defineProperty(Yr, '__esModule', { value: !0 });
	var je = Tc(ft),
		Po = wo,
		Oo = bt,
		kc = new Set([
			'style',
			'script',
			'xmp',
			'iframe',
			'noembed',
			'noframes',
			'plaintext',
			'noscript',
		]);
	function Lc(e, t) {
		if (!!e)
			return Object.keys(e)
				.map(function (r) {
					var n,
						o,
						s = (n = e[r]) !== null && n !== void 0 ? n : '';
					return (
						t.xmlMode === 'foreign' &&
							(r =
								(o = Oo.attributeNames.get(r)) !== null &&
								o !== void 0
									? o
									: r),
						!t.emptyAttrs && !t.xmlMode && s === ''
							? r
							: r +
							  '="' +
							  (t.decodeEntities !== !1
									? Po.encodeXML(s)
									: s.replace(/"/g, '&quot;')) +
							  '"'
					);
				})
				.join(' ');
	}
	var Io = new Set([
		'area',
		'base',
		'basefont',
		'br',
		'col',
		'command',
		'embed',
		'frame',
		'hr',
		'img',
		'input',
		'isindex',
		'keygen',
		'link',
		'meta',
		'param',
		'source',
		'track',
		'wbr',
	]);
	function Qr(e, t) {
		t === void 0 && (t = {});
		for (
			var r = ('length' in e) ? e : [e], n = '', o = 0;
			o < r.length;
			o++
		)
			n += Fc(r[o], t);
		return n;
	}
	Yr.default = Qr;
	function Fc(e, t) {
		switch (e.type) {
			case je.Root:
				return Qr(e.children, t);
			case je.Directive:
			case je.Doctype:
				return Oc(e);
			case je.Comment:
				return Uc(e);
			case je.CDATA:
				return Rc(e);
			case je.Script:
			case je.Style:
			case je.Tag:
				return Pc(e, t);
			case je.Text:
				return Ic(e, t);
		}
	}
	var _c = new Set([
			'mi',
			'mo',
			'mn',
			'ms',
			'mtext',
			'annotation-xml',
			'foreignObject',
			'desc',
			'title',
		]),
		Nc = new Set(['svg', 'math']);
	function Pc(e, t) {
		var r;
		t.xmlMode === 'foreign' &&
			((e.name =
				(r = Oo.elementNames.get(e.name)) !== null && r !== void 0
					? r
					: e.name),
			e.parent &&
				_c.has(e.parent.name) &&
				(t = vt(vt({}, t), { xmlMode: !1 }))),
			!t.xmlMode &&
				Nc.has(e.name) &&
				(t = vt(vt({}, t), { xmlMode: 'foreign' }));
		var n = '<' + e.name,
			o = Lc(e.attribs, t);
		return (
			o && (n += ' ' + o),
			e.children.length === 0 &&
			(t.xmlMode
				? t.selfClosingTags !== !1
				: t.selfClosingTags && Io.has(e.name))
				? (t.xmlMode || (n += ' '), (n += '/>'))
				: ((n += '>'),
				  e.children.length > 0 && (n += Qr(e.children, t)),
				  (t.xmlMode || !Io.has(e.name)) && (n += '</' + e.name + '>')),
			n
		);
	}
	function Oc(e) {
		return '<' + e.data + '>';
	}
	function Ic(e, t) {
		var r = e.data || '';
		return (
			t.decodeEntities !== !1 &&
				!(!t.xmlMode && e.parent && kc.has(e.parent.name)) &&
				(r = Po.encodeXML(r)),
			r
		);
	}
	function Rc(e) {
		return '<![CDATA[' + e.children[0].data + ']]>';
	}
	function Uc(e) {
		return '<!--' + e.data + '-->';
	}
	var Vc =
		(q && q.__importDefault) ||
		function (e) {
			return e && e.__esModule ? e : { default: e };
		};
	Object.defineProperty(Ce, '__esModule', { value: !0 }),
		(Ce.innerText =
			Ce.textContent =
			Ce.getText =
			Ce.getInnerHTML =
			Ce.getOuterHTML =
				void 0);
	var Ve = Ie,
		$c = Vc(Yr),
		Mc = ft;
	function Ro(e, t) {
		return (0, $c.default)(e, t);
	}
	Ce.getOuterHTML = Ro;
	function Hc(e, t) {
		return (0, Ve.hasChildren)(e)
			? e.children
					.map(function (r) {
						return Ro(r, t);
					})
					.join('')
			: '';
	}
	Ce.getInnerHTML = Hc;
	function lr(e) {
		return Array.isArray(e)
			? e.map(lr).join('')
			: (0, Ve.isTag)(e)
			? e.name === 'br'
				? `
`
				: lr(e.children)
			: (0, Ve.isCDATA)(e)
			? lr(e.children)
			: (0, Ve.isText)(e)
			? e.data
			: '';
	}
	Ce.getText = lr;
	function Kr(e) {
		return Array.isArray(e)
			? e.map(Kr).join('')
			: (0, Ve.hasChildren)(e) && !(0, Ve.isComment)(e)
			? Kr(e.children)
			: (0, Ve.isText)(e)
			? e.data
			: '';
	}
	Ce.textContent = Kr;
	function en(e) {
		return Array.isArray(e)
			? e.map(en).join('')
			: (0, Ve.hasChildren)(e) &&
			  (e.type === Mc.ElementType.Tag || (0, Ve.isCDATA)(e))
			? en(e.children)
			: (0, Ve.isText)(e)
			? e.data
			: '';
	}
	Ce.innerText = en;
	var le = {};
	Object.defineProperty(le, '__esModule', { value: !0 }),
		(le.prevElementSibling =
			le.nextElementSibling =
			le.getName =
			le.hasAttrib =
			le.getAttributeValue =
			le.getSiblings =
			le.getParent =
			le.getChildren =
				void 0);
	var Uo = Ie,
		jc = [];
	function Vo(e) {
		var t;
		return (t = e.children) !== null && t !== void 0 ? t : jc;
	}
	le.getChildren = Vo;
	function $o(e) {
		return e.parent || null;
	}
	le.getParent = $o;
	function Gc(e) {
		var t,
			r,
			n = $o(e);
		if (n != null) return Vo(n);
		for (var o = [e], s = e.prev, a = e.next; s != null; )
			o.unshift(s), (t = s), (s = t.prev);
		for (; a != null; ) o.push(a), (r = a), (a = r.next);
		return o;
	}
	le.getSiblings = Gc;
	function zc(e, t) {
		var r;
		return (r = e.attribs) === null || r === void 0 ? void 0 : r[t];
	}
	le.getAttributeValue = zc;
	function Wc(e, t) {
		return (
			e.attribs != null &&
			Object.prototype.hasOwnProperty.call(e.attribs, t) &&
			e.attribs[t] != null
		);
	}
	le.hasAttrib = Wc;
	function Jc(e) {
		return e.name;
	}
	le.getName = Jc;
	function Yc(e) {
		for (var t, r = e.next; r !== null && !(0, Uo.isTag)(r); )
			(t = r), (r = t.next);
		return r;
	}
	le.nextElementSibling = Yc;
	function Zc(e) {
		for (var t, r = e.prev; r !== null && !(0, Uo.isTag)(r); )
			(t = r), (r = t.prev);
		return r;
	}
	le.prevElementSibling = Zc;
	var ve = {};
	Object.defineProperty(ve, '__esModule', { value: !0 }),
		(ve.prepend =
			ve.prependChild =
			ve.append =
			ve.appendChild =
			ve.replaceElement =
			ve.removeElement =
				void 0);
	function Lt(e) {
		if (
			(e.prev && (e.prev.next = e.next),
			e.next && (e.next.prev = e.prev),
			e.parent)
		) {
			var t = e.parent.children;
			t.splice(t.lastIndexOf(e), 1);
		}
	}
	ve.removeElement = Lt;
	function Xc(e, t) {
		var r = (t.prev = e.prev);
		r && (r.next = t);
		var n = (t.next = e.next);
		n && (n.prev = t);
		var o = (t.parent = e.parent);
		if (o) {
			var s = o.children;
			s[s.lastIndexOf(e)] = t;
		}
	}
	ve.replaceElement = Xc;
	function Qc(e, t) {
		if ((Lt(t), (t.next = null), (t.parent = e), e.children.push(t) > 1)) {
			var r = e.children[e.children.length - 2];
			(r.next = t), (t.prev = r);
		} else t.prev = null;
	}
	ve.appendChild = Qc;
	function Kc(e, t) {
		Lt(t);
		var r = e.parent,
			n = e.next;
		if (((t.next = n), (t.prev = e), (e.next = t), (t.parent = r), n)) {
			if (((n.prev = t), r)) {
				var o = r.children;
				o.splice(o.lastIndexOf(n), 0, t);
			}
		} else r && r.children.push(t);
	}
	ve.append = Kc;
	function el(e, t) {
		if (
			(Lt(t),
			(t.parent = e),
			(t.prev = null),
			e.children.unshift(t) !== 1)
		) {
			var r = e.children[1];
			(r.prev = t), (t.next = r);
		} else t.next = null;
	}
	ve.prependChild = el;
	function tl(e, t) {
		Lt(t);
		var r = e.parent;
		if (r) {
			var n = r.children;
			n.splice(n.indexOf(e), 0, t);
		}
		e.prev && (e.prev.next = t),
			(t.parent = r),
			(t.prev = e.prev),
			(t.next = e),
			(e.prev = t);
	}
	ve.prepend = tl;
	var ge = {};
	Object.defineProperty(ge, '__esModule', { value: !0 }),
		(ge.findAll =
			ge.existsOne =
			ge.findOne =
			ge.findOneChild =
			ge.find =
			ge.filter =
				void 0);
	var Ft = Ie;
	function rl(e, t, r, n) {
		return (
			r === void 0 && (r = !0),
			n === void 0 && (n = 1 / 0),
			Array.isArray(t) || (t = [t]),
			tn(e, t, r, n)
		);
	}
	ge.filter = rl;
	function tn(e, t, r, n) {
		for (var o = [], s = 0, a = t; s < a.length; s++) {
			var c = a[s];
			if (e(c) && (o.push(c), --n <= 0)) break;
			if (r && (0, Ft.hasChildren)(c) && c.children.length > 0) {
				var l = tn(e, c.children, r, n);
				if ((o.push.apply(o, l), (n -= l.length), n <= 0)) break;
			}
		}
		return o;
	}
	ge.find = tn;
	function nl(e, t) {
		return t.find(e);
	}
	ge.findOneChild = nl;
	function Mo(e, t, r) {
		r === void 0 && (r = !0);
		for (var n = null, o = 0; o < t.length && !n; o++) {
			var s = t[o];
			if ((0, Ft.isTag)(s))
				e(s)
					? (n = s)
					: r && s.children.length > 0 && (n = Mo(e, s.children));
			else continue;
		}
		return n;
	}
	ge.findOne = Mo;
	function Ho(e, t) {
		return t.some(function (r) {
			return (
				(0, Ft.isTag)(r) &&
				(e(r) || (r.children.length > 0 && Ho(e, r.children)))
			);
		});
	}
	ge.existsOne = Ho;
	function ol(e, t) {
		for (var r, n = [], o = t.filter(Ft.isTag), s; (s = o.shift()); ) {
			var a =
				(r = s.children) === null || r === void 0
					? void 0
					: r.filter(Ft.isTag);
			a && a.length > 0 && o.unshift.apply(o, a), e(s) && n.push(s);
		}
		return n;
	}
	ge.findAll = ol;
	var Se = {};
	Object.defineProperty(Se, '__esModule', { value: !0 }),
		(Se.getElementsByTagType =
			Se.getElementsByTagName =
			Se.getElementById =
			Se.getElements =
			Se.testElement =
				void 0);
	var nt = Ie,
		fr = ge,
		pr = {
			tag_name: function (e) {
				return typeof e == 'function'
					? function (t) {
							return (0, nt.isTag)(t) && e(t.name);
					  }
					: e === '*'
					? nt.isTag
					: function (t) {
							return (0, nt.isTag)(t) && t.name === e;
					  };
			},
			tag_type: function (e) {
				return typeof e == 'function'
					? function (t) {
							return e(t.type);
					  }
					: function (t) {
							return t.type === e;
					  };
			},
			tag_contains: function (e) {
				return typeof e == 'function'
					? function (t) {
							return (0, nt.isText)(t) && e(t.data);
					  }
					: function (t) {
							return (0, nt.isText)(t) && t.data === e;
					  };
			},
		};
	function jo(e, t) {
		return typeof t == 'function'
			? function (r) {
					return (0, nt.isTag)(r) && t(r.attribs[e]);
			  }
			: function (r) {
					return (0, nt.isTag)(r) && r.attribs[e] === t;
			  };
	}
	function sl(e, t) {
		return function (r) {
			return e(r) || t(r);
		};
	}
	function Go(e) {
		var t = Object.keys(e).map(function (r) {
			var n = e[r];
			return Object.prototype.hasOwnProperty.call(pr, r)
				? pr[r](n)
				: jo(r, n);
		});
		return t.length === 0 ? null : t.reduce(sl);
	}
	function al(e, t) {
		var r = Go(e);
		return r ? r(t) : !0;
	}
	Se.testElement = al;
	function ul(e, t, r, n) {
		n === void 0 && (n = 1 / 0);
		var o = Go(e);
		return o ? (0, fr.filter)(o, t, r, n) : [];
	}
	Se.getElements = ul;
	function il(e, t, r) {
		return (
			r === void 0 && (r = !0),
			Array.isArray(t) || (t = [t]),
			(0, fr.findOne)(jo('id', e), t, r)
		);
	}
	Se.getElementById = il;
	function cl(e, t, r, n) {
		return (
			r === void 0 && (r = !0),
			n === void 0 && (n = 1 / 0),
			(0, fr.filter)(pr.tag_name(e), t, r, n)
		);
	}
	Se.getElementsByTagName = cl;
	function ll(e, t, r, n) {
		return (
			r === void 0 && (r = !0),
			n === void 0 && (n = 1 / 0),
			(0, fr.filter)(pr.tag_type(e), t, r, n)
		);
	}
	Se.getElementsByTagType = ll;
	var Xe = {};
	Object.defineProperty(Xe, '__esModule', { value: !0 }),
		(Xe.uniqueSort =
			Xe.compareDocumentPosition =
			Xe.removeSubsets =
				void 0);
	var zo = Ie;
	function fl(e) {
		for (var t = e.length; --t >= 0; ) {
			var r = e[t];
			if (t > 0 && e.lastIndexOf(r, t - 1) >= 0) {
				e.splice(t, 1);
				continue;
			}
			for (var n = r.parent; n; n = n.parent)
				if (e.includes(n)) {
					e.splice(t, 1);
					break;
				}
		}
		return e;
	}
	Xe.removeSubsets = fl;
	function Wo(e, t) {
		var r = [],
			n = [];
		if (e === t) return 0;
		for (var o = (0, zo.hasChildren)(e) ? e : e.parent; o; )
			r.unshift(o), (o = o.parent);
		for (o = (0, zo.hasChildren)(t) ? t : t.parent; o; )
			n.unshift(o), (o = o.parent);
		for (
			var s = Math.min(r.length, n.length), a = 0;
			a < s && r[a] === n[a];

		)
			a++;
		if (a === 0) return 1;
		var c = r[a - 1],
			l = c.children,
			u = r[a],
			i = n[a];
		return l.indexOf(u) > l.indexOf(i)
			? c === t
				? 4 | 16
				: 4
			: c === e
			? 2 | 8
			: 2;
	}
	Xe.compareDocumentPosition = Wo;
	function pl(e) {
		return (
			(e = e.filter(function (t, r, n) {
				return !n.includes(t, r + 1);
			})),
			e.sort(function (t, r) {
				var n = Wo(t, r);
				return n & 2 ? -1 : n & 4 ? 1 : 0;
			}),
			e
		);
	}
	Xe.uniqueSort = pl;
	var dr = {};
	Object.defineProperty(dr, '__esModule', { value: !0 }),
		(dr.getFeed = void 0);
	var dl = Ce,
		_t = Se;
	function hl(e) {
		var t = hr(Dl, e);
		return t ? (t.name === 'feed' ? ml(t) : gl(t)) : null;
	}
	dr.getFeed = hl;
	function ml(e) {
		var t,
			r = e.children,
			n = {
				type: 'atom',
				items: (0, _t.getElementsByTagName)('entry', r).map(function (
					a
				) {
					var c,
						l = a.children,
						u = { media: Jo(l) };
					De(u, 'id', 'id', l), De(u, 'title', 'title', l);
					var i =
						(c = hr('link', l)) === null || c === void 0
							? void 0
							: c.attribs.href;
					i && (u.link = i);
					var f = ot('summary', l) || ot('content', l);
					f && (u.description = f);
					var h = ot('updated', l);
					return h && (u.pubDate = new Date(h)), u;
				}),
			};
		De(n, 'id', 'id', r), De(n, 'title', 'title', r);
		var o =
			(t = hr('link', r)) === null || t === void 0
				? void 0
				: t.attribs.href;
		o && (n.link = o), De(n, 'description', 'subtitle', r);
		var s = ot('updated', r);
		return (
			s && (n.updated = new Date(s)), De(n, 'author', 'email', r, !0), n
		);
	}
	function gl(e) {
		var t,
			r,
			n =
				(r =
					(t = hr('channel', e.children)) === null || t === void 0
						? void 0
						: t.children) !== null && r !== void 0
					? r
					: [],
			o = {
				type: e.name.substr(0, 3),
				id: '',
				items: (0, _t.getElementsByTagName)('item', e.children).map(
					function (a) {
						var c = a.children,
							l = { media: Jo(c) };
						De(l, 'id', 'guid', c),
							De(l, 'title', 'title', c),
							De(l, 'link', 'link', c),
							De(l, 'description', 'description', c);
						var u = ot('pubDate', c);
						return u && (l.pubDate = new Date(u)), l;
					}
				),
			};
		De(o, 'title', 'title', n),
			De(o, 'link', 'link', n),
			De(o, 'description', 'description', n);
		var s = ot('lastBuildDate', n);
		return (
			s && (o.updated = new Date(s)),
			De(o, 'author', 'managingEditor', n, !0),
			o
		);
	}
	var bl = ['url', 'type', 'lang'],
		vl = [
			'fileSize',
			'bitrate',
			'framerate',
			'samplingrate',
			'channels',
			'duration',
			'height',
			'width',
		];
	function Jo(e) {
		return (0, _t.getElementsByTagName)('media:content', e).map(function (
			t
		) {
			for (
				var r = t.attribs,
					n = { medium: r.medium, isDefault: !!r.isDefault },
					o = 0,
					s = bl;
				o < s.length;
				o++
			) {
				var a = s[o];
				r[a] && (n[a] = r[a]);
			}
			for (var c = 0, l = vl; c < l.length; c++) {
				var a = l[c];
				r[a] && (n[a] = parseInt(r[a], 10));
			}
			return r.expression && (n.expression = r.expression), n;
		});
	}
	function hr(e, t) {
		return (0, _t.getElementsByTagName)(e, t, !0, 1)[0];
	}
	function ot(e, t, r) {
		return (
			r === void 0 && (r = !1),
			(0, dl.textContent)((0, _t.getElementsByTagName)(e, t, r, 1)).trim()
		);
	}
	function De(e, t, r, n, o) {
		o === void 0 && (o = !1);
		var s = ot(r, n, o);
		s && (e[t] = s);
	}
	function Dl(e) {
		return e === 'rss' || e === 'feed' || e === 'rdf:RDF';
	}
	(function (e) {
		var t =
				(q && q.__createBinding) ||
				(Object.create
					? function (o, s, a, c) {
							c === void 0 && (c = a),
								Object.defineProperty(o, c, {
									enumerable: !0,
									get: function () {
										return s[a];
									},
								});
					  }
					: function (o, s, a, c) {
							c === void 0 && (c = a), (o[c] = s[a]);
					  }),
			r =
				(q && q.__exportStar) ||
				function (o, s) {
					for (var a in o)
						a !== 'default' &&
							!Object.prototype.hasOwnProperty.call(s, a) &&
							t(s, o, a);
				};
		Object.defineProperty(e, '__esModule', { value: !0 }),
			(e.hasChildren =
				e.isDocument =
				e.isComment =
				e.isText =
				e.isCDATA =
				e.isTag =
					void 0),
			r(Ce, e),
			r(le, e),
			r(ve, e),
			r(ge, e),
			r(Se, e),
			r(Xe, e),
			r(dr, e);
		var n = Ie;
		Object.defineProperty(e, 'isTag', {
			enumerable: !0,
			get: function () {
				return n.isTag;
			},
		}),
			Object.defineProperty(e, 'isCDATA', {
				enumerable: !0,
				get: function () {
					return n.isCDATA;
				},
			}),
			Object.defineProperty(e, 'isText', {
				enumerable: !0,
				get: function () {
					return n.isText;
				},
			}),
			Object.defineProperty(e, 'isComment', {
				enumerable: !0,
				get: function () {
					return n.isComment;
				},
			}),
			Object.defineProperty(e, 'isDocument', {
				enumerable: !0,
				get: function () {
					return n.isDocument;
				},
			}),
			Object.defineProperty(e, 'hasChildren', {
				enumerable: !0,
				get: function () {
					return n.hasChildren;
				},
			});
	})(Jr);
	var yl =
			(q && q.__extends) ||
			(function () {
				var e = function (t, r) {
					return (
						(e =
							Object.setPrototypeOf ||
							({ __proto__: [] } instanceof Array &&
								function (n, o) {
									n.__proto__ = o;
								}) ||
							function (n, o) {
								for (var s in o)
									Object.prototype.hasOwnProperty.call(
										o,
										s
									) && (n[s] = o[s]);
							}),
						e(t, r)
					);
				};
				return function (t, r) {
					if (typeof r != 'function' && r !== null)
						throw new TypeError(
							'Class extends value ' +
								String(r) +
								' is not a constructor or null'
						);
					e(t, r);
					function n() {
						this.constructor = t;
					}
					t.prototype =
						r === null
							? Object.create(r)
							: ((n.prototype = r.prototype), new n());
				};
			})(),
		Al =
			(q && q.__createBinding) ||
			(Object.create
				? function (e, t, r, n) {
						n === void 0 && (n = r),
							Object.defineProperty(e, n, {
								enumerable: !0,
								get: function () {
									return t[r];
								},
							});
				  }
				: function (e, t, r, n) {
						n === void 0 && (n = r), (e[n] = t[r]);
				  }),
		wl =
			(q && q.__setModuleDefault) ||
			(Object.create
				? function (e, t) {
						Object.defineProperty(e, 'default', {
							enumerable: !0,
							value: t,
						});
				  }
				: function (e, t) {
						e.default = t;
				  }),
		El =
			(q && q.__importStar) ||
			function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (e != null)
					for (var r in e)
						r !== 'default' &&
							Object.prototype.hasOwnProperty.call(e, r) &&
							Al(t, e, r);
				return wl(t, e), t;
			},
		xl =
			(q && q.__importDefault) ||
			function (e) {
				return e && e.__esModule ? e : { default: e };
			};
	Object.defineProperty(rt, '__esModule', { value: !0 }),
		(rt.parseFeed = rt.FeedHandler = void 0);
	var Cl = xl(Ie),
		mr = El(Jr),
		ql = kt,
		Yo;
	(function (e) {
		(e[(e.image = 0)] = 'image'),
			(e[(e.audio = 1)] = 'audio'),
			(e[(e.video = 2)] = 'video'),
			(e[(e.document = 3)] = 'document'),
			(e[(e.executable = 4)] = 'executable');
	})(Yo || (Yo = {}));
	var Zo;
	(function (e) {
		(e[(e.sample = 0)] = 'sample'),
			(e[(e.full = 1)] = 'full'),
			(e[(e.nonstop = 2)] = 'nonstop');
	})(Zo || (Zo = {}));
	var Xo = (function (e) {
		yl(t, e);
		function t(r, n) {
			var o = this;
			return (
				typeof r == 'object' && ((r = void 0), (n = r)),
				(o = e.call(this, r, n) || this),
				o
			);
		}
		return (
			(t.prototype.onend = function () {
				var r,
					n,
					o = gr(Sl, this.dom);
				if (!o) {
					this.handleCallback(
						new Error("couldn't find root of feed")
					);
					return;
				}
				var s = {};
				if (o.name === 'feed') {
					var a = o.children;
					(s.type = 'atom'),
						ye(s, 'id', 'id', a),
						ye(s, 'title', 'title', a);
					var c = Ko('href', gr('link', a));
					c && (s.link = c), ye(s, 'description', 'subtitle', a);
					var l = st('updated', a);
					l && (s.updated = new Date(l)),
						ye(s, 'author', 'email', a, !0),
						(s.items = rn('entry', a).map(function (u) {
							var i = {},
								f = u.children;
							ye(i, 'id', 'id', f), ye(i, 'title', 'title', f);
							var h = Ko('href', gr('link', f));
							h && (i.link = h);
							var g = st('summary', f) || st('content', f);
							g && (i.description = g);
							var p = st('updated', f);
							return (
								p && (i.pubDate = new Date(p)),
								(i.media = Qo(f)),
								i
							);
						}));
				} else {
					var a =
						(n =
							(r = gr('channel', o.children)) === null ||
							r === void 0
								? void 0
								: r.children) !== null && n !== void 0
							? n
							: [];
					(s.type = o.name.substr(0, 3)),
						(s.id = ''),
						ye(s, 'title', 'title', a),
						ye(s, 'link', 'link', a),
						ye(s, 'description', 'description', a);
					var l = st('lastBuildDate', a);
					l && (s.updated = new Date(l)),
						ye(s, 'author', 'managingEditor', a, !0),
						(s.items = rn('item', o.children).map(function (f) {
							var h = {},
								g = f.children;
							ye(h, 'id', 'guid', g),
								ye(h, 'title', 'title', g),
								ye(h, 'link', 'link', g),
								ye(h, 'description', 'description', g);
							var p = st('pubDate', g);
							return (
								p && (h.pubDate = new Date(p)),
								(h.media = Qo(g)),
								h
							);
						}));
				}
				(this.feed = s), this.handleCallback(null);
			}),
			t
		);
	})(Cl.default);
	rt.FeedHandler = Xo;
	function Qo(e) {
		return rn('media:content', e).map(function (t) {
			var r = {
				medium: t.attribs.medium,
				isDefault: !!t.attribs.isDefault,
			};
			return (
				t.attribs.url && (r.url = t.attribs.url),
				t.attribs.fileSize &&
					(r.fileSize = parseInt(t.attribs.fileSize, 10)),
				t.attribs.type && (r.type = t.attribs.type),
				t.attribs.expression && (r.expression = t.attribs.expression),
				t.attribs.bitrate &&
					(r.bitrate = parseInt(t.attribs.bitrate, 10)),
				t.attribs.framerate &&
					(r.framerate = parseInt(t.attribs.framerate, 10)),
				t.attribs.samplingrate &&
					(r.samplingrate = parseInt(t.attribs.samplingrate, 10)),
				t.attribs.channels &&
					(r.channels = parseInt(t.attribs.channels, 10)),
				t.attribs.duration &&
					(r.duration = parseInt(t.attribs.duration, 10)),
				t.attribs.height && (r.height = parseInt(t.attribs.height, 10)),
				t.attribs.width && (r.width = parseInt(t.attribs.width, 10)),
				t.attribs.lang && (r.lang = t.attribs.lang),
				r
			);
		});
	}
	function rn(e, t) {
		return mr.getElementsByTagName(e, t, !0);
	}
	function gr(e, t) {
		return mr.getElementsByTagName(e, t, !0, 1)[0];
	}
	function st(e, t, r) {
		return (
			r === void 0 && (r = !1),
			mr.getText(mr.getElementsByTagName(e, t, r, 1)).trim()
		);
	}
	function Ko(e, t) {
		if (!t) return null;
		var r = t.attribs;
		return r[e];
	}
	function ye(e, t, r, n, o) {
		o === void 0 && (o = !1);
		var s = st(r, n, o);
		s && (e[t] = s);
	}
	function Sl(e) {
		return e === 'rss' || e === 'feed' || e === 'rdf:RDF';
	}
	function Bl(e, t) {
		t === void 0 && (t = { xmlMode: !0 });
		var r = new Xo(t);
		return new ql.Parser(r, t).end(e), r.feed;
	}
	(rt.parseFeed = Bl),
		(function (e) {
			var t =
					(q && q.__createBinding) ||
					(Object.create
						? function (p, D, y, C) {
								C === void 0 && (C = y),
									Object.defineProperty(p, C, {
										enumerable: !0,
										get: function () {
											return D[y];
										},
									});
						  }
						: function (p, D, y, C) {
								C === void 0 && (C = y), (p[C] = D[y]);
						  }),
				r =
					(q && q.__setModuleDefault) ||
					(Object.create
						? function (p, D) {
								Object.defineProperty(p, 'default', {
									enumerable: !0,
									value: D,
								});
						  }
						: function (p, D) {
								p.default = D;
						  }),
				n =
					(q && q.__importStar) ||
					function (p) {
						if (p && p.__esModule) return p;
						var D = {};
						if (p != null)
							for (var y in p)
								y !== 'default' &&
									Object.prototype.hasOwnProperty.call(
										p,
										y
									) &&
									t(D, p, y);
						return r(D, p), D;
					},
				o =
					(q && q.__exportStar) ||
					function (p, D) {
						for (var y in p)
							y !== 'default' &&
								!Object.prototype.hasOwnProperty.call(D, y) &&
								t(D, p, y);
					},
				s =
					(q && q.__importDefault) ||
					function (p) {
						return p && p.__esModule ? p : { default: p };
					};
			Object.defineProperty(e, '__esModule', { value: !0 }),
				(e.RssHandler =
					e.DefaultHandler =
					e.DomUtils =
					e.ElementType =
					e.Tokenizer =
					e.createDomStream =
					e.parseDOM =
					e.parseDocument =
					e.DomHandler =
					e.Parser =
						void 0);
			var a = kt;
			Object.defineProperty(e, 'Parser', {
				enumerable: !0,
				get: function () {
					return a.Parser;
				},
			});
			var c = Ie;
			Object.defineProperty(e, 'DomHandler', {
				enumerable: !0,
				get: function () {
					return c.DomHandler;
				},
			}),
				Object.defineProperty(e, 'DefaultHandler', {
					enumerable: !0,
					get: function () {
						return c.DomHandler;
					},
				});
			function l(p, D) {
				var y = new c.DomHandler(void 0, D);
				return new a.Parser(y, D).end(p), y.root;
			}
			e.parseDocument = l;
			function u(p, D) {
				return l(p, D).children;
			}
			e.parseDOM = u;
			function i(p, D, y) {
				var C = new c.DomHandler(p, D, y);
				return new a.Parser(C, D);
			}
			e.createDomStream = i;
			var f = sr;
			Object.defineProperty(e, 'Tokenizer', {
				enumerable: !0,
				get: function () {
					return s(f).default;
				},
			});
			var h = n(ft);
			(e.ElementType = h), o(rt, e), (e.DomUtils = n(Jr));
			var g = rt;
			Object.defineProperty(e, 'RssHandler', {
				enumerable: !0,
				get: function () {
					return g.FeedHandler;
				},
			});
		})(mo);
	const Tl = ho;
	function kl(e) {
		const t = [],
			r = [];
		for (const n of e)
			n.startsWith('.')
				? t.push(n.substring(1))
				: n.startsWith('#') && r.push(n.substring(1));
		return { classes: t, ids: r };
	}
	function es(e, t, r = () => {}) {
		if (e === void 0) {
			const n = function (...o) {
				return t(n, ...o);
			};
			return n;
		}
		return e >= 0
			? function (...n) {
					return t(es(e - 1, t, r), ...n);
			  }
			: r;
	}
	function Ll(e, t = 'a', r = 26) {
		const n = [];
		do (e -= 1), n.push(e % r), (e = (e / r) >> 0);
		while (e > 0);
		const o = t.charCodeAt(0);
		return n
			.reverse()
			.map((s) => String.fromCharCode(o + s))
			.join('');
	}
	const nn = ['I', 'X', 'C', 'M'],
		ts = ['V', 'L', 'D'];
	function Fl(e) {
		return [...(e + '')]
			.map((t) => +t)
			.reverse()
			.map((t, r) =>
				t % 5 < 4
					? (t < 5 ? '' : ts[r]) + nn[r].repeat(t % 5)
					: nn[r] + (t < 5 ? ts[r] : nn[r + 1])
			)
			.reverse()
			.join('');
	}
	function _l(e, t) {
		let r = 0,
			n = e.length;
		for (; r < n && e[r] === t; ) ++r;
		for (; n > r && e[n - 1] === t; ) --n;
		return r > 0 || n < e.length ? e.substring(r, n) : e;
	}
	function Nl(e, t) {
		for (const r of t) {
			if (!e) return;
			e = e[r];
		}
		return e;
	}
	function Pl(e, t, r) {
		const n = t.pop();
		for (const o of t) {
			let s = e[o];
			s || ((s = {}), (e[o] = s)), (e = s);
		}
		e[n] = r;
	}
	function Ol(e, t) {
		const r = new Map();
		for (let n = e.length; n-- > 0; ) {
			const o = e[n],
				s = t(o);
			r.set(s, r.has(s) ? Tl(o, r.get(s), { arrayMerge: Il }) : o);
		}
		return [...r.values()].reverse();
	}
	const Il = (e, t, r) => [...t];
	var on = {
		get: Nl,
		limitedDepthRecursive: es,
		mergeDuplicatesPreferLast: Ol,
		numberToLetterSequence: Ll,
		numberToRoman: Fl,
		set: Pl,
		splitClassesAndIds: kl,
		trimCharacter: _l,
	};
	class Rl {
		constructor(t, r = void 0) {
			(this.lines = []),
				(this.nextLineWords = []),
				(this.maxLineLength = r || t.wordwrap || Number.MAX_VALUE),
				(this.nextLineAvailableChars = this.maxLineLength),
				(this.wrapCharacters = t.longWordSplit.wrapCharacters || []),
				(this.forceWrapOnLimit =
					t.longWordSplit.forceWrapOnLimit || !1),
				(this.stashedSpace = !1),
				(this.wordBreakOpportunity = !1);
		}
		pushWord(t) {
			this.nextLineAvailableChars <= 0 && this.startNewLine();
			const r = this.nextLineWords.length === 0,
				n = t.length + (r ? 0 : 1);
			if (n <= this.nextLineAvailableChars)
				this.nextLineWords.push(t), (this.nextLineAvailableChars -= n);
			else {
				const [o, ...s] = this.splitLongWord(t);
				r || this.startNewLine(),
					this.nextLineWords.push(o),
					(this.nextLineAvailableChars -= o.length);
				for (const a of s)
					this.startNewLine(),
						this.nextLineWords.push(a),
						(this.nextLineAvailableChars -= a.length);
			}
		}
		popWord() {
			const t = this.nextLineWords.pop();
			if (t !== void 0) {
				const r = this.nextLineWords.length === 0,
					n = t.length + (r ? 0 : 1);
				this.nextLineAvailableChars += n;
			}
			return t;
		}
		concatWord(t) {
			if (
				this.wordBreakOpportunity &&
				t.length > this.nextLineAvailableChars
			)
				this.pushWord(t), (this.wordBreakOpportunity = !1);
			else {
				const r = this.popWord();
				this.pushWord(r ? r.concat(t) : t);
			}
		}
		startNewLine(t = 1) {
			this.lines.push(this.nextLineWords),
				t > 1 &&
					this.lines.push(...Array.from({ length: t - 1 }, () => [])),
				(this.nextLineWords = []),
				(this.nextLineAvailableChars = this.maxLineLength);
		}
		isEmpty() {
			return this.lines.length === 0 && this.nextLineWords.length === 0;
		}
		clear() {
			(this.lines.length = 0),
				(this.nextLineWords.length = 0),
				(this.nextLineAvailableChars = this.maxLineLength);
		}
		toString() {
			return [...this.lines, this.nextLineWords].map((t) =>
				t.join(' ')
			).join(`
`);
		}
		splitLongWord(t) {
			const r = [];
			let n = 0;
			for (; t.length > this.maxLineLength; ) {
				const o = t.substring(0, this.maxLineLength),
					s = t.substring(this.maxLineLength),
					a = o.lastIndexOf(this.wrapCharacters[n]);
				if (a > -1)
					(t = o.substring(a + 1) + s), r.push(o.substring(0, a + 1));
				else if ((n++, n < this.wrapCharacters.length)) t = o + s;
				else {
					if (this.forceWrapOnLimit) {
						if ((r.push(o), (t = s), t.length > this.maxLineLength))
							continue;
					} else t = o + s;
					break;
				}
			}
			return r.push(t), r;
		}
	}
	var Ul = { InlineTextBuilder: Rl };
	const { InlineTextBuilder: rs } = Ul;
	class Dt {
		constructor(t = null) {
			this.next = t;
		}
		getRoot() {
			return this.next ? this.next : this;
		}
	}
	class Vl extends Dt {
		constructor(t, r = null, n = 1, o = void 0) {
			super(r);
			(this.leadingLineBreaks = n),
				(this.inlineTextBuilder = new rs(t, o)),
				(this.rawText = ''),
				(this.stashedLineBreaks = 0),
				(this.isPre = r && r.isPre);
		}
	}
	class $l extends Dt {
		constructor(t = null) {
			super(t);
			(this.rows = []), (this.isPre = t && t.isPre);
		}
	}
	class Ml extends Dt {
		constructor(t = null) {
			super(t);
			(this.cells = []), (this.isPre = t && t.isPre);
		}
	}
	class Hl extends Dt {
		constructor(t, r = null, n = void 0) {
			super(r);
			(this.inlineTextBuilder = new rs(t, n)),
				(this.rawText = ''),
				(this.stashedLineBreaks = 0),
				(this.isPre = r && r.isPre);
		}
	}
	class jl extends Dt {
		constructor(t = null, r) {
			super(t);
			this.transform = r;
		}
	}
	var Gl = {
		BlockStackItem: Vl,
		StackItem: Dt,
		TableCellStackItem: Hl,
		TableRowStackItem: Ml,
		TableStackItem: $l,
		TransformerStackItem: jl,
	};
	function br(e, t) {
		return e[t] || (e[t] = []), e[t];
	}
	function zl(e, t = 0) {
		for (; e[t]; ) t++;
		return t;
	}
	function Wl(e, t) {
		for (let r = 0; r < t; r++) {
			const n = br(e, r);
			for (let o = 0; o < r; o++) {
				const s = br(e, o),
					a = n[o];
				(n[o] = s[r]), (s[r] = a);
			}
		}
	}
	function Jl(e, t, r, n) {
		for (let o = 0; o < e.rowspan; o++) {
			const s = br(t, r + o);
			for (let a = 0; a < e.colspan; a++) s[n + a] = e;
		}
	}
	function ns(e, t, r, n) {
		e[t + r] = Math.max(e[t + r] || 0, e[t] + n);
	}
	function Yl(e, t, r) {
		const n = [];
		let o = 0;
		const s = e.length,
			a = [0];
		for (let u = 0; u < s; u++) {
			const i = br(n, u),
				f = e[u];
			let h = 0;
			for (let g = 0; g < f.length; g++) {
				const p = f[g];
				(h = zl(i, h)),
					Jl(p, n, u, h),
					(h += p.colspan),
					(p.lines = p.text.split(`
`));
				const D = p.lines.length;
				ns(a, u, p.rowspan, D + t);
			}
			o = i.length > o ? i.length : o;
		}
		Wl(n, s > o ? s : o);
		const c = [],
			l = [0];
		for (let u = 0; u < o; u++) {
			let i = 0,
				f;
			for (; i < s && (f = n[u][i]); ) {
				if (!f.rendered) {
					let h = 0;
					for (let g = 0; g < f.lines.length; g++) {
						const p = f.lines[g],
							D = a[i] + g;
						(c[D] = (c[D] || '').padEnd(l[u]) + p),
							(h = p.length > h ? p.length : h);
					}
					ns(l, u, f.colspan, h + r), (f.rendered = !0);
				}
				i += f.rowspan;
			}
		}
		return c.join(`
`);
	}
	var Zl = { tableToString: Yl };
	function Xl(e) {
		return [...e]
			.map((t) => '\\u' + t.charCodeAt(0).toString(16).padStart(4, '0'))
			.join('');
	}
	class Ql {
		constructor(t) {
			this.whitespaceChars = t.preserveNewlines
				? t.whitespaceCharacters.replace(/\n/g, '')
				: t.whitespaceCharacters;
			const r = Xl(this.whitespaceChars);
			if (
				((this.leadingWhitespaceRe = new RegExp(`^[${r}]`)),
				(this.trailingWhitespaceRe = new RegExp(`[${r}]$`)),
				(this.allWhitespaceOrEmptyRe = new RegExp(`^[${r}]*$`)),
				t.preserveNewlines)
			) {
				const n = new RegExp(
					`
|[^
${r}]+`,
					'gm'
				);
				this.shrinkWrapAdd = function (o, s, a = (c) => c) {
					if (!o) return;
					const c = s.stashedSpace;
					let l = !1,
						u = n.exec(o);
					if (u)
						for (
							l = !0,
								u[0] ===
								`
`
									? s.startNewLine()
									: c || this.testLeadingWhitespace(o)
									? s.pushWord(a(u[0]))
									: s.concatWord(a(u[0]));
							(u = n.exec(o)) !== null;

						)
							u[0] ===
							`
`
								? s.startNewLine()
								: s.pushWord(a(u[0]));
					s.stashedSpace =
						(c && !l) || this.testTrailingWhitespace(o);
				};
			} else {
				const n = new RegExp(`[^${r}]+`, 'g');
				this.shrinkWrapAdd = function (o, s, a = (c) => c) {
					if (!o) return;
					const c = s.stashedSpace;
					let l = !1,
						u = n.exec(o);
					if (u)
						for (
							l = !0,
								c || this.testLeadingWhitespace(o)
									? s.pushWord(a(u[0]))
									: s.concatWord(a(u[0]));
							(u = n.exec(o)) !== null;

						)
							s.pushWord(a(u[0]));
					s.stashedSpace =
						(c && !l) || this.testTrailingWhitespace(o);
				};
			}
		}
		testLeadingWhitespace(t) {
			return this.leadingWhitespaceRe.test(t);
		}
		testTrailingWhitespace(t) {
			return this.trailingWhitespaceRe.test(t);
		}
		testContainsWords(t) {
			return !this.allWhitespaceOrEmptyRe.test(t);
		}
	}
	var Kl = { WhitespaceProcessor: Ql };
	const { trimCharacter: ef } = on,
		{
			StackItem: IH,
			BlockStackItem: at,
			TableCellStackItem: yt,
			TableRowStackItem: os,
			TableStackItem: ss,
			TransformerStackItem: tf,
		} = Gl,
		{ tableToString: rf } = Zl,
		{ WhitespaceProcessor: nf } = Kl;
	class of {
		constructor(t, r) {
			(this.options = t),
				(this.picker = r),
				(this.whitepaceProcessor = new nf(t)),
				(this._stackItem = new at(t)),
				(this._wordTransformer = void 0);
		}
		pushWordTransform(t) {
			this._wordTransformer = new tf(this._wordTransformer, t);
		}
		popWordTransform() {
			if (!this._wordTransformer) return;
			const t = this._wordTransformer.transform;
			return (this._wordTransformer = this._wordTransformer.next), t;
		}
		_getCombinedWordTransformer() {
			const t = (r, n) => (n ? t(n.transform(r), n.next) : r);
			return (r) => t(r, this._wordTransformer);
		}
		_popStackItem() {
			const t = this._stackItem;
			return (this._stackItem = t.next), t;
		}
		addLineBreak() {
			(this._stackItem instanceof at || this._stackItem instanceof yt) &&
				(this._stackItem.isPre
					? (this._stackItem.rawText += `
`)
					: this._stackItem.inlineTextBuilder.startNewLine());
		}
		addWordBreakOpportunity() {
			(this._stackItem instanceof at || this._stackItem instanceof yt) &&
				(this._stackItem.inlineTextBuilder.wordBreakOpportunity = !0);
		}
		addInline(t, r = {}) {
			typeof r == 'object'
				? this._addInline(t, r)
				: this._addInline(t, { noWordTransform: r });
		}
		_addInline(t, { noWordTransform: r = !1 } = {}) {
			if (
				this._stackItem instanceof at ||
				this._stackItem instanceof yt
			) {
				if (this._stackItem.isPre) {
					this._stackItem.rawText += t;
					return;
				}
				(this.whitepaceProcessor.testContainsWords(t) ||
					(t.length && !this._stackItem.stashedLineBreaks)) &&
					(this._stackItem.stashedLineBreaks &&
						this._stackItem.inlineTextBuilder.startNewLine(
							this._stackItem.stashedLineBreaks
						),
					this.whitepaceProcessor.shrinkWrapAdd(
						t,
						this._stackItem.inlineTextBuilder,
						this._wordTransformer && !r
							? this._getCombinedWordTransformer()
							: void 0
					),
					(this._stackItem.stashedLineBreaks = 0));
			}
		}
		openBlock(t = {}, r = void 0, n = void 0) {
			typeof t == 'object'
				? this._openBlock(t)
				: this._openBlock({
						isPre: n,
						leadingLineBreaks: t,
						reservedLineLength: r,
				  });
		}
		_openBlock({
			leadingLineBreaks: t = 1,
			reservedLineLength: r = 0,
			isPre: n = !1,
		} = {}) {
			const o = Math.max(
				20,
				this._stackItem.inlineTextBuilder.maxLineLength - r
			);
			(this._stackItem = new at(this.options, this._stackItem, t, o)),
				n && (this._stackItem.isPre = !0);
		}
		closeBlock(t = {}, r = void 0) {
			typeof t == 'object'
				? this._closeBlock(t)
				: this._closeBlock({
						trailingLineBreaks: t,
						blockTransform: r,
				  });
		}
		_closeBlock({
			trailingLineBreaks: t = 1,
			blockTransform: r = void 0,
		} = {}) {
			const n = this._popStackItem(),
				o = r ? r(Nt(n)) : Nt(n);
			as(
				this._stackItem,
				o,
				n.leadingLineBreaks,
				Math.max(n.stashedLineBreaks, t)
			);
		}
		openTable() {
			this._stackItem = new ss(this._stackItem);
		}
		openTableRow() {
			if (!(this._stackItem instanceof ss))
				throw new Error(
					"Can't add table row to something that is not a table! Check the formatter."
				);
			this._stackItem = new os(this._stackItem);
		}
		openTableCell(t = {}) {
			typeof t == 'object'
				? this._openTableCell(t)
				: this._openTableCell({ maxColumnWidth: t });
		}
		_openTableCell({ maxColumnWidth: t = void 0 } = {}) {
			if (!(this._stackItem instanceof os))
				throw new Error(
					"Can't add table cell to something that is not a table row! Check the formatter."
				);
			this._stackItem = new yt(this.options, this._stackItem, t);
		}
		closeTableCell(t = {}, r = void 0) {
			typeof t == 'object'
				? this._closeTableCell(t)
				: this._closeTableCell({ colspan: t, rowspan: r });
		}
		_closeTableCell({ colspan: t = 1, rowspan: r = 1 } = {}) {
			const n = this._popStackItem(),
				o = ef(
					Nt(n),
					`
`
				);
			n.next.cells.push({ colspan: t, rowspan: r, text: o });
		}
		closeTableRow() {
			const t = this._popStackItem();
			t.next.rows.push(t.cells);
		}
		closeTable(t = {}, r = void 0, n = void 0, o = void 0) {
			typeof t == 'object'
				? this._closeTable(t)
				: this._closeTable({
						colSpacing: t,
						leadingLineBreaks: n,
						rowSpacing: r,
						trailingLineBreaks: o,
				  });
		}
		_closeTable({
			colSpacing: t = 3,
			rowSpacing: r = 0,
			leadingLineBreaks: n = 2,
			trailingLineBreaks: o = 2,
		} = {}) {
			const s = this._popStackItem(),
				a = rf(s.rows, r, t);
			a && as(this._stackItem, a, n, o);
		}
		toString() {
			return Nt(this._stackItem.getRoot());
		}
	}
	function Nt(e) {
		if (!(e instanceof at || e instanceof yt))
			throw new Error(
				'Only blocks and table cells can be requested for text contents.'
			);
		return e.inlineTextBuilder.isEmpty()
			? e.rawText
			: e.rawText + e.inlineTextBuilder.toString();
	}
	function as(e, t, r, n) {
		if (!(e instanceof at || e instanceof yt))
			throw new Error('Only blocks and table cells can contain text.');
		const o = Nt(e),
			s = Math.max(e.stashedLineBreaks, r);
		e.inlineTextBuilder.clear(),
			o
				? (e.rawText =
						o +
						`
`.repeat(s) +
						t)
				: ((e.rawText = t), (e.leadingLineBreaks = s)),
			(e.stashedLineBreaks = n);
	}
	var sf = { BlockTextBuilder: of };
	const us = or.exports,
		{
			get: sn,
			numberToLetterSequence: is,
			numberToRoman: cs,
			splitClassesAndIds: af,
			trimCharacter: uf,
		} = on;
	function cf(e, t, r, n) {}
	function lf(e, t, r, n) {
		t(e.children, r);
	}
	function ls(e, t, r, n) {
		r.openBlock({ leadingLineBreaks: n.leadingLineBreaks }),
			t(e.children, r),
			r.closeBlock({ trailingLineBreaks: n.trailingLineBreaks });
	}
	function ff(e, t, r, n) {
		r.addLineBreak();
	}
	function pf(e, t, r, n) {
		r.addWordBreakOpportunity();
	}
	function df(e, t, r, n) {
		r.openBlock({ leadingLineBreaks: n.leadingLineBreaks || 2 }),
			r.addInline('-'.repeat(n.length || r.options.wordwrap || 40)),
			r.closeBlock({ trailingLineBreaks: n.trailingLineBreaks || 2 });
	}
	function hf(e, t, r, n) {
		r.openBlock({ leadingLineBreaks: n.leadingLineBreaks || 2 }),
			t(e.children, r),
			r.closeBlock({ trailingLineBreaks: n.trailingLineBreaks || 2 });
	}
	function mf(e, t, r, n) {
		r.openBlock({ isPre: !0, leadingLineBreaks: n.leadingLineBreaks || 2 }),
			t(e.children, r),
			r.closeBlock({ trailingLineBreaks: n.trailingLineBreaks || 2 });
	}
	function gf(e, t, r, n) {
		r.openBlock({ leadingLineBreaks: n.leadingLineBreaks || 2 }),
			n.uppercase !== !1
				? (r.pushWordTransform((o) => o.toUpperCase()),
				  t(e.children, r),
				  r.popWordTransform())
				: t(e.children, r),
			r.closeBlock({ trailingLineBreaks: n.trailingLineBreaks || 2 });
	}
	function bf(e, t, r, n) {
		r.openBlock({
			leadingLineBreaks: n.leadingLineBreaks || 2,
			reservedLineLength: 2,
		}),
			t(e.children, r),
			r.closeBlock({
				trailingLineBreaks: n.trailingLineBreaks || 2,
				blockTransform: (o) =>
					(n.trimEmptyLines !== !1
						? uf(
								o,
								`
`
						  )
						: o
					)
						.split(
							`
`
						)
						.map((s) => '> ' + s).join(`
`),
			});
	}
	function vf(e, t, r, n) {
		const o = e.attribs || {},
			s = o.alt ? us.decode(o.alt, r.options.decodeOptions) : '',
			a = o.src
				? n.baseUrl && o.src.indexOf('/') === 0
					? n.baseUrl + o.src
					: o.src
				: '',
			c = a ? (s ? s + ' [' + a + ']' : '[' + a + ']') : s;
		r.addInline(c);
	}
	function Df(e, t, r, n) {
		function o() {
			if (n.ignoreHref || !e.attribs || !e.attribs.href) return '';
			let a = e.attribs.href.replace(/^mailto:/, '');
			return n.noAnchorUrl && a[0] === '#'
				? ''
				: ((a = n.baseUrl && a[0] === '/' ? n.baseUrl + a : a),
				  us.decode(a, r.options.decodeOptions));
		}
		const s = o();
		if (!s) t(e.children, r);
		else {
			let a = '';
			r.pushWordTransform((l) => (l && (a += l), l)),
				t(e.children, r),
				r.popWordTransform(),
				(n.hideLinkHrefIfSameAsText && s === a) ||
					r.addInline(
						a ? (n.noLinkBrackets ? ' ' + s : ' [' + s + ']') : s,
						{ noWordTransform: !0 }
					);
		}
	}
	function fs(e, t, r, n, o) {
		const s = sn(e, ['parent', 'name']) === 'li';
		let a = 0;
		const c = (e.children || [])
			.filter((i) => i.type !== 'text' || !/^\s*$/.test(i.data))
			.map(function (i) {
				if (i.name !== 'li') return { node: i, prefix: '' };
				const f = s ? o().trimStart() : o();
				return f.length > a && (a = f.length), { node: i, prefix: f };
			});
		if (!c.length) return;
		const l = a,
			u =
				`
` + ' '.repeat(l);
		r.openBlock({ leadingLineBreaks: s ? 1 : n.leadingLineBreaks || 2 });
		for (const { node: i, prefix: f } of c)
			r.openBlock({ leadingLineBreaks: 1, reservedLineLength: l }),
				t([i], r),
				r.closeBlock({
					trailingLineBreaks: 1,
					blockTransform: (h) =>
						f + ' '.repeat(l - f.length) + h.replace(/\n/g, u),
				});
		r.closeBlock({ trailingLineBreaks: s ? 1 : n.trailingLineBreaks || 2 });
	}
	function yf(e, t, r, n) {
		const o = n.itemPrefix || ' * ';
		return fs(e, t, r, n, () => o);
	}
	function Af(e, t, r, n) {
		let o = Number(e.attribs.start || '1');
		const s = wf(e.attribs.type);
		return fs(e, t, r, n, () => ' ' + s(o++) + '. ');
	}
	function wf(e = '1') {
		switch (e) {
			case 'a':
				return (t) => is(t, 'a');
			case 'A':
				return (t) => is(t, 'A');
			case 'i':
				return (t) => cs(t).toLowerCase();
			case 'I':
				return (t) => cs(t);
			case '1':
			default:
				return (t) => t.toString();
		}
	}
	function Ef(e, t) {
		if (t === !0) return !0;
		if (!e) return !1;
		const { classes: r, ids: n } = af(t),
			o = (e.class || '').split(' '),
			s = (e.id || '').split(' ');
		return o.some((a) => r.includes(a)) || s.some((a) => n.includes(a));
	}
	function xf(e, t, r, n) {
		return Ef(e.attribs, r.options.tables)
			? ps(e, t, r, n)
			: ls(e, t, r, n);
	}
	function ps(e, t, r, n) {
		r.openTable(),
			e.children.forEach(s),
			r.closeTable({
				colSpacing: n.colSpacing,
				leadingLineBreaks: n.leadingLineBreaks,
				rowSpacing: n.rowSpacing,
				trailingLineBreaks: n.trailingLineBreaks,
			});
		function o(a) {
			const c = +sn(a, ['attribs', 'colspan']) || 1,
				l = +sn(a, ['attribs', 'rowspan']) || 1;
			r.openTableCell({ maxColumnWidth: n.maxColumnWidth }),
				t(a.children, r),
				r.closeTableCell({ colspan: c, rowspan: l });
		}
		function s(a) {
			if (a.type !== 'tag') return;
			const c =
				n.uppercaseHeaderCells !== !1
					? (l) => {
							r.pushWordTransform((u) => u.toUpperCase()),
								o(l),
								r.popWordTransform();
					  }
					: o;
			switch (a.name) {
				case 'thead':
				case 'tbody':
				case 'tfoot':
				case 'center':
					a.children.forEach(s);
					return;
				case 'tr': {
					r.openTableRow();
					for (const l of a.children)
						if (l.type === 'tag')
							switch (l.name) {
								case 'th': {
									c(l);
									break;
								}
								case 'td': {
									o(l);
									break;
								}
							}
					r.closeTableRow();
					break;
				}
			}
		}
	}
	var Cf = {
		anchor: Df,
		block: ls,
		blockquote: bf,
		dataTable: ps,
		heading: gf,
		horizontalLine: df,
		image: vf,
		inline: lf,
		lineBreak: ff,
		orderedList: Af,
		paragraph: hf,
		pre: mf,
		skip: cf,
		table: xf,
		unorderedList: yf,
		wbr: pf,
	};
	const { hp2Builder: ds } = _r,
		qf = ho,
		Sf = or.exports,
		hs = mo,
		ms = Ye,
		{ BlockTextBuilder: Bf } = sf,
		Tf = Cf,
		{
			limitedDepthRecursive: gs,
			mergeDuplicatesPreferLast: kf,
			set: Pt,
		} = on,
		Lf = {
			baseElements: {
				selectors: ['body'],
				orderBy: 'selectors',
				returnDomByDefault: !0,
			},
			decodeOptions: { isAttributeValue: !1, strict: !1 },
			formatters: {},
			limits: {
				ellipsis: '...',
				maxBaseElements: void 0,
				maxChildNodes: void 0,
				maxDepth: void 0,
				maxInputLength: 1 << 24,
			},
			longWordSplit: { forceWrapOnLimit: !1, wrapCharacters: [] },
			preserveNewlines: !1,
			selectors: [
				{ selector: '*', format: 'inline' },
				{
					selector: 'a',
					format: 'anchor',
					options: {
						baseUrl: null,
						hideLinkHrefIfSameAsText: !1,
						ignoreHref: !1,
						noAnchorUrl: !0,
						noLinkBrackets: !1,
					},
				},
				{ selector: 'article', format: 'block' },
				{ selector: 'aside', format: 'block' },
				{
					selector: 'blockquote',
					format: 'blockquote',
					options: {
						leadingLineBreaks: 2,
						trailingLineBreaks: 2,
						trimEmptyLines: !0,
					},
				},
				{ selector: 'br', format: 'lineBreak' },
				{ selector: 'div', format: 'block' },
				{ selector: 'footer', format: 'block' },
				{ selector: 'form', format: 'block' },
				{
					selector: 'h1',
					format: 'heading',
					options: {
						leadingLineBreaks: 3,
						trailingLineBreaks: 2,
						uppercase: !0,
					},
				},
				{
					selector: 'h2',
					format: 'heading',
					options: {
						leadingLineBreaks: 3,
						trailingLineBreaks: 2,
						uppercase: !0,
					},
				},
				{
					selector: 'h3',
					format: 'heading',
					options: {
						leadingLineBreaks: 3,
						trailingLineBreaks: 2,
						uppercase: !0,
					},
				},
				{
					selector: 'h4',
					format: 'heading',
					options: {
						leadingLineBreaks: 2,
						trailingLineBreaks: 2,
						uppercase: !0,
					},
				},
				{
					selector: 'h5',
					format: 'heading',
					options: {
						leadingLineBreaks: 2,
						trailingLineBreaks: 2,
						uppercase: !0,
					},
				},
				{
					selector: 'h6',
					format: 'heading',
					options: {
						leadingLineBreaks: 2,
						trailingLineBreaks: 2,
						uppercase: !0,
					},
				},
				{ selector: 'header', format: 'block' },
				{
					selector: 'hr',
					format: 'horizontalLine',
					options: {
						leadingLineBreaks: 2,
						length: void 0,
						trailingLineBreaks: 2,
					},
				},
				{
					selector: 'img',
					format: 'image',
					options: { baseUrl: null },
				},
				{ selector: 'main', format: 'block' },
				{ selector: 'nav', format: 'block' },
				{
					selector: 'ol',
					format: 'orderedList',
					options: { leadingLineBreaks: 2, trailingLineBreaks: 2 },
				},
				{
					selector: 'p',
					format: 'paragraph',
					options: { leadingLineBreaks: 2, trailingLineBreaks: 2 },
				},
				{
					selector: 'pre',
					format: 'pre',
					options: { leadingLineBreaks: 2, trailingLineBreaks: 2 },
				},
				{ selector: 'section', format: 'block' },
				{
					selector: 'table',
					format: 'table',
					options: {
						colSpacing: 3,
						leadingLineBreaks: 2,
						maxColumnWidth: 60,
						rowSpacing: 0,
						trailingLineBreaks: 2,
						uppercaseHeaderCells: !0,
					},
				},
				{
					selector: 'ul',
					format: 'unorderedList',
					options: {
						itemPrefix: ' * ',
						leadingLineBreaks: 2,
						trailingLineBreaks: 2,
					},
				},
				{ selector: 'wbr', format: 'wbr' },
			],
			tables: [],
			whitespaceCharacters: ` 	\r
\f\u200B`,
			wordwrap: 80,
		},
		Ff = (e, t, r) => [...e, ...t],
		bs = (e, t, r) => [...t],
		_f = (e, t, r) =>
			e.some((n) => typeof n == 'object') ? Ff(e, t) : bs(e, t);
	function vs(e = {}) {
		(e = qf(Lf, e, {
			arrayMerge: bs,
			customMerge: (c) => (c === 'selectors' ? _f : void 0),
		})),
			(e.formatters = Object.assign({}, Tf, e.formatters)),
			Pf(e);
		const t = kf(e.selectors, (c) => c.selector),
			r = t.filter((c) => !c.format);
		if (r.length)
			throw new Error(
				'Following selectors have no specified format: ' +
					r.map((c) => `\`${c.selector}\``).join(', ')
			);
		const n = new ms.DecisionTree(t.map((c) => [c.selector, c])).build(ds),
			o = new ms.DecisionTree(
				e.baseElements.selectors.map((c, l) => [c, l + 1])
			).build(ds);
		function s(c) {
			return Of(c, e, o);
		}
		const a = gs(e.limits.maxDepth, If, function (c, l) {
			l.addInline(e.limits.ellipsis || '');
		});
		return function (c) {
			return Nf(c, e, n, s, a);
		};
	}
	function Nf(e, t, r, n, o) {
		const s = t.limits.maxInputLength;
		s &&
			e &&
			e.length > s &&
			(console.warn(
				`Input length ${e.length} is above allowed limit of ${s}. Truncating without ellipsis.`
			),
			(e = e.substring(0, s)));
		const a = new hs.DomHandler();
		new hs.Parser(a, { decodeEntities: !1 }).parseComplete(e);
		const c = n(a.dom),
			l = new Bf(t, r);
		return o(c, l), l.toString();
	}
	function an(e, t = {}) {
		return vs(t)(e);
	}
	function Pf(e) {
		const t = e.selectors;
		if (e.tags) {
			const n = Object.entries(e.tags).map(([o, s]) =>
				Dn(vn({}, s), { selector: o || '*' })
			);
			t.push(...n);
		}
		function r(n, o, s) {
			if (e[n] !== void 0)
				for (const a of t)
					a.format === o && Pt(a, ['options', s], e[n]);
		}
		if (
			(r(
				'hideLinkHrefIfSameAsText',
				'anchor',
				'hideLinkHrefIfSameAsText'
			),
			r('ignoreHref', 'anchor', 'ignoreHref'),
			r('linkHrefBaseUrl', 'anchor', 'baseUrl'),
			r('noAnchorUrl', 'anchor', 'noAnchorUrl'),
			r('noLinkBrackets', 'anchor', 'noLinkBrackets'),
			r('linkHrefBaseUrl', 'image', 'baseUrl'),
			r('unorderedListItemPrefix', 'unorderedList', 'itemPrefix'),
			r('uppercaseHeadings', 'heading', 'uppercase'),
			r('uppercaseHeadings', 'table', 'uppercaseHeadings'),
			r('uppercaseHeadings', 'dataTable', 'uppercaseHeadings'),
			e.ignoreImage)
		)
			for (const n of t) n.format === 'image' && (n.format = 'skip');
		if (e.singleNewLineParagraphs)
			for (const n of t)
				(n.format === 'paragraph' || n.format === 'pre') &&
					(Pt(n, ['options', 'leadingLineBreaks'], 1),
					Pt(n, ['options', 'trailingLineBreaks'], 1));
		if (e.baseElement) {
			const n = e.baseElement;
			Pt(e, ['baseElements', 'selectors'], Array.isArray(n) ? n : [n]);
		}
		e.returnDomByDefault !== void 0 &&
			Pt(e, ['baseElements', 'returnDomByDefault'], e.returnDomByDefault);
	}
	function Of(e, t, r) {
		const n = [];
		function o(a, c) {
			c = c.slice(0, t.limits.maxChildNodes);
			for (const l of c) {
				if (l.type !== 'tag') continue;
				const u = r.pick1(l);
				if (
					(u > 0
						? n.push({ selectorIndex: u, element: l })
						: l.children && a(l.children),
					n.length >= t.limits.maxBaseElements)
				)
					return;
			}
		}
		return (
			gs(t.limits.maxDepth, o)(e),
			t.baseElements.orderBy !== 'occurrence' &&
				n.sort((a, c) => a.selectorIndex - c.selectorIndex),
			t.baseElements.returnDomByDefault && n.length === 0
				? e
				: n.map((a) => a.element)
		);
	}
	function If(e, t, r) {
		if (!t) return;
		const n = r.options;
		t.length > n.limits.maxChildNodes &&
			((t = t.slice(0, n.limits.maxChildNodes)),
			t.push({ data: n.limits.ellipsis, type: 'text' }));
		for (const s of t)
			switch (s.type) {
				case 'text': {
					r.addInline(Sf.decode(s.data, n.decodeOptions));
					break;
				}
				case 'tag': {
					const a = r.picker.pick1(s);
					n.formatters[a.format](s, e, r, a.options || {});
					break;
				}
			}
	}
	var Rf = {
			compile: vs,
			convert: an,
			fromString: (e, t = {}) => an(e, t),
			htmlToText: an,
		},
		Uf = Rf,
		un = { exports: {} };
	(function (e, t) {
		var r = 30,
			n = '...',
			o = 1 / 0,
			s = 17976931348623157e292,
			a = 0 / 0,
			c = '[object RegExp]',
			l = '[object Symbol]',
			u = /^\s+|\s+$/g,
			i = /\w*$/,
			f = /^[-+]0x[0-9a-f]+$/i,
			h = /^0b[01]+$/i,
			g = /^0o[0-7]+$/i,
			p = '\\ud800-\\udfff',
			D = '\\u0300-\\u036f\\ufe20-\\ufe23',
			y = '\\u20d0-\\u20f0',
			C = '\\ufe0e\\ufe0f',
			S = '[' + p + ']',
			E = '[' + D + y + ']',
			X = '\\ud83c[\\udffb-\\udfff]',
			U = '(?:' + E + '|' + X + ')',
			O = '[^' + p + ']',
			j = '(?:\\ud83c[\\udde6-\\uddff]){2}',
			J = '[\\ud800-\\udbff][\\udc00-\\udfff]',
			d = '\\u200d',
			b = U + '?',
			A = '[' + C + ']?',
			B = '(?:' + d + '(?:' + [O, j, J].join('|') + ')' + A + b + ')*',
			L = A + b + B,
			x = '(?:' + [O + E + '?', E, j, J, S].join('|') + ')',
			F = RegExp(X + '(?=' + X + ')|' + x + L, 'g'),
			Y = RegExp('[' + d + p + D + y + C + ']'),
			M = parseInt,
			T = typeof q == 'object' && q && q.Object === Object && q,
			w =
				typeof self == 'object' &&
				self &&
				self.Object === Object &&
				self,
			_ = T || w || Function('return this')(),
			k = t && !t.nodeType && t,
			V = k && !0 && e && !e.nodeType && e,
			oe = V && V.exports === k,
			R = oe && T.process,
			P = (function () {
				try {
					return R && R.binding('util');
				} catch (v) {}
			})(),
			G = P && P.isRegExp,
			H = de('length');
		function se(v) {
			return v.split('');
		}
		function de(v) {
			return function (N) {
				return N == null ? void 0 : N[v];
			};
		}
		function ae(v) {
			return function (N) {
				return v(N);
			};
		}
		function ue(v) {
			return Y.test(v);
		}
		function fe(v) {
			return ue(v) ? pe(v) : H(v);
		}
		function Ae(v) {
			return ue(v) ? wt(v) : se(v);
		}
		function pe(v) {
			for (var N = (F.lastIndex = 0); F.test(v); ) N++;
			return N;
		}
		function wt(v) {
			return v.match(F) || [];
		}
		var Et = Object.prototype,
			Us = Et.toString,
			Vs = _.Symbol,
			$s = Vs ? Vs.prototype : void 0,
			Ms = $s ? $s.toString : void 0;
		function ep(v) {
			return Dr(v) && Us.call(v) == c;
		}
		function tp(v, N, ee) {
			var Te = -1,
				re = v.length;
			N < 0 && (N = -N > re ? 0 : re + N),
				(ee = ee > re ? re : ee),
				ee < 0 && (ee += re),
				(re = N > ee ? 0 : (ee - N) >>> 0),
				(N >>>= 0);
			for (var $t = Array(re); ++Te < re; ) $t[Te] = v[Te + N];
			return $t;
		}
		function bn(v) {
			if (typeof v == 'string') return v;
			if (Hs(v)) return Ms ? Ms.call(v) : '';
			var N = v + '';
			return N == '0' && 1 / v == -o ? '-0' : N;
		}
		function rp(v, N, ee) {
			var Te = v.length;
			return (
				(ee = ee === void 0 ? Te : ee),
				!N && ee >= Te ? v : tp(v, N, ee)
			);
		}
		function Dr(v) {
			var N = typeof v;
			return !!v && (N == 'object' || N == 'function');
		}
		function np(v) {
			return !!v && typeof v == 'object';
		}
		var op = G ? ae(G) : ep;
		function Hs(v) {
			return typeof v == 'symbol' || (np(v) && Us.call(v) == l);
		}
		function sp(v) {
			if (!v) return v === 0 ? v : 0;
			if (((v = up(v)), v === o || v === -o)) {
				var N = v < 0 ? -1 : 1;
				return N * s;
			}
			return v === v ? v : 0;
		}
		function ap(v) {
			var N = sp(v),
				ee = N % 1;
			return N === N ? (ee ? N - ee : N) : 0;
		}
		function up(v) {
			if (typeof v == 'number') return v;
			if (Hs(v)) return a;
			if (Dr(v)) {
				var N = typeof v.valueOf == 'function' ? v.valueOf() : v;
				v = Dr(N) ? N + '' : N;
			}
			if (typeof v != 'string') return v === 0 ? v : +v;
			v = v.replace(u, '');
			var ee = h.test(v);
			return ee || g.test(v)
				? M(v.slice(2), ee ? 2 : 8)
				: f.test(v)
				? a
				: +v;
		}
		function js(v) {
			return v == null ? '' : bn(v);
		}
		function ip(v, N) {
			var ee = r,
				Te = n;
			if (Dr(N)) {
				var re = 'separator' in N ? N.separator : re;
				(ee = 'length' in N ? ap(N.length) : ee),
					(Te = 'omission' in N ? bn(N.omission) : Te);
			}
			v = js(v);
			var $t = v.length;
			if (ue(v)) {
				var yr = Ae(v);
				$t = yr.length;
			}
			if (ee >= $t) return v;
			var Ge = ee - fe(Te);
			if (Ge < 1) return Te;
			var ze = yr ? rp(yr, 0, Ge).join('') : v.slice(0, Ge);
			if (re === void 0) return ze + Te;
			if ((yr && (Ge += ze.length - Ge), op(re))) {
				if (v.slice(Ge).search(re)) {
					var Gs,
						cp = ze;
					for (
						re.global ||
							(re = RegExp(re.source, js(i.exec(re)) + 'g')),
							re.lastIndex = 0;
						(Gs = re.exec(cp));

					)
						var zs = Gs.index;
					ze = ze.slice(0, zs === void 0 ? Ge : zs);
				}
			} else if (v.indexOf(bn(re), Ge) != Ge) {
				var Ws = ze.lastIndexOf(re);
				Ws > -1 && (ze = ze.slice(0, Ws));
			}
			return ze + Te;
		}
		e.exports = ip;
	})(un, un.exports);
	var Ds = un.exports;
	function Vf(e, t) {
		t === void 0 && (t = null);
		var r = m.useState(a()),
			n = r[0],
			o = r[1];
		function s() {
			var h = a();
			(h === null || h === 'null') && l(t);
		}
		function a() {
			if (typeof localStorage == 'undefined') return null;
			var h = localStorage.getItem(e) || 'null';
			try {
				return JSON.parse(h);
			} catch (g) {
				console.error(g);
			}
			return h;
		}
		function c(h) {
			return typeof localStorage == 'undefined'
				? null
				: localStorage.setItem(e, JSON.stringify(h));
		}
		var l = m.useCallback(function (h) {
				o(h), c(h);
			}, []),
			u = m.useCallback(function (h) {
				h.storageArea === localStorage && h.key === e && o(h.newValue);
			}, []),
			i = m.useCallback(
				function () {
					if ((l(null), typeof localStorage == 'undefined'))
						return !1;
					localStorage.removeItem(e);
				},
				[e]
			);
		m.useEffect(function () {
			s();
		}, []),
			m.useEffect(function () {
				return (
					window.addEventListener('storage', u),
					function () {
						window.removeEventListener('storage', u);
					}
				);
			}, []);
		var f = Object.assign([n, l, i], { value: n, remove: i, set: l });
		return f;
	}
	var ys = Object.prototype.hasOwnProperty;
	function cn(e, t) {
		var r, n;
		if (e === t) return !0;
		if (e && t && (r = e.constructor) === t.constructor) {
			if (r === Date) return e.getTime() === t.getTime();
			if (r === RegExp) return e.toString() === t.toString();
			if (r === Array) {
				if ((n = e.length) === t.length)
					for (; n-- && cn(e[n], t[n]); );
				return n === -1;
			}
			if (!r || typeof e == 'object') {
				n = 0;
				for (r in e)
					if (
						(ys.call(e, r) && ++n && !ys.call(t, r)) ||
						!(r in t) ||
						!cn(e[r], t[r])
					)
						return !1;
				return Object.keys(t).length === n;
			}
		}
		return e !== e && t !== t;
	}
	function As(e, t, r, n) {
		return new (r || (r = Promise))(function (o, s) {
			function a(u) {
				try {
					l(n.next(u));
				} catch (i) {
					s(i);
				}
			}
			function c(u) {
				try {
					l(n.throw(u));
				} catch (i) {
					s(i);
				}
			}
			function l(u) {
				var i;
				u.done
					? o(u.value)
					: ((i = u.value),
					  i instanceof r
							? i
							: new r(function (f) {
									f(i);
							  })).then(a, c);
			}
			l((n = n.apply(e, t || [])).next());
		});
	}
	function Es(e, t) {
		var r,
			n,
			o,
			s,
			a = {
				label: 0,
				sent: function () {
					if (1 & o[0]) throw o[1];
					return o[1];
				},
				trys: [],
				ops: [],
			};
		return (
			(s = { next: c(0), throw: c(1), return: c(2) }),
			typeof Symbol == 'function' &&
				(s[Symbol.iterator] = function () {
					return this;
				}),
			s
		);
		function c(l) {
			return function (u) {
				return (function (i) {
					if (r)
						throw new TypeError('Generator is already executing.');
					for (; a; )
						try {
							if (
								((r = 1),
								n &&
									(o =
										2 & i[0]
											? n.return
											: i[0]
											? n.throw ||
											  ((o = n.return) && o.call(n), 0)
											: n.next) &&
									!(o = o.call(n, i[1])).done)
							)
								return o;
							switch (
								((n = 0), o && (i = [2 & i[0], o.value]), i[0])
							) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, { value: i[1], done: !1 };
								case 5:
									a.label++, (n = i[1]), (i = [0]);
									continue;
								case 7:
									(i = a.ops.pop()), a.trys.pop();
									continue;
								default:
									if (
										((o = a.trys),
										!(
											(o =
												o.length > 0 &&
												o[o.length - 1]) ||
											(i[0] !== 6 && i[0] !== 2)
										))
									) {
										a = 0;
										continue;
									}
									if (
										i[0] === 3 &&
										(!o || (i[1] > o[0] && i[1] < o[3]))
									) {
										a.label = i[1];
										break;
									}
									if (i[0] === 6 && a.label < o[1]) {
										(a.label = o[1]), (o = i);
										break;
									}
									if (o && a.label < o[2]) {
										(a.label = o[2]), a.ops.push(i);
										break;
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue;
							}
							i = t.call(e, a);
						} catch (f) {
							(i = [6, f]), (n = 0);
						} finally {
							r = o = 0;
						}
					if (5 & i[0]) throw i[1];
					return { value: i[0] ? i[1] : void 0, done: !0 };
				})([l, u]);
			};
		}
	}
	var Be = {}[0],
		be = function (e) {
			return e === Be;
		},
		Ot = function (e) {
			return typeof e == 'function';
		},
		It = function () {},
		At = function (e, t) {
			return Object.assign({}, e, t);
		},
		ln = !0,
		$f = typeof window != 'undefined',
		xs = typeof document != 'undefined',
		fn = ($f && window.addEventListener) || It,
		Mf = (xs && document.addEventListener) || It,
		Cs = {
			isOnline: function () {
				return ln;
			},
			isVisible: function () {
				var e = xs && document.visibilityState;
				return !!be(e) || e !== 'hidden';
			},
		},
		Hf = {
			initFocus: function (e) {
				Mf('visibilitychange', e), fn('focus', e);
			},
			initReconnect: function (e) {
				fn('online', function () {
					(ln = !0), e();
				}),
					fn('offline', function () {
						ln = !1;
					});
			},
		},
		Rt = typeof window == 'undefined' || 'Deno' in window,
		qs = Rt ? null : window.requestAnimationFrame,
		jf = qs
			? function (e) {
					return qs(e);
			  }
			: function (e) {
					return setTimeout(e, 1);
			  },
		vr = Rt ? m.useEffect : m.useLayoutEffect,
		pn = typeof navigator != 'undefined' && navigator.connection,
		Ss =
			!Rt &&
			pn &&
			(['slow-2g', '2g'].includes(pn.effectiveType) || pn.saveData),
		dn = new WeakMap(),
		Bs = 0;
	function Ts(e) {
		if (Ot(e))
			try {
				e = e();
			} catch (r) {
				e = '';
			}
		var t;
		return (
			Array.isArray(e)
				? ((t = e),
				  (e = (function (r) {
						if (!r.length) return '';
						for (var n = 'arg', o = 0; o < r.length; ++o) {
							var s = r[o],
								a = Be;
							s === null || (typeof s != 'object' && !Ot(s))
								? (a = JSON.stringify(s))
								: dn.has(s)
								? (a = dn.get(s))
								: ((a = Bs), dn.set(s, Bs++)),
								(n += '$' + a);
						}
						return n;
				  })(e)))
				: (t = [(e = String(e || ''))]),
			[e, t, e ? '$err$' + e : '', e ? '$req$' + e : '']
		);
	}
	var Ut = new WeakMap(),
		Vt = function (e, t, r, n, o, s) {
			s === void 0 && (s = !1);
			var a = Ut.get(e),
				c = a[0],
				l = a[1],
				u = c[t],
				i = l[t];
			if (i) for (var f = 0; f < i.length; ++f) i[f](r, n, o);
			return s && u && u[0]
				? u[0](2).then(function () {
						return e.get(t);
				  })
				: e.get(t);
		},
		Gf = 0,
		hn = function () {
			return ++Gf;
		},
		ks = function (e, t, r, n) {
			return (
				n === void 0 && (n = !0),
				As(void 0, void 0, void 0, function () {
					var o, s, a, c, l, u, i, f, h, g, p;
					return Es(this, function (D) {
						switch (D.label) {
							case 0:
								if (((o = Ts(t)), (s = o[0]), (a = o[2]), !s))
									return [2];
								if (
									((c = Ut.get(e)),
									(l = c[2]),
									(u = c[3]),
									be(r))
								)
									return [
										2,
										Vt(e, s, e.get(s), e.get(a), Be, n),
									];
								if (((h = l[s] = hn()), (u[s] = 0), Ot(r)))
									try {
										r = r(e.get(s));
									} catch (y) {
										(r = Be), (f = y);
									}
								if (!r || !Ot(r.then)) return [3, 5];
								D.label = 1;
							case 1:
								return D.trys.push([1, 3, , 4]), [4, r];
							case 2:
								return (i = D.sent()), [3, 4];
							case 3:
								return (g = D.sent()), (f = g), [3, 4];
							case 4:
								if (h !== l[s]) {
									if (f) throw f;
									return [2, i];
								}
								return [3, 6];
							case 5:
								(i = r), (D.label = 6);
							case 6:
								return (
									be(i) || e.set(s, i),
									e.set(a, f),
									(u[s] = hn()),
									[4, Vt(e, s, i, f, Be, n)]
								);
							case 7:
								if (((p = D.sent()), f)) throw f;
								return [2, p];
						}
					});
				})
			);
		};
	function Ls(e, t) {
		for (var r in e) e[r][0] && e[r][0](t);
	}
	function Fs(e, t) {
		if (!Ut.has(e)) {
			var r = At(Hf, t),
				n = {},
				o = ks.bind(Be, e);
			return (
				Ut.set(e, [n, {}, {}, {}, {}, {}, o]),
				Rt ||
					(r.initFocus(Ls.bind(Be, n, 0)),
					r.initReconnect(Ls.bind(Be, n, 1))),
				[e, o]
			);
		}
	}
	var _s = Fs(new Map()),
		Ns = _s[0],
		zf = _s[1],
		Ps = At(
			{
				onLoadingSlow: It,
				onSuccess: It,
				onError: It,
				onErrorRetry: function (e, t, r, n, o) {
					if (Cs.isVisible()) {
						var s = r.errorRetryCount,
							a = o.retryCount,
							c =
								~~(
									(Math.random() + 0.5) *
									(1 << (a < 8 ? a : 8))
								) * r.errorRetryInterval;
						(!be(s) && a > s) || setTimeout(n, c, o);
					}
				},
				revalidateOnFocus: !0,
				revalidateOnReconnect: !0,
				revalidateIfStale: !0,
				shouldRetryOnError: !0,
				errorRetryInterval: Ss ? 1e4 : 5e3,
				focusThrottleInterval: 5e3,
				dedupingInterval: 2e3,
				loadingTimeout: Ss ? 5e3 : 3e3,
				compare: cn,
				isPaused: function () {
					return !1;
				},
				cache: Ns,
				mutate: zf,
				fallback: {},
			},
			Cs
		);
	function Os(e, t) {
		var r = At(e, t);
		if (!t) return r;
		var n = e.use,
			o = e.fallback,
			s = t.use,
			a = t.fallback;
		return (
			n && s && (r.use = n.concat(s)),
			o && a && (r.fallback = At(o, a)),
			r
		);
	}
	var mn = m.createContext({});
	function Wf(e) {
		return Ot(e[1])
			? [e[0], e[1], e[2] || {}]
			: [e[0], null, (e[1] === null ? e[2] : e[1]) || {}];
	}
	var Is,
		Rs = function (e, t, r) {
			var n = t[e] || (t[e] = []);
			return (
				n.push(r),
				function () {
					var o = n.indexOf(r);
					o >= 0 && ((n[o] = n[n.length - 1]), n.pop());
				}
			);
		},
		gn = { dedupe: !0 };
	Object.defineProperty(
		function (e) {
			var t = e.children,
				r = e.value,
				n = Os(m.useContext(mn), r),
				o = r && r.provider,
				s = m.useState(function () {
					return o ? Fs(o(n.cache || Ns), r) : Be;
				})[0];
			return (
				s && ((n.cache = s[0]), (n.mutate = s[1])),
				m.createElement(mn.Provider, { value: n }, t)
			);
		},
		'default',
		{ value: Ps }
	);
	var Jf =
		((Is = function (e, t, r) {
			var n = r.cache,
				o = r.compare,
				s = r.fallbackData,
				a = r.suspense,
				c = r.revalidateOnMount,
				l = r.refreshInterval,
				u = r.refreshWhenHidden,
				i = r.refreshWhenOffline,
				f = Ut.get(n),
				h = f[0],
				g = f[1],
				p = f[2],
				D = f[3],
				y = f[4],
				C = f[5],
				S = Ts(e),
				E = S[0],
				X = S[1],
				U = S[2],
				O = S[3],
				j = m.useRef(!1),
				J = m.useRef(!1),
				d = m.useRef(E),
				b = m.useRef(r),
				A = function () {
					return b.current;
				},
				B = n.get(E),
				L = be(s) ? r.fallback[E] : s,
				x = be(B) ? L : B,
				F = n.get(U);
			if (a && (!E || !t))
				throw new Error(
					'useSWR requires either key or fetcher with suspense mode'
				);
			var Y = function () {
					return be(c)
						? a
							? !j.current && !be(x)
							: be(x) || r.revalidateIfStale
						: c;
				},
				M = !(!E || !t) && (!!n.get(O) || (!j.current && Y())),
				T = (function (R, P) {
					var G = m.useState({})[1],
						H = m.useRef(R),
						se = m.useRef({
							data: !1,
							error: !1,
							isValidating: !1,
						}),
						de = m.useCallback(function (ae) {
							var ue = !1,
								fe = H.current;
							for (var Ae in ae) {
								var pe = Ae;
								fe[pe] !== ae[pe] &&
									((fe[pe] = ae[pe]),
									se.current[pe] && (ue = !0));
							}
							ue && !P.current && G({});
						}, []);
					return (
						vr(function () {
							H.current = R;
						}),
						[H, se.current, de]
					);
				})({ data: x, error: F, isValidating: M }, J),
				w = T[0],
				_ = T[1],
				k = T[2],
				V = m.useCallback(
					function (R) {
						return As(void 0, void 0, void 0, function () {
							var P, G, H, se, de, ae, ue, fe, Ae;
							return Es(this, function (pe) {
								switch (pe.label) {
									case 0:
										if (
											!E ||
											!t ||
											J.current ||
											A().isPaused()
										)
											return [2, !1];
										(H = !0),
											(se = R || {}),
											(de = !be(y[E]) && se.dedupe),
											(ae = function () {
												return (
													!J.current &&
													E === d.current &&
													j.current
												);
											}),
											(ue = function () {
												delete y[E], delete C[E];
											}),
											(pe.label = 1);
									case 1:
										return (
											pe.trys.push([1, 6, , 7]),
											n.set(O, !0),
											k({ isValidating: !0 }),
											de ||
												Vt(
													n,
													E,
													w.current.data,
													w.current.error,
													!0
												),
											de
												? ((G = C[E]), [4, y[E]])
												: [3, 3]
										);
									case 2:
										return (P = pe.sent()), [3, 5];
									case 3:
										return (
											r.loadingTimeout &&
												!n.get(E) &&
												setTimeout(function () {
													H &&
														ae() &&
														A().onLoadingSlow(E, r);
												}, r.loadingTimeout),
											(C[E] = G = hn()),
											[4, (y[E] = t.apply(t, X))]
										);
									case 4:
										(P = pe.sent()),
											setTimeout(function () {
												C[E] === G && ue();
											}, r.dedupingInterval),
											ae() && A().onSuccess(P, E, r),
											(pe.label = 5);
									case 5:
										return C[E] !== G
											? [2, !1]
											: (n.set(U, Be),
											  n.set(O, !1),
											  (fe = { isValidating: !1 }),
											  !be(p[E]) &&
											  (G <= p[E] ||
													G <= D[E] ||
													D[E] === 0)
													? (k(fe), [2, !1])
													: (be(w.current.error) ||
															(fe.error = Be),
													  o(w.current.data, P) ||
															(fe.data = P),
													  o(n.get(E), P) ||
															n.set(E, P),
													  k(fe),
													  de ||
															Vt(
																n,
																E,
																P,
																fe.error,
																!1
															),
													  [3, 7]));
									case 6:
										return (
											(Ae = pe.sent()),
											ue(),
											n.set(O, !1),
											A().isPaused()
												? (k({ isValidating: !1 }),
												  [2, !1])
												: (n.set(U, Ae),
												  w.current.error !== Ae &&
														(k({
															isValidating: !1,
															error: Ae,
														}),
														de ||
															Vt(
																n,
																E,
																Be,
																Ae,
																!1
															)),
												  ae() &&
														(A().onError(Ae, E, r),
														r.shouldRetryOnError &&
															A().onErrorRetry(
																Ae,
																E,
																r,
																V,
																{
																	retryCount:
																		(se.retryCount ||
																			0) +
																		1,
																	dedupe: !0,
																}
															)),
												  [3, 7])
										);
									case 7:
										return (H = !1), [2, !0];
								}
							});
						});
					},
					[E]
				),
				oe = m.useCallback(function (R, P) {
					return ks(n, d.current, R, P);
				}, []);
			if (
				(vr(function () {
					b.current = r;
				}),
				vr(
					function () {
						if (E) {
							var R = j.current,
								P = V.bind(Be, gn),
								G = function () {
									return A().isVisible() && A().isOnline();
								},
								H = 0,
								se = Rs(E, g, function (ae, ue, fe) {
									k(
										At(
											{ error: ue, isValidating: fe },
											o(ae, w.current.data)
												? null
												: { data: ae }
										)
									);
								}),
								de = Rs(E, h, function (ae) {
									if (ae === 0) {
										var ue = Date.now();
										A().revalidateOnFocus &&
											ue > H &&
											G() &&
											((H =
												ue + A().focusThrottleInterval),
											P());
									} else if (ae === 1)
										A().revalidateOnReconnect && G() && P();
									else if (ae === 2) return V();
								});
							return (
								(J.current = !1),
								(d.current = E),
								R && k({ data: x, error: F, isValidating: M }),
								Y() && (be(x) || Rt ? P() : jf(P)),
								(j.current = !0),
								function () {
									(J.current = !0), se(), de();
								}
							);
						}
					},
					[E, V]
				),
				vr(
					function () {
						var R;
						function P() {
							l && R !== -1 && (R = setTimeout(G, l));
						}
						function G() {
							w.current.error ||
							(!u && !A().isVisible()) ||
							(!i && !A().isOnline())
								? P()
								: V(gn).then(function () {
										return P();
								  });
						}
						return (
							P(),
							function () {
								R && (clearTimeout(R), (R = -1));
							}
						);
					},
					[l, u, i, V]
				),
				m.useDebugValue(x),
				a && be(x))
			)
				throw be(F) ? V(gn) : F;
			return {
				mutate: oe,
				get data() {
					return (_.data = !0), x;
				},
				get error() {
					return (_.error = !0), F;
				},
				get isValidating() {
					return (_.isValidating = !0), M;
				},
			};
		}),
		function () {
			for (var e = [], t = 0; t < arguments.length; t++)
				e[t] = arguments[t];
			var r = Wf(e),
				n = r[0],
				o = r[1],
				s = r[2],
				a = At(Ps, m.useContext(mn)),
				c = Os(a, s),
				l = Is,
				u = c.use;
			if (u) for (var i = u.length; i-- > 0; ) l = u[i](l);
			return l(n, o || c.fetcher, c);
		});
	async function Yf(e, t = {}) {
		const r = await fetch(e, t);
		if (!r.ok) throw new Error('Error completing request');
		return await r.json();
	}
	function Zf(e) {
		return {
			bug: '',
			fix: '',
			feature: '',
			maintenance: '',
			release: '',
			tag: '#10B981',
			update: '',
		}[e.toLowerCase()];
	}
	function Xf(e, t) {
		const { data: r, error: n } = Jf(`${e}/api/feed?userId=${t}`, Yf);
		return { feed: r == null ? void 0 : r.feed, isLoading: !n && !r };
	}
	function Qf(e) {
		const { feed: t } = e;
		return I.default.createElement(
			'div',
			{
				className:
					'relative w-full h-auto overflow-hidden overflow-y-auto grid grid-cols-1 gap-0 divide-y divide-gray-100 bg-white p-0',
			},
			t
				? t.map((r) => {
						const n = Uf.htmlToText(r.content);
						return I.default.createElement(
							'a',
							{
								className:
									'w-full h-32 overflow-hidden overflow-ellipsis flex flex-col items-start justify-start p-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50',
								href: `${e.baseUrl}/${r.id}`,
								key: r.id,
								target: '_blank',
								rel: 'noopener noreferrer',
							},
							I.default.createElement(
								'span',
								{
									className:
										'w-full h-auto flex items-center justify-between mb-1',
								},
								I.default.createElement(
									'span',
									{
										className:
											'w-4/6 h-auto overflow-ellipsis overflow-hidden text-md font-medium text-gray-900',
									},
									Ds(r.title, { length: 40 })
								),
								I.default.createElement(
									'span',
									{
										className:
											'w-auto h-auto inline-flex items-center justify-center px-2 py-1 rounded-full text-white text-xs',
										style: { backgroundColor: Zf('Tag') },
									},
									r.type || 'Tag'
								)
							),
							I.default.createElement(
								'p',
								{ className: 'text-xs text-gray-500' },
								xu(new Date(r.published_at), new Date(), {
									addSuffix: !0,
								})
							),
							I.default.createElement(
								'p',
								{
									className:
										'mt-2 overflow-ellipsis overflow-hidden text-sm text-gray-900',
								},
								Ds(n, { length: 80 })
							)
						);
				  })
				: I.default.createElement('span', null, 'Error!')
		);
	}
	function Kf(e) {
		const { feed: t, isLoading: r } = Xf(
				e == null ? void 0 : e.baseUrl,
				e == null ? void 0 : e.userId
			),
			{ value: n, set: o } = Vf('heraldLatestUpdate'),
			[s, a] = m.useState(!1);
		return (
			m.useEffect(() => {
				t && t[0].published_at !== n && (o(t[0].published_at), a(!0));
			}, [t]),
			I.default.createElement(
				Ee,
				{ className: 'relative' },
				({ open: c }) =>
					I.default.createElement(
						I.default.Fragment,
						null,
						I.default.createElement(
							'span',
							{ className: 'relative inline-flex' },
							I.default.createElement(
								Ee.Button,
								{
									className: `${
										c ? '' : 'text-opacity-90'
									} text-gray-500 group bg-orange-700 p-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`,
								},
								e.icon || e.text
							),
							s
								? I.default.createElement(
										'span',
										{
											className:
												'flex absolute h-2 w-2 top-0 right-0',
										},
										I.default.createElement('span', {
											className:
												'animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75',
										}),
										I.default.createElement('span', {
											className:
												'relative inline-flex rounded-full h-2 w-2 bg-red-500',
										})
								  )
								: null
						),
						I.default.createElement(
							Ct,
							{
								as: m.Fragment,
								enter: 'transition ease-out duration-200',
								enterFrom: 'opacity-0 translate-y-1',
								enterTo: 'opacity-100 translate-y-0',
								leave: 'transition ease-in duration-150',
								leaveFrom: 'opacity-100 translate-y-0',
								leaveTo: 'opacity-0 translate-y-1',
							},
							I.default.createElement(
								Ee.Panel,
								{
									className:
										'absolute z-10 w-96 p-0 mt-4 transform translate-x-0 right-0 shadow-md',
								},
								I.default.createElement(
									'div',
									{
										className:
											'w-full overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5',
									},
									r && !t
										? I.default.createElement(
												'div',
												{
													className:
														'relative w-full h-32 p-4 bg-white flex items-center justify-center',
												},
												I.default.createElement('div', {
													style: {
														borderTopColor:
															'transparent',
													},
													className:
														'w-8 h-8 border-2 border-green-500 border-solid rounded-full animate-spin',
												})
										  )
										: I.default.createElement(Qf, {
												baseUrl: e.baseUrl,
												feed: t,
										  }),
									I.default.createElement(
										'div',
										{ className: 'p-0 bg-gray-50' },
										I.default.createElement(
											'a',
											{
												href: 'https://useherald.com',
												className:
													'text-xs flow-root px-2 py-2 text-center transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50',
											},
											'Powered by Herald'
										)
									)
								)
							)
						)
					)
			)
		);
	}
	(ie.Herald = Kf),
		Object.defineProperty(ie, '__esModule', { value: !0 }),
		(ie[Symbol.toStringTag] = 'Module');
});
