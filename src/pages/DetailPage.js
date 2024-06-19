
import React from 'react';
import { useLocation } from 'react-router-dom';
import ArticleDetail from '../components/ArticleDetail';

const DetailPage = () => {
  const location = useLocation();
  const { article } = location.state;

  return (
    <div className="detail-page">
      <ArticleDetail article={article} />
    </div>
  );
};

export default DetailPage;
