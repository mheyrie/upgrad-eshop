import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout({ children }) {
  const location = useLocation();
  const hideFooter = location.pathname === "/signup" || location.pathname === "/login";

  return (
    <div className="home-landing">
      <Navbar />
      <main className="relative overflow-hidden">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
