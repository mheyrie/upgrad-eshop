import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import products from "../data/data.json";

export default function ProductCard() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {products.map((product) => (
        <Link 
          key={product.id} 
          to={`/product/${product.id}`} // Navigate to the product details page using product ID
          className="text-decoration-none" // Optional: removes underline from the link
        >
          <Card
            style={{ width: "18rem" }}
            className="border border-secondary m-4 bg-white cus-shadow"
          >
            <Card.Img variant="top" src={product.productImage} />
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title className="mb-0">{product.title}</Card.Title>
                <span className="text-secondary fw-bold">₹ {product.price}</span>
              </div>
              <Card.Text className="mt-2">{product.description}</Card.Text>
              <Button
                className="text-white px-4"
                style={{ backgroundColor: "#3F51B5" }}
              >
                BUY
              </Button>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  );
}
