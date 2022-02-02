import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import "react-bootstrap";

function Footer() {
  return (
    <div>
      <Container style={{ backgroundColor: "#3f51b5", color: "#fff" }}>
        <Typography
          variant="h4"
          color="white"
          align="center"
          style={{ marginBottom: 5 }}
        >
          News-24
        </Typography>
        <Grid container spacing={2} style={{ marginTop: 3 }}>
          <Grid item xs={2} md={2} lg={2}></Grid>
          <Grid item xs={3} md={3} lg={3}>
            <Typography variant="h5">Our Society </Typography>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Create Your Own Add
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Advertise with us
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3} md={3} lg={3}>
            <Typography variant="h5">Trending</Typography>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Covid-19
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Business
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Sports
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Cinemas
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3} md={3} lg={3}>
            <Typography variant="h5">Contact Us</Typography>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <a
                  href="https://www.facebook.com/"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/webhp"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Google
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
