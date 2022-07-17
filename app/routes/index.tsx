import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node"; // or "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react";
import resolveNotionPage from "../utils/resolve-page"
import { NotionPage } from "../components/NotionPage"

export const loader: LoaderFunction = async () => {
  const pageId = "ababeb3954a74132ade2899619a50d21";
  const pageData = await resolveNotionPage(pageId);

  return json(await pageData);
}

export default function Index() {
  const indexPage = useLoaderData();
  console.log(indexPage);
  return (
    <div>
        <NotionPage recordMap={indexPage} rootPageId={"ababeb3954a74132ade2899619a50d21"} />
    </div>
  );
}
