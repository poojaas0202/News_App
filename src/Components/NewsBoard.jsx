import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => { // Destructure props to access category

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error("Error fetching news:", error)); // Add error handling
  }, [category]); // Include category in dependency array

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news, index) => (
        <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
    </div>
  )
}

export default NewsBoard;
