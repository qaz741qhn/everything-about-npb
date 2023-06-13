import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const teams = ['giants', 'tigers', 'carp', 'dragons', 'swallows', 'baystars', 'hawks', 'eagles', 'lions', 'buffaloes', 'fighters', 'marines'];

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://multi-api.herokuapp.com/npb_news')
      .then(response => response.json())
      .then(data => setNews(data));
  }, []);

  return (
    <div>
      <div className="hamburger-menu">
        {teams.map(team => (
          <Link to={`/teams/${team}`} key={team}>
            {team}
          </Link>
        ))}
      </div>

      <div className="news">
        {news.map(article => (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <img src={article.image_url} alt={article.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
