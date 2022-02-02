import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../SearchBar/SearchBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { AppBar, InputBase, Paper, TextField } from "@material-ui/core";

import { Box } from "@material-ui/core";

import { Toolbar } from "@material-ui/core";

import { Typography } from "@material-ui/core";

import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchNews, { GetNews } from "../SearchNews/SearchNews";
const api = "82d4b9a5a1884a75b48b2cb8cf4dde6a";

function Appbar() {
  const [search, setSearch] = useState("");
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  const getSearchNews = (data) => {
    console.log("GOKUL");
    console.log(data);
    // const url = `https://newsapi.org/v2/top-headlines?q=${data}&country=us&from=2022-02-01&to=2021-02-02&apiKey=${api}`;

    // fetch(url)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setNews(data);
    //   });

    GetNews(data);

    navigate("/search");
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography
              variant="h4"
              component="div"
              sx={{ mr: 2, flexGrow: 1 }}
            >
              News-24
            </Typography>

            <Button
              color="inherit"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/science");
              }}
            >
              Science
            </Button>

            <Button
              color="inherit"
              onClick={() => {
                navigate("/business");
              }}
            >
              Business
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/sports");
              }}
            >
              Sports
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/entertainment");
              }}
            >
              Entertainment
            </Button>
            <TextField
              name="news"
              onChange={(e) => setSearch(e.target.value)}
              size="small" //TODO move to styling
              variant="outlined"
              color="secondary"
              style={{ marginRight: "1rem", color: "white" }}
            />
            <Button
              onClick={() => getSearchNews(search)}
              variant="contained"
              style={{ color: "blue", backgroundColor: "white" }}
            >
              Search
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Appbar;
