import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Container from "~/components/Container";
import type { Article } from "~/models/article";
import { localeDate } from "~/utils/date";
import strapi from "~/utils/strapi.server";

export const meta: MetaFunction = () => ({
  title: "Articles",
});

export const loader: LoaderFunction = async () => {
  const articles: { data: Article[] } = await strapi(
    "articles?sort[updatedAt]=desc&populate=tags"
  );

  return { articles: articles.data };
};

export default function Blog() {
  const { articles } = useLoaderData();

  return (
    <Container className="py-10">
      <div className="flex flex-col gap-2">
        {articles.map((article: Article) => (
          <Link
            prefetch="intent"
            to={`/articles/${article.attributes.slug}`}
            key={article.id}
            className="space-y-1 bg-gray-50 rounded p-3"
          >
            <span className="text-gray-400 text-sm">
              {localeDate(article.attributes.updatedAt)}
            </span>
            <h2 className="font-medium text-gray-700 text-lg">
              {article.attributes.title}
            </h2>
            <div className="flex items-center gap-1 opacity-75">
              {article.attributes.tags.data.map((tag) => (
                <div
                  key={tag.id}
                  className="text-sky-600 bg-sky-100 text-xs px-2 py-1 rounded"
                >
                  {tag.attributes.name}
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
