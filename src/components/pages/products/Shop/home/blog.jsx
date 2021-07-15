import React from 'react';
import { Link } from 'react-router-dom';

import { monthTypeOne } from '../../mock-data/data';

function Blog( props ) {
    const { blog } = props;
    const date = new Date( blog.date );

    return (
        <article className="post">
            <div className="post-media home-post">
                <Link to={ `${ process.env.PUBLIC_URL }/pages/single/${ blog.id }` }>
                    <figure>
                        <img src={ `${ process.env.PUBLIC_URL }/${ blog.pictures[ 0 ] }` } alt="post" width={ 280 } height={ 209 } />
                    </figure>
                </Link>
                <div className="post-date">
                    <span className="day">{ date.getUTCDate() }</span>
                    <span className="month">{ monthTypeOne[ date.getMonth() - 1 ] }</span>
                </div>
            </div>

            <div className="post-body">
                <h2 className="post-title">
                    <Link to={ `${ process.env.PUBLIC_URL }/pages/single/${ blog.id }` }>{ blog.title }</Link>
                </h2>
                <div className="post-content">
                    <p>{ blog.shortDetails }</p>

                    <Link to={ `${ process.env.PUBLIC_URL }/pages/single/${ blog.id }` }>2 comments</Link>
                </div>
            </div>
        </article>
    )
}

export default Blog;