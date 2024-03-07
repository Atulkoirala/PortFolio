import React ,{useEffect , useState ,useRef } from 'react'
import { Box, Grid,CardContent,Paper ,CardActionArea,CardMedia, Typography, styled, List, ListItem, createStyles, Card, TextField, Link, Button, TextareaAutosize } from '@mui/material';
import {motion , useScroll,AnimatePresence } from 'framer-motion'
import phot from "../Media/Port.jpg"
import '../Style/app.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FlagIcon from '@mui/icons-material/Flag';
import SideB from './SideBar'
import resumePDF from '../Media/Resume.pdf';
import CVPDF from '../Media/CV.pdf';

// import Navbar from './Navbar'

// import { Image } from '@mui/icons-material';
// import img from "../Video/bgabout.jpg"


// const useStyles = makeStyles((theme) => ({
//   imag: {
//     borderRadius:'5.2rem 5.2rem 5.2rem 5.2rem',
//   }
// }))



export default function About() {

  const [time, setTime] = useState(new Date());
  const [msg, setmsg] = useState("");

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleDownload1 = () => {
    const link = document.createElement('a');
    link.href = CVPDF;
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) {
      // setmsg("Good morning");
      return 'Good morning';
    } else if (hour >= 12 && hour < 18) {
      // setmsg("Good afternoon");
      return 'Good afternoon';
    } else {
      // setmsg("Good evening");
      return 'Good evening';
    }
  };

  return (
    <>
    {/* <Navbar/> */}
      
      <Box position='fixed'
        top={0} bottom={0} left={0} right={0}
        component={motion.div}


        initial={{x: "100%",opacity:0.2}}
        animate={{x: 0,opacity:1,transition:{duration:0.7}}}
        exit={{x:"-100%",transition:{duration:1.3}}}
      
        width='100%' height='100vh'
        style={{
          // background : 'radial-gradient(circle at center, #58a0c3 -60% , black 40% ,darkgreen 220%)',
          background:'black'
          }}>
            
            <Typography component={motion.h1} width='100%' mx={5} mb={1} mt={2.3}
              sx={{
                fontSize: {
                  xl:'2.3rem',lg:'2rem',md:'1.7rem',sm:'1.4rem',xs:'1.1rem'
                },
                color:'wheat',
                textAlign: 'center',
                // textDecoration:'underline',
                fontFamily: 'Hubballi, cursive',
                // marginBottom:'3rem',
                cursor:'pointer'
              }}
              whileHover={{color:'red'}}
            >About Myself</Typography>

        {/* Image and Details */}
        <Grid container px={4} mb={5} spacing={3}>
          <Grid item lg={4} md={4} sm={4} xs={12}
            sx={{
              height: {
                lg:'100%',md:'100%',sm:'100%',xs:'70%'
              },
              width: {
                lg:'95%',md:'95%',sm:'95%',xs:'65%'
              },
            }}>

            <Grid container>

        {/* Image */}

              <Grid item lg={12} md={12} sm={12} xs={6}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginY: 0.3,
                }}>
                <Box
                  component={motion.img}
                  whileHover={{ scale:1.01 }}
                  src={phot}
                  // marginY={1.7}
                  // margin="a"
                  sx={{
                    borderRadius: '3.5rem 3.5rem 3.5rem 3.5rem',
                    width: '50%',
                    align: {
                      lg:'none',md:'none',sm:'none',xs:'left'
                    },
                    float: {
                      lg:'none',md:'none',sm:'none',xs:'left'
                    },
                    margin:'0 auto'
                  }}>
                </Box>

              </Grid>

        {/* Details */}

              <Grid item lg={12} md={12} sm={12} xs={6}>
                <Box color='white' 
                  sx={{
                    width: {
                      xl:'125%',lg:'120%',md:'100%',sm:'100%',xs:'90%'
                    },
                    margin: 'auto',
                    // justifyContent: 'center',
                    float: {
                      xs:'right'
                    },
                    marginTop:{lg:'1rem',md:'1rem',sm:'1rem'},
                  }}>

                    
                    <Typography
                       sx={{
                        display: "flex",
                        justifyContent: 'center',
                        fontSize:{
                          lg:'100%',md:'100%',sm:'85%',xs:"70%"
                        },
                      }}>
                      <span style={{marginRight:"0.5rem",marginTop:'1rem'}}><LocationOnIcon/></span>
                      <span style={{marginTop:'1rem'}}>Kathmandu, Nepal</span>
                    </Typography>


                    
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: 'center',
                        fontSize:{
                          lg:'100%',md:'100%',sm:'85%',xs:"70%"
                        },
                      }}>
                      <span style={{marginRight:"0.3rem",marginTop:'0.5rem'}}><CalendarMonthIcon /></span>
                      <span style={{marginTop:'0.8rem'}}>25th October 2000</span>
                    </Typography>


                  
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: 'center',
                        fontSize:{
                          lg:'100%',md:'100%',sm:'85%',xs:"70%"
                        },
                      }}>
                      <span style={{marginRight:"0.5rem",marginTop:'0.6rem',marginDown:'0.5rem'}}><FlagIcon/></span>
                      <span style={{marginTop:'0.8rem',marginDown:'0.8rem'}}>Nepali</span>
                  </Typography>
                  
                      {/* Resume Button */}
                    <Box sx={{display:'flex',justifyContent:'center'}}>
                    <Box
                        component={motion.div} 
                        variant="contained"
                        whileHover={{ scale: 1.17 }}
                        transition={{ type: "spring", stiffness: 350, damping: 10 }}
                        mx={2}                      
                  ><Button variant="contained" size="small" onClick={handleDownload}
                        sx={{
                          backgroundColor:'red',  
                          padding:{
                            xl:'0.7rem 0.78rem',lg:'0.6rem 0.68rem',md:'0.5rem 0.5rem',sm:'0.49rem 0.49rem',xs:'0.3rem 0.4rem',
                          },
                          fontSize:{
                            xl:"1.2rem",lg:'1rem',
                          },
                          color: 'black',
                          fontWeight:'bolder',
                          margin: 'auto',
                          marginTop:'0.5rem',
                          alignItem: 'center',
                          borderRadius:'14px 14px 14px 14px',
                          display:'flex',
                          textTransform:'none'
                        }}
                  >Resume</Button></Box>
                  <Box
                        component={motion.div} 
                        variant="contained"
                        whileHover={{ scale: 1.17 }}
                        transition={{ type: "spring", stiffness: 350, damping: 10 }}
                        mx={2}                    
                  ><Button variant="contained" size="small" onClick={handleDownload1}
                        sx={{
                          backgroundColor:'green',  
                          padding:{
                            xl:'0.7rem 0.78rem',lg:'0.6rem 0.68rem',md:'0.5rem 0.5rem',sm:'0.49rem 0.49rem',xs:'0.3rem 0.4rem',
                          },
                          fontSize:{
                            xl:"1.2rem",lg:'1rem',
                          },
                          color: 'white',
                          margin: 'auto',
                          marginTop:'0.5rem',
                          alignItem: 'center',
                          borderRadius:'14px 14px 14px 14px',
                          display:'flex',
                          textTransform:'none'
                        }}
                  >CV</Button></Box>
                    </Box>

              </Box>
              </Grid>
            </Grid>
          </Grid>

        {/* Paragraph */}

          <Grid item lg={8} md={8} sm={8} height='100%'>
          <Paper
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <Typography
        component={motion.h1}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6 }}
        sx={{
          padding: { lg: '1.5rem' },
          textAlign: 'justify',
          fontSize: {
            xs: 'calc(0.48vw + 1.2vh + 1.07vmin)',
            sm: 'calc(0.85vw + 0.75vh + 1.3vmin)',
            md: 'calc(0.95vw + 0.9vh + 1.55vmin)',
            lg: 'calc(0.89vw + 0.9vh + 1.6vmin)',
          },
          color: 'rgba(255, 0, 0, 0.777)',
          margin: '0 auto',
          justifyContent: 'space-evenly',
          fontFamily: 'Sansita Swashed, cursive',
        }}
      >
        <span
          style={{
            color: 'wheat',
            fontFamily:
              'Montserrat, sans-serif, Raleway, sans-serif, Playfair Display, serif, Cormorant Garamond, serif, Amatic SC, cursive',
          }}
        >
          <span style={{ color: 'green' }}>{getGreeting()},</span> Myself Atul Koirala
        </span>
        <br />
        <span style={{ fontStyle: 'oblique' }}>
          "I am a results-driven software engineer with exceptional time management skills and a
          strong work ethic. With a proven track record of delivering high-quality products on time
          and within budget, I thrive in fast-paced environments. As a creative problem solver, I
          leverage my deep technical expertise to develop effective solutions. I am an excellent
          communicator and team player, committed to continuous improvement and making valuable
          contributions to your organization."
        </span>
      </Typography>
    </Paper>
          </Grid>
          </Grid>
        

        {/* SideBar */}
          {/* <Box left={1} position='absolute' top={1} component={motion.div}
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{
            delay: 1.3,duration:2.5
          }}
          sx={{
          borderRadius: '25px 25px 25px 35px',
          padding: { lg: '0px 0px', md: '0px 0px', sm: '0px 0px', xs: '0px 0px' },
        }}
          style={{
            // background:'linear-gradient(to right bottom, #e89654,#D70040)'
          }}
        >
          <Link>
            <SideB/>
          </Link>
        </Box> */}

      </Box>
    </>
  );
}
