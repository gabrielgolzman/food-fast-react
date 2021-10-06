import { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Icon from '@mui/material/Icon';

import { DrawerButton } from './Layout.styles';

const Layout = (props) => {
   const [selectedIndex, setSelectedIndex] = useState(0);
   const drawerValues = [
      { icon: 'fastfood', name: 'Carta' },
      { icon: 'receipt', name: 'Pedidos' },
      { icon: 'drafts', name: 'Reservas' },
      { icon: 'group', name: 'Mozos' },
      { icon: 'restaurantmenuicon', name: 'Mesas' },
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
                  autoFocus={selectedIndex === index}
                  disableFocusRipple
                  onClick={() => console.log(dv)}
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
            </Drawer>
         </Box>
         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {props.children}
         </Box>
      </Box>
   );
};

export default Layout;
