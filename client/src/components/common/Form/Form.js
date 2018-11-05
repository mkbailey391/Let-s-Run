import React, { Component } from 'react';
// import Header from '../common/Header/Header';
// import httpClient from '../../utilities/httpClient';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

class Form extends Component {
    constructor (props) {
        super(props)

        //Could refactor so state contains user object
        this.state = { 
            email:"",
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
    }
   

    componentDidMount () {
        let { user } = this.props
        console.log(this.props)
        if(user){
            this.setState(user)
        }
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.props.onSubmit(e, this.state)
    }

    render() {
        let { email, password, name, gender, age, location, training, pace, goal, level } = this.state;
        let { handleChange, handleSubmit } = this;
        return (
            <div>
                
                <div className="row">
                    <div className="column column-50 column-offset-25">
                        <form onSubmit={handleSubmit}>
                        <div className="form-group">
                        <label>Name: </label>
                            <input className="form-control"
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={handleChange}
                                value={name}
                            />
                            </div>
                            <div className="form-group">
                            <label>Email: </label>
                            <input className="form-control"
                                type="text"
                                name="email"
                                placeholder="example@example.com"
                                onChange={handleChange}
                                value={email}
                            />
                            </div>
                            <div className="form-group">
                            <label>Password: </label>
                            <input className="form-control"
                                type="password"
                                name="password"
                                placeholder="Secret Password..."
                                onChange={handleChange}
                                value={password}
                            />
                            </div>
                            <h1>Tell Us About Yourself</h1>
                            <div className="form-group">
                            <label>Gender: </label>
                            <input className="form-control"
                                type="text"
                                name="gender"
                                placeholder="Male or Female"
                                onChange={handleChange}
                                value={gender}
                            />
                            </div>
                            <div className="form-group">
                            <label>Age: </label>
                            <input className="form-control"
                                type="text"
                                name="age"
                                placeholder="age"
                                onChange={handleChange}
                                value={age}
                            />
                            </div>
                            <div className="form-group">
                            <label>Location: </label>
                            <input className="form-control"
                                type="text"
                                name="location"
                                placeholder="Los Angeles"
                                onChange={handleChange}
                                value={location}
                            />
                            </div>
                            <div className="form-group">
                            <label>What Are you Training For?: </label>
                            <input className="form-control"
                                type="text"
                                name="training"
                                placeholder="5k..10k..Marathon"
                                onChange={handleChange}
                                value={training}
                            />
                            </div>
                            <div className="form-group">
                            <label>What's Your Pace?: </label>
                            <input className="form-control"
                                type="text"
                                name="pace"
                                placeholder="8:00 miles"
                                onChange={handleChange}
                                value={pace}
                            />
                            </div>
                            <div className="form-group">
                            <label>Do You Have a Goal?: </label>
                            <input className="form-control"
                                type="text"
                                name="goal"
                                placeholder="What are you working towards?"
                                onChange={handleChange}
                                value={goal}
                            />
                            </div>
                            <div className="form-group">
                            <label>Are You Competitive or Just Like to Run for Fun?: </label>
                            <input className="form-control"
                                type="text"
                                name="level"
                                placeholder="Beginner?... Intermediate?... Advanced?"
                                onChange={handleChange}
                                value={level}
                            />
                            </div>
                            <ButtonToolbar>
                                <Button type="submit">Submit</Button>
                            </ButtonToolbar>
                            
                        </form>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;