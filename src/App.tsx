import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Navbar from "./components/nav_bar";
import ProductPage from "./pages/ProductListing/product_page";
import CartPage from "./pages/CartPage";
import Footer from "./pages/Footer";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentSuccessPage from "./pages/CheckoutPage/payment_success_page";
import LoginPage from "./pages/schema";


function App() {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<ProductPage />} path="/productpage" />
      <Route element={<LoginPage />} path="/loginpage" />
      <Route element={<CartPage />} path="/cartpage" />
      <Route element={<CheckoutPage />} path="/checkoutpage" />
      <Route element={<PaymentSuccessPage />} path="/paymentsuccesspage" />
      
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
