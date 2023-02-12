// imports
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import Box from '../Components/Box';
import Navbar from '../Components/Navbar';
import axios from "axios";
//import css
import "../products.css"

//import fake db
import data from "../db.json"
const Products = () => {
    const [products, setProducts] = useState(null);     // products State initially set to null
    const fetchProducts = async () => {                 // fetch contents function
        // const { data } = await axios.get("/products");
        // console.log(data);
      
      setProducts(data.products);                              // updating products state
    }
    useEffect(() => {
        fetchProducts();                                // calling fetch function
    }, [])
    return (
      <div className="productsDiv">
        <Navbar auth = {true} />
        <Container style={{marginTop:"50px"}}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {products &&
              products.map((item) => {                // iterating over products
                return (
                  <Grid item xs={6} sm={6} md={3} key={item.id}>
                    <Box className="boxStyle" data={item} />
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </div>
    );
}

export default Products
