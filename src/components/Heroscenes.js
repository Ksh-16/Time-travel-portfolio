import * as THREE from "three";

// Colours for the 3D scene. They follow the site theme (dark or light).
export const PALETTES = {
  dark: {
    gold: 0xc9a66b, hi: 0xe0c28c, rose: 0xdba094, ink: 0xf5ede3,
  },
  light: {
    gold: 0xa8694f, hi: 0x8f6a24, rose: 0xc07a6e, ink: 0x4a3b32,
  },
};

/* ---------- Hairline Orbit: three thin rings with small beads in slow orbit ---------- */
function orbit(scene, camera, { pal }) {
  camera.position.set(0, 0, 10);
  const group = new THREE.Group();
  scene.add(group);

  const mat = (c, o) => new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: o });
  const big = new THREE.Mesh(new THREE.TorusGeometry(3.4, 0.014, 8, 220), mat(pal.gold, 0.85));
  const mid = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.01, 8, 180), mat(pal.hi, 0.5));
  const far = new THREE.Mesh(new THREE.TorusGeometry(4.6, 0.008, 8, 240), mat(pal.rose, 0.32));
  big.rotation.set(1.15, 0.25, 0);
  mid.rotation.set(0.4, 1.0, 0.3);
  far.rotation.set(1.0, -0.4, 0.5);
  group.add(big, mid, far);
  group.add(new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), mat(pal.hi, 1)));

  // Beads are children of the rings, so they follow each ring's tilt.
  const bead = (r, c, parent) => {
    const m = new THREE.Mesh(new THREE.SphereGeometry(r, 16, 16), mat(c, 1));
    parent.add(m);
    return m;
  };
  const a = bead(0.09, pal.gold, big);
  const b = bead(0.06, pal.hi, mid);
  const c = bead(0.05, pal.rose, far);

  return {
    update(t, dt, mx, my) {
      a.position.set(Math.cos(t * 0.5) * 3.4, Math.sin(t * 0.5) * 3.4, 0);
      b.position.set(Math.cos(-t * 0.8) * 2.1, Math.sin(-t * 0.8) * 2.1, 0);
      c.position.set(Math.cos(t * 0.3 + 2) * 4.6, Math.sin(t * 0.3 + 2) * 4.6, 0);
      group.rotation.y += (mx * 0.35 - group.rotation.y) * 0.05;
      group.rotation.x += (my * 0.25 - group.rotation.x) * 0.05;
    },
    resize(aspect) {
      // Wide screens: orbit sits to the right of the headline. Narrow: centred behind it.
      const wide = aspect > 1.25;
      group.position.set(wide ? Math.min(aspect * 1.5, 4.4) : 0, wide ? 0 : 0.9, 0);
      group.scale.setScalar(wide ? 1 : 0.7);
    },
  };
}

export const SCENES = { orbit };