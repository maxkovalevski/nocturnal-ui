import { FC } from "react";
import { LinkView } from "../../typings/LinkView";
export interface BreadcrumbsProps {
    items: {
        to?: string;
        label: string;
    }[];
    linkView: LinkView;
}
export declare const Breadcrumbs: FC<BreadcrumbsProps>;
