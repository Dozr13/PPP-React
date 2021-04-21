import React from 'react'
import {Switch, Route} from 'react-router-dom'

import About from './Components/Pages/About/About'
// import Blog from './Components/Pages/Blog/Blog'
import Contact from './Components/Pages/Contact/Contact'
import Home from './Components/Pages/Home/Home'
import Projects from './Components/Pages/Projects/Projects'


export default (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      {/* <Route path='/blog' component={Blog} /> */}
      <Route path='/projects' component={Projects} />
      <Route path='/contact' component={Contact} />
    </Switch>
)