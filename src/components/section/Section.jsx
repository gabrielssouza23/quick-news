import React, { useState, useEffect } from 'react';
// import GET_ARTICLE from '../../Api/news/getArticleNYT'
import GET_TOPSTORIES from '../../Api/news/getTopStories';
import { HorizontalCard } from '../card/HorizontalCard';
import { select } from '@material-tailwind/react';

const Section = ({selectedCategory}) => {

  const [articles, setArticles] = useState([]);

  const fetchData = async (category) => {
    const { url, options } = GET_TOPSTORIES(category);
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };

  const NewsSection = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      const getArticles = async () => {
        const data = await fetchData(selectedCategory);
        setArticles(data.results);
      };
      getArticles();
    }, []);

    

    return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 gap-4">
          {articles.slice(0, 1).map((article, index) => (
            <HorizontalCard key={index} article={article} />
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {articles.slice(1, 3).map((article, index) => (
              <HorizontalCard key={index} article={article} />
            ))}
          </div>

          {articles.slice(3).map((article, index) => (
            <HorizontalCard key={index} article={article} />
          ))}
        </div>
      </div>
    );
  };

  return <NewsSection />;
};

export default Section;
