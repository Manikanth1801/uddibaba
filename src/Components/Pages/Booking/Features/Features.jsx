import { Box, Grid, GridListTile, Typography } from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import React, { Fragment } from "react";
import BookingForm from "./BookingForm/BookingForm";
import "./Features.css";
// import { StickyContainer, Sticky } from "react-sticky";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  featureTitle: {
    color: "rgb(34, 34, 34) !important",
    fontWeight: "600",
    fontSize: "16px ",
    // lineHeight: "20px",
    // marginBottom: "4px",
  },

  featureSubTitle: {
    color: "rgb(113, 113, 113) !important",
    fontWeight: "400 !important",
    fontSize: "14px !important",
    // line-height: 20px !important;
  },

  featureList: {
    height: "auto  !important",
    width: "100% !important",
    marginBottom: "1rem",
  },
}));

const featureList = [
  {
    svgImagePath:
      "M17.954 2.781l.175.164 13.072 12.842-1.402 1.426-1.8-1.768L28 29a2 2 0 0 1-1.85 1.994L26 31H6a2 2 0 0 1-1.995-1.85L4 29V15.446l-1.8 1.767-1.4-1.426L13.856 2.958a3 3 0 0 1 4.097-.177zm-2.586 1.503l-.096.088L6 13.48 6 29l5-.001V19a2 2 0 0 1 1.85-1.995L13 17h6a2 2 0 0 1 1.995 1.85L21 19v9.999h5V13.48l-9.3-9.135a1.001 1.001 0 0 0-1.332-.06zM19 19h-6v9.999h6z",
    featureTitle: "Entire home",
    featureSubTitle: "You’ll have the tent to yourself.",
  },

  {
    svgImagePath:
      "M16 0c6.627 0 12 5.373 12 12 0 6.337-3.814 12.751-11.346 19.257L16 31.82l-1.076-.932C7.671 24.509 4 18.218 4 12 4 5.423 9.397 0 16 0zm0 2C10.504 2 6 6.525 6 12c0 5.44 3.249 11.118 9.831 17.02l.169.149.576-.518c6.178-5.65 9.293-11.092 9.42-16.318L26 12c0-5.523-4.477-10-10-10zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    featureTitle: "Great location",
    featureSubTitle: "100% of recent guests gave the location a 5-star rating.",
  },

  {
    svgImagePath:
      "M12 1c6.075 0 11 4.925 11 11 0 1.464-.287 2.888-.834 4.208l-.166.378 9 9V31h-5.414l-4.001-4H16v-4.753l-.155.062a10.95 10.95 0 0 1-3.001.66l-.446.024L12 23C5.925 23 1 18.075 1 12S5.925 1 12 1zm0 2a9 9 0 1 0 0 18c1.409 0 2.77-.323 4-.935l.305-.16.658-.358L18 20.587V25h4.414l4.001 4H29v-2.585l-9.453-9.453.359-.657A8.954 8.954 0 0 0 21 12a9 9 0 0 0-9-9zM9 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
    featureTitle: "Great check-in experience",
    featureSubTitle:
      "100% of recent guests gave the check-in process a 5-star rating.",
  },

  {
    svgImagePath:
      "M12 0v2h8V0h2v2h6a2 2 0 0 1 1.995 1.85L30 4v15.586a2 2 0 0 1-.467 1.284l-.119.13L21 29.414a2 2 0 0 1-1.238.578l-.176.008H7a5 5 0 0 1-4.995-4.783L2 25V4a2 2 0 0 1 1.85-1.995L4 2h6V0zM4 12v13a3 3 0 0 0 2.824 2.995L7 28h11v-5a5 5 0 0 1 4.783-4.995L23 18h5v-6zm23.585 8H23a3 3 0 0 0-2.995 2.824L20 23v4.585zM4 10h24V4h-6v2h-2V4h-8v2h-2V4H4z",
    featureTitle: "Cancellation policy",
    featureSubTitle:
      "Non-refundable at this price. You can pay extra during checkout to make this reservation refundable until 13 Jan.",
  },

  {
    svgImagePath:
      "M28.477 1.07a2 2 0 0 1 2.515 1.754L31 3v23.04a2 2 0 0 1-1.34 1.888l-.153.047-13 3.41a2 2 0 0 1-.813.041l-.201-.041-13-3.41a2 2 0 0 1-1.487-1.776L1 26.04V3a2 2 0 0 1 2.35-1.969l.173.039L16 4.448zM29 3L16.523 6.378a2 2 0 0 1-.873.039l-.173-.039L3 3v23.04l13 3.41 13-3.41zm-2 17.984v2l-9 2.5v-2zm0-7v2l-9 2.5v-2zm0-7v2l-9 2.5v-2z",
    featureTitle: "House rules",
    featureSubTitle:
      "This place isn’t suitable for children under 12 and the host doesn’t allow pets. ",
  },
];

function Features() {
  const classes = useStyles();
  return (
    <section className="features container py-5">
      <div className="row">
        <div className="col-12 col-sm-6">
          <Box className="d-flex justify-content-between align-items-end my-3">
            <div>
              <Typography align="left" variant="h5">Tent hosted by Uddibaba</Typography>
              <Typography color="textSecondary">
                12 guests · 6 bedrooms · 16 beds · 2 bathrooms
              </Typography>
            </div>

            <div>
              <img
                width="50px"
                src="https://a0.muscache.com/im/pictures/user/9ce6a530-2428-4368-8715-d57c5628312b.jpg?im_w=240"
                alt="uddibaba logo"
              />
            </div>
          </Box>
          <div className="features-items my-3">
            <hr className="w-auto h-auto mb-3" />
            {featureList.map((item, index) => {
              return (
                <GridListTile key={index} className={classes.featureList}>
                  <div className="d-flex">
                    <div className="d-flex ">
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: "24px",
                          width: "24px",
                          fill: "currentcolor",
                        }}
                        // style={{display :block, height: 24px, width: 24px; fill: currentcolor;}}
                      >
                        <path d={item.svgImagePath}></path>
                      </svg>
                    </div>

                    <div className="ml-3">
                      <Typography
                      align="left"
                        component="p"
                        className={classes.featureTitle}
                      >
                        {item.featureTitle}
                      </Typography>
                      <Typography
                      align="left"
                        component="p"
                        className={classes.featureSubTitle}
                        color="textSecondary"
                      >
                        {item.featureSubTitle}
                      </Typography>
                    </div>
                  </div>
                </GridListTile>
              );

              // console.log(item, "????");
            })}
            <hr className="w-auto h-auto" />
          </div>

          <div className="w-auto h-auto">
            <Typography component="p" align="left" className="mb-3">
              <strong>
              Book only if you're a Hiking enthusiast (800m down from Road).
              </strong>
            </Typography>

            <Typography component="p" align="left">
              Uddibaba Farm Stay is situated 15km away from Rishikesh city and
              30km away from Dehradun Airport. A perfectly handcrafted place on
              the foothills of Himalayan mountains with lot of natural resources
              like natural water pool, a rock cave , nature trials and most
              importantly the fresh food from our local farm.
            </Typography>
          </div>
        </div>
        <div className="col-12 col-sm-6 mt-5 mt-sm-0 ">
          <Fragment>
            <BookingForm />
          </Fragment>
        </div>
      </div>

    </section>
  );
}

export default Features;
