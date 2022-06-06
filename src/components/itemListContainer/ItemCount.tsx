import React from 'react';
import { ButtonGroup, Tooltip, Button } from '@mui/material';

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
  return (
    <ButtonGroup variant='contained' aria-label='outlined primary button group'>
      <Tooltip title='Remove Item' placement='top' arrow>
        <Button size='small' color='primary' onClick={() => onRemove(itemCant)}>
          -
        </Button>
      </Tooltip>
      <Button>{itemCant}</Button>
      <Tooltip title='Add Item' placement='top' arrow>
        <Button size='small' color='primary' onClick={() => onAdd(itemCant)}>
          +
        </Button>
      </Tooltip>
    </ButtonGroup>
  );
};
