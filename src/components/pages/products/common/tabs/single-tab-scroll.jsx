import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

function SingleTabScroll( props ) {
    const { product } = props

    const onLinkClick = ( e ) => {
        e.currentTarget.parentElement.querySelector( ".active" ) && e.currentTarget.parentElement.querySelector( ".active" ).classList.remove( "active" );
        e.currentTarget.classList.add( "active" );
    }

    return (
        <div className="product-single-tabs scrolling-box" style={ { overflow: 'hidden' } }>
            <div className="sticky-header pt-0 pb-0">
                <ul className="nav nav-tabs nav-border-anim container" role="tablist">
                    <AnchorLink className="nav-link active" href="#product-desc-content" offset="100" onClick={ onLinkClick }>Description</AnchorLink>
                    <AnchorLink className="nav-link" href="#product-size-content" offset="100" onClick={ onLinkClick }>Size Guide</AnchorLink>
                    <AnchorLink className="nav-link" href="#product-tags-content" offset="100" onClick={ onLinkClick }>Tags</AnchorLink>
                    <AnchorLink className="nav-link" href="#product-reviews-content" offset="100" onClick={ onLinkClick }>Reviews</AnchorLink>
                </ul>
            </div>

            <div className="tab-pane" id="product-desc-content">
                <div className="product-desc-content pt-5">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                    <ul>
                        <li><i className="icon-ok"></i>Any Product types that You want - Simple, Configurable</li>
                        <li><i className="icon-ok"></i>Downloadable/Digital Products, Virtual Products</li>
                        <li><i className="icon-ok"></i>Inventory Management with Backordered items</li>
                    </ul>
                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>

            <div className="tab-pane" id="product-size-content">
                <div className="product-size-content pt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={ `${ process.env.PUBLIC_URL }/assets/images/demo/products/single/body-shape.png` } alt="body shape" />
                        </div>

                        <div className="col-md-8">
                            <table className="table table-size">
                                <thead>
                                    <tr>
                                        <th>SIZE</th>
                                        <th>CHEST (in.)</th>
                                        <th>WAIST (in.)</th>
                                        <th>HIPS (in.)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>XS</td>
                                        <td>34-36</td>
                                        <td>27-29</td>
                                        <td>34.5-36.5</td>
                                    </tr>
                                    <tr>
                                        <td>S</td>
                                        <td>36-38</td>
                                        <td>29-31</td>
                                        <td>36.5-38.5</td>
                                    </tr>
                                    <tr>
                                        <td>M</td>
                                        <td>38-40</td>
                                        <td>31-33</td>
                                        <td>38.5-40.5</td>
                                    </tr>
                                    <tr>
                                        <td>L</td>
                                        <td>40-42</td>
                                        <td>33-36</td>
                                        <td>40.5-43.5</td>
                                    </tr>
                                    <tr>
                                        <td>XL</td>
                                        <td>42-45</td>
                                        <td>36-40</td>
                                        <td>43.5-47.5</td>
                                    </tr>
                                    <tr>
                                        <td>XLL</td>
                                        <td>45-48</td>
                                        <td>40-44</td>
                                        <td>47.5-51.5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tab-pane" id="product-tags-content">
                <div className="product-tags-content pt-5">
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

            <div className="tab-pane" id="product-reviews-content">
                <div className="product-reviews-content pt-5">
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
    )
}

export default React.memo( SingleTabScroll );