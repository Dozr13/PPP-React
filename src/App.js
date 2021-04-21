import React from 'react';
import ViewProvider from './Components/ViewCtx/ViewCtx';
import Navbar from './Components/RNav/Navbar';
import Footer from './Components/Footer/Footer';
import routes from './routes';

import {withRouter} from 'react-router-dom';

import './Reset.scss';
import './App.scss';


const App = () => (
    <ViewProvider>
      <Navbar />
          {routes}
      <Footer />
    </ViewProvider>
  );

export default withRouter(App);
