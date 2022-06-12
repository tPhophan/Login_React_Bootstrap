import { Button, Col, Card} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../App.css';

function CardContent() {
    
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:54780/api/CatsContoller')
        .then(res => {
            setPosts(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    return(
        posts.map((element) => {
            return(
                <Col md={4} key={element.id}>
                    <Card className='pd-20'>
                        <Card.Body>
                        <Card.Img variant='top' src={element.img}></Card.Img>
                        <br></br>
                        <Card.Title>{element.title}</Card.Title>
                        <Card.Text>{element.text}</Card.Text>
                        <Card.Link href={element.link} target='_blank'>
                            <Button variant='warning'>Read more</Button>
                        </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            );
        })
        );
};

export default CardContent;