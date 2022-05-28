import { AppType } from '../enums/AppType';
import { apiGet } from './BaseService';
import {
  ProductsDocs,
  TodayDealsModels,
} from '../models/amazonModels/TodayDealsModels';

export const getTodayDeals = async (): Promise<ProductsDocs[]> => {
  try {
    const url = `/todaydeals?country=US`;
    const response = await apiGet<TodayDealsModels>(url, AppType.Amazon);

    return response.products_docs;
  } catch (error) {
    console.log('Error on getContracts', error);
    throw error;
  }
};
