import React from 'react';

import Header  from './userFiles/Header.js';
import TopHeader  from './components/TopHeader.js';
import SearchBar  from './components/SearchBar.js';
import HomeReddits  from './components/HomeReddits';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <SearchBar />
      <HomeReddits />
      
    </div>
  );
}

export default App;
