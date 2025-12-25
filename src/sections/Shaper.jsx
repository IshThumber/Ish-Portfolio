import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";

// Memoized materials to prevent recreation on every render
const createMaterials = () => [
  new THREE.MeshNormalMaterial(),
  new THREE.MeshStandardMaterial({ color: 0x2ecc71, roughness: 0 }),
  new THREE.MeshStandardMaterial({ color: 0xf1c40f, roughness: 0.4 }),
  new THREE.MeshStandardMaterial({ color: 0xe74c3c, roughness: 0.1 }),
  new THREE.MeshStandardMaterial({ color: 0x8e44ad, roughness: 0.1 }),
  new THREE.MeshStandardMaterial({ color: 0x1abc9c, roughness: 0.1 }),
  new THREE.MeshStandardMaterial({ color: 0x2980b9, roughness: 1, metalness: 0 }),
  new THREE.MeshStandardMaterial({ color: 0x2c3e50, roughness: 0.1, metalness: 0.5 }),
];

// Geometry configurations (static data)
const GEOMETRY_CONFIGS = [
  { position: [0, 0, 0], r: 0.6, type: "icosahedron", args: [3] },
  { position: [1, -0.75, 4], r: 0.6, type: "box", args: [1.6, 1.6, 1.6] },
  { position: [-1.4, 2, -4], r: 0.6, type: "dodecahedron", args: [1.5] },
  { position: [-0.8, -0.75, 5], r: 0.7, type: "octahedron", args: [1.2] },
  { position: [1.6, 1.6, -4], r: 0.7, type: "octahedron", args: [1.5] },
];

// Create geometry based on type
const createGeometry = (type, args) => {
  switch (type) {
    case "icosahedron":
      return new THREE.IcosahedronGeometry(...args);
    case "box":
      return new THREE.BoxGeometry(...args);
    case "dodecahedron":
      return new THREE.DodecahedronGeometry(...args);
    case "octahedron":
      return new THREE.OctahedronGeometry(...args);
    default:
      return new THREE.SphereGeometry(1);
  }
};

export function Shapes() {
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas className="z-0" shadows gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}>
        <Suspense fallback={null}>
          <Geometries />
          <ContactShadows position={[0, -3.5, 0]} opacity={0.65} scale={40} blur={1} far={9} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Geometries() {
  // Memoize materials to prevent recreation
  const materials = useMemo(() => createMaterials(), []);

  // Memoize geometries with proper cleanup
  const geometries = useMemo(
    () =>
      GEOMETRY_CONFIGS.map((config) => ({
        ...config,
        geometry: createGeometry(config.type, config.args),
        position: config.position.map((p) => p * 2),
      })),
    []
  );

  // Cleanup geometries on unmount
  useEffect(() => {
    return () => {
      geometries.forEach(({ geometry }) => geometry.dispose());
      materials.forEach((material) => material.dispose());
    };
  }, [geometries, materials]);

  return geometries.map(({ position, r, geometry }, index) => <Geometry key={index} position={position} geometry={geometry} materials={materials} r={r} />);
}

function Geometry({ r, position, geometry, materials }) {
  const meshRef = useRef();
  const groupRef = useRef();

  // Memoize random material selection
  const startingMaterial = useMemo(() => materials[Math.floor(Math.random() * materials.length)], [materials]);

  useEffect(() => {
    if (!groupRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(groupRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1 + Math.random() * 0.2,
        ease: "elastic.out(1,0.3)",
        delay: Math.random() * 0.5,
      });
    });

    return () => ctx.revert();
  }, []);

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  return (
    <group position={position} ref={groupRef}>
      <Float speed={5 * r} rotationIntensity={9 * r} floatIntensity={7 * r}>
        <mesh ref={meshRef} geometry={geometry} material={startingMaterial} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} />
      </Float>
    </group>
  );
}
