import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node"; // or "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react";
import resolveNotionPage from "~/utils/resolve-notion-page";
import { NotionPage } from "~/components/NotionPage";
import siteConfig from "site.config";

export const loader: LoaderFunction = async () => {
  const pageId = siteConfig.rootNotionPageId;
  const pageData = await resolveNotionPage(pageId);

  return json(await pageData);
};

export default function Index() {
  const indexPage = useLoaderData();
  console.log(indexPage);
  return (
    <div>
      <NotionPage
        recordMap={indexPage}
        rootPageId={siteConfig.rootNotionPageId}
      />
    </div>
  );
}
