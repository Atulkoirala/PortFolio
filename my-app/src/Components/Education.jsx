import React, { useEffect, useState, useRef } from 'react';
import { Tooltip, AppBar, TabPanel, Tab, Tabs, CardContent, Stack, CardActions, Box, Grid, Typography, styled, List, ListItem, createStyles, Card, TextField, InputAdornment, Link, Button, TextareaAutosize } from '@mui/material';
import '../Style/app.css';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import VanillaTilt from 'vanilla-tilt';




export default function Work() {
  const theme = useTheme();
  const tiltRef = useRef(null);
  const [post, setpost] = useState([]);
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const [hovered, setHovered] = useState(false);

  const getload = async () => {
    const response = await axios.get('https://atulk.onrender.com/media/edu');
    setpost(response.data);
  };

  const ascending = [...post].sort((a, b) => b.id - a.id);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 5,
        speed: 250,
        glare: true,
        'max-glare': 0.5,
      });
    }
    getload();
  }, []);

  const lang = [
    { id: 1, name: 'Nepali' },
    { id: 2, name: 'English' },
    { id: 3, name: 'Hindi' },
    { id: 4, name: 'French' },
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <Box
        component={motion.div}
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 1.1 } }}
        exit={{ scale: 0, transition: { duration: 1.1 } }}
        // whileHover={{ boxShadow: '7px 12px 15px white'}}
        ref={tiltRef}
        p={2}
        sx={{ borderRadius: '5rem 5rem 5rem 5rem', margin: 'auto' }}
        style={{
          background: 'radial-gradient(circle, rgba(148,187,233,1) 6%, rgba(176,228,175,1) 23%, rgba(192,200,150,1) 56%, rgba(227,199,172,1) 83%, rgba(244,187,212,1) 95%)',
          height: '60vh',
          position: 'fixed',
          margin: '0 auto',
          justifyContent: 'center',
          alignItems: 'center',
          width: '66%',
        }}
      >
        <Typography
          variant='h5'
          fontWeight='bold'
          style={{
            background: 'linear-gradient(to right bottom, black, red)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          sx={{
            fontSize: {
              lg: '2rem',
              md: '1.7rem',
              sm: '1.4rem',
              xs: '1.1rem',
            },
            textAlign: 'center',
            textDecoration: 'underline',
            fontFamily: 'Hubballi, cursive',
            fontFamily: 'Josefin Sans, sans-serif',
            fontFamily: 'League Spartan, sans-serif',
            fontFamily: 'Sansita Swashed, cursive',
          }}
        >
          Education
        </Typography>

        <Box my={2} px={2} whileHover={{ opacity: 1 }}>
          <Box sx={{ background: 'rgba(255, 255, 255, 0.9)', height: '47vh', overflow: 'hidden', width: '100%', borderRadius: '5%' }}>
            <Tabs value={value} onChange={handleChange} variant='scrollable' scrollButtons='auto' aria-label='scrollable auto tabs example'>
              {ascending.map((elem) => {
                return <Tab label={elem.Title} key={elem.id} sx={{ width: '25%', fontSize: { xl: '1rem', lg: '0.8rem', md: '0.77rem', sm: '0.66rem', xs: '0.55rem' } }} />;
              })}
            </Tabs>

            <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value} onChangeIndex={handleChangeIndex}>
              {ascending.map((elem) => {
                return (
                  <AnimatePresence initial={false} value={value} index={elem.ids} key={elem.id} dir={theme.direction} sx={{ overflow: 'hidden' }}>
                    <Box sx={{ position: 'relative', margin: 'auto', justifyContent: 'center',backgroundColor:'white',alignItems: 'center', left: '0%',right:'0%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                      <Box sx={{ width: '100%', opacity: '0.7', position: 'absolute'}}>
                        <motion.img src={elem.img} width={100} height={100} sx={{position: 'absolute',top:0,left:0}}/>
                      </Box>
                      <Box sx={{position: 'relative',margin:'auto',left: '0%',right:'0%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <Box>
                          <Typography variant='h5' sx={{ fontSize: { xl: '3rem', lg: '3.3rem', md: '2.7rem', sm: '2.2rem', xs: '1.7rem' }, fontWeight: 'bold', color: 'black' }}>
                            {elem.Title}
                          </Typography>
                          <Typography variant='h5' sx={{ fontSize: { xl: '1.89rem', lg: '2rem', md: '1.7rem', sm: '1.5rem', xs: '1.1rem' }, fontWeight: 'bold', color: 'black' }}>
                            {elem.College_Name}
                          </Typography>
                        </Box>
                        <Box p={1}>
                          <Typography variant='p' sx={{ fontSize: { xl: '1.25rem', lg: '1.1rem', md: '1rem', sm: '0.89rem', xs: '0.77rem' }, color: 'black' }}>
                            {elem.Address}
                          </Typography>
                          <br />
                          <Typography variant='p' sx={{ fontSize: { xl: '1.25rem', lg: '1.1rem', md: '1rem', sm: '0.89rem', xs: '0.77rem' }, color: 'black' }}>
                            {elem.From} – {elem.Status} | {elem.Result} CGPA
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </AnimatePresence>

                );
              })}
            </SwipeableViews>
          </Box>
        </Box>
      </Box>
    </>
  );
}
