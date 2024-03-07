import React ,{useEffect , useState } from 'react'
import { Box, Grid, Typography, styled, Alert , AlertTitle, List ,ListItem ,createStyles, Card ,TextField,InputAdornment , Button ,TextareaAutosize, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
// import phot from "../Media/images.png"
import '../Style/app.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GithubIcon from '@mui/icons-material/GitHub';
// import EmailIcon from '@mui/icons-material/Email';
import SideB from './SideBar'
import {motion , } from 'framer-motion'
import axios from 'axios'
// import EmailIcon from '@material-ui/icons/Email';




const Li = styled(ListItem)({
  borderRadius: '15px 12px 12px 15px',
  backgroundColor: 'white',
  width: 'fit-content',
  padding: '1px 1.1px',
  marginTop:'0.3rem',
  marginLeft: '0.7rem',
  float: 'right',
  display:'inline-block',
  '&: hover':{
    backgroundColor: 'black',
  }
})


export default function Contact() {

  const [a, seta] = useState('');
  const [b, setb] = useState('');
  const [c, setc] = useState('');
  const [d, setd] = useState('');
  const [e, sete] = useState('');
  const [f, setf] = useState('');

  // const [EmailError, setEmailError] = React.useState(true);
  // const [numError, setnumError] = React.useState(true);

  // const [post,setpost] = useState([]);

  const handleChange = (event) => {
    seta(event.target.value);
  };

  const handleChangea = (event) => {
    setb(event.target.value);
  };

  const handleChangeb = (event) => {
    setc(event.target.value);
  };

  const handleChangec = (event) => {
    setd(event.target.value);
  };

  const handleChanged = (event) => {
    sete(event.target.value);
  };

  const handleChangee = (event) => {
    setf(event.target.value);
  };


  const instance = axios.create({
    baseURL: "https://atulk.onrender.com/",
    headers: {
      "Content-Type": "application/json",
    },
  });


const sendcontact = async ()=>{

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const ce = !isNaN(d);
  const ne = (c.length === 10);
  const ee = emailRegex.test(b);

  if(ne === false) alert("Please Verify your Whatsapp Number, It Should be Numeric ");
  else if(ce === false) alert("Please Verify your Country Code, It Should be Numeric");
  else if(ee === false) alert("Please Verify your Email Address");
  else {

  await instance.post(`media/contact`,{
          Name:a,Email:b,Phone:c,Code:d,Subject:e,Message:f
      })
    alert("Thank You For Connecting with Me 🙂");
    window.location.reload()
  }

}

  return (
    <>

    {/* Whole Code */}

      <Box top={0} bottom={0} left={0} right={0}
        component={motion.div}

        initial={{x: "100%",opacity:0.2}}
        animate={{x: 0,opacity:1,transition:{duration:0.7}}}
        exit={{x:"-100%",transition:{duration:1.3}}}
        
        position='fixed' height='100vh' width='100%'
        style={{      
            // background: 'radial-gradient(circle at center, #58a0c3 -60% , #1d1938 30% ,darkgreen 270%)',
            background:'black',
        }}>
        {/* <img className='imgbg' src={phot}>
        </img> */}


          {/* Contact Box */}

        <Box
          component="form"
          Validate
          autoComplete='off'
          p={2}
          sx={{
            display: 'block',
            width: '60%',
            height: 'fitcontent',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '1rem 2rem',
            input: { color: '#000203' },
            "& label": {
              color: "black",
              fontSize: {
                lg: '1.3rem', md: '1.1rem', sm: '0.9rem', xs: '0.7rem'
              },
              fontWeight: "bold",
            },
            "& label.Mui-focused": {
              color: "#FFFDD0",
              fontSize: {
                lg: '1.5rem', md: '1.3rem', sm: '1.1rem', xs: '0.9rem'
              }
            },
            borderRadius: '4rem 3rem 3rem 4rem',
            boxShadow: '3px 2px #de5987',
          }}
          style={{      
            background: 'linear-gradient(90deg, rgba(130,99,88,1) 6%, rgba(113,107,173,1) 24%, rgba(92,158,159,1) 50%, rgba(112,164,115,1) 74%, rgba(147,139,79,1) 93%)',
          }}>
          
          <Stack direction="row" sx={{width:'100%',display:"flow",justifyContent:'center'}}>
            <List sx={{width:'100%'}}>

              {/* Title of Text */}

            <Typography
                style={{
                  background: 'linear-gradient(to right bottom, Black, red)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color:'wheat',
                  boder:'0.1px solid black',
                  alignItems:'center',
                  fontWeight:'bolder',
                  justifyContent:'center',
                }}
                sx={{ fontSize:  {
                  lg: '2rem', md: '1.7rem', sm: '1.3rem', xs: '1.1rem'
              } ,textAlign: 'center' }}
              >Connect With Me</Typography>

              {/* List of icons */}

              <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Link target="_blank" rel="noopener noreferrer" to='https://www.facebook.com/ateyulkoirala.7/' sx={{cursor:"pointer"}}>
                      <Li
                        component={motion.div}
                        whileHover={{rotate:360}}
                        transition={{duration:0.5}}
                        sx={{height:'fit-content'}}
                        >
                          <FacebookOutlinedIcon sx={{ fontSize:  {
                            lg: '2.1rem', md: '2rem', sm: '1.9rem', xs: '1.7rem'
                        },
                          color: 'blue'
                        }}></FacebookOutlinedIcon>
                        </Li>
                    </Link>

                    <Link target="_blank" rel="noopener noreferrer" to='https://www.instagram.com/k_ateyul/' sx={{cursor:"pointer",zIndex:999}}>
                    <Li
                      component={motion.div}
                      whileHover={{rotate:-360}}
                      transition={{duration:0.5}}
                    sx={{height:'fit-content'}}

                    >
                      <InstagramIcon sx={{ fontSize:  {
                        lg: '2.1rem', md: '2rem', sm: '1.9rem', xs: '1.7rem'
                    },
                      color: 'red'
                    }}></InstagramIcon>
                    </Li>
                  </Link>  

                    <Link target="_blank" rel="noopener noreferrer" to='mailto:ateyulkoirala7@gmail.com' sx={{cursor:"pointer"}}>
                  <Li
                    component={motion.div}
                    whileHover={{rotate:360}}
                    transition={{duration:0.5}}
                    sx={{height:'fit-content'}}

                  >
                    <MailOutlineIcon sx={{ fontSize: {
                      lg: '2.1rem', md: '2rem', sm: '1.9rem', xs: '1.7rem'
                  },
                    color: 'gray'
                  }}></MailOutlineIcon>
                  </Li>
                    </Link>

                    <Link target="_blank" rel="noopener noreferrer" to='https://github.com/Atulkoirala' sx={{cursor:"pointer"}}>
                    <Li
                      component={motion.div}
                      whileHover={{rotate:-360,color:'white'}}
                      transition={{duration:0.5}}
                    sx={{height:'fit-content'}}

                    >
                    <GithubIcon sx={{ fontSize:  {
                        lg: '2.1rem', md: '2rem', sm: '1.9rem', xs: '1.7rem'
                    },
                      color: 'gray'
                    }}
                    ></GithubIcon>
                    </Li>
                    </Link>

                  <Link target="_blank" rel="noopener noreferrer" to='https://www.youtube.com/@ateyulkoirala2401' sx={{cursor:"pointer"}}>
                    <Li
                      component={motion.div}
                      whileHover={{rotate:-360}}
                      transition={{duration:0.5}}
                    sx={{height:'fit-content'}}

                  >
                    <YouTubeIcon sx={{ fontSize:   {
                      lg: '2.1rem', md: '2rem', sm: '1.9rem', xs: '1.7rem'
                  },
                    color: 'red'
                  }}></YouTubeIcon>
                </Li>
                  </Link>

                  <Link target="_blank" rel="noopener noreferrer" to='https://www.linkedin.com/in/atul-koirala-76b4911b2' sx={{cursor:"pointer"}}>
                    <Li
                    component={motion.div}
                    whileHover={{rotate:360}}
                    transition={{duration:0.5}}
                    sx={{height:'fit-content'}}

                >
                    <LinkedInIcon sx={{ fontSize:   {
                      lg: '2.1rem', md: '2rem', sm: '1.9rem', xs: '1.7rem'
                  },
                    color: 'blue'
                  }}></LinkedInIcon>
                  </Li>
                  </Link>
              </Box>
                 
          </List>
          </Stack>


                {/* Form */}

          <Box display="block" ml={-1.7} mr={-1.7}>


          <Box style={{ display: 'block' }}>
              <TextField
                  required
                  id="outlined-required"
                  label="Name"
                  variant="standard"
                  onChange={handleChange}
                  type='text'
                  size='small'
              sx={{
                marginRight: '1rem', marginBottom: '1rem',width:'100%'
              }}/>

            <Box style={{ display: 'flex' }}>
              
              
            <TextField
                  required
                  id="outlined-required"
                  variant="standard"
                  onChange={handleChangeb}
                  label="Whatsapp Number"
                  // type='number'
                  inputProps={{
                    pattern: '[0-9]+', // Only allow digits
                    maxLength: 10,
                    inputMode: 'numeric',
                    // style: { textAlign: 'center' } // Center align text
                  }}
                  type='tel'
                  size='small'
              sx={{
                marginRight: '1rem', marginBottom: '1rem',width:'100%'
                  }}
                />
                <TextField
                  required
                  id="outlined-required"
                  variant="standard"
                  // value={value}
                  onChange={handleChangec}
                  label="Country Code(+977)"
                  inputProps={{
                    pattern: '[0-9]+', // Only allow digits
                    maxLength: 3,
                    inputMode: 'numeric',
                    // style: { textAlign: 'center' } // Center align text
                  }}
                  type='tel'
                  size='small'
              sx={{
                marginRight: '1rem', marginBottom: '1rem',width:'100%'
                  }}
                />
              </Box>
              <Box style={{ display: 'flex' }}>
                <TextField
                      required
                      id="outlined-required"
                      variant="standard"
                      onChange={handleChangea}
                      // error={EmailError}
                      label="Email"
                      type='email'
                      size='small'
                      // helperText={EmailError ? 'Invalid email format' : ''}
                      // InputProps={{
                      //   endAdornment: (
                      //     <InputAdornment position="end">
                      //       <EmailIcon color={EmailError ? 'error' : 'disabled'} />
                      //     </InputAdornment>
                      //   ),
                      // }}
                  sx={{
                    marginRight: '1rem', marginBottom: '1rem',width:'100%'
                      }}
                  />

                  <TextField
                    required
                    id="outlined-required"
                    variant="standard"
                    onChange={handleChanged}
                    label="Subject"
                    type='text'
                    size='small'
                sx={{
                  marginBottom: '1.3rem',width:'100%',
                  fontWeight:'bold'
                }}
                  />

              </Box>
              
               
          </Box>
          <Box style={{width:'100%',marginBlock:'auto'}}>
              <TextField
                  required
                  id="outlined-required"
                  label="Message"
                  onChange={handleChangee}
                  minRows={2}
                  cols="55" rows="5"
                  variant="standard"
  
              style={{
                marginBottom: '1rem',
              }}
                  fullWidth
                />
          </Box>
          {/* <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — <strong>check it out!</strong>
          </Alert> */}
          <Box
            component={motion.div} 
            variant="contained"
            whileHover={{ scale: 1.17 }}
            transition={{ type: "spring", stiffness: 350, damping: 10 }}
          >
            <Button size='medium' onClick={sendcontact} sx={{margin: '0 auto', display: "flex"}} color='success' variant="contained">Connect</Button>
          </Box>
          </Box>
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
