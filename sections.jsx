/* ============================================================
   SECTIONS — hero, dossier, abilities, missions,
   achievements, resume, comms, footer.
   ============================================================ */
const { useState: useStateS, useEffect: useEffectS, useRef: useRefS } = React;

/* ---------- scroll reveal hook ---------- */
function useReveal() {
  const ref = useRefS(null);
  useEffectS(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(el === n ? n : n));
    if (el.classList.contains("reveal")) io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ---------- zone header ---------- */
function ZoneHead({ num, eyebrow, title, accent, accentClass, sub }) {
  const parts = title.split("|");
  return (
    <div className="zone-head reveal">
      <div className="zone-eyebrow"><span className="num">{num}</span> // {eyebrow}</div>
      <h1 className="zone-title glitch" data-text={title.replace("|", " ")}>
        {parts[0]}{parts[1] && <span className={accentClass || "accent"}>{parts[1]}</span>}
      </h1>
      {sub && <p className="zone-sub">{sub}</p>}
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero({ onNav }) {
  const D = window.PORTFOLIO_DATA;
  const [typed, setTyped] = useStateS("");
  useEffectS(() => {
    let i = 0;
    const full = D.tagline;
    const id = setInterval(() => {
      if (i <= full.length) { setTyped(full.slice(0, i)); i++; }
      else clearInterval(id);
    }, 45);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="home" className="hero" data-screen-label="Hero / Base">
      <div className="hero-inner">
        <div className="hero-eyebrow stagger d1">
          <span className="pill">AI ENGINEER</span>
          <span>MSc DATA SCIENCE · {D.location}</span>
        </div>
        <h1 className="stagger d2">SAMSUL<br />JAHITH S</h1>
        <div className="hero-class stagger d2">CLASS · <b>AGENTIC AI ARCHITECT</b></div>
        <div className="hero-type stagger d3 code-font">
          {typed}<span className="cursor">▋</span>
        </div>
        <p className="hero-bio stagger d4">{D.bio}</p>
        <div className="hero-cta stagger d5">
          <button className="btn btn-primary"
            onMouseEnter={() => window.SFX && window.SFX.play("hover")}
            onClick={() => { window.SFX && window.SFX.play("click"); onNav("missions"); }}>
            <Icon name="rocket" /> View Missions
          </button>
          <a className="btn btn-ghost" href={D.resumeUrl} target="_blank" rel="noopener noreferrer"
            onMouseEnter={() => window.SFX && window.SFX.play("hover")}
            onClick={() => window.SFX && window.SFX.play("click")}>
            <Icon name="download" /> Resume
          </a>
        </div>
      </div>

      {/* floating player card */}
      <div className="player-card stagger d5">
        <div className="pc-head"><span>PLAYER STATUS</span><span>v2.6</span></div>
        <div className="pc-body">
          <div className="pc-row"><span className="k">CALLSIGN</span><span className="v">S. JAHITH</span></div>
          <div className="pc-row"><span className="k">LEVEL</span><span className="v" style={{ color: "var(--cyan)" }}>{D.level}</span></div>
          <div className="pc-row"><span className="k">XP</span><span className="v" style={{ color: "var(--violet-bright)" }}>8,420 / 10,000</span></div>
          <div className="pc-xp"><i style={{ width: "84%" }} /></div>
          <div className="pc-row"><span className="k">RANK</span><span className="v" style={{ color: "var(--magenta)" }}>HACKATHON BUILDER</span></div>
          <div className="pc-row"><span className="k">STATUS</span><span className="v" style={{ color: "var(--green)" }}>● AVAILABLE</span></div>
        </div>
      </div>
    </section>
  );
}

/* ---------- DOSSIER (about) ---------- */
function Dossier() {
  const D = window.PORTFOLIO_DATA;
  const ref = useReveal();
  return (
    <section id="dossier" className="zone" ref={ref} data-screen-label="Dossier / About">
      <ZoneHead num="02" eyebrow="OPERATIVE DOSSIER" title="THE |OPERATIVE" accentClass="accent"
        sub="Identity, history and field record of the operative." />
      <div className="dossier-grid">
        <div className="panel reveal">
          <div className="panel-h"><span className="tick">#</span> SERVICE RECORD</div>
          {D.dossier.map((d, i) => (
            <div className="log-row" key={i}>
              <div className="log-icon"><Icon name={d.icon} /></div>
              <div>
                <div className="lr-title">{d.title}</div>
                <div className="lr-meta">{d.meta}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="panel reveal whoami">
          <div className="panel-h"><span className="tick">#</span> IDENTITY FILE</div>
          {D.whoami.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{
              __html: p
                .replace("agentic AI systems", "<b>agentic AI systems</b>")
                .replace("multi-agent pipelines", "<b>multi-agent pipelines</b>")
                .replace("RAG architectures", "<b>RAG architectures</b>")
            }} />
          ))}
          <div className="status-tags">
            {D.status.map((s, i) => <span className="status-tag" key={i}>{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- RADAR CHART ---------- */
function RadarChart({ data }) {
  const ref = useRefS(null);
  useEffectS(() => {
    const cv = ref.current;
    if (!cv) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = 320;
    cv.width = size * dpr; cv.height = size * dpr;
    const g = cv.getContext("2d");
    g.scale(dpr, dpr);
    const cx = size / 2, cy = size / 2, R = size / 2 - 46;
    const n = data.length;
    let prog = 0;

    function draw() {
      prog = Math.min(1, prog + 0.04);
      g.clearRect(0, 0, size, size);
      // rings
      for (let ring = 1; ring <= 4; ring++) {
        const rr = (R * ring) / 4;
        g.beginPath();
        for (let i = 0; i <= n; i++) {
          const ang = (Math.PI * 2 * i) / n - Math.PI / 2;
          const x = cx + rr * Math.cos(ang), y = cy + rr * Math.sin(ang);
          i === 0 ? g.moveTo(x, y) : g.lineTo(x, y);
        }
        g.strokeStyle = "rgba(120,200,255,0.13)";
        g.lineWidth = 1; g.stroke();
      }
      // spokes + labels
      g.font = '600 10px "JetBrains Mono", monospace';
      g.textAlign = "center"; g.textBaseline = "middle";
      for (let i = 0; i < n; i++) {
        const ang = (Math.PI * 2 * i) / n - Math.PI / 2;
        const x = cx + R * Math.cos(ang), y = cy + R * Math.sin(ang);
        g.beginPath(); g.moveTo(cx, cy); g.lineTo(x, y);
        g.strokeStyle = "rgba(120,200,255,0.1)"; g.stroke();
        const lx = cx + (R + 24) * Math.cos(ang), ly = cy + (R + 24) * Math.sin(ang);
        g.fillStyle = "#8b9bc4"; g.fillText(data[i].label, lx, ly);
      }
      // data polygon
      g.beginPath();
      for (let i = 0; i <= n; i++) {
        const idx = i % n;
        const ang = (Math.PI * 2 * idx) / n - Math.PI / 2;
        const val = (data[idx].value / 100) * R * prog;
        const x = cx + val * Math.cos(ang), y = cy + val * Math.sin(ang);
        i === 0 ? g.moveTo(x, y) : g.lineTo(x, y);
      }
      const grad = g.createLinearGradient(0, 0, size, size);
      grad.addColorStop(0, "rgba(123,92,255,0.45)");
      grad.addColorStop(1, "rgba(40,231,255,0.45)");
      g.fillStyle = grad;
      g.strokeStyle = "#28e7ff"; g.lineWidth = 2;
      g.fill(); g.stroke();
      // vertices
      for (let i = 0; i < n; i++) {
        const ang = (Math.PI * 2 * i) / n - Math.PI / 2;
        const val = (data[i].value / 100) * R * prog;
        const x = cx + val * Math.cos(ang), y = cy + val * Math.sin(ang);
        g.beginPath(); g.arc(x, y, 3.2, 0, Math.PI * 2);
        g.fillStyle = "#28e7ff"; g.shadowColor = "#28e7ff"; g.shadowBlur = 8; g.fill(); g.shadowBlur = 0;
      }
      if (prog < 1) requestAnimationFrame(draw);
    }
    const io = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) { prog = 0; draw(); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(cv);
    const onForce = () => { prog = 0; draw(); };
    window.addEventListener("force-radar", onForce);
    return () => { io.disconnect(); window.removeEventListener("force-radar", onForce); };
  }, []);
  return <canvas ref={ref} style={{ width: 320, height: 320, maxWidth: "100%" }} />;
}

/* ---------- ABILITIES (skills) ---------- */
function Abilities() {
  const D = window.PORTFOLIO_DATA;
  const ref = useReveal();
  const barsRef = useRefS(null);
  useEffectS(() => {
    const el = barsRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.querySelectorAll(".ability-bar i").forEach((bar) => {
            bar.style.width = bar.dataset.w + "%";
          });
          io.disconnect();
        }
      });
    }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const accentMap = { violet: "ab-violet", cyan: "ab-cyan", magenta: "ab-magenta" };
  return (
    <section id="abilities" className="zone" ref={ref} data-screen-label="Abilities / Skills">
      <ZoneHead num="03" eyebrow="ABILITY LOADOUT" title="SKILLS &amp; |EXPERTISE" accentClass="accent-v"
        sub="A broad foundation across AI/ML, generative AI, programming, data engineering, and AI governance." />
      <div className="skills-layout">
        <div className="loadout" ref={barsRef}>
          {D.skillCategories.map((cat, i) => (
            <div className={"ability " + accentMap[cat.accent]} key={i}>
              <div className="ability-top">
                <span className="ability-name">{cat.label}</span>
                <span className="ability-rating">{cat.rating}<span style={{ fontSize: 10, color: "var(--text-faint)" }}>/100</span></span>
              </div>
              <div className="ability-bar"><i data-w={cat.rating} /></div>
              <div className="chips">
                {cat.items.map((it, j) => (
                  <span className="chip" key={j}
                    onMouseEnter={() => window.SFX && window.SFX.play("hover")}>{it}</span>
                ))}
              </div>
            </div>
          ))}
          <div className="tools-row">
            {D.tools.map((t, i) => <span className="tool" key={i}>{t}</span>)}
          </div>
        </div>
        <div className="panel reveal radar-wrap">
          <div className="panel-h" style={{ alignSelf: "flex-start" }}><span className="tick">#</span> CORE STATS</div>
          <RadarChart data={D.radar} />
          <div className="code-font" style={{ fontSize: 11, color: "var(--text-faint)", letterSpacing: 1 }}>
            AGGREGATE COMBAT RATING · 86.3
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- MISSION card with 3D tilt ---------- */
function MissionCard({ project, index }) {
  const ref = useRefS(null);
  const [open, setOpen] = useStateS(false);
  function onMove(e) {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -10;
    const ry = (px - 0.5) * 12;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
    el.style.setProperty("--mx", px * 100 + "%");
    el.style.setProperty("--my", py * 100 + "%");
  }
  function onLeave() {
    const el = ref.current; if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  }
  const badgeClass = project.badge ? project.badge.toLowerCase() : "";
  return (
    <div className="mission reveal" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      onMouseEnter={() => window.SFX && window.SFX.play("hover")}>
      <div className="mission-top">
        <span className="mission-id"><span className="live-dot" />MSN-{String(index + 1).padStart(2, "0")}</span>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {project.badge && <span className={"mission-badge " + badgeClass}>{project.badge}</span>}
          <span className="mission-year">{project.year}</span>
        </div>
      </div>
      <div className="mission-title">{project.title}</div>
      <p className={"mission-desc" + (open ? "" : " clamp")}>{project.description}</p>
      <div className="mission-tech">
        {project.techStack.map((t, i) => <span className="t" key={i}>{t}</span>)}
      </div>
      <div className="mission-foot">
        <a className="mission-access" href={project.github} target="_blank" rel="noopener noreferrer"
          onClick={() => window.SFX && window.SFX.play("click")}>
          <Icon name="github" /> ACCESS <Icon name="arrow" />
        </a>
        <button className="mission-expand"
          onClick={() => { setOpen(!open); window.SFX && window.SFX.play("open"); }}>
          {open ? "[ collapse ]" : "[ briefing ]"}
        </button>
      </div>
    </div>
  );
}

/* ---------- MISSIONS (projects) ---------- */
function Missions() {
  const D = window.PORTFOLIO_DATA;
  const ref = useReveal();
  return (
    <section id="missions" className="zone" ref={ref} data-screen-label="Missions / Projects">
      <ZoneHead num="04" eyebrow="MISSION LOG" title="GITHUB |PROJECTS" accentClass="accent"
        sub={`${D.projects.length} missions spanning agentic AI, multi-agent systems, RAG architectures, and AI governance research.`} />
      <div className="mission-grid">
        {D.projects.map((p, i) => <MissionCard key={i} project={p} index={i} />)}
      </div>
    </section>
  );
}

/* ---------- ACHIEVEMENTS (certs + community) ---------- */
function Achievements() {
  const D = window.PORTFOLIO_DATA;
  const ref = useReveal();
  return (
    <section id="achievements" className="zone" ref={ref} data-screen-label="Achievements / Certs">
      <ZoneHead num="05" eyebrow="ACHIEVEMENTS UNLOCKED" title="RANKS &amp; |COMMUNITY" accentClass="accent-m"
        sub="Certifications earned and the squads, arenas and events on record." />
      <div className="ach-layout">
        {D.certifications.map((c, i) => (
          <div className="cert-card reveal" key={i}>
            <div className="cert-medal"><Icon name="medal" /></div>
            <div className="cert-info">
              <div className="ct">{c.title}</div>
              <div className="cp">{c.provider}</div>
              <div className="cert-prog"><i style={{ width: c.progress + "%" }} /></div>
              <div className="cert-done">✓ {c.progress === 100 ? "ACHIEVEMENT COMPLETE" : c.progress + "% complete"}</div>
            </div>
          </div>
        ))}
        <div className="reveal">
          <div className="panel-h" style={{ justifyContent: "center", marginTop: 6 }}><span className="tick">#</span> SQUADS &amp; EVENTS</div>
          <div className="community-grid">
            {D.community.map((c, i) => (
              <div className="comm-card" key={i}
                onMouseEnter={() => window.SFX && window.SFX.play("hover")}>
                <div className="comm-icon"><Icon name={c.icon} /></div>
                <div className="cmt">{c.title}</div>
                <div className="cmm">{c.type}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- COMMS (resume + contact) ---------- */
function Comms({ onToast }) {
  const D = window.PORTFOLIO_DATA;
  const ref = useReveal();
  function submit(e) {
    e.preventDefault();
    window.SFX && window.SFX.play("success");
    onToast("TRANSMISSION SENT · I'll get back to you soon.");
    e.target.reset();
  }
  return (
    <section id="comms" className="zone" ref={ref} data-screen-label="Comms / Contact">
      {/* resume sub-zone */}
      <div className="resume-zone reveal" style={{ marginBottom: 56 }}>
        <div className="resume-card">
          <h2>EXTRACT <span className="accent">RESUME</span></h2>
          <p>Download the full service record covering agentic AI projects, multi-agent systems, RAG architectures, and AI governance expertise.</p>
          <a className="btn btn-primary" href={D.resumeUrl} target="_blank" rel="noopener noreferrer"
            style={{ margin: "0 auto" }}
            onMouseEnter={() => window.SFX && window.SFX.play("hover")}
            onClick={() => window.SFX && window.SFX.play("click")}>
            <Icon name="download" /> Download Resume
          </a>
        </div>
      </div>

      <ZoneHead num="06" eyebrow="COMMS UPLINK" title="GET IN |TOUCH" accentClass="accent"
        sub="Open channels for collaboration, AI engineering roles, or research." />
      <div className="comms-layout">
        <div className="channels reveal">
          {D.contact.map((c, i) => (
            <a className="channel" key={i} href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              onMouseEnter={() => window.SFX && window.SFX.play("hover")}
              onClick={() => window.SFX && window.SFX.play("click")}>
              <div className="channel-icon"><Icon name={c.icon} /></div>
              <div>
                <div className="ck">{c.label}</div>
                <div className="cv">{c.value}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="panel reveal">
          <div className="panel-h"><span className="tick">#</span> SEND TRANSMISSION</div>
          <form onSubmit={submit}>
            <div className="form-field">
              <label>Callsign / Name</label>
              <input type="text" placeholder="Your name" required />
            </div>
            <div className="form-field">
              <label>Return Frequency / Email</label>
              <input type="email" placeholder="your.email@example.com" required />
            </div>
            <div className="form-field">
              <label>Message</label>
              <textarea placeholder="Your message..." required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}
              onMouseEnter={() => window.SFX && window.SFX.play("hover")}>
              <Icon name="signal" /> Transmit Message
            </button>
          </form>
        </div>
      </div>

      <footer className="foot">
        <div className="c1">© 2026 SAMSUL JAHITH S · ALL SYSTEMS NOMINAL</div>
        <div className="c2">Rebuilt as a <b>game-UI experience</b> · React · Three.js · WebAudio</div>
      </footer>
    </section>
  );
}

Object.assign(window, {
  Hero, Dossier, Abilities, Missions, Achievements, Comms,
});
