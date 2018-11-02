import React, { Component } from 'react';
import Header from '../common/Header/Header';
import httpClient from '../../utilities/httpClient';
import Form from '../common/Form/Form';

class Signup extends Component {
    state = { 
        email: "",
        password: "",
        name: "",
        gender: "",
        age: "",
        location: "",
        training: "",
        pace: "",
        goal: "",
        level: ""
    }

    handleChange = (e) => {
        // let { name, value } = e.target;
        // this.setState({ [name]: value });
    }

    handleSubmit = async (e, user) => {
        alert(JSON.stringify(user))
        let res = await httpClient.authenticate(user, "/api/users", "post");
        if (res) {
            this.props.onSignupSuccess();
            this.props.history.push('/')
        }
        this.setState({ email: "", password: "", name:"", gender: "", age: "", location: "", training:"", pace: "", goal: "", level: "" });
      
    }

    render() {

        return (
            <div>
              <Header text={"Signup"}/>
              <Form user={this.state} onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default Signup;