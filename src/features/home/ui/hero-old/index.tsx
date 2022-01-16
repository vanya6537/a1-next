import { FC } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import { Button } from 'src/features/home/ui/button';
import cn from 'classnames';
import { useScroll } from '@react-three/drei';
import { state } from 'src/features/threejs/lib';

export const HeroScreen: FC<HeroScreenProps> = ({ className }) => {
    // const scroll = useScroll();
    // const onScroll = (e) =>
    //     (state.top.current = scroll.offset * state.pages * e.target.scrollTop);
    //
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
                <Link href={'/'}>
                    <Button>Получить помощь</Button>
                </Link>
            </div>
        </section>
    );
};
