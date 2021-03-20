import React from 'react';
import Header from '../Global/Header';
import Searchbar from './Searchbar'
import Border from '../Global/Border'
import Footer from '../Global/Footer'
import Welcome from './Welcome'
import ClientReviews from './ClientReviews'

function Home() {
  return (
    <div className="Home">
      <Header />

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
