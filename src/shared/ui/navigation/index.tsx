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
            <div className={styles.phone}>
                [<span className={styles.phoneIcon}>/I/ </span>
                <span>+7 (917) 136-94-36</span>]
            </div>
        </nav>
    );
};
