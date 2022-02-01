/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import type { NextPage } from 'next';
import React, { useState } from 'react';
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
    const [itemsVisible, showItems] = useState(false);
    return (
        <>
            <HeroContent />
            <section className={cn(styles.block, styles.partners)}>
                <motion.div className={styles.dividerWrapper}>
                    <motion.div className={styles.relative}>
                        <Divider />
                    </motion.div>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, translateY: -20 }}
                    transition={{
                        type: 'spring',
                        stiffness: 20,
                        duration: 2,
                        delay: 0.5,
                    }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                >
                    Наши партнеры
                </motion.h1>
                <motion.ul
                    drag="x"
                    dragConstraints={{ left: -200, right: 200 }}
                >
                    {partnerIcons.map((iconSrc, index) => (
                        <motion.li
                            key={`partner${index}`}
                            className={styles.partnerItem}
                            initial={{ opacity: 0, translateY: 100 }}
                            transition={{
                                type: 'spring',
                                stiffness: 80,
                                duration: 1,
                                delay: index / 2,
                            }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true }}
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
                    initial={{ opacity: 0, translateY: -20 }}
                    transition={{
                        type: 'spring',
                        stiffness: 20,
                        duration: 2,
                        delay: 0.5,
                    }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                >
                    Скачать каталог новых домов для жизни и инвестиций
                </motion.h1>
                <motion.div
                    className={styles.catalogItems}
                    initial={{
                        opacity: 0,
                        translateY: -40,
                    }}
                    whileInView={{
                        opacity: 1,
                        translateY: 0,
                        transition: {
                            type: 'spring',
                            stiffness: 20,
                            duration: 2,
                            delay: 1,
                        },
                    }}
                    viewport={{ once: true }}
                >
                    {areas.map(({ key, name }, index) => (
                        <motion.div
                            grid-area={key}
                            key={key}
                            whileHover={{
                                scale: 1,
                                transition: {
                                    duration: 0.3,
                                    // duration: 0.3,
                                    delay: 0,
                                    type: 'spring',
                                    stiffness: 100,
                                },
                            }}
                            initial={{ scale: 0.9 }}
                            whileTap={{
                                scale: 0.8,
                                transition: {
                                    duration: 0.1,
                                    // delay: 0.5,
                                    type: 'spring',
                                    stiffness: 200,
                                },
                            }}
                        >
                            <h3>{name.toUpperCase()}</h3>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </>
    );
};

export default HomePage;
