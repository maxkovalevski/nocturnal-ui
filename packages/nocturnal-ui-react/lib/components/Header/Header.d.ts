import { FC } from "react";
import { NavItem } from "../../common/types";
import { LinkView } from "../../typings/LinkView";
interface HeaderProps {
    logoTitle: string;
    navItems: NavItem[];
    linkView?: LinkView;
}
export declare const Header: FC<HeaderProps>;
export {};
