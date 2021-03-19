import React from 'react'
import Footer from '../../Global/Footer';
import Content from './Content';
import Header from './Header';
import Nav from './Nav';

function Layouts() {
    return (
        <div className="h-full min-h-screen flex flex-col md:flex-col justify-between ">
            <div>
                <Nav />
                <Header />
                <Content />
            </div>
            <Footer/>
        </div>
    );
}
 
export default Layouts;