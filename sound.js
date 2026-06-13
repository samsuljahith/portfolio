/* ============================================================
   SFX — synthesized UI sounds via WebAudio. Off by default.
   window.SFX.enabled, .toggle(), .play(name)
   ============================================================ */
(function () {
  let ctx = null;
  const SFX = {
    enabled: false,
    _ensure() {
      if (!ctx) {
        try { ctx = new (window.AudioContext || window.webkitAudioContext)(); }
        catch (e) { ctx = null; }
      }
      if (ctx && ctx.state === "suspended") ctx.resume();
      return ctx;
    },
    toggle() {
      this.enabled = !this.enabled;
      if (this.enabled) { this._ensure(); this.play("on"); }
      return this.enabled;
    },
    _tone({ freq = 440, type = "sine", dur = 0.08, gain = 0.05, slide = 0, delay = 0 }) {
      const c = this._ensure();
      if (!c) return;
      const t0 = c.currentTime + delay;
      const osc = c.createOscillator();
      const g = c.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t0);
      if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t0 + dur);
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(gain, t0 + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      osc.connect(g); g.connect(c.destination);
      osc.start(t0); osc.stop(t0 + dur + 0.02);
    },
    play(name) {
      if (!this.enabled && name !== "on") return;
      switch (name) {
        case "hover":
          this._tone({ freq: 880, type: "square", dur: 0.04, gain: 0.018, slide: 220 });
          break;
        case "click":
          this._tone({ freq: 520, type: "square", dur: 0.05, gain: 0.04, slide: 420 });
          this._tone({ freq: 1040, type: "sine", dur: 0.06, gain: 0.025, delay: 0.02 });
          break;
        case "nav":
          this._tone({ freq: 320, type: "sawtooth", dur: 0.09, gain: 0.035, slide: 540 });
          break;
        case "on":
          this._tone({ freq: 440, type: "sine", dur: 0.1, gain: 0.05, slide: 440 });
          this._tone({ freq: 660, type: "sine", dur: 0.12, gain: 0.045, delay: 0.08 });
          break;
        case "open":
          this._tone({ freq: 240, type: "sawtooth", dur: 0.16, gain: 0.04, slide: 700 });
          break;
        case "success":
          this._tone({ freq: 523, type: "sine", dur: 0.1, gain: 0.05 });
          this._tone({ freq: 659, type: "sine", dur: 0.1, gain: 0.05, delay: 0.09 });
          this._tone({ freq: 784, type: "sine", dur: 0.16, gain: 0.05, delay: 0.18 });
          break;
        case "boot":
          this._tone({ freq: 120, type: "sawtooth", dur: 0.5, gain: 0.05, slide: 600 });
          break;
        default: break;
      }
    },
  };
  window.SFX = SFX;
})();
