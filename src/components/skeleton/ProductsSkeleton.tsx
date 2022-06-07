import React from 'react';
import { Box, Grid, Skeleton } from '@mui/material';

export const ProductsSkeleton = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 1, sm: 8, md: 12 }}
    >
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          {/* <Item stock={5} initialStock={1} discount={30} price={400.3343} /> */}
          <Box sx={{ pt: 0.5 }}>
            <Skeleton variant='rectangular' width={345} height={200} />
            <Skeleton width={345} height='30px' />
            <Skeleton width='80%' />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
