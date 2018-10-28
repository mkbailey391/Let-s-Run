import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/common/Layout/Layout';
import Navbar from './components/common/Navbar/Navbar';
import Login from './components/Login/Login';
import httpClient from './utilities/httpClient';


class App extends Component {
  state = { currentUser: httpClient.getCurrentUser() };

  onAuthSuccess = () => {
    this.setState({ currentUser:httpClient.getCurrentUser() });
  }

  render() {
    let { currentUser } = this.state;
    let { onAuthSuccess } = this;
    return (
      <Layout currentUser={currentUser}>
        <Switch>
          <Route exact path = "/" component={Home}/>
          <Route path ="/Login" render={(props) =>{
            return <Login {...props} onLoginSuccess={onAuthSuccess}/>
          }}/>
        </Switch>
      </Layout>
    )
  }
}

export default App;
