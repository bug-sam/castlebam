import useClickAway from "@/lib/hooks/useClickAway";
import { useRef, useState } from "react";

interface RockProps {
    data: Record<string, any>;
}

const Rock = ({data}: RockProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useClickAway(ref, () => setIsOpen(false))

    return (
        <div ref={ref} className="flex flex-col items-center">
            <button
                className="rock-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                <img src="rock.png" />
            </button>
            {isOpen && (
                <div className="venue-details">
                    {Object.entries(data).map(([key, value]) => (
                        <p>
                            <strong>{key}</strong> {value}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Rock;
