import React, {Component} from 'react';
import axios from 'axios';
import Header from '../common/Header/Header';
import { Link } from 'react-router-dom';
import Form from '../common/Form/Form';
import Cards from 'react-bootstrap/lib/Card';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import httpClient from '../../utilities/httpClient';


class Profile extends Component {
    // constructor(props){
    //     super(props)
    // }
    state = {
        groups: [],
        profile: null,
        editable:true
    }
    async componentDidMount() {
        let {currentUser} = this.props
        let response = await axios.get(`/api/users/${currentUser._id}`);  //Obtains group info
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
                <Cards group={g}/>
            )
        })
    }
    handleSubmit = async (e, user) =>{
        let {currentUser} = this.props

        let res = await httpClient.authenticate(user, `/api/users/${currentUser._id}`, "patch");
        if (res) {
            this.props.onUpdateSuccess();
        }
    }
    render(){
        let { currentUser } = this.props;

        //todo clean up with destructuring
        return(
            <div>
                <h1>Your Profile</h1> 

                <div> 
                {
                    !this.state.editable && 
                    <ul>
                    <ListGroup>
                        <ListGroup.Item>{currentUser.name}</ListGroup.Item>
                        <ListGroup.Item>{currentUser.age}</ListGroup.Item>
                        <ListGroup.Item>{currentUser.gender}</ListGroup.Item>
                        <ListGroup.Item>{currentUser.location} ac</ListGroup.Item>
                        <ListGroup.Item>{currentUser.training}</ListGroup.Item>
                        <ListGroup.Item>{currentUser.pace}</ListGroup.Item>
                        <ListGroup.Item>{currentUser.goal}</ListGroup.Item>
                        <ListGroup.Item>{currentUser.training}</ListGroup.Item>
                    </ListGroup>
                    </ul>
                }
                </div>
                {
                    this.state.editable && 
                    <div>
                      <Form user={currentUser} onSubmit={this.handleSubmit} />
                     </div>
                }
                {

                }
                
                    <ButtonToolbar>
                        <Button variant="primary">Edit</Button>
                        <Button variant="primary">Delete</Button>
                    </ButtonToolbar>
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