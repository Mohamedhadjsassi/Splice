import React from 'react'
import News from './News'
import Offers from './Offers'

function Acceuil() {
  return (
    <div  style={{display:'flex'  ,justifyContent:'center', gap:'20px'}}>
        <News/>
        <div className="vertical-line"></div> {/* Vertical line */}
        <Offers/>



    </div>
  )
}

export default Acceuil