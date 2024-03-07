import {motion} from 'framer-motion';
import '../Style/style.css'

export const Backdrop = ({children , onClick})=>{

  return (
    <motion.div 
      className="pop"
      onClick={onClick}
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      >
        {children}
    </motion.div>
  )
};