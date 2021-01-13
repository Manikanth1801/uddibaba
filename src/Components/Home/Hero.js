import { Button, CssBaseline, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useRef, useEffect } from 'react';
import {TweenMax, Power3} from 'gsap';





const useStyle = makeStyles((theme)=>({
  
  HBody:{

    paddingTop:"30%",
    opacity:0,
    [theme.breakpoints.down("md")]:{
      paddingTop:"80%",
    }
  }
}))

const Hero = () =>{

  let textAnim = useRef(null);
  
  useEffect(() => {
      console.log(textAnim);
      TweenMax.to(
        textAnim,
        1.2,
        {
          opacity:1,
          y: -250,
          ease: Power3.easeOut
        }
      )
  
  }, []);

  const classes=useStyle();
  return (
    // <div className={classes.root} >
    //   <CssBaseline/>
    //   <div className={classes.HBody}
    //   ref = {textRef => {textAnim = textRef}}
    //   >
    //     <Typography variant="h1"
    //     align="left"
    //     style={{marginLeft:"30px"}}
    //     >
    //       Some Head Content
    //     </Typography>
    //     <Grid item xs={6} style={{marginLeft:"50px", opacity:"0.85", backgroundColor:"lightgray" ,borderRadius:50}}>
    //     <Button 
    //     fullWidth
    //     size="large"
    //     style={{padding:"none"}}
    //     color='inherit'
        
    //     variant="text">Explore</Button>
    //     </Grid>
    //   </div>
    // </div>
    <div className="container col-md-6 col-sm-10 col-xs-10" ref = {textRef => {textAnim = textRef}}>
      <Grid item xs={6} style={{opacity:"0.85", backgroundColor:"lightgray" ,borderRadius:40}}>
      <Button
        fullWidth
        size="large"
        style={{padding:"none"}}
        color='inherit'
        variant="text">Explore</Button>
        </Grid>
        {/* <Button color="primary"
        variant="contained">
          Explore
        </Button> */}
    </div>
  );
};

export default Hero;