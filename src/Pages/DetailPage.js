//imports
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Container } from "@mui/system";
import { Grid, Rating, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import LocalMallIcon from "@mui/icons-material/LocalMall";

//styles
const imageStyle = {
  maxHeight: "500px",
  padding: "30px",
  maxWidth: "80%",
};

const DetailPage = () => {
  const { id } = useParams();                     // parameter passed with URL (ID)
  const [data, setData] = useState(null);         // Data State
  const fetch = async () => {                     // fetch function
    const { data } = await axios.get("/products");
    setData(
      data.filter((d) => {                         // Data filtering 
        return d.id == id;
      })
    );
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <Navbar auth= {true} />
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            {data && (
              <img
                alt={data[0].title}
                style={imageStyle}
                src={data[0].image}
              ></img>
            )}
          </Grid>
          {data && (
            <Grid style={{ padding: "30px" }} item xs={12} sm={12} md={6}>
              <Typography style={{ paddingBottom: "10px" }} variant="h4">
                {data[0].title}
              </Typography>
              <Typography style={{}} variant="p">
                {data[0].description}
              </Typography>
              <br />
              <Rating name="read-only" value={data[0].rating} readOnly />
              <Typography style={{ paddingTop: "20px" }} variant="h4">
                ₹ {data[0].amount}
              </Typography>
              <Typography
                style={{ paddingTop: "20px", color: "#1fad8c" }}
                variant="p"
              >
                Inclusive of all taxes
              </Typography>
              <div className="sizeDiv">
                <Button variant="outlined">S</Button>
                <Button variant="outlined">M</Button>
                <Button variant="outlined">L</Button>
                <Button variant="outlined">XL</Button>
              </div>

              <div style={{ paddingTop: "20px" }}>
                <Button
                  style={{ bottom: "2px", width: "55%", backgroundColor: "#153A8C" }}
                  variant="contained"
                  size="large"
                >
                  <LocalMallIcon /> Add To Cart
                </Button>
                <Button
                  style={{ float: "right", bottom: "2px", width: "40%" }}
                  variant="outlined"
                  size="large"
                >
                  Buy Now
                </Button>
              </div>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default DetailPage;
