/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import React, { createContext, FC, useContext, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { lerp, state } from '../../lib';
import { motion } from 'framer-motion-3d';

const offsetContext = createContext(0);

const Block: FC<any> = ({ children, offset, factor, ...props }) => {
    const { offset: parentOffset, sectionHeight } = useBlock();
    const ref = useRef<any>();
    offset = offset !== undefined ? offset : parentOffset;
    useFrame(() => {
        const curY = ref.current.position.y;
        const curTop: any = state.top.current;
        ref.current.position.y = lerp(
            curY,
            (curTop / state.zoom) * factor,
            0.1
        );
    });
    return (
        <offsetContext.Provider value={offset}>
            <motion.group
                {...props}
                position={[0, -sectionHeight * offset * factor, 0]}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <motion.group ref={ref}>{children}</motion.group>
            </motion.group>
        </offsetContext.Provider>
    );
};

function useBlock() {
    const { sections, pages, zoom } = state;
    const { size, viewport } = useThree();
    const offset = useContext(offsetContext);
    const viewportWidth = viewport.width * zoom;
    const viewportHeight = viewport.height * zoom;
    const canvasWidth = viewportWidth / zoom;
    const canvasHeight = viewportHeight / zoom;
    const mobile = size.width < 700;
    const margin = canvasWidth * (mobile ? 0.2 : 0.1);
    const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6);
    const sectionHeight = canvasHeight * ((pages - 1) / (sections - 1));
    const offsetFactor = (offset + 1.0) / sections;
    return {
        viewport,
        offset,
        viewportWidth,
        viewportHeight,
        canvasWidth,
        canvasHeight,
        mobile,
        margin,
        contentMaxWidth,
        sectionHeight,
        offsetFactor,
    };
}

export { Block, useBlock };
