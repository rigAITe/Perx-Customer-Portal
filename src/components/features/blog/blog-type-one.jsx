import React from 'react';
import { Link } from 'react-router-dom';

import Carousel from '../carousel';

import { monthTypeOne, monthTypeTwo } from '../../../mock-data/data';

function BlogTypeOne ( props ) {
    const { blog, addClass } = props;
    let date = new Date( blog.date );

    return (
        <div>
            <div className="skel-post"></div>
            <article className={ `post ${addClass}` }>
                <div className="post-media">
                    {
                        blog.pictures &&
                        ( blog.pictures.length > 1 ?
                            <Carousel addClass="post-slider" settings={ { margin: 0 } }>
                                {
                                    blog.pictures.map( ( picture, index ) => (
                                        <Link to={ `${process.env.PUBLIC_URL}/pages/single/${blog.id}` } key={ "Blog" + index }>
                                            <figure >
                                                <img src={ `${process.env.PUBLIC_URL}/${picture}` } width={ props.width } height={ props.height } alt="product" />
                                            </figure>
                                        </Link>
                                    ) )
                                }
                            </Carousel>
                            :
                            <>
                                <Link to={ `${process.env.PUBLIC_URL}/pages/single/${blog.id}` }>
                                    <figure>
                                        <img src={ `${process.env.PUBLIC_URL}/${blog.pictures[ 0 ]}` } width={ props.width } height={ props.height } alt="product" />
                                    </figure>
                                </Link>
                            </>
                        )
                    }
                </div>
                <div className="post-body">
                    <div className="post-date">
                        <span className="day">{ date.getDate() < 10 ? '0' + date.getDate() : date.getDate() }</span>
                        <span className="month">{ monthTypeOne[ date.getMonth() ] }</span>
                    </div>

                    <h2 className="post-title">
                        <Link to={ `${process.env.PUBLIC_URL}/pages/single/${blog.id}` }>{ blog.title }</Link>
                    </h2>

                    <div className="post-meta">
                        <span><i className="icon-calendar"></i>{ ` ${monthTypeTwo[ date.getMonth() ]} ${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}, ${date.getYear() + 1900}` }</span>
                        <span><i className="icon-user"></i>By <Link to="#">{ blog.contributor }</Link></span>
                        <span><i className="icon-folder-open"></i>
                            {
                                blog.category.map( ( category, index ) => (
                                    index === ( blog.category.length - 1 ) ?
                                        <Link to="#" key={ "BlogCategory" + index }>{ category }</Link>
                                        : <Link to="#" key={ "BlogCategory" + index }>{ category }, </Link>
                                ) )
                            }
                        </span>
                    </div>

                    <div className="post-content">
                        <p className="mt-2 mb-2">{ blog.shortDetails }</p>

                        <Link to={ `${process.env.PUBLIC_URL}/pages/single/${blog.id}` } className="read-more float-left">Read More <i className="icon-angle-double-right"></i></Link>
                    </div>
                </div>
            </article>
        </div >
    )
}

export default BlogTypeOne;