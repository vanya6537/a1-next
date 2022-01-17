/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import type { NextPage } from 'next';
import { Block, useBlock } from 'src/features/threejs/ui/block';
import { Text as BlockText } from 'src/features/threejs/ui/text';
import React from 'react';
import ScrollableHomePage from 'src/pages/index';
import { Diamonds } from 'src/features/threejs/ui/diamonds';
import { StartPlane } from 'src/features/threejs/ui/start-plane';
import { Text } from '@react-three/drei';

const AboutUsPage: NextPage = () => {
    const { contentMaxWidth: w } = useBlock();
    return (
        <>
            <Block factor={1} offset={0}>
                <Block factor={1.2}>
                    <BlockText
                        left
                        size={w * 0.15}
                        position={[-w / 3.2, 0.5, -1]}
                        color="#d40749"
                    >
                        About
                    </BlockText>
                </Block>
            </Block>
            <Text
                color={'#EC2D2D'}
                fontSize={12}
                maxWidth={200}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign={'left'}
                font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
                anchorX="center"
                anchorY="middle"
            >
                О компании
            </Text>
            <Diamonds />
            <StartPlane />
        </>
    );
};

export default AboutUsPage;
