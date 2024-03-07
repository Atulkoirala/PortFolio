import React ,{useEffect , useState ,useRef } from 'react'
import { Box, Grid,CardContent ,CardActionArea,CardMedia, Typography, styled, List, ListItem, createStyles, Card, TextField, Link, Button, TextareaAutosize } from '@mui/material';
import {motion , useScroll,AnimatePresence } from 'framer-motion'
import phot from "../Media/background.png"
import '../Style/app.css'
import '../Style/style.css'
import Move from './pointermove'
import Typical from 'react-typical'
// import MenuIcon from '@mui/icons-material/Menu';
// import SideB from './SideBar'
import Carosel from './Carosel';
// import one from '../Media/Bubble/1.gif'
import two from '../Media/bubble.png'
// import three from '../Media/Bubble/3.png'







export default function Home(props) {
  
  const item = [0,2,3,4,5];
  const randomIndex = Math.floor(Math.random() * item.length);
  const a = item[randomIndex];
  console.log(a);

  const [modal,setmodal] = useState(false);

  const [any,setany] = useState(true);

  let x,y;
  const inputRef = useRef(null);
  
  const handleMouseMove = (event) => {

    x = event.clientX;
    y = event.clientY;
    console.log("Cursor position:",x,y);
  };

  const close= ()=>{
    console.log("close "+modal);
    setmodal(false);
    console.log("close "+modal);

  }

  const open= ()=>{
    console.log("open "+modal);
    setmodal(true);
    console.log("open "+modal);
  }

  return (
    <>
       //Whole Box
        <Box position='fixed' key={item} top={0} bottom={0} left={0} right={0}
        component={motion.div}

        initial={{x: "100%",opacity:0.2}}
        animate={{x: 0,opacity:1,transition:{duration:0.7}}}
        exit={{x:"-100%",transition:{duration:1.3}}}


        width='100%' sx={{ backgroundColor: 'black'}}>

        //Background Image
      <Box>
            <Box component={motion.img}
            // initial={{
            //   scale:0,
            // }}
            // animate={{
            //   scale:1,
            // }}
            // transition={{duration:1.3}}
              className="himage" src={phot}>
            </Box>
            <div className="grad"></div>
      </Box>

        {/* //Cursor Bubble */}
          <Button onClick={()=>{modal ? close() : open()}}>
            <Move />
          </Button>


        {/* //Text Animation */}
      <Box position='absolute' left={1} bottom={70} >
        <Box>
        <motion.h1
          initial={{x:'-100vw'}}
          animate={{x:40,rotateZ:360}}
          transition={{
            delay: 1.3, type: 'spring', duration:1.5
          }}
          style={{
            background: 'linear-gradient(to right bottom, white , green)',
            // background: 'linear-gradient(to right bottom,#8F00FF, #FF0000)',
            // background: 'White',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Roboto Mono, Lucida Console, monospace',
            width:'fit-content',
            fontSize: {
              xl:'3.8rem',lg: '3.5rem', md: '2.8rem', sm: '2.4rem', xs: '2rem'
            }, 
            text:'center',
            marginLeft:{
              lg: '5rem', md: '2rem', sm: '1.9rem', xs: '0rem'
            },
            fontWeight:'bolder'
          }}
        >HeLLo I am</motion.h1>
        </Box><br></br>
        <Box>
        <Typography color='white' variant='h1' component={motion.h1}
          initial={{opacity:0}}
          animate={{opacity:1,x:100}}
          exit={{scale:1.1}}
          transition={{delay:0.8,duration:3}}
          style={{
            background: 'linear-gradient(to right bottom, Green , White)',
            // background: 'linear-gradient(to right bottom, #00FF00,#D70040)',
            // background: 'White',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor:'transparent'
          }}
          sx={{
            fontSize: {
              xl:'5rem',lg: '4rem', md: '3.2rem', sm: '2.5rem', xs: '2rem'
            },            
            fontFamily: 'Courier New, Courier, monospace',
            fontWeight: 'bold',
            text:'center',
            marginLeft:{
              lg: '4rem', md: '2rem', sm: '1.9rem', xs: '-0.8rem'
            },
            width:'fit-content',
            padding:'7px 7px',
          }}
        >
          <Typical
            loop={Infinity}
            wrapper="span"
            steps={[
              'Ethical Hacker', 4000,
              'Entrepreneur', 4000,
              'Programmer', 4000,
              'Web Developer', 4000
            ]}
          />
        </Typography>
        </Box>
      </Box>

        {/* //Bubbles */}
      <Box>
        <Box component={motion.img} position='absolute' className='bubb' bottom={-100} left='3%' width='5.8%'  src={two}
          // sx={{opacity:'0.5'}}
        ></Box>
        <Box component={motion.img} position='absolute' className='bubb' bottom={-311} left='19%' width='3%'  src={two}
          sx={{opacity:'0.7'}}
        ></Box>
        <Box component={motion.img} position='absolute' className='bubb' bottom={-360} left='37%' width='6%'  src={two}
          // sx={{opacity:'0.5'}}
        ></Box>
        <Box component={motion.img} position='absolute' className='bubb' bottom={-180} left='52%' width='4%'  src={two}
          // sx={{opacity:'0.5'}}
        ></Box>
        <Box component={motion.img} position='absolute' className='bubb' bottom={-50} left='65%' width='2.8%'  src={two}
          // sx={{opacity:'0.5'}}
        ></Box>
        <Box component={motion.img} position='absolute' className='bubb' bottom={-270} left='77%' width='5%'  src={two}
          // sx={{opacity:'0.5'}}
        ></Box>
        <Box component={motion.img} position='absolute' className='bubb' bottom={-70} left='88%' width='3%'  src={two}
          // sx={{opacity:'0.5'}}
        ></Box>
      </Box>

      {/* SideBar */}
      {/* <Box left={1} position='absolute' top={1} component={motion.div}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
          delay: 1.3,duration:2.5
        }}
        sx={{
        borderRadius: '25px 25px 25px 35px',
        padding: { lg: '0px 0px', md: '0px 0px', sm: '0px 0px', xs: '0px 0px' },
      }}
        style={{
          // background:'yellow'
        }}
      >
        <Link>
          <SideB/>
        </Link>
        </Box> */}

      {/* //Carosel */}
      <Box>

        {
          modal && 
          <Box component={motion.div} className="popup">
            <Carosel handleClose={close}></Carosel>
          </Box>
        }

      </Box>

        </Box>

    </>
  );
}
