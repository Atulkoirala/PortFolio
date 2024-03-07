import React ,{useEffect , useState ,useRef } from 'react'
import { Link } from "react-router-dom";
import { Tooltip,CardContent, Stack , CardActions , Box, Grid, Typography, styled, List ,ListItem ,createStyles, Card ,TextField,InputAdornment  , Button ,TextareaAutosize } from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import {motion , useScroll,AnimatePresence } from 'framer-motion'
import CancelIcon from '@mui/icons-material/Cancel';
import '../Style/style.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import ZoomOutMapOutlinedIcon from '@mui/icons-material/ZoomOutMapOutlined';
import StartOutlinedIcon from '@mui/icons-material/StartOutlined';


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
      y:"100vh",
      opacity:0,
      transition:{
          duration:1.5,
          type:"spring",
          damping:35,
          stiffness:100,
      },
  },
};



export default function modalKey({id,title,des,gitlink,imga,status,plg,handleClose}) {

  // const arr[] = plg.split(',');
  
  return (
    <>
    
    <AnimatePresence>
        {/* <Box component="img" className='moo' sx={{width:'100%',zIndex:'9999',backgroundSize:'cover',position:'absolute'}} src={imga}></Box> */}
            <Box
              component={motion.div}
                // my={3}
                sx={{zIndex:'1',border:'0.1px solid black',zIndex:'9999',opacity:'0.7'}}
                className="mopop"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropIn}
                onClick={(e)=> e.stopPropagation()}
            >
                <Button size="small" onClick={handleClose} sx={{color:'black',border:'1px solid black', fontFamily: 'Courier New, Courier, monospace',fontWeight:'bolder',backgroundColor:'crimson',borderRadius:'17px 17px 17px 17px',padding:'3px 3px',zIndex:'1'}}>
                        <CancelIcon />
                </Button>
                <Box>
                  <Typography sx={{fontWeight:'bolder',justifyContent:'center',textAlign:'center',fontSize:{xl:'2.7rem',lg:'2.3rem',md:'1.9rem',sm:'1.5rem',xs:'1.2rem'},textTransform:'capitalize',color: 'Black',}}>
                    {title}
                  </Typography>
                  <Typography component="p" p={1} sx={{ fontSize: {
                            lg: 'calc(0.4vw + 0.4vh + 0.9vmin)', md: 'calc(0.85vw + 0.5vh + 0.591vmin)', sm: 'calc(0.8vw + 0.65vh + 0.65vmin)', xs: 'calc(0.7vw + 0.6vh + 1.35vmin)'
                          },
                          marginX:{xl:'9%',lg:'7%',md:'5%',sm:'3%',xs:'1%'},
                          justifyContent: 'space-evenly',
                          textAlign:'center',
                          fontFamily: 'Hubballi, cursive',
                          fontFamily: 'Josefin Sans, sans-serif',
                          fontFamily: 'League Spartan, sans-serif',
                          fontFamily: 'Sansita Swashed, cursive',
                          }}>{des}</Typography>


                  <Box sx={{justifyContent:'center',textAlign:'center'}}>
                  {
                            plg.map((item)=>{
                              return(

                                <Typography p={1} sx={{
                                  fontSize: {
                                    lg:'1.1rem',md:'1rem',sm:'0.9rem',xs:'0.7rem'
                                  },
                                  justifyContent:'center',textAlign:'center',
                                  margin:'0.2rem',
                                  fontWeight:'bold',
                                  color:'white',
                                  display:'inline-block',
                                  backgroundColor: 'black',
                                  width: 'fit-content',
                                  borderRadius: '3rem 3rem 3rem 3rem',
                                }}
                                key={item}
                                >{item}</Typography>
                              )
                            })
                          }
                  </Box>

                          <Box sx={{justifyContent:'center',textAlign:'center',zIndex:'1'}}>
                              
                              <IconButton aria-label="add to favorites">
                                <FavoriteIcon  sx={{fontSize:"1.7rem",color:'black'}}/>
                              </IconButton>

                              <IconButton aria-label="uparrow">
                                <Link to={gitlink} target="_blank" rel="noopener noreferrer" sx={{cursor:"pointer"}}>
                                  <ArrowCircleUpOutlinedIcon sx={{fontSize:"1.7rem",color:'black',marginTop:'0.5rem'}}/>
                                </Link>
                              </IconButton>
                            </Box>
                </Box>

            </Box>
      </AnimatePresence>
    </>
  )
}
