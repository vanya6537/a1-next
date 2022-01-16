import styles from 'src/styles/SideSlider.module.scss';
import { FC } from 'react';

export const SideSlider: FC<SideSliderProps> = () => {
    return (
        <div className={styles.sideWrapper}>
            <div className={styles.decor}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};
