/* ============================================================
   NEURAL CORE — Three.js AI core / agent swarm.
   Rotates, drifts, and reacts to mouse + scroll.
   Plus a starfield grid drawn on #bg-grid (2D canvas).
   ============================================================ */
(function () {
  // ---------- 2D animated grid / starfield behind everything ----------
  function initGrid() {
    const cv = document.getElementById("bg-grid");
    if (!cv) return;
    const g = cv.getContext("2d");
    let w, h, dpr;
    const stars = [];
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.width = innerWidth * dpr;
      h = cv.height = innerHeight * dpr;
      cv.style.width = innerWidth + "px";
      cv.style.height = innerHeight + "px";
    }
    resize();
    addEventListener("resize", resize);
    for (let i = 0; i < 90; i++) {
      stars.push({
        x: Math.random(), y: Math.random(),
        z: Math.random() * 0.8 + 0.2,
        s: Math.random() * 1.6 + 0.4,
      });
    }
    let t = 0;
    function draw() {
      t += 0.004;
      g.clearRect(0, 0, w, h);
      // perspective grid floor
      g.save();
      const horizon = h * 0.62;
      g.strokeStyle = "rgba(40,231,255,0.07)";
      g.lineWidth = 1 * dpr;
      // horizontal lines receding
      for (let i = 0; i < 22; i++) {
        const p = ((i / 22) + (t % (1 / 22))) ;
        const yy = horizon + Math.pow(p, 2.3) * (h - horizon);
        g.globalAlpha = Math.max(0, 1 - p) * 0.5;
        g.beginPath(); g.moveTo(0, yy); g.lineTo(w, yy); g.stroke();
      }
      // vertical converging lines
      g.globalAlpha = 0.18;
      const cx = w / 2;
      for (let i = -12; i <= 12; i++) {
        g.beginPath();
        g.moveTo(cx + i * (w / 22), horizon);
        g.lineTo(cx + i * (w / 5), h);
        g.stroke();
      }
      g.restore();
      // drifting stars
      for (const st of stars) {
        st.y += 0.0006 * st.z;
        if (st.y > 1) st.y = 0;
        const px = st.x * w, py = st.y * h;
        g.globalAlpha = st.z * 0.6;
        g.fillStyle = st.z > 0.7 ? "rgba(157,131,255,0.9)" : "rgba(40,231,255,0.7)";
        g.fillRect(px, py, st.s * dpr, st.s * dpr);
      }
      g.globalAlpha = 1;
      requestAnimationFrame(draw);
    }
    draw();
  }

  // ---------- 3D neural core ----------
  function initCore() {
    const mount = document.getElementById("neural-core");
    if (!mount || !window.THREE) return;
    const THREE = window.THREE;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 100);
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(innerWidth, innerHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const COL_VIOLET = new THREE.Color(0x7b5cff);
    const COL_CYAN = new THREE.Color(0x28e7ff);
    const COL_MAGENTA = new THREE.Color(0xff43c8);

    // central icosahedron wireframe (the "core")
    const coreGeo = new THREE.IcosahedronGeometry(2.3, 1);
    const coreWire = new THREE.WireframeGeometry(coreGeo);
    const coreMat = new THREE.LineBasicMaterial({ color: COL_CYAN, transparent: true, opacity: 0.55 });
    const core = new THREE.LineSegments(coreWire, coreMat);
    group.add(core);

    // inner glowing solid core
    const innerGeo = new THREE.IcosahedronGeometry(1.15, 0);
    const innerMat = new THREE.MeshBasicMaterial({ color: COL_VIOLET, transparent: true, opacity: 0.16, wireframe: false });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    group.add(inner);

    // node points on core vertices
    const nodePositions = coreGeo.attributes.position;
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute("position", nodePositions.clone());
    const nodeMat = new THREE.PointsMaterial({
      color: COL_CYAN, size: 0.16, transparent: true, opacity: 0.95,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const nodes = new THREE.Points(nodeGeo, nodeMat);
    group.add(nodes);

    // orbiting agent particles (swarm)
    const AGENTS = 320;
    const agentGeo = new THREE.BufferGeometry();
    const aPos = new Float32Array(AGENTS * 3);
    const aColor = new Float32Array(AGENTS * 3);
    const agentData = [];
    for (let i = 0; i < AGENTS; i++) {
      const r = 3.1 + Math.random() * 2.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      agentData.push({ r, theta, phi, speed: 0.1 + Math.random() * 0.5, tilt: Math.random() * Math.PI });
      const col = Math.random() < 0.5 ? COL_CYAN : (Math.random() < 0.6 ? COL_VIOLET : COL_MAGENTA);
      aColor[i * 3] = col.r; aColor[i * 3 + 1] = col.g; aColor[i * 3 + 2] = col.b;
    }
    agentGeo.setAttribute("position", new THREE.BufferAttribute(aPos, 3));
    agentGeo.setAttribute("color", new THREE.BufferAttribute(aColor, 3));
    const agentMat = new THREE.PointsMaterial({
      size: 0.075, vertexColors: true, transparent: true, opacity: 0.9,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const agents = new THREE.Points(agentGeo, agentMat);
    group.add(agents);

    // connecting "synapse" lines that pulse between random core nodes
    const lineCount = 26;
    const linePts = [];
    const vCount = nodePositions.count;
    for (let i = 0; i < lineCount; i++) {
      const a = Math.floor(Math.random() * vCount);
      const b = Math.floor(Math.random() * vCount);
      linePts.push(
        nodePositions.getX(a), nodePositions.getY(a), nodePositions.getZ(a),
        nodePositions.getX(b), nodePositions.getY(b), nodePositions.getZ(b)
      );
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePts, 3));
    const lineMat = new THREE.LineBasicMaterial({ color: COL_VIOLET, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending });
    const synapses = new THREE.LineSegments(lineGeo, lineMat);
    group.add(synapses);

    // outer ring (HUD orbit)
    const ringGeo = new THREE.RingGeometry(5.2, 5.25, 96);
    const ringMat = new THREE.MeshBasicMaterial({ color: COL_CYAN, transparent: true, opacity: 0.18, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.3;
    group.add(ring);
    const ring2 = ring.clone();
    ring2.scale.set(1.15, 1.15, 1.15);
    ring2.rotation.x = Math.PI / 1.8;
    group.add(ring2);

    // mouse + scroll state
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    addEventListener("mousemove", (e) => {
      mouse.tx = (e.clientX / innerWidth - 0.5) * 2;
      mouse.ty = (e.clientY / innerHeight - 0.5) * 2;
    });
    let scrollY = 0;
    addEventListener("scroll", () => { scrollY = window.scrollY; }, { passive: true });

    addEventListener("resize", () => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    });

    const clock = new THREE.Clock();
    let raf;
    function animate() {
      raf = requestAnimationFrame(animate);
      const dt = clock.getDelta();
      const t = clock.elapsedTime;

      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      // base rotation + mouse parallax
      group.rotation.y += dt * 0.18;
      group.rotation.x += dt * 0.05;
      group.rotation.y += (mouse.x * 0.6 - group.rotation.y * 0) * 0;
      group.rotation.z = mouse.x * 0.12;
      camera.position.x += (mouse.x * 1.6 - camera.position.x) * 0.04;
      camera.position.y += (-mouse.y * 1.2 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      // core pulse
      const pulse = 1 + Math.sin(t * 1.6) * 0.04;
      core.scale.setScalar(pulse);
      inner.scale.setScalar(1 + Math.sin(t * 2.2) * 0.08);
      inner.rotation.x -= dt * 0.4;
      inner.rotation.y += dt * 0.3;
      innerMat.opacity = 0.12 + Math.sin(t * 2.2) * 0.06;
      coreMat.opacity = 0.45 + Math.sin(t * 1.6) * 0.12;

      // synapse flicker
      lineMat.opacity = 0.12 + Math.abs(Math.sin(t * 3.0)) * 0.3;

      // ring spin
      ring.rotation.z += dt * 0.3;
      ring2.rotation.z -= dt * 0.22;

      // agents orbit
      for (let i = 0; i < AGENTS; i++) {
        const a = agentData[i];
        a.theta += dt * a.speed * 0.4;
        const x = a.r * Math.sin(a.phi) * Math.cos(a.theta);
        const y = a.r * Math.cos(a.phi) + Math.sin(t * a.speed + a.tilt) * 0.4;
        const z = a.r * Math.sin(a.phi) * Math.sin(a.theta);
        aPos[i * 3] = x; aPos[i * 3 + 1] = y; aPos[i * 3 + 2] = z;
      }
      agentGeo.attributes.position.needsUpdate = true;

      // gentle scroll-driven zoom out
      const targetZ = 9 + Math.min(scrollY / innerHeight, 3) * 1.4;
      camera.position.z += (targetZ - camera.position.z) * 0.04;

      renderer.render(scene, camera);
    }
    animate();

    // fade core toward edges as user scrolls past hero so content reads
    function fadeOnScroll() {
      const op = Math.max(0.18, 1 - scrollY / (innerHeight * 0.9));
      mount.style.opacity = op;
      requestAnimationFrame(fadeOnScroll);
    }
    fadeOnScroll();

    window.__neuralCore = { scene, camera, renderer, stop: () => cancelAnimationFrame(raf) };
  }

  window.initNeuralCore = function () {
    initGrid();
    initCore();
  };
})();
