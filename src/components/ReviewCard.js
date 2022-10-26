import React from 'react'
import Stars from './Stars.js'
import '../App.css'

function ReviewCard({setItem}) {
    var itemRating;
    
    return(
       <div className='reviewCard'>
            <div className='productDescription'>
                <div className='productContainer'>
                    <img src={setItem.product.image} className="reviewItemImg"/>
                    <p className='reviewTitle'>{setItem.product.name}</p>
                    <p className='reviewSubtitle'>{setItem.product.desc}</p>
                </div>

                <hr></hr>
        
                <Stars rating={setItem.star}/>
                <div className='commentContainer'>
                    <p>{setItem.comment}</p>    
                    <a className='seeMore' href='#'>See more </a>       
                </div>
            </div>
       </div>
    )
}

export default ReviewCard