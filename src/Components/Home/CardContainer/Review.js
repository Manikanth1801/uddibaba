import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import '../common.css';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Fragment>

    

<Grid item xs={12} md={4} spacing={4}>
  
<div className="holder mb-5">   

{/* <!-- Box 2 below --> */}
<div className="space">
    <div className="imgBox">
        <img src={post.image} width="270px" height="180px" alt="classic Card" />
    </div>
    <div className="contentBox">
        <h3>
            {post.title}
        </h3>
        <span>{post.date}</span>
        <p>
           <span>{post.description}</span>
            </p>
            {/* <button className="buyBtn" type="submit">Get Now</button> */}
    </div>
</div>
</div>
    </Grid>


    </Fragment>
    
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};