import { motion, AnimatePresence } from "framer-motion";
import CancelIcon from '@mui/icons-material/Cancel';
import { Box, Grid,CardContent ,CardActionArea,CardMedia, Typography, styled, List, ListItem, createStyles, Card, TextField, Link, Button, TextareaAutosize } from '@mui/material';



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



const ModalSkill =({handleClose,title,des,simg,imga}) =>{
return(
    <>
            <AnimatePresence>
                <Box component="img" className='moo' sx={{width:'100%',height:'100%',backgroundSize:'cover',position:'absolute'}} src={imga}></Box>
            <motion.Box
                my={3}
                sx={{height:{lg:'50%'}}}
                className="mod"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e)=> e.stopPropagation()}
            >
                <Button size="small" onClick={handleClose} p={2} sx={{color:'black',border:'1px solid black',fontWeight:'bolder',backgroundColor:'crimson',borderRadius:'17px 17px 17px 17px'}}>
                        <CancelIcon />
                </Button>
                <Grid container sx={{marginY:{lg:'0.5rem',md:'0.4rem',sm:'0.3rem',xs:'0.1rem'}}} mx={5}>
                    <Grid sx={{height:{lg:'60%',md:'60%',sm:'25%',xs:'20%'},width:'20%',justifyContent:'center',alignItems:'center',margin:'auto'}} item lg={5} md={5} sm={12} xs={12}>
                        <Box  component="img" sx={{width:{lg:'50%',md:'50%',sm:'20%',xs:'25%'},height:'100%',justifyContent:'center',textAlign:'center',alignItems:'center',margin:'auto',borderRadius:'7px 7px 7px 7px'}} src={simg}></Box>
                    </Grid>
                    <Grid item lg={7} md={7} sm={12} xs={12}>
                        <Typography component="h1" sx={{fontWeight:'bolder',fontSize:{lg:'1.8rem',md:'1.7rem',sm:'1.6rem',xs:'1.2rem'},textTransform:'capitalize'}}>{title}</Typography>
                        <Typography component="p" p={1.5} sx={{ fontSize: {
                            lg: 'calc(0.4vw + 0.4vh + 0.9vmin)', md: 'calc(0.85vw + 0.5vh + 0.591vmin)', sm: 'calc(0.8vw + 0.65vh + 0.65vmin)', xs: 'calc(0.7vw + 0.6vh + 1.35vmin)'
                          },
                          justifyContent: 'space-evenly',
                          fontFamily: 'Hubballi, cursive',
                          fontFamily: 'Josefin Sans, sans-serif',
                          fontFamily: 'League Spartan, sans-serif',
                          fontFamily: 'Sansita Swashed, cursive',
                          }}>{des}</Typography>
                    </Grid>
                </Grid>
                <Typography component="motion.h2" bottom={17} sx={{fontStyle:'italic',fontWeight:'bolder',height:'fit-content',fontSize:{lg:'1.5rem',md:'1.4rem',sm:'1.3rem',xs:'1.2rem'}}}>"I possess strong {title} skills."</Typography>
            </motion.Box>
            </AnimatePresence>
    </>
)
}
export default ModalSkill;