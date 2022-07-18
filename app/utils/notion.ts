import type {
  ExtendedRecordMap,
  SearchParams,
  SearchResults,
} from "notion-types";

import { notion } from "./notion-api";

export async function getPage(pageId: string): Promise<ExtendedRecordMap> {
  let recordMap = await notion.getPage(pageId);

  return recordMap;
}

export async function search(params: SearchParams): Promise<SearchResults> {
  return notion.search(params);
}
