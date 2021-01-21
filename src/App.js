import './App.css';
import Home from './Components/Home/Home';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import Contact from './Components/Pages/ContactUs/Contact';
import Event from './Components/Pages/Events/Event';
import Blog from './Components/Pages/Blog/Blog';
import Booking from './Components/Pages/Booking/Booking';
import Header from './Components/Header/Header'
import { Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Content from './Content/HomeContent';
import { useEffect, useState } from 'react';
import firebase from './firebase';


const Error = () => {
  return <Home/>;
}


function App() {

  const [BookingList, setBookingList] = useState([]);
  
  useEffect(() => {
    const fetchData = async ()=>{
      const db = firebase.firestore()
      const data = await db.collection("Booking List").get()
      setBookingList(data.docs.map(doc => doc.data()));
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      {/* <Header/> */}
      <Switch>
        <Route exact path='/' component = {Home}/>
        <Route exact path='/about' component = {AboutUs}/>
        <Route exact path='/contact' component = {Contact}/>
        <Route exact path='/event' component = {Event}/>
        <Route exact path='/blog' component = {Blog}/>
        <Route exact path='/booking' component = {Booking}/>
        <Route component = {Error}/>
      </Switch>
      <Footer/>
      {/* <div className="razorpay-embed-btn" data-url="https://pages.razorpay.com/pl_GRjJTZtlIIfoe6/view" data-text="Pay Now" data-color="#528FF0" data-size="large">
    {(function(){
      var d=document; var x=!d.getElementById('razorpay-embed-btn-js')
      if(x)
      { var s=d.createElement('script');
       s.defer=!0;s.id='razorpay-embed-btn-js';
      s.src='https://cdn.razorpay.com/static/embed_btn/bundle.js';
      d.body.appendChild(s);} else{var rzp=window['__rzp__'];
      rzp && rzp.init && rzp.init()}})()
      } 
  
</div>
      */}
    

  </div>
  );
}

export default App;
