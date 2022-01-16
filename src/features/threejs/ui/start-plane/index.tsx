import React, { FC, useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { lerp, state } from 'src/features/threejs/lib';
import { Plane } from 'src/features/threejs/ui/plane';
import { useScroll } from '@react-three/drei';

export const StartPlane: FC = () => {
    const ref = useRef<any>();
    const { width, height } = useThree((state) => state.size);
    useFrame(
        () =>
            (ref.current.material.opacity = lerp(
                ref.current.material.opacity,
                0,
                0.025
            ))
    );

    const scroll = useScroll();
    // console.log({ height });
    useFrame(() => {
        // console.log(scroll.range(0, 1));
        console.log(scroll.offset);
        return (state.top.current = scroll.offset * state.pages * height);
        // console.log(scroll.range(0, 1));
    });

    // useEffect(() => {
    //     onScroll({ target: scrollArea.current });
    // }, []);

    return (
        <Plane
            ref={ref}
            color="#0e0e0f"
            position={[0, 0, 200]}
            scale={[100, 100, 1]}
        />
    );
};
