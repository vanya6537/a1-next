/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import React, { FC } from 'react';
import { Navigation } from '../navigation';
import styles from 'src/styles/Layout.module.scss';
import { useRouter } from 'next/router';
import { SideSlider } from 'src/shared/ui/side-slider';

export const Layout: FC<LayoutProps> = ({ children }) => {
    const router = useRouter();
    return (
        <div className={styles.layout}>
            <header>
                <Navigation />
            </header>
            <main>
                <SideSlider />
                {children}
            </main>

            <footer>{/*<Footer />*/}</footer>
        </div>
    );
};
