import React, { useState } from "react";
const api = "82d4b9a5a1884a75b48b2cb8cf4dde6a";

function SearchNews(data) {
  console.log("SEARCH NEWS HERE");
  return (
    <div
      style={{
        marginTop: "4.5rem",
      }}
    >
      <h2>Searchnews</h2>
    </div>
  );
}

export default SearchNews;

export const GetNews = (data) => {
  const [news, setNews] = useState([]);
  const url = `https://newsapi.org/v2/top-headlines?q=${data}&country=us&from=2022-02-01&to=2021-02-02&apiKey=${api}`;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setNews(data);
    });
};
