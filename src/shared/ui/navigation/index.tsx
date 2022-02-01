/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import React, { FC, useEffect, useMemo, useState } from 'react';
import styles from 'src/styles/Navigation.module.scss';
import Link from 'next/link';
import { Dropdown } from 'src/shared/ui/dropdown';
import Image from 'next/image';
import { SideMenu } from 'src/shared/ui/side-menu';
import { motion } from 'framer-motion';

export const Navigation: FC<NavigationProps> = () => {
    const [linksAreVisible, setLinksVisibility] = useState(false);
    useEffect(() => {
        if (window) {
            setLinksVisibility(window.innerWidth >= 600);
        }
    }, []);

    const [width, setWidth] = useState(400);
    const [height, setHeight] = useState(200);
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        if (window) {
            setMobile(window.innerWidth < 600);
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
    }, []);

    const translateX = useMemo(() => width / 2 - 30, [width]);
    const translateY = useMemo(() => height / 2.5, [height]);

    return (
        <motion.nav className={styles.header}>
            <motion.div
                className={styles.icon}
                animate={{
                    rotate: [0, 0, 0, 30, 360],
                    translateX: [
                        translateX,
                        translateX,
                        translateX,
                        translateX,
                        0,
                    ],
                    translateY: [
                        translateY,
                        translateY,
                        translateY,
                        translateY,
                        0,
                    ],
                    scale: !isMobile ? [10, 10, 10, 10, 1] : [8, 8, 8, 8, 1],
                    opacity: [0, 1, 1, 1, 1],
                }}
                transition={{
                    duration: 5,
                    ease: 'easeInOut',
                    times: [0, 0.2, 0.5, 0.8, 1],
                    // repeat: Infinity,
                    // repeatDelay: 1,
                    delay: 1,
                }}
            >
                <Link href="/">
                    <Image
                        src={'/icons/whiteLogo.svg'}
                        width="40"
                        height="40"
                        className={styles.logo}
                    />
                </Link>
            </motion.div>

            {linksAreVisible && (
                <ul className={styles.links}>
                    <li>
                        <Dropdown
                            title={'Услуги'}
                            items={[
                                {
                                    href: '/services/investments',
                                    text: 'Инвестицировать в недвижимость',
                                },
                                {
                                    href: '/services/private',
                                    text: 'Купить недвижимость в личное пользование',
                                },
                                {
                                    href: '/services/mortgage',
                                    text: 'Получить ипотеку',
                                },
                            ]}
                            className={styles.dropdown}
                        />
                    </li>
                    <li>
                        <Dropdown
                            title={'О нас'}
                            items={[
                                {
                                    href: '/about-us',
                                    text: 'О компании',
                                },
                                {
                                    href: '/team',
                                    text: 'Команда',
                                },
                            ]}
                            className={styles.dropdown}
                        />
                    </li>
                </ul>
            )}
            <a className={styles.phone} href="tel:+79171369436">
                +7 (917) 136-94-36
            </a>
            <SideMenu />
        </motion.nav>
    );
};
