import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import './productImagePopup.scss';

interface Properties {
  canShow: boolean;
  imgUrl: string;
  onClose(): void;
}
export const ProductImagePopup: React.FC<Properties> = ({
  canShow,
  imgUrl,
  onClose,
}) => {
  return (
    <Modal
      open={canShow}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={{ p: 4 }} className='productPopup'>
        <img
          className='productPopup__img'
          src={imgUrl}
          srcSet={imgUrl}
          alt='Principal Image'
          loading='lazy'
        />
      </Box>
    </Modal>
  );
};
