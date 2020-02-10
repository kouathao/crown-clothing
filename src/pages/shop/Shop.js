import React from "react";

import CollectionOverview from "../../components/collections-overview/CollectionsOverview";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  );
};

export default ShopPage;
