import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 


export default function Layout({ children }) {
  return (
    <div className="home-landing">
      <Navbar />
      <main className="relative overflow-hidden">{children}</main>
      <Footer />
    </div>
  );
}
