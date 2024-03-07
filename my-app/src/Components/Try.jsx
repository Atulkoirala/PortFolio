import React ,{useEffect , useState } from 'react'
import { CardContent, Stack , CardActions , Box, Grid, Typography, styled, List ,ListItem ,createStyles, Card ,TextField,InputAdornment , Link , Button ,TextareaAutosize } from '@mui/material';
// import phot from "../Media/images.png"
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import '../Style/app.css'
import SideB from './SideBar'
import '../Style/app.css'
import {motion , useScroll ,AnimatePresence } from 'framer-motion'
import axios from 'axios'
import icon from '../Media/approve.svg'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import Popup from './Popup';
import Modal from './modalSkill'


export default function TemporaryDrawer() {

  const [modalOpens, setmodalOpens] = useState(false);

  // Function to handle click on the left button and show left box
  const handle = () => {
    setmodalOpens(true);
  };

  const handle1 = () => {
    setmodalOpens(false);
  };



  return (
    <div>
      {/* Button to show the left box */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save"
        onClick={modalOpens ? handle1 : handle}
      >
        Left
      </motion.button>

        <AnimatePresence>
      {
        modalOpens &&
          <Box component={motion.div}
          // className="pop"
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
            x:"100vh",
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
            <Box sx={{backgroundColor:'red',width:'50%',height:'50vh'}}>
              <Button onclick={handle1}>
                Hello
              </Button>
            </Box>
          </Box>
      }
        </AnimatePresence>
    </div>
  );
}