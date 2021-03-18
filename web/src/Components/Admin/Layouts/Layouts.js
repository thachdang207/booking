import React, {Suspense} from 'react'
import Footer from '../../Global/Footer';
import Header from './Header';
import Nav from './Nav';
const Card = React.lazy(() => import('../Card/Card'))

function Layouts() {
    return (
        <div className="h-full min-h-screen flex flex-col md:flex-col justify-between ">
            <div>
                <Nav />
                <Header />
                <Suspense fallback={<div>Loading...</div>}>
                    <Card />
                </Suspense>
            </div>
            <Footer/>
        </div>
    );
}
 
export default Layouts;