
import React from 'react';
import { useParams } from 'react-router-dom';
import './ArticlePage.css';

const ArticlePage = () => {
  const { id } = useParams();

  return (
    <div className="article-page">
      <h1>Article Page</h1>
      <p>Displaying details for article ID: {id}</p>
    </div>
  );
};

export default ArticlePage;
