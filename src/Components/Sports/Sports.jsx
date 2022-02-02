import React, { useEffect, useState } from "react";
import { fetchSports } from "../../store/Search/action";

import { useSelector } from "react-redux";
import Demo from "../Card/Demo";
import { Container, Typography } from "@material-ui/core";
const api = "82d4b9a5a1884a75b48b2cb8cf4dde6a";
function Sports() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=${api}`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNews(data.articles);
      });
  }, []);

  console.log(news);

  return (
    <div>
      <Container
        style={{
          marginTop: "4.5rem",
        }}
      >
        <Typography
          align="center"
          variant="h4"
          color="primary"
          style={{
            marginBottom: "1rem",
          }}
        >
          Sports News
        </Typography>
        {news.length > 0 && news.map((item) => <Demo data={item} />)}
      </Container>
    </div>
  );
}

export default Sports;
