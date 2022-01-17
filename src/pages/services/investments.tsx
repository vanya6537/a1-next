/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import type { NextPage } from 'next';
import { Block, useBlock } from 'src/features/threejs/ui/block';
import { Text as BlockText, Text } from 'src/features/threejs/ui/text';
import React from 'react';
import { Scroll } from '@react-three/drei';

const InvestmentsPage: NextPage = () => {
    const { contentMaxWidth: w } = useBlock();

    return (
        <Block factor={1} offset={0}>
            <Block factor={1.2}>
                <BlockText
                    left
                    size={w * 0.15}
                    position={[-w / 3.2, 0.5, -1]}
                    color="#d40749"
                >
                    Invest
                </BlockText>
            </Block>
        </Block>
    );
};

export default InvestmentsPage;
