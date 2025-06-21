"use client";

import Spline from "@splinetool/react-spline";

export default function SplineScene() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <Spline 
        scene="https://prod.spline.design/u-9yEB9oVPokx3h9/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
} 