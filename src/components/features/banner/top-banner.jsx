import React from 'react';
import { Link } from 'react-router-dom';

function TopBanner( props ) {
    const { isBoxed = false } = props;

    return (
        <div className="category-banner banner text-uppercase" style={ { backgroundImage: `url( '${ process.env.PUBLIC_URL }/assets/images/demo/banners/banner-top.jpg' )` } }>
            {
                isBoxed ?
                    <div className="row">
                        <div className="pb-5 pb-md-0 col-md-5 col-lg-5 offset-1">
                            <h3 className="mb-2 ls-10">Electronic<br />Deals</h3>
                            <Link to="#" className="btn btn-dark btn-black ls-10">Get Yours!</Link>
                        </div>
                        <div className="col-md-4 offset-md-0 offset-1">
                            <div className="coupon-sale-content">
                                <h4 className="m-b-2 coupon-sale-text bg-white ls-10 text-transform-none">Exclusive COUPON</h4>
                                <h5 className="mb-2 coupon-sale-text d-block ls-10 p-0"><i className="ls-0">UP TO</i><b className="text-dark">$100</b> OFF</h5>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container position-relative">
                        <div className="row">
                            <div className="pl-lg-5 pb-5 pb-md-0 col-md-5 col-xl-4 col-lg-4 offset-1">
                                <h3 className="ml-lg-5 mb-2 ls-10">Electronic<br />Deals</h3>
                                <Link to="#" className="ml-lg-5 btn btn-dark btn-black ls-10">Get Yours!</Link>
                            </div>
                            <div className="pl-lg-5 col-md-4 offset-md-0 offset-1 pt-4">
                                <div className="coupon-sale-content">
                                    <h4 className="m-b-2 coupon-sale-text bg-white ls-10 text-transform-none">Exclusive COUPON</h4>
                                    <h5 className="mb-2 coupon-sale-text d-block ls-10 p-0"><i className="ls-0">UP TO</i><b className="text-dark">$100</b> OFF</h5>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default React.memo( TopBanner );