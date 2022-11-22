import React from 'react';
import NavBar from '../NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticlePage from '../ArticlePage/ArticlePage';
import image from'../../img/logo192.png';
const match = {
  id: 1,
  brand: 'Lenovo',
  name: 'IdeaPad 3 15ALC6 82KU01P6MB AZERTY',
  stars: 5,
  price:599,
  category:'Ordinateur Portable',
  image: image
}

const App = () => {
  return (
    <div className="App">
    <div>
      <NavBar />
    </div>
    <div>
      <ArticlePage match={match}/>
    </div>
    </div>
  );
}

export default App;
