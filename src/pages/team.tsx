/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import type { NextPage } from 'next';
import React from 'react';
import ScrollableHomePage from 'src/pages/index';
import { ContentHome } from 'src/features/threejs/ui/content-home';
import { Block, useBlock } from 'src/features/threejs/ui/block';
import { Text as BlockText } from 'src/features/threejs/ui/text';

const TeamPage: NextPage = () => {
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
                    Team
                </BlockText>
            </Block>
        </Block>
    );
};

export default TeamPage;
