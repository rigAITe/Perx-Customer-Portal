import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { monthTypeOne } from '../../../mock-data/data';

function BlogTypeThree( props ) {
    const { blog } = props;
    let date = new Date( blog.date );

    return (
        <article className="post">
            <div className="post-media">

                {
                    blog.pictures ?
                        <Link to={ `${ process.env.PUBLIC_URL }/pages/single/${ blog.id }` } >
                            <figure>
                                <div className="lazy-overlay bg-3"></div>
                                <LazyLoadImage
                                    alt="post_image"
                                    src={ `${ process.env.PUBLIC_URL }/${ blog.pictures[ 0 ] }` }
                                    threshold={ 500 }
                                    effect="blur"
                                />
                            </figure>
                        </Link>
                        : ""
                }

            </div>
            <div className="post-body">
                <div className="post-date">
                    <span className="day">{ date.getDate() < 10 ? '0' + date.getDate() : date.getDate() }</span>
                    <span className="month">{ monthTypeOne[ date.getMonth() ] }</span>
                </div>

                <h2 className="post-title">
                    <Link to={ `${ process.env.PUBLIC_URL }/pages/single/${ blog.id }` }>{ blog.title }</Link>
                </h2>

                <div className="post-content">
                    <p>{ blog.shortDetails }</p>
                    <Link to={ `${ process.env.PUBLIC_URL }/pages/single/${ blog.id }` } className="read-more">Read More <i className="icon-angle-double-right"></i></Link>
                </div>
            </div>
        </article>
    )
}

export default BlogTypeThree;