import * as React from 'react';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from './ui/menu-toggle';
import { NavigationItems } from './ui/navigation-items';
import styles from 'src/styles/SideMenu.module.scss';
const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: 'spring',
            stiffness: 40,
            restDelta: 0.2,
        },
        height: '100vh',
        width: 300,
        translateX: -200,
    }),
    closed: {
        clipPath: 'circle(30px at 240px 40px)',
        transition: {
            delay: 0.1,
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
        translateX: -200,
        opacity: 0,
    },
};

export const SideMenu = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);

    return (
        <motion.nav
            animate={isOpen ? 'open' : 'closed'}
            custom={containerRef?.current?.offsetHeight}
            ref={containerRef}
            className={styles.nav}
        >
            <motion.div className={styles.background} variants={sidebar} />
            <NavigationItems />
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    );
};
