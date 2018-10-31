import React, {Component} from 'react';
import axios from 'axios';
import Header from '../common/Header/Header';
import { Link } from 'react-router-dom';
import Card from '../common/Card/Card';


     /*
        1. use the map method on props.groups
        2. for each group we are on return the card with the particular group
     */

class Home extends Component {
    state = {
        groups: [],
        message: ""
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
            {this.renderGroups}
        </div>
    )
}
}

export default Home;