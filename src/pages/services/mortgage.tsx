import type { NextPage } from 'next';
import { Block, useBlock } from 'src/features/threejs/ui/block';
import { Text } from 'src/features/threejs/ui/text';
import React from 'react';

const MortgagePage: NextPage = () => {
    const {
        contentMaxWidth: w,
        canvasWidth,
        canvasHeight,
        mobile,
    } = useBlock();

    return (
        <Block factor={1.2}>
            <Text
                left
                size={w * 0.15}
                position={[-w / 3.2, 0.5, -1]}
                color="#d40749"
            >
                Mortgage Page
            </Text>
        </Block>
    );
};

export default MortgagePage;
