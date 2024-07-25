import React from 'react'
import TrainingData from './Data/Training_Data'
import TrainingCard from './Pages/TrainingCard'

function Brouillon() {
  return (
    
    <div>
        <div style={{display:"flex", flexDirection:"column" , alignItems:"center"}}>
         <h1 style={{textAlign:"center" , marginTop:"20px"}}>Integration plan</h1> 
    <p style={{textWrap:"wrap" , width:"1000px" , marginTop:"20px" , textAlign:"center"}}>
    The arrival of a new employee is a critical phase in the recruitment process. Company onboarding constitutes 50% of hiring success! However, time constraints often lead companies to overlook this phase, resulting in an ineffective integration plan. Poor adaptation can lead to early employee turnover. It's crucial to emphasize the importance of the integration process.

     In our project, Splice, our primary focus is on your training. That's why we have created a detailed list of essential skills you need to master for successful integration. Each skill area is introduced to ensure you have a comprehensive understanding. Remember, even a basic grasp of related fields is necessary to fully understand the big picture.
    </p> 


     <div style={{display:"felx" ,flexWrap:"wrap" , gap:"20px" ,justifyContent:"center" ,alignItems:"center"}}>
       {TrainingData.map((e)=>(<TrainingCard field={e.field} skill={e.Skill} />))}

     </div>

    



    </div> 



    </div>
  )
}

export default Brouillon