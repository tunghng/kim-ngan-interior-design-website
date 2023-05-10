import React from "react";
import './App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import Products from "./Page/Products/Products";
import ProjectMenu from "./Page/Projects/ProjectMenu/ProjectMenu";
import Contact from "./Page/Contact/Contact";
import AboutUs from "./Page/AboutUs/AboutUs";
import Project from "./Page/Projects/Project/Project";


function App() {
  return (
      <div>
          <div><Header/></div>
          <div className="container" style={{height:"100%"}}>
              <Router>
                  <Switch>
                      <Route path="/" exact component={HomePage} />
                      <Route path="/projects" exact component={ProjectMenu} />
                      <Route path="/projects/:id" exact component={Project} />
                      <Route path="/products" exact component={Products} />
                      <Route path="/products/:id" exact component={Products} />
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
