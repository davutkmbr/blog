import { marked } from "marked";
import type {
  MetaFunction,
  LinksFunction,
  LoaderFunction,
} from "@remix-run/node";
import { Response } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import styles from "highlight.js/styles/github-dark-dimmed.css";
import Container from "~/components/Container";
import type { Article as ArticleModel } from "~/models/article";
import strapi from "~/utils/strapi.server";
import { localeDate } from "~/utils/date";

export const loader: LoaderFunction = async ({ params }) => {
  const articles = await strapi(
    `articles?filters[slug][$eq]=${params.slug}&populate=tags`
  );

  if (articles.data.length === 0) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  const article = articles.data[0];
  const rehype = import("rehype");
  const rehypeHighlight = await import("rehype-highlight").then(
    (mod) => mod.default
  );

  const markdown = await (await rehype)
    .rehype()
    .data("settings", { fragment: true })
    .use(rehypeHighlight)
    .process(marked(article.attributes.content));

  article.attributes.contentHTML = String(markdown);

  return json({ article });
};

export const meta: MetaFunction = ({ data: { article } }) => ({
  title: article.attributes.title,
});

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export default function Article() {
  const { article }: { article: ArticleModel } = useLoaderData();

  return (
    <Container className="py-10">
      <div className="prose md:prose-lg lg:prose-xl prose-slate mx-auto">
        <div className="not-prose space-y-3 mb-4">
          <h1 className="text-slate-800 text-2xl md:text-4xl lg:text-5xl font-extrabold">
            {article.attributes.title}
          </h1>
          <div className="flex items-center gap-3">
            {article.attributes.tags.data.length && (
              <div className="flex items-center gap-1">
                {article.attributes.tags.data.map((tag) => (
                  <div
                    key={tag.id}
                    className="text-sky-600 bg-sky-100 text-sm px-2 py-1 rounded"
                  >
                    {tag.attributes.name}
                  </div>
                ))}
              </div>
            )}
            <span className="text-gray-400 text-sm">
              {localeDate(article.attributes.updatedAt)}
            </span>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: article.attributes.contentHTML,
          }}
        ></div>
      </div>
    </Container>
  );
}
