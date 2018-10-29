import React, { Component } from 'react';
import axios from 'axios';

class CreateGroup extends Component {
    state = { 
        name: "",
        description: "",
        location: "",
        date: "",
        time: "",
        image: "", 
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let { name, description, location, date, time, image  } = this.state;
        await axios.post('/api/groups', { name, description, location, date, time, image });
        this.props.history.push('/');
    }

    render() {
        let { name, description, location, date, time, image } = this.state;
        let { handleChange, handleSubmit } = this;
        return (
            <div>
                <h1>Create a Group</h1>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label"> Group Name</label>
                        <div className="control">
                            <input 
                                className="input" 
                                name="name" 
                                type="text" 
                                placeholder="We Love to Run!"
                                onChange={handleChange} 
                                value={name}/>
                        </div>
                        </div>
                    <div className="field">
                        <label className="label">Group Description</label>
                        <div className="control">
                            <input 
                                className="input" 
                                name="description" 
                                type="text" 
                                placeholder="5k Training Group"
                                onChange={handleChange} 
                                value={description}/>
                        </div>
                        </div>
                    <div className="field">
                        <label className="label">Location</label>
                        <div className="control">
                            <input 
                                className="input" 
                                name="location" 
                                type="text" 
                                placeholder="Santa Monica Peir"
                                onChange={handleChange} 
                                value={location}/>
                        </div>
                        </div>
                    <div className="field">
                        <label className="label">Date</label>
                        <div className="control">
                            <input 
                                className="input" 
                                name="date" 
                                type="text" 
                                placeholder="10/31/2018"
                                onChange={handleChange} 
                                value={date}/>
                        </div>
                        </div>
                    <div className="field">
                        <label className="label">Time</label>
                        <div className="control">
                            <input 
                                className="input" 
                                name="time" 
                                type="text" 
                                placeholder="10:00 am"
                                onChange={handleChange} 
                                value={time}/>
                        </div>
                        </div>
                    <div className="field">
                        <label className="label">Photo</label>
                        <div className="control">
                            <input 
                                className="input" 
                                name="photo" 
                                type="text" 
                                placeholder="Group Picture!" 
                                onChange={handleChange}
                                value={image}/>
                        </div>
                        <div className="control">
                            <button className="button is-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateGroup;