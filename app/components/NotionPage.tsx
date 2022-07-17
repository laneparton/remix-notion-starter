import * as React from 'react'
import { NotionRenderer } from 'react-notion-x'
import { NotionPageHeader } from './NotionPageHeader'
import styles from './styles.module.css'
import { Collection } from 'react-notion-x/build/third-party/collection'
import siteConfig from 'site.config'

export const NotionPage = ({ recordMap, rootPageId }) => {

  console.log('notion page', {
    recordMap
  })

  const components = React.useMemo(
    () => ({
      Header: NotionPageHeader,
      Collection,
    }),
    []
  )

    return (
        <>
          <NotionRenderer
            bodyClassName={styles.notion}
            darkMode={false}
            components={components}
            recordMap={recordMap}
            rootPageId={siteConfig.rootNotionPageId}
            rootDomain={siteConfig.domain}
            fullPage={true}
            // previewImages={!!recordMap.preview_images}
            // showCollectionViewDropdown={false}
            // showTableOfContents={showTableOfContents}
            // minTableOfContentsItems={minTableOfContentsItems}
            // defaultPageIcon={config.defaultPageIcon}
            // defaultPageCover={config.defaultPageCover}
            // defaultPageCoverPosition={config.defaultPageCoverPosition}
            // mapPageUrl={siteMapPageUrl}
            // mapImageUrl={mapImageUrl}
            // searchNotion={config.isSearchEnabled ? searchNotion : null}
            // pageAside={pageAside}
            // footer={footer}
          />
        </>
      )
}