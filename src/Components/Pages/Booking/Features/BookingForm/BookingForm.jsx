import { IconButton, InputLabel, MenuItem, Paper, Select } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField,  } from 'final-form-material-ui';
import "./BookingForm.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  CssBaseline,
  
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers'
import {  AddRounded, RemoveRounded } from "@material-ui/icons";
import Content from "../../../../../Content/HomeContent";
import firebase from '../../../../../firebase'
// import CardActions from "@material-ui/core/CardActions";
// import { DateRangePicker, DateRange } from "materialui-daterange-picker";
// import Select from "react-select";

const useStyles = makeStyles((theme) => ({
  dateLabel: {
    // fontSize: "10px !important",
    // line-height: 12px !important;
    color: "rgb(34, 34, 34) !important",
    textTransform: "uppercase !important",
    // fontWeight: "800 !important",
  },
}));






const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  console.log("hii++++++++++++++++++++++++++++++++++++++++++++----------------------------", values)
  console.log(paymentURL);
  resultPage(finalData);
  // window.alert(JSON.stringify(values, 0, 2));
  window.location.assign(`${paymentURL}`);

  
};



let finalData={};
let paymentURL="";

const spreadEvent = (e, values,Selected)=>{
  values.plan=Selected
  finalData=values;
  switch (finalData.plan) {
    case "Plan A":
      return paymentURL = "https://rzp.io/l/UddiPlanA"
      break;
    case "Plan B":
      return paymentURL = "https://rzp.io/l/UddiPlanB"
      break;

    case "Plan C":
      return paymentURL = "https://rzp.io/l/UddiPlanC"
      break;
  
    default:
      return paymentURL = "https://rzp.io/l/UddiPlanA"
      break;
  }
}

const resultPage=(finalData)=>{
  console.log("hii++++++++++++++++++++++++++++++++++++++++++++----------------------------", finalData)
  const db = firebase.firestore()
  db.collection("Booking List").add(finalData);
  return(
    <div>

    </div>
  );
}



const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  if (!values.phone){
    errors.phone = 'Required';
  }


  return errors;
};



function BookingForm(props) {
  



  //select plan code
  const [Plans, setPlans] = React.useState([
    "Plan A",
    "Plan B",
    "Plan C",
  ]);
  const [Selected, setSelected] = useState("Plan A");



  function handleChange(event) {
    
    return setSelected(event.target.value);
    
  }
  
  
  console.log(Selected);


  const classes = useStyles();
  return (
    <Fragment>
      <div className="bookingForm w-75 m-auto " id="bookingForm">
      <Form
        onSubmit={onSubmit}
        initialValues={{  }}
        validate={validate}
        render={({ handleSubmit, submitting,  values }) =>{ 
          
          return (
        <Paper className="">
          <form onSubmit={handleSubmit}>
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

                    </div>
                    <hr className="mt-1" />
                    <div className="d-flex justify-content-between">
                      <div className="px-4 py-3">
                        <div className="row">
                        <Grid className="px-3 pt-3 col-6" item  xs={6}>
                      <Field
                        fullWidth
                        required
                        name="firstName"
                        component={TextField}
                        type="text"
                        label="First Name"
                      />
                    </Grid>
                    <Grid className="px-3 pt-3 col-6" item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="lastName"
                    component={TextField}
                    type="text"
                    label="Last Name"
                  />
                </Grid>
                <Grid className="px-3 pt-3 col-6" item xs={12}>
                  <Field
                    name="email"
                    fullWidth
                    required
                    component={TextField}
                    type="email"
                    label="Email"
                  />
                </Grid>
                <Grid className="px-3 pt-3 col-6" item xs={12} md={6}>
                  <Field
                    name="phone"
                    fullWidth
                    required
                    component={TextField}
                    type="phone"
                    label="Phone"
                  />
                </Grid>
                <Grid className="px-3 pt-2 col-6" item xs={12} md={6}>
                <InputLabel htmlFor="agent-simple">Plan Type</InputLabel>
                          <Select
                          fullWidth
                            value={Selected}
                            onChange={(e)=>{handleChange(e)}}
                            required
                            inputProps={{
                              name: "Plan",
                              id: "age-simple"
                            }}
                          >
                            {Plans.map((value) => {
                              return <MenuItem value={value}>{value}</MenuItem>;
                            })}
                          </Select>
                </Grid>
                          
                        
                          
                        </div>


                        
                      </div>

                    </div>

                    
                  </div>
                </div>

                <Button
                onClick={(e)=>{spreadEvent(e,values,Selected)}}
                  fullWidth
                  className="mt-4  checkAvailability"
                  variant="contained"
                  color="secondary"
                  type="submit"
                    disabled={submitting}
                    // onClick={sendData}
                >
                  Payment & other Details
                </Button>
              </CardContent>
            </Card>
          </form>
        </Paper>
        )}}/>
        
      </div>
    </Fragment>
  );
}

export default BookingForm;
