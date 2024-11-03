import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div>
    <h1>Product Page</h1>
    <Link to="/product/1">Go to Product 1 Details</Link>
    <Link to="/checkout">Proceed to Checkout</Link>
  </div>
  )
}