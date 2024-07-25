import React from 'react'
import TrainingData from '../Data/Training_Data';
import { useParams } from 'react-router-dom';
function Skillpage({Training_Data}) {
    
    const { id } = useParams(); // Get the id parameter from the URL

    const skill = TrainingData.find((skill) => skill.Training_id === id); // Find the article with the matching id
  

  return (

    
    <div style={{display:"flex" , flexDirection:"column", alignItems:"center"}}>
      
     <h1 style={{marginTop:"30px" , textAlign:"center"}}> {skill.Skill}</h1> 
      
     
     <table style={{marginTop:"30px" }}>
    <tr>
        <th>Skills</th>
        <th>Link</th>
        <th>Status</th>
    </tr>
    <tr>
        <td>{skill.parts[0].name}</td>
        <td><a href={skill.parts[0].link} style={{textDecoration:"none" , color:"black"}}> study more about {skill.parts[0].name} </a></td>
        <td> <button style={{width:"150px" , height:"50px" , backgroundColor:"#15365F" , color:"white" , borderRadius:"10px"}}>Not mastred</button></td>
    </tr>
    <tr>
        <td>{skill.parts[1].name}</td>
        <td><a href={skill.parts[1].link} style={{textDecoration:"none" , color:"black"}}> study more about {skill.parts[1].name} </a></td>
        <td> <button style={{width:"150px" , height:"50px" , backgroundColor:"#15365F" , color:"white" , borderRadius:"10px"}}>Not mastred</button></td>
    </tr>
    <tr>
        <td>{skill.parts[2].name}</td>
        <td><a href={skill.parts[2].link} style={{textDecoration:"none" , color:"black"}}> study more about {skill.parts[2].name} </a></td>
        <td> <button style={{width:"150px" , height:"50px" , backgroundColor:"#15365F" , color:"white" , borderRadius:"10px"}}>Not mastred</button></td>
    </tr>
    <tr>
        <td>{skill.parts[3].name}</td>
        <td><a href={skill.parts[3].link} style={{textDecoration:"none" , color:"black"}}> study more about {skill.parts[3].name} </a></td>
        <td> <button style={{width:"150px" , height:"50px" , backgroundColor:"#15365F" , color:"white" , borderRadius:"10px"}}>Not mastred</button></td>
    </tr>
    <tr>
        <td>{skill.parts[4].name}</td>
        <td><a href={skill.parts[4].link} style={{textDecoration:"none" , color:"black"}}> study more about {skill.parts[4].name} </a></td>
        <td> <button style={{width:"150px" , height:"50px" , backgroundColor:"#15365F" , color:"white" , borderRadius:"10px"}}>Not mastred</button></td>
    </tr>
    
</table>

<button style={{width:"250px" , height:"60px" , backgroundColor:"#15365F" , color:"white" , borderRadius:"10px", marginTop:"20px" }}>Still in Progress</button>

<div style={{width:"1000px" , height:"2px" , backgroundColor:"#ff7514" , marginTop:"30px"}} ></div>
<h3 style={{marginTop:"30px" , color:"#15365F"}} >Resumy</h3>
<p style={{marginTop:"30px" , width:"1000px"}}> {skill.resumy}</p>
      </div>
  )
}

export default Skillpage