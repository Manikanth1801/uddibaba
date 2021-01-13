import React from "react";
import "./Hero.css";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { makeStyles } from "@material-ui/core/styles";
import { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    fontSize: "14px",
    marginRight: ".2rem",
  },
}));

function Hero() {
  const classes = useStyles();
  return (
    <Fragment>
      

<section className="heroSection mt-5">
      <div className="container">
        <div>
          <div className="d-flex">
            <h3 className="m-0">Uddibaba farm stay</h3>
          </div>
          <div className="d-flex  justify-content-between mb-4">
            <div className="d-flex align-items-center">
              <Typography varient="h6" color="primary">
                ★
              </Typography>
              <Typography>4.63</Typography>
              <Typography color="textSecondary">(8)</Typography>
              <Typography className="ml-3">
                · Rishikesh, Uttarakhand, India
              </Typography>
            </div>

            <div>
              {/* <Button> Share</Button> */}
              {/* <Button>
                <ShareIcon className={classes.iconStyle} /> Share
              </Button>
              <Button>
                <FavoriteBorderIcon className={classes.iconStyle} /> Save
              </Button> */}
            </div>
          </div>
        </div>
        <div className="row   border">
          <div className="col-lg-6 col-md-6 col-sm-12 px-1 mt-2">
          <img
                src="https://a0.muscache.com/im/pictures/dce09281-5d9a-4d79-a032-befb74aae05e.jpg?im_w=720"
                alt=""
                className="img-fluid"
              />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 px-1 d-none d-md-block .d-lg-block">
            <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 pt-2 pr-2">
            <img
                src="https://a0.muscache.com/im/pictures/dce09281-5d9a-4d79-a032-befb74aae05e.jpg?im_w=720"
                alt=""
                className="img-fluid"
              />
              <div className="pt-2">
              <img
                src="https://a0.muscache.com/im/pictures/dce09281-5d9a-4d79-a032-befb74aae05e.jpg?im_w=720"
                alt=""
                className="img-fluid"
              />
              </div>
              <div className="py-2">
              <img
                src="https://a0.muscache.com/im/pictures/dce09281-5d9a-4d79-a032-befb74aae05e.jpg?im_w=720"
                alt=""
                className="img-fluid"
              />
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-6 pt-2 pl-0">
            <img
                src="https://a0.muscache.com/im/pictures/dce09281-5d9a-4d79-a032-befb74aae05e.jpg?im_w=720"
                alt=""
                className="img-fluid"
              />
              <div className="my-1 ">
              <img
                src="https://a0.muscache.com/im/pictures/dce09281-5d9a-4d79-a032-befb74aae05e.jpg?im_w=720"
                alt=""
                className="img-fluid"
              />
              </div>
              {/* <div className="py-2">
              <img
                src="https://a0.muscache.com/im/pictures/dce09281-5d9a-4d79-a032-befb74aae05e.jpg?im_w=720"
                alt=""
                className="img-fluid"
              />
              </div> */}
              
            </div>
            </div>
          </div>
          {/* <div className="col-12 col-sm-6 px-sm-0">

              <img
                src="https://a0.muscache.com/im/pictures/dce09281-5d9a-4d79-a032-befb74aae05e.jpg?im_w=720"
                alt=""
                className="img-fluid"
              />


          </div>
          <div className="col-12 col-sm-6">
            <div className="">
              <img
                src="https://a0.muscache.com/im/pictures/d49eaeed-6a8e-4edf-b93d-429f11fc2495.jpg?im_w=720"
                alt=""
                width="40%"
              />
              <img
                src="https://a0.muscache.com/im/pictures/30df4f2f-63b0-410e-a300-801301a36451.jpg?im_w=720"
                alt=""
                width="40%"
              />
              <img
                src="https://a0.muscache.com/im/pictures/d49eaeed-6a8e-4edf-b93d-429f11fc2495.jpg?im_w=720"
                alt=""
                width="40%"
              />
              <img
                src="https://a0.muscache.com/im/pictures/30df4f2f-63b0-410e-a300-801301a36451.jpg?im_w=720"
                alt=""
                width="40%"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>

    </Fragment>
    
  );
}

export default Hero;
