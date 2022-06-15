import React, { useContext, useMemo, useState } from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAsyncCall } from '../hooks/UseAsyncCall';
import { getProductById } from '../services/ProductServices';
import './ProductPage.scss';
import { ProductImagePopup } from '../components/popup/ProductImagePopup';
import { ItemCount } from '../components/itemListContainer/ItemCount';
import { CartContext } from '../context/CartContext';

export const ProductPage = () => {
  const { onAddItemToCart } = useContext(CartContext);
  const { productId } = useParams();
  const [canShowProductPopup, setCanShowProductPopup] = useState(false);

  const loader = useAsyncCall(async () => {
    if (productId) {
      return await getProductById(productId);
    }
    return;
  }, []);

  const productData = useMemo(
    () => (loader.completed ? loader.result : undefined),
    [loader]
  );

  const handleAddItem = (): void => {
    if (productData) {
      /* onAddItemToCart(productData); */
    }
  };

  return (
    <Container className='product__container'>
      {loader.completed && productData ? (
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} md={2} rowSpacing={1}>
            <ImageList
              sx={{ width: 160, height: 450 }}
              cols={1}
              rowHeight={100}
            >
              {productData.product_small_image_urls.map((item, index) => (
                <ImageListItem key={index}>
                  {item ? (
                    <Card sx={{ width: 151 }}>
                      <CardActionArea>
                        <CardMedia
                          component='img'
                          sx={{ width: 151 }}
                          image={item}
                          alt={item}
                        />
                      </CardActionArea>
                    </Card>
                  ) : (
                    <Skeleton variant='rectangular' width={100} height={100} />
                  )}
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
          <Grid item xs={6} md={6}>
            <Card sx={{ width: '100%' }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  sx={{ width: '100%' }}
                  image={productData.product_main_image_url}
                  alt={productData.product_main_image_url}
                  onClick={() => setCanShowProductPopup(true)}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} md={4}>
            <div>
              <Typography
                gutterBottom
                variant='h6'
                component='div'
                sx={{ fontWeight: 'bold' }}
                noWrap
              >
                {productData.product_title}
              </Typography>
              <Typography
                gutterBottom
                variant='h6'
                component='div'
                sx={{ fontWeight: 'bold' }}
                noWrap
              >
                {productData.original_price}
              </Typography>
            </div>
            <Stack spacing={2} direction='row'>
              <ItemCount onAddToCart={handleAddItem} />
            </Stack>
          </Grid>
        </Grid>
      ) : (
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} md={2} rowSpacing={1}>
            <ImageList
              sx={{ width: 500, height: 450 }}
              cols={1}
              rowHeight={100}
            >
              {Array.from(Array(4)).map((item, index) => (
                <ImageListItem key={index}>
                  {item ? (
                    <img
                      src={`${item}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item}
                      loading='lazy'
                    />
                  ) : (
                    <Skeleton variant='rectangular' width={100} height={100} />
                  )}
                </ImageListItem>
              ))}
            </ImageList>
            {/* {Array.from(Array(5)).map((_, index) => (
            <Grid key={index} rowSpacing={2}></Grid>
          ))} */}
          </Grid>
          <Grid item xs={6} md={6}>
            <Skeleton variant='rectangular' width='90%' height='80vh' />
          </Grid>
          <Grid item xs={6} md={4}>
            <Skeleton variant='text' width='80%' />
            <Skeleton variant='text' width='80%' />
            <Skeleton variant='text' width='80%' />
            <Skeleton variant='text' width='80%' />
            <Skeleton variant='text' width='80%' />
            <Skeleton variant='text' width='80%' />
          </Grid>
        </Grid>
      )}
      {productData && (
        <ProductImagePopup
          canShow={canShowProductPopup}
          imgUrl={productData.product_main_image_url}
          onClose={() => setCanShowProductPopup(false)}
        />
      )}
    </Container>
  );
};
