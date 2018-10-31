import React from 'react';
import Header from '../common/Header/Header';
import Card from 'react-bootstrap/lib/Card';

export default ({ groups }) => {

     /*
        1. use the map method on props.groups
        2. for each group we are on return the card with the particular group
     */
     return (
        <div>
            {groups.map(({name, image}) => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )})
            }
        </div>
    )
}
