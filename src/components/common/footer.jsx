import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="footer bg-dark">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">Contact Info</h4>
                                <ul className="contact-info">
                                    <li>
                                        <span className="contact-info-label">Address</span>123 Street Name, City, England
                                </li>
                                    <li>
                                        <span className="contact-info-label">Phone</span>Toll Free <Link to="tel:">(123) 456-7890</Link>
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Email</span> <Link to="mailto:mail@example.com">mail@example.com</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">QUICK LINKS</h4>

                                <ul className="links">
                                    <li><Link to="#">Shops</Link></li>
                                    <li><Link to="#">Meals</Link></li>
                                    <li><Link to="#">Cinemas</Link></li>
                                    <li><Link to="#">Voucher</Link></li>
                                    <li><Link to="#">Airtime & Bills</Link></li>
                                    <li><Link to={ `${ process.env.PUBLIC_URL }/page/dashboard/account` }>Survey</Link></li>
                                    <li><Link to={ `${ process.env.PUBLIC_URL }/page/about` }>Discount</Link></li>
                                    <li><Link to="#">Sweepstake</Link></li>
                                    <li><Link to="#">Experiences</Link></li>
                                    <li><Link to="#">Privacy</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">WHO WE ARE</h4>
                                <ul className="links">
                                    <li><Link to="#">Home</Link></li>
                                    <li><Link to="#">FAQs</Link></li>
                                    <li><Link to="#">Contact Us</Link></li>
                                    <li><Link to="#">Return Policy</Link></li>
                                    <li><Link to="#">Terms & Conditions</Link></li>
                                </ul>

                                {/* <div className="tagcloud">
                                    <Link to="#">Bag</Link>
                                    <Link to="#">Black</Link>
                                    <Link to="#">Blue</Link>
                                    <Link to="#">Clothes</Link>
                                    <Link to="#">Hub</Link>
                                    <Link to="#">Shirt</Link>
                                    <Link to="#">Shoes</Link>
                                    <Link to="#">Skirt</Link>
                                    <Link to="#">Sports</Link>
                                    <Link to="#">Sweater</Link>
                                </div> */}
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="widget widget-newsletter">
                            <h4 className="widget-title">FOLLOW US</h4>
                                <div className="social-icons">
                                    <Link to="#" className="social-icon social-instagram icon-instagram" target="_blank" title="Instagram"></Link>
                                    <Link to="#" className="social-icon social-twitter icon-twitter" target="_blank" title="Twitter"></Link>
                                    <Link to="#" className="social-icon social-facebook icon-facebook" target="_blank" title="Facebook"></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                    <p className="footer-copyright py-3 pr-4 mb-0">&copy; Customer Rewards. {year}. All Rights Reserved</p>

                    {/* <img src={ `${ process.env.PUBLIC_URL }/assets/images/demo/payments.png` } alt="payment methods" className="footer-payments py-3" /> */}
                </div>
            </div>
        </footer>
    )
}

export default React.memo( Footer );