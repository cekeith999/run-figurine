import ClientThreeDModel from "../components/ClientThreeDModel";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-white overflow-hidden">
      {/* Centered 3D Model - Ready for deployment */}
      <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
        <ClientThreeDModel />
      </div>
      
      {/* Overlay content */}
      <div className="relative z-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Run Figurine</h1>
        <p className="text-lg text-gray-600">Interactive 3D Figurine Viewer</p>
      </div>
    </div>
  );
}
