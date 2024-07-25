import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className='navbar'  style={{ display: 'flex',
                   alignItems: 'center', justifyContent:'space-around', marginTop: '0px' ,
                    position:"sticky" , top:"0px" , zIndex:"2000" ,
                   }}>
       <div>
      <h2>S<span style={{color:'#ff7514'}}>P</span>lice</h2>
      </div>

       <div className='Navbarlist'  style={{display:'flex' , alignItems:'center' , justifyContent:'center'  , gap:'20px'}}>
      
             <Link to='/Acceuil'    style={{textDecoration:"none" , color:"white"}} >  <h3>news</h3> </Link>
                      <Link to='/Question'  style={{textDecoration:"none" , color:"white"}}>        <h3>questions</h3> </Link>  
             <Link to="/PlanIntegration"  style={{textDecoration:"none" , color:"white"}} >  <h3>Project</h3> </Link> 
             <Link to='/About'    style={{textDecoration:"none" , color:"white"}} >  <h3>About us</h3> </Link>
        </div> 

        <div  style={{display:'flex' , alignItems:'center' , justifyContent:'center' , gap:'20px'}}>
       
       
        <div style={{display:'flex' , alignItems:'center' , justifyContent:'center'  , gap:'10px'}}>
        <Link  to='/Signup'    style={{textDecoration:"none" , color:"white"}}  >    <FontAwesomeIcon icon={faUser}  className="icon" /> </Link> 
        <Link  to='/Profile'    style={{textDecoration:"none" , color:"white"}}  >        <h3 style={{fontSize:'15px'}}>users</h3> </Link>
      
       </div>
       
        </div>


    </div>
  )
}

export default Navbar