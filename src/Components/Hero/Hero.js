import { Button, CssBaseline, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { Fragment } from 'react';

const useStyle = makeStyles((theme)=>({
  root:{
    minHeight: "15vh",
    background:`url(${process.env.PUBLIC_URL+ 'https://i.picsum.photos/id/431/1920/1080.jpg?hmac=ym5duWUaMm_A9QkQXG5GHGr0hLT2PNwqRI6CE7s3IWQ'})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    color:"white",
  },
  content:{
    paddingTop:"10%",
    paddingBottom:"5%",
    alignContent:"flex-start",
  }
  
}))

const Hero = () =>{
  const classes=useStyle();
  return (
    <Fragment>
      <div className={classes.root} >
      <CssBaseline/>
      
      <div className={classes.content}>
        <Grid item xs={6} style={{display:"flex" , marginLeft:"50px", opacity:"0.85", backgroundColor:"lightgray" ,borderRadius:50}}>
        {/* <Button 
        fullWidth
        size="large"
        style={{padding:"none"}}
        color='inherit'
        
        variant="text">Explore</Button> */}
        </Grid>
      </div>
      
    </div>
      
    </Fragment>
    
  );
};

export default Hero;