import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import imagesLoaded from 'imagesloaded';
import StickyBox from 'react-sticky-box';

//Import Custom Component
import Breadcrumb from '../../../common/breadcrumb';
import BlogTypeOne from '../../../features/blog/blog-type-one';
import BlogTypeTwo from '../../../features/blog/blog-type-two';
import Pagination from '../../../features/pagination';
import SidebarToggle from '../../products/common/sidebars/sidebar-toggle';

//Import Blog
import posts from '../../../../mock-data/blog';

//Import Utils
import { stickyContentHandle, setStickyValues } from '../../../../utils';

function Blog( props ) {
    const { productCount = 0 } = props;
    const [ curPage, setCurPage ] = useState( 1 );
    const [ displayCount, setDisplayCount ] = useState( 3 );

    useEffect( () => {
        let imgLoad = imagesLoaded( ".skeleton-body" );

        if ( document.querySelector( '.skeleton-body' ) ) {
            document.querySelector( '.skeleton-body' ).classList.remove( 'loaded' );
            imgLoad.on( "done", function () {
                document.querySelector( '.skeleton-body' ) && document.querySelector( '.skeleton-body' ).classList.add( 'loaded' );
            } )
        }
    } )

    useEffect( () => {
        setStickyValues( 120 );
        window.addEventListener( 'scroll', stickyContentHandle, { passive: true } );

        return () => {
            window.removeEventListener( 'scroll', stickyContentHandle );
        }
    } )

    const onChangeCurPage = ( curPageParam ) => {
        if ( curPage !== curPageParam ) {
            setCurPage( curPageParam );
        }
    }

    const onChangeDisplayCount = ( countParam ) => {
        if ( displayCount !== countParam ) {
            setDisplayCount( countParam );
        }
    }

    return (
        <>
            <Helmet>
                <title>Porto React Ecommerce - Blog Page </title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Blog Page</h1>

            <div className="main">
                <Breadcrumb current="Blog" path="pages" />

                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 skeleton-body skel-shop-products">

                            {
                                posts.slice( ( curPage - 1 ) * displayCount, curPage * displayCount ).map( ( blog, index ) => (
                                    <BlogTypeOne addClass="" blog={ blog } width={ 1043 } height={ 338 } key={ "BlogTypeOne" + index } />
                                ) )
                            }

                            <Pagination
                                isBlogCount={ posts.length }
                                count={ productCount }
                                displayCount={ displayCount }
                                curPage={ onChangeCurPage }
                                changeDisplay={ onChangeDisplayCount }
                            />
                        </div>

                        <SidebarToggle />
                        <aside className="sidebar col-lg-3 mobile-sidebar">
                            <StickyBox className="sidebar-wrapper sticky-sidebar" offsetTop={ 80 }>
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
                                                <BlogTypeTwo blog={ blog } key={ "BlogTypeTwo" + index } />
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

export default Blog;