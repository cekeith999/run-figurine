'use client';

import dynamic from "next/dynamic";

const ThreeDModel = dynamic(() => import("./ThreeDModel"), { ssr: false });

export default function ClientThreeDModel() {
  return <ThreeDModel />;
} 