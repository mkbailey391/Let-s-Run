import React, {Component} from 'react';
import axios from 'axios';
import Header from '../common/Header/Header';
import { Link } from 'react-router-dom';
import Cards from '../common/Card/Card';
import httpClient from '../../utilities/httpClient';


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

    toggleJoin = async (id, type) => {
        let method = (type === "LEAVE" ? "delete": "post")
        try {
            await httpClient({ url: `/api/groups/${id}/users`, method });
            this.fetchGroups();
        } catch(err) {
            console.log(err);
        }
    };
    

    renderGroups = () => {
        //let loggedIn = !!this.props.currentUser
        let { currentUser } = this.props;
        let favorited;
        return this.state.groups.map(g => {
            if (currentUser) {
                let memberOf = g.members.indexOf(currentUser._id.toString());
                console.log(g.name, memberOf)
                favorited = memberOf > -1 ? true : false;
                console.log(g.name, favorited)
            } else {
                favorited = false;
            }
            return (
                <Cards 
                    key={g._id} 
                    currentUser={currentUser} 
                    favorited={favorited} 
                    toggleJoin={this.toggleJoin}
                    toggleLeave={this.toggleLeave}
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