import React, { useMemo } from 'react';
import { Container, Grid } from '@mui/material';
import { Item } from './Item';
import { ProductsSkeleton } from '../skeleton/ProductsSkeleton';
import { useAsyncCall } from '../../hooks/UseAsyncCall';
import { getTodayDeals } from '../../services/ProductServices';
import { ProductDocs } from '../../models/amazonModels/TodayDealsModels';
import { Dasboard } from '../../enums/Dashboard';

interface Properties {
  dashboard: Dasboard;
}

export const ItemListContainer: React.FC<Properties> = ({
  dashboard,
}): JSX.Element => {
  const loader = useAsyncCall(async (): Promise<ProductDocs[]> => {
    switch (dashboard) {
      case Dasboard.Deals:
        return await getTodayDeals();

      default:
        return await getTodayDeals();
    }
  }, []);

  const items = useMemo(
    () => (loader.completed ? loader.result : undefined),
    [loader]
  );

  return (
    <Container sx={{ marginTop: 13, marginBottom: 13 }}>
      {loader.completed && items && (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {items.map((item) => (
            <Grid item xs={2} sm={4} md={4} key={item.product_id}>
              <Item item={item} />
            </Grid>
          ))}
        </Grid>
      )}
      {!loader.completed && <ProductsSkeleton />}
    </Container>
  );
};
