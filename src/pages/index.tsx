/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import type { NextPage } from 'next';
import { Diamonds } from 'src/features/threejs/ui/diamonds';
import React from 'react';
import { ContentHome } from 'src/features/threejs/ui/content-home';
import { CustomCanvas } from 'src/features/threejs/ui/canvas';
import { StartPlane } from 'src/features/threejs/ui/start-plane';

const HomePage: NextPage = () => {
    return (
        <>
            <ContentHome />

            {/*Custom scroll implementation sucks[2]*/}
        </>
    );
};

export default HomePage;
