import React, { useState } from "react";
import { Link } from "react-router-dom";
import LockIcon from "@material-ui/icons/Lock";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "@material-ui/core/Button";
export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match.");
      } else {
        setErrorMessage("");
                console.log("Signup successful!", { password, confirmPassword });
      }
  };

  // Toggle between showing and hiding password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mt-5 d-flex flex-column justify-content-center align-items-center login">
      <div className="p-2 bg-danger rounded-3">
        <LockIcon className=" text-white" />
      </div>
      <div
        className="bg-white rounded-2xl mt-4 h-100 w-100"
        style={{ maxWidth: "30rem" }}
      >
        <div className="text-center mx-4 pt-4">
          <span className="fw-semibold fs-2">Sign in</span>
        </div>
        <form
          className="d-flex flex-column gap-2 mx-4 mt-4 "
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control p-2"
              placeholder="First Name*"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control p-2"
              placeholder="Last Name *"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control p-2"
              placeholder="Email Address *"
              required
            />
          </div>
          <div className="form-group position-relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Password *"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="position-absolute end-0 translate-middle-y btn btn-link"
              style={{ left: "350px", top: "15px" }}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
          <div className="form-group position-relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={confirmPassword}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Confirm Password *"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="position-absolute end-0 translate-middle-y btn btn-link"
              style={{ left: "350px", top: "15px" }}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
            {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}
          </div>
          <div className="form-group">
            <input
              type="number"
              id="contactNumber"
              value={contactNumber}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control p-2"
              placeholder="Contact Number *"
              required
            />
          </div>

          <Button
            variant="contained"
            className="col-12 text-white mt-3"
            style={{ backgroundColor: "#3f51b5" }}
          >
            SIGN UP
          </Button>
        </form>

        <div className="d-flex col-12 mt-4 mx-4">
          <p className="">Already have an account?</p>{" "}
          <Link to="/signup" className="text-primary font-weight-bold">
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
}
