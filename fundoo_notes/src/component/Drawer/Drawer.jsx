import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {connect} from 'react-redux'

const drawerWidth = 240;

const openedMixin = (theme) => ({
//   width: drawerWidth,
  width: 170,
  marginTop:76,
  border:'none',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop:76,
    border:'none',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

 function DrawerFun(props) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const selectionOption = (choice) =>{
    props.listenToDrawer(choice)
    props.dispatch({
        type:`${choice}`
    })
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={props.drawerToggle}>
        <List>
            <ListItem onClick={()=>selectionOption('Notes')} sx={{ display: 'flex' , cursor:'pointer'}}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent:'center',
                  }}
                >
                <LightbulbOutlinedIcon sx={{marginRight:'1.8rem'}}/>
                </ListItemIcon>
                <ListItemText primary='Notes'  />
            </ListItem>
            <ListItem onClick={()=>selectionOption('Remainder')}  sx={{ display: 'flex' , cursor:'pointer'}}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent:'center',
                  }}
                >
                <NotificationsOutlinedIcon sx={{marginRight:'1.8rem'}}/>
                </ListItemIcon>
                <ListItemText primary='Remainder'  />
            </ListItem>
            <ListItem onClick={()=>selectionOption('Edit')} sx={{ display: 'flex' , cursor:'pointer'}}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent:'center',
                  }}
                >
                <EditOutlinedIcon sx={{marginRight:'1.8rem'}}/>
                
                </ListItemIcon>
                <ListItemText primary='Edit'  />
            </ListItem>
            <ListItem onClick={()=>selectionOption('Archive')} sx={{ display: 'flex' , cursor:'pointer'}}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent:'center',
                  }}
                >
                <ArchiveOutlinedIcon sx={{marginRight:'1.8rem'}}/>
                </ListItemIcon>
                <ListItemText primary='Archive'  />
            </ListItem>
            <ListItem onClick={()=>selectionOption('Trash')} sx={{ display: 'flex' , cursor:'pointer'}}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent:'center',
                  }}
                >
                <DeleteOutlineOutlinedIcon  sx={{marginRight:'1.8rem'}}/>
                </ListItemIcon>
                <ListItemText sx={{fontweight:'bold'}} primary='Trash '  />
            </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default connect()(DrawerFun)
