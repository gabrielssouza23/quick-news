import React from 'react'
import GET_ARTICLE from '../../Api/news/getArticleNYT'

const Section = () => {

  const { url, options } = GET_ARTICLE();

  const fetchData = async () => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }

  const handleClick = fetchData();


  return (
    <div>
      {
        JSON.stringify(handleClick)
      }
    </div>
  )
}

export default Section