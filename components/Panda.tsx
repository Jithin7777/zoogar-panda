import { useGLTF } from "@react-three/drei/native";

import pandaModel from "../assets/models/panda.glb";
export default function Panda() {
  const gltf = useGLTF(pandaModel);
  const scene = Array.isArray(gltf) ? gltf[0].scene : gltf.scene;
  console.log(scene);
  return <primitive object={scene} scale={1} position={[0, -1.8, 0]} />;
}
