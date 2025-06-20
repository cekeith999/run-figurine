import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function ThreeDModel() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Canvas style={{ width: 400, height: 400 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} />
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="blue" />
        </mesh>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
} 