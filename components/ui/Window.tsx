import { ReactNode } from "react";

import "@/styles/window.css";

interface WindowProps {
    title: string;
    children: ReactNode;
}

const Window = ({title, children }: WindowProps) => {
    return (
        <div className="window">
            <div className="window-title">{title}</div>
            <div className="window-body">{children}</div>
        </div>
    )
}

export default Window;
