import React from 'react';

import NavBar from './Components/NavBar/NavBar';

import ViewProvider from './Components/ViewCtx/ViewCtx';


import Footer from './Components/Footer/Footer';
import routes from './routes';
import {withRouter} from "react-router-dom";

import './Reset.scss';
import './App.scss';


const App = () => (
    <ViewProvider>
      <NavBar />
        {routes}
      <Footer />
    </ViewProvider>
  );

export default withRouter(App);
