import React, { useEffect, useRef } from 'react';
import Searchbar from './Searchbar'
import Header from '../Global/Header'
import Border from '../Global/Border'
import Footer from '../Global/Footer'
import Hero from './Hero'
import Hotels from './Hotels'
import ClientReview from './ClientReview'
import Cities from './Cities'
import SearchHotel from '../Global/SearchHotel';
import Title from "../Global/Title";

function Home() {
    const myRef = useRef(null);


    useEffect(() => {
        document.title = 'VIBO | Homepage';
    });

    const scrollToBook = () => {
        myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    };

    const handleSearch = (values) => {
        return new Promise(() => {
            console.log("Search form: ", values);
        })
    }

    return (
        <>
            <Header />

            <Hero
                onClick={scrollToBook}
            />

            <Searchbar
                onSubmit={handleSearch}
                refProp={myRef}
            />

            <Border />

            <Title title="Explore one of the most attractive destinations in Vietnam"/>

            <Cities />

            <Border />

            <SearchHotel
                onSubmit={handleSearch}
            />
            <Hotels />

            <Border />

            <ClientReview />

            <Border />

            <div>

            </div>

            <Footer />
        </>
    );
}

export default Home;
