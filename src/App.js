import React from 'react'

import './Components/FontAwesomeIcons/index'

import Landing from './Components/Landing/Landing'
import routes from './routes'
import {withRouter} from "react-router-dom";

import Particles from 'react-particles-js'
import particlesConfig from './config/particlesConfig'

import './App.scss';


function App() {
  return (
    <>
    <div className="App" style={{position: 'relative', overflow: 'hidden'}}>
      <div className='particles' style={{position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <Landing />
    </div>
      {routes}
    </>
  );
}

export default withRouter(App);
