import React from 'react';
import Landing from './Components/Landing/Landing';

import NavBar from './Components/NavBar/NavBar';

import Footer from './Components/Footer/Footer';
import routes from './routes';
import {withRouter} from "react-router-dom";


import './App.scss';


function App() {
  return (
    <>
    <div className="App" style={{position: 'relative', overflow: 'hidden'}}>
      <Landing />
    </div>
      <NavBar />
      {routes}
      <Footer />
    </>
  );
}

export default withRouter(App);
