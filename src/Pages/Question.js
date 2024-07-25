import React from 'react'

function Question() {
  return (
    <div  style={{display:"flex" , flexDirection:"column" , alignItems:"center" }}>
        
        <h1 style={{marginTop:"50px"}}>Harness Questions  </h1>
        
        <p style={{marginTop:"20px"}} >Welcome to our community-driven platform where you can anonymously ask any question about the harness industry. Our community is here to help!</p>
        <p>You can also contribute by providing answers to questions from others. Remember, asking a good question is half of gaining knowledge!</p>


        <h2 style={{fontSize:"20px" , marginTop:"20px" , color:"#15365F"}}>Submit Your Question</h2>
 
        <input type="text" id="name" name="name"  placeholder="What is a harness?" style={{backgroundColor:"#ccc", marginTop:"20px" ,width:"1000px" , height:"100px", color:"white" , padding:"12px 20px" , border:"none" , borderRadius:"4px" , cursor:"pointer",fontSize:"16px"}}/>

 
      <div>
       
      <h2 style={{fontSize:"20px" , marginTop:"20px" , color:"#15365F" , textAlign:"center"}}>Latest Answers</h2>

        <div>
            
          <div style={{ width:"1000px" , marginTop:"20px" , border:"2px solid #ccc" , padding:"20px"}}>
            <h6 style={{color:"#ff7514"}}>question : how to make a splice ?</h6>
           
             <h6> answer : you can use a shunk machine ... </h6>
           
          </div>
          

          <div style={{ width:"1000px" , marginTop:"20px" , border:"2px solid #ccc" , padding:"20px"}}>
            <h6 style={{color:"#ff7514"}}>question : how to make a splice ?</h6>
           
             <h6> answer : you can use a shunk machine ... </h6>
           
          </div>

          <div style={{ width:"1000px" , marginTop:"20px" , border:"2px solid #ccc" , padding:"20px"}}>
            <h6 style={{color:"#ff7514"}}>question : how to make a splice ?</h6>
           
             <h6> answer : you can use a shunk machine ... </h6>
           
          </div>
       
        </div>  
    

      </div>


    </div>
  )
}

export default Question