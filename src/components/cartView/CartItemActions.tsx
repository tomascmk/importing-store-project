import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

interface Properties {
  itemId: string;
  onRemoveItem(itemId: string): void;
  onItemSaved?(itemId: string): void;
  onAddItemToCart?(itemId: string): void;
  onBuyNow?(): void;
}
export const CartItemActions: React.FC<Properties> = ({
  itemId,
  onRemoveItem,
  onItemSaved,
  onAddItemToCart,
  onBuyNow,
}) => {
  return (
    <div>
      <Button onClick={() => onRemoveItem(itemId)}>Eliminar</Button>
      {onAddItemToCart && (
        <Button onClick={() => onAddItemToCart(itemId)}>
          Agregar al carrito
        </Button>
      )}
      {onBuyNow && <Button>Comprar ahora</Button>}
      {onItemSaved && (
        <Button onClick={() => onItemSaved(itemId)}>
          Guardar para despues
        </Button>
      )}
    </div>
  );
};
