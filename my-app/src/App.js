import React, { useEffect, useState, useRef } from 'react';
import { Box, Grid,CardContent ,CardActionArea,CardMedia, Typography, styled, List, ListItem, createStyles, Card, TextField, Link, Button, TextareaAutosize } from '@mui/material';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router , Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Key from './Components/Key';
import Skill from './Components/Skill';
import Skills from './Components/Skills';
import Try from './Components/Try';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';
import SideB from './Components/SideBar'
import Nopage from './Components/Nopage'



function App() {

  const location = useLocation();
  const [item,setitem] = useState("down");
  const [mod,setmod] = useState();

  console.log("loc "+location);
  console.log("path loc "+location.pathname);

  const copy = location.pathname;
  const two = location.pathname;


  return (
    
    <AnimatePresence mode='wait'>

      <Box position='absolute' top={1} left={1} component={motion.div}
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{
            delay: 1.3,duration:2.5
          }}
          sx={{
          borderRadius: '25px 25px 25px 35px',
          padding: { lg: '0px 0px', md: '0px 0px', sm: '0px 0px', xs: '0px 0px' },
          zIndex:'1'
        }}
        >
          <Link>
            <SideB/>
          </Link>
      </Box>

          {/* <Navbar /> */}
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/key" element={<Key />} />
          <Route path="/skills" element={<Skills a={location.pathname} />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
          <Route path="/try" element={<Try />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;