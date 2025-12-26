import React, { useEffect } from 'react';

const useClickAway = <T extends HTMLElement | null>(ref: React.RefObject<T>, cb: () => void) => {
    useEffect(() => {
        const listener = (e: MouseEvent) => {
            if (!ref.current?.contains(e.target as Node)) {
                cb();
            }
        };
        window.addEventListener('click', listener);
        return window.removeEventListener.bind(null, 'click', listener as EventListener);
    }, []);
};

export default useClickAway;
