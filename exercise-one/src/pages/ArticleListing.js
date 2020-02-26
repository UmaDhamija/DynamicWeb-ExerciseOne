import React from 'react';
import ArticleCard from '../components/ArticleCard';
import Data from "../components/Data";

function ArticleListing(){
  console.log('data', Data);
  return(
      <div className="articleListing">
        <header>
          <h1>Articles</h1>
        </header>
        <main>
          {Data.map((article, i) => (
            <ArticleCard
            key={i}
            article={article}
            />
          ))}
        </main>
      </div>
      // add an article card
  )
}


export default ArticleListing;
// the brackets tell that its javascript
// map is an array.
// its like a for loop; it recieves a call back. It also recieves an index (key:value)
// The arrow is auto returning whatevers after (anythign within parenthesis is executing)
// props - key and article
// the article is whats being passed in
