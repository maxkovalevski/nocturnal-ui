import { FC } from "react";
import { LinkView } from "../../typings/LinkView";
export interface NavLinkProps {
    isActive?: boolean;
    linkView?: LinkView;
    to: string;
    className?: string;
}
export declare const NavLink: FC<NavLinkProps>;
