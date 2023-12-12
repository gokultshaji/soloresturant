import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Operating from '../components/Operating';
import Reviews from '../components/Reviews';

function Singleview() {
    const [allrestaurants, setRestaurants] = useState([]);
    const param = useParams();
    const { id } = param; // Destructuring

    const getAllRest = async () => {
        const result = await axios.get('/restaurants.json');
        setRestaurants(result.data.restaurants);
    }

    useEffect(() => {
        getAllRest();
    }, []);

    const singleRest = allrestaurants.find(i => i.id == id);

    return (
        <div>
            {singleRest ? (
                <Row>
                    <Col lg={5} md={12} className='py-5 ps-3 mt-5 mb-5'>
                        <img
                            style={{ height: 'auto', maxWidth: '100%' }}
                            src={singleRest.photograph} alt=""
                        />
                    </Col>
                    <Col md={12} lg={7} className='text-start'>
    <h1 className='text-center mt-3'>{singleRest.name}</h1>
    <ListGroup className='me-5 ps-3 pe-4 w-100 fs-4'>
        <ListGroup.Item className='mt-4'>
            <b><span className='me-2'>Address:</span> {singleRest.address}</b>
        </ListGroup.Item>
        <ListGroup.Item className='mt-4'>
            <b><span className='me-2'>Cuisine Type:</span> {singleRest.cuisine_type}</b>
        </ListGroup.Item>
        <ListGroup.Item className='mt-4'>
            <b><span className='me-2'>Neighbourhood:</span> {singleRest.neighborhood}</b>
        </ListGroup.Item>
        <ListGroup.Item className='mt-4'>
            <Operating operatingData={singleRest.operating_hours} />
        </ListGroup.Item>
        <ListGroup.Item className='mt-4 p-5'>
            <Reviews reviews={singleRest.reviews} />
        </ListGroup.Item>
    </ListGroup>
</Col>

                </Row>
            ) : (
                <Row>
                    <h1>No data</h1>
                </Row>
            )}
        </div>
    );
}

export default Singleview;
