import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProductCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://st.depositphotos.com/1001877/2240/i/950/depositphotos_22406555-stock-illustration-laptop-mobile-phone-and-digital.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">BUY</Button>
      </Card.Body>
    </Card>
  );
}
