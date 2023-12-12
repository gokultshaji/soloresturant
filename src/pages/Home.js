import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function Home() {

    const [restaurants, setRestaurants] = useState([]);

    // Function to fetch restaurant data
    const getAllRestaurant = async () => {
        const result = await axios.get('/restaurants.json');
        setRestaurants(result.data.restaurants);
    }

    useEffect(() => {
        getAllRestaurant();
    }, []);

    return (
        <div>
              <Container className="p-5 text-center">
                <h2 className="mb-3" style={{ color: 'yellow'}}>

                    "Hundreds of flavors under one roof"
                </h2>
                <p className="mb-3">
                    “One of the reasons that people enjoy coming to a great restaurant is that when an extraordinary meal is placed in front of them, they feel honored, respected, and even a little bit loved.” — Marcus Samuelsson
                </p>
            </Container>

            <Container >
             
                    <Col className="text-center">
                        <img
                           style={{width:'80%', height:'400px' }}
                            src="https://i.postimg.cc/vZ1Xtg0N/Zero-Irving-Preview-Lizz-Spano-12-5-0874.jpg"
                            alt=""
                        />
                    </Col>
                    </Container>
                    <Row className="p-2 m-1">
                    {
                        
                        restaurants.length > 0 ? restaurants.map(restaurant =>
                            <Col className="mt-4" xs={12} sm={6} lg={4} key={restaurant.id}>
                                <Link to={`/Singleview/${restaurant.id}`} style={{ textDecoration: 'none' }}>
                                    <Card style={{ width: '100%', height: '550px', border: "3px solid" }} >
                                        <Card.Img style={{ height: '400px',marginLeft:'-2px' }} variant="top" src={restaurant.photograph} />
                                        <Card.Body>
                                            <Card.Title className="text-center">
                                                {restaurant.name}
                                            </Card.Title>
                                            <Card.Text>
                                                <b>Address:</b> {restaurant.address}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        ) : (<h1>No Data Present</h1>)
                    }
                </Row>
           
        </div>
    )
}

export default Home;
