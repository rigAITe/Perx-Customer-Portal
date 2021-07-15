import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Carousel from '../carousel';
import { monthTypeOne, monthTypeTwo } from '../../../mock-data/data';

function BlogSingle( props ) {
    const { blog } = props;
    let date = new Date( blog.date );

    useEffect( () => {
        showContent();
    }, [] )

    useEffect( () => {
        showContent();
    } )

    const showContent = () => {
        document.querySelector( ".single .post-content" ).innerHTML = props.blog.description;
    }

    return (
        <article className="post single">
            <div className="post-media">
                {
                    blog.pictures ?
                        ( blog.pictures.length > 1 ?
                            <Carousel addClass="post-slider owl-theme-light">
                                {
                                    blog.pictures.map( ( picture, index ) => (
                                        <Link to={ `${ process.env.PUBLIC_URL }/pages/single/${ blog.id }` } key={ "blog" + index } >
                                            <figure>
                                                <div className="lazy-overlay bg-3"></div>
                                                <LazyLoadImage
                                                    alt="post_image"
                                                    src={ `${ process.env.PUBLIC_URL }/${ picture }` }
                                                    threshold={ 500 }
                                                    effect="blur"
                                                />
                                            </figure>
                                        </Link>
                                    ) )
                                }
                            </Carousel>
                            :
                            <Link to={ `${ process.env.PUBLIC_URL }/pages/single/${ blog.id }` } >
                                <div className="lazy-overlay bg-3"></div>

                                <LazyLoadImage
                                    alt="post_image"
                                    src={ `${ process.env.PUBLIC_URL }/${ blog.pictures[ 0 ] }` }
                                    threshold={ 500 }
                                    effect="blur"
                                />
                            </Link> )
                        : ""
                }
            </div>
            <div className="post-body">
                <div className="post-date">
                    <span className="day">{ date.getDate() < 10 ? '0' + date.getDate() : date.getDate() }</span>
                    <span className="month">{ monthTypeOne[ date.getMonth() ] }</span>
                </div>

                <h2 className="post-title">
                    { blog.title }
                </h2>

                <div className="post-meta">
                    <span><i className="icon-calendar"></i>{ ` ${ monthTypeTwo[ date.getMonth() ] } ${ date.getDate() < 10 ? '0' + date.getDate() : date.getDate() }, ${ date.getYear() + 1900 }` }</span>
                    <span><i className="icon-user"></i>By <Link to="#">{ blog.contributor }</Link></span>
                    <span><i className="icon-folder-open"></i>
                        {
                            blog.category.map( ( category, index ) => (
                                index === ( blog.category.length - 1 ) ?
                                    <Link to="#" key={ "category" + index }>{ category }</Link>
                                    : <Link to="#" key={ "category" + index }>{ category }, </Link>
                            ) )
                        }
                    </span>
                </div>

                <div className="post-content">

                </div>

                <div className="post-share">
                    <h3>
                        <i className="icon-forward"></i>
                        Share this post
                    </h3>

                    <div className="social-icons">
                        <Link to="#" className="social-icon social-facebook" target="_blank" title="Facebook">
                            <i className="icon-facebook"></i>
                        </Link>
                        <Link to="#" className="social-icon social-twitter" target="_blank" title="Twitter">
                            <i className="icon-twitter"></i>
                        </Link>
                        <Link to="#" className="social-icon social-linkedin" target="_blank" title="Linkedin">
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link to="#" className="social-icon social-gplus" target="_blank" title="Google +">
                            <i className="fab fa-google-plus-g"></i>
                        </Link>
                        <Link to="#" className="social-icon social-mail" target="_blank" title="Email">
                            <i className="icon-mail-alt"></i>
                        </Link>
                    </div>
                </div>

                <div className="post-author">
                    <h3><i className="icon-user"></i>Author</h3>

                    <figure>
                        <Link to="#">
                            <img src={ blog.profile } alt="author" />
                        </Link>
                    </figure>

                    <div className="author-content">
                        <h4><Link to="#">{ blog.user }</Link></h4>
                        <p>{ blog.userinfo }</p>
                    </div>
                </div>

                <div className="comment-respond">
                    <h3>Leave a Reply</h3>
                    <p>Your email address will not be published. Required fields are marked *</p>

                    <form action="#">
                        <div className="form-group required-field">
                            <label>Comment</label>
                            <textarea cols="30" rows="1" className="form-control" required></textarea>
                        </div>

                        <div className="form-group required-field">
                            <label>Name</label>
                            <input type="text" className="form-control" required />
                        </div>

                        <div className="form-group required-field">
                            <label>Email</label>
                            <input type="email" className="form-control" required />
                        </div>

                        <div className="form-group">
                            <label>Website</label>
                            <input type="url" className="form-control" />
                        </div>

                        <div className="form-group-custom-control mb-3">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="save-name" />
                                <label className="custom-control-label" htmlFor="save-name">Save my name, email, and website in this browser for the next time I comment.</label>
                            </div>
                        </div>

                        <div className="form-footer">
                            <button type="submit" className="btn btn-primary">Post Comment</button>
                        </div>
                    </form>
                </div>
            </div>
        </article>
    )
}

export default BlogSingle;