import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Badge } from '@mui/material';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {
  const { cartItemsNumber } = useContext(CartContext);

  return (
    <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
      <Badge badgeContent={cartItemsNumber} color='error'>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};
