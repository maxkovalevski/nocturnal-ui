/// <reference types="react" />
export declare const VARIANT: {
    readonly first: "first";
    readonly second: "second";
};
interface PostCardExcerptProps {
    children: string;
    variant?: typeof VARIANT.first | typeof VARIANT.second;
}
export declare const PostCardExcerpt: ({ children, variant, }: PostCardExcerptProps) => JSX.Element;
export default PostCardExcerpt;
