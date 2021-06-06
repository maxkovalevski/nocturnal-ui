import { CSSProperties, FC } from "react";
interface BtnBackButtonProps {
    type: "button";
    onClick(): void;
}
interface BtnBackLinkProps {
    type: "link";
    to: string;
}
declare type BtnBackTypeProps = BtnBackButtonProps | BtnBackLinkProps;
interface BtnBackMainProps {
    children: string;
    direction?: "left" | "right";
    style?: CSSProperties;
}
export declare type BtnBackProps = BtnBackMainProps & BtnBackTypeProps;
export declare const BtnBack: FC<BtnBackProps>;
export {};
