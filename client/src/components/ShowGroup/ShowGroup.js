// import React, { Component } from 'react';
// import axios from 'axios';
// import Card from './Card';


// class ShowGroup extends Component {
//     state = { 
//         group: undefined,
//         name: "",
//         description: "", 
//         location: "",
//         date: "", 
//         time: "", 
//         picture: "",
// 		creator: //userid?,
// 		members: //member ids?
        
//     }

//     async componentDidMount() {
//         let { id } = this.props.match.params;
//         let response = await axios.get(`/api/groups/${id}`);
//         let { name, description, location, date, time, picture, //creator //memberid } = response.data.group
//         this.setState({ group: response.data.group, name, description, location, date, time, picture, //creator //memberId });
//     }

//     handleChange = (e) => {
//         let { name, value } = e.target;
//         this.setState({ [name]: value })
//     }

//     handleSubmit = async (e) => {
//         e.preventDefault();
//         let { name, image, player } = this.state;
//         let response = await axios.patch(`/api/groups/${group._id}`, { name, description, location, date, time, picture, //creator, //members });
//         this.setState({ 
//             group: response.data.group, 
//             name: response.data.group.name,
//             description: response.data.group.description,
//             location: response.data.group.location,
//             date: response.data.group.date,
//             time: response.data.group.time,
//             picture: response.data.group.picture,
//             //creator: 
//             //member:
//         })
//     }

//     handleClick = () => {
//         let editEnabled = !this.state.editEnabled
//         this.setState({ editEnabled })
//     }

//     handleDelete = async () => {
//         let { player } = this.state;
//         await axios.delete(`/api/players/${player._id}`);
//         this.props.history.push('/');
//     }

//     render() {
//         let { player, name, image, editEnabled } = this.state;
//         let { handleChange, handleSubmit, handleClick, handleDelete } = this;
//         if (player === undefined) return <h2>Loading...</h2>
//         return (
//             <div className="columns">
//                 <div className="column">
//                     <Card player={player}/>    
//                 </div>
//                 <div className="column">
//                     {editEnabled
//                         ? <Form 
//                         name={name}
//                         image={image}
//                         handleChange={handleChange}
//                         handleSubmit={handleSubmit}/> 
//                         : <div><button onClick={handleClick} className="button">Edit Form</button><button className="button" onClick={handleDelete}>Delete</button></div>
                        
//                     }
//                 </div>
//             </div>
//         );
//     }

// }


// export default ShowPlayer;