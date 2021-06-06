import { FC } from "react";
interface BreadcrumbsProps {
    items: {
        to?: string;
        label: string;
    }[];
}
export declare const Breadcrumbs: FC<BreadcrumbsProps>;
export {};
