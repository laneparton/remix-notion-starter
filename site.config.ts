import { siteConfig } from './app/utils/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'ababeb3954a74132ade2899619a50d21',

  // basic site info (required)
  name: 'Lane Parton',
  domain: 'laneparton.com',
  author: 'Lane Parton',

  // open graph metadata (optional)
  description: 'Just my little home on the internet.',

  // social usernames (optional)
  twitter: 'laneparton',
  github: 'laneparton',
  linkedin: 'lane-parton',
})
