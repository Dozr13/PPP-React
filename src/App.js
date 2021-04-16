import React from 'react';
import Landing from './Components/Landing/Landing';

import NavBar from './Components/NavBar/NavBar';

import ViewProvider from './Components/ViewCtx/ViewCtx';


import Footer from './Components/Footer/Footer';
import routes from './routes';
import {withRouter} from "react-router-dom";


import './App.scss';


const App = () => (
    <ViewProvider>
      <div className="App" style={{position: 'relative', overflow: 'hidden'}}>
        <Landing />
      </div>
      <NavBar />
        {routes}
      <Footer />
    </ViewProvider>
  );

export default withRouter(App);
