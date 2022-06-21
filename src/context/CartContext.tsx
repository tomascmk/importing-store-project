import { createContext, useCallback, useMemo, useState } from 'react';
import { ProductDocs } from '../models/amazonModels/TodayDealsModels';

export interface CartContextValue {
  cartItems?: ProductDocs[];
  cartItemsNumber: number;
  cartTotal: number;
  onAddItemToCart(newItem: ProductDocs): void;
  onRemoveItemFromCart(itemId: string): void;
}
interface Props {
  item?: ProductDocs;
  children?: React.ReactNode;
}

export const CartContextProvider: React.FC<Props> = ({ children, item }) => {
  const [cartItems, setCartItems] = useState<ProductDocs[]>([]);

  const onAddItemToCart = useCallback(
    (newItem: ProductDocs) => {
      setCartItems([...cartItems, newItem]);
    },
    [cartItems]
  );

  const onRemoveItemFromCart = useCallback(
    (itemId: string) => {
      const newItems = cartItems.filter((item) => item.product_id !== itemId);
      setCartItems(newItems);
    },
    [cartItems]
  );

  const cartItemsNumber = useMemo<number>(() => {
    return cartItems?.length ?? 0;
  }, [cartItems]);

  const cartTotal = useMemo<number>(() => {
    if (!cartItems.length) {
      return 0;
    }
    const cartTotal = cartItems
      .map((a) => parseFloat(a.app_sale_price))
      .reduce((a, b) => a + b);
    return cartTotal;
  }, [cartItems]);

  const CartContextValue = useMemo<CartContextValue>(
    () =>
      ({
        cartItems,
        cartItemsNumber,
        cartTotal,
        onAddItemToCart,
        onRemoveItemFromCart,
      } as CartContextValue),
    [
      cartItems,
      cartItemsNumber,
      cartTotal,
      onAddItemToCart,
      onRemoveItemFromCart,
    ]
  );

  return (
    <CartContext.Provider value={CartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const CartContext = createContext<CartContextValue>(
  {} as CartContextValue
);
