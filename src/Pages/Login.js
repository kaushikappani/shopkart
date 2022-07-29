import { Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "../Components/Navbar";

const Login = () => {
  return (
    <div className = "loginDiv">
      <Navbar auth={false} />
      <Container className="pagecontainer">
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h3">Shopkart</Typography>
            <Typography variant="caption">
              Stay fly in your high heels.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} style={{marginTop:"15px"}}>
            <TextField
              style={{ width: "100%" }}
              helperText="Please enter your email"
              id="email"
              label="Name"
              type="email"
            />
            <br />
            <TextField
              style={{ width: "100%" }}
              helperText="Please enter your password"
              id="password"
              label="Name"
              type="password"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
