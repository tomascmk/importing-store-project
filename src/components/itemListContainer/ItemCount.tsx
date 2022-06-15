import React from 'react';
import { Tooltip, Button } from '@mui/material';

interface Properties {
  onAddToCart(): void;
}

export const ItemCount: React.FC<Properties> = ({ onAddToCart }) => {
  return (
    <Tooltip title='Add To Cart' placement='top' arrow>
      <Button
        size='small'
        variant='contained'
        color='primary'
        onClick={onAddToCart}
      >
        Add to cart
      </Button>
    </Tooltip>
  );
};
