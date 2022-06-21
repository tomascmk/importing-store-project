import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import React, { useContext, useMemo } from 'react';
import { CartContext } from '../../context/CartContext';
import { ItemsHelper } from '../../helpers/ItemsHelper';

export const CartTotal = () => {
  const { cartTotal } = useContext(CartContext);

  const cartTotalToShow = useMemo(() => {
    const price = ItemsHelper.getPriceToShow(cartTotal);
    return `${price.price}${price.decimals ? `.${price.decimals}` : ''}`;
  }, [cartTotal]);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h4' component='div'>
          Total: ${cartTotalToShow}
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
