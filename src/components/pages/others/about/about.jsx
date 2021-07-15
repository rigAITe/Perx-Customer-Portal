import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Carousel from '../../../features/carousel';
import Breadcrumb from '../../../common/breadcrumb';

import { owlSetting6 } from '../../../../utils/settings';

function About () {
    return (
        <>
            <Helmet>
                <title>Porto React Ecommerce - About Us Page </title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - About Us Page</h1>

            <div className="main">
                <div className="page-header page-header-bg" style={ { background: `#EDEFEC no-repeat 60%/cover url('${process.env.PUBLIC_URL}/assets/images/demo/page-header-bg.jpg')` } }>
                    <div className="container">
                        <h1 className="text-left">OUR HISTORY</h1>
                    </div>
                </div>
                <Breadcrumb current="About Us" />
                <div className="history-section mt-lg-4">
                    <div className="container">
                        <p className="text-center col-md-12 offset-xl-2 col-xl-8 offset-lg-1 col-lg-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>
                    </div>

                    <div className="history-row bg-gray mt-4 mt-lg-6">
                        <div className="history-row-bg" style={ { backgroundImage: `url('assets/images/demo/half-bg.jpg')` } }></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 offset-lg-6 pl-lg-5 pt-md-5 mt-3 pt-4 pb-md-5 pb-4 mb-3">
                                    <h2 className="subtitle">OUR History</h2>

                                    <div className="accordion" id="accordion">
                                        <div className="history-item">
                                            <div className="history-header" id="historyOne">
                                                <h5>
                                                    <Link to="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        2000
												        </Link>
                                                </h5>
                                            </div>

                                            <div id="collapseOne" className="collapse show" aria-labelledby="historyOne" data-parent="#accordion">
                                                <div className="history-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make .</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="history-item">
                                            <div className="history-header" id="historyTwo">
                                                <h5>
                                                    <Link to="#" className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        2005
												        </Link>
                                                </h5>
                                            </div>

                                            <div id="collapseTwo" className="collapse" aria-labelledby="historyTwo" data-parent="#accordion">
                                                <div className="history-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make .</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="history-item">
                                            <div className="history-header" id="historyThree">
                                                <h5>
                                                    <Link to="#" className="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        2010
												        </Link>
                                                </h5>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="historyThree" data-parent="#accordion">
                                                <div className="history-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make .</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="history-item">
                                            <div className="history-header" id="historyFour">
                                                <h5>
                                                    <Link to="#" className="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                        2015
												        </Link>
                                                </h5>
                                            </div>

                                            <div id="collapseFour" className="collapse" aria-labelledby="historyFour" data-parent="#accordion">
                                                <div className="history-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make .</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="history-item">
                                            <div className="history-header" id="historyFive">
                                                <h5>
                                                    <Link to="#" className="collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                        2018
												        </Link>
                                                </h5>
                                            </div>
                                            <div id="collapseFive" className="collapse" aria-labelledby="historyFive" data-parent="#accordion">
                                                <div className="history-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make .</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="features-section">
                    <div className="container">
                        <h2 className="subtitle">OUR FEATURES</h2>

                        <div className="row">
                            <div className="col-md-4">
                                <div className="feature-box d-flex align-items-center">
                                    <i className="icon-star"></i>

                                    <div className="feature-box-content">
                                        <h3>Dedicated Service</h3>
                                        <p>Consult our specialists for help with an order, customization, or design advice</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="feature-box d-flex align-items-center">
                                    <i className="icon-reply"></i>

                                    <div className="feature-box-content">
                                        <h3>Free returns</h3>
                                        <p>We stand behind our goods and services and want you to be satisfied with them.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="feature-box d-flex align-items-center">
                                    <i className="icon-paper-plane"></i>

                                    <div className="feature-box-content">
                                        <h3>international shipping</h3>
                                        <p>Currently over 50 countries qualify for express international shipping.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team-section bg-gray pt-5 pb-5">
                    <div className="container mt-2 mb-1">
                        <h2 className="subtitle">Our Team</h2>
                        <Carousel addClass="team-carousel images-center round-images" settings={ owlSetting6 }>
                            <div className="member text-center">
                                <figure>
                                    <div className="lazy-overlay bg-transparent"></div>
                                    <LazyLoadImage
                                        alt="member"
                                        src={ `${process.env.PUBLIC_URL}/assets/images/demo/team/member-1.jpg` }
                                        threshold={ 500 }
                                        effect="blur"
                                        width={ 273 }
                                        height={ 180 }
                                    />
                                </figure>

                                <h3 className="member-title">JANE DOE</h3>
                                <div className="member-job">CEO & FOUNDER</div>
                            </div>

                            <div className="member text-center">
                                <figure>
                                    <div className="lazy-overlay bg-transparent"></div>
                                    <LazyLoadImage
                                        alt="member"
                                        src={ `${process.env.PUBLIC_URL}/assets/images/demo/team/member-2.jpg` }
                                        threshold={ 500 }
                                        effect="blur"
                                        width={ 273 }
                                        height={ 180 }
                                    />
                                </figure>
                                <h3 className="member-title">John DOE</h3>
                                <div className="member-job">Marketing</div>
                            </div>

                            <div className="member text-center">
                                <figure>
                                    <div className="lazy-overlay bg-transparent"></div>
                                    <LazyLoadImage
                                        alt="member"
                                        src={ `${process.env.PUBLIC_URL}/assets/images/demo/team/member-3.jpg` }
                                        threshold={ 500 }
                                        effect="blur"
                                        width={ 273 }
                                        height={ 180 }
                                    />
                                </figure>
                                <h3 className="member-title">George DOE</h3>
                                <div className="member-job">Designer</div>
                            </div>

                            <div className="member text-center">
                                <figure>
                                    <div className="lazy-overlay bg-transparent"></div>
                                    <LazyLoadImage
                                        alt="member"
                                        src={ `${process.env.PUBLIC_URL}/assets/images/demo/team/member-4.jpg` }
                                        threshold={ 500 }
                                        effect="blur"
                                        width={ 273 }
                                        height={ 180 }
                                    />
                                </figure>
                                <h3 className="member-title">JANE DOE</h3>
                                <div className="member-job">Developer</div>
                            </div>

                            <div className="member text-center">
                                <figure>
                                    <div className="lazy-overlay bg-transparent"></div>
                                    <LazyLoadImage
                                        alt="member"
                                        src={ `${process.env.PUBLIC_URL}/assets/images/demo/team/member-2.jpg` }
                                        threshold={ 500 }
                                        effect="blur"
                                        width={ 273 }
                                        height={ 180 }
                                    />
                                </figure>
                                <h3 className="member-title">John DOE</h3>
                                <div className="member-job">Marketing</div>
                            </div>

                            <div className="member text-center">
                                <figure>
                                    <div className="lazy-overlay bg-transparent"></div>
                                    <LazyLoadImage
                                        alt="member"
                                        src={ `${process.env.PUBLIC_URL}/assets/images/demo/team/member-1.jpg` }
                                        threshold={ 500 }
                                        effect="blur"
                                        width={ 273 }
                                        height={ 180 }
                                    />
                                </figure>

                                <h3 className="member-title">JANE DOE</h3>
                                <div className="member-job">CEO & FOUNDER</div>
                            </div>
                        </Carousel>
                    </div>
                </div>

            </div>
        </>
    )
}



export default About;