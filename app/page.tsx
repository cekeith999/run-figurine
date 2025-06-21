import ClientThreeDModel from "../components/ClientThreeDModel";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-white overflow-hidden">
      {/* Centered 3D Model */}
      <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
        <ClientThreeDModel />
      </div>
    </div>
  );
}
