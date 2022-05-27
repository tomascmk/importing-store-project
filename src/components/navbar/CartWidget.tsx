import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Badge } from '@mui/material';

export const CartWidget = () => {
  return (
    <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
      <Badge badgeContent={4} color='error'>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};
