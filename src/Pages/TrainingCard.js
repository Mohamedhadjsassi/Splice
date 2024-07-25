import React from 'react'
import { Link } from 'react-router-dom'

function TrainingCard({ field, Skill, Training_id, parts, resumy }) {
  return (
    <Link to={{ pathname: `/Skillpage/${Training_id}`, state: { parts, resumy } }} style={{ textDecoration: "none", color: "black" }}>
    
    <div className='formation'  >  
    
    <div className='circle' ><h3 style={{fontSize:"15px" , marginTop:"18px"}}>{field}</h3></div>     
    <h3 style={{fontSize:"15px" , textAlign:"center" , marginTop:"20px" , color:"white" }}> {Skill}</h3> 


    </div></Link>
  )
}

export default TrainingCard

