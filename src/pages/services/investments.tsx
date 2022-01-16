import type { NextPage } from 'next';
import { Block, useBlock } from 'src/features/threejs/ui/block';
import { Text } from 'src/features/threejs/ui/text';
import React from 'react';
import { Scroll } from '@react-three/drei';

const InvestmentsPage: NextPage = () => {
    const {
        contentMaxWidth: w,
        canvasWidth,
        canvasHeight,
        mobile,
    } = useBlock();

    return (
        <Scroll>
            <Block factor={1.2}>
                <Text
                    left
                    size={w * 0.15}
                    position={[-w, 0, -100]}
                    color="#d40749"
                >
                    investments.tsx
                </Text>
            </Block>
        </Scroll>
    );
};

export default InvestmentsPage;
