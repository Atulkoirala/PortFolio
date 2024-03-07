import React ,{useEffect , useState ,useRef } from 'react'
import { Box, Grid,CardContent ,CardActionArea,CardMedia, Typography, styled, List, ListItem, createStyles, Card, TextField, Link, Button, TextareaAutosize } from '@mui/material';
import {motion , useScroll,AnimatePresence } from 'framer-motion'
import errorimg from '../Media/error.png'; 


export default function Nopage() {
  return (
    <Box position='fixed'
        // top="50%" left="50%" right="50%"
        component={motion.div}

        initial={{x: "100%",opacity:0.2}}
        animate={{x: 0,opacity:1,transition:{duration:0.7}}}
        exit={{x:"-100%",transition:{duration:1.3}}}
    
        width='100%' height='100vh'
        style={{
          background:'black'
        }}>

        <Box p={2}>
          <Typography
            color="white"
            component={motion.h1}
            sx={{
              fontWeight: 'bold',
              fontFamily: 'san serif',
              fontSize: {
                xl: '3.5rem',
                lg: '3rem',
                md: '2.5rem',
                sm: '2rem',
                xs: '1.5rem',
              },
              justifyContent: 'center',
              textAlign: 'center',
              color:'#FFFDD0',
              opacity:'0.8',
              marginX: 'auto',
              marginTop:{
                xl:'none',lg:'none',md:'none',sm:'3rem',xs:'6rem'
              }
            }}
          >
            Oops!
          </Typography>

          <Box
            component={motion.img}
            src={errorimg}
            sx={{
              objectFit: 'cover',
              maxWidth: '75%',
              minWidth:'75%',
              maxHeight: '75%', 
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '1rem', // reduce margin top
            }}
          />

          <Typography
            color="white"
            component={motion.h1}
            sx={{
              fontWeight: 'bold',
              fontFamily: 'san serif',
              fontSize: {
                xl: '3.5rem',
                lg: '3rem',
                md: '2.5rem',
                sm: '2rem',
                xs: '1.5rem',
              },
              justifyContent: 'center',
              textAlign: 'center',
              marginX: 'auto',
              opacity:'0.8',
              color:'#FFFDD0',
              marginTop:{
                xl:'none',lg:'none',md:'none',sm:'1rem',xs:'1rem'
              }
            }}
          >
            Page Not Found
          </Typography>
        </Box>

        
    </Box>
  )
}
