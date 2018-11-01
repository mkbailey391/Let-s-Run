import React, {Component} from 'react';
import axios from 'axios';
import Header from '../common/Header/Header';
import { Link } from 'react-router-dom';
import Card from '../common/Card/Card';


class Profile extends Component {
    // constructor(props){
    //     super(props)
    // }
    state = {
        groups: []
    }
    async componentDidMount() {
        let {currentUser} = this.props
        let response = await axios.get(`/api/users/${currentUser._id}`);
        console.log("response", response.data)
        let { groups } = response.data.showUser;
        console.log(groups)
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
                <h1>Your Profile</h1> 
                    <ul>
                        <li>Users Name</li>
                        <li>Gender</li>
                        <li>Age</li>
                        <li>Location</li>
                        <li>Training</li>
                        <li>Pace</li>
                        <li>Goal</li>
                        <li>Level</li>
                    </ul>
                    
                <h3>Your Groups</h3>
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