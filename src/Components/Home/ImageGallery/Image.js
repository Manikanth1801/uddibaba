import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import {makeStyles}from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import HorizontalCards from '../../Slider/HorizontalCards';




const useStyles = makeStyles((theme) => ({
    root:{
        position:"relative",
        
    },
    button:{
        backgroundColor:"#5A8EC1",
        float:"left",
        
    },
    slideMedia:{
        [theme.breakpoints.up("md")]:{
            display:"block ",
            // backgroundColor:"seagreen",
        },
        
    },
    text:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignContent:"center"
    }
}));

export default function Images() {

    const classes = useStyles();


  return (
    <Fragment>
        <Container className={classes.root} >
        
            <Grid container spacing={3}>
            <Grid item xs={11} sm={11} md={8} lg={8} >
                            <div className = {classes.slideMedia}>
                            <HorizontalCards style={{padding:"25px", overflowX:"hidden"}} />
                            </div> 
                        </Grid>
                {/* <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <div className = {classes.slideMedia}>
                            <HorizontalCards />
                            </div> 
                        </Grid>
                    </div>
                </div> */}

                <Grid item xs={12} sm={12} md={4} lg={4} style={{background:"none", overflowX:"hidden"}} >
                    <div className="container  mt-5">

                    <Paper style={{boxShadow:"none", background:"none"}} className="my-5" >
                    <Typography variant="h3" align = "left">
                            Memories
                        </Typography>
                        <Button
                        size="small"
                        className= {classes.button}
                        component = {Link}
                        variant="text"
                        to='/blog'
                        
                        >
                            Our Blogs
                        </Button>
                    </Paper>
                    <br/>
                    <div className = {classes.text}>
                        
                    <Typography variant="subtitle1" align = "left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ullam, aliquid, 
                        possimus voluptate ipsam veritatis qui cupiditate ad 
                        nesciunt modi provident consequatur quaerat delectus eos amet consequuntur, laboriosam enim labore.
                    </Typography>
                    <br/>
                    <Typography variant="subtitle1" align = "left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ullam, aliquid, 
                        possimus voluptate ipsam veritatis qui cupiditate ad 
                        nesciunt modi provident consequatur quaerat delectus eos amet consequuntur, laboriosam enim labore.
                    </Typography>
                    <br/>
                    {/* <Typography variant="subtitle1" align = "left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ullam, aliquid, 
                        possimus voluptate ipsam veritatis qui cupiditate ad 
                        nesciunt modi provident consequatur quaerat delectus eos amet consequuntur, laboriosam enim labore.
                    </Typography> */}
                    </div>


                    </div>
                    
                    
                </Grid>

            </Grid>
        </Container>
    </Fragment>
  );
}
