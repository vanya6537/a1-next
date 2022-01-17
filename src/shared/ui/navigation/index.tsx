/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import React, { FC } from 'react';
import styles from 'src/styles/Navigation.module.scss';
import Link from 'next/link';
import { Dropdown } from 'src/shared/ui/dropdown';

export const Navigation: FC<NavigationProps> = () => {
    return (
        <nav className={styles.header}>
            <div className={styles.icon}>
                <Link href="/">Icon</Link>
            </div>

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
            <a className={styles.phone} href="tel:+79171369436">
                [ +7 (917) 136-94-36 ]
            </a>
        </nav>
    );
};
