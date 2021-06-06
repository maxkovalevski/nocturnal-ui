import { FC } from "react";
import { LinkProps } from "@reach/router";
interface NavLinkProps extends Pick<LinkProps<{}>, "to" | "className" | "children"> {
    isActive?: boolean;
}
export declare const NavLink: FC<NavLinkProps>;
export {};
