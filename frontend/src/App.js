import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Home from './components/layout/Home';
import Navbar from './components/layout/Navbar';
import theme from './theme';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
          <Footer />
        </Fragment>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
