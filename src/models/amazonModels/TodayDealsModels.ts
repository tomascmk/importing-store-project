export interface ProductsDocs {
  app_sale_price: string;
  app_sale_price_currency: string;
  app_sale_range: { min: number; max: number; currency: string };
  deal_end: string;
  deal_start: string;
  original_price: string;
  product_detail_url: string;
  product_id: string;
  product_main_image_url: string;
  product_title: string;
}

export interface TodayDealsModels {
  deal_docs: any[];
  products_docs: ProductsDocs[];
}
