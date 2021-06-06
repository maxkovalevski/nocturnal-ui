import { FC } from "react";
import { LinkProps } from "@reach/router";
interface PaginationLinkProps extends Pick<LinkProps<{}>, "to" | "children"> {
    isActive?: boolean;
    isDisabled?: boolean;
}
export declare const PaginationLink: FC<PaginationLinkProps>;
export {};
