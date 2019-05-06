//Entry Point for the App

import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import withErrorBoundry from '../common/components/WithErrorBoundry';
import AppHeader from '../common/components/AppHeader';
import AppDrawer from '../common/components/AppDrawer';
import ShadowOffset from '../common/components/ShadowOffset';
import FormContainer from '../container/FormContainer';
import AboutUsContainer from '../container/AboutUsContainer';
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
        <main style={{ display: 'flex', justifyContent: 'center', marginTop:100, marginBottom:50}}>
          <BrowserRouter>
            <Fragment>
              <Route path="/Form" component={FormContainer}/>
              <Route path="/About_us" component={AboutUsContainer}/>
              <Route path="/" exact component={FormContainer}/>
            </Fragment>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}


export default withErrorBoundry(App);
