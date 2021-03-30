import React from 'react';
import { Route } from 'react-router';
import HomePage from './components/HomePage/HomePage';
import Layout from './components/Layout/Layout';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'

function App() {
    return (               //<Layout>
        //    <Route exact path='/' component={Home} />
        //    <Route path='/counter' component={Counter} />
        //    <AuthorizeRoute path='/fetch-data' component={FetchData} />
        //    <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
        //</Layout>

        <Route path='/layout' component={Layout} />
    );
}

export default App;
