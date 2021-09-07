import { ReactNode } from "react";
export interface LinkViewProps {
    to: string;
    children?: ReactNode;
    className?: string;
}
export declare type LinkView = (props: LinkViewProps) => React.ReactNode;
