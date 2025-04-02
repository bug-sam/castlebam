"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  const handleEnter = () => {
    router.push("/home"); // Redirect to the second page
  };

  const images = [
    "giphy.gif",
    "newport.gif",
    "chip.gif",
    "watermelon.gif",
    "cheese.gif",
    "dorito.gif",
  ];

  return (
    <div id="main1" className="bg-white text-black font-[Courier New], Courier, monospace h-screen flex items-center justify-center">
      <div id="the-top" className="grid grid-cols-3 gap-6 w-full max-w-6xl">
      <button onClick={() => router.push("/venues")} className="cursor-pointer flex flex-col items-center w-full">
          <a className="imgtxt w-full flex flex-col items-center">
            <img src="giphy.gif" alt="Venues" className="object-contain w-48 h-48" />
            <span className="mt-2 text-center block text-lg">venues</span>
          </a>
        </button>
        <button onClick={() => router.push("/shows")} className="cursor-pointer flex flex-col items-center w-full">
          <a className="imgtxt w-full flex flex-col items-center">
            <img src="newport.gif" alt="Shows" className="object-contain w-40 h-40" />
            <span className="mt-2 text-center block text-lg">shows</span>
          </a>
        </button>
        <button onClick={() => router.push("/messageboard")} className="cursor-pointer flex flex-col items-center w-full">
          <a className="imgtxt w-full flex flex-col items-center">
            <img src="chip.gif" alt="Messageboard" className="object-contain w-44 h-44" />
            <span className="mt-2 text-center block text-lg">messageboard</span>
          </a>
        </button>
        <button onClick={() => router.push("/blog")} className="cursor-pointer flex flex-col items-center w-full">
          <a className="imgtxt w-full flex flex-col items-center">
            <img src="watermelon.gif" alt="Blog" className="object-contain w-52 h-52" />
            <span className="mt-2 text-center block text-lg">blog</span>
          </a>
        </button>
        <button onClick={() => router.push("/submission")} className="cursor-pointer flex flex-col items-center w-full">
          <a className="imgtxt w-full flex flex-col items-center">
            <img src="cheese.gif" alt="Submission" className="object-contain w-36 h-36" />
            <span className="mt-2 text-center block text-lg">submissions</span>
          </a>
        </button>
        <button onClick={() => router.push("/about")} className="cursor-pointer flex flex-col items-center w-full">
          <a className="imgtxt w-full flex flex-col items-center">
            <img src="dorito.gif" alt="About" className="object-contain w-50 h-50" />
            <span className="mt-2 text-center block text-lg">about</span>
          </a>
        </button>
      </div>
    </div>
  );
}
