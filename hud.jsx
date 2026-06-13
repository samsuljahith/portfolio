/* ============================================================
   HUD CHROME — boot screen, top bar, nav rail, system rail,
   ticker, icons. Exported to window for sections/app.
   ============================================================ */
const { useState, useEffect, useRef } = React;

/* ---------- Icon set (inline SVG, stroke-based) ---------- */
const ICON_PATHS = {
  terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  chip: '<rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  medal: '<circle cx="12" cy="14" r="6"/><path d="M9 8 7 2h10l-2 6"/><path d="M12 12v4M10 14h4"/>',
  signal: '<path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 20V4"/>',
  graduation: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0Z"/><path d="M7 6H4a2 2 0 0 0 0 4h1M17 6h3a2 2 0 0 1 0 4h-1"/>',
  bulb: '<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3-.3 6.2-1.5 6.2-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.6 16 2.5a13.4 13.4 0 0 0-7 0C6.3.6 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.8c0 5.5 3.2 6.7 6.2 7a3.4 3.4 0 0 0-1 2.6V22"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.7a2 2 0 0 0-3 0Z"/><path d="M12 15 9 12a13 13 0 0 1 9-9 13 13 0 0 1-3 12Z"/><path d="M9 12H5s.5-2.8 2-4c1.5-1.2 5-1 5-1M15 12v4s2.8-.5 4-2c1.2-1.5 1-5 1-5"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  soundOn: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',
  soundOff: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  arrow: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
};

function Icon({ name, className }) {
  const p = ICON_PATHS[name] || "";
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: p }} />
  );
}

/* ---------- Boot screen ---------- */
function BootScreen({ onDone }) {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const [lines, setLines] = useState([]);
  const logSteps = [
    "> initializing kernel ......... [OK]",
    "> mounting /agents /rag /llm .. [OK]",
    "> loading neural core ........ [OK]",
    "> calibrating HUD systems .... [OK]",
    "> establishing uplink ........ [OK]",
  ];
  useEffect(() => {
    // bypass for verification / deep-links
    if (location.hash === "#skipboot") { setDone(true); onDone(); return; }
    let p = 0;
    let finished = false;
    const finish = () => {
      if (finished) return; finished = true;
      clearInterval(timer); clearTimeout(failsafe);
      setPct(100); setLines(logSteps);
      setTimeout(() => { setDone(true); setTimeout(onDone, 650); }, 380);
    };
    const timer = setInterval(() => {
      p += Math.random() * 9 + 4;
      if (p >= 100) { finish(); return; }
      setPct(Math.floor(p));
      const idx = Math.min(logSteps.length - 1, Math.floor((p / 100) * logSteps.length));
      setLines(logSteps.slice(0, idx + 1));
    }, 150);
    // wall-clock failsafe: always complete within ~4.5s even if timers throttle
    const failsafe = setTimeout(finish, 4500);
    return () => { clearInterval(timer); clearTimeout(failsafe); };
  }, []);
  return (
    <div className={"boot" + (done ? " done" : "")}>
      <div className="boot-logo">SAMSUL.SYS</div>
      <div className="boot-bar-wrap"><div className="boot-bar" style={{ width: pct + "%" }} /></div>
      <div className="boot-log">
        {lines.map((l, i) => (
          <div key={i}>{l.replace("[OK]", "")}<span className="ok">{l.includes("[OK]") ? "[OK]" : ""}</span></div>
        ))}
      </div>
      <div className="boot-hint">Loading portfolio · <span className="boot-pct">{pct}%</span></div>
    </div>
  );
}

/* ---------- Top status bar ---------- */
function HudTop({ active, soundOn, onToggleSound }) {
  const D = window.PORTFOLIO_DATA;
  const [clock, setClock] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(d.toLocaleTimeString("en-GB", { hour12: false }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="hud-top">
      <div className="brand">&lt;<b>SamsulJahith</b>/&gt;</div>
      <div className="sep hide-sm" />
      <div className="hud-stat hide-sm"><span className="k">CLASS</span><span className="v vi">{D.className}</span></div>
      <div className="sep hide-sm" />
      <div className="hud-stat hide-sm"><span className="k">LEVEL</span><span className="v cy">{D.level}</span></div>
      <div className="sep hide-sm" />
      <div className="hud-stat hide-sm"><span className="k">ZONE</span><span className="v">{active}</span></div>
      <div className="spacer" />
      <div className="live hide-sm"><span className="dot" /> SYSTEM ONLINE</div>
      <div className="sep hide-sm" />
      <button className={"sound-btn" + (soundOn ? " on" : "")} onClick={onToggleSound}
        title="Toggle UI sound">
        <Icon name={soundOn ? "soundOn" : "soundOff"} />
        <span>{soundOn ? "SND ON" : "SND OFF"}</span>
      </button>
      <div className="hud-clock code-font">{clock}</div>
    </div>
  );
}

/* ---------- Nav rail (left) ---------- */
const NAV_ITEMS = [
  { id: "home", label: "BASE", icon: "terminal" },
  { id: "dossier", label: "DOSSIER", icon: "user" },
  { id: "abilities", label: "ABILITY", icon: "chip" },
  { id: "missions", label: "MISSION", icon: "target" },
  { id: "achievements", label: "RANKS", icon: "medal" },
  { id: "comms", label: "COMMS", icon: "signal" },
];

function NavRail({ active, onNav }) {
  return (
    <nav className="nav-rail">
      {NAV_ITEMS.map((it, i) => (
        <div key={it.id}
          className={"nav-item" + (active === it.id ? " active" : "")}
          onClick={() => onNav(it.id)}
          onMouseEnter={() => window.SFX && window.SFX.play("hover")}>
          <span className="idx">{String(i + 1).padStart(2, "0")}</span>
          <Icon name={it.icon} />
          <span className="lbl">{it.label}</span>
        </div>
      ))}
    </nav>
  );
}

function MobileNav({ active, onNav }) {
  return (
    <nav className="mobile-nav">
      {NAV_ITEMS.map((it) => (
        <div key={it.id}
          className={"nav-item" + (active === it.id ? " active" : "")}
          onClick={() => onNav(it.id)}>
          <Icon name={it.icon} />
        </div>
      ))}
    </nav>
  );
}

/* ---------- Right system rail ---------- */
function SysRail() {
  const [load, setLoad] = useState(72);
  const [mem, setMem] = useState(48);
  useEffect(() => {
    const id = setInterval(() => {
      setLoad(60 + Math.floor(Math.random() * 35));
      setMem(40 + Math.floor(Math.random() * 30));
    }, 1400);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="sys-rail">
      <div className="sys-box">
        <div className="t">CORE LOAD</div>
        <div className="big">{load}%</div>
        <div className="sys-bars">
          {Array.from({ length: 7 }).map((_, i) => (
            <i key={i} style={{ animationDelay: i * 0.12 + "s" }} />
          ))}
        </div>
      </div>
      <div className="sys-box">
        <div className="t">MEMORY</div>
        <div className="big" style={{ color: "var(--magenta)" }}>{mem}%</div>
        <div className="t" style={{ marginTop: 6, marginBottom: 0 }}>AGENTS · 320 ACTIVE</div>
      </div>
    </div>
  );
}

/* ---------- Bottom ticker ---------- */
function Ticker() {
  const items = [
    "STATUS: OPEN TO OPPORTUNITIES", "LOCATION: SINGAPORE", "CERT: AWS AI PRACTITIONER",
    "FOCUS: AGENTIC AI · MULTI-AGENT · RAG", "JASSS JOURNAL CO-AUTHOR", "SUPERAI NEXT HACKATHON 2026",
    "MSc DATA SCIENCE · UNIV OF HERTFORDSHIRE",
  ];
  const line = items.map((t, i) => <span key={i}><b>◇</b> {t}</span>);
  return (
    <div className="hud-ticker">
      <div className="tag">LIVE FEED</div>
      <div className="ticker-track">{line}{line}</div>
    </div>
  );
}

/* ---------- HUD corner brackets ---------- */
function HudFrame() {
  return (
    <div className="hud-frame">
      <span className="hud-corner tl" /><span className="hud-corner tr" />
      <span className="hud-corner bl" /><span className="hud-corner br" />
    </div>
  );
}

Object.assign(window, {
  Icon, BootScreen, HudTop, NavRail, MobileNav, SysRail, Ticker, HudFrame, NAV_ITEMS,
});
