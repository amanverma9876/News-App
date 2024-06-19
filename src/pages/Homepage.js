
import React, { useState, useEffect } from 'react';
import { fetchArticles } from '../api';
import ArticleCard from '../components/ArticleCard';
import './HomePage.css';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        const response = await fetchArticles(category, page);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, [category, page]);

  const categories = ['business', 'technology', 'entertainment'];

  return (
    <div className="home-page">
      <div className="filter-container">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-button ${category === cat ? 'active' : ''}`}
            onClick={() => {
              setCategory(cat);
              setPage(1);
            }}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="article-list">
          {articles.map(article => (
            <ArticleCard key={article.url} article={article} />
          ))}
        </div>
      )}
      <ul className="pagination">
        <li>
          <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
            Previous
          </button>
        </li>
        <li>
          <button onClick={() => setPage(page + 1)}>Next</button>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
