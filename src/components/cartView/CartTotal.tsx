import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartTotal = () => {
  const { cartTotal } = useContext(CartContext);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h4' component='div'>
          Total: ${cartTotal}
        </Typography>
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant='contained' size='large'>
          Finalizar compra
        </Button>
      </CardActions>
    </Card>
  );
};
