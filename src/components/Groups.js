import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'
import GroupCard from './GroupCard';

function Groups(){
    return(
        <div className='popularGroup section'>
            <Container>
                <h2 className='sectionTitle'>Popular Groups</h2>
                <p className='sectionSubtitle'>Where the beauty TALK are</p>
                <a className='seeMore' href='#'>
                    See more 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#DB284E" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </a>
            
                <Row>
                    <Col><GroupCard title="Embrace the Curl" subtitle="May our curls pop and never stop!" imgPath={"group_1.jpg"}/></Col>
                    <Col><GroupCard title="Embrace the Curl" subtitle="May our curls pop and never stop!" imgPath={"group_1.jpg"}/></Col>
                    <Col><GroupCard title="Embrace the Curl" subtitle="May our curls pop and never stop!" imgPath={"group_1.jpg"}/></Col>
                    <Col><GroupCard title="Embrace the Curl" subtitle="May our curls pop and never stop!" imgPath={"group_1.jpg"}/></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Groups