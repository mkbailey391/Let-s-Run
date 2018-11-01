import React, {Component} from 'react';
import axios from 'axios';
import Header from '../common/Header/Header';
import { Link } from 'react-router-dom';
import Card from '../common/Card/Card';
import httpClient from '../../utilities/httpClient';


     /*
        1. use the map method on props.groups
        2. for each group we are on return the card with the particular group
     */

class Home extends Component {
    state = {
        groups: []
    }

    fetchGroups = async () => {
        let response = await axios.get('/api/groups');
        let { groups } = response.data;
        if (groups.length > 0) {
            this.setState({ groups });
        } else {
            this.setState({ message: "No groups to display"})
        }
    }

    async componentDidMount() {
        await this.fetchGroups();    
    }

    handleFavorite = async (id) => {
        let res = await httpClient({ url: `/api/groups/${id}/users`, method: "post" });
        if (res.data.success) {
            console.log(this.fetchGroups())
            await this.fetchGroups();
        }   
    }
    

    renderGroups = () => {
        // let loggedIn = !!this.props.currentUser
        let { currentUser } = this.props
        return this.state.groups.map(g => {
            let memberOf = g.members.indexOf(currentUser._id);
            let favorited = memberOf > 0 ? true : false;
            return (
                <Card 
                    key={g._id} 
                    currentUser={currentUser} 
                    favorited={favorited} 
                    handleFavorite={this.handleFavorite}
                    group={g}/>
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

export default Home;

//The cards on this page need to be redireced to save on the home page. 