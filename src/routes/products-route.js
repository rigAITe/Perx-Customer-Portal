import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/layout';
import AccordionTabProduct from '../components/pages/products/accordion-tab-product';
import CartStickyProduct from '../components/pages/products/cart-sticky-product';
import ViewSingleAuction from "../components/pages/others/common/auction/single-auction-display/display-product.jsx";
import ExtendedProduct from '../components/pages/products/extended-product';
import FullWidthProduct from '../components/pages/products/full-width-product';
import GridProduct from '../components/pages/products/grid-product';
import HorizontalProduct from '../components/pages/products/horizontal-product';
import InnerZoomProduct from '../components/pages/products/inner-zoom-product';
import SidebarLeftProduct from '../components/pages/products/sidebar-left-product';
import SimpleProduct from '../components/pages/products/simple-product';
import StickyBothProduct from '../components/pages/products/sticky-both-product';
import StickyInfoProduct from '../components/pages/products/sticky-info-product';
import StickyTabProduct from '../components/pages/products/sticky-tab-product';
import VerticalProduct from '../components/pages/products/vertical-product';
import auctionRedeem from '../components/pages/products/auction-redeem';
import BidHistory from '../components/pages/products/Auction/bid-history';

export default class ProductsRoute extends React.Component {
    render() {
        return (
          <Switch>
            <Layout>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/products/auction/:id`}
                component={ViewSingleAuction}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/products/bid-history`}
                component={BidHistory}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/products/auction-redeem`}
                component={auctionRedeem}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/products/full-width/:id`}
                component={FullWidthProduct}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/products/extended/:id`}
                component={ExtendedProduct}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/products/grid/:id`}
                component={GridProduct}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/products/sticky-both/:id`}
                component={StickyBothProduct}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/products/sticky-info/:id`}
                component={StickyInfoProduct}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/products/sticky-tab/:id`}
                component={StickyTabProduct}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/products/simple/:id`}
                component={SimpleProduct}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/products/sidebar-left/:id`}
                component={SidebarLeftProduct}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/products/horizontal/:id`}
                component={HorizontalProduct}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/products/vertical/:id`}
                component={VerticalProduct}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/products/zoom/:id`}
                component={InnerZoomProduct}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/products/cart-sticky/:id`}
                component={CartStickyProduct}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/products/accordion/:id`}
                component={AccordionTabProduct}
              />
            </Layout>
          </Switch>
        );
    }
}