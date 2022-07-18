import * as React from "react";
import { Breadcrumbs } from "react-notion-x";
import * as types from "notion-types";

export const NotionPageHeader: React.FC<{
  block: types.CollectionViewPageBlock | types.PageBlock;
}> = ({ block }) => {
  return (
    <header className="notion-header">
      <div className="notion-nav-header">
        <Breadcrumbs block={block} rootOnly={true} />
        {/* Build Navigation Here */}
      </div>
    </header>
  );
};
