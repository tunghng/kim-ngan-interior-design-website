import React from "react";
import './App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";

function App() {
  return (
      <div>
          <div><Header/></div>
          <div className="container" style={{height:"100%"}}>
              <Router>
                  <Switch>
                      <Route path="/" exact component={HomePage} />
                  </Switch>
              </Router>
          </div>
          <div><Footer /></div>
      </div>
  );
}

export default App;
