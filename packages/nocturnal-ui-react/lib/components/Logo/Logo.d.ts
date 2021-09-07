import { FC } from "react";
import { LinkView } from "../../typings/LinkView";
export interface LogoProps {
    title: string;
    linkView?: LinkView;
}
export declare const Logo: FC<LogoProps>;
