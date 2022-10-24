import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'

function LatestVideo(){
    return(
        <div className='section'>
            <Container>
                <h2 className='sectionTitle'>Latest Videos</h2>
                <p className='sectionSubtitle'>Watch and learn, ladies</p>
                <a className='seeMore' href='https://www.youtube.com/c/FemaleDailyNetwork' target="_blank">
                        See more 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#DB284E" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                </a>
                <Row>
                    <Col sm={8}>
                        <iframe width="100%" height="405" src="https://www.youtube.com/embed/6LUdS0VFOJc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col sm={4}>
                        <Row>
                            <Col>
                                <iframe width="100%" height="200" src="https://www.youtube.com/embed/SbchB_alGSc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <iframe width="100%" height="200" src="https://www.youtube.com/embed/FvbNZd-IxK4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LatestVideo