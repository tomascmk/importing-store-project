export class ItemsHelper {
  static getPriceToShow = (
    price: number,
    discount?: number
  ): { price: number; decimals?: number } => {
    let priceToShow: number;
    if (discount) {
      priceToShow = price - price * (discount / 100);
    } else {
      priceToShow = price;
    }
    const decimals =
      Number((priceToShow - Math.floor(priceToShow)).toFixed(2)) * 100;
    return {
      price: Math.trunc(priceToShow),
      decimals: decimals > 0 ? decimals : undefined,
    };
  };
}
