import React from 'react';
import { Link } from 'react-router-dom';

import { monthTypeTwo } from '../../../mock-data/data';

function BlogTypeTwo( props ) {
    const { blog } = props;
    let date = new Date( blog.date );

    return (
        <li>
            <div className="post-media">
                <Link to={ `${ process.env.PUBLIC_URL }/pages/single/${ blog.id }` }>
                    {
                        blog.pictures ?
                            <div>
                                <img src={ `${ process.env.PUBLIC_URL }/${ blog.pictures[ 0 ] }` } alt="post" />
                            </div>
                            : ""
                    }
                </Link>
            </div>
            <div className="post-info">
                <Link to={ `${ process.env.PUBLIC_URL }/pages/single/${ blog.id }` }>{ blog.title }</Link>
                <div className="post-meta">
                    { ` ${ monthTypeTwo[ date.getMonth() ] } ${ date.getDate() < 10 ? '0' + date.getDate() : date.getDate() }, ${ date.getYear() + 1900 }` }
                </div>
            </div>
        </li>
    )
}

export default BlogTypeTwo;