import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const truncateDescription = (text) => {
  return text.length > 200 ? text.slice(0, 200) + '...' : text;
};





function NewsCard({title , description , image , id}) {
  
  return (
    <Card style={{ width: '700px', marginTop:"20px" }} className="custom-card">
      <Card.Img variant="top" src={image} style={{height:"300px"}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {truncateDescription(description)}
        </Card.Text>
       <Link to={`/Article/${id}`}> <Button className='newsbutton' variant="primary"     style={{ marginLeft: '230px',  backgroundColor:" #ff7514" , border:'none' , width:'200px'}}>read the article</Button> </Link>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;