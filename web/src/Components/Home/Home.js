import React from 'react';
import Navbar from '../Global/Navbar/Navbar';
import Searchbar from '../Global/Searchbar/Searchbar'
import Border from '../Global/Border'
import Footer from '../Global/Footer'

function Home() {
  return (
    <div className="Home">
      <Navbar />

      <Searchbar/>

      <Border />
      
      <Footer />
    </div>
  );
}

export default Home;
