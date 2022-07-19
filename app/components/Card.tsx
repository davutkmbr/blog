import classNames from "classnames";
import type { ReactChild, ReactChildren } from "react";

interface Props {
  children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
  bg?: string;
  color?: string;
  className?: string;
}

export default function Card({ bg, color, className, children }: Props) {
  return (
    <div
      className={classNames({
        rounded: true,
        [bg || "bg-gray-100"]: true,
        [color || "text-gray-600"]: true,
        [className || ""]: className,
      })}
    >
      {children}
    </div>
  );
}
