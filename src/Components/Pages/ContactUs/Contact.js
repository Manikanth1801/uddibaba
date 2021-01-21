import React from 'react';
import {Box,Typography} from '@material-ui/core';
import Header from '../../Header/Header';
import Iframe from 'react-iframe';
import './contact.css'
import { Fragment } from 'react';
import { Facebook, Instagram, YouTube } from '@material-ui/icons';
import NavBar from '../../Header/Header2';


const Contact = () => {
    return (
        <React.Fragment>
          <NavBar/>
          
        <section className="container-fluid justify-content-center" id="contact">
            <div className="social">

                <a href="#"><Facebook/></a>
                <a href="#"><Instagram/></a>
                <a href="#"><YouTube/></a>
                {/* <a href="#"><T/></a> */}


            </div>
                <div className="contactBox">
                    <div className="cHead">
                        <h1>Get In Touch</h1>
                        <p><a href="mailto:manikanthapanigrahi@gmail.com">
                         E-mail at someone@gmail.com
                          </a><br/> or
                          <a href="tel:+91 8455846313"> Call Us at 8455846313</a>
                          </p>
                    </div>
                    <div className="cInputs">
                        <input type="text" name="" id="" placeholder="Full Name"/>
                        <input type="email" name="" id="" placeholder="sample@gmail.com"/>
                        <textarea name="" id="" cols="20" rows="3" placeholder="Write Message"></textarea>
                        <button className="bg-light" type="submit">Send</button>
                    </div>

                </div>


                <div className="map">

                <Iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.98461114
                12976!2d78.33612881519186!3d30.151855981843433!2m3!1f0!2f0!3f0!3m2!1i1024!2i7
                68!4f13.1!3m3!1m2!1s0x390917085bf8e10d%3A0x65464b56780db4f9!2sUDDIBABA%20FARM%20CAM
                PS%20%26%20CAFE!5e0!3m2!1sen!2sin!4v1610416330140!5m2!1sen!2sin"
                 width="600" height="450" frameborder="0" style={{border:"0"}} allowfullscreen="" 
                 aria-hidden="false" tabindex="0"></Iframe>

                </div>
        </section>
        <div className="screnHeight">
          
        </div>
    
    
          

        </React.Fragment>
    );
}


export default Contact;