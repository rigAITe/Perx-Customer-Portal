import React from 'react';
import { Link } from 'react-router-dom';
import { SlideToggle } from 'react-slide-toggle';

function SingleToggleTab( props ) {
    const { product } = props;

    return (
        <div className="product-single-collapse" id="productAccordion">
            <SlideToggle>
                {
                    ( { onToggle, setCollapsibleElement, toggleState } ) => (
                        <div className="product-collapse-panel">
                            <h3 className="product-collapse-title">
                                <Link data-toggle="collapse" to="#" onClick={ onToggle } className={ toggleState.toLowerCase() }>Description</Link>
                            </h3>
                            <div className="product-collapse-body collapse show" ref={ setCollapsibleElement }>
                                <div className="collapse-body-wrapper">
                                    <div className="product-desc-content">
                                        <img src={ `${ process.env.PUBLIC_URL }/assets/images/demo/products/single/product-img.jpg` } alt="desc" className="float-right" />
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                                        <ul>
                                            <li><i className="icon-ok"></i>Any Product types that You want - Simple, Configurable</li>
                                            <li><i className="icon-ok"></i>Downloadable/Digital Products, Virtual Products</li>
                                            <li><i className="icon-ok"></i>Inventory Management with Backordered items</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                                        <br />
                                        <div className="row">
                                            <div className="col-sm-6 col-md-4">
                                                <div className="feature-box feature-box-simple text-center">
                                                    <i className="icon-star"></i>

                                                    <div className="feature-box-content">
                                                        <h3>Dedicated Service</h3>
                                                        <p>Consult our specialists for help with an order, customization, or design advice</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-6 col-md-4">
                                                <div className="feature-box feature-box-simple text-center">
                                                    <i className="icon-reply"></i>

                                                    <div className="feature-box-content">
                                                        <h3>Free Returns</h3>
                                                        <p>We stand behind our goods and services and want you to be satisfied with them.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-6 col-md-4">
                                                <div className="feature-box feature-box-simple text-center">
                                                    <i className="icon-paper-plane"></i>

                                                    <div className="feature-box-content">
                                                        <h3>International Shipping</h3>
                                                        <p>Currently over 50 countries qualify for express international shipping.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </SlideToggle>
            <SlideToggle collapsed={ true }>
                {
                    ( { onToggle, setCollapsibleElement, toggleState } ) => (
                        <div className="product-collapse-panel">
                            <h3 className="product-collapse-title">
                                <Link className={ toggleState.toLowerCase() } data-toggle="collapse" to="#" onClick={ onToggle }>Tags</Link>
                            </h3>
                            <div className="product-collapse-body" ref={ setCollapsibleElement }>
                                <div className="collapse-body-wrapper">
                                    <div className="product-tags-content">
                                        <form action="#">
                                            <h4>Add Your Tags:</h4>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-sm" required />
                                                <input type="submit" className="btn btn-primary" value="Add Tags" />
                                            </div>
                                        </form>
                                        <p className="note">Use spaces to separate tags. Use single quotes (') for phrases.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </SlideToggle>
            <SlideToggle collapsed={ true }>
                {
                    ( { onToggle, setCollapsibleElement, toggleState } ) => (
                        <div className="product-collapse-panel">
                            <h3 className="product-collapse-title">
                                <Link className={ toggleState.toLowerCase() } data-toggle="collapse" to="#" onClick={ onToggle }>Reviews</Link>
                            </h3>
                            <div className="product-collapse-body" ref={ setCollapsibleElement }>
                                <div className="collapse-body-wrapper">
                                    <div className="product-reviews-content">
                                        <div className="row">
                                            <div className={ product.reviewContents ? "col-xl-7" : "col-xl-12" }>
                                                {
                                                    product.reviewContents ?
                                                        <h2 className="reviews-title">Reviews for { product.name }</h2>
                                                        :
                                                        <h2 className="reviews-title">Be the first to review this product</h2>
                                                }
                                                <ol className="comment-list">
                                                    { product.reviewContents ?
                                                        product.reviewContents.map( ( item, index ) => (
                                                            <li className="comment-container" key={ "review" + index }>
                                                                <div className="comment-avatar">
                                                                    <img src={ process.env.PUBLIC_URL + '/' + item.avatar } width="65" height="65" alt="avatar" />
                                                                </div>
                                                                <div className="comment-box">
                                                                    <div className="ratings-container">
                                                                        <div className="product-ratings">
                                                                            <span className="ratings" style={ { width: 20 * item.rating + '%' } }></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="comment-info mb-1">
                                                                        <h4 className="avatar-name">{ item.author }</h4> - <span className="comment-date">{ item.date }</span>
                                                                    </div>
                                                                    <div className="comment-text">
                                                                        <p>{ item.comment }</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ) )
                                                        : ""
                                                    }
                                                </ol>
                                            </div>
                                            <div className={ product.reviewContents ? "col-xl-5" : "col-xl-12" }>
                                                <div className="add-product-review">
                                                    <form action="#" className="comment-form m-0">
                                                        <h3 className="review-title">Add a Review</h3>

                                                        <div className="rating-form">
                                                            <label htmlFor="rating">Your rating</label>
                                                            <span className="rating-stars">
                                                                <Link className="star-1" to="#">1</Link>
                                                                <Link className="star-2" to="#">2</Link>
                                                                <Link className="star-3" to="#">3</Link>
                                                                <Link className="star-4" to="#">4</Link>
                                                                <Link className="star-5" to="#">5</Link>
                                                            </span>

                                                            <select name="rating" id="rating" required="" style={ { display: 'none' } }>
                                                                <option value="">Rate…</option>
                                                                <option value="5">Perfect</option>
                                                                <option value="4">Good</option>
                                                                <option value="3">Average</option>
                                                                <option value="2">Not that bad</option>
                                                                <option value="1">Very poor</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Your Review</label>
                                                            <textarea cols="5" rows="6" type="text" className="form-control form-control-sm" required />
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6 col-xl-12">
                                                                <div className="form-group">
                                                                    <label>Your Name</label>
                                                                    <input type="text" className="form-control form-control-sm" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-xl-12">
                                                                <div className="form-group">
                                                                    <label>Your E-mail</label>
                                                                    <input type="text" className="form-control form-control-sm" required />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <input type="submit" className="btn btn-dark ls-n-15" value="Submit" />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </SlideToggle>
        </div>
    )
}

export default React.memo( SingleToggleTab );


