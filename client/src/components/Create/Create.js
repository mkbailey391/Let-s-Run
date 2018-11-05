import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

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
        let res = await axios.post('/api/groups', { name, description, location, date, time, image });
        this.props.history.push('/');
    }

    render() {
        let { name, description, location, date, time, image } = this.state;
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
                        <label>Group Description </label>
                        <input className="form-control"
                            type="text"
                            name="description"
                            placeholder="group description"
                            onChange={handleChange}
                            value={description}
                        />
                        </div>
                        <div className="form-group">
                        <label>Date </label>
                        <input className="form-control"
                            type="text"
                            name="date"
                            placeholder="Date of meeting"
                            onChange={handleChange}
                            value={date}
                        />
                        </div>
                        <div className="form-group">
                        <label>Time </label>
                        <input className="form-control"
                            type="text"
                            name="time"
                            placeholder="What time are you meeting?"
                            onChange={handleChange}
                            value={time}
                        />
                        </div>
                        <div className="form-group">
                        <label>Group Picture </label>
                        <input className="form-control"
                            type="text"
                            name="image"
                            placeholder="image"
                            onChange={handleChange}
                            value={image}
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
export default CreateGroup;