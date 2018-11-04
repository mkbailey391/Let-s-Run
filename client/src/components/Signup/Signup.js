import React, { Component } from 'react';
import Header from '../common/Header/Header';
import httpClient from '../../utilities/httpClient';
import Form from '../common/Form/Form';

class Signup extends Component {
  

    handleSubmit = async (e, user) => {
        let res = await httpClient.authenticate(user, "/api/users", "post");
        if (res) {
            this.props.onSignupSuccess();
            this.props.history.push('/')
        }      
    }

    render() {
        return (
            <div>
              <Header text={"Signup"}/>
              <Form onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default Signup;