/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import React, { FC } from 'react';
import { Navigation } from '../navigation';
import styles from 'src/styles/Layout.module.scss';
import { useRouter } from 'next/router';
import { SideSlider } from 'src/shared/ui/side-slider';
import { ScrollIndicator } from 'src/shared/ui/scroll-indicator';
import { motion } from 'framer-motion';
export const Layout: FC<LayoutProps> = ({ children }) => {
    const router = useRouter();

    return (
        <motion.div className={styles.layout}>
            <motion.header>
                <Navigation />
            </motion.header>
            <motion.main>
                <SideSlider />
                {children}
                <ScrollIndicator />
            </motion.main>

            <motion.footer>{/*<Footer />*/}</motion.footer>
        </motion.div>
    );
};
