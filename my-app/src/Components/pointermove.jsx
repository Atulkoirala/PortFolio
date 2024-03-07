import React, { useState, useRef, useEffect } from "react";
import "../Style/app.css";
import { motion } from "framer-motion";
import { Box ,Typography, styled , Button, Link} from '@mui/material';
// import bubble from "../Media/bub.png"
import bubble from '../Media/bubble.png'




export default function Apps() {

  const [point, setPoint] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const element = ref.current;
      if (!element) return;

      const x = event.clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = event.clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [ref]);

  const { x, y } = point;

  return (
    <>
        <Box position='fixed' ref={ref} style={{top: '50%',left: '50%'}}>
            {/* <Box > */}
            {/* <motion.div
                ref={ref}
                whileTap={{scale:2}}
                className="love"
                id="heart"
                animate={{ x, y }}
                transition={{
                type: "spring",
                damping: 7,
                stiffness: 80,
                restDelta: 0.001,
                }}
            >
            </motion.div> */}
            <Box
                component={motion.img}
                src={bubble}
                ref={ref}
                whileTap={{scale:2}}
                sx={{opacity:'0.58'}}
                // onClick={()=>{console.log({click})}}
                className="love"
                id="heart"
                  animate={{ x, y }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 150,
                    restDelta: 0.001,
                  }}
            >
            </Box>
        </Box>
    </>
  );
}
