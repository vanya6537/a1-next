/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import type { NextPage } from 'next';
import React from 'react';
import { HeroContent } from 'src/features/home/ui/hero-content';
import styles from 'src/styles/Home.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from 'framer-motion';
import { AnimatedLayout } from 'src/shared/ui/animated-layout';
import { Divider } from 'src/features/home/ui/divider';

const HomePage: NextPage = () => {
    const partnerIcons = [
        '/icons/whiteLogo.svg',
        '/icons/whiteLogo.svg',
        '/icons/whiteLogo.svg',
        '/icons/whiteLogo.svg',
        '/icons/whiteLogo.svg',
    ];
    const areas = [
        { name: 'Казань', key: 'kzn' },
        { name: 'Дубай', key: 'dubai' },
        { name: 'Мск', key: 'msk' },
        { name: 'Лондон', key: 'london' },
    ];
    const shadowX = useSpring(0);
    const shadowY = useMotionValue(0);
    const shadow = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3))`;

    return (
        <AnimatedLayout>
            <HeroContent />
            <section className={cn(styles.block, styles.partners)}>
                <motion.div className={styles.dividerWrapper}>
                    <motion.div className={styles.relative}>
                        <Divider />
                    </motion.div>
                </motion.div>
                <h1>Наши партнеры</h1>
                <motion.ul
                    drag="x"
                    dragConstraints={{ left: -500, right: 500 }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                    }}
                >
                    {partnerIcons.map((iconSrc, index) => (
                        <motion.li
                            key={`partner${index}`}
                            className={styles.partnerItem}
                        >
                            <motion.img
                                alt="partner-name"
                                src={iconSrc}
                                width="80"
                                height="80"
                            />
                        </motion.li>
                    ))}
                </motion.ul>
            </section>
            <motion.section className={cn(styles.catalog)}>
                <motion.h1
                    initial={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 80, duration: 2 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Скачать каталог новых домов для жизни и инвестиций
                </motion.h1>
                <motion.div className={styles.catalogItems}>
                    {areas.map(({ key, name }) => (
                        <motion.div
                            grid-area={key}
                            key={key}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.1 },
                                // width: '100%',
                                // opacity: 0.5,
                            }}
                            // transition={{
                            //     type: 'spring',
                            //     stiffness: 80,
                            // }}
                            whileTap={{
                                scale: 0.95,
                                transition: { duration: 0.1 },
                            }}
                        >
                            <h3>{name.toUpperCase()}</h3>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </AnimatedLayout>
    );
};

export default HomePage;
