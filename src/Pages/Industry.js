import React from 'react'
import { useParams } from 'react-router-dom';
import OfferData from '../Data/Offers_Data';


function Industry({industryData}) {
    const { id , offer_id } = useParams(); // Get the id parameter from the URL

    const plant = industryData.find((plant) => plant.plant === id); // Find the article with the matching id
    const offer = OfferData.find((offer) => offer.offer_id === offer_id); // Find the offer with the matching id

    if (!plant ||!offer) {
      return <div>Article or offer not found</div>;
    }
  
  
    return (

      <div style={{display:'flex' , flexDirection:'column' , alignItems:'center' , gap:'20px' , marginTop:'50px'}}>
          
        <h1 style={{color:'#002857'}}>{plant.plant}</h1>
         
          <div  style={{display:'flex' , justifyContent:'center ', alignItems:'center'}}>
           
            <div style={{display:'flex' , justifyContent:'center ', alignItems:'center'}}>
              <div style={{width:"400px" , marginRight:"20px"} }>
                <h2 style={{fontSize:"20px", color:"#ff7514"}}>qu'est ce que vous savez sur notre entreprise ?</h2>
                   <h3 style={{fontSize:"15px",}}> <span style={{ color:"#002857"}}>les produits offert :</span><br/>{plant.products}</h3>
                   <h3 style={{fontSize:"15px"}}>  <span style={{ color:"#002857"}}>combien d'employé :</span>{plant.operators_numbers}</h3>
                   <h3 style={{fontSize:"15px"}}> <span style={{ color:"#002857"}}> notre parcours :</span><br/>{plant.parcours}</h3>
                   <h3 style={{fontSize:"15px"}}>  <span style={{ color:"#002857"}}>ou on veut aller :<br/></span>{plant.defi}</h3>
                   <h3 style={{fontSize:"15px"}}>  <span style={{ color:"#002857"}}>adress sur google map :</span>{plant.position}</h3>
                   <h3 style={{fontSize:"15px"}}>  <span style={{ color:"#002857"}}>RH email for more details :</span>{plant.RH}</h3>
              </div>
              <img src={plant.image}  style={{height:"300px", width:"500px" , borderRadius:"10px" , }} />
              <div className="vertical-line1"></div> 
            </div>
              <div style={{width:"400px" , marginLeft:"20px"}}>
              <h2 style={{fontSize:"20px", color:"#ff7514"}}>about the job</h2>
             
              <h2 style={{fontSize:"20px"}}>  <span style={{ color:"#002857"}}>{offer.name}</span></h2>
              <h3 style={{fontSize:"15px"}}>  <span style={{ color:"#002857"}}> compétences :</span>{offer.skills}</h3>
              <h3 style={{fontSize:"15px"}}>  <span style={{ color:"#002857"}}> formation :</span>{offer.formation}</h3>
              <h3 style={{fontSize:"15px"}}>  <span style={{ color:"#002857"}}> Expérience :</span>{offer.experience} years </h3>
              <h3 style={{fontSize:"15px"}}>  <span style={{ color:"#002857"}}> départment :</span>{offer.department}  </h3>
              <h3 style={{fontSize:"15px"}}>  <span style={{ color:"#002857"}}> Boss mail :</span>{offer.Boss}  </h3>
              <h3 style={{fontSize:"15px"}}>  <span style={{ color:"#002857"}}> hour of work :<br/></span>{offer.time}  </h3>
              <h3 style={{fontSize:"15px"}}>  <span style={{ color:"#002857"}}>  expected salary :</span>{offer.salary}  </h3>
              <h3 style={{fontSize:"15px"}}>  <span style={{ color:"#002857"}}>  salary negociable :</span>{offer.negociation}  </h3>
              <h3 style={{fontSize:"15px"}}>  <span style={{ color:"#002857"}}>  entretien  :<br/></span>{offer.entretien}  </h3>
              </div>
              
           </div>
         
           
         
          </div>
    );
}

export default Industry