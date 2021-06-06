import { FC } from "react";
import { Language } from "prism-react-renderer";
interface CodeProps {
    language: Language;
    code: string;
}
export declare const Code: FC<CodeProps>;
export {};
