!(function (t) {
  var e = {};
  function i(a) {
    if (e[a]) return e[a].exports;
    var r = (e[a] = { i: a, l: !1, exports: {} });
    return t[a].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.m = t),
    (i.c = e),
    (i.d = function (t, e, a) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (i.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (i.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var r in t)
          i.d(
            a,
            r,
            function (e) {
              return t[e];
            }.bind(null, r),
          );
      return a;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, 'a', e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = ''),
    i((i.s = 0));
})([
  function (t, e, i) {
    'use strict';
    i.r(e);
    var a = {};
    i.r(a),
      i.d(a, 'getCurrentTime', function () {
        return r;
      }),
      i.d(a, 'random', function () {
        return s;
      }),
      i.d(a, 'randomPositiveNegative', function () {
        return n;
      }),
      i.d(a, 'isFunction', function () {
        return o;
      }),
      i.d(a, 'isTouchDevice', function () {
        return h;
      }),
      i.d(a, 'requestAnimationFrameTool', function () {
        return c;
      }),
      i.d(a, 'arraySwap', function () {
        return d;
      });
    const r = () => performance.now(),
      s = (t, e) => Math.random() * (e - t) + t,
      n = () => (Math.random() < 0.5 ? -1 : 1),
      o = t => 'function' == typeof t,
      h = () => 'ontouchstart' in window || window.navigator.msMaxTouchPoints,
      c = (() => {
        let t = 1e3 / 60;
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          (e => {
            window.setTimeout(() => {
              const i = r();
              e(i);
              const a = r();
              t = 1e3 / 60 - (a - i);
            }, t);
          })
        );
      })(),
      d = (t, e, i) => {
        const a = t[i];
        (t[i] = t[e]), (t[e] = a);
      };
    var u = {
      linear: function (t, e, i, a) {
        return (i * t) / a + e;
      },
      easeIn: function (t, e, i, a) {
        return i * (t /= a) * t + e;
      },
      easeOut: function (t, e, i, a) {
        return -i * (t /= a) * (t - 2) + e;
      },
      easeInOut: function (t, e, i, a) {
        return (t /= a / 2) < 1
          ? (i / 2) * t * t + e
          : (-i / 2) * (--t * (t - 2) - 1) + e;
      },
    };
    const { requestAnimationFrameTool: l, isFunction: g, isTouchDevice: m } = a;
    class b {
      constructor(t = {}) {
        if (!document.createElement('canvas').getContext)
          return void window.alert(
            'HTML5 Canvas is not supported in your browser.',
          );
        const {
          canvasId: e,
          debug: i,
          width: r,
          height: s,
          highResolution: n,
          loadLimit: o,
          soundOn: h,
        } = t;
        let c = r || window.innerWidth,
          d = s || window.innerHeight;
        (this.canvas = document.getElementById(e)),
          n &&
            ((this.canvas.style.width = c + 'px'),
            (this.canvas.style.height = d + 'px'),
            (c *= 2),
            (d *= 2)),
          (this.highResolution = n),
          (this.canvas.width = c),
          (this.canvas.height = d),
          (this.width = this.canvas.width),
          (this.height = this.canvas.height),
          (this.calWidth = 0.5 * this.width),
          (this.calHeight = 0.5 * this.height),
          (this.debug = !!i),
          (this.ctx = this.canvas.getContext('2d')),
          (this.defaultLayer = 'default'),
          (this.layerArr = [this.defaultLayer]),
          (this.instancesObj = {}),
          (this.instancesObj[this.defaultLayer] = []),
          (this.instancesReactionArr = []),
          (this.utils = a),
          (this.customVariable = {});
        const u = this;
        (this.isTouchDevice = m()),
          (this.debugArr = []),
          (this.assetsObj = { image: {}, audio: {} }),
          (this.assetsCount = { image: 0, audio: 0 }),
          (this.assetsErrorQueue = []),
          (this.assetsErrorCount = 0),
          (this.loadLimit = o || 3),
          (this.soundOn = !!h),
          (this.fps = 0),
          (this.lastTime = 0),
          (this.lastPausedAt = 0),
          (this.pausedTime = 0),
          (this.paused = !1),
          (this.timeMovement = {}),
          (this.timeMovementStartArr = []),
          (this.timeMovementFinishArr = []),
          (this.keyUpListeners = {}),
          (this.keyDownListeners = {}),
          (this.keyPressListeners = {}),
          (this.startAnimate = () => {}),
          (this.paintUnderInstance = () => {}),
          (this.paintAboveInstance = () => {}),
          (this.endAnimate = () => {}),
          (this.touchStartListener = () => {}),
          (this.touchEndListener = () => {}),
          (this.touchMoveListener = () => {}),
          document.addEventListener(
            'keyup',
            t => {
              u.keyListener(t, 'keyup');
            },
            !1,
          ),
          document.addEventListener(
            'keydown',
            t => {
              u.keyListener(t, 'keydown');
            },
            !1,
          ),
          document.addEventListener(
            'keypress',
            t => {
              u.keyListener(t, 'keypress');
            },
            !1,
          ),
          this.isTouchDevice
            ? (document.addEventListener(
                'touchstart',
                t => {
                  u.touchStartListener(t);
                },
                !1,
              ),
              document.addEventListener(
                'touchend',
                t => {
                  u.touchEndListener(t);
                },
                !1,
              ),
              document.addEventListener(
                'touchmove',
                t => {
                  u.touchMoveListener(t);
                },
                !1,
              ))
            : (document.addEventListener(
                'mousedown',
                t => {
                  u.touchStartListener(t);
                },
                !1,
              ),
              document.addEventListener(
                'mouseup',
                t => {
                  u.touchEndListener(t);
                },
                !1,
              ),
              document.addEventListener(
                'mousemove',
                t => {
                  u.touchMoveListener(t);
                },
                !1,
              ));
      }
      triggerReaction(t, e) {
        let i = t,
          a = e;
        this.highResolution && ((i *= 2), (a *= 2)),
          this.instancesReactionArr.forEach(t => {
            t.visible &&
              i >= t.x &&
              i <= t.x + t.width &&
              a >= t.y &&
              a <= t.y + t.height &&
              t.trigger(t, this);
          });
      }
      addAudio(t, e, i = 0) {
        if (!this.soundOn) return;
        i || (this.assetsCount.audio += 1);
        const a = new window.Audio();
        (a.src = e),
          (this.assetsObj.audio[t] = a),
          a.addEventListener(
            'error',
            () => {
              this.assetsErrorQueue.push({
                name: t,
                src: e,
                retry: i + 1,
                type: 'audio',
              });
            },
            !1,
          ),
          a.load();
      }
      getAudio(t) {
        return this.assetsObj.audio[t];
      }
      playAudio(t, e = !1) {
        if (!this.soundOn) return;
        const i = this.getAudio(t);
        if (i) {
          if ((i.play(), !e)) return;
          i.addEventListener(
            'ended',
            () => {
              (i.currentTime = 0), i.play();
            },
            !1,
          );
        }
      }
      pauseAudio(t) {
        const e = this.getAudio(t);
        e && e.pause();
      }
      setVariable(t, e) {
        this.customVariable[t] = e;
      }
      getVariable(t, e = null) {
        const i = this.customVariable[t];
        return i || (null !== e ? (this.setVariable(t, e), e) : null);
      }
      addImg(t, e, i = 0) {
        i || (this.assetsCount.image += 1);
        const a = new window.Image();
        (a.src = e),
          (a.onload = () => {
            this.assetsObj.image[t] = a;
          }),
          (a.onerror = () => {
            this.assetsErrorQueue.push({
              name: t,
              src: e,
              retry: i + 1,
              type: 'image',
            });
          });
      }
      getImg(t) {
        return this.assetsObj.image[t];
      }
      animate(t) {
        const e = t - this.pausedTime,
          i = this;
        this.paused
          ? setTimeout(() => {
              this.animate.call(i, e);
            }, 100)
          : (this.tick(e),
            this.clean(),
            this.startAnimate(this, e),
            this.paintUnderInstance(this),
            this.updateInstances(e),
            this.paintInstances(),
            this.paintAboveInstance(),
            this.endAnimate(this, e),
            this.tickTimeMovement(),
            this.debug && this.showFps(),
            this.debug && this.drawDebug(),
            l(t => {
              this.animate.call(i, t);
            }));
      }
      showFps() {
        this.ctx.save(),
          (this.ctx.fillStyle = 'red'),
          (this.ctx.font = (this.highResolution ? 32 : 16) + 'px Arial'),
          this.ctx.fillText(
            'FPS: ' + this.fps.toFixed(),
            5,
            this.highResolution ? 40 : 20,
          ),
          this.ctx.restore();
      }
      debugLineX(t) {
        this.debugArr.push({ type: 'lineX', y: t });
      }
      debugLineY(t) {
        this.debugArr.push({ type: 'lineY', x: t });
      }
      debugDot(t, e) {
        this.debugArr.push({ type: 'dot', x: t, y: e });
      }
      drawDebug() {
        this.debugArr.forEach(t => {
          const { type: e, x: i, y: a } = t;
          switch (e) {
            case 'dot':
              this.drawDebugDot(i, a);
              break;
            case 'lineX':
              this.drawDebugLine(null, a);
              break;
            case 'lineY':
              this.drawDebugLine(i, null);
          }
        }),
          this.instancesReactionArr.forEach(t => {
            t.visible &&
              ((this.ctx.strokeStyle = 'red'),
              this.ctx.beginPath(),
              this.ctx.rect(t.x, t.y, t.width, t.height),
              this.ctx.stroke());
          });
      }
      drawDebugLine(t, e) {
        let i = [0, e],
          a = [this.width, e];
        t && ((i = [t, 0]), (a = [t, this.height])),
          this.ctx.save(),
          (this.ctx.strokeStyle = 'red'),
          this.ctx.beginPath(),
          this.ctx.moveTo(...i),
          this.ctx.lineTo(...a),
          this.ctx.stroke(),
          this.ctx.restore();
      }
      drawDebugDot(t, e) {
        this.ctx.save(),
          (this.ctx.fillStyle = 'red'),
          this.ctx.beginPath(),
          this.ctx.arc(t, e, 2, 0, 2 * Math.PI, !0),
          this.ctx.fill(),
          (this.ctx.fillStyle = 'white'),
          this.ctx.beginPath(),
          this.ctx.arc(t, e, 1, 0, 2 * Math.PI, !0),
          this.ctx.fill(),
          this.ctx.restore();
      }
      tick(t) {
        this.updateFps(t), (this.lastTime = t);
      }
      updateFps(t) {
        0 === this.lastTime
          ? (this.fps = 60)
          : (this.fps = 1e3 / (t - this.lastTime));
      }
      pixelsPerFrame(t) {
        return t / this.fps;
      }
      tickTimeMovement() {
        this.timeMovementStartArr.forEach(t => {
          this.timeMovement[t].processing = !0;
        }),
          (this.timeMovementStartArr = []),
          this.timeMovementFinishArr.forEach(t => {
            delete this.timeMovement[t];
          }),
          (this.timeMovementFinishArr = []);
      }
      getTimeMovement(t, e, i, a = {}) {
        const { before: r, after: s } = a,
          n = u[a.easing || 'linear'],
          o = a.name || 'default',
          h = this.timeMovement[t];
        if (!h) return;
        h.processing ||
          (this.timeMovementStartArr.push(t),
          (h.store[o] = []),
          e.forEach(t => {
            h.store[o].push({ start: parseFloat(t[0]), end: parseFloat(t[1]) });
          }),
          r && r());
        const c = (t = !1) => {
          const { duration: e } = h;
          let a = e;
          if (!t) {
            const t = this.utils.getCurrentTime(),
              { startTime: e } = h;
            a = t - e;
          }
          const r = h.store[o].map(t => n(a, t.start, t.end - t.start, e));
          i.apply(this, r);
        };
        this.checkTimeMovement(t)
          ? c()
          : (this.timeMovementFinishArr.push(t), c(!0), s && s());
      }
      checkTimeMovement(t) {
        const e = this.timeMovement[t] || {};
        return this.utils.getCurrentTime() <= e.endTime;
      }
      setTimeMovement(t, e) {
        const i = this.utils.getCurrentTime();
        this.timeMovement[t] = {
          startTime: i,
          endTime: i + e,
          duration: e,
          store: {},
        };
      }
      clean() {
        this.ctx.clearRect(0, 0, this.width, this.height), (this.debugArr = []);
      }
      addLayer(t) {
        this.layerArr.push(t), (this.instancesObj[t] = []);
      }
      removeLayer(t) {
        (this.layerArr = this.layerArr.filter(e => e !== t)),
          delete this.instancesObj[t];
      }
      swapLayer(t, e) {
        this.utils.arraySwap(this.layerArr, t, e);
      }
      addInstance(t, e = this.defaultLayer) {
        this.instancesObj[e].push(t),
          t.trigger && this.instancesReactionArr.push(t);
      }
      getInstance(t, e = this.defaultLayer) {
        return this.instancesObj[e].filter(e => e.name === t)[0];
      }
      removeInstance(t, e = this.defaultLayer) {
        const i = this.getInstance(t, e);
        i &&
          ((this.instancesObj[e] = this.instancesObj[e].filter(
            e => e.name !== t,
          )),
          i.trigger &&
            (this.instancesReactionArr = this.instancesReactionArr.filter(
              e => e.name !== t,
            )));
      }
      updateInstances(t) {
        this.layerArr.forEach(e => {
          this.instancesObj[e].forEach(e => {
            e.update && e.update(this, t);
          });
        });
      }
      paintInstances() {
        this.layerArr.forEach(t => {
          this.instancesObj[t].forEach(t => {
            t.paint && t.paint(this);
          });
        });
      }
      togglePaused() {
        const t = this.utils.getCurrentTime();
        (this.paused = !this.paused),
          this.paused
            ? (this.lastPausedAt = t)
            : (this.pausedTime += t - this.lastPausedAt);
      }
      addKeyUpListener(t, e) {
        this.keyUpListeners[t] = e;
      }
      addKeyDownListener(t, e) {
        this.keyDownListeners[t] = e;
      }
      addKeyPressListener(t, e) {
        this.keyPressListeners[t] = e;
      }
      findKeyListener(t, e) {
        return 'keyup' === e
          ? this.keyUpListeners[t]
          : 'keydown' === e
          ? this.keyDownListeners[t]
          : this.keyPressListeners[t];
      }
      keyListener(t, e) {
        let i;
        switch (t.keyCode) {
          case 13:
            i = 'enter';
            break;
          case 32:
            i = 'space';
            break;
          case 37:
            i = 'leftArrow';
            break;
          case 39:
            i = 'rightArrow';
            break;
          case 38:
            i = 'upArrow';
            break;
          case 40:
            i = 'downArrow';
            break;
          default:
            i = t.keyCode;
        }
        const a = this.findKeyListener(i, e);
        a && a();
      }
      load(t, e) {
        const i = setInterval(() => {
          const a = this.assetsCount.image + this.assetsCount.audio,
            r =
              Object.keys(this.assetsObj.image).length +
              Object.keys(this.assetsObj.audio).length;
          e &&
            g(e) &&
            e({ success: r, failed: this.assetsErrorCount, total: a }),
            this.assetsErrorQueue.length > 0 &&
              (this.assetsErrorQueue.forEach(t => {
                const { retry: e, name: i, src: a, type: r } = t;
                e >= this.loadLimit
                  ? (this.assetsErrorCount += 1)
                  : 'image' === r
                  ? this.addImg(i, a, e)
                  : this.addAudio(i, a, e);
              }),
              (this.assetsErrorQueue = [])),
            r === a && (t && g(t) ? t() : this.init(), clearInterval(i));
        }, 200);
      }
      init() {
        const t = this;
        l(e => {
          this.animate.call(t, e);
        });
      }
    }
    class f {
      constructor(t = {}) {
        const { name: e, painter: i, action: a, trigger: r } = t;
        (this.name = e),
          (this.x = 0),
          (this.y = 0),
          (this.width = 0),
          (this.height = 0),
          (this.ax = 0),
          (this.ay = 0),
          (this.vx = 0),
          (this.vy = 0),
          (this.visible = !0),
          (this.painter = i || null),
          (this.action = a || null),
          (this.trigger = r || null),
          (this.ready = !1);
      }
      paint(t) {
        null !== this.painter && this.visible && this.painter(this, t);
      }
      update(t, e) {
        null !== this.action && this.action(this, t, e);
      }
      updateWidth(t) {
        (this.width = t), (this.calWidth = t / 2);
      }
      updateHeight(t) {
        (this.height = t), (this.calHeight = t / 2);
      }
    }
    var O = 'LAND',
      T = 'OUT',
      y = function (t) {
        return t.checkTimeMovement('MOVE_DOWN_MOVEMENT');
      },
      v = function (t, e) {
        var i = e ? e.pixelsPerFrame : t.pixelsPerFrame.bind(t),
          a = t.getVariable('SUCCESS_COUNT'),
          r = 2 * t.getVariable('BLOCK_HEIGHT');
        return i(a <= 4 ? 1.25 * r : r);
      },
      p = function (t, e) {
        var i,
          a = t.getVariable('SUCCESS_COUNT'),
          r = t.getVariable('GAME_SCORE'),
          s = t.getVariable('GAME_USER_OPTION').hookSpeed;
        if (s) return s(a, r);
        switch (!0) {
          case a < 1:
            i = 0;
            break;
          case a < 10:
            i = 1;
            break;
          case a < 20:
            i = 0.8;
            break;
          case a < 30:
            i = 0.7;
            break;
          default:
            i = 0.74;
        }
        // !TODO udaya
        i = 0.5;
        return t.getVariable('HARD_MODE') && (i = 1.1), Math.sin(e / (200 / i));
      },
      E = function (t, e) {
        var i = t.getVariable('SUCCESS_COUNT'),
          a = t.getVariable('GAME_SCORE'),
          r = t.getVariable('GAME_USER_OPTION').landBlockSpeed;
        if (r) return r(i, a);
        var s,
          n = t.width;
        switch (!0) {
          case i < 5:
            s = 0;
            break;
          case i < 13:
            s = 0.001;
            break;
          case i < 23:
            s = 0.002;
            break;
          default:
            s = 0.003;
        }
        return Math.cos(e / 200) * s * n;
      },
      w = function (t) {
        return t.checkTimeMovement('HOOK_DOWN_MOVEMENT')
          ? 'HOOK_DOWN'
          : t.checkTimeMovement('HOOK_UP_MOVEMENT')
          ? 'HOOK_UP'
          : 'HOOK_NORMAL';
      },
      x = function (t) {
        if (
          t.getVariable('GAME_START_NOW') &&
          !((t.debug && t.paused) || 'HOOK_NORMAL' !== w(t))
        ) {
          t.removeInstance('tutorial'), t.removeInstance('tutorial-arrow');
          var e = t.getInstance('block_'.concat(t.getVariable('BLOCK_COUNT')));
          e &&
            'SWING' === e.status &&
            (t.setTimeMovement('HOOK_UP_MOVEMENT', 500),
            (e.status = 'BEFORE_DROP'));
        }
      },
      _ = function (t) {
        var e = t.getVariable('GAME_USER_OPTION').setGameFailed,
          i = t.getVariable('FAILED_COUNT') + 1;
        t.setVariable('FAILED_COUNT', i),
          t.setVariable('PERFECT_COUNT', 0),
          e && e(i),
          i >= 3 &&
            (t.pauseAudio('bgm'),
            t.playAudio('game-over'),
            t.setVariable('GAME_START_NOW', !1));
      },
      I = function (t, e) {
        var i = t.getVariable('GAME_USER_OPTION'),
          a = i.setGameScore,
          r = i.successScore,
          s = i.perfectScore,
          n = t.getVariable('PERFECT_COUNT', 0),
          o = e ? n + 1 : 0,
          h = t.getVariable('GAME_SCORE') + (r || 25) + (s || 25) * o;
        t.setVariable('GAME_SCORE', h),
          t.setVariable('PERFECT_COUNT', o),
          a && a(h);
      },
      A = function (t, e) {
        var i = e.string,
          a = e.size,
          r = e.x,
          s = e.y,
          n = e.textAlign,
          o = e.fontName,
          h = void 0 === o ? 'wenxue' : o,
          c = e.fontWeight,
          d = void 0 === c ? 'normal' : c,
          u = t.ctx,
          l = a,
          g = 0.1 * l;
        u.save(), u.beginPath();
        var m = u.createLinearGradient(0, 0, 0, s);
        m.addColorStop(0, '#FAD961'),
          m.addColorStop(1, '#F76B1C'),
          (u.fillStyle = m),
          (u.lineWidth = g),
          (u.strokeStyle = '#FFF'),
          (u.textAlign = n || 'center'),
          (u.font = ''.concat(d, ' ').concat(l, 'px ').concat(h)),
          u.strokeText(i, r, s),
          u.fillText(i, r, s),
          u.restore();
      },
      M = function (t, e, i) {
        var a = e + 1 >= t.length ? t.length - 1 : e,
          r = t[a],
          s = t[a + 1 >= t.length - 1 ? a : a + 1],
          n = function (t) {
            var e = r[t],
              a = s[t];
            return Math.round(e + (a - e) * i);
          };
        return 'rgb('.concat(n(0), ', ').concat(n(1), ', ').concat(n(2), ')');
      },
      L = function (t) {
        !(function (t) {
          var e = t.ctx.createLinearGradient(0, 0, 0, t.height),
            i = [
              [200, 255, 150],
              [105, 230, 240],
              [90, 190, 240],
              [85, 100, 190],
              [55, 20, 35],
              [75, 25, 35],
              [25, 0, 10],
            ],
            a = t.getVariable('BACKGROUND_LINEAR_GRADIENT_OFFSET_HEIGHT', 0);
          y(t) &&
            t.setVariable(
              'BACKGROUND_LINEAR_GRADIENT_OFFSET_HEIGHT',
              a + 1.5 * v(t),
            );
          var r = parseInt(a / t.height, 10),
            s = (a % t.height) / t.height,
            n = M(i, r, s),
            o = M(i, r + 1, s);
          e.addColorStop(0, o),
            e.addColorStop(1, n),
            (t.ctx.fillStyle = e),
            t.ctx.beginPath(),
            t.ctx.rect(0, 0, t.width, t.height),
            t.ctx.fill();
          var h = function () {
            (t.ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'),
              t.ctx.fillRect(0, 0, t.width, t.height);
          };
          t.getTimeMovement('LIGHTNING_MOVEMENT', [], function () {}, {
            before: h,
            after: h,
          });
        })(t),
          (function (t) {
            var e = t.getImg('background'),
              i = e.width,
              a = (e.height * t.width) / i,
              r = t.getVariable('BACKGROUND_IMG_OFFSET_HEIGHT', t.height - a);
            r > t.height ||
              (t.getTimeMovement(
                'MOVE_DOWN_MOVEMENT',
                [
                  [
                    r,
                    r +
                      v(t, {
                        pixelsPerFrame: function (t) {
                          return t / 2;
                        },
                      }),
                  ],
                ],
                function (t) {
                  r = t;
                },
                { name: 'background' },
              ),
              t.getTimeMovement(
                'BG_INIT_MOVEMENT',
                [[r, r + a / 4]],
                function (t) {
                  r = t;
                },
              ),
              t.setVariable('BACKGROUND_IMG_OFFSET_HEIGHT', r),
              t.setVariable('LINE_INITIAL_OFFSET', t.height - 0.394 * a),
              t.ctx.drawImage(e, 0, r, t.width, a));
          })(t);
      },
      N = function (t, e, i) {
        var a = t;
        a.ready ||
          ((a.y = e.getVariable('LINE_INITIAL_OFFSET')),
          (a.ready = !0),
          (a.collisionX = e.width - e.getVariable('BLOCK_WIDTH'))),
          e.getTimeMovement(
            'MOVE_DOWN_MOVEMENT',
            [
              [
                t.y,
                t.y +
                  v(e, {
                    pixelsPerFrame: function (t) {
                      return t / 2;
                    },
                  }),
              ],
            ],
            function (e) {
              t.y = e;
            },
            { name: 'line' },
          );
        var r = E(e, i);
        (t.x += r), (t.collisionX += r);
      },
      V = function (t, e) {
        var i = e.ctx;
        e.debug &&
          (i.save(),
          i.beginPath(),
          (i.strokeStyle = 'red'),
          i.moveTo(t.x, t.y),
          i.lineTo(t.collisionX, t.y),
          (i.lineWidth = 1),
          i.stroke(),
          i.restore());
      },
      S = function (t) {
        var e = t.count,
          i = function (t) {
            return t[Math.floor(Math.random() * t.length)];
          };
        t.imgName = i(
          e > 6 ? ['c4', 'c5', 'c6', 'c7', 'c8'] : ['c1', 'c2', 'c3'],
        );
      },
      k = function (t, e) {
        if (!t.ready) {
          (t.ready = !0),
            S(t),
            (t.width = e.getVariable('CLOUD_SIZE')),
            (t.height = e.getVariable('CLOUD_SIZE'));
          var i = e.width,
            a = e.height,
            r = [
              { x: 0.1 * i, y: 0.66 * -a },
              { x: 0.65 * i, y: 0.33 * -a },
              { x: 0.1 * i, y: 0 },
              { x: 0.65 * i, y: 0.33 * a },
            ][t.index - 1];
          (t.x = e.utils.random(r.x, 1.2 * r.x)),
            (t.originX = t.x),
            (t.ax = e.pixelsPerFrame(
              t.width *
                e.utils.random(0.05, 0.08) *
                e.utils.randomPositiveNegative(),
            )),
            (t.y = e.utils.random(r.y, 1.2 * r.y));
        }
        (t.x += t.ax),
          (t.x >= t.originX + t.width || t.x <= t.originX - t.width) &&
            (t.ax *= -1),
          y(e) && (t.y += 1.2 * v(e)),
          t.y >= e.height && ((t.y = 0.66 * -e.height), (t.count += 4), S(t));
      },
      C = function (t, e) {
        var i = e.ctx,
          a = e.getImg(t.imgName);
        i.drawImage(a, t.x, t.y, t.width, t.height);
      },
      R = function (t, e, i) {
        var a = e.getVariable('ROPE_HEIGHT');
        t.ready || ((t.x = e.width / 2), (t.y = -1.5 * a), (t.ready = !0)),
          e.getTimeMovement(
            'HOOK_UP_MOVEMENT',
            [[t.y, t.y - a]],
            function (e) {
              t.y = e;
            },
            {
              after: function () {
                t.y = -1.5 * a;
              },
            },
          ),
          e.getTimeMovement(
            'HOOK_DOWN_MOVEMENT',
            [[t.y, t.y + a]],
            function (e) {
              t.y = e;
            },
            { name: 'hook' },
          );
        var r = e.getVariable('INITIAL_ANGLE');
        (t.angle = r * p(e, i)),
          (t.weightX = t.x + Math.sin(t.angle) * a),
          (t.weightY = t.y + Math.cos(t.angle) * a);
      },
      P = function (t, e) {
        var i = e.ctx,
          a = e.getVariable('ROPE_HEIGHT'),
          r = 0.1 * a,
          s = e.getImg('hook');
        i.save(),
          i.translate(t.x, t.y),
          i.rotate(2 * Math.PI - t.angle),
          i.translate(-t.x, -t.y),
          e.ctx.drawImage(s, t.x - r / 2, t.y, r, a + 5),
          i.restore();
      },
      F = function (t, e, i) {
        var a = e.width,
          r = e.height,
          s = t.name;
        if (!t.ready) {
          t.ready = !0;
          var n = 0.2 * a;
          t.updateWidth(n),
            (t.height = 0.46 * n),
            (t.x = e.calWidth - t.calWidth),
            (t.y = 0.45 * r),
            'tutorial' !== s && (t.y += 1.2 * t.height);
        }
        'tutorial' !== s && (t.y += Math.cos(i / 200) * t.height * 0.01);
      },
      D = function (t, e) {
        if (
          !e.checkTimeMovement('TUTORIAL_MOVEMENT') &&
          'HOOK_NORMAL' === w(e)
        ) {
          var i = e.ctx,
            a = t.name,
            r = e.getImg(a);
          i.drawImage(r, t.x, t.y, t.width, t.height);
        }
      },
      G = function (t, e) {
        'ROTATE_LEFT' === t.status
          ? t.y - t.width >= e.height &&
            ((t.visible = !1), (t.status = T), _(e))
          : t.y >= e.height && ((t.visible = !1), (t.status = T), _(e));
      },
      H = function (t, e, i) {
        var a = t,
          r = e.getVariable('ROPE_HEIGHT');
        if (a.visible) {
          a.ready ||
            ((a.ready = !0),
            (a.status = 'SWING'),
            t.updateWidth(e.getVariable('BLOCK_WIDTH')),
            t.updateHeight(e.getVariable('BLOCK_HEIGHT')),
            (t.x = e.width / 2),
            (t.y = -1.5 * r));
          var s = e.getInstance('line');
          switch (a.status) {
            case 'SWING':
              e.getTimeMovement(
                'HOOK_DOWN_MOVEMENT',
                [[t.y, t.y + r]],
                function (e) {
                  t.y = e;
                },
                { name: 'block' },
              ),
                (function (t, e, i) {
                  var a = e.getVariable('ROPE_HEIGHT');
                  if ('SWING' === t.status) {
                    var r = t,
                      s = e.getVariable('INITIAL_ANGLE');
                    (r.angle = s * p(e, i)),
                      (r.weightX = r.x + Math.sin(r.angle) * a),
                      (r.weightY = r.y + Math.cos(r.angle) * a);
                  }
                })(t, e, i);
              break;
            case 'BEFORE_DROP':
              (a.x = t.weightX - t.calWidth),
                (a.y = t.weightY + 0.3 * t.height),
                (a.rotate = 0),
                (a.ay = e.pixelsPerFrame(3e-4 * e.height)),
                (a.startDropTime = i),
                (a.status = 'DROP');
              break;
            case 'DROP':
              var n = i - a.startDropTime;
              (a.startDropTime = i),
                (a.vy += a.ay * n),
                (a.y += a.vy * n + 0.5 * a.ay * Math.pow(n, 2));
              var o = (function (t, e) {
                  return t.y + t.height >= e.y
                    ? t.x < e.x - t.calWidth || t.x > e.collisionX + t.calWidth
                      ? 1
                      : t.x < e.x
                      ? 2
                      : t.x > e.collisionX
                      ? 3
                      : t.x > e.x + 0.8 * t.calWidth &&
                        t.x < e.x + 1.2 * t.calWidth
                      ? 5
                      : 4
                    : 0;
                })(t, s),
                h = s.y - t.height,
                c = function (t) {
                  (t.originOutwardAngle = Math.atan(
                    t.height / t.outwardOffset,
                  )),
                    (t.originHypotenuse = Math.sqrt(
                      Math.pow(t.height, 2) + Math.pow(t.outwardOffset, 2),
                    )),
                    e.playAudio('rotate');
                };
              switch (o) {
                case 1:
                  G(t, e);
                  break;
                case 2:
                  (a.status = 'ROTATE_LEFT'),
                    (t.y = h),
                    (t.outwardOffset = s.x + t.calWidth - t.x),
                    c(t);
                  break;
                case 3:
                  (a.status = 'ROTATE_RIGHT'),
                    (t.y = h),
                    (t.outwardOffset = s.collisionX + t.calWidth - t.x),
                    c(t);
                  break;
                case 4:
                case 5:
                  a.status = O;
                  var d = e.getVariable('SUCCESS_COUNT');
                  !(function (t) {
                    var e = t.getVariable('GAME_USER_OPTION').setGameSuccess,
                      i = t.getVariable('SUCCESS_COUNT') + 1;
                    t.setVariable('SUCCESS_COUNT', i),
                      t.getVariable('HARD_MODE') &&
                        t.setVariable(
                          'ROPE_HEIGHT',
                          t.height * t.utils.random(0.35, 0.55),
                        ),
                      e && e(i);
                  })(e),
                    e.setTimeMovement('MOVE_DOWN_MOVEMENT', 500),
                    (10 !== d && 15 !== d) ||
                      e.setTimeMovement('LIGHTNING_MOVEMENT', 150),
                    (t.y = h),
                    (s.y = h),
                    (s.x = a.x - a.calWidth),
                    (s.collisionX = s.x + a.width);
                  var u = 0.3 * a.width;
                  (a.x > e.width - 2 * u || a.x < -u) &&
                    e.setVariable('HARD_MODE', !0),
                    5 === o
                      ? ((t.perfect = !0),
                        I(e, !0),
                        e.playAudio('drop-perfect'))
                      : (I(e), e.playAudio('drop'));
              }
              break;
            case O:
              e.getTimeMovement(
                'MOVE_DOWN_MOVEMENT',
                [
                  [
                    t.y,
                    t.y +
                      v(e, {
                        pixelsPerFrame: function (t) {
                          return t / 2;
                        },
                      }),
                  ],
                ],
                function (i) {
                  t.visible && ((t.y = i), t.y > e.height && (t.visible = !1));
                },
                { name: t.name },
              ),
                (t.x += E(e, i));
              break;
            case 'ROTATE_LEFT':
            case 'ROTATE_RIGHT':
              var l = 'ROTATE_RIGHT' === a.status,
                g = e.pixelsPerFrame(4 * Math.PI),
                m = l ? 1 : -1;
              if (l ? t.rotate > 1.3 : t.rotate < -1.3)
                (t.rotate += (g / 8) * m),
                  (t.y += e.pixelsPerFrame(0.7 * e.height)),
                  (t.x += e.pixelsPerFrame(0.3 * e.width) * m);
              else {
                var b = (t.calWidth - t.outwardOffset) / t.calWidth;
                (b = b > 0.5 ? b : 0.5), (t.rotate += g * b * m);
                var f = t.originOutwardAngle + t.rotate,
                  T = l ? s.collisionX + t.calWidth : s.x + t.calWidth,
                  y = s.y;
                (t.x = T - Math.cos(f) * t.originHypotenuse),
                  (t.y = y - Math.sin(f) * t.originHypotenuse);
              }
              G(t, e);
          }
        }
      },
      U = function (t, e) {
        var i = t.perfect,
          a = e.getImg(i ? 'block-perfect' : 'block');
        e.ctx.drawImage(a, t.x, t.y, t.width, t.height);
      },
      W = function (t, e) {
        switch (t.status) {
          case 'SWING':
            !(function (t, e) {
              var i = e.getImg('blockRope');
              e.ctx.drawImage(
                i,
                t.weightX - t.calWidth,
                t.weightY,
                t.width,
                1.3 * t.height,
              );
              var a = t.weightX - t.calWidth;
              e.debugLineY(a);
            })(t, e);
            break;
          case 'DROP':
          case O:
            U(t, e);
            break;
          case 'ROTATE_LEFT':
          case 'ROTATE_RIGHT':
            !(function (t, e) {
              var i = e.ctx;
              i.save(),
                i.translate(t.x, t.y),
                i.rotate(t.rotate),
                i.translate(-t.x, -t.y),
                U(t, e),
                i.restore();
            })(t, e);
        }
      },
      K = function (t, e) {
        var i = t.visible,
          a = t.ready,
          r = t.type;
        if (i) {
          var s = e.getVariable('CLOUD_SIZE');
          if (!a) {
            var n = (function (t, e) {
              var i = t.width,
                a = t.height,
                r = t.utils.random,
                s = t.getVariable('CLOUD_SIZE');
              return {
                bottomToTop: {
                  x: i * r(0.3, 0.7),
                  y: a,
                  vx: 0,
                  vy: 0.7 * t.pixelsPerFrame(a) * -1,
                },
                leftToRight: {
                  x: -1 * s,
                  y: a * r(0.3, 0.6),
                  vx: 0.4 * t.pixelsPerFrame(i),
                  vy: 0.1 * t.pixelsPerFrame(a) * -1,
                },
                rightToLeft: {
                  x: i,
                  y: a * r(0.2, 0.5),
                  vx: 0.4 * t.pixelsPerFrame(i) * -1,
                  vy: 0.1 * t.pixelsPerFrame(a),
                },
                rightTopToLeft: {
                  x: i,
                  y: 0,
                  vx: 0.6 * t.pixelsPerFrame(i) * -1,
                  vy: 0.5 * t.pixelsPerFrame(a),
                },
              }[e];
            })(e, r);
            (t.ready = !0),
              (t.width = s),
              (t.height = s),
              (t.x = n.x),
              (t.y = n.y),
              (t.vx = n.vx),
              (t.vy = n.vy);
          }
          (t.x += t.vx),
            (t.y += t.vy),
            (t.y + s < 0 || t.y > e.height || t.x + s < 0 || t.x > e.width) &&
              (t.visible = !1);
        }
      },
      j = function (t, e) {
        var i = e.ctx,
          a = e.getImg(t.imgName);
        i.drawImage(a, t.x, t.y, t.width, t.height);
      },
      B = function (t, e, i) {
        if (t.getVariable('FLIGHT_COUNT') !== e) {
          var a = new f({ name: 'flight_'.concat(e), action: K, painter: j });
          (a.imgName = 'f'.concat(e)),
            (a.type = i),
            t.addInstance(a, 'FLIGHT_LAYER'),
            t.setVariable('FLIGHT_COUNT', e);
        }
      },
      X = function (t) {
        if (t.getVariable('GAME_START_NOW')) {
          var e = t.getVariable('SUCCESS_COUNT', 0),
            i = t.getVariable('FAILED_COUNT'),
            a = t.getVariable('GAME_SCORE', 0),
            r = Number(e) > 99 ? 0.1 * t.width : 0;
          A(t, {
            string: 'floor',
            size: 0.06 * t.width,
            x: 0.24 * t.width + r,
            y: 0.12 * t.width,
            textAlign: 'left',
            fontName: 'Arial',
            fontWeight: 'bold',
          }),
            A(t, {
              string: e,
              size: 0.17 * t.width,
              x: 0.22 * t.width + r,
              y: 0.2 * t.width,
              textAlign: 'right',
            });
          var s = t.getImg('score'),
            n = s.width,
            o = s.height,
            h = 0.35 * t.width,
            c = (o * h) / n;
          t.ctx.drawImage(s, 0.61 * t.width, 0.038 * t.width, h, c),
            A(t, {
              string: a,
              size: 0.06 * t.width,
              x: 0.9 * t.width,
              y: 0.11 * t.width,
              textAlign: 'right',
            });
          for (
            var d = t.ctx,
              u = t.getImg('heart'),
              l = u.width,
              g = u.height,
              m = 0.08 * t.width,
              b = (g * m) / l,
              f = 1;
            f <= 3;
            f += 1
          )
            d.save(),
              f <= i && (d.globalAlpha = 0.2),
              d.drawImage(
                u,
                0.66 * t.width + (f - 1) * m,
                0.16 * t.width,
                m,
                b,
              ),
              d.restore();
        }
      },
      Y = function (t) {
        if (t.getVariable('GAME_START_NOW')) {
          var e = t.getInstance('block_'.concat(t.getVariable('BLOCK_COUNT')));
          if (!e || [O, T].indexOf(e.status) > -1) {
            if (y(t) && v(t)) return;
            if (t.checkTimeMovement('HOOK_UP_MOVEMENT')) return;
            var i = (function (t) {
                var e = t.getVariable('SUCCESS_COUNT'),
                  i = t.getVariable('GAME_SCORE'),
                  a = t.getVariable('GAME_USER_OPTION').hookAngle;
                if (a) return a(e, i);
                if (t.getVariable('HARD_MODE')) return 90;
                switch (!0) {
                  case e < 10:
                    return 30;
                  case e < 20:
                    return 60;
                  default:
                    return 80;
                }
              })(t),
              a =
                (Math.PI *
                  t.utils.random(i, i + 5) *
                  t.utils.randomPositiveNegative()) /
                180;
            t.setVariable('BLOCK_COUNT', t.getVariable('BLOCK_COUNT') + 1),
              t.setVariable('INITIAL_ANGLE', a),
              t.setTimeMovement('HOOK_DOWN_MOVEMENT', 500);
            var r = new f({
              name: 'block_'.concat(t.getVariable('BLOCK_COUNT')),
              action: H,
              painter: W,
            });
            t.addInstance(r);
          }
          switch (Number(t.getVariable('SUCCESS_COUNT', 0))) {
            case 2:
              B(t, 1, 'leftToRight');
              break;
            case 6:
              B(t, 2, 'rightToLeft');
              break;
            case 8:
              B(t, 3, 'leftToRight');
              break;
            case 14:
              B(t, 4, 'bottomToTop');
              break;
            case 18:
              B(t, 5, 'bottomToTop');
              break;
            case 22:
              B(t, 6, 'bottomToTop');
              break;
            case 25:
              B(t, 7, 'rightTopToLeft');
          }
        }
      };
    window.TowerGame = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = t.width,
        i = t.height,
        a = t.canvasId,
        r = t.soundOn,
        s = new b({
          canvasId: a,
          highResolution: !0,
          width: e,
          height: i,
          soundOn: r,
        }),
        n = function (t) {
          return './assets/'.concat(t);
        };
      s.addImg('background', n('background.png')),
        s.addImg('hook', n('hook.png')),
        s.addImg('blockRope', n('block-rope.png')),
        s.addImg('block', n('block.png')),
        s.addImg('block-perfect', n('block-perfect.png'));
      for (var o = 1; o <= 8; o += 1)
        s.addImg('c'.concat(o), n('c'.concat(o, '.png')));
      s.addLayer('FLIGHT_LAYER');
      for (var h = 1; h <= 7; h += 1)
        s.addImg('f'.concat(h), n('f'.concat(h, '.png')));
      s.swapLayer(0, 1),
        s.addImg('tutorial', n('tutorial.png')),
        s.addImg('tutorial-arrow', n('tutorial-arrow.png')),
        s.addImg('heart', n('heart.png')),
        s.addImg('score', n('score.png')),
        s.addAudio('drop-perfect', n('drop-perfect.mp3')),
        s.addAudio('drop', n('drop.mp3')),
        s.addAudio('game-over', n('game-over.mp3')),
        s.addAudio('rotate', n('rotate.mp3')),
        s.addAudio('bgm', n('bgm.mp3')),
        s.setVariable('BLOCK_WIDTH', 0.25 * s.width),
        s.setVariable('BLOCK_HEIGHT', 0.71 * s.getVariable('BLOCK_WIDTH')),
        s.setVariable('CLOUD_SIZE', 0.3 * s.width),
        s.setVariable('ROPE_HEIGHT', 0.4 * s.height),
        s.setVariable('BLOCK_COUNT', 0),
        s.setVariable('SUCCESS_COUNT', 0),
        s.setVariable('FAILED_COUNT', 0),
        s.setVariable('GAME_SCORE', 0),
        s.setVariable('HARD_MODE', !1),
        s.setVariable('GAME_USER_OPTION', t);
      for (var c = 1; c <= 4; c += 1) {
        var d = new f({ name: 'cloud_'.concat(c), action: k, painter: C });
        (d.index = c), (d.count = 5 - c), s.addInstance(d);
      }
      var u = new f({ name: 'line', action: N, painter: V });
      s.addInstance(u);
      var l = new f({ name: 'hook', action: R, painter: P });
      return (
        s.addInstance(l),
        (s.startAnimate = Y),
        (s.endAnimate = X),
        (s.paintUnderInstance = L),
        s.addKeyDownListener('enter', function () {
          s.debug && s.togglePaused();
        }),
        (s.touchStartListener = function () {
          x(s);
        }),
        (s.playBgm = function () {
          s.playAudio('bgm', !0);
        }),
        (s.pauseBgm = function () {
          s.pauseAudio('bgm');
        }),
        (s.start = function () {
          var t = new f({ name: 'tutorial', action: F, painter: D });
          s.addInstance(t);
          var e = new f({ name: 'tutorial-arrow', action: F, painter: D });
          s.addInstance(e),
            s.setTimeMovement('BG_INIT_MOVEMENT', 500),
            s.setTimeMovement('TUTORIAL_MOVEMENT', 500),
            s.setVariable('GAME_START_NOW', !0);
        }),
        s
      );
    };
  },
]);
