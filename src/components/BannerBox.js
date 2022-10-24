import React from 'react'
import '../App.css'

function BannerBox({setText, setHeight, setWidth}){
    // Parse To Number
    setWidth = Number(setWidth)
    setHeight = Number(setHeight)

    const divStyle = {
        width: setWidth,
        height: setHeight
    }   

    return(
        <div className='bannerBox section' style={divStyle}>
           <p>{setText}</p>
        </div>
    )
}

export default BannerBox