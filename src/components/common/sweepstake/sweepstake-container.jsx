import React from 'react'
import Link from 'react-router-dom/Link'

const SweepstakeContainer = (props) => {
    return (
        <>
        <div className= "row">
            <div className= "col-12 col-md-3 col-lg-3">
                <img style= {{width: '24rem'}} src={props.uri} alt=""/>
            </div>
            <div className="col-12 col-md-9 col-lg-9 sweepstake d-flex flex-column justify-content-center">
                <div className= "d-flex flex-row justify-content-between align-items-center">
                    <div>
                        <p>SWEEPSTAKE</p>
                        <p className= "bold black-text">Key West Vacation Sweepstakes</p>
                    </div>
                    <div>
                        <p className= "text-right">Expires: </p>
                        <p className= "bold black-text text-right">Apr 1, 2021 (in 22 days)</p>
                    </div>
                </div>
                <div>
                    <p style= {{marginTop: '0.5rem'}}>
                    $2,000.00 trip for two to Key West. 
                    The prize includes airfare, four nights accommodations at 
                    The Gates Hotel, eight Scout bagsand more.
                    </p>
                    <div className= "mb-1"></div>
                    <p className= "bold black-text">
                    First price: Trip for two to Key West.
                    </p>
                    <div className= "mb-2"></div>
                    <Link className= "blue-anchor underline bold"  to={ `${ process.env.PUBLIC_URL }/pages/view-sweepstake` } href="#">
                                        Learn more
                    </Link>
                </div>
            </div>
        </div>
        <div className="mb-2"></div>
    </>
    )
}

export default SweepstakeContainer