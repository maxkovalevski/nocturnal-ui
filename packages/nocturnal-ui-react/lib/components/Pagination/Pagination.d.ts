import { FC } from "react";
import { LinkView } from "../../typings/LinkView";
export interface PaginationProps {
    currentPage: number;
    pagesCount: number;
    routePath: string;
    pageRoutePath?: string;
    linkView?: LinkView;
}
export declare const Pagination: FC<PaginationProps>;
