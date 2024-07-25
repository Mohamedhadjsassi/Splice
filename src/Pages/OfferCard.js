import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function OfferCard({id , name , plant , email }) {
  return (
   <Link to={`/Industry/${plant}/${id}`} style={{textDecoration:"none"}}>
    <Card style={{ width: '500px', marginTop:"20px",
      
     }}className="custom-card">
    
      <Card.Body>
        <Card.Title>post : {name}</Card.Title>
        <Card.Text>
        plant :  {plant} <br/>
        email : {email}
        </Card.Text>
      
      </Card.Body>
    </Card> 
    </Link>
  );
}

export default OfferCard;