import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Link,
} from "@material-ui/core";
import { Carousel } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import Demo from "../Card/Demo";

function Home() {
  const [news, setNews] = useState([]);
  const [innews, setInNews] = useState([]);
  const [wnews, setWnews] = useState([]);
  const wNews = wnews.slice(0, 5);
  const api = "82d4b9a5a1884a75b48b2cb8cf4dde6a";

  const getIndiaNews = () => {
    const url = `https://newsapi.org/v2/top-headlines?q=all&country=in&from=2022-02-01&to=2021-02-02&apiKey=${api}`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setInNews(data.articles);
      });
  };
  const getWorldNews = () => {
    const url = `https://newsapi.org/v2/top-headlines?q=all&country=us&from=2022-02-01&to=2021-02-02&apiKey=${api}`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWnews(data.articles);
      });
  };

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?q=all&country=us&from=2022-02-01&to=2021-02-02&apiKey=${api}`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setNews(data.articles);
      });

    getIndiaNews();
    getWorldNews();
  }, []);

  return (
    <div
      style={{
        marginTop: "4.5rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Carousel>
            {news.slice(2, 5).map((item) => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={item.urlToImage}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" color="primary">
            Trending News
          </Typography>
          <ol>
            {news.slice(2, 11).map((item) => (
              <li>
                <a
                  href={item.url}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {" "}
                  <h6>{item.title}</h6>{" "}
                </a>
              </li>
            ))}
          </ol>
        </Grid>
        <Grid item xs={7}>
          <Typography
            style={{
              color: "#3f51b5",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
            variant="h4"
          >
            India News
          </Typography>
          {innews.slice(0, 6).map((item) => (
            <div>
              <Demo data={item} />
            </div>
          ))}
        </Grid>
        <Grid item xs={5}>
          <Typography
            style={{
              color: "#3f51b5",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
            variant="h4"
          >
            World News
          </Typography>
          {wnews.slice(0, 4).map((item) => (
            <div>
              <Demo data={item} />
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
