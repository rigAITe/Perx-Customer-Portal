import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import StickyBox from 'react-sticky-box';

import Breadcrumb from '../../../common/breadcrumb';
import BlogTypeTwo from '../../../features/blog/blog-type-two';
import BlogTypeThree from '../../../features/blog/blog-type-three';
import BlogSingle from '../../../features/blog/blog-single';
import Carousel from '../../../features/carousel';
import SidebarToggle from '../../products/common/sidebars/sidebar-toggle';

import { findBlogById, stickyContentHandle, setStickyValues } from '../../../../utils';
import { blogSlider } from '../../../../utils/settings';

import posts from '../../../../mock-data/blog.json';

function Single( props ) {
    let single = findBlogById( posts, props.match.params.id );

    if ( !single ) {
        window.location = process.env.PUBLIC_URL + "/pages/404";
    }

    useEffect( () => {
        setStickyValues( 120 );
        window.addEventListener( 'scroll', stickyContentHandle, { passive: true } );

        return () => {
            window.removeEventListener( 'scroll', stickyContentHandle );
        }
    } )

    return (
        <>
            <Helmet>
                <title>Porto React Ecommerce - Blog Page </title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Blog Page</h1>

            <div className="main">
                <Breadcrumb current="Blog Post" parent="pages" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <BlogSingle blog={ single } />
                            <div className="related-posts">
                                <h4 className="light-title">Related <strong>Posts</strong></h4>
                                <Carousel addClass="related-posts-carousel" settings={ blogSlider }>
                                    {
                                        posts.slice( 0, 4 ).map( ( blog, index ) => (
                                            <BlogTypeThree blog={ blog } key={ "blog" + index } />
                                        ) )
                                    }
                                </Carousel>
                            </div>
                        </div>
                        <SidebarToggle />
                        <aside className="sidebar col-lg-3 mobile-sidebar">
                            <StickyBox className="sidebar-wrapper sticky-sidebar">
                                <div className="widget widget-search">
                                    <form role="search" method="get" className="search-form" action="#">
                                        <input type="search" className="form-control" placeholder="Search posts here..." name="s" required />
                                        <button type="submit" className="search-submit" title="Search">
                                            <i className="icon-search"></i>
                                            <span className="sr-only">Search</span>
                                        </button>
                                    </form>
                                </div>

                                <div className="widget widget-categories">
                                    <h4 className="widget-title">Blog Categories</h4>

                                    <ul className="list">
                                        <li><Link to="#">All about clothing</Link></li>
                                        <li><Link to="#">Make-up &amp; beauty</Link></li>
                                        <li><Link to="#">Accessories</Link></li>
                                        <li><Link to="#">Fashion trends</Link></li>
                                        <li><Link to="#">Haircuts &amp; hairstyles</Link></li>
                                    </ul>
                                </div>

                                <div className="widget">
                                    <h4 className="widget-title">Recent Posts</h4>

                                    <ul className="simple-post-list">
                                        {
                                            posts.slice( 0, 2 ).map( ( blog, index ) => (
                                                <BlogTypeTwo blog={ blog } key={ "blog" + index } />
                                            ) )
                                        }
                                    </ul>
                                </div>

                                <div className="widget">
                                    <h4 className="widget-title">Tagcloud</h4>

                                    <div className="tagcloud">
                                        <Link to="#">Fashion</Link>
                                        <Link to="#">Shoes</Link>
                                        <Link to="#">Skirts</Link>
                                        <Link to="#">Dresses</Link>
                                        <Link to="#">Bags</Link>
                                    </div>
                                </div>

                                <div className="widget">
                                    <h4 className="widget-title">Archive</h4>

                                    <ul className="list">
                                        <li><Link to="#">April 2018</Link></li>
                                        <li><Link to="#">March 2018</Link></li>
                                        <li><Link to="#">February 2018</Link></li>
                                    </ul>
                                </div>


                                <div className="widget widget_compare">
                                    <h4 className="widget-title">Compare Products</h4>

                                    <p>You have no items to compare.</p>
                                </div>
                            </StickyBox>
                        </aside>
                    </div>
                </div>
                <div className="mb-6"></div>
            </div>
        </>
    )
}

export default Single;