import { NavLink as Link } from "@remix-run/react";
import classNames from "classnames";
import type { ReactChild, ReactChildren } from "react";

interface Props {
  children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
  to: string;
}

export default function NavLink({ children, to }: Props) {
  return (
    <Link
      to={to}
      prefetch="intent"
      className={({ isActive }) =>
        classNames({
          "px-5 py-2": true,
          "text-emerald-500 bg-emerald-100": isActive,
          "bg-gray-100": !isActive,
        })
      }
    >
      {children}
    </Link>
  );
}
