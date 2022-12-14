import React from 'react'
import Stars from './Stars.js'
import '../App.css'

function ItemCard({setItem, isMatch}) {
    var itemRating;
    
    return(
       <div className='itemCard'>
            <div className='productDescription'>
                <img src={setItem.product.image} className="itemImg"/>
                {
                    isMatch === true ? 
                    <p className='pinkText'>Match Skin Type</p> :
                    <p></p>
                }
                <div className='ratingContainer'>
                        <p className='rating bold'>{itemRating = setItem.product.rating}</p> 
                        <Stars rating={itemRating}/>
                        <p className='rating'>(7)</p>
                </div>
                <p className='bold'>{setItem.product.name}</p>
                <p>{setItem.product.description}</p>
            </div>
       </div>
    )
}

export default ItemCard