import React from 'react';
import ViewProvider from './Components/ViewCtx/ViewCtx';
import Navbar from './Components/RNav/Navbar';
import Topbar from './Components/RNav/Topbar/Topbar';

import Footer from './Components/Footer/Footer';
import routes from './routes';

import {BrowserRouter as Router, withRouter} from 'react-router-dom';

import './Reset.scss';
import './App.scss';


const App = () => (
    <ViewProvider>
      <Navbar />
        <Router>
          {routes}
        </Router>
      <Footer />
    </ViewProvider>
  );

export default withRouter(App);
