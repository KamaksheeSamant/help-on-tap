//Entry Point for the App

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout';

class App extends Component {

  render() {
    return (
      <div className="App" style={{ height: '100%' }}>
            <BrowserRouter>
              <div>
                <Route exact path="/"component={HomeLayout}/>
                <Route path="/SETTINGS"/>
                <Route path="/HOME" />
                <Route path="/ABOUT_US"/>
              </div>
            </BrowserRouter>
      </div>
    );
  }
}

export default App;
