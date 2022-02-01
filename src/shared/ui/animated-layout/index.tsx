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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: 'spring',
                stiffness: 20,
                duration: 0.2,
                delay: 0.2,
            }}
        >
            {children}
        </motion.div>
    );
};
