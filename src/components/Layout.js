import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;
const drawer = (
   <div>
      <Toolbar />
      <Typography
         sx={{ marginLeft: '20px' }}
         variant="div"
         noWrap
         component="div"
      >
         Restaurant
      </Typography>
      <Divider />
      <List sx={{ marginLeft: '20px' }}>
         {['Carta', 'Pedidos', 'Reservas', 'Mozos'].map((text, index) => (
            <ListItem button key={text}>
               <ListItemText primary={text} />
            </ListItem>
         ))}
      </List>
   </div>
);
const Layout = (props) => {
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
