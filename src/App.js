import React from "react";
import './App.css';
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import Products from "./Page/Products/Products";
import ProjectMenu from "./Page/Projects/ProjectMenu/ProjectMenu";
import Contact from "./Page/Contact/Contact";
import Clients from "./Page/AboutUs/Clients/Clients";
import Project from "./Page/Projects/Project/Project";
import PhotoAlbum from "./Page/Projects/Gallery/PhotoAlbum";
import HumanResources from "./Page/AboutUs/Human Resources/HumanResources";


function App() {
  return (
      <div>
          <div className="container" style={{height:"100%"}}>
              <Router>
                  <Switch>
                      <Route path="/" exact component={HomePage} />
                      <Route path="/projects" exact component={ProjectMenu} />
                      <Route path="/projects/:id" exact component={Project} />
                      <Route path="/projects/gallery/:id" exact component={PhotoAlbum} />
                      <Route path="/products" exact component={Products} />

                      <Route path="/contact" exact component={Contact} />
                      <Route path="/aboutus/hr" exact component={HumanResources} />
                      <Route path="/aboutus/clients" exact component={Clients} />
                  </Switch>
              </Router>
          </div>
          <div><Footer /></div>
      </div>
  );
}

export default App;
