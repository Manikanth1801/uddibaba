import { Paper } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import "./BookingForm.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import { DateRangePicker, DateRange } from "materialui-daterange-picker";
// import Select from "react-select";

const useStyles = makeStyles((theme) => ({
  dateLabel: {
    fontSize: "10px !important",
    // line-height: 12px !important;
    color: "rgb(34, 34, 34) !important",
    textTransform: "uppercase !important",
    fontWeight: "800 !important",
  },
}));

function BookingForm() {
  const [isDropdownOpen, setDropDownStatus] = useState(false);

  const classes = useStyles();
  return (
    <Fragment>
      <div className="bookingForm w-75 m-auto ">
        <Paper>
          <form>
            <Card className="" variant="outlined">
              <CardContent>
                <div className="bookingFormHeader d-flex justify-content-between">
                  <div className="d-flex align-items-center ">
                    <Typography variant="h4">₹745/</Typography>
                    <Typography varient="subtitle1">night</Typography>
                  </div>
                  <div className="d-flex align-items-center">
                    {" "}
                    <Typography varient="h6" color="primary">
                      {" "}
                      ★
                    </Typography>{" "}
                    <Typography>4.63</Typography>
                    <Typography color="textSecondary">(8)</Typography>
                  </div>
                </div>
                <div className="bookingFormBody mt-4">
                  <div className="border rounded position-relative">
                    <div className="d-flex">
                      <div className="w-50 px-3 pt-3">
                        <Typography
                          variant="subtitle1"
                          className={classes.dateLabel}
                        >
                          Check-IN
                        </Typography>

                        <Typography color="textSecondary">Add date</Typography>
                      </div>
                      <div className="w-50 px-3 pt-3">
                        <Typography
                          variant="subtitle2"
                          className={classes.dateLabel}
                        >
                          Check-OUT
                        </Typography>
                        <Typography color="textSecondary">Add date</Typography>
                      </div>
                    </div>
                    <hr className="mt-0" />
                    <div className="d-flex justify-content-between">
                      <div className="px-3 pb-3">
                        <Typography
                          variant="subtitle1"
                          className={classes.dateLabel}
                        >
                          GUESTS
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                          1 guest
                        </Typography>
                      </div>

                      <div
                        className="px-3 pb-3 d-flex align-items-center"
                        style={{ cursor: "pointer" }}
                        onClick={() => setDropDownStatus(!isDropdownOpen)}
                      >
                        {isDropdownOpen ? (
                          <svg
                            viewBox="0 0 18 18"
                            role="presentation"
                            aria-hidden="true"
                            focusable="false"
                            style={{
                              height: "16px",
                              width: "16px",
                              display: "block",
                              fill: "currentcolor",
                            }}
                            // style="height: 16px; width: 16px; display: block; fill: currentcolor;"
                          >
                            <path
                              d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        ) : (
                          <svg
                            viewBox="0 0 18 18"
                            role="presentation"
                            aria-hidden="true"
                            focusable="false"
                            style={{
                              height: "16px",
                              width: "16px",
                              display: "block",
                              fill: "currentcolor",
                            }}
                            // style="height: 16px; width: 16px; display: block; fill: currentcolor;"
                          >
                            <path
                              d="m1.71 13.71a1 1 0 1 1 -1.42-1.42l8-8a1 1 0 0 1 1.41 0l8 8a1 1 0 1 1 -1.41 1.42l-7.29-7.29z"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        )}
                      </div>
                    </div>

                    {isDropdownOpen ? (
                      <div className="dropdownM position-absolute">
                        <Paper fullWidth className=" px-3">
                          DropDown
                        </Paper>
                      </div>
                    ) : null}
                  </div>
                </div>

                <Button
                  fullWidth
                  className="mt-4  checkAvailability"
                  variant="contained"
                  color="secondary"
                >
                  Check availability
                </Button>
              </CardContent>
            </Card>
          </form>
        </Paper>
      </div>
    </Fragment>
  );
}

export default BookingForm;
