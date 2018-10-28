import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/common/Layout/Layout';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import httpClient from './utilities/httpClient';


class App extends Component {
  state = { currentUser: httpClient.getCurrentUser() };

  onAuthSuccess = () => {
    this.setState({ currentUser:httpClient.getCurrentUser() });
  }
  onLogout = () => {
    httpClient.logOut();
    this.setState({ currentUser: null });
  }
  render() {
    let { currentUser } = this.state;
    let { onAuthSuccess, onLogout } = this;
    return (
      <Layout currentUser={currentUser}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Login" render={(props) =>{
            return <Login {...props} onLoginSuccess={onAuthSuccess}/>
          }}/>
          <Route path="/logout" render={() => {
            return <Logout onLogout={onLogout}/>
          }}/>
        </Switch>
      </Layout>
    )
  }
}

export default App;
