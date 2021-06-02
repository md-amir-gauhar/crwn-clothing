import React, { useState } from 'react';
import CollectionPreview from '../../components/preview-collection/CollectionPreview';
import SHOP_DATA from './shopData';


const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className='shop-page'>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  )
}

export default ShopPage;
