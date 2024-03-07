import React ,{useEffect , useState ,useRef } from 'react'
import { Tooltip,CardContent, Stack , CardActions , Box, Grid, Typography, styled, List ,ListItem ,createStyles, Card ,TextField,InputAdornment , Link , Button ,TextareaAutosize } from '@mui/material';
// import phot from "../Media/images.png"
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import SideB from './SideBar'
import '../Style/app.css'
import {motion , useScroll } from 'framer-motion'
import axios from 'axios'
import appr from '../Media/approve.svg'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Keycard from './Keycard';
import appr1 from '../Media/approve1.svg'

export default function Key() {


  const [post,setpost] = useState([]);
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const [hovered, setHovered] = useState(false);


  const getload = async()=>{
      const response = await axios.get('https://atulk.onrender.com/media/key');
      console.log(response.data);
      console.log(post);
      setpost(response.data);
      console.log(post);
  }

  const ascending = [...post].sort((a,b) => b.id - a.id);

  useEffect(()=>{
      getload();
  },[])





  return (
    <>
    {/* Whole Code */}
    <Box component={motion.div} top={0} bottom={0} left={0} right={0}
    
        initial={{x: "100%",opacity:0.2}}
        animate={{x: 0,opacity:1,transition:{duration:0.7}}}
        exit={{x:"-100%",transition:{duration:1.3}}}

        position='fixed' height='100vh' width='100%' marginRight={5}
        style={{      
            // background: 'radial-gradient(circle at center, #050717 -40% , #091f29 30% ,orange 290%)',
            background:'black',
        }}>

        {/* Title Text */}

        <Typography component={motion.h1} width='100%' mx={5} pt={3}
              // style={{
              //   background: 'linear-gradient(to right bottom, green, orange)',
              //   WebkitBackgroundClip: 'text',
              //   WebkitTextFillColor: 'transparent',
              // }}
              sx={{
                fontSize: {
                  xl:'2.3rem',lg:'2rem',md:'1.7rem',sm:'1.4rem',xs:'1.2rem'
                },
                color:'wheat',
                textAlign: 'center',
                // textDecoration:'underline',
                fontFamily: 'Hubballi, cursive',
                // marginBottom:'3rem',
                cursor:'pointer'
              }}
              whileHover={{color:'red'}}
            >My Projects</Typography>
        
        {/* Project Card Box */}


        <Box sx={{ overflowX: 'auto',overflowY: 'hidden', width: '100%',display:'flex',justifyContent:'center',alignItems:'center' }}>
          <ul ref={ref} direction="row" style={{padding: '20px 20px',marginY:'center',display:'flex',marginX:'2rem',alignItems:'center', overflowX:'scroll',overflowY:'hidden',height:'55vh'}}>

      {
        ascending.map((elem) => {
          const isCompleted = (elem.Status === "Completed");
          const imag = isCompleted ? appr : appr1;
          const col = isCompleted ? "green" : "orange";
            return (
              <Keycard
                key={elem.id}
                id={elem.id}
                idp={elem.ids}
                name={elem.Title}
                link={elem.Github_link}
                des={elem.Description}
                remark={elem.Status}
                lang={elem.language}
                imag={imag}
                photo={elem.Image}
                col = {col}
              />
            )
        }
      )}
          </ul>
      </Box>
      <Box component={motion.div} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <svg
              id="progress"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              style={{ transform: 'rotate(-90deg)' }}
            >
              <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicators"
                style={{ pathLength: scrollXProgress, overflowY:'hidden'}}
              />
            </svg>
          </Box>

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
          style={{}}>
        <Link>
      <SideB/>
        </Link>
      </Box> */}
    </Box>
    </>
  )
}