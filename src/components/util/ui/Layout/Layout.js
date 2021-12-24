import { useContext } from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Icon from '@mui/material/Icon';

import { DrawerButton, LogoutButton } from './Layout.styles';
import { AuthenticationContext } from '../../../../services/auth/authentication.context';

const Layout = ({ children }) => {
   const { onLogout } = useContext(AuthenticationContext);
   console.log('hello')

   const Logout = () => {
      onLogout();
   };

   const drawerValues = [
      { icon: 'fastfood', name: 'Carta', path: '/' },
      { icon: 'receipt', name: 'Pedidos', path: '/invoices' },
      { icon: 'drafts', name: 'Reservas', path: '/reservations' },
      { icon: 'group', name: 'Mozos', path: '/waiters' },
      { icon: 'restaurantmenuicon', name: 'Mesas', path: '/tables' },
   ];
   const drawerWidth = 240;
   const drawer = (
      <div>
         <Toolbar />
         <Divider />
         <List
            sx={{
               display: 'flex',
               flexDirection: 'column',
               height: '70%',
               width: '100%',
               paddingLeft: '10px',
            }}
         >
            {drawerValues.map((dv, index) => (
               <DrawerButton
                  exact
                  activeStyle={{ backgroundColor: 'white', color: '#fc6600' }}
                  to={dv.path}
                  key={dv.icon}
               >
                  <Icon>{dv.icon}</Icon>
                  <ListItemText disableTypography primary={dv.name} />
               </DrawerButton>
            ))}
         </List>
      </div>
   );

   return (
      <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         <Box
            component="nav"
            sx={{
               width: { sm: drawerWidth },
               flexShrink: { sm: 0 },
               marginLeft: '10px',
            }}
            aria-label="mailbox folders"
         >
            <Drawer
               variant="permanent"
               sx={{
                  display: { xs: 'none', sm: 'block' },
                  '& .MuiDrawer-paper': {
                     boxSizing: 'border-box',
                     width: drawerWidth,
                     background:
                        'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(222,95,16,1) 32%)',
                     color: 'white',
                  },
               }}
               open
            >
               {drawer}
               <LogoutButton onClick={Logout}>Cerrar sesión</LogoutButton>
            </Drawer>
         </Box>
         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {children}
         </Box>
      </Box>
   );
};

export default Layout;
