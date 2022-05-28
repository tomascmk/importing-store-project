export class ItemsHelper {
  static getPriceToShow = (
    price: number | string,
    discount?: number
  ): { price: number | string; decimals?: number } => {
    let priceToShow: number;
    if (typeof price === 'string') {
      price = parseFloat(price);
    }
    if (discount) {
      priceToShow = price - price * (discount / 100);
    } else {
      priceToShow = price;
    }
    const decimals =
      Number((priceToShow - Math.floor(priceToShow)).toFixed(2)) * 100;
    return {
      price: isNaN(priceToShow) ? 'Consultar precio' : Math.trunc(priceToShow),
      decimals: decimals > 0 ? decimals : undefined,
    };
  };
}
