import React from 'react';
import Navbar from '../Global/Navbar/Navbar';
import Searchbar from './Searchbar'
import Border from '../Global/Border'
import Footer from '../Global/Footer'
import Welcome from './Welcome'
import ClientReviews from './ClientReviews'

function Home() {
  return (
    <div className="Home">
      <Navbar />

      <Searchbar/>

      <Border />

      <Welcome />

      <Border />

      <ClientReviews />

      <Border />
      
      <Footer />
    </div>
  );
}

export default Home;
