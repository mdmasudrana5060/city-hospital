import React from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import About from "./pages/About/About";
import Registration from "./pages/Registration/Registration";
import LogIn from "./pages/LogIn/LogIn";





function App() {
  return (

    <div>

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>


          <Route path="/login">
            <LogIn></LogIn>
          </Route>
        </Switch>
        <Footer></Footer>

      </Router>





    </div>


  );
}

export default App;
