import React from 'react';
import { useParams } from 'react-router-dom';

function NewsArticle({ newsData }) {

  const { id } = useParams(); // Get the id parameter from the URL

  const article = newsData.find((article) => article.id === id); // Find the article with the matching id

  if (!article) {
    return <div>Article not found</div>;
  }



  return (
    <div style={{display:'flex' , flexDirection:'column' , alignItems:'center' , gap:'20px' , marginTop:'50px'}}>

      <h1>{article.name}</h1>

      <p style={{textWrap:"wrap" , width:"1000px"}}>{article.description}</p>
      <img src={article.image}  />
    </div>
  );
}

export default NewsArticle;
