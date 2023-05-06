import React from "react";
import './App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import Products from "./Page/Products/Products";
import Projects from "./Page/Projects/Projects";
import Contact from "./Page/Contact/Contact";
import AboutUs from "./Page/AboutUs/AboutUs";



function App() {
  return (
      <div>
          <div><Header/></div>
          <div className="container" style={{height:"100%"}}>
              <Router>
                  <Switch>
                      <Route path="/" exact component={HomePage} />
                      <Route path="/project" exact component={Projects} />
                      <Route path="/product" exact component={Products} />
                      <Route path="/contact" exact component={Contact} />
                      <Route path="/aboutus" exact component={AboutUs} />
                  </Switch>
              </Router>
          </div>
          <div><Footer /></div>
      </div>
  );
}

export default App;
