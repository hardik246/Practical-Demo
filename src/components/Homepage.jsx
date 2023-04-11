import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../actions/Index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme();

export default function Homepage() {
  const list = useSelector((state) => state.getReducer.list);
  const cart = useSelector((state) => state.getReducer.cartList);
  const dataError = useSelector((state) => state.getReducer.fetchDataError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchProducts());
  }, []);

  useEffect(() => {
    if (dataError) {
      toast.error(dataError?.message);
    }
  }, [dataError])

  const addCartClick = (image, price, id, category) => {
    let obj = {
      image: image,
      price: price,
      id: id,
      name: category,
    };
    dispatch(actions.cartList(obj));
    toast.success("Add to Cart!");
  };

  const viewClick = (image, price, id, category, title, description, rate) => {
    let obj = {
      image: image,
      price: price,
      id: id,
      name: category,
      title: title,
      description: description,
      rate: rate,
    };
    dispatch(actions.viewProduct(obj));
  };

  // let index = cart.findIndex((element) => element.id === );

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Container sx={{ py: 12 }} maxWidth="md">
          <Grid container spacing={4}>
            {list.map((listProduct, i) => (
              <Grid item key={listProduct} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: "60%",
                      height: "60%",
                      marginLeft: "50px",
                    }}
                    image={listProduct.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {listProduct.category}
                    </Typography>
                    <Typography>{listProduct.title}</Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      ${listProduct.price}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      {listProduct.rating.rate}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="/viewProduct" style={{ textDecoration: "none" }}>
                      <Button
                        size="small"
                        onClick={() =>
                          viewClick(
                            listProduct.image,
                            listProduct.price,
                            listProduct.id,
                            listProduct.category,
                            listProduct.title,
                            listProduct.description,
                            listProduct.rate
                          )
                        }
                      >
                        View
                      </Button>
                    </Link>

                    {cart.some((element) => element.id === listProduct.id) ? (
                      <Link to="/cart" style={{ textDecoration: "none" }}>
                        {" "}
                        <Button size="small" style={{ color: "red" }}>
                          Go to cart
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        size="small"
                        onClick={() =>
                          addCartClick(
                            listProduct.image,
                            listProduct.price,
                            listProduct.id,
                            listProduct.category
                          )
                        }
                      >
                        Add to cart
                      </Button>
                    )}
                    <ToastContainer />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        {/* <Copyright /> */}
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
