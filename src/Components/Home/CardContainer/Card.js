import React, { Fragment } from 'react';
import { Container, ListItem, Paper, Typography, Grid, List } from '@material-ui/core';
import DisplayCard from './DisplayCard';
import './card.css';



const data = [
    {
        title1: "THE",
        title2: "GOTO",
        title3: "lOCATION",
        image: "https://picsum.photos/400/509",
    },
    {
        title1: "Label 1",
        title2: "Label 1",
        title3: "Label 1",
        image: "https://picsum.photos/400/510",
    },
    {
        title1: "Label 1",
        title2: "Label 1",
        title3: "Label 1",
        image: "https://picsum.photos/400/511",
    },
    {
        title1: "Label 1",
        title2: "Label 1",
        title3: "Label 1",
        image: "https://picsum.photos/400/512",
    },
    
]

const dataSet = [
    {
        title1: "Label 1",
        title2: "Label 1",
        title3: "Label 1",
        image: "https://picsum.photos/400/509",
    },
    {
        title1: "Label 1",
        title2: "Label 1",
        title3: "Label 1",
        image: "https://picsum.photos/400/510",
    },
    {
        title1: "Label 1",
        title2: "Label 1",
        title3: "Label 1",
        image: "https://picsum.photos/400/511",
    },
    {
        title1: "Label 1",
        title2: "Label 1",
        title3: "Label 1",
        image: "https://picsum.photos/400/512",
    },
    
]


export default function AmeCard() {
  return (
    <Fragment>

  
            <Grid container
            spacing={3}
            alignContent="flex-end"
            >
              
              {data.map((item)=>{
                  return(
                      <DisplayCard title1={item.title1} title2={item.title2} title3={item.title3} image={item.image} />
                  );
              })}

            



            </Grid>

    </Fragment>
  );
}
