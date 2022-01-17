/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import { ButtonHTMLAttributes } from 'react';

type ButtonVariantProp = 'ghost' | 'normal' | 'link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     The display type of the button
     */
    variant?: ButtonVariantProp;
}
