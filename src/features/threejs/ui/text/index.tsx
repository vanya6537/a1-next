import { Vector3 } from 'three';
import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import React, { FC, useCallback, useEffect, useRef } from 'react';
import { extend, useFrame, useLoader } from '@react-three/fiber';
import { lerp, state } from '../../lib';
import { CustomMaterial } from 'src/features/threejs/ui/custom-material';

extend({ TextGeometry, CustomMaterial });
const Text: FC<any> = ({
    children,
    size = 1,
    left,
    right,
    top,
    bottom,
    color = 'white',
    opacity = 1,
    height = 0.01,
    layers = 0,
    // font = '/fonts/MontserratBlackRegular.json',
    font = '/fonts/MOONGET_Heavy.blob',
    ...props
}) => {
    const data = useLoader(FontLoader, font);
    const geom = new TextGeometry(children, {
        font: data as Font,
        size: 1,
        height,
        curveSegments: 32,
    });

    const onUpdate = useCallback(
        (self) => {
            const box = new Vector3();
            self.geometry.computeBoundingBox();
            self.geometry.boundingBox.getSize(box);
            self.position.x = left ? 0 : right ? -box.x : -box.x / 2;
            self.position.y = top ? 0 : bottom ? -box.y : -box.y / 2;
        },
        [left, right, top, bottom]
    );

    const ref = useRef<any>();
    let last = state.top.current;
    useFrame(() => {
        ref.current.shift = lerp(
            ref.current.shift,
            (state.top.current - last) / 100,
            0.1
        );
        last = state.top.current;
    });

    // console.log({ data });
    useEffect(() => {
        console.log({ data });
    }, [data]);

    return (
        <group {...props} scale={[size, size, 0.1]}>
            <mesh geometry={geom} onUpdate={onUpdate} frustumCulled={false}>
                <customMaterial
                    ref={ref}
                    color={color}
                    transparent
                    opacity={opacity}
                />
            </mesh>
        </group>
    );
};

const MultilineText: FC<any> = ({
    text,
    size = 1,
    lineHeight = 1,
    position = [0, 0, 0],
    ...props
}) =>
    text.split('\n').map((text, index) => (
        <Text
            left={undefined}
            right={undefined}
            top={undefined}
            bottom={undefined}
            key={index}
            size={size}
            {...props}
            position={[
                position[0],
                position[1] - index * lineHeight,
                position[2],
            ]}
        >
            {text}
        </Text>
    ));

export { Text, MultilineText };
