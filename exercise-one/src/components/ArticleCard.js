import React from 'react';
import ArticleData from "../components/Data";

function ArticleCard({article}){
  return(
    <article className="articleCard">
      <div className="articleCard__image">
        <img src={article.image.url} alt={article.image.alt}/>
      </div>
      <div className="articleCard__text">
        <h2>{article.title}</h2>
        <p>Date</p>
        <p>{article.blurb}</p>
        <a href={`article/${article.id}`}>Read More</a>
      </div>
    </article>
  )
}

export default ArticleCard;
// the value of those keys are showing up & looping
