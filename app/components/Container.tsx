import type { ReactChild, ReactChildren } from "react";

interface Props {
  children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
  className?: string;
}

export default function Container({ children, className }: Props) {
  return (
    <div className={`max-w-4xl mx-auto px-3 ${className}`}>{children}</div>
  );
}
