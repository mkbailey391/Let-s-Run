import React, {Component} from 'react';
import axios from 'axios';
import Header from '../common/Header/Header';
import { Link } from 'react-router-dom';
import Card from '../common/Card/Card';


     /*
        1. use the map method on props.groups
        2. for each group we are on return the card with the particular group
     */

class Profile extends Component {
    state = {
        groups: []
    }
    async componentDidMount() {

        let response = await axios.get('/api/groups');
        let { groups } = response.data;
        if (groups.length > 0) {
            this.setState({ groups });
        } else {
            this.setState({ message: "No groups to display"})
        }
    }
    renderGroups = () => {
        return this.state.groups.map(g => {
            return (
                <Card group={g}/>
            )
        })
    }

    render(){
        return(
            <div>
                <h1>Hit the Ground Running!</h1>
                {this.renderGroups()}
            </div>
        )
    }
}

export default Profile;


//Users should be able to save groups they want to join
//Users should be able to edit their profile
//Users should be able to delete their profile. 
//The group ID and the User's Id need to be matched so that the correct group displays on the correct user's profile

//How do I do this with this type of authentication?