import React ,{useEffect , useState ,useRef } from 'react'
import { Box, Grid,CardContent ,CardActionArea,CardMedia, Typography, styled, List, ListItem, createStyles, Card, TextField, Link, Button, TextareaAutosize } from '@mui/material';
import {motion , useScroll,AnimatePresence } from 'framer-motion'
import '../Style/app.css'
import '../Style/style.css'
// import leadership from '../Media/Skills/leadership.svg'
// import phot from "../Media/images.png"
import axios from 'axios'
import ModalSkill from './modalSkill';
import CancelIcon from '@mui/icons-material/Cancel';
import VanillaTilt from 'vanilla-tilt';




export default function Skill(props) {

  const tiltRef = useRef(null);
  const [post,setpost] = useState([]);
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const [ti,setti] = useState("");
  const [de,setde] = useState("");
  const [si,setsi] = useState("");
  const [im,setim] = useState("");
  const [ids,setids] = useState(0);
  const [modalOpens,setmodalOpens] = useState(false);
  const [mod,setmod] = useState(true);


  const close = (a,b,c,d,e) =>{
    // setti(a);
    // setde(b);
    // setsi(c);
    // setim(d);
    // setids(e);
    setmodalOpens(false);
  }
  const open = (a,b,c,d,e) =>{
    setti(a);
    setde(b);
    setsi(c);
    setim(d);
    setids(e);
    setmodalOpens(true);
  }

  const ascending = [...post].sort((a,b) => b.id - a.id);

  useEffect(() => {
    // apply the tilt effect to the container only
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 10,
        speed: 250,
        glare: true,
        'max-glare': 0.5,
      });
    }

    // fetch skill data from API
    const getload = async () => {
      try {
        const response = await fetch('https://atulk.onrender.com/media/skill');
        const data = await response.json();
        setpost(data);
      } catch (error) {
        console.log(error);
      }
    };

    getload();
  }, []);


  return (
    <>
    <AnimatePresence>
      <Box
          component={motion.div} key={props.b}
          initial={{ scale: 0 }}
          animate={{ scale: 1,transition:{duration: 1.1 }}}
          exit={{scale:0,transition:{duration: 1.1}}}
          
          ref={tiltRef}
          // whileHover={{boxShadow:'7px 12px 15px white'}}
        p={2} sx={{borderRadius: '5rem 5rem 5rem 5rem'}}
              style={{
                background: 'radial-gradient(circle, rgba(148,187,233,1) 6%, rgba(176,228,175,1) 23%, rgba(192,200,150,1) 56%, rgba(227,199,172,1) 83%, rgba(244,187,212,1) 95%)',
                height: '60vh',
                overflowY: 'auto',
                position: "fixed",
                margin:'0 auto',
                justifyContent:'center',
                alignItems:'center',
                width:'66%',
              }}
            >
            <Typography variant='h5' fontWeight='bold' mb={2}
                  style={{
                    background: 'linear-gradient(to right bottom, black, red)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    pathLength: 'scrollXProgress',
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
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicators"        
              >Skills
              </Typography>

      <ul ref={ref} whileHover={{opacity:1}} style={{ padding: '5px 5px',display: 'flex', gap: '0.4rem',overflowX: 'auto',justifyContent:'center',alignItems:'center' }}>
        <Grid container spacing={5} sx={{ display:'flex',justifyContent:'center',alignItems:'center' }}>
  
      {
        ascending.map((elem) => {
              return (
                
                // Skill Cards

                <Grid key={elem.id} item sx={{ display:'flex',justifyContent:'center',alignItems:'center' }}>
                  <Card component={motion.button} onClick={()=>(modalOpens ? close(elem.Title,elem.Description,elem.Svg_Image,elem.Image,elem.id) : open(elem.Title,elem.Description,elem.Svg_Image,elem.Image,elem.id))} 
                    sx={{ width: 100, height: 80, borderRadius: '2rem', backgroundColor: 'black', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    
                    <Typography component={motion.p} p={1} sx={{ fontSize: '1rem',margin:'auto', textAlign: 'center', fontWeight: 'bolder',color:'white',padding:'1rem 1rem', justifyContent: 'center', alignItems: 'center',maxWidth: '100%'}}>{elem.Title} </Typography>
                  <Card component={motion.button} onClick={()=>(modalOpens ? close(elem.Title,elem.Description,elem.Svg_Image,elem.Image,elem.id) : open(elem.Title,elem.Description,elem.Svg_Image,elem.Image,elem.id))}  whileHover={{ opacity: '0' }} 
                    sx={{ position: 'absolute',borderRadius: '2rem',border:'1.5px solid black', backgroundColor: 'white', top: 0, left: 0, bottom: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CardContent component={motion.img} sx={{ marginX: 'auto', marginTop:'0.5rem', justifyContent: 'center', alignItems: 'center', position: 'flex', width: { lg: '63%', md: '60%', sm: '60%', xs: '60%' }}} src={elem.Svg_Image} />
                  </Card>
                </Card>
              </Grid>

            )})
      }
        
              </Grid>
      </ul>

      </Box>
    </AnimatePresence>

    
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
          <ModalSkill id={ids} title={ti} des={de} simg={si} imga={im} handleClose={close}/>
          </motion.div>
      }
        </AnimatePresence>
    </>
  );
}




