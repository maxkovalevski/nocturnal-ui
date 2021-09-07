import { ReactNode } from "react";

export interface LinkViewProps {
  to: string;
  children?: ReactNode;
  className?: string;
};

export type LinkView = (props: LinkViewProps) => React.ReactNode

