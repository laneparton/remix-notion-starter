import { notion } from './notion-api';

export default async function resolveNotionPage( pageId:string ) {
    const recordMap = await notion.getPage(pageId)
    return recordMap
}