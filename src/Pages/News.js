import React from 'react'
import NewsData from '../Data/News_Data'
import NewsCard from './NewsCard'

function News() {
  return (
    <div style={{width:"1400px" , display:'flex', gap:'20px', flexDirection:"column", marginTop:'50px' , marginLeft:"20px" , alignItems:'center' }}>
        
        <h1 style={{color:'#002857'}} >News</h1>
        
        {NewsData.map((e)=>(<NewsCard title={e.name} description={e.description} image={e.image} id={e.id} />))}
        
        </div>
  )
}

export default News


  