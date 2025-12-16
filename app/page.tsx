"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
    const router = useRouter();

    const handleEnter = () => {
        router.push("/home"); // Redirect to the second page
    };
    return (
        <div id="main1">
            <div className="text-center">
                <button
                    onClick={handleEnter}
                    className="cursor-pointer"
                    style={{
                        border: "none",
                        padding: 0,
                        background: "transparent",
                    }}
                >
                    <a className="imgtxt">
                        <img
                            src="castleBamFirst.png"
                            alt="Click to Enter"
                            className="castle-image"
                        />
                        <span>enter</span>
                    </a>
                </button>
            </div>
        </div>
    );
}
