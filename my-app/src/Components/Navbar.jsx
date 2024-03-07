import { Box ,Stack , AppBar, Typography , Link , styled , Button , Drawer , Menu , MenuItem , useMediaQuery , useTheme } from '@mui/material';
import {React , useState} from 'react';
import phot from "../Media/LOGO1.png"
import Home from './Home';
import About from './About';
import SideBar from './SideBar';
import DiamondIcon from '@mui/icons-material/Diamond';
import MenuIcon from '@mui/icons-material/Menu';
import Draw from './NavBarDrawer'
import {motion , } from 'framer-motion'
import '../Style/app.css'



// const Mainbar = styled(AppBar)(({theme})=>({
//   backgroundColor: 'transparent',
//   [theme.breakpoints.down('lg')]: {
//     width: '100%',
//     fontSize:'5px'
//   }  
// }))

const Atag = styled(Link)(({theme})=>({
  marginLeft: '2.7em',
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.3rem',
  padding: '7px 7px',
  fontWeight: '600',
  fontFamily: '(Josefin Sans) sans-serif',
  cursor:'pointer',
  '&:hover':{
    color: 'purple',
    backgroundColor: 'lightgreen',
    borderRadius: '5px 20px 5px',
  },
  [theme.breakpoints.only('md')]: {
    display: 'absolute',
    fontSize: '1rem',
    marginLeft: '2rem',
  },
  [theme.breakpoints.only('sm')]: {
    // display :'none'
    marginLeft: '1.3rem',
    fontSize: '0.7rem',
  },
}))

const Btn = styled(Button)(({ theme }) => ({
  display : 'absolute',
  [theme.breakpoints.up('sm')]: {
    display : 'none',
  },
}))


export default function NavBar() {

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.only('xs'))
  
  const [opener, setopener] = useState(false);
  
  // const ButtonClick = () => {
  //   setopener(true);
  // }


  return (
    <>
      <AppBar className="back"
        elevation={0} p={0}
        component={motion.div}
        initial={{y:'-100vh'}}
        animate={{ y: 5 }}
        transition={{duration:1.5}}
        sx={{
          width: {
            lg:'100%',md:'100%',sm:'100%',xs:'100%'
          },
          display: {
            lg:'inline',md:'inline',sm:'inline',xs:'block'
          },
          background:'transparent'
      }}
        // style={{
        //   background: 'linear-gradient(to left bottom, black, transparent)'
        // }}
      >
        <Stack direction='row' sx={{
                    display:'flex'
                  }}>
          {/* <Typography
            sx={{
              color: 'Red',
              marginLeft: {
                lg:6,md:4,sm:2,xs:'auto'
              },
              marginTop: 1.1,
              fontSize: {
                lg:'1.99rem',md:'1.5rem',sm:'1.2rem',xs:'1.3rem'
              },
              fontWeight:'bold'
            }} p={1} variant="h4">
              Portfolio
          </Typography> */}
          {/* <Box 
          sx={{
            // height:'auto',
            width:'13%',
            margin:{
              lg:'0px',md:'0px',sm:'0px',xs:'auto'
            },
            marginTop:{
              lg:'0.5rem',md:'0.5rem',sm:'0.5rem',xs:'auto'
            },
            marginLeft:{
              lg:'0.7rem',md:'0.7rem',sm:'0.7rem',xs:'auto'
            }
          }}
          component="img" src={phot}></Box> */}
            {
              isMatch ? (
                <Btn right={0} sx={{
                  marginTop: 'auto',marginRight: 'auto',color:'lightgreen'
                }}>
                <MenuIcon  sx={{fontSize:'1.9rem'}} onClick={() => setopener(true)} ></MenuIcon>
            </Btn>
            )
              
              : (
                  <Draw></Draw>   
            )}
          <Drawer anchor='top' open={opener} onClose={() => setopener(false)}>
              <Draw></Draw>
          </Drawer>
            
        </Stack>
      </AppBar>
    </>
  );
}
