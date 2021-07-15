import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/layout';
import BoxedImage from '../components/pages/categories/shop-boxed-image';
import BoxedSlide from '../components/pages/categories/shop-boxed-slide';
import EightCols from '../components/pages/categories/shop-eight-cols';
import FiveCols from '../components/pages/categories/shop-five-cols';
import FlexGrid from '../components/pages/categories/shop-flex-grid';
import FourCols from '../components/pages/categories/shop-four-cols';
import FullWidth from '../components/pages/categories/shop-full-width';
import HorizontalFilterOne from '../components/pages/categories/shop-horizontal-filter-one';
import HorizontalFilterTwo from '../components/pages/categories/shop-horizontal-filter-two';
import InfiniteScroll from '../components/pages/categories/shop-infinite-scroll';
import LeftSidebar from '../components/pages/categories/shop-left-sidebar';
import List from '../components/pages/categories/shop-list';
import RightSidebar from '../components/pages/categories/shop-right-sidebar';
import SevenCols from '../components/pages/categories/shop-seven-cols';
import SixCols from '../components/pages/categories/shop-six-cols';
import ThreeCols from '../components/pages/categories/shop-three-cols';

export default class ProductsRoute extends React.Component {
    render() {
        return (
            <Switch>
                <Layout>
                    <Route exact path={ `${ process.env.PUBLIC_URL }/categories/boxed-image` } component={ BoxedImage } />
                    <Route exact path={ `${ process.env.PUBLIC_URL }/categories/boxed-slider` } component={ BoxedSlide } />
                    <Route exact path={ `${ process.env.PUBLIC_URL }/categories/full-width` } component={ FullWidth } />
                    <Route exact path={ `${ process.env.PUBLIC_URL }/categories/sidebar-left` } component={ LeftSidebar } />
                    <Route exact path={ `${ process.env.PUBLIC_URL }/categories/sidebar-right` } component={ RightSidebar } />
                    <Route exact path={ `${ process.env.PUBLIC_URL }/categories/flex-grid` } component={ FlexGrid } />
                    <Route exact path={ `${ process.env.PUBLIC_URL }/categories/horizontal-filter1` } component={ HorizontalFilterOne } />
                    <Route exact path={ `${ process.env.PUBLIC_URL }/categories/horizontal-filter2` } component={ HorizontalFilterTwo } />
                    <Route exact path={ `${ process.env.PUBLIC_URL }/categories/list` } component={ List } />
                    <Route exact path={ `${ process.env.PUBLIC_URL }/categories/infinite-scroll` } component={ InfiniteScroll } />
                    <Route exact path={ `${ process.env.PUBLIC_URL }/categories/3cols` } component={ ThreeCols } />
                    <Route exact path={ `${ process.env.PUBLIC_URL }/categories/4cols` } component={ FourCols } />
                    <Route exact path={ `${ process.env.PUBLIC_URL }/categories/5cols` } component={ FiveCols } />
                    <Route exact path={ `${ process.env.PUBLIC_URL }/categories/6cols` } component={ SixCols } />
                    <Route exact path={ `${ process.env.PUBLIC_URL }/categories/7cols` } component={ SevenCols } />
                    <Route exact path={ `${ process.env.PUBLIC_URL }/categories/8cols` } component={ EightCols } />
                </Layout>
            </Switch>
        );
    }
}