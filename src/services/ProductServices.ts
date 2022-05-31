import { AppType } from '../enums/AppType';
import { apiGet } from './BaseService';
import {
  ProductsDocs,
  TodayDealsModels,
} from '../models/amazonModels/TodayDealsModels';
import { ProductModel } from '../models/amazonModels/PorductModel';

export const getTodayDeals = async (): Promise<ProductsDocs[]> => {
  try {
    const url = `api/todaydeals?country=US`;
    const response = await apiGet<TodayDealsModels>(url, AppType.Amazon);
    return response.products_docs;
  } catch (error) {
    console.log('Error on getContracts', error);
    throw error;
  }
};
export const getProductById = async (
  productId: string
): Promise<ProductModel> => {
  try {
    const url = `/api/product/${productId}`;
    const response = await apiGet<ProductModel>(url, AppType.Amazon);
    console.log('response', response);
    return response;
  } catch (error) {
    console.log('Error on getContracts', error);
    throw error;
  }
};
