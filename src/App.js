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





function App() {
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
        <Route path="*" component = {Home}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
