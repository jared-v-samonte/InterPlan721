import React from 'react';
import {Route, Router} from 'react-router-dom';
import ImageViewer from './ImageViewer.js'
import HomePage from './HomePage.js'

const Main = () => {
  return (
    <Router basename='.'>  {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='./ImageViewer' component={HomePage}></Route>
      <Route exact path='./HomePage' component={ImageViewer}></Route>
    </Router>
  );
}

export default Main