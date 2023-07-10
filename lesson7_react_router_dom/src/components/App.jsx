import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from "./Nav";
import HomePage from "./Pages/HomePages"
import ProductsPage from "./Pages/ProductsPage"
import Basket from "./Pages/BasketPage"
import NotFoundPage from "./Pages/NotFoundPAge"
import SingleProduct from "./Pages/SingleProduct";

function App() {
  return (
    <Router>

      <Nav></Nav>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/basket" element={<Basket />}/>
        <Route path="products/:id" element={<SingleProduct/>}></Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>


    </Router>
  );
}

export default App;
