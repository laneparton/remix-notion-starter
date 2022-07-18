import type { ExtendedRecordMap } from "notion-types";
import { uuidToId, parsePageId } from "notion-utils";
import siteConfig from "site.config";
import { getCanonicalPageId } from "./get-canonical-page-id";

// include UUIDs in page URLs during local development but not in production
// (they're nice for debugging and speed up local dev)
//const uuid = !!includeNotionIdInUrls

export const mapPageUrl =
  (recordMap: ExtendedRecordMap, searchParams: URLSearchParams) =>
  (pageId = "") => {
    const pageUuid = parsePageId(pageId, { uuid: true });

    if (uuidToId(pageUuid) === siteConfig.rootNotionPageId) {
      return createUrl("/", searchParams);
    } else {
      return createUrl(
        `/${getCanonicalPageId(pageUuid, recordMap, { uuid: false })}`,
        searchParams
      );
    }
  };

export const getCanonicalPageUrl =
  (recordMap: ExtendedRecordMap) =>
  (pageId = "") => {
    const pageUuid = parsePageId(pageId, { uuid: true });

    if (uuidToId(pageId) === siteConfig.rootNotionPageId) {
      return `https://${siteConfig.domain}`;
    } else {
      return `https://${siteConfig.domain}/${getCanonicalPageId(
        pageUuid,
        recordMap,
        {
          uuid,
        }
      )}`;
    }
  };

function createUrl(path: string, searchParams: URLSearchParams) {
  return [path, searchParams.toString()].filter(Boolean).join("?");
}
