import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../App.css'

function Footer(){
    return(
        <Container>
            <div className="section">
                <hr></hr>
                <Row>
                    <Col>
                        <a className="footerItem">About Us</a>
                        <a className="footerItem">Feedback</a>
                        <a className="footerItem">Contact</a>
                    </Col>
                    <Col>
                        <a className="footerItem">Terms and Conditions</a>
                        <a className="footerItem">Privacy Policy</a>
                        <a className="footerItem">Help</a>
                    </Col>
                    <Col>
                        <a className="footerItem">Awards</a>
                        <a className="footerItem">Newsletter</a>
                    </Col>
                    <Col>
                        <p className="downloadText">Download Our Mobile App</p>
                        <img src={require('../media/google-play-badge.png')} style={{width:"40%", margin: 4}} />
                        <img src={require('../media/app-store-badge.png')} style={{width:"40%", margin:0}} />
                        <div className="socmedIcons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#4267B2" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="30" height="30"><path fill="#03a9f4" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"/><path fill="#fff" d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3	c-0.951,0.559-2.671,1.156-3.793,1.372C29.789,13.808,24,14.755,24,20v2c-4,0-7.9-3.047-10.327-6c-2.254,3.807,1.858,6.689,2.327,7	c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27	c0.626,1.935,3.773,2.958,5.928,3c-2.617,2.029-7.126,2.079-8,1.977c8.989,5.289,22.669,0.513,21.982-12.477	C34.95,18.818,35.342,18.104,36,17.12"/></svg>
                            <svg fill="#228BE6" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="30" height="30"><path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"/></svg>
                            <svg fill="#FA5252" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="30" height="30"><path d="M56.456,17.442c-0.339-1.44-1.421-2.595-2.866-3.053C49.761,13.174,41.454,12,32,12s-17.761,1.174-21.591,2.389 c-1.445,0.458-2.527,1.613-2.866,3.053C6.903,20.161,6,25.203,6,32c0,6.797,0.903,11.839,1.544,14.558 c0.339,1.44,1.421,2.595,2.866,3.053C14.239,50.826,22.546,52,32,52s17.761-1.174,21.591-2.389 c1.445-0.458,2.527-1.613,2.866-3.053C57.097,43.839,58,38.797,58,32C58,25.203,57.097,20.161,56.456,17.442z M27,40V24l14.857,8 L27,40z"/></svg>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Footer