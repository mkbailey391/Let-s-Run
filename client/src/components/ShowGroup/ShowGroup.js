// import React, {Component} from 'react';
// import axios from 'axios';
// import Header from '../common/Header/Header';
// import { Link } from 'react-router-dom';
// import Card from '../common/Card/Card';


// class ShowGroup extends Component {
//     state = {
//         groups: [],
//         group: undefined,
//         name: "",
//         description: "",
//         location:"",
//         date: "",
//         time: "",
//         creator: undefined,
//         members: undefined
//     }
//     async componentDidMount() {

//         let response = await axios.get('/api/groups');
//         let { ShowGroup } = response.data;
//         if (groups.length > 0) {
//             this.setState({ ShowGroup });
//         } else {
//             this.setState({ message: "You have no saved groups"})
//         }
//     }
//     renderShowGroup = () => {
//         return this.state.groups.map(g => {
//             return (
//                 <Card group={g}/>
//             )
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <h1>{g.name}</h1>
//                 {this.renderGroups()}
//             </div>
//         )
//     }
// }

// export default ShowGroup;

//Individual group renders on the screen. 
// need the individual group id 
// 