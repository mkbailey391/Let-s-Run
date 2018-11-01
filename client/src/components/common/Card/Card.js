import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import httpClient from '../../../utilities/httpClient';

class Card extends Component {
    render() {
        let { group, currentUser, handleFavorite, favorited } = this.props;
        return (
            <div key={group._id} className="card is-light column is-one-quarter">
                <div className="card-image">
                    <img src={group.picture}/>
                </div>
                <div className="card-content">
                    <div className="media-content" style={{ textAlign: "center" }}>
                        <div className="columns">
                            <p className="title is-4" style={{ textAlign: "center" }}>{group.picture}</p>
                            <p className="title is-4" style={{ textAlign: "center" }}>{group.name}</p>
                            <p className="title is-4" style={{ textAlign: "center" }}>{group.description}</p>
                            <p className="title is-4" style={{ textAlign: "center" }}>{group.location}</p>
                            <p className="title is-4" style={{ textAlign: "center" }}>{group.date}</p>
                            <p className="title is-4" style={{ textAlign: "center" }}>{group.time}</p>
                        </div>
                        {currentUser && 
                            <div className="columns is-multiline">
                                <div className="column">
                                    {favorited ? <h1>FAVORITED</h1> : <h1>NOT FAVORITED</h1>}
                                    <a className="button is-primary" style={{ width: "25%" }} onClick={() => handleFavorite(group._id)}>Save</a>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
};

export default Card;