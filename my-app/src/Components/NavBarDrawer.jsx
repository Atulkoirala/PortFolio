import { Box ,Stack , AppBar, Typography  , Link , styled , Button , Drawer , Menu , MenuItem} from '@mui/material';
import { makeStyles } from '@mui/styles'
import {React , useState} from 'react';
import Home from './Home';
import About from './About';
import SideBar from './SideBar';
import DiamondIcon from '@mui/icons-material/Diamond';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import {motion , } from 'framer-motion'




const Atag = styled(NavLink)(({theme})=>({
    marginLeft: '2.7em',
    align:'center',
    // float:'left',
    left:0,
    display:'block',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem',
    padding: '7px 7px',
    fontWeight: '600',
    fontFamily: '(Josefin Sans) sans-serif',
    cursor: 'pointer',
    justifyContent:'center',
    margin:'auto',
    "&.active": {
      color: 'red',
    },
    '&:hover':{
      color: 'black',
      backgroundColor: 'lightgreen',
      borderRadius: '5px 20px 5px',
    },
    // marginTop:{
    //     lg:'0.4rem',md:'25rem',sm:'75%',xs:'80%'
    // }
    [theme.breakpoints.only('md')]: {
      fontSize: '0.9rem',
      margin:'auto',
    },
    [theme.breakpoints.only('sm')]: {
      margin:'auto',
      fontSize: '0.9rem',
    },
    [theme.breakpoints.only('xs')]: {
      margin:'auto',
      fontSize: '0.8rem',
    },
}))

const useStyles = makeStyles({
  root: {
    "&.active": {
      color:'red',
    },
  },
});
  
export default function DrawerNavBar() {
  const classes = useStyles();

  return (
    <>
      <Stack p={1}
        sx={{
                marginTop: {
                  lg:1,md:1,sm:1,xs:7
                },
                position: "fixed",
                backgroundColor: 'transparent',
                // float:'left',
                // left:0,
                margin:'auto',
              }}>
                      <Atag className={classes.root} to="/">
                            Home
                      </Atag>
                      <Atag to="/about">
                            About
                      </Atag>
                      <Atag to="/key">
                            Keystone
                      </Atag>
                      {/* <Atag to="gallery">
                            Gallery
                      </Atag> */}
                      <Atag to="/skills">
                            Skills
                      </Atag>
                      <Atag to="/contact">
                            Contact
                      </Atag> 
            </Stack>
    </>
  );
}
