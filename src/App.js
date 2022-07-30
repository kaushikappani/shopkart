//imports
import React from "react";
import Products from "./Pages/Products";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DetailPage from "./Pages/DetailPage";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";

// App Component Which routes 

/*
    /       - Home Products page
    /login  - Login Page 
    /product/:id  - DetailsPage    id as paramater
    /cart      - Cart Page
*/  

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<DetailPage />} />
        <Route path = "/cart" element = {<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
