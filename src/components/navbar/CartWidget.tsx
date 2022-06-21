import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Badge } from '@mui/material';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

export const CartWidget = () => {
  const { cartItemsNumber } = useContext(CartContext);
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/cart');
  };
  return (
    <IconButton
      size='large'
      aria-label='show 4 new mails'
      color='inherit'
      onClick={handleClick}
    >
      <Badge badgeContent={cartItemsNumber} color='error'>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};
