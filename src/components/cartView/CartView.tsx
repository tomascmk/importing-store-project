import { Box, Container, Grid, Tab, Tabs, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartList } from './CartList';
import { CartTotal } from './CartTotal';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const CartView = () => {
  const {
    cartItems,
    cartItemsNumber,
    cartSavedItemsNumber,
    cartSavedItems,
    onAddItemToCart,
    onAddSavedItem,
    onRemoveItemFromCart,
    onRemoveSavedItem,
  } = useContext(CartContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth='lg'>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
          >
            <Tab label={`Carrito (${cartItemsNumber})`} {...a11yProps(0)} />
            <Tab
              label={`Guardados (${cartSavedItemsNumber})`}
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <CartList
                items={cartItems}
                onItemSaved={onAddSavedItem}
                onRemoveItem={onRemoveItemFromCart}
              />
            </Grid>
            <Grid item xs={4}>
              <CartTotal />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CartList
                items={cartSavedItems}
                onAddItemToCart={onAddItemToCart}
                onRemoveItem={onRemoveSavedItem}
              />
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </Container>
  );
};
