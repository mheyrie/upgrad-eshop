export default function Signup() {
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
          <div className="form-group">
            <label htmlFor="email" className="font-weight-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group position-relative">
            <label htmlFor="password" className="font-weight-bold">
              Password
            </label>
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
