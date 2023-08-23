import { useRef } from "react";
import { Canvas } from "@react-three/fiber";

import { GameController, UFO } from "@/models";

export const ThreeJs: React.FC = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <div
                ref={wrapperRef}
                className="absolute right-0 h-[200px] pointer-events-none"
            >
                <Canvas camera={{ fov: 30, position: [0, 0, 5] }}>
                    <ambientLight />
                    <pointLight position={[0, 0, 1]} />
                    <GameController wrapperRef={wrapperRef} />
                    <UFO wrapperRef={wrapperRef} />
                </Canvas>
            </div>
        </>
    );
};
