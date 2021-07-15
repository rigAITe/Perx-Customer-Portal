import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/layout';
import HomePage from '../components/home';

export default class ProductsRoute extends React.Component {
    render() {
        return (
            <Switch>
                <Layout>
                    <Route exact path={ `${ process.env.PUBLIC_URL }/` } component={ HomePage } />
                </Layout>
            </Switch>
        );
    }
}