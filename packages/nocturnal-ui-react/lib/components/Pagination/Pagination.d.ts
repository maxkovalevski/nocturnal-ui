import { FC } from "react";
interface PaginationProps {
    currentPage: number;
    pagesCount: number;
    routePath: string;
    pageRoutePath?: string;
}
export declare const Pagination: FC<PaginationProps>;
export {};
