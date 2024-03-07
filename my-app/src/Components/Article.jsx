import React ,{useEffect , useState ,useRef } from 'react'
import { Box, Grid,CardContent ,CardActionArea,CardMedia, Typography, styled, List, ListItem, createStyles, Card, TextField, Link, Button, TextareaAutosize } from '@mui/material';
import {motion , useScroll,AnimatePresence } from 'framer-motion'
import '../Style/app.css'
import axios from 'axios'
import VanillaTilt from 'vanilla-tilt';
import ModalArticle from './ModalArticle';




export default function Article() {

  const [post,setpost] = useState([]);
  const tiltRef = useRef(null);
  const ref = useRef(null);

  const [ids,setids] = useState(0);
  const [ti,setti] = useState("");
  const [na,setna] = useState("");
  const [im,setim] = useState("");
  const [abs,setabs] = useState("");
  const [lnk,setlnk] = useState("");
  const [da,setda] = useState("");
  const [modalOpens,setmodalOpens] = useState(false);
  const [mod,setmod] = useState(true);


  const close = (a,b,c,d,e,f,g) =>{
    // setids(a);
    // setti(b);
    // setna(c);
    // setim(d);
    // setabs(e);
    // setlnk(f);
    // setda(g);
    setmodalOpens(false);
  }
  const open = (a,b,c,d,e,f,g) =>{
    setids(a);
    setti(b);
    setna(c);
    setim(d);
    setabs(e);
    setlnk(f);
    setda(g);
    setmodalOpens(true);
  }

  const getload = async()=>{
      const response = await axios.get('https://atulk.onrender.com/media/article');
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

  return (
    <>
        <Box 
          component={motion.div}
          initial={{ scale: 0 }}
          animate={{ scale: 1,transition:{duration: 1.1 }}}
          exit={{scale:0,transition:{duration: 1.1}}}
          // whileHover={{boxShadow:'7px 12px 15px white'}}
          ref={tiltRef}
          p={2} sx={{borderRadius: '5rem 5rem 5rem 5rem',margin:'auto'}}
              style={{
                background: 'radial-gradient(circle, rgba(148,187,233,1) 6%, rgba(176,228,175,1) 23%, rgba(192,200,150,1) 56%, rgba(227,199,172,1) 83%, rgba(244,187,212,1) 95%)',
                height: '60vh',
                overflowY: 'auto',
                position: "fixed",
                margin: '0 auto',
                justifyContent: 'center',
                alignItems: 'center',
                width: '66%',
              }}>

                <Typography variant='h5' fontWeight='bold' my={2}
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
                    // opacity:1,
                    }}
                >Article</Typography>


      <ul ref={ref} style={{ padding: '10px 10px',display: 'flex', gap: '1rem',overflowX: 'auto',justifyContent:'center',alignItems:'center' }}>
          <Grid container spacing={5} sx={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
    
              {ascending.map((elem) => {
                return (
                  
                  // Skill Cards

                  <Grid key={elem.id} item sx={{ position: 'flex' }}>
                      <Card component={motion.button} onClick={()=>(modalOpens ? close(elem.ids,elem.Title,elem.Name,elem.Image,elem.Abstract,elem.Link,elem.Date) : open(elem.ids,elem.Title,elem.Name,elem.Image,elem.Abstract,elem.Link,elem.Date))} sx={{ width: 100, height: 80, borderRadius: '2rem', border: 'black 1px', backgroundColor: 'white', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Typography component={motion.p} p={1} sx={{ fontSize: '1rem',margin:'auto', textAlign: 'center', fontWeight: 'bolder',color:'white',padding:'1rem 1rem', justifyContent: 'center', alignItems: 'center',color:'black' }}>{elem.Name} </Typography>
                      <Card component={motion.button} whileHover={{ opacity: '0' }} sx={{ position: 'absolute',borderRadius: '2rem',border:'1.5px solid black', backgroundColor: 'black', border: 'black 1px' , top: 0, left: 0, bottom: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <CardContent component={motion.img} onClick={()=>(modalOpens ? close(elem.ids,elem.Title,elem.Name,elem.Image,elem.Abstract,elem.Link,elem.Date) : open(elem.ids,elem.Title,elem.Name,elem.Image,elem.Abstract,elem.Link,elem.Date))} sx={{ marginX: 'auto', marginTop:'0.5rem', justifyContent: 'center', alignItems: 'center', position: 'flex', width: { xl: '75%', lg: '65%', md: '65%', sm: '60%', xs: '60%' }}} src={elem.Image} />
                    </Card>
                  </Card>
                  </Grid>

              )})}
        
          </Grid>
      </ul>


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
            <ModalArticle id={ids} title={ti} name={na} imga={im} abstract={abs} link={lnk} date={da} handleClose={close}/>
          </motion.div>
      }
        </AnimatePresence>

    </>
  )
}
