"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  const handleEnter = () => {
    router.push("/home"); // Redirect to the second page
  };

  return (
    <div id="main1" className="bg-white text-black font-[Courier New], Courier, monospace">
      <div id="the-top" className="text-center">
        {/* <h1 className="mb-6">castlebam</h1> */}
        {/* <button onClick={handleEnter} className="cursor-pointer">
          <Image
            src="/156df381ba406c228cf39a977d78c0f6.gif"
            alt="Click to Enter"
            width={400}
            height={400}
            className="rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </button> */}
      <button onClick={handleEnter} className="cursor-pointer">
        <a href="/" className="imgtxt">
          <img src="castleBamFirst.png" alt="Click to Enter"/>
          <span>enter</span>
        </a>
      </button>

      </div>
    </div>
  );
}
