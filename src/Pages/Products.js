import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import Box from '../Components/Box';
import Navbar from '../Components/Navbar';
import axios from "axios";

import "../products.css"

const Products = () => {
    const [products, setProducts] = useState(null);
    const fetchProducts = async () => {
        const { data } = await axios.get("/products");
        console.log(data);
        setProducts(data);
    }
    useEffect(() => {
        fetchProducts();
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
              products.map((item) => {
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