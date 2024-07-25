import React from 'react'

function Signup() {
  return (
    <div style={{display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent :"center" , marginTop:"50px" , fontSize:"19px"}}>

      <h1 style={{color:'#002857'}} >Welcome to our Sign up page </h1>
       
       <div style={{display:"flex" , gap:"20px" ,alignItems:"center" , justifyContent :"center"}}>
        
         <div style={{width:"400px",display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent :"center" , marginTop:"50px" }}>
          
          
          
          
          <h3 style={{marginTop:"0px" , marginBottom:"20px" }}>Personel data</h3>
          <h6 style={{marginBottom:"20px"}}>Who are you ?</h6>
          <label for="username" style={{marginBottom:"20px"}}>Name:</label>
			     <input type="text" id="username" class="form-control"  required   style={{width:"300px", marginBottom:"20px"}}/>
           <label for="username"style={{marginBottom:"20px"}}>Job:</label>
			     <input type="text" id="username" class="form-control" required style={{width:"300px", marginBottom:"20px"}}/>
           <label for="username"style={{marginBottom:"20px"}}>date of birth:</label>
			     <input type="date" id="username" class="form-control" required style={{width:"300px", marginBottom:"20px"}}/>
           <h6 style={{marginBottom:"20px"}}>how contacting you ?</h6>
           <label for="username" style={{marginBottom:"20px"}}>mail:</label>
			     <input type="email" id="username" class="form-control" required style={{width:"300px", marginBottom:"20px"}}/>
           <label for="username" style={{marginBottom:"20px"}}>phone:</label>
			     <input type="number" id="username" class="form-control" required style={{width:"300px", marginBottom:"20px"}}/>
           <label for="username" style={{marginBottom:"20px"}}>Adresse:</label>
			     <input type="text" id="username" class="form-control" required style={{width:"300px", marginBottom:"20px"}}/>
           <label for="username" style={{marginBottom:"20px"}}>Linkdin:</label>
			     <input type="text" id="username" class="form-control" required style={{width:"300px", marginBottom:"20px"}}/>

           <label for="username" style={{marginBottom:"20px"}}>Password:</label>
			     <input type="text" id="username" class="form-control" required style={{width:"300px", marginBottom:"20px"}}/>
           <label for="photo" style={{marginBottom:"20px"}}>Photo:</label>
           <input type="file" id="photo" class="form-control" required style={{width:"300px", marginBottom:"20px"}} accept=".jpg,.jpeg,.png"/>

           <label for="cv" style={{marginBottom:"20px"}}>Your CV:</label>
           <input type="file" id="cv" class="form-control" required style={{width:"300px" , marginBottom:"20px"}} accept=".pdf"/>
          
           <label for="username" style={{marginBottom:"20px"}}>How you can describe yourself :</label>
			     <input type="text" id="username" class="form-control" required style={{width:"350px", height:"300px", marginBottom:"20px"}}/>
          



          <button style={{width:"200px" , height:"50px" , border:"none" , backgroundColor:"#002857" , marginTop:"40px" , color:"white" , borderRadius:"10px"}} >Save</button>
          
          </div>
         <div className="vertical-line2"></div> 
         <div style={{width:"500px",display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent :"center" , marginTop:"50px" }}>
         <h3>industrial experience</h3>
         <h6 style={{marginBottom:"20px"}}>Last 3 working Experience</h6>
          <fieldset style={{border:"1px solid black" , padding:"10px" , marginBottom:"20px"}}>
           <div style={{display:"flex" , gap:"20px"}}> <label for="username">Company name :</label>
			     <input type="text" id="username" class="form-control" required style={{width:"326px", marginLeft:"11px"}}/></div>
           
           <div style={{display:"flex" , gap:"20px"}}> <label for="username">Your job there :</label>
			     <input type="text" id="username" class="form-control" required style={{width:"326px" , marginLeft:"22px"}}/></div>
           
           <div style={{display:"flex" , gap:"20px"}}>
            
           <label for="username">Periode :</label>
			     <input type="date" id="username" class="form-control" required style={{width:"140px" , marginLeft:"65px"}}/>
           <p>-</p>
           <input type="date" id="username" class="form-control" required style={{width:"140px"}}/>

           </div>
           
           <label for="username">Porjects executed there :</label>
			     <input type="text" id="username" class="form-control" required style={{width:"475px" , height:"50px"}}/>
           
           <div style={{display:"flex" , gap:"20px"}}> <label for="username" style={{marginTop:"8px"}} >how you rate your experience in this company from 1 to 10:</label>
			     <input type="number" id="username" class="form-control" required style={{width:"60px" }}/></div>
           
          </fieldset>
          
          <fieldset style={{border:"1px solid black" , padding:"10px" , marginBottom:"20px"}}>
           <div style={{display:"flex" , gap:"20px"}}> <label for="username">Company name :</label>
			     <input type="text" id="username" class="form-control" required style={{width:"326px", marginLeft:"11px"}}/></div>
           
           <div style={{display:"flex" , gap:"20px"}}> <label for="username">Your job there :</label>
			     <input type="text" id="username" class="form-control" required style={{width:"326px" , marginLeft:"22px"}}/></div>
           
           <div style={{display:"flex" , gap:"20px"}}>
            
           <label for="username">Periode :</label>
			     <input type="date" id="username" class="form-control" required style={{width:"140px" , marginLeft:"65px"}}/>
           <p>-</p>
           <input type="date" id="username" class="form-control" required style={{width:"140px"}}/>

           </div>
           
           <label for="username">Porjects executed there :</label>
			     <input type="text" id="username" class="form-control" required style={{width:"475px" , height:"50px"}}/>
           
           <div style={{display:"flex" , gap:"20px"}}> <label for="username" style={{marginTop:"8px"}} >how you rate your experience in this company from 1 to 10:</label>
			     <input type="number" id="username" class="form-control" required style={{width:"60px" }}/></div>
           
          </fieldset>

          <fieldset style={{border:"1px solid black" , padding:"10px" , marginBottom:"20px"}}>
           <div style={{display:"flex" , gap:"20px"}}> <label for="username">Company name :</label>
			     <input type="text" id="username" class="form-control" required style={{width:"326px", marginLeft:"11px"}}/></div>
           
           <div style={{display:"flex" , gap:"20px"}}> <label for="username">Your job there :</label>
			     <input type="text" id="username" class="form-control" required style={{width:"326px" , marginLeft:"22px"}}/></div>
           
           <div style={{display:"flex" , gap:"20px"}}>
            
           <label for="username">Periode :</label>
			     <input type="date" id="username" class="form-control" required style={{width:"140px" , marginLeft:"65px"}}/>
           <p>-</p>
           <input type="date" id="username" class="form-control" required style={{width:"140px"}}/>

           </div>
           
           <label for="username">Porjects executed there :</label>
			     <input type="text" id="username" class="form-control" required style={{width:"475px" , height:"50px"}}/>
           
           <div style={{display:"flex" , gap:"20px"}}> <label for="username" style={{marginTop:"8px"}} >how you rate your experience in this company from 1 to 10:</label>
			     <input type="number" id="username" class="form-control" required style={{width:"60px" }}/></div>
           
          </fieldset>
         
          <h6 style={{marginBottom:"20px"}}>Last 3 Intenship</h6>
          <fieldset style={{border:"1px solid black" , padding:"10px" , marginBottom:"20px"}}>
           <div style={{display:"flex" , gap:"20px"}}> <label for="username">Company name :</label>
			     <input type="text" id="username" class="form-control" required style={{width:"326px", marginLeft:"11px"}}/></div>
           
           <div style={{display:"flex" , gap:"20px"}}> <label for="username"> in departement :</label>
			     <input type="text" id="username" class="form-control" required style={{width:"326px", marginLeft:"13px"}}/></div>
           
           <label for="username">Porject executed there:</label>
			     <input type="text" id="username" class="form-control" required style={{width:"475px" , height:"50px"}}/>
           <div style={{display:"flex" , gap:"20px"}}> <label for="username" style={{marginTop:"8px"}} >how you rate your experience in this company from 1 to 10:</label>
			     <input type="number" id="username" class="form-control" required style={{width:"60px" }}/></div>
           
          </fieldset>
          
          <fieldset style={{border:"1px solid black" , padding:"10px" , marginBottom:"20px"}}>
           <div style={{display:"flex" , gap:"20px"}}> <label for="username">Company name :</label>
			     <input type="text" id="username" class="form-control" required style={{width:"326px", marginLeft:"11px"}}/></div>
           
           <div style={{display:"flex" , gap:"20px"}}> <label for="username"> in departement :</label>
			     <input type="text" id="username" class="form-control" required style={{width:"326px", marginLeft:"13px"}}/></div>
           
           <label for="username">Porject executed there:</label>
			     <input type="text" id="username" class="form-control" required style={{width:"475px" , height:"50px"}}/>
           <div style={{display:"flex" , gap:"20px"}}> <label for="username" style={{marginTop:"8px"}} >how you rate your experience in this company from 1 to 10:</label>
			     <input type="number" id="username" class="form-control" required style={{width:"60px" }}/></div>
           
          </fieldset>

          <fieldset style={{border:"1px solid black" , padding:"10px" , marginBottom:"20px"}}>
           <div style={{display:"flex" , gap:"20px"}}> <label for="username">Company name :</label>
			     <input type="text" id="username" class="form-control" required style={{width:"326px", marginLeft:"11px"}}/></div>
           
           <div style={{display:"flex" , gap:"20px"}}> <label for="username"> in departement :</label>
			     <input type="text" id="username" class="form-control" required style={{width:"326px", marginLeft:"13px"}}/></div>
           
           <label for="username">Porject executed there:</label>
			     <input type="text" id="username" class="form-control" required style={{width:"475px" , height:"50px"}}/>
           <div style={{display:"flex" , gap:"20px"}}> <label for="username" style={{marginTop:"8px"}} >how you rate your experience in this company from 1 to 10:</label>
			     <input type="number" id="username" class="form-control" required style={{width:"60px" }}/></div>
           
          </fieldset>



          </div>
         
            <div className="vertical-line2"></div> 
         
         <div style={{width:"400px",display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent :"center" , marginTop:"50px" }}>
          
          <h3 style={{marginBottom:"20px" , marginTop:"-30px"}}>learning journey</h3>
          <h6 style={{marginBottom:"20px"}}>Your last 3 educational school</h6>
          <fieldset style={{border:"1px solid black" , padding:"10px" , marginLeft:"40px" , marginBottom:"20px"}}>
                <div style={{display:"flex" }}>
                <label for="username" style={{marginTop:"7px"}}>School:</label>
			          <input type="text" id="username" class="form-control"  required   style={{width:"326px", marginLeft:"25px"}}/>
                </div>
                <div style={{display:"flex" , gap:"20px"}}>  <label style={{marginTop:"10px"}} for="username">Periode: </label>
            <input type="date" id="username" class="form-control" required style={{width:"140px" }}/>
            <p>-</p>
            <input type="date" id="username" class="form-control" required style={{width:"140px"}}/>
            </div>
            <div style={{display:"flex" }}>
            <label for="username" style={{marginBottom:"5px" ,marginTop:"7px" }}>Diploma:</label>
			          <input type="text" id="username" class="form-control"  required   style={{width:"326px", marginLeft:"15px"}}/>
           
                </div>
           </fieldset>
          
           <fieldset style={{border:"1px solid black" , padding:"10px" , marginLeft:"40px" , marginBottom:"20px"}}>
                <div style={{display:"flex" }}>
                <label for="username" style={{marginTop:"7px"}}>School:</label>
			          <input type="text" id="username" class="form-control"  required   style={{width:"326px", marginLeft:"25px"}}/>
                </div>
                <div style={{display:"flex" , gap:"20px"}}>  <label style={{marginTop:"10px"}} for="username">Periode: </label>
            <input type="date" id="username" class="form-control" required style={{width:"140px" }}/>
            <p>-</p>
            <input type="date" id="username" class="form-control" required style={{width:"140px"}}/>
            </div>
            <div style={{display:"flex" }}>
            <label for="username" style={{marginBottom:"5px" ,marginTop:"7px" }}>Diploma:</label>
			          <input type="text" id="username" class="form-control"  required   style={{width:"326px", marginLeft:"15px"}}/>
           
                </div>
           </fieldset>

           <fieldset style={{border:"1px solid black" , padding:"10px" , marginLeft:"40px" , marginBottom:"20px"}}>
                <div style={{display:"flex" }}>
                <label for="username" style={{marginTop:"7px"}}>School:</label>
			          <input type="text" id="username" class="form-control"  required   style={{width:"326px", marginLeft:"25px"}}/>
                </div>
                <div style={{display:"flex" , gap:"20px"}}>  <label style={{marginTop:"10px"}} for="username">Periode: </label>
            <input type="date" id="username" class="form-control" required style={{width:"140px" }}/>
            <p>-</p>
            <input type="date" id="username" class="form-control" required style={{width:"140px"}}/>
            </div>
            <div style={{display:"flex" }}>
            <label for="username" style={{marginBottom:"5px" ,marginTop:"7px" }}>Diploma:</label>
			          <input type="text" id="username" class="form-control"  required   style={{width:"326px", marginLeft:"15px"}}/>
           
                </div>
           </fieldset>
          
           <h6 style={{marginBottom:"20px"}}>Language proficiency </h6>
          
          <div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <input type="checkbox" id="arabic" name="language" value="arabic" />
                  <label for="arabic" style={{marginRight: "40px"}}>Arabic</label>

                  <input type="checkbox" id="english" name="language" value="english" />
                  <label for="english" style={{marginRight: "40px"}}>English</label>

                  <input type="checkbox" id="french" name="language" value="french" />
                  <label for="french" style={{marginRight: "40px"}}>French</label>

                 <input type="checkbox" id="german" name="language" value="german" />
                 <label for="german">German</label>
             </div>
             <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px"}}>
                  <input type="checkbox" id="spanish" name="language" value="spanish" />
                  <label for="spanish" style={{marginRight: "40px"}}>Spanish</label>

                  <input type="checkbox" id="chinese" name="language" value="chinese" />
                  <label for="chinese" style={{marginRight: "40px"}}>Chinese</label>

                  <input type="checkbox" id="japanese" name="language" value="japanese" />
                  <label for="japanese" style={{marginRight: "40px"}}>Japanese</label>

                 <input type="checkbox" id="italian" name="language" value="italian" />
                 <label for="italian">Italian</label>
             </div>
         </div>
          
        <h6 style={{marginBottom:"10px", marginTop:"10px"}}>Soft Skills </h6> 
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "10px"}}>
              <input type="checkbox" id="Communication" name="skill" value="Communication" />
              <label for="Communication">Communication </label> </div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "10px"}}> 
           <input type="checkbox" id="teamwork" name="skill" value="teamwork" />
           <label for="teamwork">Teamwork and Collaboration</label> </div> 
         <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "10px"}}> 
            <input type="checkbox" id="problem_solving" name="skill" value="problem_solving" />
            <label for="problem_solving">Problem-Solving and Critical Thinking</label> 
         </div> <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "10px"}}> 
             <input type="checkbox" id="adaptability" name="skill" value="adaptability" />
            <label for="adaptability">Adaptability and Flexibility</label> </div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "10px"}}>
             <input type="checkbox" id="time_management" name="skill" value="time_management" /> 
             <label for="time_management">Time Management and Organization</label> </div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "10px"}}> 
              <input type="checkbox" id="leadership" name="skill" value="leadership" /> 
              <label for="leadership">Leadership and Initiative</label> </div> 
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "10px"}}> 
              <input type="checkbox" id="continuous_learning" name="skill" value="continuous_learning" /> 
              <label for="continuous_learning">Continuous Learning and Development</label> </div> 
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "10px"}}>
               <input type="checkbox" id="emotional_intelligence" name="skill" value="emotional_intelligence" />
               <label for="emotional_intelligence">Emotional Intelligence and Empathy</label> </div> 
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "10px"}}>
               <input type="checkbox" id="conflict_resolution" name="skill" value="conflict_resolution" /> 
               <label for="conflict_resolution">Conflict Resolution and Negotiation</label> </div> 
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "10px"}}> 
               <input type="checkbox" id="digital_literacy" name="skill" value="digital_literacy" /> 
               <label for="digital_literacy">Digital Literacy and Data Analysis</label> </div>

         <h6 style={{marginBottom:"10px", marginTop:"10px"}}>Computer Skills </h6> 
               
        <div style={{display: "flex", alignItems: "center", marginBottom: "10px" , gap:"10px"}}> 
               <input type="checkbox" id="AutoCAD" name="skill" value="AutoCAD" />
                <label for="AutoCAD">AutoCAD </label> 
                <input type="checkbox" id="CATIA" name="skill" value="CATIA" /> 
                   <label for="CATIA">CATIA </label>
                   <input type="checkbox" id="SolidWorks" name="skill" value="SolidWorks" /> 
                     <label for="SolidWorks">SolidWorks</label>
        </div>
        <div style={{display: "flex", alignItems: "center", marginBottom: "10px" , gap:"10px"}}> 
        <input type="checkbox" id="MicrosoftExcel" name="skill" value="MicrosoftExcel" /> 
                     <label for="MicrosoftExcel">Microsoft Excel</label>  
                     <input type="checkbox" id="SQL" name="skill" value="SQL" /> 
                     <label for="SQL">SQL</label>
                     <input type="checkbox" id="VBA" name="skill" value="VBA" /> 
                       <label for="VBA">VBA</label>
        </div>
        <div style={{display: "flex", alignItems: "center", marginBottom: "10px" , gap:"10px"}}> 
        <input type="checkbox" id="SAP" name="skill" value="SAP" />
                            <label for="SAP">SAP</label>
                            <input type="checkbox" id="ERP" name="skill" value="ERP" /> 
                               <label for="ERP">ERP</label>
        </div>



              

         <h6 style={{marginBottom:"10px" , marginTop:"10px"}}>skills for harness industry </h6>

<div>


<input type="checkbox" id="wire_stripping" name="skill" value="wire_stripping" /> 
    <label for="wire_stripping">Wire stripping , crimping and cutting </label> <br/>
 <input type="checkbox" id="cable_assembly" name="skill" value="cable_assembly" /> 
    <label for="cable_assembly">Cable assembly </label> <br/>

<input type="checkbox" id="wire_harness_design" name="skill" value="wire_harness_design" />
    <label for="wire_harness_design">Wire harness design </label><br/>
 
  <input type="checkbox" id="wire_harness_testing" name="skill" value="wire_harness_testing" /> 
    <label for="wire_harness_testing">Wire harness testing</label><br/>

  <input type="checkbox" id="quality_control" name="skill" value="quality_control" />
    <label for="quality_control">Quality control and inspection</label><br/>
  <input type="checkbox" id="inventory_management" name="skill" value="inventory_management" /> 
    <label for="inventory_management">Inventory management</label><br/>
  <input type="checkbox" id="material_handling" name="skill" value="material_handling" /> 
    <label for="material_handling">Material handling and storage</label><br/>
  <input type="checkbox" id="manufacturing_process_planning" name="skill" value="manufacturing_process_planning" /> 
    <label for="manufacturing_process_planning">Manufacturing process planning</label><br/>
  <input type="checkbox" id="manufacturing_engineering" name="skill" value="manufacturing_engineering" /> 
    <label for="manufacturing_engineering">Manufacturing engineering</label> <br/>
  <input type="checkbox" id="maintenance" name="skill" value="maintenance" />
     <label for="maintenance">Maintenance</label><br/>
  <input type="checkbox" id="production_scheduling" name="skill" value="production_scheduling" />
      <label for="production_scheduling">Production scheduling</label><br/>
      <input type="checkbox" id="supply_chain_management" name="skill" value="supply_chain_management" />
       <label for="supply_chain_management">Supply chain management</label><br/>
       <input type="checkbox" id="quality_assurance" name="skill" value="quality_assurance" /> 
       <label for="quality_assurance">Quality assurance</label><br/>
       <input type="checkbox" id="continuous_improvement" name="skill" value="continuous_improvement" />
        <label for="continuous_improvement">Continuous improvement</label> <br/>
</div>












          </div>
           
       </div>



    </div>
  )
}

export default Signup