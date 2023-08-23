import { useEffect, useRef } from "react";

import { Position } from "@/types";

import { useWindowSize } from ".";

export function useMousePosition() {
    const position = useRef<Position>();
    const windowSize = useWindowSize();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX / windowSize.width - 0.5;
            const y = e.clientY / windowSize.height - 0.5;

            position.current = { x: x, y: y };
        };
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [windowSize.height, windowSize.width]);

    return position;
}
