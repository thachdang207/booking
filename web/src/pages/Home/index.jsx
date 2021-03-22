import React, {useEffect} from 'react';
import Header from '../GlobalComponents/Header';
import Searchbar from './components/Searchbar'
import Border from '../GlobalComponents/Border'
import Footer from '../GlobalComponents/Footer'
import Welcome from './components/Welcome'
import ClientReviews from './components/ClientReview'


function Home() {
  useEffect(() =>{
    document.title = "VIBO | Homepage";
  });

  const handleSearch = (values) => {
      console.log("Search form: ", values);
  }

  return (
    <div>
      <Header />
      <div>
        <Searchbar
          onSubmit={handleSearch}
        />
      </div>

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
