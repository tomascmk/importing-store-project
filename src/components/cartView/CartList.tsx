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
  onRemoveItem(itemId: string): void;
  onAddItemToCart?(item: ProductDocs): void;
  onItemSaved?(itemId: string): void;
}

export const CartList: React.FC<Properties> = ({
  items,
  onRemoveItem,
  onAddItemToCart,
  onItemSaved,
}) => {
  const renderItems = (): JSX.Element => {
    const handleAddItemToCart = (itemId: string) => {
      const itemToAdd = items?.find((item) => item.product_id === itemId);
      if (onAddItemToCart && itemToAdd) {
        onAddItemToCart(itemToAdd);
      }
    };

    return (
      <>
        {items && items?.length > 0 ? (
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {items?.map((item) => (
              <>
                <Divider variant='inset' component='li' />
                <ListItem
                  alignItems='flex-start'
                  sx={{ width: '100%', maxWidth: '100%' }}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt='Remy Sharp'
                      src={item.product_main_image_url}
                    />
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
                        <CartItemActions
                          itemId={item.product_id}
                          onRemoveItem={onRemoveItem}
                          onItemSaved={onItemSaved}
                          onAddItemToCart={
                            onAddItemToCart ? handleAddItemToCart : undefined
                          }
                        />
                      </>
                    }
                  />
                </ListItem>
              </>
            ))}
          </List>
        ) : (
          <Typography component='span' variant='body2' color='text.primary'>
            No hay items
          </Typography>
        )}
      </>
    );
  };
  return <>{items ? <div>{renderItems()}</div> : 'No hay items'}</>;
};
