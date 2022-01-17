/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

type DropdownItem = { href?: string; text: string };

interface DropdownProps {
    title: string;
    items?: DropdownItem[];
    className?: string;
}
