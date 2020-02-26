import React from 'react';
// controls what the user sess and what it does. If you aheve the url article, it controls what you see and what data you het.
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import ArticleListing from './pages/ArticleListing';
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/article/:id">
            <Article/>
          </Route>
          <Route path= "/">
            <ArticleListing/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
