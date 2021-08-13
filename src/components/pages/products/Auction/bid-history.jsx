import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './bid-history.css';
import { AuctionContext } from '../../../../context/Auctions';
import swal from "sweetalert";
import { isStateHandled } from '../../../../utils';

import Breadcrumb from './../../../common/breadcrumb';
import NoticeContainer from '../../../common/partials/notify-bidder';
import Pagination from "react-js-pagination";
import axios from 'axios'
import SuccessfulBidModal from '../../../common/modals/SuccessfulBidModal';

// import Image from '../../../../../public/assets/images/products/bag-1.jpg';

function BidHistory(props) {

  const { singleBidHistory, singleBid, placeBid, placeBidState } = useContext(AuctionContext)
  // const { refNumberrefNumber } = props.route.params
  // console.log('PASSED DATA ', )
  // let bid = props.location.state.currentBid

  const [data, setData] = useState([])
  const [currentpage, setCurrentpage] = useState()
  const [total, setTotal] = useState()
  const [perPage, setPerPage] = useState()
  // const [point, setPoint] = useState()
  const [currentBid, setCurrentBid] = useState(0)
  const [minBid, setMinBid] = useState(0)
  const [inputs, setInputs] = useState(0)
  const [ref, setRef] = useState()
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [auctionName, setAuctionName] = useState('')
  const [auctionDescription, setAuctionDescription] = useState('')
  const [endDate, setEndDate] = useState()


  useEffect(() => {
    singleBidHistory(getAuctionCategory());
    singleDetail();
  }, [])

  console.log('LOADEDDDDDDD', data)


  const getAuctionCategory = () => {
    const pathname = window.location.pathname;
    const auctionRefNo = pathname.split("/")[3];
    return auctionRefNo;
  };

  const singleDetail = () => {
    let pathname = window.location.pathname
    let ref = pathname.slice(19)
    setRef(ref)

    axios.get(`auction/single/${getAuctionCategory()}`)
      .then(res => {
        setCurrentBid(res.data.data.current_bid)
        setMinBid(res.data.data.min_bid)
        setAuctionDescription(res.data.data.auction_description)
        setAuctionName(res.data.data.auction_name)
        setEndDate(res.data.data.end_date)
      })
      .then(err => console.log(err))
  }

  // console.log('Current BId ', currentBid)

  useEffect(() => {
    if (
      isStateHandled(singleBid) &&
      !isStateHandled(singleBid).status
    ) {
      swal({
        title: "Oops!",
        text: isStateHandled(singleBid).message,
        icon: "error",
        button: "Ok",
      });
      return;
    }

    if (
      isStateHandled(singleBid) &&
      isStateHandled(singleBid).status
    ) {
      setData(singleBid.data.data.data)
      setCurrentpage(singleBid.data.data.current_page)
      setTotal(singleBid.data.data.total)
      setPerPage(singleBid.data.data.per_page)
      // setPoint(singleBid.data.data.data[0].point_name)
    }
  }, [singleBid.data]);

  const callPlaceBid = () => {
    console.log(ref,)
    const data = {
      auction_ref_no: ref,
      points: inputs,
    };

    // console.log('BID DATA ', data)
    setShowSuccessModal(true);


    placeBid(data);
  };

  useEffect(() => {
    isStateHandled(placeBidState);
    if (
      isStateHandled(placeBidState) &&
      !isStateHandled(placeBidState).status
    ) {
      swal({
        title: "Oops!",
        text: isStateHandled(placeBidState).message,
        icon: "error",
        button: "Okkk",
      });
      return;
    }

    if (isStateHandled(placeBidState) && isStateHandled(placeBidState).status) {
      setShowSuccessModal(true)
      singleBidHistory(getAuctionCategory())
      singleDetail()
    }
  }, [placeBidState.data]);


  const handleInputChange = (event) => {
    event.persist();
    setInputs(event.target.value);
    console.log('input ', inputs)
  };

  // console.log('POINT ', point)
  // console.log('CURRENT BID ', singleBid)

  const myImage = '../../../../../public/assets/images/products/bag-1.jpg'

  const loadRow = data.map((res) => {

    return (
      <tr>
        <td>{res.name}</td>
        <td>{res.bid} {res.point_name}</td>
        <td>{res.created_at}</td>
      </tr>
    )
  })

  return (
    <>
      <Helmet>
        <title>BID HISTORY </title>
      </Helmet>

      <h1 className="d-none">Customer Portal - Bid History</h1>

      <div className="main">
        <Breadcrumb current="Bid History" />

        <div className="mb-2"></div>
        <div className="container">
          <h4>Bid History </h4>
          <div className="row">
            <div className="col-md-8 col-lg-8 col-12">
              <div className="card cap-table">
                <div className="card-body">
                  <div className="row">
                    {/* <div className="col-md-2 col-lg-2 col-6">
                      <p>Bidders : <span>10</span></p>
                    </div> */}
                    <div className="col-md-2 col-lg-2 col-6">
                      <p>Bids : <span>{total}</span></p>
                    </div>
                    <div className="col-md-8 col-lg-8 col-12">
                      <p>End Date: <span>{endDate}</span></p>
                    </div>
                  </div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Bidders</th>
                        <th scope="col">Bid amount</th>
                        <th scope="col">Bid Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loadRow}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
            <div className="col-md-4 col-lg-4 col-12">
              <div className="card cap-table">
                <div className="card-body">
                  <h5>Item Info</h5>
                  <div className="row">
                    <div className="col-md-2 col-lg-2 col-2">
                      <img src={myImage} alt="" />
                    </div>
                    <div className="col-md-10 col-lg-10 col-10">
                      <h5 className="ruby-tag underline" style={{ marginBottom: 0 }}>
                        {auctionName}
                      </h5>
                      <h5 className="ruby-tag underline">
                        {auctionDescription}
                      </h5>
                    </div>
                  </div>
                  <p>Current Bid</p>
                  <h5>{currentBid} {""}<span className="ruby-tag"> SigmaStars</span>
                  </h5>
                  {/* <NoticeContainer width={'25rem'} /> */}
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-12">
                      <div>
                        <label htmlFor="email opacity">
                          Enter your maximum bid
                        </label>
                        <input type="number" className="form-control" placeholder="Bid Amount" required onChange={handleInputChange} />
                      </div>
                      <p style={{ fontSize: 11 }}>Enter {minBid} or more</p>
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                      <div className="mt-25">
                        {/* <Link to="#" className="btn btn-primary add-cart icon-shopping-cart" title="Add to Cart" onClick={ addToCart }>
                                                Add to Cart
                                        </Link> */}
                        <Link to="#" className="btn btn-primary add-cart" title="Place Bid" onClick={() => callPlaceBid()}>
                          Place bid
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: '20px' }}>
          <Pagination
            activePage={currentpage}
            totalItemsCount={total}
            itemsCountPerPage={perPage}
            onChange={(pageNumber) => singleBidHistory(getAuctionCategory(), pageNumber)}
            itemClass="page-item"
            linkClass="page-link"
            firstPageText="First"
            lastPageText="Last"
          />
        </div>
      </div>
      {showSuccessModal ? (
        <SuccessfulBidModal
          amount={inputs}
          messageTitle="Bid Submitted Successully"
          messageBody="Your bid has been submitted"
          // currentBid={product.current_bid}
          refNumber={ref}
        />
      ) : (
        ""
      )}
    </>
  )
}

export default BidHistory;