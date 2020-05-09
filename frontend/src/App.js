import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Blog from './components/blog/Blog';
import Footer from './components/layout/Footer';
import Home from './components/layout/Home';
import Navbar from './components/layout/Navbar';
import Signin from './components/auth/SignUp';
import Template from './components/practice/Template';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/practice' component={Template} />
          <Route path='/blog' component={Blog} />
          <Route path='/signin' component={Signin} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
