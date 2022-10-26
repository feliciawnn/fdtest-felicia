import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../App.css'

import ItemCard from './ItemCard';

function ProductMatch(productList){
    productList=productList["productsList"].slice(0,3)
    
    return(
        <Container fluid className='pinkBackground section'>
            <Row> 
                <img src={require('../media/model.png')} className="modelImg"/> 
                <div className='sectionTextContainer'>
                    <h4 className='sectionTitle'>Looking for products that are simply perfect for you?</h4>
                    <p>Here are some products that we believe match your skin, hair, and body! Have we mentioned that they solve your concerns too?</p>
                    <button className='matchButton'>See My Matches</button>
                    
                </div>
                
               {
                productList.map((item) => (
                    <div className='matchItem'>
                        <ItemCard setItem={item} isMatch={true}/>
                    </div>
                ))
               }
            </Row>
        </Container>
    )
}

export default ProductMatch