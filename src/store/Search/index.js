import * as R from "ramda";

export const defaultState={
    sports=[],
}

export default (state = defaultState)=>{

   
}

export const fetchNews = (data) => {
    const url = `https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=fec73822a9e74fe2b17bd989c2a8df42`;
  
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });

      return 
  };
  