import React from 'react';
import { Fragment } from 'react';
import Tilt from 'react-vanilla-tilt';
import './common.css'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';











function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      borderRadius:"15px",
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      // boxShadow:"none",
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    
  }));
  
  const cards = [
    {
    PlanName:"Plan A",
    PlanDec:"",
    PlanId:"1"
    }, 
    {
      PlanName:"Plan B",
      PlanDec:"",
      PlanId:"2"
      },
      {
        PlanName:"Plan c",
        PlanDec:"",
        PlanId:"3"
        }
    ];

 function Plans() {
    const classes = useStyles();
  return (
    <Fragment className="main">
      {/* <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">

          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            
          </div>
        </div>
      </div> */}



<Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid className="my-5" container spacing={4}>
            {cards.map((card) => (
                
              <Grid item key={card} xs={12} sm={6} md={4}>
                  <Tilt option={{max:50, speed:600}} style={{boxShadow:"none !important"}} >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Plan Name
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus accusamus a voluptatibus
                       consequatur modi incidunt dolore ipsa quis 
                       atque eum nobis perspiciatis amet reiciendis ex, ab, quisquam, optio omnis.
                    </Typography>
                    <CardActions>
                    <Button size="large" color="primary" variant="contained" fullWidth  component={Link} to="/booking">
                      BOOK NOW
                    </Button>
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                  </CardContent>
                  
                </Card>
                </Tilt>
              </Grid>
              
            ))}
          </Grid>
        </Container>




    </Fragment>
  );
}


export default Plans



















