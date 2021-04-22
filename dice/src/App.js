import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Header from './components/Header'
import crosswalk from './pages/crosswalk';
import bca_page from './pages/bca_page';


function App(){
  return(
    <Router>
      <div>
        <Header />
        <Nav />
        <Switch>
          <Route each path ='/crosswalk' component={ crosswalk }/>
          <Route each path ='/bca_page' component={ bca_page }/>
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;
