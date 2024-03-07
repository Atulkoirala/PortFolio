import React ,{useEffect , useState ,useRef } from 'react'
import { Box, Grid,CardContent ,CardActionArea,CardMedia, Typography, styled, List, ListItem, createStyles, Card, TextField, Link, Button, TextareaAutosize } from '@mui/material';
import {motion , useScroll,AnimatePresence } from 'framer-motion'
import '../Style/app.css'
import axios from 'axios'
import CancelIcon from '@mui/icons-material/Cancel';




const dropIn ={
  hidden:{
      y:"100vh",
      opacity:0,
  },
  visible:{
      y:"0",
      opacity:1,
      transition:{
          duration:1.5,
          type:"spring",
          damping:35,
          stiffness:100,
      },
  },
  exit:{
      y:"-100vh",
      opacity:0,
      transition:{
          duration:1.5,
          type:"spring",
          damping:35,
          stiffness:100,
      },
  },
};



export default function Carosel({handleClose}) {


  const [post, setpost] = useState([]);

  const getload = async () => {
    try {
      const response = await axios.get('https://atulk.onrender.com/media/carosel');
      console.log(response.data);
      console.log(post);
      setpost(response.data);
      console.log(post);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  useEffect(() => {
    getload();
  }, []);


  return (
    <>
      <AnimatePresence mode='wait'>
          <Box
           component={motion.div}
           my={3}
           sx={{height:'50%',zIndex:'1',border:'0.1px solid black',backgroundColor:'transparent'}}
           className="mods"
           variants={dropIn}
           initial="hidden"
           animate="visible"
           exit="exit"
           onClick={(e)=> e.stopPropagation()}>

            <Button size="small" onClick={handleClose} sx={{width:'100%',height:'100%',backgroundColor:'transparent',overflow:'hidden'}}>
                {
                  post.map((elem)=>{
                    return(
                      <Box key={elem.id}>
                        <Box
                          component='img'
                          width="100%"
                          height="100%"
                          sx={{position:'absolute',top:0,left:0,objectFit: 'cover'}}
                        src={elem.Image}
                        >
                        </Box>
                        <Typography 
                          sx={{
                              color:'white',
                              margin:'auto',
                              left:'0',
                              background:'rgba(179, 62, 62, 0.8)',
                              width:'100%',
                              position:'absolute',
                              bottom:'15%',
                              fontWeight:'bold',
                              fontFamily: 'Roboto Slab, serif',
                              fontSize:{
                                xl:'3.5rem',lg: '2.7rem', md: '2.2rem', sm: '1.7rem', xs: '1.4rem'
                              },
                              justifyContent:'center',
                              textAlign:'center',
                          }}>
                          {elem.Title}
                        </Typography>
                      </Box>
                    )
                  })
                }
                            <Typography component="h1" style={{fontSize:{xl:'2rem',lg:'1.8rem',md:'1.6rem',sm:'1.3rem',xs:'1.1rem'},fontWeight:'bolder',fontFamily:'Lato, sans-serif',display:'block',justifyContent:'center',alignItems:'center'}}>
                              <span style={{color:'#FF4136',display:'flex',justifyContent:'center',alignItems:'center'}}>Please wait while we load the page for you.</span>
                              <br></br>
                              <span style={{color:'#0074D9',display:'flex',justifyContent:'center',alignItems:'center'}}>Alternatively,</span>
                              <br></br>
                              <span style={{color:'#2ECC40',display:'flex',justifyContent:'center',alignItems:'center'}}>feel free to explore other tabs from the gif(top left).</span>
                            </Typography>
            </Button>
          </Box>
      </AnimatePresence>    
    </>
  )
}
