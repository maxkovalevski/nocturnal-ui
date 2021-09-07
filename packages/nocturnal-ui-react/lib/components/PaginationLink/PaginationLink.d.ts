import { FC } from "react";
import { LinkView } from "../../typings/LinkView";
export interface PaginationLinkProps {
    to: string;
    isActive?: boolean;
    isDisabled?: boolean;
    linkView?: LinkView;
}
export declare const PaginationLink: FC<PaginationLinkProps>;
