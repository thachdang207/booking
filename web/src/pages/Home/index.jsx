import React, {useEffect} from 'react';
import Searchbar from './Searchbar'
import Header from '../../components/Header'
import Border from '../../components/Border'
import Footer from '../../components/Footer'
import Hero from './Hero'
import Hotels from './Hotels'
import ClientReviews from './ClientReview'


function Home() {
  useEffect(() =>{
    document.title = "VIBO | Homepage";
  },[]);

  const handleSearch = (values) => {
      return new Promise (resolve => {
        console.log("Search form: ", values);
      })
  }

  return (
    <div>
      <Header />

      <Hero />

      <Border />

      <Searchbar
        onSubmit={handleSearch}
      />

      <Border />

      <Hotels />

      <Border />

      <ClientReviews />

      <Border />
      
      <Footer />
    </div>
  );
}

export default Home;
