/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import React, { FC } from 'react';
import styles from 'src/styles/Dropdown.module.scss';
import cn from 'classnames';
import Link from 'next/link';
export const Dropdown: FC<DropdownProps> = ({ title, items, className }) => {
    // up to 5 items animated, need more? change styles
    return (
        <div className={cn(className, styles.dropdown)}>
            <span>{title}</span>
            <ul
                className={cn(
                    styles.dropdownMenu,
                    styles.dropdownMenuAnimated,
                    styles.dropdownMenuEach
                )}
            >
                {items.map(({ href, text }, index) => {
                    const indexedClassName = `dropdownItem${index + 1}`;
                    return (
                        <li
                            key={indexedClassName}
                            className={cn(styles[indexedClassName])}
                        >
                            {href ? <Link href={href}>{text}</Link> : text}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

/* to reformat
 className="(.*)"
 className={cn(styles["$1"])}
 */
