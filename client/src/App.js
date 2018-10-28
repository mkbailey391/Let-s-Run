import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/common/Layout/Layout';
import Navbar from './components/common/Navbar/Navbar';


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path = "/" component={Home}/>
        </Switch>
      </Layout>
    )
  }
}

export default App;
