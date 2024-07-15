import { useSelector ,useDispatch} from 'react-redux';
import { Card,  Col,Button, Container, Row } from 'react-bootstrap'; // Import necessary components
// import './Cart.css'; // Assuming you have some CSS for styling
import { remove } from '../store/Cartslice';
const Cart = () => {
  const products = useSelector(state => state.cart); // Adjust this according to your state structure
  const dispatch= useDispatch();
  const removefromcart=(id)=>
  {
    //dispatch
   dispatch((remove(id)))

  }
  const cards = products.map(product => (
    <Col md={8} key={product.id}>
      <Card className="product-card">
        <Card.Img variant="top" src={product.image} alt={product.title} className="product-image" />
        <Card.Body className="product-card-body">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            ${product.price}
          </Card.Text>
          {/* Remove Add to Cart button as it's not necessary in the Cart component */}
        </Card.Body>
        <Card.Footer style={{background:'silver'}}>
          <Button variant='danger' onClick={()=>removefromcart(product.id)}>Remove</Button>
        </Card.Footer>
      </Card>
    </Col>
  ));

  return (
    <Container>
      <Row>
        {cards}
      </Row>
    </Container>
  );
}

export default Cart;
