import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PricesCoinsBar from "../components/PricesCoinsBar";

export default function NotFound() {
  return (
    <>
      <PricesCoinsBar />
      <Navbar />
      <p>This page doesn't exists</p>
      <Footer />
    </>
  );
}
