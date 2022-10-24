import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stars from './Stars.js'
import '../App.css'

function EditorChoice({choiceList}) {
    var itemRating = 0;


    return(
        <div className='EditorChoice section'>
            <Container>
                <Row>
                    <Col>
                        <h2 className='sectionTitle'>Editor's Choice</h2>
                        <p className='sectionSubtitle grayText'>Curated with love</p>
                    </Col>
                </Row>

                <Row>
                    {
                        choiceList.map((item, index) => ( 
                            <Col className="editorItem" style={{margin: "0 8px"}}>
                                <Row>
                                    <Col sm={4}>
                                        <img src={require('../media/user-icon.jpg')} className="editorProfile"/>
                                    </Col>
                                    <Col>
                                        <div className='editorDetails'>
                                            <Row><p className="editorName">{ item.editor }</p></Row>
                                            <Row><p className="editorRole">{ item.role }</p></Row>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='productDescription'>
                                    <img src={item.product.image} className="itemImg"/>
                                    <div className='ratingContainer'>
                                        <p className='rating bold'>{itemRating = item.product.rating}</p> 
                                        <Stars rating={itemRating}/>
                                        <p className='rating'>(7)</p>
                                    </div>
                                    <p className='bold'>{item.product.name}</p>
                                    <p>{item.product.description}</p>
                                </Row>
                            </Col>   
                        ))
                    }
                </Row>

            </Container>
        </div>
    )
}

export default EditorChoice