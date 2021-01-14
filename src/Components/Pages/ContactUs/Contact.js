import React from 'react';
import {Box,Typography} from '@material-ui/core';
import Header from '../../Header/Header';
import Iframe from 'react-iframe';
import './contact.css'
import { Fragment } from 'react';
import { Facebook, Instagram, YouTube } from '@material-ui/icons';


const Contact = () => {
    return (
        <React.Fragment>
          <Header/>




          
        <secttion id="contact">
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
                         E-mail us Regarding your Issue
                          </a> or
                          <a href="tel:+91 8455846313"> Call Us</a>
                          </p>
                    </div>
                    <div className="cInputs">
                        <input type="text" name="" id="" placeholder="Full Name"/>
                        <input type="email" name="" id="" placeholder="sample@gmail.com"/>
                        <textarea name="" id="" cols="20" rows="3" placeholder="Write Message"></textarea>
                        <button type="submit">Send</button>
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
        </secttion>
    
    
            {/* <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="https://picsum.photos/id/1027/800/800"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          2244
                        </span>
                        <span className="text-sm text-gray-500">VIsited</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          4.9/5
                        </span>
                        <span className="text-sm text-gray-500">Review</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          10
                        </span>
                        <span className="text-sm text-gray-500">years</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Uddibaba Farms
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Rishikesh, India
                  </div>
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    Manager : XYZ
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    The best Nomadic Life
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Corporis, sequi quae ea, autem hic beatae ipsa
                         eius, quibusdam veritatis vitae praesentium quas atque ex
                         plicabo dolores aut magni maiores. Molestias, nihil.\
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main> */}

        </React.Fragment>
    );
}


export default Contact;