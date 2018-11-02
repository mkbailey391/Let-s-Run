import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import httpClient from '../../../utilities/httpClient';
import Card from 'react-bootstrap/lib/Card';
import { Button } from 'react-bootstrap';


class Cards extends Component {
    render() {
        let { group, currentUser, toggleJoin, favorited } = this.props;
        return (
            <Card key={group._id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={group.image} />
                <Card.Body>
                    <Card.Title>{group.name}</Card.Title>
                    <Card.Title>{group.description}</Card.Title>
                    <Card.Title>{group.location}</Card.Title>
                    <Card.Title>{group.date}</Card.Title>
                    <Card.Title>{group.time}</Card.Title>
            
                        {currentUser && 
                            <div className="columns is-multiline">
                                <div className="column">
                                    {favorited 
                                        ?  <Button onClick={() => toggleJoin(group._id, "LEAVE")}>Leave</Button>
                                        : <Button onClick={() => toggleJoin(group._id, "JOIN")}>Join</Button>
                                    }
                                </div>
                            </div>
                        }
                </Card.Body>
        </Card>

        )
    }
};

export default Cards;



  