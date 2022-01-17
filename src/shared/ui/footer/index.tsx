/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import React, { FC } from 'react';
import styles from 'src/styles/Footer.module.scss';
import Link from 'next/link';

export const Footer: FC<FooterProps> = () => {
    return (
        <section className={styles.footer}>
            <header>
                <Link href="/">
                    <div className={styles.icon}>Icon</div>
                </Link>
            </header>

            <div className={styles.content}>
                <section>
                    <h2>Услуги</h2>
                    <ul>
                        <li>
                            <Link href="/services/investments">
                                Инвестицировать в недвижимость
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/private">
                                Купить недвижимость в личное пользование
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/mortgage">
                                Получить ипотеку
                            </Link>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>Услуги</h2>
                    <ul>
                        <li>
                            <Link href="/services/investments">
                                Инвестицировать в недвижимость
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/private">
                                Купить недвижимость в личное пользование
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/mortgage">
                                Получить ипотеку
                            </Link>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>Услуги</h2>
                    <ul>
                        <li>
                            <Link href="/services/investments">
                                Инвестицировать в недвижимость
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/private">
                                Купить недвижимость в личное пользование
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/mortgage">
                                Получить ипотеку
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>
            <div className={styles.phone}>
                [<span className={styles.phoneIcon}>/I/ </span>
                <span>+7 (917) 136-94-36</span>]
            </div>
        </section>
    );
};
