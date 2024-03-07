import React ,{useEffect , useState ,useRef } from 'react'
import { Tooltip,CardContent, Stack , CardActions , Box, Grid, Typography, styled, List ,ListItem ,createStyles, Card ,TextField,InputAdornment , Link , Button ,TextareaAutosize } from '@mui/material';
import '../Style/app.css'
import {motion , useScroll } from 'framer-motion'
import axios from 'axios'
import VanillaTilt from 'vanilla-tilt';






export default function Interest() {


  const tiltRef = useRef(null);
  const [post,setpost] = useState([]);
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const [hovered, setHovered] = useState(false);


  const getload = async()=>{
      const response = await axios.get('https://atulk.onrender.com/media/intrest');
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

  // const interes = [
  //   { id : 1 , name : 'Cricket' },
  //   { id : 2 , name : 'Football' },
  //   { id : 3 , name : 'Learning languages' },
  //   { id : 4 , name : 'Art' },
  //   { id : 5 , name : 'Photography' },
  //   { id : 6 , name : 'Dancing' },
  //   { id : 7 , name : 'Travel' },
  //   { id : 8 , name : 'Listening to music' },
  //   { id : 9 , name : 'Playing Games' },
  //   { id : 10 , name : 'Swimming' },
  // ]


  return (
    <>
      <Box 
          // whileHover={{boxShadow:'7px 12px 15px white'}}
          ref={tiltRef}
          component={motion.div}
          initial={{ scale: 0 }}
          animate={{ scale: 1,transition:{duration: 1.1 }}}
          exit={{scale:0,transition:{duration: 1.1}}}
          
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
                Interest
              </Typography>
              
              <Grid container spacing={5} sx={{ display:'flex',justifyContent:'center',alignItems:'center' }}>
                {ascending.map((elem) => {
                  return (
                    <Grid key={elem.id} item whileHover={{opacity:1}} sx={{ position: 'flex',marginX:{xl:'1.8rem',lg:'1.5rem',md:'1.2rem',sm:'0.7rem',xs:'0.1rem'}}}>
                      <Card component={motion.button} sx={{ width: 100, height: 80, borderRadius: '2rem', backgroundColor: 'black', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography component={motion.p} p={1} sx={{ fontSize: '1rem',margin:'auto', textAlign: 'center', fontWeight: 'bolder',color:'white',padding:'1rem 1rem', justifyContent: 'center', alignItems: 'center' }}>{elem.Name} </Typography>
                      <Card component={motion.button}  whileHover={{ opacity: '0' }} sx={{ position: 'absolute',borderRadius: '2rem',border:'1.5px solid black', backgroundColor: 'white', top: 0, left: 0, bottom: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <CardContent component={motion.img} sx={{ marginX: 'auto', marginTop:'0.5rem', justifyContent: 'center', alignItems: 'center', position: 'flex', width: { lg: '63%', md: '60%', sm: '60%', xs: '60%' }}} src={elem.Svg_Image} />
                      </Card>
                    </Card>
                  </Grid>
              )})}
            </Grid>
            </Box>
    </>
  );
}
