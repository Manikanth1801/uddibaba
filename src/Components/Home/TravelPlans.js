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
import Link from '@material-ui/core/Link';









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
  
  const cards = [1, 2, 3];

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
          <Grid container spacing={4}>
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
                    <Button size="large" color="primary" variant="contained" fullWidth >
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


{/* 
      <div className="holder">
      <Tilt option={{max:35, speed:600}}>

<div className="space" >
    <div className="imgBox">
        <img src="https://a0.muscache.com/im/pictures/dce09281-5d9a-4d79-a032-befb74aae05e.jpg?im_w=720" width="300px" height="180px" alt="classic Card" />
    </div>
    <div className="contentBox">
        <h3>
            Home Stay
        </h3>
        <span>MOnthly</span>
        <p>
           <span>Price <del>$348.99</del><h4>$289.99</h4> </span>
            </p>
        <button className="buyBtn" type="submit">Book Now</button>
    </div>
</div>

</Tilt>

        
        <Tilt option={{max:35, speed:600}}>

        <div className="space" >
            <div className="imgBox">
                <img src="https://a0.muscache.com/im/pictures/dce09281-5d9a-4d79-a032-befb74aae05e.jpg?im_w=720" width="300px" height="210px" alt="classic Card" />
            </div>
            <div className="contentBox">
                <h3>
                    Home Stay
                </h3>
                <span>Day-Wise</span>
                <p>
                   <span>Price <del>$349.99</del><h4>$299.99</h4> </span>
                    </p>
                <button className="buyBtn" type="submit">Book Now</button>
            </div>
        </div>

        </Tilt>
        

        <Tilt option={{max:35, speed:600}}>
        <div className="space">
            <div className="imgBox">
                <img src="https://a0.muscache.com/im/pictures/dce09281-5d9a-4d79-a032-befb74aae05e.jpg?im_w=720" width="340px" height="210px" alt="classic Card" />
            </div>
            <div className="contentBox">
                <h3>
                    Nomadic
                </h3>
                <span>Digital Nomad</span>
                <p>
                   <span>Price <del>$299.99</del><h4>$254.99</h4> </span>
                    </p>
                    <button className="buyBtn" type="submit">Book NOw</button>
            </div>
        </div>
        </Tilt>
    </div> */}


    </Fragment>
  );
}


export default Plans


























// import React, { Fragment } from 'react';
// import Flippy ,{FrontSide, BackSide} from 'react-flippy';









// const FlippyStyle = {
//     width: '300px',
//     height: '300px',
//     textAlign: 'center',
//     color: '#FFF',
//     fontFamily: 'sans-serif',
//     fontSize: '30px',
//     justifyContent: 'center',
//     margin:"30px"
//   }
  
  
//   const DefaultCardContents = ({ children }) => (
//     <React.Fragment>
//       <FrontSide
//         style={{
//           backgroundColor: '#41669d',
//           display: 'flex',
//           alignItems: 'center',
//           flexDirection: 'column'
//         }}
//       >
//         <img
//           src="https://picsum.photos/900/500 "
//           alt='...img'
//           style={{ maxWidth: '100%', maxHeight: '100%' }}
//         />
//         Test
//         <span 
//           style={{
//             fontSize:'12px',
//             position: 'absolute',
//             bottom: '10px',
//             width: '100%'
//           }}>
//           {children}<br />
//           (FRONT SIDE)
//         </span>
//       </FrontSide>
//       <BackSide
//         style={{
//           backgroundColor: '#175852',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           flexDirection: 'column'
//         }}>
//         ROCKS
//         <span 
//           style={{
//             fontSize:'12px',
//             position: 'absolute',
//             bottom: '10px',
//             width: '100%'
//           }}>
//           {children}<br />
//           (BACK SIDE)
//         </span>
//       </BackSide>
//     </React.Fragment>);
  
//   const FlippyOnHover = ({ flipDirection = 'horizontal' }) => (
//     <Flippy
//       flipOnHover={true}
//       flipDirection={flipDirection}
//       style={FlippyStyle}
//     >
        
//       <DefaultCardContents>
//       HoneyMoon Plan <br/>
//       <button type="button" onClick={() => this.flippyHorizontal.toggle()}>Select</button>
//       </DefaultCardContents>
//     </Flippy>
//   );
  
  
  
  
  
//   export default class Plans extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         isFlipped: false
//       };
  
//       setInterval(() => {
//         this.setState({
//           isFlipped: !this.state.isFlipped
//         });
//       }, 3000);
//     }
  
//     render() {
//       return (
//         <div className="Flipy">
//           <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap' }}>
//               <Flippy
//                 ref={(r) => this.flippyHorizontal = r}
//                 flipOnHover={true}
//                 flipOnClick={false}
//                 style={FlippyStyle}
//               >
//               <DefaultCardContents>
//                 IThe Christmas plan<br />
//                 <button type="button" onClick={() => this.flippyHorizontal.toggle()}>Select</button>
//               </DefaultCardContents>
//             </Flippy>

//             <FlippyOnHover/>
//             <FlippyOnHover/>


             
//           </div>
//         </div>
//       );
//     }
//   }

















// // const Plans = () =>{

// //   return(
// //     <section className="block relative z-1 ">
// //         <div className="holder mx-auto">
// //           <div className="justify-center flex flex-wrap">
// //             <div className="w-full lg:w-12/12 px-4  -mt-24">
// //               <div className="flex flex-wrap">
// //                 <div className="w-full lg:w-4/12 px-4">
// //                   <h5 className="text-xl font-semibold pb-4 text-center">
// //                     Regular Pakage
// //                   </h5>
// //                   {/* <Link to="/auth/login"> */}
// //                     <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
// //                       <img
// //                         alt="..."
// //                         className="align-middle border-none max-w-full h-auto rounded-lg"
// //                         src="https://picsum.photos/300/200"
// //                       />
                      
// //                     </div>
// //                   {/* </Link> */}
// //                 </div>

// //                 <div className="w-full lg:w-4/12 px-4">
// //                   <h5 className="text-xl font-semibold pb-4 text-center">
// //                     Adventure Pakage
// //                   </h5>
// //                   {/* <Link to="/profile"> */}
// //                     <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
// //                       <img
// //                         alt="..."
// //                         className="align-middle border-none max-w-full h-auto rounded-lg"
// //                         src="https://picsum.photos/300/200"
// //                       />
// //                     </div>
// //                   {/* </Link> */}
// //                 </div>

// //                 <div className="w-full lg:w-4/12 px-4">
// //                   <h5 className="text-xl font-semibold pb-4 text-center">
// //                     Digital Nomadic
// //                   </h5>
// //                   {/* <Link to="/landing"> */}
// //                     <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
// //                       <img
// //                         alt="..."
// //                         className="align-middle border-none max-w-full h-auto rounded-lg"
// //                         src="https://picsum.photos/300/200"
// //                       />
// //                     </div>
// //                   {/* </Link> */}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //   );
// // }





// // export default Plans;









