import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  AccountBalanceWalletRounded,
  AccountCircleRounded,
  DiscountRounded,
  FavoriteRounded,
  FormatListBulletedRounded,
  HistoryRounded,
  HomeRounded,
  ReceiptRounded,
  ShoppingBasketRounded,
  StarRounded,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './navbar.scss';

export const NavbarMenu = () => {
  return (
    <>
      <List>
        <Link className='navbar-link' to='/'>
          <ListItem key={'inicio'} disablePadding>
            <ListItemButton>
              <ListItemIcon>{<HomeRounded />}</ListItemIcon>
              <ListItemText primary={'Inicio'} />
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem key={'miscompras'} disablePadding>
          <ListItemButton>
            <ListItemIcon>{<ShoppingBasketRounded />}</ListItemIcon>
            <ListItemText primary={'Mis Compras'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'favoritos'} disablePadding>
          <ListItemButton>
            <ListItemIcon>{<FavoriteRounded />}</ListItemIcon>
            <ListItemText primary={'Favoritos'} />
          </ListItemButton>
        </ListItem>
        <Link className='navbar-link' to='/deals'>
          <ListItem key={'ofertas'} disablePadding>
            <ListItemButton>
              <ListItemIcon>{<DiscountRounded />}</ListItemIcon>
              <ListItemText primary={'Ofertas'} />
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem key={'historial'} disablePadding>
          <ListItemButton>
            <ListItemIcon>{<HistoryRounded />}</ListItemIcon>
            <ListItemText primary={'Historial'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'micuenta'} disablePadding>
          <ListItemButton>
            <ListItemIcon>{<AccountCircleRounded />}</ListItemIcon>
            <ListItemText primary={'Mi cuenta'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'balance'} disablePadding>
          <ListItemButton>
            <ListItemIcon>{<AccountBalanceWalletRounded />}</ListItemIcon>
            <ListItemText primary={'Balance'} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List className='navbar-menu' disablePadding>
        <ListItem key='masvendido' disablePadding>
          <ListItemButton>
            <ListItemIcon>{<StarRounded />}</ListItemIcon>
            <ListItemText primary={'Mas Vendido'} />
          </ListItemButton>
        </ListItem>
        <ListItem key='categorias' disablePadding>
          <ListItemButton>
            <ListItemIcon>{<FormatListBulletedRounded />}</ListItemIcon>
            <ListItemText primary={'Categorias'} />
          </ListItemButton>
        </ListItem>
        <ListItem key='resumen' disablePadding>
          <ListItemButton>
            <ListItemIcon>{<ReceiptRounded />}</ListItemIcon>
            <ListItemText primary={'Resumen'} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};
