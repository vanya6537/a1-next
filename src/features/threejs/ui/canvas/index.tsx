/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import { Canvas } from '@react-three/fiber';
import { state } from 'src/features/threejs/lib';
import React, { FC, Suspense } from 'react';
import { Html } from '@react-three/drei';
import styles from './CustomCanvas.module.scss';

export const CustomCanvas: FC = ({ children }) => {
    return (
        <Canvas
            className={styles.canvas}
            linear
            dpr={[1, 2]}
            orthographic
            camera={{
                zoom: state.zoom,
                position: [0, 0, 500],
            }}
        >
            <Suspense fallback={<Html center>Loading...</Html>}>
                {children}
            </Suspense>
        </Canvas>
    );
};
