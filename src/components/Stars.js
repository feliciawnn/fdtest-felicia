import { render } from '@testing-library/react'
import React from 'react'

function Stars( { rating } ){
    rating = Math.floor(rating)
    var ratingArr = Array(5).fill(0)
    for(let i=0;i<rating;i++){
        ratingArr[i] = 1
    }
    
    return(
        <div style={{display:"inline-block"}}>
            {ratingArr.map((rate) => (
                rate === 1 ? 
                <svg className='starIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#DB284E" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg> : 
                <svg className='starIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D3D3D3" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
            ))}
        </div>
    )
    
}

export default Stars