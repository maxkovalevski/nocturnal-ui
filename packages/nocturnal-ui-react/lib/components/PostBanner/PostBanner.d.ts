import React, { FC } from "react";
export interface PostBannerProps {
    title: React.ReactNode;
    content: React.ReactNode;
    btnTitle: string;
    iconSrc?: string;
    iconSize?: string;
    successView: React.ReactNode;
    errorView: React.ReactNode;
    onSubmit?(e: React.FormEvent<HTMLFormElement>): void;
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
    inputName?: string;
    inputType?: string;
    inputPlaceholder?: string;
    inputValue?: string | number | readonly string[];
    status?: "initial" | "success" | "error";
}
export declare const PostBanner: FC<PostBannerProps>;
