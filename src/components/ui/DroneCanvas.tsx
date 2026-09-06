"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

function DroneModel() {
  const { nodes, materials } = useGLTF("/models/FixedWing-Draco.glb") as any;

  const droneRef = useRef<THREE.Group>(null);
  const progressRef = useRef(0);
  const leftPropRef = useRef<THREE.Mesh>(null);
  const rightPropRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (leftPropRef.current && rightPropRef.current) {
  // delta is the time passed since the last frame
  // 15 is the speed (you can adjust this!)
  leftPropRef.current.rotation.z += delta * 90;
  rightPropRef.current.rotation.z -= delta * 90; // Spin the opposite way!
}
    if (!droneRef.current) return;

    // 1. Snappy Flight Entrance Animation (~0.6s from Z = -7)
    if (progressRef.current < 1) {
      // Faster progression: delta * 1.6 completes in ~0.6s
      progressRef.current = Math.min(1, progressRef.current + delta * 0.9);

      // Ease out cubic: snappy start, smooth settle
      const t = 1 - Math.pow(1 - progressRef.current, 3);

      // Responsive scale: 5.8 on mobile so wings fit cleanly inside viewport, 7.0 on desktop
      const isMobile = state.viewport.width < 8;
      const baseScale = isMobile ? 5.8 : 7.0;
      const targetScale = baseScale * t;
      droneRef.current.scale.set(targetScale, targetScale, targetScale);

      // Fly forward from Z = -7 (instantly visible) to resting Z = 0
      droneRef.current.position.z = -7 * (1 - t);

      // Settle down to Y = -0.3 to align right over the horizon line
      droneRef.current.position.y = -0.3 * t;
    } 
    // 2. Idle Flight Hovering (Once landed at Z=0)
    else {
      const time = state.clock.getElapsedTime();

      // Ensure base scale is maintained responsively
      const isMobile = state.viewport.width < 8;
      const baseScale = isMobile ? 5.8 : 7.0;
      droneRef.current.scale.set(baseScale, baseScale, baseScale);

      // Gentle vertical floating centered around Y = -0.3
      droneRef.current.position.y = -0.3 + Math.sin(time * 1.5) * 0.08;

      // Calculate target rotation based on mouse coordinates (state.pointer ranges from -1 to 1)
      const targetPitch = -(state.pointer.y * 0.3); // Inverted: Look up/down (X axis)
      const targetYaw = (state.pointer.x * 0.5); // Turn left/right (Y axis)
      const targetRoll = -(state.pointer.x * 0.2); // Bank wings when turning (Z axis)

      // Smoothly LERP (Linear Interpolation) from current rotation to target rotation
      // We also add the subtle sine wave wobble to keep it feeling alive while tracking
      droneRef.current.rotation.x = THREE.MathUtils.lerp(
        droneRef.current.rotation.x,
        targetPitch + Math.sin(time * 1.2) * 0.02,
        0.05
      );
      
      droneRef.current.rotation.y = THREE.MathUtils.lerp(
        droneRef.current.rotation.y,
        targetYaw,
        0.05
      );

      droneRef.current.rotation.z = THREE.MathUtils.lerp(
        droneRef.current.rotation.z,
        targetRoll + Math.sin(time * 1.0) * 0.04,
        0.05
      );
    }
  });

  return (
    <group ref={droneRef}>
      <Center>
        <group dispose={null}>
          <mesh geometry={nodes.drone.geometry} material={materials['Material.001']} position={[-0.007, 0.125, -0.081]} rotation={[Math.PI / 2, 0, 0]} scale={0.564} />
          <mesh ref={leftPropRef} geometry={nodes.leftPropeller.geometry} material={materials['Material.001']} position={[-0.356, 0.241, 0.073]} rotation={[Math.PI / 2, 0, 0]} scale={0.564} />
          <mesh ref={rightPropRef} geometry={nodes.rightPropeller.geometry} material={materials['Material.001']} position={[0.339, 0.239, 0.101]} rotation={[Math.PI / 2, 0, 0]} scale={0.564} />
        </group>
      </Center>
    </group>
  );
}

useGLTF.preload("/models/FixedWing-Draco.glb");

export default function DroneCanvas() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [-3, 1.0, 5.5], fov: 45 }}
        style={{ background: "transparent" }}
      >
        {/* Balanced studio lighting */}
        <ambientLight intensity={1.8} />
        <directionalLight position={[10, 10, 10]} intensity={2.5} />
        <directionalLight position={[-10, -5, -10]} intensity={1.0} />

        <Suspense fallback={null}>
          <DroneModel />
        </Suspense>
      </Canvas>
    </div>
  );
}