import React from 'react';
import NavBar from '../NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticlePage from '../ArticlePage/ArticlePage';

const App = () => {
  return (
    <div className="App">
    <div>
      <NavBar />
    </div>
    <div>
      <ArticlePage />
    </div>
    </div>
  );
}

export default App;
