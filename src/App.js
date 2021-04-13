import React from 'react'
import Header from './Components/Header/Header'
import routes from './routes'
import {withRouter} from "react-router-dom";

import Particles from 'react-particles-js'
import particlesConfig from './config/particlesConfig'

import './App.scss';


function App() {
  return (
    <div className="App" style={{position: 'relative', overflow: 'hidden'}}>
      <div style={{position: 'absolute'}}>
        <Particles params={particlesConfig} />
      </div>
      <Header />
      {routes}
    </div>
  );
}

export default withRouter(App);
