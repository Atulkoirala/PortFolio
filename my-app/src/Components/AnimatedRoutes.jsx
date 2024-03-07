import React ,{useEffect , useState ,useRef ,useLocation } from 'react'
import { Box, Grid,CardContent ,CardActionArea,CardMedia, Typography, styled, List, ListItem, createStyles, Card, TextField, Link, Button, TextareaAutosize } from '@mui/material';
import {motion , useScroll,AnimatePresence } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Navbar from './Navbar'
import Key from './Key'
import Skill from './Skill'
import Skills from './Skills'
import Try from './Try'
import About from './About'
import Contact from './Contact'
import '../App.css'




function AnimatedRoutes() {
  const location = useLocation();

  return (
    <BrowserRouter>
        <AnimatePresence>

            <Routes key={location.pathname} location={location} exitBeforeEnter >
            {/* <Route path="/service" component={Service}/> */}
            <Route path="/about/" element={<About/>}/>
            <Route path="/contact/" element={<Contact/>}/>
            <Route path="/skills" element={<Skills/>}/> 
            <Route path="/key" element={<Key/>}/> 
            <Route path="/" element={<Home/>}/> 
            <Route path="/try" element={<Try/>}/>
            {/* <Redirect to="/" /> */}
            </Routes>

        </AnimatePresence>
    </BrowserRouter>
  );
}

export default AnimatedRoutes;