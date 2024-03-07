import React ,{useEffect , useState ,useRef } from 'react'
import { Box, Grid,CardContent ,CardActionArea,CardMedia, Typography, styled, List, ListItem, createStyles, Card, TextField, Link, Button, TextareaAutosize } from '@mui/material';
import {motion , useScroll,AnimatePresence } from 'framer-motion'
import CancelIcon from '@mui/icons-material/Cancel';
import '../Style/style.css'



const dropIn ={
    hidden:{
        y:"-100vh",
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


const ModalCourse=({id,title,des,cert,pdf,date,handleClose})=> {

    const moment = require('moment');
    const mydate = new Date(date);
    const fdate = moment(mydate).format('YYYY-MM-DD');
    // const fdate = moment(mydate).format('YYYY/MM/DD HH:mm:ss');

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdf;
        link.download = pdf;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };



  return (
    <>
        <AnimatePresence>
            {/* <Box component="img" className='moo' sx={{width:'100%',height:'100%',backgroundSize:'cover',position:'absolute',opacity:'0.7'}} src={cert}></Box> */}
            {/* <Box component="img" className='moo' sx={{width:'100%',height:'100%',backgroundSize:'cover',position:'absolute',Zindex:'-1'}} src={cert}></Box> */}
            <Box
                my={3}
                sx={{height:'50%',zIndex:'1',border:'0.1px solid black'}}
                className="mods"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e)=> e.stopPropagation()}
                key={id}
            >
                <Button size="large" onClick={handleClose} sx={{color:'black',border:'1px solid black',fontWeight:'bolder',backgroundColor:'crimson',borderRadius:'17px 17px 17px 17px',padding:'5px 5px'}}>
                        <CancelIcon />
                </Button>
                <Grid container p={2}sx={{marginY:{lg:'0.5rem',md:'0.4rem',sm:'0.3rem',xs:'0rem'}}} mx={5}>
                    <Grid sx={{height:{lg:'100%',md:'100%',sm:'100%',xs:'15%'},width:'100%',display:'block',justifyContent:'center',alignItems:'center',margin:'auto'}} item lg={6} md={5} sm={6} xs={12}>
                        <Typography sx={{float:'left',fontWeight:'bold',fontSize:{lg:'1rem',md:'1rem',sm:'1rem',xs:'0.9rem'}}}>Date Passed:{fdate}</Typography>
                        <Button sx={{float:{xs:'right'}}} onClick={handleDownload}>Download</Button>
                        <Box component="img" sx={{width:{lg:'80%',md:'100%',sm:'80%',xs:'0%'},justifyContent:'center',alignItems:'center',margin:'auto',borderRadius:'7px 7px 7px 7px'}} src={cert}></Box>
                    </Grid>
                    <Grid item lg={6} md={7} sm={6} xs={12}>
                        <Typography component="h1" sx={{fontWeight:'bolder',fontSize:{lg:'1.7rem',md:'1.7rem',sm:'1.6rem',xs:'1.5rem'},textTransform:'capitalize'}}>{title}</Typography>
                        <Typography component="p" p={1.5} 
                        sx={{ fontSize: {
                            lg: 'calc(0.75vw + 0.2vh + 0.5vmin)', md: 'calc(0.9vw + 0.2vh + 0.55vmin)', sm: 'calc(0.8vw + 0.5vh + 0.6vmin)', xs: 'calc(0.7vw + 0.6vh + 1.35vmin)'
                          },
                          justifyContent: 'space-evenly',
                          fontFamily: 'Hubballi, cursive',
                          fontFamily: 'Josefin Sans, sans-serif',
                          fontFamily: 'League Spartan, sans-serif',
                          fontFamily: 'Sansita Swashed, cursive',
                          }}>{des}</Typography>
                    </Grid>
                </Grid>
                {/* <Typography component="h2" bottom={17} position="fixed" sx={{fontStyle:'italic',fontWeight:'bolder',fontSize:{lg:'1.5rem',md:'1.4rem',sm:'1.3rem',xs:'1.2rem'}}}>"I possess strong sss skills."</Typography> */}
            </Box>
            </AnimatePresence>
    </>
  )
}
export default ModalCourse;