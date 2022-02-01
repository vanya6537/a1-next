/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import React, { FC } from 'react';
import styles from 'src/styles/HomeScrollable.module.scss';
import Link from 'next/link';
import { Button } from 'src/features/home/ui/button';
import cn from 'classnames';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const HeroContent: FC<HeroContentProps> = ({ className }) => {
    return (
        <section className={cn(className, styles.hero)}>
            <div className={styles.bg}>
                <img src={'/icons/left.svg'} className={styles.left} />
                <img src={'/icons/right.svg'} className={styles.right} />
            </div>
            <div className={styles.content}>
                {/*<div className={styles.slidesCounter}>*/}
                {/*    <span className={styles.currentSlide}>01</span>*/}
                {/*    <span className={styles.slidesSpacer}></span>*/}
                {/*    <span className={styles.lastSlide}>05</span>*/}
                {/*</div>*/}

                <div className={styles.rectangle}></div>
                {/*<p className={styles.text}>*/}
                {/*    <span>ИНВЕСТИРУЙ В ТУ ЖИЗНЬ</span>*/}
                {/*    <br />*/}
                {/*    <span className={styles.bold}>КОТОРУЮ ТЫ ХОЧЕШЬ</span>*/}
                {/*</p>*/}
                <motion.div
                    className={styles.btnWrapper}
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                        transition: {
                            type: 'spring',
                            stiffness: 20,
                            duration: 2,
                            delay: 0.5,
                        },
                    }}
                    viewport={{ once: true }}
                >
                    <Link href={'/about-us'}>
                        <Button className={cn(styles.button, styles.noSelect)}>
                            Подбор недвижмости
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
