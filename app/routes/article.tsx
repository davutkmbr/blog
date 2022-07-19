import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import styles from "highlight.js/styles/github-dark-dimmed.css";
import Container from "~/components/Container";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export default function Blog() {
  return (
    <Container className="py-10">
      <div className="prose lg:prose-lg mx-auto">
        <Outlet />
      </div>
    </Container>
  );
}
