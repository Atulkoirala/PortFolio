import { motion, AnimatePresence } from "framer-motion";
import CancelIcon from '@mui/icons-material/Cancel';
import { Box, Grid,CardContent ,CardActionArea,CardMedia, Typography, styled, List, ListItem, createStyles, Card, TextField, Button, TextareaAutosize } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import { Link } from 'react-router-dom';
import phot from "../Media/Article.jpg"




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



const ModalArticle =({handleClose,title,name,imga,abstract,link,date}) =>{
return(
    <>
            <AnimatePresence>
                <Box component="img" className='moo' sx={{width:'100%',height:'100%',backgroundSize:'cover',position:'absolute'}} src={phot}></Box>
            <motion.Box
                my={3}
                sx={{width:'fit-content',height:'50vh'}}
                className="modart"
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
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Typography component="h1" sx={{fontWeight:'bolder',fontSize:{xl:'1.9rem',lg:'1.7rem',md:'1.5rem',sm:'1.3rem',xs:'1rem'},textTransform:'capitalize'}}>{title}</Typography>
                        <Typography component="p" p={1.5} sx={{ fontSize: {
                            xl: 'calc(0.39vw + 0.46vh + 0.7vmin)',lg: 'calc(0.4vw + 0.4vh + 0.9vmin)', md: 'calc(0.75vw + 0.5vh + 0.57vmin)', sm: 'calc(0.8vw + 0.65vh + 0.65vmin)', xs: 'calc(0.63vw + 0.49vh + 1.3vmin)'
                          },
                          justifyContent: 'space-evenly',
                          fontFamily: 'Hubballi, cursive',
                          fontFamily: 'Josefin Sans, sans-serif',
                          fontFamily: 'League Spartan, sans-serif',
                          fontFamily: 'Sansita Swashed, cursive',
                          }}>{abstract}</Typography>
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>

                        <Box display="block">
                            <Typography component="motion.p"
                            sx={{fontStyle:'italic',fontWeight:'bolder',fontSize:{xl:'1.2rem',lg:'1rem',md:'0.9rem',sm:'0.8rem',xs:'0.7rem'},float:'right'}}
                            >{date}</Typography>

                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon  sx={{cursor:"pointer",fontSize:"1.5rem",color:'black',marginRight:'0.7rem'}}/>
                            </IconButton>
                            <IconButton aria-label="uparrow">
                                <Link to={link} target="_blank" rel="noopener noreferrer" sx={{cursor:"pointer"}}>
                                    <ArrowCircleUpOutlinedIcon sx={{fontSize:"1.5rem",color:'black',marginTop:'0.3rem'}}/>
                                </Link>
                            </IconButton>
                        </Box>

                    </Grid>

                </Grid>


            </motion.Box>
            </AnimatePresence>
    </>
)
}
export default ModalArticle;