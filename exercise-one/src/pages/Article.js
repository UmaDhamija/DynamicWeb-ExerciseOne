import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import DATA from "../components/Data";
import ArticleItem from "../components/ArticleItem";

function Article(){
  const [article, setArticle] = useState({});
  let {id} = useParams();
  // this is the id that'll tell us which article to load from the json
  useEffect(() => {
    let dataArray = DATA.filter(article => article.id === id);
    setArticle(dataArray[0]);
    console.log("dataArray: ", dataArray);
  },[id]);
  console.log('article', article);
  return(
    <div>
      <header className="articleHead"
      style = {{backgroundImage: `url(${article.image ? article.image.url: ""})`}}>
        <div className="articleHeadWrapper">
          <h1>{article.title}</h1>
          <p>{article.publishedDate}</p>
          <p className="blurb">{article.blurb}</p>
        </div>
      </header>

      <main className="articleContent">
        <div className="articleContentWrapper">
          {article.articleText && article.articleText.map((text, i) => (
            <p key={i}>{text.data}</p>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Article;
