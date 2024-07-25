import React from 'react'
import OfferData from '../Data/Offers_Data'
import OfferCard from './OfferCard'

function Offers() {

  return (
    <div style={{display:'flex', gap:'20px', flexDirection:"column", marginTop:'50px' , marginRight:"20px" , alignItems:'center'}}>
      <h1 style={{color:'#002857'}} >Offers</h1>
      {OfferData.map((e) => (
        <OfferCard id={e.offer_id} name={e.name} plant={e.Plant} email={e.email} />
      ))}
    </div>
  )
}

export default Offers



