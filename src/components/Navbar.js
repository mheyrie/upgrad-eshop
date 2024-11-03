import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";

export default function Navbar() {
  return (
    <nav className="d-flex justify-content-between align-content-center p-2 ">
      <div className="">
        <ShoppingCartIcon />
        <span className="">upGrad E-Shop</span>
      </div>
      <div className="position-relative">
      <SearchIcon className="position-absolute translate-middle-y ms-3 text-white" style={{top:'20px'}}/>
        <input 
          type="text" 
          placeholder="Search..." 
          className="ps-5 pe-4 py-2 border-0 rounded text-white" 
          style={{ backgroundColor: '#5c6bc0', outline: 'none' }}
          onFocus={(e) => e.target.style.border = 'none'}
        />
      </div>
      <div className="">
        <ul className="d-flex text-decoration-none gap-4 list-unstyled">
          <li>Login</li>
          <li>Signup</li>
        </ul>
      </div>
    </nav>
  );
}
