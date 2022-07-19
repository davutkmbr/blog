import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Container from "~/components/Container";
import Articles from "../articles.server";

interface Article {
  slug: string;
  meta?: any;
}

export const meta: MetaFunction = () => ({
  title: "Articles",
});

export const loader: LoaderFunction = async () => {
  const articles = Object.values(Articles).map((article) => {
    const slug = article.filename.replace(/\.mdx?$/, "");

    return {
      slug,
      ...article.attributes,
    };
  });

  return { articles };
};

export default function Blog() {
  const { articles } = useLoaderData();

  return (
    <Container className="py-10">
      <div className="flex flex-col gap-2">
        {articles.map((article: Article) => (
          <Link
            prefetch="intent"
            to={`/article/${article.slug}`}
            key={article.slug}
            className="border border-gray-100 p-4 rounded"
          >
            <h2 className="font-medium text-gray-700 text-lg">
              {article.meta.title}
            </h2>
          </Link>
        ))}
      </div>
    </Container>
  );
}
