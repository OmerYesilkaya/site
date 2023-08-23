import { Suspense, useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

import { useMousePosition, useWindowSize } from "@/hooks";
import { Position } from "@/types";

import Model from "./Model";

type ModelProps = {
    wrapperRef: React.RefObject<HTMLDivElement>;
};

export default function GameController({ wrapperRef }: ModelProps) {
    const [canvasCenterPositionOffset, setCanvasCenterPositionOffset] =
        useState<Position>({ x: 0, y: 0 });
    const mesh = useRef<THREE.Mesh>(null);
    const mousePosition = useMousePosition();
    const windowSize = useWindowSize();

    useEffect(() => {
        if (!wrapperRef.current) return;
        const leftOffset = wrapperRef.current.getBoundingClientRect().left;
        const topOffset = wrapperRef.current.getBoundingClientRect().top;

        setCanvasCenterPositionOffset({
            x: leftOffset / windowSize.width - 0.5,
            y: topOffset / windowSize.height - 0.5,
        });
    }, [windowSize.width, windowSize.height, wrapperRef]);

    useFrame(({ clock }) => {
        if (!mousePosition.current || !mesh.current) return;
        mesh.current.lookAt(
            mousePosition.current.x - canvasCenterPositionOffset.x,
            -mousePosition.current.y + canvasCenterPositionOffset.y,
            1
        );

        mesh.current.position.y = -Math.sin(clock.elapsedTime) / 4;
        mesh.current.position.x = -Math.sin(clock.elapsedTime / 4) / 6;
    });

    return (
        <Suspense fallback={null}>
            <group position={[1, 0, -1]} scale={0.9}>
                <Model mesh={mesh} />
            </group>
        </Suspense>
    );
}
