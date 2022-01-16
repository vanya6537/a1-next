import { FC } from 'react';
import styles from './styles.module.css';
import cn from 'classnames';

export const Button: FC<ButtonProps> = ({ children, className }) => {
    return <button className={cn(className, styles.button)}>{children}</button>;
};
