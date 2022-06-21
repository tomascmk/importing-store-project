import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

interface Properties {
  itemId: string;
  onItemSaved?(): void;
  onBuyNow?(): void;
}
export const CartItemActions: React.FC<Properties> = ({ itemId }) => {
  const { onRemoveItemFromCart } = useContext(CartContext);
  return (
    <div>
      <Button onClick={() => onRemoveItemFromCart(itemId)}>Eliminar</Button>
      <Button>Comprar ahora</Button>
      <Button>Guardar para despues</Button>
    </div>
  );
};
