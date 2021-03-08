import React from 'react';
import Navbar from '../Global/Navbar/Navbar';
import Searchbar from '../Global/Searchbar/Searchbar'
import Border from '../Global/Border'

function Home() {
  return (
    <div className="Home">
      <Navbar />
      
      <Border />

      <Searchbar/>
    </div>
  );
}

export default Home;
