import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import MemoSlider from './Memoslider/MemoSlider';
import SlideCard from './SliderCard';






const slides = [
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg"
  ];

const HorizontalCards = (props) => {
        
  


    return (
        
            <div className="" >
                <div>
                    {/* <SlideCard/> */}
                    <MemoSlider slides={slides}/>
                </div>

            </div>

        
    );
}

export default HorizontalCards;