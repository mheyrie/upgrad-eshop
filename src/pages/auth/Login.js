import React, { useState } from "react";
import { Link } from "react-router-dom";
import LockIcon from "@material-ui/icons/Lock";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "@material-ui/core/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
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
        <form className="mx-4 mt-4" onSubmit={handleSubmit}>
          <fieldset className="custom-fieldset rounded-2 p-3">
            <legend className="custom-legend">Email</legend>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </fieldset>

          <fieldset className="custom-fieldset rounded-2 p-3 mt-3 position-relative">
            <legend className="custom-legend">Password</legend>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="position-absolute end-0 translate-middle-y btn btn-link"
              style={{ left: "350px", top: "30px" }}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </fieldset>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <Link to="#" className="text-primary">
              Forgot password?
            </Link>
          </div>

          <Button
            variant="contained"
            className="col-12 text-white mt-3"
            style={{ backgroundColor: "#3f51b5" }}
          >
            SIGN IN
          </Button>
        </form>

        <div className="d-flex col-12 mt-4 mx-4">
          <p className="">Don't you have an account?</p>{" "}
          <Link to="/signup" className="text-primary font-weight-bold">
            SIGN UP HERE
          </Link>
        </div>
      </div>
    </div>
  );
}
