import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'

function Brands(){
    return(
        <div className='section'>
            <Container>
                <h2 className='sectionTitle'>Top Brands</h2>
                <p className='sectionSubtitle'>We all know and love</p>
                <a className='seeMore' href='https://www.youtube.com/c/FemaleDailyNetwork' target="_blank">
                        See more 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#DB284E" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                </a>
                <Row className='brandImgContainer'>
                    <div className='brandImgWrapper'><img className='brandImg' src={require('../media/nivea_logo.png')}></img></div>
                    <div className='brandImgWrapper'><img className='brandImg' src={require('../media/ordinary_logo.png')}></img></div>
                    <div className='brandImgWrapper'><img className='brandImg' src={require('../media/tbs_logo.png')}></img></div>
                    <div className='brandImgWrapper'><img className='brandImg' src={require('../media/skii_logo.png')}></img></div>
                    <div className='brandImgWrapper'><img className='brandImg' src={require('../media/maybelline_logo.png')}></img></div>
                    <div className='brandImgWrapper'><img className='brandImg' src={require('../media/innisfree_logo.png')}></img></div>
                </Row>
            </Container>
        </div>
    )
}

export default Brands