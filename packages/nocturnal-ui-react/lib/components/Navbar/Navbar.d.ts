import { FC, ReactNode } from "react";
import { NavItem } from "../../common/types";
import { LinkView } from "../../typings/LinkView";
export interface NavbarProps {
    currentPath?: string;
    items: NavItem[];
    withLine?: boolean;
    contentAfter?: ReactNode;
    linkView?: LinkView;
}
export declare const Navbar: FC<NavbarProps>;
