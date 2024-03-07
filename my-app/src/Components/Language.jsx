import React ,{useEffect , useState ,useRef } from 'react'
import { Tooltip,CardContent, Stack , CardActions , Box, Grid, Typography, styled, List ,ListItem ,createStyles, Card ,TextField,InputAdornment , Link , Button ,TextareaAutosize } from '@mui/material';
import '../Style/app.css'
import {motion , useScroll } from 'framer-motion'
import axios from 'axios'
import VanillaTilt from 'vanilla-tilt';






export default function Language() {
  

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
      const response = await axios.get('https://atulk.onrender.com/media/language');
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


  // const lang = [
  //   { id : 1 , name : 'Nepali' },
  //   { id : 2 , name : 'English' },
  //   { id : 3 , name : 'Hindi' },
  //   { id : 4 , name : 'French' },
  // ]
  
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
                    }}
                >Language</Typography>
                        
            <Box>

            {
                    ascending.map((elem) => (
                      <Box sx={{
                        display: 'inline-block',
                        color: 'white',
                      }}
                      whileHover={{opacity:1}}
                      >
                        <Typography p={1} sx={{
                          fontSize: {
                            lg:'1.1rem',md:'1rem',sm:'0.9rem',xs:'0.7rem'
                          },
                          marginRight: '1.5rem',
                          marginLeft: '1.5rem',
                          marginBottom: '1.7rem',
                          backgroundColor: 'black',
                          width: 'fit-content',
                          borderRadius: '3rem 3rem 3rem 3rem',
                        }}
                          key={elem.id}>{elem.Title}</Typography>
                      </Box>
                  ))  
        }

            </Box>

        
        </Box>
    </>
  )
}
