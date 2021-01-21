import { IconButton, Menu,MenuItem, Typography } from '@material-ui/core';
import { MenuOutlined } from '@material-ui/icons';
import { Fragment } from 'react';
// import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
// import './nav.css';






const NavBar = () =>{

    return(
        <Fragment >
          
        <nav className="navbar navbar-expand-md  navbar-light  bg-light py-0">
                            <h1 className="brandName navbar-brand ">
                                <Link to="/">
                                  <span>UDDIBABA</span>
                                  {/* <img src="/asserts/images/UD.png" alt=""/> */}
                                </Link>
                            </h1>
                            <button className="navbar-toggler text-white" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto" >
                                    <li className="nav-item  ">
                                        <Link className="nav-link " to="/about">ABOUT</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/contact">CONTACT</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link className="nav-link text-white" to="/blog">BLOG</Link>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/booking">BOOK NOW</Link>
                                    </li>

                                </ul>

                            </div>
                        </nav>



        </Fragment>
    );
}

export default NavBar;

