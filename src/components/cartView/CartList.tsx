import React from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from '@mui/material';
import { ProductDocs } from '../../models/amazonModels/TodayDealsModels';
import { CartItemActions } from './CartItemActions';
import { AppLink } from '../utils/AppLink';

interface Properties {
  items?: ProductDocs[];
}

export const CartList: React.FC<Properties> = ({ items }) => {
  const renderItems = (): JSX.Element => {
    return (
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {items?.map((item) => (
          <>
            <Divider variant='inset' component='li' />
            <ListItem
              alignItems='flex-start'
              sx={{ width: '100%', maxWidth: '100%' }}
            >
              <ListItemAvatar>
                <Avatar alt='Remy Sharp' src={item.product_main_image_url} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <AppLink to={`/product/${item.product_id}`}>
                    {item.product_title}
                  </AppLink>
                }
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component='span'
                      variant='body2'
                      color='text.primary'
                    >
                      {item.app_sale_price && item.original_price && (
                        <span>
                          <del>${item.original_price}</del> - $
                          {item.app_sale_price}
                        </span>
                      )}
                      {item.app_sale_price && !item.original_price && (
                        <span>${item.original_price}</span>
                      )}
                      {item.app_sale_price === '' && (
                        <span>${item.app_sale_range.max}</span>
                      )}
                    </Typography>
                    <CartItemActions itemId={item.product_id} />
                  </>
                }
              />
            </ListItem>
          </>
        ))}
      </List>
    );
  };
  return <>{items ? <div>{renderItems()}</div> : 'No hay items'}</>;
};
