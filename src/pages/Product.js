import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Button } from "react-bootstrap";
import { useState } from "react";
import SortDropDown from "../components/SortDropDown";

export default function Product() {
  const [sortOption, setSortOption] = useState("default");

  const handleSelect = (e) => {
    setSortOption(e);
  };

  return (
    <div className="product-landing">
      <div
        className="d-flex justify-content-center align-content-center pt-3"
        style={{ marginLeft: "20rem" }}
      >
        <div className="p-2 bg-white" style={{ width: "40rem" }}>
          <div className="border">
            <ul className="d-flex text-uppercase text-decoration-none list-unstyled gap-4 justify-content-center align-content-center px-4 py-2 fw-semibold m-0 text-center text-secondary">
              <li className="border-end pe-4">All</li>
              <li className="border-end pe-4">Apparel</li>
              <li className="border-end pe-4">Electronics</li>
              <li className="">Personal Care</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" px-4">
        <SortDropDown onSelect={handleSelect} />
      </div>
      <div className="" style={{ marginLeft: "20rem" }}>
        <ProductCard />
      </div>
    </div>
  );
}
