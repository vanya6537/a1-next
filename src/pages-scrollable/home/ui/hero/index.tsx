/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import { FC } from 'react';
import styles from 'src/styles/HomeScrollable.module.scss';
import Link from 'next/link';
import { Button } from 'src/features/home/ui/button';
import cn from 'classnames';

export const HeroContent: FC<HeroContentProps> = ({ className }) => {
    return (
        <section className={cn(className, styles.hero)}>
            <div className={styles.content}>
                <div className={styles.slidesCounter}>
                    <span className={styles.currentSlide}>01</span>
                    <span className={styles.slidesSpacer}></span>
                    <span className={styles.lastSlide}>05</span>
                </div>
                <div className={styles.rectangle}></div>
                <p className={styles.text}>
                    <span>ИНВЕСТИРУЙ В ТУ ЖИЗНЬ</span>
                    <br />
                    <span className={styles.bold}>КОТОРУЮ ТЫ ХОЧЕШЬ</span>
                </p>
                <Link href={'/about-us'}>
                    <Button>Получить помощь</Button>
                </Link>
            </div>
        </section>
    );
};
