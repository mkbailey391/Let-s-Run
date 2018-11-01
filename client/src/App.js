import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/common/Layout/Layout';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Signup from './components/Signup/Signup';
import Profile from './components/Profile/Profile';
import Create from './components/Create/Create';
import ShowGroup from './components/ShowGroup/ShowGroup';
import httpClient from './utilities/httpClient';


class App extends Component {
  state = { 
    currentUser: httpClient.getCurrentUser(), 
    allGroups: [ {
        "members": [],
        "_id": "5bd9fb3cde7f6384f73ea89a",
        "name": "Girls on the Run4",
        "description": "Test",
        "location": "Venice",
        "time": "10:30AM",
        "date": "10/31/2018",
        "picture": "fake news",
        "creator": "5bd9fb14de7f6384f73ea899",
        "__v": 0
    }] 
};

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
          <Route exact path="/" 
                render={props => <Home {...props} groups={this.state.allGroups}/>
          }/>
          <Route path="/Login" render={(props) =>{
            return <Login {...props} onLoginSuccess={onAuthSuccess}/>
          }}/>
          <Route path="/logout" render={() => {
            return <Logout onLogout={onLogout}/>
          }}/>
          <Route path="/signup" render={(props) => {
            return <Signup {...props} onSignupSuccess={onAuthSuccess}/>
          }}/>
          {/* <Route path="/profile" component={() => {
            return currentUser ? <Profile/> : <Redirect to="/login"/>
          }}/> */}
        <Route path="/profile" render={props => currentUser ? <Profile {...props} currentUser={currentUser}/> : <Redirect to="/login"/>}/>
          <Route path="/new" component={(props) =>{
            return currentUser ? <Create {...props}/> : <Redirect to="/login"/>
          }}/>
        </Switch>
      </Layout>
    )
  }
}

export default App;
