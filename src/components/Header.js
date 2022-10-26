import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../App.css'

function Header(){
    return(
        <Container fluid>
            <Row className="headerWrapper">
                <Col className="mainLogo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <img src={require('../media/logo_fd.png')}/>
                </Col>
                <Col sm={8}>
                    <div className="searchBar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </div>
                </Col>
                <Col>
                    <div className="login">
                        <button className="loginBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                            LOGIN/SIGNUP
                        </button>
                    </div>
                </Col>
            </Row>
            <hr></hr>
            <Row className="navLinkWrapper">
                <a className="linkNav">SKINCARE</a>
                <a className="linkNav">MAKE UP</a>
                <a className="linkNav">BODY</a>
                <a className="linkNav">HAIR</a>
                <a className="linkNav">FRAGRANCE</a>
                <a className="linkNav">NAILS</a>
                <a className="linkNav">TOOLS</a>
                <a className="linkNav">BRANDS</a>
            </Row>
            <hr></hr>
        </Container>
    )
}

export default Header