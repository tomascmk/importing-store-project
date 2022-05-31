interface BreadcrumbsModel {
  name: string;
  url: string;
}

interface PriceInformation {
  app_sale_price: number;
  currency: string;
  original_price: number;
  discount: number;
  discount_percentage: number;
}

interface ProductDetails {
  _ASIN_: string;
  _Best_Sellers_Rank: string;
  _Country_of_Origin_: string;
  _Customer_Reviews: '4.6 out of 5 stars 108,057 ratings';
  _Date_First_Available_: string;
  _Is_Discontinued_By_Manufacturer_: string;
  _Item_model_number_: string;
  _Manufacturer_: string;
  _Product_Dimensions_: string;
}

interface ProductOverview {
  _Brand_: string;
  _Color_: string;
  _Item_Dimensions_LxWxH_: string;
}

export interface ProductModel {
  app_sale_price: string;
  available_quantity: number;
  breadcrumbs: BreadcrumbsModel[];
  currency: string;
  discount: string;
  discount_percentage: string;
  feature_bullets: string[];
  isPrime: boolean;
  message: string;
  noResults: boolean;
  original_price: number;
  price_information: PriceInformation;
  product_detail_url: string;
  product_details: ProductDetails;
  product_id: string;
  product_information_html: string[];
  product_main_image_url: string;
  product_overview: ProductOverview;
  product_small_image_urls: string[];
  product_technical_spec: {};
  product_title: string;
  technical_details: {};
  variantSizes: [];
}
