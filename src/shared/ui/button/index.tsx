/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import { FC } from 'react';
import { ButtonProps, ButtonVariantProp } from './types';
import styles from 'src/styles/Button.module.scss';
import cn from 'classnames';

const mapVariantToStyle: Record<ButtonVariantProp, Object> = {
    ghost: styles.ghost,
    normal: styles.normal,
    link: styles.link,
};

export const Button: FC<ButtonProps> = ({ children, variant = 'normal' }) => {
    return (
        <button className={cn(styles.button, mapVariantToStyle[variant])}>
            <span className={styles.icon} />
            {children}
        </button>
    );
};
