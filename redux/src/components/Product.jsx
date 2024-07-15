import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Product.css'; // Import the CSS file
import { useDispatch } from 'react-redux';
import { add } from '../store/Cartslice';
const Product = () => {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(result => setProducts(result));
  }, []);

 const dispatch= useDispatch()

 const addtoCart=(product)=>{
     //dispatch an add action
     dispatch(add(product))

 }
  const cards = products.map(product => (
    <Col md={3} key={product.id}>
      <Card className="product-card">
        <Card.Img variant="top" src={product.image} alt={product.title} className="product-image" />
        <Card.Body className="product-card-body">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            ${product.price}
          </Card.Text>
          <Button variant="primary"onClick={()=>(addtoCart(product))}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <Container>
      <h1 id="pro">THE PRODUCTS</h1>
      <Row>
        {cards}
      </Row>
    </Container>
  );
};

export default Product;
