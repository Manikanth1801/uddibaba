import React, { Fragment } from 'react';
import {CssBaseline, makeStyles, Typography} from '@material-ui/core';
import Header from '../../Header/Header';
import NavBar from '../../Header/Header2';



const useStyle = makeStyles((theme)=>({
    root:{
      maxHeight: "35vh",
      background:`url(${process.env.PUBLIC_URL+ 'https://picsum.photos/1920/1080'})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      color:"grey",
    },
    HBody:{
  
      paddingTop:"10%",
      
    }
  }))

const Blog = () => {

    const classes=useStyle();



    return (
        <Fragment>
          <NavBar/>

<div className={classes.root}  >
      <CssBaseline/>
      <div className={classes.HBody}>
        <Typography variant="h1"
        align="left"
        >
          <div>



          Blog




          </div>
        </Typography>
      </div>
    </div>
        </Fragment>
    );
}


export default Blog;