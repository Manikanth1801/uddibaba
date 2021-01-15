import React from 'react';
import Hero from './Hero';
import { ListItem,  Typography,  List, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AmeCard from './CardContainer/Card';
import Images from './ImageGallery/Image';
import Plans from './TravelPlans';
import FeaturedPost from '../Home/CardContainer/Review'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';






const featuredPosts = [
  {
    title: 'Allison Hargrvees',
    date: 'Nov 12',
    description:
      'I felt awsome xyz',
    image: 'https://picsum.photos/600/309',
    imageText: 'Image Text',
  },
  {
    title: 'Mr. Myagyi',
    date: 'Nov 11',
    description:
      'Some more text in here',
    image: 'https://picsum.photos/600/308',
    imageText: 'Image Text',
  },
  {
    title: 'Mr. Myagyi',
    date: 'Nov 21',
    description:
      'Some more text in here next',
    image: 'https://picsum.photos/600/310',
    imageText: 'Image Text',
  },
  {
    title: 'Mr. Myagyi',
    date: 'Nov 21',
    description:
      'Some more text in here next',
    image: 'https://picsum.photos/600/310',
    imageText: 'Image Text',
  },
  {
    title: 'Mr. Myagyi',
    date: 'Nov 21',
    description:
      'Some more text in here next',
    image: 'https://picsum.photos/600/310',
    imageText: 'Image Text',
  },
  {
    title: 'Mr. Myagyi',
    date: 'Nov 21',
    description:
      'Some more text in here next',
    image: 'https://picsum.photos/600/310',
    imageText: 'Image Text',
  },
];


 


const useStyle= makeStyles ({
  root:{
    margin:"40px",  
    marginTop:"120px",  
      
  },
  
});

  const Home = () => {
    const classes = useStyle();
  return (
    <div>
      <Header/>
        <Hero/>
        <div className={classes.root}
        disableGutters={true}
         >
          
          <List className={`amenities${classes.root} `} >
          <Typography variant="h3" 
          align='left'
          className="mx-5"
          >
            Amenities
          </Typography> 
          <Typography variant="subtitle2"
          align='left'
          className="mx-5"
          >
            we provide...
          </Typography>

          <ListItem >

            <AmeCard/> 

          </ListItem>

          

          <div style = {{marginTop:"120px"}}>

            <marquee behavior="scroll" direction="right">
            <img src="/asserts/images/78nE.gif" width="125" height="82" alt="Flying Bat"/>
            </marquee>
            

            <Images style = {{marginTop:"60px"}}/>

          </div>

          <div style={{marginTop:"40px"}}>
            <Plans/>
          </div>

          <Grid item xs={12} sm={12} md={12} lg= {12} >
            <Typography variant = "h3" align="center">
               What does our Customer says
            </Typography>
            </Grid>

          {/* <div className={classes.root}> */}
            
            
          <Grid container spacing={4}>
            
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          {/* </div> */}
          </List>
          
        </div>
        



        
    </div>
  );
}

export default Home;