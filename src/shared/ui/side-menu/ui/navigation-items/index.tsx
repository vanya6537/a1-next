import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '../menu-item';
import styles from 'src/styles/SideMenu.module.scss';

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        translateX: -200,
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
        translateX: -200,
        display: 'none',
    },
};

export const NavigationItems = () => (
    <motion.ul className={styles.items} variants={variants}>
        {itemIds.map((i) => (
            <MenuItem i={i} key={i} />
        ))}
    </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
