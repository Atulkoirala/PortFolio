import {React , useState} from 'react';
import { Box, Grid, Drawer , Typography, styled, List ,ListItem ,createStyles, Card ,TextField, Link , Button ,TextareaAutosize } from '@mui/material';
import Course from './Courses'
import Skill from './Skill'
import Interest from './Interest'
import Language from './Language'
import Edu from './Work'
import Other from './Education'
import Article from './Article'
import Work from './Education'
// import {Offcanvas } from 'react-bootstrap';
import SideB from './SideBar'
import skillbg  from '../Media/skillbg.gif'
import '../Style/app.css'
import {motion , } from 'framer-motion'
import '../Style/app.css'




export default function Skills(props) {


  const [color, setcolor] = useState(null);


  const [opener1, setopener1] = useState(false);
  const [opener2, setopener2] = useState(false);
  const [opener3, setopener3] = useState(false);
  const [opener4, setopener4] = useState(false);
  const [opener5, setopener5] = useState(false);
  const [opener6, setopener6] = useState(false);
  const [opener7, setopener7] = useState(false);


  const handle1 = (color) => {
    setopener1(!opener1);
    setcolor(color);
    console.log(color);

    if ((opener2) || (opener3) || (opener4) || (opener5) || (opener6) || (opener7)){
      setopener2(false);
      setopener3(false);
      setopener4(false);
      setopener5(false);
      setopener6(false);
      setopener7(false);
    }
  }

  const handle2 = (color) => {
    setopener2(!opener2);
    setcolor(color);

    if ((opener1) || (opener3) || (opener4) || (opener5) || (opener6) || (opener7)){
      setopener1(false);
      setopener3(false);
      setopener4(false);
      setopener5(false);
      setopener6(false);
      setopener7(false);
    }
  }

  const handle3 = (color) => {
    setopener3(!opener3);
    setcolor(color);

    if ((opener1) || (opener2) || (opener4) || (opener5) || (opener6) || (opener7)){
      setopener1(false);
      setopener2(false);
      setopener4(false);
      setopener5(false);
      setopener6(false);
      setopener7(false);
    } 
  }

  const handle4 = (color) => {
    setopener4(!opener4);
    setcolor(color);

    if ((opener1) || (opener2) || (opener3) || (opener5) || (opener6) || (opener7)){
      setopener1(false);
      setopener2(false);
      setopener3(false);
      setopener5(false);
      setopener6(false);
      setopener7(false);
    }
  }

  const handle5 = (color) => {
    setopener5(!opener5);
    setcolor(color);

    if ((opener1) || (opener2) || (opener3) || (opener4) || (opener6) || (opener7)){
      setopener1(false);
      setopener2(false);
      setopener3(false);
      setopener4(false);
      setopener6(false);
      setopener7(false);
    }
  }

  const handle6 = (color) => {
    setopener6(!opener6);
    setcolor(color);

    if ((opener1) || (opener2) || (opener3) || (opener4) || (opener5) || (opener7)){
      setopener1(false);
      setopener2(false);
      setopener3(false);
      setopener4(false);
      setopener5(false);
      setopener7(false);
    }
  }

  const handle7 = (color) => {
    setopener7(!opener7);
    setcolor(color);

    if ((opener1) || (opener2) || (opener3) || (opener4) || (opener5) || (opener6)){
      setopener1(false);
      setopener2(false);
      setopener3(false);
      setopener4(false);
      setopener5(false);
      setopener6(false);
    }
  }

  const Bx = styled(Box)(({theme})=>({
    display: 'grid',
    width: 'fit-content',
    [theme.breakpoints.down('md')]:{
      display: 'block',
      width: '100%',
      marginLeft:'0.3rem',
      textAlign: 'center',
    }
  }))

  const Btn = styled(Button)(({ theme }) => ({
    [theme.breakpoints.only('sm')]: {
      marginRight: '7%',
    },
    [theme.breakpoints.only('xs')]: {
      marginRight: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      width:'75%',
      marginLeft: '5rem',
      marginBottom: '2rem',
    }
  }))


  return (

    <>
    {/* Whole Code */}

      <Box position='fixed' top={0} bottom={0} left={0} right={0} 
        component={motion.div}
        initial={{x: "100%",opacity:0.2}}
        animate={{x: 0,opacity:1,transition:{duration:0.7}}}
        exit={{x:"-100%",transition:{duration:1.3}}}
        height='100vh' width='100%'
        style={{      
            // background: 'radial-gradient(circle at center, #905ee6 -110% , black 45% ,orange 240%)',
            background:'black',
        }}>

          {/* Button And Cards */}

        <Grid container mt={7} spacing={3}>

          {/* Title Text */}

          <Typography component={motion.h1} width='100%'
            // style={{
            //   background: 'linear-gradient(to right bottom, green, orange)',
            //   WebkitBackgroundClip: 'text',
            //   WebkitTextFillColor: 'transparent',
            // }}
            sx={{
              fontSize: {
                xl:'2.4rem',lg:'2rem',md:'1.7rem',sm:'1.4rem',xs:'1.1rem'
              },
              // textDecoration:'underline',
              color:'wheat',
              fontFamily: 'Hubballi, cursive',
              cursor:'pointer',
              justifyContent:'center',
              textAlign: 'center',
              marginX:'auto',
              marginLeft:'1.7rem',
            }} whileHover={{color:'red'}}
          >My Information</Typography>

            {/* Button Group */}

          <Grid item lg={2} md={2} sm={12} xs={12}>
            <Bx>
                <Btn component={motion.div} whileHover={{ scale: 1.2 }} whileTap={{ opacity:0 }} color={color === "courses" ? "error" : "success"} size='small' sx={{marginTop:'0.19rem',fontSize:{lg:'1rem',md:'0.8rem',sm:'0.7rem',xs:'0.7rem'}}} onClick={()=>handle1("courses")} selected={setcolor === "courses"}  variant="contained">Courses</Btn>
                <Btn component={motion.div} whileHover={{ scale: 1.2 }} whileTap={{ opacity:0 }} color={color === "Skills" ? "error" : "success"} size='small' sx={{marginTop:'0.19rem',fontSize:{lg:'1rem',md:'0.8rem',sm:'0.7rem',xs:'0.7rem'}}} onClick={()=>handle2("Skills")} selected={setcolor === "Skills"}  variant="contained">Skills</Btn>
                <Btn component={motion.div} whileHover={{ scale: 1.2 }} whileTap={{ opacity:0 }} color={color === "Work" ? "error" : "success"} size='small' sx={{marginTop:'0.19rem',fontSize:{lg:'1rem',md:'0.8rem',sm:'0.7rem',xs:'0.7rem'}}} onClick={()=>handle3("Work")} selected={setcolor === "Work"}  variant="contained">Work</Btn>
                <Btn component={motion.div} whileHover={{ scale: 1.2 }} whileTap={{ opacity:0 }} color={color === "Interest" ? "error" : "success"} size='small' sx={{marginTop:'0.19rem',fontSize:{lg:'1rem',md:'0.8rem',sm:'0.7rem',xs:'0.7rem'}}} onClick={()=>handle4("Interest")} selected={setcolor === "Interest"}  variant="contained">Interest</Btn>
                <Btn component={motion.div} whileHover={{ scale: 1.2 }} whileTap={{ opacity:0 }} color={color === "Education" ? "error" : "success"} size='small' sx={{marginTop:'0.19rem',fontSize:{lg:'1rem',md:'0.8rem',sm:'0.7rem',xs:'0.7rem'}}} onClick={()=>handle5("Education")} selected={setcolor === "Education"}  variant="contained">Education</Btn>
                <Btn component={motion.div} whileHover={{ scale: 1.2 }} whileTap={{ opacity:0 }} color={color === "Language" ? "error" : "success"} size='small' sx={{marginTop:'0.19rem',fontSize:{lg:'1rem',md:'0.8rem',sm:'0.7rem',xs:'0.7rem'}}} onClick={()=>handle6("Language")} selected={setcolor === "Language"}  variant="contained">Language</Btn>
                <Btn component={motion.div} whileHover={{ scale: 1.2 }} whileTap={{ opacity:0 }} color={color === "Article" ? "error" : "success"} size='small' sx={{marginTop:'0.19rem',fontSize:{lg:'1rem',md:'0.8rem',sm:'0.7rem',xs:'0.7rem'}}} onClick={()=>handle7("Article")} selected={setcolor === "Article"}  variant="contained">Article</Btn>
            </Bx>
          </Grid>
            
              {/* Cards Group */}

            <Grid item sx={{
                textAlign: 'center',
                marginLeft: {
                  lg:'9rem',md:'7rem',sm:'2rem',xs:'2rem'
                },
                marginRight: {
                  sm:'2rem',xs:'2rem'
                },
                height:'50vh'
              }} lg={7} md={7} sm={12} xs={12}>
            <Box>
              {
                opener1 ? (
                  <Box>
                    <Course />
                  </Box>
                  )
                  :opener2? (
                    <Box>
                      <Skill b={props.a}/>
                    </Box>
                  )
                  :opener3? (
                    <Box>
                      <Edu/>
                    </Box>
                  )
                  :opener4? (
                    <Box>
                      <Interest/>     
                    </Box>
                  )
                  :opener5? (
                    <Box>
                      <Work/>
                    </Box>
                  )
                  :opener6? (
                    <Box>
                      <Language/>
                    </Box>
                  )
                  :opener7? (
                    <Box>
                      <Article/>
                    </Box>
                  )
                  : (
                    <Box>
                        <Box component='img' sx={{
                          width:'90%',
                          opacity:'0.9',
                        }} src={skillbg} className='imag1'>
                        </Box>
                    </Box>
                  )
              }              
            </Box>
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
