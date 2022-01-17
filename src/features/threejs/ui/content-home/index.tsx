/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import { useLoader } from '@react-three/fiber';
import { LinearFilter, TextureLoader } from 'three';
import { state } from 'src/features/threejs/lib';
import React, { FC, useMemo } from 'react';
import { Block, useBlock } from 'src/features/threejs/ui/block';
import { MultilineText, Text } from 'src/features/threejs/ui/text';
import { Plane } from 'src/features/threejs/ui/plane';
import { Html } from '@react-three/drei';
import { Paragraph } from 'src/features/threejs/ui/paragraph';

export const ContentHome: FC<any> = ({ title = 'A1 Group' }) => {
    const images = useLoader(
        TextureLoader,
        state.paragraphs.map(({ image }) => image)
    );
    useMemo(
        () =>
            Array.isArray(images)
                ? images.forEach(
                      (texture) => (texture.minFilter = LinearFilter)
                  )
                : [],
        [images]
    );
    const {
        contentMaxWidth: w,
        canvasWidth,
        canvasHeight,
        mobile,
    } = useBlock();
    return (
        <>
            <Block factor={1} offset={0}>
                <Block factor={1.2}>
                    <Text
                        left
                        size={w * 0.15}
                        position={[-w / 3.2, 0.5, -1]}
                        color="#d40749"
                    >
                        {title}
                    </Text>
                </Block>
                <Block factor={1.0}>
                    <Text
                        className="bottom-left"
                        style={{ color: 'white' }}
                        position={[-canvasWidth / 2, -canvasHeight / 2, 0]}
                    >
                        It was the year 2076.{mobile ? <br /> : ' '}The
                        substance had arrived.
                    </Text>
                </Block>
            </Block>
            <Block factor={1.2} offset={5.7}>
                <MultilineText
                    top
                    left
                    size={w * 0.15}
                    lineHeight={w / 5}
                    position={[-w / 3.5, 0, -1]}
                    color="#2fe8c3"
                    text={'four\nzero\nzero'}
                />
            </Block>
            {state.paragraphs.map((props, index) => (
                <Paragraph
                    key={index}
                    index={index}
                    {...props}
                    image={images[index]}
                />
            ))}
            {state.stripes.map(({ offset, color, height }, index) => (
                <Block key={index} factor={-1.5} offset={offset}>
                    <Plane
                        args={[50, height, 32, 32]}
                        shift={-4}
                        color={color}
                        rotation={[0, 0, Math.PI / 8]}
                        position={[0, 0, -10]}
                    />
                </Block>
            ))}
            <Block factor={1.25} offset={8}>
                <Html
                    style={{ color: 'white' }}
                    className="bottom-left"
                    position={[-canvasWidth / 2, -canvasHeight / 2, 0]}
                >
                    Culture is not your friend.
                </Html>
            </Block>

            {/* This way will not work, need refactoring of scroll component. custom implementation sucks */}
            {/*<Html fullscreen>*/}
            {/*    <HeroScreen />*/}
            {/*</Html>*/}
        </>
    );
};
