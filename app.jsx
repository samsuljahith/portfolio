/* ============================================================
   APP — assembly, boot flow, scroll-spy nav, sound, toast.
   ============================================================ */
const { useState: useStateA, useEffect: useEffectA, useRef: useRefA } = React;

function App() {
  const [booted, setBooted] = useStateA(false);
  const [active, setActive] = useStateA("home");
  const [soundOn, setSoundOn] = useStateA(false);
  const [toast, setToast] = useStateA(null);
  const toastTimer = useRefA(null);

  // mark app ready (triggers hero stagger) once booted
  useEffectA(() => {
    if (booted) document.body.classList.add("app-ready");
  }, [booted]);

  // scroll-spy
  useEffectA(() => {
    const ids = ["home", "dossier", "abilities", "missions", "achievements", "comms"];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4, rootMargin: "-10% 0px -40% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [booted]);

  // FAILSAFE: never let scroll-reveal trap content hidden. A few seconds
  // after boot, force-reveal anything still hidden, fire skill bars + radar.
  // (Covers throttled transitions / environments where IO never fires.)
  useEffectA(() => {
    if (!booted) return;
    const reveal = () => {
      document.querySelectorAll(".reveal:not(.in)").forEach((n) => n.classList.add("in"));
      document.querySelectorAll(".ability-bar i").forEach((b) => {
        if (b.dataset.w) b.style.width = b.dataset.w + "%";
      });
      window.dispatchEvent(new Event("force-radar"));
    };
    const t = setTimeout(reveal, 3500);
    // also reveal on user scroll as a belt-and-braces fallback
    const onScroll = () => {
      document.querySelectorAll(".reveal:not(.in)").forEach((n) => {
        const r = n.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.92) n.classList.add("in");
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
  }, [booted]);

  function nav(id) {
    window.SFX && window.SFX.play("nav");
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 8;
      window.scrollTo({ top: id === "home" ? 0 : y, behavior: "smooth" });
    }
  }

  function toggleSound() {
    if (window.SFX) {
      const v = window.SFX.toggle();
      setSoundOn(v);
    }
  }

  function showToast(msg) {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3600);
  }

  const activeLabel = (window.NAV_ITEMS.find((n) => n.id === active) || {}).label || "BASE";

  return (
    <React.Fragment>
      {!booted && <BootScreen onDone={() => setBooted(true)} />}

      <HudFrame />
      <HudTop active={activeLabel} soundOn={soundOn} onToggleSound={toggleSound} />
      <NavRail active={active} onNav={nav} />
      <MobileNav active={active} onNav={nav} />
      <SysRail />
      <Ticker />

      <main className="zones">
        <Hero onNav={nav} />
        <Dossier />
        <Abilities />
        <Missions />
        <Achievements />
        <Comms onToast={showToast} />
      </main>

      <div className={"toast" + (toast ? " show" : "")}>
        <Icon name="check" />
        <span>{toast}</span>
      </div>
    </React.Fragment>
  );
}

// mount
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// init 3D after a tick so canvas + THREE are ready
window.addEventListener("load", () => {
  if (window.initNeuralCore) window.initNeuralCore();
});
// also try immediately in case load already fired
if (document.readyState === "complete" && window.initNeuralCore) {
  window.initNeuralCore();
}
