import { createContext, useCallback, useMemo, useState } from 'react';
import { ProductDocs } from '../models/amazonModels/TodayDealsModels';

export interface CartContextValue {
  cartItems?: ProductDocs[];
  cartItemsNumber: number;
  onAddItemToCart(newItem: ProductDocs): void;
  onRemoveItemFromCart(): void;
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

  const onRemoveItemFromCart = () => {};

  const cartItemsNumber = useMemo<number>(() => {
    return cartItems?.length ?? 0;
  }, [cartItems]);

  const CartContextValue = useMemo<CartContextValue>(
    () =>
      ({
        cartItems,
        cartItemsNumber,
        onAddItemToCart,
        onRemoveItemFromCart,
      } as CartContextValue),
    [cartItems, cartItemsNumber, onAddItemToCart]
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
