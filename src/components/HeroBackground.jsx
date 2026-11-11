import { useEffect, useRef, useSyncExternalStore } from "react";
import * as THREE from "three";
import { SCENES, PALETTES } from "./Heroscenes";

// Follows the dark/light toggle so the scene colours always match the site.
function subscribeTheme(onChange) {
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
}
const getTheme = () => (document.documentElement.dataset.theme === "light" ? "light" : "dark");

// A transparent 3D scene that sits behind the hero text.
// variant: "orbit" (Hairline Orbit). More scenes can be added in heroScenes.js
export default function HeroBackground({ variant = "orbit" }) {
  const holderRef = useRef(null);
  const theme = useSyncExternalStore(subscribeTheme, getTheme, () => "dark");

  useEffect(() => {
    const holder = holderRef.current;
    const build = SCENES[variant];
    if (!holder || !build) return;

    // Each run makes its own canvas. Reusing one canvas after its WebGL context
    // was released (React runs effects twice in development) leaves a blurry,
    // stretched picture.
    const canvas = document.createElement("canvas");
    canvas.style.cssText = "display:block;width:100%;height:100%";
    holder.appendChild(canvas);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch {
      canvas.remove();
      return; // no WebGL: the page simply shows its normal background
    }
    renderer.setClearColor(0x000000, 0);

    const small = window.matchMedia("(max-width: 760px)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 200);
    const api = build(scene, camera, { pal: PALETTES[theme], small, light: theme === "light" });

    const s = { t: 2, mx: 0, my: 0, tx: 0, ty: 0, visible: true };
    const draw = () => renderer.render(scene, camera);

    function resize() {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      if (!w || !h) return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2));
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      api.resize(w / h);
      if (reduce) {
        api.update(s.t, 0, 0, 0);
        draw();
      }
    }
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const io = new IntersectionObserver((e) => { s.visible = e[0].isIntersecting; });
    io.observe(canvas);

    function onPointer(e) {
      s.tx = (e.clientX / window.innerWidth) * 2 - 1;
      s.ty = (e.clientY / window.innerHeight) * 2 - 1;
    }

    let raf = 0;
    if (!reduce) {
      window.addEventListener("pointermove", onPointer);
      let last = performance.now();
      const frame = (now) => {
        raf = requestAnimationFrame(frame);
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        if (document.hidden || !s.visible) return;
        s.t += dt;
        s.mx += (s.tx - s.mx) * 0.06;
        s.my += (s.ty - s.my) * 0.06;
        api.update(s.t, dt, s.mx, s.my);
        draw();
      };
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      ro.disconnect();
      io.disconnect();
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m.dispose());
      });
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
    };
  }, [variant, theme]);

  return <div ref={holderRef} className="hero-canvas" aria-hidden="true" />;
}