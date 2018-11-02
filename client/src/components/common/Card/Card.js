import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import httpClient from '../../../utilities/httpClient';
import Card from 'react-bootstrap/lib/Card';
import Button from 'react-bootstrap/lib/Button';


class Cards extends Component {
    render() {
        let { group, currentUser, handleFavorite, favorited } = this.props;
        return (
            <Card key={group._id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={group.picture} />
                <Card.Body>
                    <Card.Title>{group.name}</Card.Title>
                    <Card.Title>{group.description}</Card.Title>
                    <Card.Title>{group.location}</Card.Title>
                    <Card.Title>{group.date}</Card.Title>
                    <Card.Title>{group.time}</Card.Title>
            
                        {currentUser && 
                            <div className="columns is-multiline">
                                <div className="column">
                                    {favorited ? <h1>FAVORITED</h1> : <h1>NOT FAVORITED</h1>}
                                    <a className="button is-primary" style={{ width: "25%" }} onClick={() => handleFavorite(group._id)}></a>
                                </div>
                            </div>
                        }
                      <Button variant="primary">Join</Button>
                </Card.Body>
        </Card>

        )
    }
};

export default Cards;



  