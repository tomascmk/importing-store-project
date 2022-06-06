import React, { useState } from 'react';
import { ButtonGroup, Tooltip, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface Properties {
  itemCant: number;
  onAdd(itemCant: number): void;
  onRemove(itemCant: number): void;
}

export const ItemCount: React.FC<Properties> = ({
  itemCant,
  onAdd,
  onRemove,
}) => {
  const [finalizehPurchase, setFinalizePurchase] = useState(false);

  const onAddToCart = () => {
    setFinalizePurchase(true);
  };
  return (
    <>
      {finalizehPurchase ? (
        <Tooltip title='Finalize Purchase' placement='top' arrow>
          <Link
            to={`/cart`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Button
              size='small'
              variant='contained'
              color='primary'
              onClick={onAddToCart}
            >
              Finalize purchase
            </Button>
          </Link>
        </Tooltip>
      ) : (
        <div>
          <ButtonGroup
            variant='text'
            aria-label='outlined primary button group'
          >
            <Tooltip title='Remove Item' placement='top' arrow>
              <Button
                size='small'
                color='primary'
                onClick={() => onRemove(itemCant)}
              >
                -
              </Button>
            </Tooltip>
            <Button>{itemCant}</Button>
            <Tooltip title='Add Item' placement='top' arrow>
              <Button
                size='small'
                color='primary'
                onClick={() => onAdd(itemCant)}
              >
                +
              </Button>
            </Tooltip>
          </ButtonGroup>
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
        </div>
      )}
    </>
  );
};
