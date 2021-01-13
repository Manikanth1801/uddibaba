import { makeStyles } from '@material-ui/core';
import React, { Fragment } from 'react';
import "./slider.css"


const useStyles = makeStyles(
    {
        root:{
            margin:"0",
            padding:"0",
            overflowX:"hidden"
            // width:"350px",
            // height:"350px",
            // backgroundColor:"seagreen",
            // border:"2px solid black",
            // boxSizing:"border-box",
            // fontSize:"5.5rem",
            // color:"black",

        },
        card:{
            // background:"#eee",
            userSelect:"none",

        }
    }
);


const SlideCard  = (props) =>{

    const classes = useStyles();


    return(
        <Fragment className = {classes.root}>
            <section style={{background:"none"}} className = {classes.card} id = "slider">
                <input type="radio" name="slider" id = "s1" />
                <input type="radio" name="slider" id = "s2" />
                <input type="radio" name="slider" id = "s3" checked />
                <input type="radio" name="slider" id = "s4" />
                <input type="radio" name="slider" id = "s5" />



                <label htmlFor="s1" height = "100%" width = "100%" id = "slide1"> 
                <img src="https://picsum.photos/400/301" alt="" style={{borderRadius:"20px"}} />
                </label>
                
                <label htmlFor="s2" height = "100%" width = "100%" id = "slide2"> 
                <img src="https://picsum.photos/400/302" alt=""  style={{borderRadius:"20px"}}/>
                </label>

                <label htmlFor="s3" height = "100%" width = "100%" id = "slide3"> 
                <img src="https://picsum.photos/400/304" alt="" style={{borderRadius:"20px"}}/>
                </label>

                <label htmlFor="s4" height = "100%" width = "100%" id = "slide4"> 
                <img src="https://picsum.photos/400/305" alt="" style={{borderRadius:"20px"}}/>
                </label>

                <label htmlFor="s5" height = "100%" width = "100%" id = "slide5"> 
                <img src="https://picsum.photos/400/306" alt=""  style={{borderRadius:"20px"}}/>
                </label>
                {/* <label htmlFor="s6" height = "100%" width = "100%" id = "slide5"> 
                <img src="https://picsum.photos/400/306" alt=""  style={{borderRadius:"20px"}}/>
                </label> */}

            </section>
        </Fragment>
    );
}

export default SlideCard;