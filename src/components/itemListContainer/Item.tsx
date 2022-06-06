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
import { Link } from 'react-router-dom';
import { ItemCount } from './ItemCount';

interface Properties {
  stock: number;
  initialStock: number;
  item: ProductsDocs;
}

export const Item: React.FC<Properties> = ({ stock, initialStock, item }) => {
  const discount = undefined;
  const { product_title, product_main_image_url, original_price } = item;
  const [itemCant, setItemCant] = useState(initialStock);

  const handleAddItem = (cant: number): void => {
    if (cant <= stock) {
      setItemCant(itemCant + 1);
    }
  };

  const handleRemoveItem = (cant: number): void => {
    if (cant >= 1) {
      setItemCant(itemCant - 1);
    }
  };

  const getPrice = (): JSX.Element => {
    const priceWithDiscount = ItemsHelper.getPriceToShow(
      original_price,
      discount
    );
    let originalPrice = ItemsHelper.getPriceToShow(original_price);
    originalPrice.price =
      typeof originalPrice.price === 'string'
        ? originalPrice.price
        : `${originalPrice.price}`;
    return (
      <Box sx={{ display: 'flex' }}>
        <Typography
          sx={{ display: 'flex' }}
          gutterBottom
          variant='h5'
          component='div'
        >
          {priceWithDiscount.price ?? originalPrice.price}
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
        <Link
          to={`/product/${item.product_id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <CardMedia
            component='img'
            height='140'
            image={product_main_image_url}
            alt='green iguana'
          />
          <CardContent>
            {getPrice()}
            <Typography
              gutterBottom
              variant='h6'
              component='div'
              sx={{ fontWeight: 'bold' }}
              noWrap
            >
              {product_title}
            </Typography>
            {/* <Typography variant='body2' color='text.secondary'>
            {desc}
          </Typography> */}
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'right' }}>
        <ItemCount
          itemCant={itemCant}
          onAdd={handleAddItem}
          onRemove={handleRemoveItem}
        />
      </CardActions>
    </Card>
  );
};
