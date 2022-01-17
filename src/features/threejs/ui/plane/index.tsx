/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import React, { forwardRef, useRef } from 'react';
import { extend, useFrame } from '@react-three/fiber';
import { useBlock } from '../block';
import { lerp, state } from '../../lib';
import { CustomMaterial } from 'src/features/threejs/ui/custom-material';

extend({ CustomMaterial });

export const Plane = forwardRef(
    (
        { color = 'white', shift = 1, opacity = 1, args, map, ...props }: any,
        ref
    ) => {
        const { viewportHeight, offsetFactor } = useBlock();
        const material: any = useRef();
        let last: any = state.top.current;
        useFrame(() => {
            const { pages, top }: any = state;
            material.current.scale = lerp(
                material.current.scale,
                offsetFactor - top.current / ((pages - 1) * viewportHeight),
                0.1
            );
            material.current.shift = lerp(
                material.current.shift,
                ((top.current - last) / shift) * 1.5,
                0.1
            );
            last = top.current;
        });
        return (
            <mesh ref={ref} {...props}>
                <planeBufferGeometry args={args} />
                <customMaterial
                    ref={material}
                    color={color}
                    map={map}
                    transparent
                    opacity={opacity}
                />
            </mesh>
        );
    }
);

Plane.displayName = 'Panel';
