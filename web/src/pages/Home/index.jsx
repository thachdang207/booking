import React, { useEffect, useRef } from 'react';
import Searchbar from './Searchbar'
import Header from '../../components/Header'
import Border from '../../components/Border'
import Footer from '../../components/Footer'
import Hero from './Hero'
import Hotels from './Hotels'
import ClientReviews from './ClientReview'


function Home() {
  useEffect(() => {
    document.title = "VIBO | Homepage";
  }, []);

  const myRef = useRef(null);

  const scrollToBook = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  };

  const handleSearch = (values) => {
    return new Promise(resolve => {
      console.log("Search form: ", values);
    })
  }

  return (
    <>
      <Header />

      <Hero
        onClick={scrollToBook}
      />

      <Border />

      <Searchbar
        onSubmit={handleSearch}
        refProp={myRef}
      />

      <Border />

      <Hotels />

      <Border />

      <ClientReviews />

      <Border />

      <Footer />
    </>
  );
}

export default Home;
