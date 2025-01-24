"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  const handleEnter = () => {
    router.push("/home"); // Redirect to the second page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <h1 className="mb-6" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
        castlebam
      </h1>
      <button onClick={handleEnter} className="cursor-pointer">
        <Image
          src="/156df381ba406c228cf39a977d78c0f6.gif" 
          alt="Click to Enter"
          width={400}
          height={400}
          className="rounded-lg hover:scale-105 transition-transform duration-300"
        />
      </button>
    </div>
  );
}
