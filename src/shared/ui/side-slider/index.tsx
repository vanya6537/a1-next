/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import styles from 'src/styles/SideSlider.module.scss';
import { FC } from 'react';
import { motion } from 'framer-motion';
export const SideSlider: FC<SideSliderProps> = () => {
    return (
        <motion.div className={styles.sideWrapper}>
            <motion.div className={styles.decor}>
                <motion.span></motion.span>
                <motion.span></motion.span>
                <motion.span></motion.span>
            </motion.div>
        </motion.div>
    );
};
