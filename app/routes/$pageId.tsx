import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { NotionPage } from "~/components/NotionPage";
import resolveNotionPage from "~/utils/resolve-notion-page";
import siteConfig from "site.config";

export const loader = async ({ params }) => {
  const pageData = await resolveNotionPage(params.pageId);

  return json(await pageData);
};

export default function NotionDynamicPage() {
  const pageData = useLoaderData();
  return (
    <NotionPage recordMap={pageData} rootPageId={siteConfig.rootNotionPageId} />
  );
}
