/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import { FC } from 'react';
import styles from './styles.module.css';
import cn from 'classnames';
import { motion } from 'framer-motion';

export const Button: FC<ButtonProps> = ({ children, className }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{
                scale: 0.9,
                opacity: 0.6,
            }}
            className={cn(className, styles.button)}
        >
            {children}
        </motion.button>
    );
};
