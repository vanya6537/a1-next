type DropdownItem = { href?: string; text: string };

interface DropdownProps {
    title: string;
    items?: DropdownItem[];
    className?: string;
}
