import { FC, ReactNode } from "react";
import { NavItem } from "../../common/types";
interface NavbarProps {
    currentPath?: string;
    items: NavItem[];
    withLine?: boolean;
    contentAfter?: ReactNode;
}
export declare const Navbar: FC<NavbarProps>;
export {};
