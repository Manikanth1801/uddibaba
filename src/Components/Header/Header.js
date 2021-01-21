import { AppBar, Button, IconButton, makeStyles,  MenuItem,  Toolbar, Typography } from '@material-ui/core';
import { CardTravel } from '@material-ui/icons';
import  MenuIcon  from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import Hero from '../Home/Hero';
import "./headStyle.css"
// import Hero from '../Home/Hero'

const useStyles = makeStyles((theme)=>({
    button:{
        margin: "10px",
        background: 'none',
        border: '0.5px solid white',
        borderRadius: '24px',
        color : 'white',
        height : "48px",
        width : "160px",
        padding: '0px 5px'
        // boxShadow: '0 3px 2px 2px'
    },

    Dview:{
        display:"none",
        color: 'white',
        [theme.breakpoints.up("md")]:{
            display:"flex"
        }
    },
    appBar:{
        
        border:"none"
    },
    main:{
        overflowX:"hidden",
        paddingBottom:"25px",

    },


    headerShow:{
        background: "linear-gradient(rgba(46, 43, 43, 0.8), rgba(109, 51, 51, 0.5)) center no-repeat",
    },
    
    headerHide:{
        background:"none",
    }
    

}))

const Header = (props)=>{
    const classes=useStyles();
    

    return(
        <div >
            
                    {console.log(props)}
    <header className={classes.main} 
    style={{
        background: "white center no-repeat" }}>
            {/* linear-gradient(rgba(46, 43, 43, 0.8), rgba(109, 51, 51, 0.5)) */}
        <video autoPlay muted loop > 
             <source src="/asserts/Uddibaba.mp4" type="video/mp4" />
             {/* <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/DUtBFxvyUJ0?controls=0&amp;start=20"
               autoplay="1&controls=0&loop=1&start=20&color=white" frameborder="0" allowfullscreen></iframe> */}
            {/* <ReactPlayer url="https://drive.google.com/file/d/1poHN3isJF7kqjrWnTg8qOLr1PRHJ1VMo/preview" width="640" height="480" width="100%" height="100%"
            className="video" muted loop="true" controls="false" playing="true"/> */}
        </video>        
    
        <div className="navBar ">



                        <nav className="navbar navbar-expand-md  navbar-dark bg-transperent" onScroll=
                        {()=>{if (window.scrollY > 20) {
                            document.querySelector(".bg-transperent").className = "bg-light "
                          } else {
                            document.querySelector(".bg-transperent").className = "bg-transperent";
                          }}}>
                            <h1 className="brandName navbar-brand">
                                <Link to="/">
                                    <span>UDDIBABA</span>
                                    {/* <img src="/asserts/images/UD.png" alt=""/> */}
                                    </Link>
                            </h1>
                            <button className="navbar-toggler text-white" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon "></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto" >
                                    <li className="nav-item active ">
                                        <Link className="nav-link " to="/about">ABOUT</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/contact">CONTACT</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link className="nav-link text-white" to="/blog">BLOG</Link>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/booking">BOOK NOW</Link>
                                    </li>

                                </ul>

                            </div>
                        </nav>


        </div>
        <Hero/>


    </header>

        </div>
    );
}



export default Header;











