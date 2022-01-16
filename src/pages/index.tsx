import type { NextPage } from 'next';
import { Diamonds } from 'src/features/threejs/ui/diamonds';
import React from 'react';
import { ContentHome } from 'src/features/threejs/ui/content-home';

const HomePage: NextPage = () => {
    return (
        <>
            <ContentHome />
            <Diamonds />
        </>
    );
};

export default HomePage;
