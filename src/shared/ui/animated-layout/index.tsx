/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */
import { FC } from 'react';
import { motion } from 'framer-motion';
import { transition } from 'src/shared/lib';

export const AnimatedLayout = ({
    children,
    delay = 0.2,
    onScroll = () => {},
}) => {
    const staggerVariants = {
        hidden: { opacity: 0, scale: 0.75 },
        shown: { opacity: 1, scale: 1, transition: { delay: delay } },
    };

    return (
        <motion.div
            // initial="initial"
            // animate="animate"
            // transition={transition}
            variants={staggerVariants}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
            onScroll={onScroll}
        >
            {children}
        </motion.div>
    );
};
