import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Profile() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div>
        <div className='headofcv' style={{height:"100px" , color:"white" , fontFamily:"sans-serif" , display:"flex" , gap:"50px" , alignItems:"center" }}>
            
        <FontAwesomeIcon icon={faList} style={{ height: "30px", marginLeft: "70px", cursor: "pointer" }} onClick={toggleDropdown} />
        {showDropdown && (
          <select  style={{ marginTop:"130px" , marginLeft:"-90px", backgroundColor: "gray", color: "white", padding: "5px", borderRadius: "4px" }}>
           <option>Personal data</option> 
            <option>Progress in project</option>
            <option>Add a section</option>
            <option>Your question</option>
          </select>
        )}          

               <h1 style={{fontSize:"25px"}}>Hadj Sassi Mohamed</h1>
               <h3 style={{fontSize:"20px"}}>Industrial engineer</h3>
             
             <div style={{width:"150px", height:"150px" , backgroundColor:"#ccc" , borderRadius:"50%" , marginTop:"100px" , marginLeft:"600px"}} ></div>
         </div>

     <div style={{display:"flex" , alignItems:"center" , justifyContent:"space-between" , marginTop:"100px"}}>
       
          <div style={{ width:"1200px" }}>

              <h1 style={{textAlign:"center" , fontSize:"20px"}}>The Journey</h1>
              <p style={{marginTop:"20px" , textAlign:"center" }}>i'm very talented and eager to meet new challenges</p>
             
              <div style={{width:"1000px" ,  marginTop:"20px", marginLeft:"100px" , border:"2px solid #ccc" , padding:"20px"}}>
              <div style={{display:"flex" , justifyContent:"space-between"}}> <h1 style={{fontSize:"12px"}}> Leoni Tunisia</h1> <h1 style={{fontSize:"12px"}}> Procurement specialist</h1> <h1 style={{fontSize:"12px"}}> 2 mounth</h1> </div> 
              <div> <p style={{marginTop:"20px"}}>i had   good experiece there bla </p></div> 
            </div>

            <div style={{width:"1000px" ,  marginTop:"20px", marginLeft:"100px" , border:"2px solid #ccc" , padding:"20px"}}>
              <div style={{display:"flex" , justifyContent:"space-between"}}> <h1 style={{fontSize:"12px"}}> Leoni Tunisia</h1> <h1 style={{fontSize:"12px"}}> Procurement specialist</h1> <h1 style={{fontSize:"12px"}}> 2 mounth</h1> </div> 
              <div> <p style={{marginTop:"20px"}}>i had   good experiece there bla </p></div> 
            </div>

            <div style={{width:"1000px" ,  marginTop:"20px", marginLeft:"100px" , border:"2px solid #ccc" , padding:"20px"}}>
              <div style={{display:"flex" , justifyContent:"space-between"}}> <h1 style={{fontSize:"12px"}}> Leoni Tunisia</h1> <h1 style={{fontSize:"12px"}}> Procurement specialist</h1> <h1 style={{fontSize:"12px"}}> 2 mounth</h1> </div> 
              <div> <p style={{marginTop:"20px"}}>i had   good experiece there bla </p></div> 
            </div>
            <div style={{width:"1000px" ,  marginTop:"20px", marginLeft:"100px" , border:"2px solid #ccc" , padding:"20px"}}>
              <div style={{display:"flex" , justifyContent:"space-between"}}> <h1 style={{fontSize:"12px"}}> Leoni Tunisia</h1> <h1 style={{fontSize:"12px"}}> Procurement specialist</h1> <h1 style={{fontSize:"12px"}}> 2 mounth</h1> </div> 
              <div> <p style={{marginTop:"20px"}}>i had   good experiece there bla </p></div> 
            </div>
            <div style={{width:"1000px" ,  marginTop:"20px", marginLeft:"100px" , border:"2px solid #ccc" , padding:"20px"}}>
              <div style={{display:"flex" , justifyContent:"space-between"}}> <h1 style={{fontSize:"12px"}}> Leoni Tunisia</h1> <h1 style={{fontSize:"12px"}}> Procurement specialist</h1> <h1 style={{fontSize:"12px"}}> 2 mounth</h1> </div> 
              <div> <p style={{marginTop:"20px"}}>i had   good experiece there bla </p></div> 
            </div>
            <div style={{width:"1000px" ,  marginTop:"20px", marginLeft:"100px" , border:"2px solid #ccc" , padding:"20px"}}>
              <div style={{display:"flex" , justifyContent:"space-between"}}> <h1 style={{fontSize:"12px"}}> Leoni Tunisia</h1> <h1 style={{fontSize:"12px"}}> Procurement specialist</h1> <h1 style={{fontSize:"12px"}}> 2 mounth</h1> </div> 
              <div> <p style={{marginTop:"20px"}}>i had   good experiece there bla </p></div> 
            </div>


          </div>

     <div style={{backgroundColor:"#ff7514" , width:"2px" , height:"300px" }}></div>

     <div className='hh' style={{ width:"300px"   }}>
       
       
       <h6 style={{ fontSize:"13px" , textAlign:"center"}}><a href='inkedin.com/in/hadj-sassi-mohamed-501a9014b' style={{textDecoration:"none" , color:"black"}}>Linkdin </a> </h6>
       <h6 style={{ fontSize:"13px", textAlign:"center"}}>mail : mohamedhadjsassi18@gmail.com</h6>
       <h6 style={{ fontSize:"13px", textAlign:"center"}}>from : oued Ellil Tunis</h6>
       <h6 style={{ fontSize:"13px", textAlign:"center"}}>age : 28  </h6>
       <h6 style={{color:"#15365F" , marginTop:"20px", marginBottom:"20px", textAlign:"center" , fontSize:"20px"}}>Skills</h6>
       <div style={{display:"flex" , alignItems:"center" , gap:"20px"}}>  <div style={{height:"20px" , width:"20px" , borderRadius:"50%" , backgroundColor:"greenyellow" , color:"white" }}><h6 style={{fontSize:"15px" , textAlign:"center"}}>9</h6> </div>  <h6  style={{ fontSize:"13px"}}>English</h6> </div>
       <div style={{display:"flex" , alignItems:"center" , gap:"20px"}}>  <div style={{height:"20px" , width:"20px" , borderRadius:"50%" , backgroundColor:"greenyellow" , color:"white" }}><h6 style={{fontSize:"15px" , textAlign:"center"}}>19</h6> </div>  <h6  style={{ fontSize:"13px"}}>team management</h6> </div>
       <div style={{display:"flex" , alignItems:"center" , gap:"20px"}}>  <div style={{height:"20px" , width:"20px" , borderRadius:"50%" , backgroundColor:"greenyellow" , color:"white" }}><h6 style={{fontSize:"15px" , textAlign:"center"}}>7</h6> </div>  <h6  style={{ fontSize:"13px"}}>lean manufacturing</h6> </div>
       <div style={{display:"flex" , alignItems:"center" , gap:"20px"}}>  <div style={{height:"20px" , width:"20px" , borderRadius:"50%" , backgroundColor:"greenyellow" , color:"white" }}><h6 style={{fontSize:"15px" , textAlign:"center"}}>8</h6> </div>  <h6  style={{ fontSize:"13px"}}>french</h6> </div>
       <div style={{display:"flex" , alignItems:"center" , gap:"20px"}}>  <div style={{height:"20px" , width:"20px" , borderRadius:"50%" , backgroundColor:"greenyellow" , color:"white" }}><h6 style={{fontSize:"15px" , textAlign:"center"}}>4</h6> </div>  <h6  style={{ fontSize:"13px"}}>mechanical maintenance</h6> </div>
       <div style={{display:"flex" , alignItems:"center" , gap:"20px"}}>  <div style={{height:"20px" , width:"20px" , borderRadius:"50%" , backgroundColor:"greenyellow" , color:"white" }}><h6 style={{fontSize:"15px" , textAlign:"center"}}>3</h6> </div>  <h6  style={{ fontSize:"13px"}}>change managmeent</h6> </div>
       <div style={{display:"flex" , alignItems:"center" , gap:"20px"}}>  <div style={{height:"20px" , width:"20px" , borderRadius:"50%" , backgroundColor:"greenyellow" , color:"white" }}><h6 style={{fontSize:"15px" , textAlign:"center"}}>10</h6> </div>  <h6  style={{ fontSize:"13px"}}>VBA</h6> </div>

      
   
     </div>

      
     </div>




    





    </div>
  )
}

export default Profile