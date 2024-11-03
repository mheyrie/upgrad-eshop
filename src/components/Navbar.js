import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="d-flex justify-content-between align-content-center p-2 px-4 ">
      <div className="d-flex ">
        <Link
          to="/"
          className="text-decoration-none text-white justify-content-center align-content-center"
        >
          <ShoppingCartIcon />
          <span className="">upGrad E-Shop</span>
        </Link>
      </div>
      <div className="position-relative">
        <SearchIcon
          className="position-absolute translate-middle-y ms-3 text-white"
          style={{ top: "20px" }}
        />
        <input
          type="text"
          placeholder="Search..."
          className="ps-5 pe-4 py-2 border-0 rounded text-white"
          style={{ backgroundColor: "#5c6bc0", outline: "none" }}
          onFocus={(e) => (e.target.style.border = "none")}
        />
      </div>
      <div className="">
        <ul className="d-flex gap-4 list-unstyled">
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="text-white">
                <li className="">Login</li>
              </Link>
              <Link to="/login" className="text-white">
                <li>Signup</li>
              </Link>
            </>
          ) : (
            <>
              <li>Home</li>
              <li>Add Product</li>
              <button type="button" class="btn btn-danger">
                LOGOUT
              </button>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
