import React from 'react';
import { ItemListContainer } from '../components/itemListContainer/ItemListContainer';
import { Dasboard } from '../enums/Dashboard';
interface Properties {
  dashboard: Dasboard;
}

export const ProductsPage: React.FC<Properties> = ({ dashboard }) => {
  return <ItemListContainer dashboard={dashboard} />;
};
