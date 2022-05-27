import React, { useMemo } from 'react';
import { Container, Grid } from '@mui/material';
import { Item } from './Item';
import { ProductsSkeleton } from '../skeleton/ProductsSkeleton';
import { useAsyncCall } from '../../hooks/UseAsyncCall';
import { Item as ItemViewModel } from '../../models/ItemModel';

export const ItemListContainer: React.FC = (): JSX.Element => {
  const itemObj = [
    {
      id: 'mesa',
      title: 'Standing Desk',
      desc: 'Electric Standing Desk 60x30',
      imgUrl:
        'https://www.vari.com/dw/image/v2/BDFT_PRD/on/demandware.static/-/Sites-vari-master-catalog/default/dw57a7c897/images/large/FD-ESD6030/400803-reclaimed-wood/vari-electric-standing_400803_reclaimedwood_wfh_s.jpg?sw=800&sh=800g',
      discount: 30,
      price: 100000.3343,
    },
    {
      id: 'plant',
      title: 'Planta Decorativa',
      desc: 'Planta decorativa perfecta para oficinas',
      imgUrl:
        'https://d3ugyf2ht6aenh.cloudfront.net/stores/979/572/products/beige-cililindrica-301-4f426713b2508814f316322389940964-640-0.jpg',
      discount: 10,
      price: 1500,
    },
    {
      id: 'monitor',
      title: 'Monitor Curvo',
      desc: 'Monitor curvo perfecto para oficina',
      imgUrl:
        'https://ar-media.hptiendaenlinea.com/magefan_blog/Las_5_razones_principales_para_comprar_un_monitor_curvo_para_PC.png',
      discount: 0,
      price: 45000,
    },
    {
      id: 'silla',
      title: 'Silla Ergonomica',
      desc: 'Silla ergonomica ideal para cuidar tu espalda!',
      imgUrl:
        'https://digitador.cl/wp-content/uploads/2020/04/sillas-ergonomicas.jpg',
      discount: 25,
      price: 23000,
    },
  ];

  const loader = useAsyncCall(async (): Promise<ItemViewModel[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemObj);
      }, 5000);
    });
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
            <Grid item xs={2} sm={4} md={4} key={item.id}>
              <Item stock={5} initialStock={1} item={item} />
            </Grid>
          ))}
        </Grid>
      )}
      {!loader.completed && <ProductsSkeleton />}
    </Container>
  );
};
