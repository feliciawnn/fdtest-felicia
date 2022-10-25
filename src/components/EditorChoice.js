import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stars from './Stars.js'
import ItemCard from './ItemCard.js';
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
                        choiceList.map((item) => ( 
                            <Col className="editorItem">
                                <ItemCard setItem={item}/>
                            </Col>   
                        ))
                    }
                </Row>

            </Container>
        </div>
    )
}

export default EditorChoice