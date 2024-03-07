import React ,{useEffect , useState ,useRef } from 'react'
import { Box, Grid,CardContent ,CardActionArea,CardMedia, Typography, styled, List, ListItem, createStyles, Card, TextField, Link, Button, TextareaAutosize } from '@mui/material';
import {motion , useScroll,AnimatePresence } from 'framer-motion'
import VanillaTilt from 'vanilla-tilt';
import '../Style/app.css'
import '../Style/style.css'
// import leadership from '../Media/Skills/leadership.svg'
// import phot from "../Media/images.png"
import axios from 'axios'
// import ModalSkill from './modalSkill';
// import CancelIcon from '@mui/icons-material/Cancel';
import ModalCourse from './ModalCourse';





export default function Courses() {

  const tiltRef = useRef(null);
  const [post,setpost] = useState([]);
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const [ti,setti] = useState("");
  const [de,setde] = useState("");
  const [ce,setce] = useState("");
  const [pd,setpd] = useState("");
  const [da,setda] = useState("");
  const [ids,setids] = useState(0);
  const [modalOpens,setmodalOpens] = useState(false);


  const close = (a,b,c,d,e,f) =>{

    setmodalOpens(false);
  }

  const open = (a,b,c,d,e,f) =>{
    setids(a);
    setti(b);
    setde(c);
    setce(d);
    setpd(e);
    setda(f);
    setmodalOpens(true);
  }

  const getload = async()=>{
      const response = await axios.get('https://atulk.onrender.com/media/courses');
      console.log(response.data);
      console.log(post);
      setpost(response.data);
      console.log(post);
  }

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

  // const cour = [
  //   { id : 1 , name : 'Data Structure And Algorithm' },
  //   { id : 2 , name : 'Object Oriented Programming' },
  //   { id : 3 , name : 'Database Management System' },
  //   { id : 4 , name : 'Operating System' },
  //   { id : 5 , name : 'Microprocessor and Interfacing' },
  //   { id : 6 , name : 'Internet Of Things' },
  //   { id : 7 , name : 'Internet Of Web Programming' },
  //   { id : 8 , name : 'Parallel Distributed Computing' },
  //   { id : 9 , name : 'Virtualization' },
  //   { id : 9 , name : 'Virtualization' },
  //   { id : 9 , name : 'Virtualization' },
  //   { id : 9 , name : 'Virtualization' },
  //   { id : 9 , name : 'Virtualization' },
  //   { id : 10 , name : 'Blockchain and Cryptocurrency Technologies' },
  //   { id : 10 , name : 'Blockchain and Cryptocurrency Technologies' },
  //   { id : 10 , name : 'Blockchain and Cryptocurrency Technologies' },
  //   { id : 10 , name : 'Blockchain and Cryptocurrency Technologies' },
  //   { id : 10 , name : 'Blockchain and Cryptocurrency Technologies' },
  // ]

  return (
    <>
        <Box
          className='boxes'
          component={motion.div}
          initial={{ scale: 0 }}
          animate={{ scale: 1,transition:{duration: 1.1 }}}
          exit={{scale:0,transition:{duration: 1.1}}}
          
          ref={tiltRef}
          p={2} sx={{borderRadius: '5rem 5rem 5rem 5rem',backdropFilter: 'blur(800px)'}}
          style={{
            background: 'radial-gradient(circle, rgba(148,187,233,1) 6%, rgba(176,228,175,1) 23%, rgba(192,200,150,1) 56%, rgba(227,199,172,1) 83%, rgba(244,187,212,1) 95%)',
            height: '60vh',
            overflowY: 'auto',
            position: "fixed",
            width:'66%',
          }}
          // whileHover={{boxShadow:'7px 12px 15px white',opacity:0.89}}
            >                
              <Typography variant='h5' fontWeight='bold' mb={2}
                  style={{
                    background: 'linear-gradient(to right bottom, black, red)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  
                  sx={{
                  fontSize: {
                    lg:'2rem',md:'1.7rem',sm:'1.4rem',xs:'1.1rem'
                  },
                  textAlign: 'center',
                  textDecoration:'underline',
                  fontFamily: 'Hubballi, cursive',
                  fontFamily: 'Josefin Sans, sans-serif',
                  fontFamily: 'League Spartan, sans-serif',
                  fontFamily: 'Sansita Swashed, cursive',
                }}
              >
                Courses
              </Typography>

              <Grid container spacing={5} sx={{ display:'flex',justifyContent:'center',alignItems:'center' }}>

              {
                  ascending.map((elem) => (
                    <Grid item
                      sx={{
                      display: 'inline-block',
                      margin:'0.5rem'
                    }} whileHover={{opacity:1}}
                    >
                    <Button sx={{
                      display: 'inline-block',
                      color: 'white',
                      fontStyle:'none',
                      backgroundColor: 'black',
                      fontWeight:'bold',
                      margin:'auto',
                      fontSize: {
                        lg:'1.1rem',md:'1rem',sm:'0.9rem',xs:'0.57rem'
                      },
                      justifyContent:'center',
                      textAlign:'center',
                      margin:'auto',
                      textTransform:'capitalize',
                      width: 'fit-content',
                      borderRadius: '3rem 0rem 3rem 0rem',
                      padding:'10px 17px',
                      border:'0.00009px solid black'
                    }}
                    key={elem.id}
                    whileHover={{backgroundColor: 'darkgreen',color: 'black',}}
                    onClick={()=>{modalOpens ? close(elem.id,elem.Title,elem.Description,elem.Certificate,elem.Pfd,elem.Date) : open(elem.id,elem.Title,elem.Description,elem.Certificate,elem.Pfd,elem.Date)}}
                    >
                      {elem.Title}
                    </Button>

                    </Grid>
                ))  
                }

              </Grid>

            </Box>
            <AnimatePresence>
            {
              modalOpens &&
              <motion.div 
                className="pop"
                    initial={{
                      y:"-100vh",
                      opacity:0,
                      }}
                    animate={{
                        y:"0",
                        opacity:1,
                        transition:{
                            duration:1.5,
                            type:"spring",
                            damping:35,
                            stiffness:100,
                        },
                    }}
                    exit={{
                      y:"100vh",
                      opacity:0,
                      transition:{
                          duration:1.5,
                          type:"spring",
                          damping:35,
                          stiffness:100,
                      },
                    }}
              >
                <ModalCourse id={ids} title={ti} des={de} cert={ce} pdf={pd} date={da} handleClose={close}/>
              </motion.div>
            }
            </AnimatePresence>

    </>
  );
}