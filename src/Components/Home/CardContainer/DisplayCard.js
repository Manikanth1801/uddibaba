import { CssBaseline, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './card.css';


const useStyles = makeStyles(
    
    {
        root:{
            padding:"15px",
            
        },
        pics:{
            backgroundImage: props => `url(${props.image})`,
            minWidth:"320px",
            maxHeight:"350px",
            borderRadius:"15px",
            // borderRadius:"0% 15% 7%"
        },
        labelAlignment:{
            color:"white",
            margin:"10px",
            paddingTop:"70%",
            paddingBottom:"10%",
        }
    }
);


 const AmeCard = (props) => {
    
    return(
        <Fragment>
            <figure className="snip1581"><img src={props.image} alt="profile-sample2"/>
            <figcaption>
                <h3 className="title1">{props.title1}</h3>
                <h3 className="title2">{props.title2}</h3>
                <h3 className="title3">{props.title3}</h3>
            </figcaption>
            </figure>
            
    </Fragment>
    );
};

function DisplayCard(props) {
    const { image } = props;

    const styleProps = {
        image
      };
      const classes = useStyles(styleProps);

  return (
    <Fragment >
        
      
                      
                      <figure className="snip1581 mt-5"><img src={props.image} alt="profile-sample2"/>
                      <figcaption>
                        <h3 className="title1">{props.title1}</h3>
                        <h3 className="title2">{props.title2}</h3>
                        <h3 className="title3">{props.title3}</h3>
                        </figcaption>
                    </figure>
                   
    </Fragment>
  );
}

export default DisplayCard ;
export {AmeCard } ;