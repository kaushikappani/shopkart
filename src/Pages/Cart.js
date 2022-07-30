//imports
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import CartItem from '../Components/CartItem';
import axios from "axios";
import Summary from '../Components/Summary';

   
const Cart = () => {
     const [products, setProducts] = useState(null);      // Cart Products State
     const fetchProducts = async () => {                  // Fetching Cart Products
       const { data } = await axios.get("/products");    // For Example we kept all the products in Cart
       console.log(data); 
       setProducts(data);
     };
     useEffect(() => {
       fetchProducts();
     }, []);
    return (
      <div className="productsDiv">
        <Navbar auth = {true} />
        <Container>
          <Grid container>
            <Grid style={{ paddingTop: "30px" }} item xs={12} sm={12} md={7}>
              {products &&
                products.map((item) => {
                  return <CartItem data={item} />;
                })}
            </Grid>
            <Grid style={{ paddingTop: "30px" }} item xs={12} sm={12} md={4}>
              <Summary />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
}

export default Cart
