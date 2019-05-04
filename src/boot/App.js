//Entry Point for the App

import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { compose } from 'recompose'
import CssBaseline from '@material-ui/core/CssBaseline';
import HomeLayout from '../layouts/HomeLayout';
import withErrorBoundry from '../common/components/WithErrorBoundry';
import AppHeader from '../common/components/AppHeader';
import AppDrawer from '../common/components/AppDrawer';
import ShadowOffset from '../common/components/ShadowOffset';

class App extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div >
        <CssBaseline />
        <AppHeader open={open} handleDrawerOpen={this.handleDrawerOpen} />
        <AppDrawer open={open} handleDrawerClose={this.handleDrawerClose} />

        {open &&// as visibility of shadowoffset is optional
          <React.Fragment>
            <ShadowOffset handleDrawerClose={this.handleDrawerClose} />
          </React.Fragment>
        }
        <main style={{ display: 'flex', marginTop: 100, marginLeft: 50, marginRight: 50 }}>
          <BrowserRouter>
            <Fragment>
              <Route path="/Settings"/>
              <Route path="/Hospitals" />
              <Route path="/Form" />
              <Route path="/About_us" />
              <Route exact path="/" component={HomeLayout} />
            </Fragment>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}


export default compose(
  withErrorBoundry,
)(App);
