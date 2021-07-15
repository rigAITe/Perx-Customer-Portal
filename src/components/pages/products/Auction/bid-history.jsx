import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './bid-history.css';


import Breadcrumb from './../../../common/breadcrumb';
import NoticeContainer from '../../../common/partials/notify-bidder';
// import Image from '../../../../../public/assets/images/products/bag-1.jpg';

function BidHistory() {
    const myImage = '../../../../../public/assets/images/products/bag-1.jpg'
    return (
        <>
            <Helmet>
                <title>BID HISTORY </title>
            </Helmet>

            <h1 className="d-none">Customer Portal - Bid History</h1>

            <div className="main">
                <Breadcrumb current="Bid History" />

                <div className="mb-2"></div>
                <div className= "container">
                    <h4>Bid History </h4>
                    <div className= "row">
                        <div className= "col-md-8 col-lg-8 col-12">
                        <div className= "card cap-table">
                            <div className= "card-body">
                                <div className= "row">
                                    <div className= "col-md-2 col-lg-2 col-6">
                                        <p>Bidders : <span>10</span></p>
                                    </div>
                                    <div className= "col-md-2 col-lg-2 col-6">
                                         <p>Bids : <span>10</span></p>
                                    </div>
                                    <div className= "col-md-8 col-lg-8 col-12">
                                        <p>Time left: <span>2d 16h Sunday, 3:40AM</span></p>
                                    </div>
                                </div>
                                <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Bidders</th>
                                    <th scope="col">Bid amount</th>
                                    <th scope="col">Bid Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>J***g</td>
                                    <td>12,500 rubies</td>
                                    <td>2 Mar 2021 at 5:09:16pm</td>
                                    </tr>
                                    <tr>
                                    <td>J***g</td>
                                    <td>12,500 rubies</td>
                                    <td>2 Mar 2021 at 5:09:16pm</td>
                                    </tr>
                                    <tr>
                                    <td>J***g</td>
                                    <td>12,500 rubies</td>
                                    <td>2 Mar 2021 at 5:09:16pm</td>
                                    </tr>
                                    <tr>
                                    <td>J***g</td>
                                    <td>12,500 rubies</td>
                                    <td>2 Mar 2021 at 5:09:16pm</td>
                                    </tr>
                                    <tr>
                                    <td>J***g</td>
                                    <td>12,500 rubies</td>
                                    <td>2 Mar 2021 at 5:09:16pm</td>
                                    </tr>
                                    <tr>
                                    <td>J***g</td>
                                    <td>12,500 rubies</td>
                                    <td>2 Mar 2021 at 5:09:16pm</td>
                                    </tr>
                                    <tr>
                                    <td>J***g</td>
                                    <td>12,500 rubies</td>
                                    <td>2 Mar 2021 at 5:09:16pm</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>

                        </div>
                        <div className= "col-md-4 col-lg-4 col-12">
                            <div className= "card cap-table">
                                <div className= "card-body">
                                    <h5>Item Info</h5>
                                    <div className= "row">
                                        <div className= "col-md-2 col-lg-2 col-2">
                                            <img  src= {myImage} alt=""/>
                                        </div>
                                        <div className= "col-md-10 col-lg-10 col-10">
                                            <h5 className= "ruby-tag underline">
                                            Nike Air Jordan 13 XIII Retro Low Clot Terracotta Sepia Size 13
                                            </h5>
                                        </div>
                                    </div>
                                    <p>Current Bid</p>
                                    <h5>10,500 <span className= "ruby-tag">Rubies</span>
                                    </h5>
                                    <NoticeContainer width= {'25rem'}  />
                                    <div className= "row">
                                    <div className= "col-md-6 col-lg-6 col-12">
                                        <div>
                                        <label htmlFor="email opacity">
                                        Enter your maximum bid
                                        </label>
                                        <input type="number" className="form-control" placeholder="Bid Amount" required />
                                        </div>
                                        <p style= {{fontSize: 11}}>Enter 15,000 or more</p>
                                    </div>
                                    <div className= "col-md-6 col-lg-6 col-12">
                                        <div className= "mt-25">
                                        {/* <Link to="#" className="btn btn-primary add-cart icon-shopping-cart" title="Add to Cart" onClick={ addToCart }>
                                                Add to Cart
                                        </Link> */}
                                        <Link to="#" className="btn btn-primary add-cart" title="Place Bid" onClick= {() => null}>
                                        Place bid
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BidHistory;