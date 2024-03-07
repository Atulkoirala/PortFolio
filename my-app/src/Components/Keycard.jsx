import React ,{useEffect , useState ,useRef } from 'react'
import { Link } from "react-router-dom";
import { Tooltip,CardContent, Stack , CardActions , Box, Grid, Typography, styled, List ,ListItem ,createStyles, Card ,TextField,InputAdornment  , Button ,TextareaAutosize } from '@mui/material';
// import phot from "../Media/images.png"
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import '../Style/app.css'
import '../Style/style.css'
import SideB from './SideBar'
import {motion , useScroll,AnimatePresence } from 'framer-motion'
import axios from 'axios'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import ZoomOutMapOutlinedIcon from '@mui/icons-material/ZoomOutMapOutlined';
import StartOutlinedIcon from '@mui/icons-material/StartOutlined';
import ModalKey from './modalKey';




export default function Keycard({id,idp,name,link,des,remark,imag,col,photo,lang}) {

  const [modalOpens,setmodalOpens] = useState(false);

  const [ids,setids] = useState(0);
  const [ti,setti] = useState("");
  const [de,setde] = useState("");
  const [gli,setgli] = useState("");
  const [im,setim] = useState("");
  const [lg,setlg] = useState([]);
  const [st,setst] = useState("");


  const close =(a,b,c,d,e,f,g)=>{
    // setids(a);
    // setti(b);
    // setde(c);
    // setgli(d);
    // setim(e);
    // setst(f);
    setmodalOpens(false);
  }

  const open =(a,b,c,d,e,f,g)=>{
    setids(a);
    setti(b);
    setde(c);
    setgli(d);
    setim(e);
    setst(f);
    const arr = g.toString().split(',');
    setlg(arr);
    setmodalOpens(true);
    console.log(arr);
  }
  
    const backgroundColor = col;


  return (
    <>
      <Box component={motion.Card} key={id} style={{ backgroundColor }} whileHover={{boxShadow:'7px 7px 10px white'}} height={310}
          sx={{maxWidth: 300,marginX:'1rem',flex:'none',borderRadius:'15px 15px 15px 15px',border:'2px solid black',boxShadow:'7px 7px 10px black',marginTop:'2rem'}}>
        <Box>
            <Typography gutterBottom variant="h5" height={30} fontWeight='bold' sx={{marginY:'1rem',justifyContent:'center',textAlign:'center'}} component="div">
                {name}
            </Typography>
        </Box>
        <Tooltip title={remark} placement="top" interactive>
        <Box>
          <Box component="img" src={imag}
            sx={{
              float:'left',
              marginTop:{
                lg: '-7%', md: '-4.99%', sm: '-2.7%', xs: '-2.7%'
              },
              marginLeft:{
                lg: '4%', md: '4%', sm: '4%', xs: '4%'
              },
              position:'flex',
              width: {
                lg: '25%', md: '20%', sm: '18%', xs: '18%'
              },
              borderRadius:'7rem 7rem 7rem 7rem',
              fill:'yellow',
              backgroundClip: 'padding-box',
              objectFit: 'contain',
            }}
            style={{ backgroundColor }}
            ></Box>
              <Typography component="p" width='fit-content' fontWeight="bold" mx="auto" sx={{opacity:'0',color:'whitesmoke',backgroundColor:'transparent'}} >Completed</Typography>
        </Box>
        </Tooltip>
        <CardContent sx={{backgroundColor:"black",color:'wheat'}}>
            <Typography mt={1} height={120} variant="body2" color="white" sx={{overflowY:'auto',width:'100%'}}>
              {des}
            </Typography>
        </CardContent>
        <Box height={20} sx={{justifyContent:'center',justifyContent:'center',textAlign:'center',zIndex:'1'}}>
            
          <IconButton aria-label="add to favorites">
            <FavoriteIcon  sx={{fontSize:"1.7rem",color:'black'}}/>
          </IconButton>
  
          <IconButton aria-label="sidearrow" mt={2} onClick={()=>(modalOpens ? close(idp,name,des,link,photo,remark,lang) : open(idp,name,des,link,photo,remark,lang))}>
            <ZoomOutMapOutlinedIcon sx={{fontSize:"1.7rem",color:'black'}}/>
          </IconButton>
  
          <IconButton aria-label="uparrow">
            <Link to={link} target="_blank" rel="noopener noreferrer" sx={{cursor:"pointer"}}>
              <ArrowCircleUpOutlinedIcon sx={{fontSize:"1.7rem",color:'black',marginTop:'0.5rem'}}/>
            </Link>
          </IconButton>
        </Box>
      </Box>



      <AnimatePresence>
      {
        modalOpens &&
          <motion.div 
          className="pop"
          initial={{
            y:"100vh",
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
        sx={{backgroundColor:'black',zIndex:'999'}}
          >
          <ModalKey id={ids} title={ti} des={de} gitlink={gli} imga={im} status={st} plg={lang} handleClose={close}/>
          </motion.div>
      }
      </AnimatePresence>

    </>
  )
}
