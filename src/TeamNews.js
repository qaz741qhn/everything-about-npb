import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function TeamNews() {
  const { teamName } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`https://multi-api.herokuapp.com/npb_news?team_name=${teamName}`)
      .then(response => response.json())
      .then(data => setNews(data));
  }, [teamName]);

  return (
    <div className="news">
      {news.map(article => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
          <img src={article.image_url} alt={article.title} />
        </div>
      ))}
    </div>
  );
}

export default TeamNews;
