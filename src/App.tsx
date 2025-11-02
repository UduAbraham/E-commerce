import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Navbar from "./components/nav_bar";


function App() {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route element={<HomePage />} path="/" />
      
      
    </Routes>
    </>
  );
}

export default App;
