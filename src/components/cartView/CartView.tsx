import { Container, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartList } from './CartList';
import { CartTotal } from './CartTotal';

export const CartView = () => {
  const { cartItems } = useContext(CartContext);
  console.log('cartItems', cartItems);
  return (
    <Container maxWidth='lg'>
      <div>CartView</div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <CartList items={cartItems} />
        </Grid>
        <Grid item xs={4}>
          <CartTotal />
        </Grid>
      </Grid>
    </Container>
  );
};
