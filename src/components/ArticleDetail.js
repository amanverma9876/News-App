
import React from 'react';

const ArticleDetail = ({ article }) => {
  return (
    <div className="article-detail">
      <h2>{article.title}</h2>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
