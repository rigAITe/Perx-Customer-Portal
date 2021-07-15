import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/layout';
import ShoppingCart from '../components/pages/others/cart/shopping-cart';
import Wishlist from '../components/pages/others/wishlist/wishlist';
import About from '../components/pages/others/about/about';
import ShippingOne from '../components/pages/others/checkout/shipping-one';
import Shipping from "../components/pages/others/common/auction/checkout/Shipping.jsx";
import MealShipping from "../components/pages/products/Meal/checkout/MealShipping.jsx";
import Review from '../components/pages/others/checkout/checkout-review';
import Dashboard from '../components/pages/others/dashboard/dashboard';
import Blog from '../components/pages/others/blog/blog';
import BlogPost from '../components/pages/others/blog/single';
import ForgotPassword from '../components/pages/others/password/forget-password';
import Login from '../components/pages/others/login/login';
import ErrorPage from '../components/pages/others/404/page-error';
import BidHistory from '../components/pages/products/Auction/bid-history';
import OrderReceipts from '../components/pages/products/Auction/Receipts/order-receipt';
import ClaimSweepstake from '../components/pages/products/sweepstake/claim-sweepstake';

import ViewSweepstake from '../components/pages/products/sweepstake/view-sweepstake';
import SweepstakeHistory from '../components/pages/products/sweepstake/sweepstake-history';
import SweepstakeTicket from '../components/pages/products/sweepstake/sweepstake-ticket';
import Survey from '../components/pages/products/survey/survey';
import Sweepstake from '../components/pages/products/sweepstake/sweepstake';
import ViewSurvey from '../components/pages/products/survey/view-survey';
import IncompleteSurvey from '../components/pages/products/survey/incomplete-survey';

import Discount from "../components/pages/products/Discount/LandingPage/index.jsx";
import DiscountCategory from '../components/pages/products/Discount/discount';
import FirstTimeLogin from '../components/pages/others/login/FirstTimeLogin';
import ViewSingleLocation from '../components/pages/products/Discount/ViewSingleLocation';
import DiscountOrderReceipts from '../components/pages/products/Auction/Receipts/discount-order-receipt';

import Meal from "../components/pages/products/Meal/meal";
import ViewSingleMeal from '../components/pages/products/Meal/ViewSingleMeal';
import MealOrderReceipts from '../components/pages/products/Meal/checkout/meal-order-receipt';
import MealDineIn from '../components/pages/products/Meal/dine-in/MealDineIn';
import ViewSingleMealLocation from '../components/pages/products/Meal/dine-in/ViewSingleMealLocation';

import Shop from "../components/pages/products/Shop/home/index.jsx";
import viewRedeemProducts from '../components/pages/products/Shop/home/redeem-products/view-redeem-products';
import SingleShopProduct from '../components/pages/products/Shop/home/single-shop-display/display-product';
import AirtimeBills from "../components/pages/products/AirtimeAndBills/AirtimeBills";
import CableBills from "../components/pages/products/AirtimeAndBills/CableBills/CableBills";
import SingleBill from "../components/pages/products/AirtimeAndBills/single-bill-display/display-product";
import Cinema from '../components/pages/products/Entertainment/Cinema/Cinema';
import SingleCinema from '../components/pages/products/Entertainment/Cinema/singleCinema/SingleCinema';
import SingleMovie from '../components/pages/products/Entertainment/Cinema/singleMovie/SingleMovie';
import Events from "../components/pages/products/Entertainment/Events/Events.jsx";
import SingleEvent from '../components/pages/products/Entertainment/Events/singleEvent/SingleEvent';
import Experience from '../components/pages/products/Entertainment/Experience/Experience';
import SingleExperience from '../components/pages/products/Entertainment/Experience/singleExperience/SingleExperience';
import SinglePlace from '../components/pages/products/Entertainment/Experience/singlePlace/SinglePlace';
import PromoCode from '../components/pages/products/PromoCode/promocode';
import Travel from '../components/pages/products/Entertainment/Travel/Travel';
import AllFlights from '../components/pages/products/Entertainment/Travel/AllFlights/AllFlights';
import FlightDetails from '../components/pages/products/Entertainment/Travel/AllFlights/flightDetails';
import AuctionBidHistory from '../components/pages/products/Auction/auction-bid-history';
import ListDiscountProducts from '../components/pages/products/Discount/ListDiscountProducts';

export default class ProductsRoute extends React.Component {
    render() {
        return (
          <Switch>
            <Layout>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/cart`}
                component={ShoppingCart}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/wishlist`}
                component={Wishlist}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/bid_history`}
                component={BidHistory}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/order_receipts`}
                component={OrderReceipts}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/about`}
                component={About}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/discount`}
                component={Discount}
                // component={DiscountCategory}
                // component={ListDiscountProducts}
                // component={DiscountOrderReceipts}
              // component={ViewSingleLocation}
              />

{/* DiscountOrderReceipts */}
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/discount/category`}
                component={DiscountCategory}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/discount/location/:id`}
                component={ViewSingleLocation}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/order_receipts/discount`}
                component={DiscountOrderReceipts}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/sweepstake_history`}
                component={SweepstakeHistory}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/view-sweepstake`}
                component={ViewSweepstake}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/claim-sweepstake`}
                component={ClaimSweepstake}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/view_survey`}
                component={ViewSurvey}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/incomplete_survey`}
                component={IncompleteSurvey}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/sweepstake`}
                component={Sweepstake}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/survey`}
                component={Survey}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/sweepstake_ticket`}
                component={SweepstakeTicket}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/checkout/shipping/one`}
                component={ShippingOne}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/checkout/shipping`}
                component={Shipping}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/checkout/review`}
                component={Review}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/dashboard/:board`}
                component={Dashboard}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/dashboard/auction_history`}
                component={AuctionBidHistory}
              />
              {/*  */}
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/blog`}
                component={Blog}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/single/:id`}
                component={BlogPost}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/login`}
                component={Login}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/login/first`}
                component={FirstTimeLogin}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/forgot-password`}
                component={ForgotPassword}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/404`}
                component={ErrorPage}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/meal`}
                component={Meal}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/meal/dine-in`}
                component={MealDineIn}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/meal/location/:id`}
                component={ViewSingleMealLocation}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/meal/single/:id`}
                component={ViewSingleMeal}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/checkout/shipping/meal`}
                component={MealShipping}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/order_receipts/meal`}
                component={MealOrderReceipts}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/shop`}
                component={Shop}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/shop2`}
                component={viewRedeemProducts}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/shop/:id`}
                component={SingleShopProduct}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/airtime_bills`}
                component={AirtimeBills}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/cablebills`}
                component={CableBills}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/cablebills/single`}
                component={SingleBill}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/entertainment/cinema`}
                component={Cinema}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/entertainment/cinema/single/:id`}
                component={SingleCinema}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/entertainment/movie/single/:id`}
                component={SingleMovie}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/entertainment/events`}
                component={Events}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/entertainment/event/single/:id`}
                component={SingleEvent}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/experience&travel/experience`}
                component={Experience}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/experience/single/:id`}
                component={SingleExperience}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/place/single/:id`}
                component={SinglePlace}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/promocode`}
                component={PromoCode}
              />
              {/* <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/travel`}
                component={Travel}
              /> */}
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/experience&travel/travel`}
                component={Travel}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/travel/all-flights`}
                component={AllFlights}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/pages/travel/all-flights/flight-details`}
                component={FlightDetails}
              />
            </Layout>
          </Switch>
        );
    }
}