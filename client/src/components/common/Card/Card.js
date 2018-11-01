import React from 'react';
import { Link } from 'react-router-dom';

export default ({ group }) => {
    return (
        <div key={group._id} className="card is-light column is-one-quarter">
            <div className="card-image">
                <img src={group.image}/>
            </div>
            <div className="card-content">
                <div className="media-content" style={{ textAlign: "center" }}>
                    <div className="columns">
                        <p className="title is-4" style={{ textAlign: "center" }}>{group.name}</p>
                    </div>
            <div className="card-content">
                <div className="media-content" style={{ textAlign: "center" }}>
                    <div className="columns">
                        <p className="title is-4" style={{ textAlign: "center" }}>{group.name}</p>
                    </div>
                    <div className="columns is-multiline">
                        <div className="column">
                            <Link className="button is-primary" style={{ width: "100%" }} to={`/groups/${group._id}`}></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <
    )
}