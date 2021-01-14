import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Container, Divider, Grid, GridList, GridListTileBar, Paper, Typography } from '@material-ui/core';
import { Facebook } from '@material-ui/icons';
import './footer.css'

const useStyles = makeStyles({
  root: {
    width: "100%",
    height:"70vh",
    backgroundImage:`url(${process.env.PUBLIC_URL+ 'https://picsum.photos/1921/1080'})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
  },
  footerText:{
    background:"none",
    boxShadow:"none",
    color:"white"
  }
});

export default function Footer() {
  const classes = useStyles();
  // const [value, setValue] = React.useState('recents');

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <Fragment>

      {/* <footer className={classes.root}>
      <Container style={{paddingTop:"10%"}} >

      <BottomNavigation style={{background:"none"}} >
        <Grid container spacing={3} justify="center"alignItems="center" >
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Paper className={classes.footerText}>
              <Typography variant="h5">
                Col HEad
              </Typography>
              <Typography variant="h6">
                col item
              </Typography>
              <Typography variant="h6">
                col item
              </Typography>
              <Typography variant="h6">
                col item
              </Typography>
              <Typography variant="h6">
                col item
              </Typography>
            </Paper>
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Paper className={classes.footerText}>
              <Typography variant="h5">
                Col HEad
              </Typography>
              <Typography variant="h6">
                col item
              </Typography>
              <Typography variant="h6">
                col item
              </Typography>
              <Typography variant="h6">
                col item
              </Typography>
              <Typography variant="h6">
                col item
              </Typography>
            </Paper>
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Paper className={classes.footerText}>
              <Typography variant="h5">
                Col HEad
              </Typography>
              <Typography variant="h6">
                col item
              </Typography>
              <Typography variant="h6">
                col item
              </Typography>
              <Typography variant="h6">
                col item
              </Typography>
              <Typography variant="h6">
                col item
              </Typography>
            </Paper>
            <div className="icons">
               
            </div>
          </Grid>

          
          
        </Grid>

        
        
      
    </BottomNavigation>

      </Container> */}
      {/* <hr style={{marginTop:"18%"}}/>
      <Grid item xs={12} style={{color:"crimsonred"}} >
            <Typography variant="subtitle2">
              All copyrights reserve to <span><a href="#">mxrapro</a></span>
            </Typography>

          </Grid> */}
      
      {/* </footer> */}

      
  <footer className="new_footer_area bg_color">
            <div className="new_footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" 
                            style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInLeft"}}>
                                <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                <p>Don’t miss any updates from Uddibaba</p>
                                <form action="#" className="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                                    <input type="text" name="EMAIL" className="form-control memail" placeholder="Email"/>
                                    <button className="mb-5 btn btn_get btn_get_two" type="submit">Mail US</button>
                                    <p className="mchimp-sucmessage" style={{display: "none"}}></p>
                                    <p className="mchimp-errmessage" style={{display: "none"}}></p>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" 
                            data-wow-delay="0.4s" 
                            style={{visibility: "visible", animationDelay: "0.4s", animationName: "fadeInLeft"}}>
                                <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Android App</a></li>
                                    <li><a href="#">ios App</a></li>
                                    <li><a href="#">Desktop</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">My tasks</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" 
                            style={{visibility: "visible", animationDelay: "0.6s", animationName: "fadeInLeft"}}>
                            <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Term &amp; conditions</a></li>
                                    <li><a href="#">Reporting</a></li>
                                    <li><a href="#">Documentation</a></li>
                                    <li><a href="#">Support Policy</a></li>
                                    <li><a href="#">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" 
                            style={{visibility: "visible", animationDelay: "0.8s", animationName: "fadeInLeft"}}>
                            <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                <div className="f_social_icon">
                                    <a href="#" ><Facebook/> </a>
                                    <a href="#" ><Facebook/> </a>
                                    <a href="#" ><Facebook/> </a>
                                    <a href="#" ><Facebook/> </a>
                                    <div class="elfsight-app-69cd6613-5ea9-445a-af28-f3c7b035425f"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-7 offset-md-6">
                          <Typography align="center" component="a">
                          <a href="http://www.mxrapro.com" style={{opacity:"50%"}} target="_blank" className="mb-0 text-light">© MXRAPRO Inc.. 2021 All rights reserved.</a>
                          </Typography>
                        </div>
                    </div>
                </div>
            </div>
                </div>
                <div className="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </div>
            </div>
            
        </footer>
      
      

    </Fragment>
    
  );
}
