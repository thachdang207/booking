import React, {Suspense} from 'react';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom'
import EditRoom from '../Pages/EditRoom';

import Loading from '../Loading/Loading';
import Home from '../Pages/Home';

// const Home = React.lazy(() => import('../Pages/Home'))
// const EditRoom = React.lazy(() => import('../Pages/EditRoom'))

function Content() {
    const match = useRouteMatch();
    console.log(match);
    return (
        <Switch>
            <Route exact path={match.url} component={Home}/>
            <Route path={`${match.url}/editRoom`} component={EditRoom}/>
            <Route component={<h1>not found</h1>} />
        </Switch>
    );
}
export default Content;