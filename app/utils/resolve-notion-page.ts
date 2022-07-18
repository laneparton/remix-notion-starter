import { notion } from "./notion-api";
import { parsePageId } from "notion-utils";
import type { ExtendedRecordMap } from "./types";
import { getSiteMap } from "./get-site-map";

export default async function resolveNotionPage(rawPageId: string) {
  let pageId: string;
  let recordMap: ExtendedRecordMap;
  console.log("3", rawPageId);
  pageId = parsePageId(rawPageId);
  console.log("4", pageId);
  if (pageId) {
    recordMap = await notion.getPage(pageId);
  } else {
    // handle mapping of user-friendly canonical page paths to Notion page IDs
    // e.g., /developer-x-entrepreneur versus /71201624b204481f862630ea25ce62fe
    const siteMap = await getSiteMap();
    pageId = siteMap?.canonicalPageMap[rawPageId];

    if (pageId) {
      // TODO: we're not re-using the page recordMap from siteMaps because it is
      // cached aggressively
      // recordMap = siteMap.pageMap[pageId]

      recordMap = await notion.getPage(pageId);
    } else {
      // note: we're purposefully not caching URI to pageId mappings for 404s
      return {
        error: {
          message: `Not found "${rawPageId}"`,
          statusCode: 404,
        },
      };
    }
  }

  return recordMap;
}
