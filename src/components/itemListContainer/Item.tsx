import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  CardActionArea,
  CardActions,
  Tooltip,
} from '@mui/material';
import { ItemsHelper } from '../../helpers/ItemsHelper';
import { ProductsDocs } from '../../models/amazonModels/TodayDealsModels';

interface Properties {
  stock: number;
  initialStock: number;
  item: ProductsDocs;
}

export const Item: React.FC<Properties> = ({ stock, initialStock, item }) => {
  const discount = undefined;
  const { product_title, product_main_image_url, original_price } = item;
  const [itemCant, setItemCant] = useState(initialStock);

  const canChangeCant = (cant: number): boolean => {
    if (cant >= 1 && cant <= stock) {
      return true;
    }

    return false;
  };

  const handleCantChange = (cant: number): void => {
    if (canChangeCant(cant)) {
      setItemCant(cant);
    }
  };
  const getPrice = (): JSX.Element => {
    const priceWithDiscount = ItemsHelper.getPriceToShow(
      original_price,
      discount
    );
    const originalPrice = ItemsHelper.getPriceToShow(original_price);
    return (
      <Box sx={{ display: 'flex' }}>
        <Typography
          sx={{ display: 'flex' }}
          gutterBottom
          variant='h5'
          component='div'
        >
          ${priceWithDiscount.price ?? originalPrice.price}
          <Typography gutterBottom variant='body2' component='div'>
            {priceWithDiscount.decimals ?? originalPrice.decimals}
          </Typography>
        </Typography>
        {/* {discount && (
          <Typography
            sx={{ display: 'flex', alignItems: 'center' }}
            variant='subtitle1'
            gutterBottom
            component='div'
          >
            {originalPrice.price}
            {originalPrice.decimals && (
              <Typography variant='caption' display='block' gutterBottom>
                {originalPrice.decimals ?? ''}
              </Typography>
            )}
          </Typography>
        )} */}
      </Box>
    );
  };
  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth: 250,
        textAlign: 'left',
        position: 'relative',
      }}
    >
      {discount && discount > 0 ? (
        <Badge
          sx={{ position: 'absolute', top: 20, right: 20, zIndex: 1 }}
          badgeContent={`${discount}%`}
          color='warning'
        />
      ) : (
        ''
      )}
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={product_main_image_url}
          alt='green iguana'
        />
        <CardContent>
          {getPrice()}
          <Typography gutterBottom variant='h6' component='div' noWrap>
            {product_title}
          </Typography>
          {/* <Typography variant='body2' color='text.secondary'>
            {desc}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'right' }}>
        <ButtonGroup
          variant='contained'
          aria-label='outlined primary button group'
        >
          <Tooltip title='Remove Item' placement='top' arrow>
            <Button
              size='small'
              color='primary'
              onClick={() => handleCantChange(itemCant - 1)}
            >
              -
            </Button>
          </Tooltip>
          <Button>{itemCant}</Button>
          <Tooltip title='Add Item' placement='top' arrow>
            <Button
              size='small'
              color='primary'
              onClick={() => handleCantChange(itemCant + 1)}
            >
              +
            </Button>
          </Tooltip>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};
