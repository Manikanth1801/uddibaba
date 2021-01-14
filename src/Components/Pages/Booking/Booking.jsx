import React, { Fragment } from "react";
import "./Booking.css";
import Container from "@material-ui/core/Container";
import Features from "./Features/Features";
import Amenities from "./Amenities/Amenities";
import Hero from "./HeroSection/Hero";
import Header from "../../Header/Header";
import NavBar from "../../Header/Header2";
import ImageGrid from './HeroSection/ImageGrid'
import { Link } from "@material-ui/core";

const Booking = ()=> {
  return (
    <Fragment >
      <NavBar/>
      {/* <Hero /> */}
      <ImageGrid/>
      <Features  id="features"/>
      <Amenities />
    </Fragment>
  );
}

export default Booking;
