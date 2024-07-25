import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faIndustry } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import{me} from '../media/Capture décran 2024.png';

function About() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  
  const num1 = 365;
  const num2 = 1;
  const num3 = 20;
  
  let interval1, interval2, interval3;
  
  useEffect(() => {
    interval1 = setInterval(() => {
      if (count1 < num1) {
        setCount1((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval1);
      }
    }, 1);
  
    interval2 = setInterval(() => {
      if (count2 < num2) {
        setCount2((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval2);
      }
    }, 100);
  
    interval3 = setInterval(() => {
      if (count3 < num3) {
        setCount3((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval3);
      }
    }, 10);
  
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [count1, count2, count3]);

  return (
    <div>
      <div className='defimg'>
        <h1 className='title' style={{ }}> The harness world?</h1>
        <h6>it is not hard, just splice your carreer with <span style={{color:"#ff7514" }}>splice</span></h6>
        <h6>And let's break the ice!!</h6>
        <button style={{marginLeft:"180px" , marginTop:"300px", backgroundColor: '#ff7514', padding: '10px 20px', borderRadius: '30px', fontSize: '17px', fontWeight: 'bold', color: '#fff' , borderColor:"#ff7514", width:"150px" , height:"60px"}}>Subscribe</button>
      </div>
      <div className='squares' style={{display:"flex",  }}>
        <div className='square1' style={{width:"303px", height:"303px", backgroundColor:"#002857", display:"flex",gap:"10px", flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
          <FontAwesomeIcon icon={faIndustry} style={{ fontSize: "40px", color: "white" }} />
          <h1 style={{fontSize:"19px", color:"white" }}>Production</h1>
          <h2 style={{fontSize:"15px", color:"GrayText" , textAlign:"center", margin:"10px", padding:"10px", lineHeight:"1.5" }}>ensures efficient production workflows,  and optimizes resources to deliver products on time and within budget. </h2>
        </div>
        <div className='square1' style={{width:"303px", height:"303px", backgroundColor:"#fd5f00", display:"flex",gap:"10px", flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
          <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: "40px", color: "white" }} />
          <h1 style={{fontSize:"19px", color:"white" }}>Quality</h1>
          <h2 style={{fontSize:"15px", color:"GrayText" , textAlign:"center", margin:"10px", padding:"10px", lineHeight:"1.5" }}>ensuring that our harnesses meet the highest standards of quality, reliability, and performance.</h2>
        </div>
        <div className='square1' style={{width:"303px", height:"303px", backgroundColor:"#002857", display:"flex",gap:"10px", flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
          <FontAwesomeIcon icon={faTruck} style={{ fontSize: "40px", color: "white" }} />
          <h1 style={{fontSize:"19px", color:"white" }}>Logistic</h1>
          <h2 style={{fontSize:"15px", color:"GrayText" , textAlign:"center", margin:"10px", padding:"10px", lineHeight:"1.5" }}>optimize supply chain operations, manage inventory, and ensure that products are delivered to customers on schedule.</h2>
        </div>
        <div className='square1' style={{width:"303px", height:"303px", backgroundColor:"#fd5f00", display:"flex",gap:"10px", flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
          <FontAwesomeIcon icon={faProjectDiagram} style={{ fontSize: "40px", color: "white" }} />
          <h1 style={{fontSize:"19px", color:"white" }}>Project</h1>
          <h2 style={{fontSize:"15px", color:"GrayText" , textAlign:"center", margin:"10px", padding:"10px", lineHeight:"1.5" }}>oversees the planning, coordination, and execution of harness production projects from start to finish.</h2>
        </div>
        <div className='square1' style={{width:"307px", height:"303px", backgroundColor:"#002857", display:"flex",gap:"10px", flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
          <FontAwesomeIcon icon={faGear} style={{ fontSize: "40px", color: "white" }} />
          <h1 style={{fontSize:"19px", color:"white" }}>Engineering</h1>
          <h2 style={{fontSize:"15px", color:"GrayText" , textAlign:"center", margin:"10px", padding:"10px", lineHeight:"1.5"  }}>designs, develops, and tests innovative harness solutions that meet customer requirements and industry standards.</h2>
        </div>
      </div>
      
      <div  className='offer' style={{height:"1000px" , display:"flex", alignItems:"center" , justifyContent:"space-between" , marginTop:"-100px"}}>
        <div style={{width:"700px" , marginLeft:"30px"}}>
        <h1 style={{fontSize:"30px", color:"black" , marginLeft:"200px" , marginTop:"50px" , fontFamily:"cursive" }}>What We Offer</h1> <p style={{color:"grey" ,textAlign:"center", margin:"20px", padding:"15px"}}> we try here to create a comunity that link all the actors of the industry of "harness making" so we can develop the sectors into a heigher level weather it is in the Engineering field , quality , logistic , production or even the project manangement , this site can help :</p>
         <div style={{ width: "700px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
  <div style={{ backgroundColor: "#f7f7f7", padding: "20px" , height: "250px",borderRadius:"20px" , borderColor:"black" , borderWidth:"1px" , borderStyle:"solid"}}>
    <h2 style={{ color: "#ff7514", fontSize: "20px",textAlign:"center"  }}>Job Seeker</h2>
    <h5 style={{ color: "#0c142c", fontSize: "15px",lineHeight:"1.5" ,textAlign:"center" }}>can check the news and updates in the industry</h5>
    <h5 style={{ color: "#0c142c", fontSize: "15px", lineHeight:"1.5",textAlign:"center" }}>can consulte the offer existing  </h5>
    <h5 style={{ color: "#0c142c", fontSize: "15px", lineHeight:"1.5",textAlign:"center" }}>have general info on that industry and that job  </h5>
    <h5 style={{ color: "#0c142c", fontSize: "15px",lineHeight:"1.5" ,textAlign:"center" }}>do not waste time and contact the manager or RH , or top employees of the factory  </h5>
  </div>
  <div style={{ backgroundColor: "#f7f7f7", padding: "20px",  height: "250px",borderRadius:"20px" , borderColor:"black" , borderWidth:"1px" , borderStyle:"solid"  }}>
    <h2 style={{ color: "#ff7514", fontSize: "20px" , textAlign:"center"  }}>New Employee</h2>
    <h5 style={{ color: "#0c142c", fontSize: "15px", lineHeight:"1.5" ,textAlign:"center"}}>follow an integration plan</h5>
    <h5 style={{ color: "#0c142c", fontSize: "15px", lineHeight:"1.5" ,textAlign:"center"}}>read resumy to learn the job</h5>
    <h5 style={{ color: "#0c142c", fontSize: "15px", lineHeight:"1.5",textAlign:"center" }}>get a recomended links to consult</h5>
    <h5 style={{ color: "#0c142c", fontSize: "15px", lineHeight:"1.5",textAlign:"center" }}>can ask the comunity anounimously any technical question</h5>
  </div>
  <div style={{ backgroundColor: "#f7f7f7", padding: "20px", height: "250px",borderRadius:"20px" , borderColor:"black" , borderWidth:"1px" , borderStyle:"solid" }}>
    <h2 style={{ color: "#ff7514", fontSize: "20px",textAlign:"center"  }}>Status Developer</h2>
    <h5 style={{ color: "#0c142c", fontSize: "15px", lineHeight:"1.5" ,textAlign:"center"}}>collect proofs of his expertise</h5>
    <h5 style={{ color: "#0c142c", fontSize: "15px", lineHeight:"1.5",textAlign:"center" }}>post articles and news in the field</h5>
    <h5 style={{ color: "#0c142c", fontSize: "15px", lineHeight:"1.5",textAlign:"center" }}>can be the face of his company and be popular in the market</h5>
    <h5 style={{ color: "#0c142c", fontSize: "15px", lineHeight:"1.5",textAlign:"center" }}>can publish his carreer lessons </h5>
    <h5 style={{ color: "#0c142c", fontSize: "15px", lineHeight:"1.5",textAlign:"center" }}>can study a problem faced with experts </h5>
  </div>
  <div style={{ backgroundColor: "#f7f7f7", padding: "20px" , height: "250px",borderRadius:"20px" ,borderColor:"black" , borderWidth:"1px" , borderStyle:"solid"}}>
    <h2 style={{ color: "#ff7514", fontSize: "20px",textAlign:"center" }}>Project Follower</h2>
    <h5 style={{ color: "#0c142c", fontSize: "15px",lineHeight:"1.5" ,textAlign:"center" }}>get a planification of his project</h5>
    <h5 style={{ color: "#0c142c", fontSize: "15px",lineHeight:"1.5",textAlign:"center"  }}>share actions and progress for his team</h5>
    <h5 style={{ color: "#0c142c", fontSize: "15px", lineHeight:"1.5" ,textAlign:"center"}}>get allerted for expected backlogs</h5>
    <h5 style={{ color: "#0c142c", fontSize: "15px", lineHeight:"1.5",textAlign:"center" }}>can evaluate his team</h5>
    <h5 style={{ color: "#0c142c", fontSize: "15px", lineHeight:"1.5",textAlign:"center" }}>can organise the meetings</h5>
  </div>
</div> 
</div>
        <div style={{width:"770px" , backgroundImage: "url('https://www.bfmsltd.co.uk/wp-content/uploads/2021/05/iStock-1219401451-scaled.jpg')" , backgroundSize:"cover" , height:"80%", borderBottomLeftRadius:"50px"  }}>
        </div>
    
      </div>

      <div style={{height:"500px" ,backgroundColor:"#6c747c" , display:"flex", gap:"30px" , marginTop:"-90px" }}>
        <video width="800" height="500" controls>
          <source src={`file:///C:/Users/Hadj Sassi Mohamed/Desktop/Nouveau dossier (2)/front/src/media/A Day at Compass Made_ Harness Assembly.mp4`} type="video/mp4" />
       </video>
            
            <div style={{display:"flex"  , flexDirection:"column"}}>
            <h1 style={{color:"white" , marginTop:"30px" , textAlign:"center", fontFamily:"cursive", fontSize:"40px"}}>harness busniss is a growing everyday  </h1>
            <p style={{ marginleft:"20px", marginRight:"20px" , textAlign:"center", marginTop:"20px"}}> Just as the nervous system is essential for the human body, a well-designed harness is crucial for a car's optimal performance. With the vast array of vehicles on the market, harness production must adapt to meet the diverse needs of each model.      
            With the vast variety of vehicles and its complexities, harness production demands a high degree of customization, relying on a large team of experts to work together towards success.    </p>
             
              <div style={{display:"flex", alignItems:"center" , justifyContent:"center" , gap:"50px"}}>
                <div style={{display:"flex" , flexDirection:"column" , gap:"20px" , color:"white" }}>
                  <h1  style={{ marginTop:"20px" , textAlign:"center" , fontSize:"60px"}}>{count1}</h1>
                  <h1 style={{  textAlign:"center" , fontSize:"13px" , marginTop:"-10px"}}>Company in Tunisia</h1>
                </div>
                <div style={{display:"flex" , flexDirection:"column" , gap:"20px" , color:"white"}}>
                  <h1  style={{ marginTop:"20px" , textAlign:"center" , fontSize:"60px"}}>{count2}</h1>
                  <h1 style={{  textAlign:"center" , fontSize:"13px" , marginTop:"-10px"}}>Country in our App</h1>
                </div>
                <div style={{display:"flex" , flexDirection:"column" , gap:"20px" , color:"white"}}>
                  <h1  style={{ marginTop:"20px" , textAlign:"center" , fontSize:"60px"}}>{count3}</h1>
                  <h1 style={{  textAlign:"center" , fontSize:"13px" , marginTop:"-10px"}}>User in our App </h1>
                </div>
              </div>
        </div>
     
      </div>
      <div style={{height:"600px" }}>
        <h1 style={{textAlign:"center" , marginTop:"50px" , color:"#0c142c"}}>Our team</h1>
        <div style={{display:"flex", alignItems:"center" , justifyContent:"center"}}>
          <div style={{display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"center" , gap:"20px", width:"500px"}}> 
              <img    style={{height:"240px", width:"240px" , borderRadius:"120px"}} src="https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-1/326544098_898107118204108_8582246966382349806_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2WXr2H6unUQQ7kNvgG_1IfB&_nc_ht=scontent.ftun7-1.fna&oh=00_AYBQcy9Rj7XTRX-rXqwIwieFpxn6dqnSZAGgKB_LwbBRoQ&oe=666ABDE5"/>
               <h2 style={{fontFamily:"cursive", fontSize:"20px" , color:"#002857"}}>Hadj sassi Mohamed</h2>
               <h2 style={{ fontSize:"22px" , color:"#ff7514"}}>Front developper</h2>
               <p style={{textAlign:"center" , width:"300px" , color:"grey" , marginTop:"-10px"}}>An industrial Engineer in harness companies , worked in project , engineering and logistic </p>
          </div>
          <div className="vertical-line1"></div> 
          <div style={{display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"center" , gap:"20px" ,  width:"500px"}}> 
          <img src='https://i.pinimg.com/736x/03/93/b6/0393b60819851d4a55b2b7cba8459593.jpg' style={{height:"240px", width:"240px" , borderRadius:"120px"}}/>
               <h2 style={{fontFamily:"cursive", fontSize:"20px" , color:"#002857"}}>Barkaoui Mohamed</h2>
               <h2 style={{ fontSize:"22px" , color:"#ff7514"}}>Back developper</h2>
               <p style={{textAlign:"center" , width:"300px" , color:"grey" , marginTop:"-10px"}}>An incredable Full stuck web developper , python programmer , and an instructor in the Go My Code camp  </p>
          </div>
        </div>
        <h1 style={{textAlign:"center" , marginTop:"50px" , fontSize:"15px"}}>we try to grow our team more , so in the coming days we are going to begin recruiting , so stay tuned </h1>
      </div>
      <div style={{height:"500px" , backgroundColor:"#0c142c"}}>
        <div style={{display:"flex"}}>
        
           <div style={{width:"700px"}}>
            <h1 style={{color:"#ff7514" , fontSize:"19px",textAlign:"center" , marginTop:"80px"}}> Important Guidelines for a Positive and Productive Community</h1>
            <h3 style={{color:"white" , fontSize:"12px" ,textAlign:"center", margin:"10px", padding:"10px", lineHeight:"1.8"  }}>Before you start engaging with our community, please take a moment to review our policies:

<br/><span style={{fontWeight:"bold",color:"GrayText"}}>Respectful Dialogue:</span> Refrain from attacking individuals or companies. Instead, focus on criticizing behaviors or actions without mentioning names.
<br/><span style={{fontWeight:"bold",color:"GrayText"}}>Stay on Topic: </span> Only post content related to the car harness field. Irrelevant subjects will not be tolerated.
<br/><span style={{fontWeight:"bold",color:"GrayText"}}>No Sensitive Discussions:</span>  Avoid politics, religion, and racism-related topics to maintain a safe and inclusive environment.
<br/><span style={{fontWeight:"bold",color:"GrayText"}}>Relevant Advertising:</span>  Only post advertisements relevant to the car harness industry.
<br/><span style={{fontWeight:"bold",color:"GrayText"}}>Transparent Discussions:</span>  Remember that all discussions are public and may be monitored to ensure respectful communication. Any use of inappropriate language or sharing of confidential company information will not be tolerated.
<br/><span style={{fontWeight:"bold",color:"GrayText"}}>Our Mission:</span>  We're committed to building a positive and constructive community that fosters growth and collaboration in the car harness field.

<br/><span style={{fontWeight:"bold",color:"#ff7514"}}>Exciting News:</span> We're introducing Splice.Premium, a premium service that offers enhanced features, including the ability to post your own advertisements. Stay tuned for more information!


            </h3>
           </div>
           <div className="vertical-line1" style={{marginTop:"80px"}}></div> 
           <div style={{width:"1000px"}}> 
            <h1 style={{color:"white" , fontSize:"19px" ,marginTop:"80px" , textAlign:"center" , marginLeft:"30px", marginRight:"30px"}}>Your input matters! We value your feedback and ideas, and we invite you to share them with us. Your contributions can help us refine our development and reach new heights. Please don't hesitate to get in touch and let us know how we can improve. </h1>
            <input type='text' style={{width:"800px" , height:"200px",marginLeft:"40px" , backgroundColor:"#eeeee4" , borderRadius:"15px" , marginTop:"30px" }} placeholder='enter your insights ...' />
           </div>
        </div>

      </div>
    </div>
  );
}

export default About;