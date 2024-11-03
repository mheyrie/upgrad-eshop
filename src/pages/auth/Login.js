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
    <div
      className="bg-gradient"
      style={{
        background: "linear-gradient(to right, #2D517B, #49C7EC)",
        minHeight: "100vh",
      }}
    >
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <form className="mx-4 mt-4" onSubmit={handleSubmit}>
          {/* Email Fieldset */}
          <legend className="border rounded-lg p-3">
            Email
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </legend>

          {/* Password Fieldset */}
          <fieldset className="border rounded-lg p-3 position-relative mt-3">
            <legend className="font-weight-bold">Password</legend>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your password"
              required
            />
            {/* Toggle Password Visibility Button */}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="position-absolute top-50 end-0 translate-middle-y btn btn-link"
              style={{ right: "10px" }}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </fieldset>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-primary">
              Forgot password?
            </Link>
          </div>

          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </form>
        <div className="text-center mt-2">
          <div className="d-flex align-items-center justify-content-center mt-2">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-muted">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-muted mr-2">New User?</p>
          <Link to="/signup" className="text-primary font-weight-bold">
            SIGN UP HERE
          </Link>
        </div>
      </div>
    </div>
  );
}
