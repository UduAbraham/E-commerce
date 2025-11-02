import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Navbar from "./components/nav_bar";
import ProductPage from "./pages/ProductListing/product_page";


function App() {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<ProductPage />} path="/productpage" />
      
      
    </Routes>
    </>
  );
}

export default App;
