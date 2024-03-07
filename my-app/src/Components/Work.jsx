import React, { useEffect, useState, useRef } from 'react'
import { Box, Grid, Container, Typography, styled, List, ListItem, createStyles, Card, TextField, Link, Button, TextareaAutosize } from '@mui/material';
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import '../Style/style.css'
// import leadership from '../Media/Skills/leadership.svg'
// import phot from "../Media/images.png"
import axios from 'axios'
// import ModalSkill from './modalSkill';
// import CancelIcon from '@mui/icons-material/Cancel';
import { makeStyles } from '@material-ui/core/styles';
import VanillaTilt from 'vanilla-tilt';




const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const useStyles = makeStyles((theme) => ({
  smallButton: {
    minWidth: 10,
    width: '7%',
    padding: '4px',
    fontSize: '0.75rem',
    position: 'absolute',
    top: { lg: '40%', md: '40%', sm: '45%', xs: '45%' },
    border: '0.19rem solid',
  },
}));

export default function Work() {


  const tiltRef = useRef(null);
  const classes = useStyles();

  const [num, setnum] = useState(0);
  const [post, setpost] = useState([]);


  const moment = require('moment');
  const mydate = new Date();
  const fdate = moment(mydate).format('YYYY-MM-DD');

  const getload = async () => {
    const response = await axios.get('https://atulk.onrender.com/media/work');
    console.log(response.data);
    console.log(post);
    setpost(response.data);
    console.log(post);
  }

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (direction) => {
    const dir = parseInt(direction);
    const len = post.length;
    const ans = num + dir;

    console.log("F "+dir);
    console.log("a "+ans);
    setnum(ans);

    if (ans === -1) {
      setnum(len-1);
      // console.log("left");
    }
    else if (ans === len) {
      setnum(0);
      // console.log("right");
    }
    else {
      // console.log("center");
    }


    // console.log(num);
    // console.log("L "+num);
  };

  const ascending = [...post].sort((a,b) => b.id - a.id);

  useEffect(()=>{
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 5,
        speed: 250,
        glare: true,
        "max-glare": 0.5,
      });
    }
    getload();
},[])



  return (
    <>
      <Box
        component={motion.div}

        initial={{ scale: 0 }}
        animate={{ scale: 1,transition:{duration: 1.1 }}}
        exit={{scale:0,transition:{duration: 1.1}}}
        
        p={2}
        ref={tiltRef}
        // whileHover={{boxShadow:'7px 12px 15px white',opacity:0.89}}
        sx={{
          borderRadius: '5rem 5rem 5rem 5rem',
        }}
        style={{
          background: 'radial-gradient(circle, rgba(148,187,233,1) 6%, rgba(176,228,175,1) 23%, rgba(192,200,150,1) 56%, rgba(227,199,172,1) 83%, rgba(244,187,212,1) 95%)',
          height: '60vh',
          overflowY: 'auto',
          position: "fixed",
          margin: '0 auto',
          justifyContent: 'center',
          alignItems: 'center',
          width: '66%',
        }}
      >
        <Typography variant='h5' fontWeight='bold' mb={2}
          style={{
            background: 'linear-gradient(to right bottom, black, red)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}

          sx={{
            fontSize: {
              lg: '2rem', md: '1.7rem', sm: '1.4rem', xs: '1.1rem'
            },
            textAlign: 'center',
            textDecoration: 'underline',
            fontFamily: 'Hubballi, cursive',
            fontFamily: 'Josefin Sans, sans-serif',
            fontFamily: 'League Spartan, sans-serif',
            fontFamily: 'Sansita Swashed, cursive',
          }}
        >
          Work Experience
        </Typography>
          <Container whileHover={{opacity:1}} sx={{ backgroundColor: 'white', width: '90%', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', border: '0.009px solid black', height: '47vh', padding: "20px 10px" }}>
            {
              ascending.map(() => {
                return (
                <AnimatePresence initial={false} >

                  <Box component={motion.div} sx={{ backgroundColor: 'white', height: "100%", width: "100%", position: 'absolute', top: 0, left: 0, right: 0,alignItems: "center",justifyContent: "center",display: "flex", }}
                    // style={{ backgroundColor: "red", width: "100%", height: "100%" }}
                    // custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);

                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                  >
                    <Grid container mx="10%" p={2} key={post[num].id}>
                        <Box marginX="auto" width="100%">
                          <Typography
                              sx={{
                                fontSize:{
                                  xl:'1.7rem',lg:'1.4rem',md:'1.2rem',sm:'1.1rem',xs:'0.9rem'
                                },
                                marginBottom:'3%',
                                fontWeight:'bold',
                                marginX:'auto',
                              }}
                            >{post[num].Company_Name}</Typography>
                          </Box>
                        {/* </Grid> */}
                        <Grid item xl={2} lg={2} md={2} sx={2} xs={3}>
                          <Box>
                            <Box
                              component="img"
                              src={post[num].img}
                              sx={{opacity:'1',
                                border:'1px solid black',
                                borderRadius: '37%',
                                marginTop:'7%',
                                width:{
                                  xl:'45%',lg:'50%',md:'60%',sm:'58%',xs:'80%'
                                },height:'90%',zIndex:'1'}}
                            ></Box>
                          </Box>
                          <Box marginLeft="50%">
                            <Box sx={{fontWeight:'bold',marginLeft:'-97%'}}>&bull;</Box>
                            <Box style={{ borderLeft: '1px solid black', height: '80px',margin:{xl:'auto',lg:'0.9rem',md:'0.8rem',sm:'0.7rem',xs:'50%'} }}></Box>
                            <Box sx={{fontWeight:'bold',marginLeft:'-97%'}}>&bull;</Box>
                          </Box>
                        </Grid>
                        <Grid item xl={4} lg={4} md={5} sx={5} xs={9}>
                          <Box>
                            <Typography component="p" sx={{fontWeight:'bold',float:'left',width:'100%',marginTop:'5%',fontSize:{xl:'1.2rem',lg:'1.1rem',md:'1rem',sm:'0.9rem',xs:'0.7rem'}}}>{post[num].Position}</Typography>
                            <Typography component="p" sx={{float:'left',width:'100%',marginTop:'3%',fontSize:{xl:'1rem',lg:'0.9rem',md:'0.8rem',sm:'0.75rem',xs:'0.6rem'}}}>{post[num].Address}</Typography>
                          </Box>
                          <Box sx={{marginTop:{xl:'30%',lg:'37%',md:'41%',sm:'37%',xs:'57%'}}}>
                            <Typography component="p" sx={{float:'left',width:'100%',marginTop:'5%',fontSize:{xl:'1rem',lg:'0.9rem',md:'0.8rem',sm:'0.75rem',xs:'0.57rem'}}}>{post[num].From} - {post[num].To}</Typography>
                            <Typography component="p" sx={{fontWeight:'bold',float:'left',width:'100%',marginTop:'3%',fontSize:{xl:'1rem',lg:'0.9rem',md:'0.8rem',sm:'0.75rem',xs:'0.6rem'}}}>{post[num].Job_Status}</Typography>
                          </Box>
                        </Grid>
                      </Grid>
                      </Box>
                      </AnimatePresence>
          )
                    })
                  }
                    <Box sx={{height: "100%" , position:'relative',top:'40%'}}>
                      <Button onClick={() =>  paginate(1)} variant="contained" sx={{ borderRadius:'0px 20px 20px 0px',  left: '0',zIndex:'1'}} className={classes.smallButton} size="small">{"‣"}</Button>
                      <Button onClick={() => paginate(-1)} variant="contained" sx={{ borderRadius:'20px 0px 0px 20px',right:'0',zIndex:'1'}} className={classes.smallButton}  size="small">{"‣"}</Button>
                    </Box>
        </Container>
    </Box >
    </>
  );
}



{/* <Box component={motion.div} whileHover={{ opacity:'0'}} sx={{backgroundColor:'blue',height:"100%",width:"100%",position:'absolute',top:0,left:0}}>
<Button sx={{position:'absolute',top:"40%",right:0,color:'white'}}>Two</Button>                  
<Button sx={{position:'absolute',top:"40%",left:0,color:'white'}}>Two</Button>
</Box>
<Box component={motion.div} whileHover={{ opacity:'0'}} sx={{backgroundColor:'green',height:"100%",width:"100%",position:'absolute',top:0,left:0}}>
<Button sx={{position:'absolute',top:"40%",right:0,color:'white'}}>Three</Button>                    
<Button sx={{position:'absolute',top:"40%",left:0,color:'white'}}>Three</Button>
</Box> */}