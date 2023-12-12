import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';

function Header () {
    return (
    <div>
          <Navbar className="bg-white w-100">
        <Container>
          <Navbar.Brand >
           <Link to={"/"}>
              <img
                alt=""
                src="https://i.postimg.cc/vH9hKqZK/pngtree-logo-template-for-food-and-restaurant-master-chef-creative-symbol-concept-png-image-1989813.png"
                width="95"
                height="85"
                className="d-inline-block align-top"
              />
           </Link>
           <b  className="text-black ms-4 fs-2"><span  className="text-danger">Solo</span> restaurant
           </b>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
    );
}

export default Header