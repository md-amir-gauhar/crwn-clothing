import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverView from '../../components/collections-overview/CollectionOverview';
import Collection from '../collection/Collection';

const ShopPage = ({ match }) => {

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverView} />
      <Route exact path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  )
}

export default ShopPage;
