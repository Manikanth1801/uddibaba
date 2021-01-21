import { Button, CssBaseline, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useRef, useEffect, Fragment } from 'react';
import {TweenMax, Power3} from 'gsap';





const useStyle = makeStyles((theme)=>({
  
  HBody:{

    paddingTop:"30%",
    opacity:0,
    [theme.breakpoints.down("md")]:{
      paddingTop:"80%",
    }
  },

  root:{
    display:"none",
    [theme.breakpoints.up("md")]:{
      display:"block",
    }
  },
  mob:{
    display:"none",
    [theme.breakpoints.down("md")]:{
      display:"block",
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
          y: 370,
          ease: Power3.easeOut
        }
      )
  
  }, []);

  const classes=useStyle();
  return (

    <Fragment>

    <div className={`${classes.root} col-md-8 col-sm-10 col-xs-10`} ref =  { textRef => {textAnim = textRef}}>
        <Typography variant="h4" className="ml-5 mb-3" style={{color:"whitesmoke "}}>
          To Travel Is
        </Typography>
        <Typography variant="h1" className="mx-5 mb-3"  align="left" style={{color:"whitesmoke "}}>
          TO Live
        </Typography>
      <Grid item className="ml-5" xs={6} style={{opacity:"0.85", backgroundColor:"lightgray" ,borderRadius:40}}>

      <Button
        fullWidth
        size="large"
        style={{padding:"none"}}
        color='inherit'
        variant="text">Explore</Button>
        </Grid>
        
    </div>

    <div className={`${classes.mob} col-md-8 col-sm-10 col-xs-10 my-5 py-5`} >
        <Typography variant="h4" className="ml-5 mb-3 " style={{color:"whitesmoke "}}>
          To Travel Is
        </Typography>
        <Typography variant="h1" className="mx-5 mb-3"  align="left" style={{color:"whitesmoke "}}>
          TO Live
        </Typography>
      <Grid item className="ml-5" xs={6} style={{opacity:"0.85", backgroundColor:"lightgray" ,borderRadius:40}}>

      <Button
        fullWidth
        size="large"
        style={{padding:"none"}}
        color='inherit'
        variant="text">Explore</Button>
        </Grid>
        
    </div>
    </Fragment>
    
  );
};

export default Hero;