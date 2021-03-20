import React from 'react'
import Footer from '../../Global/Footer';
import Content from './Content';
import Header from './Header';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom'
import Home from '../Pages/Home';
import EditRoom from '../Pages/EditRoom';

function Layouts() {
    const match = useRouteMatch();
    return (
        <div className="h-full min-h-screen flex flex-col md:flex-col justify-between">
            <div>
                <Nav />
                <Header />
                <Switch>
                    <Route exact path={match.url} component={Home}/>
                    <Route path={`${match.url}/editRoom`} component={EditRoom}/>
                    <Route component={<h1>not found</h1>} />
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}
 
export default Layouts;