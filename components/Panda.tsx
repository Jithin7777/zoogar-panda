import { useGLTF } from "@react-three/drei/native";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import pandaModel from "../assets/models/panda.glb";

export default function Panda({ sugarValue }: { sugarValue: number }) {
  const gltf = useGLTF(pandaModel);
  const scene = Array.isArray(gltf) ? gltf[0].scene : gltf.scene;

  // Get face parts
  const mouth = scene.getObjectByName("mouth");
  const eyebrows = scene.getObjectByName("eyebrows");
  const head = scene.getObjectByName("head");
  const eyesGroup = scene.getObjectByName("eyes");

  // Get individual eyes
  let eyeL: THREE.Object3D | null = null;
  let eyeR: THREE.Object3D | null = null;

  if (eyesGroup) {
    eyesGroup.traverse((child: THREE.Object3D) => {
      if (child.name === "Circle") {
        eyeL = child;
      } else if (child.name === "Circle_1") {
        eyeR = child;
      }
    });
  }

  const level =
    sugarValue <= 40 ? "low" : sugarValue <= 80 ? "moderate" : "high";

  // Store original mouth transform
  const originalMouthRotationZ = useRef(mouth?.rotation.z ?? 0);

  // Store original mouth scale
  const originalMouthScale = useRef(
    mouth ? mouth.scale.clone() : new THREE.Vector3(1, 1, 1),
  );

  // Animation refs
  const mouthRotation = useRef(0);
  const eyebrowRotation = useRef(0);
  const eyeScaleY = useRef(1);
  const headRotationZ = useRef(0);

  // Target values
  let targetMouthRotation = 0;
  let targetEyebrowRotation = 0;
  let targetEyeScaleY = 1;
  let targetHeadRotationZ = 0;
  let targetMouthFlip = 1;

  if (level === "low") {
    targetMouthRotation = 0.15;
    targetEyebrowRotation = -0.1;
    targetEyeScaleY = 0.45;
    targetHeadRotationZ = 0.04;
  }

  if (level === "moderate") {
    targetMouthRotation = 0;
    targetEyebrowRotation = 0;
    targetEyeScaleY = 1;
    targetHeadRotationZ = 0;
  }

  if (level === "high") {
    targetMouthRotation = 0.15;

    // Flip mouth so smile curves upward
    targetMouthFlip = -1;

    targetEyebrowRotation = -0.1;
    targetEyeScaleY = 0.45;
    targetHeadRotationZ = 0.04;
  }

  useFrame(() => {
    if (!mouth || !eyebrows) return;

    // Smooth mouth animation
    mouthRotation.current = THREE.MathUtils.lerp(
      mouthRotation.current,
      targetMouthRotation,
      0.08,
    );

    // Smooth eyebrow animation
    eyebrowRotation.current = THREE.MathUtils.lerp(
      eyebrowRotation.current,
      targetEyebrowRotation,
      0.08,
    );

    // Smooth eye animation
    if (eyeL && eyeR) {
      eyeScaleY.current = THREE.MathUtils.lerp(
        eyeScaleY.current,
        targetEyeScaleY,
        0.08,
      );
    }

    // Smooth head animation
    if (head) {
      headRotationZ.current = THREE.MathUtils.lerp(
        headRotationZ.current,
        targetHeadRotationZ,
        0.08,
      );
    }

    // -------------------------
    // MOUTH
    // -------------------------

    if (level === "low") {
      // Flip 180 degrees.
      // SCALE IS NOT CHANGED.
      mouth.rotation.z =
        originalMouthRotationZ.current + mouthRotation.current + Math.PI;
    } else {
      // Normal orientation
      mouth.rotation.z = originalMouthRotationZ.current + mouthRotation.current;
    }

    // Always keep original mouth size
    mouth.scale.copy(originalMouthScale.current);

    // -------------------------
    // EYEBROWS
    // -------------------------

    eyebrows.rotation.z = eyebrowRotation.current;

    // -------------------------
    // EYES
    // -------------------------

    if (eyeL && eyeR) {
      eyeL.scale.y = eyeScaleY.current;
      eyeR.scale.y = eyeScaleY.current;
    }

    // -------------------------
    // HEAD
    // -------------------------

    if (head) {
      head.rotation.z = headRotationZ.current;
    }
  });

  return <primitive object={scene} scale={1} position={[0.2, -1.8, 0]} />;
}
